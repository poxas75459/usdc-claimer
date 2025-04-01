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
    "5LoD4FRyg7QJAqqtHmjyxe3zwU797RLttJiuFgZaoshRfhNQQJieLLbRC51fjfptMo7JUcrGWcoAGvWkzm43y34a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2165ULJA4jm2qjQToNTvte1Y7i3AvVrQqKhSzhBZWCEVahGdAQvBubSBXSSuPzJSvoXKyKXmXDjNMwLLS2ZfrrGv",
  "key1": "3wv9mEZwkH2u8vxv9KKNt6BJ74qMVx7hFuQtKsk34GBEr94Ne2NdzPPqjym76HCBuSXFUzD55vD1n6z89JZLEK5i",
  "key2": "2iVXit1r4ii8qrkNK4HMJCgJB5dYZKHdHK8iV4NcY6ZfD7FwRSDKJCm88tQaMnH4qjLyZjTVuouuTkU6UNPEH2T7",
  "key3": "E7NWm8VW45ihreoE2P5gabfZrgWvjyHyM2oum3eX72PWLZJgk9QFHgoKHWJYSi7cnaQPgfRdV8SJhfirDLVyrL2",
  "key4": "58Nn9yXd4JMS7VfbtJxwjTatyzdmQc9KgunqHSabLeUd5Ni9s9NXXvV9stzMNEXeQhVgbnHyLTFWKt82kvGGqtSL",
  "key5": "49tb3sQxM8YwKK19WhW3xRJriW69SugZJWMbimwPMw8CNjhzN8qzk18PAQHV2jwub4uFnis6o8gCDBwVE3fxRwqC",
  "key6": "5kEKSNZQ5JPnjesrc41rv8buUokNEZrWzQvyPcwhznZn7T3K1L1VTJuwqay67JugNF3RisULiFQDHFaxxnM9Lwtz",
  "key7": "36x8U8ZdNiD7kMFvZBs2JMuVtjZNPz7doqXsUmByVm3nnTCpN6FWUZovsw9deZEVBY54wVMdvw2eZEQbsATBuveP",
  "key8": "4zfmjkXxWtbMG4YP1CCTsydpeH9D5wsCa3cmwZooyvfbzUxqhLs6R1AUju1zXgnM2LJVYHirYyH5RVTVd7FvJAkY",
  "key9": "2SjteSn9u2dZpnuRZWbdqPaiQXgF8hLAuA7jweKuoc5FZbRTBoSGQvWuZCSrohZKWXAA5g8k7Csu3rbsTZjo6TFS",
  "key10": "4wT7fbt9Jk17keAMiTCbJk46Z8s5Vhask81zJV2vkRhim7obePz2g81BQFjJ1MXQ2ctUA83WByJuwFX94nG5EK1r",
  "key11": "3Kz16aXYN6wEq4E8Q7xowBNKC6fFCfF2WDUniNKybYumkfyg5sLLizvL3Av76gJin1aQNQWjEW4YqCmWmVZgqCyn",
  "key12": "5LpdeFaG68VWgxUPhKXzdWeiivKtv3rp56kk8XzMnfRCnesomB4bt7pccp9z1QoH5ZnWvESsdRPPJWt5AUxzvUHu",
  "key13": "5eWzVa6XmHi7EebAvk8tM7s3ytpffKMRpKZ5Jb4CTx9HCYuLXEA7SZ3VaPZz84TofF5bTSRAwZCC4etekkQUoATh",
  "key14": "5Ge8Pw9s5WC9cBYKUJffD1iDjC9msPabyTtTSTxsnpaaSxr1VY7UHeKJ9XNGVqYXdR9jwgCNxQpJomPSaJdsQ2wq",
  "key15": "43rKqa7Zse35rHyDuq5GMWCQbaAccRrMQWQmveG8TnMhe4ejpSZeJNGK5SfKzvwvRbtoGLxtEC5whUJwYTNUZ5Ph",
  "key16": "3oTPXgnL9Afe3hUaabkFCX4vY1LimDcv4mh4kqwSguBY9JZpg2ME99DCBiu7cYXhJihT58DRCU7UdYdW3KV94oiy",
  "key17": "5JMFhsUKyRdQ1STPiwmvg8vBPdoU7L6WytcmnMq1WnfsWP2Vj1YrKZqwv1KjzkpsAnnyhHigzvkfuk437nb3jyxY",
  "key18": "5JApa42xZhr8xQySJy5Q7nM2QfeG49C6veMt3oE21HzPdNMS9kjHCRQbvnDmMkbFfnionyxnC3RM9bWrhWiJXKn2",
  "key19": "3M1g3bPBX37jzCg95wkAgNNgN2PEXVEUbRi4TXFhPYRPdr39yg6wAhebsHGmUe9n3zHnbqMJ34R2ndDC7QSHFmZA",
  "key20": "5zPQHuC6H6jk17i6xAL9FrVLuFVPD2Kofvj2qMEakcnR57CoN9bsodzw8iphwCCM8YJmTtM1q5JLahBQ6oNXh2gD",
  "key21": "3JXmegcn4vhkvqXvaVuKLjEMz4s5ocpZKwtWG4ZEcfhLSqX6tEFQTZ3Mn1QmfE3SgndkfSgxqY5HMk6VKrvZzGDG",
  "key22": "cn4nudqGqLAdKtPSrjZoFWjP2BQ8Z8KH6eKEqoCtXF2FWNqWAfVp8LpXZpYwgc15fGFj8DdGN2RJhDUawdfiQrC",
  "key23": "zLxPyh4VVSsRSMpgcRXGeS1KBB5CXRUoCzCzJjfHMH9VRBmo8nsMrX4yMupt1uQygcgbga3kvuHn5XPFv4D9Cvt",
  "key24": "4dJvFPTHPHmtpBPCiEzX4ckRS86V1NPrfgLCG8wGc2grq8saQAThBCaXeCbkVdZX9mSZd6KpaHH4g5CbdNju1a4f",
  "key25": "4FPCo9bgsgL7Vsx1zErtgNXQovK8QmwwwzeyzxzmqLMzdZ58uzANBbdn9ZdfMvGud6Bu4anQFXD83XS3LrJAZqAf",
  "key26": "29YtAddKgrXHvQawnu5RhFFjyC2njpf39qb3m9r6jBvrv51Nj84N7c8MPgkkMSJAuSvhEPTat9LFu9pkEPygfFhR",
  "key27": "Na2gWj172BsfNqt6f6Mj7gjGXvYSXxtfZuauxw21vuWWhJL4TY2yRPtZA7DAyoaecVwf88tAZQAnSx53Rzuvf3P",
  "key28": "3UFqgo9x6fcpzjMDxWqWvHUuwkNmWwuajWvRsyGsic1Uz6Y2JAjWTNRi7htHZXCKgWtbuymggVYa2FodTkWtiFt2",
  "key29": "4zLZtHvQLHwKdRF6mXexeuQokCaQEjajeASqUcbVvvrWG8jcQG7LVfKi1o4Z11dCxUKuAp1Da3YsBfReCT1r7t2c",
  "key30": "2gbz8zyLGkTEPoJTqvzgsJPtABsDaymPXnELHdz1hvUCbB6Tv5Affp8CxWxU3XmgUwuiKafAUygzqPga4fVrNhH9",
  "key31": "CBoZt7HeyMTW8nHwiasfMBpeFDzNhnUQQCC1JSzonXqzLDPbgVUPfD7GqEf582NF4PrZT19ELbjTJTy1gy7A1ut",
  "key32": "2vA286TTQzC1WyuDfaMN7VWxMcNA7sfErh9mrFeriuVxsKfNZ8CmH9bRMSdWgsAAsqbbBe8Yb238mUPb3n7GWJSz",
  "key33": "Bo1JZrSCU7kZxMiojYpwDNMjxt8bGxMXXNtvrjMK66X9mzrXe3pyhaMG7ADvx32cZwrcAJvs8itUdjKHcP5qzR2"
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
