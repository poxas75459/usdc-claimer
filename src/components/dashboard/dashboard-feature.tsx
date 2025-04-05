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
    "2RGj1LdQxGTrZCQ6V1q1MFtE9HTy4FveERqwXNC8WJXiszP4RKvgk1n2ShbsxvDeVigyJnVZup2jjcEQDkdJePsF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YjkfZs9nEgAk6quL9bYgwBxGoFeydRXjQQK4qnJdqFz7efCjQtkpWAtqaHvFXcTdtCLZgzg8bF6BYrpuev1yXJM",
  "key1": "2kFQjJKtz17U6yNZyfy97b7FFEcv3JrQRHEhRd3zWFdhuJdyP4PM3TzKrnVh7MHTBCiLmrdYrhQb1iN6V2RThFzT",
  "key2": "4YzE6sxD21iotHw8GjKowtcMfWuWLMg7oegcuFuZQSk5jAHwqip47gynCH5QReR37dHx9eYLHvbSPCb7eJAGpcvs",
  "key3": "b53mk4CoroMxMYTiSGqAvYFxWY4kwFc4iSdns9jQj9uMq9Rs3eAKW6K9cwDH2ZPZEv9gNaRixmd56FwWCBrVqAb",
  "key4": "4oUptzvC1nX1wFE27z9NRh6S7Kc8XUAgbHDNSZtt6UZtmZ1krBrPQBw4A3AzncjyoehiffcGf1hpghtTpb9hVL5k",
  "key5": "4wSsR8KipGVBJdedmKEEp4TJ2nrefuegJ4n68R4FF79qNb4XJKgBxvk9ypSue4NhBeURE2ju2aUP5hV3SbeDb6qC",
  "key6": "51UHb8Lh9joqd7yQrBFq5Mj9XksRAR5Xo2ntTsY3zLJZCUvFYoPwGarECyNHBw2Q9MPAXgze5BUmqSJxNq3EZrLe",
  "key7": "xMLKfBqoWv2tJiAhsZXCgbSs4t8XtBUFfU9qdEynmHCuo8uVzm8Zvnp4yEWrjMpqwBbnxPbdcZ6KRsd3rui1m1W",
  "key8": "4C1UWFr5PTZShyZ5idUK3EVtxCYcKnJ27BR7FXfxLGPpPB5CQwQEpTqsuYf7qXzwEXaxgUFPS3cPB4UJMQwWfzVb",
  "key9": "mfsbPr2eDo2YwDhvCtiwiVcDGS58MecmWPA11L2zTP2qrpL4nmtSQmdB75wfmd1qJVc4tfavkZGzmrv7RaZJutZ",
  "key10": "k6htXE9UvQxCfhCw9Bw1gy18N1mSruYVi2Unb9gqXRcnDHtzUbtqpiqJESQ9ZcbwVhr3PUx1b21NfVzP6HKevyK",
  "key11": "2JqnioWDdqVu7X5dEViHGuWri8U4JvSKUowXDnLcWpGDdNQf1cqPpSnw9dHcQJgU8sijzKyYYcBk5xH9d6QmK1pg",
  "key12": "3KbzzeD1CYqGkEkiZpLFvqpcLLdfbheNQAaNnydf4QKbyvPxVqP7CovR1U66Y3BV2Bg8aFBLBm7takcjsszjmyyB",
  "key13": "49h6MUKdgsvD7RCq2ee4vX7dFQLd7XhebCSh8c3Ld27wSbDRmQmKhAWdkm6PRN2bJMZnGhM8xj3ETex39eXH9oet",
  "key14": "2qkJkZ1no6Vh9YE2D1YsT1BiupkFyY5iu7hRHTTsKLbbqwpDRHJeBhTCCV2yD6wrBrzSKbyJeyiqkLwbkQs44Jgs",
  "key15": "5YrNYL5dQGLGeXAiBYTYYu7okLshTDitGepuBuPdtuPG37ojZC2ygfBW8L5QDq3tKgHdsgVmRdjiBAQYu4rZTDce",
  "key16": "3TC5hwSyPZG5E1o5nXjQ7bZtjm4JPM3gNZXPRrFaXp6dmc7LKeJeUE2PFBE1cTezyHqPwiNVx4s7Ns6QPYYuto6Q",
  "key17": "37s6MWxy8T5JqmjxbYBjTQFKGMREhBXmVXGHGCeNBG9GC3aQ3G8kn4LovprXmbXzjF98F76U1h434CWo2VM4Ce7L",
  "key18": "2ZgbVo1weLe6UbwV7iPZh3HC7wZtkADqrEqk76C2wpGd1rsXG4oJh8WSbcsuypF3bMagWigQnf9q2kRjQQZckLuJ",
  "key19": "2iu4RpnbhGBtm5WQe4gLTmQYxmfpTk8NfenQBLsNgBXUcSKXShDG3KTsFEmoN9oQj6WRSk6rLNLdTHbtFSjwad2x",
  "key20": "5Y2CyjvcnbEHofGkoretmzJpSyoJfuL5BfkyCENikp3Z8nocXxH7pCGLfQoEaNv6EWV8mkkiXSvg86oQborT7EV",
  "key21": "3Nv168MbynKA3DR5u5DtYzj5jdSmsPKV2ByhNWgCututsP6JnqtpVS3nFENzZNKVMegt7Xf7uKn36ZPR5Mk4V6Tk",
  "key22": "4J5DDtVnxE9WmzUkWEZ7wtgvYPi9p7rhYdHj2HBUdsH9yv4M6scHXN72ChduCccbTqB15XZKmE1oggGmWshDPtaa",
  "key23": "3XafNk54EVSwnFc4MLRDZPRZtWdG27ppUwFcWAhABpVYFvFR64QrTVtCmTAqt41eyDkQnHSeDCVQrZ6Xp4PAxKgE",
  "key24": "4zaPbG9cKgzdXBZaSduRaqB4tushjSHxscWiJMx8vKv1NHkCaPd2dvnFxRH7GrC6GSCUMVCZxi5XwHTVWoTZTpM9",
  "key25": "7SACePwKPQKsK6GXLTFPKxeY5Dhmt5z8FnVrMgMTFmhRfd3DwBkNzjyLv3SidiSjEFUpU3CnQk4GgW11hjANu4j",
  "key26": "4tMQrfEJH1rZAkGfdBfw7igdCVrE87PsT1h2tHAWpioKKnEECK4trodsifzhVRWZMpkKFujnHWLQToNg4ED8BZ2X",
  "key27": "3rY6k44MBNhQd3fYAkog8YFXB3UyvTL2ruQDhkH9oeXGcSgaLnTBvYXFHVG1oXGEUhwP8dtYUkMphdevVzPZNNDb",
  "key28": "5mxra7LitT7bqYmK8noht7J4ToTcm9odXMryjyWb1vcZVUipFmYcvm6JVKZCv9d81heCfVCCxV5yoohgr2sBosbH",
  "key29": "4GrCkiRCvDrv84VGz66HfGP1udTHNJW9MSU4rAhEPpw195PqCwqztj6QNYsUGF1mALmrqg3HUeKt1Tfv7UXfvsmf",
  "key30": "nvXZy7qksKxD51zwTxpPD7YGu75oWAmG9Y2m72gSNCvjnmQ8kfF1sSPdCrAZ8UCd21EQ67CJWmh8RQR1LjHLNr6",
  "key31": "2QjYM6b7H26Fd7US9dF2zsLTvEd5xvSw2rPgsASoZDdtDBQF45AgcNH4po9Qr6KShJ7CyZmvG2u6MVvsm5tXt1mH",
  "key32": "4j6K3LEYd7j74tf4eXX3KQaGK64NB7MxTpGotSUu86hUBs91ddaWszVWaFS9nyj9Mhmouk26adiFCbSRUjDXFb9M",
  "key33": "4aDbBb25awwB7Tx5AEyF7fQSsxyrvXXnAeA9m7Xf2Hrwnz4Tg4tSiogqy3M2FzXHW3CWurc1Q8NkGs35c9bG5qsM",
  "key34": "YRNyYLJfPhERCkUVRdBaMQyGnaUCZUiVSSgagzZm7SZ6JjHrcUbgvyEqc6qQQxni73q2N4bmVxwq462iswxJZYJ",
  "key35": "59MoyG6Yie5dhexGk4CJNJCVP35EGC36zcZFqPGpGetEWMg3ns28hi52FcsQs15ZcNEyfBrmHxVk1F4mzsxrbXjM",
  "key36": "2KMTAPR7nnoeZoCUMZspa6jHBURDFhuGxcAvo7FcC7ad7dnTtijzW8ztB9pRbpeoJW2hHsgzQ1XE6bhyf5gZfbtc",
  "key37": "3SRt98ZNeXiZS97RqEm6yHmvSx5VsTrYusZxwnUbZJH9WyGPcCo7WM5kaq1BoRTwWp5mPiC3n1gRc1otoHHcyrLZ",
  "key38": "2AaS78vDnuqLfNpWCVYGJSv89JJqZFd5obodR12wap9DbUduvawb938S8HZdZ8SPg4pSnc57UaBNmuwAQDD7cnij",
  "key39": "5MLDUh6puaQLweyxvaqnKTVQr2fLhN6gQ8rzAUKMYniNfqcPgPccnScC6NhaSN9JejyxQ7R74N16b8UroSpYYSKo",
  "key40": "4rQVu3jUxi2KBbn4UxsfTzNhwtLPPe2JRCAQfnGYd6E5C8tj1G4PRw2rLgxSKkkTyMqgX3GQKwBPLS1KcUsCKs5h"
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
