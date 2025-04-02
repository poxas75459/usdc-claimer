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
    "7D4DtsYeptH3YW36nyNFgSVzHFJ5deub2EtqSAVKpN12zSYmweGtzvgm8Rruci5GGhVaxq6TPqHfTz5vbDJfy4X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4exxjjMt3Yq9YX4kk5wnBPB5p9rZGKF3CTMx1R56dZzP1hjyHtDN4sNncAGVN5LttBnMBthaFNChAXpCLf5xe8oD",
  "key1": "4fr5pcS4RrKPp4JKnn5wf9iRc8PDZqU9FLjGL9jXfjhXcLknC99nounQMiCMT7VaWz3bXMZXziSMT2CD37RdAeG9",
  "key2": "4XxPxD2Z8m5qLR1rENh1FgDBxVXN2FqeVPq8wdr8pQhHLeREPQ3RBJ1641tyoeTJc4HZGLLuN9othmgkfgGTdrSo",
  "key3": "37EgxKUcFzeDJZ68jX24pcvjBgK2PUeiAYT56GAd1AN29apFAb3sUoqX5G6QPQErB7mKrkUy2a7k6bqtMt1rgyQR",
  "key4": "5HP1LVGbDnwRA3WETXayKvb6VEPg1btDJ5A7EE9uRVsdXAbgkaUkJbWU15jj24Ee36vjSAqc7XqL4ntxyo1zyZgC",
  "key5": "5cL4UD6hGZDUbSnXsEKKpNefq1DfzpDsBxR1fvkYVNC3k3i7T5vhfnSZZji5pJcX59nLzSN6f7ntD7osTrM2s28D",
  "key6": "2xz4vEynZrM63W4RMpNYLDkrv2PojBokZY6JShtmDpjta8ivtYAyTAzSXUkqsNhjM8fiq8jDiBCRFnDSK697LPZL",
  "key7": "2zNdJXwVbC5q3DsVqi1jzGoF3niS5mq3teG5bk52BQmrYZjqNu7eDSbXYfnHEipUreBuL9ZFS4TfnwCXkzsg7beo",
  "key8": "3J9RvJi935rhPTK2tTq5BdLuHr2mGagSppBU7gAqpJUwvE6ihMe3rJpvLHjsyx5FrL8V39krBQoQzbz964smXPGW",
  "key9": "3hreEDkMGLrYrPqHmVvFWhozPQ9KuddhwcFAVTUudY9nwmpus8G3yaxMFwJtDFxBS5YdfECb4wafCy9FmuZxurd5",
  "key10": "5iPCQX6aeBGCMBTfPChy5zbRFHMPCi3RNcjpiN6EiacA575woExxeWWG4JiMWjAUYtqhhGAnGC2TjXe1mnUuWo9u",
  "key11": "2Y5XQEiG9jU8D3oezMsRmb2jK3jSWxH7gCxkaJnPviJifmJk2srEr88ycuwpSTVcEoYQtSp7K35HjxfgWhtEM1wi",
  "key12": "5pnz9YCtN71G7vacpsKuckBudLamoXgr1m21KKGArG6Gcbpczt86R4yFng33LgejKnMZ6VQsD26wbVkSZRxeFjvh",
  "key13": "3suSAhNKf8QwQ8KKbeZUUAZV1KouRUMXpXLEboNcniJxa1CHkYGxXyXbd7JtoXKaGphCtVZB1BjmUkVZn5qEyfUF",
  "key14": "56ee8bFitMFFzXyWN2ERVqN1ULqwBLx5CZLTe2bzpc1TdGsBLtfDpuPBXEV2YHXy4xBpUSuL5YjVTi5MZuy36hmm",
  "key15": "YyMBVys6NCMj736QWe7iR3g3gCAMt5qNAgJ7dRsxfgakoKoNVwcmHk3PLYp83kV5QeXoxEhrbX42661LDGam6ci",
  "key16": "29jwhSFMNXepRRtvkeLP4Jj2C4XawrDgE7iP5nm2o4Ry8tgn3VQKwLtoeCXCD1AGH9igy87tmYGgCGnXXgMa4QJM",
  "key17": "u3viZn26dRJMUNyC8qig2cCA6ZygyBSJHKmbLxqQ4uNFsm4iwDrzTyq1wHQKNu7N49aWzLkz6efzZYzR6pcFCTt",
  "key18": "4g84Zf1grAzq249KhdB4rz78hfkPLtD1Lz9goKvLUMWydFnohQ9upXoTUZVhd17ECFYhSZyTe7WPMdoZf5iFG1Wu",
  "key19": "3ws5h4B6LAmiztYD1ubqPqqReVBAeZazyCqiYVsgc5zR7B7oAC6sWQEedemCi6v5jnMH6rztpbiNPEjwSGf7RLJV",
  "key20": "5VDkS2WnnrddoFGgUZmD2eu46FeQYjd9CjpTtVXALLC8Gt3L46umtpfxcm3MSRNGvbDRcSGZADCmZbemjxhZJtjx",
  "key21": "pAAY3DDPE6ptJzHgTBUZW9S59V6JNgyVZRNwTuy7GH5qeSxgNX9bMTnzAxwzHvCpWoPNJpiMsda1xkYymQkkQmi",
  "key22": "4fxFnBFR376xZSQXQSxQaAqjt3b8GzfdV6Deb5eWMXQ4hiahVQdYxSENDSst4oDWzTTMnxd14eqcQKJiSQEVqMHk",
  "key23": "QjxcCn2QnYyKM5BDxybjeEA3LUfwhYrfb2uPi1keWKGeaQY1SJXtstkmdigWXb5LtNQPkpKGJ57Hg7KL4BXasCh",
  "key24": "4ZCyFHMuLsNmTHZHHoQ8sHXrQJEX7HynfoeY9bXgted5Tub41wY1YhF4cHAtX3GU2xzfLgoYejC1T8tYJHU7GJvU",
  "key25": "5hzbQfb2UT94JHUT1GRQVbAdi7bm4ixwL1oecKs36G2gRBtHFo5TQ2f2TkavpaJT6qWCv76ZB5q3NWoMjs4rAtc9",
  "key26": "4TYJGeSDfGtK1HqH7eonzaC37Fu74HwYfUqDFxVHXqhU2zwkA5smEh47dLzKFbzhmxZFGiYRHPV5bejXTJnKmKSa",
  "key27": "oZwz7LdVFuUq5GYcxW71Jb74usNETdc9hjAqLmaS6X41jMFu36ekg3oJhMdipJHbvrRFMvWTAEpnMzGerYgA4Wv",
  "key28": "4aDcoVVYjJdknpbZDfa68Y1i51GnfvWQnR1hVEjNSt8HtJHyQKTK8aNsJpJ8ToWGGt9Q6nt8FUhGUMvhAVr1hxYE",
  "key29": "jj6QUfVid9UkArAWoHRwwajQNE9aimmWuh61HfCppfNAArw14rcFQDasUQNqbKekiWAcNark35napbS623xZLF6",
  "key30": "5bMyBAbMxyB6vYq4ipn3FhWLt6svoT1qoiPq5mf5qN57fuRqUFnJJArrRiDcGGj93fFoXT6Mr6Z4m9mLdCfFqiRH",
  "key31": "2vHLo5owyrLBWcb5z1f8swX6P5jAjDqBm5BSXgwVcmuHo9g1XrCmMhLZqLzUya4JQVbaVGV6kRcD2uWcDtfDdsdS",
  "key32": "2R1WDmXMhMyP21rVzzovd1c36rWdASRZ4ncuiy29zb4sXRrtp7HC2CcHeT9y9pvAQ93q79nAbxZaydxD5RAq6TjL",
  "key33": "3HDz7V6xbd5kU4rS4sDx31S85wjGU7ovpz14sWBcTdNsHxJ5P2xa7MRjRyijv59Jy5K7Jp7paAKVuXsGvKZFKtwD",
  "key34": "5FA6UF8vrpNndCbsNxokkrfWTJkSQesboEq8k5BZqyrXHVrpAB3GPS8Sppq7McXEEX9mUYGR2ChBDSm4KzQvSqQd",
  "key35": "3gXp8wrPmEbAZZbwXX9neu42RTibCcAnKLWKrgFvqrSJRq779t6ExHUjpircQv7yGLedNeC4eM6xJ45NyNWqkrTr",
  "key36": "5duVqAyjYw4SxFvofVT9G68ZxzFe8ByzsbUnVp4J69GkLMhQd4nUoYVoW8hu5UjdfvhoK2dSwkPtphetmLgq37eb",
  "key37": "3XoYiZn95CvYj7qzZ2s7u3eLL1zdPjKv6EN618ztV5VdMrqx764hmRHKgzvkuLcHx74sh1dJECqG7b5wFJGJvfdp",
  "key38": "i99kXdRE9Sw9CY6chsHMj3Cqv8grSiQdU1vEzRddCcjQELKsmcZBVgahHa2d5gE5qeapDvB2igUPD6B8VQyt7CA",
  "key39": "qsPKUSjMpyVdWhs9CZEAb3qCdgA28Z2YB193qSEJq7HHwAG8e9Q6yk1SoLVVnSc56woAUSr2P6s2B9xvEpydBok",
  "key40": "4Fy8Ti6ThuXDkzotRBM2taFUuBx3kGYGTZc429eeMGdjBMmVWU6tcexWN2k1CASnQJWSZDzX4adW3toz17AJY5Wy",
  "key41": "3wMviU8xCRc4JUsNX5zWZjfPFnwUDBsDP4t4bykKDVhWyatb4Cdtkgm4ypRVdRzRauJKeLAexLKjtPtZiCecp8ny",
  "key42": "3g7JYDFLf4Dnf22MTnjA2vYqezHVnsa8Sm1rM4zEaZbXSQAJ74V2iJpGwbFgmiJmm8397TW53XKagTexxzMJPez6",
  "key43": "4oVk9GBbDhDDExSMjGMFwhXWRGgSG6U8q5JNF9ZmUoJiFzSw1bpwRv5VMzexztLfcxhHNu9nB6bKgeEkbFHtmr8G",
  "key44": "9ZbFUihifqnrG5scBWJwmdKvLD8g4DRzyS2BhSxnyjJNjQb5AhbyEi7KVpq28wxqt8Tp48N3DN8xp8MCXK4urFg",
  "key45": "66F2wdvxfT9P6zuC7UNTijFUHKy1ywNeUAz4RzepbkZbLEZJWQB4utDvmTMxxKhugx6nBA7XRrrkrBN2dDCnppJF"
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
