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
    "4aw5Jp3eSFTvs9NA6Yh1d6AXQhZz1FKA1UiRAdkzqsuVqPkUPHCBJdHr1jngp3YHZkQPCAsmS1tUTerN8b6dE6Ju"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2erfHuWJ92jgaQFCuy3P4vJjMpQ5VkuiLcw5wDzFNmwr9vyHBfWE1T2tgJu5Vi5s9Nc2Kz9hrFC5smqXhgYB5CuS",
  "key1": "9m3JiynnzDKxWXS26thbKTNZAEWejycUuM88iZ8UF6iEhF5RcMQs2nxFyXk32buwSoTtaKJMWWpnD2tom4rJvBF",
  "key2": "4W9HfkbLWNy9JzNs4M7StVoEWnCsvL2HawbdNvt8X77vwbMkAxixm1M5GGnaoj6gtt3HPqi54V5f1cPyphbwyafK",
  "key3": "64VogKtxUrPP7iN73q9nkz2sZ5hKUjr7utp96aA8JL6v8yGb8TBK5zTyEtHYt3wmPVpACkBwSiLsPtRUHo1XSmAU",
  "key4": "3JGDa2aC9Yw5kEFGxU3JhHuA2cF49g2yDueh8BSPJf41ah9yaWLWMweba55WXoHwDkrGuz7P1vBWWDivbg15ve8g",
  "key5": "3JNGubRJETomiU3t5WetXA1houWRcmsyQTsNnyuYqaz8xMC3JofP8hhkvpdsURtwWxSxmxVyKLGwSJRDGV7eFbv6",
  "key6": "5dh8nbmTMTJPkfms1KP2zaRYbBcnjVRJQt9hS2iq5RZfVBkxLLnNPhzqGnRv68TpeyonbrHpqoP3aCTgQ6Jgdpe6",
  "key7": "4HKH6j7B5ZDw5csTj5HFq6XMfvoUZDZy2T4FvGx2Sr9aSGHZc48tEPRw1voDUKpiwRx12ni8PDnor8E9yTCfVJ9e",
  "key8": "2gMAQQ5EbP61VYdsetXbuwAuhcU2qLYJVCFm5Zwx32U4abGxn2XV7JW75jeBQt2zDVvPcQrkAXLGY5SyA2aB4ZPw",
  "key9": "3HQx2qkm4TCHP9SPvteZm4tG1qFgR11TGEoXfWknYnrQYwHFKreJVNueXfvGCSbPozYAQEwuWdsroAmSJHQXaq3h",
  "key10": "48H1sCnNEQGWvtXAHUgtCs6U3iQtF4dw1ifjqUtuBcuNrbqQ3bRorfmvJxkJ9jpzsrMF2Ko8kNVB2jsHc8wZ5Bh",
  "key11": "4XaSAeg4DjAQZnHhAVHhhSq7CbznM2oo5YbPc7kLDVRJfM6A3xwxHP8DKdeBj8t4BX1jcUJBbS83mocA417Lgdw4",
  "key12": "2WCbvuiopxZEUnEUb5TYJY4WHPRwjouX7bcvsk8NVS3yMnQzTJCqdVREVgeL3qgFVADppQyy7gDotxgZxJo9VCbM",
  "key13": "21iPktx2kf6JKiRkm3PHgfMnYjw7WdJZMqzuGPUSe93WHiAzYB2KK62driLVpT5YCoWCXgNjzNytKdqjK72BUeKo",
  "key14": "3vVgvzzMXvLbYQoENfCWmYpVfSpn2EMar252MAt9EhW85V3vdzH9ehd4wLtN1UprnxRPPD5b7eubeDAM7PzCwNX1",
  "key15": "22BDm4dd1wqidBH2iMDDeiwgbCiAysEAhVJgw5uhkxaMbyt5zdDtpXAUZ5jfNJ2t2gm3qGyeLZUeboAr659Fe3He",
  "key16": "2VUxzh4mGViqAKyobe5HBaJiAE3sEx77WPNC3cx5By5r8fYVtB7xgcgD4fQJCyuHKnhrCZR3o7ym4aXTau8MThMt",
  "key17": "4UAh3QSuXBwGsXLAn5b4WDry3Ld1Yy2o41QZ7xFBgHsdKR33A51VFSVVHyhZvH5eouE6Wjkz97ijcuJsZga4XLS",
  "key18": "2afxZBmZXgot1Vz6qG3Tz4Z6iCqdb9ExmBt4wxiCnUULeW3nPCKtXHG5wNSCsCVQ1D4HjK3eEdqr2e4JtR8ZVKD1",
  "key19": "3HriioJtehBoNSuFdV2ziEbd61a8jfPGi31HCHqmAs4m9KSAxDqZqmXLBRXUQ9eEPofYKuk1LimUb4YaL5eWwZP9",
  "key20": "3SG3B6nNsjEWeg7Jfxwm7T5KuR7qTnYpnYu8gTRCqD9YJo1gPXGYJcrV5RHcWpBuzyyru1YRtMCKw7PW9sDLMg9A",
  "key21": "2uSbnbhi6d9TYtroJrQggQqtKHYZ66GtDBDQECvfb5kTbs6oMadQmTCXtwbBhoTpLQvZEnZDF2dh692jMQ2hQuv8",
  "key22": "4tDhxvb7LMeTszBSBAh28gwGgBpKNccxkrJPPCsMChjsgB8wrAHcqCD1NEyzDNjg6TyhDRZzJfAk6NAMFQvEosj4",
  "key23": "3Y4TxdFNW767qongdSG7hzBQzETrZPHgtAGe5Z7nnnsFRqb93V4Akwz2wjuX6NEv1v8EgmcQerkU1wy89D1atY4g",
  "key24": "5mpKVbDHFMHjKVokYotxARrkpA9Gs822GRzFQzmxGYmTRk2tUU6WFCdQTfcixfrBmzrEbTqQjGh95Y8EYrNp7pmX",
  "key25": "3pCbX4S9BSX3xNxxPjXx4aQMbKBHoAiVsCnKxrsDGWKQmrW2H82GHhwcyjzoJpbJ8XPLHaSrwoMvULGEJpik4SkU"
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
