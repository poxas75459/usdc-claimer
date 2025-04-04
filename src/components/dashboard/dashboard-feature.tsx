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
    "3tpGHgzqwMUze4noqHAACDZyg6ScR25NBZUpT9yBfBt5uvXFq1efsfGk1f3nfV3syTeviyX94wLnu9MsBbUryofT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22GBoS1YqU5fj4MUo3165UvsXfBrceHJqhqBr3E95NWqsiej3kddNyjvuVFm6y8Nt6XxBFFz5ihAXTpRvg4ESGpm",
  "key1": "2AadjAt6UxVCgSLkVPJbM33d45faYGHp463svN75qvk3GE7zjetggMJsbe9sq5Yf82ogcTaki3nqo4Smimq18PQe",
  "key2": "3cUHzvNKcktufQ1vHKyttigySFov1Aj8RABUewb6BXNZnhNiWxpZFUzoiayfJvmyF6itN78RNu8nrNKFXP5nYzLn",
  "key3": "2yF9KxAkuNQSdbnAfz65xuBj3btaPvavDZufNkSomS53VuQ8WLRNq3ryLysJZK2MAdmfjTb2UubgT47GajFAcHTc",
  "key4": "4j81nk55N2jHjGeLeB7XcTk67RZwwte6TDM1ozDCj3ydHHn92XTKKxSR16JB83zV5LUtTNgcE3WyAedyQSWAvX1b",
  "key5": "2SJLTv2zeB8edPa4aeX2nnbCHqpXimpogBJ8E62FHd5pxk4nH7F6ouZDUwjmbm3zqm5CzWDqHwL7DBNMx1HYubts",
  "key6": "iGwNPKtXyX8UBqsAzkNXu57CcZKrd969Bh3upteZi3vkqLXkhFvkYQq7WAromKCncuj8Utx2t3a4PC5MLqxxfh4",
  "key7": "5U5LeCa516eLURAUVv3QKnNhhri53YZBNR8AtzxNwCb9gKp9EvVkC1tsFahF546HiauYuTrhiPPmFDvxEjS6QnxZ",
  "key8": "3RAkKpdfGzaoZP4yAy9SKJ3iZGvYMtrTkJ6ctfNmVjtBocJA1m9QjL2D4yQtX8GC8LGGiAc157acCduAQ5mZfWCB",
  "key9": "5fJUbutiL2fLL1Nj2Ek7P3VVECMoazdk79UUKAf1YGNRNvhCe4BdZg7csHJeKVLp2U8AcVAkvCEJvZ6aRJdaEn5W",
  "key10": "4HUCaPucQ522Bc9qxYpJpm7pdYmDn85A5hjGRnm7hm2M5c3ufrm5yuYyeL2SKNSAmdrNhLRQRMFcQpRm8tsHCT6o",
  "key11": "39LFTVpw7JeMB8XnMCigdbX91qAM74Joyh4cXWqEjrYcqsjyfYUfGWumxymYSRBu5XpfEDG8JvZKhJQkxsapRype",
  "key12": "anRoHgoa5HEAcaGpQJZ8prtYsg1bnpRiikU9uASeMPJTDrAUC8arZB3KFV3a9xhTFBCbMNmvHnxtByzog4ocsEW",
  "key13": "2cHHUdKFX8971QydagHp4hyEM5eY7y88SLYLWeEv7x39ajgWW8M6xpt8hcqDVwMSHMV4r6o2wAkLoX6YCmeifYBW",
  "key14": "2LuApXaF3m5Ck1nKuTRRR2z1VSyabns9q2PtrhgVHNA9bWnd68H6EE52z2chdPmMafzks4Ly5Xp6yU1YJtZLGAy6",
  "key15": "4spBwFwvqwsKRg1MZbiFhyoiqnAY3zKZVW1of6LhqkW9ADo8DNSepQrM1GJsBS3QtuAYQbVtnU3CD7eTfn923jL3",
  "key16": "wyhqV7RYUJZceZniJKMBr4ibvkVerYQ1qxNTRDs5mGNyqPAoGAQQ6gRvSTcWM1rukwguCPjAz885CWjkGsrQuRA",
  "key17": "3RzHE8vcTCpwdSfMeBFwjBorQUCLpMxFxm4axUdfk4xsjXsARNGeQHmJujivDbFsJABSuZJ3UsDQZ8JdoieN8gr2",
  "key18": "3Qzubt3wBgLFHzSkUgaqrcrt7jasFvVZFiV8XHedFRj3Avzvff9yX4Y6jHwf55EkNnQ4jkQEaNL35DYPYjLpbQCb",
  "key19": "5gohogQBso674n1QmRYBWvynjCeKUY4vsmwzL7dKqa8RL5XaUhgiy89HhUrzAc1gm4wnK1zgfDgRiRGu6feDksRc",
  "key20": "57PvxEgcXSAhfgewmFBjt75HwmwBtySdnCmsFz5DQCgcPc3Wrh46KFxmUYTm6P5DbSiw4KTxMQWMkLidW4ZddAPc",
  "key21": "5ftB36eivA8LWXiXC8sUUn42HRsXHE1sRacwTxJNfEzKxqxg73sq9KBvVpXD2DFq3StQ3TYv1uptM1nCb2jwnRXk",
  "key22": "4hbjmzPLAXprvLusJS9mFd9yvrfHGBu6KnGk7587R5qodwrkHXhzW8s2jNccFfqXUSuAzsg7gZTc4idbXx3QnFch",
  "key23": "QuXLkeK9BqBxBLNyxUtLSUdhFXpA9eGNnCgpyLBFdEG6V1aCr7wF9p6JC5wu2yx13rYNxCeQoLuX1oMgy79gxG3",
  "key24": "3JHCC5x3GUSLFA4Y7fyupYtCAT2DJwNrPDsMkHtXP5nUwD8jBSVAdr5LnuJhoED3u9kHPBsvjAh9UiMLDva4tPsn",
  "key25": "qKGFhsM9gQKJ47Zm9ew4y22PL39fcsmLrJzDnWEeiQEkjMaeavDUdEaQM5uW287XLAvnvJNTP4oPc5mniaacAGy",
  "key26": "38ryiSuEdKzTUuxNszT3FLR8FFwjzWh1b1WPBY5Ukuuyuf3muNeDTiFLkVAT6kSPKwPtgYbdm5hhDre1mJRAmf68",
  "key27": "3D12YhmKAuXVPfCwzaHX2uCbKgh6v5nXGAzKQNvPJwUCzvU6aV54q4MqDEfxNDPHPwFMwdV77imyNxDoNgxPsami",
  "key28": "5BiYWNbyNywiBxtnmyAzaAHHGPmTeHfgoRq6w9KB1LbVVF7FrG3T5TCURA6PnKyKLj6BhVhQ1g944a28kboQPMad",
  "key29": "2MYkVevWWnPMJoGxpUMn7DduTRi6G8YPzew6eefv8ktgXb6yVVicGRDZHyz8uhdK45WUCv3mbX7XN1Y7apGGjMMq",
  "key30": "3Ue9Z1sKxtGhfqiJkVbLJ4voQafyvU5Trh3RAJ5D4Su69pDtUg1hj6R6CxDZbX8sMh7MsYhdehDsNHEkkrhp5AvC",
  "key31": "2a5eaiUYwheHp2ATyFRCevVLZEPqYKPbf3KS91pfKkbjg7NP46LAqZxmUR1QbSWNW9PPM5Qf7iuWoDH7gAR9LwjJ",
  "key32": "5ETAxTB53p7LWHnneGEQMi5ZSYwFbQkLhCeHL2UK5UfQVQ1VHGQQybasQ1k52NvJ25nYyMt5hK9Rk1iFvhtkr35j",
  "key33": "3BGRR77MoMr3QkS53gyKkgiJxyZJcWWW88WCEP7peR6GwRawY3nE6o4SrE4qBAZvYvv2EwXVboVnL7rcnaosZMXY",
  "key34": "4wChuW6UorWy3hdxRsfhDhS65coi8bRJkZGedNbJHYyFrxB8zf3ppUf5PRZvRLTKKj6aJ2XGsW85o9kZdwJ6kKfy",
  "key35": "2MUBZh8WvdoqDkMjTEGm4w8MFtJw82xB1m9tKUs8eW3p3gVTw9hu6kVmKZgN223LPzjGijxHUNQry9YU264jJQZa",
  "key36": "3SXUNhMFNrcNmnjqf8atskYBbA56sRqPcreTXwzxC6PkMB62U31zwXt38gCBx8FubJbXWYrUUSWbQ5WzTEztMtfV",
  "key37": "4CXSd1eV8XJybmZcPKf5cF37zwP1HaM6PoKpxf8Pb1DmYpZWUok8cVcGgifGvRsEnmXpokfGbGj1cht2F1irE9dX",
  "key38": "NT7XxyYpNvhrUNVUPZk2ZD7HVijLm4KN4nv4VDSiqvJFWiTQvui4aMPr9XWpBK7FDDzRoomx742eFRtfSZARmzE",
  "key39": "26oAZBxu3gHekmuSh8h53KteHLM4GaE45Uk8nbbuPAK4DvgaNkHnykjLxq6mjtGR6F7tEBdySie4NKJtas8zUxPn"
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
