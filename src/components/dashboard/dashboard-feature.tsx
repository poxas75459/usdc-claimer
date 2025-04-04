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
    "k5jZjaNXUb6tnof2ebVsUrGUseikAJd6ePvFPfLDb9rNEptWE1T9FzeEPMGRVHDZW3YGCYK75JUvSpeQ2Ly4oHp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3C5g4a7juDR5Y88gd6A71WPgB5G7VViWZjYqiSyeAY3U29TMhrQe3z3rDRTDbPUo5FaAa8WAaCmcy1bUvctjxHm3",
  "key1": "5rJvQ85XhRLfH9zGRNARVXruVvPoDcTCPUpWg6yZFPfzFQFvH74cmN8ZE5vCLzqeQv2iULDzkS6qDsdwCZANsAGw",
  "key2": "AouJaE8mmCRFgoEQpbZRE6yiCZ2RvBM34DjTftxBkX2HJxsgVYEsrtuZu78mQQpHWy1FPnM28YNAYC6wVn1a6yE",
  "key3": "9iwBd7n4GcjGJHenpsDLyxQ1THHCmQZA6QQSS43rvaBTUwvdNc2MqAYrSECMZjiSteEhcV379iT6qkfRdkSXStn",
  "key4": "3WuF82U1nSwBE1RU65hRAbA4BSpfXLnddJC5doxqwaMVxciGqpkdpx9iD1HGFxjv3nTUMr9FZa9Bk2HHPDY7HjJQ",
  "key5": "4pSouN7qCe8sfxoccMqcdRAsJ53NHQKBJXiFXp9gXySeCNgKT6RZXP9x5TKjDWYgAPKfM9ouKGmLHtFw7Btsbko7",
  "key6": "3Fx6KRMYruPuRqUo6LHothbeztAFHyQ7LTTprwqYd7srzmSWabj2a11NTB8YkJfQMnnz5j9So5EA8FAdzQ24YVgu",
  "key7": "39pnarVuxTsWXfE6t5upR1ErueANADvgBkKegQBaKV89DJkyyQT4pwAzVDFx7y9a2qR73eCC41NyUi96TpMGR8xL",
  "key8": "27o6irbKRTrgnBD9N8M7A6kEf1eaCpK9r66zz2jJLfKGEMyPVkbUmrFX762avtVVAETX1BXB7tUWpvUER1se71tB",
  "key9": "43DfwMzHWEgw95yhCsfADnWNWEU1kZjfRkxWeYbHgKbfGYTbWXUFaSUT6Dqs8oJ4fxchM9wSxhSC1Jtreo2PZT5j",
  "key10": "2gpM9s3UeJuAS53Sas2rM84EwLiBCEUMxtUP69RUeX7wkuiynrCt4zFLApqbHCJvzwWSeKZ6zBzBGkNnPQaZfFe2",
  "key11": "22HWHpuMECbhetJxAER13ea3T2oha1fTnWhEREfc8n29uKfiFcQBYUUNyjfzBF6VciwCRSBpVrV8aBEYhnQDmNUc",
  "key12": "3c4JqJ24NWNnfYAKHsTi2hxMw5cBg2wJ25PD73HqBGaeVntRtFvki4quSP6qd2J9FriN5VPXCHj9ohYyretpf9R7",
  "key13": "2X7VPUCpakne4vpC8r27Vt8HAr6XM55Ut5w8oMgEkmxHJJzPbJPLwztSeRaSAhL26KdLmHWau45FTKirut3QXcCp",
  "key14": "3uBodusGbZUhgEBTwGnVRoNfRPJaQkuv3zgc5uNziBt7rzNhb2dy9kpQ6w53ARn2M5VbCowtkAzAmRha1bX2FuFr",
  "key15": "2uuu2axPRAmBFHFv7Kd92ytgLB442XFUPh1z9xADzdMMWKBG5uu5FqHyXWhQA1wdT7pmafgNjCkUsUKJUXXEBTtk",
  "key16": "5cChGjqHMRdFJg2YfwvRfC6p4m4Yr4oGgwqofaAJg5xt2DFwiRzMPcc2oCKVECPeac9ZgoEY5W57hdstzPnZMcr9",
  "key17": "3vVmvFgWqM8WVHdB3Pn7Cd9f5AfZLQSFQA3EyyRoLTDVLhj9YtKADxVAxptZ5pfTfsn2uiZ6C4m6BZBemzwKc7bZ",
  "key18": "5Bunq8aWfpQjUpi7FShMjF1V3N8NnXKg16eKqpRzbyi73B31TNPh5UVHhMEE5uCNZbmt5q2mq4jLxdMdoad6ebou",
  "key19": "5sYj8BKYf7u6M7mm2vCLWgtT3JrykNLJYpAJCt2pWwxoEXskTWUmspQEpMTr1H44C2jAjRrfvRcQp4GTA5mTEMBN",
  "key20": "3vFJzBB4S5nH9urgK65MPchBUo2ZZbhfNGrB8pNEJsn7YkYdv8JFfEZ4i3kddJgcDBtvuunckwGXvvYRrxN8zct6",
  "key21": "5JTRczfWDyt4eQzrbZdQ9JzJoW6xykbFa1Br9PgX9oqf3qxNkg45Dms5aTMzmsM1W8SHgDMj5QANkYfoVcie3zH9",
  "key22": "2vXT4uLxorSUXWrEzegXVxUGkDp213Kf2KbtmyqyVozhi7LopqJ3WJVAKtd883f46Tkw7rA4i7o7ybAwxVWP7Tkm",
  "key23": "4gfevbh6nZh6XZoxaYo95GFaEnGaHnCP2Hhxb1N7AX4NYx1YcMcim6azC8Pe2xjN1RrtoqekGdy9z3rDn4g3Y1QU",
  "key24": "4C87AWKmGrmAnHtU9kC8r6d4srBi795YphXutqG3uouK3n6Dxzt71uSysj4BBzmxNvMm74A37v6qqpEaDmEuDDUV"
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
