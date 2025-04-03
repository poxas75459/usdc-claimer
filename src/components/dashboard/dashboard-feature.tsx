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
    "2sEundYKSkrDrr9xncHufJjZy3pMpxk46Bx9jE2FrAkaepZEhLL2jbNFrHkLNyoiTMz2fchNmqMRk1vWkWC2nRZN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4j9qq8688r16kexv2MoigWFtCEd1E4KCbuTzr72D1vej8jtK8p6FXcPrzQHuoqEoke7xk5qEnv7y7C2gedow7Qjg",
  "key1": "Z2HvJmv5qXAtZmtbzDKfz3jKyH4iEwkDU1Qws5ZFskBue4JGf1LL7Cnz4Gqjeb4QNod51Lq2GNBcuyrJbcMVtA4",
  "key2": "3JuhTvwisppemfkP8vtK81y6LjwSHPz9NBHX1cAe5v48oLbRsWA9TLKzc5HSDuKgzKZDx2SwRLGnTaHBHRFC4Xrp",
  "key3": "3dAuA8viTMVhNHTo21kBmWDa7x1sF77WGMJma9trKydhF3LKuF6Y3S3GF45p6wfJkksN1H7PzTa7qPCesgkrcGDA",
  "key4": "2Mq5bAGMizz8f6jVX7T6XJS3rT4MNXv1wnc8BeBDUfLWefw9HraNZRVh7kwkwapsdfD7EYpaihDNpM7nvJke1X9G",
  "key5": "5CznYzZJcmvSUP7XL2oDTBKyZBucMxximsb5p3C8xGCkeXheuqBSWVk3KsbkCmT8d4GFgh3ck4i3MbegyzQwzrBK",
  "key6": "5WrR7NkjjjeQrXcNxV3rE4bwkuLf2hsMdUUifAm8Wcqu9omu3PeftF1akRRFLqnotDz6UmCgHpRkP6f1UyPUCDcG",
  "key7": "5rDiJoudF8YJxkDZETg2i9FjyCwGf9kBjqrjK6rbqnVVAhjHSBfnHddJJyXEA1awvx2EGYoiL5uw8exTLFoVd19R",
  "key8": "3MRrs3f5EV5gKRWzs4iwbvKVmSUwxvg6Qy4g6N5CTg6ZSn1zpn6u39VqxpQoG2FD8Dh35jr9sz6uByn81TGuSeX1",
  "key9": "5fVSd6wRZkUfDQ4yuTjGCYZ8KFqbi83oGHDMTAKan2idXG44oTwtcr3PUr6yLbrq7guk373NTE5ekiwpuc9f5nEB",
  "key10": "3EdM6rHo1juTCjuWdpP7thGWRQWmKTdKMKDmQ5UHm2L8JftHw4o1khSBhkNEsnNt2VJGp3qpUd9BsvYhQxJCNC6D",
  "key11": "4nfgrAxXb5iXZCcoP1r5V8uxe4q2uxw692Q6DcxEqMUXV1Erjpm8p9AoLK5dyPfJgsZC1bkvL1hWVUtv1o9qnRVj",
  "key12": "5zUhPddXHkKU4srMmSGdrVa6Tf1sWRGUUH6BRTDREexzWWsE3tTrdbG7GePQUXWQm43yXwjCvUhp8MnpEL4SjdNE",
  "key13": "2NS9ECaya5EKsaxAma828EZ5WeXzWU95g4k3vXwX1zrXexV95Vn2h4RTnAynewMFy9cSh8D98i8C2HbKVdnDmFAa",
  "key14": "Vo1GvGVv594hWU6ewQWynVimfwP5bKVhw7GSWPhzQyQKFuci3rUK9kDVP46MZw6HthMHRHZBZ9upUdwq3VCeNay",
  "key15": "3ie1NAbf9sGaFcTnVX3tUnhhSim96KjKNBNHiDsC8juqXCV62iYvfw2b6mhDYjTYFZdjEhB9QMGaUvmWPJbaqRr8",
  "key16": "4gnKJ72CPnUGVf43AiKJBNrAtiZfh1sLXdzXVcXkdMpjAf4DeqSLk1CufXCrnVjejnVdu8ro5be3URDFiULkkBpZ",
  "key17": "3GPLbfge54iviKDr8Q3M14BvJBrou4junKNnEbdfDFRWwkUXUndRGcmGCLFtMd5MSfJD4r38L2YX9Xv9friHuDFN",
  "key18": "JH8Z6RamEFqvGobXoawAnXg2x3VRMQ965LZvfn36NJWAYAdDKQADRKv6sZQiF77UZe7fP7y6uoEKrcRWL5SSbKu",
  "key19": "5WmtXapNxtZiqBps3rd4C6tR7dYPExNVHcQzMjGs7xGfoBm91xFiS8oqBYRZFQmwZ8upmfTpRfbsottnBfPLvabf",
  "key20": "31UyNFPBRhwLnb1wywiSJAm19ApttWNQV1mm438wtdT3iRCPFDEmsW4R8B18AMS2JZ3mfNHj7bwMs5RFoTq6mdqR",
  "key21": "65WAfecDJ3dfcRBk92W7QS7Tt5KdXmxzkAP4zrT2b6xoPn1br9CfzGtLiuonYk1mUZa2aiSNXoL96K3xdkPj33CZ",
  "key22": "frwU8VtucDjwVxgVsvSx78PCXS4doNQMCmnRaNEKMApQEqXU8PyyiSLpWernxwnhNkv2SLShZinvijaTXk2EGsb",
  "key23": "4XmkWXs2Z6LhFPQzcDBgzLCukJtyqU6fnA8d4JRdKkRFVD9KqgbZLKCQ9FrQQnQ3rccVbJCV7FNjhsRe57zpZnco",
  "key24": "3TgYYLn8odGwUKEQ4do73ETKY3Cs3sqsF9MasnwByd4TzrxhkSrAbncCrY47WTR95m7KwqCbAjztpCccYze1dg1F",
  "key25": "4BY4S93ZHojvevpXNHcGR37wALCSbAeyU1Hs9Ke82L1hGwECRBr1zaP8LH4huWkNSUoyDvPs3irJufEeEW6UddiR",
  "key26": "qLTv6mz8nmhX1VZdBfyxPmFsBrJ5GrkCpQqG9NdvjWxqdfUfjpQk7CK3Ssw5DLKYLEBZCPZ1s8B1Aw3URsSzri5",
  "key27": "xFpiLtSMRkNiQKX2uHmHztQ4SLjDSX4M669bfugUZJYEuzqRx3kgygicWLvii84bUjtYrQPTEjX5wwNHzkUWE2H",
  "key28": "2UTPjNqL9pmC4r5N7CGBcPj8tNmGHfC1WqkN8Gnon8ygeYbXhpU1Zxx7Ta9oGofS2RRBWb3L7jiGucGQN36EctMA",
  "key29": "3EA325sVXzTbo5gxsLKLxReXPdBMywi7U7SaMofuv1ukYQhJepLFmB8kMTF1cCqFPmMtuc3QhUy3Mkx2iQmRJTCV",
  "key30": "3eVtQ8P5cDgZWULJudHac6DgNiqY2xg2ZsBWJjWfCV1C24gc2x7cQgq8QM2fy4VboMChvJj1tqE7nLbRnCFZzcQ7",
  "key31": "4Kk3qYSqWEdtya63EbyR2F9Zt8GXPZswRZDiCgmoRC2LBjta2gqB8J6kotfcqgs8jU9fVSyvY9DgPh1XJbaAsgGe",
  "key32": "39UFdNDLWvMEvaJ3X72vgUdJutqTbe3idEABFQKCnR6PgYmRjCnezZJuMkJFD8AN7W998iGC9kSGgA5yRstvH2ob",
  "key33": "3fqBQjsQc9DnL5Y1nYRHBUGefnBsk4jQjrBX8HfzPgqUSD2hTE2RcKFtacoyri9iKgoGcuyeq7GmrvKKE7AvfASp",
  "key34": "2Xx5UMnM4hY2SRE4m5HaXnaMG6PhQfgNBgARGBZJXgr3tDwySmzpqusZQJW9NTkZgAFn25k5PR1R17g74j5acMY4"
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
