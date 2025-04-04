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
    "53TPF4Dw3pmA4nhFzkh4HgZc4s6kXu4wqhe9eWEJPmkCW3S3SekaymJqn8nG3ZCr98HSJndanmiriNWRChGwyDLb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AeeRCWGTkDnAi2EkC9UJ7LmSjrjp6QDSZYouoi1gwDCijNpGbXsdt2i3KhxicC8kceS3uyhxrevu7LRVXCUaGjq",
  "key1": "4Av4oszGqYog5QVgRHAWtYuFQmv26vU9yUWA74r1iiHvXco7VK1Yzb9w2Zq2kYAsjPAw3XzVDdcaF6wxqcsRPPde",
  "key2": "2cwqMMpRJbpKzji42VhorB5M2RczX7mcrdAm38NqnmXvNiryJ5bJjmrPToWhJbEwyLfiFC1vqdwSPas5URh2je1H",
  "key3": "oAfjMnKGWcQkih9BssiN2xsrrhBZRYAhoBQtocRQ8k5qUxdYCp2Uuy7A4wGGStPoLR1EU4u4cDrexrK3uoe27nW",
  "key4": "3C1mFYCJ17pXp6chhxp4aQi4bt8BVWtkU2C9orSoXusamCL2AMVMTHa6mcGNq7zdBUhKWHC15rUWPcC6YvHaq8Js",
  "key5": "4PxRbhbtQYdj9LdDeQ4DveArArUHuTAHp3qk6f7HSevJ3E6wzXjEowGHLJ2v7dTLfgb1CphghicBqVgeBc6R7kUn",
  "key6": "4p3hy95Bfof2kJvhMSxetpa7rFVhXpho3mjksZLduriLKFMVroqYzyRkypbqWpPzQZ6bXjP494k1oDTcNKYmhWF6",
  "key7": "51RdNckDz9LqCJZe1cgQjnuENoHTLeB85y87w1zX1vfb2TE9UWYLRTybmyR9UagP3yAxJ8N4suG6oLkcK9jy88HZ",
  "key8": "3Tp6ywEUJj3nvRNraftFiXoZCq5dXbmKrCt8ezHmWtVBSDpanPNMGokDXUhMUAk5UQXdTZdFQ96FCHvG8Rb7vPXR",
  "key9": "2tkbHcFh2qSZ7585VSmR77yrED53iMLvQYd3ndGcWHPW7a7Dve9rdaVjoQ15B8WAHZKoNFujnQ2W4gZx8c7TzBSP",
  "key10": "5APMWtw427UQNeTdT3TB8B6FLANSuBgSuyGedEzwvxQV4wnJ7Uf5p2LfpnggrRhYf4q8iKe4N5eZrTj3XxrmoSFN",
  "key11": "46D9DtsGMvU4mYNzdR44Hvy8y8rBcRaqKkvX93UDE9XakB6H36KeJpUxtWGNTJf7BSQdtod5vySJJ82enHnhZqjn",
  "key12": "2zqahQt5oBy3j2UhXe8U5586n84LfAqRieYV1NNZXPBj11ya4Hg5GSGMwycmehjdwDMRECem2KKXFJFP8CBr5yuQ",
  "key13": "3rsZC617ofRYqtwtGJdGV3BYAyZDghnXFjrAFQKgcT4g2T8wSKyvK6NkKw5rneXBEC66wLQkLThxzTxJH4Cpxjdk",
  "key14": "4BEnDvnnFaxqKXXgzZMKWYhWmYCRtBTE9nh9jrGiV5R3VZZnP1oaFe4nALocbwAXRf8YrT8FShTHpLnzRorm72pJ",
  "key15": "4hx9EJ7ZALPP7jonTfJmJCiSLoJsggX7BdrdWTGqiwgb3utbCjJRSc9wKubvVMDEsbkRZc4UtEFPSbyvNFADKkuE",
  "key16": "35ZgAje12UfEWeo7iRMRrXYEooau3UX4zdKkF3E6q5TRHP5tqst5ZwHmdMsUgCFqwdZBYRjoCL7XnrXAWHdeSpUi",
  "key17": "24dz6HEj4Eh39W6jFH9RXbXpko5QFVmjZxPSHjqM5sG8Vdb2vPumsPPNBhbt36ZtfXa51Bbcp9oLdkG7XuQaKvmH",
  "key18": "2oZTpUBsLH3P3UVMJBDX3iXdgeCJDzMJDwypUgDozpBT2BJn4zdyHGF3tSBsN5CmVLYNA38t52bfnyMKQz71CCbv",
  "key19": "3S5oYCDQtndikmqZ9tQMx4ZMgRNbuJbJJrWDEYKHZvWSZydsWi59ZJvcD7HbtposYjV6yxW4m874N1JsxfnEEpB2",
  "key20": "22gcSf3w9cPFin8q6Lvo2BoEBbU1q4XX5uP1DmK9mW2z42UCxqddptku3eG1sr7VDjjfPA96Bah7fmgrQk36izPz",
  "key21": "4o4FzJh5NDQfLfTHToqqqTiDqdamwRXxA531Yqc4fbjrYjLZUao1xsC7hvuXwsBzvBuEhUyixwQjk7sNbaS6B5t3",
  "key22": "5tjGgdu8sWhocZNCjZDVtgjkTTZLiyVG4tPNHnr8dKrgPDcmeFsNmPUBhbv3oSqJRaC3hY74qQ79nRZxYPYjoGKy",
  "key23": "5HLQWoxMZJZ86dQ4JCtrdM4tEUpmEKSUbADEQy7YWH54oeZsrsB3MhrBXNrwW4dh8cBxumS9Rt5iCRdgsNyDCgsq",
  "key24": "3UUmSki5vj5BcLGXexVCS2rcDCtc46DWfXpky8EEM8PdgXLAUNYUdFeeDBQnaULiBUqtfWrWngwYnpBbtXukE1Ku",
  "key25": "4He6zGUUyy3ZnCYLn7bKvv72ijGh7oPZQTmpoqWk2kc15kgWQVaocPst2KRyyeAvzswrH7ZXSe3nmD1qjE5WAm9q",
  "key26": "4vWd8oCjbChEgv3hAcxFNcb413y97zowvnt9KAxRRWGPceGzzxzU3Xaw1LXRf9sg2CYaUNJY1gorZok134Vqzok1",
  "key27": "c2sncCc1qEtk1xawfpvDWxoYEganDxGvitKhB1WeCQazv6mMeKCQYbPpfKMiDUy3QbMQ3qKWa6x9B64r5T3j1v1"
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
