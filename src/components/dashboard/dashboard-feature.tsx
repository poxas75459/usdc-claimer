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
    "5u9RKrwcGtRsyzyZZ2pb5e2X7Rd8AeMfY6QbmPZiMzCBcpFe53jG4MjJyBDVEy3qCsB3JWNitdmbYdq5kzfkXvjR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mzYaWJ8gsj8v5HHCY3WX36poEDnBdchYjoCf3HjV7aBbM9DH8DkiHFxWo6YxxT7He73QAPfVmVwaxGugEoRPrci",
  "key1": "67N2qmd7144KzMfAEJv5un8UadfXtP4H8tnerdj9CFjT9hNUeiTrBrzQ8v3LeNuqC63Kqc2qFLL3JkwZKYgKuPA1",
  "key2": "2jnPuUQC47NFHQrHPF3gnt8dDQPsQSVPvbJXQVTDd59iCHsFLHHokKxU8NJVqB55Bj7d9gdqTf9kcVqG5suhbvE6",
  "key3": "5pJ7webqfqYY1XifTHaSTBxuv2gMZrfvhABemvJUjPk28togdeygmvi75ixqFfJ8X7Km5sapyBRyKHpzf4pEnH4H",
  "key4": "4W5jpB44cFmZbCo83xVT1a5Mrk8E4HbbfzJa5RbUyhLh8dAc8DJXVNzY3TN7d2X9UkshafqAhZecwnbrNrgDhtmc",
  "key5": "5X44QmGEykqxSYELd7yLB6FwMeJjPgWKMnNnsvXQWV2FGmqCZBBDnqZ6MbQAi2BRcwn7b7dGz1T1SDtjeQbJWgzh",
  "key6": "1SgGG1m2RxyXLHUQACfyXJoMHBYWt2jynzGBW7qMuZVrYhrcC6wxdDpDdk7vfeNhmZmzTStdiHJV6ekRpJJ3u9g",
  "key7": "2s2bTNuH7a9i2Lqq9SYPTpWFaBXFhrRdtS1sQiQLoAWaDi7SjXYG2BUcwm2f6GJa253BycbEH19nbQSZiPRAqKrQ",
  "key8": "3knLGHcZ5akEd2xG1WD78BmHXVausgAqbmXE3xU9Rh2G3rFcsKr7skkQRtMY12Po9qUrA3reBNS6nq2K5K2i7fXx",
  "key9": "5Em3pounb9PKiJxhECnjXCTzJxVWrwR5eCKTnvnU9Apg1YzXuzqmyASnJaTfV7T9TWa2HN84H1AHPNYqipADdkfR",
  "key10": "X4cjyCTKWDGhqG1stA3vFdJFf97nrWwkAC4pNbWaJ2kwg4Ram7AUbk8efRt1h1PvhYaHawKahf3NBbvhNVJ9BWT",
  "key11": "4TMgT25MVS5PChkPse5rzbDKCnyLqF5V7FgqHe4PSgCBY6R8DF1fg2DhHXNz9HaXwq6h2pdcU5du5Xjd6wFrK6TZ",
  "key12": "66LRtXvfCxNepGcw2h3u8zZt8umdMm5kw8YPBYwbD6ztYMUVGHBdm2UEKbbw74gg2k3jnbx2eueM6xWQta4APHYa",
  "key13": "34QBm4FTFbPPW6naVttJ4vS3DXxftvCX4we3vp1pZckLGi2MFwk427Ad47akpgJokorEWRGJTz7hERhwPkmUzG5B",
  "key14": "bqLg2C5LZCm5QiSqMoiFjG9p3SrvjJ8iDvc9od8hbwbswTwTppaA892MptyB3E5Hqgb55Dw64r3XaC2Agb7rnaB",
  "key15": "3ooZMtxz8Za9mhDzC9M4eK5uH6eNP2g8PDMPTHaPmxnATm1bj6ucsZ2gBKqyirvy3XnG4VJ4JPZ9v4y7DkqL3PgW",
  "key16": "5rigZvsL9Nr8zu8nydJL8xNiT4GzMEqZckaEqp7SMj1nwCT1Cq6wqXDYriw6MvraHHBVyTCacp2Y7L9TvbMdiCnC",
  "key17": "5y8No1ufDzipfuuk8a5G1GsXGoFsFxdexJc7UepJ7rDCBHBVwkEadEK1j2GUTzcfd1s2WNmzjFEb2Pz4qePR96Tc",
  "key18": "2LNfaiaefCKLmdhWMpR5T7QSj9zDNLFZ5Rn2GnEv8xgiwLb2NhHdHwMJHvgGAWFQNPafgNhCVJQeLyrh8hPkCH3b",
  "key19": "4ULKE7kji4ZN4auHp2ez71HeA8tkDPs3g4ux1k9KFAwTbggaqaQpovZfSdyoCqjqQsBvU8277sT1PP3hveHYcAxa",
  "key20": "2oJpxCQW3tQ9yzuev8HBCsV6jwx3TD4frd5kcepNRK6rncwmsciEydreQirzShhbr2thKP1wGQE1cQoh5eCCdVqd",
  "key21": "2p5uq8ydUwTGzHc7khp6FwWXyzDfKBLjSvEiqSirMrVpQWetEVVD1Q34gjW3N4otydptXT8Qn2sqSBjKZDYq6wtt",
  "key22": "5nGPSKuX8b5z3Fzt9rpw2L1HsBMUoHCrwCLAXmHdtgv5o3xuj53xEvzAo4cw9pPtqR2Nbbt7eBc7w8gYTGTvmLyY",
  "key23": "3dQX4XKP2YVmZFQVDYsCUToAqvbQa4qBWZykQv1z1Z8yMdsNjyxGGzAqXDiFAv3EDrhQaEz6hu9CRaD6qeuDFvtE",
  "key24": "5CHVwstgaRHZuLjXcdvTJGghc2c3EGiGj3az3smn1vvCTqzBk3fjUUA2rvyrRmZZuQedhqT9hKmDYyXmc7NPkWpy",
  "key25": "3zcqPsppf6wBLo7Y1YbSnzTobRV3etdx8ZLY6U277Lrd6F2osqm9cLSPuKyU6jxfMsVh5rvmK7KhrFiykBkm2xK8",
  "key26": "4dWQxUeYmm3gVo5QRHGh2GarzbjMSn84Yuvaba5qDkxsQUKoWKU3PtAE6yzBSbGcp396GHBgQWJot4o7XwFQpXVV",
  "key27": "3GCThjVwaifyUebuy26uZ8o9t7iQPn2F3gyeVZyyPv7tvj4Gthj2jQTjGDneR6CNxREGHKe5yVXRGkcyDxwet6Zg",
  "key28": "XKjkuEAiA7qo4ankqJBWWVCCDkhyFevss7Pf4YU3SMX2hvWjW2e9Yv4GE4wMT68wXuBLHgxUhpdKQfz7qGMWhL2",
  "key29": "5RPao4BYZiFBDaTTnhesAN6HZQ3rUt4usNke5jRdUucFKqVYvRwKMGdhFQmcYDRw6a2bJM3MAdnM6dtQThrASjT",
  "key30": "3x8EFJ7yzBbC9h79Yw8r39tJXjXsN9tJ5sKGytzZChkQqCPzeUGZkGmqLAYcMYtx3pKzEXoP5RrQvRUCCYSpfwju",
  "key31": "3G6Qj9ag7ZtWH75bNXSFULZfaUXAZ6jjnTkK1jk4ZrG4LH1xB5h96eqDbUXdCp6jbfMgLZDwNo5BJKGYUqW32fX2",
  "key32": "3zJA3s1ikCRFwj5V465RgG4EYxcZ9ARH2LB4HW2bX3qXy1n7UM1daVNN4KVV1V3fsxY7KQULzBNKRn52FUCC34r9",
  "key33": "2C9K3RCprTfGoS64vhN4diwEdat9BLyrY7LrBxVMVGKB6unSopfvgYueWcmAiVyfsyKd39LxAdxnbPgFNxiqe1HQ",
  "key34": "2vseKJ9ygjQ1k3gLQQ2tW4HVmbb5xX7ENUsPAXa41GQMqGpS4PfnHY55HuaCp5qJ7iUyd2CvkSGuKccwtXYUwFq8"
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
