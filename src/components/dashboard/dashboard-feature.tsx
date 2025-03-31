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
    "48AGtk5fv2bw8zUawZJhPAasmUnbBkgv6puxbZaaA2jSdCp8K29MrjVgf4GgmRg27g67spnYnpBUKkAD47ZSFx7Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gZWBBGs78xtdG2pcDdhSYKKeGNnea2fDGcN9xy9CZ9k823QbDziBWbLQ8pUvyDSNRL5uWw6tE6WgfYV4CCZf2by",
  "key1": "2uFGGkDWh8s7CWQQHKeddtiLDYbTh7ee2yaCpFZTaoxKDdKMDFEBXESa6TSQGx3PjtcmCGEsm1GZPakEwdNrZFf8",
  "key2": "4BL7FZHsipFJBzwXmUSsu5zo3Yfv77kjSv81zDxDtotcgVdoQsFwVwBfUavA3vHNYGhdupv35CwNDgqVNgyipJg4",
  "key3": "4tWm9m2Wv632BrzoXLQWRHr79fa5iYYwxetZ9dJTa9zJ8MYpyuYFfdJ3iH1UK4kUwGt11YX28Yimu1vL92SeM2ET",
  "key4": "ogj948zUc9TVRp66hJQKSeq5U9jGDi8y9xZtfL2qBGuY2qiqV8urDDmgSio7dTVpNL1AdVgV968R1fPzkLxNcqW",
  "key5": "3GUp8rNw8xrnqX2mr1Qk33uv3pd1LMY5gqyCcDNko6f3tWN1KPryeh9CBEHaEqCcRjKtf7tsGWoCfMXVqpQpL4ed",
  "key6": "32AiAJJ3nyrtBQGhypnSUw64Aw9kRvLP5Ru7612CvJ7QHZSMeR6VU8L4v1A5P53Ddtc36fKGCQiDwzbZH8X5nqhj",
  "key7": "2Kxnb6kAYHXcxquugwj1qzNAdhaZ9XeQdAa8u8sJVPKJnxjhPLfvtVYLYxH6dGFGDJLFTbjbUexqoSVQH8qEQHU",
  "key8": "2iQ2JwfUBEFvUZqz4zoM5TP1cNPTtMaaxLH7eAZ6s2Gxgga6f1df36j69cmvgxH7WX8HtBmimEBk6aH8jFnz36P5",
  "key9": "5qPdb9qEFRFqs44qvueEoUoFwyjVe5FSTuSA9VuonFcGx14vXDvjvFoCtXzT9ajhHz6DBqmopAyPqxXLRz2ChhW7",
  "key10": "3agXZk9d8upiNZgHF3ngXtC2L8W4fwKoMYdZBP17WAmuxfj8UkCE6DZpqoLuDmWXhRqnmJkYDHz8i2SpykqHh9is",
  "key11": "4nEQarW5SvcrGJgFWdcUkAxNa92gx6g9C99VPxscmxFucJMLNc95CsB57dxaxqyb1o88eFXkMckkSWweC3Z8HFLu",
  "key12": "5NTTnzwKHYpFACbsBBmjpxfmmNiqy9oWMja3fURTaW3urbnmkkp5NTzsWyea4FQduN847uG4gBSZNW8WHF9XCH2f",
  "key13": "4L6FFoPPd9Vk9CUsBBSKQKJGTFRdXsJ4b1Umves2oR3cYRFnvGvwQ4tx8xYzy76sCTPBHLCp5gzW1VfA9L4P1yX9",
  "key14": "22iKdzBg5YfdCG5YEZQ1hDq1ZjHJ8qXxah7uEZQAXrqtL8EusayAbFTKvEQua6rWFoevdxYb5c8Tn9AJUm6UEKFG",
  "key15": "2n959KsikBJSfygQVNAGu55ekR1SUWT2QmMdKNDHzTySidXqt8k68wXC6RzvsDLLBhzDE3nXqRUmWdTfEfiyMKsS",
  "key16": "5YgyBptEnmycRUPLmV93wY9ZctrDz3pA5kafKFN6tQNe5DwScFUbAnYdwRWposDeKoJYN9VmwjR1L4xMAkeM842U",
  "key17": "2Nxa3rTkPK5iVyAmbb7S1ghTCRt3xNGXVpsMp9ULnUQXq2mvcE2fpd9mQSBeCfxTw49tTSYt7eA9HxWqpJZzXNc1",
  "key18": "2KpuzfmVJu9mtNVVZ6APavgvWjD3YtEFuiLfAeZGdGAKKJra6ANnehe3Nzsvnz3fBMFZKhz7WD74MdKu8nMNEPZV",
  "key19": "2z4sCrCPRaDFk4X9JMjwVKuDtutgnEkqcBz5RTw6KAgp1nTkbSKh51vhGrKSWfG1KpfZ8n9PBF8VuwRxh87YiEsP",
  "key20": "4DpMDm3GNtwTCtV2jV93oai3su1EN6TcMFhzzHFhB6QpAd683K2c8LMV35JmoGrtJGJy18wK3utD92JioMVdk7nv",
  "key21": "2JMFxYGBPnkv5K3gNjaMM6ebSoMsf6NPVn61raNTq9Jk6wCgZxog4KiwVC9dnh8K9zQBJgBGiCiNhK9hXfM2DSnF",
  "key22": "4ypDg4kChQGKGS4E3NGDA4tt9iY8ATjVMzRtWWjqtiznfzMPW4jrqhHeSGKe6qSRwJDchP2rVpJcyCUvAEAWeq2N",
  "key23": "5VotCFATP1Z54t4BhuApy2Mx1JW1zBWkXsi8GN4nJH3S9ekLunHTdd7K1Y4BeA1VGHnbzE6M32kk9z42cbfLHxwx",
  "key24": "2CGEpAXXodBNMEiXPurW3ocZAHQxhnUVYyPxN7G5sUDLS6R9YDNzxf6L4sbR5cRvQWWZGbNZfCnKzNNAGWcenJQU",
  "key25": "oVde4qaXjwxFMa3JKwGXHv7cnvi57kpEygmVrxXBNHU5zLTvmBmgvMRRr1jRrtFggj82RdMmCaoQKoWa4RuvCBr",
  "key26": "4o9VeNi2AeAR6tq8jqvPWQC5oKFi9LQnWHxcU42Noz4Be6u1Exn6jYkZiPXrkAXunByB888R7xy78vwCg2rctcJn",
  "key27": "6v4rhB9D63cESWDHc2G18xE5iuwBcozoztHHuKczb4L2wq5Jgcy8xmRwLQ9vSDiNizyEqrKLVRGdFfLKkDjBUTM",
  "key28": "3MEEJ64pqujfm6U9peEPFgsJ4EPwj9oTPiDZVLKF9uK69Quk6eGiAmBmAmwrt9kQYBqKEYrsF4ZtgZCuDmWWxYFM",
  "key29": "48GtQC3244saaVmLrfxANgw3Hf4izbwsXtNUiA9yCYy8wGNjB2ovpo8U9YxtBvQnNnn5RCBYvRWLLFwrvoCHaMka",
  "key30": "5JMd1r9nPvVhHfYuiawd3Q5U4eV5FuPs8dkL3ScLrrvb8f6UbW9mmHSaKXkJXTcqmDsJRDnMZypYCHxYif369K6z",
  "key31": "4uUNKi5wkiaTfg72QLUutzW1PbB95VyE9hfkA5frc2PfNVxB8fwrvMd1KF7TBYj4wQgX8f8n7enbFxjL4kfoPRnF",
  "key32": "26WyLq719f1aYF4rx5y9JxgeT4cCFzTJKawCVgYtivKqajEzRKuWATAQ1c49TRVzS76XaXdhD3rA7Xfx9awuRtTj",
  "key33": "2yqirjg93VR42UQs4bi8tEwtq6aA8jGo3QdjzbieJUCNUvgLumXmngPXLZWC1MNjKnPHQekCrhNVdGbYCX7X4xpX",
  "key34": "9386YzRSoJdvR7nLzA9a7iuSKRmDn8o3iZweRuidcQFLokeT3D14PPEQrQUTaiY4K7q2yLmDHK4LfsmrDVgw28u",
  "key35": "uHwzc9FKmhiUA6HVLtaAPhGGDHJYVZLBwpXX4rTGSEstzCKgw4vCryDttodgh7wzwxd52wZMs9Sib5Q4x8UdreY",
  "key36": "3r63m3pUMS6knGjmNM9997pfnLcZgw6aPyLB3Mfr1xXERwG9SUpZGYWb96oSq1piT6jQRKHdUFq4WY98xaMCYTrv",
  "key37": "3CMfxo8FrtHArQejB83JDy95v4T2GiMVHvVa7e16YopQkzJpRL8TjD9Ug5TQ4Q1aZX5xvf7M8imqkwTtEfAnYgNp",
  "key38": "5bjqFvm5pp2vDembpY5krpxU9vxmKheFCArd8pxhXWEfKeV7Pnt2xLzWSsgXpyMk3jp8svHhdt45kn8V9NaUa1Pc",
  "key39": "MLd8qQshmL9qfdA3btaFM38Ces6tw6mVdLuGtdakGG8CaR5rKDW91Dhp8HSLUCKV4SGLkwBDaRKAwVWYA4eZAkQ",
  "key40": "4RNQcnVNB9KFzr2rMvwEaTcoKKburZA6joM7EUm47tjjnGEkQgTxk1tKxhwhWu2FfbZcxyvouU1TKtwGjx4Fnjvd",
  "key41": "5bNNhnppkt3Tbf72E1RSr2JCDEnEBPHDPfBcBjQjdXLin746dLgwmYPWXk3ZqBS9ACQTCsAvrRiFe3ZKhw2WtxiG",
  "key42": "1yf3A6WdxEHLUs4KbmEChTxeybQRyzQVbX9sSVykZCw21mXNw9c35EgiMGK6mzsoBGqNCc7dAwChyrHjieMLJPw",
  "key43": "4L8iinUnWoRh7vaQawSmigjvVzYkbKQSkJQ14zsuiC5v1rW56ct22pLo3ARLGSBnqojgomuF8m6nsm9fx7rZqtgQ",
  "key44": "4qNDqDcGdHs47KGuS9CCCVbLmD9EbY9EUamCjC6H56nYs3hvgRKQB3wuUXr3HcPW4UBGcpx48wPYyi2kHLUxRrax",
  "key45": "2S5FSrG7GDpu9BpaHnvrhpJheK2ak6wJSWFKL2dcs36iyKM16MifXCMHf3p5QmpSn2b9vEryz1tCmi2BJtVDHzJ2",
  "key46": "3PS9YNRx9emz3A9DcqVtZfdsDzFknHBBe9FP1WkJApVRe4M3Af9C46VNduAHkoe2JfRygJNuxhNd67gyWagjz2P3",
  "key47": "h8FtBF8YzCzzBdUG8y1CSkVubQyVm6kJ4Bt1vTWF3asSE7B6dxXr9qezKcNzVy2GyapnCACYybgNAk7jTG9V3bV",
  "key48": "5WYPqSBSDjwTDSmcBSKAvz9M4qAD2ufdfr8ywwnZ24gUyf5WsxWvRqxVfuzwupEWhoyYASysPSFXGCD1dKpHHwda"
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
