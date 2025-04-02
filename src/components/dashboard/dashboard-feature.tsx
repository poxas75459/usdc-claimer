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
    "5Q9xViQg6DPBVgsz83MtK1zEX6kwDmawaoCceYJKdR1FUzFLPeCDQWTMXq7hSHKj82qMhpTyJ7CRvkfUBX37RQBL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rnqtj4J7JDEg6qYHm5Uc5WEo9gGuRRfhhWiFScKUntfxQaYkq8L7PHpoptKnMd9HY1LkHo23dzMjbSGqmmko42H",
  "key1": "3NVUySFTKH9RTTERoQpGiy1h82ejZyVoEYkct1VTqQBA1M7p1hyC3PuPFKZxQXQZ2qQJBbvvW1xXTiPUVYRPfh4z",
  "key2": "65AgMKWvHxdRpTAm51b7JV8oVUSo1GY1XnBhhT5GCjTCdSdx9wYv49guzRRd8TBSyBZDLTBiECBKgCokgTHuYUDw",
  "key3": "39w7qrXJAV15R15Acp59w8ngp5QmTSqLozVKk5Tx2T7NgmN8TxxPySmMpogeqXd14g7JndeoSBwcSF2LxyadTCZC",
  "key4": "3QjgbAKHk8pcLmwpvX5o5iKHtS7GgNoj1wkykHBMFeP2SJ9q4UjZ5hN5fJEAFpdbx4i7VMUAr6gfQ37sVrxHKwTi",
  "key5": "2S5J7tcB9zwMu1sX6ozhtNC8mn1bwoxmmDaKVsDuhwcLRrDwXCrNRECZgQHV8sCryaYai7qB89MBNGYqxzZQXDCc",
  "key6": "2CqDfuNEXiacpqU1sz2nFmPKhC89MJvLi6X9enNqpUFcdWU9ZGmXMaPGw4vWN8MhWRcxAewz4wppk3QkhxHmUBbg",
  "key7": "3ZEnzDD6vcSH1P4HgtL45DhxCbv975f9Ce64ERWHc8fit45GRkUo2A2vb26CMqC8FHemWgC8fhBkN8xS65Q9GLWX",
  "key8": "2ivBSdyzzS1fSg38HyyETvfBP1uTXLJ1bmaQ735Xj8QyqSE3zV4xN1ZUEiFv252dqkvysfRGGfmakDN4zuLaS16s",
  "key9": "3biXgREKjySEfhrKiPXkftdFDA9tpxusuB6vcGDeefNTehY7a4m5ZPfLE6Y9cjCYYLK2qo7MkjyMnQGM6pXE8iAg",
  "key10": "4jSDqU6BJxhL4GS9aWWzkqQKodT6re99Dp8YyssxpiDBeXJzFJfoiYVuUrNFYATpEhXEXYSwMF1iEWeU6vgMa3nw",
  "key11": "3cRB14PFHvuJFhVUMUuW25i6W5V9o9QcgyVy5kMzC6Y9k7FUbipF53PAQGrkF7Lt559gJVhCGj28DobzdmTfxoj8",
  "key12": "4LneD3i5WRzNUcFdGhRnLD39B53djKDTy29iatjWjf97JB6rJPktEdMELW2vRZyvHbgPNAruRc21ARBAfHD9EXKD",
  "key13": "49psq7afYBonTwCBeeieVMW1qdUTkG7ekhjECW988V5S4PNbTFGyooDLyifaE5xXTfsNBpEk8hw6jC35QSWJzcUS",
  "key14": "5RLQgpUpJzUvJfM5qfLdWJBkSRcMCSLRGR64skSwqvLbZ1YQieDGUA9Fi4SXfn4aC6MjAU6QdopsTx8TTWJdWwCY",
  "key15": "5b9Jr2xdaqKP9LodTSSp72DKZDp1Dyne23Ac6zLUT94zYBB8VF6s5sgm1wNgoxsSiGEua7qp4cmafx45iBK5ddeq",
  "key16": "3vBLrfdzHCkixSvQfeFWgbXktq6XX6ag8y31mAv6nXhKS9uEkQY9mcbvKJkG9MQmd8G4ZbwH9bNDxr8XbcupQrsA",
  "key17": "4K5wDtAgP7JBNYcRkJeD7rdjtUG9TmZrix8yMMNk6jALm3nZWoDSQ9TmMX36ZtVMqH34isMLmUeJFGFLyn8UtX8u",
  "key18": "64z3w7svRxAix1vYT6bFzYgrCmg6yxTSuzGinujez53g2xTqhLEDyUHy2jNXzbY5bqfKA6Fq9jRJQSad6oBssTbF",
  "key19": "3ThF8J6Y28EUjztwGJYA5fW55HWin2BudLmbpDGCcAtNsjf5g2ZQZcMdPou59DaSmvG3pXHzqHH1zpMgwfLSfiRS",
  "key20": "9hc6C7gZhAj8PTRhhctnTRX3wpM82AGTJRgDTDqQvYV52K6tA63sa4eVodcfooFPAAqL1WhLWgAoVPUhSv1T73Q",
  "key21": "65wg86FwnaJadL3LWU9bPNRDfSLVcu7gmLAUiFuisFFsXnqvqisnfRk5iSt1eP3CN6qeHxwBWjU4iDNrim3zKqf3",
  "key22": "47LmKiRunU5WmewAgqvPRyrncLedcLx2snHDEVFJD2GdNnRx6MtKWhW5jCWr3riveLBXVuoC4FV1jV1jjh3Sxizm",
  "key23": "2ruma3n9fUJLytybfJ9QKiFBX8QXiGLjeP2WPLnAJsApVRdCDfSUSmAxcRVQ2xSAtYG2MkrMFHEq5SktjRDp51Q5",
  "key24": "5vJ5CfnFgWgHVSYRfM5kCXSjT1LzxBRChQCnfufKqx2ZX9D8soBD1yWyJMw6GyAET2GFcCTZmJ4Y1uXCNdfDCPjZ",
  "key25": "5kKZA8rWraHUgLmRCk79Cu8dk8arenTBvsbNKZquimfrh4oxydqSMx6KB8gAsjFBL14N7rwWsZMM2PS8DsAcZmLx",
  "key26": "3qXJXxMgn3NW9XGtH77irtn5FWFdBU2V29E6N2ysxUvMGsXiRdU2mnwRkrMpRjCQM6FjYB5pakTVJ7mTuC2SZvN3",
  "key27": "2CdNiQKn4ws9k4q5rhxnLcLsoZW394Wzbbb3gG9AsZikFHv3iovDfHaKZaHi8mH3UXuvPRzAUZQmk233pPUDGC9c",
  "key28": "67oUU7buvSJt5w5LXBsq6oxjVnSFdNn2FsntaKgi5FJumhQBJnNTvMa4StsyJ8wSKNae8ghnm1s5f6AwsoKNdv4T",
  "key29": "5uYbF1tuowLBMvd5z87pQJNzoCF9araQAQ5iJHdJgdN1Pg8BBSBG8krDyYhC7MNaeNy8Zz9ZnHqo4Bor86NA6ijc",
  "key30": "6Aqcox2sbAuA8pHEjbRRzVmdiGjcBLHWkENGThqx1c1UbyrhhGvaeuupWREKAzxWvwW6E7v92SSXNAUvpKxaMAq",
  "key31": "3srHDc3k89ue6snS1SwzvkbL8pP4CbqZkL1oFrF2kCPTgc19iN6z8BRAVQNPk4mkoFmfCzpj8Aoe23Xj1iYm3QkL",
  "key32": "3DiYgiFgBouUSX4MHxhsSw36ThdMXxEG9VnNWZGrjKFWKqxqGL94kd99uChziJ96Vs7bJWZpkXbHre1LNV7M86KS",
  "key33": "2r3AWYyxt1E4cRRR3zvZ1viePb1rQrmF1hRTeWFsBzvWoMJFhAZLdPa7myNy91cLKx4vzSwTHdTp4g1STqBAo9sE",
  "key34": "2AjAGq3jLxGuf3MndenvrgWgp9wqSMukaiwoSDG6b7MCwZoJZnzvyF1Dw7LyzX19q1zmJZRwq9WRfsaBvYuhT1ji",
  "key35": "3CpgCnZiuxDcufe9MYEUSsgGiVtTP71BGW9rPDcs4Zu4F3gbf4ohCBXVe59eXz5KfSkh1jaRbToXMcnS2AVmdKGZ",
  "key36": "499nghfTrNkLEJZKbohvicjm6iShPpepr99UtRAZSr14C2QnHa6mHoQRHdDP9AQG5iBMsx5aJbfjZ8Snfen7Rzn1",
  "key37": "3KUHZG5Ree8maEnQjFmcEMFhTCcyPuHXkqck32u7p65xS1jS35U9CA33xQUcxQtJdxqPzQDV38T2Gk3Le4wvPggs",
  "key38": "2nMqZa4RZFUj5zn1ZkRW2XPAyYRQaVwS1y7wdiKoocMEqppgd7LodGzX5u21Yz4XVMR2eMzM5Sccez6vKLwweBgi",
  "key39": "5zgJBMNcxxfu66KVSiQNDjabF6SDFME4BfNA4JteSC8YpAXDnZGvuoRWqoHVi1mSKJzrZD53permXRCXS1sepwWp",
  "key40": "4JfAbzqdZzbVUt4iz4c8jQuGRB8biR175FGAHqEC5Ci7J9xw9E9tohfVUuxvatUqn92MLVoi333nH9RXqpQSeWAJ",
  "key41": "2YLQiWeH51aorToMwsASHs8crScPDhTQTu7emaLL8xFbFkzBUcvdy8PjqfDLnjzxLiWWwQtonNp6gP1435XNMyZK",
  "key42": "2PsHGT6zDizeoDt9Ddhhb5SytcY9rUoG4FVdF3zzG5scBKazZBnouAFVVdUCfLx7zBTCYjEtfaNopqWoZzCLLzNf",
  "key43": "5Z1ANWJugCBjkmSFKCAVTtJncW47tVqEh4Bfw8FbRSb54mwLevDbX1SrizDCr31Ef554qtyeftWjejfCm84FTd9e",
  "key44": "65C9xji4b9PHoRYnDoLKKzp6sMywWTm7CmAUxxUD3RuRdXXfJSMxdkbnZPTkufWwY4LcwfqfQZH9ixPcpNW1Jn8A",
  "key45": "2mJtw2pbxKFR3AFJnEaeZKJ9hDZxt4R7yNUEEB3soKeCaueihobN7DamCMWgbTRL9cSgmy9xK7PCoPQMaxxavM7d",
  "key46": "fg9LXxtdoEH37GoQfidLsaLD4oe3Nnkjt6JW6tTKqSPCQ2tx1t5nVoQ2zJvcqtD9EJ4C2QFitCwibXhWjJMmVuV"
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
