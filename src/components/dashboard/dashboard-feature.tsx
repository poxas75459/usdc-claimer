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
    "5FKWgLLbcq5LcBdQh8nJYXukoNrqr3vXVuqMLnsrM8qo11pDAAaYkAJ7Vy48bEGFE9HX9P95av11bztNm1h8a56b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yPBatzpoegt2iBYz9UyY4M3966UW1QM7Nt4fhFbPFnvtHbr3dqvYYnNs7Cvow7pNNX6ma53aE5gkySPm3Ru9JKE",
  "key1": "3RcqTDpF2xJ8SJ7duUzmFfV3cmLphZK9GbtWBvThXBsey21pkgrSFg3p4CqrfPMiqH2KAPQJKJqgFXiPrkX4WL68",
  "key2": "3K3y45eTgajSXb58fHtvAxp89fZ3UvkMjtGtyfMSaFZA6WhmHESiQTxJ4tQCiDnPte1JVop9vKWaVvVVEdRqgMdf",
  "key3": "2MWKaJbBSnk5992SozBDZNHLEko7d3Ybc38RYiXa52EF53chq5aNTH67gu8cHs48djZ4HXwctRAewndh4iioucy6",
  "key4": "3TFsTEL2xuZjbmvyfh6f1vdE99HyeoaFriZ1Wa6QK6DEyW9vAmQKpToRZbX9hdqHMnVx8x5fsfZeVV9gyuHsFz7D",
  "key5": "5iJqu6jis9QcK6M5GBnVHoqc1dXXADqP1xjxrXBhGSs34m4yij1bQStxZUDVHgY2WRqzocXncN92Xkp1ispZ38C6",
  "key6": "4beybcAN6NXRLC3HB9QngLdTxzDji8k4uTtQTz14tL38ipVM361gXaN544iU2zm9dpdsFFbdCerhMz5q5d681mkK",
  "key7": "2hsVSJWRomRCXm1tadUhGFBxCDnQgEngDvLKmQY4eYSf9o26AV4DTiXez9AWc2uYGLL3YK8c7Xi8svEjojXmCQCn",
  "key8": "LwhBDpPWkwYUSpLyqKJruJsiD8eye5YZvarywhdyr9o89YyTXPpjiWZspacyyn3H5fBoX76NdwXZmPC9md8NqHM",
  "key9": "5pf1NkyBWqybtEqxKSFQv5Yt6ouv5rUY3cfqAaZgQSyNmdFjVEtEWnzi4Ff3TeYo4iZmo9b9KsFqeb9swnxYEjX8",
  "key10": "VT7Y4KYnmVt26swcWXNb4haqfR1APREoBhZwDwYTYhSooQiLM3LrNmDKqj3TMML4wMbzgfd7REt7PmrDEQuueJH",
  "key11": "34hVUTT6tUvwFcGxwFzZWgp935Hjeb8hR6AhRtnGRJcctnmj4BrDzGiCaN6EUNsXUa1KehHEVG8AmTezb1Bd9spt",
  "key12": "FwHwq1dhkNTiXnWAxrW1pS7PtPdU6HLwj6nLMZXFDQHPfjmqCjeZ1eSd4Wfc5m6eErmJYqT3DJKg7b5fx8Kc78K",
  "key13": "3nWRfDrMUypSxZrdU3muwGGshPtBzT2Cg5pREXByGsFZH8Kvj1wSyG1YiAbzUvVjk2kkZ5dKWcWHZr1KTvN1p84y",
  "key14": "4JLNr1MY8TmqnahBxjKKeqV74MrKzDbySRridnZ1utMkWP29tPFhkP9LUjydPAcH4qEKxmcoH1D73ytFR8CZgV86",
  "key15": "48FyGwbc3bbjArWtC1iwy4xErYKufsd5RHfptD2CnJr2ot1nGGCcGjP83WpwzxZqFRzwAeV8Q8nkLPg1J5qxGDR7",
  "key16": "5z4o6FT7qZcRiNnShSHvAy4gFfjKXqoyTDR3j9VQaaTuaTummzp8P2RvHg5PAnjXnfSJ3YEHQFX6infX5evc6nMn",
  "key17": "5RdktdTqWwMWwqAR7wM4WweKAoBH616pgPq6xAvNsA2kSW25tHwHCqLTLBmK624Ttb5HUi4jSiVu3WER8m99Wd62",
  "key18": "5DLL4LCcXvKDi583vuCU2eKJhnRmeoBWd6Dz73JuQ8BAe6Hhy1erY2RssyHcpdst3tgDrPAXLwewpisnLUrCeLE1",
  "key19": "4g9zyDE6YdZAqrw24dEwgs5nrG6j41Eqqg4Si6zYoJUsWmZQntVnGAdhMUDR3RfP5dFcTM4bV9oUoa1gSNF7tuoj",
  "key20": "NCJdKu7bQujfDntYqA4GWVtmt9LrviFf7Q1iz8FKMPejE1HnpEdSZwEQm9YkzbRBVz89ViFzhFjXY3aZ5FzLFNP",
  "key21": "7NNimwG92eNeRp1eEPeJfjtYqLuRmUXCXgD4YQNtzZjyTSHsDjakfM3eJ1RLjqVwerNiDzqCEFzEqYhCKmKASNc",
  "key22": "3mJbg8z66VWSnqC3cCoQ2tVhqYExYeXo2SyPwwn2BRX78ee56cCvQJmZnNfNYTxwATgFKXYJ58vbQv6ZhudgdSqV",
  "key23": "KX1imhE86pvAG6zuKFX6Pv7wZnzZc7vhfDSvTdz2HMZC3QPNXH93XKt7cx7eiSek3hk7XTUbsNgLqXaNPtmaWwN",
  "key24": "6JUo2nXz9j4MyXEJNkV74WpX6kcDXcvqc9fNGH48BzNtb2LzV82HGFiSVkKphEhtku93VxEeiCcrEpRT5tDMRYL",
  "key25": "3BHr2ubWc1BmUhHxvMv2v4YBskT9XUuaAqG6mUbHNDq8wWmvucKV3BfzrkXFFG315jxoExJdAmr81Pi2m7sJHEPN",
  "key26": "52uNtcxduqpmbe8K2oauegm7C7ccKnA1bAH9sUVk3fAswsF9istMrZxwSiB8oMvfzgMkf76bkMvNGiC578XV7TS1",
  "key27": "3XQwbK97igfqswbKdj4frhJ7xoP6j9urXnhXjFibCeeBepjmcPUYjDRox9jfuYZDeCNgpJg3bfRBbpPzAVTNUA9L",
  "key28": "hwGTThMkRAUhfnypghXZpY6s4zpnGAJ1zZdeAooZx4ujYdJpp2Q15jReSTB6H3utuAvjzXARHat7UeHWDJA4Uv7",
  "key29": "5CHY7sKXamzZW1zr7rBwL3rJN9VDjm978SXAScEnMVMmvff9qX7PPPQEijuP7SjjNYjGDP4V6cGzVsX5z5iDzVkZ",
  "key30": "RCwqpS4L8Ky1Csw4KSQqoZiCNkzEoVZTGRr1hobzhAMTL48Q5qZLoPXt3C9e6La1pCxHPjQdPwgwF2xpqDcNqv8",
  "key31": "5GKvHSkUk9TNpJiz5oq2XTkiE6FVmeUcc5eAezRaiNBMdcjoJnrV6duTnvWRL1CGh6iixk2d5vgzcWzzmU36RKG8",
  "key32": "3ow4mczyG4htPc4P5ijicurNkGUfswvUuui3hcjgGtTkhsR3nUn1etWfsZ3vccQgtkgWg8YoiFSDG19PUHKzAudB",
  "key33": "2HF9t62LpojLVzX4PKVgUnwL9kn6WEkUtHSmf5TXxJBfp2rB3gG2SHvrzvvm5uLj2KtPoNFnrZMq1gUTKfAps8aP",
  "key34": "2fN8cF6tC6bz9uS4MK14mjwDkucJoToXC5y65EPUMAQ6MKdrWWHJa5L42XsXn2advAZhbsPQKF7oPCfjY9HjdeJM",
  "key35": "5px95EZ2NMFkstE9YummBAFJ8AFG4XwhNY4uzQk9MtSu25qNgvsHWLGVrfqPKN6XBQWwi62fe5u9VCnVZLaUa5kM",
  "key36": "2tTLeXn8ntaSFSSfkivQ7voj1fKAA6zoWMebV6vb3a1E7CWThb9iuVfLSWPsoX9Yn4a7cAJG6iJ6mtbZyyyMxHdg",
  "key37": "2x8Wz45b1xFdDdPUZPK1aeded3tUGm1pYCUH9vnVsbwtp3z8aUxKcjDUAwTTWF5V7jfsg3qsLwuBoX3ttgxbp1Nr",
  "key38": "54J6eDTc7SeCTcPoRxDELnL4iZ768AbLQqcKjoLrLfhbHhd8tcjbshMaNRDfXFW7FfwgcPhJvssv2AmNoLv9Pc93",
  "key39": "3Bj99YuqM3EzqtjYURXfPfQPJGaAJN6nvyrqiUVSSfiu6uxbjamccHLeT43XnEPb1bSfRBwgYQYxdieUtgsHL5qm",
  "key40": "36iKBWaHRLE2ro3iV2nSe4Ey293bzShkSZu1zMBdPTpX7sPqT74oqFMjtxhFN6rAuVtZFmCX5gVU9AmNK9oZzopu",
  "key41": "2dz7b8W467jc4epiGjZaeuw9uzS9WAxKk7QhvpJUKwqQ5uNu3Em8gcjQsBdX7B7LichHEWYXbEQMhetyDx4UqdEX",
  "key42": "4V2eowCWjYmMUimR69VaR48R2w7TxLK8HKJW5u9DCHfY7Vo5DiHt9yMgA3yv82NBFL7qAzz5xhHoJ2JzUBxP3sxm",
  "key43": "2A8KrYFKYZnEarWdssawaqpTbS8NPyj4kezWXNvc9GULAkSeoWNHD3rZPK72zMF1Zf7yJPaUY2ZJ15q49qXP6qi1",
  "key44": "4M5u9twijGooDNj3gjZfnbGEQwpgfdqftSCptLnGgxPg5fJLVhRJh47rv691Cav4g5afVhKHhUnwdT3cbox7sPS8",
  "key45": "3doqQX1JEj87Yi95pXGbWWjyTbnptaTUHnCk9eaaizCFY3gTo7g9ZrwYh3ZR9aenWqqwedxCcWYGTZQevQ8d5Fqu",
  "key46": "5UQm17fpHBpQZraPjHK4c7TwJzFufvaRCupe8GGL3LGaubGieETTFZLcxj1mBFRLh9xhq2LyNzU2GiBgHmREyE4",
  "key47": "2XEu9Q5VMVq5wbRVAewpmdjoMdTLb37tjiymHRcEn4kdgidFz3xu2tZtkq43hHSn7yePQeYDuEofaEvSZfypfqG",
  "key48": "3tp5G4Mm13ZqwpERfrf5huiuzqe9xHW9D5v5beCvfbWr7sYEuQSAtXip8iQZ17Xp7DiMyQjJmyipJpj1XaotFbQX"
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
