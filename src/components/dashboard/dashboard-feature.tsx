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
    "54kqmUJh4dTDoJMxdxvK1yFsqHtUAyUkTyw7kz6Zphw9SZxJq5Xzyof6bXo4ytExa1E86GSgmNnd87eYLj3mkVmj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KyPHe4gVrVpgionRbFywgrfCMQ54oHzc4Kr26wM3r5j4QS8iC8p6Zgprtqu6mVmUaTNZ5CfQGKSu5b4V8dz5iMg",
  "key1": "32jHvR1jjG2QGxV86piVxLVYypKeHH7BNvJU1Pbe9Ld7F2GDZqR26JHmtkfwc4itev48wsc3T48PXKuCmr75Urxu",
  "key2": "4QbzRdPbAuSL5DgR4J2i1r5wCMYv62gQzK2Eb575ZFYC1TArhjNRwq2Cfvxx2Cj7iTBrcTjfbcabR3GMNgkKnMh8",
  "key3": "4ZA6jTprGS6zjeg7omLUqzEw8ZoYwbgNyHPjARvnUxFiyKRrFSk8bfQLPwDz8UPLNnSTxA8JUkuHq4wp35MeCXyG",
  "key4": "4ZrgPJ1VhGPFz4q5sZNpQ5zZnzLUxAxyxi6qdHoV1YY8v69ZqmuEVwdrBTxWLNrdDdmwqRRw2hL7sAJYMoDqj4q3",
  "key5": "3kfWFxDEh5J9zMoxbE1qiEuErw48MrSK7P6EkqSHK9ToNXznVGxxqHw4qsFSJ9a9bT8WHZWzDtAfw1LNzdWhwMYT",
  "key6": "4om8ndDf4R2VTW9qEX8WL5f7GskMY4yQ5YMSX2o1vWSMjudAw6DunBdrXvaNnCZiQBowWurrCfH8ziCAhsxrfbVJ",
  "key7": "2enmQqA3N9VNU3CitJxoJpWw5fGTApjmTzL2v2XUuBs1mHe2iRsDSbFw7caL3bk4hBHx2iB2gzCEezfLHRMkHWEH",
  "key8": "3cZsowKZSGGPrwHNaSkWNFS3xfPzc5QGgn5w7ffPKa6pyjjqTjT3XxMRi1aXy5CW1usacHS1zw9se2M9M9tBt6RU",
  "key9": "4G8K1ijBpG82NMpHck5knWDNazGiQYpx79fi82ax5isU6fWEB6wGf7Rv8KY1ktcvs22YMh7TgQH7YqJigejTKqvB",
  "key10": "5APKruoRbKq62eVP2nNxER9kRLFzETQsQXKSBf9q8g3eAuwi9PeQnF8YtBN6AALowDbXXivdwZi7v69Z9C6XtD1Q",
  "key11": "wkMWJYNBjJc7KZnwF2e3dFSj2b67FropnGN48wtenpcgjceKgoZBNBMe25msZ9zsbCFztf4KC1wvYv7Skf7LCqz",
  "key12": "2NyABjMhHUDXdvHy1h59fzpUv4ky9GcQsGfzc62JgQofeidjqNh7n5EHij16Wg3nA4UFyRvW8NPUdpVgUe15fw5B",
  "key13": "2Na3TatG3JbX78uACM8bNEjWyXJBPNtyW17NkUtRPMw5dJxddB8QJx5CzFpwW89hVXx8aXReHiQgcEHnWmUvjpan",
  "key14": "4wCxuVjeBRknpiXZfA2Sz3D7GPpJRpL7zSBWa9BwUC86CBLPB5NBykXvVmkYLVwS8cVYSixv8hfm3PzgpGNRwG2x",
  "key15": "38Jhq3FhR5rGbvTubsUyU3AGrzrDvThhz1kFYFzjXKPGX99qYDWDbFxdavGwHXnSMawTRcYwVFLwCGG3bZh4CZfQ",
  "key16": "5ByttMMFYZwDpZ6FYBNX5ut11BKPveoEsWWQHLQRcqTMr9xnTPEt256ktAJ16FFtGSqkfkXarQp4EQPBB7kDRQU3",
  "key17": "3fWQriziEj6Rt8w7qJE9p54kmPx2L9jFw56t6tr15iGYbaTDKK51sesoWTaoq5jQEeHwpwuPEJWp3ihFKm58JHuy",
  "key18": "31UDwmnPYaaqec3Lnv8soosxn8eruG4GRHT3PAMvtpgvwUEBQP5qNKvaYe1owZaVs89LQ8isheQ5Wx19BM6imtCB",
  "key19": "4rZwGBiiHNu25YZcREBjAyaonruEcLEKzJPy3mdWJU9WHKpzqtykPehtWLs3EhhAMvrf7DHqf16ywyE5ABTGhHVB",
  "key20": "43upy9ibkJWdmS3mFdKBU6sMZnMLnAqetDk81BgtZ99CV1RRWLMxaBvZBxDatYFk43t94TJbfNUUAtW1LnYqJ6oS",
  "key21": "3gqyYz86rJWmeMMfSRZtY4Hbvd17fkbMLemRjV4Poi45ZEQwh9CH8KiEyZK9D7EFSKhEdDth4vGYXii8dUNZhzUi",
  "key22": "44gfzuvsJdJzbfmMxtZ7b98TCCUHQiHMGANvM1wd5TTdPpaFRvRorpAyY3hB5BFTx3v5jfU7gRqp54a8Rufd4Kw",
  "key23": "4zYrQuPmqXiQohiCZ94hX2jez9Hv1Uq4DAkxVSpM23xYMJcN9C63V5xna593yn6FdioErGjW5xSAANuTrrDePBpn",
  "key24": "3BSo2AonkEbPRAadUokaZB4yNrCVpNETe5T79E3oaE4Dm6stdCupBYza9KxPu61FWHJuwyktLSignLneXndqwqvK",
  "key25": "9Xxxm7ECXroDnXrqb4oZbZr5HVajGzsn2tA5a2W9X9xa13qbEYwkTbGym2NpwtJUTXbhACy2NteHswf3fc68GhA",
  "key26": "5fd3AEwyQdNqXEPwLctC5NdcxqXs6yBuh82cCBgBZHW2WyveFwFtFC8eT354kiajybS6fBVExpZPSniFADYfPYfL",
  "key27": "52zNnwG3Mam2HWGLkiprDyUe1rPHP66tp1y6eQNNNwchngjuJqs46PhwgFjnvB7zyCQdya3a4jndE9a6DJqZjPNQ",
  "key28": "2iKyAoYmgXvXffB8LDWcTQt8SgKGWMhWTHF3enMdSgECrB4EFEc2eYpUFzg6MyjHsv5VbTmYU8Auveb9gVk1NF3k",
  "key29": "4W4ypv2EphK1gcArZfWhDonTjkbMQumziJxpSbG93gUTcrWgfttGgVkwuMCTquy6EdqacRofsYWMPibHzmnQRHXN",
  "key30": "3iRCaUrZs6ua714W8Mkf4A5TpTEjyrhJPXh9YQQhbPHqZZ5LsdaydxpkMHLanSCCjysfdjDQY2aN2srzMeCYtNaW",
  "key31": "4rvCsHNuS2mdYiJukScSNzByc3E6FF7dCQxqNAHmFfi7kXKJNYRkjytsezyaTNf1Ke69AcWSvjigK8zraKr2hUKH",
  "key32": "5oCXr1qnVsdv73PN5L7H5Whnoyux4hQhVJ3byviKxfZBSAmS2NP4xW1r6Ws3BAVnBJcnFeUPYSU2M4LPup4H7L9v",
  "key33": "wz8pr77EufP1zk9Me7RkFP3ynxv2cfsVRaqGXSb8BqBXVM8tzojcrUrmXbbAMHaGopHASA8QhpZGRihaNpJ6tT9"
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
