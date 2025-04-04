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
    "Xwu3ESDVUtowNvAXRAx97zKYHC7KMemsbkC3vs6AXe6jdE8Ssefw9ggNHfwR5q1pHyCuKUZaKG7XmfdxyxaXJyv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35YvBDocyQpZF4rXzD4EyZvQyTVsKJJpB58TxeZKcKLZtB7B1ng33k9NxmG56UjAJEf7r1rfEYcSLUtNLEVN3uCm",
  "key1": "4jDR4BKraL6WJQ73z59usjfR7htQ2gRgEjWcqzLkqdzyh7bLpBVq3FAyohM5jkH3HuxR15Q8ohxuyKLSgGtY6S8Q",
  "key2": "bE6hjLaixEzoYYMa7WZYHpfLLRKE9JqEeEvP7cyt28RGtgfGQZweDF48bEtnCToRBKHAfpFvYWPRJEcXCbaRRVz",
  "key3": "5d22zqZ6vwC5dTFgYBg4fJMoZWZPEnvgfwTESJmUT6UbqkZXQP1zw3uxJHmgW8ZHjrksqhbtTecGD59eth2Xis3N",
  "key4": "2LUE3HA66yxPuPzUNygQ5fyGJXVpM3RiTtSQypo7HiQQ9bMTqjYHxdDt6Cr8QRGBGraLrPXL6DAyrh2SvvBh7ccN",
  "key5": "5XNnnEGbb5b2k96T6vcLdkHbM2HtjqadERuK17R1McNYSp59LvcxgQDB7W7eSKYxq68mbkGuWAkr9PLbKdLKE57u",
  "key6": "4VGQRWQ3g4bJZyidba5qJYMyEA3ZbQUaB6ABuHL1Cmw7Mpg88ZadneP5vLugUboE2n3QbgSNXCQTERSNcTKWQeTb",
  "key7": "4tx8DFkVXghmNWBNzTMMjEQXL3Mxdd8dLGCPieocnYiQekaamLq1zc92J14ZcEJaBGkMexJhAS7YxeR6DyktQYyR",
  "key8": "2FKus85ZuTCKDsAMk3BGs2cCpAaEGuM1hYhVkGgCLtChBJea4F2ug9AjYyU9RwJLjBWCurTcZhxudUY8U3EgFNbm",
  "key9": "2R2Jk1fnUUg7sGQjwcEFmUKFRCUixvwrKeHS27K4QRcqDdzTJGECfuCxLtFU81dATuvosFy5hoBeMmT1qHzWdK3C",
  "key10": "27FPpD2AUioyRB8fSUhKo8ChAvJcDjr4z7MKphgQqezsmyLHkskjJcZWp16ecgpLHPyUMrhSNaNavmG3VKyWbUEZ",
  "key11": "5qpSnpb3BWGi1FMV9Yz28tu1AN6LUW8Vvw7cPkqsxXcVGCYb6qK4ywU4TtLg7s7vjm39n1jxxieSuvK24mC2Ds9v",
  "key12": "461XeYUwcJoZDnwzkbiPSmSEWzrwVVNybJTbdxugr83Wu8gr82vwd57od6Cq7Vd2zEd6LHcCCo7wz4LWg64H7ZUG",
  "key13": "D9wHyK8xQzx3FfiSYjV3cKj1nogCtVdbqLyrYotmjBjpLQMdwQbC9p2hZMx9JLicqQpLNCozAmWJj5svWzedh2e",
  "key14": "4wgMS33QqvAVVskjwWXJUQQX3U9RQtaPqbhEeFfpbXrRzWsYJmWMaJhcRS4Jge1MYGqg3VSSY6aaoXcDLQ3PPLy6",
  "key15": "2b1NKy3T4JF5afenSZ1HzNRgVKQ32SS4XK4o5EK1r4hMADnWKXD4t5PTR6z9CthxBGWwZ4s8qgcgR2PsmWsQdhjQ",
  "key16": "3AKwrRSJdbEJQMm1s7QcYenNZk8xKxLcS6Tt15ybJMiZ8uUPMVAKM38qD9u8oRKNvgNTLpLwN92VK79J7FfB7KPt",
  "key17": "33sGCYC7ox1d6e48cM7g4sLtL6GMxD9S3sRcn469gkWYc9GJFbvix35rraDW9MMKxvVhPzbgkqthCLYcp4gC2yiA",
  "key18": "2cbmirEfxnEXUQSgBbvBMTMqZBmfAdc1Bu19SsTNytGjwyDdtN3jzyZBVjYJondNBN8pGWAicj44RM2pVtC9ePbR",
  "key19": "2Y3n9sBMiasEjBiiCJV5BFDr197QSZFJXBypMam87z1QnDVdvt2Rp3dwPSTQ9fp8sR1SHeBYy7CKJpNyfDW9cPkK",
  "key20": "58GW8r9xD779AKSAHETjnK1XVYpTn8Z5CwHatcev49gtgni6gKiuteckw13EDC12h3LxZbSMdKboEBxeXCg6jAeu",
  "key21": "zuUEj6x2vyxJymDercd1Vjn8x5urxM6z9sJeYRaeRYi8vYTxVBjozAMvwYJoJJwshjjAGfn8j7oNJ1etAT7zU49",
  "key22": "3dncueb3gLSdeE3ghrHFnRDv7wjfxxmRfmrrXXGbgWGyKzNWgpPY84ZGFc9MSgsJiSHfsueUuMFMSRZ7X9ABoVeX",
  "key23": "2KFj9jpjnsNhkiyfKJAxwiZTAeoey78FjexWQ6aJBUt4XKgphb33smU8dEfzJF1XsqYN2kZb1pDqMXDYYXs1Mrzh",
  "key24": "62bzcKuBsmuwfC6At8pxQSrQwWQ6PzkRginBCCaFQtMUWHSnyNFWppcJsttGXDvgJdKjthPahdKYwrdkGr9biGkT",
  "key25": "4A8Zkju2arXpwYzVwQKh8Xcu8C2xhKsBnqodLNMfSwqAbYE6Aezfk3eCbPCRUHwpcUySoPNbGGThQsNPqYn9tBrf",
  "key26": "5WtapUkFCw6mV9e4MwuNLDnVonfRnxgQEEfCW3UifHNr26j81fyEKWRtykE2VZHqSuJbMf2qN5gGvffjwMP2nYzC",
  "key27": "3QUj88dyJPdU8ofykDxuZ7TsQ7dUGX9F8t1HC7rrEXXDWP3J5RV5EyQB4ABjGfpitDEerJFaghfizkjrbiYMBg4k",
  "key28": "272xL8MmmWMB4Kub36xoxAhxNjejQeNEGwVfGjhHxZ9udPKWDJYNLZKTDBtvC7YyMgQdQTHfeULdyLURUYrpKN4g",
  "key29": "BtuGxLWHNorUD2Sk9Np8W78LEMT7N9dVnU5Wb2XSLcvhwtevTEg4zZtyfL1JEXacWqiowx7dSM9fWiaMeU5ntJX",
  "key30": "3eHHfAkHomyJX8ZQgpG8yq2KABRog13Z1s9QDyoeWSvhQYks9PF8V43JkzywbNBWtAUdoasfDDrcXsQVW3fbBZ2c",
  "key31": "5sN4uDaGvfKMx1ArN3EME4RKhdoXsTVRnwL8o2a7jip4QWqYMXyfJkvAJtJbmDqPX8UGtfBWFrbeNtfDCnrAFhNX",
  "key32": "2MbcVm1v62g5FDRboFJZAwgiszd15jFHwmTCTVofPoUvvKGE6npRD5izPA3Fx3YT61GJRB6n5tyAWDYm72a4tBX1"
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
