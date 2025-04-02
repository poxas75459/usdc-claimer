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
    "5qeXuCLuQWzreMGmNodT2nxZ3ZbEoZdDfcH3xGh7qnKdwmakLS52nQmoVZhkDLTPd1yVxxMt4y1xqx6MhL3KUp31"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PqoopBvFUy2fW3HWkgFDrNsvdhjYgHUUx6ajT1MF1vYWB8F5vhHtE8DcHhQ9tGsSJsNv3cUTq8GB4SGTcSPTEnj",
  "key1": "44LCuoiSr4dNWv7Nj6KDuEVAduMeDGsFg9rxUWGx2aKNvmmyD3WUgrwF1EwGQcsqhkHqdENEY1RzuWUy4GVcouY2",
  "key2": "1ZvmRjMifzzZJMsLTm9uTSHJDPkBhFxbHpZmLcL3dAG4NStnC5z34hZdK2BpeC9xgv5V6eHtD4wkJN3aPeZCBpv",
  "key3": "2qMYU1QU4e9D9mnnbXz6gdeNNoKu6yniiv4pbbvfBUCHkyAQZ1t9UymHbpaQDCsd2Ym758azSrXq8gjyJw8GWJou",
  "key4": "4xhzpxNZVcFXAg8u9S7eAG7uSYMTem7U6S6PDy7FAFNnGqN9YJ2fww8iXnvNMU8X6DC2UKQrV2vp5n61mjXD1sYK",
  "key5": "4W8dv82v2cogE9EczXNC5R6mXurKh7K7zqQHcgqsge7x5ZEJ7JMKWYRZmh4cNocZompegL5txGb485cwX3KgYxBC",
  "key6": "5qNNx91PNJpyjpWTC8x9bYFt9PhM97pfqGbUZcSDy3LYg3xD7rS8vfCw5Q8xVUB6VT1bgGWsR61dDr4PxTR2Q354",
  "key7": "57q3kXpgtJrHhUyzQs4jctHrd68GLAg1Xrm1zNrj1CLoHrwddUso6rPpsxbxbArgSmQ5eiJYdU9pqXvVVNWQGRNU",
  "key8": "4mpUsYsdvSvbtzf42MQJHR29fruz1zkbr2yBu6dk3ATPwUMBMLm151YnRLpJEq4h7UUYjWmyyTQwZrfuuzzixzNB",
  "key9": "28Ac9PEHeuKCAyTCJbJ1z5jSNdbvBH51Adwr87fpEG3EXUR4TG7H6aMmFFjEe6QELS4ZoBYqCNatjhpWsx1MuZpX",
  "key10": "3M7yCaFbEnF7pS6UCUXZxHo1BwrRzc44H2GCxpih171JZkk8bDyfZVG5Sw3RRo36y5zyRob6a49WaNu7CoRArtcM",
  "key11": "5YFK2qQHnBYHvPhDiYwGQgsTzR5Rjq8YNHZVN5hQgGa9coBEgQXxWjXEaLUaQSJmPppts2jH1K7A9JgkS3vAPLGB",
  "key12": "3yNaStgRGqAimPXSuFZbzhfPNdha9kyLCkwxZYjfMC9asUcSB9zNMDTXFzowHDFAGn1DEGy7m4gi3jdtq6BJ1BdP",
  "key13": "tuvFEpXh5ywFdcGUA9WMZNfUGHsWGoQWGvVA3RZEwcDMUvnURZgdcgvUbvCcMQtXU5HjLDehVBvib5bj2Ep9L7E",
  "key14": "4aTLDv7XW6y5kB8XmcjHyVJVR7zDqS7crrsF8BYTbxef23YpjiSwdmx6xe6166TApT8upBRAbKLPBmCNG7nuLhTX",
  "key15": "2tkL2tyJbKzmFQLqEeoHPBkSfUoGDBheVJRnaHakrQLvVJQEfwHMVhtBtavLQxk7RMU5MQy2qCikDViPdBKru9Do",
  "key16": "41BUzNXx7aCoRuWB8sMsz16ezCLhfEUCuV1sP5zrqAvspKLXFphuMm6Ro9RaugkUpfQ1Baau9EhbBkPpQPnpncw2",
  "key17": "5eHhzCMYSrhdUdVjHUtyebT2LX1heBHznxueWriaTrzN65x4rH7MCMLMLhdomqwqCPoYEZrcJQXEuLciCfybMcSB",
  "key18": "39yQt1yez8J9zAxqovgNgZSdqMXpVqtt6rfkAmKZqHoFj4urh6z3VFtmGcMFEpX8jQmc2gEnFb3FZXBy7N3aobhP",
  "key19": "5Z4irmFV56Qj9J9eDarMF9AuTkTSmkX5kPBQjGX9Z6AcBvC9WGu29WkkbwDacyPQLhMAAKB6tJm1aC2cvczamkU9",
  "key20": "49xHxKx7YM5FsDudupVNcKu4AMmRUvmRrtNmvkTmCFTTxzDbuPtomp6cD7VmSTfT5Lrb4foQFci6NfiPuRfNNB16",
  "key21": "2NVogLmd5SYWATT4SbjvWNq3zh4WtSyQVJqfyAUj5Jo6YTx2HHzFj4ScopB8bhrHddYTsZi4ZGKNHKeXQx1f4ZxC",
  "key22": "41uVGvCp62HYcBtKLBVubEeC6kY2dueQhnHvyiiZVkYpXEP2S3sBFpcUdtbW5kyadWFLu3hTsV1FTPbkywqhSXgD",
  "key23": "2Cfq9nTLpHPsXLBj65Fik5ZkCakSeywMdTQrYFA7Qi1XpCX9EH4ufM5HAZQ4YZpQ6xeSDSdQGoW1GR9nEHo1MDcC",
  "key24": "4yF2LwgmK9BiCAfG1BXjN6yeGK5tw1LTn3qLnhDEHkxZ66avbwfPeBvxD5gHpAxs6ZieFpzeWTNH6raMtF96j4x6",
  "key25": "9WDK1w7oPm8nKB33tBqvkEu2uHcAzGgKDZDfDcNgN3maHRyVeBujXZNMfwb4pF15v8uez2WUH571WhUbVDy7tJM",
  "key26": "Ms412cYCGFeovZQbhRAFdVcTjryQudiq4FN2NpPvLUvaHqFaLLjhMK24STtnPZXZwZQJjnBcrg1MXoegpRSqNeH",
  "key27": "21twyVkWuwcWpRYe74S6znQtVSkrr3JbanZhSQ848Age5cKJfkucU7WN6FYoPxLtf4aMqiUtpX7GhW8EBp3817qK",
  "key28": "Gmq2Mxghemzji3EdmVTjhoV8GQfgiASpDHpj9pKextUKG8tAtXrGWZXxrRwjq1hFncmBcMBEVzwBCwbkwFNc1dZ",
  "key29": "5TWtsSDcMv8h8nqLXfUbHd4MsMggJFgLqdAPshfyiU1xnb1BQjVGpbT1M6y1v23of7TAUc2MKFQ6oMoJJBLnSwyd",
  "key30": "4bsJ2nLCp4yeWbDLiryrVN3ZV43q5MLJiovuFNU4mmmvbF2pbqCj6VGFtdKmfsgrvxyyw1buFvWHpFpyxTfeFqi3",
  "key31": "jAJFNrm2LSE8CUTFSJDvmbGoJxL4ptX1VosAtDpnqSwHFKG6JBFatEuj3PD9mX2wRv3MsydaZiurGrTnes2suEV",
  "key32": "4X3fmJF69UoJuTPms5fL67dmwzAhpX3VM1srknPv57C2Wpx5yirvJe9yPpJ8Tuj3TP9J4e1MzYm9QwUYDoAkFiAr",
  "key33": "3ubfro5GQe33R8LZEV8ALqkpMbvDsXTr7mjZKWdSUwSb8uGWHxzA55Y2B7ArBaXbUGpBiC2LmASqVDr7ovursGYE",
  "key34": "5oApmsxXnpYC6mHWLHmfYDX7UBh9LwUfkV91PVNJVZLm9d4kbqwrVn52Do4NJ6zaJWmU2DkUYtk9BDDqGzhFMad9",
  "key35": "iATi3uuDurJQVqWDEQ1EqrqtE1uNktskdYDG1641bD1ixripPpKJGY5qusqXSNuuJ2rVUEV1zqzgRhBiTZhoM2V",
  "key36": "4tWAAaejsH6XAiSJqZv3mNa2ap6Re3h4vW4zhhkRq5nhJkwGVxmFdhLFZYGaT4RGhVoWfcrikVRdpFZPDceCHNoH",
  "key37": "2KvQGaRmbCaHghqiD2WQ8SmL2yFLXdkTk6T8wxWsqCsHam6RfFKz7aMt9gzgNmhxFT4xkdbNev4vVpRSsxAspbz3",
  "key38": "z2bMeH4kSygbyASCrEJQAtebwuAS76UiykzSBEGQoQ2qLt1vUxykZmQsA42F9jLzSbyw15jEA77bfgCcDqvZJxg",
  "key39": "5EQvEtEcii17ugExhKEVhoBu2N81BwS5jubcdY7KuopxNtp91o28BypieWiCP59U6rveb44mzwc7d8cg9zneH3N5",
  "key40": "2rwJyTsRFaia3rA4CtgcZpnHZZXdgSyu11To1ERYW9hrZh32ojVxCfZ9ar22BfJQZBfxcZgW69fAU9xLq1AjQoi1"
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
