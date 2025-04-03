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
    "2u2ADV9vP3NrjknW5jbTaMoqgpJmv9NYyaak3pPSCNRWwbXgpMYo9wdzqjmKqYYWMJ4k37MbKcRdcLQyuR4QWqa3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64UeLZMUG4kZ5THFVwaAA1SQTALCVn1mygGciQ5n4CWf18pVM6jRhsqkp66Pt4RTydFo4LZ5aVu7QuwQVuF9VSTG",
  "key1": "2cjj3Rq6FchGAvpLnbajWfA8TYRM5RK9QCtHf35retZUZ5wxQ8mJWtuCBTmt3NWprTrcp1uQccriLKgNnBfeoEUc",
  "key2": "3DvgTXAC7muJRcS9dXP6Djf3Nk32Ub8DFGVcKrUfVgYSGHsWu3hVLCKu1a1y8XoeuxbKSn8pjeLNQcexSSre7edx",
  "key3": "3hLmwEepCF7YY8svmWGeZaXZ2weJndDp1vcd3xxtfnhLAvWWU8DKEeQbbod9cRKEsYyELAiw3fVNYAnd2GQzehJj",
  "key4": "4pxGkaR5UARjXuXaVCnyxzF2ME53RxCCbiX9taySFCLcr7sAaPVWd4Cxwbzow7ktwsZfGnm2fKwAsJfJo6q5Y5vv",
  "key5": "3Da1cSDKUuHLXqG7FDoQZmjAfXpd7uY3yzcs4u1TgdaPffrNMuGSBhMvmA2KFFuC5P7c1ZjaKuv6HN9XebwMMRTX",
  "key6": "62d2eaCbs5T4eM6jTJeKDF7qjuwTa6caEFgjNnw1UoiHeMjMEgbVc99QTQTfh3Tjs5fFZkQ5M7GAYkQeVpgUDYSQ",
  "key7": "vPCUmLXorCYsCP8ix9fxydHPrTw3LXME3QeNx34to6UAZ41gXjcfzgfbLgsadmiWjKmesUqr233qqYF3aPovZKt",
  "key8": "4LidiXmVWvEKzFmfZ8yF7Ss81K4jPbT6jP7vqsAeQ7eih2hkbYhASwUwS2GPKrm4wrfyD5NwzUJjkB3bbSeAcK2F",
  "key9": "2m9JETELL6scYvSBQzR7TkRM24SVL16QDUR643Nz4FVm2r16boDuAQAjJ3GwwRQ7X9JVfVmzrSRhTuSAYgMJ12sJ",
  "key10": "5eXgz4bUcoEE6kngoBgQqwERrwdwGTFgveoQj7Va5fNkKLmbbCeQT4HPDtjZRYvipZdQ5q4LSGQMtVRTCdenoSq8",
  "key11": "5BLcjXNr1brzdL78WmUrCtJWNmepwDTYKhiYkH25wNPunvKa2rMrzfPETDoeqwP6GTDfSW8xqGcLSbp1WSqbAz6J",
  "key12": "3Be6RQafcT6h7ffBnuJjD5bKhpeJWPY7eLRia3MZRgVw38ZwLKSGUzGP9qfmf4245HiE5Z5Yh8fJnpBJkgK2kJeL",
  "key13": "A5NYSeMSGxEPDBBw11eiaNRXZDFcV5AjSeMsYjYpXsGt87hWqwwFLBUNZtyic6ud6tDP3oAhEySLoqiVMUqeHHz",
  "key14": "4DyVYrpVMYXeT6W6EECHEJ4SH9BQhYtvATXUdybPu7ryjgvbDssb9sJUW9Wttq87u2k3dP4oVDR844n1UHqLrmTa",
  "key15": "4Z1bpQXmXBmiRfZGWasM9sKzpEYNH1dUhvedcnMd1PiFHxPTc91u5W9m65o4c8QXftQkbBgA5Eqap1dZw9131NW4",
  "key16": "MAAKNseFZquoSw8CcPo65xCkoyHcinUs9CLGG6B7mszXCw4VL8BE8WmUZf2f8PrqPSD7kr4Xmy1QXiXqaPs7ywL",
  "key17": "3RQh9HxX1ZaU6ongQQiB4KosmxPXWnZWmgAWdzHCuReA2AysyJYYLZdAoFooBgGWgHHFdUz65W9UeJdXu9m1q6o3",
  "key18": "4BxfrDUi3H5s3L9kCijearN9rjW1GgikZEN59HNAs1r1E4SEqirBquqjhFbK6HBkLi2KwLh1bknfVHGQeuRhFDB4",
  "key19": "2XKAQFBHkWKD95DrcM16PpmWct9agj48iS7gkPG5DEa1nyQDCAU3BPqkmGvytRMzhHYV4cDSNKjbW5XCpuCjUaoY",
  "key20": "5724HYH2S1tnCQrouby5a8ovfVYishSoZZ9D9buFeL1CeJT78WGPWeKZz1eZLasGnPGsSoGbYfjp7Bt2mjqyrLW1",
  "key21": "5GzN4YE8myskkcMYt18Rqzb5FEwGEkmmhFwYLDipA9A5zMBq16cojvcz1cYGHz5tVkKrPeeZfHktHkUDuN92gh4S",
  "key22": "5C2y7YVFWLk7p6fA4K7v3u3qDcQk5J6omxrwLUuWuvF84KpeYLJD2PcgHqoQUTjfX1eaiPXBasJZ9Jw8UUf9RFna",
  "key23": "4AVV1ZdkohC1cb1R9EAALKM6cJvP5aVRPNKmYCnEBNpNrTX1GtH8HG4Kcca96bQ7zNRJDRnV7KAc3UtCXwrWYpvT",
  "key24": "iszWpGudiDWaaau1Po5LHf4UZPoL5h6QQTe4KKyh71vUDQbFgMCzWSfTUCnradjo6bFYF4CE6KwXf6N1hzwmPPP",
  "key25": "hNzJrre1fGgVwXiGudEkYCiXPBUn89YFPUXKhMmjjrv7vs7kb5JKqYRQfcycLrJD7EBWsrMSZP4rtSB7JrWswBm",
  "key26": "2vcAPf2trqkZ4yfNxvpXVVt1CHt1uAHVwnMR4eAN6q79aNgzMFc6nxsvAMUsimGh4mXcFVwa1FevPqxQTXAbzXKh",
  "key27": "42tZRZSDjR2FU2FoQnxRZvDwi2ZjxowU1sGQKzJ8UrFKBSd3hj5LtLADmQcmZ8JZ9FiM8vLy14vr9eE2EGQSpVc9",
  "key28": "2MhUYoYspX7S7mUEVr45jd5DYRSmSpVV2CF4irQPiLxNyXfxLofSHAoEiKF1EkdJ3Rdq74ksPdjE95tuPXG8tUCT",
  "key29": "2RTmqbUpUnCiMmDPgGgEoS7MkJJTZrK4uwYziFw7bycXbGoLwYVBbdQhiuxacZekQBpNPWTE38oxmn1Dn6qkcaab",
  "key30": "4J3GNJ42ybUYnhn8ctC2cPp6yrSF1LFA1GZqd5M277arqFhCdySuU4shW7ppGYre1ThYUdEYujZPJtEUv5SVM2a5"
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
