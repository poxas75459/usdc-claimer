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
    "4D2ZEGw6eQPzXwSSkUsbFj5o7QaCDB5rj6Egi6opzQtNXPDUHs7774dchqNpGxKPLnKqqHDebbxoFLEPDQcnFvBz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Kim33etui1iogGG6Z2W8X9gD4gW75pBWo96kr2V7PyX28RKboHNcLHaPiFkMZyeQ4N1hdgAjCwi3udfRHKhnG2y",
  "key1": "kaid6e1AyWvGHJPxm9ChpdsGjvF9jkNjkGbEmhoRkzzqC6cAqiSJuMEKg2kbnBeKhTUvmRRpyWFZqWgU4hvnVdN",
  "key2": "4MvCJoGAJA7VoGxLrJZNz6A7WVj3JdgZN4AMRfKwESnpy83uF2jwApKMKVrj8iRRkKydQW2L83Xd2eGL7ckvGBye",
  "key3": "5GkwDobw3iMjfdQZkLfVkk71jpVberT39NghUpUxdFURWdYkfeoJxPSXCBSixSwpCaoX8ar9gLPYxk1EUqsNrUUR",
  "key4": "3jtGCAcX2GzQuLqsE2od5VdnKyk7Fj17uGrU3BKoL416AsgnikjKwLg1yNceiv7nkkZXMfoXSiaFY5kmEjxoSbcE",
  "key5": "fb9AYDRnPX5VPp8PCMau6QFC39WAW26ySESXA6tfaa6Act9Yz36r9PXSm2nHd5BmXs3Mqh8xcc6QRPTpiAJnT9S",
  "key6": "5PPeQPiAHpr6ee5p2EaYenm1mWtZyeDRGpCwd1r361X9qLmoqMjbjcJuHy3DjS7UjHbNmVgEuguSdi6St5XNHMaq",
  "key7": "5ij7NZ776WNC32e9AYcpkCC3jkrR5ru7wSwyb8Mqs2xbcoq4W8pWh3gKSwtL1ACJGgoKQhkGgGvgvm9rk1xGymhW",
  "key8": "51jy2jX2ChSRaxvyLebb6WSRHAqY8JoTx6fro1APmW9jaz498bRHsUobnGGZR8Fbe5KHcGUidS2S7G6ZQCV2a1kG",
  "key9": "4JSkcEmYHjse4XdYYHoPRtLqJ4ScC1TtLUEysWn7G635aEBWoidafiu7psUjiZqvis4hwsMFfABCeuLqRjVSEm4j",
  "key10": "2wwN8jSeVscRP2YYtkgNrcBpGUT7ve6VfUf7cHiqiSET6oncm1xHMGQf1s98xe3iJBDf9A4AMPSHyCwPmMhgzSsE",
  "key11": "3YtKkfBYxMn6PzaweYwr3WBCiKResWg3JJ5EEddTc9LsEKFhzgp5i7Yr5fy3xu25KGbEsoBzuVbPp2fD5y4Ehwsd",
  "key12": "2Wx6XneNdHcRQbnFbWyJhWYbZQFh8xcb6RF28c9QT2Sfmd6Xsx2evyH2WdZ3muXgmVpA2V5NqW6htjPCE7uVwDmj",
  "key13": "3XWiWTrzTBjk4365LmLXNYjNpX6kdB3ssbr836FryqeNMaow5K1LDLW3xznXHJjNRp8y7Z3SDeZcWhDPHY1h4SqU",
  "key14": "JuGkzdwk4cGMB7c4uZDw5a6XMLa84JXXMB1ZPj1aKD9nWY71cDjv7tapuAMzkFSYrsA1kBv4J9LBoQUbnob1DBZ",
  "key15": "3jYMosdVPCKE3p7a6TjHDJEF6XrpY3jXZZ4mT1k4rmXYpCyGbnbkLLUYXQD3RgFJdtbKdcguscvUaxYcw5y1apxN",
  "key16": "5hp6hbVSff8ae7jwXVxN5d5AfiKQzZMQy7wZK986Bt1wxeZy3AxSK4KQ3osBQKxUgemGbYD4jP9JiMbn6iLPKrfg",
  "key17": "2DzJoKYgdTqDjz3WmcDVLtyjKbtynCfaTgFSen8qttAqDejfLKQVgL1YN8gxeaNvTxQ3FYrZwZWpoAXE5jGcj9en",
  "key18": "3DnLmDhNYDpGcEAB3jmGWKCLkCtyBuPKMQAQ2eqvBhfMiczVYomYGX4R9HXR2zPTDpSVAeAFdACzcy9KNxDhDPP9",
  "key19": "3exM1HyAqDt6henb1DG1QcxXyNy7JikbVcvRTMiADBuAzRb4aqSjEJN6Nxw3TXHAzZ5f3cejz5VV4Qqvenmat3x5",
  "key20": "5cCkqt5aTAepBjSNR1vcQ1SngUSZD6vSATuZpMPuZNHCoEgLLxoA6FjdfSccDr5emouv8SaSmKcfUQ5fS1xhhaMC",
  "key21": "5Dr98nmoRGs9PSLu9panHVNiG1PNLqw3Rizntyh5Aj8nQRxoLgaWTxuMiFMNPAY9vH8ZVzm8TFKUyaks4gzxXc8k",
  "key22": "4HJoc2MQS6J4YXGTCQH4GHJUP515g1B16rkbhGHBN8eSqXJrX5288n7zczg1BQz6VMkGNYbqAwBD6xwKNCXBmZqr",
  "key23": "DmALH6PDvgWWyZNQutacxLMey121H49zpBDGxAkP7cMvvPGtfzhzx1CsgDT8m1oghN35FR3sMWZKQy5F9rGwjn2",
  "key24": "3Z5RWbwdj4Dj8oXTYzcrKVwWPKjvcnRBGiqVELMHaW1BRJ6p5gLC9shsS4F7LUKZbgwSVDuUtkr4dMvqT5AD19Ze",
  "key25": "3k5ynLd1BZGqTM4Nrh4aULVU3F7uKzX2NU6sQaE8BzeL1wscaERjo8bqHQzQ5kkDLoNeptSEXZ9gVcWH4Bv1gvfQ",
  "key26": "2cwqDzW1YNHFnuYn9LJfqQR2CQg7WGjPLCySd5iEt8S2kd8XmiJM9cJyprkkEsfGoepAC9k9UQ6HLwcXW2G1SKD"
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
