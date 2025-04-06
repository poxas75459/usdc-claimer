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
    "4cUam1DRxkhBPQe8tqnseZvN6NBeNe6fBCBWHfpZsgwdpgA7PkEz6PTuHs4f1VSiRxq8xPbgbGiCGNqY5GtRsQZw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iJPYpn3dZ2VeRAhuMP4K9meB5iDH34e59SkdUf48To28WCBfyMqqFMB4dVkj5dF4bu2EgX6v2j4ksctRQTUUdCr",
  "key1": "b76FBfraGn4x16N1aPZeUG6gs2kXWrfcUqTjFoarPG2edEUJJaYiNkZkfpJ8DdiyvpoAgmjnfCf61QV95e2FzFD",
  "key2": "HhJHQPY6UwwxhbCb6wtjSQQyUnHcT3VAyhMoi9ZxGV2YXYmVkQPU7J5Rt13fta8BmuPPWjqZY7FQ1uiHHgsLgxA",
  "key3": "cK71PbPukrYYuZ8mU6Eho58gy3vEmRVQ7xbpcDZRAQCZMRVGGMUu2DJSMjpXnkc2JBGcLgcKfmcmxMP5WcRAzdP",
  "key4": "aDH6gNUC7Y6Gi5UVs67GTup9E5vuYXHVPYwYX2T4XEUERTBjzzUCiEtYm9AZV7DvXDhEjTxpBKNhe6U47cTgXbP",
  "key5": "5o4Po32jQcMfQC5iQLBjj9pYwsbMxocyuBVSZgeBdZcbUE29DyunRurX5jg9pK1SrTVyon4etAvmoVbT6AK9wQee",
  "key6": "eXa9uUZzvb9RXzSSK31LTDBPxXpYxKDis4gMkBb7QM3FdwWGbDv24Nhsixt2wiPKMmmmVMW144kB9WP8Xieh1FS",
  "key7": "33pkvpumM9sXffFAHy4kcWKSZbnX3q6BUWBqL1VriJjhS9U9wpJKPndpe3drAchZdwzm9aUFgeu5eceByrwGFJ2E",
  "key8": "bNasK9WbBMJ9FsinURUGnYaFquZc9Aj5rKSNE4ccd3xzEzKa1xLezgz9a7TFsVzJLezZTv2PLetUJsHVeFjX3T8",
  "key9": "2reYopVtEbwznSt9CuGEbporhjicbPqQv2Fdjj7RK8bMC9HZiX8Kkvcj4MuoTtq4Yi2cu9hQMuL71dar2QC7NuBF",
  "key10": "3BGpNmtcgHTPZnVQPKTCgNY3rkaMonMueN3vzJxXeKy2UE9RaS4eWzHZW1bbcReQPzNZomRUfuBCZkPvsRdMJ3GD",
  "key11": "5LQh3R1Ehpqo9kSwogUHCymxUfG8vR2Lu6qTEhjDdNEc7tdRaxqGCHj11iBRWm2mGAP3moYqoSrmYUwnUv5AtsP",
  "key12": "62fZYVu8c4ycoxf5zETbAfVYuJ5yReLiy3xL8DZ3xvFuBXNEA4LBRTLRR4kDej6phBkPAnjDnUtA9JfJFLKs4owT",
  "key13": "5iDwdmZMoUdz74e3mq7mHcVtmLafLwXvHDvNqMyz3DGLzbKdPDr3j3q4efWkqC5Y2xc8qx7DQLDMo2rBBZATqhWx",
  "key14": "4iKjPtc9HYUUi1YQpvg6MaZrPG4ZJBUwsbdYt663AS154LNmLXtAxnGj3tYjrTiyKnQdy6qRQchu1sbUz9mcaUFe",
  "key15": "vuUYLuKozFZy13pbQVEnSDaHeDgreGM74s4kkvvkRpMpbs7P2s2xP1aS2wk5AZxFwR4pPwXNYn9dheYezNUhQB5",
  "key16": "2VFPPNGnDpAnu1TzQyCV5sahMczqqckw64UnFbnGetPH9xwi1dXhc8qnsUV6ihVuAgh6Cei59DBSf11Jx811LKM1",
  "key17": "517GD3gPgSESEBo6xAyxSzPU9KqLv6odAu2SE6p44FUU9eo4XJDuYF3L1Lxb6meuS9S5Z46zgvxVDntkMYrENCN1",
  "key18": "2G8JXAYgs3kdUya2Q84TQsR7Q55gLtMFiStV2dRCXyute65xjjcoj487pF97UvRpifEdcdWP7zbA69Hh8cgKE19a",
  "key19": "3DX3B1P9WvQBC98szhpCytcygKyvAnDUmiY3rcXLeCbemUgr2pqFgfHuvmeHUYJt3X5Npe1epueikf1QjYmBbVgF",
  "key20": "32rU51n7g198VnsE8HS7PTeDthyiMpmV1b39M1mkkGkWHVB4d8iXmhAqE2mpc31KtySkDoAhxTi2keEPbcS3nNHB",
  "key21": "4A9DnU8x5PuRuyVa8cH3vKG7pdT8kXJZTYV92WGMP3Dnwewbp17HGEpVXLDLi2CoXUS1g2TzdcvqcWYrZBhqMpoD",
  "key22": "3sWPEEdYUUJsejQwKzoDbFsxF7rUD4FHSHMdq6bonqvP66RtvsJ3QeGUVB4VCbULvq6acvuEt1XqRofYDe4RxMyT",
  "key23": "5yWg4kgEZidJq7Gv9NAghQgw8mLGvf6xLTi6QAnrzH1uq8SvWYsCbER4x7G9mHRS4ZXCeTKKEbdscuVbTQ1gTLE7",
  "key24": "rWaaY78N7nN1XPYLjuARBub4dzLDm7o1KKDvDkqi5fyp2xAz5PbAaxN2hExAm2C8sFQeh66P3hnaVRbVcxSXfs3",
  "key25": "56qgNh4sRva3kJp1YCnY1pGqDKXP2WxnnSauML4sAHGv1mJh3UBdGBo81WBBmrj7b6tt6W9UXZrXugkMLMcDQGQ1",
  "key26": "3Z1V8Tjz8Q6Tn22xPHJH3eQHSSxAFG9yHMVS4nR2GEPEmDfsfMDUFUwoUboFXLXNkiGX4jwF3hrDma8c7iSsyKRF",
  "key27": "5H5LDuEY6jUDk2F2soGTX2QnGKuFy4FPxwTajUYbG1YuTRyfQftPAEZHoFSKpbwSKkKXN5ptwQJ11q9yNS8QmbWF",
  "key28": "2GTbTcT3Agy8AQ32YyZNm6Lbayc6QGRvnJkHzGKdrYCUScbCME9m5GhqBPBdG1m6gSSL95nEVpD4CTY2ho6LFUTd",
  "key29": "2qdQT5j8qu9cSAkrf8vJoAzVKB3vfwwFgg9ErRUWXMbAkYTv8B3wbGXJwpmZFHTiJJLuKHMfwH3jETHkpGAKXiRH",
  "key30": "vAsxmYn4QdLAdojMkd1XGafuZgSJxcTKiEKgpFdDdMqBtq3k6QaDs9EDxfUwkrh6BMfVt4rFAFf7fJ17dK4qRQQ",
  "key31": "AMwYxNdfvakPcrWykKtimZnzjXLgXSL6wXzt84LZFtxaCGLxUJ7VUcHNbAEzxBWNgGRmASepK2JzG5TbffdXahh",
  "key32": "4Ge6zj9UYAJFZeBRxS3S75Rj648Vt7S3Gmx9Gorve8VCgLVXSMrkiXy3B95kfitnLHxE2pTe54sLEwkzWVfCwncA",
  "key33": "47kR3vHBraF1peJLE8SfDngtjRVwcUqt21FG9Tbt7P51WGVUBZ3RNJPt4yUjdUUooVoNrWi8zgxDL4PX3VN33dJe",
  "key34": "S6KmjZYxNw3iXzFL2oLyyTiG46ZGGYoVM1UoGghWkRWNxdu47KGwdAdBc4eKXayWUpH9pen3aKcbxVbutocvGHY"
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
