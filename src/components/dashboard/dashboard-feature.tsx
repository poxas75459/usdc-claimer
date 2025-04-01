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
    "2Vyd7U2JpFLsFUDCb8cuH7WLBmqii5xV1tDK8H3Qu2KD9u8sUUj1rsKXWQJ7k1muDEZFfjMPqT8bR9Pdo7uC3nkv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xnDqSnwDip6YDt4EyWE7FW7muxdr4sQZdFdJgxMRcVm2xT25QW6koQeac5botbj6thVHZSdvbAMjCTjgw9cQZ9C",
  "key1": "3YRDLot4VbPpqjSkPrrdFsDLaUdCDBm9U1TroRw7gPcNzbc3WcJULhd4dMit2YvLMQc7Q44sFP2HGpWCmLLdhUDV",
  "key2": "3RvGYHSXGk6FeKgxEonMEN5ZFx9ovbbVHHY5fUjxPmZso5taEPYyjjCEgWw3pPwXhaPxCvtHWbxwYLX9we8gTo4d",
  "key3": "3wjhTezgBq1H9jTRiyGKFyMyF2irfYMFJ9vhzdRokAEza7bzmUGoY2URgndKeJ9BQhZDp9TKbJChu6Ah77esvDk6",
  "key4": "2usBzdVfCu2t3zkWSoBxNPbM2GgK9gYzfUbD3xekRb2WFYp7nipucRYn2Z32A5are9niYnHxzc5AskJC3yCJyuKF",
  "key5": "33xfYJnKb1bz9UWxyEVtXHDYAbjT8Ac3WP57uCNMP1Vxpp8oJ9fxzxNoY3wwWswkFjJYCrxQCvxXNrLNioR2pBjV",
  "key6": "tZnTbZ2MABVFmjFnJFtvXLnwXkke4EuBEtYxFH7PtDvrjXVhPh6vQn13BomLfKkNAGWKYfWCJsnYhy4NEQLU1EF",
  "key7": "KJdZ4k5m8CB15eNBdg7SmQXoAd4HxR5ue1jBuQoqxdKuwz9imRgojzAZBz6Ey7EenKHHP5PLMPe7Kf9rZY8ffPa",
  "key8": "2Z1bWEhifgVZ17bxShmD9CBNu29MvXPy86suC485pSoqqA4SmDUE7BvwU8noWC6R8K9F6bicF5JXX3hsFyLFoUVP",
  "key9": "5pyZNR4Fef4tgBB1XYPszv83zPkTvDxCWcVtAABxQ19HJo52goPp8o6LqGxk1t4eiMGD6JrhJcpAdtQ9qZ2wrneh",
  "key10": "3NS98AGAhUy5UhAjtGHitHTjrEn59vskf71dof8TZ1xydxFaHLZJjyxZNGYEMAd71xTJXZJ5KyzNtL5YgksZS5ZF",
  "key11": "5GQv8PZLLrVpaFhpgujMuvDaRdfuNzfHUfG6n5r3vf8WR5niwBbxuehf2oJf6pDBF6vBix7TRhaQeM8DmueuPahQ",
  "key12": "4ieDpNaxSsmra7WfEfiL7WFdm36wsU3EZWeuxT8mypbfMMhuKfRhDHW2YaVdThY5EMpNRC9CmJAjMUcCuyGUWkHh",
  "key13": "3hdhsJPHpvKEoxBCaH5favSvXa5ZTSrJ3NJYsZcQ2RjobwoT6fDpnRvoMHkv3B6ZnFTj1M6tZka1zQPWcUvLwpfv",
  "key14": "47ZAYfzs4nk9JNvJfhj6b7EjeKWh1HLQ8yzn2rKKfj9cppETfdBeJLCgFTpxLFqoBpYgQRq7RJnKWLCSEHLn8Zp1",
  "key15": "2d4oLBbnoYCgTRAjJzZBKLCVybGRpYJe7Ji6k5pJWCZmFCnZKTxNwe1Lg6VZdhJrEdEkmmi8DPTfah72VH5fdrpT",
  "key16": "c7DfoRU6hgFT7tVp3xWeEtLn7535nZw9wjaFSLrRaRhGbtrywVoUoxn1QKMfnua3o4wR8aqC842psjFcji8bgey",
  "key17": "69KjgMXding5TABPzrw2DHyToup2o7eFY6Ywm7ECMbSHdBPr6pijSRinLFwQXPnwohswpC8MHWQ7FWshSsBCtDC",
  "key18": "2bcmQiCwoy3xgHadM91omU5ZdvwR9AWrLvuHZ9sYksCnzvMd4QrcRbnaSb3XGnY1c1RmwUhmbHVeGCKvfH92xyaY",
  "key19": "31UnmvRtp6EdkAX2gzBgn4UkZoQC3LBVNEMvNyZSVs1a5yhRvjWh8Y6kpejn8TMpFGwfUXHUkrAwTMeWsntoAFue",
  "key20": "5MCgFDr1xCxY7hFAFSRytTHSUgNpNUVREgabpJ4RTksFA3ADY5sKzARct6NVuwRHnzweWFgHN8NVkH5gnuJpTUyW",
  "key21": "2SMUYuFmyWd6wqNoNJm8D8Ed4Lx1o1ngLMmLA6bQhcWreGGCkjMu4tVU1DZRscAqzjnMZ6hFwcyFFzsGCAhZdQas",
  "key22": "2iUsPhfu6z2HP7kf1Pio5TPzDNf2ityG5XSJsPC4m1ZBhPegYiPaSw2g3HHLgsqDsiXDWEA6KSb2iGwpUcoNiBWN",
  "key23": "4YKyRKKRdNcU2itixih74ofS8n3f5PbSjCJTg5n3GtD568X22Z2WE16ENpvoi1GF2JnpxJuTFCVfU3V3EVNMvd4A",
  "key24": "PY9ZQRkzmGvTqNbqkaFticxw2bWkAZvWtcqXh2R5ybi3hn7CRuFeDa3HzRpkCyAMK3kVck62Q1P5bkzfRP5EhC1",
  "key25": "5SLvU9xoB7CMT2etgDMAW8ptySyKZEfsx4766Gkv5qkAXUD8yfe8m7uwKYV6QKjoqosHhB8bNagfENs6SvgVoo6d",
  "key26": "5u7VLU7TE4Fn2VGCwT5Kb9NnpoZjJpkafpaJinA65yDWtbsP9dkEerSrkr8uKjbBanxRYRAkGcrSyKuKvx1WJZF5",
  "key27": "2bTpR4h8zQwxioYj3z2ZWj8Ak6sXAKGf5zNjvgyeM1xm4JdLRP952ZnvU1nvzy65yCVEiyaTPvPyqoR3q8CPkgBR",
  "key28": "3u7uD6eFVNrFpM1gNd6xP1uN17W4EPkzdyuVqXWEBr8RBy8NhFcdRnLceKKLxoZ6CV4QLnsgkmTJpVYEGwK4Ro5M",
  "key29": "3raPdetNuQTjzC1gETAMcBmN2fgR9QaBmB22g6hAb3D5Yh6osxGT38VWBShWpoZyJS2Pu519VaiQaommuekZ2Nc8",
  "key30": "5T2pMTfFTu8V5jWL3HmTyatcND1dpu3yRDnp5pSpzw8Wsc4wGKjbXbRFnDhk97rMJwCgToEyipsmoUqCCu4wSZCx",
  "key31": "63F4GWgGezdUo3yvNFqoCciGGEWbVWXHVRDAhFuwWBVNSjLooxsW6KXX1EWwfE9LVGi7Vjn44D2AKPcFEQ3j2xKs",
  "key32": "3hesRzBoy3M6Dd4cifA6bkyeiPhtBCojSwonrFoY8awZByQ8U9CD6QXJpAiWtZi2QzFeSYSoCmUmFph1SyUV4eiP",
  "key33": "2UTCpp7LSqFHhyoaDQ8dopWDxXEbb3fAbMZsHcmEAq3CpwvNCGdguUh8HyRLAGrirkqDobXfPb2yE4JuhJrq2fp",
  "key34": "3LQeybhvgxqNVTZvipDvHEAwwDoFgTziNuQXRxXnKWEpin1DvAkR6H5LHwzEaXL8ehy1BcgSZgxCMd27NYsM96Kv"
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
