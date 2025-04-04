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
    "4SPuhV4kX9LpQx79yQQuDXVm3A8dLfK5ZoomF2QBCuD4y1nVr2EkLM8U4AKhLJdpgbZ9mQ6EDHHvtN2qTeevRPUP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5e46KdJV1fojGeJRd1XfVnXXiRxRWpXDZfTGPe2YvDDsEH2nZ4QVb7n5XhNzcH9KEBLVJXHnFbbEm3DkzxtmHGSf",
  "key1": "2G1VRXGyW1fNYxZHASWY1td5LFqAVLkiwMaL7A4HD1RXJY9EWnN3FtdmSBMWtBVLrZvKRVcTVXcNcggheMysX5qU",
  "key2": "5ZCLnBDzspT5UnDBPnQPbqj1uBkd1cLXwrHzzJZWefVhG4hNw3EFFiduFafd9CvRgdVUNq9F2dusp7p9SRCdXEZ6",
  "key3": "3rAWKn7Kiq1KDwytFTbANwQ5egeRe2NGwZLy4NJVPAfv3cCd5VSQd5Rh3dgKpqDh8YVSrwA8JKMZ6TBkodn2TUhS",
  "key4": "4t7LUKMNUAabKNpLvNY7cKshBzHLeXamtBQQGo8PuZZH9t1KzrxbJJwmkAv2NFvvo82s1vHxc8e9ttq2DdiDiwWt",
  "key5": "feJjkBavLbiigbkaga4qNRHxw6suWfbfVwe3jJgtpPGyR1oRJGuLUQbjzRGa99Tyz4pMXi4a4YrDe6QhwHwyCLg",
  "key6": "2jZs211YJFsxSs4UehJCo2HHLHK2cDe3xmt1puNNqiE6TZz5BjqEtULs6b5eCMKYfsuTNucvRysbNJJp16cMbRoK",
  "key7": "2Dn23kEXJ9Kj6Z5d3rCodg1NVLN5khUGBaS8ffiBXypAksyrAGYpxzLuPizy7R7w4jJPgahwnLWHcRaxkLPS2cNW",
  "key8": "21WWVBk3S97QDb4ypGnSm9dwsALRgBAi4EJ3VhZgtNV5sww31HkSpQCNdYs52GHnSBKUqpfqQ2tUiHtCZiji7PiJ",
  "key9": "3wKLF6dSeouJwghQD2VYXs5LtsfDnv8ZRuj7WdfUbYnwg6hje7VeMnUDUArxh3ZoiiCiB5oXxPPePBScwHTHGkVs",
  "key10": "2osmsUUHXsJxBNG4fDkm6SCoMp1TwRNjJMHrbuzgLec9WgqeeWdv57EktLrrzzZRZWviFwrUMQKy3HUwKW1UxQnY",
  "key11": "39TTBFtbCVVFBiyYZjpKTSPAbMfVd6gsR8LAAbpsVpAcWcrh54MScS8yuho7HqbneXeE3ZYuPC1q2MTgYtWpWSSX",
  "key12": "tyN6BAgfVoyzM4sLyHNygGsVnHBt4mbG6jLhXpJ73MwEyDyGrVSLcrqvVHj97D7TrUUi3MSybeB3qYRZWzAyLr7",
  "key13": "6f9tURb6Qawh5LcvhqEVSpyQabhf755EKxBPKcLdu8d8pxRF1cLPuSGFDxZ3tfZSb177WHo8RxsY4jSnxAvByaX",
  "key14": "4qjFGuQYMw4DpkgL4QZwJmre8ibWxXa8Gp2e7quT87NEJsjDmeAeA1pvhjpRw1SVn7SMWhYJ3pnoARLhr4tb6C3k",
  "key15": "25RfRr52JN1nv8F8hqhT5azPPdUEP3QvLdfNC9jS7YPtueLQ2YcJTnKjydNnoXTYvJRaqM46g4PodRhTQQioPb3W",
  "key16": "5cyorrPpHXuUicC3XfFzYRy8TymPUBhnSGN36QrNmWu5Jtssbbvc2W1YeTAJHtP2xuzrqmJTh5xwqUvXXbVXPyiP",
  "key17": "5h3NWiSAtx6aTSCMU2SNaN1tkgV4cNkT4UMwGsTL6yzh2pe9rebc6vDhN1vxBTpcdoSN8cTd1ijoGyB4K3jvAW9o",
  "key18": "4ycwBRxCAChfmTrctoBaK71ZKSEWcdFAgwuv1YSoPGDJ3t5G8yLU53M9fLgAJsnGd6SqfjEJe2CK1XWb4hRGkpZ5",
  "key19": "58vbR5891vksHXzNfCV9zCbmzRGhNNX8ABMHYKf8sgWXH1getrCxNwCMSMsWXHR2pHwXamDscBYz9aB8EW3RE8aQ",
  "key20": "64ArZKdTdErkybi1JpF1TXuTJNUSYXnBiSYkRLv2amzQwhyasVEubdDsSvAvCsugysZWLCzoAazz8BZyveRv8EE9",
  "key21": "2jeBT4jzUQD2jdgXH7k1g7sFkadN6692X1u8WHdDWF9tdF8C7x5tn4zJNEBf4kTMVLDk3dnGvEbArVsrZYYMJft8",
  "key22": "5M6dT4p4CQeCw62Gu8ADP4dEuiarqB8p62y89q5CGGDLQH1G6eKAAPkqB2QLqgBBySPg2BTeYMmroxnR8cUMyaAq",
  "key23": "5zaBYmsyjae4EQDLeBJTM1UCQVHmpP7irth3tSwHWnbnLvasVTsV1awi8NTyuPZWdu9tQAhyXmtESww7MgbwMCho",
  "key24": "3C9htPLDWtJueyNejSwN1YV4zfatCcH5Ls9PdYz6STNK4bjZGfKw29ZHnhmoyAWRAfDi5hT3UaYrvqZh9a1YwrBS",
  "key25": "2LHrFWvuW8t5ogRtHie7gTWiSrGpsTK7VcVXbNec3sSFnukJ21go8Pm7reEtNYL44YFEk5LYCUt34hucoAVh2Emc",
  "key26": "2uyNxGvik4cD93bEVxc4VgssFGCLeggXViYQrJHoaf2cUpPaq2J2Ld4DWz4kRoorR4oYv9Dz9VNFJ1vx8LdZxeD6",
  "key27": "kb8Q1BqsqVRVkXjUQRy3UuV2kD8maQb6vCVouAGrKEA96LYqaQHZvTK97f8xA24LjARiUr28puGbKUXxeKAosEA",
  "key28": "2rjNuhh1wK7s21FB5NFTWJbpspw7fsJ7MaCByqCw24GZ3exCSPkgg1E9ZbQ6EVSnxvm2A8Q6Bi42Xd4JTRiMoqWX",
  "key29": "8YDGCM8L2HD9hAzfJNrgkLjYX5u2y75eQmBymcvTFmY3W5LZLZuL5msLnDdycnf2ceU2hi2h2uEFMSNkzznCa6Z",
  "key30": "5KefBvzpUqP4A7MorVRzMVEoq1sgvbPCeqe8DutYfW2k1eWXuVriBKFiUsHRjfWTUNhQUMHo9xjqbJSbca4xGSWh",
  "key31": "5wX6A359G9Ju9cu58LM1TTzCzKz5RrQX52gtyFcSD3p5QBtfUuKy4QXYM6pUtFJzN4pdrYz79utcnTosip9AzHLs",
  "key32": "3djDFj9mZjcErFMTgP66RNZokGcyGRw4KMpvZH3CV6qUnCcfLNf946387cnR6swVH5xANGhZs5HKPyN7jindbPJx",
  "key33": "3kMMxY38AaF3YKEh6ckFSEpzb5cpBDNLrGwNA76bECKDsNauiUhhqMthXxw6L2TaNFKRMCDL5AevzP1hHHNuu3uZ",
  "key34": "4qnEZxsTha2emevZYGk2UCZtReNJSofYsnj6JwAHWVbUXCNMv28Wxvp2dQSTYCV3YdqXZhySsBMSW3WoD3kK4Zvf",
  "key35": "2h6XEjF6gEfZdCjdVhfhNBG9ypmH636gDboAPCw9LEANZuVLNXyVvxymo51sW9B28Z6HYGD7Frn6LswbRkoZn4Zh",
  "key36": "55UWei7zisBzz8xvhwAMYf9pzNLe7CpywtekMow9Ei3tmWuTkzeBKXg4QizLCrRAL1rrhsrKBUMb5dfAih224uXU",
  "key37": "3xGCLkaZrSR8qgFDTnixaWXBp29CZ5w2NxANCGKfphxyG3utDAaNsnB6UeoPT9NiQnQVYcEaTgmAgj7T3v4mahTE",
  "key38": "zVV2AQgy4t6GDT6pGYYCpXJu6UETjsetv3KAfBBnDg2ZuDr7U3KY8kpM2LASL1dZQJxqdzYiuaiVx9wboGxzPoq",
  "key39": "jh2uSZdgDG1kvCjHXvvFVqttYLsDDJeJZQvgVm4mcecZgpTx9FzC5xJXbT9gUihezMLLj9PUK4yXcaGMCLXXWmU",
  "key40": "4w3rW81yR8JR6Qyehe1ukkhhAiqtRF6wmr5u434xy7mxspLa9HuC8zj4Sy8vbN4ZNP3mZBTM7NXhHhGGUc2weGFj",
  "key41": "2Ekh5rUomNTYXZrXTMioP1DWVLe4T9iA1z4rAsS75sHhR5cyC74bWFiYQygiYxtLhGgBJCSfuPnpLpJciVvgTCzn",
  "key42": "3SZ1uWkKkS3CbkGPU4oy7M6cVVo8w7TsdaQ5wGN5iyHY4CokRuhjhRh5MatCUKNkMgf3rU9p3tNBH7LcDiHknfea",
  "key43": "66ooKEMerXnHv7DmdBaDTCssSxe14bw1tiseE9ySnqeB8oNj3pbyAWg5osf4zdbbWDwbXuMUmQkkgsvfi9T8c7g9"
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
