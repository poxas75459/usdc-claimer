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
    "32kvvfv9Xxmcw2FjEsa3yDnmB2VGvggyjUV4F3iihCg4VELhuY7KHWKPyXsBQ44sPQLV8tHgS2KVPz1BAiXFHzjs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SkYU1MbyAM5FMF68YpccGeQeM2KPdm74gPNK9aYRKNtsv9cVJFM4dSeooKunq5YjsgXGt2q3ScysN1NMQpwL4Ez",
  "key1": "2yprtdhEKPVDpGnr7Kgkwu4ycrCrn2wcNKtj1Gcz63yc1NVQZnjQCdVvQXYvxKBDuQxEDhTW4VZ1tpc4aQNX34qc",
  "key2": "3iUiCCmN6nSWfgbU2sAhUsXdbFLGdxSVKuJ21xZ8isoeCweRGYa1oAwnnh5s7LkQAhwPoWTKdKbBS7dEn1sSCPog",
  "key3": "4z5ESBGn6DQSvmtWp3dqb6yCDjzWPoqet3aUM6EKpJUb4ykuYe2ZBdoGdRU1U3wbmF6cjNKCXZjifKiVX2GJgqxw",
  "key4": "49gGuUW19G4u7nbd22rJdT7Hsq7vHZLLJFW9hVSiXTHjHeN1wqZ4STVakfFmd4fZ4zvofZRTT9fUQ6YZZ5b5dqop",
  "key5": "5S7pw98Ce6HDmTZuRbKEgtMACwEXXkxM6nRhoqrfLcejoodbfF2g1v6NEFKLkszEaddUnJtwCKKfGjgzd84skyo8",
  "key6": "KLoYivzegSzFz6wmWj2NNBtdgkXfT8Fko6n6huuvs5qw3pzgMeQoa7Cijjg1Pcs1aj71BXe6A3cKb3pFEHnwpmd",
  "key7": "5Acae7pizQmq1Xto1Uh2ff7yNbYAEWZtXHRXorwvPHa6WNhfPxGs8DRZ2geUzcaT3hu3BYpH7u2X16kBkdDfumrU",
  "key8": "4cfcz6V2n8HBnWjueBvMKXp87Sh1kZqkaYmPz6TmqJqTzB4eNzVXk41sT9m86ReA279qTGJE5pcineBuGLRoSUnR",
  "key9": "5YW8ceqXGqD4cjsFdxAA6KaRSH5Afin4TSWSodSpC9Sa87BVqMAwssygMAAfXoTU4o54LFjRgBqPrv8MPMzKLraX",
  "key10": "zALG7Wgj3juzR1FmUdruHEmCpyLfVJKERgPYotCRi26B8s7xxNb4fKbcxBEiRKXAVmaqvHbdnNi4Stxye7iapKw",
  "key11": "4yZWYb4iAhGACcNxm89YuCJotwVGsu2rFbVa6csH4Hx31v8SsNDopyvXBtJ6czMB79xmdh14SWtymUohWUUjUcRt",
  "key12": "4JKeBfPuHzQwAUCgRn8rQTKrL8xJQXxGzGFJ6eK2XSg4QVRqBs4SVimsP3HTbJYt2vGUTVvuqnDF5HqhF4tnWQCD",
  "key13": "4y8yE1Qe5BecU6ZzJkSNdTbmZYEfqJFos6EYTDBkAX2yyQ9FCxz9DVRmZ633R35Az3HAqNrzW5dVirrQv7LMHJ8y",
  "key14": "2B3VNW8jvrWjnR1QRam61rJdbBBucKyUbfhGkugoi1CpdKYAgAJUo8fVEyTE9m7RcC4Q1qpPnTi1uWN5bt1jmr9P",
  "key15": "51EvWsfFdL6dMABFxGc91vJGiRbCDMVPHL3dN89qFxb9ZeHCvQ9KESSQ2SFnh1qtvvzXTVmwzYg48ySfa8egp6Sc",
  "key16": "3PinWgwzKaxQSXsNqWTwa1qQWPL3GymagGpXSbpiq4wG3SkHiB3LsHHBuqVWCZurX6aEEhW5cogmukUZtgnEt4Y9",
  "key17": "5JmFkYuHU1TaiHW8gknuDgmwWKaFvFerkfMRQSzSAk6ARBopdGJxusyogYwo73Tni7iu5qkjHUZsUzoFs8QfNZqy",
  "key18": "4NHdcDhTNnp79F6Hvfx2usqJW7dmqAbBBBiqAaYDo6KjeYmwwwKihKKRbXusCMEDzwNbt9K2WFVd3DhsyGaxtq67",
  "key19": "3UyipGxESKbh3Cm2dCtoymMSDrLpTdjNsdE6j2kzjbAEahe4hUUwe62r4CvTDRiCKhXA6asdxn1qUqSMTaxMdGJ4",
  "key20": "2iBihnHwGSZYuFHWF6J43kgY8hHkTKAM1BD31ZtXEiQxTP9skEgVx4ykxASrvN6vkuuEb38F2pxBPCp6zzkfQsLT",
  "key21": "a5AHpaMpWLcJyLXAoMtmaHEaU1HcZKNABjrZA76Aeq5byUVUvN1Q14iPiNXGudCjk4NtGaiwqFFqUL5Zayszd1S",
  "key22": "njzCAPpFkpaRU4EgDdcxNZWR3KJF5HgFEVxyNJ5A9S4QhQw2Xsqp5uvGb4wowFaHThSfqxqsGJyMbsi3NWCgjE6",
  "key23": "2hotmQ3h6LmZ88KKBkDKj1bmRv72LfaMkMb1uiQSBwsnvQivzbYqURAQB9Tt7dtmUgT7g275uK2Sx7pcb7dEhX3m",
  "key24": "3rAs58mWxSiew7N2CKyof3iB9vfyJygUu2Y6uihvci3wfgc7Tn3tzYue2vEQeuKmEJEC2J7mTyrroYJBmBdahzyS",
  "key25": "3VYvp9uf3ZsZxfgmeVGJNg1dEhns9ZRNutMKinVpZ7cJHVPBPxnJi5exC7nNC17SR8qTM7TJgGcRPZ4YNprjoLGd",
  "key26": "5sBs9EUsu4DDSDnSVavoLNWsYmiGLgSWUc8YHbfZYAYF1YTGjcebrKuWXvgeHGyQULFTz63SEapSUFLmwVdwczUx",
  "key27": "5F8v1aQ8KWYH8frxC8BAtSSapKoF1VfmRZK3gKVKersHSrFewYYa6fu2xUuy32e2yT7dSikW9bGXKCNDsK2cFGKz",
  "key28": "3PM4RYtgTY8isAY7JakYvYkAbxJdFUskbBTKAQmjoVqwtdJf5EFNMidpvTYvqafA6hs45NWz9LxtmCYG4eEKorLo",
  "key29": "5QwqWec5udP5Wk6HiwhMXPYtwuFnQLAqHhTzKUEzAHPaMj9YqfVbRHRH5hFsvX1vEVrqL7JjFypfjr1kJ6E9814W",
  "key30": "42Uj6md34YqvuJU5G6NKsbfQ9SfF8bcTzsDxoiteCsdQWJC6fG5advwVEGUfr1T8kRKSL8hZMF65kLoFb3Ppiv5e",
  "key31": "4gMhnhowFx28fU7wzXmxenSMCFxGawG8KXRGKJ3Mr7Jibwku1iJz2tvzHJcstTxidUqZxTPyKvWSRHmTmMyqSsSM",
  "key32": "2X5HgGW7UzFGe5BCbCj6KGumnwPGLHqwbAic61qAr3jG9ndtjkZQosE2bsUqSKsFH8jG3dpC2aMLB2UuWvo39wzU",
  "key33": "ZqeGJ4mkUCNX7AwsQkrdHnsKkrLZvGs6wbfuv4imYrcKqKER7RNJCdJtMQZZNiMYCXyckbE5QcMMacGqBxBaVAk",
  "key34": "2nwYa17g1uMYWrpMAN9q76ZHbYMRhH3ne7nBcbrjWoyAxc3UWth86yKjv8G25wx5DJ5yrYFVtyQ2A9tBtDnW5T2i",
  "key35": "4LKV9Umdo1psZBm5Sc8FuMBmXTtCXyBiHLpgPZFyiBpMdxqmxWSNbb6VJBpCEujamM5tFweNMaRtYqrmrRWUiFso",
  "key36": "5eJLJp7d3Fu4j98bdTpgQD6MvPytxhSLf4BS95FD4o2LjJU38xLH1LaBRSmFUatF3BT9Y9HujRbuzhawSMyybcd7",
  "key37": "pvU2df8ANtqyScnJj2nGrDof78rvqGpzdujkMAJ5HfFwhyRUgwcu1EhENQYyM88LDhq48D36oL99PkqTgEz9iRH",
  "key38": "4Q7MEENG37r8BtnyvtdEgpoCAegDc3Apc3ATXsT59F5cFg5SzjaUyhJzZaUkTT4HQ8uu68rX4DKRnTPAeP9tdWcH",
  "key39": "3BsG97yGe3zFKuoAwcEVd8gjgLFAHCGQ489xWD3TpBpMYj7AV8CVrAiP56jkDgL8LzQGYvq1e47RHxURAJTCao4A",
  "key40": "47s7X8XeSbq9HohRKonACYg37TMCyYC4QJtiYWAitBTyKmSKgo8gg8i9PsNkEUAZ7Dsag2dKZjMK7qk9www4FDzX"
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
