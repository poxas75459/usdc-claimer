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
    "3hMj316c3CHo4pgE7oEbRax6ykjGPAeYY4mMnHZ9QgabaFfqmF7SyULmckdePLF1KZK7BetfxXVQvyF7pwu2KCJ7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gAhb1115dscUyV3oJGhNnDwooNozJpmTP5VZGChDQrEyY4NJk1HLsZeoCCuCD4N3WgNFuwdtL7H4hcKZiBnx8ip",
  "key1": "g6EpWkDqe2Pzw6ApD6ZQep7U51pPJsLapBFuSLKhUMHCduNn3vSQ5Voz5UfRzZBH4tQCRv15tw8dcPw8rqwj8ey",
  "key2": "5TdBMxMydE2y5hnBsi1aY3b3Q8kGJthaPqNz6usvSF5iP73Td5g9JKFFKTvETKmVcZ3tBAd7RPHQ5uGv41bpyH7C",
  "key3": "5HPRc37G1i2w9BjKkyNvcuhHC9xc3CmfZJQmmiHQfnoqTdRy1VTKw4J4WKJATG2QnmEtUM4BxHZw2UybXAZqjsLy",
  "key4": "3h4x4hoiEGZmd4C3ij7uacXy5TLAw8afzDedPPoGu1dD2gzQsAjL8Vo9v3uue1ZLR4tja7ucfGUsm3P6kw2DPKqp",
  "key5": "3ZLs8oLxSoBaXgSS3pj24L6Q5MSozqfTRmQ2qQNygLSaXUFGg9qQmYDRsCwCVFDEqkPAUJ7XCKNZ3Jya9jypKz3L",
  "key6": "3HAerZEdVAgwh86aqsCit9PsUeJdKEUKp3Uu2Fs69bB27DSxXMCgFdPsh7azKUqc9yBvPF5hgqh7ieDC5Xq1cxXR",
  "key7": "4GauYmNsAxyPyKm87m6VPFfUSP6U1dyvkjeV3S2wFT9DghdzCWUjRHz7cR4QDx7F6mURVDVzXBgd31xiUM9FVaro",
  "key8": "2H5WiGfGa2brAKnUoDxBrvYsTPbxCfiUDWnQ62xh5cLySgjupBwMj7p7wVRjsU71nGcwwxZnaHhPRECG286cNn7i",
  "key9": "YceopaHnAvWjLFAgATkneY2pKWfGkfRFKVAxRxKzqCu6xwhtFaxpTQaXZ8zgxA29XH1dUNngepEfoN6nFwchHVc",
  "key10": "5F6BHXGLZfCbMYRxEBxzHeFaTTQP5q3e8nH2GbUgMZNk3Mn5LEB15nBJjxdesv3HXpVYvKCkP756zhvQfg4FxwzZ",
  "key11": "3Pkif94dkqTHwdYritaTgmiGCbWNXLc8CkcziBU4o3Rw9mGPqoFVMJ8Lvf8ekJmW5dKTtmc3dUpST9cQyhPXM4hm",
  "key12": "3JDnPCHR3ajhqYTK8HZUe6s9daBfJPfLQt8DwYAooYi9eh4SYAXEUBpZKHuj9khPpt9Copg8cr2BWp3q2vznmDdV",
  "key13": "4wSgdFrVjgQwcBQyJsBHSGcDRjEmH8v4FWGRWeX8JtySzmKwpgfte8f22zUFQq2c6KXNGtSEbN92cgFM9QNXADKR",
  "key14": "6DAtZNzuWgq7QSHPa7LqbDspu5oc6WFvgrH8A5JnuVqjz1JisMRiw9KVVTXcmJtqLBpQU2ZnEtD56Xsmsk2MTQX",
  "key15": "APrSAJDLHwaesEm3CvCdxsXHrWTrLPMSSBZgxKv7NxxTjMDbrkxQL71uiBU5k3ncUYQF77tcJB22VsDGXZLSg2P",
  "key16": "26Hfg55GLUQCaZDZcxD4xnN6rJCFaqMhSusV4JfvB9YqkNZm82TbZ5eGR2NnhfVPCmPZFZM9S71vedJczPMdjvZz",
  "key17": "2XqaBXeTXVeYRjSQSrqkNbyEszs86tAyBWXu2mtaLhoprNTBPTcMr4Dje1nec7ybaGyZopmsNmsPV4fyutibb1sN",
  "key18": "3pG5sBuxM2oRH4vMTKrKhe5Sx8qjufDDLEMX2qpbMctjKaLCjC6LHXx96RM5y4HFYcMGBr1CfZYZmjad4Ae3oiRZ",
  "key19": "54ChqBsHuUG8jo3W1vBfsUhdSVCQpha6kkaFwJyvzqwuWBQcg3JmRncBseU6UnmJRrpS7r4bJJyBhcWCu6MH6YGP",
  "key20": "3AaGaFxJn112jeFxPgLmrrgSxtkAkqaUfh9x73j96eNSkyxkTTTMFQJuYcDtFEH2rR6LSXC1xxFxj3kTQU4tYK5",
  "key21": "5e4Cakwn5kNhf9PdU5UEVtkxmzPaD4dzEkxefC2axBFxVqyr5yeophUDdphvwfxE5RxjEGpQ1sdJLoAM8kxgpUKE",
  "key22": "4ouW3D5nj878vXm5HR3oX8vbmGsXJbVcu3918SjkF9EL1RUhDsz9qaG5uyTpJkk9sqFgZx2rVPRxs76vsBt4XBSN",
  "key23": "2gs6MNk3s7qWssXAzp15ifZQs6hDz3iCQkvgnY5ZrVZQJcNVhTAnbKzSg3niYSpnf44dBcRzHtnBRzCikptUrxTk",
  "key24": "46nj6oUs23bCHJ8hsrJLzS1XV4NGu1sG7sbSdvxfbqjS8UiidLBpzesiD3JX9xkC5rFi8wUxkLcTBPk7c5TCcQoG",
  "key25": "Mo8byzU7pyfb1mc9mXqSLAeWTvMB779aC26GJxXamHW6rxG3U9cNTXXov4bUpDjZwLuFj7QwscypiFxonLRcW6J",
  "key26": "4L1bryYmipNbfuPKRQGqjFAGW7DvZxGaiZAGWUu3MQMATphXJn8PyCpr9x6ivXygqukKxdBaaWnWsL6pPfVR5mFe"
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
