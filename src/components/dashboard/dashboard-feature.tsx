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
    "53NBNje2y2Bx94pW9UhkYN2txLqJwwNhJbKoBSXM9Zab4v19q6qZxdq5bm8bZJQqcuKmMRnjdxoc8kaksgQyVFiM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fMWjdRMoRwJ7vZQduFS3BhuamyFgQLifkEinTTUfhBhkTKZNT1e2g3rn3XmVfN9oDhnHTqgcMmgEqD2Lwx1xadr",
  "key1": "5NW7nD4TkGTXDBcJounjqgMsU1bPyQmko2UjWJjub8MdY9mskMtnzW7kNxjPZWpZQWLE5bvwvCQf2ff2t4Rjiq4h",
  "key2": "c2F9dBFPEPxuQ6FTQmBiNM6YaxQWqwJKfBE6d7WoPvWtDMjfrpWF2ZMy3Hedo6pLdVideHgWeBrw29x7pDTZ8mw",
  "key3": "4m3f9pd8nHneW5Aw9WpJQhvaGwPguN4jSdhgQfVqgPwj8FEtjWZP9ZGXM6vfJEZcB1koU9zkGLKcLRCpsfTMZEhA",
  "key4": "2N2tfrL7GMvPfHNqr9munLkp5eBccQuVcicxb41svaymDuqAXAb3NvvLZgm3CYcySPzpL3yszwUmHj9KyB1KhmG1",
  "key5": "MEVAtNnzhtmfa6t8D9yvPb3HudhgNdWoR5DEGVGTEHZgVM8f2F7dfbUNWNHKye56AG7nntqQMwoKVUZbesjYcQW",
  "key6": "5XtdpeZRhkuwMSmwcnavVQp32TFxF8zGUKG1sq5EWaTLtvb68wMCDk6YUgH86whBZMfGVr4oJzrTsdQxaL3VLbY4",
  "key7": "3qYC54wPMPV4EDpyKVosJJVm8fo9yFJPe8RdnsyJYFSzshmM4iAkmfo9uQKbkwKqwLMxVEiwmZkavwq14798vmMs",
  "key8": "2bX57S6m4BnzKPVM4uQHT1rdyBMJVhCcnzKu76mAw1rtbJTwcAJ9bpvgqx8jXMHnpS5Wk2dhP5HxH8dEUP3iXhRn",
  "key9": "4f8FXdEFzq3Rupec2eGMDDCAZ7CmYgUDyyvHRN8MQoaV3aS4MWnkUoL4S7fJJ45Ui6DXH5FsJfMm9m4P4o512GBA",
  "key10": "b3voVwAZ7EUnxV3wPTgJ5wWtJJa2WehWY62mQg2Xn1qd5HQtQPbdfNREw3KesZP8x9HBMXMgmyJN8xQQx2FmLVa",
  "key11": "66kE3UXsRtt9mTaNBeaXmmbxfFFeWXT1s3iZsVuRbDAepJXZjeBCitTfMx1MggPYyK8vcJtDE4RfeCAfaLsDQGfK",
  "key12": "5HsUVyLFL1vdb7sg6XtncdUjb8RQRV5WyhdB53CH2DqSigpwatn4NmKxVP6PVmSPHVnuFmos8E8oxMRKxeuq383c",
  "key13": "5VLGTXY4gF4j6ydbGhRgrtjqtBhD7DBU1PG3Rk5nSqxMiQ6HLKtQqY2wmC6iByWREj7uUuLSVNUrogwCE5LTUE5V",
  "key14": "5H12GAgFNTg4DaGnTGnCtS1YmY5CDFGrKR1fMCkmym9Vg47SxbTR8ryAeLu294y6FzCy6gab96ytyKBuzx5QwgLx",
  "key15": "5evKU6wiKfxofZ3oj9sMj4xPofFdSvZUnM6xmJiB3afGAF8JbbNxwArbY398qFykEt4xWDbB3fS8ViV1hzfLq32f",
  "key16": "4sYCbGHFNzePtVBiTdnZqfxJCMBbJuXsAzdwduMRmRREMjT8f95Aovwnp5y4vdJb2xLD2mL5YMNWVezXdmrHQWSs",
  "key17": "5Qix1kfycX3R2oVC9utM2281j5RihDVNuKBr3of6r4s9twckvAeNDgaSGE6Uhdd8gguo5pwm3LMc33khhe1eQqGg",
  "key18": "5syiZFZ2o2WEqJNGAmqvLz1JRqVZ5knTxEb84eH4ZnuncrFHAw2yxb2tGBHkmFATnx3wEqc8Bt4jBdUSfDiFqeVZ",
  "key19": "ckkfPhrDJdWqHPtNdLtPFYeZDJ22Vya8jLmrr6rnXCB6CYzNXrqWBdYaZy3ZhUGUsdGZg4tCGsBaXpEkw36yZ9N",
  "key20": "5pveDq1AZwhBvyhrY4oFYuxqdGWRsTLfQDjeeNqNM77CDX4BLTj2C2UwTnkmaEmBv6J45LdVk3CaXMC48haW3BXr",
  "key21": "5gmG7F8afwexyyaYZ1cAhbX4KTqNLpaJzwucA59corW2dP4FpheQt7p5sUB78g1KkBaNtjUoTr4DVqufHzvSqUv7",
  "key22": "3H2whBdiQbx5hEMiCwnExT5CAsEEgTjaxknY1fdidQj6wm4d4Evm2qvZTreXN7LGB2bUsWTXNQVejp2SbTamHmjA",
  "key23": "argEi9tUWmLmLRAdjXvXTVcwSwiNH8eqAz4z6KWpRgAAxKUdWS6Yy99ACpzMzdVjbSvMJDrjGGCs3tqscaDh3es",
  "key24": "2Hg6fYcN48T1jDvMsUy53zcyxFxKgsd33jLaH9pKss6N4o5snhk3s9oH1FnXXoa7zXC8WSbqfZeJ18QQMM7EqXBL",
  "key25": "5AXwLWv8nsb1mSGqB5HYVdvGR2gFxoSrZUmHnaDpbYukQYRQuvwcW9rQXo5P4w6sR5JyhYTsiqoSLhU792PKjmue",
  "key26": "A65VCmAS6vZbcR3jk2CMH4B8JXc7eVw3n4sJiFQqWXfpVigTRojTAKYxH4pNx1dmk9FVUxJEQWz9gGmWd5WMngf",
  "key27": "5cw2znSg1d8CzAUsKkF7Qad1heNXjZ1oW24EeQMhUxh9ytXK6GkrpGzsUzauY48ayPKCQpHbMvsFx3U3WS5r2U91",
  "key28": "3R7kAbUdFMyzp61KSdc4aE7m7eEtR4nb8ZRiKpCjf77Ci6dbjdCnR8RHgtunBJo51JKm6PMCepP8LyVS85yC8Bq7",
  "key29": "5KHCRRAWbizcmsQDFHV81hRitmXeY6nreAKsKZFLP7pC8MGR32zzxfTL5Rutxjin5fmFrmeyVvkLszbJRgH1w3Rb",
  "key30": "5iXt4yDhYQ5w7L4V22RX9BbWDJLYJuiGHrBTMFYcezHc3S62gmgjA3H38S2hShnZs7CZtgvs9u6zoDQxACDKcCV3",
  "key31": "HhUWda7gNiTDqksQs8DRkkZEc7fMCyoUErujBGpv7CVvb8dJSMtMBuYaCnseDzragnztVaRvYhuMhq3RunsAkcv",
  "key32": "2tqxGNog19vSVebDzMMvnRTccCoMRx15HtLyZake6fYXA2XdLDD129SRhutwdZWFUGG5vvL5p6Z8N3oeXM1SZ53Q",
  "key33": "2XEr5VCx6ctPt23snWFWFddVShmzEvA4dQQ3vNaSn5maxG8BmeW9SMfeCcgeocaYu3E3DGE4vixqaV9tVFsDRtTX",
  "key34": "mTrYjGzttgwUCtDVTaGbxad7otMsU1sHpUEC3FDNvUSHZ424gexpLNAz6ipKbW1u88fdAP6tDaRR1Nj85wemvcd",
  "key35": "5WHEpDBM5uhLwX8XVetafb2kceQxYDxJREbRTHVQPE8NgCsya9bhnVXTiHa6boWa6bGH46iW1HMaog2QRsUPu3Fc",
  "key36": "5vbwDTHYkAB1YnVyyRxC5VnubR5Yg5A7z1rQXJhaAmxSGMo6aCvAZXk8gtmtZfwQorWeSGe58JNyK2Zy1jWvXm2a",
  "key37": "2c7AvEYK3d1K2ffgdgS5E6D8EkbzpzgvqAtL8GLXPwFYgtgokcsg2uBcuqBhNG6xLH8jNTSqmmmnmwhZdTgfEbs1",
  "key38": "2Z3cULWers4yHGo8TyWHf9CcAWYU6PvfigRC3yw4EF5RRdorSSLG7PEk2PKrxrYuVm87ap4iPwFHDs3VpmNmUTLW",
  "key39": "2gDbxWVF8bAcdrd7jozyY8VacEPcVTGWa65MCWDVerUfTPFVLXfNh3iqwVauPUhcRJQ78woTiVG6ryvm4RGXhGxg"
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
