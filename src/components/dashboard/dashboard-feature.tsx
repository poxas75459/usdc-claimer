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
    "4SQGhwxmqwgtNN91QkxkhCRwXyiRCXHpERi84tgStdF1Xz5FTVEmFWLeFmwh93CnJbmzXr9TTbUgi6gY7MuKV3mj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QXSDu6TbGKPzSewPJEVH7PyyLg2dhMgUdhjactb9oS39gnkkvVDLbf4JnSUewyLh3H573xjAnxsxQaLmcVkhCLA",
  "key1": "4DMb1pcLocwoyTdypFukpJqeKpwTNXQiBWV3F2omM9tYRzByL31wqsn2S4CBAE34PmENj1vJrnkXUaRZVhMotAD5",
  "key2": "3MUqrcDtPHCDwKCvtReS6pNoj6zSqjargdR77giZXNFJY2bEvwmoVDC4GF1rUr59TZ62betedjuhdCrFTLN4Utzu",
  "key3": "3ETGTSxxAKALYm2duSUfSxYTixkrjuqaY1fjZyEiiisbS9wMK5Bzq6p41MoXoFJvaSomUKD3MsiP8HYjLdWyYgcT",
  "key4": "23yxCtbiVY24hEuHGH6LrUFqS9g6AKrzdh7TTjZGBhScaVjkT43hpTAGWXhJPRDLCMy8P7sFnLerrJsgzxU8Srmp",
  "key5": "YoUv9Dxuhwjyuz9KhzWBvaKwQmzeFR3JPHk9xzsXt6Vg1BoBirpLuEBwLefoKbokxPTj4AjnfD7X5NhUAu6mf9h",
  "key6": "5pk4NVQ8u4MpWhrf8n1cJJYiH9mMWpyP3nN9ULRYMU2a7FMNvLoLyhenGSw7KKuBYaFhgyJ1dwvnk8BMS3JoqrAg",
  "key7": "5wyNoCruoSj59Y4DMPm512ZBLVm19EC9QttvPuHCSumbJMG23FskFKUnUwJPgqnKdjsHqLoYYCc4imUWF46xCaJC",
  "key8": "4cnPuVS8iu1ySkLV7asN4V1SXFJpreEizU5BhoBdueruFkRz5s3QV4fPnnt7CWp2ZXoUvPQpLV168BewSti9kLzT",
  "key9": "3AxigqpgneRtHuYdZ1nvzr5GMWWHWS4kjmjwubZRLySnQ17Yw7xNe6hg75c3tAvkKnz4hmSNKcChZw7wn96fFdsF",
  "key10": "36cG5XyZfD9J88GSyRpzmBUCrdpQzY1AsEEoA4yodjwm1zDJsB5gPvrtrUomoUsZDBNnGuFjriKjecC4W4FPYU4h",
  "key11": "2kw74ggWFU1baSZoWi2suxPB2WcyPpYVXX9FF5aH55PTpuopoWknKsYKg24FjpHWZ4Tf8hMUP3a5RwU5eW25gDXg",
  "key12": "3rG68jYgB59ZHjqhQc5pBCrM6tjn8sNHGcAFyRmdhEFbAs5huncG5FSagKNE25Pore5rXQPDSgjRBc7vKe8qmHYc",
  "key13": "2tZetgTUAveqb4NZMD9V3kvJUnTgYuWpUXQZQjjHq2g3EEq6AUEHAPXKXqhQ9e9rJYFNbwEAAwpBU3VTR6YJVF8y",
  "key14": "3TdYZMuVjXh87C9tmZbU8d6H2Lkq9f8vnmFdt9YtncrodwKrDJnWa6jDcXzWmgWrYwzQKuekD5LYQMRPA4nTPQK2",
  "key15": "268EwGJjmYfNVyowc6Q6zBj2qQvhSj3RZ1rnMiS6fxW8oho2qidvBbcyhVZoZFiQFbgaiipYXghYn7k6gnTRTFLN",
  "key16": "Z2w2u3ci2G3Vvz2b5hXLvbQ43f1pjJ9yKrwRU32doc73pccp2Z52Qi3HcGNnzEsWVYwSX6qdoj3jocdkCM7cfGw",
  "key17": "3Et7AL5gGpsXn8dzfp17kfJzx6sVaHhSNYRXJUdTcUCaLC5P8kzGNjfwgjTpcbZf57rhgbA9wAhLmuzPahmiE6qP",
  "key18": "5JCimgWLAEdzhJwo3RZ7Rx6RH5X51Z9gq5KzDQKms5cYRHV7p2exBa9QTGK99DWMG6wCUshVryYzfvJWdiupH9M4",
  "key19": "mVBtoQsKP5gXwCS4Mx6eY28MXX9M5CChwvMQi733kScw6qtx3c8HDyF6HzxpVtUgtoLkBqWb1a6scoHLMxuy4HB",
  "key20": "5LpiwMsPKLTscQ7N7MUhaUSMqGJzbkxgkr3FsWiGyYtYY7hhaLDEt3SSLeWJcFPcmFHkLJ5NGp8wdxt46DDKnnQT",
  "key21": "2qdZtDtPNcDKNRChkjrzvFksozc7xmQyGwGGZ67Rn7oxH98mVwSonqZLGViVdHhwAaHuL5ZG3SSFcN1HRe2BHoWY",
  "key22": "4HKDxRqN9qAzBgkTzjfBi2NsjNzSdhyrq1YwZ6y8UZbXsktAdiH4HJVRgsyuhDZUmkNwyvAHXFFewCMg76JQ3Kxy",
  "key23": "SLXQkgK1ii5ntAS4GHBR76rFUBvm25phWsLcVgVQUWAZjvDUMA3pgy75iJs4xMEgmHaPZ1C3ZQMRZQy73jL6C2V",
  "key24": "57Bn9Q7XJCqkNKGBY6YJWyWJyH67aLbH9x1XjG8sn84A49g6u2r2sy9Jn95LDSkzSo6qxJ6EEy6BaMD4WkdWDrvi",
  "key25": "3ap4jJY5s2mogUt8jhtB7Tm3Ew62A6sgQBh4x9pxGUcfmuXHismvxnnJQiP5sXegXiDMCo4h2rg8o8VkGTH9qBMd",
  "key26": "43XMXnLuJW2FtwAPTYjwSfqAbHBCGVPhvvr5rWzY5mH2ADe7LV7dYVGTNrb1frYAQZ1txbPj9XGaqGTDUVgF5RRi",
  "key27": "2TCpg1Gdyy52cbykNJp87mppteFXJvc4DuPhjYMs6jwyVxLZMCGhBH2YhfEdJJv6nDGey6fSG6ZmznVehKoqk6ct",
  "key28": "492wMfTCJaF62TkL5c76irhcn3SJCVYGJyQSwU2Tg9KPSXW6tR8Q97z52nLpPsaMv2mf83feRUjMtz1dcmLUB6m3",
  "key29": "YsrZkjkiswEz5SypuwK4dD1mmrs6o6awiTdd9ibJtHvh7qwctMUvpwqUxiuwPYovSaMXYkZGZojDENFyE4hVmgv",
  "key30": "WnXE8bxWcQ9czB8Vvg9DwT3BtJR5fvaMkuiuVvpRgfULo9o3res5KDPgmLt6cjdyh3QLQpWQcemfm5sSFGnXeun",
  "key31": "43T4FVXDBj6gsnLgWD6TUx3w5jSvh2XSn5DPDefTRUGFnwagzovfbqZmGoj2GamqzpEqS29NkiGYsyhAKLYXvsQ4",
  "key32": "4bzCVBvSdNLsEF2p944Mq5HQDotBtD4P17h5zveP3RKs23jjZx6BNUGKyz56VtsURgAehBZbRGapeHSJ53BaFeaT",
  "key33": "2EpvmZjWQdMYee7VVffDbxtxMmj71t46ifTVv4S69qEB3ub9FjuUfohnDcimetr9FdVyiqVdQ5LU4tBUG61fKTqp",
  "key34": "4t6XA8Cit9VzBCjRMmpVh6mvECqrT5esYmvjjzyjQrurgoqqFxcCkeWWks955DbTZZKfTTi8khDqVJjbpqbBcVzV",
  "key35": "5oh81gi4jSVD8U3wLwMoK6rB8kxKvAkfDJEAdZ9TYLR3SG2Xyutc7X6xnFf9E53PDW9gmrQd8JMGDyW1fjRjPHBw",
  "key36": "28ZYfK2FtjEtZAkjXUMHJjJDuNrq7q773yKAtZa3B8ogbzhKNNLDKphHbW7vx3PR9gfKA5xv2fR1qBcdWqyyap9N",
  "key37": "3t27UeicJvztxUSEghKqUB7Xz6h1geZ5b6fPXh9unjVT9P9wDSNciJZkYac5sN6Wf79AysvYG9ZMbRhSEoZ16Uat",
  "key38": "47nojLjPnnsQDrc9zRJv3xmywcFEQ6GwyS6fQFkjorH4K1eR3SsJAXah69jLwdeWHUHPZrpDMmqXgQyZiv9ZCJZB",
  "key39": "2feq9EK83THqYLiG6G3GhnfFMrXMRRV2RaQHLHzcz7gAeDapCmMbjf62yFg7H4APCNqik3SBJLDApdy1wyV3z3bD",
  "key40": "2mtFKN4gRPrx5Dzgdq1grGp1WKsByhGWHTJvFcFXbZm3WFvSPjxxPGzcc7WDWBj3DcnSBxGVVH1iHV9aEwdAQAGM",
  "key41": "34Y631ywEeBdeUCkfxAcKJSMPF6mqu5BE6XX1k1Zsop6gTw1BjoiyXTYz7aNDUP7KT2VfQ9edefbEwbBDSePv4yU",
  "key42": "d64WfNB1TqE8p2ZMvgYhhNwcVyk3rUmBojZPTia8T2hkR8Wdj7QyZgpAwzUupVePFYQjHgXpL1GEbSf4izphYQo",
  "key43": "2amLs2kjtjhCZseUM7uLAi7aJzwZbMGaeMbKHdMkDUCU268iNDmvGsQCuj6AaPoanAyA67FS9EDwXVtJpvVVv92N",
  "key44": "2ToFsWGYdtGbv9imw5ZDDK9X57k2ZnEw4fsUMcVWR7YuuGTkyu4r4mzVAaxg1CG7W1G6TJrrzsPb7WxroKYQyk5G",
  "key45": "5ikJW7inursVm49bKodNZc4Ld6UwSxTSg3AysMBFoS5G1Egkb3vSZRWdrMZikYL2JrkZe6XXMVyLhLKYRYYebtsV",
  "key46": "3fgMYbLCejVuDLksNTzn4SV3ArBtfiXfC5gifdar1tZbXjZdwJ4EMb9bPBuwVGbHH1TMkfPH6uaKNFs6pWh4ELvR",
  "key47": "2T1uonzPhY9ob5qxhv2TexJtg2W6eHo98mMKeQGtc9ER7wBkyVjaQERJeea2pHMMKMgHVC2haSr8LQwkY8bBEGL7",
  "key48": "4n7ehVv59ZwcFitqPgxNxBXL8DbixddyvizFRnSPyV47zW3sD4jdtok8df4fGejEidU2L69s2mQGa6yKu4rNt7Up"
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
