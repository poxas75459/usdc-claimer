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
    "gp632Uy2JqyHfBvRcMWPvqQ2zzrF5oQYR9hDjhR144McWSJ295bJYpk4fVRe2yBHymSTtFuVT3MSd34TsXbLu4v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BufBSySbbetLMLyRCGnoM6QM62xXpiVwsurJ97Csq3UdAYGruhnSBjN1tc5DwW2mdiXEBf3MEKf3WTXaPZZ7QLn",
  "key1": "5T2Yv1DmtBsfrCQoCuYjgcFCkp1t41RxsE36n5cbXGLeqY3mD6YTRTyY3NFDXjfQ7kRJkdxezvaTtKzrNTvMFfW9",
  "key2": "2NZDuHSDAc4DBE9wTVs1bvxciSrirSy4oUnmGiFwV2p1rQusMdgRENzgGAqXGygM1CjJbVUVc6isUzEe3CUJahMp",
  "key3": "3eFMffodLwwkmJYay3VB4LjKfVthSZyg9C57xJhMdLg5frQwYrwnqbqiX9F6PTWxfrzEzoFwa2MhbSfy1bxb6yqh",
  "key4": "4eRQ1WHaGvpRr57MPqEtyVvGV4D1Wga7nH5YtHUVuVDXxBApoNyF8xbBAsnCsMSNAo1KWkAeThUVDWMeRDFeCozC",
  "key5": "5sJg8NEx5MPwX7zuYUB4QcgmBfgm8bUqMh6aaP91L3TFiX7vv2wYtEsbVeAjiVNGxN1DfjSqVJeKdzXjvS6tCoZi",
  "key6": "zA5j2UqDp7Kg7UQggG6SoLJyESdYJLQgJbN5hSMJaPbhEwaNy4jjcn5Gf5fES2PffRGVf3EeeqPhFT5YQxcgATd",
  "key7": "2cBpvMsFoDchhKY4n94PgeX5hTCfVYSUJzqDtFknYL61ZCRqCAhcTjtuKxJrroqcLc2EKjoXmckR6opnWR3qU5us",
  "key8": "3Wv88nhrE35LCCGF8VuYyBWAE27u8aW9KjZgC1oatVvuUoGidpaDg4VheCuheqhaTdiP7Jdt8V2oCa1fcHV6GGVq",
  "key9": "ju6dnuUkq9swvxcZdXkeTyd1saFUMXTJ6GWNLLjmy8WwX8974FTKEnKSApNspmbZ9Wfu2a6MhwV9qnheXhhUdhD",
  "key10": "4X5cdEg7EjHytouE2Ata2iWci5L7Rm1HKFtGhekF6Bywtptx1gThumEfy6kcWfb9tz25v4PJ4hEheehncpmyXs7s",
  "key11": "5MtY2pChxzcTwFT7u4EeAJvQ18YNV61njzx9C7ecMHXe2CJh8cZFtAyMouumcjjk7QcqhDzpMKJLPuktFL57x43k",
  "key12": "2Y43r8ptR7sYLBGH9odoy8uEoZb6GdwnUFL5XogXd2Zs8e6TTeTwCHAhgfkitwtvHwznUQWFkzTkpddNEwMV14mj",
  "key13": "2CfNwVUoEGdwp68wQPZRsrCQjCdUPhXbGkdtjvRc7sqUbzcEoSpXMYvNGyZSwRqtdPWMxurPShukXct7rZY4aSye",
  "key14": "2mZK8m6iboryhHbjrm8E6eoCHY9nhUkT22QFishB69mMZejTCvgFNYVXCYEjjpS1VaqJdTRA4b6hqqLutBZuZQvv",
  "key15": "5EpmE9ENwqi8nnsTJdde5xcr7cVgLKXfg3eC2fW56TLUpLsTPTmB9e1Rceay3V4KSNA5Mf3yyeHQsc5YYEdgX5Kb",
  "key16": "wFqiUSo5b81WeHoMkhepsXZGFK1g7kmiFJ1cP5vrask3wkPkjxPjQwAX9s1XCUvdhTPCmTN2X4stKK1aZxX4pgK",
  "key17": "3Q7M56HrjHde1SC31gDTro96i5MtLbpzNjFMyako8t76xQGdyfgorM7oc76NsZJnuoWoZFPmv4smQY6zAf7EnHE8",
  "key18": "3zQogHFDiRHgeSSLqotMUjrpoV4aVL4eb9obp74joX9kPjPT9rTQdyYMkmjAvv1jWud5BJir78bZTEpq52sVLGyH",
  "key19": "667rE5vy3RzsAF2MSWRUtDFNcVh2r83QvWcsnkULJZnLPdaRkF4WFsziP7Bsu61YYbWmJH6FyHGKsqPxmakpqrHq",
  "key20": "4jXPTKqdy3ABq4nzZP2a3Wvk72NCkhai55SMeeyMpUeaLD2SxTjspUrAkMXHW1X8mSCjo3omUoveGfc73NzYgAnx",
  "key21": "4D2mzMFzq2aHDR7ADbDeeTibbjLAJKgQnWQ1QNh3yTxZbh4wQC79yyJcgRkUq1MWVHjXSc7EWTBiFNm51Pg7CXtc",
  "key22": "5XVSKvZeeiLZJC5jghaVMMVazaSVG98q2vcNiXpo4sim4zTfKE2HdsFfUPArGLERubEuLiHzksg9kqsKvv3bND7p",
  "key23": "3Qiysk6iWPyg5J6ewyVLpf3YmREBebcPK93ZCG6pLAD1oLRX9ULfdBKWcooB8BGN6c93W9eszRdR3T5hbqEnYmT9",
  "key24": "7qgJQVqidVWcTUvQYNKvo8ktxD9uaa7QxGeqLwikvXWwV7wUo3bt2SBWA4v4GbxyeQrUyc63FjWf8wt627Z6zZH",
  "key25": "3VjLVnGVYLKL3vR8RKx6iP6t31PjUcgPxh5tdW38HrrDv79icQ8QruWJrPj3tX7kWvvtFCBd8wdC4LtWxRksxhED",
  "key26": "3SFQuVacWTw58zwhSL5AmsY1NdruUHt3ikyh1CDg7NXDCSBH9u5TsoLmc3NbUb1xjUyfMgBSqgjsDQk3bXAwGfGu",
  "key27": "4nRFmvsFqHs7pVEXEPczWv986vLYd8AsHMjZYVm2Hk1TRMBRfz9edRJ8hFgr9MKXG9MaFdKMN9PuVnEqnjWk9v4d",
  "key28": "bXTxpRsFgCuZNP87tUZQLzbSu521MN7tMnbQmm7NuJcBvurQsgpDt6TtyxRr9CDR1GytrneKZ8GRnzQR3dMozYQ",
  "key29": "8w63B4KUZoe5AJTQsLeTNC1bscU3EmxQ9hmRQr5brTeTZq4Ue39xWejLC7UgoLnDJSYDZoGewfvPNchUjPgny43",
  "key30": "4LZUAj7hiCVBqaUBGYiZWH9gbaPKFWgFP1pzxUaUXGANpCHduCdhRtmD4pwFvCNBpvD99iF6DA484GxWS6yfkAG2",
  "key31": "4xVwaXtCUYsPJfF6U3FxUpaS3qYzGGaUcZNNERc7xCps2iGUo3whSiByM6jQXvid7MNFt41CJQuEKg64xgR2FqeJ",
  "key32": "3YMKNGxkZuY4HQZwFfq65sRwqac1zHQY8CvJkSQk8ESNM9nHWYaw9aB232mJisNSbSZtdVFaYxrskdfp3Gx5UryM",
  "key33": "TSw6RSysyfjyfQZjypZCwbGBtutHgdwzTmpyQYap3uaF4pUNDTqY4bJJnSmUjJF15S1koVi3DuBS7Qqb2qKcGFG",
  "key34": "4aNu2xeeGCxNaFH18Exo7se321znhiEdMBM6SycxVaQv7nE4SeHKGiZV5WNJo6qZsWw83GPnqDsTgsRcKjwSahrA",
  "key35": "2b62q9VmfzhQwfBLcyeM9spKLBAJ9dL5fjdyorLm62uK2YBP9vDSrKkRH3uLguZA7idZGjD9GXW4QBcFPygSTSeD",
  "key36": "2hbJztytuXVV2DFupSep6odtXLBuhnBUm2K5S8VG4EenF5q1KEG1LLTces5PTxEx9DivwGb5DmEkpTVSD2iur66H",
  "key37": "63oJL5ogncwLJCxJbyxt9T3r1PHJN9iYPen6vLDmS2J5jDuZaU36LD1YzyoDAcrk1cZFy4JgsgHMBvxy67BaWMWT",
  "key38": "9wc6UQMfX2gfA6TkWWn52TNj8dwvmXL7kma9UNcRT9xn1euDVcGv2PrRDwjNAS8S8AhaqPweHa4FRUXE5wxZwND",
  "key39": "3PfbzhUWTD1Ug9yHKHvyFdxZhZXT5UXY5nka4FFYuCGVwFRBhJ1dMnGs8Ytjf7tXbm2vafUYmccWqtAdMfHwTwtS",
  "key40": "5KB4SBe8ay4J8LBHDmqP2j9M8kswsFrfcgAf9UZYVv6xg7mrpbyj6Ctx3NRKZ7xgxuYwegAtT9yracwD3PYPUjxN",
  "key41": "2z36EuEnKUJCUXRFAMcxptCE6nrJkinV4cnNqSuBGRVDUFe2ZpmfxzLKjPu4VN1D7szcRWKdhnUseuDWXjRj8Crp",
  "key42": "3UMFeyhpha8bujRqX164FpJeKHZQo9UWQdmpKk8Le3bsSg1e2TxFy14kdhEnGvs25S2yiADqVhC7Trbp7EXQCbbd",
  "key43": "4WhRX9Lkke1CopzqywQTkie6dqMt9cdh8DobG299dqD7CADGdKZ3NSvTXmy3As5cKDQMsboQAKPNf2AnjLPbFnjN",
  "key44": "5GzNMTst7sqzJSSqEt2jwxdW2HD1pL9DnbpNbNX9mkm44UGhd9ButCQpGiECLwVKcGRCoMjniFLFC8mRiVDQS5M6",
  "key45": "39sBmebiRFGHofzVy2U6B6CPx2RbafP7z5wsJDBQzXZQLkAAp9Vz9QuaqTzySqNSmUPtw1UPyJQ9UN1gVC1dEfXe",
  "key46": "5pZ6bL92nNqWXFm6TdVCJC3Ue7xQs5civexjmtrr9kD17bDRJWtQT7Xh3itz1w6CmaWiqimBPN6iteg7U5SXFKoY",
  "key47": "6522dzukLF2T9VNU6KqVBKYcZpWhQnbC6caVNzPnBYACPvXqjh5FKdwAV3jcKkM97BontrFjnmUaswZoPJi2kPME",
  "key48": "4TATqNxTw2ziUPBHQVwioD4H3vP9teVz2ggBFy8yVz6KxboPJMoXM5WzGdW9gMo4sGX4e4XJMAbXpBK1ZdCT6Nm9",
  "key49": "51tGei1fVoyrncFEYtt3JXpTchYmq6Vc9pbrTr9QZGLMv1eWvSZgf3rFzfiePUsKxTESJrLHvMTkqPzrDyp9wtf7"
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
