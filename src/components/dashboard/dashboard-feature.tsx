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
    "3VNVFgn8nTb5sMbzn4PV26QasxTeeam5v24dxehQ9aGYJf3v3iybXZvuJCRugpWQv8KqXsPwUNKJ9CEkNJW2UUeu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JT3wvrc6udBhcfBXpLKaJnbYG9gQGR1tLxAX1pK5F3JLUPXvYoczkFUiD8oneVJHo1TEEqDzLfC1UQoNhGZEu4W",
  "key1": "46VNNufk4r6p3AqTGXRLFa3iSn5AzMDYgoR8Jy8MgYQk58ygQ3e7XD66HBbWfUJu6t16FoPB8hmLw4omDZFWbez",
  "key2": "5HFkierzJenNC1VVC4XsHRv7e23gpfcKn2n89LnUYoSNgXC3sXVzwAGi9bnMw7mxxiKABK5E1MbSFuLaSddePWQY",
  "key3": "4ak2RNn9iSnYavqwsVmTUy8wjh4Cq8hRQDV6D9UkmLtEgxr27y2z7ZRhnVaRBf3UhNxWFYBPsYYZ97WDpNYukgrR",
  "key4": "zRhaZ1TWBnf5ivNUHKyEqe7xvPtLTYCMzJtex86UY2GphzjX9vzpye1D3DVuqTXzmZnfy7mDRPYJ5RMmJd6jg1q",
  "key5": "4LYbypmcKFTirhywK56fdLvRcFBeBvrftJVPDm51i3X2w76VnFK8SSH7xxx3EWEeHmw1rjJtxTmYUwdsbc9mZvmL",
  "key6": "3ktwgZV8qytNT7EEV9z9YgJtUm6qJ9oLLB9v8RW97gS91egHRTVzd2KN41JsMThctzeUUPsMDqeLDCG9aQ2F3nRW",
  "key7": "4RERHXWVRCnTGmeAZPFE3PN8mK1tkoYptrsh1NP3i1cd2QcA5RQ6VqpzDo3kHEhbLoeRAbTPL2aL8sW5JrKfHZ9P",
  "key8": "siKbAnypz1Dh1Ci5cJLMjHZV4Tm2EcCZa95x3bwovbejrb2fYzAMEmJArkwoHLsXkdddFvQtcqq9sRzgwYoHCzz",
  "key9": "3LG6a9yoEdX4hogjNEZGkLgZvXpeQwDUeCcGrceyjFr4mzF4oYcgj26Ki5cgkrq1ntp3dDqu5D5o6SjotuB9Bf2L",
  "key10": "3C7kvkSahurjy9XB9rkRVUhdXc4tv2ZumTY6X3kT7MEsKgbrFvP7kUy9uqgx8YbTDkrWaJpTJpigsEU3HevtdQAf",
  "key11": "rLC8nKmy7P5VawHhgs3mVHSp7LK38vFjNjBJfVFbJ3Ef3Y1EMBQLcvsDfuSJ4tbMqCTxvwvcbYWTM2NyKbC3aT5",
  "key12": "4i2rpbfi2YxiKDNhQWVRDVoBf3mP67VC6qNT57PNXAFD1LkSSotXessnNAREu1wkSrNwT5UCb3PpNGAXDcrUZpQo",
  "key13": "CvgCrgtrvsso2XwnMmLEuaq26dWiZSetmt6GJcP8gigy3kYkqyvXSKPZ6Uy7LxUZnXD89KsMSzpFC2kaeagwtiH",
  "key14": "3wbJW9pytM7tZ8myg7dncDM13wQiC3hwikvozcyVxdQJ3rLezuvEKADf9BGoeqYJErgt1kS4TjmYresw7xKz6Unh",
  "key15": "497gADxbVMeyvXT7W6BywidDTirEsAYGkjQntfnfsaKGDeTFanE2Q4pJDsF9TKfSF21jiMs94ojtmDbUWwEgsYGv",
  "key16": "5FCgz4bKe1AwgWwLnuBe9g5eHa6JDtCPymCJTKng6zAmwqSKtAPEnk4zUYNuQPinNgMufejB1b7wnZYdgbkj6sCh",
  "key17": "5UmyD5pXVDdwxqtysGyzjm94q5H7W5E1GrJmtDc9Sruv6rjZrBPksQiGjXcVLJdPnieC3dNinwAaVNVfexzQF3Kt",
  "key18": "66h1jRAWqarTW8p2EK4EmT54tnTafKuiBTVT7KpEaEVmYCbYxXBP5bXweLTy5kagKos2iMGSD3tg8gej5nmXcvuk",
  "key19": "521Ur3qezxpHHDbDhm5THpwKnbxjjtZ16DJkqhmnZGEutaNohtsF3zerA6ao3FomYNMU9GYWkkNGkw1yVkPYhsEv",
  "key20": "35xLfrfdrkWqvoy96DLdjkfYbezyoQPtBh4YX9C2VEudCgyQY2WUnsrSQ4Cm89wYR84JJUjodRuiGqf1d8EfnXnL",
  "key21": "3XwAWtGdV6npwL3afTmGbL2KZbAeEwH8P5kovGsogzqKByTjpAzLbEyCb6HtkPgESjNU6DzHo8is8GyGDCtE7rmk",
  "key22": "3b2NAjp2T6aSaXpww4AZtqc2FVkDQxTCP5jiLq21FrTLpbC76YfE8SXD5q9fLJ9K1FApXG882ASg8zUUpxg5EozU",
  "key23": "2mRBjEdHhwC8GQp5w78StLsizihuPxLaDJTX11nDq44h2n9gq9kFCKpd9cmigQgM2JuBZiLi2mqYWY9UM3m1VcdM",
  "key24": "2bYCoBEwbEGZD45reNJU4ThsyEqJVV8Tb391Ra86bbZaitbSpAxF9gnWKntUVedNPk44dvQHBGw5yD3jkHa2M7Wm",
  "key25": "8aW4Wi7HQiDnwfwVf9Z8Fjy4hANMhRGVgaHqJyCJP47oD6ZjuLjhAocMbCj3zijzbXyMPBjGP13wn35nZfy1PTx",
  "key26": "2YJPQdsvrg3gs6pyqbEpFKdM4MjxF2yVqoQgh89hSqPHjDUxCQFcK8xykr72JgMTwCCH92TCkxD6DuSmAfcDjTqg",
  "key27": "C1AugvubHSP2a5xu4HXHoGTjz5hxwiKpx7MKNErbHc9LV8ShTX53dL5mmfjLjYZssL7J5bjB7TDy1twVcFV5D4r",
  "key28": "7GQr2VgMNwZqgc4i7kP4LVFD7TLaPYkuTxEC3qsSK7PJWgyhamecHCteA8TMd9cR9ZbsNo5Ye5YcjtXZq1fwG4h",
  "key29": "5qAu6fNy1VJRov3hMG4tMSsDYof4PHCcJYVdPuxXj3zY7JzHLFfFK3HGrM8ogJuTpgq7hWQ85ozy9wN5rMsBoojE",
  "key30": "2DTHZNrfv8F5KSDbcd6GAQpBYc2Xoy7L6b2urJ4UwTbwvvpwEXYA8eaG4y6whwJp4skjfu7QfEmioSeKZn42uZB1",
  "key31": "2LUHNXD8EPowCXpF35akFGHrZC4okgA3Wtx3Yi48iFYVY1e7ndLtorqdzj3PZCs4Ham77kvTGZ8Qs8Xey854wQfg",
  "key32": "38fGkBxBsWrALvArpDrAHx2zJqgi89m3rytwY2Ai1zjaY9NPq6HMxXQrxyHBYjBguehcQTgree4GzFVYqcyFSanx",
  "key33": "2MiH8FsBm9S4U2NJwH92toH7X3n7V7PRHsPqJSDgZEWyo6NMmiGWtVjgNPgZq59SEVMWa8C2mSFuagEAtxxQ9S4E",
  "key34": "41itiS7NZEdN9VAh9wnq9aCrWSZKA8wd36VBbvHWs8rxDkCMK3PxaGdi9qX4M57xhYFjqd2FmHDQRqUkLPB1rGHT",
  "key35": "5qYMENQzmc1g3K3mnSuyv8QeMTf4sK8rRY4Yiu2qCQdqwFgouvveXEwj9ofWXPWpQcPVdGqeQmqdkXs7T6tb8EcQ",
  "key36": "5wdNP2YjRcpNEs3hUFhfVzQBF2YqtMuFT3sm4kFMdvTLJdAe2mU1JSgH7raKyNuBzvVZXKgpRiodHtn86WtM5QCk",
  "key37": "mxS6WwEqQ83Y3qLCmitQJ48jioSEj3v1KHxrUL7eE5ngk2CLEaJkAWVPztZ5RmE4QG4dL1B7sMyj9ZKHpXGiuZ9",
  "key38": "w3uPtLHC4Tg2mfYsDtZpvETae7AJe3A744EZb4gEogM4PvX3j6PmJrHT4jov8L4ZBDnvtuFhsjUnFSFKn7jmq8U",
  "key39": "4HSjmpaTURVZGSVNa9bk6V2yjLNwM9HdQVuBmhT5iV8UAsqp5Nr8ovDNSsy8JR6y4GpkKLbXfdgNGmYtJHANZRe",
  "key40": "2WXUQHGv4Lg6gwj6478bTvs6RgdLreKe4AxjzKntFJ767cVhT9GMMEAZv6KCA59nqR3UsPjPvbxNVpDBKGsb8km4",
  "key41": "8VcVAu4Yh2NtPWzKrJRdWPvbePUffsTmDgDJPfzJ4KRY1AFuSA3UMYH1iGb9J7tvoqJFCBhxq7rsrqvNPHrrfqh",
  "key42": "4GLnhqpqFAix8r6fRTWZVSUnWGNH34MJxyjGpZkpKSK712VDUBuxmU4Babu2nzg65Bfhjg4odbZ9LPF1s7nEooak",
  "key43": "FTxwgTEkNYMSesSNnTjPupeLTmxygay4yxUoqKWvy6anM4Ee3X8HTw1YE6YLkqPg3cZX4rd3NTF3qk77zkKqTEA",
  "key44": "5bq8BG5X8Q6zPRkyt8ZEPBKu6umcENRn4Fi6E2xVkXKGqZzQoPyBySMSaLPoomXgUtUrSSxhoaAwWJyH57ewckiB",
  "key45": "5mkbgnkCBUH4KMoi2vtF6eW6KXgGr639crkp4NB2CupNFbd45zAghxx3618Qad67kL8NH3t52CTuWsbhfBPTSW27"
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
