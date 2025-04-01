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
    "3kW3Man1QAyAHeHhzXsCcVBNao3EsNNXWCYwRRSwYvmvVo8jCA4xBWspcxDPd4wJwYEekd4hVu8W8wiZyLE5NGBS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56kQZ2Qx6PFctkKPz7vs2N6EQ1Sx57TNxN77C4gQPcrSW2nMZU98KxhbXECQrwm3yPfXTzC7EijsttscGvWZ4faJ",
  "key1": "Avsme9RvUPjTLByGK2gBoQAq74tyMfpLxXGLauR8nFvqo3JtCq4mHbUCYyK86y8TgWXRZ4SNwAA49pzH9nYjmJC",
  "key2": "3QsfuG1rLDf96zEBhspzP7jF8BsTN2E4r2hGUKLwAruopFsKRdsM7K7qnZBFpTkEVf2X8hbubqj6tkisiuY8G9HF",
  "key3": "2589FgRjdFCXt9BbxZKtTMDeMWDBG4iNXMSDbk8tbxWNPAYD6eH5DT2xox31oRe64Y4K4D6KWkmLyYdU86qpy3Zn",
  "key4": "36sbfnow99WDEddYUGDT2CyuNEq8MNADpVJZ23mQ6CAsLAvh8BczVKwZfsp23KpEvucA45zsT1Q9DBp9RzKSyR7Q",
  "key5": "5YepUGuZ3Ncj5eZZBXyskhzztpE648W9MrUzsHkrKNArgb19K7f1axoG7DUgqMLvZUmGULE4Roq9kR87CG1EJQkL",
  "key6": "3sEHKXfGipj8ezZbGwv1mwMYo52W6MrWszgFXwbvhei1sCAouHESAm5LDjNwLhyRzjqrvHiU2EpjJyhjRDwzZXUU",
  "key7": "5K2W2fDorsa7s4eBf9kWwT6StST4242ot5fj5TSR5NcsaSAkYQnvk7PduXbrhb8BbchcuQSfdESzRbyeNGPghhVY",
  "key8": "2fwo4HQUghzansq88jX9zEA2AcQDwd7kA7G4pFZq6wMrf7WTdTXt2L8pKtmXz7uJLQaFPZoxMdkSzmZYU5hQMkGA",
  "key9": "3mJSmkygVe3P7nFsVegKZbXgvXiqaXevymDR4JoVoFtPPNhSSFzMBLxGX2WAh1K6CJF6r9xvdByA3CqMAMCuXsiU",
  "key10": "3tRaAUYyhmXhVMJ5ZMvcJcEcUCkRdVzsqyhCAp2skuHAwGdDNaBz9fGTEiVL2wvkksG82ywAEE8AFuKNcLpWw7ff",
  "key11": "pTsnuMVmBK79yAwZ5yh2tPX5s55vqhSbcW5YkjjGMSY3E24sLoaxwto15GgTivJo56PGWtCCeLdA4ZKY9e2U1up",
  "key12": "dyY2gCo4iV88izNk5C9prSgWzHaQfpgJUjw2jzqC5eLWvTNCS1ozU6r92JEUHuFzPGXdnny3STM9qJy5fjevcpp",
  "key13": "5R36BuDcJpZCwv96Y8uCLdrA3JrVCNqrzAheDEruYwPvg6W2E6q8xK8rUNLJ3gJsPjPMMHeRYT6qQtanaB2n9XfG",
  "key14": "2JS5pGFgvYnZeWQLXeHiR26gXDGBeURUghZkDY7fLAz1LZfWo91EmD4vHiTAES6bzKWsJvxs5q3yxQmSSMQbVAG8",
  "key15": "LU3NaeDQY7NTVz3ATaWpujAsTZfMFpUVop6Sq1HsbYZQxj7i1riGQg75qRxEBvebAkrYPscGhvG4MKgtshBzvUd",
  "key16": "5ScmXxb7pSZrAXPEfh2HG8Tr1khiWJs3hKuAW8AneDSPKehTvpCeaU84LsDeCHPCY8RxbeyU7xQ3uPRfMQWKP26R",
  "key17": "21aiAFgPWZJmLjLA7EeCJHQor2rQhdDDwsjiszfCsaEQsQ6qpZMiWAmGDWDuGCJ1b2p7vjFPG6tc6ZKieGbeV4K3",
  "key18": "58BJPy516hJYXAuZi8G9cSz49PrZLj2cmz55cwfyp78wtKijy7BFzBiPiQnLjv53Lp84wNDZRKRx86qiDfZV3tev",
  "key19": "2pkPgpTcKo8uzTZvFnWBkvnzQEn8WFUNcSRYxEJmEjz7qSWkkgEYFPu9fRMF44hkgd7qHgAyyuMJmugQk64hVuR1",
  "key20": "5NV5RdHXjQwg6ZiyAuzSW45RXY4C42z8hN6FvjFCizYXjsU5Bx6DHVixk1znKTx89u7D8TEjN1FLA8m5MVMXP5hY",
  "key21": "647FTzh7PCAL3Ui2cUNpAkhXKErntozKG2NVLwnvFT9EVEbVEw1NbtkPwN59QHCBpKSDywnoPgVou7hDWmtwUET7",
  "key22": "yUUzBHxJC8Kxtjh41gEMBiELvJU8JDmLUPfDdFTd7qXX3Bso3rJ57T6R6B9xN7GmXNAvhvn9NqvW6WSNfGyxT6J",
  "key23": "3UwHMws9Pq3YPz8H3BMrw7etLmk714qCRnDjJsWpVWQSyeoiagmcCMu5dZJRCPAU5MbPX5pudP8xN6z9PDdSPbE3",
  "key24": "5Wrzp7gx1rTAT3ZhDvSiw7TtXwtrTwNvXCfzadzTLTu5RHKnpFLkZ2wesjft2SNJS6byqbZK6CUi484qZRxhvZ6L",
  "key25": "4GpaqjzTyTHcEF4tyKr1hM2NRv7Zn9MxAWcLdtiEt3ZZ3TSohbpQ8BSVogyAemdqzyREd6iHbUMyEziGeWBH6K5m",
  "key26": "2RsGeZePt1RCYrLcMKoPyXYuRv3WUcohRuLFnyfDpoukaxvz7fZYPVcjhZgPUYFqPGjUHESpKTS7UW4Ukqi2dyt6",
  "key27": "5XYwvRp4D4wqjyDXYVHowGiXMYHbaDeWFw7Q4P85Mpo6pxz2fQcakkka9K4KFb5zoAzdKDtCgbNjiWViDt18Hgmq",
  "key28": "4kAXeX3q9pkbMywbrMEfxRwv1GsTj1rFwH5toMpPPFQ9k5nPvBs5mXuuRpVUgcSVUyGLNx33D25Lt42Js89ZEGjw",
  "key29": "4SwA8yqYVnsd5vhoThAa5t7239N7dFcRCyiZQizgAf7LZ2ifq8t1NFJYXgtyQcMBZMiypPgZsAzJvDQE5CfSfW4p",
  "key30": "2YyiBXaiZ2n5A4pKFSVbJSEHtR8LC6FaPqwjjUg8BtekXNwM3ApLhK9xzeyWUJJ1dbdcVVgxw4KhAL2fjJMRzLdb"
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
