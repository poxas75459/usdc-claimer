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
    "3he2EzjJZZ7KT95NwdBzr4GWftmVjWNd91YZ38DXVyoh4soZGmDBaUjsRVoMUdB91zZk1ri5TVn1SxXSwmPx6Vq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34qEqjvQh4YooPoMhGUj3RuEwjDbkk1ynUqqsH414S9nhDjxYSD6f4jKdRVRMvU2wZ1bUGQed1TNbJ64NjVSZVoG",
  "key1": "28nqTo5siPcMrX9iHh4iSUXWg52a62be3K4K7CwJ4WtkBhC41gk9qHFFQeLkwexZwhL68khXhFYArDgd5M54oaVc",
  "key2": "4rs1H9wXG3GGoYFwGrbnqJgg7S7hKyPQRJQCNnZ7MHewZXC82dCFrPAzMk5qo6VmsvPFhejVzu55euy8aKufVDp7",
  "key3": "2q5BkfW4KEP1TFJohDg4q4EGp6AffPrSNU6CmcjhRjj4kdnLaqha7fjKbRN4G3Wfnr3LAMgu323VZ3cgw6Y3Cgq1",
  "key4": "2NwjrjfcZLkergkh5FGFV2tDRQaCZGQ7M9ssGQRDEAAz1KRWvTn5UVRvhzzE9v5fkvXHiUYKzhZ4GiV1ZBkqdZuE",
  "key5": "3nmwuquxECyt1MvMedd1SezZgh21ymAFZTVgNiY6y6JZUDVkiQFyaR9M5x433nit1gKD5kfVSbe6AKDU7HVYVMAn",
  "key6": "m94RSYcJkFg4yVa8CnTXRDStjFDWj9cZsGxyN4dmXfewDez1HoKKqx8m7QzPC8ajSCxg7etbaavGG43wEsRFFY8",
  "key7": "23eDLXtJuKFgwThTmQ4E5yb6CPkCR4EHgbszWz4riShuxpTwyX6XjnKcsR2hUf2yhWe49f6G5nfm9F5mpK1YbvuZ",
  "key8": "4Bh1D4ghrQbWkujLio2A8aHiub99N3fbv8GpMApLNqxFV8g7SdErYqCVD1BDeWThj63AkeYk1Q7CAuSzHvWwWAiU",
  "key9": "3CMaNqkxF5pohNiTf3YxWmchMPfLutKWAGd7Edf512AzkwSpH8ZFDQuodHhmz29Qjb8pe3QjVmTzGWP8vkvwFw7E",
  "key10": "2szHzVEk4Zx9iFbvK6mr6LMeBa49JuDGjxZUg793z1i4CvSLGYJrw2NXkDZNwB6v7WFmxXYwW8X4WqwdSeSKF7m5",
  "key11": "2CjUEh5rUqbqc3EDdpcxf3huxAQN3zGXu9MDm8duGU1pHWCQyChkuqHdo2uxR3uujp4M1zMygK5JK2PvjDxhGf3g",
  "key12": "4U8yp6zK7jP5YehMdiFtRejfiAjtQL4viKs9Pc7ocuDqAjtXwFf2tvxDPkK3kUfNyvXZ6ToQePpmzjwtxo12mdYt",
  "key13": "4zKddefyxrdw5KMBkZ4Ucjvqy7LTPhuEPaufCseMGkpVFwj6CqBb1RugPeLgSdXR3UQ5J7G1CD7kRDSZpnE93w3X",
  "key14": "2vtiVbP7KUjvQFgPvPTjQnbi6WgeqdUgKhTuz5ogpJhYHGdCvWaU3axByFZHbsUphxzbjWWtdzDs3yPqL71F1sjd",
  "key15": "zarMcVUG124ozjmMTpNNXiRqhBeSPa2TQUaJC7sPXHAzWRJHX5niGJ8tAx7eWgkkfFsvV8ZYE2XGb2U3Qi1uVpz",
  "key16": "5Qyejfaf7FEG384TQXxMaEUEdBoYNpYZoRAT8NUY1scofTjR2o6UumCpVQziFTdKKpEGGdJAp83RudfBZje93mwQ",
  "key17": "4DCmVa8GsHm5BrursWpz8dRCdJjSKM9y5L26AdcbnwHifBMArpxmZj6dzUoDRzALf7F7YSiii25Nohj2H2L5vi9Q",
  "key18": "2jgvU5C7vuxz7qJg7a4eq72xXNXpXSexrPXFzyx7ghL3FJnGZSwXMQLkoPwecEpn5pied6RaX1B81fy6UdwNjMu4",
  "key19": "2JMTK48RtFNBX6z7PhWfYogn1KQpSztuEtnzL6THAcmUdbzpvb3ziPUNFj1qP2cQZ1TcRkdGoQGFf2ii9G7bjTFb",
  "key20": "4kV8x8pajbZK25tpfmAAtAnfaoW7YWLQfsfJhsXDXBaKbRgtp8U6G7uSPHWGSxsqui7muUi1ccmxCC5WWUe3YEpq",
  "key21": "5z5HV2SHJWeyCap32iV4YYr5Yz83kD7aynmcM7Z7eDzJdAja2rroJLE5i9ou3esTgLSVXtJVNvkBqM2trRsWnXBu",
  "key22": "654nLqCFuNtKPDEdUiS6uKVh32gzpetVmHXHfZY1fYQhA9HZiu3ypZANcDmuB9U7uya6tdDV6MzzDwuKC96t5DtH",
  "key23": "4XBsG1Eghktt46SEFtVCR9JAkcioApiCUvyJXGjRVvvGG9EbzuSUZ76QWPQXTrpMxGMzn5KiBbXLFxtXo5NhJNTn",
  "key24": "32QFUq9BQhxtn46HeSzC2BfkA7rY2pfLaYkbo2A4ENCpqdyKUTXZyXoUCfX68cZnSwq9kyiEUrNfcv3gB7RWYc6V",
  "key25": "4jMFWxku3HJN4NDJkAsm44MYBV4ZvemErUyqyvhtkXDhbrdDLptLrchG6mrZhuRLZ7jzZujDudEfGttrGh37u4QY",
  "key26": "2q6FyK14v7BF1vy1XUKG4TUgsm9SeJXHEpABrBSAfY5Rv42SBGexEPDqMcvobNqU3b6AGpC15jofpzbN3eKKKpRS"
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
