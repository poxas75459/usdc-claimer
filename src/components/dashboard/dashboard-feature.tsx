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
    "7M2wkshNubRXfb17EFTiTfo5735fo5ezGGpLhbTz9Kwsdj5ruY43zd1vi8qzohrPGczfcju42j8rbwkjLN4tRWR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ffc3yd3U8gG7uo5r2qVNSYyUfHc1VXewgohBBez94gh8Nph5bTUsBfLJpJwnKda4iKqwHgFoWAZGiMtnwJTofxs",
  "key1": "47xbyvaaGMFMJNbwZGRrx3cH5brZfSAtzNvyLkzf7orCyEFCNtm95CAzYRTmTU6eShzeY7YJAJB7CSNWq9ZDE1eW",
  "key2": "n22CLRts3QcD2zxk9NSksrSihniEEkLHQnG2tsBgYFUxyML6BQn8i8vxwoHuYdkkiUgFDJbeKE8eSBniG4hT3Dv",
  "key3": "2P1YGsHxeLJJsDAfip5jxQcspZZ16p1mJLAGESE9TTkRQDJjhgPAxVYsy7c1fw1V5hWuZ8znZWu9W3PDk1f2Wk17",
  "key4": "3bXgFsz4Axu97zcsTo9TztYFwxctPZCwqBTvbjDC6YapBQ1f9163WThwofse38VUsTiMf2LU5hawtURTGS6xBRfA",
  "key5": "V3Fj4oZkuryidNc4SspKQaSzLEEyjWSBLcxDYJTzjVH1eJh4aiHgtkxN74ZEoaFUqodXbHhPPyFvSFyd3L64rSw",
  "key6": "2pfZmt6LwqY15JqtcdWrSiC7GyyUALAboCdRqb4iK2kEpXAdZ5LKqZpzL7GvkCycU2fqQERzGLEHyDnjK94AHzVX",
  "key7": "FC3hAEg15WY28ExhNFmGgavVQyhBT3m6Xnhhbmx8ynoZoyCazjkV4vyZJHsnPdrPpUEiBeiFpttTD96tEVhgUgv",
  "key8": "k4jZpktmxXwQVSNt4c9rmeNmBEB9fUCiDqiXkDHNQ8kt3p5td1XA6ufXkGazdEEeLR4XDL2U9xeTdcTiKpe9XSc",
  "key9": "3uzMS9BhejQ4pKZwvopZNVxBBggtVwLMnsDSPT2EdiKri4aGn9VS7mCz8V1rvCF3d415KpJe6czXRNKUkD6FW9Ft",
  "key10": "2uHhY2xaFBjKbByibuLofJFRaAggwb9Hh2bcfZi25uEBrp23LBiDnyQa3tzpKUTyqa2JoWYvL6vTrcFFhhMJmHCK",
  "key11": "3kBewgQhh3hMa1VHY1DkqnFGpf3EvTX9zQFNEWwG1UDcdnhf9x4ythb7cPCozzdfBJwoKyvhQBvohbkU6PMmZqd5",
  "key12": "qsweXstj3ZVVvFUP7UekSMZQfiKdK1HDNA5HCDoNcijb7ZeJH9fhBvVibRebaHRz7d18ZoE5cBjcNUu2nmkTJxz",
  "key13": "5MwmYGvRDdBvpdsEgetyZSmPLjTpFmGRX1c35gLgz6QprBTaHySmUoajaUP7dPvzvcTLYeMGigfituxWS5hF2Qtv",
  "key14": "3SMFUbgje9e3stuLLfPv7bFfR89WH3WUdvbPhgMFHeYVwnF4iH66KAmsDbUu2U1qvkzL7fvBmMJkHW2fXqWqNdfZ",
  "key15": "2M6MHKCReaNmzD4ArjqE7nWJwQpWqpSsFjsZ8Cw3kGx7eaLx6JVdAnuHfakoPEY3Wj8NN3kWcGunRc6ZSfsCNYMz",
  "key16": "4BfUUVRcVaBeT114whUXg4KyXUsZhxgidisa6axStr3Ci6rBqM46GEYLPEYJLNu3QCvyoj2G6j6tXfuHCEwDeXk6",
  "key17": "27SeL9xBkZr4jkqdHGP6yVy3ht78bg4fXe8UQgJ2paQ9KxswjQbWdSFJ1g7fb8YCud6T1aFJx82twoHAzzRLCrpk",
  "key18": "63oriKHTZyUJctwtLnQa29QqwUMYnzr4KmDvVaMeyi3K6GyrFv9pnJmwDXT5gzm1np8qfAaoMM5nqiscQLufZUQg",
  "key19": "3a6H5bXrDU6c4XmVAL9RDNpRSM6521vQ2kkxG3L8E6uKJduL5K6x5NuzpmW36WiY1rc5rcgQrjrfMDYmJ6gwaajM",
  "key20": "5kAhL7GuFrXVgkRp5hyc2g6aJoTMfyGKssYkvgRbmC2Kjh1SfxBWh1ozcNSsMRR4PhB2mjo4gGrHrgAKNaMceo8v",
  "key21": "3J72tLJgzDzabzQd14XiRfgppBfbXYvcYnWciaVaocsd2fmS6sKknZdc9PAyGyDVQETgFzVH88BafozY2YXpqD9V",
  "key22": "52Xxdqf8vWFdGmDSeJkY5CFoa6pRU5LXaojLo68BArZMT2Yh9dBdqiHUA6skqcVhdvEUrjKzgJPgZP4YREt9JVk3",
  "key23": "5QJGBbzcJ37a1niY5GRXCBGju6RYd5vybrvmTYuKvVMrhGLforK8qKQ1MyYn18FfLJAnzn6osp97mkacsHZrUrax",
  "key24": "468qChzSHcPCd7nuEVSc8cyDJJ6bCoB3HUDXy5wduApazbQYaZPxCUscTY1hSAU37dYs9rQE95ZJaQEC8xvhvDU",
  "key25": "3fiKH59WFcWYHfdyUFTM1HYpSKKCzSHu1XvRiw7x68Gka4yb7zCPmoEWKEo5XLaXPfgAqjbBoguGFg5qa3F1C6UD",
  "key26": "542mRHR43tqU9sQEnjYhuNHbAfFbUKSZ7K74y5z6UKaV9mvkcEs57UXxoD6CxtvhXDrRNnFKBsQmMZ6DqV24Vw38",
  "key27": "3Kpxdbiuv4YBd2ugy8EEcFQGRns8vT9qYGLFXuhzNTeHeKNCS1XdF15eAJnMfnh9epMu9ZLDRdcic6qmr6av2SP",
  "key28": "4UahgFyp6CjYPiDetsKL28XqvcbfdjRXk5XPxsibUL16iWANZPuujvpyQYaDNLxyvUj9NAc5dzZ4UyJfS79gYDbh",
  "key29": "7hVWuduXsZ9tU1KeD2sXbBmLsNpCf17DJkHcxjSp2ANB2EgERab3bTPLva9yxF3peS6VjYdRvNY8r4DKhTAkpZr",
  "key30": "4dK91TyW3fdE3Qd9jzDATvuk7tCabRfEZMZS11ZL7Kq78BL4NtNzCEN76XuKxbJJeKTUWSZfehapdNdtt8eZ7QGh",
  "key31": "5aRMqCFxdYv5TZBYhoERrp7LHm9RrY3YoogGkCyBNSVm18yvcihpJNKqK4eMBkmbosZzNxDsSGk2YgQSFQ1boQVA",
  "key32": "2QC5E4dNrE2UU68JWBChnZtCFvPC8djUmZ4hDUYQko1xEwd5douRT9u8eUfeJZAPiCUJKushEHwkJ2xf5DszUgsJ",
  "key33": "4DeRraNhE3LDv9sa5BZqCj39aqNgXFfKrxhTpWaVVMUEZYSAh2gzByHrTVc8agSC5qGx8d7f32FovLobwzmwkEEZ",
  "key34": "2yTHa4qhXCT1mQQ4nX2uWnjXvixHPnmoZtwZkbEYWNEmHtXYEy4vZEZAdXz95JHDR6NzmMAJXpr8m2Himz33CcGA",
  "key35": "3qtdd1LAynuMBqSyoRgfxua64uNRYXqRqp5jehwrrmZJbQTpsJfR6nmqQ8Et2eg7gkQTcQHCfjdbG9vyv1spBTRW",
  "key36": "38vpfswhLqr9JvShuWFy7fXU6827e1WwpMsmbAvmWztGpyBh7Kh3pwGLqrLjYrJT2gRpjFhezqVY6q28eBGoYFDM",
  "key37": "4tnNkJeiz7ErNL1vgACRszshNwms3mFMMtbiPSUNHvTzAaL9aKx8U6ppSkW8ifr6G9ETMQfvJnZHVUwvHi5jG7kD"
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
