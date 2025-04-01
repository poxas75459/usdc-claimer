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
    "3wXbRAMHfUeKUe3XcAuUPsXnpZJPHvX1eBuyczBzYXVpSET253RY7dff9uU5QByAbEqm1Noco6bKNf9XygxUF62y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JNSeSZqUMd4psUW5L3Aofg5jbh4A3jipTXjxHHiASGXr9CLBeakJLySaLu5QZkb5h9xa6kCT3cRgZwya7UxV85G",
  "key1": "4ivFMYmq2ZjuUd4PvdDb9qW4HgwNBF1EZvYo1gjNzeeVikYW3urJpg6w3LEU83MNt2U6WejEq7t89qPCtZTbR8MR",
  "key2": "34wkLzKrFbFnUkUtBmm3GuEih3M8yQEaHVwDWnurDhrjAww6YcbeWb591gGsEomQrmxBk6eWFCkKgA7DFXbpZJyp",
  "key3": "2UHe7Jvc2ciwRY9H3XfWTLtaFTcGHUkn1EfV5MS6wk8FeJ1arxK1U3HzZ6TYbGPG5jYCpxHTXCfAvWX6UHs5BAiK",
  "key4": "4h7ANiGH97rER5apoHeZHz11AspAHzfnsMaPKaceqZBJb32GYF5N2CgLTYJufwpVXR2J1jd6z9mWXL9L2hyhGTXY",
  "key5": "3enD38yYxMYVTArc5X8WwCzVG2EEs7YzSh1Ha66gsYt7PYpjs9DVAEkEkFtk8oRdcw76ZhTxHzPLm7PVRbKX1ze",
  "key6": "2jiUiGPYNpVT8QcnwU9ttYZvSBUA6GBSa1ARDagk9bqNhd3iyTYSNfpZ24sApdmu8koTemNT4eoxiAWU4vZTyuzg",
  "key7": "3JQAgKiKnVKmtbQqTEhyhhuVf2dNKGSXbSq1LccCSF8WGrHLP8U2hJYg7d7RzcU4vdjX5YVR32eUVix1CBQEYTSc",
  "key8": "3AZCEoSfew1vKGxy5tC7gWpWuhtfi5P4MMfeqqS6e6Vh8pvhACK2dMHuoWekLUi9NuNJeVQpBiX1v4eTZcRaan8Q",
  "key9": "5gNXCNhsvbms4BRK3WEfK8oSsy8J5oy5znwPNDsjGpf5kc5GzAxzj29q5k5C4Wy8UTMVPnkBqaQtsvw5Zouug7HX",
  "key10": "2pCnCRMtbFEntYBS76e6d96mt46o7f15K46J96rLEF2gEXKoBqD8J16NmR1NyiVoYNUBHp8NPcnxHukG9zWuAGdR",
  "key11": "51T2gjdEp6oW2F78oeemxQw7F1AK1jzRDiKwFA16SqhXXLmDvzSYTFkgDkdp11ixNCh4bKtGqPCKhQeVwbrju7JD",
  "key12": "5asjMf26DaNzvMcotXHuP2XiQqbhTE1bgemLRoCcWmFbMHXmnVrQs4omsipyDw48nTRq8AjGTC2d2MZh9VWX2J6E",
  "key13": "4aYeqGczxn6PqKfjPgvfMCkhkARsGtd3BDZSTjrEGk5L1Hjbrh9cgTaaK1L9N1CXxp1SbpGW1gvZrxTaYnyGAvJt",
  "key14": "3T99visYpDMQfmGSewPvc9wbz8CxCLVV6KBYA5rz2xJ2EuM1omAPmDk4j8qvPMJPt1St146U1Cqx4TXEHAxbpiJC",
  "key15": "4xucqFxy2nAsRYqWuNy1GiR49d7MMa3WC326C72wAyKVuNSNUfFL1F1EuiYEJpJorvVXfWzEMbmieXARCCz2CFMC",
  "key16": "2SmHybcQb9D1WMCwrJZaCJ56aAfJgn1m8Kgpo5zFwsfqmKf7unM1nTL2fLRRhQ18bFNsYncpRn2rDxaZ8UWWBvty",
  "key17": "4izGARxmfEXMN3prxXkBMwZZNPHW5JgRRun4Uhyb5NF5khMqSC8qKuCRdcJsPNV8srQ4MnUzFCpapvVMcuvjtgbr",
  "key18": "23pSogUjMe5MazUhQ2RBVA5zpMJL8QNXzjziwaT7Nhb7AkJEavRJ2UeQLUKurj85PuQUjGUZHG7cbBxu1QsFNhLh",
  "key19": "Xk2UMuhTFLKNCdNQqRC5AosKy2BFr8vMLo5FCNkx33fVVM957y4Uh77uULhcUm4HDGDRJgyS86zjgd3NDw7P99U",
  "key20": "4r7a8qRCRkUNmZnEeq7QtQoRgV3NDrTWovNCNGVTKnEoz5m2s3YRNNcgibyAEG2yzzCitNsYEPjPeNe2v6ATfgYV",
  "key21": "2uDEuEE2DsoppYsgCNsjU6vvc1pjc4xvNucRDhzHFuwanY9PU8u4vN6uQkba76RTPDVW2GxuH8s2fjrZuHXgSfb8",
  "key22": "XGhHo1yZY1usP6fTSYGU3SetEmpaLht1e8DyJ8Sz92gfEQQ4gcUYLZPEdWsf8dFhcrkzKZCuDJx64fHaTbJ4Ept",
  "key23": "4GxmEeGeD54MPrVbTcHbxSYWybe4gicyPHZmjZHv8g9MVTc1Wr39bjdwudwnnMtujNjdfPcsd13UhW2TNNbAk2Wp",
  "key24": "5CYtzc7xNNXECnwopk9YTafZJ7PC2knJj98N6ydr9Gt9Sarmyz7Bc8XuK5HZBWpd2LMWcU8KwcMR7J6gqwPSv5m8",
  "key25": "2CVvbwSnTdWCyfBb6upZc1NMpd7mQoWYsmivBPYyeqMgRKvy7ewhqZhQSzd4AabxyeNXrD8CuGVuSpUFbewNHBcw",
  "key26": "64kUjzaChoJSqvM73CKsT5sy6jcthsvb8HgKphLtoPa3DoBHXzAqZcdhvjEiXrqhw9ryShqPVRZRjvbBZ2RfsnMk",
  "key27": "5XqPdEh2D16cgb9CRjSgHX4CyLDwY31HzWfaWkaFGhom6pndSATSifJ1UkJ19BsKLaPhttJPCWXBNUALTxzcaXsD"
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
