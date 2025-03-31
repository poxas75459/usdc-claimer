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
    "34oEiFrwtQY4Ljv558To6CwY3bdBg89X5AUp7RKNfseBXKPvi9S6Uk3fqKroBDrJiwi4rq94xLo13BJ6vMd9vVDm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qYffvcnN1FesZXu5JSqwnAU6iEEB1A5jR1kvwienAvEB22JFCn9BMjeES8UhKsavh41PszYzr5ddXmr4cxam8vx",
  "key1": "27WgfjvdzydgXsaZSugP2mW7WPsDvJ7t6pVcG3QQW2oXvb6K2BTcdixK2jrLkDGNc3kmXY7nqRo661EhsRXnkk8E",
  "key2": "thk9ue3uhkobJDFKhPPTXK8UE7F92W7gwuYjdZkzEvsKXts99ZAnJ1CP77QbTG5fm7QLSoVDH4NgS2fdqiCqTr7",
  "key3": "2EbhPmtZ8HUiSRivhiKwEU34au3RyCCuNrXQCsFQhAXLbgU8AVa6TNmA53yYNng8V8MVrWWQ24cDNAKXa1ysbFUc",
  "key4": "JFj6RJPEKzdZrVWgTXvq16ZDFUkJwxyRCpdYieTweB71ZA645uW3ad8AtYU6N3ven7FtCgk1AvLMSYjJKwmdjym",
  "key5": "vAJrMZahEN3c7BTt4b2SDx8HXMyGEvrAEEXi3FHGQ92vf3xwKrhGvEP8kzcpGCgyFw7Hi9JYFpAU79MKPDxfiYx",
  "key6": "4YboaCUrLgnngfQ1o1xGM8XwVhn8JqfGpUzWvJXzEVG4M9WVUwcs1EaRyiSyWiGLHgexKhbCgLBBU1gFYrgf1ZCF",
  "key7": "421zhHmWKfJ6bk591gUyhzfjT6gXQF6gN9gVsrXkC8G1fxwRhphMmPdw3tgBQrt7RVJxNL7VVMRjEQgKNuYyAdn2",
  "key8": "4gZcy6qF5GtLbWtN8aQvW5A3kmFHvS75P9Tn8q34fRjR9gL9kQyKMxD3GfyhoucsCbvbB39riiSXVxpWcSeRdC9Q",
  "key9": "3nVxXxJosoXuRnq5vtaMLmBhADnQUgjVawAUw7Rmud1WcanaL6RRkB45iGEJ3p25MVL1wQ6qBEjhVq2Yeaxt3KHq",
  "key10": "4VkBHt9DtuBQ5FQeSo6opt6M5FjRzCXA3sdeodEvSstqyPTNFoRNeNr4Gg13yhp9mWN2USMhFFbB2x3CxtczQwMS",
  "key11": "334Jgkud9Tk7p3VGDm211n2JgiWRu9ZkVvumy91fxZ8ifTzaq2dxVCiP4wyWpBGGYcMHY6NcWihm5hxdJ8jqvAkH",
  "key12": "Xmczeesj3Dp8zpwajdbWGGmYzJK14ArFKS3EdmDF2FrtG1Ved3KhGVN3EnaQyhsHQhyTQNdXr84fXoALRXmVZq2",
  "key13": "2xzPJn6t3zPWeM7FFJ35LC68PvVSb1YTLSnyTVoF3483sBrSetYE3isTZmzv566G7Wd2KjLJFxHWGU9ixLzFHEEE",
  "key14": "KPKshJA38mpHCuEYGwn6FHYaPSgVnuw6TLuZm8e6NCMzjXqPLnFN8DWCBAbuqSwMADQqeob2HajS9c76p3SiYGo",
  "key15": "5YPxCdAF5ENM79XEercuRnBjYMtpiEvM9DLUnRRNtZLNNYn2eahwFhFPwDRmVqNGE9zMMj6HquetpSZBGdUsR8JS",
  "key16": "5AGyoc7C4LSfUqUBAceLXdbPo43ZP6KXnwuKLuXoHmdUJmojK9RLoyJPhiJp9KvbCJi6Tdpo4YZCQVXu8JebocG7",
  "key17": "3JA5YjgDHC7yUzAx1f3QmKwWi31e4sA2iM8gvQ4N5qf2vv6N3ZJYyauCV1ERBikyBZeo71yFzkq5obTkEwpQH8L2",
  "key18": "3F7wxMExnKC7t9dvNrZkh8hj1gxLRm9jHb1Hy344ggxU9sqG5YGEzgYMSkHdfPxRUYCYzX9NftFz7YMQxrmmkxLL",
  "key19": "2TvBLgSc2fSpuDHEaJ4rU9gc4nw3o8Cdonb9t2kZDvACC8Cg1FGEhQHgs1uLoDVD2Trgsa3ywteJos1d6bnRjUK5",
  "key20": "3uoWPyFcYEHau7gjQjtetEdUW8kRyFoSq1gyDtCHmaDbVJBGC2K3vyxNWgZty5buADdbrSXWbWxQf1m6sB6jwxZ5",
  "key21": "28arDcKCc9nsudAGAzCpStBTBHYQiSfDWwgi1xwsqqs8gJrRectvb8aa3rbn9z2TACBkypQE1XiEADKWwxMjLpBu",
  "key22": "4EkewkTgy88wcQukoMNWwYFDecsd1wuZn3p319FDGgBF2LssVAVTszazE5igJ4bioNXfRP9NyntTdHTT7q21RJcf",
  "key23": "3DynobYEHBMetbXZPXyEsRynPZueHn6C63VDSxAuDw5Vjdc9F2p4dHGQbohebbBbnWyFzbPzno5DFAU1qsSEsQ1T",
  "key24": "Mx1i7mDxwJCyMkxPhLhW38B7cb4amNLPC7t1MZyBQj5mGGdSArDSnW4kCMRZqExFayCnzd3cBrpUiAh1YnmdgSP",
  "key25": "4SbNuFfmxm4jETzTtu87r8sGPbZqQ8mwBNi54AKdJ6WQ3cbStDzHvE5W6fDhLykiNQeyvm1bwmbZHTLZrDRtbctM",
  "key26": "4dSxJoYnnJ1Kaq5E1Ft6nCaSnXHySdmWSCN6hQQzeCfSA2R8rUi6XxQYNgwSoJhg2sJ4NxJCs9TGZf4yMSnLwq1P",
  "key27": "2W72KRft6Wsaa92AoxW33EpdegAmSCaB36KuWtyCCZ4nSCM8uxosSCEhJdwHkY3bAN1LLCgJ2U5bpZBFwNMXHS1U",
  "key28": "Zf8cqkeXT2qRsLhTdJtWJjeMNYUQLJHvSf4FD1YJauuLKcJpRymurFTSXsdVWbBm9z92hy2hGKwYoHz6nvQB8Md",
  "key29": "3RS11eqgHA1SbtbRWRrdFiqMEpBhuKksVL5ssZCf7JJ2y1jBBpN9DP2v7m5PMRiWbUrifWaYsQjMTt4gDaiJCqhw",
  "key30": "3QwEyGgoqPPncNwyD2ADtxwhCzTKmeN9SLHN9BisLYwN3rekCiUbx2LToXQtihADsf6YhovP8ZvcWK717FThpYcX",
  "key31": "2FDoNKWZYrQtrhebQ9keUQD87BzptN9DhLTEHr7G1QGbRwe1JirjaRVTBUGE8276j5yEdhvhgEeG5BPdoEBZkHps",
  "key32": "49GjeehLFN4q2VzEpnBCTQoRDq2N6K5oLZkvgYzB3Vwe1tPVR4JQRyuU7JWG8BqgtdMVgBn26vCAywVmMc3NkH3N",
  "key33": "38DKZVATKA68YgkHRr2ednaHjY9pLUxkSH7sb9YHJosxfcMtiwzLc6ioKcVZF42VDHMEXwcFVM6GReXncprvN1Q4",
  "key34": "2f9JbsXi5CZL1GxAvhZbJuCUMtEYhtuUbF1dJBGzCovH7rqvMPE9LHiCNXfQmRB4q3gshMoeSxGVnWFaeptxYr9q",
  "key35": "2tMwRuqSDuUYuyAW61mkffZow7px23x2FyAhTg2Na3jJhJHhzLYmVCRG61y7LjZLGAewcZhfSut5iFCrBhp2WMfZ",
  "key36": "4Pmum8DLaVWdZ1syNYxtP2iXikZypbSAg5hjAhWDAvGRf1GkFQQfUpHYPFU4yzbnmYAXybwg3UPLjDsQst42BTQV",
  "key37": "4Yc4zLqpnVDgBmbwaWXBepyVzdRsej1MVFUKJMFB2V6CWqurnyyfAWHgP7Y1SNYQt17WJixYj715sCRDEs9cNMbL",
  "key38": "23CN9SwedcHkn8JL4HwbGuPTasvnumSMPchL22kknZR2y2EXdXoQYDbMUkfUmDQTb2sCtze7pRP84KSVBXQ2AN2Z",
  "key39": "4YTKkHPDfE98c6AV6HfFBC1nskYzDxde2LHiFPXqeV2kpKRaj4QGBFtd8qUpftdo6cdkBqopho5f7BMYvApZ1wxw",
  "key40": "34VEEf2nVFAEomykiRQDcFRbXLCT165vXSSHuYPhzkzXur4nbqXkEUi1PqDX6ggRpfmhwHSsveXMJVynBWA3yR9E"
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
