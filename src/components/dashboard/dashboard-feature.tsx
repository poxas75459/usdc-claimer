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
    "573D14T8FtrULQx3PzQb3cpd9pdYcobTFYXurT9RVvxQSnyaprVkzzdRZHPFQi5BgwCK6aGd7e3fxumz9hsGkCqQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cia5djTC5QdFi8Zm3Tqub9Nt6ZykhbY8U51GEHbgUbPrKVU6Xcb18y9rNFF1fR8Rdo5FByybuqmmg6hyqQ7ofz2",
  "key1": "3TYfiXBvsL97Yk1uJtsbsuCnJykfShmD5FcU8a7y3y2wQWFYAX4EmfvJbxrkciHwomLy2iyrhBS6SWLo5h7B2Fuq",
  "key2": "Tu8KpsYGyVFatXvNaRLacJccK9SydHvdkLSiG5oLSQKwwZ2jQ5C89HCFXSmwiGNqcDKULHwnFfJnZsa9dzHfyMD",
  "key3": "56ce31PvQdRtqkjym7cL6bKw8hpSRQJ3tafFaFdziMG3SX3ENwC2YGgnuCAQbZ3cjB7SfG5ehXamEsF3P3ybqCPu",
  "key4": "5baT5bzRapQLoVjHKLSRojd7DoTrQnvW2avP9YQTxQ4QPFfVueYnvKFw7akiEKhSfJJrGyRU8hKe32uLYyCi6JHM",
  "key5": "64RbCeM2fRdwU18gq2K3wz3Ck4QrgavoV85Vf6vptjjyYz4fRAouuEPDZoB5q3fGmv8yH5StMWFJCPyv3Tyen11h",
  "key6": "5USszGpZiwJz4JKyjZue5fFJYJgUwAHc9LVCsSk51213stK6odCDmvBqDk7zbUHAzbp7pBvhxozQJaaSXaonXycZ",
  "key7": "CfjHgbh7ERP58WZMC5qgo48dGqpQ9EXgBxNxa14kqyPUrqATbcC7Vr9egfsbgFMPhsWTHfGtWtJGhUAFw3PkxZb",
  "key8": "H8d7EyCrASoiprXVeoMQRSoLpXq3XgtD5W9Vsi8WE213VzU3AeDJE2zJNUzoqc7JJ7KniEc3hkXMcsy6SdE7FAz",
  "key9": "kGCGKWdLxR3iNnkTnCi3GtoqG41aUougESqtTKTbuxGjda5LteNrv3GzUMBGDUozzbNy1MjY41P93RwmD274kW6",
  "key10": "4yeMpvARDfXnAQLpZFsthtQqf25aQu2Zr69XTqykuefBiVh98ttSZKUZBisXchsm281RguBpYwa828UwimbBbUuD",
  "key11": "3F1pFYwYEi7Y245Wg7w7MnSsjLuiA5P1T76HSfD4Pue8CWuomQDxPjedbe5XXKVC3UvSC3jcUgafouiKebc4TDQ5",
  "key12": "3btcHxJL2pAwy89SYXbge5jHVPgwMu8cuHCdush2ms3yoPq9rQhVjvpvyC9eeXgtjgwFiZUJA4JfdgGRknx51ww4",
  "key13": "23CW2h8GKWrAGNnf7jweQgyrtazP45LX44KpciQaop2EeceF9fdqbKLNadinUurPx4eTBVMRUus81gkae7Cs9waH",
  "key14": "2cnFK4o7iFUwgAP2WJNMJd2iPHgyMsR8S9nJ5RDAgaxDk6buLXo7XF8dx6DQxwsSDYFRnYdJXwFcE9GS2W7WXPvv",
  "key15": "4uPzykXXoLjbWh9nnyJM3cMVER1cyzSUUicST9oqm8ih7zSus2NTK5i7JQEiNDfvcnFmsozLhMPc2NswrX4zd6NY",
  "key16": "5r9BBpB7VsZ9Ljn9vKNxnGVQG1f3duuxvS3czTNzi72TfSRJuCv6mLcjQMFyYmEcV9uWW2BNDGEBt8h4nRd3iZkm",
  "key17": "2GsChy8MNVVHfBHiP1DFzkXUaaB2jtmyMtEJdK9fUcTZv3wH4C3Xjt9jMSUiybV1AYJZrYmN5kAAMDQjdg1zZGyf",
  "key18": "4RZK6oHYieyDYbwjXmSWjv9XNcfJSfJDRp58sKkH3jAuyeZmVAQFP83KTnUjaAdTVfqZHWPWTdqCNt8UfvDh2e8f",
  "key19": "wxLCv3w4YcemLHSBDpWhMLhjgGi2ki5GuZUDYh3vGT5MyC6uZ1ZVHVLDsxoMJ4qCCA6QaVxRXdXyfpYncZtEFGT",
  "key20": "2anxU2Kqrc4QYCZs7oMa4hpw57yAgfeWraXn857ZBEhwS7QMqMwhrGpKoWu2NTn3yCMVQtiuUUN7H18G1iVesyXS",
  "key21": "A6oD7JsKG8qoW8hbh1FjPa89xnHcgpVuSMo8RFaAxWk2ZHjZYRed5shEXQWVqL48tNj9VTMbEk8G35WKSqEbb3A",
  "key22": "44ub37rE38Wrspse4BSJp19wyNGiPqT9kAFYd96WhrkRpoXfEZRpn3xFwREhsU8hPKhsAseYmsD9aVihiny9RYih",
  "key23": "5rL9C4rGDvxCyey45TyBmR7QZp3XMSvp77AUuCCcRAbvk6jdoeAo2iRVxCuwpEwYTxEbRR26pX9AYZ98GU7Q5Q4Z",
  "key24": "2uFKbcvvmqSez3iabXh2igQLRpnoFJHhjN5i23t19NJDko3CgyVFwXQV54WEgTHzgDekhdnEdirhuWVsWcYizXNK",
  "key25": "5c5AUfp8xWJGHjXDzFekXUPnsTaNb3UV4dhMwDeAJDaDx1s3Xfm6YFpujjNSEGws5N327Awd1qUW381WaNuQi3m5",
  "key26": "5TZso42c5d9Pfjj3sWG5WNznZUqeq2LxmdC1PHULcd37RkAEZ3vckCeP2pU6d9AW8EbawdRZY9VqPUPr9BjDbm6s",
  "key27": "GURMTVnXJonmzYykuJTXxTtmQ4ADEm4kAKYmGhXmsJS4QWbNzcNFcW1HbHzw5ZYeUfWerMUgxBAdMLoT1o4ZBMk",
  "key28": "PrK8vSVG48ycmsCmTf3yjgp2N5j2yg6JDAEuJbrhuqQfA9r5XACUKU2TQ3GP73FXzFmox5WPtXjJbfxBf4xMtNw",
  "key29": "3zT8yUkwqB3pESShQiJxRLaLthFbzqtKgSEqNBmgWjYJnUsZFLFu872Cx9dULWWxCHYgeUQ991b2WT5A7qkS4idv",
  "key30": "3vRraRMQbtUxrycpMDmMkcSB2kCN8whAdg7deY9KL2dEtg3oVdyWsrxPFKTts64zzAX9hvzZuLBFozTRjyL8XMfy",
  "key31": "78RgdusA81qGZY7GUSzEjbUKvdXVqkb5DK7Zue3vL7XNAUs6TBoY2S6yx8gzcG5TNGfdmGLbu4WieGEuUZZcoeg",
  "key32": "GR3RJPjvnvNDJFvLHZnkptKSABTmZ4zuepv3P2ndNyEYk72TGpYKXQt44ibBJizn1jgxx6MLV7AivdjnJ31mELw",
  "key33": "35zFKRRxXAPEty9gD23fwMvhY9RCM2PAec8QSuLAu1oGTSnHHj7P6sY5gSJjg6e4NM4uUPkmdgF9FaYUPoSoTrCQ"
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
