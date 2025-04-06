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
    "4HmoU3u5ZY6nnUEK69iSJ8fjoiGqwbE1avz3qgwSxjWdS5tZPXMHUdiv1LveS7dDiFm6KcumSWGb4vM8faC4Bskz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wMprQgVakxLkrSPvjVkvypQNRX3MEZXq5XmUb2AnWVwNEp2wSLayfsVnWYDyK2XXmv6ecDUs4rcT6KFURJzzce6",
  "key1": "2XMJnoSJ95hA2RUnvBPisDXb68BKSmAydbf4zbdo9w5Z85sga15693i2VWCuSdbpHqVLhwHLLhgCSYCfgiw4nWmz",
  "key2": "2t3NBTP2LNWvtxMqQUzJ6PZhfeV8eDPe1PTc1hooZA4wLuKA4FyRwPbHhePwr2sUkH6f2qJxgRrexTdASo5LYeNJ",
  "key3": "CtTnkVUYTNUdWQCfyqdk4YKL9Tt2bXz5kxeUV27mYDHDYGxopopnVwqW8mjzWq2oTsELb5xKYNok8oZdvx2papY",
  "key4": "2yBumwfUJRopbWspgwUCTEhkXt7YfS8LQK69zhS7p2Aozdxk1NcGJ3odfhXQFVn1db1nfvaG9pHpumP5kC49YWsL",
  "key5": "owdCqQVp9bhJDALP9Tnru7W9WKLCLdqdpZYbKfsMz7HxJgVai9cUj7YhG4mHHHAvTJ5vjxbSDQiLKAcrPDXs3sH",
  "key6": "eD64SyNRLNHB1Jry5WSBoEDgJyXAqr3UViQ4nkntbDJu4BD6XPScFrS2uVh3NK19AQUtzgz7xMHPvN2S1kKsH7Q",
  "key7": "BcgbfMz8NDvYjb9RBmQ6nMeBfqnErebhjqgFntez4DgPtJyEtxefzceJdv6bi849n6ZxNyyHYSnQyhBGGQUPWQ1",
  "key8": "R2fdjbJfhnhVYGembJZXdd5xCwZ4sATgiUadsYAGKPGrZTJvCfEWtdQyvWmkcFZNvibJwAMQa8w7XoJgBQekvUN",
  "key9": "2RG82b5x17DMnb45gDxK6RvL5K8hCoH6m5E5mSrB4R24SefV6Fxudj49gnVKcXtbHHP6pDtwhaXjWkHkWWWmAc8v",
  "key10": "29xWk2vUgFL4AYaVLXjmMEYwN5Y4rE1Vgz3neb7TRcMPuUHZvoHat2jHRgm2h8pEYbUg2Wky2SAn2EDLH5stGUYi",
  "key11": "cjGKWrW1bXfJRULmLuxWrRvEAxxjjRUvqY92VZ9aYs5QcEDP38oQPsdT43HRoTDgASK23CpY5LhrdSG8yn5ddSn",
  "key12": "2saq5dtMLwDn2BkbsNESee2UTiYa68tXR18P1F1S3XX9FsXtZKJdmo87kKeCP9Tdcauk324dN3tCLLXEbE6JMNXs",
  "key13": "2WWsT1GmtySznCY29ETVNKiNdYMwmM5h4pHtd6AHHjh7wT3hDhjAFt5vPYpiZtQxZFE5MywiRadnSHi7hADaYmft",
  "key14": "37CRkLX1rTTtoxZZEtKBzydKmVMLrFsMV95jE2EmhDdryLJDefffDCriXfRu4htoQrFH1UEcHMS2mhUp54AY2Myq",
  "key15": "5y1vo7BVFUHhRdntoML1LaEMxbR59K3Y8VLroTjfqJmGSu5wXMA1Vvm91BJV1F17sJ8NLhqCoazPhMw1JKj7Vo7j",
  "key16": "3FggfiYXVWDjpvrp6dcU2cqUe77Wkqcbx7XcjKypouHR1sfCRQyrXH6vdDbQRbGnosL1KkidRoLNoCuzCd2uTezJ",
  "key17": "4CEeoN4c6uCnXZAAoNLLsp83UoxHdqT1VBd3JZusydfguDtG5SL4Kw6NbdhBduf4cdJjPzeiYkKe67kvFjqgcKBe",
  "key18": "pzDSo5uKvCaLtRcEQvCsuZJuM4UQ62N9mq8pHNxG7CnAypMc7KCAjgieBS16FYCqyRc8exLbjBDiXVoqELuf2Vm",
  "key19": "3BjQg6PNvn2j18sJuVwcGi2DYBDt8eeeK7mQWK74nAtaHkDNJS2bJUCc5iGAzXoC45MtfKnM3CrVkVD1gT5GCPM3",
  "key20": "4Y88hnKsC5AKD9pZ3SKdQ8y78FbKDCKyTfEmJnM4K6NZghwpxNANijLnfyghYnMD657fZC8GJiU3L4XJzik21j6e",
  "key21": "4hkxCG8iSizxnZdxg6BLswtbD6njCwm9NyUJEAUxWPnqFFiLabxoa5dA4FSdd6xvSGM9aCUURX6mZDMFDZBceeTy",
  "key22": "2yNHh2ykS1YQGSVjmcqyj8LtARHEor1xFnQ2UB4Rcg5SAZEUU2m8pvP8RePbMCt56ZVV91SKxVeT8Tt5fpbi5E1b",
  "key23": "58JbbAioJ9SogTXHRTqu2tHmiqvbXPiCLzgkRopS2koUj859S4TjQkUhLNwbab1FGMLMfxDnqCEyhnDuvKiehSL3",
  "key24": "55FrhwDz48cUyUXC5pg97SXcAuSzuYegssB8eKdCWpjpmLRGjsXd3heQeQ8tEaB8JURknJCgC7EnQ7dUP3Wm3v1Q",
  "key25": "3mNWCV6bGHqtQygoEP26Um7UXEkh7gF6zPw9SKWRjoRVEBgtbQqcbVYpxVkfycnHhWDEmAaKi6LLUnovQxeEynHc",
  "key26": "RmTV1RSMGW4pRUEUMvWuZuHu9LH5oCPsxYEFvR2VmK1xvDgBXZXumP1gvsVwHKKij1fukJuCoY6JTvCnXM877ez",
  "key27": "sHToVZq1cxaBSBV1bAF9JSHET318bmgeaEwPToEhVio1pijduYaN3MU3Tpv6Bo4MjiXddDweK11x6tLNeN76hFc",
  "key28": "4YtU6VPyG5Dh6DoC2d6xi6kxEEXxekASXh8MH11DEw13K8NMTA3uKoEv9vTocC1ELhnRAQWpQkC9L9eLrKPQGvoK",
  "key29": "2g67uQq8b7ziDcYWbJT97Zbe2q7PrYyCTdpY5EGUfemaCtyBFu4RKLAdbww5ujMw7ThDNWUTSEVPYc1v1DgbNBnM",
  "key30": "4TxLHGcLt6FBEBYqLtPB3Vps9BwMEHW5ECaeRCAku6kygD5dggSV5pmMDEBLfzibcgK6DUZpPvzpghFp7EEPnQuX",
  "key31": "51HViEKX81fPC7fqDxz4yMR1kqssBcnSnJFZ83P2zDK2vHbe9UiV89NXvG8tdhpndnX3CnB5kntByU6CL8u78skX",
  "key32": "ASM2GwfeeAPbL5LH6qUR4t7R8rdKWcFD25kBwha612VuqWGFVpGoBmeHESowjWKSdaWZu7eEDHtj9XTEVmZQipW",
  "key33": "5k8KkwjEMkgmhfoXAht8UwzUAB7orDCjoasHZWQV7MY5mSkv8E5DJaWCGfFKViCGPdGVES6KgKRHaHRLYT9quTkm",
  "key34": "5zZBVw2xckib9Kzcophhtmpozb4J25hEbPTs4EuZQpzJzhpCEo2unmhkzPNxidcPygwKw8ERhRRXKJfVho5Kgo3f",
  "key35": "66o5VXGnzgZgMmyaehNJwsUSY5Qsdk1FUeDd1TXLVeKfhJW99N8CC7RRpcm8aD9cieAxfjEzvc3a4zKGh1umzoYd",
  "key36": "2wsPWgczuuNe8aygvVr1sqrhH8KwT9tPvytmmU2hCkct3K3S6S2s54QkHAU9wH3BVvuZ5yc3c5wG8LSuyJycBv5X",
  "key37": "5Gc1pLsa6zeRnoWfpQY6yrHEQ8fUsrgdk58L59fCaevRs5vmLXYJzVPnNgsh1VPpSF1WVREcM34iYU7jRr6kRB4U",
  "key38": "3xXZkseqKx81zifkTSF5p6Ai9asmTCnUuu3kHfXs5daWSCZsAUGtE3YUedm5xT2rTgpZjHd4pAps1gpqoiYRfJCx",
  "key39": "4Vi19fvGXHYvREZ9emy7qATefc71uELCSLY2EMEkfXKg58CX7Pq4Uvkio2CCVW8hofkoDFqcUn9LnAo2zjeKu2Qu",
  "key40": "2AHALLdW1bn9zfWfLvDdnjsPEjFSypAcfRTuZuyjeZBstoyDXrKTB9mwDUR94w3QKvadGBtny2fybuq7QaWek1gs",
  "key41": "4hBLygVZEVsW3WnaxUB8HY2pfpqgRyMyphiVC7RwjaBfGw8yxRzzF6C2MjHA8CLS3ZyJ9SYKouiSHgfKdvS4YVSv",
  "key42": "6STVyCnNvW6TTSRq1W1qY818YhqAuSBN8TjC1RmZnSwKSHytMGThh4rLjJJqf4J6KupUQrV859SSMXk8zWojcHV",
  "key43": "3tQCnoims5koqjjoTq2totmP7WTBtwqZBmvo8FJZGVEjzN3y773jGvG5sFqPmjcVhdXECtZNmyAdduPHw8kMFXtg",
  "key44": "3hk3JmkBaBztAqnT2qfzxyTefvWsrn3ZKxc2a7MsNUx8zuW2f1cNxmP8B5Xz5bXD8qpb3mZTJ231RpZddriyS2mD",
  "key45": "5tTrVDqWZjJczhYnUsKtSN2k3xERsZVWS4AoWc6gm14ZDN1xFfK6i3bJj2Am5pitBWvPvQn5D5vQun6uNfz7nkS5",
  "key46": "cUKaU17GwvhqHkazjRdhDxPw6j9M7zbC2ionJXAHgmyKUcaT98VpempB5BBu7oonu4wxCuP84BCkyYnkRbSTdvK"
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
