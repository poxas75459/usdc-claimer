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
    "4wTyrZuxZnBcofSA3Bd9C5f5Pb4Rp1Uoo57bJezrPfdDhBNcR2hBkhgL4SJU88bWN1PUgpow9YpTRb6nfFB2hMCR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DS9VNdctPyEa31bAvwsYUmj9cVZrQzJ4T1zFexgCJw3mhNsSkCNg2GkUW4WquAmeMm8yKHVWfEpQKrkyqU47w6o",
  "key1": "2gjiUTKmUCqhYFf4GduhYxVrJvLDqFLPK3KLPH8rE24ztN6EwBTMrvwpvoiUYMSDcACQ2oMt9Bx9QJA6Rs7CD2fY",
  "key2": "iAmLuue7MoXHAmPKTTZX2WZccFkFy4vKc7Lc4xyX8decZ4q3hFfHiQK1Cn4ijWbPdLqFPWRwNoRGdTsUWAbv8vx",
  "key3": "abvLadRxZ6KnuRMKujx4hwmkEhoTiMbH4FQ1JkhjMB2X7ws9Qii64iqenUseZcwYBN1HaK1Qzg95kyrK1uugTQB",
  "key4": "37aPyCKeb2nUGN7avTrBMWrXEPj3ECRS1ykPXia2XSSgPtS9G5TQr41k3PXWTrcdwSq1jS6csQjRKdEFK4qF3fpX",
  "key5": "2XPe9Z6h2dSyGXYsus1AQMp33KceFgafLbYYbtBtHRxU6TRJ3n1HAAgJUfutRx9oo8S1DLRgWxttvrCZAiHBPJf9",
  "key6": "3C9wztFixr2rv4apz5t23fbeDCESyJgaZz3xXuV7Cu9Sqkf9HVKRsSgeWThX34YCBtJ9B7PikRUxizqhLHSMdjU4",
  "key7": "26594WWVFvE9CecwaCstLHsuwPjiFSTSbUnk17cmH87WHsFjEb3khKmxVSmjnKtxKjDtkocLYF1LBFJf3it5egac",
  "key8": "3Yk55m2d4PQ3gG72dd8v5eUqwS9TfnHWKSUw7xPmZPrHs6udZYHYdCE2hWuzFUw81rXfWk29HRN4q481zoCvahz5",
  "key9": "22dUN6Xs4U1P7LyKpMPMEFhNj3h6To3EjWCg5zVW3uwhseGGHgXznT2yBGPkWp2ST611mfTLp2pPkLqYJkRACnvW",
  "key10": "9SXgseDC66SgrcJ8u2Fd2ySbpyqK8RRVfzThYZrmcskCYHNtMQhyrdStnyU7cvbnofZZ8zHN29se21LCog4wfY4",
  "key11": "2Di7D6gkf2S8bUFWDptcgm43RJZ34pLm6QTJiqCoCYAEXGy7YKHANSDWR6nzgFiNe2koJXAYt3i8RTZaUSupR1Rx",
  "key12": "2T7aotrJFq9Xfxba2UnhfxTG1rwpZ2dexw176Ct4LiF5duvFWqivP61eShKUjiLWRGKW3DyJpgR2dwc2MU12u3f8",
  "key13": "3nm1LqdsKvGNjt9n5sLQ3fcVwoLwBZYFMFwEha7vE4VFqrtaFr411Czs7sVP6Y3QYSMEBCiRYm4gV3K1wU5waFn2",
  "key14": "31P4T7Qnn8osAvxLpmt2fm7YcemPMK635cttc8wrAbD2tFZ4eupD6kFZpVWugTkd2zjX52RAw5bfUGXpc2Ep7HPM",
  "key15": "48UB8XoQg4YeC8ecxzya9yZrjc8fNsGUboLQRWBoeWdkDzY3CGqRMJEQhP8FsP51B5CcV9krjHWwuerTPb5fUz4W",
  "key16": "36J1SrrvtD5TqHMwP1xz1YKGC4wR7vpms9s4JL4Ae2MD3xrE5AuKVhxajG6B8YmKLgPYCdbWsYqHJhpAnnZHPPs9",
  "key17": "5gEFZh9y7JsRbZ2XSJNgMRhwyDYRwjeaXiBuB5GvvRytKT3xo9n7cHvTw5cWL358Adczno88myCAS3mtgBX9zkzZ",
  "key18": "5CPrpdKS9eN4GS8PXJMzD2uADETAV6si5o4GZmfwHEiUdvPMtYvMadhyaTiujTGewD4LVB2D4sb5HVxPreSP4Cop",
  "key19": "5qUqbM7WumtdNk4GfsZzmMYfgwZczZcwx3PGpsK3A42Na4F9Qtpx84v7GiRWZFsmb54cS43qv5E69qssxP83Qjz5",
  "key20": "mBqWkKsbRziR4kDAHqHzWdtepVapdzrxDAGNWRMBsJB9u1JM4mDybv7Rqo8yWug7ukPQrLda3SDZigAtAebhLBa",
  "key21": "3hZA77bdxLaB9BjBBsqNepB7FsTeEngiWEqS5EDBCnT66cRkdaMJ1qbB49wC4nPzwuesukRvjphGx3fQ4ttSm9YC",
  "key22": "4HBqDcHZabp7yaVVDPd9VSyRJHNbPae7z4WyrfxQyaY4oEKFgrJQ6W578M5Z5q2EF4LFEPMffwCaixme5C7ZAqxt",
  "key23": "5oJCPLLBnBpE9bsAXbd76Dy1xxBFnk8nanxwGnujpSHymgNmnjSRojnRK9FG2e66nfwz7ft8k8me8uKzN1tTocSB",
  "key24": "3fGL6WBa5wEt7Sa79TYbcTcBHzNovxnMF62qcHGtFCjM7q1hD4neY1eKtnKUA3akH2Qg2KeMLq9AtTa7Ej3bicfu",
  "key25": "2aGFFaBk4ps1533EfQLdSPQs7v9bBuuFCws1ouS4og95Fj8hya6ipAXLHY1b3Gt6YwHta5T82i7XyzHBLqJTJoJZ",
  "key26": "5yRKn1sSSgRtLVrYfbjhNTjyj3AEWq3KC26LGKnNAshVeP4YGY5KwY6uNpG83YBwhcEmdiw11V3WjjMz22ZqLWLi"
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
