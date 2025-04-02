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
    "4ZCKt5P7UBEtAKN9HuPHFjd434i6bYAmJcHDAuN9b3N15YQGL6vbKBY9gKUc11iWNu4uUyTetm1eM12NmnDB6Wjb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YQwGvvuRRjpUkRukUhiAfcVuotXcfeNVyBwm1Qo1CJZvFHwTTL3uXyc4L3DsPeUqETBta7wLdeNucmfHWmScqSA",
  "key1": "5wgK9SkxbdyzCVirg8i7UWoiCYTeqFuzJKxqip3xg9txaj5bRRVRyBzCuKfmqv3Bh3j3LUAMKQUyjN8En3yMB1mj",
  "key2": "4BMPm7wdfkUWYJGpkdLkpMHDEGRznDApbp79oHShCyWMWHpygPFHrNPFzFRjtVEUUVwMJwkP2PrbGeoJ1DQPVf2j",
  "key3": "5b868vbqrY5YSZWGthKJezPhcYa9H3M73NbwUUYHx9kdEaXeqUk3mRhiGjQhyXGp2jL3LP3PZHoek9Udso6D7V4e",
  "key4": "4nzUgo7mE7tvkZ3aQHow7bFaUfaHEDSVHfhKHvECxSb3f7jtpJeqWa1cbXB2qf3eF4TL1Sn1GjFgcvRLjh389wce",
  "key5": "2WkqxDYkxPBn7xGdrL87MSWiBgTpkaLDmHS6WTfT3ffrE84fq9khJcczUsFErXKkMpj6A4FTVEvyNWSxWQZNCcEz",
  "key6": "3kuo9NDKGWgj6azYYBGSP3PshWcQe4ihGXHhrPpKkbkPUdfnd3yPnvk9oW8k2UEh1YDPCSQrzbXQGrX5L1nFFF8Q",
  "key7": "3P7iqd2Zh1KQgofFayPjMMK4uec1oQwK5goGDB9r8eXPC8LKJcdGG4xSoztAmvZsPBMZwpC1NNuGNd8NN28w4hvr",
  "key8": "5cqbGHqSx7NNwS1p8GnD47ihqVNF6E6z4SohbJQu12NqEZP5JfRxve5AVSWP3TVLn6Bc32UkFaAqvhqjNjc1pMdi",
  "key9": "2HeCJUwyRxfpKjnxgd6kXsLD7mMMn4A8R8WPiP2xyM2F1J5fjUexKFBRuvcaGNMzEG69DD8PMsmLR8cNt6cYLGkt",
  "key10": "2NXmQCxArRAQGbubdtr6b4ZDMqCRDuY7ssPgJwZoiMJEBCPrsoogcVcAxPUW8YDywGmrK2RKG9FcjgZg4s29HPf6",
  "key11": "5dqxhGtZLWyKdZp3mg8mxQGp3hLzMdQHgQrBPsRhL4gS4r83urqzonqVb949Ac47Fq6ox2jZjfUohKVrwCkTcUxv",
  "key12": "aFsJpEkEcaFKw55gAHChemQs9dYWeuKq8agUKgc3XdoaocnLb5qZxmfy4FJHbnSv4wrymJuJk2F8mbDJ1hf5Pcm",
  "key13": "27qgB7dLLK5FRhWsUQMMPhD5dVB3JpyVeo3qURsRMiQUuayQv7DrTXRikB4tD4WzbtsKz7JxjiVQkxFTKA6inLrX",
  "key14": "3CSdbpKpxAmbDjBA3AsK7vJ3D8kEBTb9RafuTBzANDgoQ7b25LtSKVrd81tgJ6umgKdMjmxhLCdouXTgApkYBJkH",
  "key15": "3gBRkuJLxyTyAKdMKPH5F21u4reZ5pQyR5diGUMK92sKenc5fUyaLr9v6cnL8w2MpTW795B7jhKi1HDjsYmhLYd3",
  "key16": "4PZ1N5RUeJt7c515cjuY8sobnRArY12FNFG7TbztDFtyfmpUpKbjwR6xPyCutFyZXPMyd5FKYK6WC7fMsU5jqe18",
  "key17": "4ju9wFoCSjHeTYM1RwyK91Eoz9JD9y338iFDkn2jhKKrmh4o148EUVPw5rWmK5YfL68ZSzBu8brekcUdLVtzwxUQ",
  "key18": "26X9qS26DaAoCgsHPHgja4XLEk6h35tQg3HHpBimPYD9xgac36yVmKV497ZgQKWsQvzNr995deb5yd6NHHUwu8NG",
  "key19": "4WtkNTH62EABa79kffFjrGzzocqYZMEFmFP7AYCvv98AhgTKxbS2PsuEPRj5PfM9Ld2L9Jm5Ex8hcaNxZLfKuV2b",
  "key20": "54tf8nBisBbjpdwevAxP42LbXxD1qahtTqXetrRsvxdRLKXgza4owUmRN5yt2VUe9duoWtRFjooHHQNNp7AdPoMv",
  "key21": "GYhsLJeP2pUfkQZNdTD2D8nEF2PjgYUtDt794xpsgFntwaMNN8CNNBPzjeWWvmnzBiBL9CbzkQbcexc94J1Y6pC",
  "key22": "rcmZ9ogParf6GWzH6V1NXePW4fDAYuiSDXs3DY3Bb1gt2h9Uchh4BSr6Rm3mb99RV1esho5yL3KXLRwBeYu6bmV",
  "key23": "3J6czy2m3QRoh6SagmkBGoddXmpMHrEVBe5q77CCRZg79zGCZUfdTEPdFmRaq9vaRS85nKQWcqBsDyC1JH2u8Yjv",
  "key24": "4PpDEmbxUKxTsg5BsjB285PuBtaB1QyaEotN9BPC8QGKUDbfUgaGFZD6zdeRtzf2ZcALs72Co3pmx8HX2sdgfKUa",
  "key25": "3ZuMBWMhHF5k5PxCHDrHoe9aKFRrZihBQQm5SvHwG4p2fsL2wmXQvTVEfR6odfnKVQREV8gThWwJRV9MrtneMtB7",
  "key26": "5WtgBeTj7pMu2yjSeC4Yu1NATr5TH4YxQ42HQsKLpxNH9D72ZXhEVH6jzEPMbBqPGiFGijN6vC3Dz8sBd6TcWPkq",
  "key27": "5RF2uFb1PByuHzGJoxQnNv5hm2XcV9CcPMnMLd8iUTHNMB32mQDcqoYsFsBan2a9q1yBv17WwQytjqfuEHvc59ry",
  "key28": "mwojST3Hn7qFpEBdgu755NSq8pjiKMSPexhbCfPtuQYJJgpgru8C4fhRRkWAX9r7s7EasVnBrwommNGjuQSwKVQ",
  "key29": "3qQovBbaj1caLi7ctgTJLrkj1XbUUTFanzwmj3swDdyykqWu5iUzPpos9rqvU2aVwyzcRJkFia5yXX4eZ1scxxaT",
  "key30": "2XbxZUCFtGoPYMHzgKtFp6QcnmDQ6A1Lp3xjkBg6EYWxTVTFvZpGTcKmrhPfkqTPSKtABoUDkbE1pydhXtdeuP71",
  "key31": "34XVosbAqALaZ1jisghoHbDAAHXcdEp9YAQKg28igwocTHhJbozrGKEMFzU8gkQ4q4DHZ5xU8Gxc5n7VjuDNfcVc",
  "key32": "4CwPPwYX2gAKzMQVhN35SC4nbLG8nwYHJCfoASKxqoAtbL12fJXBMKGJTgX2g4HtUfXZj3r2LTnbCYmTrJh9rL81",
  "key33": "FZ7g3pJox85g2y28GzKeri6o4X2tws7eVqMGYwYS1UqsinAnMXy8YRmARhz5ZwqGvqRnas6EBiqNSkMBDDY2Fd8"
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
