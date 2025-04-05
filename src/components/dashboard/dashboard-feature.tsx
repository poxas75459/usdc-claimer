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
    "4Jcam2RyvKirMAtQtDBtWgh2YAQPAtNqYxUaZYFfs2b8ekraeEd36uBW5NAjfg4MPWVtzSUk3ahQzBEu9DscipfT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2e2Lg5x7qaHH87bnQ6gLSygg4UUHym2FnVhfTyPpgvUj3uo6kD1vBeWZW1ztf8kLkBBVmSZEmC4YnE99rxu9S39w",
  "key1": "2hRqbyBXL6bGLShR1hVKSn7tsVcMmcJUjNVSy8bB9JJZPJieHZxgxKADLQZNM2g4QtmnKHi3AKW4hLK7iSyrNzaz",
  "key2": "zAE1F1aF7fvihgvsdTytFh6t7dst7BTs3K26cKeK7ZAUjcCJCsd4aoq9TXvRiRUqGeF7b4NJQ3ckJ2rUaMMpi9R",
  "key3": "4z1jF3orADwDZs9pAQVX1BkDgirvcvTvH7aGvXWkctY9YwAHSnur91BnGsozmYaXC9BjtNGjKGB8bhfgifeKVKe5",
  "key4": "5dnCgJgQdPfQQmtRJQcwaYdNBFzPQ5K6a5SSLYGJAUgrvH6veQAygSZkng4CaYvG2CrbZFFUhSn9sr4Lfc5D7aaS",
  "key5": "2VaarbFbM8GKtScj18ZnDAAgKyuDbScN4nF7HbnvBpdwvGRLra42f5QZNWj8LPJ3tXay7GRAMtjpj9KtaehmjPqe",
  "key6": "2ZTQpFRe3HLHrChjY5EjGrR1EZHyJNJtNtw9tgd1Mw2VJHrXX1Q5qjLdoBLsjTQN6VqaBQJSqeV9LeQwqNAZYNb1",
  "key7": "3KkEHDFsSBhM397WVtZd5cFnWTC4EVA2wh2DBWB7JVfk3kfe41PR1erjrcGS7aNNxupiWgJaT19KHo6j3xFZU5ed",
  "key8": "2ySV1vU54Z1gSPdyswwYze3WLo8CwmksNaLRj1joQLt5F2tLeUmRFKj28Ve4XA7czm1J2jAfQLn3WKctJKkMpNCL",
  "key9": "23kYybdto4RWgpQZMTUskfSxSHVVvk2iYTUFcmBPn5gQEkiRHfDeuXzk3GDFXpy8RPAhVbTw2b51RsH1vNVTfnbu",
  "key10": "4geQbpL1irfT1bPjxCDUm2VdKD8tZpErYfS71fvAFyfPxaCjzJoDxuMKqG2r1sQDpAeCPpcT6AVd3rwXxGRF8j8Y",
  "key11": "4JtSXeqFQiEe8UbMVEiDcvFe4skkqF4v1p81HJHjo19JhomvW9HBfubAbx4SFK51TNQQvdCYVfzTkesoZXFqs1WU",
  "key12": "4dsg3jrzQzq9Fm2m3oUPfaCvYkemC6yxKBDMdTVqAyxrGadAcTFKgqEgoNDu5YiAvr8nqwmYh93BdrYYVp8nsyZC",
  "key13": "4LCro9ebDmDxsJQnF4S7wzJ2wNMjBAvoFRwV6EcB3jJ7pLKws52NfVMw7bUjxW47q5hRZCj1iHTY89Srjfvt7LdE",
  "key14": "4h9PP6fyBrMPjVsNGvMBEigX8LeFH8ej5LxUPJotMHanDGMbRYREs8Z2kmtmLMJ9SKhSw1HviT5Xe2AeHLdt7TSb",
  "key15": "4Aqg6yK4Je1Htj3ZMevxyXSFLBfoqgLR1amwwDwvBzgR61uGG9mQX2bUTsQcxDiKZnqmG21CB5PMjC4iLx4ts3jf",
  "key16": "2VrY2nLfEUJ8aHZTJTsSRe1qBb5DuNZJ9H3HfKtYPypYZRWMvfZhHNZZxXGCubXyCcFfyJPdVrrXLLGZvTeJbBUr",
  "key17": "xcPkY52hsWYjpodpcPWQHVVoutxx9jWsQpjaQnqdQShqDHZJbXdaPKGtokkGAkWpJbibki3n5a3Nw5Xd2RyD2gX",
  "key18": "4E7vQHXkQ2h5DrAfU3YwZmpp1n7jHqL2Yq92LMpd95Eiz1wfpZr81fRwWvQDe4b9yUiMKyXcuS2ghkmecrgDG8W3",
  "key19": "21gZikvgL1EhEsk7uvUNt9vh2WdAPYbLCc2fGVSqvG42bNYFq7D9oo6gmPjFnuA2A1im3dY2NhLssH8KsZGjSdz6",
  "key20": "24BDaPtqPQjJ2ztgyPyCJ96S6xx4ksv8oJ4dXikwo9QADZZGYBTRcbLXYtvTMXtnWLohqkHnPjyJ7c9Q73xsfZRy",
  "key21": "4iKJxyN6B97MzgW8zeshbtDVDowe5nLhSTEjJ2iMmbZrL18NTFB3mB6UVKyuXCJDr5rqxMTKMxKeU9jV8Tg81JFj",
  "key22": "2iK3sFzRAdTkHRHVq8kQsxTQ7NmkGtuFHbXQgGpCzAVrnwx13EQtKmM1HswDNKgdATHe2Wnj1hC7kuZxgQeNbMfa",
  "key23": "5frvfiRsttFTuWegMA57pLetxvCrxsc6kNqPYfYVgTCrgzPWVqaqwusTdGHUwZVkGZNL9FWbtJmo2zwkyvwzVZY9",
  "key24": "5nrnwz3TH2bovRmv3w4RdisE6y8GW31NC2qUWTegvHydC3WmaZkrDDM9hf9jUmiPBAHFbdYAFccaE1Z3kxQAWhYw",
  "key25": "2q4Gr6FvMYAxoZgDmneqmgYbcEMAncaexTYqpqAKdAXQbFo3g8CU51nAmGTa5BAre4v6RXeLCM7BQmnsA8VT8S3H",
  "key26": "4JhQahRJMJuQTrAdtP3v5xMcApP3JH3eXMNTaZKXY1DXjzERPB29cwwokcPPqfe6TZkiGpKZPFtecM41Nks6qtQW",
  "key27": "63XRWqaVv6fLpVCD6K3apTiTDyyq9QLCnmGzJNxeUsCknRvLFHFPyL9wWzKH6VtH63szzfPcdmjE9DzSHtXhmLUE",
  "key28": "65imCqqLSPrMjoJqzH4d4MMkxHY3tuWKFC2TEZfnoxf6Awo4jjLwFE75Sbsx9xvfpBRJpU3pU42BUNDX9YhyzScK",
  "key29": "Kg4EPn3vWRVYFXRKAkH6oN9trsLe7ir25LdT7QQd4iDgdcZ4kKuCK6gjfbtb2zPGgMkk8mtVdtjhMqUAGo8wwkk",
  "key30": "4ub5zucyGvZ7GH3LDQm5pEBEck8eXPinmfmYDAmu8SJHKhzBZUQaYb1rfzmAXmS3VAQUMaER2hNDiLCUp9NHmkgs",
  "key31": "4ykiNi9xnyRu1A1fRBdW2xY1mg1rYvys1MRFWwEdX2mc9jZZCjmFJCm78hf7pi9MZYrpmtGVTYCGt77AYav8sdEU",
  "key32": "3f1eBMVdwtZFucPTBiXefWGr582qu6LBjY86prayynQSWexqzq9mgcK9pYb6bKgxfBAiL27kWkcoiJoob94amPH4",
  "key33": "4TpzRiGMQdkcnwYurL6UfTqigykjUyTwqDZtx47A6YcRGuaZ48PTUMGYE69ffNWcPqNqMP4TTdQovAzSbjvdYWPR",
  "key34": "52PVPTAZqW7J8geeCmUWNLRQnt7RijtaWoyW2xU3ZFyZHe4QY3SiHuGe1k6m6Qrz2iY3EdngsGFm7uzvctSw3UCJ",
  "key35": "4DgJPM86ZVgqEehsJFAkP8m2zbaAtNVZocn3jEmXFqPbDsvPnZvgaFnUBtofEcyYqSjsc6zkkthfZ4KMyWrAAsHj",
  "key36": "21CairQSB8USki1SZzcrJvkrWtz6hv1oWYeUoioLXSYjJ5NLzBb8E24ksHNRsERZnADSEHTdQ4wGH423PtwBHz5W",
  "key37": "eSaPHDB7FDPYo5gKSXQYfxwwZq4f7YgAyShEYcE5vEnNfUM7SwiXem8N3qwHxiiDRxrGqpC4C8zRYayqFaXU1Kk",
  "key38": "4nCTNbn3oY7mZhwaUksi9pfRddGkmU7mUSxZ7mP9Qxsq2nBqB6RzgoRh9dL3eH6g5R4VwoY4vvTSVGagPg1cGXV3",
  "key39": "2VTu5NwcpV3HNtHDayYjVihpgCFaAFm8KzV91R2Y8KnLCvos9KZ95U25QRc73gvFHaNZUBqcbu7zHi7TSjxz14qa",
  "key40": "5AuffoJE7Z5E1SnALueQ1qARW28iyLkXhi1uGH4uvqwBqFAVNxFKFnJdxpshAd6ETmGo2pygp2Pgy5fiYB3WZCxx",
  "key41": "5icyGwZ2sMM9qnWbPH7r9Um1wAHV7JPGcjHroUur91LAuFCBK8ERDygdc7UfR6gsfHqx1bbbxSqUEGQpwGQpmYE8",
  "key42": "4RtXphD8zkdUaBKBu8qF7fiqimLfLNctwdk5jPzmufC2A3aqgqzmNnZU5f8wqn9wRKvwo8CjYnrvcVtQn5xob74r",
  "key43": "KJRvjDYx5nByCPhBX5nRpwVnzCH7SjweeivGvUryXCsJwUQWnM3mY7CqaVT9gwrLvNz5yXJLt7Xj3L52Xwj5ZSn"
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
