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
    "55aTwWxtzrUw3VUbjjKzWSxhVBb19J1eQH9QWSmuVwbxgq1EpDMGpMqnc9mweZttT2gRQ5Y7DhozEmb2eicU6Rjb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Xvd7aPfe3r9fBU5tVbBxrjzCtoZAAWsv6bfZ1QqV7DzN3Et4yNypff55EoqwKxMBrgrP8qG9pDUs2xQbJ48apQR",
  "key1": "2euryC38TqWZ7SUgwU6v7X2y6qJUhTt783AiPKtk5KRZiCV6UAHJtbXeXZALkgLfrEqsfJqDf1fMTaz7ryoUwWeR",
  "key2": "3cfVwujM7NDqnHsfEydoVx7koopueEuxidsg8XF54oD4WPz4LTzCPb5z4RydTPbm8uS7489punBJvBBswETW92DQ",
  "key3": "5FRJ9i5J3bYAU73LBJM7RN6tVx3KD9oF8iKjbibBSP56EPZxdnZeo1zS4xjeSy3R6UZbHZ48aKj8CGssrqXDfkzV",
  "key4": "4pQEnhHkem4GfHDYcbgAZv69QTef2rU83Lmtpg6PbHwUNQuPikmBH9Ls5XxqG8xrAztw1KwZRjDP6hbhLoBpdENf",
  "key5": "2ik4Nw5pQqG4ryF2rxdRETK1KVnxU25XLyazbiW8uRQnzyS7NUp1CTzogX26crvH4je6rsrMuA9sVENgdK6MLiXt",
  "key6": "5sunPSoUQYF1sei4GBbDr741XnzpTEjRMjR1dyE7MgjTzzr6TThoB7SyRutj8kMk95bZnt9xJkeKZdMjfM2QwuuD",
  "key7": "3JGbpyWZ7t873E3mM9iDWzS2xLczE4zTzVSMsfr2yidYVpMfQfT7bd2y6CxMg778Eah2pAzqpoxxCGKNtswpj8BQ",
  "key8": "4EqGLXT8KwphWkz2PSajUxWqKgKKtuKzdgL3m46PXR14EKR26PZcC5AzznaPbd99UmLZ2oHE2nQYAeAxswm5z4uw",
  "key9": "5o9ZqzeTMbn4k6J9n4paXwTYPvS2EJuY4mT3G3eDhf8oKnNJKG8hxrDkM64DrJC3PLr3u9i1DR9jqad5A7UW4dYc",
  "key10": "B67RUPteH3DLAgJsgUdJAQbffj3kQCBPJ3h5tfYHwTAufyVZAmGsgvzVccZ67UeGFjzsWHYdkwqd6he544JkHGL",
  "key11": "2kYvx57knGBWVsDCBT8hJnoWkvNsE2Y6yvz8brTKCHq1i3R6Aw3B5Mr8seuaj5w1ceGf3386wRPeJYC4uRpXhH2B",
  "key12": "4rGHxkbbSnXzd6Z5BitNanMuKU23YgSgzZ3c4foKFEvkcUDFY5YCoGxEsALGT6KPKw3yYxGUFF8Hqy7CxA2Z3PGm",
  "key13": "4NCsxaPCqNWJSfxU17Uv6nZsNdtN9SxhuH6ipyXeENiLy9JmSjQaXLjCFaVG92FjpUrSJ9iLwbkiGBULCgaacKr7",
  "key14": "BKWVBt2xVZ5heGpF9rAzNc8evtUVCZXWmtb8E7oZYdj5eE1XJBTrFPeCiMXZXLQ7hkapLdfo6SNDryvUAyxDQx3",
  "key15": "5BLmm9SV7nRveuHPZx1pSGm8xE6shiVtaMvTfwn3NacTsiKvGRYisAa37q4EqGwfqRjEUDbUSF5rJAuz81WyYLti",
  "key16": "4CmbC8VEMUUgcThLTJLkDecbKKL4auU3dm1R8fdsSoc4v13QRjWJwYcoLjmewRrniJzkHmRi1djYt1ivcN1Uo4ot",
  "key17": "GrqrDCUDNqL4CzPU2kcBGwoaS8JKePFUj4S1ekb81wqTTYmvw3kxsdZRG5YB9UnB714w3dF8vH4VuyQt3oMZLLV",
  "key18": "5Uzye5byeRF3bVEkZwtRKQr5csHnKKNqonYZgtbKEberGyDfz1CGxFqnH1oYjBN2ptBqWVajE1LoUSfu8UnGSxG1",
  "key19": "5FmEi7NhnZC8mcEyieuzB1rMwUttkcZJKN8UoPkbpCT2pm4R7aHPjDoL3MgEHz1xitufr1RURvWfnk6jBvQh9riT",
  "key20": "S4AQiMsGBwk2R7TZT7k9KG4mgP6a5mUr5HqkjpJRe2x4qRu9uzHJeCx3wRsF6E7SAoXM9zxzjD6BdWNJP9wbGbT",
  "key21": "wRbad41yMSM5U4h8PAbf4w4uV8gpLiFtUUnu7hbhbkFn862rA4eNNNj6PP1mLuMxww9M5KdjVd7eDvopnU55yxt",
  "key22": "2zxGXxpU3hRhJiPCBninEh48thQKnJw9mv5jnWh9Y1LE1cLSCFQcfm9C3dw3dEEATJ9MzvyR2mY53x985L7CFzC8",
  "key23": "4J8URejresQCmDdsaDyNSsh9mjT67uxNuHzKZ1BeK8f1d9w1iNre7qaurLPfqQikwobjGk4VtVru56sEfkfKooBn",
  "key24": "23hKSo49h6p3rv3q1xBHRGWc5CQGrc7vYpsC9jdPs84fUg1NbKUtoosYFU9DiJSS1xFpgWgiSJoAmxz47T57CGmx",
  "key25": "5MRgew9Q6vZysubB3J5BCWB8LPfM1ydzF8T8HVh69zSVoQkyiiBHfGktmaLpNFBqhRFhzJtMKMAc4J7e1y1JurQL",
  "key26": "2gnXY31bVkyAaVMN85Ug3oiVQBBukeVTxDcq172gZytyXCxKAVjqnR8Y3fCnkbmU1sQ5smjuXJAVcCAfjVjnDcNq",
  "key27": "4kw5a6AUTdb28Zt9PXnwD82bbsofUAAvrdw3pkM5PTp9wu1L2bnHgzutL1rMV2w4ysa4A4EK2fSzNd9KDDcX73TC",
  "key28": "5NA4j5b99CDbLEey9dxuU2pHLNGz1sC2EiGUWBZJX7hs2cFtMvSF224iiMS4xm1Jq2caqnW1br1zjrhJDLWMpr9R"
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
