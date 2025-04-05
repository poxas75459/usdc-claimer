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
    "4Hov6EjTXeNPuLpRtogbVNVtRwFRfE2mw5nsNSXH9C21ZM1Y9VqdAaCa5vqWoiCPCDN1WbxdnigeMEoMGue5URQW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JMrxU7DcsJgX7C6wBmPJEAiYNqchZKCt6VBvzJC6Lm44rYaMjyPcffaHfboHz1iihBRwf2YFKEKwfDFRf5WC8wz",
  "key1": "Y6tz6ckasYTiB4pAa4jfuN4ifDRzvJ8GQYG23shGKJfSQWsGzKArxiGUAp2A1q6bNrS5CuJy3XQmQzkkTWmKc3A",
  "key2": "4PNabDq1dJKaw1nPN5UKHxD68p54NmLw6icoPHAXkAPnukvTKg5do4Fj1Yc71wNxBNf6osEhWq7aHZ3zfW8V2dWs",
  "key3": "28dPiv9QQ5aaF9wN191LVAmkARK6KzLAnnPfn6299DjMx2SpVWPWgpMk9PbjwCoeuP815hy94EVoFPrEse4dxjnq",
  "key4": "45g5Acf7svPqq5EyBCVQ9tXBVkGVkDUS6Magt9MZfLFJhENc7qPyuvuF5adXgv5Mhogwdf9nwgn3JrvaCfFpbUzJ",
  "key5": "2myR4c3r3RGq3gNELjPSWHHiuBe3KnfQd6RsC49ufNaSXULJoPXjspUUgbntM2EWoDJ4Gpzqxx4WPDNMdfi623kF",
  "key6": "4qPzsgfABg9UHsgHKSPSZ1dLCkk2DY6g7orrK2JZ9WzYrDZY85qRJRDhvWbPqM97GXauRkLec9HKjUakYLvvxgVy",
  "key7": "2yeV3nPBvLAkQ7tDYxFUkRYjyjYtQ5qFdoAGPur8R8G7KimKYEUAom3M5kSdAWB6THpau5iWsCAhVjwLTfcCJfH2",
  "key8": "2oqrSz9s6q3Brp4jKyikkUCcrb5Ra7XxRrCbDy1uVkbEuqQr1699yyEeK2RHNiuNHuQRQwn4mw8HqKS1kmJJswek",
  "key9": "KCbikv4mtr5PiKapA1nqHCEyR6gccv4DiJ4v44J8ik3VMVe5cic1tR3nTcH5trW6wT6NzASV2gfjHnnxRXEW9me",
  "key10": "2Wk31uRPrGtU7FNMTfRFqbt3gzZcdbwZ7KVRNCzeqBPagJUcGaFbfTDBhRseWvDnZn5xBzp4rRfPXMKRbTdbNaQo",
  "key11": "3jidMrbWAwTHgL9Yr1C7geV5EvRvH7PHdZDsw4TS4yuwLVTK1ddo7HDgMQW9wUUpDF7z1KYxnqwj9nJHxohhoUSu",
  "key12": "37Y1Mytvo5p8H5kLZuSAhyrXhSQ2pEXJ6SvqBhPU2x6mTZwDKdkutJPMQ8yEPdVyhbWe5sHiPBMMnrUJGPXRYGBP",
  "key13": "gf5WQJGKxv9GS8JBANBZ3wJhn31yd4i9ozykw3PyHN4Ci555UTygVT88d3n45AfJsUjhZXVh49Vouhj46VtqMmE",
  "key14": "yw6vnnPhKjzSHAGtTybjPfdSxVKQdguuDfhM4iD5qZxfkvkFALUHfGpHngjtP3kbCSTAN3KZrrXmVTsKkh3ppCk",
  "key15": "5KiG965RAF5WQwxrjdbWNqpKLVH7pxBJ4TBun1V7qoJZTV6ckMosCErtLmKjhEkCcseT9bpnjmLUJttEEFazLRnp",
  "key16": "45X2TXpUkx2tm38SbY7ceJCqv4MZ8F3hG1iKW7VzoPJj9uenJ6V7F6MVZu2aERGJRFZdNGrW7Sh7HVFRKxJBYZe4",
  "key17": "3AaMsgG8Hr32TRGyhFUCKUA5Xz665v78vEkJF8nPfihZMBxR9MV8zZdX3c6nTVE7A7Ptq2BEd5V5GZyXnVYkTH6J",
  "key18": "2mqst6JzkPtbWWmZdaRA2rNcbEeVVBRzYEbvqfDSN9atKE9n2YCGXTX3ydUX1PkgTc1mPUhNHS77zLaCN392S5M2",
  "key19": "2KUjheiD3xtTGF5f1Rz4jWvJPYmCoE5FgCEWX3DRFP3upBvuFsnwT9UCRZbQbsVFJVuUuiXFMWhwGqvcSbYFwkWk",
  "key20": "53PinKwQNp6eCVymZAJPttUURDdXBFkWJmPY3tcGfZDyWBdQMk5pVSk2mgjZ9aomdXnBMTmkkZYgPavwDQnyoQuw",
  "key21": "2PtMuygut6NWSVPXLwg9Lkxu14zc4KFRnFdACNbCxjmr22ervZFgrmvnhYqYG725n6QqEmNgKH5ojv6ZTCGfHF2v",
  "key22": "2TtbisMrtF7KipsvFB39ft3zBYHxkW5qGMg3yJjeES9kXcPmSMXSKC5uZTA9tJH3Y4JfqoKzKBkUi4PsmcuR8Qij",
  "key23": "2rzbNpU6pk6QM7vkne6M5Ld5bov61Tx3PEJbCYY4ESt6sLarYPmUWyx7ka4DDLQMc1kySSskq4AQ1f4ArwgM3Fv8",
  "key24": "3gH6imGqZppbMZSpJUsnJe9kAFwuZEpCCDNMSUJAxhHLtviq3nNGFPNfczbYHN7jnoSp1BwVGZcwzPiZ3PXYN567",
  "key25": "4MDuHwpfeCJyfA3MTmjgHB5R3UuKUzbza2Y7dTX5NoHCJUiDAUPPfCmmKowypx94LwptZHxqmNdmW6buXHNzsRcA",
  "key26": "TyQyZfgK1CLyfdsY7sy5qR9vVnj5tWECphgaHpjuN9WvL9CmXYhwMLV9qiMvzjkWAMec2wgz61RmUWG3XmS6CFp",
  "key27": "4gJTt3Z5iyV8biKNJE8YyD8o8cUANFwVW57QXqt8GfEQoLy87iG3FfH9cb5a7fLYAyKrvT5kNnhBxmyxozhdhrdX",
  "key28": "2CwUNPNmma1Fwgpk73BUWKSvqw7pKvEAMT2CvojgBgEUVR8BPR6MVK7b6onsXemSyD7NdUVtv3doaR5eayzkd4TB",
  "key29": "5EtesoWh8P8T5MeFaQgd2RsSEYUv9fAXxwfszWjuR6j8c9XQKmYEsWfx6b1T6Q9hPit869D9NrLkuZZEaRzyWEDu",
  "key30": "2pfC9tgAXKUGAVmDZhnpNGSBuY7tqexWvbqB8VKtsTY4mdC7g6rrFtyFp3oCygTMDCqa9NdEb32XFHDwz5pst3tW"
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
