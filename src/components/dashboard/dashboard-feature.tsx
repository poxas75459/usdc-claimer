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
    "5WaKgB9AkenTUP6JnZx7w6mSr8UKHwBmFLrLE2fHgHUMQ6QU9d2r54LMUWxvmXb3Ban5E7NY3FAKyCNiwT1rVRgi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iU9q8L2pkNEzuZjK9joUfLqYk1w9hQqk8WQJVqSZ4KMCMMwAv7ahrVo1LKE97hov5gGahV1BNqaUiK4L6dReP4d",
  "key1": "44SoCyMTV3wjeyyP65cDaHVNwkqnjHu9PTota3prrcgp2UR23Ayo4TKT2vLS3ofeTpCL8guAgghHWG1imMiR4fGn",
  "key2": "5aAiSoZEXuwQaw4j6nUkQhU7Tzktdz1qHDcgXiF25Ea9TSfxp3j2BepJPrhWx1btGFtFkd3j3dsRLW1SyNBrBB6n",
  "key3": "53Sdv9h8KSXFcVsAToEo155c7Aux97HM46GAGaGPHSvJyAy2dvZg9naVdiNgwBjcsMywDx8XpRAn1uyonxgvewkf",
  "key4": "4gd3vNys1qrFHB9cqavoyHZ9RpgoATj7Ugcsei9z2ReGLDhQFzmuvmWjM5LXBeHKY4eW5BwmwA2dHVk9EoNUTWJt",
  "key5": "2vnWAq6P7SGEbcN4KufcPyhngNVcw5ojBLt4j3qwR57QD5zC1b4oBS5a74Fur8bnEJpeKLkbtYSZr4aixx6Tcw28",
  "key6": "2zv8ZV9AH5wBxjSGrcViPy5SRHNPBQKiCKGwUvzrBKGHPwobdmFuqdmKyh7T5fpyTCmNYaxZAFfNWt23gDDVbw15",
  "key7": "3eNMYn2EbLXX3RYuCZ3k18cQ3GnpVKtUxNheZR4WiqokcVtKy1nRUBir5FPtCM2SfDNPrompb5n2nWdqZATvJ2zZ",
  "key8": "4Li27mskEHQmTn2vvoh7PEsj8rPLuZCWm9MmPHs1civptgHngqNmfbbpjFvnvVE5Rpj4Cd3ctEVGVBnyaZzms82V",
  "key9": "4gExJ9YjrXTaxQ6DTnYwiivzZ5Sq4pNkqUe7wCmA8KN2xvfbtkFQpEqswPJgafLZaDx6yzNkX5zWrLkvgKN2xpYR",
  "key10": "zvPiz5fjXz1Wxu4ogNLbFVhvA3C1w7YdMwXs3WDLCa3XBbGPV7DWsoY5Ce1C1pQFnGRuGyQtBMUMtnwyyTsRCaX",
  "key11": "5qTM2wCRX3JLU4QLcePVy998i5EfDpgX8VGoi892gCWcYMbDwb5kWUkd4riwAn4Rm5UDw8zsVmYSeD1dJXHAqDM",
  "key12": "4XDV8CQg6yvVdRfKnunJZYvDSJUzgipfyrdsvgATvoirbavsWqHF4GZvnioEWWaM5jXEHe5M17wd3n9PPmHkJHxY",
  "key13": "2655Q62JFbojCghANhpbcPvVjqmSpxsMoH5Y8kq2U2BZERNp75L8HpRUjfPmUyXinpairPbgFSqeUSv3bnvzyDmx",
  "key14": "3uKPtzfHJhjzbdaqH4JptyLksGkDGNnHSVDaWovneUTNwvvKcBMY2TcxYrpyGSEbWeFmhCzdzaa6rQtPkPDxguUL",
  "key15": "2BhxJGqtGY42i3TfEUGiYBmiyeaVTX1fqr2sHRM9RYmeNtMz3nMWzbP3BQbi5HsQD5HdbWNf84sJNy8swvYTdSC3",
  "key16": "2f9sVZ7h5Fx422XcPYE5UAiTtDw5eDeE1Rgz14oAGjfEiXZ9Yej7XUpPN3mAmL7sLX2CmUEPG8ijZ81XF8FYXt5f",
  "key17": "5293BwkPRNEKYaaeC8ftrHc5SFJR4abPtyzvu9LovvcNzYug4MNr4GeTy8tUMx82sQdyR8CdS4u64P4QgVi4NELB",
  "key18": "KJXPUhevxaXWGrhTE3ebJei8fQ5VPC74o39J9naZ1Tb6NHRNEeYSfgB76K8Z1DSeR6LirzzbVm4E9fUjyuELDiy",
  "key19": "5uq438eeXmp8PaH5Mh44bajHt6kmJxZmuW9Ra5DC4X6DXUcNoYVfR3z5By3feoJBPbndkfzNJKhisiE2KKmUUGyK",
  "key20": "5TV4gKiHH7LGePhPRWYzxymWPvERUQU9d47NjkEaQ23HzWjTYNvW6VUeCiHahw29bGcfPi3ExcSsChsfXc84FxRn",
  "key21": "3BnCGWydLnDJziM4u2rMCHxFYtNSL3wvPSvT7oE1mghmpQdpzTNMK5DGVyUovXEV3ZUB7KQCfdXDouURvkDbMY52",
  "key22": "2X7Ar673Z9zbSYkD2z4JUvetBArk2pWs3tmv4aq6YekyVJ6GVZoecCVhpdUeemuA1HJRxQzQFhxUyRnopHzKnYeh",
  "key23": "222vSRHSNHg8HUe6wWo6ybevJcPncM7Pio7yksDNQpb75PP6GAZzvi3AFHvTCUu16frvWMWZoGxrXrh2xs8x52ap",
  "key24": "5S6wPnQkdBJEu5bGRUzvuChEcNqGJZ3EL7xfM6Y7xDBqxMyHaBidEYL4f4qwdYi78DREzzSwS693jTuhvz1hEGft",
  "key25": "5YnFc5esR5KxH1cstVjCvp4CMVj34devgYAQaUUgirnuarAgX9eSevwqhRN1DVQxKYznryC18199dirY8gTZMKJM",
  "key26": "29EcYfBqQtPJubatosAD7gUdFa7sMsMWZTLXdQhLAQZZBBYswvMAUd5HSWgWwz6Xas5TmtCqBy4mJdZF8LteLozD",
  "key27": "2cLt7EsrywUyNEABGRgynt71sCYvmQRJDpJjAoUNXs5nCracrho8NCMuGd5jNGziR7q275d2vJzkQtxG8gVCwvvo",
  "key28": "595ASCbciDkLh3YNBMnGdmh814bkcWUTuMqvNBscQoAAxrNJEz2U4eMbkCrnQis96DtmpEqwHDRfmkCSAGdDzuFv",
  "key29": "n2d9Hv5Mn9bJKBgcD4iV3coF6d6nyyAsh7sK1rH4bbEyir9ydxzAf6epwZdqxy2PVwZKtQ1S8p1jPuCU5wLnd6A",
  "key30": "5r8kUpfQ39t1c6b2pNyFcLNgCZAxZ7vg7JfzCtYBo9eiQrn61F792hD94myziPcZaumgHJGC5GuZpp3mFC81uqGA",
  "key31": "3FnMT18FypCYegEaTLo64Ym19rxdq9sq1Aun5mziU8mNbPjwfR3dma5da9irNCoJnZbULKCKjQ8MXd6kzDPc4dQE",
  "key32": "5r42aTBpDqHbyGGr23eFLKHnuMHyuFVaEFDoVP2VaEnA5JArSTZWi52rg45sYr642hbuNvfGDcCft5BK9cZwMmL2"
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
