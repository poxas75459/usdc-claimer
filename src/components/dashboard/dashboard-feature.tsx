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
    "2WLtGiCJmirSnbHA5LtiKdzpftQjrwJ8kDjiR4RtKqR547UqDwvQD9uYkmQNiVS2CbwQzimLe4tm9ZAqzxD3zgbf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jzLj9cQogxSy5nw9w7WSqneDZ6PkPFm7ZYpT2as6MyLtDFTBtwwp5TFBN1oZ6WjcvHufcLNCE1VGUwfQKSnJosc",
  "key1": "9Zngt8uxEq6TGM6fnhidtdPnxD2nmA98XdTHFGb2GQyiJrqTLzjpX2kUzLPQ44yGcdbw2b6FhLgVVacwJtDZX9d",
  "key2": "4VQjBv7HDzC3bhHxhRPqNhqiK1gF8cK8kGrfE1scwdRoWjzaU4aAsmJWfE1iBRqXMc5vQ3ivjinyUFFA4aAJBnxW",
  "key3": "5zt1juGz2heXqNEnHVpG5VUL5gZPZSazmwmwdLHhRFvZSUKwsSMnMdxLXt3J3xrqkJZbEW2YbuyBmSPemcUxruHn",
  "key4": "b633snZgMLuWxoLF1BoXACvL8PQCjon5CLvi1MrVfgNLz1CNDYNKLTUGJQA3EEGqe1jHVvv8uCV2L5KACf3TF7x",
  "key5": "2ertPg7VasDwgrtwU3tKQhsKSQy9YA9aCLBDiFSjSGQoExaWcUFfoBea4VLmX1Ki9LvvgvX9MCyDEAWfvkbxZLwQ",
  "key6": "5M2L9TWw69VaAYov6afaG2VJDVph6c7U24XETVjfskYhbLf9xyjixpFktdoqYUxEUr48TzJaDmV9gniAAM2mVutV",
  "key7": "2JKhgSGmK7SKGXFW5p3CeC8VaDFRRxtZmDrTsdKNyJxQbjkjBpLJyiFDBQt68ZLw2dZpyDXMAe5Pa3eVwyi4DVyw",
  "key8": "5qAmzoWYoY8wAdnfogwT29iXii9cJUPq5uDqQEuxvYMFvPSiRPbUhoX2M2MBFRNxxNcTzrwyF5myoTDmrZWnZhVp",
  "key9": "54rtAH8yHRsuYRe9iVPACHfk4jbpQLvfNTXXS7Xa9knycjxiqszNyu68EBEGZ6C52wruKjDw7hKdg3DZ1SHbfCNP",
  "key10": "3UTPum48zggAYxs6wz3S3gFETj88fW8tSFR7yw2W5XHRMD8CYvWy1VF1PQpTPhSqZ8dkrk7tfu9Z1eEjKqYN1r6Y",
  "key11": "4bkRD7joDsVWJSzPfsfLoMCZHwHHS7KLLyn3BNzzpJFqpAbiREgwuySxvipmfiqR7riUrfvkwC6sxZM4GkRYkorG",
  "key12": "H37fZyabw5djJbcscLQVyRyaMF9k2Z65XAHDPSxcbFxrXjeFr8DqNi1PGMSycMCqAMV9TVszE98fNB2K5pAcEyu",
  "key13": "3JLpUMdfdQqmpQgviakbA3e6ffZCwyQQrXwbkx3BHVHDBV8vbSUzboZVc2ftMPyVrHx58fGEnBE5S2C4KFyaTHGp",
  "key14": "4oV487QC9WcCifSLipXpEUubxhbTtfLk4ii6768E2Zt9AsSfotsedAqQoiF6ngHwosf54AtoKrbQvXEeRxF5mC3Q",
  "key15": "nhYpXKCc99H6neFeMgvHTNGPFafsmKSCqPuQwUAP9R1UNzxXRd6jztG9eEsyhs9BzD7G2DPxC6VJoi1w5cujYku",
  "key16": "caCvrDQbJfZpHHHRrFLNuM1BeyPzfC5cV4CXboxX7p8y62oFdhxF53fNS2ZgLtxBfvXQafPSCNHDRweFMw53h1U",
  "key17": "3SRUdcnquNpLapazXgXsTbjHS58SLj3AxPdcF9AM7qdWrgF62YHt7KfFGQtty8HTdbwZKWnVSiVHEZWZmtXGyMRZ",
  "key18": "5PMmbGrwuEBXcSpoNQdsQtD7XfmPZzN3anrY5D1ZP2LHTrZMajFqTdRMgmzCTFxRPkgPr79UspkhVSHvQ8DCBC6Z",
  "key19": "3t1fLG19mR5AQyTCEpbJp5dWh3JNurLnnQ6fLoddtyM3MH3VU6L1QqcTKuXsohpFLYXdBMbE4PGVmB8D2ogQz9Mt",
  "key20": "5WxeTVXvyxhBpgtdPEmLd86MAWfEcLNfNAsGPew6PrZpHN1qWBUYQeHmmU7mA91RTJD7np72LA5HJdt8mmegJara",
  "key21": "4mBjVuMykS8MKGacXKykcqvrauCr1oGtvtmWZVgU8wK95ZMoU8iJyr54BEUFEcELjseRgzwg5VsSkkn6DWBKfrqo",
  "key22": "C4KDVYx3KuLwka2u4RVdB3NciKRZ2QXa3b2tvwvBdc5Wqx4YEGfS7vzQzGDENTdC6wCGXwXCqbvXwHiUFMzCD8w",
  "key23": "616HgkU2n87hrMoY3h9CfjbdH6VNz3arWfZzLnudia2KCRJsqpdgrzXjtYMS66P7CKt5DkyqxAxjSWae4VKEoNpn",
  "key24": "4ZnZSEdU7qvAvo5brQxbNBAReA9pEvFA8Fq6jva8vtC7pZcvPnbzNvXQN9DCKeV3KnXvbztTCNyRD8Lzwinboudb",
  "key25": "2KPtQtHJrhGDfNooud9dW3bD1SLtBJMJnuuLWm5p2izjwMjid8XWUYgCudc5JDiGndRFWgUbMEY2kTX3Lk2kAs2v",
  "key26": "2i7m6uvaHF2YDFMcHLSbhL2CFbBAEmKUDWyxvWtPfFJPNK7iiwcZzCRetqnftKdaWzJ9Gqdx2PbNp3qfbpbHur25",
  "key27": "3f88kFPFmMdpeRk5GD8YqXeeRMkGHGd66jUe7cjakJd27Rza9hdVtrVHvkpQ31RgNQq8PWownRYVkEedASoskwTo",
  "key28": "4D8rxMxXHfL2NvRN6e7z6vLXvUYY4yLiFBKCmtsMmAWwT4apntHyeEk8rjD9kTL4siGNakaVdLL9bANJLtBzdkBr",
  "key29": "3QP4GZ6KuFv7xLswCa2NMm5naxVf9hui7RpQWQo9bC21qj8rpQfkdCjFGSizh5kqaq5aHMLi3xYmszKWAbZ4yuUh",
  "key30": "eBB4VFCEy89xj4v1W6Q2DovER5apAu7LPftLwUfvtFa9JcgFqAQsa1t5orpVKtWmJFPxGMTteuBwry7raH4w2Nd",
  "key31": "dDi2UFfeiF1aMLjPFsgbF1j8Y1Hh69J3oHmcErhugg57rSoru3o6etjRm4vCd6vf7a6c5HALTyE7LTjCbRRxUsZ",
  "key32": "4giFvari6hGWNXvYh3vGvYN4o2upodAjnvatvVRXt7GMKaUsRUWVGkGYwNikkATaAXmpmdg7M1NxEymEYXdpgLi3",
  "key33": "2wasW3hGMtRBgc3NH6npdSW6af2Exth4ydt8am8WyLVTdmykqviJo7iFn5dQwHopsinTEGXPcAS7h7kFw3grgjuu",
  "key34": "3bH7Kp2Lfu5VABw7WCwFQwonNKCSp2CbGgUn6PqUxxo38KqQGpdRh7UqDQud1tVxz9zKR3AfA3yqY2yrZJnjiW4P",
  "key35": "2Gvw8mS3vDnjUiunXdkZCyNbZV5g5Vr6ipKE9BgBFvuVfCyQTb5ty75Hc7FQ7zycPuY7ADoPCGrXDsMmH8ohLdPp",
  "key36": "GvbtARMerMkr7JEh9LGUXz8BPwjS79T5Z2qSSY9vJgzYivUJtkHSQeduCuHZBFfEpr43Fa53cWgFH9dpPWNHQHk",
  "key37": "2UWqJPYyqqD1DdWddc2xihcBkrvQabJoUNRCPJDD2aCecho3xDKhNyH8SdGw9gkCKacPMUBA6CZBvDqwMMdibFif",
  "key38": "5EfAvMznjMimitt4D4V7PLqag8mb3hdtBzwKHghBTfw3KRiL5RymC5UHCpkYsP8q8i2k2BMkmAvkYMECvatykX3L",
  "key39": "5a3LSXLFxfR4LSuWsdM4HBvs9DonevEtUFiUjsFNUMgURtmUivkMhVXK2poUKEpXihhQJ92EB1Bq1JRvnoqYQabj",
  "key40": "4Cpjmz5FVbJYTEdaxZBQwocBTtBodGXGwYZM8JfPsnQzzG2sDBe2kw1yoJn3rxbBmZhnoqMLpaY8vCLpSxxbNHod",
  "key41": "HAeY5WtzSEb7HGF2yGGxbNFZukG3escHikX6CgdiQ55YKFK3Xbv5LRWQ32UDv4ywy4iSSFSEMRpfB1PfA6byFVM",
  "key42": "2arPAA9wywSEut4TtzJyMii1fWRijhqKQY6Du8cKomNNpzHsy8RXZzTtsh7RYnd8hWozSosBViGCPckrw3VRLyR",
  "key43": "4x1Tu3CEYBkt28evarxBFA11wVRRyhrn6cit3MzMrAgfvupZXridkbPgkF4MiBdz5764XbHnchttQSh3fK5ZxY3M",
  "key44": "5XHfoGWUXJgoLrgfxboMT6HxvibJod8PjEfcvKMDPr3xCggPZUhFZQ1vk75grmhRb8QFd1J8pmb6fTHP3XPxW57P",
  "key45": "4HcgeYmRQisg4F8cr3y5D9XzwayUdtFFvbyiVh4KykBn9Gt8zsTuiLY9FGkgLV8iwjLFnf7TFJ2X6Xm9NZPt9qiA",
  "key46": "64A3ZRFUQWrsKcgn45hYu8zpFTW1TboaxryCqmrt1cDxcn9mG6aUC4guHnchpmU9QTvN4VchLtff2kuQAfg63PMe",
  "key47": "22KcjSbt9zhwSu8BYsYFn1qqJaSmevK7L24wKah33bHjZqBgMemANx5FzpgByM1BvbZJzPRhYZDeWxUYK5pKiPYx",
  "key48": "2N13ZUng5YNMX45ALHptsHim2rxGRfNEzHF6wvh7uJXoZ3xh9dc1MQoW2P58GSPnUAe3qPz2iAQQoF1z2TM5qgNt"
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
