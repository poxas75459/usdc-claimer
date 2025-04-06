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
    "2DbEHki9qJLoExpSfWkSuHgv1UA7evVLWGGtM1ysQ7o5hwXX4ydKeFR32nRtMpqJitSDWyBLFkvhnACndvwKmchD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NL3f7vVSZ1NwHk5u3PVeX7bVEKfMJTH2BcYYQ3KXBvANh3VzQAnpNoJSiU5jcDeM7vRsjWDDuu81cQuip7XpMRo",
  "key1": "4Q7rUHLVNnGUchwnK8N6hLrkTtzRzXEXS3tR9bUXtZyUVsdRgN2dFTXzHpzzkBP2m4Fk4U2NjwP7gWub2kGhVFEV",
  "key2": "7ytycuRdgSYfE1QpyZW63oB4aSjqrp6b1h9KrmSiKmn6cNDfh6UGbqmvEFtya4j4EhoV3LggA7fp8xkWYw3LD2f",
  "key3": "2hxk4QLv7QSFbhRELiXRsTpwfstsymTRW3ZkHoZfnhuVwKW64zTvkhwj78zgHfzjaSWNkAwS26CyDfFHdgHKsipL",
  "key4": "4LXvnwSXzTM7u3G3nxRvmpzZ9RzGX8vbnESUM25vZq6mDiTGkWDTJNsRZa3LLYCrv9QD8gKsEDQLuB5SPF6TVYLE",
  "key5": "3pgjSrxvafMmxg72NPk8iqLk9BgG9xgQzs8bSbad6fCNhTvUnTUtWDeo4mEAHeYRXqPh7KCWCXPzo51QNKgWcLNS",
  "key6": "4UVaST35YmNwgbYRKmuELsViPsj7uUBF9V3b5ZvjscxcCgFoGQpSTH6USVsZ92vNurCY64e9UtL1MdHYa3ynzkm8",
  "key7": "5vFaEjkeurCS71MTBSWuSbguBfLuxkkQJ1SEoQTfTWgxggyCYKr1bHFFb6xWqz2sX6eTABhXbiuNkUzqAxTmjMcP",
  "key8": "2EqNDvs7yEJhQyBkJRFsVxALZAj9PKA5BZQWbVuVB5CvQEdJLcxjxjTNng1k7ULZ9JDwRwQcg7kksDmgYmycJT1Z",
  "key9": "4D9Qi725PHYV5pPs6HUo8nbPFYi2FYLmvbSrPA992GiDyfPE7KY1aKo9Ki4zBRAk2C19b5UrGnmjhj6gdVLkjk18",
  "key10": "5fJfmcpCVWxVgy1NciVQkhVPnqSb36fr9DMfRbeTisHWt5hsiPEfFwaH2Wv5PHFCUWsJtNGarPHpzUXeZwmVWSjc",
  "key11": "4p9FKAVvPMNRJYU46ZiAG6kqpJ8B2RraYPvku8MEhQEJVxQERiYYAHZmYKmZMnrCbv3pyK5uPUYoCNSJfRhisFeg",
  "key12": "5f6NEi1zRPQKwav5EJrFxA4V7v6GwfzUy5HnvAi8dDznMXuyQmX7pMetque5tjBJQ5srekeMtRwhNCiLD8tK1Wqp",
  "key13": "66tyFfz5LVD5fnXGtCS7bJiLb9bxUAN4Du218RQcj2kUjbtteC87N27RaR4MUezbt9cBtxgtoRq3ZwN4xZMT17y8",
  "key14": "5JedooENDTUrhh6Y54bk7G9TuMeBuxb945TV2K9qs2LJLjJmNHd2gzCyknx1BqpRkNTyNNDLtoE1S5CMYvPcHAKA",
  "key15": "5SYYopq6EcHajEErkB7GJVytNYHT1Hibkptne4KJbqVEbvdWrMvmz7QT66XB71sNzQxBqJ5f5HUQj9voNKwNuAdY",
  "key16": "3fZA5YB4t2j9sZA1wh4fcAKi9nXJukSykzwxY4nx8w1W3w2pStg3a73MCkUAu7DcRRHiQK4zJTB6kK7K5L1YgfxE",
  "key17": "2MThiHgubv1UtVnopLHADXf2mSuoTmyKT64iqfxtZEFRpvwSYRD9Kwc62VDSHX8ktv1k6MZWKjyAVmT7XF6vppC",
  "key18": "ZuxREs9vqaNDJjUeUCCkaRo7qs1jE1tv6ac3NFoqJEw2HgphUcC9eK2cm5Zs8cXYgT615Xdb22bHcyisNXJfjHJ",
  "key19": "3QhJF9Qot9nM8QG4juMXiHHPr42FGPYMqjx333NwN7z8HuRrguUk3dJRhqSwq7cq7MyaGshoDd6H5nkBnKZmyG28",
  "key20": "2ir8VirCd1rdyaLXVpMjaoHPUEaMM93pgUvRRVpxQvyBkBSVtzBoov5jEfEaxqYAqfUnmB6kVDfmues4EAuJ4eRb",
  "key21": "3mYBJSuyrZsDZaNTbL5GuNdhu6ctx38Bz5Cj1SCXGKyJbgAuj6YgcSpVi69E5pjKoZpkTXfNLMsra9iFw5VSkm74",
  "key22": "25mjkBrE64NQZEre9NdeymMWFi6rFa2GJzCG5s7JhnPReJbGKq6Fm9vLufSTb9ghzXXLeuCGmUW8RZKvtFtdYbto",
  "key23": "n2kRAVazXEPTKESNd1NVTCXosyjjz2ZAjqpzRMVpxN7LzCY8jLTTzuu4hpP525rADkrSLh283Lkiv7bLJfAQCsf",
  "key24": "3N6Khn2gx54q71QAfsTVmFoEraenuKHhYPfiWRM16jDSfJe8JJmiRcaokmEp5ZpzRmNVG7RoU7FcC8FD3LqMjwfS",
  "key25": "BBMjrW1CB4qK5KPbVGFjbv9i1UpbGDRaT3PyYA3GGypj6LGLVE6T6yr2WknBTDb1PnsLHp8sHioHZAeE7w1cMLh",
  "key26": "3GHMLbCSiM6oqSk5PqH5PLT2rYyxwuppPcrNQDmVUjfcYnRP1aotpCTMPqcSMYHsFstRLomp3YafHn1E9pPB9Hzu",
  "key27": "gRgt3GMXWe3txjPW5xGoHPcsbeTQjuAozcdfXojeMbpvV8dHbfRoxzYKvb34CUxTaAMsav3wuDQKYiyaQ1URz8Y",
  "key28": "34a1S22L8EiXx7Q724ozcJyj1A8VK4FFmBhszQ8JpuukRkFtLKpsAooJ1695NHqcjB9hfVVy5jd6dWnWt8bwcTtp",
  "key29": "643sNjaWGC9Nq7TLRBio6fiddve4C493DXZf1XBUbpp4RQo57K9Pw2h3RH1Kj4Eyf3X7kXSn6TiZjcZrSPEiEPiD",
  "key30": "25PxoJwc4FjXwAmJNuwXHmwZiDUvse21WigF33Uv51hi4DFDMmeGuCLxfUGF8caj53MLpy77wmcMZ8ktb73maRBj",
  "key31": "1XfpcbLxuoViof6qkeQb1BioEfvAZTZVRX2nbpmYqe537PYW4zxJmPitcM1vqMhJ9AHqne34R6CXRXsMrdHJCjp",
  "key32": "uUf6CqU8ZbvmBVeUwdHupK6GhY5ymuPZHGV3dV2u7gQqtfxSjYX6mKZ49MAjUNLu8cKdH9preu4SB4jmsLV4nUm",
  "key33": "mtc9obGyR8e6TPWusNwCStjnPAvJHDqYc3r8vDbWCvcxXuvPjKRYEvFdFboYiJynuH7EYPxHmR8mcq3FsaqkfrG",
  "key34": "3cD7pFnHNLDfCm3opm3ggpDsJvKW1cDiCk2TzX82QYfZvp3bk5QP6aDSZ7rS5p9yHZhiY8tMSdBDJYP1ArcKoAeJ",
  "key35": "5L59nYammUfjocem3dDAq6hvjaovuAzbT3ZG87mFDV9zGY7nwPvnfiTqcga8YXFzye232sGatBtCoqKiPNiAJriK",
  "key36": "5jLnXdfHzqdF4x3ZVzfbRrpVyqavTQv4WDXFxnBwvuT7H6vYhVpcEq42kYjmrmzSsH4BaZfnrwjryCQQcNKjd3Kt",
  "key37": "5UXR3ESA8ojnCKk1dxPRKt7pjrhCN7kBfXzmsBkTcrsRX97AoYAHGkafKqMLuU1eGXgoV59J5bTxX28kJcLJQ4Sc",
  "key38": "5rZmzcaMxJsgtsYppkwRBG1zxLUvePJiauto2nDcQZhVPJJbsFfEbVBe97Rovi3SNw2TuLL57gRp5JG2Z6YNVj5X",
  "key39": "65cmNB7HyEHpvWyfhjWVcZXM8iDKxW219iJEAjEu5rAc9aeCSVbPihPmR2syESuDLXsagtFGCDhpQ8KjdsZJyXPk",
  "key40": "geFDCRMsRkdNmcqm1tqVeMRu7rSBiLEkxDjWHmpBLUqgHZuVc3fuWvm6UuHLwFnRq5sAp9T5uYzya8BMjY75V8S",
  "key41": "5JaQFWn11M9Q7TaHv8vaN1wY4D98e9vnjK2EsrLqijvPHiQq7LDa6jAjH593XuQ8ssKL9ExXkyZ2kD6UK5Vi9ZAR",
  "key42": "4XqYzP9oxG9RGaKz9snibfbP3jMCgBiLzwhRJYrXRPj8tyCjYPpuP73miqig4raXSEXdopUmPFFJ9264gS2H3RUZ",
  "key43": "4Zi5AsMfsE4Y9HoCdhoJauXpbw75hg6VNJUBYpwufnHURzJPwfnME24G8yixS6tcQKtV8jgUeY8c4HBmxcAuwqAa",
  "key44": "3GQoqaVgbvFysMhAzrpFdrTpcjDYnXShAFphy3TqVonz1PXeRKpzKD1s94M9XP1ERSbRvWC4FrgCcVAVot3Qo79s",
  "key45": "4T1stxsPJxy75gKPEVRrXz7mHBVNLkpRE6XknEPk6SMtCiTZAN1tdEJ6wME145x63bmb4dsJYAYX6U3agU96BWJm",
  "key46": "4LNB3dfSYdm6CVLPyjZpFSYxjmicQBQ1AdeHpvxDPS6Ne6XgXQnH834j5LELb6j9sWPr8fWL97QUSAZXEpBtojRj",
  "key47": "4u55QRR29q5XbAmGzhEePJB2Lys5JZSKnCUu2Ykodpx7rzGjLiTpVhMj8d8mFYchgm7pgVm2ngy8JpH1gw5NPUAG",
  "key48": "2hbW6iwdkfBc4ZA6bYtyKZk95wUYMMeCexJpnarNc7rAUa113QwKueS4QBeVB1JsxJowCrz7eSYNx8Qhjr2pwjkc",
  "key49": "6KN8W1N2QC5LdvhvH7SihxW2ZMmDYyaKpTMgZs3CN5sJ7FS4Updkkm5ct8cWCBHTxweXEiiCMjS5jAt89n9DkDe"
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
