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
    "YQyRsX4XhiYeCHYsiHCD1yxgiChsc5fKSofRvbAp4MVRihKysc7hL86qntgecLp4mirQ24GHJRi78B9d7y2PcTm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xr2ac9XUtwPGBrftSyqXdDyDTEaHy8rffhyx9qYNcsZQnkcCWDNMovYqooZC8qTLS9c3vb3wShbYJTdddqH7eLB",
  "key1": "3kne4wAPrta4M165TjFwxAe6fT2Uo8PdBLwH8sUvX2GSdXYRhFwcQhbzCWvKAYZfDhDETUBL1FeukcH3ymy2LQm6",
  "key2": "4JbaLywENtjZPfHWRpoSMfsuVvD83wqRJJQ3Za93HLFkZip8x6gQHEYSk95bwbQnsMi4PviZimhgaEXuHg3R16zZ",
  "key3": "212v7L1XrUWG76BuF8ErkxGQnGDjGSLWu3v51t7xmLhVXygu3S6wVmZzeAGG9XToFb69H3teD8WVMMy1ZxZFFBwc",
  "key4": "4ddCiECT6SgBFJeJYBwLnneUMw1aXg4WW2juhm4yLa5qVp5KEVf8VPxaXzVZSKDGHzW8hcdMSDhafN5T4G3TUMWR",
  "key5": "3c8JbjB8ukENeZyXBERu2YGXjwH9owDFsHDxyWi4KDzuWYJwLe1AEbwjYfsfnUBaa1sxYPt3Hfo49s6pLKmVmemM",
  "key6": "3UtYBtvy4cjWi8GgnfYN6zJoqbvKvDjnQL7u6fLrspXZhoVdE3ARL8N4SRWqiCNW76MJ6G2UNFMkAAuJ6JfCdqZn",
  "key7": "ryMQBgiUwLwZWrHo26yi1ExYqDLk3p3rZYsKTQxJv555iw221KgkMc3VoHBALx9LzcXCCaBiG6Ttca28R3YTrqc",
  "key8": "3Rvuwi2cwFV2r3RM4uqbLGe9EfPXp2HNuSpZF2KnDzfeDg9rk2h1gu1PqtbDmtesnarfp7JPcUSHsrAPAEzB1PU7",
  "key9": "4Q3vvey2Cpsr6Daq3zTQ75qHLH8nEctSiLVhHYaSrPVfLZDKtGv4cLB7wtDiketPVhyPr2E1P5tVLHi2HMqmRmb1",
  "key10": "2TPFuTeDEELGyAnmqXBRTxHM3eyFgf9RdWMF1gkb6XQsbjim3xwCgTZpHrp2vAo8JoWJZZPPbUUJgDniC8DKT5d3",
  "key11": "5hLwzWAxyd4HJpRbccwUWopxeoXdn58u3m7rRPFdpLd9AqhcF47sNGXMKH7PcT77iqp6wuD5aJrRwhRwp5ssCmZV",
  "key12": "QA8fLUjEBWKTyx1xZ6Y2tJCS1xijh3eos6aRQji8qYFLqe2BsCnR8HB7uX2g8vJvc79eT13tDN1qCG56igC88A7",
  "key13": "2jXWRkpn5eEchJ9LXf2K3ZtJa3dMjRk1rZzMjjcpgyvTu2EHuDykyRY23VXTKgxjcRAYx5c2JDqoWhc4Tc42STZa",
  "key14": "hK781EgBHG8tiBFSVzeujAN2vThxYh8sUGdDoHb3BDN2MvcfSkS2LpdXorm9GLxzdCkNXWNcQfkURAACqFPm2SZ",
  "key15": "3yogWtyR3HPc42PWW8YEQfSfqnviHmCyzqd3HmaukWcSc3DTUFw9d6xJFHeUxmM71CZsvBptZR1FhgyxfRHbmmtS",
  "key16": "3JfRQJmskz8BCvn2PhthTmWbHiGuwdnvi4haVur9FkioaFuXgCuYDeiwahVgU1vyK2VnJ2zL6FSS8FVoWy6JmUyr",
  "key17": "4RapBBv92hxKysqhJqGbC3BsgCJFzWfUyfZqtTQVQNbZQDkJSvdGsz4VUTtoAVRwkvDdrpTWACdMsavWqKb5eS6b",
  "key18": "5b61MmkVbvBYEwxi3PN5A8HBzF5WdVkfBq1piGjEkSncEUWB7NkkRpMKg2QsJQvDJd2NYpuatxdGhs9ehwxCcdG4",
  "key19": "22kezQivUVRc98mwkwaJB43ZRuw1dATh8gFg3ncDJqEsUnNviEdsGBe8BRNmJYgfPc5ZpRBBVZYHp4tzgMjqSDuh",
  "key20": "xtsBrwgovh3D7K4Cw7hc8gn13DfY7NpFbqJNybSCGDNNo7P7yhz1yhMTYuZ6mwksLYkyoikrEzGXTtYYgmahUKK",
  "key21": "42oNouWhvzyqEkHLmgz4XTVhqqQaiRd1TreFzEkJoZLhm9SvwtcN88f43GnmxaG5MRrhRZFYfLJdiLtRk4aF4QKe",
  "key22": "4jdvcGzzzjpyZwMCYZS4sFpADHnzo6Z9XdneoA8aETD3gBdKpr2LoRpFyRdhhMbNXMxxe6PzMHuXmmzRrQN6c4H4",
  "key23": "GXWxNWT6PVJcEgE8ZppZtuHskgbXcwdfGP9oyAqs5JJ5WZf7h7thoENLTGQpyarZWs62MfwWi13xD2N5tJUC8q2",
  "key24": "2Pun2D17YaR9ad91LVgwNnccHoZb4Kq8o2o8Ew8vCrDCvtT9pPYKzcA8VHDUeYQkmQs9EKZPk6rtYKSd2f1WKUDE",
  "key25": "25tSrtxPTmsGMRC237kS8Jdy4bS1S5Q4wqLhoYdiFb3HTbLZGirEHDGpsWU4fVkwHhF6ULTE2e3Vs8f2nbXr2Mxo",
  "key26": "4ywLrmrHVvni73tvz4SgKaZigLyyMB1W2BYKxe7GdvCEanNAua8baanneS3Vp7HNs5d4bmLj3s14QSB6bWhzEGUw",
  "key27": "5sPQoYDnNr6N8xwKq6p9BdQBp7iCe5uucGoAnQF8jd6kakYruGvMmA5TWcvfDrY8cws4TrvtScoNhrn3Nnamg8L3",
  "key28": "hSahtQkEzpcGjJd1AhKB3jxt9Shr4tfu34AbkVLkJGeQ4VEXJjn7REk447b728iyba5QUFTuKZbzYBoBYSREisg",
  "key29": "2M7njrX7mS1xakz9Lg2ugg7t8URKtnPcBY2tXfqJUPPrjWRpWgLpxA1ohRsALM93xhv52atM6Znq2zt7vaVa3Q6q",
  "key30": "5ZEEfVMzBTxYyJfUTGab32V4SxXGAeT5pRx9tQZ2iE14RVqFSRGhLDRGyEVAPjCwZShYisK4h6EK9B2S2Ck1912J",
  "key31": "4Miy8A5Wji1KQv4m9vaakiSxLWRrXVnWc2p9d38XRMVqUn3wLTptv4HFq99GCLsoNNKXzQfh1qDpztWK5Ptzw1sY",
  "key32": "Yqr2qhQ93UEY5htqd7z4zJ4anvf5DkMNwQrX4xzNfDXgMHxUcixXUrhcTPiYkD29R8xa2auaZD5ndZ2un9gLqy1",
  "key33": "3WQp1vBKRNumgDnNd167MAAGAqq3RFXY8L4GKfYo21VfGRnkp4rXWNyMFdUHPc1bvyvpDv8RanroquErC9n7cYfD",
  "key34": "4TapMnxVp7bUAmwPBKMvmWzv7nFvFedEMm9CvzzjhKNwtPSYSGsaobz2Z1J12MvnV1SNbEqyj9i6Ld5xtLNnRC8D",
  "key35": "3uxeqFxXtZvinYRrXqTDrVRY9U8mjk6PMYKEARQfiBYDi8aGvHRAJN5YwaBXwZU9JJR3XNkf2EugVQUWfNNjYTao",
  "key36": "2mnz8Rp5xdQCKEaaUp2xFBc3V5q3DCvF5Y6JBXuZTGs7nDzdSr9BxH24DoM7f99eqKx6GYxP97HAueJMZEDXxWne",
  "key37": "2GXomySMW32Lm6uYT2rSyLKriLVwNmbD5uduy12RXG8tmiW49mgmuD3v3315ujqXFLiKASuKRmcvWXGXVpbearox",
  "key38": "2UmwpmvwLdS2Th6yXThUbgp8Khy7vEvDFCut6TAp7ZopSxpGzfHXNpdoZXXDjRoA4cRgmauUMynGy1uWXHbpf4uq",
  "key39": "3X7JUTydquHgjhRPYHVVizTom8GVqzX5yRiKzMqxmMuCgymfyxf6FXj31ECEvrzj1XEYNpi8GY9hpHGFN3n2UwaT",
  "key40": "2EoScfxswyCibW8igFnrsMNv28RkC7Ti9vhUMYMzZZhDPz43XNFjfcVNPezZPfYDhMGLri3LkZhm81Ee96YfU76J",
  "key41": "WUcaCX9sqk8Y431rpNAprEe2ptwz7m6sYTo7ow8FUm6gWrpGGzCYcTmscqBWCtv53zszArE1GYWAkZwWYy88nq5",
  "key42": "2HEi8xCMDHDN8A1B6ruA2Xdydd2fV4i3zw869BNarsVksz8onqf8TakDBLWeEPbG9xUebuaTVMUZaxUec3s2RiNB",
  "key43": "5SxdkwQVeJW89chHmdm62Pc6aeJykL9tLyHz7MHj1RJqw3gyTh69CSZ1v4PrJDqjbV54f1NyGFvKxGk2kWHLLWjf",
  "key44": "3oDpsWisS7p6eKv6bFFtPS78pAQjRmc3yn1vGfmZn6ve79HTFMMigTJuGyP8VZqJRbyMSgUZDj7p1tASmx7hGmrz",
  "key45": "42jHx7NdCuWpbbtzhcuXk3p1hsrzYeVenC2Bfwq7FwXZeXx1KJxHg9ExRiqpqaSk1qzoLN4gAoP4BU47Kn2RBcwa"
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
