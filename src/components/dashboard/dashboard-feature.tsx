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
    "indtmoZmjTo99Udn99RcbnhbFcnmV2n5QWhjZ8fh4LwNnjVHFhctb7sXWWdpPhUVQyzTfY3rvQLbQJVEN8X6Woe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hbS9ZVR1GryAMMVdpZq5F4r6hr8N1KiF7F745wAASexYmdUNqTXaRFst5EJugJZfGLykpwMs26oKkemQXnx1U8V",
  "key1": "32HWgozQqkzPkz6cNk9LQte7ZWWKL41LECjAozq5R7VyzRtBnKvac2twtN6BKBPFPC8FpV5h2qrxwGX4wczhiiYR",
  "key2": "3HyCPp48Gc48EMhceWWdtuzDPfzQHsaZNhC5FLhU3jd8t5DP19cxYaEmCC1pjX9RRy4dejsw81qVCTcEqvsXHhfd",
  "key3": "34vn3ySH3khBbFC8kx9LtcNx6f4TbFh36bBgbezDPs9F5d223Vkq86wKCy3NUPFsfHsrsqj1SLN1poC4miGV1CMA",
  "key4": "5R2WtiDmbcywvsYR1mALYgD8ioFfYV16y4XJvW4TjMAbtusSi4RXpUD8h2St6LevYEkJFNGqjEBpwPiwpKciNAjW",
  "key5": "481qdK1kJheyWbsZindQZ7DKAF7hUv1j3khPxKniQcANGHySm6D9KHqJYk9bNhSpr9CiU256zAxwCFk1RPxa5TUc",
  "key6": "3nF99uBYKtqAqnwiFUr1puQ8uqKfQwnMyiuHEmFvY8ELVzXKYJSb4KshU7xgFkhHpchZFzAKmstuniDz4JNAtMrr",
  "key7": "4UkAprLv2oTGT6vivExnGxjCNcBmkP5EgZyHGRQBYSvNxaXqLJtLYuLZSTsfyDWcUUSH8C7QxgrMXpCJFnravM8F",
  "key8": "cMjX5CVRGxQiULVPvZuAkr9NoQ4cLWFDeAi2daqfcKp3QTgDee5WdJBygLRp8CApAumRaKUQZmDKpT4BqDZroUe",
  "key9": "2mt6VsCJ2r7Q1EHWv4fq6fbSGnB5V1KyHHp3sdN6zJo1ZLrbuTRFg6Cp3vKnWrNa23SJScGbjfyq5BkMUrn11N8m",
  "key10": "49AWooZ1enwGRTUZYJfCh7DKmpyvTYqyJUpTft7dhURRrpvzUiXDqaqaYcqQEdXQDFyscPNp5PgbpbiphfnJt9cJ",
  "key11": "63oENxgu3eEAntnfkpisM215Fc87viB2CeRF1L5SXZuqZvJafNAwKEpo2kN4FmPjRJYJTQgnk7adQCHWXNUp5LHY",
  "key12": "2A2JGtSRaidH3tUnJKgq6PdbEAMEL21xZFVLZ3tejQVr9usKm8mKsWQrTA4aMcV6CvN2uYCk3dC2jDhqwdKBzkJa",
  "key13": "281cATCwzYLcHqbWhJGGdapnraLBjiXeKfaFbNuLN1SwaiQX3h4DHicW5M4JnYxWSt4adHcYAbJZvC84DNASmra5",
  "key14": "3vKgexejiexn1CS9qwD4jEDsfeJz12zyYNNtuvHbPn8sDKvMLSqNVHP7Zbk7rXoR6L63BsDezQi1X2V2PJ3UVyUF",
  "key15": "63NPLXpR67SXvtjNZr2ghTmtFxRxPRtkcVoCqARJWFvqZpHdmv6ae14AbvrY6DeNq9hWW4ZZyW5kRRY1zk6mdDHw",
  "key16": "2MvmsCNdr9edG1vSi47BerwRsLjtQnM81rARwo9cVUpps9LCE6atxeYXN8wd3rsrFiLjjF9DyTCm4CeJxbZ3CFzu",
  "key17": "5TJeU6yYw5hxHqkkKvd2XRXk5fW596YxRdMgx43vfDFpsPQ11mAAvxXwt8C1cy5TcqUfajwWnRJMmdobd3NwbSyr",
  "key18": "2naiHmGkirAmGRoSuVcC9T5LLhzvKX99FfY4ymLwarUZ3FnhGH9jq4MkCN3nY2Z1Jd2hPguvqvsbhEdXKRZJnjr6",
  "key19": "3MUy2wuJyDDPNXotqdaDH3Vh43i2vfpWsSYuJDWuT9vZPpDergGJ8E8GGrhaik2m8cPMaX43wJ28W3X6S1GJcVYk",
  "key20": "4cg1Ahshv49q3M5VwZz9Q8TEiRi9azUCxDjGfL88qqjEJCCDWM8tBB4AdTaZVJLWkFoPhEyishsrQFKQxDmcNzxU",
  "key21": "4h7fMCMUVPjG5QRt9RVwgsFUzx1fo8RMcwtMmuiM2x5LRU2YVXUzZ8qCJquzC9JqFApqDkpgBKbNrqxUZBxUkYEG",
  "key22": "nKaqbUCiG9AjHnrcTX68YQM4NtYhU6W56Ea8uXxUA3BuZPoKZh4SH9a3jtirXtcH6kddGegD7fwj1U5WcXDEeeF",
  "key23": "4pwTxvUuNneXR84eD9G2ywG37bTmsKCwX8Cdt9br1vH7nRnwEpb1cvy7M235mUdmRtFEi1EukDd9Gwbiw4h2126a",
  "key24": "4BbWGnF7NwhAEceNbxts24Gs5Kg6sWuyAL4qWDukM5qFujMqq7L8J1FnJLtvaLTwbyA5vGDGkEeiurScRVf7VNHV",
  "key25": "2g5nkJTGdHvSd5Me1qRJKp36sGhxJJPSVSgU1jbrTUQxB7PPWw25Q2GYx7hJSKnVLeF5PiPJ6Qj3rQrxve3jKmyU",
  "key26": "5x27xvHtbeNUoG3wU2MDxt5WHZA8eaUpRSPzMbrmUVxXz3WasejYyD1uFmGy1fWKXQx5oVj7kp6xdeo3gCoYNxoC",
  "key27": "2zm63XJhhcPfVqFKPx9pm5YveS8vfvqXBynHGbLgFvzBuLK98NSZ3e7Et5JQLX8xRFnKugeRNwmdBoS7hADJkAFm"
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
