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
    "3yQSVsRkeVUwpMES9NdP27N1caaTgoBgXenMZiDmnfPPPeTtjJ1M5hEto4S7oGEa2KMQj3KTJ2ZvyvPKLck74vWm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sD1BqzDqQMK4p1pxogJaY7fJUCBQHVYZtWDkAxGjSnRzm7A5mkhXLKYCrb8M43JR5qcqrAkt2wyLNedsGCV5PdE",
  "key1": "67g9B4EWqEfztfKuGaLMC73HsWdnJFgTiUUPMSAp5mRhHoBAiksoeoRNtouuLqDigVCRMWfTES7d7TeoKab3Xrqh",
  "key2": "5JXpnovZBS63LkNKGbMDF2BqnnPop5QT3Pns1aqHoEdrYKyFP9dHPTUWmQ6sCS5sjqGxDVypXMxdCyCYP3Kj6uFR",
  "key3": "4QCvSbXvH1B81xjiRaBavotBEdigUeFHJsRNFHeSYPbVspdXAr84eRzLdFRFcRqV9BU1oK4U8ub63s5xPAYA5DRN",
  "key4": "5Qj4fTnE2afzEqWY47qXVr3tHgTC2byMUAEQxPF3EzHQMKr5ELeQxYKZ3yh7AZpoEo2TmAEq5QzvY2DmNWzqtUig",
  "key5": "2XsQdLVXGfN7acpkDkSt9vYXHFzbgJBApk359L7bmtKw1HkVDEU5zVRjnZePcSLGQ8y44S3W1WAAXXJkkPAf73zR",
  "key6": "PD3GTzYCobjneVxwhMUrmZVUPT8W2rtAh4s3yZ6s1qyCkpoRPhcEjWfowPwDTAwMHrhS3U76qNWNKvNt59Koxhh",
  "key7": "ZvM8KZj4anEt7jJGz2fiMiR3WhGiAB4g5KEnoFxiujC1FV9NnxVpWYUzQY9fqyNSRuKzAjNp2EyFShjnjZJAoau",
  "key8": "P5GiK3FTTHLyyxCWY8eiZPieep9iC97Ft5r4Cc8ZJYhXcz83gGuN3QBbJJpa8zKVM5RngUUV2vkf4X4TNuKkdca",
  "key9": "2xCJZv4DK3QVtTnpNemyuBDdwx7BbzWQUgH1L5propPmifFJNVrA4t7WjQoaS2VzRCvXeJNEeXeKnwWBeU7bR16N",
  "key10": "2kjbWVi5wnbQUhPPGBGV6fxW1SBzQWJeK8o9tFaErskxmCukvvuHEXmZD9VaQNtVzfpZG2AX34PrwLM47bbcABdo",
  "key11": "3ZPKQ7X7MSfjHRp73wj8jQCYoKXnRtgDrGmTfmboQhUjYLnFbUorC5mCiafCWLfo1iy6JAT8tC2JL7Lddk7vxZLA",
  "key12": "3cXFc7eRjuBSoXLPbbvDN1bA7qYpy3d4Raxi4LNMiJjDTp1o5mgCjqTh7iaUynLuV2aiB7j9QT6R7ETb6eQbJv6Y",
  "key13": "3gd2AG4FAdvBBW1VxLYkGX2xV1RZBitcA4JWAbCzmDe1jg1yBgXtHj7QEn6h5h9K7mLACxZGhMjag7wgbYuY4TN8",
  "key14": "5FQYWL8cQVdhYPGAMBjjikxtN5mNAV14iCwHFQRvgfb6YZ92wHfi7WkQ297hKT8KYzTe7zaqcdEcqxQ2Bf2N8Qt1",
  "key15": "3fpWFoCKQ3jkrB2dokWYq92WT1wjeaFfbifCuoLbEc9RDyhMJDvXqcmMVExQphrnAHJc5Sk23i5sp9RsZXzhoW12",
  "key16": "3s5EdjVBJqHr9Ce7jdLm84wR8Psc6sWXJEZbsBuxCfusYpW6fx1YG5MU6KTKSyD6AySt2dPn16NxaYEjDZJkwH7R",
  "key17": "5w5mRXAAZW1ge8HarDV5XZrmir2D2zhbenVngv53hH2RGUdbiJtQuPsnLVXr4YmjkLTieD1jn72Qiht8XXfocu1o",
  "key18": "5WSkLFB9goyKBw7BJQ3JPKizGWz5KTGMMGnZVyy4ygh15T9pcZkoTLF8VEtuT2LKFkM1ybrsnzsSor7s6mZnG86D",
  "key19": "2qB8wb6qtugu1EtKF3dywoVUJJnUscZAQBWyU6HwETxPjbL2aVutRza7BMg65QdND5KfM7jkkCLToUsCzpabHyWm",
  "key20": "4p8EHnTCbnZvY8mSxh8Znantp8mYRD1kxWToDcbemVoLgVizoKeEvzktEo2cy2U26TzBqfVWoSNVtp1vTmngtYcC",
  "key21": "2Ysq8wXrfWtj5XMGdrHbPMDiBKP3c6BCvvRrVTe6c1oyfDYRXBr6m5qFf8J3q94ZcF5XM2hCQiqgxk2JtB5YtnMS",
  "key22": "3XU2SiBFeDTMn2Gc3Yogbr2zFsVTFT8vw8UjEZ9LP36t2tzav3SxzfGpnDY2LF5tAx57mEKAG5kGT4JdEzNRxAnK",
  "key23": "XevKXguMHs8oCfbu1M2aL1QvLhWe5zAbE1Pj98e5vbpKSN7PHvKB7KdwxSLLaFQCAKPRZVvGPM9EsuvoFBcaXdM",
  "key24": "5LNzTdQwgVnq39RvmMohBtbbdEj6o57D1eG5Adk9Rm4sECZe6qM9cScfpCSAm23K7dmxLqJH6kHqnPVWqRpSwq2z"
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
