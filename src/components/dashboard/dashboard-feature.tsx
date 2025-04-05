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
    "1UrJHx6ytMQeJrHTX1CN6JKQ52HoEfF7KVCw68fLH17VCAnXJRZLyt2SqJpPkxVK4bqEG974JeE7ifc3awSKuoN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KXtFrnpSS5u3VM98rkFqEgEwZ7Pts7tVmfAVxVk4XtcDWLYZKQGZgyPB6M9AWtyn3FN5vHLYuWmQoS6AxxhTQx5",
  "key1": "4jCaDEzykuQJQ4EpMHfmesc4vVwyo7keh8tFxKwG152QnVwzz1WxLoPqGcp5WL6ej42uFfPXZ4vHVDy7fKU3kMmN",
  "key2": "ve5gYUZDNJxGBsciCogTobK37dz8z27mAPssCVEu7fxghQ4u6sQRmjeL6ydz3NFX2zwSue4KRyA3uXYR4QyddrP",
  "key3": "4j9EQxXj9ShoRFQrWPwnKr3r9YwwKS6JvqGWjkYtqaTM54SMDLUmki2iNJrSUf1Vd99ArCcVwVEoHY9jFo4mmFKD",
  "key4": "4UR6xEVAesfxqxCvou9gX8V4a8GHPNJAepNDN1Xq4oxEDwpNLboMeSerjjZNyKJyCXQWwQpv5tYoAAHGdnBvEgvU",
  "key5": "3TWfjajnfoHJGxh8S53pUh1YNU8GYkzTv5u4kRU8bfMvz4xK8CdHJgSNqRLbJPRovj4GCRwFis9T8GBKKbFmvB6U",
  "key6": "3PwF91bWLZfECRp2rXyejAwmnetacUok7dTpNLa9Fao6mVhLyrf1JvvTUhDvom1FctkpHaNkFve9xnRBn7SS7nyq",
  "key7": "378fLtJ3qRhe1kswZ444ZzTXJbKjPhTca3wKZPSiGL95m8Nf8dvd5MuKLcJrPosQ19vBvAuTdkkaLT3FHojxxsCD",
  "key8": "4UBBLMmUUsAcKysq8rvSDiLkUxcH4Jf3a844B5cXN9Jd5jt9rZgu3Q8jqsqY2DP9Ni1v6YR1oBF1n7ZuToTq6LuF",
  "key9": "hzv4xrFJBzKeUpo5t19u48w2WNVgA6X3uzC2aN5qgeZMi7G6JxJ5EojUt24T1JeUGkfKQfsZFNFXxrDr42A6nYb",
  "key10": "55KSvoeN7kMTtNLJEsqtS5vSaAZAqeYAkbfCJpnd5jucoR6cCFoSwbc5z9QCg6LJYtEP6443T4pqM1P22xa2XR6J",
  "key11": "4WgQTJLpUQRi7EPHaV9szeZKHkw9wTME6DJ5iyaThbHFnbnbomf1NQ64X41trBmPaWjLNTdvtGZppcEudZKXSwv8",
  "key12": "uaomd231dqrdCbXWwgvprvncXK6Qfpg1KDCTYgydYJ3WVr3DucRVLYGUm5ypRR24gWtqf4koQZ32yULcq8dsL15",
  "key13": "pno9PHpFKHnSisgXqDB4TpUGvaLwodAQGFZpGBj6N4TyDAUc6J55uWrqXJV5v8xb4gx9o1m4GijhvaNMrKNMPx4",
  "key14": "BTQarnXCZk273ykS1mVMpcoHJCba3vyRjBsQj8Lwvj1wxQzaEzRp9XM4KhTieiGpVBJnnkmksH9zE4qguD27aKT",
  "key15": "3WetAT4QxdgEwomPSUHAPYZ4CgP7YD6fwD4pByvpmh5UVyEsNsTauPpjGfDQbW6dKS8nBHpQXfmkTXKHUpdME79L",
  "key16": "NszXx7srYuEddjJrrC8DJ9G7ZLNzm5BpHSGbFXokqeVRD8KwXLSxY7qgDb3Ra26aANNgnTGCXbiHgN7Z8hwaqCd",
  "key17": "3KueygMqDKFb6jzzL3oQ1N6znsrKshHMMGHufN2M7WySQWjibNaCx5Qms6nEyYTqUkpTXCLM56B67iZoDVR6CSmy",
  "key18": "36c43qgyiVJv8hnETHod8bsvt5xu5vd2KGomthRHjgq3LeSUkd9nFuFKa1TbpMrwKYHW6Qw5X77wkCcwFskQWeHf",
  "key19": "5gQKHw5QjtQi5a11dKgWit74N7d4seWH2awD3134UsCCCVFf77HTSfjG5M2AsJX66Rk1PYkW4jxBkqUKEZD2kDRq",
  "key20": "mKvqkrAyEUE5Nn28prsnb1CbWaLAjf1f4eBs5dmRvVV6FxyU6StN16CYdzX12Lz1J3ep3yawi9AoZ3A9hZBMRg8",
  "key21": "4NZT84wLnWb4FdRFYSFQ3GBrPpQ3P1gxrxdzJgfXy1Bg8ChgRk9opH1mgScjYTah6RxZFEXwj2T3MbEQ1wPXDKM1",
  "key22": "4h3JbZciY5XHN1jcyo4rwoNeJH64egUsR1CMxyEPhPmtfSqjacLneRP3Rw1UupHQ7CGzFzie6C1XQzzSKAMHEVdF",
  "key23": "4GKh6SBLWi8ht39gSMemcHnXevi3H1NbbToiSxq58fyqZNTJ9ixv44JsQzQCkdvLvGU42gCWgt9gyHKU7P17wsjb",
  "key24": "2DzRxTq5M5CNLdjbqq3drx7WQMxXrLiMrgJ1WXwcFVS2eWQfA56Rr3jVHV7wDNp22Ehx21WDk4XNUPMgpu1ouoQ6",
  "key25": "2WMuBaM3pXoeYiXRaXLGcvGegCK51AaENYB7thNKpJ2ysdw6nXyLfNke78YFXvybfv9Pz3CLxos6FJo5yu2emPSw",
  "key26": "4Sf2vfJjb4LCuEqWAxEGzVbyPxhtRJDhbQYTn9aThacKecuBbn8GBi74HwkLNngQ8Y9hMjbk6H7oXwP2Lpac2bU7",
  "key27": "5xhHVJhTxKqmQWN7WQyhppJnQN2VtLm6YUMh1j2zVYTCZLcs8poNV5J2ahBXgoD7Ug4w9kfHe5mXdpw5YVzjtBef",
  "key28": "4ZYGGpLSW9h24Pu3bTQirZX9Xs4z4XokkSp3KEJEE3TQ2h3ax7qXkHDoc4gjzVC5TtGGY2JYSqfpSsg4kU9q6PJH",
  "key29": "2fHE8bkhDfroCke5TWu8FbkHoFwBgKH1EtafpUT8Fo8HicXfgbobH6ZMrDiTpro94UoVRCbSxadKSDdyPHwk9NWd",
  "key30": "5pD8p9x4qTt1gu1iWjKNeDznZ7rtBdnZc8WMMSahqqwVrbAoCkZ2fcQb8rLCSTY1k9QnTFeQafzLc5BgqdhYJGDu",
  "key31": "xqZTnoVQtCepD8dNekCYobB1uAj8hwJamKBjmSJtTPeXcHTR71Xo7GQQULndYBEzuczboucb11kYzX3j4EKkeiy",
  "key32": "5KbikgaZf2U6C8Nk2LoNwy3Mp2R1Eh2vo1mteWcNfkEdEmGEg58vNgP87suASraimvHGpHXrH31hsKfFB2SPhuBC",
  "key33": "i9kaeJkLQxdVrCx944UhUDiNqkTzXnx9eKL7t5vX3GjbtWG3caYf3ts7mooyheGWkDMer6yEVjb59qB71TE9JSU",
  "key34": "5vJTiaa2mZbDR1CyyjXKDPpL6zsqvfJcNLbXpcJJy1bVioweVP87s6dvBTX7VFZ4sVT353nns5MjfV6ZyrU3Z9dv",
  "key35": "3AXesXETQN3yyxqT1otVSTQZZ4cKCdv9GXtNRqq9EUFncW8AmPp7NySUmqeWH2mbTRi6u9YnQveczEw2kWJvyRCD",
  "key36": "dSSF4YkJmeT7jniuWHc36hxuUQqVVPFS7o26q7EqDJS5f6TNG4c3eFnQNwYxd7tEU45FLn7vwLR76ANXVCBhdWv",
  "key37": "3joHpzugt7YgsxumiHEcBdD9FWtvgN2bW7k7F9EFmh4teBNTQHccpW7wWq3imW5gThtLWakvuhZMhvSxKjvfb4FN",
  "key38": "4m8KQDxiEr8shT8X6kCCGdck1nGFghp9dfoKZtjKQ31uwv4yVktWZHXkTiy998ghB6JHhr4FzE8eWrHkMAv1Y9ri"
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
