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
    "p347ye18kWPVUoe3Tk1AQfUiSZ8ivyQxWU4GPxdZppEiWByhFE8EdyKVmHzGWk3RUnSq9713AQyQgWqnitPmj1S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tPwR1jmhW5w8RPK7vnRkrQCZC374xwaLFXcVLro6MGS6PYVM24uCb1GFShagMa3XPiikExWJSWBHCovuskSEnEe",
  "key1": "3yobnQCRXxGYtUNnTXtVY5CPz8B3jMjj2BhSDSnf5wi4Kbx4mMkjR1rpgEqYMZdmq1asLrFTS7WHEd8RX3qVwNFv",
  "key2": "2yu2K5tSk87x7Sw1SpHaQuTiDeZfd1kFRxFpPStK1Q4pVwhvukmCNVTpmeEf6bz2mFiTzdMnHngkqoYt6neRcGyo",
  "key3": "3Yz97szsTrurX6xWjyrfJfFX9V6M9x1tUpUULSTH6btSc5oWGGPfga3Ta14tn3EyfacPRraeXwhZXNWxe7SPTgJp",
  "key4": "3mnErtp2YU9nnjNPhirGCgj6hP27Fn1JWQSCPFYXZBKUf7SEsitXp7mtYZKoV8fyCWeWFf4Qc3JN7YMzVJvJ9jkU",
  "key5": "31mzQW5RLQRWYQMZWs6kLJDScTLB4ZkJ7rAsDLwpQgbiTapetB2jR73EnJycNCtMMQ8fkAXJChsmihJGDSzMnsNw",
  "key6": "2KEMWocSk14L86DUo8hzSxDsjLtkygch7ZmyPdedhRTparBFyy2smFxTx37xbkkpToEDK8ZQcRjcu2M61nzdHnqa",
  "key7": "5d4oyCmwuwuPAYdX3WPnLFk5AF2d9LupCz4Sog8so93WhURaq9hEUZF7UUyHZ5Qm84hPxvjZLLbxFThnWhYjWxim",
  "key8": "3aNrztaukgaNkrzqbkq69otEvzvTzfnR9gKP8dfZcYCNSESvYLsoQpiayck51iGCNyCQiBTbudQif5TMyr2i6dDg",
  "key9": "cQxhP6kujSq9x8NKx8riuxhuEuz1YAxruDEJSduoddqdk2jf6YoJUFSB1zZLHY2YLKXWGn7SKZueXQHF4Bm5yie",
  "key10": "3DbgFrm6dSR5ek8ivwqmyHZXSRw1oAJhqRRhhDXCVtrneQD7k7BoXTajbJkedYkxDHByfqJxCo69JxqLBkt6VJiC",
  "key11": "XwUFgo7nBxYAni7Zv9RgV4b6VhMKjS4Vs69yJrj8ZQqWPZ7KyFVF6HueeHxuefEPsF2j5o1jYmSicghae4fAKdi",
  "key12": "5FqSXyGJhsuATWWJZvtRARuvK8xsPStQmQXjji2uhn5P1c7EbzBgxdKn1t9suvXLoJiEKEzPRcmpmHCuTop415cQ",
  "key13": "5SETpv19M83tvedEuMPDigLKxiSLSyd3aEERmPkTADLPCtcXfAuQRxgobVVJ2WGmaNLSAvJDxCwXWFEEw29PWzcH",
  "key14": "7L8rcZjvH5BodRuCbaDHSDTK4gwTNHq4SF2uKyibyPdhE3GTb9kKYhnSFSJukkRRzihWW1fyW6pvrZ9qTNboQQ5",
  "key15": "3K4vg5ac25bHSvGhcLD2FTVpAGcHuWBPCPi7rBZuKTFbkecUp3z9aqPe48cbkp2tPfBYo1MraCJhypXWWKitnHtY",
  "key16": "vWLEHdzEZW3dxJQr7fLGdZQNjwAwCYWFbGDF5xztnBL6CPyaDUJsUVaQVPd7VDqxJTebMBr6Fnz3nZLV1p8aPm2",
  "key17": "5ccvQ2sxY19AnW8DaXLyAPz7R1F8boggCFqdDqHJehYURNzfKJ7mNNKjywefgwro5yWus4jZPpzrzWoea8FgtTti",
  "key18": "He5An25aaMXMWnVWFSEqQ5JDCg6U9HDaNmKihmTDr3fjgiciJ4Aa7LUErJo5U5nNV2ppB84c5BeLPpdPTcx8wQt",
  "key19": "MBmKPdq35FDhH7zzLk93Jzmy8bC9AyhvYezs1enEhqK33PF3sNcH5oHvT8fRYSmCSBNe1GazSrxRkrmaFak3PRx",
  "key20": "5QByVtL6rhWa6nGv8KtYbgJWqtSHs6FdLo6wbeQ8RHebybFGbKH5WFmFmvUhn7qUvg8B44EX5bjp5PcjZBxcTmGz",
  "key21": "4K8K3cdMp2Hb6vdcwVaA241eYrN1QttG5qZ1aYrwdx8bhWkvQwrqpuEWWVHDTj7H3mSKHhUuhSz24KmUHJeibyX1",
  "key22": "2CmHaQ4pSa45xFvBymfnKvenFsGPGwwdoGJ4K6tsh9UPv9q2xCLWWTdaAoy4ip93BDjMgBMiYxoiDV8NhasedAZ9",
  "key23": "5sYCEEcRGfgwVQRvativz5Whk4uFFmUTHGxLv73vNkPZHcRDoUMnA22yLVw8hi1NAGY4KQgLRhiHFTwQbV6wqu66",
  "key24": "4GRtLAFgZ3viFgaGpg5p74WwPEacMLD9V3hwRdscnv5df7PJtFqWXLvNnM1mVmFUAsUscMidygcpKsBcf46JFwmp",
  "key25": "45hJiLfQr4D1TLtfMbaUZQugTvgfAKCEyNaQ8VS5sNxP2PCN1AQYCL7Wp6ySdfiNESXwz2KXYZMwVcp3sVgnEMsL",
  "key26": "2L5ZH9v3Zmk3dY5HTDC6qvyiH5FEbcohnotftSsAZi1TKs8atsgDUtzVfUCZyH5LCEvy6Gnhk5L9mW1YJc3pVKTv",
  "key27": "5F1FAvmUPWxpEHCD1eZRaJovLYXez8p1q8GWXYnhxND3em51nQxJbvvuN7uNz1iWQmz2yaeVExqBCQxb6KQDST23",
  "key28": "mM2rAWeRpemszsEjaE2m9aF71eWPNt9fBRWCyGRG8FB9A1CmaSe9TbWxRPq3efyNfuo7ZW54pNGF4m3R312c5UF",
  "key29": "5VERMbgWiPeVGNY1rrvSqqQTrtSkWk3eNuPugM1PDsa7ivdPumpqMrCCV4d9v364GXPFN2FrwoUw5DQXqJYuy6A9",
  "key30": "21qDZtecFrA5gorEegH8RfNewDok8NXtib8V9rRQxh6mZsaiXQPobSSgeAE1xhoks7q3pBEf4kPUniUpLvcV7F7e",
  "key31": "4w3SWFVsrZJT566AQAPFo3jXoEXJ1VqGftGg5EsG3tkiTofpw4mXqqAyReuKm5pjGV1hiJtnpvt8zkAJ1bSg89n3",
  "key32": "2hnGoi7SmmczAmeupjyKapFqXgX9Yd2BX5n6PBSsrcHXqPZqY8dvWBdKJ3oWU2bKKLHfFrfEbuzEnvXzFLSMXnws",
  "key33": "2MaaNnC6PDdejaYAdWkbwdeaHZ1ydZLFAU15v1Hxvfe3XgXdYu8uuHygQV3he6PGbGSoyuN7W9kmFqYLvVw1AM8f",
  "key34": "2cffnyK4Ur4NA1gQA9xB6nPjFPerk9PDYmpGcyZFVmwqDd5MWUZh6dq1dEU7wgXkATabKD6wzYRoZAngVJyvc8SM",
  "key35": "35iD6LUKJgARQX7fBmBFEgZN4JWaLWDwPMJ4keyp2mXZkPfUfiXXWqrvHxKG8nb3iCTPKfwochUbNt5kg9puNuYx",
  "key36": "q219VjUU89KVM38GC5GYpJquBbohCjezy5LShJ4uWECHBRpz5utgkwrPVA2wckX5GjnSALqso6sye8iZB3mrBvH",
  "key37": "2GqYHn8z3cqfxDcZwZLfv85k8VD1QdCjTBVtAqjpgnfJ1HonRVBtcb7W9eZJG62eByreKUjZDQKvsiN7G5fGZGWH",
  "key38": "3hAvovG51BhDPbSq9jKfQRAYQAmhNs7rR6VePK8s1eLLkDYZV9kxkN3Yp7Fd5zmNH8cfwxpcj1WywKBD783eZE4o",
  "key39": "3RikXwkUck5CpMkfTWPV3NokzRGKiE4xyzm6uJppdbZdpLxwVU7r1NzXizuMMzhgPqGU4MUNNU97nypkoCrtpTvt",
  "key40": "5GzehhwGTTGTb6xYNFJn35YTP4wUdPHbPvQvaJW9hQX4gJzZS41ww4Edwv9TpXAeTCGLS6eJ6Py7LwmEKzWLocu7"
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
