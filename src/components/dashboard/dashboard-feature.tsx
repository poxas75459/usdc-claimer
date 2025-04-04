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
    "4RYGuUqmyaD55LmeN6MTj2vp7x7jiab6YVLFU9LJwsZi5TudycrALZ7Fp6kAi4i3zpJH2NekXR5ohEPrudhsL4SL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "q8Kn7UpyRtcmVjiKUtnK4wLnQ9ZWCi3Lx7Gy7bqDHmBLtDvkf9SYmWSBRoTBYgAVt6Sfb8kX3cX4ScaepMHAmvZ",
  "key1": "5kw4uWvrQYK6YLJyr5KBNASJCNYm3QbYbUTvi7ckRaVuwSGVPSokEg8rtZXLHemG17mZwyNfC9DvqKYwfANFhnyr",
  "key2": "32LPE7tWEeVQvNtdqyGF6Hm64jUP8pTpuhr8iYro634sF9UaedCAyDLgtpgW4w9SQ6yVAbuw9JTjhitX7gNRpSDt",
  "key3": "5VxqrKu46VRpjnRjSBvE4HoT2qZTfYwVPxRN5bkJnMTu5eiH4NeGaM33gQVyoLnpAi4iMPfeX9fgpChM8LjXAPwr",
  "key4": "CWABNbbAM8ehtDUvGpw1DbvGHLeGpGSXf8mh9PoJYb7nAxBn4iwhvpH8NiE6Udc8sgvWZ8kLvRpvukm8LuSeT7a",
  "key5": "cEnfDc2CEYDrW3ibKDLPRbapCokD1Mn2NWMTZsLeVBs9Z9Ext6VUw5SystPZ33mQzar5w1XChgWumWEZD2HdhiV",
  "key6": "5PkAeviVYVrxKy1Eu9XHRDauCrUNio541dGPmiJTHN7Vo5X9uBiKRAZRecDZUgpm4dsyXigsUukjUmZGEoHKtEPG",
  "key7": "2g9ZnswPthvhfaHeWQLxYkZHstaUGywFFHEiB5335rvngRuBTzTGXuoE7AQneCHMYNUPDz5CK9jZxdSVtUfpMQRC",
  "key8": "3LzvL4Ev34DWhnhQMsPk97KepQnGMSBSg2iK5q3g5rVbbSxaZVLvKL5658v46PX5MTUM2gnABDZZKVemKsaatdRN",
  "key9": "2HxhooSmL3oTMDCaccBQhUfsEMCWMcikYCKbRRQGeL5ir2BeLsQpXXmjHC8eaG9g7QPsmEz7Zf1F7gVw71Rk8mTH",
  "key10": "2KFoX6t4sozLNb8WN5tVFkBMW1ohFWJYbMx1gKLUea1GawMq5sCZZBhAqxNmGvVkPZV3GoDgvqTJn6JhJhV9HN9W",
  "key11": "faqKf7kuxVy8yRYbDiP6kCRBBKcb2b3rsdzqRVCPMuNqQ9vH53BZW9HhLVeDHRF2WrUgNuKLMNLvbF31drWcr9Y",
  "key12": "2c3iGPAiNunU7SWXkwu48sr2SvNKCzMMVRSF9xZa6ZzXJ8B7cJW59GPfF9cxwC29dEiA24GQhNdADY2WXdZSpFmF",
  "key13": "N8e45tcz5E2bfaETBcKmg4CuAnWN8m5EuhKeaiQkaMnySsKxSxV3ny3yPGJYqAEqJDmcc6J7peZR4j9MjKr7qUm",
  "key14": "2tnGVf3bnKsATcezwuskG1nZZbM6ztG89iNjQzJPHCUMeyMWAyBhBNupt92J9n1n7cpQpMwKgZDV6BmBxUMosKm5",
  "key15": "4MSizaujVf2fY183sMkhbhccJ2BPSRpJis2oLVq95RKxAdBwxtW3G4MZBiQUA5H3w5fKSQ8H5ErBxLvSfTn2tbAt",
  "key16": "4Xy2UkvtzAfFUkJXa3P2eMBnkRGyoo96HM21nepwEVYfXcS65PitwmKiLR1zQQpWERQgnvS2ALjdKqsJjJaxuQCx",
  "key17": "62SUodqN7ZRDNS6WtMfM2LcxbWypEzgMEsUj7wfhsQmbcr3CepzFniac5A8XLAFdK6JY5WfcE2ziCjT2Txmx1g5j",
  "key18": "5z44WMbML2uuEZpHvsnFYoWcbeUe9sw1RDdo2GTzcw1QqWbXqd2QDbGkaFdZq7Be2XsaDraq74bjBg4nFm3dSDTb",
  "key19": "2uWfvJyvXVxJkhPHyeo7K7XHE7ohsnhTVQB1MTcbYXnWgHKWPcs55pnk5dZmteVVPtqHNCP1HafHvavtgaco8CLh",
  "key20": "3CsTMwSZ7oP3Ku9Dfumm8rNe1HLcNrUCjsPktJmobRcTxyErmnjqJKHj7XxQdoT2d5KYr3bAx5B615JmqM4te3ME",
  "key21": "4PzNZ4BYgkMvxK3yXpZJJRx5utRsry1515XiuPSJMcuU3fcQXo8bsdGv7QQfscwAyrWfphpezrDZHi6BAHsR2EiS",
  "key22": "neHYVXjDTwwAtnifGskx4XqmrFWnmKfXJ5SoE2cY8EPv3nQSEQ8SRn9ozKn7n1ZgzLEhwY6Hr82Cd6TR5K8tPts",
  "key23": "2DWtgH2rbHDBdUriTt4xe3yCKj6vobw5JTbmXa1Cr3ea1GxchDAPHGsVeUgbZ4xnzWc3jeUqHZ7UCjHYh8dwNCKL",
  "key24": "4atcKhNf783u55ACkYQVKbuzfc8ZJCiW1Xk53mmwC9kPwx3R7jaZeCkRMLY5QpnxUWL88Z1kbC24V45TYMuCkES1",
  "key25": "5aUQa6PtV4tSMaVXAMriXuFjwEeRxzq8asLKizcjwfZv4nsEwg5eUp1Ks3UNASTpccv6EgZpNGEudLy8H9FTdqoT",
  "key26": "3Wf5KmsENCSDCDqM1JJuynHJR7U3AEKsLQ91Gd8FS5QemnH5nTmUHxcgVfkh6QwGp5R5jUVBavf7TxexFKST8WC9",
  "key27": "67giDdY9yJLX4BDxZH3KYnFmSYuciSMHSrKdtf7g9s3TmMs8DbwHXhRFNtjT3PjJ2f5Ti6RyErZbfuX76J3VKpES",
  "key28": "Q9NLCbVZvN55wN4UvwgFguYRjsLRzyG8zPhBKFn8UqibXZLuBiCrjcF324V2nkyTLHy3fNQtRnBXuEHc32BHmBT",
  "key29": "4i5YJCZxSfEHBY541fSxVSx95c3vNKk6Ltc3CqjCRFa2CC8onwrtGrpcUtg8kQkHheKRL9DpzxGCwtCdG7uUDkNf",
  "key30": "3c2fapDfc64hgcPgiXVpyk3rvmxGKhyCDrbHcp3Yi6tqrY5jVcUGkLY1MYjGdsMGmbNEtgyV3HZ7umzn51zfapr",
  "key31": "3AVGF3R1kAwiigr1kGhVqsYZFPYFnX7etXczZW3SWuJ5FNUPgMcoNJewUQFrK9p3bTKS1ZbLScxStLDpgF1XH9qC",
  "key32": "2pmoKdE2zowMahk7EfJoq9fW3dPGixYY9ZsHqGynKhxtaActuqNnQePXF5NjBaitcP7QsUjzR9ECsCH5FAMMdKBJ",
  "key33": "4Ecs2kgAXRnbPCKJx12p74GxeyyEbBuxcjn9J9fqmNRfw54AZCr6BPf7ijbJAKbuihhqCSwYSHv36jzcgamLGZSW",
  "key34": "3EVta6WyUrGp8kYCGppZFE8m7HyeEft8hshAepYQpLq7VPqeYS2pKCrvuhBDGbxnrnb34yWuho6wTXuMv4zCq3Jx",
  "key35": "5xjcUHswHHKsrJRUCYGi8MZxfUuLS49FHfsWe4ksxcykT5xPiFfDnrvMsLkN4busXyhXBg9etgRQvRJAFcuzx4pG",
  "key36": "3UKacBtATLx68Q5gvvdb78h3kZqYtv8VEkEAzAhuJDASpV768kbzU1PPxMhdbof4yiCwW2N5h5PwFYz7wfzU2hca"
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
