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
    "kmYjewygS8ssL3sRQDY2x5KeknPp9p8HopqoL3APdnHyDAorizL3Xdf2wimGoGQGFVKFgJzHNhBCKLqZteyRU63"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25ocTREikjsAESTcSDkYtx9TgLT8HjeUNRUDFM2wpA5kVToVn3UAQitDQuKCrv2gvKjy8hkAukBWxLGW99bDNyxU",
  "key1": "5PRAjvgXsDBj3oDkk6UbfVMExs3LKUZWbs9TVXi8vV3RxEXGuFNdPg3wvnokeuHTug7whemaik6gG1cf2uMJukaR",
  "key2": "5V77ZZMavKC63YPDwisE9jECTa3ZYpkpdsbsDqSbFNRy4Yr2Q94Ns2CrJHKnjrPa5y8RoLMC2obGKCBqbXcbXuM2",
  "key3": "4j5uZrSm5zRsbnshqDwDpMnv7KNSLWJeLRcPFKy5r1BUjYbxyBrnbPnEr1U3Vuvotg3ufvT2YB41ncBjVZgC1oFk",
  "key4": "4QVkHU3mJhzSRCoEkwdrcrbVYGjQTUR2F98aznPbhK4iHTtHVssDAQ45imRR16ZMo3TfEzrLtFhah678SYMjneqb",
  "key5": "5jqfbJJYU1ovKzCfKkCyyLrjcLYkmisfGViGUsykvXoYhmYM5bKfpvpAoCv5Rd5DCE69NPXHKReHxNiHAyKmQsAJ",
  "key6": "5xho28EKtxwRgNzsuTEch9ayCfF9TwP3zoYiJjSgtgK1zYp4x1FHRFy6uLZWmY1DkAjsWLyNWTs7KocvmGEj6Lto",
  "key7": "3kvr6M5uFyZWMXUTp1kq2b6eotN7cy8c6msnGRuWkyLdLgHURgJmVE1StY266CsQEBH55svuMujpdCt59vk3KtFr",
  "key8": "2mfPYsDmJfNzG8CDiBJh7KBnAwikwX4R63Kwg8n5Zduy6EUWrqZxGyKRKQdrfazWcexouhUz4nJFsQoiRjkdjsph",
  "key9": "jMjbDozSfX59XJh31H1dGXmpeWfPaKmr39wT1y4iqJmFP44uruwxmBEgYqok1jKDfgtrAWoyDDwdMuTKb5G6LXG",
  "key10": "3uPpLTrZtCSow4sTAnoxSRmB29odvgKWdue3URsap2e7PRqqqs2EqxV3Y27AgFkpdeSPRbNLEFdkGfi9nzgyo6mw",
  "key11": "FTZcK4XybfM2JNsanv2sxyC7NPXGVNqBPPQk1MAJqsoQRdfS1P3v8AVNxLSwJUTTYKpaTjLFHtMAbs7gr4CDHay",
  "key12": "qqCpWfLV9aPzp8ept3Zc3if76kyuLdGFunaB5F5hzpXTcRAYYJUqd17MEgeQ5qVzQfNrPje2HJpA3nfv4xZPGxD",
  "key13": "3hT9c6skE1K949c67y3oMXyeTFJQCQh3MnwpECycgWRMLk7VY1vKE3oW9AE82euLj78btDh9SXEkzRxrGmhGUTTU",
  "key14": "29niLpiWWmgF8G6rYSqY39gzJN7ZrYMaQth1uM2AjfLbSEQXB2VJTR6MBGfZ8mGwDUhvwzvANydNoKUfUR2KWaNp",
  "key15": "4T3SbxujK5WvJyGeDRnYf1NZUg2VYvBVWNvyuM99rq6T7anqj5SH8JLcA951wikh4zL18mvgLqJBbhNoabs5qXeP",
  "key16": "3zRuvrHKHMBtx4uJfmnQvvHaP4sD51Gaa2zM6ABpp6AW81yHui7ez4fWKfEuRMSVpdRDimaKXu9ypL1LaH5ymhpy",
  "key17": "4guH3D85kzckrsmBiaMD9REgV9w3gZCdsCc9C93EdYDzAWkgfnuKgfk4YoAVonC9f15MskS5FjytJetE2gbEWj33",
  "key18": "ksZ39Zy2ENWEmN7JXjgtjoYywSaETbcyeyyFei4BhxDFxKyyRxZEomXkDdEz8VvSTSSYRQ5hxDaj72arKZyWZYA",
  "key19": "5kVoR1SHpUwmm8C3MGHtJ3B2kFzte6zptJPFwTUrHjZVAtMFSenBvaWXmWgRRyrKPnTaKSnnXmurXmVJQ9ULWeF6",
  "key20": "c2beXgxvqTuszWdtsfPjfzvPSPrvdQZgw7naB26Y3VMhHAbUeNHYvToL2xFqNY6icYLBuTawS9XunutXxNv1ZPL",
  "key21": "ugrWkBwkhKWZS94ayoCZDhM6jyAp48JUCLWfoc7Yztm48xM9FKYKTcqYPBzQaYFqhR9qkRfmoB147jfEQC47VCf",
  "key22": "5HpsJEi5YHxhzGSR5RkoWoF4TjYZHUyndqyne5qxtX977MHFQZ5gErBfFhrBBLH9fNEnj7nScwkMGM7g8WcgzYmk",
  "key23": "5NEj4p1Wzpah64o7MurfFnb1L8UbGLesPhAL1DXishUeUmufNzp4dHK3duAxxozetiEnjkY15u8VDE6dHWczrAiE",
  "key24": "5aZQBNhjtukafz7kbrD4QefrhZ5KxX83ZE2snrTWy5XsjHCVJ3tMcK5NDuuKrXnybsmWd1UrDYMoZMVTsr7xeJ9r",
  "key25": "4tSZAwjbgfzxe5ScHScPXnDjxyAtLe4LcBxLHiDoxa1XogyaUZi3BgwA5sMfoZfBEiT748LEjT2d7YvuxEMZzvLt",
  "key26": "582GfBLd8wL9DtojnFzDqe6WSTTCfV8VhtR5nYxw4S1Jvzb3VbfoinfPZZsZfkF3s8GJZLDrNB7mvrkFWLyUPDg",
  "key27": "4ANdUcBpkBzrAbn8CNTcGjBUsA1FCJaj3UyXmFQhzxRZoMqjgiALhmxDBfj17Rxs4njgpxPcGoVLQBePQm52hrwP",
  "key28": "32qWqoioZzSGkGoWWUPj3HxuSzFP1hcgGDJ8HkGrYSB6j1szLV9KkWrvMZEUkTKuKr8B7wGskWp6kn3YGquRje2k",
  "key29": "2Qa9MunNUbpWdfAytFTs3GhEbHAjjd1CA3EJnA9P1HSZ3XhmR5PDE1YPpy24kVrq57oRJuVvUcbbYBJdwzqcS3yc",
  "key30": "rR4KP6UR6KZGPwaBB2kgDujgKmL3K7zLKyx3cem2nwL6U5bhaHsCswLEgAvQPeyTt7VDdqUBFpDaNJT4ZHM6syR",
  "key31": "g1cbzXVnzujDJu8yX82dTq13JFLwD7JiNSCvyKtprc814YQCnRQEHHwQ4Qw8wGGmPKtD1xjb9s44LKBNYNhUd2o",
  "key32": "L2CcorTEqGTtQiy1giVbmrBVuUFkDQknJC3Qzn3GyDj1oGYtaxCEemEmcaSvFaqFKGjzFTjSA7akYkKn7jQ8tmp",
  "key33": "2mGKLZiRguqPtJ7pnMxVM8ddphWD5ekttbpE7tma4qmx5cKofnNCvr3k5nRg1f32JKiBaUnExMzV3kRsfanhWVEc",
  "key34": "2QGM7yvm4zc5x7Jq2G4EJqHc4zwTmHr4DL6mqLAXApBG5rL6pRJo5zq6M7A35LWbB4pFZoYhHc1S5CSoGZNupstB",
  "key35": "2Q4YLnvKNrvUgKfGg5bg12NSXBQAptec9tKzdNUgnnve9pomWBUiKuR6iLoXM2QQDHN3txxE4GcTpt6uBU7UG99J",
  "key36": "SgRC2caYH6YBLrNcmxJnMU9iuWxFDV6JmS65d5UfEt2qo53gUNjeHV9jZ15L7PxohXPJgKcCFcQJbbrJABVsQyc",
  "key37": "KeqrsgjCbKi1vAiawqj8Ho74ahHNP71WSa246DcyqQYBJo4FTLWfSVQFoeMVdxhzC8hXDKuYH5YwRqzCg67sHHC",
  "key38": "4KR3kKV1aLi6vzLrZ23cDmtmVSBAYJqiBCJKjYtTT4X23oWYsdK8im5M1FqQGTp9YpjgFMZyP93ieCeCtpQBSYA8",
  "key39": "4QCHNhkbvMgJ5fMdKZb48WfWEKFgHJyLr2LeqGSjE9aauUiXxZNAnZnTWJGuNJJrQcTaLG3z7agauYetMnS8xF3k",
  "key40": "2BZPMPcm9LxMGwzZ9LNHs7Y54Kqok3Z3JKBkVdp9SFqEqK4tri43Q7vBaotyxAGxRwi59JyEzNDyCN8sP3oB3pph",
  "key41": "2zieSVLLZuT9AE1eiKxdY7KYpzEEHJAmfZVU6LFqFwYEeccxa6TwqmE8Lv8HTPHq7JgHSDowUkdoqwjAjV7mq3ha",
  "key42": "4tKvy1VSKcfKwkZsEvuZjJEK2LkoZVu1XrumXJXJTaejx9BK4iTvUUfWwuzgZAiKw4495B5bRQJTwVjS47hUurNV",
  "key43": "22pjQaiThL9pgtJNGcLLf6ot4d6ABifpUGP8Juqn3SRPXqACP4XY5ehMuFGFEdamWXRY14EA9aoDwLz5DjEKKUyC",
  "key44": "3sfNGqgZX2TmXKbRuj7L4erX44LRRSf9JRfrR64674KXDAFbXMWHNpjy9tAKzKeugQDenxHBBJCjVGvXECtfsPhF",
  "key45": "2dWNUoTWEPK7aMjjrSVTfVoAvN6cCyPmwBMvc5xCh472YU9PFSAKKF5dnQ54BHNXDJnieKyWVYJK1G8VBMH9ohxk",
  "key46": "ahqsDpdpho56tZdrSTjRsDSCBnrvtxchJUWwGgocW3HAHC3qmWNAhZz4M928d5wodN5P8ZmykBjrZ6wv2JJQMFd"
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
