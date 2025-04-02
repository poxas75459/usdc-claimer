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
    "4GCxUn9TTHmiJthbhRt9ULSdXwaTytiqmbdGRqMsVEnZDxaCEKvwALzqNb2puFdaJYZeTAAhdcZLVkLeXB15nw7m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fChy1pyK7ZZeHcfCf8x7D519oAQe1CFagaovygRwpFGFycbUKZbXU2HVTHrvFbq6Pa7LnRivCFUw3YCmB2QSFGx",
  "key1": "3SzM4FFKCkXh5Be5aApFAamPmwsWBszhyYknki8TzonsHGXemPX8AcK3MSkgVcGMtRBQdCvKZq6wSqyYfnocS5ci",
  "key2": "5RSMDKhZsfuoFUUjQtZtjhMzNGqtu1Xg1yGcomx8hnqdPR7aA51HMienCVTGFhAS31xsS7nfdZ3M6QBD3fquSb5s",
  "key3": "5bPimzKHKND17fcVZk19dPvNh53QuyfDiWpVbWBKzx9tDS7zMxdFtXcnU1Ty696Wqvf6to8Ub5Rw9tVeRePBtUWN",
  "key4": "y29rV2DPCAck7xnPsjQSwqSKFHDHFETUksLWm3RYPKXA6p7F3Gf9ezybcjGv8eYjVE7mZLwexxngR8VBUNhQ4g2",
  "key5": "Bzo3enfjFoB4ScJKs3M1XHe2d7Yt9Py4ryG2Ap98geHEKkMECkBPwRJrMaYCxqXzvs7oRanoD8cNYpXnopsC8My",
  "key6": "5ss4DjSgvJHHqiEZUric93uFJ6v2KYGtSPxLXSdvLW53KEmAGVXytNcYDZ5MM3aYeToBLyaQP8vSrdBWk7Fgbrpe",
  "key7": "595VxsVSegr3uQNAdbH6wXDsYaShFDbyt5p3NVSzBYHtrvEB1otoBVqX4zAwm5XqfsivMw7G8Lsx8k59H5qsu7KN",
  "key8": "4gMQaHwGTyf2moLEWawWQS2jgDuFQeQ1hopxPsAyQ5Vo3DrQbUfLQDg6Li2rpmRLx3AsoXrFccp5xnFuJTdQcr5S",
  "key9": "34vU94ysxUPfKWHpuJp4vXQCvycPPuzd8kqmcKpHemux9bBh44RL3uzZPvKDyz9G6fAyGGrY7HDCYnZ3odcSzd1A",
  "key10": "2Gv5awD4GgjwhNZnJVmJb5kdGwUhMMdCgg4bP4akZjyP3fLDEsLNriJoUKFfZfwoGjpqjkoWFteCVurQcZhtnfY",
  "key11": "mmctXic7GVivRiZHYNQDfggvqirrVVcYxBygqVhJw6wTHj43Akue6ohaf12HerasMvu3fRYzkkUxBt9p6QW66kw",
  "key12": "kJLmFz7j8dV7CE1QQ1CX4cwSdvbydR1EvSyvK5xC7hwUEgxb2Ai3n8F58GVVr2KbZvHKyncQg5dMuUri9xB6rMh",
  "key13": "4sh4ntS8bboJMptUNAJvQUeTopMBzygKfaeu6xfRQFENx8Gymf5zW9F19efGFXLK6Nebx3DEGBGxHfGtBJXcLqDh",
  "key14": "aZEDzLAGQHmKrZSABs6wCaXuabgx3fmdwstb3aZd3pMWmwCUiH8xDJHFoBMhJKFxCjYXah2HbVsd58qjwc5PF1a",
  "key15": "3GfjzrguCEkjAUgbqnKdaydnnKQscEN3nDoXWh4UzG8j5Wk9tnztKYeADRU63oBZceBdsLSCwfBTMStqDH3C9CDu",
  "key16": "2zMBrbdNzEt723dSrHwonPxb8RdpeNu2EbEqkw6B9MsppYoHCRiCTerrRa4CdRgPJtBfiTHbvBuwFgR7rP4Axaps",
  "key17": "4GcBCrwnrZ8BhJzEz1EP4HF3RyKY7Ugy6eRLGWeBHkHGjpCcX7N5nh4SNnCiyaim7pYCaFktWZ5kEBniw2z3uhiC",
  "key18": "VCA7q6U6jSoTnJ3zuxXRXQr32SJHLhZW1zMHYDpefUrhMSyYTGmKZXFQork4eGDgHCh8B8dvhxpZ5vKAzAkfN5K",
  "key19": "5oqCsB64HqgdJvUotkJp1cFpdVddTVPUcSpShbqb6ksQnrx1zQJNrQRzBwjES9KLCqYNFg9YaT4xfbvKBiJ9XPdB",
  "key20": "2gk9BVGuxKv6U2GAurDpDk8zmfw9Dh6isgZnxNZ2SuwXM1gLdAjWcEfiBiasriZZH8qcNXFc5KgbGtSSULnY1Fbz",
  "key21": "3kAzJbN7zUn7PADbBDPueHcm7bhkDyV68negM9XzS9tnDT6UKvMm8nqjWF17tKMeK74Ggmq82AM7v4kTzD9AnQao",
  "key22": "3gzcH4bA4AEZgBvf4WNgGtogq1HDd78qE7QBWFX1bb7BrXAC4NoqTy8o7eEp9GB5gfHebnxvgcn6dZg2kZE7KX8N",
  "key23": "FJwxMfpqws2FRSTmR5CktAkExPFrnQ6soiuREiwANiio87iUrALYCCLKvP4xc8sTLkHNgA51hmhXY2SAGmFeNUK",
  "key24": "d4v7GpJZDQG9ynZB3hZNtuCURy1XVGfmkfRxhvTJ7STieZZDBetC6r4GctxbJnS8Ao9dqNKir2GvwwFHVHiwqVt",
  "key25": "2QoWvGK81Zmnw4aKLvB6odPHf2B882wnffRRw7cq7YXbuZVxgEgWqghSKGZZqWo2HFbPCM3Scj9RkAQLn8qU95gW",
  "key26": "4CsBduhYpxL2sTexreDf58uXaLpkwAQVrYSvA77JDVVUpdSaYNbpja6dsVxyxVA9hMSXTwHDrYjycTvLS9G9qWDy",
  "key27": "4XoP6sxENfZQweFbbUMVvAaCerZCzD9ZA6BNxVvBrXXHNvHu12WVP5vKySY56QVjhqoHgx9nitKmeBopMr7Aeajg",
  "key28": "63H1JNab5dfrCfYYhSM7WwSQZ2FYpbriG4bTAznmrr18orLytoCcMsP5CPXJzJ1SKB5NHiy92xTHRmtM14FWbbbr",
  "key29": "47UA2PMpN13xWJPX9ma3k5F6og1wkC7zjG95JgkmyiF1FcVunA8rfunUrevYJ4a8AkGN16E9CfZ5F7Z2eMpY3P6c",
  "key30": "3yYUom8Ugcq4xVuaWJePwzPnXnegsRujPateu8HmyWWs8Jk3Drw2iL42paRwguYdh85F9QV1xhi93shppirRy9Kp",
  "key31": "4RS3XP6iUkdzmuZM7dh38V8NodMae7ArNm2SoofhAS6d1657ktSvQKzu8SZ7tMS8A7vc4gVuG3hV4HVGRYWuzTFB"
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
