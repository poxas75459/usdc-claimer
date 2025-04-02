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
    "44tMsRm5AoinegfXmpDbP71iWYqv1kqBu4AxNoGxBRFxjBfJeUup2fVVzZpTA1vhYMckfAwQgx248ErwazpKFtzC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kQeUipV9YaoVgqDdJsmkQFR2F85EkgfxSZCy6maEgJuyvBdxRshyMT4QmSXzh5i6HsrnAw6TKJXBZfbXg6ZvDfp",
  "key1": "4FQhngqBdMG5yqt7VMe4SfLxVkyLbArczwjJFRNP8de3RoekqKBWQzYYrNtQo9zjGfK7CkdnFko92FTsnuJBBoPD",
  "key2": "2gPxRj79wtPzEMqKv1PzVfqM77CJA86EpS1bEnVXTPV51u1cLSMyo5c8vxiCVCLm1eqkLeGrsFZD7mK6sjhuwFKe",
  "key3": "Xjc7teGZiKTWM4MfHamwrH7aqL7cT5CYTntS9H2kg79P36VQ9v6kWW2HrNecqpAyV2ZUHsvg6yWcUbZ7LFHVJH9",
  "key4": "2uzZTaTPNU97k7arhQTfnDoj2ycQjrCjVDy6EQovqwKgexNCr5eU28Fmi5xqkLyjRFQsMzpkbUskaYhbLKz1CLLQ",
  "key5": "dp5Hr1ehdRj9YwHJunR1j57eptNieAiLhcKQKREafteByuZdoa1hKaJpEextsUFHTzzQLWpTanoQQwv6MShqtpG",
  "key6": "5TgfoZvn2s7M4cYJueDZmc2KZ5scKKeB6p4gEJeeF9jL5YbuqfUcBVSER1JasRk7d6xxHwSFSXAHySUG8TgJW2sH",
  "key7": "27r7j8ien9rbY1yqbwh9F6KkYXV7zTvUt3rfbT3NZNZDf4QzGy6oufy77RQ8Q7uYLUiGSf44Q7cZFsfRmdiDw1Wk",
  "key8": "3cfV7uVVGYd2vLL8rgQ6MeGToVwYGeqwRkWzfG4FL15wxTy6ssas6khzN3KwEHXHx5zHCbNxDXwj5GeaTdXck8wa",
  "key9": "61TV8qNsyMV6tHFdPKjWHu3s9t6xzqNC8ymhQkx7RuBcsLPVURc7NmAVDJ15hhM5RpK6167aBT4gJzub4nd6fvKW",
  "key10": "2r1RTmXYhB81QmMuig9341gPWHLxeUqY5v2Wuh16ce1tt11fhWVU9Bd4Dt2YPTW3jjy6mJbgFevous9MfyqLAbqS",
  "key11": "4xX67JjWm3XHHJ5jGggPCRrzcBLhSqFErBjpMiMnapUYkjFE5sDMnr3G539JvLSijhRfUqwWqwdwRtQaNfwNGtSX",
  "key12": "4DDtXpHFtCeGJpaJJvxYjKCRzJGfdyf66ArVhb4qdSSXqnzR8GGUnqinkzvGjq4AtJhXMqecGm84rw7gnPefgoh1",
  "key13": "2BqvhwetiPdS8bmtLotXvpUh8aanASDL6TqopS6AnSp8VYNmmGYXEeXwGVL9kfMidaHwkjXvii5UdAYRdkxUKrYk",
  "key14": "5iayJDHdQs37maP88yCC1c9ENYzFoUxpRq1UdX71atjnzNFUb8KdvvmwvYTQqgeM2FD2aqJjVyacJ47zXLc8YstP",
  "key15": "5K4yyeBRJ4Y2L7WzHZacdYuQrHupj9fteSZZuKD7wSEUc4DRa8XKRVdKsosmNKNYwoPXx6rmMXb3dEvYYYxcZM1Q",
  "key16": "qMyBNJWPu9aRm4DwRC33DaPWaaMQrBcWWAmK5EySwiJFuBb7uTQtdW9vK33foYhKpucXc2BeHPfMoXyLpNBFfH4",
  "key17": "5gjp6o68fn52XfcFBysN13gicmYcJdtR5imftzuHW7WCEVNpnyZ8sgZsHzDBRYqevkQwQiEHtoAzyXN43gM2H3g6",
  "key18": "3TS85j4mCvWkBPXYNmN2cRcdJyCXKBxJsMAdczNaUkVdhbfmFTdy5HnzqGN5wEYKbZWPT4oDHT4fVPeCkceoRkth",
  "key19": "4NmNz84ZSuKHFjS2CcKCxmwVsRRmcyvZ7sb2eezrUWcyaDAz5ivTsfLdATgtsT9EdM3LafdvDqvPCnXh8bmDczF7",
  "key20": "2evqUV9NYkiUPEUjSfhCkiQcqgiEdkBbSHygFnK4MgmgALBTQqQgbkMuCHXFA4BGKgPdC4Q4ps94EngRQS31tAzF",
  "key21": "5dPiDNsNMR3cKRRDS4cHPsqg5RJv3iMta1F25BdyDuYSGaZ6bypsk21jcZoA7GSTUr89xu4pRp9Y1WkeG3MVPovH",
  "key22": "2xc97Cx1Fay36BgiVfdC8yYcLwny5ZLiaBPxpjaBnqyUxWtqaPc86asyzFhnHANABug9iPT7mMprM1LQXUspun6S",
  "key23": "c48FkFNXQtHidtYgoKfSnwhG1yJ3oSdb562QoDbTEi2ogdVL7HPvYBzgs8KDR3VDTmwR6JNRbA5BYbHzGazkAj3",
  "key24": "555dpD7FWaoVQ8coGM3vGd2i4J95MzG3CtB6aSyBhHkk4Hw5q24HhgHc9EZfyHBE6kvTxN91ij5ubD9jXPuyqrYD",
  "key25": "5Ar3SfPhcAhNmtBgu3ALU1dsD2VAv7y9GYzdfUSiR9vbFTeZapiJ9n6w7D8BNr8JnKyGC8SNeLL2PUVCCaBm9GNh",
  "key26": "5e8nKkhekJkXi2Xx44FiRwYtsH6wtZcYraFMhUP8P9Ccda7MNTFcApg2HdF5QxS4gdLN6CY5Cr7TJb221B1qes9n",
  "key27": "3ExYXSDg3gn5eQyrjKB26Qf2v3QkojTV3TnASDVpEwcAMDWzT1zcvFjs73Ghk8X6ytmtv4g2Gi4KPFBFvmSsSR8c",
  "key28": "4iWMCT1SpakyUpiupb8oWEkonp3z8HvkA1vw5vabrCJCshB8pNG2ZMmnJhSSPTwRVPXgd7NFq41sYqyUbmz6B9Hk",
  "key29": "2vQhGrhtJszV8PzjSWUussCECPzuauaYUkYgm5AMMQr2VnTqFHvP6NUp1jSsBKpKvShx4yFFwbWb7hmj3pQt1R9Q",
  "key30": "3xia8YCUdopymy7sh1zD4kJNwD9cLsA37iq5MfCviLBDbfK9V7F4F8CirDu3TjCxn4UPEiWnzVanxJs9Bm2v7JNy",
  "key31": "23ETBrV2DMqvTTixWxifDYnabksocNxLaP3ejr7yTV6v9VcChwgAmdBDXqVACuXrWQiZ8pxrKxq1y83c1jDAQ9z4",
  "key32": "3PthaerQSnB2xKv2cjnW3PJLvkjqFLHdLGD9TqVU4YhpkHGSUqaAGtuaW86zxf7QBPwbhEjtpppPUX28GGZuvqLc",
  "key33": "3LdGG8xNZ9MHSK3Bu2tNMZnF6Wm5q3Mm6RXWVSq3i9FJrBdUF69yYvU4WKFLF87Jzsv5xQJoxyHLsq51hMiFgkXa",
  "key34": "34jy7tw8DtxBs1ohdZYkZovijCodgKnMcnw6LBBXt3fLxo9pb2TUprvgXqKUbTjVkbYqqKEEDUKTaxUvA1pccgm7",
  "key35": "oAY54iDdw3WaG6Z6BTmWiMbPwzwjKQ3kw312kz2zqkziXdPXjp9vDD2RC2hADmVDwrWRPVAYiV3rTmZfivN83rM",
  "key36": "5EwzugNBH7d15qgaqvAb3LpEbREEXXLdpAvsdN2hAkqztZfX8f5iBQeFz8JPJwewDbHP9WLGmRjjwdpsnLDMJmUc",
  "key37": "3bnpoQ1tkidVFdvqkmCfJT9seF5PNceagGrLfP6fU2fvFdHzsnKvnXT21xmBzXBkUMMg3dJC7tUirHhBjWc8164g",
  "key38": "trPkwg22fQb19PgZMBjjFd5eK5RcPFMoYmyZcb19qM42m4NpgSsTgZdCxPg1ezG3EhRj8me1abWKVDcU2GePsSR",
  "key39": "54R29NJiKgK7fXt5K5ATfbEtrxR6t61b2ogTQCAvU6coDZSuS3uT7aQEwwyK2HxN7ggbZvfZMXNZEYZyJWCRTyS",
  "key40": "5voKtzyYhBtMeePju2iz9QhxyaZvC4TtriJjz6fjhPHEDSomFmRmyyTkxskWrvU8XMNwsUBuwuto9qe1SAqAaX2E",
  "key41": "2PfSSea9fVMiSXRytBMFi6wC6vxcZu3GXYwypevp2CzhPAMXBZkcJtucrdPWbDw2aLt6GjD5Sn5zyNwe6H8W5HRj",
  "key42": "4LM5Jo3XhynKbriq3bYfpfUecUgo1RUCHJ9SsHrkEcLNzEKQPDWXyrXMMcsZM9WYBvVXt6iGzdC1aMJJJjwKktFe"
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
