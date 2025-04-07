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
    "3k18pazQF4kbVZSV7KekSbd7RGMjAtzQjrT5g2RpAQoB52jwo5SddUDW2C94b2fobQpq57X9acESJB1Qq84uG2db"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zPxCo3LRiLMiG8vupL2nBaycXyJ6Rp7BNxPdR94mcWUuLSq2xjv7eutxsX9RM5ntgJm5CnEfiMkVp2UG22YHgEN",
  "key1": "EYkrnWqGPQoUFzj8nuoz6tX8LN8kHJpNdeHJxaBinBUQiETwjqazWpcFAWM7Nk2wCQdKncmq2m1LnjTzoMxwXJU",
  "key2": "cM1UsK85xBmGMHx9s4WXjnrFJx5DWHhy5ztHww6P6jQAiYmYNfm5eyc2P4npfBm54Yte88nptc4TaNjzGhjLpdR",
  "key3": "55X6yF8i32b897TDmGfau41Z7eJgAWYWPGdeMUWx2uMUECBusThCqt8YkvpY66wHKghDEB3wURq9HpNDUtw2hy82",
  "key4": "DjVKPEXiAYUN1ozMmx2crMZPMLo3dvVBoSTmCBKjzJjADWSUxbpYawjFmBRyrnXgxw4Aqz65TxDg8PNqwnMoGvr",
  "key5": "h97CcH8YhPbUxG3fqLVn6JvA3cxab32cnHtvGAQ28GXqJLnjvcbGPzTFnTVnir1BeD7VB8bEpKjtVqYcE1YrvP4",
  "key6": "E2gr5ZwPwLLfmFnLssTEEv2H8uurk6ja5hYXW7V7qhtpKrhH9bxqi939gBP3YusLEBHjWVBeLGQDWS2pjUwKzbr",
  "key7": "4T3tWXNa8eo3MJgiD75SakkZrWPGTsmmpZkyzLLNbdEc5Sb56XiZNovHcwUPEN6QQr4eJdJhKwypFW928BJPZeJ1",
  "key8": "3dEZcpMnMYM4XREhnP8FurDBYU3v8tHmeHHXRJLZAf7eLxXJFRKVsG9xGFYhBUmmZSWw3Rwk3SbR7VfmXH3h3c9W",
  "key9": "2bFnqSFeGFKWxujNb9uQYSyrd3bdDUMS1kxFVMyeHSMxwKChr75CmyXHt61qp7k7bWuqSMoogeQ5jUtFYAnkEeqr",
  "key10": "EeQuCqQKdjZywSUckjWpDJnYvKTcwbyjs12i8uaUvtGqwMLPSVGrtkqBMnopE2JAdeakESHjFo8wgkdULfbLFwH",
  "key11": "3aeLUHYZ4vtMsibqWHsEsiKjtQiF6LFa3FYy2QhiPZqW2fDRLNjJms9bQdxYJmDwwt1keb8LpVWx6SmidT3zQ9dg",
  "key12": "5FzwHu5DHPKzqKSE3ovL4rPHrjuCu58cFDchgLxMtiLka2hyMUKFvifRwxd19C4NfAozGJrVMWkuPGqaj4cQyv2i",
  "key13": "4rXJt75xRkZPLvSS1fXcaqcYceAA2RjdP1SBVtK1EbsHXjKsWbFWpBjfhSnFe763e9ESgVXR7YpS1CdUtJMuzrnz",
  "key14": "65gQ7oRv35jcLF8XYPd8XbHGPhvPneDDbdtGgc1kXvSpCUx2u2N6g7aUPg8fzdaaCyACiKHoiFBwYXT2oMAGz52L",
  "key15": "2DyaicWCWBxmtYLcyAP5VUdsguFZTCxmAKcRAxcVkx5Vc4GngmewYdz5qQgcxLptcSpjJCUuV4yD6eQ1xBXKp4qb",
  "key16": "4yNStiQ3dCKSGcnx5g16sKx7AoXpo8HVh7nsGYUNVDzBaQGgc17WwefDzWddsWGtXSfKjYLTg5TS3of3cFqqGdty",
  "key17": "3ctZHWcSHKjtfhPHYf2Znk6dGh48sR8JSennnVGFtPHenzwLbUCcg5LDGFsxZXc5Pnt95RGki8GS7U6ZPKmvbuUD",
  "key18": "2S5tsXV8oj5gofv4BTYNp2LjHq3MvU155Xo13ix182HnV7TgmKoz7qx4gTtEo9qgUHBiUVJ6n8QyHRoSdarg7rPu",
  "key19": "UtSvn2bvdnaXnXuDmgxCQxnJQkDbU5aN8spX2jELT2QUErSKqyCRmfzxbVLZamvL5hS7K5V1t9spCP2MbmF1QLP",
  "key20": "25tHiuHThji9kMH9KmdErv2A2yBTXQNyS8jz35uSZsFG2x4MmqdQRiCvNC49yBYdb5A1DMbDwMwjWP1w4xb6kmZS",
  "key21": "2Ls8UmgKp4XVkvSzxdy2PbASQZRmrnH4JajfWuGiGYQVsdPgbS79D3pBcFfjZbj6D8md7P8EoqCTHiTo489ThrHG",
  "key22": "24D1jgKNUagLTPSBmBw5dFzYnLbNfdctNKpzVHMhudc1x7xc7mG44Y5cvjsozHT4ytw4HHufb2HaTpXDHg8ZkrUb",
  "key23": "24S14BkMUJC6mBzXyAjiA3sfYSFiveTmznvzcvEbJiDS5ouhveZtHh272F5PP6Tr7SD5Y3vk8D7Aksqcy5iqNYBL",
  "key24": "4V6mqGzosDiWFaXA6VNwBws4cr5DQ1YNoc3aeayTQFM41cBRjMQjK66VwSZbCJUGAdWFZ9CzrwDBXWNicjeHz5n3",
  "key25": "2f7jGBojvYyV5f43nKcyAqym5JjeKroRXyZfeAiZFBToaM2oi6LVAvNT5p35p7eEsrWSRJGvTgdvoRcuCANyaAxH",
  "key26": "5E81GAaYcatziBGKX8Bbd3QUtAVaPJHbC5iJVsZSLJ9DZ6QyiPuJUSW1KrH1enJNcujdtER6yLpNYBexaGTjA9Ch"
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
