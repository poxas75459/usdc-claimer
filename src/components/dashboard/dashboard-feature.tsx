/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "2sPaKt1PdRCz9K7CDTGWZT8jnNLHhA5ybSpHAjCtTSqzGSKMAEC1KMJvq4ZezVDeLAk6eHMeQuR3wstbDbfJJpiG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3X3T6oUkfpjGurhoim6G2dkvBwCKiFQ3ykos5Z2WVqbT5MpP8NYivPMLK6H1fCPTC1GL4cbEtwhXwNruxsnt6Dm9",
  "key1": "34U2ebbJtazSZwmbGeDuqn53awfwaFJqa3X2EsfNfJZCKGN3LJTYsF8oXXEWV4ypjP1Ah9iGp3fqQuRB1SCXBuqf",
  "key2": "3nvK9eYXpU6kF8BiWxNzucRPyWDHGQm4pqUizhaSDHuSXhnyu8AYZdm1aoTUHZLSQbmi3YW8hoxzYfUp9tTRSJCk",
  "key3": "2isoxuz9xdpDfmKRqT9xzfHoEtJsy7xuYwLiMijYbFqjgdc3opheFBqKF1tL6gd2QZzPwfhSU4res5DuW9tJ6KvL",
  "key4": "SvD4duU1QzX45XqBgEMTRp6aEnmN1D6AJUcDaoa9tiA5JLg36tZy8xnMneRMh43bDDcReEPrfNC7qUbxaKPLsaf",
  "key5": "31KFPa8cH5vM2EELLQ4gbH5XK68kb3ZCryiSGTWLyZwMBVSnENPCz6ZmmMNej8s956Rav2dB9waZ6VSVU8rRDoni",
  "key6": "2m8BZYFtdwkLEC4qKJ4saHq6zV3mQknxdc5uc94cdngrE1GHFA4JWVZ5C3e3tSenStgvcMRuSTqyQyZ4h6ugtMsz",
  "key7": "2KfitwBsWGQYALvyktQ1Wvis4Wcw689XnhzXXJgyV5ARt9Q8h7z8z9bf9Cdi9rYuYmmtKnk5rGh9xDmiJ5jtYm5W",
  "key8": "587rfb1eoW4L4qdGE5GRo1JeUXae9bvASsgR2XhSRHaUBiCEoKgGkAPaT7U7JmProGRsZ1FssHsEumPRGmBcA9Fb",
  "key9": "4V6MiaWgSdQKaHw3p4jUGRLqDVgBe324P1gHZXr1t9eBy8kHtqzrnBei4bbBHdrw1RNDoj9ru8FKbiKr8wwbAcqy",
  "key10": "zFf3w3R3ZXVKRRqtzxLxqE3REzEHC5mHnZk6SEijg4yGZf3qxCc66KSJ6jvQWWt7S5RkY8Cvh2WJqEDtysvuao7",
  "key11": "5UfL19g5ZFdEvqMu4idW9wyRrxpUtFxVQZmg5uxfJu7LuXXGvW5uZuGsBWHes4P9bnKzaP3M7d2D2Pxwov6J9qjR",
  "key12": "2EKGvr7FLtttsP7GzksUt1rcs3Xn66atz7y46jiLRtSk6zScq1xqwQR4bFzYnGqNvaTeoo4cHvkvYxE1Zw2YdxTN",
  "key13": "46E4LNWVyy13io1ik7uEdHNGCKtJbapD7DZsCXbkxdRHnxy3o57xXHEv3EEcm4pb6aBYWZ7NvHCRLnQLBayTmj3N",
  "key14": "3BvgBsqdDiaS8qsjUgZXoFMBQZeagC7rvijMXahuq1Mx9BmpJAxgGzAeSSYw4br2ZE2NqV8KeXsqqTC3XgAVR5RC",
  "key15": "4RbHp3PBy5TjyMN3g1rcZMJpTQaCjNf1qTba4HQJXWZq7d8iRGWwqy1q5TFej7GoaD87z2m9hUKQABbo6mHNATBx",
  "key16": "cyMmsPbSFmBvX2ZthVD4vrEiryMouuLspEdhUZfdMEGyRLJjLBNqqJZWmF1TsxMvLdSszVdR1yksrypKgMtTNdo",
  "key17": "2xCdutNXNpt2qcwGQWRxFBAJh3M2Hc9nznwRacdkiTZMJYSt3PNburLyYBmJUGuCG7JHu1YvgSUfdhSNp5Y5NifF",
  "key18": "3PptTf3ZtxwE8Qw3X2GSxApHRFqQrQ38ii1F9cijTC7GyDBDgTy2AMBbciRPZFNe1k5JBfE1Hve52J9boFXT2oQf",
  "key19": "2EDJX8pn2kJgRkqDy6aHwS1tdzatu6spZeXWis5Dy87LsUC1h6BEMjshe9PirNo1LRWsxF2bFD7i9mmFH9rGfQN",
  "key20": "43pvwuJKj38eXCTDa9x8HVkqMeatEH9SHJvk9nb3A48vZVhWRQZ9TuDcbpdhrV8qUkpFL7yHxdJrGsSSwL8yRT3p",
  "key21": "5WQeqSJAdNkm9aXcXzKxmCQ8Bpxzee3TtZT1dxPZf1UDVdUqbV7CRPver18XCuVYqWqWk7PKjy6fVfch9d8CTEsi",
  "key22": "kApRDBdmjZafAaJGs8DU8dodGC1bG12Sw8zQxwWDzPxbaoVxGEqRXw3DjGa3M1iXd5cQVpDXMN2kAoCFPFGwnfi",
  "key23": "5cET6TjCSGhgYxsEzdWbojcx19NJ3hrMQoRxbTkwQm5uibpUVE6zCMG9aZyy3Fn6TGL8fMrBX9rSZZbSvqoYHHTE",
  "key24": "4zAgMHmqyNex8DjfBsayYBi32ACzbEPJ7CWjdaqeAjEvBE7Vf2YUYoB5vtTfvouPEaA9MVEWC4cmokXhaTfGNELT",
  "key25": "5MGqfkV635jd8oq5oZsDwHxtwk47uD4VgxJULdMYBJyAxM6EkkeQF6oMYr9gGUKtDbGBbgu98QTVLFfNm2YiBFLH",
  "key26": "3nVFFCPCUcaPh4eYbCTx2JLA4MZqQBwDzDAvJbAJtuFRw7E3WwLv1NA7zeTurer1vJKTUJu2UQAJfWaungcy376b",
  "key27": "ghiZnqd41M5Zm5DBWF9GDn1yHzV4QxMaJ2AUHd3wMpQgKUw3bxcrdiu8b5GNyiYQb9e9ZJaoVaDc5WfJ7nRLcHB",
  "key28": "5uWRCM4eZga8pex1DtAoswoeVwiau1X8pTn8J4gzJJqqN9J1gQM84Tk3zsLAs2aLkPUFv7j7Y751hrsEGyTojveW"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
