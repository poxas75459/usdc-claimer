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
    "5CktWVCZzzRQ8DuJvDRDrUZUuswYnMWJcQ3oLd42UJB8MGZVL7VR2WpWGQgt5CDFyN5jMzuFGB19pe6XaHCwDdxG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53LQKF6nXirTAQbERUaZoRZmaJfjnT4k1zLekHHfmHWtJWm6Kbw8Kz3bWQmZeD8GqGiD1pKRuCARxSfX4V7bdKWc",
  "key1": "2NCw7uVa1UysCerEoZZ5YiZkRFaj2nEsiHoRqKHE3GSVh7JXkiP8YvPK85CCLfMKDPniCnvomj5vefzi4HwpWuMC",
  "key2": "3UWcQ84t7PHXMACvBjLjKBLT9pr1WaxaBkxdVFQ7TiS28dFXp5jtygSgex64kj8vmUTsGUPpFmfFKmwE4GpQStfV",
  "key3": "3JCL9MkCyd5NsPtrxNYPFzHJejYBQua9131DN6EFe53aNwrsRPigsfxQbd88gdsptt7aXSXSCcFSC7Fg8D7Y5TAK",
  "key4": "2cNCayUgKV1zgjZkJfrjpuxU4nyddkK34TA5fThCTrmRcBirBpEkGiDXdqTiwAfJUYkDAKVifeic8V4Z2EM3aLhd",
  "key5": "54sm6yNS4hQ3qurn7dSFnqA3VJdubJA4GAXYh3N4eSEJCq7o6x4ZiWA4mM9ifBTaxRTHpftHw4MCRgoGjbtn36HG",
  "key6": "2vbdPHr8aHBXseFbeZa8udc7tMtvYTZAgUppXndGTn9HLL5nmrV1gHDjy24en1iY7wA29ZPhmGNStbKo5xkknauF",
  "key7": "2hhYtzrDgxCdEK35dR5n73tWnkKQ2tx2d5tCN4mHjwDEh8HLMCbnT1BAFiWwRgn8umr1mdZupP5WbEh5ZWVzXv2z",
  "key8": "3kmgV3coqAD2g4WiMiC5EBJGaz9XMyW8WbSHkwDWBtzSMP1SnvSQn33v54b9o5Wwwfs7UBT3bmTZEJAjpfG38ux",
  "key9": "33cLaCDoeH7e8LD2hrcaqESDPg4xt9K3ieEAqsrmQG7Yy3SPD8vMNfEG88HtPzXSAN9mkLm2nKfErou3AojqtYiK",
  "key10": "4nKNg5AGxRQt7ZDoS4jgHdcfdAdxENRiaRD99fdi4Ao15QvPTFmLX72dVoopUprQ9kH1n19s6YqCjxDyRbTTzCW2",
  "key11": "4DL8HYmTePCneZKNZ66k6UNLRvGo7G5miAHqqafLo4UiUd1NQPF3L7PZ9fvF65mYMePWTQpXvdCsfxE7N7o7D6NK",
  "key12": "4jZGSaHJr3xYPL9GLUySB3Y4ErRz3vJHnPm92J8wzdMJJmdryn69UuTA7ws1SCFHE4qHqWXfLLCXNWPKAgPZTAZH",
  "key13": "5GMf8MUC4fpq3YoRUpp2W2pE3f5gqr1GDsw8kHwYVxSc5QpFbomNYLmjwsfgnuNHiUV28ny8XGbodDThpi49JG6H",
  "key14": "4HDdByxHMaxeeky7E2pJ4KXCd2388BrpsBVRqXZUnhTwKDNsYUMVHLH5Hp2mv9U5ZCbwCH51BJSRZmHmqujupV5H",
  "key15": "259ZhWZnsn8i4XZoh4YmXt3pnaQJCE6J3YUzy9hLzHYUk7matnkc9AE6NUHBwBe8yEVvAuNQ6Hi9DKCMcSGhqbyE",
  "key16": "4cpfDVbfbUT7tbamq26TfPde4YcGbT1eeL8WhGQp3j6ipsaoNjBnsk9j1N1n3EExDzgygnkezqJczB3GubArAD1o",
  "key17": "54u8Dh92w7XgTkiFjk2Mkp3yqbwn5CwemwXPHGPXPVpcb1MAduPKWot8my9i72fNeZLVMnSZk7AzRVP4XccGrhfR",
  "key18": "3hY6fEtHBQsuLRV6T7dQmFNiNBf6sBBGKyWey5htiiV7C98Ro6d4DEgVYYZqdTkRGPVLqpYoAfWmVmraywvAZgHN",
  "key19": "3BtxWogR1t9gRbmxfWvfuWkUchDddmu7Kk1FUNKyKkTLhpSqMUAeqp1TmRabxHQh8qwGuRbEDVDSc3U1pSjRKSFX",
  "key20": "8qyPjf9mn7FLShVZxn7gVaBkzT7Y5m4WyNVxuAffX1jkoYk8BUhq58Ff89W89d4woVUJVXW4Zz3JGiJ33cvVvHF",
  "key21": "2vrx8hTSYV6jpJPWtd9rJ6cBCwSi2owbGJsAKfnFoqMb7x5BZ1eNxqVrNeES2fr6pS3x65GAEmaBkSnUq39zts8r",
  "key22": "4TQWKoe6XJdJFoejg47WZVnWUx1edy1AM4nDkhZ2HbK9FETibfhzxsuSK6ZXWR3KJWqMGGMi4yvWj3DoDPcgnZYz",
  "key23": "2rhXSVeorxGaLXvcUWfF8Pz96k8HLysQT7Lfp1Pb4tEuA8TeSydz9ZbrAHBwJ1wYHweQsRpSkENQtP7JeKAZHcyP",
  "key24": "xgmsVtcFL6mdDYpYagvz5x6EzrGDTskqyFo3o8wwEAFzTi28sJ4VrQLoWDwM2Hkuxj374w1bcRtdWJggZjoVo94",
  "key25": "Uj8jk2sM6wUg3amFJqiyhYW6YXfGRU9w7vkftNNfsqQi8j6E1HtF2ud5NgVdtsk5VANUjCjMHLGpo9oX3CkJY4G",
  "key26": "2H9ejQne4LeBTX2TBEV3NFsuDgrm9ss3Qn4qbpnLFwFUF9jW9gG6Gqh1htHwfkt5MEoLPUcRodf6ZECeYh5zwEMw",
  "key27": "3yMuQkwJv1XfWybivM3KyPuiR1mtY95L2HxBDutwdDKU6DAyNjURviGAdHh9wm3EPjwMgncYzVWsGJM67pCjLmzm",
  "key28": "667JB4Xrcj4238ouin7CFScVRtxWxTggopeG7xr1uJX2BugTSnsHwb1ueFPTe9TXBUt6tMrtXMXHPYNDF77U9Qv3",
  "key29": "2nW5e47YinenwokKFYBkWUNrEWmGpZCRGU7QWghLrMq4bUWx1VNdbQSeQEXdh6jU9WZ5YuBmWTuBYKiEwFTLULAw",
  "key30": "556hDwRj4szc6dN8Evxe42SdFegwcFj91j1GYtT3GFZUxn3NswqvGafxcdV69XJuXfRzbtvMpqQ1JEoL9CUEFdNd",
  "key31": "67n15Ctkz37gjEtzEwi5xmMxpKVzBAz3Dqk8a4FVc27YJvJ6GJ4bqXyWXufTKthr2372QznLqD5SS8oHaDiocjKY",
  "key32": "2JGCgcJngd8BQH18xvwAh8ErJ8pNGn6sKCeMS7wzCVonfs9qBmCBBRRmf7rdpGbDT81Bc3cgYUWPdstoafgh4988",
  "key33": "4gXQVt2T4qSiHq1myRieQxCiVR6ciSWzXj2cuJXnkcPnhMLGLvMGrJAZ3HLsRbgQcWkfKFzFxN57uFJLhjRLELg5",
  "key34": "5uJS73Cvk1V3WkfyRGfK7sJtghYRAJsiWLesGjuSxE5YEVdhHQS7rHYbACwr1JmAq11z4kf3gWgkyEL7dzLQt9P4",
  "key35": "5A1qgBYCan4yeykGDAMQ8Jja15M5xfXmae42m7UULMnu55JQd54nDT3UmPQzN88qVMAtdLgj39QvPuD8HuhCu6jE",
  "key36": "2EWLK9TEdgv1WFi3rmssPBqvoVk1RqjsymbPa87dNUuQh9AomGnCFurz4tW3jLciX8zvVMSooS1oswhn1fWHzvC9",
  "key37": "2UykMoZiqpUwBf7aEiaPxsh1PG3jEG1SbidN8vsJ8bf9jpwdcA8ZKuXF9NKA9QE2shMbRMEgLYQ33QLc6ebKjagr",
  "key38": "2VgZGioaYLTqD9VVyhi3bZM4H4shsfHM5RyEXXq73snVJ8WshFSZCZLksCZx2RMo26SM8FAhSJa6Cre1yC7SKYP9",
  "key39": "639tX59o1qaM28UmEwZbcDRqmvEWGndcHvgLCtKHoxw1arxutnhzpT37pQhjzUNLeJUyHBviiiSUkNuExrkxz62f",
  "key40": "2Tvc2xFnQFicywWmRRNuBTda9zE4uV1Cpe9qPRde6zEU7h9dsbfvkvx4UNuPxUGjnFpVgWN6WmmjVxT8N7vgCNeP",
  "key41": "2UMNhVdmAC3eokEZgXEhVFGiK5rRViyc1MW3EEwQ5DFDqFjJpHw9qtUpBL53r6GoKfRPjA9XbnwnND8Pndm4ATfB"
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
