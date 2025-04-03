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
    "5GHfq2qwwsfvTww6TEU2mrHVucsVK3u9ym8z2L1hDqWZ7ht4BczmBgbsW8TGyzmPRUAjYsq25Jsbg46uXUghXi64"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UHR6kUzD5KxyEt9PXDrCL486zqEMDQUhtghhNwMZWzxaHuxJk3sUyu4oU91bNrMdT5UJdog8msAtQdXncjgAM3f",
  "key1": "2dHmcLdSEfvcThbF51UVPWatGtjAa7cgw81SmDXgXqRLUfup211rfzjuJbZpuHDXcR9HHKHewJa1E7bnVoBnSfBF",
  "key2": "5wVMEG59oGqABZDEEQAXwDZsH7gDs61RowrBAX38kJXu5TruKt9bgrd2g1Nhcj82eH1RZ8znJZgKs7zt43Hhy41G",
  "key3": "3bieNNLu5a4WvGWQv2HZbo2F9WWxvnfa1hW15myUTMEmrwSsmU5JshupSzNEp6DRmJayjSw35TTwtUPTSdL2HgpU",
  "key4": "2sP8wjcUF6z43FkraffUtqcHEjgAvWFHmJv4ERd9nsh8XzG9wcQjGEfqaX18TF8y3mMC8RqMfRRJ52DuTJUMJAK6",
  "key5": "38xR4dzPNndgr3XxBpStkUUbUbiyiNV3ycMKb4kvbb8pAAAFrPBTJHr1k7fvivhP4VyNbWyQA7s5r85tqwnXQPhu",
  "key6": "jQoHka7grej3Th6KnH19piRd5v82zaE7bt9fYLTdmfLncwULbmKZEKnUL5kHDdiRLiyXEqAS3e9XMBeqJDsK1Ju",
  "key7": "5JTNB5QHbDgPUsrdb5oWWRRjnQuws7ZRzkX6CNTjXQvavjrHYKbohWaEpCtGyyZjP16QGYNifSYeaPi1eYXo4bvr",
  "key8": "3RbC7UhsoYpVyUsK2e9UKSwYrYyDrSeLJcZEjzhdW97HXsVUTx2tjM3jNt3coCrvDFG4BbGAyDNEJ5pWWipLH3tV",
  "key9": "3ACjyXrezwJMH3XDSw27nu3a87z3ttwKDgfnhfVAtZcZLfi4X6M854am4LKiNBZuECp5xiH7yAe5QXLWdiV7Ctqs",
  "key10": "2s3YUJZCqSc3CUeBtLHMtrbXPD7dNq65gRPnpDrjfbtkNANU9KPJz6Qf4TQaYV4CToMS2hvpz3LzcP4g2nzp8m1F",
  "key11": "638ye5N3RL4ZJFszDvVBp6Kua5TgB8cuaSj2Lui11DMwKC8aR6oF84ZERANECYYZFvKs94tbifz6NwqTKd7QTfSE",
  "key12": "5ssQGKHXfMGAuWXqXDEjieqarnX6SEk1bypkeWABKBBtCxFq4jV54SLaCL4d6CorjpwnfdAsajP8WbAsSbrzsqQQ",
  "key13": "4oRjDTTBm3Gq5XpHjrRXjMyyV1HzGpZSQUZKzNb8i7DQUfUFd2p3P9UZ76dtrnUM4RURuQuwG9bTWbpwUdhi6o42",
  "key14": "3T4gXb3v36pNGuQU4F1AKj9KvpvosuC1JDSxMuv4YVjm7vWpZH8Xa1WKj39qVJErghcNyzaXuvsy16avAuswx37h",
  "key15": "48ihtaVgUE64mvsJVwTcQ76dXTNH6spLSMrb5AGHFK3xJwu9ugzAYzrYo7kLaRPRMSe7VZCDAT6jqhopDdsdCbbP",
  "key16": "fk6NtFWYY64CYFHmBxtGwM9NwKZSXnnFEw67xYdjT6QhfC1PVTe6CmT7j4ArdWA4DvgFT6TwF2exnHXhG4wutyS",
  "key17": "49fpyuewh2R2V35FEJQSnwjFot1JFKdrWVJhDSYwqkAcmEBTS9UKhm7JPzjQP4zx67udayKH6dUvTtseKodsawC2",
  "key18": "5JHkWz7gKdV8VsE1Ki8dMP75qeBWQuQrqMdRx4bC8GSkdzuNUn2sGk4mSQPzBm1naLbLR39SDZnW2yvrP6CnmGUi",
  "key19": "3UVNt8bBaX5y6YxJ4zANnUJEkZiZnDDh6dkYpFHa4mPTF3cHa758L7W7KGZWRnjVRj3ehfPzN3TK3x7kXXrM1xdH",
  "key20": "3uV5dQsvmNJoafB381JnW7CJJSFmwEje3jZWtkekN3Lnw6jJ2KtQAzVuAak6ebgST1eWuvKGScmoGRuFfjVwhYLN",
  "key21": "5mvLvF4SVTaeg2KxSG1r59UEkywmrNw2VrafFk2QDcHeFY3RiDQrh1V4a1noYoYoAfRqdApyrQQNGop5PZN4Grf2",
  "key22": "3uVVUwrWWHk8Pm4AArrC5CdrxwT99NHBLyzJezveiw3THr6aSuX8io4gbpiBsdsbDnQBcztYaT8Soaw11pSXbqYQ",
  "key23": "5GhEzAHdsuMnW8buDE7raDVGvzpVy4tUx6si8vs53YLGYHwA9EDRDH2MwTYbHDf9Thaz6H9NZg8JP8gWrdJFG8sT",
  "key24": "5Fv86dACwBqA5XJeojKS68SCjUjxvKNwankuCXFV2FjKikCRHjK55cfKzAi8gY4cnu7Bv2BVVQQB8T9bsXFAquWa",
  "key25": "2VU1mP6vacYbEn8BF1uCte5rz82VHpdxHLq1wUpLhnur32y4nzB79D3DTzYvD1yH49HTUEFnoBntji5dHhHsEeE",
  "key26": "4SykTM7CpcP8q8SCtfR4UMzbRSyfFVLSttDYHzhtCfkikV8PACb9Rp1U28DP8t3t9AaKzeVtEegEPc9bwVpqU9fQ",
  "key27": "5SzPAcywHMhhyMdku8CX3rKgmGtPR9D7PoPpyJXFTfKHARS7igmz2CAmx9Tfp2H9DssrrX4LuHU97eQCeS44CpB1",
  "key28": "21ubZkSNAn7toCQ2odWCd2wT3uJpwCEuun6n1sJnxDWv8pJz4FeQZsg3ZyJewZb5nBfFGfp4Smb7pGZi8bFA1heW",
  "key29": "2ie2LhCVKsGi5Wj5Wn9nTJzNgtSYVevWKRV1XYpNUc4C9auhcxWBhkgszKCAfM8KfHfuq41qXJWX1XMfzL9PrAnf",
  "key30": "2hgmXN3T5SXQfWLhZfFGFiUQRvDnBcEFo8JxS7LuqM5VG28ts7yT4MJgmXBkYYYHffX3MQ673yjTfx2uwRRNaG5x",
  "key31": "4PtMeHKSpFL4KF9s2KaH1tFiiY3H8mpqnDiNifeAyfmvG7SJCeubZ5dPoWCBBWvqwQitYFyE7caeqRoFc5XQjTJz",
  "key32": "4padyshLZLNkEy9csBfnsWBnVvVNxhDQW6a6ZSgqi85JcU5eq8w8E2HBHREE2BP1CR9L2EtEjw1uowVFyE422bcD",
  "key33": "39b29venTW6regntSiEYLqmsuNJHzffkLHQv8eQJkrAmxvoM31L4dkYQf8zFG4BAC3zmZHEH5DmGbcLRNgY6gm3s",
  "key34": "2zR1C7UUvtQh6bPQyGZfNCcpYkCq8VJyB4eV6D49w2zMogcTxuvZD22DXuaHhhzcYkYSErEVBKrFYLXj2xkUeiga",
  "key35": "4WLtz1oQa8nHxTRnAqfEZwaaS6eCq9TPBCiTJiqCRfX8SMCE7UHjRcUJt9LsbRH2KAAhBNWYratWv7nDc9Ggh2DC",
  "key36": "4fF4Fh4mPgKjgG4EdGK7jfH2nQ2vsg4UrLPbY29h2mDnRVaDM2b9X1jbuNqmKUZ4bwjXZsGvHhN72nECT52cxKAJ",
  "key37": "3cjGWm72ix3EeRiX5aaykZNJWqj2PfFb3AFcsfQs263cbRA93TweJNi3NWNk7bEPMemE2js81L8AoodzqNN68dtU",
  "key38": "3dggAfydGupfkt24RLyxSat21zD68H8QK7LnkeGakS1YFTDteGNrx2omYkgt4VZdaSQycKNU6Kwkyrg1K44rfZ2t",
  "key39": "5rfL4FKEQoB7NJNcz8hegmEHrJEbCZX1sHYWK3Qzsr2ebTyewja2dDBj814tZX3H999pDNqE8yEA4M6WX94mpRiM"
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
