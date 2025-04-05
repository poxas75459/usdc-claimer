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
    "4s6bCcaczBEkhb7fy8qM6YLvcFwfiVzH5zDkiXdf72QuEjmv6tkaQHKUk4g7PKZyjN2K5RJrBySRQgcAzMsh8apN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hTYDgFUnnhFoYuFFftxy9MbBk5KAo6H6vbHhguwx777mhBR2i56y7rUAWSsRCs1NCY4v3VHto6sFqhBeCSSkJA9",
  "key1": "Aa9mmEkwtYkBxFnSQPB8VDaJ2x5M76NkZNZmNGUtuau1hWG7Uf4h1caAyAVQKRjkPUy8pyqSw6dA79YPFXWAUKe",
  "key2": "pYeW4jWJzjRVoxYGCHQBQUiJoKZCMi6eozbbok8ZkFYTFPZRvUYoZ9QofpxHdxPZA1nRB5SfQJH471iiRdjhQPo",
  "key3": "WuhPPBV2bc2VY1WiE8zNbFffarr7Fd6jtUmGHWFebv5ezPBAUKuoJCG6hEQmvgNLzxPs5eB4uY3ut6gqVRNeUUa",
  "key4": "xupf4EcEwa7ygwayt6J6ws6sTC8dehT3WrbcmhwoNofLpnUWPe3is7G9iASXXeSxHNmGZMj7nUnr1XpmL8b4pvZ",
  "key5": "3CCGu4bQB6Rb9KT7PP6PJncvdaggqbkaRpkgio3cNEP5Ya8xH6tG8oC7depTLhioKJZr7SLdChepXDAjG6kcVojT",
  "key6": "2pR8G6VLjtnWyy4sojKBvKx9MTbFchHkKBHRz7stiiEL5qndkbwoKxp23j5uW7ELARoTP2iQwWqdJ8Dtxp8VTgu",
  "key7": "3tii5iC3DqTcfXzjf7VLnSY6fcnrSqvpRW6Uqv36JVs9JH18Qu23ebq38ipAEjzp3aV6shutijj7UfvgY8dSzoME",
  "key8": "2v9PBCZac2BjcW9QqCnW7rTcXDeyhn8b1xW61hugmLb6wxLPQkZeMCLU5cbVxqnsifcrnrcBCkQcD26x3BXeGt3U",
  "key9": "M6nHwvEnDYG3NcQdsGQgLdKyXdPYupLiGuL4UTu8rnG4JWsfbCG2VKVwLer7YbZBfa6WwtyAeSWmP4kb55FHiH6",
  "key10": "3zLyNNUSSgC5p5uVGgW4VzXpJM6UEj9K2ggMLSoT5wfvUPiSfz6chLttQqM2c3jYpuUbKyCQJKcrusMX8uDmVbfM",
  "key11": "3przYtbFcHDWrQGJwzDtt2WASKsiQ7bqd72pt7M9CGNMXXtVCUh9u3hDHP4ZMPV5vXyKBUGomKzQvKKfXhTurbFk",
  "key12": "nXsFdDcCti6YB1Z83oDmzfDDxpbKFqNL8bwLJhff4aychCdTqBCXaNaLFHm8JWULZqoVDBz5rrKJZYqGfQd4TE3",
  "key13": "63mSWn7iTbrpbSnMp6jzaqBrAkdkcGtqaXPVaR9eSDKQCWkQw7hEajGmgtU957RNef2EyfFPv2NchCpnoeCx2oDa",
  "key14": "4dEA2oW6pL7GKDsiaKHD292j2zxanRukvum3BAbzPR4Ya9snxoBqNU4oMb8KCJ1yfJTjBdwgph1XGexVad5BiMAV",
  "key15": "3PqmKHDWpiEByuxqvmJTSipkKr5bV1XEtJSZwAHwu3mzFfsyCZ41xXxwkZLfcWaW9XY8e27AYssf5ys2nZa3ALe9",
  "key16": "4eihcPJRt2M3aD9BogmG2uVbdfGC83umtL6jpRYn6ejsF1jFwrwXPxLc8Z6gUxE2R2sCW9nbNjP4v3K4h5JFtdMN",
  "key17": "2yAyRkcrySy3tbAyFD7ZKvxni5DbUEiByhQGZeZBjsqob7AfDuVN5mXFSDeqUS6b3FYSLxacf197GsGt4SKNeJSZ",
  "key18": "3tT5VGizXkTZR4onaKR6eDTNzS4QVJWR1T7wsBHsN42DnkPJzhjVgmaR3zazodkgrZEfPiXTmuVdt7MauHSxV71t",
  "key19": "LfpVtgwzoq2NTLFCL2QfvSVQpHSuBVNaEDb57HmydFCjeRqd8ffoHQy6Ztu4xqkWJ3RcFyukBtttVqiJZSoEq7n",
  "key20": "29wbyQDbDQksSTe8nPKnYQDWqqEkAWXbBif754MD8fXoKhTZwDowkMYfxX7wyyLrRTjGUHoZcNgGp2HizkSr1k4Z",
  "key21": "5YjFDWwoSLhL9aFHgmyEKe9HLKaFJJb5gABdPhD2rTqJVSEAZiLKNvR44AS4KyXVWtdsfnvN2wTeuwvAv29gCbFm",
  "key22": "2rUJKQjVCA2DGs4FqNRdmjjPHFbaN134Wqo18FAQ4qK8CsQJD1iwPfY7anAWVTo5DiSPuPedfn8AiiFAJ4TDNsvJ",
  "key23": "PfBa3NBPY3ub8eiif1BaMzUDDmUFUyfygxAYsqm8cnr6oo4Hnux6oxFNS6sjekGNSwEfdJgXHp7A4Mc54RKw6RB",
  "key24": "2zE9sCKCC9ikg98xJBDvydxJZrgeaZnrumH37tGVpKvJcxXETaXgXbWNafZ8K57h2kuUEe7yqu8nbDD2uBZSH1Gb",
  "key25": "5kLaqVFbLtdZukY1CuEBwQfb9MpvYYVKhZWu9wZCQvh2rZRXuM968HXug6QFsjX8KS7jMzzrSUTFfFN5EU3K6MHG",
  "key26": "4pLYU6JgnRZPGywivqNwCG86fwpz4bve1XJF8YWHJqjAbfztEkKLpnvfpCj8ReNoj7rzvZCyWjXtav7aaXLXgxkZ",
  "key27": "35DsSZATdiihVDniy5usz5eFLBsWbfBbZW3qu5RU8dvUaBLTjLN5YM68ytJckLQpgKJ7dUBGHpBqCpo3XPWXWU4s",
  "key28": "ABvRRZBDdW5SqURPa3BJYyJ1bQVNDH2PYWBXf9vU429K7pcjZTwVsDepDYrptQyYtEjW3XDZo4FnxMLNSoZxKWW",
  "key29": "2amHn7DgesbDTJSVAAL8qHwviP8zXB1WRnY23vkcaU34TbsSDR7U7aVhjC1TygyB2JxTBv4dYZyhYTN6FUZJbaMS",
  "key30": "55HxbHqRphC74YR9eoxMrFeif4Z2LAj7bmQr83gpu4RY7mAfHPFtnrNFRM9m4VNDKWib9A7QhgzgYdrRLQ4N1i1c",
  "key31": "2DqRXMSd3ek7YrRDE8E9zjv4dMo81uCUteDrTraLK18recN3JbiMxCjboDaZ5iXbakezyavcnjDuJRRpnPbQigR5",
  "key32": "3h4WMxboBNUGegF4sBXPNemv5Qzch1YbrUatL9MEyCSidoH665ycWd6XFfEggqhEJpR63V61jJxH4VTSWzBtHPLz",
  "key33": "4c9JqSfVAd4rnUEVP3uUECHEpTahbjarRbEdoz1ifjTuvQ4HSxw2VUJYnA2HKZR7rV3SJGjHgXporwWPg1uNJzDD",
  "key34": "4DfN1NVrfGLpAEXosJ3TzaqHfAX5stpPrp9fyqYi3PcJBeSwrjPRyHMx2AznmuxqxJwJ946m64aduixN9hN9bBAK",
  "key35": "285dFXrrCw2LVwxE7Z5qDwxys7s8VzcHUib1KVPUdFizexLyAaF9GknWv3JvCTYRyQmCGSq8dDkHHxyHyRo1kttr",
  "key36": "5BhwDvFb4MnKkT6Sxj3WAqYbZFKeLuVCwDPyBwLaHJiNsAPk5SPq4XrsVAnmYayopHs6itMsawyVxauaYdPpSUCC",
  "key37": "662mgTtYNQz6vBuPD7QeoKeeAFtQqyMrqabVbyaM2PPzp2CuMXtRXJjY2UgPmK9ZVpZqWDPzjzyQgVBVHzExcA4Z",
  "key38": "3eEtX7Py2EEsCiEtzQHCDe8DKxmqjPt3GwtEvfXYzXbzrKgPQLBQNC2UdEuGqL5pxL15rMGCiUfPjLhobtYfUMkr",
  "key39": "3vQho4Hs69VSjHepNgVsgKS5YfZiZw12UL8RFYmiqCQtXkpGH4nG3UNNXEhEmopXstKXJGdLYPrJLaYqNzEsoFPP",
  "key40": "GMHmFqsKcGRpKRtP33QWm86W6Vz634TGzfFggFLJ6oWioNDKxJLpTeSX8REv5sQPjE37ZnQ4Z5sULfJLc2DUxbt",
  "key41": "4Guk8cgp4SWp7FtUAWiAPptKKkDLv158gv7hMTaoRMmV2Ft8KEWw4bxr4B4WojemRfE5F7BqdwEpJvRx4WuLhxQA",
  "key42": "42NFUvzGEyC53YG45jXVHoynvCZnZu3pBWbhEJoxZtSBT54gsPhpfbnwiNMJA2pjdmAzeTf7aTscfZiuAbkZM8at",
  "key43": "gFdmMaKAhaD8Qba7SGF9eYFMH7j5h4ueSoaEHm9mfuXpNWEMknPAXLTRrSdSKSDbYY8A6FdcNfjW2hPhWmPCPwq",
  "key44": "2rCF8md39Z7RZ59sCN6QVijq6w3MDXqiDpb87bQL9iAmma5Cx2YoNzJGaPH4exSLHZYeanTKMJwZRxHxKs38gt6K",
  "key45": "5Ezc9GqusXuMWS2ccmrMc27KYAyWDKDtwn7BmkHpSrQ2G8ssMAKxNQBxACbjiNAn7GK5m2kvp4RACjtM3cFNPwMh",
  "key46": "4VUYEA83QYsMXhQVhSkb7iCv84WKGroMxJzqtsUY3V3q8XdQUw2fjYBqgAqmCpZGejgsZYXxkL9faTtuPFP5uD74"
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
