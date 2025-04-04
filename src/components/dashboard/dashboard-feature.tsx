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
    "2K9XNso8E9mpQWK1XcZC4uwYj9ZGFvNTHwyoTU6ghk3GDWDfKBN1edcyACNyLTk5oYyVy2oHs1WyydjnCQuBjShh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XggeZTeJrNHsEhTSRTZwN7AWSkKS6JgtvjvNJidmLvvmkbbV1KbwRfm8xsEs6fFgkLf2ztA6y1pnd2okzuap8HX",
  "key1": "4GV3qdFXtcyjeu1BbqpA6bmkzAoY94ELC8sHeAVvB8wynatgiLR5JVKuvTrzBtZNwKeeAhGMi7DLnDc2Stx5khFE",
  "key2": "4Wun66kLgX2AiLgK8zSNyN62mcR9FyhstbUgiAwgVytMQgRvTx5iU953vCHF1jy8RvjjckREJcyTJk2qD8zRexiL",
  "key3": "3Hb9Q1zzXW7Ui3xd979jegbgyFuxtauw6AptRvHFtQPxhSVAiEk7jPDLX4CREBscySRbBfK5qfnKfRBTWDk2vxjk",
  "key4": "3fan2VLE4AFgPQNsbSWvqcufimLEoG1GRRV7voWNKvfp5hJ6dbwV3p4Fi26GRJDF2JurRh6gyTKXDAX8v5zno2H9",
  "key5": "3WjWom3BUHp74wQnjEnehAQcswqzEcbotkYUUhRCaLtqTmS8zePm15wybCtLYDibU1PMKraLsbiXWVMgDG83hehp",
  "key6": "sg1JgeYGRMZ9ev6NVrp8mtq9Pn5x6ogeh4o1UgqfwrG57HLXoLtaKruQLqjDtnA2G2mfEoBu1RnzZVj1ncKNZqf",
  "key7": "4V8KdFk8DCU4n9mLZLfWa1H1xrj3m1tAi5N3yCY4ejotmQ6vG81Xw5nnpPupPwaPnGUZtNS8tcAGGdJJQo37kCxm",
  "key8": "57Ys5Ux3tZt96hskynagQV5wCrtjZJtBJU9nmWhUVZnaKz1crN4DuxybojSuCZmTzc8xKJa63qwUZe8rcvjRUoq3",
  "key9": "2R85L9ZdbuYpPMqNLEt1xP6ULNdZAFPAwmV3o4DGyiG7oJbstHwuELYMB5qLFKSBtvBLXqnbGiJKzoNqoxbVriQh",
  "key10": "vSEi9KKdwYqgwMUKvLp4aXQyJ4ZENBsL27bzWv4dKNVFx68NemySCXcS71BXrd9Usp9Rh6eicWrRFmgPSaH5Mhg",
  "key11": "4NmaCqRnD5nb1XCgpXBnoQKtYewc1o4EDibiUzzHwTZLUwCt5x2gWJdKoZhJ53pgrYdbZXL8rKB2ooC9W7b5UwLj",
  "key12": "54UWKoLpr1EM9p9vGphRxx2BzRhg6Eidvghw5MfymoZXQoSJscCLzDZssw5NvYNEtzaFKaddWjHqdiYQn5rt9A2P",
  "key13": "2qe5Kyyi3YXt933gLbUS9in8kGguPeMZVnndRcwRzMykAPyLiAttTjKB17k5DviedA6uNF2MmXSXdzSTooqStJfK",
  "key14": "2gZAFiBfvUzu9jtnj4fNgRbnex5B7AJLnC7G8gAWcbXTKFZceTh1rTbq7KYEkiWSm1bUt5zKrdWodEs94dTdzEKX",
  "key15": "4xFnPKfkEAo2tuikfjf5GgdXh1VqY22bVJyV2ojCx356Pji1ZBLBnczdRVgoBveySbEMWGTbaLK9WTBgRSAi9481",
  "key16": "2jGxs7KyM6qakMABWHMpSeCAUzH4G5aPUncudkEqAZFxn5adeKa1uzNmzy93VUsHsiw6vDYhDqf5SFAZNM9g6m8R",
  "key17": "g1943dTvtvcqYHBTeASDUWgVrkhRaCTDzqUuwL63CNX7QZs8b42Jv6VPprTpqmTnL22WC9vKJpa2Jv1tUXWr2HC",
  "key18": "2F8PcFBCaXEvq4CNZDRoyS4BzDp5TaxBqiMYQ5oXPFdYrpBsVTN8Mg1t1iZ2hYU3veYGXxzPZoVjY61aJGgUKe2J",
  "key19": "3V9jgijVLZLz7fsBxJwMAjMsphSZNrnjgmHV389gXbjv1z98KE3kM8rmJdd8jBJXGsUPrysGxkAK634fj8p1V6MN",
  "key20": "Siu4bUPxhwHaPU2Y6zSb8g7n7HZjFZ93JR3Qzd2SYNMmb9mR4YWLU8wvEumnFmWY4TrGRiiTWoK3TRE1cfV5V5a",
  "key21": "i1j9Copg4FHDd6GNzMf7RMkCmAYo9H3bwHaXP23MCJMjZKcAJUGJThuhC6iBeSqfSSZvNVgkcgehhoRkUVuRck5",
  "key22": "cDeWr4mFipoTgy8YFoRJ7hxH5NkGmmYXeryNBU4H2UYDzDAzChWNdwLj3vijXcZUu1N3EH2RMrBJ8Thh1AmWTAz",
  "key23": "58EA95p5aPWPPfqEaBXmrTvq8RVh5fFtZVWpqoGT2BHQo5qvdLBwVxSmbfm6xFKfWS7kLrcAspAiBHgYGrfasCQG",
  "key24": "4XaUDP3Z8ccgAYcLYNf3nqtahHVTiXiezAw9S4YwGs66Qkh46PH5xd2GT9nw3QehfbAcM4b6nX7qH5UmUvDt75E4",
  "key25": "3b2rPbaoK3k9KUyywcZg8DtbLCKMKBfZ2YWDyjMpvMU4uNo6jKfeGZf9HMn9MPyj262Yp7SHgohxKfRsakZHew92",
  "key26": "Saw3EXBUPjpWVtc2Kzh5LnVh5KrmHxe4JV1uf2YHax6kHxb4UiLGx1RwqSrR8rRBzQ5ZkJ1WfQgmoShDBRs72gh",
  "key27": "5ceG6LQDPGHd6Wqcei1QuR53Abb9mJqXrVRof8CdBDuAxnCpSf8RiZVyjWaRs22kCTmbgAVbJ4fJKEZGVEAUjoqq",
  "key28": "58dqxGQhGxCrr6M3cDNnNxham7ekF55LAq87GKEHCYPM73nmmfrREr1L4SC5cJNtGTqcCDxD2fAfFPmxwZ4Xc6hd",
  "key29": "3JgM7H36YRCm33iFPCH4aNJAqdbdQMn6Eib65JmJ8v7HMPE7tRCjThyftRoH111Fgch3bfpyHCibtbrZFCwuCXbA",
  "key30": "2kjH6oyzTvDBJux2DYVgT7EeWsTV8vAWhoSBQDPt5Lbe29tBGDPzuWcheQq2ECpXQYUVbZu5q6yG8gBjnSxKFArZ"
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
