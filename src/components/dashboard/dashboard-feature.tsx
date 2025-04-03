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
    "65aXaMBipVHhMXJmBQ33Gevoqixmct5UpoT7NBoVC66gPbfvwfBL8pXRkBjWUYJSLevtifokn4ogb38QcHAnEv1B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jjmbxUcMMYpYCTXQ3ipoZvNMyijkV3wa5w55y68eSnj8nnEVRSbwFAkxwbHnZFubChTAq8hCrBVPzKcyg7XfJF5",
  "key1": "3HkHKjAqrxVqHjBVSMaT4HnUb2fkxNnKEUBsc81xENBpAKKV45yLL2AKqvqfXFnTx2c9kXC9r8EzmCcHNtrDLJNU",
  "key2": "5f3Byrtjoxp3SNcS5tM6pyXBXvL6o6fEUCrQhhit6LjnJq83EFcJbqnCB8UjRziHx6DSoRy3SkGGQZBQoWTHHTYU",
  "key3": "4QJKX93GAkoDCJHZ3DYVZbX7CqEjVJmB2uW9yC3nhpHnptztiC4ewjcoNoW3keBdmyQGrQwiKpnTAiLnepDPhWXe",
  "key4": "3ZRDsHG1DfVaHckSkawY3ztrvv2EEiZmUWJjam7ucJ5SyCG1NDGqt9NR6wpnub8yd8BCb4ezoGhfFd3DkV1BXAVk",
  "key5": "3FEqdSNAjBfze3jq8yoPA1Ze4hKjLSEcMQP8fHG73b5MU6bGm49pyT5c7rrvL7fF6L5mTw3j8suijatwuPPnL3cR",
  "key6": "23a8fQYJoDDW9MZeQnDRRuzCNPhj2WAU1VdcNdAuBDJdQ68h27LqPqLBCiZVHCsVp67zbkZzXqWTkW4THYh94kK1",
  "key7": "XvM8x6pUKJXDnQe1wrhZGm7yMNfYXifPS9hcrkuLwGJXZxCALJuobEVrhN8CPxAe7yN6inRowNQBXFVkKiA8zpL",
  "key8": "3v326dU85wVg1JWY1m4RmmiMbQXHe2UhqkRtDZP4rkUKWBvzq6Yf6XseYuNW3YVDSEbhZQyu5cVRtf6P7F4rkVDC",
  "key9": "5MB3ovxXYyNwb63JJJ3M84qsyBP5BX1EsLCPdqT72jFZRVfcivuP6Zj57HgrEk9m3pg3HubpbxqpsMuCL4ytzdiP",
  "key10": "4GrhPSRZd54uhT5EwzVMLLu9sUnXc1CaqaUPT6ZxoA5mME3MNjKPz5dcejnhjLDuRe6tRscJKBUujmLVWnyXeZVs",
  "key11": "2i3qtsixUoc7GVkgRDAnTANpEH9cAAu9CtYv4L8XXjzV6xBxoFPgisQvD6q1seg7cDH9wwn1m4zZdpgJ5PF7W19Q",
  "key12": "4Hi3UGyPgMyS8dXvwzcuCcrzqivwM5NYwfRRZBFB8E2Quk3UP6PxDts6KBFVv3aguVFwYPtfM9R564y9vwtZ8bGe",
  "key13": "56BYSkv3sxBWDoiDtYjMMh6EYkGHAkKsiHkVakoJSv77ryRCvGHVA3DVszJEHK7vwmA4jL6kGTnToEEQVVhkE3t8",
  "key14": "3yNSEuGBx8GGztTFReaJ3PJ3JDMsM3G375BFdqJ4Xip3KtM7gQZFYJXuoZARDh4RMbTHQgShyASWhDoHVUse2ZJC",
  "key15": "5KEJhwRBHSCT8y2mNkwnZvRCEGJgfQtjtXeAQt5dLV3M8VvpNWF8yPecvv6VVhuYLgAFaVm9SyfqQtczTnhYywhL",
  "key16": "64evAdehNiShyrGzdssDcxowGgcxssZFHtYkjXovuJBx5W2U2KKQZcRa4TnQozQDJ5Qm3g3e9qDPoTvCQMJsFy7r",
  "key17": "3v9Tv8a3Q5pnW8op21yzR2XHnxGEqN4Ute1wWeiC3SJHoG6PtcS6CeBW9ZWrgM1ti46cTQmCjAULz9sWR1UT2UvX",
  "key18": "3MBWCEeKYKZTep83eUvzUTTwSYP4rwoAioyY9N1phwmrHMRHCV3hQC63Ld5Kfx2Fm7MJXT9jjgaNhimVTJdLZ1Nr",
  "key19": "5Zs7UgYfuqhRgzRc25PkHeo7JravjwYaNtS43ATvbfK5k1chcGAv6EpRuqms9yLfsL3j8dvMqRBjkHRrr8KkVwm4",
  "key20": "4J5P4zYVrhQ36uLRE8Qwe69fbgQcGXdmrs7RmBfNWguJv1mfqihP5SAsMCkssUQAuGBTaDSkdmGT6nBJ2ZqzkYE3",
  "key21": "3t1J6V6QQe8ZU6P9rTabRftoT5M152C7GXNABDik6uRJ5fiAXQ9a9rzEuJxsCU2UTLr6RFv3tZaqnkn4HK6S1hP1",
  "key22": "2m9qGjoTjAHjsRficUp3y2FTDwsC5KAWss9kZ4S7RPQTU2o87ZbsX4QBnjnLAq5Jw1no8QKEx9TukDD7MTAd7yA9",
  "key23": "3Rq4zBrVqK5F2iugpReLzgbxmntRscBBLjxZpiCogy6uqQdpJN5epENrCSDVSsMJTyd7GWdPBiE5UZWpxkiejHwp",
  "key24": "54n3znhyW5mT3SVjFq8brn1HCWabcnrYugAtV4B756naoGTt86kePxswpoATnZYRRbafdTZGodw2b5Tc27VVz7Sj",
  "key25": "4R8AUUa2WYTzep3oyGQsxdSZLxRbBGTJXvSydF8hqJZfMXdnmUjwxvLUScu5GB8rVWCpLiQPD3bB7ZgTxNvinjrK",
  "key26": "5FKcPXnLrUf15fyE4dHem14vEDeskk612u8ZVYCwFUtAd3Htpo2DoRxR1QDdENhZ2LqBb3MJiMqMvYbMpUhyzdLA",
  "key27": "4b1UQM7esyPa7KJpiZgYkC4TPtnG9vj5oeNVJAYReeY841gmy5t7t98Wi3oBhcaRZ8X5DaYmboYghSwRHqMEuqsu",
  "key28": "3yDJVkDK1sp5Yz8xw52wNWXzAvazVHZ38xjaYJ44En5JG2fAyFpW5KWfd1iK8vpgS897Kmsydggtj7s6punz3nZk",
  "key29": "KKvjwyrYM7JECcJz8axTUXu9s9bDDbKPob6xt6kkx8iTZ6BtAQ56DvGK2tkyFjNtR9nuR83K5vuZ2Syo4HR1boB",
  "key30": "yTg7ju2wUgtNYzh3d8vchCYCzhrzxxy4gDhLcrBQTzzRhTZ6tStJ11ZrYdfVacBWsAUkNaU67y1Q9HdWhAwkDcE",
  "key31": "4S9c5xm4QLzfR7bzBaThhw7RKMQ283CU3WNKQN44CWqb4ZQWw7Mvi8gmGuNpMyt43JQC3w9Kq3K6qS3aJgWGu3nF",
  "key32": "295S2YZoVtrBmvEPyyrT6eiuGk2rh8vZHy5yGBf7354s5atXJA9UaDw76XwfzieDbnCn55J1Pcz6PRtpJnvKNur5",
  "key33": "293vcnYpeDDc7WaP7Hbhvhf8socKzYnuLVCX3Kn1P9J2LLxTF5qbptq5cU5NF6ofRBFQiP9i9LZ4H7Xcgz2MKgkd",
  "key34": "2eeSt1DkuQaKKuF1m3vzt4CYN1JRa1V5u7XSeiXihwW1ok8ZTFUATmSXL85EPeVvKjdbsNwrvYcFfNaanqVzqGEh",
  "key35": "KHzE4TgyM1JkZrRcYp67qtvmqAJZLmEDvgYuJ2trmNHp1YKTFAJST8shok6otcobEHGDEJwCUXnFC5u1Kg3VYfg"
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
