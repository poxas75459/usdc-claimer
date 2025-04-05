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
    "fMGm8iSYbFuAjcSLwHC4Qy46nQjWUqwAPySVZ8tvaAzDRL1f1epF3aoupsLkSXSNCxJp6H33cXNhTt8PiNCXqou"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fUvB5dvKig3xvsKXrQy8G3sgUi6Wp22XGbDMSVWJiXC14mFhXtBoBimg2Jm2w5hiLYUD8CqEsYYdFXcoJ7cpp1y",
  "key1": "3qAWEsW4j7o6ngB79yWM1QAvsFwew2sacsohmFWeyNFqFitn8jewF1bZpPZbBjCgarPfo4ZVtqeb1oVDXD7vX2V7",
  "key2": "3ozsfYczGfyMngpW7kWEsAAsL4kePTWCFNS6V1FKHQ2vuJ4HVXNh4jfzdCBHphrV4hxjfW3doL7iDShauYMzmwXa",
  "key3": "3eVBNaBf5iiyCNXRydY2PATHJK72b1wYX2mDA38ZKmYA3AvgSV1oW3bHPJeSUNwLXZbipabAswFfxXYSYN61W1Yk",
  "key4": "54mQnYpedaXeJntPjfjhKwrADHSeyKZaugNUQvPsXZWBe35JaaBa9cSjkggEQGNw1xVovQogJgN6hNvfiViRxmWH",
  "key5": "8fHePvaY6kVGHYmo3jBGfFjTGrG732wyKU5oXfPQjr9bMfoSLXjqBPpFjo4eUqQAS7CMqKHhPABuiPoLHkmYzu4",
  "key6": "24BqMWwQQbjMyoJZQnznAMwvJ8gwKmnkQdhGFkaxFZg8HSTYGFsXLTNURGRD4ow8GbTptX1HAELidbCnfx8NLLau",
  "key7": "5dWeFxUcs5kNGTuQj45kPxxkMPJixK2PbPRoVWw6CR4B9WRyF8LLZbvfKbkC4qgQkfGYW1zCQCLLKGwXgJyC22Xs",
  "key8": "2RupFPzzZrfmHrY1CaH42LgA64uSYEu2jXTG5Rs1YwfaCz8Qb5VL2afzPhMPhKaCQSxFCvEPxYPXbMmPMSgue5Cp",
  "key9": "4rMChfaBrE8ngXs4pdQcj414sQEF7UvxDPTzef2zvnEWje2KtLyZ6r2LcoPcFFUWKZ9q9gBMS4Py9UVaeEoFPg9c",
  "key10": "r2xLufnUB5YQJfjfRTS8bJ7Zepitn3WUDtfU1b7XFcmqhkQA5AKntts3CkGubGYxxyWudoAfZ5qwYbScNVubJv1",
  "key11": "3sHweBAhFaeRNyUztZUBpQuhoTwMG1h2aR6qUuqzt7PWJpP8dPnbXN39BvrwCCHNqSm4G1WxEtJa1iWphuc37yVQ",
  "key12": "4PZpwBM18WxkzbkkRGmihm6fjgbmsiNNewvrPR6qFUbxzZE78qwtJbRe8AGvjtdXfV4Kx2c6meKc9Hs8p3xbkurS",
  "key13": "2ckKpuLNq5k6EcTJ9JvsU2xK77G7Rj2nufg6aQcM2paYoXcv3CuEw6ZFGAhR7W2XE89BAZfupCNbiRVB1nvHwpVj",
  "key14": "aCup7Z5cuvW5VxHEjZ8cZvtgLqbrZs2ZiaJEF9WErP1DCE2WDwHPGEdvVcfiJCXqA2GwdiZDScCgbQaXcHngyT7",
  "key15": "5VyoTHuNsL9pNxHzhwU6wU2cejkmsEua2AoLp1UUeMLJRqEgQa8LhKAtbPgQfm5Q7FNymbWWGRsHvvub4GbwGpGk",
  "key16": "2nYazTtQp3S6aA66jCznj3GydF2F5n8bKi4rE18ZYBQzjLfkAxX6doS93kehav9CzveiKHc9Q6FJjJw1uCspPUug",
  "key17": "58aBr54U2QFXNzrDrKwfFWn3mnfYWUetNxj1QhR1UysY1EPe5AyNo3c8YuhyA9vMxCRRe3pbN9vs8fNVYq5WMgKu",
  "key18": "j4rMCW2enUtcHc2tE5fHt2Am9a86dB1yDNunUDeKh3SGJ7TBrBx4uspXxir4etM2vwcaV2gKnSc7vmYRqpPmcGm",
  "key19": "5mpRZaApgxZd3BPe9rvabAX2fDhUtWWmd6X6ws6TbhVARWN6PfpoFMPu4niFAa4UEu7nMJhwbQUZzhWLL6x3eAgg",
  "key20": "2FFtAMRNhXYVt9FQMZmXJU74PDiwd1CjJ2xrje5nPQ6EZMh2QuskEDVrR3NM1crk3h5rLutuC9xw24VvB68vAmmk",
  "key21": "2G65LvQ9DrJoqf9f9p5Jmu3rP1NwDaH3yJxYT8vgmUnaa581W7krdAPPj111o2bwNjbKENkcaC134zFJLnvnEiWD",
  "key22": "2FGkayxYkNyg5kLy1z9tc2amUKzubfPNw1k59vpCKrZXHzE1At7DJ3Q9FuE6F719bX8kd2RCQ5NsxcHm1hTASRxd",
  "key23": "3dQE5YixiQEoaSUtNFjK6A2eJ8BP5nAhTTw8a4BcxywCEuXGxyHVTPcHWvVrzysUnyuN9tDrC72MVa8ypAYCdh2",
  "key24": "4UTSchHgVCS2QTuEgvN9Qq24sB8MmLE43sz74Vrn4MBvj9BytgV4VCrEDrFZa2eZnGjo13aR5QBtQ193g4Vwzbvo",
  "key25": "61i3ZWsAT8mzAJBsMCKcHWAAFXVGLY5Cp8P84ELKqZiNwFfcoTxaYdA7BzvAPanPTYDmSxbAWkhRtyzVRtv6tbVW",
  "key26": "5qndCNN5GJoJdJApjpMXd8rXE2sKkhchfqtA64xAwE6dkNUkrBvHX8tCybhHSobdg2NMYi2XrwKzXhbYZYctP5Lm",
  "key27": "5aNZTHaA1sw9dFnqSt7GmkDDNhktDJVMjJVznctj2aiET1M81PAEQ4PxxhTT7T8Us2bhpKW19T8MtFYxdMnyhwJE",
  "key28": "62Su6fvu36GPJ7ydhMD9x1ptPrrWpzufgCPubCvmGbhzcweArWmRnGHsqqTRrNmmKXmFpeh3gaLT5KzbRsYoxTU2",
  "key29": "3BiKeodNAYJ6pacZBGaw5fsTPFuH7Y13LfY4GBRJNJzRR6tfk5TDmQFg5uRpqK4bBGFq85x6GtiWHRw4t5Vn3Je3",
  "key30": "3pHmdjF1JViK4c4tXKPFbqFhmMFZTKD9B7Gk8Yqc2m83HzW1QGbivUeiC8uX9PjeSqf9M7fpiKDGzEeYwotqPzJh",
  "key31": "xUYzhAwA3PYvxHUock44tLbHz8tpipYFTSZnqRQQ2Ge7BCttFuKQo9aoxxRRisnmkWCycP9PuAsPDQrUZK4gm7R",
  "key32": "4FYGgSQavmHLqqgtaoJkUbLr5HrTfHv6Aw4xYY7HCPfoJPrquZz8Cs8fiVFr1UCp7BfArJaMqTYM1wogCGrXZ2LZ",
  "key33": "5tUivdE6kUWMfSitgsKVhKN5A3DbbjLnH2VKf1jZrFte8Qu2uEmc7qMWKJkWVnXigqivgftysuWwCZdPDZjAHzuW",
  "key34": "5MUZwGw89zvUYNQZmdApSU9uoUSPVnUunbuEu8ELWgAZWPRCJ8iYLfe7PenrrYCEdynaj22UtTLzenjdV5mKiWLY",
  "key35": "3b85phijmx6j3DfJ4Bt1Q5e1hHQZKsf5q8qCKThjhoD6cjpkLsfZia7duZ5mJ5dPRi5opM4gK4v4M85jQx9GWtEF",
  "key36": "4LLKR4ZFcacwSd1HNeTtPynS3vv7sjePRKNy5bE7GtxYd5SxV4jbjinH2aN4NWmqTA9bSv19DkZrPcch7YTkXPDc",
  "key37": "7pmQsdHtyMcso3XkYNtqQgwueVd578azSbKvdZ579i3m14tFDu77xBnQ8gMCAfvkYdxjAhpHzCpwgqUgVV1L8ak",
  "key38": "2chEnjVL1RRLVyzkEs21BbEp7GwWAK61C8EYxkzAiKYSWxHZ6kkKdchgvXkwE1Zur6GXetd5DQcm4WtaXMenmEp8",
  "key39": "51vq5acrLMEM21ypmRAzsGx67Qv8yqAe5uybTFFPWE1eKfs3xTKjQp8nXi5Ksq9x3fox5iPUL6bKDDesWua8dtFC",
  "key40": "2cwM4NqoqDyXBJrCKecUx5hzFrW6sc4d1gddobHCEw74bexxbDAa7FsBRMjroFQrqGSHBvzXfYkwZkkPTjmxky6b",
  "key41": "5BD4ZhLaXmEYDLq5PFathAtvbss3hYQ3rEibyYeo6TSnKhK3BoVCSn43YgHwRi94pJbmpxZKtX9Dm8HoDa6ZM3WF",
  "key42": "3Kpjq8qPwFxrYvvEn6JDfd9FjGVxZqUSbexny5H7MHGn2AYaGo1yMkAHq5RpXPQNjciJZ7kEukaJgGaFpQ9wqwck",
  "key43": "3y5YNiLZNLw53q1i2S3Lcrdq4cXoXmyYqMx1n9oDRZNoKAuEc7Fm4orNe3L3BEBhsyhs71iL8iMx6fCkz3Apwtko",
  "key44": "2HGy3dFvGFmHyH1etzZrDDzanwncP1sqymN8tt5xzRzgFiRvcrKUgWWP5ktis7e2K6H5n3AL5oSd3zbpYc7nvTRU",
  "key45": "4PaHDm47jj6vDJy2UZ3K5UDENw8YfR9GayTiXDzh5Abh7S2WgA8p2iYp1aYvtPTaiUbZk3itysUToAu81DkMxhfj",
  "key46": "4o7mmKuFfhEemGKQwsEBoynv3ENGyTPtnN3XUaAHEWwMR94CHf9Yp11RAak2NjBuD6YJBJLpuQiHMk3dDv3C8GpC",
  "key47": "Vxad64e9wvdMmN2hUis7NkrDL5rHdj7UyRvb4Nc6GcvgFPHpZNdLKrohVXa8Ypwhm5xMLSTAF3VfTKnCsqNrhMH"
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
