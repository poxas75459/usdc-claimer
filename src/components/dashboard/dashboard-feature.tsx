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
    "GL2gxUTVX9w2ysDU7WVxyX6XtPoogzRrTFb7k3ppvSJAiJFqEKgYuyYptfaZsZn1z89sPg6wyGeTDtKwTHrdQPu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3T8uBQy5Wz52HneVUqCupgJPaUqZwySWu8zombMBzoCdnTdBkRTiijvoietFVUtS1b24e9AFpnV8NEoPkYVeQ1Nj",
  "key1": "2aB1NpbPRyPuwSkkfhayGWUHMBgvCUdx5YBpkZtjxFzT5bASLMKLpyEweFsTcFcsWYbMrXoJBbcbhHrS39nr7MzA",
  "key2": "63KCFLDJvdr2f26Yp9dbv2JJbXiY4JvMSU2u8PRGdt2Nq1i8uSWbq5ZDYnS5x5P67QWZXsnT7ciW6LnFSCn8yu8f",
  "key3": "3TSgbj8xnsEgLUVdw8TjrGkqkGQrLuM4eFEtxkQ8Su3y5JqmXdeMT25FMB6dL4b68VSqJSbqcZ3EqULvBTnpCDR1",
  "key4": "4A8GQyfNtAkn322QdTrsmQeqMR7ak8T7KkfFjkfvZFGjhgJ8vwuWGVeAz89U7kybubNHX3MForimarRo7NKCH4FC",
  "key5": "5LWxqPVYcbuhFx8HawpeGNpBYhnimwCTEfPbAWKWXtnWhzgcaYqRiuFdjtJyD56VDTtZg6ZS4MecaxZgmoMoeSwj",
  "key6": "2XT36WmzzGHGoqgzXzo4EhkPNpdwtC7FSoRghSmM5FstiVGwVwVaqNypcDxLJMhGDmaHmEacjmfyvu53UJmsFR7J",
  "key7": "2p6hKqScYh9YU5QbmedUSDKjtw19NVt6YQAB1cMLnw3cXDQYAENxz5cwwf5Daz6qHt3P7b3JjpDPERxHF3WfYRgV",
  "key8": "31cr25k3WJ7K8B4TzkG2tPmwwAxcZQPL5b9u3LGcrbXxaJKgSQkKTicG2qLznSKXUf9DKa8rz8M7WA1johqWeNsU",
  "key9": "2ZEFW9jQHJxsKfFfMNvHmrRgU89eqC67NM7bH6vhESdf6bKmH9wfSwNH3LMCWzxuMUofS76KzK1XXCpyVEUaLzgv",
  "key10": "5WCws3zvXicpmAYWXY8Y4Lcbw9yt52WbhBPsqUJzs8JywiP432jDY9P2aLN1mLR1Ziv94qdp5LMrnLzVf5SpKHnG",
  "key11": "4ijkSQhJtucsM1JeUdD2mjmoaK2HEqJ5UeHtLCJDE53kRTXyGzsvjY8QER1QWB6tuxdmETQLKaVL6GaK1rpMvobk",
  "key12": "3sphoUJhTiEmovURaPo6anf3h9n7o2C9DzHmbEkQyWfoM8wRhHMdZXEUTfQP9wDZJ2gP3qngaubJ9bwfEnRGSrgD",
  "key13": "47vUxs1ZK8p7x2WoQYwMqcu6RjAaSTpFmmdPgss5HuZWWUPEuARjeRmdfhhT3QrXzcJzxEzpni9bnY5rjZAxVV2F",
  "key14": "5WZHKfuDzXxphh5ex97Jx2mA5eDoH9YoD3doAp1CdoszYao2c2ego2jeA35YPoCmG8AsqrMtZkwnHKgAoNcX1Lw8",
  "key15": "25u5rXz2ZyBDB1Jeq7XDBwtVFieFy7AUipgJVtpeD3ESkuwYYetvbXFbpk8X5dw9rHxmKo21SBJj8SkDdhx5AWPL",
  "key16": "5thimRYh2AbQPhwNXQPkgoSEmAZPiohf5QP4xQdoMenqPjDwxw2Fo7GAHVQSuof6TMtcAqnwKSoiNwVdPLWZeasT",
  "key17": "3mRmUXua5oVRHQtsMg1PDiiGUfmVAFRphEtSfpme2Q6hj15SfYPqVfwTjZR2jChFhQcaYyp2KTDSdjxocTew1aVK",
  "key18": "5g5F7T8Tes6eeGoWm7Bi2Tiqj1XSVrXjyc2o7CrfgChfNj4ZP6Cyw8o6Z1sTKRQyMfV7YbdcRr2skpJt1PMqYtPj",
  "key19": "r2eaquWmd14Qg7nEXcppSzxNjsaKLT9iQWEkonausLdbjqw9my5K6Ky3kwVxQmL7GmBjTomM2SiRh1hoYU76WAq",
  "key20": "h5trmCAmbmgq2u6w2UrVxGgQzEeuo6CCp15svLtTqRaruCDaL1CoVzhtFWA6pGJ9RNmyZ9o3AV8ePV5aCPPgVSb",
  "key21": "4u8QjhsM4bzjjukUKs1hQ3SmSD5F6coDjP4EAJVpsUJ8T9Tc1ZqZ3NA7m1szVKcbPyXR4LLCNEjJDf5RGx4q3x36",
  "key22": "KiiWXVCtUmxSDQ5AbfCXDsCiiMZeyN5V1HAmHTrb3mDzUK2bUDLu3tNhdbd5VCFZWo21arbmHtLenvP3q8KfVJk",
  "key23": "35hXL6bJqpynTxuK7koEGNd2WgVb1NF2wFW4sYFRezb2MjGDpanyy7hYgKAJTo9n5dNdXpzhdHcmYXuf14axCKRf",
  "key24": "aW1eqvfrj6ybZaE6GfNnuNskRS42Peb3Ham5kTs4SPpdVWLtCeLswUU4fb91gacAPxzjghd1owM8VkP8yaH29gK",
  "key25": "g123dABrAeU15p49q8an9JK5bGZRWqRAxUsjetDzsmgVDzmdAix2qfTbdXEVdrnWURELTxus8HuSvMdg44FJJbH",
  "key26": "3kLjGSWsbkGFxChG9BY3KSFBAxGSoWLE1RsHDN4Kh9iwLEeZ6GAgjETgBPfB4npHRbPkxG8KUZZFGjYj3LSL4Vf3",
  "key27": "4YTq834anmmYuBGm7w3cdxR2T3CxBTAZcu8QuUnav5yN8TEkfzAmApDtE5RpMKrafZBaJhRdP3H6bh3bqYMBDUVL",
  "key28": "2Djcn8YLyrPf5nqDtgR4ShypycQfkC4aUKedrYzjm6Gk4g9UjqU1bvwtgRSYiYNBt78g1REKaDRPxkLTYbPLmfap",
  "key29": "2zzwNTRVgL8wus1ynFkCwBE9wutbXAJsZzu4DTr3JaSYg7ETrMBThSpJqkrXSDGSxBXaN1q9A9pSRJD5XH1jE4mf",
  "key30": "3fHmNhvzo1EUsjZ36Ace4DfmwE7qefqhK3FwCorgbQaUqkzdLA6gm8yaRBiBmS5djCP71vCEQzr5ZNRq8mJ6sSJP",
  "key31": "3ZCrEqFTHAZShGKzjXiW8DnoM158j3nJHs5ucsMG2pPJE1isUfHMasku437nq5bjRP6gGEBG9P85atQjiG7vnqkg",
  "key32": "44jmdTBfC4A3pGLvhgcjaUg1yHrsMvR8wWJR6Nwer2qfYpR4AmUftiG4hVjYqcpp4KNAzzEKpJuBZwCbZ5YbkzM5",
  "key33": "3ZUZdPdC25No6ruRNiafARx6F9jp6tfdkfpFpNUCojeeRsu92MkUHtW36QxutvXoe2AoL5PgwqFsQoTzeB6GShaA",
  "key34": "63keRpDvL33sYazb94taHKS781xdwBihFrpwQbG2y4FGn13adEaSd1J6ZM52gNRbMWQWygqQWhME4R3vrAdPaYG2",
  "key35": "BsoQyBtU6gCj2yp7EMbd5JP4JAwadgC6wMoLvQxehDWpMALaastkm3LLCe6AujKUPds7S1ZupWynp3wvP48upbG",
  "key36": "2Wo6A57gifxk8PU4q6GV5rmUT5xyExVdmQS8aHA9TQy2XLqYBfRpnHhvfEjuehh4Gn3pacrkgkdGoXphHmrpKRoi",
  "key37": "35sPmfw6MoQAUXBnEBR2tVXjwN95tNUtbZhZcwuUm7NUbfojQppVsX64vJpR5FEdwj53ahAbBfVMTZikdezQt7KV",
  "key38": "3ATJ8Xv11duqPpvs6MubDWsePHgFsKxRwB9w3EydWTp7BAtB6PZGiDDfoex6HKXUaUkznpjPQAuZdWfiN9bCPquz",
  "key39": "kujzJcneWfRzeLgScP92wUGVVRDXHGWZooCEQMYukPN6ZqVaa7p6BXyzYbQYLJ1tvSHsBxxvBMZwxB5jDrrtyV2",
  "key40": "kbdae7EwDJZ3kGPPYQyryGGU73qHN6jdX6tyKpkqQTE3oTGSSsovAEqZtJntHMA9LeAttjojHifsVibJH9ToBFg",
  "key41": "475e8JfbXc1NhSBtUNfsTg9fyfh1quRYoiRV6LRqEAQfUse2iWmfZsRr9TqW5KdvAKgRVhAfJZsykvWpgoRFK6kg",
  "key42": "74iY47qoqo8gAbsQoekNS6rmK14WHkn4RjhdS4AcLEQi6o9xvG2H24MDJhu5PzhHnHLQtUqmHq4oK5sgr3ZnGTG",
  "key43": "4jmHGoPz8EQkeEvNM4kcDyQHRJXqEybDbjDXsDyoVS1RPbMNmTxLHe1gDNqLgk78PemzTdLdJR1aD3JavPm7Xn4z",
  "key44": "2Q1vEQHQdHkmcZTp59m2DEe8xp5uoz7BXMDGzadHExTAnSiuf21gipFSsqWCFcgzoTKH9Fpyp49mMXw5qQhhJxFj",
  "key45": "4Lfb4dCMd7WFTs9mHutb2gPFLvyffhHP6NPKqQYf8SVE9ieG2zthivpu5zNtwGk3zepiPQFwZAKWrp7mFZfjHKX1",
  "key46": "4GhUBCSr5MgCCd5Qgs5vQaWX6bbjWbDmjnvy1Y6jrBW5TpWDJcWYG9S6VzF1FLSevRPJ9nmegcsHKomoqXZGXH7H",
  "key47": "4JtvhJY1eaEdbmG6YiwcZmdu1n6pRyZZwSumiL82B5K7EpdY4mDcVEvsd1SxG9aBjKdQwxXU6LLso4AqygjLx6Xt",
  "key48": "5sQonubQzHXLnzJgPhT9SjKMPH4t7VEymeBjHNqiNLdQK6gsPf4yev8BFDZtYrXMaxVK189f6XxGrp5qknB9p7e5",
  "key49": "591fT7bccmccX2ziUDAnQuAn8Jc4amNgj56rqzSSz4ehM8UgfaQGRn9bZergPMb4ah4H7tmXvnaePwY7JdcYXsFo"
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
