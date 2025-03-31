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
    "3pHTnWR72WB66LoUKdQE7DKyoxEWHk7fFtGk6zrCkM51W5dQDap6uBQGUStkuhye71QmNtGwV5dVeiDNj9yF6tZ1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52y4ZQuYwdLBdA3rGjqsSmJ23PXudoaDt6FzkqjeHFJgB3MG7fdBNaD6QnLvdESs7sFqUn8erhLcGdCfCGgL7Ckd",
  "key1": "4Em5CC5fdqjC7rz2trWsuLRBa8Fymovc5YDDJRm4H8YFDNZk9KHahzQgtdd3BhjXgR5kJFZHC5NxKyfpLQDGSd84",
  "key2": "2g1W86VChyHJA491pLbC5FmfbEYghuXZbGjXPC5WCNrhvaBkvvG13nEsgddXERvf2MjdQieZam5vbg3se6fFduX8",
  "key3": "46KVXD1ncmr9wr7hDGzintGcmuLEPwZq13n13uB1tZJrS1tSV4vJnq55DDwBTqpLtAQT1girVRMiz1Nf3zTN88oi",
  "key4": "5viGz88FQXJ7UHvj5gfqgQRuDA8fSf7iLW4TFNnyGvWra8xUwFnvmAzMeUQsNSbaupoDSnGGA97V8sBnAjACGz49",
  "key5": "4YmLg9hy1VKycNE26JgXDRqzfaU2zaD2PDmeFE9CqKuzcPcoGrHohkqfw48xzdDRCPq5veYA8bga74ULLKoqpn27",
  "key6": "3bpjTGJJg2ihwc8UDzJoAh749RMoHUHVazvHfMPWEDQmN3TmVQPWAzh72vRAo2km1g2GdVTuMx4XcCf1TVxRYHN6",
  "key7": "3BSGxvXFTuvbpCE1Q7Zegk9ZaN5t7AnmpnHbe7GMAE5mf7Q5qyoAE5xRyJG68uLbAX5wN6Lv7oENQRbjXFGUaTpZ",
  "key8": "4AEwTXyzMaMMLo6SfdjU2vJcyC1mq9Kf4Fudbhfn691pSUuc1oey1VwnY8X6Kob7GBQjPP3Xq3ccPGJYwN29aGSV",
  "key9": "5smtr8hTaUjeKrE5qDJyFkDTA3QV3ByqzKEQBvxvHjfSN1dowX9WTLgnzMStQsgDXhyJeF3cHNU2HPgJ9kEJm8uL",
  "key10": "2dT6E9CcSWhTZ8UCYgbupvLpvwxXkZLURmD64j6BjsjH46Urcv8sjM6dJwLEDMB1fAZqHt65Bx3RmWkCN8kPGQ8g",
  "key11": "4XQxVA9MuL9w5xRgX62rrd2BgXZwJmCJcqkenkCQu9dpcc88ZTovquCqwcoKdhmmUr68VQGfYNQ2NXKdmtoUrGou",
  "key12": "21SFpaGG85qyeaLuwNWaQMxhjSoQiozHC1u7b7icfPt366Mi85NnuEdCXBvoN4M9pQ4kG9GX78rnKCQr2cMsGxVK",
  "key13": "3azAzdbvNEdJP4qHh86z9VYBCUtA2e2MLsW4GgzNtVqXumEejAz89EhtDpnefr2QLGqrEHNfuZs9DdnbyqaJZ7cV",
  "key14": "wgxL84Z5LeKuyLBcdDc4BipNAKqZHYnw1dXf6kYd9yegBvPjoUjENJHeM4oGgAHvxscrY8KCRTbsGhhqptiTKFf",
  "key15": "3VeetE9f448b5TFWpdMNJCqhKuMoXZYaMkUBnMyBoBHAChLmo2N27Jd95wbEQTNzQ45p4wS29YZoiLrmEn8e5tQs",
  "key16": "2c8FkcuJxn44FP9qFqyrsA7E9E9r5JHtx4BfDw5bFW5iqWDAS1TVH1pdbLHLQnN3b8WnizWppfkTx7XfECcgAU9h",
  "key17": "3RztPqpvZJnF36peHNEx5t9P47i5BhbdCQjzHn6yio12SjcLRM8vsiR5vJHYt7CsBMeErN1XrPkAdbDwiRBVyWxD",
  "key18": "5u6vpZduBpL8othVnFTNNHJrX4KvyGoS5BnPDy5qrjN7SgVy7bxDhK6Eoi4dCVsG1PRcYBbK54HU6A6K1dUpysGF",
  "key19": "3BTMkSeQLcK6LdeLweaGqqeWPpFS3xHh9nXeBBXvZyR1htLw8PQWAc4NorrZCFzAuD2KMeUWRRqY8mgAiWy2gCnU",
  "key20": "48MWECQtNSiV3iJNQQFCBD3LKMf58kzJmb6ScXZ1pHJ6PESqqtVoYMuJKJLMtzCSrErcMH5Z1th6qyNUoZienZsf",
  "key21": "4KnwAGYKtdA9ko5Wo38efyoMBjPauYKzk2B3bs8ZSyqVNd6XrcfVEvsFwZjwo9P6SH5HARyXNT8CRvpUYhriGD8k",
  "key22": "34cMTLjHxEk1WjokmdeY3s3ddwJWMt5GFvbSpZTneDTdWLzMcbrDmVMBqRJ1aeG7ntdJ325iCAi7qfSGMwzLrnp7",
  "key23": "3hhKBYNCjQ9JtKqVwFEyfkK2tMqVxGW8PKwVtwEBarAiM27T93N8LLr14Eexm1HSbyb6HF42ejZcPigmNo4RskhV",
  "key24": "3WTruwLMs2oMj2VxYRcMkQo7vExPsaeAUwHcT9fU3p1XX1gnR3ey9twdBZdGR6g83vecRNea47ZCMf74fK7rYDB6",
  "key25": "2nNGs2GTjRqPqzN8rDenSS376sNExaqr8iNaTGAeL63Rts7uWdW69tRzHuehqZy7ThG2AH7aCabeE4Y3thGNJcvH",
  "key26": "3TGnx6zzW2uxCbHXGePUanq5F2fs1P2kMx9LTiWRgdfnJbGYYapuiw4vnmuGngSLgQNnRiZfXZnvNx5XC1s5NJve",
  "key27": "4okSfj98UQ1nKeaNhGH9Rsm5xQtC961qgnYtp4SpemyW7uzLRnSPwRPkPi1i5s9eE5MfkW53sJrGrzPJL4YzbnMP",
  "key28": "4xqb2y1SkCgH5CS1fnuN33pDNHXRXtwBRN6ubrwWvh3ht6fn2vME45e9d9E1x7bRpzYLSGtYTTbKWAeW5cJ1wK9z",
  "key29": "4z67rj9GoS1sQ4YxHDGyVpMSRUEdkkgYzV4tvjF3FPgUPt2QDen6XMC3kTNzEjCaU5DaeCjGSAQ7r7zDZJ6h6E3A",
  "key30": "3PEeH8E2w443ktMjU7AnzcCzP2ZBXipwXrAexVVXNxrGFE8dR72xWXKw8eNKpjrWECzUBtG2o5myMzX1oCtgoEAS",
  "key31": "48AYfhLeevh3bPNB9SDi7VacSTjtVehe2mMPmo4AtKnPvWZEnCKkSzN1wbtM4VWTnDuHN6idJvYWMJSqqtatdCm",
  "key32": "7ewkKz5UJea8pthkBWy8qW3sYCe8guiYuiXvBzxBoLRPmJHGietLgxVjtR9GsXSgu3XQAiiBUfHFKXQyiCYEYbh",
  "key33": "5MoLpDfbMyukU6Zi7tFr8bxYVKWgGBgTkqfzpLKfQj3PjSoz4NKtiMmQkpMVM8hWzz63uEutKeabbdJJPo8baNx5",
  "key34": "RkyQrTFL4w8v7sEVw8mVjKLbcE52GuiBHigAmJTzpaATUYFoGPFE4JiLgf6x7VTM72SbuWEYsJPQLM4n7Gfs4dM",
  "key35": "5iC9BArTvLNaaYon5FPoHKuiPqEmVkykdiEmkJxxKeMf9ZL3a4F399Q9c2HyxYtN9A21AFNneyCyAMqixZWKxbvT",
  "key36": "3oCxKAkvL5711TtFSB3cH1bR2VvTqB6RjRM32P89Pz1iGwB2bMLwEMza8VmDjz3kNSyk29gPsbbz6HM7DPd9Jivw",
  "key37": "5wRdu9LQWRh1A95sT3FtXGR7qGcYHfApmbvSz4JaKms5iBsGyFLuFeKTzNo7qv9PMzT9wf1QbfnrqehEEWJrXNbR",
  "key38": "5Tyds6GuYwsbCaKAuBxjEDWPMmww64esQ8M6dz2EN91ajombb3fECcbuHSsNYnfk4t5ofufFgZx71nNFyDp4CUcv",
  "key39": "uJwrFVNXcCMCYF9vp4AmFicyMbDQS4BDme3NmX9i8FEUJLNo5kYzuNMQw6ik4rxYQTCJ86Ev1oRhuKS8ihCZi3B",
  "key40": "4CZapuv3kigBFk8gFLdvc38W94AkxqnzVxrZgeJq9G8bXta7mf14sVwuGtXbJssv9C6MoN9mK6UxjWgH16AwuL93",
  "key41": "45z2dFQK56EPRkohgX5hdYBePEahsbEjqvHzpHAsQkhYqLF1KUPpReDpT7sMTbxADUeUrVw9C12PHgXJTHzX9D4Z",
  "key42": "4X3a5UMVLfrJ7WAefWrzWfR1gH7YpeeuHMH1DQn6nmTeV2NA7kNLfmsUgZbmV9GB3hD3DecScTrTH7Wzp4RKtcNp",
  "key43": "3TmFpDdb2c3zPe614qG4AJahFSLDVe2CnbvZfPP3oQu5pKeFvjQNFjLg7UruZ7gJgejRP7N389MiFejrSU3Dv4Qi",
  "key44": "2q8b1HRMc9RMPv64Xot5Ymyv6kXQka6kmPkrFxkxGHF15p9TBr9hoVM1hVY9mzuyzzYooDm4RLZnZGkUKPJZyPs7",
  "key45": "4z6i4rXCx6fi8uJ8QdeapW19bE1cXoJ4MHX38M2PRGfbF577AGNXg1eNoK5sPZcLbGj2CDC2oxMqU3b2aLMacX9A"
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
