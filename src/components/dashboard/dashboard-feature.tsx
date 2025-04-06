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
    "66grWnMNgUSLESdxEXVkq7wjRZ3RSBZ2i7zjT3nWWTWyLxQJ7JiEKUdBJFhQroG1xRzUQRAb4xD8mp3pfxN7dpUP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tzeJBuamR4GkAoujthEM8dfs8SBPUX7aiSjeQBcWcTvArFJo2T2XZsyKYgCRse1qBGRjU8BEReR5jx6on671oSz",
  "key1": "4XP8jpL2o5FHvxeiHFzz4RwKMZuhBhhQtdWCqaDJ3SUdfuDGhaQffaoXCka4j4hCnHzAwiWKVAk4WmhWChTYqTZJ",
  "key2": "57QHRpryHDxjqXzGrq6j18BAS7QfXRoBVomiR6KnLhbzhkhm1zbjMiCNu3VVq1NsujQVeUWPPf5Lswd4NCyL4RkB",
  "key3": "5bABHZbZSJK1NpZhHrwGX5r5kb37cLE1mgebDzKfNXZqUQGmRU2xfWdKaNqm4n16MBCwHQhDeZUTqN3dWcgvpX1n",
  "key4": "mFUv6xQtT5btLkoABBCJR1Jqd1Fn5TCrQdRTk9jeB6nkS93Yv927RtzTZLTukDcmKpKN5obyGxupX3ufHws5UiF",
  "key5": "28b162QqRYA9vvMAnC1bFxhJ16yarznLuUrWoDxB5HPQpukcY8b6uFJrMM1aapb2uwPLTtHTVRVsJdUbAK4PT1by",
  "key6": "4aZDp8skyPz49JRGj2TEQF5dusXcGKkCjvP25y8uh1ugqbsZNnHZfUv4vgM3icuoN4aiunt5MNKfSnBdXNCzpF7n",
  "key7": "5w5T8w91WJ2cpNmKZoFgBEHRAtCJLvZFX6rJdzbouwFurcS8bqMMNVFQD6wRjhZ7MuUPwXKgDcoQw2FxcXt7kmx2",
  "key8": "F3zz66SLi6WwWomUkodnNjQSexixjNokNnRWQArG17ky9BZRRm8aXxU3HuK9SgfnmjHD8yHNLnMbpd5bw4mE91q",
  "key9": "wbWqLR6L7srDEAwfg5iB3z7bPvR7xohtkQy6Td5NX7L17Q6JF97AJS3PrCyWaBzpM8FETyVtyLvNqSMYpMsdaRL",
  "key10": "5WB7jjJfGZgbePvmjjSZr2Yc2fP9y6GEUKTMFXozmUSPSdeUf1QamjJ5BT3e7LfAjKjc6UfMtdrFE2KC5zseRxBp",
  "key11": "4ek6jZCSgMPFLNg94e9XiZnpqaokKwWcnrd7WypFyDwdQbzQACEeL89ipq9HAKeeXBsUY44fLzwKv788etddVaKc",
  "key12": "3tioDNkoPaT5wtqANaYMbno2kpjn3ESxsvjZQWoBVxgnb6u1W32KqtRcQBibkGiJwY4QUkA1DQiFrQ8fb6v6rujK",
  "key13": "5nGnqj4XaiVWJ8QHus1Kj83U1N2jvEt79bFgFU1RyWfxnzWDZWJemYr9tEj1gC2RYBPmhRhjoy7vcp1GwDtwuu65",
  "key14": "5SCDugUxffGiekdzheJfCkj4rZhwwXH9SC7fkZo5Dk5EKtRQVnwww8o3zU738c5PuxmYjCgNJQuSHAsaHD6y1HpF",
  "key15": "5nWmCta1NzQVhAigm9B4auG3ZLqxxPfk3RqUFRnYnuXxPPzV8BAVCi4BDiUtV4NciT7Ek6g8MhGA2Ck3CTxWWeZA",
  "key16": "21jdjk7t5Do94ACWDzEMQBMahoSGLKcQp6NozmmiCPAvaWNzKJEFocAZgNQk76QvghjFge6GDJ15HP3fz5mJPVJa",
  "key17": "5FyNxr9igGnZfFrnm72uwWfqqX5iHWakKt89VfqW9wXoUCRPa8EBxhXNqyx7cgiVswGcWZ7iiGVMVmKHCRGZTnVi",
  "key18": "3RGEPx84ErXpgB5oc8KE7z9tXw5jFwpLZ3ZUcxfnn7ji43LaCTC267RoJ5EafHud4y5cVfmAGJVEscu63fWhQeKU",
  "key19": "efvArb3pWSjpA836tLPLkdUQCbsuscNbWPKx3xTAHNPdv4HNYAiRFcwJCqoFvmh7rF9XSxNVeXtcuHtNrDsQU24",
  "key20": "4DBXV5mxUJaKhKJZjQwovhUpSTCgVsFRu3t7uveGtNQ7W5oCMEWaqoN9YoE6uRRLW5v59Q7stpR5rsig73d26w7N",
  "key21": "44CphBnFK5mJX6QzAuhzqgLihErTq1Zu2QDmSp34fd6zdbMHqfcDYBhnHesLcomoP5hnwmAw49CRq9GY6zxPSxST",
  "key22": "hf13SNALhQtHNSk8DgdZe3ybtbeaq2ajCe1FMCKNssawCJ5WJ7zaMXy6EcGRLwMLhpC39MXL4gJJm1wcKnmmWof",
  "key23": "5PSz6geR78PBePKCFYKEmbc6uVsaPZymLbMp4wbTss9zYUohJokGTTYKWTTTu5NUMmMwhXH7V2a4Czq3sJ951nb9",
  "key24": "45rqoPYbniys47pJyfjGEbQwnCF4p2TedGykHQXsfE8839J1JtUxwfX1u8tB8Cg1pw8WB7kyMtrUfYEn1xrCE1T2"
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
