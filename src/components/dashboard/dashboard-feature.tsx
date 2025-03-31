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
    "3zyeinSLfimwiEDeGMfufD7iwyL6kRnMFHT35zhdrQy7VZpZazqP4diS1fv1HdToNuX6tjgdxhjPJQYoqsdfVQsP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5439f9wqLJ2dyroT8t6j9CEhwvV4pFNBrFpsxdwhjo2j6x8eXhUxL8GJgKfWHM3kX6cH7NceGZBaHw58pny7R5gT",
  "key1": "ipDpzQt5SNaMcMRLoG7nwrfLam9wvHpf4h7rMWmo9rmw1T3aLsBPwHYk8YbBV1C8HR8YyXMku2ejQayfuZrtuyM",
  "key2": "z3H9G9YknMiz61vZUmwBBkewLyYmn8BnPvSqcwywcAmpbNQiv2ouFkDS4Ez5qKpBEKLPpX9yqn3XKGWLBttJo5b",
  "key3": "4YK33GJiMoLKQXyFAagKemNPNZezUjb81Y4yDLnypbCRYWmQ4kYxqBMZCWTfLceNUoGUzKUF4augDppbvgTEaug7",
  "key4": "5XAokCkga6cz3jHTV8KSBJB946KceNRzG8LSBvZ6dJFvoWjnyrgpricvjLyKd7AvU9bjG5aE4VwcEvHWYnrrchL8",
  "key5": "4qiCQuwNdXGYSrArDJswZHZbUayLwkkbobJaEdcEwFJYsVymXUGZb9t9Gam8FZtznGMTrDdfnW8Q1AgzhugGqwJs",
  "key6": "3XeEHEDi4Wj2AZjj7Q9MqedUEDNVWEMQjyuJV9cdB21LdcqY6XQ57Lq1zx2MQRRPgLEPLUyUqVoV8uwEWzAfpYqV",
  "key7": "ehjVn2DVp7SLUXmu9UP6S1GpCGZvxvjczEdT5dSyBLE7ZfhG58bBSNH786XkR6QCMHfGzBjfMJZYrhSZS8uHvcT",
  "key8": "3EpYPraQZjzQcyjjNaXrEYHYh1rTZ65u72mY1JgSnfD1czM1PsRt86qLii79RMfraCBLBx3LijeUZ5njuo8yoyeM",
  "key9": "38rDWU47ZcZT5bPtbHBgAfN1WhoKJ3VGJo4JDkwPoSU4LF71sUAhtYEPWgrkdAvf9SU1bj2ytAuPuFzJP4VaCXKF",
  "key10": "3N5X4V9NXfq7R1ZQy3E8CwsVt8s1fbzhxxjuqn6FnmrweHQSmSsRAWKgEfw4YojaHgaZd7sgKyHNUDirV9ftfcGe",
  "key11": "tqSAezxrVn5LHPLMRhEechQQPb9GrDesQk2TzDbezLbkN84FNdobkBzD6V1Kg9x6957ZbPEkZPHEU5NvL3eF3XZ",
  "key12": "4zTqrTBNeqhTrskjwzzSDsYk2f2jw3bvS5hXkRpefF3Ff2Tgk7h3VKXPJPqehTGQZjuXuDRj9mLDUzQ4oX6Hs4g5",
  "key13": "w5MRzESyp54gnDusGzaeQuhceiCvkidEn3dozNkU8ExkCb6n3xGRPgAU41dzQeP4swBjhXacSJEvPC3Lc5Ej7Gh",
  "key14": "2fcX5Aoz5HcRBGszCieZi12dqYkpuVFSpFxzWiRYHHLiNvd2X2Lsoa27w3J235jY1VeVr4PJBkzyWd7nEsRQiaup",
  "key15": "5kPh1ZFTcwaafMXL7LC8yARBQuwN2HLCThzw1C5SqnsvxmAJ3y5Vma3jJe4QXXdjsdDmhyaHYEJwA5WeWdxVF1yT",
  "key16": "3rRNgsZKpCudYQFb3zBT7ZFoPs7rLRfMgfXWkA3wJ4DjDibjj9k3xUyjYrGreU4dW3wVvPWNgNcK2jkZXU44C3Wg",
  "key17": "5Yg9YUiiXANST73Nhy9eu66JRLXx27jR4to878X8hiPJkTivcaVk8uPbDxCxXywSms7YjjoBrSgLd4G1R1EXMdWb",
  "key18": "34davMDATK1fiFUPDqMV44KPjN2WgyKdFnbukVqBeN2V95GrfpZJ1s5qjECoV5617utEXwxPn1UMpSHrEiwRqJgi",
  "key19": "2Fcc6caHS9cZiVNSMwYvvAqcMWAmFX4YykVrf5y6cf75HHZDB1g4h2pYC6prwygpwAUGbf2WcnEuCUV5MEFw3ne4",
  "key20": "2THi4AY5CdKSiV2y8QvZ3fqi2uXRR4dx6DcFnCBoGTtNZEcwQ4Ex7zrjba4MFfD4iSneEnfG64A9LoP8N6WAa5Zt",
  "key21": "A4uEopPcsRuVdD7rcHQRNa34XkS8mcCYrYurVT1yKcWmJ3mMmvRpkuzc7N3QmnXt7nxwkruwLzydNRCMAGRsvMu",
  "key22": "56eUndbzV1RgBF5G6v3uTD1EdiKBJ8oPsyDrBYyqHjSJAPGUpDjYPYCB4eggNmHg9MZP3zPBVRKkbYNGDW9avLCM",
  "key23": "5dejpTvmwiFFkLhWF226yHj2fbx4qvxB2kbS4D6mwvq7VcwnCtzhfjtZkk46iHnrJAnYBKDJVfuhsDLUAYwLFdYK",
  "key24": "5Pa7Ln28SrgDZgp4akebqad3uu1zMgiF1BtUhETjVX4s3vYfkTHir6yiTkd1hRjuvNdyzAggbzZR63SYWoKSwgsz",
  "key25": "2Vtnk4WHasiRV6diAqs7hTfp4UB8NFJWuBcX7Cz16ZvmQuEzvA82o5asfM5FF1dcpNcrkeJhuvr4Vfv1qeiREUX6",
  "key26": "51zTtgpj5vYeqpAkSSCVdMUr9WpVVRcP2aCf54d3DjvW188sguuHqJVuGaqnrKjr2q9AQab82mVaG65vA9bTfCai",
  "key27": "2xL19yrtUe8gi97JnXTFanT5KAqVMrRPSGnPY5SZ8GHXxs6sg3JoqCWbzU1NXtCZ4vxd3bewC7RYQ9evQ9uZjM7C",
  "key28": "4DqjM27kSU7aiRebPCMDfDz4qX8nHowsYZX8a9W7R8ZzXJKwmAexJZG7SkVhmRnHAzym89rLrGaS26vo6uZqCjDU",
  "key29": "eyTYBNR8TTNRarySk1WXrTyR868ygmpfBZrWEVttKstbZhhAK4cfXiHT82w4xdvt8Vr9oaPgU3DEaH2PVpgHrGF",
  "key30": "xhm1zJhyej2onSrn2PHCg5pKd74Em3To1gRLxDq75SpKgoREJ2x6HeBg7i9f25TUPeSaEYCr4zKAYJfv26qMKX5",
  "key31": "4PkxHTwB31Spig32G5HHXF2M5T1RFrHAWEtwANfspNZMRoeYQxcQ9q2GtDpeqpxAKLYBqM6xbj2FfANdsQLHYft",
  "key32": "5tx6FWCEgs91c4UneWZpD2jmzWm7aL9ogUHdxEBDLFTWaiXDJq5aXqZCjCgh4ZciHTNCVfYp6LgbLCcYptpbUPNh",
  "key33": "4PoED94gdwb9rPxJE2tQ6gjQ3ej2B3H8zb7kWknnoyzbGspom8FkYGDSfWdnfXQYjKyp4EbMeMLpSNneEazwxfhb",
  "key34": "4C4yo1GHPZ8pSY4qCTexKk5XkXJhfTFjBVXkq6Ev5uFUkQ94yYkQSeUfkPdL3BgLibKgD2ju4wPdCSpSp6byviiX",
  "key35": "5pEBsZt62zka9k8ST1MepjNgWp1EyidGmnES7FCiVwNoi7AMzs5dFwZmhZT4ZRe3U1Vzeje5D8CQ8Dxdu7TtmkJv",
  "key36": "3wWVQxwjMf1C9VocfrD8KAY2q9u8WUpswih3YzfCJcARVtMQsiZByzgwaXFmSH53Rfhj1cE4xPSS2UQ89ZdbvZPX",
  "key37": "5qVQxyEqGXA983NvY2HgnCpDdoz97DdrnvA54uQkWMEvpEMAnXR6VDDvcGCY13xGFbqaf7ByUALQayCPUThERKyS",
  "key38": "4ozRQ8Qra7Swog25aTj7TXhUY5HZhK2KX6Yev7ZAiEBu14kbA38pbJjAfVhG1GiuBWkvrXHV88mGpu4VwQLNrfRo",
  "key39": "3dyjgAn1DbRRGEofLA4SsVUaFS8L4VruiPXmPptCWFBUWdHC8mDZi9Tuayr6X6S7jE9Jj7CdE7nXLYkiBUyo6yhY",
  "key40": "2QYaCLM8EoCQEDHTrYxry9XBHePRQbAH2qBky5fk6aeQMxFL5aV1jVMh3pVXcufThi9GSZDUrE7iUMJq1GcjwVCv",
  "key41": "3Cq6xJyk1oeocdazG6QpK9eNCPZLgYC6x1wu4v7o12dMk31TAMSoRPcEinwQxqyWTdhEjgp79LZ7uUP8mq8VRubp"
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
