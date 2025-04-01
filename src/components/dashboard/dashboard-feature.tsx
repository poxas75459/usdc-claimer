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
    "2SUJGUDNyaCccXddWAi9poVJN9nmde8LFQYRda7aWqYMZp76Tu5BLiRNNnqbXadL5MtJ9X8ZPSVTpKiB66S1ATRg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "645SHnwcUFqSQX7REvj9PiKCgCUZSPnR2aM9BZZetDHHbzW23TRY2aY8JaVn8UFhT8b9H9k7Hqsh2iyA4QVySUXh",
  "key1": "4qxo43GJp9ehgd4bS37bZFGfr53C2Uozbk44BMoGmtaCX8xQKxdPV9kDz9C417WRqzWzGBnBmoAJHKR8dhiPJvo7",
  "key2": "4TcGjBYTSPRmrR7y69UQEmeCZZDNgqirGtVVH8mNuaZtWqCndKkAiT732rjyRUQXzBuyqc3V7BgeFJHTPCEjW69x",
  "key3": "5viHbCiLtH6w26FxJdsw7eHYyWNVzqSf1VncD16eD9PgcHkPMMnugLc4sR4NjyXqLVY6K21Rhm2uYYEBLgcbvBuh",
  "key4": "58FeKFYnzeNTc1tVUfuGcbtard7G8NtEW8zkfi1GVEurGvC6rg3fhBDLpeBGVztdBJ4dPNJxhsP6iDxSDJs5QKmc",
  "key5": "2m91LgR4X7QkLKUtMarrh8HiHE3uV14EE1kzXn4B2kpkNqmKHoNS6x2ubxUF9hEABDQ1Yu2aFMxN7V2t2uhnXRky",
  "key6": "3LH4AvZDumfYsDqAmDVgKd62PJj3o1aUN2oARinusrgzNBFUfgVMn7LWu2pGgj2o3xEiT5Wh2LStVFkMNsJ8Wy8i",
  "key7": "4egmYoRGBLhnCfPpHPt4XjaqBK9LCNQmDHhQ7ScjQgZ3CPWHFNLgAx2wCYycxTbTUNkQUtzakSymfGh3SFa75AXM",
  "key8": "2xUhgTGNrXXo6EUc24VgJrdqRwhHF8tLLCQwDZEc6ovcVw9uEqg5njDUDB4r21cX3biNGmDN8JsiKZC67tSGc8Td",
  "key9": "3gXijw4RwnN8eoLae2MvpCmfjLi4Zs3ZZUaDKKfiaYQzxzesMdWt2RJa5jvUdAnSwWb5dGbCJUHpAb8bGmYRcBoK",
  "key10": "44MpkvaSdDkVZRuoytSdh7UZ1U9Uq3nuAEbdfjq1Z4H3kQnzaMcQAhQFUVQhvThDUzofnKorvSYy1CKhV8ygNhnr",
  "key11": "3jkzv12tHvE9RW2UhseVjka1xNqhWHy7b5k8dATySPpuxWB1efif6e4snv6CLzZfUiD9LSmVPVabWUq6ttxiPDmU",
  "key12": "mq89WYdVfrAgyfFSNesL2QogtHf5t3LzArkZQ7jT4orV4dkSG3pWZ9AbvSziWkPZFFGFKRRAwMGskKjbaqXvczF",
  "key13": "4BZPVsSHynCEvXoBqG9CSDtqkTVyS44mPHq9Fw4UAwtrHJ29sjoKKb7RaD1AeH6zsozFB7qTTjcza9ahEZ1xbYy7",
  "key14": "2rPHSmrnHgtqv4dt6VrpHtvw7xHCtXodCNzLrsb4RasdSXCQyD1AZRRoQxzDVd4QL6236mQyNooSEfnQsDvucG2p",
  "key15": "38VpXMi5duU64ToftQwJ8FhDvTJSzBfjrYKuhUswFfUknxfCWLp7myHswM5TJLtQrtQEjFYkhGF5Ys7FFKqvagCq",
  "key16": "673CzY4NXAEiiZzLJQoSDZiDxKJAa2U6m8Jx4zeodSmgFBbaffT1pj1AZVET3AdHeYDGWds25q5cwizvAomRmuNY",
  "key17": "5jkrtXPTKgF8obp9nT38GzYxkZuQdGZ85KiPsj66m7hwReaWgLWkqPQXcaHy1JXnEhoD8udb4hWKvNKqCYtuajrz",
  "key18": "5GRXW5YHXnDAH3GtJtsJARiB94oqjetV5eLVmn8CPRyTpGocucknEinGZQQHBrM4rd1f8XZde455uSG99LBagvBT",
  "key19": "3yzG2Lo6c73mGAjkMMA4kwcnmpPY9j7uwBzJcGn8s7vy2n2bY4bRGyFt2c9w5wqVupy29UUMEVE77hJJxGN5MZr",
  "key20": "2o9xB76DJ4Tkw1GJqpgT6vC8C5TVVENHQkm9j763WLYofG31wvPL1fTpSLcdr2i7eMgRZSEsc6GUtAQU68ehPrDP",
  "key21": "4PXfNJW4QRJDW4GBKfMcjHns9wbS9PLRa8GWPFNENLifUKgn8fLzic9Acf36kPKWTe2K8Pu5Ja39yKan3XgJFuWR",
  "key22": "5ANGp7W3FVvgjskZQPN3CY55XyXi4VYy2DcZbDHeqsxQjzh8H4GCxUgzPAryAwmwbyJfp5vWnDFEKnNucuvTky1i",
  "key23": "2YJWppN9bnp3bm9LW9DVP5UNPc66wi4m8NC8mAieM4UoVkcWQyHtv84WNz8iC6S51AyUCYYu3aH1ZRjP1fTk4G7P",
  "key24": "5jBGj2vQQ1yKjHbsWSxyQWKv1fUg4VYo7FNpfwGkUTZudiWy59BaC1qj1U9J8gjKUtk9PW2yytFuvD1hrqfWgP3n",
  "key25": "FTmuvcnCZfYQ3etLggnCdYzLLNo6F3SUCNCfdJFJckJusoXLtH2uKvuCvjtVjBEcJ5BkHmQjfwbybz3U8qQe7sd",
  "key26": "4c7xAuPLpKwA4o9m9ybon8HjG9rtqFFbwhxViMDaEghm8RBpd4F1B2eG4JrCPqPUbxZ9Si8nzjEarco4zwFRJDFD",
  "key27": "dX7HFcS9QPmpS875uw7fatfg7zs4AorFfz7it1RMtDy68D2oLwr6viVRsw1qAQ9wiSnRBnxgyS1xkofKARjDTMp",
  "key28": "28TopMAVJbiJGW3RA178NzjNGLZYYiVkGPxzQUc9ggRXSyQu7yzE3xDai54KDQ87tgH2dEaHb9pwJeg8vuF5TtMb",
  "key29": "25PKTRiSzYzjQNBUNpZb1oo18cFu7gSPmfMPP3LdyfzxNBAjN43qYpsHBwApgfVyknPbjEfWgi65sXyKmUfUoVFo",
  "key30": "5d3XE6t3d14CioLamoKznBUq9nsCCEA9kVwsFU2ct9ju9K7NPCb7JAtiRcm5r5YaBWZy4TT4GKmQMehfs3VBze8j",
  "key31": "5rr46rUA9YRTZ6SFx8dhXb8PhhpXfvbosQDbNoGBou3obquY1GKLUAmLNR9m2z35yFLTV5rSSoKLJsvUpqYTmorq",
  "key32": "3jEvjpfFB6JdK8AnbXmhece6MtjhCijNHaeVZxiyXiXxtXFK6Uba9EVicW1zWWXJUvjcv9tXBpuwmdsXBuAN3qzT",
  "key33": "25x4D4i5Bj3KgE8nCX9xNHK1vboLANQ6fCW5f1NrYqbSA9w12yYZijDJBCmGh7nDsaBKJSJeTQfkva6uYWLhECyF",
  "key34": "55Ch1iS1JWLPf7VFs9L5CU9Pv41RY93HBF8DRTykHExJFiSrHTsxvmLfWNcdbjmWun55MVVEjT6TnD2P1xwuVy7Z",
  "key35": "2YzWcPSbZRSjn1RfYSM2NToPPEz9XnGTaHbimtxTdLELkq4huP41kn75kycQ8srYN3Zs3jmpqJWxbMdWB5AYBj7k",
  "key36": "54SyoNHrR6Kxzyn1GwDW1o2hipdQ9fc4G8rw8Wsqtbw66zDRQ535BcM2CmqA9vq3RcPujWH2vgYvsHk72cW8b3kc",
  "key37": "4uQthcbKrNv3FyG2s1broVfnoLd7F1vyPUmFpEigFEhR4NcCb9dTti49Ab2sKawQcMA2D8LueFLsFdYpnBjXB8Hv",
  "key38": "3aKEMrUggenPYKQNBV9Us9JKbKMAMj3qk1yVVvfjmWtao4FXaD7PSfsCUp3Seukfjau465M5XNZaB5kcp6AWoR9g",
  "key39": "4nwTsnnSxGQpNaeNJ7GiPwPLeLWAk6WHdnFsprCccg4Etb6WW4svLogTcRTY5L1qw8dvX5LuVVqGxekrkq4LjcyE",
  "key40": "4vT21r8RXXsQbB4JP3nvh2fatcFxPueJBWchmzP7a8UzbXJUURn653ty4EbLQ4rLARsPs3tRzTzZYxi69EpMsGn6",
  "key41": "65Fah57rRTL37GQfjyk9y7d66REXP8nXBwoqWDS6ZS4r5dETDvKtYig8tA8QodEztCFVTTqQ1FoK65M5ZmqbM765",
  "key42": "25YAfArSkkPistgex1wYzDyS7PvDYWJRc83kkBpz74pqaNhBtB1gzGZoVRNNpQfc4ZP9a2RqvrgyX5pwXHSzwo6Y",
  "key43": "5VEeRZTRRrZin2s4bDdhrpBcrSTN7g1fEEVRgFRLsaK7rF6CUzgJr5ArLBETiZLhPJ1an39hp4coJYDeXThpiNau",
  "key44": "46hJK2L5ZazgLQr6BubczrzwH13bs4bSx3X5PQg7nqV5XbKNEac6Kjdjn8UMgYVEZa9hJDqKz4VZoNmw9RDAbUU7",
  "key45": "34vy33swfCKxoLCtErPeos28DezZyNwMTAkn7edAwuu3Gq2SPQLqxNnRyG4sV7Li9mWv8KHJphTcxLqMEqSaTWvE"
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
