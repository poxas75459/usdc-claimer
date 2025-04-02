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
    "3b7zVjoAnMAP5GmHYXU4KLMAGebEe76G3DS3g4e6Mc4mYT9xby1Y9DobPV6KKyHK6CgrPHGHAcP2Rqm4xXQ4C7Up"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Xz1eE6y2FgaH9wChuZa5LnHKhewCCEB9x9dzdHyFWYNTNAunAwsgxhuYEhJb6nS8Q9HxSJtMNZVg8yuDQejim81",
  "key1": "3yBafZreEPA53DUmNiwihk2YFzvrF1QETft63gbsJehuK319LgFgGtNdQuxsQ9uhi4RJJrCjuPWoDD8EbHE3nwrX",
  "key2": "TP8rcffq715RGnZssR2UCpxVMTuPNXdf2N5YAVpzup6WoaPXxYZ7jSxk8tnhwDDvBtQa5hH7z9JRySYKk5mLDmp",
  "key3": "49CWv4fr7AkPTizVi5tK8qEy1Q81bS9RbQJcU3L3oFULNgs34wmuhtnCYPrUbjANbUPQetVm83npnKEwU5NSBmvX",
  "key4": "3N2X9NtpYwn3cxhRPV4kkQGyYuCW2MvWoBTLasy6M1mMJU32XaEZNDcFUPCYfiVmhVBrbamTkpLo4zX2NBvyBXXN",
  "key5": "4SwYtTVnoEDFmT3afUzznotKeCpUhejUWgMKez4Zvm4s222ZRY2irDZWzuyFP95tLoC2nricaqr2iPiHWircTHP9",
  "key6": "2Snpbe9mV9YQMRZrEPA9dd2xy7uLzgj1nHzCquxNJPc8NE9HgygXSGrFkXbewipH3e26tmTysHeSutWqiRXuArj2",
  "key7": "4o7UWmMTg7aDYjgDRTV4WjCQon1mefzqZ6TSp64PmMPEEF8Vw3X6b84DPWWyfaJUKsBSX86MCuLoWqeMrKPmKJLX",
  "key8": "3Gxuxos3AYoAugkjrJ8RmBJQQAffkP7F1dkt9XdPxS25XB4zeLiZNb8Fb5P6HykgmaTyUQ3u7ihDoHr849ffK2rN",
  "key9": "FxRKDVg4ZsEjzwUkJnnWibVE1HBjvomKVwt9q4ju5UHhfioLsT8SWdPrR4zK6sgPkzEWeVE5hnCpMhzE92BVyUC",
  "key10": "4VhJgrapXymJqUXojByNjrs1LuJh2b46kEsQrLNmqJbgWFbq2WPe9Wc6EHNpKL9MnvoACSfF51rkBLDxZddkP7Nb",
  "key11": "3dVKcAzAkUyVGdQGX8rkWWzpHwJrjqf6NGfyv1TTDuJsHm6LK1LuKtTAaKzHQmT8YbcGMRMsTAUfJfELeTxyeexg",
  "key12": "3tN4LTWcRjqbGWb4XCoa7qA7CpvQZfMWFtWSVjGHrg4UWKZ3SAQCMxfwynWqGXsdgXNETRxDY8PXKPvW4wN4hPSa",
  "key13": "31aNK5wBd9XFhRZ2D2BnjznoL6TFb4YtR3N35EX4c4xTkrmaV56nvdP5sWy2YmhoWpP1X9fXBp4g3CB5eYNkWNHg",
  "key14": "n7sMkpXdWzAbh8sHzKsyNRjq7gmHHjzM5sbqx2XPE3myF6SZfsQZHVbsFzLLPEYgnmuSyBpeLhNvxDNZCrj6m1v",
  "key15": "47VQPtJi2pUDRZjtTEdoDyGBq5gU1VowhxgBuMYWX3WvaH7iScfniXFywfLhuFugQ3wimvMvDMpAWf7EoDsEW8B3",
  "key16": "4xCMdbe3NG2Ma6DBC6swQux1g5SRzCLySEwxy38qiM5Kte4PaevMfM1bi8xWjJwLy9qotmhTbcXK1xTLCSyBPQKb",
  "key17": "45fCeUnBPdq3CbyfAZAvBGRvwMBhc85HhmJCtfGaoRzz5ns5v4mLwAaZNQDD8ui962ocKLsi112KhGurymP6yMCe",
  "key18": "4gs9qaLHSnmaK2kHa76ekJzEFqStAPWEB2KXPLjpKhMJd9to7PdrFx8C5syBwLyYAh9CKfR4coohQxhzQqJdraVU",
  "key19": "5m9TRDJo1qySewQUWYQwnJZmjavwyg6GSTD5zsjDPFogUfsG6ov8UsU8bkQ1yGZkkThVXDdGafCZuKF7mDVkDcmM",
  "key20": "26DfMSHXgsGSWQeAVo7Uc3PUXr2MmVRQ6Zadc31v9WpoXdWzwJeLGLvn5RRfyHTGtTHX2Hus3oKKgdMsUk9gatHV",
  "key21": "5R3Spmw3SQKSkbU3d3sgJ3foVVt2Wvp3sfqjwPz8bYsCpfCgkNycVnHYAjtPRmKTMH3LJRM2AH3d4UbbH7Uk3Wje",
  "key22": "4mt18AMg5KDCEGj1uQTfP5osPZGke8s29ZgR4iBTz5KfD1yBRYPgHbmDqoGBvcBb9AYo5nSFCF4SHbNyAQTAB2vc",
  "key23": "3nLgfGkSkSLehfWL6br23hpXi3J171bP9Wyp8N8zsL91kxLqb4FomPe8wdeGpkAjrEGmLypCpZVF7iUrBeSuQgb7",
  "key24": "4n1c86cKTMzCoGmZvWi7qo9gFm7vseL1YwXiuw5CwRRHvAMoqiaMEWkhwcSjFaoNJcnYwFC4TffEAunsqp583J1B",
  "key25": "2XNuJHYaGmSJB81DPH4Fk5P2QXuA6cFZ4nZAMJpTHnmiFGcL2fGA9LnnqJWqqcVXfVFnvKRPR3qdZe9NoF7wkECj",
  "key26": "38M9JntScZDRdJHhXEDg35tqYGvfeQB2BGNA3WUKCGgyCGqTiDfXS6B89WDfbVrcahBV8nibXSSRw7HvcYkracrK",
  "key27": "syELkFjRRdWqBR6pX2Pkyqn2uHKHHiUdVNzLYFabX3c3JFCMfUUyUjoVMJc4wiW9TJ4zWo8xFjPrGKp76YXpKir",
  "key28": "2zrYqEuQoPvXes9bkWyyzeEHQo6vX1EooHr57uREjr4SvJ8Vu1JoCK5VbfpnCh4L3Bbu5bYm15LPBttRNrPqVJWV",
  "key29": "3tzfcgNiuTMceDXsSuQ3Hpr7yWMxdCjJNMentC9bnpXZjSqA1kRa3BMPH5BSRK6EnPb4dfKTShphuKJn8AyZtshc",
  "key30": "5EWAQYfvBtjcWrPzKt2xGCDi3j9oW8xmHmcPBGMxZ2Z1CEPwz1JsJQs7t3Ezpdoy9k9ePX3JtGYAAd3nbauEDTQ",
  "key31": "2vbvYJWApdrogbeM2bmjzcuoqNmkb37JZqF6yMgnsyeVJqUGwDfZpmeoaTm6YPt3tCWak2mbRZZwgDLpQgTbhJK",
  "key32": "4bcPLJ7JuoH4dw2BLNVijwMmNhCSwQWiJAWwEF7jmYNaqqfLTfHbMmwRmKd5GJ2C5xrfXiSSpjPFUxzh6k4QTof"
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
