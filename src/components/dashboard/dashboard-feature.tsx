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
    "5MUzgp2HGMWDmoqdufMPj3hHV6ot3ELiSm5cHHbpcourujyXgMHYRgMaQ2ZygJFa9aLHuu4qjnemZyBUeyv8ZAbp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ruUTy7R5NdywZbZRt2653nEjWnEuECKvsXDzuLHfE5a319YqnSy8SqPkDT1ik4VCAkWWdYoe6J9ZnAwYvQZ2ckz",
  "key1": "5D2GK299PXaDd925w1AstZ46GcVcbsyt2xM6dgYe7hYsusm5MX8kvGuNYXpzyCQDBZYCQhAXST2xT6NbbdDzKRwW",
  "key2": "2jSgGApTVZY9hGhuH1DGkhkB5R6ETbz3iLpRGYqPFyN2y9YqGnAkKrjzKiFUw3AsfEvyicZi3HQtzdiPuVGGzUHN",
  "key3": "2tGEdKVgAqf79pmNkc83VLMgq78Mc6Acv5R4UzprRGPr9r8J7TsvZnuyb4KMbuEBxZqVE3YW9WsS8jcDE5ExGLVr",
  "key4": "5s7NnQ7CRKAoNQPUWjADYp2pzareVdjhj7uz5qBhx274JpgcF1vDba4FWU8FArhnDum35aMaiG3GJ4MQmr5QmiN5",
  "key5": "44bdyeuFujzCKBqTxuqAkpfgMrUKEWjaonUCZDkxdKGapvYpHHQFPwc1yd6me3Qoh6YozNt1F9SrX3Hu6iNzNMBa",
  "key6": "1iBjBb9heajGQutenaQ5k6w4BX5EEZCfEbjounV28bmdqxECC5QcfZSKbkwowBBEgASSD5e24SHoXba8XRnks5B",
  "key7": "48uXNJom6QRY3GMSRVNkhcdvmvoeLehgmZ36ezWASBn71acDZNdyAdtHK8imnxkQrweDth6gsu4MazkoJYPQKSwT",
  "key8": "4YUs2KbYfiq67xLCqQrV7aAEEzNVu3XvpiRtCWfHKPc9GzEyr1ma25MydMr8PxaS8AsKCU2BSt3Qsv8FZTgtjzrM",
  "key9": "5HHJMxNx52zAKxYG4oJmtEJGR1sKiJrycahjafQuLirf51jUGw9EezddsS3hujXSKzXRVeW9Y3EzLTU2gVip26X7",
  "key10": "3ejtnLZGyAu5zgnL5WTvx1BnyX4UYkiGyP2LsBh6nBbYGms7HDo4amphNzanWREMjdoAnDWpeD1FLjr6fw67NAk9",
  "key11": "56JMXRWEAaHnVMp6gXaaFHrVoBz6zeCRCuh8a1eD6h5BA1QT4qxV1MTSmRBGD5sqXEgVJNU6uN4qnEZni3z5tXnA",
  "key12": "45tDqqafJ4bnzn1EjEBfEqeFpK7pUovMqR7R8MxbooNMNHBtjj6xKpotEgiqxcNqrrUjYTQj6vcLJY2DkjEvii1Z",
  "key13": "3o6npJ2ZPbVHKXV6f7RTjeECTjY3PoLZj3JDLRK7Nnwy94xgLnXs89Tx6iHgchjDPoZyuGoxtoGgTa6Pj2JM65PN",
  "key14": "5RvavbLn1qWTvaTsyVGQBgpSMahfkwntwQK9sybgjUZTeEmPP7GRBsE4Wk4ZCBQFR1BbyFWU4AsVgjGFj7SJ584y",
  "key15": "XS4EtGUdnbNXUUTKRyP5puDV2mWccSe4GeJ9PNmQEJCWuXzNPhjXPFDqhqDGeSWNr2SPyj4JbVRrAnurc2i2ifa",
  "key16": "4mGWzF78vTRSMG7GxhUCHx5ZyU7hzx264vCoex2NBPaSE6jD9ikwv5RegLoZ2Hpojz3fPAWstZCc6HL1Q1rjDByo",
  "key17": "2E7oyzKs5k9t5ir6wE3gs86p5cLmwhbJJR7JECMRpdMGdW3eKFrARMLyUguxzshPkdcXq4nyy26TriZLSr1djLye",
  "key18": "bxLMexm21ikXdXnDTrJyb7RuraSu6kBoTmBbN1yo8BA7tjSceTsBYzSunhzPogtLJ4pod7sF8JCxSrQJ24EwS4t",
  "key19": "4rbmUyc3eftm6rixkuaEg7RXfZo45sb5bxvTuMdzH4cWumHdvLfd7f8SjatwZv7j6tGxkeuEfaK8u75PPWAtquKf",
  "key20": "2RX922oA6acxsAjssB8dbJF3dAG6geL1Wo2tkE6ZNJa3i1oyKj467UVkjWa7bRNA7qiUnHQDYHqxcbiirXy4HaQL",
  "key21": "2Zv3rwDdqbq1g5LC6ghwrVGZnFdd5EBKaCbxiRe6Qx2dTmDz74g7uh5mwLJ8tymLWfZXcqkt3Yn7ZzDrisXvZZNy",
  "key22": "CjcZxSW8TJQmYPsgxHo3FuKjc3nSQPbNuWFbKV7UYRjmgnaPSVrVkS3qi11kZosQLp3d8jmtjrkm8TTC4ybu89B",
  "key23": "2NRmfb7rtaWXNhxZBUXb7huwXxJFSqU81U81SNKhfJpXr8q7RtBHn4p4SAoHkBQ4YfF9Lt1k5QUhDXjgVPgcpaws",
  "key24": "3UnQHRGeF7zgHDnbgauq8oj3XvoRqu4dRcC8LJxN3xUECi9n58A2pVu6CvJ8ds4NEvLJvCBhdSLHzdZEYvyb6xkM",
  "key25": "sKwQQakhuutFWN37S7zex4BMMs93iqMhY3h1AEvQiNdrQTKRFfHJswV8YeA2R2XQyNpimhxfzYbtMFAtJtbsp4o",
  "key26": "4B4GGkpTUF5BPytAzcdk3aBkEjRLs7UxbdvxR4bcgr4hFa5ctZNX2cU477qpycQHav66x9R9T7zjqt6WQuy8Z7F2",
  "key27": "4wAn6TCzBuDtVfTbuPoD2sujsjDFqvuL5N7sbV1TSFJcsSTcRhQ31inqyqkiPm7NjXVtpqiemftpjVcJnc5GM6Jz",
  "key28": "55U846QuksiF1rDgr7z4v2yu67nhf8zsVG7FvU4qCW5NadFTAY14aPUNy6wuH2DbTJ48EnXtQhV46jdiZKor1bC6",
  "key29": "5kzbMz5Bed4UbPZX9nGbufUBFmnRxeMY7gdTrfWU1SZKScSHTMZ96pt9412CRvQSkDXB15i9qioxxKZFrwxFMuCP",
  "key30": "5nAJFHQbqGk4JeHbFStZTmwGxwhpaeB7oj3EpHYJiz2mh2vUqUu8cPQ4JYXuj2fS6pP1p7DPiy6ziiT4mMmGuGuu"
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
