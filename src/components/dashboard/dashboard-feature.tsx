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
    "2X8dmUD3tXv3KL7YcCnLmdEqR9EtKXx2w2rzJ2dZBq6ezZigzc12T3JvZe67MrAbMmSHEXb65xk4zGDGajFaQx8G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VPz9zgGbyGQdXuwvUegUssTrwEbgFiDq5kKX1FxGfrH96eEGxpsrrgceuVBWNyXdmPe71b5s9HsjDgQJtXDdYdN",
  "key1": "5WBWq2mayDphsHEjziZN9uup2Z9rfU6MU5dqjqvyoq4y3i5FJ8tmwmoMMEkaayqYLgfWgz1AXhpaUKWgJNkEC8b3",
  "key2": "4N7xYqG5tTtkiNJGFgb8h5MuEtEjLfUFBceg8TDZeUMRACR2z4Z2EeDMXCfigozGDg5snRqGrnBN2tSbmSvEPTWN",
  "key3": "5LMkb224vL6PNtdihJZretvcwsNkEYz4qZM8kLhYk4VnKKeLfg5TE4tNLrk9s5JRLxGSRVYfggWvZ9sQ5QkXWLbw",
  "key4": "4xvGtAHZJg7CfhQ2CB6vWfEneHptA1zeuJNnxu6u72ot1T9y76R639DCanXkP7g31yHVAoKBU3CAqqPgtSMZP5qy",
  "key5": "3otvHAwFgNaQmh4DMN8KA9uyHYSk3fra393vtX6RTaAGks47vq5Sfng8TyZsya44dbBn8UNB9ZLLhDRY21hhxHqv",
  "key6": "3ogVwjPipbJqovg2dbuuUZaitiJXbZe3xvr47pyfZBbu3mTR8dCJa9ubgUKMq47cRVUk5YtUjrdVBrtgJGMLSjVe",
  "key7": "iTxpFa9pez5js9zFGxg5a5rAjimeRcH3GZnYbtx5SMhC1wMUpVY24Uqgv9tkrriKPEmMJQych4iPpd8iKfYiqAx",
  "key8": "2Jq1euZGnF8ZnFso81cTauGJXGV4pnce1RTk42dv2hoKLCLPecrs2Fj1DPRAsCD54Teja2cNdd2KoCvYXCdXZNMG",
  "key9": "5Qoqkb6pL7bgwv9TQJrRD7uqHGTrfs2BLp7qAGUvTMrmK4pYu9weeqFt2Dje7nxg5ECYwTJqLYNnvcRN4WgW68cR",
  "key10": "3H88Z9RWFzTjdLXc1oAJxBBFjTyC83pae44NorWyY2ARu42V5pjyamNy6A3KZBSvETxwgru9KioaAwJUgAWDfetX",
  "key11": "5CmHKsy23HvDkM8QUCDh7Fwo2VzyrxCdBmkFpNbaUBQ3uV33KBtevkHEepZgCfgbbwMGeqNarHFGsqK3wF823Eoz",
  "key12": "4NaU4Q4jWHfCKGhvZb7UYoGGjJpntWGK5t8R5S1x1JF8y6EWhBsp1tyrCBX7csJXPyfu9HeLPWe1bz3uX1bLksPK",
  "key13": "64BCmz7wFqbGFbYBTCEKfwJpLTadc1WN7a98xHta9Gk2RhyEU6gKTW464Vs4pwRSabTk2GGRWaKdrFA2p8d8cva4",
  "key14": "HiLzcbYL1CRhpAS74qiFi5Ma3uLscu5qaUfqFBjw4LeM3uixaWT1vxPMVMSn33vADGFTRwc9YTiinrK9RvCFpuP",
  "key15": "2BVKm6BYFZXAq6B2fUm3WrfTeqC71CHC8WYxxGJzQxyP6kytNTicsQm8McHeUc7CRV3hypmj5p1KB8jPwy9t2rgE",
  "key16": "xTrrv7bBtzLfQLsJuD5L9xMyyDZydBaZFYk9bnCzB6g9o15rVbzMdWCBrqaoLkYBihcRmz5rTsiRPToR4P3RQo9",
  "key17": "3DtBJD2NFDLpXNhqdfZizbLseKzos8muiGwE4GQZt8FUfYHMqKVmgsaXEnbz3QJpLLaoo7Z62sxu5j297zXE39Gj",
  "key18": "4ikkTaHwngrjRiJA2npauFLXnc5s62fgNPtypGiYsfznj2xGALCxacLEisrQWdE5st5giSfPxZCKkvuUuMVWhstZ",
  "key19": "2t3agkD2EpnXfdJJ75rE5sRstyi3gnz8fxjX7sVtAr5oh1qxGnWVRuD3XZYcMRDKHTWGpjHYNsD5zWVTKtWNkgGW",
  "key20": "23gTnebsASsbvzoYHE8EkwY8L1mkkqDAj5xMUPhUGbM7qYtH7kRR9EVwwgE9hi8kKrYVCreQ8ppxfdFpW79WHqLF",
  "key21": "6wv5BAJNA2YwuR1VDEnFZmgtynseHuHx2KAq8CigriKUMVpaoMiFw7kcwtT6265XunrDAETZnR178DTQppc6Pvw",
  "key22": "3UypMqQMzKJbg2FuqGurWB6cPdcwzfxvyG1AyEEzBZeyMhd9GwxnGhxq88oh4ZbM6rnY5QxLun2dXB7KYcuDMDFS",
  "key23": "56AwfVvxR2cod8jL7GfsvUrXMRUrqzqqdemhQrwVudADSf1H1TbY1sQFRpJbXib9pqNA8c3cDj2eQHjsXhGzKLCt",
  "key24": "4ETeuptYvJaZsGSfdcDjkhSQsnXsPPpwMN8eDNhiYXVnGDWqMNUQ1ZabpSGeBoWkSPVbeonzcxY3UnZwvHyMmr3c",
  "key25": "HsiApdZ9ifvwbenkCvefu9X8s5tDciv13Lm3o7XCA3fsRDDmcV2UhwcUzysFJ3o3xEk6ytCQggiHUHhqHc4kpFC",
  "key26": "4mA1aQ12MBXuk1LXXLHf2s1BFwotgZcRJVrAKHR6VsXzJ5vN9KjMF9fAqx3FY1NoZZbQo5zgohVdBEfTZxzSpv5f",
  "key27": "5ATomK9UznaAAheRUH6ofpUab3bwAfr7pHGe7q1FRRkVn3j2R24S4XU1YPzh5nUVx8FEUgpvq4JD8TsMJxBYzNWA",
  "key28": "3nscfHAzcZrWmvTsFYZjUkTCxRRFmKY1tfYbzBLQtTNA9gMSEA4Cp987GhboYFBjSx7PR4s4i1LeZvyGGiDVZpfp",
  "key29": "27b17cwafi9JCfRUER9tjYa6Mgmif51zzBweg2BmqHvP8uY8vJ78iqiyKRN3LrQUbzGp7YWmQzKvr97sd7Rb9iNP",
  "key30": "S6HR62NZ8k2Pj7unCTLd4vQF45sX2SifDKWCkXMhijf3ykwygzFXd4jyLENS8vNZtJTEitRJr4FxEQ2NJfaQ11i",
  "key31": "4A368p4JzApCEtnnn4wevpMjCSwMKRGV4y9R41iynqH7j8oP44sev28t63WJcWXqus3s7k5A7355QHb6GGFhTAkJ",
  "key32": "3nJUcEHoN4K8LvUC4tXHPBG5wZLciPPKpeM2xP4pUpW4sWvqB87mPu4u6a7VZnjBgBy4gGCnStm9QrCr6Z8D5gq2",
  "key33": "5iQnjULdHu4ND3cCPzh42mvYvX7CSJXUC7wjmVZbZ3Y9EY7QHTjU3jK9Y8TdzUzQAUJr6wPV81xawqXVWnTD7ZiQ",
  "key34": "3bwRXK4rJMrzgQjUphpAyGDRUom78YEacmcKDKoiqKd9fM67AQQYbUpptbtZikr3QHirAzQbjbupG32BCpggGzM2",
  "key35": "HNNTNspwJyuTbqB8xEST3MBFu3JXJfp6bdko7nTzEJrK8M9k7q9pMXgiUnom62jm5rjb4d6joQFZQMm1LoUqVvx",
  "key36": "cpuiy7ekZoMZcumhAqYRn465y7zuYDZCrSeL9oyscpvWU4ojjsBsqukR4QDb17VLEaWduLH7KD7GaifTFUkxghJ",
  "key37": "5utHfJMSnrvbRhxtW1wVxUtW4MRkbf6VscDBLSqxhVxUPhL7ysEJUt4fCsfk1xdgZctHH5J9w5xdKY1ppUEA1bF7",
  "key38": "65fJt2a1NUTYRnFxDExQFvALrj1YZbMF7EhxKdG7KACL4GVXoUfVFvizRZrSoSzGs7Ho2Xag54TAhfM4ztGdJn1d"
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
