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
    "22Suud5tDuduNDoVcahjCC6JLrLC7PTfb5KQY6o9RWeJAARz86iW36iEi9DMVr8gktBk1ghch3GjF6LK4Nhhpcxh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5N9QT7pWa9BvzngjFQJNLRZDaeCspo8eznzS1Zu7Ag656oCrX1myPcHd3nVXUPrhANEVMNTTHSGJbHrP4y3AH1HX",
  "key1": "2ySK4ab5kkU31d42m7jcbyKrQiWiQ1eKFZfNYTKFKuiwaJtTX7agxHY9X1Lu6X7z5avH1KAhJFYiMLRJnDjKW66j",
  "key2": "36x6Vtf96EDd1faZMYwAWQTkoG9XKvMMSyyRcTB8T8981uMX58LwwjQHUE5xUKtjSwRb3i9UH99CVCFLcYFeauBC",
  "key3": "2k1cGW7nJiUvFmLiy5jiKNiG39mgfHESJd62zeu7RHfazxdgWwaBikqBhtkZjVCqZnKDXoyBNzcYroR74HLaG8q4",
  "key4": "3Vij4iX5nzAj3yTT2cKTVbjJoUWA6r2jTaR94EDXy2VdAemccAwKiFSYUvBtwi7ATpFujYnFWErDTQvMuLpjLo6k",
  "key5": "3JSor7PvSr1wJhBaRFpj5AhEoZJo4RVA7FJ8kevwCQp4ygCKB9fD8Qhoo1JkNUDyEQ6RK11PN23evdH2JoUUvmFF",
  "key6": "4F6vnjwfioFN1CNUDWgtr9DGzi9zahDUYB9RM8su1Y89Q7gk4VkSbYPMNFBARajeuGtp7ceTtSZGMwtJj2otjx1F",
  "key7": "5AzCHQNF1mS6MCMFRPYkwoWDNFy6AxrQmjogsRLeLcNGMbWWP4RaucKV5i5MgBndsWCiLBz1shCTSDYopqAscrjZ",
  "key8": "2pd6rXFhWiZnv2WzqgDnEUqDUaaZaKS8WNcuSS9oHRb2F8fxAQqTtcqyUjYNLLQ2mHdCCqgYkhLbcA4MaZNRebWX",
  "key9": "cRJYbnopZqUkYWyber6hPPaCPvo8bibqWWo1Ptx7Ss9TuUkGPoWq5e4X8n9Ci8MCKUBRRkNg8wJ5wkVkZya33sE",
  "key10": "2LFprfgzQ9SnBjAzp2f3GKC1RnQq2ULpZxhH8g5VPcJPYyRpM4a9X3UonAN9M3cPHa4FaZghsAJbo5tLDHymqcb7",
  "key11": "2EN1YA51XnqjKMPyFR8738g2EnaEw7tcWYFewEGiP23TK9xRbQDaAdyZzL3VaEkUj3Jkrpsen9HCHbDStAReuB55",
  "key12": "DxbxcyutSrwvsv9S8XcWh9E3aHbJrkku5emwLCWxXiZAH1yiRHYQvcv9bLgSBc2TKnR7BqFvnDBzauSTaxnCL7n",
  "key13": "2sXcmbtmkfxsNmU6Ar7r6mG1ZmHLe3APds4Z9a5KhbkkDumAk1HkZXPkXgNsGFmcFx18YHVFM7SuNwk49joka4TQ",
  "key14": "46ZvdX7eQ4CkeVonRKC58wbJSAe83yy19Ptt2vG22Sr1NfHvt8898uJzUU7jcq4DZ5bqMFHP7jsdFaSpxaq4Ln4p",
  "key15": "4eEdJAW1hWHw6Ssd3sNBx27TBsp4t8NVtYZogG7Qpr1u5aJBVvKGzvkpomt9iuyMxdn2s7GX9y4RqQaYw5sLY8KV",
  "key16": "239TS8d8cuvn4aii5aAqvNe2WaZ2N8nYKLZyjY6r8FLsVQ6pYVBdrzbfBZtmJJjnuZRmtpe35tcbXbVJocoA6LxC",
  "key17": "39hxzpoJJQG5STByLvzx45odx4x3r225hoAhUpnX5FEsw2U6aekLP6oHLivVL9Pfde1oXbwYf7CgUtjj2PKsLVnX",
  "key18": "3bxiU8Fm1g9eLqazJB4jGt5kSFE8c6EKu1em7eqTAdSa1h5NSUjuKLkh1gHaT8QgTV5kKQCLAcLsdZER45yr3ck8",
  "key19": "5ZArXLzeVrQYDyZqKsDSom1GgkZYZ62UiqZDwWq2CuTkEzQ4771a9AVrEjuBnMybS8XwnBv9dYcnajiJEaXNvKiv",
  "key20": "3Y8hAJphA7yis9KoJhowDo5zLNqJbiZWhRox8XYuxKtg5pXSniisKrzpLwZ8cqT1vDUNtZmAjrJ2NU1HnwC9ritT",
  "key21": "4cmKddvAFjuAAFUznDZ2tzgLvQHGf23jGGWTYdVRzPqG5vHhbLtK6HZqFAB3aZwbsa3bMWf6bFsFTrdX8TV3fhLn",
  "key22": "66Qfkk6y3PGNahTubqEAtWcMHNNhFeHRbC433jikdxuwJwF7Cv5DPyoPh6AAhXQtKYPWPko2U5TeJFc88GjMw7LD",
  "key23": "42wPXNKsNHxA4TtSY5BMkPjxDEcTqKzzyCeC2GrpvFa5PatM5rsVmcdJ1Acapr2j9w9T3yA7VRtvWKZ1qHZysM3r",
  "key24": "5vFU7K733Fi8UE5VBjdg7CL8RTPfQbDRaShE1jiC4xGzxihjjuNETBh6qGa4egSa8WpyR256RSXjtqTZcPYogbW8",
  "key25": "3V8rPjTyi44s42RG4SEi7xxgiwTEy8vd3P7oj8jbLwTiGSuojHdEf6GYpUhhF74sJMhM15YWwkp4jorU5MCfLRq8"
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
