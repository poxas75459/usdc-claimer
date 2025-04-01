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
    "5KVRLCpbCXiRLvw2KfFJck8bw18zy1oh1QzM633eQ6g5RzXc3eNFN6CEsszjWyAcX1rRZ4c7KyfGQpadcRjZ6Trz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8cw1v6BaUTmJvL2jbjuxnqwrBHbn5xJvtAQxqscu9eRE7XZgAC5EYq8Ge2a45aQ7US3s1ptGEotq2BNdLAvh643",
  "key1": "3nZHMgfPDjFcQr6rxtztV4HZY4vj6kBzDTJrkteQDjHBF1dk5vqxEr2YtrUhoNBpj59ojj7Wof2mfUk97mZHgNh6",
  "key2": "4aVRgbpLK9N43tXW31iMpYFXJUEDd8XwqdreZEMN8CwqJk4YhW2G2Xg6eh4PQwFAzGAEe1JTjVFALuPF2TzYwvwd",
  "key3": "4beigCoTEntXLnfPmJPrpsL1x69TYj8cWvUnEvisnss8y5pshCTVmVAFvtxdWU2g833HBioq7vwyiNH72uAREhqa",
  "key4": "4vhvPUYFiNPsLd9qFh6WSnUsrrkqcw2KwWMDCj5wq3nKNAshHhFmm4Z2qodCisCqF8VAM5CLnU3RjXwmhH22fHzS",
  "key5": "5YJuquTQh3xWoCAWRQDpDyCuhg4oNjyqDXdWGDsQW8C8FCcxbnBtfek4uke7yxZdg66bZFWbn8PgWccwPhPjDfgR",
  "key6": "4sR7ueBQzJGaFjHDUSGPyGtT25Lrfv1h6WEeeAxzeuocE8PQ2k8y84XaE6T5VT9RQknLVpLFdKFofWXVoHqnpBbX",
  "key7": "4omPbU8ktMgMoiVKwWW86ucsXVjP14Hm4bhu7psRCB4PPvRKdnnpDjJWfcBEBKJ1YsessDRPWwzNEr6o6qrRXTNJ",
  "key8": "3PCrpnjg64JAUFioy94KPzyf5Xx4yCqkxmrzW2hR51TF5jh4SfBxd5Nk2UhKhuYzVroXV8sZiwnhku3Bf3RECPSD",
  "key9": "3kRQscq5Premd8s6LMVqHcFHXjamA7cLVvS6YAVS5BRwwyaESfDq3y6rdJ48hZJMXTWq5t27R1qLBwKjFHDu5CYi",
  "key10": "5Tzj7mjCNXCoWfmd68KWZQZzZiwhmLjpW43nFV4b9DP9ofNTuDvEqsNRKsKfhZn919kZ83e1sWVUSiuqWNvau9kq",
  "key11": "24JujPxs3mB2nU2nGf6fWGgXETUrSDj5ctJdVK7GW57MrPuSfZrFzKXYPpvRKyMzdwTCzjoiRSrw4PKVHNYR4DD2",
  "key12": "4oQw8KCGJTwR9W4P8JjZMX23YZfTBuuaRdSi1Tb7ymyb1jN1HK3gBdU4jUfq8CbDPtNPb6rZ3FcGNLrw4DYqgVgf",
  "key13": "2qrZCHjXP3jGwRmrqKAbYwTXHEg86uqJJFp8es5SW6fJ8vJVWCUiJYvWN9K6obVwoxj3czsWVhtWKTy88nDc3Nnf",
  "key14": "zQjaU2UGFnu9atSAvy5mW2kkk6S41Nkvvy35B8VCGizBAdiFJ2KgWzzv8J2p1eKhiWAuZGukA8gG7h9BFC7ftyg",
  "key15": "3PNNRLYCD4iDZvfVTRHiirX4CyNEyChLwU3EzTqLVqbnLXV5QBSYQS9wp59pCoFPjPbkxw9r462KRFHSM3rBGPz9",
  "key16": "2UGxZ8zeB4UgcWZRzVD1Es433vsFmZczRkUfjBKdrLBbt97ZPrYMQVwiSCiCpbgrkkSmoMyHYjpA1SVesiWKeEhm",
  "key17": "3YNpcyZX3jXhKd3LKCPv8XtQ3FRRdeQsLGCGMyLAWmKBHu6ocT8jhm8V5SWW4FCgPcgdTuzmZT2kNgMLobe3xiF",
  "key18": "rc1S7ZJFBCURjVsGyDLKn1pEMe5TayLeS51Xm5CwLtTottURa56VChfjkpD2U5PUbKpWNJ1JsYjXdMPJ3ZxvP71",
  "key19": "5toY6yWbaAxGd97cnBreXdgHN5hYwCHDEu9MXE7xsACbRLvhqoeT1rWW69gurqTZY6y4owb9BJNBufqyUaYHNKfj",
  "key20": "4ur8RGKPMntJEx6nNpFZiy3NLxRhugKexZP81NBHcG3KdX7S4uhhssaqx782WBaQr2vTpTqMLAE1C2NUzSczS5uX",
  "key21": "hBULtF9PVK4WUFSD6qNcqQLGQ5RhTG9XpPUL1v7WMsbuixpTLxHvhPUDWW8nfinMxB46VA8tpisyqB1qv1aiJzM",
  "key22": "2iVH3Gg15KHc8CWQNzNr7C7oJ9ENDC44FqC932inhQZMMphPc9XhFgwXNacEgWde273ymEcsapThhyFzUuCidTF6",
  "key23": "2RQed6BFSQjHZhr3r9AZzr77iFtyV8spKx26MrBRTup9KbbxkRYNMpbzyyruQkexfhtb88ivRVfodgq3b1qqH5v9",
  "key24": "5pwyq4gDZMr1b5a9fEBEumJpZDLQzQ8rRBao6LAdpNZZRsnzdFDFERL19jV2uJ3Qo2RJjmMYQEGzETRud7AGbeUY",
  "key25": "SL4ZbK1sFCg9F3UyCRnZpQVjFQAvnfUH9a6xLywdMFj1nisABEnjg975xvswKGMMDUuwkcSVHEJYizVP98NmXEU",
  "key26": "2xAzGh7GYXNMsnuso3uXCbD6Lr2CzrM6jMizdBULj4jeAZzdYhM2dm4LiPxAFAxjQtugpKB5uutnFWhDxYAtFpym",
  "key27": "66tr7JEhCdXvYA6rhHVzgQjAQpGSNVaNy2gmx2jgMbXjjjX2Q4JxcKard1Gd9fsqtBGDvtz2w2uGS6eAU9MeXi5G",
  "key28": "4wJeBzsxB7GwLY6mHe4tqYLUEmKFhb76u2zht63W1HsqGXyWDZA4RPEVoayqoUpDTZNdy4fxiAKxndqDVkeUKGPx",
  "key29": "3Q7TTkMWkdxKLYejHrAJ2zr9hvyuVfga8B7CVAzezS8yKo8JG1KyCcf7DFLsomHUtdQQVfWnNczUESbkUhbAS6pS",
  "key30": "2M3Dk6KrUEs4TmFPMRNUSddwvfHwAbx6GoETFpdMTsK1wpNU8XLrMSFJg5AMYMyMFJKsXZRd6eHvAkT1VDWsLoRd",
  "key31": "5YYurZektHGD8W5StdMg7PmCBqKDi41nRa4EvpCkAUQZf4VGxEqm8MPLTbDvtGy7uMMxAwAo8mxsTW72zhZ4M1nq",
  "key32": "3Y7mMUvAV2kbzhn8j2caKmSLZrzzWp7Htf8znaq9qCGJenx36UeZiRUn9FWC1NPRz1eKnP2MTp4KePnU3sr8jfs1",
  "key33": "4VwapV6nfCh1MPpGnRrydF5fX44y9FduGYteC12BYBYiqSzyW19wALfa41JciAwGTihrPpmjyD6LPKDugJbo444M"
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
