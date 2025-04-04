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
    "Wtkjx7gRmUb88P3TkNDk9nk2ovjzYijMvnZ5uyDcXpTGeBr2zZarmNQmNxjCo1V3LM4sLmLY25khCUKnyBfAKDb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Fsasn1zC3k8CYyorgSp9feDuhwnA2PRiAW5qSdwLG2hoyL4SRCkBLpBVZyQwtpeLq9K9QG9XcgNz8CDZE1Re3Z5",
  "key1": "4XnusiBxqtqghm7C75adUkrQWiZb4PargUXpqqPpV7SdKrTiETuoQ1DUGANjpxHvWPkXaCShifWRwNKN1At684QL",
  "key2": "2azf7W8CymNku5n5VnPyiyeSQwXxGpYN8zbmEEYDze3yuhnVYc2X3DSD67BFAGJrXHE5TYtXAQ2HeLrTev1Ea4ot",
  "key3": "3bcHhun3vUrpTXbvUPEdJytC271Zqxyrr6heib8rH9UWTG3MGKgLn47oVYq9FWFQ7wLCYnSkcWsJEw9TtTAaRYow",
  "key4": "3rkcujXzR1M6Drnk44c7YCS5WuhtgVgSueiSqa6xTN3dSLwV868mXtB1pEzJRgVReUjpD4cqn5aqTDbQ7o84EEbi",
  "key5": "4YMQBzkSi5dPqxeRwPDZ8F5LXnKw8yZ3a9Y5n4Q8H3sbo1T1J6uLPWV7VMjGEADM3J6EPDwinX19rmNqEXbh2rMy",
  "key6": "2pkZLAj6Xj6o2EJoQhXqh8vkaENvzBmNwmYUHfp9Rn7pbgwdRvZpYQ7aPQ8iu2FAyJoV1wovtxsS6bzAoY1HSYui",
  "key7": "3dX92rSFAVvn7tvLSVgUfA49rUfBbx2Y8gQ4y6JCggKgpiKEpYHjXNfQQ5Bc4sfdmtv9j4mR3SicHwdtSQDYBrnR",
  "key8": "QPADBxJLb6YyH3VFkrLejUJYedPLrXsw2nkP112JWfZ1p5DEoZdCEqGX1yoyJXch1zdG6kJFXNG1LK2PskcVy4A",
  "key9": "Vz2aLwBWdyvHsZT1w1SQCBe11WnqpgoYXm199J7h1X9esZ2XV6jS7NYcSCwa1itBZ7PChRxmKkccSjsedRUPMuY",
  "key10": "3Htb8fyfBcsN47o8c6otZntsQGa1VZHVee7z7d37ntABLNnLKhnxeUkcbgEL37UBt2BHr8xctWPKTzvSV5VN3D5K",
  "key11": "4LTeBdPXDDC23Yn971qZjEF1TfagibcEVgUrR2nJmx2wSFZZ9pgfsftUpVwWEeP5kTGQBdibPH8Ru7G9BF6QfbfY",
  "key12": "455FmTAz3NW85r9ditJH3XoUeHMSDonYRP3eyo5gfiMJv8DWJvJuNaQNQ7zA5GMPaGNSqEXmxb3iSpP8Z2prTSVS",
  "key13": "3763acrBLwHgMHXwgrPLDMNUwpKmo8t9qAmuscbzvzCVc9fAkoktt7uFmJqMHUcg1YhvfBnXYWULbfVfSCtVi3D5",
  "key14": "3YTd9iMnfNHnwHxDngWBc9c1uqWzCzRpYMYRcm6MoFF7kjzrPzaBa1uYPxQrCSPSJDkMiHJ1ro7ycy6pT58J5hr4",
  "key15": "3enBWf2X1ksfRbnmxweanukjVqwRhDohDABoZfAYJP9LDkZc5NF6JnhLJWUYqAH7ffFmNdK9w63mbYNK5AzTaJFY",
  "key16": "tKAJZymhuYn11rBBaVn1Wbng2KsxCn7WcFo3RwQzxTyvKAzRVJgCtEENkDQLrzUA6q7a7y4d62AxVZGQMsFrVDc",
  "key17": "Hzvbv6Fh8GeYqrhXD1qesjqGN4T5zju5fG5wLAXW2gHvaNHyfS4rQatFayppEVPxPhKwfToJDA63Mn6YdbNGoU2",
  "key18": "2hiDqUdJAhUWPSgUpM4PzJv86eTMPKuJYJ6Peci7Z7PHyZnPymW52M4T9C7Mo7Vpjh4zCRyckmjJHG4ZANpN39yt",
  "key19": "5kbJhnZ7p1w6k2smyhQRreKneiTUX7HkEDuWftmimp9Soruoi6u3FtKphEryfd7iihxPrXTzsXEDND6swYcZvJJV",
  "key20": "hetD9wtCsFndR9wdZQ335i2LHdUUgHadMYjXidynR795ibfFTzJEixa76NHgJ1itZZdNM4y6KTaKSk8jFnUZRUg",
  "key21": "eUfHYVSjVtKXtUgzMFdLT1LfeWnWswgHQHV785QZguUDijvnHHFsPg2tenFy3SS8oJuH9vcYtbLLc7gynheigfD",
  "key22": "2AZi7pXShwzSmUj1EWtvhmtdNuAMXFdHkiDBaKc6M36CpyGWqjuJ5ZjgLhcEVTiS2thjNbvQDpCnjETkxnUU8qpX",
  "key23": "3UA7cZeppZYJmtC6AikcZUnhoU6gidrhgZNipV2Qt9wVBhL8Z39DFp2WyiYv5mP7iEaFRGLEPV4ddxu1NEjaoVPv",
  "key24": "3oj6DjE6kDtRERSJbgndjNvaq6DycFCZkKfpLipCnCxyN54Q1DSxPNtfq1WyFrVUw4M7yxK4gUynrz85jH6GeUWd",
  "key25": "54zyFaZaTUV5udNsDLmwZ7wvUKvi5XQFnzXF7BSnw4aay7Q7oFpfwJrC3Qri5ioXNUhRqhw7kZH1Nn6xXWSeTEmf",
  "key26": "BaoUP1T57uJHQ9mBtNZGNpxT6nWpNd254TWgTASWMTHzQoc6NZwhcxNdsnUyzD4yw4rMGErnV2uXCdjnU28AG7g",
  "key27": "5KSMr7Vn6fmSixD6ibP2fZSgNzGaWF65CxooRHqjUe6Xnbg6KaqtpUnR9zf7wvA8zWznwLLQQ6GrfPNpgjHJqoH1",
  "key28": "3JKd4pun1oHAhNEQGLSxXiVe9fXvuynQ8FYUGzidgrrwcBiQVqK9MC6LkLZVTwVrgcDqr2EoVRwx47JpAjECBJyC",
  "key29": "DBiAMJA1D82xDBwGdAB2zPrMM7o9fixbSkUyoxWADzDdit3Mhzq3vLiiq4YYibvEFxBwQRbo5yyb49rPmnKCPwz"
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
