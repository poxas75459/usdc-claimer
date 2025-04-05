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
    "4VMYeCWTFFF4EjiF5LpfeJjX3MkHmHwNgEGbqdqs7VTwVs8kndAqTXb7G5nA2NbB1hFVP75uMc3Tg7QdyzvEKWpf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jdu7EuK7PQJL432QP3k64WLEVCEdV1joXVJyesHHPmKRdzUj9MS5yNmD8YsVQf4ahp9fpasciqpnMrfU8a2QnHx",
  "key1": "2DJo2AFFwqDjHZnMHkcfCKwDymfx6SdmhppoupFqemtkhHnCR9z6vpqrJmvTymXYtdpSzLUHjHXkWZ8WkK12Pwdp",
  "key2": "5UMs8fHNjgdNBX4U24NxScL3z3prAzybbCChM9JCMvCY6NuF8h8L3mzXyiq23oE6Zgau9hw57yYmbboEXxv9ygdU",
  "key3": "5StjJz7sYck77QyxFoRpZ95gmgMRU15SQzCsHPHQ31wQzMZLrTEEwVXCDpCtg9AC5wTBAzE3P1TtKV33iUECPo9M",
  "key4": "5WTADN5ZprMSMLbo9o4ESEsanNLwNjuH5ZAASqCZKR2swcAFfVC1LN6vf9Usx6L5pBwu2BdR72DB3BZq2LSTdNz7",
  "key5": "29hLur6DfFw4uuFegHHQJofKZs33cMckLypgiVdeek164fa5taTD4XhtgPgC4ZcXHpFQFXCrhSfN7gnjQMydmBVk",
  "key6": "W89ydtqYgvfrT26d5dukCLtr5tVYQjTAE3RUVtA2iwvbk4juxbBYxjy3uY212hKAFu4vLdSYMHZ6tzXX1MPQdHF",
  "key7": "72AxPGybG3M3QriCaJ15usoZhTB5VomewUrihUWDAuWFLEEqdrpfJmmuH8phC5yTfeaWXgYFpKJ1ttPrwk5sTrj",
  "key8": "5s1rVRgqWJrLiDZzUvYgMz5g2wCFUSCW2uUj9nhjZzkbG6WWgcpbyVHghsKHKxZ2Wy6bXFhXbgvvoGEizELvc3Bf",
  "key9": "51usPvetBSbRKqbsyHemB1tADyLSUUqQqMZcyaMCcmGRuhgwJ76vfppqfceHJBpdsJivBkUXVeojzcXVXtLXM9Z1",
  "key10": "uZt54uBBQx8aziAdv43W1q24qfwM6cVDTx3dZB8mUM1tWFWZEZFVuPoeQQi3unhSw9h8Rhj7BMkUoP4yvxXf1vb",
  "key11": "4s861RaYxUKga3KmbEnHuQchT8GT9RttUQFy33UoGzZhHK1VP4qVLJ5815fmuXnJoxrtnL7KqTaEnCijFngraqYQ",
  "key12": "2YLa2a85pvKWExVm6SqDmp4CyrHio1vGKGNghm2JLw63SqgaDDYEYcRgkQxzgaYPwXRKZHQjFGz8XQCajfxWPcGK",
  "key13": "tfouBEWvHvSLE1QRrLYPfVbU11w22hBtTg49dLz5kmpYXfB1eny86ndYQyF51qmTrYwiwidCFGT6jZ1mmYYhd2k",
  "key14": "5ieU22QPov3AyMF53WPmawygcnBfjYBpgW8YBSJjFaAaUsSZmzYsmV4uZ1GRazKc6SjS5WR7TLJoDzm9ByE16kAk",
  "key15": "wp56d1SBi26SE8Cpnfd265Wp3yPFBRUFUqyWmMnA1JLJCUSDJEwgSxyMDvWkekCT1uBxjP6fMHbNc7GBm7UPFhY",
  "key16": "5YKNrp9MjK9jWTBe8oeisyXAW226yuq1GPJuTMHyTgJqxhLczZFWXWi8dSfmmakJBnAXcHh6buo7FN924EidWZQJ",
  "key17": "5ejvuVvZWgzJe3rnQv88C3Jt746BktqMMGKvh2a8Ds2G2MYDLgdhASmenSbrWpPFPC1J9JAL3WCFagT2jkiSJMsZ",
  "key18": "4nwLFNegTL5tGZkr53kUnzBaGdVCdcQfFvoFBBdNmYWTREtWq2AqGhvWDn6UhhjjTT8tc3MJUvwgTcmTfz91WMyT",
  "key19": "dnN5tsquv1mjqzfi618mMy7zQhVR7DxhzgQgvWat6hd9vbpTSzNXXW5Zexv9AVA936tREXYTbvG5nFByxe7G5aq",
  "key20": "4vvtsbuvV9WPRijNUCLahb6qQF5zUX7bs8xFx2waZMjMueoixyhMjugMCJpcqr9uukma1DRtTX3kP9nbrQ6XqJh1",
  "key21": "z6P6nT5EUtZBix6ALdPfisYHHXt3kzy9NrawcyHogem2zZ7t1S5DLCTgPut4JHbvHFyig59zTrJGEbU5cUAqYr5",
  "key22": "3xAnQskyUxQi12LSLpk4npTh9K9UmWzsfR1HXvajWP53HVhjCxgYx6UxeeWvrDm1qHcBVk3eAQ1DATcbQ36QsbHM",
  "key23": "3ndCU1rYSMwzTKnB4zzrSmZeQ9uQf1AZKnkmxjxxhM6AM2M7KUAxav2sNoLBciAdSsfzUAVXq5Yn2XkFTHSGnX3E",
  "key24": "y9CnaKDFfYLN3MpLJuZaRYFjuk88coSKofBDDf9ueNvcVVtM7CNNBJT5vskMJBWfSTToJ81pzxmpcz5qv4889cy",
  "key25": "2LNs7Uh5iB7XkRgLKZe2p3sPzLUFWD9K92nc6waUptbmipp3Exo3frkBLt4KTyDhNNSfDHTcdK4KELuPc5UeVXPx",
  "key26": "WKJGbfnwWShndroSckVJC6YxUpT8HU6ercGx8TwF5ickxMkbTuBjTzkpkbHM6trYFLfNiQo7pYSBxaUUaE6BVt6",
  "key27": "288g1oWLL7sLiW8T5ocU5sn3x1a6CAxhb4qtQwSkGzCdWEWndG2s4DhMLPsvKujKscPK9mfuSnoeMnoMUSJpYwo4",
  "key28": "4fLwhDYvHfJCdDEC1mQKx6eC777Pg7ripx7dK6Kxo2Tfzutd74cpj76c7jjQs7wTjcYCcE2tWwiGaXm24EoSZrBh",
  "key29": "4z8RHq3eVxGH1UP8QJHBdMrBvBZQxt9FMnFs4xvTLYp4Np12QjHcx9hL15AoPfEMPKNzcGuDnjozHVa95Jotwd5A",
  "key30": "5icVnRbreHhBiemacSSZvqTafhzBUMknkGdibfHB2CqAnU6FWmdHfiCFqQf5ExgFUngyN2Nd9v1JpL5mYy4uNd2z",
  "key31": "4FiZ9gQdJMuWUncvhtbRbVUbCiYboREJDnf2rH78WyRx2XwLcrg1SpLNfntNrdvM5nYrZff6sZAU85i8XcbY9vVQ",
  "key32": "5a7N6G9dtQGEcmyJBFcxCaM5CL3RmUQ91MfkTCcKJ8XJqD7o9aTcXPm2ZxSHcjuQSRq5UjombzNVW7Hvni5JRdUG",
  "key33": "2byV4BoPtTrptAzYERdUbh1WiaiDwEHCJRWsPEkLiz4zvV7UJtzJVGW6iVdVq7aXSxRZ3D3VoKKHJxc3kjRy8zmx",
  "key34": "5oadMaePz1G7rKHhjSYfy4v6Aw3NLkfKh9FLhLivFptCncdLwBUo4fis7JypdofdJ9iYkggRmVLqK93ynyJ21bYf",
  "key35": "3oVQ8UZ3fCgsXRotpJgA8WwfbYRA1AZhoLMac4qo1vXkJKfJYT4PWxEyGd4QCnQXcJRXChPPXg8B6CUn756b8ptF",
  "key36": "4eMn7MiW92yP7vYMnfBESmiccD8LAuXgthjDR6q6GQbLSdm3d2yamC3tHdKDt1WuNsNhLyoS9xknjEqn4sVvmW2q",
  "key37": "2TqqjL3NDFJgmAyWpMniyoVEprpxZ1RouQ1UWg7rsHFC7RDFFEcx8jncAoNdLv1n3bmmEfCyGrMhoAStDDrVi971",
  "key38": "656gPWx6JKLBQxS3uLW4vsDWS2pXcboxscgDQDJ2CnsSex3s7vXgdDhys7MzTLkkQEzTnMXXDcRvkjfv2FjD4qsB",
  "key39": "5Fw2Gb9TynJT1YtZo4N9VyRbvBwzP1ncuDwKaW4SUyQJuJ3xN6rC5zMgCn7GyKhJAw74Xuu2Ey7XbkoP69M85KxB",
  "key40": "4LrCheNHJiTXYZ3Sm1mSYRUKmvkGQ2qBcaZbj9yE18ZdeenSrG3ozHgkXQjgeqspkQ4yVpg34NgNcK5a4EQAMQ7k",
  "key41": "5TVo6bqujc8F8sswHyGiZE7iqZpBfs8diAJEfp7LFuziWdcvf8eUdGwaa6CEuixJJBMc88rHRXahex38rX99zJLJ",
  "key42": "4vScBbGhuypSuvHfFX7jxZ3Gfp8qf6hgkrLEdFiwySYWfnAitooM8LyidVKVLdjrBAVekyC59gfocixRVvA5Xngd",
  "key43": "3Cuz9WgUxcKRrpEdUPoRaopMg6PMTzPad7u4vDf6sHFr4WW88BtA47XrueVvsN7zh7tVbjo17vwSXcQNpovYrgds",
  "key44": "5pQb9QM7Kgom7LCD6dRkpjAbD7vyMUGareXpLRwv12vooPVU1d3R5FeSpfBCYdiq27fDNJuZZBgzsARYb3ayD5yZ",
  "key45": "4y1CmELSpuP3L89Skrnny7agsumvPEWjdJyz1Yrm8jjLoyHUy72sYK6b1kdp5faHh57fJ5jyGn3Gy4R1TBZmGatd",
  "key46": "WZR29NPB8q3fxzAG7QZb9JyTwAK2aQxdRuCJn5K7cpiprK2ZLYQ4MUDNAt9dmdrtxVZ59MZrmCPJmnWTZrFnsEB"
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
