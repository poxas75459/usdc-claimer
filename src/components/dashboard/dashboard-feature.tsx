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
    "48c5PL8G7UM2wUhxfasBDSaxCZoqiCQniJqEhpykcCdnqwngMrAtR5bU7q7Hfu6JJqZhgUpsa3ibBsT41QeJexpF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZG9uMMW8FTXd7c2DamTiQtbf8cwjBmZWdiBP7i2dcbkcRvEfwonTaQg2kdJuHgspETTr2Qarv65hioGkDiwQuyF",
  "key1": "5Bv7si6QP42Xm39T7h17vq5gysAmHBjfa4VffGGBFqmdzBtV7g7xig94ty5gdjT1ScVAzYJ5RznfDsJecC2cb3Hz",
  "key2": "4mTTarpTqMWWyKVMdWZ8gozQW2Cx6aN8xXFYG3XYFwCDBASxbsk2AQfhc4vzWRFZ1iTt8QkM2WYXtUCXuo8G7rDA",
  "key3": "2eo19vJUXw7xSizXDYQZVaNJjMFiArB8YohFUKcdPAiC5UQwpyQLsZwiQPr9KCM9YB8JT4GcGokUQqyeu4sDzHcp",
  "key4": "ZzsXvnCVE56C22r2nYPJ7tMSToP3pMrkDUMdMyB9yxERZweSkwiixNzp1wi2VnMuzfDHxNKZBoiDHSeowxoLch4",
  "key5": "3AcmqCfgDvXnhekqnAs1T7sVb3P2TRGB4kU6hZfT57pTZKPEnMajT1h3X1wUMFbSJPdkHd2ed7beXBLLp2YKmtim",
  "key6": "4ShGk89x7Y9QCcgFbWoM77hG2gwBxs19bVbNntUsmyppquKcoMR5QfJiSfzk9ijSGeJYr13jx3yJgXnjLEWn4Dwr",
  "key7": "3uJdm97JTUtb34QtibAb9xFoCgpLhCNk65aLLB8c9m9wkkPtkU9nP1knqwXSd3r15T6K6FYoaKbyJ6u3srA7aC9z",
  "key8": "3Bu6Yryadnri8PFzV2CwwCoGx8C9waGB9VfJvJ2XUoLSdNpZQQTkzAZrEXAyFMVAyKPmmPQcfwAgrEoqjtTZLV4h",
  "key9": "4zp3esR21Zb582PmdQb4c9DeTTvBC2nEHvTbFomftETcZWQtx68HMqRoUehyrcd47m4VdWYzBHh88ArzryXpNFwH",
  "key10": "2ZC9zivpBGqfLcJsg2t3M4TsgUW1bD8yv3yT6x6wVXkLfqx7N2RQdAU95zvYNsNCeNezdgn4qEGZhZMASFjApPYf",
  "key11": "a5eBA1ceGEpKHESR47euTGEyy6sxWYCPDkcaQyeTj6BibrrR1bRakVvpTqYN4Mf4Kz2vV4WPPkSdWYbEDgt7Jy3",
  "key12": "4ipZijHFr6x42MRWwSrvosNaMo7bA8NygDvTSB1fSuwYUd8jgs13KvzUzxcFV9oqejPGhXqQ6TqJTPLizcLHya2a",
  "key13": "5jFvUP8YFqeSrNp3rJqpmRtidMTxWUcxkX3rtR7SjRbgUBjbxECoDV2qKz6AxThqA8sfthC1s2rnmC5q96mBGTNP",
  "key14": "4CwTQiZEsY1mXeyiDL6fKD59jMqpMSgMNdK2UG6PD9i9QRDU9yhmt28ejZB7fn4THaepsnXYSnheSJvmr2qVKD68",
  "key15": "35tFVpwkogon8vaXEBRB96Q4D5vPg6WCdsrndYvsjRuwZhtUW32AmsUxtVbHhPntPDBfmj4jg6upYoVpgQTUM3X6",
  "key16": "2eXrdvWmdbJkcpr4DwApnySWpXzoPos7MmBUQZ3sZ48LHKKt1n9uUqwJMfzjKHjRosGw4NRD4mayVbKV6vDqZiLm",
  "key17": "oSUt6DmusTAZsw1SQ133QJx2Zb9uWtm14zQPWgbidAdJAn9JtXLF2biXdeb3FWUstYAvS4eTyi4zYzQscjzD49v",
  "key18": "3egoLxwN6K43qCmCRFhJwvsHR2sdADJNvhU9GTUb1woQ3yy8MUoAZc9eVWehczvRUNygVsSra36MLYispYiXQGwU",
  "key19": "29ioDsKPYjBaucP1xvV8APpyGqzK2BZDjS6i1DU5ozUBohFhAoJkr1ePsERNcEfdhr3rkRsCjJrvG38XPciVcTom",
  "key20": "2B55E9Bp78593KNqyqBZbXV87qa2sKscmSGGh6Wh7umbTsAChS4AgCNXiV74SLk6z6FwTdQWmCJC4eMDLkPXGWY7",
  "key21": "5cnaSELfZNUaDTsdxZFJLXczh1xnFnA71KiZrMtEcUHZWPX46Z3c4CnR8YNoaPY1oB8fRHuz4k7iUEYBzpFVuxzM",
  "key22": "WGXR7zDBK5EvpJaqSbTVeZiyAAir2Rm6KGoDSC6rhgw3CCt2JBvsicvt9CmhgiatRdDF31He2MFA6nzn7fDymm8",
  "key23": "49JGFBPVRBD5Ba5n4TizBcmtvkM61DavzRyEHHXfvXdPBS4E9BFbzDkWrVtYbqrF2VnkQWG41mQqGhukvRTkJ5f6",
  "key24": "2ku6gqxyEZ3hp6jxoRS7kjTtLYifoZQFXioDKpEzBj5rhRvc1DBUASz9BTemyfo8PwKTv9n2Tqk6WtJUDBQdD7kX",
  "key25": "4LMq77mm38V4VhcAnRVyWeRQvC562fZQr6wd4oUfM54iNuk4TMCy1gT73jvYUBwPvjXqyiy65RctLjk7MPmEWi8e",
  "key26": "596nRhUUfPxXhJPpdGwGsLxLocZESgZty1hiwMw8GkpXnJN6qqocEn6F9J4WNz3wyDcVYPifuFeJmxGVKADPQ8qm",
  "key27": "4W86j2d8sG4UEKukp73CpX34V5vtxWaDPtVazvpVSFZr6K8pvkSHuzu8iGwvP3bspM7jdWdjgxn2Y4nu7VAHwGgN",
  "key28": "39MFvMfUsN3HKuU4i7CoQxkFsKviZRmtZDr3uf7GR3rxjQg66Q8rVN5u8hyNeYWFunjEp1RGf9zkhuyFEumuH9Vm",
  "key29": "3U45Ke9DPtBQVBEZQBuzorLMTaHPhoq5NCeDXgzsfdahRo3ZnVC9kwqoBTjkLvUKNH1y2vhFrdYnoHBDaJZXDN4Y"
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
