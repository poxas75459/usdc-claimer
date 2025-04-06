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
    "2YUZ7a5KRYCYw65qo577a1nCRkCaC6uVCPkZHCm1ie2DcrMURBmxwxtqeG99Suc2YpiP49YoNempThG1Ceki9rwC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DTQJyYRUoM9GSXTv6iFoSc3FPPojcQLKd9TJAdU8opxHzkB6pyFoFAooYiZuREyTpAqTumxN9wyeCJoMUF4RgWd",
  "key1": "5H11jisa6u5dYYgVgZwF1QW8vCeMAFv9acGCTDDFzFcUkxUo1wdFYyZJMKWY9oSFUgXfgNwEP7nt62Z4i5QcTEaT",
  "key2": "5Nhu44Hr4xHCZScMYivr38e8G7Qo54Ew8LLMyHs4DS1iusF89xWXBWJDXu1xbTjVosZGYKNLyZB4j9oUNZ7vo77V",
  "key3": "2myZvF9Lwutw7YMZMt5gFmX57oPuhAQUSN2573MJfR1gTQ3TxEsS2vS9FDHqbjmqkhLAUd3R5zDav21h4dhbbeCT",
  "key4": "4mUWXwdzSvZBWjn9zyif7gCREgR47exLfTARv4e1HE1EuJDUBPx5YxDU9jyF913kbiFZ9xw5ty1KfT4LaHBXK4aU",
  "key5": "55YatDbYf6bEAUxZW1b6RwsEamCnKKBYG9fHw1dF1rKpi4P3F7S9zMgm7chSqv3BqeqWgHjdwaTGxuQqFWGSbvnH",
  "key6": "3tUrJ4E2igjCr8ZShB5XoLoRCZcmVk3imsmiaMuazhFkW4J155ThArL9epHZnSH8mfkMEh8i84wpbhFYADQjrujy",
  "key7": "5m7ioUwbDamKxz6GFBQ5nDtRP8zDW2YC5cLDuUGF9VqiGJKD1F1kGcV3Kspjxs7oUMRPXAfjjpuyLrSr4acUAwQ6",
  "key8": "63Pk6WuoGs6VGFdHbqkr7YZ21Nk5bQaL5g7A7wMdhHHeRWArbzuSfhjJ6ZXQbadPjneDWk5DCJ6oPrVzW7abnZ71",
  "key9": "4c3F5zjqP3A1iJCaXq1ba1tCSGAxe6PtmQQYftdDEMFzTyfRFbwTv3KiCbvMP3TRrG1ten8oF6PTXM55upYyADry",
  "key10": "3KqVniJnX3UoNhxvVxFD2C2m5nNLc2RA82XpfCRWs56qw6a2mezwFvNnpuPaqd3pdShAQYdjoTyhBJZtMu3iWmZ7",
  "key11": "5eQ8DedSPyC3KGME6Xk4nrA1ia4YZTjYqyoD7UykRd1WA6D52do6d2WDY5yqQMb8PxJpDeKbAfoaNYoCPSvwKWUr",
  "key12": "3GKf7vFcmjPsf76Evz6c8EedNXTsPbW2UU79QUTYk2XAkY6zyvfGD56M9FQhzTibgN8RVAY8tjqEyrYAiwa4udDD",
  "key13": "3QDtnv3z8LaoqVHmPe4wDPqCiwidXtUxkcRoXniEPAHiLQJsPpe6NS9NhUEfyydtjWx1amTgPbHgQHdG7vGTrVjF",
  "key14": "3y8mXnaG82TC2aDQc6dznTyPoSDvcUUR5X2Da4Hw4FbC4oZ4WrZaQ6SPc2H6UpTAcZVmMqRtnZP2uC3LXNYqk8Zv",
  "key15": "4r6diq7YfW65vv1ACsEhEAtBqWk21BdNgCUW3cJCy6aZpJJ6aAVFQf7RkM5nXiv22p7kWqc3TdZpAzfzDM5N6d9o",
  "key16": "3c5A4UN5nyDo6TRfqR818qEucS1tdWJk7TckwBQtafJ2vmCGi87tkAeDAhfk3yCSze5uqdqwSkoMnT75cJh5X4Yt",
  "key17": "5AkQgYTThQBkBBT8DSpnpLJhJLYcwqNU7PTaZwW7H7tBMuunf5W2rvJDvvofsjR5LZR7CqvEBSSziYiVZY9pzZHE",
  "key18": "4A99Bo3qSDhsxypPeQdodWbm4b391KaQd3hYrgpCwqUdh5ac2kG1SYeL8hYVprUt43M5kakvfhXwRsHMusW5kFys",
  "key19": "56BpAg4vjZ4DnbaLXe1LdQ1W89LLBi1YgFEyXdcXS3Mdf8zZ8Xd47LHdNhH3PhFWuDawazeVAeKKE68Yjkmnp3ZZ",
  "key20": "3ewuY5GuxHChHRx8TvGyRmYmGU2uR1wcQ4f9SiarBsx7uSk2jMp8tdFEieG3M1dEA5W1bQnLwmLHVN7JVhdn9X7P",
  "key21": "2Uj91USXtBdsFhg1uJp3v33oKzJczNY2FDLmGztnWqbcQwKg1fQnVsFkRKxyAXHv7jKFNjVQsqyHcBMxyDinPB1V",
  "key22": "47VGMNUfD8YKttnP8q8rNMxoyB51zztb9MWjMceBQVU5gDw4DqbmD1Rn2eJS5N7shVnEWnNDrkVg9BtZwHvfrjT",
  "key23": "51PkivTmMRYW2tLXo7dc24bd4Kq2PxJveeya8fk9UihsyzdtdzQYumHWA1vP5bHnuRtY9nvbAniFk7Z3ckpB9sxd",
  "key24": "58oD3Nn2TgWWXvSYDQYGftH9oTGvqBV5cpTJFebajjUy7L8jd6GecjxTu6hcSJvPxrtRXXJJAyn1wDpus6mrf16X",
  "key25": "3MmuEL5WguscvnzNjwKsaJNQEHNBpU8aXyzZSuHV3upUAVEzWKfZetXunWAEe5ApkhU4HcoPQBv1BhRcRjRuqWr3",
  "key26": "5ieDLjN72gGegfXbkEWJLCyMpi5Vo4JexfScYPGHbcG97Pt8JWViXdHp7JarEDxR4ZWwH3RbZGKWBQ6RBNt31YLP",
  "key27": "5B1VCj1zbF94nJJYy3MnCKGnaxEQf1wgUV6eyGX7dBdr4KxUU5nYG3L58XgjoUYMCAfTzDWt3ns15G2QYFjHzR6d",
  "key28": "5SPsHm4SwFSD3ftnpfzNNQNckzWnfpekJ6DrMsreW1yEJKN54bQm7bDAv79SZNE4KRb5pRb77Y6533dqqo3yWg5R",
  "key29": "4YNkAgNBPMhpLQPa39gRUkW8suVz7rFMVwyAEzsPpoA4gZTuaiq6y4AdyKXnLHRs2iTYymaKcsFDM58cY2TvGc9R",
  "key30": "2tC3WDeeQP54mEzG39AfkvBVx7PzjafWXU1AbeTAQ1DudTRJwmFQWFKksU9SWb13owppvo4bKCmTGwRcoLqnbiB5",
  "key31": "2f9HAvCU7nNB2kxFGBj1aPe2s87C8X7R2aXJaxEGjfY6A1wXb1aRihZmvK2ovL3D39zod5fGhj7bZed4HUujJ4td",
  "key32": "2iuKh5QQhwcjeMu9JNjJwp7wFNPC4QqMjV1BaahhYL7n14Z2hi1JKYp2Hvmaj8xBA8Egpak9RviwLfSfWLN1rb8D",
  "key33": "aJoNfnKfGSqiuhyAncyGpyLFiJFpqeeqej5QJszxQvhMQ5qC2FYzHsf24V44ET97URZyfFcbErUj5L8HfAfJs68",
  "key34": "2Vuvhv7tjGMrYBzJRh7oBsnAWNeJoo9GB4eAfpbBX95KkG6FFshXimJ374DyKVFDurZJyxz8VzWz3VLMfTG19aPd",
  "key35": "4juEQMrDUTC1P24nnajG1Ywg1y9DJ7sndishRiLvRve8Fr5tLn2p3AvH3gqYFfkcBz8bzYFQnxrdsk1j3CzK2WDB",
  "key36": "4nLKREqHy288fXt4bjNsTFGsTLGyxs4MhimtfZ7NZpDrK1nfTCTFaevwXHzhKtA2T2gk31UCZVA8ChA3LLdTs469",
  "key37": "TM7tfEczFGReacTM8trsF6vHAUX3MBu2HfK8BHR5zrMHBSNyJRymMEfEPkVprDPdBw4xuBd7Z8FpCVmjhjMpjjF",
  "key38": "2HRgTovdCvXji2kstrMatCbWQxENsPEuDXf4SpM1nNYxMoee1j5dAuQUA5giK5DePuL9wyBhfVMJike4pdwBfHaC",
  "key39": "3ZszaZv1pYeBdieV8PazgDCdXvePWjdm7v3ru9WURFr2cf38Mts9tgwefpKMpfnSnHHQpfSxy2ZbyE1kCTzQtQ3g",
  "key40": "YJaXSWVSCoesL1SZiJ6b7YHtaju41eNiiUFVEt5TeeBTEhTz946cXBuzJNk8BtqdRMQJ6D8vpQUqVKvbqD9J3zS",
  "key41": "5bQFwvBDfHvfFqj69qimUBgKRKaRpx5tFByDfkagH4nr4a1CD9GwgrVbYKDvPd8epEPqkzN1K1uftYnV8DVbpbPh",
  "key42": "44zkYyTsaqUsec8YcihRfA8N2781fmxwpC3mPqBJW2YETkKmDk6oED91AhofryPowWVqh9VxFn3p6nkzcmH63Q75",
  "key43": "3MosfpQZdxA2xactN8Sj1BBAKFPQR3hRbvTyaE6RycQKA8FfGjbTfX8Uok9CxaHGk372dK1RtCY1NPcE3aeXwhkG",
  "key44": "s8JTM1GT6YXyVy3bDLMHrwxsqQaPcEe1fMZBxL4aSfstZ62UEDTUn92HQgspr2NkHsfoDAHtGxH9F7wgnCLc1Vp",
  "key45": "2d7VpZLp74DV9SRFX3e5QQ4Y9nQ6AZaNvvD3X9sG2JwLFfhLEwwwGmW7fGVVpaTLF9WEZUaW7pz7QdYVEvxPfBiC",
  "key46": "Aai8RKv4TfmryEga7jV3istzB7UoFxBJh7F8fE4wYqBgNRv5mmFdFZnoFQHoA4Dr7XfAcrw7pQaXgZVUJvP6eF2",
  "key47": "5bzTfPR1LYFsN4wHxvb2MzMr8EnrMMbCLb2i88nrsLQ2FB7NzrWK8nNa2SU5irjg9h3DsWfn2WmSoLK4csBKx3aU",
  "key48": "3R8rxUZroWZa5ReBQLqbMrpbaKXqSpUsoboN413k1kH7ZDt1H2a4XzsmDpdPhkzqjVuXrdWnzgV1azPdeo363hBt",
  "key49": "2k2ybo5CJc9cDaEbor5VvfSbYzaNLjAhtFQYeZwoZMmadcuZD5FkgwUaBK52FcMv6QdC6BwqGjnZ5sP9GQ3LMuKU"
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
