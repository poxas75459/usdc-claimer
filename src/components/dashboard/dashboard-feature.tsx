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
    "2Vsgar4JdH9ZvTGNHHxK3sBDUg9FNdvwFooYNjSEh1uVAjNs1sGe1A8vjn2V3iyCjL7DCeq1AK6pd5bQt26bEsWm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DUpCF68poabrBbErw7JfRRgjhpxjBmo4NrQoPbBDKvHoiG2abksEFBaCvxdJk8WooxJDm8kDZF41HiJ6xqPieRB",
  "key1": "mdiwBxhzR1p4oqXwCB3JVKJaYh7bHmEKMjtB9cNUrNDBzbTXvLFoke7f7f9xCF4mAGyp9u66G22aM6Vx1BENUnj",
  "key2": "36uDwvEGdbNrh7ckpdzVJgEbm7ivEQnLipTHg7So95biW5u1xC5fk42jo7UNjgwhFzboECJx8C91f8WFs1CCzvdc",
  "key3": "4nGBs2gMMV83sJ9MHBLuwLD2fAe8wurZVxCMRqNadH8mCNY4zCnzBhiCJwzyZVgPSp47ZdGifhezaRcHQe2mBBtS",
  "key4": "5utAcheEGtwN5LLEaFLwCaXD6Xa1BkstKhLafPa77ettYmDaXzBvYdShmWFDVWpuQ4d54bW7bGcp7PfZtWpXNpXB",
  "key5": "4U4AMhB19vfAJ3Dpu9WmNm3t3nTZfMCFUZgckh7JbcwTqZHXbsRGKkG7zjXhkNFxCivirq5LqZxNAZYc1kbzuARi",
  "key6": "3z6uWhiiWbfEB36ihCPf3D7wKiZqhheVWi1qVPnMtb9KHZBjPS64mLAFM9gAzika5gL23ZvcTpTezsy4BmXo1b9m",
  "key7": "2VZxtRWif5BMVL7C9V2YkdzBRXDnYV12tUxBqi9a321RKiKZBGEYk7Sp4idkUXJy51caNUDMH3e85VC2Q9i9FKVC",
  "key8": "5PdCd85kobYvKydmoQBpeyVjx6Eq4Zvs16MneWotjBmHwoVt87qcjHu7g6N4MNWhLRduCW5dUjHZPLJFGoeF8P7A",
  "key9": "4gRZCQdvHuHMhBTijJmcnkyiJV8Yfou5Z3AaqaQyrdhjvNQFA6knQUMP6d7v3UMFXHw1qH8oDymv1ncFkLeSfoHt",
  "key10": "GsGUp7rvwxhUjxvU4EytRZFkUcDU7Hn3BmZAFx3bCYGUPxLtcGK9fXK7yhtkEw4pdTMfZiDiQNiUPcSQgM968cQ",
  "key11": "UbFUZgdHnp42X9TGvFbjG7ZnWCuy77G66STW8itEkeJdHdyHtsZGi66QusLzGrraUjb73UTRFcJ4VGAA9ncpDvu",
  "key12": "3ASTPXeBxy9PqXbQo6mbaxp1ANAeqBa3mk4MR3Tr5YXeMEpFsqTb4iv21iXddExfwR1HPjXyQT7y8dFRw4G7XgMp",
  "key13": "2WQLt4CbcJJLrQqh2Ea9tXLUUWAhpMHxPyZJa7ffFCiuzUBsQdjUFNGzz6FRiUR8CpoTEcxsRCc1Am1TbF6v3Cqd",
  "key14": "36PYettPRAk9krQrv8hghAJV4oH5pDgwXN5CxTMn6sWoDjXuqTsmZHGqzzTdz3Kbkk2vXkmdfFp6rKTc6kKoo28W",
  "key15": "4CLL96tzfUo14ZUdzifqPokGGgxtuxjyqsAGfQPmb39MiMuNcGu7rp7eENrvMLpMnQdbLtWZGPkVgA2gXYC2UMx1",
  "key16": "44JjDmtc6tgTCDvNeodhqWJrj85xHbz9ythDQMQkrkp1YxtsrdXvEZyLCpBwVrfaLjV2McJyCBVhTZdnopqhtJHQ",
  "key17": "3e6xktQLjs9staVAJENVXKSjktqXLziAhwYDgmMgBeBXshNMbMo4FFWGyKf7fH5RV8nbEm7893Eve9d3VXMbz4uT",
  "key18": "4XuVxiijwVgVvQf9fpJ1MQUgoszARy1mUeE63VqXeh7hmWKV7vesjYJ7QV3gSxJ61FfEMTRPwwM8ipZd2ecyEGxr",
  "key19": "2gCj2MKcu2zUzy7aQt2DatkeYGshR6dD3piDvdBCKmGcoqioBdWwbsDCqQgXMJ2nuPr58ywk3z6aPHo5QgXufc7U",
  "key20": "3MNqKwXe4NBdA6jhYjLjZ9e3bL422uJUzn4LKeEi68PD4xcKMCsvTnuJk3y8mggRUPo1Ta1fzTemMe8p7A1n7pNf",
  "key21": "47uKgNfa5JXBtjRFmug2Rj3EQWmMR6JMTkmc3AA4yFAkjqRn7kDE8WcCdXJDdgZoAFhq4cVo4jNmJagZT6abk1LM",
  "key22": "mnTtXZ3N3gcBJndkCFY5FG3SePuUEn97RWH9xLS41FmwTzRG2mtiQWeLtCBy7BH3KjcJLTKn2ttEcaL4HSogwWU",
  "key23": "FWmq1m6mQXTiVuFmKZb15sgXDzak95WBx52a444T7iKTWsEP1ZVjgibZAirBf9LVofrzqV8KYRHgZNDji4zB69o",
  "key24": "5S5gVXkxdNtvSc36i9hir4xNWXCm6i5cWsShF9WhnMyjxW79ufUtC2VdSYERXgUgqc7ANyX3Jko8gY3hBMEcLt1U",
  "key25": "3kTevjjKANpXbaKep1SEtNnN79o5kg6RJPWaA58SWLvwNXEe6WMfM7n8WKFp69mnj7Qt4YCYcR5xSCad2GjeKeCE",
  "key26": "59pErtgZhu58gcAB7rVQz6eWQaVVi1U2FzW4UwKfE8S1NQh5dRwsUBdpVA3tw7TvuZq831KNPsvefpebT9Y63Tn3",
  "key27": "2ct318BkXB6BVhZ1ez3yAtf2DBDSvPcddjvsPY2kMrw48aWhDgGEGKCitmcWMW763cFSmC5iWXRRS15hhg4fTv96",
  "key28": "3VCP7b4D4VBm34Cp15k6i1VzzJiY1scTwqqCTSf9coyoL7L1BgdtBiaWpNeRe51iCp3ZG9GSujXAWkXJ8Dj497P8",
  "key29": "5VKwnGCyNCptwYBii3aNdZ3bwQyZKDB5apMzUjHgNstLJ4xCvvWWNRHSoyqcpLGFcDbjhF7ZpuqRfZqsczE2pjFK",
  "key30": "2EZdZsrDfsdnnvKSzQihoNoks45uXixiAyrvtukCn6SZARHuykbwrNP7TLbYU6cp7PKpVkBkMH2N5CWUNsQh2qP2",
  "key31": "4V9hCosYQW9eTZ9QsKxyEBuLjrK7GcsMy8p63qBePhEruGVFrDc4tSVSsu2cgFB3c6WyigZAN1pYD23MsXdThmD7",
  "key32": "5Lg6kKMtJS42npZZaaJQS4no2MhfKL7Cqo2YrgpEnmudtyNP5bp3bvbDvYqTRiqRXta6AvPCT5kDiPfJPCkTeGDf",
  "key33": "4RxPEwGYhPNVbV8ah6VvXtA42qEwNrtHaMevXBvA8jUnV3TQELNnJxAkdF5UhVLEz5qfWUP2HWcouX5QxvAT1GJc",
  "key34": "4GJib3oTbAypR1cLkNSNecSFJoNvqQYXz8YG8wF4nE5Kyf8iKRdwM8SePADVW1cNqa6e4JhE7vycPwcuXVexuADN",
  "key35": "3bLX2W7kSEAT76mxGW7EKiXaqecCq5XpDnJxwXALAQuzyTAxzai1yUyJM4VDgdgziZyAjQA77KVeW8Su2DzDCXpa",
  "key36": "44N1xUPt2ztHKnMtWmNdSkeTLHnh5DiD4Lu2nLXJo2Y9Q3veVWsnB1aKeRaY5e7uvBpSLnMuy1wJCTYAxnUw1soU",
  "key37": "49Mq62QagmwP9pYac8Pi1ZNH4qtAwJH8xZeRaBjnNEw5Laj1ZEx2VRUSAY2NePJZc2LSa2ooKhtztdFKeNbVpAs5",
  "key38": "2DPjfxaB4HR4cXewQCbDevTWjDgnvx1QUERRMAsmRDq8byPmuAghR5wnmW1QCpg6C3kgHEYpS19BBBXNir2g1Uwt",
  "key39": "4Zc6ahX6eMXGmTocAY2fphVJdYabPTfGbxFvFMJYRjCDDzgkQBRPkv3Jp4HvgjnpehQuNfWFiPBid7wA6zJWfzL9",
  "key40": "iiZtizx3HV95RPtcxnq839J899NngTwnM3beoDzphGqtV265DHS99zS6hkJ2x8kpZ8fS4QbbS2PRrpYPGdNgBaB",
  "key41": "4Ny2Sguwgd8eENiumYN9K1JDnZxcULbaYJKoeUpFBswRPc3B77j3gqfhfk7SiGfCwWuVQVR1Uz84DzT19gVyWb72",
  "key42": "33p27ryzAHDvfJudZe4R4M2Le7KEwfoBSs6JuJpufHMsjvzTjCdJYBLHwM3f4tm2jnngi3LrN6BegV6yr3HonvQp",
  "key43": "Lcpn4LEojbKojatUMVbQqaaj63jTTswujCGRcERX62c844Mr3hDR89ydaAFmitutwAPAT9pGPfNTkfrL3RzUeEv",
  "key44": "4exH3kjY8AZhygh6MA5XW6SfbpnBQLCcSeQ7DV2DA6x5BCDcYjxg1PNmyFsLagHTXVs4dSqsEJxjmqSsSwGhV7Vw",
  "key45": "4rQJaAn6fCH1pBaNW2mc7B7okCWHCW3Vwpz9KTo9tFGcDBx3heG6gha8GWBf9Dr49Z5X4fzFYmCqnQJpg9t8tJj1",
  "key46": "4kdzS6rNyXh4wdz9Eook82qGGoaNUgX8ASBWSti8Ak3ZfKzdTWkbm3uYrgM6FkjFGMd1eyg3jCjqeBcnSxcosiBZ",
  "key47": "4L8mLmtnULur86MYLPGzcAZPY1BamdKLxu2xte7ZbLFiNamnd7Emt6BGERcfqjubKMjXW8ffZnY7QTzy7Mqzne7F"
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
