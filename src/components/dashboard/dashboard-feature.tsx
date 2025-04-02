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
    "2pz858WMKKn1JC8huqHS38AA6RmQSjSEotwJ9USn4CWnmdXcPnRcdCZy8UfV4Y6mZsBtCFVWELuGvDPPnbk8Fg4r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fYiozF1LoQxqea7i2jQ1HfD6D2UmA6PMvKZ6X82XQdwi7eCuVBE3jCe8Q9CBzT3NSzymL2JkXr491bUMkH1zx2R",
  "key1": "64QwpVQeUWyLwhbDW7pDssYLhF6UCTQpeJ3ZziqchBFzdsRrV3Pj7kMZ4sku87AC2A3h5jLPQLKApskUnRAieeMm",
  "key2": "BQEfkwyPKjDW6cLiXELSt4fVKdQEqME3noW2ogZJAdC3Tqzyaz886nmZFoV3BsadQ6fJKZpyTUuyCL1YEa1ShEa",
  "key3": "2ZbW1vdL5ZW56q9asjgopqqcaTVHAf4abqu6QpMD9ex5WuN6Dbh2ZFxjMswBbWyQ1SrxKDXgc69us1f7pFJzwSRc",
  "key4": "3oFyH1RrU6s4ARscW97wctq3VMTmeYiGomgiB59LqrMBdCC4pUSUJSK5jkUyM5vWJMzsVAVamkGf1VnZdKLCrZxW",
  "key5": "5bTNkeNM93sRQnNkSWSzLV9b1KwUj72mVMketzyKbChUmoXNQtnKFZdgtrrM9xbUbuPCzGsLSXUhjchpXfqoeCM7",
  "key6": "2rkgCEQWEF4P92grbwwMLa2nE84PcsLBPGtkC7N8gooAZWRwuPXTNB5zQTFJMXaFgqnUCpN2d7a3G6LqSLseCWJ7",
  "key7": "5K2KaTDJzvdRPpaZbLgtcRiVnpFWS7xcMiMif6z36Qz15sz8B6YjvH6TBscKVEpU3SGFKwvb1zdxDVZeMvxJkJL2",
  "key8": "4yg4SqBbFMsaFmyNUMKTD1B3bp45q2Vdgc5917JH3NrkLLwFneirNKg4YbAdg3DT8ykRectpF3piWbzFqLpvWM5j",
  "key9": "qeuBoKCdasir1mVFBqCSUCfaYMsSC7qWG7qcUSjGJLcnYyUVsVSRoisrC4HgFAzQNiiFfj2UPycwHzY7FxXaGvg",
  "key10": "5996PPYcpEUD6jHvCBZKpEPhJc11CZbY7X2dUYpUBV6joj4wPiR6yFoTasv7SRa6U5BWryiW78bzRNj2NatgEPi1",
  "key11": "5eG6gsuusLP6jxbS1xpvxrBeBKyJ4nt9NwUr6B9CpvWmQdSKWFUXVKankztnWCVcQ3LTWipV12VmZgizfkCCHxMq",
  "key12": "4TdQALWy1Rqc1A1hwMhPiqJ5nQcPDUQjnPnLgGU9gNf9eGRmgZLWpVDNCQzh9GspHHVPVNi1T5WBSYykq9kqZ3HR",
  "key13": "3phTFeXM96Gts3wuzD3XQCjui4Zp4Ts4h6c1TUhFGYuWKPEdHZ1DvVAW2tQXqTZn9qAFcbEMX61ZYBmAeAd9opYv",
  "key14": "2bRs1yPRUJsoJbQ5P2vXUESmUzKHZC7tQdbpSk2w8LEr8xje4gkWRcLyjt4EV8sup1PiUc2ybxZV7n2ymVrTpFa3",
  "key15": "4EfzJ2uPq3QHd3x7GWyy28CTffRa5pi3ASEUHiua7MHuMfWUvSRM1LoEm4rUAv15paefykjd2AKpjuFZ2W5MshEz",
  "key16": "4Nm33amFxJUE3zSBum1WmU1zKyZkz6CTNdgfrZxiz9dMFSgNcZtMxkETgT77xdzbYWiCxsUEqkzzApyCnFGvHPf9",
  "key17": "5RWDK1AstcjgKcDxehBHL7F8gTr6Ev7y4FJKTzkgE2SvVSrM4Bavxy5FWGvEnwQYbevMky6DVsN4v6MY1kppbeWC",
  "key18": "5tjc1P8WQQj5yQV72BmfiZAEXBa89UMrLmyfgk3DjATDqb9abGBmg69LzVZWYKiPF29H6C7j7FfmUbsCJL9T6QBr",
  "key19": "4GcPxCaZFePjAboPYpUD2EdMLPptugKedm4ERKfYsramLyc1h79G9qt7KpAuWSgGjMa8kkwpZzq2yCmpqS5bbhoU",
  "key20": "jmTE5ZXjwRJNBhNTjNide9YrEp3uQVP3raWzgnZh6cmWXmBRZNRXVmdTnrYdbJTdwQo5NemFS32iRDycFexd6hT",
  "key21": "DnthFcWzXmajDVGdiMukrdeLyGor75UuAg4rrnfNLcqWm67UoURPfFLHURJ4eUtAVQjwXCaEW9CADFYWxVscoQv",
  "key22": "5nMUWBqW1CeZcpRJyEcQFJTG7AEqGYTHDyS7ML1MNQXeRrcQLEhAeKKJ1madxJLj5fGGzJsRzL5YWkzBsMkEgsXP",
  "key23": "5r6LTv3Xv8CzcLEcnyrHNBnHCfqTYeHKEWttC6dH1awzunJ3XgWXHi21AzTdAjpBX2Y6sSGj9AWsmD3cFnUtL9gf",
  "key24": "3RG94ZPr9nxY8kCf1gWqMN71zz53NfTvD2Fc5fdvXaSWE8K4uFQy1zUvw35EuBxMqKm4RgT6ffe2PrW1Z63cmoLZ",
  "key25": "3pNvmfRib9dAa2kmoJXj2e4p1vy4cLTzMy18kz3XSaVx7Sy5Kwp1c2F9TBawM7xHEWxdq8aup2QuL8G1xyTxbDMY",
  "key26": "NBqzvXVPdkGRvfKTCozcVMYpuF2wxTZqgNYu9KDkUs3zUHhydjKRertoHbtXYT3P6AXP55iAbYz3AfbroyJusur",
  "key27": "GEDxQfSrh5XoYogHdCRspi87eSFYLcex5QRRmFcaA7oY4M5vNMf2KNfzRox1uRVGRKgZXvRZFpdqqqwPant4TCy",
  "key28": "5EsHMbZNDsXWaWoGvyMzDRcbV2fcdxGK1VxE7d4zUt5kdzJyKc9TnTzoRXGuwVXK7zwqbkXWcexKrr1JuxqFhteS",
  "key29": "3r5baSPYPFnSo6nTnWVyMkq4mj4oMTR8gWcjxvAt1h358dKrRvDb7sTyNPm9d5zCKjP9iQ3xDa6uP31bVsvbCqu1",
  "key30": "3YzJdm99ppMsRyKqJR1zf4sCjBb6SW2nppUnkh4d2zzRx5n998T8qPDR5dcVSwieGuKousP4RV2iaFeZYPNojjCq",
  "key31": "368v5GLLtgGPNt3V2U5Np4anHLtpHhgt2q6HMcFjgfD7EkKW6LJrBTgFMoAzzMHnWY39eXpXtFwKzkratS3wpgaZ",
  "key32": "MZ1jJW7n69YY9odCT5TFLST6ATgxqqgpEYTiSdj1QL1swQETxTBuVcgyt8ajPh6So14wfW7vM7nMZ5q1mBqFCgX",
  "key33": "3tn9ixyxMQmzSBas6UMD73Dqo4LYcK4TQgeR9FMQHyQAQVJ512WpYm9e4mpsJA4nGh9z4gHCRCQZAWgsyC9C4zF6",
  "key34": "4d1zUjffs4yfuxQuM5wiNbn6yN8uK4MjvnU9QiTgf5B91QZwRJKdJjnBZD2ggpcqy7WQRdjpiRVSV6yYfhbsnxA1",
  "key35": "4Z2hArWFrBAh2V4k6nRavsuVHMazkk6n2Xte7ofwJdLmc28rQt9RFGxdPLgTJskFZZcWBCE7x9t1ibaHSwTtDFuh"
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
