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
    "4gygPexM1JtT2MaUxSJ24xbMiT5fYRtnUoMNimsjHqd9GhaDwDwJdvAkqs9vi1DDoEpoC5jvx8bDy1qnpqhPTmuv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KFT3NpGgFhRD1cYeAtDu4Nz9ooPezhHSWzM6pELK1xVUVXsA2WamCf28cqPpqgKF2m675A5RRWcRG7eqqQpJsrn",
  "key1": "dtyTrmX9sK12rEAs4RXRiA39hwA1Z4xhZNRrecbr5WfSCCVM2ycnNMqJaEKrkNehJGBwSMwujt6GDugYRuZExaC",
  "key2": "5Wuo1yQMcqxsbRWHxqbdrRUPzCm3tb2t2vVvmrPKFyCraetkgqDFhUAY3c8CeJmhHMetEGMKsELfw6f3vUSHpE35",
  "key3": "639FteZkNxdhxLsx3zG7imtVYo6J57FgfmoYEgm7NyQ1gnBY6n1cBZhxJWLbgYuuAFLSYJk83VxCwsiriZPU8TDL",
  "key4": "4LveRDqdLwuVEDQsfGA13MAJjkLaTVaBNjFkULTyjHe6Mbj4EAxKj6Tm7Tfn3L1f2f5isXvEn1TN9XuEsnEEy827",
  "key5": "37CidEvJi4FMe32CXCL2JSE67ytfGbHT7pfKTY2bMDA7cQyUJVYb7dLbxwfyfn96br2dznP6uZgRrP2WLq15Dnfi",
  "key6": "j6HT2Vrx5Vy6efZAZFXoMB4pFeUkZUix9UCzAQRbPHkh1Zh8yHh1L2oxksFUeRHSUQU9z6HXAGADV7fnVQaSnou",
  "key7": "52QzRFV1DQBdWxMRDpXe1mKZh12AiYPeZdfjTWoeLzngzu9TyprmT9DtcRBwd8zSSPAiydjsruECYkpVxzyCowEc",
  "key8": "4REVonMLpYEP5PXrfRxQGVFkVDv5AuCwu4ZfvugFVHqVVq5S4UY7N85YnFuy4WbXzWTowop22MAWkXZDmqWeirva",
  "key9": "2VJz7pdwoX7iqH6dtEU2P3vUccfHPPAb1JEsPBAYkmujQZQp1sVmQ1KF6kn9csTRqgDmcAkczog4atMvAka22jmt",
  "key10": "8Hwj429gpHa4cQMRK8RoyNJzA9MfGS6gVCuW9brkdG3geuM8nktiwVecmGuBJd1wAcLJZka9dGw42M6vEzK16JK",
  "key11": "3yGYD5S87tr8zPrmb5K3gbmrNG3WYfWjaSkpjPszGdvBBA3L72S3aVh3CdjMuZycucG96PrrU4Ni1XdqmBiaXne3",
  "key12": "gKNgPbxjaiWGtWQAUqTMGTvpYCW6ypydXLRzzNekjbQkPvqij7dsZGtu6HTsdTkdL1X6eHb52jWDyLEXz9U1f8R",
  "key13": "52UBCg1cKrXSTiGB5eeyCAW9phRL6GxB4wxopmYn9MnMXJ8bYC8T7vucAYYavvfpfpWesAVbg8Cn3y855qWTG1sR",
  "key14": "2hcCNb9QjGPjK7GmCWZ8r5HX1SSmgM1tiYDguN7h7Wi4TE3qpTf5AChVBnDhWYr9eBG3RKXgZ8Bv8rgiVk3BEcpc",
  "key15": "2km8MdcVcPNJcrxhjr43kYoa3gVh1uuvgpyCiiDJyQfnow4iuXBVstCxK34zcpVNRtzhyRnJLF1y3mPpyJP1qmPm",
  "key16": "3CBWR6YpkpLb13sh5n2PjxULtj3FoJyVSLb1htRnYsmuukQvfsEGc4wGcLYngTWRxBsQL7ecifxzsJ7MSQey4czu",
  "key17": "21m7HedeuwGVsHSW27CGLiMXyAtHUsJKfsyvqu7S3xc6RQQ7ovePEhSF5CpLaZfyLFvyiriN4PQLyFiMkT69bx7r",
  "key18": "tXPyeb54Re7ZcVnLow5CPm2gdPnKXiGYJA4N6H4fCW3V6gbUFK7P5J8TgZiyGLmG3H5a7Uf98GxGF2rTkrD8CBi",
  "key19": "2uxbJTdnMAbCtStGoYrsWwMDULJYe6cnRaq2DDu2HG6Ne5B8pBjvXxmk1vPL16FHFmA5srnH37srNRL6psnDsEek",
  "key20": "sLct8Ut3p4zcs5yp9mjVL5U59jFqoeJo6AJpWz4xk2nmZ4pdjytqaT9GGhgqeVgkbTcs2PwH33ZgBw2o3DcSZSN",
  "key21": "5TrxzgDbUtWEHtQkf8Uh8h2ewtdTFEoZrhfcBXD7MRdKAcj1V22TWttoXePtEDYHmsFAXhAM1FF5jGbw9kdcL2f1",
  "key22": "495skptKv8tFWtCz8K9i2tHCZtoam1JprSpSVp9EaJC11ABC9kNVqa7EHEdBmuvPutZBy9sYitLQdJgSvj5EvooN",
  "key23": "wa7yvuhunt6Sx3D28AvkMc54D2BcdxgbAUWCLwTxWnVkGuNF4eg3g7fRZoA4JkFDhfQzmBacENgDpk48vmf63QW",
  "key24": "2GL4DsuUk4P1Byj1Kwr8DRBTt6pTLfZ7FGzhjPLrWgC7hY22yavKaSd53X3GTVx7vcae2BpiAH5BJBSmNwD1QRQV",
  "key25": "3x33XbKu3kwQn6wSM6qqjkpyjGBWNapeNb6sbnSvfKPSRAj18zLsYL7i7E1Mcz1ysupJ99DetxpMJMmYVEbNkMMS",
  "key26": "5S327DjBqzJVr4MtJd4Ws2czPULL1Nr2STgFSWEXibbKGVyYi5PzyzwgKAxhgNU5YWWw3GVEuuzKvXgnCsAXizm5",
  "key27": "322FNm5ptzQrSDzLP48qz9wUvx5hvksaUmDhE9pDCocwtQXnSu7dw9AWkvXQhteAo3ieV5NJiWuDwyb12SwKqM1v",
  "key28": "4LmpS2EAQNUgoF7Rs5TayNZS3AAaBpkbCXy8vFyiEpwYB7HcVCTUXEFmHiEb39WDFSPAu68u6vy9V33MeYktoyF3",
  "key29": "yJbKisVv9aHm7zTZjD7A538ZP3a1TuoazonJ9bwKAtp2qC7Y64yvRkX22WpncgDigr7mpYpiVijXR5vxgSfvK2g",
  "key30": "4iSRCZKiSSnv7aNsWuJtH8mN8MDenQQs1LHfHjwNH27crLt2ELJxF14wT1EDv3GykHop9mmLJDvEE8XDjCfeMCoN",
  "key31": "2koZ9u8qWhPALuZVxujGcdkREYa7Nx763f9Dctwu8QokJvn3Aj1JqeUtdWmsSriyergZQnQNneGcpYkAEUVUhCWq",
  "key32": "5U6SCVKYF6hVGC9H9UeimtzpwSANDkbPMDvUxHQgLQMLzYJ1G4QikvLKmYumYdLQVsrBtTx737ZCGCM6YLggiacD",
  "key33": "2Nxfy6KhqaMGLf6CQjyJCA4b6oPKGudczSEWwXDT8VEmmasVDD8WPBcHB7FUM1bCxNGq3uDtxfqcp5N9KRi7sicM",
  "key34": "2NeaxdY8DVieQdYN6yGQt54id4oMB1MoJcGErickymk4w8rj9eUTwvxAFZawEL9d1DGqXvYmUBvucU8vGEHxGikD",
  "key35": "4piTvAAfbLPmwxYPFAZkLFVvtXNNbTdSF5rWAkCwRxSYaAHYCbEdqDynfgWHuveSe5JhpY36kWYyXx6E3X1t7PAp",
  "key36": "67Yw3efZV8hvocsiWmgACikZJtxGRRXLasJbJ5nY9G1sHZCqFZBnkbnq5dZs81KBAyWM1qgLexrCLxyRbr8BWk2v",
  "key37": "55AF4SEpwJdHooLCR8ZTEgAeiByzgoz2nrJuniTnoeo4rEvDFqxBKXBstkuYV4waMDwCt4MJ7XPm4gxVujxzXFWc",
  "key38": "3Rmk9LuUJNPp4wjDA6hYnXVin5WfwjT1Qci6cP8agtVx6Q9iHep3dD6ALZtkPKFqgywAhMxzXqhYfXHsYSqpdPEq"
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
