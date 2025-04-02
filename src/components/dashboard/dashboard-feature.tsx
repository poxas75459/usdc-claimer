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
    "azqBTTjWS4Y6GCRPwpfPhKbZw9YPKKe6T79v8acC9ddBfrSz6vMvSzZ5HqYZr4vZM1Ze9xWnEq7Gimdkx9HpYBT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aGUfJB3c2LHpn47podNJvD36XF9hgj4dBH5MZCP9DwQJvHgGLifnBQzDbtGLFASss79rsLY3QH56t7mJkkeaUDp",
  "key1": "vuS1WNa5nPFNBsMzGoABiMqEhh6MsK1zSyTtpLyjQL4v3SWbPQG36FYacBPwSKvH9abLNtLRCcoTLxYrURaaTik",
  "key2": "4iExvbndoDLLPDKUNDvRk6jcyU5yktBw2JuMreWPVnfiNpMFiC8hjBZSRjkC195XF8K1Sc7BQWJyziQrMxwT4PnS",
  "key3": "2nPvuyhfcXoPZLakS665SGdyU27YBFUbRo6HsD9RcMSZ57KwNimm8XvYRUkvuNbsxrxJbhuLYKpPSeYSnqEet21",
  "key4": "3MfMY2K1nQDC3Ratipsxu9By1pkyT6wB11tRH7LiV5m2gJjMSUZ9P4kykJGzZQMHfFaui59W98Q7QmPhbexHEDvX",
  "key5": "3jaeXfR71HfGx55dDiyehJk5hFi91P2m2Vj4sidZCKNEcf3Uzd242dXFBcYHQfbLqChHUxWZkcfpLgnH81EeZ18W",
  "key6": "T547MPYx5ZqejMQ5RyVZF3dtneLCriiY6x7QDMzziPYFpvUpfD3tzK61uozPXVztnfMQRkeX7saDHtfP5jTmbZM",
  "key7": "2UQKpMSwbgR17jffY2Gy2QYiBwLMbE79QUcEqjVEvBKAp1DqUzAAuKAY3Zvmb7v6Dz7Zowqk2yLRyrd2Y11E45GY",
  "key8": "47QKEjLkQG7vLoL5LXLVhEWWw37fBYSC1qzYcpoJgdpjf6pLViD5nLHLvCqNWGdH6foQw7DrjuQ1iEJWVPktnXaG",
  "key9": "4daR26ipRNJnVxEVi5NoETZ8fMj37KzdEGCfptHa8bpbLuniw7wC9BobGqpQhFBq1FiAYiMqn4ySRkQorhkWJPnG",
  "key10": "4W5Pk9kQoApHU1bGFvvqwEZV73YqQh8SGSrJgxSH6qgcUM7JgCsv2Hebef4XxCAyzr5AuS2daDaCqvC4YEMLmArM",
  "key11": "4RbukDr5PWD1CG5ZkyeN6NmTmHgYhz6AZ8xAksnzG3eaW2bK2n6oPZrBrUt2NjNAh2om9oWnawYSWQ6GHyF3jByU",
  "key12": "53piFYfrLrou8Bv4wRuGVpKDBNR2ZTyjDm4G7eAB9U2yjWFAAwcw6pAbaxMxib9mmXE7Z31g3nxdKvZDMScyTf3C",
  "key13": "4J9ZgPxC2zEEbyFgZTKZEvUaqq4XNgDTDqHdFnuYKjqYHNCxkyqrXnttK64zm2E2iFWP8cWXbhMs6oVGtMRtABt1",
  "key14": "3eatEgxP3X2h7sCYHA7QK4kXwtn4qNntyg7pHibcCjyq4mk2gxuNEpRdUKkmQH5pyPtN2MSvaKhuWd3cBMKLFzFX",
  "key15": "4hAfPkrtRej7NhAoG9jQhRud2LdQad8jR8NnAopfJdSM1MzAfbTDmqjtMd25KsyvHMtha4frj8yHC91fpzbYdqDT",
  "key16": "2cDid5fEnno7vHFEXWESkVUBpiUqyf54Jvsn92oBuenWEd1ZWXAL3XhoqAB1AedmdeE8nejnPSUdhyiCFda5dra8",
  "key17": "4tkrdBZTSG55n3akoJ1CQKvMJNBuEA4B54v5qB3FaSvmHsgkqQYtZS4k1kqWo3sEUEN85ZacQKrUsXB5pWEXcqX8",
  "key18": "C8PRicEDkN9RyyshUt96qe3wQEBqw4yikikDeWecPS6cghCPgR5QoqrkggfRh3dYFbXBnhiFtRptARBM7KraV4s",
  "key19": "3byVoguBPBABf7kFJHeSUUeB65SNAnZb8hxTwH6t1ZZFLSu3Eoukj2A1NPmEEwTWaePorCtNVmpp4EmNfCP9okRW",
  "key20": "5q5hzmVH49EqHSXRTN85r5hGTs9fmPxiDQvx6jzCQZCzEU8dn8f3x6jWefTAfsPefPyUPH3BY3eYMK4q77QvuizG",
  "key21": "61KMrCcNrdaEuMRpkSoCkdupnRpGMh1gP4atQqC6WWU3wf7oDPQdcg1iqXeMp6qMJb8VoDwe9Ean7o751TkWuCpq",
  "key22": "5nuoBjkVdHFRhLwJAVeMBUc38dQJjReLMtioQ9eC59taAhuWUJjmyHyuafNydWB4MoZVaNwYm93ct672sTzbd287",
  "key23": "HuEyccT8pXNijpjDCuinrbMb6JJvatSaH965ZFYsGZY4E8hBGogvDexo2AxpnKGJ36eoqENtRRN5jWWpYD3HQQp",
  "key24": "5CB7tLN7BqyWxkMXfrT6jsd8biBQs5e3UUyaSg9mKTRYDM5qDyHJ1cYas7quZhoPEGanFP36wNFfTF9SvHEgQGxo",
  "key25": "7i9iexL7Jdz7USGMCHWq2gqruKHDaDtwbG63KkGoQDpYhBpK9zCmVuuDWzFV3WUGj3EgaLbdsFrxkpBEML2Suf7",
  "key26": "3Wd1nnWPAkzXicvkAgiHT8ALKcNeuyMdWzJbNb3i1oM9y397H4JYFgHzQ6xotJwLedceZE8Mdk89zUxXZ23v8fVN",
  "key27": "2UP1nQ8CpDfy6ksLUXcyg9ywZsMHCxabU5RVRSGbYe5i9raEoCcXfJK5ZeZC4w5F7Yjf9CJiG3MRwRQTnivgnAhv",
  "key28": "sKEgz56K4E2CnpRpe1SXpBYh7UN8MBPwtAwKT9r8bEV6KiKxuzAdrAAMsZriEC7emNP9NjET3qykbVEmCiKbNwK",
  "key29": "3EEzhtXfW1uFtoRPSqUioPP4qvY1zGzVHLqRhB9QnrsfycvLuMpDfQyHuTAyyeicH7BwV5V66LSmGc41Y6vx8cJu",
  "key30": "3ehTgrLQ8UKN6iWktNG4mSutEaR6vGRmLvUxxdmiRi5WnkTTv4bR9HtYEkzsSLxgXm32BffKrGNWe2TREsgxwqsZ",
  "key31": "4NbtB1UWHpb6R2enZ7F5M8NAQ2xDf4JvVauMBCekETSRuq3NcKk9simHK8jFFTPN7wmdqJVVsWgMfwH9eMfno3N4",
  "key32": "2xdZVL3zvamig7NdbtdRAgR8Lyq9FvSxogU51FJhcFuiG6QAoeu4TeE3Qjj8B7f9WU7GfqALKL619yZhpd7v1RC3",
  "key33": "nCFWm3WtcbnMY9mcDsZpkB2naGYM46bewd7eEKX62s2TARv3SWxYnvN6b1oyMRLmdP8Le2y9WxhdZu6nAMsHjur",
  "key34": "4KFJpuCULhHf1mCWiLzhXZav2ZphcVZJ4EKFks4BBNimvf9r9ZpD72J2KpyYXkZVcFdT76QadPy2hMwKuvtUf9eA",
  "key35": "2MCBHp5HBhNTQm4WDzCSX5NVquirU8wMrXMXkUfJX6YX3z7GPtH7kkQuogYJGd5jLcwiJrYpTMzcEk3xsnYcRkdg",
  "key36": "5JxdGKd8W2Wqy2NrVXdAzYvzN3PvPQ8UNBZUYD4gRZT8V4CTDdCDXWEpyfcGXjZeTMd6F2YMKHgogqipffaUAYGj",
  "key37": "26dVNCpdRjmgNfy2iVAiYEZrjn3okgBhw58HPkMsR6cJsKBr8rQZMVe8tYLyB2itJ5J7w8ndcw3fRZYK4mrWeNSi",
  "key38": "4XmdYQ33qnTxKUh7WHVoCwckPSNWxWx3TJvfer4kQ2YvawXi1A4p6XDn1C3acS9A95L8SqDGCbQHMQCxuUR6kKKg",
  "key39": "vPVtdhvwej7ZEQJbonquNU1zALs7GbctZ45RWabN3xdspvNvy3ca5NAvK2Whxag61n9eQvKo8a6s1Ztv6DDCfFH",
  "key40": "2DdtZ7w1XRmKB3LhWkBzqtNYRirwTcDmpR6w7u1EqM9WYZnKiABD9L57MSZcfcqPiVUdoVy9qgrBai2MBGoRvuu9",
  "key41": "31z3u4Mbc3vqPP6NWJvh3kaqkt3SnmcFfZgq6WbjC36tqNdoP53YQzg72uR4PVwU8b668gjRTBJFoY2XrRjUzF68",
  "key42": "67eKGghGqhYrPA1i568yvVSqTRFRiyk63KeVnGtL3xBweQcHm2DpU5Dpm994XnwsHJaKRpbzmN5A84qosC1gp2ay",
  "key43": "4BYkNVGvhXfopJ6s8ghkdQLrhc9zv9Nam1GiEsQChbyfaSmSMEnFz3Afn3wjN4Fi5kgwUacgyqY2DLpT5QgC1EKT",
  "key44": "4TLhEhuxjWr21VCfE2BujiuDanQ4ZrKN2p4pKTbjZUs12dsyrkwftxrLHzAs7w5oiVPqhkzvn5VyupjmaT1dLnYF",
  "key45": "3H5yxQvWGt9QJypEhYzyVAB63yZFoshsT8BCRYkD9EHcy8nkRRNfEPjQw7boCwRnmQDW7JCq9xMFF4H4SYwDW6kE"
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
