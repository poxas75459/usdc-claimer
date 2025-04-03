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
    "2D7zDoN3tVwgbuq6D6mowT4NTMbiK6vnUtL1sksSJQbsa27mVzAUAx7cozWb8vxog9rifB45RTQdA1iooppqr6VM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3s4vwhfdY2HLEQHqczn4MNFk2Lz3gSZEHQ1PNb7b1oqb1QLqD5gFjZG4Kmac3ePxkr4HLGXRkxzQFqaV9VVgTd2x",
  "key1": "WEGP9tcSc5d5o5wNQqRbBWQwA5RHLMbXrs7AQ9DkykfHkfHJVN6GY2jaDEMMmdwaFxBdS3qeWXP9aaqsBanKJUx",
  "key2": "55pTuTdyAAifBBPevNrfQHuMYhUVmxjL5UENWtVwwsyHM3Bs5TydnFN42r1tmb8iYBwa3qJj2se3moD5oMGGq8wg",
  "key3": "higJ4CTsLDZFsUchXwxdS3NMzf88hFC7os6zxRNDziS5Ax5T6sXGkjzgvw8pwsmQqFVfvzW8zb4akDm2CBvruq5",
  "key4": "4FozaNp9r8cxa6qPJjL3Xk6qtu7UCGdWpT6Mkw94V7gupyJ51DpYrTrFWTLqJisUy9R8Y3GgBwRcjHXnC4Rt4o3d",
  "key5": "4kVUyGu4GbDQnc3t7znLBEmANTDVJ4CdnsWMDjBceBEwBCuStoQGrSiVuu518TMfXV5qsG2QqzT47sCPTJ5WB5rf",
  "key6": "3XiD77weHKMBjv4DxioE6tNpMVD1LgbZscGFGdRZ8KDXERFhqEXGg7GNgr62HSCehMxHFNNggcxMvECJjUmVBk1Y",
  "key7": "Xq8mrhsZgXrn8fBJCS7d95GE8wALeYKaey7MkWvSX5gWLPt9cizwtjScVbqmuAKhWFYViM91kdwyGvxxuUUS8c7",
  "key8": "2jL8P8RiMWogs2Z1qKwYR2Y7SjAcGnYWTtYFJxvcbj3VjMKmPPsGg2gjqk1DuLf7Y3ECkb7cXuPYqsCcNGmNAuSG",
  "key9": "hcuqTZTytAt4eoCYxi3SkkYv5faGY59fzMUEcHt3vg2sUFN1yj8kcme8dmi1bEgAhHthDZrHpvaEzaq8N9G43WS",
  "key10": "26tB8HHMREGCjmC9HxDEuVipjwU7g4GiKnBm5rm2RzrNyLx1xBwH1aAZURdSbvaZyDJ2U3yNv3i6UWHnW4fQuvnZ",
  "key11": "36uvEHokVECTGTdutS5QRQiTcyKMZLDQnMQkhLT5ANuzHqjQk4DkZtZemZoHRsECHZK5oHPHdwcZwyoAS2gBA78d",
  "key12": "2FW7FtavAxWD7Ud17waMqpuUo15RdUJySW7iKUPt8thhWYUn1i7LEBFcAxSZba4UDa1u6J3StpNy33sxAwUScXS2",
  "key13": "48J4qPj7PHC88zhVT93vNR2Vxku6N1GRgcaEFR6HWu1Kex7EbuAEb4PpHhpWR7d1yGAcuBxhpvjUhGxksfCYgxiF",
  "key14": "4K7XpBHUeM6iaLg3ivgadJA5f2Avmn7WE5y86gMnTR1eupUXmkdHnxxYe9S4hGxqcKeXwe91GS6txM5Nag3UxmbV",
  "key15": "4KDLsnGy6M26HspZZ3rYyUspZszfx3oybKgBq4jdiFoexiSSsrDVJwDh7bsf1iL9gMvdgAt93FXUAHgC1q8riL9B",
  "key16": "3Q2bk5oT5wh8Yews9ocwokVV3TNyMZbGNDoizhHAcm6FaKtAeRDHQVNLrBpLumwo6aJHxPVvGjjCNYb9SDNRZy6M",
  "key17": "4Mpm2BdwRLqQvtdUPgdffrDCJcBgShhTdsJFfaBqfzHXQuSVmBjtTp1iGjzxF4Y1TBTmM4nVM2gS5StQzCyuksMk",
  "key18": "38NTmEjdN2Xvk8ZWJGiMgZAkdXiF6s8feye77r8EV4XpMfyRojFZvA93bALSMvGabHNchp5GbvegAKZnNfiBKsuG",
  "key19": "59fuv84t764EBZehdpp7XhRfTJsTR549wkGXq3rdsGR94UW6iAh8icM195KeT8ztPpVsNehP4KMKJzaWAZk9a6JQ",
  "key20": "37HxgF51xKqWVvLQ3ZgFCWWpTPA3rtXcQP2HErEFrHoTisLUD8Djv6KcGoNDP2d5tdJndQjSEcypbeJhwdwnRjjL",
  "key21": "2Xim8LxtAdW7gn2STuzkN2HcGALBCvqiqcM89m7XnfbkhSrpwGdF3Dfp8m7Buitm4fdQq3Pt9K8z9eri89yKUV5h",
  "key22": "2MYu89PFxTEeNWMcj9abSZLyYgWUADPefNn9iJYeQkEAPvxWTQpiFzVqEZnjBTpPuxSpPy6duBh12efd4qnTiG4t",
  "key23": "4sngHQiwvczhCwedLk6SfBareUGXTXQU1v8z3VERaZyTPf1RNfYB7RdeibUg5s3zjViwJLjkvzmZsCAWFnyXS5UW",
  "key24": "oJuVjUYW7ZqunyvCSDLTJWqACoKRbPqmpVtvLrzPwkUZE2Xah4uM9FESpjY4oyJstsBLJPAYrdHaLEhaB9LGJAA"
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
