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
    "51QiGnDdQ9nG1REbQVVGWSNJu6bNNeuqfJcPja2gPx2nr6GQs2NXWV9LReojMZxSsvfHh5ykuUE1i7iMQLLsFPEg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Hn96YBt7qTh2h5ArDAJ92EMiqZn2KjgoJtQ1xtk4hXKgmWHu3sxH4q6X4wW97PZMNuHsrybRMLNgKbUR9t8bFAV",
  "key1": "SGSM2tZXAStYyPpbLQgNQsPy65WNQAm8J4HJVyhxPcCd9vmj8MkCEDnhdLWdxVkkk9jR5QGm1unh86CEcGfhn72",
  "key2": "2cvKHZscQUXWjKziz49Zg7EpAdpCxiih9mZbU1qUATGoWWPSt85Z6QqaMFC9C3TiVg1XqjhFoRCsrUBUdZTFqtBc",
  "key3": "3rHunYAaUN5MWbNYJUFgoZz5vY7yREUmw6GvkioR3u83y3SjpCaUt5P9uZJgrNAPY9dcFKN2TXhnYZRuXdUBzHbs",
  "key4": "4oMgnthnyidF2jb8fS7Z2pJp9LBmun4dYqrd5DUrGo9JEq7ndjoEYkrgWG9utn3voVBbQc7yBu82Cv2imyGv4qtL",
  "key5": "2KuJ6W2LSxnw1MW4EQdRCG6dQAsEUVJzi9byXiUbfVZJF4fBc6wnGmNL5Ak42SZ54SM5xfQhxNbVCM88gGKh8pXr",
  "key6": "YxXokvKjeeT8y1gxLEnTEggPmzo34QWF2REsrRExzbokLCJMziZcrENHjNETTL1CvNQvt7FGZKuoZWVxpXSYtBp",
  "key7": "1MeHCy81N2ZnYZD4MzzBxxEtiBSuykUV4Zx3fmVnJWnuFZzBC4Cmbj32zydtThmD7shZ9dYbuncRUvomj1ppUmK",
  "key8": "4FxNatBxdUqeaxoiTJkYE4nF6YsK89brA3uQRLkWipBuZF2HSPSXvcSBK3K99vwYWXwVYx1iu7dvHuPa9PmpnxF8",
  "key9": "2Tw7mtjGJNi8JWyFwkggGeNtvxvEjycqXuYJBcuKzVnfX88P2891hfneVwsGLBhnAPCwYaCCQimiprfevuS1fwdM",
  "key10": "5mf6SUg3rN5cpXWZCixEWQLKFsWMgb9L2UFUpWE2aCijFRgjMtCxZMMxTtTAnjJUCJcPqUmLWGQpfkQEc6UVTY3D",
  "key11": "2L8Px8uHCxZGBfiKKfgd9W1DaeeXRbUa7cSJrZukakjuKtNQKRjpvhN6YdYufCNmQ8HgBmoAQG3CB2S3fzoeUVyv",
  "key12": "5RYj6AtmSiSMTgigY5dDY71mLxbamEfMe7G2BrUXpf2Nsw6Z71h6u8oUpzDvqsTnFFhqXF5iYoLqhznsztnuj7yi",
  "key13": "WYCp7pjC9K8uPKBHAtVHSP9oLB1AhqdMv7sosKaKa5HtrytTmCj9uUGMp1nvBbtRozrr4wUsz82TcJ29nNQvjF5",
  "key14": "EBpoBTph262waNtekURfknhcMBhE7eQgAGVCsfxWWCsoghWtXvCGnL3hmiCMNhpPSXEhFsvjRqx1s42kArfAfsZ",
  "key15": "GFbSMnJm9SLHT61NNhTpi6fupZAAR8dEC8mkgYEUEWmGLKeCtxMykJ36rYg1faTZPzBNcaZtdNmiak9WMyg29WE",
  "key16": "5rkL4Q9bzGFYJjvEHzCE5Fiycw8iMBH8cS7Um2Ftzx6NVXhCe6DXcDcttoKQbMBDEoeeMNdcV411WX69gJDnEVSc",
  "key17": "3pfgnmk662hHMQiidyWJPW44tdgGu62LwyhRPM9bSHjG5c1zvDggT7SEM4a6pFqsNtKw7FBeSE17DkXP9AygDF1L",
  "key18": "TbDFWMrrDHB1SQwN7PLCePvhpfMNxFpuj76WuvJiwQ2d9fMxpKw4PCKsii2pQ8e8tXhcM7qCozJzXKK52KGoMXR",
  "key19": "2PCr2yfJx3UTEj5PqUD1m85U6vnQrvkrH2K38Wi9d7BX7oWJgLQRJVjMJAv4dc9bwmQNvUhBDLx9UXekga8c5UZU",
  "key20": "4kwEDWN9V86BRpVypkjRCM6h45Po1tDdEXYVffNEUuSE2wFMPySwpfJx4s6T86N8M67VrrYcDmcDNUYPp6pR5piJ",
  "key21": "4LzuQoj9ZEChgFqtjDg2EX4BxxzFpNYSTUFUCSQ1EzEXGVHjRXoHvA6ZEdNLNj5N7q6aggdncEuVch7ss3PAQj9Q",
  "key22": "4M8PbHpKn8UBpb1qLyw1ap3qvenVS9epoquf4og5t71fYzdyzWFJEdzwGCn1ESopoGvbzkdr1L8uMDBJrS6ZcYam",
  "key23": "38dbFHEtk7WcaykkoazBbDwjyMmhVwuVA9VrPZuxqvRWxWf3VCGCgykmmVV18i668JU3svQQAUE9Z36L71F5kgbq",
  "key24": "4dgMsQrXJfuzLvrbcB3TdDPzv7pbMd7hWCmmKnXQCLTu6scPeFCSWWx9zbxQvpNWfA8khGuiY2PE78LH5sB25jX",
  "key25": "4LanZuqWZraBWppbKnmD63ocxJHBprNWVvfszGbJLPkC3YnknMk4ytJgoHybgguHUwSNH4eqF4MHmL6qyDVkHV48",
  "key26": "32YkhW1hz4Lv2nH8q5gi5e5aGt5ZULt78nh5x8xwb7VDiGLazLoPhDxGa5CADmUnMpWc3a1b26gyyGLuTvAfJe6p",
  "key27": "283tVzPk3hH4G439cRwRT87oe83Sp2CawACmF8P9zCvGCTZnT78kTNZZSYaM3HQ2Z1TPQbmGuGCErjMVcUuZNRoR",
  "key28": "2wye8cy2uykhVX1RNJ18uqE3c8c3sVDBonqwP1PXhvibQ7YwA2fHRpbL8ERfVmy2qNAKXg6mbxafhgAaXsCBaVt9",
  "key29": "3gmFRMrkXyHVAiuwQhqNmMXX2avgqkhjoc8mYkNSFQBMM68S8kYLT1mtorC2WLkkeD4soWFrMqLaY1HyHap9RDJH",
  "key30": "3Tbv7BtdJZxWxT4YHWGT5tEG5m7Jp2vPUHmYv4h9LiU31e68DuGZMbHBramQKnaFjUCn2v7zuN5JPRE3GRcXpsb8",
  "key31": "4c6dfiLDp46krbmckZybEFeZsazbb7APrCS3JaMZXkF338svJwRt4cs9f3Ywmy4kUhtMoCAeME8M3h237tFkmzb4",
  "key32": "wvec8Xb6cyh9WTHoBAU3AKdy2NwCZWxRihBTY4LxxLG4dEJkSyyzJFaSJbvzqaopedtWam58NbtN82ZRLt4KQpP",
  "key33": "3EQrg66Jfru2xU9qPT12ChBZDqGmKGPKyuwUUVmdtkFGeY2hn8tTD2xdJHhXaaS5PFcT9U9Ep1K8vUoeyDGEjsQ5",
  "key34": "4nYH31rucMJWnHgSzboGXCLFrTZaPtdxjKQ5nRHWPrXQ4Hm5J8CfuyryZR1pSaoSnqJyBcVVC2ZQwMi7tNw6ztBD",
  "key35": "4hxhU1ecFtqANcoixvaiUzmCmsLu7pdSfjLPyJNVWozdCFoEnwRZe37ZoCt6igSv94rUorfFz5DnBdYVDsAXY3Bq",
  "key36": "2H3PzwkKebTskcZZHsdoMh1xaWwdqkXiYV4zfTiDhdDgqn8gugSHuMrgQPcRU11GMB3rGrMekgLb8R4yEP8Fkj1B",
  "key37": "2DrgQjTSuJJowdpDqbqP7cPGfUp7nTQh6PkGf35cPYtpWXDasmwbwCKQTGcmYCfNdA3uHjrGrzZv2yjXYvcCmGGx",
  "key38": "35szPjB3zDsx4HuGmETS3V6HvHrdFzu89U2KV7z2FCZHscmvNfA4XkFJVcEKdsYZxM3hmiz4Gxt2KuUPhPMMSXK",
  "key39": "TdT6LEhcfbGrZHbaj9F8QvtM7QQXUj7XkDGegaLaRtyLFLigjNKBi6uPZjaAKQhQSdvafHCmJbdBLvb3iNyaKzW",
  "key40": "iXzvtcVpa2pQVW48PaTvsooNJp7dUg8rBsQkwtYBiuL5snxSsQjPfRoo117rXjLLxYtEp1XHNL6njn6w718XrFB",
  "key41": "4uWyJKN944GpHvK5bvseHT3GPLLwtHvBsYqGNMLPNyh5tKk191DVA1aKSRPeuES8BvhX3NCfkzd1higqqM4oEUf3",
  "key42": "4XNsFcitasb2tL11xHk1ogbj7rQns3HoRH6XTaTkAwEqx96WZQuC2VURbdx5o4FngunnwmS3beE5wemsfmbZu6rA",
  "key43": "3he4mLTnTz6zCuMrraeuq945VdJZQsWHBSGNtm9iUPYJy3PtR5gtvghnGB49PxD7m9WGHh4aN2pwZbTqTEnxwwJ6",
  "key44": "4ArKMimwwi3yWqVJ8KkTkoxn7tBnpcRCMVRAKajYPfKSa7c5WdFwqKPEzpeEkiR8ab9CUcXJWvNUcvTuXnCirjXy",
  "key45": "4oFMxiBG58fk8KVT584ZTFJGvDV3haGo4MBmeVvgFiWoqVunDUQavFU2fqcic9ZQyf5e367rag7Y1Vt6P7PJUh6F",
  "key46": "4XFnNnHhLkVPiS1zKNCqWfiERK6TCmPdsKiyUNNDuicDinpq7fgYpjygkYtpAQ4MbnqLyTy8UZbhdw8Z5AKzZhNG"
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
