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
    "5FRCa78Qzy5TC8yf1pe2JbR1e8yaScTLe1kipJLWi5fsHbXNDXewLhLtv6J2CuVqDrkDYSE5rd3QoSjYomBTKFQo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "m9BmRvvWKANKZqgA9DWX7AV2QerZv3gfu5ooWgm8n6T459FhtVTo3HSL5rnutRZ3zFG36HhZhir1krXbdXfM7pD",
  "key1": "3nMgR7dSwPBEwJfDdnxsHcqFC6Aqn77XtYimtsUYzAdTzLS5ga6GAAUbf5vnN9QuSizDchEjdoF8UbnkbzwAZbEw",
  "key2": "2bPZfjKkYkKyMMt55dP4Dd4sTB955YCuPdUp2VkxfHG2BKHwmkuUpq1bpJFtCbwNYP7b6grnZw16EJkRaDYKATU7",
  "key3": "2d7EhxhrRRiyLjoMA6VpeepChNLw1gLyS37vTNrECBycWB5JxTgVgQ77NJT49WYgNVfTZqoLVAkyHyawNorFph69",
  "key4": "4EBVQM57CByin4gd9EJDZyimJ6a9XrzekjnNpL5uQKfapgM4Mu9GPKs2UXbXoFcarTZea1fwwTtBAUTMN3jczZ6Z",
  "key5": "4KycdVchjvk3zgKNZ8Yx8Rzek63gXp91HnLqyLEnuWJNDVVKZ971QyXQ2ViAWsypFfTxPXixD3m5o61E5KEZnQCG",
  "key6": "4f38v1u2TyC2PkJBjqTEAb6T82nB45EZVcFvwfnk1MbWmitp7mUc8jr9JSh3DNz3kZpZiBx3B51zLBN5aWMoq2pL",
  "key7": "3xvJfgS3NgrZySnMaSgSRndTJLEKDvBRnGjG1YSjVkYDqR62ib6tG4bM99gUVZYvw1ir8jGkeURdKYKB8m8z7LkR",
  "key8": "HiWM7LeRSPeHqaCVEYtmrfBEJuwJmFqg4hbec3pj3ymmEiQz418cxEcy5FwnMxC2GJnNihYfjh7pDLcDgjYwFDt",
  "key9": "2gtiu7MA3Hb9EhPY77zCUqwdrEmVDmHb8jCUqtQVbmTAZzqtLZ42cCzQAwDm9YgngVFYRu82ggAjxYKmfyJEQafp",
  "key10": "5ybF56bzGsL6UnN16q2oUYBGLTP3zCPAyurjuAPsm8hNntoPebdjtenNEBiHUtM9BHRHTnHoRHu8n9V3PyTCYad5",
  "key11": "2fxYjfRwfxx5YeV5beTzLy7qUXvfrk8U3WMpYDmqZZVZ3tHfrK7vSBp5h3wF3yRp8Vmmosp9CGTPgJsGseFZ1u3k",
  "key12": "2orrvtPyqdwMsGZaaUb7v6oJwdZGcM1gjBBAytA8nC6Q9UbFtfRWdMvjGkHr3vGqErk4kswgUN555FnGew7KG3Xk",
  "key13": "qnuQDb1BQo5A52Fch9GAVNEiH4ocwUpqT4CB1gCNYDSkM4XphUwdfG8iU4WxgEc53vv5uSsWT3isY2kb7LPxTia",
  "key14": "3UKDSvuf4tWzEkYsqRXU6nmpWRtQLxbPBHCuskPo4Mix1bE4WgqVo8DzuJ5bEPQ2o9tgiTjRPfua8E6faQsHh3dw",
  "key15": "3N2q9ECn5PmLzC4hWmHhX4k6MbKchM5hFGX1z7gzCqhneNTiSZWyfYBJkYdYeXCix6rsV8itRzUpPbdzZVxwgYiJ",
  "key16": "3UvsjMdoWUcCamAuteBYaWDFDcddTGqyXNYqpYp7YLFEeEMzKKzu6biQM1eQvfUMTDJ77YgTX8KkBsJ6szibfNS5",
  "key17": "2SJpwQW2NbDBDE2Nwr41gea6AFrPgwbaiQErqVXnNLaJfurAmUVRaKFBGXdH25FgsrQQ19tjbUtVHYKaeLwSNmDc",
  "key18": "4sasnzkbAN6JG83ixJATFPcSFCMHcmLKccQ8YQY5ymjFLxWXU83vDzQiDpwgZVHnMyFoZzfSiHD1RJ12HZxtsxuA",
  "key19": "TR9RAtraMe8Egx3ujCsZpD54a27LxQDh6shMBvswMJk2Hoq2Df1Pgqa4LZbM2itKhNrpbHRPDNA3W4JxihWN1i4",
  "key20": "53BDMKTyZmN5xfJggMBg588U9uXt6ysnfwz9ZXRGaMu75qnCsnkvvAnhnZisaBPY9VGADjyfxZRyDhRrKfPDqFBc",
  "key21": "3WQjY2KvsD577PvcHzQfSSBkXnC7qkHY4zQmBmKEk1Hi84uQgZF4WqPc71QY41PgirWhvUsETGggjXZsFfhrXd4A",
  "key22": "3eRBSnGbZ9fj8ycvknxiEBo7PeRvQMjN7FXzU2a5pTCoNav3QPirqDWxjqcmpaKznbpbtuMKyRSr722hsqMRSnK4",
  "key23": "2u58xPbDoPVAGCBDZU5HSfQErQk461eMkBUYHw1bd7mzC1tAEmB5AoEDZSKBLc1YwZnaWJaM5uiwKPmiGbTE4jwX",
  "key24": "3yrvm9zs9pC8z6U9C9NxTAr479vtWzAWe1FJxc3JAXBAKhZj7xoEo81vpLa7cwA7ZLAn2QovPhVbLRGM2gxequQJ",
  "key25": "1t4EnoTWczVE4befKdMkbWhhz9ehRmgn6oYfBwEKzBRXr5oMi3rm1bs2Ne4nsYPj512GUWWziG4k9UCs33c52SW",
  "key26": "58bx7mLgwtseKMRZnPMQHTBd9eX5DEkj3epfHTjndbCQ1Lxoh5davXCu2c23Keyk3aVHyYx2AQx8yWwU2KCx3ZZ5",
  "key27": "3qyCEpaajvwobG3fbkon9d6oQTXeF7dYtKeLV6w3ria9yRsqBZRfPzV9iKtYCsejwFGygnmW5ozYiRUxfQ5nHqoZ",
  "key28": "579BFrggwxGBiaMqbue2FsueKaphArW7UFb37736jLbuhivbzcY6Q8Jq9fwRiYqYRPfegBAcdxiSENeVNZg8c7sn",
  "key29": "4H9kXvmZqPuPPhMYs7qASvPHpQxB8uHeHWryJmQnkYLn69PVDFLg4mQhq7FavEyNYJU48tsQxse4WWRrg5mjQXPS",
  "key30": "46Dkr8trd1fN6GQNGECuS6T77kW6fW9HgxxPCWkLGTeDF2qN3K8QLswc1v4n2LVqfuVS9y8xngyHN4VjxocsmNtq",
  "key31": "4Bwk7PULys5krtS119WuwZNDhVkQ6F9S7MCBpw1fh3Hp71xvbSXKaRexP8m1SKVe1YSKQMWt2wdvHLvJs1aVUiQN",
  "key32": "3dRNrxNdnDQhfVz7u9CuZ413QJPQBBjVcTjM6jezAoawT3CzBdTix68KVv4V1eh8HgG2rPinWXEpceb8qGUd24Vb",
  "key33": "Mt4tvjv6T2dJg8MgFdg5QQW7BbDuyUjkWVSutjL9dUwxHCWPF1aRDeXjMcTnGYWB2DKL2upSt3xWvHttCBfFnpn",
  "key34": "4VCfUvbcRrPsXVLiBThLXLxqFoBLM58gvZBfVzJxC7QNKEAhXWT3FpxiE2HLURsfdEgqJkQQ7Jv7JqEb9qBAB2yH",
  "key35": "4ZBh4cCzKjWpzdeFrJy4sw5hbxrqroekD9CLRHp5b9vbSLFnngaP7wLDcHePUWBPgvh5q23Ptg2FhsfZvhaT47YT",
  "key36": "PBEifjpmFFnzKxbiYHZAUjMVGkbN3HrDhodD51UuremQ12qoWVfjuDG6J9YtWHLUWvJRVPyxKB9dSS9fYGhq2om",
  "key37": "24t9CBEQJ2pX54R3oQjSzmk4irBGEScQRDGmp1FLD3ApzzraF3WWCgst4FoQaUrdCC1jcWT5B7WeA9f9TppJ6GD4",
  "key38": "52yg4j6v3c8b39MX9w8YLS7a584mFqzVMbCDiMGBYZTMNSs8y3snQfzEoKzSj734eszkTnZ2PsdgFSrjQtEcWggv",
  "key39": "5d4HuDus62pyE5kanudNhTKJcoAQKggeg5aMWpyipr7cxQXQdGUNrWTVQyAY6W4yHbidgxPBhBRTytWB7ZxNJjga",
  "key40": "5f3hTmiDjhWKtpKaqagQVM7u2DTSLZ1J6qNoEr6Ckzk2iQowKJ4sH7U7pZNnsPxeg46zBt2SrKaRPRgtuU2To3Ny",
  "key41": "2zjsLxG91j2uA1dMb3BpWV1D4SFVDqiDKk6kkxnP4QVNXGLYZYKUP1CkK8jC8u4hrfnr3CUKTbXj9d76kz7wGhBR",
  "key42": "3moRbs9wujorJNMg6CudEgBfYPHDbd5CfTqkQ3tKiwkU5B4xaKiXJ1NSVUPGmNJB5uTYuRXEioaf1oqxgky2H2Lr",
  "key43": "5thjifuBkptFzaABqJUxFh4mfXhYdsV1RWCchsVyVjytA5EVdPG3JxFxqnCqap9sHTMrsjigWSWFVgAkuxkrEJhy",
  "key44": "TrTqmbWPAQiedxLyTXujq3qNJbCmwAR6ss19LrwNfxmKKFQtZpPY9nJJmdryd7BXeuZTxXYcsUuY8HWc3RBZgTj",
  "key45": "3auNbEdeJb9kLr9v13VqK4kK3TJDAXieSxguNRubKgidtmBnEKuCjmjZ8Y9ka854vhKWUJq7xrYCiBAeYaJUnATr",
  "key46": "3EG64b2nt4dZH7vLGUQ3MAXPy3MG57XLk4SS7R4K56KSkAEhJHGvr6yq2UT3Xyx1uX3ssQewth9zXoC1FPu64Y6o"
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
