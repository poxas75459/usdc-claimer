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
    "2MK5x9gpYCAamtC5xY2UmpaA6qwhrg72TTQGU7uJrehS872mLB3b1CNWkjXYGhdAhvNTCAUTEVGmN4nh7rCHBpeq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tizYCDRzoZQUHPDSJkN2wcDBiwHg3pWuYyrxHCEpH3qPQD4SWt5Yemxo9572P4JxNG3uPAGudu71FC9cqaLcUBv",
  "key1": "469sy4yTHeAFrWvadp19xtFcWcQHZkoxaC2koJQ9JZVYKkotRBW9aCmzNMdWV4kSzMetuCeYBFg9ABfjjrWWxY6y",
  "key2": "2m9njTWPS1Yfx6R39EvAabL9q7pTEhx15dhn9i1JCdLY2xWTg99mghsia6P6LnuPho9P1MNBoQWGLmDLhQ9SwStb",
  "key3": "2YD6AeS2fq4UjYSVDsiMLRxt28hQdth7kEXQa7onVkRDB4c1Va6Vq3pgeGC6CecVVf6KMWB6hQmC51XrxHB96rDt",
  "key4": "3VXti5kZaKJVdcJvAyHcFMTGp8tugjr6KKTZDiyuBYTA2bmCoZwarjGhkQFt11bG4Kgks17r9otvnz22dEpjaHcV",
  "key5": "2UEs6DDbFE2xJALbNNCHkDPaFngGLzN5b7sZgogDQrCk8wrjKJVSwwjBAZBYBXUrL1d4J23uB7SgGogcbSywV9Av",
  "key6": "NhyYhiKxDocGN3U6dWHiJS8392jkk6NsFvhRh1Ecby3ob2uhWeVEqPaDhHvoAz2g8XpcrH9pQv4rrZDbaDcGJcw",
  "key7": "2CpU7qGcQFh9RThUoBqLAeMEaGz4DGvBu3Q7uJS3PKLC756xCNMXZQ6ZKW1LBYirnCyzVjgBCHwDEL5QyU6moyof",
  "key8": "4FnouzufezpAuUHc5EoX4KSqoZdeg1P4o3Jwdzy1XMKRNuoJx7wrXxVP95SvTbsZJFxv46swu1379sC7cxKD183Q",
  "key9": "41DQEgYgFG4qtVnCrYWRmXr5FQ5peQXxGyQ9NVLJcC28ZrtbXycS5YjYLYmbKeb1YdjmcrWYTUtjVpZuFwukeQxR",
  "key10": "2zc24aSxZbGDyzdxfAjGMtwJjX8sx5N9ofKd6u23BN9pDCwt3CUbQTc1V21TtCXa4kpDs71hFt1NDhRGWk35rfgw",
  "key11": "2JYiXrM41Bk24gYTCU7VYsoBU6MLMmbF7K5JYbrRgXTGE4yFnZ3VnzzsscvvmMHpwApRifDembpaj5FzByBJkyaD",
  "key12": "31CWgQssy3JsDbMwc5T6BkfAY4NKYJ1E1akYvSiLFumRCNUucihwFLaqZEwRPU3fLH4Vm8LLVTEoMbsVuBfTTiAN",
  "key13": "4m53N6q7v6BzqvHrR1WrJMGQn1bSJT8UJ7SPyhJmrdkyPzzKMGSY3zh84oQbZDfR9kCqvT36Cv9C2k3YKekP1chW",
  "key14": "34j5qHmxiwLwb6hKd19P8NXBjSikHkenB1QEAcQvzmBGx63ETU9aiAQoMrucKX5H1crVxCgLQVGjHhPPUdNe54NW",
  "key15": "4DzF6U18uZ97qmuhQu7rF3LCMqTfKkRw1z6a5kgB3bXvzXoGfVxh1EzUbPDVg4f2vMkLLNe5dmecqLSnHbT6Dddj",
  "key16": "2i8KPGGhbf9CrFknazsxyvbonUNVnFJjXDJrckWgMujoKRFs8Agc4z5pa2RwGpyWUN6GVuaT5z6ToxgE4RnWpuXF",
  "key17": "5MLPyCbWJHDFmLEX4jKJiBLucc9Xbjiias1ygVJhinkrBtZwZmFb3ZvV3mgTATAvBzHh8h2yWgHFHk2ADhnNVSqT",
  "key18": "2NQ6L2YXCfidBVDf8SUxxsAaRLjcecjMKEh7PVHhAN1JKtuN3Mf1QLpfNwp6Uono5inckhRP1gLfxDFPPN4ywb9m",
  "key19": "37KmiJd1fcB4rAoAVRhahGGXyo4QqmU6ADAEhrSzufvrfKhhvnSqgUpWoqoMxKfL8q3pPpv6pHYJnUz1higYRuy",
  "key20": "5yAjtGsnpGTbetATE4TaJ9hLBJtHYw1Hc5QQ342dxdUcAEpNc5FozUtQ2NqwYJEETsTRfbzvR7Dpad8UDaZZTK8w",
  "key21": "5wzwzb5C5W6jMFzoxLvuq6LRvy17uPCEbn6WN9zeJnpM4J7GMGL7gGcXmAJcJNEEgRf84BxVtydkHBqc2QP3nVJW",
  "key22": "5ZPRFvsddtHXpeY1Y6Jhq5z8UA7d75EVqb6WHYhHWMXoeZ23LD5tgVLJiNcTH7sdrYExrAH5f4xkyvxfEs431cgF",
  "key23": "2sxVWvm8wEyLsip3NZCAYTjfEzYggswkgzZK5zbFMhioQjK4uuLbunxXRM1CgiyBwBahSLKYdNEJtmE8Je7LrMss",
  "key24": "2oRTLZBeQPHRvSv1cgR5AKPueBoC53cj6Bm5YgZLg6rpyh5pRo42wSQLfW7LoGWvYLnVQyfpMhsuBBaWafMHK5in",
  "key25": "5orb2g4iJ7TtFEtneFYLBQrRhMrDXj6ajMVJvdDMws6gKbSuia1vAHM4jbpTnXMDf9kweDdy6nhvThU5u2boukBd",
  "key26": "2CJps2qWufLXF2ZsqZFPWN5SFhPWnEfY826F21NaDhZmydPZP24QePFT8PmpM1nZ1347c7aBwx4uzBZFk2YveH11",
  "key27": "4B5QE4BiwPV2HDyXXoNLteXcaFNDmsvaJYkLsMsY71aabv89DodZUe6LbaRbyyjWQP8X8UMEf78RsN2rgY1u9JNt",
  "key28": "2J6fExMuuXv4G8XbLBTJbUQCyDwffjvvWPQULJrF4brcKc2trAnM4FJ3HaP8XTcMceq6Zce592nVMd57qnQsbfTq",
  "key29": "ujRqNMafCPB1uLqY1BdLXFyg18BboNsLNowmYPqiw7XVfwbqimu9tkboHb4FMwVy7EDnpSBdLJSNvinfinJg6nK",
  "key30": "bZYCvd7QwLnK4nJTH66D8FDrLgQ1Bfc3B3mSV2w8gfu7Si29QWyy6ki8ceUEPYVN6v4cLEQJzdVcFXmcDBqj5iP",
  "key31": "5AT74aY6pGhVtxhS7drxEzD4gzWoNcpC5Y4Jka6BYLf8KnS7jjsrkMrRaUcBA67U3MsUGSvuNrGmPfqrkZu1DAf3",
  "key32": "g5tqjH4GMoWcLoz7k3HtrHJztaXT24qsiDNKft9NJkfjSn7FH3NKferemnbwJXh3GxJBfvWcatVza3kG4ebqmut",
  "key33": "3pEpCC1FEspQfpu2kFsr3qf5MEqXbburKZWTuc7rp2tkeTL1ktU8Tbt2myxRC6UhRLvLNqkE2hVUnMzuDH4CQi9K",
  "key34": "49QeZzjdM7xabUGqLG8fasd6ojWfyWNdSwacdJMK3A6BF4hymXmipqTXhDUqD9JbtTZ6j3Wwg8TrNMEcDxB2JoHL",
  "key35": "HW3hT6gUDencGscizZgrRiMCCqjyCt5dEz5AXM65tzAppRtDHdZzAdtuxQgs4Wkkh2tfm9HQuenVGnHbNTFuzi3",
  "key36": "5TMcYUYQAGTUSKdsyydkfETFP9vA1V9hjwKnPJioYktKgW4o4pnnj6sduWuMAR3DAj9M4gbgBj6wVvwbRL6c71UA",
  "key37": "5fqwrMpwBzVLVay4AsqZuWNdtPr3e7Z2K8jHHsCenkbic8498tZPnhFfhQf9zvusWpMJLFVSp8aAGwUiZKbsidW",
  "key38": "3d18FtLvByErQGF2yS2n5a7sJuPVt6Yg8Nv25UrMmxWUDRaP6x5uFHHKabwD5vqE5uukA1BcuAMuJHBV5zeoWm8d",
  "key39": "5w1LvzR3JNDHr1Tc1kptANRgzNTxp6pN7CTy5w717zoLmwiSaSnGS22uP2hD5CfzHAMNKbAkWCMPTiv1tBYxMsVM",
  "key40": "36YYnfRh6r8eqrsbhT7vd6DRLZRQJpxEBGEGkPWTU6oDAdypGGEUf8qjd3aWnkybP2L2W3uZ2KaTihrETTRMnQun"
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
