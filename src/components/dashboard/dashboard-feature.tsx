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
    "66YkvBtWdMuEJSPLAajYYPVLsn8nmw1FiRhuLfaQ894zbB8zLMfmSZkpkBeGqr9pRbxzxg1PJQpRGzGbjyBejhii"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2H6Zvd9W1zX7mgHQvvCA6t6W4wL8TwGd2h8uWco99cSe73nYrtryHxabvDzSkF3LwTAto2erx7egNLWMSqnSQ26",
  "key1": "B8ycNWQ6VivbgbR9Rggm4C29mh6hG9UDFNvkntcdr3YBPfoRV4Y5nWahtLnqwGtak4fpKp9EFTokdjU8QwQhaxZ",
  "key2": "3xcD6PypAc1J2N6APN92cp3ejxiupz9mmBp913oZUHgUo1t5S44CZQkZw4bdrZhvTRGQq28mTcTt3ubHgTgaMfrM",
  "key3": "2Lr5MVqMhfivTLqUYwdNk6BkyDRt9HuqskPKnUmTHEyqDRKWHbFpoDfXxXkBa5H2HCzs3GbdBsusms6wCb3AkA6P",
  "key4": "4HEiKDXJAXY5ErsuM6RGjgYkNupq6cnFdNJKKMyaENnkKuHtxhqyoQk3cDRyy6Te33GyB1DUwzAUXPGxSNyfbna2",
  "key5": "YBDmJ8ESdjGy2TbqNVQnfPfrBjaZ1gNPbFth6eR2wGkizAqxe719hw9jPE3ezi3dHVZabP11v6zW6MHTPiAntvo",
  "key6": "SgN8trPQhm2gUSYRjKuNYAVJRRX19hTTtuYSYs3QvpeKBGASA44YKRmr4a6FuxKogJzNZRusRqKZESEuHPDz9Rt",
  "key7": "2fANaRheAHxhtfc9FapWbJ73C9LHue7sG6hgzNh11n6kgbTaBspKxpH1tCGQzkG3AARB79CGpVXsU3XTG23Cb2Nd",
  "key8": "HVxy9DNsnrrJYBEtLUa5jHH7zQy2jVMwMKCXvT7AxsERmYwP9AdueAuJrp1TZTLwZku6FEkgE8TeJRspqtserA4",
  "key9": "2ZxcviHBh79UfUUQkPic2iP1kWR8Bkw1L14rRh3dAdHEdH2z9WBGUQzbo57xnGTeNDtVajvLFj5KHbMcFWhTf99r",
  "key10": "62RPqxhQfErrtuiiNn96mYdusqm6TuHWmJPZ69a3igdvEYWZKD934sM2Qoy5xE2cFvCWsqi8zjX3uHc553928UDK",
  "key11": "2cFTTNCsqZT5JgmkRPyA2Zar4fcK2eKivN52mkUh1UoBWig6n6dR4xmLtCCxgPHSBLZ4Fy2CNkTbMAtvZP4YmSCz",
  "key12": "5uMYv552zbECe8Vo2moUU8tvKsUyNanrc32iZzBE6Q8oHM14h5ChFvqdZdo4sULUMxA51d43GUSXqAjvbEP1PkME",
  "key13": "55yoTK9ZzWKKh8iQSkBpMGCGGVSCRN4uULqkxmZRCLp2QV2yZz5o14C3CUosXHgtYBKhLCVTQWt5meVZRehhrko4",
  "key14": "2P8mee746jqLTF7jPZFFB6HfexKJuDy5WPZwCQqoVFVM9c97FkdCneQ5UgD5Zhnmau1ktw6YCSaiPDVb3wiPwaZa",
  "key15": "37eAYJckg7kL7WqokUr5S4TiBCWQ2h2vuXCXnjv5DasgHbNpR79mY4KVFMk9UdZbn59rCjfXy2ciHuuXSttErYwR",
  "key16": "3rNXX2jKwktwU4Ydf2dmwwWPK9SAEPHgBs3vBF38jdSaaYK7UZEarCaHcb4zoieWP7XdWroJxku1s2nNbXhRm1U",
  "key17": "mF5q46KhcCgGjRcpGxcaoLK3mk8oYcijZNpj6DaNPSEqQ7Gxo3TQLtUW7uyR8UdAEr45TThWuNetuWjdF8NBtQr",
  "key18": "2d3b74rmE2aUNWbjTrmwKBX6Px4M6h2zCmdxpTYS3sZv7o9N4Mca45frzpczqmcTQMjkSmSfRTxtpVDgZwinis97",
  "key19": "Asoz7WZnUYxHsDdgvLwTNECvVipZUe72wkNqpYYCQsFnh1dfsDeHa2KHc3Xcp38FFCJrvL3gDQHdhCupK8XpymC",
  "key20": "3CxVZLQA9Xb3Pf8a9MmnU27kKYMq6CGLiK8mZntPJTaJXA14cwRkZ3sMRTrNgsm8JUMq6J921VRysdqpyi8wtg4F",
  "key21": "4AETsRq9nVph3FGmhhsS5y8J85iCjtrEMeswssmWQUX6AvuuyRAiGcd3NiiPeWjTYYdjSmG8iHtP1VLWq4D1Da6h",
  "key22": "2q2zEsa3aq6TQ3nzsxDoJz1UHGGJzpk2ZmqcZMJ3gcAdUG5zw9ZhgJrir3SNwj5QqeaTJRs5rb8aqJmohAzGC5i3",
  "key23": "2fUdeUr6tMhK3S9zkm2uTffFu7ZAXis5nM5CXfwv6Rhi3MC9drwQWbuPX7y32YH9iZ76p5CSNRSKGZh6aAsaVoJk",
  "key24": "3pfgTSngry2XRseF827m48i82kEVh9RYLjV1B7Hyudd8Hc7EavvpCUpa6c6EtwwZBNogYmn6f76JAiXpRdgEotqV",
  "key25": "f5dcCJDRk4x2tEuk53S8ABiRNhRKPyWMYgip3oras7xMPT4dAfgXMpTwGwh33wCBs8Ths35ohuBmUzax5nwbv5z",
  "key26": "5GVjKpDjRBS4RmaMygLdpWi2z2HiP3c5nTfmfew4qpSmGhaUNq5T5XXHLbjGcLcypEbuRJafCvQEECPiuoPrf1fH",
  "key27": "KjtQ92EWg2d8j75YpgHKkeX5M1nyLXLmBpi5xDbaSX6vpaEPSSYjjmvzY6XCcvstqjHasoxerkbN2rDGVn6z7WM",
  "key28": "yRHmddGbUmSK5jc8rW5EHLAeS45J9ymHQ7UmoYGkyoW3Tm1x6szUMuUgW8n8WHpULcE7j4Nfj57utAti1jjkHcA",
  "key29": "2oCFeNbNtqeasemZC7fjrpXTJewTivNk5Ho6G4MbxF7XSdQY7Bdjq6s45qhD7Nf6EmYy4Rdre6Lvp4tfD8ZmkSTL",
  "key30": "4tCmydMWHrTrEguPitwj3nTzncyq5RSYXpASMmuMPuuByhGwqy3ioVMEUZhPwFErjGeVTFwL25T7xBQX7uhcnsLn",
  "key31": "5P3RSKBA7jfwdHB2gLNZuTFuaP5L8GTmQ31PpXYJYUSTmNyMsm3uhYZaKqptuZ1NrC46g6Sg8qUadmMqkcnmuPkp",
  "key32": "5k5qjBzrqPwga4YkuihgmWaBoDeqGLdnBdscTc2W1sXW2jMDJzb5nP2xtzEoocyERSGWHMSauD6wbZ9vZ58Mvb82",
  "key33": "eq5yWpoTXXDSZsZAAgdhaMvW7s5WHnfM3kqmVn1C9mEwZ6oNs8aaoJBDva9F6FoKUgECYMjraSxRxLcUDwy7Nc1",
  "key34": "2C84RbwcxU6ZTKQc2CqeQfko7LxaQZHr8hNTFFXgUp6GDeXYskwbTLpo8dUQmWBNgUeig595rYAef6M4cfqXdL1P",
  "key35": "5BYZE4SWmikB6sWPciRYPkX3h3cZbppgvjA3DPKy2x1pDKdQXnRmVJeLNFChPuc54yzrzaEqB7iWrWNtbKTZRZmC",
  "key36": "3v6bd3T3xwRnftBEcaPpz9Eh2ZNWbnMFzWorA1nMt3KGrxSXy5pU4Srubq3C56Uc49Rc2PNogHescLXgiM7dzUcp",
  "key37": "3rBrK5kRri8iMmJck3d6VN4dhkkTnnS4P2dL1m6Cx4FksZXF1HVB6eCc56fxrcVem3wgNcRcCboLPaJQ6AddKhWL"
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
