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
    "43oVMRoPwmTgyWi9kNC3C8ySUBxGt4s1KNtu3HXmfpcBC986BMtpsciEmmPRRtg5YzsQZMig4kqZjBBytT3CMCoo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oxE6R1BQuFcDnAwmKCRzVnrnYaHQsVQ4hqPYy6oKQEeFqheto4wUpBGVmnz7hecaYotA9911CoU5mzSpVmrW6gV",
  "key1": "4Yc3dLujFKUBp8jBJr4m2kaajKr41xmKLvgtYtwManjBtCmJgfjT2uedJZTeYN8a7JFJABpeUUCxRnVbqyNR9CcY",
  "key2": "4U8Z5ZZcdqRNqkprTsH9VdLE43JdW9JoinWxgBbQoqAhAxt3UXqaCEEsKi12SwCSkPh6or2boLgNA7hHozWq1c1t",
  "key3": "4naBM6Vkzd6oWVHnnSqxg66A1AKfApw1t9p93BcZGxYYZTtVBJaKtXAw9Dx5Q3YFUx5MUs6AY7pvKCtvaxfZskmd",
  "key4": "4q3mQyFcFUATdw1bx9Qv7bTbKPMpb7qUGBKtVsNXtmmV5uywWRBUj7mcdMLRvWB3k87gZqtZmggMMzigFgdEfmFd",
  "key5": "5XuVqqHegJtwioE9g5T5PetntjpuiGx2JsSCED31AHZKjFHsGYVHKtRHvYY8aTgyenz73PVjUqYAew5VgedGqQfF",
  "key6": "f7P3tjz8Xkhf9mhS6kEXkrKCAcLZ2CAHtDYEao3E63HVgFED1TABD3y3z9kPHeVq2ZBhbmhrB5RhRwdB4RKMaLF",
  "key7": "3R6C6Dciyu1BMahsR7YGnm42YNGCbm8j8iT9YFoa54vCwZRR8bzEykzJKWkR7izEtRMauvLtpQuipbm5rpmYmamB",
  "key8": "4QffNvpFA3SP7e14sLioBb3mgTSVQhnuRn2S4dPYYxist9q8Myn3GaenCgPaLtWjkBaY42811tSzu5xSbFGgq2H8",
  "key9": "33MXTbrYSGesbP9Bb5UDCa6StfAG5rWBZ1vFq9wsovHBhGsijH3NMnScqpKRyd4FkJRQ6as9g6M816xy2ryv9p3M",
  "key10": "5mBrmBYaw1hr9LUBpCGEyVqfuCB1UKNUDP7sEQHymRBhCwSJYQ5eTJKqghrNL6HeWVm5AVRqAJVV1gCyHF89hXUQ",
  "key11": "4wHWgSC7X4YxN1AqBeqWVVPZ9Ao52Brs133AiDxPQivSN194gfiPSYvELFCfy3ojvE1nJNSPvAwsWcH7fnNmePjD",
  "key12": "2C4moQHFmGBMfGh1T1Zjvo6P5TfkWCHPKKxW4DjwJxvvfDHgCr71RP7Q2aejKUsJdZqouSuW8w51WWsthih6FBoJ",
  "key13": "3KjGZxi7a3YNC3QyE4K1Ekysqpdc9egdTcPHV1mX5KBxXTL1k6bGmreBQVQfcS6ts35P11q5TijbQbDDPkWjevbV",
  "key14": "mL6QPJsv6Diz1hf5gCuWvsH2Ex5xmychkgqAcpvfTAwHrkwLaL4ZXc98ubJDaRfDtgd66uA7R4xgDM1d1UgQhfN",
  "key15": "2TRa12VP8z98UuPeF9KrwgdtUUdhZY6xRgfS3s7PkLkCbLSE3JV5vWCMJBvfa2xw7QJQQwewPBMnm4uNrZ8h2jBd",
  "key16": "3bVWZ7QQJ2T9m1hDe5FVv4v5Mo9cV2CCzToQg6dDL1h1p8Xtsy94QACBTBq2RYQvm5BKyvHD5QY2Q7TZiCJHHzed",
  "key17": "3pP6GuHt7JrqyJz8kWVAn8j8YMoCrZCr9qEHhVtd2j5e9vebDGN1mW8R6n9mEruMK1SXPuBSK58tRDokFjovRcfw",
  "key18": "5iRV2JKFEkHNHK29ykPQNnnotimJGjST1hfzPBs4ffSQcEhmrhVbSSn2MrUL7UUJvd12g1PJcLyhN94fMe48X7eu",
  "key19": "qQHJY3f7opHotivBTRWTcSzHE2fbgpUiGKAtP54aQT4ZyXJQ96uzapFxnUudTKKg9jrN3XguAsHcHuQ6kTVrokF",
  "key20": "2H8JCzSgBP7PpvodY3Bfq4VVzb7Sq4xmaZgwHZTHy2t38NwjkzbwuKSJCJA1w8iDPfEcFVUFWo4Pe57xXebGn5N3",
  "key21": "382iMJNkH34Q9ZEQhPyHC1BkjZPgRooGTxdSLXn268D4L86E5Vdp6MYahgmVEpa3mjJ4DW4t1ACkgkTbRaB6Z7Mv",
  "key22": "57HVgymJMzvfT8pFu3bW1gRecMKcStXjQPVcAHaZB5rrhtBBcuXvSQ1NqQdXarkRDRqTD4sHHL9EYwW8aDFig2Cm",
  "key23": "uLeZjKdLKeBT353TesjdyGxWaPBVSeb1wwUSq7sNNmFjZ5SiK62hLXnpe9ammqQhKFJAtZv91LSpP8jyz2f5u4c",
  "key24": "4nUue6Cj5JXoCxteikvrufqSnW1oRpzrYRWSDCLnvfo7GkStYzr27eYSokxibyJBkiQ9yM8McQDZotEtWYoY3XXq",
  "key25": "2c9UZNMA2oYCb695HXKnmC1G1BnDV1wXuDnWk5E7WzAmiWYc2HE7N6AEXMoJsPmk98qdDGXTZGstVZyLA9cXSQh5",
  "key26": "3viSZtbsXGb61ZFuT9WrN21t1B3vwBc6kxdZTtvH2pwqYS9hAVLVYdogmMwDmTnJMgvdnLeJApTmquE3AbVxBfqi",
  "key27": "4M8YK3wCb9KD8ttcbcVjL5PKPR4s7JVxiJrVMBFizvurqQXdGnoXnSHFxVt74XRs2Q2nDysM7YjZXe9x2ftagWcY",
  "key28": "3eGT5Wy3yse9k7R5KodrKc7gjLMFQS1r381EE6EGF5aonV9Y8edCder1kPvWbWxa5xVToJtYu2XZRiMdogg8VTtH",
  "key29": "39Ea9s7tXYkFyHsxwzfeikgYnLETH1cVcfWkwGX8j31mgHkJVh8sqBBa1s1ShWKLiuHrtLedxi3kQiceSPn3h4HD",
  "key30": "4Y6tjkgFBApT18mVh5ezPns8e25ra6RcjYYEV9Vypjwrqn6SsBpvqmneWqae6CLw2X1it1bt6RGGXvsfagDt87h7",
  "key31": "3ueTKPBXzYkj8dwFiNxz1ZnMRFus1S8MS9u9Yyxbwdsk1GoA5o1zsenyZoGawKJQrnPpRhzJyQqDep4mTDB1oVxK",
  "key32": "TT7XBi3kxdXaNzMP8LMqQYgc4BSUE9WJdUNqMVaRLAwAAs1LrNveUsgVghYMLgq3EogUNj2LG4cBgBzdLNd4wPg",
  "key33": "5CzQoHgvUEWXqMNisU2SyLtXcN8wQS1VXUHah8XDAHcZdZGE3QNFxXXUrKXYjxdbEb84YDz75AgcW1S1Bmw9L8mw",
  "key34": "5kPc15kC7zTkctB5L4d6TeVsSzcnxcyRYUH9YLErpu6HJT2R26j3BFNrXyDMzbigTCpVwzH3oEqNFFJj8fG1xxcB",
  "key35": "2kyJ69NjEGkY8ur44Shit7vi9DpcYzrNTbeJj4aFHS229nJg1SvZVhvi7sscXbmdHNDuv5i7Lh5NRiaiv67YvXW5",
  "key36": "3XzkRixCppKsj6jAJwhjc4ZtyPH2vXS4H7vzmWGD2bG6Y8kX6rP5vzSWDuF5G5fXmKcy6jesi31raesBz3UvQYQr",
  "key37": "43GPfH6cfxbs6cBovf1eNhFoh8ZU4svbfhuiG8Y4y8f6kkQ2SPBWkcTFyMRXs567oZ93ffP6a1SmZaBccmMQj8fm",
  "key38": "4ioqRNQN8k2uvua4Xr4e2aqUCrYxpuTdj446oTPueVRh1AinfuaBudATjNzx1pZyVPW1FXq1kFfbq4nm7nawzLVi",
  "key39": "4C4ic47DhqkDxuDP1SaY3kLwP2SVm8oLwoEbxUBC2CNSzeDnEUbErtYDAFfBTjFod1rBzWQibo6E5nZuMobrA2d4",
  "key40": "2Cm7P9pgio14xhw2QmejTnxrCm9yLWVad2v1VPz2cT72tHUxP4Xd1F5b2K6hWX9hXVDV6585fSp73qPFcmwbjMRh",
  "key41": "4nQMa7qSqSRcQPRsp7hbUr8wp44fiPBaoGxKrJD1R8u3FwZH5MXbH69x365tSFPL5LABTEoCuxv3za9Pt5o3unWZ",
  "key42": "2kQtW1KFDj89E8jgdnbe88upoKXeanJWL37EQFigVhoE7tV6RzyX4FpTSrBNnc9PTdXHWUczpuLvpDaDEcU29YxM",
  "key43": "5wnoAQgN1EEd1y6ziexGyPS3C2tyPSy528Gy5HNfZxNaJo3wHrNyu8ASHnLLyNXwpYZEWzDNyX4sN8PBcVbaFQUq",
  "key44": "ui3fYhNznXNSq6mYBL8U2KT3GxDTqSxwJZyRX3QKem31fcEc2ZHs7NumeJzUg5PqX34NDmLPFfja6Redtf67etm",
  "key45": "3QAPP3nVMrCHQjW6X8vV6L7qxhSr5btZmdbPDdhVcohWS11hk4WqiKGdmHZMPKPgUCDkWnBHxaRaThMkiqMWu7S6",
  "key46": "51ytm43NP88AVnbB3g4Z69Qj9LnxDqwg6p4Lbbrm5a13RBBDKnhm3e583Vu5k7fv5NT3RrEoRNx8p3k5KtRQB3W7"
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
