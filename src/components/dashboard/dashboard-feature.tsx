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
    "43og2cuPyfLKnkt1mYnMMnYpsiVDrnBBQzD9hb3jExFbkoWNJiGT2T7LgKRkSP34RzHZ5RVoABwQkVVWUUDYgXJm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zVTaXH4Hx2j3EXGwrkWN1zvAA8kVarZxmbrWHBaRvxoS6sS3eY4wtDubyvYEoL2RLAYpdjJNA4fcJMjz96huTJB",
  "key1": "5z7kopCT74P6gih1YTwy77tyQaeZVJ2iBUKqdT18p8yCS9rbFTpN7nsgjKaB6SNrqqBceoy63YSs9cvDVRAugVGC",
  "key2": "wx1F1AdV5auxuSr2XzAytfSEjDnpmwYYLEvhcyFXUxDGqKZCusxpn2m8bqbdqWpmKr7n3A3aRvtbTapctkyC7t5",
  "key3": "4fqraeAQUZNsw2kPFeuu4gFNkFBrQZH5xYuvkLK2JUCjsWaJ52JD4aY82sWAJE9kLaWWFRWLVWbG6zQMwP98as9x",
  "key4": "2aQJz5P6TXr7UATjZCZWjnXaH9WpVifmq5M9ubbwezBtovWoJX2RgbeFzVcEyP46YzVkPZMXTArvpeqkTRfN4bXN",
  "key5": "2jkHZ5BMhhvVqpqsRADcMtPhLTi8ghmawEUWMoeRtH4x5uXvtQpaEXgxtQkVMW5ss4bSSL26LF94sZtCPHAm73vy",
  "key6": "5xv3qAd66FP554XYB6nsrgGyW9CKUWQ2ur1YjBJZY7d1sABWRFwG89LmzYEhoHmtKBfnzm3dyHTBF78WE4pcP7F8",
  "key7": "2gzipkhFZ3Q9iZvVgHG3UG38E8kQwyGK8Awmz276W4Up3TqvbPGuxjQwm3hdMaZU76HtnoiNWDgBGTYpyzx2uaqr",
  "key8": "4v7AaTJTtMQXYvufK2HJed7DJTMMxxcSUebq8VTqk6XG3yPTZzoVGakPswrApakSSptu2hg2DuVqZCNuRXFZhWuu",
  "key9": "5Nqmcp8TWGwXkW15EgsVydjeEz8KWBJRK3vZfR5jQohyLEpagBNG89oyhxGpNtBzCs3guSBUVMrNkWz5aP1wwPo7",
  "key10": "2gTQxhdPKudQCbYY4WzGeqaMff68nNSjsyqWHipuniDMq7qvo3DhbfJpXVreTyRYCncnQeKDt22Xqhpi7W2NT1Vq",
  "key11": "5P33p1k3NkuFXnAv9FBbVd1chnLZiTz2H8iCwZHwqZq4oQG7rW1tRMiKyKKDv6uRvWC3nMUY7icFk6Lga3ocB5bF",
  "key12": "4Tup9KbfVVgBKHrssk9cj4TxRSPxxshx51bsxyj2QhQNxjzYvyaj9YvC6TsDbkzsX2iiRJwkSwAyPZ3We5p2ohf6",
  "key13": "45WwV1sYmt7RANiWrZ35g3cY9KcV6ZRdPopaJU4qBwGmA8JhLHRG5zoEHUvS6w4cYudC6nxgMF5CtqzcPz8ppUri",
  "key14": "5g4JoNb2Y4fdqE9hjQBMeG5gEjt1fPTCkpWCtEbn2TmYYKMnNdyrSP8HyGH9Q1WXYuYrTJVVDSjeNRqwk8NoKiWL",
  "key15": "2Mdahcw7LbVD5qjzP9j2g26yDFdTBrEStDb7LSVBjoEr4uAYvzVuAuSryzq7ZDmTX7N2sQeDoPeR3Aufpa9KMDjh",
  "key16": "5JNtg3mFpC7y52cgo4R1uy8Jn7LbLxfp2r2BtCGBxrAZF1KvhKUCLfucmnZqKds5Yk757ktikbhenHLiZz4VUrkG",
  "key17": "2sv7GVYNXFDQHGFgdjr9EqC6zg3n2BfxjQU81FCeJvo895LeaFMVg1EBdRAjoCyiHYNUGNb6U9FyLpTsJ5xXgK7s",
  "key18": "5ngaFbhDdFAMtkw59wTEXJZUWQNTbCUbNcmFtzfE9xSFWSotP9EYkrd7NKUb2xCPL3i5wSt9bzbkLACjBR4Ewytp",
  "key19": "4PMfMkfNwQv2MnX3JnNDnWvq2e8MmYfJoDDqzBinBSUcCxZ7Yi8aQqqtYp1uLGuYPfjZxGiPPCKBDtGccR9c8QCy",
  "key20": "4Qbw7msfJG2odsuyxBQicFrDSEKQp1Uy1jfncq6FqPoEMD7A7cqJttjQQo3gnR43Sb9tauTf3sy3pdqbSk5hDwAT",
  "key21": "D6DGLoD1oFMvH2Dc1pkJPSTRnYD8b93XB3KaFY7oeBQEqMgHjdeJPDZLKpmjsUmLuNaV3ni3Nuv6kq7u4NTqVSa",
  "key22": "b6PDwpbgzp2KMVaRJ41FwW5UgzLSVFvDKK3A6iSr8c5cDAwHDjhWyNezEFYHzr65C7Ta2tuZRWAtqarUrLYUjL2",
  "key23": "32yYLJAUqc7fB3gaYDvmuGtWd997qCTfZxDpeazNZ8RauTxR38WtKrbq8m8JcsnmE1Vj4bEG6ftQTxqaZPbwJbNd",
  "key24": "3W6N5RWrXMzD4MzWCYEBz1CB4dtD8kYvqZVbRcvDYubKzjpzETp58pGS64CMqMfy9jua8yTUgqvMCo2Qppr4SmDJ",
  "key25": "5QKeC9Evmje8bX1SWAWNMSFXi4hDMDBxE6941MAdVTZDEgvDccZL8k1tQTAPESXCcbi9h8EfJUfg6tNMMFXC83Wc",
  "key26": "41b252t5UbvFuXwoz8p89pUh4MdFc2g49c3vuALnhJWZnMzpSYmsUH9PXMBJbmPEpAq2HquDLgnn3QECUN6M3Kkr",
  "key27": "65SmopkSzvvFFsTh63paTVDF19EeEmCQ2q4ArAjWunaRvUuRARUMqecxZXrS9i6w7tSCRehheRAayHTARVimhMbf",
  "key28": "5B6ePV2grxwcCgTMBbNVizQ7goUGXxH97YY277ypHF7VxPxKdDKWzx97Qw9RmMHnHdJm4w6T4xB63uTQet8sVAqa",
  "key29": "LUjSEjrbJhrXcfR2aA7xHbW3FbsVkWRJB8jCtb4VA181A9t5AF6hdvPDpu1xnh7WEK6sRMuQtrLmdbAqz1CVWe1",
  "key30": "2pHdnAu2oFHGEjyQjbnQdb7aF8urY2viX3k3UdKhWc9QU7FapxbHge2dAEhFuvsoKx1PwJqpDwfotG7ojShVmDrK",
  "key31": "2eNDGvrHZvCfhuwM1uSXUQM6i5YjR17zQqSZuts3ipaNUtPszHfiYCdwN79SK1u1QinA3R9sYM9KvvaEsLj9fDR",
  "key32": "4kPo5tQTbA4ydm17ACpF8ZT2n5tMXVCmXvsUwkh62ouJs5CFAizN78g8D7hsMEDkPrHPy4wf3YA8t1Zx9m5onTGB",
  "key33": "5HDHF6y5TtVu38QCVD1tYmUnMKVJrjVRGiUfuTnJxHdsJ7peFvik1g8mFenKH63RnN9qaxL3JKSMh5QzpxJD8aNM",
  "key34": "4QdZQAQAAwNyRmfu113WFcDUjKzcwSis8WohUyW8ULg2whjd2thCGbmcVrxzJsKkEMqTXzxUy8zjqPwTCoownYqs",
  "key35": "4KDjjd3HtENAdUXYKKSg3kLouXswQ1d2x3xZsc3sG1AwPnsGPsvJSPcpsPcGUpmr7WphsZz2nTJ3f6uSy1M4h4p9",
  "key36": "4rV3Yqus4KzMQoDtC5CtLHbjXJ5aefF31CTXeJkYDG7ZoAVSKiJE3xtgYXCvzsJuK8ca8i7WPtiwsJmiAQhib2e6"
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
