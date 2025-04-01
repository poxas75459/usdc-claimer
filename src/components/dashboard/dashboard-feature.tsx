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
    "5dsih4TSroPZXiU6M58kuTdnZcFKDtj54XL7yTKpVWws1wbivv8Gg9qhk1S5opb8YMAmAkEDqXgEwQJdAUYTSLUY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "472c6dJMySHgE5yVis6FqooE8GHmMNYzXVYaP3uoYMYz8wr5TXTmCJU922hK5Zz29SUDc4jPf2H6LCqXxpQZAvgc",
  "key1": "2B9efL7f7iQsjLLfT3pkPtNEYC8cwQ1mS8JDCbAQcsuzfioUoH4ixd6gCdLLzzUrbbvHhdGiSaPRwJcgPramuxYS",
  "key2": "2bRdVxMSqHnVE6Y5WwpusrY9hubkESMcJMtkdAe6AQNJ7644NmKh1BcoNxEzZRpSQ7zQofRqtJoBmajm2ArvJC3V",
  "key3": "5YMsQhmYjmTsMtU3wKTpbV5WqYjnnA2hi5LKfo617kGNyk8a34TJjZzrnByFAvrQ7NXMTQFGWggQ7gTS3Gtgb5CG",
  "key4": "2cKL6maPgpEnG6aNE64SzekXemGwjMXzAJGhr3njLHwS4qfy4rtBuckNk9qyPNbX2Dk1mMsaQQDbHFcu23hJMV1T",
  "key5": "49XzjkwZ3h1EqeDQ4E8wtmoLfDgUUvH8J4HBhzkMyqozapsQqW4P15fFjNbHJGSpToB3EoqpN1mdPpdDTaevVC13",
  "key6": "XWzHzgk3JLX1wV8UQhBYG6DocPKyrC1Fq7MgE2G2LrNTodF8tqqn1uRAzrV4Fe3Jt9t8z1S5axh8qRRetfDmtg7",
  "key7": "HtWSHXxz7MdLy4AKPYWgpmj39synoU4HVTXjL8eZwUtP5nvuQmtpSAJUNuyQgqM8aH6FLUb2jrDfR1Y5YTS9gwR",
  "key8": "3XEkebnLs1qvTJEmWvyAQ5eg1N316DFAyyXhCfZjfYeAaybsZjeNF6VU3UxLpCgcwo446ThkudCyLWh6AWUjxEzL",
  "key9": "2TBh74Lbw3yLpJoUafWmFcUVgMFcaN2tgGFThYsiubcrx1yCG2hZSpMtyDYqp8GG7F6kZitReyHArPAzExTm4N5y",
  "key10": "2fJfqWwNK4wPCbKFU126v22vqeGXXZrZFWNqLUagXonhDwDx5vhUQESWA9SNUJVzn82nT5Y1wfiSaKJz1YJ9bFav",
  "key11": "5sayj6QCUfihPddb1BPLctchLhFfQq65eqzKg24FucJBAWq5KrAGNd4VyBfxmDySK3mv37ngxhQDDSs8TZKtbYfT",
  "key12": "KCmSyj69gL8HcXy7p1JPpYG1JS8f4gnZY2HSuWuXXS6Pqr7PL3gQbihNTvTPYme4dWiR1qKx565Fhu15KQryAYh",
  "key13": "4wfvuQQptgERvqGk7krs3MPw58uyWRwsdc13U9pK4yJqWKTmZN4RdkguupaLE41g7ofvQhV1yWoF92wcA9UJ6uVm",
  "key14": "5KqtfPeBNwiyy62aDraW2i8Uv2intYh4JyEYU3agWrQikugGPznwpTFb1pt6PPnMiCdReYjQPT2WxV8JiKMScrRG",
  "key15": "5zV5kXPkQaEqKh9qN1fkC3Cfi3MWCtvf2vTHUcVAYfCstApwPHEXX9ERCDogBq4us6H2XRQbWndQSygDqHj7MNt3",
  "key16": "3JYqiS9AauzwqsjF3bHTc9gMYA6E8xX7YVzbSkmaKHHHdQeHa7RiHWB14BP34RheziEsnWu3Te2VtP7YHCg1RJnF",
  "key17": "9rsTtKC2D7ZVBJRgBJpsQmPaaC1XfognS61aLtr7Dmg7u219ZwwKdrASQCUx2bAeuMqjg88vNRx2AxTxAUUTDkz",
  "key18": "AmfMeWmv3HypsCADusVR8rKdUAbSjp5XqDa3jYE4z8iB3oPXbNkqQWLWXD3EGw6ikMVduCHCC8sy8MGtnnnotaB",
  "key19": "4vVuJEpMtg8NZcz2KJYAdwjMut9atT7L6XxPe9Nq75AeQcPsgYaMmGjB7h3XnQyymAq9WsnGRb3TmKaLP8bT3KKb",
  "key20": "5hyGgiArxinVmvjK4ueYTg3mVYb8yzZ4RXfUTgYhQ9ZckvwEop6qGLryvxHVVqZx5NrdYZJ5nuXX9q83HcdDG1gx",
  "key21": "5itA7yNTMAi6UEHLBzYq9EbY4tikFxYFnNFRuiDDrGthmoQM9dy2pdaMAhkbiz9NXk7BHVHYGeDmhGQZtp6MKxuC",
  "key22": "4dtVc6Xo1eSUDEVBSZf7J69Vd6LHMT1NkNaQVuHaQPeKCvVGY2Xd1aDMbybipzHCrW2Vm3xdtwXvLEWgQkGEmJCZ",
  "key23": "62p3pWPvGw67mwHxTG2qtwDDd6ePGdSr9jzcay9z78eaVmY7HYBB4EW6tPRg4eYLDzfF2GvZGDwAirtnuViApX5u",
  "key24": "36cfxEDcBrYz5d7Q1UjT9EB9Eqr2j59uintxpT3JusXCYeMw3rAwBb2nUPA85sFNkUfNRTvNFfm9oVXv2TgMmHQ6",
  "key25": "43brLSS5MLvj1HDo8aUPYfiheFaiomRUGiMRvDJ5ZqEBmp6Wo8wZPEPLbtBUu2oqPSDZKFLSwDT1UomKV94SG6u4",
  "key26": "2J9PVSWQhFCs37dMZmtBBdPwzFmeSctjYzNVPXBkPfCbJeEes3uVyDAqVW64h4ZunmQR8S9Wi1GzitJZowhhddva",
  "key27": "dgBkdtd1vVbqjUQSv92N7jnB19SHVDd83st81EshGhkysaQxdBX6VfxM98FxdwxeA71KBbqn97yS1YVwbEzLRo2",
  "key28": "2Nwd3ow3qSY37Xk7oAzZkZk2Y4GgYU4gRFYbgaNXPZTaMg5GxsegQNJRDob4Q6ZdXhJ2wjVmUJPNEozTTiLGR1ZY",
  "key29": "2U1GT4bdda45dBMdxCWMUmAabtvSoafznSDV3APfiocuMpSo7SsyeAbeVeKMNcPNAN22ied8PfgrZh1vMaUn67EN",
  "key30": "wVwuYXFekHUYXyk2WH6ffnCzwo4KVoYmCsJmSMa5wLEc4pJW3UZdFXApqhGiE6CLRGduqzrAb6LQjs5CjxKMaem",
  "key31": "2sJS8yUWRRnjToNLp3TRGge5Sve1VZJLSQbSSQLnY24xpfe1dU87eu2H8TKGT7qheuVqcFE3JY9jtT1MVtSL6A6d",
  "key32": "5ZRLaNUbjwJV863HqirKssku9kxV2C7uUgikDS8kgi5i4y5A1PwWngGoCN1dvdqMsKqT6SZ4SnLpBo11EaGoR2rS",
  "key33": "45nUXdgTQ8ksJ7tBywrJcQneTFEAyV5kfgh9AMzH2Qqm68XLYyGe6QqnaKh92K4pTtXvbGkbs5xSozBAwJoRn685",
  "key34": "48tZHrdE3ArctQX8uu91Z6KbxYCizjPe1KMHsAMki8pfKRkJkh3gwLzusrGrHamqZTz2Jra1gJFKs2Z9pSKWT3Ej",
  "key35": "2p8m5MGg2cZuRzDjyXPeMKo4AmEgz7hGqwmNqJ3bGJHLmMNVXxGHfcoZZ3dpRGCjN4yGToGgddsCaMRsYLcxrfaE",
  "key36": "5mfBE1Mdqsk3pFeiJ57wFMw2LjjXwk72TcadCC7hper52BCEkPePqcdv9qkLKju1ymhEMJpY6Dfx8YWPC79JB8tL",
  "key37": "3TheHUSJUK4wUeewTN5WK5a47QiwqQzTQzBfesfXxv1KbPwn1bZaa3z8KZRHAaCYv93LZ3dSe3W1X4zwQoN2ZxkT",
  "key38": "5BuCT35Ua1kfVC11SDHiBRFKyaH1ASnTXVL5owoftnSaqdcnnenTR4LHpnCFbGhnByJwvRercyQFQFN47B7pkK5D",
  "key39": "2R5Lv3NCdTDCMnRnf8eSY5Z9bJrqTELDm95Xt3E5eqAW6v9fNRoPUHjB9ZkvUxUgRnKt3jqsKFTPqD1JoE2L8DX6"
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
