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
    "2Ac5ecfsCsx64gymrcKn9AFa2UjFtydY9vy8BzVEbm6CSuszREnPtPYaw2GpkRJkb7ngDpd4NvDRvWVfDn6gRJcZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5W3oqHb1mZ4aa5AKM63z9hTXEuknFB39jFzc7qttYRju7VWwrHDg6mJsBsKR79H98R35rc1aLLTWCPPUfMbjMvdh",
  "key1": "5Rm66FF2rWfDQzqzky9x74rC3rzqissZMVeGxRZozpuT5wsNGV2MF9sX6P7wpvWCVzWrXqu7bCR2ipq6haPDGQXX",
  "key2": "5U14M4hk9yE8s1SxaSj9RKDTs9qP4jSAUCUB5M2Cpwt9NxSDjTGetqegMZZLRVGiC6XLMDKgBuNSw2inxsjPaEd8",
  "key3": "5A7bBBBxJjxj4YpMwXm2zJAuB3thv4MYULRfftAFESXy9Fv4RCj6K87PfxUNawv62tmKpBDaXFBi8soifxp93FkE",
  "key4": "AL5hHKFmeHGX4ovxQ1PENL3nWSianeCDfQJsgpjGAFKFJ9ZewtgPkQpUFT8a8iDoAwsxzpDj1d8t3hh8jGs1HrP",
  "key5": "5t7fZU1wyX8teo6HHNqrQUjjzCd3oHSqJWxBpQvjUJjFpB8npveaR4nS2xA2FV37JgE2PsGYbqrCVv7ZkXnPoexg",
  "key6": "4oTZjbF3aKSNBhaZA7XGifp5K6CwUuC2HbbAk9HF3obbXBU8bUiYScPZsCnwaxQSgzGCpFaead4FDSwbon86vddr",
  "key7": "4yqbStns6CvSYF5uSLZx5Nu218BtiBf1AsRNZXmErTZ5r7xSowofD6BBsLKS7n1m71CN4rMvTy2JuZbHgnmoKAUa",
  "key8": "58tMiz4T8uwCQgP36Sh2p91eGpzs4yBzUpMV3tFwppknVB4WvLjwWDGtSXCaGkthpnPnzwuwaDMgAGWrsn2JB8hD",
  "key9": "35BJJqKPHCXATRMV78GuRFVe3B9azLQaBfTAzXKxpQb45GDmcz8Yw9Si1kkK9KZ1TiyXqMmWyB7VgVBDVknLRer2",
  "key10": "2aH8B2QSK3UtZ8cWLS6gVCKaSzxgbV3FmwUFyQBVSgD6zPp9nXmER4CyYinm3p4Th5GVqu9Pt5q122bdki24yVtK",
  "key11": "3fqa6WivVApC2g3kdwi9bdxoyT9CaMgcSLD5qQcQBRHn4mkBNUo876WZyv9hPqMpNRFpWcPshqoywTYNoAt6XF7B",
  "key12": "oTN6L4Y28LNjhreGx3sKCDEETaGTyfBQ1H3Y3geuaWiSgSXPWEVhHMr8drXeKLgWiknXBMe44y6DWiudfPjiwVp",
  "key13": "4dXtGiwqAGcHbNe9bkzbMZTdAeiqRRfBfF97zKLF3zH1bLSAPK6ZJ9cEwaPGjwFSmkzHc8KVrBN9fYwp3FYNCMHz",
  "key14": "2KnuyfrMSAGbFPm4yFEro2TJTtQzvUkSSn3mBTGGW5bBfewxqkMCeCDZ7jZtNecVtnVoggADPYr7eQU7rMUvYcYk",
  "key15": "5bwwWzYHdTtoLbDgFBJEy8Ck23z8s5xSc3vrbiZcUcKKfV5n9haGiu5NkyW1quDfo32PCHv12sR8cXaFVpPXBP4o",
  "key16": "4Rg5MKCzNmgeYsf8MQxiM8ezoZFFmmrqhD4UzENJacppww3qPa7acx3iZwiBa3bg1BeaG2TmC4wocjEGGax7E65B",
  "key17": "HR3bxA6Sgq6xMeDiAmbqy4gc84rF8HJ5cJvTK7RuCAmEQ5LtSkjcSqftrqZtdJxaKC3XbLd8cfRNfJjBZ5sNtXU",
  "key18": "osNoggtEz2SmsTikGj3EGVtXyVDcQsxWTiwEBsWFhxYbja1rs5NbizjdaMgj8y7apzt2moRBoRW2hBcpUTsk87C",
  "key19": "3syWuSSrKkny9zcnS5yKWYyrzQNWP88WPeLfNjEfaEjSGaSpX4xK4zj2Gro34NJSoWqrcGJbS9XKwm54YoLJHmND",
  "key20": "2V6mgJzFJhAJMAZfZzWJgNNgYo1XjUTfacRLXGn8FyynaZV4xuQxex2xJrSMtVD74jg4ywa1qL3KCsHjyP5Nao3B",
  "key21": "JwUP558jyu5D6CNBCZ7xKWX7aFCShuyk95jTPka2VRQeVhUtP6k4cqDkTwuREwGSScBqRqoXnMEEMUkdEqs6785",
  "key22": "4TBap3F7J8pzmoaTaRo3BQS2iWNMqVkzQKgp5HeRxLruLi32uSmn3y3QMbWJnMcZfynJHiYL7uheTpRH5rhuPbRD",
  "key23": "5nao6EqQP518CyfHRJoVo8wZWuAJKL9oP7PeSV2BSJri1etTyAuXX6Bb5HUH6u15sf1hh8nuuVtFJz3eCGsdnJS9",
  "key24": "2rssS2CKqCCWQDcBxici887zD7FrytVQBotuFirSaUivrGx9SDdPiqAMgyCPT71Ez1AmmXSSpGuxzY8VPM3Kuwot",
  "key25": "3e2PpfAoY2bM3RL3bhZiwteDKSK1jbuDh7kDHMpgXL4X9fZp65ZZJHep8ysSGGFRCEPu5XFF58CcJVoqF4yYfc5k",
  "key26": "AQTwBeMwKr2T7fEjBF4H54gYdj6vUw7R7o2pQqerE3xLbaDY5zQugy6g1WEuz9yioDT6wre89MZetNT87irXXHB",
  "key27": "3S2qGb71sHgahopctkKUkH91QF3H75jBiUFJZBxPABcKXfh288u93K3zU2nTvFN5PwkFTdPmibJrHMwGFs2fpBMf",
  "key28": "53ybA1xJvsGferXDdtC56MG8ykDUUC7BC69K22WMCKNhjAC9Cq6ZmxfH2FpynRaDnEH5mKCtSu8THFSC5Qd8YZfk",
  "key29": "59BG5dg34FWKAXTRW5YTAS98r6RdhMGnVqtbNazzzGF9dUYgYcNciZCeof19ZWqnopPuP5RANxrY6trUk2Ymp4uh",
  "key30": "3ohyhmzcyU6Ft9keEJvooVqE5QpCUMXxB1PNgsK4Pnwk3AQDyoHZahVFPtU3skxMP7354yy5XLHusTvhhRwhNAdQ",
  "key31": "4Jnz1tCspiw6GJbftf3XBg9sRBFzVX1C2TY6YwKYa3Hi9ZbVKBmtWhguDQLzYZrkRWSeihx1CXptxemvM7v82SFs",
  "key32": "3y46jcXjaxDzbbYKqjngwu7sXWmXTVQx6Ciz4uYzB95LpRca9eAiD7KykQ35qnzRdCBUXd88BbPwFBLqoG1nJdTT",
  "key33": "4s1vDp3o59JymAyZGe7ZAYp1jwdwpkaJGv9BTc2z4cK2yL4Q3stbETaJ3nNFy9DiVrfJErpmYxx1fB1LRgTKigLp",
  "key34": "sUriRGfgDRUfZRiyuTXdi826dXgxFViqbTDTL2Gae2T5QstpiQsYRFVWLghQki2gPVYk9JWCAWhV3t5quEckvGV",
  "key35": "6d8ARDmdNz6sYpPN3xLEqHSDttAkAnyGGowACwo2Axd1BNVh6qqYBjMwjnee6RDWv3uEmfebSpfgJaUXxcs7HUg",
  "key36": "4yJUfFww4GeV4gt48ZtwfsEAtxsmCU33aabLfdd2Cv6UuYy8rVNYZn7bWMkPDpvgEr8i6oUwYq1x29ZHUBygGa9C",
  "key37": "2k7R5VgQBFepLjUBMW23GdT6YLoTr2g22xcpTwU1osYEZPxewAok6GcFKFXzXwjRgpBnaSmsC6TJZTFRcYYT419S",
  "key38": "5MCJbibDrTWYRY21uSeuXjiFgjPg4uPwGGWLwdNZjptqv3W8SU2iuUJKzBnWHL5P61YGFxokSiWeY4tRwq4KEptZ",
  "key39": "24HmhvtotYLCWWH5b7KTnzdfNXhtQ3XVxnEyWzu1UHsjLfgF37WzFsF82VbcPkJ2wCoGagmzrHS876EyhoSkBy4a",
  "key40": "3aUzJ7Xye3g6j3Ezrt9XWqLunfoRdEzbfC9KVVDmW9hDjJSf5TELTAUV4aqaF8DfQiUQERAGuvKsPcpJRPGLuL9T",
  "key41": "YQUTH7Ybpks7WTbsJt35wsdXvQq3GxwJiGjabBeVpxBLAVCLAzspEtbin94T7o3GPAnqWY49vq1U8f921NwWNk2",
  "key42": "aRk6PXR4okKTerdJzKg4Edp7xFkFR8AGSbww7d9RgeXYf4GVaojZozyjcsBE66YaxEWb2gBNF3nTark9TFVa1yG",
  "key43": "56yCsU83QeJ6qYH9nutqjDAQ5P4cpwZMv2DxK8UPwRB9fyg2VAVPpJ9J97iyXCfnDVwBV5GNX1gw9HBdBaAvAPrr",
  "key44": "3wrTfCv11BuDUFQDpDc49HTTe3bXdW5bmNGCJfE2Nf9Wbr2hMFryLRUm6NQa7fLsfQo3RnEcer4ULyZnt4vFocPM",
  "key45": "5WtUXSK4ziirsJekmd6uMMn7NZ7qXnKDAq9p2wYXcKMw695c45b5VdG4Gyb1x6Y4Vrpv2sS5naCDb8PowgHe18iu"
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
