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
    "5mVz1hqkdrmBJMBZFmY5GbxumpNBAnc3Uv3yyP35iNUhLkPnWjKz5uZrJoYUWwb4vokmofLoAAWtKwshRxwAQR9r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bdsL2nVBr3eAFFaZ3mL4qspeU82dxvV9WMrkc7mBpn4d4b23dmpJWpX9a5xNvz9wPDZ2CMYZXAREsg65nQCBsbS",
  "key1": "3kkX2D1xiEf5xKKcSybRU1cxVJoGJ48dVJ59JoPyVBUboDeeimLaQXHB9mYBznY2DaVF3RN8FhK9rAX8PsxPPbcs",
  "key2": "5PUK6Z7aNUGmN6AziSuKMSYKTtEPd5xP9UKSfhPyo9NzToC6ZoNyv2qypt7PJWfxbgsBVhgZfXaWBzUp53a3BUXA",
  "key3": "7w4uv4GicibodVWLXLjiFRpdsBbczLphDEgymBoYRGbo7DAHM1iq3vJhqD7PJj5PwN7oKAwWyie7BFYWuqBMddi",
  "key4": "5EcLgxsvVoMsbhAaK6Vv38dAdUnbAukvu5a29rpyuNdZUfxeLEFUDbee9ScTeCYk9kohTFaRTNsDDJhN5QHgfxLF",
  "key5": "4RpH6eAB7NG6JpF5VV8k6JfttkgwRXs2tiGFgDLpDZ67vekYyxXkZ9YAXpYCgopeimMBp3Sae8Dv6BFK9UoyVP7J",
  "key6": "521STHoHHq3iNdmSzkHTkTh9Z6AMEVnNCMCMeJbjCN7kbv9qSb6dqGuJUR3mgLb9bu4yURu79j6xs8MCQJAEpr4q",
  "key7": "2vgAKKoWWSJ5VvFekQuZ13efDjP89MC2AsX6NeSVpf83i5dfKV8nCLi6eNzuRoCiyyGJauQXyK6jWibx71k36ffh",
  "key8": "2Nn1qAwtGT3BqTvLZPqcdaGkaYET34Q3GDrkWNfaeHTACGmfuMyLyitP2cyyPB8JJsvaev5pfeYgz1uNNKvpwNHR",
  "key9": "5xQ9DkhMJtqixu8UkNoDZDRuqtZsLERNpfSLPsM43t7YpCc2FL3Ls2xAxAT1auky74N7td5diR2eVBEuVK3QXUPp",
  "key10": "5V6UjRYFViTn3VhUxwCu2GqXGBFrboD9DJJjUNwptiaPuhMLRM5bL8D93fGDMPrwidYjqhYdHGQQ5oNkWixCdWa5",
  "key11": "4nFQVx649kh2FYxMJ1yEHbrBvoiL9D5qJER81FqmJkEVwRrYQVCHbvL999fo6visBcPiqZBMK3eejUTTrfukuGS3",
  "key12": "46zrZvYhD9FYxECYYfJvRemC3aT92RePyrxnNP53wbn1axoSkKHfuWHZFepp2TaUxNdSM1xeQHCVEGLtH6rL6sZq",
  "key13": "4WHLtrmxPYcaHecCry629ZhDLSQNUiP9ktmREus1usQ81qiB9tRM5pmuPTNKDAvFZFBpUxvncKSTiswXwQ13SKBw",
  "key14": "NrBL4T6wgWX16oXK3RgYzWmm5Y6P3R8JmBbwxLeBqkJt1Z3JSCxkmhBEXvY9th9vaQH7JBWowZDr2cRAGrVp61W",
  "key15": "4VZ5k8dqP5R5wwdGJUADWEaXFEKc4b5f9RVFn6Ce3XbrKC5HYVczYadyE8J8CjghQ469f1powSLfdFt8nYiy2RUn",
  "key16": "2vqTNit6trzH6KWhVssTNSeUuqE5Tb8o5CcUCjGrS443m4Wirk4vNtZzZD2JJA4mkv1Lk2VTaSH8Lkow55b782TN",
  "key17": "5s3AE1ajzoVDHw4CfqoD14X1e6Y5MYaqBYMyy5uuc2KzBJeNBBK95zZWNKU5kBda2CGKz4j9hW36dAfdBJi1wACA",
  "key18": "41z9GupMMB6GFMKd5EShqJF1YwWPec72SzdU9eT9r8VtxN4eYoN9B4JuKExR3RRARy5QFoRX8VEtjgGdgFbMW9tD",
  "key19": "2TaKHYcddMvt2SZXoecQWphpfZA9GeQffPMLijp5D7Vn77JxEceypDu6z8suQeB4muSxFstjqxSpqxKyTAu2yZoY",
  "key20": "4QzEMdxXSqfivSiSyHKNQt8DcE68LMyagGjLV2hKhherHEf4VE651WPAExRWKS3AJbhwWNuRhWJ2tNrJc8Kf8Win",
  "key21": "21Sq3Q1qzW5C92k1kuihRjxq7eb45AwCC43NPCy93YCwu715vAn63pbckHquoHstEtBekXw4NFzn6T3ZtquZFBzd",
  "key22": "47ALoGcTtMEFHkNc7bRr6WcjryX4AKCTqTvnxvqdiVeXQcb5N8SCcrEb4Wh88gEBSjx42NkuvmUAAnkxmf2Rhzps",
  "key23": "2ZTQ6y8jZMKB48nivusceyyC8hX2C1FHQ6kUtNGVkj1evabToqNbbKGVxcpKpPcyAb4GXRpctqyMbZTT3qja52kq",
  "key24": "rjUmyPxif3QioSidbp16HabV6nuapKkxQowSiw8bGRw4vbPHrCn9SfMyVwimc32HvWsS5jc2qdtzwZChAjrwi5u",
  "key25": "t8rgzMa2fV79nekvM8piEzWkCcQ2MWthm51PQmJqvGzWaanBbwjymy76X9EzugBkywxbLEeesyGWRUwCJH77bBK",
  "key26": "5TViNw57zuogXrvR5P21wPLFM2K5ANX3ujFLnqNgzvMQFPtrUtdVuhL9hCZALNRmNcfsqeeuePayHx6SejBCwMgL",
  "key27": "2USZNFYhG3EUYZ7Y9jyWc8oiztqEyuX9qzP9XSejSKL74LSZbwRJprWBBVcgj1AYpZwhDRC3B2RxVN9qNp55nwWh",
  "key28": "3YBNwTjuTZz4oaEzDQANfsVJbk3Z7PTpEfQBAey7Dwj9NMxtueHS3TAs8f7fEpotNrFPYH5TbztPhqjU4iUbCbvx",
  "key29": "kZTQ1ooei7zvyecLHNeMX6kZAFLdFBeY9V2oGeyQBNzddLrJMU5cM5bhimD9NkwJyFRNzFvs9qVpjaJ6Hhcb2Dm",
  "key30": "3M3aBfCdK17Mskwr2ty9vj1ofKVLLA74XkkSgSjbQRb4muHNxWLnyk8xo4Lhs8QcmLVD8YjYoqf6XPP3kcW5kpY",
  "key31": "MPZTXnXyCzggexV7ELVtegiyqNrABJZahaoKQ8fNHKLHEnCY4s2HyDzw4bm6L5SAfvV9uehqu2DFeBjjC6XqjFP",
  "key32": "5pf2hQyxSU3g7571MB5rqjonK9DV52c1SzMHfL5fqHMvxiA4467HZJesjgCCzd7uDMr5n4pTiLkfidC42UXuGCwa",
  "key33": "3eBr12EDrShBKxFwykzKYXvdBeGEBTnEJei9R6b3eza7mJxJ9jPjkuz6gAo6kMNSS2hz8iU7oERBRKxNCDjUstwU",
  "key34": "4NVJRDLjDMA2MGirZKF5gdsv4W3Acz3avtfZjLzF5NEmkPLKFDyMoxKrF4AUj1BCsFVpQeuunFVA5yWqBti5Vkgs",
  "key35": "3Vebeav1iHapqbhBkrPzmkQZjb1zf1JxtzYkjwbiYQjo2k6FHP7qNn9uoqGHhnYKioX6o3UpabraTBGoQMSCpmTb",
  "key36": "65xBozfskoTHJUmEYKoa4wmhANctUCyhS3jY2tmy2iEk17vcHmK2UiSfWz8N9DxKPLbTYiJdLLbU6QJsyWrZfCzq",
  "key37": "B8ZbRTxkFmWwRyEcDVbDbxun43FnANpF2tpGK8CAkLuvWZgeBMMdqjbLmWkVd4YvfLqYjWTwGEyrBvbRoN1kz4E",
  "key38": "jAiNhKozMdSsBbXN6pKyyxHGdXZpWULMX2Kz6BxGPsd58rhBZft5L92fPBWet4JBmBsUonFD85vaDh8Wc7xwvxo",
  "key39": "2uRi7xujwy71QcxdWET4ZMFK2nMfS5DoYxtyYj6vhZRqkmhVeP57jkgybzpFbt87PGiF2pKyrNALKSCMq4fXc7ZQ",
  "key40": "35E6CB9ZMKPa66DMHWUEagDceVxNQ8HQpYPxpqjqMwBG4xAZGQjyqhCFeGkrXGa4fJkk9byRiSwAAZxmoHeu3mM4",
  "key41": "5uJSMUBK96mbjjD7GoBf9ar6RZqX4xi1Hw2E7fg2pwSTBW98jSxQJhvraevb6d3vz41UWVq15vKV1qKNhodyuLU3",
  "key42": "2TvNhYYn8JoKLtCaWLVwAiJv4kDNmj1XCnjjFca64H226gM1kyiH4W9xYEhRsc9b7HNZLq6mkgK8CcAHK828x1wS",
  "key43": "yraUupD7qyQub9fhPH86UPMPDEz2LZ7ZeCRBEM4pPy9EepBD8HbCP8y3S2s4jMCWQBSLPjy6XozN5zXgES5uPTT",
  "key44": "5JvjfG8j9dSAQTFWcbqvg6aYgBGqxY3988aV9SMghFxgjkWa9d9pkf5GMC8uuiQeoqn2pWKxfd4L16gBaZDYtfru",
  "key45": "2VVLsDoBByNzkZJoSpmoF25hUbzZB57zCqbs1NnaY6KjQGZ7UkPpcfBCSGU6TAqkGH1nqH534aNsrnRzmFjqp12y",
  "key46": "649cpUJYohqYUeokgdhM5QAddxmvpXhzHZEFYkr3GAUXqreS9L7uPT7t9rjWLhCbfQXrYGcCvkQZ2srPpfFWTKQY",
  "key47": "3Trn4NcnDjaEw9SjBASZB1JwFuRkHm9JS1Baxrai6HvfbpF9hLZXLWGjnPys9GuAzqpDNpFmETw7qKDgbGEKGTFs"
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
