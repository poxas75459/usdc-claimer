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
    "4sgjxwVpTiVAs5ErxkZ525pV7LL5rV3MTwGTT5zkzoBT8G8K51jyG7iCeP4r9MysbULcxJZmA2eMdoP4YJghaW8r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vswQ6b9WdzPvLrz28kYQ49Crc1VkudQ1uhdezD51P9uRUa5AkYs8gYeewQF51ZFYsYck6tn8GMtRE11xX7q588s",
  "key1": "3DttguUp8XTJqQVFKeSdPn12TWFuKGnZgxTDvvG9qEF32fc2xyxajrQ36tUwJrY8Jfna9k2dUD7CATNfXj8N9H1e",
  "key2": "3qbwVxQDFCaNtXQ4Giocy8YscTPk6fzR67dmcj79SWXx5gDRW91MQWFWoXNBJtKB49eKAD3AzYnafUcqpw9iKmBF",
  "key3": "5DVXRX4WCutmmSzZWJHcrkS7uBTxLfTpDWs9GMCiv9KPb7JSSQ6p9PRKZDdwDYhfK8dyHgFZbvC6v2guKe2RjJFa",
  "key4": "4XbfGFFnMdj59WVYq5oVkrT8PKxxXp2DhHfgEzmLpZ6TnXS8jPyEy368Xk2KzHCYkxgKrK137mKL1QrspmvpjY8J",
  "key5": "2cbv2qpd5mSGD4kai8MHCWUqWxhT77UbdbsVbuHQv4LineqPJyYpyoudNMkDb4JW731Yv4pFh7KpaKAdMyuPFH5j",
  "key6": "2svnxPjCemYEuHvBA3nFesu57MH82kLAUfR5u2CEzaWM6547jJApWzRQ7Jb6CeKQhRPTRh5JN1uf3dJNHqC2hF1M",
  "key7": "4zo7T7fuDd1XgdeWH1wZrKtHVzzyiG4Js14UWswsMkeAJRC7KnwgcDSVFSLAseWH8t7h2zwnGhvPztuJKEKeazZB",
  "key8": "3huS7TpjgfWF5dRjPXCxRxAVL7uZXeUVKfnvhVBcmCy1iT1EKqSXpL5K9DCXQMj9wwMYHjCPcoAeEE1DtE2bF4jr",
  "key9": "24xcE1j5cPj6Lyw5p4dCNdDQSMcXeUpYY98a3TuNm8W9K8ed8w5jU6csFNddEKpi7e19yVAzCU7Ca55SteVB5aXM",
  "key10": "2uxToBPMMGjQNB6DLds9BVVrxr5Jsyw2jLcRwckJXngEvaSiswb3kAxiAb5RdNBjJt1Njcp8pyHXnCUhpZyiJ2LL",
  "key11": "2pd5WR2yEBNSvxvAF92f3zfmoGz3xENXVaog1DprFEDGs4ynPbXUyabGmsv7wsSFhbFjF3BcqdBM5QrGDsG4QqWL",
  "key12": "YdEjgXiWZMpu4nsZGM1JaTho8mdB23Cg2CAVydbNfQmYSsuFHiJfb8ctJ92oJmJT13MX2s5gvm9YvMTWd5XC2qT",
  "key13": "5APfAWhX4bhJH7hfdwUc9de9ivRGYdM2LE942Q7JhDEv32a5VCqdkKZKBnhYJsZ89zupBDivWXmh6x429uE5o9Ch",
  "key14": "2wbG7Xys3DyP5tTBWEnSW3rPBZKQM9ytN2AucR3wLWj84aCDQL1wgreA8E64i8F2otk6LFm7VZkbjv7JxLWhXyJC",
  "key15": "46x9VJmaUowGC3Cvb9iFmCLwLY62844xZxoDscPeNepYwzQijvEmvsykmgAddKPbnWwBYZyxiXnWnD4cDyvspjpJ",
  "key16": "v4Gnj9hZbtp8mgxp295Tz4SazeNLUrtcVzp4P9jeioSarADE56RwLhZuQmaGi2VnNJ5uswHCJnLjmsc1jzSAqko",
  "key17": "2RzXh4wNmbLJLV6LR56tKwnVxJYCpm3wh2RvUbLNty7U8W8TVEdb3uidqbYR9kaemHorb2VPRphG5YF1eFE4gpNN",
  "key18": "3N9SwTf9oBd1GVS1GFsXLdqZLsQNGJdsHr1buuiYB5XuCstcPZkUB2Tc3pxJvF3hpPg6t5b42tMjrRzRS7L1zb8D",
  "key19": "3ieEJKizvaQnLH32hpU42RJwdT81PaUQNwt8rPHyjwFLbxLQL7zXPfjCbL1dyn1eioukWP4G2LfGnTns7SygSayh",
  "key20": "3mCwTGrMi3MinYENaQn4hd2rdwm2Zz7xTjEoSGYHVMoGLrVeaWdRhed3A5aF5P4D21ZTDgXp7fPixRCSCKemBSXi",
  "key21": "5HM71vTjDL9oi8S513xANympQnKGqrnv3NpMgvBA3JaUQoNowVC6f9JtFRngr6jrhe7YWghcCEFHYQ5xgDYYLiLB",
  "key22": "5i1zV1bJ2nUuDtiFD9W9Dj6DiTve4HpmP7FjENmoTgqHm7QzdpMVFMxzUeaJXCK8XgCXHaz95YWgdiDnWKUZpd1j",
  "key23": "5zGZcV19CF5ooXghCYRQRmJ8rh3LKvwTvY6tUGoV2Kmy49XYBt3qgYKbpUKoJMEU2j8y6DgrEuUKYdmHML7ErvMP",
  "key24": "2o4bonBefA5HwKhoLa8McAeixZksv4ZnUkP7vxgir5yUvgoyzx34FFwJRuPsxtPv2dCWaEF8xVyXYvBa4d3hns33",
  "key25": "4U2yLuWHnMjkaxtELvrSznwABGKhKXL6ymaNBqtKmECXYYoqSmaUufrCwXZbYwi7kRD2Uk8BF3U2NuUbPoLqJrNU",
  "key26": "2iwmZMWHBG4Z9EMP7ZdG9nQZjE9TFiM4dUosUU3ro6ygHyat2aYjpG7JN9wxFnXqzSs8Yx2MrQmfeJDBvpWahRzZ",
  "key27": "35Vn27C3QAZzBW1ZzeyWtDZx3GJqB3cZx5QeLonF9q3HY61F1NA2KXcBe4hmb3u4GZZvdn2espQqQwZz6kWrjkow",
  "key28": "2YjLa9LKurEnWBoLr8c7WEgCkM4CamzmzKzEzcZM7LY9efb3Lfe2agj3nhTgJeq7LmQBrVvXwpxJXbSWuV5QwZGU",
  "key29": "3gb122d4s8tgMo3pcfHRgbGtj4zHvChmbYjXHMgv4NMiSWGUHr7mUbg9aDusnLRvuJvjKpXjCnqW14ATXRpUrcV2",
  "key30": "4jDxDNVqEUd7Cq2WzWS6QyAJuZGSgwbLnQfNFARH9Kt5FzD8bj6F55Cb9LWfoN9Mq98hBKXuAuk6MgmsV6YavnZG",
  "key31": "5FbFAF8cTs9oSroznLWHLLTpaovCxZzRU7CazJrq64m354f1VrgKWES13cNL6kMdkLXnxhTiUHuAw8BFBXM8hiv5",
  "key32": "4CY1G1BFC8RMDzgQQJvTTW5dDc3Wn1PiZSteQscFVNYUNXeFSJJBpLjZswWHDMH2j2r4ioyPvpPUMFiihAD6gjAx",
  "key33": "3quaZG8g9N5W1QRssPqfYh972EgCMC2Ep42vKSpVEh4cCbM4haAG1MkQg6vcRnSHVRRrLZnA3T45NKYcz5iSNr3U",
  "key34": "3iVDhUG7eeRGhF63EE5WA7eaM4d3TCS1q6wvDUh7DPAEmGs4LRyqrreiwFYoAAfPKdM7NjfFn1SMszpvtc3534aN",
  "key35": "66qPdgBYoVuFxUWrBgsQXAcF83Ntazdoj6HUXkiRVTX834kKm8cuQFgMdrFPNEEe3Bvp1sWAEsBENJHuSGSiVr61",
  "key36": "2Fw5GsbVZjzo6t9y9wXRDVnE16wGX4SQcFQC6J2Zr1RDVsYAHVwfu6LRxvAoJmH5o16mFw8xhJeUgxWTcP5TGjgx",
  "key37": "mjw1zqiYK6bpuGguMg1khnhayRidzPnHpgLarSz2ZLN84jN7Kkd2yDZZLu4p23sSQVeRU1MLbBsNuAHtx4hs7qY",
  "key38": "3RnPX6TuPwkzgv64cibk4tXS3YE3r3KzWcsfYJPq7aj9kjHUoXkqMxrDxn5JoT2ZH7Q1y2hBvVTU5i7N9yXzhreE"
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
