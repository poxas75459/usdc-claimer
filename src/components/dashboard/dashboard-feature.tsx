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
    "592K57baoJkmNdM4ird4WgB7bXRS2QzZwqbVUGaPSQbWL2ddmQZzRZeXaUpSE48Wnggt5LpKeAgB2mcsVuexrKvM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QvLUYSn2DXWi4gXgQGKzz4hWAkiPvqTbCcr6Pb2QSCEJmkRZdfLSuScPmJGWP5YPUuW3PmYw8Wa7nS4Yc7EV5dc",
  "key1": "E5LmMv7mJytYRFMXcJJK4CjMF7YXFPjPhv4asjUMd33Pe6AmkWsZMw6x6Dhga6vQvJJAVyJQRAXvzCUbw28UcdJ",
  "key2": "61RgfzrvPjSna4eV9rSJgLJ7Vj2nWNBtZDv4iRbFMCB2qc5hXrWoLc1UtGxwpGcVFSjLhGyeehM5vRhuPj9JMxwS",
  "key3": "4grjdFtK83z7y4tScfba1itBWBdwKkUKEdVv1yeeJhUzy3tSi8wi249beW37HbvMGQRujcK7ehs5qBB1EvdSB1SN",
  "key4": "adx6d8ZcWBBDkcSi3f4RUmbwyBpcphUmbK3QUQJDG8oj9B9Cs4rAZy3fzc4AyNy4unFtRDMe77ssFENNisouueC",
  "key5": "mRuRU9nGRog8PspTMPQNBf6MW9NbFVjR1c28DQngvhvdbak4Nu7Md6YiFTS57gkJTF6JbsnhUKKa9MMuqKuDqH3",
  "key6": "43kpcVVoU3T89KkNLchiD8NPwMPnb1SJ1orxFb2B4h7eL7oEPhxzKKZC82TYHmv8FYaUYLKghVUCHK8VSxwaytFM",
  "key7": "2pcMjJpmPQzpFokbLa8pSkcNnPGhqAgRfzPnpQFGWLYAgUsiNhfmXySbRgfLmDpGu4BCjn2R95a7Gz1ddcLsSpkq",
  "key8": "vc4qCoQGR8S2i3qWfmbRj4qULP16GqWwYWwHMJyMPwEDbKJ213eazCZJYXWzT2wxJNvU3ipXVwy5KRuqguqyeks",
  "key9": "4Ch7FyHgzezpXkLxSGTgfVNwPrWreHwNFCwixFXbBqPFfHvT9tCsxuY9BH5GGPTNpNXsumMdUwzCaEJ82M5MX9sW",
  "key10": "5z4z5FuxACha2qYAANkZmS6N8SBkQuPgtydQaPJiafSDBA5a5LU6yQD4av9TwHVnoweESv7cGqGWBBR1kyKrW3Re",
  "key11": "2uVAB4pKTw6bmbZtwJ9bemSNkyqKSVvFgWENp3sjbzDnH2SyTohyGhN9MDZTjzYLg78ACk35UuHa7fXpoQgLEUEq",
  "key12": "4CzEEKqhPXTUHMmk7562m9gUi7Xi3iwFCgCamC73HFd1L165XVryCameBDx9soJ5o7zjL3PBW9EUryhpo48dmmTa",
  "key13": "4xxoYULBUvHDp43Am3g7bXX6jxjxsP1UXp3Ytqq7BTxzT1qTTJF6XM23T49YTCjBbG4pm6kNhxPBmd7viGnqz7gM",
  "key14": "4u8xx96zUNryxVxWJGMY21h7qyx5cXB2MNU2q8TL8tTXub1HGm5z2FfMZ1bbHe268qAY7kjtmVSN8pM7VVGW1hqj",
  "key15": "rUtgRMTG1GuDyCazSz3CU7GLWinPFeCkgt9DycVNVknNct8HSzYxmAhrYMS2TbVYeCqUpdVH6ZRLABsgJXsH8oh",
  "key16": "pyiYFm8NZfUrMNQFPprczWpteW3qWfFwW7P8Qn1vFa11o7WVdny37Ntv6PhQAEMj4WcPEPYRrz5MQ38BGneWr9q",
  "key17": "38NAGjvJe38VPYRDkJLJcpU4LFvFJhEqn9zSLzFMinXp6UfJvf1YcoG6W4x12baqHR3jBvzLeyRpcgPTJEEk3dGG",
  "key18": "iCR5Z5XJjtRnpLYv3FQNjNEuK7gPxEEFPMeBde6KJNLLP7qf8zbw31BAtWsjV9CfWrDDPm8N25zbWK1D3rgB9Rw",
  "key19": "3wVKTNxN21Rwe7VASmu4Qqi5YaydFyWbtn8uKtk7ESLEArwt1huNmR4UhDaFMDjbAFuoPYPpPA98Rfxx7DrjojZ8",
  "key20": "dnVr8fiJrSmr4o839z2DasY5cJDudCdLjwveQLhidvCxaoKUcvQW2sXEZfxBr3VViAcvbkxUe69DFyas3JLLSoC",
  "key21": "4hff6seT5NFhEpUfUJDVoJuLnKLuKHb5H78SFdqkQUFyGHFe7Z2VNmDfHKArovDUpW4h5E1HBhKmBtkBo2bnXatK",
  "key22": "4EUZAxVv9f8jY71uh8dKMXEyvhB9HnZePPgDbmqtAYZ3buSgrbsyGxxDzEvBf7qHZicH4wVLa7AMXeWggLYLTUch",
  "key23": "2JoKjMN95CmV64sVQs6dpM9i58apwAW6NLCMD5hQQ5TbKYEvkQVYMPkuGzmm36u6G8HBvJx1kWVLLQaW5wXsuBzt",
  "key24": "jsPKHmwVn9W4e1KEKPwNuu7YrEQmPkzGoZDpA6im9Z1KxRZoZJWs4V3iKyszkdUZJ7jcjh14pyiLjfTsJhVLkSg",
  "key25": "3FhfuxKdUVFXxqHj152j71EN8w1NusHejne2UxiFEyk8UkYPP8XvmNFfqMzX25eUSazYXNaRvHuF4WcBW5aHeRC8",
  "key26": "3jTvnJD51MpvMVmZZe1ACfAJ7mdFekqxscDhZbh3bC6QE4TqnAvVKvEzFy94D5bi1FqU6h4aN4CH5uQNvzbuSaM1",
  "key27": "2CA8DayLNQea73VC6CHtPGJVUXstspZk3jRAz21CvLQoVKQXG6rw4sVkb85B62HyVjqwKNJ65Bkmya7hZx2fhtE2",
  "key28": "Pu4xgZXrKbRg2bUHDqYa919JcyfycvDhgvcPMmbCExbMYhYRVVofhYZt3gwDR2XGd8znZwNZhE4Gk4G8WHUPpVB",
  "key29": "npESm6i5q5GAcp6ySdnDyLfKPHxe6At4kYPPQfY4BArtgNwDKuibjcXNrRhbvyA2ESVdxxYVagBtNNNMXGaEew3",
  "key30": "SXEgfrmLjg7xHPd6gMzLPJYov7vjQ5kfak9WNj9ZjaNAx8qDvxdSfVTddrS7xBaf2PodihMj69T3zdCktvfVPm2",
  "key31": "3horwKygAbhGcQzhLCK66mZEGFSFfTxTgfJYjKHnLyJYD1w4vuysc9tycewSp9aVQ8wwt42sNvg2aWBshNatztDu",
  "key32": "5WBjaPRxykdLj6FCVibnVLBQpvHHTDpVobuLyXMhxHDxCy1pSwuhKj8sghd9ExJSz6Whfu8d8JzbJi4996nKNzYF",
  "key33": "51xqVWHssRAYSFz2H9v27sdQ4ak43XKEGmVP2hQjZZSJR6hz8cvqdRe21LCD2K8zL948hDTgemjArbXirEVUEJj7",
  "key34": "3Uax6ETaE7nmi6Q1m4181oBqT6JGYU47RFUqtFMGZexz5qhSdbyXF2z2Khf7YLF8jtv6jatSbBsCrDAHU37mLSjS",
  "key35": "5aVBpGo4z5E5kw1PVBSut4evyM4yVTUPsLd4KKtRpB9vwFdetxDHTfTxFT4gB9Nn7BY5jqgjeSP3YHDcGN69J998",
  "key36": "48F4w9S8MANpJVMQMGRBG6y4Dsw18JxkPZVqWMXg9LAQ94Tn6JdvNmT7Vh7LKjWzfFGtG6RePT63xt9VpRJqTauQ",
  "key37": "5xinxKo2ojc7baPPm4ZxUuMQBMvedLQiojEvStWEZcXBe76VLpLeLcuUUFYcyQNmr3Zcav8fzrmR9vD7TaFFfEhg",
  "key38": "3fWhrNojtJxWWjpHDxznyxZ8GXA1AKYNNpFZqGfdTYYR3QLGCt6XwrcF6NzpefmC9ATAEpW7tXdyXpkYX664TxRj",
  "key39": "5nEZ6b4v3maSfrHBwXQmBKSt5M4DhYwSox5wXq3kKZhabU5oJjEobokQcvu6U9u7biwdqJrh3Fj5SGFaXtHwKEbU",
  "key40": "2VbeUxFSFkCzJykif3pcUAfbkTFovR3T1o77ZuePuW8NFNX3QUSGcHB6a3sWrxtDt1Zkhh5j9teadYDCUzdV6pK3",
  "key41": "299v5tyfVtxidWDCv6yiRWBfeTcrwhyFvyQM1j1Wh3hYbusT58sTerqKkJRC34fMNHg5hhHmsJFyr2wGF2nxpyk8",
  "key42": "3EEGVYPE5n4pPTJuR5Droyt9NxeWEEoZQd9NFi2yBXCJuksLcFcSLn6eBLk4DDxYy5zm5TSxcmLUmwKoUWkqGMFQ",
  "key43": "Er3CtRxKubUS6rkgWg1JktTZmF9QdpxtZ3Yq8nKQQQPPHq3U38L2WCmXzU511FSe6YPFZTPQrnoVbncHisgoyqj",
  "key44": "5GBqG98mfEcw2pDFGMgLUDDHcg31pUgLvYicqHsenvFucDTrfamjXKXfpermfvEPujFu3uSadRv9pFnz4NHPCHSY"
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
