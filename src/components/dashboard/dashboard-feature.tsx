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
    "A4ZZ4KbXaTMf4cPKcp69CsWdT5fAwe8SoUFU8xZvW9tc3YMPQkhvH2PYDYEUSP1NCrZRcBN7tYouSgENm34Vzvy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2F7Auu3e3BBm54LYxVM8AABn5ugnSWov1xZLUomKjbbeKuSar6RBaX1veaSERBhY3u9ngaGpT871rGkxfZ6efKen",
  "key1": "3jZByRtx3ryfrk7sxgmXMTkQxvnPc3Y7S5tem7Gm3udDVe4qXcftLkC9bRYNSCCK3xK1y9FDMZTMddY5XSyBpfRT",
  "key2": "2sQhiAq2WwmfNzS2AxqfHNZMG2scuQEkiyEg3Vq13A4SVtCsEyagLGQ2z1TSyTgBmiWYfPvNeKWvrun3BBdnXCtM",
  "key3": "5M9BaHTg8VCgCxfYHHisi19f2qUYswuCxUfkBYsRTSn2J6qyZdDCeEtb76yZmGUo4rxFd1NLHNWPAtKiVms9i7vP",
  "key4": "TFMouF6aGuAPrDVjEDZCCSwgfhYi2q8sRjBGaAyzhAh8ry1mmgPggijQfLJeRL5cdvYQXoFKptJCUAdPyFrSboD",
  "key5": "5Lkx38RezFnfDsxmGafyff3HdU1U3L7iLqhuhCbXKWCvvLcNjkBDSjEcqj62MgtY6GGH2dWTiHzQWNA65LTZUNaP",
  "key6": "4uc8nPXWT5wJ5qNUArQsxrjRKW49b7htAX5QGA7PMXD5vEpE5rvc5UR9e8TRjbXKBtbtT5EUWDJ5rb1MUdHAUaA7",
  "key7": "59f3XmD35N4bP74H5SZxXdq1wgeXhyvJw8XQhg2xrmqoBHiGB2gKVzBUdfLfXJ4W2kivoLUrgMovSvw2a7HPBPqj",
  "key8": "ZCdzmRBfWHtZDa3KiKVE6A5PNP2BRY1djUGRrrGoxdpjEM7xoJmhJohmdVSN7g4zZNg5C5kqKowpsnJ3Y4Gx479",
  "key9": "bruRsoxrFDqs2z22yDDWQrjpDsYLdGqgqokcoJkXzP19ReEK5NAHU7FXyfLvw8bb15iwJHj3C3dWKQqrvpESftd",
  "key10": "53KATZb1B2fcghC5h24Q6HwejEdF9D8v9v83aCdLGV2tamFsovRCUZq75NbLV5E3o7d5HAn5yv7jayxJEujrfm5j",
  "key11": "2yuczKju4VFhYaeB6FsbqEDpWFc5K39ZFFVetbBtEwzYh1WiYYfwMrqtbpc3qvJ819eumu7KADkGzXngYT6Tf8YG",
  "key12": "3Y9WAYEXokfftDiJ8i41WfEAJAHt2C5tcXrVuwaDdanUusgVkFPboEor4iXL7ZSD3QtygfBDfqUHkMdN97q1esEP",
  "key13": "5uSjkgSScqH2r5BSVvEUKnKuP1HiTGMa9Pjc7p3GU2xqgGVHrWrotRofG6eziUkcRsBBiB2ZGZxAhxd9hwUjzSbr",
  "key14": "2STQkMLrR7xe6iZ3u5NzTFQTbVrdDEdfTx39hLApbpYD2xQjXvHoCQSHLqHEzznFf4mg9c5AXpHkcPNMaYQc77od",
  "key15": "3twkG881gbxMd9Sj9csNX6s7nz4mECjSikQpRhsMhBdNBqsyc1yPhF8EJquWENe3YhdfJWBbnF8DcwY6fVMD9U5K",
  "key16": "5vwHRuZXQTWSNaLm97doYyZZytR3jsLXjtVB5BPqWiyDbXVeH3qkDoqVpJmePnuyoZAkzCLsDzgb6LiTH4RGDjgy",
  "key17": "4NfSEjzBLLL55WoBonbN5UhuEyRwxk6ZHe1RZT6Bm48M7CMgxXs8FvewantSAtmMoseitykdJMB7bob2yZAZTFsT",
  "key18": "22gj4PjNuZRLGw9oDVbT99rJRtn9f3RL82w4a8naTJPUbBowCwbSLXS22qYV6ggL2ED4fBHmMwF2nYX39Ye6CPKc",
  "key19": "4oRFcNgyrAawotqeb8M3m3HKLsx8Y6tD24YScmKVCav3wV6cDy9zEYWydKsCwqw9twtrhrUuzZXvRh2AwhMFkP1d",
  "key20": "4ppM8d3nbZo8VfPZytNHdniHuHPTfERU2rZTEzsEYcbxRyYAu8Y5hCUrdPrx52SfxvWL3yCQXChCgrQgWXedxeK",
  "key21": "4nQuVsA7van5BaQEowRRXRBmPjAsrmvm1H7nknnZyRcgofFvbMfAzapNFj59yPj7b4NFhk1GiKS8ZYGSqZ8mBqs1",
  "key22": "67EfFo5DDga6pn8rE8GgrkNQb4LNK9FcmHC91qmzsLHRSkmgXaCoadNq3SrYJqN5bDw2aceqU9Ek9ix8oVja7yAn",
  "key23": "3j8qxXKCTFU1QENJr41eJaDtrmrjNXmkr14qv14VyxB2HtEnV8a9S88mCCXj1R1vBQmyY37fdqnRYLB6BsKLsnFW",
  "key24": "5K5tMazrRbj1mbm19Ub6E1jFG8henBe297EaARvGW4crqmQKpGaUwkHcWPvS1HVjiJSANaZDeCokDHopnqFDaSGx",
  "key25": "5Sq86Wrm5wCNxvksGBiYA9c2fLTri2yQDdWqpsie6r9X9h9nAkhaeYBv45NXZPbsqhYiPf3cWsaTsUkXFYManqVD",
  "key26": "4fYimSLnvHUvo2SeYmyrfXXwNYNKfgX99JSAuS8n94aPam58RNoaZiAvAnwGqeVD2kLM1mpfXd2vHkwwHPKxcmp8",
  "key27": "2vaag9WhMVNNk2QaBajD599R9wD7ZuecwFAjvkZrLFqSTtLxGgqYFRrsn4GqheZQGTeW2P2iUm31PUTEz5MWWU1o",
  "key28": "5sjJTmj9K3jE1RMfZkQgxZmBHMPVp6vfAVEVqZcFDx5CysCxdE3negrdi2j11UzTf8THZ3jWp4VKTqFNuLYhtQBd",
  "key29": "3bd21v3ZQUxK3kKke1Rx4nk5T7piRbVpj1tjpBdydXN6UzVTmfR2iVFpkvQtCkD3XnEAJ8zETCsKkaF82Pwxi4gV",
  "key30": "4mzwgtrtZcZMer9wMCw65YnGuX2J1pccFrknVbcusDzb9imGZqnGvJrtADdmsVMwd8CLoyAaHKpcFDwphCVDj1Rc",
  "key31": "5syvKwQU75ZrY4GQE5DonoG8LEvkgUgkzo8iJKEsbddrhVWAZ5jbgR13FQGovU2mPzim3kvoQf9Qn8kq3o2pP8AR",
  "key32": "29j7v6fDkanuncAizftYVMJmu4ApDDnaM7RZCkjaWtQw4Q1HvHBmwX5rj9H7QbdK2bGExd1hvHUzhawV5rQagT1S",
  "key33": "5Arr4Dw5smfi2km7ncHMWSu29bnf3szG4XzqfATLafPJAbDH491qnz7rXc6QfW19LYSBBzazVNfeJKi7hv49ashC",
  "key34": "kxUVhdQY1tojzbGQXuoRpYtJ5DanATwsvcGBXPR5e9TYupd1XToG6szWghL78aU4MqXUCjqm6CSdvZ4JiLCYayG",
  "key35": "3URx2dvp6oshnWAhFFkF8pvY79vMcCUTG9RiKoqTbmb926bAafyrAvkoUiwKN9Ghk7Lfq59sSn38oEJ22HzkJ8jH",
  "key36": "4jN9XHGc6uYea57viM6mrFUke4Vb6nD4B5nEASnmxRKQxGYVaRpZFpQmBpcCHahpAQCMjGFgwUmR6Qm3cPKbgAdT",
  "key37": "4LJbysMwcswFkBXWPpi3JJdhvfLxWgKMw9xkjWyxbzYzLXaqrjosLeE3dQgQL4AzN2epoo7JJyFEzeFe7Ukyjr46",
  "key38": "7skfLmm5ybp274aCscUyK4J7Y2DMtRnhUGAkiwrWr8qhD82keMEBAqeQy5vQL9Uf2NQyvn86rWucdmpgHB1XZho",
  "key39": "5z1ufFZcXBXdkzzJbTDFZmwTK1cW4n8rQpiM1VqmLpps5jEdPhjaz8kYmVphHRUQvJ7DsVMf3ehZg8YdSg49GWpg",
  "key40": "2ce9GitWwPa1F1v9ZxfPkUmAKm8Zm7Dk8KakrPi2rmiweeYuCydpURkNfUgLkqUjh4YByzDrnWbTe4chUgiNNd4H",
  "key41": "3DVig5SFxEVrqPryfErazXf5Sw7wdSGqKAHwmWw6YTb5gDcF1T6bUHf1g959RwxuYDK9NjpR5egj4HJjeJjaSwRv",
  "key42": "5ebpEhoaABU1XPNstZpGxMzpYrtSLyRTXyXKPK2z2HimuQoXezoW8YtZkWR9VDK7aabhY4DbhFD7CFeAHys6W6Lp",
  "key43": "3Wb3MpRYSUecztbPqTRW84ZUJcoMeRd8wRVM4zKNzyXRNb3Gmk9LWtHFegh2BeoxnDsRF3yBYNXJgdxYVGTMQW6v",
  "key44": "2hwrVz89iJQnJQm46vGLkULr6HGtQYBNSUpQVbQXe79jK3J3MPq8GgnwY9LYrh5W2sj2Y1fcz6nohZoUZqb3Xjze",
  "key45": "9bEfsL5Wh6Vng75ALCKLkXm77L2fLpJUdWeR77rUobLMXa7FWTDq6wXqeV5tqfQ9rymUiCg7BtJxgpJUCpgH1AW"
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
