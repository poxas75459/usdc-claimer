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
    "4h4VaCs2Ad3BxUapsrj7XCj2MNwHNjy4aDWQmeZsX5MQ2nZ3azo4n3xLYpdkdrsGokCdaBxzbJyLSeXcBpd3RjPz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XnEhwXG1PKqn437MGhxwuQvhiC3TfsPTmUNqMCQY722eEHzeVJ9yVYssYcBQPgSh5qsqcdXLyaBAiVr1euD4BBz",
  "key1": "2cU7FbUthTK3Y6RDdr275cn1GSqMYVCJpCr2LWLopqAZ1kh9BbxUoUmPA1jUmGBBWXCrdtMjGESrVHukvLzjbCz1",
  "key2": "5B1UshjhHkDHSkQPYgZ7AMVcHGmP1gQEjm4jLXoi4k28e697ozzWv82j4xfSw63xs8Zxkyc2B8JJUYgzdK5UAJ65",
  "key3": "5RVrq5xQAkoPyuCHbDtfW6UFPM8ryLUijfxoi5d6CYu82gM9tbwy7jrqaVD3o3kW88UVJ5WNJe7MQbuNxy4XampH",
  "key4": "5qLFqxCY9fVFh1F6mDMygfHBAH2fgX9W7ixzTp9Rvj5AzLgikgLr1xbt1diKgVriSixqWnrBCeajuCu4PGT3vaRk",
  "key5": "4NdWCBEsZujvn5yZ4G4nYdoiX3nyuMhZmsaBgN6tv3e52ixnn6huTDJvZcXKGe5yymzRCvgVmxhuR98AgRjWAW4L",
  "key6": "SCWLnkP9f9dCsv3zmqHD8ZWuUibRcpFv7fvh1iExX3sRA8BaD3SbFivsGA8P35GHP6fUyauLvqaBNQiL5NVAXwQ",
  "key7": "37KpeFYJ7K15tx1i3qNTQYDeRD3cXPXjL4e3SyRTQqzgKSDQb6LDzbEKwiFi353CrmomTyZRC6W9wfriFVUkeVxD",
  "key8": "5G9ceRQuxgGWNydEpsogTYJdTn11KveBzLYMk81GLF5Vz4teYohzXzXu8ZNfGwAttJkEKPbo3K1ggZDTQZzX8Ln6",
  "key9": "41XuCdhcx1QefJMCLYEkzmV2V1vSetHHgLEFPcaUb5jETGXrD9U2SV6rXomqhosm2zwTeDPRSnccWjRvDax6gFY8",
  "key10": "P8GFiUtMFy7Duem58FwYE2ScZzZdfiMdYoBqyQ4sRs1mjdkVLdASVqjreBHJp8mhnsEgHER3wejgNu45viZay4B",
  "key11": "2XADKY5KjFGAdftBATb6yADnWZbhX4S3ARCq3oaxbBYYsqEgcZWuqnq518iwnith4bBoDkpNnXqJ9VgzVoBzVFaK",
  "key12": "67DR2X9v8mWEdUG1s6nZVS3UHEk5xUiP5tzSxEPs5H1DmaRKrpkQv7jULSYwUrn18KoiSwjMTbzpPw9TGcEsn98a",
  "key13": "dHb5mkXzEG9QHCPqp3BrNikVeHU6oaKg5TsX8jqncjER38sHES383SX1WWAK1KJ9xobsKDibbsTMFP7VKXttK8t",
  "key14": "4D5KDPLiftY2JQiirEFucJRmSWQr84b7NWcJS9FBnnW1qMeBGZ6d9YyrPv5XZcXcAZDr72ED4Zypp5Gy97q79PQd",
  "key15": "45NeM2P9TREqZHw2cTrgJeyjfJnqo9MbCGgNkbgfA2yDvkH69TjwjwGmumPba2nVdBRXYhzspiX8rF1n9PBRnorh",
  "key16": "5NE5vvUjDYS8g3rqER4htfx6FCN8b2cQEjccyaMPcvQ7jcUyR8uMHtvUz9axKTV8XF8Ltt6uTF4214Neu4jy87FY",
  "key17": "4y4LsAZQ7Uw7sR56mr6aAFU1uhmuvPkMCgoTcSAHDMubewVCx26DQu3KoeVYcuf218QXBiGn5SNyrBrPsaX19z4h",
  "key18": "33faPhfwSMUtSttKo7dAnreP1PRvEbim1LcF32NxxP1fXnbUoQLkNFYHesxFRJPY9A3nZp6G7rVmMJafSREspwiv",
  "key19": "4GNztF3h4a4ZxuPGCJRNaWsMT5iRHtUKeqNRv84JECGXboxLDmB31gejskwPAZXgCsh8uvUypp7K7sPCbTTUF822",
  "key20": "4jxUD6YSPr2J1tjpacxsp1TDk6uzgJN4TKRmRppVNFoq2HVbXySZ5RyjDwW6xHGTHwmmLWJ3gL1tfcdUCb5WRHSQ",
  "key21": "2XKQ7AnL4ueSe4qJZQWkwGXKmAey3vueRgzbevzCzLYbBtUbzsJUhib2irH2VE4XD7RRnvTfsh9QSg98SBJfPdsj",
  "key22": "B1sFmhpGUgQVBMLrLLmw7waxQdwhjiM2KC33nkMt19pHVQYBXHM2d65JjLUgn2MKiM45tqq18BhhLxC1Tz1BQwV",
  "key23": "5RAWARfHBYnHZ9q8rtgsQsDUSZYe4RQXNu7Zc1FsEERmukwKq3pfKZ3xd2uK4ZsTC4tbyerK68SEGbDac6SXqEo",
  "key24": "2qqd5XBgZXNpv5MQZtybSKLgC7an55zrr98fi2ZLScTtYvSjPFr3pa5tHZQTC3iuuerAdh8CUsdmBu2x9iaVBmUN",
  "key25": "2anutEfA1QeH4qrzTXhRThsjf1x8tveYhyZ3ZxmcwJYTjsbvDptS7c2Ht4nTjCyj813LTq6KQMzbo5XeBNS1fQKW",
  "key26": "5nz9adXZvidgtaUoKNXY61PUTARkupNTkC3dF1MmFQJVgoBv9mGp5sbqKtG4cs2HVoG2yhsYxoGdx7ZHwYJppJ7a",
  "key27": "3NTH1Zr5Kh9sySmMYYmnTTCJWHZejPaXdJvvbB5kuViPMmWp6DV96En8di1cQYhmLBzmAwQ96LYtURp65N1jsy5G",
  "key28": "s6nF6sKVEe6wKgpcWYWdhEqTYkHZBQ7Vsrbcy5jeBHZ7qZ5hBoH5iugBxuja7c2qY9WRfmAPTxSqmmyCf7as3aH",
  "key29": "WsCRAuRzL3mB4CkARWEqEz8EqZPLAzLA3wPCbDTXryw1wJ32HUJGsk2rJ5rHZT8s9MeyrRo7S7RRnuuuKTCuufg",
  "key30": "5kFWR8mDWswtBfuqBJ69QgJynVVfLJBN1HxR2RXnYHQoQcoSxmE5jptU6gRWUKhtKeB6FEbYwKaR9Fv35Um9L3vP",
  "key31": "4HPBrdsof56kz79bCv7dvBKscwhde2yrYDmYJzsfL4zkDzs6qVynzQNAtW62qQdGnacLPWsoHLBGd43iKEj5efFf",
  "key32": "unFEBR8NovMG721ByR2XjrBExJ8vQgiydPr1jucLhBDgi3Dg5PQEipsk1Rc8FkJqv7auQYAoDmoTNq9N8s9BueF",
  "key33": "BbVr9M3kQmiE2sDDfkVEQwk78rGwV3FRkzF7LhrU6oxPQzy9wtP6mzCY9ZtDvMrwEmgZEetxVP3t4RPYnMyesUw",
  "key34": "4wKr3hQeaaxKUX7Z4LiuAGVhpU3oTZfte6Qc9Muw76sd33w8MgA3i6WqhsAwntTFo6A1gGWbQdkuWdjMY9hJAENu",
  "key35": "2it4EiXkUFz4LL66ipDKd1j7arAi78UwhrHbP3A6r3xc73wYjbGiZckHyA3sztoqM9iEQda5qS39Db8aDHCPoHDg",
  "key36": "3iyh8ccAXkXYNqSHgLZFe8RMW1yPgcEfby9Y1EtXNDC8Lq2tnijCYHZLXMDJcK2MKJiX33DUPGdrBfy5n4QkuDdN",
  "key37": "4HHh1KJyzPAnvB4s3rPV4UVgNic6y3BYT6AwWnXthZCuWzAebyrfBdEoXsEsXnPRpgAGDUy76RSDMarnonm9oFro",
  "key38": "7cGsKf5MCX77deoDg8WQSpbGNjaxLk54TWJQeMXzqJuaC3QGWNfiYy6oUeLRdFiYMD95qC3e1KRmzdbhtNUWEHX",
  "key39": "2sd96MJFvjKSAajinVxzXMgBCLeuhnsrpuJtSEg1YrYDACkpu3svEFUgJHAf4rnw9gqkxWyfnbSmTtEjWfU5S2Q",
  "key40": "4zcAG8xNtLrWL4k1qwB4WrgU1G7MrbV2NZERr2uGGsNdR1mXJkC5qFJXPd5p5XDHxXgQewYF8Vu3HkQyEuG6WEhh",
  "key41": "2w6jmgPx1KUJYU5aeV2GZdRjMxfiMiS9oxYJaH9VfTZ43sDvVq2cxMVxke1fnLnFCnU5xXxnt453CWE5EyLNuZD1"
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
