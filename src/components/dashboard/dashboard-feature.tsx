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
    "5YtSGSjQ8nQEYHicphGgVyWP3voiUiobCeWBF3AULq81Cxck3m7JqsGjzb9nH3tXCW3gNtx2uTgAJhU1fKRJyjLy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zGktTxBNcCi6URvtqSmWJjZZFBpHD4RKFFXPFaYqE2T31kvAWFdCGbYuP4qFDMdWfCYRS1DzCHmwhxiBqztY8TC",
  "key1": "2dMigjKadu5FFFB9WajypU1CDtkfYrNyLzUvvLt1N3KyQ3pkAT8Lty33epXoDQFUmyEKoXwsfzik6AmK5tDQ2Bns",
  "key2": "pYbKmNJvZVY1PEMZC6cEF2zaZoT8pXth6Qo1MtmEPrsef5PmJSEnkgYsv16bQB2tRv1TQLE39NZghXUvbVZNwcN",
  "key3": "4P11TNa4U8bnLB76fehvW3pkynpJPLjz831UJmX2g7QqnZ78D3dE1ixioSrB1oy7G8qXu9srVCaYJick1eH77cSd",
  "key4": "oqsc9vu35ayfWRjNmuQZhxKwJY1pnV4xeWs5UkPrxW5voh4iUNHx5KbtL5uecGJRQ1Us5sU2Xw2jMegZcNeL8X1",
  "key5": "3yjoavuT3GDaHmVSNZBDqhKj5FGqR5EFN4PzGgK5V7KDPftvDLGh9vNRq8QcZpDgEFFbG8RDYw3USrb3cy4vxLEt",
  "key6": "ccp3LPZ8oPcWQaXrdUBCbv8BXNxFCEAS2hZs1UtFD6ozXgWwuvGLoGDeUASEnt8QS9yh3vVDSYGzecHyjcVYMqs",
  "key7": "37yFrwXTw3dt8amoi4j6vn9iyBTwfv8frRZyHDR1DtvmhGptfuwmkg6kJYdgy2FhTgV3vsFwNZD7R5Xg4LS9LoT7",
  "key8": "2DxxkTQxbtFp3RF3RVyLe7GPs7oyT8giKHJJ7GrXpezSeSZhRXWeau73k1wSHkKiLkQPL3dtF6V6fjAcydq5VdJq",
  "key9": "JqHJfGeKmn5MSUwxdVdyhftDuWySY2TU43FX2vVetokdiJMb4U1ZxhuugqwWMxV7gdJSFRRCdtEyqSb9xCqCWQo",
  "key10": "BcEynNXCifkp4QvSkeVukJFUwDjBMQ451233D4tZcZNUt3nQnUZYhYzXSyA8hempYAodsi6YKyt3Q1dDQe8UuwZ",
  "key11": "2kSn1dWmedBJwirLpkzGREpXELLyvoxoD8Et4TX8PFGGchjGderHvsVZiUmyUxGD5aLg6zLDsyjuDgV3sdemxfxb",
  "key12": "2DVHn37wQynRzAcSjjLEJSPmgBEo4E764YQF7L7AqKY5DSNSG3hWHibevLPL7oDP3639FUNdS373SUPGaYZu3LnV",
  "key13": "4jZ2PxMY4LN1sWtTdQK4D8RtnW5LPWZK72b5EJuiGkpSMivUofTCmTx4hVE9La5di8PNA65oT8kGtAXoq8YKEPph",
  "key14": "XPFqE793qUhPwBsBYexJUeBDevVV1pSwFUsj8zKkEXMqfoHLpAKW6S1JiynkCh5xGoP4VbJmWi5fJ5EPGr9ykmF",
  "key15": "HzYPZkKvUMBUGgb6Nw7jEMPngH9x4VtfmULhwzzBdUpP1BsZvRaaRoazf8qfuZ3r57oLrhjRXjUDeLvptcEe7yL",
  "key16": "25VK3bwhm7sjCgQC3rk8BrvCD4FCqmCxah4nFrzts4J3JSZSg7qNWF7GQheLfNxkg3rS7TmGjzwxdptg7o5pr8yq",
  "key17": "3hgrKxwaTaLBwWV5Myds6prdsqF4QfMoNoaaoQjCWaKLbd4MzskNYyCaFPBjGqfc8SG22AbWRuyuGeJcRS2LfoJs",
  "key18": "3LooDwmwVEgamCHPTVUTgEDxuAF7XAzCDdZUKCdZwfDXxFDkWzbiJrQ1qSUTcssYU72i39YPkMqVS89sAHgU449o",
  "key19": "pcBFmXacrRcbpDDvZ6RJnzDJvXAYHQsvNtH1cPDrwhUPActgniRPGBp2ugdc1UPqwfjhAENeSuqpwNmYpM9JBi4",
  "key20": "4SkyS66yo5ukPBhPYvjzLqcdN6JiFubHh2uF8DWYCprPL8rmaXuupR5VvGK1U4uftoyvzkafNdLYJkBF2EPhZi4k",
  "key21": "9JAisQzd2bPHMAoBgjuX1WvQVViiQUkPNtpEeQr4MbtqRRHnwYYLX2R6MEN2kvh4CwD4rNnfHzfJUryQB8Do6r9",
  "key22": "5CJM9qKwQsEQ42BUWUw8EvdM1vL3mUarx2k8gnyCGSGuEXuriNYoHHW3wS5nNHxuhSCW5mwwRaUABZfwK2qhftpq",
  "key23": "2Rc5gHSwaPP5XjtvcjQDd57wTYG8MfRug5kemLwYAGqqEVJkLv88iXPaMw6fwgUS2yeicAQRfdpCeeSqoRsMN8bm",
  "key24": "4zwuda3LYMFc7Qwwh4LT9MuceDTp6YKYcapyCvuYscgvznS75hNxjhnGquSPWBDYC7rNFPxKS7HteHyxBmWhuLw1",
  "key25": "3ekEctMmD6TaXBSHMGn4yUnWkBPe7tJiKuPAEKzJnAD84xr2PShfjLrrGWMfoAjTThQYTPE96zbyuwJLV8kYZETw",
  "key26": "41JeMrNEfHorbRJp6dNGiE5Jg7qmDW4PbHDqomkuDXMifhkfWL6cLGeZHPGxuYKtk22VJzkaCxzPX68gUwhBMWmh",
  "key27": "4nRG9uCoJ3WEAvWExFqtJptGpqKVH9Q8ncaGiS6wcdivWr2bYupVa7ALKpL6jFuxtTNDh9383v7LtCnAiDwgnntW",
  "key28": "43npmJDeCghYRwHsEov3R6MbmoJuT43kKiM5FKJipCqrPZxRJaNsAMc73CA1VzAYfDgPgNidSa9Ah1HZWQ9FZKuV",
  "key29": "2Xz2uW6dxSYtYzFLeCvku7xcBL8jfE1tr6Fgjz25SWNC5EjZNw4GzY84xc7odGtZSkhoRqzoh8van8uzspHWQgcj",
  "key30": "5T82BiAFaht5RfrLqHhY7EgBxgVexZUtzyhtCqJHicABXxJ748vAuCi6Fyw3jbY9R8DLpiraxLB4vZCRH9fuZE6f",
  "key31": "SCqcyJHSN9aGhExBXSAWEgfKW6DJadba1wSgtn6PYtTWFBNYKUbLMpxvPVjhHLHG56T64dBRzB9Z58sEVqF98ub"
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
