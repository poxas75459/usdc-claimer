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
    "3GD9c3pefzE3rLgsT78QbJBf3nsiLP4MhrME4KFX4eRg9J5JpkhA4fgv4zKcUUjThor1cFpZh2X8dGfseRWtBy9S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VizHQzMNuWzm2VXqnBTZCR4LpoM81R9WKgqy1yGhw8CvmYqUbBeVCZjpd4VXsEW1fXuo9YpKYQGdKyaGrSsDvMJ",
  "key1": "48Jg83JRbbdUS2uoTcjj4mMkoh9oC8XzP7z4Q9tV93pLpFXi5rFBjypkA3GF94suXpfJywCnWE3eJU5HWWGYcyDa",
  "key2": "5k8VUA3qQLmFuGQ8V4PKC1FnBmsYfbEjpYt7nPfntXPXAFmh6WXdG9ZBttSSXUXmmu2t4WqzqWNBDbx2v4mQVMFt",
  "key3": "5mpCSFxkmiPL92qWVKs5N3fP7paRfUnJRN1pyRbNVs9tm8HivyUHM9LWeo2Fcb1hzjURgS5BbQccxjUNWJZpZqJK",
  "key4": "52RTJWKCMBC6JxNbq85ktfxAyioYJmj2zXiyQ5UdNMKTuXmJ4rbgDYhhUJgGHwjJrppY4wUS8j61CECVNMgdFt9B",
  "key5": "3zVxcqD2feHyMRghEP9pVfPcUuQbw2imeTBNNytncww5EXm7MGn9VSyVcoR9H1DfxAj7zNEHEZm1XJPB8qQKY3KZ",
  "key6": "3Q6EHwkk2vmMvt75rYk3ZZeo6SMvKMWAgHi5xWfqGi3ugcEW4S5UHHLpjez5Bd7DA6J2JAwBakm28jetJZTgqyh7",
  "key7": "3MByL7GM4SgKKofqAtyjx41JQkAfw9bvMXsnn7vX6pSZoyZNpwVb3H31utEW6rmhCyV3GvugTVziNYnPsSNk83nK",
  "key8": "2Cdz3S37UBTmYBYzCztfxi7HEWgqeggGJJSZbZ7ZB6P9gw9hwbJTM9X4sbQaqRTKT8nu8MQbaPqKxzM624ujhKzn",
  "key9": "3Cwt3RMGLeMx6riYdQztgEAijgNWkLBBzq4UD8uivYW3nqRc3tGxqwXbcKzJ5abJSf34eciBrvUiA6HG2FHwuMh9",
  "key10": "37c87XQ3SAmA4pmVhJ5JGvmZwZzwhhM2yc9g5bZc5w7xrbeFsuNrMfNnKcz3AiiRwpYzMB8y9DXkRGJUAPsktJeM",
  "key11": "4WYwDBbeBgb5JSn6ptJBrRnjv6rTyJEtyLVN2y22jSVaT6DZtxF21CXXpjHNF97JoYQz8zMg4pQkVD8wYy8StHW1",
  "key12": "5rb2c4HKqazC1SpcJ7oaNyUYKCh9Y7v1xnWeAJ7g6dnmkVZvqyJxVyBZ9cYKACVZ5eULLPFa1VbRKNEcWuJYEAGe",
  "key13": "5adnVUnNnFUPs2QktH3cmMNyix5wdGUuHHAhrksJfZiHXM6KsoPm6UVzymHoaVJ21Zveu59YRi8wCGp6M9inxtdz",
  "key14": "57y1w5a51QxjPi7v8JGu2rFiiQLtRT1NWVnFuKw4qM9JE96gm4abo1dKYjeCyxptddjxkz3qoucjwnfWMjoQTcwD",
  "key15": "3NPvKCH8wA8aJNWoggVGjutxMZc2TFXt4eWjG189p3hqHmagnwTqLQWZZmAk3R62SbuW9snjwmtDJKx5ctjHWXnG",
  "key16": "4MiVWSbTsqH2Bch7LZfwCZPRtXSLdn4n9ok5epcoRFTVYfdh3isB7XqPiFvi7BrcB5t5BCgZyASGFhVy2oG7B6uL",
  "key17": "2vYQXTbSw8hNR2jPbRSN7jdNHxhUY71GHUwcZNxhL6kEwG5xmN7xEccm8uH5EB3m3e6u2adqN59wbbj211tKrdax",
  "key18": "2wbExiKdE23RjZniifq6kCvkGNAmy3TZpg9hSL6ZjaLhbY9bTFGAAFgfcxTAsoickx4NsdJS3Vc9tkGSkXKZdm5x",
  "key19": "5saAgtJybw9ucnSQwMKARq6VEwKQWTy7Xwag1DWeNpR2WVr9WyddLPzytstwnaXu82NURzsQGxZZoPn5M362QADs",
  "key20": "2QpS7v4tsmg6C5MxJ39BoXhjbZRfBS3zMmB7mfV3AHPbGfb2VXAFoYYsHeqiVxJBhGAR5tdxRB2s49Dnd6PScdgm",
  "key21": "4WvUK2Jz656qqPo8Tp1SCm1m2AMepRF8vYq14NDHBHDynMVW9zodPqmX68X97myQqx5cnLH5FpX27VMFvERBMZkF",
  "key22": "3hTveRWzkXJvGTh6ryAotgKNxAvKzKX2W6h2SGkmpNsTBLJhJXbgogQqLR5nHC79xDFqjVjGGUhRv8ZtXK8pH3uJ",
  "key23": "57LnRJQVA3coH61RwVSXeg1FhYF7FmM5jVHTK8TCyKjqtmu2ucL4zqE6vbRmBBwdEnXu4Hc5Sywfc9xD9oCGeT2n",
  "key24": "2P9indJ7HL1wJske86mUkuSaLRhSCnQrh29dFWPBDWFVke84xvbHKEs8zR9rrN1obP81ZHzqNMrANx5BDdXCNEGr",
  "key25": "4uAYdyxEYum91iS8c5tss5Dg7DtYrcUsVyz8v8bYHvXrskSyCiyTxnpB64VENbp8rkWbNHx7N3xsjyb378iZXfAs",
  "key26": "5ocvabEPgA5tDcK41R2zmhjmAJKQPBRigazsCVZgPRrEApzuiFym5VXsQiZh6ipF2dtAcQvm1WNXAg7qcJ5EkyG7",
  "key27": "3WpNQ5HswLCoorkBmwM4JLLarFyK9nmEXn4kSpdZvAgMLVsq1Qd1rDz6pCUbrcJQyGjBo9HBw981Tjnszm78izap"
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
