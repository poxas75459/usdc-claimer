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
    "QxtGVn6VwP3XedFWoNb5vwna8UF41kvgPXS8FnCCcWuoq11GomaCZBSWAbb1Pv233aVWuLY2Lxu2grmMpiEHiZu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dCpisRaDDGe6BVp1wKkgzQSQCybRAebq4CxcympivGApwDF3bt2oixRbj3XJDPZNGDDXgzYbPhq8P9YmJJzuF7t",
  "key1": "3RrqwgWrDK2D3JxuKVZ3Qfo9xQgZuqXKBQEZkRxndhwAVFEBSVJiozGukAntGTiHadYqkuMVgsLkaLQj23Vuzo7a",
  "key2": "3uM1fAwtndpofRDpA1X2u4UDujXAeufxXNa1SZTjJPoCvKTiUmRU6qGNs71yE6gE1KSdgBCeVEWSUx4r9Jiut3K",
  "key3": "3M3ixn9mqo59LfNyj8UFSmq7sViqfyZhgfw7pVbSmtEz7RoJxeHuKoiiuv6yBHHRHLr3nvuCo6ajD1ueBfYxTaKv",
  "key4": "3K5bEoPmGFtdfWia48BrYKJ3jRb8tKtc4Rr4BuCbuhhGHmJGJqTVuv7qiXGC1311cdQfbbiepDCX4d5znUDzRRJx",
  "key5": "2as4pyCaQ8B4YUPKLjyHomcN2g8Bn7WeuLwGuxdwQS7P8SX6LvSu3Mfey52rWHnBAaeqVMyR1MQsK22C2fQ4Rrm1",
  "key6": "2NMbRJn6anrKyp8ZUnuK4XCJTfHMfzYS2LJiDPuiwXCaNub5a4rRRpMVLXdgW2o5m89Do2FFJXwm7HJvddv6N3Xz",
  "key7": "2VwUpcz1kFqopXGyyXd1uSWeCsa38PaDiDyLx9E9NGNAGrr5eqwoALCg5L2i9VPrCEtUK3Vs1cdYkKpUodXT4eb7",
  "key8": "4wyfcj9TKHsRMmFGBdq5ZTb3HXyMH1ZLT56S47EHmVX9iHZw4bTqiWZwWhbSssse7TpRmQkso3K8fvzW18nuHSpD",
  "key9": "2n9Vxm3hUbnQvLTe8wWed4NvgHYsL3NXyYv8nLb2D3zGqnMhdW6t198CbVcRFhSp1tyonXpVLwqKVkV1ARCNsjPk",
  "key10": "5kJ3imN3AbX8CAdJijC8rizFNnGQsdYfi2Q37hReNf1p3S95JWQ3GYF3xnYqkGGu6spbrZDeHQFX81RsZa7AaGJs",
  "key11": "5nCKfd23DjbuAF2bcSmsK7Q9zQ7pqpEVwakFNEMGDqYcTELNVmF94wz3PXwtSy5DBA99WbBAwJdXXtbWRECQWSoP",
  "key12": "4V8YBUf4CepDE1UUpoRFtP8jka46QJfbtxYQJ9Sidjykk29BmC2EUoKB9LoWh15X212NxX6A6hzCn7NdqX2x9YtW",
  "key13": "6KFS6gXrNYfTcp7cs76kC862o266AMxRYDLM33xPHocjbdN5ACTJ6oZuo1X6yBbZPrRcFEsw97eMAvtjNCtbdXh",
  "key14": "3DXZ5NqVfU2pBHTWYBA5aPzJuJjxsUTTc4gwSyFw6KXMhbP8KfLy67au2RVcdqjtg47wrEsceTJ3yhdBV1u8TZxF",
  "key15": "53BZYMbNTxKiRJy7ER5x7kVQrUmBYVuPufpYe94gdk3C419BnvJo2r9cNeGa4DdaJECCKMJLadMw8mxdbtwdh1TY",
  "key16": "3SpRsAvgb3pRV9mSP53Maht5Snh1jGXUEYcWjZ1yt1kTSWwu1sv1miDoxLxErwLSMTv18YF3xUaUzzSo5YJq9azW",
  "key17": "dAkFhWCYq5qJ7zcyarohFKXzzje6AhiufcC1YgPbfdfGd9sJbMxZqUH6UKmQ7vFxZkY8U3whPqWqAkrvRMUj4n3",
  "key18": "2QGUx5eScwoSH5riE8KLKD4rwuKZfq1G5G1QGJwgiZG2EeHYBi5jEYmKwJvCZ82W88PNDmZG7E4uf9F7ZoWdC81w",
  "key19": "5irg3tVnUtd81hgiM2HUDFgJ12yi6r8TQispm4HZPjFFuNFsoJkxY1aHUL9VgQenr9b6StHqqF1rDTvNCef8VtWy",
  "key20": "2tnU7czYNbJeXdCzm4jKFLzwer5hC81uEGVVqKyxamvwKtypsAyf8VcWBGQv5c9MxhEM1ESXYxX3oFQ9TM5v6HRP",
  "key21": "2HQFsixtTyYMwHRuKNh5gSjfEzz1vBCiu8Z6BdK3wGpgawikh4R2mKwdCtJBTxA1axnPn2SzTgC5gsYkQ6uRFRvf",
  "key22": "p4k1K64w5eSnTwotgBks6PJMmsxxfz88hhkwinTrrnpZQQUysRnf2knmjSxeQSXEHVz2DYnExuYqEhsfYaVACss",
  "key23": "pjR2rpt4HK2nXV2LEqVxXQzTjsKK3XEDRvonJRwCMRpkoEo96NxZotWkDE3ozmVsDGecWEazQBU2HzpCs36uTUu",
  "key24": "5FMdqg7tL3ewjy8xP5YNoGrN4vsNmQ7MpZ2Z8kc8rd4yYMa2Lx3AemaqprjYFTrBNHBpLEFga6K48aLYqMsbcVhS",
  "key25": "3q7fqzVKmxUHMuuuou7J2UryNRYJEKu3Z14Hii8361Wadhcvt7X97Z93LB7CXiDUj3Ag61zZUPKtMZmbgotfLS7y",
  "key26": "5WertW3kr3jB73q1L5ZSPBGmySTCYDUX1SS8waLTk9eD1AJf9zpcjUZa3iprPkyNMKKKben3MEjndLtL79Ed848P",
  "key27": "56jt7Fw3Wt3umTo7aLPqnyJX1KqzszmycNgf1uDjAskL8CWdG7AgnUPLPwysSdrNK6bconyJMqjbBLd1rbv9HJLD",
  "key28": "5ioX5KMRgUhy1eztnHrbfMFfUZRhKvqbY2Cnd9cJzApAZoaQDLPBuKFj3qdqvEcibiwHs1dPv18wvnzibc7nBeqV",
  "key29": "ooi28NoZpQ37tfFizzKRKpKCA1tqrG9WCZAJJWAATa2khCdfGzuh9q1kQqoHgCngGy5iv4cBqRFHjQ2C3tuCeeD",
  "key30": "3XCsHchTstueApyhifaPbNosNSKwQtwwpHv2TtRgdADXTyhmu9Nc2uaNrP4v3N1yEjkikMUbDXtaAMMeaw2o5kH5"
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
