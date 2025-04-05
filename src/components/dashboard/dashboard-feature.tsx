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
    "5o6UGUSXAeTAEPvCMCF2ZdmnBDDk5qn3Me9TsJPQMQTCRnr13ggeX334e5XTcwQ1kXxzZjtdh55VAtr5cjXzgEsH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24DfbQ6ZRAGujAbBDnrfmaFu8LVAhRJUKXJkSadxKryLM4DdQRX5rq599XGRk9cbTJgAr5ZnFxvRi8G6g8z5pNQL",
  "key1": "ufMNUaRa1s6f5YWPnHJya8eiRwgWsBxbkmnb6RacrsyUsBKuNd4BAYuW8hTpuQdEGTMDgzvJdgNguNT7wkBbe64",
  "key2": "3ckg5sgwV9H2iSsLzvCNY2qgUk8zvdeewYujVyxRGR2ZM64owQSYVjvrEstv4SLvzsZ2o7zN5u7hAfxCSQv55KG7",
  "key3": "5UgqAiuVtGzDGhrdiDappMNZVRn6vT6jn6koMGcpTTR6qiccY2NWDkcfGU1vWMqUgABf9pnnsk7qMEqu4TALVMK2",
  "key4": "2NSFYbmBywqikLDDXq3iPBsgr3Tx36t7XMqBodafcXEjBV8752ReMQUG1TXKMrazTRTD8sHz9PJypK7KnK1NbjLu",
  "key5": "2otZTPStWHCtKLh95QtqCcsiAuxyuQdf5xpxcvnXs1XLCmWAFU5fYruo1CJtuNdbXjWL98GUWiqzdQ6EVhqRo2mz",
  "key6": "2Wuat1NZKFgjnNSrnRAp4UVFpHdR3mHBVRZVUG4MHpXuMAAYTGxStCsX1iaYBh5diPPBswR9gBDHzQFgR2GBa21",
  "key7": "2NZaBdq6gwEdnnKhU7bLLkQK6uHPERqXkyrsNWzAvDz9hzNdxLDh6PL2aUoYD7a8Eh6jjwygNUff6y6cy3N88oFE",
  "key8": "3zUfgcPW3kEyG3gxg7PVng4c6W4dko8X77SGHtAT7RzcdVmXPx414cQpMTezkMdE98gWifiFWaptPSt7EzUxLzuH",
  "key9": "5eW8KW7MYLnryMGpUDAdvZArTQi8SvTheCs6yEDTK9oGXgcdpieYV2jJv3sHaz5KjJNxpRktdci7PwgRsujC2Rpv",
  "key10": "7HEJPBBwBrpdv8NFiSU3PauJYp8Gux9MRHhmmvygCeNhKyoamXDZJ881bmxoAL4PEBLdpmLWquPkBvennUoycgz",
  "key11": "5Fmj1CGp9b375GmXGG7ZjKc2ZnLHWLcZ1FK4LCGmZWqm3WD7swooN95i5kAuFbVrJsNB5gCe56wZFiuypgq3cqam",
  "key12": "5wwvmRuhRcDvV2xHkiabCYG5r99MhdtwtEHJahPESrZbx72HVCy5mR2EKPvhk8QpcnYuPwQcTsAhLJQoTrePd4wj",
  "key13": "2Z12UEppDrmgANA4wLK4bxvPw4VfNxMW4gesrFWYNKb3SQp1ktGgEuHnYmbQXY2zaGAijg1GcEHP2uDQpzhD73ov",
  "key14": "416qS1GkMhy7mi78H3ebL8v3AsDURSoRa89j8APaxonhkKwpXJxRjAU9X3FUTQAS7nSYCVYZPykw52AVCxUDC7HS",
  "key15": "5j5HAwvKAGr7GCRAqac75mvfKURsKYBPawXN96qkMkceJGpmZyVaawt9e3zjBqKM8cfDrdCic1os8geT71voEtW7",
  "key16": "Yw2vvbZem33Y7JJtznVkQATPwHfPKDVaCudqXBzmvUyDu4kfLHz5MFYx2uc9fdKNa1kUf8sRAXxbdCpJiB5KzNz",
  "key17": "4RSjTszp523FEVPckvL22g4tjUwMCenbWJJofDgaxMoXLVEWycuXqzpe2Kq2fhnxri3zu32tqjCTZyLqgfbbKGDE",
  "key18": "2P3t9yBAfsZNGCt6Nhb9NDbLbJboYnU4sr8iGAhDQMLhysKeuNbbjyqz9PKhC2hiUBAkEfwRNBNkJXSapcxUHbZU",
  "key19": "LpfPhUQFkra6Wsh7wHcznoTEoFSBxhfoJZqfyiTzujv1PSoRLf5dmYdsKVebVxQmVe2F58ttvJhUQn1NMSwp6BP",
  "key20": "4nNPDVSmVc5AdLy1ggPqW8J1W56gZ3j7iN6bE4dsZhDrparx456pNpmu66XVGNRRhUhr31AZEJdN5CrrHyVZTp2a",
  "key21": "3knbmPBX3Bo8or1aGsa4uJQ6kn5M8j3RpPsTNNVzQbXmECLpGWyvECt3FLHxqShF3SqTpPuTETFGM57LyuaxciZ9",
  "key22": "3LxzjGmUYMUn69vbXWA4nsrLii2gijY2NYzq6Hx95qGJHovh9bULHDk5CQJzUc29m3KEEZYTt2JhvxbiRNv54zft",
  "key23": "2Jig5Txh24x77vYZuQBZbqTy9FH3ykBFXz7Wv7ttUawwSJCm8AD7PACavGp8n5qnjkyuYr7jmfZE6p2rZFLDH6aa",
  "key24": "2FK1BcXqxsrp5vRQEN7HqbBZdRwfRUMfVt1ZyJsqTyJS89phzpU8yyMb9ZNvKC7iPMiN7FcSiSWaZjXMGimrZxkn",
  "key25": "3Vo6y4VFf3h3bCxEbZyrDnFqitE62Cvco5u1tRLbSqa2eyCJPgPAixrqJy5XWSjdHg25XWospcJdBUABpMaTN8jv",
  "key26": "31ZsCwX1nwnWxccTJAfvo4pcPMJVkkFncgg8ivAJJEfYXGp1oFVshgEGDctEGGrXh6woU2PNrK8MQ8mg9QaErGzS",
  "key27": "3LGsCgCZtfWZ6Kdq6JvxXiRatDVn751v3d9VARyLxhqeJU57NauTCtGqnbBGqhoFgURjifhWYzx9yVBJmwYvQ2BC",
  "key28": "5WuMEinLLk6rHuUZG5yA46gGS19chxqMBeuc8gDKqxWr7Q7SJfyGsMEPS1Ld3cyViWQAuSmx1YSnV9yb9G1JRufU"
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
