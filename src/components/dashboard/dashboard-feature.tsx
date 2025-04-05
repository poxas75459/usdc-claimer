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
    "56h3i1cbmvJk3Hpk2kuSB3gjsoB1ABHbDpJhJANJXoeuNRh9b3Bns8di7FNJhiVhxywbTEd6aL6s5pacEoBzyc6H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UTAhCG31GrwLd2iXT175WfK9KLdEn6DE9Cbq4UFayLknwjL4UoQLoLwha2BuDzNpb5j6dcroXvgkonLH2tuQ1Px",
  "key1": "2N5EUYnosa7r8hSPR1QxpggSX9Qg2GzKcohUu679HMJdT12hAPta5U3KXLNHL4xcPzYbCT59qvSmvXGZzVC2BFAR",
  "key2": "31Aq3MPyojHjt72sHcR4hx1MiPC5Wf6EtiZC5gHeiKEWsz6322whYNUEySxoW4Uqt8MnxKhw3jKnpLyTjQWLj6MA",
  "key3": "4ksoJLaUXTS2x2tWLzRkcE1tgP3WTzHwMswCRB9iTSua2GZAANqWWEU2dk5zhhwbsmPwuhAKFCuSXLLL6L1SLce2",
  "key4": "mar8hEVi6uBUJUGKuriEfuHr2sK23beJvBbCoaw36JGfJPo7ZxEMvRUyrsRsCSTjQ8cNv9U73GjTke7sH3To43R",
  "key5": "23KZRMr7v4bAYW4criqoF9UL6CEYq95dxgvucAeTr3zZSHrQ2PymcMaxdpEfhak6qAdnEjck14m56xVKQTPFTWh2",
  "key6": "2FMUTyiWeJKpRmXUPgcAUuaCDUzmJheM8b3ktGfnrdmW6DhALxs2kbpijinnfbcfFSCwhDwS3GxiarbXi6pcjyyD",
  "key7": "Ad2AKUQZEPo6p6EUUTri45h1LHRTRCk9EWeXqjeEN1BYQUCQ5syMPRhpTc1fQ7Np2oLU38izx32HFm5LtXpmddk",
  "key8": "YdgpcsanHFMYecLEHepYwbxLEXrWp1Xk6PmVZdYGmVjUciPPRXiSXtX5W1yE45zFNfqu6S2pWuypDXTMLXiYQUt",
  "key9": "4RaDNzizi5n3K95ncFXfxSwyVj47jfhwb5xyyF6esvX1QLPAMDhyZGq1kQfFWnK74NZedjd2RNeHyLV2SZbxgUfi",
  "key10": "46upZcX3mSDmpMXiW1b6JxgBobTZTW76uEFNGXg6BJ7oBHqy9N3erw1dJHVSCpHHxcqc4G2huaEmin73TmToWf8H",
  "key11": "3Lw4csLLkDu83UghQPaRSruM8aLuXT8xku24wF6SeddNNTy5AbiyP5wutc6RVGgZGEEVe2AtBeDzZ3o6R2XPhyKf",
  "key12": "315JKTdefah1GwYoNXxhSQnbKKKxF7AsbnHzegdjseprmxGKRDPX8smbf7ipyU8CXJEzcxUxzumc2ar8dVswVcps",
  "key13": "2qL48Zgjdu91ARQjbxpSHV1W7bQwE8bizb4HVd9ThxdnrABBBhS1iiSSrWaLFLe6vMezCqgHxJp27qcA1XEr8rbw",
  "key14": "54sG63rnFBysSvCbXd543cdbHj4tHqexu6parvyoKkKVumsDKAUebJtnuC8sxdTxNBSsoBwFqpTTHjkeds2mApqp",
  "key15": "SK8kHeW6kS9kYPiPe5SU2zFGsC175r1bBKPSDNqWc8DLZyNW5ohcjzi8eoRevcrkCNZVVLR1rkxpeenLDSKG8P2",
  "key16": "3V94C1TFKV9dvKmXoqCw85L3BKYU2T2RjRZQS2Xgie5vu4sdb2nVyTykVwkeBWWdpBsXGvfttUUsyFXKssLF9RKQ",
  "key17": "3DoRAmDMqduxqjwx7B2TrfApNMMoytGzHZzzRRxuPV1jokwQs7v3Dob7SRiMqRjXAVBasK67mfxYfjY641dfAduc",
  "key18": "2anFsqoujGUqVmYDvxXJPyK2aneQvi75P1kRpJb8Z2jqTZBdtY9r3r24GJjr8oDmURPrEt3PGuPf1M5NmN43FR5G",
  "key19": "UqyEJ2HFDgAfJg1ENbJyuiMvEZhTbFnzXC5sJqm2jVsLvHFtsrUiq4NHd3rcpt85MsuGtbG5hDoxBqppNLdYhrk",
  "key20": "4FubNGFLmqeRGuDiqh3qHMEtZrvX1vvU5K4KFVJq9vq3P7FkTBozn1StLzwrXPSya4jnSaxZPkeivUAEWEcsj6aY",
  "key21": "rer5k3cxxMDUrvTn2yHyF3zkfXJi5DPhLeZqgKj3CUHcbpHqDVcPdpG4ZhXWaKN9ihHjMXmuFYdofjCZSWTeNbG",
  "key22": "gVdyU1sFySeGhtNLvRZjK4mdQJNwDzS7V43CDnQ5WPvFTn1ZiBndJPMNi44sXDa9Ez8veeCWpxmncubumzWUFJU",
  "key23": "5yNBECs7niDcpm1RKKU3ZW6gkMkoRvuUCbQ2HyWVAqadSWMZt7rBaKnSpjhfMM4RRE6z95uTBoLbXfvAtzHsifrt",
  "key24": "cgKGUbuurgThVcJKVkWaRGZb2RhZLuMybo2uC91jtbUhrBjhSTpx5fYj5cZ1dW78UyeYNg4LXdfsx9hDci1Rggb",
  "key25": "3ZDy83Tyii44EqC6GHyRckjyySDt7ncaHTmJL4TemzUUC8HbYAH6GPwA6PHB2GsiGF4dW6RvCSLamALHcNErWecB",
  "key26": "XXfkLKJfbNhmKPAjv8B8FBNHZb1Pe64Ybb6jEZQ4L4GfeDDCXcbe6n3NM3wugezahWo1F6z5ScjTJyH5cjV1PHz",
  "key27": "513RBYFnueoAtmpaDBSDsQXkugrudyj7AxBGGCCumevhn1mUNhpdfDqHLZU8iW5zuM7ihowvqn9eeDxcGduGVFF4",
  "key28": "4jnRT4dGFB7t7xWSZoXhF3nWpLRywDngqSQhJisvQYMU2bykEWBCduprW3HnS28KhLNVVgpyqUuN5jEu5Lfo6bL5",
  "key29": "MrMqMefCrFDsc72fQJ43vbMHpUmXh1jyu5Y6uA5fkKCkNVH1wcwvFCqeHsdUTdqCPhTQk7Ufecqxj9dveVBKVHB",
  "key30": "3pxr9U6wdos4fQBuMT44PeYUwZVKGY3jhWUdsxZ66uX1KwR7HfAsXrKunbXjEESHL2G4WwTH5v612i4xqZcHPQMN",
  "key31": "3KSJc8GUgYb1ZVecTGN4dQnJ5g8JE8NAV6KN1vq63pjakUV8GmQWTisoo5npqLj1sNJE1cQzjYP8HgmfcEeAjeQ",
  "key32": "4AKQG57PzR4wZfjTR31TLS4rJ4tobuWf824mFLZXuJ5h9FcMZyzSRkhU9FPuzxeu88jnRgUy3tRceY35RkN9Mch2",
  "key33": "4ZMauE5SNYviXtZnwLYSXp2trLVLnNW3u8tLXv38XSVasDQVcs1ZEYG2ZD6ekNxvE4yqPtHfQyvZxQ4s2VX5mPfP",
  "key34": "1jBgC5gmbi8rdokKRiZhzzdGMNo3kugX3RWJjiJVupCue2xmFWkFKHFEhSisJGMm6crfTNgvuwxPeF8pB97hAT",
  "key35": "5B41aQ1ENmrqCWUyHXL7dRyCHPpSA8kdxbdEnhRcwwHs3RiJ9cJp8F4tsYJp3KbrZo52uuiARbWLrbqBBMAhKtmW",
  "key36": "3HWzrBrz2WbAtbXeMqPyv2yTLg5t28XfECzqEe7qXmQr8Lf27U2c3AfC8szRwKDfKHfTbr8qtLpPdKBteDyxt6ET",
  "key37": "SMevCHFfQwYn8KTQzoqs3vn86daRU82Xy83MGZvoHvtrXntnQKmm2MzX2djRWEDqBzVUm8mD49a8eW8BvrpQnSc",
  "key38": "2BQ1LZqWVPuMuZk3XcTYBJLWAFckdQLxFc3A8TzMzQFyzasGGkfe6utHD677UwXcFagpS2zrNRpM9pGXKHzM9p28",
  "key39": "2zsjyq5tD8CJfNnYqgzgCDdmrkYHULkDdfswK77fRwdd3aaSJAsTeMrBkRyv7GohqBxZRUfMf4F2JvpoKSaVtT1x",
  "key40": "Jc7Ch4HJowqd5ECir4Ya17ZpcSx8uzFieVse8f2VmLa6yLHVaQDNLBQXWFm5VBdmsswVfbJ5fgeLNt6cD7yaSYS",
  "key41": "243TnqcqcqvMWgFBVDVV8u8LK6Fn6tTUHFMLpJ5bpHuZRzLinwT7obDzekqAWrnU3XGH8P1ABXtkDHpJVMC7q1VV",
  "key42": "36AMmcseWBLniwDcUs6crUkskCJHt7xVp83Ja5yEAWrXCNJYWT4TkoSETR1X9fBwyE1MTA5SwJ18F4ovKygBVgN"
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
