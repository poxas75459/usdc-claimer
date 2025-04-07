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
    "5wawcjp4Sk1pt8PT4rLmwCbSy42sFY6611g9z8KzqDxLjBDfoN6vTVrvbNnTtwZuNCaoV7HbRfvrB31PbUiEByDT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2n3kDJC64XyvHyUw7MBpNwNtJjbcUEAQVxTbZGxXV165GgniLbNrjtn8yJ29yiDhe4bu3m4tFoUEKJJkQD4BP6zo",
  "key1": "3bBQY756ziEVp3R2sZHkHZ6Sk3JSuNEozzQ9yf9X3fp1NPRJFKaNgwZ9wVWy5Tqi5PXVwGX9BCTfbww2M1Xf4Rg1",
  "key2": "44dUBD7s4MKc4mqD9vHiTzYG3eyktPjvPQbSxyeVkvUJTf5NcoW9ZWiffD8QWXUgvLxZRtdFTb7ARmwQrtQ4Zihs",
  "key3": "ttMcF2UstGYKaAQt88uN49CEK91rCGQkZCc4XERBJJAadCEJsU6jy1qy2b8pfMiKEtvfs56NizFxXhn8T4Z16de",
  "key4": "3AViX4iEXVdztvimwMXi1xooyGGeML47RcfSck4Gz14YkwusFSdRNMPw4JmskRy9iybjQjQNGQS2dwboWKXVGrgF",
  "key5": "4KRbwe17xZY7haGvtbcknKikqvMsTZ6GVXX5RVqStP25KiXNoCc37i96GiP2rrH2RoRyvzFoGM8nnuwJt1qaN1b8",
  "key6": "2vT54YEv2UsUaXv7NoNXK7wb9GZkhKAVq9FkCRFzKkrKMbwq6tHzdX6YL1Stwseajwd3kHgpug3dQnakKZG2jVza",
  "key7": "3foKCAeN7NJiyxRYt9VxUZDvAQxSncGmkZBjUi72gq46apA4H4rCQ2xBNXvL74JMcomjQWzFrsLyZXNd5htJgXuz",
  "key8": "JjibExoC7M672D4tVSxsQMEMP3AkM5QsuSrra4CncxEUMWafSWTaMVnKz6zqeCMzVmmDJLayM2kJv3ptZEL6Ywu",
  "key9": "5bXHuUjRC6YpjqGKQSBoXknaBdQB2vr5U7qXVrA2HDXre3xwRBTPqwrN2rUEUFp5iRJatj29W88GuvbceMJf3vVk",
  "key10": "5VnRvjq6LGvgZBoZQFpiG8gg6iSyscfU8HhAbYWmoVhPYcjYiC4RvgEHGLLCgTiu88z61VYsHGjUW8QrXwYN6bgC",
  "key11": "26SXYoRpdjtZFtoWd4jq4Zag5VJv6j9i7ZP2eUgQNV89s1siwVSbHtB1aYKc63ykwV917uSbuYyKYvnSpBnRa8kB",
  "key12": "29N7TkvJeCpPyTsFWX4LNAHc9GVCtDmZfj1KVQTwEYErRWuuq3U3c2ssESKv28RY2dzzoCAzJ2mBueBj9b3j3sBC",
  "key13": "u8YD7CSjH4n7QxKtR9H5W59DkyXxreMVJvvFaZh7HnEDcf68oNySTJESDehLHNbDHekGDG4h5QjbyWAgKgs5oU2",
  "key14": "3AgbhV5rEn9BdeJ6y3SWmQ23p2zrHfxKwhMxHjCxxosSYajBJwG7c1HBPfEfVwYCVFT6qMZ7hXrbuoNjraiXsiGo",
  "key15": "2DKrRwbasSKv1AmGePmHGUxAMuxdTZsXFAFhBaYc4AvcVxp2jpe3CmB6z1FNK5R3dwysP54XGRHpwdaHJNNs2NKW",
  "key16": "2QQPBxoLCbPuvPPpUx9MfoUmV2nqHpi1B1UbZdfXAar5caB5E8UWrGDAmv2XufbeDhjUf5dd7jaMYJrbn4gfStVD",
  "key17": "4FN9GndhYeCuWmfrThcNk6q5CGYy6qUkCz2n9FKYRBmFaEzBrAZ6xZ7Bp32gmt2dhA9FZj6Fr3gprVgAJcunwYbA",
  "key18": "5eHzcCwfYPc5Q7CfRJRbUjBW5fmX6pWt9RS34Gtx17FMZSFmYeVwe3k2krbPbte21kN8qbqhKz9zgjETzaEbbZtw",
  "key19": "5tDpwmcHVFWkpufvCWmm4Qis6wEF66ss5UptV2WpwCd6Nn6nubFMt31HZJunaUvDt33t3Ev93H3dDzucA2Z6jCjk",
  "key20": "3Ea8wg5T87Bg7hPXVh6uAJ25g8tePBEZgWdLoNVNDCGnXAj6Rz3jm6RjQQEqjD5NBY2UhGHSuKN2RtrAb2ixbx6V",
  "key21": "5f4eaBht5VpB1wQCN9Nn4ZmcC1GfEp7RxS38nyff5Up7nXnkqGHr2EGTfrvbnA3eAhsBgx4DwrysRyntK643q6sD",
  "key22": "5FyRE9JRvgM7SKm6cUe59X7cF8E5pCi84L91SDme9LCVG49NtwHBQoeNPws5cVvT6KxPwAS9DXov4T9ihs6aZZK",
  "key23": "3FHk5cgwcrXHTpV22trfJs156PhDBiG586C5jHd2Q1EoUVGsdtB2LHhyae9orvfsaSmrL1VWunBaXd8eBkCmaL75",
  "key24": "2y1vWe4JP21KDQqW6ATEYhmVzZjDJwooMy85X9t6YeY5uH1XrjABsrN8cAyTtqzFitRSmXHpKDp9p5mqx6NRDFxQ",
  "key25": "4qYXncxJyKuNijkuUnVZX6S5uxP9iwZSkrTToQSivfgvqquD3dQE8Y2kMmgTS9pd9RchFrMAVeactyddbvoYnHmL",
  "key26": "VDjxEhJLTASnhUpfp3pr4pP1q6nVrTvHiDJpe994d5aCHzmvPUgSvfvVKqiG2K4Bfs8HgyWqjkvEnX1LSNE4fXE",
  "key27": "5x7m75H5TfAuJS5CFvHqhBjxUAdYALtMat56DXdzbNK7JT1cBSfzLPZ9gC4eSRKKS6Mn6AWZbQKBrDQZupPeJS3o",
  "key28": "3CkgLb3eRhaP3RMfFR2vMGsvZ5721S47YDfJb2MejSnsyGa7PPibXdqRg1scBW3gaaYFVZnHT81VCKQ6Yz1Eb6y7",
  "key29": "5HDg5iqmPjzUJeXhgiJmGKj65tWevpcyi9TGQihVBKaA2sXXbkFQXCwaEvC66jZiYqymJFtAXLHZtjRyHu6MH6n6",
  "key30": "3wZa9Mt8PbUifC7AGTzBitTnfVYpScUf3EiWz1RURsemNf3JR47WwTQfpoUKZqjHfaHpk42jWk5RKtgR7M44dFZ8",
  "key31": "5UdS3K949DCqXbYwipgKodah1FtPHkJduXQfA1MwCKnJ1NpcuSGv7hNhGKatTufGqDrdLkcL5hKMUDktGvoTxEm8",
  "key32": "2Kngk8eFrWjcXfgeccoBFnuaYX428bkkVWmBT3BCH22iP5mQ67QFHNH4YRx5SZKbdRBZtc7mhvcf49MFhSV7r14c",
  "key33": "45jM8AfRqZ97eV26Z8afa89mwUwsDVvzsQAf2Vd9JbypbQoM6qvQMAQwtEztEBeLwontRdzobDMBGYVBXLteKqRh"
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
