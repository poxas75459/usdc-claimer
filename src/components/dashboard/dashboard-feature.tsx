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
    "3pD3SsNrcUePdeRmuTUdKSeNEASKahdVcqNyTavqoZWkoUQAif8XMYSkNgSBVLNkTzYePXbPJJnAXFDc9MZJ3s4C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5D7eRqP7hbirMJRhw26GHiESakARaaaQD4pfVUsqWZuugLggbsHBfoWjMt9VDyg2aG9RDFVdXLqJA693PCGNgkHK",
  "key1": "4hbiwpTBHAybQPNVzXiSLzDusX3Z7ranFwLzpZtkCsM8xn5tyubRrXBjCoVBZMgAyeu9J4V9HQQUmeVF1K5ebhYe",
  "key2": "2LCArDZGCCzrZYYQTd3S4gkFxBfq1UzFrXPaY79yhwBGpmnHEJUQmpfCa2AUk5L1iDzFt64ehZYyVzejhQoWtzYs",
  "key3": "3zkc7VtnebS4hyEathkK8thyrzWQMfnbuGA54Lp8d2MWRRovbCUbYjqTjwbBnDY3t8iL9aUs1yZLLfuQ88H2N7JV",
  "key4": "4XUYr8nUYxYUfQHjsritAUDEMY2f2JLh6wHQ66swuNAnNkAZiPYXjrtJC6fNE6RGxqSCubDnfAtjWyRkvmLmiDRs",
  "key5": "35RyVHBPNSKZJ5YaEfE5azJ22ym46euEMty3MJ2e31DibNtfjsywN1iakKCAjN5MvuBBuN4P8vyQgMhCUFRRqkV5",
  "key6": "2kvuXa41CmhsBPMD93duygB8iSvUV38kHSpv9s2XfNUq3PpFxkwFy2whn7gCT6ma7wuasTrj5shYZDnpWri3bNMF",
  "key7": "avTYoVVRj8ht8oei81ge71zugw58CYjKAt9W4vu7iNyQ8idSDcRP3fWS2HthceGMYBXJZDm3WHkjcT5HkijgWho",
  "key8": "2gcu1V3Le1QLGUpdpmahgct8hVoCk3QEmUvc6mS4LqoXToRk8NQyzMMV9Kf8t9L3ACq8nJX7GppN7j8rBz2qQnVA",
  "key9": "41ax7QbR2sCzE1qMbMLG6YmMYj5gfhiamNhV7p23T35qwD9L1tPJHeExqMz4zuM2qUsA13wKFn7W55KWbin87GAx",
  "key10": "39y8eD9gAwb4BcMT4W6H1XtrRVfQua2AVXjeuK5nb8wptRRcno1Y6CDNxKZDG1y9JZCD9Ry5Q6q7TZRHVrEYPJFX",
  "key11": "5PJTuvffQ2Y6aVGND5x8SgCNVnKnNfyQVnrDC7KQcTAsdYpiY4zeS72n1c3r29KjXV6sEQtQGPb5dzxHgGAiFurb",
  "key12": "3MmpPXdJuVScHWEwhzLqx7CEZJqJcsWUDqmWisKy9C6MdADTHWZ4UzYoTzYGz81CCVnA4F5QLe4RL4vEos68GMQ4",
  "key13": "3jc8RSxbidD9FhXudut9hcSmWLJKGqaweJAoXuD8UZrv51SGC8iLjYB7baDbfafGtV49VQQQC9Axf1nXxUpSmWyL",
  "key14": "txPcYc5j6a9VNzExvpRAFVnqSzj7CihUTFAwqvv1cjLcjouJphMtZVaG6XC1K5389X1TsBFL26VRD9mY7goWkQ9",
  "key15": "BzFek79wuwJGMrSpFmP1GywTAKzegnN1SdrwaBagk61zt2D6wg8FMJkV7HzQUx6RSGQgeDfXYKmU7UvaxBWQx64",
  "key16": "3PKTeKnegpscu8DiihRPFoW9r9MfchBsJ8iKdTHnAeAMmym57Z9MtTvxXFLYGrfakgXp5Wpobf74ABtbCNv4shco",
  "key17": "pCMnLPVGZY3v9qCvaWuN89zrEFaLRJa2iAwnbXAVW3L51QnH7Y6ofb6KcZuYaKA1qSt2TVwCsNQgBVSg7n5kEd9",
  "key18": "Da76km7BU6ZycFCz6PnSJ828pjUz4EeGGMRqoNpjkctPnCh5CAKxQ9K7NyH8p8AJHxc8yTTq5BXZzQz8DZhamGa",
  "key19": "2TH5BBzRkn2zfxBUPw1JV9KaspQaaJxyrjpF6bxzG9uRHwZfheMdWim6PAYBaANitWEurMgv8EtVFK2NZEGacatT",
  "key20": "3YAMRwu1qb7HYbdDHk47gHRrFUqgYVqyMHr4SwGDS4g3XhXZj2Yu9QkSCaWmDcRWsT15HdhQwvhvTm8ydtbPDcp2",
  "key21": "2WpdSheHz8nCuVb4PNHZDs2qNoGTdrTr8rSvqER7nbhL6ReS9nZh67jXf3oDe7y1MwqCMAD9WN5LQcSY43zbYqv9",
  "key22": "5MPptffkbpHMyEUANZECHhp2LVyP6jHHeKFgero8FDrwDxK42QpmVht4aW8TdbqT9AYaV7wJALtWDe3s5osrELis",
  "key23": "3YXiTntsh9qVy9hYKzExUShfVSacWb8Sk3YHUAtYf3WpLSGQ8UztGSYNwZohSP5r5WVfA6tpLTb2xZKuSTWXENgv",
  "key24": "5DCkq9K8HYbEUEujxX3A3FkQsDyKKcbT5kqSFpwoMDX75xvJfC3bmsijzGsuhCsJCZxKbPPBhArJyXwZtAh3kEkm",
  "key25": "2tQQg1EVwwBZzrXDGmuuewidHKCggmAEjAQt85vdZR6oU3pputFkCRpxPMHWEV1sDvYdR9Td6ZicZG5F9ZbwYNsD",
  "key26": "4bFEJ3S2z3bEedZfN2HSSYphX4weUWwnwfuQbnwwe6am7St1BWMvjYdy8ofmsjQYY25WrWSkPVPc86GF8juqKwz6",
  "key27": "ttakQRmiQ41yeaQasy8wCJ3DXf8ZUfgPuAs62Em35PSTjwhXji9iQ6kpgD3P9RokfRdBEMdXNeGnd5roQVi4JX7",
  "key28": "2119YukgFXriL6RbbkzjJ1jF9CqkjYF63PDYKAaF8sYVRpAgywfD5noaht2o12fRygW55QxzJ4ns3KdMZxQmq9Kx"
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
