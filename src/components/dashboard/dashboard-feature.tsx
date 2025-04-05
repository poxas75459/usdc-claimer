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
    "BepuLPaRYQBpGWBAMMfVNNvUNoxqdCZLC98UoGkkfmT8neNEXGkSGhVQXKD2LKs9jUBGxMUFUZFtUmwDHe1faQJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ytU6eX8E1D7PdSLNcU8z2USaNzY8dz9Da1XVz4idG9dmRGENCSrpmcNxr8pVQRg9ToPsc7rRF8Pi5ewuzvrWdfW",
  "key1": "2hn8BtpMs5NY4TNF5x4X1ztjoNSQrJ2HLhmJTh2MHwqEffpwPfLxhGKgm4K2rxYs8hAW5qEHHShATAkR82Hafav2",
  "key2": "47a9gsbU9b1pP19fSg9LbMPwWhi5yzaRMkgGnh7hG6eAF5Uu1jAMJexjMt2Mt9FwmjnskT394N9R7b2MeAhuJjYf",
  "key3": "3JXS98TfwPioyVYrPKZziC5FpQ4F8AR3FnsdWjaSF2tcWFM82zvg11LCYGsrXw4zth2wjyjponBbnhZ1yvCwhXxz",
  "key4": "5yJBzZ5Udrx2oqr1A54XdmBL9DBWYoSCb6uzcQwVYH5bzE3qRz4LD25nr6WyeAJhRxoFc1uPz6txPoJpj4oTUk36",
  "key5": "4zTs35xcF8qjEQ1CbKrRuZYrnKcmznTbypi6TdQa6aS8FqoGU7Ra8Lg7KXP9PbKuJegbFQ1tD3QVBMLgJoeJtRoa",
  "key6": "yCoCpGCMdCkFWzEQyvANydC1YgD1jR58F8yXJDuJUnQWaxHJ3Moy5zrLwRKKNsTG3VxyY3kr7hKHGKd9jEZVc9w",
  "key7": "59RXEHTaVJwiPSsaenZxTscaYkzETJ61e9f6f5BNNcbihpPUoSqZdayxU5DHWqnweupTWfMb4ZNr67N5QakYcRzq",
  "key8": "39PfbMKa5BVsbDsGsrydze8n9urXaeYEuhzGRkSwJPLdbDnM2FyoW6gR4AhhvvdiW8Qw2jCRuSuRTZ576kpM8LD1",
  "key9": "335b2fMFrvevzmt1YvNNmGBosm8hkYUsAmk4DjTevgj2eZwhqPzz3dYgGnHTrGiApeqoBH9ioc3bsyUxjnHJpFrN",
  "key10": "66jdB9aMZFqMhpFcMNHg8P66qr945hBxGBG5v3garb7eQ6nRzKeo2h1fDvPTDcNzyrWRmTGpKW96LmLvQNARH9n1",
  "key11": "5idBqCzw5xASgg2R2daReKf2yt1qFpqAvi2BfT2wd4NYRmC8CAQRNdaDdRTihji6EbVFH9wkEKxbqrdxJqQuZ1Ko",
  "key12": "67XjqezaQAUi1Jcmo6ZxkhfrUiyvD4uhnw26gQPyvBbNMNMdNkaNbuyPj5gDkFR1f666mzzXHjZP6EvEDVg8wkR9",
  "key13": "56dvjzyUpj7Ccc69ZWaYef1Zife4pQ3h6377kPXyEoPYZn7duCEYx1VhWNx79UgeUWPqHHdx6BXSNkvXN1MgH9ws",
  "key14": "3xNM18LJLvmmQf2L76Jag3mUphkWxxjvhDhP6mpGoP1iMqoBw6z5peJGmP7Gejj3ZE76XmDNRTxdsmvukYFVDcy5",
  "key15": "mGgbHWMN5WjyzRDvhKefhzKYPJE1SCa5UhCzLZrdonJ5J2i89fLeSoCFVbeh6ztg2Mqn5DSsx5sjJvxD6cGYvZH",
  "key16": "2v11CsEZRuEQw4T7ZTgDydwLbWLXc1PBAKrBGtBVW7jmFdjsGE1rTd4oMsb8Z5JgpLz8MnueBQrnxh25kNaU8iU3",
  "key17": "4gfpACpy843tdc8Fp85TjwBmaFkTkHmJ9GtHAtWoczG4SDB2aUQgxbAy2HztNGQMYG9a5rYgp8hAuhHAD91YzmRu",
  "key18": "4Q6VPuAgCtHz422BSzwgYaNiDU6tzcU3cZdF1gPZfDJgvSK1xsd6HxZ1NhsHVtAKZVfDpXAohuq3u3NqWeg8uakK",
  "key19": "2ZBNMQezWe9eHFgLmSLs5V9hUZo4GePt7GxaUV79Ckcpmkj7kP3c6uzdK68XnV6P6SCj7bdMartxTtKoyzzcRQgZ",
  "key20": "T3SEQrXM3kPc4N1eSskLkYMzxA7GpCrbx4FkDQnA63kqo2keykKrjEnj6GGaagjdghjE2hDcnAo8vp1xda4r6vC",
  "key21": "28nBtpxTi8mBUv6vviKFwHFyRABRNPa3CVpGXkNxKtdqURSEbF1nnkan7yrs5hejLoNG57cspqKgap8QndJn1AvG",
  "key22": "obdQkQtcAR53zjDxPPmCf72RAiRF6Xz4F7dF1gJLmXraTBVnnCjZUBJLcAZMxJwwa3WfbSB3bHZPuDWfwSN9JD3",
  "key23": "4664FbeBVQ2u8Qy4D5QfKh982i2kKE7Puq76hUrrexkZaVaJpENCJkriEE5K6mXrq21pZdVyKYVyYPJMDPfAMEBj",
  "key24": "2SkGiDuaQggnQdj6GBNM2KB8yLagasZ5jUYXveyHCwAaab6XeUNMquA6QAvQ4xVLmri3dQnkS7iS7VFZfVBk82S1",
  "key25": "4e7evai3z7tuf3bCwF12NfHi6MUEYJDrVBJRLJzb5vVNyEkcmcJaoQLwBx2ih5e31ZrWyxgYSpAY59pTqoGCXHP2",
  "key26": "5RDBTviiJuVsoDRogxK69WxXjzTKhFzE3bF8d85zDcQbAjtqCcZe1pdsyjXX9KNMd3MB6vSuJ9stc345uaLV67HF",
  "key27": "28KZsqkJyYjSHNRKzbKe91jWcXypwCjPSoUWShdwe9bzV4ZFsCfbp2LLgrhSh15dpzNYxQhC2pudckng6TCCHAtt",
  "key28": "tyvGn3Py8xxgAgcpb11zCfnofunX7AhD1WD7oFrt4U7Pa7ttgAa38qks9m1TXmrSyc7gjsd2c2QvxFaBnJn3nJ5",
  "key29": "3QLJc54Xi5m4Rmqy7QUQoGZbR6dfiQrZBpbovGA3r2tTE4PB4FPatWVVjXrMTRD8PVBrbkXgcNwUEGVZ8nWAbC6o",
  "key30": "2ns1tm6P7MHRaA6sYHNChVz7eQPYwV7gpksXqNyU5DoMW6mZ2B3Uxs9LdBP4DXqnGhbF5KSr39mKg7Lxb5n32A6k",
  "key31": "pFfczHGx81g9Z2CXjjcxkaMqZjPTwL83cM7KdbdutGXovrLJPbyKYECreMHXP2cucQBzfrw24g9LXcgbfyCuEMw",
  "key32": "MHWBAbtCsw1pvwMqM7gHY5DnagGVUtbQ4Jp74tXmsZTD4kBds55meeo3g6dd4g9ZMWR4E1iihUspLVdeza3sD8W",
  "key33": "41kEuvPE5Dr1eQT7ws97tQnHNa278SLQVVt7y3zCc7BzkLzHLqqVWF2MzFSxSAYx8SxqJ55YLEj4hs6XThXmRkFi",
  "key34": "ZTAqvC2YoQCTAwKP4KeYgCXjRRVhsYt1YAp8i9gxAfS74QnKTLy92gfgyM3bBGf1GiR1aTdqSeyQedBsujjqhWu",
  "key35": "czdUko5vKkSZRgLnbtWraV4B8WyWP37bQwKS7hsYPcQf4hnk4n2nnMn78ReCByinTdoWj63JMqTd5AY3qczDQHD",
  "key36": "5eV8cJb4tVHDJKRga7b2HWE7cn9AN22W7QnLnLSrfFgErUA9aA4S2rEFeebrq8L3BFQWCZx9gGyoDVgidPYxGanJ",
  "key37": "33zhyiofDjiUL2GLGax9vry2tsYSbwCbsxwiBVmcB2ynchPs8az2t4aaiLj4MBYt3GzooTxV6Y4svR12d9hUdhDs",
  "key38": "5LFZZShC9rdLhrKvMNETjUoGXJ5YyhGBcEEq14ytK4Z2FoETtYY5ho6ocHeHH7ad4akCyEgFSzvTrAVu9nRV1rXu",
  "key39": "2EeQjCZPtUNtXZbPswwvmQLt4oDTrx5DTwCSho5P2JpCzxDd4t2RKuY1FEfaZqNN61FZ6cvpG5S53ZiUmSaEg1N1",
  "key40": "61VK2xy9ZKcEJdrJMxnzc2MwGvAw9HqBoo6M1Le1YuuJdZs1QmA8t94dUbommqLnCabZ56CQWYmHjs1Nc7zzBKFe",
  "key41": "WrQLQyfroqRwfTtVdiEygA97Wwtw3WSmCNaj4KQoB5U3qLwTyFrS5BL4kjhtmK7jq8E4UQjRP5GLuTUQAecAcSA",
  "key42": "2ENPLGUKGRW9Ng8RNaRTLFukKfoNdLTW1tDdMNPQHZb5mx4MxuXrQVMJQ1kadSzUfS85NtsNG1bCWn2jyzSkiXcg",
  "key43": "4AoJhYvx9vGacCBrfbZeWsLjhN1PiVNSH383iyM3dgXNamiX8pEaJLBCTyu3GU64uGJcBQcmJT3BYEYMY7miYGhQ",
  "key44": "5wwvLJedPXFLGERpgoPDRVgawPykRy4jWZNwZRibHjWcQ7SwmkpHNuvJAYj3hnVh93PJ2MshwuLxsiM1aqWXWAwi",
  "key45": "3qmZP2fdEVnVwjwNQovxsJ29HYGYENX4ouJdts5Gz3i6viJRUDDmxhhuKJPHSW3RS5FyvvVszrzwJ8haUvQZV1B4"
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
