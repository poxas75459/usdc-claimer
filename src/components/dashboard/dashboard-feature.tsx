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
    "ZvHM41arJLLmyBAMJ6yQobM3zfHkYy1t2YdfDBe1sEdFGZSeCuY6XpMSuMmqHW6rByWRViKPHtVeXXhZQUZ4FJa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39AuBBvXSJGfcbNnPnJJqkc75DX1GgV8rVysUUfjvNn7vfXktsDLpk5h3tS4hdAZAW6V4oqdvVT3TZK9QUJz95dX",
  "key1": "3EyoBS64f4i4abjvD2HYhDmqMfyRsbXmVJAYsH4aGsDV69BDauMEYMLR7ZKSP4r1eRpM6iqVHoz12ZpNHEjWyrtn",
  "key2": "4oe6pcipzq6ZFP2isjj8fzTkG5F8bZDa5Ze9tKVdodcg7xpv2NjqVxBwgcqgVJWi6W5ALdwNFgefH13HxhJeakjX",
  "key3": "2NtjGBzYyYQ1Qn6sYKMLGhCmvHt3nv1gnKbKrhptnc4isLnmMWhyqHEdCPj36qDi56RfhFAr6iBvaWJYPEqRsJbz",
  "key4": "LWyfMLAfmGTRp2y6QAPrB4jEV1XRTViU5JHBco1okWast42nyw2EQLNJL4nQG28jLypWpgDzEcmdq829S24wsyG",
  "key5": "2WGpYmyvzqhsLGgqaES56hMCXdAeJy7d8nzR3shqdrKn25YvLzqnvLZdGrmYe48AsN8YW9RPds74Gagxfjvt9uW8",
  "key6": "34VfuVfsNbffzWGJpZcA6H4R9iTkvWDd3rVxjPiKaecHgnpQyPnqULG2WnJaywfQUv2tNvvDD9Z2bZbAKBC5mGJ1",
  "key7": "2vuoMEpCAGQQoe6stsNvjxE6pTWFQHekBH5wGHEib8F65YPUsg9EzBjrrSm1ctZVAVugC4te1i2QRQxaYUJ6Ga4K",
  "key8": "uULMvnKi96UvxtBRFxzK5P61FVyQrABJyJ9wiENyTYybrnfDVDzUyQy6ddGcvFmTvvWoEuQaFH9RNahnZDu658C",
  "key9": "5KvD1Thw6wcxuWMsm89Dhc1A6dpmpD9dpoRkCLBwCY8ssLUvdu2y7yUdnx3CUwgqSEot1TtXWXMoEbmxA4Syw43e",
  "key10": "bfhNnGPa4MqPKd727mUCBVTSmwMgL1qEdhaJPkCnLwiyda2gun9RAC1M6gGhjCptxN198rHkS1SUHKtJv3PndDG",
  "key11": "5FtvUJ7KWRmXbzyttdrT7jroWT57y4aRiTHUknjA7HuSfMwk1LUpmp8ZznSXLeY9VmGFsZD9v2TerQn7iBsiHM4T",
  "key12": "5Ykgb1Q9UQNEuLTD6wQMhVbjpru8M4AUakttvhLXMUCqa7PU5CtUWrZHsPairzsi1yT2fBddUDJVaPyd4Q6g9MhP",
  "key13": "4aNU9XTm48MfiQ8Mf8YCATRaCw4T6QKGZumcvUUN5vUPxoFB1BUpGhGVpKQeEjESCvRYcUD4hzMHBP4Pyo5dHXF3",
  "key14": "2bQfUriPGzFxy4u7QaBg9K17bXw3Z2Rn1GjmVPXNRPVUELbuvkuNaeFYmqe3KR4Q6FdDK9RkUp9spAHr94wYHYNh",
  "key15": "5jMdXsCFJb2NyhQpcUWNGrLKbwAi61y6yGicsZCwtGE2LbSkbaiA6KH1a9TJKhJin6Dwxb2fFfse6yqxjcXJw2RM",
  "key16": "4DX48Kpcs5knBjfAX1mp2sCNyqrwbujn2vHvnjBAe31KFR1mZSfcRxJKfbdhuNGjphdcjxQdnch9JRNhdYs4iPvy",
  "key17": "3bJ2H9bzbS61QUzecz91in4FC24GHP9gqnTYQRYZhA92QnzNS5zM7vVVWsm4ngxXHRM3viGUKgnEYwddZxu7bjCM",
  "key18": "3tgqGdMP5KjGGpP465dCDg1y7KSauyFHuhHB748NRignRvKGGqzC5CYDtJpBHkTgyRRNmPCeyZtQZnJXmLG6hXE",
  "key19": "5PFwxthVV6WSoxW5PVuh5XFyeemChP8r7dLLt7WvMnJ4hRHexHpNrXa9EXxRo53Z1fJpYFTK7KiMzhyoFdZ1GQWA",
  "key20": "52CgszfqcZG1Rft7zP6BchKxmPdZTpS516mJ5ahE4J1NrPuMiVkWXE39XbesJtMo3rgnnckW8KtPvjLqg97TJwwk",
  "key21": "3wq3mks4nJrU8xcC71ckWJJe1iV91nK6PwzyaK9HU4Xg8CqrkW8YcYp989vRmsgWS94TGAcGsP6rfsnwvnTJL8FD",
  "key22": "4N78rC16eKvAM4yxvpuomaT27MX3msXiZTUGkczuHz6XJii8YjqDegfGjiuJXVubycAaZWTk9gw28gGJefjJFq7S",
  "key23": "2BvLCNbCgUEoxmjhyYkntCan5aDRPBRxc4JqeNAWH1kW5dY83wpfAVzMCAAFm6oLrWU75UNJfFpV49DrnYea5b5p",
  "key24": "3Yb5WR5TkqE9WCVLnj2XmLsFhQkwgJZcLG7DU4aE8Qtjj6tHYSZRNVcQHLhR6yjGn6PvykYFrRGHygGa36EEn5y2",
  "key25": "4peqHXrYoRU1Av5pqPQaR4FQG8v59n9xnJCMp4emCtZnRmu6ikxgakEQJ9CQxS8U47WhRmH2fem5NKLGWS8WQcEc",
  "key26": "53HtaBmzqehzewPeg7Yk4cWBFRenNe8HV7GChLDDoftM19AsTjZFGkJX3awQt5Scbsf1Z9Wom6A4S6AaSDyaqgiw",
  "key27": "47yLZLthXkVtkoHgochazVBzvLuHviER6pxESvnryghPsBdTaA1VRmaRXnc3T1eYt87VyKEfNA9wZhWKE1Ly614d",
  "key28": "5PuVkoCagW6QqPd3yy9tsuwUSbcxAwkjCdxGaQa7LQrZduPRsvZ8A4HbkXAYMZzm9vbJGNwhuvGAqdtQb4E3gqhn",
  "key29": "27x8ExhKUYu2hZRFf3Kc5dQucTjmf4ZpvyUGBoqtkJR5Cu6735iYibTaKmTwP641LZo27BoXJnedrqtudHjFg3ZF",
  "key30": "62BbvhWW4W4TGALiBo72vvq2m1HYwgSm3gmZH98EsQLKwvyepyxGXkwg171YkvqKAfbWHWAKUiS38Vh2odT5w4DA",
  "key31": "5tfeirpSKrFjcG3trTrrSLVS2CxVGSsQPK5hnQrRS1KPvB8owyvhgTYaAvbtVHEpSnVBhu1C56zxtXA2quRSbwFX",
  "key32": "4PKqhPPMHnES6aW2G7buivcEe6qTrc5iuBBHQw2Q9ndDVHfF2qn2PDem1ZpJgKC7Q5KKPm7r3PHKsb6tL8p5qAv7",
  "key33": "2bzbNKvzuiTvqH5m4sxnYy81gjex4JTrTmukZ5RnM583Tn8D8oKzGBmw1Xtck6GjohqK41S5Mrx6wQVknSUmbH2U",
  "key34": "at2T73yThH67dU8d6XcvzCiKHh7owf2JreC34VZeHxznjTLFwvw5G9DoDBBprtTJEAR81xZYLcMVbfARWvbqE8n",
  "key35": "3pzW8b4LbXbyp8TZur7vdtZdf51nXwSwuf5wuMDZNT1BtU9A4kKNeisyvLm4DH6oQafQEdbFUGcDY4gUrRFSx74g"
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
