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
    "2omAvRcLfpxUjvyPMuWG7bn4LiDnbFztRToUyEMdT3MEcTxvUYCvnGHgg3iWAePdFtUCnNBF8AgxHAdVehxGjEfT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LayzjBdbAUW5m9MPQYGLiakyUPP4CdiD7erC7esGR15eE7nx4NMq1X4YE7HCYCnondY3QLKrPpDTn52nCxJHuh1",
  "key1": "KsrduKF5R616Ao7gZ14VwoPctVeA89GZ2RGV73rWbnjKioeCAGYB2WN6biETAf7n8X4Q2CvwtaD3rUzW7dcJW55",
  "key2": "ss6kxivFm5spdVb1z7XPpBMzQhKMNPg3MeZw5FmDk9qvdEVcRXKYMkK7of2ow2FasTfo9Watn7sYzhFKMiyx3sZ",
  "key3": "2HpvBNF3G8RXd3XGTjFr7WGwvugujFi1uLmUGus1tdC2adoTGwjNU1RV7gd9uSux9EBHHdkctbqTKRJv9swh6ZKM",
  "key4": "4mDpwusreXaQxwHUek8bM5xEiLoJwR4rmNDshjaCqtn8tFu4FSDitdTXLB43yRBVGrxoSReopNjnSMYvRTFTwpxY",
  "key5": "w2TPFe8oK8GMcDk33KLN8arBiZbYHJYYcNwtAwxdZLqHvYiqxzdYEmbWXDk7AtrX8w3d56UNyafofsKYkJVRSKr",
  "key6": "3tZLG79aqGq2oTXYeA9YCwngt6Qf6wRwvL8DRR4s99s5sbB3z92yTK29uiT2Em7T7MFqurcA1hJdvgZvxfv6zfDU",
  "key7": "NdB6NZApNzZV1QFQCFD14j6JHNZ5TTPTTrjeSX7cMVvG29ZZdxpEXVVnHZPh9kMBb6DRdPskWh9AXvf1cMhqYNU",
  "key8": "4a3fUoa51WkjrjYUvCUiYTECe1Sru3Vdfvf1bbQSuARfHowg4aXW6qQFEZ5UiNiGJPsHGvff9kDG49r226dVf4NN",
  "key9": "5KRb9v7CPJCVMhE5f8KsdMy1wimLSnxKr438MkSzWvgNnHPuL3sSB8mhMKgaR7LZZrb7Ub5vVMEh6X1MEVpVDcXJ",
  "key10": "5PWrmc4bnvMoU4Lj1mme5qYU7B47JkyS56hydiUEoLf2TL2EigT4izSxaMvtiSEWbu94VvesQ3zcAywqyMsiFLRy",
  "key11": "DFY2PzwgD2RathMnCoq3f5sh7PR8Ms9UdQ2vkyL1LWPamHVQrpiWViFbZjKmfKCMUEaWkW9ypdYTn7zZMJd6PXe",
  "key12": "5VYBTiVZqVB2oWvizzTwynis7tNWnm3VmNH98R7NC8UpWr9GJddEgF8hBUNnkAH8hseqanm5XrgjUP99dZG57a2Y",
  "key13": "3pGweTzSWuaqo2ZePBzvxPHWVJJK7t97BvioEydgmZ9hw1cSrtoaTB6bRHk1Js4zuu7W9B5z3GVY3c1KizccRyUT",
  "key14": "4vgBQMadyaUPJdePfVYNtKuWh61BScXtSH7ReiR2Gr1dRtfrY5kSaYJ3F6NATzEwrWzngx6yXbmCBKQUbtq57YbY",
  "key15": "2iSt38VAtLXZjgqivkeLDQkjRzns5btJJYH6nePp1xmBioMLqsEhHnQSTYRgaATBjwRCM6q7hawoMs9NAm3FJ4Xz",
  "key16": "5MFuX9YPSgDgPjHxEGpYJAqnGAjkZgi28RzqujFMuFCcSF167hF7cu2E8XZxdugteJqJKEzNhjB9rYEsRdwC3fn1",
  "key17": "uctLCvhjLWg6XmhKpE38KFySRYK61m3CdgK4opfWPU7vyMkSk5wg3B5u6bTanVAB2SWXPhGBSWFZ2d243HwXiMv",
  "key18": "2Uswv8x99i57K4MfPJrSFJ97xsndaudgtJjm1ZyRz4t1UmPWhDGkfyvQhC1vbxikwEewBmaZApBWvtzjXEDppMie",
  "key19": "5Cdrht2B9Pn5ide4ts1CB2fvEVry5YDv57GQJcTn2CH7GLT3iFpuxdt9omQsAJMWeUbv3ycQmRTYJWkFaZ6qjNum",
  "key20": "4UTYKkwivHvbPqymX2w4NNwdTGZnyQaJDHPALC3UPRR6QAK7PRmFAP7wgSuvHrbrm2oySSmatbnxGteynjgdGwrm",
  "key21": "2CJjCQM5ePtytgUmRcHvxhh1XaqD8VhADPQNjUUsY1kJrjAxfL3aHWNjJbEV4AUvmX2gwEtuDxrtwX1nzVpUenVB",
  "key22": "JCK13PCfKe3jNwqxK2BAx88GdsyfV2QsGwR5CWqjinC8RKWzKqYqfpkitHgtB7TSFL9RumSNnZdPf1BQ6c5NWQE",
  "key23": "B6aUuwxaBBqJs3pku65WDwmgWVe5GbkUvDfNoeKaW9Lz6NohFuAtWGsV9BwcNXMdv7Y46wrKSLs5s4cSktond8B",
  "key24": "5XCiYkcE6oHdQzdk53pRV66WspKt88PTASjoUkkocP3Jpx32VyKEgVMCJgVe9afDNznkjGqthvM6pb6JgM1WABDp",
  "key25": "tMAkZskcdgtfivZs78uVnxuk2QpqjKdWzeHtt3w3FUwG6A2dLvNBHgy7Y6hijdRedfDF4b31xfYo5xc2EBWJ41a",
  "key26": "54EXAbausvaQzSSCeFjrLMty6ujVgtux3uSnnNey1e1unN5mEsSk8ke2DwocZfQhRvbipZ6SLDiBVWvDuiZVp9yr",
  "key27": "4DtJhm8nkED49xebMFKvCHo6Pybvc6k2AKhYNnsDdW3cPm5tod9h53EciXiCWHRwefHh8dZoUdekAAmFbmYvpeCw",
  "key28": "4YrJNGYSYBczAmxrDAgwdXBM2hbyDCADkzJRh9XxJGfhn3jHKAjLraaVYPNAhvthEzoxv6G5PQ1tXWjtowAwdKkz",
  "key29": "3stzyUoZje9nB1kUPgvZmBLY6nm48Unk8YJZrUPKYcbU1LGs3oV6CCwjYdi1zoRfUXMX6PqBzytsZQcPacmvKyfp",
  "key30": "3PBQzTpyhQ96XJxMedzsfLzHZg2bmmjoKnxPUq96JqPnKawMx5zpZAwmmqQZRAdmHXWUNSYeLmhwJwwCBrL5Mm51",
  "key31": "4dHEpGd2xLKBdF195Fs3nYXUqRBZPb3w8rzMjeLQXjiYnTcR3uv1oXgVqytDvZBKxoHcXnpekimznqJof5ZAUUj6",
  "key32": "34cdynTgnenpSQRjFhVgK41AMSPgV9dqxG9tJWEnREMwN29u3scikMazK3JW8oLQf4k7gwsaE2akqaMLQDTexLrf",
  "key33": "4BuzGmpnyLnndCYjrc56LQ8mS6qjDBewEuF2LbdGK4KK58bB1dPxSk3DNRAij4uJKsmr3bDXNfj5JZ44miMoyXHn",
  "key34": "2awXNdKaunGiUKujDAkouF38D5FP283BiyvDAsc9TEeZn7SCkfqe63GUdTK2NLAq7JqfCZgWmbJ4pyEG7QWKozPq",
  "key35": "3MJaHfAbuNBzPx4mQHsmfJYtz2u5u5XVyZjTsfR8CHfGRnp1JZJK4qwzDPvH88c5b2qUWvPYjMibsUkDPwjfzWw1",
  "key36": "46Nct3uA2eS3roVTDyvmwMpw1RJ6sjPaQDLrfQAenAqWtCBEQfSh2BFf7JZPeXFF4AznENG2FDuWHkXQ2BwiiC71"
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
