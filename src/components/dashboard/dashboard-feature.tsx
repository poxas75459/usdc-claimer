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
    "3eeWpJSWB6unDvuTKudK2nqi6fJDvVjzW4KJPPLGcF8d1gxaMWAb6741T6PE8LZJpT3YhokcVP5NFvkv8jS18rp3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iT4jycZrRANfb85emojaRRyRBTa3mFHwm7ivoyhY8iqfHWPQ3BAYTg8ARpwu47qVNA6Ry8Ztx6aKKDEBftUczGo",
  "key1": "5Q2Y3prUxNm1yi3EtEPMNn5waJbo9GAdcNQHWgwoXba4AVyi9x7edpVfPTfWMBrpjJYEqWCs8qauxPpcyXQrwuuA",
  "key2": "3wQ8h5jXpJdaL7WDrDk3qmJQTGW4KwpouZuHriDg8ReUkxsZSAtnmytEVxjc7XSpFpqJwjKKnXkcLw3aieCLcnRG",
  "key3": "2GqbYgwjvMqNWK6D4XYhvk2qs92GTY6Neyc5bXk42B4tEoyVXv2fZV6u5STvGayEHhinjEZff1nBan6ASGtKQx7",
  "key4": "5xizFYiyMq3UFGnZAyh6rTyfanXT668JUdgUCBrpWoEruajBm1vEP51AajGaPeWbJicgQ8F4dF1q9z4fhHfq9rUZ",
  "key5": "56H6YVijQknGJyp4vhpyXp9mEnyaHXDzqikQNXjf8y9d8T4BTzkfTJphZW44ZBg84LfeaYgTVA31kPfsLLsqkSkR",
  "key6": "5h9ZDKTMuozhxRTmhfiGB8qDPtiUk9UWadwouPDkALemfLKgr613HCYg1hKysCKWSQqPjWd4JMr3zdz9yPpYw5EK",
  "key7": "4hY2oTEq538pB7yNUnowkinmTBKPVdVZ8RyAEbsZexcqUo3AJNff5kBE7gDv27W3paCnhcaJvTTvWPUpPh86s79x",
  "key8": "3LehZczBCEbX4t224iN4hv8wiBTAvKNwZvTSYUtsgw6PWofGx7VEj2bvAEaBEBeNRHtYq4of9ZNvnr3ZQfN1Zy66",
  "key9": "325bgqngiv9qtBGNST75MRzQmD85DZCB6Hvh82xZJYy3Un65JHkTKRWUzfozT1WQeDgtDK7ZabTT3U3DWb3feGzg",
  "key10": "JVkte3ZfXLg64RdFbjXYFiCB1wHoED15iAd6QoWFS13YaLDFP5TNTbrnpogvD2H1WYeWiWcDzMZxuh3YU1snUvf",
  "key11": "4PqbRA1xQ8eLPRA1WsjMEpWSeM1F46kGbbxZb4NBUdvH1JXiEEB61TaZ4mR6jaWNNGAux9TGVskjM9MjL6o9Gx7Q",
  "key12": "HUQhjbDsaN7CadEnCr1NUzPcQ4pqpnjnEH4e3GtdhkjX5F7yzj2jBfAa4CjMYdnHhoLz2HWXDLBgrdZQtQx9GGA",
  "key13": "BFk4Lrubf6Fo5CEUPJEZrQiNJRBicxh3wUVSadt7QvNVGifnXkoBo5TiDVebvKW8YN4rhgFMq4qo9xwFB4zTzBQ",
  "key14": "47DjJgk9evaRpWSDtCGf2wSjgVXEEvcCrttboBZc3yNCcXVW3zSu1boD5s1BKqnup64kXzHFs2dvfZhJsrvp5fsJ",
  "key15": "4Nqf4w43CaPkSPxCkxQ2P5mUpaZ6ntW1pFgNVqjnZ6nQuXKGKJ8sLu5ctvqwBdx2kdGFtwiAg7bRCNMe5pxLYyU9",
  "key16": "3R1Etya4Hsi2KybYokZN5zWevRHGfrTqB8SDdffAsGzE8tZTwcAjHqZQydLgGUgGiEiht7K8YvrZfaLGbx2hYY1N",
  "key17": "3goUXZ2w8LztqMWec1tNMJDeeqkvPAX4D59ZDyZJs3ZSuT7Hyr4doAVvwbFDkuhrYpYtnbBnJuyM7oRbCTJ2bx13",
  "key18": "5L5c8kA4jdRjEWv5ouabirmewRVAFbQJK76wjeLNdMryKZpH3mQVG21AZEeKSa2MFWc4u788hXSrCa28szFYbgRc",
  "key19": "asGELX2sHY1T5axX7m8EF9myZZ61NfNtbKZYhiLivsp9cwiFy5kD8f6sPKrd1GYa6QbJ8vvAd1a9e6DsKP3PAFe",
  "key20": "3eTqAzsDC6CgBhMPriVL8CK9L7H13opGkhZ4wznL7X98pvGPiqzbA8tWfQpCS4FZ7vgJJcBLDiHynYKNG5hUWUQ1",
  "key21": "uJ2LuHLjXfoefGHHuivwn3SpPYhSkkJaC3XnhSr4Gc6aph2HT4ZN1Vvf7jU4aBXMhQo6FDVkXH2LmgLW2fvEQQN",
  "key22": "2jPktdstoMzPUsQ2bjELTzFTQsaJfYXZeUccNv7Bn4q7d2Wb3WEotN2BtCYBtxdTajG9r3FgFfdsZcrRguXJ9B6L",
  "key23": "PaLPPnQnmoq33KXtCA39axBdFtCZtHC2qTDqE9zCXGw4LhnuwziT4dNVd8WAamN1U5yV1UrWyFS7xvkJUdCCGX8",
  "key24": "kNdKKe1jsDp2JpsTfGxT1kTyfooLjE4NPFYuCBS7Y52R13vt5khJLmzY6nRJNgbMQSS8tNpG8evMcGXuWJhRDme",
  "key25": "wE3XVGT4gapi5ysAy52Bsv7HHtrz9mxNPoThchesxECfmS42NXdveBnU3npVASDX1Gbwebs2qEZnZUZ7G5JR8Vh",
  "key26": "2o3YwStmUK3pGseG2GQVh6QsLqnzoBCSvbvBhRFJMW9QXdGxRpQ14L96a9QVtmhc6JDVt3g9J2NaBMQ457CB24y8",
  "key27": "2RHKLkaBKZRncqAdVPcRk1BbbpGBWJhfZeS5TZ9UraWvimXWNmGeBZp3fC1iQ7wVL3MPZybbmiijfzYXdLwUMj2c",
  "key28": "4o9dTrumxgvdFwxkqNk2FfLNDE9toAH24d8JiGdr8iULz4Gr2upUeNrGuepkoMeo6GuEnwuv88R8Se6EJX2j7BP7",
  "key29": "4JvwNAECoLYVJa789rA9UAR9iEJuA182yyJRP2mPYkT4TZF7RaRAfvhrMv2E5wp1cPnQV4uezfbrxrdXkLM74kGr",
  "key30": "2hY51kcGx5WZhXLo1m4suMHCxwyV9TpCBNydDVYJchLZS2peSyWNgV15oCiVM17yMnjVzRzZxfLkMvqfZYeyjZky",
  "key31": "3f2vjX7SYDgoN7dYirseKaJgdwRdzP8BqeodBerSAanqZK432G9df5wPgBb6hip1Wq3wXP6tR8mL8PMNCeq5CE7a",
  "key32": "3gqNk5buonSgzZsne7K9thEfHexRzX7t5vyJaBtYhBz2h7ijhKz363vQ2qUEryoKi4JbYxZb3ae9Lg8UEYGyV3Wx",
  "key33": "5wneTfNBJMQdzh2g6okM88sAH3YH2H9dfQefbd1JmtFPhcDDXktH5JFYNjyaDU6EuVMUQ6q4eCE13uqAhUh4E4Gj"
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
