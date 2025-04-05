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
    "9o42FfhHJpYTeU9u7iuNCrSFffceH627SJhwYRiCsJsx5VnQUUqfPnfJ2iHKjTQ2pzfizU4wA9XAqMLPr8UHWNj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xwHBUtDqDoSC2GHqtbXNm4FjG12KdXLZ88kMDYoTBheWaMsqmXJv8XLVQxX4X5tCNZLtgwQnr4rdY5gekrWevL9",
  "key1": "3ibmjMx61y2kPCsVNvraU5YHhFUQqnT7qktQVJs7xfrq3jvYEFxzpMxnrnNNwdyBeTfVapxkf5WdWmwtrEj3E1zw",
  "key2": "28NnHYeA63JJ97qwJGbqQ6uRVsnzufhAAKzLt7oDmJpU2szRRzYfBR6Rgqfru1cqod3apFoLH15FdjhBeqjPesb5",
  "key3": "2DU6wxPdQk5aG8aoLR83ejKVSChDdwxqUEfnCWwZ1Mvdyq8ujM7aSrQH6LJ5hnDiZxdhdkrhmXjd8yhBTUCBXwa9",
  "key4": "5hnZoVBKG98CucQwy8i4YgN476AhPxJEeGtLGUjYK8SUYA5SqVw1FuwsNG5CZgRThA8CcUEgQrJnPKpWtr3y59aw",
  "key5": "5rxpy8nw3nz77NYPwmpLBJdpCX7UnSBe2hJYq8URB81ACCYQAzUfhDwWLq1reA2W1z6xfRFrB5Zy5xmgW8atQ4VC",
  "key6": "24FJeZLcroR62BLmbzB1R21rudHpo7kBAGQbkek7xwNr9tRJXHU74LZfCD6oooVNJobX3L8yWY9m9o5n6krgNHPY",
  "key7": "61DgicwLYg4wpZLEU3BnP2gYAeZVeboha52so6NVV3cRp5cXqMJew3gUGb3S3wWrofYxNLp6EXJ1me1oBeuntwRM",
  "key8": "4oqcq3wH4ZF66MAdZbv1uzA8a3UmKFsXThwcQzTvV2jdng7TCjUkWx57JdrGyXEnzLuDBZ47aGBjUakpnFZc7BAD",
  "key9": "313bUx4s3pYghcLbNT4PHoxUeTj7N7WmU5qjASCbREgyZinq3AR4FzRmBuRNwLsB7jMqLEByvx4EEkUfamrY54Bz",
  "key10": "2DqGt2WsfKkKADMXbd5cBVt39w5KJLGWo1fPZRAS2YBj9QtpvZirn94BE1KDTHKRDQp9bXUUYhkHiQ9nEWSGfCZW",
  "key11": "2tGQungmX249TWcaDq5YASmpghNcCbMdtvmKahECM7yKjXHQmgNQTR7Rzyv1PW2MEhDooozePfxHJGZeWUTvWwqQ",
  "key12": "SEUQMiFXhwRaxM7oxHFMdisTqf5Suu5E2KQicmrdMuRc6JJXUX7vx3sHxZJj2ay4vPmJSPrskLeKk8pMaeNJNcm",
  "key13": "5ByrXfoHs2oiHbVh7BmvgpTLWG3Ge9DbwK2VP7rA2UeL5RbwV9HkhK14NYq2fcqV4peQmkoKwDn8yt18rT4Mcouj",
  "key14": "5rDjFwQs9kjPGhiWu5PHQeHiM8zTy2EGRs6JLe78jVHmQPiJgEaDKddvXcFfwBM5Z8HhGYx5Q6pT6nxcyASNvRjT",
  "key15": "3vdkmQNYx5rsb2JLmftxCJXzVhCwVhX66DryuH2GggKe7pJzwfTbPaV2zXBj4FqAcWw4k11pM9FY5DSLiHXE3QuN",
  "key16": "5vdHguBNRvrqKecUkW4qyKQvQb4Qd38W3qedDASWtsjWDDJ1BmW9xEMcwCuq5Cs2K98ft5htiSuY9hq1BmfXsF6P",
  "key17": "5GmzCZ6y4Aws4KuDwQqdABemh6fubrSiq2FzJzgj6P3fG75DG9JHUnNMBkE9ie65xGHt6MMNFskaZs6aBp8xk6n6",
  "key18": "54E8tDbvj2i46Sw7ZRDZLzRAa5WM4jDPftnuTrWggMUs9tjgreRYvybE2AV6VhEmbYwBLcCbdfyn9E5VZpLLiDsV",
  "key19": "5yVfKYPApQbBUpVQ2Cjn5rRCi6uC7GPkAvw4hZznrppmtkJEDqnuFR9pD5WXnxJv5P5wF96rByYWenrXTa93a5qd",
  "key20": "5Su5ahq5vN5bC5aeQ22n627WCHTg4ZEvF5rHLui12Dqt4TinyRfACLTkQgFiqk8XPPjtTp7zjzpX2qUtXv4i7bHz",
  "key21": "31DdNNztHCWndnaVcv5gPvYckYbbNJPoMm9noajvBvCmsGCHVoCaxV88HBg6HopnxQw5s2c4QrF8DvN7JGbrn38e",
  "key22": "3QbtdaGBkaybkbrpfihCWZ7t7HHdHg5UXfCqv1Mfru2qPTgyNqcosDccTwwfT9CuKFTQ1rp24mES8hbEDpa5upSS",
  "key23": "fmqfjMyZfkMDdSoyxLUD4cZCemzmWAFz8Cpa5f9ZcHjkKPBGF2UChndLkY9V2Vvy7wpc2gmRSjMhqhWqzZyGX8Z",
  "key24": "4uvB3Pu21xki9CTzpGF8vbQ3DwXR9mpzwPYm6UkkUhQiLCeM3Z3pnYFX5DN11QWnnuaZWoRTnEioGFSxNwhTFsmb",
  "key25": "5V8UxCAw3B3Hfg5Yc2nnGvbhuJt3AAhbSELdRthAJ2c1i1YNVr8tzt1zwD8J2tRjLBHmYct3XrjS4kRyPyfANE3J",
  "key26": "4cy2d21xJAGz3QmABwMk8pibCmVHhhFUWaYuct5VnoJkHcMKna6NkKshNYCuP9dxmr8m7TFAa9XurdqoBgFgvZJh",
  "key27": "3TxMunhoqK8sURjXa2wu8ZL6NuhHeJEgA6McWdwRoqawbHcLMLs3YHsNdZetXbQvZiLcp5EXS35HQVkNGShYu4qR",
  "key28": "3az7begmSTzyLBxwghGmrFmChDddsjWe5BmKd5AqvTLe6W8EhAF7E9tB39bL5qUTewZh8j2HRjdtoM9G7D6EgzZk",
  "key29": "2odfnEFqXqmEnMDKQJbW1MBs4caqzvpBijVPPohFm893wmstEUwD25TJDwo6rJP2aosGY7YhNG9paptKSatfixpr",
  "key30": "2PhDXWrDUFFKJT11APfBmpbWH8aMEJ5KKkyCm54CmuNtkfca99QyjMLu5suj8UbsFqfBZ3uMMWKhLqP4zsennxis",
  "key31": "3ZzW4qgbYXJL2Hm39io3mZcscyrtY6Mmnt9wb7MGuoTUriXvD5hWz5htVWBZ3YrNCCt5CH6ju2KUnvPU1HBRC5ib",
  "key32": "pNuvEpNc54Fq6nWsVfcJ1g3bYn7wMKjkGwsT18bog3y3ti79UUWT68JgmgwGMJXNPwKtwXqBQJDVM1KxpGhQgGw",
  "key33": "2egeTLgzsAUAaE9qT47VDNZUp6UmyFaFWvq48cxC6RYPrAPLvSUitnak2XVo8TV7kzxs7AKaYzte1Zw1ukuqgHw5",
  "key34": "39mDu1Bv997wgzbHFWFGaffLeHN2M9iyS85Z2yXAwCGKUtKmXmGuiVQ5WH9qDsnPrYRhzQT5XUKtxWzbiyMSf5SW",
  "key35": "2wd2EAuiYJnncMUYr9zfi3BHWEe4xZ9cQoC7LEft62UxqWSM8oZHpJaKno34ncDBTSPf9puXQXqxd61WkbYLBZHL",
  "key36": "57WtZZPEqQtWEuQHp6Gy6U2M4tguW7jpQ2CGJM2Qi4o6pk56rwskjcruX8997w3439sKUKkzEPbvkhSKqXufUb1H"
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
