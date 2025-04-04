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
    "56qkUn7RGFUb3KCKfVaa74c4okqUrT5yLySvAxJxQeyvtKJURigART59fSoSjuQ1bs5uRB6dz896HiJwdevqUN1j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Fro81NGvrYaogNECb2PGCbAu8AorJnBoSF5NqVgGjxXEKhK1EbQSq22RqqmZ8maU7hYbx9zAcUP846sNwsMYm3y",
  "key1": "4sjL3UHetWDLEPcVPeJvvChdWSYyheWg7abXrQMFpjCJmPYn6SY5stgY7cSegBt7jLzELddK7Hfdv6HDwHoXZmFb",
  "key2": "4RPeYpndW7g6HjqK4zWUb9ypaH2D34ysyXopxCz8evU1APft3xmVCsVXmSFzAnffTsfApUomyKSmjLFR15KqB3xY",
  "key3": "2U5BNLVT6KHYPMmWBTMZTpTnNiWmEC6tfqCKk9ooLDPAojzfeBzC73Wq8mfgkj7Lx1ixVmaYeZ3dRE28ZpCCZAc7",
  "key4": "2NpAzaHCq6qzwzTPHXtwGDcRDmBFCdYJ9Qp82YKxaCLrmVnSD8QftWXLTTUSDP2CJPF6nTDnpWNscdvSWro6yBjW",
  "key5": "2oXzMRMg4kXvucQhZkKFTciMX67f79MUv4Pa1M4nQDNxkk2QewueEPgoVba7BWgiMgrHmDpHczTXJfP91g1wWkaQ",
  "key6": "5vM79kybKHb9HfE183AmfT7c65hjaQTARHygGXpy8DS3MKAyu1bgoZru6yHPp1RMLb3HhA9Syn2hDS353ShurDoT",
  "key7": "GVqiMtGrX9ComFP3RwvxdyFn9HE6261twSM2zeNjnm4NyVwpVbjY44juG9z2omc3k5oV8JHwncSQMVWb5VcrTf6",
  "key8": "24hqxL7fAtXhKhgEvWDkLxUjx4FLd8e2HQPZuxRebAwd7FfT4yez6CgZW3yawtGdLHHMMabrzK6CLtqY9Mpg8dXv",
  "key9": "2ZMnCihpYwQ7Z7Y9QTnRCX491HrYGoVnzREKtpQMp14bygsA8pDoqADvNLVYHVnPSikoE1biPZb14q87Y3ytiKoX",
  "key10": "3vE6hHcYUK2XPzjxaiEGxvBsd3JaNF2hwgoayYnU9ddr8QxPjX6omrL8SfL4xRUddzWUhpVvqyduqUrSdwoPM1BN",
  "key11": "3vUkY82bqjfaS53XseVoJuW6gj3GZgPQjbacaNEyDYei4qWBcx6WRAyR3oWSikjUMqJCMrUNhgeihvTdoCaUn2XR",
  "key12": "5fXtGznkoJKNne1YkYePjTLG7sqDE1ihxz1UZZbtxFDGkcS7PL4ps4yoDVoSSMumeYtsS9RkM1E8b13UV8T3YUbA",
  "key13": "3kGfW2E1EmUK3vN3yGvAPbgt1gtjyg5h4gXxebC757xUK2b7cqSmKhMRv8DtwxKsWuFpjK1a6aH61BnKkB4PqhnW",
  "key14": "5ADUgrTqLWs6jc8r5rhieUwUUAwQjH4kMWqhmw2zKrMECMpQfrYyB9nshEWU12WwdvW44ebZKPqJAzPcMDHvyT6d",
  "key15": "4wmF6RnuiTqobRiGxvS396Dymc3gauGg5ddpiEGJd8iuU9iMD7dBihXs7aH5RPP1L19ALfvwT52pT7rKK8QHqzjm",
  "key16": "2Bkg7oN25v4o8V3s8PXQEuS3e5tt26FHTh5itkXmymowXKEtpjNivwJMjybi23kGdUM4azKEuUucYiGyhijgKPt4",
  "key17": "3b6VRdZ9Lk5HqQAvKTTXMTkfHPAw2s2Dm3evYwUwtpEdqfMMBKhXhvCP5t4ubWckyDoqsqoPi7DbhTWh5Rbp95L5",
  "key18": "TarK6TPQkf8LsdujtSSGEVRsEfK1G6n9NF4tq8nhEoXS8b5ZuKdK1TKdWfNwo83wShk4BfqbGHxY621GggHBV21",
  "key19": "3xtk14LURyTKppDSruNS2TFrB2wVrRL7CgTTME2eQ2f1QJp9QV5ZU6YJSnfqXmmJZRXisU47YVqFfrJdrEp4kiYx",
  "key20": "WqhYPimAUTwcyGtX7Jrr2dghsdrHV7Rs1ZipjpwiZQQFywQtN6WSsTvYc9ctUAREDRjRpZWA7pSzzcujhMbRFY1",
  "key21": "5nMoEUQLC8yRdZukbadpxkBmLHqgvzHSNBAqniDT6Qx7ZpCbSt5Ry5KeWAxgjrXowDorkmp14dpvPLSPE8PELykz",
  "key22": "5TWUoCj9zmiMaG8qUdtZnApDMbjBwppJ2FTwzfTCuZZgpULWGpCwA36KtBRfRVL4UhQtXMuWiNXCHojMseW5JQJn",
  "key23": "4dZ1A4B6wFa3YvxQwZMjj9c6E6Nh6Bb7qdjMnMpHGVNtQJzyT2W5o9wbX5LKC9r8RtjTBTvbKoom3G3822QAWgYQ",
  "key24": "453WDJshXvnAMvH6JXmrU2vT9L2gsdaqzC5Fj4rUN7XpGwWbdv78vXoR6JeNbJ6FMtxj6Apz4vSNA7HWivrr3GLc",
  "key25": "67PTXGDLYD8icYmZvZM1UkigG4B5fqHwnMyiqZ7jd5gE1yC7JVvt79URGHjJtW5eYZy2SKzdJ1HreeZNuNWRhzeL",
  "key26": "mamkby2nTZH1MmH3Trnkrbk5TLJc5U5yAi9ZyEKyiGbY2keTaK4KrTh4WGknkz35Gk5Y9b7Ra5G87f71zq35U8F",
  "key27": "2xnEVHAxiRHGCaUDUWxQcjh2XBq2NbMJM54Y7nqnsc1qyE9HTDh1NdsXWEMtFhUyjYz63GN6vWQXk8kzP8rjXKgS",
  "key28": "2gyPsR2Ze2LBxC5V1twjH7nhsid9BtsoccF5hPT7b4137aPBEaKxrdnyhk1Jh3HNDyYRHMGLY9djvbtay5W5b8xg",
  "key29": "63QJcbFSkh8pPCFzK3gwA6i3oW1xL2FWnq227XimXYP6wPHekG2n6BXY9V1qswjzWNKXujbVWpR694iSjT7xSLDf",
  "key30": "4X9rMDHdGGoqXj6ocjNLBkFaY7yw7mYtaSSpxu8jyPC3HTDtEdwsz7dCiPAEjYY8heJdisWLhvY5vJ5dDDAWyeVu"
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
