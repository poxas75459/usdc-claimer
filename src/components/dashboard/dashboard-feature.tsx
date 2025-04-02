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
    "2vwzUmwCHyvWhdinYsXozXLW2XDL83FadLyZ2xEVGM6ytSj9c6JKYLzjWPZaTEztFCLzD1Cf5UVe2jBteVymDood"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gZ8WVeZjgUUJQdgJPSxL73J8anVf8Kigac1hyAHF8hKtassRYNgwxr7z51NMM8TnFUkwLnuDZVdasCs4DqNegzG",
  "key1": "3CfmQCpKPFCMx87XzAzRwzKzPE6SJ1VRkVEBggcF4rqaWV2AEW5dkMqgQYKceM2i7pKytrKW8cWernR22VnQtMtU",
  "key2": "4S9LUYGHqkSbUYbbGWbTM6YaebUSSpVpF9zWbwPn7dHe4g5PC4crHYiTempCdreTJ94fpbR6x635ZjsCEwwpETTC",
  "key3": "5m1x7icjUnM3oux3S5J8cLNy77xF1MmoV6tWa27usqw1CQopu4DVjwHK8XrJc5j3mMSfw6os9CfgwYRec4p2CQZw",
  "key4": "5Sba6kKTPg3Vh7TW2xWb6bocaSzNBwZygveg5Zyb2CNBTuoVmreSSpD4rGZkHWKRC4mYCNyEyJEUwTbuoHRtrmdp",
  "key5": "puv7Xa9g43D7hM1MT4SJ3kZBHPoaW7KXaSZtLQ6RgEEQGDQNN4rmPhvpdi8JV6UkBoixEJAeVk5ueQf8HLbmot8",
  "key6": "3t5wTD1uD3628s58jVd3jmTN66HuyLrDovAGKzQ7WCVydQHLuDVGWhuUzpJ3ktY1r5TagHrZ9EgiAAJ4V1sfQYir",
  "key7": "3XKSvmwy3tjBX6ohJ3pv7ApbkNumpTi9KkpT6marWNhUvLbdzrUFxbXWuMzdd9nwGfcnccrAfueJyPVKLnpGKirM",
  "key8": "RydYS7z7ZMbNMNjTNubScmKHnUTmmKd8oGRLTvGVZwquVziti4hwWHSvUv8Ej8nxGm4nPPTBWJGb3teNme5DUws",
  "key9": "5MdTFUrmrBNcGXWkrec4TWuLKck8tYLoLC6BzCnKLng3d59MnHmPr53zp7kz6uJksPSmcUP51XKSJVjLA9HNfset",
  "key10": "2u5SztwPUMozcp3CupJ1UEcTxRuatKZS2T2Td4TjNEJ41d3DS52msZpxVNNcpRbTWFLDjvieiCfE2qC24z2LMbaW",
  "key11": "2U2d1k5mHYUqWASvaBByejVdv4JJwyf56mEdJjigAiP6fcH6F5TL2C4WP1qPcCootUyVsjhd6ASvQLLnqGbiqeuU",
  "key12": "9mtDbL84SE9LMg76pPmQMcTUYDfzcEsjZf2rFicsQPQaPE64bfhMKMPKn3wDPrkqSXvjgPYhqTeGNMawdfmEyvT",
  "key13": "2VqvmenE4iuwRGvbvcTy6xu7qXYXnjTaixfo4fRh8V1WocZqB2GAZzdA5YVNZruPu6hgGrYYBeCvK91XL7uLGoCx",
  "key14": "eyRNgQRbW8mU4QTUx31AiNHACUDFM4ohemMF27Y4gTGn7gjGdzTpVvnJim5aBRhawxr9sNZ1VGJpJGZB1QKiDvM",
  "key15": "aTKK6djDTdTkKfZS3JCrGRkPAQh9cL1k1zQwdSHjY2xyUZU6jjoicp3a4DkZunEHc2q8q7qU838s8Cypg2pE5X1",
  "key16": "77VS57XDAxwrUDcfsWYDRt2V65CcmAM43NykRWDvojZSckxzeQGVCiN26Xe5SAhBGEETqRw1N47ByX5JV4sAPT5",
  "key17": "5NZSqhQLUztDCaySHr33EKzty7zQH25QZx8HsThB6ECJoMdSnmf6zATgrrpYamVmnF3LfZ7Zc25PfqmhXFt5ef7c",
  "key18": "2yqVhNp4YnGsHAYBpjRAw8k7xnnHx7gPxiGw36hwSSKtAC8QDnWfncJo1qV8yFxUDpq6LC4eMZt5UsKwcAPtFoLp",
  "key19": "4rwrSZcj6uQa81BJWceYUMQPhJfGQmBzrbwrgcsEMGCJATkTKXJRrP8oqvonjjqeEJVpahmHdzsg1HiaZmsNPoYM",
  "key20": "652ekR7uQjLqiGuabGAeaBHDwuD8Hdmxo2tV47BpVkRP52qisTZSavmtB45Rye4aNM9d8Btwujrvnq5fMpst5kkd",
  "key21": "2UPWoUGscmrC1RikdemNZLfc3t3aLR6Zq5NhfzakeMS3Ph8hk55XQfeqc4hftiHLozi8Yj4huFovajzmDAADH7Ap",
  "key22": "2C8nuDJJRde7zBNCAjACbtf82noeinMYeEnfmW9V5fNKzmbA52j7RAdvjjacNnMzfjywA7TYmACV74KzfbSRyRJw",
  "key23": "3MRjREHkeig1xVrPeyYkLbfp4fskaMAqCMgWjMsETfgsYMGgyYEkV3GLnhe3hqGfU1Wm4nAX87Se4r6VMA8peVcL",
  "key24": "4C5wDYmQ6ZRn7hyUE4XdFCzQTRDMgmEtLoRn7vrvJP8WxdSmhKCxT1q3drg82uRymwwVs9n1wiYcGQSkxaPaHJn8",
  "key25": "2AvgRt61CYv55xqdHXH15XzEyMeYWN4hY7KSHZs66DbTu3tigq5zDGsJxjTCFxiGafz8xcG6g9TSeSac7M3DrRsq",
  "key26": "5vU2NqedApjx1sqZkSJDUPULd68wuyCkuWwZpYMTaAhc98WckJc98xWiY2pXEmkmwNC63dtGxUEMtCh5buJFoytj",
  "key27": "4uqdc87mgzwinFxxK6LBaNsxestFRzR9bVPyCqvqdnykGt5kDxypFxz1r5j8Ej4BsM3JuGovMSruW73XdhuyK5A7",
  "key28": "2V9CFWqTUN8zBj1Cypyw2drrVdBuA6TtKzUddHJVvMunyoGVeQSnAZSF2ZdBo2T6ag9X1UxY2it1tV5FcshyjwwG",
  "key29": "4Qo5SJMyYhSZ8xviAxzCLTxQtgrDwPMDoHJ1N1nfLFC1McaY9BQt8LUGsFY251oXtktCMCW2MiJ9ZeGgSX4gyGZ6",
  "key30": "4Uzo56JxGbRyHd9r27oasMsBifiP2ja7b8LPZysvU8YGWdwfmZ9QbX5VTch6nfE5X4JoMTtXZ8NLuz7oKKv59xc5",
  "key31": "3qVkRhXyHp2pBRP7tQT9y6k7d4VELDe6A17Cbw2Xp45XMCMZVbVMYydBhdpyRDXA95W8av7nhgdeRV2tNiZrt6NB",
  "key32": "Pn41bn9XwuwKapE2vZP4Ckyk1sZ62voSyFEB5AJQZpyQLgHibxYPx6g5N459QvHXSBzPwsMwohZrWPNUGjwEqzT",
  "key33": "ZAo4uGmfCqT7RbaJkESNzVwbB1ZJXaxK2REgvuhze6NFERTwZ8UNCcVZm8UH4d3avvbfscGCRVPHFaW6Nd19cPx",
  "key34": "56mz42w1BsJWM8oMjWcbTfmbQXFitKPNZinAsQAVoN9eYMAUp8PPBkrAwB3fM64kKWNm43Ln8UVm2fFPuY2U1Xft"
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
