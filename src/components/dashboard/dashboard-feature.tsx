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
    "2JVeGC6r53jLBnnmG2RvAeRViQAnZmEXpzAw1NrofRGJAdhF7q41kSz3PUZo1RD9i76tqS8k4jzvZC4nRzYCqbVd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XWPB2b2K2i8TKSb3bhsvKtzEh5vFAAqwBHSySp1DQeD1vnxwU6FLCURYN8iKdTcH3zwjkAqK9ejs2A35zEZ2pfp",
  "key1": "4CLJrEV2C8J13vEZ6ztSu56Kt2VV4fUnErJ2u1zKxt18RacK6c4ZEHHKuNRggTBkJBC59FK4u4Spf8QJgDmJP4iX",
  "key2": "JVFbQf5Qg2dPzEqigsSALpFHwYH7PNu6Vs8RiKHYod6ghALD7mU5GXquryCbrKJxZKB8idVQv3d9x3SdyDRta3t",
  "key3": "3uAuLoQAcCCBQz2JucXLKfC25sDaZEqCeNGjhXNEwavzKKXGpotRur1ZPXwapdTmbd8uCVxD4hsjof8XV7C1338R",
  "key4": "2dhBcw7mEsSsbrTsBQVR8vvLK1cmS5q4tsKqUoHGcYettE4drvNsjc5cJcQwT5Fu1AHZtdTHYnwZ5ZGqVQcQfGTr",
  "key5": "2scKYWpu7uNeRX2Fpjpgh6PLRc2CuhKwf4NKcfbfWhgiXtvzhHqXQkfUnqH4t57t5kGhWeT3nEyBj8UGp8bbqCz4",
  "key6": "4ZT3ZByyfv32Xo3SweokV1J9k5pXoyfV9wZu2S8ayjRg3jc5RjUc8PNHHNC6JsEGEegHcScHnpibNJtYeQLEMbZz",
  "key7": "tWMLMJr5GzEjjC3X9DYq8Qa4mumVh9gzwESDrjTvz66g49MGV8H8Um6GSfB965WvXCzMtNM74GTSR6UedaR8VS7",
  "key8": "4KpLEzpzu61GF5F5rE5dHjU7Yc7cUGJ2Tw1LstvMRRfr8ewYnxiQEpc3Qv5ag3Kjq1EAnB1RJP1dvZfnefswjmbr",
  "key9": "53Lre184xS1rbjZbWTSfPmLy38if9HjG8f7koYpXBjSsDHd4hPGnZwgfn39kH3r9EQb59Ni3w4yhbYLEUsa7a6FP",
  "key10": "bYE4USXhQNoGWVjA4FUebqwtiwcNdVKP3aXigKxEmxYnMaYrH585ZgtxUvmnDB586MtuzqquYM3zjkv3SXmUcLm",
  "key11": "5ioC7PWZadrhuKkU6jM4KJrbX3VCQTdqt9Yw4gfphdyPK1gg75b5rhmDu4sbL8a3hFrUnp4ZG8hgSV85v52Qgwki",
  "key12": "3XdMS7Tefrkej6TRYrPS613ZoPU6b7J9dmRUbngZLemCE1UJsRwVqHe5SKFfBh8ysQtw328xqbhdvh4mxkANBR9t",
  "key13": "2vBe4oSTHgDZZbLVXy2LqLib7DQa2gdfVFQBzviE8xjoWf6SrENfDpWXxU5DjkdhYVF6US5MSpjJ8GmmxsMLD2e8",
  "key14": "2txhGZjsm9PP52fPa2NGYXMATMJjXxfmXKb8mD8dK1nPqq2cyKYgxaQACQuSE7N6PpmeNDKTnJR27Xy5nvSLukFr",
  "key15": "2FNUZitX7Jp8vnB85NuaeCrR8TLfgNQY8fXajbh6au2mPwUCxDiX8toJQqdXJb4QJcFPpeDzBP5KUvrR9iF7QS5m",
  "key16": "WhnQmP5i3VJfrnQtb1T3DRQjRKwzPZovUfAp4hQaKMNf1qV6jmAe4EHmv3f3sCUeNGNBPRh81q58XZu5ZTqLNem",
  "key17": "5VLCcnn3MJ1uTVzkjKQEvRUaryf6XEd2qyAhL88TLbvLHEjt1G5ihK98BVnANzygPqavmFStP8dzXAP3ejA4kn4w",
  "key18": "2wy3LciJHYE6tL1speEbicuCJipnA34o3bXrfTzBMhahmYub4YJcaqpduaNMCjc3bbfCZrmUR43EMnhXDsvqZVD3",
  "key19": "4m9vtyGPfmqFSzPk9KjL5sxr4AK29mk8va5UWMwz9PY7VZyAdUp3BS9H1nPubGuW5c1SYKf7cDXsA6c46DYB5rTp",
  "key20": "35g6A6pDX2mmmuJvhQPX8wtvkrbG4RrHoRaaoZ5oJBJNHgZZKzSWXaSiF39GxfspBsoJC1V5G7rkSdV3H7FQDfHD",
  "key21": "2HRXKxDhUNN9qZ3otKMiETJNRy9EoM8uJZoWBeNa9EfQByDbvRq7eYHgZHjnABEGZJPf1dx8REvxYMBGt9pmKEAZ",
  "key22": "3MaHeymCRteyE9yGArPGwcHKp9ZGeF76KmkdH3grimPhNr3nSL8AyU5EtjKozkgAh4yyX7mYb9GWEUupzzKTJN6a",
  "key23": "wcZKezUbZCbQCjrwsfWvopYJu5fNEZt3Mw76sz2eubogAzZkXk6eHKtpHqGFnndDgnExk6c8hWkVd7V32raRq9x",
  "key24": "5dZxBGquKsUyiseGSX8ptFCAeEkLd1KgJ1qBZQ4bRp2e15uyuX3SUbZEbfcfi6yeZmFmxHm3Fte1mg6Z7mHABy4Y"
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
