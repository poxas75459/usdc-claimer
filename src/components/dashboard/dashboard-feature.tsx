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
    "5qMm1efL6hviMuZm7wqEAtCiemM95FZ5aB7b8J9QNB4RZsHxpSxyXCGKZDG2A38hUcGG8hvCVUxtF2VAptaMXVtT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2W3WQpmAS7iR8M6QYuvqWvu4Pz9LwxzDB1uwNDTDtQaRww6WUsP8jt8eQtg4r7irJ64GKQx8sGxuF1YHYfQio5fC",
  "key1": "331onpdhkSDpU58gjXZ4sgtvvbGiDxTV9sEra8SKTb5FAnmdNig9UWJFfwayQ1eq4vfKuDXKEEB8uF7D5ZaaWics",
  "key2": "4ZBoRU9gCp6WYbv3bAMTSyFXRkioEUNqtGGNE5Zfjqxk73GVt4mxdXndSFfiimB1KPvLeWvSpu6jiFbesni5DW2y",
  "key3": "BcqEjvB7N1QiWQGrL7CdqZw6cyz3LwjMBgBodaZQs5R878HXawuSMzokHZPbCHPf5HCe5FB7dJqc6eWmuVCQ7KS",
  "key4": "2TyjDJcViAr79RpwgPwrA2pY7pcsxYtwjKxoPFUwWDdbEqKRpmzKx3H4QAX2NQZDPu5F9rNfXLf8XNwdXQP3qStG",
  "key5": "45TRTWiY24eT966UVGv8hmirmAYa7ntxPjRFxA5ev7SJ2oFCeXuxM9J3twhQA2vnJrDMR5ybAd1DLEMeQZC3dWTV",
  "key6": "26ARVeePUUmyRnLEfijrX9pUhzYLZkrraDGQi2P3h7hpzYi8rUCDFeozW9HciBwfSgk61KeqrKhj6woEkL3GiPZT",
  "key7": "4zuhyJhqKmGTcpoy8yWKhjZozhjDHRS99Qpzh3yuJdfAK1JvJrujHTJZFbsYZ2c97DnxXULmtFDcoZPttLpSsa2J",
  "key8": "47gB8yHXNr9Up2tXJMJYqWF2GrdQGt4LFiZqEhNmtSK2NDkoGw4EJbcmwT92D422YvRL483kKB3jsitod3mt9sCW",
  "key9": "4PYmWMsfoc6YVUHHHmZvuMLgykfTXmUbz5PySeoJxYwPwCJsFG66cASNLftuyimmJG8KxA3CPBLxjYkoTQ4mtbUq",
  "key10": "JL1SB6XKvV39hpXLkdUCnqQvfrPUhSHR6smv21ymtjPgA2GFEfXFJ5m96KMsw6JvUELjDPXBoRsfWkUy85J3YnR",
  "key11": "ZZ1hf2cmaNuD6CVS8rDKvXtkRhmq8PQSL25rtyLFNR7ZUyZnC8spcFcyCvLshJTsE7LR9E5ed3gc2wfkrr2ZQbY",
  "key12": "462ekNx5tv48rMKWdJrsdPHtmsWQ4ebAscrt61tqgAULieirqRi8CCjzV17J5xVetpVkdVopYBajDvvYz2XR1zP9",
  "key13": "49W97RTtocwSGSZwQfVQrsotk5vDPv86iydTfaoErEPNmCtUY4PLKVDwXJ4ix3skcATiNaoEXLMZxs6cDFdfJqfq",
  "key14": "2ztXi5pc8ZokX1pZaP9nUq1T2SUg7V4We2wguwD3aJAg5yPPmmwqbnLJoJiBji91TzNsN7nsQ6948zpjfBFd5nge",
  "key15": "64rRYTA8TmAyu6tY7q18wNBSkAf8bnX26GbkWPQ3ADRTtobgW1sCz77kLNPHZjrPt8owt5wq6psTNqB5HZhw4wET",
  "key16": "4JkT34ziv4DvuUFSAbAEt2tuqVtK41kXwKLYNudwUD98m3n4MBsnDgDHfHLMUBMiPXVtLENU25rYjL85k29atPiZ",
  "key17": "5oEiSxuJxc4wV4M8AciDexySM2icRumb271kTj2z17NYTjMkkwZWVnpHhTnuzYduiS4GJ7A77zdsq8y1WFMNvv1V",
  "key18": "63oh1AS7hJT17fRDMvZfmgjjgxnuFK7qYVKFdbJqWYn1tuRbhsYMqzW1iuDAwcSyZVWuZzceJNBXXS1PY8Jq3ZV2",
  "key19": "2APTPfsJW7hzn9fNEPRR1oRbxztH3WZRfjyPM9VNUntSiWhAgYdK4DHxSoJ2NgSQLKwc9Ft7v4JcYE9ZhonGcsVe",
  "key20": "4TJNm7f3eaZ8LBwoKtGq1yMKwLxP81gVsmbbKDHotvkheQLxoe4EkQmph5SMueiJY4eqZ8TrSUKkxYtHcb4fmT53",
  "key21": "4JoDW3U6thxQwe7ESjoUfAKhxHo7gzTsvfoaVkH99T7vWTyUh984SA9x55VAKeED86jNzeRk4TDiu6HjPeV2XQ5Y",
  "key22": "5xdYDnmTxw85ZdgL3osbDZjCHxP4ymtSj4XQZkbdHg7DzMjX7qs5eHSahhmPu2JjLS6Bxr2eN1z54GutQ6Fupmoj",
  "key23": "2hxoJBmT8ZuzbSzm3iy6rmP8iaECDf5KnufKTHPzapkuzN88d93QQDZCAtrV2WeNW5KakYi1oavtSHXsGUpqaqvV",
  "key24": "FX4mXP97itMGMo3xquZpkwA4qRaTxxvz629UbEa8XTHSAjpLQSJin8QFrtR8YWujHUCbbKj27jnTrH7cYW2zXxa",
  "key25": "5pgV8uczQdJX3gVBE8aeKhVYxxEyz76TLcnZxNhrRdFjRSyWxMse61xe7KzRyjAKdh3x9B6qtquDvN1DKuWPSmt8",
  "key26": "4iSPLSKkYtxUHz6eFWk1f1vSafcjXwBco4RknvqxAtNcaMTupSDJp3bftpXK5JHg4FrY5TmqhCPFzLCQGzxX4mM6",
  "key27": "gcF6ZQ2ywYfBp78rgnKnUBG2xFiFVpM7GnZ5gnggpTQDVHGeCBEdSNafV5Wrr2nPoXmreosJ1FUK732NMQj9q7L",
  "key28": "5gCdmMAqndT6zgna2PrGHWaSWrrCSAJx3S8BZqx9zwKMe91NvcjxRbQv8PiaKTDhCH5DRCL3cXBGrvsr7H4WWPqq",
  "key29": "3kLyTZDt4QahuQiTLieeqCYLhr5J57KXw4xVRqADbheemC7udfqrDkKpwjJZJXkSmkpAD3c4xqia5rmibJtLVR2c",
  "key30": "4cECBkHYYVZ7hayFun7d7GFMaTXFoifPWvYA8KTsZm5LVMES5EjABKyFLRtytveAaJcMCsHueqhDDHdNGQMmdFum",
  "key31": "GhauQotRs5E1Y3DhcvmoNeDHurs6LXFsjebWnFKy2Pu8NxqNfruZrzq3GRQnJb3ZXtWUHyQeeK9C8J9WnmHUpKT",
  "key32": "5iYsJXtzUejuVP5CnEXahE8tzTPhqDtdq5rmWkr72MmxaUWDVK4BgeQg17wLhFA8jom4bXQVPauZMpYQdHrEznH4",
  "key33": "63yk3j1ZbRHkHJdVevv45FuF82691wt8taXM7waCqMmrWFNm9AnA5SQe3FtJEtLTiq6LmjbdQwoiyCJnuHxn4EtZ",
  "key34": "5W1hJR7HSM7bcsw7BQUsP5u8kqRjiamsXo485fX7qhMqDmXR71G1bVZyPsAQpikwpAzhapJ4UEaeWZs5jmYnMVe8",
  "key35": "2ub7SwPkDk2X2TokTFyr6T89xrxJfmtHV5w9XsstLVaAF86u1iNbxo375h9KDYLaZzShemZwpiwTwZH3kgZhC5sq",
  "key36": "3kMyGLefTPccC1xmFNjEGGTndS4PAQW1pQRaNmeMELqDkCCM4uu4NnhEZv5Gf8ecWvN2rHJmCNRpvtyjbBZZWhio",
  "key37": "2uRWsGQeBcFqKJ6qhyrd145Wum4MVH94zeNFiATznSDydeZrR6JdsskJNpFBs4duVUfBaVR3z2nBU3XzQRFTjmu8",
  "key38": "4giuUfS74HyhZJFQh1AaK1dSnt6LkW5gErkB37eY3mX6EEAQTZ2iCnf7eLy3FK5YQfuQLZYVKTJ4TdUvcDedNjAE",
  "key39": "3mACt9rkcTw7sED4cBC3qU3iVta7aHV5ftfvSZaGyyRSExFdXj9YEkQoZ6aUUH3b6WrELfDXqzJ848uKMX39VZ6H",
  "key40": "2ZSxRkA5s7K62JMPe5cVhKVtowhauDX4DSZ6BLMfahFg6yG7KwGUrnDvehUn13CvEVaYngUCrGEyEyNp235f5aGk",
  "key41": "2merLcZiDTjTWmpGk8TQbmFp2DazgDfSUXHez6VeAhn2AFuy1wyxmh5DbqYXVJWmeVorQP2qhGgDUWDYEBckZ3Fu"
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
