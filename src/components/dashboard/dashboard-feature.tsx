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
    "Q9fmkH1u3jTeG2WaT6zUcytenNEgqdVKCRVYujifRatBt1gGY8Dokeyk37Sy8EqVu41ib2TPbPrPUTFAiUAdQ8M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WUdNXMM1bogunXrFp7u6UVhhLspWasfL33QjfsPBPoqgpSDiRymVSfwjTjm3v9tgwyCtfT9HYiEQvHtHcsZYWEx",
  "key1": "4kT81AihoBuJHnrsC2zmvmP2HR6FTmS3BE69XupQUoaw7EcKUYpmRs2tSA5S2KgNckVwM8UQp5YasW2Bhi7Zx2AY",
  "key2": "65zBuYsWhkucTH5EcVM7dVjUSQ3ksXMkiupCAoAPXbwjhSvKyqyNdpgHiJbhKUe8QRXeD2fmqG9CfMt9QoBZ3NMV",
  "key3": "oZYj7FUAP3Uhu7vKg2DgCqBDr6t3kPDFCUppk65jsRNtbTZ8r9xiHmNwDJhV9ZL3ipwDuhTNfUSd1hTL4PdFAHA",
  "key4": "4SixVX6wLetz2BhtsdaZaHD6VxyNu3cSCGrh9gZp3tNHUPnABpJPTcVoTkKQbABXkewBhppKo7pgTEWetzQGMy4h",
  "key5": "5CtiC4n6XsdvpNA2pwrSUuptV5EXwzZ2kgtnw83eghcSu3xsmn2bgkUZwzmp7B2jkMtjM3kGrmMKJGWSkKvVbU3A",
  "key6": "4D82mfw8iKtguqx5Mppoay1FZmq2WdCzwnYCmUEmUR96ZcdJVhhBwu7zDcQ8esqKizE7h3177QUPcqrV5sMJL3Pn",
  "key7": "5275d4vRoSyH6Be75GR2DBuGv3HKdwhnAEb4VpJmWBeznYSimRBUZbmR8ogsyEKfdzB9YDVA5UCWBGcL9VPGW7KM",
  "key8": "2SgkreXw8XF3FXyQeoAVj2JZ2NRS46Ln75Enks4hgyX4mKU8sKWWaz6abSDjxqEYVgsyur1DGEo42DHGALxhUiqk",
  "key9": "2Wxu4WBmVWXJcC5nrP2tUs8TBZdjF9soWUKkUxFBfFaq1cYRDLE87YNUd4m4ebczpABk41c15h2fAtZtTKu5DZri",
  "key10": "3KyKZ9rSNrSF3fW1TAPVZmBCw2SHwYhuxv6FyJjLAWCKpDWETiVVkYJmotESbxLRdgnkTkjCa3WStdtZfNNGnFRB",
  "key11": "2yswdSQzLMXbpNnmdKTAv7jnSacCS2z1MTuURzKQHnjJfYxzPqkJXPEr7Kt5pbWk5ALNCVxqQYuoi9bqvpLM9grZ",
  "key12": "62kqZNGY8hvhr6VAStdizGxoLyMsH2QsmxbjaD2RwbmFkYoWEELDXGwqhNAaRGgnwrkifmjKg7iNfAz7SnsoEVxX",
  "key13": "4yGvHM1kzLtVSCATbSSfrRy67HVFZCGknStsrirxHH8peFUoiUJqQLEdWnU6Qz2FksQQQdD1jnXWtN87FxNvGvMq",
  "key14": "4Jv4FgAi9KezkrezSHW55oaaHEBBBEte86AtPMQ8awJoqv68yo1HegkY9fpkhtyYKembiSxTrmu83oNWtRwf1NNw",
  "key15": "448kMnf7D4DNKXkQAKLE9dWtGvEstf7LuwubVaKEARNEsxZz1FJEfw3fwXVZQrdgPiX7TNePGTRsLazWxpE44JR2",
  "key16": "5ELEBpgwsTVJNSrw9bjrLhKLSb7nMRpNPBdwDHsJa2dbM5btWafh1Jg6CfXcW1BoK9HoFGn7jBWwFPPUCzEMkFa6",
  "key17": "37QQNLSQKBuwrpNV8ff9QEDF4anrpfxLPcJ6m9dqVNNpLqtxNtQpjZaDGJKjtXDWfDbxNwPiEduv1Kh4cZw8J8C5",
  "key18": "5KhBXaHXwK7tTA9ebzeXjiEPWkQ2AKxnvxHbg45Y72ZyqRUJpDvAS4fFUVBTyAJB5vGqgG6f2BZxyr5ntV6WFE55",
  "key19": "61ZoyKT3j4STqwBbqNDCMYyCUKWK4QJnkNM1zAhKjrRrUBgqk9xyfBo5KgAPMhEhAAkXH9LkHN1jNh7HQwtN7RJv",
  "key20": "x7L62LmuEqxq3XzLyvGzgvd2Ld73DQFULxDCPashEiQBhWwbdzQCvdPUyLpSh8aNJ8W6fKg2mcxXZrhUx19Jjga",
  "key21": "3NThyyEHRp5SmN7dThFxxcE3c8xz8Yt7HuEifPFYbhkKyMhzN16c4iXo7Dd7bdvH7sResGyw6zwmRSyfWD8Q53rR",
  "key22": "2FNFFG64eNmYJQ7oir2THUNURmCBTmRUYeXuzsUjWzPfakeQfFLdFZzXa4sPr5WC9n4nxYdfrkrYNwbc893zRfH4",
  "key23": "3jjufi68HkRzYpE6kd68bAFwMXbZgdYzwGGrvxNHpPYK9P2U6JqmedUwuN4qg179zfuQmM4BrEybcsMEv8tMgE2e",
  "key24": "4CWKvnPrFZivjNbPiVNwzkcXJuniGhVP3LW3aEiu7hfbQTA3CiCZbkMd2p7c6jLfnzQVgjovZpuPisT3KQNCvnw8",
  "key25": "PJdJr9HeFHRvfP2oesQNmxSM1KNj9ZF4zcF9ac3yGrJoHStRYM9Kr97ShNovyP44F3kTfJxomghTCFigadBP9Np",
  "key26": "2tuQCLPjfEoyX4ZaQWV7sKCMUAsereHes8bDaGZDM8iVYUtDH1mntvBkK66FEQqJ6J82oHLtxodY3e3qj9vbXUMo",
  "key27": "66AE4dLmoCAH7St6YcWgonnfg1MFkher5Vp5aH9N2wEktiF8uxbw3xB2eBxXvdxNgpGXfPqYdrjQf67s168U9DQf",
  "key28": "3QuHZuZy8pT84pExMvUhqBgwSbNWGUynBgEh7bRgVzFdyuvxJkF8PJJDbNs9W4exwVCaVW4Lz8xXRkY5Uwvi8VqL",
  "key29": "5L87yGc5uA4s7MjMdEAUCsHqAe7vGPoANP9Bg8wFgCq2vAUChw5YaSBck86zAbqm49UvtFB5kB4ftwPrA4AGWezc",
  "key30": "3VCX7tmTcKizuHq7iJVmNi459VA9Gc9uWN1DVte2J23PCYH1gsA9WoYYjmFWxhr5yvA82mcMDwuxGMtJE63hdfbb"
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
