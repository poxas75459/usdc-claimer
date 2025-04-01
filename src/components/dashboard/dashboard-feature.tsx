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
    "3vfZHW8iTMLKPoqsovG3HQ7GX9nK39pqRF74KrRWSjmYdQoEPdgHQHQNd8sChGQRk1YeNPnkVmUaUDgvhFs1zbLN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZTrCT7JKYg7vH1DRwCrPps3i2S3rRLv3ti4eJxeKwmRmaDHknkmpYNritLb9hc85Bex55ejQTeDgz9L93uGc9yt",
  "key1": "2kEnEY3gf6rgvYomQ1hYo6rKRWoawkH9KbqDykrjvfTwFGwYcCWJYVeAovgi9FuoXFeAv2NUezeTVaq8yss8uUhk",
  "key2": "2pPkeXBRsqwvQGFwx8SFGhwzbEgQpSBw2Jk8QvPsxYW8dgynQqUDnno6uXoaM9Y1GsroTfVggPspZNQKZhPxY1CE",
  "key3": "4EWk7hZtx55iG3bL5b4mcQEKpNYD3TTUExcFWEiMd9ExZFsQbKacmLsNqNBtfY9gztz76H5GKPvhfqXj9grMpSaB",
  "key4": "5NhNQL1PRuumMn5tExEa51N9Ed5MfJPf4nN3wAi1WCELXY5WHEHGm4wmFbB2mg2mQV8fKc2v1EjqDnvqZKygLeWY",
  "key5": "T2GVh6Zb4eoBF7W56oXxAx4UyKu5LRwvCE26c4Uh6DDL2pTgmnn9MTovvvmYenP2e8q9wmibSSwa8wHzCZvi5ZX",
  "key6": "4stjApWP3nDwtZQV8wrADAmkGQfJPZgdng1bv7BC2sxMYb2KTr35C4L6PwHfvHPWL5qxYrPC3jyuCW1DQqcfuBvj",
  "key7": "4g7uXf8rLp1cPjyetShGc9zNBJwgydjm7gWVXqspr63d3bVFPA4TCW27X6uiXrHAPjw6RxEv4LnTTnc5gXkpPajR",
  "key8": "5PCY12fwNxo9KBSaJbT6rrFKTSRaLyH3NhmVA9mDnN12PSM5kjVxmQQ2z6Brv5GbehnMpUqzJkVfkN5wdN8u4Vgg",
  "key9": "3uau4YQf9PcxfSmoCYubZwNT1aJfXazYfQyJXkr1pUYeFavaEF3wgjPpqxNEU3xxbrPBz62zwrmdigfp8THDS3cg",
  "key10": "3oUiLWo3oXXhTzWJ48L4XRbrkhqxnyGxej5a5fa2P4rB1uW3mchMJdY9ovsViu4yqnTcJpE8UGY8mvb9XbQfWsSY",
  "key11": "3672zfEZXoLAtUKVGtJdP7zXojGd19Ryt5RiWQcsYL3fyye6Wdawnmj3Zx4BK3sG4r8Xi6N6d4dycQ6f3mXPXxCb",
  "key12": "WELofpC3BMACyHTuF9gjTZhaSfPtFm5H5iPmkPPSiqzPsRy63HrqiGWJy1hUziNiU34HeppU4eWYqckD6trTdUh",
  "key13": "3ETbTi1FjUeDrS2vdCugaUx6UR8wznrrC3quL7H24CEgdBB8E7n6maqJ7ntiQ1x3wvsALvpetmFrJfSvHNNQFqPz",
  "key14": "3Lmqt4dGv7QW5doYuygDhTeGJo5ZjEibAmdAXXQpn9mSgHYdxJ8or5B1BSBzcMRfqwcTb6RNLtmyT22R4F7sQuN3",
  "key15": "52abc4m6DeDuGm8tNfJfTsxDSgPuCT5ufpcPWD8d57tji7JLRQU597kwXCWUy327PHswEWYnpqPP6RZS49kqBzi7",
  "key16": "635QwJLFqzdHwsYvBK7jxsfcrHAeL6XYKQrhaTsDjnZwX16gFx8298Uh4A1X9X2UF8w5hR34qgJg9ruvwWoLEQ9W",
  "key17": "4YdGTgbrKS6KsvtW7wXZHRFYd8soSKiHnJqqTJjyfW7peN6yZRYRKmhXfRk6B4q6Y9xYp3hpTv4BghpCVhtfnYRS",
  "key18": "2zw4hWSiG5tp5PSqXuG15b7QQKmpejTcWn8b3d2QTFGYEaL4NqC7uQXADMjmT344TE7PgsRJFYJMNPGc9kFVebxe",
  "key19": "4M4xyHXSDHHk6hcQQZ3vYYpNYSsWLJDBWFKdM5SVHuZy59HpVeuGPLGa5PGezKaDHKqfVfQVqy7R9Tka4dNayVij",
  "key20": "5PedxwXXiaMEe4gWXMN7UAa1zy2tk5ZJCJWV1jnuSs6eCpxstkeCYFxnCpDYe5CFFdg59x88d786339iNrJMyvyF",
  "key21": "4JwvKnvTFvFu4K85ebGhXcSzkFLYoQxVjE5we7YJxByCKgBDAMG31qV1BvLtxRTCL4qTqcMmeUikJycX2ZaQ6rz9",
  "key22": "3gZ5kJK7qbrKJJi7E8gkUEZZvTfo4s1aQv6esaZG1BpmdukVQ8WwK4y49FPTfUHLxj1DdAr4qdkptpddh4iVRRvk",
  "key23": "5Eh168WNE4pPbrBmi19FJxshECkfcXJ89TebDWsQpYo7XqKMVxwjsYWH6QWXhcDqqsrtFFEJQQW4SHQbe17B8W13",
  "key24": "5qrY3WBLBWgBwrrz7Fv341mSNdgXs9VpuCYBomaS8NdKpHd4Dr8gg7jkhpaJYodn89XuCSpdF2sUvBqARoSn2pCx",
  "key25": "4z5PbCPoyemuaEM5Ui74YyfmMSDZWEupo5wZgA49FuWJ3vu4dMCBhxjy1ezPkJWi8VwEStNHcwwxipPu6nc1LMVM",
  "key26": "47DPNTUcptyUx4JBxkGUWVTwx8YcaixbFPWDu4e9HcBwSMci2SBpiJRp1oeWN3tYDrj54zc2HV2p5kpU5ErVQint",
  "key27": "3kqHtVTu6qgkpFwr2KF8sE6BtVL9CTftUkxPAtJGdZxefeFarbyZE6PV93PHFK69kRnTaQPWqxRRk5B2uv46SotK",
  "key28": "4UfDji5y246m5SjFYxcXqdGM8q1WyUqQ4ADkcSS5kyPgAbGapLMnviVn3rsUWLtpvMyoLZLMnemmXwxVVzeQxvAv",
  "key29": "55zR6snGZgjZpuSzYaE3rDeiFahDEJdHL8NzQdWTPk6BKr2XtpkQYb9RMvojKR4ktQhTzzeDw2K3LX6ozcG2aCGn",
  "key30": "2cqcjXfBZ7VHru3v3YBkc4muqHo8Cf35UE3Rtnry8pMRwMS5SDGrRoaHQ8z6DJJUmsc4hR3X6cF7uiUmcqus3xfd",
  "key31": "4XBSG1NYwM8xRqbP7gbsvE9KD1B7tzEs8xkK5PAehNJEiEycH95Moc2prLhDHMWV4a3NZKrKhKzqgwvgpcLfJ4C4",
  "key32": "5gXH17Q2wTfMxPxzJ3pfiN9sDa6my61Q2Y7EJHDk9xnCJTxCR9ECejFBZNQVEWJ2MU5gbDW6MenF2hdbzjEhxCM7",
  "key33": "5qowczx92QQq9UoECnKzQnmtBXEtygn4miDzJ25PL5W6o92wS8BAtUWgNGRnya17LTo5C5vdee8axQ1JSf1fhkae",
  "key34": "ZjQSJ5cJ2XR2mXfD7HwgiA33TzwhzxXiaWdNEmUnANfc1ZXu1kfkU4MrmCyQMXRw7sqZgeExyWxf4FUzAb6t12p",
  "key35": "hyTwpwQnoLm3N9gFYuYXsWXrHrSHsyZr2dxvgnLYmvmxwNFzRKPPDkemBu6XenfXCNth8fx5ZArxuvLRmx7sFyR"
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
