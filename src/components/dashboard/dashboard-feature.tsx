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
    "2YayPdVf3cC8SSYRSKcFs8PrCXzCP1hqTrhAmRySrUB6ECVx2Gfa9B58GCtgiKX9Lpg2U9a1HLFJc4MWroCuAU1x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AMXLUtb7TCPrYFc6zGcX1q7Zb2Hc55rwkYSxzwkGisnayUzEPa4DmshLCo4ZvbgvF4qcyu5y3VgYNQRUGHEy7F",
  "key1": "4m1HFUFxyyR7vosPAtJAeKpqcnbBP8Q5rbRBjkfjAsfJ8Euch7UQ5ebY1SYVBrycRcG4Y3ogLjQuvZaSQTHR3iNT",
  "key2": "5ypV3wiKMiuHiEVbWttoJqceD28TMdZzLZmsdso9mAKyXTFbwXT1rSLy5rnbFRSjFEYB7ufCeYk7dyfL6uoebFcC",
  "key3": "4SB8PKoMkD1LM5NhuoP9ViqqXFrcn1UC8gRmQ38daHQURxnezjzwCgsXm2G7bNihi6AhgS2ucM6LEHhcRbFjQKJX",
  "key4": "2GmamB7fTRYT9XErto6cNB7yjzvZYEKWteKuJkdR68uE4WkFyca6qhxBsgRkRvVtWki3NiNQGbfrhkYqUubfLuMc",
  "key5": "37qM9qaLek6Cop17gNWdnyvp3ThG7nbm61JHGfn9ZeSUZo4aZePB5SLAc7RxnXYsCef5PCabQdUhd9KnQhy6jSqk",
  "key6": "BfVYKmHepnscTxQGqdPa3K4S1uJdSdKHDkXEEidwNszRuYq17Z8DSF4FsoKQKCGouWoPBmYW9TPdcnUvA3An6D1",
  "key7": "4asbDv9NZZDTffDezi7PjCGPw8Akn9cunRpmaWfGXb1F2Vjx1G8UkMaURKtmri8duj2ZSgJYVtuJW9ZbXCmJetes",
  "key8": "4BTFBpUygeGFYzworSYauKprxa8pmg9LGByxjE7tUwBVwa1gB9XmhaAi9C7bey5r3soa3xjQb4BqGE1vf6i2yqV",
  "key9": "5fyUmjpAJHmXM8kQAw5zK97Du32hb8i4BmbWMJBaFMEun9n4ehKHYuRsHbxrneUgB8mEeLFafUyB3pNgS7RqyXuG",
  "key10": "4Wcf3xoocaws4tVQwEohaonXs88yTDeETFL1mTj1Pp67rsWZzgUwiPPGTbGELGgBLF9XPy4QpQh2nj886WprQve5",
  "key11": "57etA4SvfpUnUBmaoRowjeWmzni4MEhxAbX1PDL8kqmiRjTFU7hGC7gxrbK3RdZYCHzKGKt6vEXH2QueU92dvCoy",
  "key12": "X6oCz28ovWttdfV7P82EMBjmMsqFrjUhyCjaC2bbn8yxJEpzib7bQo1pKY7QUEGsVCiUH3nxAYvrKrH1CEfDKFJ",
  "key13": "5279xVLzevudi9zh7tsoW1puDrVEooJDiCAtb3itnNisGNZPMqq51oz97guESRpQZfEKLGajaYx5532AH8KScwi1",
  "key14": "3J3LE2f26MeXcn3bizH2pGqYxFk1vzGbn1UXmUsMszTeWi4iFwwt43r4iWkLxsj13BjdRoai7rrRdQSvQhuWHMFy",
  "key15": "5eHwtGsoiFFPE9xXbCfzBqCyeJsERcp8jxjAzUZgLrin4ADrh8PsD4eyeHXvRs2KezRBeQ7MsRJVRMjCPsbqC37F",
  "key16": "412NJBCXMbejA5fiGKtPSzBsZ5XKdst1wFJLkXNxGwdu1nfWeY88Btt7qUUKNb5PgkUwK4VJZuUVQPJZziwEoQGK",
  "key17": "66SH5Jhy68tgXJk3T7CmQHgYU5R3FvbKw9nftZYDZ7f5xdAHxtpWXjS8d5XTHnmdiLbtyPnRHwWhLBDvTmthpbBd",
  "key18": "3xtrvRpd6bH93dYv7fuH6KC66Gdz5Jy3UoKMi6cHbxATqDTMF54UCrAYatYAcuJQVSCxcWrjGWwDpa3DhUYd3PBH",
  "key19": "4zpbBayayTMc4LgEXXuX56V4kXVv8GTgvA8pg2BJcHAZrcL8XvVo7fMSbDRrwL4RKxrxyNmyVCqCkT4h3Dk1JXxA",
  "key20": "3hbTyBtfKqMdHFi5WvkPfs2np7Rf3VqMMxQVmSNMz9fSzfDU154rB6e3RQHNzPeqsay3sDXJFtLtgtPpHW7551Lq",
  "key21": "3RYty72QiogM2Kwfka2Yn4bpRwYQtPRMSYga5KWe1hhyAf1LJnPZZ1ahsVoQrPfqxKSGF6gLiZ7dqSi3wFmo7nCW",
  "key22": "51hWrvLLRvZc33GvFwkkAHWPNwgjJubf3Jj8j44ED5bpTLHDR2SiNAVLsZPmmMCDGMqHLKbb5oGpoupGV7MZco8f",
  "key23": "5f6aAHbLwogLLTex1iRAYMZQS6osU8nn2nmhA14352FwuKh35WvZtfu4eLjCkWoGxiPG85KniqmmSxDix7EXfWW6",
  "key24": "5UqMvruHtzHmRmqea2bwLv4c2i6p9XpSbwpSdvgfM617XRGRPnhRCCdAuAGgMTNdTZbiKKkkRbNgNdHdn8tLKVZL",
  "key25": "qRMNet2SiYQR8ZT2Xa13Bc4Trci8h4eo2BRavAcNCW9Yy7MCBog9SVGf9jFaiQAAzSVLyXV8Jj51Au5vLdEEEiH",
  "key26": "5BA2byCyJJ8GuNPF6Sttr6V7YaiiLVJtG7SfAj43f9n38HYz5A1qpj8NTTKkFRqgN9VheF119qpMJah2dSCprJjm",
  "key27": "3EMojTGPzV8CuRMEdaLDCTZVJwmfR5BH2jz8ByvTKK1H8MFBMkrPRjKgwNvYbGcboevbK3dSsoHQnyMcBdBHRg8y",
  "key28": "3hFK23kYLxDGRK5NJagKp5TaqaNhBUT5i8VxK2URuZPPv2BsFJcoELNz5XRKiUVvZEvFUbfAUfHTBk3H6MurTK7k",
  "key29": "4pVHYCf8eB2ugbHGAo9YKQ9NgSwAPCDPFrRzWpBgUZwEmQKACmo5PQnBJgYkXbFGSkCJYtqPGq61gfmrLTmAU5xV",
  "key30": "24qFSwXBcfpqQ76hJGBsNtakyHHMXrYF7U4yUriasULcECFYVjgpHgC2BjfHi6ixZFnv1ygcHBBCvEstAZ2ZDasT",
  "key31": "8VfphgHWMujzpUzdq1tomWiDdYUJnFBsmJD59x6RSa4kP2HEWxdJJwTaYurnpnMobM8vmUxzSAGnrdcsxf98Q4B",
  "key32": "grT9GYRJDYsNZaWjc9EfAEgyCL7m4xX4DE6f3Un9gNVHfhq4n8oJLQB19ErcH8vTAXY7gHVKp37dn2jDbhBuJGd",
  "key33": "3teqMKJvvuEZZvkntRepH6r9mc6fzPbLFBBunaWvZQ89NUBNvZnupttXotUWJ7AgnbndPgEJGRqWPbc6n2aSePPe",
  "key34": "4pAm3i7sZACgFg5RZwM5jG4jcwBHQ6fsLKs8ipzfi1FhcFfKbzRLaYEtnZkBWML2uo96v98qKGswm7Yg5d4NVsNn"
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
