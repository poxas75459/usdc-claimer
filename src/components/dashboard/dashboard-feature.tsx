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
    "HosSesnduHXea5fCthf7r2vxPcj9QgemgpJRfoaeZvV2LsbTvaX75SWH2Hd7CYnFuzZ34jgDsMPEBya768MLbsj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "C7tqxH7HvErhmpWwZBLdCUZZcrga2KBBukEuiBTMwU4q2pZmPFxggx5cqqBRrU9rXE6NkYYX1qyhYbYorQAaMy2",
  "key1": "5RnugACRkMrYhzMo9n3e2wVoP7GKf9MgdXpoLH3e3JQjFGnq8BeoPaJFpL1Zm12gfPd5bVnWpRDRCgvzPyhewgzW",
  "key2": "3rX4vrba3AQ7geaLeTgSDJCs9FQmSPWjxUaAYtKRpt4GW3h8wVWUiUJs2wCmsMAuoKof2afJfw9tnqXm7aF3NAcG",
  "key3": "3MX53QAK6M8SScLdcsULApfQdG5U8xKszK2mtV2T7Yo53yoRvdwdT9DpzFuP1HwJAxqKAX52uUx3HSnHjEA3NNbD",
  "key4": "3qPfnAq4Cp5HjuSW24gJJ12e1xRsjK3aCT7RqSFiECUSTsH38BJxNTVeJkQG7WX1DwktWx9RGNu1wXuRBxBtShpY",
  "key5": "2BVEERgWGyawSphMjphVp4Vi57EpAjsUWFjGHDx8H9ZXa1WKxC5zKJjTwoWJyLfSoRbe6rLUsyMnnkEFQZSd1n5Y",
  "key6": "4qMfzizP6vyN8HnGqNmXibDBcB9q6Fd8fcKU5SsdxPdaT6xLxuGEwJYFSen6aUS7LskrWHJKB9tsNgNsFwW8JYGB",
  "key7": "5TN9251YN6enWt6CBmt4SBKzrkMtXidyMUU39z25EAXazDjHvy59H9mT7AmUGBCQCvBAV5R8MFnH2T8swSM6KUXs",
  "key8": "2iLJaW7VpunaNTE4NMC4qKwhxjqrLWEkvR8SK2QY9TsufdT1LdZk27nSQYRHH3xSFZJbXE3HpUpeVT8VrVsmaGrU",
  "key9": "63xpgcr3zdmieupmpkvmacy6F3rnutQQ23QKuZGY8tXuP898arYWP9k9FSEijH3tHaLDbYRcYPWuMjKudm9XXDLp",
  "key10": "4arj8eGhbeb6km5LNTqVbwpj2XaMUrCubRTrMozVyWaQDRFJURJPRwZeemB7wRu8z8F6zsDfAR1x9Et34ePV55b7",
  "key11": "2xoHCRYzk8TK7uGJkR6d7iBmHquS8CEaY5zRNdT1oEAbZv7BWCZg46K6GQXJ9b69Vx2MnKqwBjniwH3G1Nh76Fdh",
  "key12": "42LB89WzVCJoyx2y3k49HtAePecTuUfhjMo9fnWnTQ6N8KAUUYeFpLX9MgKcabFhQtXvaqw47GpaVPWpMwumBY5i",
  "key13": "4DcpDxkiXovndHRpcqb3yhfq1c4qnt1BBSUchvyj8Pbx6DymvEcSuvWyHup6pwGzWF8nLCfWCxxWmZrhvbUkm8NJ",
  "key14": "4URK99HM5xHT51dbEhzy1gbdbYs4bSmLW2xDScEGkyYEp4uxoSqCsXikd7SNkqygP8bLS17m22RDSwVApphUUuf8",
  "key15": "26Fah1x4vYeYJC8mVa12wh7mWFpCzdudh11DH76bCHYrvnYAc77xstry7MF632M7x3tvDQmZJgrWTam5jKv3wUpi",
  "key16": "3wBqVycY3TvPgz6aySCCVwj2mvGqgCMm6Esob5EuJpEoiC4M1N4hXR5ftoc42t8DrioPHnV8PzZS7xcHybdezLC6",
  "key17": "63K8XSr2xfTBnB98v91vLJaVBKitb5DDcDuWce7WXDcYRAJBviaLsn4HS8Xqh5hNtHUC9YJigSeHj4eQU8c4TJBH",
  "key18": "2pux9HKpuhLr1oDB5LtMaXeafsgRigztV9eMDDzQbrErQKRG9pHrM8rpaNycLCp8hw3PxfhDyvSV78WkY8r6pbPb",
  "key19": "4XCzS2GkZbqzdWdyb2Ke3BEHHD4V6atHnwL569Yt6kaXapeBvvRwXVypWfQU5PWHgceMa4KsPaNnbDDJmUQgxmMB",
  "key20": "2TgKM814pB6vmogA9Kac13Yjt9kJR2wZ5iTCSTgMdfzzQ3SZWwmxSoFBHm3WxavjMXwVcC4maJrDibeLihnrFg2M",
  "key21": "2m5c6mEXEDLVFv8bLaZM8r44je9dwpFJ1tiwEyr6QfRxo6kpBU8KZ22aFaQw1cssQi4yH2EePhBcwLKyGcBj7uLV",
  "key22": "5Q11Td2HaDyS7nN4RFogwZe2yUhnumudvpyq5zVuTtst2RXVrX6RaM4HGHYoB8d1jhWMoEQP1UCkH2fvkH25jcLg",
  "key23": "24eQMbtumnW1AC6FBmoWX8CJJYnmHaVRmuJ4WZX7bbQ2MTggVoH6tK93dWXrB6STGhQoCZfX39MLKEJUJHPzYJSJ",
  "key24": "KQRa5dsSXxQLbhvdbedS4EPdDtyrVTSrfhcF6pfKqyeZ2N9B66gMi9KD1P5rZrbMSuhZ266rYnNxJkuusAnxi7b",
  "key25": "2FTRHHKwK75fbW3K9ijDd9iLdBvB8w61V8n9U1BhFp68EmNBVgPbRqVeAZN6b8qj6QeFn8poPLtdLi5jQw8nPhKq",
  "key26": "4GLoJJJq62SQA6FdbyQZbB5BESuSjp2MsbCbvKSw8jy5dPyEWhHbynz8J1FFALo9jH435yF7BAc3fjGv6RGqiR6d",
  "key27": "4pj5BqS99rFUAxZ88miaVF2PVV6fMywiqFYNJGud6gjuhhzLVzYSz8mS3jUWRuZNFo7Kt7B4tmcpWj87RLRSCwXn",
  "key28": "2z6CqujgLwvjMLFikbKzja6wdvK3w2HQ9AVUtjaws99ApNVqUi62Vh6JuPbsYVJdLvJx6HWHq4kjuua9KpWjevkt",
  "key29": "NsCdCz4eHuRi5rAiq9YZKYHvqPhVEbG4uBtpCmeuBCkTSzrkf6dBe1vywwsmPecgtK7voBMLpHp2RZqu5Y8K26w",
  "key30": "37pUoBmi6EGUvz4KhtZVTxuLNoHc28TzSQipPKCx7BHY8UqwyhzU9ck3CfyTqP6j5bQHhiGE7yA9bU7MNqA9Ndih",
  "key31": "2x5QEoMKx59y6YKc21TMjTkL4QAQp74cXrRVPNt3Z8kphrew2Kk79TaDFoN61DaQWA7gzkicnM6s76Ps4REagrf6",
  "key32": "2rQURHgs8fHZqXSCAnCWfXPX5HGrZwCQWnNmHVdPC5zETYL7vhTdkeSXTFDWJ6NraWHNo1ooiP67wQV6sdcHwi9n",
  "key33": "2o4VbZk1jrT5stCxsAZPQBrEgssoQcAccYijNsLEqYwZ78ApMiiqHm526TAd7M4nqufdqZJmWjLrHs6LCaKMuH2b",
  "key34": "2dvBCnKKnLZUWKMLz678Ad45HA48zC1HUrV3GUjEJ6AbwPF8LzThqstb9uZcMWkCZYdP7FReLyU8RPUMmGwr7bPE",
  "key35": "2socXod3b8b1rDqkdNf8e9ktpKPo2hVYbtQ4rxWhpdp6k6f798vwqJTMmpdeJYC5vki33qeUqUuVEZY7qDtt4RHX",
  "key36": "4ykrqDebdrbBbCqpJBw7UXjtgrpM5Gh8QKwfogknWnaYZ8ervK14XMjtRiqWaqEM3gzMzE5FtokbaUE3uzkPPLwb",
  "key37": "3BSh7SGDN42QUMRot569298kkXukRdUg7CeDHm1PJQgDd8yY6sUbmVvBNK34hb4LX3teqMtj5ahSNKptHah1SnMA",
  "key38": "47Pp3NrULYRqQrRxpDeptS8ToLGCcFa77dMb3XZmxPWdjhFNMdsRjftWnX3ia8EHFWqYbiHdr5c47ypPTC3emBNK",
  "key39": "5iXP4ru9Ro7s4B77EfZggU9EJk6RGnTD7u34QAsA5LHjnMpUECT5p6fFd4UnNe7iYeikMHAyZDYwoJtgRvj4dz8K",
  "key40": "5yszLzhdG6NAgjKD4gMy2iz8kwqiNcGCMwpofkDXXjn91ihzJdHM7HyVpCcCTDmd62VBDTD5a4jAN2nxSSu4Lmmq",
  "key41": "2ZsvmKAPpV2QumxKDtFJfUQEadFDs69XNsCHWbdwcY2Jzjys7pDT9M4wKZqLyq8jaKjCbuEiuzNwFVwhmtM7vrxJ",
  "key42": "5WdwdPzCUJPgA2HUwtJMLKyLgDBujCBQESd7mSBxNNCHWG1XZahARnp51HsivbFASZ624TkpmNCfgdqM7BwwbPee"
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
