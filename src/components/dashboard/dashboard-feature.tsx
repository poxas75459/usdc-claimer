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
    "5UnE22zb3GhvtPN1Fy1znVy3HxVJZyWUZQUFYCPFgCwxs7B8o2jr4eFYvmX8VzrygQya7eteKhrdpaGJDZE9ppLr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46SszDfoAWs8YQBxZwRresx4HgkDXdq2bKwzUiSB6vd4n22snhY2r4TVA1LcgXabpkdbXHu4UEkj8DiqKEreJxWq",
  "key1": "4chUeBmXPWapuKLzHGB9u5h7HF8qcCFPKS2r3mmhHHnGgQ7CAGCbNru7hjGJPGjEeEjEgdbMN2Gb6A5T6APyHQZq",
  "key2": "25Ddn8Y4hTXu8bcSHiT2AjJrDQkHELC96rvUxDTaVcgkD1PiapbSGstUeHnNUfFpBuzmR9V7tkwydjZQu9LhqNgo",
  "key3": "mehwb1u5sMzRgEXnroP6pbZY9Ni3CC2oYytMYiY9otawxLcjWZpoi8X2UPurUTeuPpNyVEDQqjsN4W47MbRvgaR",
  "key4": "gMpxDeMRmCvjJXwLCJLJX1629u8p2m5GMTbdpSYYyvnX2d8t5ihNHXv9CMYYKqgPkhCsZ3dCS7FsTY3N6me9JY4",
  "key5": "5dXzLkbxq7CXvy2ss8TTKVX4X32vNhex3XXV7GLCBak5MR9GqEZUwSAbYFBjhyTCAByyLjjDusaeygHCqadB28CC",
  "key6": "5QWC3uhjtuhKdLF6ZGV1VGbjEhuZupLNCMqQw7wgwApCPSszh8Z6UctqkbRQs8WcXxR7W7oy3LVmhjYCD7XJ6L7P",
  "key7": "45vwsnNXGFyfzDFGVmbYW7NN8zeTYciQZ89XeUaHvEjthQ5zE5dT6jwSShd2xFfPAQ3PRMBhNgkarJrVccZJVWZK",
  "key8": "3Bagrh1A65CfwVJ6HUyk26Jg9SigDjsgVTiH3RtxBPnSXJVgwi8jrSZ2yWyUrekhmiYhMJYpZXMPyr9BdGgXmtbF",
  "key9": "5FvrBsTCXWM2vT5ESjKYw2noGhkrX8XWGvthPK3xXhxTivqivDCF8F9dPejgALjT9wXgD7V9wkcQirmNxfsZ3EXx",
  "key10": "3c96wg3tLqKEfxmFKnvNHMjkLDkXFS3dGnZTkKpEhqjq45bLu526NimyK9uDpE4jgSuELBMxEbgcd4mnueXCAVp8",
  "key11": "5X3G1vMnYS7o7EgyiDJYb8D4MRGcNb7h8tBtm7B1dktqnag7TD784CjhovVvnTiYrPP5dTbK2Y93DscwbKu9e2TX",
  "key12": "5M3rZNRjUBBqxgGvXgFkLgMToYXebyBW5Hy8Qi5TvnN345JZ4N4rhL4rc6Q98xxk4gMqiSWPvpDDoN5djLMHgvns",
  "key13": "56CKnFLs1erdAZ6kzheFsyTstJNBRR6ww6gp7i7XdM7m7pM5TV9SXN9dSX31rAG8tyMT3VP2fSybeYygVoUHu96h",
  "key14": "2eG66MGVJjYWKRv9GF1H6EgvtrF4VD22CptaWzT2GgcuHAeXcMdQbTynTfyuNbCyNxwuXXsvANeQkUjxmd26Ft7C",
  "key15": "hbDaBL3LQ6otk6sxcZ3FubN7aazw5TtDJkLFVFHgrdXJtajX3E3Cf6ABmKv87Dy1NbsDYer1cTEhtL7kJxLq3zU",
  "key16": "4FyGCHfjH2sJ6wQwCLTHVFvBDgdGUp4rr3a8cSQsZYk1wGbdmtWNRCwgBCBeczdXGYoa1iJMPiHnF7VSbvoPGJpf",
  "key17": "59HyDuVLLpEpnfzQGJaiF88zU8k4XHMjrCd5ArXCwpmztdCCgCDcYCzr6KF4tbiXK6dMGhLEBPhhixSFtCv7qPgm",
  "key18": "3urPFg5BBTbeuvsiXVUJwveq44uAgg4Rsju4a7JEZKnuKoH9D4K2L5Kz1DGpXmCKKVN5h6y5S8TbYDaNQHyiJF6Y",
  "key19": "34S2DcVdzAgNnro3h7AwLPGcZk7EY6eHAnk6tbDuosRarJehbaWRqqaQhpCT8ifUjSa34r3YiyMucfxN7S27C1e5",
  "key20": "zeCs5SdCtQKifzAKmab9h6qgASxHW9qwRN5KFVSWUWGWxFBVEves6HDRV2ptAkJdAwHqntZj9Y6KEWGvLMYygcC",
  "key21": "2fCtjJdFKqiaEMUWX8d3q3hHhpDj855wCj9dsr15qVcuirHyAdn9oz5BdWuLuDJTWps89LBinaYkwxYQng9sYDgq",
  "key22": "4r6xjvu9xRjUM1oar4c6oCS4fdHKYAPADPS16iS2JUKTYdW3GbTs3uHajfq8v17eanXSZH7JpauGTMXqnUc5ppsY",
  "key23": "2BM5VYMpdsAp5fCu6axWirniVcxJ4Xz6epW9MQ1L5SeS2hC2EZw94kKnWsLVuwFxPmUtiEKXAp35nw1qtF6JJWfx",
  "key24": "5i89Hb7NWL3GdYJDATo5XBNZGWYqi3k7W3wNfqMXXXExVBP1jCV8UMzCx2k2R2hKpDuuAfMRGQQKHmwhYtbTwCuo",
  "key25": "2XPnuy4rukWbJwLiDTc7SMpEGp2LebJSpRTW6NJ2C9ygvByY3qFzPrpRkUX4j9sqGPfWFpy7w4Cxdng3FrUeCoKq",
  "key26": "4qtxB9jhuSSW9w26wFM3A1taU7QfrvDZSBdaQdGdS74VWNhdQPBJPzW621BqmbWSjN6uXFBmGjPFcd1FvfVhXhxn",
  "key27": "5We1JCpQv9hnBvCQDPbWSPWEV8sm4aMuc8FT9Zw9VuT5R5pUdgQYmi4Kx8wE6cUEji1NJVgsk7PFU9PKs8EVTCXu",
  "key28": "2u6ZfHdFnhUbr7YCJyRcSH1DsAWNPC7xcjZtK7qbTmcbS4Rm2Qhj4TPGeQ4uQ8UmtepUCAZMHwbjmL4gGkufGLLB",
  "key29": "2ujk1GHi4j1bFyTVoofteQhzaDbKhveiBBbKACdvSSqNDxBwnepRDTDKS2iYAhNeHCH8RaNZ6iwd4rUAWJRpLitx",
  "key30": "3G1SvrJTxo41Sf33rXyf2GbMeCU7S5Xb2FK5qdMwMZS7MQMFmWBdroxLuf7mHaEzp1hUherjPjKvuxQtP9cjHoLQ",
  "key31": "4X99rQ55YsominxK4SZYNRhmY8QyGBtxePXMTcP5PAAaxAoJTp7NGWMn2gC5dqUEkgzfZKcE1TuwywNU2JNyECfq",
  "key32": "4tRg61LhfCWAdfpLSHH77PKDVL2PYby8ycKpiUTzLohxBhZ1e1QXt1X9zjpAo1qEcfeuBUjApYLpuC9bUQwHDDoL",
  "key33": "57Mzc3HWnNxwHh9FdZSusqHQycwdjHWXPzW7WqVJY9yrS6KcMNaZ2TKmmdXt95j5AWgoPuqRHshCbgqu6Zfj7SRB",
  "key34": "FPmQZk8vfSF97nLzqRGhMRCv9gQp2N3sFD3wCpidZWWrp4pd8giTrZJePxYbMfiNMjjJRn3G6GnECfKxyxdjDC8",
  "key35": "52BejzbPeFVhLc1dEhq89BcR72mkYLSmEFr8wuRZRJ9zivvDABjsVykMTXaFAW588LRKEL3kdYHQQ5hRzj5JW75Q",
  "key36": "8HDA4fbNF7dLmjjNVL7YmnnrdqPvUfLC4kEhVKL2dgqoPj9u1GVbLjsJNGTbDpJoKTejyAnV5zKJ9CfK5UE1YUc",
  "key37": "3uJRGH3zRLLCcTsFph3pZZX57XEY4juMwKQepcJ3QQWj2HD2o71FCMWeheoRVvV4ppB1X8Nou9ZnCAWMDa41ZEoK",
  "key38": "5cbWY5FTY2KuL1ZakdSiG6S25BThfsk1RbCK8E8fjKS6qycVQS3dbJJtuwWAbzGy3yCCSQRf6BPJXYcgR4f12cCJ",
  "key39": "4Eg1yizAqwG7SSNvbUgvxjjG9PCMdg94wrA6UhLMJhW5ZPnVcYWx7f9bFBZX5h49uMZCjhNw6tNwLYBT79JF4ALw",
  "key40": "4pwX2r5iPSE3KQLc5QVcHaUoNbMkFHNc4XTke83yKawBQe6TBjbx58KSWiPcyW2bT7dUStz1dvNF1KXhixT2s6RV",
  "key41": "3VuS5EK9juB7bgaCnKHv82bfTjobGkHQEgdKJXmaGebSSXPSw81HJpFZJg1iugrEZEkgXCGWxjBnu8gN6syeiGrj",
  "key42": "5gFPZwF4jNtSeXr3izj2wbv3SQTyGJDUEJejARkTpnbmxz3M2ZdwdBSgBoZ2D1pg33KuXxAwcCyFC9gxnaf6vz6",
  "key43": "3KEeeoatV5rTKUjSUFrFUHfvNEuULgbNHtb45nVFke1ZadEG5yQCdQRh6TLxwEYxtCB3kgYePttHhtNuGv8qD3mN",
  "key44": "4LwVHDxrhvkcLqdPjfzMUDjZ3qsT9hzuHsHw5XbTcJdRtT2xRWrZffybYEL1fe8wYPW74xHBP9RQydGfVUTS1AA3",
  "key45": "4Csbc7D7Jznxuv2JmXsqWXpuVjNzPUnjP8FxLtuWpgdQKgivaoVFit7v3zpcUcghxgbdoQwErKCv8zpW6KgSbqM2",
  "key46": "2CRLSv3K2zA5sQX93V4mufUijRgcpFvS972U9UYq4Z7dX3gTDRk2GC6iddAtbeBeQzrZEnhtNEVznmuD6JgGhsBq"
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
