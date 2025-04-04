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
    "4CmQJwuUL63uJtM2jrUBXD4qL3LqkEKkhoG4ULK9uiVhnsAQJ85KK4rLbJa83Pi8vARnAkKgTGJV7rnbeg56iJgZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1275Q8DgB4BUfk48ZE1B97PP5617HCr4yJ1Pmp1jhPPeNhE48HtzqYP5NZpFJSpnY7MdQBrhVm3AmT8WfJN49n8W",
  "key1": "45JmR1mTjtMoDcS6RVfSpqSV5q69kEHJN4x24Ne8Sk5NEfRjoeJmKrX11Y6hGntobKmgaiau66g8neLjmcTewSEV",
  "key2": "5Y3s8x1mTcj5smiiV6asdmj1AAPBQVFB3pW9r5ZBq95GMb5e7d5vwBEj7GHKB6xMuiyxkf8eisbaZeg6UhoEc4WK",
  "key3": "5Z3iWS2TtpC3XSjPxu9qmUxKtPsEmxBRJxZMJS98sMNHRUEFfxHG8pbNw9pkkF92o6ZEXox9iHzTmr5JX5kjb6fK",
  "key4": "3VJRDWJsmejcuoFfWU66M6Dc2mq5STCAoPCzu7TiGLp4ZC5qtj8e35CAcd3adpHArDXgeV3YDBnGnrWmXjyfyBP3",
  "key5": "nYD2KWxBSPLPKngpzMshHDwAcCCBx7GYLKJ1WRM2dB4LXn5ryjtzSTcXv4XaBneZz5ZGmkpmLPo9wRfZxe4pfAw",
  "key6": "tdyBc5jhva9BHngMw685cMYevARntt51y4ECUXuqTrovATB5igCZf3eC2K7mS7nrH5pofmRfynNfd9RrwPNoThQ",
  "key7": "43sDwEoEAfvkbVxej9EnMUtoKS9bP7UbEFa5HJa6dX7gRJnhWVpZFqdAYbCAMJa8DPnaWhYUN2YuUWszW11x5JGr",
  "key8": "5ZUydfBjGZ71SkjzKzSij7NNfY3CDE35AYpV77axkrTRde7RsAFhjHJsSyk5kTJH94duCZagUexm9m35LtCiNjps",
  "key9": "3pqkBYfvgJBroiDogRnm7dhZrTzVjKS32N7TR2XnZFSAzHZ6GaxaHpaXxBdEXadVQtiSXUMn4tvmmLzmN82EovFM",
  "key10": "3LexvqpNR9BJyWkhpxoEzzioUna4cRzw291DjbGJxvCcqhu79Fv38KHNsxCVEovMnFHQAurojRogQqpqx1VKYi7A",
  "key11": "2TzYvFx1UonCoUNBzom8mag6Pi777H6zZfXmfn6qCuwTAYMizKUgJj6L2LHKmWbLDjgvqgg9UjEniGz4Rff1MFKn",
  "key12": "4hRiMFHMwuEK89BvqAr8HtSxttVqZNK7G42Pdk1bbajrzhxoF4BuGhJnb2puJs1TesVm39VbYNmrxFgNHDsbJBUg",
  "key13": "4hBjf4tJG1gcYR1aJDRw7dTVc4ePrQAZ6Sawdy5GsyTUCHpYWcnZizNVNfSVjCZqvC8EsJZ7MreG3a9wq3Px64io",
  "key14": "45dir2ETKZpytifzhuTyBNbEPdFJ857YRatsjGTMzfp33crKeiVZpYUQKTDsE517oasSzhdYgGNegoSaUE4SgYze",
  "key15": "55kTqaf25iERcuPv3NdBbBaFLPScmaRvcrPjHQLWhaaFLsj5MXrvaiAZiyzmtt46aw7SQpbVPePjqNCMd5jxvYQ5",
  "key16": "4Uf7x5CJup1vFF9jScohyYsmBotK8K3RprGevED7s5dANgMqAGfCe9ME9N71qdEW5P3gkacgo3wUU8QSsi8wCUck",
  "key17": "g1e4dnHuL5pUJfugLdHSK9x7B2rq6WexthP3o4wnU8kyXxYMgcf9Ew831p7DsQnVkWKcgvxxSpsFdYjbd2dkPzy",
  "key18": "5TZiNa6vN7UfE9zr1PQK2fuwy6kAZTkyExXqo3GppuohrzYtJxyxRSwbRzzwZ1hHqMwn1mkiT8RRCsG7au6mo6dB",
  "key19": "28ZZ1BThjq8hgQ5YNfrmF9UkwfyU97PCS1Q7cni3ydm3sginhf5LUbZiT7Lwfemio98dfdcLZDGvB19hNKGJFbHF",
  "key20": "2nhRoFGChTRB5WuLGpmT4wh5GVhjfuX6khX2AQtedorHj8ezZz9TPdidmFSVwcgE9zZne2gvYbqqrHD2evCowsX7",
  "key21": "5NxgFaf6A2Uij6Lzic5neLhEUd9wMUeiPQwYh7PBC155XcBvQoow51VoRPeNiBWJAeapxuiqbmG3pe9K3smxyEHq",
  "key22": "2RaKFg5XTgG4WihyjBeYrMhC9x9ub3UvWCujz8HKBoNSYZX2NnYDMhvWTSWoQUjmxksH7dL7dJhp9PsFYKuin7bo",
  "key23": "2XhKt3onNHfYMopsPM3r6w4mJRetiUmfGxHxdv9ej6MnC7jVbHMwissKC7GEnxt63u5h12Uozzo9ZRvdeLZVX3Ke",
  "key24": "5Vq69zAWgZSSZDzE5Dck8VTRHbCtJr2hEwwBDThks9g8zwD7x8si1dKs3Q7dGybXYFGZjXkQYxvyWbmzwGFihu8j",
  "key25": "4SyihcLGTeDjKULa5Zos5TfyxNPmAskG77pVEjMJN1a9QWEocBzPcXx3ak41a7hf4SfgvKXqQrMwozMfoDyLnbAw",
  "key26": "fHtGkNu7TywBtDwHfGTmmWttqdbBgh657Jzzth7okFcen44dy9TufEmczJmiLkWgnF6pEVpiJKfaRqjgYT9XDqy",
  "key27": "w8EUQeHQB45pExpTswgGHHQqevL7Y9cvPtXW2XwDrtPeM7UYXC5vHcY24x7Rt1yWDwxiQuoS3CJCk6JLe2js3pg",
  "key28": "vBnbVcnkgssRF3akpH99J8ucoWFtctuZBGmV2AvhfFK4sx95UM3MKN93K1DS7ywjp6ZLt1SBdKGR6u5sbZ4RGgw",
  "key29": "4c2eBfnJEQn8TLZiyiNaZRWBBTviPnXfmqgke9nEWWbV77fW1p92ePah36TjRSfmhnuiQkKz4qpZVY6iKANRaihC",
  "key30": "7upak78ejZs8kGSQ79viG27K2WjLb5smWanUH9UAbf8Y9z4GwyYme5KHAhUXURyEgK9pmswwD9Qiuc5aQVg1CiR",
  "key31": "63oNCDq57cfLaFJhkCXUrMpA4D9ofz1zGLVWy5dvDYBsXVsMpxpLcVeb2tCA5VQW6zoU1Tkw86AffpRDmehY2Yqt",
  "key32": "4booZsSpZzthfWcUCHtJs4C7wVoBw96LBMoz5DS6a8WmTfQDBUMp5fnX12f6ibQKQGJAhQo5HL9pMqH9hd6XWP6i",
  "key33": "Pibfvt5pEvyU4L1Jy1fEJduvEesvKUfV5dQy6ZpSMvUo7qHvJW7xy7hPpi87pSkwydWFoDYAwnGPEn8TPAoR3tC",
  "key34": "58py5eQyV6VxpFggZPPTrPX1nb3zLzAeVLVbmAoXm4wRfLaq9g4QAoa7KMCXSfwanpkLqsfwAXyjWwg9LEvn86Ct",
  "key35": "3rcXPVVXih3WKQQ6VFiyYpPmp9PgtFhgwo92A1jhACZpAwriW4nYaFoaJtDLjkijjCAMpPxF3ZmJbwcXbrcp4Xqd",
  "key36": "22WMs1E8xD6CHYoGyzGCyPu1bbV2wsDmhyVD5f7L8VHNiA2UBbAuAvNR44rxbTD21nJQnUMFRVNKcUM7VUHkYtj5",
  "key37": "33VCVA9NLrVsTze8REyMYAWmXqNJitbfwjjXjFD96p344P3HSemaCtNPDoRMoKHEabtqoFmFWXX9bzW1J2wurocF",
  "key38": "3Wnu4XtJaK4enfjnvG8btL8aijz5RFSsRt1cELGpPYHv1GFQZFN4fav1TVP6FE5S9CpyeeHjCQfLuMdkKvwDDScF",
  "key39": "2t1ncRpmL3bjCFttnMxvdkpNxJPoZGEqHuV1WVcRU5eE4NaPmrK6XJ6D7rHt9Aefav8ockVNGVBULmE13QbgUQSF",
  "key40": "2mQHMUJgWmccmQ3rRfbSjX95DtC3m2x1WtaY8wnBR7v9coydfo9wQNx16CccRurm1wfaxsmGPqYBdK9wPZdeK5eZ",
  "key41": "4xTju5MwmYhzaLrPxRRarjtJtQGgXV4LTzZuxx7bNw9pghshVpLM5UrFpbky8y1ggRiDMqMQEPMkmS1wewQ57ZYH",
  "key42": "3saGxBLc6yy8mNLJefc1VgGceCULJsDu524oZPcNpmnTV5fyubCSaXdMShEFKMBKecgZxTrhdSzFa8wpk52jdtqE",
  "key43": "rqFKCnxU3Zhi7WpZs6F71opjtURm38ZEHVwofNr2KxQA9kwwcAnSZTirFWAHLeQPvoXZjYM45FTkX9BjFFM1YTX",
  "key44": "5ei5TEmihGB7yAcLLPCbb3L1gHkZehQG4GorGFRdx6eT2KNGEphq3eKfrztnsDtLip2Dd3RiW9FXKYCZPZkeUD8y",
  "key45": "jYLhi1qJw4iHRj8VKaK4sgrSz8k3RgmhVpYFuVoHG6sdF5dJ9h25tQByersfTCVnP6d2Q431UsqLQAUkwxfWdXH",
  "key46": "2a9fqR3gFVKSn14evLiyCwkk2QreRpCTiNCfTSF2pNUEYsnu2vAtsQzqVi6kV6rfeGbsyr51CdhHp89LPkJ4BReP",
  "key47": "55TmfwvHLuJyU7Lb2CPZwhMtmG4cehjqnmKUkQzV3o8AZYXt7mKamEAesWgGGx38QzmSbiHqDjhqnCN3x3DCpKkJ"
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
