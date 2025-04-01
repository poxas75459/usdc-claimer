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
    "2qmJSZvxpHg9kUWvKcC58FUfgBzfsoc8yu2rCD1n2pVHgcSyRzH4ur3VAJJ9BY5qBmggq2ViaxxcdR9T3FjGi2CU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22ZG5JbFMuLyD1Ry4hCM7ZJEPgqdcf2zJmEukk1FwtK8w1wEYfRjkkTyo9FJVrYq1kjKGJJp2iGwanooxuAtymSB",
  "key1": "4eBTPz9hant3dHZqraoVzaw8kcT4Dpro17VcPkWsainajzM16tMTphUe3bGieNyZVegEi2fJfJTy6u4SMo3EeFkn",
  "key2": "5KtBUvWtqduGXy2o6vtRgnVnt5omZxVc3C2MoDQFuff8jXsAe2wzH5Pwmqi9mRjQYhx4xLjE9exMukwSXVQE7Ucd",
  "key3": "4GywkhbnwWbmbcHkgscat5VVAp8K9NKyzcWKPwiKyB2CfEeofs2eYQincSxJzG5589iqPy3vE9DFnku4HjjNkEWL",
  "key4": "4xCxMBM4x1VkcwQsqMgnHHZd7j2NxP9J9GTz4qVtcAn5AUoypNKRy8EZYRLadd6CYo8LrZyTxGDgQquY5pDPttwK",
  "key5": "2sMEFkBgwLaStAGuMf5iMA1SXqyjBF9nSQeAibfp5MabVAWdyAvMx5to7LfP7JpmRiNaiWF18F1QRD9tmBTe7tj",
  "key6": "4V7DUtzGczMjmXm4S8yo3o2HXxbVD8sdNYKdSaZ31oHPdfnvG4mh69kxim4CEi1VesbfHxjxf81bzdjQqe13tEQM",
  "key7": "5saNrgAxK3s2xn4nU839NSHQzMFQcCsbKnbM7zRmUWkeQcH9mfp5i6zku6vVtfNL8ueTGuWWaou5F7GpRb8uEGma",
  "key8": "52nQ9eop6ptXqpt69Meo2mfWH5KNjZ3TS2eSTV8DyySr2BTQdQRN7Rvqsy49gGkNszHQSseB8TtYu3rZcerFrzD7",
  "key9": "2mRGyBwwsVu6Heuk2cLPP9i5iYB16AvcGUPDeEUwoBHSHq9XLWYTrpmj161msefcsMZurAidyXeVfaB53j2oxvPr",
  "key10": "Dqn9J12X4v4vyVM8FQZPpLkRU6CBHDA3vb72zaKtUDQrCBRdBzjmS7m8HCFh7vmigsK7m7MQLUEcS75x3dD87BK",
  "key11": "2qsrJuAHebgD3qWqJsHNMGMeYG9zj2fmPdCvVZpbFDJQVJ8srouazbNQPtfinjV61KUKoBGaZ9WHJMbTMWZomyWa",
  "key12": "UcBYhAQFrfnkdAU44uNdALnftjovgvycoc6T8f7bWxYpxWKxddCBjKZU5T929qeD6KMpyDMoPpoq6yXyWVfHYWb",
  "key13": "2fyzPhLuNGTf9RJCmbDA5HfDdFUVqs66fJBJvEsNKFkgw5AXZr9BiVQayDDTfBPbsqBbfkqvaYFcinReeWStXXUP",
  "key14": "35DHoH6juj3kHmdiXVPCC5oXyruaV78PAhqhxwigUydE3P5Leae3YBhoUCktpnCcDEZY6QVc3KAXv8p2U8QhgVrM",
  "key15": "3WP3FDGzukVXR5fmeUpRFcjRt31XeQJGAiHntzrMAgCByHsgZerFizaXgFbn4VfWanooNCyZZCMHimdewntzKpzf",
  "key16": "5Apxuc6jQsBCzLvHQPMVvTR5UKxeBunemohaDqtKw5WJAAJvJkXAJY5kXi5rqMKr7b9LEpvWWpmo2zZN3sfFXGhh",
  "key17": "2kmskMKLbocGZjkjVMznVRPbLtmNCZ2vWU3RVbf3ikimVvwzYVSGWJnUjT2PnPvsuaAztpJvB7sF31B4P8RaPCbz",
  "key18": "9W4U8nzM4NQEocaScqNxVf6tnm9WJAJtwfsYD7R4PKgDZQQp8zSEgvwEv9MWKwWQ4Pc1HhBWGZKmw9E3bAVkKti",
  "key19": "5kjZiAcMaycrSp1Z15BQ48BFU2WyERncoV1xut9L3fZ1m6kfPMVuuQNdHFKoDyhjjSpUr3BMc96iaJiVX9NxRrS9",
  "key20": "3UxXCHZ6Pad4wDAzaEAE9ftdrZruAUofViFFwwyf6dZLdgGCeKBViDbVLst3gjXUdUxYDWihvrxWGKbqNzHA6N66",
  "key21": "2EYAPqEKQfhk9szLGsV9nSYyXoDXLFBqj8Peumwjb9fTmX8aQ4vWaZVcNC156VdwKdrAvZMnt1etoDnW7QxQmt3Z",
  "key22": "5BSxF1aiirMuRdhkLasx4nWaCcbhJt4m4h3cvECxkTNN9nNCJNVLA38HXmwuyYTvGLgAe1BYJDRN7x24Ti7xmn7C",
  "key23": "S32dTJUQ1Kqe1aA2eaRBhcnR27FRzKXgDRe7TSivqFXKdJmaQm3ozF7UVat64wJCwgp6Ana3BoKoivu3QsHVqqX",
  "key24": "4GeU9GW279JRoPqngeNKgm6rQfqqTCiwoG9cmWZxuXAfJemeV35vBz3AoiLBkiGqG77fxYi7MctS8iCzNEdfrdxw",
  "key25": "4c3TfTd8KXaKKTuRPd7jSH69CvzsMB5qkqDDNZDztWrL2TfDagkdMea3v26zSVbU84E2CN8mG8yEHxATqcSJk1pn",
  "key26": "57ytnfmgnTnh2kRtRtNhMFxWGSeu4NjXnzWZfGc8dN42sFvk1gTpxb2E5Li82oXuykPrnvrxnGoVEW1fQXefaP17"
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
