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
    "2bUG5GCRnBREeDkTmrETeNobWEJXdA4C8VebkL671pnSoEfBhXWHSMXsZrDBsJDTuZ8vFgedpGxeScc5eMseMKwm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wkHJD1FVyix5pE8baBfUAjTEUJJnaFjqmEk6BXvqkXcgYRPy7f1R8pq1g7vxD3QPqLX9ycJEuxF3wXzkqvhD9f1",
  "key1": "w9obUbLs42okX1uPhZ2GBFebY7ZEaXqn3Vw9cG9JL1AUU7D3hdh3icSHUkDxRrsDQnSTKrMbLyUo5xjdEK13ZXW",
  "key2": "UqGcYtjkWtuRVMgq1gU9mbPK33xYoZQFZ6YYo34FJHsrLN6GcFh9QoD1k9jWWCmv7yZTK8fMwbdUgkq8d2N68HW",
  "key3": "5cBungDuk2WVERj5JY2qgJDCh9Cirq2iCVQzjVqMwcHtzogReSXiaQygURfe2D6ssWnGGU7e4r3CKSM8YgDnsakp",
  "key4": "64my1qztSsjp8YQxyRzxzopS5Nt4dq9bctbHM7gfTYZwxRmCjWQMCxeY5DaJsDSu4gnJn1DiMRCsbGx9yrMdo8LL",
  "key5": "3ZCVJszFe5YKm92scynYdQWo2Ym8ZzH31262qkQv19DD43RnXmFkYR2bzzp5UFBrDUbsSQ1rYA4KVqqV3PTtW6zy",
  "key6": "2bHbXvhj4U2RbpFfwWnydPM6vnUqNRHktzoamEakqGc1bwded2UaaxWxQxVvuZX6KfhrCThuisf9hSxfAV4BsYVP",
  "key7": "4WmTeDJurNBKwA4i4fWpHFYYRsvRDEkyqCcKA2ajHQnfEKa6uq4XTaaViBYAiQ2zSWjJfxW9JFdkxbFyZc5Uw7G3",
  "key8": "2igxxAw7Dyt3J4v8Dd6z7HSRC6vBXAZgVstbW6nE7cRtwWmLdXB4EWGCSbDjQdNdgeHWgkXifg763mQcULZWQrQT",
  "key9": "61e6pfcLnzDwn3EgmQdgA6cddU5Pehk4eWonBug774vJeirhxxPgDxyQZ7AGyoDSVEF4fkcfH5sbANddSGRCc842",
  "key10": "3PjDogtz14S2g9xaQKqtjA4MUmDuto7LnoByb8djifmmwFqLtm18FTS3vVBWmVAiUfRdLyEjjftYZqFKqUEVgaUk",
  "key11": "4hFokdxDXtKWVFRhY1L2oRUY8dhUxFE2Rx43SBkkKJDsuASuqSx5WBxcbd1xfgXVDJdd4LRsS6eSfa6U9rxkhNwN",
  "key12": "4Zcp6U3gCW3t53DLKupPf5p1jjFTmptTT3XHJkGFH5GzzimtUsKi2FEYQFKbM9ofz11PoCmMiUpFsxzQXfnjSm2U",
  "key13": "5SdrRf36gLv9yZ5LCyb2MGsZne2qaXK1EekMEud7E1CnpLfazr55q31CJ7CatPChQEqEdMKsDDfQ9eWwFfhuzVkS",
  "key14": "4BFgGr5GcP92rKZcWx9LGTRuJiu56hz1EU3DGtuWCqSYn6qDahMaYBTQZkb6C5tVugN1QL75kax9aj7VZRrYn6P",
  "key15": "3nvT9C6KShgUi5QL7TYVSm7DsJfypxxeJoUk6qGS34YKk24RiiUbQq6fcHDVQxeEEDLNErdnSxBMAja6JxfqmYeU",
  "key16": "FvuU4oJgx4wqFzM8iEgoaqdEEpcwfQk6dFxtXQsBGx39VqbfTwDXkYDba6JGTnaYQbTiBuYK9icpcMqMWrq3sAP",
  "key17": "thT1HJf4srZdAXXb5VtRmTuDELMrfeafR7Kb5g2zpdfq5MBXFcB1ayw95GdB1DqyiqWJ5rQRQQxUdv3XaZKidhS",
  "key18": "2AnDBYHkPunY5qpPKE7cmEExp9EgUDbbKkTgGkdTJ1AU9nw59s1joHqcCxsgr2Cbsiutw2jEV6DRZoVR8HUZu7BT",
  "key19": "57jWfQPwQV62YS7qiG1vhLtJjspAjMS4LPNNZ53mFGKAfqQitzkB7igLaPjX4tpypLwbgvYShXFAsSRMKue4UqKa",
  "key20": "LnDa5rPEeBT7RmoXL4agL1epC5JLYhfjXPkqpwUCJKvWxFiw5makeFdWbnku1z4UV6jU9n2oi2Mzu4QTfFQow8b",
  "key21": "5vhypr63rooRyDsMjSQ34R6kY4b5QjHVAot4hxMErE9QWgZypNmBMVCRCwipCtTXR71n9waikW4a1vF6NExCFVAe",
  "key22": "4qxeksrtPdbbHhZjzFDGfXUo9fEoQaoSoNuTDzowrfbd3R8pJVC3casFow311Xy7r7EJtTNYatNyd9xFAaQxeKPC",
  "key23": "43jwGpgd1j8z6zTxwmww7Cr31xUf4LFJVvPodLZs6AkRfbwK1dsrjWMeGhsuiarDvc7qx56JmM6acdRH9MBrd6yf",
  "key24": "HSjVtmVuMYWL2ugiVC96WgSX546XN6D49ipjTE5CubUGGD7nNh73SevwMD22vtZ6aBreezV19RKFMBunQA4cSid",
  "key25": "d6wiAJRdmTzc9VBq377ktQvCY45134i7MftZvYektgBvAKcVdHsgAtPATfV8vpyeQuJZsw8oZJ3Td2RkhduxG4h",
  "key26": "5PYAtRSgPLapmM66hyGyVA6iyUCqUKHWAqhDCWK84obbqn5wB2b6jBUf8PFfNg4tmi6JKWyFyrZ5DH2d4Ekr3sSS",
  "key27": "3uuNH4CReeYd9ic61wyoXxdhpfQoeY7qRsGyv2irRYibMG3CP7oRWhxDpkJToRQ4zVksJj8JCpwooziobdYBeFSH",
  "key28": "4oAJv5yX1T4KG7fHwdwfYVRs7WHpPAjyhaJuremHzdYFYu7vnAeEkXmURX7yTnhfviE43qA9D9CiGGVSyoQkRHc6",
  "key29": "557cPPgevDzDzxsuuC6sSc5GP4eWAmNN2eqyFmxKasBH1tPVFEaG4DFzbu2AxJd9jcMnw94Td83bj1so7CgU48HF",
  "key30": "5e1ZUjvpPYCYufkyjFn1XFLVcjzLnesZNARpURuFwQasTbzKcd3qP546dekLThZe2Pd5As1rEdmd2HkcbVcrYc24",
  "key31": "67UacrhEevPdHRUEuTiFUDEL8WZ98XG1YUM84foFEdHX4UArpnriVMZCRnWNbP1YpqKWQw8s4gKWzwrzzGxeqVdf",
  "key32": "1SRwVW5qw53mEKti4FSoMGUniXFbzSgsPpsDuNe8pY6B6Kt1coBgz8MkxZtHUKBCxtvG57SqqSvWfSZX9o2ePzG",
  "key33": "3GyppwcUur6DkDmsSE9NjzVh7Qt8VXcHb5DVVHEWieD2L3BB4tGrYCMeQdZtMWGp2iAUNJo8in6ZHMEQFn4DyEH6",
  "key34": "4CsmAVVWMBtnUj8bwj7MVcLt8Ppgv3x6siQwEqA6isc2n6Ti6qD4aDjVEtLEkQ14t77EB8TniZNGfn5DYVAYGXBn",
  "key35": "3C2uq2c76UezSWetKspNezEQyioM2m2nG8DZZkucHeXfuJKNDmcwPARxghHqjGVFs2DoVkt32ri2S5W8L8Pwq7Qg",
  "key36": "2HjwZHSZ69yLnGFnyCEg5B3p4BsFDee3UxvqC8jnRiimmAmjoqkmHXcky5zcougan1LoMQaETEdDVMVNHUdNso9T"
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
