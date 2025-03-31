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
    "6G7pX84BixWHfwLbXuhctmQsHsmmRz5ypSArJEiwizE3WHDGvH3D2dvLQ7qLbZDkLJuwzuM4sm8bxbCpduNTbNV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iWB9CcrPkFPdPTNL4MxoBUhUEgFPp19jCqxN2rKqwyqghkbrTLoBo8fDsSSK2pMNuUDW5rSaYwFvVXwDyZ9oWYN",
  "key1": "a3nkcRrUHxURpBVfSyszWSguAbAeXAQnUmYd7v5aSsSFGxj6yc6d2nuGrdunHTpJyCAgd8vt6NXf79J1zqTQFEV",
  "key2": "4KY6LAf1iVAjWrSADBmE5armHSq5cAhkd132sSJNTEqwHtMNpmLfZerou8Y4kPz5mEVCPKc4ZtfAK4LEFDiuN1ua",
  "key3": "4MRbLh1WEfZyQwY6g85H3A18Jknn1tJW7hMYUwrcnFJujv4NDfttPa2nX5refjUCsdskBr78ZkicnqRdGkTySnvS",
  "key4": "3egts1YkAPmdUvaP6KtGqaFhCXshGkCj2LJmwfJ3QvunELjXpbZaXX7PFYDtagkToZ3WQ7ZCSm4fzD79ECMB444N",
  "key5": "5ddyTJ5iQ6bHwRpkXxxXHkDCasSVSYxn6u18zkpD9kMj7C6QSxGMJrHNNEfcVBzfg8bUi8LkrZmf8fu2DmWFhgz3",
  "key6": "dzAHkHkLFswN93CfdVgZ6pq7phc3eh727Nu5aGYFeck3b6dJyPQDU2MYTh2PguMRsoTiSSkx5moRQ8Q78h6j9oS",
  "key7": "3sTw6kqo6eZ3DZNyM2hv3ZzTjKnPSzrA6NyKJqBmqHeRYZi5LB9jCu2Q63uhWMjH89ezou5ER21fr3D6mZS3YWRS",
  "key8": "2a11HzWnHiTC5bXXNjvMpeuvYbM8Bbtq8o4Dvw1uMei1gtPhKZZDz4pFBPWfhxoFfZ6TbuvcGi4utT8G5V9TMJZn",
  "key9": "vRaCXYcZwi8N7LhBFMbpts8sPSm1X5sJVSeK6L7cQxVbaX8MtLYNJa9jKF7had6fJFQNqNZAs8YF82htZ55G6ZJ",
  "key10": "3AWgBVfydfuXDazLdHMsmMMXeYW1yg8mwJB19rMjsSvCVymH8bzFMpb9SrGnWUT9FNfcYuT6nc9y8g1g1EPtVVhu",
  "key11": "59zgYsaxexshXFFU6bFPjEQDviFZcUwgAfKj7fEwjBiYMSSUhnkyTvBYpAayZqmJspzRobdgCtLzxsHMAZtKiJH",
  "key12": "3bqWvCwEXpbBqb7tFAw4KUzEMHyH7sRqqzXSHwNbhDJPe8zcNmVwXmU2Z7aoTBg7Be5TDbLFGnq5nuihUtBGFeDd",
  "key13": "5Y9Tau6SnYvnZYjTvJcjmZWTyRwSRyUybUpDGfBXhJgewZcxyJz8gHX5AFXf5kz4gscQnryepsnHt5cGXdd2EfC2",
  "key14": "4bGWK5yLqKGDvHAqdVHRKyZ6UwuJvZddopUSvGFnyj8cc5JzD71jWpC8yZAccA8CnzSNnkqxSR3Q177kjC31JJQk",
  "key15": "2EqzWM9jUCcty5CGjt7nBuERBhi3f3N1cPsiiU1ARxJydXN3rFhtp7B1ZttXH9GRC2XQEcqQYSbpCZLZir3D5FRo",
  "key16": "YmfvFgpmShzoy925hRRpkfuNQFpa6FRs5a2qSKUCvew8vx9ka1Kq1Zq63P4piqss2z2tXLJaUgBnqh7LCk8dzk2",
  "key17": "5ChLA2WncXgyFa9Vfc3c2QXfkSaSgZ7CmSUKf6r2xeNpH4HFcVtn2TrpgZpNm7x9NBZAdEPTc7nwLJa6cGwf3Lcp",
  "key18": "5Tc9KUzSUQuX4YmjYSLC7BB8LwAE6DdawGF2q1YFPRowCjL9sGV9UgrApK9i5fckW91fWFWGqi2fXy7VguH9vcDN",
  "key19": "2ZD5w5i7r8PxPnZT91VF8FWjchfDZp8U8VCe7CGVfyA9Q3Nh6ooYfURMkxED9vhRZiS2TKs5KDugBG7aBELjNJWN",
  "key20": "5ZRdRHKy3eMkVEaYFwk4mBerU8UWoSPqJyKzvrB3dM1mNyTpqhofudacHU29kbNxn1eYCz4mKnUWcQSuRXjuii1X",
  "key21": "2gpwWxqJBqygH2fZjmBygspos8TbrF4eSVypsWYfjKiKvfnGKpjuYzJtGvkm82ZLNe5pwjac4xA9zvqN5qtLsFax",
  "key22": "3w41kaZjgwqA53SC9L9GxT5jEwFfZqjDLeTeyqdk6B4VRS9b7zsZTWvhBjZ3qU1U5ezEKYu1GihxKJ69kXvjbSY2",
  "key23": "4W4Y9TubUeparrgDWb8oS5KPprAYoh3e88DnhQDUtsfxtzCJnAsU1qAyTfbWp9ayYQv7f84dqQsFt4RJxm8TsPcQ",
  "key24": "5y5ajvijW4ZifrfuAtLFmFUyFopA8bBD3AAHTSBquqHu19vtiuWmXGRdmYYRMAxthhHjgpxchJYJm8XpUBmbsTGM",
  "key25": "2LyLaj2ELiH6Vi2KBbmtH27S1HU3icFNBhzTtxRxnLhgAstqSxp4QnrttbC2pDRtVLwjjcNswfAgdEiaMcJiaEWs",
  "key26": "28sqtaDGbw6EKtbDMDqH1eX121wzYY15818jgibcM6tCY2BcWvs7ZHSE69iCyou9ya84aCQoZmKiz2ABjbUWsKBU",
  "key27": "3JxCFp5bPNHwz5dciKiHyYm7NfmNK8r8LFwstLY8mgGRF6YiFsYavkAwASX7ExWk13VNasMFPrST6PxdtD4D4QGK",
  "key28": "4t1egAPNn1ctibe9u5kwWHPHqgJE9NNbSix6vPWzH5ytie3Xfn4jFx9cq7sv356RezJkghkEBiMRw25on5iNTkz3",
  "key29": "5eVMcaCWGEcoXNNAcZBhc2a3vkxQ5vRom6QHDcGk7GD266J481n6vahiGvy67tnehFxvg9AFDwtD2FA7boXzjmV8",
  "key30": "4dJBE61T6wc3itVk73SAjeYAbZ5dK45xhUkj14knoFTX47CMF7718BUrXs9JHUnk2xqFtehQPfiUW4YuV41y7kdd",
  "key31": "3MzwoPGsMEPLk3WFHexGBXzR118RYhJYGeGxxVRaYsygGWERBwA4dfWLWoi4S7u2Lhs4uWqoCrP8Yz11eSLf6236",
  "key32": "5mDugHf6StTMNydSqBoxmVCGEWBjMAb3Que8gv7KzPfzzikrv9qtdGi1L9FAoy7KC6SfZXdCr1wsdTA3548ivZMe",
  "key33": "4oaYU9UDkCSRQfs7vgcB9HtER4im749YtyL6U46Ayt3nweFNhZgSiip1WLGdeiDSqjNjyvisU5iZv8omrcamadfB",
  "key34": "3RBT7GZ58b6Bi3HyGrGAJ4w1j8hNuAxfrtcjc15AvXGKkURruDt2BrRCJWkoTzNk5g9XioF5wRLV7Mas3r12DiEa",
  "key35": "TBjvAddnCyDAP22W34nJ1sez24VQEcyBCVakcrC9nnwsdX2JkEBAtJUbwhhhZ97MBSNUSEh2cHka7tsqCwimPfg",
  "key36": "gCHg38TgFo9uw1pf51UuLcVgpA7n8LiL5HcW2rsTT2NNUtCBfHpMysqqwH88Mh446TzWBWEQrautjzLiJFpqMvF",
  "key37": "ZfXVDZcMtXiRX99CpcgYgamkTrQDoSgEUSiEPgFMFgDNXymUdhNEU8sNfQoQXVG4GRwz1EBciJC8sdS3KA1mTVQ",
  "key38": "55B2XxDGacSEptSsLx4Noh7mv5dmPXw4RZYPTVbxTPo64Uo9HASv8Thz5WeHb6k3pYH9jPHArTYSRDGsiRvfwupN",
  "key39": "4cfFxRVys4YWswcZb86dDXsykvQKqgdoJyWKa5BD5tfuSjxb7SBFFkgEfeLHpgndWnfUW1htniSAAdFJeLb25fy3",
  "key40": "4WN4gyMrujqSpitVFJQDowCv76xWkSJn2jL7bLdQ6MR2SVKU2fwB8ZtAryAc6vdp9yzmA9PPca1cbjAW2ASErngW",
  "key41": "5pzLk96f5Dh9NJQKvHZQ7hEQBv4CwX5REQyKjJ6WgZveqAKLXomPoQiwQYekvKJJGHQgDdYUZLmp9urBW672sihc",
  "key42": "3yGGsLc9z4U7fLfw5ND1ZfTkGmSkc6aXuyGozVFQBnWqnWmWPWn6y24yPmyAbzGGAWLDd4dGXWZwfNGkLGJEJ2SV",
  "key43": "616REZ7L8WVucKEsZB9EZzuAPmryZarfQDJevHJBPoWPFqnbB6SBpNFvBi1ZajqvAPpKxLyjLsiYA3sGUBjEYN2j",
  "key44": "4md73Tcds2SDFwpwiMRx8MT5MSU8hPWyE969mHnt7zNrqi1qDQXmsABtbDJAi6Dtcdwr8CzirLvcV1xqR5Le63Bz"
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
