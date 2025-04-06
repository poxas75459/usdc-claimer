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
    "26q76uPYFA9EKrjPbo78ofPR9c1M7fMnfWkDUczBxwvrZnMBPoA7TZ7DXMBhRwWNqmUchJwq4cJN6rhDNsN8sgWj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hC5mxARbfBBJdganzLzMKaZL6dPqTKbbEPG2vfCzCLXEA74Q6ZSod1g3QwF7XMyEQxzmbB5RKkXQWwaZUMHVh5r",
  "key1": "5woyjbdSQsM82auBRjhEh3rjkRAT32Kk21c8WVnLTfVAXga189Jdw2iwnR91DvpyEkb5W2d8UfUwoBHnztHWzJf2",
  "key2": "5J5kQHLvmxRZbYQ1TTHGFDGwQ5GK5ETGEe72aqYi6VmkAFzXvvc2CYm3MuM15pZmQe1j17hAy7wE4Ba6EYaRi2Xj",
  "key3": "4TrUzrqLXR4wpYgd8ZWjaueRFhNLDaFR57ofejiFBWLwX4y7BpFCow7fedxtx2kYrwrczJhc9xs9FL2UhfvfrrQX",
  "key4": "2h2MFhbBkPuTacu12B5gd3uWHzPphjbpb4FZX3pp3hqxTnaPe3hBU7XaixXqTtrQ9N5CVcAqmcci7nhfBnfaBq2K",
  "key5": "399Xx3wwQt3P3gDA8wMG4pCdvFqhfqjuuzuF64F7SGZ1bcHhVaEu72ngTmsuHezU2rTthVnDKCbSCsJXdf3Cw3mj",
  "key6": "4g9BJfAtyq8upYwcTwRjaThPssDGajUdcy7VQSE2EYEQ1sKH89PsGtnJ5WvYptCViqsvDh4sNaaS4DRVsh2vNRPS",
  "key7": "StAeqWW5ZinVonMdA6PKgCKVAUn1CyxLKYgLz1Sf7m9wVTxG5heuPTeUxoPLptfprp8ZnpQoYhdUcvRVMaojs4L",
  "key8": "5eyAKVG1vjQgy3ZXYkXnUtjTUL9HMvwKwJC3grEmKHT6cdd6EhyQ2SniW9qUFTzpyiX1T44kySWtAh6SBP9BoU2Q",
  "key9": "47UwnJLa1iB8FJvABKCaXuWi6SM7trSbeGb2JELrhXp4AABiYc3BvHX8uyRERU91feqyXLBsC1QhcM2YCFeN54NN",
  "key10": "4FDQXJFgowpQDPGrzpCAF6Z6KQXmadMqD7mUzo12mZB4TzEEy7DV846qfXN5tRHkemAsDXUqdZjWCQftdckRz29H",
  "key11": "3TkfsvFvR1aydoSpSxcJdkrQwMQzAfQKeToJ9A4oXgizot1fu5EahDbeUbj3PxjqafmhmjHKeLdFLXhgjyk8yrmv",
  "key12": "9WWRkbGAtWA8MtH7VbZBt6woGXVZiigwh1BK4ujQark7vYDQ1feyyZiSpX9yWceJ762Xgv7nhMPkfopCJrKecNk",
  "key13": "2pm2bVpWtdBBJMNGJzgUWucT5T6Z79JC9YtdZGfCpp3tTNzTgRGm8o3g1fv7meCbuHenWwVCKCA9xwKEZrB2TPso",
  "key14": "2DgS6g9wfQzvDok8HD3cKzqZPNmFZ47ePmLycW88BSg8oW1LgD11sCUetwmXbnHWhq1Q7rTtXSj1dLFJojBFNtmi",
  "key15": "4x9dTHUfoewD7Ha9eyzbQeNMCrAX3d6PHeeTEA6YwAguXUpiQGz7ucuU2vVJBi3jFoT2ZF2ZmWJR2sypZqG5FpxT",
  "key16": "ZZBywQJW8qZJ8MxbsoEF1aLgCtgTAKmAyAKGVUY8xMNc8p7x1A2q5xHucs5ZFm2KqmXjXfEcHJFVMji94AH19Eq",
  "key17": "4VBYAkTHdknHZ243EPMDKgH5bhwboA7r4xswvHvV3Fr58pPYYfdDUUgwC3cSst7MFysxAoZUjFndXcenD8BvSeUY",
  "key18": "oG3d33uZpD6pBNXsn6LNob5bVpMEqtzkhjTnRDuecoXt7tWMHqQ22VwPhQFjQD54ToEUoWX5WJz3ngzeCWptRqT",
  "key19": "DuDKnUGaUKhpPqB833DB1WRfGr89TtJMyXVkrQpiDHxgaNLQ9qWXdevZc3AfXsiGzYM4THaHN5DmAUWQgqhXD8a",
  "key20": "3zhFhc4rXmBJJKwe2QKRtTdgehJ5chXyPk1NWrFGvyYgUBr8czHDPwcfFQyxXMYM1bJm2PHtYgJpj6Wtta4ErJTA",
  "key21": "eLtabvChGNG1hbZHqS7gL2fZgnVUnZach7rJ4eHkBMHEVu9BVeo1xkC91KFqZvD9drXagcfxVsXKkg8qcvTbdtM",
  "key22": "2WDfc3CqBMr9p9MhC5a4abBF2nS3DAh3BRKohALM9CzENC7khruXfGnbFi2jrFLfTwVPUSFkw1Ft3RpXwuSdNKCC",
  "key23": "5BJ16kH2VgQsM7MyHxKyVF95UmjnQNJR2jRmkTiCHV1Mdo2u1ZK7uhDoTsaNRqVBzVQdzYsFGN7SxbcuJTAsWFuV",
  "key24": "54n7tUtHEqZmkUDYSzmXj2dgQ6BAknfHjBYhuKJQWLR491LmSJGgtSYEtyRjybUyKpfUAkty5odECxubk3XhW183",
  "key25": "5MDMxKrJ9eyKm3tFPFW48Nrc7Wpdp75sfk4CguoiHWrt8tweRwgS9PEVCN29NRQBLkMSuQMm6GiChrcBGK9wQZLb",
  "key26": "54kY83xfKRqVd3XPGY2kf27vhFhMcs5hbaP8nbHG9YAJ7xYnT6KSJrPt4KPwxbNYcQup5c1CN64VdniUQPqmkoib",
  "key27": "honBByXLR6dQBKYdaVjtnkN14Y15TxUAMSu73XmY4yevbUU35xNntPGAfUyndPAxkbAq4VtF9pYKo9nioxYbdYr",
  "key28": "3U6KmusKsRiGaf57XCnQHzwthrTH6Nog6jfQHgdBXvmSfXR7vd93TidQmAPrjFcr88GrEVwmfRV7geWiS6dPZDG7",
  "key29": "3wxC79S9m3MjoamAxkvggXTXN94UiRtxikcCtjyevdNUBLsi9iEQmXDeJpa6jqiUCxy8X8kA8eCsmVezMsjj47YC",
  "key30": "2MwPF4srHcdkDFLx6aMZfi76vCZqpdK8XAT8uvVVpRwA168swyvpxM6AFa3tptbrRFhR1JZ6RjBmouqWz4VtSkbM",
  "key31": "3Y6f52jxNbFrARFx8FRziY5Jr8NBcLxQbDpgrTEtU9JH9UPQfqL2nZN4SuVfo9K3oZB3QN5E636rRFs83gFZ7hbe",
  "key32": "4Eh8M3YRBPLkGVqcCMzXGYjArf5yeMhDYzGp52VXdJFuQPjwmGpDnU9SSnH16FUYnNeHjkQDKnKUfsbxufXTuYb4",
  "key33": "4HrSVVSCBZVUZzDHdSC2YenWzNaTAMnFdrGjwZh1csrFKbC5AUA3ENBMUUsgbvrZZvbH7cFPbBqUaV9XtpVLGW5d",
  "key34": "5FVmfE2n6xaTCiq1PPgmYzWKbpDr2s3S5AnvtEkYW4XY8yRU94ZnHapiVTk4tHdwSew4J1Q9JdxqZzBGCjsNMxEU",
  "key35": "2Wcj67Vn7GzWnacViTEjonrKXvW9K52bwQCmLhJWaCYBLK4pi3vvuVkiQ3b4LRwoH2LoxDSGPUztTZUcDnnC4AXx",
  "key36": "56vPknUsn1AyQeP5EqGYGc7mTvVjf5c9s9cRPXfVgFk735uoYWtAKEi9RNoYnB4vfPXxFSg6SJjjoXWqVG4MXpmb",
  "key37": "3bA2x6LujGrYzbGLiK9VxAgLHxggu2Nuoij6R9F4faRRBPDjG2uwY68BvU5hLWLxAUgUzu7zqwC4XQW5pg36STfP",
  "key38": "5sC3uCQwLv2HQSyKWU9bDbKCFeNLjX7PzyV7pMGvu3baAvh3iYNuERw8MUEvSwi5ZmyZAbYdW6YgEymjc36JcUyx",
  "key39": "2Qf1TGrSg62SFUmJxwj3b1iiTYA6Sv4p8oW8vjkubMDcv3wZorFzU75KSTuLnKCLaYXy6KKbETBgiQBSiaSKHwRS",
  "key40": "4h8EmRT842hqSSnVLj2D25e8SiirKexFX99kbm8aP579sdRLAM9QbHhXvc8uYLctQ2ovEF8DsssaLePxZvJbNfBj",
  "key41": "4CPiF8ewPt383UfvJZdE6yQiqkPHgXBXYFYQoKbw2CHTBwYCMeQ4wug2kJuNGfQezJ9fG3Yaarh2tWzN9j5yJVg7",
  "key42": "599P7DXtTu9mbtvtQXmEKLuvb4AL9F9wpUcetPgKwPfQBCXrUZRpiyr5c9oRfzLzJGQsdP5SpkmNNeuBqyJchbV7",
  "key43": "3hKNfLtqbz6Ns4RgNyiErnPLkLeLo6C6Hc5eBVC6MhhyE4XQTWXZoF3xmG5rqwqi2X1gKA3Qf7m9g9H3W5wLiBAy",
  "key44": "A31oJZHhvU5iRL4MoSUFDwnvJ73mJCF6RCY5VgG56ENQPyiDQsFpFhYZbNWVjMfa78qYkEJahPa8XQ1DvUj1Q4f",
  "key45": "4UFybFWG4RUQR5SYKWNr2TPBeRt5XKa4Kz1z92hyLSEwGjej6diNWrp3XbUKcjQULfJdPXTimdaF6LvyyP2fm7p4",
  "key46": "4q9XTseDA3Em2WuZXkConU31SA5uNHmx7smxtMXZXyLPC6d2KKeU2fhXp6vvBP371F9mXZWMPJN2NuTxC9wD69Fc",
  "key47": "3ApTMXRdmeFvonN62MErBae8Wc7eAm4xtxETgMceTaM2Tmy14aEGZjqTU2ckgmJ8CcJ1CrThNJgDAWNUsL64HSN6"
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
