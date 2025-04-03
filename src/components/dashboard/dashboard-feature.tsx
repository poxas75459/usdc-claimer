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
    "2qnPAEYSRRceiCdyu8Rb5qZBkiNZ6joWJbZF4VM8bzSdaWwCB1egBg8QCzXUXL1d5sWwm5YnoZiiMEUTdpuVZpqw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WTnb57i9TWwwxPQdEgCzZ4j8PnXJzi4BT8oVGFGXWGneCh4WzPwMdCddRjchTcccFbNN91EbzP3xKizbjVZjX8D",
  "key1": "28x1YPWERTcz82cf1wky9UWnhdV5RoYY7SJ9EPDaYgKSRQKCdZ9iBZcSnWUXusTL2u9tJkrz6YEC8fzw94itEWZ2",
  "key2": "55LCeZNx7LFdhYm9ed4Jp7cPKKbcod8f65miSNWuJ6yBNBoR4L66deXGRmZ6Eh97xWJaHfawZvAr2QgzJ7FHPjfq",
  "key3": "47fHos7zAUh35baYxXeVvyky4WsNxBhXdVSNj5Zi65QM3PnJ9GTHL8gMsm7xdGXULCJZ3xLyrJxddasAoYeW1RBt",
  "key4": "64gUqfGKGoJXhowHerFCAmPFQDLTkbAds9RZdpxv3hiHnEyHdMQ6CrDw9YfFRpU3oRNbFJ6fc9EKJuNpfUfFrgnm",
  "key5": "bx8Qfwq3ZTpZus4KP4HsaPJ9K1Phdjw6VCnQ2dgVpG2Mk7JivDqWrGsTnobWp3J3RKf7n49qkNDDuLJZiTcJsX8",
  "key6": "57ST9DAJyp5mTWsp8oKoRdW4XNCyrNfeQZF2jJff6Gfac7ivQSQzUoV9hpjE1vG3z7m7JHN4G1jA5hfrUftoDaCU",
  "key7": "YnB8MdsNagzgPr8tgbAswEqAoQzpA5ktknK2hYRsYuFu7NXJTEGoeAu21hEovmdt4ce5oJqUkBxTWipCvwvJzDu",
  "key8": "3W6R3MmKvmvY4p6zrXvoaX9qXA9LkombbcZx9BHDMpGE2WD4zLC8MYzu9FnYoLs3SzG987kWiiv2FwXQ7GScrkjo",
  "key9": "2xkQLgQ8sfiRAdTdvqY3E4okcMZ8o1RgPskTSNtyPgksCwPqnFHoTQRfMLPaH5dS1AC1bLEdST6VJSEG9T2DPdJj",
  "key10": "5GEnb6VSZ8XevHCDqsXwrJCueAY5ttBjjB3V4jVAbkZ4fLYDLKhbL3FzgVNYvJotriZejEMKTCNLoepse1ydw34U",
  "key11": "4ET4JBQSY8rMMgeJ9LfsdPRnQRZpuM3vPLh2sRWSy1ZwpAkHSNp6Spbo4KGNSi2uc6TDWXTAt6BqJEtnuGLNeUqg",
  "key12": "5SHwFsWy1379NwgUvYUKj5Wmj9V57CuDrTpmCgCcdDmFEaPP7krBhh6WEfKbJT1yTD5Xaz2tqYZmwJh3jNCaXaXo",
  "key13": "5vBUsa3X9LT9N2GxQ8dkwTCshvhJmkpTRCjbqsFqjkiC6hDRtj8xsWnyUBPxAMUV4qw2FeWEheLcyb7usiHroVmN",
  "key14": "MQyDf5DJUHxKHW7cNVusenHSX5X6J2yybUkkpYPp143stbqvXE2KxbwvTyhEbV8HDEZiHAymUQZpACEji1jscEJ",
  "key15": "42UxdeSEsGcFC5sSrem5B2zhdfJfkWTLEPZtxphwUss1nBdwK5RreVeq2mYFZ8BBdu9P2YV83Mg1e1GrAcFw695k",
  "key16": "3qYYctyVrJGMCnsXm2RWpZ21nUMgk4uGws3zDuBgz2oUk8zrHapXhFnDXad8vk3jK71422WH914TqLtpwRiT9uus",
  "key17": "2FVKj4XPxt3MW4uAFqzeanviyUi7cL9H9q38gKsjGHCVh6TVePaEzrj1BA9y1bEDVCdkRByCp77H8ar56fA7MNsS",
  "key18": "3saYy1Cp4FAHxrTPEBz3ApEUJm4Zvh8QLCWFKLdLr9NK7hXB7oQV4Ls7JZfweC2LQLxa3xvbCj8P9BRh1nJekgcn",
  "key19": "31oB8Z9c8shMEryX2vUsdVPtgPxUAVKEjKwGy2P4JSnbJfFobJsfRJ8GWAFZfvMgs2oBAfyDCaAZfiofY42HA5jn",
  "key20": "5a16Mr4D2SB2YdQYcojrYwrL3qhm6BVmY9ZAh2ZDn5R2jtxgVCf63LWeVn5ERuzUziXBkmygNGmfq4aYyhMNCg6N",
  "key21": "4rgxXuJMXW8H197PKb8gEErBLUFemR1UTEvcpTpc7DDpeBrNfmmrfMdKpucXifHBZWZj52M76DpE62SgFC12M9qM",
  "key22": "aMdLPixbkN7JvJPWYuvBsFD83dyZYAs3Gs7C54SrttXPWGKu72acjm9xhF9BQhkc6ZJ34oJVar5H5EeZcWBLXCB",
  "key23": "5oRLrjfNQut7DrgAenKQMamuAUbWi2QFo8NTbiHDLyNRLciZ614PWeQ1nWjF9Qma1noyF6WtK59TeZfeketetdBD",
  "key24": "2wENUJjpwDigou1qesu4fCnmfBNwY1T3c1idnHDERH2Pp5x8WoFbnrQrbC6qnpQpSKFNwPxEEUGKQ8KP77DXdE8n",
  "key25": "3e2Lczjns3Wq72AfdcZ6xTaYw3af7oYekbWKafA3t6te4qGo71XQ14WCkqhhQBQUhRFmWkZEzh2AJxTM5u93fVst",
  "key26": "5EunWL3VXmzknrLx6mc2GrVku3q74hUtKGtegzXXvcRCNubRjkMagM7g5YDPgFfPESNABviM5Ct5DKMsr77JTSeb",
  "key27": "2X295L4wDp2kqfRNiAgpJ1iWsQ2x2eLqJbGmNhMA7mqxXWNTd727BcHsQjFcpbWmcRpqQ9YgxvqMmWbGQdKHJcjj",
  "key28": "ZiwgdrzeErAPTb9tFSCohKsbZEeRrCqX7KjxMPnLzFexjQzePVUkE6HbQ7P6CLDEWwizPQXxw1qzYZ7ztW1EWsX",
  "key29": "4dQLXMuL7UKEm6CJujSGY92rE7qhmSESDXAfdmoWgvMucRC2psKR79arUoUx898Mrp9jV29QYRtDGMEpusiC1deK",
  "key30": "3mvpRzMrUtLCA4vu9GLEdv2UUahVMZ9LtWKucUuk7KX3oZdyqRoyL7je9aftGGN2PauwCsGVzxksinxNGKLS7kJP",
  "key31": "3mpdUe1uimSkZNGhcemmPSRFqUuoQSZoxnfhLvHRiFQEJjReay4eg1kb4GjusFMnPKfpPWzZ9cSyQHJD6h6b8Mf2",
  "key32": "hZ4LmtQkwNbQ8jFCz8fd3BvzVRiTbkqGas4Lq4xn9MYhFb5CQujNy5gyRkhoomooR8BkqSEtjU5xo74xCE6Jb9b",
  "key33": "4ZUimjrtxz76bK6Z2hnqbKYgDBrGpnhNf8hKL2dd8ih61EzJaVhjsX31YNreYrYmjecBuscXqjJv7EcknUHeDfsv",
  "key34": "32MFCNLCJXDoqEVfpa5i9xKunKnaGSQpWTKGVo8Kw3aYRvwB7JPHMTnQ9CU5GUv9EnNxfL4X5jDZGVUdxphr3cqz",
  "key35": "2ujEavDUiJiyCAYCZFc1uk7vXBpTgfhGfaLbxRxMJUsSi8ng6paioWUf75wVZPr8F9Weej2GYGX8BZrpSZkfdFro",
  "key36": "4zHg1qaTmRkV9u5biCb1Dnyq9KfuM7f8rQ7wH7uPZXGZ6yShoW4yqqJjNu2GFZmpqeWciQJqtL8HGowhyV1q9Mv9",
  "key37": "5unzzcRFRpmHjpG3knHCk4BpCQ9apKcKLoteQpK3Lgiaqjyo2gBDiexd1wkpRKUdRYMxMuqt7JZVt5snwEoZy5zL",
  "key38": "3zqRBZk9rSzhCEKrbo1fWUvwDGmARNrkVdaj2paQRgV2RZBtm7b4Do7iSfi4HqfzAyqqFVsfifzQnwbJfxMcYV8K",
  "key39": "2qkcGhEaayvsAmkqjcmKgac7k1FYnnpTh1qog1H6nk8QbXxF1vy2Rt7HUQ1xLhD9nCGpb1gMtqnbYpcongRc7hfV",
  "key40": "3job6jTvSymjc7irdz3ZYJWjZpsU1h8HTtAGEbtkpC6HSEyTqhBNbe3d1tCisWQSA7Z6y8TU4DgjPddYWVgMP69U",
  "key41": "57REyeC3kj33ArS4S8RqRe3iRwTqV9FYkwNn6W2T84a9G6Cgsukg1Np2qELUa8U5V1oEanUK8d7bZCUHW9m5pm68",
  "key42": "5eqjG9PLQoRXit92rveMtJfnHh4hxsVyybXjabbpSY4hCYvjtKeEwqP6yexneqaF1o1eDGd3LFatn4tJG2a55Xh3",
  "key43": "4sCx76rTnWWhEcx39fifoYmNvSUqRZqGWW8G8t4udhjuNKLiLFGWaTHyW5ikPLxBRpKMiMJR421eGtdBZoLNhyD2"
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
