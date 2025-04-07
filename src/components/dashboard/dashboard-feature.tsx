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
    "4YqBmdhNcDyqe7H9UNSAr3k2dn7MXPSjChRnDAEJwSGPgqSRNkTU51zbMppNDkkWs9iHCkWGsDsKcTsSGNNuu2wn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HC7wvBSC9B7btHh8GtCBm6gyzsv6hbm5xiRqBjKapheogJ1shkfQYuEP5fLuXm5ab8RRuAEVJXHmi42aLRp7FaM",
  "key1": "cb9uwwazmeD2LmPVsSN998KGXuiBWzYPrTVSFYi7nuK4w7zsX6rSawuRJdJyuisHSrvotsAoePGetJYoL1qmnYE",
  "key2": "2WPaV8siTVR9MZ9KRZXYccfJ5yUNkH6KYgykizowTJ7K86zSYkP3tSFKFDQB5RZXUqwEsRy8GNg8jJbeQjhqtbuM",
  "key3": "4C7tPTa1j1WQAQu5k4Fimw5e2PyrCRmMvYpMz7fryxSg4cbeTuMP9Xdqj4qqnqZmQxy2hN9Bzn8ZDXstsqjikCT4",
  "key4": "4dvcdPxatFsHukDqWtTaG78SK7ZvbbXXFbQ8gnZ5uAp6s6TtYt2uuM3dfuz9eXQDsn75oeAtKDyye963UP5oaSix",
  "key5": "4jrcpK2xui66Gh1fy9KcuBCUEBVrdbdJbec6nq6LDAtbp8QGLWFmozKKLtutt1hu6jDXGswXbcZe9DYUgbAzWF6x",
  "key6": "51P9v1K3mQZbYNteae9tCM6j19amo7NdGydcoAmHKAXrdF7e9PWe4zuJzGvqxm8DcpJjog3bynH2SkrLVhVFydkY",
  "key7": "474i2koAYGau3kgWKQL22LBd28c8sYUWgk99HPCcZSoXzXgjs4hpqdFZUWvYDg4U5Cnk3U25jNP9QXoaLT9sgSrW",
  "key8": "5aMzNuRCSFBxQGG49zHNWMs8gdYqF8SHrPH4pjxCEwrJTygDjYSVSELa9q9EoTejC3HLDcHTd3HXo1jNJ8n91TsW",
  "key9": "2NG5w2GFBLx5ggkZ9Cw6Xgz2n4YHDLV8B5bBfDHLa4iun8YwrVG9ERrbYBoPeXZBSAZdEQzvpE6ZihMoLAz4FEpG",
  "key10": "HxEZZjgegT682x9jMZ4WitxEocPdtTbmeGLMUFVM2SqUGTryeRgtrTNpjbjAqkPBTar7Mjo5qpCwZeBiL3MoA8Q",
  "key11": "5qCDKfkwzhyGpKTRumKnxmHXhPXH1wgx4RKF7hv5H24FqVw3QmPdxuJ7A5eaiXdDjRm2LKviB1AD4X8AJvgkiSVz",
  "key12": "5DzFkS6EKUepQ4odQozz9MCY29AdkBbmwhzz1x5vrkfEFWSwciHRxvKFPD2jrYCe9UMg2nTXFfWgYcKqbqjLWFgx",
  "key13": "4SBxydPUwtpVfQca1Ew355uVo8GwHjQV2wwrGphPVTSs6iRwfi1xqUMZxWfKUvQ53gmsJCRXkTcs3mBZKZdueoGn",
  "key14": "62tRHVirWbvwf5jW1qDKaYLQCi3TjxithUGp3XGLEZyy756fcG75hYz2YkpkK3Jrnnoq3P3GhvtePfVNSgvuE3Z",
  "key15": "7JdrBbHipfPwxoWgcdCzqne8pj7mYTwyETXjTfUrW8JzdwSnhbU8J3hW8vx21KdywbBojrJcdCrYKNuK8wR1K6w",
  "key16": "4zLUvdss3cbWQT3h3qD6SY3dzGKJTJQdR3CdAyxZkEthHHePjhCCkD5xh8E5pGoRcDpHTHportSs92xUgyAaXsgK",
  "key17": "4RzJ6soaCQi9NzhUkQ3KC1JinhujMJzrWBcLyTE2jzwH4GJhDCMDQckQ58Z2rq6sRwZnab9CJMTDthAGocYXeiVb",
  "key18": "3MNxP6Uu9ASJoJ9hYfKWwgq1fB2hS5bnwXHP5z2rb6B6ELGjXEYaKqipBZU1y7Tu5y39YrrxpH7oL6qgEgkw9hEe",
  "key19": "3xBGSRgSCKYnmpWbNShkcyjVm8yzdLcLwgz2nnLeHiT3UwqsBTyx5RULz5d9AVsFdaPKmGbfB5dMbtd5KxW9veNn",
  "key20": "pHbAPLRr7PLwdqx4pt3m7fXXqAoATMTrRxpFEfXwWFpDmcviSEvu4KBf1WqX45jDNmpMXuoS8KQqK2fb2iWDnft",
  "key21": "4cdbdb4pPqWt3DXN74DPkJN6Vcnb9VAAux4SoYNgwPGZ9TQWEpgo7GiRKa1rwndQZNZL2eBroKN5ReS8badMYuGD",
  "key22": "3NE8S3YQD49Y1eigeyFDSaxXgxvVmV92u8v714DFrqB7HYk5jP59Zj243HRHDH7M6EP5Ry4qPVjKavAUWPU7Jy5B",
  "key23": "PwMy5qiq5jardnGRP9xeF4X2RrGtaUV2KQ2qzrqQK3HrGet6givYnM1jdc8ZhME6ihSY6gjLFijUTXCV1v6PHJc",
  "key24": "3FGWwGG5gLj2tsa29bsnY8Ks58eg5y6126CoE4j5vJpGCiZz6AA4f434dCte4Zsrth4g2RuHkhQo5mvTtfLNKUbR",
  "key25": "5Q7FyST2tz1NtaZDxRnrGoZ9FE8etQ6AiMDSq1EyorHjUChXyDSfEzgnvhMMxyU8N4xXiDAe62DSQAxZn12zdRh7",
  "key26": "PLuVAcSKjpyVTFNqMvNV6TcyJ92YaM9aXXstcALT5sXygnNHX9qLLcmHeWNMWMydLFyLfeH2LcF84Wyu8qdqiY8",
  "key27": "3rPwY7oPT1g5guH8Ss1ikNywZ3Dc3okw6FWjqfdpu32ML4jqoK58gKfKcczQmDaJALvmth5W3BEf6SJJyUvnGkea",
  "key28": "2A293jPNMAEPKe4mdf8xV5ZFZRjzzrWGeZtvk4apsZZYWonAQAPKtybGbnYHn17nuuDfTwq6RzKwqVbLU9G48NdE",
  "key29": "4Ro8WAF5kxq7UwZFLYEudN7YVG16o9km8K9xurFcTsh7M3oM8TDhjX8vbaBsm7wMvw4FaF7EkWpsKjBbn2Mm5zSN",
  "key30": "2uzu4XT1dw9a2u5G8B1Tm7hvei3fynENbdefD6g8QA6YgAZtY4bSe32f4curivTm2RcrADwo5VpddcryLgBu19yD",
  "key31": "3H1T8ACHJUoh8z8E15qBsd2o3k3k7idYYWUdStjz1qujdZtWKoSeAswC6JDUUkj3Fvs8a3XmCFZ9uM3emUEytz1b",
  "key32": "3BH72tk7Gee1Gume47dS9uyP7USTNvNd3MBRT4wAGXadHTcDwRxmgYYTytUkBQEz2YH7nLZ3Ca2GyUe2tntPF6S5",
  "key33": "37RfNeiiYdEKzHNwtJEKx8NceEGfotVTBWVqGYTon63veNk8N3Tg8VK2aL18BJ74rD5LARGBC1njr772wgQpmgXi",
  "key34": "2m2DHuZiuE8kLiVUujkGPSRktRDghGdfKG2dssTb87HfoyKffNV6X9v6B9zYhDg2y9g3hBZKyS9yQntpxzkzqyfc",
  "key35": "5DxvYGY725Ku1QJ9e7mvT62CPHaG2UFVgTrD4rX3Jjpwz4pfVT8VcfZqjLn5jJ7y4YW3AEmezUHhRx85hS88hjDP",
  "key36": "2jMzFupGuCuam3fVdp9J8VCvHb1xq3gxvjT5osn2JLhKkmhRAcGYsmyvFTES94ZqjUMeXVh4SvKFbWf85RxJcomw",
  "key37": "2Zb18jWE8ymT9kLuMQe6BJofyikH2rScmAx8ksA61Edfy4hjcMyHVMX5fBf5J66HaJvnnhuAdSgC6x7X6Z2UUwpo",
  "key38": "5JcnDudSvdPVugpX7vBjuK2efgFSmTSnZC8ycRnBfxzEEnMqetX541Sn4Cuy9gZS6x8F95Xi2wQTBqwHYJGs2Ham",
  "key39": "4X5msf2YvJLxM3M27sAvWMz7LQ6GqjVevmck1nRCWC7tV8YTXC2yf7rSk1jxW4y6PniWL5WzoKMhrfs4TekYFYCC",
  "key40": "FDU1Q7d3bYtAzhxEhbXsMw732VpNuYofckB9tm5fkMUkPQZVefXGXy7x6fQwU5dfv3Pm4T1u6qgdTBm8i8ajMPQ",
  "key41": "4qmhPEhwGKtvz1NUphKgVHLAdNMaE7tVf9qRdtjWXkc4vkxnkehKVDydQoUv4c9S5wRfye2cNAJUHFqUMDBkXqzb",
  "key42": "653qUensUNQH6uBmJhR751vQW5345khwQGsAz3TPi3NLqsVX4Grdr7rvc4wmGHfp2C7pkUgy8uxXf2gxPbUynysV",
  "key43": "5s3Vz2oUvTRMzY8K11ey4twEGVYUqLY6dG2hCMiR7uaroWDipjh91pEhEAZMUdnxUBnG7KKyATU6Xzk4uZ8CEfur",
  "key44": "3CTyzmAzTjJQaiEFYbao6Q14phiat6JAeanmtu2uZ9mVYcnxZRVUv4QTdN2H63EU6Eukk11cZXQSUswRQ8NfmpZG",
  "key45": "4yHQyPTnbH96inVXihFYTFNrYRXKjHuCTbVQ2UWYARRJ1mUCWK42jHVDi6P1wcsha2B3LB7XTJ4mNeQ73pQ3hPgt"
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
