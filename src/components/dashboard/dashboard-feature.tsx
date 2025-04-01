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
    "4JeTmY8Kmh4xrcmj6NxnjdviSPrcPzomnwnGtvLi5UVs5mPcPnKf7vfY9ELVnVf3PBdkcjDjHGcx4setvC5ZKWpY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3epR1sVCKqdBq7bmjShkX3163N9vpUgYwPH6HhUkxgWPRMrq7Jdk7wf8f8ukHs6AuBM4FCdwfqzMimny6f4XiCzd",
  "key1": "2rgnxpKf82p4udeFHQcV3LaxzqkDBWioBde4F9bnDGLsMJCqMbF2BwKUucKxi7H41V4m87XQ7omCGKMKtQEhGaSM",
  "key2": "2CAPp672cN11ay4nxkAtyrUhy5Zhw3uyhYQQkUcPWWqMzfBn2chkZ2DU5Uz3FHUqJRgDPG5uBJGXkQgp7gt2ne8A",
  "key3": "4CudRpRwyZbfPqw5gRcPfsSkkaXuimZdpsybzZg4X6KgSuTmHivUPLMq6Uk612obzfvf8tL6Y29sxNoojyMqdKg1",
  "key4": "6kre5Kfzxz8stStvQr2NuWrnB6mW8nxz3d3QSKFYRyiBiQLZN6363qSySJGTtDgT6fFnpjnt5yJqCmTsUb2CM8o",
  "key5": "35CYfXn8MV7aG8AqvPRPFzkpmnrbYNkvXPq6ej8H2exwNyYR16PGhNaTCZmMgr47rz1gSK5TyX6wXQkYS6rpoUzv",
  "key6": "4Epn5PYHyfRPzbob7mqpGob1fEWSvmh6UuXZyQ5ZCW9TEqXN6PEwU796xrT1R17hSkDRf34YLrDxbK8uP8LaPqLa",
  "key7": "4DY7f9hK6FBgJrxoBoXEXWvhvhd9iRhnYtbHVaFfjgbJFhRNs4eUv4tLuGAsEos1SM7kYY9MuFr1181xTTCgQ4kZ",
  "key8": "2ThEZXQwaaGiBtWUDymroPdYmkMeh53SR8Sjjuh6vCeP79TjXJWkbMZFxZqiZ4GKwz9p6dBdTBtPnHPxR826vQz6",
  "key9": "9H1N798caNh3JUob26MyFZGX28n4eyQ8sNEtDppzKWvb9c1w1A7uGufFW754UE6uQZSQ1KsQHhyey9CJXEMRMgX",
  "key10": "25hckuXj2oeaHN3gboMg98vJ2Wcms6aZQE2SjNhtfj5cgk8vvFUJyzuUo85jj9eELSZe6sy4txyHg768dnVZNCA9",
  "key11": "5xsUYwRvgUYZVs7staHz4qRL8HB3siBfykbdgUWhhy18i8eDbwWYp6vMpSFwnwGfQ3Faxte7Pdf7iFKdWBE2UPMK",
  "key12": "5sQRotDgpVyjnV6YmDwN5kLScm6bgYKm1ARfJ1DnaWCPVfQj6K7Li1hnjWuU77rcNitH2C3yvWVHvSKDZT25B5T6",
  "key13": "44SaUSDtr9ozJ36cxKv6pE7A93BvyEtdFf5dpjmTNjjjPouuCRVdWphNPvd8FHJeAWJeVtu3nxuXRUbZRedPTUkJ",
  "key14": "35Pzp2BQTGVchWPLjRQZhogHB5vfGHPYPXbS31VEhUST5thfdDAeX32HUCCrTNkvXMWkDuSxbiGx7df9WNLSF5C9",
  "key15": "4uSihJsGnSTkx8cREARxTXqvCdKLRpjBEUL9mgnzAS9h5nPhrjhXS3sGYKy9Vuf6s6o6bXEMzRjMCosK8xz9p9Bc",
  "key16": "2PXepJvX5jmnvpo7smui6mXPRgDHZUbpKCYn4Q4J2h4NApUMk7ysCkLX66swiv2H67PK4CPvREco52bpRxUZanJe",
  "key17": "3jtRSFae53J95DVYbHG6BUYWvqazLtoNWEWZgE4bV2bFrRgJJ4pKEkZbuhcVtmHNyX8Yn5eKGvYiFv2UivYSwgak",
  "key18": "2vQFCYjy83H5YmQWVQ8V6rxmXQAYywvEqmx8ekK88KAsnVRLpuk7VxCfU5dd9HbjtvT5g4TwEWwtw7d5EX7G8rh5",
  "key19": "X2DDmECCtr7RHRNUxYAcpHbfJCFHwPeWxAuto2C2JrxvpsrpxcWzJ2hHSWfQVBgyY9qif2hoKYM2qKim6RySg4Y",
  "key20": "BvzTMLhbcpudQiw3qAT7i8c2QjFJ7muwBnrbxmhnAVHusASdvD9cVeYwjhBE1QxRXTFnbCqe5UrniMeWGuRwmg3",
  "key21": "5Zkg86z4qsXwQKo21bhVtcp4cFNtr5otoUqqKKsLfZ8pifwKzx7kgE7qiXrDfC9Z2jQQfmUxQ3uDDJFYe5w642VP",
  "key22": "3DadjXJMNrwW2YQJXuq5LJ2BTmw2mD2p6Ki83UndieQHKPivZ6UL9EnuVC4JSjiQeS66yFBWJwDP153L4DGwckoU",
  "key23": "2TvZjVCT2PeGe4TNSwHQQ8rkzfyjV8rn7Dex1Zjc2XuMSrXi2UXTe9qxjzoAsMH6Yz8pQrnH91R6SnVqM9KYFg3p",
  "key24": "2ggTzHQZaQtSnG6PcTpJnD83hM6ijhgNYXTTjzSYdF2vLZRkKPmv9xmz4DcgALFRFFBTRCoNdMvatpcmseB2uKgi",
  "key25": "5wo7MNucRoTemWjNU9WwKjonbPasryNnYVuHBRHELwGbJXKstgu6YosmjbZNZwP6Us6a3EGDPpQJGxJCBxnqKmMq",
  "key26": "25RkNdbcLa9fnvRRbpXcrvD7sk15eSPjqbrpoJ4EfXnH9kY6WikKvvLdgkrgJsgz65kePv3hDAA6AAQtp7f1PGGV",
  "key27": "31jZ57PXjdw6SubFdDdVfB1a6m7jkXqeqRNRYv18JQ8EW5BeebGRswiiFAAMB62naPVXq6doF93KwvjwK9EbWY5H"
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
