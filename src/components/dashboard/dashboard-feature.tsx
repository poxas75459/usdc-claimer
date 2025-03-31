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
    "wpTfKFxwcCyb2tug1GUEyMcvozYY3beYYMdUxEffMdPJZGiE5nMLUAig8oRMRfYeNsNdY2HvPeHciY43eRDPmpq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nDmpUEd7fU53iLUa2ARQYSSxcisRmvTxupitSpVXSbqvtWPxS2jw45tn1AvDQM1MH5QRDq5WEqBXZXNL1n5AyaY",
  "key1": "62TPfT7X2pbxVEHHFhmLrN7WPfbc9bBg7GTKe5XRpS617n7BWJxKrgL4gwsxzqQPXpKR4JZCutr6mxExUFJsYw5f",
  "key2": "4sRb1fefM4C2mF3CnKAhazJQRtkBCyHq7N4WHiikg98kZUHwGXJBURuW13sWjXsw11BXUXdLDrwU8sGRtViLXNCi",
  "key3": "4pRr9h5G1mHi69L33EbzKb2ivXnyvUoS8StK8nfJLECi1ijRtyiG6nVtPqDzUwdyJBAsV1DXgjHPkNuYxBsnk11s",
  "key4": "5N7TQJXvi4qBwRoJ3NCyELwfsp3PFNf8cxgWXGBwB8zMBGbbX2ejdg2wTx8bVbsQuuUU44r6zd34PjuTkozwqt5A",
  "key5": "4tjkav5xph37CwkwGayBFrqioVkymkbd5a4bg6xkpmKpwqptR9GJbYMqSRgsPEx3V7wN6EhnTbUvVCi24rxLp2nT",
  "key6": "QXFeWzU19zi5gCmT4ivSqh67F1HKT71uNpfhoprTXjkuQukxVXw95beimmFJCGd6zMqbhVFN2VMgHYYtMPtNkBg",
  "key7": "5pCH6cGiaYx47aVSBR5dQ9hebEgHdXVMUVETVBVjfT9rumjH3rwDZ2b9jyotDVFzvH16xeKKp8SFE2qF9QLjuvEd",
  "key8": "2bjBuGozA4SQ9hXyY34bL86hDvwuwhCRxtJVYfBH5pVX7HG8iHqMinsqtzQkMSr86n4rMcLsecyyG6SqXkVsPPNZ",
  "key9": "414uuq5iAfsg7TFQMsep9uQckcuZuGNLdVrdhUy3c4WKW5Gm7orDSQUY1sF14joZjF35LxUoGMzDP8acmZVWXgFs",
  "key10": "Kr9xV7fk5HcFxdAnyLDb5t6kBjUzkdxYPDnYyQKTdaZcujCwLBsVtCcbERuZS71o17oNj3bNZkomhMWUnozegEa",
  "key11": "25bNDBidNsRKy8Ths6XyG6NXXSiwmuvbd4CCLtwkHKaeQzPMrds6pndHhEyn18hJdrZZBvhYDLkDWjzruoTn797o",
  "key12": "2kwsWkGAKeWP16v7cfjHCkNmd9cDyBBjRZdTykFfy6XkFCpCVob3Je4XaT4peeW4WhBfDGAreKk9JRsKXUwjswhn",
  "key13": "2SJT1x2hVMxroraeVLK5vZdrjzhU3cZt3tVUGBwKmanj38Uv6kwssKVEY9J8pCWiFfKCEmgNkbhStmAgryY4LXPX",
  "key14": "2zCxmroCFdSxF4SmNcYQeW8KiYNmjAHuVhZjnCSBfjTGvf1r9WtJZaR5XXrRUH2ukKSjTyz1j4po5S9SzqCPxk8T",
  "key15": "5hRHAsFXTkriuamD5KktZKbGhZpaoaLRtAAk4ayUmvJDDhteRZJcuYa66qeYtM4bYWW7pnRvvVU5nvC7wws2BQ7V",
  "key16": "3LWtnzwXNy9qf8q4EGnAe1BbYCQSuX5F1qJgvhQmatWkfgSTfbpTnvPTac4q5DjDogtMYbu2PRna3bitpb1WEAmo",
  "key17": "4ysuLUkfHsS1SAcXvd3TfaNJqEBVXzwieSuJsKQr788t9b3ahLytTP26Yn6BzFn5MPUdm1rhNKcmzb1XznjCqFEJ",
  "key18": "3kBmYrUzxHdhhS8yzv7xzzTAYChU9N2BAnD5UvT2LnP5hjLmVNhuUaHMskNME19gHgxf9FE4TJeX1Q4BWdPakqNi",
  "key19": "5eqG2AnmavJsUaXb14Mu44cPKNJNWhoV8rPoKKTg4vfPE3b8toFgsyPpVbZgJ8KBrV1VmkyvaF14BRErgH7Axckv",
  "key20": "3v9vdLrHEsybngb1hWJsR7TMwTNAKB7RZFoA7h3d68Wt8cXAf61HjmqVYkkn1SLemSt7BSXMHsRwL2t2LHvxWe7H",
  "key21": "owD3FZXhiMnqRRxShWXnSosvzfHreMJB8k7MXx4kozN6drro8rM55wadNG55psPRZLhsHYr97joVLsiugG8JAxj",
  "key22": "3ibaw7qE6ZtcdgdEYAtCBq6JPgkvELmoapCQyBy8vgUqERAsbnyApZc9F5rhxKNFVHrLmwGqNSvXZ7zL3igzLZBH",
  "key23": "QwRLGdTBADCW5L3VywdRNuv8DWeTZjSpmGzkjzwPEcJhqFEC3gc6yLGk5hdAVqnM5B44ZFqde9U2uY4xXXqfSHM",
  "key24": "5sxESLrBzcTc2KwHbMf3XQRCDtyXEeCneNC1H22TtkFMfJeiaMaDGBW8fccqoAY4RVbbhbrmG3Hyfrew93LefZ3G",
  "key25": "KEjMKYgBQuTBgkch5mLq1t9x6tsj4znRid7kNXEoyppJ6z8iGFe7HXsWNeLdf845iiJshXymqig5tiFUuVFT1cy",
  "key26": "4bRwLPiti6YuAFv2LBnBuwYVrqDQJDeSwem7sXAQFZQA9AvtN4kCqQsv9yiMVVebobjhvjbdTmTuZVj6QHvZHetY",
  "key27": "3igYNBrx6k1ARWdv8B5moXEQpMKqVaSZc4rxsdv1DPsRMm61cUnNqiYR1K7pNJtvq8s1VnbjJRcePKDjPmfM4UMw",
  "key28": "4u6t9tpeoRTCQ3PBd6RsfL3XLcyivqiGRdnoQEYu3y64UgFsvNhd2KzwuMQzjsih3Vzd9P914QKTUPGEvZJEYtHG",
  "key29": "4oJuYncAjaoCSJ31Ff889nxcJxgpUj5c8bwE6tRyGXoWHuSwLQbsnyjHcmwcw8yUxScaMnVEUq8HdUdURjAkVaXM",
  "key30": "5XiGRUAn1rqYgkdS6YwTY7FPXrrcFjN49aFr8EQeSWaait87MC1SthTqcsGB6xoEokvBD8b76RYs8L1pQzMv96R7",
  "key31": "kp73teRbkicEFWhbeUnv136Vnrb7ChQzaZPk41PYK1FiVuL17eB2xXmvG3v7U77faB6ZnLCkyHGnp4XPMW2d6Hf",
  "key32": "5kUT3JChs3wpN92kygvBZvEPSnADvqUZNgQmqG9wcNF396ebzgdsdXDH4dDRz1sjR6Rcqrytwq8wqgAEwa9ngbF3",
  "key33": "4UGYE5ZNn1E4cGVoZa2j2DAovYVyMG3sbfpMfVeix4osCKVxSknaiceDKiaRWwqA7SAuSou3rhvCXyHoMyFBUpPu",
  "key34": "2ssR2zGCLBr4Uc5hjhtyuAr2brDsZj3jBPYkad5JBJPKf8etiD8Fzm3kExhCgLr5dmpwwv1iWcMRJopmN7E6H9Nn",
  "key35": "hinkHy4THTbAYzRRocgwakpTp5c24bh2h5y558UraRZ8adWaGDbL4f9npnewkihPESQvEaP9UH1ZoFEGPLFRCda",
  "key36": "2zHRoGNVSYatTfh4gEMADWg17mFZ6MRGVuhb6L99ajz385oHiuE3TvQSVk28obNi2xGRgKALU6WpyAXevEk7AHx7",
  "key37": "2FeWBUx75LBvzj3dorZJbyrp72bwFGR8v3Qvn6b23e2tRnSXwBbDSMXr11Zo1xy9a32XgmRK7S2yfE8ZEYPfm3KB",
  "key38": "LF87masVBTmFYMKe4nj9grAJe4n817RbNAXtQzpEFyV1H5wbMJfPy9m1kPVL8G7g3WXW3Lg1PMv9ZHzg5ZsYkte",
  "key39": "XqPSpDAfMvECZGSzXaALYx7TjmfosqsuyZJcSViYYCNRqFjYBUasQxqi4KShdiPJLSbFZQVnSWNJAERZFwrJxhq",
  "key40": "5ZLqWjnqNSJ2a5Hw1RwVAzxekiHLyeEPEjTLsKq8edaeCWyYCzZTvRg81dTovGeEGv1MGQjnkqsZZb6w1Qdv2dst",
  "key41": "31PGCvEF1re51T89gS7ySzwEB9nrjmpKCkAU7X8XGVYuwQNMqHv9nrxU1CFP1jTBLgsVn4Ktq4T1MuaY4S5mquv5",
  "key42": "Zinci4CCRzEemY8kLz4XMGUyuy7j8HJsMhkj8yDjcfwJ15i7XKi82TRw6x2wFk5JrMVc9JzdRaNkukxLknoj29Z"
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
