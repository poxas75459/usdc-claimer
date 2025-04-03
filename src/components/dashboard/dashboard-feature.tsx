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
    "5PBDZRaLz6fSM2mj2wtvGU5SPQJNRHeneXHM7YbLpyPQKiv42MtVHjTtMMhZu1wQasDSa22w7qcj1EqVvVzcKT6P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HgHazHosCNXaD7qJtF32y1H3P25yb3aoJYyDjXDSWnrSzpXSY17XY8XXzqPsjvQhnqShEJpkejYy1AtLCkm2kZi",
  "key1": "2kcCKX7xXyteD7bpM5uy3iydQs53UohwGSJXzKaEQCiiVwcaw7216eZjAfhecQQiAbHjWVW3eRcJHSK4Zv28f2Qy",
  "key2": "4f3NZETnHPGrBW13Q3x8RzPhjejHvHRRUzjaCQEfDAP8xyc9r37FnVYLduxBinCzbws5nbQ85q6rioTzUdrpYnyY",
  "key3": "1ifGjrVJB9LUp4JPb6MWxZEdigqU8MmBFpJNr3z897NoHrPE6xTvcro5wSRyFSg9jd36NtpwYa9YqZBtBfGktpP",
  "key4": "2DA1DZ7wuXr919JBrAcGcZPMorFHyba1xDFqbL2p4TD8QuZ8wdSa9yTb2gP25zMqiDuYNFUGEEZzXx7H2z5UKevS",
  "key5": "47gjLBBr6D3Vqij3HQEPBqXs9Tfcp9mG1gix8DxkWRr7gkGXpSvYScuUasx7NUeRiK6TrfzuNnH2LCZhFxn2PzSN",
  "key6": "4TnUEnmPK3wVVrSdtAFSFyxkRuCaeDnjLmDStqKufU2SRTdoChgq9pUG8wAk17FDJp3SBzBv66h5LSy11Dt7nbmy",
  "key7": "3NZhyJxte2XK1brrjNLr995m6UEg2cziyh2RAKvbDzebsmyz1gekE6Ta5EMFb6atphp6nMwaj5h15KujHJKKfDWh",
  "key8": "4gZWbn6RLKawfRFgtHmDHJe6a2JCe1MWknvTu55mbDFUnCBonbLsqy2MKtLWyQHkAX2QT67uUZtzgCGZ56Ss2HMz",
  "key9": "262tTA5s4RZGuJWh59a4M9bJHuxKkF41Aizyaga6u1n8aYcTgGy6GCBdKacERjBN1wsgq6JpBBsGbKRZg8sFGmnj",
  "key10": "5SV5RCBLfZCBoxaNzcRMNjyKdZzhUhuQ29jW9kDmcuwPATSwJYji1qvetFCd8ohPr5KafRGwK6oJbXHkzBVBFfJg",
  "key11": "QNfA3LHyNFGXpzCNXUxDVLmRjuVysQBHnQiHEd9ppspAp7q5y8q8sQwnttRKoQepVJFrTWLnWWwUUHAusn1DLBe",
  "key12": "3d5ZXxjmfuiuhLWG2vrVH7bEEMBfTgG2Kr1MQ1VMBwPfc1xy5aeVwh3FHuAruJzZM8EC4zpEoJpEyCsqepNnrQoY",
  "key13": "65sJBRYsGQvJcunzhamhJges16iPtDYn7WFtQd1PuVzbYoB1Uo74Y9Su6x9gnUi4ny58DDeQsZuDW6LxL9cEiFkY",
  "key14": "5XMGCbmX6diiViTdxU9BQHqYMRFNq3FhUiX84cZn8UpLBBmxP8VqG4UAjGoSksNXXWyhv5aSM3JUaoChVVFBHjhk",
  "key15": "2adTRtxSDfR6munTCUCPDt7oQVd75jqtFvKvyNDvHs43zDhfwpm8jHhKBieAJHhV7GXs77je5RYq8VRLPFXShDmR",
  "key16": "4gEdds9QGYskxkLutpaDPSrVyivH7TxNievTFY8JCNaSfNcR7RfwbQnwJrwBHmp2StNZUB3U64P1MWyDqKRVkKxy",
  "key17": "5Vti66VJoJnT22GMHpJQN3JiGaDmzKvEQyywvhc9NGGxBAD6ZsutMCtBuHdcybos37hdaFjScAP3cDDGZmVvjeG8",
  "key18": "sDFhxm76kdNUmk4SB6vg6qBb5VmzR4TXJtKomRPX3kfQHaxBonWkM8BdA7UkVogzhGmZDvnFvLiZy5VQ1AFFUdB",
  "key19": "3bf5wMdjvCERmrspX1JFcihkYM6K41HCveB8w6j6uhZJyFq6zg2uTDm1uKxJZa266H5ZwHvNYQZCSBYt7WRm3vgA",
  "key20": "38u9Sb9tUxzsstMk2ekW2nwnPwgfP6TvdHNufbAR7btxxamsz65NfkJz4vTY2kTZKNfxChh4asphGiNdxWzff6K4",
  "key21": "Es9fvXbXHr2M5RiiAwt6TxFRMvm4MnnVTR3LmStRQp3b8ZCxL6TAZsmrSoNFVA16rYasfKMnXdSa3rEyTSJtZV4",
  "key22": "22v7SeEc2fXA7V2Ec9KvLUfnCJJkgsxwoF4ZsuhsSi7JA3vJt7V3BBNWPH8Au6wrEJM91VVMvgQBAywYYKXAtWde",
  "key23": "62rw3vKdHFAAR5zXcx8SkuggsF8zMMrmze4VA78DibCeyt7jAmdkzFzZtEe2MeZcyxZYPzP6j2P3dpsABFWMwXG2",
  "key24": "4FPhzgoiWiYUuguKftULoTchmtHB6ZFwpvAsjogCV26PbSUpHqWDTzrCA8LvNfK3K4nMdR43xLxEh1W4cpbb2SZk",
  "key25": "zBcqJiKvVbjUbpHmKoh2aLV6oCgrJBKSGoj3Qc4GZQ8abeoHfgPW6uAYziDsjB7vmSbDZpi1UTEFnnFvToSb3C2",
  "key26": "356ohfHgfhziny5tp59narbpJootGNsLevfzUXmb8Rejpv1gsfNe7PVWWjpH4SfZMxVQuZoDt3wWMwyXBJfQf4LE",
  "key27": "5nj2DJeXF7YxqqJnwuvumH7Dsdsi5pHdKKvrVqp9eaDUb55uAd87KDtzmuhrmQXTS93QHbB2YY1VP8oqPADJAED6",
  "key28": "2bapyuDts2jsgoJd229iW7hDZSe4d5PCF6DH18ULEKkuWvwXduzHE8aNg2U4cWB7x4oLbVuZ89nsLZXRAW77NDxQ",
  "key29": "74sWsZodBLcUZvNi8ZfZFiyJ1hAsgzxiXqhfyyutW1ciTTGCzBW5mix7oPMsBzuTNumuaSeuvWQ6aqJLXeToP2K",
  "key30": "4MZqvNnp5jYA4v5cBFdJGBiUV7TXSTTb12iuA2Lgtqeob59wSVVHQUMz5rU8TmXvV3moftBXaywxF4M1JMzoE6Vo",
  "key31": "4RtuM2D9m6gsB5xkjQASKcctPa8V8p7bHG4EnQ9zbHJ615cdBzbcSdErgLVkQApo2YYtYTshh8awD1HrfnVPtVTD",
  "key32": "2K2sqt6wBeab19aeZE53877PnGTYqewYPWGpx7fhDr7TFibv8btE8DsxFZ5o13fuF7je5hRFLeDma783GF1y3dty",
  "key33": "2c9C2XtvyeYENhKkzbbJC4Ap7iLjAiU6UPJ1yY6FgdEJ21HfRsFKcWZRbDLiqzY9EPRqkLmnebK4PFvveLS7ZmmF",
  "key34": "FEEJwLjdRttwxuAZwohAxdRcYKgceHYZ4YDdWSm1EXJopbk4RK9t8qroHACwjyMJdtgmzdRESCyPHehPk6mc7VJ",
  "key35": "3d5ngQJjBXKEyBtPAaCB58LKar8sCG12gBwv9CXCCWwL7ymebg8CXEb3Km29yZGpvrSMSawEqUMCLKepu7NjRWTs",
  "key36": "22Zf4RcYNnTgMf52VEpKm9k7wAXnqSUJvyMfsonVxNNBLW1LZC3k4yKDBWZ7s4K5ySeeZja3aYBLCSK8bZiM5zty",
  "key37": "5MGU6sAWa3uFCxLGeXEN4iNS5jSXbtBFT9Hx2kgnpwogLNLoz2ffnjJfBYwHmykQrsAq8FC6QrdGeZSQdixQVgsY",
  "key38": "4R26kGPAtPAmiXWEzA4Hs5cn3AqN9TxH2bZBGaAzr4dvZqdehzmYiBBPVa3Xvc8zghk5KB5fPdzqkbPC3cPZ17VJ",
  "key39": "2QQhhSFMSWGKcbE8JqZuDtpzBxNpuimshh31i8mcZawxztkEQ5jP7NWfmWEQ3dRHNsn1pySymZTVYAJVz9t8g2GD",
  "key40": "66Mp39snLA4eRgi2smw7tvLCjEvcogfRJCVwTGMtEH5WBmsC3wqkVdUof37uJ3W7Dvac7qFWuHWLYm3qVWGvbWNg"
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
