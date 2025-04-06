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
    "4i5bLarPrPyKYxLXAsYXNczCNxtmuug9iZcCUwV3UKJ6MuAh6mXmuPwHVBMyAoBT4zYWB1zgcJCyKjBEBCw4pr2d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62TBViR5N6GYy7irndX4ebN1C3xw4GttFjVDE8dKQ8sXdq59v5qaiDgVdku7kcUbGDdyG9fAuiheTXyUW3B6kJhz",
  "key1": "4oeJGzmDTzfQpXNeQJoP3ZbjKKyNqYyYPborB5tML9aXYa831FFxtvWxB3GesGCVnutWPzUqn7yCWp6nmm2p7ebR",
  "key2": "56Poz6Dy8yGCSULFw9gcDkw1RCkyG9TeF4xXho7aKp3GvCNQ37i5Rf5jobVbwy2iwj6PHA46KMB18tbG6efhKhrs",
  "key3": "nwRHMw12LgbMTQR7MDkEBHkoGEmENkMosyFBBi5pF9wS1R2ANTAkRj218dRt5i5MueQGQQje1SirrLwVR2fMdCT",
  "key4": "9NZgJzqF8rwuoYU2AwAvXGSN5tEyKMpb6HRcqREDs2eEAynyzYzCjWK76UXruZuJPiTFtGaY5EQAh668ztGyQBP",
  "key5": "4ee9Kt2tdXcsxhg6KH3wfRDVEnbJFdKMyvekax9GcHiBFZfNohJ1BAy3sVU9zsaK4tdU7MpancuGRgheyXGM2BEu",
  "key6": "31vAx7X1hwXiBz6egyQAXJYJvHGfXT2RJqsLPXxxXLhwbfe3iCy3aPu3SMRoyhUq2dohFY765UFjTeT4f5HjH3G7",
  "key7": "47vEjfwmo9iqHkFSTt3mgi8aYz36XvFeBrdfKMeoHgiVVd9GyTwodoXYh42sC9MnUCaxkjy8K9bfHU7DSNNok7Vg",
  "key8": "2JJSyzChwJh8rqrwrcVbhAteHUzz4nca9DRtBLEahz3BbXCampqn7G2sMkrDjSPGEo7ndMCvDjg3aiDZBv1Phxe1",
  "key9": "5XFoMmjDpKbCFWJMtktpw4uZ9rMhLQG669pBqPeykHTmKDSNKh2b8Sz4tKz4qqLDbUgNdKb6R7j8CrJxE7iJes9m",
  "key10": "3Svvs2XFv5aoZS4Kr25ZKLL37YbCtUFyjFEv86aEupVF8td4xt8ZRSVkCERNizjnG7FueK7CWSHFCXT4X7rfkN5V",
  "key11": "4YXNRm5CURNE5ZZS9LsmHEpaohgfDudRi4YXfHLoc7iqiTsaiwj7AdpbzjmAH6yb67h2wxfGbQiu2USw8gASF6mR",
  "key12": "Lizfjn5xxetuCRTFJL65u9KTwBbuH9UVmnyuFFuyFgdtdZMbmRmWvyPX9bkBTztmT6xDiTrp6xBbKaTwhCXVgLv",
  "key13": "4SPwRmiemNWc4ARvdmHYM9CFfttDXsDRu6M3NcFHu23HgW3sqNZs63UJmHVC87KTn46TCYtjy6TFVbRfa28pTuw1",
  "key14": "348t6oJUUVNB2Mt6gLsrKETdYxv8Uw2yRwnXztrBxXgeob8hcNBuWhURZgv6KobduMeg2AGBS544CUmxoG1hkkQp",
  "key15": "489VWEa9VkdouRuCNuuknrYrrmhMRs8S9jR91FShj5cHHZw2jQkwp1PCMV2ZPzLJztMDhXE3JBDJcNya6mJarKYR",
  "key16": "wQ1dQ4JrVooYcbLeux89fN8mvtEm59xSLsoVKur8H1oQWkUQHRcyy5rsU4Q65BayYTzSGSQaf3GHht7o8UB9Aqx",
  "key17": "3qbaRToBbGpZM1QNhN6aAtVmBcERpZdcsHvHa4Fv5UJ5GDBTcDDfoAyQ1UxPdTtq5S3znJ9d8hmitPGt4iAULxV5",
  "key18": "2aYGSFvi8ZfQBiCgW9AcVWFY8uJnJ1LAXsKr9nNQYoVuHtQwMoSmc1kLVrNZQiv8T4pJer34ir6Qr2Bf1X4Ez9sW",
  "key19": "5zcuXo6SbzXujhRkvMiePfbTYiiayypsYc8Ckc6U2p3Exjyiw2RZqTCwQTGoqkLF8TNTikdk5WoG8Yw75T58EU8F",
  "key20": "5jadmriii1T2zocXqrfz8fohrNyJ1vRHfmgHsKyybLEtYW2zqn8cdi2xkVoNvUPGD9mCrZ7UXi9frCtBTxGotk9G",
  "key21": "4BUuWHRVcoodYXgMNMgvEHCuy4YGoAcByb4W8K9ABMNbEwso2LLRX4xBE11jHb9subRVarRYUYEDDkEJogAAYyB3",
  "key22": "pu43Y9AnruCNKWattTJwquPLqdRCnufzLimP4tv78v9aRGH6Pa1d1EDT75vDZKpBaeu28erh1bFUEznwgML3mNg",
  "key23": "NMdGHvY5pM46Ygf9xsDVxNJ28zVh7DXt89dxMwfGDHHewb6Awqn74t9821wpPPJBuCEYLmppwTZuXYAe4iaWQ5U",
  "key24": "2GwyKtGHEM4UyxXUL3qi44DvPVmww5h9h9pgASUda3pgam3kAn2JRNJLpZqwiNXadYHWD5vUGDx36T1T5xVvBMqA",
  "key25": "3AdLoVnoFvkfHbqGU56cUdq3fkzJBrxDNemB5CthctoF6pXBjfMxmJM3ri7sQL1g1rZ1JbT62Coocni6egqNBY1V",
  "key26": "353hHb7hG78qWNE18B8fQTDA1hzXKTozrw8aGXNM4aKWJ7shfZgFLcQmoPMz9iSkUpv5224Q4uyvPV1QLsfaEMDb",
  "key27": "RadV5kWJKbTTj1WcvPyC2QTik47PAd7UCwcfXRcTwbVUngrLwdezvPkrK3CK9k5QEGCx2Av21ystKsinporZATg",
  "key28": "3yauWsWtarCH5U2y93evbveF88ZhGgCc7y18qgP7PZUSw5RcgvPrs9ResW4MLm5KWrMaUNEJNAA8mZDfLkqrkUKK",
  "key29": "44XaZu9r5yhHgNCw19mMqGQFcuhqhLNDZ49F7kiVFozs1Py5DHt54XwFg2R51DwWGBAHSK44UMmgKc32ZyfcFzQG",
  "key30": "5w1uPtJba7PkZx2zZSrctrwbFfLySPb1PPANsvSh4JFBiqMUmdaYRxyVQAAcgAfR5QQVf5eX7hWnWNMFmvfLDgPj",
  "key31": "5bMxmm92euLJca2eDTTfPfxkxfz2z4TwkA69eVQJg2hA6LDsCJPBFuY4AdFjmw45NdHHrzM8NEygQZc1BEtkXihW",
  "key32": "2s9oy92ywbJDfEJqenjgtfyaxXSYWhcPpSH2WiCQEcUj88gWNDdpkJuTJnT35TnTjw22fT2tJYKqjdvpyaZj9rsW",
  "key33": "22hB8zBjxnYnEqnZqNzKmhCpAuRn3uJjk1LwA66W9W6qNVoaronYE1LGK7Mnc4WADvdU7Ck8udDjT1nvXwig4bv5",
  "key34": "3wY5zyYzu2ZF318cm8vn6kRzVH26B4oK52Q3dQUyx4nFjzUyjswZexFrs4166P7hu9gE9TiDZyvaNxpw3RYyiPCM",
  "key35": "35i75NRFpHfG1uLyKkKUqpqaJxib8P2ZyvLWmUwvToj5DmEA2LhUkvuVhA8u37BygdNqCQurAArau4Q2XU5NJ7nn",
  "key36": "4G2sLQMAiKfYu68oDsdkDh5aqTyxDMDUwt5fzdNH1oBCmBkxcty66DZWSKRhBBTjQurvpSgQ85mQKBxfzbnJzgUg",
  "key37": "3eyXpVwpcMafVeQr7NMRdVsbRXtYQ1oi1nBvSrmVWrP4pJfLKQB1YgAGGMa7ZcYoXmpKzt73o2caggpSbJ92bGgp",
  "key38": "2YRkSiDarELrvqr8Ht8i2eMZy6UgfXSpnZzsbUzNUuqkxup7p1Su1HDZfKdgNPFxJ2FriHMvbGkmkxDacaCipipN",
  "key39": "s9KuvcDUTmLqUPNbspyndxYUNxzTG7FsyE2gBpn2iCGGG24CfvkrzS7BWTxkxtiD3Dc8pC1xXh5gs21kKvFzCxB",
  "key40": "4jWtRkCvWEqbDT3WUzJ7V2t6qQUDtDJyQYmubYM25WAnVTYU3RXAFHMcTqvBJqQoVhdKyenib8awNr7krFMrbmyX",
  "key41": "5VDVaFk2z6ewJVxVom8XM8NUmWEEbsFcdjTYn4TdCgnwg1HPTKmUya9h5LkwVbA8jFAeSTao5Gewk9vmkmcuBG34",
  "key42": "5CsMW7QnWVxgNTUG7KxC2y7LfkMnxtJfkUrx5gv5xtxGN6GNQqmBVNifpYBfaNuA22JUENQUUw84eVqxz2jdvUgW",
  "key43": "21PGe61F3U9XQo1SWGBHy3XQYfJzPxAgXEPC5RZ7jaqNC4ZKRjUXyeNWhALKLETBs2YCyATFjLCxSMVi5WKu11ho",
  "key44": "KaJbXERBLVjLodREtnF9TTe1ekdsiL4QkbT9KPetz2cSNVKaM93SUqAPJXLHr4RkwUzBeP88jn4vtaNRp26VGjV",
  "key45": "37qRRNqaNH5yLLQUkDtCFeTCySgJY18p15tVQiAfMX36MfJEu1EUtoCdcGWYaV2auqh5ZpWsh4YUSVbkJcsSAyzU",
  "key46": "44Egq9yxjvyHk4cBcMt8yvc7iczcSyzfSFfvyVkAPLEVy5gS9z72Er59zayFtHHK68FhWRY26FNwLfEF47MQbtJQ",
  "key47": "2efpqH9doKTEcW54bcD1WwGKXhJRNmEAPXDByZA8MmyNoFpGfboewqz4S12dT9qK1TM8zUbxnyAAhmKBRDjJ9Dxt",
  "key48": "PFZjJYt8siYKVTPKMWmPADaiALwuEhbJznAYSPncpfgpKVFZvy4HdSGeXimhjwxu2JJ5BMtfmMYsADBQ3EoEibX"
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
