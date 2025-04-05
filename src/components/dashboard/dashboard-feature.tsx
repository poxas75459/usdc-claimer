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
    "2TDMaMisUsFJqXHQkfvEk4C55xhYShC6HMHaFzfhECD2uEeuRoxbK5HF9J6uQoRGjBHJMftRFK8MY9MHbNJCgV4C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rXXdDmQTYRc7j3hUpBgBf77vrVZYn5f6Yo6y57LV5CjfeQcPcki1yXYrJnrtyDwHEVYPfLjrATyMwarspBEv8dP",
  "key1": "4oA3ct8QHiicjdCbDfanr8xj5HC8XBT9ASMQybsdJpN3ZBWj1dSQrUon1m7Duj8RxjY4mh4ZtwLkJviDPUzW8ib9",
  "key2": "53uMNHSLoikGb4gkkGb2tyzpPiGo7FBEJZn6hR6U4e7uLEG9QzQwQhNC3oHmn7GvaJVJDuZ5Q7k3iYHXRBtw69SV",
  "key3": "3XmJkL5TZyUVJdyonqTrFVUTfQc6ufwHWDWZ9Svfe5A5TbHoGxNQ2TaJEKjesXxurxEgEJiUbQMwnbwn8wh9Gkm3",
  "key4": "NCKpfPZHheB1ymX7e7sYLNfhniEEmvu4boRqvJxHtYxEC796Cx7PqbfyR3XXVisQCBRRQx9J77v136o6NP3Br5r",
  "key5": "2yeN9ogvSwduCmost664fPd83UwSrwfh9StJUJuW1CYFmGq8KdUFVx57pPkvHtBBVv5i7orzVH3r12wSn3GNd8bD",
  "key6": "5b2xSf1L46nke3bxazYVRvFbHPH4Sng8dQwvxLtdyajVzpgB9ph4RDw1dkzpjLCq72arMN8HKNBHsauBikLDwkrN",
  "key7": "4JwK7wz8DrS28zCUC4PDUEzFCKLH7SpWvgXiGaym9ysjoKgrd7kRFYG8Tp4sVs6e8pTKwpBoFeMt4SaF7TgaDhAp",
  "key8": "2MTMUWEhEvCAFbmXx6qxGyjUbRgbfFPceWGLxUFNDDxTSxUzudWMrRrreByJNgw3s5gAcvJYRvs4BQkCEX7XJLEC",
  "key9": "44r6iHR6NgePkzS7YCeuNhT48pTCKrnD9nz644JXWpTWzPejX3MgKqRoP4uipCxmsSjQc6uyoTKu7meMnz8HbCvK",
  "key10": "3jPkAh1RQZnaYmbnXXgQzta299ANrgLDGzGZ8P88DQcbcJiaV4kSojnpW9Kyv9hmcv1i7YNiG2eUtDCKtw7ZmZuo",
  "key11": "5zayyDbCfRNeQnzcgKMyeNPCt5aA7DxAHtSeBZ4J8oCrQ36qh1hMqAgU2u9T7RY4wtQusfzwaMQ7sAvYCAPUx5oV",
  "key12": "nJ67MkxGkCCxj5sfiN3LtYqXSRmbVeR462zyekcC7FgQwSAZRiBddMJi5PCwPwumdBAMUBAhcDUFEoCVdgTP1b5",
  "key13": "3DbdixV8hvrU9jm1Xwj1uz79MZ1RfScw6RmYy8e8fKjJy9HFMngq2gRXGu1j66sgXRdpGk3etQr8KPv3xY5um5vj",
  "key14": "26XQQVcsp9E2gj5QyrhFynRrM2sjwCwhbRxP4QSKvqH4jjDp562GdWXoGHDqPCnKNZzfXNmjzuFSLd1hs9mY7RCh",
  "key15": "2pP56m3DmoJw5hMv8id1mnuRSPhKCA6QygkEHTfdMxCLjboLuDGLFPW9sWtPhjHygZpx8AL6nYJSSHRZZGFMyQ1i",
  "key16": "okX7jy7mHi7TsyBRNuMF3rcXSYxqNi5kjkdCCn49QRbgFe3CX2jLcgABxg4wF3DhbjWwRRwfvt9SsW4RbmKttwm",
  "key17": "2k3ZPyeDRiYSpxqNusKX1Y6yom8hZMNSidruimQqft4csPtXnJsVWmN2eeW3UFb6jMbX7SYSoLZzt4ky9rWVTZ3Y",
  "key18": "5t2ooMc8pL5sSG2LUgx9zzyEd2jdHtTu8cY21F58bLjEfBw2WsCedzFBDTmbtoJvhR21JXGRJQ1nwy6JQom4asWZ",
  "key19": "6TPiic1Toq4yd6JhaNJ6VQUWT9byFwMZF5pZiLj7x9HCXvjPayyuW1tYdAzKtF1KbsLzxntYFuSKgpeX47SWpWV",
  "key20": "3hhmCZ1iHyzwJMkyN7vA82cAHGxFjS3uFLhV8NSuRBARFD5xU6BzQLe38HAHpaGrWpdB2kXn2wcC4HoZVucg5w1q",
  "key21": "3Jq9aTQdTVFS7E8AkdinfRT2ocv2YkTUYwoQnV6TnEHebm9ihaJEweVYQBYoy7ewA63RKiyNNoywrNUNAKzZUcbo",
  "key22": "4JQJNnjiGfP87d12e1wySDzqXjdigJkqGxPPXzPwrxWZAe5N7rpyGtuaoVAPXt8Dh1avc8wq25DKWYf31PNWRheu",
  "key23": "2J9nqrdDpbbLueEjHaAGZ7CX4zfo1fQtkw7xcUcRRvkBaG436jUyQ5oPeif5dq2P9wPmp7qg8wweLFjEryVWqGGQ",
  "key24": "5hjqowfYxLTnkJm2ZA41KjDm7SpXsXJ97FM165fu5TfFXF3up5EoXepRjerrrco1rhzMvxH5q9HWGBXjmgxghY4R",
  "key25": "2iJShrnFG6fMQQkHGv5XmXWQ3EZuDNLbfwgLjMpqzYLJaAwqKHov2RVZPnndPWwExiAEoVx7o7jqHBfiMbZ3SkwJ",
  "key26": "553FS2fTMiM9F7aSuTweYhrSs2sCjmdM2N26Mu7RfWjTMRSMCafGP5CcRbigSsv9M7STKV5T4Ciud6rFrFyASAZ7",
  "key27": "atHrNgxR4s2bbgjoK6L4cAuiEimaoq5vZAMAKdKU5ebwuUPks9qLjqcKmJWWgLzd5UburdtuHUqo3wxa87gDkEV",
  "key28": "g3DRdS8j8AESDm7s8uQ4XhxDncnJPHyBQkhVkvDpKgy6PRSsnr9eLzYD8aVqd8URNbF1y5xvEwnDxG4dXhoE5dE",
  "key29": "54K5kpLiaqfthKBBWuu55jjZfiUAYMu8sns3XXnqjYPj6pNPqW4CtRG3jfwysnxACvZxRwzyvxcViwXMbtv8xZAw",
  "key30": "XoYytUntsLDs5tAcCKpEfqqXCcCMtGBivSk5wJLVsZTnXnvXdneP4aK2uNRyMFbsGdazCoSP2Nd6BfrkvSBkoFi"
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
