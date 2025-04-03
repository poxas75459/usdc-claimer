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
    "5Y6hkwKk5KHKb7Ce1VgviRYjn2JqjhkLmiSzGVGUfy2nFt9DMUMc4rPJxgx3r1m1NCg6vRz2JuYzAj3c7dSEauyR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53NBrs9eTK5tp8LLcdHBFSF7z73t23fp1CgjvZK23Fv8huis166QaERKLjhQjAXXSKL9fsBs2qzmRTKJDza78EAS",
  "key1": "5QcLYjW5SWgcqkkrBq8c2FA7g5JGhRY2PQYBeAA8aCkdW3xpZ2EoHsNSJeM76K65TiRQTiNS3jJzcnwuTKLCEv5j",
  "key2": "3v7F3XbxdVMrWVD9CHwdr4cy5bFgL3NWvFm9X5BA3Wcz3gcW6gTMquEviwFbA9EVTATARoyFRHC8S218xNg9gv2x",
  "key3": "4enuxM4wm34FSCJWqAg6HNCdcx4YyhihZx82N5ezJFbmXgntRv7nvzDASNjojvp9fLTtYzJCpRT8tKZGwdXNkbfK",
  "key4": "3dxmcaVmkXcnv2v4wycQYgbtNDCvJf4AikDgtvqBcHze3C3vK4XwMmM2MTFfR25YuZCa2xGegkQQETTnW1d3rcpR",
  "key5": "4ZSiKL2ZN7m8Z8fMZ8Y5wLCmJRJnFRqxQUJfNHsVRLGtCoUVrL52DMKVmLmAgNAz14e338ekw5oYA8Yq8ZTqWxAC",
  "key6": "57UQFWuRkDbmV7KW7TG8CsuyugGnMinDzs62Xw9YqdfcFcBzR9Wm4uuRB3PkdUMPK86ZxwS6HBwCRUDDYMyd8uwS",
  "key7": "2oM1Zoj2KHDZL4Cu2vVAyFnYTYSTKEyp3CYWpqbiHTSs9rgt8L7vj8zwFXh2LB2vcQ8vJPdQmQE2nkJQ9KkxF9oZ",
  "key8": "129dmfFPXvZirTyui3s6f57JxqyqcSN125bhusBxHDEZ2q3mSB1eiQzHhqWju7rkqsqGKphkkPXyF1ssFSZM8vk6",
  "key9": "3EVG2UDBHeYMxMAGnoM6dMAEJgae6Smbhbm4opmymLxadUvJ12baAFnsDgUGdAq4u5iz6JtbBwiL5L7gNC3V8gNq",
  "key10": "mzzA2mkS4qeTRnZmmKuxJirNGFLVMA57EYHQEvSZTVNocdabxVcuVtFURgCUaqnmAsYa69wkkJjXymxwyqnWpMX",
  "key11": "toH9cMaAm4kKg4iZGHrKmZ9sCHJ6FjxUQttfghHtqSdxE56Qi7VB5STFNiEVJ12VbC5vV5JDZTkimgDT91gyr7q",
  "key12": "4iYvrsHiQFzp6xfCPA91sFvMokk7VCYXaCN9MEPNJAd9wHNPe4eMnZSRfFVoXW8NLREdy77e93qPJbY9oHeifzWY",
  "key13": "5UKRZ1LmZ472q2qoJX46fVicAtJUhp2umX2p4K5Bxy6XtGDLvFQqs5vwpGwj2Bx5yw72PDuRjewSBx6RVHBNxJZj",
  "key14": "3psifA1fEU36L3SMxguzFbG4rS7BXUiCPDUrimqeUEDW6GKLwYPAzvWcSdHDH5W7msJbBfXY3dKm2u1kYW8ytEMm",
  "key15": "uCCGMXhoXKvzWG8wZUmGZ2pkLwJd5RFbZv7hMQ8h1vP1o6UQTP7XzLqeDLW1dTptNUgXGxyLNN3ceDsUZXD8htq",
  "key16": "3y2aCXYGFvLMMm7C4AoMRgTXTYhguBym7nSVVX1wr7pWVMQPTjyetuUqL4MCq8bpg3srzAUfaibvpYfw3uk36fPa",
  "key17": "LJvYePCpGb2aimGrMrhrBxVaNki1TYNUN1u6bbEQ5pBee8X6gZGU1o7nEFWWqXHb5twbqHkFQ6rsMdPhqFhHTJV",
  "key18": "SqKAoDKAzXnPZ9gU9izZVw1RePzdAU9YmQMxVWpz36Jv2Q4Gr8MuFJu3BuhnBNhc1Hb86vVLFJAfjsD1e2NwnVA",
  "key19": "4iXWicELWpRe8r2DVveJVNibRBxick7dri7iPFdXBMc2oeaSufCTeTQF4xDJRvD86Ust8QgfXZ1L3AbcYWPiYjoT",
  "key20": "2GDcjxX9jvoZjKr1rGtjk8PTerHfDd3AqSKZT4o9RVAtPCFq2N2W8XvsYNZf69JbatCcJtUdVj2fxJpNTC8U9rMt",
  "key21": "Zj3RDizEj7kTrGc8djqFQFQv6SCZg4XBskpqPtK7buYFRUKTYCz7aXWCPAPJwp4kbx5WftfoyNQLqxxHWGFdz3D",
  "key22": "52V3Et13dLbNNjTRkV1KqMsrMivwHeQUAriEfR6LCfAvbFHzoiCuoW4CAPMELzrCdttiXqDQi4VcKg85iyaut74S",
  "key23": "4rfNpQcJjXuJN5CzqEUgtjgnx8VKWaWsxvcEBkpFGcjdksZsofWk9Qoj1yYCkfRvsWfxQxmVG9vgtc9ud2DXHyV5",
  "key24": "3r5UVEM2mKcXXbepsdcotw2ZriEWbQSq8yRrVow55jmNULavQgywxHL3MHfLAkTnqwou27FXUm39Ldsf1nTinb8p",
  "key25": "2tmzHPaoQ3t7R2r7KJDH7BvBWfhidMQvkLkQ4fsaSng8TRmek7mrFYVfR17U4km1gqs7z6wxMZiFDMXYL11pEicf",
  "key26": "3dBVDCJh7x5p4ZqAeFE9EgHZjPr72UGG86y4BpzwYfXkzwas9WDvs9TCAsn8GFVYMRN45zBppaxb4ZzYk3sP955R",
  "key27": "2K2sGpbYseA7CKCFSjFBXzznjESktyaHBW5x1YKaGAg5PqStGRsjpLXCitBXUvKecF639bEbG6XNY9o4TKR9M1tq",
  "key28": "sHrHGJ7JMiDK7XfXsBbrXkQ4doKy8MyYjt5VFUZck36YMhEghUpiDAkToHEEgReqLY2nhMtwGn7DgF2pAXj1mAv",
  "key29": "4wfUkvZKiyibgfuEhLMTDVeSYevjkYpri2vR3S1oENcRQiB8SHTR2h8TyVg44ejnh9MpNFyxyqLH9k4nx466Q6Ca",
  "key30": "3WqNsmjwmU16y5xUEyoE8Pu3R5VuBiJ8aUFSteYuRdMkvbqTnJaStrzDa58DXzpUHD4Xd4Jg2X5bZa9DxTxGrWBm",
  "key31": "48k8PKRagtDRh3GbU22UVTxNoRoM3z5stTPgP48fJkfcLkjKy8BNPFVGZrGyEdqVDGquBsWTpaRvDxykHBc1ifC9"
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
