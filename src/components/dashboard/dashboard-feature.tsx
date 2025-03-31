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
    "55cLdLLeikXcRbtZTZRo165Ag3Lr5b7kFSCd7VCkZSnQKqTaUaAf5Wjcp7NCPfb1fQPhxXR7PKUUooY9bmUqEK1o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CaJ4rLwJweD66w6WS2TaU74rXpuNk66U75XYRivX4Ug2b4dRCXasgFNq6cnwch6XWX3GhxJFwsYct2RuHAjhovF",
  "key1": "yssTn2i5F9FXnCtJkQ8MSwtiemmDkLfPqWYGJTkHMkL2kuBnhGYaX5gb3bKrakGoHGT28h17VPajQCimK8Enb9s",
  "key2": "uEgkUssFSsVPkv3ZPiAcHmYWNzLucaTevD31FipHXpATAHgC8zhRzWhT6QcpWcn6JxZveGCjDxJcnqcuaiLxBdD",
  "key3": "5GP6fKea2TSq3WD1yHhrHztFYZSEsuCVhbdWyWu4E7LAfYrDE9txH7XmbJR6GKwiHF3f9DTLCJrfKcPt2zp2ADQP",
  "key4": "2yVSo5csD5ditesGbJ9LiDHKu37x2hUKFZnPvxVbezCLp7SZKAAyjhhQbgpUsD5oeuaxjF5mGJQi5XhgsHfvrXnb",
  "key5": "qemV3DXCVpGRkruSQfidiS1z27VxiEWFgJcQGbtVzJopoGo3yrh3zAy6hBZA7gGa51dQL2kSgem77bMcCApVRe6",
  "key6": "MkcemiKsa1WcwgDdq6u6bqAJzG8RXJDZgjxU5FXYb3oUCaNcWsY46xp5h2UU3R338ngMEbJ1jFTB8tefGdXnYKi",
  "key7": "2TnzqWvbi2SHauwGHfDQT2KzB3kbpXHghxL9MWRENbBMuzaCYgNFosyHeCyB82s2b8ka1HNNkYvhMbv6j6W36tDU",
  "key8": "47x8wEQSZbg4FLXTu4PSdQKBANb29SrRbr9hjd6qzWmuzXS8dsppMxA7952nrAWAxPVznxuViea66HmadasSZCJe",
  "key9": "3oSt6BDA7BrEh9ah4JrTwHzztf4Uiv6eXQySBUP1ufXjuSM3qeQ5gsGfHnsN3zt3gcFE75swAukaLHUDPL1Hhh36",
  "key10": "49VrVRPBx2G2srws634ZCEQUqQQqqV332WsNtX9GDcMe1KJatywFeZPLX4mWfk8m5jKG3nRcWE3pWahyKVmEbKBq",
  "key11": "5xxQ8nZQH6zdfrQnWPQoZTT9yjw44mpcGoba6s2Zkqo758UVuwV2nrQcR7ZGLT1ahvwyAM3KHVGCRxtgkcsaqfQK",
  "key12": "2hNmMjwt4VSVrEqVMuXRiFJgvcGAJoESERfGbR3jZ5fG8xotGukYnaGKHAY7T6VTHd5ebUZzMc4pyHrRsZG7aEN7",
  "key13": "4B3wEhSwjqWAAWZ4iK6hD5xdH7zygEUVosGxYxLq7SomZaxjvMmR3cS9i5vciZDBVpkuiKY3CJCKLGzyCqwHEGYp",
  "key14": "1ZfUhgcXS3HAoWgd5T9fpKfvU5vBeipuwrdRqsLyH3zZceiW1mAva44wGBpY7sfTUXqrL2jE3KtzjuLdtpykHT7",
  "key15": "2Aia2JD41nNroYepSMb82MhVvPebff85U69muVw1wze5Fa7H5wzqBLFJbjs6nmYM7uHpDGRpVyP8htuzxEccQXZC",
  "key16": "Sda6bbbMu3gwm21ZHJVpYkdcYyARnjh7SpwM2asCz7YYAt9GF4Ns48jR9Z5sh7hp8AnPupoErPhPUR9BfG5b9E7",
  "key17": "2XfAeRMNRmQRp77ivvyvr1F7Z6SozQCagYGTHzamA7zbrpAtbWmiCMXL26EMdGH3AhqegFXTJ5txMi6Q3T81ixt9",
  "key18": "24ntfmc5ixeNc5JdfqFUKgWm3qZWe4HKGgk7gcSQ5QGTe7ALtzRzVckLM8KsMkfNDhWVQWN2prScqWYi1P8uYEmW",
  "key19": "65MYQeAG5ra5LqJwiL7HEEZQ1gqadACA5jYqCV3h6yv9cBMKy3vFJWYdGuGEafffvHs7caohcqqXivi1bgtuZyJZ",
  "key20": "U5P81TEAkmUumjVM88eGbb7GAGSdm6JYi8BUQmXexEjLS8vnjjakrAAJ2icKuEGpiBX7PTK9VSDeMJyq1jgicZa",
  "key21": "33XPiGpvuQP1DJatrMRwYTsTNAN3b39HmGPXP4jTbrrU2CZkU5JShNH5a8nWqTC1LzhHJX3T8uakwhvVXtmQxjBp",
  "key22": "4L2MMoyBR2sRHdnTr7HfCZ87nAJzdeBVPr6QoeRogsKMj8DY4YEemmehaDw4mqqg7HMqrcxQo8trvHSJdsow4Jx1",
  "key23": "43Y5sAuyzzNjL9CXoRm64ZCJFvXdMzrr8u85FEZkLo8ox8sDbzecPeZX6pzSzDUzJzYypk2cbGf2gkkaUvzvLSsz",
  "key24": "2vZCmXXNnSFPBSQCbnJ3RR4NomBnveovSofiptC4uNjuetiUFbwvV4GZPkXxdXNv7hSHDEgqpLLJwhAM5S9gcS3W",
  "key25": "5DzE4gR5e2244vj35zmEkVbQTgo59pgJh7LMywo8rxCiNJtCey1T5ouCHF3jyjn219qiq5BbPe2UcoK9LVGtAj7G",
  "key26": "2jY6jXHDGfwjwGSQ2baQtkMTof2RTmoUiJkxKrtWW4b6NVAKy1ZVo3L29UouzadAuDq2Bf9NeXVP9KR121V3JGBe",
  "key27": "5hzDwetbL5uNcjUW6AS7TgycCuEdQkAiPMhmdCJJdUs8UVPfDZkgs8kZ6urbM6ojQKB7tor1sViTVQ1Yp1YEt7RG",
  "key28": "29dZCG2HZeEQsJ7A1dp4qo2MMXBqsa8bwpJbf5PeoF5e7qXujDym97aEwuyTxHbL2B1WFfY1boB4Ls3zFAqvG7rx",
  "key29": "67ose7tPLy5t9Qjb5WGJQGEierEomEAVH99zYRv2HCcQB1fpR6vWCHJDd6pr4sqyToXAGFxP9iX8fgkbv4ZryfaV",
  "key30": "34AsQWpgGLXnhosBJLJTc2pKNuQUK9eSLW967XSbZ6UqoGnihX34acEbZ7wRZ4HwYvej1MgrKSe1m2RSrsaXV5w9",
  "key31": "22cb4HPbrm1TuFGBS2cZd8MU6VzDZDytujXENRiU8bDtXcTcECuPJxC6iPtvninvyFnUquZATyV6dS3dRCiqtSvc",
  "key32": "5uLm7uCNG26nWrJbnz1aPsTSqQJcqbz9Je7VP4TQqukp83HktGm2zshC3JJdJKbeHEfzUY32HoPJqaWcBku4UUN3",
  "key33": "4vRNsmwCR88X5oPiy2toBQ6Se4jTkEZt4fnotpJJ2RVAnixinmzEF4jChnUfqcq3VKBRX9iseVUXwcQjJ2JJEnTN",
  "key34": "3QgnqNfpooxrAxswSqb5yxVPpDpcttgHQ1p9SF2aGh1GagNbSfc61FNkvdVx33NRovpumqZAK5yGYz77ppLvqNAd",
  "key35": "5LB9eewXrNko2LTozxCX9EFrq7TWhgEj8oJ494tN3qVgoPBLAHUzv13i8ekTWLXBkvQxgMzEakyHUFpgZUKcQEnR",
  "key36": "2G6f5XDjAMjZftAjZw1aDDAYefLuSUbHs8E92ns975oSFdoGPmyGhYhWPSJgkFTqXXjSTSiLYrhC1kPmnJ33uGXo",
  "key37": "Gz7ZoM5DzL7xa2swEiBTbf4WFB6tfAf9swGG7KGbBxn6zWkg9GBNv9jtWgxMaJwUuwm1sphrTGTjgHPAEzkX9eG",
  "key38": "2C8ZugZif4NL1uXiweqHwTy85JLze3VjvvCcwHZFVfkFFVFbbmZ3bi8V78wkt6iMMUDy3jSQKumXhZUnHo3Jf7UY",
  "key39": "2dLH6pav8YixzXGwnLrrKsi7heD3d5KAvf1kBkGSfYH1KgQ8MfneKtTcd3VJu9jh7B5GZoozzGJAq3qNqRDcsVUH",
  "key40": "5qE1YPnzE9pwA7Y6UytaVKgLSECkTFbrYRjmmjYrgiDv21KPGQQp9BroCnX8xtdoRDJuqRywHgrEdsZpyFaGXwpi",
  "key41": "2UApS7HPEQJn27etQ89rN7ubWaZzLHAVFNV4shSGBTY3qHteebKWPLzzvqnrBdwUkD8rzkhHYJofWi5w3W4YYtcv"
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
