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
    "5pGGfg9VmwrNi4RrXbHJtJnWgaM3Q5euFwe8MUZEjBrfuCHK95ta4UbX8Nvbw5msYaMDjqmAxLxUyGoER145kEwx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2teQ5BCSCx7vsugBYFb9vZDRXdyyCaCLKrDyVpunZSH6J66ry4i4Fbrm4CrDTeahu85grgk8NLfYkTWcSsmSrgbJ",
  "key1": "5CSwLAbc7WeoVNXT1DesspvagLtGQCAqazdcKp7scgyXzAfcMeF3kbdQtAm5BLRB5mWsPne1Vb5CeU63CBux1Cwz",
  "key2": "48X4kLESSiKvkMmUz8UXQwUb9Tqgw9QQWfpV3pRfUZwQkw2zWPyb6FjDjFdR49GSL59UAAx8tTqbGHkoi8ryUeqU",
  "key3": "4KLBJrX29Lx2xkgjq187gnzkE3TvZqRVbrgDcVo2qSY8b2byUyCnwvQnXP2dEFJGqjfBLdskPev4HCBDtW4Rtz56",
  "key4": "4oXwYpTRj9y1YDoTCnrHLoCirvyTow4Csj5iegcaqSK49rnAoB5oBYxn6CSPz4ttaVabTp9TfwBMVgNs9aHS19fo",
  "key5": "2XD9D5Gx2VMr2GEPZnZvUbxLqrrJ9Uqjj6cBCXe12hQL8YJB2FfajufZdTA2X8H87q1BsXmaN3roh6ttgzHCdPQY",
  "key6": "PNXgacM9PSgx8ZDeUd6yYX2c6LF5SQMVCh5YoEoAuiChKWNH7xDh5KS5efKN1Zg5NfevFFXegUWZt9AtMep1nye",
  "key7": "66vQowzSW6sv353CFDgvVPQtey4zy3h58aBwDRHjbdTovhHy2vn4VsKMErJBRazexcK7SUVYpvLVvMXhx2g81zSC",
  "key8": "5oxTZ9EyjqUhHhLfnuNP78CdZvdRjhXMR63UhA7XBvM1LoVhU6QdzhfH7ydu764KcTNF1m3GKDgj8D3Vh4GZPEFu",
  "key9": "XuAtKWbFQaCF8ybnFw1NuZDJ32XQd9Vx5tJD4ViP1J49Gm9y93FCSeHXtQ2TuJVxCP4vaWnzfLAhSVw6AZV3bfa",
  "key10": "49QcFzoMLJ9eDpsgj2nrNnVfdLzSuLcgqGVrNagiDSyVkG2XUoHb4rokG5mXHEkqrgpgfP2csd6bY8M5p4akfV5q",
  "key11": "5GxLiR23ULVyFWvyUio322TPJZ8aA7ErVmsQjkjNmusmV33rETNUqLCfqgTj9QSU1AHZSngMdiXWtY7Rvhnt96PE",
  "key12": "XNighkjnmJJHsC5fC2CgA58KjPPx8TojkJsUjfaR2ojrrA8ZfFHNFkHxVw54gRw2EwzcTzAx7rHnqauKgiNHZVx",
  "key13": "3PfwmhVxP6eripyiybWEaaTo7fMv9Q5ehNnRKSUvHcSFt2B48JxoptubS4m3XJDJetdsmXba6ykfoc92VLqmsR37",
  "key14": "3iBWgYXWTVhFHi62HDy5KmWSbJoRhGpYNVahTDKjt68LkiYTRQTfpq8m454xAxetvWmWSMVb57sv996nDduvHe8c",
  "key15": "Z9J4TD3qmL2m9qwJtCvTo6toqz9yW6FXKCk9DA87SUTJ7onBuEeJcuCf3cr7CSaGVawf2qd6jQeuzcYVG9pRbpb",
  "key16": "4Cs9MwgLMKCSEtPwgMW1n6rLPUX1JeCvNapQEipJbsZZjSU4MoGgg6L5Aoo7zAmJvzadFcEcLt4NvzAjBwaLrzwu",
  "key17": "5UVvp8w6NDFqHQn8bDXN3pL1wcZLgQEHgKwGR467SW2XdNgZGBfPPi3T8gvZsFAC18Tk9ASJwjtsDtyHprreihU1",
  "key18": "2jqSLWiza78GcrycZ5E3NiQd2fts2LMptopKncCyQrJpPWepkzr85rQwWWXAAd9pnnyGELPV2oman2JWUCTXYnaw",
  "key19": "Sbe1oTwFp89iHe3DzNoMMQfYFMkHA88aEVttb4wdX6DSD4KhTAxNyRDg2TowJXpTmUtbLH8qExnDg1PH2zbGn9h",
  "key20": "3C7SEEV4VVHQwdkzMQ2KUKgk5nVRUcz33mGozRm8pSC6Xwf3Fcf4F57B9G6691pShyDWjEGfZYEyzY47FWsXWFTV",
  "key21": "4Rrgjv8aYd23QMP4PYAs7YAaa3FDj7G8AH5HTwed6rpXtKSBnbEdwSLnF9FoW7GUpCU4AXjcYU5w2mV181Y5cDD2",
  "key22": "3Y4kxoAzcBoDJGyUkspmpdujZ9isjM9BE2XkqAcPfCFmAJQBVtC5iNfKZZqTTMM5RYdPCxubzxBGjcwuakQnAogM",
  "key23": "5k8h7LHNe9xyekM59WqGXLEMEd62N4JwYmYNmUhfboRhFkR8472yfmCFcCZ2msgGKpefLKwrwYXqgXrYbZ49MpsJ",
  "key24": "4BU7SH9Ta6L6vechCVXgnypTq4yyUsPgcZswH5dxLMYbAsq6rTECjgka6YPkcoA4YHT7J2o8X6g3ZBA4umzQLcfW",
  "key25": "HqduG3E4kZ19hhLxkBF8zDWkmTtzZoHXBt5bFJ3s47ttoxuYcxjF8tsK7sVrVKdfwgfF7B86G37R4YqeMtSnHvj",
  "key26": "2NWFEziJKZTge1ozdd8Mqib74PjLgkyUCPHCowd5itJiNXtbdEfK68cZjyVrmRPH3tLRjrVnoTQt69yrn4uHTzu1",
  "key27": "39yYJDwqNFx7gA9gRt2T155dqRs8dwPYW7fsP219M7WvUMcPe6XYWTtbMAB4D1XXwpVwVKiQhydwAZhnrBfXFNuA",
  "key28": "5rk8fNk3ngyrEXyUsTY4cbjk5DWw9kXoQ5648gTLsfXmx6HPP18LnpvqY8TXybN6Znb1R7fRbCdgwQpsUkNeoQjm",
  "key29": "FmNobW8RNNhEhjue47nn7uZE5YjM9s5ADaRBhHjgGrSYGsjatiwH7u9qBKnEcMGqZkighnxUhZE6C1cwEXxWDKz",
  "key30": "66GYsTu38SXg97Aq2MNuDeCycVgsTCR6DXGEbDnT8M1a2RxT4eqhwb3VfR2a18W5vahEMnr2mQUuWtGnpzqRe575",
  "key31": "44EgYwuvZ1BzBvh8U7pRuxduJMCL9Vv6VFyn6qutZE2PHsbm7rQsqoGztRcBUMby4MbFfszf6EpUv3wFPvihZcFX",
  "key32": "33kDyKuUUpnMTkMtqfvuqFEZiwgB6V62k4TxUGTUBsTqtEW4yq9EJXqfXxphNXRT5HoSaEZavJkTQWQvjmJ9TZfk",
  "key33": "4XSCeQ7JpbrNeQdhXHU5oKdKeRzwAR74KUSccFz3ByNAU6xAXfnzYyfPjAgU9MVUcoX5imnJPJYv7EzEBLXBy6yG",
  "key34": "KFx5ntj1Pqdo6p2eWruncHPbyiufVwJaSyvbZL3MfHbvFCpPssc7KtHYqPM2NnXNTgSYYU5eNkzxW82YCWZud7M",
  "key35": "2bEFce8bAmNMZpWGYe8zdNn4RQLnyvEtFfjoce81unSx9uAt6EybJ7iDNi6PcGD8VSJ7Vk3uE98ypsPwnuugnFUm",
  "key36": "3TzRBXEbUSgnVoZnG26VgSWMfTvUtJyy9PDhf6mxyJ47g2fwERni9cTTrix8XqhEn5s4tJnvdsf3gkLuxuh22ZBU",
  "key37": "3aGKTQdABfmT7cGmMuZyjcmAEZYuBRjN917YKSvNo3aK89aWC3xiVbeNUvaYeyDZCVmDHUAK1EJdnmJ57ovv2Bd4",
  "key38": "2hfHPnwSZ8XBVCjLxdrkitgRir1otud1Sk3d5hQFH4NuhkTx8CGCaU52nMjNB3aAGvMSCk1yo7GZudQHx5ERCPWA"
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
