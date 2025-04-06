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
    "dUht2YxzxTLTXZFGvkeKoSVrvjMJx2E6FoGDmMK17H9eHFNsV7Bx1cfpsKt7AAeYBzMbHtPCAZuMsDcnSFWJVDT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "n77mPU5gc7zXqxdkJF98wvGskQw9vSgcgDp4U74iNEtUBMfJudmPX4yiUdZZxtgTb3PSSaLM1JS1a4qVqn2J6u8",
  "key1": "gW6ghDQfa6KJuLzp8zo5DmaodLxt3H5j1mskp5k2r4UHvRgRQoTYmNNFTLQbVuR9dDX8z4mGwwNAR2UU56CWDuw",
  "key2": "4mXD4q9x41FGRk1Z7Px22ncpPpwTne5WpxzDwD1gitCUrHCmN5bBNYyAGyjkFJ8aHtFuhyAgYGUYtWeYipymdwgB",
  "key3": "5TrGbe9Uo3jdYv82jL2wSPxZbQXEJpBnPRtwAAjjFhTwxX6FMiKSFMyAgmeWuPxJr6AWLRVGYvAdCzP3sBNi8aSe",
  "key4": "1yqE6PHdQAX5DmxzX6HQX4cCXPoKP8sqaXyxfvF3XdoTkGnzfuuGqBUu9RTYcvj8gEHWXozTXh8doNUziFdEXd6",
  "key5": "4AhhjKvJsGpi9qTV3WVjWchBgLHBYWbneVdxKir9qD4t5HPW37TCLCJB1okQHhXWY9PrY2Ubn3N5m45AkxZyfL5Q",
  "key6": "2zumjRQ7g45mPcnVzo64bTRNqM1YJ4ptgUQDmac4Xde58G6a2xXkbc3xrFqXiGmykB4eEfxxH6FTxdzqmRBKj7wA",
  "key7": "44zs2i6nzc4j56KtAWZACLGTcRGxxwdZkkkmBiwaf6vqJaRzi8bQKYSmyzZyEnejEtrXpzb5278Gakao8VvhKc6d",
  "key8": "5jjGNcvZv8vEfBwqFUsfZkuwJYmcTQ9ir3scsLojbfUDAMoTPJcjDGnuh4Y98HXK7nZMYaMArvRgrXjSLxPqLuer",
  "key9": "48JfdGAkUHDvcXdPRrPSGpeEGZj3r1taqGfEwbSrBR9eYK95hvvqsdHcsFX74J1qV8iejEqjVENReurtenYqdDg1",
  "key10": "31mvRhtPdq1VbFFPd6wTK1E7fFrcwxq5P1449Bvggq65qU4H36snH9JEibMUvH1NpxUBfS9e72k6W7h7XmnCehQP",
  "key11": "i7GyUiE7Xg4Tm1gvmPC76YRDwipBcXh54aFinwifCAfSsH538PJAAvVrJLWZcfc164Z3d6gcybfkTVjFJQEfeN6",
  "key12": "3Akej631cT7gHaYpDLauhD2rRLse8VcGJZucnk4nCaXuKkAssTaRiomthxQ9hBz14sRb815DJXiLtyditWj4qP9z",
  "key13": "Kd2wDuWrXPfth1dgeqq4s2D7bY4qPTYxHvDZitmBEx4iVxFehjcBAJijh6e8L8E5X5NMc27TsrHPY8UMddavP6a",
  "key14": "2kGt9JMQkLZYhcj9gsFxrqaBXmA1mi3tTkMg8JjoWBJatey2q7yBsf85hv9CmbrUTvu2XjouPpMoQphChszmNcj2",
  "key15": "4oPC1JdXetydeyVJm4cafaQ4NVpEftHvXJQsDVqKKRyrfqYqfTaNe7f5TRQxz64N8SEXB6zq335NZeeeybCuqmNE",
  "key16": "31TWaioJoQeMh53ekxaiUTNW4mJPLXKG1BL9Md1JEXZZn6zgoZKpcLFwAQrwPA1TFS9sa6pAXYtdtYVfTKC2H86d",
  "key17": "4VsZi85r41MEoV4ox7vT3f5hL6wD6WmAaiZQxey1G3M1pxvhwVPriCbJY2czLQ6qKpLqFaN2NF6h7tmKfF2dNhP9",
  "key18": "2WdxsfgxN4LcBGAZiiwXAzcqRseMMgxJkJM7KrnGN5wRdNipgtqSct5p4pQcU4TtmC1zwGxany5kqBmeDaySWQoC",
  "key19": "6743H7LcSYLC8jGNEhJbWGaCDmZnZqxYCwqhWobXq14BNZxBPwQbsK8p3njjxiNuxKwU36SokdyfCQgDXi32fqUn",
  "key20": "HmewY69xxLPzNft46mJN8mECVSGUJLMGyMc6JkABVQDtc3xHMaFBzqAPYCZYdHtPrs24gA1yZz1HcHCV4DfautE",
  "key21": "3tghnriC5uGY2T9d8eZpzhaoLi9DBmSkbQzPKwVn1KAHCVyDx8u3rCF2cB8wZED4aX6JsXLK1br2F565u6XmjHS3",
  "key22": "kNbDkx4PztyimNmHqVo6FSnco4qwgaXo57JqXke8AmynBCczbaQn4ZusuJs7U9VWtvoUrzQvK4yuzoq9JyVEABp",
  "key23": "5kLnLFoMhCsA42haBnjFTXLmSvW5zM8kckyZEy3PRAJfr3T8yeBwKeajdgzFRAFYyF2dpqKVyywVoYXyay5bATQ4",
  "key24": "2y1ibsE6ckBZWYhdNNyCZMrQZZBUJmsRcX3KJr4VFfWWVYB3Nzy5AE99mtrpH865zibpeXBq64rsZDfmmXYJ9hsU",
  "key25": "48kSrsvX34FKc4U4VqPftoe5pPuypsM85yjLG4PKVTsEBbj1TKq5fTyp9LHpjosbtznSxxmVD6b2o9HRhxNiRBeB",
  "key26": "64wyLpKUL4bj7JoDLoJqi8czzYq1tCuqC3YJ4xrvDSmTj4D3pnuGQpKnY7tTzWvavUYfDSDvVqPLmERLTdDn4xR",
  "key27": "XuYrjy7b5P1BCszTbnAdTcvAnJQQ5VdJWwerXFkKgvzHvGUs21HLzU9c1SCgDKDHqj9hxq7sEePdSSXEj1N8Gmd",
  "key28": "VQLp63wXEo8keiGMqerHqpuAeKRp7UAAgm5Xj7ztfJ2XLS8aiDpmBWjmphdSJxhVmKe5TQt3NGeCLxhaaN3GH8q",
  "key29": "5Hzxntj6kKmYWMWBmZBam75Bbc6J89DVao9RopHyKr2dqVHMF1FcsFWrL1MhRgfHLK3RFUhxqUff2FzNuqFHA28Z",
  "key30": "4ZnGmLxW5EthvEZfYHYagdAJHr7jYBXHqtrP5eNcgHxqtXZMwgU1dZbt6MPbEx5iJBzRpv6KvCkKiH5wS1b3YwAo",
  "key31": "3m3okUP97o18RcjYLsH5NJm6ARCLDQAR8uVDa7PsurX3rHkPXFXPaQ3oHWtGYjvoShNhoo4BjNjeUyrqsHYjYGS2",
  "key32": "3XSx9JPyHQKDteog4t4tNKsMnjkDfggWZdsG4JM9V7h8C1pygzfA5Mz9xFatKPdM9FUp8rPvLs5aNFy7fYfmHDfo",
  "key33": "1tCjpzewuZRob2gKTJCAX7CoUWSqgHRpKodM4NUQLXBUBsb3tXhvDC7HADNQqoBYw76QqBVeypHNnHF1mXQ4UHt",
  "key34": "4iysGkAWm5VBs8WdvFBwbN2QPrm1yEYrhAViJMR1E8RmTYE963Eys91dUsPaUpyfpFYPc8zq2j3zRxNfwUmNTvao",
  "key35": "4737cM76JPpv6JPhf52cpiTFiAbfFmjn25mwjtsc4gtR2X94Rq7kx8iVSughBEgDabpMjKRVRKFvrgHDhTg6gjyn",
  "key36": "4Hm4PB3CB9HvqpHhKh3D3E6r3cKr94Z12SNAemwJf5XU9hhbJoDXuZnQQqQMX1ohrdN1y7Kyk1KCRHKkyx3AjLzB",
  "key37": "5RGVQ95b4BsJE57s54fbb8e6JRCPrZoHdNTtRRJJfdFFQXH5Uavm3PMj87B8wWChaRwU7eCSsNQ5ngqTfsqUhUL9",
  "key38": "Q9EvLcHGp5U2hurngqMBGt1vSiprk7Fn6quyQtJKqYyeyHzrCSiDbhGpXvG5Tc3SrJUr5ZTivDnyFKVXWoGmzs5",
  "key39": "yJde4rsbJ6Yq6yV6dXtBaEEWbpJcwPCbnUbhLmRQyyTN6bVPzvQsVZMKy2Fi5ET69F4bCfAQktifvVYbXWeasWV",
  "key40": "WPCmB5E2DdZWrKi1zyGK2zDKfdrVozoR9Jwat31FoqsM8Ge5F147awvV2Lr3gMw8asxx95k8UFdYzDSUfeEHYMF",
  "key41": "asvG98Ai3nq8bQxTG4Ru9rWUhbAKZrKvxKQ1oZhpNMiJ812xaFabQCWbuZQrVpAmKuAoR8xVz6EMzUuE92fqnrJ",
  "key42": "JwrKfT27bYMENP74FpMTJQ5hasCW62SHhU381XPE5PHCpbGHrd2D7WRHzZmVVDK5J1G3HKBoEKwP4NWmQaXhJxA",
  "key43": "oagEL1EA5mBW9nqzvKXFWQrGWKg1APKZbt5eAUsfKY89bpBwjUNwxLHXKthMrTj6Yq7YFaxyiXHL1Z2zAmpqmmN",
  "key44": "29LJQWeKj7KcNxM65zQ55UDXXJySVKGtdZW6yZ6yLDSvYkcX6w5SmvYFykurY8DetWmFSubfD2on9hDJrnqi1Tu3",
  "key45": "YWGy4axXNnoDGBVZkBVkbtyW493BhHVpTd44PXs35B4F6AUyRz8DPmXgX4bMouZSWCXk6GJUjFyKKgKogh3R5oq",
  "key46": "4mr8UCnMk3qSMTVkTLEuyT8XE8TEDKJcrTzdiu9oz9bjCj3VU3MtWT4nDrAJPaWPbBBWmSJwnamF1Cdh43CpSjR6",
  "key47": "2rFcxPKnkKbjzXCZS1yParN6CouyiJ1xJsvn1AZ3tAZQiycBBVbjunUvQtD7WFPZAoKp1Ve5icsMtiu23yGenJDa",
  "key48": "4KecV6JMA9ahpqmn7wpeJZbAvBCHzj8dz9NqcAz9nRLcwZfwT4rwDfpjfta6rNArE5JJ4v2bEChZAdn94EuuojM9",
  "key49": "4WmEZoFcV8i3mJXpTTMiEE3th7VAse8SsFKTewXoQBA7m3XE2Ug8T3pqcp5gghaU2VQR9pT7pBcCfv5DLPo44ekd"
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
