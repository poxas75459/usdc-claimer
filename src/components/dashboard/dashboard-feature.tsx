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
    "2Sgv1n4KZXN8kEDJkfT5ZfNGwi4SW5eWEvYs4gx82U87A7MTNrTMKeqbznpri6tcrFi1Vc8TDxyC3PYFxsqRpfZn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6Euvw1AXZ2cU7yPq4sDSFiWjxMsg1FZeUaywTnzLrbWUtgWmfa249B5cKVtM9Gg8f4Sjwrk26gNoQkdCDwn3hUV",
  "key1": "5LZm5t6UEJXM6rhELmJexuodKB2DNHc4mjBwzbUj7ttswEg5bqLNFUkhhbThNBBKZ5putL6MbKTx3CEJ1haNDqcX",
  "key2": "3bAjvK29K3rYaz33BuJPcpeUPV6mtFSCMVW9ivQURXJ9mraH4D6pQz83SRaGUj9LVeLFutYwK95dDKtAJqWHpGWq",
  "key3": "3ygnqBXCerKpPcBxQYTdMecnpFzKm2D1xeBKr5wGCYA57yHfechgCTQDaoQGa6HyxgkzJdiVHNY1PFeeujvDGYAo",
  "key4": "3L6MZyP3ofPkDK1vwhKA4tSQBzifcwtLWsQMn91QKt5kzuKoymVnvyR86bhSeWM13XhPCZW1FJ9FkUz6v4i8uijC",
  "key5": "62ExrHsd5QnUr5yFHLX2kDeC7js6wrfFhjt6i58PPwp4gth5VfNnpFNPmv1Kn57WuioQbTJ3DSX5ei7ZfccMtSQF",
  "key6": "3Nu9iJTZ5biT2WbT1izxa2n2fLebifX86s8KskWftacp4fXRsp8wDUEtF3CVyPc7nZzHLaLGUqM33qW5YEBvmL7m",
  "key7": "5wMHVwLGZUhdvxeitfhPMRZ8gckETwpsagR2xo3ng6rdcnDg3V9KuiEjxTWacaXQq8LNvQK9Uw2xWVfqWSuySaw8",
  "key8": "4n2tMukSHixiGF38gTgsxLREdGqv8pR3Sz5EbnzSJ8PY7hSYrexDGisTk9YpLnzojiYjobfHWWVwqx7QKsdWX4ND",
  "key9": "oAhqQjLho7MX1t9HNDUZVZZ8S5CZ9yMqvdRjfNoudfVceJTtCWoDKZWg5iiZhrW2vqYvn7wmkKB4UeEW8d3aT2G",
  "key10": "4wHqjEZuGhZsqVyVGb8MVANk8HLmnx2qgoJm6nNxZwwddfLCJ3UaUZwBZtnp7ZjNXLEsxvnVCHPukM7P6MRywMgj",
  "key11": "3tifVQniCFnUDnCzHVCJdfcsJ4TvCsNWnCaJSxfqkKHp7S67FSeYxxLfcTYzfgT9b4uSJC3ifWZaQFyaumbRUSpM",
  "key12": "4irzPN8YMaSw4iSdMNdC3H9crRieL3SANcAtHwo6zrBAtjVZftn4x1AUpJN6pYGEtbhN7usaTZJB92497Pk5JJNP",
  "key13": "38DagjgeXC5RGmr33rTsZc9coQtsUc5P3WzHBjfAj9xMGVrt93uWNqSb9sJFFqH8UMpY6mMSZ9XDiraXT6uVtvLP",
  "key14": "46eZgf893BmmakD1bwaiGM6ebHDnf8ND74cLQkuhBvdvfivEPHo4FMGKm7iScP6ok7gw2BJemU186nZvCRhHRFNh",
  "key15": "APGKLHWnkDiZjAXZDQiwJNkUfUtcnazmUReKXc6ksqHZLWNFQ7GVE2y4JEPax98B1YGzwtGXGbRyP4ttgDpFBJe",
  "key16": "2j1mXA1J39TbasQSbYLVRmgAbiQMpHKe4rRNQjc1LTQZUqmvhmdGHNQYMbKocsoTczif777FEXNfCFPnGhde93pA",
  "key17": "2FBSX1coFFAKq77Cjgm6EbxvqTZXYpoKggx4ToWHeDJ1SQDPi59PXkN9wxtYQNw11HF3V8aYwwBB8SNb1wEy2mGZ",
  "key18": "KTHEsEuKTmhCtsEqvEfb1HScmKCw355prZYLYcaQQFnrrGbpn899T8aNJc4KFsM4Za9pUbLDepvsKnMVWfiAGgW",
  "key19": "5T5mbMCTf3SB8R3BVXEPBCBcLZ9svgbbxCjXFc7uKrHLaXioGNidvKRocX17bV6uicmMCEFKmX4d4PQ6gmrYLKwm",
  "key20": "3Y1q92du144G4A5VUz97ZkkUyjfargkMmZaK5ELVi72Uxe9Lxru3vzuaBNV9ERGhiUcp1oey9zD9Spynvwgw4uvG",
  "key21": "4tLP1tpRUe8hpfdvy8oJ2tFZFp1GP2crBDdPyqnprU9PnN2wHmCfvfpspqx8HsMNgcqSy4PMGi5qb7mHhUnZBdXT",
  "key22": "5RePZXdB4uWkykDtRFVJqkByQxutCngWMPsXMnM6vBfkyt6FcQqFPmwAPGwbDkMZmRijq68LXfry32isDqx7Bb2X",
  "key23": "5YLuRaH1TSdkT5NpdNt84bvC6m5K4tkLhtMiUzRNRhAdCxhgv7M8Dj41gYrQ623BbVpKC5PYVzrQcFdx3vFHsQtn",
  "key24": "41mtpZGLnvDuGHXWfoWtrkyCDdcdrwmiZD2RUuEKnPqHN5s4SVM5TwNa8HFDKHQ7YMZuLdvw58JEQ7wGzbwMMs32",
  "key25": "5tdnKTRoV8kUucvQrtbCt1CP7Q7XtdM8aRz1v8qQeofoZ1nwK77J6Kyprf1andFot2tDjzRjeVYsJF9k7NKkZSfT",
  "key26": "d7GqC4cEmBzXoXydujbSzXZ95ErSq3Jk9FRcwX62DrntEDzjH4ULQwUU3kf8jttcBNDmigWN59zs4e8QZmw2tdw",
  "key27": "51dkvLm7ALrLSGyx1Mr86toqLZ1btCGE6NFiJqxpqMmLT7N4uNeiy6usw7jQnwnRwxHJ4UL7ge5yHM9jhwWcbMX1",
  "key28": "2MLcYi1cLa5BdyRGDpXwrpjjZJT8mMpw2aCz9AHFww2sWSWyXX5scHzTw7MkpcUQUjwsqvj2NH95wrhsJ5n2Hw2R",
  "key29": "41aSbotabGHs6cWsrhaqNPmQJfQSMiPavjDdWwVnbeCQUUbYpBcDzwjzRyKRCaeaUVgz2XYMZn7JWyQZRH3QVN8F",
  "key30": "2UBRuC5KP2tUqHLMXrDco4tqKB74RRmsKBpUo9nVxKc3KZ2hWvYYKdWX2dCVKz3QqKZ1kVhXtZfS1XD5bGn9zLRW",
  "key31": "2xSa3NNUud7VcjjxKKj5kGxmQP9EjZSJ8jWm3sArMs2kc9L17ooS9WfbYEajLdQZ1a2D7NvhV92HumMuP923ezZ3",
  "key32": "2x9UosFJVjVMaEup8HE47uW4wQzg5Zz3X5jTVzNBzecXKjm6b4wFgz7hVSD1ztLwoq5UJzATmykkd5Lg94tvtVXs",
  "key33": "3Si4cTrSLgkhvtDSHCbCQYcfNMNUnhb2v4pafRbjjxMeQ5ipXfaQgdo9i6t9LxfN23McSEud8ZuqdSU9TWQscQWK",
  "key34": "5n3XsmgnjoriBLwXMgiNMgXLDt1xNf7gJYZpaeDWiGpAEPj26xMqUEGfADonSkcYsZXoAnJxG5C6teKJ5V9k8Acr",
  "key35": "5i93f8omiw6pL6kjajjMiKxtFNx9jd2Q6dsLwYvTNqEvJaDg9CHm7N38jVKV7pBXsonB2jrjiVQ1Yd2M6rRhvfz9",
  "key36": "5FGXuB7WtKCPhVhsvZtmNXf5Tdz5J2mYYvWkTTX297MU2q6HL4VmWrfcCVpSDLZ9reLd3NsgkZeJ87LcJoir5EnW",
  "key37": "5nfiKsZZD9a7yJdvqrmshd47ukBqAmB9avWEdCu8FgmXQtyPx8uEDdZMoYQsWamx38VEKrinuRCSh32yVEbCYUe4",
  "key38": "2QZsMbERZXHN4LyM4DNARvCPvcUEGhgfy2gC6Qr79C5tMius333WXAikvB53dCKJtGEvNgJsFPBftxULX9x2GeNz",
  "key39": "5Mw4HqAPeEvYuvuua9R9CEdhPZb1X3bykt39kPyTgYLid7AqbyfyKwRk4GYPhPYEz1sgURuRJQ8MSi6HY7zphzkP",
  "key40": "54s1EuCscjUmTLiJk3eDsQ48N6iWWJxCgxn7g1Xi2AZV6VLj2yck6on91pjbzy2QWpSS72k29qefy6eT17HCgkGF",
  "key41": "28fi8VBaDgCQwj6sp8cLZZsDPyNvh7yisFAhpj7225mfjDswbCUQtktUAvvRch8UysVcqks1TEPd7j2tfYopjzaw",
  "key42": "25pDHZwTQP76e73Z9JTkJf4ZPvsEaH2qD3FCrMdZkj2PKQTqdrUFJTgS7s2MHp8FPqxDXeDsP6BQq4ZEUbpotQyt",
  "key43": "4wv5s2LFSrURqRH5N5HsRZ52uWKiJw6n68JeKrjTGD7qq78Ymb61P88ZfaEeju7XGtXAycSLtGcYDRUxDU8oWUL7",
  "key44": "3obGwSjut7wBBnrZsDHFTceBwvcx4cYEQWGCbHUCDZXXt531VKLNnnUNCLFpxihJhCdYx7NqxJVEpSgVj2mFooin",
  "key45": "5UHmD9m1829BbMr41DuSaqX7sehKFU8QyrUyNddCFeEZXWmnFCc3RxG7kw8Y8gJtzLTttZUcjaDXndhVN7Z6G1nD",
  "key46": "5BknBkRLcZeFAH9zSGryk3xSqnVc5qKzwVSWc4kANPyV4frEFHapDJHJ3T3JVAaSmDxEHschVF3eEbAFfyJeNbFY",
  "key47": "TUDmhcDcW3BSRVJ5o5nDvWBihuKK7HtVnJNuDm6R45yo5rwSCfVFwmCPNkq6tYWvKmZL5piDH1uTaHFqtriLdxY",
  "key48": "2g1wamo8wXT9kXBxhwJYvmy9QQMTJrRQzR7AkboEXoYBjgrdwJV2QU9x85DEVfNC9t9ncLhT9RAYHFxgFtvzCV4J"
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
