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
    "78SriU71KQW9vxJYUhNNxkduC4yiKFhLJ7xamYCKmhMVixUBEJk2HobrG5YH1pKcuZkKxPgitNhMuNt6ANbma5C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "f4YhkRchWYDM7vWB282vybps5joJpaKR6W8YdcKL2T1iqpTeiq24L22VMtngWgBn3JAw3cZ4LagELbjTc4z4jsw",
  "key1": "482fnqXvma7wQoiT8vC7o3hB9zRoi5v4UBf94YcQk9jevwKYxdtfcx9r5WkjxmRQ9RJpww6BzXFDkw3FqeDoruGP",
  "key2": "3xcDj4R9A2njp6uR6tgDijDvN2H4yYv5SVtCGQS1EMqixetML95iSu8GCatytCttcJGgutBRK5Uo8Wj6hfZpnN3L",
  "key3": "2m5tLVeHuxXTQTzYACn3M9LokANdikVxsgsReMy2Yb5KkhL9XM7A14p2GRfujWd9mmBo3oiNYRgvbkm5pYKHhwpV",
  "key4": "5bwbnsMzEizW8rx8pQ7RDcfLwLugwzDf4dkH3wUpoHHihCDEUQX9wpL8mKqzRXm9aTAGwWYoGto8geKMnJKQfCH7",
  "key5": "2FtaSDTQP9nTbzQjBeHRfg1oZFzE2f5PhLCQAncT16c3vsuhcrKrktSzTt9QeMwr2ABf3yhJkWAAXgx1rJHp5hF7",
  "key6": "22vG8TcJhScf7nrPZuPqdYSfc2xtmaz3kbRSQ3xRQz92nzMua9wMR2Tn6T2GpEssJcBxuL4mUVu8Lv6pdx6kt9pb",
  "key7": "3U8kT7hen1GRFcNBSqkUaWsWNYbFnkPpUQc8L89jBFruhqvyNDtJdh7KkZGcM6E5AwgkfEhQKtYGqqG19Go7tfHC",
  "key8": "2GNh34E4meFt7Q5fCsAUSzVur38jMHSHNDBWfDpuLxYJssKKVYPsJxvFHNqfoCDE2SezBUri2QZ4yP7GKpSPTJax",
  "key9": "2Qm4RFkKjQpqkRmKeeTgGLL3s27xkg5Xv8M4vbvVs4VsFmoudBFuu3rnjpxXGaC4ixqVifkUJNahLvRncxtjkd7S",
  "key10": "xKg4higmTPqCaGF8Gm2ZJMWTZywkugjBEyJae7b8ck1P2k2uAmHd47Q7QxCZY92KLWuMbsvGKbyrUb7or4Uasoy",
  "key11": "q3TkHp2VhLDp3EWe86es1aQU85K7GGLHoeBpS6kDAxkZ3J2wnJbAgaoYwxfQSRXLtf3P2cM2j9oh8qo239D6AQQ",
  "key12": "2PNT2c5ajg4eM4TDrWZK7eiKikDMrJxd9QuS6U4KPXgnxWu4ZUWFmPxN3K7MYdnGhwD5RDdZvF4dRNpmWvPAN5kH",
  "key13": "5Ngh7SDBNDeC5bcmWQGL5C6JtmZEp5JNb9DWccQUrcqq9VmAPdVAfLwanVSFtHnL81MsB7RWHkRPTX1UVibejivC",
  "key14": "7ASspkpCe6Q9rEzfEAmKCNTim19KVd1sRpsQ2z9LJwp5QYsYLzz92VRKtMvzdiC3aBqoAhqJCbFrtm9F51NxnMj",
  "key15": "2Ef75UpXznDGWQK6KxyFFZ9JFKE1mZ55FvcbeGYz863bsRSvEBWDYtYXb1PAMp2UHhwx3t7uAsf5EGd2mgsyyGFf",
  "key16": "5TWgNosjh4YjzbFw5UEQtnxrHtf5Qp3vVx5igHDLrz2JzNb2PWn95TanHJb17L5QEUYEEWHVzBKeRSSWfTe3dzc2",
  "key17": "5UXSQA1S3KZ1FFgLHKgRYVirK5QzcLjwFQDxCum2ZuoNNtCjiULHASVWDQEnoiMRNSstEzPyKiQVjjuVDPFajdQ1",
  "key18": "4XXy9nUkHWyc5RPxQPEwD8SmNQg4ushCeJJ56m4kTEKjKrKNS1P1UBa3omfPbgNvkyir6rGmdszAKe42Ly1HnU4o",
  "key19": "21cZXSSNfNUUR7Mk2hG77yTDMoLUWrhXomvhBeTi3EYMc89iiCueC3oRAWaddGvWpRBgPFHzb4xaenD23YUj1iz6",
  "key20": "LbwmQ4rusDdwabRbCE88Jc5mf98jCPdoP8Kc7Y8VsN9khcYFuxqQ9Ub5x7VkwtzRU8igsnD272C8VCGUkE8Rr3a",
  "key21": "4LNtQcfoFYT7t2w82XvJ2CSZ99wkRPfT9JyVa9K4oddEN4fzDr2WdMv5cozDU2LPkyELCnbRV5sf4p9hv6QRH63i",
  "key22": "5j69PAfnB8yjQSn9u6nJDiJyLQuTYCdbQsK3Xp4hDAKxEDmyyixW2Hmq24ELhizF7v4iGpKgtNAjeFV2pkJPRZAu",
  "key23": "3DiVUeC3CDk7wy5R6CHaEc5ohGXEtPeVrQyJAQTdAbjATyneNoTzh6QLHFGoYTvsgjEBHCJq4CxhULucBHqvHBij",
  "key24": "2xHUAgRZtBnUYuxfTdAGFLBja1GLABxVQqjn7EDGgNBSMmS3bRpse2vSxnJYCGaFMSePPh77PffT5bzMUDij7ox5",
  "key25": "5hjb3YATX3wdBgXueYgEEqz5KJqMFo5BvCdh4dKVgwYfHWdKK4RgM4A1BPKCk4AxqaKh13dtPScMrcUuYWTZGC4q",
  "key26": "5zC84oSjP8YGKkW7kLdg4L5SYKnRQVzZuuxoqBjbpBvBWZF6YA4Fi8ZaRzWmN8Z1fCraEw3HDB1BYMJTzrB2BmgD",
  "key27": "621dosa3zvrJj54k1CbHLrBiy1LZ3oHarLBK5rdSQMaWkyfKeGFozi9Re1NjVgUSQ27FEAxjbgsrGVSHS2jiDogf",
  "key28": "36LMTm8Zyx4AQtoeG6bHktNYQghNqdU7YH6q3HuHq2bA5McjSqajGd872DxyX1TJGFvs9HhwvWrT4T6gbZMtVM16",
  "key29": "3Z3Zpwb9G469uVCaYq1Q4AVayxecApxNEzA6hEaExAsTTJs1ee6fnLTYT6dm1KN6zqmPzHAjVsZCb4oH7JHeK8uU"
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
