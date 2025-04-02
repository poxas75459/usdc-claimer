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
    "35FgCetUnY1c13wPvMZqA7b5AKz8ZWfUyys9gWvmDicRFMuWZhL5Sq84dsX4SsxBzKNzWH8hQsoopg49fGaYVWBy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "447MAsyXq7JnByaToncSxoWTnDoeCbojnu8rEx81NLFDVBmZhA8WTuUjisiv8ewLopMBXijKMEREKnGxcPppP27F",
  "key1": "4NW8DMzyN9bHbyiJ5qGAZsjD57pmfK8cmEfTSctGQ3mnhJvGdifLT9J9pofTDgE5XrMejgBVpoVWvcSFabrBmqgg",
  "key2": "CULR8THhS4fRv6RCbtFXFeh2HH1x9jS35MywhY1dg6LYT1bSe2W3UCFiYjFvKrVw1gEuuHGXzNsd1EJughLvqTb",
  "key3": "37fLQwFGcvUtjSsyrG1gfqQ7Dbf5KRwnUczar1KiCabd5oKCtUy5oBwjueGX3FS1B69BMBhxArBy5EEqM7cJ2GM8",
  "key4": "5rm2Mi15jrb2HTA3xrCHeKZ7Rw7rdbAETUQYpMh4szisfRCfsxryaCd4eq82dR1zUVBTG7wkN9PgMcS6KTX9N7Tx",
  "key5": "4US2FVy1236NcL2dzzqNcNNtwstnohvN27SQxuHun1sAG7yE8pLvvX7wnRrXXivj3MnipsNyrVSqJQrn9LB6AqGV",
  "key6": "Y1zC6yH9w12vp92ZwhR8FN4Eg6Jmgu5CzkpL1nb8sYpMHa9XiRxv6qQTH7JJPdq4ozbsXAntYDyVesSQNFd3zfq",
  "key7": "5NdUb4v7sJ43iKHB39uMKF5kLMa8WQJaAGoBU6nPdzYqFZnSkpqWSwUzMnsjYcUUrNzBCHeJ1gvz699yBXwDqPzf",
  "key8": "4d2GUG71Lw7CzH23BGxCixZBxgprBY98CM6Xy8fUhWnjbix8vDqgJ2Sz92eizCsFVb2yT1JE951HjMY4vfAZPstN",
  "key9": "Q1B2HcJoVywk1mghjdGBzoeHX6FbJ3Wzeo2ESLoRA8Xc7TahLyTFmwyLhHVpWZXhWv5nwpQHkg9qBSXEE5egod3",
  "key10": "2RZAE2my3dtZKMq1mjumWjNSURXGNHpELzadQ3WhEvsTJLeFrPkp4KJ59LyVuWk9xFarrDNcTNMUQSe6xz7s97XP",
  "key11": "5qpG8yQH22u73UkbTypwXJb514PAmPQcP2HQMX6ahiWfaruckGr7ZPagiuK9PZVaJdHGAr3DRGzEtkEQpJ6iBEUn",
  "key12": "4cQJRnBCQxFkuU6PKMaSsVmvxxvHhiExXqiUT4RYeMkL9zfN492eoS6jH9zZpYNY6Wy49EuN58GCAM4XeGbmcAYh",
  "key13": "4wvpT2PGjCsrE2rqXdhYfJpsTAP6Y5XTqQqbKAPzon1nWQTJ2LXHzMpxMU8EF6uxr355wcLJKGGL6ywZM4zeE5d4",
  "key14": "4MXscffeFvxwHLjfcGUSdhfC54hyknzpmwVJmf7CCjNJuWuMxzta3ZryRkN5LuYyTda3q3xChfbXQuxTL56KSLT2",
  "key15": "P2FXt91sEsuBDtxAGPD5xsgAaAx1XVS2tNo4Fa26EDRD2qzG9CB1zYfLpbTDsxFYhaHd46dbLi96UQ16NVizEwB",
  "key16": "22ZKRbTYTF6EEjBYeHng2rfTBA3Apf1EgXsCEWczNLNradt7LrSoQdK769EQb5BPBVsVgN2S4hSGwv1tCeEtAyXa",
  "key17": "4reS3Wv7NXzr9kUcxHCD3nqtbnHxfro25R6tzcUbvXWCS9FYPW4oYfaHi5yGYDWA2sovq1oEDbw4Q1PKfcKbc5M4",
  "key18": "5giXMXPSLd3DLncysBtr6AoDJWqUGktWqYEFmGT2jVCzHRXTVrbt7Bt9gqhv63LkvebGdDoNfg3Xn6qzAKPXtsSj",
  "key19": "BvooJFMsou6fCJjcyzCC2N4fXz238nzfT8vEiSgq1uGkwRBFdfjaSdaUKnDvtgPcnjUEhFe21LRisax3R85XsNr",
  "key20": "4Xfou9AQ9pmXCFNYAKHEBsYJSXXAE9ZSZifyhcoc2WdH3WwqcKA64PP1Xy6EsTbtfAY1Z1wnywgTX3RDkGugM7Xz",
  "key21": "5S27kecnZi6GeRtpaqvhZgfJvrMX4B4f2gSGmbHoTns7ZGBusHx1baL54Ghp1Au5o3Q7f2Bi2htzno4z6Xgabux6",
  "key22": "vo3XLSrwFV7u57hjhiTXamYREy9mPTJCTNeeE1EzkduZnTmS32F6a47BpxhuzjMhKNL9RgUVBnagtJKctqzFV8B",
  "key23": "5Qnk7x159izUJo82JNPzLBFzd7Nb3R3pVUFyKniZxbUrMbi6zvDoxxHgnQV8y94aq48t5B1zyAGi3gdPkVeiY4NW",
  "key24": "2GaAChYE22n1wYZXKFiurwokg5LDVQnmmk2LPXpgnXiDiiLVxAe9DqSGPf793ANPD6ZMeM1t1VBZjNDsuBcKQUe",
  "key25": "5gicRoMdzLHUtHf35LgpPxg15zY28w69DYrLdDXqfGqHf84UPN9kAhdQQLUeCApwwVBdR4FdhzVM8Y41UPS36z4L",
  "key26": "4kwgmFK6pH9b4YhUotQ94Tu5Ywv2NDRLHZNAePngtBBFCYi31MZsnQ7ZL42yTe5c5h3JDFcnNZRgWmjTvpbBbaza",
  "key27": "3wbXJoPgMcMjgoMYuUTdv2tjjUDbWQWAU3fX7VWuMi9MyeiYdrwys3k3ejxfc1xyYmmVPQRgem2dWuXqimxAyyem",
  "key28": "2KB5njtDaLUXxzpMFsv6Bj2LGg5HXWF7HWvr2Sg3fkUM7qXM8VNA7XhhgnLnWkcRsucULzX1DMhvSLBUVVhjrAyf",
  "key29": "5ZrxyftfsiY7mXU2USuRbDzXGYtRcAAFKMv3BtwAeGpxC5LWHAWamsCsxACLiineoKAXTGbcfVePvUEasmdxiEn9"
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
