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
    "2mFqsEGTaHvBXybZqC9FvHn5pwt7xBbsbr4ATFGcyNPs1eYUS6sDrNCbqDYQkEzmy1dGpTrXN7CqiMWnneVrTgh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cWvD7cHcdoHMHJnWV7ZHuj7U2QtZEf9tB1pwx5UdB6BsefN2yZBVxYCYZx38xnaf3WcQREQMBcgpzDViaGN3P8Q",
  "key1": "5KpR27tDWWDAuAPuRU5mYEJAJnBXcDaPdRteuBXCtpZJgYDB7Y2mfuVMPuVoXvjwbLFbM44HV6aYutFTxF3KH64i",
  "key2": "3Yu9w8mGoZCoY8GMFf7rVgKjSQpaUTGESvZEbEjUDe6FbX4sPKQSFqSVqoQiXNGfnUctgAS5WFhnX5ZqVewAYN36",
  "key3": "37yb4RUzB1Mn3jBNX2V96ScTwvLb3X2KpqdhBFQNbSpXzn4PzfoFy49Zj3diLShvJjDw2WsYpuMr2zmuorAP1GeB",
  "key4": "vCV2WyETUjyumgqHCF6EcSEfJZVhG758CrL7i3gTm8rqcLow1NAEghHGuCUESxhecjDJwjZkfjhCMtUGaag1Bqw",
  "key5": "4y5EEvv1UfRj3dqgCaT9qCDHLUp2StBnVWJR5ZbD7YYVi1gAiRDLRdsoSpeGPL4w8LKH9Xnz6G2yNBv5xEKEBJuV",
  "key6": "3QZhS75gUxZEAE1JAi32gWosR6gkoviDV2CqLokFRUd3faMcAapHQ8gEyfGFfs7DdszG5Li8bmk1QFRHkxLTWh2v",
  "key7": "azLGhStwqj79j5JqZMfF4HFZf3q3Puvq9TVcjCUEt746YNLeY32ZpZNfA1JFEowx1q3nroES32PYNRvkoD71PWt",
  "key8": "2EPoTmtUNmAPWMSnCa1xAU3ZnkfEU7nt8LKn4Wt5vBoAhvzm4TvBZQ5rh7u3FM22zLJKZRSoKK4hj1Ttsi7J38c3",
  "key9": "22emFBLa5c5yud4XHXQSYijskhGPytfMDw9MmZmyp1YJZySWCCfx2X3YXyUoEvgfhr2wni89kuU4tXvuSPbgwrY3",
  "key10": "4qFMdh4H7MugwzgwxYJiapUnh9Ed2dK72YSjo7pk2p7zSPMtsDbW28u3UKKFWzCGMgoSjut3JMSTtKoqzE7Mbbqs",
  "key11": "5EtXGyp1BAFc1KRPhMaMbyxoHcLLguhnWE2UEKQbxwx7iHqWrGocQ2GSBZnzAP2dCiVhDzqnXqhQHkxwKTtzzcgY",
  "key12": "3YmaKcjXffX33TNGEgggH9bBKVruWtENQcNzivsAN4XAjnoxXs3UdieAv2YZmC4EPkgPo9A51GAD9zwXhGAqcBCZ",
  "key13": "a3sdrpz5jaj96RT38hpxaXH4u9Zn3d4JMgoH3Py42HoMnL1itPmkfUAaqrwHvogqDMEbGeaZksrhVMZZMmi21MC",
  "key14": "2jYiET73dkx6rrNjnEf7xagSnxWTMurd89awmPsMirXxndjcFfesrfmopAngF34YikgfRghCN5NJMWkVfijs8Kng",
  "key15": "3aKvBtvZcK8xTud3rfbfSHk31i5xaDikrDSi1wmShtHq7uiZjF21XaLgRsgHcu3atu2KH7d4ZzXSENUN54b1Hk4w",
  "key16": "38AgcC4d2qTPtKddBGLfnLZqyiRXsgJN8h135EVm78ut5oJAXrJ3aZ9kd3TCsx9vihGNDyPvaxhkQxrVyvuVoxct",
  "key17": "Rk5P4wHghazM9ewXPxNnCn3dDG1Ge92aVK5HtWhPvv6AqmjX9hmU3EAa5Twq6YzeR5XZjsC7PAaPUZYAiCKDxWg",
  "key18": "E4eQ5j6ZVcHB6U2BiQNKyNwUm47aDA25FfnQemf53wyPQfX39XTLAbsh61ZNffhcXkMTDsi3GruN8BgR5fodCad",
  "key19": "2ht3Z4swBhWa1CEFC3tBAiCcQetgdrRshpRfvp4PUUtNwchJGwUcrdeVCd2zZHFhyggJaJ6Su4JVNEkme9wMwsqH",
  "key20": "4wDiWdgaUoKTSNkzA6gD8ngtFxMKUbgfa2yduAXGNza9HXRveKCG1jAwtJdrCTUMrArrK29r4eooazQm8xPf84ar",
  "key21": "2qiALJyeGGKsrFjAPj1SJuLubEHUkATZ6fFetf7Jx9eC6ru7H67PYLLTr4voHJkqnco14NztvPqNxAp6LZKJv1BB",
  "key22": "47J58ssYyxXEhT1ih2ALZowBGLsJ6a6wKCwTv5DLuTG1cJzLXN6Qo9id7rF8TYC7uh3dktPj4hqbam48QbNv8yuH",
  "key23": "iK7Sb7aU5YnL78AMpqTc2jE25Gp9bZRHySvVL6FEcMwS9hsrRNq6C9YougFaDZeniV4JYHHZQdveoNYWAhQu9Nd",
  "key24": "45cruDkWvNGFTvznnGSWoPcd842DWDvovR1ZMZ5ExfsN5WHdCL8JqukXVhh9P2TMguJDBXv1MqG1n9GoX5DFWVsQ",
  "key25": "63FWt2xnGjKYMpoxzfY2Zd9k5qenR9FmXsyzzwdyeRKgHsP4diePHJzcmzT6DAbgMpQ7oW2XKufg1zP4KMMgyqFM",
  "key26": "5iYJbF7BJiTj9GnET12Aebn8C8xBJiiNAAU6zKVGLg85y6Fy6E4dfcJiwaPoosS8tJhkRrdKSgRU8xjQSRsHjcnL",
  "key27": "4EwJyv3xzc62F7PvxF8jCriv8btRkfk5VcpphHrSrsG91K4KJkdyjLKuZCNPRTxrPVp1moxwgGc3tiAKotYEwVEk",
  "key28": "46WpRgbmZ71NjTXSXuAXMQDTGg3b7LfmGqt57E6CcpDfxe12F5EFcrMdBkkthRfXdDLy4Kq1xsCeZZGmjTFnt3TV",
  "key29": "4h6vpNz1fY5KcUm4P9vtj4juDrbUvCuCmgtM1TAnnkwqNtv2ipoqZyzpWMw2RXsbBy6T7u8ZZP7r45m8qs3eWxX3",
  "key30": "3M9f47ci11PUe3PDdi4onwP5zkBA1TcjF4dEZ2RYuGnHK6VyX3VMYzfNp89Bj2ddeY5TaLD3fzhUvEFKaLm1GLxE",
  "key31": "N3gZWr7RqksWUhsuqJ7jzVpxBZgXGdGfPnfBUJ53bQBJ1w6bKtk3aGoQ68mpXNMrCJC4JBUQeGWNgVULkoL66CS",
  "key32": "2aTWDzPV4AY7Ky3axY9JHhFkoNcVRGDJx1P38HoxwnkEq4uLN99ZqNF7sMu2rXs1Mz3kzywaS13fw1NzVF5rwNts",
  "key33": "3J3GHLRqets3eB5vPq33VHaRBzGdLgij5VjFzh6wdXWpGMtrFcS5iDg9jxq84ExjZFdipjUwSMwrHq7jVCzR9QWQ",
  "key34": "33uiEqAsixxKa3rt2QTSaXUrQvo9j8Tg6FKtSH6av7hXnUhzf2tthVFwEpUgSTeRZ92cTAPsDbG4XVUJeVZse1As",
  "key35": "24LD314HZLQL8d8CNA2RYAijct36rFAb5pPTUf5nv1i2yddyBC5psua3PnpG5gFZLNx3X7rLJbaQe57afeSfpytd",
  "key36": "4FDowR6LTUag2334RtTzawZeejXXQdjrUFTxbbxwykueU9RmewLjEKzeX7ADu5XrTmozqqpUEEBwUN3SeDz8dWr5",
  "key37": "3j3FQFPrccopAgmH3gq85VY7VViFesU9iTuUJgzmU8rr6AE7wiY4vCeVg67CvzeG3owuphCpnv9v7vMfLgJ1oyTL",
  "key38": "ytzuxJrQDMX2z74XXAFPMjJEKJW7toQMjkXGd6zktiVxyrCpwZVqanKWWo9CQD6QckMPung9EsGM4eFcfkGir3p"
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
