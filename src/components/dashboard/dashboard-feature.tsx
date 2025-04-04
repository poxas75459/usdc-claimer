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
    "2rFDFSyJbZtZWCpFttCEMtB4RdtTZkm6LCoT3LHejXKk2XKf5ys1AsvtKfPhA2uwrxZYuyMnjLVJKdiQp8PstT2P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5k48Z2KeXnnHZYW6s5RaAfjbDdHMnfQehUEEWHY7hh1Ay5Z9t7FNXooKia479pw8EdhHzQwmEKWzVxwLAJDX5Vot",
  "key1": "49VQdeLSBGPzd9jseskAWqD5WUX3a4czbQNwtZnR4jUu9F7afHD7YCLx99toFX7atTxf3q1DKAepohyfWBVX8NVA",
  "key2": "3j2FPtp6YTCHWXxTkds9Zkjk1ihGeDgpb82G5rJ6YdxcR8tSZ3rMMAMPK1uxSx7GWmVpTCzFhS6GmtK6vY6SzSZq",
  "key3": "2zDuaprbAPS2yGVjEaZqANE6BpCeSUe71Xsjg6fzpDeN6Py5udWjFprEMCCwnDrZ8Yb9B2C2Hpk6pnnvQ53FHRSC",
  "key4": "tpqERnSRP1oTbrLytaw9KxbJCdoGuL16PxrUu1YAsBi9vGnqaurB8EDtDXW7tBvGR7ZGzFZnuuN2yoEnA7rkN2x",
  "key5": "3GpnKubKmRH2ubFyYjpHBtQDBZxZfTBs5Th9jRJKUH8r8gWGx5DpzoiU1M5ThC9mutbGQGoHJJdaKNkAofPVfFHr",
  "key6": "3du87kdmvRx5SETFUbNXz1cgHfrWJdwzrjkzSwmyNE8ZpmdZpjFt3LJXDTSewNfQEaewtKs9csXtJcyzDC7vZfXL",
  "key7": "2CoDayWSSd6cUTVxAYPmAit5srs6k58M7jNqY8r3dKrmVQLtLKKNeSwMjKyE6qxyqhvr9Z4J5F7pFh7GyLSdkFGL",
  "key8": "MBFi1BcPZb7AEQ9BmRcrf8oKp1UoFnmR5qU1sTiQjyLmrpuQD8ZSwASpjH8Zd6c4Qj1GhEVVVDV8XSbVwYpXx59",
  "key9": "4DYhGvJxQKUM9jsSJ6UhV4UC5BtCfY6fnPaQMCqirYs36dULo2vDgKm5HABaqB2PcDvsdwgb28BvtgxkxpZxYcRr",
  "key10": "2mMABhhUdFrPbzSnkHiWxJE4zvd1pL2QLCNvejpybqUmSJgGRVYq6VQvGTL5aTG16ovHtW8WyM29wquntrGJCDXp",
  "key11": "4SPTXERTVjHhK9FSAieTj81oiUJXAxSoW6Vs46DZoQ6Xtp12Y675txz8pgZaNgzTuDLMRakysFBhFxMNpH8WSwG4",
  "key12": "2fjPJBKLseGGDo2PY58qTr5YvF5hfP6KwejYyMbVb5YXcfpUxvWuMd5fBmGDK3HwQ3hev9iqJf6HGjt23Uo7YvCQ",
  "key13": "67FMVJfp7znuAYH9iiSt3zTE3AEriPZkxf1749gBHmjWmGkPhkvruhNcMQvsBgSrLw9i4YvTVFQhMPu9uetDrBuX",
  "key14": "3Zv7uG3wxoqpUryqKQqSe4kBXsFUKt537PYdF7QXoyfpNC7MPRaf64N2X2jUrssJfockfJGkiwEwMewE95Ffsjha",
  "key15": "6wa9Zk3vQfar6QCALpfnUsnZxkjXHWMwn3V2eypJ85hRY5gmMZsy3bzNrnNXQHWEXo33G7M4NQ8TD8C4558Q9jr",
  "key16": "4hNavfPuxRBQnBYsc6EQLo7denTrDsujEw1g3wFwfh7gMde6zKdZajQQdLMDLsYZUCEG3VXnfcWL5A2K3ii2NQjR",
  "key17": "5xGXjAn68RGp2eg1sDwNdRCVsJzdTSSqDe9DgrFAPo3F9TEwTW9UKLUZbfWQVxcSwwqHXvUNSYXmYskwKF7CPcvZ",
  "key18": "4wE61Z8Uy3wPkavzccb2fWwi9vUxc8fscjz7Eb4hvACmaM2QVgrwujCTD78Gro7d3EQSN1WbC1PbwnFhQ2Mo2TbK",
  "key19": "5R8tckzZt1vPXo99VJZD3GrBGhM422Ts881u2zN1v7XYRxJ3YuDMKmaeNGUS6ViNVuy4F98ByedM8dhFfoSQPxYS",
  "key20": "oaU9BUSoyKLFakKh2sqibyFcBDK8ZcmfovVNgfPAMStpXhDNYZfoHA3RbcMbgp8KkUyDivytHn9TaxBWxzZSbwT",
  "key21": "5hf4LtTuLXWZG6DT5Ehr9jKLH7pUmPWHzy7E8XxtkzAnf2MBsw3JXejSmzuXifyLt5DSa4Ln8usLGi17HBAPoy58",
  "key22": "4HKjpTdYuZkKQdEZKYYAokgJ2U58yzuXuMMELf7uvMSBM1D9Pgg73hM3Xm15Ffwv3mg5idexUrSZpZjK15KEz5td",
  "key23": "34LYZUMT1TKSMvWSov9pJWY4akrZXjTnWjkr87Gju692Bn3tJ3iifiUHu17E3vzWENpxE4idacWc4AwHkrTQQ3JL",
  "key24": "2LVgvz55Ku5xDiBX86Sk6tj4SMREXwRXWishk5D4RWbEdhMJjTvW26m7BwiWmwz9cBVmhviAx6trcyaZHjtDh8RL",
  "key25": "4gDJrJV1Lj7XogFgHuxtP8YaGnCKmcXeVDMwSwbU63N5MXbCZgSwYQVahSLfW5ARppCdJzm6ccTfHJ4GqxwWZcXf",
  "key26": "5Y8xuHPVGHWq81HpRMmuBYfebnVBD8BAsbtNtnR6CP5Ff7or1m7PG3TVd2ewqt5NbxZFkNbiyBsYHDza37pr6Xra"
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
