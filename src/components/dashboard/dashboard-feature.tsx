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
    "4EyCtr54GKec2PZQQAsLyF9JrwJSoapK8wsmYCdKzfSKVvLe5v4MRCtwg1bfffJsnPaD4Cok8HzwNTgaP2b7k2Jw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EgaBBHJwecTDfbhrUoEGtfX9CxAR2a8zFvjEUHYTwBYyYx6V87GVTdSfcbYqzqsBwhLy3Q67iZR8JpKB1LTxccD",
  "key1": "5NoAfZoX1YRLG3KEUhfCcdvmi3P2NY4y4B7rNjyw9gxAjoR7sREuKWybZKP18HsRk8vP9Car2NUpDP9nhe3ks5ZL",
  "key2": "2b2PSYyLT7QFECJojYVbCYQDEQPhWWTrKSBJ5t7hgdJbWATLdJSm2mqgRWEFCZmbSUHzaSfqzHwa49D8sJD5tmJ9",
  "key3": "66LnrjTFJaVShHPDvMfKxc67LcourKb1CTJ2pgcFr7Kj7VhKp11Cr1cApwMDQRZZjFNPsr57jpKoND17qH5rXoQy",
  "key4": "3P3zYZadyskA5VJFS6mFprYiMiv8op6JLEvKgjt2tumhCG2S5yGXV68R7qaPzpoYDFjcMfxbZfN8n2VPeuKUeuro",
  "key5": "2RSZei2zcYAi2eqmtdj2s6zobsmUwuFLgHFqiEYisfRX3pqTznjAv6qGGF8AMew9rgwwiREVPJp3VoJPHBxhkkcS",
  "key6": "QTZhZr7HocPcJgdxs4qnHQUKUaFPawkYUkhYpqGGC71xF24xokwpJTzdEVtgEWjoQq3XX9v16yE2VUkgDPGrDbj",
  "key7": "3sFsAgNdvTHPeTm3pMugdno2uVKSNVxHvnMgrY43TFPZzAdbjGjJdBuKrQZ4Tu9xdZn5oj6gkcAGAFky3gf96hC3",
  "key8": "3FKxv4jvQH6dDN49wEkScU4kakjakXdHNcwnGu2pMdeBaALGHbRYmAjuLP2uQiXbkmmeUFMd63Xz4p5YEta1cwsP",
  "key9": "5L9iefxRrL5H25bg8YLuX1N2P6Er4Mp76CEXFQQorxAESyj3BsRtDAawXNjba4N4KvpKCEpRAuWexSCYo1gjasxh",
  "key10": "3Lvjt9u2FziwnUw5dqKkgvEykZKzhpAy1RjSZEGEv2drf6959sLENvYdkvyNcqjALKazC1LZWdKihwoL1rpqa7C5",
  "key11": "JJ8VNgC9heFo9Ld4K4fbZ7fwNhdgL9MLAdT1VX5eVnN2d3cpR2VTHjr492iVC7RFvxAxWzAfB2y99Ph91SGNUko",
  "key12": "21ApbYbpUUucHmbsmf3Yfk7pVgdvTpPwchdsQVrHfaFgzMp5EPdteKBpqryrGDdFnRQnNx7Cq1GT3DKcQxZy3vk7",
  "key13": "3PiR7yZDs8zynJHD372zkNg8W4FBenAReqqhMnSDapjxsk7annAkgs6p1xYdfjezBnta38eScMjx7o9a7e59qqRG",
  "key14": "64LFb2hRLJhmjBSz4xELLu1KhoF6sg2inS8LjzqV9SwpG3ckW4LpsC8od7ApAk9uM4tebxfrgCxNcoT9XwozJ5jQ",
  "key15": "JGLRNsfPAdXXMF1yRLxQQVxu7DMWsct3ufT6mXDk9HEwpKzUDVbtWCzuPB6Ar4tJhf5cGj7rxjDTECJN39AH77K",
  "key16": "3u4YqHrQwJCDLqZxQZauFJwGJctT9ieEUAfS1R2ySVTtWEaXoQeaG1kiKZuoGoBq1JmChba3i7qULxEC9U7D1Sdv",
  "key17": "4sGT73kK7rraTs62vQ5kQ8Sn8ysK3bW44FMxXaT2XwhUj6C71o88a7edKyU2sUsFqfNKcYTimzmACbbTmWe1bzhv",
  "key18": "uZ9yjd8U2GLaS6hHHLa5YJ6N43hA5aUmFR4tccN9HvAMzpoFXNqMCuhJwxkQnbQnQcKCJGqfPS8poGMpJqeni54",
  "key19": "2aKYXtYDqa1d8ChtQsAZFXdp6NMXDqWW8Hrztp4rgWYyQ9jybfgQq4KdgBtiEg3fHkXcVx6h2CprzV1CCPj7UkPE",
  "key20": "5U9ZP9B9G2pZhTeqT5U4c2Wk6zgwJvHXGi3pXi5LA7va4QNHjRX68ztyg4KY537GBHb4oUg6RZ75VEgZaDJCwpY6",
  "key21": "EJgs3HBHf3btiH3DTaY6D6wBmLpD9Hh1f45UY8pvkFeBgQjhRq8JmfHe66ksdiD3nQ36hvBsimdo3dKGpriWEJK",
  "key22": "3EXsdBEe2nhhrXZ3HkYYNXNTyCBMDPUhDUM2h2nwbveHQJmKvT2WkqhEsnFT5yjfj4BubXMj2VktzBp28KnpFY9e",
  "key23": "2XeiCf5DMUnJXLQmqiACTpLi713JUCwLCebRuhSRtU6EM2MxBEtv2abRTav3hJqBmHouQSUFP5uqnppf3hawc67s",
  "key24": "5GsH3FZunRCs5gJN5PasYLhfgR7Y96PT7Vw2Ft3HzUSq9u9nxjEJZtpYUuH4sKLxt3wDCogAvfFY4o7Ec2sZjpiN",
  "key25": "tuYFGd2kdaBRs6S6KkMeKgXxf4Sy81gFTxF77XCAWjpp3fgnyeVCtyKA2vh5gNxQVNDk7unueUoi5cRKtUpu55h",
  "key26": "5jBU8drrZbVdgFQYLd7A4mEebJ6dpVVnsLiUpphVp8R44E5FMVLd4aAQ4a7dWbNhvKR9NPNXDVnWHQ4QipdR4kYW",
  "key27": "5wEyjCkF2zC7Bz8NBsqqda3aAwGP8HJMrUGPVdvHuEtY72Fsd3x2PnDrmDwg6KFAYtx8erDX7WfopdJS4vT6vCZK",
  "key28": "5EFSkDrpxx7XS1DPeMHvRzhERz7Nu9CAW1BNeDWVhRXupQKLgmXgun9p6KjknnZLcFeJgbWovG5VHAYSTnRVXD2N",
  "key29": "2kEoZk8iWGrL8XAKjYHMjvxxXWxdGUgAc7T2spWU6Qn8SHzNoofcgfUzKkGjd8bkJ383JznYnaBW2pDKiwA1uZ3C",
  "key30": "5mRFp4vM6UdcEF2YuXrZCs9JJ1GojUseAqtQ25cttG6GuRYooi25YXYKbpZEzb3yziTzs3cQ9tyMLr546YBjJ8Q2",
  "key31": "BLqyM29aWdzWz7t5Xmwiq8gQNjTKeKn4yUapwCtpdLQvqyy7qFrSnuryZyxaYC4CEr4xPgawesttfKE18uC6y3u",
  "key32": "4CjtvVH8rwhuhqb1atmH1fU5TKQjtcD3XQxEzW1ueD37Hq2UyvmFDi78xGSfQ2nwGLGpemFbYXTB9SrRcT2ybmY8",
  "key33": "64f2o4ZN12x7fQFgH3hhZGC1ihUrjoyXcEfnFYmPnVyhg2G8RtgVE4Q7KrnGPBJuwQ8EqYc6HPD7t9ZtJhrSeQrP",
  "key34": "4kxjCUXJhqaTLYpknXFNZm6DkdvWfZiGehV7eW76om5C9LPF4xZwmSCU2Esq1hUmod5ziAzSXwhWUNAV3oiL1WSp",
  "key35": "5HG3exSo1uwSXLeoV7vAZmqxL7Gc6nACxvRfu7awFuU7RhFhv2epcAqdkmD4acPS99Wme9erPxfDcvDiagkGkqyT",
  "key36": "5KcZuAoNCCU9CDnToBYM1iWbjyuqksnSXzMYJDjD6eCKsKELnUU61qTynydUoNBtV95h1WFL9cmaz4DoEYQG5GhH",
  "key37": "5qSRRi4SYb8d2nk5q76p37dDbpfzjTvYbLHwHUsc1EeM1jJj5o4R9ivj93w4mjRhdA4mVKCTk91DqGNC2Sgsqb4z",
  "key38": "4kqW6tirwM6bxMorCdbn7mE4gGGSEukP58u3H4gW5RZMRgmeKzmkCgpNC44dRybwBuB4oMbAQdMwkrFZZCKoAZ99"
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
