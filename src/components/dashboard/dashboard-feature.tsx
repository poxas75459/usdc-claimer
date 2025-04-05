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
    "4eNTzrUh2x86UZrVxs7LFtgp76fJv9g3kiyEMu84DVf4KNDMVnYQeHZtz9K6Vs13WU44JFeGkeRP4chQ7zDGBHfi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EMzUdAjXfkSXsPujBYNqmAeSRRFmuMwvPT25CbSniuCBC2t4wYegqY9UKUfbdmCQp3v2QjbmjZVB2RtzdRcZKHP",
  "key1": "5c44auxSYJqkiBB73E9VG5LFjmdzysoGv4uf6VqhuxV8QT6KNSCqVyp6tzLLR7t9Cp27ywpJ5mq4FHdbtzohi3B8",
  "key2": "3figoAN9ArdjppzYdvYq1rsLE8uHquAiJwLstw3nKp2hy533EtUnAedAGRbRxuVA9ARdGAJg2ES2K5VtjWcmAewB",
  "key3": "5TT5d8B8FGqqLJzsPYX8LN9dcH6fmGKkeSfqxPdtYwJiyY8Z7VesPfdzpQtsJG7gWuysnf84a6dMiRT3XVEQXhC4",
  "key4": "rP7yQGHFVQztsNmUnTHqUH7M3fv8thh6ip5xWLZkY55iNKbLvjPWW8j5k27GK7Tra6oQpFx39vEbtF1mkJ6vpHn",
  "key5": "FcuG7xDRqdzSLX2HkGHiEk1sgwTGBbYF41WYnobE98djcVVeDurmvHP3prHQuuARJMRcRyZgR887fn3YVCjSwFd",
  "key6": "4dT7JWynoWA2uPwUoacVuHFst1qKcwnLnBLHodnRhqzkczNjPm1wxnwchxDWdnjS8j8pJ5375oeSHcH1S9K9SFMy",
  "key7": "2hQioCWz8x8wRfQ83cAXGBSTmzNBS7BKkr6Vx14ynYh7XEhQqrXjVcJ79wCNkpyG27HLhukkGkYhyzxqcxd7a18A",
  "key8": "2Qnz5njVeCE71uvdwbzGars2YW2fnwNi7gGptdngiy3pRdUQLSrxfmJaTjhi2cqGT19idp1jey96Yw3Htxym1iiE",
  "key9": "y7CfSZj65HnEsMZDihBvS3PQ96iuypm4UofjsnoxpZGZsu73nDJex3dMNU7n4extdLq93m3HRpymGvziVmhvc5Z",
  "key10": "3WfgVeQLWxpJEXCSQ3wvXyw5tpodJkp8rGvDjgvqaFwsJBkVK5cEm8phfeNH4mG7JWcUXuWSWHSMN9rUkyktfSAb",
  "key11": "3oK3JmM3JWTdd9PGeFS29hRDL71aU4ocF9hdrUmABMAUJ1drYeEBhQ3PW3DHDoVn8XDo43ZiGYdkXQPENtGyexoE",
  "key12": "3DyuSYKoPkXkczaBBF8GnnMME5RQoTRQCxB4CALZKrPmnEjNbSQiEp4bSfhZzdTKDc85zRi4tfLvMtN8FRoWv37e",
  "key13": "4LczAADG36Cc5jvg5GfNqURt3K2StUDe8eTZmxdJnUk3s6P39UTRqvc5fMiY9d1ZevUf6Q4EL45mvjVJXhfGZKGi",
  "key14": "4FNMWJXp6Gs18FdgCWyeEz9czyTBS45G3x3mMD1GJ6mtW6QDLKvnriAeAstFxeb7UZpBTA5KwWEUHTc9F3BMSGdw",
  "key15": "5ndKs36XoaRvWAcqfZmLWxuxGLF3Td25qLiaU82ykxdCccmRW5KunRniuteLP2L5hdZ4kVq6NTYnhuS8U3MzjmtC",
  "key16": "5SZe4K8rt89ocrTuL7zPWqA3T8GtcJSh4M7t8WqjzuwQUsYXaUdkCqYehmWy8TeEJUSRXVmr9e4zkWZyAr2DMDPQ",
  "key17": "5f2WRVHHUvKYSBAFjkD2PaNkN239cRdByWkVCQ8prRzk2VLQMbd75taCacABzcJDB5xRAgugCuhsK9idpqjiB4f9",
  "key18": "65JEsDfD3S8b88UwFLxbpEhMpNXxLhvNv6KPK4arZ7HCuvicvHxTr7bMBtrQmnzT81nhjUUTeUTDHxFQ7mvPahdk",
  "key19": "4GJymcFwFk2dQaQUyqsFYJ4YgNJRpBGNCRQEsDK5upuiMjix1ikA6Kme3zS78d2XCDnzPz1q1KD7zCQmhDuBNxhu",
  "key20": "9xkkqLiNe7yBkwpLXGsRaHUJCkefLwdgbvi1Sn9feyhPZpjH1GG4pHPRCB1SqDaYcZqrEz1Az7qrF87Wru8ixZ7",
  "key21": "36h1YMrJhqc5JEvDxvRb865rLnSKtodNbUriSHfpYG968NW52qWCmUQagbA6M1GUGGtWPuXzsZSz386qNJPHTpY2",
  "key22": "5eP6NJwunckgVAtEG35GX82jpbtvSKtCaqzJr59p6eDo6hqZZW7GYGKaKbykVBHeSi9AjGsJrACXRs2z7GSPk4FM",
  "key23": "5cpmVEBg9mFJJ65JdXkesb2ZgpZfN713kCEFHU8k1U2Q7MTLNKPhiWocXEqyGDERGYAs8kiMb8zEEuUA3oXymUfC",
  "key24": "rgQZNAwy5GzvGBvH5V1rik6zn84Q4uKEi8dsfRmQGsSEUxS8je5qBZk84v9niYd23DveM5o7xaBDr81m1wYuVUc",
  "key25": "5y6Q8DSBHtfpszHZXdRbdPexPRHh3makcvCKre8BsV5PbhizGdTQmpHrmNb7cwXL2qmuCG8dGQBb1i51pk5cQFGT",
  "key26": "2skiMYuaTpY3C98Cb76h5vcTYBarnffDQQSYBeEJZqGVRxffeJS9p6J3DbArBwQXDBw99vnewEWMe77eqEVS975R",
  "key27": "3wF5grZ6bi4tGgGPFpV1ttCwwh9uPwwYsyPZiorPbsgWgw1zJn9aiw9xb1LQvYJVCjetHjFUKGzDR1DQMNY2onW4",
  "key28": "3BUeyaPZgTKeYQzSFBhhTH8rS2oV3GBTbTS2mSbiPtnvs11N5TWkLtz5FKsUDSN9wLyXSo13xXsje2LHU9UhzBTs",
  "key29": "2C1Be3joYKKCs1xx4cQxNzbfxqD5nh7dFwFQmKYMCJeCRm8Rt2onXd4rPPqEX2tUXrX1YyFtMCy5LFNp6Rxvskvr",
  "key30": "4QbAgeTjzEW3uJ8trfoyGMH1P4QgTSZZf7jgXxi7Yaqz93MToA6Es9P1QcKq6BwTvN3Wzcv5XieyZ9XmkoQRUqED",
  "key31": "3HZowicJ7QqE6oo4UMivUcdkivQr4i3b2edjz9GQz3b3WGtSsjhZfSBHGvTBCnV1pU4yqPPdH3AQ9ZEppPD3RGFT",
  "key32": "3fSfVwABRhBCgKCRZTA8AitKZpx2sgsqcSck5tyr76WeqjySE1N5t3DQVYz1sDLWL5CPN8yZUny6bMAVcKib6QZS",
  "key33": "4PX2GPBa3dY5GQvQDhphQFkYbkVrwFir1wDrHdWvXJ7AyAuSRQg7qUjbhyPzV7AFAQHf5M9xRETRufDRidm1sTCY",
  "key34": "fMrsVWGF8Z9HUGkuGB1ce3XrcFTLrn8eMekbuXFpj9jmzJx7AKLjZ1RvWWxR5bmFxLwk8L45b4TTjKPTNbiKVgn",
  "key35": "2kGPdyUwsfRgs96jinjUrVS1xM1Hvs89X2JwmVRDidckApsu5uua4CqH8kSm7kCEe8Yr5ih9fLMBbjd7Po7CkbB",
  "key36": "43CSFuLoLztLob7zJZiD4rbBfh9LuXehsDrP1tzRiRchZxHM864mzMGrN4suEQwZdnt9XfTGZMR2Csb8p4rHMgaN",
  "key37": "4A6zdvGDM8tYWs9Htv6kGhfn5J9sPxyS8Zbt6GjtQXeDnYt19xagg7iYxC7t3iVE1TrWbM7f28SbmSyBbZNiFmVS",
  "key38": "3eFhUJ6J1eXyLLJvVphMJuuBt4w6z4HHPVyvG485H9e24GEjDTbXYHjuXXnPEq7nHRFVybFcsDZmMsxNz6kdSErE",
  "key39": "4CjizGF6s2w4iZi9pp3a6dAjLHLMBNNaY4wfKkZBxFP47sriokBwC2nTB8bcT6Luqm4VdUbXrqcxaJFmHtD1sG6n",
  "key40": "4NP74PVzrJAw6eb9MHwRokbgYmFWTkMv4uVyV7zLf2boScjoyUqmpMT59LFF9Lpj6AHQw2cEG8NMw62UrKrJjgon"
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
