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
    "3rduAvzoAM5ca3jFgoQ9f4Gv2tiGLf3gwog85TR18uVe1GmUksU4yZm8BFthrkUQBeYm1BAh7kgi7iYsBnMqpjbK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cGvkWF8qooxyUn1hq7uWn9nW3MSdj1tw4LwqwnoQJySdYLdxj53tNeasm1ReXoMEm5RYTqj57jAsy2nJX5t5zFi",
  "key1": "62Nj9ihRiCrMS9nMsKq5ZyZsrU4a2r2fDejEQMTz1v1M3QsSPE1hDMQG9Z957GNfhuV82hffcBFkXQ81bfHUypRY",
  "key2": "4ssEJLdcQQN77egrPcmFhia1uznWG9fLnv4QXmvP4pw7NAmt3iqDWEdr3gYXSrkA8sNxxyydRhn1Zu4nu96g4d5C",
  "key3": "5xrLrrMK9JwXiiS7geCExFQUa3pe7pNCFvLupxx89pqS4TyPFuhUFJTkFwLkFLURhd2RGcwC7iCxNd1vEd2t1Qca",
  "key4": "4TwWeGp5FNTf38xJtYuLpGTsXgAEc5a7AY3rgyMwoNknPVRBsqi8GA8iSK6PbEGPba2Zuid4yf5t6FeuEF3cFUaN",
  "key5": "3NLNsYoEP9Zp5QMLCR6c2VXni2FyXxAw6UsievJWiEBZbxcCH5Jt3kG2rWrJdrwtj7p5AVW45kBijH47Xano6xCX",
  "key6": "5cL23As6kBSLMnm9PX3ZJPkMxq1CAYzymjSpZd5EpAg1SZMzdwf1dD2PXKNJYQLVhYSr5VWRzxSLCheQQ1A6Zg3W",
  "key7": "2RCaBVmGqchAUGEhKsfdLupc6CJsz3cqE22tYMDooDHCom6KJqcKFC3MN7Cj2WKYUckaSzyA8J1J52vM32vEWoci",
  "key8": "4TVVa8katnVrokZdkhxsD91R2m2BZXXSnWbHoB8TyNYi3mA8ekSKGzjdPyv3RXUBSbFiJQVVES2Us9x9fwPg8Xfw",
  "key9": "3oxLms1pSWfkaXCEJwW2B3wozzCohBTYHzV8eMaNuEfmG8A8jwsR57b2yPQJhxMvDT1wmyEzpgWcy7REJXPqHgkG",
  "key10": "3Aay9o3NsXA2w1RkAqunuY6H5xJaBwWhJMWVFKdevzStKW78oSdUUna35wfHtjPWx44UNW4odtyEfsXHR1AASTph",
  "key11": "5hEBjWuM4ytWKm9zDq34ZDSx2aHViwYL69pfuVcJrvmQPg19hqCouaPUwEJiMwPwQwDWEBg3iW1jE3u63Jp957dS",
  "key12": "4gHWF4xkmSiCoUqdvSj8qpgHCXLFHrPPEk2Hma8EyKsteUUzRtrySku3pSPKfozC5HA8ERv4ehZpUxN7fpL2mpmJ",
  "key13": "3Sona6tN9pzqG4UJW2yyaEdQ77JYMRRNBYQoPt7fkz5PeQy7kiuPvjLgdoVhhoyByrVq8WkKeEtqdDA8HzM8ZNt3",
  "key14": "WLtQp7NCdwNCjSgHyTcbUzz12pJh7YkedMPcyUoKUHNV3mWfv9fsGa5ndXG8mfYXoMqaddALfWCA4F1pF4fbZtm",
  "key15": "5avk9DG1R9RdqPK8U4EyUinwvw1NaHNNZdeBfcaGdFdHQCnHBxsedqTAaitGR69nP4MAcRh1h4Q2MDQBvuPpgGjP",
  "key16": "B9SzbTSRG9bKT521sj63X5L6D8dduxKp4BZdrzFp1HKkpNi7kWsVdroKae2YRgq96ifBU96kFrycNV15Jk3mYu3",
  "key17": "2Qeh6oDpfDU4qte5jSQSvU5dthxCXgKAZR2wKqiw9A3HvvbhZoUK2iTTairq7JwU2gT96RDz5sSWunid3wDZYabY",
  "key18": "4mxwKnJjxDqbRZSuhsoTSgJ9NCcBd16cYoo73VoeufHCbDzY9rCb4yMxcY5ekLSvXVQFbHfGggvjMYeMbHGTzCZA",
  "key19": "34HeSK9JNy85gUVU11qjC5xx8HmV83Zcc3YXbAjL2KGgwhHNeaU8uz4jqMtgbRpgYAmjZtXm9vDoqycs8XBpZ1kA",
  "key20": "DeCfskvPWWtWseKqfkGNs9jqCLo9iYSTo76QqcTdg159451ErgUyJCr3dJWjTvD59B7pFwy6iMRT3zKeoJ3eCCp",
  "key21": "3L3mp2gvYcqRB1N78HVGRWM2AqQWdLJ3EA2xYNYCYJjoUXgNCdoFLKUNZexbUPGxKiSWuEgzdMEPssnS9WQXxZG3",
  "key22": "3CbGvHzW6sHLykvect81NZN8CvqAna3AUVVqaeP3UVSF2btv2uRPnCsGkH9Yub7gKjsjndvrVWxk499qQwMNGya",
  "key23": "5BnGurUNc6S1XcZ3pgRc5afEhrXXwVwkNkksCVvr3vJPZatM5MatpBTcHxMkoSPqRpMyk7migs3nDpEDtm9ka2oD",
  "key24": "5LvzUrKA9aHGjLskjuwoL2cxb9gFDAMsYMZbnFmvTV9wWZGPuNX9zDtXXyivqtb2USA1v2NsX4rhd6GmprrZV63z",
  "key25": "5rVdpPmvpGxYQMt4ppDFbPbqmEDuyQ7N2vaFLwtWGw5o5sM9fH3EVgaNHktQNHHz7AzJwE9gbrWreQL8iLF1Mmi9",
  "key26": "SdFzhQiVJz4qBeY9tWPrKJkX9R8CiDHJqf9nNecnarXvE8JLNVrhFQ4AFiEASdk6xeJkawBL2EnQMyzJg5Fn7fT",
  "key27": "2LefSVYGPYceBe7Ea2UFKDPLWEBYYKhNKsZZLCJWMNqk4ceWZPJgUAVWNZmSMA8KThFJPvjtq8Mqsfr47AyRZ2iR",
  "key28": "5jmmas58wE7vNNawJFu7uPsPSsLrns7ueb6Tu2tpiGLma2SvvKSgJfG1w29zKYRg4F5ZsA4ekva4dav5FTmAL8Jn",
  "key29": "4TSi1AYhv7G5CUusyKLuvGnSRmNZqLhekkDmeBn7FH9ZbcswCt73MhJrm9mjpey97WtLnFr3jZUoBPawkzoGdhjd",
  "key30": "4DwtsSUZp1msarxHnGW6t6K5WnrFprDTFB8zK3ZtZmSECP6c6squBwN4Y7Ri3TQGodwtTPPEaeVfaeLJHTJtuCMn",
  "key31": "J9MgoHSY1i5KqhH195nyfjX6Mqej3rdQQuipn8Wt5n7nCopNsHZgZtbBww54uZmXJujEk6TtDLaiKW99A8Q6TWn",
  "key32": "4iWYVC7k3LBbd4u4KwoiFYN7Nq6hx5mvkMSFxxqKHMx5H6RA4iqykrHtC2YVxoGQsKhdLrM7yDeSU38H9hQ7uQ3E",
  "key33": "3wJMdobdWm85PeZFrxTCYmVeNNMJCjoEfE33A1BMiGnexEi7esM8U9F3yAEUuKE4qaVEX7hbSZAzwE9SfgoDR92S",
  "key34": "2mF59zZ5XEaJKvHtbnndsAm6mgffQH9EGqEqjFSrGxkUPW74qGk6XZT3L4ooTCRLTC7gs4P2pRdnqSCxypJtBqz2",
  "key35": "4GNDKdhxRuo68T24FweT6jnTm2zF6YG17dsmdb2f8SxBhNDMtt6g4zUqeRv3TDCrwvGZREDngCiCL2NJevnU6yPG",
  "key36": "4ZRJxTtLow7kWUqejxrcK5xShiaCwEaAbYQ7QH8bZu1ykS7i17BjZDjtsSyQS92dB7NeECt3L2hKqweV6pi7HQHC",
  "key37": "3U85wqscVT2wRAu2TZAJXRwkNZsUMTLscHDZ1g9BJe59WtDadAeRhyowV5gR43uhXG56CgdmRCXBFXPSWjAkGaaE",
  "key38": "2PH3n2d8NPk7sXx58gGofdxcPymhSbmoNprJggMaGLcv7YuAQ1HQesCpSCiqTzj7AbRkuzihL5GL7f6eKsim6fL2",
  "key39": "3uxNkE5KnrkWqbV9jcsgbhTGkqe67iNGhyTz7Vx96opbMhQw5bMqUxoKnZX4L8CtGzjDvMMRJzUHb6QJQqDi22Bh",
  "key40": "5gUqpUQBoJ4cr4TfjwJaBfnZpSHeKyQeY7ao9uEe5oFXLGcuwva6BejkncP1NjvxyvX9GYL34nbv9mt1jhgMnc6S",
  "key41": "5xe8UJ76Kgyjf55HJRwY45ZK79wHzXUxiuGeYYBUPecrQAw9gwmsKcx1jHGByX5by8a1Jmi6AtfCLaVnHhqkJHBx",
  "key42": "4S616H5cwCfsefrmwi8AdNGhKceqi1fTB8C722AuPMEKazf1PKsJUo3XoWifQKsQvcjdALUXBXUggZJ9HoKyjDMU",
  "key43": "2Vu1JZ3aSYXZU1CgkVEphqsQPKiEyBc6FWnkERog4zSAiVU5RGdQ1MFMucC6DkWrwhcJTEJvceuoxVNfSQCFkNgZ",
  "key44": "598RkKBWbhfBuCLDr9eqKoV1eUVWTzmRX5i1YL9dm3UTYspXn37WuBKusYZobdVN7cSb4QtM1mCfdAZA5Nd7dNsa"
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
