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
    "4H5moS3GytXdmD3mbfWG2AvLKULvrvmdTtHzhMvXY3Dn794R13PG4tu8voSJ71BBxJoTzmW7CXuiBGyAtJJmhtrp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1Pd8NVbdfhBtHGe59fwmRvugD1XgWroA7W6WHZN6fVh3N8kGUj3RhvdeZybZEiMopFT49687iHZhc1bZpzvXYGT",
  "key1": "5VqrSzHy4P4a7xeuBSpGEQrdgvj8v9ZiqmipPENnpMxdWHFKMy1z1ViRETMVrvyEEuXMX76C9HGweEbXKZi9pPz",
  "key2": "2rBXyV3gxLzR91EnTUCUVLf7UMoL7hgfHSeNwR7iMv2irBwGVhGnvPSTdNVPV13GieqLDJG58mYbrfYW9g2t2owF",
  "key3": "6SBSE8LAdwAc4AobLQKeaeFKPJUHpaTa6eXubu5qD9FibatSWh6rrHjTQJ58x8LjE2pbtbdtzGPL7FpkgwSiV8w",
  "key4": "iFgRAfecP196yQjAZytte9CnkBRfdpuZJ9VdEw5WFxiJpW2hogkewCxYzDP2jDSBmcj6Mmm8UWFx4nvW37jdSBs",
  "key5": "3U7ufsQPBAzr8atencG499Ffbp2pK21u6ZmuwtDHGG4fd2PSxoTx2ohrZYRrssahbJ5Tzbggzyi591QBbypQU5uU",
  "key6": "4etnJhYTf778qMUMpbRUXC1QYv5fcARCxre29yszjCuEaBJah1pVRLjfcycE9PRiXd8a1WaLua1Td4362NJBXbXb",
  "key7": "vDehXBZsxqB3xpPsF5K2zLV4GKCAmAiqv13Uhco5FZLsmaFgUADaD2cSMFpgLLwHeQ5U4rXfrAV2rw1rfsRFXis",
  "key8": "4Dv1A4wGNVoAUa9JHrpWsUaK6tS83iUHPyC67THKfiSCYXrDwbDffJdwk35kuSUGFiZhv2dkXL7tHRM9AwpNQ3fx",
  "key9": "5euKWP1pdsQvFPVreS72z4ERYvcuK8NMfriei6ahbcQ1PCzdMRxQJA2gHtJi7XvhuBYRktmTLze1je8iw2q9R8qr",
  "key10": "2x1JBEQ7SnRBF97jr7WgftRnaK6huvJwcWUoWeUXbaNiA2MhGmQ3vEQGRKeX8TFXREpRYwTkM9h268cfh3sydhTQ",
  "key11": "rPS3t2uXufozQpkXPAk42XmfUnVGPEHcjYDa3hET3dpPo2XXKZyvkkVmTWk4poHt1BDJbC2wo69L8gnrz5eEMaq",
  "key12": "2H63FbQosRiooPSEMmo6AV4iT282gHDYwe5UavMZgqQmiYYacyoydwk5xeymcj3cafBfu21vaQUE9aE8w3StMAVB",
  "key13": "2KUQ2HueGtKmyvbxUJAnpTvktdVGvttQfKfgyQALmdaUehw8Ekfs29v8PNet6adKgeotyXYq3jyW2nRBKoi2UWdu",
  "key14": "4mE16WRKZhHnKJa7LiojNWFk2kLyfKyNDfSmRuDWXCMHxqAuugfqNSfKMuFEEoMbEDpDH7rqqgCd1EZ1hs9DTqJo",
  "key15": "5u552iNzJYaAHrTAAhWgbfGcBiuXUzrRK1UtwBCuJSUwtHjJ7GNzh3vU6d8v1t1vBLBwqgCw4Rk4iDfHxMqgaLyZ",
  "key16": "65o9qtFDKpWpK5h5ZbBoDRm22BcgifXRDunAXodR8vNvb8XcYsDY2m5j95Noj1azPm9FpSEcRKvT93KSnxTw6Ff7",
  "key17": "4ChZJkSxQv2sMNP9ixBYkHPwgwCdgAUfJiLdPmrWcUwdX4dWzsYvePh5nXYhAkrpmX8HPfM7aoGsKzcVbMobZB5n",
  "key18": "3CbKfz4ztSJ8ETr6sdH3th4fAAhYXVkuuPhAT9NmjwTpGgPUyf3wanSZMsVkubTBdH6KmT4jCZ2kyvtn4dJNWWvC",
  "key19": "4951NpSazzusiqVjnkHUKNruiXqSmQRxGCSV621vL4A5Qk7sBxMMdieWkBfwneN29ucLy4k8oDXskCa3So1XEDQa",
  "key20": "4gnZq6jHFKeptRZmRLdjXKXPe6EicfqAUkwisagpM22dGpDQ13391kpeCPdwzsTek12TKGH1uersJ7xk1b3gxr86",
  "key21": "4BEkxP214DTQdS1CEYRido925Dhk9kd4bvaMj1kfKuwiBthwufV1Exv9Bhzw4M24R7Q3KeDWpuSf3vnM1z4izAJV",
  "key22": "2UehFgy41pg7r86BUjsQ4g1imM8YjSoQN871SmuAqYRZKQ4kpdWCMiDKWvUefMwY3gjhCgzpxH3f2Z9R9StHyaVs",
  "key23": "YJSgQjxoZWxa5RoZovdtP2K6UBAXM2B868dUrCiaDtWDUyiEswKjHi6LHYXg6FFsDh288C8qTE17M3fWaRZjPZ4",
  "key24": "35vtPJkmHHnJwCzd5LYPeNU8ut6mXCjfXJjzd12aVEDYehVkw4L9LwR1STS1mKktpuT69ythn3tjNqHqoZVbm84V",
  "key25": "5967g36tMoAJ9fDuz7m6Ty3WUVKie6FuEHwj8ajVK45Qk2fjLeRi6VTN1WwrM2hdPkiwxrrXPWHmnSmyto45C9zt",
  "key26": "4cv6RFSnNg9gFeLR2nDm55nAKiQY2hYvzEJJ1obsTrAEdNudZNVBbzAKtxAhsy8Vevq7c2H8C5HFFTeb7fEeBAVT",
  "key27": "4vYwnojg3VYWseNP1NBZY9eRsWpzwKCHJ3xCpxyufTnWdZ9j5ZLvEHZ1amPL8z6B7GeuccMKWhQmZzQwuYfRkwvA",
  "key28": "5hgicPR1GgiY9roeVbjoTTxEgr3asrmjgbscQXTcUNjhCh8XEbJCKws5Qjju1HCMahxYYdo35x7CB1RuAApofQyg",
  "key29": "3hLebkQ9w2csEv49wwGdZEBbdHnULd8rUYNLSn5SK9335UoLgEFPWMNvMfYAG2e9ffukY3ag8Jzb1S5SHtozWEQx",
  "key30": "39mUBzx1TNiPhp6TstrrwSHGShPSBui4DGDioGeYiknEJRQxu4j6fMkCnoTu3LEtcL33bRBFezvfUQEz9r9NVMDm",
  "key31": "4fpFVfueuBAS4oFRAopmVF35hjHNXaNS6Rfkfv7veykvom6oA153aQuQRx8FzbvegpenCdx3XksRU7voYCMKiBwo",
  "key32": "2pigUbnFT9g3zXs2NZuuh2G1uXjxaqjjZAdnscQxzGjNHgqoXFbZ5fUpPrS6aXVerUtFagJ2yeif5tXu3as6Y5aX",
  "key33": "2wxsA96PTmZTuQKBDb7UqKX2cEqNt94h7ZLbFsB3rpjVUnF1WDsbfApa3Yv1yShKZ4ozMGPhbJg9FftQGVvr6AY4",
  "key34": "4URWarSGVmwjQKtqXDfrDMkWtjkR5MgpGio4CjC5cDFE5LTAygm2Jx4SZAch69gaUH393uQ3ChqrVnHYZ2MCLR5y",
  "key35": "43aTEazwQxuhAh6gypb45VLJkecLUDBFvWEbFf1XP2FtMn8X6jhR2bhCvMJhaTch8z61virqx6Jybx6idYgAN84x",
  "key36": "44W7PSLWoV6kY6GLWf8wdF7AShLsAEmmZ22FthQ2BmL5ZRbGet1u2jDGauzrtBwQBQXq4pcRDKxLi1MmFntiWZd",
  "key37": "2B6P2ZPtLeNbVHUBDArwMz2kxZUimhPwbHWueTcAXNUqaQ2Uj5LsKUWVkriz3J1kjXUjJh1mp4DtW1RzJ3DMkTWd",
  "key38": "rq6wMEdLJTWM9qDPySFbGZNNTRtsDQ846UaMqsUMQxLf2wTkQJnuoM2GX3iWzofJy77jNNxyAHGThiihiBs42my"
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
