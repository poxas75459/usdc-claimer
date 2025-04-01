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
    "2Ad8LNUUgdLTj8eBt98vn1DTo9R6w2MCgFsXwRPwEnH2LXqAD333f1GT6T8fsRbx6YXspQjsVevMmfdzutMvWKmH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47SJoZpSBgZBjNjyJY2pBqQF2xiq4Rst1i7356dSZJkivHzB1WtfhQTu5c9uBqE4wNRLzcsnwwAX33r9C72nwPvM",
  "key1": "5wwHzyMLPPQgmnVit2hZVpiVZonH6E7tAfPdYePJPJV2urGwfQTP7VW2iQZNqYRLeY5xziPL3cg7PFPpgsbwsD5i",
  "key2": "5f7N7ZPVF3jZYY8PDsxFRoveUxiig6Q89cuovoENAyR6Xfav8Fmu6JJn776koXazK2yxBsm6r7vvbUiBs7WUqnyd",
  "key3": "4TTHxVZJohsbWWvNB16se5tMKWcc4sGSZ8VGVH2xPkZFzn2aykDxz9F7VpdFqdp2p5tKGuE5MXasQUcFJdk5HQQY",
  "key4": "3vsdc27MyvViPaLPXnGjj7uzVPMNTaQNNrV9Nr8tjGvELLB7PQWdw3Lr54vNzTGhoBWnqhPcpbhuRJ6pXhoeqhja",
  "key5": "pGAzjgVi3WcPEkGHBnEmGgSmg9X8ahhxZfEA8sEAz4tHyC2Toq92RJC4oyhRPTBqEBUqHPMw4qy4zaTpRiGYb2q",
  "key6": "2PpSg5e5f3yTH9v9cpHtabGX81KTrGDcP187835q8gPjx5dehLdDUoA2mo5qpynhhUwKCCSmErsDRoee3pkqKDjD",
  "key7": "5dUoVmhqbbL6DJqsUyGYK1dtcndZiCiNSR1pCHSemFfwLwmHQYRgeXWrbNd4LQ85hWMn5T2sW5Ra8dLYNH29bYcB",
  "key8": "n4zeer1PW1kvRVCM6Q5rSrBqnXMgZMxk5FE2BcjwtzRYBJRuYe1pX5FGvY5Bxs9WqpkhcPayqpQ9La5uHND65CV",
  "key9": "2vXxdHEEtm3Ka9qXYD6xGceTWomKVF5kZXM57kEQAYx3S7A1uGeyNb2fsygSVVBabkKagMR8wjSoEofGytv6uy72",
  "key10": "5Q75uE7vkCySZxEi3q8pm6Yakq8ey5P74HEubzDAwxVwbodT7E1wmDkeCVjRfBxveNptLEoPZKjztUENJLhqRuXa",
  "key11": "2Z6ruKgPonfQSELtpY2VkiLgzvcV1uUc4FZYF94AWR3BXBqADHXr3C2WgKyoGzWj9AethShjCv2TYQadJW9Nky1H",
  "key12": "5JyjNMAfoYhx1xTLfbGzYkJPfQpV2WGbWq1ZgwWZKjaYjY2fqC1FfZf94BAKuGxWS4voFMyS3cxHCWSwt8wgvzdT",
  "key13": "5EYu4212R1ePiKjEXpF96texZ6YfjjZtmFcjVizYJC7rHttsP2DNNPQne4t7jAUkfmcPhAXxWWGqkjSnET3eivo8",
  "key14": "3rKMXMYc3rnwYK2Df6hiVqcQ4o6FYcZtKfLwfTh1ZnkiJtSDv9LhHcYUEdKUBu56YtYT3zeP38xPVrx43Gsme9PS",
  "key15": "5nUTuUGzyMiWu6N4bY2xRGfFeBL4AgcsnVDHSDgDamrrB9vfksvTV9TUTNQt66sraKsNzR7rKWG344zfN3Kzx2ex",
  "key16": "2nZWKW6r5Nb2iCgQohjjGjYxJMy9NqYeBQKN7BPfjcFD4cwfsqNLdM64XrwB6UDCQ8DPgueVUZJBchZUYfLhey7n",
  "key17": "2yFHruzFtn8QbK9wBPzzTdEHYj1kDvrAg71BGZ3ar47SxDZNFSxdw74ricHTv7ZkxLVuBq5FBMebLhXWtQaru4aq",
  "key18": "4iXoMUJUFpNTGgkakhT2CpFyXwNk5YVnXuHPmdwp5g9cMEkkBirawgV1dbhfPEAmP6yM9msnUcPyyduxiN6iW6vJ",
  "key19": "3wfsMPi7tdC3MjQgmmT2gMo5ye4M2GKcQwzDVD7pt9koRUDfKxLZyG6RJLcs2g22M2EockysWb6H7anNCabjCar3",
  "key20": "37b2TMbcrs2dHJ62bkdqqdn9Hp1y8swKVtpeHXKwi2PftYRTHjd1GyzwASN2ia9TGUxwizog4BvXW45NhcT4VahD",
  "key21": "4RNDECNEM6Py5kq7F2bDWHE1nEBP6UPM3JqaNHMJJjBgherTQ1URYUHdx7QqMsqvf2HhAyyd7H9TSVqedmhYRv7C",
  "key22": "54cCgwkW7SuJpBim9T2ysrUyfpFbwvGF93fKSPU41ZkJdq7Zf6QuWfNnByXUrid58iC9kU6SLeuFAqVKv3yfcBW3",
  "key23": "4gLEQ2PQvyfoZUwvaoGgv1zgrBQC1uQhuFohcKP59sfNkZPZLG6H8rGqnLL3NpvQa6w6qnQ6U9WYRhrF6ffoPyHB",
  "key24": "4pkko6gXzmxJEpRGXR4WsC1mwAP9HQxdv7PghZ192tLjESdaticRWcDNiLCL3YwqcZf14Yp3UhZU94731XtkTDM1",
  "key25": "2NbqJTTzT324LGdAbNtdABNug3iSGGQXgc5eRp986suFujMKJmd3NnuotKJtkGtNXtrBLb3g4r8AjeZPCKe5uWaW",
  "key26": "62ADvPwoEsJwA2ynqd4JWkLRnxEgKiaQbF2CZUoBFJqw6yHD2cUwNvGFjwiePEcpoayZwqYWowZyE4fAFiiXA8Mh",
  "key27": "zmc2DYSVvTETcsBKTJG474uNnKYUc1cTFczt1Stu3F3qoEUbV7v9QKVFSSZcvE6dSGXSKixcMwULCCt8tbjF4vo",
  "key28": "3gCzcYe5eHpHQ2MdgqenE8oAEVMrqsRTpoU7MTcH4cn6gU5DsHMq4psgzaeXKwfipCxv5oPdBi8WJ5UfXv95KZS7",
  "key29": "5q3oXZ3CQWuAVMsc2JikVky6rkfgActBkqeRvJdCcDTR56QPLKJEw2nVB45yUf1nMYYEkxBsbUuadNxyP2n83hAw",
  "key30": "5LChrRgaEWCyinEttb2pH3grxHrKd2XY4APV2Yxr5Hpqp5az2nsED2jcyhzKrJTpSouFdg2Xr12rcg3Kz6XaZs13",
  "key31": "2GrwyrDKV2syGxU2eRrQW2emK6V6C1i3jMw85M8PWGZEF1QrWwTHGwRNpnxyrh2Fs3E5ksAsyb5XM4NQC7Futs35",
  "key32": "1Jk8p4Bp1uGQbESVt6V35pRURUL7MNEkn3huj2Z44wTBqevqycVoyETv4JJ78p5yMCWD1hKovWSAFQrwFpgeM17",
  "key33": "46G83kCzx5DUyab4TFaaBWAABqq13njbvzoAbsiSiRE96JLFmWFZw7LoMrYy14RHQHTwNU1hYThBXkVtbd3SJHDe",
  "key34": "4zke4Pen4SHfJkyZeRjrE7guYWxVJzt6X7Z9K6ombQrKwJNY6reyBzC8zFYyCPn72e5JJvNNCwe4FNHJ5U3RtAS7",
  "key35": "BN3knVn9PmGvX1CDmUVdWkCJLmkUwbfnj2K8xWwt8jTunoM8uFXkcJ9dB2Kf9UkoRbCeM1sxMUC94E3bzjwXm4W"
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
