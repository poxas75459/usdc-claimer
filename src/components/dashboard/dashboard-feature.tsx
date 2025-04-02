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
    "2GEDUd25joSSHMGTtZhuKSeqgbtBn2VR7VLBFJrGjg3LvJuHeXrZEAw95dZf9VvbF9YKgw99b8zUELvdCZZhMxhs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36gbEeMcCT2L38baVSC5rQhQEPt1VXAtejU7VDnAQkrYxCJizmxS9J2zWw6FLCEJxP1YbvLgQBx3JbHew3S2ERuW",
  "key1": "6wsum4UNs85hmGhKpvi33C22z3PfTCBpsioADG9rvXoRgJ9sEVJ4n1diwh5jhsE86qNSKVyC18qjiWz9yYj1d3q",
  "key2": "5AnMXasBoXJCaG59Aky2ngjxA5cWn7np8jfgZtmgk6d4DhiYuawn1R8Knxd7e2w1f1KvjXBnjZpw8KBRTC37FMCB",
  "key3": "bJwnYKk4UVH6ZCDfYnmvDho6MZtDYAZkoDAF163QU6AaeYhgyp874EWEW2P2ZwNGVV3Mv3FgMRZhG7yhvA3z1jH",
  "key4": "4S25QJkfnWg3nQJR6AjZ6jxStUB5U6cTJ8nYN3j3j35AhExhCYoMtgKp1fGb3kuPcf2ma1BvSmPkBK9diiqF4h7n",
  "key5": "Updur2Gek9nc4aAh6fSkybrpXASm55SWJdHeM8xs9gmRjEaYx5yhXT8v9tLKSvAC6J6WqGK25Xv5b31YhMGHdJG",
  "key6": "4bXfXy5LLKpzPjvv7aYucBt17r1oQRMLTZtwa6oqXEF9sJyxPP7EGzRuoujAEwEVQt1S2YwFPGDdD9kRvQFCFpow",
  "key7": "2c61PjVK2gYb86bopktBCrezAcauzvUmrKHdKsty8Ep8TaPTCEk7GG7BmwoML9E5bjGk7sYGDiwuJk4ag1tuzKwY",
  "key8": "55tT2271veSXDSfd1ThJZZFhfuGfhUHdNohWd2FJoMJdWoiVC27NAUPpFqxnuf7LCcq7CbKXmfm4n27g5HaBiBmC",
  "key9": "4BWArXxjFdNRRgX4HSE7bf12rUJ5m23CYHiiQWvVnv5roTnq6DdtMSFGdkKbQDvLHXWMZNTqnRvMUzLTUFUrmAtt",
  "key10": "3tjAyQCCuUgg3TAJdNtrTLBLwepo4gwsphVXqpt5WJHpLZUwqyMNaSDXX1nCxLLZST8bHcCBJekP21GmPyYygSf9",
  "key11": "3nX6tr6ZPSGManyzk1Fus3LJhvcs5mrt8Lj2UNgQPA6ViGksSU7quzZTEQeamhd31gMtA2hZvcYg8oPsZBpVPjHJ",
  "key12": "CiLfxnuVCiMLhErTghZJhfnTcV4NKPfjiYJAUCBN2oW1tdWSCoKJLWHAu7GC3RriuWjBap9ipxXvBtRBRGZRuhj",
  "key13": "5TfuRpYWk8XNsfZQaDtYerynamBdQTU9Vsd7uSvucvsGqTT5pJR1gacX9NKSXHFQjqMfrdHWco3kitEUb4FCsk6b",
  "key14": "2NwGgUSkEqBS12M6rtLf4kuWbi4arGrk5RcaQdMvw74voCRohtZCKXBhR2eWFPUb37fCRqbec2PchbAuMhzCHckC",
  "key15": "4s3YbfuhxvQ9iogT9wKJQoz6Tjn7Xo98LEx3v998iPnsi12u4BDdq7AWDoq7sps8HFBuKm8WNaKkvi9jqGQwXnqb",
  "key16": "SWENBEf2YATXEGD9SzFiVF6gedEJ79eQnVmMt9DzJqEPcgjAHomK4uvrVVm6ZEKKU4Yjp2aJU213536eq73As6i",
  "key17": "32aYtSgnnS3h8aLqHNweLcDhYG1Un6amAVSb9ZN8qh6HV3AhPVNvUK3yVxtD66RZ6yWUNv3EoR34WApSVaEK1wE9",
  "key18": "4JsxskGLrYLiwJcufMLBS5gAUdEJyYfMsd7NWHF1G6CJuAm6u5aaX1T9SsGT2aRdcFna2XefQhfaDJvUo9FyR8xV",
  "key19": "21gs9bw3r77zSmAx59vGmyBvXhgAyT67jRfULLKHAETrc5noYLUACAQ89yatbLhgVW6dK5raJzf716fx9YGb1xtk",
  "key20": "5ZG5KqefmkcAGGFnSpUoeq9kaD7je1ZVECCo8x98b4i7dZ3GEYmo35LPW36Af2HdWcygCZeZmjZpGQUpYV38w4QK",
  "key21": "ZqzaAvbk7jrhojwfwbYMCb4NzumTo6nhx1ft5amBKLc87MJau8dAdJLHtinBW9YSJhnurxPKdr6iz6hiGPUep35",
  "key22": "3z4B4brBNJ66gKpS7FGqnxZt31Ln2w84TH3YaHABEfPi8xndwvfXzVYVQpn2TxN3WVGpnAjmtnNbxS7tKNqnhoUp",
  "key23": "38iT4ufuN864xybbgPzwAd6VVCawBGmoG3YsQUJkAVNKseHyDmPj1mCrVCJSnPqFqawHiQL2kcRLmAwXFYqtqXKu",
  "key24": "3Tmp8C5yHEVHvaUw88xy2vSdFNLD3zYf8FdX2xsCeg4fYfGGK8No9PyZfxNeYDXGa1dz2Bsq9eF4CcodkLdRqRw7",
  "key25": "2VUXuEz2jULErPjKPkyNQk5xNS8L3hNtWK5JL4TaTiKSGEJgXSsropqJD3GbKLd9WvB4wHBsUBTC79kTfVodfE7M",
  "key26": "33Hc7NFQU3ZNPD3HQA5CdNnuAUL9MnbCKeKHpFRffMLVn3un3HAdXFEwZkLYPbgsutbCF16XQ2pBhJvgpi4wkdfL"
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
