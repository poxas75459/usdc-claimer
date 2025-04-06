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
    "2sK1prXTNYBTVoqjb6MAiEP9QY8cWPCeDTJAacV83G8MSADJEH7qJCnogJX1sCQutn5bAAHDQqmK38jQhBZC4uM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4x8pGQHVjjHuRrGCvArVMiXsP3tcNXV3MmZoZy6EGbFfGTKTqEAYiE3z9USKx71QoDkuUpBcMU7453yM1s6KHDRx",
  "key1": "2WTmJvqWjrC5TavsRgDm7rAfEmKtGByQaqaiey1v3FdNjNGjgWmRMnnnzSVgGHUi2LQRSZDHswDAf4PEUqSG378n",
  "key2": "4gkXzTCM7MTrYECC6TPFZpe3XWfNQHGByksNc2XyoFQ9TB2RY7xvkJrMsg5TRSU86CYqczhtU8oU9jDeDtcnoCGV",
  "key3": "4Y25nkxnUtziEZnd6u4VNGdRV5x9WfBUddV8UM5VMxNjEaqdEekYyvWGj7p5jhNH86W6z6uw7FwdWAiYuq6L72LX",
  "key4": "3NWp8ER2Y6Lwr8s25zWB3dh4NufDpfWZ3zPAY8xorvTcgGfMYdEo7mtM2hRg92hXJVQWNhpB6iVfPErH1jTmmmvL",
  "key5": "Gkrm187mp2MkUJzc524fzQv7V8hjHkKxCZxbbNwBeGKSeqYcEjEHgWs6aY2ZX9i5PozxZF7764SarMPYSrUHk2P",
  "key6": "42JtzYG6kEuiyhcXQV76YnqixkysYwRhzFYCbuZ5TEsRdyKxPaLdQV4mCnoCkjntEtLCcvSuPoPCJwYwGMNPbgD7",
  "key7": "2reweF8uFA68fbuok9h5KGUJBEB6Gj2tNrmCnbADUM2H9d7PnogENvMUefhwBH8SPNbmy4NsvimiRzVYZFMFr8pm",
  "key8": "2WFVVoA9f9wXnCSWNNCFVNfPPNK5AfUNq5ZFo4LSvoGD2gQPjJ7Xit8gnKUrX5GKUfLayrCHWeHVirXadLtR6CQo",
  "key9": "5F2tVv1aPj9i4nC7iSmxMsYbZ85RZEdo8LQDpHGmiLgpgnWMFuc9DRvaeiUfdBeDPd7JxqcSDQYJKcHf7Z8JHnCd",
  "key10": "4CnT1mJ9NTHcnH6311x4B1bXsbLK3qBUpPLtHFnHSkHgY6mEcEmzFUAFTzUv4VNk3FE2gEYcrZzJEwrC67YWi2w9",
  "key11": "219rp1noRusTx9eugirD4CNUDxy4VQk4cGkR2EqKrooDzjUfQThA6w3pkWuCqSHFZ88gGGia3ppQqN1d89PxPvzm",
  "key12": "MdxKxy9jJtScLu7vLGv7RYE6aJHXfpPbb1JskH1PsY16gMyhpndsEAyt5zAV6pUrtoLmf7cyXtdr9y4vnSB7Tjh",
  "key13": "ExnRnaNz83AmgQvt3NMa9ti3t1rnK8NAiHhwVKmZ9kRJTVbJsxugRCpWMbyxat7ZXFNKmQ6yAAiAyqyCE5P5hZq",
  "key14": "5wBFmVEGYnAaZx3165amhCXpTqy3Ej8KspsYeDEpEm2no7ZijgF48PHgBdPQE2pwCH9hfaE7hSurBBzrLdMwNgAb",
  "key15": "5NXXuXGzELe78UUGvum1nzbrs8Zcp9TszBSQxbiz5FUUiLkxDJubS4uYHUCUWoTE78xVKA2swtgdXPMEubgFoywA",
  "key16": "vd4tAGe2P7mFR6YZRPMYoTRfFpWF86jPK4STwVP5MDjXcG7BJp8ekSjtqQWDwDMNvq1w4yMmSXNWeT2DsLLvXCc",
  "key17": "5T4DzzshvLuTSCfsD2fbQfnjbjcDEmUCx9tixj7UGNYvj19jAaigpM6odJKYK1U5bdV8pXVnghgANviQyKJEBdu2",
  "key18": "5aaCSgiHYZR4mqjNi6YTo5iEhSX7yNd3h3SpaFBmwm744dh4oq9PNKkwv2vQV4tYewQdZ768RCo3yoAyPeWytoSZ",
  "key19": "5kdVUA7TuNg1CrVfSzCMXszuddrVmbGrhgVJkF1L2VTsz3BQ9aWgnaRMapbc9EX2HftnnWKMaHCuiNc81ZoWU7qs",
  "key20": "3R3MUYkymN3rNy9tB1DXoFESkDfDbpYptbT8bwNdWmaUAMRsj1gS2L117XFQBvtwQ9e3nhRiMMLSHRNmw3Mv8jdU",
  "key21": "49BBKLTJV3xYHdCqDkBwipbBsMP1ExMJnf9e1ucMEPGTupeUZQ7WC48FhSqyfKijEdLuSU7w86wkTD5aXVyWr7R6",
  "key22": "3mnGC2TnJ55wyx6DDpYKbjUe9yJBJjv6fJhGAmHw1fg6JrnaMdyBgas1NNnfQB2d4p5VPnK9ZrLwVrvy4rUgKgym",
  "key23": "5ZB91ArJHd31ZHEU9U5JPSyr7yk3Wbc5oGSptyqMQtcM1jVY8KBzJSsEKdShG2xQgZu51NfLDnerS9RZyGRjk4vF",
  "key24": "4qd925aBuKVDLjb9owLrWAtLd6tVdzhQGYc1CjvxtZ5KP1VemNF4pqoqFYsVyT2TAV8ZrWhTSVi1xEoYVQuB85Lb",
  "key25": "5VqJs6KV8iW7adL7DfLiEGCzDnyCe3fgXK7d8iFzRB7YjSB53NPXvLHoi4vz226bkRuqULE3SWQesmyxJcb74X1d"
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
