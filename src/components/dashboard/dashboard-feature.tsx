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
    "5qexqc9pMAR3ucpWMG4Mk4HraKtwER531Y59BrnxhxFzFQd1fcJBHA51Luur6kvPeMR26zUKuBne4GveGnNAFPJn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25gRbz59xDmhNsw2mk9M2198PVkByzvGhwmTqpLcLyLQng3CPmAGK1hUXfqPFZLcWuFV8cpTmbDQsT6J1hyzfnfh",
  "key1": "4nmFPcen9hkR892zTxtrUJ42bnjFuah4TGN2fa57UQR3pPDL6nC5vXoKtdGyK4t8FBrtiW9Wx22u42kVwbncaJPK",
  "key2": "3U63PNTxbqg2PJPTgXtM3qPFAauujS2LYTAQtytXntdYXEp6GmaVqQtk6nZwYgsxmkPCg1ou1i5TTNfPowdBrTaJ",
  "key3": "5QM6o9xz7nLWWDPvaK8ngq2SsFELUiwxpC8h9AcFYYJxPKN7v8NVqQ3XbUPLN6n3gdyYKkwFEkPE9XRL7Dw2iuZm",
  "key4": "4j2QyheGF6RfKguELbne42k3a7C6y7bBBozGqReiWFZsDScFHxSp4q524wKXWuqx5iKaRACHahCgonkfXwXQsVwY",
  "key5": "344mydhz91zjP9CUVJC83h7KTW5owu6aPcMtEZW72FUYL27HQB7RAuFgMsGXY4djWT2yHGP1qMUapJkYMQqMZrJw",
  "key6": "2r2skwzU8Z7P8u3EbfnH9dKD5Byh9mRNi4NhhzHVVd1DUCqCfAYHXKtvuR7TjwjKTPqvb6gmyzvQq6J81ukJLBKb",
  "key7": "DCtH92KTuMTuq1sW5t9W4E8s5VCocj9iAJqTKhLo9NBHbVoFxzMS332zS3WqwAYc4bPQX4jSfpPKzuuUWAB3rjK",
  "key8": "41GkuemZeK81o6JBV5Wp2xXYiMKckgX4cxhgh7MSPw6MGaU7U67YrRHa3m5tjxzpW7QaGaSRPXXYz8uCNNmpQHnq",
  "key9": "3ZereAmNpCXJiXgxvDVQm6UNFm4ptHmnHzeWq1UA68iMmUJMrq1uuF2nHWn6XgQ7wdHoA3qdinJrVdxjrBXa6iTE",
  "key10": "55kVVNwdb8QiSUfsQeTUSj18CjiY4chBQPeTQErpqpgqWrT6r7MQtV6MhUEq2cR5PvfzVPUhcgiJwFVGZicL2Hjt",
  "key11": "RHHFtUonC4SCYkC1XCYPVr2qDWbzbXstEQMVgGHqwT8iTyepB9q58V8nvGpYxx1FjxEveAsPex29R8enYFW9LV2",
  "key12": "34G6eWcxevEES82gaydWfMvuJARpur8n5XT1c9kn8iRQgviNZ55ZmKpCFKbTpJzykDQ5xuptTMHKD6bTbsgQFmnf",
  "key13": "5UkZiMDUZ5dHRsWLUqsfxaEr9gLzDHdSawRDJFEquNHBGxY3gEVrEwMfPfMq6smLkXvMGrxRCrYNstvPcQhAfBzk",
  "key14": "5iCWiiCRTiHBCBW24RR9FGmuKigGREzKMwxRqXNHDyppm2uhAJxcFZgLMcbsh2sfZUvSSoU81z9xeM1NE37BHnua",
  "key15": "5XQGMzhmP3cmB9UMrJCsr2hS7QziJL9er9fPYWUY2tLRTZFTjqb41EmMp6FAXy6xZnNGtkntfNnr6TdKsYGjefBY",
  "key16": "4wBUgeZxYNp6SpmmhqNbaGu5L51v8yRffrUx3kY4TYhCbZQjjV5HuBy3fbL6xRtdCW3HdpMN6LtpTtpt83BpChs4",
  "key17": "4mBMhfxprk5QtnJDCVzrxofhCZMAyv8iPxuwrMKmUgDegbavVKeFMUJGW7xfupPqjvCG1LghrrzZ4b6rLBUdhp8V",
  "key18": "3BDt8azY1VT1kysRC4JWVRt93acHh8AkjNPyH5dENgPuNQNcte43fVtoJVpQXayyBsejwGTLMq5XFrg5F6bLEv5C",
  "key19": "5fr76F6jVieXbXxk9hPPCFCq2T6wtbHBov2LKgWMXN9JGxXa8rbrtmJVMP1gKXgefRqQmwHTKWH6R12mxrKpzfHH",
  "key20": "4hgRPhEKr2JX6yHxmwhXP8e8Cecd67xdV3kzFPJpLGVbFXm5qsWyZta2tQzHyiAkHg1H61WDYQjsbcnQst4bXwA1",
  "key21": "3SGX3vZKnjKNMdQPeJuUV8BumdpSPf3NemrgGm9WrSu7DGaSbA1zYemuMuAciNuCv74eHKQUPYSNviEq4FH5sShU",
  "key22": "3CnX7xJsCYkHotCGWPF3KPzWNb4d238QTy23YhkW4yRpgx9SDtEPdpnqyvJ12dFRkneSE7DRosa1KdbMewFVgAeU",
  "key23": "5CyPQXrkhZtYJdz4WJE6JwTUyT7w15v4qKZAGJKeMEBwhR7gJ8tHpB9WKrJhvj3LK4iYgQHxunYE2jbCX5mRSH7W",
  "key24": "4jKDqjmgJ976B6pmRu3rBAJu4dTHBF5JjCExkLxYvzF5wpAC2PrnL7dC1ifJ8X9GkNUiQ3A2bZ3NtLnJauZj8j96",
  "key25": "3bjfBWZRZaYnkNTgtUL8tWyMgPp9TsifdhU8LsU2AmThd91DkbVNXY2jjH1GcaMGthrZwxwixfQ4vZ4VQc3ZEkoP",
  "key26": "1wJxCNDQMh4KACfXdQ5HJzn42zifADyCRohCm7AV1gbimgP89hjuMrnmj872sY5F5T1xu9VSMXfbRLgcpjM5dMa",
  "key27": "4RE29iNPvGXX2gyzPasU4iQwnJS2UGhzwEs1h5q9icPFCektV1gt88hhj6uHeuYkT4kNNH7MFnKakX2EupowupEY",
  "key28": "24ro6cpE4jHrSuc4rgrTcNGJGkV3HwZTKQY9CMgpF74buvESH8dH7Y2r5pNvAxwyV4PW5xRcjua4HqtKHijPbuNu",
  "key29": "3poiRE4XGUYrrQuc7PZFdYKHxnT4zge9nkejxE8DRz1kv2LUWaPgVXdJ6cQK7WqrSnUZuNCuNg36ewGQuDVCEah2",
  "key30": "5513QLWG8hudGJitGSudApFHsfNZmZ8tkvo2rcuEgAvS8wFympxebf2zUZTk8EfD5opY3MbMtDS7xPuYoEZc8mV1",
  "key31": "2bL1XZv6joUtZ8j28tbsTZD3VndytLeu82yK4G9pXYJ2bFjcc26VAJ32KJYZY1T71Q5cskSq6rNvKgufjeiVrrbH",
  "key32": "5o1CK7s43Z77D9fF1ca6K6275uAr1a84H4zP4e9zaUGahP9t7MNVNgeNU5gLrbH4rwvLobZs8ckiGT81E5NQ38HS",
  "key33": "4XuqxPsM3tuCgcTjDHmh9T1wVHJHf3ndpBM7sDBgWKxjgXsYpvWNGDwLu9jinhB3EwbDpx7bAi81ysoTVi9W8WBA",
  "key34": "39cpWuJbMXy7wBTeMMnva7E8KcUDaiT8LP2P3ofxzFHjuCNVXfqSeeFTmQHDetmWdkqiCh2CfLjf65r7Y1rS9KiC",
  "key35": "porQEphpc746RbLop8wnRcKhJHP9PPWZxaU3iPz9Gcv2NcoFdvND23hhF183k7qbiD1V6McVThG7dBtwyQ5HjY5",
  "key36": "5UHFywKFDTx8SFFn4k99TREHyToB4QAFkkBHeMonDbffXEvLT8uXxMX7X5LWDgmWE6dviyRwhuyqbuE6d8P7mrxB",
  "key37": "2xWNdTDBhSoKmsPhHfkN5UYkwvNEEX4Ryk2WRQb4kHDmbw7Bt8HEMzRCQHfwteg6hHeVqyJxaBXcXwReiaSTEpAq",
  "key38": "5SWqwRzu8Cs33wGAkfDC1JbMmqczxik7aLtvxxStzsVjgM4m5W1WTgrLbR9LiuethA1SH8RjK3yuoGR2eLPidEkQ",
  "key39": "2BwkuSYb5RfLaN6YWSgN1cyRGrdLBcJKrtMXNXRBq1GwpegUsU1SH3Nkq3hyE4n8PM1U67eJ9yNNyP6ppejVuLiV",
  "key40": "4ShBt4FqEzYXxxi6a9Ujk2yDjpPoapGnC4L86AZU2VoK4DuFXhgLPBdkjBs9kC1xyWVfCi1yTFHAszaHBqLfAKNX",
  "key41": "2jq7qh3sWRc3uRodJXeZg6PuKeoFn6wLfH4kfSczp1hU3tQfGdrSmk7YGkzCinVsT9w1tqnnDmMseiZHaVtnnfDZ",
  "key42": "evbacGxEY5cza23AytgW1gSNhsRnCxydCzrAeYtQBTcjjz3UD7yvk4AM78Xdncjebmri1Dah1ivYtCh7EVi4DFi",
  "key43": "pVBBicXGwp5dbYjhtuWNfHUBDb8fJ4335V9iZwPhQBJd7JDYz6jjBu7mkJs4LV6ntYQEb9PYMsxLwtdererFgiD"
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
