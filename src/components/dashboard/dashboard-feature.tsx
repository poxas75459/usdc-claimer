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
    "4wsyw1VNicayqDCGcx5Cv56VTJRft3nPdui5zeXXpKHituHQb676AzUGEVy6B8kKHFjuXRzRxQxLqeECYfqPVhDT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ggp4BoZJoYoFnT1JTSU6iHvRUdS5jrdeb7UC8h1fnV3QiEhHV61HzfE3xixYjdXE4bBodzyFitejw49CDqMu7BS",
  "key1": "4Us1P3S8ZD7KaCsXLziC66mU8iJMLF6ZmGoEiVUGZeahjomMbPuJQH3pbm8kQKHnsnpvb75AuaB49d58tcGsM3aB",
  "key2": "4F2S8Ym4qgQyhdBxafW1qALa7K3e5t6VRwZYXYEiGGSXCg6ZY7xJdef7b2Vp1K1tLfGjX7QNoNtmeNMYw8c5X8ux",
  "key3": "2xUdvRYHgj78LiuV9MqJm7omshVdHDLy91AYiLv2Fdkte9zntPYx5U8tK5ma3xv1HjXJUfLne5XwZTbpCAFgmukn",
  "key4": "4GjqFyyvPhNvSNnARaLciGYUtuJABuksnr771tcnzRtAq3wiYwUx5dt2dDSZ5W1UTWrbXqLVKt1GzcD9g3FoPcsn",
  "key5": "72SBx5nu35vpdzEdcYGX9fupGSxQLaiDYANC9Y7ehveYPnGyb6xQ5H6aPb6cEYqYe8RHqx4iSGpjyTSRracQJ3y",
  "key6": "2fWdjEi14XJr8oJJD5ajwVV4h2RF5c3pTDZNBASQQZ4ccWBDMPaEG41J6Ve6NmDUcSnr6Txk8jyWovzfCmjH2KiE",
  "key7": "4JSzvnh3dTPqDKwq9zbUZUVhm6HpEkqRATUpdHD5paaMG74Mjpn1y6ZtQQNgx5CxWdhjTjDddExZQcDLxB6sMWjj",
  "key8": "5ewUqtuy1G7DqMT1sCbucrqjuLJFSXQ4JRySW6fzrjyJuGqA8i9VQgsAeboYP3mQAesCtXS7uMeQNpwpCBgLs7v4",
  "key9": "5XtDBpEffMQ93Z5wsvZch5CLFXpEFfD81Lo2DLF8iyJYBXYLJgpK43y8JEuc4ZHoy68hTSv5xoPXn5tj5D8ti1uw",
  "key10": "53U2pHJ3MrZZt9mJAzy2f4o8XiumDnZuC6oQMN2UMJbPLKya2EYH1jpSfePcpzDrvwkTwVhYySx4MoT8vgJBGnLp",
  "key11": "3FwQQQZWDo6dkUQ5UhDsBg2KSfHidJPgkL45DAgtXYFY9Tkn257wrPktvhLKdhbeSZga8sZJdpqkRprx4W3jSpuY",
  "key12": "4uyhqzdiy2acN4okwYEpb4pdYSnPdn6ocE1bQpVQk2ze5Jh7s4MB9xhvpgbDG7sdWVFqGv6yoWKGXcW9Az6yWwg7",
  "key13": "5NjGxPjrTTZDvgkpYxdz2QxWRUMbycx2fGAy2pv5xx35FDsj6Cn8WeSwX2Q12enDxGYixUDJqx2LJyQc6LKejGpy",
  "key14": "5mcEpZog65qGqzuoDZ7PPFVC5ih7cm9yHKdsfzaBVDpjWZHBVeaLDSDvHqNMXBAfihzrMuSYAQBzyAt8Rk41dgLB",
  "key15": "2BSErkKGB3x9FLYaiYjqSt6vHQcoT9XTwgdophsJZ5D7dQ46ZMBgcaRASxt2Zz2c6E8FK8BBXepoEMysVpptnSwk",
  "key16": "Pp22YFPjTxqesMwJN1Fe1Rgmpu12wtboUNQJp7CwKKo6G4oW2ebXnBEBPKrFtCWcBTEVDKG3GvVuPwJiA5t8LzT",
  "key17": "2N8xjqq4sEUuP7oBgiy85EFNyB2zoUhAorYu9XvmqxNYhD7Gt8SmXK1RxfeNVqZs1e4Q5AgYwgbQyjSGSxdNHMUr",
  "key18": "4zK11S37b2XLNB4fVFrrajRxkL3anYg2CY3VaRPNwUDNRhMNES6vuh2GNH9j6P5NBmny9GtkJK8zYvwxM2eimrMx",
  "key19": "2RhwQMrTbrc3VXjCfqJjfpTNnkzGnrTkewF1Pc7SuHyH9vRY7GcHdN7CN349AYiHpMtYgWFodbhug6HZ4jyryZ5v",
  "key20": "ZXKsZpht1ad7iVimUB3eE5wTuqhMGwdJBR6L7Lt3MbeBRX88yg77M6y3F87xKNH77XvqSyni1LtWWN63L9wKvm6",
  "key21": "2rCDaoeJ9Z6dwtesYtSiWzfTtJFqC4GWAvagLQQPAUmNfhHMCFkhEthyAYpsvTx2qU2d3UaGVi5PjcTtiMbVA7B8",
  "key22": "24mtkfz76fU7QzuvsWvQJds5ZyMSLThEin9J4kAw8HMdjcav6E8Q5SNxbTfTqeXrSDir4tPmNJVnCQYW3pb8351s",
  "key23": "2PcGDAj13kys8woKMFLcS39WxqEUbeF1eRFdp6iQwuUqYxuX5wU7xkZ9vQfRgKpjqoM4hv5Sqo2a6arGExaYqvg7",
  "key24": "5xjvAH4V2TgZNV6dCocNcLxWETZ7bDYLuYVbneW9gyJRvd6agdFyTLLuepPWo2P3Jw1N9TCZARsxMm5GxwyMnr6z",
  "key25": "664R9zeVbUCBWFsvmA8RLa1HaegfyHoaRm7CoCNmJ8apjvNmXwTokADGXZzXzvYKuAdk9my4mmzZ8ZhuVQVBLFfA",
  "key26": "5MLTn2zHW2g3VVgkLHzBZHThRUyTbFHuLJTJ5BjJZtTMXFxToN34nb5fnHTKRuaE5AiDTAp7bSfcZNTK614ZfT8r",
  "key27": "Ckheq1F9WPZEH5qNSLjs7u3TTRTomD4Zid1QqfpsUXMcEv4tq5oaavrdo3yR5ywwAUcmSMVL5L6eNirDB3JLFhr",
  "key28": "TUByUK4TkSBvoqfaKCx9V7ZwZ2EVJVeH9tQz3GcKzroSV1vqD2stDCuZzHWQGDKLRinNJD75QL5FMaou3XRX9Ft",
  "key29": "2DprEV9C1e4eberePskJWfwLEcENHYWdTQiA9LYbs6HciJ8T5KW8DEtN9NsPP8ApiEeBBd1EYuYegieTrCH22wZ1",
  "key30": "5Fp1MT398KEZdEpseQW4Uj6eaYe5ZL8o6c9WxygaZMrxQN1NeBh5ANQw552mxizhGNjHcrTmi8iEawn3Qb8GUV2d",
  "key31": "5LUYihKLXrFKy8ugndFWuySQiQBG1CfhTxF3qyjaM7naVa7U63jr1QZ8wfYiT17VG5E2L1vNR5g2FqVNcmEGx3pY",
  "key32": "3xHThAdDJxUvvjHF1ewTq3uzhHqwKrS8WLUzUF263SeLzGPDL7aqNko5JWD58yt6EqtzL7UM78RMGD4vYQp3vuuc",
  "key33": "4v3MJ1U83joQsx3GDNfy5ThUELawkvoiAJSMV95awAdWCXBbaKz8CCZUdrx6nWMywmqTFzCjbfDzfTrWLmRCuQvt",
  "key34": "EV44yEFhNWZQc91Dn1kwZ5WR8KbEq2s7TsZ6joQRgXeAfbnqZeRRdVphfwHouo9gtbpVUXFaqPEMbTjfRgdkr5M",
  "key35": "RvP8kNvs3boczvMpYFezWWK1nuTpxQA1bTDLXYNcoe73NYAYckbNMVgkVjBCh6eLCm3zvKvJcquVzQWLgLz2s6i",
  "key36": "4yhJqewsAjSZDKy8EzUL5smpFTfUer71F43okLyqqzFMokZxk725UDBeCPZ73Q7M9rNdaKLxmJKtvvAf1aXAyiMv",
  "key37": "299Tv78zu3KRKfoxj5WwJq9g82scF6wmeCMmEZZaa9TECT3QeQxUkfNnpzz1HbCaqUCDqSeRgjQPhLTH48WD944B",
  "key38": "5AMSFZCCJ79suJg39LsPAK7mUeBKmiBU7bVRch1CNtkG7QvXczFtz9cPBu2R9z43xmcuEGdfhqeCpKkBtpUmFGJ2",
  "key39": "LSfFdWMG9aRqg3twfpLcQBuzWKERqQg2WcUUfu5UWctoedxnpDGFkyiXMdbpgsiQyyFwHwtx7zdJwvMwTbh7fuV"
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
