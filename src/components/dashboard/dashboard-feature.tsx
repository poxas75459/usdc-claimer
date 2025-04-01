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
    "3e3h76Zcu3Fup9geMRn8FAnESLYjecheMbgv1f56ddLNrYcEykzgEmhQDEKFZg7sBacQGRiStM1HUwsobXPgtEyH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EQ5CAirBcXMLmY7hFtTfEMguBspqFb66wfHYXqZsXJyeJafVoq7rTaMY1u7vdtkdLZKJykERPph1ynbcdFVEkRo",
  "key1": "3q98WxQAgptnru2nHtyqP6aV2eKYSRHB1oG4w3tLnyw3GukhQAprfufNUKr2r9fK7y48UPJrCGMSnMYmadHC9f35",
  "key2": "3yoVs597kxP2iq1qGbhwRxmgtqmxh8K3TUiVynstziY7dWWvnKtA99faEyYfnbKttqzJvUDTfwVKqeHsNFcR7QTe",
  "key3": "4YxxcqkWv7m3GVUgTtuCyk3uwz4BLJFXJPXCPguPZAjKJwoGEALHRQrAL9R43aqkWYTapchLN4XUemhDhbXb1ChR",
  "key4": "2qGor29HEEXyheNVt5ejTaaGvYMarUwLWYJo27cynsdEYwcjxtiXEEaVddK9NR1bDVahAxrWeKvyzktr4egUcaCn",
  "key5": "2epN4oCWPdSFhNHsyUsQ6XhPTAt1RpJfKtYk4QjUj8aiYKdCshNCLmq7wZwE4HjtU4yjVrPXpDHsWTuBhNw7SGn5",
  "key6": "2TkrCT6gjryWRChF9Hqng8FRgD2yCcxiRzVNXd1FRuKquDTehQjVh4ThUF8sEqgafWPEDDUqk9fsTzptRwAYvcA4",
  "key7": "4dd1agsbx8zHhyPQmXJiyR6sNSxuKGxji5hx12AYMTp3EXXuVE4DrGXMQbDqkLoAHvirFyTEJfrW2yh2tk3do2oE",
  "key8": "3vyJwYi827W84fub4YQRdSuFMAGS4vhqwbtABtQf7ZEL2TioAxsgEGv4Fk4yL4jKodjjTWozuJGxQLeZJUyeBUoK",
  "key9": "E5KAUYqKnjizCDmWmx6XCXJjmYn7kNxRBbRA199npeFDF1uPuRWfCwVTFQH1C9nUvYVSg8U8FAGK3mtHky7F72Q",
  "key10": "24D94yUwPVqwQawnTcM6hzEBi8AjKUq8LpKyNmFXrXqsmsLfj3bvzav2f588ye1YDtC2cUYNv7NhW5ZBmZ3yXbC7",
  "key11": "4Vb4RY3CmQ3FmtCuvtD2aYA7KacDHK3e4rHY4jmsVBRMe96j541frihJi4R6kVrR8gHrm9ydhEEazEDbDvLyugrW",
  "key12": "5EkgHGWpivCVHFTmhpPMrnRCf2dknZvD2vYg8KNPChNwe5rcGs2yyzv1guFkUXBJ5YE8vLxFjcfbyFvhnTM81K5H",
  "key13": "2sVKCPoMomk7Zwchn4jo5se9aSQ8BYBzMhSTmowNP4FdB2Kcib5nkJoLD1abEd8QsAZeikzPyvsPPPdPUWL4Vb8K",
  "key14": "4AqL2L5mfNYUN5sWUa8WmFczGo9SjtZEV4XR4Uzs14oxU5aRBeutYVpj9HG3ro6YTzJvqJPk1v4E6RJSTqiYMyPL",
  "key15": "3NHrsgcRULdCZAetTjjUcoFTLyRNjEvFsQjVMrrRKTrasp64izewUrRF6jCmhTL7j7ry4Pv3181faa5CVWkXz7iU",
  "key16": "5rPTRHRGM5AM48PwwidUhdSTwtHsMp8Rz7dFa1gPyLYTJYvH1dBSkjrtPAwQdhsN8F33WQGJAj8EYbEUSU9bJ5WN",
  "key17": "5ZP8uePwpSvGFYCqCdgKjM4kfxbS8VQLgfLbNb7U9z376a64VWQotjK2JudZwuKWkkSevbNLbERTs7dUZrrNRHMk",
  "key18": "3ah4zvcWs64Nh8HeU9E3R6TRW6agBk2mjEM2XKF3itKqVuTgfWyBEQqyDQCi8mh8S5AUaED34JR53biC6YAbsoPa",
  "key19": "5KmbUMMyFBcVdUM2tFHihGDyDcUN7uUywYKhbrJQdEcBHPLZJZFS2ZjTi6JN25V3oTARRWJAGP3DfxFAWuMNBFjp",
  "key20": "jJ31yoYw8KdvS2hMSqoajzVwxM2LZjzfe7aAVmyVKs2sNuBXr5giJLzh7QTLBj8QjfwenShjhAYGDn9xEn1csCw",
  "key21": "R5JBgyiZcgpW38tMU3qQS48zqxCMP71jH6H1CEDgyrohWZbHw8TVmANKwzKbBdqhvWcpTc5v6SqLe2L7BWrHvfT",
  "key22": "4DzZRnsLQg4KKTp16yH7krB3z2eKJD9sWSE2R7u1oigU26wGvCFhbLwLyNgaZfEKVa9bqa4e8cumJBcYHSsZrCGJ",
  "key23": "2VfGsL7iLskLLbds2PQd4eMJtDRRRG6AXH2WBSWYg4twRWKfLcAfwkyddmDFa1RisWGuzxSYYf7XicmsvQxwYKSb",
  "key24": "NjmfysSz3jWsBzecq33ncQ8HMj224TWo5Z1fQEhYpgNc241huFuQWpNhGquFtwRmCPAxJBAUT9NBSPvcqvHWQqE",
  "key25": "7vTZygMXbbnHydA8obvdfuemRWQoFCw2Kp4QwFMzSS8Z4rz23AdJb37mZ7kb8wL5EEMGWEDNEoom2ddAScJGNvD",
  "key26": "3smc7FVp37sqdGiWJAKbGHVghJxCoMtow2gMGG92QpPLKAcVx3qReefyj4ywt1pvYq7jpeFjtNk8KzBBfS2Esha8",
  "key27": "QotTyMgoJ49iuDD8yiRquXB7roDJS5FkuzYhPQ2ycj3uzmwW4a9sVqdQBZGqZ6Vt7PvtwuavaKMKWTQwGrQ1ecS"
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
