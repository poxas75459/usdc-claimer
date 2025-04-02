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
    "4Z46cMPddbyiwC3NvMdJEK2oeV3MDw1L4Xhp8vX1dNnewNHcU364qTbVt3ufpmJ24FsQb4xg7uk3qK2q2LbBHCBB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5n1hSdv6uoDVGGxqdx4WHZEZwJY6eLmMn3UXdqV8JG7qQxkdrMCeC8M5HF7Xvpfozw1iyjB1MZRQyJ5EBXipJr5Y",
  "key1": "2qyoC56NFqX3sGyrypo4vsrxkSMLGkb5t7Ypk2mEuGSMbTs7nEqRwhzuViczp1xT6jQ4RdPAk5BSbJHRSQXKqo4x",
  "key2": "3yGWpzSdcivkMmHzbM61B8kngWDt8VEfdW5nBsaYUm2m9kpC3tfjyuJr5fjM23eYWnxQJficopHKm8eWAGquB47",
  "key3": "5syNbGMEd2PWxj5U8mBcRVHK94w4Dut11srYj56XNj6DoScBhESbQyMzHRu8abZNHWzpipQrcmBudaYxqHk8VSZB",
  "key4": "2LraLvJThzicFp6zpPuDbVhRLn5weYgmbNg22JEqfUyQfJ9BJ7ycrV6EV92m1iqtasVzczopbf28onJTX3Hqc99d",
  "key5": "4eWgP3QXCv9gRQyqE2i1fSVUpkzwVYdztqoMRLr4vcHfzPmuoFgsNE5ciUc31YGCp9jR8Tr39pZ3BcHzA6ibTvhn",
  "key6": "2TcKQetc87EKCt8p1aju3zwiwWCa9q96xTMN3ouYZaQx7RXXrseAFtNWWMppT5d2U9nki5Ra1yPdvbdW177MN92i",
  "key7": "3uVtTQeTFc119sE7LUwzQza6WeVBMcZiFLywuhYzpA9j2PpzZEhgddSEnUyBFNBvZevCebm5Nas5DMYjCHg54W3T",
  "key8": "26PaWq7CWMBvNbGXFh4NDBdPfY9xe79kh16H4Bd6As5PKkAMSHKpyYYJdnxyhPBttDaN7SYNHc6xo1ZdqbCMcKnY",
  "key9": "3WYUUJKWf776ExFQCrgVUTqCB9sqGeX8rNnjtyJ6iS4j9SoRrSV2H5PaCcZaZAnVE6AZbBueWqgfsf9Scsmv2JMf",
  "key10": "53jKEYXPTPxBASrGGikLrTRaQiPRTrx1b8thY7VEzBKnad7hTaAP2hsyFSQJgy2g96iRMx2hskJRP4CUupW8Yp3d",
  "key11": "4rXUR5hpZxgNJV4BsJ4vAE4XkgyHxiV9mFPLSfLpAJwv94J9gu1ZygfhQU176reXx3r54ZrF3yJyqAx3p58AsFsK",
  "key12": "4ngnWLwdwWvighmMuRxwHoZ2uSTBdzmg7XyjbEYAfg9r3Wx5zE3raeeK8GbzfjxY8f2RKvT84syJNbR7Czmd7mV5",
  "key13": "2QewoC21LD3U3tZYjhvTfzKxZLiGwigaaVuBm7iUquWJuWFp7VEPMRuGVytcrDeMMawFi65inhpukSmWNHeVEMx9",
  "key14": "3xgoxVMKLJbDfwFScTZGWrTS39BxTbMGUro86ibL7eH16o1Z8NFWhyNCYZMrGjWfJkWTYDjN6KJhjPtCfZZJoi5P",
  "key15": "666tDxJUWVjpjoFE3mka99fPMfzCyHRjUrzfPwge56LRnkF4gufNsrvUwALw8sh5ELdzUM4fqpSsMr6G9BmF9UwC",
  "key16": "3S4RceGASxzrKc1FWxuPDTanJ9xovBXnQkGYBsSDduq13LB9vxo8FtRYGoqHkiH3H9ZaNDpiXG2dxYUjYsBdcB68",
  "key17": "T2XRVHoE6EzfjjjSMe6isAxQXJiqKFBNrkSkLTpasa1MgBMv4mBtnBWYSrKHUFpqGrXS2NunMfXsRcR1SMNcyKj",
  "key18": "4vQcEU2FpAxAaVwYJ2gz1sBKRTbwenMNeMhYLcJ4RruysKbVzKf5UW7hYHqncikKCsD4Vsn4dMfYUEaWEfmoQk2Y",
  "key19": "4sb3YMi8Cgyu4MxrNqFRsQVeEm7JMVveREe5KsH3vfzh9Zi7hxZgpdTfYZrhsZjWx6rT6Zamp1BQyxucMJX9ZT4m",
  "key20": "KTQYNvRDhgZMYgYV3oPN8QVPSuLA5QZjrdMoW7mmBKqYtEEoLq9zizfYz5J9JdSnYp7VK51fzvvcTiBYtCTmDxv",
  "key21": "4mowmQAnXJu14t2Q1qANyFzDnJ9695M3cL2CbJy15trZNCCQRp3LWHY5G1K8RTSivfyhmEKsDgwkWcDHgA4E9QDc",
  "key22": "1PJvTBV6ZJg26EaP6DzeYbsYShYewfSRhY6AQgLrcDdSBdVUqq8zapmLAKhCfmkyEX6LiCdg2HQvEyjWtBpr1cZ",
  "key23": "2mQhovrxWC45id5NmU2xHPsuFe5JQbxXpK2Y6rXMc72vu4NhMCXTzZnTPuBvDkw7B8DKMQmX312UtwMyExzobVRa",
  "key24": "3zeZtb77Mci3qRb4YgTgWbWcZBPSWxEARocKET7FpnkVFdYHgRsi5Um6GhWdiy2GdLozZAzEVcCH2dbW3ng6nmqt",
  "key25": "zm44gu9HiEZLb5tn3vtyZ7oTpbM3YzWh97XVjdKv9C6Bzb5Fm5D6Zj2n5YQ7HSBeAGFAJKSW7AWWJdjBPs9bdJU",
  "key26": "YZZyqDaGLs327rSYTJoMUavbtoKosF4NPMgNBKVwvmA8eMzRuLAGsNJvfZnHQ3CXuZ72D5zwpC3YgTb7e5qrPoZ",
  "key27": "5hcQ1MgmRVqMeS3n4jc5n8fXp2CLowGPkwkZaCdVPVfNB3AGAvcSn9i9MAqRK2X9XWKjEhpvza41Zeazdmfs4SHw",
  "key28": "4NrXoKWSy64LGHHMUepevCm3m3eQrCbG23hwXhEftWAz5Kw4nqQkwAD5rQQ8N6xn7oapnxrBt3eTrMCnMZW1Rqb6",
  "key29": "27jPum8WEHGRax5UVJ2BSaMdhPqeFKiqbGXuu45hz8pYhp7bVSNRqQdpcPnsCkGRUGfy5AJLGLpFcPWr8nzL2vT9",
  "key30": "5WU4KDHt7qRvQhEvWcRrUG3Y7dkgdHaRQ83VQK9w99JsY6JXiAWTvCBG2Cq8y77TbDag9NQVAfWTLS3z2AzQnNin",
  "key31": "4W9wqUDQgLJnnVoiUoavZhY5yVDCwWwCxuFHAAg42LJvSRUiDSPxm4deercz2FdNBXbqsbPE5MHqDujgjkDUkQyW",
  "key32": "4L5Dwa76JKUjacWi862gxcpkUm7GvYhmANpi9uqNhjX2dsDqQ8tVoDPPzXRGGEnEHjJXKzKospUAkF3Tfm1Gb3qy",
  "key33": "yysNTNoH171gnaBm5aeLcprKidMaaYaVt5kQJLcbaLXqkmTD5JhZDZzKgTvfdUfbTVgEqNKh4k2GdtyLuSiCjhk",
  "key34": "5MZErXzP1WzA4uCmEJh5Eg1BUSfZ8Vt4dzykiYuPMy89zMBHgr3yyj5fNS2fAYBHZixuAjLGm34HJAbAZM5z78Hc",
  "key35": "2BSBC6ymC2LTAhJWn7o114Wj74C8xGKdNYkNBCszDqaKHdPFAw8VrxfWP9P2LSgPz262MS7f2dvsdVHu13DC63XD",
  "key36": "3iP6tngH1a9BuBL4VMKzPsStwRTMwrR13pACK6yrngaKRR8GmaP9SdF9VFfAPHztsGkbfsPWsskWHWTiSAnyzH7Y",
  "key37": "3FQkkcXKB5HvFsim6R4rijondSHceJWKx7Xo8a4JRLSwd4U6P6HxCN6kgMVbK1VZiGzJAWU8RdGKm9DUU48Spmpj",
  "key38": "43jgXu1NigqqgByeiu9C2iyT4bSjBL79SrDMk7EZLfiWFBdBhvbNXZYWmHjaMpitZxT8ZGYogiKBoUTQhjtsU6NY"
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
