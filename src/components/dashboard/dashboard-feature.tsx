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
    "5rHETjcpQmaYoVBgD2RQ71VtWASfagvvq3UuCezegPhMpgkRfefcijH9kshRG23s4qZPZsNsPC94S6eRthCEHxNn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6DfgX1cx2KorhgCRc7fUwvxhwiQ4GasJ6tAB4FGt6BzKfKNWgvLG237TfpEc8Axx2JtYJQZFMVTfCA8hcrLjen4",
  "key1": "4StNs81bHx4WEWoE87Es7gWSfTCH4KRJ3uWDRzLVfHPRep4ZEDp1bf5E1GQAfsxQ6319cY5Kofa8hnJAeiwurFYB",
  "key2": "4izLNgLoVJvnuSJXCp7CNjPvHEt1EGMCfBHHezsdC1t5Lyb9P3qhVg1L3c8qES1QuUsCYgSdor4FEVc5DaHCKFcU",
  "key3": "63XmorfYzneymynyzp8BjmAEdUcWLQ9fqVGdSyRNvwPZ7W6kzQAebEPQoKb7eadNUyUZworDsBVr1qmW9sENTYAz",
  "key4": "2LyK8Yp1VvdHuSJnPww8fsiVvP7MHEMNBMESMNc2a9yyYVL2aEx15GcX4M2WrgxKk5WAcE4XbF2SAMnZyDzUqu33",
  "key5": "216m7LsikSZfFETSwuoECJdGGZs8StrygfgMHh9cLT7W45Qug5DV3daoFPwbW2Ja18sx887NuMsJPRFH9i56SS9n",
  "key6": "5kkhGmjBmdygbFNR6stPNwZzbtJSG3ar7Kh9SZqTwE3guSfgvLV9Np8EKJn51yRmt2rACMEsDYccBw7nyguMw8RR",
  "key7": "2T4HURanhKKYxsxEtMLouUePj46LGrYQW8NNccHfc9mtDMnE1TsuvxaZqV36TLqt4zgLM3jyL33x5scCV6i8C8kw",
  "key8": "61YsCUhkhZNMnj9mKkjkEczPLBYuj9mi76sssbySSCcCh5P2eAb1JwPPsSKUjRF4jANyBctm7Xc3jxwaPurhSjtA",
  "key9": "3nAcMZFyuBhH2yqXa83NxMFZ97h3SdxzUK3XA3LjKGKSbnhFC1jdchVgS1B42k14zS67vKfGHzFGwowDnZXnYgxG",
  "key10": "2Wr8wFBYMnMUnsoJoBxdKgrSNWV4nbgKU1fFgBoM6xpyAhZtNQze5JUTocwKCPGCAUhCD93SVFMjwJbmkWzEypvE",
  "key11": "4VRvgA1Vur3ZwFWx52NVedWW7o2hGM1CvkmcN9oiFFscWpz4yRe1wzoz3723Da644unTzYCfPi3iFHB61N82nQqV",
  "key12": "3kz7FPyV1KArd4LRR6uBq4dnJ1KYpNj6bgKNuk3k9VKkbVYkRuCL4zEEnS9cWkQg8yhhLErr8udMCEaRVdcegpHn",
  "key13": "2mGn92bTNxwV2dc81Hv89wZf1tWGqW9kgiapPTBHz2iVKeWHMjSeRd5uLZHJNYsHdPugs5Yj1T5uJsf28w8b3NDc",
  "key14": "2AHjT1xZS6EFMphwKRhz9nHvpGCjesoRhYfy7KTZmLstBqtg34QYQ5nWjExzQaYGWQTZeTsEmnj33er1HVwKZZhk",
  "key15": "2Vjs3fhAtrgwM47iNtsYPqShRKphWdSK16AGrnAfB24ffnsybZ5E2qNwrvzyP7RcjEMhjhqyit6nS7PnVQYuHpzd",
  "key16": "2qqh3UyeMrnXrvGZ5QE1FZmU5hHbhF8nSTTcMDdAnrR3TEbMrVTmLHbjeRH7ks8oTJgedYby66MPQ6Sd26JmZvE4",
  "key17": "2VsbUrqeueTiQcPBz2uP3TU3Cn2dXvr3yw4PB1vQcgWRNAbmEi4u3AeJcbabATTn94d99ka3erjNLqKeNnM9Pb9i",
  "key18": "3861H3KaKdYHm3TgsqE35ufkiUCgAnzfZZMAtUKE55CJdGCp7J7G5e2HXWBHaPccqLxEV6G7ySjih8nU27zeDnfo",
  "key19": "2yjt5THtY1nNnfPycnMMSF3LSuotLMfzftTHh89H1sk4EFgzA6Tb3kvvLEjoFbTdgEswZwK1au9aao9dPeFms5bX",
  "key20": "FkHYvkZ2BQFQSvch7JUDpvXGpAFhV5HKH51gceWJ5JFiwoqhF8okaUHHBJj6EiiCnLTeVMoEhyjXVxSu9vFQAv7",
  "key21": "4YXFixCcEywSKxwD8uLfoYS2ipaFsA9pvNG7QkBwyY4vSCU4GUoVX8viBVtQUdMoUDRc6stofPaq6QuytNLybxWh",
  "key22": "37Z54mPvh82YQ1Sryf8FuFh51TeboUkcWpni1PkmQWFKBv6qqCXnKN9oYc1sBsTSdP9yxoJayS2zJPo8U48v6vEy",
  "key23": "9MkWtVLvQbFEkFqy84kCW2mfQNbVG5yjR1hC92YSybFepXSJbvix2p3gjZ7eoD4itASHw3eiPLyQsJYDJuWbCpf",
  "key24": "3RFVJHuahkuoq2JAJ4UjijjHdz6xvidRyRq7JjsJ95dFHVSUfGdcaDLZKXGedgt7m8dQGauwr1DvuK1inMawiAV3",
  "key25": "4rzf8PPRhjCxY6ruM7r4ieY1AWzz5UfwDNpFZZQPce3WtQUFfKWrikcNBGBv83AmKFa5Vz39aCTfyXQBhwq9voPM",
  "key26": "3xzKq6JUDWunchYyffqqjVeyPWp3PT88mE1b5AKxg5EzotQZgKmCzcgv4FK6QSAB8TM5aykHoKgF5kxJJWYUXBZy",
  "key27": "5TD4pCdMadAxcyEJpUJ6jRTKQdrwYdF8V6pAfnBULDBvEUbqzt6XmHV8WEABiqDTvRMiqurg2MXbx3a2pBt81oCm",
  "key28": "5hBWmXo7RTjLhLyPJjQWNG4uRvEye7iKn5LLWF5BCyZBHKqkCp2o6pwoGaMAAkU3m2EgEYCzqjjUYVYFjjEgWE61",
  "key29": "5z2Gdedv5X9pPVVUzwM9o5JMySHRHVggJfzeVQiTG99Ud8Ve3Jerg1EL2AUgBmaqFnpBHaKWzMsmfYwwJ1uo71Gh",
  "key30": "3K7ZrZXKegv4mdCrrrhF9GAC9fYFWAo66uhqjc3X2sfyNGrM1XLireWPte8P63ssXALEPMXo3aTE6gHEdQivMnGz",
  "key31": "3USS1FesWgVfdzFNR4RGk7Pf3KDkpxisfVVPwVk4iP9WTyoELkhY6GeqJUhwmihacUrjHcLPzvDkgAdFW9RWUMq",
  "key32": "2pARg5aR1CyGn347uiTzgG8Dd6VAPv3RMmB3aikuVfkRBvYuoV41FApDhBoLNVXyn5MRqjULH8NnyuXU5qRT9N9e",
  "key33": "5DusX5Yfa3UazkxPvxqQ9BNMmkpH1WcB9VivNjiZZ6dGw2jgbyzJB8CVU4ZoupGAHLhDukHk2DbJSuryks8fujbp",
  "key34": "2STsivYbxX3MWzt2eUCykuiGMP6g8cM8e6SUuHUSNZHvAiwnsWi8DTzeEYnKa9DGYwytKgRcfRtUgoa5GWGXQ9Bu",
  "key35": "2pLQxCNBF7j6mFGHMAUJ9Qm1vJHZsC5EEo88QKsfCHtojPhk43e6dbpA6zpQgjRBNamUnhyPGrY6L4Lnw6NJ1yco",
  "key36": "3yP9tCrdGhCeoTzSt7AGX1oq1EqnYQj15Mx3qcpL9nnABMEhzANrhEDvMWJLnxhBEkJx4LaZjcY4jGaH1Fesds1X",
  "key37": "8Ks6iZYoDWoYJ4bMdKBy6FiiaXcsywGGLrZLeqwGXWD5u5CspvAZGBwf8CS5qWKgWePe6NqiZgczvaopojR7CVe",
  "key38": "ZREu99DcmUbK6jgeRRZzmxADbUUJic6mtng9a5WYLivkPfV5yPqzt756HFAJdNdb8UGjCNfckuuSj5GBbE9kUEY",
  "key39": "4aA3jrCRXkfRqc1S7kSX4ip4NfxjVkFQ58LxMUhbwHsFdk96NPbFLXsEnzMdjNhq2F6bFG5sLqJPF8tMyQ5zrsM6",
  "key40": "4KwRtYhAKuaMGwWwhn6dFNvmYNpkCpWUrU6ATWjkgmj9JeByjAnXaYsHoV4NvTkKb4nygTTwAGnCj9B7TX8p2iAa",
  "key41": "54SVFJCSzioGtqGJzqgdjM1eyLb17QiJG3oyEr8fn8guRv8LHhWgtuZdA3rNqste5P7A8Qk9dKTvYdn18BAJ993N",
  "key42": "54eCNhvdC9mvbU6E2sM54KajEcpqdxTXkbEY47RSKRoSLWorKbsMS2dfSbTZTUU8w2ikbXDzezao1V1y6pkGQrBe",
  "key43": "3CMhmnAuCh2yw1JvZeGN6jbmDtSD6nijkriRoaYjDLMTEAQxVDUSmeA6EhbP773hJZqrytNRpU3uRAZbHMB7Saug",
  "key44": "5tqqx3TxbJJb31mQyLx9DsxZ6KEJTLVJNWLRzZUccyfK44P7BZ3ud88quw7PZ9gMaZeL5NJKAorr7KiHfutWFz64",
  "key45": "4GadVthUxN7J16pwV1gb21YKuTuuqin4WnWTtxkVBKSCbHXCRwM3hzDSUhB9Wg4iJeaQymydJaFmTBo42F3KCTuh",
  "key46": "i6yfJ61N27gKaWSgVvAbu5ravHDrQbmeeEPKPMHjJGz8DEqQ6576h8VDpHci8dqF8JemZFYwSyTvxoqtjES1rHq",
  "key47": "5e7NMYRrkf9F1UkSuxB2ewcmXpZZ6uM8F8t7mTT3ZNkV72WHzgJ1b1MUDLhCafBKzkbqJkPnPzwqeDXPGxVMvpfq",
  "key48": "aRwEkWHL7JhCBUxH9pWGugha59y4druBFMSvP8YHmg4yDdF13taFECgLWwepvJtHbCZQWSywHTFiGZa28Kz9WAw"
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
