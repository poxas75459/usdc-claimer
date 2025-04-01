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
    "3cU2dB8mUbmsueuXcLeTemNeTiXJZtScbmQCM4ewKCrAczuGHzYFDGdQaDppobDco1sqBBsjb2qYWxixUMFx1iH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jaNnLHvFetmp3sxivaSfcmGWtbW18ubsw3FT6xzmhuEW5RU7xVDXeewNCed34bcmRqVHrLPqginrSTdXBRjjDu4",
  "key1": "rZHmAb5hjzTJq2kbpNx8NkUAKSNXm5cba5RHisaWFp37fpEacSNNctzjL9GNSYjHdJcEATeeDwCrAzx5k1SGiFt",
  "key2": "4HRTDP1eXMQTWcuE7gWGREFq4khQHiMTVR2RiyMSoAQFjNC64NJhtVAEPHPZtT3kjcT6wnJi4JtTAX2mZEuBYCXW",
  "key3": "4TQcYVeb5mGsY4VhjAmwYEXYrTMT4q1StdaCeD11os4tUkGjUgyr2E8K1ZqUG3JNJu58b9HTAYwhnxMSQiyxZ1VM",
  "key4": "4ho1tmCbtUPBb4T4RtabEJEp8d3JtC33NPW7nznfAEatNo8UVvuaj2huJMAGEpr7RwS65TTMx4a2W6Cya84jMmvW",
  "key5": "vwPYJeukoaBnbChPTPrV9HWmruFhsJto9pKeSjD6byuzvf79vo7Qu27NFbwQ2uqj9nDEV5QuQFvbGVgD8nANuvJ",
  "key6": "39aNRfPbwpSLH59TAEset3rWQyAef5xein7eghitxMFTe8e384EFb6pyvhGibAuB1DHByeK1P2JpPR51cEtWZz1P",
  "key7": "3aRvAeoHC2mz9kq5JgeHcj8gqsXyq9zzMj4HaV8VDmyKbM56UJQL7cdYkgk95xEqmnsAfYNz9v3e1ekRG5A5eYF4",
  "key8": "47PVeHZdJsqYirQfiUkqmyoSd18StR2czqyKcvwmgqucu1NvMMK8MEHRYsSnTPwsgqNjjFZjXHTCTYfcBAMXXuVy",
  "key9": "4sBCe7RB8R7RAAJFj9V4X3sngND5z4SbdEMyPehwgcRkmcf5FHCxzRH9YjaeteZ1UuEoq7V2y3pe71ojxsnQBsXL",
  "key10": "4iFBMUmNEQUxMwwCpBG69i7ADy6mJkaL1P3WHuMzFM1TbyDkwjFfzVxuhMhLwqgg5VV1vei9oEkwWZdvNZBzW78z",
  "key11": "4WjUD5AjSJDSTLrRj4jyPVA6bP5Lh3C6AiUWixzmFqd1YweSCRTSShhE8iJqhF7wLzkYdES2uq73hv4kXBWD25mB",
  "key12": "4nCu1G9DnRAJ2mA7JoVuommqGSjiqr6A9oEEbtSw3cDsoBXSGy2UeUdczQK6Luysvyt8vUzLQGX8Y24cHh1agVvS",
  "key13": "5rt6izDNcFG3mtvQXHGehWRSZFFaeQZv2sQxp2XwaXSoTJgu7BzQAH1JVQHXwFUoam4zrFhNWptWqbmjLvSGg2bG",
  "key14": "3gj7mPwQByn9DUEJjKEM3ku8dhcRQ1Hqdza1544Kukv76Hk2bkHZxrrRvVzEDLFZCR8TegGdXuoHc2fHa7Xthq2i",
  "key15": "2mr1AJ35QNobJxGnHESDPi6RukRafSQ6wHtKHAeDqB49gZR6krK2VKB8MmCjJiaa5smhWkEkUxuPw4usE9SmXYMR",
  "key16": "3nsFivky8PPDPKZnwa4dqwthSXQ1gqq8zGsTkhhXzVfehFMDnQ2DgAcRGHeSr7snfVYHUZ7Ji62z2mEzdRu9eDAH",
  "key17": "3YpvvdxotmLTWrWkL3LrjZfGzNBSVLXyZpTDCXVnDZfyPcHxSm7kobXWMrYn4eRcXd7RYfNXwyNYujoigN9aqdkz",
  "key18": "4B2iDH7rc7sf4j49HVwP2a1yCkTLHiHtkiqvtLvzou437abd1FgqFFme7uftftDEMkG8e2k917CdFx8CnS44BXZM",
  "key19": "4HAioBCW4rpFyvAHTpCsgU41U6zGAtcymhtMpxxGabio8VWuJhSsx15w2iX9o2V7JKVi4KLWeikaAiHfYS779bd",
  "key20": "pg2fwpdtV3bswJi8ABLidpH4rD4LpTvPcgWPmh1K1Fp95BeKZo8gZRi9JWES5cPQJSiPKGGbxoYHXdw3pTYSKGP",
  "key21": "4f68sxtXWBhQVuj6iqvT2AMi9pgKErYLcsppM1DJABEkZFJzkkQuruuLrFZL6w3gTzea5VStj1pFswnwsEvNiEmv",
  "key22": "4jw1nLuTRA5TZyg4PqEjZGXjvGWczhAj3txuvn21PxQrb72ZzH7dKoAomxwvLmeVWY4799Pi83JA54e46ecKM1hb",
  "key23": "5ySk4CVW7spwLFpMpbgMdHKP56n6nS8TXjHV8WMmBtkk7B1JXAtTgr2gzMsUDdyC59g82jvLymihRhS6T4Ypd9GS",
  "key24": "2Kcu2pXAvzWNywFC6c2y7B1hrfnL6BhXLUECrMPfwwuNR4YXjighc4VebqF82yYEa4Nf5YiFaVtTyjhzUxkXstC5",
  "key25": "wjMhjTZLRERoKKyyoAFMRGMpHnqVfWNKs1VrQaSPCNYSQqo4Q4SQ84jjFDbDUCWZoRRjk2gujAQ5wKa7bdzzouV",
  "key26": "3spJyH2g3ZdXgJtAAeGVtSDFZ57iA5NbpPKKKh6rM4UUuGxFsVEwDopU1pA2CsxbVHFDZvWz7zBHt9egxE8MSEeR",
  "key27": "121KP6FMTfz7ZNNAiGQcqyfA6UJN8qvEezBJZetrAbf3mDkxN7B4foGx6DJnCUQsJK3XW7SfcnH9jZqDsuTNTxUs",
  "key28": "5YcjpEuqGjoQJRtKCyHoTKYnW5BxSidFEW8LvJ3qTdZLyD2YrDEtYT54pq58kQ5odN49vo3hsEzgdSBcgQLZTJQM",
  "key29": "4Cx6tX7MbKtWhvFf99FkrRtNWYqwh7G7wSoX5gPHMUeStW62RUDqUA9QiGrNZXUACLEJv36aAHhEpRe9MruEberJ",
  "key30": "4n9VGYF62VWoUjZpimsrCQYMoS7MrVG1YhhaVLE4d6kiyptnw95kGdG3Yk5dUx7oNncsJ8pE6rZfWQTxqi1N5nsP",
  "key31": "yJr3whuJFHCqonwUm3Kzvr91jaZpeNJeCqKmG9g4Ym2rTCGSe2gtzfug812gE455QpzE6BbaVVTB4WoPSTEdF54",
  "key32": "aXdYBAhTxm4eSJnAQKCBApznHaA6mR1g3voyVBMU4zBgDNKYQd3odpu8A2VMwGFeQodgP9NjR3QFibo4xcV87PW",
  "key33": "4TupPw73jCcbWFaD2USB3qGJA6GV2DNaP6vzMbxHXK81fL84oAuFozRadpFwYgSK1m4VTwegABEVPMYFGpoyfv32",
  "key34": "4bcuFC8fYVXoU8C1sXsvdZhY6YuFao2Bvi21Ax6eUa129d9krKG8VCYRZKGEBHvun1dTSPvSC5sJMsCNLVdSFvka",
  "key35": "2kWxq3R3euGCQLvrhsF4gGLoctL5CcJh2Mfd9yK9e75grZmQYGcb8vFpqBM9Z6BGRY3o2xXYobeP95gedmqo7myH",
  "key36": "DivLwukRB8pvbEbu6Q3p9pgbznatZJN86zdXje3ZeHep53LzUazCzfPVgrfs2c1jewm6eGxeJ5abHsfYz34Vz8E",
  "key37": "j3HMX8YZ1kAnRqTBrBYuvZCu9VDYZf3wTRp8htBB4VqJ5nAyMv7vdHyFUxys7ir1raGes4FwdapDRn97ivLSkvq",
  "key38": "2D2w5rMBx691dnFxtWmuy1AvSc9eA7uBAYRK1vDB1PGjnQJ6BJUghUCRBZmwz7GvXYpatjMhVWP2a5dLc5cZpETv",
  "key39": "6YjQ2piimcqeoi6FuoBGYjk42BA48Edcrred5JQE1dLckKY9WREvcEVxXnX7oXvZpeMQm8tay53UMbg8U9huoex",
  "key40": "3dmZC36CUQT8mnyVhi9Cegnhtsp78J4b9C1rgToPZoyQrMSzZ6c7m5B8u5tQkjKugdo6TVVfoRjsRirAuAozjhkh",
  "key41": "4kLmFGeX9FC3CxEHxr864hxeF2U1rV67wZig4KaHChq9jMPntpnR3FYowjSpLgbxqttAsASnepWJJnvp9tZT66br",
  "key42": "LRxpwv7v4Kk46i3BTV4CfQrEULDQxCTuPmr5N6Dy4zwBNak9Lcy2axnLjgYqr6iMPVQMSWnrCgx67TmzqRiu8HN",
  "key43": "3HgPirEHHdPDvVpsQmG6Qdm5BzBjrUngBJpELeBbV5fkntai8Mgo4fa26Aqt9N4zgsg3SydbnCpdA9yKDbckqKp2",
  "key44": "21qC7dsEHpatiQhLQdzTcuefj1BRKXkkbwRUT6vKnoWG4cYfmufRPM2EmhSw4g1fKHT9B1arcShJw9J9GLzXRzAf"
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
