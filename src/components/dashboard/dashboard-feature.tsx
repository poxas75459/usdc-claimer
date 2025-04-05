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
    "5mrvoaGLZ1T91z2UJ49QK4zWktvLqyDEBiigZdCmfyvF9emZa5QK3C5PaPUnvnq9VmWDojBLuNbKt7iAzzmnUYAd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iCsHw4vTyewhPq6etw8s1JndAGwEMit5abtc7dbGhaMSBtekY2wnkjEpPAp771pxgxCHLeNGouAWnwKJPHbHLXB",
  "key1": "3Mc7LbvqaBQvkws8oMjWxuYiSFrX6btw6Dd8p4nHwYXzfQdBuRE7y7XdEwqLVvm3ucoTbEUbatNnC55N76nmeSq7",
  "key2": "5162j8eJaYu9TfELMmbKw7rC2X21eYVumUoir4Dv5cgYtBe2q5ZbjwogCkXxA6s3k98aSKkGeZjgkXfVab5Vniwi",
  "key3": "4KpMvyDbzxvmNMxcoCrUpDyaPLinn3sGXScRjws6LsUq5GWVEeN589BUx6jy3eVgvT5adN372NU4XU5hzoyjuMC4",
  "key4": "Eavi6F7jJFSUGqHd2KH59wS7oNjjHb4tFaDzWYGWdjL83yx5ysqGkDifpoHqNBvpLma2a2JaEcZxTnefvyChj2F",
  "key5": "4DZbRU62wEHChy8VdyZHCmB1ThBWXttpj2tK55so4knPiyiafYYBNinde1wzkiTotVPYaoL78n7qCnXcGgQ5ww8q",
  "key6": "356FMAekn5sgqNjgmq3pwPuWKzEf1gpogikdXPBYHoGUwJvjBDRLTrDvTt5oWNyQrArbuKjPnicmEspD9qXf5ojK",
  "key7": "2wo4UFRnZWnF5VQGV2S2idzWPV4FzDWK3tHoofu2LaPeXCMSS14FBV22vKwF3fCoe7x44uJLMAV2icVJzLa3Rvtx",
  "key8": "2fRWnY463fYjq67Qc9VbNMVXRGE4Nwm415zpfWTKMgGTL4zrhxMWAFSb1u7cij3ccsUrZ8p4eGUUHX1pQYfqn7aP",
  "key9": "bsr3EbFvWjU8xLZRS8ibFChzxo7X7g1xUxQQGcAWxHDYjSKx5U88bkRy5J13So1RJeZNpjd5y4ingm4fERZfKFo",
  "key10": "57hT3qfJTJvTozfzjXRnwU1Qu7NNaZAG2maq3NTFwQwVAPCNmqG8soJjLV87XD4JoST46bVe6SrcJL53Sxpum8DW",
  "key11": "2nzgp4ZFdk7eoVniUtQbrQZxZNtwfYHKT1cUsaXsHxsSnnfnBM6119vFsWAEsFum3BrVXrW9kpdYLCcKXJCQjzw4",
  "key12": "5c4Z77NGX4YeFKQNU4oNAtnqvNa4DQdyJcF46LHyrBncDjSBCnKDPNds2wSounqpi95p9wD5stfEQMr3dVTNygPu",
  "key13": "7JDKiN95aKvnfBip9ciiacRoPAcvKS9AMP34uNcpwtoxgsgEGWAQMN6gzD5KVELF258wSdAZz7YCJBsb4o8Vthm",
  "key14": "4JDwCqu1V8YkNqHGgDtu7xVHXeLHX3FYM5kPZ6G1xQdTFAu4hYvA45AzdZKZWKDiwYrX2sgqAXTWcCKxfE21jheP",
  "key15": "3EhDT6oCyyrJm2S88GTeqtuW1wYH3sijuNqokPTaeSPhNxKd1vZidKs5JSDcT2gAE2SpwQjbj5hjyaPe45HeZjbh",
  "key16": "28ntUxdXpY1PmUvjjjMx85CQDy8jrKPuAeYehNd7ge5bveCRxkZKUpepDPitxfpBLMnGLX8HbuTevrDy163gqSEv",
  "key17": "tJCTZHkbc6DiEzkeS9AoEhsG7Jj6XkMtcKi8hUcAsVgLSyBXeEW4qq5j6619AbxrFjE69AHNP6CPq4bmkBoCTca",
  "key18": "2oj1UX73GtTdpCwDqhDaqGTBNkfYj2QEfPjs4uUGektFkRvtz8QEa9khjpVkUdJzMTJNstFZQKcsLBRcN88WkAJP",
  "key19": "2G8PrJMQjsZe7R53nJD5YnN6R4eDyJ1LPnPw7NHQiJktNxxTX5o5osj9h7wMzqQkytRTUCKXJXUQ9WFhm3aCDPPc",
  "key20": "4if6snPtMxwoTP4v2hCFcZJFr1G1V7mT359os7d5wuWm92FgUp7bpEymYxmqbBfyb9BygbgXP6xPfouRERf5tLzK",
  "key21": "3VSo4mEQEZ8VbxHAZoJQroVmKA8d7asurT4Tirv8vHtBkKNeDusDXii2xJUukhRGd73rhJUAdYYHi6Gzk4fPg2Lx",
  "key22": "5xGjcFgfHbNiDRDpWD4JR9EF1zh3XrbeEbDkk9E4mhaM8TXxAuNPa1QLEkhfj14eHMzTQ9XdTwm5f6pAA1RPrXAQ",
  "key23": "iCtgABK6xU7vgFZWBYtEZUjRXBndyvRE1ShArcEVojHVpayjEgrj2oZxoJbdasaX6i4FFaBK9E2nbuazjdhFmWM",
  "key24": "61mdkpY3b2tpCcwPYFLZmqV7k7qCtKJahrpoaSc8my22SQ1ucd1eiizNBsttLhoBUfSVxSCe8NRSFpghfPfBT3Gi",
  "key25": "4CDZ8JRTyX55x7EbrbALYhsB5JgzbzYfrdTMBRjz51EABTJDUNrA5H4AfLTCQQYP4VRr1VQZKaHq9YKz14K7jQG2",
  "key26": "2oEbbMgWLaneQLq62HFdoxP44rx9RKf31YtfKPgn2ChW3JLCGFKbgrtV76UueN3f48ZJQAE8zRqaV9XMVdcrFzvm",
  "key27": "2W24wsW9c5fdwrThG37snjtSKKvtyoi6sqRm6TkSmTH6sGzQedpF7NCLVmRPH6tT26DoSWr2NQ2f6jj1vrue44Wo",
  "key28": "MaxcnLtcpcPeLw2RsupdDEA2rQXVrxidK111QimLbgAGgHnAMcVHZpox6u6P4Xp9tM35mAYaiQstVhx5kihDRM2",
  "key29": "5Xt9C7tnKBYvMoVwTAMeCDwWtsbjr9HYiNdKyPu7UAeLWPvJBT9rw7yYVKQXRwGn9UJDuh4ecUPbFCjYJWvyHjZ3",
  "key30": "5x6Gz83hy6oRxLUg1R2DtWY9EAxTLeHk2NvWjBpo29W3vDTpiaCcLH5hN7qzWxC69eMYkUAMpyFq5RhXaQn6Zm4s",
  "key31": "4WUWih3gfn6VsPW6HMSp4b6V3gmHAXbWyJTfPJkM9CX7M5HQNdbdG2mePXzXfHwog689qrQ7bMNje32Q4ugWgh78"
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
