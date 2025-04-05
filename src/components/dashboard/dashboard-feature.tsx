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
    "48RpvP4xNvxiXcfwj5BCsJnCqSgFnFkCaAX7nMM1yCVawkQGkntQgi8FyzDYe1CwpZkSPxHgBSRMxoJmDV7teoor"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zVvHXcTnWWYrgpxEGE49JBhUCqxqmB1EoMy8odrZmN6TXyrKisbSXgdgwiCvWaGoSN78bRPusrvSXGw5mi16ZmN",
  "key1": "3m6ACN5DpYoc7EpxvGrYbGPmZX9xivRTg12RgfRPLcbvQ6zPaoob6QomRDJwqueWGghH7JW6FZUdhqZRZDMF488E",
  "key2": "3gGZfjgVo5JVCUd7D3mnDaJmnuzp9aakpe2nHhEFZtUehoWgiYFupE6NwPaixAcN8Rzo493JTbbrhXvpa4FcB1tc",
  "key3": "3zxPmWM6uW9BpiN6YNXvDYo9kCtc3rWdiWDaTb2hAuK1UuHGs8EJ8xhEin5FUEzZDNXzBELdJLPrkKsoXUfjZUM1",
  "key4": "3CUntTjBoyGwqkJFXNfWjbvdJ4YAV5iaDhbjkZ4iBtGtCSycFf1h6LCwHc7zd4mn6W9R4S1E5mWrSCiHaWyvPm5x",
  "key5": "441iUuKhYq4E9RM4cT4ryCwbZxuQgRUWFhLzWp4egNW9LmrEq2rn3cjMcDPCogPb9Hqew4w6i7ynkg7rUYgZBJYE",
  "key6": "4tkQiULRo5ZFBvUyU6ouEp8d5ZNnt4WE3NxfWhYr53bepo6aDUKfrDWXirquNzB9xe77umB7F1uw2rbcHhK5tFJ3",
  "key7": "5gbcjiBsPKwYrDrWcuUvqVbpLXkwDFCA9kSUZ4pB7DP7UMykidsECQCAT6fAwUiDoWN7MVPUKdWiuN5QjWE7mLN4",
  "key8": "48b3e5ab2LsojjjHkc5vJ832fCB3xyC5d74WKUwp9wqkDpyzoWvsAtvE9bRLDVL6zhzodwHLV3cQ9EVJHZymkqHC",
  "key9": "yHu7HN7hLrfYNwQTd2rzitjKg6xfRSuatumDTP7uR5xLSpUMQJeGLziCGQzikT13D8bC1c843EdKuZPia5hAnXh",
  "key10": "53aSR9b5CvaFdNi8DskDCNZjem3wtZ3PbLovtfaUMDvPuUZ2qej22ffCDAp16ztPFuk1gASyeuvPTYP8x8oP1VKy",
  "key11": "4RywucWs2RPCPjFsL2SczbFy3AzoHXCfYYeQz2kUh2NPxJxfrE5nGmxWdmo5bvtS8wwDpCGBdywGsM64PZYWuWjU",
  "key12": "PQZyvWHNVovDzhxHGUzffG99sDRvXS2tEJxzmS4zsZ6kWoUWMsoeSCAFSpcfeJgJwAN2Tg12SvbHBCWPbuZ8hbF",
  "key13": "2FXQLB8GvwuCmnHH3er8Mwx7FBwYyPwJ1MfEdYbX6APssFzyoP583oVyvjSrkkXJTpXSQApuZWhq5xaZN4DwUF7w",
  "key14": "72krQrho1ktGJustcXzEUGNfK8hJehFNujSREdk8mNRkmASfSPNV6HNyRbcnpqyH4b1w9DoFgdMgNrDbhRUMZSD",
  "key15": "5uQPLVzZ6RhycGNi3gfs3uVv3YDSdUL4qicpbF1zw8RqYVkMRnqXctpCXqapuDKKxzpXcpmoxvbGnVDxM6orWJcR",
  "key16": "3qNZigMzs3Gs1W4cjhZq7puRZ3XpxBCFDAsc9U4KntmWxSBDfrCb6N1xQnzR74eBCKCXMJ17sXQUA4D7z3wKeJe7",
  "key17": "Q1k7QhUpCzAMi35MJeFqTg25qqYhcF1h53zSDawkkPWnmS517hj8XhrVdUjrMo99oWU5gBoGYvBe9kBvRwJZgHv",
  "key18": "5P3sWxWz47LMXmCPX86z22ww3b3jSBRJZtBXzE3PxwRdWPrxvM3phZs8RLmdGwiuWu5iWc7gTZUMb3GwKvcQSKBm",
  "key19": "2nLA8DTND9NoRXyePB29gFjsMbsAUKsyyAEyfG5KM3VZNDBvWY6D8es16PNQubmTrnAkcXN8wpPM5NbSLEtdePh",
  "key20": "5YyMua2zNiHWjGUjrgozbeE5sLiw63pLNGJf3jkvWHtm9M7x7qx7gcy1FW6bcgUrAw4dpYQrhimUutW9ZnNnJ2ZQ",
  "key21": "2CcPnp14547ABSJc1uSihBAqh9JxJZeSgEGQRRAiqDPwBXAcyrsrTteqTJgk7NuHiZhCG3WsFwfLnVuuhC5w39QG",
  "key22": "NDPwRJnuuUkCswi1bacmYAtzSCYPneaRYqMSL5D5qSeWz6DVHQgHSEBfqX5mgXkGuYBGkBXoPeyTFFURynBVuZr",
  "key23": "2VrUAGqA9FcrTGqv5eHMsy57cfS6XtDjumRhVPiaepxYcQBRf4gef2oCUKGwuem5WRHoWG45PBtNY6ApWSujxU8J",
  "key24": "3EpyHzJXdvEimfS7ZnLDPH2XCpTYsciiahQUpfMViZ31fhaPTvBHTrhH1pEs5SNAx7UTH6L7NcyXrFDUcwXwJXDP",
  "key25": "5SSwi4J2mf2h2vCSAxpUwB6A2s1kYQXeQuZVzyRs9oh5mV9WGEVc2pVt56yV7miKuaqTSM3QbZbd7W3fLRpBnLJH",
  "key26": "4MMWGatk1fjXbD4FxVggLfmJqU7jAX9G1ujD1VWv7KUc2HHN8nG3E2az9rfThw491RKs13P3ohZ8yjUsMpwU8xbm",
  "key27": "3xoo4Q9AhwZncFBPNxv1d6FRSQwAeC58zu5GMAEpvhg5n2RgBsgugqhYhFG1zb1wF7UytqLL7mVdmPeKh8mZt18X",
  "key28": "4X2jgRV13QmypVQdwYRxvpxnYxHu7nhFh2z87KVXT8ewJVe4Hn3y9RmTrvvLY3RNoGs8NEyCNFW8uLjkg88waFpU",
  "key29": "63kwAjrnQusi5cKNgNzWAhKM7aSaWN7myCcmQNRBXi91o1YkKLaSMnJHcdb67BWsgaezqFHJiY69zANt3CHWNdPG",
  "key30": "2RTmz7XcaXkrndt5BW8wanVX6HpWCLxKNU44bHgPC6QpwxH5cVCqiAauXtMPf3wn4hc5HaFxHU3e6VLFxqSm2QN7",
  "key31": "NiUAitjkUXULnwTK1AWRBHHhRddpkjDLkE3k3ozLsJKbNAM6QXeupipCXJubKiiHR5qcc7VHYa3H1mukPgChLvY",
  "key32": "4emTMwtS8ZMgNxiXMUyDWt1xQWrfYvJ4o9zXT7cAvfCvardkmkFEiuvaesnq1osLSJzE5bAYentkSumPFFXb6R7i",
  "key33": "23iW7D3yMjSqsUmhbx6d3sydWcf7JrtrHZ4CQP2qDLkYA1iTWRW54Mg9TH8reEuSCMcCUSiiPDKx2wdHSJ6Uswrm",
  "key34": "3fLT7vJ7YpsufgQWnwLTYqdb8G8MQVs24kbc4wWziJbkZoosJKqSnCPPnvkqi65q4dbhZbsS37KthG8259En1dXw",
  "key35": "4CkjVAPmTjnprirnWYD83QweppN8cVyArpbnxb8iGuRG98h8ExvpnEv6uD7xB2SWp1uCQ8qvgyH9MztBfFPbFXwE",
  "key36": "4oqJhRQyUzXnnCYraqjrqYEFa8PHHX3VafJsgY9RuEA24wYApFYW6gD1r1toSPqdY9ryNfmVX3TpNuvW572FTmfZ",
  "key37": "33fZHc4zp75sUVsWCwy3mG7GD6e7F1Zgq6guuZGsahvnbUUc4eZMEetqB3t6QXCAE465EemhrQrfUxvijiavC668",
  "key38": "4UfwJGaJvJxtxdFsQbu5dcsBLnPxAu2pzr1hXxbJGLqt6B3Wmh6i2ZZhTK41YUBqvUPgbdy1zAEXPXX7fEzfUXUW",
  "key39": "2KXTiDScRbBUWYpR1s4zF3XSpxMADuhq87wUzsVXdHQ4cHn4mEATYu71u65LQHLEqdZKhwSekqq24hXH9ZKD3uX4",
  "key40": "2ULTyZmHpcxwE2YE2RwFnWzY3Kg3mQ4ivmTPK2oieeHRgMasEMsTCMmfoqs9yPYJUMAA9ikneNEDmrMhDFPdkEt4"
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
