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
    "3g6T1Kp2REenwRVrmLjfHisUmGMfcnvQ2qMuphCg2X1bds1ztZpLZa6F8aTXVsZnXB2HjZsKSmhJLLPe73M9dbiv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2j1EAapRHTKdzKZdyEhNbfCXLRjyxyVDnTKt2QF5b7fKBXN3K5ebY6UaCwNb3Qen8NxnEaM6K49zqANtNxvRqoEV",
  "key1": "5SoMV2h61VcLKp7HcrPBec9FxYypaWNuWxUUPMmS1dczVgfc5QHbr9M1AT7LUPcmhoUgkojwh6urAfsE9Q81MinC",
  "key2": "5Gy5M9KhgCYBKjtjFa24rL8i7hM2VitXdYgpsj7nFBaCkt9gre7po2N5XWx59juyVKHD1fsF16kMJaWecFvQuoKJ",
  "key3": "2AMtzmrFrVUGMNbRW6DsZqX5oHLnbPmnZUqAt2iHn2JadQY5kR2RQLoRRugQLmVRZWmKA8WqqHqg59dddbe7Qhq7",
  "key4": "3axLdcPyxiL3fLqUtiKm4ekkxNEgwUW6bafgng4D1frrjL1dPAvwfGZPBTQnDvNTSBeX86h8HGmB6pDV6ci1McXX",
  "key5": "3vxVRmtRJXRa1ep2e5aJtqW1LWr6Gfe9dYWCQMQk6epctUqAHaCiLHBfR6xNejHwQNPeFqefJEQ1cL5FXgDC4xXT",
  "key6": "vMGJtfQxc9EXnvXF6H48TeGobwYWfNA6qrqKsTAyeGdWNesX7F59ydYZLfyBBRYnMTkZrha3jBPpLUzUuhReiR5",
  "key7": "Dxqb3ahKTtFDeuYnRK1YECWkWhMjbaJi3dtaJLiDwRPnJXbjHnBG5Pe1Um2hekpzXh9KpQJNBpPKtRmDu82svYP",
  "key8": "57cTB8SLwhChnKQGRJ8tg9i44FAYntrgmGQEyZTKrLyNpAXvNVSKPYFxPZnDECA8idBZcfEjeNtTaRVzYupYyCVf",
  "key9": "3MZNyxw7TtooC2PGzgR4RcDJ6Zi6jJCb8eGGioDGTGU7SpY4DS3kKX1QRfKEk76MjfiHdNw4xR4VDyQLGXKEjQo9",
  "key10": "2scE6kdLBibvZuhZvRY8DjXtdKvb8dpN6hKtxFswwQg6cCQzUCqX3u86mu8833iKm1dfLJk8BPg6GkQDwquwPCz9",
  "key11": "5R7T33aqP6AjMFzGkWiDWkx1xxk5DXj6PoudsFwxJGhyGnFUwoTiBbG7fdgEUB9kf9cio8xTZSXtuyZfLZTk8vGg",
  "key12": "2zZTSCLRTVC9THEySdFkGJUMKfKnxXwRqDUpRBEcmrzoDKvy7DQ6wnTXuhHBkikjZCchdisFaYvHAdUPjoPDeVmm",
  "key13": "3sebhP2o9eWKuqbXFiTMSPgJQvzb4771nEhVCqJRFGr4emvZv7s27KneY7XLXE2VVmP6zNhVDPfH8WzDzatcWWyA",
  "key14": "3HL4DhSwrebJZxGV3FUDJwgtUKDbkLpZACwuuXFSNAtbUgBhhEkCErKShMtCAza5Ekwwaf8kUDtzSBYs9fuZc8RZ",
  "key15": "5U5rKqnXhog4AhsiEcvySZ6Qy15CA7jsXFP8ZRPJhf1mHYs22S14QPg9PhufmGkdxbrvuiUMqyWHaoxaYuMYSVxM",
  "key16": "5mS1PyhzdKq1yHJfom3wXotu8qbNPikVqqxxz6dPbQDbkGY36pCP4tfrkoncZuXcy6rseBaks7Aiy8bCzQBMeVXw",
  "key17": "2jVs2judTjL6ai3PkCed8gP1Te5u7HjUzMW2vR4wGedNXhSd4DxcxyYyKArzTUFsFsUxmwmx8kvitRodeom4qFeT",
  "key18": "5wNSUfH7P2QSeNfUdgwwNTxGVTWsvR7j1Ery6YitMwPSz71gHhWAGh2XKYF7BVtYKNo8Tu3nc5FC7CqRFtLPanXR",
  "key19": "3HwX4jg9ZQuKNWnNDc8dPPfiRwPt9VNUAJrf8kceD9T4xttSrBXZpKJ94g1XH7k5xvtwES5Rfv5GeTZbVthAAWXN",
  "key20": "2La9PwJwv22eLNMAGWwLhUUpAePh1Cgp44HFxMZ4oP89MgGKsBEAjdC7a5d9RwZoKmVi5Boi45WPc84cQLGPmgqg",
  "key21": "44qKExRvCe3ewQYw64BE44NFgRpne4TPZWabgcykyhe8V1gmYuhfXjWd9MjgixCdnrrfddiXM3biFwTz2vmgkZnb",
  "key22": "3sbLYLA1GXzLgqgYZSKdXnXbEBaEvb3m4zQB4w6ve5BEHa4s8sDBZ8yjxFs5znsSY7AyLEUAYazqTCmX1S1M89bB",
  "key23": "5LQrHWiDw2VZZzqkTsb24sbLN9xoh4KwJ5opBmQfXyq1HZshUMARjTTExta3VyuRPLdSs6GLcUHjz6obqG1pK3Dd",
  "key24": "5BKc7xGCzSNXBaVZQnsPCSfcvRwaCtmw6PNXonXHVRkgGXzPNDyMgwU4guhr3JTcWoUKAsCurHwpkYRvUmEJcUNx",
  "key25": "4KPFzhhkU1Znz2QFq5bui2hbqrGjvrq9XFDjJje5zo78yk6U48VrG5SE6A58FcSr2Gm9kkkXkv4aLhXLwDNhtYDT",
  "key26": "3R3zKJMhsT1TNA8FFRroTq2ehNxKpYg61h2QXhcTRCjYUd7nysDp1X95GwfxaFEK4voGqzyEsMrbniWGHpWxDhe",
  "key27": "549RFGLnp7W6HmEoV8fa549qCVt6L3MnAxtBxGrK9WcwzBDbyiNRsjJLRMdCbshEeGmHRqQY3QMh9qDkmnjeVMuD",
  "key28": "2qnzR3bVnHDemNaMu394ZQWf9EHPZwwiEr3rcUz87dF9o49b4dmfNrNTon1U72acDAGo1byKS7VE7hQRhYdTcUpd",
  "key29": "2GL3AjtQBR6u9zLS8qZhfAJstD6jyYnxZpKfz7DJCrrc3VUXoZiZE76W3v7LV1dhEXqHGNmoH6XvfehbBzNRJ84h",
  "key30": "WVxQUErSoKVYFhENhXReSEVEDBHpVvF8hgKs662kzr4YoVhexAk3ZSwvnSftwXdTn8YwjUbd4PibZA7niRMuxcd",
  "key31": "2Acewj4U8HPwWRZHG53iJgihZdGLCqcW6TwZPVi2mAzV8xtXzH8gYUaZGTxVyB1ReZiE6MMaNUDcf6PoygWWpmuA",
  "key32": "FCXyL3PcgMJckj5Y7KF8hRXSnAQwuFdjcz8Xgzjc96YULTkV48SBwqj8164rC4SC8smEMjP3m3sfG7ZnFM1c1Bd",
  "key33": "9or1uCENgZxBKNPEYM6XXhXTfa6px4gSnt7yc5ACZw7aFRroEfVf28EXMqnwZppWmQHDYwhKSufAUyz7onU3Vjc",
  "key34": "SfPQB5qTBBwizwBvW52b9ca45z4GuE5dLNTX8MsN532gejRTitz7xpDY22E3GLGASVdY6ohJ4sX8AkT36JrphWs",
  "key35": "4befrrC1W1ki2ggDLua4km6oCX1e9T5Uz2YadgpmVSAW4NNNPFStv7CX2WD33rFoKy2L6kZhfZpn1zC9EuTfDrc",
  "key36": "69BusXLzcWzakdNTaQLjpJ7Tp12Auhu5XKYVXTbcdEHLv5gwCjuBytgGPsoytbsUFxktC9hzuEfXQ9ZhmdxCmeW",
  "key37": "3AEc8ge7Gd2VhMPqkyasnhB4Vfq2vjgaS4mji3drG5QbUauVQwtuVaWM7KtoAjr9zEvabpoWLcFYfMGLoD3DhGJ6"
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
