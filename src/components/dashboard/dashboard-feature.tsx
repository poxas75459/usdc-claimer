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
    "4N3QpNEpu7R45XnNCwzkTRcWaSpT3dXfLnzyvmJfJRwsy82NrkBWo2CrjbY8rTeLsuCbM4hQE5K13Zd9j36dBMAY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53txSgnPXLtBgcH4agrdLCpExq5GgNtRMAEqC4JbYvp8ez4eRUGYrjk67ymzgDHXxnsNeyMVTLQxqseR256Vnycg",
  "key1": "3mGfeojuGuriPh6rFv7cuMnj2ydN3AjF6nYJVKen7cxZGTHLYUcCSMoVpc8atUUFiPLDXwH43aQWMouEL4hTp5Sh",
  "key2": "5fsNKPdx1wdHF6WG6WvBF9EFq4Rkpvmki1omazMtSoohNFVVZUxnEdLramNrAF5bPkGo67qxvKrPejjLnDc6pW9a",
  "key3": "5TrVc7MYAhK2Tdm5NKzBV1ueoTXCHupGp5sj963m2nunqWvPfL3ynELUnWXREymSJfuxnw8iSS1x523ykEBsPxdx",
  "key4": "5TVuqi9YQEoyaB21ejU2LRfwKvBfHKWrymDk4eReXJWY7fyu5qoWvdqfF53BaQNg1zehE35KNhJ21ZTJDxRam5xo",
  "key5": "2GEa4a4xpQpKrWwMJc42xgPtMxhK1HDjSH6QMCsSS2Gk88Y7Wf37yorEto9Dq5R5RBJ4agSvJCe7DUbM6FX7qKs6",
  "key6": "61SeXTjV8eYR9Z5RgHryQtcxXeV19FJrFSvuCg6uxmKtvxQ3Kpp2cZsZ8KYkhdzPwuRCNSN43xhU9GXgTR4FU146",
  "key7": "5E8PYj4VemJSs9JP2nLje8BrEzNRroaL72F9VKkBpDyzLnU3b1wSDs4BugY7KjLjF1sRWSum3WkWeTLzzse2CAYb",
  "key8": "3mkeZAZEwUMZJdihNFakhUgR5RxkMYnAUhgjX1czfkXi9qreLH95Far8PgyVd6sZMNbLn2TUvVtQjmAdLAyfkUtX",
  "key9": "5anHjewbuCupetZWm5kRy5zMqhMx5XXK47iYpHUCRv9DgdHF5akzJV8FrK2XYmaWbMkFxoMDTjA1h55yPadgvjaq",
  "key10": "2yej1NMtMgjtKSfrmtnYaR7DPKjeGW3pmeKfY7R3udzUDQtCheZFyhFGq3cu5Pk6yXiWj3Q9dqApFy4u3kJNFrYW",
  "key11": "3S5htdFQVCj2YqtmhjMvXCKLqttrRoVtyVKJSivjMCJXmWqjPrUdQX22LhYizSB39oXLvqSqZDGtttC47UDbT5nN",
  "key12": "4NDpQYJUd1yd77Zti4VqgbjmefbfigG8CdTy8iUrmr1M9tZ6ePCN255GvcAguVVrMGS5jv9gRGR8tFFfRBca1shT",
  "key13": "54rgVzWaFUJEdUeWSyE1yXstFpKAcu8vQVhucpzr1SLSkJJm8uoJWS89o9DywNqyGvwZn42zuAffUHgRshP9zrq2",
  "key14": "2NFTyBcf6biqz9ZmTUKrKor3egfo4UDGtS4qBGXKhGVUCS88LnLY1VK4UHq9EoVhXQf1s3WThZ9nKRn36KMEXh9n",
  "key15": "5fsyjLngTsJj7ezce4cGfWPaagzgegW3NUj89EXfmNq6uVUL49g4zQp8XkJbTvqJP4ZKMS9A9iazZ8yCXm2xZkxS",
  "key16": "4KfdbradLLey4pHPNmHsG8JBQRLc16Nqk4NFGAPjeR5haV6a5yWjkV2e55frgSsNtrS84ouSQW9kKJQ1cuv55jCi",
  "key17": "cJFvZtqFY2Q6eV69kKM9rkDmUoeBahgR42aArwfsrSAMjHebfHxp9A2ZDB4CwnQrQc3WqkC3M9BHAaPMEuateWo",
  "key18": "2BqHYCvMbHpwQBubR4BfjjE4s3dJfBzDHyGEWThKj28im4K73JkzYVjEzHCxh8ZXNZvnUS6RTaeJ722UMPLJttAt",
  "key19": "4rectgYT4t2sxq1yEsaTfRpQ1BhceVK9yz4s5rMChggfff7YbtxN4NFYrah6uAajWR2yo8gM91gMy61UR4SuPPyh",
  "key20": "GWbBYFjovjH1c3kGVY2q8y2gJyqijccFreRk9nboD8UAvxT8a1MnMwcTi3pTa5LzDN3VfSHmjH67Ahcvin68Zwt",
  "key21": "b94pqN6Z6WENbd6r8Yj97ucU67zQPTLL2WZ2XxjNfid4oArcRoPBkG7VQ63FimbV9NJKLZasEimGpCQq7sFUmTp",
  "key22": "4xzWNTzaSpeofXmrbcepYUZYaph4Szefxh892HiDBEewstDj5RcoNsu6tWLBRYvwGRMEEgHBBx7BS4gWZgbtBsbp",
  "key23": "4ajeSD8LZVc1VWrcUN4ZvoLi7QLHrD7LHPJLMzRw3z37Ldd5GJdh8xZPVRsPLALixE1CCQ14zatxyYzQSr5oy4T3",
  "key24": "SiZzj6FkfzpfNRWsw3SpRoqSZ3y5Z5akZJ3PusupNFwNchnFZBpoaBKptoNtWuGma6GdrZ5hoNtLWzBVMnFMZNR",
  "key25": "57KJ36LBdQ8x3Rymbab8A6BNsqGpxrLJHefG5VPGJzcBSYeYnjoWvzHvxuG7gZ5LUDZktzpRhTVUzp1pf9HJqEDc",
  "key26": "3wh3eX62fgQVXikH5CK8u9kkpbDG8Cdv3HQcrUfkenWQKCZt6gyb1pB2sYYDhurwTuSwEpbVu5fUrhW6P357rBWJ"
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
