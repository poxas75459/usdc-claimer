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
    "2xkGpPuUV13LmBJ99cBAzBPaZtdHXik6QPxEUKmp5wXniFrK2tPZK4V62Nz46L3pnTSrHDQ1xEbBo7Se7f1rtdp9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FqPgGu7xe1K5D3usAeRixRpVjBfkpqXEmtkuMRBikcAFfQTWcevo7qkHZRBg6TiEAomfq1E98bHcx7eWRbDx5YT",
  "key1": "4EDyBD86XvVUVW8LXvmfmPCUwpHxw1rq53f9Ftvpkkwb6USL9EbkuMxafjBQh3qmyH8UQhwgue1LPJWFH6bsYogj",
  "key2": "37qfwycubSnLeodVJoYe4kts8MG9vTwPNNHQux8YG4TZSG6VfnLB7wxwrNaHgr23NR7un8o6UUgwXBMwpGfbXy7X",
  "key3": "3MdtkkmYvbfXSCQQM4tBr97Lkdh82PMtCEDHZ5QZ4Ri92zgDMmnm28tZTuqiVv7GnEKVjnCRnhDRBPcV7Qget2Pv",
  "key4": "2nySwToKvPUSHqUBHiNFSgLTvdes7AUWEjY1Rof7YCvfJ5U4QHgvX28Hhes1GagjBqJQ4imCQMPSh3qsMX7b2z3N",
  "key5": "53sjyvNNbxSnKj2SsvSqDj4pNa8zt5bj1q3QvBtVMhTSbfU8jbqCfQjEr2gCTKBbUnjDYwpQTrb7BTuzsJBJHP7d",
  "key6": "3BfTWwsPwTW2xFYqg4yD1gcWoRbh82dfbZWNj8Q4UdkRNoj2ncHZXpo4ySW9THKmXXHJyiWRLAKKMsGaS7onAzbv",
  "key7": "4675N9cMoUgWgkpGhjBLFpjqpUvjmAzqG3FUgpNkNpsUuZt4hvC6AbEoaH7fpx3TFNrzFScaJFHmdn6hBZBWv2HA",
  "key8": "5WxUanYQreR5Y12a9HkfzS7ohWooDWFGTKK7xCJcXk9cRTAyG7wsS6XLdeBVnogHn266n9WyKkdKEhdduHBcpzQc",
  "key9": "2yTYDZ4AYmxJRRPR6PAjjqDLMS7dpwsuDj4aHiH3hnC3DzB6aoKF92TjrFpoPf5Lj5q5uPc2ttuYRRTVqVMmSzwt",
  "key10": "2BYDREd2xGdZPrZqA6VXktctRdHHYydc5W4YJBetQwS1su4rAtkdauRPuQcR2WuLJe7NJET9bpJ5aqYB7nfc6g5v",
  "key11": "3TqcGjTKghAe6iRy2S5Rvjr7h2SJfTwUrixmtDp5cjMpfdGycX8gqnTpbJeNeKRcrUYs9XjZp2UCHL1RAHEk2J1j",
  "key12": "2ykWyZWqt1DRncW8KeJ4bevApnUx3X1Tf8NJP3jt1nx3m3y7arhadJfshee8Cwks8NhhnYDD7iTrGr51PHxaBhc7",
  "key13": "4vZaDsK8Pu93r6buagbv32X9iqtNzJ7QnUUMejCxbdezAXtaDx3oTAcpbvFnjzWD8UaGSdsHoHsh79QjPRdzHoS3",
  "key14": "2yoWthVoKozYpRdcqVb3STKG6zurh58q3FRwGvWPmgLWnVQT47aj6ohwBHSGdhaLxhpB1n7WrQgaJ8UQ1d3uLN1L",
  "key15": "b8f2SDJ4R6tEvkACkYXz4ejoeQYesE1MbiBJPRqo2rXrsosuaotoJyDWbWLaUgKvPpcezFykhz72CdgzEwmERBT",
  "key16": "3ZoF7KzhB3QT4UVnEWUhDYUG2ixHT3vgybaCsZQtTQNwDzfTd2vDxk1WDpBuaK5DtUuTM25tz8J357HjijBvEzkp",
  "key17": "3zy3CBrUpvVuh6ssrjMyHN2HtwK7Wz9iCAEZvJnaTVGG8Kr9VWAoLfMEF4WKVRfsvQk6rjBjxBXWbwsUzNwthSRd",
  "key18": "5fcA7mdKXAk2NrKGZpQHQTyqaDYoe9zxG9ueYqhSp8H4tovj5PaSH8aDVakHPkNKzG8SE9jyReeKBs3e742PE646",
  "key19": "YV2dysaaoDAnHmPDfMQvEpvUnkqrvVsjGhEnTtCUKWbh3ptTUoHqx4rmabJP65BTcdTN9PY582gANJ7h1N51bsB",
  "key20": "4aTzQo7GPMBvSYndXULGwveG5dY72z1REjwfP2FK89Evz8RQoFUUZ9gPgRpyY6JZaKi8gdKJA9e56dCq2hAMWWRc",
  "key21": "61oMQ6TGctiuc5XsgnbD2AM2i5odTcyZ51gLv2DmE9d6LwNuigHc18cU4i2e8vF9WmUH2TQ9ffUAToRdfmfWF1Uo",
  "key22": "uVwVJgLhYNVu3x6FvWb4hawEzsiwkc4mUYEusopyby4LQxLo8oZqDnXhe4Ky2Tn5HvVEjgBfX7j1Tr55jHyadi4",
  "key23": "4CrWMmqP7eGR8A4yFxosQEst2FhwprpwXvtXwmwJK1vN4ZHV6qbAXbmp51cLEZ5LjeEZY6GzgC3yC6Ntshg9FXdn",
  "key24": "36R2Lt8bVwDPMh3pysZgxyaWfkbKyZdH6oHBsWcqkfRHYSuHx7RBwRf7NngKyLJc3guK3n45cSULiEH1anmuP91c",
  "key25": "4PioSYbed9g3qdVfAnydqZrNcLs6pM8pxgiEP9n5mbBmvMSVayfEVDoDAE3HoVuimEUmzkWUH8Gc67h19awTDQbs",
  "key26": "aUCEHezG3vh4Sbi6LBrSyfnXbPuTAZfswug1jsDjrHoEZpd9ePpRGY8kYbU9i6oAC75HVgdt2exQci4LpYD1yTJ",
  "key27": "59TsqvB4qtZSe5H3L75xC4sagLXaHSPdxVYdfUmwYargXZqE1VAZGgbx6dmXyMZxS9k7NegPytBNjw17BMScgJyf",
  "key28": "4pBM267wosKXZhorqXfuQB6MM4NsSckFGthaypRdu8jAPcpju7xDQEcyzFDqmFQnrPVzM3165U2Qv6FWqnkpAqMb",
  "key29": "ik5C89MddmFSUZyxmFSh6LhNtSmSLoX3hRmCk5oyKW5qteWzWocvaa4VxtHJtBGzG8Divtnhx2GQzqd19NVdPb4",
  "key30": "2bmJ2c8yUrZrVog5EJAeXBcGN2FxjFfik3EyhhXgUQpE4rYu9foehWw9stdWj5FKENVEaFAjb8tir6QpdU3He6hX",
  "key31": "3vv979Xe3kqhChisM8wcdTz54CqKnMH2ui8QUSvr5aUB4kULR5rFNLfoNgJW7jaaentxciUGrVXSMs1pzxwJb5Wg",
  "key32": "4h5sXxaY9rsLFyUM7s5odWVtjHqNhi9NiHnpHEf1JbvdwuykHGdBSWoptAogUJqDTrCbxejaM2vzVAxb9NEdM6PN",
  "key33": "67WVgT8963La6qgUNjCCZBMd15MTecyPdw89fggWx6DTxg7b9FBK8GGEgnd7eH7MKTJ7HBc2s3tcx77Q4Vq8iGxi",
  "key34": "3DQNSANBHwpeV8KqUrxSZ3tfqoyHwh5bMQ5zqp85VQzt3YU32qB5BYoxfEpTpwMXQzxzextQgqN5e8YWm468jhhV",
  "key35": "4bUf571EcTZUUKQLQgm3VtKuFaeFA6o9wNRMg25iUStaT7U7aTmBFpGs5XzP2G24T1mftjxPjgHg2vdUrbkVM9oA",
  "key36": "4bSs2rc64jZNSgpaQoQpLiG8kvJn6qsA1EL6bVxTw4YuLLWYQZrJdv9GJqmEdtwuvmZa8RihrC1kri6YEHk6KJV5",
  "key37": "3YBKVqN3EkV9vJThy5wfDY1PotY2veAibUSjXXTk9uKG1MqZXMZJz4FXdRmDDQUz44NHyQb7LGF2LCsrZivvRSHw",
  "key38": "43yZayGShEyqPryvJoeX9YGr31ckmQegp6wKgeFG6NrrL6VbeAWF4cssgaH4zdqChrAfA7qz3U4AJVReRr1Az8ep",
  "key39": "2xtFK4pGjGouQUsuD5PPp3Mz8kJM6eTkTc4AtEeT3ZK4ZhZuLeFnoYdrUgDyD8oSJBxNRD1Nt1VugjQM4ictGd9t",
  "key40": "2vNqTJypUFP19KG5gvfmDfTvKfvndw31RQasG35YfvYuVR4Tg7mz7S877sknSUief2vf2fC6uLD6yTxRN8hd3qNR"
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
