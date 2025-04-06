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
    "2fxyg7ztrnHuG6cae5s7XCa3jSJWdaQvHQM3A4VK5EHFdmS3awfgGUMLNCrf2iXmjNazLUubzb9Vo6TtUx7PTHnH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aXLacRQxxMFSpmXFFfdBLtcESQWKsiwbdvN5FKxMGJWsv2tysX8GQ3eNpBC5triuvDa4KENcqxgPSkMLSZZHxFK",
  "key1": "2tQpACsmKss671vggjwv7Poc1jmmv4PRpPeqvz8V2b7fE7Hkpix72KGvVzPqbTcrPskBDhpFumhTXUy4aLhVZ2H9",
  "key2": "2JA8ABFiZxyCHMWitA538yDYGgjLataEhDUeMx2jWo3UM7PsDdbSVye6uUtkGKVNRE5JQPKuWLqHxTGQFJzkiZKW",
  "key3": "5LEZjebRmtnemKLLaTX2NDaPgyYYuz5ScpxB6FYuyMdLjyipeNkaoFsSqDPDtfM797yr58mHydgc4UTcdy6tvqAY",
  "key4": "2dqt9ebCmfpH7GsndfQXjx7Sgcw3Um8NKGP9ZAPeJ2cZfvkeoaXTXWAnifeatQbnGtoXPPKH9KqsAhNTutWt39g9",
  "key5": "5GLZ7gZjhEe8x39SpgMNGd9au6T4PaVJ7rTfN6KgM1Lnengh6T4BMRkfd8BNxq562nQsaXYh2x6oh6AWE276Eeeg",
  "key6": "3hsrEYcadZgeAaj6wedDxs8G8D3CyjWv8dcSkQ2rDbuRs3JZ8JViwzSFJsm3SzkeoVJnCnGCc8QyMe3sB32RH4bU",
  "key7": "3d5ipyKinNYnw23zSvW8xHHaEufeQETULHdSyrqCRy2Csj1YmW1vhnwSfm6zrBVR9yM3YqKVarYofEV6SVzckPJV",
  "key8": "qJPCAxXNtSSsL9pvobhRAz2CspHx4xFVTeZ4iRATacb77BVWrUpXoUVW8718Egca7b3LyPthpNpzs3FsRoBEcNS",
  "key9": "54RqGg8aPn6BKANo3m4bg4gcSRrWbsN2rRQ42hpmA4ZcMhcCesB8kEQDoA42oDNWT9Czi1FZvoM1aPz7pX8g8eDm",
  "key10": "2YPSizKSyorzvw9fCx5AAm4nmMH3oVW9NZFjCdc66TLjt9aR2gBnVYgcpjQPJfV1LDvCJ8hCsid5r7WdKaSz5AQ5",
  "key11": "znrPzNxj88ePM1VDxPk3XpNg2fKjVWkZqwwqv6EHGL1RtmFtLFjEmcpvtoC5JfASNw1wwch7qRcTHQazySZH6Jx",
  "key12": "2ystn6BBVFpXLjSS7WenMQgQAucbeRLSX7B9MULqpiYBZH4w78XVVxbYT6YQhTH8UmifaocBhvmwaSK43nEzscyj",
  "key13": "2zaNZ2DMoaVAHgf4aHWJhaB39f3c5jUm55rngxjkvUGi7vgXcUm9VK8cGaS9w2xrMtJVh7xQKCVePKzpbbAmQb2S",
  "key14": "2x1V7LEDorFa4nY2FE86yCaHGGkLytYt4ZqKwpXCV8JofpzEVZbxT2Wr2irNPYt9N2VQodTxq4LnH5cQorsz2w9c",
  "key15": "2VtGp7G6dJUgrovD2pdhM4uBMdiWmtJoqS1mpEw8dXJMjkvAhnVF2hvM4B6nYp7obHYkWJyUxTMvEBXLjwgGFvFo",
  "key16": "5ZeLxRuqzGj5Dn3LQ6hoVjNDNNTG7tKuQtqh3nbBATZNaGSboAK1ceU1FAxMNamnYeXTFUrorgM6vrVFoCiEK8qY",
  "key17": "3Fwhjc5LGo7Bgu6wxrT69x6VA8gAQJE1w6tsba1XjfkyyroAEYb3KS3qTkapVcMsAvqMat3yM1dURhVwDM2j3K1Z",
  "key18": "2DYDRvui9NJ8zLYodazvFa9qjb6vyuHaZDF4Yfcxjfn4xXoKatuvGkykcAuvMypmMJwtM5JFPFo7ouFru85yizHt",
  "key19": "2FCa7oWTBaSeVtiDkYji57P43fioBkZrHqQx3LTGtXJCjDBAdDMthJrh1gy4JY6KtxvjuMrQtBbKbtFmsMiUYQH7",
  "key20": "47w9Z4kRjgD2eABwwba7pVEB9KJrkVfRTQLiesfhsshGrnrDM9xBFSDdzjU3gVDDU1kLWncU81RbPdAQ93M6vFz6",
  "key21": "67UY1orBd1buCpm19rNB7FaZUHbmpvehNmegjCZz5ke19p8HCFu9Vtt6VzjVKYDHCWN7ioPtUSVRbB7maFpPmpeY",
  "key22": "535DKfgjySm1TyREkdevtfvYAcjAtnNCFNRykC9qkHbCQdjfKnfWt4YQk8nKcqArDbZrP6v1UjywgT3aQETRaoQQ",
  "key23": "4qMKS2e9V2bbzUA28va7cQEQrz4orwUAGmsqvMB9QwnUdMQkRR82nibPgNh3qtsSCKd4VhbUWKf1UexoKsefhpj2",
  "key24": "4KjWFDEKizUQnBPZpktZNLH7Yr1cDbGTapVUqVWXtFmC9AjsvMrcjpeuw7Auqb5NaSGbTRLNSXy6TiGoze1pUAFU",
  "key25": "2Q7VGZUp97ozWBj4fThNLg2uziLMiuWPE7Xn2spwAet2v6kvHAwnhjvW68U7QwaHfZSEFphN8F2NPFXwnsFXKgJM",
  "key26": "XHnypdK3DDUZcSgWiur3jFGUEj875JqBkEnPswPcwawgFkfhXp5LokFUPurYzd4mArG2CQEmjai4ivuHUJsBVzM",
  "key27": "A8iAaQPpFCRd4dqDhyCNbXmzKRSno35gcHibYa1YUHXGFEwYeWditHhhM3tXMEh4kjttqpKpmqJm7NE99wVMz5a",
  "key28": "4oaE6pTMwZd2nCnZNHZ56Q98omvhBokmyRYHHbxFoGEtaYMVi9FjoRev5FP59jpMw1jaqy4SWboUgnDhX4aMgVVX",
  "key29": "4FPrFTEXa4FoRJzLAcvTowVGwckG9CEZetPxcjcX8vMZUijjUaXgzLrGcFzDBo8PqfG2QTt6wVPPZqQUGW27Sk2N",
  "key30": "ec7eGru4n6ZVZhDwVvg1tJzARQT4F7mT61Gx9tc7VTsEtaKkKTt3njfoLzt2DdUh4PT4HWXG3gzTHaUzyeS3NTP",
  "key31": "w7tsmkDqjoEU8SFWVLMV8CBhTU36BrXxupd9YCVMEBnXCeAgEE6a9jW1YfQ9TNFVEJ1wXAs9J5wavy5rrKSMsYQ"
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
