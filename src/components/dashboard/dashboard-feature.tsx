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
    "2zTHmufupx8t9xXwwGGCNonRDCpmn9Fu4r7iwowvbKe5rp41hhyfyuZWf5mkz7cME4PYDtLTcwK9oGbKMf51KSrs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63und24riFMK7ZkiFEd1rJSzoYisK8R7nX7je48nqsEuBFRPxYUJV6Urjj4pTGt2k3VqU9DiqRz1Q4jfASJA8eEC",
  "key1": "2Wnfp894JaFmxeQgDf1HMwpbvGJXjMYcReAGEpc2QXjQ3dJEVr2S4pHegQDuovzb1kBhjmMwH484Ee4bwYh2ru5B",
  "key2": "5BCfyc6tsHdrMLK4i1j9bVaEkQKExvw6vxeCFk7ffTVbnAa9w6hv2TAX1BMzBL78nFbnJ9MLugqVyQx3M3R6sUqC",
  "key3": "3oSgL6CdWgNnLte1SwirfvHyqDWsbqk2ZUYuXvkMTR7bKY89ubGpyrkAdR4XMLqUqSHqT3h9PEv21BYaPLYWWx89",
  "key4": "3gptSYiP7213K7JBWiYgLzdhpC3nruMMXHaZvqhHvi6sJQUSz7pjpeKrpG5BufGnDGzXeeNugikjJMLdPNQ7Dn7x",
  "key5": "2Da9Hvu34UiSZjKsE5e24yb7HRZqVqr34g5ujKfbkYmBTG5qyzPuaU8oPSnjRiNERjKTKACQnviZcgzMZWUrKgcv",
  "key6": "4QofW4wcqUuDBSowJ5GjCDAeRhr46MMYu9R6sC1QtbUUrrPTa2MSCzeiaWbqYbftg7q2xUUNMhDqXDQqCw1Yj3mv",
  "key7": "3TtToTUzjfoFdT9FxrxohpBuh4JVRiVdDFUkzce9Uu37nk7RdwAvuz9HfaDXZ2ey4ai36YJxYcrakH3Vdy2VCkJu",
  "key8": "3B7jGrGiHP3MMmba2bnnhyAFNp4dEdBCTy1pVBtCeRDGZcfbMMWMdZJA76FybmVuidnaqoUhaoUwjeduzdK2Vh2U",
  "key9": "61DtCyHNoFEs2zYcqZcuJ1CmfRS6HUQEkkCemuWQEofmhMizWbBS2c1ivv9xBEtpyZTNjJ1mJCvyJ6icUJQKupij",
  "key10": "MRXHVRk6gChQapxQW7EVAbNVNywEbdsApgdUF7oTgLbcPrG2doTRwMtP6xoEeXcELGDh5jvsrdxPdVM4ZHAubjB",
  "key11": "5rX9REjxJXekM87a5T2ccDAvPrZVdRQzvc5d2Lva1esFdfDv2SXcDsULCEzwCs9mAVZkoshnuLNruVnpq1ofFKHa",
  "key12": "4xbANmggVn7TL9pPipgzh8xUscz5NQxQCNpbvdH8syxmCiGpgwKakaej8Cwxdrvdtnudu2CT678WDQGJZ4xHXLLC",
  "key13": "22ToAncCnqWKqe8zFdCfybT3wXSDgm64kiJJ5FU42wrALF2ZMFoddGqb9ueWfbEUQGweTNFV4Uq8JnGHZMsT4Dp1",
  "key14": "5jAmpQMjXkwH3pmVf15Y9WZspgaFENtKz3s2tF7q6818NrCEXBVPaaahhmjkH42ppmFHoT74V8zdiX7MVpq5NFq7",
  "key15": "3C6rJuKhWUznreTumvBY5WZ53hTHB8VSVNMv91ACmhhrQuo2gTjwUheUEStYs2DsTYaZiriU9KjGCmhEetBERyUY",
  "key16": "3Q9M2CX5VwWufqqHZ9ShUVMHkXbyLToRJEX77cisNc3kX7FYGz9kRxCm6TUGoZGrU5ubgo4fQz3p7LXVuz9muo6f",
  "key17": "5K38odfNoLfmw1LTGssRBBoAFCYm4xUTZDxb3djmJbDBjAcXe2pctm6xypvsB9RivWR8eY1XFSj4R7u2YtBH35p6",
  "key18": "4gsyzqrT817courpQLkDMsV65dn3tJXitEFdwRq24SJmAU1C6YsdWJTupinF6XtpmiKkYU5ujUnuPUCWta684JSg",
  "key19": "3qEKwh4T79wrFs4yJGWTfM5TKiGXw4X7R7chKhKw5t9631jFWRiqZyCbNiMJgB898BArKB9kR4HmbN4w1PBTJXqb",
  "key20": "3XTogWjBcBh7p55nuMu4RayKDkZxvftnjeGLTNi68zjPPpnHHL26SidjuWRP31UeTz3gwmQrS1dWdbFqpZLcua8r",
  "key21": "3FW7QshrLLYopGW5S3kKy8SnwBJ3HCxHpmV8vU3F5fHHUqMvcbDMu8LwT1d71E5rw1CpeQNcTkP4Y5PKU9qj5gLQ",
  "key22": "5628D1phxgMY1nRpkx9G72E7hR5tQaG4jrmsR8kyLJ8BbhLw5WgsK8XoXo7v1Ge5a1std8H9nkGVWsK4EPUPDDSx",
  "key23": "61PBk95QAeoyzsWZ25q9CpJS9cqWp7EX7Wed6wA4K1Jvdd22d64mCSiUNAAt5AukwKWh3dAasNzzR8BDwKxcx7Fg",
  "key24": "2taJ8fBmcq7BrsVuhCEiC53doMgCyrBA4x3Fk3TagexnUowZLVazRbZkmFpnRfD4zUMDnwh4aup1Bw54tAvhBJhh",
  "key25": "4pkMSPizpuaT5TM1EjCmM4mTZqDvYPkbcuHB6HyfVDBE8Ldrn1aKUvBxz27H5r9aWSRwa4EDtko6DFznwYhf4cLX",
  "key26": "3y1rc7kosucRgQoNBZbYr4RCehqtPeybdHHSxfYb2uNU5fTtuCHJa6dXNiZLgk5j8XFibiXPQ8itQNeVSoJixi2N",
  "key27": "2XSZqdehoGzaecmAjnrbAfzeQmbotFiRm9x8TqRuhSyoqAQ5XmREAFhi3FcnePicNPod4GNBtPV5HzJ7bNEq35jN"
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
