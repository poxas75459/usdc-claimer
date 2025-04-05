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
    "xKzteoLKrfuyeXirQ75sZ779cVwnmTdSGcKwfzXCdLp36kqbRsmcgDC7SpSVou3Q6DHkV17KEHgBnCUwB1kKTvZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wWX6mQwbAQNkj21UEZaYn8o1vVq3GnQqf5VNVaJcLxBgMBmeeBKzEQvJMfx4LXzrm836hS2W2fBSeCrzCp3sfcf",
  "key1": "SW6uYKR3AuRJgdn2CNBXGiGmxvNeidVM3npXEDqfVGtpszvBfxYiahpsKtaXbu4nVLcbq2p2GDtTDrzSw1EEKf7",
  "key2": "3TP5Mw8hESFDApNQJ661KcUa5S4sNXKFMfWzGfevszWmWzSWoYDWEAwF7j3SVjkHgQkexUybdio5KhhoQozs4tsA",
  "key3": "4Ncg6SQj2Q3gDmHBq1RSFnDKygVsmouwo4zxJoDSKbtnpBzu578217fjnWYpdDZnUTqbDsMiMJC7prJ1hzUMBXHk",
  "key4": "54UMzR2NvDEzLaAo6gBYG2sszEVR6jgsFpwKGz75WBGcUEpem4UCqDA5Z7s2UFbQ4eQEt9vHjtmYwyDvcyp5QFb1",
  "key5": "4nwYqD1jnHzE2oaeH4XKk67RN988RDz6y7JzpRFLvLceac5aW5aLuRHQUZydV8sKKqquXchnLHogcdaxBYbwqJEf",
  "key6": "2Cp6jrK5nRAJNdKSKoWcMUHHy1zVavtVXZ6qAnTqeJCeSFuZUHgXBPhBUrnZ7v4JRTNWMoJNKpmFPa52Zx9tDNCY",
  "key7": "5Qakmz3v5d5BeQF6e9roLJKn7nfyTnrKJscqDdbkw4MVUjKFcvFFWXr7DT4go8DfU2VTkJXqwo8JA8wa6fqy4apo",
  "key8": "3aAvBz9bvL1RoBaQvSBUNmd9ehiT3kBfCPAppYV42xcGa4rfnqMrTNNmgZYKPoM934uYjiz4gtcqqCmBwHhLs4Vp",
  "key9": "2VGHps52Zso3zoLYVWb9PKv4FX6hTpxdxbH4cqmbFxkYm5YJj45kwhAdotdicXJokMjBUFNniXibzr5P9yNxqZSE",
  "key10": "3FaR8EBASVER949hJkKu2M6Z8KUdg9fAbLVV6aFjgAsjLhPiuSo8UB9gqMg8TaouNKTKpe3qanBeZBsuWwAwhnuj",
  "key11": "3Xy2uQZY2akonSaocZ6VQs3UaJm7sJ1o4WkcVH5tipbLrxkcfAL3fJ7myULQdxZzCvKY4LGBM4BQ2L2EirXUuS7s",
  "key12": "6jKD5eKCv1YgsSjKnMG9bAypzP5M5BAc8xv8JKVyZfdnUvsNogTMNmmq6tgv8ydXYrSxgYwcffCKhY6un5AUxie",
  "key13": "5mXnT9NYYJmvaCAehVQfWFw6VRyX5EQf1rAYKySN1qtaB8Wmk8SLWUXB6Bz4MAnppYdi4N6gRqidQUEJS7G9eym4",
  "key14": "BwigiFJMbky3FrVuzChvCKJw2XGUDydZnbaoHRbMivhML8NnzQNQRwwtPipiokPJEVx2A5rfG7KER2FAt5yFZzk",
  "key15": "rXAxVwFsRWQdq5wxxegFEqrHD14jWWjBk2VuMaRMcB1W2UK5iQncz77RXz2xGFBLQ1Ng82MKfBENADRijkcm9d3",
  "key16": "2rr9tsYfCJyrrqBrNKJcEvDoSLwFNcXKtwVf7mnVNg9UXFCDGisvi94zELS2wQUkAbPFkSVsuU83C17mUmsFB967",
  "key17": "5gjKNy2epgmtKz2TG9eHvaniZUQXYZKZC6tAMx5SPBvUSaFJ6BrQm2Pjs3iLQ76ohbc62JCngCp8oLxkgi7gr8xR",
  "key18": "5ruUa3wf26PqGMR8W1CANU39QTy8E7AVz69YooUoZjYzx8HisnQxZxTXnr7Uj2WLbqc1tokoRED6qeiWEbbSL7zC",
  "key19": "2eBH4vjmsS7YiFQkRwNwsaY7jWYQhPv6mM34s6cm1bKusngyUDteA9Qv3uoqfbHCEcGKp7jKG3VNMFR41F4Y1wXT",
  "key20": "q3kbg99gzG8sk6rKcUA7cfzmtfxhoCFAFdF3zXPcChMK4v71uVWE9PmpvzbJUG9dc25hfZeSw9JWJkG99BUdBHC",
  "key21": "3XYaD14KZz5UK1AFMHQzqATjNerXSpYGZ7g2bmrqxxWZq3o8gNazEJ7amXtUYs1UxNYw6DGHazdhofd56RADVuFX",
  "key22": "2sDEeQo8fXCCN7qqBQixEsJNo3ezfCqmQGnXYeNtWSky5g47pYMCyYxbFqx8p2DTBUd2WXs1iaqiNnLtzu5SuXqe",
  "key23": "2hFS7aSn9Cf5Z5hC4AVxXtPsgSjxKhPDZoKwaVX9MqSJmeiTnqBvf2rHr3VaSy1qxs67voj8mrXiasnEqdJD4jGG",
  "key24": "2sQFsb6cq5pvzSmAubWxVMunDb6aib1XMJxHZtbeMHrQ1wRNRssZDawQfMCRq6uyF1nffdVcNkS4wLh3KfSrQyzP",
  "key25": "2Np4mDdenL2T9dYhGuEN1ZcvvvMtjCJfh6Bj7jJneRHZ7sxs5wH7h7qvQEuRfNEq5MucMNoqzmHCKBpen7jL3uz8",
  "key26": "R6pRbcjMoRdFWyHiuviZsdEX58KBKYXLSJDcBreUYauvNwfBmqHUHYiWvHsFpK1PxsuDAKHaXfTLQod7w5QHDxB",
  "key27": "cbySZRtBZsFTfqb5AWQfirPgM9fQ8getz92thiwwnXqxD2LypQ2zQheXxpN5xPNmPGkNkAFAeE6Vn4pZoY3PfSJ",
  "key28": "3mCF4czTr4XcHQX4MKympCCEKj2Ksc415oYqxFAtDHEnhCAg5SnsimSZjEsvfHenWHQsxT2xkJ2XHadSULP4qhda",
  "key29": "5HA1HfMgPy1aqQ3BtjNpjW1WrmPm7TLMQbZv43j2ymnnvTMG42m1BmTzDQZCAKKACiLugBm9AkyGF7nTeUuhZBKZ",
  "key30": "4HfHb69AqrvjJt6qTyqxcb8vYGHSpQ2ncLBPGYu7hFrh9JjEqECddBNp6xteA63h6AeaFq6reiRJ1sgXwUY8fKKt",
  "key31": "w752PB1fwMc4nBMTfXCtk48fVe7zkfdmztyHrsTn4D8STZbcS79vu7mJefcMjA4BNv2cN9yJGoo6QSL6zxeSxqw",
  "key32": "2KxAGDWb8LMtW8zwunAs2ZKCyXFkJNMx9XciDM9Dz8meo2hW7wDcu93z1YQBSDFMAkWhSQUmBBS3XpuuFK6DQJnN",
  "key33": "2ENjtuQbwMxt1VYYpkJUWX72BYHWpxfRkBKtwsxTcjajjgmbqzNxdS2tA4ejqUfeFKX8ZuBUmxb8NJzMj43c1vwJ",
  "key34": "2MU3PbGy4KHzjcsxv7Xat8cMQ6JALtWW3JgozsqoPnkVDgrymxJHo4dkQU48ULt1VmfKp4nW4cs9Qct9MKiS59Ga",
  "key35": "5svtqbiM5cguJwrqxJP5jBa4VJ5TZzY2XFXTGezvv7RyuFvtE87dsi2hDHJwN3WQRhaujHPkfg1a55RPVZ7tWq7s",
  "key36": "KKGvYrP4xAEWJqWdjLmyhJardyUv64Bark6NK7WLypBvWsk3XzzrbnWHrt6p4CYoDeKmjL46rMTBUPrvcX7nBUc",
  "key37": "59Cru8Qm1ftyQMNe4uLHmwK6uQMMKSZHT5u7tQcAfAcpXSxymYVcW52JxZF8BVYe5Q2J2567vRnWBMrZ4w3rU57T",
  "key38": "28s7eUnpjFhtTDzCcuQvmGfxUdsK2Zne1bzDuS3AJ3atoaMLhbz6jYn9gyWVm8XbEbBP196LBn13fdziLpJfjApm",
  "key39": "n5r4Tu4dd36UGUvjJLb3vPoJFvA2WiMCCmAcv9XpM6tihuRAqeCVavKLbWBk11DrZAm4sMLpTHWS35knL7sAwqW",
  "key40": "3rmXbPnnZwAfjjjPnkFE2U7XCQup5j9pH3uVosPNA32w3JSvMjwi9dHFfeBDanUFrsS4bD6HkJyHdrpSsncGYVcg",
  "key41": "2zghUuayEFJ3d9UXHr3qBbNU9dMjKXGUjFofft7J7f7BAAkNp7WbmQSXPSPBRup3KdqLkZJAwV3sCVLZvtnoSquF",
  "key42": "4YRHjqtAe51twC6zmSrZbVai7BnQdeu3WYUGR8ibornFUfeYuqJpvAD3T7SnGwEU6yQPqropBZQTp6rXbkK1v43V",
  "key43": "5KR3zmzkHPDRauFFAcbKXRnw3BrNsyGdZMQMoE3PVEyBMMXn6uvT1tKit9R4j4zx4gxcQCYisPKyrg33e7pbT57u",
  "key44": "3G52TRDgYNsryJChsWvH4rdv2WwFgGomaoSn9HywbeJKy4MXXkSGzd3Effd7V7dcBkgtH1hAYrHZoVJYdtwQX3Gh",
  "key45": "4JzTP3SfNs2Qybg86YbGVZso41oj5Gu3ccmvRenQ1p1L2UJ8erodb8Gm1XnF8knoq2gMEok4Wkh7tnM4bFHfwQkh",
  "key46": "h3pk6YLfjmE1Vx6BHRHW8LjqQ62A721GquLASBK7kbtCf8yV3sFNq9hcpHv3TwG4m1RWwcuMsaVi2MmTQgYmhGz",
  "key47": "2RaaNa3SGNbHU93MVgWNS1CNM4Ufh4KP31oZt2ztEJYMNAaLf9tssLsPNdg3ZyR7yYVaqCDSzrdncpAaB13FBUDC",
  "key48": "5fSaUDvhVpQQAYdLKBbSQg765uXFQt6gG6o3wQ8iF8VEvkZWiZm2QNCddRYZ34qfWXusThtBaBKPze3XCervRJst",
  "key49": "4eu4kz2D5DH5qU6EDHPKhHAqmjspQQ8DU4Gc1BgfXNSbZtBnyXGoG4RWVfd1Xj31mAiZAwEdZHRcsxjwHda5yHCz"
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
