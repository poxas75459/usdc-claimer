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
    "39kxNxUGBDkmPqS3mBVAEub2Z7JqeCTugfpnguH1qs5vTLhkqTtEfkfGd8ZJB7x3WLE1dp3kZfxGSGNzFMUySNNP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ymZuYFfQq11yQMpVSSHHJW1QK6yowAQMTreAWqNKQdwUbB2LScRhxWJeRYJFmKpA8jnAgupjz6ibps1EbxCY6q9",
  "key1": "2iioj3nAcDyuxtantYm3Wi9d4jiEKufcLVyma8zKSoWnWVeSoC2LZj43FQo1yd2ns8pBhSZNnukdMgkFDtbVdGgV",
  "key2": "5ypt7FYm5j6JVd4vnKLP3UEDnJawXyocc5hEUPWJUGAuouGdVACUd9sB93Xyp2TqbHedSu144MV6qevmGVQnrWmm",
  "key3": "2w3ge3amez28CfTte2zV29BFJ3PNZ794fYR7F5zQ1n1kLp6jU3si6nF6Pc2zGoJSBaifZGKeVTZ4iGVWJoy2k5DB",
  "key4": "4bChiRpABeWgVhVmnacFEjvbrZWnoCkEMA5GAge3Hb9GaY8KnWYSkjW3cbKUE2CLVWJjAfuw4hDiocvaaZBuYEzN",
  "key5": "2473xjZYbtGREqZCsuqPEwBP6Swr4ASmtsoUuPgZgRV2A8TDT1DuK3ibnCi2fC7jCRQ47y1gaKuxJJkRZbGstnqD",
  "key6": "bYAFRQb58bW4jiAshNCYQRjDkm8nnEK47bUAWajkGnV8jn4hXPW1peZaoniq7RXfm6y6gWVaKb4w6dmins4Tqo7",
  "key7": "56mkRTEy1M5ofVPhDwjbsDFpP1ewr7SjWVrusAE2kwQw9Av65Jhb1YGnH7footRzuVJqhAwM8BBTwcfjZTReYmhZ",
  "key8": "5frMix7hRiyWjEbqAHpyEZxAUdUDHXBFXdhECXwzCoW3E7JDKVJJeRLysCN9SqFcu7jvWQXeSVY3BxWhAKwZ7Jkt",
  "key9": "3uxbD3tqkdA3iDDJecHueoyuBHgtxMadCcsJmWVVruJGafkLvyLHxwAfq2CaikRfCHBeGQLK1m2iTBATpi7mDW11",
  "key10": "5gsdjBKg1W7TVBTSrZ5ivk632EdYS5gWk71HnserXjLEqqFXaiacWy91fVTxsvS59BDoj4HUyLixJDRvZSV739e1",
  "key11": "bciJFCYgWzazkfLzMGRZ3CKUzmJkyF4GyrjHRAJ9wyPbmcueuS1C5WosnpqB7wRPuysn5sGxpu2tpru2qQwPBM4",
  "key12": "3qHKeS1A1Dq6uez1T78RehbEciDfKNQdUGHkJNTGJ5pNjbSZrtRaggnLZcZQ48jBYEYCw4PANmXCjwJsTN27NY4L",
  "key13": "24wGY3xTVZeRDyJMhUrS6MvXtfvLRcbUoAMLhDF4NSF9FshfgyMRQdBuPfQLTvML6ytaAt5ibgTGko5Ge76bTB3H",
  "key14": "3sGmpBQe8L63i61gUpzsGFFp1UByLeUBJNnqpErZhos63A2TZd2ortmQoMwYoWf3QYGn5tmf6625zBe65jbDsrdp",
  "key15": "fbExXXVF8bXFhd3ADgaoV3AiCsFhm6NYTJeXqGfa3W8GW4YSexb4qTgANzUCFrWMTJUhN5pdie3pgWYKHcQjSFh",
  "key16": "2ydMz5KUaGN6c5uJCPoUdLBf14eNCd8FMUBGB7KL7VXPMZvjenfqBzosrNwsRdg9xrKDgzShAnfKLeprcoMYTRVh",
  "key17": "4DH47mixuR3i8WQwkubTiT1B8fNQ2LshGv1AazwUDMsvXCde9HSwqfAptJq8rhJzUsWGVoZGHesfSwYqEHrb8F1q",
  "key18": "4skkvBNCkteBtw6EXt2nqvwTXgC5aSMfw1eRSRYh4mUsyJosVKKzE9ygfXq5odooM1rmKQZoqtAvvwbRP3oGdcd5",
  "key19": "42mkUTRMEh4kzDPCwbi3zPNqdoEvGwtLjzCojF9Jv72BqDw9synqYpKawFnDhuhBmG5zUxiR4XpdYJiJK72EjtLv",
  "key20": "4xJu69oAvHaVGPpJ98XrukQ7KhN6eEJYPBqoEFLFydAWECMiGrFYoCbiKQT7pfmz3uNr5FGVhe5TiMNRbarSHu6p",
  "key21": "4rzTznS8YyHefPMUQ3Vm38nUPonkVcqMMufbLrfUEDoMYv47JifmJzXRFZzntAxhDXtvntqciVwxgJJxZwGYJ32P",
  "key22": "4XtvJBChAy856tPR9h6MfLoC52Xhmv3K66mrAmtHLeefwGq5Xw4NWBPTGAndshuM7k9poF38SumtWghdmECizsDC",
  "key23": "4L1nz5ppu3XHCkpPHfXkE37iwrnQj7RqGFmoHPjW9rVu4hMbrpL6Lv9UoLaroUMA1U6AZsGZcpswiXDvMvu3x3wZ",
  "key24": "4nZERqfdMFWbJPUzKx1gueNinx4P2ABdfRVoSUMt5fb9aJtmATMqAhfso33FF72EHA1Gk8FhryrKYzdCfCC1f9uh",
  "key25": "2nFRKY6HuwRjpT3caqw73mvkjK5S41DgeHzpg7Qwjibc5hNzRzSLJPUHJNzz9u24hYLGiS1kR18LTybPZzBBMXF4",
  "key26": "5xeLVFfxZNfGv7b5w8jWatiK8obDaYvAfr4S1ckubnM4nrxRzvPYykP6E52R3SVDjV71iKBJEgBwDA89LQPiFP2p",
  "key27": "58g6JMc3jJTb3pvsjomUkMkAmRDYQv7zvn2dokn9PtytMkUobk4NEXBqDoWXSfp5xqPdpZhgDyTjXVC1X3PaGxay",
  "key28": "aQtuTZrHKGNG3oywxmybWqCHAVnPQRPj2K1wNw7J3TtdMmjABfEAaDHJ32wpgiXoNe3xfQj2kogdLm4ea1phcv5",
  "key29": "51DkMMqyUDyEiscywXySjmvPG46TW6Ggr64mRt7icpTJKKjNvpgtrsn3P41YWafMmr1G6JbKEV9ddLFrQLmQ4te5",
  "key30": "5LwxHRzCP5S83TZnAiR6uLZeQMrntXBzUwc23EpYFb3Hs3aTb9P1UPTUrZ18wFs8sLNpHFcnKB2oubfQ16RmwY2y",
  "key31": "3vBPeJhrnuB3Jg9QmkoFUgUQ4wYUZUajHLSW3BediYvMJWmLAUui5mV92HpZxr1Lbp2j3R8Xw48UTxD5YzLzjpin"
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
