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
    "Fi1xA5nMzm8NJ9ft8SXnq5jkQCtFjMELJVmuLgsEs6Pxg8kQGy3oAgB6ZEMwLiEbpjyvEq6a1uxHdwYF2DxkUP2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xmE2GonJX6ByKH7EpfE8QUgXYb3pvyYEcBnPnphdc1QU921VEawfCEEbFr2iN5NZLREvr7qzquWyWeAKhp1DYjk",
  "key1": "2dhYgtWjUXaPkLxLsgH71FvgXiwfeCFv3BjVeFFo9VKXVogbhuvm47xXiFcJhwaWcCmfX1oYnyEMcg5xJWCKLMLA",
  "key2": "5NhEDrPjsii4SQYNqz9TryTmHshmYKUPW4HPXG9ciPdqVyyPi2r8ECZWs2MCj24qo413jD1wonHDbACLee2FHkQT",
  "key3": "2qYxs8NEDot4h7UTmKjo1nrTEmrwTpBBiGRTmzz8FGFaSkQjzwtHycqzXSDNPe7KRZUNP1Ss4B4iq5upSWh3uGfK",
  "key4": "34HNMj6DNuhVvfDH9RRGGpLkmz7k1Rzeto1sDMy3KP6cgPkzjL8npR2WW9mMDJ9tgRoEJS94QkGpVUUMGjLAACgM",
  "key5": "2djRxbEK2SjxQ8nHLykMhoRnzPygzWpSYfcQP73rKuqedVaGLnxAsCM2nrYoCSix4P2bMnBKh3ck9kWxjU9dzRHw",
  "key6": "3hP5ss8TcezqvE8w9Zcs2ZmENwnJfwzUTnubN8SLdzT9sVYKCbEynqKbQPnMegF7AWFV98o5d6UjaBiDZWW7CYd",
  "key7": "3UbvywzfmjDBW5eaR8XQyfeJWfuyRQohYtS4sB99Tn5KfriCiDhSDazr4GJnyJiddK7Lp5RbPKiNA9zx8XUhwCxR",
  "key8": "38HFn6N65y7nrJU6rroM61jixkZy2265GQTcAjMp7M3E4Pw2EKCvAFsU3YtSiJHHX2wDsugM7uiE1ETbNFhjw2C7",
  "key9": "49avi9XJHrbE2DeywTMt1KuYkVy7sjNcqUF3LUKjt6bvQ6CoRq2114wU1pBAzrd6b9XoSpJEnqEWxRDzEjfJRDL6",
  "key10": "3m2xoNNc76AEnLuG7wYApfa1gvVHBTqrQAxdtiZZigZ2jvBWwFVTmCfKg24dmEhERqRULwvTHFRTp8df8yeHZUEJ",
  "key11": "5cSDJ9FfnEhWyami6AVfoB5nh3Jp12cvkjiZ6CfxYUvkuBPQp9wuC51wDLpkm57YKsBn5A8Wk7GbjE1U1ab24UZJ",
  "key12": "2sV7ETbLWeYHqHcpsA9SytTsv24v87HQtEr5qS5DFmp3j9PYAmMcXiw7rkM9fSENciUjs3vg8gt58wABRhjCtuFp",
  "key13": "3VPvXZ8o3nbMVxUpfsiqzuwvt2anFiTFZSDtFwJfdh6N2idqUVYa8vdcPz5aDeQu3McgWHrPPfjivJSdjUf1iQqd",
  "key14": "4oXB9vGLn87Z9PWjD9LFfdpLUzXen1rr5PDnTCSbRFQkFp3V38Sg14iT5KNa2roLxa9eTRpjvY99bYiT3gPf7TFa",
  "key15": "5ZkMDRmUoVeDbJs6fbqzw9tkFeRCEcMDTbDx5tVk5QQ3EhS8DoF56XGpygGDTZ5wqfQMEHSwRAtzzw41UWRh5sTj",
  "key16": "2SV9gtqYNEAjh7FujtjD64t1nHqspQ5R4QFbrW8n2kSjCK8a8C3JRRG4Xvaiqgbq4wXGtrNPt9W4tg7dg3Cafg4s",
  "key17": "56A8mE2SiMa6yPGNxRxQzFENb2ofoSFXGaqzEwWur4fZNaSgfxd2GrYqDwxYHRLtXfwUZywxTs4t7ghvEyXMwmph",
  "key18": "5sBVbno74WFMeNFQHYTZPVkrtURP9hKsWvL4BLaH8XbgEAVA4JBZq34xwoiaTEwBBoZeqBeB31zQG6GTwzdkKNGd",
  "key19": "3ydCbPAh7bD1Xd5QTpQZF7fLvLUYtusECoT9aTGQtXvG1h2Qn8pRWxngFjDkTUnG4prQoMp9ho3AfdrfezgncgKW",
  "key20": "463a9qsKjnAbtfXVNCs9bRVd72Bj7LXk91t2PDts8UoVhepX636P3dZwdvFfpmwyNt6xr5CJLprx7DDmYC5Q2g9s",
  "key21": "2eAfdZrzsq2Qd8UxB3oez4mkUDr9rkSPb7g6ARbadEEkKTJPWRsjRKYcnDtHnNCAqczBCvbvTu2hRppdJUEQhP3x",
  "key22": "2HYfk1Cti1p1x7hMiNCwj7x7h2JRL5bbae4LXZj6mtqtQn9gbqMh7xgfxm68Fdxg7uphLrkugA2jgSrKpYQbuNf5",
  "key23": "2e3W8fQjwa6MChB5JZRtHpDk3v7dRkXAWVsuKkPgCGy1oAdGjCuEi6d43d2D6JM74xds5oXfbunnfL15DxsKhxQX",
  "key24": "nAfRN7xC1d4QLZj55JRnYWLzENrXoC6PeUspL8VWZwCZdiR1tkxbE5wpopAPZu4iSk5eU4y3PPoNPSKVERDZ68s",
  "key25": "341BxC55SiB5waVRuMnLN4gpzq8fc19V7i5LGW3LxCnU53XJKeSefJJqSPMfwTFe6oK3XajUTWezGnKXPFHPtPin",
  "key26": "xAxSPwoAcK2waGwH1H451ovD87buiZjSBoaUzQgorSvtfAGYQR31TCFjqipNh1MRERkcqufusLfDTbU5rpVkVam",
  "key27": "3oVtQTjJHq1jSMfbc3519fffLrupY6Un7ivAWp1CmmEPJCwDVgsXWDWo1XD2DrYxTxo4ANFgVrZxmd9tRptJuQeh",
  "key28": "5gL2Dfjf6puiKt4xCd5onuwFSLK7xSQBRNEotfATPP3mhNd8DFGxxMbUuAHMmRq9tjr8JDp22m9ugvYtBo4Lei6R",
  "key29": "3EpMKd2dh9godGUpWrZug2bzjjtXCqzmGZtgGmBqEf1gpuUWuzoy6GadhWeV4W7tZUvjLGdcFekYckdEqJ1ex1HW",
  "key30": "5Jaaf9zTArEKDrHe8jeUnyaZddxfGXJXnxuUpWFUrCuh93hExc4wTkJZUNYCUgr8FQfmQ3eetEAXZZ2EWGE3zi2L"
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
