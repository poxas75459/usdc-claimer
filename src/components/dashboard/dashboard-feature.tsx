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
    "7WBTBa85sVJ8tjYYFAHRCQct3cFXPNKY22gLKAL5R887wfMdF1hEnjYqoMkmQUDR1oH5pSNFUVb88ELYdAvGotD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "666vAfijbb3EjBfeigW1f4UH44kf2Wh4CcVk2y3t7oX3tvB3c2WTd2WoJwGzmKHdTka11AAsyNqNihsgFGjDMpvR",
  "key1": "61aC8wf6Le92yS1yzrYREZuu64RCPRJytNRLMJpfTf1BjdCfXYZNyX7kXFg5vE8C77nidQEZSUoFyKCp7374KmGK",
  "key2": "3DFTHqBcyZkDw8bdYh7XunbBmeFQoFVpsu9f6QEHYLbjQsKTyRVyyC92YTLo8Viua29fxd6aRNu3Dk6gogwowj8Q",
  "key3": "33PPnGhsjEVnetshz7xU4Z9HH9RBsToyTfhJJ5imVTdkAPcwmoSDuPXiUbwfn2FJPniGCxx1x7eS5FagC6Nzq96",
  "key4": "5dVU8YHMZD6yz2jJXJ3b6Nq9hDBg2oQRLC9hiFFYuZXCGU63UgrcmNVw5LqeBwKKmjyyHKun8SvMT1ePvoHzZK1B",
  "key5": "44Mz2tJ3qkiRqMjEaU9ECY84yZC8eyGbjp4BJLNGLL7qWYZk3fXZwdu67XpXZFCVLsyKxFMwBVfTYavo9g4ao5p4",
  "key6": "2N3h63P7ocDqb8FHpp5nTWB3iXg7u4k9hy9efLS7qV6UgWRWZPYFjgsDUXTP5LVzMfUUqDS59Ri2bxpyCda6wUiD",
  "key7": "7bucKU1y6fq1ZyaUTJD46PiL2G5tS9BVdHUZ724U1E1eQM4nXdkp8Wj3UL1uFwQYw2dqQjc9UnUAeCe1pvvbcCd",
  "key8": "4JJgx46fj3d9P9kUVFhDVuDVgmuuR8S4fzJtmqQT6bH3xs48X95Uxo894ULc5DMzZH7QaT3G1fmMJea9NLGBRXXT",
  "key9": "2Dc11wXU6bg3Sp5ADGfdMZ9fFHUhPsuxkm8N3keg855xMiEGyRKG49SUXauruyiqRmPFiE1Ti5MA7QAuJJG3vmG2",
  "key10": "KsxEAVCAQp4yY12KxHLo3R9gykxPuBarDxr1y9pzdbMKtSwRtdpHkBTV5xQcqi1eHrzp3YqeQ3gLTE1dKmKwX8h",
  "key11": "2MPozsCkhB2Qsvg7MtVdKefbbYY7uH1DTAcAh99EbSaVVbv4A8DzEjrkKyubivWXXZerhzFgGAK5R6tjARGUwQQF",
  "key12": "5v62EbTg9K3rvGyHBa6Xavpm8yqRyN3p5QAGxmhyefJXpTwVr5yVHexPZiDvooUjBqPdMvVBXTqEkhwDu1LPPpHk",
  "key13": "22MS9XAaYhcTizFSee4BrvRMmZzhe53jTA1Lb5BFhvu7LNQzL6fkixzbm1sQwjsNw9rH7iVBgoxApp4DGd8JyYs7",
  "key14": "5EecJmHTYwQk7AzautrCiW8RQZA9VMH9PXnengSVGay2opbYRd2E1gNba9RzqD4J1FRaaD69f1zNJcVWQPEkTTW9",
  "key15": "36P8s1ENErWEo2j1i1J4WwCeHBSitnvNKoXFNwEJLffN4zL2719kBpgYwGr42pa3x44CVo72P2Y5pYFNJeUBLKhC",
  "key16": "4rui7nc8rdtx3e3TsS6nnKcpRcVcaqkNusW5AjmfQKHASh7fyoarP6daU7S7Yew9tJ54Qtdu3SJzXAB7S19dDZVS",
  "key17": "3NNRbJzV7YkoshckUFrA6v4cUQViroZHUhAisd1LV5r2DrwBXsVkt91ZaPQt6Xw8odjH4ExKLurgRVRUrAEHVNhj",
  "key18": "3knTRhGrn5DAHVFAwZHAfT5qr6KhzQfnTxnh116ucKYn1bfkcirsERmehuss4KeK6yBkEihjBgDCuFXsrMUXrUVS",
  "key19": "2rk2mtdVUhAwxEd4pzP3XdYeJXygeRA2CH8NgLmcWy15T6yVwtLpv4PJMSaM9oUeoUWXdpTbgL6VbarkCdkhAH5u",
  "key20": "34sLdkAp9dKoqBr8TFHKY4fGpuxzaSpeMZ9gj9Hku3PTDCisUzXAV697JmVwZW6Ejd3ms9ThpHhoDmwKqMMZPgcc",
  "key21": "5j6JdnWRNjUN1RVXP3NEh61ELv1nhG5AhJME7MSysq7F3Scm1gtGPtq2Q1C1gmSDHYYRJqzpUq6SmD1GmqxJBNKe",
  "key22": "7DU7jXAPMqCAdHFrzcpauiNu7Le3TZkGw9YETQTcXpTujwW6nuCYt181T8h5PKraxYgnrHc1iVEFxjWMRP4RMS1",
  "key23": "5Zv1CrYoz2BWSUpKLE7FjnoFK4SgUDikNgGHGhK3DUduUhAVUvQDvS63LppmAaxhakvHdshBvRt4GsPjeoa7B67g",
  "key24": "3wQLB7yYw49punZmGBW1tn6aoNe4PQJzMnu6LcLBpfx74uFcoHgdFbw5toZ3GQda88bdxduPbSnXw94fJeTV7kEY",
  "key25": "3DE3UybUVpLjxz7KDtMcMEiBaek6ptPmRNFxTqeXCc5Btb3Ei8tug2GWyshU8wzrK4spvTgy6FErYsetFNbNiZpF",
  "key26": "3s2HeWeL4hvhBT5x5ghE21nSmjKMiW2ZQockaLYr6MgRhfvauBFDTTdZMuXxr3WhGHfXKxq3BjrBGKZR49zRi3ve",
  "key27": "4eWgEdyKGxJWySfiSMYvdvLXa2EyYbvmaPhFyE9ivR6CgMyZD1K4BJRRiTCgnZGiMCyC4H4C3VPR1XEdr5CMBgT1",
  "key28": "3xY9UVSxG3c2ojoDi15XVxeTVktjDVXgMSVS4dyU8ioLAWjbNCGJXdpzRAd3tLgwUfKSKwFifD3w3DLJNKxdkmMY",
  "key29": "562SYFdFRmJJLLcpuEgRjkANiSrJuaV184WxDUPiatGueBfXSGne9Z8RDyWN2j1GgxunrLaHVgwFptZ5NpSQWYZx",
  "key30": "5wgGusHXGMZSfcfsznxkRo9qq1auv8a1yqFAYRsg3ZM3tDxiveyia4t5rh5d8xzmb8CMwtprfkrBNcusWMhUjBXz",
  "key31": "4MoXNx3SLheSYzXWbbPHJyhuMumNxLC2Htt1snsmSCNKvSy2DkCoLJFL1WBDSH9nepg8S88BXfn2a5eVF8HZFzi6",
  "key32": "5RqG16i9wfR5fvNBxYEBdbkxgnbajqX8fg4Hc7fTBcUW4dRucNaW9SH34fZ4qBD5aHWTKuskUnr33pSQ4EP2XnsN",
  "key33": "5VbYt4nsn5j31jD36J4neok1C6rzVJGDGwkxUU83KbZvfkcA3B8qMUwWfub8wE3JqXLemHtoAw5khnXPAomYXX4k",
  "key34": "38SfF78sCVnytgqjwFGR2rEqXacGPMRsPxoW75MXCqZYpwz5jh3shvcCYrkjpbdQtDrAweXxaMMWMWJVyRGzybmw",
  "key35": "2FWgYM76gtS5UyENq8C3ahCpojCmpbDUMdQYpryyMdnGqZxfEgaUewgzywKUbHoL98H5GCz2MxpBgvHcHZZyBjS2",
  "key36": "4QH6Ft6oLgdJ3rq9vksw3PT2FSxGbaQjMtir2ZY5UmwrZnD4WAe1ue6zK3T1YbbBEXkCLJX7fs7jUA36E7QkLMKj",
  "key37": "5kGc7nL2MbJPZmc63tDESmsxSQZbGkrCThgPh9zsVCGiVrkqmQYG74FXUknoF9Euhqw7Vc9kPYXCdx9TdeV7uWJR",
  "key38": "3nWcPViQroX8uP32rxssUuRyx9h7bPtJ9ha9NGQmkohdxzXKDCUPwsUixSNsBMLfTmKir6ABmB6i4TeBy6i2mGW4",
  "key39": "2tPLq7KKdNwBmkkgUMm7fjnxyGKXYeMgwbVRTwR97jnFCQ9kjmJuf7Le3TtjEyftHG2oxAXQ1dHUMb3Rkr2jhe5V",
  "key40": "2EyxUULvKCRWREq3Wpy5x6GkCxvwgNcBbRAGBpYGqkxX5yRow6izduao62Gaw3eKHAjrj1psfg7tVsa71E4XrSc4",
  "key41": "3zPAb6X36Fv6ACsdGC2bp9VkrRES7aovrVj6oyaLhNdvNSKew68Kccne89ziJuuqXHWyKNRKxgu3ysppJqUWCFpX",
  "key42": "4hAvWHHNHMP9GNAF31NCTab6AvuR1xNcP6fvBNFFuzBzWwwqL2jJKyBSgkwV3Em9vF4oVXpyrMjzoHK8qYxnLGA9",
  "key43": "3PqcTjMq87tTEtn7p4vxLZ639MmtFgLdjYfhUHMAX2fjiWEoNsmg9ssueuCYxj5456FrDYz1vXep5bncykY2zcfS",
  "key44": "5cBPxUAodUbf9pYMGhzdL7VEy5wviK9EXBqkcxLYmhqQ1kQxGDNdV2ZfMLJfyZY8pBWj4sGXaMBFXBwigPo48Nqn",
  "key45": "5ENHsTenGLKmrnHWB3G9trMuSw8QH5zJS6y2so9mrNk6b2jCVUvebmgEdHZdnBQ48G5XJqKybS4nTkaRd8jxin22",
  "key46": "2TCCGwgdM5FayntWxKmEUkuiyRCBL5hiTqGtksB4koocvQQ6WbUGV9d9mV8rUnA5hXwCSJmZmGXmWTddm2fhVTPN"
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
