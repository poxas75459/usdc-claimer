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
    "3u3itD2mnXUK7SGugG6D2EjR6jSJmKKQhxijhFP8GUKE1c85vnAbXSjRLHZnowvD7yGGq2e5M8j96qqtKQpA4TfM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Bmz79nGaBSeVDk7ihJ2WWCMheqqDDwC5GE36hRiJq7PgU1K1K1BNu74MvfJsKzm3AfVUJ57uQB9kUqEyUXuzMSY",
  "key1": "2pWMLBt5BaKLFrNLBT1Lp2Rb8kUYbq9ZzzyMeUpv29JMaPgLgxVUWvixbe6Jd5E5CZLbU1fJmW7iRREqL3BnSkDz",
  "key2": "3xitZurghm6LDzGKYxrMMzxS1ekZ23wjJnv4Q95VbriuXM1m5ma5njRy2cSpQ7B3aKUHPyiU7sr3Yv7dnVjc3GLr",
  "key3": "VuQ8Kz1f46v5NwKnxchog4Krcj8KipFX1zGsqnTqyH6Uzem1Du4mRgX1oWw6ewLqqn7Ljq7fKqwXMteULrDDZ2z",
  "key4": "g1BQ4f1WTyjSHUb1CrLrrcgVrVCFCiqV4WAdiKrGGzn21L5fg3VuAEtQoZ5yJdb4tVKHaHD3TXn9PLGRo9WMhpw",
  "key5": "51W3QCdQ3LfWhajHWp2mL8LBqS6seG1iDfvsQPx35dHVPcuPuq3GRycH45GnoHWhfif6DjdXkQDedho27f6ZCh26",
  "key6": "4sVw9oVFhwc19iGPmXauTtHb9yPCUjncaW7RmghQvhdGupGwMdZydnhmeAPFebtxTbaRYaTqiCWa2btEvcUC6VcH",
  "key7": "3uYg9eJ5nys7pXn1npTkLL4LcYAKf8ZtzoAjXBgejJTG8rQr8aDyUdW1UozWMGdZVgNUR4fMvvFHXsL9fyZHA6nJ",
  "key8": "5wry76wc32SQdQUoAg5chaoSQVMgVojpnaAQi133ZPQvF5S42iVutcuH7iK41BgxKf81JwrEsUtNPsxBG9w72uSG",
  "key9": "2CmzQo25zjkfvLB57QKXtqvLc4ZMsZbv3M69TPPA31dPXVvSHzZk1j3mYhti7iJ3aS4XksTQVQLxAkyEE3nLCLzn",
  "key10": "4vnLbRtyQSigTLvQq5uXYowjNaQuE8RPe9TxWGmRRhKTijxwZDXor6LLoh6mCAtYgRzrvDFyVxaCAwabXpzqtZWy",
  "key11": "37mTgg9bJH2NatyQPsyrBJLqoRJ6VVq9CCtB9osAhoVGmKYRYwVfjKRwtEdxyConG1tN8wKWCEigyk96TCCtqqw8",
  "key12": "3JrFNdh6kU6HjvHpPNL2BmWKvX5ENzB4Qqf2P6aRyTxb7DrrGyRZ2q531kZAHSSV6hywkyFczGaXC7yxykSREGP8",
  "key13": "2j5HDQXuV6AQFGze6FBsLRaiJMvFuP7SDLjvNocx14WDVJsCobXmM4WS2c14BubcNktVieEDfRDZvd1VF4eD4YjV",
  "key14": "BvfCLdNwUmFaddJ1iD7JMycevtLnVLAiecFn2XnP28ibUy71umFZ1GW1xSvYxFyodheYkiG3XBaFaaNh8i9EBYP",
  "key15": "36AwWGUQmSdg4Zi4x53dY9UhmrLLAgtAnvDMZvRLmko5PuZWos7TFcHqYWw1Hy9BNn1C3kn7eN8eQPYLhuQh4rAu",
  "key16": "4RnBKET2S9miXFo4BWpKH1hw8Ez6AKZ1odHTNpPWLquwvcxMjKqrSRnuyX2J94iRu6aNfzP3hhUa74Wp2Z5NUnxP",
  "key17": "xsCrBNfvEq7hoSD7P22oSUWWZALGAJFQnFSBGimfo61aov5sr7hYNK849hzVEuG9ruyEPckMdJ6hxFoFexZ1MJV",
  "key18": "2dFhYUPAUozWTWswD8ZFR3QNVjedZ451UhZmYwZvjtrCfm4x4m6mz5thXWfCbScfRAfoZd7YXYhJTVrHiQhVEJsM",
  "key19": "2c8PwfYTYhb9D4a1QvchtNbumZif8oKFuQ9NmpxmRoMbQy3Gxc4H9QXXVUiQ4Zco5o6A31HrsNiP9wzkupzFFoNv",
  "key20": "4VTAu2UibUAguaHztx6EGVhd82Zjer45wchg9FmvWhR5mQTU2oP7ohGpB2HYeDmE5xUEuw6s6hy4VQaHVEJGvTCa",
  "key21": "5fDoGCDpBFBHWBFNoAEQ5UqL7dLvgKXVo5X1ecbzdjpfcEWUNT99nFybNTfFULk3a6QEEDm31d5NTZiFDyo5LsmC",
  "key22": "2HwuJ56So99QgFJR9QVqdGum4e4xNhgqcdRcEb5ebFpwrv1626ecDKW5EhWWpmCx8CRJFkkK9VV3bco74u4eC4Lg",
  "key23": "3arbVCCp5pC4co7KnAki4kbpvbvnWfhp98YZUxxTUnAtXdSAFB75zg61cB5qfxukqSCFVQ9HqKC4ddDfcqq4qHi3",
  "key24": "4tQv4Fzwc4B6S45zad8HKcKUDPd4Xkjj7EVYUP7ceR7eqmjfuhmKy9aub9LK2BtuoJqqxWQUa35vBkrFzHbUq4Am",
  "key25": "4kwhuJr79jJkaBjuNUb282X8iFNfoATTuw4ZUetdMbC4CMDP1F9SZ2rQrAqcWSJFD7UgYHqXS87eWb1WvrvK78e1",
  "key26": "4BZPYTzWmUg5fa6F7ReG8tKxTrde6BvYkQosw7msbzajNgsL1pfQ3GX9rdQZS2YAHQjw2hiCFNt9giAj4FW2avG2",
  "key27": "3mKgC95i5FFtiDNK1q5pHfEpECqMB4ZHXNAi2crEYUMX3DVJYyvTVe9ivhok6vCKZgyEmt4mMFngxxuWKRgyteXn",
  "key28": "5R7CgFjR8EWx4gRk3xxhgkzGE4eWqcLihucXTewgZ2jeXqNHxbkt9xbmaBxgdtJgWRCHrJrzYnsQBjwJazvcqwfb",
  "key29": "4RWg4Rk86bePYUy37oSrbTVMS6sFmUx4E2R5JedfLFBgYkYm61ThFU54dvdcZWD98XkRbkiskixeGbxHBtkvNoHf",
  "key30": "22LWWPNckGrDDxF7rZiPJUP42zV9kMyUwrjaD2qaxekHchbxncYR6cehGpA5tLoDQ7LpiCvsY1zmCYxd7PTUbfDF",
  "key31": "4duf3Bubv1fov2HwLgmjENwLfnWJXii57GEJvj5MB7riEsKULMXBdPWQDEchwzfHTmJcgA6Notehp5MSwEVBhbyq",
  "key32": "3WtHrxoE9g6fxbgZBMeKLUv9qUiTHrGxkMxsXg1NQSDPn39BxA992owRjn49XJeju8U529ifSnRXufn57pRqqJPY",
  "key33": "2dy34X9HMjntRgp8cTuVogavvD1owqZCpj4GdS1hREhi3o4mt21y9LF775JzTTdM8dNZSqwxYg8ssYyot6EUwkxD",
  "key34": "3yNqKGtTvGbjKVykAQe7Md465nYWAhg4B1883HjgUF1uX4mv917LbB4RxKAytoDXTNMWSxa9K3mML9mRbXCFd4n9",
  "key35": "59oFd8UPNhE4Am3Xe4gd672CWwjgyoia1e9zyEcY5z4rPZmRtRWdhrydb2NJ5aN5WujDKh1t6nJX2PCStAijae83",
  "key36": "5eNnDr3TsatqszDNSzTbAT8LtvxrW83jSxZSFbczU4nVH9kvExuLvqvMiudTrpj3hsx5jJaftcS8ASAoBMrzuvAE",
  "key37": "3KA8wrN7ZerxhjKiFEWVTSnDscPcd3VAP34NwLWDPDow6HUKHU1v43dKXatkCZu297AQVEmkcSdFCYehoML7J16c",
  "key38": "4wn6b9ub7hAZXBDXBHoRGjZKwnxrBkLT8Jdghv7Wbj4PtU4cpiChaGkQuC9fUTZNSQRbA7X6E2JuYzSYxxZxnf6w"
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
