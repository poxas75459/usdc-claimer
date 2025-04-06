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
    "oS3Bxk8tUsW2e7FGBXLMXSfT6Q6TWkDyGkS2m3qxp96jrNLZa3kSpHjYPJhg5GSQ3HWXdgxoaHx1DhHGvWmRdy9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GvwQ5wsBPGVrwg1BDGSMJ8E1DUhSWSqsegrQ9ut6MQSvAShpJqvgmEMeJumGztQyG6JcDCPxE5hDcpWyhCBwDaD",
  "key1": "5o9TaecP6teihCGHHZMzKzj5fEZEq4H4pjt3Mj62BTMHysbEf3FKLyzvTL8vT3PQX1zwRWdf6ybLywtAawFGVYnu",
  "key2": "ENCQwEEBzY3dfz56RsiJ8ufrSmc9TdJoAxzi1tFf1w5ttRwgnGFLTujL2ZGPURJL1FryxvHtjKCttrFWcYNbaaG",
  "key3": "5jmZmjXbnKMhEvb9KGXqDswFugGZ8Xc44KMwjW9y34dNStmkWPxfNgnL35ndsqMp1wcJZMgvaoxutJyRQVudCQvS",
  "key4": "5noDizKYH6g7fE4xShQmBAwMZLifUxBygxitx8H6v9CgnTSHK6XekJqhbsmHNPhNN1kYXMWffECvm37PpaRW1aQU",
  "key5": "W3aPdnD2oLzy5wiF4B52tbZtDKuo3daRFh32ssqo2ZQM8HVaMSoJrqSMptiwe1NQWKQ7SP4VM3DnJhptUcoU9v8",
  "key6": "3mfHNw85P2QSkDaRiUpEzM9TGUAWW41oQiZMPULzYgKHyXU4uTadtpA9VjDS8hdiJCP2aCMfhv5s4wbeusp39Qjj",
  "key7": "9TZAycUQxfRjjPvRLe7TCDx18q771Uzk7A3Ti5JBKZqLY93PNVpPV6WkCRMzKSVdBdFLM2QxZQN7yC7BSR1Goau",
  "key8": "4w57EDkzLschj5T5EAnCHqXFjjNcid5MEgc7yvNz2SyLkEd5cvaG82uRZLgzAiBmDqJBGxjzcJ3zv7tfqkmoJ8ZU",
  "key9": "2ez62N7KEWSnKv1BoojCGzqdwnkFcMGURzruXqTkoZbmQiAKXVp4v6jfgjKNp7otpXKLQQRBhbx8bvgVcN3tBFde",
  "key10": "2vMWGn7FnD8NovjoN97mMgTU3ojVFKA2JJpdh2AowtAVoU7smPmUrxfTNi1W91jb8iWD9m26Us89A2YLMqhqiERs",
  "key11": "5FkVeERwbqKLgrez1Rw6Bt3Bj98VQZMPzAzqsQosjy2XspDoa55PieLghbYGsawBDViGXSDRyjh6qkTEarfYWB1Z",
  "key12": "5WvH2CNXTPoBcfthXQ49P9bWCgCjy2gq5rCmbD62dktPwQK2MvHT6nuWzBf8DkKpuUCLuhFC3afc9nmUnbuXnoHs",
  "key13": "48EiLUnq2aLF7vZHEkuHEwBWEY8C4vLarzuJGtGkJu3skkadABoEVHX2B1kHs8x3JSWy3pFGwhfiyJYdEoTNizVX",
  "key14": "43FL6yWi4vquyg2ursK2F9Kxa2mT8akhgEzYhptWi6V2bkuto4HnzmkbbMV3tdHmTD8hJ1iznf2bDdeJaUgKqJRy",
  "key15": "3auLTtosJTavFHevNWwuEi4KZEfMWa2CNnMacEhpUehs78ahg6LMUz8oMLVgHu1xUAWN3vsjaN6Ck6nJGAi6nUCv",
  "key16": "5LDGJjqUDzUgRp2xE3pJmfKzrKnsT5xdGFaC84JeqaQ6hdmiGvPVFJr7jesMvQRmN1RpLstovDaSP7AYozwBqoF2",
  "key17": "29HEoJjDKgHovAHX7u4B6j3awL5bz5rPo1QeoaRDHpXZPvyhEK41qodQ85NEP6YB1Y4FNdPP8TAcvDvexoQSrjQd",
  "key18": "3BMMkRU6RsYFDGB4wm4Mad6iqaVeJyWgXukhGytqwdT3hBfPS7gQzgNDjfTF6FP2KzBrNkZaV8Umm4gDMqKKUEdo",
  "key19": "4sNXXqBvCASGUGcxWCrYYmhMXEB9xHNxvqbjRuxpZwtC9pB18WHBVTSCVAa2vRXguGQXXEjhUZBcv1uQ3doC4qYg",
  "key20": "4LZgSHcwHeqCMQYYMD8ithrUvjhXeLdPba3KHdMTh8E15WkKHRcuNqKzpEEhXtDsbR4hQMnizus1qSaLmACbofcA",
  "key21": "55qoBhUbahWATd1fzhDYfnwrLP5MxNts2EjuAVZhi9WRs7aTEHGWHaTobPYGSJe8rEZVGtesj6ZcCBmtDFzFUb7G",
  "key22": "6MpEQHqkefX93Ung9PMEZVQ4cEL1f76EkKW9je4gPGQCTbidAobhqnYLa7hXzgXCEczASTurx7XeX5mU9f9dERv",
  "key23": "5hX9YPUnGzf1nTgMsSJ3tsKuoQeXv4R76u6F7EAqbNgBTfmUHxUQ9SyS5rqrhJneGYLwcp8zhQiJPVdugxnfZHcj",
  "key24": "2UnAdaU8UcRMHeyLGyvKSHURhiu3W82q7RsaTad9Y7JwvWCf4bZP1fFVCv9Ke44WaLtoU5XntGp3mSxGdvbP5Mem",
  "key25": "t7PxZbEM6Ncd6oYf1sN58RS5mSyUVasEsVYh2NNWh9tod6BMEe4K9N7ooLZrijKTZwcqAiccv8dhVD6dPHGfjMH",
  "key26": "4oevyaawK4Fspc84hz6ew7SRmxGaJK2AscPr4QwRVKrx1aEwCN21dhic23pEXqNQGzZ3FVvjYA7DtwJ3uuGtwb4h"
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
