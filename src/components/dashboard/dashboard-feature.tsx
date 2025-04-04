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
    "3Pp7RE7Wfv53ftdeHvCuRwtQ1vX1ZXQnmvead9izPhYPwKFAXKsAefsXBkNwRhULhXyBXztxiZbtoef4Nbz2TC9U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dCtqwwQH3AyjvCQWNswZhaCoGpT6CrmyHbpzZKXh8aqeye1unthXN4gMLtay14xXe4NmDFmwr4cFKXk9yQzRzVP",
  "key1": "3E7dvosqbxU152Uqp1Lat3HEq46M93Ea7CZXa9wUDGavZU5NPzorct8Q9jjNUFwGjFHAAp1MNTunXXNkSdyNQ3ue",
  "key2": "2WRMxmbGawFTBKH123Xn3PBPa6T12GaUYgjZAaQHzmniCADrKCXu2HnNMaxAfL5k3MPuuquAhDoX1q6YY9EMqjoy",
  "key3": "4NW75PPJWBwr76SHhCxnCrenNC9KgQGS5gemCDKParbHh9NEcViquETCU6pEqvoNDPzrncdsSxbY61qKbKKeSzhh",
  "key4": "4adLSbWxCDqcmzf5kEhfUTEhoFZV2HhqczzieyV5FYVgv8fHVcFfrxxy4EbYPDpggxSJyWhcGins9PAWpCzngXyS",
  "key5": "5WdcobsjpRbu5nuYVGDB3juKqUZMY6sV91UGoXiDow8AGaM7LNopwotVQSUCubmeaZYXFSmaMDLhWDMyUdraa3h2",
  "key6": "4fq4S2upTQgqPA7WPNrATh5EV7HpDk5nMB2qGsZHX74ycphbmCHVzp7AWLuTH9aDWiPqKLGhwtvyErNBpCk8UnNW",
  "key7": "2ziX6tbWrutJQqs8T19BqrCLFW1krpfNLFNxRkAKnTTC5bMU3iD5iCovnsy584kECbverMTjBZbkCq9e1pVmhgSn",
  "key8": "Y1Qd6zueBfMnVEDZW9xEBLa2qLbTvsMZE3gsiTWSdgdcQmGyypnPJ2Uvtf7uwR4bv6CuxrigZBtSKDZ9VD1g9j9",
  "key9": "4N1TXCSskzqkWeDfdzxjySZBEZtSjAPa25mDkNqtg3R4ACvpybcrTkDcFzvAHEAxTPKwrEDaAUovCfZjsgefJBTL",
  "key10": "58QqggZpGGt4oxyMi8a6CSJi527oQwiAnciocfbQegq8cKufDAPQeEpY4EEe3H4oXEmfW2NNKvd14jfddqRuJ5Qd",
  "key11": "5ZyrBj8tt1A36fCdjDrnWbnAkooSd5EJoBvjReBPqhUq443AJxKhn6PiSrRAexCvh425ZJSN7jNiNtHv2Dvktygt",
  "key12": "4TJKtWke7x9isYF3gsJwjmK4aYR9qh5ZyjA7ddDn13VogVpZHdeD1jaG1nb11JemUQ1ygf6z2RG7UeBMSuff9Xuy",
  "key13": "3U5xcgxjJKsKCA3AhSL2p1N4zwHJGLjnTTUuPfsmWv7s57B9XReog92FgBabQAZUVBetnJF9uv47XXd2SNZQASQt",
  "key14": "3mHpKX4v7XnfCXnVu1gGEKpK5obtkdBnir8WFZtfkFgR1HvAECrMGiQr9x8GbjasEXtKWRL9YWGFDDb66gPnkZPR",
  "key15": "61WxL78B2sCg6BWTiLjKPrpshxDaHCNXA1CFQjrezwUKNZCD2DmHcrJTNs56GEiEcWJ9YXGNrW9LTudoEezdbTGs",
  "key16": "5ymCiEsbz4QWmUeYeZEjJwN8gNuavBLCAmWXdDpBqQ429SJRDsbccP3DLTBCDHU2rBKMhMJyy31CRT3ivF6omkEL",
  "key17": "4A98rcJu6xDoy2YXxXxrm63Q3huATyG1GvKJeDWqvnRXwg4dpB1nU2dFUtXYu2JS9XZpRufBGr9Wn4Xmi2QDaeKu",
  "key18": "37ct7EEixB7c71LZBFqzHRn5esKMzYdvkVrjR4Qut5PKTVrEf4eKpb35PMRUZvdpdXMyEKLUha3ViMotXnJG8bvZ",
  "key19": "3eyqMSrLCiq8rMpi9LcWzGWFJgkK66ARk5qTiNJMB3g9jYGa8N7hP73DzWz2VeZLhpr2k37LS9RRUoRGV5oZBTip",
  "key20": "4JrWne93mqN3aXc4se6SzyChp1ffXPTMKstR8LA1jKNWMRL8VJ6rZRo9piynWa5sQQzkXqX6np74Tte3Goin3usw",
  "key21": "3qMGvmXtbSDNnzzGkk2Vef5eFiFo3x6jvdF4AMuQ3WeHeAsTcEmP4UpqQV5y58bPLi311CrDd53ExRPgeizgXPhv",
  "key22": "3oWiSDd4C5pbTfugevuTE2huVHwnWCNocibHn3mZaqMKjqEEUunGGSwfwzjtHBALUdSWVWxysTncDaaNv1jdcxDM",
  "key23": "2pUJttywJV8EDoU3acYjEhgZWpqNV1JSCFemfjz14A8Y587AwWBrJLu68FQpbRvNfZBjki7ZSfFKDmNX2EBRs33L",
  "key24": "5qSvUG1pJSstB6ztn2GM575oFNcuptUcfSTjycYvXswvvbarUGB6fzK92R4oxFDFastpEJGnGgCsoDMWzjzkRA6t",
  "key25": "5UEUA1HzvLuCMsXGQDrhNYBgcU7CBMcPKJNNhJpyM5Z1e8PVHYBt9tp9Hp7rhxtwRmLtkwNaX4bWA7CVJQX3A6f5",
  "key26": "wECiuzgRdR6r5Ubt3A5CWqVrUwTDrt3qFZ5UNgp29twrR3xVYbZQv54go3V9i62C68NEnzDeiDqezxk2x3XGP88"
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
