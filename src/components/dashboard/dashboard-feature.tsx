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
    "5Y7kddyqY2RdUDWFSkdobbw4wdEEEWYAVKrWPTfn4hLsaVfPDqD4wQYu9H5LS6MVjme36LMQV9sygWArTCYA2efE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vCGmDyRQwJyFRgjXgNzAHM7z7uNjvHMNfVaxCefHiLQRrjJAT5ZEgFCTjteidSfe2XzpNaurrdo4QbFkCZzkoNk",
  "key1": "m6yU84zjci3F58EjjWjZNdUzxcsxxYsGbxsoBRmjzUkfT3nLV6Qr8NRZUjPqjmBWs4P17LjQdhtBNscGdFAU8CW",
  "key2": "3ZXhJbLQ7xBZXk4WwKVHVD4Re5eUG5BB56ZuQRfUVnBDpCseywzzxJYGmS57XaGYz3DGe6qLx5qL539xnry2R1jt",
  "key3": "2e4R35LBrg3wEBUXibB8AfENWzjhKsCPB9nzd3zMPiAHHr8YXes7Eb9qhTBuZd4NwcrdjXBxFn4UrcbjWBjvaKhH",
  "key4": "2jNJzpzrYDzSTUEPRarZ2NPWYf3ZhgkdPjQnGNQVxUJzsFBx7cM1hyauT8P9aoJXAbGWQwUKKsYqEedZNU8wHt1z",
  "key5": "2eiKBYPuLAzTfh9AP3VonFmX8usTJNRFxjc9L72pUcmBQZRhh3FnZcH3wYFbhkxGrMB476LeFSadYNtvqtZC1dR5",
  "key6": "vkmYLw7yQJBBmM2XJEaU2EyixH2HpJ5G75RygBCcYtR9RhN2Q7iFegWqLQJVNaTpBGQB32Fb29FDvagNuTGN3wB",
  "key7": "2CmQGm6P6M87qkRj8829uamY3qgznjscrMAdAj5eytFfRkctzFBajSCD6Y3pGF4TPHFzuqG2jRZqAQrjX8kz4Re3",
  "key8": "8d9LBvz1d6e2T5tiFyBiynLed71GLstwSZTXzgypiJopAY86nLTLp8gxjfNr8dMzysa2AWVKzN2REUHHYdXNzSC",
  "key9": "396xKphbhCvTFMY3ug1TxWgzEKJRXSWBbou7denmurTk2qGPVKMtJvYrn3Dp8ZL2D7FbjG9ZKQDmjZLP7fpArkvz",
  "key10": "5g9XrA7EYA2Xh345HNXSigvnPkjkLb37ALMDSriuBjaDt9Ux7oAxKCiihczq6XNyAbM2xcxNuuSFaTyaQ8pN2Ev4",
  "key11": "45f7H7KnqdYKAnXNrhkkT726tfA7JPZythqp7YZiZcwTsyPEb1HSyQsog3zy21PSrFKBqJR2UuGRtH9pBH1MLxfv",
  "key12": "gXXMDDAjuQTGfTa3fJWM8H3ZW2YPUWhscQh5UGuLjWMqmyjKWDizXoa4LzD8cPqcAU25N9TPrX8vM1Zj3ERbPLb",
  "key13": "533NGMExRkCoQzkRiCcSLQGcjgdcdsFpubApKKc7gc8EhoSoq5NJPWhq1fNkQJZdidgjVxaR5ZDVBh32U7CFPBYh",
  "key14": "55V6XeuYLq4EXRVNJivbHAbUe2EYqbmh6qhUwmMSqKqUdqfsgBtHwHQHkVBRjAEmpwJCDsgnqGD99Svaez2KpZso",
  "key15": "38qThd6GHMowsMxLx8uxgN3ryJhUnSgCWb1a477Z7nCAZFkmUzoVd7efRkttwG5gBLeTF1Lt5kGn2uerm1t9YyGm",
  "key16": "62EDyC5jwhiBgTSUv56yyf254p7CS5dRusDdTfajn1YgHEMHTUfTbrYsLsRh5oGFR7UvhHR1Jf4udQDTrz882eKq",
  "key17": "4aKM8YWJqava3xBrYaDnnB6RHK8a6Rn8UCJ8x7ZWboYC9MkYtxdd57h3mVjwp8M26sSucgRbYgmiEBd8xh1bB3yk",
  "key18": "4jzneJxxmFmXD4kriTfE5eTpBDRff48QnCEXKfo2NnhfN6WQvkoAbd6UKEzDHUZJwZ5DWm3R25outqxGZ3Z4PcNc",
  "key19": "DMiTPKj76JfDYhQafdnSkWGm9RxaEY8xj333QtcKFPKdce6arxg4N8EXNoUhtaFxR4Qms78zJNFG94LpQT2qeif",
  "key20": "vbejTG1WKvJrapHwV8RkM48L7NZJd5tTDiDooeRwQB7rv1fkHK4V1H8CnWNhxeUrrVMcnKg41zuQ6LsBWf86xjE",
  "key21": "61D7yXmoweFSDPtAHnfyaV8ch17wmywMF9Xgt8WgmAzXsuj1fhoPm3hTbh8J6KKWuu6McznpDNcPSVG3wkHuc7fz",
  "key22": "3FSJ35Ep3RNCMgG2a3i4fWXiTzuhNM9mWHoH4jYzbsEegMUaojaiFqKkXzYDp8PZ28unDkyXs8r4No1s5Fp8wBeG",
  "key23": "3Qqy6x76yBeBombt78Q7eQ9RLGL2VZZY988az1k9RoiS1fRmY9kNGHamWnhEu3Szqwv8Gs5weBh8CuqEH9Ad99Fs",
  "key24": "3DSqRHC5RfRvMkhGWn5ghjeRdoCz3Nf8rge71nAsX4iMGYxJotbJLHavN3tL7mnH5L6A5dPwtkmQSjtHVopf3w2r"
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
