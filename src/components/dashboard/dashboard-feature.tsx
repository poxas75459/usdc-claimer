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
    "3QXaVfuMs85MfpsM1wZaqjYWaJWE6tUcEH87UzoX6KDGJCGW6D9ZX4VnQmwsGTbauixdFxT5DjwHnn7eE39oH651"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2m4su4ViFm9V8orxHMEF9d1mZc7kydozpfaLSPuNvi7NyvtGTG8vGiYq61ibe1hPrCGgs4hwoDfhUsQTuYRXxWqU",
  "key1": "395Xd8UB77qGuCBz2aZp8Wq526VwmkzuVuEebDz4Tpus5r7ELaHeaUvU282oGPFBjkzh1pC44RDmbmgAF67L2HTU",
  "key2": "26jtQXSyieyGHSo6pyAmrPUPs3RskFbGcrJhaGzK1dFV2fBNLiww7fCbrsaNbjEHGXMMDKMkFCfKMGPA2qjJAKYh",
  "key3": "5y3zbXt4W6KwTHCfWBjKwsidXBvDkB17HSp4aE4jN4g3mNze9LK9b6tfbF4T1G97N8GBbY97cnxaZbC7NEn4RCwi",
  "key4": "3Wu3TfDJggbd1y85DvRss8BP4FKNHNgcoTop4uT9Z3R1k2rkJWHwsc9b6Ann7E32kXzoqayPMENSnwSNhZR5x84w",
  "key5": "2eMTrdChqP9K1HE6FEPsMQ7bhE3JeTe2jUfwifnLpr8Y2q6Z5acp3YDKWn9AXcppqZ26vjk7m9Aeh9yzi7va31j2",
  "key6": "3Jqo7w6jvP3QgAJaX2uPag1MCezZMxwaTGJXVjjYYZn7Fg4UmGpUiujxgQhzVT9LWavRVpEpYw24XetrjGaGH6gZ",
  "key7": "4i7aoavdtY8Ttf2NJVBQo5MfzJjgZXhYUUVYw9msh9wRMwbKi5GMLJya5x2Wa9vrcdgoopFArrHFxBkzEyxbHj3h",
  "key8": "62JWyoJmT2mtnD47Ueo8rXYKBq4d7hoC9BRm5k7YFRDw19G4QTknkovwDtkfmaJB2UZVVUwLgpUmbaYWH8B9XNCF",
  "key9": "3ZJZcCFEN45LUbNwjp1vJQbJ3NA4PmE89VCRmQBDs6eCitdyMJxYjP9PuoCpr7MexRQNNBn5xTyiR6Av1C6gj6Pj",
  "key10": "4Ad3qkjwxCTKh8it7fuRXG28E8ZQzbWd9CPXaZPozVwxc8grqmkoKteUBcpLVTyDf6wACRHhfWfkDAqkmtNQvw5w",
  "key11": "zGUD6QhXocQf9BSwXd5qCGZzvbdoEAsws8QzUaBUBcHCXYaAxQtWMAEkouYjn1MBT1pBE11y1RMbSZwzmwMhBuR",
  "key12": "5G8CiyY5VRrGrL5Vy9zyej4tb1LUogtSbSa6eBrrwHx91AzhTBXrdNZGzEHTtE3B5WjsHUNrnU4FrgDypiaEdcka",
  "key13": "231VG9EdnYHBspquF67HB2xExGhhQdBNzatDsA5dgbwZV3i5hayN4kmC5awDTKQMK2U6jVNrp53wBz8QpnGrFAXt",
  "key14": "f4CyGbFtTP7g2fuGL8xewqvCmEjACaN8vf5hNfo42bLPPnAg9HnrTepTrt6pPi8STuSWB4cBK8xNuu8jXeVBEr3",
  "key15": "3RQrtB4wKgRzJny1q38XW4132aV7GnMt5odjgAzC3pYKVzpeFTdTQaSRhPevUoRZqitmaNzk6HmnEPAWBTVWoxmm",
  "key16": "4F24ZMvYke6sibt6fa1n8b5k3KDdR5U3dkV3gEZoCDMHENuudwaaT15ookbeVQrrS1rFCUf65LVvgkij4rAkkNcd",
  "key17": "4VSM68YwL4kBbSUC9kUozbAwmLRi549xsP6LMypErLZJ9Ne3zZjnYky1PHit8k3NEodB8Uiy3Waz6Zq6Y7fafJ7G",
  "key18": "QsuiELERPi9Wa51XguzLyu8N5jfrws8auA7Dbd5cDZnRfdqWuBJgkFkcuc9TiSq52Kbc6C7UR92KRPSEUnSJSLY",
  "key19": "4AuscnLQsxm4zmbGwLp7rTnLfseMGBtZYW2JrzLXi9K8z61cCx23zKyNjYerFvBiqLMmtf27jDCK7vYRqL2dCiwD",
  "key20": "2qhpKf1qoHQiLc4c3Yn8YQy7JKCsJswMjATiD5HjsHboMgwuTr6E4MQw1hY9yudReYTxfLnaPNHeFwuhPdBwPECw",
  "key21": "55JXZ3tCB8MnZMiDLGmmrUPBvtZkKGjPsfk3CDAabSqYy3xFdPg8JEvoZJZvpRifSjndEXWhBHSuBKfbV1UR56Ug",
  "key22": "54ARPufraV4B3bQbPB82pB6NLJMCLnKPeYeXT8ngxtKvkUNwHvR7N3jLBUjqqAhqm6eJ8av3YzJaXE3W7J9cmZB",
  "key23": "4ByXvCybr9f7NdSDUvEok74KKWRKmYG7FuKgdeaqihe8xPwGqU3fFKa7gKjBinRWq7MCBpVqaDzjFuPdk5dhwXA7",
  "key24": "4LwQouyPE78tbRgJtu3sCEGCsnWY3LQt3p66GyhxeV7VJs8h6bbKWuTSCYJWucKMKgYzJTy5RqEE6UYND78vGWna",
  "key25": "wtjM3MVrWpvFXfMNhrcGXpU4cZeWTq5G3WDTGCz5nmZa4RFvbuP4Dn9ymCyqZkCrnBUy436qPN4gYqqoHAdNUgu",
  "key26": "52wLfLh2a9MLUKMbU6ehYDWwLZYuUH7GV8u5c9BFF58BQ8wSy7pYvJdFAryn89xbzaUkfCKthZ3o9yJ4bz2LhS5E",
  "key27": "zRKj6MDZ5wUcJK8B5yLs2xpSEtM98YqkarfRyAf9TeGpgYG4vgxbhBwr7HoqAUouVdLkEaqQzkYcLpykqmSrtWN",
  "key28": "GmQxht61dwg32xabYKGAoMWR9FUAYJXazc34j6oaRDdSQ6ArVyvKRiphZufGMFw8BoQnJUsddkEWp1cBAAkAweK",
  "key29": "2nrpNuAZp7MEa1BxbNMU7PgX8Zg3SSBp2cSr9MHEBHosJk2zEwzF3p8VzuVPZ8hjW2gfKg88irRwrZpjgeRJoMcA",
  "key30": "225hYwZMkgR3BGe7i8cgHDrJCokZMkJpqRdpigVe6o6KBLHRjBTyCT4fzhj5yZU6TnK3FDC6KyFfxH2DxZWD4Axw",
  "key31": "5u99Dix84wjRoHDrtkDS2kggJXVUy9DGqoYrbn8mh8x2mkv6kCHmzz8oULTtJ2npLt5vBohQJH7toV6c1ePNBxNr",
  "key32": "3sYpQKwRjoXjzX8P3JmX7hS5xpGGr53cfaAv2jkqSYqou9FXvcLTBR56tZ8HNki5jBP1EB9DnntS3QoDjXkwC2UC",
  "key33": "5jZseAP4aBTzRjRvhi5dTnMCRJgBhciXdEosk3F4znDRNhJZ9XbnCDTFKVCcFDwJvNjrbYs7pMCudPWorwumVEYd",
  "key34": "2gYB3qLjaXBsw5eyf9DwfNb2x59bDh6UxJnZCWXKtSxv7W9FQ18WfeveCPpQnzyCjXbYYmESS8eAjfN3onRCCiPZ",
  "key35": "1DsrrBTPi9WadqB6o7p2cCRFCewAk4mHhTnBDjvtMog7PgeUX4QZ1WW13i1NqAGhJtNjRwb1mxNX5wqGa68AYhm",
  "key36": "5jsQswjaoY6goErERW3pkFC3JQtphBJVaPrUp1fcRHYfMaHyLecxwkDukzxbhra4zSENUMqWwtr4SHRw8x2cSb5j",
  "key37": "3735au2eFJFKNLyBqKQ7mmkMAZbYtpE3umpB97T1pE6xVF7uWdZA2mhaCsLXC6fyVn7gbpiWDUoK2Ucvajnoc1e",
  "key38": "3LJuhfvpbNyTTipa9P1wW72wwfDCe1VuKdkkedJyyGg6cLbGfNDJoaF74wPhNWYwM62G3tShCwaxY1EknrLbGZco"
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
