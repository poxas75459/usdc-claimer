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
    "5p6T83YyhqaBfhB7xpy8SpfXQqt4PgRogsA6ZvERDn5gMETDjPDGd8jqyHRXzxbXmRtgZM9AQb74feYaKbbfxZZj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "618cH7ZddwUxkWG12Nm2GBUqpcS2noAhZiu36QHuuzpNZ7jW55Hi85XkELwiiqyWrHFHWDSwEkQTU5t1fvNNXyfC",
  "key1": "D9wLgZEAG4PvXZXQc8cJgDKZyfV7N7pHHpJid9h69cK5GVcDzM9NmtWgkYozt18CKDU3jRH7JsUhjrZZvipTM9n",
  "key2": "2qqPk6zxQay5SXGzbSmSoEUDeoRRBH2o4b3FCWsFRAS2vdxWXvgDqXJmQN91rN6P2Xqm8xEC91qeVjLMpvDwnapJ",
  "key3": "2SVM3r2yrNobSzVk4cvyi3vFanzqgchWMsuapXqecU57w98NqnDGFA4eSnbcJTRFaprGi2Da4LdeY2UMY27ZaCuH",
  "key4": "27Lbyz7oxBG9KTLHp8vLTHRkEhSmJEkw2h12iJmi8ARxDdQuVPyGcuKrQW4NXAgB5VaV2LnMpwMqHN3GvqJGJgMf",
  "key5": "52aztmtd3ManckCdvXy2nmoUXqti2g1ExtVFiYU7LF5NLXaXTwYtDHsntws7sFDJTbuwGfT4f5nVQ4hUzMDecdhL",
  "key6": "4X8SxnQbyAXjNFS64bS5mnLsFs98isRWFi9uV4NEBCs3N9tkojfDyqe3sdwe4ffJiRu776wK5aDgKXw4N2t6P9SK",
  "key7": "3FoZPvx98vwSe4Ms1a6Bmb8iiSdfG7keKB3MEHdxHcFYjRSuM44Aq4PdFRMErGazpMp1FMpM5cjuzRoweBAZ5N96",
  "key8": "waRnAig3UtuXCmjqaHWsQvubCx7mKxaaxYRTbTuJGawsbECEdG5iR8tjGTBAoAMbx4DwQC9DKMn4CrSwPWy4XT1",
  "key9": "QnU1e8SL9KGTm6n9WTFwnJb5MyfxQqTQhizwxMgs8CJpUy11bfLBNV9KPnz7bdy2c8iduqbRakA5weBQEa1GVu3",
  "key10": "5ExrdwKLVLbeR8196WrZgmZ7mQkdgSUxSqET73WJSRsR45TjxNLaxF4uQTc9XmvSYXMuUXQn7fNHbTC8ajdqbD9q",
  "key11": "5vLSMLKngMnbxjUELUPPbh1YFmyomW9zV4gqJkwQ94o21hqwzZ8pxfNyXR33PBAKxgrG2ogzgtN8rxMqAdwG8E5Q",
  "key12": "5QKZLjMYGw6jg44U469aJ331egwokMCjJuVwYM9pae8P9sudQS3mUYmGGuN341A19SkQW8mG9p6BUGLDjJvYA5dm",
  "key13": "5ayUPuzCeBmUtra8gcEZi44EqMshAqX9jWK2rxTqnwqoiPutpfY5oZer6ExayZ8TU9UXQZu6SdFJExmDWJ4t2QNN",
  "key14": "5XTDryoju8YpvW4GgetPLJDPpTMVxuJk6xVneaPjJh7ghWw19bNb4bG5vzytDZeWMcJ12pxsfyYX1daLLXZ1xtFj",
  "key15": "4g7WvzZiMUB7HeeFYvQ7LZrBGWdUup8qKoarGHfUb5hTvnuTSARY2nGPiBCK5WhsF9FUxXAiv7CxXiXDvetxD15d",
  "key16": "5XfAH6Pa1q3U8jVPWqsF5VfqqSQe9EF8XEWX1sTnWJ4RTujaWqniQAUirmEgQMqwbRrwKvpeh3YNTu1yC4inaKcb",
  "key17": "4JJJnAofcFq6qWwb3ayzQ3B5VX9uJFmJ8fnrdx8MS66iMKWipsHrcp4qjq6CAYagUBN6nv45oA6XZn6tjXQkdN2Z",
  "key18": "9KnB5MjpAbVZyGh4oSDvDpYp7XbTqM8HxA4vABMRvcpkQAdAKkwob7QyghLXut8sA9shLfVXkTge4zcDuwvCi2D",
  "key19": "5QvWFM72ZWxwDtmEtcva7ZSmYr3cncB6REEAFTdAP1uTmXWe1W1emxbkzpdrXAmoH95uLiKUumhtsLZ3rtzapo2X",
  "key20": "5kJVPaFbyzyW7h6A7EoZG6JZi28FLXBTnufUqQ8cgMJLQ2NjSBkoN91MREyBdX1a7AaSQ3mu3Z2vF9P13PvdcLh7",
  "key21": "4irhjA68VwmbtV5mtvukfdMiHpRBBgzJCPpWCQBziL8fijVqaSdsiTPiR4bjYR8ryzZ3x21nT2e4xoK1dfY9YDyP",
  "key22": "3UGwo6cwVhoU2h6oKv6Vw7gPVyzaoxFpccExCpFHjWskNXbPJoW87zNjygPa1JREnfdkzi9qYQ6rzwTxFfwt5xZw",
  "key23": "BshBSHxdRD9sZKWCAP815oQwYqj3BUhU6Hz6mfiTXadgswbLbCgum5rdfXx9rGaavAG22BHj9iHGZGbMDtX1ZEN",
  "key24": "2178PBsQpeGtvaT7wtNJLqC4kdJha8cfUneRp4d9Xbdmy2TmDeXaueG2gat8jpbAyBCgUR7oxbhtKiLtvvdf9o4D",
  "key25": "2mJvX8WYWqLXMseaKVdV9G2Adhqc9qH1tRMzV6GBzk6xEte4Lgo3xXJG9V5kATXuC1ijSefpdeSNMZ4iyNMrS7B5",
  "key26": "2EFk4o26mTYGisaxx8dutmtDiRZaANLoSNqJz6d2kkxY5KCyLCYQ1VBi6LDuBUiuKhJ3T9fw1yDgNGredLps1mcW",
  "key27": "2QVXDCF8tkcLK8T4KHyHqPnC3KSo5bSLQGvFuJpa9zhM81a9KXLWVx447cYSCBYV4NJC3AxhNVBP6Jb4ytJkACyV",
  "key28": "3DSRuYWWFyGBzGGwTMVt4B3W6EydvEZhK2mKQcrwKCriuY1NEUbs5SmWhBcShPidrLFpUpTFxodwG6XWAs4JWMhz",
  "key29": "5LYjKx2HBSU2DbWZCeSQnPMGMa4DLY9s2tgdUn3YGVQfyVAbcYMNwDGKMaZZWDwD2ZeA7Yg2im7QUg2vY3hVKgv",
  "key30": "66QdzXJTyfPLtxwYLJxu5ccUMJzthpVCMyBS397VAq5drrHFtGYnwGDFtGLf8MtDMT4fHDpa3xJqVeB4FAp6cDAT",
  "key31": "2MvYmrQAiEk5kGFnsvWWGmct3j2zmLY1yBsnAYfe4C2MtFPTLrnWycwugs8fxHLt41Tj5BCM1xMKKtoLRdb3EcHy",
  "key32": "5mLt28WjbkZfcfTJNavzmsGSoeRNMWo6DbYbBC5PPwXNbYUPhuQGYXoFJvviBsj1cLvWmsJdE8sPYqS3XA9vCiSB",
  "key33": "48e97S3zApjgdAZCestW717GcJujSaw9vohguFavoizEYwPqmKakGXd6Gi2oPhqz7VBrPXKriYRSCJcW3RtPdRBD",
  "key34": "35hRFMhFcPw59QGwHACGaHfnNqaxzanpQfWFerTJrBetaESY8FHwt3qXLfxRGgk4LMr96JJdJPboN4XRwiQbiHKz",
  "key35": "4ZsVg8YV1dhaLRmakfiNv9aQQambAHCpwAGwwq15zgwqDBL1QnFi8fWfPkLzwNvPqqr6owbj7fcbSkY8V7ZSKd84",
  "key36": "3r9JXbhTfvMCkoNeoEgdRS9Y3fLFSY3WCFmYDhsVEBLWUQb3a9RwcYKcfhzAYjSUomHKhPPJHq4icQpU1PDgYe4G",
  "key37": "ioa3gzmYQcEs4MYrM5qUCXAghFyVyg6RsC6L3qUmM1KsNsa42x62q2RsRLvAsJm39HwsiyzpgnZvP9jzza9viU7",
  "key38": "7px32pr1QFXWHVca2XtKkdq9wp1vxZJzMbihzfqrJjkXY5nvxDwj4rgrWh8m9RLxE45EAmvL4wxJ2AFZjJmZKK8",
  "key39": "25Bd6kcSr8F31pnkNh9Ub6KwBT7iu7kpexA5tJHnTeciZT2iZbT2kHofLZECnMquwZ6uPz9UqUU7HbSz4ixCNmWp",
  "key40": "3pHYpmUDy9PKrh4swcMbs3tSzoz9Qh8LU2HMFJ78RZ9N5Now1X7MwdkavxUoodHiMPyuLoqdhDMGXQSdRZHTjpP6",
  "key41": "2nj14DdA4HDazLWSqxamZAMbKNkp8xRTPDjrQHb1r4eBLPSkNsgi57AHadcjz7jE1GeLExRNLA6ZjytWMbFdJGCN",
  "key42": "QzxgfMe61GJMNaXejrZJ7DQtwRuywPCMiXw7K38pxb2GF836F16hhaXa4qH2SEKi4rf7gRCrH3EWamygRgZ8LED",
  "key43": "5sDnd3yhzge5ptVBhscpRv3eyy9GQVqc1B4jhigAQeME3ZVvoF7rLKyuacWNrq8t8Udm3DQAKC1iWdiASUgcdgGw",
  "key44": "rt88LHtfimeS6h8aRjc4XJhnjQgKotNt3ZSADqzdAcs3LJTkcH1bfNh1KhCbafggS9CmYG8MnoCakEAkjBtYW27",
  "key45": "3R7rdy7zoCHppYkZqXZNuUw4zHrvnvUqLuwzq4kxNiso3xFfWTjrVtmAaLfiGsggY3kLdaLUpkNgvTCkij5nA32Q",
  "key46": "58qTsCjkxyn3dmmbom49AP6BUDF4ZQtFBS1dgGxyxeBuXVjvnSPDADjgDYfEEJmajZKhr8Sn8ZgokeeLjdpN57mJ",
  "key47": "39Fyw2j9Y7iERdfGLTVyhVpmLYGDmiS7zDM1yVpd6KA4Priv4KLbMJvVhZ4urTSrejNcwjhCTMhgGXCXgKrYY4pN"
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
