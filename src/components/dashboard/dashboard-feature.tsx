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
    "3peAbvsSLM8sY2Ss3MR67NzBG2uSyAUA6S2AzyQPf26hNQQsTarTBFB4Wrm3q2S52ojwPW3QWbdQmpNRXQ2Fihpz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PBrLSrrXwQpF2dsxoZcU1njxMRDH5hT8gipmhVaPBpgwfAsTHzsYN3X3EFthLuDRcQy3GjwxeaGW6rbvbePoN5C",
  "key1": "NKcL2BE1GQn69MnWqZwGVz155f4c1NJA7ChzZ7J4QQposxYkkBsYGsLZTAf7nCR28uvuUpNV871pNQNcfDD3wAQ",
  "key2": "Hr6mKh2YzZkvhucMwSq6i5rfqqpHEHiDu8RwTydqSuD8bSKX8GidYW36dsBHvrv7ZMeSLymNi3d3gZaMDDHFLfg",
  "key3": "2Ps6dK9upzfT26GsULW1GPAd3RWGUjyG6cMG9C9n2bcBKTfh9iUAzBi26953meXkZdimZDgQtA9RRgWCJwKWjxiL",
  "key4": "5ZRHLMvZdD5oKEpzTvUB9EekHXXnXhm5JzJy12mDpexRJcLEfC5NZxrRomzRJuTZ4koUwFUSrit5EPCnAtSY2NXs",
  "key5": "jozeiSMd4BL7AzZbRxK6Nd3psS2uqyFsATpqLFXLFDqjt3nKGVgUKngELmqJKNRMWDThZxppG7LvUPPpY7U8MQB",
  "key6": "4E3BEKG9EUv3E5bFGR2VhutVnbWWq9wAytseDEnZqrKjbq15tz7V2nCWQ952wM8sAcrFhbidpmA81RNuFPREpAKL",
  "key7": "5H6CJyLACgMKvKSLbLB29ktkprLWD7vFLm5e4nqiLFN5oAkZbJbexSuiaKnzeeagCLPrD4961WyVX237Uu4jRYRe",
  "key8": "5DckBM2p9ehVhPp467Dext7t4FG3XwyEXUdtbb7ovLwgyt1PQR7sqnyhHirvzviquF29Qee6uUxFjXjtEQESSijn",
  "key9": "4GwkcZdp3594viPdw34CQEhMZB7Z4L6mLxG6PTUBodjpd7iptinYUYyx2Tj5A4ydcKCZLzix6GkmRKdnmKugQpdB",
  "key10": "5KiBvMNDNdAFrXeKhPnWVwQ8NiLj2ZAvDbtwdGArQ5R5V5k612dYruqf9gR8YmAivATNXpGYiLXGDJ2Fyr4GA7cJ",
  "key11": "4cuWTwkBhLEuuadLkCvUct3BpdH7bgwkqg65E78iHpEKcJ8yebwt4TBmykppRi3TWpRsLSsf7SHjj419XzcekLtT",
  "key12": "5GbRVY8enbzyzKV7w1weyDzjpgjBCbDZhpxr1tjhSfNKWgCPeimzewPitDWFDSwpumR415j5KHeRQ8A5RfohYMBZ",
  "key13": "3QxnRY89Pno7zszRx7JqMRe2xccgBkVLQ3ibbCVZQEhUJZ9tuj3ezpg9GVxpi5P6eXGV1KBkyzxzSSYSMLKpK9SR",
  "key14": "498Cb69PdaEP64ycbLxJkKvt15RQdBayoChmc3Vqvje1SN34gMKJDf9UyPBzB41FYzMikah5XhxkZZS67HnsWSZ1",
  "key15": "PdiCHHZYXpRJHrV6j4rxKYUuafKNvzB8bEVGx6eMF5n21vSVvVPJAGs3gMia76zbssSergvCUzTAK2vYF4Z81E3",
  "key16": "uLrTqbsChd5NLVihMNGL8QYeUKfqHNjBKrnrgvJQdJ1fcqHAXhrqfw3oYYvr4FdwPXrtcbnF6bMxJw77cNwQZ3w",
  "key17": "4X9RiASZSLFxEzR55tYSG5spfK4W2ERGynSRBykktaAkePbaiCWsrQWRH7GY8huw9ytt87BEq3xyqnYZTtLhXoia",
  "key18": "jRPtctB6VYqM5hgbnhwYM7Yiy1Zd5HDSWozXR7tCDv4oKHaJHHbuQZGuRNoP8CxMLCpqSjNh4sTrxThNJCGt4ad",
  "key19": "5GgMqhAGsephtFTDt3Xq4NjwEULA1Q8xt1Gwa5TxgsVFzS4Lwb5AVCVEzaPUuqL7XbMzMu2uR8kZkhkKHmjn1ff5",
  "key20": "5FP5TFwFm1HJNNVktq98zKLGqpFpBoKfavfiQhH9U2HSqvDaG2axGyUTXQs739N37urwNASXgVjExnPHi5C5tzii",
  "key21": "21m112EAMR7Cya5WpyJv2UrRm2N6qDtEQZ8xhLKN8P3HrLRfWp9tp1pvxKAtTJvz7zUQsVrrqWBLbCmxnJywyx5o",
  "key22": "5cpCkokkxaozQF7YbsqjyP5TRoS2TSKvaBfJWcfYrudztWfJXSvWjE7GHcNoDQCGBPFkduuBGRngp4eNawAUQsKt",
  "key23": "4iUncXKycaHJ4Bss3DBNcVLmwQ5DkLtoX8vqp7YuRuFN34cWtszUXyoQQqgonLEkxi695dHusYXXkJY8BTiEVyZf",
  "key24": "26eJr5z5AEeSnosFujRzP7ZUDusXjgvLMpixYJxXVfTfqG1kKp53abDGe1zc6Rb52zRhPsJpmVVPeyJzJ9gm26Di",
  "key25": "Jf5bZETYLyhERPkjfLCHgKG8mhHWi6P4wnuy1uCZBrBgBW1G3w4rgSk5XH62PfvCcAMCkQD7SVs6XV79XNFgLxM",
  "key26": "5WhAvpcVXv6BD1SZ86JRyQtPydDRL7SsVB4vxdEE8NVaKbVKB3j8kkuGnZ1M2AEAizXhJMTg4NKwHGdQm2nn9Pv8",
  "key27": "2H8D5mceen5yv9RWzk3qZf9VirJHGSHaBB3XF8DG67LhZT5EHUH2FoP5FoXdh1UyX1wqcw7n9ftCNbCUvCPcARY2",
  "key28": "4wf8T7P3JpFn5SzGLx3YXEMeftwiEUwuokvdeWWu9J2quYwXBhdexadSiWpcpskNR531iGpxaZEbxaB6iJAQdd4f",
  "key29": "3DzYwyM9USdFgNHwsdTNjmx7Vnn4s4Asg2ScSbwVrZHWwfbXLiyvULFd51tP8VYPjj5863ycD4Y1DxS6Dz8XER6U",
  "key30": "5cYgoxPUPg8u2Nn1abvMcxHCDcUM2dpNEyH4Fb1ipaaMojU79Y18WrvWn3zTHqBVzddzN4q1YfVkcEmRPjXnaMLn",
  "key31": "5xknRDj8xuJDVSZiJmmpQt6nweWjyhMeWcUBK64Vyodo7rvaZAZr5P5df83gFXznHZonL9vmXyXaozmAmg8StuZE",
  "key32": "3yVjuuyQsTradEFquituVG2sWiJovJ2jdaKBFqPBEmshtjtF6F3QHqaGECndDQ6BBsKMeBFzZMfheTm4pMu3TzVt",
  "key33": "5kxgFysZ7ySbuNL6eB8ukSFncoxcowvg63F9q1s4AvHM4snSvY3w1aSGL2tvwywdq5qyaGy2D2gaUi5p5StK7AVf",
  "key34": "dBJnhSsHin2SRK9an1MKpKRUinNqYR5kqzAf59gsuuLJVmRAvQ9NNW73dzc3orFmJzUknFrKm9QPsNR3RemZwss",
  "key35": "4MQNeYnppNkA5E4wACnKgDRnNW1KoEBBf1kH73j8WgeEgeohB3mAVGhBCpYeWhr7LLxiih8cQDwMcS6emqWydjRE",
  "key36": "56aZXNCdumBba1SCiCzNKPyVtBUwZAZtpr7FtPfc1nioofHJay9pnLcivgs5zwMQA49sLWzqW38rqMZyfpyEoU7Z",
  "key37": "2Khm8z28JJErcCDcZPa27ZPmCzMMhGA5Wejjgv6tmKxt3XMiQEy9qDq6qBc14Ey53QdExps6pzAHUUBZPVnNLtf6",
  "key38": "45A3aixBCSPRGfCdxFuDkA7C1K6FxEsCgXikwkNobWvCVaykDKNDb7MaSz394Ncisk3zjTJBu6Td6mxJjuQQCpE7",
  "key39": "5jbJiBgi4UKsnquuCtSpZwzVLCppC15NRrvc8ci3jXViYvPKgdTyEir5tP23EBVxgnaGoyarFBwAaTkHsjdRhRtR",
  "key40": "5SrskVSFoqsh2Anb8xBKdSodEvSph2Ws2MoYV5c3p7VyBygmPDTQTyLEP1sNknwxcBH3evVhXRFoWQJwxgTKrvHU",
  "key41": "4Uvm36gTBkRSjW82PFx9qaPEa3bDi2h5ke2vruY7szYR1eStvg581Fux3B3EVSmRwSv9avJodfoPGC2xS6JHRSWG",
  "key42": "cZi1aDTbWfJkbzjebpLD86rJjYFbxTZuXVC6cw7KKWZFHaKyRzojFWNRF42rrHLbts4PSE1BEyS3TM6nJFAyYQe",
  "key43": "3L7NHRtKXr7YiNjUYR5TDsvbbnX1rYD25gQnksDZzp6UWBZgYcnPKrHUbkWjgRw6m6xfnujeKFJuvsf7ZiJqvsog",
  "key44": "2945EZr8utEsfxXPA4wF4M2XpxobyJubo11QD9Kj39FiMvASprCjo9LhD1xgNxM5UtLDQLov9NQwRLxRUqUjGcdK",
  "key45": "4J3ZxJ7nPTdXdm65BwKPEu1T227JpU4oUXJScZ4wDtkXrz83nT2hxcmR2qVKWvMuQNMoVUVzbF3AzZbCtHAqkMMu",
  "key46": "5j84wmvqPDsSRm15xhCvz4UZWmGm9iUEJZUS5KBYRroW9acunBZ3CnYvU4w2zyrpi5GSczc8hJBHafg3Dvc7Ydwk",
  "key47": "4JoXzFWZAtCLQPCx6cyyHsUJUSr1QAXqifJs51viD2dTRmmXRPhiVqEKEgdu72s2GNQnYnvPtJZFY2YtTHUFsPzA"
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
