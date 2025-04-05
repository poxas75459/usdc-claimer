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
    "561rbai7nt3dwGd7TghrHrVQzuWqVVQSgqbhVLGJsfGwvZTsK8YiLGA1xTdmr9YBhYRQUEEs7FKRUCdXFXXzA94y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wFcX7BmZhfhFRDBvz7YGFF6zTf6wB5dZEL8zpWn4B8WiUvKqWhvJDRNGcL3JoiJtBdbdd4k5Nx5jW3RCWKADPvb",
  "key1": "3ayB2tzHAXThA2yeZt9HdMLPoeJZjaUadzfYWoL48HsorvyGGPz7RyDPpTDQz3L2Xjmc72n8gB4qz3gzNwePvusy",
  "key2": "2V3UUEQHZaoMYAoUvJqFQGZB664tu3a5SwbNmwj9M7Qpm2LAfB2jKEqKFXDrDzL79y47Cx5wwi3DhB5PEfvdafRf",
  "key3": "3YwKaBfi9Wff6wYkY216m9ZSeiwvJMQbZHPEHqVJs1ZdCwyQUvmtTYtA5uL6wRkFS1yYXUZ1qAWsfQYWULfVWAMy",
  "key4": "UotcpdaF6enjyDw7FuqwdVQY5oGKX2QndTdp9KgVmrAnzgNaQ6hcsE5ApH18a5SdBHq23tmuRS2Bav3dMMEgxCN",
  "key5": "NPwZP1PYJ9T49uh5EZvSsD2zGQ6Hu2LZUWF9mKNjA1GJT5vtFMekCspfqEyUf2v5hYurLjNECQdSd8TZ9Js4qrW",
  "key6": "5AQJcuN2YD1Mb9n1sbKeACejZJZH4WR8jT7KwGJKVRBakvkuqeThfri5MYD4dMocsxNBGvB6vm6ZidFJPgSeL8EB",
  "key7": "4pPLKhyzQLydhKCGtvUhPeTkDeYekCP3EsGrrCPRfoTY6WNxkpL9ptjPtxSk2bbqWMhPpwhu7kx9yqctHsZPErJB",
  "key8": "5FKj9YkFpc8iaFknXxdjSm8EHDPc7NcJftNzFUJorLF7BzF9EAct2UALpEdSivLHdyWjnm9QdWnF7qzuAsFf66XT",
  "key9": "4M4ikUsRsVvL3ADCNe9Wx63ek536bDTLNMr3Kx8eCsz7yecGMq7StRP5nie6zrKNxazHRFrPp3u1rd4DEWGFMcT",
  "key10": "4DMh3Rs8YqSfSPxsXgWUTaPLXqovER4q3Lgd1FVDdg1rJXFoog61U1bH8sH1vTU8o5RZraN5zK6ZGCXTrRtP74bD",
  "key11": "3bPWMmdxaYAT2Eyob8Y2pyjLNtTTZSM3TxEyMffE9afmvUhoBDWFQY11kHzJfxzMWWTS38xApz3fJL5nhDEmyc6h",
  "key12": "45HLPrqMuuASoMiN8vE2qFKyzFZRMsgUfRFr6pcDCthLN5YyPn6aqF3wfny6Hqpu1TBttxUyrikbDfVc9rU5pXeu",
  "key13": "5t7obznApiJVUbbDtMh97UzwQMwtGcucddWkHK1c6fxEubD382LpsmjZYF4kLULh427CLvRnLuMJpTf9AqqgiNGu",
  "key14": "dfY5QfUc5dXEuUHn4c1zan3xLP9KuG11RwhEgu8S1CErp7ZKHimqPdMpQ3Cioiyqdxq6sHN2hqigQNpYiVwECbL",
  "key15": "2dgJUhLszsi6XWr7BrQhYjkuHNjdJnKJkk1DoJ8FLgckhoaKDW8qoNKMfneyNC3D8jGYnTFPEtwaBWj1PyoQs3h1",
  "key16": "4QSBGw9HKirCczKmwd1cFaEtoUYsr3c5PuefwDUrnq8LYbWpHJrx3v62K8ei9GgKGNSEFNkAQntWdEkDmu8bjNwK",
  "key17": "52JyXetzCUoEmKJfKuP3LY29mk4Uyajrpu9Y5PkGjTFkdR217EU3FSKC3oLz6o7P9xNnZamJFwjTRvpR8X9sBA4Q",
  "key18": "3BcU2PStrhvXAUSFWMhKYpcPcy16r2A3ZzgswZLmGMoTRCgDTFQDpFECoVwuPwzKPRwwTKtMAjTRTwbfwfs6bESM",
  "key19": "5rynBPySdusC2XNQW8qiNzsx2wyZ3TLNY4wPr7y3oULoBBGrua5myD1P2A1ga1pPvCySfUhowLroWFrFdZgQW22z",
  "key20": "5mLcrJJ14rLV95jftBbAnbVR3xYG7kHjBnNu6UkSBjru96FciNKpbGcvHHZq1WZFmt2BLAEoK6JLeziydiQcUnWk",
  "key21": "2qjjUcRxkjEHXx2zG2y6KwbX1etfjodjU275R19u1tfLVHhGMqKfTnsMjGF8tmJHKMwmbVvHE4btcWeWJt7ZZkFb",
  "key22": "5tJ28qbeF3gfa1PPMuRhbfjKD63172o7NC6HaQZTzZXYxLLpQrZYquKGR34a8u19iHdJsNhrKK4m1CBMHpV25HAx",
  "key23": "cnUrTyYKucWMqXuZ2Yqj1oBP5WDhYMTwMNM8EfQt2QAAsM1QwbxeuSBC97RakCsyCwbN9JcZytJN1pBnUW9MeJG",
  "key24": "3WcvFouZULarkQitqbxt54ACU8AdUW19kzR64Yemi2FdMYNs4g7Mr3cRTZrpmQaRgX8Hqym6keqr4ydZue9Gwbjb",
  "key25": "5LSYPf6NScCtXDQsxRpdYZhaudbNNsQCbbyPfumZ1bccjdhjCr4GUT1Ubdaupgisp3fQXseRxhiVqjA4K7fgyWCy",
  "key26": "3uhUKMUL1gGjg7skd7JKDq4vsBn1rUcVCYRouyzxz94sk3tCsp6moXYdvodMjsfgurzGpuv5ab4w2rhAppXQat6d",
  "key27": "517WUQyo4aQygVn7PxA9tAurw8dmcZTpTTATrdMdCk4Co3vBnU3TPJyCVjwXWMeyp9hbmTgZP857sqZcyvhiSQuC",
  "key28": "5w9wMVHCJPkoCwV6p4hGnVGvd7QRdALhrz4MApz619Dhj7ne271kFsychsj9vd7CMjsbebxjV9L2DgzGDRFn3eRk"
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
