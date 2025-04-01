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
    "4APuKnsBtiwESVx9S9byJsmzKJdC8tU4TjKd2cbMdptLQLmThjzexpJv65s758BPpDS5zGSPyFSpHmf1DiuruLpQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EbgjxAoGC9HKHNxNr2EiYPQTvse9AXdqLD8swveye4efXisJhAnSff6ukDcDSD96oUxZRh7FT8xRKrjN7oL55Uj",
  "key1": "56vqYDic8DAaZstUbgwcrZtgXaho9hYC2Yoi1sX6vDDE5ELn5TVnDjUwccpsREHrtbX1VvV2A6Ku3YQce4cfeYkQ",
  "key2": "2AC1nKnCmu5BtYPGryMpEB4AZJB6R7V9R1oUMNm7Dai1D3tnqfc4KksZRRLSNkyjLxQ4def5mhBM5YZRVSFXYXM1",
  "key3": "W9FzZFQddhLnaDXN9SQS3ymHuLGkVHCDzujRBXhLMcQrYKLdj7gWC22umReUCbr4F9xRqB3Xakitr9R3WGYR6ye",
  "key4": "Prdasyv4BdQ2DewQxan7HByA4XjMGPcvmwsmVK32KdC8cK6RD5XriVcFzyXN9ixGLXnLhciQFvjMuTJWE7ucYC1",
  "key5": "4q7M527PauqVDaAxmqfm6r72WiZb5eQEvatyEYYB4wmFFgcu2sU3afpA2Cu6hT7XxgrRxXfbw83QUQ1LGpY7tRuG",
  "key6": "akLQpd6gaUyPaTH8UFBvHQtUqSaffdaU5sS8yNV3wLov8NJN69nm1wD3pPNiptKGLTw7w3umSqgmWsF5a68ULfj",
  "key7": "3BG79WHgmhoMJZSwZG42c8EUtkHxQS2J7FonJZxEkNyFWK5ovz6CRoeRSJBqSGZtibcKC2RcCGzF88msBkPrySZp",
  "key8": "4xxp3ZbxpmedoLCpn33WyyJXdgqKadSnFoFPobSb1vS6M2HgxQXuUFySbLPp77spzjzf5EUYSrLfZiL32jXTnoAY",
  "key9": "aNqnbfEuNshkNyW1LuwfLEj1SrAWLQkmDvsYVHduPoWQmj4kg9g6ECPJCEaHG3iMYRjZ8UyTtxw5khwSvdcbZ7Q",
  "key10": "2YWY24XVMMesrVSPd8dMt5bzyUvBPSUGGdgKxdjYZNtZ29G1451uKnCxGwTXguaVJM3mW6URvfsS8pAxkiSRHH1m",
  "key11": "5k3oJwPa6FzMJttTvxcTbwUXUz7v8jQhiaKrGc1SLuTcuQpQxjaCdriFh7TkHWkDaBFXmJKZfw1AomCnRw62NksZ",
  "key12": "5r4bioKKNbvBNZ1a7AXQiMesnZrjA3pQW1Hfp2yYTeeEs6DyCFbg6tkcWd5faCaPxkzFtztxnepkMxDU77vBN2fK",
  "key13": "2qMj8FXCW5wb5ZZVNChNAVD21qq5KqQeHyR1aspRC2KryNpxXQ6fj2DuAhsGgzfDxnTHwwvzmD93xoNgcQXD9muE",
  "key14": "5pghjBo4P7BRjpCBkSbAd65qgL8HErDzkh4kN95QuEJiSCNu7yAc8mZj9Jppo7sk6WnWTejDBH7a62dtNLYq3nci",
  "key15": "2QjYjCDWkaEMweazoihqXLezhirX6fb1hUCCbbcH5u9JgyUJ37jDG5YpPwWvxePvo3wQu2T3FsbAo2vgdna3Bb69",
  "key16": "3KoazB85XNWCekPayLdgDW8rkv8AKzHPCLk4nd1ddnngh8fdZT4mfbdKp2zUuJjXSpLj695joAzHUS1WXS4AGH96",
  "key17": "5YzU2VBabamwdSYQEtsbjcG1PReFPaXMmvCShj8pxiqDooZHv3tAxVwjiFoGBipjg4NodTcMiEzHN5FcJPsuKXp4",
  "key18": "522BNZMjkXcpf3N83kT2LqTWtw1J24jVmKW6HnJvfuRDe8rJKrEc92yqA4qRPo3GDzsdXVnEi5k28WF2jg8LrArR",
  "key19": "21Mxok1vN23MwwbmVeGBFocYHjnWXHmxvHTce7n1DkzyiXW9isCmrxq9R7VhgLnoXSZLpqW95FVuiV8GpBa5jYsD",
  "key20": "4A6z1xxsWyH5opJ7t2srR8YQqXcU3fQ9EDBgz4nzV9xj2z6wJJGBnme7cgfAMnRzyLBisU4WbghLf3FEmAK5Lknp",
  "key21": "DCi6CxLcmsZn2rWkR9xJ9Xgaq457szqri4nHz8KDvFfJkaq682Rm8dC4GewpundvX15aUJyhS2gZUy3wCEvWJbS",
  "key22": "5j74qn3f6TisHAUXsYh8z7KXviVQHWJL6E29ppd9tif4KSkgC3T6JsnwV7KN7gn7bwSMoz9nYcbfi5mb7omtPM5M",
  "key23": "4a25Q2MsbubmWcJn8BNkR9aszNFZQALfPu1CL6yjDXLWeSdbBoUWDfgcjXDU8vury2idCPHZHCTeKDY3Eu9zty44",
  "key24": "5oBC63Kagh3HNGBq2rf5vLuhtDnQSkksQfvALkoXpCUHvr6khpW9jqsYyjJXu14pRwKvAik1VNjNff4it9V4S1jo",
  "key25": "5Jy1scKW5kThnY8mLvbcNG17AMfkrJoTdY2wtA8942bXvu1Z38MRUuGZWUwF2q3XNLNtBLCSsPYSBx1Jz6K2wNyD",
  "key26": "3AS8rA5PZjnSFWj9Q4xYsXkcJgenSNN26Br4mXCdeLydZvEnjxGd8RvxdvH4gY6b14yjUC8rVhsCZ17uYVhNMKZ6",
  "key27": "2FPpxcUBZFDKxKQvZZBsAyxZSeVRVZsSNyNJiNN87jY1VVAFjoLzjDHqLfVmaicG3yiwr2QqeKct3Tu2f5GG4NEJ",
  "key28": "3EA97DwCjSwbCYnjZnFb48SdToD5wxqMMVhQ66hq4mGizN7i2WJZntWfGocqyVM5sLtJU3CeYWGjEbNoCPQmi2Ko"
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
