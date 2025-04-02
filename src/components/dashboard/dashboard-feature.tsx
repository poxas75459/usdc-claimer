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
    "271mdx2crPawtkFHaeH5W2R1gnL8v31zGknt5S3De9ENFPyDjNRULRgM5qGjuzSZbGzoqqWNAcRa7cpiqjVGMuRo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GKW9HPQDiPyfSg5p7mj7NCqBEn1nZZNaBz55UZxcZYALSJnVG7BBK3JVZmm5G65na8DetEkfaxdUKEkTtrQsgqo",
  "key1": "3N2pZqwMyTkpUbmbpqgD4D5hMF44RN89nQvwzqbas9BNG96qgVxmUY8oPfkWRABdT8fvWvQUgXGLcKn52GWCaYX8",
  "key2": "2gBUyhPovnnYD85aUFcqVcXTYB3cp6YCdFSRo63CbTHbjY9rG3kpYLZHEyCJM4pnPB28ZdR549A5MDFGt6LmPnsR",
  "key3": "37b9WYQbbE3G2ZgQ7KNYjKSJp1wx1jHajbHFGf2viLvPiRFfsjcyspBFUofqnMVhA1HgP3im29E172YR5CW9dmut",
  "key4": "5ymcxcbPt3ajz9npWkRNpmVNgysao2wMMGAsogdWJkbNpzZHknFVJA76RdwLxocNHXz5mUPrduW7ibHgc1sGQGLr",
  "key5": "oNuoRsDWqerzMkHPQVtG2SeucLqDL71b7TvqTE2VUqgBfpMTeusgiEMXwGFPWiCew6hR3DaG4bqQMJA6GmoLRco",
  "key6": "oCQAcy4tWi7EWEKBACy7pij49bZXwGCS6ndFD9ny8EGPcfn4oUU7zN1gzP8AnprVuVJPQexFtqsz6rYER2zr9Ji",
  "key7": "2Pfj4bJoD3Yp3Z4kaUQWNuxKQmB2cC4dZS5iWhhY5knAS4K3xPaY6uYptVpgmrj7iXcboqiCA68XQaokSbWTpeQZ",
  "key8": "3WFDxneZoHtMqhvvai5Ch1Ez9ue1wUh9Wtkq5FLacqV9w5TG6FvzdySykfyGMD1wb4Nq7j1BhrpmzhLZwATCt2eo",
  "key9": "5sHme5dqh54DUHeDnsqaKW3SGwtsppBwmnLzhc8kEaRXRzV8pg2gMzhaof56mAWWXfJGGgyvH1nbmaPYtFfgLJbw",
  "key10": "4HBLiHF4EYeZ3i99ucJtKXFyhUoSiW1xpGNnTFvFFa3KtEfDhDJzdc2DBBWUTW41sMNutzjrNURF5KQoDhXfZoGt",
  "key11": "5Ceq9zUvKvf1a73RyygKmYqsDUAT51vMxSu93Z5aSUMj44HJWRL3hChfeXHMBjLncjXhhSLoN3aJrgiMckm42tPk",
  "key12": "4PYvP2uPPKZQGDCTn9RSgY9T2YWh6YFMoSbuTm2qXoKNQDnfk9kHoYe9F5dSPcYEQgu5dsVUvnszzRnm6LFyUk6n",
  "key13": "3ia2ZmHcGvyWRkgqni1sxxAzXDMdQfanyJppmZuXaiAndtWpLV1TwM8K1PpND6QGFhRdxvdsQQW28hWSKxxvxwr4",
  "key14": "59k1fRp7SkTbfm5rLetebex9gc8sajVF2oRuAhnBSPVvsXhuJe4JmnnwuQqz5aPjtCnZY7FVN7Fbub3TALizp2Av",
  "key15": "Jem5Ch3MUPX2nsxvctnwPqk8FB4DimCmyburFjUNvDkU51c7U3WA8Jfwk9TjW23utiFGa4eBMUg2JgHVVBLLp5a",
  "key16": "iE7YPQiDj8bBh6vCywEgWUztbBaRYAqKPU2rjg1JmiYe8WQxDWM3tMcMgVGw7khwoDCaXAhhdyFW5WStsGzZ1DK",
  "key17": "4i5yYpscxSrBXJgWeUuhp5bGdd6B68bKQt1s3FNsnywi1Pb7WzS83g5bhhowEyMTdw1kdmsHTBrFVqVojwgytpzb",
  "key18": "4LZVaD2GqsA5fA1apdE5hRxRyBVB11mNMyDJVVigyAB9PNiyPb31GSSdfUSSbfyZvwL1naEq8g8dMdWgUiPtDPiV",
  "key19": "2hDnbv5iVara78RqJ29F6LmyRwmf2AMXe6vbNUzwsZvjMTsn3dL1U99J62Ug78LBCxxgwboinN9Rfb8DuteoxFTB",
  "key20": "5KGJtSAjbkgEebmEZYjYgdi2gt4iZjxbZqPN9pUc7Fkst92gB2kt6tBEmoXf11SkbDha6SV5DqDc7JkSJhHxgFBh",
  "key21": "2HxiZxySzwB7H1RgQ83Y9UXv3xtKm7vS7EgJEojtRor65FCZzRWvXSwCNEZNHb3hTfVGsDyKGPYuSqxh5LvwkpiW",
  "key22": "3WTt1VAMNmJt4RFeB7Hn4CCWMisWK8B7Ccxr4oVvkPnhqr8niN6GAzYk6f5gMkCF16gc1819QHQmX26yytJBcoAn",
  "key23": "5xgTgkJAbajBii28i7XvDrUvhe7jo4DwfeVsyFdYrxDPpwtBTMyqW7bw2XWHZ8aKswFdgKSSBUAafykiRBnw1inu",
  "key24": "oBTdQT2xz5xZUDyfvteXkW4ApkLeu3DvTKfTU99qCqBffJbY4ERzFmwv8LVUGi6HJu7YnaN15cRVcjL7kofJHba",
  "key25": "4fJdEgBFXdnXvQHYN5bbAeBP2BXw52Bq823FJ7sKJHBLRrdP2rB3Uuk27iHuGUGoxYpWmmNQSH9jpq3VtpmGGmD9",
  "key26": "4B7WisphS1prmii75329QpcQiesh6jxuYefJSpnQFeLAhoK3RPsKgzDyxWfaeMYwiVxGrQZ15LDAAWjqbu1bRVT3"
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
