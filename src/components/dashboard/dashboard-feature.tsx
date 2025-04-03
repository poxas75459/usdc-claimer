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
    "4iFpEPj1VKZiNmg2QkPLHnHa8p62N9TzAD9a8fLwKxhQGFFR9a86xFRpgpC71kwvKoiiVUhphHCudStQcYUJgDrD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "K5bRCEk68qDe66NS4z4HNZDoiWYGtqrmPZqJBhk8GENxxH8A5xeZ4zhrea7snT71xMdxXqJt2SW56duAvoBD7Ch",
  "key1": "3kGSTq8ZsnH8yN7NBYsTir8HkivmpGfY4J9CGpqvbWo6A92CZsSyX5Zucq31Qs1xE24GV3hxCBHvzs7zVAjJd3NE",
  "key2": "2CkY9dGQkW2Byce6UdkK9VuwgRNAUb71fpdUYzU1tW6X4Xv851J2fZKXwKDKisJa1mf81Uk5vpdYUvi5tx285zCa",
  "key3": "2FM1REYY56PEJur3aT7y2FoiQ96GKuLLN7JhWm9irq8L519tmo75qHuChB6j6Badq2G1WXocbhKRm5dp8nUbXaJS",
  "key4": "3Jv5PU4fX2DSNCBc7uzLXDtWB2XvHy1WHZEiCE86athA4YNiUv2n8UY2GsZRbssYV9gGFZJQy3etFLAmnR31bHtY",
  "key5": "3WXmLNQ9GDW2urB6ZCaVbzPqCF9Pvm8DHq9uowdN6iXQfqB3QkSfYetEpvr8NFbQbfyEZ2LHQ5EABAkmunnWasrt",
  "key6": "5DJDmmKqSzSVzF6oPsRMB36VvQKQYhJSsuRzXRDAZD2twDMNg2WPp4HGoUtsPW5BBdWswBdoun7W7r2GU6pvNFjm",
  "key7": "61LGLPDqu71QSLtteSGdmpGatK7h7Au8HMVQeuZL8CSwHm6Be85BswJ5hXVVhwtPuctZpedKvkko1ihwXpuAZvAL",
  "key8": "2JkCry5PyQpuyud8rHjMJ72z6SjkU1Z9kknybuUuJL4LaJGoLfUDeJMq1uutMGGTskJ5vWcL8Au172Rt2VPvXzZt",
  "key9": "GMmEotyYDt1MUB2t6KVbHcrN9vkbZtRXcHG4endTiZttEUBf95ew2aWZao1fh53UZHAFXX19GH7yCuKcpyRxjHP",
  "key10": "s7Q4LMP12eCnLSAnHdoKVdfMCCN7xvtGKV3wiCWgUnyiRRC7FoLhgU4tN6okFP8Gs7yyY7kVaPtx7LVm1vJ7Xbu",
  "key11": "3YWkwnewR15sx7wPftX7hKotaXEN1dumt8AZ1mcmvTkcLjAa9742ukDh32FWrhoKGtzuWKZwQTENLodzyWpQawza",
  "key12": "HYaRpJWjEHjUsBoXkqdeYYZbx92UFEA3vgdqHbPu5pDiTYaddfrbP2QuKnSn16daANRudWW2iRb2rCy55B3uQLZ",
  "key13": "ZgpneU7wiF5V523eoZWVxGt2bJi3PFxCexvED8DLkZxCxAULDwP8xgbcx7nsev6S6XPSCZABKhHE3Y461GYr4KP",
  "key14": "3W1bbM2bSopKU9mu7Zur2BYkbnMyrMyy3Urd1YWRSgkcNc1c1NnLaAkqsYBtkqUs9rcik1TYSf5UHJaWy9MvLb1j",
  "key15": "21yHrsfuRBNAgNzbgrkrUDiQfV5Rkd1yi19aLe1PrEjZRYKGU9Nskh8uyE8DARFakc6aSSkW7AEbNvZQY5M4BMUB",
  "key16": "489c9zMmuBR577mwszkfuGzhaZXyJjCThUWySNrToLhjKLGp8d4xgQi7QBeGuXDLS9Lnku9A8acCen6umG4P2uSi",
  "key17": "pVkoqsLg68UPag9ASTjV3BesbbYViz7Qk4iPaEXSJ6SXUp82pcPz3GQAw6GKUBhZZ6fUigC91yGXGG7TF3CTQH6",
  "key18": "45JCahFUovLwrbmM7Vyoo7W5kVZoN3KYgHfFA2UpDuHc5N63kMnrRyY6Hco6B1XjqrqpvbkSJATHeLJsKUkX8Udj",
  "key19": "8jK7DzivRdUQfKmmS6XNKUr8VCk86Pb6LpRKMJfAGBUeuSzGuaZnheEn56yYcWXRigp3rYs2se8TnuAzYHMnVks",
  "key20": "4GScL2zKgPd15cKQzdAjw2BYVyQKWQfW4oYNiYnNzyBpWGctSwrT45qi3ivxoY75zXwEfgJBX7rwNmPu64hxa9nb",
  "key21": "wTuDghiDKp9TJNrjuHKTAGFwo8SZ8bKpdYHMvPwmmF72cZwVXxYyqrYgaQFDXi7REEaTMLxCUtv6UuQsq5P6CeB",
  "key22": "3Xa4x42o2oyq1utwDjCAnmsDDm7zjQRHEhFd7DDfzvVmiLjdc7Rup7AcmbVQhjzwFhU8RdgzAXYEYDkisgeFvY8z",
  "key23": "3denTN5tJNfNHk7WFvx4n8vLiBtYvbzUhzEUzAU9N7DwjsTXhceifT5jJQ4GwyxRgvWGKoK4UVYZqxiWiKpU4dzS",
  "key24": "5qWvHirdmDSSQ7Wsxc6GmQb4zsPGkccSC7PiaKqLT1GK9GUDA6EYoz7C7BBWMaWcKRFESsXVePHDa7M8WouCH3Jp",
  "key25": "5nMGdJ1qkeZSNk12TV5kedA3mYRJHo3Ze8a2j1Avv7dep7izU5rMUu9qqmvZ7GW9L9cy5rRXn8hRkoRrtcSAix99",
  "key26": "5CSyHLJJa3W5Fkw5haTXfP5som4Gw826wvQGZhgVoFyPCHeZMWi4wKdrL1bgy2u67ncBUwQozsQ2CMXEVoTnZuhn",
  "key27": "4YD2DAW5DSykqjK5aw1mMAbeZ9hcjTiAw1m1q5VkdMWnbHggZwwW8oryj4DpNF9bKqdecDP6u18RWmMuhRHZC374",
  "key28": "5MAjPDf1jcSddqsfAkDgV1BFxEVutmtoWVTwSG8ajMerEd4qbji3dTJaQcdvenmFiLJPKzABTzZACbBNh3w4m7Z7",
  "key29": "39Lr1iAykdV6vmawkT7JpRbw63xExUZL5Xw2JgyvMRYQ3GHKAB7Uuwd8Bgh6w3gho5WBU8ddueFFSru59yVRdy3Y",
  "key30": "5FEATFwyjfw35poGquFYkNW1pmwGCcdtSztrgN4Et5Tpu9Fb1swvFyYM64mruDot3CPwCX3H9kAdX2ubgbAGmnwA",
  "key31": "37pmBCDrGAMG7NFkMnbjbPn2uVBUinRqGtWQcZRgcH2kFFKFWCenWBUjrHC6jrBbzjYvZfMraB6deFQNAoV3Szxb",
  "key32": "5AMhruufMLpoH9ZxuyKsuKcU6YyTkArRrRiuABNNz2RLhy4LJ6hM43JBwwKMLFjMWxrA744izZp9zJbM5wnwqyn",
  "key33": "59hBVc7Jny5DtU8gRDo8i3mVCZgrbHPyaNmS5TvYYmtwDx3Npxhdnvm3fXngWYLNnkEGzdMRSsFi8xEHH3d31Nxh",
  "key34": "bvoVKdGHavdoZHiQV9V24UCBjSjjbD63oHozCLdgnM1spsnEJwPqyEfXanvTKPKKWwjCFZtTZBroq9gsxfhkGgU",
  "key35": "2i9ra8yT7v3ciBjZEsA4b4mEBKGfknSFqiiZunE5P9rTQykrBkor6hZzPihpKSVAEKkeVJv4KC9EH6kWb4aUppwZ",
  "key36": "2sjmoZJfW8txBYDUVrL4mTvyMKfUyPQVMRk4bCMuv5W6x19zfeAuDxMCgAoaX5GBZovb25EgZ5HGoEpZSGC5howx",
  "key37": "2k9hEQuqHHyNBoTxdTtxj99CwZh28yQT4vNipHJPzMAwSkNuz7WqCD5xV6HVJ5HW4cfuq4NGWDp1cfNCNFbTx2Ro",
  "key38": "5JT1eYf4vPXo9khftEqYBeQF8CErDdBckPKqwT7n2H6ayS68KRCdHzQADVzAi95omNrRRNVWyiUa6BQGW1juumis",
  "key39": "2uhAkLcx3HeXcwVNxTsUYLTvY9S8HLLCGj5aj9q8zyu2NSNcvpyp2o428M3YQW2sq9kLCDh2ha96tkU61s4QJAUk",
  "key40": "RmE5u6meBsq1R5SCVNYuNCZFANYXLRn8jXVr6AfssB8uB3FUbCfL2FKF1Bq8DvACF8RjqzUCF8y96GSe4zhtcCd",
  "key41": "mLLyWg6MtNmY47hRHdDnDY4E3W6CJ9AtTZFGszQrvTi2NUCkvayx3y3xZMGu6QU15GETkTnwJ5KiD7VLbjPVWQy",
  "key42": "3qLSZCWtDi9gCj6wgZ4AWt9a4WsEZunCN8PxaKzVXepg5RBHcrnaN8JMk3ew8ARSVvZXZSSm5bsXXLvgMDqsFfhB",
  "key43": "38cWfaVQmksFzaR5CRaKrU3wN1wx15ngfdhe3c5MQ2Gc7DfwpMWdA6XxRRmmAiR9xQY8FsyidNvLhYp8FpZXXk3v"
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
