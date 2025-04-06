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
    "571X7K32px4vrap6eypET6qicueucB4g2Tz5xNS9dNLKK9smYHCQLMttzPUDD8aGF1RzXDvmkazZnjtvKgmQa4Ka"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63WPE6G2zoTgU3eVGiu7jxAthifHeqwNFBXSqWyWmYqPLQCHsTRoDg6NQDA2mAGgo4zvVeLUa5jg3RXp1gYB9mM8",
  "key1": "5FJxPh8cPfTG4Av4V3UG7bHpDvNsE6BsPXJqfECPXrmQ8FDmvmYQLe23u2FcDoSyfbAXK7mtP1AjUStKZvg2mgib",
  "key2": "2P2LaXD8zE82bBD9eCz7z6if8kj1EwTnjeCLpdaApq8zs5tnUTRktRpiNdwihrpVx2nQEGefnTAGhDJY1B5wBYYU",
  "key3": "3hB6uhhgr67aKi6TyWwvybbSeHhEXaWS9XRW1W7kijoVS9umNLv9yLcvBwepXqK8PjWvWKKzgdotfx3Gik6Sy6q8",
  "key4": "pHEsuzWNiKYBGTfFxWjdfewvdPc8ZxauRDjqmQx2HRN1QUHJhyRDSpH2MckGjsjMzp2nUsQ5ExpT71uiqJuanpz",
  "key5": "2cXiZJ5CR55MrL5RSJwaKybH5KP2cvFqY56PzsRct3aekcwFYHmRi7YUDt6wADrMqsjgwbaew8Vc3sRKJCFEbMRK",
  "key6": "HkndRZYrHHBZZCS67TWaNdCcTuPqedSGRufL2czUTkB2N2eJt1TBQdys4eSXbtzU3cDgRDyqW8Bx5R6RiaBDbb9",
  "key7": "3tX9FGSM9FaJfD2M1nUPA4nWFxA3cQhnKYn2QfYqUtJYiKG3Ja8dQdwpCzhiZqANMvjDNg8WxR3Ec8yFUMTN2Rjg",
  "key8": "3L9s6wKrFH9MPdq4tcZwxHFuHGke1FYgEYz4VS9A3iniMkY8dNtojRsHdqXR38FJtmm8kHombZHxFTfDbiZHLKpH",
  "key9": "Td8gqYGNG6xRUY4PZAzpoGWGrkRxoycBjdVdbgq2naErga2pZMhywq31WYUnx8bkRkttcF4v3nFbuTn9hwQuSnC",
  "key10": "2TaY6XjdsALMBKNrcdN3QrTqissChPWjDP9SGSuJeHVgi5aWkAns3oNEZwq5VRwJxPKG3ZgeS61JVPrevxJ4ZZtH",
  "key11": "28evGgcemGLypAXf8iSMisPtKQKfMuz3zqQQcd4sDWz9YKS8A6YGCMUUNq31SGBFsNB9MZWs3SbnoLXSUKqzNGS8",
  "key12": "5Q8tsB5MEQwFuCWjhHQYKEmGgWNCHHqQa4aU5XpTwVroa9fCmrKUtMDJZiQq38ZasxWAEsZKmasb6JDz42U266q7",
  "key13": "2CU3P8bY1WJiFeiW8gSFNX1j1S1vSZfbpcYRj594s619wVXxV2vCioxJYxyMsm7DhqjT21fqXsp97YGghWwVLJq5",
  "key14": "32sADj7sdJYznsvhRSf72XGNxn7B6fuRed2vPgrmLswnfvn2T5GaqK2qGgMPKg1Cy9Lvu6Fe4J3c7qRFz8Kf1Sbg",
  "key15": "2RKKQYxSpAuJe8NWyZhim48rZbhD65A4ZcyiQ73eFQynoQy2FqEjZMx45pdkMp8XLiAcMkHAgRJ1LWbMQjP8k8gV",
  "key16": "2r3ed1HqkTzpQ2WUAEa6uZYguk6stBDXzmZhBnNXKD4Nzj7eFv3tPvyQCAcbT2PXHcj1YXKavZKAqx3EQZZ8pB15",
  "key17": "4rio8yG3ennPm2mQmEJiUeQRcyje4mpe1eCCQPMWqgx8KEYMVZgond2qo7mmeTK4sDxDByeaj1Rmx1nZMj3pCcbq",
  "key18": "4kawMT3M25ggkTdXMuMPDg6ZfAABSeZcYrRPFfHh82iibadnDgmp1REbACZbYqPjkZ9ynGCNJ7kQYYVhYChN2aLd",
  "key19": "5huAtqsktM8hnn7eoZGVNaRAUG3AktSkMobnRxAUEwvWpkE8h7WUTRgz3eF8H5vHQdMk4MSzmjUoEieEdGTFp2zZ",
  "key20": "2U3oR1PvGP8q7v6zYm5mp3uShPA2JKQ7sJii7Qc2jQ9Qu2Tjk3fRV5rN9drCpGz4uxpnz7eXb2JP3pdnEus7kYdV",
  "key21": "4mphGq7dDZ8GA8PsU5oatWQWKbNvj7PptTruGabXFT1T22DG6vCLxMmKmZSqu3H1Er5akVqeeV727PRUeGjZwmRv",
  "key22": "4DgyVPha15MpEjkZUukSgEB8t7n5f43SsRgGk8v9fQv7wH9qRnBGPn3cj3snYuwq2foZ3pY7qMiXZd5XmRZDJTFc",
  "key23": "4evD7TXx5aR4GuPTTXj6wnevQLbCqYZcMCmkZGNWBZEthkJoCQ9WzfFyhEwKJZSfkrziku4DnD8MqY1WqY5SAtyw",
  "key24": "36DoGGtXt4DcjZmMbuEjiYEHz7UiFz19eLY2mrttXwbuvdrSMhecz4p54qzTXYanTMkKaUXPa3JPM1KczjWHEQar",
  "key25": "4bTCfL6kE87A7LHKqCg85ioddXMPtHans2gmZb12113YMGxpRwyEEgZSFEzdWesm77mXcMyE5CoAMoUBXgHsjLCN",
  "key26": "418Eh5DwFGR6BMwKgR6cy2pDJ5vBM4hNTDPvyNx4hmfDJ39MANMirL2NmJptwu1MqcRq6LQfgyH2h4z9yb98dwLJ",
  "key27": "5KmZQyUhyMzVM7BeFYFgYtj2qTJ6T7amV2vDdiD6qfyiaTPUMNMmLxJLogKn5PVquiXfuzMJYbdJwZkgTmqE4aM1",
  "key28": "5HFeT8b9JCsxeuZJDCAjaiAzBkNX6MXiWhPAnuGfcGN5wK4QycFYCRE18F67aWL7TeosytvjQazx2fi4EK5CBtaP",
  "key29": "3VuhL1jAKij9L2zDvG2H6jNACVHAh7UdpNYc5w1t1bojtDNiS8Nft2yiCU6eUHDwLJe6Voks7gE2KQvf3Td5uJEp",
  "key30": "3U4sFMauxKEo65iXdKs1vKZofLVfPs8yCmxBTAMYF2KuukgPBmSh2UAubqJChmRekqSRFxpyNUG69tBKcQSAkx9S",
  "key31": "4K1r9dy8boVfYx4BuSHUqRfTBqyGCrw9wPwAVqzubmQxWL1n7RKDdRFdjeKnou7GioRnZcZLXWbA6VaNN4AsYrD9",
  "key32": "5C1NE7FMGrD7X8qghfBCW9uTZmhpucibKuy6E6zJDmcu2Gc3ew4gPBcLcZUqGnKxn4ER4TYEyDFRCCmcugdkFdHQ",
  "key33": "4hVc3J9r6RVYMFKTdMeKf8pM8ygxd5dkhsubL4U54SUhW3wcoVemqNNyw3zZzdb1H8VQky8X8YwPkyQFKwE6GYSe",
  "key34": "2Lt7SpZiPaQhr2vbewLJURHM4dUEoo9xwWMkK45dfCjDyftKMFpZUcoWhU9ZiDGVhsLheeMsQAHUTNHnAVEJP4gX",
  "key35": "NKtMfJUdCXSQbB3AkZfpoLvgZokdZbhgxgvreHABEHyf52NLmCx1qiiss6PsGnku8ZwhyDUJ4GQHmK7AtgXBJCw",
  "key36": "3BbTSMuBpJ83hcf1sz8vWw4KSfpcqKysEwdhYt8zZGAMyw5swn5UoC7iKGsrsmtfeQwyaTWHUBuL2ZLye7dtUejG",
  "key37": "5UMj5DrQiGQ4AhP2cmJXjv2yvLwNLJQkMd945JsZFLGSCAPeQrUBCNjSreHnBsEinG6XFHnNYp1MdXFyxL5gUExe",
  "key38": "5L1pL2FMedvkMScKwqQk4sAG4tHBmJTi8AMuK9dusKRiKJKnmo1ebtvhftfi4hMvnVReTby5aYC39JAP2WijSACL",
  "key39": "3g79JRc9m8v4jgksasNiKaxSvwKrNgMhasAAiryycJQuer2RSkpwpmWU1Yao9Xci3r7bfSqtZLUPvfURAZBz4rsV",
  "key40": "5UBG2URwaS6NGwxZTSEmRaKSpCksM8PCD7meYGKGDkvLVtsqu4VaTHdo3TzN7GSzsoGSngdkkezUA4jiMpCF69hi"
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
