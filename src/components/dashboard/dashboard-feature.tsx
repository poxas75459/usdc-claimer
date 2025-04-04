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
    "2iBz1VqiddeGie79s31ivC3eMrh5WNxTsXEtG1TVCYoetFZSYHJ3xAX1Vhno462c2YsknA1riZUARJmW2cAzuJTR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Mcmcnj1qcWzk6895giupu6ozdeGWpf4NyeUDM2Awe73fKuVWLuHwxujcPqk383BgZbC9CqQf3JszNSaEXoiSDDk",
  "key1": "2QcDU8xfBNBrqmhoKk7YeaVyisAu9hyvpodeYR8hwjoUaQeu11dJy6eJ2EZ79yK5QkFau1WeXjYLqvMsZ1cUYdSs",
  "key2": "kYZsLHhZggytYoJGAdZyzFbNAPuna1K4eUJkh6di9UDMrdxV4YNCTqTNqewESnj7DSDG3tsxiWDX6Czrgjhfa5X",
  "key3": "GM6e6HbSHdAjBrE2TpHteMnfiCxVC7T6484RvDWpDFRSqnsUJcDcEHksEnTHu4sXmyUfj4K3YUsx3zWSLkDrSFZ",
  "key4": "3qSaxd2ps4MQw8eKiMGiD5XFRzLpgQj52EREBUkq6WvuV98PyaVWBjcxZ22XDM8FotJSDRiJNaKTQJFmnJUooR9Y",
  "key5": "65nhrXda7frsCb4NiEGjMi5MHLWU5fKGh4LjECxanoo5cvP65QX3fbRjXQZsqQgmLwUy7ZwsAteEb45Q3VAA5ety",
  "key6": "5K8VmK6Zj9ky2y5Drpuo2hKgEiG8keGvnmVQfqrYJc3MDBkXX7tdVHvu1Aw4Uv7oe96DrNytfbydjfs58j2f5kEe",
  "key7": "3AjogdM3yJC35v6wNEPkivoR1whv8YicA9GpAji4NG5ZoQ7aVQ4vF9C85sA3F6N7yu3sAKwsneyY3VoAXPjhQJjx",
  "key8": "3mfrpuFV9V9SQcGFoWxz1ECTgKiuVXPBUjedx7z8uhRzcKU6s1sacnWrj8Hq1i31s27ZpNQEpTUNKjPsBR1erzZS",
  "key9": "2ebGpdEcSwFcnLFVuhawJm9HRJ8srKZykUQLUZXBpY7YguGQBGD2KHcJiCvsDQMsf7xnWSUw3tqAYSrHnvL1JtxD",
  "key10": "4R6aReELvwZowoYYgtWr7gFzPVEa8LDkqa6K6Loxu1bEwELny8ZdxA8F4LRPsav99aKeuRqU53mkrkGr1bNRSCti",
  "key11": "5VMhLLJ616NDM7N66BcJVrrA754ZmNT2JXRCWdqJpCDsBqZ3gbMpL3pevKDVRZXvsJ45tPcYncSGSFbLVdku1ymV",
  "key12": "u2bi7VrV2Vza4sNMrLcE8zhwA9joPuWsdkU76b9WUSHZBot7769Zsb7JeKFdC8JdLaCdZaLxwcmLAKX8rQksnEi",
  "key13": "5zYrf1Eth5XXqADfVgZR1B5mpReySD1uUmTpSz6hyLHB1YGoZ7mGVYmJE1RXUXnFhFp14JiR4G9kCypidUc4L8EE",
  "key14": "3T2iHpzcCyQHbxJfuZ6wj4Akvw44XgZeBHtDTmzjFMEtBFLsq17WSNC9nCv6ntBcPb1VjyLWQYs1agdENYAeRzkN",
  "key15": "3JFjaV9a5eSsNu1KKyhfdxMLLkMrq9cGvhyPepWQz3TfNxUktAcJ3H2ZUhPmrt6CFo9u5j1ofoC882cYv2ERZCWd",
  "key16": "32EWxCM6ctdDKWqWoBzPwAVwbVFWueRBGh4RMTy1REn4czgLec41AHGL2FxJVJJzW7iTpA4EjZwSB4GpAfaEEndw",
  "key17": "RNRJ9J77Z5CezJiag6ayKMNXNouE1fNFs21eMUDLwUmkP1MzMRs1RVhjoQb9J6d1kWhXoHwcYKAa2sJ8LLkqgqr",
  "key18": "bA3rBNTTF8vwec9ZQPVA4185uYgpcoywwYujfztwXhmxZtMC7AE23RNpQm8YBxksji8c8hxCzV7HpJEmGdRYBoE",
  "key19": "39CV7wgrApu8pzKGPB97ZUKUskukTpZSnbP65DNoWCgi1MJKGi2Dt8c23XqngTEzMoDkvzx4cuYyvcmWJtVLmndy",
  "key20": "L4qgUigD7nWDXic17N3CWaeqA7gvHMGHE9uwi8Nc88gtag7sXjq4993KcBZCLe6TLarUmvGgdqgLMFUh4BJ9PdY",
  "key21": "3ce6NU6oxubwiAMEVNQUkvmTzGXJUrNqhM5nuTxt2QpYi1qhV6S41BhwCsVL2Wn12cYn5bKh1ebpExbNoSsdDUEP",
  "key22": "2DdWz38D9s2fAuTPwr3E2uWD2tmiK4ARmrtFH9FT2XjkD8SRGpBLTFCm646kGcz29riVPSYvRZxsrzoanLnE1XRe",
  "key23": "3kqmdfomK5usgvU8bZV4bskneu4nCKh6qQBybQLqEX1yEYkDmahGhWVeG174494A7xHtXEykjU19dVzsFBRbsbet",
  "key24": "5nYXKfG5VU2RHBba6317v64yRJp3S1sjN2o2dk7TohhwaSrefKA3mzGKMs7Wb8e58tEw7343Ld9vwwbo4YV7LRv1",
  "key25": "AhPVFkicRTkGRb36vmJh1oJ3CEJdEqnvdnv9WFx7MgJ2qoCHw1kmNsyeW72egDZfAEER4YMSCYKXguiKsSnUWyA",
  "key26": "QZu5U3m4bybvCnh7HkdL2qnMd5dyF5mDpUyAHjxvF682qkXyT4jhdhATKzmj8euZ3kj7RW5zaNBotgFV9BqZhbu"
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
