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
    "ZGfo7shoARm1mxsJTVLvY6tkmrq5e8cAhnDyX7FJg5vkh9e9omm9LnMDkWZicw2PgxfxYvD6jRvVhSC7Ekq7q82"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uQqf78tJEwZ3e7sRgD1JMAHwEJZKKL3bvHGRVfPpWmVR9bsUv9MB5MtGxpDcNPtjcFMx5CiMewvmxuS8pYGcm4D",
  "key1": "33p2FBXErFVzpVu69KdKqAFJvt9CMctPzMWhcEFVFMXC6fFAKziU4VKknRoDLUJ5ee3RK18r3fPCURnNnEVyocWF",
  "key2": "53CpyryTTihJC7P3MDwHEGcTHuM4AqPj88ABp1BcghFZq4LQWVHjamUkC8Z5UnnLWDpv9rDtPsiYYdU7WBdicBq6",
  "key3": "487VCNgZvYxyzTYgaBnphSUzuHqYRvvivw8b8fiCLLGfew9sbJYo8ZuDvu1Pv8rmsxmnbqHDDjG5feodAueUotwm",
  "key4": "5a5Q9w9kohP6DHiN8SKaaA32SKLEnhzVX5AVFxfED5NzQoHVTFvRotokBmWhWq7RffXfgC8vWTboVGQs1ptSN53W",
  "key5": "4aWLTqCKomuaqBUPBisuB4DCY8DdEjqvjwxTRaBnvu7BKcwcHnYTnhjRXzjTvXexVxyjLEc93gF8NwqnfXk3yzcj",
  "key6": "3QjPsvF4tNPpyVNoEVqBKtEqUBKJog8dURH9BBG7NDxZVzteDVpDpPVDruJwTmm1r821rm6erWRGfgCH6TtVNLRo",
  "key7": "62NppTbaPRJp4aArV8kVqyrRwAN4ndyqcEJqu2UsiHq4XCg28TqNgUCRJ3qkJS92yNNc5x63ziAxprdD8WMLjGxQ",
  "key8": "4br65LxrYDRybLTqYNdFvFf5pCj7UcuZJZDTdwxM2rPCtX7kDPVChsBUKMcVVyy1QW8sS1UkdURnTpk7R4zrB1xg",
  "key9": "eKwFYuZBWHWsX5EvWxGhbBTPsZAccn1YNeus53aXdxqUXNHABEBd8eyWSM3g1hbfZwAZKqTj7D63TZ7CTpD7CLL",
  "key10": "5iYoZn8XA6sfusq4ZboZGNMvCfdTZRmKWsZzsLZAHbzzS8GeuGJbRZxULDWiup8PRnr6xdWuM7GR7e9KcqeiyokU",
  "key11": "ubsEk6RWF8mw3JdKUCfjQ8xncbXbtKJYdjS5x1cA6t2Ms3iQLFniAqzrHFkDLLcY4a7Tm8Uu1xQZXMyNU2U7W3e",
  "key12": "2cQUkFK7BXxLfTKXJc6NSETNdWFueHHK4Hjor73xS4fDDE8AA7KkF4bJVGcLmUeAG6C2jUTYQnj3ESfcM2uy4sTq",
  "key13": "zuvfiyQQHhdrUeU9aZUmuE3P5XzoExzNrvPQqht8WCx6nC8HKZoxYGugEx4qLy6UgAaQT46JKvxcWUPzRNimKgp",
  "key14": "2xZoyLipQz5LUkFbJyvAtUofBRhNrg6HyjCYsAmxWVGCgj1vpJVTLpDStLJymqz8gpaTV9xfpqkoY2LQcMqM7iHY",
  "key15": "5VPghEfdMwJGsgWHoZAbLAAgPhLKGcWfRmFcG8MRwK4rG1vFMJErSwNvztRwyKBu89j6HwXHRKzoxREDBkYmeKvj",
  "key16": "3mm5xQC69bNN1gieaUCnf7wpDoP1z2uBuJnAujdZpxKkFh2Q91sJC1bisFHJGcGNGWtS4U9uCCL9qMoF8WfSbNcb",
  "key17": "4Q3eteGxU9wXSdBXgwdBttZeNhDXZw9cdYpk9EJv5upbxtyDBiUvnjoYbVDSgmqiavhdY3dBU757JHQqggNXs79m",
  "key18": "5dpjqf1SrS67HCyQvE8u4Yd6Lv95XwwKLzkRnmdXmXctk8qbDated5HdinfxMjosRuxuwo7tm8v8xVUK7KPh86Dr",
  "key19": "MfmdrQKXcsLbaYMJGez8ZeMtYVekQTrHBrjXtLVRQZFLbUsDC63EeUB8ycq4YmtQNU46HSWhw9tk1np9fR4mHZi",
  "key20": "3WMmSd3fWBYQyBdcHvpY4PuupyYXX5yMYLAGYRfNZm9vXRAwccvJCmPFwPbsKGtqgLcjNfP4DifZDhW2heAsXQB8",
  "key21": "4dn4r5ngCVTSjonWEngRiXVAUAhnMacad7L5LN2gLQ8rxcJv2ZXdCMPp76u9QuyWi14Rhu26KUdgGqF9gizjJA19",
  "key22": "2eqRAyeXj39EZ6FYEjqo1ZPnPZuaTz6MjmBFCmwtghHx8G9CqF8r3dG8zpBxqEZBobtgxjHUfo6bSnH7dC7yvVoR",
  "key23": "2KkbGDyGMyhir2uaL8MULyEVNwUdTzxkt8ngVCPzQHFpqoHB9F3iVYKhg12cYaioF2YLD6fupLwCawQEDFNYErfS",
  "key24": "2F66dxrPffVvJA31bfQ9vySFXGXE97UB17jsgsBaymUXquar3k6BjEKzxPYmnaD725p7X1UdR5VbyDVG8LRp63Yd",
  "key25": "4s59z8dhYt1w4qxpfN4LqqxsKgY5m2hSKuNF7MhHZibR22FqcwzYXmK2JYKs35PhKVMHjGMPHWt4GJ549NntWSyf",
  "key26": "2GnLtWEUyNHJR7LRWmG3QoBbTGdeyHVW2KWJKAJMqbHrb7LxigdN44SaUwbQxTdz3CkKYwcqBwE7gZ1P4ezpGAjt",
  "key27": "D2kkfajsQ9WGsgYWBPFWLgsE5j1v23Ucuos8eNgWj3vkeEZEgt8W1ntt8vWdG2ZPomUKhWk9UdGUMkJfXJaZ8Ab",
  "key28": "3brBCpyWfQsZjHLqZyiBJEvsJF2hgmsjUL11sdRe9o4Ua9U6SZCA63hnoHER88ae6bfQpux1fDMbVnFCKxog4Rr",
  "key29": "2kqvakYWhYs7m7TU1hFYDuzp7A76zcJvtzvVWsRqnJurDPnAVrTfwZEJ4q161d6YT7UoPTcBd1pi7VYzi7ENp965",
  "key30": "3rouP1cRbFTcyQg9bSa3gcsGdVo5g6fQavwvvdjaQ5HhmhUhCRN33r2TcZoBQtuuo7KVSMQfY6gHRbDQorDTZgBZ"
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
