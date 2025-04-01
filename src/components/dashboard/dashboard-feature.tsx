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
    "3nnRaMJbQHcWQaJPfqG8GDCgHmrjvoAM88Ld2LAjRvewQaz9MRHwFxH7sH6jxZcVYeZj4h7geWs6RCt4kV2ofLmW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nmgmbcUuKvHZAATxKRr6ovhDJEGGxrZZ11yfKFE98Pi2tJmsSMis6DZFLzNjTAGLceN5H2fcyK6B4XTDHtHK6kS",
  "key1": "3CGrob4i4NBHzbSJhKaQEaFEUVgtS8VBSUGmFCNpa3VN6z8fcSuGb3HvTaecyPCQwsdtAD72vL91Myb7doW1xh2b",
  "key2": "mPGaKN9SfZ7xMG9EFDQWYLiBGZxJhxnE5y898CwjdrCNScgopwD7Ld9eLTrYejjNN6TWXXaiLNBnfzriU6wZctD",
  "key3": "5dqqppax5grunrb98s3Z2zTYqJRdU519nwcJwVbubzp9wtG8SRoPYcmzDcuZTGRK6MxC7EAH7ELqA7USTP8pXUZu",
  "key4": "4VESXWtBG19JuWuQ5rTu38kosiymsE6HPsnvNJE73hWQJMwtdeMLoGEtAF2hwDFAJNxFHEZddt7uu5WcUJaeg2v3",
  "key5": "5jPi5hhvwgrdnv34iUb478uVRmAiYStPVeLD47d2ou5FkwYfTUJibc7c2if3EPcmC5PKh4mqAG5mXskzBi3uphtG",
  "key6": "2w8L9cFGS9UTJGq1NoQn9aKejLPJXf43FDFUeLDvwD9Db2bBXbsdbjZtfyGK1S1WakBYJK1DWGFbHSsQ1UeCDt2r",
  "key7": "2sQZn423kxhsn5A1gKcfSk2uQgNwZc7dHm8CaDKsoS8sHBSybXFHLtzx5RdboKYZBt5CPLQ2tcWTcxw3ov2Ni6Zc",
  "key8": "5b16EPi3xVFeejJb5HR3vUmvyr3UFhcycehW5WQpV1WGU3b4QAY9CxEPf5Tb6vXhmCTLjsYWb1VaXsDfnB3718Yw",
  "key9": "2VhVV7neFxhCsjbtPMngUC7q8KAUQq7TWLhKBfLSyqaHo33xfPANkHwHP15rZnmHpzsPthgQdw7krkU2zrf2x2m9",
  "key10": "3GTAdYvvvzC3ykBaD99fT1ThxnkRTFuuWzJAweu5J4ALnPZj6QzTs7SxYjyC65zokGpAq1fXbKtW4rK2k1XHKGEL",
  "key11": "ijvn2SPAoentbV99SC5t24f64RVZwmR9cXZgwrrPYxuy8HdCp9AK4RY74zc1tjqMJGuT7EwKvC1ckCrJUqdSBio",
  "key12": "BLviDHy1GiCzzb2jousxpiNkDteuHndAA12tkP2QRbyhGqk53JfGLujPZg5gcAWFoN4BrmmfB72EFGdCC9XGUZi",
  "key13": "326zJKMFuUP339YGoLoU8Y2XPB3r3aQ7QFs7nWjhHQv62XuCrkx7yU5w5Xd3miRFACqVU1kRvU48vCkRo5urGeCr",
  "key14": "ZBLuipy2z5cMVM5yBk6L5c3vFuME3AcmCrsZ5zSfT1Jz4djsCkXTjhQUvmVAumaY2XrpoJuTd7Ji6EKF7RYZ4G4",
  "key15": "2DaancqUmDPwMuWHdi4ecrtwxTXiFUThbyz6jAmgoE23KUbc1AtN1u61EygsYcgjaZkkGgdKaz7pt3N4SZo77MtN",
  "key16": "2Q75mfh8a97BsZffmXZu8SWWTLP4h8Ut6p72G6VE9dqsXr5akHv7kngobjkUd4b819ujiumgzEjjNCSp2p4esHXh",
  "key17": "3yuS2vcPuw96vDJ8yWfMWhorJY3ntThniJLM4fAJvGrUBegqq1pa12hzQq9Z8miES2FDmi2pRUHfhMLwho21wsB1",
  "key18": "4UJkDDQrQPnTAFpDKeab2fLqgQAbrtme1ggVycxpZJE1MJbcS7pnTH5zW1JNUA9q3aF93p7hHxfEQ3ptPbMGsSKN",
  "key19": "QwuSB8Em2mXW1BsD1Ud6x8LRMgyevFAyRL29WX9B2BN7HfZ9Mk8Vj9HbyK3DF6Wv4ChTrGRoMjTiTsyLUS1Lyhe",
  "key20": "28tqfALumoLDaWeb1Q3SfhNzAM6KN1EWPA85sS86RGR6Sjt14yaDULnogPtynKD1so6t8joc2UjpgAVL6kdTsitz",
  "key21": "Yef6dcX6reBdwuusZSdWwezb8Kq7tA2rVtqQmV1BCV3KNjXnGaGhDPQVBJCXFJVJMGzrB3Z5m2z6BvDwXfaRBVw",
  "key22": "4fgXuEdXZfpoyizDiyqmhqHZ37gkb3KKm8kEuBS47E8xN7NnemZmeakYaDRnL5rrE9YoTxhLgyMVL1LvzJ2EXnBy",
  "key23": "5PTwrCtC4fXrWNW5hfDrcq3cgRFVx9FnJCvppnmoX6SdMgVvGXDR54x5aVCaPvGBpa2DkM9VnALmTs9dsCK5n2Yu",
  "key24": "2STo3tobhBaCgzEuhG1A8wLJMwdeLpnx3etraKrqHrjZEvSDqFGEG73mf9DZA4Braf9iV8Zf3KEM9AWK6zgDdsou",
  "key25": "29yMkktMmnPvhzVovzYNcKAMvYbwFj35dxNQJkQb1VwEbLyiupgMPht41GH7DzfBKty224hbDXQKNg8wnFLPZAuX",
  "key26": "3MxtpufhsuQEpCtfg171duw9MPzYYJQbZDgWn2qhomrY3NtvBCnEkqK74eyz2YXnpEmdHeoP9fdtva1ARxaABSas",
  "key27": "sAinkzekP5RFQLse1oMMENqkVWcpQVJgy7np6N2jkaBFEXEUCJq22eavcPX5csfomGndTc5eDZCG3fuswhAPRkF",
  "key28": "2ncFfabR6BPcujUJEFg8ag7KMoPCJ54CrMxHMDWagaywxqMcVdvjatwTmZsqJyVmNaN7oHjCUdpPa17wigk41uti",
  "key29": "2nJfKiezTndRSHT3prAkskzqM7n7wpG123A7cXdXk8CgGS3PWCi24L5rdG4NjZZSomR1TrAGKtHMdPUshrrF1xYH",
  "key30": "CNcVxhsU2aNLbeW4asZRcQ6zNjfgh9ZqMme2tZfNfrKb7DqpYuwvhh3kSUepZTMmPF1RRKotDLcpimqNMB8CjWe",
  "key31": "3jmGShysHvZmDyKnnv5ccHLjErvudnYdAriVU3vrq64xwMJao4mY1gkmYZNhwcxGxHZzLnv2b2pLZTiiSPkjfZb4",
  "key32": "5rfwM9BiyF7SBr8uvEwhNx3sVsYT2WsW5xmrbLi3DCNNKTxDUGbuQ8pmr6tCAQ7TgMQB3yMzXjavLwEEs38wwTjX",
  "key33": "4ud5hYMm9cPsmkf9izmmKW9CXAg4gxtJv4rkXAYcUbMoDuLccqRDY8AkGz4yTwRjNGQr7QuDPHnHVbdBBUuavvrr",
  "key34": "5EYBNd86nRtJj3BiJa9hGgfB8hGv1aPJSPXpRz13bWGkeE6hqzmyoidv6owbKKzVyKdmZ59R9w5jF5MB6RZ2JqKS",
  "key35": "rKVZSfAmUEpNeuZRpEzZYYgUccEJuxBhXRNXsvQjKfHEpZPhmhgMAmzuPVx4y5Q8VSEdrW9Ap4cr2VCWSDgjAxU",
  "key36": "4t5hx3UE7wMCvZvYnjaNTuykMrR9554ia22nxqei39wYHQKHLAqrWbMcBW3V5apoTVojbR1XcrRUkV3LwxNRSxNN",
  "key37": "3Gz9zMNtGcmN5NeUQErZQX9KTtsPT97Z6LqfTGG35LQ89G8nTCnQUDJ1SPY74ufHfAD2aAXjZM4S6T1FCkFbd8fe",
  "key38": "3xYReTVaXNxGWz4zWCxVbsJ76eshBtAe2jrANPHa6fomcFNC8jA1PPYZszJNCLXgRv1FCmhEcrQtiRaCkhDkJ2gB",
  "key39": "243LrWNeALb1Rs5jGKL5hK1p4wq4eYhmsZ4LgNXR4VvRkyp8T5WoXjLTeNUv2bW7Lus8G6xkDz9h7MDzYuzqP5JV",
  "key40": "2gKE9hWeVJgJsKHFfyvhDs82xKCMdkG4Z7tbtoRV71Mh5XBrJgKHFmfhnb7cxmkZJ4cUfJqTZntMDv8Nprh15NJs",
  "key41": "3CK5sFk7qzes7GZ4sRwxwALMJAnxQyAKqvhPabzzroRgbSYtFxnUvwfuL4xd4sejtKgEGdUpFWb3ephkrL7mQ4zi",
  "key42": "fSjuThDeonju6brL55VPEceoxxCy2dmdAG6GjTRbfrW5YsRvZhzM7NMBoJasrNwzkevsxfsj5w5nkT6AKtNXgoY",
  "key43": "4LanpyPSdhMLnekuq2BtEsBD1Z4jSkJAQTQyNVF7sVoVBX6pyZQsjnMh7AYsw3nKi4KfE9bgKtiysdydXToN3NH9",
  "key44": "24cwpBdS1Njtic9cZuU1p3PCRZizEPdfVpWeGP7KAptSL7GHUVkXRSGZeLHfmM2en1m3fT4ESKhc9B4f1xwbNLgq",
  "key45": "jx14XUftga8UC99hE1n57dYJfMKwai7xhBQJKQ1gAvPrm8mRKLHq1KbA6B6iy52Jg7AgxsSGc4myiy9siyNzGPM",
  "key46": "5YWFySsSawb6Sj7QpaVe9uR6Bs8AVnGDcFMoNLcXYPthUWxZrv3oagcVSMc976oTmo9j41iKoZHVH19mUEzRfRhY",
  "key47": "2P2R23GTcjQENVKcG7FLWswyrW5Hb5Vs5KNECqM1xCELT5DNt89Yryz9TwVKXHAWV585nxYCQpscxWx9ZMTc8Tti",
  "key48": "4pE1NoYdksFurXbbn6XdgMHpBjZ57nsy195a5Z7meRTb4dqQUABj67o3fMY84seLR9EEh7TGWwPoAXCzFBWtABF4",
  "key49": "2NPWKsSZipTqexBz5kv9uzSCFkyE41KfwftUbfgyHQFnhBokojwQ59J42Qznj3dcp9BcV5tAgG2cGCivFpYYokJp"
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
