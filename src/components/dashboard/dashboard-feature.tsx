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
    "3fAxsAZTUougRDMv2fLbLxvuPZdMtLkUUQGzBobTZgcwgc2SH1ornx5YeFNvGwn3B7bSpkegp8sDNRV49KsmMvM6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GoxL5Wd8WwMhAhdnZp8694QWb3oztenFN9qSg7Ux4Kho5Y5crJGsRjuZqyzG4i3fR849jFPbvLWhuRaxDEoDAUi",
  "key1": "47bWRAMRnCX38ARU79QFTHzxAEDpFbsKXq1B34LKU7FdshCT1MTNJA4Yfxrz89AmKArSiYkinDaUrPxFWcfe6Eae",
  "key2": "5ZPBQMAkmMUnjFmT2T5wDwGmVFi4N2BqyAiJzvKQeJmNzcetwx9tWsUnj9RMDKYX2jCWVrxHC7Ug9e9sSQU8g5Uj",
  "key3": "2g2chjzF3KBNbcEsUTdGkJePiZVmBbE1rXcoLmBJxfjqUU1VtDY8aLk1eh4sq3xeZQg7SgdZUNJbcPj8iN1znqgt",
  "key4": "34nxre9fDD6Nb1zzztfuCqzmUgTWff1z6xNop9EJ3a5X4b3evWiGxnRFapLDRtaWkyQ7UHQUj7YaZEiCwYy1Bgha",
  "key5": "3PxsZwGdY6E1Ru1EJciKHeSBVW5svLT1XnoT4BDvVt8XXjMaCwsLNDV1rv9CPh4KfuAmcutxGnQWWUsVr8SAVZj3",
  "key6": "3ADvK5Fj1hQYUTyzpgukEFbEygC6G1t7KVc1UjSbm4dr8t2NY7jjdCkZsC6JRpy4TSV4dkJumHh4ZNp3sqmP5Hc1",
  "key7": "3zoTMKmEVC9AbULtF6qaoR4T2c576SHGWsiNq6g1wLS6ShNtDJyT5WasSzpLNbdr6t1QXaynWmsc3mR4gSemLDPv",
  "key8": "2hTRTris4XXETaZJz1nJ2nGHQDfhdYZqR9Se9MeLWw1QciEKEotj5C76cEvHfqweAybQM9Hh8XQHJQzaM3h4ZNbJ",
  "key9": "5JQ6NCBq3jyoicL2h1GoHrFGVu5LNCf1JKSVnMW9Zepdg3gYwegrEM2DNPpcb7QynphXZKi9Bktrn84h6fjAwXXw",
  "key10": "4B7fUXGdLLUZg9fEaMWwBqbWG1ce9gw3Rsr7gTvUaQPTZSBp6gxjoRcNoTCUdxUYtyi14zvh64o1raJ7o4UhR9o3",
  "key11": "6h2iU921pkVfCQ783g99pTs5AQ6VySxCu5xbs1mVgjaeBaFfjhzL8jcTpSnXJRPUzwy3aANopDHnKRkYa64utWa",
  "key12": "2tB4P7vUjkebunoLtjKFZGRZSTxunpJEeiBcpmPnPdZ8myXta6PJtnSfPHhKedJMFy8JRKqBqyck7LpA3GznSbsM",
  "key13": "2RX8j8n1shqtk63RqzreZZ9jgyr2cWCVSx9nDaqnYBPKWCAXALWnen1HCAdvp7x7zLcxTfs2PVNPrS55mQebioNA",
  "key14": "5avvcnFiK6ufsBBu9BQBYxh1Qyy41uwk4hSCcZoQXJyfGD5SX4NMNueNW47HbrBdAuM5LkcQMaCfpXGMLHMhDVPA",
  "key15": "4EPvHUXDzz4oLTu5EYTxBfFXFiZWzZrYcAzu4XW9gC27PsryQVt2uwNNtqsH9yYj9grTyhEFHEvHcpb89gN1zdau",
  "key16": "2ygt7wwtSh6koC1oExPUmSz6jPRcPcW6zsvnuWCoQQu6qxRau373hQp8VDzgYe9iGYXutYcf4KadVQFYZh9owEg9",
  "key17": "55hUjBiEZzTSF4vWXzgeo92KvUzQth1bbTRVMB37cnfVtmoFTMg2ZLeXm6QXSJGiWjk9HWMzVCeJixvuSsU54zYy",
  "key18": "38GmPjY7tPDQNAHWpRxidzhn3U5STJRgTTqVwTxhCyyQmmJA5q4Vi1zH4x7uvVZhqGfPKP61FDwBK8V3tx6BJbvG",
  "key19": "4fs91pA6Vm7CeRyd4BDR7e8kCsFMTHFJuJMTvMh12YuAV5kXRdgmPexpGDejtryFECRzBCBxWQvbth1Z2U7N42jG",
  "key20": "3XvhdWpH5ZioLwo9LMRG5o1Kg4aSBZKCc1iAb4xgn46xaqdhJ9VLdg6MuKzFD1KWSS48Snna5UgrF8QAeD7Kcqtm",
  "key21": "29jciXhMeu4UdBww4Dhk8RE8dwMAnGmoCFCyv9zMjj8dpJbNF8LmftxFMg47ZnVvkbW2KHLw9qGUDXVbpzVWcaDH",
  "key22": "8mLGzwbwRGXEmPucUEGoGj1xec5tBBzKXUJvxbo1JGPNXZAJu97Rhcyt7EnKHUiVqCHb6vjoSFtEbAY6UYQ9QEW",
  "key23": "2bGRJQks6C1Gy4iNZe5GaTx24mAzjWGj6qd6gF5uE5FeXgfoZLRTxX13N9UDPoQ85Z7rKU6RSrSBkDrtjC6YhrC8",
  "key24": "4fXe6Nv45xDhpiBR7S7mwbi6RjmtxTn9UusGrdywA8Tvsq4cEUoKkbivni2nHZqkAhhPgiugQ7wTaK7bkE6NZu8G",
  "key25": "5ahRq6t5mw3GxF6Kmzc9Vrb7QNynmTzMw6ZsVmN5zJQopcDLnFJsagyoyEQ5SKaNzYdfsPssCtKNiQD4T8NDenMu",
  "key26": "2zSNCShUCnDDDb9g5SjwxYpzSpfXZHn6zDV472uG8Dd8spRSktTHSg8UAw1XN6ZYoZWdyYBDtJCqo3vtuaSpioqj",
  "key27": "3ttuPXuc5cbDoNk6tVx9Kv7J5mDkvfkCbPC1EWHkTUG11pc2MFkgXzdbgqAQKwjGAamF1HhGxF1PdNDsQP13m347",
  "key28": "3PcD3MeNfMBnyWeB9axo46tS23NigdfCVZBmceoLHwbEQM1SLZ5AF2hdKFCrwJnTxdSta1dgQkxhGw4B4wZ2oPoj",
  "key29": "28Rs54rLiTxtK1Hkphab5wpApwpAw4LmLdvZHjhpU6oz2WYuVNTH4wvncn9PyYgHqTw4Bg2qvpu8zkiu4FiyQaCn",
  "key30": "4x5H9E6GG9p7hPymoUaPGqojdxbg86CmsCGbCY5pCPzL3hfahxENNMYbha6sYHy5y7gKxJSiA9R6zaAF85VDqdps",
  "key31": "5ToSWBhwbDFYbYvrHz6koDRz4t4Mc2hqUuh2B1d8fMwYpqbRpSLD7BPT3vHTZsxoW9ytdunfeqyMirajoEfGKvEA",
  "key32": "4Jn3zL9VuuY3HpXgNK77dkH3JVJLthk3KPtPuup1ffnuVFEFTVZkMQBaUBcy9mbQ97ArMjtbxnRsFpAzb5H9a72Q",
  "key33": "3SyT7g6RrT7DEKsei4jQQkFYbeKf9cTjJZurvtJ97beXAiBmi7apcyWdSZGNLxWY8XqEgPnfvQs4KsJ4uBb9ywzq",
  "key34": "2ZfNw814Gsra53WnYCuUu7J7FzHsVvnz6Tjd1WbJ6ttS5pKvMjbeetSMAzQZB53knXTjxnrNZNvvfm12W1k6ttJ",
  "key35": "2xypnEHEjterQ9HaWdYfSL3TNLZ5igttN1WCtf7nKRDn1491XxSsR6GhtbQ3CkdHWvxMgbmQxfquMxGADiL4NsUS",
  "key36": "2ABGQK4X882gtARX73E7JADLCtGa7q2LaqRLShJDzYFVX1TVuwfdk8G4WwwcwWGJzannp4hfAuAyLXRgw5b2Ffhh",
  "key37": "37To2tEcCKXYvc7HDVsK5mjNFpUdXEfM7QMByFRCYmkLVF5RvhtGRD858NM9EiXqyPtzLndmgrbw5AXwGEKUC3KM",
  "key38": "8y8gekECyBnx5VfmeWZxaARWfyGGkQTe3HV2hehpo3q3kDDM3tL4awfEyEJx1a6zUeZJsD1X7CRA73uAciXkGaw",
  "key39": "5Bdtgt7mJQYNBMSesXVDMkDAQp1jF8tMNywegMQWCPZynKreL3N7b9t1q6rBihiSf9Ac2m5FXAAxLRzkrNQXae7V",
  "key40": "4AUJSDhu3tpGQFsvaobCztn6tgnF71ipaQXhRRnmdyJRKLNHUBHENHC3tkXJfC43RPwBDMJdGiThbHWcEv9C9vYd",
  "key41": "3bym5jrtFz4rvudhvZqEvgMDPVhuGSGD1x3oQuRNifnTYfmFWqh9kPB52jZPcj56NvKqB9Dwx5tjwLykgA8dR9UQ",
  "key42": "4BiVCosQbmBhym5yNmXiwBxR75nNNsGNM7SzetjsTvvz82USXmryMT8Nec5u8KH5L7bDFR169F9a8U2tMPphGMSw"
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
