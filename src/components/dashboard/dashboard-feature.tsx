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
    "4yimhHjWa5pCgeKroLpPo4RTMznqueMK5s67JmyGx9DsJjsnAhgcUnCAKt8y4fxCMrbWJhZwAGLYP32GznT1s3BF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cvtRPKGanshJuAHQEZrdyWnWDcocr8Bwtvr1HtuEidwMERiyn6Q5gygQZYobe4a3oijC11ph1jms6rxJJGMyghr",
  "key1": "4a6XBZnzd7zb3NEVeimqfgoSN2ajerSztsvJdDD8xSidiGcmGrAM5vqYht9LxpwDXMGj1ASfqgE2bhKpEQWkatYP",
  "key2": "4KqtfsfwYcBECREtLL1a35U3r8CSgYta2HtwcXGeWEojNkLtHmsg4hhJTh22Qaijphtd1ytTVyeuZaas4x8d8MMX",
  "key3": "3uXDTS2UTaHZPrGtvh1HwGrt69yM4PM2EBgNhFZaF1R4BD3BAX5L1WS6QHWjz5nxtzNVZegwiZijsAPdU6hSosKt",
  "key4": "5dP3Q97v7wgfhmM8L3PjVsQZXFtNv7VxeVAzMzZhdE9ikNhdntMBEgLn1gFchVVDALA2xzioN78ZVaoQ7zYgirWG",
  "key5": "2GNxAhW5S7KkpbrbiCVx9PDT7QsGgDnGuwhjyKUvgUte7XksAZccjXVnCzC91GYgKfFRcXPE6ZDFCSmdxDKkSpFR",
  "key6": "5uuKYwDSvBb8KDLc7YYn5FYXWSMjHwdT32QJuBjhwkijvbngbZBsajA6fe4ShrYesHm1LcarTSqA6c9gHjirqfY5",
  "key7": "4e1SJzp45j4JHxAUz3X2xqUV2UPxJZh2CUmSUSjTJ5jz46mPjrGWeg2qqQNxgzZKnGf4NmE2sFhtuK7bvFuh115A",
  "key8": "3G8kz5ssMXPy2DW6JmpvJJuR5guT9G3xDKswjVGS45iaNTpacKc5JTE6gFy29EHVUikj2Le5Py6LZieqDWtnUjxh",
  "key9": "nPe4MPrSk6P8z9poQ2Aqx9W7FMGQXCCjhdwi3UPxFUbG1fbBufpSyn2q54HBN1MUqx2RhwcFuMPQrsQGTZuCk9f",
  "key10": "37bhvGq46huHda5qsAvYNdncnznQ61b2VywynQhXuZzsCbGxBbYDuVQ3gnS767a2ieRJ3fwr4NcYfvizQDmLgLho",
  "key11": "swGwpY4tWTdndmoiKgGqkAd7buVMxyLVHTSD1n64AG7snh1XzEZzVvfbbbcRGprsV1QgftRUaerqZL3emwdXuAa",
  "key12": "jrNWLswTzgDW6Xx1sA3MLUrYcAUBCiYQ6mJMoZqx28RY1h5hrTekeFCL5JaNdWMb2HLjnnxDdhMqoNn3Gq2JUP3",
  "key13": "3JPTfutcP9hF1ffQ87JbTQE7bLXAY7x9mN35vUuAxv5CTS5r7u2bezqfVrVBoReJzn4EThT4xZ56k6JGkNCe8eMC",
  "key14": "59CCod3TQ1bXYko4WR8QFi2MemhyCpktNRs5ZS5ybrunFFnKKWDb5nPCsVezeudQQRzDpigFBfLZZBSsAVCwB4zD",
  "key15": "ivXMyEk96yHiuHGDCrWeSXxxse5sgGt9uatTwAWfSnC37NXopqT2xzkx16bwTGGEg2T4cSUMx1LfNheMNQvWhYt",
  "key16": "HvvtMsjBWmD8GekeU1sdj4hn32L6eeXNbnFyX9CkV35BYMEtz4kt5W4oqVd3vQcYaqZ3g1k6XGUDWrxBWTZFtAq",
  "key17": "326DKjZecErV8R3ZyU1YwDUPbQscNrqEpvrQYPuKXdp8DrQwqz8Y7GwuoS3vwtgfjGD1BMkT4w9nELcKEG5q4sUm",
  "key18": "cWgP5hm72MPGfJmkTDjqaTZNPkkzx1N8zpGW7HnfJZpXyNeQs2ZbnymrQU7THKPdSNfJkKbSmHYw1BYRNW9Luui",
  "key19": "CbHrS3tYXXs1GiQkDoqwSBUEmv5cQQ9TgBXr2FtpJDyXNTDR6TfdohvYzDbtKyDXyh1X1BRqGQomKgsmBpD4FGB",
  "key20": "5j1fJMJ5yD8TAZkV74VdW3oB9vLLwLZXc2FVmkxazh9CRMhuvT8z4faUF3nnRveCPNhCRAkm8My1LqF7ngP6NtU6",
  "key21": "3FxA9iVWuei7Xt81bD4WfdSiAQzA6Juqj7ZY5Gfr1UkQ8osdrMViZPSU1V4BgfcAutUPsr7Y2FKuPQtd1AuQrpGT",
  "key22": "2dT7RsztTaQLzm3LzAh4m7jkT38TUtpsaEYfSnYo2gM3fNEZNhSZ5JypfKCa78esYSVif5XHk8wExESFJTTZFNEn",
  "key23": "4i8UBk2nkamnJvNnRu2aEk6MSxc6PFNKRatMsWbSSuGuicDaN3abwHn7cVfjWovViAEUUW6ypKYJ5ygndL5ABSz8",
  "key24": "4rHm3mK2dqaddfECTgD2nt5Cbu6fCKQk48jwGJx4PBs5QnBmjStZyoR3RJRfmRibKvEHteHZHwJihNFddv7JaZra",
  "key25": "2LvkbU8gfa3RpdHkSx4MPeVXCSgp4XGj8RoYN6xCf5Kf1FLrigJHFa3bfCyAzdAfgKtAqgXr7tWviTMYFt61WvkH",
  "key26": "5kcVqafVF1gukfZMvuHcSPzwLqo6ZjNTRrmc5UNuq5M1SJNU4m6pfH3HcXg9xCvmRe9C7qEhUzcYVHEMdRUHRR9t",
  "key27": "4t9LzcSrTT3Row39se2m7nErX12hCcU6cPR24TavompsbfLh2kujVwgiPkAMBi4bUDanhAxBfoGsB8wQDfq2XMo2",
  "key28": "5Fywt4aZQg6eDVK1spnxDuhyiZSKKpf3CNSAzcWYQ8Fz1AoE72KYUvxgYFG4PFsrTHiEWCsKywyqpS1tR51hZ5fP",
  "key29": "2W33xonKQVbWUkPMC6JgXByaW5zd7S29VCk7wKoHbAF63NW8xBzGVFwDcahjKGm5vafv8Z8nTi8VTSd7NtZLcMhN",
  "key30": "WeQpazcB2TMFR3SrJsfb2dVEr7s9iqkzs7joxD7o8hvXMYXoFcEK5UAs9bXHCqNHYXdyJTv8M65en4JkY5mRc3F",
  "key31": "4G6orRmbXPMh4n3pSwVF2mKgKApPCKn1XjKkh34iXotvd1CRTrTHUq7LRc39NLDnzsbi7Ys58DGQppGszyz7catK",
  "key32": "iQTUGk8dp7cTCd9eAq15Aue766AVh96CRBecQkGH9NVTtDZeGW7uFYME55exKGkU7ryASw3ZyPXmeNaxpFBxH6D",
  "key33": "oBPEd67RDatFACEBnXeaTjuGcj9Nwv8GawGVgcKP675exL6aESBY1WZZ3K3wQzXFDQRCBYqWdsBHmL8LjWbNYzW",
  "key34": "y8oWkWT5uQa8KsXDag7aXqTd9XAwz1LfETyN2cCJxpNC53JyC4nHs3Zc4h6GpZQDHYq8zD3yDFnQwcPBJBLWWis",
  "key35": "3bno7CAhzDKb3wideXW2xJSaVZHWnrxWKejhoU3c5pyeX4L9pCoZrZQcaWg4BjRt1LRt1CCCLUMrR5BrcPf9GkTo",
  "key36": "bm7WmqYcHvVza2aUM1a9rWWbeSASx3QabE2r3pExf4qDk354AcULPZEiUozqo1soWuzwA8qVc7pHMJ8BkfXS4M9",
  "key37": "4c2ayb29at8YmTd4jZYrQtpejWajBPRLojgRGikTyV54YWWfWixEYP8cdaVS3QnDBYdb5e7Ykz7597wMuEmNjjCM",
  "key38": "msDhKguid9Lw1N88XsJtkC3nzcM4cCftuDVu17KrWFPWcCFgj7oyyxTcBo22TwwHGxDJPs55VM5rMzpFihe1oa1"
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
