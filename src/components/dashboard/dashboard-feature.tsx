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
    "4hfXYWTQy97pPukViLiNDCFJPFEWL1x4SXbfLo9FUCwhNdnn18zx3Pc6AsvV57n6G2oPTAT1L8C8erHRzWojAKYL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65m8Ci3kN1yYDNfSYjewFHTFP95cWXCRMLV4UvHb6SwoWgXzgJRjML18qqXcrrH9H54KYGm4RFENaW99RaGA6XE1",
  "key1": "2wtPCyULVjjuvAYYNzZZwCCfC5GrXRTZJdSE1UWzqN9y5mxBFKQRivGxYppDpHGj3JPCQL7Hh32wEiY9NnrQuSXp",
  "key2": "5C9fCjGbiJwTooZdCZEUDBmSUUozLkjQ4w7MqWSrEoza2yiMHpfWxZLsftK7RaJ87oHcQ5zQ4NkPCM8A2akUmF7q",
  "key3": "52mcSocvvfmrd8eN8pgQQRgzcg6KFgQEPhdVAePACngzNxtyMRmNoPfbUNCkJ8t2E8GhELsJyJdiCejhkBt9BQxC",
  "key4": "428J749pXXR4GTekPP2MXBnWN1DDqYQHWfy8L5PTaFSdh9qP3i7apDGPSMB6bku4G4k3dVcJNyxPynmx1KDXZtWA",
  "key5": "4M9na6cgEJ1dQ96G23j9YedtHoipLxKg5KiPrbpP4uRhndM621Yzb2sinrYGtbR4kL3Cyk3veG778rBoQE6SPTV9",
  "key6": "3AXDNDTMzooY42tsDUPCmS35Fa28KrrmR7XKHqzbHj7JBfvhDQKGhD6yYButMz2JU92QwYSkTQt59pHpCUe65C6F",
  "key7": "65k84joTPxZn7bGJ33ZDxB7QXJG1zwWzvCz4N3Vhh2oP8zpeX62LKKtQ8AETFfRBtDKBMyQq4fKHoMNdgZ2wzMs3",
  "key8": "4NP8b7p93hbkaxHb8Tb2ujKodus8Qo8WTZjzgAnWB5K4rEe5zy8atxmgkEAgKmNV7R97kk2VXCokpj5iotAWbyfW",
  "key9": "sp5bJdKTuhm4aTqYWieRRvB61rgVSuJuqQUHcqC6vUW9vdZrmx32YxZT8ZWSKexahzasmab4wvpQq35SqCnNFoe",
  "key10": "2buju6MXX21DutHXLKo9qBvKgMNtWZGBwwyveueidAoTPCLUXdampThVU35S2BkUnLfqoi2cc7xjpd6dFwotkkgx",
  "key11": "5Pvs4XDyY21RhwXEAaAMrTUZAAogSGPYWhc39fKtD5nS8JZnRf632fogXQJGajux6iVW58ZYhpcp3cVjUV6mpEvR",
  "key12": "2K3x5ecybqDyGjYzZSGXEzqVavEKKj3hdxQSyeuvYVLGy8ASUKgsXBh9txotQvvYryFaPmQC7qiKtPfAcot1JxRY",
  "key13": "4MEqft5THDvMzmGhdTRq4Eg1zapvmS6d469e3oN67LaNtML3uY9juwyHN8WAuGwLJj7FwN4LePLExKLB4fC3uByk",
  "key14": "5tDYyptqBVsPWFAyaLYASAzW7TbSxrtWCohSNTN34W5VFaiyYbEHyTogPS5yzG8cG16KCM2K9HxsUrDFJ56GiixE",
  "key15": "fRaGRobPWgv83kBja5ZDc4BViYddV5c9hj9M2Wjo1KEsbjXw9DktevtHpg7ZsVL4VQL6e46AjqWJJ3urB9ezfoM",
  "key16": "2ALYoGediH8NzLJra6x4Yjc1dbyr1wJ1GT8x3S5NfKdRr16gWvsns1SD9NYbfSy1HKR4SYgD3TEMKENDuCLxuXjc",
  "key17": "3jEPtiSjGxMUg1KciFtAteNAMzaXQXVZkk8dwcB2ofTbCL3nNc4k1Lyxi6VFUpzevKkAbGRqQs8z26HLjFfd6HPT",
  "key18": "5z6pBRqX3QJ1LykaqocQtxDvjC6bq8uxmTwWDVpbnhP3DDo2LNJwzs7dN565qrdEi6okYik8qjRFctc8mkRHLqcQ",
  "key19": "996gp6MD6RZk7zAPPe6UxSQcVSmsrMf1DE2ZGPp9jsMjqc8JusQtpMXmWusnG6hrg3tjqJK47UpBqdPs8R8pitd",
  "key20": "5Qy3GVUgc83uGtgrLBgBv1mKQATMEHfE4sS58t1CL8LcB6sMYotMVTGCaxo9XVPdQ35ycsaB69XLYtr2Zsngf669",
  "key21": "mE5RZYZtERfNQFAFxrHiDrnJcB4Rxp7cHzjo8mmMkRkTFGEqTJTzEfRFcEis4YG34G3zR8jMo2MjoKiGfu793dn",
  "key22": "2dZU9bGFV78EEjBKSXoi2Gqah5KyjsFYsEnXc4bYKCnqTCQNmonkZLdQ5wvyrS2RJCX5mfbownKkK2ANMGu71f5N",
  "key23": "3nenSkpuo6QsGr3yYgujVqd7Y6fVi3kmitCGwYSqxNgfsHfCCRwdCpj3HwU6K57DeNGooTq3KSfZfGxeS8ihJwjn",
  "key24": "Zjpe772tXPFhTohgR53WSg9zejtnVmFdNq8uyiEzvJ8a45EDUoY6CQo9YicSMdeJTHr6Z2KbQCcRxLRmPwMnq7h",
  "key25": "31ZUJ58wfF3PjZNgmcraoSqAJop3MHwbmanemG74rA3xB5o3yS4Evru9nMc84oaNkopoayFgJcNDzsRa22UUAPaP",
  "key26": "5wZPnEKqaw58WDYQXLWjwwfHv6U3RPh6PjCKEpggzwPjX9RygiVi4Eb4ocJiYnBYjNbHdVwN5ReDSPdN44fFek45",
  "key27": "7XmXNf1PGSs9JoY51vKtJpgJLThSHbBEbZi8pwXMJwHKxee852z6AGqb4nj8pfaodMn4BpjqqMnmpBPJnp8hojN",
  "key28": "2uAgUgk1wtpCuJWB5PKhM2CM4FQb5UqwhrLdXuqjEb3j7dAgyL33DmZqMNdkaGKD79YLq2AUmXpNrgrrc59oydH9",
  "key29": "5NWP49WezdPeWgGHyrX44KuCNABrTfLzEBPbECEq21jifsy4WdfnFkfoXkTzsuKDhzuytS3NcGWEh9ez7UFiLncR",
  "key30": "2D5fbDhGwRzNZaK9qMmjGvcvUDqWZt8AXzy7EyHfnJ6HciUSQuCMCRCTGcxpvHaRBmNPzVuhhm85yAgk84JGVLjM",
  "key31": "3zT67qhYX65NVszDnQi3E97i9xnPoBqHaHyG9EzGWtp9CWirMmwrCdBQWCUuiCPjmbRZzoksPYmaJWZiw1Mhooug"
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
