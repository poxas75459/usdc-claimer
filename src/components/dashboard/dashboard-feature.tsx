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
    "53d8wrnFMfeAWTjP11o33KuYKUfJZ8S62fFyNK1Dyqyf9EcQUu1jGZ4iYrron6bu71SUjV948zdsU2gK7P9CeCsc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qDZ6SHW2LyVD43TonMWsPsVMpBQyhAW63JsJABEbeBtnsT4piJxqiLf5y3eLUdFjMvDVRXG8X339zf1mPTYw8CN",
  "key1": "391ixFxeQY9gAwQ7A8uUEuc6V1SG9fRhYbygGS1f2xxThezx7immveBUksGcoc9Xidw1CuEnFA4miWH8cUUy8DUC",
  "key2": "5vyy4f1bVdUuX1j3pEr7Zg3A75nKmsKf7DhnDvbCetWzBztBMs7Hno5nv2E966jbTyG17UGGKoQ4sKwtFy8WuRzT",
  "key3": "2EHYCD4wwNNK3KLQMPRTgXiWRqjXVbYD8ccyXdcjwYGP9xjNdL1GT5QgtfS8YLngBodBmhAGL8CAmTQZf9R5f9F1",
  "key4": "xUKPGcFhopULLspy5mpQULYRioGNH9SySw8qFFHCsugRMRzkuxCVaPbwpBCNTkamhje3zQ9tcuyiDWFPndNnHS7",
  "key5": "dEc9AUHCAobvitXFW6i96ZdjPs6dSFnvTVHASbEHYFv5NsgRNC9C6JL3Bgt8BF21kHfcP6G5mpsxNBSYaQRujNz",
  "key6": "5iYjwjCqfLh7LkmKAkmHUHiGjfGu7B8YqQF9wpgzQyuhYxqcasPvrihMiRWpPid7ZzDNR4JzyyAQs4iCYbn47khZ",
  "key7": "5kkT1cbKyEHSmM9AxNZuyi13DwhgfXn1kisZ3a367dSawhZyEJnEdSfNv7aFE2eR72PQ4jTaM4rNpu2Wtr3xSqtN",
  "key8": "2TtEpp4QVsET8jGRFX4SU3P6eRxE5te5Q9Zez24UdTH3vfmuDPPf6ezjDqKguuWUnxLuGxgqYM7EJZ2hnWLdHSZD",
  "key9": "3nSeYyXUzpAuk99vS5pVigY7e9441Jr9JujB21ZPqsPjFmBUj1QX9aMo6QvqLmpHSp3q7ueF47DsW8pjmZgjmarN",
  "key10": "4DuzE3M8aL7gk83FXsXzvwb65H9YRsm4U41FPvGCQJuBYeZMaQEzisEbs6SWaAsEsVaSNpjDbKyxgLoyqmN1zJf5",
  "key11": "3k9jQ8VEySdxXK2A9UjVEu473PzgY8FtYtgYhAmRTi9WNxAhZL1EfGapnS5BsGN6qwodw5fZxqp4f1iquX8EwxZA",
  "key12": "2DS1amQ9jRQXAm92BFQhERNjDWNJ7L1hNNBFSxPxBHn7czudL4u4gQgfgMMJj7CCfQJz8UE8Eszikg9Kov28PRS6",
  "key13": "5PkpUaSei3Hn2AHQ8wXoR86bf4oyNCcMLY3wRY6b1tSAv6PtEB47kMLuyGJipNKmB5aj734KUiX8Mv8FMytqNNta",
  "key14": "2uhthu3MgMBy8Kn5XpLk1yUMBpnXniqxh7R9GVwKrABcMRDjVvXc8PcsMXKaNFLW6vf9Lh5z7HLq5mLpaNRmMJBF",
  "key15": "4WtiAnBNMKjMPdezXAC1rM46ZZFMXsgPwojresDyjJL3b98Xx59TzmRf2B7G4Vedd8MPoN4ihERnQ3ZeXh4uaZo7",
  "key16": "ETAK66RYMGajszZ8KMGTwbdB5DA3rg1XKoHnvK3JrQAf1ZLuMAb2NUPpWiyWPjVZhbbumsLr6srksE9K6nMSkuQ",
  "key17": "5GqpdG7KtWadZp1qy1NsSpn1J7tKCzYTG12PnZ5ZFipqgks1WB1wPhmkxxT6CpMTPqskqHrpo6hrrhhBTzJ4Qizn",
  "key18": "2uKA5eZ4rqDFtd9BuSteJbXm8AHLWkakXKQy6uF4SNtm3QtX9MqyTVfpVvQTCsfqw5eq6BJKQLM3ekfw5xGc4HVE",
  "key19": "4GDZSmfJZL5MNAziCfPbJFrVRQcg1EaDvpJ57uyQXTbw86CGY2D6wfULmZ3vcEX7WM5YsGpQWmuV3Ya1knvyioA3",
  "key20": "3UJZRmruVDBK6BZHPeRXfod5eEg7xrnB2iAr9np2MVRTK6o9wGv2N7fzXbENiy3xDc1H1j1prajjAdehNEn8Vnc9",
  "key21": "21em3X7N4B4tKCKsDcMnmGaGzXntNCwMrU1gv9GyfyAtUULCt4FXTrhQ1tWi7wpX1Pymvn88hZeiXEems6eBBvqs",
  "key22": "aeYr9KRX1pveatL99yj6pQ7NgF3VPq3kLqmqPtriQ3VB45LjfCcKbBYrNgA9vYMcMHSEukYr79V66L9HQSGzK9v",
  "key23": "37Mh6MP5R8Gfut6oeMYe23Y2Yezp6mSNmxZtaGUx534zbheEEjneSQDQgenPjx1NQEfeuxKrrjyXrKpZy7Km3iD1",
  "key24": "4zCRMDvhUEuuVQDcrPWFz2uMWHaLMbUpXQSw5cQWntk9Pe9UhByXkFQvuegU5DJyBAmw8BhVjoToLV1bXBZM3muw",
  "key25": "4iGeP4dwzeA8K4xUxHkDJcXVG9UUksbGb8ndaaLjenHKm4LjhZdKMFsonpJKtApZ7PF1cCYgbiPo2QuHQiiwE4mM",
  "key26": "RsKcMBG1EBsUFDQd6XPkFoXY6a7XbpK6W9pwJtLdrJbszLX5sstmCXKqQPGNbjy9i4byW669TNyY1FGrxP6rsoC",
  "key27": "aFbDfVcbWYBLqrMUudThNUsUitwASrbx2YQZdXTcyS9X9yqKguwZBogbpAn5rYCA5XFxoZWWE7AncRHpcDoxqNT",
  "key28": "5ReZpt6Mn5tYckx7bN8rEWFM5BejE1t7JKXzgWmevz4cqrngfYwwmPruhTCQnLLszNETQ7qdR5CV9Vvii7R5K9Gu",
  "key29": "4mfUnPU72Y9v8BdEE4MpwWY9S6h3f9GgC9D1YjjkEwApvuLde6prRMJRfCnY8qMJmnbvcYVQ7rXSvdkHm99idm5b",
  "key30": "3WM1VvcEjLMxcdpxsBSyyMsPa9ujPYzYLgjZUPhS6LhsjrYHQGFTt18tvtP5jTwWAkvFQn3u7byZuRRHiKE7o3VS",
  "key31": "2xStBAHoZcs7WN8NHKCzbVUq4sasYJkisTiyqTaUB9JC1eKq3QaSVytPJQE1BPYkQuHjH9iB9Hz4N3JJYXJasmTP",
  "key32": "3yCpkhxyxovT6YXrPaTf2vozHkaRf299VTuw5zqJhg3LoxbPTsjt9gDxWF59oSXYG3UfkRUo9XG7xfF3iJDvWwPL",
  "key33": "4w196QFXRanm4hBfDNR7mUteqfB9Sk73PCWbcqx8oTQeDbsqMvkUNpjseFBxt3sFQc8Wy99eCKfPt5iqBtFNuz7J",
  "key34": "43qyXdWyD6cb4Av89jEQGGfBC1xM2jfRxbwzNVsWbsowkwLxtiG1FBuQqMGAuT4wqTTNb3S1bB18tDu1ghCP1jdX",
  "key35": "2eaN2xE3XuUtYcEFSbFee8gKJ9h3dPPPbsye5DEAXWbk1zKurbN82gGi3iAB4qJgLjJXXvQuo7GAjutj9vxJyEEv",
  "key36": "2aqN81bE5DWxrmBCjPSGFnMciYXDDxsajN3oQeuR9tevK8PbLZjuMJT2veANv73PRNmPHDk7Dz5yZFKnyZoLhh33",
  "key37": "5VnHPiZyucgX87YgM8k8tthmGtkGDyjrZE19vdmihZFJf7cYkC92DUhTnhVb2DrvuakrFk11TvFWvcD54bUVrU9n",
  "key38": "2QYVvcMFjNaBSffmHCis2CHbe19ERjTWVfTbbxe8fUBwVAZftqwbFdBhEu8V3VYRZnU1UtmjdWtPBzk3rTPdUD6T",
  "key39": "5qiKF5MPkJYztCYjtYbRLeR3KHKSft1yTp3tJd4T8uALV4qnurTifc8XJhwqUQVoQYV2vS2ZcPSoe9zzEuSRDWNn",
  "key40": "3f12BRLJKWu4nscerFRhpXa1jesQiqoVCNCVxhJmXvrfKNXJu6TNDFWSxE9Z4xPRDqeTohTWg16t5fhTiP5jnKRw",
  "key41": "2XM7GVj3mn8uzt997d3CTmr5KfArE9YFxp6XRjFPhRW4VFxFQWAWh1JLpuzUdiZwL5mhc5PoUg5nxF7qszrx3Xea",
  "key42": "4RchnT4ZbJLWuytMucf3jPur44saNXRXrVvxH3mD242bHAX5cLoDHPkPrgFmF63kmaKVbQG3aJehLXBA2ChRmfLQ"
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
