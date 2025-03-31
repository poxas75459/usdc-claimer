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
    "3WWq3BW8EpPiFx8EXe6bvuVBiKxF1enkB569vqe2SBLDaSAcu41XBhrwGNvfd1eMVU4eeo4sUwKCgN6sSC4bqUzp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EkGjofbrNpVLno83guc7xqquW1pPBVmRPw9UmVXna1UUM2gBo5NrrpCS8quDTtbRTqC5H4vBsgD36UHwGjnYvaP",
  "key1": "3meqdNA1vMww18apLzEQ6kVWPrbZk4bAAZVc5KNcwjH3MjEUpWmPzdtRXbfXrM6qHvBn3RCcXUWMPLPKHef8Wciq",
  "key2": "2rTW9R7441NBJJFWTrbB8kDHK6dTziDgTg8sq2At1fE2v3EUHwqrJ7K6iyBrZTgTeu44EmPRx2yA5aiVBNkyqmRL",
  "key3": "366fKTAnNpVzaiFAhpQy2AdxipHqcqKsLx5Yk4fpXzHNHj6ECSZDR5Cc6XaobjH8gaRqgZx6P9CXeVaZy3EEQYFx",
  "key4": "3dy7aCEL5tiFWLr7j7Nn7zkLwAsL9yinj8HNmxT66sAtkCJHy2Kr4EGMrqPJiyG6fUqnwzzu69PzTvdQTyE1Hi6r",
  "key5": "3MBxfaAPp4E2t3brWHgjm5XnBJp6ziWsGG6FtT7RviRU1mjNiSDQfLEcf6RAfNA8j35NiqvWpiHEzXSrUwQeL3ZZ",
  "key6": "3QWGZ5RXL2XFH2VeYyUQr8YejWZGhitJz5b4tDHmRvgGKAvtC5eoRv6dCmdkpfpGwvYbG7YoVp2wKTvYzex3ziqK",
  "key7": "3pDmfjbBZyiy8gU4XTYcDtQjztuq8gykt2FTC2oZt6NoFQwHYgsnoGHZN2yDjMXA2HNrKmPf1NHyrJdGCG68qmVz",
  "key8": "4nCpugncP3BN4GZ8eMigSQRNSSVhLvGC45jtHaC3nzs98Ff23AoVLN4KehkUCzasrt3JPMB9vz8zsgdpKTAQ4RPM",
  "key9": "3bnSd2reAg76XeSwMT5aGCap1ViaSpaniWnEvdyzYTnUC2YjVTqHmLmc19JunSG354VydiAammgkvApdu3hmbTZM",
  "key10": "4fHGFbSLu1DwHmxUWpCbcTTWs8zMWyjqpEVX8pHR4oJLHpskETTqQ3BoL3Ck2X4CE4G2P9965LuWUi2wWh72biuQ",
  "key11": "4PhCroid24Akif678kkrPo4U8H5VGpbXF6TBF8KhiiUZf1e8Hk8npXt1kDbq7kxojv2JJqbN47qnButycxvb7GBG",
  "key12": "5pVThshdVy87tUoTkSGNodu4uo7WAuD3rXjrghHyRPHZPTMekVhXcj4oxJcYTQC5MBsYYBk8XVVdqJxgjxyqsJ7F",
  "key13": "SwKkrRnXGRMFgV1qgfuAvWMeYvqsxURQkxzm6Fqhwo84hf4oAsT1cg4PBqyAAVH5g7zAmRw44v5nDPegFX7kE4d",
  "key14": "5FAoFH6PYuTrDFkbU1nigmb5J1WFrkNs6BdaP19HNtqtjwFG22yJ2JtJSeBZ7m98QkLJMaRkxr6HHArSKVJYFh3Q",
  "key15": "rRRJRHHunb3865gW9ut7k3MmWvdFFworRwfYrnWvpwhvav75Yw4CcGqzFTnooMNKpQhQNm6drqcJvdVxoEDFpd5",
  "key16": "3AYyMyTGm8c59RkRBi9JTCm3HvxebFxtjGi3wsY9ubrGSNCWqx6PDK2WutcKXyzTojp8AsXKoWMqLKvZ3n9Vzcbo",
  "key17": "4Q5sL3BSuA8vgBH4CWBLE31vvHbVS8coFe6gSbxTxd6ge1tdX7PofKZTDNXk8LTcTtqoDR1krFVGPCd2NbPjgApH",
  "key18": "4TdQTGWiDVE7TYv55fDvomqn1BRsXWTg3Ru3jzb3hiAMs7iDBto8PupwjpHxFEYgsho2xNAirxw1eqHbnrg1e5e",
  "key19": "4f5iwQwLtbjvvaWoFgPSguM2nCnE39ab8wvqzjjy8YxXtjimMbu2KVJQrFcZysJ16znswBRW9Gww69Y2g9MiRQVJ",
  "key20": "4AvrWGdeWphRqP8M6SCcWxqJzgsg1uBUKNo8SzmcoaGvz6xXQknXud8aZL6ifqwxaR1GvPncUHEpx8noY3FxaMBa",
  "key21": "fA7TVeoHTjVMp9pyNcxsA76SwnV2WDKazwffh6mi18Z2VxYK6rH8MMyhY1u8QPAvyPcEco5ZTUfpb8s526TaBhT",
  "key22": "3TYPbwxQ771nQyRWNbNuVAm9eKHGcGwJMce2NPrQ3eZy1ngPjctWpBQc3aYm7ADajZpbkB2aVENJ82rGEnjugs2E",
  "key23": "xoBBQBYXBJ8jmTeYMmz2EVgbLVcCC7iPPt811Ymm23QB5PCbR56vXEaArrBN38GvyRMmAoEgEnEBFKRcbR8vhNc",
  "key24": "4sfJ31FaCekLNru5nmFcyBFP2sr3JeU1tfT5pw7CDyvE7E5uYAfnrqpjGAuXmoqZUkfwcP6j866ZdQsZpKYbxrtR",
  "key25": "TPkFaxDg5CvU26tBdz7ZiN4MDzE7FKZhwqcButVLV7LVHvorXGgYsh8ioCYP7S4YisLrs8ZzPvkhv2Bvr45Xqco",
  "key26": "xEdQ2kxj5rkAxUTKSVQAjsA2pktWY255k8dvR1WY8QadbohWm1vPrEbXXskTi5EohrGuG5vVjmjYWrNf2gcXUW6",
  "key27": "3X3NFzDR32xw337Ecag6X9aiMbcdPJNY3H5QpFxGvtnuhammzwSP6zgoE8skfgEM3rxZvMXnuvEFZgYoeRqgTEaN",
  "key28": "5DcV1B9zgpHDmgP7C3cr3HzEQgCe6naizFJ5mQHLwBVMnQL1gYwtCMB41V18GUG3VPjrVC1X77zYZtEuNQHngPjt",
  "key29": "AxUPKjKEcZ2v8KHNKjYXcXed6JU2PyHQiq5QKc4ptLaqG16wwxzQ1ahSdVBGTUYg6uRAEMYzPsGwiuv5PT25HYx",
  "key30": "3gGtgXo2HvitPWXigTZA6mbG2TyDSJjjn7gmd9quYoobnnU2KXd6HMNnttmbPYeR5Az7xEQ7MC5jQRQez5hQyRQM",
  "key31": "41ftSd6rpjoLvhEQMtmghCsWxzSGzuCd6VsPF3fyDYDRct4cMe6id6ff7rqqdNsBJMZkhsjiQY8zxVCFr8c2SK4k",
  "key32": "5fEote2iF4fT3ceV53L6i4Jz8MfHRRidxCtk2GayGJapxzRFPvdVtK6RY9qg3MYK8mqrxBvxh9GALQ5i2AXMBHVF",
  "key33": "4WEvpKzsv4G2kS3BEPTFPCE23p5eG98BPNveej9TyWrYPLkjJ6fWhSFrb2pML8kEkbkzH8GrvaHR1heKqvYoUpc4",
  "key34": "4oUTr3cZQpTE1tYqGQMk3X3EFHGfqLvghWkgKVgVuquRpTKZDfCT6y5rz2mkeKW8DkQx5MgzPv3zEiaA7tVP6vwy",
  "key35": "34ydjhgh4JL1MvdrVfgQ4nzKf9GShE4Q1wEWSzZAGa28WXB3mYwvBN4ezyZ2p96gVSx3CVt9jXuJ2PLkrUkZvQ1d",
  "key36": "3fVC49bmtVV7JzYzDSmzNjciR6QnwkMwNZ1BjKgdWud97smkt6Yj1PDQVL8f2a1V6ozA3EG1xtpfRuNkaMKdUYFo",
  "key37": "KaQ8JVMnCJTwhCzMQSA3qGxPvzK63kwSiQBppznjDAUoqQKqYoemXNFRM4hc7GZUTA8XW4Yvwk2bma1YgjjmvRg",
  "key38": "5JNX5BqVb1GpnbQFEjrpd8pXaFFkPzjqnYu2NXJjZG3kX3CA2fGyLNupDr4zm5FfUTq17a6SxcCdwPQw2PfKqCZ6",
  "key39": "2RHrvf6q25kNHuCarZCVCWgeKa9zWoQ5ZDfAtNW6djNswgb3eAPKT2q9jvANtREy23Jc2pxrJCKFtNCsnQLHBw3d",
  "key40": "55ST6MFyKMDX1DzLthih1NWXsQaAipj9cA3HF3ZbPpzkSRGgdeJVw6rnDSpvq9QpcNZsa8Cn9Lr5NaJuk71HCiUu",
  "key41": "5DzKwirn5c6BhAHAc2GQLbA9TZ79L2LdDniybfvZ82GTfV9pu2hEhBUgVfZPx885qtYSCTicpdyXSLb29RBua5WS",
  "key42": "EuJ1tKtqqXLRFJizuGgYyMfZJJLFCTKeuW6FZXcv82GmREo3nB9j32sBuXhwtKd1QrvNcMkhfnAmBZVBBfN6Ec8",
  "key43": "5LPqoz6uAUqrWRcK3yN46qjsUcUTqVkTE4PPczx2Ks1tEeiL57zyQNxCkNXVpmE8sub2Muin4gCrQ6rhuue7Nobz",
  "key44": "5VCxymWDquhqbRWpck5VSQDUDhSn6qPAzJhnwHBobFSM1owgEEG2i1xv53M6iDNW5q9SoGUvf4SMoc8uZi19Qhch",
  "key45": "5nua8FZB8cPSz4VusAYfD5MUJQWq6dkCQR6dWjmFyVtHjmizP6RNpbM2bWKNVcQeqFYkYBVwNw3yDrHsScfALY45",
  "key46": "4QGDboJg36ytZgT2Kbkn2Q8BHxqwaoPwKg4oA1GtmaJtGgSPBpGrG4A4BJUAWxzmbthDKDeQLebHEnvd3YS4FcAn",
  "key47": "2FjPEzJKwPnAdKVrPwNHoMJ417yN4Q2dzwtDAnrN8Xmbp295Mdux2ZekS4ES4hdUKzVe1bMqwna9Yrmr47RMMqg7",
  "key48": "3y7PFv7BRztcuL37sWaEggpKhSK3icQPUaAatxNYvKReGVmNGnooT2vtr3uhoUXVzd9xMpnBMJzVfesBjfd8uNHe",
  "key49": "5gp537kWhdqR27XSHhktpr2x5be9sGYzw9588KGPVGk2sg5jW9TdL8GLqGyywD7bnYPFddEVriQAsdm7BZCM2QyC"
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
