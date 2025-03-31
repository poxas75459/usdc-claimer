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
    "2mWVraxB4ca5D5xCxd3fMSWiMYBK1veBUHzMx6W6P8tebyN4vFeE4Gra5CAJA5mbEXLgK4kfYLMrrnAiyyiZ2usX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4E1iXFMJjHTomU3LhospHJVqqfknThsP6fXiE8Y7XLPKudvTAka4VRxr9bGAkWCBKmzQvyjzyF8x7abAKJNvTboB",
  "key1": "479QvWAyFBxsiMqEpFdWVE5BMRGQVQoNg1yGQwVKKBz1aHzS7VEsjdcGYzdGcdhzmggfZfcgdpdfD8HiwA6crry8",
  "key2": "25bCCFehBw2JNwkXtrE25oaKiaAR36HqJ3ewuYwva9Jv9rSaNHffCHLccR7ueVoG9aq55AYYAWPD5uFj5hqtM7cp",
  "key3": "3UptZsbzNd7gXoNZswEZxcAdfdcRtCPdUkg6hCDJUjyHyPynp3TJ4TbWznvoR4puPEo1i6TSCqErZRwRScZXQVBZ",
  "key4": "62btQQAVCThUZbKyWDP5EKUgmxjsRrnPmYuLjq3sgrrAn3wrmpeZpnHMTiT4xJsQBzQqfzaMoLPVEuRQG2hjJvVf",
  "key5": "4YtJj5AAkvdMkJSJoVM7z5846RDG53UrjTTaqPSgCx6ptWN9RgURWUGejwvY9KkCGAyKAzZDQefE4wXXY7qSaFZZ",
  "key6": "33jNz1e61sEAkAmxrJQGDmVXyukh2suAJLaBgbLptDHVoGY8hQx8Y4nq6xUxdzJ4NcsDTvJsU9pJow7SXsGZkXRw",
  "key7": "4jrZTSzySFRepumf6RLoU7cBvS7cq6PY4vPiczb8stSEu35V4Kjhax6soMx7qb63XcDCWWt1noiFy2YrWTPLJy4h",
  "key8": "5jy24owQv1xpyw9gcp8Yygj23eM89PBKz9hQ1pjTEsNuZZD2PALjXrr7YRK1kR3VfuDPRZPqMqn8PJnQDjkMQjLX",
  "key9": "XSpPAuZX5u5aBeReDMT8LdVZb8TD4E1uZ6Hgbir3WPfGx7JwYhAHH7BVEGBU1YDQGAqcef3SheA2f9omFvFqq9V",
  "key10": "3FvvUDEXgCq2sEgWVCWzRoXHeDbXdrXFcCPwgYSe14f8uNmQ874HzvhxFgJKc8JdDUYCYKJngb8T415s4mQyW1FK",
  "key11": "4JnERWqJodza4vpu4EpxB4h7CQ3doPJm1iPX4EQWVncCNQEU6s6RdDuAF27N62HzghopUkmp6pzgqcbdzthBg3D6",
  "key12": "7X3EogYVRukrw8JNHdjXdsq4zKuMxWWmK4HbCzQmt6mPb823eKiUHeiPBCR3xennXXbNahcxqBUMFNFB5Y13F2M",
  "key13": "3FKu989zZ5SdncWeNjE1tnMGUGXhewetY2SQJFu66DiBFUb2GDGAW8ya126X2yzNAJ1xbKR7TJfddG8hKE5uBsz8",
  "key14": "4AWbmXv3cQswrWciwXTLjnV3qyd8yvNPaEwqe2jfSNg4f3SskniVdfJnSP7jLmSCUjFrtthJ9zVuvaPoCxcSJVAC",
  "key15": "3LssGtfLUr5UA3tGmyoo1NFhscRqYmLck4zy8Xo22GYemE5GjGoTpGuLf23QqdxbRxQyocbRiNyTa1CP9pFJ62SB",
  "key16": "4hCgDseGQnArUCdW7qqEBrSXqCBkjbySvTAV3LmQmxR4mSjdw4uohayuXUNzzX6ubtABkjbSqmTSroHTHvZxafPd",
  "key17": "2n94jrrg6vy83XPRBzou1WU1YyxYe2V2hVhH1u4MGjnDcsgmPFqNLz8LD779a61aaqsPDcGeXqgHfqGkaUxd6iJz",
  "key18": "4XxBMaDJZcsYivAjiXDan5xuWNzPzX3zjQbSmzksnhB9HD2J5dWFXZwV8xvXCUhHi882VaJr7XKGCk8VhJTovBtu",
  "key19": "3ukzFk4nVj4SG1qa8paJoRTxTJTdkTKon1xcAjNFUiLrcHsnWJi8KqP3WqvmA78pekk1gpvzJ92RbTX5xQrEvhcH",
  "key20": "2dJ9yx7GCsyvzEzPffmexiHmULASaKZ74rMcmwJuLKUtBtJkuTjNzis5fFC21QT5vPkyRPfz1q6gob3g8qCtYG8L",
  "key21": "32wZJHWTsNjqF8NgirDgDrTQiHd3LtP3J72JpVUzsddYMbvvfoZvTWCDRczknuw1b64GHfD94XN8BTAYMyUyRK8J",
  "key22": "1KuNZJXToeyNur8B5uMynTXhr7iJ7pr8CDgGxwmegFQZrF5veMa1tKhdeifbJQb1ERyD7mTNf6aAJAFFsUdnPdk",
  "key23": "42U3y1y9sU31rWDUHWMcaK4aVFjGNyPsp2SofFaB8xxtXVpne32U3RnsXpVGz1eeW9CsocVJXG7hB25JSuBL2Bfo",
  "key24": "4f4euGozddzP4H3kPUhyLbChWWAUNSgLSJZjQmgUYjkp7fq7iBYC4NPvXGMYuVQxsWsHXqbsfbxuXvZJp5ZJkMGV",
  "key25": "4X66ZKLnSWRCrTwnUB8iSosT4HrqPYzrUL42eLpRX7NF7zszbCWFNRTEYVTqr5g3a4zYP4fvZmMAEeQw81LVzESS",
  "key26": "24XTBkJfFDCnwH5EmathDoeYgwNPnS6q8GrtW5p5JiPQ3psYvL6yaJToPYM9j53v8PtHNGEyknTodCVsxRQuqFcY",
  "key27": "5DDYavWUXUfgfJ8tudXTZ2eKACwEbdPiR5zSCjwDHbEEqA43UkicyUWkdGzVLX5SKUPEv9EzARF7qFgh1XYf5pAF",
  "key28": "5Dizrct4GuNQKASqA4L9WK6sYQwnXqX65rEVCCdhCkqAW7zBRJAj7fhHwhpGKh2dYzMZjuDUHoQyB9gtVNpyxxem",
  "key29": "4fFSQryt5s3pDCKtVCtZmyLmPnzs9y6vre4NFQYGWSgnvVRctRDxuKVTVMWnx9aeRvfTtxH3dFWRTJPm9xqJvN4",
  "key30": "2c5hudZpDyhm2gWwhcvR3hk7nhF1YjZ9yZuyDDjHaM6AzEuQK9nNaF99vnYMkqFis3YCBrjBxXrUr4pz3DSAEdQ7",
  "key31": "37xSt4espn21ZsEyLcdma5WVbNyBzdHK2G3af8AyGNNYd1BXuyzFrDe6urmBy3mnGKfb698wxSVVU1kiXBNTq2nd",
  "key32": "55egxettNddcxhPTKX7n7yvKihiD5ADN2CQ2bg1dXqY67DtYMvriPAWsBEFbxU1XSJNyymCurYSxmUNWfGs3j8cP",
  "key33": "2GEH2MrrcY5zKtW9iVo4HjhTfkwmqrdnv8f82n4sm8rzjNoeDq8VwVc8Gqme6aFjDTicoAakWqvMUjKpCPY3qGu",
  "key34": "2sMBkyx3pP5bRRUK7ko2KZy8HssKNR6nzyJgCzdjC7JByNZd9sQv2wGPsy6Vg6F5sRevzoG7M6JmqkDzLDmQDEM4",
  "key35": "2U2Bg1J3gCN6xmseZh38dk9xdk6182UfnrpK6ScNsYZWuBg5xdQjwhxQn3pWcKgPHDTkypwsPQjyQwRHQ334ZZqw",
  "key36": "614qqaR6ZuQsnfQAqmKa1L3fpRM3czrAFBxVVV3n1pwjx45C6d4NFxmmcymwckvHFeU5ZzPg9VsNhXdg5d8eYJT9",
  "key37": "5kzN1r35Pk9ew5qAmqnjr38KxnQdmGv5kZiq4sGCo5zQ9b4BKEgewqUn9VmwYXwDUhfajusPxzpsdqdRChuWHaJs",
  "key38": "4XDwjMbKs8iUHKCUhnSg7ZnAKW9k6U9LqZapgJtex9oiUKHo34AcauJw3GqVM6EUiS3pmKX2EQvmwrFaVprHGFqk",
  "key39": "8PuKYxTiipkduFoZLkeiqFvNWZUYRjv4QzGjiGCrCXjAM5wVUeBv3gzd4ma3FWzD97WTd1drYd95qd33VXVuxcQ",
  "key40": "RozL66BFQzrpvcUEikbDCx2HsVYBPRD1nwQkVSRYwMFMum89ragC942tR8oRyVE93j6cMM9KU2WJEdibYayWSRo",
  "key41": "3MA4xFDirf4GLnUeQsrt9qm7ZFMtXhuBFMG6yXMRtiZNPKpEFiTjtJQwTXwBnQoJRY9soKcgZ6N6QhoDeMh2DKPk",
  "key42": "aDcUm7kdUzS9QkZGtQrprEPWNNHiTe2VpXVptwvtWBPQPdxnVVn9ZTLFgqxYiDNTu3Chj28rXDc3CPP218btqqC",
  "key43": "5ckzU7u2XTqxX9Fh9Nn4pJwssAGKb5ar3SrX74DeCRm7q2mRBPdVs2TiEw5sqrnzLdbdZ2uRY7qvpPDkwAeUETHb",
  "key44": "52kMnEZwtwrwYgFohgnzvfD1iHgCxhwr5cUv7x7ZZU1CRfh4SmsT7dBhjJ7KVtcPqBMYMrrU12SSLPkPhXucmW1j"
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
