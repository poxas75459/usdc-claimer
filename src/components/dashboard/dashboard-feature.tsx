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
    "2QvqtX13gFttBGNo8idkhauVwA9QMmsEszo4WQcE1RxgB9ztBBepmXFgjmokb7miUdmYYyERYaxmBatTnHtMTF93"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jD6QnCcUeqKGddvjz5SyG8JniLMA5pfULK9eDGLrj7ie51H4V1iACLNcjwssBdz9LC49A8Q8JwU7dDBHnEpWZ8C",
  "key1": "4NhLc7wQGEekuxpoDeBqS5iCxDNxRYSyRkBrFSvvpUbLdTgson95LX5VvEzvv2vL2rWYQVzinPb9fFVv24427jEE",
  "key2": "5oru4HKQbfYXrAK3acP6T9a615Aczdkc48gz31wuukrNsWFFLL826bg4tsGnMSBYe2etPprvAqoaffHp8CSCGzgu",
  "key3": "4jbW51D8gMD14irjvZV2GEuAqeVbb9MHmuJuScsEsAWkMSswxM95mUo2EFNo7sDRRtoYTcvd2129Z3Qfvr52Tcta",
  "key4": "3AQejcFZFQbFjqJ7XkkvUhovnuPjEJ2RgdqZhkGpKX4Gr4JM5Sk26q74QT375fWTXyjDSnYGRDCHBBmhHMJSQ38K",
  "key5": "2zPG5XFj8XMekAB9DRxm2VLPjd8YgsHcWqyLXEkxHpNumdsFuVXuwZBFvZ4kGeWRZboZ8gVjp1TyC3vsC81H1G74",
  "key6": "3VZAcU4VkQX5YyXbuxpMekVj8e1a5zXTAxqCkxdwijkUhxUVXXjJu8BAtPzbS5jEfdYF2PFtAxYQwv1pfZagpCCt",
  "key7": "2ECr6rTRWZoCWZS4acnBTA8qRxPsEmnrFzDT6S4voEjn7BHRcGDvmyKsYEe4uCAzwVoKWN4KD4f5ddU5PhGh3w7r",
  "key8": "3VJKK5GuL8yhTH275xGxj8v2Knk9H1mFoCfeJaqqzoXDgpPYdgkQikmvzEUftBq7gPNdqtUC1vs97MEPe2ayMb87",
  "key9": "4kURthFt5CDxb5o1sqKjSAVdeHTR4WwvceUkCGbjhD7iWsRgryPcrfwDVWmYWJeSY67F1TYgLFn8cjd7wBX4WkCh",
  "key10": "3EH2rjyecgSYQd9HqgZypHfXPfhLHw879GQPDR1X3o4L6Rax6StbB9zA9sdPcmcGUrhFRinZRsdmb6Pys9dHTGch",
  "key11": "3N5j6BT6JvBdJMQACM5Hop8WuTYP5vg9SPywiky246JmmQdMSH446hGaNZxs49jJMNfiBrjShotMFwVHiBsuyHDM",
  "key12": "E3XvGy81gVUJKLboxEerQeVh4CjSNGEaq2jkuDM7MEkcFtjzDY2TCxcuvyTLtFMQDfPCjCapXAZDrEWJR78m5A2",
  "key13": "5mQSvc4sTHNN3jW5JZ2QccRRKit2hJ8y8G7sCbcEsVK1z77QeYw3ZJtZooeUNhZZrbe9eUP1tKCM9V1ErafsCbLF",
  "key14": "4jEAF7VSX3LGftWgid2UDq72mqRDkr9JwWoTRdWkkAs7TbcEsWUV7x29rY1MVkg8jx28wJiJdm75kveVo3Bqv21P",
  "key15": "22wwefyqYZ3sd9vvj9ocVax6EMVJ13mQFDonkJCTMo5WLpd29xGrSWrr9df4udAW87vB5zENTnAWC9UJkmMSeN8x",
  "key16": "5C7wCKhGNUqxvNngM3ZdZ5SFCUHHew4brzsziCcQN5NvVMKBAUh62Uwv7KuxfwSU7oTx49bK7ogNziqE3eMJTkkA",
  "key17": "K2LmFRsEG9f4aQcYSNkzZ4mSncy3S8SA3BW5J4uchfVztjx3MxE8QhKJm2rbjd6zu5YDhcnsT6bjSzWtx3xdTQR",
  "key18": "4ytBTPHhdp7qZY1YpwT5qJxLWNCfUC5C26xQcm23jPrL3g46by5JZB7M98a7ASwmGhrvqL4rhSPsifB7mJZ74mXB",
  "key19": "5kHJrDG6Ve628maPV48cxZ4wfNwQBDgi6E811FxoxFPsXvrZ2hZNHMs4ke7pNBbNGeJ6KMx8Q1cw8fmUQhfvTUR4",
  "key20": "27t7pa9T2i1xaxc9B6BTK33Yj5xoYMvbMd9wfCokp6Q3MSBYxV1k1qtNunVdk2P6uGKauga9PB8VBWQWqw1w7Dg5",
  "key21": "QRNznh1KgTLVZCGH2yUweu4716N1Sd2thj9LA3NwVnM3NjUzaWGxdakdVFLZsRZt64FpBcPWs9QrWKdKwHqWjbr",
  "key22": "5HSgy1wtsZRczfUozj151BVvz9GkpnR31BDJm3B6EJVRjYetXtJMGteAqsTECzMvBRMu2B85CgumG9TQmqeCB611",
  "key23": "pdSRArrgR5UHxVEYpyTsa8xnkDhkhrijDqp8o189dikc6TMMhhrWLzWvhrZNwPdXZTKamrTwTLUDHXrVqKNb1yD",
  "key24": "5NtVZvMJjWqJLiZj886Lbjjv552bkTXUM43RSSHiDhtxuZecYV4tEJYPMX51v8PLr2jn7d8o8HR5ZfkrbVcGiW1f",
  "key25": "2Ft9VJA8HqGbYLMD4tES6peWrQH4Gbnfi889zSAMz2L9EMciDG4F98GP1UrsQXPifRmMYDFenhGdvV8ZCAVeu5qG",
  "key26": "45oYVe42nFoy3ky7jrNav5Rramew11pDU2rdjVqLxhqchsyKKyuPchVWnVxZZ3eQq7rMEixxXwRcZKLooYRQtq5t",
  "key27": "3DiNeAwbDGbTmmZ9KRkVCnDLa8CfjSmtXLkxVjh4i3TGhw8km3vNdY7obpjLXUqhMSQ7uGNDbGmffd8hYtqtcojd",
  "key28": "V4wUci1RxD6PG2ngmVvC4MeotMbE9aYSwnh4kjvLoPRst4kM3UJgLbsbPEYRkL8KbXyaqj2FRfVv9Wr3ifwUgX7",
  "key29": "5H7cxqU5bawkCnN8q99kmyJr3Bi6TtqWAUif4DJaVRbqJckwCMW1DY4B5SFy4x3PUt54ar34BXkCH6FWxBJP1EUe",
  "key30": "4kwDhqJn6T74nmpjKrxhGPzKTjvcv9jfpe43844VsVH3dYUZEEXbHQWH69MoEFToD3N2EdjcVmafRkySdLZdfexs",
  "key31": "52joW3HzdBKhbN2hR6cXdsVzEcCxNazu67Z5yCFXk7TG4n2RiJGfWSU5sEqkQmQq9DZR7MFUcWZ8bqoduiQe3GnY",
  "key32": "2CJosZmWujHv6SGd5xa39Zk3A9PDQTCYWvdjmpFTS5ZqNCixBJE12fqGgHC8tVcAWsX4BUmrec5bJE4KfYzvqnnP",
  "key33": "2DKieUak7wxD6XbNuMfGRrMfAK9ADB9sHyEdsr6eLj2BD69LpxFwCyxm86Sw9byjEuc6xQcqs8KE6dn9b4jJ4YqZ",
  "key34": "2mWTH4zjkTRNxD2fwXEiUmSBSUuSWqAZCpprpVSuB4ZrgjAzYsbLUuqnYPYAC4y25owsSUPmYWJx5kgYX8jWVUQs",
  "key35": "5zpApoK5fMDa1ZqifRhCqLz3iu4GjAzniV1yg2PDEmwP3Twzu5mnhnnBw8bm3kPmy3TYK4qUr2cT6qFzCm7t9hTU",
  "key36": "32BWurvLMSBMtt67zNv8zmDc5pS1MxUDKAaxbxAZEVPQWvYhRZNN3QW9tbPi7EuhhoXLpt7q64jsWd8RzvBavunH"
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
