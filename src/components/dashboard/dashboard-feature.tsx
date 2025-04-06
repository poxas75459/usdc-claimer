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
    "QMLm2yL4r2X9piEf37zAXRhcUekvPo9BF6wG9PgYMAsRNTxLxurLzNtC6BPmCFDcVE2UgSECJeRNWUo9bA65msa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uk3djrxjuxFMCxvtw3byLw4oNu8vganYQqG4XHpf912711NbGEifg7Hmt9BHwWZpdFYF6gPkY521kYeUvqN4ZJM",
  "key1": "TtMowZVccNfopxM3c7FdYmP9w4WuuEYrNTMss4yF1mRptzSz5NzfZmchxyS2C7vFBo1GPGc9N2UbVQ3oCHvqeH7",
  "key2": "5b1KsK6LKzyqAYjKM9uJN8AHELGKnzEkxU1comrMKKfZwkzSnoxdMkwefkdNtqG7bdXiV5xSQo2fSeJr1mNmSn22",
  "key3": "5dtbrTFMXXqrspAA5qGTd6VR68k2FT7iRpr4JrCdt3HgKdsj8p3Z7dEhDsLc1ZREAGSC58T3Zz7X5DQJFspZDbAR",
  "key4": "38qk664e4kh7jLANaBDikVRHuazkdgTCVRhFdsQAX5R1E7UCobLgNedTBMYyFoAp7dpQ6RYPeeN1hscZQteekvzi",
  "key5": "29xhJDCSA17uf7j2U9gD6Wka4McpWmXG7SzByiZ33uFJQVdo3RcVCxQhGuEkPw7mkZnH8aXv3zPXfFKvyzgUKkuM",
  "key6": "4ca1E46Ucsjrgwm2DYQ47E4hZqCYXt2ZVqwy2RpCYUUpJQVAWFkgR2zWsqf3Fginpr5V3azdT7nB89Sej5T3tT6Z",
  "key7": "4JzKVfVYRg1Jd7WmaDyPSomTMbqTZ8uEYikBigbPjxox7EHUswNRp6WfY984PSB7qCacBmvSQj8uH9CWPFnSSCiJ",
  "key8": "2AZoPKrQGnqXQHjABG5fFT2zLFkMVz1a9GhwyABGTbH3n5cQhkwVbcA4tn8HhHi8W8j89TX85oTvoirEjfkzP8dd",
  "key9": "45LXBjuZnbG5RKxPoHonPfUyuPQCAybnRYGSyWxWgoVVN9XWnwGeH6rbs6n18Eyp8F5XL6G3wn38n7GCDxNnWESD",
  "key10": "3p1wYCJaZFHqoqRne2mQgq78sMj7BxXsaSH1d6wavhs2V6ihpZvJHBzWdoBzuHLhtHbrsUBc2YLET8PHSwseUHbb",
  "key11": "2AfeuSGSF7MuU4rYur5ijBsEaUfTAz79rARc4Sv5oYaC8aSkAB5RU8ZJxdgEY4fL14S9obinJ3X5zt9PpHa8Dg4H",
  "key12": "XmBZ2TkrRteqQLYa7RSV1ZDvFqKXfyUxqYwTY7FHZFweNfYKPszcNZryTyBmSqk17rYc4YfdHDRQfytYx1vmupY",
  "key13": "3Q3FmZTypEFUxQPzYrd61Jpg8YDGh2uLGW9vwbSE9Wuvqsn8owwgnRk4r2MxgxAKp5ZjkuPwEv2NF6QwZ6CxxNcq",
  "key14": "2mkX9YcKJBgdfhEcepRS3eW7G1J9Q2bUQaeqkQYhivLXJmJuvMtj5acWYJR32Cn3bow5NJBijmnw8P28a7QmiziE",
  "key15": "5dG6L9i2VGibjUzhA1nWgSUD8c7KDZcWsJ7orySrtXdWHubSwgYw6B1GPU9MemkXZEC27KANAvS1bdCGZBsYStrg",
  "key16": "LAPM31WmNYz7eJ48AVdL97VH582MscPJ3iuBTVXju3a9DLkxdRksPGkiHsCcYpkoSdCxZBX2UBH5F5YHq6qG6Xn",
  "key17": "nVhPvLyMUMKdx7pxHyELu19a6ycW1VyYWv5ZTdp2qo577irrGRp3edGJwZVxEc4kLVYZ38Sz6k1SPtvDRDKdGyn",
  "key18": "VpMVKXe4ZbqiZyCb2AETTYWUDdZbngFnHsm4MDffMCTjx6wJ6TRoZfN1prP7gJ9TG4D9yhKmB1WPWVGBxDhfu6M",
  "key19": "5uinyLQv479jdzUH7YB4QoagathHzWwDCUB1hJTJVTRfHxGz8FZZEELqi4nqtAsNcuBJScjxxc4qqTcMZZhyfkSV",
  "key20": "4BgZfv15ceGaMtbDcw8fyk7tgaDR7RfELvmwjTKxotruS3sLh1SdrwhW7ePxxXg4UFdYnmHg4uVTR2xG9khdoURC",
  "key21": "MGq2hKJ1ojYjK3KAAxPcaGKVerjLgL8Ltsm87mXUag4MhFgWeqyPsM88w5YWu3D5p586cEG7XTBuqz5EtBRTjm9",
  "key22": "sytsdbh3kP2bpovjsDuAuv1bfDzsfzjEzJ77CmNoVaTk9vBy9Qv9eth5JcdQy6cPQe53WCh3NSebK3qS3Bfho8b",
  "key23": "24WDGNb3s33spLCowa8NUxQmLJFfkL95sd11xKoAQ7xznw3qxnBmibcm5oR42dYSLpmoHpQxgcMGyxinpsNKzLAk",
  "key24": "Pj4TUfpva2bRBnXbKMncMYxRFgZH72DWicXdcuMsaQYHEAdCwKZNBSjLxNA4Fx4TaQCVbvs5V7N8BtowMeRw7v1"
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
