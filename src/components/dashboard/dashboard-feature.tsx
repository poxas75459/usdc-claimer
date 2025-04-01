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
    "4FGDzD6CFAzjdRL94o3PJCRHnmbhmxtRyRv1ymF1SyBL6FaKsMUHjpGf7jvmCXYNvGKMSqiTvYS7s2371LmCBPUW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4faPGPhVKnVXnWRVzfGeQH3Nj4YB6LCnf3axY4LsYqVbsCt1yYMfGggJsXYaGHQmuwnmbGydxHbt9U8x7D4pqo7V",
  "key1": "4Srnrd29PN5AVfZg9DKWABico25GQi6Qud4UAdt2y8PDrqmFyxCxnMUzzeNtTzTt5HKJBqPrvfM3DtQbyMQ6KbHp",
  "key2": "ihcXRWiL4LUQtxkS9ky4BYZeSAFyEUsQY53M3Vz25wczbiPcQQ7C5AWgW9FzLqijHyDoRmJ8qNk5AZQ4spiftB9",
  "key3": "3NftxZ8SPs4fdBWCW9Gp3pdFCq3D55cXGVVCyeEv1FGkh2oV5YVhDP7W3GRCqvjTD9R7wtZG4s1g8CdPRo4Wnz9D",
  "key4": "5HK9ndk94hjtCBSV7Q8qFVXm5n92kvz9QongvbfuvS438LcMcmfLELCWffZkH3bxwvuvu5c9WnKvpFPSQrmbKEy",
  "key5": "3jvbJCFiPMwhYiNuYYnbBeUqWtViVLaKdMx2AkDo7MeXftn2GL1JQZbABRyYxLQ8JMR1dbM5gRdNQ3oVL8qYEMdf",
  "key6": "3c82oozjSxn5kU5Xbeu6iG6d3brQ89BNDgvssmDcVwGGgf6Vsk6nUcBi4wJ9Hu2F7wZweviBPugxPf7f6Y32tiyw",
  "key7": "3WdgdUgPwyxPAKWvgxvaXys1u8BGu7qtXVFNbKgZcWm5awgByAmr4GL9H8bpx5PGTgsVz1aeSujf7PL55zvwQM2R",
  "key8": "5znafS74PkEEusvDDMCMoReXXGsckXNaioPtHDe6QQp1aMdib94UaSALz3bjp3YQVk8MAs4UTzrujxxhRFXf2Nte",
  "key9": "2E6F8Nd9myPLXXceNBhTKYwv2emdDD7JU6TfHQ5TUrcZRD9sHT4FawGueAUXxuG6QcdnyaXYnsHAfVDu7zZi2v5",
  "key10": "3tHK1mW6UXKNdkLVGgfjFNKLkypWGBvtfJZzncLnersXQ3ostCBUt8Rc9xaqtMjTRv9vLbMtjUJkpRFsqWLiTiJY",
  "key11": "4carAD1rybF7LhMgxZmp4oaJjT3KGfkF4fqoDDmQJqcR3rRwAnThP3u84ALvPf6a78C7HrYqkjrV1JffJ4w8R1PV",
  "key12": "3Mspd9ra2bpw9j96YifXN72FsF8PPbAwXdBrEVnfGpfk6iWhZ15DBfqQem2LtCYNeGsJUfeYZqUcBTXrPUyf2m5T",
  "key13": "5pEEZV14ZFDLui8Pw9kfzRyRAQvwbRqfL6VUxcW8a7vHMo7M5ear7X6bDeg9yCNtsG9nfDnPf9ed6nmScysei5W",
  "key14": "5wbqDfwbFRVjg566PaDGCS7GeYoyX4bJHNzDJnvEvgM5vJPFdwbupXc2PNim32KcKXFxvhxzgrhfGYhvAepyhrTG",
  "key15": "5hV7XHAYr6dBWdEXyMExr27ZoLM8773PidxD5D9u6caBsPj1Zbspg2SR3WBKyNv3yeDnduUv9nM53RD3yyEtmV8j",
  "key16": "5nU4o8aSUCTmSfXhpBFhiLwzCRi9DmLK61Xh7XKP9jg8Ca8rB9JXytRSQUNA6FTmVpfwJ4xr2KNacx6qwB7XkhkB",
  "key17": "4e348U1tKqYh9twqwpNuyo8GVxNKCkeMbTzkc2VHQYV97EoTCPUDRdG2Fr7FHXpTbzGj7PYsBHidAEMLEG7Vo7Gx",
  "key18": "2RzaV7YpqCnWziiJpmgdS2An3QQuyJTXvS7KdmJBEwVm2eTYsWfi38ChVSxgUvMTZw4hrcDEeBjhcmAjBRQHWzeo",
  "key19": "3CVFD9Z9aLcDLS6msAtG6mD1jbJoTkk2jo5cofg3vZ6AHcoHHatrzpoHgxCTNP8DXvE9jNVto3b9oJNB48UFixnx",
  "key20": "3Uy9wQ7H2mAa2r3ueBz63KfAURwd7yv9wXcyXZFd7UF3mLLxhrXd5KZxT9fZqkPHy6wtM6tAYTVteorcLtNmQT6M",
  "key21": "4JsfNWedxJcxtzLRtFwn9UnjRH4BQDMDReHMtB76Mac7ZGJtSepLTDyuxu8MEK8C8iv3qPifR3AQLemveA6WrauY",
  "key22": "26naDuqvyPYwfMxfzcugu22mdXAg11BjcjazRqhxT3TWj1coSbHUeDYMNAJQCK3DvcY4fPAVWoyYtWRA2ScV6Ypp",
  "key23": "2h23ekLXEfKfAUoRRfgnGAADFKgNqvoKiEjH5HSLJYermcChKMkSFAPrtjZKMxL6hCHvmPjXwqCmt7FL1qLA8K4D",
  "key24": "5XioeX5nJ5GSqNi9DCixDWQMxFKpwoDfa1pqoZ71WJ7CSQhrYHeiKHtTW46fx5nU1Pfugv3fGcEmFS9rY9T6YdmU",
  "key25": "24qhgtUg83KFmz9jSbEJ72utMV3CLp5aaXvcoA99xAX6dNqvSzNkxQdgEgHB1DvCEzNRsAVoQDkFzrpzq7LZE4xD",
  "key26": "JEjCrWNYnYVxNwPaBEGGqXwf74KsyPDMnJSgtYVGtUPcribpXGWiTdfGt7giSXrRBaRTUjebjfZfAi7P5YjuLZk",
  "key27": "4cxA23YKcyLMUisDMg94FuW3oUVwYJjcDgXyWNcLsrcSFQ4Dyx8mkf7px9pwFRXFxJyMqxt4JSoqqGtsGs33G7Fy",
  "key28": "2jKaDyyLCLbWwsr8vgtfBDnjnaUJjMrBqC6D8cvnDJmDxvKCmY1Z4ScFDb6osMJAwsXFUbVDk8P6GGX3Lbt7hEU9",
  "key29": "5rnWTH65oepQ8sCFExJQifJiwkNkAHKoc1GSzQ9TUamLkyc1neR7vwCZxKgwPUyS5N1ZZefRiPhkQXpKk6ho9i66",
  "key30": "3izn5NL3fjHDdVe3e1om55PGfMHPgtWyY3wZERQAD39LbsopESd11yZiHqqWTxVR84SKR6xu3hzjQ6exRKxd9qW1",
  "key31": "59b2KLSNrU5Je16hDqamtARbR3PCLtoJjoheKZ73Bg9noVBia2AYiYE8xR3TqH11ZPJLnFXjHctA2PbMdevp1Dku",
  "key32": "uNhJeggjD6Qqw2ThGrqt2Gk5snDin3PXbp9cdwL1ce8vQCX4GuBLVWUPP6qYZdJzmRh5rbA4mPKZK5SKKWghHsd",
  "key33": "4chBPw9hqCzt5nJTJvNXwudeM24kCgdjtPTkNDnSrj8C2vQGJ59aieesZuoobmCFp9KQHS5mh8H249byXm1YtJpW",
  "key34": "2eXHwUXbR4w14f2MZCGNMi5sYADPX8tNihwt1Hho9LfxvY61so1YWozV2k7Lo8tFB1Y8Kx6USDaSnMB1Bej9cU7E",
  "key35": "2wLkJmvjF1iuFvYchSdFNS2d1rZa5jnZ6BTcavte7iB2CtJXbNknh9RmrTgAb5DNTNuLCFsGQwa8gRte2JBR71P",
  "key36": "4yVZL1jbFQtxgvDgsMiUmQz7NNzsrNUfx3EfVZWpqitA7k2thtXiHY3jyi7mgsQUw821W7wE5jS6jr6hJvDyRYjp",
  "key37": "5u3E2HASgX16o2uFocUNmLTeKcVpcKfXTcCY9Mhdw5g9krqEQD1nUkc5quGTveJ81MDYJsk4ShdKt17usKsgwk54",
  "key38": "2QtwBNUY8QMj11C2c8PCq1hVmz84KttUxiCMjJYGpYihaQV7zNJEYsennjNMucRpKy2gucnKfh73M257PQedM1z9",
  "key39": "4CSdfr49XDh8Bgu76PrzPTEpM7mBBude4XFdRKA6CctJ1bmNCf517AoZXbPaG8sjBR2puZXQ1dNS7DSSSUN2bihZ",
  "key40": "3PC1RgDykqrftTvEmXuMarGmGN5dKS4en5QZgKQPEMxjTwCdEJ9ftgi4r6apapbcyAArGPMECXWRdV4zTm8fWfK4",
  "key41": "3viTSrnFMVRKXDJyE9Bx9CC8HQdVWKc4hsm7mH1PFSN8qLz16jiKxMBSqKMuRzgn85wog3PQ2D72chjtUNZCKRyT",
  "key42": "38KC4bEsvuvXNKEFnr3SZEZs3FemSnzs1b46EiK71DANxoLUHpSz9D3YAw6FVwd4qs3jhRYwyzFfbmBnYtjhbj4N",
  "key43": "9M4UqdMURHG2xEZJ9Hjdo1c7SFv8c5y65vwQsd19h2d6aNffhxuurdqMcKwu23sRL2PPcSWhPLFAcZTnjZqPXpr",
  "key44": "4Sj45fM29UmjjQfeSGg2wfpRHA7fMC4usn814AmU3Hc3dzrDUff3t7gAMbWjucizsq1smMndoFSLGT5WP1YmXzCq",
  "key45": "215ytcJbiE9qUCxxw8WXBG1GRHwseGBgiybbnQ7AFMgFtFDDcXXJ3H5hEphn7kHgZHstmP4hcy82qVE4PKzjicaV",
  "key46": "3DK2FqbUSNt3jyPbZ3LedTBT13DShTdLC6cup2VDRhZFuq7tgU5mTedS32Q4KMEBeua1271oig4XfvwyYsBr45D9",
  "key47": "ijiHyEeAWsun6eXEugu17AfZVVudsixp7KqPHumbie2FF3LDDY9VxXGF4YiwiiqC7uqb4taub9pLRVPC4uFLV95",
  "key48": "4GZudNxptqtE5NHe222xyfJisLboWiBJGn4x5q8mnrxnzfqAm3bpZVeWAcUmm72MydYFPcJcVvFSMr2jcwTRJrnZ",
  "key49": "D71NRTJR3Ph6H71EneeyQcvra9iJoiE5kp5JSFGbmPVwsYaMHFGcrwY8UTBYor6LCKBmtmiyX6vMPhLc6YY21m6"
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
