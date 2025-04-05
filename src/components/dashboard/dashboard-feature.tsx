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
    "3dansxkNLwx9c3a66AYZMZNuNQ2NcHgp6HVauNBvyBjRYb8wui2qN4k3hT6SuZRwxUxb2WiVZVAydgc8dFnCYq7N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NDakgQ1kay6jUcELBNCBXPRfSKP3VMa1isXWjaA3AR3ipHegGD24FSZuU3Kf4W3DWDiLZ4LFygPfn13SnpHsXui",
  "key1": "2erh8SgpLmp7TjEBGxGo8rB7cDnFpWZ7B2hGFnYa5wPMDyb9zTBZ2DQ7fKDRFSf6SbxU2fmhCRxNfawYdUEbKmWG",
  "key2": "iWvDbqRECBCPDUGBqTyibDoYZrcjCxViLEViHUgEWB33EeYjqxegXSfUuhratKJ3q3RYWQcEmYsC9cR52b8UL6v",
  "key3": "3CTEpPHNjTJjvpx9yZPKEEiJSPau1qMX9GuL9aTuCoDYQsMUbgpAt7CqvmUncxLNiYmdhGbEWxNjDhKWKRiszF4Z",
  "key4": "3q9pC3b85RYyLmZu2MiyC17GtvXuQzioLnkXNsvjpT7v1AYdk5HX9WX2X9XpBTcfzHCQsYsHAsnCn9pAPnvq1EKv",
  "key5": "3Fua5HTHCqLJHVPfr2iN4TQMPDwcrSmdaQwSZgUZwg5GdLpLvJzmJEJypfWLFb7QAqcaF5xfJuncwFU7TBfehoMj",
  "key6": "4R9KxpG7XQae4iqWjq7ykw1bgNvDAAcaBJhayMDbWhRft1DRYQeKRX5y6mnm4EVUJS2YyJzGjsgNN5Gci6mmzbTv",
  "key7": "2NRGxzrk3DzBXEVug2qnC6EidgW1hpwBeW9kAu9RaXEyNUaLx67srMnU2TfgdawQi9NkrtYroa6TpaLQLxjgSYnP",
  "key8": "4gGBTcnj252pJuHrnNkYKJ9qMaAXkkY4v8Zx9vyoQ8pF7y4QE1ByZMTvjXWYgZ8mACfyaksi4WujdLLDddcWCJbS",
  "key9": "4Am4Yywwe5tLZNFgowwPS3yYZ3cpBFWj2PGRbouYMLjjEFPqXPG1DRMo4MnnymAL1EZY5m9yYU64DoNKgpaeEfkU",
  "key10": "48BsjCsS7CNuSK7Tz91f9oT4j9mCqhR99FeaDanJt5xxJX3Tan7ozJbRt3Z1MBUWLC1QY4afjzpdmsEsGjevnwKg",
  "key11": "2iUPVjRvhEz2GdYyWcEL4Riibrx81J9bz41EdTQEod8nXmffQe3R7M3abbegFiJwAYv3xukiSCCYBANDtDL2rGYP",
  "key12": "4CMtFAvYFB5TYwaH4T9oabgZkXG4Embaoc1vp6sK3QkWALT2iCC8CkMYSKQ5yoXowmKZ9QWzGdVe5oooA1P27y8A",
  "key13": "2mWuGrZyGKdr1bDBcubk9ywwLhmBVCqQgQTzJbnwQdwt7h4HdxkfKTa37gbkurQD531bDBEQaD5xMShUD1FNXY29",
  "key14": "3FHi2LP7qXXGzNNEnTqsgbJgEdsUiPFmQe3a7ehc8fSnpr9rpzHYU17k97qQWhwu1Fv6vEtjYRyA9FeRN6xDAeVy",
  "key15": "4cZKqYXtrDQyahBK4eRVCk5zhrX6bASoh4jddRJWqG2cPPyuw1kzmwgHdHe7PHR4KK8FHL7k7a7Svv87t9h6KCXM",
  "key16": "goGq59Lv9spwW6SNKrhaxZPzevkarCnVgTfmvcvV1fkW9vcyPYEJyEcmUvhDx34ahMCzsDnDthR3PRR5S3b6hsd",
  "key17": "mrJcZJBY5uckXfC97iTuwaFvnPnpDaGx3pYPS5DKeRTuk3Xt4dunUZsGFmcDb1grJkjCDWJ74Tm19W1o9r822ux",
  "key18": "4HH5QTKxxDiHruVucrvjtMQ7DbLJbnEYv3L95irqowVSEcDm8daX7c4hCiV4ZFdzdZgkgvTd8EMFSpwXp5XffPuQ",
  "key19": "4P7DKXsKdKjbVox9znwDCeSyYUJMmGtTVJqKNknVYeXK4ZdcFmoLYVfnJi1Re4b2kULdNo4d3GgLDjRLQBX3vZ5D",
  "key20": "4YkNPA6tUnV8fsYFPDNiy3ukhJc6WMhPLRiuZ5aChHiW9adKHEkwMs2BCp8XtSoBMZDiBiteDum1MWSnnCXbgf3b",
  "key21": "tyHCaJ5PpwbJTpZAqoHEcGNHXkikNAeU3iXyV448KwbTLuwWe6d2WGmtC6nKLXeKKnB2N5pKe1bBJbQwmFyFnH7",
  "key22": "1VXHfXDvP7vXA2m1gUUgfk9rd9tg2ST7NfVd8cUAsu6y55MYsGsQMo7Xs2C2Ryt39CDfnj8WZa8K2y77v4EXSyJ",
  "key23": "3kYPq5Dhs5cZcP7X4RmwbQWURxu4oYdQ5JPP3bb51okmWFQ5yZwMAh3Z5aK5QpUmxJNjhLRYPG86cvvPzYoZkyQV",
  "key24": "4KjME5ZB5LGVsmZ1kbWikz3ahWWXgfQVtq5C11hSXJTPnrQYCxdw9HXZMXohQDQb9R2wy5ZdhprrS6mZwk3te13Q",
  "key25": "562yzDQkWsAcueo3MT1W4miLUjc3pUEMYFTkXDhdzDGDQkqAtN6vmQ4fL1tZxYPp84C1xdYyWxqkbyk3LAxVXqUu",
  "key26": "4QArhzpuown5QgviH9LPVfUtxGbmnchLzrsUi71pfhCxETqC2QqzgfmGeiws8UzSodkWkwENLdbo1FsrEXB2GQe7",
  "key27": "5r8gjFYiTi6rPMpeerxBRYgTEu1Sj53JjAmyzpfpU7qc6RKrYGDRtXM4ta9xsD7Xd4ngDSrD9ZmR41iyuaUWDr5n",
  "key28": "42sUbsJPcspeS2P1vo9RrnqccusaMxUQhZGijmpgp3sMF3LNxY5hNP4CBYbXSEQrg5wYKCRCpVUfMzzLvuD8EA8g",
  "key29": "n7u7RsMz1YmxJPDx5btym2cW8g9NmF6yATeT4enq3otJdEmTKG4A36d1SdjsrqgDTNz5vhCntzdRHhZTbuqdZ8X",
  "key30": "2veSpHZsMZafsmJ1EBYE287Smb9Mfar8e99LPbst2jiXFDN57c6cHXpJexmMCCtGvk644jJ1RgVpwwJHxNxwku1z",
  "key31": "AqFtZt965m3sQijVmqvnTnDoasN5drBsjCpEAxZYDLegyLK2NmCuoiBjwMfTronaGDu6yGTTXT5KN62UHQmk1oJ",
  "key32": "3VUUJ6jcc5aLxDMZEeUcTupM8s6DdwfYgx21rZ71vnngGbgnzC7ptuMqyCG2PpAP1pr9FxHFHyaEaJrEcdCRW9vq",
  "key33": "eRCDUdrdq1PfSXcKYvqjgx9MP6L2MaHoy3rkXRs8Uabc58quwnHMfVV4phHwD4sJShzsVDDyo4Z5JKxCcKLuwoZ",
  "key34": "2zySxBLqEcXgqYAiPcWKrWcTvEAH7phTSuBbekVdBzP5AQkU4EFYXTwkv5k9gw31ZfZoCHezYvv1DfKqqshMsNqF",
  "key35": "2H5DWYTsatrB3bz2WuXV2rYA1CqKwPYToWxQH2poAy3BRvUJ8LbWxEDHpdMbgCqexu5oVSuYAcGbUrvjs1GkE5wi",
  "key36": "36uZYHTVzaB5zQppMtWwCxfcaw6dhzmJMVTq9o1VEV9Ls7SuE2vyE9FgBE1DSwVXAZqqoHL2D3EmDmk6S4njzVLS",
  "key37": "44rr9qTL75MVSfaHU79kVBuDY9Q1oFm2BYzSFVwCtCmxTX8bNuLAwSMbTEWoE6Y2JKC273XcxvtYTTKsbo1wcN87",
  "key38": "4J8JaPTdNAx38HT3C9HwMr1jiM21qkvXE298UhCyqxh1HaUpQFBnt2KWn7TL6f42hi8CPPRzZq4p1icMimBQCa3E",
  "key39": "4hiwnGyLhruHgfQoCtMKZRmWbUYQ1jSqskU2WW5pWd6J596br5Ts5MxLWazdFqvrx9X6dUMXtu2ZPVxHvc7TvjU2",
  "key40": "4csmHts1deXfjqP4DwhqXNATfwJXVQuBgf9JSRshFDoU9i9oZgkBzee76ynXRCNuPh9i1wmSr3r8uUT7eCrwh7cb",
  "key41": "ZnphQbWCc4dCo9HFYRETcuPsk6PkHT2Biw7d4SY9tkFQZBvw268RteKcVsUpXEB5pkVxXU45nFZnHGQxkZeK3wz"
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
