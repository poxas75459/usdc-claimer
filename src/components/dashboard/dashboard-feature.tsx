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
    "46WfDvk4HVMnDxzjWMwp8t1re4pK1Vp79vcSkpgnLbsLFETJRLq3EzFEiVVRh7nMg4zz88LaBsfeF4bgKsG2XSY6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JsRcYkMudirpBKPeYremRXUm3HZbF2zTdGF6KVS2fWyS8CG4P8EPYbgfsQgEjdrH4j1srRyBSabg1KTSTTmau2T",
  "key1": "5LmxucTFuq8XrBz8J3aE9CQVja3B7jLQ2QSVMxt3xRBWbtDjKdEsVb8sKPHjZ7s6dDZNieXFaNe1z4ZpqXyvfosV",
  "key2": "gXeEug3rTTUNcV4LCf3BTzqyHppP2fvuwAA2ocDWU8HRe88R4D1voCzD5KLEVvJnNu2f12kjPbY5Tvyqy1z8YTN",
  "key3": "se7V9U8Pz2WH5HiYrviwnM3z9vwaTJSrqq3TMx9CH3md8oZ8TYVWBFUdhq6GmzGhKrGRBjxJ99PtdsENLdvBywd",
  "key4": "37RC86oBwV7VhjduD73YHKJqHnxbbmyNJZE8HJe2E8PueKRbsudtzs5Z8j86y88q9uSPhgxCQS2x5VcJoL5LjR2X",
  "key5": "43xaMQ4sjj8X9avu5oNVRXbz5JDAcFCdWidjA2wU9JxwNabqLLBc6gFnFttz3TBxUb78QKU5BGHfMnkA5Ji1455z",
  "key6": "4NJ5xkV9fRxBTXdhAjLJ7jT66qQ9BANPC7gVxUQBMRWT1N7s5xnF9p7XVgUAeExdaXowg76WXV362SEGaEydNMEd",
  "key7": "4SpyKNAp2vZrGs8h48RpYkLAxRanHpFVStahErnJdFGGe7sGh7NbFMJApvs3qnPCUP9aPrJ5UMkeHEUckjKzZs66",
  "key8": "4WBXGmmTZS9QxHcvRha9q4i427gowPFjZkH11qaeqYVFh7Hj63hqpoDDqTVYRmE48HRQf37uCkTqLXd83egEpT2y",
  "key9": "4gEPsExn3XxvYeZrgbbAyBUQ9qGpxbyRBbmqLd8B6BatPz5rzQxnGe1LySzpYmjQMCq3WpwRkR8kyG17HFx7oTkq",
  "key10": "f6ykNkngrSGWk8huoqppxCXeZn4fu5Ln3ctBYMCF6wWNdtKgyw9yqZcPKosFUzSK3z77RLXsgn2XAHpZX8YiJMQ",
  "key11": "6724N9a1JBgqwuwSKnn6ce5LFYW6Dec8dzLSW3c72VjL6Fha2EsBeCtfZCfNc1hUCByW9gz7gz6upCjQaCtNUGoM",
  "key12": "3udTGHvr5sqdQrUJDxFQa6ndtTmrfBZXs99CAY6bcPHAsZpDATHTuzixkY8mZMMn2NSm8QgKCFMpuBtjwzd9PXPH",
  "key13": "5fsfHKRpDGGQpaweSyY8KANt9kBjenamySgKhMtrYxdxgsQVxgMTksKz8dEdKaLFGq73C14xuwvhPTy8QxwgBumh",
  "key14": "4UXs4QsTY8bttoCGiQmdUB8d742WX3Ycy2VFucqquZq5Ddm5vRCVHao4Vhkw4vR25nxXt2bNBJpAe31F3f73ySJJ",
  "key15": "xonJTynCBpZBq64TT3pw9pBKGmuB8fBL3o7u6QkbUPwvoxcKqLUmxmzPindfTGDRxaDiDCMqEtFb7Yi4rHoseiN",
  "key16": "3NpadtaNjKJNJBKmi8u943KNzULN2YPhvuVFYMSkadCSoD3LRkJ6MKHAc9ERYQEZUtZbdFzWrCZmEEabFe4UHfNP",
  "key17": "3mME1kXJgKtRSkKVmqWwj45k7e55TpYdDMoy8RQESv8TcsbA6z8psbjmLFUJG8iBgSzxtoNrMhHgJs2pzh8DaJYa",
  "key18": "4ejuEEXxVNRiXKnQfHn8WrLNmS1FKXqvf89VzV5E72cC2Dos6SVP3AXGBFeUaxmsR97rQ46ZpsmixLA6hPWBtu3D",
  "key19": "3biPTH3cw836D8NeSR58gKKexYbPkNVy1hT9dRK8vvCv9hHfZPUB6YXfiamgUTqBxuCPY6LkBaXpBJYwq2wEhDyK",
  "key20": "4Pja1VJKE9DSFaYXpsVY3XnPeqKztBavmRDzimo8nAgCQevHSUDxxqu3RVCojNXZjUt2MRHjhynZeZtiq5Q6odCQ",
  "key21": "4ND5abKn63Y6LKqGcJnGuk8UfZuBme1FEypC675gzdBqeA28BLpvL6jnBTjK81vG8yLh5RN2gPnoQ5SrttYpKL7E",
  "key22": "5bXzsUcqkduBVtXmz6JkxSxM5BTcGrecrejsVSfbXZSH8i4BrtpKLuA2PTCE8UEnse3WUUkcQmjZzYobWprmQk2z",
  "key23": "4i1t55fUFza4CDDCcXTQSYTb1epeDj7YMcEVdo3nQDn2aqroGNrF9fNmoresTMEVz7ijWvxLVJ2d1sTyomFp2rxN",
  "key24": "5UaAmCHN2BBp7qrJftDtxzBRh7SqhkTUfF5q2EGF8UDyVe8NrQt9mgp5HzJxxH6jcvfALKWVf7ut9u5UjCS2foHC",
  "key25": "AVsx6rBDYZiNZnsN4RAjQgso83SrwPi83sVd77qjsX82fmVf7h8yFps6FSQLBkQg4gU5j5VAEtcddwvThGqBzdM",
  "key26": "5oykXvNVY8PKsZA9dJJwjq2Cidyi9Ss5BmCgJkdSuyncfTA6v74HZaku64g4xXHd51XQQUkzmHLYMpHBHrG68GJ2",
  "key27": "619dg2uRGfeH78WJeBCkTkvWT9cfKZPrsJLCD8rSUSqU1sVL5S6BvAcwQ8dPnkZEHkEyrKt37J5NnTbh7kiimn3C",
  "key28": "3tYnYmhWcr89CVuyTKjfaw6nFi4G9BpUzN4Eo8ghUd4bgeVjJzgDXdPaf6WCqwrrgNiGZr179AFHgdNz7fRi8GAv",
  "key29": "5CXLVUgZ2m295JeRd6PSMNxUKtRMmmxt4Y7vAg6yNnFfkXb6AcaQ2ZVkWSAaUZmfR3akiwkvH8JHS1cHh2Dg3Xpb"
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
