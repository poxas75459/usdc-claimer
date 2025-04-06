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
    "2HvC74Zmxu7FbrAxbg7fixxSvpGVADoG68EHt3w86C1jL6PWb8u6twmGiS32ViSA5XCCZw2QGyyK3tTRP8xrQNuG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yK8KnxjMCjSw9tcHRRZhs5PtPLwGxabe6H1YGnFqyYLirrhbSqMUg4aUzs5i1kTrK6J9ABv2NQoiuNj3wGcAZ3S",
  "key1": "6toyXEv81EWdLvYGpXe4Esigb7BDbNqdhp2h5pK2PjWuMk7BqnDNFQsVGj17c3GfzESiQCXdoK7ZMcjZk4J6Ema",
  "key2": "3suK3zbJkCF42kbjD7MKNM7MmQLbce46tfwa3njUGn2sLnoQ9y61gGTN2YZLH5RRMDnhRMfjtmKtmQXPLkhsZfAZ",
  "key3": "JakErNAaypzM3dpArM666jgdf3JBdCnCxSYNEaJEXRWFfqoAYQqqRsK6SaN2gPxsFFLEcC2CtHPHTiNsXBtNJN7",
  "key4": "364jfnfDBcJRu7TSC6VqbaXpSyy6925M2bdJ7Docc72G64NgAR4FuNHSVzNtrWH1edtnqCzajXYJK7VD2MBH5PPG",
  "key5": "4Gf1DtieWFc18NufjGwYoxPwCLzhLrqtNDi3XaRH29gDQ9QymESRMpYh5f86DtoPBSXX6Hk4tcEkyeAqunAwY9LP",
  "key6": "44TVL4AnqFRa58AXUCWnYvpYwwc4dp3v8V4udM7vXeAKGpyAzUEtBWQVq7815Enu1EXJF3Wi7g49xrR36vR5trC1",
  "key7": "EoociJyBNUbxtzibZzXX4AtWZFmooYdxysRpd8zv5oR9wMfET5aB7Qdf2APu4CMWwh6V1TPH55aszWYSqebB6x3",
  "key8": "4yaZV6APgwgQSyXgvmqUy4DPC8cvxYUwao8AUnpH2K3KGrXHXYUXC8qWmUg4n4MBs5W5dGcw5kDGTt5D18gSocHb",
  "key9": "D8SWMdf5zWfAcUatN2FgAiRW3abLRdNDYhNwRecGDcE4AddEPvGsfLVFvZ21AgzUmQsm9ZQf5sCmG89rCa3xsCe",
  "key10": "4fKPsnNmvxC7kT8PD5E175q2kGxGvnvUzY2vNfArwwCWazKy855JWwn5UtQcDCFPmFjNfE9rUcUfj1jFtXQvvhfT",
  "key11": "3HC7MZx2Evy3q72Tc3pQT7CKsHnsTmQMzCcEofTggEkYTbWWBGk6YpHwmXyH8pTzJACDEfDBTbHToz54pWnJU8uy",
  "key12": "uHBgdMSVja39JMfKi8bVbAh3ZgJ8ri8feMjgJrdwnyGRdgrBYpWgBrhjdijCah3ahH2Si4WXXuwQm832Y3zXpVA",
  "key13": "4gWtbNy9q67CPZhxhG1KVm5PGZDhdZDbq5KENKiuv21nkwKr6DeWt7j4gDuTf33z4ofEvMaaaA7sQpbd2P6hFiTs",
  "key14": "szjRZyRgn2fcoirbZFckhBdJEZMFCLrJbkThsoUSam9KEbPr39KAZNe9K6YfSGLaV3TM5JYhi3xYA3vCAN7GoN6",
  "key15": "4WgBhtw2W3hyoQadmSRM9DPQM5sWLP9uV1htkES8qZ2KsxJYqXyXbAAy5UXFhQvcX1mDaWoc9xj5jN3RgNB34nN2",
  "key16": "5Z3Pj1rd2taQWNxd5YJQByqFMDSVQKL8nZxtTamdP3Yf8Khk2n1RgSwNmJddxGa6u41N2BLgoDJc6PoZrvsWdNWh",
  "key17": "2xRp6NcCnVU1cxYF8NVpf4hSUhu2fLGmV65LwWRauiTxMY43LfMdDnSYzCFEvN5k2Rboe9L8xU6S7axLQXALjrQn",
  "key18": "2pw32K2FyKAj8gWEUMh8gU1VSJgM8nhDfoYfk2QodQ48KteoKxdmpHCXjJp4dfSLXDSKTfDnDr43ANBjroceaA1J",
  "key19": "56SBCBMYvrhzFnxxaqhxuqWKEJYf3aDjYFsMNYRWU2dbwqZAXmfkE2U5qBVYhGgJXxY5QN5obHJuW6yhM1hcGDJv",
  "key20": "5S9dSGkJuzHMiSnzr23LJw5NLRdc99k2a8EZZc57BPajh5zWNqyeVSwebop9GLKZZHFbPMj2uKkGqVXGCm161pfT",
  "key21": "2X27tXKxG3yfqpuRMHQDYJ1uKdjscNxDxvZm7BjF4HYoRK1TMmBnePjyix2wGF8g5sSwdk9kqvtT9EBqaiENX67Q",
  "key22": "28WUA5EBg9TRZtPbAZdAVC8Si6QehnSkkCnKm7mjtBATgDd1Xs6TaPYxgK7F8qfb6iFMXW5XAMoHzqJWRMHKHbjG",
  "key23": "3iMzTLv1vfoX46kD9b6rv8gnb2URyWNQxn6FhaCjM7BYzN314n27nv5VcVRHLskcKXTR7ri5V2eGVf5kiZp9zoGJ",
  "key24": "2jKYo3iUQQtZ7TEqjcUGF32oqc59tWdLoHwXXqr1JddxXfQYapSvdN4YJpsQvW9TTxNs8Vn4NMCBgrozqr5E5rA",
  "key25": "ENcYzBahqja9hhzGj1xUXhjkewf7SQefp84hRQf5adh96S9KPWu2r4Bk7ZKkRj4cubn9SqoHiLC1p64GTLKm6Zg",
  "key26": "5eVosGWZrBtFL2MbD4FYVcArmgZGJJ81MLf3BAvge47G3JCKUjLSSnejsMQp7LpaW1pY2jBF82DSidrjQw5AdZQr",
  "key27": "NMZRDSktAhoGNgVFyDtbGgjsB4fJ3ySoxQSHWcopkT4VAp6UQxyns8Nq3KseVHW5AyLNnYwRq4QE1sdYqqN33Vb",
  "key28": "vSEXcf2JoFcpwurFZdXJHdD11nyYUgknKTuDxTtdudmNHazXh4phZjtgojuV87erq5opyDiyrLKovFy88PgyKaR",
  "key29": "2UR5QALPrqpiz9sPfHj5YTjT72JNX9jS7C9NqVJLnikPGPjT6CFkJcpmuHGURcrA71ysKH8UVMfeT8g7m7tL28Z8",
  "key30": "tnggRnruXb5S7dfAR8ArcbEcRnyRwnzsRTKzjs2AxPHa128Bw2fHMU8LCQYQnKPCc3CDYaYEghJohRLeedfNdwp"
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
