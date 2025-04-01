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
    "2EUSPE18924j7TPW4CUeh1WpwGBza7yYZbmPkVHGBHim7NuyKbXHjZgmJ57iituzFuQnCGx1nBzLoGdh6Tps3JmR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35j8wuzFJeLKLkKyJL42Uyv6Mp5LWjMA166GkM4tWKrQrNLc5kRsufHgmmw7GdhVxf2sDd42cpodfQkeuWSF5MXG",
  "key1": "57CvEcZjsu1DS6xrSP74NN4ETW4iVBk9rfNHzvRDAjoXtt2rNjGyhMvpwAc53bJSYnacFkU9Ra1wrLBLgJaELnKq",
  "key2": "5nHCPVeiT2SdQbPkZiujxA9X1sdjbSXsWedzPKBveqjZJZyRWNnKgBisHWGHEpc6oZF9cnYqH9tGFucfp8KjbiUi",
  "key3": "2soLKSN8j8J7HyqDAbo26NPhvdTHDtGRveCSp5eoyCu4MteUGMqrdRdNnNArqvbe6FxZCSVCrpV43wkCftpjkDUG",
  "key4": "5hcmzCuFeeENU9rUfAQXgSuThQHKgjTGGY754iGLigsawGxyga1YSkqhpsmd7WgkiZRVhbxSU1kEpHZx1HcKJHpk",
  "key5": "3n7Kp59KzK5nhnpXKxm2v7rTnBCgAns73UyhNGxvoCZ6y82zNMZmMQFkXwcxnpXmne3TgvvaCekYqg9b2BxaW28P",
  "key6": "5KjNqR5wDTVy9dN3wJgVuUqqxaBChqgmazTXsVWhXjfZuxC8ktg2aJ6YDkmViW6n3kfdVt5cFUhV57m6xfmuKmus",
  "key7": "65285dNcxunfwrhDvAoZK5Vv6eSneDp1eButx563QA9AWGFxCUML9USP7B8iMfVcbkPhBoXr82DLv2B5dJEeexz4",
  "key8": "29SREYcheECTLDhPwf6xUbpjUaM6fjgjzJoViswhmNZptKP3srk8zMyyk1e4P584TNVoqWHoJ6nFKoVZvrpKbqvN",
  "key9": "jwfGKSyVFiKxHzbMJs4eWHnB83BqcjeENxk59ZprgERZpxJ7kSBPrgvaAemutwNiUeK11FcTYmiHYxQ5G78ofZr",
  "key10": "5LZSb8qJPSXq689KidE8emY7Luz4XhTEfwQbXttXNumhmwipXcHsVMvLQDt1GCDgPuLtF1S6ju3c3eV2nmYXavDf",
  "key11": "5dWXThhAGStdkwdNqPkdtb9N3M2eB3GHC2k8PMqiNvsWix6LEzi4SvmuyzGNDFyWsKUmj2DK9h5w9XabqKWCSYF5",
  "key12": "37WbufUnainKqeuKm7dVTjNVmmfLdSyVhjrwVqmuBCogrEhXzBCb7EC6FWT1h4WsAo2hD8mVSHcyxDZd8Y1FFtwv",
  "key13": "pKGoXoW7CjsRpM5rw6uTQgCEcMiJyTWZr44B4n1oA9Ltf1Ct1pMXxTFRxEViQiQcT779aviu7jZoZ666bvLXLij",
  "key14": "3r1ggWubXnrjrw8sYeX1RDqCi8JbGhSCX7wdYtE4TQr2scfwjtowoaafjuqzBY8VTzdtvubEVohC7h3DuAx5U4ft",
  "key15": "2NtDcbAW2CZ82ZGhDSe8YgbgSeMPG2eb1pigduUFwUhPW2VuexECZ4pEV8N9SyoK2bP1ZaeyLgBseEAfd8nnFkhh",
  "key16": "2N8bU39KMdpM5EP76fZdEQRKMhdw72xKFnsJtnBVnQWk4GrdSQgVDYAuMSzBfMKCgPBkdLaSNnihpBz2R9mLNWnv",
  "key17": "2MNM43fTpXZV8v6rR69C9pJfuSopwm9CKDh89VQjQGBSXepMnEdvnvejTFv3AD8XSeLfiYkgKZEXFqWrjahUJjn5",
  "key18": "38JuAreednFzeYHpaLiaVeBzd5JDANgLFwhkWPWrywtzfYo38t2ohhww39stxk74cfJ25JfUfCS32kWMh7jaLz2n",
  "key19": "TGW1fXcx65tBGiJCzWdMZsK73U6nyHEGYns1U68x1JJ6c1rW8gtjscwT6iMnXa24619Ndc8X7u1TixWEZKtsFR6",
  "key20": "5V3HSJDKtbqaDafDzCjdCEE99A8RtMsC4HqfGJhKEMD87pGq3BLnv2A74Ao44w8TD4JRPmh5RzoXaMYQgAt5TCDo",
  "key21": "4mFgXStJzCQ9u8C4SGhCN8jhqZX5YtT5dbZ4BEuYsCq3RPL5kbvzoLGyDWJumch7qCGWQ9fjUexFSJ6SX9Xmo4FW",
  "key22": "NgrwMV8d5EQHtadaZ2iPq2JePCnkkzaBm7wDcZoVnG5n4wR2QFec2VXcZ3euxdLuyP97F3X9j2CgXGmXqeZsrYn",
  "key23": "2MbGd2v23eJDmgnB57nC9g4cHxNZVd5utEp52Ss1DDxxBAVgsSs1UBK92Zs6TaDfsJ6foai5UnjSiFdDZCKRan28",
  "key24": "ZjFKWZndo3GEkHs8QgtGDrRSXUntBwVHpA3TgtTtVb1BCixXEtPM15SkQRFnofeoy84QLAdnsCmXSj197MKypJq",
  "key25": "29pVhZBeChSFekskASPBLhvoxtm7tawXZy3c77SsruMriDr6PE5C7Rb8hwv8M3Uc4RsrByp4SqoFsFJpvMKYUQP9",
  "key26": "wd3Zdf8NHmPrzTi4Zo5RiZ2aK74Axv7dHEUiFWFq2vYesK5fbaUmaWwH3JWNmaMZ6mbu9S3xtdJoGsKBZkrzZ8H",
  "key27": "5reAcnaYj3qnLvEGsgqftv5vPSkF4uC1AqDVks1VAE5mnLveV3qSzVmxJcD5tEN9MBmRiU8iCJ5mEtJ11GPJ9mvi",
  "key28": "2d2eGZevzwtEXH1RDADy8rTex8TgwgTQbPjfWtRLPyHjBxue6hNiNbvTapickJrfFu3WN3EhxiLdR41PPTERqLwY",
  "key29": "4v4okvGJEmxo4E6BWf1Di7mjGRqJMALsUL97dDUanYDxzzhxUc1Zq32qbMsoJE9ttt4psMyrSD9MLNSGZwNVWow9",
  "key30": "3cGYZDBDYcGr4UANvZnGseVZQjRWQ3CSCqiK4XGDGAyDGxsiADuvWggWjPuKJhXRTZRQGYfATwzFA1exjAT8FTM3",
  "key31": "2tpMK8gmjiYFZudZbL7VQEKaxswCpL46KNxsUdNqy61immUpxMSJhXxFUB8U4wxCi2X3LXAQ3TYbJnaUpTJjTqVT",
  "key32": "2we95UdUUEfzA8yWD534wMCVNaha1sKtfDkhZL7JmswBdrMPuubkBiePAxJxC5SDe2JhuM9xCELsQyTWxzGcsgCn",
  "key33": "2P6UwGA57VtZ5K7PvmGRSutzjBxjWWMCmjQKX5zNCPFm6eC28aHYJ87TJ7mENCvoB3s3aSHXoPEgeaYPCJSMqAFF",
  "key34": "5NzMhbW23RDqzcMj5SD4ij5HwTzTqAaxoTvigjQKXqWzs8SLJ8gyeeQSvAjo3UkXJBjZ9NnxtEnYMZ8p1DzRBdYW",
  "key35": "252uhGh88to7xrghSy4BzBwKHGqnSr7A2wGBmUwdwHrpbjBxaYgnmLDz21GiAmGGzooUbdY2mn9V3NocK4gC7M8z",
  "key36": "532YCnAB2nZowhQv1e56QETJYY3mpyzASUhjBuXWwxLWuAJCYHng9PYgiNKFR1yUbuWKpWa2YT3zMXBxgcH1FJzZ",
  "key37": "5xL4kSgKfo6sVsmKdFxdFLHTAF816aT97E2oa3iozQWjPVjLeDxxEJoHsYiaTpeXzxfSMUNYWDTEZ6zmgoMKWxPj",
  "key38": "4XY7vrMkdYkvjxnPgTdun6ucxt8td3KMg5arWRVS4ENh2DgUrr2MtDZboz1xCK2Z2yBBqFXSAeJumJAovSt7kHnP",
  "key39": "55ZpKBZbFVYd1pr3gx2mgo6arJDWjHqbXfPptXywbSCHxsQrhz6xM9vm8dPpyKV5x9VgkFogHsg33tkboQQpprCF",
  "key40": "5ud55Y2J6wcGLfFqBKJeoYsAPdj9NoYibEdDiQsZVSGxoH2ca7LZW37Cz4W99pw7stwFabQhFLQunCK5urzUpGXZ",
  "key41": "2UDX1oKHpGHXFt2QcvRjnZdUNsQT4Rrz9mhdvTihxdADVDpMG6NZAxbYTB8VsX2SARR8DXwBgkXBHQmwk9c978ez"
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
