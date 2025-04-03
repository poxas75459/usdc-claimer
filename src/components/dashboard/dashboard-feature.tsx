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
    "5WBGL5B5baijLCR8Fb5p7gAfnZ9wcHPMHFvo1irXkJSBc8pvYJw5yNaJGHNVNnQSUGWsfev7pXnEGxm3qpXZUrHW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kuMiUEUTCgymPGx7aq2q6vHri9Erpif4kFe7tBSztXJRRrgacFYw2z6SJgMJ8bYmGLtJa3Vz5ZYjDBrovf64PaT",
  "key1": "4cxpnBdVG6XajWWnCAbsxVMV7do6ysYvyr3KJC3A3sZKUnQGMYyfFKgKRXDv4jY3KdAddtNefmdgvRuoafuMchC7",
  "key2": "5VhnwjJ3XFtyvB7ZV6hAEdn7e6guXTh9jvNPDtCS1yPyX2CRqa5mSvqBnk2p5vLkTtvbH2FAegKwjzcWYS5t5v2w",
  "key3": "622ygzpH5TjRNZcDwBLzvMbifvLMM9FsDw6dyh2n9NWNMqNBmM1ps5UaP16UrraeehcYNzMAXZ3jzrUkjH8tRAXa",
  "key4": "46A7rLMMwQr65Fk81AM2Mpn94tGpg4b4dDoCeRD6taHhSMfWa5Kb6RBgHRyULjv9hM593FuomohPhWBVzQttPjD6",
  "key5": "4DQn6xmAJwEaeF4xj8r1Vby19dWs1X4ip3pWQR9fmBoG1Zt2DoPzjZhKPrtewTNxhoaBu5svbPNsTDHA8pm5PbDQ",
  "key6": "672B1FqwZpJuLCkAeXjRZ4CohWCULB4nRPqtRRU7kGXXSX4NJfoMAZWtbNmXhm1T1FoeZCfkQRdJqiLcthpVkPWy",
  "key7": "3ia2VDPeJGSFrJjWRYkW1sZJnQvF4hogkV5uWTrzviGKArJjB4BdmQ37c32RW4EKYc1CV2boLfFFXE9tqm6c3Cmh",
  "key8": "3Tvyoz13rh9kLNYCcYbfVWD7LphmUJw72RubjJnF7zTFuL2gN2nxAcpq3JiXxrPeP5gwMis7v4Y143dXmvxm15US",
  "key9": "3Qy9kYznTFuToreWSCZJDdR7ms3xGgqtC2V6duCCUZHvFZtJPzrtGa3rnMCaJEhNkaNQ2yFbzzW8gxpfK8miidLa",
  "key10": "3BYTYdkyzKNmS3mbwSAgBb9WNQwzYKCoSmShSb5Yu65db6cx8bQFwHyX8ZqyPFMAZNG4GuuqEWtWPHknE5WTnmoq",
  "key11": "nbjLF3V6NwejhZLYFfi2vGiRYfcbsVAxWuas5RfTTKxeHiYvChrteVdK1nSdCAAzwUrepQmB8jZFUD2QrcRqeAr",
  "key12": "UEznWeFhUK7BeKAW82HoehecLamXB2vJQb6ipBfYEpTrxQpZgz7bhNM21LhHbqWM8wFfCEULv1Ptby4ZojFuyfi",
  "key13": "Z91A7KxcV2Fvk6JqzwGRpzKesocP6k3iBKg5fhvD6x3MUiHqEc8fVD8FUXkn7aYRhPfvR5QdBECd4BjUm59LrCp",
  "key14": "VetZ7YP21p7FTzFgFyC6nHdgGurNvmBDMpPmt4qjkWX7A6mqCXo1k1NuJ1WNtMXRnGmoqMvdxbTgqECufTEg6tv",
  "key15": "2sQ1WtkeCVdEqMsRDBgHwAzuqAWofZgNGYK4X86YDpEHa1GxT9aDWVwMo4rfRnSq9vdKELgeWCB2U2KxebaVDSQF",
  "key16": "59oHsoKWNbBA1vCygk5HoBxHsmEsZVYvWob2pUhVdFcPsu6hjdUrD1eFDSCJTwq4BQMX87tJ3svnbw2BMHFUYfne",
  "key17": "4VdSQse2TEhDFPwqT5XX6pEhJbfwNYWj86Dkiku12YFtgE8FXnGauc2AeVtyWXYyn3wa5ikikrvWWRj3nXLSKVx3",
  "key18": "2pPsCufiXVTXpbJLaciPKXzACphbsbKcHZeq2nLrZ58iaFQ71zv26Cf3YnD1UsFLUs8DbRvA7jukQbjaC9SGUHBe",
  "key19": "5MLEnLTWXrDUEysnMEQox74UVnKwGHqrHe46NuNuJb6jzhAmGzzKc5xf24YJDYKaccpdNeMwnru51AGLZzeVq6iy",
  "key20": "TfeYoPfGviDXHynFkQhi2WitUoZ8oVNUrGeUhisXEDroEKt2soqJaxwKNoXZw3WWrantUjTzY65xJzm9Qn6UxM1",
  "key21": "3NKhPvFg8S2GCf4tggDAbzgQLcZTw7KBsNT6WSEbg25qBoVNVTuiAmU4rywmec9txegq2Jw57eWh5RZrsEG7RE8G",
  "key22": "5KCqyu9KvSMs5heLyg3WqGskK4361dsLMKbcLqXFh7XmVNRZq8UXPA1bi1ciCipXwvDsKrzWy4xdpiJx8f4CDZqZ",
  "key23": "5CJorqCkheNiFC6ytoCTkEuph2dG8ZMdH58ck4wyfgRXM3VreYh5tQiNVi12qnrwSk3NAStscTwxcJtca6TR5ZJx",
  "key24": "4S38HfaeQnV3eH5L12czN3NovMkQ8opeaHwgmscDczmsRfZkyqoxa7VrCJ4TxR1E3HvLiuviZfzLLF9FHUyfRnLm",
  "key25": "57D3bhRUkwnEMtT32JQ2KKC3KRB4c2XWWvRVt4zLRztR7UZFw5ZpLiwBRmfwiCzWNYwusF19mYMiJwHSyzCuk8L6",
  "key26": "26Hv5rVYhxchJJWR9AyJNCR1Ja6JxGCcPMCb6esbYANWDVEuTSZKGSDTUjmLLfy8FdecJcQ3uCW5RUoZenA8r9ZC",
  "key27": "5wLFHCPuKAqzVXRKF8NEAWB86qyQLoMRhEaGFUxUq6pafG2R6cjPS23GqdBKt8UGEZxuoDKe9jTJWXNG5NeRbwmn",
  "key28": "nTwEmgwtrrk9bkY73RcUoGKcGqrhTbLYprk6epZjFey6hUYnBc8MgK4ckA8hiUTh5pR8fgDH3SMTJggC4PkzXNm",
  "key29": "3LsKgnVLWnkuwEUwtJRgTq9pWrb9b9hCtCGXXPN6A3LEMmFTiVUBwS1tfnf3Lb2Uhkn9hc5mRB141QyMRDnqwd7T",
  "key30": "5w3KpZhmMwnLzhFCnXrEAY4XBT9hvZbkdpf7dEH6ado8V87HoaaFbEz1qw6nBMeU419pzuLk2GuZ54ftch8Cv11j",
  "key31": "61M5TrcpozzPpDyCLTYnadotNtnCQ52wWWFRaTq4bodPEabBHeSpMSRe95ZmVKetKTKetiSMhfzhXq3j2H6pARoU",
  "key32": "4ep6tkPe9toTH2Br3efEWWCNS5CyPKpk8feastkrsBBcztZ31usmRQmEVY4QuvRRJ2kk2YAz8APdsg726vg1LVEC"
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
