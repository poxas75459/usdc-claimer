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
    "uogdmiPZ3Fet2sNShqSHWYkSptqrie6ZNDSya4TrBdPp8wVvKpgvJLM6MvNDE5Cpu474jKbym5htY1sj42VyrpP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iRHNjGGHcXQLFtvKqV9gjSiyyrKCZCGrFvJnmx8WRwGr9TvjKTpLFwKt88AkoVFDQfCdPLJodQjBSDqWT86gpZK",
  "key1": "4ncQ6U2J1ySK1jRfcPG21rk9tEkSeQFhTQAvgSNBcvxAuBgbvkRWZczA5r38Gy2VHVQArD2gtX5ADmD8NmKbTYnm",
  "key2": "3y1Kp5NjEC4NKhB7QaCNzCkbno6p2HmjySRRSTeFVoKvFXwrMqZ5QG67e7So8u6axvGqfWsmpVmp2GDKSLX8uwrN",
  "key3": "3kZX3Qug4r43RuSTjRP2gjSdc64FMpPYwZmqzV1EYYSFyrkMjT3RGfc1iQv5mvskfjSAAPveAz4rsW3unznNmRgp",
  "key4": "oUotggNp7jn9bN1RnT9S6VJ3EtgnfR33fjNRCPokhVN2Aq6ycEzPVeZUerK6AU73YvPe57JYzChviKMcKgwSKVZ",
  "key5": "5hChyqXNy8MhuQ2K2zx4BWRiWDLjFULoxTZwjB5a24BCg7GGC2mUuhNpWo9gmbcGE4LevySbGPwtRmNVnC3RkngB",
  "key6": "4wLzRLNcPZ8ZjsT1FPdd4dY86reJFZKj6bCxVyvpdYRvKgWjnoQtK358yTvnsDSGo94XaaujYssV4mGwbjKrDsvw",
  "key7": "44u9Hu2kJnhHh6t9WqJHWK253f981YPNXg7MpzYWtn5TosFs1QavK2NETN4e8KiB8wAsFx1inTqzj535m9NfRrmm",
  "key8": "36F4zPLenDoZAb7Ahve5buBVUCcxRNnUi5nYUUPt7fQ3vscBTXBPmQihTktzX2uTNBbKfu4NbtNyfSDmRs3Kz3D4",
  "key9": "sR6M5zmJiFTckvvnjM2jMgqTwaGW27GLNjtYs94NuY4RSWWwqjysroJLMW87CUQCRAng1RLCfJ5CxVii8srV6TA",
  "key10": "5PtYXWSqtq4fxxGLyLaKRHAFs9CddCy8TJmbTCnPdWN6g8EHkZ95syZbf76JEFVMgav2QXgbzpu4uVfrp4LJcKLp",
  "key11": "2oe2v9DAewqdgZewL59e1P51sJxhGvtRaRHhEBJA3L3LkqA6qCawMEeK6iVtgoD2KicojkcbYqC6BBH3TSq2bbpe",
  "key12": "5nqJV4Dvqt1T2kE5phsSmCANtbQs6xoMGK9ZFjmthiwNVJ26ZJ1jCVnfFfA8o9ULBhvQDrvm365CmjCuUvrWjvbk",
  "key13": "3ue884RGbDDGooxCa5Zhfp6aJxc3E2odLfX5K7Hv4fjT97fg9SL4giXouuGJp3oaaFcXSGAq7BFeuKu7PpE5h5CR",
  "key14": "5FhRRRWPRFcW1d1WmPTxptKxNTxyj1BUjTPHpWNxuZJVptNen11PuKBfpPAL9pBEboLFL3osafRKDY8dGQbPp4Cx",
  "key15": "3torn9dLreHkpZvWhSkccUkcDEPFQa2JqYF93nRCHEAMAiqjFEZpY7zQGwygeAi5CcqFPSbodnxhDjRbQ2bgcqik",
  "key16": "43wWk43gXT5pYvBfhMvXLcPdoM3kNvP6pRwR81aNBsCz6MCwYJghrtTM7kNAE5bjYDf9hYxcqtvXi7c32vUdBPDo",
  "key17": "3FDm5L6NHKZqxV7fx9eh9rbQptsXKycYnPZqLRr6wKam5bTXNyu5r3GEsgHEB8SyLu2uy2956jT3DHY1dHJFi7KH",
  "key18": "2tNVQHgyqknNyhDkKr62VW2YcsDwsp7aSX8jdv13uH1bBVqu6Xzoz7vhDnCmVNxfdaqKUyg3oWJ8jCaZWvKShtZm",
  "key19": "kNZAJCLMGtWLmdEX8FMtNcENhDy9BDJXrnFoTqdtt2cpdfJxVJEQ4RuWDJEHgu3v8rKp2GPEEo3Yox6GAo4xi2V",
  "key20": "N16vbY4JSFoCMuTHSUTSU7RuvuWeTCDYZvhcypUYhRNt7D1PQrWKfLu5K8HuAQZYPNC6R54YDkCehUkyFnjFnv9",
  "key21": "fcibDqcdymePBGniLS63pB2eSkG6rbPtgxmqSFiApUBAfSj2ASbm8EoHYjKsfUk2LYYJ28VEfuJE3xMphWLaNqU",
  "key22": "5UNoSSQtwj7LL3K3ve8wr2nzDGPBtr3RG63eL3KLuV2WhSGbtjowC8v2UKQ36sv6NkKqbSefnEKjLwpe46ZXvqyN",
  "key23": "3NwmFfHL4CYpcHmCZxpRB9RmZmG7myrz3CAXwjDUF5s2HdPNGutshQbY3ZEQA9r7G6APwmsJGHmppxvhAULWiGtZ",
  "key24": "2ASiz5ESucEZ19BLodARMn2smj1yBGoU7qCQxY78FwLPyRCAGna8PKrvK4dWy2ChRiMeoToBoBb1iouBn6ydzqts"
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
