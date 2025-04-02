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
    "3hMdzGiq4Y2QuKq49y2QxJNqpS2NjGiXHAiFA3S7eYC1oLPr6gAb91DK4xS27KkJj969Zi9DyjfVopPoRRw8MxBa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bN1XaBgT1JJopvFdqtuz7XULE9rpXSs8sV8B7SsURRXKhaNy9m2jrph9CJ1Tih2MViYmUm9dhsBMCLjjsRjoe3A",
  "key1": "3heRuauy8fAtv6jpqUhjae4Gb5sQ1RiXoK1o9crAMMfWJPskBL9heiKLNYccMfSMJrAz4SMaZcn9CrE3CiMFsQcB",
  "key2": "XWDixd9YcDDEcbK68zKzsJkFE25fzYMzHoH4kU388ajrG8vC2JmWZzFxBX7uNdKQoMYMKmNXcL4XBZU9oPwvoy6",
  "key3": "4TUQdMYpf76y1mJJNvaTERhJzhjNv8KDwVx1yTx2yd1Pkx368KcDBJGWGxEBzC9ixGvH3c44oqfXuCqX8winHx6H",
  "key4": "2G8WpLLq4ZsMzkWat712LRkVi7BgGjveTQ3qa8mJgNQJTtQzTTpQbgEQiPTfiwMw5iqTSQrnSjH5GdfQK6Ct1fvi",
  "key5": "4jKQuEyw15Lf5tt12uKJJpWTXBZmoMeiRNhP4yvHSfQd7Q1dpqt3JuvSdQUt2B9NMzgMG74uCDkiQxJwVcMWdutF",
  "key6": "3bEHGz5jy9bQRuHNJtbLj6rGW8aUVEaU5Y3BKMLyjkTEcy9YWRDSb6h3RRFdcmmr51zcpghzHx8wFw2gYDhjTuce",
  "key7": "59PCCbiu9CMCvxuTSaRxzVT4S6RArpsMsTL4mMtXkEoXJd3wDYYWHCXD629tEDtixfN8EVuSW3PK2cLFa9ue8e9V",
  "key8": "44egrDRGuWqrbMERCDWmqByM4rd8hc1Zfs4NRsg6a9wyk7p8md5bYC9v1WjGaqg1fudjug1xSTy87JFvQ4spPGfP",
  "key9": "4Gi1kVCHGgTaCuyiQmnLXFWGVf6wUene4ZTKxwPxaJQnG3B3q657U26apCZqMbtb6Pm4kqFBq9f8gyg2KGvHptfi",
  "key10": "2y81iV75GHD5zwzsnm2sHofxnHcTHEKdp9U5MfmGCuVCcr5W5PDcPR6CtRFpTtCPaVfiFDs564X3G4EPziQb3iBn",
  "key11": "62tLFk4uqvGVXq6b9n74KimK7F4csU3Sc3hwjFM99SnwuD3WF4r3pi62fAnq2vDqaTNaEuCccc6nquzoenuR8mVZ",
  "key12": "4kC6iLUi9iKLfP474RrZEzRhncEnod8XkRC6c9Jx5hMVML6epQYr5HyaSiEoXqSsic6NUTWut2fwGBS25Jzr2nPc",
  "key13": "3fhQ4SzyTN2EBkUvsuW1xbnDBSR3B98TtpT4wf5LnWGVVq5G5vQbw92EWwzP8ZnZ4UAnkrEUZpZUr5C1rn1ExyL5",
  "key14": "dypFbZHU7CaPYXKiGxE6Be8vfJYdmXtEWSBThBq1pQEfLgTttPZToKbfKUqnbsydkNsCgwTfVBsCWUZmQXUN5tG",
  "key15": "5thQc3q4zoCeRJPXxg6r4F39D7n5q81Y6k2tEN4sPYN5smSKHFX5t7sDA4VShmEdJ5fVhLWA3Xq51QggJ15qPSdv",
  "key16": "4JQUcceug51qDCTxA7yUSBcMWZtv8RPLaWYy98LNmmMGr5YGEzTZm8X4kV7HUbQ4vLqp6NFHT79YFVrbeTokDnyr",
  "key17": "JbeH3YZCJmeJE5Uq5CHPwE2R8AMK6axtHdMuWD61cyVtzVKzWNrGsBcPYg29LYsrBb3sdRe73p32ratezKEeGPn",
  "key18": "4DddGkUDey4QSyVsm61bTKEZ9uAoKY8u5qh72bt48PZvMra8CHPWCx3fjMv56vedNS7epxf1nff5K4JqEvhmuD2J",
  "key19": "zqSWKD5NBEfVgkbuXt89woE4QbuDUSZuwLxkJjWtsFHigc3WThjFJZr5gSvFtpNSczAeMLtbvNt634RvmTwoLLp",
  "key20": "2gmv625ZicJVYWqoUkFLXuPLRJKvnpGXK4CpERQmy3Hzo9szQ8u5PBUeFfh4T6m5FNVkxaak5a84vnsFdWqMM46C",
  "key21": "2VSXLDPvfYk5yGchuEMiLY1gp24hjE6Y71MhRvN4FeaS3iUMNjJ9zYzYMtEAVG5X8UAd51RhcmXZrDjkAhe8XFsv",
  "key22": "3ryUwQsC3aYvRaSDM4abV2M96cRzvYmPF1U7eKE4SqRXHcQxfW3oHCXsUAB1UCZgV2aBT6zVawhpYH5R1tMWuDZf",
  "key23": "2EKtpcfzW46QVjUfaygpEpHSg6oWgW1nhxVqN12iYcQSBtnDYqduBwhddxfxzxHuRfgfKHHuoTJoSTfYzhxtWgUi",
  "key24": "wijfUZgwvsuhdR23Bj6srTjxzx1cFztQYdax2Fs9HMDUPg3bxfDTK3KgubgL16cuPj6xR9EJUuhjEokuitzmMfP",
  "key25": "9LnkUzmHPZpuVCbSKxbYr4HFTe1grGGmtMxktFpwTy5M291kSm4Z3gX4cFCyKiQmicoNDnBDHPgQxmEgxB2PYG1",
  "key26": "5h27L8Xxm8LuELZwQ6zU5bN5EMineiWuX4gnjF84DUtQfaPjgEEMSY8QLCF2ghoUjX7g7KtmiafsNDemXfoZqgpb",
  "key27": "3MrsnDipjAH2BJcdVBGJnr34FDP6uE4Nj4cFS1YFBgTT5hwcaw6chBTUYadznS4ygyoutWn5QoLqgYFNmQ1ViShT",
  "key28": "B3cRDPQQwr1wUK1AG8nUBZ4YBPRHngKKWZNfoUKjXAn6w7NDi4k1EZ6SA3n3vaSHDQSMJKXvZyp9BQzFUouS7Uy",
  "key29": "3b82ASLttbRFR2hD96B7Ei2SGDt8yN8wNwJVxdrXQEcDjRseakfEXmQH1p8D1EhBtpmSYPAYiMMHxxqDzLRbvVzD",
  "key30": "5aUNi5KEMYaRaMS6BPQDi7ggwPEd6jQhmFifeJdF8x4mnG6qk3iDhB2HpCVPjMLpCAAjBBju12uGtn8AZPr7kGvm",
  "key31": "31acPLVj5TLv2JuSmRZshrqgCDPMSb1uV1xPJeEvZyzTiQLZn3zTqkByGaXiEdY96m8PjsBnzrPyccWArMFgVHbk",
  "key32": "4wUuSuBaMVeczz2Rf9yhRL7j6z6bXonKdC49Peqq144TJRPgiqojbr6YvH41SL2htsnLThrq9ej1KYGpBvXCGvzn",
  "key33": "ef77jK9itF1zc5czb7ZusLoLWZffWViGNctdQgURVx8RqL2T9ire2ntxQub6qbEJFug544nYDU9rX189yeMVj71",
  "key34": "2Yi9B4MmbYfE4Bksa6YY2GGRpZrm8WaL6Rvd2jakxoPxmQnFUBBJAdCRsznHwcStATHS183DArcRgGXq4knCZgLR",
  "key35": "675mz2nfNgVoBWbjUrzBx955C4dSSahgoQEkTaCgzP5YkCiatg2CE1Xm5nn4XD41qzAyMuv8GKLSnaKwGPac4EDs",
  "key36": "5Vk4HYvBNy1ei4pf5m7ZzpyJHnyPx5xccb3UZ7e51LP5mMwhRYyzxPS1jzQLKgwtGy9842ciq2yP9xLS8wuGLYzJ",
  "key37": "5RSh7F1ydohsLPDqPRQtAjP8HpAFRXg5HDBKiGU3uXbY4ckGFjvfH9XUu6Hx6ZWs2MAVCz9Afbdwj6j13tjbtYja"
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
