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
    "5yNsVaorctdLFW2rykF8YXkBHHMcVyEpZqtNMz9SypRFNGq64QYUbhBDqjKuThJRdR75hz95sGwG4oAG3GBPGcbo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tC7CGUdEGfZfPqzvW3XEJ14cmpnGnhmv92PRWnV8b5yjD2AhUt3R8f7StN9bQwx21tRJ2GWJ1GKV9DC5GmyNyWr",
  "key1": "4jDa9bot9qhVc9D2fr9cWJoQL9EgNUYdcyU4HV8tPtKCpo1cwnbVj4Up2nRqGQafGttefXuRFmzNSUBTVg2omRNk",
  "key2": "3UGQB1c3MHxXcuvQVCyiE1scxB6ZYXUtpneh68ZUJo7UbhZCveh8iFW6Mbum8C4U3EzUix7UVKzLycux2HuUSJKZ",
  "key3": "5W7jjTBQT8Pyo4mmTvQKhmayvg36ZEjCBiqU9EFyqGLf3NFzCK7H5VnhaJGPuW6i4Dux71qcCcDYDB41H6rR5v4d",
  "key4": "3VUos94ZRxENKC5QG1WXJMRiJsCEwJXVE97XEZjQmwhF8An7RT8RMfpCLsD9sPf6nV5AW4SqJ7vHGzwcRxRKnt7F",
  "key5": "3ny28b6QTcv1wsJphd9VFnozraX6QRj4KdWudiex3PCU24oSQADKaDuYBQ9LhxroABxGUKBKxc2Ma29KcpbMNCG6",
  "key6": "4pum3EKuFQb73deLef79PegymVH8R3CpCSquFEq3bX4zXUHXunZDCgsckwMLnWUd9YnenRAnbZvMrykbStzuaJEB",
  "key7": "2rC67SBYz2LxBEm8xmkjFKcNGTnTfzoQ3sMgd64KbmASDMJqv8gTNDKkcAfBYXrGrVZ7HKGhMNVwmomeLQnjLTBa",
  "key8": "3WpnQELsGCZJAQkBXsLVmfoLWJBoRccLRmunMK2Djkd5cCkQ6L1zvGgv3i2okZzrDAzTDCjsYsvNnKzU23CcVFVV",
  "key9": "WizhVtEYsUcjqEY2VqgLoyQ4Bfnzm4qtrZuLmYJdoY2YXTGt7QJT6dCsRR5XJVbk2rVWB7gezFY8U593YAZymTU",
  "key10": "5QqV5sxuWdLkWJzJ74zgiqJuFSaTAJR7Svko3x7SjQ59KPwBUsdkFuD6MhhSUGKTYn6EgNrrrwjWME42bZcP5ymg",
  "key11": "faKRXPJtGNLWoYuatWn84uLdPhQLVtVgwLPm1W9YSUzfG8aj6LrgAPBQkbkNYCdo7MYWWhH53WapGnyeUULimXh",
  "key12": "3p5wDQrJhJ5S6zChZETnijJa8nD8pEzr3Hmk4DQSGenNDNMP7JRFU26tZVD2TFY8wACXRdmfLNEQK7Rto2Lt5ahg",
  "key13": "4z5Z8Dn1SFAsJK63zbkTTgYAqpCw7FrbA21X1t6WcJBefXQHqjpEfLx7Myyy3mE4vT31F4WGd1sSzaWD16tL9C7f",
  "key14": "WzVTGbLP8sbMYyjosaTdVGDHTWTHwa39pYd2bWjwH6X3pm8rHuaSXKqLNK9rrwRtiiW6KVRmkhzLXC4J4nwvzwy",
  "key15": "4N6PybVxUv42Z9f7t3VKrXWsXuacU4rb1yA81kvV7VnMNdMdT3Z6xbpQTSpn62BcdcLAgQQUmfKkYjBQmn9ArzsL",
  "key16": "2ykbDk5Kvuo5PA8ExfzvqwC6LJhY5SwiW8jsv6mSjC2dZRqWhWhU7CsKxvx6MgSEGQHjK9P9AvW6qHPF65hmf4ni",
  "key17": "3TDCBHqoRwmJBs8DRND86uS1n42K1hhGf5UCHWSCWnj1PenuCW18jRgvrv994w3vXvQY4rgK8ZXYTxKjXSNWL8TN",
  "key18": "4Lvs4DjSxc8LGL8hxLZpT5gJcyvyddvVsXkfDH3TyNmYgTRRFmzEWPauuUS1v5ePe9V6WrbU3VNXkyNnzWsMffVe",
  "key19": "5YexCogUskCM1EfmmePNtV9JFgZrwV63ANEf7CTxcj37HVPebM9AUiTZvcnx7MMiLqqmAoYzeSXevyGvT1x4KwaE",
  "key20": "5x2Hs5AxBaqPHkQWDt8saZVC2xZD5LAgMWzCSnVawDLnYw4R4NC7FMZeFvPUpwqbPiCTKNQUekDCuCf7GK7PgST5",
  "key21": "3Fffa2Ao8MMmtConFYfEiM8mycjXirofYCykzG7RXDaebcC34HE8nzEr8jWoc1YXXdfDRAYaxv2VHD1BS85qRtH3",
  "key22": "2Hr87gjBS6C3hfLVjz2xRjk2cQMeqGF8KQDA96YqN1agp847bapC4azD8MYQxjEnT5xMLJuEPj8tJBU5t2sw8FXi",
  "key23": "2J4K14h8wT8NLpf8kj7Y5uTkGYk5kcF3RWt2mMU8N4Y85ss1zsZd3jyvCMLQweYQtyjYqxM8sVpJE2H5cUTrCsDx",
  "key24": "26S96SeJJ4baKJo5czMViqbQ1EcbSdJg6dBrEFGLFT18nTcCs76mg3FkAEmDT74Z7EgQn2o7Gpg3XxeuiD5gDwU4",
  "key25": "4ueB3Z3HCN3tPiNUJPFGqtpueX213qyHSZutUJfc3XYPUfRzKcCw4su3U46ChrQuMCe7RrzdC2ERQjFUF2xtYc73",
  "key26": "2zjQm9ma62BTwH63L47sGN14hBphb9k8kh7jPzzbfWjsH7oMMgNAbpjXw2JwF42uPqdDwksGPgPAppBFqmqGCLGS",
  "key27": "64ktEiYiKzakXZD4rbC8q3TKt2wUEzaZHMzyhafgAH6QZp3JtwYGghRRNegSsYmdLnXCmGvMG5LwXSDqaVZ44UJt",
  "key28": "2jXjVNKS38169kq73trCtkEZMDHCmcPJfP6Sg4QT2VbDHnL7ZrGLnNMpN3zRhsKVfBQj4D1drj1K7MLNHYLdhEzb",
  "key29": "5XqtuRuaaaWGfd4yG6kwKHMYoUDnHhQknAkLEMriCDH7Ln7Y5pSrzkdQYMJxin6rsMGSwyv9zVVmseUjV38Gm1aR",
  "key30": "4vdLuJemfPnY6AMW6X5UuYJ43pGfiLuyjQPWG17RivDzzo4qpKmJfxGJoz1gGToLwkkqAxAHovXue6g7y4LyD6YU",
  "key31": "2FuzMSYdSSugwGH5FW5s7nRx36PKcMsVMXSAhGBnNXQcNmYMfji4h4shnhtQpJ6g5gXd8JBmf97HfP8xUtRsRM5F",
  "key32": "5tL5kc64bNXD9CDbnfokc2nEqVNXg4gb7aNgpKpzJVDN5b5iXW7ebYDh8t6mkKHPxhg71KB2EhxGJFGrBBL5UwQs",
  "key33": "4AxT2eT2gEhZbkcUM493GKfFQduR2fgWBvaihXRqxXPeG6kCvchmmrx5wssEQRaGLkpQp3VZNzdpH16ApYoodXaj"
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
