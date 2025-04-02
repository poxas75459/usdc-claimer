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
    "ttQ2WWCBE9VYP4Mz84q5jzk2n6vRuoT5NMUbM5Aiw6TkJCgUaEWvRVRQirz3MSHw8hB3EsNX4o6Mwqrcbf97HE5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ahy3Zj3JpGkrSpmNyRfG18gbKBCr49XzH2gaMNkLNfAjgPvPAkoM43P6b2hr8V5kcHduM87qgkp6dPDhhgKZiH2",
  "key1": "533ZA4FgYUQTWufenrA6DfpKsAjEXznWDwdAyechYRKjFxsy5gsBpEhurRJzVr87FuaJ46bZEEPBR8fg3Bo5qcpy",
  "key2": "5F17WQ8V4Mf1x21QWGjg5TkL5szw84ZucJJfJBt2wAUpESaSe7Rot4G7ut1hwNZsiY1EiJQJPD6nKvPXhTnAedzW",
  "key3": "3fpjkGfKH3HsEFk6KuexEih52LB2DD9qw1657VR3Hbx7DE2FN3HK7AKVLbZKna1trZCaq58FDxpJWHqwN31hVQcQ",
  "key4": "5eeUfdXdw5ME73Av48Wz1CGwStY96c55w5N652dSMa2XsVeRcdvppHfYVD5kVACtY5oKEhjAYAMwBpoQUvLgMscC",
  "key5": "2m27v41U2pN3bFtxibypRNS4CgvUMurMYt4HJ8RyGE3S54fGxCPcHzSUmAB4Jg4TLibtnLXCP7tyf1gxm5H8muzY",
  "key6": "2HiafF9J6USwBrRbXBeTuhBkeeU6Pxm5hybPT2TodqCVMsKwwjjVw1b51qG8ehkxc45omf7dGTf7yoKBK11MtXDL",
  "key7": "pxJW6gEuJygcbBYgUbifGp2aseURiooPyyP81msiH1Uo5pxJSaojmkkpDuLJh5YmLLVK6dJGSo7yNdxK8YmZVQy",
  "key8": "8P2uetBERYNaUP3svYUQqjD46ZNiHYNaYPZhubS332hZj3cnotHJJbFL1V5cLo8C72cETA7nc1tFV8XpF3RfXXQ",
  "key9": "2LM1oruj6asTiYqKNRsqmEcAsYvA66GSU8B4SuRN54JLVQM9cuLDwtJd3b62JR1T2Ugh2ngsihoaUFtSH82nMvHJ",
  "key10": "5ZUDd7t6ajRnHaR3zCb4g8JA2GRFuz9QN2REYZLKFwLtFDuBRJYCCawHq7NbMfiKFNHu9fJa1XywvqkRFhuS7TM7",
  "key11": "2kQmgP7hCGcLcr3KZ5km7r3kpNsQvRrXdeXCXL3UCXpd6iWAfmW1tCJ2UUk6Jb7eMJVeBdQjkVNZkqnvxv8smRNH",
  "key12": "4HXciXoiyvjhFVpenrNDAwupCpugCYdFYLULBS193ckHX8czusd6sqoPYFoemQ7vrRqG8Pmwej2NnuWAWte6aaW",
  "key13": "ULteeCxPGoCg3RFtwe2D429S26EhiNxUMRUhFu3WUkjr6iXEw5STc7d8C4r84PoLAamwLSuPTcJBMq14V1P7Be3",
  "key14": "5YMtd2EsJ1CgXfu69UCsrLNHR6ppqBU3JMLYno7JY3kfppUTNyhtGsBNDPvr8PUW8A4CFMMzSkD2JYZz62HQtic8",
  "key15": "2zXU9SDQRBS5oW8BGnNjSYVXULhPEawEMXRXuANDeL4Bh7BeDzy3Z5Fi9a7KgYjjuH9646G1KFzAxrfkUDxejPqT",
  "key16": "23AH9GQhs2hsxGFdZc87wxoFgcQVYnhDUdKH44te6KGncsm1g1txFQ8cL1sLAe71vu9UvcDVTMnHCUhJKXERSCyX",
  "key17": "uYVWn4QKRN5YhopxVeUhEZbRsx8AiJm7bAMZnijpPmM6sXeW3TbAjx9Fk4jJfq5ANA7C71Q3CKq5iz2np3bsTJV",
  "key18": "4t17RwnjCM24MzLkBcr88o7Eh3yqzTZdCayxMmpagkdWjyNTnmALjCwsx6EphgpSme84pYDVhuxFchK2QVSnPzAb",
  "key19": "73u1RbAdCy1mEENt1SHC1mTttifHSCdRPKZZT8ok2LSZ923wZ5mxktirmhM4V7ABD8azXguPHVYt4FpN3reSjq7",
  "key20": "3i2DtucW5noK7uQ6LKzSQMesiQYd3FANzXeAs2Ziu5Z7kAnCLbCJvutHi2kY4CHCJkwrg8XFARpNs7Vr1tYNMM9q",
  "key21": "iTEGT7VamGiKMfaHkYQPKEsRDoVAUe7ZcKZ75u4Sjv5yDjwVDCd32RnGq2qJL5jLGrJ8qi24BB83C6NtzwVe31s",
  "key22": "3aJC6uNwGyK4hFo68XCs32V5Fj6yahgtDF4FYDEHBpu4vrVxk89ZimSbYBicDnd8eyFy1sdd26DbFT4EeT8MMqsH",
  "key23": "63CryxNfpd5dARnfyMnpK8wGc2tAP7pUB7GYnDd9HNgKPpQt7PhriTCPFffXSaerKjQ5AHDhcy3Ya8HrD3ZVTXDp",
  "key24": "4mmCtBm4kXWocbMgYnj6qptFFhQk5ZAMANu9Vp2MkNA1KyWHTbfgnotVXFYnAKrGasborWyKyx9AL3SmZG3Sbbr9",
  "key25": "3CWnfSbGCkjxyxu9MXFAYRpPiNdaSmpYRgZMJkix9RP4KrfLaa1jrqGUneArRozyfKQrg5xAcznMRXEeVsE2gpnB",
  "key26": "HZLu3Ln6o1UvUYapspoh4YhXeHpC3bWhxH3q7RzJ8qxFFLAHt3bWegKyQmjuEJdMFfTqLTdRomzfg94PAvh2ZSM",
  "key27": "2pVABSAoxu1dT3rT12Csf66yotAFybhbyXGcYqZj9GQNCL8F1zYcJajcne7dnERr2Xc5QXeZSBfw3Uc4pvk9ffAv",
  "key28": "55b3fWf3ZfMvFZTsrsEN6XTWGbQ7PQhzTukftcZ5Q4gHgnQ1xFMBNBugonzztaJdbbnqx3DmBKKi9XgUD5SwfMz",
  "key29": "29xiUJBgdVDYvQZqmx1BHfgoUGXziD4Dib5cqELmjzx2Mzna8dFd95DfKeEtp5RWaNetaoHVgEgQ2mwEACRcxfPe",
  "key30": "2F2wfHbrfNRXmWmyJgGHXyAnMnLxHbATVbXL4vqnd2N6WfCZSmHXX5ef9kcjs6JyMdvgd2hsnxRAtNs4hALQ69yL",
  "key31": "p65Q3enhcsiGRLLbopFo62kcXR58FNWtPuuz7kzcrP9t7sHvWaSVYem7Jy9LZCgj6wd537gqu46BNougMBzDgwM"
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
