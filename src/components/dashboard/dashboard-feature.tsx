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
    "53oinpno4q2Na4wPtBDEWcea8VjuYrFNotCVhpBajZwWHtfiTjsGSRpYjV32ViQyyQyhiN15nR7P1UeiKUd13Qea"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rhqYf44wseos7YMDbVo7Cr1YT2T9KETqXdUyjCV5W445dTvenAT8acsiXj87b8AB6khCc7b3b8obJ26MMjLf4Cd",
  "key1": "3mSMj7ckbqZXeBkY2HNus6Y3F3YzugGPHVMKENY5Jxy4Gcdyg9xMQnZBjJXKamXinsxfphvfjyN3HA7rtzJH5Tyt",
  "key2": "4R1eVx6WU2BZPHisryKVQqoyWzpaddswLQVydNHsYN6oWABE2MXtjcvTofEBKfUFLat81DZvi538edAdvF9bPK1b",
  "key3": "5uWdxiMPMUjyiNBk2tfy6yXwP3QMC6Sw4LchGLPnXSXV7kStGt48nAVYBPazVkDxzmJRm8i2xiZCM1ZLt97QSPGH",
  "key4": "w2DspgXZ7HgWV5sHnXQhNAUgoYaw8n4jwUkkLykpHgvM4ZgeU8oiujyr8wgufS9uUvhhi65W7DiDp83r4hnGQGV",
  "key5": "2ZBBSP9c5de1RMLJHhkhG5RRUhuiMYFDFCYwQdiBCDmsQEB2wXH6mDWCk4NSSHNTQ4LF3cKsuGTPM3srBP8BgyM2",
  "key6": "4CS722ebcJijzZQy7G8kR6ZcnK4A7zufvZYmk1FD29ERzjwY4JoPSJToP2PbEd4yUXLM8gPV4mP3Q7jQWLsQGrND",
  "key7": "5c2vrC5uwZo2jrjy7fGHKqTmDRN4dmpPcie1XpsfHtKge7sJqz1TZEo2K6ES7CHts8Wig8SaFppg5W6dwxj7FhT4",
  "key8": "3Q5FWT3aKh73cRSj71FMF475yMtodo5Q37QDSdLyy8FTjbfMZ8jkmYrXtLmev3ub6v4A6d9kHQ4KPQESWcqR8cLK",
  "key9": "2cZaoeG7uVRDetPhnVMzT2bSq8SCjnxsdQLChFU1URjbdbja8phxK89aFqqmQPTZynrgB6sexAdaGhwVSfWPtGcM",
  "key10": "b2v9URNq5g4n2P64yfyqwPSH7KpAfRRPLtPY1bHh8UHqQCpf6ZUF9MWhfZAVTgC4PAsygG2uCZYaEk2fMPehsPD",
  "key11": "2y5V4rZrmx38c7XshLXGQGVSJ1nfWT2kbcH88U79T84PcsYVx4pKpkqHm5pREomqBuQSj1G3ukSAXXyfUqgrmogV",
  "key12": "64F27S7rmvT5KaaiEyCR4UX5PWvif89gbTiFVuzaJ8phmjGWKxDP4CcpmMHz8wJ5rSS8ivKLNWRKLVsEP5KC8Ldz",
  "key13": "4BCXb6mAkreErwU3kTZGBAhydLvGty2dRbxxU2StEkC2sZncpuz79LcncLsqcA31cchtat4Pqs3j2PZdEDF8zYXt",
  "key14": "4G3YfqyGR8hbYZM7fwNGZqT2dbPj7wRbuJseUR3TBLmRXvJ3nDEzV1MGFRT6iJE44ZhSPHFMn5QyKmHJukwWmC2A",
  "key15": "38DQw36iFKn5QGxoeDy54kj4wSXM1PM7cuXvPtvS8ifNVMh8TotjBw9TJm6PxUuZdpuZtoyt42EWqNSMpYSXcWoR",
  "key16": "3GgVr9CZXWYTuDgiFrobjmrw2MuqGqQSYvy6kYiSLTwF5kfxfou7GuWDCgfFss7ff6hpnsWCuzcKofRP82o5xKJo",
  "key17": "39MMJauQkdWXeRmX9duU1ypCGJ5yrs8TpLbcMJyCeJGJ7FYwL3LXhXrv7ofHaDwc6irJSz5QqFh9pAzinAgQhZou",
  "key18": "3i1HNyZ5L7EfJToUpnhygbkBzpqZTPj4mKtbokczib6HxLh2rtsNpdTJoRehLAdBhDCjFSa3G3VR3i4m4V5KcuBZ",
  "key19": "5M3QaJ3RgMWBBTK9oBsNjS5NG9KSDoiHVC8NocUgSp5s2FEfTaNMimV5MrskQEqMD9J3ycWn3zAQQxt9ys692giV",
  "key20": "3AkcEvHHTwTbFwe4kqgm3kJF9r7qERenmqGKau7bsiPx3QvMRLUvpwaNxTvZ7hGpti345W4YYEr1Pv3WiN7HGNjt",
  "key21": "2Doc79ajQKUV5pufCTKTCKH46qQSAuz31qWGT5xyNb9BoBxMsxzPAQH6Pm4nzKN19jCS24bLbgkZQSie1Pov1FjH",
  "key22": "2xBs69vEfHFqWabS71oPqYtGjMTMntBbfv8r6qM6wdSnFsjnT3B1FcA6xxEDn2RuQQmvMRQQ6VdvAroWkzcrwL7P",
  "key23": "2dJLn3HbRmQVdGUGWg1N42itPw9m8seTfeUZEEBncce3Muby6upDWgGJeHEHTZhwYDYhDQQMDRpzZ2EdRSKdmJoy",
  "key24": "65K6owdyLmiQP41dj61CcHuRQzu7hrcog8x9c6RPLYGU2S7FvN9t9vPWvpHf88E3us6xwLxctbGykmciXQB1GEMn",
  "key25": "5Rt3FYfeEs1KEAFj8yx2KmufwwZA3dxQVv5r3U8TH8eTdWi6TAcihtDQoxewspdKexVLJc3oij8S291j5tXbegaR",
  "key26": "5Y7V7Lr7JidU5oEu257E1J4Ss44aRTfHSf4x9HropqoYzdCsg7cpves7uCm4rYAi3rYgkECVnT1JXmKZMMEwUChL",
  "key27": "3CaFq6gxFBWyAQxeQ9Wbf6CVkaScDUff8W4dmjykFqS4vR1frmjdWBXxHCS4f52iqkyp2nadVyLnKgmcQSDncWm4",
  "key28": "4DijSULYtAgRHev73p7gXfp4yEqt4CcbA6bgyNb73mPqwsvrj4dAaFFFwTDjJsxivmyEP6JUUEbFJ82YL1jprg27",
  "key29": "3p8iEZJoaUjxQkcVkkdgcyfzmisDFLQUz1aooC9g31KYYPZsWytUaGBV4yr3u2fGwH7nkuQj8sk52oTohbCnnGEF",
  "key30": "3r42nuaJCcWAv9mKqthT2VL45RFZvn5s7TTmcQfpPJ1sNDkNrqXUTKqYsxZoSBHbH6mbTQ1LNJ5tFCRpHF4HcJa5",
  "key31": "4r6XxWKpKe6e3CUjKaH2z9ZBJWwuKd3aEb6eqSV4asLtQYRYFkjjqcvdz5e5b8jcfEGqFDjNdoCrso8HnqVzjSwd",
  "key32": "5LWFLyoqsEg1UyMHxieuZemTACt8jtmGRX1dsJ71uHQi5TXjVbycR6K2ECwVFge5o9n5bVxrTfrFaYeSbsjMUJhJ",
  "key33": "6BMQytHfrA3PkR4fCU1jjVzQHyXw4tjREDNLu7YajfM1SUnKnfW8FQXoH4J1twdpwbWta5T1DWKewuYXT3ZEAov",
  "key34": "2ouX3pseDuMUC9B37KmGbGNpq84CoNKxLaPkKj2rxhcosHw7LGiEGfTiDh67J6ruWY4nK9bJ1kK3h75HeQxfD9Ct",
  "key35": "5nEYiQHr2NHivZWdhcX59EMAFBNeFpSdY7MARKckdB7sZbN8gFxkHQARRzz6TsX79zWJAFfERCnhCxV1R7vBduq7"
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
