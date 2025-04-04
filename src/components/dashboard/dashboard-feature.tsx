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
    "5v5MAvcbc5426TzhKF32U2MjdvoUT3RRivfqkpyLwpd5ug65fHNiQ5LgDUNPECAFD5yfkL7tF5WyKBvQfzCEVqv1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oGFrWjDp1sweeoLhx1cepvywzinghGFomydYDh6wFBzYHbYQU3vQ77kYrENKnwfXZS9QgEZrX2mJRxsJXvGfLw7",
  "key1": "3XJ23cZ6p4szcqfKTcciow8qvVTeomfVJnyf1QVWPdxSgLKe4YTYNtz8isDxZ1wQQcTiYVkeLYatASX8Tc2dfdHp",
  "key2": "4KrbWCdTkbcbyv5BQ6dgLQFgZkg6N7SiDGzHJbuC8ANnrXQW5ycxnuafNidYuhqrDGxVyQBpsHiaRtX63QaTWQSL",
  "key3": "2KFCGrca8Ck24yaiHxqVpiRVoLZUXMrAkU1K8jdtM8ehuiahypHtL2HfASjJNTBxJhETcdLiaMHcJoLhsF1BLvNW",
  "key4": "4yiaSH9kE3A5uHNp6VnHkdGgtRJTrPvJ6YbiQPzkHfnmrFuXYNdQYCh2QZSwFt4TzVSRcZxYa8MJ4H2ZKeM7DGNK",
  "key5": "2TzBJ6ucCHS8TX7vUejnaRhqf2THN4ysDCBFGggZTbeDr11eGyEX7Bi88KVpxaghdUJ9DvTMEEun4qLw9ZA8N9kB",
  "key6": "3DxpFTg6dG81AT1grwW3eFeMLAU5svMXkzJRVS8C8QHnMpXomyBmF96eMwT4qBup3ac3ny9jsB3WCq2guLG1i1YA",
  "key7": "47FuqW7s6v4qvZAdhE2U82MeaWshPJs92okeF1yVa8PzeZwFY2MiHshMK126d57LyDFxUk6zwUKNpejA93w1fnY1",
  "key8": "5sS1tigRjUGD4ekJ32Bq9SanNjpn4Q8Z3u66mETViFtCxjHzGnLAfDrxZxBCNTGNSxVdAxaJ1svRsodDXKiSTs4V",
  "key9": "2HujMsYQtMMXQseb5b9fgJS9KygtmTCT6oeXKsPYBMk6V9bDBt429r6Zcb7fqZSxSLCwzBViWLXTU6a3AmfFgYmc",
  "key10": "4H5jyoouAd8dFv7U7sv98ZNV8CmTPH2PVeHMPQoPMkKwyNFDHpqHYGafZQBMnusWnN8qbJFnZWQ1ze5fyRejk4LY",
  "key11": "WMaY6ANqKnV5ScVzCBeMyYjNj8pW44B9BJzSdga7QoEv4suNvZabcDurJL3fGY6kjHTrKberRnHtNndjDS5wmKT",
  "key12": "2LQE8HcgLut2doNVjAQ65vbvdF2Fyon9WHSaVP6MwUytQqhGNx7tjNS5XsoVuECapoUSVJhZG8DiaUmuz6LthDqB",
  "key13": "3CeEf2WeHYFnNSvxuoSzicd5dxvF8MG1WBD91YjEYvgTE9JzY4dNNcvTAvPwNej97JdadWhSGoDhaEEzYKRJsjJU",
  "key14": "2eMNrywBc38ErB1W15YYwtuuAbP6oav45nDt8rvfCtBvd386K51BRHUbC2yKdj3xHZXP1oYxv4FqTUX1mUJPTHH9",
  "key15": "zbTx8XMBhAeda3Cexzm6jcbbsucoSizT3qaRb45KUwKzJNkAMwJJFPdBd2bWSLA9c3mF5TmnReLNkk7CA7c3rwW",
  "key16": "HQBkqgxLTNWhzpg9k8m95AR3StjQ9uYosffLvPz1fLezCMA8BYY6gNpgsTF1tnCoCHmreLHbZkhbBx95VzF7Zs8",
  "key17": "5h8cASxKJLUg9eHH66cz5m6ZpeZfVXtQKHrvjN6Mtz9rWiFVYNiwJbdgnzZFKyYR9ftqqxeoTB8Y37NVcKM4pQhh",
  "key18": "23fuimSc8G4hAmTqVoUMNbSsnPjaUD4Y2DsRf8qGFFVb1RPAZDpSPdWEHvbSftzeXq9adfRGnAym3ni7Hto5nBP3",
  "key19": "2k1MiNQ97kFAcWP34HnRaWg9Sv6Vr6WKNCT1uKCwKFtA7diu41AQtemyxdVTrVABg6sk4n2CUs6wTbuwVkicFmZH",
  "key20": "26ReAiwU7enRJbh4ynwiQZB6TUc96UrKtGoMJM37ehfFcxvYGqynRLbJHWN1eeTc8NJsLinGPdDnKwWQBUABhExp",
  "key21": "3MMtbZSku8App9KvKatERnADZNxT174uKw6dyQbNjyQbopEpt3hn6Vz81pHeuyTRoDRLpPnki726uqcZce6N2kDM",
  "key22": "594yGuVGJAFZ8nELJAaTHYKHqMeujJdo7V1aiGHYDTp4wrLg6g7goBq7TqrmibRrYLur8TMqYEz66z6rdRen6yC8",
  "key23": "5G14ggiqgRJwvq4z6DsWpWKdH8Vbxbgw8qvwjp1xk3w8kGvePEt5M2hmdcDckRuLumbLBUx9Zj3jS6DqN7b9YUVE",
  "key24": "4n4CM3NqzrDzNimzjzgQhmasqmxiTuGxjakETw2vDU9QcjUwjJY5H2naNctu6D4hPEsP9zndJbJTrk5XfwjKcYh9",
  "key25": "2Az3yJaF8gJNQ692rMKgj1TRfZxX4e2RgYUUspZ3LcryfqhojgmYju725Vnxwa4SJszRzHGbTbPNUcRc14XkPRa2",
  "key26": "m5kwUxrxGf23NASjAkHLvdVsYWp1z4JWxsSqCyNCqkQiTwZzs85qjTaLV6jSu34fSjSW68sCfkvvkfTQ575Nmgi",
  "key27": "MiZonftRMJoEB2EJxFvnoGPMNUy3k1Wr1kpzuGEY7dfsX4UDHDQkYUJQMFcMUMkD9AEFsAyHVALqAs8hzo5Ut1G",
  "key28": "RwcUXPwTLtWrBQGS4m1TqtodVR9JQjJSjAjgsxkN8Sn5xPyVfout6QtJUgk3RtZdmP3cHLYhqkAwTv5EdHKU9Zr",
  "key29": "4Ljqnb1uMkTK1BUcVguFe4u5BsuYA6Ukdquj9A6vhuLByWqjqqTAzmSta1MSAAhAAoBqxrDFTZmD9bVmYBnfPN2d",
  "key30": "ZJQc8PrfMr9sVFhPuhZQPY8FAEtG2CzZBMDJTUtuVBYNxaTur6NZCguEN3ENCodGCqunwgkUDTLZ9s2jmMxQd4o",
  "key31": "3dFbqzyFb3wDFsJSUUQWiZEp5Rtb33B5UFrqpqZvkpgYKMVVCHCMqJDFKStEbae1NkWbvqKU4WXwvFHhVcnNpBwa",
  "key32": "5kKtKKrk9he6iZSTDNraPfG5GJx6ja26Ww6kBKeBXj6EioBC8PNhhUYg71ASzvARNpjpSnPC9hD9nCiBE7RdWfgi",
  "key33": "5rmfAmsjp1SQGciweU7eeVZT5XW9cGS3mAU7goTYjMATLHGoPgha9JA77TYTQ8joeU2p2ohJuqzS6XFQtZjGXTNe",
  "key34": "MjhxagWT3AiJL55QmZ2gXD3oJYnmzHmfwLycMrJZcpLdNsJgCKaS2PcBJocQLaQcSmTSNFseGAtkPW459Ss82s7",
  "key35": "5dYixjrFuGnhH7EKkU656EjR4SZhZHWc4xNNS2YqszPex9Qegtc7zCT8FQpAFLU9VpETZXEWAfBkse2pgdyCYhZt"
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
