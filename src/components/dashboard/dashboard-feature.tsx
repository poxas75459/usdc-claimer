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
    "4KMp85YdLxvVBuzySaspaoAMWeMBR9oJb6CCruQ8rC742EkKZmzh9FgRmNf5S69Zy4K4KdB1Q1qTXz2r1SPuQQty"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3No6zKRLdmW573HHTZQYcZrecbZJX5gvWrfiKEJVviVEFDexAe3gSkEXyxvJACC753H9MWcgAfnG8T3nuhfGD78y",
  "key1": "61BN1XRrPyv6dXeggZJcnY3EVfMHXLmP2XoT3pxA8BYkbaQzust5ozDVzaZCEigwc9V1QFpndESkytJVifrmEyN1",
  "key2": "3Z9eCDCBbyz1bwiKtsLTdHCGjjgxFiUPQQrN955phKsWtQEpqUAZiACc6a3A6tGgroQBNtf3UCqS5ZLkv5miN1he",
  "key3": "qDXPegs8nKNE6c8g7uYU2NVXBE6M7R7qJpGinDkrLzC12K2ZpCxzg8RzEBfgnn7EGBhiWkkhWvJaDjtce91UrNV",
  "key4": "31YAzynUZaGtgTaDHWsHR62shEdUFy1oFMVhfeYpneMs1Whxb3zBY8nQUKWed2TFfLzJTJ49RNJoM188fyKwAnoi",
  "key5": "3sTkutKpEWurv2PSa92ypKWdvc8wfDehjtUfXbSWY4CF2VFkXFZXmYFM95a3Wb8cDX8GFUMvASePUbT6tVpcm8gh",
  "key6": "5VQ8uuhq8WGQ8UDP3mmCaTktjC1XXHR1s4URuSTrQupeMJTYDWf1GA61yMJtYYrr9JRDhLcupNuRtiPuUzFfy7Zd",
  "key7": "5scLk2D8gAiZ8q9YVG5kHHNtNNzr7u7MUAWENmFxrPbcqEiKxN3eqYPKZMZfhtmTP4CRTHZf5ixcbzLU8xQ1oM2E",
  "key8": "67EsSpuqrXfc2YnTDTTYhvTg4EXq2xeqZh991wHLq3vqfk29stBRa6eHnorr8tM6VBzRkQA8sRLqT3wY2KYc4HLH",
  "key9": "dVR9eexPgxSkz52CnmzgcfLmpUn7yKERFQUi5prciqP8Qm4kYxtXsRpVfGxMSgoSpXESeJ1zjDESwXjAN1DtXV6",
  "key10": "3EGc2tTrynmDgHNsD2H5W1MUKxSHQ8k6bcgtQPLCFbCZXo47bQR1CGxryriWz3GVGyjn94xycxPN1FaV48zSLP8T",
  "key11": "3VQbXjsnccAmG2JNUemue9fGG2KpsXTTgj6HjU19aexgB1s9BHpsYF63yL5QLk51PY3x4Up4UmswUbAqCRBfCQZb",
  "key12": "2h76qpQmbpGeBrAwLwTRvWF6hAwQGAX5fhRMBE4VaK77jQSuWbpAWXBeVgmRVCh1jnrqGLkSjz8VaUcm94Xdyq64",
  "key13": "2FG1NryLMdSfd9mFUsiXhNupjLUwx6UKPscmr8qfhwPJGtF3TJiWBWGrogo1u2GzGBQn1154hwLLkRBP2vhdvS4",
  "key14": "XwjJ8ud5tM74tmSE16K8GuHhvcsqsaDB2x5KkiSzi9Uqd8J5NFkXHHv1Ud8tbHUwL9aC3UkY8gc6BaumJFnmGq6",
  "key15": "35oFeAhA3TDbHMjpuS9X8fmoncfNcZZhy9TD9sCrHtSLF3QF3fgcBUkkkL7RhKjmFRJE88LodEUMg9uw7ZPCwf92",
  "key16": "5mLFzQouL1Xs4JwvuKxS3z1ic1tSad42Ai9hvvsx2frcj2UYH7c6cEj3KLREydvRQShscw3XYDGJwGSnTunPhcc1",
  "key17": "634ECHGJvyZrLVPgZ7tCp2z6LgFNat8tqjRmTrSy7Bj6wvHwwoDJTrraDEiL1DticLxrF9HZD8xpkSS4WyJLJd1v",
  "key18": "52KMr9NAx19aHqeYnGuzPnDpcBahxGYajvrqPHtmFwRyA68LLcnaDyiJKL5G61gizrzAxbpVoETTwg5KUryx4XF7",
  "key19": "3RknxyNZ7BZJ8T5tWYZMwkEpVMJYmAzTDA4G4peZSXaPWS1tH42F8czsXJ1sarxnd1ShtyCLAWarT3bh4bWXyVoo",
  "key20": "5NuAeK4JCATyL3Zx79RjLAnjWjUaFGpAFwjHAGy6Rwiyb9b2fPawtAFgqfYMLBVoQmXLLeU1d2nHEtaBtqXCq6Xp",
  "key21": "53AsQwaRxCuHxLtKuj3fWYYvhT2o1o118K5gYhWpGZm2cdPyjRZfvjj6CJJFwbpJT7QNaSDfQCdjoNJT8hveBtCM",
  "key22": "3F7wvWMhMV4CB7WWh64v2gytcW8Az6gE2z9kZUwpJFTcTmSDcAs6LH9G6Eta3pofgRFEL7JpkmUvTjwS9uEY17oB",
  "key23": "NPpGoFuUEoRqvrNfVfwfdKZ7cWdGh611BkiMTSDop85qcHC7o91DWsNrfG6vy3jBYmxVWqJaW4p8GS7B8tEpjbS",
  "key24": "5LKQQLKPbERqi9xYcervfHzQKRWPHJsXBGTUJTCtZwGrnXWwyf1jdwu7xEhbjp9qUmhgAmg4fEVPDY3xwCrjaUxN",
  "key25": "2c3qsCyrBcAWGuC5pdqiGfRF9ugMgSpdWqjk4Ge1GNSREeTgCerJawbpB6aKeUNDZwwNLFdxiextUUKoSLoWxjMf",
  "key26": "4pjun3cknNvACfCUJUgFXkSXceMT2nSct2JzuRnxwWY6LQUuzG3xWijcoHdgb2b51D1HbXhi8oX3yxJGPnW8fYZq",
  "key27": "2TM4Dd8g5mobnksHjM9b22RtoC6Wwf4bptmLQF8ikJziLvyN6KnJSR1fAqyQzAbg3wSn3RCvu1sk1yMpZjYaKcck",
  "key28": "2DjAX965k53tueVU74GHP3jnRwgg24mCcQqvzr3aqtcLwnnihUB3YCG5qzz8R9t7uns2PnmEgJUKWGDGTJERTQia",
  "key29": "52qEc1t6Yj27ViYzKy99Q8xRNTfEU1LSMX9GH5nVTPryQUHtmTE8JFkWwPVcwkJmSfeh3aUQTJn64wbvfPwGWz5h",
  "key30": "4k4z6NsSKGxQhHQzhX9pjT95aBXrdsiAPKqSNN9VWHJaEwQX5ksBjajXuAixhkoj863cWwkXWz9iS5t3UN19sogA",
  "key31": "3usqSj6hBDVf8Z9yf6MAiaoE8hRm4bhZgcLG2xmHdXwc39xRF3WFvQqD6SWYHgy73j8gUafNUzKFvxpZjoPiF7s2",
  "key32": "58kiUPwvtfq96GbeF8ckMey2K3C26tM7D43hQhvL6jD1WxHPDermHJ5NUgHaRGos3h2RwtXa84eggGJKCYJY5Yb7",
  "key33": "4hr7jjkxVZNVkFLkgMv3eyyQg4MkQEem3nRwcYByGEccWTgdwbZhgdGfnCFT9YKyQ4PYu2vGeAQoJyA6uFD5eQMT",
  "key34": "31L1rN5zSdfgvFhNsVxXRp9x4o2UVFwMqHr5xMEXf8gXrBiHWPHeCDKaHNqU9JMwrvxjBgxZDtiSRPRuj5bpKqiR",
  "key35": "37Uc2Z3XUobPLhNxKAJ6kwxL9q9pTKyaQTVkN3HpHMyZACgiZrpoETx1v1Fv1FWmapEZr8bfpMZbohoAaBLCqWE2",
  "key36": "5BACZs3MA8JMvZe5aC2pAV9yGAzZq3gGuRdaapVBeJGXbTV3r89PURpTCfkiVMn9PDQK4LjQwSSjbbGq4BpY86qv",
  "key37": "6448j5vxVzQAPV57yCXbveazqaws2NucRZqMSQpbdEkUjJDjT18QPupaHUMdBpVeGAb6jrvBbpGmUx2p8rkWJNis",
  "key38": "3UuAgGr4JfJBJbi3WzUnT1fgJEwy2ST3Mpk1AnaKTrFPVodaUvoUJnbZiqXWnMAq53EHn7tkuBANdMHyEj62EVUH",
  "key39": "4enK5eVtoBdLbJBH7vnZdrfUxbuT71KuQeg9zVh7vR5RC3qKrgK4QJVNU8FwPjJNvcHjr6iZ1wAQEWyKMuKSHAj9",
  "key40": "DxLieHhcvTNuNgPTWeS8UNbhZ5iyXkBwbxUbPU1CsRDRepALqpEk2vbMFU6jo5qcN9SboB7wRW7iojoY9uBUMcX",
  "key41": "5tShYVYidJKpqxdah1DzcWq3bgfq31Q5MiXGZjHxZ4aSN7hEut1g3T83VtqLDqY9m7XGnRCY5cSjXtfFFCVxkeSg",
  "key42": "2B79v43qrjRX4Qw5m36oYeMsweVY99Hu1sqZSn8rDec3rQFhDsQfYYYLB9tcMptT3LYTe7Qpv9zWhSMLELTjHBNB",
  "key43": "2BMrWSYNTJezE7Z8AoUMvSmdLkDMv3eCmhTF89zaeqMSsuLdnxsEt1WgDNDBRqFvKnEZprk4yMAYVbAciEkbZM1V",
  "key44": "5Ts53JwJVsoqbEVczjsRLRVgXQKtqh2EfvCL29pPtqEcNQaLR9fz7cc5KNpbob2gzrZ8UJqir97MNbT65CY7S565",
  "key45": "2BstsGBHTWEnvvTvrc3uTLUcERtkB2fhGMjViWBtTw31ehsu2tMfKoF4xdHc2HqDEagp4vuCxhvNKqSED6CRppmU",
  "key46": "5W9GwH9m6RCTb8KwjFWpKGyWUFyuhRWteD1T62AjaReDzppov8SEM7ShfC2CxzEufhet9wXUbpuMQYeyg4ezDQxe",
  "key47": "3HUcjgXDGzG8S22GkWTF2Vw1wxh3s1GXKSH2vPyCtYgDbUqJgUuQ6ZUmmxviTqpUEGuFs1jHXghuAvhWnfb3YybG"
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
