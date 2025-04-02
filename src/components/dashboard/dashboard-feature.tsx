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
    "QP9zrxooRP4aCq2WaeAbhXs3Zb7twMqHJDhr1NxoqSiy5SRRurGwDiEhcKjiEDhhZNK6VWvA9t7DCELt1Teix9y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FfRjoBBu7ZRpqAHCakEZGLbizpW7yxmJGtkTFxV4GW1HK8sQqdneAxSup4YuAnsKv5qDkJuJMTjUU4T5xc1Dked",
  "key1": "5Ncq7nt4KmNCGu5jo26j4oMC3QZnKdFnmkcTVJZqivx373pEbhjVaQmB1guFR5ryfnshtjsTyGQ39zZTNgeosGHB",
  "key2": "2sZssa2rDAD4PbchrjkGCpTjiH8x42Ea24kSCX357DVsR25Wf2BADyUbADAh72qEsPBvtjJDo4obKZRTfj5gaa5Z",
  "key3": "2x3R91gmHXobYhmF9JABqP24E8sMS7ZjoU5ac7KeHqoXq9ovNtXopN7LqAAQwb32QUUhusDqfp1Ae5iomkx646mh",
  "key4": "qizPu55rL3cURKzzvYma345uDi9MqGpkAWKsiKURvPDzY4ATgoQZ4m2gXFXipnGkV3mRxYT9ytpFUyySgxV2wEA",
  "key5": "5XkDvC966XqaBv4M9y6Ws3j29utZsHbxz5MirHDbo1sNBmwHjgRt4RzE7pxWKtHUo1xF8URRgvaZdxo34Z6eq7EN",
  "key6": "2vy7DD46tw5JAudiLY8MfazVi9gLu1xuu1BtTE9HK3KNvhdquEfFJ66URZHFLcew7FVDvXyx2MoAdVdHJxU27ZT8",
  "key7": "5WbSnm5rTeQxG1pu3nbaAYYyEyaZ7bHq2G9a9XTxWvChJo9MHTujYuoJ6fQXbfLPDT7CRd99kkLtBbffdZSPTWaR",
  "key8": "3UNUiLtNBg3bu785xZ9ZBZ5Kn4iaoZv4btKHypKNbjVXRaLkfdfx8sAqDr2fXMWBkhZ7okUCD5j79rbTnPFCuBu8",
  "key9": "5ZmcHsgpXMtDj6cbSZnF2WeZpTxG7Y8aZsAnvvjMRVBngXrnXEAkEs3jU9qzmF62Z4aCHUMdqTUWx9jy41AKQyK8",
  "key10": "5bXJjKcRP6rFxFxnkj8eJ24wjPLKNgfozSe4qcEVRV2BAjZu9WG4RTMLdXZ36eGwon6xLgWVCxrDFdKMX7KM5io6",
  "key11": "3iSCqXuNVVsg1rauj8hJzJBZcfJPGVsoArjZPQuE2gaKdd7wSG2HRwNW8eSy4dGuGxxiV62HBoLhCLWtEZ6SfJeU",
  "key12": "2dafWDsmwVauR9Y8mLEd5ViGgWWRszB7vyR872FmM2RjpnbQiP9gHn4A3hUzUkY1QuMmYXwF4a4t63kop7YCNtnJ",
  "key13": "4j1yWwM2iQQasVPhbRfuzxiUpXSWLQgoBuFKpxSA4xL2XdKvighuXnbvufoQNMXcdGLjSt5HvNfdJDLdqPiQZCdE",
  "key14": "39xjGAcUH1JBqFsdBQfUB7yFqcTjyXfEeKhnDm2NTDeGSRwtCHMjscbNagfGSxf2mfoyCDGTqR88Xs6CBBaryUDd",
  "key15": "2TmKbnDx7rTt7cqMdcTk6ZbaUBJEPJ6ipCVzTnN54GHEeAuJAwz8hiL4wHKcNSibB4jtC1ZHQHm3iCXm172tZCvi",
  "key16": "492sLnvDZwNG3vaUNpcPubq1hVhVJsLEELxQYXx84JRnRPhJ2WLn2orEB2vEKCU2gz5iQ4viXDLyGhLQfmo9yHTn",
  "key17": "3Cp6DmZg6RnPvjthem5q9xbnf2vwksu4uy54ia8NXPW2HFWXn6VM5bYMNbZJ2WrpMz2oqwmtGHb8A3smiyPexdWW",
  "key18": "comdQ6p51qXwFgn8dwjXroVLpLKTPpKC2vjP6hFwBqyqeDRNLjiUtMSkBLha2iCu3xP27NMVcAS4iAfg8xSNKzz",
  "key19": "T2grX4vgkdZubhor36BuDqW6zTAK4ebZDnGffeo4wkg6hwQSr9PtrkgP6RS8sh1f926tfLkykJHiVfZMrPrUonK",
  "key20": "AVzoF1PFrTKGYmLAKNJWJBJzJekgrtLJvjepJxptKXvhx2YsFsrfQb578m1B3TLKstpS5WxPwfKoxDR5gZoJB2J",
  "key21": "4ZCsp3RSwsTuab826d2542U7YDxgob93JQ2byuuL393y5oGe45vafmjohupvyWshgpS8XW9TNosu4ukb2m5vFVtq",
  "key22": "2DDAcGTMJPGrLFaFEN6JdCY7YAvvYjFEREYHTa5HWTkcYZ2Wx49LAYUHwGHj4Vyq6P4ysnKwYQy7P3gvRTxampkx",
  "key23": "4T6mdmAVaXenFfNuRAXvgtQJFGkiB9A1rntDJL6M4LKLzHPb4j76hFuE4SXUbu6QuV8PP8dFJTfn2ndtJ3bQrP3w",
  "key24": "ysbCy6CjUGZgm7Gtkf8Eb55B1E4zofdeat3o7oCMyeKkNki5bu6caZG6WmYy2nBUsswkuxkzmu5FDMUseiLn4jV",
  "key25": "2KAGu14pUWFtBJ4bj4daZJugWqk1dVMcbKNPTU5bNrDyD7ZfjfXdAsi4nwwmyeXL12UuZhEFb64HgxnGmtJgusyP",
  "key26": "vLzE9YK9dC1bAkJWk8nVXAhJjhKo8yMU4YceVGJfvtai4TUz1K9hSX46WUHuWVBy32dmt2sye2H9UkQ9PfeRsPV",
  "key27": "uq3GfwaHd2T9ph7VgTSZ4ERRHXzoT2m4cA3EYufmQ3BxDa4igVGz7EDibK3TJpgefcioKPcY9cY3ZSHzSPt36uU",
  "key28": "UVs4G4bMDJrwRhiA9YjE2ohPUxahPVZuZtdhCS887oWLNCFdsiLFU6zv9gR3LUn7TVAzH4TmjTnSD9muZj7dDkv",
  "key29": "4LXsZEEwyrh7fc5huTnUpsRyUNbjZorvbzcUFBubugyPY1vX4kpqUddGiK3kZ7dyYqpKkGj6p91qaAwV9C2ny4yR",
  "key30": "5Kpzuk1VjiEUQSqTBKnEEUFyo5NLncMVznrBy3r27eZMFDoDSsJYsKRx2pNmstU2TLyf3bzbiHCeoXtggPgyqvzg",
  "key31": "3im6E8GeXF4hpPR3txRx51ScRpkjHzdZJmRdx86rJ3DDq4tFFS88aW5yu8yxb7gPMb485QmTkHxcPkqsw7zMTdH7",
  "key32": "5c2qbUNH8Dv4qGsoLKGrviBg4YMAM1e4jsKkqMZseFLoy11HTinD6RZT6Kdz7WpSV1Gcrba19JNwrYXrmkTJW3wG",
  "key33": "21ZYeK7Teb2G79q7VSs6Ma2FKUi9C7ze4nf4z1nR6m5WAkLsEqS2KGdNrCeXVmzRHusJgK4w34iaF17xs57qrX7K",
  "key34": "41kdNmnkjRnPfg7BEqkttUF4uuQmxzr7dmsZHrXaYrJdC2XLmhnqYXgxpVGVhvYLLgfm9wPDz2AHRhv6aRxCBzz5",
  "key35": "5ycuxFPFfNNLNLsEaYWS85A4bU6KSgXp4Q8s9Q5LwmzmavVyj73J9Hfu6XwZmamPY5o8CuxWLzjQ8CcKjoE3nA4k",
  "key36": "2ncH4F3hmj7xohbrpykW7153xRL3XB6jKwVxBcECNpDexhSbuZJpWxVjnrNypRp3TuX1iBD9Pbj8YZ4PNTMsw5N2",
  "key37": "4xGbjXjUiNLa15LswXiU8uH8bkdtwEsQ8pTLH8GbY6MeHaZxonYYesWZfzKwTgt6iLDVf5npNu23vVSRTTXTuDwH",
  "key38": "4k4PSUJjLLuB2kBv5saPkDDGBpoCjAkpmJkE3wt8NdZpu3SnCNeTatfvyLyrBce44gTWtpnFkoc66hAJNC6VU49v"
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
