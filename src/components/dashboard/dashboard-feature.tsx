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
    "45NzZWUuNYJzQyTDCLLtVjWxFJ6atq7cAat35rCzZJ3tUx4iNEUp6vjxfi8w75YX2Vt35Te2XbLeLxmmYVf9JFpr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YKbLQmbkC5HbCCDmpptaHYCDjuTutprXiqYwcBJaDziZ3VppCzb2cy2i7tg4ob9Atbb2XCKxt2qR4oLCf46Mie7",
  "key1": "6tb7NaeGagstrEnhx615Qry5yomhNY7wrr8Qry2NcN5GYVMCUjftmaMtQ1PdsasMYMk4GjNecdYevGhuuWWQ2w5",
  "key2": "3RceQ8gVqtgiMNmoRAZnKPcnWZ95vHsXhgvwN2SH6hNxzvihXwFzzzTEMu9zUuBL5iabD8Aewo9LcWdHEapmfVDS",
  "key3": "4ZuSiyZfHRa9GBkYmWJRWuRdqBWJgUDmWMWFshumHxCvnTz3QEdPvHZouCVVgx8E3NupRuDp6t53deSVcx73kYfx",
  "key4": "3ijLmibT51TtQ9hfMfiSnFwoyNsHc2Vh29a3WN7AZPe1cjNvxVKw9rPHW5fhjbksmtSreaA1zvLYFRgL8umVwWf",
  "key5": "2t69smHZMgaWRNofvvDZAR5yNE1ogKnXKqaMZEbYmQnkC7trqwg6R6Td7N63gSVyndtYGwBtXiRGvCRKKBhurgws",
  "key6": "2GUGj3Ymq9GesoJ8LdjiNxrNWVuD6JJiLVwhRv8ZZEvLeQHvxLooqFCAgPHzBT77MJub4CiZK4DSSB3pvK37WA2A",
  "key7": "28Wsy2dYjCUC8UgkNJSS7FJD9XGUdzCkH3QWTMowzNzngmdWPRb9LXTNAXW2MFs6dHACDu8HXbZxAHLaTW2gLzYg",
  "key8": "2mNnnEKugq2EzHBN1fpyhAxqQ2PkUGgpuaq5mMwRvFMRAWjvYfLsbdTBvhQ62HRcAp3aYZ6Wye9wipyXcRBLsuwu",
  "key9": "4WQQx4urVnLLToWrGtqPQbQZQUV2fiTGF2VjxUSUtyEAWpRu5fcfZUjtSZg4YRpuYgYbgA3DpMAwYgTF3Pa8qpNG",
  "key10": "2eAZpNBCoAf11K8PRKrpLZ7VA46VTUL6RCQSZwgEffi42DaqLbRbUcpE2XheK1uFwisKvz7DNfv6EcDnSESD4JSS",
  "key11": "2USnYfRKTgMjAzciKEbz6fsGWJNNPs4amF3qfJRmszNbpjZiUFeQj8uTJhzcFyCdfVWvXwRf3SoBrsKSZbmHRgTQ",
  "key12": "5ZZYp9eyDfAUnmGN2dzdYVgjUVW3FaPJjJj1vGK48i8mK8DH677xKWfYvjPWTDBFNVFhCqL5EuLbdvZ2SuSGB3Ug",
  "key13": "5KryWU65qz1XXGsNfMa3eoiKhMQwLuDGSepPKHqQ7ePyePZJEUSw54gpz27nBzGERpu86wxg61sLCcc5r8a1oTT1",
  "key14": "SPPW9ubyVZnKog1S9PrLduWVLzU7phoqyThocYMPKZ52NmyJckZaffp2W14CBVq6Ws897RvNYEFXmA4PyQxkpn6",
  "key15": "gzknN2U9LtUWA6UKJn8cRHwHSohCqWo4kLnLLW6ckgUbYCyXXs7qeAPpw1BD9KJHNYQnA6ABfeKvzaTdRUjHHBz",
  "key16": "4s3kgbpC7n9A1i3qr95swT9qRb1YmD5PpTm1qasZrRNDD9qcBqJmoNVKkacaU9KbudpXw2pJh4vH6hWL5MTwR1Ea",
  "key17": "3GAUyiz5eXkAJKeuwmhZEjnJnLsqCUi9YKZYokwtZZahfLpgo89KTNQGCd1LxnjFYjHeuYteR25n67RyFAAnKFKP",
  "key18": "ABmVyENoyZP7XgrHHoig4i2Zk4KJJ3L1kpEDytq1WcYhSDkxKCqKJTWZ3t7q7icaAVdmab7UxwZLPuhiCHeaTHh",
  "key19": "4uEp5LmUFeFwTFVuZsmfy5kzPve9XQ1S83ippTXRzbJVLS2hDZbRzQRPDudqcWKDdT5F485zsGb9qerZQuusc4op",
  "key20": "hkPxmRNpjCEfNDoTpvWssfF6LofuJJfYGa359cSAceC5N3uMn97e22iKJEFYjBmVnbqtALLonU21vgKugmo7wdv",
  "key21": "2ymiFpGHvcMBQHExz8T5uEKYaNyUziLdxTGpbKS5fcxYnjy1UMwNLXKtoPDowZELsyDvYxiMzT3hdQXMVWU4AKQt",
  "key22": "2F7C5qGMKKMp2s5CsYqU1ZxmxidLZQ3gigndJdHehwcHr9DymKYEZAKZPh7XnxhAn9DMVFMzonzJYS4W8Rb3oQYC",
  "key23": "2C5i63y3VPyNYWwEKFyo1rUhhSPjEpduf7CtJhdRw9H1eMknGsanSmcLnHRQBetJBPENSbHW8nZXasBVLAU2viux",
  "key24": "3u8iLpEdxmWFTVrqRarZe9kL7nPFXRTGJo2yYxpPofipiWZrPaesdCHiRmb42yS8tubmiauw2nQzHHAkeLNS9BBV",
  "key25": "5irQRnv1jzJ8m2fDpjeiDvLBkRQey2g6zoYfuWVrfmeL9FmbJp1UQssRR1dWaX5XMMuJg5J1PTzmXAuB3ptpqfEV",
  "key26": "2mfjB7VUXFGSFYqcfBDze72cDFxK3ytXpBdxLmr8MUk1SozWxfwPPtb4PcoE81Rjj3fAf8fgtHGiFHT2sq2vaXR2"
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
