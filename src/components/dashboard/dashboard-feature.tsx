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
    "2NVi2K3taA7hm5KcUFcWsNyZoTEMSgX6t5hq2kfNLtpMBG3wqHRxgn5dngKK48t1P2C4eUY76e2NmmBrErBWB1bF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CeU35tgrHaXDSWuWa8gxSjyhnB89MCtssS6ep8BM5G4a1HQq1mYmRnVLXkKKzGiD2eTUecoPPQkg2hBccs4WUCT",
  "key1": "3q36Y4vU5X41hAXj2pmQ3TvdoueqX8kgvEs5xnQn8zxujcD55aJQ9zC7V8sPy666HaGKcTLm2Xky5Bm3RBWvfhWS",
  "key2": "5ChH6nAQ9Qz1pRpK4ZZFsAQvUbqAwA3A5ghTUgsHFksJ7SNfsVJPdLjvTjoNHfjUHmUkUh8LpY7HDbiLfhoeZb5b",
  "key3": "3L8xCUzdwrCUHfqLjrqjfJSoN4PxEgVy1eRzonXKDMS2rYcoZ7WnYFSXu2TzzWAkKkXYY1A3RVARVusMfoB6LYn8",
  "key4": "3bMXnqeWYFUjMXifEvwpWev1owGQvgGLAsLXMY9JdT2hNGqZyGcKSm3RTNymuViP5FuKv93gacqZrYMCkcjndkbM",
  "key5": "2Tkn7FQ7cTVvYeXcN7KTsaSnzwiH4b8c4QcXvu3J5uJtAbt9Jtf327YwGJEQAbz7utGUKgtnYZfFFtCXAbgvNWBn",
  "key6": "5iE9gKRvhWMgtcYmhH7CbfA8661Svn3vtjf6nKkH9U3tAhe84TbEGcTkBNjLEhnE9L9KBanRt137h1qhJp79Bbsy",
  "key7": "2NQMxiwT53M6xJ9MGkDWBNjfocUorTbavRZUoMB7xPAU1KZJ3QeVaYq5AJEecC9gYXjNPjHCoAxGZp2DT8TagJ71",
  "key8": "3D96hANmtUPdQQLNdJxv82gSFGvZQB8ysw2g4syEKn577FWMp4pjzofgVzEkSJ481qzdz9RJwZbvZ5pRiAPAx56x",
  "key9": "646We7pySS25BxDGxRnZbVjfA5rTJnNxqEbTnVqQdgo6i9ZEV1cuKPjJsjDoNgcxGHhVqnF1cDGHCnzFz9iFNkBz",
  "key10": "25M9U65wFfSoHKyj7ziLmpGZSZaKyYNuYypXCxrS23r5nUKXfWmSqqvYS8cr9cvGZFXLWkPV4GhJkkmUFWxLG9Lh",
  "key11": "bTDLaB3R6cyf6k14wwYjvetvoDgxXftYexFZdDSPiryiqLpE5eE77PYx7pLT6k4LH2RbRpAThXpL16XuNLEvgq8",
  "key12": "578ek8RMYTpXrEu1qJjKuo14NFDuqMs6yuGbCZ9NYs4RxReY27c33gFirPKhLcPUyUqvCUBswUYo6p3dYYpZhT9u",
  "key13": "2HpYghLo7MLq8CxGz9yvhLaJjEZ92DrQXksdtosjqpvxFdAfZAEtUhj4E5tNGtLLxSXfuK5dsd7BFVryqEeRoxLc",
  "key14": "25NfSfr63eZe2MpaXpa7bN73Frbo9xTEArMWQqVizAdTFNSonmPiwNFYyytBP9cgRKCKdAoyRqsj5w2CnwmhWPe9",
  "key15": "5Q6xq5VzuDgVuPSiPKv6iwUNNtGCBGLsnjUEPQfi24yHmGp8zWRTgfqeQMuJADZx8FfTH6hJjKe3fnC9e2hn6fVw",
  "key16": "pL4QgnCU2QtJ3KuC7V4QTjchuFkWx657faBFZYatu34mP4yTp2z8syNymWAGtjj7bETsZeptn7QjsVfGpt1eAof",
  "key17": "3UG4Ja27zapYx9bvNqtgzpRU8EUQLs2HTizVevJx7F3XWbMUh4MSt8tHHj6nCZf9AKjmBBvjLoEQHr8v5hPdA3jx",
  "key18": "5LTytywxNBADaEPt5uxLopxNYPDe6spiKJ7RmZ2KqvV8PY7vDWabADkxMVAm1LmJ752VqnX9NUrEY8swEcC93SEr",
  "key19": "3jULhMPcwKG3XcszZdm5J59iYey4h2gpnV4krTVS8DJuBRe8fRjJakuSmLtPvKQdAEGpG9rBUveZ6RHNcLeJbVtX",
  "key20": "2PkxrGE5pg6v3b92Cx4GyEvM3Y9Y8r9dpUmZiMD3YukUiNsbsDaysDYNKBu5UKyPzgZtCqumwLBP57Z34vbrzxcA",
  "key21": "jQ5S9Jo5YNs1gWaqUk8yE4CEygNjs1qcmH7nbtR8fDkhPksfq9gqPBLMd5jMXydqJfbfAhbtksD16fzrGubGRD5",
  "key22": "4EXyJ9HX2aFc1qWVVpVumAsA2Ai55w6CKcvTFBZuceDeuRD32URYmpZ1jF4wNCSPVJEBS6gHqBdXxc5zyzZrSG56",
  "key23": "dZaEXJXHZrSU6KNpbB4vpeAkPntNeRuA6uZbsYC6DshhUTEzYTYHrccqsFDRbSCevB2NvLao87mci4bB5NQhBVH",
  "key24": "qw34sKKETf5iKxNkgupzBZH4N3hecLBHFNH4gKoi9TtFJ5pqV6Wwpm5BM6RUEmDtkCRvq3erq79PPUZxvyUjUbi",
  "key25": "3UDpcE23iDX2mGfktp8f3e3bJBU8xS2e3H6tH4JzR2VuhR7qTNu88WuYPwHhJbes7Fi7vzKLQAqbqJseB9haGhE9",
  "key26": "4bARpsvrEHpW3EK7ZBbVzZ2ucSqg4ZSTWTQSpHd6s6tnThRd812qfWnUFzodjadERP5dgwey1GmdtarY9mNbYQPs"
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
