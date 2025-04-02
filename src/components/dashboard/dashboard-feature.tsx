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
    "eEPfbE73XfKSgPhU8SpH4ipfKjtHgsueADjNJRfzVHSjs7pCSHEDkBaPBgAZHqWkywrJsZQxAzz3ssxPKCG9r8x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2m83minEzH7Fa3zwwtBWGRdDnGUo9UMQiFucrZA1kxokZQAvLinvdr9r8xNocKX6dAvzL8oj8e4eMezLAtHehRyR",
  "key1": "4KwyEes6G6ACMC3xzutVWmTGhinGMwzzEkyviPtYhU86b2UNP87xRj7AkBLd1XB6dGwtYFfeThA2dccuzGVBed7W",
  "key2": "5WaNb5fFMarqTMD6LZJsaHmFMLnhEYuWr6BKddJemJBxCthJFNn8916RRacfsQuESxLChprnGyZqAc3GXK3GLbck",
  "key3": "Rza4gZp2CLvBbmkV8wu5PHSgmc2dX2v3vEFDWAMULAhvNevZEs1PqKcuDBwvpkYmYtii3xPCsWKbcrDj2RSkbpZ",
  "key4": "2pfvEhJRT7qsehwFHHhJHCYyGafnse8T1XTkRdpMiYXej5jtFpYFkoSK35bBnmEoTEihKVYa1sqN7JvAE4JsPDk5",
  "key5": "31xaFEobuYzCDhGP5gpe7HUBfwFgAt6VjtdrgWRk1vcdgtGbL1i7fKzoh1ho9guEuHqepocmReUGTsvKXcKNtaja",
  "key6": "tsoXUESsKf1iGNcLK9zaNQXtMEwBLyt9jaYYVU8dVYTo1zxuUJMg5hkZ7KvX32tHwVKFCi5RQ2b9i1Ft5koSMPP",
  "key7": "2rosDfxyiWjAzdq7TtbpvzfDAVCpntw8vXdEXCrhatGufbyYjCUos4dS9tZYv7stHL22m3CTQ7X6tQLfeBzPPstH",
  "key8": "5M7XzmDV8b7JW1ES73WcimRqZtGqPmLaudXRnBtYzGGFssPqH6WQFM8HjxvboNbc3YZH8DoHJcRVPyYzBVm8BHgk",
  "key9": "5JxDGKSAqbH5pbntytL79oQei56n6rKQ7iGyvrumyqMtVMdCcUrNxuE5kWAD3Z8EMxEaJZKHE5Bsvi4WrrWGo1T6",
  "key10": "3i2HryByfAPS5QFrnRsjh47yM7nCE1wUeTVmLX884DFB2Ln2hcjp31t1XkMyNsAp1BXEc2vRM8dJU8CJBvAWCsf2",
  "key11": "3pM2XrkK1CCJsjJTp6q3exiLP7hfLKmykzxHweLayx3HannTaVcMREFuUduvbTetNQdWb1N13AgPtxmKBNHoV4Hm",
  "key12": "4E5dVxkSXTXikm4p3JFL9F929ppCEK3RpvkvLTnvPKE4eAsnQHySiC52qTE2gJrPqbnsGUCHi1W8B1DXBKMSbktY",
  "key13": "3M7R7o7bMdj7gx8MFmGaGznqU1k1o5qD2J4jcBmBBnxAF47WP7mY3r7n8ZzZ3KVcvKhxJoPTs9CVABn4CDh817ar",
  "key14": "5mAD94Wagns5fUQX61B4bsdqQ9cXUmWw56Js5mJfcuKUWhniLzSCJrpxYP4esywEMfb8VZ87FT37B13kRA8uBnhZ",
  "key15": "2Qs1m26gZ2upquMTvNi2fbcoQCzfc6F9Rhd8pELEBUb6CZsF5eN4W4YjefzLd4V2oTn4K4rHAU7VFCAvbWybJSs6",
  "key16": "3Qatap3aBSaxwNsz7NAnQVw1L7MDumamfyngYMytxYjUmEgQZoZiTrJbrBjWU1EVCiVoaJyQLCUCFWeM83HE4HQ7",
  "key17": "4QjctMFsvmFqZLHiZpDMrKCnv6x1SYqLdR18NZqdQKmvJ9X2KwDPwvL4rz1ALhJMqUUGi66qcgYr4cgt1U7jzE9v",
  "key18": "2jfaQ1cKDboDYetPGcJ1Do7j16yVcmaGA9GCbgqKGAKHYiZ66Lu3EX4XiGGRG1fRRoGBLySatQw2MchkyYcxmEEw",
  "key19": "1S8wXbkaGUm2zsZmek6dTj6cNJP21xBqmczMnEDStwV8s5tWvJ7F4ME5YRyHd9wNNmp17iRgc5SPELAWxaR6bkZ",
  "key20": "A2S8D1JTogaPisRtwKpFA1VFiWh5i13LQ7ffEhPn9GeNy54BwayxhP39WcG3EFu3m1V9QVsrUUfbJqdSpokE4JD",
  "key21": "4jaAttq2GvRjXJmdP28fQB5RWrsMbR4rtkjbipKybzknBoUQtEFgZY6XzeDwfAbs2R8RKL9LBkthsQ4Bgp8kP4ty",
  "key22": "5FoT1t7vwJuM1BnZRS8CaN6ezaB6EzkZpc5FveWn1eNxP8fbGC9xbgiTT1edjxXgNMAaEVFkbt3D8ez53eNdhwKj",
  "key23": "64fDvoQykqBuyX9PuqLqMCGcWwh9cqkbFReteBQQkgPBxC8VP7pHvpZSVwQArZMjkJK6DM3YVDw9fqSocvd4vtSk",
  "key24": "25ipHjjn7awCgSJ4qjjCQvNtDqU27753pH9LADxZZuVkQbf1dAsNaJ9fux4CGwN1WFjExJ9wUZZKEZpzSchmGz9G",
  "key25": "45muWCHFhJ6QPCPwnYJxDWFkQyaar2mgNzgG2rkP8UHmeU2xMRAEzaKxFvQMCJuMF4ew2knR1bPJ9MnfbDfvNm1X",
  "key26": "3Voie4a5Dbk4yXBHPtm7LWnwjqeL1SJkD7GNgrsSbMNdQCR9dHZYGHCuRcEf6ZDLLrSAMadT639nWAcV12nzkvpq",
  "key27": "4524YpK4NDpjCNAwdbGw8a65Ek8yYaKMcwENLwjK637LBVYb3d1wSysccT5BbFBT74JaMvrQQQhacyWyA6d9QDP4",
  "key28": "64Ve3rxN8LgsN2xykvb42wqHjBLh7JevsfLWeN9JtfAGrSAuZTGBPCfZcGd7W6noC7xYVRc9DZaRq3aSQwxfekqH",
  "key29": "64UybLPwcPPiKs5FibxYAp1vV92CKAjPUQKWxu5UJUbHK4VBA4DamgEuc32Zn8unkyMR1dnu8A4apmdwCppowwHU",
  "key30": "5DJW1cCsme4Uzd8FDfX5rRQ4awCQAU86x3NsD5h4DW8Cbq3LkWFPJzBtFYLNMiGbAccrBeXg33g5Vcw5n9KA9ZTE",
  "key31": "2Bge6u9BhtgXeVBjAdZfMdLMyjnCb529NW5Yzz6pLirvd5He5gQjR3RnagSjzLJn1f61WvwhMszdbz4CHy99Q2zu",
  "key32": "5YsrnoBgsfE5xA8Yu8GETejeEuwKSLZZWtqgM4fqC56irk4ttfFMejQLVJzHtm93AkVe7Pucat2iL9gAZk9U7vLA",
  "key33": "3wp3QZGPnfwy2d9KzVgAchymCKvBoBTjAgvvAyWd5PMRSEdMeEdtCZZ8oKh12w65tE45QKGcozVgkDaQq6XTniyp",
  "key34": "41EpKeBXkVcnccUEHGBfuGw9RHYzfXDx3Pn1HwzYvmxesnX6BpFFABmsJLsrx57NTgq1WoLZm192Zutss153e3o",
  "key35": "4w6B8S6aiudcPWqE7dAp7j5cjtEmWTrVVpt8GPgnCRrT9r4iAEg5GGBBu9zTH4sS4x5fXgXbYy9bgCXMpA7raxpR",
  "key36": "XKYcTkN61fw5abkNQ3aH4omqUmszVhg9Cd4QYMbpfome5ffyJ2gXQpVe96HtNUrsFmYoDPPsA7m2bQv8aqHQjXe"
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
