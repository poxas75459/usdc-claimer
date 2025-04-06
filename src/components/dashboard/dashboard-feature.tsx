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
    "631etAK2t2eT5DHTpoMD8UkEysNqwHp53EyM5g99j77q3gLSJ3ZgHGnaPJihnzh3KnSAXkfr6ib42yChPZeX5Fww"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61fYnU7DqpjZMzUCx98314y1CzyVvKUnxQa5u4MeXREJNhYNsFz2W4BL83dqpKKMpkfoMqBjzSSVqsst14rPGzSA",
  "key1": "5XTzyBUqiSHijb186zG96WmhoUfVth8M2mfhq5dUPkUjEdmv72hUomca4XXuG1KfyVxgJYUWjN3knbbcNJv5tL85",
  "key2": "61UBJwMyR1PooMeg2RsACwqALoHfX2J9F8QehuYs3JrHbfFupxo9buz5vpy3GCq4ZLuciku32gczwPp2KNku5oJa",
  "key3": "3t3kB4Z9oZSZqj5176BXyJfNJEsik4yWxBuS8r8a8N9reWN5CkAafmSfnEPH4kpnV5cZbBXtWfKWgCgypkPBjT4L",
  "key4": "4gpgoWvAS2mPztAhkhPNi5JtK3FQ3VH2RKKf6PSgzWEAiBV7SGKfeB3nftNDFy1bgjR5JwpfdVoTxiE95ztGFEs",
  "key5": "2PFzfdSJJKLxhstWkUr3p7NpzQPQUCHnQQ9Lx5kfH4mQ5Qtap2u254YctyV2QFmHigLvxkU856iEzrq2EDNeA7JJ",
  "key6": "Fr19zYRStEQVg5SNC4yfZVfkLQtfYhwmVzqQLU5MyxEK5sQk44ZykXZWV1h3maL5qqRuseE8n5vDJuL5KEm9NuX",
  "key7": "3snLDsZFLd7TQCj4Rq1dL3LTVGyiyB573ghi8jjmjUtQBd6DmhEKmiGzPCe5q9oS9sbBiLFH89CwnJNgV3wdTdLe",
  "key8": "V42tbLhsKCS1Mai4Ex43H7fxiwF6tk1CbxrUKzfbZd7EJkpp8eSxzzJ9Qtb2nu8VDXPNg7ysvPsxgBtnNwoTkh2",
  "key9": "rTgqBsKUjCLe7ftCbEzmmrcbS5UtR6F6NhbnX5H7SkxYbTzg59rHmko3Rvkrn5yCyGSMwYC9UFhnAzC3DqrGNzG",
  "key10": "4eY4VEyx8Aa3D87fEL7AbQB7EkW2BTAP8DudR1PZt9v9b7osA6e7xCzRk62F3ELA2UFdRq7gFPkxj5KCZiGbEbGP",
  "key11": "7dgKRiyEYXH25YYqb25akbqAEEcTyxMuPqRnz8Zd1c3HT2vFXBGmKBuYcJz5AvywKsfZEe3Egr2sGeBMaCnKfXB",
  "key12": "4Jt7wnZn245krTMTBLsr9BJzraCd3UufnGSqXa7hFUxpybQGDZdMTbc7JY7xgmreSa6rpv6d5cwt6kQmMAsVKHFd",
  "key13": "4KRxNhFHjfX6prW6b3dW76KM4FEynKTbf6pix3NRc2u9achTP9ccntE7bPEt2bvtn1uX2BvfKVyqDzBGun8gzAJb",
  "key14": "67EyzTQDrk69XrDG6E55EgyyxEjYh7nY9gUkC4gMYHkqdbteVopghN8LcJ7BswjaqEXaB6pLaawxFrfsx9GCirZH",
  "key15": "38KpV4RZwQmD9H3ubALMV4Qe9Qg8DKsGiKdPYcteTPaUDTVJwn49YBCfKFoZiXZt7kYoGWQBiyJxAyXFCVb3SxtD",
  "key16": "3VgzTEdA5FoZYeHWmfsWACWXHEGsvHmgattQV5dSDoJNFfRRMyjcuVWEkTdy6QCmteQ74E3hbSqmZ8m6bkWEMFe",
  "key17": "5oF1nJUUAHZTsDTKGHyH5z2n4ducYHABxbwwSwGt7qPAxW7wTTuUxyTFAkTztQscpbfXWZdoFFZpzbrHuSPskcEz",
  "key18": "2yiig5Qm7HRFC1XbB6aJAyTLrChFYoeG6jxro5wvAPr26q9R9gsiB5BNMDdKautdKWbJnkCsWyMotRkSBwxRjvow",
  "key19": "3SJeytoaMGHMsst8YMak7kQZyVhri9thGnwsHeYR8oZ9xVwUAQpV1ksCfcRJYv3bkfd1yDKrA7C5VUdSWJgKUq6",
  "key20": "bDfpwjyynCkfWA67Pcf9StJ95ZCRzwxM46kg3kPoQaiJHq7n122inYBaphs7y6kMqUxBXyH9inGumuGiuCVV7f9",
  "key21": "UdDvT1S9VSiW9Xk92Lqh8Z1BtB7CqFkieSHC7ocExfVH2Bjw9pgdXrABG7tPHE5rcZWcTvn9AVbJnCZ2ubvzXDj",
  "key22": "3NnZrpsZ71yRAGuXmucLk8W9Pf95zmjU7BmGujsCeXKhX7DdoxswfbcEF5b1UXkACte62Cyum843D44EWBBjqRDq",
  "key23": "AKKAbTMbsbCFZm4FXeQZkwGZmMqUaVJexRmWsak6BFF9yneAkqUCUxPKaDvL3MAA9baWkD6F1QkpuhGxT5KGo9H",
  "key24": "CtPX8tYvUc7M5wf8f9gPqnkiAozLAE9LXPwnNA2zGQfQLkxHQunVKpkxA8KvyYHrVPNjyoARYMPxg6FHu7E8n3t",
  "key25": "bxMdgrw9hyoGH7zsDYtc3xRTLnCSCtePPuJVTjzm3nFyETmfwwjg4LFRZYrqaqCvS19JYahc8TqC3wZbGMK3KeL",
  "key26": "4S63HReUBw2etpHVb5o28VHr1mgN9w1MzpERuHw3Eq2BgdYjDCk2pez6KWsGWs1UotDDU62VL93qCAr59LM6W9N2",
  "key27": "4zzZtw17ytQRBpgP8sRbJfYwQqQ1QkgvTNgo57BvnnxF6ZAueffLPrDuxZQucRpEoYQ4twu3Dt14YuDHxu5iq3dn",
  "key28": "2TNdSmxkBag8Lr5usU7w2n7scXmRJ17bAZEw6yGWoqvUjk2i7Pp4Pd87Xvx7fadZBD8QGQ4kVTg2WD3rABBzHc3G",
  "key29": "2DXEqU45vPb49NdAEQWcd61gGXr2waS5i1kbo3TL83V8NnGto2hZAtEbbeDLXHo3Sx6Ns728a876nY1HCU7kfdoQ",
  "key30": "2wGJNbbizmdN7ge8vxpzxYQdP3fon5S3JEwHgCTttwiXJZew4ZdHxAicwy5JcC4ANCq1TQ2DhLNsFVSgxKzJ3Jmy",
  "key31": "38vqdGKwLbh2rfDB6xutFbwXK1m6QzVXkQTzXR9cRHSV3syUWkQnGQZMedDHFNrNdZnSPfe4aY3d8UfS3hm2gbRu",
  "key32": "59MRXjQw8BEHgusJXEAVtTDLPwjYjNEMoSocvTxhSrQnmbpbw61ZzdPq9mzAHEsTkgXaPjkE3wMWtcZ5we64L8tY"
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
