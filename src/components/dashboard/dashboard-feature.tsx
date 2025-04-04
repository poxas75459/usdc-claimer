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
    "5DGaTC2Q6FN5r9bqUpZssrVrPj3FbLxY6PriBpe7xEFZnpoWjX5QVkH93p2k57rX42cqcvavjTFbbXPjrGDnoYsZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yemBj5D3UxG52XmTSAMPa8U8qpW74QwNcKJKmtaWfKP97ifudsi1Fc6Mdp6QJ3WZooNEUfxtfgREMEjctonUi6L",
  "key1": "4xFeK8UtQpp9tXaaGBSMAnfiBgJR4YzxdELKBXV7nHdzNavexCUzTLfQNHrLadhvqWNMsNyyphmbw23xYbTL1ifh",
  "key2": "4r7H1bh7brAfJrS45qfGmRGkPuE72yQeRpM1qF524QGtAyqVEUgMSnYK7LLn6aTCToJrbPCBVZVgNKWB9FXfSSCX",
  "key3": "34xjJnspVATqxgczw7Qyesq9S3iZ4MVwkuyP7Ryqxq9uvqz4EBkqS4HgzHUsztYLF4HThVPUcBUdUg4AYZZbMsZg",
  "key4": "5zBgZhtuSxAGvPbqbfFkjrvfT3n2h7oDWQxyW6EGNxtQBHLrJGfeHAG6KGrX1Nz3fWzECjGFWCg72cRh1JYM9Y8",
  "key5": "3VwpzAsVwnmv5yfh1Rzk1u9gmmDngEYHSRxay6Ydnk9odaAJrLnX1USb3MztGLtHRnP5SETR9LSxN1ffawS3Lvnz",
  "key6": "4tXdaZPFYE7DqNMYdeeMenGdS95SLRKq3VSbHbzqedkJ2PhJqT7uxdH1WbZ6CEQJ5BCfc3eqEnuXFfL9rx2cKbLX",
  "key7": "5ivUbxRfoZXsmUMUQ6D8iLNVYrzhgJFpo9Sdd5Yi7to4vSZaNrs9YjuUWtS3jRLLMfaviqg2rawxoz2ZhA1g8Vu",
  "key8": "3nT5MqqLmBHv7nsKQEXcvT8uatv3PTvFSDDkvxfpYBWrbNX3BCoyF491P7TxyWZnCw9j64x1fLTP1oMixxCf748q",
  "key9": "tLBr44sYga5aby9wbye7oUdfpcGeTAodPKQxf8KBknFLTHQDzqfXDDpqRfMvU9bENduBZiet7nMAdoniPsvzgGS",
  "key10": "4pkUR1wJKWs3nix7q9NN8mtkrRzA34w6LafFLREHnmsavTgN5yby2TubmYMyWRVSimRnkE6NqQaPCGZ9FQnAEvG1",
  "key11": "2rSe4k7XZWqeQ9eZ59ehv1rw2uqQkE9eLwfg3NZ3AktTequDspMYWQYXV86P19y9D3HdBeTWmtX2BhVZG8snJM1X",
  "key12": "Ddnap19nZzQwtD8FGAPkwbqbXntXZZKKDSJY912dvqDdD7mJAD16o9m4hc2CGZGW8RWmmnAGFQnwoTuzFDZWJkP",
  "key13": "2e6ocAN6A3JFp4kw58mLjr2DwpUtNbcVt9VKjN9yCCz8TA4CopUyM4w2jfanN2FfYCcRGtZegxepgNv9s2k9xofv",
  "key14": "5F9CNu2D4i4ijdRpNYtVf7vGfdjje4RqEHmhq8QDqxPniSdePptPxVD9v1bhSg6rhZUvAJihaiU9xgzTAZisSCpB",
  "key15": "AcEVxfWcEXXC3ZiPtuZvYjGCyyizW846B59CjffnbTW2geiTHMGzbjFj6yvx1L6TEXpQaJiuj4dNSudkZosVN4L",
  "key16": "5Wva4gMvv7iV32hus6NRWNTwV4gHNaKtsB4MEcr9H4wxb891GR6PMeMCLrz9bWY2t4agTBYDGPo6imV5tWa87uUH",
  "key17": "2hzQgGVCVbFM8BASFBdXrA6w3chbLtazLk9Wyhc6DTdYyCKQiqPeV4ZgPsKyG44aNW13mkAU56NM4hrUFR9Cmvmj",
  "key18": "3tFP86eKocVZ8g3JgB7rzYetgDpT4LDvSbp2ZBL6mZ3MpPNQbifZ3X9JpkCFZGoVN2izz7zyamFk6VK61L5Vgt28",
  "key19": "3uhYv7y1qQyye6wJe2nWj4ZUo8RJFMxEvPtBVDHQbDBhEn8yxciv4tTN1TayfTHoz7t5wjkKvKX2opoawhFB7gRh",
  "key20": "5fKDF7sM7xayK4cuW71hckdSEhDypfVbaF4rDBWmDqYdSwkkPCiTfHtsQYvbkCC9q8B8YXXayPwKAhNmrFJx2s3d",
  "key21": "4xLDYW3FBkVo5oKN7qdUaCFbWTpZb59WaEQtPqZB4jbknDWBaTSC1YiaskgdBL77pDrxYfLgybpgsWSJxmC5uyTg",
  "key22": "5wPpWzG3DxEWkwi5E87QMWPJGE5wT3ihhaJD7hz5Vcba4ZnczLaBENuw7rRfDU1jGzj5hoffNycnaqVvZa6stYf",
  "key23": "5usMWdzTtiviXoMFB4E3aNbrHHBX6howCzk8AzAESoMfnReWn3ZkyANR3CbBwSEqqsFuo5qwS2rVyMgbUPxKjha7",
  "key24": "5JGPoDw5p8qBrGKTB7KaFSNQbg3moNuauopFMeoAy9u4cAmopWGccx5jgno1pZqDz8JLrqyEbMK1oFvQ4YAWX47a",
  "key25": "3FhnkQXGfLMfnsAGUkhgrnVR6C4NVaMXjQNd8CguypTtoRw6qKif69orCddpfCmaKmnimYdPxWBz5LpZN8YGJdq4",
  "key26": "4Nb8H7AJ9CyFmafgE1AzLvpsyhXjJjiRRo7LKc4CzwEgGbETDR7A3w3zvE8HghGb3FsE3dopog9gwS45iuhsUnTB",
  "key27": "2KZHijdCKgyPq6GH6ub5k6WAEtywqkHtyqd5etEpuDe97kFJ1mMGJnHxWrjzkvGmJ32Y5Unt9T7K4Hrknsb9UHQC",
  "key28": "5sLBMA5cTUN1QsrpepBrk6VipB2R9aqRPtLp3tAFC67qJ9q5SAq5AC6wcJQhDq8S6wLonRUtKDQ9tCkVbcQkHWsN",
  "key29": "2Fzv9T5wT5b6BaX8ZZPSq1eBDgj1pyWvy4PhBBHYzed6Np8R2rpeRem3rE1dBQXT3th3g2vgpGvARnPpBwKCLVdL",
  "key30": "iMkT7bHhHydExhKUC7EfVvmaGdE67Xn1dZ4R5uu5AiFdnqF2vKNQnkWjeaUhJF4eHuFESaW1sgDBw63sTEg7F8r",
  "key31": "5cBiB382Q7o92arvt9Mp8vZqapbKCVcJ2YKxw3Rr7hfaEC43rwmiZ4YhhJrXsaf5L692pk4BV4hMzFEzk5TXHHHp"
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
