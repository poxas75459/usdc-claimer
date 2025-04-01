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
    "LeVPd9PdVdNopW1Nyzd55MFFECGK6VoDdCBPVSPPbLmYWWp6fmuw6bgGo45ZLWWhVb2JvJHmhpGspAbsrTy7JNh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FXgEgU1NJsYFHkY9za1qzhWgmAefE2xvrSaZMinmDmhSKm5uAYaWR1NBrf4VA1cWtwFgsLMwzm6itt7xjgi3h9p",
  "key1": "UVBeNdBNXUAArCF1wkj7GRgA4LH2x6HWf7Ao2cAkStSiABPX8n9uzu6SwWag2FruF5BWb966bEJ77pBSfnKwXdy",
  "key2": "4Rinzx3WNhwSNQtTGiWSeo7tPDkMtPEG75qPChwxA256HqGi2663X1Q5JVaeqwmTmY6U87ZmTiVjE7qtZdU2YnM6",
  "key3": "3EWdAnWpkwMSV8WDiBaJskF3SM4VytEZwVWnm6HBzW1detC1gUDm9qMN3MX9Yf6d3rMThmuBsaJ6DraeqabMonZy",
  "key4": "5m98dU2wuTyhgtzd8Qqtjg36dwi5ZPSYGxWFbSeNsqDo9qyzMKpYBZjPoj8hKk6BjsxGdHsQGeje8Mu48qJ8uwfG",
  "key5": "3GBo5LFx88NAJUvi4k2rYe3buxVnVidTHVnqQ9JBw5s15s2sSQf1e7RyMa6MozeFUGGwKxjgPDSZPptfSAZSqet6",
  "key6": "32oyRfJsTCV7F9fRn1GZABk6G82juQ1BEZGWB4x35XmoqkChHCVJWE2Ecw7fmzmNc3Tm37fyRXo2ufz1cd2SAK4Y",
  "key7": "2kwgxN59XrJYbbPSARqsw6vCYH8cnA6QxmGj8WB8EHUfsFMGono4GNQkGyaVk7Yw1GCH6yEVnYZHQqeR4Qdh27AJ",
  "key8": "3yeHCRBVs5NYb5MTfhJ221Bq4WhvKcb5V1SmhheM7dfVK6MEvCxxpg7NKYnnk4P9qUi3byj4oNfRREvVCoGsa75j",
  "key9": "4gcrbkwaBeu3ceex2QuenBL3M1oM2NFamJhSqS4nwsFr1hWhxfcVBwSmrGxyqZ4uXEUhQUoiw6ih9ALpwD394zxG",
  "key10": "3dUpmWZSwoB3PCnJbkwJiqYaZWZEX1kcTP1KFHZ1gxD1JYv1vtbK23kvs1kHsB4qB6rDFVEDRQCX5AbbskSRBUGy",
  "key11": "3AXg4eBRyFxEBZv8R4mGQcTCe7wYmUoPtvQABPg5njMFUHU4VSUsR6UyuiMGDTHTTAa15fR33qviVkpSMJkAQjhd",
  "key12": "45B2f4Tszc59ZHuszw9Ua9uBvHQ2FN7FnKg8H46m2XWh6LZiqB3L5PDnpE9uLVYgJM6u6WKcGH9uQDACNKaCcR9z",
  "key13": "5jSCC7QciVouSPKJNs5xhYK5tnrAbt3Jr1XaJ8BUFQHSNcj8n6fnVHSMHQ7qSiVYTYeD7EG7imFxNsG3Fp9HfQuw",
  "key14": "57z5fP6mfBaG3AakNbDQhZtPxvc9YnwnxfCaNc6hh5QnZDVa7Tb5GQc7bf4jDqVRazGp2tg33PYHmbFjh9oeqWbE",
  "key15": "3iK6zn2QAgKL5kU2PRBbmJ7ncot4WTE1Zn8YEYDqHxMzG9rDwA3ayKyZrQeEWntjCTQT4Grk3jzuSgU69QUhxG52",
  "key16": "2ZiykNK2Bv64EktS5NKTYaMKUL2SqNf25UNJizWJyuvTW5E4f1mCcyeVf4gNPRQ5pDuRd131tAARjeK8AqvTnaYn",
  "key17": "xuTje729WunQsbuaJq6JmMzsWMs7UtPxSynGvw6WiuTWs7VJt94h3PYdEV29dyePXUqjjAChBdNHURvnNrhH14n",
  "key18": "4tir66pfHLtJFC86VcAVDNXG3qYXN2fHX6H37ge5kEt8dKTJWvVwRZXpg1rFTjn1vbXHG2HTRXYtNtiDzKXCSLf9",
  "key19": "GBMQW2Fb7SCesfyYgqHkGPzJXdAQ1Jpgamq6utixqDkC3s9U9NXkUy5TaVJHcZVKoJnBgoaTmovWmb1md5Pq9nP",
  "key20": "5Bb5mPirSCagBd8jqYm8ysthWfG6TKYgfes8tHvXLrF6beKSPT6gpBVEbGiYexvuVsczp62XkXYqRaDfH9Vpz72b",
  "key21": "4SUwfUMAqVu7KomhF8TweuL63SKXokwL2326j1HPLHCQuJCEjFBvQMmNBpfRu1PNojpx3rGBkpMGRGd6PDzWYLur",
  "key22": "28PhExHmub5Nv9mT2ng2tYYHcWmHqceSyq3cVrPeu3kqQeNPNLpQkqisK7aSBFkhad7aAM1ewpSboStSBCKWq25n",
  "key23": "3X1z92XoGRMt4f4AKFcTkHZS7zUnLPWqh3QXZJPzfpJ1stY11fYTHKHEcdS55LrW4wzNKNhQG4q9yZqhorjZRCcc",
  "key24": "LcDU44J8dTfNYi5UViQkDs9kuku8LyfXTxerNRhkbRqpXyE85f7xBXU9CewX4gzyT98Leiode7TFLNqWhQAz9xn",
  "key25": "4Sz2woYfcXoRnpuobhLNP3iQUFmHgTDbgNSVerqha3v1MsFBtzDJZ6C7PaXMeeBTkJiZaaPdcc73Xo5sXga4r72i",
  "key26": "4sVmir275esW5tedXbcY2CoY9tnZBjpgdedvL5EUA8MN4V4jDKtawKZvrgP7ZWC4L1xbNbZJHuBVFa3JNsM5UhKt",
  "key27": "3n6T3FKVTR64FtwErFAJkrCKkUP41KYTPmXFhKedMnNk8DNFQZUSBeWULQgJguXBjKFJsTQaoeyqVDfbCZrVpx4z",
  "key28": "3GUdMNL7vg5UsTnWLQLmvEeJ4ULSLo4Q1epEkknm2ob8noDaHsa43QufPThMumfNn8hPkSriuji9SddrNkJFJKP5",
  "key29": "4v9d1efNG2KY8EFe1Nt6Z46mkXAdkbk2tcUKu3EQKBbZmNiEk8yara3NiKGcNPQckyQWDQqE21P4YE64yWDWBS7N",
  "key30": "5mCxmPPumVj7Lm1DUtH76dd4TZ5emnzGtorAUXZViZkCxaubEgYyRwWcA92YxeTeTizcDBYQFsZuPa3g4qU2tiFh",
  "key31": "3preecAZ5cruu8N9X4Ur7qr1SPyMBBRauB9BYi4CoeRZPcaKAD8fXcUqbCgTGDtNU25RmdybBadPmJQHSa15sDTg",
  "key32": "5Lorca8tR727oyqSUTAVhCMFmKAHffAP1XpHPkCDX38MYfksar6N3ZtjMjtL3X15XW9A5YYVXADYfac5wrwsSoxS",
  "key33": "3UPZV2PkMdrNNhNjT5eGK7HMoG2V1s2936yy8Pnxq8YASLo9UwsT2WtCAVfHgKkubKgbZ2bBvGrjDQKFq96Fg5Hv",
  "key34": "4zQK9h95angJLvku7QSdYXNKJk48sV4iAGQP2F56nBdrDeudVnhL5TiSP63Qvx4xKLXLXEp3QVNmzNZxC8DuPE4C",
  "key35": "435xTERUpsnYFSEuMnXXaME7QyUCgktqF9xj2NmyegTV7nc24Dkt5MNj3bMWvjwJgtZprg1fcBUGQbaxd17tXEqh"
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
