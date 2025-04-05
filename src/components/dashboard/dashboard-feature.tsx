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
    "41GLgousSdia65GrF7FJFMSt1zLyhkpPPFaH4Q9WRjo3SwG2eNHgpSZHdLrqH2Y4iH7Nb18VRFoHdgd4p24zSuGK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Sjs6TscQaYGhW2VMSuRTK8jY8FXdvDUqLymW7Myo6nH1V9ngBq8g19YxkRibCpVB7YPC8qucw1V19sBMaFwjo2C",
  "key1": "MKdrm5PswcggRtzf5Bcd1DE9umSsSeiC5JKqRmf2bgqFrsfXBXzUmtd6MucEwa6F3RLPYryuFxNGWcCq5qe1UnJ",
  "key2": "3o5ad4NynsDNUvJz4j947XASQxjcGjx9XNKQ6kEAbhykGJwLC8GhrhW1c2X7mZ6DuGXPRnSkfprR5JktjAk1J8UK",
  "key3": "QebrtNuFCXq4jpu3E79y3u5iigoemyBzPNy4TURCgCZAEBiHs1PxpqxWXaStUcV7FUnTvi8cMxnktvGWgMDqoh6",
  "key4": "fcE12PayTqGzUXHXbjj35NpX6KEF2D2kr39gPUUzdXjCvR1MqWbJ8DkMqp4rurdoJQ4DQB8XKMkzX1rh1JUhnpC",
  "key5": "24YVnmTF5QURSTVJEdb2g6bWLLSJuuWqX3jmFSPe3ySH56uNGPHLoQsrpsqEm6NJ7uNWeuNy84kPPALPLyEYtpzf",
  "key6": "uh9EY898uoDYS3AmtWPAV1eifYGVeqw9EuEqWHzkUqiGVAsJeR3wBGQZUtYNrQok111JhYyXF49sXN6GEohR3a4",
  "key7": "4vvHNHyRrbXzKestmzuyBMrjCPwXgG4xAqWsLaWPtvGS2HLLND6r5fK5xToyJLTGF4rZFA3iNthuVBH9NFnvAYjt",
  "key8": "5TWmDbTtxCHV68ETth6LTK75oyRvTLmF6UUPTyP4HsW3TzW6WaAk7jvB3CdWoy6qZvFbPXVK8MgABQMM7LVKvvNM",
  "key9": "2pkRya47hKLhZwovbMMudBPSppadVuaLgm5jTJwVmCquFgg2ALbbXEWpDoV8s1Ucm8AbawXorsLMty7rseP4iVQh",
  "key10": "nwbsU8JNwNgrihbiiv4QbhSu5FgBy9iRgsvNdnYKVcgfTCjYRyVZBm4pystfVXaMsZTFwz7LYRCS4x4CKHwHgme",
  "key11": "4XanjYt4zwDrWjYrkE4UkzzxGn9yiiX7w2eJpUhxMhk7KDfRVisoWsUc2jTp7RLPaCfR3CiZ4oJAxhsaZZxaphQ8",
  "key12": "3awKNh9wSc1jzy3o5c9BMhtGp2fFkdJvrjK2os7JjKhK2gCr2htFLQ95X6VCePVGo4xuHdBiqs9SbfK8NEykSMaZ",
  "key13": "3tkuWWB2kLmTh9rX34xnFv2Bmh8CnsuD1jTy2crsNTpR3trye91Gdi6LqoFFmsPMDRadaGBFv4n31JW2aeV2ncyh",
  "key14": "3AKKx8ndAGttXpqGoJ29eMMKC5hUK3XsMviS2jmpqnPNjaGCebQoUyeahxf7qwS3g6cqDkkzBq6gTeDtndrrHXJn",
  "key15": "2BmQNyzEnRRz4sFTq9EE9fcCRjGDi5ZB1ZshL9FrEdEoErrgdNLpLSZyAjGfqYddYVm8jdxxRvd76FH1cgGipd5W",
  "key16": "64kpSUScPPP5c2meeQG67Cwnnbt2vSZ5j8EABVFTQFq85ue122uH53oivCKzoTYihLqnW6fWsWAZfCRgqbY6urRv",
  "key17": "5MwUQWQDQzxxLnj89WbmbQJHUKT55MA5u1epWvnpL9kU4STmkTwoetASzhJrEZ8zp9Wjuh7qhzNLFzzoeiXvBA8Y",
  "key18": "1UtwQgv4Q341QHwCFJgJQFdyYKGvT1uBTRzNVjQqCGnJ1v8gGW3zLdYRxkNdE1AhqnzXByCedk9dpZc6ynYjqLC",
  "key19": "7WxbvAaDuMuPMZnubDd9GR1g28DpYoLFWbAJ9CSro6E4CrMcyZsbCEHNVvt7u2Tx1TkNrcv1C3hT3qPfQ4WDXpg",
  "key20": "5o7WPM6cEHy65Q5Wi45DowB1bZoTx8yjsjZsAHZS2XEgJJdskEBHdrVBY5WarGmMCVAUJ287eLksQyjwZFuK7QW1",
  "key21": "4HTzxQtjdqz9wWBh7r7N33oydY8fRn2qmgDQRdkK2GixekHUQejzYPQyKBz94nCeWEat4ngWa25fDTDHUNHxbyGg",
  "key22": "2irfccbw5GKd2VuQ3b6JULSmrBmMxLwBqq7yUCZDvQy8txwVJL6EXTNabVqba4bLDsL58oa4PDmwnkSBpYTsHmr",
  "key23": "2zxgPmJVRCZ73urRR5t52Z6CMYUptGzSf6RKRECiUpkLsqodV1k6dj6155kMxjFQ1WKGmxiT9S3xcMsUa5R5wo1N",
  "key24": "3hbemqMHXkvTn2XWQ6hWZfqVCSZ45EZ17b1NrKqjKWX2CVZXgProA9VeRnrueJyBqnpy6xG8th4Bu9Trn8MfsLuy",
  "key25": "4Ligo9drpsD7mU2chFb4BrDhaipo2se49EFShdmqWaUjSn1mZXjvXR2nmtPQFJHiE9VGP1MGERA8jCPQB8XgUdsw",
  "key26": "2gbG3bFLoGtmPPQur2o2vwsBUjuZtMYnF4uoEUWLtNsMzqxrmVpSUu3T8jpuGgJdykZNJL1oDVFbX4dHgycM8gHc",
  "key27": "5cTr5Gaabpx2WuirFJ3W1jQ4f7RG6j3UuNUtSsixr746RwPAHLgb3bbNrjWVQDpF7NNftt9qAzj4QxD7v1K62sDg",
  "key28": "46xkG3nTHns8qxMTX2yuJzYQJBi6zScnKQ4uGBfNAFNWgYL6nV2MeKFEkdjhn9WEzECYyWzqn83JXKj9HfMKuA9w",
  "key29": "XWU2TszHji52JVap9AKnz9PgdJ8nisx44ZEvvuGLTbMWMMUBkRaRnrkyt8xV1TWodRAki3zYGs9Rt5BxFNBkFwk",
  "key30": "2yVAM91qBrcmtaL2ER7rEbGvh3bJNr5beqErVYRfyywgk14wTj5AueyJLi31hCJ6yTf4fScprBUMQDHmTmHAQQS2",
  "key31": "ysqG61anSHMrCxDzAuscz5t6vbY2G2zo59G3uV7tScS5y9K6UUbSkB47cTdrAavSsUqaEqu5siZe5LiNHSrQxCA",
  "key32": "4R3HDnwB1hJtPT579DmCV9wEUcniRqBGoPzf39aaVrwNM5jf4qFAB9SD8VeWz6GTG4HLsJmk8MLP2nY6tMYNw465",
  "key33": "2kbLeYfGh5RmjF964xiAWGKP2KUKESpvFCHG7gtK72kTX6qd3SJ7of4qLA2ycxAKYoyNfJkw2UhW1ySLqbJnrDcj",
  "key34": "YZoJDZdUvxEzSz4LpZwuTVoeWgtUhUiZU3b5MG6nZaNdqmaHoRFEjsDohSmaVz3Eh4mZpYkDHvFft9RqkPGxySo",
  "key35": "x41NcNYiuc4NkjydqVkmLSDMPGVf5FBTTFJM8PsA9QGsgvu2isXKAkMxm2r9W69TM1gPJdFnjURihKRwPfS36S9",
  "key36": "TiGkwCeYZ7yCc6oEzGGZEz59N4i5uaJMemQP5C5ppeixXcmk4XFMhK5L23nVPM6wXD8H2MRmBHeiY68WZwjr9G6",
  "key37": "5G6U1djAaXd4G532ycFBxvZKToKD9e2iEcfnJ5TQn6JBaHfCdGMMKgu5BPe1x8QPipeyATu5oxPQ2RUq5z6frkxy",
  "key38": "TWG7MWjzALS2Kg4wp64YX4USEEDoXkKxGCPEkeHQL7SJ8LyjDgdrMS99Rj3NbnRfg58gUqTvw5SqaiMyLMGDGUa",
  "key39": "y3STryJ37X7PoGVPoja65rPxFSkYDrMT76xbPqyHaSkhAFkDD1RavmUitR6fwZE1syNH4MztYCBf6wNQzF3cWJL",
  "key40": "2XTN4YyfaDs5rznD4dsLbo2a4YYtjsTqn3EtXPnV1LnZZEdQ38i4UmGTSf9jRtSk7BA3YHq6dZAdUdEj1kJ5HynT",
  "key41": "4L3J6Zme1E7on41oz3rVXNEHpUQDHpKapnR8U7riAy6zNVcHferyG4LVFoVnYRuJj8Aat32RJcVw572NVkEAgaDn",
  "key42": "2wJewn2g53w3VNqh3oCN8V8BxvaVaNX16FKz5uHA5P9W6RqYKqGmvJSHkup9AGz2bpgung3ZT9Rj1NyaFfrtjZdu",
  "key43": "5rKqY6mt9p4nF6cDDR53H8RVbpQ9VBBtsTKhZEaHeb8F3wuCsmKJqm1v5fyMHV5XSzRDyTBZcefzbqi8zKH7MFUf",
  "key44": "2xbkLYZiwW9wrnSsN31SdV3SEUJavXKuh9MWGLkeMgTyB1oMTh8pZMrcpfJXmaxfmNgCRZikfVRAMhvoY2cJ4tT6",
  "key45": "3K1iz8vnCBtoDML9veU1eXFAGh535U742gMYVNq9BTTsG3AgMhAvx3wtCSvXZvxuq6rjj5w5buH9kmzABzFbL49S",
  "key46": "4KEffDo6YSg5TzG85isQKNCLbiZa1tBaC8TDAe3p473Q8uWbmmABbk79enCfHky5bFTF8sTiUbMxrJyEgWx7EdXu"
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
