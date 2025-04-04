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
    "5rE5abmKLxQdcUnAqRfeUq97QGpmYvSn5fSadV319Lzn1BBEReMjaTzEzGZoKzooE9w4EneJgaJiFS29NetFxHH7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vwXczYWJN9pTzEbJM2JdEof8aKb9gefetiE8gmQ3bT5dXGv3nCT1NbKm88FEd2wLYGrer58KQ8G8gCn8pCdAJCJ",
  "key1": "4zkXJgCcDL7xdiCFspXTMSnUuNV4K1fvViMn4U52PgZbhi56D2YP4R4KrA2DfemxdnqHvqNxa6mhrjZ4TsSx7qjb",
  "key2": "MHtLKQB2izecgSHoAJUkrLvUPmgyTUUTRSBHwZcXRmNquGepEXofPiCynMGZBy61mze1i5FAvByDSG7eGhhYJrR",
  "key3": "2CKfgqT4HbA4R9xGchqPLUYpEicksuzCaUWSdKVBXxtfenoyqCzbDRTzHtfKRA7rbMDxhRqbZRvmFyK4opvLYZgj",
  "key4": "4HR8wXbx6bwBHXtComm47WapLqmDRHkhZrLjQHeYsxUtrkoa6kas7ovK21Aay4JMN5HduavaSNaGiPPzkmDhTXPX",
  "key5": "316UaEDL3gSy3hSdCq8K1L6aJh2N2eG5PWNvAidMdc17h468xqsUmwmFokyA8TCA2Lqd8arCBZRwREx63G4Ckz59",
  "key6": "iLVnKDSHqwf6EpDBBPwaAXKgSx8gkbGSffTeHNbo2YFpSjk8FkYncBbHkTfDy1JQY4mKa4o4rRHm4T8ptGyJhbz",
  "key7": "3YjdtBFzqAtJ8q9GYiDgDDsK1DF1rBwMTW2SGHLvbPPLyRcLBGV7LFfJdX3R4eyhU4iYKeA9u6Qr3h8h9mQkAmgw",
  "key8": "5gYd9ph8ByicZGZR9rXxQqHVkE6LTTqGYBnCEYN3wVUEKmPHrGAdeyXfKS1841VRyH3pcdu9gwNXkzjU3vM2zhoX",
  "key9": "2UMU6vW4avrjGahxTTHkYTFN1zmwyJKeQpcK3Hzq3tg4Xsicmyk2PCE7Hcw3V4iDYvgEA5bz2bmbRhqQM6McMTT2",
  "key10": "3mgL83X1c8vZFZ83LU7fj7Tn9hQWqSutLxtZs8rGFhCKrW18r1H74FTkVNkiTQXzkdciBuomGXfm83ucKzb4WZZ1",
  "key11": "4Df2LvnPgAVbeK1CR5SCGazsouqS8nsGqczu5q1vWc4EfkR7VycwHjajZmkyUqRxVkT7A7BQpCK2hbEW41rynH3H",
  "key12": "5m1brmUmcK6SmJ8AUj1ei88ATSYxgLFJnVRotnYAWm7ZmzW8buSEGJPGpm57hvFcBRnmtK7XQsy5PyuDBjR9tuuY",
  "key13": "3kZ2TmUeBCnhkyE1kpP5msWsYjxk3R2itrCwRnoCEhPA2XgKJm1oG1mn7xZ1rJ5guhhSDumDmejG4sfY7e1A5CSg",
  "key14": "3ofxavc8doBh7bXcEhxmcF6vBxr6Veoy7fgP2w8nDXYzxqnguXtLxpv8mGieU25BLGffEV8qouxK1SvQ66iSEDJp",
  "key15": "41tyAE7KFGL5EoMhkmPdE6ny4p2mfXX9MyhrgGc8h5qBeBzBrynA5NTPnrJKEnTsq1fEj3Q2siehsN15T7YFj4XQ",
  "key16": "5oTRUz3VExouoFG6KY5QLv4yXRnLYDeGkZWPgHx8j94uMkQ9B4FKhU5hTuAKDTg8wqmX9W5Swc6hWDQBejLMqv18",
  "key17": "5x2gXfhBM1FfWQygMkuzUJfmvVpAgiC4ixyceTyuHRaVsbLg9ji3uR4Gyba9rnCNoMa3hhfXpNpCabyraRUQYLAk",
  "key18": "vHRWhtZ2LQnpcQ65vJidZdgQXHHSygaogXGAFAhvLJ8HicRKfdRrKQm9UHw59431ZFCubXsvSwKbfgA7ShGTXjm",
  "key19": "4UnJ1y4sE67TUbdts1DeBGPuTtHNfzTnumoxB6qYQ1DMhmQveADhCVoBrdmQuHN2PahU6wHRB6WdXkSvMrtT3gyh",
  "key20": "3E8nzHh9VGCWBwVFwZZuWm3StaU5F6eivpySDtVNvbU16FnSYWqnR4TucbCYcYJM45gqpSt1bvF58ujRARaLHseh",
  "key21": "3st6by9dxmTDDwPfJ5MtAoUFVFhufr5ALtQojQDJmViDiBo1y84teDjwZoJ15H9FTyFrdbV3oUL7FzVgN4haxLWP",
  "key22": "56Y6wqS679jogscjh4K8CzHvNEozjWok1ixviK6aE4ccrXeZj4zHxNyrHqFmgKf1Jk6Q1mJ7NEgAwAhmE2RWmfh",
  "key23": "3bucCzc2VFrmqu27LJ89CuP785vvbvbb5Knt59wHyqXSfBPR7XrqFX73tAv7HgRYzBZvWmW9LxGcad8yb4SQQN7Y",
  "key24": "4exmWp5mkBAedGc3PnmfubhLBrjPCMenk8fTshTGb4txrr3o2o98t6TMUuTD7K265ThiidruUmWvuvJqoboYNkwa",
  "key25": "6p3zYGVDu1P4am7uRfJC5LAsayjfrQ9X6nbDB7JujK56tqfex3J7EDUKsgXqnpvqUfXjNYeAaNrTFusZSP5APWQ",
  "key26": "32iTjSjmGj9E4v7D9esSPTQcj6uAtvkJYRtQbmmzAfRjiPR6c3jCBvfuYGm4wfbXS6eRG4CwgYwZvdTTg3MDr4XP",
  "key27": "38H57vR1dRBR8hxxX2F8BgFBZu9zBjhUNbDerwkFXFtALyiBwmGfmgSC2f7U3JXptyiovtxfNKPyhjpf93HuQ91j",
  "key28": "4CmCuNAEtZkdvBHrCPNkjyfvT7g2mdZTw6zSguCHs8c3Z8oDqretToP7p8ifFvX9WXHueWXm9s9X7YpcVd52dfzs",
  "key29": "jDL2V4A8HGLr3fkXE84UvmwRa8EbjUKbK9SAVb92xh7N3UEKDh5RUzFJeUgbMLjSxoMQng9e8i9oFCSqXgYBt5w"
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
