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
    "65k87i5D5BAvdHSqD2ZFSssgdTMKF7LzpXnzqW7rPrVx6LyFGGQg6huZFFCdsu1pAPS1UiocARaYFcWknPYhVG8c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "R6Jbq6rH7J6zGdAKka3ZgQo5pw5aZRVXjqLE3ZdPgSZuu7RG5E5nNexXusgjwMGhHCmmzceU5kScvTMKb7GXEyG",
  "key1": "3Y4FVC6eWDHSrFnCXoJBswSo7F1f4PEqwAyn43mtu5tcW3fbYJgYPtXbzUGD6cBgSmRRaGwnwWDxjin5hFeRHBbB",
  "key2": "64Xo5ZepDi3PwFy4zhzcyifPj9VCZCfPQSVpgs52eWdQ1vnTpdc7DoFu1ThkMQGQsmPCmzTMAsUwuWbvG1kU4QJw",
  "key3": "5enhYKYNQtjafHRGsvcyDvVjaxgNGogDSd6r35iyGaZSH5XeW8vEAAQkACF9zr46ZRANYvHkVzKcPUijVrkXG1g8",
  "key4": "5JjcY1w1eVwautQ9o2ucT4cnfjF7mPES4T2ffkiXSxvz4EQ92F9xzEdWfS6CMrpJD9aEVFbmhHfGNAzZ6xsjRLgh",
  "key5": "2GtSQCoMTNj5ZKf52D14GVXtwSZxgXxsFV8MX59hZ4j9rMvBLEvTUY3AhKoN5nZfAugSbtUAcW73vdfxFhepiKue",
  "key6": "5y5FBit1YnrPymv5AVjFzrhkwkFs2PHV2vHurgnat3sR74F8Rb5GqbExCwUXfHxZxUyhYPxX7jqSCbcemXZt2ThX",
  "key7": "5QYXgERGgRKZjorJnC2W8uGmzCRpPk8sqwGbTZwAFdWWspy5UrDrp3knGP2pR9GBVK2XUX6o7gVmDnPkL2edwVH6",
  "key8": "3MdKiGCLCfTSsEkwthgx7b5ULquNZh6sWXdBhDwspw6TCann1ydCCFWEi5D4qwmBHvZGfFVz8a4gop4QPvbQnEVb",
  "key9": "3GhTvoxHWQi9vNiaehVz5T4kVqRhW6xk3PotbvvyCPjswfXkEWqwSnT7kNDjZFAEatMHrtKLWufFPDQCwyh6mn1w",
  "key10": "3TNQUdHeKkZgMHLFjAZ8SU4yMjbakXZE5ayeF4QNYJE9oHRm6uVQguPZep2z3WVckgVhvZcq6UHnitmjYCQ1Q7Ka",
  "key11": "2z5QMB6FEcwQcwyaJiePjqAAckGwu3CgF6g1KHoNZzjMfHwBT6QBxBb5N1qfUR2tEbntQmA3ySbSS3kfG1YZGDSd",
  "key12": "4DPAzUdcdLiV3SS3DYApULzMR6inFtYrF64SXQxVYqGYzp2A7nwnN9WKajJGYm9kL7bdsr9r6qC22WqCD6Gwq736",
  "key13": "FL2G7QkAWuUHoVtf9RhoW7Et8cMXWUWM6KahLNzBUeRNoC16Zpxv6oaWffmC5z96zEeKrege3CWBED5r68XW1HC",
  "key14": "5SsArtMJFMjKRutmLNNQ24QCf4pFnPmmanE2E1yrHct3DWJCqJi3xXKUjZYE4DYPhztaG9muZSSSXZVJoXgqUnSm",
  "key15": "8UgbBL9VqXrQNbvBiLWguPUVuTUqyHvWg8dSWZ2fV1XesTTVGjX4qU6gxMUDsSuvw6ELdUb2a9zkW8HbR1trfE4",
  "key16": "2kmwXxobnqWmyRMe75RWDcGpNUvGyrH1Ged6UPuQdoofUGdYFiVf7pVBcv6r4cVukpWTz1RzYnCkXLJUFeYpAmF2",
  "key17": "5ennj1kghc2bYhtYSH6yMuhnvThtNYTkYo8zx2UDFk1wMLsJ25ewdozwX1pxGLd3j8XGktLUPUpXAAhwAH27sKsw",
  "key18": "4YLdxB55wWtefWGTS8LRv1p12HCJ8PioJYkA9SKPUEBmRdZ7d6ow2JzGitMJy6iUV8wrfkLbK69m4qTG4gvh71qr",
  "key19": "24Szh3UUeNTy29Ef8ni2L9CRd8bwg22TuDYUUp45BoBYj4cKvFonqix9Bzk76wptxgZg6LDjBkzdneoaWmpt7rnS",
  "key20": "sVnHVPEsfnJMzZmYMMeY98HZiyhbQnEpu9fXCoFUiSPHG2vPeCRse3XEfjD5kVbGkntg4rpREREdTia3Ye5qEft",
  "key21": "2YGCcjx5kLtNbjVrheqeNCkV4Bpz8DbeU6mFCwEHZNKBEwHs2MnTAxg1P8TY4NpfWHf7aH9xrmfCHQ5YbJ9bs5er",
  "key22": "56qfmAZoFqngHyz17WkwdxVCpnfnQRqPrdr4UvjStDroSoeRjmT9b51pMmhA1HvXdqFQ8gtbESnj5rgxRK22Cc1B",
  "key23": "21FRjvRhqpYEp9LMTZJVKGiWJrRjXasphFhUNaWrEmzWo4AqGECzEnbNFF3KG38Q4yMU3n6GKFf4FwhEgKJKAa3i",
  "key24": "2nc3zXY3LfnhiWkWD7rpWsHBsJcgL7rV89o955SyVAPs12qFhFqgtQoNuJf9sUtx65amHmkCRQU6HCv8onHjY4vQ",
  "key25": "5aqjRf3vMkxXm9NLuHynHKvS5cNsg8GikE3saRZYELjPsUvX1WnPUDLQueZYBhmqbS5hQcExwhFU9xn5MAFjkLPX",
  "key26": "3sEHHeG2PQcNN5LV8YUGwQuhcBkqV7KYgttNu7w67cUE4iEcKPpKGxyaxQSVg6jZMN2HwMbCHVpYSfVjuGDjGnXB",
  "key27": "7GH1y4U8FhTB5i9XFRpEQsqW6wDEBwjLZsjeJFhknTis2Q9BHHwAxqU7Ce5FNYFLoF6xo7hnYQSkNcAQJ9y2JgB",
  "key28": "FLEzpNp7jiyw4cb11AesGib1VZaM3zNxu47gj7yAYpPx6Pxvdtb6SiotvNyk8tBVu7uY2Dp2bdfoXPKeyZDpk8h",
  "key29": "3Uk5dXpwBSYMr4epdiWF1wGeZfcBXBPyRhz5Cx2AzoYmUoPeuGbcngPLKAp3HqZZn7w6H77UTkiXW138rqk99zKp",
  "key30": "29r4SREsUvEhjJ6n9anmrDuYodhcAVALa9BYeQ5jkR3d2oL26AV5SXbzDMBk5KDCx8dhwBe6E9h5UU8sQb711M2V",
  "key31": "3uZX4HUpbrdmKWa5Zeidq3aPToedkUM2fLTLrcX4vXbPACvgdpQq4Q3jaW5aUPtk2wCCUDQ1NPDx5dcoFjmMBgSw",
  "key32": "5psJaZ7uYgqV2Vf5xxWy53zjjkyZQvudzjQmnnnVxhqXJBF1NoNj9uJi5KUpe4wZkT8hAfdFX9KkwtUBgM3m1PZU",
  "key33": "64CPML8KEfaHJaVpfJKhG695WPiSeFhA7p1c4Dkfk5riPKGRT9uq5zcsG6wJJLw41eoWX5G2k8AgMpen5ocNpxYA",
  "key34": "41Eda5krmtb5k57TywAmDqcpJo6neAHyhdHdbYTkknS7tXJACwcWhY3mM935FydNVrPcCS6xrWHvRsV53FpEuWSB",
  "key35": "5FzEPSLgvcN1NRGheuU8PaTVgonzTRCdtDsjWtmFUxtGfMiSnQodgVYc9i3ov3fgfjPz2YCKbENtxEAA6L7tLXcS",
  "key36": "2GCucR2Tbeazcv8YbPpujZwD5foyzzjqM4GDseMeqaDJhAHdus3m8w8bETBhzGbW4RFaYbxZFMT29Rkin5UuAptb",
  "key37": "ePnVB9HwK6sKosp1NHBVt9jNREkH7HhmSJpvNQyerSoi9gNaSMJcK5TsvMhnwco2HTmZEMijLEKkPJrzvZ3rzPK",
  "key38": "5ibDwPkYrPaUH516hS9qTEUsbZAmCjUEC9MkWrv4wuRFSaW54TQv8cmvfnYJTZLh2o4C6yYQ1BKGmhxeh4RraRVv",
  "key39": "5xXJWUbQGGtrXi5ZCag5xM98SCxxfPgPpyLuzAUjSLWHZHiTKL5TC83FBpLxWEDKZLGdbhUj2SRi3mVUFe4K1nTW",
  "key40": "54SrGP77CwYSdZkkVZe5oZUcHFKfM1KdpZzwnFCefcm1NwiwPM1myXh2djkafkkig9jLuoKTtR92cNhA3LxpPbpg",
  "key41": "byT29V4LxzBfnBYrhPNRbvPYxtJfBgBoxHK6A8Q7JXcWDuG2roFEYnoEibHMpQFxWZYn9pyLtZKGobrGQbm7yex"
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
