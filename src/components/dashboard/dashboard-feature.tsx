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
    "UQVxVWUWsmvFszFP7t8hrG76Sawqvw25sNRQ8R5EYUFm1m2UZum96y3DrFyRmghCuVjvEGCAVGdqjbGr55pW774"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ARDVDQMFV5Wvy3pQshHJ5f3kLmMkwAjMbpBcnCo26vLjivRQSWZGK9yb2LMaJUJpqGHA7XFhMrfDnqawGGhpgBu",
  "key1": "63k1K65tJq4LCiXyG54bnnDidE3WHzq4TFVAeCquXa4Mtmh9ddvX9ScB91kLCcMUb8KMo2yw8HtduP2Ggo49sduR",
  "key2": "4dAugGLVtvMVsqZkmzrAUf5fjj7Lb3ogUoaGUwxeA9yFia7AKr1cFbdSXPuT4YKHHzAmwisZg55c7Dyn86Rwiy1S",
  "key3": "5mQaUk7W4CqCRjGk9HvPxcCNgj9ACzEHisZxyt3AajAXyu9hKyaNeqFR9VF2bNQYnR47pRiuo1Vvc4uKC8dxB1zy",
  "key4": "3pXSCERWXPLB5yo9iZYNTkBbmo2qtoqW6ZF9Df33psaFUCrAcXrWYLh2XJLTkAXVxqBvo89MvCFFpZ9zZ53fUyve",
  "key5": "3oAkCT3U7LKEDwqvF7Xyp1BrwbJG6NDzaPTmdaFFXpBBqCiFePiBoR129fhDaFbxw7BJwropPNn3syoDXR231qZV",
  "key6": "GW3aSCSVYFiv1FqaE3pVpEnYsTTCxCQrEdGyfa4u2FdUiExdXozVnHuTv8gr8e1iXPJxrUZ7dAzDpGTwRRLGynp",
  "key7": "L86LtMeLk4ADJaVBTZgdP6Q2sXDWDX8dLx9nsY39PMhX6cCinecUjmX9sCW4Vqf5z6nNwFQPPSUXRniKsYxDis3",
  "key8": "3cvA6JL6m71u2xmGx1fx2q4Grzffs84kS49af5U3GSLfGHQpy6xbCvxRWkUdau9URZ2RoEk5dkRjQrjfHqM3rpya",
  "key9": "5kqrXFkEJqmpTycBNxzNWtGW3KZprHfZaDgJKEPV4wA7GNsBJsY8rkQVoehv7vbaN2Zg5V43M1VZ3MtkYraYgrFU",
  "key10": "2cHjoooWws3kTa2819RJQvD4Do1ho6knYSmYCw5CW3yQQb3SdvANCkLdJ8ecQ772WkMyynMP746xEh7E2ajXSYqC",
  "key11": "2u2SsTHkuk45aUytS1PY63mdiMM2FvfKWKLwQLVs3vWJKsTQwy72RPP3kCxF1T5Aa1iGY3kQq2cYTPgvhfwghtsc",
  "key12": "3FnLgCgjU2psSPpgmWfPSXV24WW1Dzaikw6WZffbSgM95DboaxVoy3JLsU7EfNNo6jqTwXmfEJ471TFz3rxYMAyv",
  "key13": "5paqcYPzAKxFEBpRMxEHCD1YnQq8LQbws4euqnKVm929CRmiEpu2hM4EpL5sVQfjwLoiv2d2gLyb6hNbVvgRjQF3",
  "key14": "4txWVyjFc3rxZp27JHPUaSjoxMkNiHCAhoiwmMxekVUMpwEcjLP8ML3wRE28kNSL5avcxGxExRU1sZ7CJSpxBdUY",
  "key15": "22HbPn7geGsRD3XEmJtGQXuETXFsiSX1KP8QHyMsMBK3ARr3dpSgmuN1twJn182JUZMym5uLdrJJFwq8oXLPxbNM",
  "key16": "2jWaYwukCpXuBhoPK5RHvgAc5gUVCoaqNzvKWErGRnpcoF7BwHdJ5LfPdx1RZYPxRFoQngra7CjsYBah5ASM7LLC",
  "key17": "2JyMVs5293CGr4R8dD5zzHzVqfxGUj8G6ZP9XWpg98e4bwxo6dwPgiNqQRtbykaKFqeovcTjg9sJ7FsvMiKfSRzX",
  "key18": "5eUAeUay9pCSxPzNervQF6UCNFpEhJZ88f3g6nQGXNo5pNHfrPaEeBSS6EXREYPpsv5ae5W7bLSTdq7khthH3VSL",
  "key19": "2M6wZGPBAK8R1kzvkybhGH7PyzZfbvQq4gWZMp6sstk3jBnuw9VGWKauArBrH2uQ9heZevPxBfVZBjzfXwZBZ7bE",
  "key20": "1SWamf1i3ZBF5zf74EozRT6KrCPqfS6jEfn6ax6ZWyQ2mt6ykCSF7TewkqFTcWBee74FtXuDGCEKRAWEYUTEjsT",
  "key21": "2Hzi3NEvdEMnkq1BptMCvYqqCrghUJfM7KYPs58zVaQKEfz6gfeAfyFzKxzmg7aBC5fLSuPmhVgSwu8RSBJF8P6t",
  "key22": "akztwWYi5s8hYFfpy8JJ13cq3Ev2ns5ejs1dUMQfQdmCNqKxuNwCTj3XvZeZRVoSwMSPkkqPwXuzUCr1kw1Ldb9",
  "key23": "bDiA5QH2A3qZYxQ2oPugxrQ9CHAjPNVx4LLPXvqVuKbBpTrxk7L8UjvVcTfcymPqNEgZW7QF3VhQKdkUC71TntV",
  "key24": "58gKBo7BqMoYRCmtDt2fTntZm1q3BX8nsUSEmdevZS5qyME5p5TGsNqJcBdYRouLvW71SeXQhHUmdYi7QScR1cwg",
  "key25": "tNPhTny9mAEfUWHgdcFQivVszDoeRehV8bonuB1QxetfCFjAzFvgqLs1jDgJekZbJrLeLKL7jzQRBUGKpQUyygu",
  "key26": "3kRcneQW3ZapFqZd6ZmrSuwoZb8bVdcNVHQ4p4upi3kmCNutrgB2jA6vZAJpCLEisknqELMKd83MpS9wKvY2Bwpz"
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
