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
    "45NBuaQUFj5i9xqzckKjZqv3Pf2HHzRXjhXaHSthELNq4wDCWWfT5jzeiraRpo8uZgdSMM7oKsihbuTDcenBxadD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qx1WzU8jRY1Aj2miDSymtQx2iBs7xgKTnsNpx1zfyBxiW9eR1tnyLzSovyXqhNNvWZndhbh4gLetettMQT1CtKf",
  "key1": "5jono4aCGhRihyipBfKvFmtjM4ae1GMv2u7KxwDyDVqcD8Ee1ufUDSztJ3FrzaW4DgdYHMdjAEKowFEZbcfn3jtD",
  "key2": "2teGHnSWK6VTHgFgMVshwJuk3LZRpnShC9WVJHXFh7tsfCkWFC1yTbAYEFmRnsoPmL7uBV9YPoFYRJHJfpYsCLaD",
  "key3": "gdSghQdV1WDY6aeJ7sHaejVDCFJ9Ey3WTfUJ4AtoxuqFzkuw5nTMf4tGYjRwpmzpaNLM6H3oNqH4xtUE5qgMVg8",
  "key4": "24Fr8xk6xP58P9Jw4YmbrepyviSt53cPWenMjZRtrG3KNDRV8r5ePE6Qx3VPRK2MYgm6FnjZVx87G2mGRX3a8ttc",
  "key5": "35RgpwDy7qyqBnU627PFRYyRruqjMJFwYRF2riA7LT12VzYcuPfUtZs6K7GEhA4QEHnYDH3ANdq1n2JZPjDf9Kqv",
  "key6": "2s8kWmuAcDbGEnFggz8meDLcnGSYGcJnwwwig7Hs2uSrkrFFcL9gUDTZrWSop7s6NDut6u3bh6VgBUyfw4cEAMBH",
  "key7": "2cjNfqjwMxcQ3JYtdm8ooiNEAQUzwKtxgNcAnR9anW6PyWkLE3jAE2TxDH15G87kqQBUWbyEm58bCi7DTKDBf4iN",
  "key8": "2TBqS6pK548Ya4CwoAf28D9Ts9rS8kzuJTu4yNN1PR4kMVVrK2pw39Ap9mRVS6aRXbz7dDFaJVm2oSBNj9xmkRBy",
  "key9": "5sqP2KM5mWwMVEs6Tcx3i1LMjDum3WhzXLmjwtve7zATi2qCxDm8XneUBKg7CkTXcqd6x8QXDHrSUDdFcsHPv7GA",
  "key10": "3euMiVsxk1GFR4sMgJnmqucjkyqb5qdxrwgxQJuMDV5YvoXRtKDh8eCvdTo9u2pr3V2nnSr59oFZndgjc51dnCmJ",
  "key11": "2VzfcFnZN2E9jLxXeikBwupLtVknhXv2QAXopDtSQ6yP9MG6JPQo4hqbmnwQXnxGmc2gY7h9AubNLYXuLZnMZ5eg",
  "key12": "5TxSK6EPGWxJWMKueaCsT3HpD8ze4d4G7aSZs9wn3V5YH7e1VTcyrNQhZ4Hc4FUB3iU94Ab5R2AkRR15D26bFkHt",
  "key13": "5v7uFRL4mPL6ESHn1fjhD11ADx84ZMBypNy47vGC3jmYrFNg3vb79JVyG8SKVVKuYUXevSfXFLkx7h16SABohnc9",
  "key14": "31AnpHgAaN6Mb7ozLCPG5mT29ebPDKJk8Hi6W68yzX4yYqFBER4Vkx67fPq5zdGxcbDGL75MdmnjbVmEjBYSXYSn",
  "key15": "Sxcn36DP2Tbm3RJs1a17jvuYXR9aYtyx1GjYe1kQhPms2Cg5jV73oEgXxBNCwub2o7VjxY1j4rTzaw6WsfvaWuU",
  "key16": "2vuizWWKDe1s6k1refJ9DtJda72qsThETB2YGhDFFsyh5v73g9EWWgdycpWypQFxKUjf1w4Afkqhvc1MaqJc1fgb",
  "key17": "3zDKVjSsMCbsj3D5kxXhd91hAUCViD3jZYfSQSQWvn64qyDJTaBqi9oEWNjNMD9FzZCcqc2pNh9pKg8cxJFhnyEJ",
  "key18": "4EoKoHzSzk59fZcFr6jEvCyewMLzcf6aHXaMt2yLT7HadzmvmqpvMrwPi68uhyQCxLMWD8mnEZqt6NFxkMwhk5V6",
  "key19": "4sM78RNzegzsDoUQyF2TxTXvrABrUtSpKj9k9M2gEhpvAejA1KLme5BBpAJjYD2x4u8yii8HzWtUXmKdzcB9XTTM",
  "key20": "GJ4nJVHiQmRXY4R1PrnWe3QEfcoYcUag42ju9vq3qLXZUNiBRgbr9Fdp1m4YAC7JHenwu17uJTqBRxBCxYPxHCj",
  "key21": "Pppq3PiAxhbbuaReY3jVd3yPfYWj39fzZDqwHi5BdqvvWi5G3dKx5jwAG7jMYT3QNsPc9WGgaeR5jjSMi9o7ioi",
  "key22": "3Zxwop2rGnLmzh4MxxwNYH59FVMHRQYhsCJy9fuwwZPKgq1gkgVnMrz1Srg7FBm5rVUxSyDJ9DmC24VvWNPedjx4",
  "key23": "3SV2v2r69QFz92rf4iktyLvB1phN9p1AQbbPhRYXjAcN285CuysoTohCYwnWcRUC1QyBLwKQCVv16H5PHUNqhvhp",
  "key24": "r9TpJdWfdGmfx1zswVUE1kQQ3XSnSEiNrpSKuETGyVrF6kLQZar2QkXEgLBCVRN4r2QoszXwFJ74jSuA8hUANt6",
  "key25": "5ruWx6pR5VapmVHmKikwFHUgwVDGWa3Gjp1rZ5qYKsfCvDqX8n7pSWsLPJUmxQ4SQhMFMx63Cb6EkXaB12gD6dnV",
  "key26": "5VkjhfMvtihpffMjy8tVKxLRhHNVAbSY4yVaughbVhvQuQExegLP4WCtjJMYQtf4ipnSdt8cU5V467WTF2WJXtmm",
  "key27": "2cAzzU7B1qbjx5zdyMrSAgSCiuisP9DGQzhLL7kfrPoh3eVwpSGjLhk9Va34SHwpAQ32pJDq4Mh2CAMawdeqkrzM",
  "key28": "3RJ2FeLpX7Kq6PYviiNE6SDEGjMvY56dCuDcMGV3HUah7Tu188pWZsXwKRRTjrYrEvfmmNpEbfjgHEABJ1hU4XR",
  "key29": "2CaehCg2p69Mam7TmBuhxCdjoA4SmLKxa5z68kwwbvQpcMYGCSobLAFv8dzmnNCQsySx3juveWuDcSqAXFmnau6u",
  "key30": "43q3gRNWNJpA1SV7vx6MwVgXM948MD6jjin1SDA3LHENwVUnQJ3y5WzPiz91VhRpAZxY1vCGs3hrxbvT3AuY4wFX",
  "key31": "3jPwubiA5cD4acGcaXPdoECp2Am884vnjxPwBc5chdsahQyLZjG7WXPZapSLGmUK23xjBSyyt3xkLgSEBPmWRFvM",
  "key32": "2st2NPMcZGtNEzH7KX1uZRzKNSqBHsoPjpHjD8nDtHJtspwbiuKKRoHRYCDKLadREFW62VMhMYhF4UCJt545ziPy",
  "key33": "488efpSePzYMY6qaTXAagnXxDSPzk1bKX3ATjpi5mM7dXNA4CN3BsmY5h6WJXmryTgnpzmJgypqvZS4Ugde3aJS9",
  "key34": "5UCkj1EVbpNF7D6te4s43jxB9MpNZVEw9T99h9bsDTGe7e9HcCDeiu22ENARUGfUCEgLktWGxCPf4nQxLXqdsyX7",
  "key35": "uPY5UFv8TCSzwwX8xr6snVaxBWDa6WEm6eCLjVoTnarwUneNjpwiMDHm1R7smyiNwZgBBrSmNcxipsy188BTtrE"
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
