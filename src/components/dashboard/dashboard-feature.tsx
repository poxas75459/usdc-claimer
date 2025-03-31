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
    "2WitsFodykFcA9C9RVcDW5i7eiuN3iQk1XNxjzBGJSU2BbFqwrT4ygtqS5ANvVWR5eM8cAVh45grude66EGB3WU1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wDduhN16i5LkPgbYf3iJ1GwKiu7R8rngdD2Q3aT4pDvFoGjyg9vgEETwTKdb8J1dyPywbXBXehXoZTtBLX8dqm2",
  "key1": "5Sx2YXP9PwkSRiyPweVEBDqt1JMmGZSLcFmkQPjwmv5iqW9yfTk3GAZqXvZqhPueJP5Zr938iWuDiLbFL5e17c6o",
  "key2": "3DdCUVZrYZKbePdYykWe37QWuvUSQRDK4TF6C2N2brv3Ce4vjPxQs6xdr9qM6Br5aa8NCP6iyfUNmw7nZErJCwHz",
  "key3": "4BfnGMu6HoBoRDoRVvXRRfVakSeLGvzkL5jcFzU2egCH4X4aRRCK12GdzQGCEJT7JbXpWTdUzAnEgLbQeVHrBNZP",
  "key4": "3TjPxccvgHBmeAVnMFc8XuQQATAvt14Frm1SfjdysSqz6GnN5xRBpoANJHwHZPjxF14ouYnjt8aWBU9tXm9D3RV",
  "key5": "4wYWBckgKkG3XeQdZxSY5qNXNJ8MvYUgXgNsnsB7JTi4uLeTYZqk5ik7ArJN4YpCWWds4ZrQXwt9VyV8PA56DDvW",
  "key6": "3FtZtCGcqixmv3yfeaiWUjzg2taCwgMJzshSNg9ets82cgPhKhAjfXtrMG35yefrBE6E9Uzb9TBF7QDqqix7QfbA",
  "key7": "ofF9ptaSmzX9qivmrG8bsZ9R4L6cPjj8zmNr4x8DjDbgWMv1zZ7TdAFBEYqUSrDGyQ422u9sh5pAB7agCh2AmhS",
  "key8": "4QScwpmLJ5tLXE28K69ghQXDTmXxBmi5mh2GSNkmEYE7ZHZdfgfm4Dcj7rSNFZ5T13nf95deTCb4558uwuXVb3zH",
  "key9": "ekkfktAQN5sYwYS8KeffdAn3LPnT5jw1tFRy1UjAbsvFhk2qUyyqoKffTUuySv8psJezuRqnr3gZUrgj43YZoCh",
  "key10": "3Af6nxT6PpmDpn2wxtA9fE9SSHnCdYxmFaeCw8jqffu6ZV8f5YQ5C7qhRrHqYPAF5DfjarmjZ5J5X3kz9pkMpXVZ",
  "key11": "642gxRd1Hxa9Py38L6b2oUYrjtc1TXxEc9h1sWgZVnMUtgRLth9Rq62N2iRRmtpF4ANb4jRPnCyZXCZEsnhZqoSL",
  "key12": "2aoX5WeDz2w76YncnaBrMQ7KgcEQDgSyhQSXzUZYEk9RZU8C4LbVyu8cwC41pzjXzDxmcpGmHKnzmMPLsJU2MQ5L",
  "key13": "4D9H7JHQNpypt9QNTcbpNdV7Jj9DFBM3KLKf1fgVoPMLg1Y8BHc7mFBBGYVZ89521rqnFMa8Ez63dzbUpyWNetvj",
  "key14": "Gg3zfyfm8FD2NqAJCWhXcgpHyNk4x3S1Fvh7zyRBt4SZv9SagoVp4nwCKXbNRBXrK3wAKJKZqc7MBq19ku3iESN",
  "key15": "vtA3ytsckkdQfp3GzNJDET2gX9UayejoqNuLafZj9ydUxbu3Ypte15tXvVVqgwzLpfPDnq6pSBVC6HP7D3W5crD",
  "key16": "oJQuEzazsUdSPaeAkY35wudAuJozCDzb3bAnsFfPEyGnmNgPi2T1E23uvsUeyckvcTpHyE2v29cNUPDyp6oBkL2",
  "key17": "5fSdjLHuwGMcGKuAVpPh77MkWo9LuUDyATXpTHneMj1F72gWdBkcAYHYqmWLJDTzs9W1qhVjU4e3yPWwhS51ZzXq",
  "key18": "Lvaqs3h3NmjEEbDmWD94NXhcAMgoUt1Y5vp8m9x66hutjXeV6dri55GENciHHb72wKzegP1uUs3uLHMZpgvKUak",
  "key19": "5TddxpSCyER16skMqoyVRxvhSzxHwn7yk6nWNk6MKDv98LcrWsi8mSSrDtZRjAsVvt2VodDz3HLHjPb5ZXrh6BvG",
  "key20": "5ATt2DxkK19JCg2zZ2S2PHLRTcZZBUJB6trok6hUAQA5L5qrZ1hMZCmYqxH3jS4GTCkbNYHkUNmcp6pYLTsSqbMt",
  "key21": "4g5wwcq85ReMq9CFgjnbo9SJSXsV7QDggPN2HnPJTZoG1cfSgJHFNuYontmuMwQwtwkkMELaK5AXDFfeFCQxEzfa",
  "key22": "4bp8jkN4Df8zrLfbsH6SHtadN6KhpLpWBMfct5k46U9xtoseJdsgr59xrhSSmLtpibguRMCKeu1ufcGAVDzRXqce",
  "key23": "a83xfwqNiLSLSUC6aYRYiD7zEixXuG4Bc38fJUNaYs5dtdsXVvMvivn6AQWQBnxiPXdWzX8i2MSiscaieBVbZbu",
  "key24": "KxWD5C6u3YwBzsom39kJJQ8oBzDdKkvNy6efexf5Nz7XehSVngr7Dg5zSSc9avKithWU8XfwmQ874qk4gZb32su",
  "key25": "2yFo26zGhWHTxH63v9MAMmhY8w7kDMkZH6bZNyzfgzfccaLN17dSfBp88teMDZ5JgsbsbrnUZXxixnX1ftbYgwyS",
  "key26": "264ZS1aFgsPabQeHwdRLqAUz1DguDwnzypEtzihkJDsKAVr6ERE9WCZwQ8qgcUknsQCPvods3U5GQvNYdNtAX2cu",
  "key27": "4pjRFgd1Yoy61P97GHmoj81hBoamU9WPegQCYK7PtTapNFP6Do89UvRnnEPnYHA78n71hGPZXESoQ23cQRe1N9f9",
  "key28": "qc28sweC5HixekcR3TB4d7sWWWAHqeNsewjnw4PCMgQTsdRPvG26KpZheQ2UajFXkGP4UZsd37177KZiPAomBFa",
  "key29": "5tA6g7R8h4qnvFruvbziseJq6TXxfahfsWAzteJH9Cb8LiimM1sFxnxY87xPSb9nPCNXgg1jX32owctqzQBEwefG",
  "key30": "2oXY2tP2EkdEvPmw352U5um244eVDw3pzrfLFuzyq3LCq7JmYzePHf2T2rp8SGCmeuAhUPiNUeneTUmRHoNaUP9",
  "key31": "5MiGxcWzX1XANwqYfbfA56xncwv1v3PVHVHBpMQdXu8rZgG9ySocPbrp7ETf8nMGQsNuzgArFybjbP8NjTzWCH68",
  "key32": "3gGNb5EE3Z2NeYEUE37tmhPbDGxyeXNqMYSg8gMFxK3debeLD7q1AVHbVF9z7phXQ2K48aot5RvVhfGU2PSA6YR4",
  "key33": "5bj2hXnMozzb44GcWRX1TXNZATX1J7CUhBcWT2rghwzt2stCKSEfXsqxoiS6u5WdbgJmdVQXGGRMkWP4k3ShkEDt",
  "key34": "5e4TNny21uMno8vk7HLyoZUHVgpCK9ydNPA7bBnuoGwQ4tcFsrx2hSk56mzFPYcjnbSien6xj2QyUncpGTmQegxj",
  "key35": "CsT3dD2R1xZQH3jVZJYYtmEPkMgWvWJT8eiDKnJC6Ld2N1Q7dBCc83fGLxK1PJHKMpB38rUPKf7vbSGcdpjbkAK",
  "key36": "koPsR9xY22Xkwv1PRRZadCLW64QEQ5q6w2v1whts5iphHW6kkKjfE8n8FtXCnNcNVqgVnYQ3JzE6oaR1dccyvzj"
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
