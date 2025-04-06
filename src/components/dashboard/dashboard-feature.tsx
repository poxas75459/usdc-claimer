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
    "jF8p9xuD45rL6SQFZxDHYvYFGbXjLbB2rUoTmhHpu8dxuEdcxu14fz4gSRjq3RGdL9Y4cq3HnVGzeUB6p1CoHEa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JL8j537SQ3zCyBpobN8FzEoR1sVgn3iF3GkPmQ4m6Z3cYtUBKP61EN3YP6zxMgJgjhwrdwzLSGYVqPp11nvMxrt",
  "key1": "sjnic9EkF89zMe38Jwo5LRNtnxBHLqnwpYmUSa3y9hsn8FNgdDRxGg6SX7dFqSyVqFdjjLKJBBw4DGnzZZQCTbz",
  "key2": "4hhVpiJJBiM88LvD3V7mmgRPg1UMr68BuzQiEyEbxXLbZ267fKcBGmEumUxknrK2HQHpLEfRKPa99gCSZERJmi43",
  "key3": "2dyD4DFoiDodVgtutHHn2Jbd8EAUqmSQYFXmfJRga3AMPgru9M7iZrAXg9o1FJcxhqXqJWAUmjdkwSyabxneUDsi",
  "key4": "2ogih9pf6zHM4FfKCycWiRixW6S8zo9bobKHgQLLmv4s9Eic115VJh6bRVZ944FdujQNH4aw6EHeRepB86qFyTWd",
  "key5": "2LvPpfXXVB6gYV4J41zJDjTDU9tNHkyov6fRMKWHt9aGs96rfegDZN1nN4wSq5LXB45qjHzTvmmpNQDFstK8C5dG",
  "key6": "4zGN535XUfGUoEbNNRTiuSKzELh7aG6SFxc1sgMqGUQJuzaUMk4LbubWzM3R6N6W3h5a7JgkXc91JveABJp8LMhV",
  "key7": "5VqAe2RqF4Ye1D1jUtYdAj3M7DPGjuQrBTNwzt1BRiJRWgvPfsbBBUaM7S7SkgPtdXu8xmqPtnSymkXtomEicnQa",
  "key8": "3tY8EX5xxoQfsp2Z9BAYavkgydVXTacbetd9SceVU8pncjS5D4WHuBKDoGj7TDvngDsD85GkcBmnjSJxSzVfHLsE",
  "key9": "dVKbcmTqzLmf7ndgAW3zMQezuXsCUJSYqdidkEJZwPAp2SuMqN3BRMjVGToCzJ4oYm6LP8kCHUJ6PBrsHNpWatR",
  "key10": "3yDfTbhQoMizzhxpjwWQnQUcr8SCnSvx4ForyN6iBESHT6HtUgA1amaZ4se7jKpK6jB7xwyZHL2maUc9ymTMippt",
  "key11": "cSULhYNruzXPHY5ZnBtvafAQaDExzVYxEaFUy1RMtCQ8XXJFN8Jeorksx6Q6WeRqgXYcKXFouem1aMmo59rXiKa",
  "key12": "aS8T38yNBbYA31v481vY4u14WeN7FjcKxfdAMrk77eXRoSHiWj7RKAzkXvwwrraFMiW5wQcpWLSYNWCtEwrXLE2",
  "key13": "2pbpdSiduEqP6gqLch3keSG56S4T4R2aScd2RcHca4scTd3hwwPM9CojUgFjBH8ZzUihAeKdUMC3XP6oNZsxNEzu",
  "key14": "2uuhXNnsm6khCgbEvmKgTQrXqL11cYqCRNNHTUTkvcjqHBansND3rM7QycCKjFqkVjk6D5i4M9u41wcsga6WYirn",
  "key15": "3Ke2wMmMS8kuaNsoen7K5bBhuUTztGFBRTupJB6SuWnMsG5bR4Rv7yuH4wgL1rLpkY6hYas6CmSq7DSygbmssHSp",
  "key16": "vexRF1TW8R48BPRq31ZjWFQgNNMyK9eu16NJoNV9szruXgwzATqu2eQA6w5EtyDpgZwMJKMTSsT3NW3FZhiBa3Y",
  "key17": "2iQgg5FhFARACzdeR92Jk4Wgx3ZVUTVwm5WdfFmfFQqRV3tiNXVYuvgAb3DPeynqEpGdoY2GJrpaFZd1UbP9JCFZ",
  "key18": "S52Q1dfwAvcewntEq9n5hX6nZYcrwgQRDvuYQSCGZf34AiCTVNbLJhjjbsZyrmMe7cuo2V6vuBnq79sr1w4WcUd",
  "key19": "cP9qYU1s8qAgssQA4SeB7Bg8KcfsgJzqVQiYhXfkYhiLhFmoanyYdeyesBNrcivfQC3Q2CgDKmNZDwVF73jr1Lf",
  "key20": "5LjsyFSqBahUvahMxvvC9xPNX87KduUdWwp2EFcfd6PEfyD1UFude9jvJTWgLb2fyZZQWvUfvLRnYR4WAsfCjS9R",
  "key21": "3TPCgXVKwtC5WkcWMdhAvH1SczaNdKy9miBsVi17d1cX3SYtwVxTZ958cXZY3S3ndsj9h3PhQGL3UZPHUQLtYSQe",
  "key22": "43LcoPhKZQ57D4zhJGfuc4i9gcZP2tF3vBfkTwhMB62NjemjD3XUJwj82PJhK6PnE8Bag6EDuoNN3FPmwrT13Jz1",
  "key23": "4w7rJmpUcPxNUcvp28Cnjk14Rup7GdS5LjAPaf7mmMn6AXXeqkp3qxsuy1Vmjch1xbbtWxHdvpujLeHXhi1gccki",
  "key24": "3BEaC4sNgZ9YXesWMRfGoEr5orFz8Q8E2B2A97CZKGCXuAj64DUtEzuj8U5Zbp5Pp2LmTPe67JWGgtWAwPaG1HQ9",
  "key25": "5RMbUwFzuMcQQ83v1N4h8FAxcNEqNkFqA3TU4VemeAhZYqUzWesdvp2zX6zjnKcNpYSKCrMbsi9gCRT3mZPT9ddA",
  "key26": "oA95WZbv12yBAwK4uSoUJzp7DikSKG749m7WNQ8sytvTgJXfEc7cCiX6eVrccjEs7wqDSG3Ct3KnFwjJ7uL5wBd",
  "key27": "4JzGUCeLadD2RtmABSqd2e8Ra9K1iBDYKDo5LpbewYDqwGTEdDSPfHqjiGa9YYYoDBUi94Jh2vjk6rWgYE1gLKbB",
  "key28": "3k52QKSnCkPCaQoyPr9Szke3Bvb32nDisQoiXcyfupfyQsQgbuUhhd49rhcHcMcXF6zARbiDmY6GnXtZcqHWYX7i",
  "key29": "4qj6fVBC1bY9JKWtCPwHP5y7CqJi8jszFNzDco4bokoRceGbC8omXaatTtTQFQWhb4sand2QigwdSMoyMsCueJTo",
  "key30": "4eUcxokApFpoLz5hHbh1kSE99X5cMFLDVGjU9yqZyRvCngYLost7XYP7Z5VueShjR29HrXJSm93dqxEWUMHTsRgL",
  "key31": "2unbJsGxnxpQHeJ6HjZfMuYwL7CAhbq4r7mYXc6XsuzrgLHA24CEeK9Lf2EMBp9Fy4Fb7kwbjPwhWEC9refksdDm",
  "key32": "3rTRMzWKmF4HrEqvpy8AbwH4NEc3Dcr9KdE5VpGyGUwUoECiiDN3NBBBDvMPovZhvYb4i9rvkJa45nPHjB3EKGMd",
  "key33": "dVhg1hHSb8h5rD7HoTPXSTGyt3ou3KbNEAQAvN1QaZpmUUVWEQJGzyYHMkTvv3RHTaD3ZCi2MN6QhnnVKeRQo8d",
  "key34": "24EqUxtw1Kw3DZ7Jne3aHWgSodLRdnoMqK5MdZ5diCpyuWTQ6xdrxLiCeQM482sq3YMPBt1PhWdQy4q3WHwyom8a",
  "key35": "8vf4yy7FsKyeofLGohFABJbr8ZrcBs6dvJdM7aDGG5FhE6ahgTgwhguv1Yi8imc5DDhFu3aLWh7ZoPDBJZKCR78",
  "key36": "2EpoVNth5Qd6HshahmLGBPwuPiYgbXfZG6QjWpQUKYXqDaaQ2nTVywiVo98bKtikXeKrW1bawpn1M3p6DJtGHbDy",
  "key37": "4jtNw7xHbxnZaFTorSoNBdRZ8QuhXnCp4hCg7T17e2zYuKyVpb4a5qWPdBFWvsgzQh7GnNVwcAVN3zB3sGducYne",
  "key38": "38xsKiV4iGDmMi2uD3XvzDm6L4jiMBRxWtHtSutFcEKAW9mBBU1kXDdVPdmmi41bSpdcZ5vAcDLgFVNnfevJffFK",
  "key39": "3jugbc5GJXfBnfevKqLEZdVcMV2i5KC6hQKzbZhu5RrBKGPibMGvPcaEdutKn6v8wcH48rBUuZUJgY3hhzEmUESX",
  "key40": "4vAkAZd4aMJQBj8t2kcmY5rRY6VSgo5qpnp6eaLUxofTfwaU8RSfgEbNKweEWLyTUgBBmQzN9nCsDjH763kQneU7",
  "key41": "3Fw3m1itEyYBWgkJ2sdE7Lf6J5QctEFezu9ySqyGvxkwSyq2VstbsFVEkMRi33VZzYdWrWvDdLRrh571V5uc7MBr",
  "key42": "4QSvANkCvvoJQRNdgEhD7hBEvzF12pyVGa8xAFomJHPdfoGo7BD8YmNJgytYoaEpY3AcrXr2Jbhwjn5HcWFrSsW5",
  "key43": "61Y6UtDcZTZ8PCdQyvUhHXeuhh6o6EH4nakZNkvLxUFEn33pGRwq4kRgQBqZfcAdZDWceCDYL2etGQ97VsUTUnBj",
  "key44": "5JohgoQKxcCXLWdevCaboGfd8Dg7Ju2pQxkKZ6GkH3pRvgjNvXco4MM3ZTdbgc21cAScyLuJDJJVcegwZ1tdjkoT",
  "key45": "26fBzvvssTEzXokpmtYZHvUM9qeXGKaUUZ7gLRGVkxjcRMBViQyWgpruQ7whRzTiWGDyDXJtgsCpozz1FswvfRhG",
  "key46": "312wkAkN2uctwMZV7CLpRFi2AWZcz1zcUUGb1asE7Q6ikusAhUnEWHTTNeT5XLjb595zfQkaioD7sRdFtut7Cf8L"
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
