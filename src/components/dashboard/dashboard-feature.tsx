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
    "2njCh6sXoHc5vFZnrgukZM8hECNfYyM2npoKoQTjCXyZfK896n88eqbTQheRDX2D6APLEgvd6o32mR7bjmpxMQLi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QChg24y4A1FVC7ABgjPfTaS7nWqBmQqxD5QwD2fsNTfvQyYZRFYuo6LDacwrFUp3HELJdSKuuN99oG6JXWKhy7M",
  "key1": "2qbDB7hAHedgpVuHcNMCSGZ9nGBX3JhS2n4QCMifyUZAznUjWrNuEJz2DUvmGXdpiJ3PLJhwgwgqLE2JPjaC8BJh",
  "key2": "3ExdRSA2uVojFsaJhNNJU1EYEUDJYjj4f4HXAmknFWzo3hh4hNdPttWLtsHnqg8u4wC2mHXjAcs9BmtwF8jiQEud",
  "key3": "5KVPHdaKEdtNVcCdaN8cTfgYzaFNK2RTSCzjuCQa34V9QB7W5DiirZd4skL46JaS7yGG1e8nyh6WwyyHomHCmKC4",
  "key4": "3zZStCq1CHQnHxazSXL6AMZiSSkD52LZuvc6ejEhXqWzGbR27PbL4cFd9eAPbHFR22SNucDoZB7oV1Bwqknsihr9",
  "key5": "QB9je6M4uPoj9QwbyoMh122bn3rv1yNNXzJ4xYfdrf2WFp3XrAq4ryaSLBHw4rQ23GNxFfYezJdpYkszmwwJeXJ",
  "key6": "2vBUo5HN3KahenwwDS9fmuN1BsiRMDP1j2ECWc6XEhBUuGDuscc2JzkSHQHddRqhHFgmPEizdCNrNLdMn1uYSHCN",
  "key7": "3XpFeWD2bdt5JzqhpgoN7BHoqy6SVRGXi6ApxaxU5YydAjHptJ5cv8iezpYMrYrAssJMwEtEjm2XqAoZ2qTomz2P",
  "key8": "5f1daPSNBk95viSaGWMxDBmWNWSrfYTn4W7yVejMyPUugZchugoWsy1XUzCAvGBH6osxmYcNNL1oTgGvVw6WGzPA",
  "key9": "2CAr9UWXQ34APsS4rPKqKLL74kZFysNgwBJsUDuLgTEruuTkeVFN9oSXrcg2HYxko7fGAmKVToF62t2kHxpBU3NA",
  "key10": "5eRsr3HvcfdiwLruHeTrG965hubn7WeHGcL9a2ySD81Pt3nnvTnfdq6gSFG9gtAbWkhkBuKBkMdJRbN4fhZTHJKs",
  "key11": "2nmYyjfTiKFHSdQJzkLLxmG8zWPVrR431tcGAFMyjYRdcPaJxgPxpGWJpZ4YH6B1KgwE7kLx4bYjwXxi56ueEiKX",
  "key12": "2Cre8wKE7e2rgPqdqe6DT3GCjfQij8RK3Tu2oxPPKSnV1UxsdduKN4d4a1ZTrHsigKEhcAKV4oBpHTozpubCRhXR",
  "key13": "kTZdwfNNjTVghezDofWM2h9QXvHaFyENHFcARsuJjQmFh6kQmK82WMVD6hqMAiePi6G7UKbZDZXt2NrUzvsVaWe",
  "key14": "2MoDdZ7urgoHJNZFLTXiEZpRshbWSsusG1Z6v4k4qkj3sL2NF8DSJJ9tVvjr8ihKJLr7ZZCmmoYWGkSJrr7zuZo5",
  "key15": "322DHcTEhu67fLQZUYWbACErtRvAs9QuMGGQiiVs97PD5BJsfNKM6VT8fqfmxBeEnj173a9q25HDuXcCHY3Rxqr3",
  "key16": "2rnQCSY2BEDZ7wFCzbHK4LeCEKmJiathfDqrLy1QW29iFw3iXWVz6ebK5QoqsvqhsW2nCckQFe3dPHJXGP617w6v",
  "key17": "34NQFwnViARFYFJR6Ca5vdhFyiZmnx92PZfh4dR6qnF7NQ9QSJcXFRht2QxCEuxBDrJHMkci1BCxqry8aqfzsBHU",
  "key18": "5znAztAJGqHCDTJ5n9mD68h6jT6BLwCJ3nN6nKpv5PDNw8sufpsEmDAm69oZs1pVzFSQPax5dLGdzqsWig648LRv",
  "key19": "2RYdHnteiGgdjTe4qvdPTRuxZ4W7ZJh3dUTY5Wq53uaZUvZLkhEnMeGCQJtMA6mofBZVudSyLfxTJC59BFrZCGLq",
  "key20": "2ZHuf1wTbW43X3L7jYP5kba6CFfMgea2ihTvNdFdY9F5m1fAJMUYukgPyT7hWEGfTqp3uQK36M3GEWxFBj8rCiYX",
  "key21": "5564wC4Q81hPVsepXgydPz2vmYfT3xwx4sx4WFSavr8y3t5mtcbrtCcPkDnwNJdb7Q6ASfW4y22ABL5tDA5wMtJV",
  "key22": "i4jyZ1ZrQq12dUSHaz8B9y6uyvGFQuRZupmrj5gWw2C7CPLngS1aFoJ5wt3AjPZp5umSfa8PSG5DXVUZpf2fVHC",
  "key23": "dKHyT7tMb3X6kCizL6xuSxzm8KpwG2sVmxvc52wENj2NKGGSnVikcxbsMSM4zMNHp3xsH9tiZWEbtni2SNAJpRe",
  "key24": "9dbskRwvJXqUroj6upLbs2iv2zHCpsfsnKQPs7ZqiSF4M9oqeRrrTPrJ7aiw8N36foAFHnWB9xjYEzfAMPfWrq8",
  "key25": "299wq9fD7CbdbwEcHPUsgoySZwCzVfPe22NKVqAUJxGWFyETUXWqAxvtGnGXjwAwexVP8sKBfGQdgxnsMHa5GvPQ"
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
