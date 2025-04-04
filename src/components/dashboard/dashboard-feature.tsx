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
    "4gRLox4c4pn7XG5T7JYpiTuFnYM2oczKSDFqhAfB2SzHHMypTBfRTZ2XrnSSfatwRNy1V7sSkiZg6eTbPjwZoQAB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RN6zrYZ8jYqoKayHDArWxAK3Uty7Kt9smn5kdiTRuTbLuph9tFMdUwwrAuK96p8Dwo9L5gJn8F1JsjzbayHqdVh",
  "key1": "5rHL24wNVDa5124pWSpJKsejC9hGwpxdMVD9aqfxCH37j5vZnt8EMPYyFPpLUsuK9A2yyWPvd2Ak4ujxDEwDFuQG",
  "key2": "4wGPKLD9NqFrVJzbc91KfikM9AfKCkDS1KUTm2qqUEtVebm5eBVne31gXFqMpgo2R1xtTC9to9KJUA9V3qDZDyB1",
  "key3": "zJ9bHCitSMSs9mQ2o42WnQMCXSt52wYbhQUNqVrz3U9S82amYeJVsivA9BrunoPYChYZZFSAirDuC8TDwFYirEs",
  "key4": "4UnJ4ucA7BpkiZWwHgQzNtQBoRhYiRrQzwF1hoJuiMvt6KueDcQSoBjgmGbKCduwLdFQDUimHDD7AwgjgJ1fwqnB",
  "key5": "4DzosMMLSSD2i65d5Vmc6wSaYt8n71gLGrDtsvPtYnqzM3QppGe9nVYV86ztqJu9JhheusqWVbsncKe1yKwAPaJo",
  "key6": "2sEb34YxtGwRUSSsEb63vGRDBuhLY5W51oingEp2HW5MdGUjxMTMtyy9wHy38Mc4Y6MgZESxFAFygVvmbGviFqA5",
  "key7": "2VXAP1opJb7NxsKXC6wRcZbUjXLCdw8iP18QERMA81xgpgSWe5afm7z9eRAHZPm8j8JoXeciyjs1McEUnaQe5gxp",
  "key8": "24MpVXdN15AwcuvBNptzkFCP4NvsztPcy6E4hhVqTf3vjWM2mVopP75kQBFroEhAQqkK3SsFW1xEXhMC52oFeQjM",
  "key9": "2xqErQMCHLkySUzTPsR2M2uoRpcAaBr43LhLeDAzTPYu9F1oza3yyxEodhDMWeYtfAuxh4rGPexc96tdpT4RqAZN",
  "key10": "3x8wjc9XJdwwj6MtutQfmoNqVbUMj6kra7k7Jt9H4piLU5yuHsGY6HjPuKYLALRvEudDkNKgdZrnpsveiePEeivC",
  "key11": "3pZ9dYhgH76yr3yGgm19sUxjof6zenRtEvT7GafDAR6UsZzMjUdWo27g5fod3nDh5tGZasNJ2MH72ZL6ufW7wApP",
  "key12": "4dnjpQtRE1iK5oBHrfxEq1xiXL1FPuVxTaJ9sHa6ZpW8jFmSMHLdyZAQygbtEUNUZfgn84x7JkKQBiJKU5zmKSdP",
  "key13": "2bjEeVN4KY6VktwiPPq8e5oJ5nhJ4RMzdjd1AW99eEiMH8KNmqNjQkxQELGfoiGs1y5Uegwduotpokg6UAFW95vq",
  "key14": "2akz2B44ZNELwAv9VmWuixCzaC3uBSQWEJh5SfZJ9QKzo31HDkUhvxgGEvXihXxKmxq3jcsydqjxdFfrB2QP4rNS",
  "key15": "4i9x7Wx2drzUumFguHciQ8nmsB8np4CJUeJEbHzyEjkHNUfd2RkzikqVvkyCpn3jTU3NwxfSZQ7r6Gabue4hhJba",
  "key16": "2ugCKaej5JvoRacWFiv7pdTFW3F2T9dHrq5fpX3Eq8yhpHcQJZZc6x3zRKgbmijGxBZL8DkYxBLrTa5WprWyH6B8",
  "key17": "5bBvbBeDm8kXeyTjXwDjfXwP3q2mP2taXVjAsVe1VVhn6v9TCR6NcgeK3WDwQd39uJmCnFzqKSUcmC1GUPthUELw",
  "key18": "5eagJPwpQyUazgyAs1AgMXEkK4e1BfkeVYsC5AKMusTQZzR2nipcKZrvFN184eKUjEVF5GzudoKhBYZQRejwYv6V",
  "key19": "5bv2ZLJxywZys85F3sA5nKdzcmVnA2j1sgWCp2Aw13pvUFC8VaqWQG8D9TsVKDyPNQWTHh9yYseCMk73QbCHv9CY",
  "key20": "3njzxuusY26Pdbmq1K42emXtcYexc9DkprgqP3EL2ABUhufuSti77Mh1uudhVqPdPZzFjB1ZL7cPMJPYPSufRsAY",
  "key21": "3W7C39vowPPyDadJu4UZ95Kx2zrqymFYUids4DMQzdZXN9EvXkN4anSC4fNqt6NhFZLjHaXEPLfLfRmN8YU9u9X6",
  "key22": "3hyq57DWPrczdcnGva9DYJdbMrf1QpnvnWkb8myt283CmBFQBe7aJkGobuRxJK8XFaKFpWVYyjTRWMMWRJzWsbQG",
  "key23": "2bcqCQ7m4SNdZrWiAgvaZAoEv36hgumhxtM6LnqpW1TVfdz8WCLanzdDeFWcrxQndCqV2NYVjdUG4AkfHF1JxYuE",
  "key24": "3GniMqCGx9U2pQSEiKCffFoqDhDKHZERv4qZ1aoxprcwy4kXAV7BiC7YATBQqobksK7tJybNp2sAHKP9ADxNyEYo",
  "key25": "fkV67grpP4dLHtTdnpi1eHTxX8RcqrMdaSCiUDBJvs2RYbJgcnYJupcx7v7gsX3fJNaDnHjgfhzrs4X5CaxVggT",
  "key26": "4JzkQMBpRYpwhuLkP4gRywFi8NYmAkyndy5vrkiy7yg6LTsJAAhT2bWTCKRe14mS6ynPbPJeVTC8Huhh7LtpXZVu",
  "key27": "vKW65X5fexcNAcwVtkYyoEQYeBpFGi1v7bM7STfv5pMHm1iSPPKSJT9wYTrbvumqCb8z94VbbcLZpm5gUbuP7tP",
  "key28": "4hduGNAgrx1AAPpvHWriHE5kNRYs85HYruc2hjGtFKwvVULwAbXeYTSVpjsog5aFCY9cAw5ryuVd8KoKBU6nqKUN"
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
