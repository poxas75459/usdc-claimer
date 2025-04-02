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
    "5Bs6FxqF6zD4UQTGGV3FYA6cTqf7XHjRkDimCZxDdHdiVoWea55zPQodeFt34wmZ8uxPXP1w4XKJhiStyY1fwaLZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ve5aZSJLD5RiNwamW1UCJtLcoYUgtgUNspE3vDQk3tYJfhkpzf9KiF6U7eZ7VqYDo4n6NurFbEQahGXxKNjvvtK",
  "key1": "4yFnMMPN6AZAnJXmQme1VeDaZFSaqetcfRQimNAUe1184yyUPwQWBHD5jxkDKfk6vFQLzWoqiAVvn3PPCkGXidNc",
  "key2": "tbMEMNQhvKYVyXDyEBvauevHcTrXuXjE9JU4LRpgV5p156HWPNAehq6DSPsa6spguSpuBy8kwzzjwtXa8jNnp9P",
  "key3": "hhMEdBjT4SD3jz4UNxXCMfQxPZzgtDAbfztjxeLgNLGzMrFMvKHUgPw9ThYJ7oNCYm2y5yz1AdT7DLceZqATW8y",
  "key4": "32DAd5U8J4ASLkNZQJhdkNow7sCaMWAxEjCjM26PA3rdpYvsKQsGvvETQA4yFqrGhR68Si65mTSxVQFaJ4ttuUya",
  "key5": "3VoVoKwj9JQEySFNZr9hzuPxYVE8PWdLrU9cbNnCT5HrECSh7EdeMVs4Svzk4Wsu489nvr6K3TFPogLZoejsJRo8",
  "key6": "5CQ7P7ZGxZoMrHdAWuPz7eRVJJVeW9UxYjsMxM3bXekvvFVQj9yNSU3wHfYfVrYLbeqRAozJCRUrjWjFv64ydGZy",
  "key7": "x2x1h3QQSvqiQBYrytCjYaRGGEsHsoAYonmoRHuocvVQA2eYzhj2GkKKRgdL1N2jWNt56PAkFbCitiAxCPUwfG7",
  "key8": "3mQuc8GYffuZ3iYgKQJ47tzEPsn4Yify7nWLVzrMyD4M6ynTpqoCo2PKLNkrzrjhn2jdLi3aFKw2EksgnzA4ZbDZ",
  "key9": "k46AW9UkDR1EFHFaigAgDwJRaZjorqYMDWtGsiBb3X6kdEgREdsNtn32DxUGMKi4sqidzs2Q4tgmS61pTQZx3Pb",
  "key10": "2zNRrANzPkapG6MxCZ8iVguaKKkpDbJFMHErKXsCodU4hYPJcMWYcHd5JwMXEswPb7k54PYTGuccPFEqDqwEvGdJ",
  "key11": "5Pszyciiz3antVqHRB2oC678K5YLcKJiRybouyPxuSQqzR1nrWi8DrjmPgsUM8jNG1eiisQjLqwfKkeWEJvpkb6c",
  "key12": "3dx2PDgumNAQ4KJFDU4tRKU9d3gnVCySnfjvWDNt9nc7ofjKiqZefkUebsugKFN1t7cPvigevKTYE9HXnNvabSSc",
  "key13": "5mLs8MEpwX6AVqG2mWjGeHz6kakpXndPMaNJV3x4qoWroHyPTTw3SL3oa12BR9NXTN6k6qQ4eFd5X9HM2ESZLZ62",
  "key14": "bsmAHXY6fwMpKQat9ksnKmfW3s2yQtt2myB3NerfmQTp9tgRHGbzqWEFxeNXE1V2JACWhZbU6RYrx6Uy76728jA",
  "key15": "vYZfz2Bf7FQc6Fmn6qDELBKKxm1oZsZpgumfqFq5v2H9FJUmqcQWvLuYHGUFE61MeCpRfEo4yXega9oc1sM3zQq",
  "key16": "5eAoPrqfSmWhpbrqkoTg79Wf7cN7dgVP3KVffJ3XmVStMAaivA1GozSr3bbrHTMZg7rf6Sh5AF1j17HU3LNhYzKq",
  "key17": "5PQe4ozm2GEqeLxpxWnov86ffnPsqUvqfnsxySMsM45hbYUB2FSNYk76HhSrGCXQvA16cC9RFY5kPUEB6UWT8apq",
  "key18": "4CnrvZaGTQKMm2FunZYJtjSxCWdfvYRoQXAdN7C8iD7setvXPecbzvkyut4ctuXrBdJYe5TpjRNXvfJyewm1n5Yu",
  "key19": "32zqsAHJf9WZ6YspzWaJmTvQ6pJD69EHfDNn7LH5wgHHmNggWRhb5yT6UwZVFUaHXgJy137zyjvekxcTibiwXUKW",
  "key20": "23oXHU22swi6WkHqNnxwPGZnGbiAw87vmrfpeRptfxn9qGyPdoJMHjg9Ay84TaTwgFnX3GmU1thXvxnKiTKyRXSc",
  "key21": "5NNUyLVohyGqEhPeFXJw1dfj7qCC9c1xAG5EwdrdEzTA24p93g87EozZZbXQ1MyBjzsi1DMSdghACisR47u8LdAo",
  "key22": "54aewTMB6spnyxS6jcZMifM4F8bXazmQm2Q6k53c3XTkBYjmC9xFJe2qzbXJphVqWtsUmmPEJ2hJvj3QaLcWdEYu",
  "key23": "23mPPf1gsdexgDZHBkEJ8dyWjNAEt2Swv5AboM9L5J4XAEPMJEwUKcpzj63RhCaMUN58f9K5afwHC62WWPvhvFwD",
  "key24": "5xwnjqmcVz5qoMQNpunJLW8PEMJ91dKuLGbnpxdNDozag6hZcT87FSEFEeVoczBj4Hjby3qbcQTktPKB4jMomLW6",
  "key25": "4TFBmiR5afUCMRQqwqjQRm3QFT3Zk7vUbTFjdyRhqyzL9EggTd8h56JLnHfsVgLBHGAcj9seddnsoNKeEQNsoMC3",
  "key26": "28157CBKkkxCK9FhPGXiyd9mGiq5LQyDgEPLejSBzoCZYNnCaBazeAnstsCsFxFmWbxSRG2wXWDyvzgCFN9EKskZ"
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
