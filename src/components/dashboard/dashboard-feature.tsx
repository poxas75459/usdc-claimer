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
    "2TxxHrquG8yAYe1NKKWCbnCBNvY8e2qM4k9nG5GvkZbuHFafYMomiu7oouua3SbmjNxtKpULEWBJtikhh9mjkZaM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mURF9CpvKYgf23FZZ5FRxaZKmnhUwt64feNaxxsB6ngQTDYr9stDa9GodeyxLTtTwq2ZbYTgnDDgm3eDK6U6sSr",
  "key1": "3Pt8o7ed7ZfVHH3Nv27XmWVvHnXzhP8BogVh81Nf7myfgDVQtCGYomv7xeNFigRJBHMiBVTdJew2TKeqxz7uPfXo",
  "key2": "4winFcLMKas6ybc1RAR8cKXkRt1Lf7b2JFThkHjJr9rEf3Jr7hHFdaJARR5TxjSsUHMXtpwpKJYf8NrFubYjEUPT",
  "key3": "2MYZffzR1wKztKCG42CCpNTmpBjaQYgzqd7j1twYA3mh7xuQHCtRtv3pGk51fEJVC3DJhi72Aa1cwvTbnT37WuKY",
  "key4": "61DdW2FPFjFxswFJbmxkv9tbHZFpj4J6ZbT6admk8SWrBG25uivXs11syW9usFQSrA2Uckib49zw3m9ZNt7HzPXQ",
  "key5": "5NfnBQzAXYt7UUpKyjWKMg6vyqaUjVF79h9RxxK714XQp7PAhTNi8wa7RpWQvdnGXhpSgE6hAtzARb5TTTncgsPj",
  "key6": "2pRwqvA8xiJAywg9mrFN5Zd5SqEwdSHwdCvWcTQpDkCSxawAmeRAf1kSCYZCcdtETJGFzxGuTffqiEi69jbobV43",
  "key7": "2qtRGRo9k82x4btrxHV9v6iLbus7huo59L61Rh7GLXk2h5rhm1zEcSjUG1hXTahJKUizWonPDgXodquNrRFuGYLb",
  "key8": "5PidiJi3Xi3eoFodhNQ6ecfLg1WFWFKbjbR6FSzKQCKzG3Mtg8p8NbuxCi4aXX4aP5Ps34B4Br8oqhsRJjYLFv4S",
  "key9": "2LnoR7PpAk95LAa9maw82CZyw6RyToz5GBXXs5U7bRxH3LLcwy2bKjmjipWBgPGYPtEESeRrnC1hjoskR8eHmYf9",
  "key10": "4QSq3wNct1vVxs7WbY6T5RM7Yv7vjEBEFkGUeSYCs2bfHwu1Rkk9kefvgy6YsaV5UxhAe4SyhNvVP29nXmtcZKNm",
  "key11": "5FJUJfTBg7U5ks2g4zDgtqAVC1kTHzY87RRri7Pv4memtSkX2761zvQgZd4cf5RoQcqht43btnG7HXWkR1BFmg44",
  "key12": "4GRK2QHmystUXmygFYDUQ3bJFgSUAbysb4QATEojVGw8ymaKsv58vERTtqBEdqza41i3tWvHJkJ2xCRYMihEVyUR",
  "key13": "35CaCGyot9adY64xuEFzgpQCnb4uKXxJejFegqWxBg137KpQ3ABbybx5oxvzJqJJiWSqmpqidKAJ6deUeYuFPYVk",
  "key14": "2g4qVPJvZ72rRxiHLXgf1SheAKPRWcibWKB6i346uW78ButkZXqpBMH9R5dUdYrZ6bDaGhy6vwZm7oHF2RPAfRNG",
  "key15": "4PR3wMKy1xkfLze7cNYwH78wWun88249oSooaCibqg6A6f6KHhBKHrpPGNACp6TBWqasw9wefZSatXVoNCGdtDNr",
  "key16": "5RYhmNawEWS6buiiyF8cqCMimCdWRa9Aph5GXaWZLXoUUmZk1zHhN9e85CBehpFQQw68aw7trAyogTD8eGAuVfNs",
  "key17": "55iMfJCTnMWMMsgtbrpNpc89Fc1F8rZYoH6MsqZnrcmH9FvBNXny2YHMshb5tQ8iGeBS593YXXqrnFZCWdP1132s",
  "key18": "2WCYw4oCRm4Z4emmZ1CWCR19Z3hQ4kgWR9Q7PtWp5RSUavQ36P2ErpQjxv1zhcdfAQTieUWgF3cDW1pYuiBimnnV",
  "key19": "NbYaHu7si1AdPHUTkUBVL2MATe4K49JQkP8P9Xhtuz9txjt1y268x3ZmwAuEfYD4mCSZxx7H2hjeJCCAZgLMysC",
  "key20": "2XDzANa9EZRh6DRqEaMe8tG4cbEJf5meFuKf4jcqjgo5MGAQC4baDE6X2Usos4hqwstsxMEhci8TQybJP2oCn1Zm",
  "key21": "3zEB3H1ZNUwJbb4EXvYMGeEb3BazBKgzf9feM6GFWqnkjmKSt63mysZPgd4Y4vMynJ4GLKQjF9vCkhCjk17TcsDv",
  "key22": "6ps5mKJs9kSV7KiPQq43D8n6a5eQQtABdh4R3wRQJre6tMk5NZDzfvcc2WbF5ayBJWTQWPm89HeSxmbx5LLtPuA",
  "key23": "WtyCBZxXQBJP9kbDPqYYo4SnAbxKyXfCFKZyDHTLTvHY3HChjC4SARyG6bHpxcJnJD5p2c6UZk3sdekCNq3pvHs",
  "key24": "3wJ2TgNkxc7jSV2AuH38PakZvYEKZHrWTvVA89NSKdTKuQPiyALxWwPcmfpftqfpk9yw22wKn4cLwoS8f9epapMm",
  "key25": "49BEz1jqXQBFaUi4KJdkdCRstqF7mHVMYp9Bsp1mQeqx7PuqcKqr3vyW9pNhCw5SvDiEkyHLVLkAHSq9UBqt6kaW",
  "key26": "2kCYbcRHLuEocjbb517vxPrxmtM7ncR2zStJJF7sHxkuaPDHj41rubVwFtNpAGTSqYYuLkQfCnxf13bYETNWYGQv",
  "key27": "V9twKmwJkKQQEFBFS5CNxXPDPyiyfR5vUaYdLFi2akGVS1k2zreWfpxZQiGb9wjei5s6v1YhoDN64tMB9QprGdK",
  "key28": "4F7XVer1hbvsV9rMs43kgqks9SEjMXVLKwCnWwosRQC95bEV6ADVTjS5ErEtYNep9u4J44YJic4GqUGQjpaY2ZJ",
  "key29": "2LvMvKkDGkpzmYXLrc3RTnKZ3sHUBGM1SpJXR5zKJf7cLkdiwXwaTFjS1WjegAZbtb6BkMQLV2agc7xbhyZWxkF5",
  "key30": "5BHvCm58YCgkrqi6Juy3R9QiKjJuWjTirjFJvLJbd5re4V5hcHK7tbFBSY7qAgKBh1kAHyyAKRtnua4m9PBZ2H1u",
  "key31": "66uYZL9ebprgxXHx7RzeUqEG4wwo8nqbZ4XKUEPH78KKU2gCWtusE4ZTAJJbveiBeiauBBBSzjpeFCKTYZvNkB7b",
  "key32": "5Rg6MyYSBf8hkAaiJT8CzknNhu41zypBNhGZFxPmNcgn48mEDPTmg72Eqxg3AVSCa1Hvs39DNi1gH6d2kgJv22RM",
  "key33": "3TNmgrEp2vxp8DBiDFxYnvUQizvYTvKLaSwHTStkNWf71NJVXxLVF4FJMDsphyymrzwBUaDKb23yMV9zeCxLvY6Y",
  "key34": "38dyLTTsY8Znb47hQqszFQNUP4hpAEBP9BobULY46F5f69wLiCyDNz78uv4dQawx1qsfu3tz3SuCAjWWU8vPUw35",
  "key35": "55ubyYGsbQhasmxUXE36gpV1eArrtzdteXzhTNTS8wGC2JpeiPqe5yGAWrc1hFHEnfpaJktsArLv8PYe44ykZLcn",
  "key36": "jfBdRmdkkUmKn7XoysKV2ET52dZ51A3F7EtHDQk8di5gJMAzLcfww7cqvr3joUUURdupN4gjMZGLujAXfZzAXJw",
  "key37": "jhicH9ECVtoiQS3WEenMG1xskrRQg4TVrLvNHcQLGmxnfZPBp8zB2y5M2LQhAqd2iyHKi2ZAkkoavccLVYMhAu6",
  "key38": "4wHHdjEoxVqzUXdgL26TVu1Sm5LEPDDJ6LPXod1NxjdqgkxDsBGiS7NYkfeiFknHFwnHjHnF3RztKwdfFCmry634",
  "key39": "njwDU1sBSY8wjnsufvRwUddNcnXV2GUb81qmrUZ7yM8SH7bmDc6XGPGzgyxDzkTJHvBz643Lsz7tXaa5b3pnaBv",
  "key40": "3NktKHhmp8s2BLEkgCQzFFsVbzHR8rDekrKdLYcMmqcJPvfyqpRJETymDo93tQpbMKRbfgHjc5n1D7SGHFJX5D5L",
  "key41": "4UwfJ9N8vFpBL8gCtHkxCZz9wZMtpRAp41fR2SLjDJdX1CuzAcDdhfSEPwDc3YZBzBRGtXyq9VBwHG2GsVx6Cgqw",
  "key42": "5o6Y825nAurS5yjqYjbg1C6gmVXvffAKSLhYLaA3yz26Fq263vwGc9qZMqhZ6o1iDMv6FL4cYp5xo9rhyHKZy46G",
  "key43": "zsaahJVSvMWLNLsCfjDRXyyBZkVTgqXNFWi7xLZGKqF1HY7QemFJeFaZCQttHiaR26q2RAMXWDr3fTXEa9xfod9",
  "key44": "4LyRs2RfjziK7HKx1NA3WrB8rA33swR4qau3prTrLfjFb5zUpjNUrCcrE59VALBByBtVa3apL9NiEKqZNG2VFCWB",
  "key45": "5hbuMYF3Fv9fVQ5TqPSVi2W3AAjKyRctc1jizvGA6Lm1Dm5UPGyv7b3dPHfsthNpVWvvRuG7JPQozSErLdKVhJGN",
  "key46": "5RCxFBCWge2EJrDYHpNC8Xr1DXwdeHzDyv3q7tMNmqDotbNE3oCqomM66uYAUmQTPT9WZkKMiTj6aRqBwCyZTjjX",
  "key47": "2CBKdFZWT49hZoiN985ou9en68r9fY7dGDQNpwNFW2Ks25Aw13V3n9VnmCrqVxnpEuVzeoYWzDwnoXTtSZAJMBVK"
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
