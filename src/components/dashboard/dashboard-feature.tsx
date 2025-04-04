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
    "4QZWQgtbpW8AB6KBAqiTfwDd1oSHArErJsmGNGPgQvHmHvTmQraHQD1zzn4Ms3Xk468d59Tb22kPCUns1GY9v7gP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pBKBXzkTREDFiPsSTpNiMgdUqsstVGxjc2X4teNCpxSeFhTQWPaNjg4KNKJLnPYg4AB1qwpCWWCrkk4oME8hvgm",
  "key1": "3Ty3Szaa7999Kui6amsz11gUgGw61UhrzFebw6koXrWJeT57ibo15KDVqR1A3trMRRWwCuK669jiCKaoz8qVKLzD",
  "key2": "4ZzAuF1uMsSngrPBvB9XqLvoN14iwx7RjoY5neLEsSL87Q3kMGogHNkxJtdiuCBAdbEeHPMMFKQoWC5GaZwfAxxx",
  "key3": "4E9D3VtuGkG6ZhNtFNn5V5F5NFEQabu2juscnnAxfFpY85ZiXvXUYawcTBsHrwfLnPSGvc8mjM1nydFDFFjoWQ6b",
  "key4": "4dh232ADb7dC5fP2FaQQBMXFtorqKGTLDcKPsehkyaZqQApuJtTBsPuRy6LjoAE5JQUNqWWT3jikNJ5Gqe9nZ6BK",
  "key5": "5kVwiRNageFEpFaufUA7Vk9To2Ay5F7ghvP1qgGTTqoJ7Fteq9517wqceEVFqu75m9aCnDtQgeBXYuKLpXcP5NrZ",
  "key6": "2Mj4rncES73aK3w6Mg2vXsy7wutas21cuoWHaRDCtReMUUdkE7LX6uJH4nx98SbuvU3KyYHjS4PSoGhDpEdjxD4J",
  "key7": "5P7VZNbXzRNJFi8fczTwVsPuf9UpC4yKgixCvHcYjaS6Gyyn9ikXxtH8YiCsqhLm2MqvEs6cYjKM8JMaSgPeUdY2",
  "key8": "5AMRLLDHAQc4o9wKvjnVkzZjWNn6XcX6rgtSgDCeqWefApQLgCU8YKhwLKZ267fJbQXpAL2mjxM9G4gNgu51ev3C",
  "key9": "4zbzUcz5DSg7yH3eCoZytT4p22tW9CiJ9UJZU56CJt82TXpxte4E3UPLMGx6xz4B7Hjo1VNrQE7DDCviQvA8Xw2a",
  "key10": "5QREudziaUjCNoTAyQvyfcjAvKkmAemdxAZgiBusNDxWMadRBArwVzTToH3tqccU7a6BXqBvc1CuQhaW5XsYbrCd",
  "key11": "2TM9yEHhsiRc9yNkngGK9aCy4iDVakLFWDrWj4TUQPbfgCj7EZxGaf5LrexQ8N1TE7Zvmw1cXB6AWw2wjLruQGfi",
  "key12": "4fn9AZ89RdnDAZvG1jQkBDyLySzexxR1ydL4wiDpQEk9QjdhkfosNyncmWTmKC5qcc6uugf2JpSBb8S9sM4mwKSC",
  "key13": "58u7Nuqct4w8KZQj3xoQgKnXSo9XpNCtDfZGtgJeAnWsRbcHfGeqw9358eUWmnXRdvDobhyRoq8UN3h4qkUA4wT7",
  "key14": "2c1pjyiD2DAticKvnqAxuLcTqiTpGvhSyW2y3uUkDRn9szSjJedquo37zPidAfhhCvrFgVpfJCGURQrd8vtzk9mJ",
  "key15": "2a1hKGsSKabFZyL2WcrMs5dD5eLq5aU5wiCz88PMdsoYvGTqq36iT3vRQLuDk1h23v3oG1FdGf8ggTjJ1bPQ9YHe",
  "key16": "3CXxVCMcitLsak5pPoBEBHBhoYuthkTSPPH7bThffho3pjhrxSLVBtqz4N7VPzQXJtds13RazPxkZ19d98ModifY",
  "key17": "7fCkhddJndv98F5xigjnwj74JvPMSJN1G8EGJ94233hj8UeebmYVTX5BdEfGZLuxPnLmpn8Tpk3Vk4tEYQ7VcCd",
  "key18": "2ECnhE4fqXmDdpwVYZpkc6dpjovERwEhYkTAsu8xcAri6iWvvDnoH4QsqiKH7smYW6V9mmESDGYdWPjgDcAcYbhg",
  "key19": "45N4iB8FeKvupMLnHK8oqJxmap1xRRUaKhe5i8QKaQUjfaCMgYkF3MPJ6zyxMt6somdgHiparU61HNFiL5GWMkf2",
  "key20": "4CRsPajyMdnsmJ9oLLFpGgvM5Zdq6h5iCdA8tg9EUmQBfbhYes6jwQwjwZKgRnDkM5UjcDcyvGrUiJPCCc4wrReg",
  "key21": "3VeMND2U29m3USbvJoAUf3tBwYzfTbSJJQN5sXtyWzq78FcxAToPaiWSf5tuG5yToM3xRuorBtZkj2USwaLB73kV",
  "key22": "3Efu5XJZCikFiBsTsfwYmXES4FxxNMUUmKZkXFkHURKcqFPtaXGNctnZ3mdJPmeyFbfm4WTzeALCs84DYnXmyNXg",
  "key23": "PpnJdYNpmti1qPxUW1ATHGtGBEaGUUADcU6L7AQwFYvTuvHqoWsQGNCd2yc1Ey5BpQmba693sSpaRCQoE3ugq7L",
  "key24": "5ho9maRd3EmK8zwFuioZjH5Sa6nQRYYmvx323NE4qLB1rDhfMBLT1VPtrJh5m7u9TFh3E2pfaeUwt4vVc6GH6Ftk",
  "key25": "2ruBv1BFJehhdXKw21hf8wnhSFiDkW6hi28oJR8x1GubJ2q7zBbArX7Mvfhtw2vJY6UMH9S9wWx3LHGQqYJHZYi9",
  "key26": "DWohJmwXjowPirmL72DcCavM7rM5b7bhu6QntCCvtRF2zVsjAU7WH3MJpBfUfRb3s6M23V1oSZf4G2zTnrRvkrP",
  "key27": "2pf63DYwb1GNNhWf9tx6SnjWHbKNboWbMfAxLRjFfy431ghZWg54mUBkX891osXz9e515ZLMW7z93KqCyvA1TKs5",
  "key28": "3uWJw58EDNQdSWzzNadVQ5dt6AZbKF2eqWU6wjeh76vTcEGntcuPa7AZubXxnh53tmFsAYAZ9SLK3YSL7Pi67MGB",
  "key29": "4kHSWCoV85xck6fADqGMfVo2WXCTMMoRNphuSNAvACprpZmMB3abdR1VMjMWMV2YBHBr8RkQqW9rswXhW9j6qKJK",
  "key30": "4Q4XNHTApXJ5QpaMFELY84roaqJHDnBrkNwcgmixSMRkaLf9f2qkvdQUXZWxk4ygczTpWnTFsERfoHEpcdT4YEQD",
  "key31": "3pgogWqYzojF7oExYwosh3zLjHtpsNaiJTnPBLpzSVTwP84cmtj1iz6K4B5fExkcaCi38AQh9RFRJcsbcUdREPdj",
  "key32": "4N4SNVidC7n4gTmrufvUbCLJasGCS434zx9dYqfTdaRjDBYjbcSzcjsscgu8JCKv3eFRv5uVCDYVD5D6oP6DU1RD",
  "key33": "33EYVktFaVaiPvgbe6ewbvBWPznpFNnxL81EU4bN9trBQ2bqaN2fMurfc2W6HbMe7Ly2DC4ZMFeqHHPteGaTGiTX",
  "key34": "5oFBmnEhXPeCCjiuSvCUECMkh5h4sxEVX2B1Y721UMmAmkMg1rDFVLFh7ouvnBM6pGeHs7kJjTeTmXS5eeM2EcLN",
  "key35": "uF4rHkxV7iWyr6Gej7Fe5oUKMeQNfeYbmU13wfqLoNkf3GnGngX36GMRnHRiN2eDfVHLu448rYESWrbQ25MojbU",
  "key36": "NxdkSHoAKb7yJfwsnsFWfsjLd6sLJqgTqUwow4D3ciHwndjWiTsP2MHhkhVFpMsAqwVVebpL52vCAj1pXh2kJQ5",
  "key37": "2Zxm2x7T7VPdmwCL56RzfitbDyUJkCYNtLKFabT9suffdoyTcQZsvW5tHfwedEKdDTNKXHa6Cu4t5T5f7wHXRnwF",
  "key38": "1PpGVfp4tSn95UjQMZE2G2zDGkpJf2gDA8PKVQTnrTZJzx8jJvkjoYyRouNxY6cYMxwQNUYBSRvt7GAzp75ju5E",
  "key39": "35eW9ejjgbQsm6LPSL9KVXkYAK5rcooxSj4Vm2Kh1iL6QKJvCuytKWR4EzX57YPiMRJQsWjxUj6kkTozJBPWNWv8",
  "key40": "32o8tRGiCioD3tfWW2pzXSdP9Gv9W4LVEhtiFqiBxs8kFKRZmbqERep2fVy9dPTCsmEHa1WVxX5gJsq4unxdytU4",
  "key41": "4fHQpurR8YLupP3i4yvsngr7ryuXXceJQDsZRoDkYzqhGVpTKRnMvp3r7EGSJPp56zohEUCPLL6zTBY8HmCMdLpp",
  "key42": "2D4z8Twt6cpWYtu6UDzxYd4FYwuXJZiyrjkcBNMJr1W2hLjoCgTNwXbgbLijqWcngtTeKGy491vAwybB91LFBMwy",
  "key43": "Nj98AzxHyqGLsdB179ZpL1bBXFsCFCHbLkFYWDahqHrEWeF8rJP8TyE1FzyYgMR536UPwPEptwJQfAwzPmvE4fh",
  "key44": "3PxpagLfHqRawQDuTKCVtnxsxrzfgnSWjH2pD1ctp9mkP9FWu5HmHv5zgSnEVhHZtZXkhzNm9L345zSNCYCdxqqL",
  "key45": "65EiuxHC3U6bLzYfnNg2w9r3F35CNruBAq7Ch2qpvkHz1jkuyxzyFwps7rxCHJKAHuRTAd6E4MAQo5josAsCojjc"
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
