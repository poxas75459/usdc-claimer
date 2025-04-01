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
    "5vkTDuDXBnzoq8J2doPRbrJiv4cuYTLLtL9U4sshyBxV1Ubvs752K8egStVUiM4gCd6E75Hv3Q7CeuRRS3y9txqv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vdFEggXcDVugivzeVpmYZDWUts4zhTkoQLhb6ttZEwHhXEoTynf4xNvuBXXap614zymZ9UGz1cZsHAdC2B3kVvj",
  "key1": "2bjM9s4oFqJv6UXaXpJCsxFRvZynC8mkLorvVmJy44TUYniQ6GVUFx8CWXsfnti9jrM3mNwFSN75Qh9r9WdE7kso",
  "key2": "Jd2d8V4ES6hjb3QxRY1o7E1Gx8DK9v7J6dD1STdoY2yZUhBkQm1wc5Ltq1uEFJkZFYT33Y16Ja1JMXbHoJHxMsp",
  "key3": "3LauY4uFXQ1EaB51TBaTTxntTmeuzSwZ1yLHAkDxKSdTqjDkjh9dLyQ9S5oMMRwh8WeAxSs4sdLcLKN38eWDj2Tv",
  "key4": "Q6CP5GeSXZCQ9zgWZ3BTGVFwn7XJHbpgFnHqNQQkTEBgpy91gjPscJexP9xZVyyFgNe7DoZVzJBWpYemEvXjjyS",
  "key5": "37iTwCU93uCzA1tiudebq9KP9dj7dWmvR6hUWrHmCf36vXYrUPC8N7T1ccFUEkccNrZWm9V1cCoxfd9xQwwb83ZH",
  "key6": "yBp75qDCQpum31fiCHq9agdGgavvL6odUNL9HJqK5ApeyjkzQnA3nveErJ6kWAdnPnmQ655mgpDjRuitfSqZhfX",
  "key7": "5Zsj6rc6HbCWpHc3dDRnadQR6aUquuBjtMHeyrgYNZVW6tdnuRjqqLFeb2XJZLybwjcL3T5EqLpgaKZyhnaTWkee",
  "key8": "2vwEmmUUYXFE5gBMeSKQYSYkCu51R2QWtrZopU3jWDWtqAf5rBSHoFUbRfEc55RRhTJKsKZVaY4gRvXxN3HvLfcf",
  "key9": "594vWHvkToDY9Z6jgdLgz28ss5oEwNY6kFimsZgxayiH7Tn5Jbw8UnDpFVRAwhgRzCSiomrZ1sAXYi3xtwJa1hcD",
  "key10": "3PQkATHYNuAFdPNdMwDoMtH913Bemp7kUiy9JaUmiphYPge8qf13iATLhSiztX5jiBfsJjjMWaUq4HXzUhgGayc2",
  "key11": "2JySPCsLyc39qMfuGDXuHotjFgEkxMfMxdjbaGH4QHS1sSQRyVeb3yJHpZRfcQX8G2WjPaRBYyG51E4PLMqvCvji",
  "key12": "Zs6csPkpmTVme8fSWqbMMwgD4pTHGzNbw4AFKymKBjDfv3gi6rJgZrVNYekYWKrUH4nEnAopvfCFqBh1Ew7rEcG",
  "key13": "4kZ7gbfuBGWcPbBF2oPBRLTNxcUg2dxfNamrDBeRg2Q5mMvmTVsTGF4TskYWgV8X6PoShV7YXhzwQFMBizdvDkyd",
  "key14": "5Wv6YuSreqEQ8jDXT5T3QyKZxgdSLQYFnkMrioyHvPuKRmVYNs9tYyhBqUo3bUAi8c4hod6ZJcr6iDMWL7qM79Vj",
  "key15": "2jA9oeNDxikmDBBTWKn9owCtUfsba4PFiwYBwozui2Jut6vq9iKWUE7jTMTJnNYFrjEZ23nqZfQWYfb8JjKR2SQv",
  "key16": "2bz4x67NYSo4qvGwYCseXJzNHydrBHqBFbVyMhBnTcUdJaT7fEvFJ5UfDGGqcuGpfZUtafmmk6u5KQmxBNqG7J2u",
  "key17": "5rsnT9jb7QcxqNa7u7ZtsuVHfWNFuB5RmWSAt61UEFHFaHWbuJoFHzPRJzeLqYG88a3rLjiMaipsiXySp7HFpmuQ",
  "key18": "2mh74yALM1WnuYjxbvFdYnXBdtEv7V21dcCZBMiaVxj2ewNBLkKVrhUE7Mx3a3u5N7winDiRs8zQFCgWV8bBotQ3",
  "key19": "Rtwqw724V3aca6wcuZZQg6WGcqWjemiuxsuztXLeh7Af7Wz83S9mHYV87U8NLtyFiYvbU9swTCrVR8Yjk7e1Frf",
  "key20": "5ZimVteq768feENM2W2U9917xz7vd5quhdAxgtawvquFgJifzCXCGuzEhG9XudSac24scuRMZKyXm1EBGeEFg4cb",
  "key21": "Zg7t4duT8vp2kYztyqiWKeGcVmaNGpxnPKMzkDNGAJo7FEXqHoBCwSNyqfnzmbp5J4B7dDJd2UvbV83CsjKz2RA",
  "key22": "26sqwa7DVoSFZaJTv1KgEYAQMwyuvghN7yxBh4k4UfDU1JY1kJN3DCGypDpZn8XVFezRC8uS5FL51wDv7dQqEyfE",
  "key23": "dFEoYJnxWnRw14pw1BUdTJg5tL49FWY77aZtzS1vM5kQ6AVgDCLqLB5hYFayF3zeu3fSzgNFQrb7mid1qkCbJ4Z",
  "key24": "3vrTfE7UATpJyLtrErSAQauykX5QyXRGZY6pp4ywTRXGS6XFixBrMrDFJVa5johxXMaRdPjxEF6yRnoVoKYHwypm",
  "key25": "5BHwFtEhZEmaLePNCSY7esNdYttyQvLLuo5UrDXinKBMptzwHFCmsGnzrRehiE4omcXoPZGTwCjwKuJCVVff1xLf",
  "key26": "2WcanAobvfRJYAb8HJg9xKFmT1wWTzK3jnh3UbeycGadsyf9G3D1t4X5kmWKiDrSMXbtHRzMrcgbP7FafhZknkKK",
  "key27": "5D9mYNXbNKrFpSFP9Yxe29ykmaz9PcdAwAM2mNeNQMsQTiLocNafyWp9vx1vuRpbVPUZkSDuF5RFHM433Ase2jKz",
  "key28": "4mgucFEUij5g9qAc5zSf3Q6mdF2LPVSsMoP2HfiiLcsmUXnhLKEwyU1RcWKXxzfDcesXH8omwFNzRsbGAbfSp73b",
  "key29": "5eSTQgfxPwVXWryqGHDm3eYAjxMN8v4XNZZ7CQy1nF9opsSVtvm1dwzV2EreXXFGw5fuFrtvUzwEr1QNbk18U5Us",
  "key30": "gUSsgMke7ZChsPt6u9ZUzQNJegiuuAthv3Adz6pHC2gpsHgw47ShUr5CzM4pNvgt7VdREFGzehTh2rxDTSBpp2P",
  "key31": "YAXPh9PoqM2NfGyHrnGknuMqKghJstpLsi9w74THBfPXriniis77DYyuRxDFe4zXhMM63F524oZhfytqE4ADCgk",
  "key32": "2Kz6GzW7NPpPbK1GezmgH4pcn4tkhhrtHip6PHeg3P7HVZbSb4NdbDQLdQ8hBo8dq4Xw9CcXySquxtMS6QRWF8TE",
  "key33": "m5nQxv3xWWCgHd8SYEdREmkyPxELE1DtUxpwAEMi36aMGtdobpCZpTNZr4gus5XhCFLUsmc8FZkYngCTVgbqsdA",
  "key34": "61uKKMeLqAZSFke6rDr17zA7EZ5RxhR6fCdsmx79ydNKxeYShg68p62kh4FRxcG8MyfWm7Rmn84B4xipoLjNWKwm",
  "key35": "2d3M6B2TzeEDbobV8Hdj7jfXqR9fmd4MAF42f8FQj5ZwRXDDPsrfphFKtHFVzoJNj15VP5ZjDEJz7L72u6Nx8idr"
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
