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
    "3oUZdH9S8b3knFv4DTP7oCKXodoGfAFqZDJVSdYEezyQ59Fj2WWWdhBAQT12MKuczgpRE4mXzxXgUtH1HrhXaVvn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Rt87SyDvjrbY13uYQiKVu1gNmz6aWNPKTgrpdjyeapWbsVWWZMBKVXR3jfyC39yCkcRf9whziSDkGLtCBAUBuh4",
  "key1": "5EYqpYM2c4EUpYxe8iKaETnfPaZSMZRBD1HpkmutTwtmwjFh8S3gaqF5sYjbuMmbK6Cvnxy8j3qzZuMnjcGhg69F",
  "key2": "2W3KuGpYLxis7WF2RzndJLQXKVdQNbMncGKaddehbtNGogayewsnP4Fct1HdYWv2doMpQBnNTF3ttLaKJJWZeDeh",
  "key3": "2mADvANPYcSUdUZKRsFTBg9H8TemxebhEd8Hu7djAV5TCmic4Lrz1GTQyu4jytK5br6Jrr8AFJVJWnocAhMsCXWt",
  "key4": "5GbU4qqqy8sBEsbiGGz7sbuyK9NZweYfsojHXjFxzYVi6eRMQu1vUg4JomR2c2LVT46cyJG9Ahk42BZnG9HfmQbE",
  "key5": "NGGn8oixBrTZA924PrBfgDKaYWBbUho9iNRHqfAeCTfSuLH6nxam2enc7RHfauGky1oSUgeKdgui8FEWptgqGpS",
  "key6": "4pybDAgK8wc8rpHriNj8P2AT85hcAGBE2js1ur5rPhTB6udi3UmCDG8ytb5Q6EYPoAUJ228S1n7zYQJaVpSYjxZT",
  "key7": "5FsGkFkHURKZUSePRE4krBvz7kDqFcJbYDNpmj1r4cFxr4PAumFh1Sr3aLXT8T29CHZpW9cD3e8g3nZfVG8EtXDG",
  "key8": "5EmxkVFM3hBPBFEzcGmXGzTEkuUKCpuGQN9PjS3tuFq6P8H4FhkRNYxVcjXjKv9V1QjMNR7pBsACf8EkgPD1sH5i",
  "key9": "3KryvNPWLBjdM7F9uGyz4yhLUGha45WEyjxiC3N7quGWAjTC7oG9hDiLobDunWWs4uJ9LfBFZ1qWeZZSSUVbtDRN",
  "key10": "5Xrpt4PgwxZfa1xMHqNNrG4zkkCb2TnkTdxox4mANjayqP96Ddo8oGSh1C7qyeQEMuvDBtzt9ofyXYCCvQUJoe6u",
  "key11": "5svKbZ3VicAR1ngmBxXc1JB27NS7eiz4WBBDNTzYPGabCwayyxaZTazqdhf2JLkEnQy7kW4QYNJdXtSYQK8mMCRq",
  "key12": "2VasFJXKmSDSiX2ha3hC7Rivsvez5mQx51bZCtcm8i7y3Rmg43okgGNA8jS9aUJANXfbCnAt1z3hRTgRv4cme3cw",
  "key13": "4egzyu8zo2Pw9mF1fFgR4Y2UMmKY6fiYKQQorG38Wz8SrJFfti3DT9YMyyzvvd13Xo3G3eCv3MSFXqqTMCpf28GL",
  "key14": "4Gvu9UDdgJVCuTnsFEugWon5qtKjdyazJL31k5Mve5wmbC5T1a3GUiY5RFc8ftGJiBndeQh2nn8em53RYrrGijQK",
  "key15": "59yyBHfRXrxfKTgndqXnC6qnZMRiDt4VdBPZ3LZmUm7b4u4QjP5aBTA7fka335H2aGTtJSXrNPudfmKAU1edJwZJ",
  "key16": "2nVFWi9RFrvtBCsCXFxZLmMRBdHmRx5UW1iniQxX2LHGBRjtmJciy13m16GknpmUrZsEPTUVCxEYL3hYFG9qXxZi",
  "key17": "2wapV7ytg2pEin45S4TPeAK4Wc6EFQJpSFjracGVJXvdNY25Uvi8Qiq9bs73osN2vejLZCqWixVaEAPzt5Cw5agk",
  "key18": "xM6qqqWoxAYD9JPi3ciPajBSr4Gvaxwwc1BwtvcNjWuzNkTTVgBYjeMSYwWVQpVeoDTw18WFvn9KE9rRjdGuoee",
  "key19": "iqMtJZjVys2kfm56TfJCqF3oxPK55ZS7YL8uHJC1joJ2gXpNkVZ7T4tDQ9b68JnMaiy1HrNw6Wt6LPgUnVNQAQM",
  "key20": "5QP9QwEw4eyPQRYbWfKWfvG5pTGwMV5uJKnnuNGFzNAAUxtKLeKCwVGzKPitQPX7QUHtQPbapyMNPHZf7ysckLep",
  "key21": "bgDfakSc7P4Tkh31jrnDqgNZFiccFbh2XzfhNi3CHcme22oeeb2KQ8P9r7hqQeFC6S4SbeG4YpxXbA3HkbFy3Vf",
  "key22": "5r2A57xBZ7adPhip46UaExrjF2RTLSQQST9gsizUAyvkrn9vL9iJ1YhRZn25DJK1nyFuhKhJ193HzR1w9stVZkEW",
  "key23": "4YwGiXLkwUfCBsPpaUVKApPHhuVgahnVCCWCbAboCnyvNgSSVDzzsupQ7Sx6f17z4ynSXPMMWfnGxkfVu4uXRKJw",
  "key24": "4LSUcQ2HfSapMG3KtmLEQagds1jxDx23pSLy3Ru9grxUD2KbKF17ChaiVb3uvMDXv81vunUru4WKzZXvrNVFsGTg",
  "key25": "3Sq93hrdE71SKVYuH4ySwn9rLHNtZ3fhwrhQdAbZ9puXz4wVoF8hazuesRbZPJn4T3iRvF83XUNzrMkNZPD5ouis",
  "key26": "CimykmNoMy7fLQHJHfscdvfdBT7qd949vCctVjmHf5JMjK478mAkEAqRwLRE4hrwRneqZKGg6QL6kapffJRFFiE",
  "key27": "5j1URKhxW4PM14rth8VZ9HmFWrk8Ee44SyJtStLCiPDcftwChnVki9SesnysHeWSj4Ho148tERB9MRfV5tXb21be",
  "key28": "3wAfw4V5hbN8trV2MRfMHYAfihSyPn9daKP7HkRK1QW84wBy4gAXjPtqSv2SXGSH5Luur3boM1ecLNQZmvDpaYEX",
  "key29": "NVnFZxXFk6Hua15VXUK6Cnz6HdQUj2T9jhQuPm6X94SrfTHHwGiVaqe5Ay8kS16PALDBDTy1qK3hmi8FMZMDw74",
  "key30": "56j4ineiXAMFTCJXgUyR4UZBmVhATCvuUWpG3xWP48YHbiwSdP58eryGtgsDwrbQypzngdp8z7qXzCQr1Z5H3KB4",
  "key31": "P4UKqfqS1gmDxu9bCihVmpAx4jU5s53g7YpboYRgVd1ppSZv3q2UmvTd8JshAXJyDAbQTCsHjcUq2AEpxvNmqYo",
  "key32": "4PGPC99CjL91tGTARPw5s89UQYxg6ub64DwB6vjXyT5P8uQnvkA1nQ3JUgYSLENqCYAkx4akZD7w5A7QuQ1jkJCM",
  "key33": "4iaadh2f2p4hX8cQsKgTttfxfnFhJMT8CqvkbVKvzPENdrQ7ebnyfBiTCw2VM7nQMFc5yzgwkjM9ZRWpLhMErySq",
  "key34": "3HKM7WsmHYYrdSFgsdWvJ6iBrMbnr5WksekgWvZQpRkPDfkZ37tKSdG83JvFE9SzfuZJy745mkLUMW6MVWZHsAaM",
  "key35": "2L4KywAAaKdqimJKwxuEDECSJdxV3cAam7cJ8jzyh87UPytWi1TF9AG4bQjE2XidMS3iJ5ne4dma5jmagxm2cz3W"
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
