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
    "4DWHKromfuWSVeFJfJgNWwkVkt7rBpMnopaBSzy5mP4sULSqYCCzSrM6RXLzTFwTFVTrgj1XcebccXyDGMEqsyE9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xWbUwLbT9WiChiJv8MrgqVeAiGf9f4B6keGKidb8X5UXscE3BATXpqJnNXgZtJXca9TiVQEEqRbvFivVXsAehga",
  "key1": "5vvHgLJihmZm1r17qcbVFW7Py9AmsYW274X1ounDKeCu7aonGKsq5SGP8fWhx53DHq7eUGfmyVQP22K6WYhPYxEL",
  "key2": "2H8aWkZEnpQhGLpbdb93PrzG5g5irFNBgozE6yH5nSJuKvgyqAvwr8kw5vk5eiv8KFGYzzaD3XCNiffrTjyVXtbw",
  "key3": "LJ3x1eKGDxVvWPno2i4jyhb843g1Vg3ntsGDMEGuzBsS2F2RyGeHAiYfgXJgPzKKmAxc5ETi69wdyjmJn8CC1Hp",
  "key4": "2u9HgHRGyzz73Mnmi8iSmJBH6gmzpAqHYoQDuR7vfHUrsjCLZnESTGtFg8duWhZdRn5TzY99WaxQRuugxKSBZRFr",
  "key5": "5Ay63c1m9owCJrs3d1DGJVTHMqEfadUqnPSxi5jkhiGnYeTzX7qKJ4VaoYfVa9vFB48KvnF958MiqLjo8qhhWcxA",
  "key6": "2VjS6mkBsYVQKq5zLFjrTRYpfw3myrhkcuAEjw11MaerkmbmHak9kiYwq4AzaKbrD8BoPjtRLa8QTVvGZQPKUpwR",
  "key7": "4eLZbFW3rkoS9i3zMsRjBL8qEpa9HXAq9viCky2eUzbZRKrmCJ5CVCcPvk8JrKxrjTczVUM7CD98N7Hq6fffwUkp",
  "key8": "3SKEuPRUzqEZ1ako2D14bGFV6d3TMnCdqmtBfDaYNP6vc7BNBrTR3ggg5QrryqTV6uGw2hTeWQTuF5QiWv2QYuAY",
  "key9": "e7U8jRZ76dm6z8Mf7imy3jjErPw4wgC6LxX4ofFKJarA3q16CL2bfT5uiqkJVjSvrHS54TSUxboMfFaDJgLD7ma",
  "key10": "3ioG3gESPFzvbcqyMpNgWvnhKe2XVyMAhcMeVRLKDR3rdr6zFok6ZKWWEGGeeuAL5Gifab3eLzJx2JUHSxcR1YWk",
  "key11": "5GHZiLnXVPpoSQDkbu6xTYUvNfWEQ3RD2Kc6m21BiSwEWdzYcSVtGCxzE5uMqQmLpjjoFXuoAFSJQt2o2w7abAtZ",
  "key12": "4mxypNQMm4A7vtjgcPa85KUPDHszjDN9s5Gy73Go7TvJ7ChJLri23QQBjmdbJjUfV9482ZbZbRGe4dccwTmuQdV5",
  "key13": "22PcfhATvFk5r9YZoq29RBWw91V8E3zbYqYncQHULncTadkmsMSQnTWpgPuojRNyyDeSRLzCTeCr2ojPJ1od8pXk",
  "key14": "SxKSTLFubBreHDheDoHda9xpqxdwJzWaGKUGRSueamDYmDqWrbmbS6hZpKrp9tmBfBHNiQccTn6iSctnBCkD3sM",
  "key15": "vcf3nGeYJJurCRn8HtkeADpSuvePtHkDV17jGChngwCm7ozvoerd6X8yZoGfv2RNvHhZ1iubJWe2TQkdDoJEAmw",
  "key16": "2GuSxW5pyDiomRoSf2i7ZviVRdfF9QRiEhqTy8nTqWJL5VWbdy8bRAaFrBXy2ScYtcL1WLTBD3ETuc3zffa6g1Au",
  "key17": "4kPUZbYEmpEuA5yhUYs8Vo2BMyh56g1qTca159mQjyFy8tsGcAC7nfLjnQZjjwTouYkeXjaC54izJd4DppHmJBRd",
  "key18": "vXtSxaP8nFZZBJhNLGViaHFZAUcNW1mcv79AgQjYwGAZLcMaQZmxe8gP2AwvBcGEerQRPDQSJeTSdHdrEuRERqw",
  "key19": "66L6NeecL5R4tLSsB2uQ7aZE1Tft3op1fbaUZRdXzWpSCVmreowhaogSRNtAVvvxvUfDSw1KjbGhuSA6Kw7AhtxM",
  "key20": "4xCbdVjUWp78iyL6vpYqiuknczQVMMdCh5213FbYUUCe1dhSVMUpvKnaJR7CkWmpGJNCtAF9Gm5BYWvMfeWkWTj8",
  "key21": "4WyNa566Pnpj5NGL38VyXUYPwYRf25ie29KTQHKKTA8rDoCJmyCSWQK3LZsp5CoxySH33FJsS9G2D91MjBbtiB4R",
  "key22": "BRyqhHTzJYS6DA2YZid7TQ8y7R75pSCDPK89T5eTQeEpDDYmMWB776cF9vcCurij1C7ZvLbVuu4hfQ9wbNSXYKP",
  "key23": "aPBgS4xyeoASM8YFi1wD154gPhx4ALGg98so2U8pc3LKW8APib7jvmkoEexRrP2p2RTvQTfoYrpmqcZTn4PNXCD",
  "key24": "4efzsBkAoesdo8vJVzx29MUBoTwSq74M5xq73tiYzQrSnRZ6AmLX5LYQtyKPNqHsZjPt2M8mgBQMcA8tSWizF4zZ",
  "key25": "3Gxe5nU9E7wp4ojJY6XakK5rMCcWo3wccgWbUCQzT8BPJDXbTMZLTGhQi5AdPxcYiGQvikCodYKh5VKkjjDKfqRq",
  "key26": "5sz18asucoQYS68Aacyrgu4ZXotGHEFkXHngj5XY3NXwtNFx8f2Ey5cVshYi9sZ5pCQCUAFX612DuJuS3UQkNcUP"
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
