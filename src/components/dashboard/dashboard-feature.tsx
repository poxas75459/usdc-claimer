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
    "3sAbh1UX2SQ6vjY22mUdv3JpG6BcL2xi6B8BLAHGmRWsEdEoDPTJPBvD7HFTZdze2xwhnyj7EaAZRx1NEfQgQFxN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33u8aCHzNUQvfar8oM3s3XLUH9c8p2PppTKfWyqNCaE12nRmzETPbwaNh8fVF1YqgT9h9vrhVBTwH7Yie7KGY1bb",
  "key1": "w286DeLM17HUkmnJWJCDvGU1kLzvsXSgbXsgjBFB42GfAoryzygxePYxhZiHEbqmN8btXE1qhq3QAjCaMYYk4x2",
  "key2": "3k3bVFrojx4aKRj45K8WNQ8gGRJRESjhNv6beeFPPWyzbEmKRAbxYZyvXM4MwSamu97E2pVCXsoFCxWAEVG73cH8",
  "key3": "21zKyQxUpwoCZFKC2QbSqpueiTAZwufaGf7TQbYCn9bmRP1AW3hUXMk5wHKBkeAAZTY2NopVNBwKmKQsymMiPdtV",
  "key4": "3bByDUDnqvREzMPJPPEwHyRvyDbubRGgBBWaS3g9qzfoXd217WTMEVNFN6LF5ij7qkJHWJ3mur7tx4WwTWDdWguJ",
  "key5": "53RLZSEHf4DiUaVm1FVhELWkr1C5gN5HLUfvGwtd62X3yGBex95tdTceCJ8C7btvAgHR5tZbSauFynhTvBH7AqgB",
  "key6": "2k93awxbffthrwdnejWf2xewXrzjUAC7xJEWdNX3Afsc8rq27xJ6aqiZKEMwpS2JBVXnwZJpZCFwaiSMktWHArLD",
  "key7": "2Dn4M7nXShjDDoA5Q6NYvrRCpTy3FmY7oAZFYA2Qr7LdkebapNWi3f6P2KXoEoUKdHTsh25eM64jEe48pzeqVpfJ",
  "key8": "2vaQmYZZ3FMpQ6bre4mHMnVEoULyXYX65QiPByAC8vhmifTacRUDL6nErEeVa8kgdzc95K5RCaAsaMFY9sQcMbkV",
  "key9": "59FkLjhKzPYeNLGmxLGiG9ZitWxe47DPxFihZjzHhwyg4efTJkA8NaSfTmZt43cL6FTcwcYPxAVNUzCet7XufCh7",
  "key10": "355AHjsPXaFuyw4Egxg7V4463S2FWHnSaS4PCvwZRnxY6mUfPj7tQZA174BKCYn4MsThoYvYCJmFEYKXeyUjodLa",
  "key11": "pJxVnKYXyuCqxYJ2MpxoZW9L6mFQMAghHTqBT2pUHJBcrXLr34yToqbTWTw3q5H3YnvxSnBDEfZCtnKQXq5Yhv7",
  "key12": "3c2gbJVJBqGTQSdWTP82pz7YVv6oEg6p3z8eNDfUWyC6wNNLmeE6L4qRoek5Fmq2rxDy3sUTC7ohTPMJvS121H8E",
  "key13": "4Npmfcmo6jwYdVw9d6wKeKM99SBiLtXsnLqvHqAnbrkjonqSYYWRB7MfjAVgDTrVU2y6cFcGnamBbUMajAgJG7pd",
  "key14": "wX5BZbJaBfFMyVMa4Y9pq72v2p83cPxHZ8eFiNnG6MXtzoERftZ9eAixtdtqBJwnNqYJWWSD2TTBoGFDWRTUXan",
  "key15": "3ghoKwupnzzD57NscRUErXirCUqVHt247SSsYMFs25ygxnhpr6HHYa2T9mZnm5p33NmAeeF6pn5Usc13UpVfQZZS",
  "key16": "35XfLABvZaMFBGNcYAK6gwwpcbAtiTt47vgppCStQQF5mMuwaHqo6Ppb63LH4y5dnaf34kzoNaYiX6YsTbH4mqj1",
  "key17": "51PZyTcPMaXbdJBjY7p3p9cb5QtuzuRVe3tKJDjVKCMkNbW9FeeRxf8gAptUczAYotCTMkFy4nWLajVtSayobwME",
  "key18": "RaCASGeqDtp3stdkDqKwGYFQfuiBbnKa65VxFYAYrQjfem4iC4Qk77CSL3ZoJcgsJzE7xqj9yCQWYi7ocQNA8C6",
  "key19": "2Vi83Ak3UPheVoYv2HBeqGSRnaGAKMwg4boqnLFgDTfFtbfqEk8weJQHJEVh7M7Rvuh4BZG8KjUCZ39VRe5nVuZE",
  "key20": "1phs7NvAsKpGghbQtyPiuVAqkZFNod47kJEWPTecBaYqiuch6bAHoU7VR2bmkDjLzV8h2oD1v1P9zYFtiwGB7L7",
  "key21": "4iNcfm4cMZqsmG2DoHRxjs57EPfzQHeZmqSeZ45eJSzeSJa83Uwgqd7Qy9rohWbdbWVz18UNmZbAj2CBqwGyvAiE",
  "key22": "F6FLtEQauHWTiAxJU2qaR6epVSCX6kLpvH75cpnmd1qVcsVsryaBxhwwDw7YXLwoD3dzMjM69SR9KBqnozupqbN",
  "key23": "65xi59yEvMz21S9TBu2WHfc6WZ6FvnnX2QY2UkNThBcaJJQ9peEWu5JyrTrzEt51eAfJXVna9cCVyu9ourtDByju",
  "key24": "5i76UhCgDvidVEFGxpNh6XHp1RZNhQ5Xq1eNWVUi2opsNK9pEPhvhyDdqiLwWMuoPtVnrokdjUBR5L7oEfUMCjzV"
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
