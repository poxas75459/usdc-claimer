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
    "49pnhfZavurvjpVrzJfGj6Uo19jg6iQrP4X3a397Cz3NAxVVf3HeMdMeH6J11S7fVUp9WAfyjHWUX3SsYKYXVQ2P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "73uTgpPZQirn4qFaY5zXUV5iPaKW2VZ4oPZP1MtxrVRNrxnCGXQcW27MxdhYrCCCSopMLM8dQTCQgP7i3hWhvfu",
  "key1": "KzyVqKGFWfrXS5EeXgD8aH4m4i7MNMyCjPX2qBAoxGzkah2mwSVeN7wTAxtQy7ZwTxrJg8Y8o4uEaN62wjvojou",
  "key2": "cYEf2cH7qLUWtP1YzKk6ZmFXL7w99Tg3q1VAyRXrjZP94jDLiVgtjMHKzoCt4bMZftUqfYpWErgsuxnQZ97BSEs",
  "key3": "5pB1u1EbArkat5323sYvR7awm6dRUv6ZVd4MCqVtXiiaBKkMNd8v5EwGX2Up3kNukDbQaiDz9shNyf26GNSjhFA4",
  "key4": "3bAyY81KrLiUoQPbdiTHuD13An1HGZTmUmrms19YWZdm7VdoNAWCJqW4keiAwHQp2EW3e8eyCshteigYTeH5iyWx",
  "key5": "2Xx8mReVpLEigYybuLxCCPZhHMzCWPsSY29KoSVhtGeYuekWZftgoEFn3nujhCpR3zMPiLq2uGBQYYRJ3Zh4PzQP",
  "key6": "3gNmRw3Xk2JUYVp9twxZLnViXRwpoGz2636WCCShonX1QkrKhPnqMBKNRAhiV2uyxfkVKSSM5aWVRTrUxHL2DVAo",
  "key7": "28U4WjcLb1ukRLCg95Kp557azPnwKohNJ8qspeJj5f3QXKtPZDWRC8xTsZd7QHs2DbcWHQsB33zEUg8jjBon4G7h",
  "key8": "KaeczBSgSY75UPx99qSzBg2xE6GJF52aFtqUXSBUcnAynxxuirWuNDybUAzpxKMAQN5D19vJJsRNHdtx1Bpi2Xa",
  "key9": "47vdYxieRjR7dY9sGAaVa3RzfvFWntmBWD47LguwPck2dUYhRgvPDowrZFiscHCJsxDTceCMqTegb5QUyRSqvr5e",
  "key10": "4ZsYDt8ieGNJRhUaxoRdjrd8xS68x1APETUckoP1CSCQPLrgTkjDw4CEbKTt3sR25toaDMhfHR54xuSShMHog76q",
  "key11": "469reaxnHufWasyMvAAkF31Cb7gWA6FLjiJgXaAFCPHMSqgFtpt9cK1xV3mjZ1WhRgMGVeSS6VjPzKyFVNAW2G6j",
  "key12": "49GA7QLmtB8iUVa62cKHkTDsMtqrcueJVdfp2MTBkh4hHCKQpC63PrZQeTYFLLywvXmd8VzHjc5i33bbF1HRB1ZX",
  "key13": "3L1qV5eqG6Q3KzuseWGtZGeXBPDmkPfaF3Bm5MgQv2VWTrrFn5ufVENZrjPpt8QFTttpxagoLe22CsxdbsdRXB2",
  "key14": "4jT3JJ2y8zxmro5gxycr6MukKntV7E4JGqAKqoL9Uq6fuyjNK5TddDfbUYHVFvybxeuc33CC41ERos95CkkZkRTw",
  "key15": "2EtRK71nXuSjdcxPfy2r5e9nLnoR1XBzBY6G43WjARn1c1dGo7ir1kVm5Y5K9gL5nveKxL1fdd4j14RvAx7QfJZ9",
  "key16": "Tf6uA6vk3MboN5DhLV4Dme8pA1Eb9bptdsDdisRZJNuEiRYLrPGKVrpKhC62SKFC5vHK86VEE8JxazXrxSVjZ82",
  "key17": "53UEnGyJGfvv1unBQ8YfAhXM4BcvygS6BwAd3wikMg8ftdqqiweXTeEw7y7LcWBnUMK631VVQsVJirYxD7MfHVES",
  "key18": "3GSQsVKogpH6X1c8hvsFgc3Lns2xnRX47ZRYMRQgSo4Wqq29vTDuko2odSXig3kcuz4w8YSGSkZ6NFHfKJeuqTHb",
  "key19": "5jgRo3ftELRU8QX8ff1znkWMN1ZFAFeYvhoURLDGWgeFineq3aCy8g7htkSLZ7dH5o1WhdvWb5f6tgd8wD2WtJTq",
  "key20": "5ygvTzcT5oCB8dTVGHMAyPnXGSUTdNvdKmcGy16Megg3A8Fh9DfgpR4kM37uCHoWeDwSu3j3ZJ5gxY4L7o9urWN1",
  "key21": "4E9imAQpsfwwJbAAp9w4eWbupzyA1VKov9ZmrDtBiymx1o8h1D27LaiwPrCjgVC18ehrawZot9EUdBq7F363LT8j",
  "key22": "2XTYZS8yehaiWUo41zgQXdtV1DQmcyupVZFtinkGAhNknpJ3zsi7XAjnDWBjsG3ZBByBSxRYPjCDeCtF3PKwRyGP",
  "key23": "5t1Y5AvfcpzGUKX4EzR5CXdZ3zCRZvP9Dd9hyZ2MnpBuPuYLNWm3JFMidTkuKkEPh1izJGed7b4dEhP6qkn8R22o",
  "key24": "2EDtJnJ5hzC1kptrKaT1fE2fVPbyQ4nRqt1sgdA67L8uvU52S7CoeQi8vU4CVYgGCd1a58XEwfv6BFrUG8BZ7zUE",
  "key25": "2pkhadreNRr1FsvLqRE1hAua4pE4pyniYyb84G5be1uRfhWz7pi3SrXtzmyrmBPX81tcNtnGTfhL3HWyddLEERQ4",
  "key26": "2pvvbfPPnnuvu8L3krzC74MtniY4pZKQZXEHC5iis2isRZFL2rb15GTBniojDxtk9ZruTxsLj7y8eAfTmvcVPWti",
  "key27": "2wkNbrrEHU5xMNA4kaYknXAL1xiKmtDiQmqAzrghtFAiMMmdVGvWV9nB7aFUxDtzVKGx6cmK69zGhKxix14Cn8Gh",
  "key28": "491qQvFjQYWTv1nGqzP5TrGu94PDb3M76jNktkwkdDofiPrvhKLK6ivcXZctChqdgfSjNrDYiHvPKKwCXPNSK7CU",
  "key29": "3zXQJEbnxh3u9UfXNSN8RpijLyynhu8npFvqgbUDc48RtPRbzEXAKpW2T1pQtVcEJx3ndpVv79y2QJQuM9kgD6fj",
  "key30": "5BVVkRDwzCYrcXpsUnpMtpeMTXoSjYvAYbF7d9Z4jAvsaepJzRUWjwbHzHqLFygdeTCCXVtmqukeN5PaN3edhq5d",
  "key31": "5ZE22rqPBKEiWqCg4KhxNFQfwXVnYGe5BYZWC11dyQ5TFn3RDk2ygnpa3gWcTWJXUyusbsKqSRfSztk1shSSjXrr"
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
