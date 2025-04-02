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
    "3Z7X3Wx2zgz2bYyfmW1vvHbmaWC2LntShkqWfZKg9dTPH1hoqG1NEdEFKTj4Dt9dwsopkfMm6Wp1YxChW165mhMf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wm8oFfN7iamNHu9GRvyuV4RVuywYqYayK8xkN5xJ2krPjwrbss2RVXxL5rNbnw9SBXUsMepmw94xhchdXUCzJBz",
  "key1": "Ra7NAhCxdJmVNsRWhxpb2GytuBxg9naXo4prisJRWbH3GQBQv318dJzNTjVLnCkc9pWt6BdCTQzSjfCL3iZ78hV",
  "key2": "4YskuGUB3oibbNgA8af3jXm2XBXdyQgw1VWB9U1TzaQVf43tX8XRCDdpMrzuWEL1PcPiz1DoxaCbnLoZKGJeHbbM",
  "key3": "5BP5XxVZst9e3PUsCyq4mCCQ1QLBjLmwNGxPN16UUFx1tJUuGajsG21wKpnzxKPNEpSUz3ZgBq9hS5jg5fkYa1gc",
  "key4": "5d3BtpVxuVGX4XdToyj32VWjJvQpUcXM4sfbtV82w7J1EuAZEzwonZhhUJu3f55Y6mJnwqD5HWDeRW6xFKf522mh",
  "key5": "2rwTN16ZZGmEnhDjyb3cKmA8ap6NBABNiPR2pqnia35Tcj4soza2NxZqCFN1anMoZgnPxnxJXmjMeznQ8KzCbnD3",
  "key6": "4dSMTfiCxyqpX4BZHCQdwoBTuQ3YPAcinNtRvFmdmqnpHgumsc5VmBp1XzvfJ3gwr8VTccTY5BzggPSYu24TTFrt",
  "key7": "4L2tDNiwYMEAgjeaXRUAYUoxMTufgMDy1k5vSs8YGFQioWNGsNcvQ5fFdfPjTaxormdfYsMSCCxUs7awxFQKSbY2",
  "key8": "2hHwjNjNbmoCq1gZWDDzWGKUoK6sFuiwrL6yMNmu3jwvdp5LCX2VUF5nDSefaqDaoS7ykDtuTkehn4WgQGegVYyb",
  "key9": "2VQAPzvyduEodeUg3EAYXfRb3xAcgf84fqh4GmrsgXK8a83pQndRXyXg1Y4q4YKqGNfXtL6KNrWKw4uccsEd2wrA",
  "key10": "5mKcAR5buTwu8Z5dhsvStrY6pcm64JSkVJX4U3NmejMmrA3NyiAxGtuVCbqyQWuHBNdWWZu3MXTppUZHFq5wtFjv",
  "key11": "2CLCVUtz5eUjzXCDNUbWTDSG5TND5hxDowuT3Kcmik5eYKHjX9UCQ81NhmBchw8Y39VhbKgkfir25RakQFcbCe6r",
  "key12": "359hyKSJDWScuM2JZC7dRADkH3qU2ZMYLdpwPfh71rprVvPTNKNNxNTSe8FkMYAiTi84rLkePodo9HrtGeQb1UWj",
  "key13": "4ThVXED9cWfPnuTEa7s9oFnPhLDyj6uoJKUU7tcrCFJn6x3nU6ivAqFpKtMjmCJ7ucbKJ2asRdWVNRpuvFn2Kvaz",
  "key14": "3kYSaehipvi5keGXLAYKEVanC4MCyDBSgrBwGAhCzytxECEdSoVaa2LXWR9hppX5zNtTsii66U5N4w1nog8hQvBF",
  "key15": "5oihPqK6DjSoQCJu66Tp1TUvxUESyCt5r9hZogGDLJPBS86JspxqMCkziKscVRHjhY87PVBPXg3YFVEsh61a1ucJ",
  "key16": "2h5KHigg4dowUU2YGbnfta96ZZwu2R6iDxs1j69rQ1Acv5WvWgjGUSgHJevvKkst4SRfKERz93QSnNGi5qg8MUzE",
  "key17": "622SPuN3LuxDG5UrAhV5uf5qqEeRrEYbNx2Rgm2cq1tpXhHPNPQyj3VqBm51JmqYpt4xSQNS5AEMXhsxFQaAbGZU",
  "key18": "3ERmA3EFnqfqx3x7hYmnQanDpgoM53pLtPPu1uVqRMm9yqZXXDGtED1czVVVhyX3mysUv9nGSLmeUTq9JDs4T4v4",
  "key19": "27NXworMCfZTXtidLsuBQwixSsPGi9CGBZzFFgMQCVRi7csorstZ2fS6yybSiHG9ExRr35kvqLrjCcwP75BhedYe",
  "key20": "2ugXLeC5TQpAV7fYLPoTDaUYD7Dbi7j3XzoRjD4tSdRbxrHdZy6WfH4ExnHQJsX9AtPVFZJV1FZsiv2WFVUntRpc",
  "key21": "5AHLYd5wAtxebZzYrdKMGZNrALHRoDtuX3nPqhaMqT7MuuUQE2HXBDhESrDKB77k1QWKowdaYvYxWCUNitUhaEW3",
  "key22": "5Nujn5NsqkUM77BCa2rXzSg3rEWt4YdhVjyWmLv9AQfki2mVv5ng3YkxJDcLQs7EEinPZGxGGBhNVjySiihFBS3p",
  "key23": "4u36PMsaap3m8Q5zN1BaCcjwM7e3DNDcbxbDPjaKwcjF4QmPtt9kTF87UcEKK7j3t7FAaYYs1sTmfNF5VoaVMM7M",
  "key24": "2arEkNjRDVEab6DfLKQkDDe691KrPRYZA2P2jd9Rk7zmti91NSRL2wfHBg17BEXkQPKuuBKjhFd74s2NnRhcBgZ1",
  "key25": "2EZrUKBu8UpnLbp3V3D5jNccbT9tzsemh4zbqzLMDxJh4thssZtEXvSkyr7cJmHGUaP5S76jYucSTKNkLuV8wKkt",
  "key26": "76C3iDiEFnvU8oivZZpaGnRkaPQXaTeLzFVoNGaLMaj8uVwHYwnJtirijKBhjwHB9bn8xydwM1BRRcYwgi3bqbe",
  "key27": "2sTPw3E4AeTip6t5zCaaG9C9WrPDz9DQJnr1jcdw4qAGSRgipnSLp14xBbmrKorZnuhxhWZuuHtkQ3RcmLBg4Nic",
  "key28": "roHnvKnBu9Bcegj22cfN9BbQx7D42g2Fsj9Wr2w9BensRwN4yeqQZDeGARBMceCMuyXqfomy7ymoqCTNArt9cgv",
  "key29": "4qtWEitVzxpDNapJzdejAzcQnc54NFrieeCFzgn6jhngm7PRNqASgRVdLrFT9oaXo8DLtU6L87k4sRTYGWLmL74j",
  "key30": "5NRVc8XU4mP4YR31PUqXQpAaohRETR1joumrB17TVteW2SRwPyCVUSAgu8Bug9FeLiPVMLAHZmLtrqUEiiDTDzsy",
  "key31": "3yrrsmTt3zpDMzeX1KpBrNg8gMbVHFRRkv5ENChZpaWcNpvPDTcqJusPRtS44trp4ZFCGv8oiZFWrDfcB7U6cuZX",
  "key32": "2uGnwCpUf8bEAzBGFCMvH9Bkbg7SEUW1SMP6puJsija7uAwsEw2BxUsjArsQ3oadMpgy6ddKB2hb4jwZexiDMG2B",
  "key33": "xQf2XLGR54ZBoG393JRcEPagPC3P2duKHLxiQCHxoeJYp6vDYxp4aSxTQ8PPQKb9af6j7TVJTgbBaNzTXGfhrMD",
  "key34": "4Sm6g3etogcrxdUTqvhpxwwjG1rbSqD2FzwghypvfZMoc8h5eht3KDio5DdwTivxg4LKQzR74X7EQwbVFhfBV1Qe",
  "key35": "3ixunYX1QivhFAMUdQbKMGanJfM5j7abBmSXChN3bvjrUVPLkxWyVTefcTEwEUhJjfKY3tzQ9vA6QtNPGh3auVQ8",
  "key36": "4SHtovU2ktXLRpNyb7kpe1747AnfbCE8yQd3yxDjbh2sx4u4BTqCpJBxvc9Sos76bPR69fcNE7L8HaxET3caSm6t",
  "key37": "4EvkVhnZkBX9AHDvkXkfp5rLtHJHdNPBvMetLv3LEMGo7iYoAuv9QJfFw2Wxd2NFoypk27w6JzYxUmRisvXEnFNa",
  "key38": "2JYvB7NCpFkYvNARzkWBkRshRzJ7EZU29xNz43GwhvWLE719X7knzX35mHxGvr8KEY2NbEXwzpRBiFFVbBwUyxiv"
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
