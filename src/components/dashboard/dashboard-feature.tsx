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
    "4STyTS5zksTdFUQGCKchmQ1HcK1ZJvrB2xoxit45s8V5ShSBLYrL1X1Xip1GJvjweYxJMGLvoq2ZGjVGe9EBxJTB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yca4yj3aC4YVe43KNK911Bxi2WcLEERj7Gf726kp1t1XMfH9Z2rh5eUmhMiyWag4VeWGzzDm2ARHJK7EY7MjXZ9",
  "key1": "3v7dJ3e4eQ2esUyXGMVyMoQJ1zVzR7CZLNqgMX7XFemPi4H4uSduJCv13v4s2qNhyULCE4Rssmf9BW1D5WrRV6aZ",
  "key2": "5Wrfpy9QWSnamnNWupGNSvt15qeSbeojCLSAjeEgjAFbZ7tHGpngc8AhqsBX6xfSFmCw8XM3NqLDg7iHdiiZN2mW",
  "key3": "RKYQi7tRnZQxbavQKSPSftsYzgeT6BPQffpTLAYCd8EXwbZjwi9MV2EwWBc37GWq2zi33DDjgKm42M13YfxRa2s",
  "key4": "3oEf2DqSj1joYAd7F87GSfPwAaDSeN2z7xuXdR33QLXeXhXPVDgEkACBfUqyt6FsoqDW3Gg8JpLwsbk3yzaVZ2yC",
  "key5": "839uNLw59z38rGTMcCPfBzLDYsf2izypBesR2L6CJwDobSPALkrQ2Gd3z6ChtWuf3YWB7oubQbZvXp2GXa9ib12",
  "key6": "4zXCq41jEArrncjixxrTSAn6tDHfK4MiiPrQuoREF7Gdh4KYP7UNMeCSranKhRyidEJ5X6wfZf2WckugdpwjEUHL",
  "key7": "5qT5hVscmMMCgabKbZXxs3s4qcQUGuUYHSXU2AVCDU6L1gqpLTgkHz2z3pNoTiFPoJoEYFjdDgRtVp614UUa6LxR",
  "key8": "51aUvevoJYPeAdb8NP8Wn8wH129THUkRmDWSktiiJkePvSAiwv4yeAek5f38Pe5XMFhNiuX4LzefPAGWLHycHbM9",
  "key9": "5NV4iuYyMKmeaPsxBt936VejYdap8CyX5o17fWeMsdhSF9DWKzzkCmyjKxFAFzqVBPQeWkkVHgLC7jEnSjBGK6Yt",
  "key10": "653kB1pAUBkdDG7WkPwqhqiuD9oW3Q1DfeG1ijYcdRxrLehgJpzVAoWWnzA3SzUeDLT42YAAnNEpdKUtf7UgTKeu",
  "key11": "2RmVccJcXgwBLL8vjyMHfFtsWXJhgyyfBY5ipZkTC9JHxkrx8qm2MeGkEghyUrfaARZtsyQ5fnVHsJKZnRXDd5yB",
  "key12": "Yq68RZYyX36Xa1fJkEmqukNSWfMHHUWB7VccnL12txgxwgfK6qmu1dhAC3zhVkRAXC7R6NLaxUd7qPzWqv8pzUN",
  "key13": "aokQZ8qYoBaWoAQSH8e4pvaoK5mFm81ccVFpR4VvuWkHQFLkMzdmiUaRoqyTEJkXcEqumkQCQUwi6V7HQjM4Nh7",
  "key14": "3Pfjbw1jQ8gYgh75uxJmrchDXwLk1RNCBT232k97vSJTEksEiN5q85BgbSiAGS2ZpqE2n8E7T1yDz2f1USocxpmQ",
  "key15": "39toywCxuVLDFCMQQuFpZwgc5Uhe8BkSrKpYwPAEtixtwc8PUYUtJ2RkRLP6rGgdMJREsmvhmZWcurSeGyzC7BM9",
  "key16": "67DaxovCo6BJs21KHs9JhTZP7b6ymbQiBq51k2ERzosFQCTz5nKLnJGXpWShthk44Ea2jE2QFUZPz8jbhjq4tReJ",
  "key17": "55YQdNnCGwzt7vXbrDHS7RiBG9zKMAdc5gzCp8FF72FNBm5YVbz2AT2geihX27CLjyjEUEYvYw8V3tt7prVcXJZJ",
  "key18": "2bhRgKBeq71x9pFQ2Y6pWykmoN96NFAyTLULBFtx94GAwd985LseRBp8y1Po2ijY3gSTGzCxrR8tMuz8mXALWAau",
  "key19": "28X3AhHtTcnLiZzBpJ5e5hMqpNkivGwPG7s7Vnij9q6yFzuJCEgc1RMgEi2Eo87naQaX4Hu8NfR5TA18E9fwrNny",
  "key20": "sSDPThAq6Kd9SfTjPiQELMo7CGVbkvkK48SBtVFgMJpTSrNfEgo7zWx9Q9VJRAGPDXmRMVWghjKiTw8Z4yQdNdX",
  "key21": "41zhQChNnbAkxNus21935JHvzkgk3ii9cNdcWSJ4XPmJ8qoecKigWoz8kJdatTba9Fcc81ogb9w6cZAcb6C1gGCS",
  "key22": "2XMcS4KSp2eX8YTt64qhoAke1oPuVsvs9UA1t7HrvhhcUfW9GwacDYgoqpgKPVejTjCUVSewEcfGjiZya1mSj4qW",
  "key23": "4Ef7dA8qjT5ais5qoVWwiDr4up9P3BxmDKFwcv34xYdoZEtqnruTs8Cs9eGsL37jtNYfpH8vXChxnAXV7QvQNJsK",
  "key24": "3FXHBf7JwAo1TaVZTVgNgFgRCifkjyLZdfWrCPMkXXZoDbse52R3je6AngZKRLPZ3AcYqTci9e6Zor8nHV7pWTfd",
  "key25": "3dzd62hiCfc6ZcGKxQUek24Xuo79obmHswJnrYV5D1hYW5kP2MuiaLqHt6U7Aopn5JtiyhZZDNJswi6fmouv6RRX",
  "key26": "3pSwFgbRyWmbgotz6ckmipTZnrmfZ8tfGVmjkpPiNBHxjyxaEGUkjot97MMy6iiu6RvoHbdVsUGUDAduhb9RiJVx",
  "key27": "FUNSCRkpqcR68Zm6EZgrankuDuLrcBfaEFNPZiginfDnVztUpJ3cKurwFd2W3sj3np562aFXQTicBEWqT3Uhd6X",
  "key28": "3LSc8gQnch9cps8iexi8NSFBeVCnnFsJysKmUxxXV7meRpyr1iJEDRfoG1btheFLY6F92TVb48yRVEtYDAJQ9xXx",
  "key29": "53kkpd1UASjXZtMKgKGhhy6UNtakN5LMbtD1GaYhnECKDhSSR3Cfry79qmqGr9CFyy1DVTA9b3hYDfKtCbMaaeji",
  "key30": "5AcaGEq2iwEqHt85cg3tm4HUuqx3ifALPAW1pT8mqCWm2wWFX6s2HkfeafCENKi9XExPuvmexpeg4BSMpb6dCK7f",
  "key31": "LuX4b5LPoNoBwyErgzoAiebCE6Bq2pbQiHjfaoUzPPPw21isJiHtp4UZQqAnCTMAbQpFbnZz4UfpNnegUcgAkpb",
  "key32": "4zcEsggCF8hrHS4u3w8YXTBDE4Gz5fwrxtdupeMTebtVrqH74KrRwbgZDi5U3xb84U2TEKY4RU37CBbRBGDoS3tG",
  "key33": "nk8ryYRCy9HYxBMzQ8xhXBtNGQjunGvjKErAyPmnZSu8asfffF3TDP2eRVKvXj8jQDCnK4oa5bisRpqgcXNao8s",
  "key34": "2y86SiPHJW3xJtex5Wf7NZePw7BhwkK9snKd5MZBmQV7FR3SuasS9k7dQGWayiBTuB4F9VTJbaqXxwhYdZxpJeSQ",
  "key35": "3kphHa6N7umjYH4TsVF24H1V4QbMtPaCM7gad589YDSv1SopFtrVk4vi2P2D9u76PtoTwFMYiZhjKYHnnKQeF4ZK",
  "key36": "4VmS2TSbra45u9z37YosMgdXETzcVfopJSRbZvcZvhY6CjhyTdm9Xh3UVXeEA1zRggeckn5BeFx6skiDb12JAKHV",
  "key37": "Rn1ZFtxnVXyxianxyHYsP6D46jYmFzWLKNhgEs6J6bALg4aYpQLGLVUW5tn5apFt88HusQLQryEhA1vHR6r1J33",
  "key38": "3FqRcuTsyKxpdGAQoD9SEBNRNYGFpFC2aLbyqxFJcCKz4Kqv8utWBogm8Hmp53csuGPerstVv2iivgiy4bHWb35D",
  "key39": "2NMyqCLhausNsNT95acFvseHhmhs79aeLstTvFrjCAr1kLaZddWsg4vQpYycQ2hp6FTBiVFcd4Ext37PR8mu1Wth",
  "key40": "5h4piAX6WxbyeYzb34coGgscQwjkFkLDr5pnAbUj1xPcxgpQ9huV9m1MjbEexLoesZ94emutSmivneZtB5d8Z8nU",
  "key41": "2pqxw2KoCSPMKSutDTPaLreZab8Uf1cZmza5oDT47ad1Zy9KCoeUrkwJGnyer8785QHb8NAPsiprhnFN1EsHSfFY",
  "key42": "DL8xSxhzTqu4ZzTXe8qAiezms7HaPejQMvx9LZ7q4zcn6yewah89UJZNazF5gWku6yrKqFKd9tEaLhFrBySKxnJ",
  "key43": "4NMkgWmckvHphqUpNYDCqHo6LhBsyQAyfjLcSHcbUG7PW9yNtToLfJu1Lqy1wG8wYsvwZCijXCqDAy5KNnQsSa3j",
  "key44": "5MRXgBqwTdWdc8Cb2mGPRAj2Qy7dBWkh9kA7r57KBwnVejFV9wuLHjvh1BNGi5r6BQcJ1NWmC8Py4N4SFe3rG3kL",
  "key45": "4cugFfX97Mrkyx7tfKjRUWQh8V3Wc6aNp6idP5RgcBAwhzieiVfVPwhmMgGyJzMtZ23PRUukVm2umGQv5fjV5YF8",
  "key46": "4JWgkzZ4AzxNfMvFDrThXDPhkxqFWdxhEDdg6tYnPFAfr5Bz8TY7TKwUgjRZ3AAnqvoqQZqK7KC5cLEVtM7jjZE1",
  "key47": "2ahrv9bhyTa7434ZsrweypY96TkESAmWAuu5pYmnCRaLRjotHUsZutke3KCGJR74qpxn9fYj4Xp2ifzWhPqEG1iU"
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
