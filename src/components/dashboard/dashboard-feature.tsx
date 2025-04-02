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
    "4oocJCSRjELLX2ZGtwe4bV4jgf9fwrYYvM8jTYBcZ7HFGdwes3e89VFHwWhTy41MzahrfoRpyoMeHBuy5XwXZCHu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FBHGR1f4MHWsff5czyCgGQFTeMkZ46Rq6UYWot3QvjSAsb9JPUTXfBBgqXyGTrgnghnqJzaR2N8q71wgUeTZRS7",
  "key1": "5JQYrXd4x4Uer51ukBafBMgw4gD5ZJ9qwozsWixTUmWRtUw7VGUP2WLbf4rLC1oCkJRDrFz7LJxpAwYX4btbNNMD",
  "key2": "5pCcSBkBBwwVKjpSChbFE3BiSWnqsq3wtnU1Fp4DcXQjceK1cNNdrGo3b8EdNg6URNmavRrvCbAerWuGFaQxzkB8",
  "key3": "5DbMzMzQAUkH95nsYDBxWaznoWt4LmQADyAeokCBfGxTPk3xz2HW467jtmFEQsB2pZ3irRo9rA5UQfhAv9fk2ET3",
  "key4": "F5LGkrXtEuUShv442d9n27FgyW27424jnpbZWCpJMc5AddvbdGJG33bm9afbn3RZymVxmZvHbLreva5cbM4HGyR",
  "key5": "2PemueQptpBHmKZV837G7FpWj9MZn87MU9tNghbQPdvTUfgEs9MuHrnVKbAP5Qa7omxCB7qHgrhbKW1EBJpgkiEz",
  "key6": "3PEUCDTG5EjoDfWALB3qkZNWd5KJkcgjqGAzwHqRS94cNTS3D91a2HXXdL8kbR4eRcqubjdnq3GtRKes9e5HdvSq",
  "key7": "37xrMLTY7xx1EFfLakxgpakozNXuqb3XqQuHx2Nrb8LWCPjsfwNkjxEzx5rBLaLSDzLb1d611w7oj18c4tLAoAJX",
  "key8": "2aPngzqC8YYDuA93DBfHxZWh8cJzd23Hwx7B2bagWNufWvzQVK726RPRz2taen7eZBh5WzpXAy7bbA5qAc7VktAH",
  "key9": "3Za7EggSDAdFSYZHNFMQDoFXw1rHggjs7NUHyQtDCzJwmE4HPKWwvGLF1rGqjNfZy9dwhnmdUoSfqGU5qVsMgzWj",
  "key10": "2d3k11zA5JR2eGWNu9wbxYV7W2U775hGGfvDRKdHgupRWHZsVL3j4FXPqkBZePH5bfUDuJonnS1mtpEUhNp9A2Yw",
  "key11": "5CVrceM2cuj8gMajzuUHePs9xZyFQrRiBGgdk3BuraEu9ZeBuomRVJKZ3itUF825BJmiU3xtLeXhR5JggctFAhx7",
  "key12": "2tmXqsGLUYaDvaA2DiPXBhB7KX7htP1fZinLQ1ZeQtmFxSLiEiDFMsiT8iNzTmQpRvFq7oUhP3CVUuXCdGjmRQ6j",
  "key13": "2eqaDnm2Xpg2mGHzKLX4w6vn5x43wEow1QxFShFFMPeuz526ZXvjFLCkGgQ7SX5tKnWQV9AczDCeEPq5moYZqRp1",
  "key14": "4VdnqRA98hG7g568BYKFBtv1mJASLeujnY4yPCX9tcYhdJ86kj9RNZdr8QwhiaSxQ2UTz4utG1Kr339BYuLFKEYm",
  "key15": "4P2HAjRPpNg4byN46TMeNuva5r9w5tn144nCN9sAmc1pcvwjstuZLPziaqFLNibGK76o8FTr26T9gvnC4Lv4mgh5",
  "key16": "FJJD8uKJvE5Xb8PhtoLhbj6qZtZCurUj8ivdQv214qn4qeETnBxUbwCxZ6QqZVmisNdS3JPr3QNgnqTgAwUSx3C",
  "key17": "KrfKM5b2c6NWGjufv4ksZzdnz9dFyKcLzBShPCtfWcMBxeGWbqm2haYEko3hcRA2tVmTK9rqdQ7W1HKEBhsmWMt",
  "key18": "3o4REsYZ7gWMLVaf9fqWzDitFoBUV7zdd4Lkitjwdb1TLGysxSLcCZy5aReQEdeYgaRDzzwrG4iAS9RpXoKLJnx7",
  "key19": "4MAkVG6gGxrBMDAimABToaGvVCojSfXeBdCMhc2bHsZWCJ4CcMCTeGP9ZRr2ed53fBbXNYWYEvVxsKcHry2TY9hQ",
  "key20": "3VCnxcawheg8CJHu9xzLmzyqPDrrC8jRJ8NciBTQdN5JSJH8icW27tRoKcRdLpxsLjxPbuADcRBMmJGbjneuZPUU",
  "key21": "3Y84AiJ7KDSUCPoMwvgjNmrqVFM35WMyzb8miSAuUE87druk8PHZYdinuxwxJ6wf3xYCbkG3AMYy6ba1rLJujfn8",
  "key22": "5VM9QDQRLFSiiy8bR3TugTJ3McQmbT7Hwsq95jTddeV6xe4tRvPY1zBvztLiWWC2kfGFujzqY8xWG2eajKy3wiNr",
  "key23": "594V5YZFimnEvnLZtZaiv8sDTCWXJoNGPdBqEsLVmmgtnLsEE2J96ZYC4QPmXoMuGPnjBpLpAGGKRACqjqHTH6ko",
  "key24": "21K3oCmTbbG6ZsaNC3NQcALjpEf1KWT5Y2EcQWNQF1akf5PRBdJ1CjBepeumpa88aN8mANvrADWXosiwLjndh6oU"
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
