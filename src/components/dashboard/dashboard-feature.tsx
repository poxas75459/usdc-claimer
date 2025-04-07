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
    "Q9daRdxts7zwrk832TTmpAa9VN3EFmoeSZi913vDVns3CqmvhFrXpnxhbEtdVCFcimmurTkfDoGSc6PHo21PSGs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uyHLmeUK2BwYxodeKGfoqEXh6A1j7F7Eo5b6wbqkou1akBcEeKuUsEuanMCBmjcxMjjAG648Zp2JYq8W7C6S98g",
  "key1": "4riis6wgosV9WAYN98skaumVykEUvAp5F9AKFRa6Hodtcd6CcxY1Dcuyt8K63wvepkkuypFsgVg3UJkANL4NYdxT",
  "key2": "2DwS2EEeEnPnFw1LYJGHofQeSoZHbmKCsxA8ueoX1ywwiTZoRxTabFdWt47Zpw6fJtDhHAXr8Utg8iD3V5KgePgk",
  "key3": "2W26gRBcRHtXo7ckXFDrndkryrTER4jr69cYR3fNoRi5z7ZK5wac2kBYSuwGuQ45BSFxo5bqsxHAybR2FpuhK7Hs",
  "key4": "5ZCDeBq2n75qHhHGPqzNFGQm1QrsiHxxMpcMa1gpMb5ZXpmx66WFGM2JbWpmTrSbdYk9SckVVSL9EBhmzmUp44kB",
  "key5": "3TPJdFHmTVz4fHeGJ1nZiA5AS3vBXg19yfFZS9b1ZmrivNfBCfHiK4A6RL4rd5SwhKa8hEedwwuKB47oBwXnTCiT",
  "key6": "2mxuUqfbVvty6rFZ6KR3bU6X9mZyGLTCm2WqZF8oeBensGP6JoB7vaTfWzPwNg6pV6mQemNsduXLo6HC3xNhdmkt",
  "key7": "5dSEenwQbrHKwtLGDoJZG8vyfPfoCTEYueH6THXgWfefHUr1zKXqNA53bsYkEkiN4uYE7Nh5xhRqNRPtSLp6933f",
  "key8": "5K3G961X3HjdK7D7TYECurWcuxeAYz6fvUbjmR6VVher9GhXsAqBbyY5re29Ehdf1nrBqXYiTTFj5xwwKVe1xtxF",
  "key9": "32YSFJ3KSqBWWXsjES3FjEyGR5Cigr4aaUaVpbJDE6s8pqpQ5cBTrJMbRqjaL7ZZuATdUXuSdALP6CSjyPbCsGVU",
  "key10": "48i5Mf4chLRkujmfVMQtpfJ2cMPuDB5khGW4cQyLcA8irqHK2gxYRC6LhX4mWBszbbrV34CqLXV4mKw7jFFb8Zxs",
  "key11": "3JKfRay43qxPc8TjusFReb56ntudkH8FFPCScDx4Yw2rGCffgVQtkS9nv3iXwgEM7JSbb29Ct8mvKmsT8TPfm1hu",
  "key12": "31Kgjp6LLRshH78EsHoMu6SQP7DBQ9j2hukXPVPAkXhTGhH1wUKkDBnKArAcMXi4WxzSLmcoicBcJYr9xVAiGkYa",
  "key13": "62AdGC2JWne1tD6CSAoLjrfXchN684KAApUdFJzcs7jyFoGdqY8ERCddVLnXZWmKGj1bPC1r3KN4LsDDN1DbWkuM",
  "key14": "4LuPxgY2FZ6dgbNx5yA2jPPudzdQ1u1rP4qkDXc2JVSdHS9V1zga4H1Bb8PueZyRqsxzzGRajjrsiKLb1EEW37R3",
  "key15": "4XZMKK4oXBPpf8s2VRij61yy7wRm687JmkxsvQzx9YHr4uMBtesutzsd2qjvQAWuN9XrzUUDCa4snP5bhA4iD1rw",
  "key16": "5gnTYfA5r18SgUEi4zqDAFUq2ThmJUwgm5MXmqMYnLCq48HwHDkL7ybw52k5pCt2Nqvj5L1e3XynsMgpya6h4doy",
  "key17": "4zdGQbVjNVChAGRLWvm5LFSAh7ALFW1CKzM1pmeWkhezHQgDkdmNkeYnMLcTVWQcpLSuRds63hnzZzCCdZWNUX6D",
  "key18": "4Jpez2ZiX61M5YKtD2xBrbu4cC39Fg4Qh6LWAjD6TUMbUMDHJxkadxwHtHjVq1GJgZyRpWfVQGVMKjxXv2DBSeT8",
  "key19": "4XFPeP646VE7Q3ZP58VoBG24JPwErcPky7duDUBaiFqpoi2LkSbVA8Fku5htvmrZYQs4tk1Dfk3wUhUSyUzK5cNj",
  "key20": "3G4g65JnooyrLLSgaKdYzbmgSqocS8ZV9MEn21vc1SrCAT2cZ17X5Fc4yRYHRtq9UqqcDbPesQK4CaZ9aNK2PHKy",
  "key21": "2eDejbU3KPLYdnMfNh7Pf2frQBv7z1eyNGbTKxGj8Qmc8mc8SbkBepd5PnnaGg4vEKCBPPcA6AMo7UfRG1qBhtgz",
  "key22": "2jQ16xvFzKKMKTaViyWh2yKyYfezZVVpcZvqEPemuP9b4RqXSNfSk8oyZouBNrrrVRFdwXGJq92gQuP2Frae8nBc",
  "key23": "63sguUsU8pr6kgBY8ga7PeFy13LLoBGi25vgw5EQ24XV8E68XNFK9t8NGCkKf4br9XsRkGUpPEBnMHraGdcrWc88",
  "key24": "3rM9AZAw3rELjoDrFiKMceJ7SQeJsvoD4i7DUhYNCyhNVbbTRX6vptZKQWQPGA33zeLq8ZPGTYFNrRR8MtqbapYi",
  "key25": "52muVLWJfehFN6CYyuHSHGG3yXNGTmE8KjcrpJvL5UDzdB7GqNmhmv6W7Fx929eJBFRcYigdCpwHGfVLonneNyX4",
  "key26": "5L1jEUZXvskUeeZaW3PJcqwZ2A8FW32qJGHrMvj4dNakZiD7f8notm9vTMTcZAM1VuHssAYek6sa9qz5zPrhLYGk",
  "key27": "5HMybF5CfMtwPwL3RJJaXh1dvGU6fmyf6Dj5DQJj5bAeq5tudVcX7S7HArxJpt9BGK9oXefhEkEmJFST4sedRRjn",
  "key28": "3UF6J7AEL4HS6RKGHgXQ9yxGBVT5DC6Zar48C7xXCRkroukG9Qp5QsocFjJBgH1VbE3bXwnLoguxVdUyxLNotnmg",
  "key29": "3gbH7kgS51RddzKzswf8QtwyWfKFwpfUCuid7exGr1V4fb8zLSnKBQihcjeVbEi8Z8R18wMumrtmctrGC1cxAL4z",
  "key30": "xZsVc2zka6XdeJzZqTbxJ8CHykxgNh9MKyDuF892pmsXP4TonG1525o9QXRH3C77dEEwpLUxR5moV86iq4VtJc1",
  "key31": "29h2coMX6nyLz4SkP7wRd6s5iZr1HTSic1SKd2aqp6eB452ZHPAqXZmqRPKGjkrA8QhZUQwA7BpHwQnNNZyXsYMk",
  "key32": "4wgdg5ezH9Bb6znABPve9634cvgZfQn4ZViJ38DAt44vguJQFJhFZvLhHfMwfAtdCikaWuXXnzxFkmgWB5t3X7WJ",
  "key33": "3eDnk61j7HTR6R1drFjwDywMVUqPwhynXonGB32SxzBhXt7kp65siBta1eYYLeDSiFD4qiBqjShVWN63qr4Yf7MX",
  "key34": "2nFPD9Zmj5MNpTGwrYWJmSRE9Vy9SUPWm76tRxUQHs1vuxeDXG1xVSGNdAP5qRww6Yfq5bHjFV1n8KmMdsZjxAaQ",
  "key35": "ijqh53V7t21oyBGSo1Z5Lvy2FuTDz2XPVG79HDpXDpQajhSu5FCeNqVhHqc1D8xrmh8qQ61kxqAUfESMwXXGkob",
  "key36": "4rEDnon8yKxdemniUndK8DMA8th8tu3VunUN83Py2W35s64L4HjVupGRvbjXq6HPpB2hLjt3XVPny7bnPzc8vr79",
  "key37": "49GVTjLKwHg5PHKNyM8FxhjPqq1yeUHdX67rSjzhm7KdqT51riz1st9FmwD4uei5iEswdgVRPPKQA8hnvKuUqyJm",
  "key38": "za1vmjfaFGvfja3NYJ8hFCN1AFMs3nGbauxgyL1jULANxMHFNEZdKCp7zL3jYnbu6Twygh3D6vRoanVckDCDFYK"
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
