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
    "2hbCysNxo2RM8PfbdrsNHj1KV7tQ4dyDGc1CHAsT9i3g2HkH4QoENMYw4vZTuLkFjMXqrQi17bSj71pZSnfb8BaX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "e1XSkTJo4pjYBwgjqwGsUtEQpAZ8JZycDFZq5mvudzGXig4ocuzWMxfpy685qn7YYUdCRiKd34u7VUMPsvefDDN",
  "key1": "67f6Yegw82P563mH3Vx5MCJ47R2asTMZR2Mno5BLjDETwao1Zhc9PuSU2ACTG2RmcA6v6aoPmzWPKJSiCH3RRq2L",
  "key2": "2NrACvftB1Pmr2W35ASEjaeD3cQHJ3Paq1wMnNr6Ryb3V3us2RiCL1k3y6TGDi51KzQqYTPWG7ia6FdseB2pB6tJ",
  "key3": "31ze71miKoMuWw825YowSdf7uiTXEQZdn3L6f9gDhuKNXKdXWBYxFTatZECZdg87gz8BoXK1Z9d2UWYnYTMvgAAH",
  "key4": "5eV2gRrCk3EaiGJiQ7iLnMhg6DYpzqx1Gr8UPXE1tqw3NTh2rysTNgPgiWCbDJhgDPBUEeaJhsYcjnxqThcYYYc",
  "key5": "3rXTB3opAthnXhEZmioK1ArYrYucYm3JYh1vStaPTDXxnj21FUSC5BURLBHCBFHUfHYocXaWn2QGmXzs1cvLhy1j",
  "key6": "5CkhgDaatp7TdmZm6fw3XvVEnET3HpfoTBg6LFoy56uAEXTc9xAkXMd5kQ39a8K7EUVdSyLtKYLxigJNW5Z7c7Jk",
  "key7": "4HUaPJM41pYDd7hxt8wdSYLm4ak8xophQx4qhnnzENNmUED1MYd8qYvRoYG96QZuVVMBc7fCuwAEyip4FSMnBXbq",
  "key8": "3jAcsFgDv8ZJ3zsCY1iKCSK2b1cKtcx8jYHvke3ZfW4Hv3vhaZCDbTE7t2Xg4cAVB8XkngkXjLdKyC8DAcwqdgia",
  "key9": "25xjSjdq7RUoXWVUjrLUAHUrATBRihkQCNPzRNDPZk9L8Mj4BcDJNVMbzfPhbi48AHnRAsUXM22JQTWfxBe2tpFA",
  "key10": "ovkDHZXNkNV7fv4WwyQhNCf5KJFakdgWrSbfkkz3b5pTbTANng8GwafrEahzdLvVmC1XKSooK1uCfvMSqJYRQUJ",
  "key11": "4ASBpgySrky4JzExJfMu2M9vS7rg926MmZtoZRQNKhgHtRJCWRJmkesi2jYCeWhsjzVJkCz7X9rM1nLmyvH4LpSW",
  "key12": "2nL9E3H7FNm7TQ423KmYamZPvTVCzL8h4R1g1SpK1Gc6kL94nn3t8mNA2FgpJ1mq8e4Pvjr3kqWQwKUBGKXdyLYc",
  "key13": "5mHduwjsCwimsrLBErJzCYQFrLNmd9MpbuhYaJGdcayEZV7CvTQJFRdiqRTe8YYKVtZpNF7qk9N9MfoHTJeQb9Y8",
  "key14": "2nQ2KDJyK4PBUdb4pYyGNFxaSmGcNqWesk9jo5YByqpGxAFTq5uxM8Q2Z5Rd4GqvHaGHsSy9GwdfLTYxtQnbN1uX",
  "key15": "4gXxrbutuw1FYhNoWgckJLak3oJ2jSpZhGV2xYK1yRQsURAg4QGcLEZxLWeWyQenyCpefEbJ7dS8JborDhj2kZvA",
  "key16": "5KdEiXQVMtybHwDEnEKJuK61LExJttHDksxmW3i2J8WVGEhQPn3FSopT93uKDdQD31sLMkFt3vbhXBsAZh5EFgDm",
  "key17": "4UysrPmBkSgrrrd7vFPW25aCjoxkqgbtUriGhsVPe1nhshsTH2A6FjoaxF37dHT8A6e2oYGc9EiEASHjWNVHnAde",
  "key18": "34wEq9Y2UjeqjnZLDaDbXF33SW8Cq4ZDJoesob6xWUJudwLxaR2Hy41HhBx3om4R2pujRnCcPZVVZbKP16aps1Kb",
  "key19": "5EhHLW8LrXuSeaJLk9GthXfWJuudPwUuJMZ642K8LQxFnTknT8NEf5DDa8YdkEUuDsJDPBXKdqT9pMUKFc9fHEJ8",
  "key20": "5S3EECZnYMWGjAGzgMZZtAjDdB9QvfGhLyuKteYy6tmVT2KAfXCTk41hcQfYcWeS9dXFctGkwMHTcQ42BTTWMbHN",
  "key21": "LS66h7RPQd5tsbFiuzXtFJbDETcumd72ohJpAyybbM6Q1YwyyrmcjnnP7c12KMVN2aeDqqTPQhTvn5nmESWZYbf",
  "key22": "5nuUjz43vDJ15A5UB2o9bkSXn2wSA3xTSVMJ6FyEkrdqpeMZ4KjFmoetqyDWgUSVqR7JraeszE7A6c5UQ3SRhhdz",
  "key23": "2Gf5aGrP3UeifCF1RF5Ga9C7gQDmsyH9geRN8Ujfa1SsCpdGhEqzZGcmXyppnNnGfG8dV766NQHZWELQzpUAXdwY",
  "key24": "2kRvUJc1BVRbuzucRga2hme7bcs4xXNqSwrYmGCDbRKa4YNbKajsDX4WAkWpSjaP91JnDVbAX8pvgD97VfFTjEhB",
  "key25": "3x4zcYcdubEqHQ2jHpZoXmSyt7S9BTo6zfdYMd8G4G8FFhyTUqt2zmSi4hwzr4dTgeNmaxyM3EJAHgVMgD4kEDvu",
  "key26": "GWWJc7KRCrFkNz3Mwx8fDV99g5puEFhuPNfeySR17oxmLfKaUxaFaa2gU91KVWi6gQumNNKe5T18Wr9kM7jsbnE",
  "key27": "5x1LF3DUCTSMStubynppnnwvJMtUt1LS26J3X7ZLqtyGh1x7Ns7ZXWJaWnsgTeU9u8WiB9eSCkvqH2TVhRuC9SVT",
  "key28": "4JuGqqC9DZviUPAqSf3GgwZ6yP5AQPocRfezcBkZcBDMufttzWvo3woCMztoryMtzqH3Ad7eG8VwvCNwYfikHTjK",
  "key29": "4KcrZSXDLXGXPeycFUdBoEXeweCNjWrocychsPLjaomAQkR812Mk6Bp7X5yCNY3ZTVyGmiwT2Y65fsnXjuqTcPBW",
  "key30": "5j3uAsbd1nh4avC3kugeGVvozpNLS3KjeuaG9dqNDAXB9zJz9ENhERAUHLRHh5HZ6yJdirz9MUzf5tYScnw4H7Vp",
  "key31": "mmKg1yjujoSqnsTkVCpKTQCFsXjEC4nxuw92GT9b3YGHfgPgn6SwmyWwxxZuu7bNDZWnzCdvAXrHrSnNToDhxgu",
  "key32": "36fQNUSAj7EPisfRNG1AzBWp4GrsHutJMLsyznG8ACgEQd7xCfPZ95n33HXqTs6XLyg9ujz3ijSTkXs6G6k1TbRA",
  "key33": "48CQSX36A8kau8tG9GLbo25nYJHX1Zk8Wn8Y4zaQw2xh8ZDKAqjYj8xNnqKFfkKH7Qj2npv59TeQpEoxwaGf8gYg",
  "key34": "3pomZKBckqkVSTwqDocNob7bSrD1WvaVd2zxNN5oTRdEgBzjCijDzRp9mQ1AJohCzhnQPKwVDxkMyMpH1iMT7Avb",
  "key35": "5tVwccgtezMExWLGmCCxuA4jaMvM47CnXBwhybvk3wpYLA6WPiB5AtvpCkhEZNoLV8MrAVMDYpdHchPkEXKMPB1N",
  "key36": "2eETJo1GyVXUgZR1wGu4Vvq5TokWSm1SdWnZkzwoN2cHExF9xQyjoEUCoSYo5fyhp9JmCuzGpwXmJnWXE5MsiPxf",
  "key37": "51E85Wv1LYuGMFLwRXkE1zunuA57jHBucfnZgK1RbhRU7NgawLV37UVrNRv7iyMUnEBzBppHvKpkeVPtfeEDoH3q",
  "key38": "51DGgYNhm6GiWnBckghcFUok1mvqxLEqaKv8jSzcVV2r1MciqmSUT1h55m4e1SxSJ5t6XPWmrUfg7dhxQLbh9HnA",
  "key39": "2eHo8iSoNCjuHxQXME21Z1u5jzS1F3GRyegBwNEDUeWp9g9ezM8T58jMwebnkSQ57G5bY8iAzGvnrB1XbuMXhHiE",
  "key40": "5jcVdLVea9HgD57VSGanZz1hLz5AA5bDNGUVZARK6NRjVK5FtJHY5JLiT8Cc9TCgsP5Qzd2yk2iBwJCkBMNQE3sL",
  "key41": "BuaSnz4LewgerHLPnHiVxzsHUvia4KZW19t6heh1b2ozvFXjRMTqrPD9zqcazQjTn9pK5gU1CAtq49KyyeBRVK3",
  "key42": "9FTjH2iFWSizGV2LumjWk3r6mds7w5XMLivEaNut1eXMLVpT1CjbAxiXvS2pzkBmV2zCtL5i9dRHYt5mK3XsXev",
  "key43": "5qDChwULx4g8zxBYPuAXQ2tdRGjiKweiNALNUnSvNS6WU8QX7mvWG4CgZKPzUpZXkmHn4df2TJoYp67MjQTCzU6Q",
  "key44": "5SVPcwJztxFv2KvsdtUN5DuCy6vsmjGSNSHDGEQ8gYx1xau5fAn5uCNuoTZKYLgTjLqR4tk33GACbhYsXxwui7LV",
  "key45": "3Ptjg3VngZx97RLwyupBS6454zibYmr6dxzgraFfM8hsJdJ3PV1hH1SiJcnEwLAt9RMtyzbZncYcSWkz4hNKJUZF",
  "key46": "3xH7MhcVTjtQwmgJjHkYhPVvgut6crR3DQqNHTXbTAPwx9Q5Ljgkn7fpMbVz4rQmjsTXFzfCx59sSNWXy4mv2xWj",
  "key47": "2E1RuGZUxyXcAJG7r181Df2FJ1PT419JwAtdc5xv28xBkHu4oFE8FFtdfNhVhe5pDAhz8XxBeq1YGBoqcW34ujau"
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
