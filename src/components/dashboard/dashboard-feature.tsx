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
    "25cB8SBfxXkJoKLWV4xgdFkewVtx5TC6NsgGf87jjWtQYkrPNRQ7VBZ1YQ8CTzGanLDGiHKkxAEjwDuewLKGyEMX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jP2nuGL1o8vf3fanee64ChnhGgvRaPxUG2rfTpro7Ey7pJfBFf4bQbbBGZK6yYwxdgKsgZFNAZJnEEW1h17U4eC",
  "key1": "Sg7mia6kJ2T54hPgZUhXzXonJiRXnpNkRiotmUcqM27GPBPefZUsSPChohsLUEnqLJUuF4KybbR2YbEaY6CQdmP",
  "key2": "2nZmsBmNYR9S8cGGvyEsyYLwVb9s3csMXeZAZCi8cYdM8mvyMsaqDji1bJzNJo2h88pTHY46Dsz3sf4LE2fSxfbp",
  "key3": "4Hs9t3a9S2mn6A3X166u7VHbu44wpnKK7P7TwpBAJQFFqjrVFyB4BG9iVxdRuiYCz3KAsKiLntjtzJR1Bdg8q8TD",
  "key4": "3WbWevEYE8tDVVwR82JoeCLvHX2FFspith8ZxEcCC2MXtuLgS4vsigeHxTiW3wVKnNCwLydFntYYWcXQ6S5bmU5C",
  "key5": "8tAZyQsgde5EDY5E82VbiYrVuLRdG6Ua2wViXUJuQxw4KdPfu1TakEhYbka6DFoVVQEiuHRtnJim2DocRduUijF",
  "key6": "2FG3LpaEo2tUiLomJyDS2GrBJscNmNvj8A3gbVdaJv3Lk7AMwXKzFV9gjZVWo9eBx75vMWKqDjqoY7xFpGB4CdM9",
  "key7": "46MnDth61NXqv2JehLbmRh7vVCdKosCFKLKmcsBzC7uZKCCaAzAbqkTuQBPx3fA4JJcntvym4MjqtdHFTvmXNsvZ",
  "key8": "5XeK8UYNxfrd7r9Az7LHCnXwT4pBhY8ejoPYo5eMFkvDTU3boaEfZCYH1uuFcbvjBYzRUD4BAEd5fHUw7foyyr4L",
  "key9": "VcCGnuZvhNdxZ5EwQHd1SEbXj1s99JdK8s5FmiRihdrbpgXvEH9PowKojBAPirwk4uRrY47AZTcBR9nH17MLtZs",
  "key10": "4fBeAbXFNuizaN2uwKgFmk7bQbPQu67NZEdNhXZqyqmPLQ3xPq744Jkw1d6uJADT4SsK2KD65dKSk8wLVVETGDqe",
  "key11": "3mMTm34dixy9DtHbvqFPt9ZzcaNvfXR8BGShRX1AaFJNS7g6LnC3SzjqEbnFjozwwZoU3XcAjye5bLQx8tenQiwm",
  "key12": "2gDDisXxnsqLBb5B9Q2YQpL4YHa6yrRq9x1Z85VHYSvP6rqMsc2PNfLTWGfSxi6SdSGQWtX9cG3ZB27FRTsnm56S",
  "key13": "Yeb2NcRZbnz2vjtmBw6LSmHmeQ3sAN3si5ZAqasLVqRpaN8ZuCopwnrbZNxHaLy1F6iT4pBnzZPMDWjfd9WBuom",
  "key14": "pefePQtZXDpFXPTfTwd4RBsPkYUJjG5Gtrvui3RVJs6CNbgWZmfopGUHTe2via6SCCpbvbvedmTG9Z4qnq3pZMX",
  "key15": "3L4Li4ByYfVJn62tYdnUE31fGyD17Ye18iMCEhnon7wxcRwAu73jSFCA8y668u7HYmFZXmbA34772tbENipZHPVb",
  "key16": "4xC2PLiexn6NYf1U4Jur4oek4fCzAG1AfWBwcVDz1We9CuNBjJwS4DonADrubF7PhapZGpjcGipy11emgLgacVPV",
  "key17": "5iKW8TKCFwRQdQFzGAr8SEcYVrSgm291ZwWJHvjAFq5EiZBijHBP9qnuBSh4MecnQTYa17ZWCCfrKr56bj8A5HJQ",
  "key18": "2bxJvojzYuntTbHqW6BWey1GTRZBPB8nJYJDz8kiw19q288yHD2y1MHZyF9r9TLkrGAKYsiGmPJLwVjYgt89c9oJ",
  "key19": "4wNQyZqtU6gPgFhxhdazJp6g9PD4S2swW79ybMgNjPUMtbQDSUgxdYtME4peh3NSgVmqhwRoDBRVu9X5N36zGEoH",
  "key20": "wGyBi1a8gpueHohayPDfhHwknnA7hQU58PQCckC5hFwK8kjy54x4V4ofc4DvpdeB9MpYMWj6DKu5Mg5fUdtWKBb",
  "key21": "xpVbGCLk9Hev1dbbN9vpbSY5cwqykSsgMcjEdtZrwKtEXyXDME4npcrvuzE8YtF64Q4pPDHF18FPbZ28vgDWqN9",
  "key22": "2jgHPmDfj3dRJR2NwmZjJei8YfFo2Mfcf5a9XtEe5t8tkJNtdXKvktATwnZA9STsmCdqLpZWGnTCSaoHLNSWH1eD",
  "key23": "62tatjebkteo5HezLBHVzidE6ZxrUY8hXUwDVp8GrTQxV1SkwnhyugcyBzjJSfyhfoMrs352ZgXgW52teevSkrxg",
  "key24": "218sCxRfjYL7aD6au9vT2VPbfQiz1LBv7WP3DHVaXLGQnLHVFrvq9FFoNRGu8YPj4EnNEPPmSJeCkP3R28e6qKJR",
  "key25": "4AszJ7i1quyVY1JQPqzDtfxMdtHZLjidpvgKgSYV3dXzk4eXVREPNq1rTiDpYtudmrmW1d4pdq7Ld5yXiZLGrCLB",
  "key26": "4GvBhJDf8Bx6qVpAjLSiV64W88gMweHJubiSv4S6XddNfTtkf4pGuyM79w9365Pwx6tq2o7WxtkPuih2aQq6sX73",
  "key27": "Jq12bmp3c5acW4Yz9dicQYu74U1cGRR9AcuDv3ZFFY8zfntHiyYsAn7o9fUUS9EGsvrWddPJs9pKBTtitM4XPhG",
  "key28": "4QKU39531waKaUStnMxptbfdNRnzukicXgPoaG5PWUsexSogTycg53YAV6js9Jx6NqSXHYd6aRDMBHBwNV7HAmLC",
  "key29": "2hs2EtKSc8pQc1gmBJvSJVfNk4Cpr1PcjpyVVLc1ou44kBLTVf5KS1LVvinm7D8oo7JjXWNyDgX1bWGrJBykoVQd",
  "key30": "5B4DJcnTFfVaZwSzvCTAcytf3gGq1fvk9ZZEJ5f95FnComU9A1WDNhhfRKBw1mVAvmPTQipE5TJFZBYZNvoiXzZ",
  "key31": "42bEjDNUbJQonaVF4NwbykKHDGZR63XNfn1eueU8CuZdxRzaYJfWt6a52U3JJuSRdKU27xgpwgS14nSprRGN4QWy",
  "key32": "41RyoBMHqQj5xNBBxEvouLx3Yc3fbLBQHK5JyUMjYCocSEYbVVYEvcg7q79uh4JYTawwx6bjCb7gLUzRdGKRfzPx",
  "key33": "4NA8zMHFToHvcvPZfZtTnu3DWGXtbmhMnAhzFW4GRqqaJhE78Kpg7XwLzA8v2SM7Sg6PFDiurKEM7rmgojyxdLWE",
  "key34": "5GKjkr5a4vTtecHvKbGTspr94LCNz7mup9zEJpPqFTNL7egczgduQuG8AxoBvZUQ8LVVXyeDYZoWYue52JCcXKnj"
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
