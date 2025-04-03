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
    "5g9niwJjzPHFxC39bS7WMyoLKCrBuTbzmiefaTS8h1iXJaCqRZzKYg2cqanMYdhWecrZJ9sRJP6oQ8pZGhPHhTMi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xkYXZhd4zJZebWM6L6YYFd8rvgbcDVV2Qrh6U52EbPhmJL3C7yofB7PewogkACpqZteBXovqY4UibWc58hfRuMk",
  "key1": "yZ2ho9GS4QX8rzmfyB2oEBxwyiJ1T74gRye4bqzDuQH6qDFvgJYzAsqAttJ4q6Jyr1rZFjxntpmmyVz9f9mGyTn",
  "key2": "2FcXUsKZSaexsw2E2pxtZ7Gc8tjDUXY2FC86pzQaq5zAdeoxwa7FX1spZcTfGP1GMbEJdBGvdRVqJZB4Y3Lk5obw",
  "key3": "54WwfrQmGkPnLc4uAwLgE558kABVr5xyb4LbkPLwEEpEbNdQjHGNJ4SVJL4kvdUEySYQJabf63WkgVMj4fk9aD6D",
  "key4": "3Nk1pvjyzQs1WoAEejVKKeNXnLGKRqT5QwLmaRDxhpRffSdxkAZkJUzHJvVF4FVMRTjAc665YWs9DJ9g4L72izDe",
  "key5": "Z5LhJgy7Uop8UTLciYBFTZf1E7w9W77mh4PKzKgwgMotptagtkix3Ru8gZbrAHJySJRj454Hm26EcPqGsWVnBVJ",
  "key6": "67enSi4eKmciwMLPY1wwhF6jun9HGjeSAMMvbxYXwxLWSiAxcoqBYwk13SKQhd1jYbw5UCZjvgcCbQR3M4395C4W",
  "key7": "4LUDChKds8ac4BGDwsEZMUv2psbVTMaiLi8fWGuFV3GcyAWJRxJmtsj9RJZtEaWu7JaG6FvMFfUjBMWSCPqhtj23",
  "key8": "3HhHahW1XgB25WNpfec5zAzusjjbZVuyMyGDsN7UPc5VtAUx5GUD8goZti2rgESQnMwqDci5ksReqgPWkEF46L9T",
  "key9": "2ovWTABiS4NCPESNfhoCd6WuJ5PCfySSbmjNYcQHxT6fJzkp6wQSYyR56rFmZosM5GQoUuXUQ2Wf7HvCZKWcww5K",
  "key10": "5VvD3RoaDijT93j5vD4C3rEhZ9w91W1gZWYAKTGy4UBvh2cVyXpiBsHECrKk7SF8n1ThKrs7M217bs6o3MbswLvT",
  "key11": "3WpVfgvd3i68KYYZSW8UC96DZ1LVNW2xEobvHZLDCHRD6DS1LrzyhrqeGrojirnGd8m1kZ2KDij3DUmftmuKqJwr",
  "key12": "2shkY7QcmPBdiFyiGUD1bZHPs365QcrSgnezoiRkjzYW2zescZVZvw4vKLUUdUT5viyrSyXa9iQtjYKTG7axBsHc",
  "key13": "5FcBgy9fWc9dA5q2i7tG8dTf1TH29Faj95EaeDtq8KYQxf1YbXmLER8w58a4n6Z95UNaxc5hF3znbGfrPnjGQPJJ",
  "key14": "2bEsW76rToCi9ZdzSyhejxm7rggm2o74dnLAKbxn5ZzwPPWfgG4f4EtTpc97M9cjBv6Awi2zYxdmbiMWXjpyHP2n",
  "key15": "pa2yxvzw2EqoXfsxHSAaeoDukhyWXyZPxUHmLzZyZRa68TiPxAxapP2K9cpg3aFw56NPJNNHfzKrAc27ECs8zuM",
  "key16": "4T4avyoKdaoKiUqn6wvUbTQEUHA99TGRTB73fgjCaBsT3YJsA4rsc1bn4oDifKuzBxbzHWJABUQRg1188DwxEVeW",
  "key17": "fBhxKBLUhi7gh3rTu3jGWxMhgZXnF4ry8guo2a75C1mMmroRdF7KkH297wuhUpuWtz7rz2B7dPgZjgRaCKh3Pjy",
  "key18": "PAM1enVsKeb9dSDZQb2DvcA2W74hdvicDWWpqMKQYZXqqLcq64WZ99KV3dVBk45DYT2RqvCJe6T6TWNkbsrkxdg",
  "key19": "2QRRqXUjiEgrno81JoqYtLA2BCU8bbzgAksoUKFrYMwzcYdp7AuFiaDRyouDbqMvrWmjcasYcfoStSFmoq942uz4",
  "key20": "5DJkdXFUQ8S1ToKQ3L58mKB6VYTkygiNUDrMzjFWfmaj3YfsLyHidmSP3nD3Spren5Z6zfomaWrQp5NQkRQaz7x6",
  "key21": "2vS948hUMuaTwP5eU21jCyt2GC8pTFSbcXfxMDQPrPf72BeE2CPTxg9unMin2oyF1PCiwBLAVGVNT4oMotSRsMb1",
  "key22": "2nrZA6QPDY6SduSBgCv5b387qFyZPEEC22JAsPZLbhwhtCDP5FxjjyYWsgh2p29set6q56N2yBGbZs4uW3veoQUk",
  "key23": "3j6K2TQaWPBJd2RBRb9x3861n2ZK7tkuwSKwLEgvtjqvrAdhJRp8oiZC7Zf44TbcwnhoKm2AofYzFqZhDTG6JkdV",
  "key24": "42KEi1KUut1Jc5AsGDMjseHcx4vR2g8p8uRfNuDib9gPKi5wYAeNvCmZMSVcLhxND8etskefLqp77LGfQBF8fHiC",
  "key25": "4YeRYCZ9eiJR3RK1WL3GoTJtUuxavzJ44DjvBroCrdhxSLjHpDG4C5WpRyYZprJ1h2tHJEstk5C3jjrEoXS8J6d5",
  "key26": "229cXJjSPnEhdp7rUytdogUjw7xBSpATQ6UgYWWhN1Z4v2rDUuvVwtPkAv1MMfNLWhVkSyCng6pPyd3hEG5oUfZS",
  "key27": "39rnQNRzQUBzQbqrtEDTJhppybBoGM4PKMDEjzBnzFKFyLQoY55Xbss3z9Xz16amu977wHRT11wNtyP9xbwXLqhZ",
  "key28": "5TD2RThKBAQjzgwYTLXeSs3p77AD2hN5sTVoCSosVmGv3V1TTU874ZVwUhNagABZrk6YeqD7f1yMkCmDjCrC1JDK",
  "key29": "51f2kaoPkyQ6N3ZtWC9USCsD2Dz6KbM7hJh4jnwLTUxE32TfKou9dVtRi8wtRQVn9xRbxuwXYZaUikCwGFEJyCEB",
  "key30": "DUxRDLnKwiZUUW95wzt9jM6JKJG8TtGwZR1jk9Qwo79LKUtDsAs4469uVwPhQzByv3zMibHUFBT64EpqAxnx5WB",
  "key31": "2QXPia3nvc87YTEokCMxEz62vNoYqkANHm2cvPr7VmRg6uKwrWktMyZief1ZVFFFHXC96fCy2kKgGDcNySGxkTou",
  "key32": "5SQvoLddcme6aah3dvsCf4vhCnu6E4tLBSWMyarpCNd62fWrNZxkCmyYdzmodoSuZzhfDuhvCxG5hUpzyiTJaoSd",
  "key33": "2WB4idBVTbDAwAkAfKeJaNM3h3bLRGr7XSnSx5aoRReDfQCtwdpcvyiFwZHUqoa3fembkkkhwrgt8jHxat9FeDKs",
  "key34": "3EGc3Y2KW9GYJ5i8N5RgPmdUGgoMGkYmsSpWhkg9zqPrq7wyikatkANRAzGHRaAL6ZpGevnfp2Pp4hixJ17GRypK",
  "key35": "4meA7UU1WEWfxXobDxQta6rf7e3Hwinu7ygEPkcLVwrodAZ36acJGNCDr26qjqvfnW3hmtucsHhBGi2gBgTz9cJk",
  "key36": "oaBdGTMBUrqebnb4KGKa7jwWh3ZXVjvpYbZNW1fP5RarXTWbSomi44ZZAPwD6iLW8Hqf6s3n4iY6TMYpG3caCtk",
  "key37": "3GwiWRiWQET3zojTSqX1HqLgB2wSTrJwwUmnoDH46nLU2TMmRv9sBbZDf5jvm7ABo2459TLqtkmzg4Sc88Mmn4Z4",
  "key38": "4B4nYgyGAkQAgGGKccpqEc9fe1fwh9jcsDdvJedFZibBVzqQFD5T1wMne8vxkw77VqnD3oA2649Ssj5GGCyq857f"
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
