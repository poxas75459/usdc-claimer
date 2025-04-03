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
    "5e6YD6mT4i8LUhRatz19Zebqdt1Mrn3fSLjr8twoCcbvroNAmb2xgV6t6h5Qv8xSSJQYQqMzpDAPBGa9SUxGqebV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LBL5scvUXk9u23LMDHWDNgeEG2EKDLBpsjDZE5uq37GBhX39EAW1aS76QBmeAZ8qX6wtopvLQbzESNaanooLro3",
  "key1": "42nt5wUjNCv7rcAAQmW75yR93uDGXWGhaexfm6eBV7atLcTfXs3zKXcGgLzdZu73U9tiGjvjasTi5NZXTrbe1yFv",
  "key2": "4eJHyPE65Gdn5xtBCTWRcVAdHs82Gh3rqrQdnzeJw7nEKXt15Q4p3cdDUSby5dLMQUM5rDZGbxECp7gwEuCyVLhv",
  "key3": "5CmuFod9g6NGsiLjpXqCzPhepn4wv3NYZdLrMSxyWSUPdMhnta44b6HNGUMsesJ7hTWRa4DqB1ukwjJW8UKh2rXd",
  "key4": "3sHnX4sJFNGikCpZ7aYASNDZvMpEwpW17tYebL5Txhft8v1Y92vw8kqTLUtxALVb76e3QnKSH6oCbo3zgc44G1Z6",
  "key5": "fcZfL1VX6QBSoSrkhBqkQsQUsSN8nPvPuhwsr6CNgRSfcDefgoDD8LdMkQQ5MDp1pBmeyWNe6XrVSX4YL9g9L93",
  "key6": "4fMQy5BX6SKJw4gkaiLZtDEpruNSXjjxsUme1JUBpUoYt2hx46rimCeHxudhwoytjcxdN6dzB3MLaZWSt1mDHT4o",
  "key7": "5inythvFXY1SRHMibmv1ZHSkHUEKtFD3oBthd7Ccw1SW76EusmU3nTfbWu9EGK9rCHuSEApcysvnQNjZNS9RJtmS",
  "key8": "65Lru3qeuipWRLbRBc1ppEzCop5CnCHQDxJrzHUHvZ1rC5bs39bDNSQvYoYFmZsmzV1ZYKGyv1Qze2ueVaa3CmEV",
  "key9": "5bXgspaT77vuTivQLkPQVTyoEz5ANys3dh9hneu924D16AxyU3zvoTybyhnjQX3Ba4R8FQDQFvCoRg8FcMYcG3iw",
  "key10": "3GqRwih9Ynz9YKpUvFZAazw9GRDS2EpJ9HGQrUNV71mDSKXizz8KNzVrYxrkrNzVLqgue61JtSXD6JGc7jY6VyYc",
  "key11": "5Kg7y5NGEqaiFjrH2yLhbFVzXWPpvRYgx3nG85try27TiG8yyaQQmdYymebJvoKMKqaiRdLsF3iF6bQ8n342WzSM",
  "key12": "3xSqXgW1vpbwMoi9ZLenzwjLF4Z2rjrwYu4KnH6uW47sGG87MQdDqcZ6SUhV7R9EMShdG7ChHQb77SzhhdoT34Qu",
  "key13": "4Y9bM5kcVsXesxNcPJq4vMDEF9sBUvzYSiFWQsj8g3UnPxwtNf5arkwa14bpMT6ezpjDHBTJ7qDecQSmmtoEQxin",
  "key14": "fQNNkYgq95c5v7R47TaPkPDX5m6txSypbjxEYQKZjTaSiStWGEvbqHomQA8Kqa8Ts3Rkd1ZXXu23MDCXLYkhNLq",
  "key15": "2HrdKK7srjMPYinqc7434mzo4uCXFmJUXpetbMUSLxAdbgvmohfSL84VaBjU1ueEjRiKqJuRq9XyeqxYrvjeGEuZ",
  "key16": "2kCSgL9V2j2wj2AUfRBEJG9EW2V6f3LPQ3dCdWfPXk4fiaEy1r5tEPzygdEHKCr3cYJCadttLnvfCtf6xqX6G1oG",
  "key17": "2wF3PyzvHtLAB7GQYZE2QgWyAZcYRm2bH9jDcxT2x6DX6M6NVqM8XNHzDbUuaFXKsRdPkZaXGiTJsQoHTwdDwhGf",
  "key18": "4aRE1ZJzaBtP1ijxW5GTqquXNN6hfRQcGHXC2N5LXh2hFMw4eBPWtZm61bb876Lyp2ApzkLYhFVNPUDXRXmwcpxx",
  "key19": "41VxFFBw7nzC388FiuX8c415rGjrUMLvm9eHHQ7UVbcwau27Qwn7tiPArZ4cy8ruKDjBjXVmLdpkdD1eJ1otcgHR",
  "key20": "41iQMcypruKZPRYJUPPQEpQA5tKd5L4SsLtme71Ky2Y6jTFwmRLXQmWUeiXZpPrGuzLb9xh1xYwFrmLYfNskVrur",
  "key21": "3wwSqwqLazKypP29SUjXx8h93Jjavgzt5N9rKJJ9EGZAkqJu7QiUFhETC7ZdigfcuWfBekeocTKHufrMkuVdreTc",
  "key22": "4gBYBGvXxFYfAubRMsPogS4BDXnVfE6FCDeWHm7Y2j91ZwFwGXssapoXyDzgNHDf98a1pQ5W1rqq4pL99d8y6ob5",
  "key23": "5czuSsojijkJy8Zsu7C7mUVzScTh9S6TCN4ouaeM9pKSwM7PWgnDdmRjcJ1fQVNCfvRc2Wxru9LhWaBzkVW2MrSB",
  "key24": "5vFEBMKWL8bEzBaSQjfAyYw5Kt88Pev67X8W8zrsRKaYTgiXiuLP2DAfwPecZ4iEeBVANAS43XAqtfe8TgCqoKgA",
  "key25": "468Y2hfZXwNLSfKTwBEBRbhs7t2xiBvvSBmK5Z1FMry3QA7xwG9hjL6tVugaGU6MmUUgWJAnRLq2pMZVvYSr8Nnu",
  "key26": "66z8vsuFfoNFe6J4KUVdPcwUydzYQ8HhVgQLPyssDfXcp8mD6Kj6gtzmdqzgeup2NGNJ4zeduyehdvXtrxKX65Zu",
  "key27": "2vRxZwFbYgZNordbHXwZUbw3hxpCkcacRLMSRR1o3JFoA2rtvBhEv7kqDJvCjefbNPzsixfqdvcfRBoJ5Se5CttL",
  "key28": "43xNdMpbxVrqT8zrjwv1NvJKXv3UQnYDP1QFoGAV8fbgs1U6QtsqFgBmuZJf7Lur8osjTSu6Y3kYsznhqZk2vJut",
  "key29": "5SSaVcqT7FDDeMFDNMxS3sKEiD6oKMZ4oYMz8tMvtAiY7SpWLyfqSxQA9uqNni769DDcWSyaG5WTF83L7pKSujco",
  "key30": "4LjnYaZsDzAChciR6ZdgL9GJrjKXnHfhm2b5fpJDiNfWkUCsyzxUPF6ugKCwJ1ZEjBgpKiHH1uTpt6Tbm4CvdCbL",
  "key31": "5Uyd1aMP1MwVLx37DusGDtYqcGa1HGfWMUmnjw6BByhzNEoJKUsvi4EB4HZHFCHBpYAddtDBkkgtPhZcNU5sAsYy",
  "key32": "5CDfY1M2J435PtiSZHxvx6NdtDkrhKXrnodyu9zFsKSkTpf1dArVXMc7okrwdmRdximgCD9ZfGUFAYGhtMeusKDc",
  "key33": "5t99omKmZe4pSLymjyvSRdSubxKei4Un2pcjpDbL4AdDo5dfo195rjPszd5ojd25q8nbsgk1ME9oRbcwxf2PHZDc",
  "key34": "Kf74EVHUth1msPXUGxbPprV8TxXFu2Sqs4jr25WQqWgC4Jw6Smd3hYQgpeEK9T7qcwtRj58d7VkbU4PTTUj1jXR",
  "key35": "2BX6KS1exty1SDJ8Yr51z5hDnfdRQaegwB1SZmnh81SqDdqaTNNDR3nPQmT9goevs6xuxCNoapbU4eATctAx6mRF",
  "key36": "35WfKdWYPBU3YgkXCba3kzFbx3t73v2Lxs8fsSSyks43jwUrUmzc3WYM84U5SgHKrAAcv4DAhUACZozLA5h74UAR",
  "key37": "kSE6fHDR7EErTNb666teVXTyJFgzBvUhF5D53SBQL4rSyi8cQHFJfWkgaKcXMXVz8eeezNYe7MoLsqgftjMkoDn",
  "key38": "46cYbubKSPF82CbRj3VHqBLKEQaovSHC1YLmRMy7o1LTu53RaANzA1egr51oXXeE5e4NP2SWXGt1GAfJ5RVj6NAf",
  "key39": "56fWwGPQQ2ccfCX38aTjA7YUqeRnM7NfjTNysDRMpTFiBGVX1ZruwAkSc4zerAxp4hcyBfLN39etE63yuoGDT5Xk",
  "key40": "3qwrEYAZ1Wtaf5kkEmfgMtFZ6neoWgw9aeVTrcbbd14Vm6udmSsvw3221tLdDuBJzBroWQXLvLpHYRLgrnr8NgTU",
  "key41": "sjLTEzDkMWWGXaH5N8LePzEMtNfDkccMDEkvin1FN3qzgaby6FJVjKv94vjteeeqpNLdqZMgpWUvxfx9sj5XCFy",
  "key42": "Uz7hoiB2oA4RDmqgouzejFMi3285UxdfuTpSGuS83xPzBsqCGGmDTavWcn8ixPjDP8NDfzCF2fG8ZFojg1sQGwP",
  "key43": "X661yN2nFnbYuZ1zyRuK9RsDP23MimLcr6yECTm2bJujvKkmnGuaLKkqrpkUo9HW5gvcbYAKTMuPpYRebZqxHkS",
  "key44": "2AMciC4oSg4xsVHmP8j2M5RngNXDtt9pkQki9VxMCEexnAiTXr5AjSP51wfRCmjy3sRJPRT42hRJtrnUg2FfBwSr"
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
