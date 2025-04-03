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
    "4FH8bCUJuDmGaTTskeWGsYwPAjSH3WpFVrVHaMRSQ15xUKhFnWFZVgApMtugTX7ANPu19HnRzbxaob9Ccd3XVSbY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RdfibZTTRXpwfoCZFU3YsXbYfKfey1fopc6sA46dvYTZ2cu1XNmDeDB4LLh49G2Kh1ufa2bhc1WJkzo3kVVddSW",
  "key1": "49hssDyfqdyEfvKzv4iYUskZRHt92e4RBo7ramHcLJ7cpcxx7YJeX6SFMR4xDKQkRz2MAZBoEEaSa2KERrXXvRAC",
  "key2": "5tgSh2fLxt2fkhhfyukcQDrTV7BSdPBjV6T7qmW5GUsvNywPqsMFUYBjNiShdRvxBHWUGUxbHhbU5jhstcvc3sZZ",
  "key3": "32mm3wz3jHhpK1DJqAy3hq1meLH1nftehBkSb317DtnCT5xZ7BRnPgWGYU4gyGmva23ZFkoMbxnct691eouoJEEx",
  "key4": "5EUzXFHG7LfyLHtDryRaMgWYsadDqGNXNvV8GLMCYi21bEAwBQESiVuUNotydwLX4oy9MYT6rNKtkRvq8qkXHgyE",
  "key5": "4PyqkR7u77QcuLekRktpE8HiMJ1Cc3hkE9HiKrHYCSjNE4kKoqakUM5gk6Ftc5KJvfFwjXEu5MMTLbMQuVniW17c",
  "key6": "4BNA3frhGEn3kpt2mktSy5Fqqa5a9ZQWPfrrVanKTNBgXLLyDSth8oKEcNBSczNbwULRtc79qRjxVkCRvAEqmxEu",
  "key7": "5XjqsjWJioWfJwfr4trFfYDEZzWPJyD4t8dvYJvXzfxrAf2MANz1e9QU8xE6MjjzrNdLdJ7uZXfbWosDeiw8RDiZ",
  "key8": "57KTPy6PU2XFHtzDMW7xdx8nFZ1zXxuzxuTjgSDMERcTn2UBSTiKriPju3CehdzHMfKMStYAdZGD6V5Tnhy1Chwr",
  "key9": "4fKjrt41yjxG43gStKUJqRTSNU77qXLG45aaiA23n7L9G3kgbMmzqRKr88NMCP1NffKGYVf52Ufai77DTFsYySvA",
  "key10": "3SP6P6xi2hmuPJvdbuxJS9C847rpej6c4bVWgo1gut1ZPfdRgGNeRTYQKccCov1t4uq9TUKwamxgnJTdXavUp5fZ",
  "key11": "tfYMPua1TsPodztr5L8xXX1mRqfVaRV9RVWWv8snDGvM73yfrcvCCbFoToATr78tHdirga4L1H5jG5JtG8sscur",
  "key12": "52NZBGvqT86e8X8fBoCbXk24dTB1eJpGqjxPbjQULeCSYRCjZqm1dTenTpQsEAX7mwe5nkekM4GFTKk7yR6gngme",
  "key13": "5VZQ2PNP9XrTzcZwpR8dQQVsuDrtN8UTbzhLo9oKVpfKpkFby3AHp4ST4Lx3k1JRoKe5s3yDxyhtHDJDCAFzbrZG",
  "key14": "3coGX2A1oeMpXKsmmz7b3NYMLBbKiG6KYadUdF3tjMozfNpNXpMNRvM7GufMhhY4vmxATcadapvD3F9BPN66Y3Nb",
  "key15": "66BPzJkqxt2fLdga5Tpquuhakd9E5rBKvK5WrmYYgzFpiN36nxuXtXQ1QhxksrzDZLiMbc7Bxfzso5jm2zUcun3a",
  "key16": "22sZpngzthn7kWr3RJSBqUu414YmcLSkT7XLKeXqB72bF47DTfqiZTnJifSa8gXTTB7U3TxvjdZoMWnZaW3ReHmY",
  "key17": "3HA9JeSzzM1XJLSAjqy87KoW4FSaFZoMNcJSK1grkNNnNNCkk1JCC8kTmrVZUaMdeprfynusEMs3Aky2PMMb2Bvg",
  "key18": "YMPZnJ4nGzFh6eD6TsAY3cDAsAQHQpjwfZB6VhG5ZaSgAdcwaELDfX6s21J34dfwmC1r3hbWhexWy29XRiG2onQ",
  "key19": "3dAdfWBniXEpD2Tgm2bTQEFF7HZ8i2DUaSCWq9ojBRscSfQE1qRmuAFnPYkHBQzqgS3HQgVNEvpYbVw1dFrb3smg",
  "key20": "ori79XD6s7kLk7Zbjrha7f2f9V7HpDNrcnkwa18q73Yvk3djoQiY5BwCdnVC9dsgCth7F2JKEne1duuw5ZseumD",
  "key21": "4iHtvvCBvQdPzgNvWLU8xqBo1dGYMvnTtc8x9kRWXDs5dhQTKcMjCmYhov9FLCYWpjZyAHnMiWuKGscWWC188HQB",
  "key22": "4RY1sFj5cSDKULLvShHT4Z5Kus9JtfZ6JpB1zMp4eQE73LmLcPdoSvaWEqVXiHVU515AfEi3PnXACa64ufwTxLEv",
  "key23": "37pzVhqqo4989XxuhGTm61ijdUCkrWBN9EMDboi8j8kAb7vxks2utMf8jQfSw3HFxeYDyzWwTFAmcugY4VsigfHG",
  "key24": "guBdXN85u96b1ZpieH15SGarxzeoyUzM1GFqsXcDP6ubF1YapgFnoyZXPeWwyhNTPyaRLtyjZmi9DbRKnKNdM4C",
  "key25": "57kXL8YwbjaLV3PntMXEkpBa2vvQV4oWFygr3RbqGgepjgEk9nHurrfd4BwSBGqdcUMn6Dcp6VeQ1Fxf324wS9r1",
  "key26": "jnbfumALyHc3kL1pt2dmgfKt1rMW3QdyRQVp28d9FgmYVrfVuuhYBbfLwhgd5amwmRLEncUeWyxu8GSMJ6Kii73",
  "key27": "3NigMcxsyHEt4V3GXLKwebLFeFH87jaEFiJPuGSW3qyvTQKcbUd771Lk9Dfg6uKDAconCU6jcJwR8JNUnNXVt18k",
  "key28": "PWSi8aJqSpdcbNC2CXFTqKqAMq5o2kNnzpMGrJ298ubpq29DR9vokycgucA2e9JzfRAodeXDDsiLfCrYBmgq4so",
  "key29": "Ns1fkquzskbW9szyuC34dQByc6vxgWYTUWPsrMkGM5JZtjVMEyr4WkAr9HQLHuka6xqSYCncfukTwKKXRjKsXKn",
  "key30": "2fjur4tSQdR4zBJz2pJ5VFFL1PWixD8GSyKBKjzkoUaMDdomGGBHnzhDFsWH9cqp9jSpNM9DHLjHeZRq7GvqPbrG",
  "key31": "4npXUo3f6Qvpx9NdVAkHTXrTyCS2ZMSz3ALk9cVUKiCzRjPsjMzzBMWZaNawJQayYcrgn44qYhJjYv5TkrornkKy",
  "key32": "5s5ZTQAcVaVeHYi7ThkbqZ2Dqv7zJHBq4vWZF4pdTWqdhtJARVDQeK3exLwMXf5WJXdGmmPib7WKjQNJ6MFyH9uN",
  "key33": "5dUdFyuk5h8LsWmf2G9eE3rFMQF8cFX6NW2GpDhcrbDAifXFPeCF8FysYmo2fwT9kgWH9XssHFc8fmdNBmx3xtwt",
  "key34": "3dYKrx6Mi6CmcpoikpTP6vzvjnbwspf7Em8JGvcYRwQ5gxTVaWLbrJE2msH37HmPSiZMegfRRxr3jdQZC31KyY4u",
  "key35": "4fLmE26nW3CiE6uwS1LbKAPQteez2Zgoq1YVwJmQYPM2niq8MERn8iHojVzup9XELd4SqpYud29q4dCHZpUGbcVy",
  "key36": "5vqsaYthtAsWUpwsX2LUtSbnYgjzjxjCSxacKPwE2egXbnLcxuz1h4BRHmn4EvzjvQMitqe9pM1TTZ5k6wCViG3B",
  "key37": "4KVf5hNUkLxspXiwG7aN9Hvw3qyXgMvP4DAbiojp4isgvfTAN5ANEoHbBU9xoT6RQWCCs87QQYPJJkiGSJ3U17P4",
  "key38": "2iJDvRYokXCVAhW6QcaoeUKR7H6kYT93KQyHG5EoZJtZUcm3PuRMp6EdAB5ndevgWc6YRxuYmcfkHZsgHn87AQ56",
  "key39": "3x4Rv7VLyZizUco3TqfaXobSMGWZ71QcohstHtTHYenNpvZR4ZJhYHUEg88aU1S6pmDNFcJ3WvGkCM6hVwkZ6Wr4",
  "key40": "qQFAqTFzDcHA7NwqCmxQ4GxVBXGF8wv586ihfCto7Rh6rorkhvZiF17S6etVxMyKDtd4AEqf7B7cJTePRmnDC7Z",
  "key41": "32ynQUr6dH415CDC38yx3u7g6zLvdbvu41wL5EpFVBq4xxvPiZXY5Etqvej9vwnU8GvmS81nrkgxsKNvzB9pt5LC",
  "key42": "2btqCDqKhsNDwuqobe6UbYsNrg2Fc6z2tJRf767mREB9frEGBJNYSd2fpN1HEDVJDq7Pt8gsaiPeENEkLuqLyz2P",
  "key43": "47yTBCNYNqKxzpfPs1nBygepNUtYVb4Rrj8CXEoiYBJKT2JpFxLqSUuBqXF8BrHt7ciiAb9tfXyeDeGNN5fthf1g",
  "key44": "4KSzZLQ2MT3a6PzBJbnU7nyntwomcSoJdrL2cCdvgYwHSubthLmvzk1mAt8AnKLcbtTkvsqBPjiHoiUmkzGFdfoX",
  "key45": "33neUvxjx5MN6d6uW95ndrkVQdoAmj2f5Lk51jAtAwLPqTAvyKi7FK28xqshGveKqBtWCoztaMiooD8Hkt69s74h"
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
