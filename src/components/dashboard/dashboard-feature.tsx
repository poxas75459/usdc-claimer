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
    "29pkiNkMCV5T19MGpDFj9tuY9aTvcWr9nagoK2zBcNkHEu5MP2Aejzq4yVyK3BpjmyEnLSthhfLbX1fQL32JKVo9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WmZBtxYmbskqJdosHAMXtwLHLJyrdxbh42j3fHxTHVSUHiXNrK8ETAqzV33KTfC5v6A7az13kiRYoWh27HnvufA",
  "key1": "vQTmG4HomwNKZEF9EsXKRiBajTrzex7DUqy2Xr3h8pKaHsdFR48ZjzXNTcrG29aTb1XbsBWxFX5Div2wvj4HdUN",
  "key2": "4XtyLdfYgBuN5UGoQk6dZdBzt63vLkSp7y9jyJ7uc84SgMxHeZUrKVn5ZrbcMR6hpYxdu3cpWvofdueLLQZLqEgJ",
  "key3": "51iwnvcYxvqGk8ZBVVxwBpUWE9os4iP5Gnn7YySJBgbVkvf4UUTvYuJZrv6wMdfw5inV1QxyXRDaQ47XSeQ8M8L3",
  "key4": "ADLT9nzxu32GmUNPh2HYjG3r75WsR3axGyP8DixDv5vb9ZfKD5opizVFeS9owJ8MUmgBWLfs2diPNh3Wsu4ptQU",
  "key5": "2mWWwUhnRARd8PTUpEsXJrpnt5dCKBmhe75wqZtagcyNsb48SBqvGHhWc6uUx1rNUp7zK4acvfyxzE91YZNtSq6a",
  "key6": "5EP8bTZkn4XKHHBb5869UDEtCBSKh5rnYzKztiTV1Q5MevLTpNdcweacj3Zk6yDKTxXzUrKsVYvTYvJU5CMw9BPr",
  "key7": "249PL77nKfotU6fS45tArgjGT9wVHrF5gkE5F7zai16RLsZ81jFHBLwN7qcdWp9A8kFWNaHmBCYKDv8ZXgvSDhCc",
  "key8": "4EmLadFp369bk76GbT7YiSv5pcatw5KVyUcitv6ZxAhshQMQZXqVoQHgKRWUxSWaJNA9cfe646SHkhzFTCjdsd54",
  "key9": "49HHZicnQjVDR2xEmEyegyYCMr5ZNAyXEzwL1t2NDqCMbyWuf5xoYDQNEj5vSmN9XmubEZW5iaF8S6Uzuf3NP5gK",
  "key10": "2gojLFYpF4MXNv4LvV7NC2fBQEuiU7wmgfy5GXykmGjCXJLS4YBXcfjKg3e3BfoSMARsaMBFq8pFzwQ5sp3PPng7",
  "key11": "4vAD1Gb1oUiJWmPSgpM7jY5yPbPmFaoDpeLcZ4iBEgjgfqpjvCKGDETTaw9Qk9mKAEqi6J9TazDV24U8zqpN3v38",
  "key12": "31tixBz6PDHxEqtCJLZpQmBv6ga5HM88m4qFC6bGqVquGX6ubYRqgAUvsryxiS4UYnXazSAwnj7nWEECQHrjTyBE",
  "key13": "3KTCdVcf1d9a7SkndqQ7G2mmG56hdoTPVotr5Adk89n8Rgy9d8Xk5PknAQxaMmkgzHse5372UrKXSW69w3nvfetX",
  "key14": "3BWsuvtnoeyGx5n15hZFQVAGyGcy1yyZFCJKQ8LaRffTaUKze1qFt6eBdFgVdHWiyULWVTdU13JKW8AXdryVo47a",
  "key15": "2phrpRRuQS18qHFH7hprakmyhoUUhhnthG8h6mVHb6Scq3rJ2P7NqwxnfzdFU56sYqQweXqwHz4ub24s4dY7ixkN",
  "key16": "xYJTvefkvpdad3FmenXScwDiaRomM1n3K8rZ4evoiHDGjfxP3chVfQDJY4xBqvi7g8UJS87267ApAnu1WdghZU1",
  "key17": "4Q3BrpGThmxZti735XwSdWEMxuSBjiErU1oHvYqGtBn9z3Z7jFQZDuzs2bJPQqFuPhwLZZuDHT2HEKZ8oUZtkUHQ",
  "key18": "2m9YGvJa5YzyzK2a4umiidhnmN8GD5edJxQmDo6jVuQPJXykBhV99pUrm2fYTj7oFva3T3giRGv3nMVBfLbq2C99",
  "key19": "23Qwt4xk5hyxYcjqGeHDTCfBszPXi2LFgCpZ4DP5sHn7GCTksFCTab8FnvyjozKmkSUFKWEd9SUazdceXgHwB38N",
  "key20": "2WrAgk4TqCMvEGAZ3yntjKXzeLy7xSwTizPsMbHKBHXq7tmpavBidgWEk5N1WpXxF677HoDmG8o1ufAijswMbMmD",
  "key21": "5ZvjgZxC2tGZT6ZQCcSy1Nw6XVaf7aVN37XpB2kxpdEGSiqbRVYnjN27ndnrE9szs4HNc3QyGwn9b3xZdUDdjWSY",
  "key22": "5oWCQu6sr7Ru9MpDU9yEMb5T5iYuZ8RWrYXksKBN5f1wmniMdUmuvM7cydS5RBjPanSggDB5Jcw1aB3ncwhyHuqP",
  "key23": "fbysmRgUR8iM5ig9XU7M884HxbVhvmgUqyFTgK1Bq3mjmk81XcJKFMZucWUE71MKAZLQvzTgPu85Yci6GPJRaGP",
  "key24": "3o8NbmkNaFKdLCa1LsAAWLxQYjn9mo8nUcrCC9eaizW6CFFCrhR1m1JEoMvDQDmCwEwsdatWZ3DbLsKiujxMXgaf",
  "key25": "559nPhPAszytQ7xoAQ49jZZEUpLqM5HQ99iV7ZrscpMKWWpET16bxZvhRDqYYEwHFhCegD4gBZxDZ3GgKR1F3iQu",
  "key26": "56zPJPYvbMJdMA2gAhYJRoUHUzU2R3GTh2Mjm7udKZtrK9Ap18cCj1k8qus5S1KbHJP2TxpeEnNx3XLuZ55uhE5j",
  "key27": "xoSUuAbxHoZRBurt5tKJp16ndDy3bkEnXVhHXMngKh4HGhZr2ugSsjaWV9HaH2zrriXrUbyzcvB7UmL9mND8x4H",
  "key28": "5Z9ThgmuzF7NUdHFbgvQDSLEbpSsvxyQBaE2forzetZTAehnuTb6yeYVeAFWUuWyo7FBj1sBWNvkcSUwoifvtBEj",
  "key29": "2mnqkhVnzfJsLTAse1kERzJdrDkBvsEAEinP3iggLCayuTRZKvtZXRG96id7uLQitfksjvsrV7gDTGmqE5iQT9ii",
  "key30": "3rBLRnxETFT67jFe5PhjAEMiUTyjghVrKZoCYk6GeLhTs1AxaM565nFhe9xnPAxADUvyCrYdSPsnsHfRtE8yFjor"
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
