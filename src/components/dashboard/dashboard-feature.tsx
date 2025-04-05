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
    "5hsxH2NkoDneg94o8PgoZr1ezoni3sxxR6mYZzLr2supgYsEgeVmsBKrmukiwj5idXeGQhFSjr4KoMY3wyKXtzyL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sWhwt6Kgy25XTvnJjGXfqkFZnGHrQeTW93n2ZiWVfiSfqNCkAw7LuyeyEskbwQj9UJqe6JwtvZaqqDgXYBGYcti",
  "key1": "4t8pCmqUrg6uECbC3PNNRcTPQiENffyAJnbHAJAofB1ERvhnHYW5YZHcQBhiVL9Tz4dM2QCrcyp3LCkE4k3qdURD",
  "key2": "2sFnbwFiwp4nF9qPfN94CDt5UvZrYkZh2wpddCQvbyoRcRzrDvkPsi9chbWEsxGP4jcpdJCh8UvDeSg6vPPyjpoQ",
  "key3": "2bKvYzVfp3scYJibdtZY781JhVisc5zUxZ291yHXXw98Dy3FMiUEGTdeeyLoMt8QJgqpaB6ND5bdVjZNgDGweD97",
  "key4": "qSPzzmwGVHPhMsmXkvSq7Nk3mcMtA8ToLb2NgeVtiveeNi19KJhpXamUaiXsNMEEz9XqPtunPeZGHnnhPzv2vfL",
  "key5": "5yT6QkPou7GTBWoZCsVNdmtUKMFGVrwrh2fqZEd9XF7cQwQpxi51UZXcJn2i48NEVMhm6552vCBbJWR5gMqLPuiR",
  "key6": "5TbCMWfFbFyqZ98sv2HKHwbnaZ43xi1kVo4UGzqPX433zVQNrfkHq3p8DPVvRkqnCyKiYKvoJJpdHUzeNuqG99fQ",
  "key7": "27LNobUQA6swF8oy6kE1JhJ1UrixBY3XFdhtaoJmwfSMQsqUpkoYjLQzXSfMMHjEH55S6cUDY3YuG4Kb6gSVScbp",
  "key8": "25xmfaTDx4BvUJD9LX3XsubdRpexaGt3CpeqYmcUUAp9c7LndDjP5iukbg2VfbJbsEnfDj4tg7oZEu6qM6pFxiUw",
  "key9": "24X4mR8YwS9wiBsjJWUZ6upP18fdZYiNuB9eaxg1KGX9N8sv3wtQ5XFvxSvLBH3oeVLWWF3YNSnCnedZemhhBm4L",
  "key10": "2q1xN74cd16wWJB9xEz9bmcxkgQhGPLG86AGS21zd4XkF7C6qdEpks4WpeVCkjV6iG9djHiFpRYEMSoeJfK3FShQ",
  "key11": "63BndSRugZTgwmZ7mnTumjhW7hs4z56UJMmGgEEVtcHJSJLg5V6LpFJS73HcrEotyv3ja1vXECAohJPyyo2jTArp",
  "key12": "4Uagjn134Y5uD4m5iZC72766KcBHMz3bgbqFu1zyxv9qNcKrCosdRuk8JpCSac7B8eBFBZoeX3ahPDuTvyykDG9X",
  "key13": "3sjP7hP1me6W5BVLdNHk4m4vh3jkTRX1pFxnRib1tsnqmYnuNruevapMmExpajD3umX93wzysSvFT1A6DFc6HK5E",
  "key14": "3FzTcPsKgfozsHpRTqwwvqoN7G66tUeo922z4pF2FMbiVVpkMFvmB4AhP9DujHS4HQmj3U8L2eGC79ZqXyCiVRAt",
  "key15": "4xuX18wq5nJCuS9dZNddZVh6KWNLgkjWyu2zQKFuNTjvwNamiDXGC41utJxDb8GQ6ZWoatgBwhTccpSESkKwHTJz",
  "key16": "5F3KWrixuzajSjjkz1RvKgukryZ6B7tmXe7EgqZAScCAUWvjBKBPsekmjMrHVXh9toVaMEwr3EEsPoGpQNZvJCKT",
  "key17": "4JS76KqAvhSoWhpZtPEq18T2n8Nxgv6cMCxYQcA365Ao2JrQ8V1E5NpCXVg937wCWTaEBRxt41qDYpn73yM2suus",
  "key18": "5ABazx8QVBJroCKHfQRAG2nTFhoaiShhE3wYka8ErGeyYY4rire44BWaDTWUAi8gFxMqWocq3P7SEJ4Z4Qeo57ZG",
  "key19": "3g6Fm7oCjNQmZZjwN5kUoTbrt54VQnonFfRyzHF6FQJFu6qJHvTRAAuRsLbX6DG6KBRKxpc2ubyaPRJd8VLUyJgq",
  "key20": "XhH6YWzTtSYXc4vPxvbQXsEtWTTDQbkbrcaVedvxjjqs3WPcN1qAUQZ9jWKyJYjK2nCTEMw1xkTsqsBFfQ2XFkx",
  "key21": "5T8JUL1eHYQoH77eeDm6NYMCMAfB8eyp4eaRDZbiagVp2RF1kovkHq6vSLPC9LjTG4awFjTf35aMR2B5ugyH1fif",
  "key22": "4gpgdgsQE7Xhq8NtptvLBxbFdZS5DDcCs7Fh6Srk1ohuiGb3g3oX262HizkVd7n9dbnM3WqT36ous6Z6zhnCRckQ",
  "key23": "5cZCizJA25ELsBQmUTFbtudRqNY31FjgzCfG2f5yq6yDRdXJMFvP1P9v1mJJhU7uzDPfkkZ5iSroW5kXYqyQDxmh",
  "key24": "5xE7efcWfRGMqy3rFzpJDMXeM3ofH4sHiS3ff5MWvakt5n74fmjQLLb2tgJHSRowDbNqMRtrKgHtXLepfQdQhdL3",
  "key25": "5dQCzngy8y8JvAdYEB34a2Ma2gM4fV7RFdtXuxzsvDFeigCKqnNbuGkGannn4BbgtkRH66of5cmZ6N9s6j8MuUWM",
  "key26": "rkmNA42GqFxXdCWb5JWRp49CoUBUn6X17oweoMFNYndjNxM312yvmpYUWKR2SBpCcJ57Jejt4Avw6oY5UQnFYFE",
  "key27": "2TDoTPDKXZrcYRKY5PSZ5N9QQn3kL91G2FT9SBC4pykUC1MtknhBBEgUWGS4TfobS6vfCmf7EvAnizBvTGFYZLCG",
  "key28": "4RRyeXTYwBeUCcCqwViF4cnZ31tPHrFhz4JkWrGGmS7fuqidU6Yry2G5QPiyBT3x7LGLAXiWghXefk7ijyGSHt2V",
  "key29": "4EE3EmGnF19n3BHCcFycsahcQEUkCLC2WGkGCVEoYeRyRVzuavEMu1SomSX8hLKUC5REHqpHi648212ddTsRRY4R",
  "key30": "mxTHe2RyDjwyRamfytGbyqJxq4yQFh8n18byECZjKjzHpSRQ9bKi5EqzZqjxxh7xwVwvFaPU3mWWU2qLApkQtC8",
  "key31": "41NPjeyQ8U8LBahYFa3absBhWnWVcerHQJrWMyeLEdxeWC5vgPpG5RoskZsqiMQijUi4iSPrGH2dSMmmx2koTxzH",
  "key32": "3a4ZaWra73BTc3f3BGW1JVshsaKo3aZSjoFUhWJnqEPnzLS4msnVEENxMoPctpyahMT8XuhC2sShRk8cfQHEMZy9",
  "key33": "Kqbk5RSy1TYMca47wNcoqU4NKEKbz721o2tgEz5S5YbumrAvkLwvppJCiJvwdDdPTeT8hv2Z9i69WAurfS5dVK5",
  "key34": "64vBhLqvfCN3Yh2NXWUkEQXaLUiETSM5iQ1VJ4bzPsyspx4Aurz3NBJwoTL29WRGzi9GecVFH81HEoBnpHXRUHMQ",
  "key35": "4j4wLkNyVeARcn1i9Bi75QF7wujMxrr2UjKyZN5NwLKwhuy4YEjS9UaNfTQYxQm4LSek7C3gHH9pV9xoepBqK2KS",
  "key36": "22crdfPo1QPKWABjHQsDKN9ytMc5gpReKc8KTdyLvAqUpezrf2uB7vz7FLtopNGABa4H1UsE4xNsNKL11xt9Lsra"
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
