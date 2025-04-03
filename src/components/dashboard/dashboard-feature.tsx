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
    "2ibgURGTfk6bQaWX2f7SfDqDHtpeEWBt3XcFLLfnJWGCy9YdoC4CWNGo7pWo1kUSF9Vj31zyKZybU5WBxw9uTG5y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59e2iVxuN26wNE6r6DiUCTtqenuHiSnnYfkLHZZRuoLUkauX21Wa2TgWai1EqMAdDdg4njzw58mNzkmYqn886qWY",
  "key1": "5UByycLo1SgfneQNZ99mCdvWpZ2V9zj3nNjDSQnD9CqqYokA5RqwQ9mfFyuLkh3tsq5E6TimMgyRyJFjttHBDPU7",
  "key2": "23Pv5Sq5pGi8e8Yrdz5Z7KrjMG8EB8Kpurj4Y4BdXSguR1SDuyAHUMZ6b9h33NRA7YwxjfN2mYxtxfeqxztqTgW5",
  "key3": "3xtkQ7rG2SFtZ2hXS1sGA4bjoamZEW8qvFcaxuQPevnqaZULi8LX8JEZmyop3TgqDq3fD1VPBjV6NABJ8mSrEcL7",
  "key4": "25H9tj4HR5P4Ww8ZrJyVkKzZcxJJtYNy818ZwzsH9rtq8YrnHmi2nm1vo8CHZoVFd5xuq6sJZZK6gzL7wPYRkjB2",
  "key5": "46mLyfGUf13d1W1MQLj7uNMQRXT8cQNaznMDPf8po7gNr4Pyz2312suebMaNMDY7TdDSAzGmmHdGWXBwccnHSKz",
  "key6": "3m7LZSMA82mgdEo3jtgd7CB7Cu6sqX2zVPjCiiHHFBBEDdD9M6SaqVtz4ZS5nZXhsaWSqfeFu7uZEJsdiEXwMqrr",
  "key7": "51T14JUjsQaQEZGD2TkJoRG9EmotXTjn4kkBrhceUE3gtzgNrTdJc3L4jYd6i6po7eYdrJMXCNoabZrruurom8jy",
  "key8": "5bFj3uWxotLxY9m1XQEvUabBARvpdUJFT3HyArwVDR6dBFfJCfGWQr9FCYwTDfXEe1cvfUPsNviUU8Psi8jywDDc",
  "key9": "3RYVcEBEcu74KT9MNy4uG9xmNEsG7eYxeM5Qj1bqAxVfzqSQ9aLhJg5Y3DjVAgNTvj3rKJNHrpcEkNN9nzhku7dF",
  "key10": "RymtfBM6KMBC3N9vBkKFY5nzsD6R5W8LyPoMqk9piT18EvE2vQKUXeaq21JaucyhXiv7n5GrMVefrgfG2zBEd7w",
  "key11": "3vSSYfr7GBTfsycSFmkXpphKAyiXjdXxjhGTVEHqRJguCvNjTzFwMYcNatdnH7FH2Dy4En4KLJzUfTtjLMpuPybj",
  "key12": "4FrFPBX1CGgVrD7tXmdoS29eCEQ1zPNnCY2Cj8VEEAzJcNdYr3ZSCFS7814m5padkAwcnMHhvrYfEk2dPmq5sdNH",
  "key13": "4S2degyX8h9Vj8LNtrD3WJrxip6g5UGRQLbbwtRWxus63463fhXx3Tu1TLmFRjRQxrkfjX1DGCWPNYjf9ZouufEu",
  "key14": "CKzpZEMrNsCyqFtdxSgP3DBfc3itbW4hkjtWDWgaqePGMThmLDpc7ENsZgYKwM4Lv12esF6nrqtiNdb8nqZQ3hd",
  "key15": "2Nkr8Lnvd9NjShjK3DBM6bW8poHSipWkojnmujN8G83Vpg757vWG5VjaJTx19kaxdg5kRymnddSDfHwBy6qBNMcg",
  "key16": "UfJ432JMmt2ZEBbVHK5bftVR1tTBpe6GhVZVorK7Xz2gfmntVhvi5X99obJiAdkkDxwMxTAGbqsXx9Q2goDbMx4",
  "key17": "YLqaPvFCVUmFynV7KS1KBz6UyWGL4PpHQd7Qn6UB8BbRFmQUGrMA8cfpijtcCz2LdSXS9aMK8E1VDx7ZFxcqzNq",
  "key18": "5yubkefdiZ5c7xRtBtwcBbpRh8V2q3cDZCxYTkMBQpzEVEVs2TKSd7zvN7nmkBFJZUBSwdZCBxMxGG94xNWn8PyW",
  "key19": "5WYWzUNeAZBcECVei458tzBgTmP25qa6ULuDaS4BQeUJjNqEYKLPVraMpkRqDDSsRZNig9p8b7jRt6W2ogyAxi8L",
  "key20": "2hMjAMiCdKyLEWAC1sc4DZcPHG1yr4j5wWnYdKhjWA3GbhRWasFv6wTMS9NjQa3ecEKSjuwWqHeo1kWcHbtaySso",
  "key21": "7Xr1JA9qN6zA68zndsrQKvDP8xPyQp6sQ7PrrJDg1HaP3JyZbmBg7csxA3n1gJNCb1Kx758aLYaic7ZLh5xsQCm",
  "key22": "2K1C4fsbBqt3X4ayvE2ZEfrkjQmY2fhF1igK5DcL8EmogrZquFGELhKbkKSNweKEPSNZQJuUBpqAX31h7UZG19HF",
  "key23": "55TAD34WNdoFMPzCvFhnspvzKaBdt5cC4EbV8V5CS9QoDVN28rU2PTanYeJALJLGCWfVj3sSpSuscr53NouqZmYs",
  "key24": "5CyfWBRFshzXySCqBdaPrVoxp5GAK8VgVfaaUGnHtKi9dtFTUqn79KLM5TxAwx7DpCEYEJcCqd1qsGZdfgPwWhB2",
  "key25": "5Stf33e1myjTQBBDETTWN7RJudFwKJuvzXYWX8nzFtLyoWQxkdotfYs3hHw82y3dVL8HqvTRVf3x8eEJaG2Lj4VJ",
  "key26": "S5JrpBTLrWroKnYQ7sjJgMS63YBGe1zZpqc5d6fxR3jjqBA9AvgA18AffeAV1CP9CadLQpEKEni55rFAyJjWfHw",
  "key27": "37RmuQNm35qoPJYqGvKnqA58J5mA3azU6k3A31x47jthS9Kofx4D9cTe5aKUYEcE1Ag89jWqPtciJscBHaDzSy3A",
  "key28": "5ZdMx1XR5jcNPXb8oUKnxj3rJhkyVqSngsowm8nMmnJH2cQ2cMA88n5EiwhWXZFeopgPTt7EKfdscC5zuemcWBqE",
  "key29": "4oJuMFkLah7TzUP1nxEh8rSzEaJsGzDFJBTcvZWNdcXKYc4GuPyrrSEYvmFKkp8yp1ZbHNTZpPsxNDPTPB54WVSk",
  "key30": "2cc5LtBd8cK2VZa2NgtKfAWuWbymz3osuUN3WFmQCJd477aiVzkK66nkVTFhd6fh3RANjCeEoVTvd19zkQ5NN7Ta",
  "key31": "j8o1y2bKgpXRtqJcUn61UpoCdAuRLjGEfgWX2gveN6sqYaVLfKjP685XDqb3hsEZnUUTTFnZX2jwiP5giDKCZea",
  "key32": "29tHDKPSt2ZKhmsrUDJcW4yhuPgrotJfzP8cxBLNjhT6Y9uq1q1fwnNRe9XSsfWBGeSYc2HzvVnVJbn47TDMJwUJ",
  "key33": "67PJCvEoshY5ebfH4JNUFEV8sGygBfUrKuXA5uNZnSZJmDBKVaufdAGDSRjh3VqoqfbcEe8K4R8Jct5d6sdULrrM",
  "key34": "5frx66wvj68D4ts2jcP8j5HRhK6YyB9z7Luyfp25w8Jdb9fF9wQQREzSf6J2EjiYUWWvqqU6B3DDR45odk6T2eJE",
  "key35": "5o17VWmzJNQyxcLjiJADGPFssCJHeCfkWfHNF8PC4tK87REcfRTT7oBEfghszj4XHDeJgPK95UAa3eZgzmjiasdD",
  "key36": "5MHzHfsVn8dapqcYHhaLpkq2mBbq7Uc8zA1D4dvcCXDvxgaHyr681axMHvgyTgzXPoW11KXhXuVLnveBcoU8xgxV",
  "key37": "2oE9UHVuuzfYzZFarwZp5gSMcRFLAn4oiYnMJy6qzmVP9tw26SbDq4ZGNsNDVUYLhbNG7xCS2tAicmiGkDqgNWPn",
  "key38": "495MSeqzukGkUTgCsUG2JDMLqd4ZhyfPJi37W4HobaKMQRKCquuNuCnK57un3xX4o9s5H8b5oHQsaRVit1fCwPoW",
  "key39": "4A1jXoM8iVGPDGArksZexZuYEVZvUZWCgqR1PhtoQvWJ7MJ2gRLrQGf3f4JjpsbU6EiqSW4MFcwbewr9uXEUYbvK",
  "key40": "xmympH9xPCzVoEQFJ35fsi5DP9UAKqSdeyW51S3dxKh2kYN1QGAwx9AWnruEhnjDv1o9DoVGpg57vu4KCdoNZEH",
  "key41": "2uC9JNQQSSmqfZZybMA8kY1Sq97rDypM79H9mvnqhk3Qfw8DRr86ezUA8Uo7XpvN6MtLndWFqSK3RxvkEJMCk7Vq",
  "key42": "3Mm8HN5FKTVWfeo1c7HrePAoN3s4ZoevRKS5jDPyv1kFXX2U8BKdSPcefGsX4PqhevnbLaxuPs4ZYgwDXGyc9stc",
  "key43": "3oNhNiU4VVuUZfm7S3UkNFLLrZW5PnR8WJV6xYYLj75sDa9KXzu2p58c31LCEdHLEz82cB4DneuDACuJGqjxTDgv",
  "key44": "4iPdSHbSwGfwdTnK1JtyJx1dJ5Vi8r2WxgSRA7T21XjcM9C4oQDCMKHQxHter26Xva1Eb4ZHAEXBE3hvgTxbVh7E"
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
