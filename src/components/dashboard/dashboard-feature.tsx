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
    "3Tedk7A4QyJSduiPxSxJs26mFzmdkxiv9QaNKfNz3yEEHrfDASAK85sEEdzraCA7UK8sPGdePjhPK6CswrGGWk6u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vMR7EGLfsjwTBwRjFJfJnkBXUDTeK7iRESeiNiA9FCsuNe1XaogKiruZLznU6P91aW6LsUd7yLVTeefyNL3bDRn",
  "key1": "5qMCaSbwAQVhqRv2CRLJqt55xMB8fz7nHkL1bk6MsgstuykWqXpgVEVA9LMMxuqCi7cqDieN3Y42H9X6rMLTHrmv",
  "key2": "3rArEf8t1dNME1rsu462cnHKvh4SXZSU6fZBqZogNk1Yoo7jDtpdD7a9UHMSSqLjHMGHcNRNUepqqdWfb6o5njb3",
  "key3": "2d3kjfj6SoVdZrne9BiQiahZjvUFAfEJCNibicEx9scMC9KYf4syYXkqiMXjuLFVrAA2aQuL6ohDkrFpmqRskGvC",
  "key4": "EwwXj9yVmtoVt3V2CMBHeWcw4Libg6d1KUj94XfdK6zcmGbbXqx6WysA2k3soeJhqAVZJft2LrcGrwygib4KZUh",
  "key5": "2GSQXjdVXAuigbTZRRigB5nDPemmJ1UaiNWDjs7Pw3L2geVCuauUxFuZAi8kg4D71XSG2JW2Bdx26Nu2KfnQnLa",
  "key6": "5thkStMHkterjDVUkbH63zJERCMpHm6nGgek9PuqH5is3XD8V9cJair6r9zhSnovytFLpC59u5yvN8XLZTt7sstT",
  "key7": "2XpSAdU5UqxkB6VAifCXnCrW2z2e2sYWc2a94KZaTMcYWTZLqk6ZMydS14CMiTAoUumEzQM1mUeFdppNbuFeJB5F",
  "key8": "4PYjnzKYFLCkhPxogVDAzKyxrVeq4s99TwTkMVr7pytnCYmiaSXs6chQrFwtBi9eZRAKUNfiCxMGSpSk9Ui559EP",
  "key9": "27Zh8v7eVkfWuYeLnU3dcXWvkAZsdtAxKnGm7uVqqwUp5MM2tPNqZx3dYKx6cj9hpYhyWWsttHWjNddoNgKMWzsD",
  "key10": "cQAhKsdPpoo1o5knmXDrhubXQnLc63m8LfXoSoEdzb8G8BPat3p6yxzvYw2aCZbrva5KYoDcEnjijueFCZMaPZy",
  "key11": "5ARfv4HSsGnr4Pvygh9wopbtKxnN4XcPraPGjNPfodMcrCz6AxcQjb4fHo4T5RoJhrH8fcgLCnt17dnLVTtQdwnG",
  "key12": "4h8LNcay3DDEH1Z76gGntCFBxvCdtnjhjvWRsCy3CVdZPJkr8tPMxfFH21zMMFLRswtky6vvVmoNaaSSLcSYDjuK",
  "key13": "658MXs2ixe41p7zV661G9BR4wFhnSbJsSU3AKEddoaCWx54WFBLZcdWqgpjjABpnb3FFbw5WJDk4wtVb6xLy11hE",
  "key14": "nLLRjdRNDBYVUv1Hhb4ytLemj4yzmGW9yNBrE57td6svDad2wHmNUGtsFFXtFiBgEXeJBVRpzdDAaGKkRhXgyEG",
  "key15": "YmwaygdSVwQCBNoMZS89okFLTmRyVbHs6bKnkM9xf3LHY1ChCLuQmjieegHdZt93BQG9STAgVNfwWucUVPWS24p",
  "key16": "4u1HaJ1e7WHRf46HxCMPdsyQANpVLSwCdCcA63vXCLNpsp3WejSEPR9r5SqhNjge37W2SjXafFAYYdFPLadQPiLc",
  "key17": "2QZKwPzwKhwbapJwGJPkj1yysjzRZgif2ijzWkPCgv3CSU9Q3TT2RWesYKEWEArigMWXe5vJcpDgCSqSKYNVyojm",
  "key18": "2VG8n54FMj3fvJZbGqgc87dbL5VVS1PDFDcYSqCN6rEYzRopG9MBx5zundGPFkBofau8ZPDULWShh1TCrAmjsgnV",
  "key19": "5ZmA9CuDXBohXRdDiKioVK6MuDnXfYL6DoYHHGFuXhd2J3Cdbo3bfXB2CmC5q4mBC7gsKucNFUXYKfXiZqw5pdba",
  "key20": "47P22JJGbtZQkuhmTnWjsn4KL8RQGdTcbm8TjfwE5SR2h4FM6CchNLKcHEHP3JNjfWdAa24RigBBES8BVPBZ7Nh3",
  "key21": "4ju5mcoUafhZPrU1CxHRbNMLrySA7iFx7fFMAPEkn9qBoHhLPzJwAdM8BystLXvUkdbTUzqs4eHnAsP8uH4cKKyn",
  "key22": "635bYUWta5wtA2ZMLn9ryJsAbr4ihKnkJtLKD3proqtyiBZwuRtiifhhxV98G9iPdQVpW3TmsmioSUqR3hhh8UZW",
  "key23": "y2Q7PW9rfhTXkTi14KcggAW4NaYEx9fnx9pQZEWzUr1yYWzWaoV2QZM5KsGAfbxn1d2Tzks76uUeeE8vrrEsNDC",
  "key24": "2VeKPReRvZSXQgVKGBfm3m1FhmZoHuyjjZZJdhHESH7jCfdBVc6sZUjLa4j4MsfAxrCuEfXQZAdURZ1HmkvSbJE4",
  "key25": "aGygJ2JMpauyPWRnQL7VGrAGrERgi6XkA2FzzbKvi3xgktqnKRj6VGNe62RpLYgBte6zQ53KpjpnUAV7ggNbaNL",
  "key26": "4QESqxCmGvScUaCU8oCSL1UCaiuHurbaSb2JXqmebutcf8qkJkEok6fLtTRzHMuXcSsir6UW8XyVm5Nae9b4nt2W",
  "key27": "5Xuhaw6yxFuG6RWGbgW9kqdzxgNz11xbwrT4NaXMdv2LQANidFaZ9wGCWyEcqxAmmVj5s6WLYXe3hT1TFycfM4T3",
  "key28": "5MiK4fJj3GPnudUUTPyCBsmiAYpRAigECf8ghqGB4sBsHKCDiLLPTeJytfEyER3Jdpr35KEB7Ewe59DLhH7myE97",
  "key29": "27vxPQvSo8dZnMo5MospGfKsiv1ZcFjveVdzqCsxB2RtuzAniuJw7und1RWTWYoJyqHhFQ6RVGYLiMppcYijJN3Z",
  "key30": "5xUnpSr2SAmLApNzFdxjnVMWi6cFbEBRmoq43MnTTXY6hJrPmpJ9nKjqX1SUjJTnvP8csUtKTb2riDfsmzKLqW9q",
  "key31": "3xYmaaZSgoufhweTyraQmRUznyvJvta6WCwXN2bgkKAy7V91BhBSixzmvGqbMvVPsJdFnD5pqBY3SA6shiLJ96yL",
  "key32": "569tmKyRhaTt1rxNbjq7tGJANyxAknTQQwpoLwYqdZwhVa7Y6qf8XoaYCNTtxrfre9p1HoXv8j6szcJ6BSnqnysJ",
  "key33": "5a67KV3ibBs5BgSMe5kbwWDJvp3m34pKTxARHNfA4sAMA5nDjs1TqBDAoZYmzitzgm8kDN64wJkdaBt5JkJSZb3S",
  "key34": "5zZ5m8bYXTzADFHKPs9Wtz9QEa5SDmn77w63ztYPHocxNJQW5FPgSud6HUKALuR1gn15L16VCaNFZsUb5g6yW3rB",
  "key35": "2Gpdf8uyfG1apw4v15iNkccvLiUawooYfTZ3EPpuk8mkHwQ2q97J9S5irHNeFv7aC3pp7XCGCi7rghWNiCAgECBt",
  "key36": "4ZLmuMiDfPfE4nL9GNzxbY6gmqBsa5asmGAmqKLNMue723RTTSzMXidSMVHJC7bH7yePkVBFYDzkSKvDu9P9Su85",
  "key37": "LKvKBxMFXcZBusxQruVp28oCL7y7gVoLUKGuGqZau2tM2e4wKwHDGvW825E9qPh8FkSbBbbgQsd9pmK29NGJ2Vo",
  "key38": "34sGZqHPdzSSHFwLnmKxnomUdFEe2M44NhoSEqHviKf3vpe2FZmy143zgX15p6rjHCpTwrSUtwJAa1gSE9QQeJSH",
  "key39": "5xqFkKmu2mi6gJ38bxxGrZF8wDTjk1n3zkjY25s2G7BvCxCWp3RJXSayDy2da9WJV9czzAQegsJw3hvvhv9rmDMt",
  "key40": "37Ckys6zhS2J6XX21KHBv88R3LVTX9kRd4wPB8U6AxDqKGh9vg1xLGJP1f76mMqcKA2ktFyTTdqxB9pA9UqNBgd4",
  "key41": "GHu6ZeY4pijwGCAszyuDPjrEnBpfJpo729Uaj29YJzrMhHdLQcJ4r7JfbuWsdzXD7k3p9Ubb4r1KQwhr5XLqTrw",
  "key42": "4iCK75V5D29bKTtKQ4v7dYY2DLXf2vNGmTryeEZCktjHMCUfxBiD4dAZz7wiMWan5DffTo4inPcnBKazt14QpagV",
  "key43": "3vnqTUkrPayxXNAcUBT3MDXvG5R9ki7FaUu5NLoQFJV8dXhqDixJxtsvgr9BMGkt6Dr6K9U31Szf9ooVYKCnwF8y",
  "key44": "55FVvKEg9eABi6HyDaM2YtwiduDi4g7upC4FvaQ2Kt523ggAfXPWFUUnmRbbZMKrwyKUVoTVTRBSuEhq8oEtbwCZ"
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
