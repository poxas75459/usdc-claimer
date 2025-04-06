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
    "vDqzdfVMNJDNgC2KpWUr7KFWxCu8bYjGgZTiViS2Z1Et89KFYctV7HBuYqE5UqjW6jpVcSNCweEVTvqPxCca21P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nGr9QngXGamzGL25juVk99JfQ3KXk7T1NizVvMBvNtJA31HKh9dM6tLdFQzxXASKXPgtW3zQ8rhvveCWBckU4Kv",
  "key1": "3fQngQwqiCfiJPACfCFECgojFog4MJiaKobhhaTMe5aLAiGZGJhwZHiU1p4frQ2PrChYnaZFi4PH7rxXzdgVT8Ht",
  "key2": "391QbRsvWu8jesUHn5W1wSF5jCmnhvPkJkaLjVfW2fmjQ4vg5ZrJjk5WM3dN8Q1fJrxdUwY1PTMdEMKUkAsn4Bp5",
  "key3": "2Mnu6pFMZzNWHgUPS9BmuH3YftYgSth1svWckoh5NpBTWX64pVWVyaoVN2EgGHj4dBnECNh9gpJczmzDjEpYj4eq",
  "key4": "2HZnbANRwJuGyLyb9Ad45Er6WG8VJVQLFpzvc4yUNSxvjGb7j14jZCpnY6qQWvnnVdaHHpwR15mrSikC9692ofoX",
  "key5": "2tw8pVa8nsea9w2mSFu7YwZ5q9bNrVv71HvfXU7K78NsdjXnns4yDGVL4RqMACm3iM8iPPPRc6NaJK7uNzaYDRYc",
  "key6": "2M58eYZ1FJaHzDtqvuGrv2RhyhsYspc2QQB5CsUn4ssX58nuBPs8wSfZy3h695hCg3byZyu5aag2Bb1QrUggG5DD",
  "key7": "2wtz7heXJUUmejQZMkSRu6hhLcXN8PtZQZhLUz4Cev2GmqF7DKqvMhzLCDUQF216o8jpbiojduhz6vvEDZwWwV1S",
  "key8": "55MBxPx7m9aZwZSsZGojE4Eqq1aiBJCyE4f2YvGkLhKjPhYMftA3MLABW8pJMcdaVvXPewN9Fvk8JAW3P9845oiW",
  "key9": "2qgX56WBmyCREYQwAmWSjW7Wuo39xaiT2hDnyiFFFFvJ8CgfhTLZKJwdGQo3WwGyw7C59QvTyKHZvYt4cTruMbSD",
  "key10": "5XGGDfnt59f81Jorv7LiPVccZPVFvimZnS3p1DJUZSe54LESN9uBM4q9iHWfwpfjbSDq2ZHV7UidXyyGkmtrccvz",
  "key11": "26K7gPUSbxEHpFNDQgUBH3WNHtUMK9d9BkBk8qZt9YsZN2XHuo6uqZvqkboeEE4tyym8sFscwydAbAt3Sa9rYdVM",
  "key12": "5qwFXtauzeVDH9F6mnynVraUPKgkauHxA5Q34kRJeQh2rBXc3rrAAorX36NTdPfzrHGPpCRG8ScX9ha6xKxcJHor",
  "key13": "5UCqJGQcfaaghkCQn12vv1vK2PQBXzhyEDRQKHUgrP25LV8rWUKckkednEvuM5NFPQmXFv6BNWYL3YDHBY252bMf",
  "key14": "566irXXCSVGempeJ9zkEG6F3ey8w5Y26FKoWsPdZ2xBUqgiTENCA47GD99xNGayECsqK3opDcXHazdoXbkeW9stG",
  "key15": "4h3U6WHQkfLeHba22CpLy5W6uiXs6kd36XjjBH7mveLyWffDZDvsg6uoMn7QnbChevmiyk18zAJgnPJB9oTFmfps",
  "key16": "2XUt28WUaE3NJ6KfhMxQzQkHLtsmgF2XecpPcgMYwYi9zjRUnmY4fzKbrGVa2h5fS7jWpbmq7HC3VLsiBNP5NZkD",
  "key17": "54ymyHXyhCBNJ3tVnrnV27SFHYUmHcPJ7nRV7WGzgnqZSmepGkzBv9LobyxHxPAxo7LEtUyYvMTBnYsGmXdeMrpn",
  "key18": "261c2ruHEQTgM3po4NujZH1fmPvAgGP5JzjzPJDMx4vzpDDctwtMNvjZQe1oqH73sHvAXKpX42T5nqUTZoLkaAC4",
  "key19": "QTK3yF9gG9yQFJdDgdi8QnBBN9YUd4srrg2pkYKDduuTxfNhvLqUwJUXT7hX45sXs6g4pLvWBS6jufy5SLMqTH3",
  "key20": "5sHVARZ1ofzK4GvPcVy4bEDB3kxS9NDBftY2LdiQLT4nr1T1yvE6rSQY6nYauH3dw27BiAtXyv3jFHrdYPproGLk",
  "key21": "qCTw1gHqpc4nsCEb4a2baftr2m4hK7Ze8HTAbaryzcpuVidwnnqhcsjMZPArWKbi7gusATTguax3Khkt82Rcv8z",
  "key22": "LrYi9jQt4AohfMroitk1Egq4jxeYEarnnanc7m2ErPEptB4MyYvZPFectx2AXcFrn4RcMZwy7hTALMLdgckfuGL",
  "key23": "2F2ugupL3WRwhBEdBctj8nTrpTfw4vVV8EFZ2YdruLf6CWWAsxS3GJA7dF819hBv6SRKcLWvJf4gscYQCG3AUyJP",
  "key24": "3HEyjonQdWbJc7pWZnfevJMbmnusey883bJpJ7gqQPCMG9SX48bZ3Gjd2x66y3T4qSuGYnAEpfdP3MbWaNHsA6c7",
  "key25": "NGP734zCbuALErGTpte9zqB5vx6nBxHXoJu7apjpvRJc2CBZUfr8pYyC5h8LZXpr5PPonF2YV5pRoYg3Gg9hBgo",
  "key26": "waQG7YofhD9bwgCo9Weh96ySxAnoMW1DRu5nLrkc7BEexqwywruRqbBbfVkyBpwm1hgP5Ft5gzNHisWTP6xd78k",
  "key27": "2XSP48ZSasrHFSCaD6YfwasMPs6Fn9qMzbCWArtftG7RX7ekmGWVHW6ZHiqojzhy7S75A28A5dp3rU5b3RFA9Mhi",
  "key28": "3hHosoF8t42j3Usy9cb8xzFxUzYpHQerqfe3L45Pd33XY4ASjmbM8qgJaPPeQaKZxsKwNQQoEd2zoHQHi8Fnpu9y"
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
