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
    "GT1EjfACduwUG9yV17gWWUHD3CEFX8r1DqQqMzJ1axR8GpFMaEGCVjpT56389Vw5zA5S7tz5hihftRpvVB2i261"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "frNz3xAgRxLTZikkiapvot7Pz5rNYdZJndAETyEv6Yd137dbLsxzsz4PBBXUEMmtwb4ptFXuuisAi1XeuQ9fB39",
  "key1": "3vFdfPiizeSjR4c8bY5wXyr7kf9Tup7CuHhyVMbwBpY7iULB4g2do1SxgEqTDZPvhpQeaMtf3DKvXRnHj2aZnSeP",
  "key2": "4Xjd5N7VxomZqR5jXxG12DtKMq7dquemb6XnJkSX3sZe8Kv8SaEqhGYbMsQQbrwbNKMjxjSKkPfr7sn1edqAocff",
  "key3": "3bDAmnZJ9VRKmJDrtgrpwHdhrCB7tGyL4PvMreX8KHzyrEcGizstkojTDXVDSqEn1ss4Q5ZEJmPbrrybdXtdsFcd",
  "key4": "2GxxM3yhifKkQtgSZxSWHzwv9DNPbRwkH4FgTxMmawuNe4mRqV8nJ9ixayfSKaijQsgziM32hFJPMde3MXNCYTNE",
  "key5": "5zvT9JuRPhBqfF5S1aPpFDuuD9WTpMp324mYRhLXMrvRoB3C5K6duQVc5Vb7TXp5qm2KWwG84GDDrRnKU4tsUWzH",
  "key6": "5RzoBDsQP676G7uLiyk66LSfCRtMZUnGaX4mgW5JeuGAQv1KY96HTXYr7PSM1KHTuKzvzf39e1xBevvTanDp7T57",
  "key7": "4vwLhEjrnmNWNvH7Qy5Fpwa3CwUqHhxqtQj2vLiCCE4zsDxyvtgootRjUhbEh9YQKG2na7NHCqNr81MdbQyQhr6r",
  "key8": "3yXn5MkqvtCCkRWbMcdM59Gw367NfCgZA2tjeyt7prBL8sto4GaW1tXQH9kYKwT3gsrGYCzYnhcWrr21NYdorqaf",
  "key9": "5bCxBSAXTBoPxfmvn5owAHYAEtKPi2QaNiqBD8rnaLUVetiAvaptm5PwkWPvutitqsyAHxNXV6Tp5HFf3tn8fDYN",
  "key10": "3KEtSkRP63ibhoQs5czKjEssKfXEAZQJTfLsFUiYWDszcAFaHBsmdod7VKQTN5dihcYJBHYtmTuNdCCQVQtUg7s4",
  "key11": "4JqALNyjs7KdYGaPMvos1zPsHNPvdaLcMFzmxnLUstLrtJneya1uTyhN1Gxj7kaJw39FaQp64HFqWvWF6FCcyUZg",
  "key12": "wMziYExv8YKnuNjcV76GzbBkerfR65VCabNBzy4N6r6qg8rjLVeNGbRjmkPQMgTGk1T4XiWkznTrk2ntPdMATfA",
  "key13": "35USYC9AgsXsqjhkVEQGoH2rft4PVDLnjhbCHMLUcjaXJjfW2QztnSuWvdoQSmu7FaZv1wgs6TLYUz9UBGXsZKYF",
  "key14": "4NWfpov5V3XuLks1mLDjZttNEdj9EM2tNoPyXdjLiBPKXRyztV1PmT69WXyN6NoMuZjBfRBN3qYXJqtYL6GjieTE",
  "key15": "5vXX6Hx7dhtGKiDdaUcWBwDgKuzvUwXN4M8Pt6d2gUZYnvvTGmbWkYhTCb9XdjWMt6oL5hnbkPTsRhfTfN7T5nso",
  "key16": "o34i8TbK9uDbnNmTSy2WnRSZGMGhPPtpy1Q79ESXWbpf7qoeJkHmvRWMtzHY5Fb5oGM9WPjYJjCem6dFx1J2wuU",
  "key17": "3UKSp5zv6yKsWuHAUVnKC7Xk5ZWEBsN2gF4jh7xdYgsaFfGEnwDkg4oNczsMgp2LyLHGAFL9jFvWyzHx3hAbgLD3",
  "key18": "2dWpo3riCQAvFT24QSg99RzkRmgdoQzXWGWf7SNYFiLZ1x7gRNnQhD1UY9sNpd6M1fv9kaKXxxdkedfwkSHSPxNW",
  "key19": "Vt1i3yXb8AnAQThSLRUrfd8UQAy5tPnYUd7qjZUxVCThzVuG7XoXuESs6jgqjkdPQr1Ax1SCYRYGnWSQCEsxFcJ",
  "key20": "5Fdie7eYwodFsm7rJjCmaBpjeKc7BoDEEwW1dXqaM98DQk2DcgsmdXhYxsjRNsfmMjrsRk8YHyz8FHHr1ELvTkk7",
  "key21": "38M5zjWaUoW3mTAjrAm3GcWBdEFUCyQT2ZyzrrPf95EVjP6enmjavBmFMGXvdAecg29Gn937wHnMBRzv5VBXz6JT",
  "key22": "sq5Zm3paSFSMDnpuNLk1bqZrUVLRj8x3nmma3FMLEsTuLE3sCdEaTr2ByXRWwEuL6uhxTYfjd4JkB4WNJPxDHJW",
  "key23": "5HYLrvdxUAN1BzztRiAMp8mSJvW9jYQqbbWcqJ24WXAZ6u6BNuYyKMq3CDFzG2vdMRobFg3YADGE78CgzMk91fTn",
  "key24": "4xPvTFP2k2aj1d5FrpRiujiXE8nEQcSn3jdfuYw3ub6eAKKAYy6WZmto6cWVABzzDBxZ3e2Uk7HF4QUi6YxHqCeX",
  "key25": "F79TRciHA5nsKYCM8kQEvKQDLL2rr6XLvaZhPP7z8VfvGRdDGCAXJRMPKcdUBkaaUTC7Tu2wiJRHUbVxdfcypfp",
  "key26": "vLsLYvWJKq9PRvo33Yj2rcb5nMGv2xfrC5AgUStCqWH44c8jKb6cf8JPLXjEefAjvnd7BMQC167JtbzcYwQtVZt",
  "key27": "3eJLtrVsndXsNZpj1QZxyEKTPUbcF5jxGQKyMTrRL6HnzzudY9EvBcX4tu8LJfdFBvUyLVDiv2xmRRkxFVQHCwZn",
  "key28": "3bMvUi2kLyo1TyiYdjCPMjzSRvoFqdVk3Jhi3yhWu99cEMhh356KszDSe5yg654YSvGxRrp8xr5BMWC1HfPJaVA2",
  "key29": "4Ei3q6Y9M8mXRCEvh5iLZv1GGm6u1mBtpHYDfeLtXhTAhYNoj9mrY1h6WodxpaDiQekoqzMrvEqRBStJG186ttFw",
  "key30": "2WdugH63zZHZ9BYTHaWNrV7rdBf6qXsuUek15tM2igoooY57Y3UoegD3Xu3mLNmvJtUkhj7XUA6j7kETva3oEJFi",
  "key31": "4fnuZxq52eJbwit4MZ5P5DrFAZgphvB3rarHsmyhyADSnjqaW8QfxwzMHo7sMp3BAbWx5ydmK6HsaoVWC4Gt5VnM",
  "key32": "5DZwMNXxH3pjdh55PK7mizzkAM7rvVWQwCVMq8pniCd8tjePs92kLuYWWs51aiTz3vCenmvXVFBhaT71DyQBvYT6",
  "key33": "ga3eFrGTwSdL81d13QSfcSoePY3tSc2DBtc82itEwGSCEqi9raXWPwX2JVxgYgXXX39RZ8rszjzk45KB4tNbaEx",
  "key34": "5boyvAsSz3ZiKpPcn7qmkyoEJQ9F17baz11jRZbpPvnp4uBEPTEdAYqHANQvReGKNk2Szqp1AaFyx7cX5psZL2q3",
  "key35": "5PdoVXbq1EzazZaCyVX9MFiNaNrDLkJruT6gKNaytBhFhoMUWJshfHhiBRqxf9rYQMbVx4Vch2YGn8QESAUe5qQL",
  "key36": "49t2AKViYC8bqG2bwDVtBAtHPrFEU4HxLY4oscHTJwzmUNPBCF87ChRST7UWEWSzihrp59chiXzAx8Z3NHJiw6Lr",
  "key37": "5bR9xy67ynRdZESopkeyXXEFaBM5rj6BNac19iYbk7GLi5Ba1eceNEw7t4ift7o5H3pkMvuNhxa8nzZ1gUmVRj5V",
  "key38": "2aN2svQtm7iYTZThc2Jc2gXh2DQqtAEY2emdnd5Vt3eCWYhpumhDE3WahzbePMGcrF4TPRbSQKWsWsMNYY6b3tAX",
  "key39": "4SQB7KP1mPQDcTYVNG9n7pVtG9NndkXr6HWRPAjBpyRJcYWPizevfDCB4cWeT8b1hkLxcTpHSGK61eEq2AkAGB9H",
  "key40": "4R1UaB8waAVif8qLNtxLyGzJefEXwU2cG8QcLL8RNscvWtzhCMyUuDkANaKWKgPo6sNGCNdH4MXhksTMfDx9VHcg"
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
