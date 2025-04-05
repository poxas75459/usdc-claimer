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
    "4KkP4osL1ZvL5R7wi7SszFCcgQCz7UaNer2RuxwMYJvpvDoFfVhEptVwMKTiQNYQHo3SiA7Tf8eC9GXnDxQteV5K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iRpjdwZMxvxo4QfYfsJh2Fi8H3JDCZxh1CFahJimR1H8xyf7soyRJGmyDdAmrG48Xx6VzodFeZJMNr9Y7aBFKQs",
  "key1": "4KerBThoujj9CGNBpZU4p5Q2hThfCDezYzVN1bAT7FySqQXJVprhAa3qajgoGyJPd1aXEAsdhHzUu8sREFY3HyAj",
  "key2": "2ugiamt8YTFdeVRbfHtkeY1FDcaJ5VjyxGnyxjiY4Nz1CnXUmy2HbUF5YP6f9ooyVZb9vXjp5VBA7a4Tt9BTQAAn",
  "key3": "3ok2rMycCdgfvdfc8giZxTy1AU5vb4QBYJ8xVxJYKPkU2HEGWYwAhL8QSUafxSGaHThdCi4MXf2xNq93a9VYzXTL",
  "key4": "3QCRpHRqhd84yX3ZXU2mswqCvt3ZjopRVNMEd8mHT9Ge7gCPms4YneP4wLWqEYKdyre4ZAxLRARa7gZnr86aRtsA",
  "key5": "22Fbkc1ZxYF9NP6YbLktKSszXUPypUTJadmgvPXb3no2WJa36pRT8ztuzPoR3d7tbCAaJJjwwbMtD9ARNK5RVSaE",
  "key6": "cX6uNZJTvYS9oneczMuZBbiPrLRTrg4rFxvFcMYwdCV9eqEmxCYvG4gfVn1qpG8Br2T857dS8xQK93zhdccvBzi",
  "key7": "3ePPf6ZVyWEegdsoLjiuH1Hyg8EbXutpfU8P4EXvFTX39nrMPPvMZLNeqV7qkn9EFxicrAfbKMoTvpRb3H1LjyrM",
  "key8": "MNbmZ3GKi9xtnYJb6z4NYnAU5B4fQf2k7yJ6MjvbvqMDUXpJHP63kWkY8vujuFb8hEoN477VrvkMsr5h99QVLVd",
  "key9": "24SP5KTKbZYUYJctgJEPRibTUs45coUYThYdtHGKQTzzqCGMgmDSWtrb9VTksiiw7f2L7JAvw2vKUcgo7Ldzc2xH",
  "key10": "5AEHQpwVjZA8Mf4xvGSZ6PqaabBvUBMGAHH9ABD5uBkMCtFYUqwUEnAxg3aMsthBvd8oPCjRZQ837gcqJnze3EdW",
  "key11": "5Pio35xdsfU8x19yEfGYyFqQToZXcX48kmFtPr142W1ZPxxLiQUh4EvuQkrC4L9NoyS19WkjBLB565Qanky2Lc9B",
  "key12": "nHSUN2RCmLwFPnN9QVE2qZUSgk3c7nL9SHci6wrNZDqJJLjhPEGJyYr3i5HmZVnZCkxApnujy4bCzHBdM8WqrE8",
  "key13": "3pJxCSkMcf8Zhg1jNVWxDnCqqwcjHcAztg93JN9XveFTgXZjMdHbyTB78fn8UDQY7erX652Jpvce1ZB6NRpTF6N5",
  "key14": "6EKHK7tBx8n2K8HTHsqNYzCo6eQ3tcmqSjQp4o2KmC4mHZ4DFLWv8rDr3764jMte3SxSAuFjMmTrGu2dJmdS7KA",
  "key15": "8u4fwVCNipYBSmo95iq5MABhwyFuCRC1wC3BM4iKaYhZEBF4kVJ98Zdm6RsVeaPnWKrmf2REbanu8zjtetaGsGi",
  "key16": "2Es4hqZxyZdd7aiba4H6LHt3Vv9VHe5TeCSyyN99qsC3k9fnysk7PtMRfnEhx3YotuQtreArJL219QXoYm4EqY7k",
  "key17": "5X9V3cWTtxazFvuN6XUkBgbUBeZ9dTnR2vowKXGoQCmgSdjN3HBESyxy35bDsPR6h9BaefHMnUUGpihbCorWpBL7",
  "key18": "3becUBaFTpjMY8RxkRsUc8TxVUMTF6TALBRJdzav1Z5oHgZHRmD3yVQ7BMQjFXUBF7XF7yVX8Njt4Edhb9Lue2J7",
  "key19": "3PH9mvxtRCrWEyL5C8CpUcr8pHaunzxNPqjyFQdVYuT3g9r3jzas4VdzobWKWThXBiixLruWueq1JkwgPh1aPN38",
  "key20": "47rU5AwaYrpszeePQt9B7G4oPwTTdFeh6r1oxBEWTQ5bo47mMWePBudMWoxJNCYPWoTR4eZ1TM7hYUgrBF7eDgsw",
  "key21": "cHE7TjuT9caWWuhvPFnz4fW9oEG3C3sQtJchGML9xWzXsSt8Lnzt266JAQrg9CoDz2v74c12wwGrzPziuo2cwxW",
  "key22": "2bRyezeBajL5Qmzn7GPQzdogB8wVdJTTfCytrQombfQt1cAe5JjauM1gteWL5TnnXjhjbL62KXF7hX7TtZGnn7VD",
  "key23": "3WV2KZutW7sWdb2kTpwZkueWeKd9DVmWJqtMAAGNLRaRVfbz6CyoHsnmJmUX4Rxtv8WK7oMbHNZoCqsAKxjBdiXZ",
  "key24": "4Am4D1MLmwRGnL1zrjv18ToDx7BiyQkiim2drqv1rTHoaCXgYo4U5L9q7jVaPKTW8XwAncFtgZeBp7FbcMx9xTu3"
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
