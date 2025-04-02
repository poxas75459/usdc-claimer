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
    "61GWZPVDvYJbq1ht1yX9SDuFU1UggRhWexDk9d4jiXmbV6ww6YZV8mFA8kKfZDcuhgH3NdQD92haBvSZMBnsc6fs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eKtVTHqK31mFsnnu1uTGVWeNGeQ5qhEhwR4tmEZqiCprMdDq3otXejKdppxiMpd2PtsbYetUeaL6N69SwsWsanY",
  "key1": "2sYxtLS2xNJt8DUXGmFS1LAiDYWVzpxP2dmEt7q8P3XuhTwjXZDkPRLJy1qxZtXPQj6uSnSRZwV43K2SHRVpHzYC",
  "key2": "3HBJ4X7jC58nAd4nZUsrjhvxRXmehML8NVS8K3shsH9hcjLUdSDPTfCEAV5eYC6qERTjQu83VTHkPaLTm4Eq8HSj",
  "key3": "2Jdg2XKd5iHi5CCqC1GQfKqQNdK7tR5jV6FHkFWvidjMLP9Z1kviVqWDD3XRDqP2MtSXvhCy5M14cTAwDe6drvRL",
  "key4": "7WJKLcVWQe7o66jomfwpoDM14BBWWLbTNARbNeke8jN35viry4CAYURMEN9CcNGFmVFavPWEgwgKeuBPVM5vuQD",
  "key5": "37j1mnTkqGNsZppU4xmpZfUDRLcrhR2GwVXyBud6VZyZULXYPpfuSHrHN3x1zpey7nRsDiKiZgBbXUD4MGfMiMnV",
  "key6": "7Dj9DRVomGM2AgeihKs7GvhZWVHPUEVQcUaTThWFjUhe6UeD4rQvoWYxG38TS8TRoq5Wqb4NM4f5m9oJd5oVZ47",
  "key7": "4G2TpWEkGa2hqszUeRd7GnbTo1xaHCfSSwjM4FXGrbQra8dZCQg7byUGUeXvizUUXqxS6CBxshdJ1UQJVpyMGoqw",
  "key8": "55ad4MHPfcDQ3rb5cK9SEswJmNfmCPEzeadJz9AdfDhhxyixdBTSwLTqFHcG9UMoYAzFVdBbDKwiMcfw5SMA3opC",
  "key9": "4J4tB59o8bqwFLtbwhyQ1JaZJHL1MakqqqgQNY7Ztpw8mmrzynVRaupfsmj3MnanN3QAePuArBxNZprVNgwpQfTW",
  "key10": "39mWjK2KgWF8mbJJCkU7zixbmw3Bhok1pjdNj2mSP7kr1DS1jJxyzGz1uRHacroYg2KV9WwzNedFz4wB1pmESKGj",
  "key11": "35vsKKNA8r5sGNUPLChnpA7Uw6zkq1TCvrgPcB77kNUQA95E3gsfZSTPuFM2PBV6pqBaLg4Z3CqoACR5QBQsFftw",
  "key12": "2ErbWucbNMH2p5cBt565BkrdsYpSPAzcYSnXmCi4ndfoRCkMU2Txq5DU2wuJK1GX7EwWZbgxQ4bCVcBEBU2Pnz4H",
  "key13": "38SyLGXi7wYT9cqBmt27PYYdYRmdDCa3yTxYT78t37nKGEYiWUPbkGwDLSpVQKJqkqBaf5SfJrZd7bHfzwUe22dm",
  "key14": "238YQPPkr9y28A9pGzfon3xk8usNUocvAECSQBr6Fx8h2Nwby5objsAUcrgx6fuAeQXevZ72F4nvxQXbvFnLexN8",
  "key15": "3N4hNuVVPTiCMZL55Nyc8FQkQQSDr9cf2utA728DRqkR3Qcjn3ienMLgtkxXPQTGFczeBkdfq6hZ72HUbtz5q29g",
  "key16": "3c4v7inLfkZ3EgwLgdv9TdHtawmw2sEUhjKmy3A1SCZ3kmT8xu2FE1tbLfxeU4Bqc5rk5bL9eRaoV6K8MGK4Ki5U",
  "key17": "25cngqBnYSgnumg3rCDKgFqmZMofdDaE7X6h7uyVtm8yf3escqpHLZHShVLdbmxWANVEqSEHP7d4YuxXAfto7gir",
  "key18": "2xPuZpjpkAnfpKuM5K56umQSFds6UnG7WYaYHv365W3MnpQZU24qazRFWcQJNNdovHKuzUgKTypPoaQLvKLvtBfX",
  "key19": "4DtU9e3Eau3GjxvAfS3CQwrPis1dgLHr59WS525YjAXb9SCiq5T4d3yMJJquGvmhRT8fC7Es3HcHSPcPCyoUWsCp",
  "key20": "4CaoDgKULuNLrp4KCdUR3YD5o2WSrZxyyb8wB1XY2zsXWp9Sv8aumUgyV5qbTdWawW1cKC7ZU3MExyxozfsaQTGv",
  "key21": "46L3uEx1uxyLoVzNsxnidJ9PqH9odLtzzEiMgpKk92rvV4SQqjiH4ontLTKiaAw5Bm1UPLvTibdEJqKoVeAKo7An",
  "key22": "5WtU61kpG85G8tbn9AXsg7jc9x3Vk4FQgbJvWNH2zse9pD9FA9HNnTprxNp7ChwSCbieUmYYVE9wutarWzDCvqDT",
  "key23": "4Mz6vcLoT35fQ3vNq1rFYry4Nc4dMsWepq9JkGU4JrwMdqNCstBx1M9WVmSpTDsjrvKr6v5pA4YmKyVSyz7FKifv",
  "key24": "rxbUiUqvUpgRUi6gBncHvUrazgxo3FyfbSCesee7sLAkFWQe2VY8ZguY4LpDLfPYEqtAyG16ygjuwCADAiqpfbk",
  "key25": "4PjMLzG2FCTCpLzTQDFZ33PYYQk8ksYhVt5DvrTiahwABCZBMHSVtkTFwGiheLEucMnYQJEFzyhuHUEGRNWAVda6",
  "key26": "K8E4NHxDFmQhhddRwGLjZokwEfxKDomgoVutLRqUY8XmEW8X5fTstumBRn6U34PuAUawSg41nKcTzLKT1UuWAPa",
  "key27": "2BpZq9SjJW6qKN5setT5h8Fgj4mTaS2zLoN8ZGS7RvyCygjxaggkFzUqrEWXyWNhwxXcUkVbWL5yQUBWzTJAHS6p",
  "key28": "5uyAS6C7ew6DfP5vipXeBXzK3a963FZR5HHz5ekvppd3Nf3Ak6ogdSZkcr5bKS55JGnhpVeMVaFLk1qxxXnfumFU",
  "key29": "5dzpDahRcsAJPFbYVGCmhdCStnbiJfHK1P8ePUQeVD1VWvqFVFu2CfiG28WAmXfnnFv4SJHScspULJCwpBpqM1Ut",
  "key30": "e6n1TGnoMobyURcSFBV4V9SBNrrpr1QUnRzK2QSRLybT8vFW39xkbuKVumtWyNmqsdsjqRjiecQ6bJGkA4poM4J",
  "key31": "49RarNsSyr4crjMvczGwSyjbSDGjqk2BfBeW1YCgLpgQTaHcoVoQgxG4y3GBwCiXJQDtQcBbM4Be6h7XfH94LYci",
  "key32": "2HDdGrHN9iswSNrvMSuiFD2ArpH8SVpNgoZsrdT2rfB4un99SUtn5thP3vuBrCLDf2YHhUtTiq7Z3nSQbcY6TXLA",
  "key33": "5LxugjTPHmWg2WSaU238wvebZpoMwCmXjqZm5G25GTyymvPMnqza5arwUNWrAraEpiRBS4gdV4zkrdYpiXtwmpoC",
  "key34": "2pG97cohR5kGCtnJENcVtB7aCrcnvNUz614kMBctmtijR8SB3uXdJVSJycNeKwh2UHyJqp7PBq7WYeZxWKHSGoPJ",
  "key35": "2ZUQNeEU9Cu5cRnWG4hoez6yuQNrYB8AZLvtnBPPAat1o1SWra27FwMNqbkwQoeEB97yCAe8cDQknTdY6ysJCEXA",
  "key36": "598dDCFTUVeZnoNXYrWyvjiUWnbEQ42wKGn3nzCzS3v6NwWss4ydnK9SPscTp3RoZFZY6ghCbWd71jwXmjavJqDu",
  "key37": "3hSrAbZnXMDPAspNjcCqHZRU6k9i37wfJX9B5PYg7PzDM67Ce5nP46eJgzFiw4B9n4JmEPJrSZGPG3bWNj9jdxfq",
  "key38": "2ypBkQNgbv81NinZNoeRe2QHaGNiVPvXLBw1HDkDExoW6KN7aoeW4Z2oKYz2JM9C2JwyCtNsZMJ6u44r4TExcVaH",
  "key39": "4kygrcANLr6oDRcrXwsniMqDa9iv6qyJ1R4maa77xewU51NSvkS7DF86vW28yEX4r93NEqMZWjw63J1ygABrk9uo",
  "key40": "4Na8ZpM7JTDzpGFn5jwVa1MYkBYHHimiq7Yb8ewtsiLqCFPC9DKABketgHJPK2pZcLacNMxs8r8uCBQh1yGUmX9t",
  "key41": "3pYET8YPSeuaahD5wywuTuL1n2kJWDBtj9t6Ax3z1qWeiTiVPf8gsEvkpaEQ5jbZNzcbXCxFRQWtMfEzbAK4VKbK",
  "key42": "2ihdC64F7N7aEwmnn2wdCKcietSifJh6hzS5cYgqXcvGwiQ6Bfu45P3VDguMcccDj8GQwL4fBkjdrx88bQNvMHL6",
  "key43": "5oZwNZHyweoK6UAkwBqcZQkzC2iqWRkNHhpzg5RCXkwUZcMTcR5PKBvtJnNLZGV6PBmB3t1HvEysEYJCziDzUnGR",
  "key44": "5tHQ3dyb56JrwYN6v5sbip17oRda9XmWVNEcV7C4uUuo7wPPvXLiPM2j6N6kWxScqEZcgBQHjfQUkuQD2L2Mnyv7",
  "key45": "Fz5B3JZsonuYFADW1st5pDWCcTkcDSDxKYYhoFoiS1ci5HdieNBVpJohHRxVaw2mphYo9FYwJfRckCFDhPbLuKc",
  "key46": "4wJ1c3huZpVdmetXUCn8CvbU7996j9ahurFuvVQaiCWayJAhY72XbswMa99Efs5LsyYjXVfMJAihFfECFspvvKib"
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
