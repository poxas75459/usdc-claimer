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
    "2A3EVtnhAt6Aty6BfHPuZhS4xHqV5PRAoGqHtZ64fCM9wtKqx4wPGiWNWvx7w9H7DZ8Qi8WmtTcs1DUBiNC3YG2v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SnwoAC3oi8t2MQKrXtWd8XpFjWyEPywuJTJ3eWEb1bvNnCihQnkrPZhndFeZUxUMpNNk8nVGU489Nuq24m6PmSG",
  "key1": "2HR9x5qoENfVkug9RkkoMCghZraLN1HHFWVfjyCQ4bYcJFyum2zyRyKcFqoWpxm6yjJXSFst3Smi19DeTYNaK6Z8",
  "key2": "37N2pRiaC9bUVngqJJNWpjwjrGq2rz7eFCrdZmFzY1QXKBMuaBBf2HJxR1UBrp7FJZKAJWhzWS4DTSrLdWHQJxz5",
  "key3": "UjpjG6N6yFqXiuMYFs1KKTQUMXwUivfayb5SeNbbQJWujk6N9TFsm65tUJVSgReHfc8nQb1687CE3EczzmiXiXx",
  "key4": "2CgDFS5H8RVQ4d1CUpTKUFHXMh351DNMr5GyzYrnRhxhfSSuycDdCYY51SwLAEfaR8A62pLWrww5YCTycGP5rLwk",
  "key5": "3iGx1QtNpHiS7T3efCHaeFrE4YaemaWCp63b54oPbrCiFWZkghbRZxZckNwpMWBpfAioVyUG3q8fhc8DF6pxG9fz",
  "key6": "5ESvovdZ9TBuQ59Ya1feY15EEPW8unCVRPFfoPxyDqXD9UmiscQB7ACjfddNWcSQ8nAzjPtdW9Y5DAowxNZeBYrk",
  "key7": "5JB1WCth181DQYnisc9hJHvLcr3haz9rQ42nzRtSCHbC2cc9Z2V8p5jxUFQndLpoeyocRsuuroJZTCdrEpZ6YEck",
  "key8": "4fXZJF86J3RxQxuLuRMMp3319336ZvhAoER5kkMoYs4i1WTRZkaqZphknXRBu2A1UU2h7mmpcFQY9eTdUBFKpgh5",
  "key9": "53KF2rYc7ThbXnMiGF1v4vBNigfJH8tN4MJQ6BixH3txsGG7djo8oQLNDDVGxjCKKVdy6pNyFYM8kxBREF3iBPrV",
  "key10": "iQB687noBrn2gQY9usuZJvD3UmuwraH522vCm5z7hjHT3aZW33fpX9YyuaArpk5sn2CT3n7WFQKzrgT53wFVYth",
  "key11": "54CB788DeuKGBv5wzHWbVFfRSA7vqBxph8S1gaXE8sUCbKo9nALgP2EdoSuEWAfbWkTJZbsTu1RYVEGiTjo5BjEG",
  "key12": "333GjpGE3eEUtikX4R8Lud4KNH6bpLkZ5keqqodeXhgu9aLg48BBvrWvHNLFWAEiRLCFpzaG3y6rwNwbtG7nK1V5",
  "key13": "43uJ5fkmwkuYDGHk7Sy1tUbmtJbtqhtxEAQrH5cx8GD6CpA3YopLKB3HGhKq6Ap277bkxeKKLxz2RrJmK8CcdH4H",
  "key14": "5x8Dm5SMs2usBgv4c4oj4swFWLwFhSawdHV4f9adUmT1we5AmR8wLmgq2Cxa5B9DX5xdeT3rLw4Y7cddoYn4ukS6",
  "key15": "PF42hv1oZhh7Hzmd1Yag4E5oujYvBhbjTnjSZcDEQm2C4yrra31zEa6xbzZrfKiiDxfXSdc2yusYQXKRkmaWHmi",
  "key16": "4qwrVEBuYptkcCQRWsco7dQMrgerskGzzEzyuk2tajyyrZxnV6oM3SCfm2F4PiU4ukWoK1KjQQmy9r4Ccwa7pCYE",
  "key17": "gPtJhAJbvfn9mAyY6Kgbg6LYhLkW7JkQza86zwsgo5tcfWQ4CNrYPBsojE2wqdUa6qCRFuXwASpFHqZWD4QsSqo",
  "key18": "5oWkvRvuKF2HKUgg8tAkFLRpwMVrusCGKHAG3haNRefsbtBBoEaByhr9FrJk2dsbSHigBKbxCxgyx9UgW5jd93vF",
  "key19": "3rbo3a1r2W7qUjKjHdAmaGXedKESd7Q8E5xafy6ZzPuYaqdKiowGpNgAPPzqc97QUmjHx6qkUtBoMvwtyopXTP28",
  "key20": "Hqex4221683SWpCBDDGc3T1knX8JavYmuFYA37Phcj7q5raWn2kPXeD2rZyt3wxt5ScREWvXrs7o1R15XezUMLS",
  "key21": "45UF3qE2Yf4Bk4bEMThT1ksRn38mXQCeCtGPA6yWHEgnHtVyTb535msAnQaWV4Frw8A25VaPgMbozaBgm5ZSae7Y",
  "key22": "4LsWUfT2XGk4kk2F2ydrb6dDzXfUkxDcFbLKJnbwW9xFcar8wCEC8YmbWFsMt4jAG77EMy7jTHDn6xptpYBrPArB",
  "key23": "5E2gTetyznYxrE7P4shBEf9Tc6kj9TsthzTp3BpyWzMHWTuV5USL3NCGz4eqiKk5dAztQCMnJMapNLQyh8WGBhi4",
  "key24": "bR7yv3ayVTPojFwHdzY6jnAcnUqfxnEpn4rok3FEuUQFS35Qfp2TWgdQzg9a1LSbzXSiAPELJvvkqPBkKttubWA",
  "key25": "2UPqi3oiRXr8xQzGa6KpuUcdpJkXJTTQ47XYK8UGML14zS8mDWj66LxnmMiHTzMqjpZJNHZD3TLVbVUnHSKGP5WJ",
  "key26": "3kXprgNaUQueKtCetrBtQT3onRctNUDxrZPcqd7hQNpaajf1mqxWjvH8SG3q6FvegHQQBAgDzEUkiyRhJEybFB1N",
  "key27": "5ApTwMY2rfJM7JQnRp9ARug4ZEZg9CH6kfwCHZaaZ3Lkzy9DJhsFEtRgcF8SVfdBnEag6A2a1CMQ8xPumFkjfja9",
  "key28": "5evoQPLAL8qgkhfJvggg8PaMgWaHzp9ZbWUj2Z95o3YuNDECqC8HtEYAY1GJFdxQVSC6X6bNPW4j4AGtmw3ZmaTo"
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
