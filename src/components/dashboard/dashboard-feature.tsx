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
    "5yep1ShSNfrunPj5ZDhoJ5Fy1PWxtbat97h6wfiwqbY8ou7VYBL4E63A7N2PVS4ufQUcSNGWWdCKB1hWCktf1WoX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YjwCVpjihze6bTunTLpM8UbG77zpK1WcvBF7LSvHPHVKwg4ktqYZ1ra4wx4y9GXdMdeAkA8cosvcSggAX4TqWB9",
  "key1": "5o737tJQiYSyc9cPML7giQFZEayWMMCzqQyPnk4BDzNWmkYW913PKrVBHY8Vge2F22TiqqP6tb5wY59e4LPirYEK",
  "key2": "2GsAB3HVajFFjT2De1QHzxQzEDSB3pMvThTLBd172on39gC7w5MqQzaCnMJ5vLsjpGRbsN3BA9NkA7iPeZfm82KY",
  "key3": "3k49tqcFNr7KYwWHrL9hM3NdPxkC62Zm9bSQN6BWDv1g8gqKB5DwFJn4Ra2pFgXDaWjbjVGinBXWKzTQ7vjNpGaz",
  "key4": "4agMRtfqfiBBnCDn5zmx1T453zm5ir8phqtnYZvuJeyV5N8wCNDcvcYXu7oGGhRc9tqqtSEgPZZy4QUApyjb6JYD",
  "key5": "4Mx77RsU1YyLi2gaUsCfgHYGSPi6EBto5rAkD2Gp5fU3wtgu7KLmwPbHu4pfSVrmLdWc1CxxoiEKGmbrZfd268pd",
  "key6": "5Prz4cDZSELCy6zqstismEDp15A73EW83EkGGfqyaBVeg5Vhv6CeTzE4x1nh8HcXn4gpfcZB3syBFVuhyUo7ixF",
  "key7": "26aBp435Bq2t3YyxMGxQNXFqZo5Uud9zdZjEqBazCXG6WVBfcG7xXjgi1cHsmcutjoNH8S5AwWBF2SsFZr1eN4df",
  "key8": "4mvHtVcHrD4DpPB1ebyyp8h9vGCWegnFrYpmVUHGpAXtQCTduKxvfUcUa6JhZA5j8Yni9jvAZ8AuFb3aeUPkQTrC",
  "key9": "4WBnYCeaAaK7KrjsbpuswAta3uQh4K1R6NknLFtje1sFo2gtHJpn8inRBCFd6vuuzApUGUeavrDXw8hj2ae4H7ZA",
  "key10": "3K6Yzuurb9rpSgRp7D9hTXpWW9d5v9WvoUoTegd1RWnPhcLugLEQvstaaU3r2amMYw5FDRM8idPRYFBAG9qp4ot5",
  "key11": "5KNqC67gBKuCUKZZLhjsVkvSnPMAsBq27uEBj762UKHcsGLg4krHDhCbCaAuKvsNyJh19TSt1wjrbVHRkcHnah58",
  "key12": "5ku76djc5RLPbijfPPq1bcgUdp53HBxZUbB9UPNA2dP7ixx5FMUMAifLG7Ac84G7DDW8qugNsFadntK92auPruQv",
  "key13": "2DA7CaG8kh3eqLs3dy5GW1LdBW9L7BhBsvPbKsLVoXzu5Ab2s56mxx6PhbUwdso8pi4j3dhDjTiypa5oTbRHANpF",
  "key14": "G4CRhQNsZtTLCjEgKTpmdeicpFYWabU66MQmiHx4m6vhhrNiAgwLEia3Xz96bTA5gANteCbKRXwgEPd4fkZ4Ks8",
  "key15": "4a4QsTVH3j8gRJyGG3TcSXwhuM62fvFgdMQRpNecBZ9o36apV7U2GmL8C76bXd5XSum9SDfUtyrudMCmJicC2bV2",
  "key16": "3ziw6SrphmohmuStvQqqR9kPEYBnmJ3K68Za5CeJgK7mvnrK3qof5uvaTPvAJcQdJdg68UBYuPTK3FY6uDU9riFG",
  "key17": "2NTsrJfBjCTD4sMeMrgJdfwm9KLeYifvw87FxDwBEs8B59vzaT4yo8WDecFhvPH7mhYZT5ZyucMjU9yK4jZKrBrd",
  "key18": "4y54t4gTt5J3mGRRjaEHpUATgWcLKh22ebo4naKqQv2jPHvEmRTyacP9NyaqSYwFWmAWoAfTmxVfnhRmtCxaLuEK",
  "key19": "2u462SDYPLHHknyUzgBbYxJ2eFbTEUuKWGUXwthuhYtPaJmQJ5PvyCrypg5Cyz8gWsSzq1yVxiCvgt4eFDevS2Us",
  "key20": "9UnVe1TyQ82mFNjsseoS7gW8kbk7S1swWU5axd7iqQs1bxsLLpRziypS2FtWQA9oGnSPLLDM9Tp9gPXB4UaV3bG",
  "key21": "5RNLmQS4UNiB2MXH7T16V6XzbaPk95BZc4GJLbfgYiNWVJRBCTNb47WtjwA5LbEDeLdCAR9koXideBSfqTMFjbMz",
  "key22": "5EkRTz4Z32EYdtce1CorFpeb9cXNNpKuJPyWHT2M4rSD6eTgVHmqupxHdAvT4wBDWw1aig8gesPp9FY5ZgawPau9",
  "key23": "5hrSjwHdtjegNpTmzGPrjtZ49BuFujmSE9vprBaYiPjZK3wwwRAdRDxHfMoJtTasVbkUsLFwDC4Q9Uy8FFavtfik",
  "key24": "3BL3JDjjMmVY1ybcYMChaQLHVSi1k7cYL7AUwjCRraHmAAHraJWF7GkEiQ7pMWhJi1qpKcvBNFJyAXTcU5yra9kh",
  "key25": "owChEVixsNbozkBEbEUMa7ZPxKRBdTpVYC9iGL4cBsWwndWBcx78QbaD72ins71EUqY47ps1L1uxbXTNab4FUtJ",
  "key26": "3NEG2Eb61GaR9Z4MySUpg9vJvusdzazMXBcHztsEYN7CCLnAz4AR6pq6yhrz6FARxACPVL22jEPmxP1nfxPuupVG",
  "key27": "4y7RFQuWVvnjKVMLYJnkdd6EAwCvawHEbEGQQpUhuTGRJbWzBc3e1PPb934qEXYYRcdumRB9cdp9CXzTy79qJxrJ",
  "key28": "2yso2wpHnEh39KUr7ovZDFmhjR19jiKiZzHqh41rbxYPFW6bZU8vMvCyWFXws4gNPaNDWDzMUHv9HwqsUeMfDLLv",
  "key29": "3uz8Mkh2mkQUGYoMPNwzGXU9qwGE8qighnhocQaEXb41vfA1PDUdm225bzQVDQ5iFz7ERtZAjz5LtUWQMgBjVNgv",
  "key30": "4roVj3Ym8uWbywVjvYH9ntBHMC6CvFQQyoDgCPX7624HrU1uxUKsH4NrbyWny2XFFQB8TtUL1n8FCTdrMRSY3kPE",
  "key31": "65bKY4HDsGYbmDJqCreGamdcRjoAFM9CN9bkZX71X8ZLT6ZwTaha1Z4tWACeofS3kTvkrBqinnrY94PMrjAJPYej",
  "key32": "4P4X8zgVeM3T35berC82B4tnTRKAvHYz6y34bWXYq9TZarfxDECLAnzUJpAVktVpwK3xqsSte2H1jLJ6Gbb3qZjW",
  "key33": "3EE27FyGBT8agKouEvD4akx5Ncqcwx7bBFoPnD6XSpbF7hidzwForvzAa9TSwDbSWAMN6xbp3fSxAVakzXJ8haxe",
  "key34": "2Q55ZUXXbrbEd3AkzH9PoULTVFwVFd56gwXhENbpX92TXtEhwNBK2paonRRJa39NXad5xidTW6M7ZUNKD7rKDQtT",
  "key35": "5HmgdgWinTFn53o6C29BqrHehioBuSSiwTeyug8u113cps8QtRxm3UR3jbhvBpPi8JDLkyNVf2P794THfQo3eTLV",
  "key36": "2eHxw9nfxaqxyuhfckxQFcP7tcV37KrTvQKzXbntqEthfG9E8XqRPBgMBwMew8QeBbKS5WZteatbzyHsjKwkFVSG",
  "key37": "5B7LcnuDQyurTTW35ckbnvWBhVi9cTYe8akM6oviQbSSQ9JFZ1PzsbvWmbdWCsAKsgDfddMiNGH9uWbSLvj5adSY",
  "key38": "3N3JV2zLZjs6GdsEFH74irN6epe8xJMWk5Q8SfHbt2xHvbar7axf7i4cScwqpJmna24iRoUsorp3JApYrZQwEhxr",
  "key39": "4EdBeGQMxFKAEgaQmfLSyjwHUyKHmBP8tAom66jszobSWvdZgcbCExpZQnYCHXvqpCvgvmU6dTK5ACbUyTDooTZ3",
  "key40": "my9yGvFMuvBLESoo7aX9jrYzTxn92UCkVZntDkpwUpuD2EpF7uXQY9zDQMXMTKVnvzsN35RBBBRVT95NDrsWVWc",
  "key41": "4Qegb1zWbxEd6gem5xXoKhFykVkuSvZftLwe9nXvBtf5wyUnA9BVXdqMZW4bHLkCvD8djpSs3Lfx9LwwyQy1hkAN",
  "key42": "4fPvtzhUMGF8TSQ7RrxYzopU2jrXX1P5zBMtpsb65aKrAu8MutodKq7gE5FG1E9DRx2c33ov34rvrBD3Ct1Bsk4d",
  "key43": "2h5Yd7XEhqWaqzEj6Pjhtwy33h74rCsmPVqU9Z5nRtEBz489AQUHhMRQiSSUeEFyA6TJQB98okD8S1j7V2a5a9q1"
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
