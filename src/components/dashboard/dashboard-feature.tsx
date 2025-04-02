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
    "Lh7wbGGbVVcQDB2acJGcTBWH5jEDjVeNV3BVm8pEC2SH1bWGtA9RhkBuPkKntSZcAvXbU1bRnvo6JeVCLf7JtGd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gtWNuotTVQfuDNVGYFtCtgahUkWswLz62h3GBpR9Xk4hYxwT5zK3Eb7QuPezqsDvcPBHFCBF84qhNUrAwfpGkAe",
  "key1": "4a3ijgo9VR5MG55Ntcrwmt84W2wXv9c1PpmbeQc4bGUn2yXuq9Y3aXQ27VAMCmth6Kpu96ReHnj7mXTzzL9mip2g",
  "key2": "2tewrrY6Fx7MY5HCpwGunkWPfDWfjdfJuXjJMqkg4KW5mcREBgtASxCdsMQXYJmivwBixbZD5ATmWKDno1V5MkMU",
  "key3": "3X1fKo3akBx2JwgV5QpqKcy6BkpGE1GFj4WRgPKm1wmwsnVzHr16nJh72e17zkMiHLChNyQ8uUNpCcCZz5sTcc4n",
  "key4": "cPHPHKESF1n1UbdQCbLE9f9W1AWnZY56kizaPx8FvyaaJWP9zV9y1k542PJ3mo1mf91Jdc8FtuwXgCVqkDsKbLV",
  "key5": "3UqDFZ54MFenJXnKehyWHiogevhNQgSMTRjcB8hhhe7bLvgRGcrTw2YpKNtwqkf4DKWqkr56MngtQn1XJgs1UMmh",
  "key6": "2LKNaP311pRt49m1tRWvzuz6ysg2Eb8zDE8cJLJeW7UEvebazSXzFTMDnyFjZX9FKiZJisMJ8Qx1fDjSJTqfveFL",
  "key7": "5WSrrJoAvmCh2wirSPQMgQ1M9M8KEniQ5KFRMoajVy1Lc9NtFjkezWYMunBxpCKqDt9vMY3SpQXR4J2BG3h8JMPH",
  "key8": "4V9rv45TA1ANisWAz1Fge1ovMLZJa7d9F81aXY3rZYsqMMnWX8NjooEUTNvdZGYwaJhoCE1sBuw1RLo7Xjg5ntLM",
  "key9": "AhMtKqbFEFntMs7vZfurYpjaWDy1vCu85Qf2XXxCcomeB9MCxeP3w4DZ8RXi9LYT2zsxYrrN78PwVr6vyRPQi1u",
  "key10": "4vVYLvBsvHVp2TZauCeSSwu2nwr8mZdER8VsyZyjqWSK229UPrLLM1CvFvcX3Ldp9SSNT5j4rZRqtaSzp9votnUE",
  "key11": "244qMNaPn2ZXNM4NdwSmymGguzDD65bg47gzea1XQ3FXd73HewPGoxBaqdspr1sdSDX6UkCe8mTC1xj4Y7RkQdTv",
  "key12": "43VskYPQbSy1L8WawY9tQQz5ywKR1h5cSWXdDk7iSDcP2xpAyTYbDowYo4T4fqFY5Mxgtu3KA3E7E5p3hdwsi5HL",
  "key13": "5G5au6JdzWcLGtECWKzDYDKterWJA1u6YYv18RdZjycJtgAoF6xyXwRApEntR5aQYTDmzEr5vgwhQCMk5UuMcQtL",
  "key14": "YPYKrhBoB4JyX5Vg3HVKXHDrp5X1xM8wnekej7HcooLBuWofXzzcicxGd3r8uYv5GgjtCKBgBmxJwzBxFSHkARq",
  "key15": "1Mc4HznfboLTLy86dWc2WiC928QivuNHiMNTCq7hc1TLCiwxtDHSpWyfcRfCVjJJjJvv52FZyeEemGJtoVukPDL",
  "key16": "3Ac9JLvUH161CZ1nSUjSyw5D8xAPMJBtCY75Ycg58Wp8dz7pHmkoWqrCCBXue6H61VG6SA9qYdsrNSRJKReGCwnu",
  "key17": "3zw59W5JcfGUngDjg7d8tBBhWo7RSYFWuvAFxVTdri9GBy242uznT7XGur8Kq1vyvDzkhGjKN6QE9ivNdBaJq2BA",
  "key18": "4uz2skmyv2MJDzaPeSpzG1FoVPky4XV92CtxwsnXeR3d1QadauiRMcR14yLxuPp2dj6f8nQcCJW5jLvvtq78VgSU",
  "key19": "3iM3KSujXSB2zcmTN7TsEhMw9cLxiHF9SEy8Zyow1PcUTjYM3PPKT2MoW4GRPf4F4NQSu6mH6hHaCUcWbRRbkUwu",
  "key20": "3aQivEd33PxbzFfKZsFYYQ3gJwyCELWMKnJqPUQBowu6nLXMhttXXTmwy2JZXwjyyRfHurwPBEApibaSNAXyQw62",
  "key21": "1hansQy8DAfHzNeM7Rnp8SqCcp5NkFa8PfR4aFMJ6mqBV9nfYa83RfNa3maskDMDz7kFHKKq958BwmNq7gDKHZU",
  "key22": "3FqmWPvBdbEk3ZTxNxNVp85uhArza5yMAhVjvxjNYf9X6duBhg2ksbdHoU1x7SBU4BzG222UCSMHPtxqswfm8K36",
  "key23": "iyhKZKTBJQmrtr7Zhw6zrqjTz9RFD55xFcCLVdnQ8HMoyHabX7dJQNBKk8vXWwXdeeA99buhb7TkTbbYSMskZ6v",
  "key24": "5PpSztndbS4QiFw7NVZokzs2pYFygAhp97UjHgwDrMqeX9Arz5QTEQ2VmUmftWm3sQsFYg7Fbki1ar2uEZK9UcWt",
  "key25": "2QXo6fSUsqDQDG1US7ZYpVKEo2wDNnYEdG4PeWKurSCZL43nvx6ERcvYj4hnYDwmoAnswnK1A6XsuA9K2Zo6dzFV",
  "key26": "4w7RJ3mRgQLXyVGAu8J3B2s5VoTKomnyDC8eC14soAQjoNJTrEJf2B2uNUC11WQoPtqRmsTbV9LbkiA7bDM6DaqV",
  "key27": "2E9fi696egy31CdDaEgQDBhyrJLWxSZSuFUW5gY8hhpjefgF9tH9KdyHrM7tAN3qgzzc4YmNZK1hrgEnSePRrFq8",
  "key28": "56DPeSP8DzZ1sRoYLYU47HSTdLKEXLcUm9J9i2RJg5i8FK6fkjh8VrvYHuyzpPfWSCHXitysfCqNPgo81KdpnFai",
  "key29": "5qpxsE1FGtDgHhE9DYobxfmyLtKeNyJHAXwhctWjNjNmzMQGUHUYQXJ3MNchMD1QEZYKDy76sSMnjFhi82YpYEUH",
  "key30": "4ANpSMUFgBPcCTgNne8pX1h51g3gvXxAtrbaaqH71GQaP9jYzM4y12V4rhSYTvJS5AoKkBozvgHYTg7ELtLq2Lj4",
  "key31": "jktdwj8WXpyUKCmgYb2jrw5F489UvqBp6k3ZBmtpKLAGgVrN6WsMfbYcy5FbWJ9onUY7z6H724C8BSjUnP4RVLf",
  "key32": "5QrjiKNjmFA3saXsop8ZAfe4R4jTjhAsfsQeyqbU6ePXjFoDpSh5mHBawCofYQvHUuvhhLzd6CcXQYUkcyLNz1on",
  "key33": "3kfgtsC1xZfKpVyNCpW1fe2vTRkqXui8JTinb3L6FybaLroscWTNyvwi4QdV7zh2na3q9TnyjmxxdbBL5jrddsqH",
  "key34": "2Rvhq958iW9bo51Sjx81XFfg5Mw3cvkUhtfxPsD1Xh966JapNk1XSNQ6XyLYowhxmiuJgcL9gYCUQuWM1qq7dtET",
  "key35": "28V2KZKj34j3YYXfAST4xGQRdBMGMwmcwSLTa6C45djE88hVvkyxepkW5UXxXu3nV68djNhnRTAbxsHeHPZYBP5N",
  "key36": "QeodP2D99KurBQxywUxWF1hZZKoKVeRFiBxxFX4DcgxHZswKwiKUM4DdwqTx5vstmuCxGCmw7JQZFVDfbhnLgQv",
  "key37": "Qodj1CbWf1GJFagQe7UgVuFKWaiRFZxcXinD8eP7TtXSat2aRrn6nFNBaGDuKNZXN8EwKKiEGsMn2gtTTjPCZGZ",
  "key38": "5kyMH6kgDsKvAUR8pTdFjqA4Ns5fx6ye2WqxCV2c8GacfgDPU4rYpejvwbfHqmzmrvva7eK9mo8MDdWkj8mWTuxw",
  "key39": "2HsM4mf2AQQ4A1qheLqDmzJ7e5ApbGBJEQSRH5AkE7YZZTyos59fxDatsGLvHLEugjnKDERddeACb7nhyoV94wZU",
  "key40": "56jgf54GcXjWpxdNcY56zhnxT12j9tq3sixqBkuyPuGPqnrxsWF22yVh8HU4QW6fExVaoDSHvhEgfbUKKAhE9qNE"
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
