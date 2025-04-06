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
    "26B7HTVBNQQzgYZx2dHAiZENXfGtyS9UY17zSMTuaeCkbjUxGwoEjftzDtcfxvtZYxQ7aA47tsYZyxqNtZj8iwXa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QAQt48s9MD4AdBYEByhqz547y8J2Dpgm93m1PtNBs7UGBWFkfZT5525wX96NTPWKKWs8uP7jkxUpKJPDfYNTXEu",
  "key1": "4oupDNckT2V49LhfDjB14XAekJ99oLP8xRxX6L4fMCgtTg1JUUxje1bKgRnYvzyRm3iGZTm3yjNQBk179Gjbwp13",
  "key2": "2jfqU5GH53XmSVhHVjUgfYfPenaUicxDnZHRtffHrVESzWFCaRmHZe3iJtfqGLYitDNuurkHP4dCLuhENdop2JNR",
  "key3": "3XmjkkPaGHeqYBBkUMRzXuwgvN5tpAKduyrcQjT5KrTYoY672w4iicYRRYZhmsLL4tM6v6eJbD3ziu9Ec4pTy2MB",
  "key4": "54xGgurtt3FnCj38ep5bc12hDq855SnPYrHUbGHo8JzfL6m9TzEEFYXkgdG6zPjpMGj1QT5DWpZg4fBddHQSuo7L",
  "key5": "2XMLcHxAZxHfQ6mUx8HigCPDUXikGu7HBhNn1rvXDrSMfH3AzfLo8Pr7HixDs33x9e1tC8pseM4P1y7rBewDis7E",
  "key6": "483ffb562T7HywS1sc5Q84CqKeLmcvWTo9hPay5bEaKQqEasAzKLtsLsDj944q8XL2EHpMQiwsaQ6qcsRJWnGSmG",
  "key7": "28NKm3xJLN9koguvhZrdEKCxdhvM2rQtjmSVK2uvpLHb5NkQBABJLPfATz6isj3aJTFBJnVkEWiHooNQPHNdy773",
  "key8": "29GJFMquxqKLZdknnMocZmMG5RaJzUjn7LSNqqLtfcp8zQtGv9eDES1yAytpsvzEQ74Kecu13N1EBdHPxNUbjSSv",
  "key9": "51dLJrC14bJEddYNTiwuxLbCRSKvjRHjJ96pPRqg8RZUuXqyKg2JDypuok2tLieMZrCRKY5ASMAdcmNq5x8LXJL5",
  "key10": "3ysenBcUCxJhU36dmsJTZcXtTz8d9UUY2N5VWvFHYZsKWhybdTGmYbTZCvfcduduqgUXLuiWxELX9FFuACSHxGgT",
  "key11": "4a5fszJiHWPKusEwjprzMB7NDea9AH7vA79vSiXRcHzLtWAYxeZ1YAdT2umb2Rjn6nQJrC2aSSnswZumfnr3rp3G",
  "key12": "4D8Y89Loh4aZu6B3hi6xdEUhdd2FXypTMthjJyobqNnCn3yqat4v3VwLKrBjYfgKC6avdjoXTNr3B3YdSQESn6ur",
  "key13": "31HsjaZadiYrXt3v2zcLSXu95k5UXMwwSBwuUGXHJaRgfwu5v8791Up118n11sDU21m3F4pfTsHf8iEVZHHgntk6",
  "key14": "32FJzozGGvdkLtQzNXprPzg5BWtqT9DM3MhtUaY2BayT9dsTFcVTUJymeXKyMosxkUXg6zjSXPxm5ZGmFzQLfdiW",
  "key15": "3rciHHULvTM64PE99w42syTNz7v5KK5i25zJ767VXDuHTLsn6G9TVCYaYTR1PaMToxxdcoZ5SN9vbC3NPrPY1YGo",
  "key16": "2G5qaAzDj2wCu4gw29iayLXtp89kpjegwhyiyMScWkqPsYymdaR3hAvK5Fprbw7L2Wmek7EhDT3mdNy4rLbn4hv4",
  "key17": "4iQUdT5JfzZD4h4bBa45DFPCq133gAq7QNEdNofhU24NomAQTvTHgQWKC7E3t4ouTh1azv6Psf71Y2eQNyasYjmz",
  "key18": "4xs4CwuiLX15vTtozCohHsQRx3NHRiQ8uQc7LLaYBXWLFH6Ptt2nPGAGrJTY9RhcaKyNNPcFDqMMsdZNCKYmKMRW",
  "key19": "4sVY51DQ5HWaVBk7MC48gPnxe3hdR1KQpyD5DscHFyHBwz8j19FFjGS4R5Q9jaRvVLvHs5Kh5CAMbbtQ1CmcsxCH",
  "key20": "2krH8gw4Db6oUX1mPodb23Xr4pdP59j4LbWVFeofvVYUWZmnvJFmXCjgbs3JurXVwn39iqEuzyGeqdfAMjJibKLt",
  "key21": "NVqLzRXeF7LDK46sMzxiBFqmDp6ZLUsduBCmiZbhQiLwH1pe5TpXxyn2eE8FLcx2utH3axGVZHGVjA2MvrweSrY",
  "key22": "5EX29z9DouL8N9tJfAESNzEC8JLTHUG19b3acLTx7NCrvWnSTVPNmzLf1kXjGnFjhiybjhhByaFJZwakE2oqz7p3",
  "key23": "sRT7ESWeY2AVnPLU2WgityNq8fB51LMrjioKar7f8b4bKcYNnzFMfuxKx8VUgeCibuEmw2ou21q8xQnwqNzmBzQ",
  "key24": "4Tvs1kqArb77YL5hHbewznz83qMqVLE9skTgEWr7yca8aBNo6wLunaR1fVv2GLYswQZWz4sohfeSnEXrvikckdET",
  "key25": "haiHvoX1zurjVMixakFgiogBwa9yrbEtpsdU2yKAwcrSfwMK7P1RtEoBpYSZ7SPEkYowRSxFyN9KdAp9RzPSrTX",
  "key26": "6778TAyvwmhgZ8fgBuVWRYQp5ApnK5hsxYrdCTRxf2yqhLTaKm3RmidKbG8F2CP2hSoGfKhizxNjA1oVXDYkUUmV",
  "key27": "4oAZUpQsHtSP5BJ9sxnXxYs5Bbf5vXK6HCcCdA8hAkVz1S6QbiAEEcpm2dwY11CgBnV34smkMFbxJghY9jSFxyCU",
  "key28": "5cKw9RSFbsmgXgqA9yx7eyhZ67Ax5RPrZ3ffDwAdtyFC2bJEAieWDxrcTYRSeXNhcVMtRoFQr77ZoKqRDQj1F7Yp",
  "key29": "3FSFxZjfUciPXcdYcU958dBUGBTx5VYHdnZDyE26BMFFPKnCkMnhhYX3XmohrVzEdoA8V6QAccDMetfBT7jVwMmy",
  "key30": "48Tu6Pv1ktZXPziXhFzqPqt57wuWBuf4Ndq7wLKfxQqetMakGV3aWgipMw5PHfMt7HwTHP5K7USVaDKzcL2Kkbiq",
  "key31": "pp9HPniSZRj6jAu6bebAy67ZB8UC69XGrGXURZXJPAbeqLvGykwHZvuUwUQ5xS4RkxmJMVwimCq9JBYPPmSx5SH",
  "key32": "2sS8Na71EnxxHVqzdbp2rVxcfmUbMz7ck7XP5c3RQ8agirvzhLuu4whJQK8YgcGDTywRPPDZxJamJNNK51PamKqq",
  "key33": "9JXsS5eA97cM2i7pHgxccoB4wN7zHY9T8cSxtj4pcap3dxGYd8sCi6qjXKxwQRUakfsEoDqJpiJ9Aw9B4zRxEMv",
  "key34": "36DN3ikDTutvqsywRW6n91Fjbam1bn9UpE2sfR7UcSUreMsJZ7GUL1QNaNMbdBmHydADPhkDPTgbxxiaQXVUQoXR",
  "key35": "4JLUpoHRtrHvsfSACQUkX7KohN1AAF17msnbeofgaTWcn5DUW5QB39pM328rx4XEVUeXgFxDJHnDzWzbXKhozNid",
  "key36": "2K8LmUqCLZcNtsLXqVgWhcmRq2GbUjED4UU1JHqVHwpbzm6rRZbsWHU2efNTqZH5bm6wdchxeKKmA4og9j62rVvh"
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
