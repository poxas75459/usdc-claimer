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
    "4RssLDgrVLJr8zzHUREG119QSxMz2AEQMkU1PUn1mhXup35RiSFPaNJpUv17rwFZTxNEG3b2SX6XgYumJSHdfizP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZEadwtTyWjcHTMBDv38MNXw58mUq4iK4Gm6qtYu6bm4xjd92Kib9iCaW8Y5VqMDXjMiJndQBwyDcUtpBpQ3tiMB",
  "key1": "5CFsCqMXvwmE8roGvoqxcujhpFK5F7S7zdpGhMsRtcyiGeaq4zEoLWM92n4M7FTTVRJEKa2JonNHBS8AqGFbYHuw",
  "key2": "4PEkgXx1Pxzzrqa349W16vU4VMgEg7ptoa8754RBSWVPhobMMJ3w2SJVC8FBbfX8L958GT1aTmKEwAvAhuthvFYZ",
  "key3": "4umxDmYm6gSy8VHvsFu3cQWP1ZketepHN92q4ZERHcZVSt7vpL5sSDmGYXrWbe3pLLptVVXuG3N9xdFgJY5weVbA",
  "key4": "9bminQhjseEhDt7pgjMvXW51fi55t6CuKyCQuinGobNTyc7MquKUegDk12rsPRq2tWnrxAhehoi2dayvTPhLwEA",
  "key5": "4X2QSPpcLXToav6Y9XULsk98r6v171L7nDk8izbLUu2zvudgSAUxUAtauW9UWB6UQqeAtNd3N1qPEtyfFMUpL4A7",
  "key6": "4yqE38TZar7giv7hbVk2Jev5fq7z1e8eobQXxSYwzrK5dJ2s6rL9SpGN8qZ7F7ZyXf4QWDGn7UW8pM2coG2GhPCJ",
  "key7": "5n8oHKsgsVCcftQAj7E9jhUC9VkDaYjg6jLmVckVsA8PMjhpveVvRgDh291jWnpbiv8kXUPFXjTkdAwkg7hVZeRw",
  "key8": "RAz8Hye3WrR4FuXuDjAA4zunTZRmvFRJc128hwMGNth9hsphnGcbZq5s6Qg6jmAZqN6HRhCQXxgf9fF4HC2w61h",
  "key9": "4JMajMM9WPYaYuJJePB999AXjAeyv4U9fXZdPJWvcBXE5tpYjUcYjYTkiM4sRDnCJFBsDGyjw1wrAhSvFgtdM1mp",
  "key10": "2oqjU4spryxSikJAC2ZkeeZwwR24shWm32gqW7Y72v7gmyHAA8cfNZMB2JBKkeLUN6hUTC5e2pHWkqrTyTXc1h9k",
  "key11": "4AokdUr3vTVAzkC1rQLxHHucKEV2WUfH7aqA4oVAbFeHFRpfcaqKL99sBPWKtnGwLhYnXDSNdBKBTYki9RaqKryj",
  "key12": "7kpL4npoRjScEfcYgM6putivt7Pd3cQHsobUuqRifyBpncmyBzfpMoFtFBkT6B7NNrGT6VrZ7Un6i6197LnNAd2",
  "key13": "2LXL4c436LXr1vseYQAX1gNy29aTdvZPXqFHRGhAFbSBvo5MYZePrU8ncHNcz33ExXoRNNMa2yEkmyoViqYXfqxo",
  "key14": "2dMDqoSCqNwHm7GCYtobsrBbkFajn1mCiWPcQ2C6AtS1hwTruJMRM3vRpm8AGMin1AUrRmMeT1N4RtRzRLNL4TF4",
  "key15": "2evfpN6n7iCyzCPtqEFm5daCRbtXfSfnU1VWtCYEHV8s7kMZVCNZGge87KGCW4CmxQuwqsWQeQja8kMqJ17izXzo",
  "key16": "3iL7QhU6A7AhiZQ8yCk4aTGuAb3MZLwC5draNoaoNK6yFigDeZGx34otXtqjXKVDo6AGmEHxaWf6zmLbGmVoYWD",
  "key17": "2yvJ3qPRVxdWtPLWtUiP3tJ8VnEBDeWmT7g5mL5xwyLZ1MSShmxGZ5WTjqEAjf2WFdUmqPWuPgY16xQ9RdMBkC1x",
  "key18": "21oGp4RbKUjykTvXKTuqkmrwfQLXttmAS8GrJfa8XwwBb13BPeEmjKF4BBakinR1UnDt3hPHWwchBz11G4rRAumA",
  "key19": "2g7dk7smwahihmpJJHnmmWdD5D5RNvTndR6wAaqgfXtK4KRLc1oCvpsyd1VEqkqQ3Gg9wfX1iTMuzHfiXx87WvPg",
  "key20": "2pH812Nsuejy2urfg1R4otfFDgECC3tCUqQhfZVQqKoDAAXB6rJF5g1ufj1EZs9y531Ytcf9dcobjLaSPeP6iphK",
  "key21": "4TcEwTr2bGabGq2rL2W3hfXXWcaNgayyPvRa7R2zMQJA34rnuZjxtw3x1tj5k5sgdfC5zoPR1Wu71vM2aa3FiBF2",
  "key22": "ad4FKfXqwhjRmAArDp2ghqrKmrgQnPqZuPYD16Up445bN2grssDTuDSgJuDURUYKrCKWS23qMdXR4ZXqqp7i4yQ",
  "key23": "2VPqHdkjxzm5jVkUndcV1zoiKQs7LoUPnqGJZnqfkvj5Jze6TZ4qe1noUusuwMGu7MaNve93mUC8t27CoGanHpZW",
  "key24": "4gwjkFqD8vhMayo8rzHTQh5gKMrBP8M1SczVxmUk2rEAe8BFL1LuSUK2afQSbBuMcNa466FRNkGntz5CMn8G9A5D"
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
