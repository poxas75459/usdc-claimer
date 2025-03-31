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
    "3chw1PU5bNKE6sSH2gxNva2QjGb76U1bRyNvwwQXXP66t72AnmVPgwyhrRzg7g7yABX6Y99L3JrbqYzypDneD7JM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VhmvY3rYExzfsezKcVaPt8DQAQ5RtnzxiDqvC1qSz8Nw17vMMbFPj75DSxT5t7V51Ch4KF8xCnQA1mxZfSnL65V",
  "key1": "4JRut7zijkWCKEVhiVoLMi63DuNGmoxBN3rsW5ZdfJZ4RLUBBNzeUCtKrSNqJBUWWbr2pi832XLRJHfBFCEXFXRP",
  "key2": "d3fMdAz1rjmZYovEY41krQpaxppihKGPfeVnV7tvHWDG3bwGzvrAUexubmQnrKqUi5MF3LixeXQJkHGpTaboEvr",
  "key3": "4PrE2RNbjq81WVKo7Q7NrB4nTVjJnCwynrJ76bUjc8MKGRHFB6YNsasjL5zpyRp4t28TzyL231vne2E5wr26XPoA",
  "key4": "37N3qhNqVYym9ECz3xg3mDam8QGk4psPJPq2Y8XdfjybRnJ2fAMoZEThiGWVoH8JtQdYJY8AiY7dsyoRTqxCwWsS",
  "key5": "JH8DoFUskZ8PPhGqMfpc2Cm8Q3rTvWZyurGA4TSpyyrtG5QHAWNs14jZvrKX6CYvg4FHZ5pEmxi5wC6yWPqs2rk",
  "key6": "42GKZQdeS4A89Y2LWwjRy5JAhtbcSCmxz9gLmimpAuqmN4pkm2ubaQNiWSxpJKjvQhWCJ8529d5BG2aBPNAHnwBk",
  "key7": "3z6rU4vEott5WuAi5aWnBUa9qF7tqPGZDnfEvY1x5UnKHnMcFQDLFyDcwTFooUigi8sJNn81F64Shtvh7po4Hy9",
  "key8": "5rXRNYz1yE9Xf7E22TPzbVoZ9XnbLB3fBBM3jrCdJyBcTZis2Yoy3ffWpPFcwjt4xg5kFuDUWQae1ghbcjt1QpWc",
  "key9": "5CVwUy9X1iYHYzuH9Z1goidPM9c8Xy8tKUh837mtUVqJQHP7sfQd3ve6QvC3L9PZdyuWiksab88VWomADgrkGYPR",
  "key10": "u27cwrNNwsijCGKHo8cnjDczizYe9Dtzmj4AP7sFLPLGmSGHjBDjHAmWVN2RfWfMecf76vnAzs1up5gMKWeQs42",
  "key11": "5NuWw6GoZCuCuyYfW6LXXdozLiii9GLH9hjkbGQes4BCHuJ4nzMRGX1iJdKWuPUGBAGuxpDPBYfYVTA7pcLgiAPV",
  "key12": "4bwux1eTiELkzym11F7fCV2QTm5xeDL4qXNy6ZFyTk2CVZPr8rxtD9MPSfziDmdW9pZiMRiscJ6UCGnARQfXrA4d",
  "key13": "2QthmDS3nwju2ofr7vmhPyKx8XHZStnKtjwc3tmP32aS6Lvi2qbuWZryHUE19g6JijDHfYNezcapzXiUL43q2dP1",
  "key14": "3Yhc5GoferLSr2ztGW7wfkS2Wg8DB1PbFj7xsb2C1gr2Nd7FGPnpDbkU8t97WMcNcEKE4vAdXTmPxmbS1am5U6Y",
  "key15": "3ZSbX9tq3vWgfRPqpjCX4ef7FZ7nb2qWemet8i9HdvUvi8Kus2s9e4b6prJVp8Ry16M8wYoaJ4c76eW4oTH8B9A",
  "key16": "JUKpHxUmqp8mM7wk9r2VbfnSPeqC6tTsseKheAvv7aq1B3T5W89CH8ZaAyfJ35NkwjGqDaWBJe4kvS9nMia8jED",
  "key17": "CG9fDk2KhYW1nY3oLdAPQVtjjZFqhEc6cHiuDpcmS2LtpEpPoVBUcYy395KdjWanh7MKU5Bd4XytmtvHAU6QQYH",
  "key18": "4tBmkkFnDixQwdDZ1CMgykjFwYF4dXAtrasJvHLv9jVGaeEA3biJMo8tgvhdLGUr6G9zRPrsXXrC2KjkU5kFcc29",
  "key19": "gSjo2PU4kwhcDZ8hrykh4X4xEZC8qEeL4moTfTGMaB52KRUqpKVANoMJGUM68zya92PysJiqL9Puq6dLpfEbRMq",
  "key20": "pVyKEUSX8vjC8RgQqazYnUDWzFLjyNRCttU1uCgxTM9N5v8ui75ndLkrKpntzeBLSy4uFak3AKT4yM7ffE7ens9",
  "key21": "2vBygSY4X9epEsS6nFa3PtPUgbkHuLKq7cntv5Hg2KLTW9JEaWjFLi7BqCKf11HVUHm2FWbHF3zvzszpouNvZyHu",
  "key22": "3RHWa2m9PHn5kLUmzRA5igG9fVkCoWjj2UkHR7LYLPoiSGn6AuAfi8KdFVg7imRGtzYSfpvpLfF2FXEeGwdjK66a",
  "key23": "4Hs2F77brTprke9RE2UFnYxMkLWZChEydEqYnNeLXA7JC7qt9QzxDuct6xKxTLXbjvtDX3M4MnZwRzE4QNeXrRu",
  "key24": "3tM7zo6zXtvRkcYhfM3o8dashcRhd8zYaGuTu668RY5f34qox5Do8Edi2gWX3mKEuQjnJr9nrcvoFwgoTA3NSzS1",
  "key25": "5W7GCiYEncX5Xkt2k5sNgBxAJHoN4TPPP4ZhakBwWGnGb7dEwHv25Xcz1grnEkhGedmf53sr1UNa1toRrzJwEE15",
  "key26": "3teSLfRnzpNLjtUKuhkUJAJnfGvgeDAE7r9v8rguE333Q3tAXQAGZJKB7dfZVHcRSczdMKweZtwdJhr42mjNTL31",
  "key27": "2cedWUxxCebhfcf53J9Y5Rmzzd1LtXHXp3fh9PtV3WLMigmtwxu8dZKXbjwRnyEN8RS8ZLSp89VDHtrkEACA7Ut6",
  "key28": "2ze1Nxy72eTrmSuANZX7u5SKiB9jctRfTQvk8QZBeQZGWkv1r8PwBMJNhzFRdH6rW53JkqyQ4Zd9CzYZLcpCvDMS",
  "key29": "5c4sVAsK36RGkNqqKnujD4c1yHL9bRm6PJSuiTYgazTL9n12Twz6tJg5ZRvF4D7d1Rzj1EpVKgU12jEb95jikL6i",
  "key30": "2DKY679NPWzH186jsSekwibhmuZpdMCXFejJZ8p6guPSG66k63qq1tLz6wTEtLZSodFDgpchNWo2M28D1cgMAtoJ",
  "key31": "5mbNRQmWn6JMiKgTMNLws4e9emKF8N5dn7uQieirE9Aqm6TKFsogaZWbidqDHL58Smg9Q8vyyoA2PhdLKaoq7ZQf",
  "key32": "42yk7ZNbAfngyC6SawhXvFs7VdVY3eeB9wHo2yUtDU5otsMvgWZKepp3VdmwJ4XxJa7RjuS8Axeq2Zapik4fJHsm",
  "key33": "4Dwmnytqk12r4D5MsowQsDhDu9RUvf9jJHVff5SyUH1nxD1ZP3GZFH4i6p65Poehn63exevByHNmTdNsKEYhemwj",
  "key34": "54PCsdQMReNuCqzHHx2GvHrg1X9uGjdgCxa439Jk2bjT7Rn27AnbA7BeRpn2EZxM4BHN9yzeGYG7qArT4PUq7HNa",
  "key35": "oVuPetC3eLeNnvRgZbwcq5TuiYz3m8x8gmwpobYphv3s1BqutfJ4dXcbhvbJNFSkDUEmyBMpa9vHzZEwm9Rtvr5",
  "key36": "A6VY2yp1ge8r3Vy81Kkh2wMsAssenckANA1tJcfg2AXVaqyvsd1tbVvNcMQJrcLHr7Q42qScX4uE9XfGY6qJkKm",
  "key37": "5HaxKjhdgnGWGZsFn5bhptadXwmPkLNVEFFbBshUMNM7vGGMGZGa7MkXJmSxERvWGpNSv4m6SZzrKADjYoVZWMeF",
  "key38": "54A519wKymTcYqrogAti1wh2cc7e17SehEWBwFqHkanyEyZ5AT7RuDLf2jHsuSM3jGkWUbbv7vwoc5nHfHBeMPqx",
  "key39": "5uLUG8gpt9fizTVF72wKGiKAfKCtkNdQ7kJdehMFjHq7P7cDtjotQE3SeapuF7VR9epH21bRrBpSnxkWdEhc7Wuu",
  "key40": "P2HaPiCJdXvqoFSfdDXnNzAAxAfpuWf29sKb9AzM49wbSSWNbSi2e2oiybwZaEkYBPvHBHSbZ3u9C5txX8fPN8L",
  "key41": "5UHtgeQqWcziDBQdoJ2WwKDMe8UPtTQ1oE9BNeiYs647spRwTpta8m32fJmwXNug2KgXr94nubRLVrQGQLHd2FHy",
  "key42": "45wgVAtdwLCNSgQRbykKAuZZRN9uZnU4b9yEA8HW8xyW6aVAn1RShH6einngvNCgiCD67gC9eFM5SZU8YPHGzRMd",
  "key43": "FHED5NRhstfC9A7gEPaRJe7dR2SP7oLr3HEDsXVb9xez6YFuzN5gVpHgTw8EZmJ2wkVzSFVYoEPiMNweQ2cAQ37",
  "key44": "3NnypYy6tBEwQs12UNEeK6MUvGkamVXcmY3BSrxGTm1TuRMXCNqhGFtVq6271AiAgyV4bKs6RsSH7MThzP8Ssorh",
  "key45": "3Zcr8nqaaTLCJD6PjuPTEWMFaaCLASHumBGrAHjwyeRAngYCrAJtCbfUxaveTZofKwhykcJAQtxJ2XHchNBqDQ2Y",
  "key46": "EwamyxLdL4h4RPAjV3VnTEwuv2zAs474wqXcWyVQjpoXkAk7i6jsfyRGyNGfwHfaAkHoNK5PkApaq2qMVqA71u2",
  "key47": "2Y4r37Yzr8EpFF81NdQkA681kAb7nyonWg96f888zuFG2UuWJP1jvp4Lrj189vPxdXS98EBbhDja1mo3Kfq57hFJ",
  "key48": "BfsmEYuRfdAJN2NY8AYBHyT997ZtCmkQcgCJ2D5tUcnDfm4irQ96LCQKJs5mmdtJ3ibLKe4bJA1pHM1yCrfSv5A",
  "key49": "3f1dLVQbjDJxSxJHUSA4ARbvHbyauRLWxYdPg9LMvm9Aepcz4bZwkmBmoc4Zi2Ar4MQ2XrxmAS2pqVPLwyjvpjxi"
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
