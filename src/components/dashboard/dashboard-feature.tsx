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
    "4Cc2YPZ19zKRLhn5h1NhTf3qYKPw3doz9xrMBTd9HR4RwZNgn7PXsF28QYqqmKWj8Fhj15Bz8gGcirPqyZg8Kggq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RXtzBv4mk6kgLPhgSxRV4cDxB9XMhLpwWdMY2MtGnP6mZyuPyL6YkyooFGN1WYrxtSK5f1JhW6UdwpP7kYJPL1M",
  "key1": "4XWcWGvooivZN95ewojxBdsQFjFyrGCs9yj9oJViFTFEu4S5bQfCW1tsh64NJRG1imDYNdpsPGuMZCk58uv9oJ8e",
  "key2": "GrqFC4GtKzqXr4xFKLj1A9gqQvax4ujGpBpBjBGnQoT8VFBmQoHARh1eqrkLwwVBFRQ1F78BLvCLU2CndHx4nPB",
  "key3": "5dpQSWn9HwU46WeZvkkCYgnWsanDuzYiWsdHRw2ZLySdqsb8PyK6XVwyVGdPRG1b3gjdSJCWVvEzGPXrG8Wfao76",
  "key4": "2Dp7FUdbLeGRTVtF7jTWnwdtasd18JVTHNUAhyi6tGjVeGcSroAJYkMXM2gaqYCWvVjSurmcdvKrLrMp7Rr2mZNQ",
  "key5": "4H1cxwzG16CrVb4CeuXhGrR3xHcdqCMxnxj1FfTNS8E63xRqdAAmEb1hbnzeHTbo3ZU7v6rMU3EZAHF7xni2tCXK",
  "key6": "64PMkiPQwQUfqhaAQn74SJDHHq6iMHTtXz788s76is1Km4T1DGMuLGka3e9wYNYycSUt55UunhXxkHG47t3gt2Zd",
  "key7": "3hxbEGXkYz6qBn5eFgyX9angHgu3XTgDwgGj13qG6xyHQVrLrYVcajwZ9Tn9h8VSmp4qSdwB3zyiek9G2s6bYCNv",
  "key8": "4b78Vq16M3MEyGbyBXdGEM4KCiP32LJGKsdanV7R3ZPsQCTuMBPMvH4dWxhD9gSqVR6Ai4kvzTXJcMJFDN7pEgyj",
  "key9": "1HzaJi18K6864JpseK8yUwfppx2frudPNP9evmbMke6aTgA1QVgiSGuPHXR6gutJLL1qEvKdXJrCwKX4JSsUmzV",
  "key10": "4PZEBJgjNLTo2T444fHbw35Gty4rBjiWgAxpmt7YHzsAgxkiimBjQgek826PuNrFLKTBrFCEGJJnVMZ8TUTbExyo",
  "key11": "7Aysx34rJXvkJNjPmkWoYzMSRgZeDKvmSm3dQEVDANuGtQFCy1wJJn6p2gz4ZknK5mgpqirJPbki3wP7DXvwtMQ",
  "key12": "5HWTKzU4DjvjpjsWVKgf5J8sRGkQbMW62KjVz3n8CMUvZXsgBqFjPGJAvakhekUeZt9LoQ9z29PZ2594eyJqq1Ci",
  "key13": "4w82h3JZdJwXHvfF7VVmKZd4Y785BqMsqqKYeWFUL7xJQ6fpyed61BiShh6yA3HSpRFuK8MqgzjgJozPJ9D1RBte",
  "key14": "3DFJzPhiaMGxMBtSXGCn27dwtvsBXLj8M3XheKHVo6BiVYLLvfbqBvzoFdfwaScB4iLoFRGzgQdSznhTbVPeCkXp",
  "key15": "2KNxh1v5xrGg3JGyZDYYZ7D9pKo8RtScR9uzb47TzYiChxhtSFiREe5bqjL6YLcHLs6nRVoDa3AFkn8QRzhS8wMg",
  "key16": "5HUzZYYnEC78ACMcmyQJE6Y7e1u3EacWUYNfmWFf5jrZv6MCX41SH9GjKHQXWHuwb1PxJLyoB4ALHCc64W8dpWF7",
  "key17": "3gTf2HnQB5rRcUfodKa7489xZmkGDF8pjaToK9nc5ontXvyiVHNyJhJusKMfGfv6Gd7UZDU8GF6z5XNj1XNj37E8",
  "key18": "kHGidCoMnBaWZQb47oHCSxiKgXd1iA6b84FNikecsXhMDqcAPDs2dvwSsNKXrLabm9VRQ5aSgH8NccnGmi7utN5",
  "key19": "SbkSDme8Lja8M9HN9U4vRt5i18K5gtZyNJh6U6HPV9poQEpe5Cr4m7AEX7tzTEnWgVjH5AE7TwvaDfED8T3onyB",
  "key20": "3WAKkJukmQo26htd94qYNqRPGxUxFF38rriV6JVKYcf4VpaxBCEQJg4cQLnkrGgE5a32dTgZg4GCmDGKvVBeocTQ",
  "key21": "3om96yEoQvaTV3G98j7y2jEQ5QhfRpCa1vTsGwRRxG4yLpyFf8g7pYVTSfA9XrLQKkEHUhekaXYREHphfUnyP6QZ",
  "key22": "26NjyBaU8MbCmCRbuy2oEsaXCgxZTSt17SoMmJ7DP1x4hh8aG1mxTD8FSmEhKXTEzpFad4Dhgoj3njFyvMFH2cWv",
  "key23": "4rELs4Qmk9sEtJ4iCnF3tKxzcBCpVSXNzRR8yoHiA51XsbturTAQzQLYYBR6sat2NquGtryJR4rWbCBpkwhkgvom",
  "key24": "2nC1C6tmqsZFXpDh747FZANFyf7KfGmbjcyjoFnL1y2vtBmA8kvjaeXNKkZJRwjiBZQbjfxC9hmBn2Qhp5VGsedN",
  "key25": "5T11rzna3Nw6K4ZJCZNTCQh7fKhARXUNB45jSJYM6fbz6WkQD52NKoWs7xL3mJFeR4u5Rr45DijmVz71j4VkobHL",
  "key26": "3LwcpGGFU3VmTJ5oNRwNBrjkt7LAzK515kVm5brwUGnJxyxUJMNEaj7V2AnxdwiKeufSKnHQuWmx27xibAgmevh8",
  "key27": "2kAa3rJSooq9KshL43cq3Y3mr7wb2YKYowirikB5bT8xkxpJ72RJKf66y8bTpkv2sG2xKJcX96oBXJPnYcQavfbH",
  "key28": "3rKrvTJNoLG2twAEGj6SK6ZdLcArYK6yd4TEwpbmB5hnQG6BcwAjysnk19EqFS61tgSPkCyM2da5jE1HPcwnj1p3",
  "key29": "3h2ncMCqowvkvANNYkTe3A61WwUyts6NcXDqnXA7yymFdNkXwwEw7v42Mv1yRkc9Znod3jEiWjNfhATREr16nMcp",
  "key30": "3pWFyyanZjF3FopY33WgpfT4Cc2SKVox9XMSknWLKSajga8HoK5ySSAp1w2Fxqtdo9sdwiSKTxUjEewHZHkJnvjN",
  "key31": "4esrQdgoATcbMWtuyqNiTiHnPLSLXUAHv3mGzs2t9Ua9vQ9khf8gPPmPC1a4zNX9xcgpJig74GgRAA4Qr5bxua49"
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
