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
    "3z1S9vwxVE73Xb2mGKp7BqF7iAWQLM2n2c3z8GTbvbW3CbMAjPGzjCM8jRLaHoJSggeB7yNMf2qWWKtpXCEF4CKo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CVwmq2MQ1nhSwKcCCLDLP1q9EuzeYGReWo8x2pfjg9DGFB3Hk6p3pT7BvWTfVX3TCYPjuvzW3ukspbyBVmAo3HX",
  "key1": "nYxpAuLVdFSVrYPZtE244H86wQuUZdGoFYsivJD1YCjwResEg3VNLpFphEUutHqwDwr98rfkUbscKkFgBkjJ5dW",
  "key2": "45hsKAczPMfwv2ysUrGtW9c7Esqkuo8uetJvHH5dohMzYoNuncHTfxZRsmjtxjv7qtpTNtEMy71LiSFYdGU73VsH",
  "key3": "5aRRcGaqgFVYeP8eQPKYVaEMQjHukEMMVHjWFfT828UDD9QFg9Fu48X76ZUNfyV63NYZWhtmaz2QXLv8a2f23eSR",
  "key4": "6C8zxdQ2dug8226muwoRV7E7Sg7BhLtSkiTvGCS7GBJBwazRqsyiRv7eKDJwbNy5q2QDjVTC4Y6K3C7yio1j9Wm",
  "key5": "r6zYoshuiYy8irYDLq2mbcfWvm3nWAHSkKfFDSUZ4FgA88mXdFEoKHd3mQ3oA6gJ4CiPhWgnpFH3QqhwsTPr4e9",
  "key6": "3EKLW885tuCBXaA8bP5noseWUyHBHu7fB5LiJiL7fjaKcgBoxTw59sfdeSsZmkqDTF7hUZFshvQWVGRHdQKzHUQf",
  "key7": "5rjWUShEAnZdotoXd7MaXvqM31CnXcnAiizCGGKzXq9q8ahZw1B8ApXDgyKSZZ1s3FM1Kz9X1ZHctsQgAfp7eVsJ",
  "key8": "tFFiTEojY12Qou3igkpQ837xxdT974MG7czKw3vsBi7g6jM1GEZof5gTnLCgZE4DLVUeVt5m3ft4NydrwCWGAS3",
  "key9": "apSsLH8Jj23DoouozyXRLJAEaVwtkBxo11nPtVgzmDbvFFBn7yTYUpc8EgHBVZGAdiNVThDYs6RuRJbJePzCCAy",
  "key10": "4Xy5a4cZ2zSrNj9J3KW74zvWartLULw4pnCZSkr9fSAkTzGaNeLAvR7xxv25xUgyELieKqGCKXLZTji25CbJNJXL",
  "key11": "4rNxqM238PF2XkwtYrmUQ8TMawB9FgWgK2FpB5sg8eQ4dN37TVY39ai3R13LSZ8Uyd7WsKuRw7RHsbQ4BhcnjcnQ",
  "key12": "54gchSLzwX5JZjabhWfXH68GhUUGoJ9qfh4p2r2eF3n77q1CJ1pFrky9ZHcSLsztmCy9FMgchMhQYEw6HP8nyWwu",
  "key13": "2vR5UJ7bvuzKMWm1BLYnKZv97RdWn3GkM2LmrDMSzuNGsdTunfAeRdyhYFgrWzPWEvXts2cdseajxHyKi34pZgj1",
  "key14": "5bNh28LEePwthPdcoGYhoRHsYe8ZQhDgs4EZKjahPpqbxDQG9puJvh7Qng8vTpoCM2KHyj16f99PeadYuEQNMQw2",
  "key15": "423kVyzKhpXn82G95s2c2fcxdePYvLA7XsajzniA8LjWqkW3rDzsHgGfNppfSqrB4EgetwkJbjFRpFy8QqgicZB9",
  "key16": "2eLzE8WTj8pvX5QMSeN1JkaU15DfnvBuwJtgUBiWNhKi4XFaDoGMp4jKHEvmPBuSvScp2Gd5wQo5AfNp6E9kRE82",
  "key17": "2dN5jmLcVrHCCyy5Q5d66mdJRiJ7Jaxezz99edDDrbCdzjnrUZEXwKK7krzEbKgcWUufKs1SNaAnvaRbzGpi8hFE",
  "key18": "5zjSTmp1mnpHPtkEt1RzS9J2onsQAdpdBCxLjfhubyZznkesT9HVDbCHGG3pr1cfgzoPBzkvidWX6EMA5tbdJQod",
  "key19": "X6pNp8SGympn3rHUHuEnTh6mS9TqRJLEPFCTDcG7Hy2L1FzBxwrZyQD61zsTD5cqMHpof3jfUxJFsLHPuGg8mtT",
  "key20": "2Pj9L9RsHjvY3qMuvv454hUoMsSXiJzfzoonxRChvPWXcd8Hehk7apPV19EPfDiurEYNK7f9MKDuUpZyV7mmNe8h",
  "key21": "5nGk5QXwhaMBYYGajav3Sk8qyD3f5AUCjDHqFwpB2QxGfWvuEvQ5cDdy8M5dbWLVHNHzBDwUFJAgqBEUbzkhDQGT",
  "key22": "4ewgjdfbmzss1r7ywoVwVq8mXYqERjpGnGQGzc5dXdB2dL571qf9XmTfuwf77oBmk2tvvf24yKTQw45xB5j3dU5e",
  "key23": "3QTd9KscajpK7Vz4iZpZ8rW6vDWeFmxe5kAsfw4gX1SaTkFLVMDZnVeyUFRkYgZ4PSEWbPqexPB9upBvb7ZMo9gT",
  "key24": "2NjKpiPytA33sWh73GEg3BJhkmmnmRY2a1in1CZrcbJvVU95ZmPAwsgDmwDze31iW31G5WvjaxFd4hcnPrNjvGkw",
  "key25": "49vygmzF8Av5xj7tCeBvPffGKHA7MNLoKEkHXC26grKG5nw2mR6kfpFS8cmc7iaCNtctjCS9WgQ6cG8p8K3wmARx",
  "key26": "3aoBwM8RbTDhLtFUi2N6Mt4UAJuwu3LgNxsrcRmgFTjzTHNJaT3CKzoL7K5fFcWnm5XxCAod4Akfw1ctmzZi93MX",
  "key27": "5gPUCm6kSLoTCJRGxSZYub8GawV5vfBDke8ym3yCV8nfJ8KCXncbPvD3HCQnmPeiTcJ5NXYedUHWhHXBwgW8ahZx",
  "key28": "4rtUFisWYP8Hg5x2ren8QGbbSXkrhVm3oCxcQAZFG8VfYT6DJPbQrgqitGsyWViRBvufreiwQFXHxMUTikvfXkgV",
  "key29": "24uAjoas6kUGbUXqeFsGbLdFgwbfQVqRM6bz2uEAQC9xPnoqNqmJg7ZnnG5ebcnvGwVt2b6y7HPMKSVihYuEbFV7",
  "key30": "2yFLwPrw2pvLbaUGAEcLwkqiHAkmxJbFBcjq3HFdJ2hzYMjG4PZFk8uq1XSj6T5xBbhxJAQ7t6tF2ipL767jFFLf",
  "key31": "4mU14p5GmkEnAYHC6pB1GGPbU8LDzd89u2Khhj4ugJdVWtN6YinjB1DsQcRsJipEirCCWVSgFjRuV6eQojavdLkY",
  "key32": "3tSgAS79xCEA9ufo99FP9H34EsJLYuC1YiVV5hcENQ2yCGAgfpXu1yyDscpovjpGyG319KUJus712fRBmQbhN9Uj",
  "key33": "3WxLDd7KLmDcvnnaqRx8XMRFGjAjycGieicjEty9Uw2hG7FAquE42pLz8NPqME9fhSJBQRrUPX9siuovJrimSoHX",
  "key34": "3NiScs2Koat9aAg26cSUk15AAmdwgNxXyg8gqhVGAg3R5QmqKLu8St4yZpcGtQ9g52DgL3ysKj66jTZHAGUbz94o",
  "key35": "3QRZak2Chr2PodTd1ujKtbdgqNWmnzgbNqZywcTuxLjcAEdhpRcPCRkffVKB1gML1a3jF7JLwRBKLAvBizvDbtnG",
  "key36": "3EEkLN5hucJm1dUQHVgznUWUswRScXUVA3aEi2XxTEqpGW7H8cYJek8smzpWUdYGuPNoWzYL1fJYUWFKPVhozNGw",
  "key37": "5GKZ3EKv1JKtPuWj8ZsY4HxcNFAnUiDZm92D5RHHpmGfMMV2PgjovEGQKbTpcETE9wWDf68nD2GgZc67MESZx5HA",
  "key38": "5tDSVywkSD3hQLhwgvPS7vJVvcBX4vMgix3GNKZPSeps12mGej1Lbye1w3Ny2YYuPqKKo5DT9PLuEcaPsFAJfj82",
  "key39": "2Sipuzp8sSBAKWjijvV5Dd7RbcjQkCnyySNWvdWGDqvk1bk824r6gP3ALdHmUoSTfj2xfvNMLdpg42EVjzV2aVUX"
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
