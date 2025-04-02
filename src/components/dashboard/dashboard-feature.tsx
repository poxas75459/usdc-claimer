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
    "3evRdDXdYR3A767XByS4Aieh4ZXGWwnAkUDzus3i3gbuxPRybb86kKG59rUmG8CTtGhqQxPHwvhH61VtQr3AjNJf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UDL8oVMTgVxomUm33MwARbqAEqS8tE9v2FabrU1Cgq92pVi3uqjSHv94qQVonrKKY3K5PNQRrs3xpV4vdiXC5PH",
  "key1": "3fmc6HFXTAa9Z4yR8ZTbbuWJVKrGgv8gXXMcUtP6xJpzDcCFwMFhjN6bbbegduzdSNnjA7mmjWaRPEcypwjaLb1j",
  "key2": "4CCNFUR8VvobN9wsQDaJ9BqsENWLwxq5anhTLoQb7cioSovf8CQ2X1pYupBVCHvy8JWwFCPEdXeeXH6GkcRvMBLw",
  "key3": "Qp4p1wDaEFPLevbZnSocaJBt5ko9ex57XY4PZWk9KS5YW3JoVUGwibDUGjjUeSghwjjKYUkcDkgq2egw4nMh3Vv",
  "key4": "9yP4rPZpTAjR3bakKA4TFUjdy8AzLvM6mrLht9BgxwLaFjv8iEeS6ir9ji7gUYJyU5sVt9aSQUnhc3S7GsV8iy2",
  "key5": "ygiMe7ovNBvD5x7BLmmFofNW7pT5D8HabRtdZk1c8hvUMEvY57PnSGzNh2VwzMZ8ppkD56GmJUjXQBvpC7gToJe",
  "key6": "fuxvnt394awKT8jry22rEMXWYC3euNdeHACCQv4qoiMEngX51LvFTKYU3CcYKCKz3CuW42bYDXAT4Bcq5npEfrt",
  "key7": "5xN2MRAbcd4u63YYApqsnTbjS6Fp6KwFEHgnxM7Fx9EHqvHgi5EYkAohx9FZf9MUaAKPDVQLpQaLcZKocD1jjQrs",
  "key8": "5fs2c6B1hJM5QWTHuAMCofUkMJijn8g2U41zGxoVtTzkZsoWRxEj2GPdQnF3KCWG2g2Yf9YEDXFxbXbdXfSJERNM",
  "key9": "2M9meyqtkPi5rMjDLXYrf1N4K8YSJF8awKsoxPdtq7W4DUyGdarkkBTaettzv2k44hQCrSCiMxto1tak7oh7cEiL",
  "key10": "42AzndNW77mrjfDxR9nijxtcRJzHNZZQCv9Y4KHLfiCEorttQJwUpMJ1XhntoxdE26vA18WYordskbs5auByVuQG",
  "key11": "Cwy8fGiqqAoS82Ku2AzoZsuB1GfenhtxU7BB6tbqtmchYu37MgsUgcWvpTBxb2KaVa3svhCx51pgx4xgnzzCMcj",
  "key12": "5etVsYsUamK4N72CsrvgGstCosNPJhpKAH3gVbz6FHG4vE2E8xhUpndLjT5VfLjghq3nrFH47TgRuXsmZDSE43YM",
  "key13": "eEn18hkRz9bKFdAHX7AFJn8MbhLmhzfB7L6SwhXcXeNCUiyZXKbH5pRuQUfeRsipwZeJ4VtYCjca1STFrRjGqfu",
  "key14": "xzY1YXnzXUNFJteWDS6SMGm6M2v1xYWY5XzSeedm7QqZg9uxrQYbUXvo3KqWGotCbefEebgJ6eTgxwBmxseYKuX",
  "key15": "5ci3y81Hv88jH3uKi63yq5vPSzJdrDJccZLndtz5ZWin1LLGRyNSzoUyRBkAeNwySZvnQkJKXnFPtkqSYthY6uRB",
  "key16": "2uC1yCDFbuSNN4trTHbNSTF5iKJiXuikxGLVRxr9og356kKhcQoNxxJu82j3JD4QMJiotaMbKswXrF3BsCceDsuw",
  "key17": "3yFPgXK1kgdGS469T4w5mf7VfRuPorSbjEYJdmi5bjYsTbUbRXgGPtKRW7S2bcUoVYnDhZvVPymLcbqrEdPPeJs3",
  "key18": "3HRgfk64ozJESwMv9sXcPkiG5Qnw6oj888rG7fPXXpNCmZhMccrVv1ANmEYrnWfak5CD1P7vZa87NVrCnX3xiVng",
  "key19": "54dXtoNWV7rxdKhASPwGcCtkNFSMpKYa1wQrPneCSfCFvtRCV6wm9xKPTX4BuAALg6Vii7pw7B8tRqcJPMeRRYVb",
  "key20": "BY5GD7vPVZVbgrXhgdykaKSeg3fx8CUtpwuzzWhNFYorcYSvaxETot5ohRW7nwySaxeHvoaKvZ75jzY1oAJ2hLQ",
  "key21": "cGqHdxmtSZtnpKixH3TXq4byrkYpM3iVcpMgXsqV6BLA2faWphuhHVJng9j4DG2ubFb5E7ReTLVGkoN2mkLrdoh",
  "key22": "gnZquwLCLQa1LzQ8GAuCYi1XHDKi7WGnaZxrCx5dsscRASSyZDFo73s5LYqxBpDHQGXLf1gpX3K1oC4dbb4e2T1",
  "key23": "3Fuv7nbYFmabJcuMS6i6ZHCeQhS52obhjTcCqm4fYgfu9y3h2R3fSB2nyoXTxFDcDyEi2BMnpJUfp4nTLPH7WXYj",
  "key24": "3VjEC8eUtRd1YvVDPpAgK1NeLzEMvCLDPmPKJCVN7hmkD5Z1SqXYYs9gBL1BxPzqwhuCuA6XkakZ2bHwjBzPngom",
  "key25": "25HtoX8aFcZJi4Nmio8KExbirgPqbTmbiYXgp4sutH8NMbjqouh5pVwHTEoPJ6ZPVz8Ehcc612nohaWQtES1ifmA",
  "key26": "478bByi5sg8Wv2THyfPJDL3jr7pGtRCM8CdLbKniJPNiBT1Kb8iR5VjZ8xKURTXD3AFk9AhLjvhxL6HFFt4vrGsR",
  "key27": "2cYJZRNPsKmUc7CbS89C4kVS9GAUoE5zMqSpVtWwJpPBcWbY8T7CspKUBUk2egKx3P7xgMz2d9hSDuYxveixQYwb",
  "key28": "66RuvqgDTNtBXJYrK6AGvzHxEUmEDGMwBSXF3KXCNSwArUpFRXhJNmYXcX3EsnyuCwAengmeTfrCqZg6pTKjcQj6",
  "key29": "5wfCmD7S25Zkc3xr9uaDcCk3jXRmBwhKfAMUDHFeTWtSEVfxz6yuvP9DnxZDQZrLsJ9KAPmVYaEjWpiaevqVcYjx",
  "key30": "291arM8xdv4t1TX6PJ9XmpbhNjPWhA6wMPtrpzQ8r9gAPRT7grNJgkrDGhJvn5vFYJZ7VdE674wPRP8hrUjn4N7m",
  "key31": "4tncAJbM6TG38Xcnt2qGRhfMDqP5ttMgbX2edrZNXPgCQnrTH6Dd2TSSBMXBNxxAEzyPYJJUC1KQsPorh8M2RKup",
  "key32": "36ob3Q3mMk7eK7peTgeH7WU9QxBRoqU9fHG6yKqpsYd3g89jFC9QVKN4ekMoTmy6Wtv3i3ZwPLXaHjbMYRZQdD42",
  "key33": "4boos6AqGZutMGMz7A2S2QbZFWUwbw9jhuuqBocGhjuAogJAhXJPFyzHHKG3rZVTLW23EtP8anozLdWc9BMFKyCE",
  "key34": "sjvT5DKKmfxsuDwNCyMe6EPeauPe1rG4iMziNSTCFtY6riAD9FxLrKFbNNjsNKznTdHB5QH2piW3f961LifMFjR",
  "key35": "3PzExZEuPiZtnNGLLnCZK3cYuKxzt44quhmmRrpN9R7VJqM41DrFsAoV5UCtH69MozuzT4o5RKVaoaBvznUEhPyr",
  "key36": "31mDwuZz8gu89mHjnGXw4MFnMA2qB1XLU67wqw7giwThyRjv8y7ZdrBn3ctcMoNbvwSzgC7skJE8ta4hRqSeRtP7",
  "key37": "GFH2xfx5Xvv8vNguXyFGUfw9uoMTQUykL3s7kVyTtLWtMgBiM2pT5oaG5XiR1Jiy4syTYnQhHecQeF87jhcd1Y6",
  "key38": "5tha7hHsPLpAAxFEeC8zzMMwo2SeGbwHM4JPrVk7tyxeCd1UdW8GkgsGcjwKBGzM8VRBsHKNWNjDDGu8N3k2QigA"
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
