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
    "56RMU3WDkbmNS5YypFmzbdZ3bCA7YC6vASDPqjA1rBFYgWsPTmD99PRvmtzD5VmR3DFuXrqwz7mS4Uo8n52D7gik"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51qCkRJFJxPpVcTBAZqYhoZzJfC5cjdJ9KDoREKqsx1Lsutzk8PEwYUFuPfBHmGbrxWzEkJoLvsFkAxpjh3Hor6o",
  "key1": "4WuBcireW6t3FcdJagTYhRJpYmPZZYh23qk5GFDFvjwUUDc53MfcQQJ3UYbv8uzbPH6uxCwhGMVAQuX2nz3HDgGv",
  "key2": "2KKpurv4sVEfbbgduCREDP4UHqZVmJQbaSp9xopquxmL9B1ANPGTBWCLoDC8N2MS7j9TkL3fVzbvah5nN6bEZgq5",
  "key3": "5BzvWJhJcbfivoXQVMp3LGt9AqVw1TW7wQhUHP2CbiBG7atn9frSTWqGU5qjGwWBABbtzzABgmnoqmsY4qraSQji",
  "key4": "2BC1sH488CGT47g8r38d6rNvNtFAdR257ZY9TxRjW2onkUNEwwZmPa3GfGFebS7zfYu5DSPfaaj7RvFzsbRnG4rt",
  "key5": "53tv8KQXKj7NDiu9qkzHmDV92AXDZQmXDMLE6N1mNkkF1eZJPwxkJgeWX9VizjmaDSgVdNd1FiRH7K62TCVvgdaM",
  "key6": "5aQuRhHS58yB4TvwpEXJyg5So4G99PQQdMzUqirBXGFTsknayhTf9ddWWssGDoBV2zkGSMspsV6eKtyENZJAVebE",
  "key7": "64Bx9k6RJVDq4cFzTGgJ6YCLe4YrcsQpVv24iCMo9n5Fvkm5quahUmaM194XGka9xDteGhwHqpimZTXEByasnqz3",
  "key8": "45frxHrsmYbVZ4XXZ4MRJ9amEZc6g2nsmZ7bUtat4oUsXTQrco7gQ3DCWhV42EpZmzLmnCkKHnnRyiXddjbxbd5X",
  "key9": "4EyzUceLvuhkSCVmhwaioFQtNePMm9TPkyF8u3bxfiQYcfHBtx6rRsmhfA7UgCdZ4bxnw73DHBjR1Evg615ioj6w",
  "key10": "GDXUR5mPm3FCy5mwGVatNq5AjXGhKmoK8uZ3iwEbaccYDRdyM3pLY8XCZTeb9G41mCpJSotzB4VeXYFeMvoFmve",
  "key11": "2XVB7rFv34eAxUdrxqrUaPZMukqZkJA8JG2h7xSGLELGMZKoV7eLcDb5A47WZuEBq81a22fceefU7B6zsh7bQZDV",
  "key12": "2vtgESA6ZG6AZ49ftBgCwSdUNu7ZuKRdo8cj6ie7ELsfuTHbPwhPzwRGvGMjpcbCzP2YXhL8nW7fRLPTNqcMXgHP",
  "key13": "DoC6nGVjRZNUufc7nutLBDpKSuMGQenDmCf6S6PX3cVgNgYFmvhWndMuAi9ztjTerJJd5sPmDRNAF6ZqtaDJaQD",
  "key14": "FMSQ7E7CN5UGA8UP4b75drWqpgLPrM3XevEHaysCG5QdGnJkEL1ytPpHh2TEnsCdtWdFUJco1vnnUNRvQRUZkov",
  "key15": "2vT6Ccdr8SzMJqrqBhYv94NHMrGT3Qs8FCwhnkhMYNPgAG2xoF33ob9cAecsJPtGbZGMyzRwbpP86weAsPb2Exeq",
  "key16": "5S1S2vf1RAYxga1YdkvgAkzG4PJ6pLQZHKU7XEr77Vi7Lba8ymhUe971bXwBHzF71F7RPXsxcSmPNWY1ZQFScHTN",
  "key17": "4WZM6R16fMAWwKSaH7DYRUvwD2Q26m5or6XrntpzXtMNJqssGDusLFwizzWiHuMDhx3bAnwctz7Avmd981zbFFWY",
  "key18": "57DRoC4Ar2NZwWzNcsTKn8aHo8V1eMVEw3kUKhkwJ8Xc55uGRG974mYQ1f3rDtfSKNLRJzk2XLM2a4woMDQr2x4z",
  "key19": "3AjwhD4XBcXD4AkJ958u9LQAy3ezXtJdaSFmVJGEsipGaZaXtoUQzohTuFFqmL9KBEnX4q5ZgUvbzQKutn28629G",
  "key20": "4ofShFTVwAs4mufXSkT6TvUFaxSiH8wSGQ5n8upiyBskUSEW6pd6y6FwiCEfTQEpzraSya2UTQaWspvghYxdvTo8",
  "key21": "AECxcsQSi39JV1kMLBci89fdh8mW3SyWSkdUbj2C1iepAGvse3LDJ7vnBa2x5v1cRfbzk4NkktrkCxgudr9qE4R",
  "key22": "2D9RTpMbtBZqvkphptXtmQjTQH4chFiqWRmyNir28JTx3KjyoGFrsGZXQb2vrHvkmsAsCSvj73Fh4UiGgzEd69rE",
  "key23": "3DhuooMgXM1jEkTzamqWoGW3L5WyRhCBrZcKNpUsgvxREfva9m3ywLdbcQ7NuqgwhSnEBnK9YtvxfR1RL8rfKnZf",
  "key24": "4B5FSZr6fa39PwnxHKMUF3LfMxwkQvLswj4Gv1un1MkXf6BxTK3bTST1RdEJxZTRT4xmzofa8PJUQFXNCx7j5uCY",
  "key25": "5NRbWoTfo9g4vBK2dwQjz8F9X5bzU6M3eMAw7K4azbF6qtmPfHUQiuSC6t3Vs3DwU7EbDsvjigtgGAtfBGKXYzRf",
  "key26": "yBJS7jVhJzYQ8fKwZP7mLWHb5xvuB2LGYXnDo1B66ussCXYpmcCGRFHyfcNYagfeWn2LHbAPBNukarB6F7BGcNH",
  "key27": "VRBG4wAmNTRjW8D6KM4hcaerZatZzaGVkeSvghvJTDT36zCCPxogeqTj8KGoUTb2h3f6tFve29jWjUErd3bws7x",
  "key28": "3ifW1Ahp6ehHpHbXqLWHGbbMGerWtgDsTUdaF1wX4skLZACJvyoTc8KDi3Km8GnxGbHDYiimZF3jF2wT11omnv2k",
  "key29": "bwp43V73jm1xZv6M5FzkW9UsGUMxfRZKqsncmtLterJyMEoggqqN4PwfRM25F5KwK9ffRoy36aDHwAs2uL4ppyJ",
  "key30": "55HWEGWDssbVrsHv2DF62FiK9ZRPzYY2ghqHKCXLKAGcCeaxfu1mBpaYY1yG46wZNc3VLyaLgUM8EBq1YdrdGeW",
  "key31": "2KdGZM4GRvu73ENvNxKXa1fxhaegpmthjhecdsHUzUcBtQfLeu3VoWzMiTTTp2JKpjbZe5JA5kUz1QSf1z2Vt2td",
  "key32": "3Y77rgkyc1VYFH9roW9zyqopEmy1sxcPXZKsxejdcP3NeVvzaPkeJkSm9ZVUbQE5J4BKjhstkaHHTpiohWURM7Ro"
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
