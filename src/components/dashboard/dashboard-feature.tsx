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
    "4jDyGG7nKPBvxwHT1vEXJyynC8FVw2qxFLzdZLj7JgaofaBY3YNvGP7zZ2ftwEHfiaEoj8DAUSrs4VrKzvezEEJK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qmy3GMNDrcfp9U95Kvujeg7BCEMaoZSWs66Q74kuuu3cvD7c15ogpKXYjUZXWvbV54j4tSPdgQ8Rrd8enyRD5zU",
  "key1": "3jeqa1pwiekX4DDDqt3dR8NYeA5Wo5PSXigHsCys1eYPj27STVsqhsjzQDcJiypNA6nLm4kSnkvSRCxn1hN7hQ91",
  "key2": "3aBA7ysBascyUwWjKwFhhTbxKLs4HHMvpJDB98QvScCKhxSNtxScywznZ5h8FqknNCpxTv24AwFvWa5ZPmdoyWST",
  "key3": "5usKFHrJtfG76VKtb1zvTSrmDXyGzxpJv8KsJSg7TQgRTgJtkJve5T3EsmcU238q4uBpQ2XxRtptdznSYJbo58sk",
  "key4": "3KzRRuFCsZnJ7haL1Fm6gtQWNFTp5F7cuiefiofJrsJpmHNH2qebJzmqHTsq4xYeW8ca5wVAV5g2P21CzmZJRyWB",
  "key5": "4rbc1mx8dsqV3UVvdpVPze5sNkJxV8GxSpruvtE8PNmoxgPSygjwaV9MVt5s2SupS5UKdxnYbupSA66up6LdtfJM",
  "key6": "Y8hsoZs29afgfDmj4VGFR9C8R7mjo5mtXwpAgcerJYfAiatrum9dhrxRNugDe64UVjMeEBsCfFLLxN7Fu2JGqeJ",
  "key7": "4HWhFQwXmVgSBhMpht4YqpmiW9n6qcm5fGpGGHcTVbKsRoQybuypkyKJdhmmjsD36ztirDUw98LhwLoEVLjP8EZF",
  "key8": "2Dt7PwA5mkgBBXeUKYEWk4LhrhwFDKhAFRYYsjdAcA361xqDMGqwvNqRMFQzTWzZBiK8V7j9vruyfJdm7FqsB573",
  "key9": "5LNE95gRzqYtLxHXfGwbNHenkydtcboKPFZYrNozs3vpA1kK1YtY6m8VjAZpRotdyeCJot6x1TvGCVehr4swmxoj",
  "key10": "3dVSYSXUr33LEHB2V8yLt3cg8fgjZ2xURa9w6urRFBhFiuDerthVtH1wFMpw31keiTxXCVt4gwoXntUEeyHKZoEK",
  "key11": "2DZLRZhxSaWvK4VRre1uhi2LtJFUzXKXDNoWxPCC6RikxgZPG6iTBHExpi1D14nJgHvYLPW72gcGvN9Aftc8iYVp",
  "key12": "2qG6Siqksyi25zgvzum1iWJNuCXuh3dw9ZFGEtTujeeGXXpX7vowbgQbXud4RseXisqQ9op9yM6Z1nrtNkHQMz8Y",
  "key13": "4jXY5ZGgrjvbfcfuYVMAn32LohKaLJy1qtvzLLPrV4FzyxcLtMhQLWmCuLrRGSKBkCYfidBAASyX93LZAoU3t27X",
  "key14": "4vVeFsufPppXmqAQGxyEgawtrwu23EhwDNDqEkm5zjcYtJBJ9QC4Jw1GqjdvmBaJUGuHWeBzAU9bL5JbMdZHDGcz",
  "key15": "3odcknvnKV3PvmArhPzsMQnPouEf7xdiCCjNdFkXSfBjxvEFVKAsUWBBofK8tsQTeQtMByZsgQyLhBfP8YTYRzSZ",
  "key16": "wV3sQhoH9f5zPhXCLFsMn5Xbc3mtRZGkqtQ1jXamDA56g46JjSoEriXYhGybMiWbA5Fc2N63PnP5eQyXT4B48aX",
  "key17": "4HingsbqMUejcjx8FHY34mT6HdLsEAp6c5yFnvfWsk8EcSkwdhPfGD4MJxbzbX13fjzG9hZM29eyp94HTLftht41",
  "key18": "4EMbRQDcC2SuJwKjs6yQdxVwU5FZcxJ16xZwxsyRdXz3Kc55kcBycrLjzHd7GRhjK7YeYqjQcZBNLFKpxYbARYwt",
  "key19": "3eGZ22yYJX3VhVVaQfUXvfeGC5t3XLkRA3XieqVUcLy4TgfTRWxvr9uUwSeueg425XsRjuPcjLkJ8jTjvn1b7md3",
  "key20": "5T9YLR6vaRx1sK2QvxKdUvLafh3Nruhg3eaW77ig5BtQi3WDqkg37BGp2Tuan1Vvz89wo8vyYcPZqW7X2QMhZEEq",
  "key21": "4DejKZY8qr6qKw5nt7euHiZfkXDXBMCqeZyzTjryB7CPRkJnBKnV7gbLPHoC9Fe13La5QfybQQJF3GE58oyCzPgF",
  "key22": "DLYALtuqMG8f7mKWhadNWNfBdJs6Xh3GZ49hayf38xcuP2CUuoavgcE5g1rupDUPwkUscJDfsHLPJXL8Ww7grxa",
  "key23": "2hpbamBbamMaoSy7e9A3kttnvFda7tN4xaakMmpXTMA53uPjeZ45gR3reVvHc1RkJbLqxQSku1v42vE2DfM6qkJe",
  "key24": "4d9nQq7BhE98UGfajtPXqVxj6gqLuNNtu2AM6iYkc1ie7iQ97gV9FJUvtEYt1QhGTMqbZUrYoaYgRzSKEoR5JPJ6",
  "key25": "2oweXgaZX3sXp8Uxhkkpf8f7dStVhbTnXnUZDGewQscdiwYGNdwKKz49ikrRxd1JpmHbtv24SuDrwMBL84BSpxiA",
  "key26": "4fFWXo5TUKKAgjsCCi4857dbkW49fJt2AG8oEDRzsn5ud8CCczHe3mYvVMripidMTwv5ioZP2nT4niborzo4s5zw",
  "key27": "2hmhbRYs6GPty52gh6ChcBfvQ9gWVzw45rrtbAk9JutNRQozKct64uLbS2uvE5HvmQh3UP8rxKSM8FZhEdNx5NRH",
  "key28": "2aSeKYUeGj8mcqHv6PDxuk1ADpDXLJLWvyaT7fm2ejF6bEk2KycpH1PGg8U8JMrjA9dqd5BwLcHvhgntjABVgVcX",
  "key29": "2bT4HyWd9Su4W5oD1xHj2mnDKovGTBV6BxJbek6witVav8T2dqFnZokADpTSm1pgcxMXcHuGaBbtUcURohgZ67T",
  "key30": "4aoDVVhBiDh3gscxLDNvbdvjJE1hhNqiLVi6UqaCtqnqJMWPQGpWYB9bXnCakrXMNypgNjcD1b18GRSHL6ftipHo",
  "key31": "66y8eDj7dpjHMhyqWAh4otXoZZny7mX8zi6Dxzw1BAgvXmXcyX19VVDFWmmq63nveEBGbDUd6MnSJNGT4Xjpdghw",
  "key32": "4ZT8cLdtLEXcFLzSrj5CsVahzUy3jToZyQwqXYDcKV9Bx17BcSaNNZh7DW7s5QmrA9BJV4BBcNZDvm9j7tm7KG8r",
  "key33": "2c1kAQ8Rk8LATTrqKaPKnSuQV77XW8k1Qgc9BrWVFjx4DmE1AiPHyUV3aQcZ32Dqnm18MqTT8mdnN12sfrWVPpCd",
  "key34": "3grNm2BDPLJvEChZckn4F6raHcz7T1FxWqDjY32oszes9nMmZvuDnGX5wS9jzJTdQiRHKqrJA1P3Ks4fPhTvUMyu",
  "key35": "4p6QcM5PD4yixk9E7vfE6XccGwQLt8kCDtMmwoUJdE7tJWjWCKGVcer6FKAJdNf5Zyn9SUibBfy8C2eQsKD1gj4h",
  "key36": "gzZjtk1iyz7QgXWBPE1cNLYfrXUyY1H4GBozCMeXVLiUfzFFVX67TQDdDiVGqhiPa9wq1F5n6cS69rjEKbZ5Bqf",
  "key37": "1NXq471eo1twARHagWtqqJFWrjB7tHykVTJMPDxQLNpxky5dy685fkVoxxovijHaZvK8iyBEFPoSgsB7F4CLcqf",
  "key38": "2ZHHkVXMU9GjrRzSJFeoJdTcA9YkJ5xkR6rmcgB6FFDz931QCw7AniRhuDJkXo3y5QoW2EyBKAWctB6SayiJJSA1",
  "key39": "5MtGUNvpt3aZ4Sw4RWMNFYC1x11MmZeBehP72RTzJ7TrQkBCPXFJJnZ677ChunwH1PkAbQD9FWpjhEdCD5WjmHom",
  "key40": "4wcrDoNdgWXpXtn1yKpVHP4Tmf5m281X7BMTgPQT6wN6Z7uQHSJNeSGbVauCybYw7QXD7SVrjfuDYs6v8weEmdkG",
  "key41": "3VNZf7CQKSzitwRm6FPFhts6NyZjXMVcE83bMhtxHLszj5bHApM6XrbPExdAjSruZqQUSF6amD23NuKXV5B5tDZL",
  "key42": "3T13VCyennaTbLgjCxS1upv3hdMX16xtSpji8cjQBCQH6jjDDYrbcwrH3ejZ7RCFqZUkFxyvUCjawnPuZosvWMLG",
  "key43": "2dj4hF8fSL7Jgrps1JscY8b9BqX4BHpvLN3Nij6ibzrn3Njmcg3vPRyGJyM6hQLFJCvdZMAwLRBapBiuLAWjy2mS",
  "key44": "fbNvUoZ84pMRwDFdHZvYwUhKDSs8ba9A6oe5RwbNa5RTaFJyasLcPmK1MJ83gVp9mxeRoM2Cv47hTxQjp8XsZqn",
  "key45": "3A9yucQAe1k2kXTiUD3SRufahG7F79rzyyJZQS8cztQqCjaRRtdDPQK62RzKxfYaMT3RWycjyTwyxW2t4bjQw3Cj",
  "key46": "9B8ngQyneqNXTS5eBp26LfVBxdYN1LyD2tsxgrPyqvVmGfNvAA17onjsbMF2JqGqdSwwB5bXTotfnfER9NFzwiY",
  "key47": "4Fs9CZpgwsrS4bcwfwsA9zNfgw18bVD3YhfjnTQQ84VHVR8URTnqN21Xor7Kz3o7KXGwZ85HUE4o5QKTo292TEJW",
  "key48": "5yxDTHu1LQkkHyTaCePtudcVfLWTsQ1d1JrdPRyxxrgM8NPugrbrpiVoY1uQZ1Yz5mbxZdoX47VUtiq63DEYso4Z"
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
