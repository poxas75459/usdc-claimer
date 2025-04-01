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
    "1SiWzVz5kTboDauziQaeoiv73nfEztZyJnX4AhopL9MeVittycx1M1ngqLkn5r1GMbLqEZCjeNdeyHuzSaZxKSe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YyVLmoFsnw5QhC3L1DVdNzciQBLRGN8ViTGtsQGVjLqkZ3UgwmVzorVECuTyhEQBD88pfDTALcM3rS19ywaGZFm",
  "key1": "4rafo3uLwM25yPRhfaX27rX3EckP4k9brv4KKeSDSfM7zAGL7wsJc1VBfPCcLqRyArXHPgMwDwyZpJJnNX2jkqhz",
  "key2": "BK77C8sm7xqMxkFuM88hHc6KjjRrAtpaAj7wYxFDpGSiSqshiEsPYyfMm26HZP3Na4pUchK6ozAuTHAqYoH8dbX",
  "key3": "5NkAYSQb62eCH5LNV9c9tewH1yby8QCNk1A4QCMHpFLP1xEHzQPuybVWkC4Mqz3fXPpisqZ7eMRwfqg1KMRThAcm",
  "key4": "29Cmo7woRmyDwv6uyia2XvRbFqapoKfKDWfT8MtvCGVu53o3CDezMXxJfTB1DEWbusXbrgzDf8WrSVfLGhqHdUkB",
  "key5": "4GuPw6pn1oo1UZEjWNZweWDS3wH7bk2SMTbm2ZLX2efGWpc3NoEdunT4m1TGQcNn7cxwFCKem3aQMCj5MfD9kxzr",
  "key6": "3g8uDKjAjz7fpR7UuWk1nZcphGih4PVcHYuvVwio57dw3eJwbh6FeHT2X6TwEpZgCs6NSGkQNkojFP6DtEeFfWB3",
  "key7": "t88JbsjqRB9LXoeKwLHkzc9mrwCcdzN4mpmHQZnoaPJmkYBt8NkT3E5Pa6Gs85TKr6h1mCTb29cR4mX8eWDobh9",
  "key8": "T4tKY5CXZd1VC7977HD5Qbm26fVPLqAQynomM7rgdKaZfXRNfpWdKdLxAi6ynGXcTAeBC13M4ww1ZN3WS1trzYK",
  "key9": "3WzwvWezvM6VD5rp7qmtvdUfh2LQq7XLiomFggYg5ZZy4xyARG9N3SB7qTaJLwvxD28tfCde3z8hZcYxVMaXrQAH",
  "key10": "2EdAnWSM7h4Bdsmb5RADi9bvs8KjVr4XcpVF2nozGvLBgyzq8mTtbTauHoFGr8KACaFsHCyb8osLm2jfvzE2KPLi",
  "key11": "4nizBnacxSk214Sn9NbH4EH4AkorHeFXrDBiFcB9hRkU6hcdvwwtgECY3jiZGRtRMZ9LHQqRh7PG3yiMrQR8Zre2",
  "key12": "5mAo436LZvAL8YweGrNvoeg7m93knoR9rhT5kTfT8yXp91XA83SVDcheQwuMFyfziPEEEGLG7by8e4uyzYBn8VKN",
  "key13": "u3GUDTGj6DuBaSidQEBnWMiLyVxYA7XBwDPxZbsztwdSKwor6BhxqaXVycLCD2KHznbwydf3NK3FNnThU5p8uCK",
  "key14": "2XHYJmixohxhYPy2s3G4iEvR1DJhWfGibfairMvNq4tN2PT1YZGsMBeGqDfV5aBND4f4g9avGfhNrN4jWvDKb1pv",
  "key15": "464MrPucuC61DMChfffjW7agvKrt7E1RWEXJEBMCfqaMG91rya1opxCya77PngvfEKg29MMZyKAHUVWTZwzswy3b",
  "key16": "4p9oXommjdAPJ6UQJQJKsGhsK1eYqt6gVWeUyLGEmr2FHkN3ZAehasQcMcPrmea3um8JPKAkBo7JPMY2kgvHdP7s",
  "key17": "3qKADKQuvJKAuQXDMfMnpJN3fLZFAX8kwGXd6cWjKpP93g5VFnoyjSSzemNxPXwQR1rKqNTojdXMMK7ZYwtYxidM",
  "key18": "34yXARFHsfKqDxv2BQ6coP44RuSfPm59MmdEp6HRJ9KunVzfooSaxtg1bT4yghFaDYyvPWTyJPF4gsavWbkZc53g",
  "key19": "buqCTJGpSi8uMKPokZTv1kNtTPq6H1cVyxPmcqg1qPbX34nih5S4pesQVByjy9aaQALNnWwkQXd2s4dqJDFFfda",
  "key20": "MuwkYwpy6rNpC3u7EjvnWWu9HXwDanrV5Y2NFTZRf3x86FGeAG2puUKngwWvWu1HerXjqKgdQvisMH8jV1koEF3",
  "key21": "nGPQk8XNWVc8TUV8KVdVfPLCoWuJGyQ7jGPizbMkBtd8RmcSLM7tTkHVVhkdNCYAEs9QvBySZMoDQGAjdDGhn3m",
  "key22": "4694whLQ7w1JKNTscA59baz8Zvfd1U4xFzMJyNz57gjCb2i9xC2hKAuS5f8TocqnDG8cnUopQQB8tyJCRc4vuzDs",
  "key23": "5M9E8vccXeg9LYZzzn2S89GKocBPxbMrM1ZRaLwVJEVfRNwyfAb8EjcuPxi4gp9LX9uF2h2aVU6zCNW9qZbKorQw",
  "key24": "3TLRzioY4gJ5Tj3QLtfZuxhLG1KVy61FFKoPjbqSQbxbCkXpiwwgwMitrUgThgPRhgaELjSCL9fKuWfCmYN9Djnw",
  "key25": "2B6Jpa2Q1jnju4NDyde81jovbGjuS8QJeSpmW3DDyag8Aoo7Hhz3PAzz4SmbzDGfmPmjyvTCshLxhPMRdQrJfeHm",
  "key26": "3qhtRs6AavYPcivYv14xECnE4Sv6es5ypBAwonfS9PNNZZH3PGWW293GtxWWWXhb8XMbCMF3Qjci1RobhG88Ho3f",
  "key27": "49ByQKJfxEo7jQFF8opnQsfYU3uqSoVNGsgabzHEaEZ5q9k5BCxJs5L8h4LSuErKZuXmSrsyTb1Jw2rAWWhUQ1TP",
  "key28": "5RCLMKxHJVTF9VkTWQB8naWP5xd1zaVYHQbFhRW32waMZKjdhM7sn8n9MUrRC2MGXoGT8XHBRnSsKCZxf6WbtxW8",
  "key29": "2hjRt7iCTzWvWH6iPbAeTo7eZ8nuKf58vwXaCbQKrapsEUbzwX2M8T57xdabwNskYguJtw7LWjaizg3Q5bRx72jy",
  "key30": "42FjajGe6VXJJy33seZDsweqLr8y1MaiXBVb3XcoSsqq4mmrKxH7Y3MkNwg8QU2CjyTqdyHVJ5oSaBsLFrLwnePp",
  "key31": "4dHRND1gxN3pMNNDEB5w4BzYCVnjgudAFp3DGcAP7bJdHBP7ySztc8RP8vcJoewjbRwmz4CUPq28K4B4w8HFHTj4",
  "key32": "MvDDDCFC2jfoKNi555FKxzemqYGKjC8pAH6DmRJzPf6VDeiVhvYoAkA268Z1DUmo2eeyrHYSegJG2bf4bS8LXjS",
  "key33": "3LyYo3WURfuRWboj7tzLw6nH2AEt2qTDQaqMmZ3eN1UBaH3iZMzkJtQQhYnA5PAso9fbt3Pu2VAgTL2h8uGy6Sfm",
  "key34": "4rNoJt1y4tvj5WxfQH3hgVGkywad3cTvpMikgaMjXxwS7snB2MydyiTmzFPQcdTyTjF1wjjEvvwAewv9nrZBqgb6",
  "key35": "5bcCKtTiYU7xzKttNMhLatxCzXdx6G9ofCfpy2mtekHJ9P45HRc8w5ymCvSkJFRWZ7J4Fq5S8Ne7nZpiRgwZZx7Y",
  "key36": "3mkHdwMmq934uq1pM8L4jtEVbZtBUwAGcJKiA2ACMCadRH1PzuSPMv27ZHb4veTyKtifp1bo25LZc95bbtbm8XWn"
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
