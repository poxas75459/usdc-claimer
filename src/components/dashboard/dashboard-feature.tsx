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
    "PeDFhehpHQ8D89VnRzxdeEJBNb7JnFESkA2TMEVLZYM3n6YFXkeVkjmjg6GUEQZPMeEefogUhN8zBz66KvnpwuF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DvrrWbECB6E2GRhyH7PfK4DWRFjhMhXVfL75DhEc2pSCo3dd1DQmymkbmDJSfWmWPPLZcL12hxmwHV3zdq8LJn6",
  "key1": "4ng89RRzGQxpEBXH6ppos5WZK2UuYtP6KWzuMjd6K6HYH6tDpiUoYvYEB6JttLk4N4bFAhzSh8znhfccdPUusNaC",
  "key2": "mgnyXGPzgmzxJMzmg42XNFNVDoYtw6kXNuouub8jrQoDebSMXVT6zcVGC2sy8U1B5aBvADd91W39FM8CLoF3to9",
  "key3": "xvYxcmqtncKuTDyEfV953Fvw2sbgY57rWagcGR5PHB6mHzn5THxDzDBeSGRujVY8CaybNrzhmRFa1dmzurYy8eN",
  "key4": "61U1axQBjA7Lr4DoL4zndD44eHavz9WtZcvdujDx2a75D2nMMetFrZnyUtgdNgJHXYffz53z7t5RhNKxDa7ftLGq",
  "key5": "5RSoiXMhKj75q7Mxb4tGj8MMS51Z5uhJJhDDxhKy1CokSTnnwaz8mDwXFoYgjYXJ3WSSQNvMEvA25ZDpwhio8Dxz",
  "key6": "3aXZreAnmC5PcnEHaysriXj1bWkpExm7Qq6p8Zf444XA1sSarH8oyYQcoHK7qQrhCHN1Ey5NYy9Xc1hT4rXJWybQ",
  "key7": "21DDGttBeoDNdSreJSWAFLghjLwj5ntcQ9iZ3GuqC225MkmkJfBoKhwJ4J1BHTeJdNb99ccbt8v4VTEFzDJJT3BZ",
  "key8": "4XEHAvfVL4jwdg8zmBFw6DNg9DLe4MFFYkovwRGq5Qx75tXeZeWfDMrXi19drHMLAwAkLGgHNbExpeJWH3Up7woA",
  "key9": "2diKP6Lp3Eszz1kwd4yojU2cCvR6y4FxcjdrTVXEyWosbb4oeiLedNFvA8miQd1HuVLvc6NBTfmQE9h3EpgdNPMP",
  "key10": "47hcu9ZVnmk7EFZSRfSuvDoJGyRuEaqePwkvC4LKDLReYs7kSHGZCR3168jWHbXRpkhJpdmkLEwnKChWVgK2H6Cb",
  "key11": "5Duh4h1znGtCpQ5ajenUbpJ49PYUrTkdb8WsXHzqMeNkrMbtMRsV4NGSMc1gmXWQjXhfzUY9JjESqKrYp6GyoQcq",
  "key12": "2KeKSo5nVVAhE8EUWMzoe16yYC6cPMbczgo9Ss3NgRzZZY76aTs8gFVGFv5yArr5XYh4xhUxN9yL2kYQq2nmapge",
  "key13": "5KPsSR4sUGsGjTmfNQAitrU8xtUJE4VBZnh69mrSYfPxAUsDy5Z8TWQizc3GZCd4a7qtL1LpyJoYi3eBDdCH2Gn1",
  "key14": "499XzxwYAwKRBnsTNWQH9XTbYdU3LJpzRk7ZsgRKobCapGJrMoKWCJ2uCqH7RkT4V7vuDfCaAS9Ld9AKxLea3ACP",
  "key15": "4htSZaoYcdLShYPkQBe5s7NQeDbr1Mk4oENoYGJfWc7DfQjG9NMUkhMFWiZjvgnDS1Ukk4hRAKx5WV6x3PNNEhBc",
  "key16": "4zmtrttxQqLj292AAtLSQJG2eDHdDWR98dvFxiBPx9o8eXp95w5NMii3f25wvhddCCDw912Xts2gmL8ETQubFHn7",
  "key17": "3iXdifBMPkGaPshMPizCMmKRAtKRZBfsHq9vR9U24kKHdspmFsqHFp72FttQTW9nvMwqND6nSsNVac4spAeHgKkc",
  "key18": "3vBVvVc5SS9bvs4arZWnV3b1TSFkzdYiKx3CyZfhzHJJi8sUBa4eT5zgHv3CJo8XxpSLYDE1YBs59MTeBjuBrnyf",
  "key19": "64tUFoaPMAE4EF4wR8usfGuyLJzm9epiAJmauUKkUqamPfU5vjxLzYk7swC5sUuyF7DApxw1HfPXcLP7fxRcX6iA",
  "key20": "3aywX8VCqUWVPksqm2pTn1bXUTkmmFbvURRmThFkdamNAVQTHu29UJ5tJ7SCWwQ92X5QSf3HdEL9mkJGZYxdxwu2",
  "key21": "5T3iyKDcdLz8RifkUqPT89RvAVaGVy8YCXbd6VLYLN2Ej1aNsqRp36QhauRCmz9aSWfD8cxh2sVTfV7SPximZaR1",
  "key22": "3Gjctgza5LtNvRbbrYiUMUHMZzwPUP5qcfx3qJTn6hXAYqP84EAEUP8BPDjmR2LQSd634DuSYbE9PPWNr58XPfRi",
  "key23": "53X4ftYwBMx6YPQCc5T6VXTrdtHFwwwZf7bq7km2zbdXVLwHhTqfyrzpnHB8J7JHGq1W7a1o6ZTUAVR81jG9VUHD",
  "key24": "2SVDx8xLda2izxcrWRfZfAY3t3TdPfTYcY1YFv3VdAsesC8imG31zSPoHNy22xNXtr1fjF4eRYnPvwS2R7qVgTKD",
  "key25": "2V8687hQ2EFZ8N1c7ZVeynJUdMJKJssfSpM8RGJGHJwtzN22k7PswaR2zp3hLZgu6Yu8S7iWPpkwXdy3S3zgnVeb",
  "key26": "vK4Ha1G2cnCnFGhd26hg98Xt9N8VnDChCeW6y7PPEyCSwyiLtNgufqvKNQgUUgAeBFLtXS628x6uXsKtgUbeiD8",
  "key27": "26CXcNBoQVWxVGn3YY3HPJ4fMKpfE8q7VuKziBpjEm8CySK7QKx5yA7uq7sxVUeimr1byzfFMgFqSBab2onFhjFx",
  "key28": "4Us7PgqdiG4eTMXh1VwXBXyk68qq1h8jdCBkk3FSSHiMcKCZiUMzR9Tysfk4YyqafegGme2sg8am1apDSJNQb5jZ",
  "key29": "fazdKorvaZ3zvxcPPdembV2VfVnBNhyxfoDn7Tso2iA9PCzUjAWbikDt2owjX3FeDd5ka8yjMbCjnyWeSdRzRxp",
  "key30": "2htpp89Gm9xgLx5ezCZd7kfJi7psmL5gZ9EYhbgG5DxstKW33SMhhVeCGnGNH8C5G8GcduA4VLqRUPdLjvBEpqro",
  "key31": "5QUfvqy54uUQMsmCmsWJjzWcvhFiusQX7jeAGDp7R8GwYtAF6bPLQtwxk6q8LB3dBHQkZNfbAhwHNmDmE2Cscxtf",
  "key32": "2w12nF9kr7BPVvWZD1dqFtC64tJMMUar2At7HZJVvL7TKyPjKwckXkPUMdDSxruqmyAy74xJeNWNgDYDiB77AP43",
  "key33": "BgG7CJmanoVnJhNXXErBS8Ru2BSVoHwB4h6bnjjDuaRnykjW2vRKb53DKGWW8sryzyg4LyTFEGD4uFSYEtFhxXF",
  "key34": "5qHa3kpkhzdaCzezQVPWBQfqpEn1dGp8QvZBRzMGYBFqjjQzpV4R6jgPYJLdkRfaNp6zuXdPi8fhtRNMS7xQUjnx",
  "key35": "4jVtHcp3CALCy8411C2YjLvGqjAVd5QUENaQpkJYqu4AinVp1YeKiZN6MPRX2DFppzy3LrfHpYexrDpxTE1zdsSH",
  "key36": "N42yZYAKbFeBxexpxxpfLnprfq1HQVrNJi3ArmYL6RiWoMTeSbZZXhAovF6fL7acGmGW9jPB77TqakKLRsdceFK",
  "key37": "5HdGa6SeMYLcbrpg44rpqsdzhwXTx6FvTxGT2VjD1xUxD1VEB5bNxZDgBNwn9MoDbLcLjfAs6nrtB5TfcZXW1eqQ",
  "key38": "L7umHNuffmg8cqeTaL3Uz37aBpPb27LswvG517co9cJTsMWGBBpgcB97bXCTz1p2VEaeZKq24dsdJx4oBeu9PJ5",
  "key39": "2qP4pPfvFdceBPso7CmYKCkdZtuzYD21LUbWfAmv5WsVGHMJ2ppQ3soNHirJmtNFvC2snds1aUfzYUFJTB4oKuHt",
  "key40": "5GnybLDrQCRsWD4MetGoNJeXKpgEhHyQa2762NBrnMgBaLMxYpzYSMehAHqQJq9rQM8f9HXThdoh7tN4R8JWB3v3",
  "key41": "2KtT98Hb2xBywLScrrPD31MZ58tcVqZvy4zcGErruBFhCn42WwPeDvaoNdZ6ZK9cGW6dQvrBaxbXw3hpg4fRjZf7",
  "key42": "3TNEArvPMUZeoz3Z5GPRE84Jn6Dd19zozM8aJzBbAf1pSEcagPGiHXDw2tHBcUrqMcPDyMDevQqdfyD8b2kGzrK2",
  "key43": "5W8GPLPhMo3FdnirqYesHG7VeBv1h7D3cy8FS3oMNFQBRARnXdF68GHHUxev5aQUoiB7JZ95ZhdnW1zg8D9w1jvS",
  "key44": "5QJHQhkMPXTpLYsX6JENaeTJcbok8Gd1Uw2nVnUHdxQ5qXaGt7ZMkRi1iZ44G19ttYfB3ZSeDUkW8VnkRytxHzVw",
  "key45": "3gmQzbontLWPd3ZTWcNxrLF6eYfwFFzkDHuzPk9fjY7AK1SAXrdgjF75XWFSrar6yBRoUJVVKT7csRgNfc4HCiiH",
  "key46": "2CHBoTemuncdkApKR7WmZZCZBhUtmLizWQPBN57mKwhmQKQaUFaWredxVatbPQKEP6uwtchhWWjsWWfJzAmrpvX6",
  "key47": "BJ75SCaP88MdbWQjVAVF23HbM6qmTTMWtA1zHyH7KjyLCLaQtspC8CXrpCmXnsJsYQx41VTzLvHHggamqDALBrT",
  "key48": "66YJvE1LPQs2xT5f2w3f4DqEGVWWuSrNCD1CqYXiEpiQhK7cF6EPixkE4s4DJbFQu1DjiPK2MpaK7tJd87C59YYA",
  "key49": "3RMpvrpLfG2TxStdue9CqGWca3tL3jsgAitrEFqaJTJ5Ds39RiHUDgpyvUg1RG6LQKrZ4ttb2qMWKB4cHSSngzaH"
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
