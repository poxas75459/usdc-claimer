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
    "2aTHaXuFvmFNuKhBBeuMUtEKouJm8pcS93EDdZUhfHQ74V57AhFEcMVuFFEJDEUK6acCApKMez4y7XvqWFCQyW1B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5H5VwSmnBEUqJTvSJzp6B8Jmd6mznRt8TrM4koyVkjNH4Rmo49GmbyYQUZiWN8jLRL2vo4pzJDDPwiBip9aUdNe6",
  "key1": "4jYb3L4LKpGBoYeQnVQgUsDFncLr2Cbb1GYLzwoJMNi5rxCGLih6JPiThwWgcDGLuYG8Yig42EFZYYtZLg3oSoEW",
  "key2": "3yu414iedVRiFYUnffdGtFJ1Vkxc5kJATxguNPt9r68sMzmx5FJEzg1eGvtHF3Cub1A5ywnvrRfz7BnHRh3SAYR8",
  "key3": "3NLcWvayVv8EBz67p2FAohEiH7tSmYFykAcZZmheay77w87iQW9NSqfAskUAgGqJKnqv8drGZQ5mcu48SMtbSxLJ",
  "key4": "izFon31p2GkPgtCpCZUSRadiUZL4jA8Xvex7S7w1RLKWBKk4aoHPZsKrS6oFiwGznrb7GYLWrDPgyxDgXhVRgaY",
  "key5": "5pyMWWU267kgPyPDZNoiLhMKZPdnEoSaGr6QJFYsbHxzoUke2TmHLaUbBvBPgfrfFC9hBtHVVvsKzyqYEc8C28MS",
  "key6": "4bc4PrnvSEpbKZ9515NGteMmHVmjByaAiXE3A46kMdyFT4737gPb5dnDZamsfMFLSgHmdNgfWoRg11s8wVtuSQVp",
  "key7": "5boEEa8PzwrfAUmDCuxCLy6fzL8kssuY7mYuVFRnY4MoxZKupdQ4mKsGSNhvbkugwsvd4gbBWyfgs19v1k74xiKH",
  "key8": "27UDFXyknJngHAKY8yDBTGmyEQREbJUEyC6JqDVwXMYiZpEH17dFsHvK5sWJncRCjeFX5wqzTEhVWfNhgXqAebmC",
  "key9": "5q62McbwWBGYFMcvFDqnNHtyX82mtKVi9cEc6gkn97hnuvCfzZ6SgBwHHvZsLnCtJrUanG73VS9swSxHmHk6W5HC",
  "key10": "2Hosg92gp9oExe2w8jvio8zacN3hpWCvr3kxU9Ze1pobTdLUwCpeyiwN8G7YSTF4HVhtziZ8m9xNZGpiL4dR5hTd",
  "key11": "4HGxGUup8MtpeaJtXKLtssB3yXGhkqPnchiJVgRVMxFSiiFbWWoStMo8RR4ScssDvVaaYKFqQ8YKydWqrQcChzJa",
  "key12": "4Uy3iucrwEGjaCpyFjzWaHswFq129mupYc3KZUoPwmxK7cMVSekrVN8VrE3BLpxXJbnDHZnaiQAGdM4ZzMPLyNZh",
  "key13": "42kfDkcxUY2DHWFALE2XaCd9fVmdL2JvLyMbeLcHnt3kBjiy3udqNXFapuSCg2xFBnCnVNHVX2K18k2VxZ8V9qmv",
  "key14": "3KtpZvvuktR55yQGVBkk3izcxQNyUVfaFp1ycqcvj6onXUMrzifjRs1qy1yfidrh5uco9kbG8toYjNFxfuSX7Qd9",
  "key15": "3tnEoS1fKjzrfdgz91hPQnKjRZskXYS6kP1SeCbVhMXWZy9pvnMB8c9sDN4j7HtR7zbQX24pzmQKB6YJ9kK5LR19",
  "key16": "2cyAifkfuxjgyuJnq37QPBEWULFb7DWxLYTuv1ATc9neFHgAztxsft1pmtsNnLZWkd27d8opgn8ghz3Af8GDFRkF",
  "key17": "2P65aMSVg2F34BUM8R7FH8nqKoARko7TupLQiiquX8sRiYFNJVNvCHtkeYeTyRcf6by94x53WmUKM475q28PohVD",
  "key18": "2oopfRt4LcPFxmuZ7Wp2GRoLF3cne83nwV3pR3HroJGK15EjPnuyScYDUFa8JJcJU9AKSPGhcGCnvmufSSvRpBiQ",
  "key19": "384APzvM6V3opB7Ei7Dw5FvwZBMnuvAJuatmRXiYuXaeSFHoPMnwsW3aAcadcUyJ6FpnhTbeRA76z7isPayHey1S",
  "key20": "4J7mRUrhHmWX1ze5cw6iepAtfNcp1cpXoX9reM8jgQbRxBsqAk1zrhvgjbB9hpbGiZpDcGfeExGR1rrZF4dVyMGX",
  "key21": "5C1QCQB5uUEjQk3i2RKjkxtKksGRLPYQdhiepLSR2HvafHniN37HrcYkq456ZtwY168xMnhGbWBd8kEC5g8YaBUU",
  "key22": "53mjo8TtKfHumnp6MzmmUoLjosBqcit7XedFuDj2jpvme65KogSGJSo8a7nF7prQsiLyzk1sGWhhxGfJSHk8B19u",
  "key23": "23mLzHVdu5HraEwRu1aLGWLsw9P7gy1FautJuaBRvbQchFhbUd9YHYsLABPb1LH2v86nQpbGFwvHCKYupBzqFvtf",
  "key24": "33huZkhQMj2BjPPn42wXUSctdZVJpFMLtgQDuec2DK7fQSfUNM3QRnfyo9kdeYcqiuNh4E64jP8YjuDKbpqQKKts",
  "key25": "2jydaCfhRqkznVzXojvdgPcFUW8pMng5haryUTMki1UNV75L38RVPJn64G22483ShTPDnnQfZaqpUQcvVfj4RAwB",
  "key26": "6Q4noo7q3jiyjdMbcKCpzte2mTL4risNAVS7fPpWLuBBoefTW6cfKAeBADrc3ZbddMAfJnt9zvgjpgMGKTMHkvz",
  "key27": "2F5VDq8dEQS6CXQfVdSGgwDGMVTUeNJLfQs9HMAmXA18vdJcE5PYoRLbXLhC2fAXBPy1ensEYFNn3D6HZprkrMsj",
  "key28": "4V5spoUDvHN9BBvHXRDz1a3pbGhop5t8jDBARVZqvrf5EdUo388L2TG2gLK3kcsiVn9P8Zo1b8Dn1UnETVj7RCr3",
  "key29": "523u6WVeUWg62e1J85kevwJU4Y1wfjBFd1UuWMzSeHVZfmgrLCueVQ5EQA12FmrF2ihXqzZzA27hwJt1smHK4End",
  "key30": "5LSx8o4bEpruy2k4fupnFVDS9hLdr33U3htYq8AKfBLWCpV9FRvNaZBwtNjpony6gRsU3329NhUDFSSZyrGfmyWB",
  "key31": "2qja8P5hAGLhwsJv3M6FDmz3YQZdr71KxnDBCZhpZjNFbVvvUpgRonmxsJdDaVdoev7ntF7VBuZeRahFGn81mzWZ",
  "key32": "4XLMnzuFyERB3RPTxomrjbnbV1o7Ux9nnK7SZRTsuoQUAtLZg6eWqnJ7ATse2oPoBsfQommdP5XAPR7qJ5ABFNPo",
  "key33": "vNAv6JyTfugyKeueiygJg3sxa8vpe1LjaeJ5mGFDRHwUS93jh4suvRHjz9u67h6NrKwzWSpmyEPAYVY2fMRDbZN",
  "key34": "UTtQv73QyHK3ZmLVjzk1sZyzFni4KB6577evjPZK4GtRvqCcmqYPt8hB53heDdATx1Mk87j1dg7Bp2xRXj3b357",
  "key35": "3vZrNdQnS3jVWZcRsd2KBf1PSfgzMF5CrvmawWbfjf3DfQqEJG3asp6Kr2J1MCj3TV9RgrYF1P11t2mAu2bc2qrz",
  "key36": "5gTqRzx3SnuF3d83nezVjwSYeDUuaqgB5eqFhw8WFVwzwnK9vKd7yWD3NPMj8zHa9pxykCpgbuwTghzgvH8SzwMf",
  "key37": "pGYPvg7evZWuHxhVpLtqcHy5kkHSe6YinLJ8xWEzBqo75yFogNkH9BnwAUfES7gfokEAap6CUSEHMsTZzxFdHGJ",
  "key38": "37Eu2CSeSWu3DHCGKiKga3BjXidzPR8rac8mGNAsqrynRv4CNumyP27snemXzf1JEQP3eMJMXBF3r7tkTkcf89G7",
  "key39": "XFTsjCEJ9MRRo2W8bXXtRGWWKdwQCUFvg54wGkteV5RcYdttko11JUuVWdiupFmY5XLhVpo2ZBKCQasKeXmdB5m",
  "key40": "JYqAsUgC38DK6gP2vpNJWiFyeeHFbzjjtpyPxTMshMeuJxXD1cd5MJkbciPrc4rPBQECgGeFQetASk1Es874URW",
  "key41": "Yncc6D8ZnGjziWQgQV88PAYEPyCj6NxMFdynzXAFAgQwbo6nFZdjvBgiQSVZJFnQmRYhxTHmQyrYkwLkXmCaWG3",
  "key42": "6137oedyBmKYBb9rCDFHZGPPy3hhYfSngnXtzndwJBs8fmxnk5vYgfZweFoAWP99QqFox2MxiAvqRV5xH6N1rAKp",
  "key43": "2s7eXVApJym4rnzoTMsfyxa5gNWT8QWuJ1MGDABJx51KkZ4SsWhVsZKd7FsrJUkEtManY3M5PKRF6votNaYRQpS3"
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
