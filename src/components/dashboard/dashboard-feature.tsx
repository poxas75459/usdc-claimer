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
    "4hXvgsmh7xMa7uh3pT3KPtfaLLpcFMtz6CvVVYiSFNvrekiq1Z1PN1et9KUmWMytbFoGNVZLZomC2H18SAH228Wy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jx5fE7QkC1uQUsWqwxPqGEEVc95YKh6e8jdVwSxRpyFC7tvQqs9TFcdxrJLJsppV9N29r47xJJPMCvqjujS38jf",
  "key1": "TLATG3PUi81NtpMgthdfiYD1FxqagsnyFAHTnJ8h3jU4E46mZkGAApfUsS6GZ3L7QFcyxCzFdDrJDEmwyozTdPm",
  "key2": "4Ls8DasoCMxFBq9y3K3erWPHfhehEtjCzh4ibkRbxsBiYTdbwUmJHgKjQoDeYfM7xxBDTswhFv3JoXQidfynx2va",
  "key3": "5fm3X7sR3zHbg3H5yvmJ9Mq5TtyvBp6AmZ14CU1K5zbphF3ia6GXaYTgUtCAYYUzjnQnATUJpx377sK7xyDhJTkc",
  "key4": "3vV6Fj6DL29d4BrFdboh6tX1kMZCjxLGpYWraS6xdjdoskTeMAHsabvvx6FwfrQM6a4sK5rkeJQhD8d2LkaNnPVL",
  "key5": "nKHnxn2icxBt293sMusK7G5ES6v44hFyUBpPxYfGuLaanWWK6SnyrzRKeQX2ave7LGxY9pshRiQJm9agYLv8QRL",
  "key6": "2DhYqLV8P34XnSdbiEeLpoTZs3FCxFrnJc9H6jiFK2FkLsBntDdeD3pKVrNbKmANRH1mnuA68bZFFkp5KRBt2fhk",
  "key7": "3XYbrmGFL45Lgo5ZkikJA4k8YWf32CQUacJ94apW5fEiL2Et4VNdW13WbJDJvFcwt8J9RSi5L2WZvHSMPvixqaja",
  "key8": "YU8g9K8YxnfTrVdwvNSiAUV86PURBRw5tgzeRCef33hzEjUWRstoaYqs8Py6FLQzqXVN2nJ9aEgqEdXbfWYycoR",
  "key9": "4GN8LAMzpG4EH68eifq6VKtotiHtCp2nxFLfQuDarvyfr4bcVcBjeUfE6KkJuxq7aBGKhRKCp8L9ysT6tbqwP4mN",
  "key10": "47fKDfps7qbd7BqTM1qoVsHms9ACEesgJWfLENgYKKFecLU6GY2ARYoXHFk4in43vxqAhqoKCjfvZJDu7oQQdj2T",
  "key11": "2ToVyBdJTvbGcnWPeq6euAznf81HBh9tDpvrF5hJMATVBnr2kcEPqahu98xbhtMo1tEzXD6ycdHCk5E2vKezVBNj",
  "key12": "Uya9hiacfGjQZ5jAF9CCthdEvPVBLP3Zsj6pvhRGYtX4WD5BabDq7fz23a3R2TbTmHvbsh568A1Vhku6QApAXZa",
  "key13": "4WangkKQnodkQnXWvjsLeDKGBNBL78q16tFAJJmQPUVyssdHoQkkVUJ3jeFo7PzEAapQJKm7377avQNg1KSvxeFK",
  "key14": "34dMPL14njhYe5gdDijTR5vdrRA4byyBkn6nZrMin36pJpf2CGyJWCtEsxvtwhNFzjE9fiiqA1o3JdqWPTnuggrC",
  "key15": "xAshg1CUn8MMozYp66W4hzemTxpuT1AsrUEk9EPWp1rJ8PgP9tBhCsmqhhP5NeTXEbSFy1PvD36vuRMg7Xhcjz4",
  "key16": "2WBo62EJweUxCgwSSHyrhr8FGTXxtJUZ1bHwnhBRxTXEMg4g5SRFLdx558k5Axgn7Ane97MnzdbFBEq21b4v23at",
  "key17": "5FNKG3Rdw1ZtPHvdnFcL25hf5LLzS4b9erQUbvj39pszb4ndQGJraFiNGiJS1B81KifBmvW4eo91coevXy5tHQLg",
  "key18": "2cH5UqfGNKVBxe8yop7NZJL2MVwjtUhdNKvKLmVmuKyaMDFtyR5yfRwfz5aE4eViXcnw5PH5XREe7QBU5aLNMyY5",
  "key19": "JjgZB7Y42Z8DWZ4AxUfru9dSjrjcoA9M3K7a8Abn8YdcJoCqaCYiTbbmbLZ67hyZVRns3Pr8Ud2GGFDsZdajN52",
  "key20": "4gTHCoMd33NXAZaypBher1fzYgtBSfx6DGJuRGHP9Jbni7c4rdKF1yh9Rz5UB5nCGY71WiDUWaZ6o37qjG4Kpey",
  "key21": "4QkvWeR6twNTVxifTZV77aQhp91XkSChkD7vcxsFM9e4J4JAqzNfWjQuZPqbSrVJtUUAHJ5WEwVfV1XCX7P4NzNx",
  "key22": "3TckDKY92h3DEGAkfxRS76vib2CihxgNhVRBkvCWWFTaQQPrYCqCq6n4FV4yfvbjb3ndarwhQ3qnh87dSeYw9mDN",
  "key23": "4JPkmkJDDYUQidDU8bmt8u7FjxfGZe8YsnorJbBR4rxHj7ydePdtmjTJLkkrYJ2m3euaxX4GooKcioEsjk3mAVBS",
  "key24": "64mE3pZBTQfhZb6f82XCBLC91v1R5MTNGhVrrNd96jdvgQpdifXfeAWGY2AJAMT9SS5NAinZZkQWzEYV2nhiupW8",
  "key25": "5n9f8fMfz9nNG7WTuuihzKWqg1GVYLNWNTyTB2UdHDcv2bhuCFGmzuer7k9zPRnXs8BZCUKvothuopaPcJ3Bf4G8",
  "key26": "3gk6SxLRtLX6FVyNGNFwDNBp2AzSJG3XPSiXmByGM649pH5dtvSVtxvNxFmeVt8dx7w9C9CAYQYimqaPsMPyNuSJ",
  "key27": "4HBvhRVq9WXnGYWhWcmMKvWqfYphR9VuAK4rrwQTS85nFShQ1Zz6BwGbRTup5etxBGZmsD8CeticpCMddRXPixKt",
  "key28": "4zJDeHL1NdJRubLaJVfkZ8XZ2Au2Rnm2gUJ2eyDqZohErQ9th4xfGL7w7L4nLuuCx75b6PJ8xTTM2b4WiiKPT8ZJ",
  "key29": "3RL9gK18srEpTexv1utVHCHoYr58cY1X3pZqfJWN4qT5EQdikJgFwGVfsWiYL8ndbY6DC4zrdSq61pBXZduAzyBT",
  "key30": "5xPhwR2y4awzscZZneH36Sj6UGU27yCvtYUaykrvRaoX55rYQ2MiLdbWoqGU8bTEGZGHHwFwLkvkaRktWMhfEesn",
  "key31": "4kzRhURf2P15VPntVN4PrhVyfQjXiUcLyooBVmbomYd7ApzNTV1ZMJhEXTmX7M1E1CQkBAkwdW4EriXPfJ2ZdDdi",
  "key32": "4edTFgXMgYzC2wzAHsWrDMb13oW6wRQPg5x9P8MaazTm2UsExWAgJ9reTWf6rt3XU9EwKTYcnkfgLegrfbsDFrfx",
  "key33": "4UHNn3E1PA6Nyizgbe3n3ryLmtZE5LuxCoyiPSUEzP23r5xG5CB9ntLQok8uavYcS4AhEr4GnyyKy8bE7R7LjojH",
  "key34": "5H7YNuaZaXR2BDBLrmjgsZCiTaVp3ZByF9Zb9toNYfrdLwFWgZSQsUdKiZ82GPF6eX2pgFs6rZK82Ekyrzpnd5oq",
  "key35": "2Wvs9gbRFkcwcTbpuLoiouYoE5G3SNy69cFpaVU6CiK3CzunBJ2SMxFiVBsmL9bdrZQZE6KonXybuARfgqZAGcjf",
  "key36": "326nDU6aKD7Yvw5pWiANRMrXikyGC2WtcAiL449MjBWJYcASL8qnj5aTVW5C4Cz4XuWLXzNMpicqw4n9WxhF57jJ",
  "key37": "ou81zd5o5PRSPUaSAi5Jd1v84R8r8CfKgG1WFogspYEnLkvizUduisGFW4rBDP9MiqSEP39YH7TX5pqnYFMPU9U",
  "key38": "4d9GWinvccaBdzYK2F8eBYmWtNHsNte9xU1nZHU3pec7pngYBb5QaYVLm5FFVAebdcaoqDoYK3eR7hjxGaDtANXY",
  "key39": "rcDNUA91bW1HMhgFG2y5tqKqHkHpTyd9QF5EgH3CE4xhB3egSTTdiBMFPCHk6cR2HJ52HEsJJW8bPZTxSYCFJoa",
  "key40": "3Ys7Ns2kNRXNiBGCP7f24Th1Q6bpsRQ63uhXQUUQXbKPbRE9r6gM6ST7VnUSuY5tvpvi3GNHdiceQS9D2aTjAW5r",
  "key41": "5b3iQZUtTK2Du6NweiLWAtxdchRGtzSzmnnoX8nep9ZVY1HWNLatBTnUJmLPLN5mjpaVLJyixsyWnP9QhTvtjRC9",
  "key42": "2Qwj7kfFAnYQDjdyAhfTnehFPUVXZdqr5f4Xme8Qxf84YwrbSGv4N1yRhsGZfYNZVQ4pyXqPUxPrsHwbViCWWHAk",
  "key43": "4FAXo8gnyUau4DubwSKBsPeEtsNX5LkKVaLw3rxbDArqz3ztdAuWwnGe2ZgrZaBsvVTBcMxTmA19sCLP2qgVPF4D"
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
