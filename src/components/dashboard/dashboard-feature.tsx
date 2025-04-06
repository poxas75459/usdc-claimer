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
    "JNdmuqYbyGaLQiKR2oEHqqfsb2dmyY3s3Sq9JrMU7wFwk2ZtKipCC1TFwbduGEch9exfMGTVwAGDmrzQZM4YXja"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "76GFvnSTy1ko1mDrHixmYmacUJiSESScuuXHyUVYZuJAhJCCRnhJErfgz1aAMb7NpSwQv1vKskrTx5B8uPepT7y",
  "key1": "28AiVaHuwioACmfY2SatCBHE4nF2WpNhYvk3nTru1cmxHDAm653MA8q9NEYRATY3fFXBvK42SFck8easp9zrKqAx",
  "key2": "5g6b3VcCuxMANHodyvxy8fn93rA5Q5bwJUHcXFc2Bo6HNVDV95ZBNuXBTvsMJh9C2YgwRqBK3KRkBNVbjc2eaGAz",
  "key3": "2gaPPeJMJcchsMdSKG9fqhuN4JhY344VMVPGFdrdN4jSwtvNZvyUeUYuxNN7Liqs1UVoXfRZLJLTJHkuYPrPdwrg",
  "key4": "4nmj9FdH4ayXhtC5oWENNSUJf3XPxfEWzCAk2sDca7Th9BiZ888BJDovaJAKPK4gEaBTYSxCDd6YDLmdromXXZRX",
  "key5": "u4SH9X5PqWMj1f9qJ1YyEUJXZQWdc8Hkib9H1oiKjkS4mVVRmYtqN8nm81F3XcoZqLEdtiwrzNQqZXmTmBdkGfk",
  "key6": "549DDbg4wcL3yLMvLXZrBd53yJFPjC4KL1xgoFLMadyTqutuUY1Ki42npuqZgBfCSeHkQoeYnGeq9h8StqA6t2eL",
  "key7": "3TCxKgAncP6xsxkpjawMwTUnNQCPiNVDmsiEbc1SvM3dHLkCCSnvBJHSUdsKAFnTPakZXwABFSsizB19zLTXt24t",
  "key8": "57Xhq4djfeVHeuoTcZC1QK5kqvPHgxRiPZDifNWyt2JCjt7UDRTSrLYgfwiYjNg7keDGjdCUGpDHGaJVvk3bb7fG",
  "key9": "g1MQFtpRajgWwUjPvfLWZuqWnXvwkYcm7VRo4zxJKSiTptfWrHvAcdBQhSJCG5NzNYJeQV5CxJjXXzh4Z4bccx6",
  "key10": "4pomoRL5o5tcP9q8yLbQ5md5xU1KtZiRb9Pk6MSSPASENKUUMi5CyRnSknBbfZ8RiMbqPKLeUVxUARaWxSuZtwvH",
  "key11": "24qkhEykVVSTZTNeEFhFpMWTUy1z4R1yBgM9NBeAJaKwJxt3XNoh1Sao174d8aWYf8F15nEC7BPbs6dsvSxWM1WC",
  "key12": "5DqCfXfx5eLQ7ci4QzBX97xwCAx7hwt6qPbGGod4LkqPtfiTr6bTRH3f4vPA5WCJYDp7Y6ExMMFKxgNQc9isKs63",
  "key13": "qvfDtg2KjPLVgoqy79HURKqeGLPYqZcSeUH8CEh2TLgtiDsqLwY1rDhBY9DHiER9pqmLYZcBg25Ys5e5ewgmPh6",
  "key14": "2amUbehymXWpNax2JwFL7y9VLRLytLth2KFAXVzV2bMufjj1wcpzj1wB3WZoPZPWbsLkHSWFeF28uYwAdRSFATpq",
  "key15": "3yS6QMpjhwuduZqkwfr75wjJh7xeRDrcn7t3FEdUZg5AfYA7ZBaZ6QPBGiC73dUnA33CvDFxz1sZLSbU636CsseF",
  "key16": "oC3YJ4NuVFaMomwWW26XwpyUAAB3Qgwh7TxhSwPS8ankH6TPMsPHC8i8gFiHypnnv7C4KxjQegpM7RUi2iryku4",
  "key17": "3LXSVGPgDU9Eza2Fi4dG4abvkQU9vsXvS6QKDjFdPrez1fhQEgKoR4qzxvk39u64FzX2m3VJtj4CohkEdxvWwUuY",
  "key18": "3rmjAGjH982ckBXaB72VWW3q4PhDYF7hgAUvrnbGTJbHC4k8WbmVBto13JXLQozdPiBt17kwbGQ4ngW5jBkEELW4",
  "key19": "yrC6j4ziAco8zGEmhxMhTRgX548uWp7eS8uSyKTmSZqw9R1mCiS38oFZ3XdASGuKJTzsUPVFsNottin9RrXx8eU",
  "key20": "2Ff2wpqYLNCiDZMfrcsvXk6iq2Z8h4fE91QbMoeThSLKdntPGt4yk2eg2R4xgBke5VmVYV1mTqdhJdcgiXC7jicN",
  "key21": "2T97h314gkqrgEm3wvTjhZAaeZLca2if3q3QcWgbcxThsgNZacJeGsGwP5V5DkfBRtQrQv9FctKyRoTfdJwLYjFm",
  "key22": "bq3aJHHTsZMidZTmbj7z6GnCxGYiCaCcBgGDYTFLqpa33jJTT1SAbWbW1VC1wqXUBjpkBkKLJ3aXiBsJK4N7LiE",
  "key23": "4jGoHBi65XP2bxCvQgjZdvgtEZfh1zLvm9EhGMJJXQsrwarEBzPqdAoxH7jwmQiJHdYqukVzVsEFgSDgpUjQRozX",
  "key24": "PANauH1cmd6qhzwPgGqtbSpVEJFhPsPo33X8TYnZAQ9grZ3aRf4bqcaQRrH6z1StULd9Zoo8QSJn48RDVU9zLKk",
  "key25": "65UwECf4fsGusFY8uxsYd8ie9cFu3jTyfMoQFKb6FQC7LXeSf1nTnzuRCUz7wACQJ7Zz1pgP4USUQApPtSu1vDXY",
  "key26": "4vVo6H1eekhcNNTw9RQEVWrx3Qaw9KMxqj9TAbH4Q51cxrxUpUVroyQ6RDT1rHLjEHieUPYEAempht31ERbyEscc",
  "key27": "3qtSrNX3XvuBFgcxSG2p71Qd2ECJfGLMjnU8Qs3hm7anxauaGcSdp7DX7Mu9mxg8dAncoLucrM4cHTiaZw1eewWg",
  "key28": "5f2t4KWnjZTDjYWn9LwHARuqtZnFcNRmVA5jVed9PLWZHkmEwdNDu8YRNQP1SXuw4W5B4Gi5bbZRPgVDbBQeWaBa",
  "key29": "58D3gCArMBpKgAEvSp16vYe2uoaYWHbbvUuXwrrE9Liu9Wy56oET6UpXsXwiKsVEsb9x7G3iieUbFFs2DBxKspQ2",
  "key30": "t9U3tiNmzU28X5evorxtTUDKkH7LnYp6ZdiMoY1PTAA1SEenxVYPV3zhYBmQHdBQE2znLgk4VwxcS2deKkRZMzw",
  "key31": "4AbWt8t6tmu8yjXz4KtPoCfNMY6RzX54eAHcAV8rD9tEsZSUwaCGmwDR9BmxZQMV6JGhkrp5hXbFoDWg9UG8FsXd",
  "key32": "48yZmYkBajcNG3ycJbAo9P6eLY64wLUowTgitxboPY1wKwe6X8zi6nb9WSa1J45tcUCcutp4ZuVxpWBzTJn2eEc6",
  "key33": "3f74a6brUzt2VVshDWBFLTiyMGYCojfUNtu5VysEtatjHwCtYo5Lsvc8pEfCfxbPUJPF6wos3a5sBw5guCVAT3QK",
  "key34": "3zyCqZKaeN2LxHXmRn31yBfR3FxEumVdTr3Yt79DXXQCLPXd3m8pwcjvoqmTwhrbocvjAK34fJQJ6WKzkgfsxpu1",
  "key35": "S8d5sNUPAse6eQL4Q7v1WUbm5Heh4cUQwEPD1rtMhhDKnRL8BybsJUEEsgHHTihSdEb2nTXuEYNV6AgqHvop1vY",
  "key36": "49tfYktGf1N3cJFQ97dfTzFtE1BCvuhwPR6Zh6psTNUDDXC2iyjcYRLbcuLV7V12nySP8ACJkgRdYAFakq3obbYe"
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
