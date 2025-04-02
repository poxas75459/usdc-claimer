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
    "4ic9gEfoDnp52ewzmvhiBTMty3nvr6pnpCara8WEcWPb9wKs2tvqAuTKNXJokqZtB6633HuS8EhSd76SWsJZaxBn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27HBPZW7JcRPwjtZBsyrSQTShaeZ563WZrfewHKHtdGz261RFJRhEfcb547KQVEzZNYqh5qR7dgW1cMMnJ9kT2nj",
  "key1": "Dcw3DX5tngqpGkwTpHAoALCmUp5YDM7rL1BJt5vqqg8CFFYaqA8JziYgzN4CwC16J6pMbFPdJGZHQ4xbYnucLGA",
  "key2": "61Ti6egRY3pYQcebkHzud8jwjbNC7zcHJGo2Vvswq8ipBLyXD3HGxGAFZMU9CgLMkUBunyzNTv6SVtaSmHYHTMri",
  "key3": "44onP7XZSfQbky9NJZvcM7tnvf8Zg3DKqV2W8k3rnKT5mvnEF1FuxrRPyotuhqw11fAakGrcdvscAoU3jQBHUGjh",
  "key4": "3UTGdtSiqx1ejAiCsRz7Z8TQZkEGHxjMb1YcnWmFSnK7pxW6MwrYdw3q3ugRVghwMHT8NaVPAY7511drpghADS3W",
  "key5": "2CaoLj36fxzMx8m6JJztLuZ9ncwTR1F9uwag1AR351TRTpo7iiSc1jMksEFqKA9GLeQ4RLVzprzhEfM3W1AWfUNA",
  "key6": "5UdbpZFXEDV486maBzNnNVA7wWdNrC4wt9miNCnaGKmhmCJY5y5SW9WyKfthUdDKhLZoTj5XQF7ooRqRXuwa5wgg",
  "key7": "5UHgeLQ7LwbeaxTG5SsyEWie8JWMB6HCYcGAuwfdDVLuTpuwq1bsDtp3MhgH7yapctAwd3FD4T2G6Wsu18JSBE5F",
  "key8": "29EkQ65yHW5LT5F7FdDzjoZZTcnFHMPQ24Ru3PP7zrMMkMNPcaQM6355w9sqCpKSFr8qsVhZDt6WT7q5ZmRjhbxf",
  "key9": "YpQ521ADUD9ymZkwCChZ3KBaB87E1zx7fCP2ZLiqe6iyp87rdth6N7fmPccC1yvJGWBVMLL1geaWBYVdX6Tq53J",
  "key10": "5Kav8gyCFMdoSbtsbeMireu14zkeDKxGTc8jhHycnvEUFTs9wgocTk9nueQMdhBDDdfe9fkqeiq8KDK6FNpct5jg",
  "key11": "wmmBCWAnELesRkxvbx9uy6PgohwsC3KXVXGAiW96wziu2JweNDKrxAUFUinRQvNaVg7657WcBGRoRNNc5YZaYWd",
  "key12": "59qou4pgk54hVLfhaNBGTPBkZPZKjULt18Do7CbvG1ZZCz3tbDX7LcUrJfKqoMhkELHE36HL9wNv6yLwZgTh2woJ",
  "key13": "5yxfT8NboKWn1WzGJZtKQ65CRKtBA4HRoHCGKFDe3oda5zb1zBEe1xiYj4yeo2DZLGntZ9aK3VP9wdB7j49XWxAP",
  "key14": "5eFZK2Hg8DkSJXtSpajCPg5nrP7tUswMxnB5gaMLSjm6eFqQTmbrkXWhrZiPLkjVZDyAk1WaFjfuzjaSvfxLVQGx",
  "key15": "5DejasAHxQ18Gjci2vR9GoTW8zkS3HC6MHgKVFQeDGLddW3XL39cV9h9ud5gAq7CrJPSvCHB57c7W1mD3UkoW4xL",
  "key16": "4sRLvC1kRvjnCGpvsE5SrU6baeg7ES78VezMQgcBnjUM3s5A9Q7sunxSLrekfmdcNPPJH5eufAaJczoGQSvytWkc",
  "key17": "24ja5pxLZAzzd2j4QXw1rPGZ4VcRpNetncDoFNeKddjs8AeCZGNM3B9wpQy4nSMCsm78YiBszpZprvU6ap6daegu",
  "key18": "Yjca2KpQ76ELC9N7JCuzvxBNLEgmBoqk8Xj6NeQAZ9AyxxF65bdQ9hpt4v2BZTKYKwpZuUnkJwCHT2usB8c7TpZ",
  "key19": "4LB8j2EvEiARonhuC3kXKtndED9KzykSsmCTcMwptRkKUrsgveS7X4knzdpVVvZ8HzMMpVTCZy3LUHYZGNe7g7RC",
  "key20": "2Pj98z4DLKUR5S544XZ4UrQYNgqdJazzSbgqnRX66gT1SY6wL5vjwqoeSLsW3gmp47YSwFHFxwF3gyoERuRxqQis",
  "key21": "Mbr7ia53s574pjdEPRZKVj1d2rZspyhhwbwWC4N8Eo78LagJhwcmKWTyj53FfmebDZCW11Pyb7gq9x7ke5CuK7o",
  "key22": "4qP87S9vkSw3JpF2FHTNQYGrUtUWB3yfYS1DLfBKfkKXjgeToLdC5TaLgHDQmJBFP9FTP9SDsUZYGteX4wpE4XgB",
  "key23": "4ps62TNJswRDL8zUDgMudF8GAbW8dfbpqpi1vAuHv3s74PhVZpp4Rag5AAdLx1jPmC6HD8T4XdtfWdvvc133JZrL",
  "key24": "5aQYzmxzz6GqYPTHM9GU6Yyq1B2KGe7J2b7KPuWp6LFcaJp8XDqxCf6YvZgvbDMiUi3i5ohnyrMoDffSwyzMAAW8",
  "key25": "5kGHaBfciZTKJVBkMm5hcCner48y59eoiGG8g67HfVPVmJm8YBxuTEV2jnuqUNkm1WgF729MJHyhbYzTEyneRLu9",
  "key26": "4FyXa314rbVbwqZ7WXUyjMn9eRmyBzWQiX6pmUQWne4k9ms95o25vcicqZwha2YftFnqy1A5G4evnMjBzMwU55va",
  "key27": "27HZKcUYQQZLiXjvwk3ZTbaNMh1i379VgZ2MpqfapLBBR9Vw9J1AqVGvD9rCk3gY6V8Srt4ZLceGNHqUu8AVaKFY",
  "key28": "3VGVFMiNJ5sTHrUFoQjczwkJxtiTunai6k2fJCjXUNoZuFzFhLr4YSbCze9oTuZZfs19VaCHLKS3YNGJh4vr3nMv",
  "key29": "4LSviRGeu6aiKSB3Ci8SMXTv6Ro1T3Xst7AtezqvtQ2z77b6f5SBbhMsSt22Dhymm7BE81XnKHU8ipFp8ULEAtzi",
  "key30": "47VVrEZYMGj6K4mMezy9JS82jKsNcXsBjNkx5pMfdPsowES95GrKMwHLpvJXBM5mnATa6q92GFZ986nEUdfJfpmq",
  "key31": "3fzGhAZmD9RunU2Cwq6KgZ7DkT8RrBW8B79SCBduiw6k6HZLbeS6ZwZBsqEqN6aDxMWMU5uuDrQUC78cmBv1WLxf",
  "key32": "4jKNUcucomwpgEmDvnRdxJz5avA4gu1yDdWvsoYxLtiVYt7816VaqRXSz2rZZ82uVJdZwn8aHepou1QTyGrWaEQA",
  "key33": "398hFRpUGSsf9XNHvuX3XfGsZJwBCFfrTTejRFvh9JL8cTwBNAbnaGYWTt3vfod3KdTebe4bRrU7yrQLickR5rXF",
  "key34": "3ReSkHPSBMYBWMukes34Pyp6QBpk2W1RwzVQHeu5X2V8M2ehDVxYHDgnCijisEfowRZNFSWRjPmZmrELmmgPCda5",
  "key35": "wAdeN4uw9Fnn1rGkZh6ML3bdUysSv6v22LSQemtyiotWWx7pTmoBX6mRNGsj31JRKdE5xVADJTHe5GyC6e8zqV4",
  "key36": "4WQWqZz7aqCw4QSFZx98oBFHnDVuNFbrzb5sFsKVwzoos5ne5wXuCCJ2NwYA2bV4NphZk2SNtnKTi8HrbHtNZzG8",
  "key37": "5cA3bSgTtDsoAkWDh1SvsxsP3gxrNE9M6DR2eLGNTQETkttTQoZB2RXDddX3nPvxU2dzrnEN6BgFxAatcQvbZcGA",
  "key38": "2ahJ9Duwwhmnipx4kvVxARgSdD2y944GXHETQ7HSjZDcocB2wXDFKKqKBm9upjWGhJa77fzNdaTBEGzzpGmbmdD4"
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
