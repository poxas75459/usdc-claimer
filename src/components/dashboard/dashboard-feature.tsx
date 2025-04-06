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
    "4uEEFTkw1aejw2YCsV2AKwNGR13uBLYaVvifuEzNy1Tod2kGtTtKGuDwNqrHqCdg5nGdfbgtTMDtdnwHfeAEyfC1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pridGHzPZiJ2oywN2KYtDQj3q6t4zjZbvMYPGPi1egS2nj52m8tt7mevZFri7DvsamPmm6jrcDVF8B5Ka2VNCLN",
  "key1": "4RCL32h28gFJQ8d5BicPx8JYvLKtP6FXwiyHdH2RuUFxL3HPdYmqxCKEUpNBgmUGiHrPYarDc3KsxUn2S7a5FxSZ",
  "key2": "61yX8sDvKp8CYKtrYCV7JC1Wk5aYhMTSZHY1t2Fq6k2UCuj26nMV6C71Wq2ywiNL8PHbumcp1vc5Sy97YP5uzq1f",
  "key3": "2U9GNPtHNusrX7iuSnqxx96a1yAHC4TGiaNFQcTBgMV1rPUkSTnYZJgrdv4L2rQ27Gcr1CUQo3VKzjudb4wcwgyt",
  "key4": "4vp7e9opQQAHuAo9mPdumWfvwytwFs6QgJJFGXtEiKFdhf2obuaqWrxNoTst5u3w1LH3YbErFd1BN4xQD7UNwaDs",
  "key5": "nhH6g11jgyUwExKQdHFspHfqL6dNeU276EGmhnxujrKjWe4ZfL7RCrtPZvNaM2s94yYr42j1wz2utMr43jcs4jf",
  "key6": "3rPn4Y8RSFRhqxt7uozzZqAA5DzGrsfxddM2tVQAGtKREEQSzfcYKQ5WJ14jQqs7sp9giy2ktNRZQ2iqLoX8P9Y8",
  "key7": "6TZAy4zMZPjLo3kZ9mLJtoq6YeaEZhFjwLF7cf8kAYi9eVcgJLWAAhzC1hkzmD13jp95SxJCNkAHZPnwdBGM57d",
  "key8": "4imvJsYYfKpTT42HyJtCHsoK6whZWjfsZoJ8QtCCamAc6aRZ6rCGPbxEq6bUF4FdyZByNvyN8aabBApDZiWV3Fsj",
  "key9": "4Wp3y1LUyzZnFBNYRoy3Z4mSSbhwLBh4hHDZmAvPtk95yekbLkhPJ4hPrxAWCFDcrYmqBjw5ZeWsAZox2incuLpU",
  "key10": "4bGXqquphSHdrYuRHE1M8uQBaNCRyWeGZWGh2Vt1zqQzek8AwaB5XTxQQynn5DMQfsZQSHw6KVX4BwRtEnqL74Ve",
  "key11": "59WzDaQg2kyJM7p4pfsysZXHzcMNvLGg3r82PV9svZjqXx9gJpsLSJDY1KpAgBxqNuUZkpCqQTcPNfmPMtcMLHac",
  "key12": "5uQLFcyz3x8JCGwe3eMDZjYE8pUccoXm3mW78RbVCnC69tSxTcKWXhEdMg3DX253iYPx4ZFaA9v1ZGZFDfbfYkDw",
  "key13": "3yrbon6kDoX9sR7zS2qiguDxyjTTdYNusFEU8RL3ascSAUXYMLnoy35iVNW32dfyQka2TKtH6CatdApEa37HwHXd",
  "key14": "5NpRkRkZ6syvpVFyywtfbJCZNTDw9dX6VnxvgitNxEERxmW8LEiXjq4QmgbRMCNeNcK6eSUU5wWVU68rK4rHs19A",
  "key15": "2rVEEzKb9T6SkHLEvii2jPma1yJWmVNBJfpgiMuaoMR4Z2v1ZUFhsMmGDT7aQgmqaEEfQgygLVqp8knpHUMh5tmq",
  "key16": "5YvdJ8wcGhG345gZn5FBe187iRQw8y3vRtyYAP2vWKZpLko5ZdpjkfrTembcuqNWFf8NRT3PdgzvenwiFjsunz5j",
  "key17": "4im12NwMzZpMbzYHT4vrtroa9PctvndtWcWV5xUY1FhmfuXfSfxRAHbqovBjkJMM4LqzaXHXBVPWzMhfKpPWSydz",
  "key18": "4CWXYUBqmxKLVy3WGC2fQdWiRHbRQWwZZwwuC96ZocWhKGo8aTTLjSumtKksp8Hu7Zv5zW4WawJ9AbHnpkxSG3BR",
  "key19": "3F9F8nTcq5VmWeijxStp7edNQRXCB9qJLxq8FvZkpn4tNuqUn1yuZ5MJcpGnni6RwCSz1jLwFCxMb4C59dqGdeaa",
  "key20": "3K4L2yXk7gWkdfkM9s9adYCzYPAexKwfBpoxNwtcqEcPGQjButwbKd5oUyN88x9D6o47HvJVLBRMTGbR5dYmVFQ4",
  "key21": "382zCPyGyayNbNbA7tg1ppTZAsA1VNxsVDsDRCDKSKxC9ei5srNoLBZcdYySzHT5kdUdUVBrf1RrVpFWSkanAn44",
  "key22": "3MHvvZmQabkAQfiuy97R8FmRS6PA3cqTwiz3eNwzpNwHVqwY2p2MjaywzStQRAngKyeddTGe7DqKX35XvbRBbMFo",
  "key23": "nocnMWEkYC2FqJxPatCQjtf8tv1qKaNmvbF1TVEUZFsoeLcgJKVtA3kmMMVioAarkAKFpizPHCpBz3LRxbqeqhH",
  "key24": "aCJkWFCNAUaec92gRNBJK6yXUinDk5U4Uk1uxFBsSF51xZtTDsGwMFNMDWdw8N2XiYinDHHvENoCSfGZXn7fK9x",
  "key25": "2kKkdzBCZz8BtukYQ2aCYHw37xtT9u5wVG4v28BMyYsxsy6WQEDCZfrUAyrwJYrF7SKYGc7C7oqcverU3LSL3JV8",
  "key26": "3iREygadtQJJFrXoijVbY1H1Y2YhtCWN8GWWam7Wq7mW7kZksTze2rwyNexNMmEv9ndccAoUDurbKcy4RQHZ8gm5",
  "key27": "ryX4AUyuo2hY1zw3EUjjR1iNoeja8ba45YK9dSDHK5K6mS8ggp5T7wYzxB7wLpfuHsxUgrpWwCTmg4oc6doBVEc",
  "key28": "4BSLnusMDQPCBUMhT6MMh3B7iXWvFHvK9eJHq82oZSVsCS3jW7W7k9h9Xi4TWBcDrM9upGr85PLBd6KNXexEtNeW",
  "key29": "2tpmphwsD5fME1XfZnQZ5nYCySdnd1TkKDZFV8hENxbMR4hCey31vRJHRCKyKSKMmBMHgnpRCY6aDFg5ML7TqGFP",
  "key30": "3xS1aTBcGapStFQdJ3q7P19FTM9EZvUg4h87TxApwrADJ4hujb1GaM31m23unfLZncuqJzw2kdqKCyoqogsURbnv",
  "key31": "3qgqs9AK5gfBTi4yo5s28B9SrZothS6Jwr5hc7mWmfzdJgGedSjDRBHJyTTXYdoTpAPYdcumNPYN4rLcCSvXamr2",
  "key32": "5g8WPznhZBiZBQHGZ5jm8SZevgQ1JkhtzVnUGt74UTaHCcZRAB2gLaBXEmnsv2F3764u2befnXLu7jg2VN1KR4v3",
  "key33": "1D8o4NA5fviBkyFf5QkAcpupCPt5oC71wWzvP3oKJfcjWugwkvNTEERXnC66BTnY8qLT39tPi4rWYqGBuxVryQF",
  "key34": "5BbDB2PW7JbR8Tv1NZW2RLEfqatXzqXRY183GRfvYiZfLX8pT6kBZp9WMJGg67c44KsWF2mDb4kQ8a5M1VDcws75",
  "key35": "5Unx7Gpqj18wJskp3Q9B8vt91gRCyNKXmMWNn8zMdUH3EdWPD6YsebMUT37w16GH9UzcBSKH5ECSVmRwvj4LsZMA",
  "key36": "5YFXtDD2xc3FCGSu2Hq26JDGMvsDWRamNFUdGVvzvZkTjKLZevWTnrWvZe5DxHnJU4hkFXmVge3wiocpLF4RPLJw",
  "key37": "5C54CZtRsC8DYq7oQdaWD8bhyARvMwYNbFREHaKSEJZE9tgU8VdGmfnfZPnkest35w8fjqtGyvvwaozUvsxr1hmy",
  "key38": "mC7JBK48DuzHW8rEt2bFJganP58CUSBpQVPofUnahmbnaQVqgcSuXz1ja7uLEBEDnoJLtTETC4hdZYZ3SMuemtb",
  "key39": "2qY3oxyx2pAjuD81duvcNRYMGomAjmRmPUEJ5zCUToccR9h7ZrRMPHUT6r9rWon8BZ58c1YNwC8AZbMArWBbucjn",
  "key40": "2TMv7GzzPCoRzgiXm84fgs4MRG2ensSPBmgQpbMKYjj6WdG2En1jF8MjGQNg2tkc26BLoaHoKLyZ7RybsPdpWGKY",
  "key41": "hDJwf3UhvBksiMj8Gru3WUFPDnPrRtYTzXgKBvbxPRHF9bwbPfNrwWTGQwk9MvrcN3xsmCjeu4Zm5vqH9zqxQu1",
  "key42": "3UXfS4eVK3yKzircaPkiqRuTBwwBtxBi8P7PgcN16vwcSUPPYwS499WZwsWutAxhmpXqcftchBq9h5MW2rcTdRGh",
  "key43": "3VsKXxXX9xuCaySL972vVUoDd8r1AUQzgoqTyEmFrn4PeajtXKCzivJF66gX3DHp2CW2ZiQckNw8KZtwgQfQv3jK",
  "key44": "5YwEf2b74prAEqTyo6jadoVyRS6nYyT5eZ3nyPxzdZTTmFWXEb1tWpcv2aCoyEMXUVtHsnBDxLZ7UHtrUqrsK9Rq",
  "key45": "668GmyaVDpuu3tJU6wzxkbiXrvQouh1LanqSGFYQGo4EaLUQdKyFZhH6UvawgKmuFoBbasXosijCgjioyp6i74fo",
  "key46": "5H3iWKFmqs1e6qSuFj86XaubwdvLYhBbQoZg6JfdvsViMdLErbNAGzSd6sXwPPA25ZswpzVwyhkdp2GtJ6XTZxuB",
  "key47": "57sk35EPFcsHgKTA6Pdn3VVp7LeDkehFixCwJLouZREF8RzFdhTuB73HtD1BCXtHTBZg9Ba187jrpshuccYyFaQL"
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
