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
    "2Ne7bQwNufy9Pes3rJUNDpEhQe1dhRTWYg7j559ESwfHP9hgRTADQLNVuhHyKdUc7F5Y4ggvhyserNBcRoZJVi9Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tjmgmgH5oC3JFreXNpr5D7i4qwWzyZrXiQyazGZHB2hxMW3scMUuyfzh5qY5JA7EBSYDHftvPMAo6PEkazA1WN1",
  "key1": "351Lk9cXCstRDsvmYHyRkqRPWfm9E7uSeUtadLZNn7TH6Kmu1Gkqo3kcMuRwmCQ92JQcoQGQSiJFJU88WAQ1ZzXx",
  "key2": "4WYntZmv1yexQ77CTQnoHRqJXfxgfGiVe1pjxzq6h9eyTZKVBLiMZT3Pq1KguU5baxZ3AUtMbwTEjVnsfqxUHv4F",
  "key3": "mpRbkG6mACWZiFMzrHXvwXDHNiE4oywC86BJdLDKQrd7vk11JMBrM6PXqpULq1tpYSG2JXCfNBy2oJdcySDDqUe",
  "key4": "4hDorAqAbZemaCSuPnV2EPX9u5wRo9Z6PmXK6QiffhY21E8ed7tPaw1mWCDbuLYfME629sWBH8LMwPbUCx9S8wpY",
  "key5": "28jLjgGKVchSsFEEnZgkR8krC9QM5zzD1eTfR4BDSkAk5jeqqm3Eo5pfHCKrtE8vaf2tJVED6VspmSDe9MoxRe8C",
  "key6": "37KdEfyWoe8PLE5QkKnomgaCaWQiZcHjdetiz7VGFRCuBjmELAo4KwVCygpA55eUQEfNwsZj75FhRnxV956KMinW",
  "key7": "2hrry2tBrCq426YG3zgrz9v8DhJv2J3gC2NwBgvASFBmv9KSNmtdFX2747CgyfwcdhA1ZCbQqC5oaEJVCUxAhiK6",
  "key8": "3wZqERFUHTzHRdn221m75g4ifV3pB9fTKs18sgPCoXcToKFt5CST7X2ZUkmGbQcsfZMd5iELXC37zfoSqF2fAdpv",
  "key9": "DejG6cXDeykNTnufoeaEoJz8wN3khVJC8z3pNrqSeMvvA6G29u8muj5xvnjLEx6o493gZQKjjXskG4R7LynfqxW",
  "key10": "h36s3BPfv9c6P6VJ2nv7kA8qXzJAa73zhBQtYnJiFqAk9zQ77yq1NoYZEP6qmCEJmwTH3FEWLFC8tCyMTnJw6EM",
  "key11": "4Uhf7efY4qozUMf1nG7sYF5gH4Po9j3gNvK6ZieRfE8uTV93GYHFmdFrX6bL4uFNP88DhScBRpHM53VWDa3TptNh",
  "key12": "2wqJcMFTGeQTgLeM6mXmGymL1WYvg2s885nqmLUjaDbXXb7goNoHTj67exrK9N8FZXGWj24ZDNWohYxxyYURKdMD",
  "key13": "7SUaJJDuoCyTAmrSmxFNwCWGUyFbZ6at9RNhFSjSbYkNVB8GLPvHqRKKiAFHvfpVgZPttBm4QJjxRizdP1cqFkz",
  "key14": "49AAD9rYaH7DNbSjQ16sBZB7dk3zn3498gQQEJTDA9zTp3EtemWaYniJU5ta749iHscYViqQEA9st7nKtVfcJgMZ",
  "key15": "5uY5qPkvF4mTAqkjcaB9Gf5Mb7tkW7LcbzTwM5zTJQYbrXPheWha4GozmxYkbVtyoxVtL3LhxdhajekK1ZQh1qrm",
  "key16": "2jNox5LYWG93QzpeUqtEjFsxwntqLdJNQjxtvTKF1bkJTH3NLrv2XNFtFQsnsR2fjYVfeRt7FUre6ZG7mjKjjHmu",
  "key17": "JGrm7Kt3js179GvHCNbDQfhUxa9AswMXpLQV1SzpP9nPoHFVv7xJWBaksYXGngA7BcCWeHH9MVvudmyJqm6caUm",
  "key18": "2by45aqhmALuSMrkvKBh9QmFDnxEYzbkENfV3PYyyfhAKqhmVuF57wBs6bHfNm7jZ1SVwLL3kUjCgs5YoGiFqrXT",
  "key19": "5HUHeVsPCQEYPjw6qUuw9D9mZ6gRunxboHr5WnrLWjRirvKyhTyAhqD2UNkiYEGqK4fC8SdVrMdCHDsmrjpUfuz7",
  "key20": "XwCMBFt2hbFiJwZ2qyqSQuupAcG3u8jN7kjXpkNsAT8z3GB3iL6aEfXhBonWSua6begFKuE61CtRt3Mx9JD7n97",
  "key21": "3dhPHw9dtwsixU4K2Pi6TBBgMKq4G2hbb7e4JFMZhv373mseCq8Y1kGhJTcX2e3HYMDz5DEJaHMyBJBdosd2dgjx",
  "key22": "GvqYt61A74WkrfHXXYcY7aysaLa9NweaGXf1oEBRepRYiTgfMxjKvKHLq4u9MZN2K5ud9472WEzR78wWQQAa2pC",
  "key23": "5Rs4zinBj3YtfuAStGFvT7cwyqtnfo3ezyuS1U3MYPrYXGSZJjLQz5PW7cnWLkz62H69yCueYky9sCNkU19hwhhd",
  "key24": "oz4dzK8aa5uZukoGKZhKMSg7t4bVu3LHsgu55nHhE2zmZk1isMgLEv1DSoo5Tj8UZUsiXv2mdRubZU9YdA5bPju",
  "key25": "1arXLZYsu7CD58eDcwpEkc1nUB3KCBcAT34S8SNd4NiuHhAvGsFMdTjm6WDTr6Yz1CBAGyBgDVZQ64z8LhBwUR1",
  "key26": "3Nogra5wBEUB8f4uSgoCkna8v7ZL4TUwK8dDHmAAfDfiNaU7mdsbfabxTm1zoPGpPnqzSpfe9pygyfYM4LJSnQAY",
  "key27": "5eYsB8ptnuhXzBtwSMD7xTeUPp3fPVdYNtUrhJ7eDFD3t7ujEkLkYspmX8KRtEKuAYrkMB6AvuD353fGCp8ot7J4",
  "key28": "e7FpxygKNHB7xRApUHfL4E8VaFG8oxzSmiZgKdAgmnxSnoneTuQSijGLU8vXT7zguVKqiopJBpKH1J5kDNYSnJL",
  "key29": "4EdCMFXXzuoBRLzaeQGtWLzBi2MHGXp2asQGwjF7axBQ5UtT7vSmWXRxtAyMb2XTc46CBUbrxSsfcX67cVdyKEKv",
  "key30": "2J64n7TMyzFkD249k7fVaBfH9dMxbDmM4kTqmTe5C9Tz5Q59yQeT8MRCDv5HABuwRu2umdMPUecTCVWY8xKcTpW5",
  "key31": "2FB6z7ZQjgyPHTA6gkYRzTusRJHzJSkMh85saU8Vvkwbb7vKPRi9N8vtczBwSMVBs7HwVdi5yymsT8ExXb8fXBZE",
  "key32": "3L8qdjsCRzGVQKufqeHu3e56hUybAvJChoiPxfWxvKFq5GtStbkCMok2ccxUYTCaTYwmeFXhrjjnPV1xWvkNWN8m",
  "key33": "WCt4DTazVqtpMjovYu7bEqwRNtAwe9KgpbQLViVYtQoCZTRHnmzBymg9o3zNB1P6efCkhiL4p2Z8ZDds3mYrz3v",
  "key34": "2uwCyhBycWRpwW821hGkHqPwAmequBjXg7xFarBWffR38Wh7zrFuTuF23XfJGY14oBefYzdjifKsi26RbK4cSVRq",
  "key35": "4rXFv77ndr2QYJBCcEmJoVDpN6pLv7yov7r5THDMzud5GFm7xXo1Kj63seBuVH987s7gEhHtQMqNsBzMgmNC3L6Y",
  "key36": "2mDU28817FcUCqQ6g32GcSum9mafJzu8Nk9GSjhdYV9ixUfqpQCAjq4DruGaDGXGLmu8zEaVBqYteoDM3pdG51E6",
  "key37": "5kovycFgvF4AjgNketNZAeXhh86Q48au4ERd7rzez3HkPcLfbu4zaVfdTBpW2AFNMS8ai6ebRxeCa1NhCkwd81mj",
  "key38": "5KwQNykngGdGtRMxu2zPGGpsTcRq6818p1mf9wZSZ1p4foV1PP62bf2ihPeFN1sEhXE8H6xD881gw98T2XEMsJCM",
  "key39": "5tLUwSYbumM9PQDidGG186Uzz3PWGP43unK2a9TZ1iN2abp1UtrdRkv18pUQzG89J42fZQAi2gdf6fBaoQoVtWZg",
  "key40": "2W2ZgEg96aZ6wQksB8WLCJqWFBYA1LTc9Tg6dKG8M2kH3A4zFHQAqC7k781bQKF84DPFR8XMPWWXGxT5YyMVeNLX",
  "key41": "5jbKfp2gvb14TgMfxHP6fkQM3AHXW8dom56z7QNgELx2KZa92kd6QUac2ficUcd799QGkJVBm71nJDYn6Fmp5gTz",
  "key42": "2MMrZh7vS6ZXFCTXFDFwCoimYGze9W9jXFd3X9xPRvkPoYKG3gfDJAsYu8Bq2LchYSXhRp5pAPoyndepYfjA5554",
  "key43": "4WbfpNHJFxUnDMsN3me8y1BH8ueh6WuozqEJAvEQnPvE1JpSFgkxraEcL2wkRGTFmkXPXtEbfxLdvjFLP2DEGc7g",
  "key44": "2CegPkQXsRRaJKzwQHzJbe8AfuVHe8dNpQ7Z7PqpjhkXCNoXD7fsZkP75H5ZFnV9DTxKFHXeD4w7bLNyRWPsysvn"
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
