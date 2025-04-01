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
    "u8n3HTA8HWvLWsUua8HKrLTRETLWHWPV4kWVn2kuyjLCZvubyqk6R6VBJN2xhBttVMicKgMVgMj3D1FBhmrofxo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cYrVX548RFZo11Bm7oa636iNX5JGXd8RjiMPXY6RdZDaNhiqt5sMEAiRpc8ujLT1nx2EwUC4GSzVWWxDfuoF1rP",
  "key1": "1Fxp8o2DhPHikLfb7eRp5X7MdXFrhAMsVj7L8UeVuQSRbiVCLD56NFa4MrNMAYGc1spkXcdXT1NUG14y9AKeUNY",
  "key2": "2TJxgLig79jjaX93qM35P1aMq8xNQzgXd6CADY7ZWWJTgP7c4irKSCVJbDFZDcxLmRQ7odpt5CPS7nCaPYDvw6AV",
  "key3": "5vcvwihQ3rZDu8bfdzwS882NzZAHxBsp2QKHz93eSJ17dfVna1j6GKqsKbZ2a2qAp99nHYayvwCsp342uWb4eEhh",
  "key4": "5WoNE1KHcZFKEzh28XYDhGJpBi38xEpD6w4SE2dMBW9k8759PHiNofpD2QNM6ZyxYLMJ5UaZpUeXMhMMZWeXmQ6J",
  "key5": "1XATraghVHmpiZ5GwfmVjN44AhH5s67gjW48nCMbMb4geDz66Z8SQ1vLV3TMWQnhjhvYfEJWc4E86vKian1GQdf",
  "key6": "5wGwY3tLJWL2mQcHqyvMUFbmBvzh29LXWDZVEcLXy9Ltu3LDkzi5Uz1JzaBci7MAjEh5wWoNNK9WkYjyUJgFoqBa",
  "key7": "4msAwRBYmgawxh6nrNhrL1Mt8qiV8eH6hETd1rPhB79FGxnwhASu8ifLKReHQWtAZEaB6ht2QRdUcz6gaj1PbqVN",
  "key8": "2ogBKbX7MukEg5eQoSgwUw2Bd93vJPidKx4YQZNGXhQVQLg4SqindPFiEMbug3jzqVngJEdnKYSUXZ4NJPxoL28k",
  "key9": "4xximwmkPfpmAvag5cZSnVcsN3x1ZyxBAEhd1HnGy5q8WbTZjMFQdUo6QAjcjbxSEmm4yugS3G8414CQBqUjZwrt",
  "key10": "389UCX3ugcB2TeQiwcCRs18To6kEFQ7HEFNchrHhDDXFDse5mHLWrNNQn92FFj183i3dniSaG7fsBGEkjgjz2gHc",
  "key11": "4zp8PeRZiZPx1suUVNQKcbp6GNLmuwsSz1m4sD99cuoKHsTqg8Jx697N6uGEFMVEc2Q7iE1oNnisQ14GQnrQj9Gc",
  "key12": "4hEgnxX1c1XGRRkgzWL34z59DVLzmeUHLcMVZTTaioguF3Vjhxcyz7xyUXBBFdCSv8dEUTSP9b5F4E7ftfe1m2Qz",
  "key13": "3cdp7CNhQLzYaGD1cftYUsJDtmQsNtSGxgrX1bCbjcvH9QnbHXCmpght1DmkLFsgZXGCk8vdDQXjf8oZ2k6WQoXd",
  "key14": "4BqSVUR19kHxNrxnNtAdgVeX132bpNwP8r4NKovWLEDWV8HZ2s7w3qGJ4kBvBfEMernE87PsstvMpni5LzA2GzRw",
  "key15": "5JfeDmurZjvUkoGdpjLnAQWyDCDqfRrsHuSLWQ8HqV4Fhw8CbUAtW4mzLUDBmHzF1GwUZCLeYope3YqmKrfeYoZF",
  "key16": "3yhP8hfeFMqr6kc6es4N8Pr5pMhmNWWBmFqm1EnjeVj6tso5d6a5N3HAHKcqkqex7iAtDPbENyNNpNTcMtiQf1E9",
  "key17": "5pkeBjQt3mjtWBL4uDXJyWQSm6wAKtCpbYL2X2mjPQ4GgskmiPxG48ounLoFimLCKetVRrdidz6bRT4ChrzwkhZP",
  "key18": "3kDjMD8XbZMqY4Qj4mbewFZMwNFMfeNR1CtWW1akkMHC6Cj2EpTqKks7Cxa8XryCwVKcpiJ9FkqM9SZGFX9Mcyyo",
  "key19": "2naxdXf2UarJfjQaDmnANQ8EMcRzoFDzJ7BYiqaX4r19LmX8D77xvG9V8uRRshmgMbanWqBkGUWcGu5q9oahpRJX",
  "key20": "2GmmtHobhr3n7xBXyJVQ7M1U4YU56GTaHoyrSb7zRts1kaw2zBZfkSjmbzGabnqXTuMzsbwjYqicyuXTaRcdfG94",
  "key21": "3Q9S6x4AhLZ5Lh3cJT7uYSct5eMBzhCY4K8GzSVDdHRJeBMvcHgSSHnT8ifHMHKM8NTfvNwVSfW9XeQMjsBmWhDx",
  "key22": "3TNByTXpedHwoGKqvkk1BJdHMTRCdNWYJuDmkzzYWLfVD8j1hcgukTuhDYkzTrCepZ13aFCQ2APEKn8ntRy7LAsr",
  "key23": "5d8DqCCUqUUbc8xiMUmmbeDFg8yiVe8U4JMXKNfZcXoGDLUg7nsEzPxLXH1ATDYu4ueXipzEyMszHtzawseeZaki",
  "key24": "47oZHAFJDmCfQ3kLwdHUniuc3pwik2pvLpMi8zmJYpzauPeRz6zcCnZSFDnBvSmQQK1KqhoXoNBBFcAsCeCg89PQ",
  "key25": "4RszJ1vqRT8WmSQ7F5tx6zkeZXUhuAZUttLF727732QAcTPXyiU79tAstBbNfdb6xx4x9WDeXqD9pQ3Dg99ChRyW",
  "key26": "5WM2ghhcwQhiZKNk6WDeeauohQj3i85hg4Qj6b39h3CtcUo5K26MXVAWwfm1QvrtHKbSssUJ6uiLWtsEZWCwHFSM",
  "key27": "4rZJfAbVZfyuTfijHZa1dc7mtiugoRDjRu1mwYQYDbYSAHo4QXF5RUgeHp5aUfARmT3UsXu6ZHLHnhBuakyU2hDL",
  "key28": "LtGR9uookMnA8ouAMocUVG2id9jRgUYh4ssXeYJGvWggisRSftA9nWp7L1orZqHKYHGDjRgBUprusNtvPpWDwDL",
  "key29": "3dpBdrwFMU9cFzha5CXwyEuknaaoM1jBn11osF5oBvnLzJJqtTYrCrgQC2HZ8pdUMsM4qjuUcZkuuQ6vaz2UCXfP",
  "key30": "UFpNjLxGdjTECHA7d6CDB865KKJCGhr8pcQ1ptNsKmthsg7sh1yKMYq9ts5iWDYvyNga1Zya6kkB3nMdtUSjL1c",
  "key31": "Urc1mj43TokSieV7Fqa8EFbZBFdqHePxC58a6HxCySvi3AqUNKwCr45tQVbDyWS2unzLCQM4uxxiBULCCTZz2CB",
  "key32": "5LwFA86PkdH3DD8TWyGmd89dacgR8mLqmrJKJsu4xq1nE9c4QGMHiAEe3c4uV4kY7oWFeVxSx649LVjcJkwEvSgD",
  "key33": "2mFNLgAckUWPR1eRWP6UB3nWL5LVk8QZ8j5YMKmeY6FjctwD7RJQ99Wj3Ym5ibJnEboFvBdTjgDZAXi15dywi1X3"
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
