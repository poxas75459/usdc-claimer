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
    "5tDM3FFzaa5WUehnWTAymzf8vbAW7f1Cz6t1w8pdFHaMckkSU4VeRtrtQNjWqEXot9o56H37rWqFWRDKk6iLf2U1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZGoJ335hF4WTaMxZeBiJyjup5a6ZNYX4VXvKLRB3dwvom49oPfNy14wS6NxiCoPaLdF7iKqsbRt7vYpMjnuxCQS",
  "key1": "56rr8SF7xAfZ8gqmce2d1YetAt41kFx26GcYCnUZApAaCJnQsXMjTE7pYuR8VS4GQypyT9kfQayL7epwjmEeuLst",
  "key2": "4ha9xmsnv7zt2TyNfQmBHRnGt3Zebqp3HVGWPwAdQfGW36feVSBFAUisKvkjg2FTnYLnWw6PHqsWvkvTY9UgqYDY",
  "key3": "5bsy231JHDcVRY1dt6CfJXDUy4SJt4nkCDUtwV7MJzKsGdPtkTUQoXmB529xGJ3j534YMUv7AvkMERC17vU5a6xX",
  "key4": "UtVam2mXiDPgnKXNXfUktv9LzQEQ4yWums1tN6UZqYjoTRyvoxf3r969jo9rbJMr1T4iAc7Jw7TwCic15VktDU1",
  "key5": "2bbV6Urxi3d9WV8Uiua4BUJBowLYwxTZtqawiVb1Nn7kW48knyiYYtsNbDzggEHUkP2Hc2tAjnr5kCZ2dddRJ57W",
  "key6": "2Q8qyHqNHLmgKdnQQFTzphnvGLJDWEr6E2vB4jgXkPZhnBW8LXxaCmNKpkVg6Fj6QD6hDgJGDiRCbX7zE9LnCbRY",
  "key7": "2sDx7UZMwiUNmdE9DM5p9T6qnhgsPqYZMmVRwiBNi64RyseRf8ek6dnD4L1gCZk1g1CPJCuMprR59b5WfvsYmSf",
  "key8": "4xwrFV3RZFp3sGeHqYLRY4AArQttb7mFzpZXPab7auC1yR2rFo8YSsJZscvUfo9SS8iudu2ozQPWVPGxRVuQXxKx",
  "key9": "5k7DKwp5hUiQy4Q4vhed4bxcCqboN9A7wgR7VvDDDwB2ieQKy5iqLjGSok4X5iWpWFKPTZjg3V2fC9p1B5oNKyC9",
  "key10": "5GvWUmxxzPTp6arFhfBHFT1yLmpumwztWzkxvbvQCsrqfrSJ4jPojT2j8oJKg2R8vKYF8cEN9fVR6vPjs3FMNfW2",
  "key11": "5R6ymwPNg81U4omYA932ckxCizvxhqpWLQ2FoLFQGXpDqUpiK4i5xGyrw3LiNv2383Cx65nmCPj6RWY7yU3Y1rqv",
  "key12": "2SuPGtWXyf5qzKAWrbVFWHsmko768HuM98t2Bi5kzZhv8SkVDd6TEy1fDkcccrdXSX3RZonF72P3CfDhTQjaYBJy",
  "key13": "3uk5uzPMihanhZ5i633pU4znPJZvcZeLPfPB2Vh22Bo6pFzZr8T7ZmzaGJrwgf2x2mAeH9w83zdYMRGKaK55Pk1E",
  "key14": "3qGYdfqGkUVq7sDDWX6Nk1TszeKA43j62t5V3k2ZNjsiJ6BJ8t2eV5akeEHxUpJnocs62RNR4FvZkD4tKnAzBPUA",
  "key15": "2FEzS17jVATapJ3kjovo3v6aegaGUdsmSUuZ9q2TmTdrZk79mKmuvf74iegH3oVjicf1BoA6SGP6ytBZGJQsqnaF",
  "key16": "7Q14t7id7HKEjbSe1DBqWN8CYSh1NJUtBhf1Y3cWwcxapGsPHL5yJwtqi8Bd3cRrmnFLjKiwz5vfk3VJ3bWemrA",
  "key17": "3hEU7av9Ddv2fvNnwjtunTCyLANhoXC5Hdcfiribwsp9ECSbdqWaQg3LoceiiaU3aBw5CZHVVvGkYopMLkhihzKp",
  "key18": "4QRBKru5PGCN7ueZVibJ6v1irdT8DvtgRWPiYcZQyuDs3t28es8x9eDfYrvCwqC4PYdRy3JtFta7Card4YJ1Fpkc",
  "key19": "48hijvLQdDTshx5dHr8YE2ppXhpKHQdKa6JoS5ffJdVJxacH5Ajb7vFvnCFT2JFbZf9P1c9wa7vfkb8c9g2pMcFk",
  "key20": "uER6BCJLrzZToMGhS97PsCACWdwTfxDL2BTEboeeu6ovZf73iBMfz6WXk9JscBmMznfg3sNu2NqQSLbxsrMaqMe",
  "key21": "2JEJawxZCzLzgACZJ3nDZSGU2oqVCksQScoG2dgEjqAS77fUitTiWZFCw8pTSUVCCH6AazsumNR7Y4ZbDJZbXf5a",
  "key22": "3SugQuqNwfSsrR1n28htGD4tcdUETcpFbHXgb7ZocDL5juNGpac9RZNCUjtTDv2jQvxJNzvDXzs52279mVQ85f5w",
  "key23": "2Kdsu5fFDNE71FTo8u44QnDm6hPPuR86WiRsBhTUhHVCdr8oDzL8LjnT4xvx1tQpdTGSHaViatPUNbegVKVM2RxL",
  "key24": "4QQNMqTSBomEweafUyZ61A8pUqTb4ZHDsGsDCNezqNaHpZuPCwVKUku6fzc28XH3Q6KvGFTsECvmrf6fE71LzFb",
  "key25": "5ZxVyQX8eLxSs1HHAwAD5UZJ1qfMfDjT33FGW2Za17HUbbvsgNSTLoRzWzQB8P3NMHb5Hc6WQoxtRCg4CJhWpy4k",
  "key26": "3dZugjoDZTnkSHh1be6BfrtD5Xfy7oNTaQry8ar8TLUkTNj2sm47kZ1sqUaSrdWdK9iR3hLuVc4AHWvjFGf6fZWw",
  "key27": "4ntU9nr8qGGzYPwsNWV97oyPSudshx8suWekw2dHvjzfmcFb2m2MGkxck2XNjWYez1mih3oAgDiMwC916UNGqc7y",
  "key28": "4YTcrufYR3a9cP9XiVyArY25Ygp4MQrp5bRmAAwhAuNkrAsFGMxYntTnpLhJesnAgKtYTc4kk2MrqLAhSdAHYV7W",
  "key29": "5tSZJW3oUQaj3pfB5bM3nEWazgHJxDWDZFX2GvwSkHJwjufMkQBq9fpk8GPMcUn52bs3RqYr38khXMzPAFkwSDZu",
  "key30": "3YWpH19XPs154roK6T6AGBZNsnxJwBGGdWaTALXNqTwcYwvFUfPxLqxPoabRugf9786nNy9a6yx32M5Y7nxv5YQ9",
  "key31": "2uVCNwWoGatAj527VXMPcRHs6dKpnf8FkXSUaY1pEj1Wi7RK1Qj9cJqyhrKcZgXZTfdywgEEApwzLmyvxu6J6JMS",
  "key32": "29LGCuawweHkzjXq8jJ2TxXJziRQMx1FtKZg6SnTqKnafa5w4fMKsmoNCwMEUDxE1sS6VsHUygoqyGQh2VQrZLEn",
  "key33": "2DrDijRZmJvS5Wm8gVvBiHtgap7pxUgnKwghoxikmL8xiC1SVPMmXNbaJLKzuVJLEbyYJ2Ea8SLx2uGyZNjvSvsS",
  "key34": "25onCUD4EGkDqvie1PyJJzdpCyWw8GQrf8xJkdQv1gE9SJaaGNKP9FB5PUbSZv34seUttMomDNY4vqPJ6q1kbzjm",
  "key35": "5oWKuvQwQXqVMEPJxd7PA1e2kM94hmU1AQvTFaXcMVrT4j5uSHFfLNhW5q2xYpfRq6oEsDyfHsZP4iJBHL7CSJWF",
  "key36": "tbXcL8BhmraFiKFM1nmw4nednKisYVXJ5CKPybWtuBf9vTsySEFYcBA6qw1kdmsHWdgL2W9Ad2m3q2MCegwJrUx",
  "key37": "3EijRe28SHoaWuM6DjhEfLSCGKuajthmHnaoX87jUmcHuxKBdDPHP3gAzkDD4ZuQE4bPxLoR6T7gsEE2GfXMEgBJ",
  "key38": "4PoGCzd3TGJt5xtn5vNkvMZurL9EKPUaLEfE2dhcGzTmU1MgqiBrELRszqUggFomxoH7KHT3KqcNajpkz7Zwv55u",
  "key39": "4omGBYVuLZPvjUcS7YdEBGyRYHFyEfYEeg5g3sgY3oQmRpifXQCUojAervtjRBAwTHAMhVGgAaJhYFrijRJ2ZXEj",
  "key40": "4gES3Mt8eKJiRVCuNgmTAsYFfiTFkaLYkediP1gAbXjbnNJVEQZgxcQFwUnY49z8qwsi1pBpe4zeCKhG3mm9zjD3",
  "key41": "3Rk6ZyqaaHZVApqbTFi3bqwU7sjQvwQs3vPLeHTuRZyaEiEkkX54gwao4foUh6sFXit3B3QncxBgYfWdLtvvJujw",
  "key42": "aPRPsnTPHqNcS2V5azeFhet4J4CPPbW4dSnsczT6e2AB6Z88EJp3y3JARjSDTwb5a8USyVZLrbtXVMbcGHG3chS",
  "key43": "2pbtiiX2ihBtpBcvYuMa74g7rD3wbwn3wqZ6Lvovcy9m2EtVLLqxtedNQW4xnQEtMvP43udURW1vmLMzqJpQ7KAJ",
  "key44": "5KZ9K7vXpRXBqtPWnGPvUkLcz61esZisdyKKWTSTav62GH9e2FZBckW36GuXkUveA3tdqh3CAU6kvzU2EpJMnLTk",
  "key45": "4FxRnFRCdVjuVSmeCoC4pbahBPthUgLVaDAMPiaQ8QfvGv9enbdcjke33XazxWXmcoe3CkHWhrHnaUWFJDutvo11",
  "key46": "2NsVf3pB1PLTUr8rsYPNQhTWcrsef1zc6Up6sbg7YXknFEKP19hE8hp2ByDxN3Jc7oSuShR3UjU4tgLQK2ftehti",
  "key47": "2Mig5XMKT5WAAxQ4wd1HK6Xi5w6daXZ26q5FaoA3YVtHjtFAnFRSecxPH8Mmw4SWAm4WmZvQzkt3HfWLbECWx7Q2",
  "key48": "2Brbfrvw3FJLKA4ZFbQpeK5CvCiuiyUt4T4fvSCrXfo6Z4EY4UNVCYscE9VezaBgzfPRFprTZXr8MFKZ4pyWwL8b",
  "key49": "5X26wC98nyQwb4oqMwK3cHqy4QHGZ89AwyGpwvwC3mD8fE4cHmbSk7UiqSwff7aJnP9NX1SyM4oBj1SfXahaYeJC"
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
