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
    "553jPr5Q1iYThF3oWsj6WQDKSE6t75jeDsvySeXa1qdyEx7MbAus1zXVXPGhD7gnteo5wTLeJ1dMAffib4XCxRwF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Jdq7TXSpKXRvjFFrWKQGKhVxeKz347xRHUpqhDnyqgphykNweFg8a3JgiZwpawRhbFc5G7wkR46KMpGLMthZmc7",
  "key1": "27QTKke1gQxGPnissmd92RJWxeeAvRACNdwRFtdHjRsbEd3zN581pzaSXkyuMFNvdCJroW15MHAnXa2zC7gEKKeV",
  "key2": "2f8DFvHaQJB5vkgtT2LTSCX8UhHRtgc93zMgmDxvvssWaavjDaEk9GU8Lb9YxzqAPoHGuaaTmqV4FkfzzK1QH3qe",
  "key3": "2a5fnK8GSNLzo5CoR7bj1QXZ9bnnnYVTm5ApaMez4FFhozbhFwEaA96YM37MYniq1azzzyrAdDN3DchNFP8N9idD",
  "key4": "49URbbwkfsD18csiBoDDVVdV23r2yFfiw3mdvhda4zsPGu5dJ6Md1vKteX69WHofnQcfm9YJUiUfW2c6Co2CzZps",
  "key5": "DY7yxze4kBSnC7q1L8NGPWd1F8iiwrnwUz3b7n8bf2dKN7Syam9PdhcciRgnwn7NARaH74ywFvGXWm8g1uP95CG",
  "key6": "4BCT3g1MecDpNgajS6EaMcLrHTHwHKJximbdLamQMkHynYsSB9khf3FJdtxPT7EkhNCkHhXBxntNj7NgGwmaj5ZT",
  "key7": "3SR6WhJ7ydfuUtaYeUNZetZuycW1StYzg1ErnpKqrZZkXeJpSBiTbDiCcLJGiEySUYrP88sAeHWEo2BvTn9m4tQ4",
  "key8": "2mMmKFetxgxKW1XNCAhEGPJAVXeJ7JNkWAaLTYiddXyanFoVUcoZsathZVaY4TLb2LhAJyoqZ2GvZJjmC53ZAEYg",
  "key9": "2ZLYTwrCJiDPfE1endQ2dfQFhDnEa9bXWsm7Sy3GyvXmMMHMyHYMgXqe4t2JPwpkWyhVgbvW7Y4ZK8JodVCmJ9CC",
  "key10": "2Th8TEauxRf6fnKDXQLp4EpfSw6Ux66Jnz8tJ9G4VHeooCzQdjuAYrVR8ThDD3ZMXnxWi7H6WxWpH2n8sp97hdXV",
  "key11": "ZianfE5bR875ox8pRgcd6eshUcLJGmLXPD9dAc8fH1VmknxsCFZGnBA5JrzzU45in4s4D3UwfcFqm9TsgoB7Nxd",
  "key12": "Qn978w9xcsK1t28KkDXSEq1oANmA7DTxqvkcsdX9iGSwpJttTUQEvtWWfswHvs4DJeSytANRVu9zSXTZC73n5pc",
  "key13": "2NY6emU11pUwLZTuky9fv8UtHPUDDNR3R2aoaqXh8u2rufi1hzRVzmus5r1vyeUoPxhXN5sEEWGAGNLfTCBdeomB",
  "key14": "2SQrrSsNawyHgDiwoMRz1xRCBLPMyy1WxqQLQMSvLMTcMWUF48MoVG3oYGmVcnUpk1wXNgfbuyS4TdtH2hNzd2VD",
  "key15": "47B7wdBv1MAAbdY1CykS3AcN6PkhFDT84441XqoQRSwqJmaV4mE7KdxqRmYEQbtd3AVrXRtaSEzEp8R3ZNWSYfAm",
  "key16": "61oVk7zXMmiVtwp93V329nQ6j7LCSvMUfVpspnWeY1Vczfwr33gNdt5XtPmWP9C2hac94Wzgbo8fPb4ucFPz7AVG",
  "key17": "g3nicejXqkpDnY8W3p7DNecdwurz49HTay4cr1WmZ5xkfUH6RRxcw4QftfWqK5zpdzjxBxwxsuvTc4pQuJp8vyT",
  "key18": "8X6kM6JdmDhc866uf9FzUnTDsi1bojfDroNwMsik1mes9CYR1ThgVGi4RtUE8u2sfoEJV5an1FaSdPK7vPG8iTL",
  "key19": "5xycRGW2sBChquC81MaEbthRtp3LvUiuKmeBPhydCTDhcfHkwS1a2s4EwqdLUiBzLcjia3ChmX5us3aSXyHU3Vkk",
  "key20": "4aWb8iQey9fcmdYzePi9hmHDXW5FRjBjU2iD7gvUWikKEeBkdPtApn2CH2uSQ9eGny51DgWwmVMWXX22ioA19mFX",
  "key21": "GofrE1krAnJXXFEiaUwRT6cn7FLQrN3atCxMgopjXFXboGgSbdx5QYwHhG1YMKHhUo4Rp8w1ytyauA3QCkhKLS1",
  "key22": "4b2Uv4b1prW48dxepZ3ENLJaxYm8cepuYW2mvWTEmeDyc2RFuaaQjpdiGRCwo9aKjDExag5RBfafH3TAxqHWdkrV",
  "key23": "SmKNtxcQoyQG4pYCts1fVfGsJMS8jc9Nvzw82DJbBX6uSbpjpZ8NAFnqgy7W1LDDuy4e9riTdmpRDCkVFJ76p6m",
  "key24": "38MeeD6ucsFnCaahGVxKdsVWYLqb4uAPxSN8nLtzLttMk2cJ4R12FVumrTx6yqdAHWAZoVxPLuPSDmciCaDXss3w",
  "key25": "332ptBEeCRXVbXFzRDvPpYrueXBevL2eNjUTLgoCwi1oYhrs4Am7yMsurcmxJi76V7nEdP1xHMbEUnZLjf8Ev5op",
  "key26": "3TNaa5ziD4uveNsReif1ntJdkQHzdVRm3KGcXtkX86achanud3T2wLh78G9K4WRNhQweYXWomYHzHQsSb1gK35To",
  "key27": "dWmMUvpCWwbeLy5NYqvewghwEaTpjNGmeDozB3eSJoGBRnzVkg8UYvsDVLDqsWCy9yfggktAJTyVJ3gFWMVeJS4",
  "key28": "5S3dSGkEn8iCPtpBacMPaAUXGByMHe4Y89jS1onECJceiSyoKqvWrY3nkkVZGpzJnvXoywf2WNoDiCkjYNuPbKKc",
  "key29": "rseSNMVsrv7xVWdDVr1XayNrSQymrnu5Ve6vvxC3TuE7cWfXB4jeBaGjpEpug7tLS8TRGy5j1fx2SnXX6Nbdjwn",
  "key30": "KfN49eZnVWGdX6hn4Jg7bRWQkCsv9mRpHsTmu23B7HGfo1NRvnrGyTcQXPVuv7pYYdPez3AMFHfHyFPNu4AoGJv",
  "key31": "4fvbJEfrxf9roJWrWjutYVDKsNf8a8HSZXNK2DcYWYY2Ev6VEJUpMXd5Du3hzpeUxbFsxY2hsKSa3ukW5VCZGg3P",
  "key32": "a733fvtkiK3Z2DBx7ESonQWz4stYdo53p2SzyB8dA6Kx7wwc8DgGnbBBbWdYTqC4REccV48sbAV379wCnEjanUd",
  "key33": "2W3Zwnrqo38TVabRz2b4KwcDL7kfrF37usZDFKtUTrBM5K16uAxL3asHNrkrJ5vUjc4GNEy81Uj9cp91Fpbydvc6",
  "key34": "3waADVKaHd67aDYZcNV8aKak7x2FCfvTbSpZbugSNwgcbY7zvqWh19Ayv2B9zwgRVghsQmAywLBBsP77wk1yd4FB",
  "key35": "5BRBXV1PPRb4NrbDjbofC2ikdmn7MueV4amCGBwVEdQb9tVP7Ba1nDuMcVkdupUVEzWVG4apA7QoaUm5dGFAEEfg",
  "key36": "67ZK7B8DQtFtDg8iu1jGonRoZtCTXs2qcREMgs8dEWKPF9xrX4gYhNWcsvbV2vfg784vaBVq6V6hJ2jigr7EZFgL",
  "key37": "5dxxHEhJj5qwbCtUpcJPUx5vgc1Sd24G66o9vB3wSBEXkZEYgUwkjxtp28THJUTcL7XHE7VmJjnktLG5DtvtaZ5a",
  "key38": "5wpEUr27FTL11tRnWjGgPemwJ6Zvxrc4sEJNtqLWcSFhoq8qXgmFSGUAbDSg2UvTxdYziS3jpZ9bobB6ReQfvup9",
  "key39": "57WRKGk3f1MweKMFFmcsx3fB8rP2cTjQWLYm68NqPzf8Ev3dTHK9EeEu1QJNgZHjkFeU3SXKC5FfehhD6cdnFC15",
  "key40": "aHGh9cxxP6wzGTkmAv6b5rmc9A4Q9fP6d98TVaZkutL6367beQo4aQbMnhs8akgF7htZLQKpJYg5cwrvAm3w65P",
  "key41": "5Fv75bhj4Uh5eMNmzVfhuy5WsBV6YiEky8uVoTvxqUzZ6FvD8xXBYpu6teqLWJVFSJEdSVzJ8XmNYofsB145ecnR",
  "key42": "2i45C6BvUcud26SMPLnPM6E2tFmXx7d6R2chfQc4oBb4jiXVbXyYFG8c3isGcx1DT68Yqcg6ipxbfuxcGTYz2Haj",
  "key43": "21bVNAeLzvmxXonTuHaVyxxDf3GhNG97LAq1VhNi8Ftu7f12zwXaTFThXt6HWQNduBaUJ1df3jj3ZGLNjq51h9Cw",
  "key44": "f2cHnJkxf8C6nQfHLQLjZs73tZasRXxeYXqc1rcDySjXRMtVSuQAeBnfmQuY6oY3Gz3VTbYggJP3ncddZ8P5E9Z",
  "key45": "5cCpTcuiz3FRPgLxFn19BAgQFGQP7yCF8tyW5f1GURXMqys9NMojskC9vGB4A52ARCqzQXVfUMFeam3kM7U4s4R8"
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
