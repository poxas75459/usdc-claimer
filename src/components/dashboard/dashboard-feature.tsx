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
    "3BQxcZYNMSVKo7TJXJM9PJvxbWVVDGNCn4gxBDCm6JcXmbF4eurpCS6WXBDNCV4YYjZuaDbzaSh8ak7hDwY4aMdt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3khgTt2ECWiHsVqGKVCKKBofqQApvzjKd3tjdu6XQkh3dgoEdr7AY3iJzk3WCfFZLBAPPRvDmje29BZtbq5peuB9",
  "key1": "XmuuQ2vyTKbAEpkj6wSBDXUXB1NGGH1fc7dwsNTfG3DnzewSaPx4jtqYUi7mfsRLpckKMkx1EHBJYwMpT9Dgs3N",
  "key2": "2GmtWkTdYgvAhMABsgaoNWRGuwJ82HFMRpXYTTkLHgx3CaArbU6hShH6AFtnFvBvQdUTLbnnTYW72T5hmr7yzLWe",
  "key3": "5AjeRpkb4sJdMdPHz7VnoWS1yqp4m3q2eRSSoescvCkJWPUpTt1nqmmL1CG1A3wL6uX9yLEXXMFPwH6fug2J6SPL",
  "key4": "j8WTMGkYEaAPo5Ujg5BYGPxRXsWaRgTeSF3wyLuGvDycrn5j1HqjAYFjJtBkRon83NZrZ7u5Rs7TYH1Kwor9kQV",
  "key5": "641iXS2rEG1bjb7UF3kDZBUvyVS6VRFoC6o5c4CBxN9H7q3qyx9sNg9ce7MrVPSaqBddpiqMUENpiCNJtSD8UCVy",
  "key6": "3NZdUXmuvyoJJY6HB7gEHuTuZsT3mfAXZ8nJY2QrrVNidor3JQpHA6G66U1VwdfiQXzYhe16Ss3uM5UNNdd7vQH1",
  "key7": "CkUBigQLXzZ3zU379T7FtLVVzgzA9XKBk75f7r6EL9kno3CYuyiJeMjxmR2ugwNwMLjuZeFCSruGNYzuCSNPbMC",
  "key8": "2NpZSUvsT8yVupiXQsz4d2TqWsbMy8G4ihuqpnkfR7Tbrma4G77rRenWjqULkKjYHSs7CvGQiDxjgzPUhCZ4iU7t",
  "key9": "KPpnTb3a4mYi2fidyX8W4jc1zmgHaegw7rmJ5YwbwAB7GZ8BYF2CC3jjTED5MPFXu75dwVvTuSTNUKt6fufVSJ7",
  "key10": "2RP2SU5NKZGPPvvF6TZCFDUSNSh5dj7cukgfmSTqM6fpAHjg9TaaBRfMzZTWNTSRMDpeCMCNikn22sMFHbHcjxbh",
  "key11": "5mYqUZQSyfZE5htVTE95WYWaye5wEBaXUaqcWZM5UyAMnC95LBR2sy4k1GYmVU1KvEGYuY93YBd2ZLrWGgGnvhEV",
  "key12": "kypSBWnd7SEkJ4GWMHziFbdmni4sGdkXUPegCCjdCRD3Q6FtSnLJMzUTNwwBv5kD64ogYmAF9BuWNaEdHdVu6mG",
  "key13": "2ZPxyoE2XjLC6g4zx1HMa9rFMJEHgzTPyDU5YzKbHDZTDnoyq9Ry1wrEeGopz5iGoRZnKb3tbJoQnpvnLjkUj7WH",
  "key14": "55AHGSQ8rT6LoD1pPxmwRTuomdEnFfz1Z2XhDBKm7XHsH332ERWNu7M4rTfH7YPDhzZFJB7XVTHaAUtbkXK11SbN",
  "key15": "2RAfuvFdGiUKVz92FdTWcd1h9DCndXwUKfLm955VV5YotLhKLnU3R4QVAnvXFpozmkkreWpBuek3tuBZj5daCS7J",
  "key16": "4waFzfgrwToHqvpmCxdHFGv7LbcCyZxf8rTfmtLTACSmaP4QVZomvdfCLMspgbJFjDHLS1C5PBnYr8JawSdtizad",
  "key17": "yACGkuwbEeyaPuZMrp2DfLuy3tzjcj8PDtpfT2hpL9yE4ynFe5HiAw9c4dv6B3MeCyRVyu79Xd5bBG4eAfLBj8f",
  "key18": "31gouS31H3KxWUszHoaVs6czeM9zm2U9tKrkL6enpW54ZwxTjqvD3AinhrCnYanKqjW82syqm1kZwEMJ2vKcQbeD",
  "key19": "3R8HzDL5e7UxgZWj9dU8ntaJz92fEnCN6GbNMu99jSxRmkUTXENaw6mLBPSN4g8qr76favWa3Tas6ANPqyhjfUsL",
  "key20": "iyUd9tgpSSFVWtifioSHutCsqvFWRdAKKgxG9WxTK9nGfLUEYcxvA88GJ24voC2sezr3k8dBWHMqyjQ3PdK7hLk",
  "key21": "U9MMLCesZjRTi8YsXbhjxgSGGKqnMEzUctmcaXK9kNuTtfanfJP7d88cJoTTPgHgE11eoajSQDZWTeB69zfMW5r",
  "key22": "53VgsdX3qBWJL5FamP8PTaRwAb9Dpc9okcwybqVhSY7niRiJzRc4bZkj35MkfXuxZaTDSyvvKHdCogfjq3tGxXfV",
  "key23": "2h3LC9hqCPod17tjUqpjA7EuNLnxfhzP6EyEqgWssJrMf8yKR58DWVZdkKjS5uakHMcKaRYP1TEpCj9KiZacyfGv",
  "key24": "3SuZNGwuGdGx4NaFa3c3hrKUspuBnx6UT3ofPcjPk2Y29uVBATZL2TU8WMtoJDn72SimBH1817LYQfmZMgutcSyz",
  "key25": "5a9NCyLTd1pHb48WfMx6zGZiJhUozPiuhDzE9DxhszyukKpff9e1LWZAHf72ggBidhH5rSgstkq8j5hiPRiQpToc"
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
