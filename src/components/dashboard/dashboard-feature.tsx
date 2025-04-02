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
    "2QSWCYwSf4iszn4CRnJoFnErEQ2kKGdwWJ3aJTX8bozR5GBaWfyaisWhrmMZHBSXeogxjtumvRaZQiR8BrSGhjm5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32uTux1EaJoejb3s2LWjfH4ha93rAQkfMXNqtaBDZkeCYFsWjn3gRMfMCn7LomXx3RcrP7DiSuSbQs4M96zD9w3f",
  "key1": "39dsKBDJ2kUW9rMhW8YSjaKYBprZS8ZiTksgBgQdb9bR1CZGF3TuSHfjQcenjdGk2gD15DLQcPQE8Pyros7UQRav",
  "key2": "26X5z2rFMoiKwMWihV1boir8Xkjm8R6bScaha5TWKVaVy2J4qfpPm1NRzBDkaNHHZN3fC9KddkfGfoLxey9cGagY",
  "key3": "3hmZKFiKD3iHwwsqJNhh2BGjBuDv3ophNUqG8NqcthYQk1LHn1VMDrCV27UrJtbweAnVkuXMAhbDHWuSzg3UX2Rk",
  "key4": "hPNpXBM7HtddTJg5R66oL8XYk3BCTUmmUYRBQFTAYLi4jUSNY78aWrTmfhEBADZykDUvjBCAYk5QGPfbvrJ3oMg",
  "key5": "5d5DKLYsUBNJXGhjSHk848ACZeN9ZRohdXqbuM1dHR97s5jRwDDpr3KKYhh6hcY8NgbCntkb6gtBiL44VHKZF8PX",
  "key6": "3dhrLZ8USKckrsULjUFsx1ZHAU5gzaBVM4mqcHmcZstPTrBkGcbP4E6QDy4ATYavdkbTwC8pyaxPnxMSyXUyaNp4",
  "key7": "5UN53ctqK6SceBE95soAZCBx3ZR3GGFkw2KyKEyeMY3M9BC6y3N8s7ejmAG73LMJKWmEA5V1kWpFAianpPBBEcqp",
  "key8": "4rRsRzea2aXHjfZjhDhL1mybsYn6Wdcu1Z3mAgtW7FVpFcixKp26i6CPju4vTQFoppXQQepkbZSdWWrR3WkWTHHF",
  "key9": "2Lztn5ciRqDeK9SHdFVo4Wh9u3gP1jCcZXEjZrMui72NX8b4dYR2H1zDE7fYiHXdBX5z4gJr2WdgUBMCwr5M7XVN",
  "key10": "4JZBa3tPCdagr4uoaTeAmQDMyDXRZyAUm1dKaqKgyMa5CBYffYVzT6WtycfhHHB6Pzyo6eWpXYPHxjiwPDdhfZVK",
  "key11": "29NF8Q2fnrZFzxa6kbAJatRCQuiLCU7vzSEe4pgCkH8ewWJxRYS49jevFvqkQxxt5fba8zMJjmpTdN4EXQCBq3E7",
  "key12": "5dWMPs2u3gCc5WtvG2WxyM1UjhDg4j6zzotpj8owjwwAcNQvp35R7D8p1V4qUFqeJG8ijfFwKaUty68BAaqnahf3",
  "key13": "2rwv5HLwZfRXFBraLUZxNipMZXVmdLWuMayMgXRoQphcrVzXGCqTpckcoFy4NGKYhvsQ2MvVQsyWhYtzJvcdPkM1",
  "key14": "3jF3ZeBWFUFh1fBQxP6912zwDM7CgQguFXXYBcbNx5EYccaEYkVZoXya97g61s9iNNMAyG8tQn7JVuPeErXJDZK4",
  "key15": "4XPy7uBi97DLMuf63G75FNSTVaGRvRKEz1whjxSYf68SBeCAKFfZpT8qFc9dvvpXFJjNHQsUeoeWUrZDJorBwHhM",
  "key16": "22TwHHKuJ8iy5vUhkscfVngPctCtzbQ6SDVVvsiiqbXhVCJQTn459dD5pfeE5iM73Uq4DhCuToH5CHrUi6iRq3p8",
  "key17": "5VGKDBANou1A7hnisuciA5nouLGfd127uZkoyPAL2gxuf75AKg4mM4FR3TKzP3sXNNZpLUemot66EK4xXpX9qrBw",
  "key18": "5pgrZJhFP9Zyw84QvzQ5oLNYrc1Rjo7C6e2vdGZ74JPjULPY7czYnYEP4ebJo7WKeWTbfgmiv4xfykYUwAfwJP2h",
  "key19": "arD9vrkUpFv5a5Ypu4rLiKbKnArrPvEUmbFtnrMzhXhWS84v7NBJehTxqCPYzwXuNeCmY8iZYGSd8C4LCLbrLSZ",
  "key20": "3AbnKCR4vRaBUr8xGsYk1oHhPUrVkYr8wN8ReFVS8pxD97YpRhn523kn8G8pGMfEGC8pZkUS96pvEdyjUjmuepBP",
  "key21": "33zPztYw6x7ahNGJNyDzt28WDHJsiGhmqGm45GVpFVQMWtMwdsQ9PPVkbuL9GCA7Tsem1g63i2MbHeVeNWa3Tj7f",
  "key22": "56tJ6YcSgyA2uhi5TqtKFRjTk2nygLZ6r67PRBCmPg2TMvhwEEUge7eUMyxw5Gokw7jcDRfCwhmdXUny2wY4CvV4",
  "key23": "31ySFwL9tSxvsJqY1oF5Tum79yoB8wV99QXqbghxRUvHzfA36vTDb187jJDaGf7Zp5Np9vzjFHyF96ReRm9HVDye",
  "key24": "KvznjPZWsnyS7XMdjxpWSm1zztz45SyGo63XHmmmh7o7Yco3Dss61qvNRSauKfKbjWrYMWcraTe9ZoHxoGL4C8S",
  "key25": "TvWtwsyWRgqkXpoqpXTGEBRpuHeS1oz95wtD7zXKsV3kSQDeun2Rs8dnxF2WdC1Xahkg5ZSYqZWqa6Ce914jUJP",
  "key26": "2XvUgi8AJwuWEHnViEH1zXbEsaPRPe4qLJiPPVSZoF68fBrKDcaXC1Jw1X11qUGA9Cj1HRMzNhk4PEEpqSZae1X",
  "key27": "57s9QnWQ2boz6EsysuSWr3a2ZAqwfGn1EDnDkHTQ5r9R5Gdu1WQtSMMyZ1eEBmKYqmK7rJ7TBNg7BtYXc6ydqeny",
  "key28": "5Fvsk9Q3U4zPiv8KDfaXxSs1kJkKvspKFXYUfN4pmaghfFGLxzsvFdfdkpDVjQ3NBmws1vmpnEJpskmn9keVtq6C",
  "key29": "tzmw2BSCDKyH2HfpRK94asSSkJukB1iAKjbDDzEt5dCrRHU5SPjLaAnCqaayCAwt7ihHPVCaQDp6A9exr2vYi5e",
  "key30": "2Vsc9t7Nwmo2mjUdZLoxM9dLeEq3xxnnfrAv6AXtrNdVgkzrMtj54RVwBHstTtJKatT2WEu23kXmsrPKtdJMspC1",
  "key31": "39veWB3q7LXQbScwP3iSo5G1RBbsT8vwzrab5LKUqzSVkCbYufSZEqXCEiuVjd6CG3vMYqmoseCXPo8ghCXubVDm",
  "key32": "5bYe1766MvB21Qq3zS7HmX8Bn175mrC8jgEA7higUJPgC7ouuoHCRL8KaKU1WhqgW1LpcjMmRMWxnLYHhP6mdhLU",
  "key33": "2KA2MptrT4cirz55AuWADa7jBFbEsKnV34HhKyrGim4vW2jeXFjtzii4aqoz9DNa4giGHkBy79TJwxw3wa7NXsjf",
  "key34": "HGVtd3s6dwSS5rxvAKRWRGhyWGPzr8qQ6HPWqWuJJHAXYGemirjgMMCYCdqYmJyv3sgR3a8CZeXtMBeqDRw4skN",
  "key35": "5rHnyNcDWpWzW4BceZ3rWcNpgXrBGJ9hNLgM6ppyV1KpBJwJc1a9vdCgrTXvdf2UBiDV2VibAFcZKPtbMGYfpJpf",
  "key36": "5obNAKcHqzjWiXABr7B8G9U8NytrTRAYeakxgfK4xULWhdRerCetVbuDHw4qWEfhqxyt3h1vKSHzjEZqb2do8CTA",
  "key37": "3DSviZo51aCrAWFxicdU5q4dFboPb8JDGEY5fWAh6CXxuAhR2kjcn1px53PfViyZccgY1CUQipvEGsNvHCa3C5SS",
  "key38": "2uUeNeT1wARUjuscbWWzb6scTrYSgDk1w6LLmtTD89G4KX4ANyDA5HCxVFoAReCKHHEWr84Zaex8iP7mu13zVYhA",
  "key39": "CSXHi3FKVkoRZHdoRGEKjv2dynYQFeJnY9TKRa5j49SAuZ1esk3oyTi2V86sjV3U2yneVQfxoQc5VS5Mm3wgdxV",
  "key40": "41atiUjBtotmEbeekP5uqpiTNAjFCyXpPT9dD4Ftx7bBWt89x7Ry7nbnNoCMGDahVN8HN7RQUU4jXEmTv5o3dzu3"
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
