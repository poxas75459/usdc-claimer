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
    "4fA8c8wPDETgUdYKgb74gomzAqrQ3ZDJBo5HzMrNFmsuaR69bmk425NxBGgoh6XTFc3Jc1Bb8tqiTwtd5qJyrT7b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hqe6ZyM6hSWkbw4vRczfPRGH1Y29Ki4qgzXTCvwnrG9bhnzXuZPiDmtPCsdPLNvb1bMZFW6NW3VaUTQoKbPJoNC",
  "key1": "sab9o4bZcC8BhTCFq8qioUmAV38J4y5MMEFcyonuB8n6B8ZMPCARA4KQjNro9AKDqK9YM2TjvmLJX5kcqxdWT5L",
  "key2": "52pbfFJB2TWrm2Puqn4pEytUAqAptcqWUL3pAW7dp9W25Xd7iJeNnFxyq4aHtkDXFT3FuPZTz7MPsm9yJ9NDwEjm",
  "key3": "51DB1heSNwZjxc6E77pnRpdy5CNC9vsCvnyhTjcAEMBdnYVMrmLnbwqnLSD6Be43s6oXw5EYPY4dQKFbsYiDEB6Z",
  "key4": "5bCsRjyAnvQBQppH6KY5vRMLknqaLE4FAbCLaF1qxaukXvqXgXtK75kFzxC59GBKBptTrvT9PQoYgjkyN5bmYmAC",
  "key5": "2AAuWVijntTvamid34eYARJZjWA1vvA6MGuuYui2ECKHdGHjNuYAJ3Ve3c5qvCfJSbdKavUeCNQrkjrDSVE1tGoQ",
  "key6": "hTZw4DsGN4rJUXuh23mbRZWWXdo51PH4786bpNbrT26FvgbY3fXS5tPrvEuy4rSjD9e6q4mjnN6QNnRMbzUaq1x",
  "key7": "6wPM4VV4HvyWaMwtsveqLkcEBm5CXTTjweV79R68MPYznvsx2833ptp6vMZjuFBxo13Fw3TWkhA9sqToiAfF9iV",
  "key8": "U3PRNqMa41b8yQUj2vLQ3ECPjW4evW5iVwtC6jpE46We9EyX2kdPt4JYPBRdG5xeuNSr1ifdz7oi8g2BXeB9kKt",
  "key9": "42nxs97aPZ44sSoDCdo8WHvDPYgHYGYVRcRVZZUfSerB1mKPPLZ29WGCWxXkPifK2ygkZ3GNFzrPx8avAcbwE2Ta",
  "key10": "UfRo2Dhxvs2544ZsaZ6NWgcyzzhr64fZDDcuGZRgeyjBoYmTU2p2fuGDdhi8VAsPQbEwxhAAYaJx3SgU6u5u44f",
  "key11": "52R7SRKVCz2zSHBQEuCZGvK4ZfenyWwmkVcQJXhxV5hxgWYJu6b5usX7SmSBkQntcp5mn3eVyzcJc8smuu5f5W53",
  "key12": "5MzoEyjaBayMDvoSsAVX3yuyoRnqX3QdzjWRLrADaQ3h7jYP9Kau8CutMLAVkQD4douuXhVnhJUMLpZiSqwQ9woE",
  "key13": "2Ym9o9DnJUHbHatkMPhH7LP74Ra6RUwhw4uDtGZ6wLfWtFCtjqzFUFvHmxVB2H1L2mJo96iH1cUPvCsRWTDanBRE",
  "key14": "4yPE7Yy5e35wMJyv7xvjTA3uB1MuXtjCTR6AjzW6e5NNUamdwXgmcyMifQVwaYzmvSzDBXFaxSZiLoAgSGRvNQ6b",
  "key15": "419FkutjekadBMm6eaCaYpyk8nB51NJirBD8bsPSNbuaMAzBamf4f87kbMQg1Y7AEyGGTqmtWFiKqE3X96RTsib",
  "key16": "8CYEF9W4pfKB7dwZY67yuQDiXnGeSBdZfaisGTYScWRYWvzefWHYQxybdGyNpmkfrx3DkLVc21Ui7hSgcU49v17",
  "key17": "3SHrdUizsWCMsGiusGTyPgy19p9mQ8txVLovFVWn6b7WxhSiq1ZBbR7oXXLzLz2rd2XjhqqMuwBLsBdV83vvxR4C",
  "key18": "5aJWNF2cQg9UtUDKfkZnUttPhPqYM53fUxct58qZZjg4s4MPnLhGVJVQR4nMcXUr7jfgqpsKEHzBUf6nBivYxpuA",
  "key19": "2Rd3KBkfmLJuH8SvkuZATXtEwnkk4FuLeFqaohkQaTZBgELYdZhCzwrgNVuY6UmZEsUacKrxy1w1WAVE5dj5m7DW",
  "key20": "ejLRESmi3SSHbVdHYoVB7tVKp3EmNeTPDa6bQsPCfMXxirznrEbYoYL1pUXQDG2WScXpf2f6LV8wiaN86uhnpDa",
  "key21": "4sWGtAoGVZPV6WmihSvUWzA8BjLV5cEbuDChCmeF4VxfYzWx2vqE5hZB1LGe5w4phc7DPNudfDSUMLtZY8dP6gC",
  "key22": "2dtsC8SV1nRtHn6ZoQLwZdLJSKM2wxPGE2TKz1kUMvrjEDX8oXBDKcDvyzjTsTx81TwcnztqA2pu5SGPYTWDrw1s",
  "key23": "EQP1AtqKr6PrXjQR9CiorfVTEp9e7dPYoG7aQ133Qh1dmJJhBSBkjWhhy2HLD8o9FZE4ihQZbbhVwLXSBVsrWme",
  "key24": "2i9MAWo7dnpE3t2sUUC1jzDgHs7CPiKJvV6NNzL2UG29tRUZVNa3xvjs4PaS33aEkuCcKwYT3zETQzKd1TboPi6j",
  "key25": "5ZkCXRtjiVPSwkWMit76v5iWdgRJZFB4gP4zfnwQC6YKB6wCkomRfMaiLy1jRHNtgdhXGCj1qHe9xL2d1wQQwsbD",
  "key26": "3UB3HALghkTXtwrUkWco2cTSw7EvGyKCMEeQkYwL3x4zMaErtdh92cNi4JdFCNX25xajc9sgzDcZdAy9VqTXuEZV",
  "key27": "2ouAARcKP7MnjuCiYqCUqVpicJpmsXVhiFKW1MhiWgvi6ecd5Nxtm5fTLZ4YM5HB3E94w69dNsPqswBPrWWgwfPw",
  "key28": "34qoUqMsznNPttZFxP7EULQy9hP7AJe1iho5wmbybpZxrkdMRtd76LwnB1m8DhTsFUpWVTFocb2gQ5G27o4s4rkR",
  "key29": "3y3aVcCEVGCuJG3jjs8ZQjYaUVi1DYog949q3bovZKYQydMTpSHFCmadar6MRd95usVunPUvpUyY2wK3mQg2Y8T9",
  "key30": "31An1GmxqQf33RaFjf6FAd9fqzT1AuLbtNaNdEd1bRr2qzf6wBtyB6pgciPk5TLMhoMBCeawgySyTcHndyJSz9VJ",
  "key31": "2EWsgk4NBTMwLEEhbay6YbeUvSf7b4grE5tG7EmT9hx86UcdMYDbBWaxkudP6TzyZn6RbmJ9efe1F2LqcLRDXksz",
  "key32": "3z1gN6Lgp5R9BxMeQwMf2MEaXhC5tBeHPZuc3nAohk5iaEpeMiD4twswaPwTURCc48YDXL3GDdRoYD1HVRYPqov2",
  "key33": "sKRdeiaVdoaUGWKBBx53xQkS29vVVofW3brL1yRygnsG83hsjWs6jnWLmibgaNcGVz1DuoxKJ2S96sKKGR2Q2tF",
  "key34": "63aXYd24LsjeLByhRV7bW8wmj1U6Uz26RwpX4qZJoggGBFvr6TmDNszYaUsdzrZ9JdRJT9Z6c78gov1MqesgFadf",
  "key35": "27PG69rqgx2ggtCfMamYMmaGq9L6AgDdjorWLn8yk4TFnww1Ya1Gf5NEzs3S4iHaHR3Rb6oURSpuKiGeAfYAiCBw",
  "key36": "3MpAA5fMbaAtW8bfzGS6KFWbwiuE8tqZ5vyd2yKUchtyEJMNnSmWwcmjP9NbxpawGAeGV9RfNnPMeTt9kgkhPpik",
  "key37": "2399yK18FJss4fJB3GcXZu4iwzMWMCW7eWiPJJh7vEp4A5naU1jtua1bktrMZd9qwjUXDAQ1f1u5Ezh3u31X2vpY",
  "key38": "58JnDjotcDuHvMKww78UN1gkG6vTY2ickcVAvKncqr8dY1CGCVJ7NB55HSLPMbmWRaxBXU8GWN1NHabmiPnehKCH",
  "key39": "4cVcN34fWStBdBNK3uzs5kdmZvrQg4ci4BdJUVqt5JZhJvv3iXR4JwYod5AQXKWXwzTKLVKkBHHwAstK7po3SXyG",
  "key40": "2mtQdAVqJnCVSrXe7uwunS8qqahBmoUYrXAYRE3bQ46vpCh5U2XZ9yLcSXqcRPrVkZz6gNEkGNoPTPc1dpAKrMLT",
  "key41": "3xZBP4tHwa4BSiQHNMBZ2upyV886ygweKKiSpi2fRM8kai863uTuwR3PZD7zcgvkP4WKg5PHqGGDjZZqcgUPXBr8"
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
