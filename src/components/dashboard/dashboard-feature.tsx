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
    "4pYCvPu65W6U4AXnaYcPrEn36BwtHTvRZPa2Vq4M9oBuUR6xvd3qfSFZ5QzQAd1Hf86JAGjdNV3x6VFTyWGmyCjf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MeQZttQdeAR52a1Pmwm3rUCwDPY6FHsFRqJinBPqgVevMnqG5GCsVEuYcNxpkk9U1tLYUtdrFtrbgjhhfLsjBRQ",
  "key1": "3WNW2NsNHjDXQpHaEYHBH9vnykW2MxbmLkM2pD9wUrYwG14UpCtDyHhHNrkU7N16wcFNxrpYYx438hmX5Hi8xJw7",
  "key2": "5evfC93ydBHDJB5rY1zWjgQLzBh7MRY5RXvJzDN17oxfPGMFQCPBq8RyanSo2WnQKLBqKtWaS88sqDo7m5bazCm9",
  "key3": "3479eEUtmYEM1BcuWyYF8MD1rnLpBCtYeN7vQA4ss9NToVnMkyCNmkpFNYc46vBTDWLRHaVTSqqUeZtXGzi4DvJY",
  "key4": "53NQNWVM9AmvUp83KHgLqVfu6zjRfjffHGUrdc5LtFZwXCr2bsaWQiyzsmAmakuEDqdPLZLRXGmNMnbvFgE67Cdw",
  "key5": "uXhqjaQGaq4j89YibATkUUd6Xuj4mqhgyFbgK6ZGVCmrKihB8bjGipm5DuNKSApBuNj4GhVP5Si2GEwjyMCpPj1",
  "key6": "4yPmV9QHwji7DNuA1JWKiYbgYjvZRXcVScSqd84iVJf7imTSEBxLCnQZJxNPMk7PEyZdW3apACPXJCaThPkCH8Zf",
  "key7": "k58Q58bTeLePf8MjRCbuq3czwz9VCS3ws7ujxaHVmXK4DBahQoYDZ5oHNiP9Vk8YWawvm78yNszUP8N2accRaqk",
  "key8": "cxgAeyuTryTTtGzbiGpQHH3nBKo9cDaGs4EP7ESYMog6ocUChcBGqxkWmyjQL8D66fFrXcGCLfkvAqvX81A2QMX",
  "key9": "Nhkyy5szyiUD26BRzPYbbGewodpD5nGSNzmE9RA3uei8b7wFLmAbEScFDHQfu4hgRGp9EAgprfuuZd81G7LpJmA",
  "key10": "4AsFYD4oqciygDKQAfYiKJyB72xfMdDswSigXdxo5dTSbJNBpiFSoW575kMhpCivcPH7GrQsNH9Mh6kWekbfTFu9",
  "key11": "2TVf5u8VfG1D7fSdAyTutLg6VREoL36MkC1C3BrHHj5RJEnp4M6wKreoVJUjQjNcmEsJZSkgScxvFVCER3N9dBbQ",
  "key12": "ToezwFfqQCqAzVwN9CDP2PfUyhsZwu7z1xdG8p1BNkLGpuNktx4d3FiBhAMzYL7iMCByQWXkQBpgYDmqffFTxmE",
  "key13": "66jRoXusPkBaqDn4h2k67VbAQMBWtk2CVQyUDAMofjXwEwK9Wj14HejqkNPLCkKZcMtVpGTG3RCZthMbM1NUswbC",
  "key14": "2XfCQHKM9pKhRW1pGu2tSLJXCA6eF9QnaNmqhE4SKbZijVjTPy3fPBWPY27ZdaeHyqqQEPHrnpVcPXKfSvaADbPh",
  "key15": "3pVJ5J36jEeFx9BaBbznAHrSnSqDAgqT8fqpc6aTarbN7UCbuHgQPkq1GfyvSKXPM3csfaMdH5bRHFxKw1kFw1WB",
  "key16": "4sbyCcTgsyeXxX4BCw7sJ7n8BHpnbj8MNoWmq6wgnUpwNxXdMPQFGNmZHDBmhaSDZYcHKBNNQaq6h7p5HVRD1neH",
  "key17": "32HcTQTXf3a5v5QURPJH9yCmMJL5KxPi4yc8vVQKrXdyukBBYoa4LveUj6EQH6uDaBLEjYAoNobuCA3MEbdfZ6Eu",
  "key18": "JhriHLJDuPM8MzLoC7pGshSC1yhVfVzEqXAJqKQXeiWNKSaFCZRkYGv3V1fS2Xh9b7AAZhDrE6H2DrVLFrgXStD",
  "key19": "4hTU5mZSrGn5cJSSB3UytVTLe27ZQBiajeZnb1okR9d9Q1Vx3oTJL9pWdssy8Cu2RauR8oQ4Z41FBQoNYXXRbkPk",
  "key20": "4ZFrWTLhqt8mFt37PuzWNkKWaC3i3mnqhnMvCZ23zDHqgadnnRmV1buGUenHWRFZwW64Dc8uAryvfz5MrgJ7CBhY",
  "key21": "4kKuTexcXjCief9NCvuekrhZhrJCwULDapyWTCkJhHFxd86aJZ2ugU4pRzYbF26U6qciB1QzeQi9DHDdUB6xS77K",
  "key22": "58RAtokrvjwNzUib2HUoeeh2Ktdf4hJq6egP34TCA5j6wWn3bGa7zhKVJvVKC3UMsMWiWEERwehinZgrH7K7VaFy",
  "key23": "23dkoN6B1yKuhNaq9AgUMshSBVGWVHarDD5sW5qmKTCgTVWjos1HwB88AoKgpMNgGsbP6ygQcQFv6ob4Go7mW2fe",
  "key24": "4vxG95cjrUmWavveewEG4d5USoy6weHhE8AxfZmpJGcRa1ScDp1BRxfk1G7bNVxQdGqukjXbNMQuT7mAM8VAaTfF",
  "key25": "5MccUnTp6GFkvcfHTcU86nuCn4xR7Npf64EBJPvz9zC4qZw7qnj9pqBnryMrQ5umCXxo4G2mkw4F8HegQjygnE8C",
  "key26": "2v8kdLQ4MS9fBYfyNJu5ma7T6nJCG7jeT3zyPexiwWMiRVWT7u4xHKVSxnqcAVxoCMYx9mCqa4wExAZwdpp2AaKH",
  "key27": "5fd91V6Np94rmhFRVo2MgLHxK4sjDfuqDykX9RJTwJh3dps8uBaZ5f5B1sCCyEL89iJUJkKfXxfqUugEndeGwTJn",
  "key28": "5ZXzJPNQJLDiQbWTmR9EdVGWYMrpqMuiS4DmHV4mY2cGPkPmNgEN6ngrN5XpwMECig7feucKT1HQhTFiUbmUMm7F",
  "key29": "5nj9AXC7kR9QCNrH5aDfFeRKWBmiQrvESas2524gDPH9KbDrDFnmuD5BRm1zWfgcDCEf6hPTddQeDy85eSNUV2co",
  "key30": "2YhngrTPAHrbPsTifSCduhFWqVQjfkvFk66QHvEt5qPefcEYWPjf6zLD7SDHo8m9XgvMYKYCRUSyjZUKC4HZ6inT",
  "key31": "44uKMNSTJ9S3XqASgdiiZAdBLsEjiDa5bwvY7zaijeQd3wTHkzL7DzEJnMNeGJKuymMAJesbbNTLBLk9LJTRK4H8",
  "key32": "3FQ6hJPEiQU5J8FzzTrmVXy1vg7HqJqC2K6mSYUg52d3xtuQAx9a1t4BYJq7mAPXohiz8exgBbHrpZD5vpGr5abj",
  "key33": "2r7k6ceUFk7zx9pRBeRAtHn3JsMZNF8uKeX7zMdaufdwVJYo1C31f8s21JnoDFqfBY4uWJQXFYDQbBFSRiJ6zv8c",
  "key34": "5VVAZgtBtNqMHBVoxahYBMT86HhGwPNPVZDvZiE7AutvcA7H1JNSGwAmULNRPA6hixTbePZ1XuW8dfaSPystVtzS",
  "key35": "3rf7pGsEKnv9MioFEFNTdChHZ1pjS81uL3QorGihdK4n5fLF5S83ixzySWnKxDaA42THPtP6y3cyAbxfo8TP6Cy5"
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
