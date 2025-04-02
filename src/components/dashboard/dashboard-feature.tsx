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
    "2qmsDkC3BDVpWpu9s43LNVXzuAGtMfecUj5Y7yZK1Atsmva3L4kgQtRbxPxCvi3a6TW16hgpZ59fKdpzLFHfePcS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aD6s3iHTv1iPSP8544c5JNWyoyZ16a8ogAsmb3hmA4EFMiTHGBmyirdcRhKWkXFgQai8iBr5ZZF5z1WUt9RgAcW",
  "key1": "5bSYe2SBjf2HcDfdsH6v7AgoEMGt1c3hX3wqXzCKrAwnjgguP7rFBuXGvV2MXg57XoNqJpBbFyQBbKpeYFd4Whi1",
  "key2": "3JTTQfBYGjpPUfxcKcbbeHV7hLF6bxWorDfjtkQr9koHGUyD11B1GR2wauhxhnYiGmq9EbZvGHheL5Qc2zaKWwrK",
  "key3": "22aR4EYWMmUh5goQPbsQvzrfQCUGGFFFW1QsZhYWXHWrxc2gGqBsjbYEMUapcjwzN2bdZmCPqmLy366w1Jzd7PCX",
  "key4": "2e529GxJr5P8ohMTaB9hMAr7d9qoztwoh3mzJbsKyBQuW3roqaNYAfU1GRvS9xBKrhwsgCCpD1rrX3HwagcujguG",
  "key5": "4TB1MtyohnDYQ195swSnpBLWztnLKuo8BcQ3hGfsEnPkJqN3PAPi4fQaREX3aEeZMMgeNfaiGawayfb5TXh7CCWW",
  "key6": "4WtfMR3D6TeACbzpbdRLxJN9FMbQuxADh6UxMm23EpydQ2G7EK9ceHczckJTFuCcX9eV597HG7DYb2nEzPhzVnLz",
  "key7": "4XpVPPYpMvR3qMwFQVvHtav1tN1BLwW5Fy75jDUPDGWLjvfZrfrRW2rG3zz1t88i6oUPo92JB2LCo1RPw3PSGf7g",
  "key8": "XmLaqpABrGV6adBhUmE3juyo9LvihiLpVUyWQpXR3Zyf1ZvTnVPK1pi8GLy1RbY1QHsLyBs2cPipjowbJgcyyr7",
  "key9": "5naU7qhasccwYXbeaVmB1KwuwE4x7tK6ZX24hNrbe4BviHfivMFkbkSZaSfUq5VAaZxAnaXRs68kAhKpMTnQoMk6",
  "key10": "5GNUdfVMR2C7vCSy2dNyp2dF2zNMxJqma2EwhQbWWrDyKqok7KsSFH8e4zYWDnGNS1F1siCVSSCe7njERsHFvPSg",
  "key11": "XukZ45bSmCBDYz1avPdUAWjbiQrPQARMq7WHXeohDSjyMnFNodp7akq2hdWj9LQ6xxSQcieoraEoc3PytHiC7d9",
  "key12": "mxSNWw9k9Y4fHj58AMsyLXsLC6JZieEJiVXy9xL3JzDAJrQNiAvvkr6kWDWiJWGm9e6c1sL3ux1EaS8oRsZ47o1",
  "key13": "5eTeTPjB9brke1hgLssP3NX5jUCLVBZFiuYaVtinKR1XV3o9515ZHJKQTXuDYFQaNyD5GNTWz4uwLC2Ngovu4umE",
  "key14": "thcsf4YpYvquqsMzmsSgdcGsGow7NbPfGAUAKPbtQeTysYBoA3Dyc81Wdsw7xpx6NEByMV2MpQQiih7sxTpUQTq",
  "key15": "PYrzf6zLLWa8rFuwsjBZ7AFyWsifroMT8dxPrgYPbqnPDgKmayqF1GDp9v35oWmwmZDUzZfZRm8g9N858KVR4Fz",
  "key16": "5BhyTwzkWPtJi7nMFUtrCwenRRrpzJxFnWcTeXuK64LpyApXTxU5sLXz9K1hvM8g2iuAPdwdXqTHTLet8fZVB6UZ",
  "key17": "3emudWEiaKPNBuVnxnqD6Kx2wsBVgZRyFyqYtCBjaiz2wgBQpkVEE8pYCgWjH9LSacsUn6bpMSng9Qsj34mDJjW6",
  "key18": "NH8y5cuzp8vg9LS5kBMWeKEwvTrbRhLooKThhehcojSSvgZXDQmfFJm7vJv97f8hQkWJtr2J2JNee4C4MNinn7R",
  "key19": "MVqjG7a4kvLKFpTSwLTfjJVkQemdQdeTuHxSgpWygDLobZbGP5u747zMUj3rwNDMNdPUMhUKBF8CsCzrh7HgiBt",
  "key20": "3V2MyJhsmLPzgaGtZTzdm3da7Emw3zYbcQgBUDBkwiyNna7Qs27K7AAG5cqmC9tcqTtjvRaqyJ6ioJrv2Xvv3Q88",
  "key21": "4LoFEqZzXYzeWDQYN47h8cztXSuPewgq2BMCrfdcY88MdjgDjaQCZa2oo2gNFWn5Bpn2kHCPWpNEyFScunnqVsda",
  "key22": "4QCAJHGGE2jDpRsTpEEeUrwhkvuWJPJYmWtEHiwyeqGqKUEDLPC1QSe6eNkvwY9UJLqSnE6kYuwe3eKgL2vjn9Up",
  "key23": "41jKupe3JnfadmasGJ9fa7jhjZoFMNNUq3pCqxYLtZr8V5kBiPGMXDiWDaS1SSpD2pXKxciiDrNGRLYGZ5nusTiU",
  "key24": "3UVid6MihC7ALfmmz1FREgFWwPuEE3b8gr4XjJ5HNBjKxikMNihMfMjo2wzWHwJD4Z2GJaYoEjK5bkdvzDUrFeef",
  "key25": "2oFHgkBkUq4DmcmZ1b7ejadP7ytTBDFv4RABEEfBqDMHodajksEcXZr6aYJ8GSEfFfSuy35RyxGuPAdQdwXqzVbG",
  "key26": "5nyj1eUYaKd41jGncfXxyqLowUWbPMjMfTEfJAHj5sNKZSxeXFxtyCxzCtW5tNzygfimDzXTS8rsqYkyApy9K3jV",
  "key27": "3reshEqcGcurvesije14KK8cQyXNLhde7jAQJpuxyPJHcog4nooYVbavPV9aqiwGn6NoaLwXYEavWvUx6ZaCWw9k",
  "key28": "3QjhKeuFAp1yKAKxYn5fEtzYDivdeFi2E9Ee4do2VjgDLLEv1wAqNH3cLtQCpuHMkZRVw9HTsR1w2ofa4zH1DRvo",
  "key29": "4L7hk5Bh1YjfejfGxjtAVHjKpfoKANrK3oXqSC8k3jQ7tYLt1dHHcPwzRnTm3k7YRbwWG6xCv99i6axdsnv5g4Bw",
  "key30": "38SezNfBendsGtiwJr5kHdBUHVWUthmyxhoaG1nMwNR2ou61i7uqvo9o3NrZe2UMJWVzAynqXZ2VN4aVtGtm2fZ8",
  "key31": "dYmHzQRkaPMcyG1BMeBiEe4sJ3KapGb2yx3PgbhkpthiSThCNzqtfj9PjxJDBM1KtgbRUcJauVJG5BefH7a52E1",
  "key32": "5uxnCoyKu3MEKPJBZ3hGf6S4p2kSNcYEEjN9pRXsrva6SmL2aZLrUwEQky6LGxoypFrnZxwuurHWEjAcs4GGuPj7",
  "key33": "2Ww8APEEkSy9bx92Z4ChKvYzDHgT4s6upa2m8M7E4gSTuvhgYyZvYD7fP11W6tRqjR8YEDG2VL5wAnfJN9jrwwzh",
  "key34": "3JB3AxPCcLHyFiewrudpXUnMKD4tZ678WHHrjHzasHjYsA5fanDjQtbkA9K1F7RrYno1hTvY1dbR2F9YAoUFBQAc",
  "key35": "5nzqU2sp6eJkBVtDL65fpkVFBo8YVZY9uVvgYU81Ew2K1AQWVuAHmaqZG7XkKvcCssenfCSNNfazCe1FXTDU9zDP",
  "key36": "5caAf9pGhnkEgi3mYbvXZdsPp1TeqxLGde5FLEJW2hkNcwMSKzNHf6n3BtaAkvCDSDG2CyKEDbTtk9WvFsi51iW8",
  "key37": "2SmffB27hcoBeGyKE1fkzpDtufTfWDA3621fBhbb7s8E2P24baoCTqqrM6i2LzQfLDPxY9poXbdvRWthY9yfdFME",
  "key38": "nuWcYPcQH5SpbP3bAwuazMYh4oobW6VdnNGA7bR85m34jjNyQRVTGBUaMsMR3S7x39XwJBJCKQLkAoYwKtetMyS",
  "key39": "2tz8yPWAgWvmVuaJ6PehWcYjZWEVRVt9CGoAufh422n9iR1kbsnw7K24c7HsarFzai734QP3pHKjPPGMGx49HVV5",
  "key40": "5z5unjRCAQ5RWQAw89T66vJD58LFQCSxBhKCgQ36nyawSQSkFrExkvUAQqse7RNi6tXq5YfAbTvUvHWzvJC128uE",
  "key41": "5SvuxrDHuqSH1dLaEBQJLNHdDzr6mSj4oJJGynbmfP7jgEhMe2JxE6SNyqR7o5KrkCJzmiyQyrUi3CCs9GLEjxHL",
  "key42": "2gjinTNL8258V9UJve3cMMySryzrr25WZj86YAvyGjd3qq2yP4dQqH3HsQLAEKNSDSXg4cEm3smQTFtMykDDbGds"
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
