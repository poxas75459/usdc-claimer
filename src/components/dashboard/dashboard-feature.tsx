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
    "3oxHkMN3UateaDDcEcj3MPa1gR4bXBdxY2BBTtuV6DguR5uuKKVLt4sWhuvewodggmu7agbGXfsy4e1bwEYcncaJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "odRomVKP1rWFjKm5cW357JCraWoGQ4KMnrcJqTX1prvR9dRk788kVsXNisyEBPKrmM8jwe7G9m2KWLArzHVQCHn",
  "key1": "32B3xFJPwm4AEhfT1aaRpHjoKdUKNhUe9UcSAh52iEzzbQUyoeRnZaYKy5ZcG6Q3DsRPrRmw9iKdc2FURajdPefP",
  "key2": "3m7ApakGbyUk4PgrnZEgMvyoPuCbk9KdW8CYzLPCWQT4FaP1CJgWz1RT2BFziSUkjMJ7TyHyWVbivszDgDqiU4n8",
  "key3": "3eVXeHxrjLEM9k2UMCPe9tt8Bv4BwLhasRCmRX6HgtfhqtgFuPQvr1Fx4YJEduevmKU37xGr2v8WxHi4BQSYgtUZ",
  "key4": "3497Udd1TmcN1epvGHqN5Mwm9B8mjUGenSrg4j3p7ZicDBMQ4ePa2c4iYgrkKtWtwFZvWwRGvkJgauQZambUw2Ve",
  "key5": "jNDrfzCiq8ajV1p6cnjgv7XcPTB2EuLTScDTPSUhT1QjevQ3Jmq1tsiHi6fM5h1HibHa5AjnvHrR6VyvuTnAxHP",
  "key6": "5zsfCFZ8PL549dX5fgCRmvkqHNyhSTQovNUdYbBBpxALoHMPVjkonMvVp1BjXDDxYmag1FFDpnA5s2ogr7gs7jnZ",
  "key7": "2GbgjrXwDqUnjW6J8dxVbW8AW93brxZqRSQwUVQGdXpNT2ftVUBEuPLgQbQcR54HxD2Lv3NRTWc8FjEV1fNxjftC",
  "key8": "3zBi9NDUcQMeZiJiF9RfyQZum2te138s6NyqLPHV1sVTD8a1ZqLnCnppbutWQgLWfnQ2FJy8XPudaU5z1FnQdsEb",
  "key9": "45CZ1vNBhVLxBq8NHPxwopxg1CESbDxn9XSMRhAv9KM6Qn5nzMi2FGxTMg8DENS8QXwBg3rLEZXFFuXXc2BoK1gv",
  "key10": "4Bg4mckUvrpQXxZ4vD1ATogsxDF4TYKzbjNZK4DvcSKBBo2axgHnbAnGdrTZYqJzifatX4R7zKgcioCsvFRZCjHJ",
  "key11": "2V7AdLnvqokHJUhRNqgJsyqJi2UhKUBkH9nQvcYcxytkbHXFKbgBwAVUBSB51A9xMzvzhAXZVwdNuiKaNDAs1afi",
  "key12": "RhBRuJmGfQyRhmJcih9aQs5A6wTzTcWGksxJBQAwUqEQ9TAQSz7dw8ynvWxgJYqyCb3L6R19YqaKjDQgQPidcsa",
  "key13": "dmiY1rnpihU7gJaNBLfCtsrT3DddYFYLY3SbnGcW8BUFaFxUs49xWSLUirNzJkzGizSHjN5VEvCocDuRhHZGS9G",
  "key14": "4Bin2Tiz4AYwNud98EiH1Rqtw8sU7kLqVNwvSQfoidGm35VBkQoCKeTG8prcDwEY3aTgYo2vKanxF9BdZJY4LUik",
  "key15": "5Y1JtdZaTxq6pCiZ65gp19cJnt7GY7zDoZ1zaKBtNwzyEUrHjQt79wkTHtPksDC85uqUeR6Xkw7MzFuqvsSLa72g",
  "key16": "2EvUQMCqYibQwTP1VEDWm7jxuksrWntdDL45gKMrVF4WCH41714ELzbRqKqy2Y6VFx3m2LzPZHfr3YH98cUwth3p",
  "key17": "38Woz65x37bLZoxUk83KmkRTbCQ9UFumJBk7WvxnBky5hbHZjkLh42o2pC2yhogfe4x5RS1dFebtwDrNJQBf5Wh7",
  "key18": "5W52TiZvbziNvRv9KWf7ZduFZ2HSMQdEtdg4S4LAphQYTQ8G9HGmAsEegwyQCCAAjNJXKo78P8fKra9aHNZW6UuX",
  "key19": "8iaiCHAjto6x8dMQaNHV5kbX4chxDRGzpkyGLNAE49KLHD37YdBYcpcRn5focKMvjRWsx4Gsib2euzAc1eUYhuR",
  "key20": "koanAzS5ZUeMxrzHxLZGfBXnjmt3Kmkq9zRRgXDdRW9yK5MFYWLzotqcrKpR9PUBMKfJR1GGCrW1aU7RGSeLiWk",
  "key21": "2ubwaB62geWDjiwvAvhdwSiK2FE2U7M8FDB625Q7aqT1wGpV9MJK4pgTZgGBwjP5GjRedqnRcXdGUkqNo38zaPDb",
  "key22": "CAZSkkpV2otYpnJorz1AHcr3oVpBRcPoNV2339j8yLJWyXu8bKkBqce8iXvPzh8MVa7vQua3khvbsN1PDVU1fC1",
  "key23": "zLrX3gkbvbH7die8YXXsevHJzFicUCD8WZQhzHPJSKS6h1nBi7HEc2ZhpbPrxzTjhaebULRhvJppX8wEV3e1yoF",
  "key24": "4VU2aCggv7Vvz7SgEKXaACmoCKbdzUgp6eGqv8dHf5nXmG6cwJuykvBFAAyDfoH16fAe7TNx4wCsfBtU26VeMpj5",
  "key25": "4thGefxXRnUVfqSneMzkrzKNc4KfX9iDFV4akhDEAWoLaxQxmW1y4SMhe1ZFMZNxdVaN13utukCnJowqTzLmzSf2",
  "key26": "34kmohkom86UNTob6oBqGJjzU9NT8dz3YqWgjTEQd99jifT32QNzPz86ocxytos47m84Mo5xyRgJv8hhXf8fWzz6",
  "key27": "4Pa7UPTb7YWYsSCXC5Pyrcdh8kjnQixMw14BtzZDfgo4nm3t16u1WT2Ayhy8s5D76SE6qckXSswjLW44k2bir3da",
  "key28": "5hMZpJ91hj4LGMyHVQkR6kT5Zj5M6X13owz8pxbpM3hEgLxxcPweHjCV7qQ98EUTapvr6VDD76VZ9xHYkQ1RaEHo",
  "key29": "4CZaka7tWyuGzjfj7BW9apQVbX1rs9Wat4xiWtNsK9JcC1GfWXxLzpY3G21koKQiiQSXdFYRYYrao1EExwVed7qY",
  "key30": "3WMHiz5RaBZNtkaWA2a7eaZjA8zyZw66aRe8uRtqeMJkTXdRDDsdAwUwUhCmajD3bV88vaip6cSbmSrLf4t17DhT",
  "key31": "3giQ8Lb8G9oWgvRPBeNwEw6m9ZSPfwsccQzTZ4yurVX26VKoSzyYerCptz1nYZxnwFFPDAZwRphv1vJUHVXUKEmD",
  "key32": "M22PtYEMeVCeL6s395DaNPWKjbkh6imQLCbUVN28ndvTT2ti8nWBDu9KiPdG1eJm2NQ18zi9DpRkw1kXgnaMomd",
  "key33": "9XnZxaHfz2b5k6hK4fqhdWpYY7gkxngpgxeukBNhHvYdexZbbUjgqgYVDz5zzEj6kdq9PUqWJbLa4fedduQyy2u",
  "key34": "22RxrzTBzhvQyBfT4mSooqPuhN9FAgEwUu2cXkB7UVPcmizfVfoqT8j1eP2818NWTSoVraFAUneRdwL6nUtUHzGc",
  "key35": "CU1tjG3rNEpE1x7ikCXbNvjpjXwo6bgAZa1X5TeVJ3Yukaq4o71ZCiQ5eHdnJWCVqGX8bpq5AvcE3STXSexTECE",
  "key36": "55kiCVoznYskqT8JN9XjLMvfMxzZPuUqGUePhd4FvX34b2aa4Vzoi15gPRN7bRReiquWt5NbiDSc9gv91TecE2LB",
  "key37": "nHR6neZhsMAY4AqAvSmF7YwWA8FnfmK8AnJPps4eN7TRm9HwFTviKCCffBBrhMfwhQLAaYH2Mpr95bNpHCfFoCH",
  "key38": "3SpcKMGLFaT6ktTawEe9gmZKYsiZiNcSs2g5pcqScLk6bx9Hyvz2wc1iTYGXwAbD89t75Zq6HHMjHjAYsnr7VCVx",
  "key39": "23LPgV4E6AoqVce5HdbZFwZUJcDkcJhqAcPWhj4GbKgfDkKpYJzuPVY3iYc2RY7tpGK9pBJFEYKadijYXdUBkvtY"
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
