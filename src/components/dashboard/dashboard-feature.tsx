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
    "5TyvPdHUb77BFKuM63HFbmUZdAC3Yxfxh2SJ6jQcYAHbfo8yX6awtTHnWzBYNV6ZezBgeyU9a25A3Y7WhWrbRLjA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TvvYtNAaV92wZs7FjWt1Zd7bZMXwacLWkbRR3McdmMBemCcmoPqMqmEpiRxyu1Up4PsizCSUyc5R51b1nWReD5T",
  "key1": "3Jw5cXMYb5EJNKGd6EVkgmpcMqjw3cndtF8t4tF4FfyXHPaos965NgYqFG2nfQ8Bjqh6RtiY9j3bxZTus9p3Gq3N",
  "key2": "mnKJ9ySDavMQYkpVFVisKPpEQ3c6mYsaHVfENfxXoQyiR3HW27oq2H1HVJDmfp9Ae8Rqn3Src1poGY69uzqfXpP",
  "key3": "3msRsEkRxxpSutjPRuAT1xBnN8DRZGbJcJmpez8BCgKmCfvLDdH2MwKzLNpvLonVfFdwZ4FypaiY38zBBr8RQ9ce",
  "key4": "66E4kZHHNFYNGKU8bMwu3Lr8GzwGzxpfn6QjH7gsFhqKxBZxujS4gPsjHfs8RCS3Wx6jooTSwp5b5hYVaMSHeqCg",
  "key5": "3GKDdBtxv49TNnSxLXWMreoDSjDbjNpsrn42QJknT7LLwcKug3LPQ6cVmM5tk5TREQPSqTRssYEu5CPXSJUyeVnM",
  "key6": "5CKQuPpxBCcJfZJ4cXPGcA6TyZYttvwFsgcUbALkFfJmaB6MHUSutYiAdUZFudPLKE9smTbz2QMcBAnvbaKavxw9",
  "key7": "2s3kQVGe6q3hnWvAVzCYbXLLLJDSVEZTVbk7ph3Xudc59sVYWDFanDeJfxScKfDFyCSUz8wFLRkm69zSWhjJRtYV",
  "key8": "2o5QpPmF84YZ1uHomUdBDbKWvjkXsYk9YRGkK4qnzpiJSRUSCNVAYq4PY9nreQ3Yxizr9JTz85bsh6rHXvMNdBPS",
  "key9": "SUc6u5EHUPHkoaqPBNpwvQtnH4ggW9y5RqJ6T2EpBYJNyRyvX1DjUWAS2GPUSUMQQZMZYHfkqBBEjkDReHKFXJn",
  "key10": "5JqNzmJKfSR8yFrskqxhRPCjnTCR5zWV8h1dLu2ZYxugLx9DNP5qf6a6ouivWw1LB3gCw85BpLWGvWj7h6rTUS1d",
  "key11": "5zVCUsfPwkP3XZsoxF3EcKFpoSMEZ9upGNjzrqhC1VquFfEqLwPzRW3yGPmE3vbrpN6tzMgu9mZwUTSbGxLuY9Ck",
  "key12": "3ShqAdd2uEfqxpFskQ7F2K8p25yPAtEamsQVtmd7kCyiQNabsXDLumeVjHGiveEhHXK5YAjSkk2goKTa4zdngmg5",
  "key13": "4efpoc4Vvu7CPeGcPUwKgArAZ9KZi55oqHZ3CW5kt1oTJPDn4D83ptwSdKAeegf1AdDgZ8HDJya2mr56nbfyA4Rc",
  "key14": "5njKRb7hw2bAXpPb5BCs9adeW3qUA38nKH4Q4pA45Di96K1TgdvM1HBUtrnfFTzyJkvNLFmJEiShPaaYcEnA2X2N",
  "key15": "44v7CEie8vTcmUdsuSBGGqoXeM6LAzkfMPDr6YZTzn92PzrnMPk6jRmgEsLLCkb77eLjaHfFYiFSuFETEYnCdLP",
  "key16": "5czvbxdmRqeegZKTLu319XZRWv5mkBtpWJng8iyJ3r4S5QaygVW6TTZrQYCLrNMWx293p4bfoW6Hp15rkvPbGBdF",
  "key17": "2LVpawwcBPSTwt5HiksveAHcCxcweikgZ4akvCd54JNmKmTtwGqhhEz3KNKyby2boeVMWRauhdDGdW3KQYVmTjDe",
  "key18": "3aqBetgSJuMqS6F53mu25Fu43KoXWK8NCaXgyv8PiTCHb8NbeRgyoTHWXNqRC7PvtojZoRJuvJ2sho41xgqC1Rmg",
  "key19": "3eQ3t2Th5DQdmqjuBYDcrvaN5wTpMJuuYcQDeYto1yqQbmfqNcrb7q9wJaQx1pemsTqaX8xLb6bKxcGKT6iokCba",
  "key20": "vZPdXzZmsRuyqkYEoeCYLWLEsgmJq2MAZJkJS3UstPUCUYkWHQ8DqHQpCgxFLfoXLwfXWubDAXFrs4d73g9sc8i",
  "key21": "47zRTFx5jsGm4Bfqmkz91MP7A6PAZ55b3XwUXJGC1rhZiQjHwkq6nzQFn1AcK83WT7iHvQ4w8XsXyWDYgEMe9kjM",
  "key22": "3SYWGMmPKbTL93QKMGcdyWBPXvbeLuFjgdFBh3oyDPuHiAFCY9ntmk7SD2gJQCBgrpwmD4Tu2s6RQePjwx72ERQd",
  "key23": "3YXkjdpE8wTtQZzynSjMQDd5HV9PTrZx9u9CrbTituag2wskomRKriByJXcjPhEZnkfxzB7Z6UV1bKAvNsSfuDzb",
  "key24": "3JydfEA2VKFxcPrGzrkaqafHxjnpCcfe61vix4kqSn9FiARkC2jcjSTPKECSaJVR7wHVQ9Z9pgFTY2bciKiWZ4En",
  "key25": "TrmuHCPNiGuMtvAWn3EFfj6y4GS496f82YYGCodaXJaBz4xFbEPxSeMMmLrrNsi3GvtUBJdtcGTE9BxNUQLzPam",
  "key26": "4UxtedJUCDu3dofa5XBGbD6QVPBoATGgvVsBEhHVX7SjQJLNUZSpjaCDzakARUuJovPuS1skf2btzkd2U6643NnB",
  "key27": "4J2S9V1gtZFC6bq8Mcc8zFmr1sTJ7Pv9LuEzyLwHUJnAGSvFKZt9KiLGQQLz5DzjGyM7WBtgGciKkou2Qkt7nwnS",
  "key28": "2d2mguPxaRJod89kaFmsFt2Kt3cnvfosG8ufuAHjJgowYckTXEDoXcM7kYpw1uKQuRwCHNJKDuG7xpQc5GDbBeAN",
  "key29": "633vXBaqEENE7PqBqRXrgNvBYjgp4dGuDERQZ8pxm8m4hc1H5JAU4k2n4EHv2XkmzWNDHT4tFSjz1tvzzbzgheof",
  "key30": "3xiFJX558HDWCFevszfW4Mu66unrcAWcSZTWc7F3eD2ygpysYRoraqBrk8r7LX7nMLbC8E3xchhW99tdFQx4i776",
  "key31": "RBo8tGNCAjChoCWN5zp9BHZWWWuaQPNd64S7uxs7tpmJvg3eLTRvjo1BKYoTeb2uENNsW4j1SBP2PUq8chbbVCT",
  "key32": "PBoJgAAiNRCe4BzbREfA36h7VKMeD1vUajbW8WT1tt6zGW5xPuhMLnxkTucxsJnvV3HAueLe5ZmD8xNoGCgaki4",
  "key33": "sNkKda1K6PQk18Q4A3cvJnYLXw4wtnKoTQUcbUqZJ2XddzAZUGgwVkRyYoGN5j7pKeYrb2Sbg89y26ehLNvduTD",
  "key34": "2qirMMKZYsCweqy4NJThLmU5Fm7y6AxMY3JcvhgD9CJrFghukxe2tXNERbq6KLVsKCYZ7MoprLgbDR73KpyMtf7Z",
  "key35": "63NPy51uKPuzWQf3FizhQu2Mf5sTK6yaVy7Uz2z3qetrBKDwaL9rmaiqVt7FykJ4wmWiBhv5zt81o5T1kZiYNULw",
  "key36": "5mPzkBaYrGysA1mgewVSMxucx3SfxmK5jt8X9B3oohRjEWGXFUonAfZULnDSMBEAc1KpouU87ijX4HeLQVUVEvzB",
  "key37": "4uij5jqyP6PooPpguJ1X3zDNKPGbi1M2c6Pe5WzWgzH44k4sQsdF6dEpDZk73azWxEcx8WLGCr7wRTPcrTscPh6B",
  "key38": "2TUKBVFtBmKXfE5fu5Qj37XaJ5Z6hWwM9oW6b4XgmRbbh4SYfzrpcK9gSzLaQgkixS6ApjJUryW4QCFptBH3Rtd3",
  "key39": "5Q1Wz2Hqa95m7Vrf9bJdVP2a8k5b8PvcfVdc1nYiKnPLRw5DRzXPNUbBBpwDg8a69qQ2ntW9cDxkiSKnon3BGRg2",
  "key40": "5VEks4LQNMuMjmuUt1EHstvNK833fKv7Yg9BGYoYdTuXt5FonqZ4zo5TzsHyi7XQPywrGj8edXK4dbPoPsGx8nPL",
  "key41": "3CZ4vydXuZusp835ogw3x6GFKKy5obWofyM4G381D4aaSxz6WSNXzkioggLYRmt8hf7JryXvpxgCeYubeci4zau6",
  "key42": "4EuUJryUXtrnwXZPznXefKR49AqkAEc8EWrNJofwAuaespjkCaMUxm2cpW4iMhBVMtKtYhD4KGCCrj4JBhrC93bV",
  "key43": "57btk3r5GFGFZ8VFwu8MpvU5dpkDnDXbzxu2dqhuyivuVUjAMJgpPGWRYNcHkouwxbTbTNfetB6i6UiqC3bgsMWB",
  "key44": "59j4xYmJZVTFRUqQ8HwYTKntWPijGUYT77X9ejQx7hxBvA8tx6iuNdnPWD9fpiV5eZaNHjw7YbiPJCzFxNtYRrFa",
  "key45": "PvwdoZgkjXBWhN5tRkm74ya67Awu1qVsebSi7kYM9BKZcYApBzgetG1bm395MFVb1nF8ihiSDt6rDXpkfnjXi8y"
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
