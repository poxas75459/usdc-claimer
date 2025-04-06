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
    "qSyDKXsjb4uW8FuAmVNzHxdu9pnoz3oNFEnsSgeZxFeHChW6oMmGtuciTXU6K5xjhTi54vX4vk5r5Mjesp69Bqr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3goEnq8izMiUFvBFpCkgEJXHWmcohpWLSkmWABgFGxmozVtUyakL1uPdoZMHkRP8GYJXhhhpsjpAmb6sXiZZQSCG",
  "key1": "ZaZX426wp9xK8oM4unEHS2Y87GW6151JJdwmgYidt4CyRDQZsEAzu1skwAM5JvEWPxA7Z3qN7jYujMzrY4mFAWA",
  "key2": "53gtnQKvbHhLmV6NkJAp3MJvoC1fBhtBqwpXrHe6KyTdVKrNwEf1mJshZFEK9dfAzgK6dWp3kqnWDWnJh5YfuEbf",
  "key3": "3BRRxHYHVscefo3YPN9muKw952imgGecJLoqNQR7Sbbw2jtRKYceWcwohaGwQLHcZM6gkA8aqm92qFSWrx4NaBtt",
  "key4": "5rXZuQJrLukX7ELsX6HciWuGDVY6NLEoVVRsMbNqP6QKodJZpw6ifKiMQUgWoczFhAXU2STc9FNZRSPjsnUrwEVV",
  "key5": "VhTpaYqnKTAkrQFaiv3mZVnYpmmie5ueerARQe7eMhFGkivfFQU5Xc4H24NjzcyE3Lw35Kf8f1QQMF2QNSzsx6q",
  "key6": "4kVBmqDC32A4xUMKPt9u8Y4KMLhqKGZf737aBhTR6FznuwV7yWKz8PiVj4xeXj3kWqtXfvqpmCcVQqF1dsMog8rd",
  "key7": "3nBVDuEPFwdBgE4EqbwuodwoBHh1zsq1LE7Qmh2TWBqkKNgzoWq1C2jd9yHrQGF9xRLHTZPxqeBhrGDzKJRCX8yx",
  "key8": "2HUMBqwYpj8m6xqpTybY18iKNbzgS42WnrsRUGBqyYiDz2wJ9xAEsAqXEUUrdECm3HeUjMM1GUDZH8PLiQmbNDT7",
  "key9": "5hm3yRH85JtrN6Mw54ahjwzhFGx9bQzKDrDwYhidU8UYFSovv5tZf5gmBmrfm26w8ooweZWZbr77wAGt46dFfgzH",
  "key10": "4xooGeL9SWZd1Lih8kaUbqRTGeJ4cdrjQNihWi2Nt3t6o5ePsmUk3FKWyYcdh6LTW8G2qCr21xBvqTsukzZJ5JrS",
  "key11": "DXDkzJT5HZ84xxtrnZVL2mviGSLw5W3FobroamUCtfc6ghm2XBY72mWfkiiN3qrADKzcGkpvAQFg7NSzvmBrhMn",
  "key12": "36ZrcsrvqaG5S6rtp61pU3wMMgR5nZHKrChms4wBMWKVRhnroTeBHSZK6bV7tUcwQuFT27R8BRMwdje6NwNVqbgk",
  "key13": "4zBpeuaAaf8m3dGuTRWEKqHQULGKjqQEvpj4fQbMpxB4GxBk4kZ5SdrapyxdcQtzzHa8JC8yDS4ZWSAz3cg4hqNC",
  "key14": "4sDuDmssz438wzz4HdTZ3oAqEnPTk7FPCGahfipTG5Dp4Kg3LG6W267VkpcCzdE8gQJLLQUrMAL86xuHeP55SnEx",
  "key15": "nyKgK4YeympvtpmhiPYjiV572sfPm2AFU2hj14BiSieRaV6qP1BQSZfqJdY7sJLnCG1yuHWfeLTDprYoJeX5Y4d",
  "key16": "35fNhnJxqh2NZiv8GX2Lbk1fhW1NnYrvC7UXS9zPZF2pV7e7N3FycTZ8nTRdBMkePg4sEmEHHiUtpLKk2CAPKT64",
  "key17": "5TbVxfQP1mvAdRTQixdw1aSiGAsQgUkMriY8bNJmcNWfakKizd97inCob3t4uxLRzcTG2y36eBPdmdJk4KcMr3Rw",
  "key18": "25DpWAV82gDNzc9347rp51HGbEUTh3Cr9z7Chj94XBatJvVqP8QcYqiFE2nZ87L8xAhreDfCBt9dhUSJf2TapYLE",
  "key19": "nQNY3o4gXtwmtHguqvMJoGBjKKz6V995a5GD37wabHA7juaNcMngJVxgpJKY5HRNXkRdxfb1ADLoqkE2nssa1ds",
  "key20": "47eSKxtSq5WnsbGQ6Tmwk3dAoBWC5eptmLiQnSn33SuSPPvY7yKXexR6VKJdbuT2KTJp1y1iR9fjwdV4aT3yM5mJ",
  "key21": "2m3aEQehrj2hP25uRT673jDQKDgF7AeVDyrKWZKmWKZTfrJDFMhfgmZZtQ88DmwXZLRpf9kLN2ExnQL6PymMG3f3",
  "key22": "2EXEju7T8pT4bjWjomdPYkpKo4AAMJhaZC1QnVcrjuZ2EtY5Kvd9abxNWMNHHadFjZzMYr7y2NWrDL2aoEpxqUgR",
  "key23": "rG7XjTcpydFQUW3FQq45XJWUtjfHA6EkrnZcrreXWhq3hYBW9aboAFAiruyhuFEVB4rbBTPvx7Ts7Qyegn1bQyS",
  "key24": "9wrotKSpsRsjaJ5bXdoj48v4tZUt4PwTUf9DWE3zR9Tn91xe2DKuh6rUUtNv3RLvBePCXNHgLY9kUzN9ndU2jp8",
  "key25": "2iUNaYbm8S7uD61tCX5ECfTNRgPVHUiupEPXSVxeyDNzp8fc4M6cvC6m6txUGhhezD8DoAtuDVUc8WeUzRhyekmw",
  "key26": "3ifPdnh1GtNkLHcPorFkTzWFquB5wFfYFiwAvDVvjqhq357rG3uwFzawubxSbXrDhUHXFEDg2GDouPzUX7as5DvX",
  "key27": "3Qqa8d7sRDSjKRTfJYvXRBgQofJzQHbRaPT5s5H8pXDMksSjsPwqpGh9KK3Zp7LoTcNxDkJFr3NqpMU9M45f1tBw",
  "key28": "27x9KiLN6eRZxKnWFzLJLLuevtpAE1VhraiaS2bn9KGqRJa4VNeJAb8SxdetPv7Z1j9HvoUR4ktDxSMykDx3Fj5L",
  "key29": "2DTKFo3hxUbyUzTLCL4eRVW3piQk5tQDW1iFjywgVx6GVRiGF95KTj9JscweJJhznmQmVsos36XBVBWnJ1vo5kRg",
  "key30": "4sERz2SmMHHZJAHuqwFdYqZpK9KFW2CAma9jmeSDRdBRjpxbHprGV2bDYo8EPtVPkaGszdEbyH1KRuaMit8GqMk4",
  "key31": "5a7btTzPBLCcK2Qse8L6zwVAW2n6gY8eCRddLkTqXxdrtivRVbaj2GBFWT16tXu31PGC8oJzZbQkkRLiMSJFMaE3",
  "key32": "34risdiDgJRqhFrm7cUDJkGE856h7J638md9XHtn5d5trhQJVFptaDed76oZr5pDNkXizGzwBHeGvvbBgWibe3S5",
  "key33": "2NhidVpmNucyhFRVa3CwR9o18vCyQa1CYqrjohwKNhAYGtYpJLgigrvZUD1d9At4PPVctWYS5UVQBTKz5JesvznA",
  "key34": "5DJmUqd6Sq1E2foyMcjEY5x3xdaiBGo1aBkVgitrtrJ4kgmLywZSt1oH82W53XfSCWuYR9ajwSKFMJPGZyeAmiHM",
  "key35": "4YM3wGmoKeWrShhjPFQVzg7WAgtKQyyj4j6DRDd5Ed3gyo4dGMyjTvp5yobGY3wk4jkjm4hg7pNZSnDFX7AkL8to",
  "key36": "kjyzUA9eUQrzYHzjmxYadGbn8mP5QjcBuMMyoyhCcohkismABsBs3BRj6qc4hnSrqyBw5vyCty9EUw1c2i6CRRR",
  "key37": "2LuacVVybaNZp7LhMwaFKq1mVA8o9LzRgJq35GeZKSB6ACu2F5y2jjnzFYuEz15hMdz26iccQhxNoPSi1LJJhD3s",
  "key38": "5RRHoDfQDTEXAd5NRKGatWnWqFQZphnE9eJJRYe8QX4jDc2AHMFHMymbx4PSEJLBju9nstE4MyJ37DRSCQNtAijb",
  "key39": "21qyYfP7mteFui1CXQ2sTUHUF7RHvMakFLj4qMBCYzX4sFgicJTb63iFEJUYqFM71QjMK9WkrfHzpaFN8h18k4wA",
  "key40": "3PRZkwgj7LQKjxCTosWNWkepNFTLNrsh8wcJ5Nwo5hMZ2LcwvCJ9ahpA1pMxd834AWFNho3ZGcnkJCL1j62HcbRs",
  "key41": "4DGS2tAtsYakmZVi6W2ph57y1FgrFuW5GnQ9QxdpTUXtk9HrMsEYUzQtSTo5WeN8kg3iXL46zbNS45yC3rxizr4u",
  "key42": "g9dMEx46TPy7iF7NbFBnjpTQkawdum9oe5DtcJpUErmDAVpp3xuxnk7jsbbXTtfJYweeqLzo4GjaNS8QNU6s9R7",
  "key43": "4VZ2YqQnGCvJ9tyCasuBQUWUSQPR6yUNAwcGpMU9JMbsTMs7e7iuA25BXWPE7ff9tX1SEB8Rzo4WmfqmZdSSTD4S",
  "key44": "FfzMq9CtCwxEVf9m8Z1h82ZG2RXeUok7YwYL5tZ13YjY1nwR6t2LdrX2fRYXRS69zaBwXPPppNe3mEGH9EwRkdC",
  "key45": "2GoyEUyM2s6UFEtWKQT8WXetVhxVoHKaGJGR54khEw5ZCmdDvJTJNnW6ZSKyiYGVH83aa8qwnKjBWGFikhzvWB55",
  "key46": "3jPMVir993y6YJFrXFauE6yzv832Lxox1ZCXXVHsv1qru3iTF23neWti3zLEuMJJYYMUFe1P1UsFhaiTLmtUdCPX",
  "key47": "58sfKxJsz3xu7LXEM4JU4fdKp3PheqjYqGnNgSoXBmP8UT58mqo3Ji6LAiKHDvBRK7gueRnj4aE4sA7gPmsZTHHp"
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
