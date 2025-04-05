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
    "2TnFf8aAv7gF36MZyxqnDSBhrYXXcTVUfrPom7j1Mt9DWuZ2WwRXULU6WPPWGizo7cFjcjsDKN9f5SyW4ChXpvY2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Nc1K3hsJJAsj2V3jNieLNUd85v4sCABJW24NLKhfS8Pq4tvrjxFLw157xGHjXxZQ4XyGCTkiF2qkNnNiLHvB6yb",
  "key1": "4sB1azq5RxhqCbecCx8B8vKhycuK5hQdAkojjthHa2fjPP9gf7d42P2AeBZugPXSwNFq4xBbQ5GdbBzofna3CbWx",
  "key2": "4MPUhfBeyXyfaRPF2ZMjBPVnsyBC2uVV3bZWp3bLyVRctKmmRShum8YKgLkERMpMaRmZuKoR4WzZdULm3ZAXff7x",
  "key3": "5mGummZKwqdvmuA72S9kdkDPe4axdC6i1CtgWTzxF2xmxAoPZZeszLcWDkcTJHp3KLChBFHqbToPt9pwhf6QDHhA",
  "key4": "4mbFaPfCJpSdo7A7AnDcMxMKSfb32SkKvHrdCES369EYez6A4Xuapn6QFv86NCXwQAo9g8dK4a84A5eLNc1tznzL",
  "key5": "NsCYVJPNsiRNv3YuhbQ8qPJP8DYVXPiezcGJycu8sUikshSrEtTWfVNcGM5GJds1d3rQmgavfJfY2KHs8a1V9ZM",
  "key6": "4AwEyaEUJQmRXtHqWPvhGigNW6rouQycBdPE6pNdA6M5UTByoUvmX6yqHwc4a59nunyaX2XwjVrpBsyTdfbyPPzs",
  "key7": "4en7YJBWwDCQekVEDcn5n4cpFjRBGwDetjtXh7yfXixC6AdoVKDVRfxgoPBpvBHetA5DbtvRYS264qNYEypWFKHV",
  "key8": "WSjFgvq3vaxF3KYZnZdgXfHyVGiU8FrwjBiM7ooP1c2E93uejxQC6NcGPECXQYaRUfPVr7DqkK8Bp163cahSYK6",
  "key9": "2TznVacRi7PuK4JoBVMP8GBFGK5dCAw87SPAdVJUSy8QsHsmNaB67Va15mLDojtUprM1fbcQAiCx319hUB3UAzqa",
  "key10": "48DgR6GkSRoJ6cm6ci6ZQqBJFnGKhAfhmzfMJAjwAEcKGVrfwVF7deQ7ozfR98iEzgQ3PAmt9AaQZ5JmazwqpBFB",
  "key11": "3Gzw24sLfTs1yL8dqtHfUhmSBdPkPJWrpUrz3mq15d4tw69ixA5v7SJyTshGTiTdY8iVFFzjjyrksoZiC5nM78XN",
  "key12": "CHj9EagenhPDKvHFR1WjGCQSYf8snfyxg74R1tUhs4KhVejZo4iHPtpvGd1wbbZYrNPzUDtbEtwPA4xKN9yxCSn",
  "key13": "5y6gCSPJQA1cQCwjyvshgPH8qZ8keUbK4fiKJFcatg891M2FGWDJfr46K2VxFduEbgYU2664nLEjWDz8cvxxg4No",
  "key14": "2A1Bwygcz5woFAqZuSu9nFH3VYJqVkkKHGHrkHT8jnWvVDLfaZQ68v79QPyv1sGX8tudQj4GPgQ3dTdQqSDkW1De",
  "key15": "4GtnmioaAjoA17eCY7RQL5XijeVW5AysJKwTHAv5zLDdD6borq4PQ6mYzEvCdw312y8cXzpmV4syXs5r4YcG5Cq7",
  "key16": "5JB5x7dK3uSSf6CcUZ7Sa4t1yxoLE5MuuFgAFKkRp1oBf9pzGhTUPtdM2vyExcWXvRs1rLpDHv3TY7htrFwPT9t2",
  "key17": "2RBmSRXZGzPhccc94iw6peU5m2mFsvUjqcEGraPsYx4DvWGQmDZcp5bWNS2nZYehAs9cjRNHsvf564hc8bEb7fuM",
  "key18": "5VNEmUSooo3UERaDUGCdgNMxDYpauoydN6H34FEdTzRYFMqtkM7RUdTcGpbiTVdDTfdedjWG9C4Yyfw3K31DpMUB",
  "key19": "4MWctuua5QdSNcpcj1MbMCEzrpuGjQRwGRERDRfqdp9umsCAj3jh6wyKBCKAPES9p9zUSvePSPo3ccfGhgEnXy9D",
  "key20": "5rZ9MCvfxk5nkqEkcyQYV4pZVEfwqfdM6XRbuShehwhQDpxomyKbo5G5dEaF1imsxKQ9eCECXN6LhE5tLXUQ3zo1",
  "key21": "5WAPHQvKKpZ6EoTZqEtgdo3hU1LeV24QSfDjbBzJJyM3PTkRH9zfsLEaTFQvmPgMtfexWLWN6j75tXn9tVvaM4QR",
  "key22": "43tgDCYpBsc6M7j7o9qJaved1uE8bBj88iCzTFS1ha8WeoYze15SjXLvf1r75gqVYsTzpRbcS7BCNy2TkfTJRzLd",
  "key23": "Pic1hiPvcMmGSAMoicc3E8bjCh8Gt4W9gecKNwkthPRzWfbwVpf1BjFYg7sGRLdUMfqDdQY3J1or1Ki8bV3xtEv",
  "key24": "4egzVTjeTufM9LVD3hRdmWawQW5qdG4soaFcqMKPDPoJ7My1aF32GzZdFCETUiyaNxTKqN1hfkBCYLJYeAsC3EwH",
  "key25": "5mKpEma7pSDacSiaj5qQdAcGttD5kFDEpfZjM2guLa1LNsmDDWNWHKBuV2vLpBJ7891Jvcn3rq4BanmT8PaR59Yk",
  "key26": "5QUpPUXQGQftWUgekrehjNrRyFswRZsTj3Do5diWc64netA4visEXitgX7ZGQtLBUFygvM6LoSj62RU9je4kuCEE",
  "key27": "2tSwbGuB9H7C4sWWnVqhhpmij67HW1svdT5UdrjooapGKUA9azhoymruvYeM2xJ4aKBK3E45ZNk5bqJFSFzDvLya",
  "key28": "AieVEtCdRbCYcuuzB5YyPXNcZnvCCnkimFmsRwJk9ArUpbWf2WwMRjkyjwLvfVx2ZR7nyqTWcq4Xj68nhZVHQHv",
  "key29": "3ZYJmcT3rRssdstGdqquJ7V7JE9XoxN3S2j8hwuKxPhv772hQNDchndjhSfeidDk73HpiRg1Q9Zo4fTJNg7z5zhn",
  "key30": "5cg3q57AeEwvhfiGNCM1q4Xg5JZjG4s5rkUy5u3h6VaoML55pC12trNutTfRGHtRrMp4EVB2hYAJT4PQsAZZAQZD",
  "key31": "4zDAfrUXsLULfA96EWSHFXbbQDYSGXKyfHqjKhrdgfGGFhAXqD3xuhiEeVFoe5q4Hvsfijo6oPdEtGX2AfLC2Jr3",
  "key32": "2PybKnex8hcSVHYdXdoz5bGrHU7L62YjbjvQwfAqUzGmdNCUExQsVvqe7MMxSe8bUUWWtg8YYGAzwVsd6AvTjL8A",
  "key33": "4boESFxdKzA7nL7TZwQ5AkHQEmYADatnVaxLVeV3ZWkPb2TiHKLnXH9a8nxhDuy9agmLonBbB11KsYCC7kfMCRtt",
  "key34": "2kFq9pcVz5DyzXHrQpBQuDpoYVt74bU1kNFoMbR6P1inbxb3MWtE1ahATnd7TMT8b9gNPDJ51jsVejZMfAyHGA3z",
  "key35": "22jkznD3EnnjmGJoqDYvgcRNr29QMZfhZjgEGaF2vqw5vNEaUEkXihV9GXGUdvcszRwVPHCGJUNNeY8uUSiexgtc",
  "key36": "5j4U8J1VXsci5AKL6EkBQ2x7d4DaiR4gmg8QPRomi4vRWpfsbJq42dZrBt2psw589KCFHvMWX2ainfN7FcVUGxQe",
  "key37": "2t9BB4L8zH2F4FsiT5v8WxbEmEhoQDabNokNx3sCMEKiipfpaW7EGEmvcpju8WY9KargfXRhdGmGwFw8Mm2Aq2Va",
  "key38": "63FrdU6FxMkF9v71xmZCkoXUxmqaSJV5SPwGMdV467tjk4eaobSsQoSeQdjGVMX5SFYvF679V9Dg4m9jAwNdNgVn",
  "key39": "2oqWMC9736mUJtNzT8wp3fXmW1JFWpunaMM82GKpKbJA4fd2xCAs7FAWoQv1ssz2HGt6XcBFsV4nmS13KZ5apWCM",
  "key40": "XhRJEB6mfyGjbuznZh2v6v3jBwx9eFTY5ETAZJMHrqHzq5ktqxt3QFB4VWNaxGJuq8kFnDf8JUMLNmABzZqA58S",
  "key41": "2yeDtdafnZn9PzkbWpWsPYAHNZueDjeJ3W6vLVmywBh2xN72T7cWpgKPTsZK1XaKTrhwv2x9vW7qfW3MUfepY9pF",
  "key42": "4AmmRZ4ynGPUH5YmH1uZLpvEtKMk66t2y9CJuZx8puxUUwv245GkfNKUohz69XhvkwVyrr3GkVh4g4ZZ4nuTze2b",
  "key43": "3qKvZfJ8mm2879Cky2dNeEpnRsdzq3Y4FHM9HPTjLNr5xVhrxVh1dUTC67aRi2Fi2zD9gPC8Hngt5vyhApzSZ261",
  "key44": "4ppJ7y1AQVjXxBwAyyL8eo5PVUBaKpx48YEDfi2GYFikzfzFqRDEf9JR5ko7mdjy2iro4LjwtAogEtWCnq6M1c5W",
  "key45": "W8ed9B4Xj4GewP4UNMTbvNakncJhqCoQd4H9eDqZMwYFfDG46SuVR54BJzyedxMXgTUPvjx9AMxvY4bNFDTv95p",
  "key46": "F6s1dEkAgWAf7TsNuVs7Wy2a35ByvnARFZKy6P7NGmm1oKw3JTS19vNJNHrdcNf2so2a5VNgw2AdPXgPTmMfDUY"
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
