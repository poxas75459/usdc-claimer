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
    "4VRh5gofmsHd2s2yHcq4s8Ur3adDiK5r2uvrtdmjmmWoKdpEgHJ66MjaXgGMHZ7urp2tr2TFNVvMJMUs85q6Ec9N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TVw7gZwprZDVBuGrq6DnJiAtRscdu86sgLt6L6GtxvetCrhdj3h24cNi2frcnq8R4BWDLb4r1mkHqpBZN5B4kf7",
  "key1": "5giQ5ZUQd9uDjfRd98cJpnD94fEKwczorgEu6Kmqeij9dHTrRqMHLZQTt8xyAJ6dYHvc5ghKXhtAW3ATz19S1m6d",
  "key2": "4y6VB94RWm1kLuSGz263M5Riy38DRMEy8JZUQrub6Jb2G6TeBepG3ZwVe5921nuNoV55sUWFeFvGEb5GEZQCCrQ4",
  "key3": "55fqhtfPahvzjayAcX7KZk5iJeu2ZzpToZ9aYFH8nDLuvYV6JNiw6HmsnsViYVi3GYwdfoYDUkJzhAveyU67qsyZ",
  "key4": "3xS4F8oFeTjwxEQZNfMT9L4j9MyWfyA6LcUKLAcvdwRbojcMV8UsCbrFpLYzZASN9anjoXWEbv1suxvWaT1NU8qd",
  "key5": "4B6ziaaESGrhCgXg2Cki9bKtzGnowttCj6ohUEwcum9gXeyPGktwdGzake2YhNSmHKJeYdjPJ3uqPRrFieijqVY4",
  "key6": "5GTau2Hx8qkxmwKv5fxXgcW5wqvpCHpGYfWJWaaP5cBSoaAthDsZbbQW2qPK1U2DEBrnaEyhfzYraN4UseUpbSi",
  "key7": "3FHPjRTjQgqSimyQhvcQ23hthneC5BuBVtAzmQP846ZbNP9LEuYo2CFD3vqEudRSHaaBZfj7dHz2r4hLnEkTAmDY",
  "key8": "4XjzWm2baMCYgDPKJZPq9omKDvLCPpTsjgD6TmjcB8TaCdcBD9Psn9u9F6RMQFjVPBYynf1qDuXoviHCPRD3Jeum",
  "key9": "42q2PS97nGCopLB6y4A7T9FAZ4yDRpD7GA23WWtMXmbRA9F1ctnWgVLqFBLowhnEwJxxhUXrJA2tiuj1RGNyvkXs",
  "key10": "2Hbta22683oSWY7HMsSnYmVa1hwXFxqJowQ4za1o4LCSGgze72Mn661QQGKNoCKJ63XLxVsEhY62XKX3gfWynQME",
  "key11": "2izbvxcTGZuahG5kcHnDH1ADvRe8QgSBjDL1hWrPzLgmRLzQWdKBbFeESDyQZ429vjEmtLGHhVYMjbHY6PGUWhPa",
  "key12": "3V1y8DUGZMX7gGKmCoDiQf4My38eNmVaAsxhFC7x1XT2Ucw1xF3H5gnhXyfH955qR6BWQRLx2GYxy3FKKpJFaCya",
  "key13": "5esrPZ2XQ98nQekdbkXwrmXG9nEfuZ1qz8YDexrojRGNf3TWo6gJ52LiQQgawkHzp8Wip5ECe1HjFq47jb3SMdtR",
  "key14": "3AziarvBworgegK38LfzZobfo9mPzDdTpJULwLwqJW6VA4PkJLThXn7Ea4ESdt4qW2XYASkc4vk7jZhMaZVhPtGA",
  "key15": "3AzZXG3QcsrhVTsxd97TpSP938VbfLoCSD3oYwS4Kci1ZR1SkKnYfmL69kqTDnLFsTH15UzMn9UjxhRbNVyMkKS2",
  "key16": "2p7UMY7x3BaeSJv2bDya4MByYKm9jpdb7CpJ3eCo7ECUzFQYevys7SeGczBDHPBC4vPnhoUq8mhwPvkERscWwwW",
  "key17": "4UDCerpWxUzeSSVoSHgtMtHZjpyDXeHvkn4eE1FKrkjTHhpA4cYaFTqaKkLNMUj29vAPVcyY9ULwXFqVWZXkyh7V",
  "key18": "2KUATWmKLbvhaYausRwycKgLFY43T95JHsUboQom1mFzxUiJ9jZG5xuB5ouVuvq8t5q61vGYGtu7qKmLaqCN6fDX",
  "key19": "4Vi8mNtzgSQkXXvC4M79KhRgNCL8WEsdKPfc8kh6s7VEN5GdxFRdCyKZY3Jzc5pN7bd5L2w74gyANTseKGYw51pg",
  "key20": "aJpV514jGW95KMf7ydahdSSiovjLFg9QXkP24u8Sk4kunGxroeyCcq4uCbA3bDdkeCT9CQ9wwLHXT5YXM4NFndV",
  "key21": "uMVhFwqYDGVsgcY3AQpHG8qnHEMGPtp45y6wSJH9n9sxiCws4VUxSASi9WwG7ASCy3y5zDSukkJiN7qnUjnjXbZ",
  "key22": "5w2bs75JbpMtk8VRR4ersEXvYZBu5EJCNsTVbVqQV81xc7Ecpd9yQhw2bwyyywbtPSoJxzEQn15qs9Cnrdf1PXnr",
  "key23": "2qRvoEKKJqYbw9GX3cwFfZaeyHQALK6v66cZvj1DhhnRgaS2VbvK3uvy2AbmaBe3GbD5KBZM6D1arMuZpnujLKNn",
  "key24": "G6oNJQuSuFzi9EXPBfrSJmbUXVUaDU3zC7M4Bf9Aae1NQS72qgEL4FtmtNtVXRUa3mzgMHuruyu4XWJrgpmxeHy",
  "key25": "4CSGsMdwk5VA5SH4Gfd1mNw9eij8rbCitTb38hmeBEdKTMQyKF3PHLLoo5jGXJaYa5UCAFNP7hN8xtANtrhVMSMT",
  "key26": "3PPy5oxmcuaKi5MBGD8qqvsjoMU4a8DSkfEVj4sJf7dphdQhYk8rCCa7B56oxRQBrqGVqNRT9EicZRnRXHU2xQNJ",
  "key27": "HMFsyftZuFmpChU44x29KTKUh9MkUjak9wCJNT6Y4tqi93MyHcbnwiCyTNWJ2rzCDgtjBD26upcZQ1ewhgLEnJL",
  "key28": "5Z3BTAzCbL2y79pWSNjrVtQyuseTRM9dYTGCGL2wpYp7VAsAgW1cP4b6AiZUm7k2bJJVZMWKx8ArbeBgMJi5D2DJ",
  "key29": "ZDAQihusEp2EkxLAGDuoyxa1D3XHNGokHHoDz5Tvcia1SDeQ6ub6woWKLiFrFVar797BGj5zbyuDtXgDCP5dkKk",
  "key30": "5isqk5tcUnjiVeqFZKTnEreBsaHAnyyDoWCTNpotucGkmnv9o9wRLxyZJwYc9YzALrtBCYx2FUJWQzxHGjFhABXm",
  "key31": "42nzmo154rsZ5NLcHPW4MRKFCL7YwhUvumeaYLHWn1KbT9MDWK4ru3qJraCGFfnYCpFGEp9vgzaRAn7hTESZwhuh",
  "key32": "2eUKXrUuGes16aeHvoFUauUMVTR9Yqaz3jSAaFNe5Bypv63birjCrGrSiLmLPxBkkwqkBQpV5zD6bq5USp5g3Hzp"
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
