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
    "2AUokYhvxfbpkDuMv5j4CJpN1X7BiuJpyWizqFFAt1P3GxuGoS96C59jZPZtvzyrU1PqxsxuFTHmxcsvUhaXJX5u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34kvnNSwXMqovvzR52NFz4FydwsvnQt55HmrH1s7DrsRPWykXXzNooy9T7E2GvPW9fHg9CHJsdCFbiAnsydwN9Za",
  "key1": "2szDadfq3qWTB1f6G6as5j5F9UWC853JUkp7GkNSCgA4VyPXFAbZaTew9sPL7cjkgdbKnfn8nWhTdruaLEwXnDxr",
  "key2": "43cQCsEcHBAcSEeygaDWbF9nZqRbqC1ZoKVuCop6crJnA5P1N7HF5JUWF4pJEnGhHeqZwWLxLxUnFodfhoDQEAhw",
  "key3": "2y87qJGqP3q8vw95KHo64AERVdYtKohp9517DBppzpZkGEXhq9uUoUReXUor1gXepD3r7TgUrDahs6yErhu29L59",
  "key4": "hDk2Deh3P9Q4Rgh8LvFAsqUrddLVNdha4qsqT5b65BTF9K9FTne6CEY6rP956R9FzCvEJ7otjMoaXYXJU5nTYnc",
  "key5": "2Tne2y2unnCAFjRaHhgecX6dvusoexv32mzbCcbuK6r1aP146vEvgVjgRqUBw7S4sm2mf9dgHv4s2ppiqfDu6YEq",
  "key6": "2jRHXT4Mn32744Xs5sWjEv4b9cemtgfnSuhLBAcR82fsuepzuoU5gMhtXkqtC6nCvnucm6jiQQ2j2jHnLd8FfxqX",
  "key7": "496ZE7rCGpbrSk3PRS5K1p3CpZYwj6uWTKdu1cnV6dhutK1STyX7e3Q5bTnmPk4BxM72HistA1jjPerQhAJw8yCv",
  "key8": "b2Ao2af6FUazW2Vz976eXR9S3kYevmS7ts6ayUUonC8DEPwfoC4By235oKQUVZruuJx24W33CU7skgNqoBxR8db",
  "key9": "4MvFHtkXJzWpynAopcc1TQdvadfQotYScHYmErGHepcRBjPQzk8DvVjiC13uTV8kLpkRRBUXb8NJhS4rZ4efsoR9",
  "key10": "LnDaBRxV6JzLnLPeJDANzVsafrNSEkJjbfUsVTvYf7f8ijK7XpFrd4wySBEMb3yZMVicJrwvyXzrgX4sNmRBMtT",
  "key11": "2y1LgXMxtrBpQ1M3Jhh1c1s9VcgGVJnU9FjPcktxZ7uaq1Tebqi8kN4A23ZBDZhTLJysJbmDx8HeebA6pAwWFLH5",
  "key12": "5yafQ7a6LCqbEfrK5KAPPyvhLEQsqnjFp4K7HDV4HMTdzZbp8JakvCeiUyPF1WRDp8EGEUgp6FpoibiLJJ3ypRx6",
  "key13": "2b4BYUo8yZfhFhhnvfBHVgiLHSJp2fHJrwsmcvBtxUVufSwZP2Kh52KrFAWvk8rPQqrpyZvhLa8L55KWL6YmFMPL",
  "key14": "2AUn2oZpf66yppCcemnU8sWpyi612QkfPaWdPvtMEsE4PdPeMB9oT9sELvmhFainYmLV2WZhRsLwhA5iZTydkBLW",
  "key15": "3u1fygMW46fD1MZ8YoHLdyCad1XruhiB6Nm2qH8FCg4PrwZH2XdyCyxVYFgG4DDtEVZiKn2pmBM3torYpM3uUSKx",
  "key16": "2BvQCTQuDKhiS8j65UVeoGmBU1keJBFEfdsRcWptdGw9HJZwHtG5cTzN6fL8FSD2sbirou3yc4cFvuhefEkRTF9d",
  "key17": "3Uvbfsmb9JVYKjhB3wkhVeiApH6mV52Kc8e42h6EdTfGivjmiyEFFH8VqoHjd7GdYjuyVr5VFmXHwXRtsFsUrbx3",
  "key18": "2G7CZ5zRoeKMvQU7RuQGd3bL1t46xsaFMxAsDdvoWskxR2p3pTdZD39CuSTPPydi4gJKnxmxFUDtWqN8ZKakbdXE",
  "key19": "4t9fxv9Kbd18Yiscnh4TJkXFaKHaEf636jueaPtbjZb3B8BRdWmndmJB9cwrxjwhaPByYJtZqXyURsNjsVjriVTd",
  "key20": "5W1NGmrSjwNEQDn85qWA96G1Ve7w5zANWyjEySx9WZZNffRcN8KXisSvYYGdzTcXD4JnJgUBheeRcE3Ao5YcDzsR",
  "key21": "fdNSN4MfnZ6b1bVCZGFJkDqec496kmVeJmswdsPzb6vQDD7fea4G3ReCBUfUCBd2k5AqrK8oRx68GQsTC2q22Mx",
  "key22": "4CQUCA5i1m53wDK18dUHxP9HkPsxkH2AzaLYYCCeCJSBHfy7NVP7hQYduB7ECNM81ZgbenLR3pyfEXtqVTxfggoC",
  "key23": "jGX2Azm1GDXUvjdX8Q9DFHWndNVSrfEMueQ31hY2oKdDx7JabxPxuop1XRDvyTYkCDyYqDCfSxggs7vLGrUPmfa",
  "key24": "4GNTURCrwvTY4bJYk3GicGCXybnb4u97PWjM4WbkxAY5G2KHGzfixKbNhqu4m3J2SJau5d1QRUhDu8AT5oT5oZGA",
  "key25": "2obKNcFt7CCSP4F2eUeMEj6gxM9CbwUEAfaSUhD3aVZAZHB57839JQp9gVyeZBmZE7mPXtxFa39zYH63gvqTBeLv",
  "key26": "5ozeY3YV6VFNkgmPhKcKvuu2WkpeM8cdbJFW2m4A7nN7v8zoAUDyAu34jmgHtscPuaroKwjQvWKr4ombBPcgQ8mD",
  "key27": "3WHE8tCmXC43SHUet6KNrRNqEABeHj5Gy8b5QdSKaQ1jumw8fSu7qPGvHwXtrdnTCLFc2191Z84XvaiuxRbNW6yj",
  "key28": "hJ943VT7RstJaGxvAZNQM9PNjhhtkY9KoGaC38rBiptmoUpH4nVrJtrAjjN2wZNV4vzX2NEAzbiCorj7DNsmRSU",
  "key29": "4hBjG8a6wSKgo9mFoUKMrZtMLMRRgTEaTim1WEwQwj29ww3Y8A4Cmn4Sfs96rNEqh4T6G7bnGgZZAxHY4Rwmaq2d",
  "key30": "3HusjRevNDBmSBhL1S2NgQ9fTa1TdvJ1NtVNcjzueuJ1egus2RVWUyVVV34LrE8SiArUhWR13WGzicUwoMzRgUt7",
  "key31": "849BA3Aanp18s57pZPVEGtYr7eUGgPEh4WQamzwE5RrkpHS2bgKH5oFdrbWKGpYKRmxZ6kx3tkj6gPoXY7aFfgZ",
  "key32": "4iQChFRJpABjg5cAGcux3oBCqEYLAo3yjLCDAJxYV8yrkoqpfh1HGTNsZEyXkjZg2Er4FTEQs5EaweZNNk8eJVs6",
  "key33": "39o2agFmtEaSZARcnsp8mnz72FAVy5nTappH3DJxipHajvLa23CMtb1FpsGtFdNDj7UiERGSsvneDScBXQa8ans8"
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
