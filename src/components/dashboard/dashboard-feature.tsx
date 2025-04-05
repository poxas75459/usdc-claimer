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
    "dktiHA3s72a38Tko3ccoMk7WwxFvWAMmX4r2X44Ge11cgicFhX1FRdn9Nj8zHRrgoSSqqhy6ACEm1g6jBL2Dcda"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3be7LnQperTGYj16g4yQZ7j6tHnm1jSRKHgmdJBEe3iFkjcTggCXTK1dhxwM91ksbG7vsvLju8niP8fcHaoJXzyY",
  "key1": "2iERoHqfxHCmKa5MfuzPLL89pHG4mq8DnY5gXRocBVQofjXD7EfeSnTnKaokiEMHZXfaN6ff5meb3dxqFKbcDVCm",
  "key2": "2gmkpVRfyNfuPeTp8SVE2cjcTdGE368DZeUoSBY9KNQmceoAzA72qMVV4afAD52yV7yAUAH61JjmVqC1MWrz9PQm",
  "key3": "3merAgMCHoaATVFfZCfujeyEEEMtZGKQ9nj985sAiW5iTtT8uLyhwQkNYUVZ2GqGzPWskpcNXy4Fp5VAaXyB64dP",
  "key4": "aVryfRg6Ywwzt8QQq1uUv6EWfzwrKV9Jo94dQkjvofeuqRZFYYRYtrPcB4ZmUVeKGh8XheXA4FPBBbKtWuxP4hA",
  "key5": "458SjJws6r3uiKw3UUyP6XwtkacqjNMECZLjmXUTb6RvD9wfFrRWzoYi7kc5VxnRZ8y9gTuxms94b2hX9KwRrAXA",
  "key6": "3AN7GdyVnGtonafvxRwcDJruqaiFqNpihKaWe4XaicCEpVivUxqBqcMqTR9MUVfLPTwjBCfARouG5HCwRPHKrnFY",
  "key7": "PeG1ChddLPrsTfjNWhbPHcacQZicS5Xnx7NkVAfq3b3d14GEh28rAP9tqatPQrcWdjsyko2VKAFiWnhHtvDPu2e",
  "key8": "2ieLuybM38KXC2rEwTgVZdaFpPKZZJor76w6Qw8PaZUoNFsxWkqXa23zrUSmgKLjHCGvHBF9kjuft5hVfJq28H8E",
  "key9": "4ksw8fJrRcW9EfQSeXVkCBA6QnQAuDUHLXUzSKJCF4sPdAL2Jo46HXYv2euvt2PkxKK7vP1zJ8nhtTLCKQExAk3w",
  "key10": "2W8jYyEL1WBRcMHquGq358Hx7CqfvjeUFcScoBrec4H7D4BTN9u3aNhAftiW9jb5ypA1Rq6VY2Rwv8FgpNo2Au5j",
  "key11": "2qbKHuRagqzk8jZi4gw6aZPS63Lt3jeuWz2t6kre6vAXQywHy2XDDP9QvtKb2wWUH1c6jnFXNFGfLzDmrvzej3Rw",
  "key12": "Y4Sa49J3Uw7vAAcUF1jYzhH3j3f6uYzyLjoYszu6NvvPSfmQ4wiURzYTvRphEF4yRcvvSfayuffuBJpYPmWGKfk",
  "key13": "5U3JPWZHbQtozxs3vvzpDcLoP5VrtL8jCzgUNmvfq4zmUbCiaXkBL79Su3rRUJFvR3VdHSZXxJQ6bHaYuFsCU1st",
  "key14": "5LYH6mgjWxEoWjotrQwd5RisieJL131TmKkyaggLUu8iWoGekk2MNcS9tbQDzA5KhZKvg4TiT9RQQqmDeP8mdbsY",
  "key15": "xfz6bfCWKs4MknaD6uWBWkyABRyyr2SVYRPWNukfsJheoykLbVJencmfkCzyCx1zn2uPuAvY67CK6uw1mjvudAN",
  "key16": "289k2ax472ogKZKRHeLBcehoUJVjocyZML78GiWdkde55F71DqVpCgoC8ES7Pj2zTu6VVH9k4G52jQYthUkHbt4P",
  "key17": "ujsmspteDmcpAAPeUCpyeMZthWdu7YB3GnShmotKZKueV3xUC8j4dHnCwDG7oN1Cbqyq3Ag1VPqzFzZokqoSfe6",
  "key18": "5dd5b2FNHhWAg5Ww5v8asD3ovwr2Aor3BD4LEXTAntXpEVZGaKjZifUkCpBjeKfcUCvqP9QrQwypMPaeB7Ghn9eS",
  "key19": "42tM5EWvgLwQJ3GfqEa6szakK2A143miFgF7W2KecW1qFQQJXNcK9CY63NieE8AjhgvdRXfBiSdcKJw4yULLBESM",
  "key20": "45TgV5HaNVR7dU1pqUWThAoy7xwj2VFCTd8BNU4Rerd5jhFUke2FiedrGJTX5eWbatnc5KsapnP7JYGtAs8Pvk8C",
  "key21": "2jMrC6fBHvUW8sbaU6gQaAiX2eLhvUN6bH5miBShBaTYPbdb8Ev6sC1FyNaEzwWPUokq3SRgjhC6NZt4Qu3gJDor",
  "key22": "9QrybswWfqmxvcdtrLGADHV1ZtefGgXw3C3FruMU3HT5TiztKwXGiMbqQm56QwhoXmVAU4DfbGKGEGqUTV5z7Xo",
  "key23": "5kKi6d9Gu2XXLjvJFkXGs7Fss4emXoixift3KCGoDqBYFXg6tHFXjx8t61dvQ4oUgi8p4QfhGwqcPL4yS1LrSi3U",
  "key24": "DoMzxbBsbVxBq7yKVYKJ3pSYkWHdJdu92KMbWBYMoJmXLZUPXp2J6gqEGUWMefgWASB85B8E61LyKZTNQri1PxN",
  "key25": "2XDd9YzwT1PTdCmJBzMDaJNvzt7uRBnVUY3CHcD2kN6ipYwHNqgGciskbbMcgJbsDnJSrF94D6qHxmirk5dydnQt",
  "key26": "65qUVmigkLK3JuWYcCxB1CvLHV63gDYuQR56Az3aSb1EraadQGCcKw5UjpVG9FdCaTr5oKGtzTsk5p7cxU4zi2T8",
  "key27": "rej1ZNnCtFafW4TLfYnN7sDGzf2RFWc5NV6uZWAJKG5c6dRk4MmZ9z7TpPEy4nEpJykhWso4ifNtpu5QnoNuSxz",
  "key28": "41fiTWkwFZKar6pJTMtBYiarHK59Sa78LMVhDQCZumCdRDTeMRcZT2gPFFt57waNo2YhKyFFcsuhdsrifAJh6qNp",
  "key29": "4Dh5Hy9UKNgfXLyFDwU9GG47rc8MHvYMMHQcw6idafQiGGX3EAykmFvPbskWoR72RNg7e3zCQv3zA73j112GSjy",
  "key30": "DgSk2t7TmNc3RKSpLLSo8ecKwYRHc9i9mMqXfhcXTD8CwLY6qC1hmbaQeSDyiaaDW7z6q8XfKsFA7yCpmgHzQpR",
  "key31": "2bBNKw9NfRtZu1aHihj7MLFyqHt55W1awmDQnpAeAbuEpKpYMdqSptEc9MUmHKFkFzrwfnvEJakedWi6zJDyjaTQ",
  "key32": "3UsusXp6sTzWjC9Soh8vU4vURFuyqvNxfjFLCvhRTaEsPah86xgwvM6kv2TjuiLpdQ6p68heinEEqcogsFuyj3eS",
  "key33": "XBLyfJEgQeDQK1yQy63CkPTjXNwiqHsBeBqufwLZLke7qiPSh8BxSajuk2xWeuw8UYPyzNKk5AnqCoaLaoPNn3S",
  "key34": "3UqxjcbN1b2YfYdNfsbaMm7c9uSS3rtvqigfLT8hTmbBmyHYNNC6uh9Hnb21ci3XgDBxPK7pgPo1pkxpeYvjirVc",
  "key35": "2iFvAdWN81NzBH24hVMyC9AXSqT1K1CgE8EoUQhVCnULv2gAonQXwyAcQEPNdeYjDyYmgBgmJyUN6NGcje4ebGNH",
  "key36": "3CpjqAPZbDhizsp8khv1DwfTmw4ge91WiJWKhYug9pWnipS36FKBWGBFNLeuHYzeoLHKrzEbq8QfctoFzL1zTA3U",
  "key37": "59ZZfodKJJLS8EUhL5qHGRTJXi2btopY6P7wsvvnHat4PzjUeZsoJ7ZAsgDzgB5Gvj5MWCZhbzfUqxh7N2TpUrB9",
  "key38": "3rdmKkiGcexUzcVdrpXqVqDJoJvsy7pAgC92rnxFjVrYC9Y5fPjsbPJs9Rdzc99XYnapSz9zwBQLpXbh6ugrQ39e",
  "key39": "3prq29NCum9NZSvso1j5YUFPHfSrEKaBAG3qoiiQD3wH6GB9LR3g8kycrQewkZuS5jppoaw2Fbit1imeihDBv8fp",
  "key40": "4emBfUCK7Yrx8YQQCW9qad8aWFcyPVnnjEu6XBtk3BYrWZWoSBwF8ryZMD8cWkqNZZk1rcvjunpVTvuqPW4kCvp4",
  "key41": "3vHbKqUgDqXQSLXKAJdMSKz38R64odT6w8z6nho3AF5zdEqAJ5P5ZowfxLPVf8mcTCzVwrYTm5aeDiacgFtfHtDc",
  "key42": "3eq7fAFrrVyFXJ3gcMJzAQX7Y5kghhftXy6annUNLPPLdeajBZ5fFDnfoKErseXyG4TXaHD1CYCTnh8xHbCsG9oZ"
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
