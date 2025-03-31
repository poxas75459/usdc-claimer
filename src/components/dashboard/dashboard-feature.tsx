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
    "4PUeUJBDJCih1Gey2enLGoinPB9K9Fd7dXFyk9cMhiUxYWXBxLY4EJ2BHW6SX8gncAs3SxgYvVdAaWeZtZgBsi2v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AHop5NSxLPzb7sfgZearehFnx9UWAhfdTYBcJ2FAu2uDNMFwDLqFnU5RA8vs6wwZ6t3cTUwKH4aK6oFHmEHqm1i",
  "key1": "4pBFQQMwihpsG8HjyAvbqD33uDBA4mhYWpmiPcNb4qUpBGtJ3zw4t7urZg8unKZEat4bBuiLkLneB5oA2Wf5sCbJ",
  "key2": "3iqWuYMkMNRFDDNQoYi5erYKUVJnztzhD6eDXHX1HMKTX6WDgzvyK2PgjTjYunqWNMdHUC32shrb9KRhNC9BcAEr",
  "key3": "2vMgjRZHoJd49gTxT8aUKPxHSbh8fbWpbPpvdpxKTz4seNg2qG8ExwGpZ73tW3YaMLAHCae6Qa71ydajnVHZPpD6",
  "key4": "5mkV8A94K6awKR7ijrUb14M2Up87i1pjefxGaBVsxrgptcHMv1WTqktaBfwcueSy2Kxbb4juK1kymeNPfPhvhQ7E",
  "key5": "5uUwCLwSU7jRSFZTDcxPTRwtTmQejZfy8myNpXQ967ZHFZU7dvtoo5MAU9tWFupHitDRrEbo2A8qvMChqBYoC1Pd",
  "key6": "59Jov51R3iEVkrySCidvgxowiQMtb3Dmdkq6SvEkqsnRRR8FA5U4gxdXUVU46CVjqYtE7aCfHVtxF51WHwZES8MM",
  "key7": "4rYiNLDnk6ofqSEoPTk56EtspG1ZBhQ2T9ViwPi2VaV2jWwnDDSiwidxnsNTowrXoYG9GZGMYuP6obCBdTAfdzi7",
  "key8": "5wC16QFuvpg7MqMfrMYmR17VX41qJ16TzHuzq5WrUUtqjAZbivn2qSyDnK9DUCQTTTnDgPYEqJtUGE7qiLU8xeu8",
  "key9": "3PSZYzCM6BHnVvKkx5Sb5WWoYfz34mMC9ovWqttKKBg73QrE9pbbBMp8coK9mNLQSiMSM8Q4qcXeoxac8FoCq9Q",
  "key10": "3FtoZo29F3KjniDjEtjYR9GMk6zpQ1GKLhQCNAJfpYxXbNxgwjcunVtPc6jUVFYNizbkqVU39k2u7JW8woW5Grf9",
  "key11": "63j5nzPdcjxDJiPYBwNmm8ZCS69GEw3r1y93MdnG5kW5kDGM52sJzpKw4geVFhRYH426udMfVgxQato1YTeyqSSr",
  "key12": "2z7csFqj24DidKtzLte5mX7EajgCq7f8ZvnETet8UFondrDi6V4S4sNGHgzD8jo4SVhwrRL6yhha5yJQeyKV6q3d",
  "key13": "4tZYjJ3RV3cLU9iQceRMdf1oBDCygy1AeL1ingrZfzDfuhDRbCdS1RNw8DfvB5C1KHt7yXPjvGd9si73oAAS5ETw",
  "key14": "eXEiiYCi6ky153fPdJy57BXd47p2eFzWVhQZ9y4DByngT4H2Ny59T42GtVq8SMySv1aPgpMgZHr6q1ptRF9ceBC",
  "key15": "BQC9hrK4oQGjQ8xsjViHeCD7SjPkBc9i8zwgxntFBnpXbjeMdhcFmnvgJkwn2df1RoeLG8QipeuQzzMZhj5jYTM",
  "key16": "5tD7K5iJNAvPKGG6NqzGQ22qZER43qqgEDCfPiCAgkg6qCAgHwDz6B1mau94X9GyCwBf5Nc2ZTo9bDkAK3xjH9gx",
  "key17": "eT1YD9Ccrt8CJ3GPnMMQDrgc7v37LdZwHRrpJG6EoSaF4GrraYJKEw4ubqaUvhcq9uLZH3faPZ5XFZJW3YGrrVm",
  "key18": "4UoXQA3bFqWTL4LZk3hHijUHWaVDcf8Srd26ysCKdboaXq6imEzjdmqiQq6LfJf3fexxUWszA556Ks1MP1SqVcaw",
  "key19": "3QMhgPDLhf77NDWF5jFrE4ZwxADuJ6XCA9nxn6DUTKLrcwsr4Vych1CuEtEtVVEvka89jF7Zqicj3jWtvcNg21P5",
  "key20": "8C283zCCQoZLGnZBzzEgGuory4vX2SaaMaqjWnxspjy5uA3sz2VUpcaby7uXvLXSDA1SyD7Bn2teDHv3MAbNbva",
  "key21": "2QzZ7axgEG1W7LE8MQ396tqN21GpFEMU3GHos1Br6ncgpS9etT89wFu6UHPZK11VP1ov1f6N451g99wUZRbTmQJy",
  "key22": "4kT7p8tses1xx86433z4hH5hQdVWnR8tn9HCeZyUxgMd6jkBiFuMrcoqc7HyywPX7GLAzL8f5fNdp79wivPRsGy8",
  "key23": "5HaeHrccZ7cJyQPWN5QdapFMs8e6oH9x2gF75hghQM9f9D9qWmVFMjHvxkjnh3bYVf3LxTDhzqXmhPvrFbtu7jB8",
  "key24": "4xRFmHiT5UHSaGKH4MrU21NtVVr3DQLbQDhnN5WDVcxF9HyK2Cpa72TyPSEnZ6KtxaoRe88PFK5sZa79a4aTptvK",
  "key25": "U5W6eLaDjQaBuRmk3pNq61NLdY2bv8rPENdLj3c8dpVr1EBquqQaywaCqW22PzLfyZxqd1b81nC52Sapgpdv7TQ",
  "key26": "5zTmbrEULeQ7f6vjfAyV72CYdaf2xhe9341VaXXeTcAat8h2HFJ4i9mmViMMZhuNBZjtLiWtjC6xvQZh5s6vD14u",
  "key27": "5KPwXmmZvj4Yg73MbpAZbcn1VopATb11LJb3V8sY8Qpym5KrowGREqmCuFNzm73gkK8GBMdGArH2dRekh734ALps",
  "key28": "4YcWzpskF1PEcatSCwvy3dgSV2tvDrMdMb1UDx4217zSCFSjfPfNiawKuwRpozhvt4UGqf8wUfqAAwSN1cCnACce",
  "key29": "4AiC4Tx2uZoVwjhC89u2kZGB9ct3bTjmhCwqHkkotC5ZksFNvGdiZEtqwUtTqaCvdBPwMDhS8JL64Lb7eafwSKYt",
  "key30": "5tqJ4kwq43CU5H9TQkA7u6LiNXsBwmxoMYikVNnGJzVvhRbktFJ6eQ3H2EtwhweJQgPcW75ngzcUruWjiuDKxyiA",
  "key31": "2oLMcsoZeYB4xBMN4Zb9MnA2hhqGZQzYcq6Hx5c4ujL7VcF4Giyyvg37GCtpFwzricyC8dtYpr6V44C5o5oyS46V",
  "key32": "2YSZDZTPN6qbjtRoj4iZQdnXUSZ7hPCuuWcX4MPNnvimH3NgZGRBTe3DMJLmNGVo4vET72BrCtNeuVKcaVQFZCqA",
  "key33": "3VWQpVA2WtnEhm7eM8dJWJZHCcNzkNTW8XC7wMNQajVtDjdhfoQJrNcwMtwHVp4fTbEtmAVnibB1gq1wpGhTTVsN",
  "key34": "i29AodRe9TdkUwV6CygJz6P9bKtau8g7ftjyu8XmNdxRqW6oFLtCaP3qYPcPzTCqSv1QZuyuFAJ66JisAtvQ8J8",
  "key35": "5C49E3KoiK9sgkzHbvQ9c9yvHfrTZk3X2MepjowxGpwvP8jKdsoPTAcqaGrMa9K1c4WSGknqdrAgvRJLejjMCbUG",
  "key36": "4tTuy6UHap1UjMnPRfKQy1Z83fyZDvauWLswMKBuqMkUEazBYWuVM3HYeVP9CxuTAua4NzbGyTDTmVbx7yv4Ygb7",
  "key37": "62yHDNFe3JHcA8uMhhvpCmRFHoLmr4bDaias8WC94vNcZtbwUoQw39uTye5uSgrYbDcknthJhfNjgxjWBVpJujaJ",
  "key38": "42uXYRaMMsHCjGa4tz4dbFqTBCrqB6pHrtGwXcMJKoe1NeYNdpZqt73aVGLxLE9BrByxtTXzM4j1ekVYbW2TsErN",
  "key39": "3Q4RqNY2PrTYgFvxyiPBY8TWLpEfFHG4MzbXppjjzsbMbGYN6eJgxASgQp8FbUr8B9Ry87NtM13YTTwKwuQ31Km7",
  "key40": "fBxysWvarPr3LaUbF5Rd8RWrKysJuuxKHhY4HqojrV72wzELP22WLfJySCuzJ4mF86tMEGsC85SPYkgwrRuFjsB",
  "key41": "3svwi5VV1saug2Qp9FrG6Y79J8Cj347nYNsZ1r9GcmiQmenzvCKEdr1mKDLyrJ9nAF2LsX6ucBGE6jcjm3WRFRGd",
  "key42": "3PFJjWtP8brqLvomZTjNS9MMxtzDYDZhFtz7FaLZ5FYsgEMEFDp6sc21XXFZ5cn1URFBg9EPb7g5HXoK9LpUqjFt",
  "key43": "2UUuYaFkJf3PAtr7vxkAsN48zFjUeRgTvgCiWenkTRQ5Jd7DN2oG68PH1VayeV2PBd3JvNsGiKdBUAA5YRDBvLAx",
  "key44": "5P6xc5rv8jWP8YEQJR1TjmjshP2wWw7RRSBt3eHQPmyhAv6pLru8Usfd5F8gbRkUpoJEWyqJLMeU2P5RKfbJ8Ase",
  "key45": "3qHXWaGfgHDwsTc2TvPVzfSASKFZYhU7JMQDoBPaNfFH7Fwr6qEuYhNL12am6ZXsLKoxJ8k4NCdykFf71Rs7MRUS",
  "key46": "2Jj16AGKbizgCZtouBFJqLoHS88JmYVsTZpxhTCoPCs7M2wvsTDkGdGwp11dcyizaS1YCTqc3yiG61Wyig1prJAL",
  "key47": "ugKPPiRo4g9s4kPcGHCtn7cTyPoGP3ZP24YMCi3Q4chhNWfwbutR7TZWFbYnyvVi5EqB6Lzc4eqfCFjnBRPBqzk"
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
