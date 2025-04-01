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
    "4coipUnoVd6nd9LQ2s7B78iRGUCKPjWBVXrzuYweqcvo1rY5uDB2q4PJAEVpVK4YNssbFiHa2tapNkiUL7mXj7Bb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gyGeft6dgvB7Rf1duHyscZv4Bqwdn4SfnYAkwSV8spmhwTFZ6bdmyR3c2GSV682KfT24A3hAEywv6yvrJD8Gocp",
  "key1": "256eQ6DKYfdEAJ9MyHn3RMRwkavFzijppm4JNoewBdsr2ATLj3hoYHnFN49UgqokNJeSeAiYHspawEkRuoULrnqG",
  "key2": "4d8EibaFiGM4w6YDSM6hb3B4Utw1DggUfSndVxgzzx3JkJJW6QDHqRJQvG11KbigpEDwwWtcmWDw6orjRtU3G25K",
  "key3": "3DksjXEG51UKqnVcQhfYCo8YLAC6yYtmcZMCaCLgC8hnnVkXiVTcgRVpvwgvkjPYX5b1zwy4nUQXFYA4xBxXK5sY",
  "key4": "4PmvwwcYPteKJPEini3h3kzs9dU5vAjXbo7M43W6wPyx6CQxrnVXztUS3e9d4e6j91m8sxoDxQPR6B7pLyfwj7f9",
  "key5": "JjmkRgcFPsdeP5yfN5SZRj2xWGmPVJczGaws8JqHmBUFiMLR7XQvqsMVVVJM8WRCkSLqLVjNtFcYEDFUve72Xit",
  "key6": "5LPmriMLr5g5qwEqH7zVQfRF5fSmdxHJTkGbusgD2GSqeJteEnsRTAB1tRvBdzdonVqDJrHkF9bRZjDrZCdY7m2Q",
  "key7": "xgaotMsH3BKkfkUEuKntHBBsEZUtqrGVFJ94QCsxtKvxoypWmZf2a4mG1KG5EzpN5opLfr6Q5chyGdoKJ2g55bZ",
  "key8": "47S2HBGYbarkJXFHgBmZpAV1UghwxCPatHoZUUbYwJFom72bXvzB9f3C7gAVabAypEM9QXwdhcEAigEE2RXbxd68",
  "key9": "EGQkmVVMXbyg23As7t8yxbBmxdHiWRFPF4o8TCAFZxmm1aJEHvTPdKJA8EM64FiK6uqnLrrKFn1T4eZJRrsiBrt",
  "key10": "4Lbv7qu1UPCfwKWmhVEmhvr7awTSKYubGRWkF3mxxHu7cfHnBBWzTGNQtishz1J1Vu2EeoYBQ3Xq4fWKvyaRNGKw",
  "key11": "58RSjsh1wvvgu9uVZwsfurF7CWZfYRGySixA1WMaXwvXc4yKBi4aKsg6DYPD5RCp6yrK4KEPk5VkP5j7RXnXJbU9",
  "key12": "3vr177YUMCtA7TKFDNztwk5oZ2yhjnv5wEqo2eEXZofFYNYLQYyB7YnpayLEVvyZHADqKBDjzqo7XKPX9zjYU1Cz",
  "key13": "5VLkv5ESSPG4LeScpmQ4yHvsnsMAAwsEyajVN2zford8mv29V4Drz4mN9XL9S1j6n99FDGpSesSGjnzvdf6VKisR",
  "key14": "gm9fp2KvVKnY9wAWdpK34pJteCABXjkk6SDLBWxA8NPDuek8AJqCiuf839YmHnpc2AmKoU8EdW6QxGZtmZiSw4f",
  "key15": "5z8tCeSemjbJfWEeMjEqhfnM197H56L4ExmvNKiV8vxqtfDeCxr6kPHq8LNtTcWvkLaxmFH9KoZVncLW5o24UTSw",
  "key16": "4Cv85V6MJKmzTeFbfqBmfDzBhQj7RJDD92TuRNr1PUj4EHagNX7rLS2Lh5qUi3TFda9shgKgYBTbcgpKCd6dgSoU",
  "key17": "5ySZGHv4dYEcYw6Rn36ME6GuDBozR65MdAZRBN2CnQMCvu45kW6yv9Wszy9CZ6YT7f2oT3Ly4s4Ue8pL4hfgmQcY",
  "key18": "4z3PruSkUqkqxMJMvjtHSmBtmJNwjng9WKUfycqJYgF4ZhXt8qvJWyGprTpcP1vvATHew8KRJ8xw5PK4mkaeHVNu",
  "key19": "3Z1Sgdd48CVQbnmmz2jtYApz9SMMtg3inM7FzTFLXCu2Ks51LszZXXKCaEeopUUweWwo4dgWuu8pKRU9L1B1im77",
  "key20": "2kHDHhmyycQa5RpXDjFVRr2XvJd3CAQWyPGeatwx66FeGzAhpbJjFGBAhdVz2VpmRfWv1jEkvyc9vfRp8g2vacnm",
  "key21": "5DdxFa9gUeXYE4mcKhmPbkBQcMKYTq1RXZs3iska4TLBTS4kCrnBH2EWx8Xhcu9ChoSX9fDh73EJgrmyA4H2e4wk",
  "key22": "2wPhLwrWk6chw48djESMffDkVr4wv1iXRPz3DvghABc2e8oRwjXfq9GabePanVALJuF4MWp9LirtThnVSjiEJoCw",
  "key23": "2FEBrPtFkBdDHjSKaUvPm8DP9mC1XqfAAFdU6npxxzUfxQKn88FWF89AU5JpPxjYQBXfAAU2t8fGn43CAjSbPnPK",
  "key24": "3GJgm92ARNyBA5dPT3gMtkJw5oJAZW4yeKDRC4MKELCXZ8f7qgD1fidqA6MdWGA8DBH6WqQHbLtb1JKVBJQwU3EK",
  "key25": "2y1hT363xZ81E2d8GE62RJrjoLTBQubuNa2Urmb6osuqbn9LKb5TdpabTKmMTdjrpEDDe7xTrAabv7DoRmvqMebG",
  "key26": "26cZ23cWPhMei3cMfPSQ2JsiyPhscpuQ7B3izNQAGYkUnkEoFPgdJowPmVrXvaNjCWHK28EUmBZrtYQ8F3R3geBx",
  "key27": "9r3rjuyufweJvAscqcLfNwKiAkkjFq1nDcwMZVwLoR9nStSeZ62v6zsSURbtMiWkjzUbvFhMJQtpLB3BFXmhnAN",
  "key28": "5xE9B54kXKdestL4pppmgjeAWaNx3GC7RicPd9okXjP2HGhWHtcAaS6RNaV7X6XQAP7jSCMW6m4bSpZEVEALXY4L",
  "key29": "4KKzSpVGgetobjU3i11etcRBKoDQzFjffP9hWGPpN2xHt6rQQFvoLtuiWemhETnSPNwocrgYfAt5424TopSttduD"
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
