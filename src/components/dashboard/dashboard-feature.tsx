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
    "5p7rArdPbh1TFiZsEbkGocS3yMSEH9Z59URHCrTHoAs89EjneNCscAX3dTvqtNjStcjxUGvbsWPb9HY6zRT7oXjP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rq6w6RVSZDARHx113zBtk7bmqhLqeJYSV1XhmcCT9gUVXwZ6UgxNUpGVtiX5Z7tWp3VeTHHMbWvvFkmSamRHcFR",
  "key1": "4SC782GCXSih96X6r6zAhLshHgmFxG3333ns5RnRuh4YMxsgCb5VL4fwXChwu4rXMWzjfACUYkt3mb4jwi93fHBS",
  "key2": "miEV2wnyZ6QBNnTUVykGRsbEhbgRauQT9xpdbGJS2d4P44esuXYfLgN2Ancs6aRey5VLXbiHAbu9HtWmgsfWskd",
  "key3": "4osCHbBVYJvoWYgXuoPqJidTMa5eSTeTeJ6i4qmFkJa4mgE1d9eQkJ4YZAfGd2JpZA8YkkCJdD6Sj36411A384rX",
  "key4": "5B2jkmLQL48uWWBXBKfq3QFX6cjHck9jUHsjmmEPzbAmJQUijLbNMx1XiNXpfCbgSvZBP4juzeqRszSB1NLkRvnB",
  "key5": "4RPL6WUJXiWbehrDF1hNsafYvixHvTHRdqiDeSBbfUj9LitxFGrApJME9PxYW8VCXYJ37onoZNKyc7aKYLKpWDKs",
  "key6": "5vgWknsyFXBiJyFHzhLhn1F7GqMreUZhyjpQbRRGVkzi36BpvfHi2gkMUnAS5pKrtQTL8pcyMVa5ouDJR4z6aFHp",
  "key7": "58ewuir2LhcDR6wUFVWr3DBKMzC6mxqz5Lg7fwfP1JdtjfCao4jyDcQnqhegSmGx5XYJ7ypToc2wWdz6kraQhYEN",
  "key8": "3iqET3AWvUi9qw8ifYSixHmsBsCDVCZbaA8MdSpBRGTVuUFSKfpnCSjEfGjcjDSBCStMCU32jcR88wZFx8spVLsw",
  "key9": "5weGrnwNVVQQSHHbW77RLVFdiunJqbGhb93pqECNwQ4hpAHMzbuNKnL6qvibYuiz38sArDf9XhaiPYL4gke6ww7Z",
  "key10": "3MwumhmRWf8X1KAM72Pjip9d9UnugY86RtYcoHfW5DJdWj3JhoLpk35AkueWPGzyqsUWbW1zqHvQ15bg8nLD57qy",
  "key11": "4TeEzfAxBi24Tw4y6h22LRwrRHajvUZnhAuibxJWkQo7fmWiWghqHq3yVdg8nnnjWVWwD3HDeUNXUbohiRv2RQ3",
  "key12": "daDqDzgJnqv29aRQ25NniyA2mbuKpS14JryCu7JrzsivX3Q3ymDHWPfAcnJfkGF2aBreTZZk7roZK9QW3NAiaiY",
  "key13": "35UBe7bwgnBVccDZgRnxTFWwK65AqQusMT3dWEnPdcVdRvFMoVeQRdhRAWFD1rZstBcDPdn4QjhEEuMJ9XoJQLDo",
  "key14": "3rc2kRx5cRxwGh8y5E6rga8bkADSbhycq2XRKCQZ5RXeXQG8Gwi5sW6FexxSgKsYcNzMfGKw7m1k7xhSdKA6RV81",
  "key15": "2MZr4peEpWFQceQc9UVTgvUfiCTAKKjg7YgTafsBfmYrC66ooS8be5jhPJ4os2j8CeujKoYkUA74TWty8EY1nCHj",
  "key16": "2f89B1hkmBWAgH828Bfjmw6uXwJMoQ95Pft6JwxYorPDVbffQtotoNaaP86moKmkZ32TQwn2cpmZh2nzNrndWvHF",
  "key17": "3ebE2PC32oJUgugvX5yqwyyLwxZba5W4kL73dfeK5D3mYc1eo5WWxcY97aK3nEhLMYaw8VPjFgVFXG17HtcfQc7k",
  "key18": "256Jk3vEnwYAS5Sy7aRTaau9DQPDC4xT51EqbVo3e93CsJXzR6tEsjZX26SjtLBYatBGQY5pnLkrNhrm2bHvbjfS",
  "key19": "3GMYpGoCHuzLNkx1BWShRwf89DRy8VGHXSsmJNnxGS8UWnrtGcvdoKVWnPWURBAyrJUfV7wbNr8k5wtQvyaALLeh",
  "key20": "bfKhfu1eT2Jo8yxRqT2jp76xdQn38xNEYqfVH46V8YVNerVyQLpjpgH9zUh7swCH3ur7pmPy1GwPfGMLMmLxP4Q",
  "key21": "4htMgUwfiFKgcwR8D8nzQgXWoVPsFgR4EY2EPFD3Gi8FNgrn1GRLVcdhGUC8suAxsdpUkkwVhaKFx276Fe4Pu5JE",
  "key22": "4Amg7DWaxSzhT85y1J9sE3rWHm3SrDChKUCtkDnnQVbZeSQUgXaypfj37wYnekCTK9QnL3irWrNKGE47Xr8X51dr",
  "key23": "484Ppqoqtrs8Q5RiJMwHYpJ3o4hNCW6xjMkU887ALjxQuhRM7tYNBUcuYeJNMWH4aPHUETSbyng6FLHUJkwpt9c5",
  "key24": "5pao14XboAPGqx1kYQcQQRLw1da1EmyP7pCgZW4Mi9Xek9QnpgakTg84kSQ26gs1Y2DPonv8GS9trp4Bf4zhh2sm",
  "key25": "2drJGcxvfJYLqFYVNKipjN41JFAd7PtKnCHLoy2r6ppVBs2duwTstXHzYojVNAnCroDUkAz1QS5u7QW3fnULGuxT",
  "key26": "47WVhU9GJ8bEdm2FVpR42eQbPbkrUmV4qGHhU6RWcMYLW6sZxrrhHobeRPu4nKnqoUnJcKE12v13L7JVX1Rb3Y8A",
  "key27": "36Ukym1tk6u34SBD13UUubTnswd7Ey169BGF8ideRqqXtx4SFEeRCSgBnnyUs6Bdk39agRHcJ8dBQ7kdPRovYWea",
  "key28": "3r9F723pMhuQCfMCwAYUdvB8vuXJKFHS7peuG1jDs1cjVAS7GTHQdkcsd4g3M5LwjoD91NUsdcXpxeqr9pPU4HwV",
  "key29": "3mnYSwKqpVyDQsLKxfHP4UK7URgqos3sDP643yvBzc5mVHxF212tm6Ba4cWzEddM6o6LvCBWdERcGn2VgnUBdAVi",
  "key30": "34G8dknSJRKoUToUyF9WkB5G169TzfDjn5w629cYGdm4TuxcDGQjUPFnZCNSYyAS1oPvYqrGpnfPStQUMpqCA7yv",
  "key31": "2PbZLtgAruRipvThYkLjhWGbqb961VXzhX2oNjk26xpSwuUByr4qUXrdQ17SbkaN7sEEKS5zCDF7zedwMNTr3zx7",
  "key32": "4ntpMKz7588DDr3UevJeR6FBmVX4DrGAQfSZHYS8EHrQR91KSR8rskLQhohPZuAXvzZVBbAeCTRsQMqA6S3jUjVp",
  "key33": "YuihDRfoc1jWRnVcnTwZvs4SEHKSjHLDVGt4oH4wkh8Vs76aPyHg5h1wmmhTvqBosnWrf6Vt4aYnCnY6dJXHr9A",
  "key34": "4b3SyryTADjk3N9prLX7DrpPe51waVs4gwANpepgL77FRaW5Rt5qF7yRZVBKnTwQ7fFNRqm7cDSz2MH6AjNzDgxE",
  "key35": "ZNpz5qbpzYXRogJnzrFX25qHqTuSoRHTY4UFgWyoKFhjH5qHSVzS4byM3A1rNYVj3xX3tAQG2bNdT4BQYM1F5pJ",
  "key36": "5sGM5etVken37odtxqjpYh85qbLHA6QWByC9QoXLBvxkcmGuCbF5mkdyVXc9A4zp6W5XeC7hoUNsUjCTDDfKXdB2",
  "key37": "4kgpsk8MwFktaw5YnigmDtCXH9L3J5GQfjfC375SfTAfkFVcPePhiTZUEvdeUGaBGeamsMfGBDjLMyMUGUDEYFaT",
  "key38": "4sike1mBEz1n5uAvb9fXCn84q3U8th5h3BSEER7FMcm6cvXvTRMgUBUsRvruWaMVXVzCG8cNPchKFKa7rLtvi9F7",
  "key39": "1PrNBQac9jqTNtqL9g7qTmbg6erWhfND4Xrmxtb123zMiJnrKje1MZHHuvQkXLnnPtUg12UQzN3oDUsseaRQyen",
  "key40": "4rya6vTUwSUsLVCWGCRthVcvdyveBy1tYJZgLA2MiRYU7mxiEg3qTeof3yEai2LD2HnyEwaaK5kgsee9gE8wMsWD",
  "key41": "3juj8oo7bQpvJd3apZvvoCGeQ6w1bQpbFEBuXRBpCamNPZbAXnWugrXTXHJoRjKvTNugDeH4EkFZPdQ8Kg8J8rGM",
  "key42": "2TgRE8ZoJxYcMBU6opCsgihqgUjTFGVSQSDY4L52P36NUvMajh9XerAdjC2eRE9ma3hpUSCauXoPh1LLYwFAUvbv",
  "key43": "3UwFPodEXoqwG2daSMUexbynBEXFzb15J64N4Lrk2oNNt46gvYm1T2xZzFJXbPwPeJ313xwKEXqLqJGLkmY8Aadz",
  "key44": "2CuA3pFHZSzTMXLAY7oLMviLhW72td21QkB1CvoJR9UqHqmRZMCeVrcs9qMZPZU8yyCy5w9x3YP2RxGp3eNpT6Rs",
  "key45": "3TG1J3AybmjxmPqexi9ArNUmpz7BhKKK9CfTcbC1xWhL2Z3JPan96QZPZk4PY3Km2QPFjm2k4bYXgy7iigGDQ67g"
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
