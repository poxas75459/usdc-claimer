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
    "2HhHDUyw8LEa6MsUPL1LkQGcGXbNKBy3vbsBRNsqUiFrdyW9SZniHSaMXRu3htaiaJbfBagR1tNz1W9nFrzLxvdL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uDNe91Rhj56dMyWwBYDwGBjuG3eUmPfHj5wVoWieA4Qi5S3uz1y624gYmF8THQLdfv3wj48UGFM8gTU8aKovQGo",
  "key1": "3jW1Yp2X3bpdvwzRZqoepfYcJ8fceHy3Ejoqmq3rmYTEqoTKgzAobdFCFCm6QAQxGYEBhKXAwyHtEhSF8fWGvAF8",
  "key2": "3KHVCdCfPgcEH4MxMHkYwtS9V8aFeLB39t2MuYsxU1q62XP1Dp7wYjqaW6P5TTU4S4x17mV5Yi83cLsYEZVEHEdD",
  "key3": "2f5kuLMJtC7tvHzkzS9LLB1FxjsLNFfA2MRzT9veFemwtKfARb1vVSnfJZJQWgPeakue35ZHx6HCkiMThHiCgFUG",
  "key4": "4hLnYGwXwVTPdDHPK3APDquezzjZtRvLwchEJyNQ2hJzygsV4J3yRtaa6jmj4DhmSp42YYmv7mrgGxmeHnJQg8w2",
  "key5": "vjfh9TSWsKinzFWWuMuJ46t3sX25soRpExAoqxPEY6KpFa5kP5Tvx8AXJMH85U8vMTPinjV3MRfSycGZLjDexxw",
  "key6": "5gBcwvQ38SijznRwQXKKJar87fjKznELexxm7kX8fi6mAjpQ2stz3GNUNFhx6v4vr54QPkvpfmim3HEyfRRcLYwC",
  "key7": "5hmj36tLdEQx68v4BvFmRkWeyQXnTVs5AbDL2VF7azoGwpPcyPnehrwTpHwsFFCJTGcAD37AX9tSjag8KegtCh7j",
  "key8": "2WmLDLUQXGGZRWXX56eErnv9yv8HWMCzw1pPuG6NxWMuVFzzG5sR5HLnXXp2h2SYpokkEcF8pcpz8b1B5Hj5d2Ys",
  "key9": "5Xu3GojYRttJt1jvSokysBdwsXC9b96naH2G7mLotgrv7BZ58UWvcRAqBDUG7oM23zMqzomGq5VMvbmav9xqEiTS",
  "key10": "28Fvp4fD3gQUzEc84JTFwuH54JecbNGp79AurWotMA6RQxQztfJhyetQia2uaFeXPvfkGKjcV4WiC1CxDbR2TUeH",
  "key11": "2dLTh7LoqiCUQupuDn5eAQiwZ75B3RrtwgiPCiqVaJEN5XxQBD1F7S1nopNR7QPXghxkkVa888zoeqa5P3XcrSKq",
  "key12": "56i6ViZqkAo222gitABjgnNDkdbiBe1tX3psDqpZSVNAUxAqQz8ZdNcPUnSd6VaTuvZcrtBw71tmAvcYWkiHZhuv",
  "key13": "3YEWxzVVWK3rAQiHxGwxURvcQtASsqTZEGtLAYzT4fgEE5mj4MW1HtGLo44C29JcKLNtxnZ9MUcC79d6Emz8hQDF",
  "key14": "2MEfDEauup58bTcSKtZesVSRvnabzQeh6Jsepq3vw3xNQz6NVqn4q4dU4GwxCYF8P42fbQrCYXpoFoUZ5DymqwF8",
  "key15": "W5bRtXPEHc3vea5RGTnCcGqmUjP6BgPjjvweXostNsXWqwkGD8oCpNSa7sMCEUc6bkEDchNFFnVAytAQ2gDcvnY",
  "key16": "4vnt3a4a5ag2fLweARH9CMtuwXphBRVEbKRNK6LzTsB6Ya5Dx8Mk6uTGBLHXhJCuzmZrNbDiYszFdWFSE1ku3kbN",
  "key17": "P6pFMe6UKr79TqWvwqeiLR2ZKjTRmFjPQhhWTN5sFUoKH7tdVYBxP4R9nzeXLam3SrA6AhMtbW82BuU3cb4jqnq",
  "key18": "QNdoiryGXhH7zXyYnj12FvNzKUCSuzjUfRkFzhuDZEuxsHpGBW5ExzaqAyL7X3BfThuxHfZzs8JWg3Y7YP6KDry",
  "key19": "4NgVyuF2yCyve2465GKv1TRitb7it4T9CtkTHQnU7tjTS7JARitqYrhGMa8h8PQgpsPUBozCPubBdaCrmseeexnQ",
  "key20": "5T3noUQtozMuY9KxN2udeq3zsLfYwH9ZkucV1SFhyovrPtCzhiVDE4KPEgdyDLxkLgRYTvwixUN2YZkiZb3gm1ob",
  "key21": "yUM4z2CDNkhGY7ofFaKfoLGnF47fkJRSF23MKSwRmz5xRERyo6yMet8z8Q7WLFB4FjpHioNS7nq6otNQKVRHYGe",
  "key22": "2vSHVJQ8cUxUs24ZhS7cBpEcZSebqqqkC3A9wx9NRJ9m776v2n76KKjfXeqcMTtdXRyj3dZza2iaAZGQAZFKSoGM",
  "key23": "27vuajKq1LmsMc99zQLzLD2Uf7ZwE6GhpNnJ3SXtjwN4LvueujhbwqiofP6PU2Si1kVVpiJCJaMaqNdCQ1PWDCzJ",
  "key24": "2YwZ2ZiG9DNFTPzBX5oHqBod287Cn46bme8oT7ge4JmxMBSrJFH9muWZGtytqkTKcwqm6DZzJh7mKu6RfWTzoAPn",
  "key25": "4pPk4ps5tLfs5jWDEKbjounP7nvHJEBM83eKw1zashQh8VqKxzGmpupiJRi2tmbKWBnpgfB5adaZT2K23NWw9uBy",
  "key26": "4WDwn8ALTyikWAxJwsRAURdNPDEmEpmKY9FVzuRf9VASTAi5Grjs63K73Wb2SYauquz7QvHJbGv5MUoV4Z2fdVLf",
  "key27": "3uxX2QA56Xv8LJTFRYkCqbiTPdEcXrKiHyoLtY7TprBLYkaRoH7HNwLTZFiKLawJVegjd4XEyHuqzktFtZ4EE2pi",
  "key28": "2SxdS1SNHENJTpvtrUD2GCvE964kKknhxCiQUxiUVsschqSDAnGqE5bU6wGoiU9iee2fm2uB9BA5F9AS2GBQrDvW",
  "key29": "2V5u7nR2ZjjKP4W6GDcHe49puHfM3MgeQEWEnEU8ZjpyAcmV2w6U63tMRNTAktWb7XTwyd5Gr6pzxocvti4SWX28",
  "key30": "4mjLRUYS873QLmS766wZ7pRGtm8bxfET9j99ztyoma2jAceEyGptzkDKGhuxdkURGwVXGEjbuhmBL25EF4HRDzCZ",
  "key31": "3ubWmFDVqbys3P5Bft5PFX2Sc1VqKNH7EdQ697Jiqh5uGoSKPZhqpYnWd7da4roK29U97GVaPqBPQLyTZPAixMLH",
  "key32": "ss2bWhHapFH8u6KwtLxTNFYTJ7zyFymsSM6RiqKgdEZT3sFEo8cVouXesEPhAthSkwrjTr6w9RRiU8QPcRThJEs",
  "key33": "42zH7AtFtwc961WJ3Y84fhUXApugKCz2fnLsgrtaZfUzGcGCw6dgDvrE3f74kh21QNsh7ED9HJhPTmXh7PN1xQw4",
  "key34": "3qtFViGvPTH7eAZGomcUreVWF5LGYbrKPpQWSg49fsUfev33mxw4iwhUxVv5pB1KD58Voxi9DuP82yymSaHqyqWj",
  "key35": "4MQoj9h4Yj6Yjwq37W7jCXB4LDQScwARzAmM1K5ZhJriT4rdwR6F5hqznd5WFmPFez7GMJsHww328rrnGM3vofBJ",
  "key36": "3JFa9nbXC6TvBPKY7acJFZrQghmfQ1nAyji1DUGd621Hukh3jKsQdmbEahKV89XQJCTeEbNqXFoH1Zp669HEg94p",
  "key37": "2yhitdCASdkKFcJMurzcitd9vsdt8Du12tGNnS3eFkeZTCkxuv38EpHtj1JmNc8jSwDdSL3WLTUgbyMN1ucsFVLY",
  "key38": "5CzEVAwgw2qCNs7yLcPrXiEqwutACdtYqkA8jeZoZdZAzqdBv6FVfefmw6rUr6KUFJ45yNhM6LohjpmcAM9DLFYZ",
  "key39": "3sKmpQ7Swp5gFUDo1Ubp1ei81YFHLT1afgPNtRCGoKyckCYJti14Q1Evgdrzdo1uV333RG1EBeuW4kNKLLCK4bBG",
  "key40": "5QVvvaZvi49DyeS3HFfqrNisuPDgR4xTEM7sVDSNLqThA2WqTwrLFW6yHyCAB8CBDRH35PACxHEJRrix5zmCG5ry",
  "key41": "56h12rYyUh6EkhXooogYP4U7A8QcDzKwZNqrVJVwCz4RtTZDAYsyFsnR4F68uUMXjbZSmfrXvHR2nb6DKZmBAxAi",
  "key42": "4fwsSmUo1y4VNqHjURyy43RTnNE427u4y1kuuP393GQ7ivouowrJN47u575m86nMrTR9YKEsywhArm6u898W6TLm",
  "key43": "3ohuq6T4itaxbT4ZBh7JdXjDuxxS1yLTpa6WBsU5mLFW28hXc1CQNjKYrJuGevHZRsBpJgfipNUFQvLpV9P7jEF8",
  "key44": "41KzUf6TSv7yThDF3JEsHuHdn4HmrsqGkHqThKN8q5cA3Kp5VLG7b82RK2Ek59pAqDAwVKuKEXsn9SzB3LGhe2pV",
  "key45": "2mFHahDULGk4JFs8NzJCtdJais6XiBsmZSRy5rQqshpdwzMzdBpFHuNXb9bQcTU6kJYKmNbJzqrDnnd2Vz2chaUU"
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
