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
    "5GjyXhUJKf2v2BTc4mxCctv1RGvQra1pvSri5Ay5FuikQWptzFsn4BSxr3K7sdMNz3MEw9oZcbiXrfLPFUhWVXo7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Y49zQJEDcQYaQemS9UL5but9c65yRRP4hqisrQDDBYdyJSo7ooRKbwrGKJjebX1hcfWKDECnWzNRZnwJQ1MqgkB",
  "key1": "Mu3JqBNEGh7guy29ED5hSBTFqxY2EmQ95KZiavvrnQXQErDdoUy2kzyJ1JZNptYVnQZVJCw9WNaZNgvzPSr1U4a",
  "key2": "62Sfech8D54SkCMuzfcd6DFEWvHp4uZM7W8mPHdCsewuZWJCtCzisQjKd14vaMuXkBRoqsQzMhmBTn1MbZQyAzne",
  "key3": "2QutzNCb5VUJ5G4oyM6ei4k2qSHJjyvawQ6LivuzDH9Haru64hyPV6xAWkxxefvsPfJyAkkAFm7uEeXcztsNc1rk",
  "key4": "eqDcbq2EgJQd5SJ5wvwHRkygARKp9KQHtFViYqwHfa9rpmntsCcHcHySoTiPETwNzp2JjCdpzpqAKi1dFT3sCJp",
  "key5": "qNeqanuePKkmWPztvjq4hicddWCsDVrAJWEZRu5KnqafHSCEV1TqYM9PDfU8cxZZTgQSbRsByCprSbuE98nmaRH",
  "key6": "3QwNU1zFQDjrpFwoNjYZEfq72H45TvSWFFBJyiDsVyHjW1sQ3QqBsErMCuSgozRxf2bnKsW3d4Znps7dC4ae2Xws",
  "key7": "4kgHSpUT6DZVbwTh57xMG9pmFUh671gRXVYNV7p7sruc1VMeqo3enJ94wACYnBdjSvgwcgh1QvsCnpNTqgZ5M2JE",
  "key8": "2jDsfrE1MUu6Px9eG7CucrhDtVyU98U8FG1vbCkuJ3SA9Q1TqZvYTURNCYFjSPm2nnekeYSZXbDALiwvXd49PKR6",
  "key9": "4W9QRnM1jT99tqHUSCGHJwu8Vvjib5h21omkJmyi4LaNJKzTc4PJrPUFdXy7jdMZUdFJWFrfXrd2nj8v852kJyV",
  "key10": "3hcoiGDRyEo4WggzYZvtEx6QQQYNK7SPgcAbMc4tDsu7aSy3Uuo2bxuieDnUjj5HDxWc75fCR42ePoDA1uUFngm6",
  "key11": "3TwZWWN8wX4XbDcNqsCoCuciDduWCBggHf9gV7RfNCB78wq24wgFnzvR1gqN2ANveahTGt78WyJUPCSwfyuRpiYQ",
  "key12": "2c6HFhDWa2sYmNQWTPsNFRefgAXf9sTgZiwZoW6xYn2rXdUDGELzxPsthh7fKwjzCTzRbdexgqdCaa6NPbSoTd4j",
  "key13": "2DKA3f2NVZ1qU3qS9vCKoBpuVkom7AhJ4VzEhnWgCfDZizR5aCQyFuDc6Qdz4bHhWaLwpNJGEaxeUk3YBzgcjfhY",
  "key14": "4Q29EfQdHLefQHzyd661w87bWe72yHkrmB3YStGk7ofky42J2nA8Wd5hV4xMQqZ3gZqcjSCq192WuQsCNDNMwvfX",
  "key15": "4chhRC1faVEZRQkH1KcX6QYsDkHFJRbfQ3jA5BqgHAibfZ3LaXswXpxZTbBYMU1N7GxYJW3w4YGKG2gMJAV8z26g",
  "key16": "3Cjvr5xKn25izW23E4yjsUogL75XhrPvM6nMe82mSWjXN2DdgnjLA7Dj8SPVWCSjAiu2vdjbLBfNAzvwzYMMmZev",
  "key17": "2YMpToyiK6LTKjxnfY7MmNT58w3VxMMBDiTiZqK1U6FsdiABJhjXKvP5bHUoasMLUrvvQSgNFs1x9BXaveRxHB5n",
  "key18": "37dEt6W7UCdZqpenXpsX6oahL8sGvbM446zafxbzD9a2jZFyeTyYqYkqQxYVJnoTGZ9AB1o3SHoyF156UVBjN5DG",
  "key19": "3iCHEHpnJzYgVGqYZVM71QjjU7TFaivSEAdZAFSaNQrGBUrg6SFc5N2ZULuywDVuZWd5Yu28wn6ZtsPk8AtjTULd",
  "key20": "263bMF2MQo67mDR2XrbX71uoAMrRad73iWLhkbQu2PaH9ref95sWFQpd4BuXY62caru2Q1ZHgeFvdj8VFZTqzLxD",
  "key21": "5TG2i8A5JXHWqWGcjP2Nv8rryk8YXbiRvS6qvcwVkb5BeuPLjQn35uK4CWS8YsqDp98n8vwCBFj97wpoe8V8h2yF",
  "key22": "3HsuHuQxXEotFZnbtN2382YMS1h1LAEeJz3CKbfuGc1rTYQV6tCVC4z2FGFBuXXco2UZAXnURjXVZBGvBC6jAjEB",
  "key23": "3EYZk1umtqhPpHr6fpMcTXh9sW39CuwAvjsKsohjWUxaa9C4aAfHKpkFtSfibRdKypxXqz8JLnEz42WSuNgFDKJH",
  "key24": "5ZhVj1jg1gZs8rVycyrfkkt82RrbenZFJMzdF4AQfFqYPcv5neA7HBHCoVQLdUGgdBfkC2W5SG9zbM8CMcGKQNuZ",
  "key25": "4fZiDLNT5FPMrVUKKn2qh4qzx584xvx1sT9DSnRfcDHQJZCPn9QXG6H8ZnkKDBsabPYTx6K3DVQv95dhUNU5yVEZ",
  "key26": "4zVxhPgm8aGwVVZ4SCPpNgPx2e4Kw2JQmUB69mMDHskyVm8LFC1mpgXNjEK7NHDpmVBsnTBRqYKXvg1BYYDiJwHh",
  "key27": "48Pv2XkFjZUaUx9hFMkZQtb7QK5hrdAVBN3ERVTUgnxEYXEUzNWDbRPNA1ohUWAi5mWNyJsMzHMwpB68v8m4ukGm"
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
