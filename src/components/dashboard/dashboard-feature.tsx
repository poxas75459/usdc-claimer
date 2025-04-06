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
    "2pXpdNmLuLiZMbqVXvEPZtMxtRWF8CV37WJxEPSJtgcwr9bDwmHuYUraUSojx4Ub5Pwrs6HFMuAWhh6oGdeBJVVS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JqLcZNUncHVufxgDtVgz6BJTsEMyoUPuDXtU463RBo5jY4NYTs7YVcu4BQG7mMrsRJr9tSizamgJLTPH97845qB",
  "key1": "JnFrAXVewH9t7KBRPbSJDfXYxVobjmx8Kur7wvg5dBhNrfho3BeiQjUVK648UkeKqm6gvhSrvpjWQPaN6CWk4XP",
  "key2": "35xWXmp2NAkJhzvKttWET8PHNyxNGVovRo6LtS3PbVx9RXWq4XVhKvS9pgzTa8qSEwqjua9j5HUmq4cSzLnCrgud",
  "key3": "34VCajkKQ5wUMMUhUuKLK1xaw3PYBFLdDH628tdMGvyopTK8ggekTsSfcMNDuJazsHs78k1vhvdUwLW6noNhTvWD",
  "key4": "5H4yHYJF6W8JNmknDB322Yv4szpDVNKnUW6oYAVFFRHbh3kX5CUgkjEZAXHT6ZP33q8qWoi3Hn4ds3wL7vhmuBj5",
  "key5": "7bw3YizuHKcPoxyCV5eiDWPCdmthaSVcFobZSGoHiXbNCuHFdeQaw5ShxDjopaZnaT31bzggHoYu15MbFHoLya5",
  "key6": "5UMAFDgutKfPyWeaWyHaq7ikcE6vFCQ2ZvkqTw6smRbRiTbebTYbgtfzBGA6MtCfevRTqbyQ298E7uAFKRrzuuz2",
  "key7": "ebze7WmgrEv8RR52Pbak4CrtdSEgVkEGV3RQejd2WxNoVdKU7P8xhq5qQ9UrxcLAe1TWgsXEm2LspypMA5422ja",
  "key8": "3X1hVy4MoHXQwmS9hxSNbxoenbkSGRuUDqde7pV7K2rt2L61nLzcgxR5vrPHapmdKPMwk86nmQrUqNMdfScHcZQE",
  "key9": "XnmMktDcGgNbhv3SExosc1HGvke2Q5omWBpoaGbDtReX3VBT9DatJRbcRAiB9VHGoLnQefiakrWbCfkg4RZS3TA",
  "key10": "3J1v3ZZ5GWYcbJfh3KJKXZmx2xo9RABrQQQ8ds2LKDmy47nR7fhv2ni19jT1jcMZkBnu2s6341nmeGzT4CXnwn3F",
  "key11": "2GgeSeK5YVhWHffhyAFZU5RRarEXNjvHbkmX3VqLZ5zAARwWeE7ZfoahX5dUeieasiU33VryB28rfU9YMdcAsm3d",
  "key12": "4NRB3kV1D3pEtmiGkprKeZbzfkpLgYcpwz4QTz1wvBe97CJZ5bprtdZKR4VMKV63sJpa6teYDZqP2iRvqrzjfara",
  "key13": "4eNmV1xWcnjVve6LAdHk1q4jdnbnNL3imZ8KJDDhaNLjHDofTfMUsYtri5ewiR13xpHxjXmt1zJcMwwD6u462Ksv",
  "key14": "yjHRZ1TKKjfa9dytnHT9xVn5iWAJyBxbYrpCf6DtokHrpdDYyEhtrBjc45brGBsjgzq996L7vPHnWZFUo2xeSNk",
  "key15": "4w6CFtebp2ZxoUQXpxnzPytaVQdiipPjC4ZfZPN6i2XwRFb1QfqtgjBC8gJiyCgRnDG1uuYYut9Mz92ebUwi3csx",
  "key16": "5MeARudnh2PbKf4Bjoed14Zy5YjSHNEB3DdNQM27JTUe2jZxjCHWmSyAAVm47wk8q5qHqeUw9YuWyi5Cr4JPk5Dn",
  "key17": "32hwCq57SjVqcq9uQ2KHzzzHCXkoq5Yz7SpCuhwmacH92F3mq1A9kYgVBj5RttPeyZjBgxmtcj2DLW6d6p35WaGh",
  "key18": "5XHpp9yuHKVRmrChwkaGEHpgNXmVyJ9Tt3hY5zDrvM5iVAqvZ38xJs1Uk5gDKmpdyceUXuuFhgmCTpkwmGo2yaue",
  "key19": "5mUkx6PxMJCV3XoYfkXBhUJ2uDMhj7G3rTcVaCeR7SxyAJg6AydTye5YKtyrcYqoafrEg8XrfD3qVXtWtQeRwY5a",
  "key20": "48EwRKWxZ1iL9NeimeDAefra6THrFfeevPqTqhDG4fpbeFBTvhcLTQWR1GrJ6TwLoiD98xLfeaFh2yzdCZ8Y1qr6",
  "key21": "2cMS8ehFDk8rTVwqgv3BRoXDvQw1qoHsPKtSCfeNYsD1FNqwRkhFSV59RPqZDg9xsn2158Pag7KPGNMPn25yR1o6",
  "key22": "5NyY6CXY9oX9hEaG7BA8dTJXhSjxbVgs4oKwbxXt25ut5qgKmiTXdgY8tFFgvv2hKwHt5RgtX3JJaXmUm8krdXaD",
  "key23": "5aciiEvwRx7qdnuB9L2v27jP8EBjqG4FA7Txa4GKdEXpwioMunz5cyz5Fwa77DfmNXz9qXDGBBzqkevkwWDGKRsW",
  "key24": "zQf2vTJU9ijMGthFEHfywhm3rGSLzDrxcYnA13Ax4vHVGAJhkjFEeeh6ZtuhcUnfc2975oWyQxowzfDq6Z63jVX",
  "key25": "5Bv3euqhHRXWnQrwrfbhAzcgVPVGW7DPv3MSrcq8vtAbqVTfRTs4iuak77ruUVYBkGVQPtDwx1xpnYqBYcTuS6QV",
  "key26": "j3QRw919NW7acq98EBfb975y64jsrRkDpZoXCksHBEL2D89V39h5aLHLmNKH1E6u2n5AZuEyjaJ64w5hyFompBS",
  "key27": "3T1QWwrDbN6mma1e43MPuNvWyK77XszfXWMAGrPG9X7u5Ezg7avSRdh3PCFzM3j4Eowqe2eRdUVxC7c7H12dU2ge",
  "key28": "5AxyrACVXKk4kntbwRknvPoeC35NSGSJh2KdwN4kKvUKLuCkWJY7FhCk6fCRoTLa31waSn5eyW6kzYcJbnfsV21z",
  "key29": "4SfDZ6WNvyyYWEusf6AF9KcSzwTsaKxhXF1nj5wXoEaVyVuvwRBWGRFCgA3KvDoEZUaHCQQ8waQPZr6cNujRxm51",
  "key30": "3dzfkKCrvd8Z2YyiXKCB8fk3SvESb3aiPim9n1RA2r7zZA51faDVXZ7BLKwNN5iBk3DQJXdg7R4bzomzZL2B9TE",
  "key31": "XfdtGjrNXuuNZCenryyZHMst7MVmxsfZz3Rh4MHEAuxnRqZRSukXzVwZ5UBi8z252yaLQ8RKunpzHZjzku8xt5A",
  "key32": "5Q2geYkU7ZZAgTRWZtmGCjxZAw52KoM7oQkXbWnocKLtv4A1V4bK67MNbrk9MY8JtnWptfwHEA45NLW41u6dvsFE",
  "key33": "3hUXPWC4LXuyzEm4Kp7xD24oNYJTz5psPgRVo9VSTjPcGTJvQG5whKfVPKkjzWk6SiB16bnangevLJNUrEtEE6dN",
  "key34": "5wDyLbrmN6cCevL4wLUG8PsrvRLLEJ77qz6P2Lj8uuS1NMqBQZSLshbRJVXayZPMRrKPDqPucyJ6w8sWKbh18UsK",
  "key35": "3PBJEaFHZ3na9xup9jCMpbCdwtsABm7gxThKpATwgkkkGU3Zd1Po4hwC4LUrC7JeUdTdgHEYGtkDQkZrWH4TV6eD",
  "key36": "3efqNLYhgQ8rWLtwA8nsjhYq3AQ2ZLAbFyyTeSoXxv5sNttWVVwHNT8sevNpornuu5JMWRRMTuyYSe2z6GY5xjvk",
  "key37": "56zhKQGqKk5MDRQs4ye2vbTu5U2MhC6eNz1z4QqPUoQh8QTksup4nw3E8NaxUxU5wzp2YP98A98fJFstoWpZXcPX",
  "key38": "4eZEY6evCDr93tFf5woQ6yr58ea5VKDJji5XtigfrmhoimFk9PaAm5q9BnXRU6j8AJFSwGqPd7n1tTw8xbL9PgpN",
  "key39": "5kJep9dK6PMwKZzC6FungKF6HVjetPWe3rnVRxTC6zo7m7pHYQADt5FMmVMoFkNTVDSq6hquz4kVPu11CnwPr2GZ",
  "key40": "t8ogGaNTXD9qKt3TzW9mxDpQP9hP8YXJgnncNLqVdRkU9BJry29FD7yQZ3Q5eGdHV8uaKboytB5rskLiQJv95PT",
  "key41": "5itCH3tGAtrP24GmYBCnXAHtipVHXcrFWd6fomRjjZryUT2EBeEcBidLAhTSCpTVNdK2xncSBhNpnKNyCAMQmCGv",
  "key42": "4EMiBxpfyqYbieXPpNuA751UkU9LHNz6b8hTxM3RhDd3jGq4mr6ck6W4WUcnvz3yT2U6437C1s9yDYXjVYm7ugVw",
  "key43": "gDFAKxEJNFW8fJJSLPMciBH7BQyjGVh6hdFAsCkWVHBUnja7gtaViKcoQjiJ5TjwReTMSC9CBVKpQBgaLYUeapB",
  "key44": "3wrt6ADufy2Nzt9mYdjn3dGjoQNwpcKnzC89urRzHVamPGnEERVDnu2AhnDf3bDqHerGiMqAxkXU1M77i1P6iM1E",
  "key45": "2QZMezqc3PFXgo66dYnSc1cZiP3uF8sFR2gTu1XMMAJpuvaYRegAtPeq4wtb6UL7qM3FyLcHtc44Mg8xsU7YEYj9",
  "key46": "47gJb8K4BbYeDgRfZwEacE8pcGq7GUJV72PG9MXb6Q9UnGPYf3rGVLY4vduxLDfN8Z5kWTtQJHRvqYc4BFosiw2S"
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
