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
    "4Ai4cwNYCkqxchLNVPBD8gHZrJerMp6g9hm5pcJvwKqvyKtxHQuGDe65739vewebdRot7iLXaALuhSGU7CXWoqRd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63nAXUg8RbWyKUJ6Xps4A83rAEwtZdVGRSPr7LLpjzbJW2o5zruied82c3GWuKoXzbJgddbqgB6F3TH7gbYrfbJm",
  "key1": "4JsosYPSVJWHRozLPKVgFzgGwarbScVfJPMsEg2WgdtNZeYf5tCzVVdCKeAVshQxZzMsaEhaoYukrBV2MMa1E4Dx",
  "key2": "3HngsthskieWHLSUAWT975QAw2Wk3Vq3J6bD2UDx8kME6yoCpDwn2UqXNdtj1UvN1zFpzEkLPuEY2w5AAQDJmRE",
  "key3": "2RoNKrDqZ86fRDwFPgUSqaL5bizjRETWUzjTRp49rMmxwaCZd7bXVstmSafUNjfhMUduqhV68nCPX1m3Z7oon8JE",
  "key4": "5jx2v3pgsct5wUDkeRum8BX2Rv9HihFY5ZaThkFjePDmMSDBmc4Mn6nwFAR9u6XpWupmgsBJWSAoMe8cNyd65krK",
  "key5": "3msYEhkMw4i8AJ7rmAdDm4g55ucrp3QcqcU17AwnBXQYLDEmT74afbsxrmcPHhX1PuqMC9sYNtjxK4GLnMQXnT6w",
  "key6": "5UHqE5Ya1cjmqy5jwPzqSsNCHjZmnaQxB3VJAMQpiN4gGHkNDMnzHum4CALZ2auHXK2NNsgcGLcUYtSnHvRAJ6gZ",
  "key7": "41RFpPfaUyptXFcDQTAyL6BPivv7yRrWSFjEkRcTgCcLqnhrEvE9vXky6v4u7xG4jYCZCgtKSGwiJDYGV7tWjKym",
  "key8": "5sDi3A4XuiHBQ1EnGjiB7AJVTZTsjPCLZPJCxGGnPFZVD6cAwPrkpKeT9sogSdaMUUH68YKWEGBNcmpF7wu36qmY",
  "key9": "3QERpMEgAr5BHprrA2Cy1jaTQpAB69EeuddNirXK9nN3ZGgunz9iu2ANJP4Th6TuzbGge9GM7ig8bPnjz9FxQuQD",
  "key10": "5wDWjtutgRVa9t3eKLXHoaMYzNJHGCnEnAGZ4XmCq35JLA4gXy32GZ2mr2UdjJyWDSAZxZEm4qqVw7hdXophgACu",
  "key11": "2yUe57bhJnQTicTohNDKE5LwYTq4bjYKdRXgyytb8kqVRKMvknL2L5FgHYv1A7NaoHr4YPmiT4EK222zer7qmQHG",
  "key12": "4v44oKVko7HrVbirupZ1Cc5ebZcfGarRBTUxWmM4an4xdpM5BpPVSZMJ8DXTBMz9imEHrMUCWmSNiFbK2FXGJTcP",
  "key13": "5MyEEKkGUpNPo5rjTdMopyfuuZqeHaihGARyK2JDgcGNXpjYXCJKg5ipKayyTqqnzFdfGbWLFd3jybaB3Sv2FBq7",
  "key14": "4LBS74bAptwyoKj4tADaBkqGkRRmzMA6BCsMJYVHu9cnp3rJuRoweaXShZBpkiZsXYLB4kNaCU7QjNhhDycU9VYL",
  "key15": "4RUkpf8SwGFBt3egrYho7czAiTdNVPK2gexWikAW1gbE3XdJf1AFSwUjUqnBd9P8KobQmfsxq8YFJoEtCaKcj8r2",
  "key16": "vvjKD93c9gtnaHxLnt39DbTNoMK3qAzm6iHgiiQ5zKCoAT8ZY5RuCA2RgZgMw8D4uZB3qUe3Gi7sUKnGTk5Mcyk",
  "key17": "2ixkecQrSjHcYiWWZwpLnNgpj2mnk5LKZLVbPpBjKcc7vCHHz2hHiEFr1UNVmRheHppNRUMkCXvGxqja5TTnahbk",
  "key18": "57LsjJzxEi9QF8NammJASvaVHyz32w4xuHAqSZPm5FzvfeTxuXsERxFVfct3BiybqdaHWesnv9oqK4c2ySxXHCpM",
  "key19": "4FB29jcvxmsDyBNvCBNytyYoAd7X2iZUDGMacsMgj6mPH3pwHspFkCr7hghmT8iKWEXozV2TFvFLY4tjRL4Ft8HM",
  "key20": "2szwMqCg9hTZ1mWThSiKk3q62jqmtAqERTtZynbhKhhX4dZVmwn8RSuHwZAjt6Kx16JaYNDoLP8XGBYTzL7wHs6L",
  "key21": "2ivJ5JyiAXybwRcAN6mnTgRBZS68GQ6MdswyQCbP4d1Rh2j1ZXDJXj72VZrtjraYYiMAiwgczvwLwFzXNd47zXDn",
  "key22": "5Ud5dBtrosMMSvMNupTu5mXveSDusU6gwz19gzh3DcYhPtH1VJcg3YBoJobTowMnrDRDUKAqkEqcceUJLKChEs78",
  "key23": "3sRjm4BzvR9mecQF8YPS6Tsbxp653bUuyJ9vXgopcowVZ4CBv8Ca5uoXAxixFvnsqp5H37xKdSbExnXuW5UinpG3",
  "key24": "2VPtogJDQjEsccC1oTCaQEpodyuHyLSMWATzWQkiXVrdfWcLw1jLUWUjWrUVbadzja3aFPEmWBupDxKWDqAK3SXA",
  "key25": "5X5e1vmygno6Wnj5WHd9WWZjZ5g4n4Z6KBGg31QmXytzgp9xrwnBnaAmBg49FLhb8i9rX6Njj5CsTWpr3UppVzSt",
  "key26": "5KPRaPa897MBaagEGPV7vityas2b5vkrDq3TThyAdzTPTq4kANtwA8TmPYMBD9yC6HbQC8PSos3P29gF6W2u3sur",
  "key27": "wx92cuvhc5Ly2d3CDcGm6RaayMijcVooqvMM7iamcquga9ggc4HNGMxVAJqvDMS1STXo9eSdwDyKfFhtgRmWks7",
  "key28": "5hBE7mUo2h32cxiKZ9Aaz6gJjULNKSrJqvAYRoq5dmgtHhz5RCKC6s8HGm38fdoPaUX2S3ycJPiKYAqtFasLzrXL",
  "key29": "65x3zuLqL38NHjboFuJZEWk6uV6133xVXia3hPVWAtVM5ogY5bVU9863GviEVB6nizTGM4QSb4YZBnkmdKMzroEZ",
  "key30": "5e4oQNEnNDjNBKaVyNu9LkCF9CRwNwALFdsFSdb8CeKuU44th4Vv1Lzg1ZkDM5kAocchM7T3UN7jUYc8JtQ6GUUn",
  "key31": "24FWUz3F8aFuQe8BWEqcsRTNA4M9YPRnnX773hYmQ9DsxRPfpJT71kxSBKw234VbDJJDDk33RJYpkSgqvhCATJbw",
  "key32": "41z6jirAgMGrWCMurDihaZ3GuF1zCH6Ch5N6Hx5YoFVeWzy2d6AP2kE5Yg3h8dTS1jCotd9zDhXyxNxZQMuLyWeo",
  "key33": "3gAPZGnh53vKYLCvrKoz8MXKzrfE1roe92N85N2sP7EXqFDkERqBub6yQ4kMqQuDZ5M9xJARBbGcUmmsTY7YK8b6",
  "key34": "3L4m7YXiL5Q8CNez3JQMh6oKg271kMo5LFDCnWudpUXWJw9UGpjGqvmBGHGSGgiR1wTWLHqbkhfGDKY4e2SSk9pN",
  "key35": "4qskMmmijr9TWDe7Ln2EwqXJfcUJjwZQiMB6JWa1S7r9iuXNrLxrtfDpmhaGqmoAdP9GjoHGbVgiKFBtEdrMoU7W"
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
