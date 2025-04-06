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
    "4nh7ErvFDqStrDUSRheKFyfwQ7acD5kc7AFFPWHH5Y35T3uURBPSq3P4JZ97CMnYWzKJ73qR4w262wfSHNvqZDU3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EgxW8EQqDyYTDq4Tg3bB2VSxYcS53HQcjUtbXeb14FxAZroZK9qnJFcJVQ7pU7o45BBqrUqpaR2wRNoNPVpGKa9",
  "key1": "2xFMKRQFYHR4dfG9NgFfBtBZbDnnVpYW95mXju8Pmdz2jvyGUCiHSn3ohb18S3od7LpLMvzcQezxXduKcZkKzung",
  "key2": "59q4wnjkpHtiLSDQP8Sv1UibFZ8Xs8pQHq6vGDaZHVvnhNJsjhRoykmkSmHWJWLc3apHqg5E7vU3n2hyPh6SwFbw",
  "key3": "2VvMsXASa5KgxLDHkKEpKVAUnZfz3KDRfjLeVEL4dzSCFAM91nBabpuR3WBQyqNrNNqTn3w31BkAnogwjVWPUBLb",
  "key4": "4EcFQymdMM2yhJ4MDvWorW3cssF9RV4bNwGbirHE587UCE6LLMAQwTbANHBe31JvhcwWqEiq5pKzceLTiA7Xpcf6",
  "key5": "2v7HjPxSk18xxeNhKtt6cPvneJVhUbMQjK8t659XxFof6zhrgbNanFHJPqoQhis1wgXUxJxpxhgMAQg4r1ZFc7oz",
  "key6": "ewUc42TuBSS28FvRg8j8SRmPWNaqsHQHPoGuJcR2RvwQfDx41bb1KgZ1sxEsfxMqQwjnhsq8PMtd96dqWAuJfBW",
  "key7": "5VjR6fFy1J8fyDaGaqKkeP6TTX8udP9sqLEWBMN9VLpR3pdgfhkyiM5NVes7Mws4QP1GFjrorGN1Gga2TZ8datQj",
  "key8": "3pXBBruMN3crKrwnVbP6DcnRy7pcC76oW2SbMFLHG2KpGf2Dzv82xPg641hKhjTF617MZbhv9swwCxUH4FmGiA48",
  "key9": "4hfknYoGCbr7PPDS5HpUqSZKXRQjwzCNoUkQ1sEvJHotxAz5K5EAf1duhyuP1AoEFXeYhv5CKzzb24mhmkAQD2Au",
  "key10": "55BrJ8QbGb46P1DXtzy75XzqJkxa93yJcMg7tW526GbGSSCEhPQzuEjiXEsten24WhRsopKaLj9roJdtr2p8XN1Z",
  "key11": "2UbztsNNSiPiMNDPy9TeUiC3PbCDgpXKoHhV1u3QreQ22obRGJwzkdFkamN59eWcTyjfiRsEiZHFxBL9eiq652Kh",
  "key12": "4Aif5oPCrcDBfHsjhzMYRZpQdGgCj3kMUttCEd7z3PczAtFZ1WLCUaEeENwZB2vQN3CKvucnJwefoG2bdPNgUGp6",
  "key13": "4euPxNvTEVNkz5rS64eLkmXGPEkHwogcD7PTzmvfUyEAsTjj1oFef7Sb7YVy9jngiLATGqBzEPy9ygwXTiBLpKPd",
  "key14": "4MkzhEc8CBniVogtrXFD5VdFrF65k4Te7pf5gySwejybCzW9aDxevjZvTNRBA51Na7ps3sYjFKWSti2vUr15j9n4",
  "key15": "2zr83MQDtmFCs1LtR2KrM849x8zPuR1Ew2SYhBv4s6Xt4Z1fndJTbV4grqH4i8LarojAK1uFf3o3QCEb7WTfzayy",
  "key16": "uRvX64RNDtBjyrgdSX4sTSJ4BsRykDdjawWdFj6Cpexc8E6CtUJRHBywkY5gRK9HZL2tbSiDHQxYJuV1wJf58pY",
  "key17": "3i9SpdzDP48X2XUFvWExuqT4HpWCzcmzVpTNrBR34BgDY1ZrY8CTMC6CScJG3JH13M9YjSjpGRZquzabMVfLYYq4",
  "key18": "3UNpVLAHUvWsutrkPrJQFSRH65MiuAVjK5SF9i1aA3G3oMq1N6WQqAWJejATSjvNEt1PcBJ7VDs4qMbgiPNQkGcT",
  "key19": "3bM2vaJ8tMp2jgC4g3nQFJcGHbvVzRHhSMqnevExXTXFDi39BdFACwRx8VsN8CPPtAoYhiTbTizgfRNWDeiMNNhb",
  "key20": "5wJRgvyPhUqw6aiPPSfL9Zar2BdT4btH8LzBMesSsPeZ8tkzTzAfv9mkc1JSCi3h9DjusPnWcDMkMqfFnvRoP7Ay",
  "key21": "5y9gBuXu7bywsh4TWdn4ypYZwC4V3oTG25gwHLxRYTWh8iSxqiXBD7U9xDAusxZhZDjhwDjfT2qU1oRPySkeHsZs",
  "key22": "5ijofGskjPKVHX3jHUGfwRTSMFwwri6ABN8aaijoZMfdvesxKAaZPhQfGqovtHp5nAQhs9tdQ8iwCw8Jmxfe3cqY",
  "key23": "45UqPuazZvf4a9Fv15sRuGLXswGDpYxJZ8zqmedXaLcywwx1udtDVBGXCjvxaSNV4jTMoGYo6cocUdJYam3zsnBB",
  "key24": "5rnzkNcnv1QM4HySCQ9xSSXGEQsPsRSeHcxNLHUp8WEcWHRdutMBySRcDvBX79V63D1ToXCTypfj5TotnHkpcwPf",
  "key25": "49ECjJUurxibRRsrMC12AjsJnLVEyceNn4iygpE47o9usNnzp2XZxFkaCRmf4Ry17QUUW9HJDeQqAxefv8zy7aoe",
  "key26": "2xMGonVrsbt6Yx8GeUEVQffUBp6yASG85Ren9nkLJ7KRvD2k8ZC3rzTPzyEysC8y1PpWnnvH1MMYNQrVZNr1kZop"
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
