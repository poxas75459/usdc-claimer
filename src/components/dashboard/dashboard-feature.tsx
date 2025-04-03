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
    "5DJTs8hKnTLTHtCn9dDSLxgL9iEVKTSiDjTNRs4aw33Z65BcccGZocoaMKjdbdPaPshXFJXyZ1fysSXy2ZYXR94S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "523PGk1iNFEpvxe9nLRGQYyTGvsfjDodvfotD1ZxhNRFUVkFf5RoN4rjxa2xgE9hCowgGjKsRiLAd2ajE4AgP47Q",
  "key1": "3rHu5o94ErPc912Fe2s6cy7bqhcyCNcWcwW7CFtBGRGNYiY2jyAYUsBwAcmMdNUyj4CvpEUYSTaSSCQNNL1euVw1",
  "key2": "jYg4aFa73EpJrbVttgtiWpmcpf9nEYHbzqcviJS9P22NN1kkpQRUD7ZcB9VnNaWEWvCaz5PHqdYA3iUKizJ4ktX",
  "key3": "fkZN6YzU4U1of78RhXNF3NoyQ1RYXzZakV3DrHkMvDF5wP43ncV1AN8YuaXYHptv8vAB1QUMgDaCKDS1tW1P9NV",
  "key4": "3bK7SBb3sDSzMxpdx7BYkdPfiKHf9EbvjUafu7TGSp4iWTqKVZ7VjpDD93jQghcrz74sewPjfHwWsESNtvjXJddZ",
  "key5": "3oWBZHB9K8zkdYnRJeKpGty4vVXVYhXHuMEizhQyLan8FM5FSqzpoJ9bh5G8o1MvTXbgAhYHNxy6R3Ty8ZHYAYK",
  "key6": "4q34iTcJTTRghMsPHNttAxAi212qM5BTE22obd3fnBGJ8NABe7ZTGgRkw3sMWy9ahaWby9WrjKGoNhdCBxKAGyrP",
  "key7": "VTh3LattWP7xz8nhyFexVv63AwF1Cw9b5GThu5hmj4KwXfskADxnsAtUKDVS1ZeDZXeCV4YTxW2HLnxfh96XyVR",
  "key8": "K1buTTkaMBQcQH4JKY31gJHVvbacbSpP1C25CKq7SwNaTjGLgRjp3XtKjyetwHE5XCEATqEgPXTQnxCiZrdKd8m",
  "key9": "35BTMYpTecs2mmtHvs4mNJQav3zbncyNcVvGSUxNiYQHaHtob7NsPnmDBkjUNXskzbKnfYrH18C9aKa5yAqrgsu",
  "key10": "2NyPXDSnTATBBbfi3Z4gVc6VhqcbeWTSFR1cC2Mf5jkiFrPejBRxspCzVrdcB4zZaXAo6kjXo5cDYkW5VG4zgsVW",
  "key11": "yAUi171L9ahUYnb92t71FjzJ1KUerygWdCjc6PRrJjnEW8r1HzUohBzE9Noc4Q3SqQPu6uHg2q5t46Wy1rq3MA3",
  "key12": "5tey8AM6RsLbFPiNm45bnk4nevftnr5ppVkqAQjREFMAuinJVoBhZXChKNgQZ1PJhuH6FUqh7iRjLPktRRWhdaHu",
  "key13": "iZC76pF28MUe8ZimKT2o4WUo2QShfNjQQwDDaG5Q4U5HqBdHa6UWrj5tobbtcNb7iTAcotb2y36EptQ9d6sJ4yX",
  "key14": "5RDDhgTiiqqkQoEJeUgMsSWYq4wuoX8TSJSy7Dx7kw75hTmmQkKRvzstHjisYmZhx8MkmabMx2pa2oTiW7rMX8En",
  "key15": "278H6g63VRHBZBZ2eeVUKTbM3wGKwbWsWVm2gUpQEAPJB5viG7Zs7JwyYkfw9wu3qUaPNhcExidduSGJ5NUYAk6P",
  "key16": "4PxQSdSNrKRXPw8CmVzvXZvY2Z9mQ7X95UvhQTkY1Hox4BNsH2yh7vJSfEYbwQECrQTqz3hiJdWLw7xCFeR1YzLt",
  "key17": "5os3P5Eezcre6VrytfyMAoWJ3ZBCDWwWTbFS1CHVs46R7eDLo6rqcmYhc5KcW7Wuu4nwNaWsu5UEwcMwv1aGRRKX",
  "key18": "5MrVRtqbiD6rUokzxxvuVRSeg5RYHsP2g6hjy1mMcVXLBeaEqPLucwhzScpgpxxaKUe5kbXsXaqGuWZMixQnXrWc",
  "key19": "5iDEKgrtznRn7VFJ5PFUDGUzTXyrehvVGkQ7GVbhkmHBtxD9kqfeGtnEywRLzu4GXSpEDXCgZMfutVTWT88Xvmq8",
  "key20": "3RoKPvK3DVyfJWEpxug1tPH57YXMQUWECLYuT7EfG5p95nQhMSCntp4kujtLefPDyghurqbN2biv8jsFXpUwDhmm",
  "key21": "9rcxjTPkBwkPNuDNLHMQjFXwDpgwxt4YW8893FArMRGPgX2xxY6ZRgwXxs8JPLGufWqDugM1CeRvRpfadCeFfdM",
  "key22": "2sDrNm86kT7wpWg36XAZ4aMUDEpkmqsGRN4z75cHU6DwGwtk9yyXPqGPeff73sAHSvMf7deek7y8HrcRrW9x2ixj",
  "key23": "4vyZNQ3KqooCpmDjw5S8X7chGtMsCBYFeKhchzLEGBY9wVfu1uf4aTmu1jULgtXgoa7bn2km3YnfRe961d5brRUU",
  "key24": "JHbc8KnsNYWzCo9Y3EpLsFXWm7DZbPJZT6A9AHeWjDR7EK7D4pg6dLcPu4UXjRigxJumAiD2hJyY9eTX1uaJNsE",
  "key25": "2JRLXUgVRMsCWKegb1vUFYAwGfsNzwpy2A1u5VXTT2k476Q7oKVVHQhXA583HoVfDThnrXRoZc3FvaYxpMRPMfF6",
  "key26": "2tk4Cf7UhVW3rEKafKHcU98oaJFdR1XsDPqL4kJyWHR7W4ddsTaMrQkFzGfKCwwXfypnbpPo6j4eV5zhNAoCtkiq",
  "key27": "3H7debPe6QJnHAhH746iJEo5rX45azuou7ApXPcTkRBaJT4Rt1ufQyUSmqpWThYCBE2uMpWqEJFv2GQ1tmnFE1Re",
  "key28": "2TLmA9MTrAMTBaJShnWum4L1hwa6oQqYSgJHyKYvEZBHjmPxZw6kj6DwYcVPqqDvpXudgoK97hYcFsuovstezB76",
  "key29": "4JNG3g66LSL4P58AtNWhEefpbjT5bgTyg9dRJiM4rGHUaQDCZEaHx3x9GbU3zLeXKnpzT1FdgfnbKrFGmTgXk1RE",
  "key30": "4ZBzXYUHHVqy3AHwJCc16EHUsBonYZ9rARc9DWH7FWKYVpnQ3qjUEGoSU7kWzhdwL861QAiWNYPiu23iNg85L36K",
  "key31": "Hj8BhxWgcDJUBqJ28RsqBgDBKu312J1KJDn1nNaeWM66tDqLSamLuf1CEJHR6paJjXPiCnjnWVkpWCjaHGEnSTH",
  "key32": "5iVGFipQwJCZPZ3rf6CuzFWGgApXQojDGb3A64vhDnVAAySk9P1NWYBBykVFBjkJXzsERDA9qi9JikLigae2qpcu"
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
