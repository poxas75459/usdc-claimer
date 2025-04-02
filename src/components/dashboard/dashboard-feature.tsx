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
    "4y5zbgQNwppe8EdEfoVTBwuHJY8qXXdYrWBYNSvRpwtUvtC6B8LWRoQQfm7mNs1LFPRCfcGwp7jbaoq6W2iLtjE2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qdcXBoK92D2LkQ5QwyWa5ELPB7Xcr1myid5oVp7MEzxTqU1U9wt43wViQWoDhutbfaHAFsTVqnBtmN5gPH8pURJ",
  "key1": "5XA4HBndBungnj5noX3AmGWUhrRwHFWByW6o6yMkXJteBoiRNf2QgJrAgxmu2XqVmVnyZFJrRzQ1CRq646D3wpZV",
  "key2": "2LqrRfFxZzxh5Cxqm61VEKg9TLRGFVjAEDDsdmEQGUfys7GwLMAp1MHV3G38QkFLvLDyhy6MeVccGwWqdkaVh97d",
  "key3": "3CYJHJLcCYVsA6Px4o8RpfKKvPhRMpbRxWNdpQt5XeZ5tuRSXT3h6MBVEXT8chKKQpRYdqYj3AfvkmnYBTu1SgVR",
  "key4": "2vH5erurS1Bb9GrUabs2Lr2H63PH4AhpkS9hXLdvM1sigN1X2rkR65igoFT2ng7GRmbA8ahDuYqgduQf5jzQexH9",
  "key5": "ZuNUXKJKT69CL5gaPwfcHvQvHWdtMst9CcYw2RLbhW8UStCVYoozSxmnT2o8YAU9ixCABGsyXf5Euy6DWUDhF5W",
  "key6": "3xGAb2AzY3gQy7GJv985VJZKtLJ9XZVS9YKK8F4asEnD8pM2cTPZyqNLWUZsEdzurSEAtrdeMQ2BWephxwJ2RLNV",
  "key7": "oVmgSZzwJhSygiVggDJMXJunMyLcoxmcHU4hjPqUkKHiGMahUR4Rkqgc2ZmsRpEMqaoQCiH1vjZRvgURmCcTtK2",
  "key8": "5KaUMDaDe3dqXHD2PvHperHgM9rc2ydAsBcwBwSpqnwH2CK6sgdUZNHNiATz6B1KHWnAhpX5e7BAycYKzQztShMr",
  "key9": "jdZWXQjcGy6x3GXFKRP4fq1WmfXhFG7qGBy3J7kLzw4iBqPacpWmL6uLRjgyEjDd7PLveR9yWBD3aSvNqLF3cMa",
  "key10": "2B81mi7JKebL7pgYXCCxfwBbv8KVLsWH6cN9oQh49BtmnBNgvPc9vKqsuhk1RjefpmwgPv8oxe4GyFyqsc8iowVD",
  "key11": "2mJBBq2R3baaijEcxsqjYzYMzruit2TDzSPseNB8aLLNc5KqKFNcyNqyH6R6QaS5P8LDCyntNYog3u8YyjMEvpv7",
  "key12": "2zE5umRVxAqnjkakjnwBS47Mx9udjjVhnidJ1KsK56srh4njFBh17nVgTYGXztXJEvoeoAEaAaZRjtnaE1gJ2U5J",
  "key13": "vKdkK81qZei7DFca7cjBWV1bH5yb6bFASYAdupdELSc9atHEh4iiKbtPQUzwDR7rRukQDX9SBGyTpRkkyWCGFWq",
  "key14": "51NPnqUK7QeyscV33pRUwAk5tnECdHGCAfwd8ycjGfRC8gC6axtV2x4KGq6t6CZiSp7phzN1FgD5mcYD3HN2Eom9",
  "key15": "5SGKbHK8k8hk4dTveVJadynBVBinSDkgKL3NqiEWFfzeRVEjkNrvE9B6JQR87Yr8hyNX5xZmUaHzn3JsBGAb5Yk5",
  "key16": "4KJTRENXK7G3TnM3YWQaMs5Eysx3hYxjLMyGKthXWj2ABrQJvTEJMrmNsQR5dcrFeKKaTRJU5XZGiYhXZBqhSoUw",
  "key17": "3sxdo6F9R7Z13ei2NMLXS77564QNbfRzeenPHyPqatdiXaXnYmYffLKsjSgBk7FTbnw3wjgVNfw65Gf3js8MbvhE",
  "key18": "5dtc3xaozsn6DVZ4NEVZsnPxYozzwqshMYA231YiTcLkNAmoW4RK3cKRJXrA9TXPfNZBVszFjqm6se6JP3a8SLRy",
  "key19": "6GtvobrLaEuKnNrWH6J6K1n2aRDXfFKVbGCkkdrMcBYfoUu7R1iZXLvw5EAkbL4gbTgzAWXNTWrfGvbGRV9Aj4D",
  "key20": "N3TLfhRJ44M6u1A1xvRrTTsiDnfpCmcyADJYMnNWiffcPo4rHknm6U35rGKzhoNfqxS2eirVsuLRpC9AhPBcwvq",
  "key21": "551bgrLaARkwbpvCKHawktpBd2N4hoXVSHdSaixJ2TczyhuJGcrGdQj8snzrQGVkX9rNdCqroxZFiQ4DQJppkuHC",
  "key22": "2b4THw2ynCrDSDirifEVsKgi3DuvygFiiiLoBHksySpcuAQtVRFpGtR3h5o7ZrhHrYYarHojp2Q16rBgCMnuZ149",
  "key23": "3ErZfi29uaxPRzhSQdT1cRcDAm8f2JpfF7RZgMtVbyhvFmQsmt4vPiFzAptdrP27Ph6g8qcPfyz1M1kffE1cAmiX",
  "key24": "2qekZboPT15AEkacjSrA9o83wDwWSVNfQko6Eq3t5QLjYMSwGJ4obxWNNRms5oYwb3oGFXj5yUNHDyDin3hReRWT",
  "key25": "4Zwg4j28Z6TgCRMWtvmCMrbSHhqyMdBvJRTVgy1XUyZp3qUjzzh4qzAFp2iAzKgf2DhjQuibuXXcgqZapJ8EHvKE",
  "key26": "FYe56WS294ewqQtmhf6uVBxGdszMZhG3cbEbURaY2oiJRF6agTSL6snvyU88atTxtrFButcgTcELxoaJTTsQc9D",
  "key27": "26sthEMqwN1DQCmh2adtzjXfioUKQthY2j1rHPu4uRVVUVXePnu7JtmTXtKB7fXEbwoR634BXT7iqgBnh2dqRMPs",
  "key28": "2kTFNeJ81faXCrMrmXwt9ge6ENxXGiooEFJ99syx6XfpLNNtrb9MK7haaUv3Tho1tTcr1wY4PipMu3emkmmRo9En",
  "key29": "C4PgFiRoRQc2NVaWSQGgT29ZCCE4Wr2kfPCwAFp2vdcDVz24uS3RjUdFMDm5rT4D64MEa21qo62ZvEUsddF6b6Q",
  "key30": "5RUM3AaXpFShaLxoAkc1ipoNz7ZgzfMxH5upP2o3i5AiaZ51s6YQac6XwMBXcrHRmzm48CtBY1BJqnZWChfeym69",
  "key31": "2YhDsgMwc62k5ufyzNoBdFEzVMRVSEFE525UEHVTih5Ns51hUoDTs8RmT7pJkV2ZM2vB6n3KZ7nXw88PHNftkAvm",
  "key32": "58LrPboyz9FhGt3rwa7vrZRmLfFVytUjMTs1RiR8T4EaEc5F8jT5QBwhjsMXx4s4maYk9WaRJmLsBMp9wd5Y1Xew",
  "key33": "5TDxWCZyMCNvHp8iVUcYqTgUCUHzNcWDDrnysqZtVapAWjjLrdkZMwDfMw96bJdrq1kuuBurbpDi3D54CjqeBAgb",
  "key34": "5cpzhDsGCqybrfa2uwtB8uJmSMEUrUaH6KkbmwQH74uBt7ozKLL7TjPyj91vgpXdNcr88X8yB4SAKQ6P7WUpuYxA",
  "key35": "2wxgCKLZAAhKvvbGvizHS4aRBnsmC7mnqHcCehgEtvSgKVbh4wf4q7bajf3CW6eT8yr4wv4Vdx8t51gDKn1Ka7mb",
  "key36": "5DHbCXy8cmMR2YB3F2Ra43S4NCrrRSxNgkgGruoKTjk7J7rqX5PYSysyyeXtLb7xGdp9sZxuFHJAub73JmBqmbns",
  "key37": "58eMcJWCYSMksvusw3HpHafth8PEaCu6Zug2BEJKxgdf7FGwjTkK49fWtXjdBk4yrryuotRENEmNpUQco9qcK8ys",
  "key38": "5STiSywgu5XiPUEmaQ3gFdWoQJyReR8CnS3CEp1HMD33rw262655JSiCcsamixRSSd4CVCojvV8CQLU4HVnxaz2K",
  "key39": "2SpqegXW4nANkVudpXpgKw97Wm2wG5Hg3Rs4rjYif7PB6QDPN7Zj7CwVRXFxrzTM6ezRqTAQqMA1E3exqrfqCTWL",
  "key40": "4stRWpsCcw2Q88e2F2iVUW4Hh9TyYyAERJPX8jc1y5hSdL5QprFNqq2CN5bkMmUPSDNdsrWqRdhNro6rWcpfnjJk",
  "key41": "NjcZtLbpJ61epLn3nJR6rQnQdbcAsm3LLjjb8K3629BkCPvUUj6exMW3Ytu1yaQ9ahzLeAB2XYLx3uWgnFWqRTi",
  "key42": "3my3Vrioau33KWW3xW6EsH5chSxD4UNUUm1X1QSkBTRAuH2Pq81CpoQV7qabHCTDy2NtBQntRj1QGbtmk8xMABsJ",
  "key43": "5rWaK95cirLPgfSeiELcS6keQyzJ9rxBcb1H7aV6BqrCGyK6EubVHUjV7cPJ5zNNeoCaB7zLHziUbhTAp5QEoxHW",
  "key44": "4SeNmFYmZ38TuDjXLCTaZ342Lp66QARPUZhFE4vHGi7pqtcE2UJbaP9a98XsCPtpFt8MxLmbhCDPLEJZLFgeLYz4",
  "key45": "zQFCAsJd64uyHtXqB7FpYPApjqpom5UgEqte9MjtxiJBLNoppsFduwEX4CiLocQoymKALtkkM1Hm5FFVXeWpXyf",
  "key46": "42LTttKaWLvZWFPQBsQWr1hyBmjnFD7NtppLkmczrzLXHNAeZTNPAEZcnrF1rUQwvbWxsucfPZbDDZp8Vvoqcywc",
  "key47": "3XoRpYnniwphckGPwQmeHKc5KNtByHvsZcTf4yPnCt98BWxK3i8qwCYUi6hshJQEiP6wx3PrVWsgaaovupCnAcHH",
  "key48": "59AsBiF4Y8yo4JS9zu3ygQc6XevGay9kULU3vw9NCHRqMAuxq8DyKwoJhZUTLYPuR1y4AJcob3doChMafC9mFbkj",
  "key49": "v6SWN38tvXEr3ih5pknb6pZaVFkSkP848ASsXNYt6twmFBLkn9KfWcdChm1A17XunGek7ueWNUK7pRMXvua41zt"
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
