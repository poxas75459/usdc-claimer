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
    "4Qm51YM9ytCYQBs3twQDXGbmrexijAGQozQPPiouJ98PQmMJh6v9qmx6vnbxJXEfjAVcftxyUGxExaakL79Rp47a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hMTsYmtYRnGWPMmVHJJCAJHZfis4PaodcmLtGaV198b5p3izCH3EnYjoRvcUdjC5EysSBpBbVHAadukwMhJFcSP",
  "key1": "3QQu4jnVxubFSFLwzyZ36AzTruAvMQHYenKEsSTmyjvHNmVi6bqtnQoih8crfC7SkZhJmyx4jV4xMRxdzhyhi4Ra",
  "key2": "3zYtWrxGJp7XHrPrCnPk6TJbVXTnrHEze2anbiXA3woDxHBabzJvxir6Koaaocm6GBBhXPRr3vvM46dmmrmFpA5g",
  "key3": "STtn1UCvq4J2vNwsecr33w8WaRtsKdkC49LrqQ8RpyCNpQBqbpbTzy9k8zpzpF9WdBcs1V2mzvtC4bA8mvLogfa",
  "key4": "VQH7gdz8fYoP1RbBhPP7fsaV9foYxk9FwoezPENQ6k1LbBuamDYtiuTGTyj2Bzb3JXeedyuddQmVV88UZpKcFCQ",
  "key5": "3DUUPf1xCj6PEMzqeiyrQSFvkkFotDKAABUzeBHskPP73t2TqFqKkRm2APAdJJsSx5icNQmtgRB9u2NcANKpevF8",
  "key6": "VtSTTfxKHyzNrAtVyNTWa9qoV4FMr3VvS9RzXHiQdURfazcUPcGooB721qPbDY2Rgejce88ci792Z91gfbZBnxG",
  "key7": "xc5P7pcopmoW8Vrmwp9vdr6YUY9XnNeYQve5eRpJ2zqww3DNrJSodKES6ibngNSCy1zptb5gqWMxhwgRTf6FXgy",
  "key8": "XjCrZwrwcySCtBr8P3snEj67WwVWNTYPywjU5v6coUz33aahHmXgUzSs28gFTesxGdC8H3wVQrWckQRNak124dk",
  "key9": "tEEScRsWTHHdJP4NxRnQ19LW2rQWkcdoLedthpYTeBAvYTusvsAzqdBUjULz5E7wBUcBe3TXM7Yz2yrukWrypmY",
  "key10": "5xdWm6qcCAacUQ7sE9p5st8W67GNx7Jc5EGgCgKB9EhSCpRnfrk57HSPmzPdBV6q3zKAPQQBHfBCCaUFkTPUqfr9",
  "key11": "45omUnaJvP8zY2PiKijg5yXnPwvnoqeSazKqcniF2SbVvQEx7XMvaRuhpAei95cGaoZuMXMKYbkwHQsjk3zbxyjH",
  "key12": "CtLJoQ67eEcgfiP2VYMaaweptRDruXanm3ouNKwnineMNq7XxjALXj47zGR16hjf7TEh7do75dBhfYwMUo1bXke",
  "key13": "3Uph8Bfj81FsRfN9qtMzUUHKnBVTBqzADhroeDmhHiAdhBo7SdCSZRYLivG8UpNr6Qcbz6U7vW6jhPn3HbX3Hde1",
  "key14": "5khYCSbHNSwF4cs3PifuxEGTEhtbG4hwHGKfHQiDidPgBziFHkMFeptzu4wW4bHZGM3cYBZQaDaCUXL3ZyQ9oA5h",
  "key15": "4VhFvNZmyRVXJtrQKJY5iYhoiKS8bBXZW36G5cBfy68GeLUwhYgLBHjox8CaiWsjpHovKPz44igzff52NBQwg4WX",
  "key16": "5nSiS43GV2QxoXxK83nVkzM2kMg15vgWxichRLSNRiGgwpipye4JZw3rtn9stcaoKxQwdjifFFRT18DscuTdRDvk",
  "key17": "2Y99c1gqMwUdT5kdGXa22ey3Vsx2voHhX3FhNUoEZfV4TyELRYq5UWBqST5UGXcRUZCe13KiUWNoGZBTKTpMAxWa",
  "key18": "5HfCKU3LB6WrmLdDk9b3Zniuho4VFWFFt9wFN84XvF5CxtTt76LzDo89juR87jsrrL4e3dzCzcJctWHXceyuGTVQ",
  "key19": "5wiz7T8gBeWev69SfQEE3nRgkygpkJvEYR6NJ1ijtk9rMnwEY1DKMVVGTGbbKmVNtjon7kD3S4cXmDdX8QeZ1yxH",
  "key20": "4cSuxyLAGGcP7VMgxPcGf2cVLMgFNjYcQRUHiKn4FAK8RPRwGQxXe2PKqRXNut7qYPPxU3TuhsTeD46ToGhsmiDz",
  "key21": "6S3EXDUVw267SemTKzLQ73zYEZxXp2oiuBwrMdmx8Ta4k8292VBCri1VSwP5eGrww1hEus96nhBcigBMtX9Ky1T",
  "key22": "2dm3REYvKdQNGjjKPBnWjS4p4hCGNzSqhY6s8Jr7MWm7oi3gzFVDEVZLmMEGPARmDqCAUn47Wv1jXSKMfnKjQtdV",
  "key23": "36psk9hnmispJBorBXFNC5vxEffeQ2d4V8jR1qni49JjtEPEFDCmXVqPj8nVkDYNQL8XPSSn9MCqnr6UhYPjFXg1",
  "key24": "3UJ57vtpwBk8TFF9hmLiscrUAHGX2ZCwMAFFjmkD4D8NjaMRbajx94nyUzCSx2HEmuL1DQ9HR3jCRbiapSqZiU34",
  "key25": "nbjFojW5UhPzr7Dj72fnxEnfT4b3nxXmNbLruyjs4DwMB884LYo5DCn6KrcAbBXxFeVKGe2B4LwrVT9ZSzdqidy",
  "key26": "3Y9wkcUV6ijJhCYzouAWXprGLkTwQ36pF7jKWtCaz5aa2BnguRoaU2iS1YKsKJYAECsSLq7TxFfHbw8tyirrvgp2",
  "key27": "RsWwTJtbNhePbWo325QdHavjZpJ45ZzgaLtDFcCdGxaBkefut2YYgYFRQXB7VugM2Wp5FG8BJjuicsLNsXeoYhK"
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
