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
    "4JZigRP8sszeHqN6Tzj6SwPhfiDxdmrKtZLo4d128zMNa7ZuABhjkB8Crd1XvDqaxQUjLu5ve4Ac5BrHKGrBKkfv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3u63pixbtuAvA1nv83Fvf3F7Y7z1FnQKETfsp8ceQXQWuitPW5ApuHTzCv5QjBnY4NnC78iys9rRqPec4wVbigAC",
  "key1": "31wnFHEoWnBBFSSS9qyBfM5hvJLZWd428Aiz6NRsmwNiYd13qkhHo4Ec27os6oLGszF2EPzKBYBRSaEEsVJYZGhm",
  "key2": "5fVR4MbWXSunP5jhXDo1xB6QQ6wYRKwxHQEjuz47UVqir5mTkKFCwQxJdTKqTGEeYY94vsdU8R21w4b8YVt4KY7S",
  "key3": "3GUHpLGM8FyzNBGLynnfsAnqNyUgoafGL7DP9aqyNneR5PqX4tyC9VgNooxcNDBU3gWwmRjLpnsH8VuhgY945BMy",
  "key4": "59uDuJZFjZ5CyLWJoDAw7N9uBafchTYnyATJAyaL6kcqrkxFL6FAKLzk4tyVFx6x7LFRLz2CW9YGtNDjz9BrPpdt",
  "key5": "2Kf25Qzv2K7TBTUFxf3f1wvq5i3bFF41hxnFgv6tQyMTFadhaFeYf352Eb17oZk9vXvBuZo9g1sDDgCeY1DYojVu",
  "key6": "KNC6HP6N44iD9bTPRAPFwo6yZisdsBrnrZX2L5RGEdHG7iw5wgbPeGdTc1FaFUiYFveJxatNqoWKvELtY2yMYAz",
  "key7": "4S29nfWjtZEVYSWUT1hrab3jeWmMim77vLHX9ti6PC1risswP7nBK77awaPT5ZmbvUhntSyQG1i5xNUqdFp9HNks",
  "key8": "58PWQvTqEf8rmgh18awXxqzCbS6nUAU42wwUTxBiG4mUUKBCn9i9wFik2EFghvK7bhfgvuU8r1RbfTSB9xcCL8Kb",
  "key9": "22Fu7D86GgBYSmzdFcDMLdAKtoodW5XYu6c8NvCq8aGmqw22F4sUXxcp9HLM1Q64474R4WDGa3bTggLLASUVZe1J",
  "key10": "3iEHWqJHNLZZMKynZaNqSQhE9Y4b6ZwfJdh8NqpNxzwHyjHajDE5T3oLqWaDaNT4XJUtzrURjY7d9fPcANeHvZC",
  "key11": "56EdVagsP3BS7F2A5RosibGdfXdA77dmGzVZSJETxHb1Pk5rYzimGLyfXMSAyETe3H3VJYnRw5oEFKbu1Drz8sdU",
  "key12": "4dHDZhGjdHkLMrKzVpUDZqRNJ3KAmUF6WxKUivpFEs3A8mhUqG1WwGNQWVMVMLfW3LPoYySM1CJNH65dPz22N18B",
  "key13": "2Ck4pANjhgmK8aMPpCAntsLSKJE1Vy7ph4GMhFhSakAPqWY5SsuTxmStpNjtkjgqwZheXC2HC1nGEPbEscvQhSRU",
  "key14": "4k2aEcXZ7oqw7um9pihAZ3Xcrot36wj35P8XaN91wspjPHfhWmPN56GGXEcEJpMoNouSsikza1vhH3yd4jZ47i12",
  "key15": "5oh8KAK1d41SV1eNDcij8dG2edAsEpxWG8EkEZfbeQuTEW2jX6Zc4pHZrTGNXHgfgNBKGoh8kaVdrTYTuRhWV9YD",
  "key16": "2m8CwbjKtPeBFN4gKs8MnTUwnSzGxFSbeVZJiHgeeZA5nvtUKapHRXteWBGmnctGegoUpE3UPGGd57vJHuJMVwLk",
  "key17": "34QbwgJJR9agLQmfmdYHkhynuiF8SxpxBzXXSCqTs9YPeq5uqgFUNTx9XqCmfTZn6SUwRVH9NhewLguMSm11Fsgr",
  "key18": "2d7p9ATH7JrjHUatsFd7esv7AKrzwadjnDiWNuz7YjFL3wEJy7SohevrqrtAwTVmAQWwSg6UErotkvkAZZ9fHFXr",
  "key19": "L4UR1BZiiXPXzbYerfpMhoQAKyF1CpiLtTSFqPVELYcovTUKbnXDnJ7abaiTP324TCGxYDnSRTagYtSqtTu5HR8",
  "key20": "4B18qXu99MmSJpFdeL4USqUzy1WUmoFjBqPq7AczBBXQmNgv9aPwjXnQUSh1otEGpskRMs8soAVoqUGXYNmT3a5G",
  "key21": "4nvDnGnET8f9bMF1QESnyDBvc5vKXNsGunHX9WcmiqmXAFvC1zGyGTxUB1UvRBRmA3aAobbJ5nHvpCe2mHEiWvFc",
  "key22": "2TpBiyFmdE7JS6Mw5ihUjJUPfnvw18Zm1bc8U3Ams2d6KS1GfD2zfD8C9jKX7Ljp4apHGjGqZsk4a5joS4bBa5ZD",
  "key23": "3tqhyY81xAUssdmJY33y8Joq6vpwnDxhnmrgj87SejoCck7bZ8r1aEzeHyjTQpKhvwQekLM9JG2WPvwufNj1X9iL",
  "key24": "53bhMhEQzhpFY5LVJYeTnJfvN3HNt8EA8obeoVHxDnS5oLPsdRMwH68cZN8FPgEVuvFpEvMReN2fLQCQw4BBLDoa",
  "key25": "5c8ESpr4sCxrsaUaMPtScnAACprHZmo2NP7ZnhjLuzKzEUkgBhvmguoA1iC8ARnRg628Z8oNFS61eVaMjKsarNrE"
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
