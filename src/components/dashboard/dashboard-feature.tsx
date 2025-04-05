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
    "2NULzSivoN3ztk4pR1jTtjBEEfXGyDFwkCm9YxnVsSZApt256hsJp35ELcaxEVRU2sRvS2N7kUx2gNgRmtGUnkr4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xpPBn9fzr2C8Ko8kFBukSmmDZ5WCqZacBz2r1g1cBYnMZveE5RSzNnMim1WroUY8Jdytu7jRUAnvukMy8g8zaCC",
  "key1": "4bSDbeyxxq9ksEeR8JB8MLRreowB9FXxs46QPEbi7wN75iEJRcaQDT4WacjC8oyDcLC5oVZ5XoSPwZNZUE5nrPjB",
  "key2": "5mAn4yEp6JsPMUpoZFTYqmkyN9G5JwD9v1a6dBzQg81G1tWheFXMVcq4RPkpuMeM4AR4fv1sYk4oRKgEyERyQmCT",
  "key3": "35SbPse1mqPDDJQkRfHETNyTVum3BWLoPcoYpiUoLS2DGWEgdZbLgkzVvi3CReSB1w9Q7AcwfyNARxg7PBS7StA9",
  "key4": "3fYejGLzDfMPDboDJAR7ncShxMrcaWbfcL2FHEgrh69Q2uYDC91xT4MjEm3YsJSUhQdoFwaeY8kdxs5zyDkR6zFY",
  "key5": "4gFGJucGduQPCvRvtChnwXXe6bqTB3FRFKff2gMGSV3gPc3HUxLiL4gCBe9b6W3NEbWb9tCQ6u69jUwQne87irEM",
  "key6": "2VqY6ciZ2bzfGiVuv3EQycPsQTCHQuPesDwnso2EK8wr4G7b5P6AjnruMb4PqngYzja6vbdM3Yanif9ARjKwsuuE",
  "key7": "2u6VBeqSdmRYVx9guiduandyKPpqgN8UAL5BeEmPA93cWTQKanteWccSHfmFKvWAZ2BBdNd43JAoMe7jNi85E23L",
  "key8": "jw6u2DuSNif95EjBpPDFLAviKrFrn5e1VzhJPoGs6v8TFKq2aE5gnaDZdcfjjiE5B5rkiBQXja9CvDt6yhHntwK",
  "key9": "2xF3uaCLMWnmgcTQqxe6WbiND1Gm13qJBSE1tFvWS8mn8qCimfKhuCSGkT6H7i8a5r6MgDLjaZDQYxr1F6buHUj9",
  "key10": "5d6Qo6zcQYV1Mdw87VfRavuFUQZN97UpZkyiSH94fE3b5Wjmvb1EUWSRDyXvAUv5vRCEh33mvjPNmSK7p8M41o8n",
  "key11": "5c71bXiFXKMwoZhzo2fyL5rXTmiYzm3XBU6xu1ZoiWQSLxbBFUVhqpCJ9sXFyK1sUB3aRnDu1c5aGAwBtfTT88kV",
  "key12": "4w2Nsb1SnCUHpiFUYA4a1tkzWDERhXnWhN8wLz62XTqRcyvY6ksM5tDNnhnLitqyTkUumWGeq2hro4CAjpu6b6uJ",
  "key13": "MmZrNS6qapD1bAFNd9EUDW5XT8RizuVumYhjYxtvo33pKTAWsDAuwHeyZDb2ehYdPwxavLs4YTZkiy4Uh4ofQYr",
  "key14": "kjh1dyp2sRJFWXZFtkrzoqTnRZ38485cwyHYNuebtsePBvPHMpg6wpuMP7tofo3GfGC6hkVwThQMpRkFGKPftDA",
  "key15": "2g5uAi9PMPoBLaUXjHKekaADqpD5uGJrQXv6ZhbTfgKdbDQsYkSXbhWR9JVhKn8AqusZTQbfJb81FFr5JkMVhdyM",
  "key16": "4aP8ZgY8sb1ZN5MqcMTaoRQHYncjusTyYLuQWABsue9vqDeTVYmfQkJBB9SxPgHCe14BEgPm2ECywzJuSLANXyEi",
  "key17": "3wX2CpZEBuSq4uGsZ2zF6a1Ma8ExJbr6wXoR1A6Dg8fPBUkggTh8EEaXXUCVFnj7gRskzaUeN89JkFohwNB1bqk5",
  "key18": "5YND412MUPQK5StB9fL5ypT3P9Hs8JMyA4HKfKxqJskUWvsgpUir9MoSstyVfYPSGdo9hkdZiWLppVfqz3NGWKL7",
  "key19": "3GquYLnyosxKhwxGTtYCSCzN4Pd6nRdLmbBWs45J2skwswzGiTcnB5C25hnTtMBLZhuKTDa9HHSSPuwyLVR1FAzJ",
  "key20": "LaPZ9pijLJULbUd8svzaeGn2Zeuz7NzvK5nQhH8XrfE9j9gLWeMXpP7nq76hXB2UNr9wUqhoNCw7gA2N1X1qJmk",
  "key21": "5WakjFBj96T4uZEB4yessNak91Y15grqADufRzdUk7QUpgTyazx89MS1dK4Vn8qqbHb5ZnrqcZt2r874kmAG7CA4",
  "key22": "5q76o9h8uBZBHZ82AaZhtm5cbGK9FhmHHUFEaeazGqycrgAvXeyjgAhfYtw7TMVvEEd9YyysGovEKEkLDC48rc3Z",
  "key23": "2N3in8GGJkLKaJDsuCcUBKYsWavuS4J2XtnAJ5GiTcCL4NjqBA5EFHG3adeeahKqqEhJgpsDapTivMDpyah8gVMH",
  "key24": "4NLhFQaP5cYdSroMKDqH8a2L3Mgb3rWydDEBb5PnCyacd8yQrpw596Yif1sPsZudXHPnosQgGKYa7BbNxge3e2nU",
  "key25": "5SNLX22pyKn1H999LHwdddixrh2fAHsuoh8fsLg69cKvKTQjSCxwWfbHsrPjYqRRFkzzPAW52NxcQeKhng47uKqb",
  "key26": "2zJo9mseB1FosdTTWWRThDSudMMBKt9YzSb5enWYNNjKaFSF8FYm43vuyxiXKvwCsq9RUdNgPv9umFXK9kbPLWXJ",
  "key27": "5Z8AwkPcK5Bb6WewXoD5rTzJEDJ6gemoXL6jtr9BgMEBdjp1Rm46uryAPhji4fz3hADumNJzSfpadWvbScPQcAmk",
  "key28": "YUG96zKpCGxHWifSDGEWBAJ5bqfUtUVeWBC2h8KuRkoj2rNiyjKmJsRZiaRa6bXEwSktNoug6JczcHa64Z7S5ng",
  "key29": "2mHJaGeuuHVrt49j5k3dBeJWvGzaFqteyya673hDZpJRNregQ9LQYMiV7fPGcQkv3AsCjMc1aXjwU1wxaM1p8GUz",
  "key30": "vrjYTZTd3eVwTmyrjG3Ch5mY5gFAMNKUuHDkgFBXp72SGn6JkbRtPMJdpJi9cXRsncKU5VgiM619V9ZmKtyopnT",
  "key31": "zS8yHSqgxTXnZCpX9KxCpPcYv1RdeQ8FHhEc1qLCkjiAkxaJeaBTg3HjJNgHpd77Pry6ixFkibdUaJV9BSVMbKM",
  "key32": "sGaLPAmqbY4rCFR252a1gyWuPqprsiPjdCHDeNJ58KGsyTVUzBJBNsde28SpAtEnBFFAfj5uk4eDmQbUy1QNTES",
  "key33": "5tMcRZVHfDQQRT2vdc2qgYN94EWDyNkd46n8kkxAx5TgGZ8H6UpAkfmae7S7zRk4s1z5qqdRbq14jmD7UjdeEe3S",
  "key34": "2h8CRqRfdx7accxXpXoRxRqmf19hQLEZZuMLp529K2E2hFRP3rnf3UzWP6LoXfQTmGni5iCER1yDAL1tiqdHXnpQ",
  "key35": "51NE6mwAM171iUBK9kbX1kard5xyEQA41fnCaFJb4nokyfQUC8pBsRkTfPWQVacwDmRHausMCTk7QCBdkPwyXoFP",
  "key36": "3HHx82fMmXHnyKhUMPXa4kNqz6oWc8yZp5Wgc4rZLdTwLJNK6rHMe65x6tmswgpoj2FnPnVXXPsJajMGMaTFfwJq",
  "key37": "41VMSExBrDNhRq8NDKaBaSZPc9V3tuc3c4i1U3rKwRxs9JweC5rD1S38D5fSkNLYQKKWHZu5r6EK3JfZMgckXSv5",
  "key38": "51q8ro7623vSUxXQMXkwEAgUxZjc9Q2Pruj8gk3jw9B1XDPS2sydgSYum2Wyw5WR2NvcocmVi92s3bR4PphJ1CVA",
  "key39": "4YqVuxAHDi1sqb2FkbpsomCtEE3jpd8iY9EJZSzGBNaoZ1RXJxdwN2QzRxE2GvnqxgQupicvfru6y1fYPaH4EAtP",
  "key40": "3yF4Sjte69Mq4HSMxWfamJCoYcxZDLXASf82xiS1AAGxZjtQkbNcYt8r6jKqQTvtfao9A1w1VQ3GRejtCZWbUhrs"
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
