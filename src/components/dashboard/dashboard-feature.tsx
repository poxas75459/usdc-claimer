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
    "23WXWsaqaoST1Lh3e3w5ntitkvK3xrPEfAnwZbskFyxY7MQuST8CMqYfaXPHBvGTMo3jFJFGP8mmLPwnCaGKYB56"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "E4x24UUg2CGugmpzrbys1cDEtm4LEH7iYjVbVuJf7FGUkLhiCAWAqBzSWV673pp3tv9ne9ZAu2EADen4xbCpSCB",
  "key1": "4eotSVNGzVufmY2yofFCWkVqh3RCqUdCjuLTNX96miVfpJrBg2Dt6QVf63kAt7159zSSEgYhtY9EijiCp8vy2osd",
  "key2": "5G4oAFWu1BGWSAfhGEFat5C1guNtDNRHDj1jnvuZbSoPL8hUF1jxPjQkRp3DnQwxFCEMqTRyeU5hhe7vmhzMfU65",
  "key3": "64vNnmHkQ5T7ofPUEuFUUdwDCBGB3zEhHt2pt5pfGqPiXKyoqozFZDaPU69srNM9RfdUkfABZTqJrDNFPSKtMobk",
  "key4": "5NBqvGGqn1E1j4RTCp8YxKkuShmm6qV92RCTmpwM8c3W4g7eihg9f2fCPJbS8Cu8SEmFNvv67PGecinxLXfVeBY7",
  "key5": "ceg38kDqDaCj8zu2EAWJribkmWFdiRP2tUJhvLPFjc4g8CKT7HZeSmpSY538wx6H2A9ugfMZJRmiWRfNsDaPGyr",
  "key6": "4izZa9XdKXyKJYnErRe5fnMZFasbhcUprTE5r2UUHAdmRSC6ZAWxLbFv3cy2cRFwbCdRVruwq8Pg1rATeQErqH89",
  "key7": "4budfFKtVUQFhRoPnWxoPuCciHSEF4KjchiZNQC1pN7vgkT1FUViYwWMHPtDrR8ETMRxmoQjeSQCnG7vD8eX3CGK",
  "key8": "2FUBygRJs2kdShbiF43Ari9JbETz2zswbR5LVu4oKZeuexfof87RAJmfPGQs2yGhpkRHK7xRVxgAFPYeTcaD9ScP",
  "key9": "53AgQiNgUUokXTuSmb22C2CT6oJ7ZrSc6ThCmdPpZEyk9s6bv2hoj91mACURPaVsVKyYcPxitnsF9Rn1oacpuyq3",
  "key10": "HZQvxy2aG2AwkGsmoGXX7qsB5juGS7tnrXMbMsZRjzkJx1RX3FXdoeenmZ3wJ72foYgwtkauJwPwm6erHptNEgm",
  "key11": "5STPPung9LJmv99yxWwoWKjxVpkf6LURPB7FP61MaJHanQDUD6bxwWiz1uRENomKip1v97USKyNU8j4ieUUnQreQ",
  "key12": "2Nik8EjuyTAWb5FXcn2nm5zDiwkki2VkXL734kqNAn1T3pYChJnh21WpFHMxknQxinfEtnJjVA1MKmeG5M8sppdD",
  "key13": "3x9d2hWu2ChMevQqAqXaG9imF6V2Mbie5ZwMoccVeb9tWLrRMFm7CkgsRpdBpUtVsDXfLqNWjdfw45tfvcT2cHXc",
  "key14": "RV5Uyd9yPVSWz8hCm2vJBQtJ7jP6zpCfhcuLoZiHXfrYuCP2KF7vJF168ibZ3bvNMreBu76vqK2L1MAJi4LAxhf",
  "key15": "Btmvm2RFtema1x16iBcDtD7waLgwwshgSoUCrLzmey9HPrPqTGoQM3YW6WhgbTZne85MWNHHctNSq1vEWPvvxek",
  "key16": "2Vp2bPmJXZ48Zwn478f9sd44Nf9p7HhjW8czEsyDpKpF4k7gw1qddmJpnTXwSFnRsgM8bQsgSsREs1AHagNAnmkK",
  "key17": "3oX8DPsRsx2TfcjHWBtyR4E6BcHi5XtKSmaeKGRac8WZbDt8qruzBBTa87hDgpr8nLkSPJLdUt7quY5ATUroLLLq",
  "key18": "2xL9jRSzCw5HgVZn4B7HZQzQiZKjPiPtc8mK4uhC3Bqfy5oJzQRUQSG2ZoVAjZ3ZGeprY4p9uZpiBpum8VMCUjVZ",
  "key19": "3rTgPaJCdANsvi5vZENjJfNMLdvkbiH3qeHrcG2WnnirU87i8xbBkQ3Z1V74RxsWM5SZZ1xbJoWoLdd66LPuSYuH",
  "key20": "3zymqVsaAxBP63Rx4214wWk3dhuUmcV4HaXN15xcsX3fLhVMuXRApHR2B2jgGdgcbspQbbBVqvqsG8d14G5Ydtr1",
  "key21": "4yu8mkaGhpyjafTUjCR7L6SpXe9bNbxEpT22k374JD4qZygFDtQ6PQfy92n7JSUPG6kZe7EAaVXatsrzWpqrZfcY",
  "key22": "24QXwpJ7Tkk9S8X6aaZZxbpDqszewdcvDbescV7sxRNjBCAgxYNpsAqtHLe6kyFmeezXiUXom1tniwooAL3sGoWi",
  "key23": "3TiAW1Xs5h6yCmEvu6CriyVAPfL4mPn5cNQ2eKrVGzWyYtD3fVKcDVq5NJBhRV8e9TZpsZiC17b4iQTJaco47ohj",
  "key24": "z6P3cGYAbWpE53yRcnbhbCokFnvt5SvEbjneYkLfAr8bK3CmbRxzkpQnE7gicaz24MXzi1u2dXENXm2ybBswXMn",
  "key25": "27uHuQtALYbUmeMygV7Nj9Y3oJrmehdGzFFRFcu74nbrEVmQvfLNy6ytEVGpfSHjGWi6QAFvXbkDAzdqRCFUb6Sy",
  "key26": "2Th4FYA89fTRCvpt9JLyroMDMwQ4oMDshKf2sMQgRGKQH1hUtLZgmYgbrfUKbPCbzMjFRLAQ13Bv3tkF3TkGb279",
  "key27": "4z9Byxm62kFXKuYypFx9PsYpGU4k8yj4vkLe1NoigJCaRgpR2hLxDWo4Q6kKebrrCmwjYJMbpg7t5jAVxqx6QLn1",
  "key28": "4mWvFyNo7Th6hqxcxDzZwPpXoGPdmKLNbbqnkhKoC4HXtfpwBNj9tmHPkcAeMUCz97NgBo1K1aRi7ug3J4mFkCSS",
  "key29": "4J4367vADpiSGEbdUFes8sz5pMQcoEe3JC3V6CkXK6hxbYhQz59p93oW4vpqKUeLU5Z4mf2LoQrJobfjuW4KoMmv",
  "key30": "3byGzfrnuwHuxWhNPQTAQnRx2fuvoLJ4aLuG4PDGuQEYdxKQUcBWkPdF4H1hCmTu5PjgtLpmTyjZw6Kt75sfFANg",
  "key31": "45Stt3XCyWxfA39TVUwzdX8MrdXFoP9pGWNpqi1eCkovcpM3kb9CMpDrF8tHYH7upwsAZJhu5mT3ReT4kJehpY8C"
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
