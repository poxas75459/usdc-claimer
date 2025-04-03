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
    "527ksuirpFqjtxUezTFzA8xcEFzwWt7NScSf9hW8dgpUGPqVkU9cJAnumxkbTHCFo6Cb3MjTuYiG9mehx9tgr6Jn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9rSjwXGe4NJeYeWrf8XuMY9p26A4D95Rs2wGE7jM2Fh2iFixH7gca7RcyF18oMmC6JG4B89ppgKdgsAvi6EeLcX",
  "key1": "4Ton7Frgzx4WMvQ7d1GADqFepYkkpwh8puRtpSz7vRgzdbgBAQ9DCqP42R192ipFCbsjRHVCRJ37c71bfG1UkT1U",
  "key2": "3eFuZB5tGLTNVCAQGeF6ywKEkAiXVnLj8CARkFgx9xFuHE544Sy58vbh96wC7xtNmBt27nNJyHjzJ1ESn9GSbnD3",
  "key3": "3ScupwiXQC9LMwQSixeY787LJ6Ac6ybdiWXuUZdXqmRE2tZmLcpQ35TBDzxAnygHRDsmKfX1GbsjVzgnRgKwe6TQ",
  "key4": "2XuBtqc9zbrHw7hJC7wdbZFXWfXuAZ42qUGySN42H2z1y8XdYPmirziVT9Ma2YzmwVHUHw3G3nRQzBcSE3rFdash",
  "key5": "3U5tenCxQyK5rWcopRuKvq1sMd8PFSF6fRcGmqaszvNNauZ3c4v2GCCoPnmyMADRJXNHdoCbKVnY6TZis2qYWfr",
  "key6": "28hLaGDAXhku6ocZoCPkk5NZA8fvApsq8BazpyYWNuChyFy4TsEQRmdga7F6VYsMcJg9xv3WWbSpVXsyihyjTJaZ",
  "key7": "51e9zviYkv8R2J798srQAWFnbqxvMsCf6WonQCXWfSzawYEEnEbzzzrfjbojfcRJvDDgjPQbr5GRbwo3CkoCoZwJ",
  "key8": "2xrxHdvcbw9xcoAsTYHo7KSH7JZ71MuXVcZCBB6YecHFRk6od81qXtqxeJk1oqjasYeDG9s6TA17g4KGZyFKKKN2",
  "key9": "jzXVWrC4R9uoC24ywRdqDAViV2AG9RnzKDbbZWXLQi6PAJoE5B2otgVdMJGVJE4L45Ak8GfgATLr5kma1bFSu6N",
  "key10": "339v96QXKYUzRZTF4vHeASU15CP3WxyACnsucyLgBBuVHFrDdG6ZwADf4PGDthNfugL7sDxYAzZQF7yzXNvE2Gik",
  "key11": "gjYBnE61z8k38NZqaXNEKdAbP4kUbd7dk3DquLRWLboPyHEPXp9Bz49AqtKAM6SgUqbe1s2AUajKy9gEvsvoGHj",
  "key12": "3xEw9azK4hJVnHvBjrvQTZysA9NkfhtQVAZK9KHZhsh36XHh9C9vzNDJRf8tF39TfLJSVAFyFYBJRQmPSJ5n3FLp",
  "key13": "488fC9sjBFu7QTN878bUfcKrcfJAMiWdAEDU7Lzar8YutpY7wjjwzTQXyiU6dhinfNoRGirtQHhjM1QN4LzFLd7Y",
  "key14": "tcQH1Q4suaG89UtgeTBQexHM79MefYGFkjnduyNUFiCDJAuT5sthKqhoxKLR39Wgnd9nkHmZX7Fcqhb34qEZ41J",
  "key15": "5VJzLxnJ8nftHyuG8ky79wDC91cAzJfCxygMrKGC9KF1Nzjn7YCB7N9LEKHwXnwyfD6vxtAM6tAyQMWmeKzq7XB6",
  "key16": "3EGYapSJJWpgA7sKz2MYYHej8CbHF7B9RABgyZGYCJCAUPTa3ZuAgiSZsC4zd9MtFxD96xZ8QwGx9naA4aNh7gK3",
  "key17": "2Ectkc9wMMKm5dhf5rd5vqgLrp7vhz6vpY533WADQLH6NaB8vgjjA5JBVjGh1TLoLjFShJPMaALY6qrU8RNCstwC",
  "key18": "4NKXmqjhgjhzoXCkqjVt69uc3yoaE75i6JXPXigP26NjeQxVdgRAJN1Vx2b13xmTrHE2NDXJJFwYqoaRXdGgMuEC",
  "key19": "2VeVNqqDiB5qnCpWheSZ2T9biD6ArRKUHrwit1T5eUfH5Ahh7mD4LErEUaeXg8uiQCi2uThZr7wBzFSfwpeAk7B8",
  "key20": "5YRXWumbfj1hBvUGXpRc6LLpfomgksJqiYhGJvJ9Vbir1CcFSo3n5DmwZqSED8ekmuDAsKQLvvfKj7UsKkGTfVYa",
  "key21": "42dUu3fmQ5jM2JEtwSxwbG4gV3PokknW2qv62HyDyup1o4ZVBYAY5iu8e7oCy6WSzBgqRsjNq1QykVpQciDH8TdQ",
  "key22": "XGVxYGKDHkzXJroX1m5QVkbGx92SC6bNZRRhjZotr2hBspi8eUrhpZepin4xiRRK13vHg1NptWXvpaFhjzUbBRi",
  "key23": "2WUf1RoPg2Lq7pyMPEV3X9QomHShNC1ujK9XxuU7n49g8N4UpcU4SYUJvdTkQRxASmfa8CeX2eaNtA4YFxFY6dNK",
  "key24": "2L12NEn16G33UuRKivJ6rDuroyWFNWZyearZvk13gYD9Kbik8E3MwM5wVg5ebtaVBGAugqg3ZTieocsBmhjPgx6H",
  "key25": "2QxaZp8nFb1N9YoH9AdMj5p6HySJzBhABCTjvva6nehGGwJtHofq6z2UTGESJuKFVwdtP3LwhSsJHRzin43pevFw",
  "key26": "4796iJzou2NUWRfPT7xmnsE4kbRp5RVXpmieHLJ1KPQKi72t3d4dX2HdQhCTUttGJRtHTTWYUAVwEkoQbkPadcVB",
  "key27": "63vrpKKhd6NdTWWHpMKfvLBrKq9Mmjk7r9ZLAReV7XaMo2NhR3qu8c1U7sHsQGg9SBeDpdvWJfGt2QuEnF2S6LVQ",
  "key28": "4aTpqqn6RR48ooH2u6uocWoHe9WFh4XnUeNTB5fnSAFnbwK7LmyoM6LgEe3mPdv24bdreHEeWApxuGWoin5pNjQx",
  "key29": "wLZdv7X6Ut4szy4qnK9s1BqPADwNfiXt9fdHFbwHuwjCCUpFE3ENrtmEogTBwGamt1rDZjxcF2Pu5V1wLgRaycG",
  "key30": "2tZgryTfutuubv8ja2dXAUWZb9S5XrxqfDFXzZwkzTzj94HqPajKgzc3WywmVCGybRV57oeythc4mU1A6J16tToK",
  "key31": "4kyew1tKFy2oor25Ho1G6qpbrEvJj87f7MGG2wP8EySf6Jg7Ei5mMsm9fehWxvBmNsok91g6vXABWDDjqke3wsDg",
  "key32": "B63eLHPUezw8gHQRST8Vn1EEKbveQiuXQutCPbnykpkhv5gaoXaW2XQQxtxPfyCJd2myrUES3AcGVE1rnQTbgCc",
  "key33": "3WAa2AcUkbrzrWG15UoAxWLNpag63Bw2hBf2d5pLaw9pdNxj5ouR3mSGgJvzYi1dQJCGDxzftz3Mezv96uG7Nzgq",
  "key34": "W37F37KXKDzBrzfLhH17b31RMaG73EBVFrjTYg4hhr4WdC9MXQcgpPf2vyRTVa6qGbEwryCiAhUuQjRzRFCuRpj",
  "key35": "5fJTNWvwb9AsU4APHofiddb7msR2BDDqkL1qC3uci1sojbbRPgx7otMWVLuf24YBkDKYsfsEwPcGwj18YAdMQdof"
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
