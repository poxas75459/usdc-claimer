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
    "2FQ1SGYmSgAgTVcneUDPFC7oTMPUsTN87w2kRbERVExjJzk4AgVdMdXZd67BVbYioeNygdcypCHWz3Hs8CjFbXvS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "449hur1Awe83SEuy17dfphYCPdcwdYDGmjKYzCBtf5NQVPWaAuYXaaJbgb5xRu82tnAS9rgqEU6rK2CJd44ut4vM",
  "key1": "vgSBCVMdTHspcebk2yUc9eECzxnz8KGMgGTdwXKx91CwPQohSDsjUh68eEmLfkNsK2zPoruNPTF32vr7dzAvmtH",
  "key2": "2hzDPZ68KnHmLMk3o9VY2U9p7ZALfZfdhvWL8zh28nF4uvKhwzKCNGQ8tn7YRHgZGZiytSWd8xL5oxPKcJiSkFBa",
  "key3": "3RCXKoC7MSBaGzrW9AAiFYyC65Q3bNtR1J95RJVjGGriCJy74y62oivrYmmE8XG7BdYDQek7Yjsot8iehsHA5fKQ",
  "key4": "4gAD4Czk3Z1tuZxciXxQHk5BZW7x7Lj1rLc19ggi6JJwkwc4Ww7cBWzoWgeMH8xKQRzTvh9PMjHpCGf26zm5WxWE",
  "key5": "5yxXpc8u4PN3gFiaAABS3xcY7cJkqyZgDX6UeUtoHRFP57hPPXQFmNfa5xrfxnEEi4qNeqXt6UpC5JnrqtW57nKJ",
  "key6": "271ArNwSJQBjFyjATFpz52Z9e3gau2vVjwLjh6PjNEhxcKx7rZSt8m5jKByNwJwgAnCX8LbWgf25ndd7qYrstb56",
  "key7": "2F4PU4u2dEvzbgW4Wx1zBMdymcE27gQvryAuWqfrGrGzoXUDcyqePmemux1yTFGoNXyViexVWDY5gF3NGbEn1w3u",
  "key8": "3U46GD34bPh6YHczhHKbVAbXDfTGPQbwhoSDqcSETMo5mz626xFa93Pee3K4qGkAvt3ethKRRqNjeKpT7wsDyDWK",
  "key9": "4uJZz8hPYs3RR3oJdRGjEAYVxVW3JFwrynAFh1RLex4xdS24zxDKZbnWyS5Jok1WRqUG1DKJEbfgVJkVSmUT7Y4j",
  "key10": "EUCjEbLr9nbut5zMopKeqjPvfuYYBu1Xdk2be7mm2PipxjJyYdXJu8t9k1ghjXKRXhvmcfGGVF9X3smmZHpjiU4",
  "key11": "5Ys7RSJXRWDoQ9qW23it5EtJW956HQ3z8LeD6yeb3UuzvFSgqY6kKVDyXTTHL84HDa6AMQX6u4Y5FX4hqHszbH9t",
  "key12": "3yD1Yq5J5kg2ds7PJJFjyyMeA1uWRw5bvWiVpvKgi6hQNi6jMRjxNYrCdaTCEWMC8c8SLQtqdCDEDAw6wCaCSLP1",
  "key13": "tn2uW5H5oQ5m9oHBqbPZiuMXzNhSogEC6WhKNUA1nPrGQ58VJqhfWjp6d3ZcxuzJDhof3fFbqM2tHKGJk8QDJ1P",
  "key14": "3BRGoPcueahKkDh71Ly8vR1rHjVxsJ1P4jxBFY2QhJ47QTq8NZNmyo6uLdoGJvUSG1mpnRmYsXTRQcKLYFMrn53q",
  "key15": "389SJuqxtXnsAzzRxzEvC45d6B9RdpsHdNNW5MhrQq7M1MqctrtDhkEAdCR8DRYD7ERbgGucpp3njXUCZv72C3yA",
  "key16": "315igUSc6KFbaUehGgaB8WpQGaPNQS46a2NeweG1bBT9G8oqPnLvMYEAqqxLDeZL6soYnxEAK6dH5QEx98jf7yRc",
  "key17": "5viydmp1DdQhiKJqKn8fkGVBMjPoZgtcGFP8Nz5Nd65dQyHZiHDQTD9e9NRV8g7QBq8f1kqfbzHtZwszaSiTdr4j",
  "key18": "34yZ52iqhca17oLkdsrjNupiY2LJHa7uRQ8grZCnHVj8fmmqkeKLrD4pHdg3J5ywaSamtLzzCFoWhRgMxGZqt23w",
  "key19": "2feLJyqfcwxTkoZ119R3F5b8EsAUprCrh7PhFaZZ7ut2toPwX3KNMTwpyPwsFgWX1C4fpSHDpwca93Rn5xp3JXu8",
  "key20": "37JXhyUPmhHgvrxj2Q5yqH43hecjmFiMWbzbcJkVTsahifgQnKXCuxa1nit7g8Hpco7ej2Sc7G4jAVMeaVF814Cc",
  "key21": "2QaE8UofNzpZQB17tVWStafcXzpJaxb4hu8EP6s6B7djdei5BkRFLpgy1rZ155XZsT61mYY1GyQLjcF1gXDymMuS",
  "key22": "5LX3Q6ESi3TiWjL3ygwBte1iTZBVQyQLbmQ9KCyY9Ktf8FwiCmorvgXnn2Q7jCPnMueJu3LbNnyG8F777NN9P9mg",
  "key23": "984z7JxfoQRCrhb9cvW3GgaUC9iAUkns31QQwBRrw65aLnYyUwBnU1a5iuofvcmy4drr4Qxg42e2CPuT7UkBBEr",
  "key24": "21vgb7faidyKBgCSy31dQpSZmtbc2GMW5j2F8WAx3XYu4g4jPtM1iGLzRZZ8W3Shvj7SZ8pgZx3rFGKAtxuuqpj6",
  "key25": "5LCzgt1xMiactj6Eox2uAoq5NgFoVnpdvJTZRC1CUiEbVq1x6vCBQMkaZumJsjpT8V9wc44tEMhjGVynrBv29ipj",
  "key26": "3kBqz1ozeFmfBEEkoJTBLpaY1oRiQjJEs5SQsLNEE5BK8EDvkWApHU6V2nS1Sh6rRa5he44vRosnLW7HCZTtQA2R",
  "key27": "5j1tnop4PPjszCRmdbXqgchkktMMLT6SknDdDNF4e8J74WAoF1SRCJfWQEkgfLzVQA2ZSEyqkKot92vmGD5yVzP1",
  "key28": "xkKH9c8SogUkdEbdUip1vS9C2nuVkbSZAgCBhBAVmo1EZ6NT8wPFjNrCxTzLbvdcDcD5Yi4oba8K2Mri7TgDTgK",
  "key29": "aRZf4E1ndbYuM8t9hUdTBv7NX7q7F54mhd4gLN3RzpgbMBV6tmwYFQ5FJpE6Cuzhk4wiWpA6agxACdgSBFpY2jH",
  "key30": "v53yMa7kXksUxoqZPkD5dAgrcgoTT35kGduxJF6SbNkmfYWVaRvnudhcohq333hwMbHEtUACG4WNw1adx3SAnbJ",
  "key31": "2zMWmzTZztCjGCi2dH4J7wFT4PnaY6p8SohqJbbdFs8qbGmuttmdZ6RdDXBXwpGorbx4FqTBxVVo9ZXRD23ZeLEt",
  "key32": "4zDR3hoQmwnsb2rHHxMFLdF461FE945iUe8gQCLifGufR9Tgwq99waviNwCCqTQvKyX7FJzHhi7PLXbKN8arJ897",
  "key33": "hGDpLZFyPrGKo5udotQANJYAjwDDPVH2JKZut3AQh2j2JLfpTnU5v9FYcZcSrmaurnqAWY8GZokCaNAmtcNC9CU"
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
