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
    "245Yiq6P7HoqQBb5Ed6QKEfVwBmeDCp7MFpnPMgPPdengp5J6sCe1cYnYvqxJNNGwYi8daf1sUWx7aooRET2ZZPk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FrbQq5rNEtrawA8DiwnckyrFyFTYW8hJ9crEbWniwJk4kgsRw9Ww1oTGrQoLBD4vZ6aYyi4jrrQWp2q3gsouSPN",
  "key1": "2QSsmY3D9SHn3uzEVSyMYWAjKLhzbdgYjrNJsZf8c95Dq4rVk8Ppmjgfzq2tpbVApbwyzZzGJwndqrVBatjVc4SB",
  "key2": "2KEYJxcvj3bPc4hTV4NKBAd4KawRSjN1CRECgXGj3PRoBtuTZWGFEQSeyaDafAuhBSCsBVnCqQQNccoizK1EmEHb",
  "key3": "vkV8oAE9J8doRzNS71gShgtUkG9ARe7JwWz1tVURY1HnisuPvBY768dfNatMGSGZPe4UwiH89XE1UciqHLRXcVk",
  "key4": "35NiWZDFRPnaDmhfLWeE3gGfCbaoPBT4kdxwiDd6pcYH6FPi88faUfqkN8ivXq3x9H8CQdBSEVQxHtrvQgFHQth2",
  "key5": "52hJc4sev127zDK7YgF6gxaWYRiHC9WS3q51Dy66ShbKkESMvKGQzn4r2x7zsKDFtZrX3NVazEqGtmGgoP9NbJgh",
  "key6": "3crDdegMnf2yBvbUxVS1KAVtFoSQEnRHc342dUoNSkoJoVXXEts8xLQtxi6W8iWhvn1WGLPNv6ZDB9KUwyk3YgLX",
  "key7": "4FqnfFKSdX6dBfHwYbjHL4gtDLjvwM8ZXEhwFXgQmVNJQHZqivZHATpJM5DfCgjzBtQhgbewyarEPF8nnHbDCeEd",
  "key8": "uamKtJwaSEP6ByQdWEctCrtU5NiZzbmBzEnuaZDmsYCWS3FhweTL95LmzETtJXQbwR2uRkmjARwZ7WDxtuTdwBi",
  "key9": "3V67t9qdRyf2DwJV4KWfEc5Eehtwhv2WZGfpyfzgm75UMxrjHShxx5dC6JB6cTMjNDJwSjBZW86Rbb1aohqXjkwH",
  "key10": "3TPS2AMWTuXzqVCffvGPc1G5LUx5vVzHZ3MRgoamrgLMrHiqzXugxFDzMUboS97aknZpkmqwGq7U2ryMtLGcd6Ba",
  "key11": "5c9ZMkby5x4ch3fgkh58pQxATZFWHEYRm6cNrWrp9Z3trHTZ6vAsYFeXg1P6KP2iKhosKA9jDnZMBDyYWr5n6eiQ",
  "key12": "VJKG4xbSwtNps1xUYciedjxaBvNwgs6DMTk7cLDtGKxBw9eocaVPWahnfZKjaKWNBLPcFUm8GY73YZHL5TNbYMj",
  "key13": "29SAuU5mXimpqMWA9xERPFYpE7wPJuxJnuftDnpLX2CwMxKYjYUQkmg2NpupqkDBQAjMUWc7AfjQr65SjYPdfz9i",
  "key14": "3hkJ6UPu81fZdfZfSsAXHEhyEk8qLYLeDYUpxguC77TFYnnHiasbqvscGCPeiksW5iWLPtG9JrdTLxDsToSaYraU",
  "key15": "5aDC8S5rhx9F8oathae5p51Cyx2SeHKsmbGpodiWpkVJbFAdMm82zmZB9AdrvS7itZhpN3rbBbccxDQzpquYTAjM",
  "key16": "5Y98T4b7r5maCkhuvyUcdzCpAhxir2fgVU2p3BeRGvuhg51bhW36iZFcuqbG3xfkkHnht6jQtKm57TY1nFbasauF",
  "key17": "2hVLd5cYFBKge5fooeGxaQaD9rVzK5nzEAfqpFNGfJRRsVFubRpv3RrzxbjbhjKyLoR5A2fkmELwEA3TkqHrERqp",
  "key18": "3nCKWmkZvNSPhqKmBi9coh3F25nmC9H2ndVdGokwKVbz49DruTSUTMkowayxY3FG3KUtHLyqGMNiNs8BYz2LDVgS",
  "key19": "3VkGaW34SqTtbsifLxEQx3BAb5mxVK4uguTXZzPnQi216QM7PhZZ6zZGx3RLM22xQmYekn4dtKc6KnmZg9xqivR4",
  "key20": "3rseZTc2bRjDq8xXhQmL1ovjcMBx3xujBAV6bAgrx7fpAurQrq2e7HNpqQCYs7XTgupXLm9gM5MB1R2Cy3UV35vK",
  "key21": "5yTVZjxQLxAPTyPEAhfvNFDsCURhHWEmXvdtfKPi3Lk2rjNKMe19ev46jKKKbPpE6wMUTsxVoscPhHCrd98W3Xch",
  "key22": "5ywVaBD8vSZfTrNJ2G6FRnrgJM72pc2gEH3gxHbU8ohTd71xDmBxpHe86uJcUz3fERmYuMLJHw2u7MqE1UYgqCag",
  "key23": "5p1BVxjoTjfGy97q6NCTvVMJGGjLUFb7XCSyiNzr1ys9GyyJy1DN44g11Fubf6XsoneGfsTCGyLAooW3DwpDbhH7",
  "key24": "jPyM5tTbQcbdWMDpH6AckNJ6oysC9pP84uHxqrBg5Es6BQVjzZP3sUsnk7TRHH3pY2Tadp8nrG5bfZz9VKEyd9t"
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
