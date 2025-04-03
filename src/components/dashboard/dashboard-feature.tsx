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
    "2UukMRv1VMYcGV5hfPqd75hzakGMWaYqvhWrjupKR6whNoDtpTzMuJc5idWQuRxxhRLgJSp7SHNo6bwbNL8FYw3x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kQ19RZ3kcGmjerJnBMmMt6TEK2sAFzBRvJXc646hnwP1P3NXn4XMphjJmRvoPMGstsgk5G8GMfSEnvW7qnzEb2Y",
  "key1": "afJ1ZQGwkfL2xzhTmMoh2D5161qqYMRLeMN3rDcWNvzpg4smmCjYmMvPyVDhNmG61sSAcjmLapyPDLMCav9u7sH",
  "key2": "38tjo2UxRzzyjH4hoZyi2ft6FfaMc4CJS4Fs1sJfbiuvcuEmN2h5c8gMgfcuCYD3J5XVCjBNAfFUepX6hBUxPPkr",
  "key3": "3ve8uyofSSwF68RzV6iSoVMYz3w7Sv2d4wubQENJ8LfqeTYhBHdG8TaEaYs4FeF5Bb1u1vvSrLqJDwWWrc2fqHZq",
  "key4": "2MAb7y6nweLnFLVrjb2YUGAqkArun3tb18N4sRJoF3yALoGRZhqN1CY4tyW6FKbZCCwp7UhDyzdHJUGuRZTX6nNH",
  "key5": "HrVJixGck2wubgqNqPSmdTNAU6DEPnwK51KRYN4qwL1ihfmi8HRSwBCKvuesCFCaqCmJF8c9B9d1MrimHKDGbQX",
  "key6": "5nd97xGbmgTFq6iLz2cxjyRKksYzfZAi2CVcAsdnxubg8zvQ4FRsjXYsHyv4rHAKJ99YQc4m4jq3qJ2ps4tk6jHR",
  "key7": "Fzm4WL5dR224zwyYdoAfSPvQVTLc1YuWfvtgtqYn4W1rGXPxqu8DV9HAQawrowZ3QduS4mEjNoYNWuVUHS5XxJ6",
  "key8": "4dVexzSjpirpCcvPnGYwoTNfiWzfV5JKqae8w4sM6118DEDAGCgKCTBhxPHz98NtW7hsj2bjUo3nVkYQhnQCaXDM",
  "key9": "38w5jgE7LZUd3g5CN579y4HnsjADSkF52QePKY2uVkadTMYbzKYcW24EdJGWGFVWzo83daVcTRM7aG2rgZ5dhHku",
  "key10": "452iE8yUwKdL3BJ2cjRJfPfhKvwscg2U61nYevsXwLuDh345ScX8QzoipqpATUR93CDimTcj2HAcZYCsXL1CGYES",
  "key11": "3BfCz7VDo45d4du5DdHwbVGkVRB43zd6b6DrVfrdafna94qYZL6qHc4CKUo9D2K1RfAyqPCnAskdLWAAGP9teZbF",
  "key12": "5bkkyJTDx1QH2VCq8NoiNJ9YLAwnGh9xrqBFfEG4iNVbShj48UHGq75WZ5MsqjPz9BERjubT2dqmUwP1UjxZWumW",
  "key13": "3MPQZJGKLkRELTb4UyYDasxTWCTSuwsXUCUZUK73zaquxLuFZWNJm3aKLTiwPsdRVNUkG2Vj7QSmVsvpG1hhLMJa",
  "key14": "5sPteAP6t6wUNjqZ8on2QsdAm7moVV4fhy6UkPatK1MZJaZHFAnvDgtRJWGAR8pdVjuwP1NmfGyWVrVJsRB97v82",
  "key15": "2wv8j4DxjGAyBCRo9asCAXEqmDkxJ5xhQ2EXwkq9LGfYEcfw3ZEwYXhNHLMNRiL3kYDUQEbcqaVmyZezwC59nicu",
  "key16": "5gVrdc7QyWvksJkbzGmp5Ye9gHJFMV2PAmQE2HBakKciCphLKHVFzCUYjHzGJ2bAdQaM7B7inqLxWzpAcfVCsegF",
  "key17": "2jsx5KeT9JF27hpG7VT7Uu6jdGUQzguxeXipXThUCS3Jnc8NqNqbKJM644D9CzmwhtvxedBsWAf8oMy5CoHXMhj9",
  "key18": "5jLm4gdFzXUszyNNFbP6mA7gTWS8aEVv2Ea6g6pp5xXVJ2Qd1fyS4T5jNkhFBNDqTcnEYLmbj4LaGiM5kxYBDBpz",
  "key19": "31CipSuAunGSY2up6c9i37TsCuceopS6e743aePicLHYvoXfg6ac1LVhq4XsLNXL7FdH8zYjLK8VfAPTVTCqR7pe",
  "key20": "2zhKdG3vkFTLAbzkZUwbCVywjCZC5xWigH7TxsR3SH834HEmdsq5sdQUYiJiFMJDG5Kj86swc8KnpppFsUJPZfyJ",
  "key21": "3bCShcjwFZpYZDc1kS31TFqQRg1kzqGYg6FvP5Gwm12bRGfpYqx5kfRhPwnX1cgmiYJdFKMKZAEa2Wwux9Xg45rP",
  "key22": "2vixCtR3AZzZxWDKMpkbA9RC6woRetj6oJrCCx6ECLhXT5uGe1BuXUq8ZPWfqvH8x7hzNiHzY1BTfHKpVs2e3pnf",
  "key23": "3QQjsMrN75VwZPMgk5bbKK5xgY98bs9iCwFynZzBBopcsw8U4GT8DRfogc4fVK9rpzAwB7fYiKZawQX21zjFCwFR",
  "key24": "3nmtrNqsbpx8LyDAr65spTmipd5AjJeqi87Ert7qStwHmK7d6ePb1bsX9LzrLf9PR4nrwgs1qnCnFJurB5n4k31x",
  "key25": "4GCqutnCLg6rhr2zyqAy2SpNLnWGehmThMBQb1DgqgoTou4mERHCrJFfGea9xTse77jDazB3ifQHWxfcqLQjq4FP",
  "key26": "WXaRhn4NUvkP5bsP6aV7ArxeC76XKDHUHWSow5KjHtpebBMPhSp4jJUGnthQrFusSbMp5UHvmvLQV8ES2ZZAQB6",
  "key27": "2yuxzmC1aiHVrCoGGiifQvozyAeZyB5Nm7m2Y1pHaQ56XS9djGB5ZKQvas6KKbpfCBVMU9n64JJkmZkBVDhJctYu",
  "key28": "KthFsDHdm5KCf7xF7ABVUiF1tpi3wRqQCADojsYh1sj5qFBsok7BkmScnLDYsNTKEmN8er3uS7xX7kN5EwydUr4",
  "key29": "5py2wtVn9yv4G1nD1kDQLkmwh2y1BpDncMnr58T6KNJY6jTtXo6Cc4soa2xpZVBCV5ue9eMooQzo4gfZGHgkVMJp",
  "key30": "Ppp2LQJa9vKdwe2VLSrpefpZ8sAGveLYgodTajAxWSXsMv3ofZUzU5qXfKjj7wjUR9FHK9ZswfiR5BjqGsw6f7T",
  "key31": "4tvTyHFjzTLtq7cVyD4faKYN3TW2hHQDLAW9nNkVcH8pPbjmJGtTw2wJ8LS82QW3SRqNLEz1tYCcp7SPcJnzkxkX",
  "key32": "3fBm2RNSLBbsdLqTJiD5X6j7PjHqWXu5grBKasLBwhsEq9bPLRJYtrjHYntkJisrbrEyvD1EhcDV7YWfhiuYb1eo"
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
