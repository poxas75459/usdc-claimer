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
    "DZd27fKcyAWjvrx1HWdVAuwmq1NWpFouP8MYWd1T3Gyx58NSwFrLm2nWbZpKVaXj3GwkXP7wxzhGGk258nuEfNu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qhroC2Fm5UshiBTgc2hquii8QCSPjs3H7o1TBqZSLZxL2sT7sUpBMKnVY6BYXpz64Kf7Pyx8njRYVo8jQ9s2DeF",
  "key1": "hGSxytDzH73DHekDBqPasDtqaL4WiK8eYiQCduz66hoPUdj7TsrKNb2J5PjXhoWZbX9YiSbd2hAdNKmJY4QxuNV",
  "key2": "3PqGZYGF28tC5y31vRDGwe8mF1JvBwzET5i3rDjLcryPkMVb1rdfmZXd3w6K5Uw8hRp1Pi4qPDzZmY2DKpBJkJcK",
  "key3": "4ZkZeCQNDfRWUNfzGpcMVbbAvgBxupEHkRq542DTDqr2b4qq26FJnfznCGreEtyDo1DAEA62cgmLUhxFmwRCqto9",
  "key4": "328Ye6J5mfJSypR2nBdf5v6ZKqWLTtCbrFTqrb8d5sGiZLCwBCf5A8b5ictmvLubmjJPPmBGFmjgxCFQkyMqBqmA",
  "key5": "4q6ZkDSbsqbS3Yx41v4dUcvgECr6BWM9Jq8esynNdiPz1QS8rDiiNBFkAYkJgzXMURxer8wiwc3RYvuL2a5bbNs4",
  "key6": "5fQNVdRd3UJkWNDMNopxc3REFt8a8pxbJeTsVb2ZzJtdTF7HVRJQtXFyodiysBn27yErCbubEqtBWVuLt5PvktQ8",
  "key7": "4VB5iSSLeDUzk4FKke9ktTLzek22fi6BUSQQTCC1ZrU8uBdHMdTtLT91z69qjGsd7UNs7YFfsfWy3T79vBBArpJR",
  "key8": "2aqirKebCjcQai2XoLsWyh1DNWaPJad1Drg2j5ycnhKbrNs13n4sumKy1qspsX39QbDHvFGHW8k7ywHRbjmExFRa",
  "key9": "2Pqg4Q9pBf2MquBRvMicYXVUVGc5shxGuf2amKW8WyXqFFeukam1zdjUMFgwSysMQf6DYctXW2bBCd7xTVXHbF1z",
  "key10": "4E7RgDhESb7sGnYCJLsuDseauYS6tLLKmHazLKLwKmaWJtqgV4jTvnWJzfd8vKDN7pZrKhPnjTQ2Hkw3vTB5Esyj",
  "key11": "He6RgzcbqHsKMHNLy1L43WhiLztsk3kPRbbc6wYN33jYs9B2BwR3ExWvWrzMDwNmjHMvyqasQ1NHrgKb8SPKUEy",
  "key12": "4fi5WjVRaB7RAcknkwWt74ihs8wy3drRwJQFT5Q5Qm7K8nWmRC9Ksy1eFv4DshGAWu8heZYqzSy4q4D2ttBbj3wG",
  "key13": "EKRiVpB2ze5GjXLrGHUYLmnAav9aPLGhzfvU8XKACMhCgBiFppS3PPjQKpTDKvdPahQcupTayJXghkW6XELsxtE",
  "key14": "m2F1UF32nUGWUuZ1HvRXu5j297Wc98ieD1GCTEBdJ7doavHzsnzsDxARmgBxPADhkdJukHYhkpniH3JFFzdVVeL",
  "key15": "6o7XpzLbQpy7RqgMFHwdbdyMHr6BM1t7QiB9AbhPbjEXyA5KuBkyhfu2DmUSWZvemK6HJ3na6CCjC731MepgCAv",
  "key16": "36aDcgQhchnZ4DMumyBFVqLbzjnsjbKpKGqMygZ4fHaR5VpwM7baCG3JCWn7fnVZhHxWeeNkDjVDrZ5qs2QrM4y6",
  "key17": "2YiKcGVidTNTpg9BkKZTEHhrp4U5mhSy8QN81QwdAuq4LJxpUab8tBxpmj44JMbTywqPUDSnHQqfigSgtHLPtwqp",
  "key18": "2M7jWiJCbdFV4Mk4utetPwmQsJVt5VPy4Wcwq6kpA7rK7yFfqNpbNkJHvnQZgijsjnwMjc2qeyQVkU8aMV3P2CAn",
  "key19": "4utciHNBoe8GCwx7eePQvvBmySpPwP4xWJYFA6Sqj1h7s5fwgMmpTu6BLTDuzeUSJJ5y9TAmQf58cizVhmPHzoCr",
  "key20": "YXxxQhpw3Vx3qfJTEP5i2MVu6qtJsGNSg24CcWhoCzRaEBFAHb4McL7dxGfGY1G4PFGPtJogrJf3ViVtDKYeECM",
  "key21": "2muAgYWUqL4fTC55STAFmCu6fqbPbtfgqgkM3fNaaKeFWQLeamQ4Xu4pvHTfQdyzvieDXhh9iXgxrnR6ZFPf2bx",
  "key22": "56N22X6N2WHs3tDvLKdpg8VzaNMzBfMT9Xmu2ZCd18yrQMFmgJmhpuNRc19EDCKbzN17giVsNLWjD2M7VcuMN61U",
  "key23": "3WiJ45gL5tNFkBtW7SMfeqykoWLkMkS6jAhgMtR5MhFDZVboZhaA5cDyDkf4XiqoPVybiqLLrQVciRBn9zF4cVt6",
  "key24": "2CbBK3wcByLYD3kdUND7ExcMhDLWjZG4VBn6BzFJnPdrJhqRPPGFMC4hFep4EPup4V8zYFgL5Qhmwy174fHe66Df",
  "key25": "psh2c6MyTYCvPmwbsMJ7rKJ9Tfs5FsxtbkKQKNwn3fFukcMKEQxqM3ct7QqG6sDt1TUKro9Z86xHgQBtem6k2iR",
  "key26": "2hj6fduJzUiJRoYKUpopFoKn2VrfUE8bKfTrMs2oLtXw7KHCnbDwtGCrk8L2Vqe8UhiT7NXoJnVVJweEpPtJgsFU",
  "key27": "3UGr8uBMhykQCodNbV4NYi2AmowzD7k6wTKcD3hCGbVhZNBMoqP6yaxYTspCqfBohrQQ1Pc8mFPrwFbwRtDaTu94",
  "key28": "3sMvNu8m3nozFHfEsTENH7ooNDBEMN3tycfUpZ7w3mnyQe73bpriqL3Kuq4P6WvErC7HPQVxRBkAeJsHX258h6fE",
  "key29": "5ndmkJ7XaiPfVFENF22v57svxDnNuEWr5M1cLL8HW8fwGZEUTtQUt418oLCE8NKT1JqK4HjmgdVnhqJBdc6ojsez",
  "key30": "41Q371R1DqfX99cDteyPW9pThJ11wt2vh2bXmAUZAM3FggxnvAeNopSGBKBpX1k3LtKRoHLohoqQifu9e6xsz6dq",
  "key31": "4Ufxr7EafqGwuRKk9kCtaNrLaDY3jp15E7VXftVVrBcMDxyS3ReaehP4niExdQqaw8LbpKavRd8FLBzZxPfk5Ffw",
  "key32": "3GdwomXSGGQZZQmwRr13QKcUsLtcvjsVG262HznAdTNxBpA7kzPtkrUdX4t5ctgvrsEvvixEtGHcvAtUey8V2rCH",
  "key33": "2fztMqXEQ5u3bSyM5uzmJbS3duNCyYr9VAbA91iJ4PkVr8bV5jSVDU3rsanwfHLEGCeksg2wDzEWDZGerfYxZm78",
  "key34": "2M9vUvNcyiKkGA1Jgt87uduKm24HF7XDL8Rt7gz5WDMFUnaj3LTmXsdQaLMaCBcKGunWf8a5WVajPqezFwpqBCzC",
  "key35": "5wkhCGfpV7zRnub7C8PXaKyb5ME65bX4z5m16Zk13kSoSs3xxdcw8uPYD4WBVVWPZFc2NKjHkad7cR1TUzvumvJ",
  "key36": "5Wz1p6nUqKf3Zb7JUyd5VEnJym14juaa8zudy7kdxymhT7GBH9MV2mjqDKS13ab2t2cM82Yv4KSzFgX9dC1MXmNJ",
  "key37": "2wi2w87R7Mk3wi813xsz7EgFEiKJGQgzH8UkT6QkUtq3Ph94NFwmcHUJVPgqkBdo7nBMwAYDUdmjUZpdeRRC6pLs",
  "key38": "5vH6K69UdaWgUT4ggn4b5qDSSvUp3Ghe7mSGsXqAGDmZs6oW7t11c5qycNfX6GCtGxTkATATCBWzz84dNrSt5M9D",
  "key39": "23P6qvfhmEArxvvivbHEwTjV5GzLQksu4mMmW6Rrxd8rTC6aMta8RyeKRCUNHCuAH7NRKxDkQ9ERfpcBjiY9c8VW"
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
