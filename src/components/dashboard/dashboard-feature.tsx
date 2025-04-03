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
    "3ZVSL2ZCkjMQAVP53FyREw4C7Hgg4y2Gdv3s4yqLGdxsoMhdhGTx9usZGkhXMYVhbBYgz2yYVe8k1f6rdL4CGX1Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YGAjMrE42yzPbwCcacVFU6n7EhbWMgmem6K4jipnwURN9YgKmbBMPNfMposPC8mwtNeNzSoe59ZrtGbgaz23ykW",
  "key1": "sogTbU28j1NS6kjNDJzpADej6idv1DiidD6nyAvtyghsnPNfE1Vo8dEqHmV7jjgXgqU41KTaEhqWHbTpTXogmZf",
  "key2": "2ejK4pBp68DCZof8uqJVjLYgLzEn8KJufsSBzqJbzvFPu55kqVcCC32bjcRbKfz7PVf1Sd2GPdxoksjUY9Nt58oa",
  "key3": "5qkY1GkH8gPBcYmpGWFQzwtbph7DCmY4djVvqCryMJqHuUZjSgUT7qFW9kbXPdkts2m5NFfySKtm1VUokbGdVR73",
  "key4": "4Qfy7U6aYecjNhi87Km96xnand5TRWoNLgSgR8BHHgZ2zKUzxc5e3DCz4okCm3J1sRb4QcZNeexpXyPVUVmQAw8f",
  "key5": "5FF5p1PWeRPpjujhd1sdHwfiKGVx662Kogkb7KanujsADaNcVGz3n7oGBKHqZPTaM68PqfHdeNicBxi1G6piUBwR",
  "key6": "4KNhfKbfoZrjxMQui7yJ65KnsfwbGGWB6CauFrHm7bMur9nGuPvVwj8KYp2jrewbKHWaN5WF3tGJfQPYVjHs95cn",
  "key7": "2kQ2ieUzXp6C1YoA3n1KvLS34kuR2komoDqNTrKmjUX4M2zSgs6p9ut7DXQzSjn8EizK3i6zCFuNPfzpj5t4gQCz",
  "key8": "2wgebaku5eLGXUwbSHacmNTdLpe6JRqCNtG5s8LZME4qEw2NJqWTkjWBsfAEZRdHv6QB83qgfDmbbNtcRjFgbKxL",
  "key9": "3cUj5agZvUo5Q6wqsoB4Ag2t9EntbeZZvpWKvBSKihM5Ei7nygjvqG5ZSpKueW6bPSeUtw9KemjnvSkQpL6FSZcu",
  "key10": "62jf8LH8EEe3Df53z87srCjY3UCpMnjbrVUoyqeDJWY9fRp2xwY3BeU4LqUQSCCL4thRWDAwTsgwSqwFH3HuKfU3",
  "key11": "351CsNyeNEgHJP7fNZjo3C7pGcbq3A2LKDkcBNaeKCH4zuhF8suv9iMiCbnvKfoZgaP571KkFKTWiJUqq6FaYoMo",
  "key12": "5T7dELdqQNUvHeotwNXv1zYTKXJ88CBMdrERbaewT7eE8KCoR7uRML1a9taqJnn5uMLmN84rMxM9omjsHaUHRie1",
  "key13": "219y8ZmtPRZ4BbV6ZVtiYXM7Gb7QCLjBJyEFAKuR2Wym5YunKbRJtQi8v8gZ6gc4nCeuw7tqrMuoiETLeYtdV5Rt",
  "key14": "5dAQztEXzHng6xtZy14SdntAG1BXh2PzoUAcLvBdSonuSkpTM8uUdWEvBGCQ5c6worSr3jv9pegCudunKN2sk67R",
  "key15": "2n3kinZGH2MkLqyDiZ5dnqiJ8i137PyDzqNDicY4ZZqYBxMswnUnkzLFLwpDiFncc4sJ8QMumi43aVjKgJjGjY9g",
  "key16": "bxob7tWHTM1pSK3aJsKtTxhLmU7CkX2ejpF9Z4XaXEuh9tjWbnr36fP49tnSVdTR17SgwNppNLK5FCxYxokTvDx",
  "key17": "2eyh1N6rVsewtHfjbqoU4Env8qzLHXDhUPmu7RyhmCB22EDSrZLm5u41t62AtShLHPcG9BPJg3NNa52jBq5sFxzS",
  "key18": "3vCVmXZHpdRSWrLGeQxhqmVYvoL6sQooUUYmeW7F92pi8Bk3dVgt56dFZNcWSGJbFUDy16aidcgDwYL3j8E6QLLN",
  "key19": "2ruXesgmz78AGchAExhvNXLiFw1teBnKqwCioiMxWmrpDe1t7ZtQfYokds1VhrdkXa8wVNYek3zy3bbhDZLTEH66",
  "key20": "4wR2XvBybWuaQDD3TgrD3bDaKUVk3ftqLkQroos6TaeZaBruxNVchsei6bxVYkD5Pugv29XBDQBYtqinGgeMBJaF",
  "key21": "4MWg7YavaQKF1koSush3pRwGSEk6PyBNxiadJJqVeo4iCggDPdhWsRgSmRd4vGDrF43K1hbpdLXysDTuFzcvwvvK",
  "key22": "2jdnr9UhYuGMv7DgFEQWyu2DUg8v1oTVDRiYE79PdHV4d83HNHH19krtFLdwTFP5UMz2x3pYA25bWpu5SUgV6WiL",
  "key23": "59jXh1MdEceXbW8qV17nHRwXe65ShqVcKBzqEEmT6ij7Q8Gi9vBP69YoCL4CzYJYrDeCB7mMoHbMJRwGWnEUNNNK",
  "key24": "2Zz3s2weuxDUtLHwxfgn6mgUPLYfWvdshYrc9bsTqJRu6dmK9VUsw662vFzeHhLhxnSJ49LJvQKoa2bVoxQg1JgQ",
  "key25": "4UmweYM7vQvpsgMnEcZC5q5udykfNzdanhbeAymiU1DUYTBQjgfg7rutkAUkVtsDEYagQexAT7zyRsNBgr8aFC3k",
  "key26": "4ErbNssk2bXYPmMQTB5HX98AYZ8BThzJFmqmFR3wsWq2qyTZjEgFQAkDJJiX6aVTBBH2B6mBFjy5bRK1NwVVWomQ",
  "key27": "3Wn91eW52YLCgXTBG73pjPkGniz9i7KFZ2f953JGgPNheWgnQizpF6jDvLrvVH7GdozZ732LHGNU34EL865XDk4z",
  "key28": "4SaHsvgd9VKCV92QSa9NB2LL86y3gUp24VEZMsCg2czXcdCTV6Z7GWkA7pg4iiA4sBoRaptZLiCgH4QV7K6yYc9c",
  "key29": "Jq2dvTqdm95FtY25VEZMZyzmY8RYKEofnGVq4VunXxTrGpRqNHtV8a7TnhMvNw7Hmk9q6dJkNxghwgNvrMy9R87",
  "key30": "3FBBUFNd4rJpJsCLVpz6ibJ8Try34JFUwMGnGqj3KPpyx7UEtUV2CmUCVpd2AsAi3eoyqndav74B75yyFPtVjCBN",
  "key31": "mDNHFLdRXnkRJKVdqbsX7GjdSvK1j2SjRNHAJTXTWUSwbfMYEUkWnDS7EjSCxVHYxdcMJ3ez8rfm7usYK45eAKT",
  "key32": "2mDWVhCPFtpH4beBqqW327UiQq2JyJSWCfYtmsPw62fUcGczBkb1Huvh7C9VNdJbogLzJPpYxXFSLNXEqK92tdoy",
  "key33": "5eSomHWwdjf67hTL62N3xVy3apJbYZhr871kwLW5F1HUrqADzSVWxg7C41de2xp6appvxd1QPGPG3FQ3QiifiSw1",
  "key34": "3YRWayHV9ZCbNH75Unby9ydaECsyxjTywLXfXDsmsm5gjeFmyHb1B81YFqeKAKCtf9bHf1rfwSaKTRYYdx7LEXBs",
  "key35": "2T3zabAyFdMgi5wDMpPpnZ8MWK4vbHiJ5R7VSeWNXajkqeiz3jbYfk7zUV1LyL3GYNJwymLyp8iMt8ssqQrhg8fB",
  "key36": "5hsJsjs2QiNPU7FBhR2qZBrfKxkGJx1t1DrEuVZ1G5318jQdrvkBws1hvV65WqjA6HnMdGXkGYvve5w62bXZhbxq",
  "key37": "37UHfp3CQJjDahmSNV6b6rkXepHJ9Ra5DGPL1zYggAKFTrocV1AQH5EDrwpUrXsvTY11bryYLsfKAr3Z5Un8YwMN",
  "key38": "4XBGLZECJdMaFX7kiLevZipQndNSF1Aq5rjPXYGQHWZ3RSPdqdUvjie6S9w5JTXcpqCcKdbymn14vfT6P5PhYoNv"
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
