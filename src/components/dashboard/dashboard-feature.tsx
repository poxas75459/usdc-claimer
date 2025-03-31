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
    "TpsUj5Y5vfLsP9hnXDYSPu5tVY2rav4YtZQSZQw5ME2NWBW2sd9Lzit5JrwXJnHYTcnfQLE1cy3Akc6cAG4pCw6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cj8GL6osTFpDebVydmZfZndeBjmPvHjiiAk4vAzQLh1Qm9q3DiKrA5yDqjVfYVGjuVwc62X4fSMLCmUTqjMgREc",
  "key1": "5AD2QTVWJm8DApvKpJ66iegrDEpizXm4Dbw6moZANHh3YFqgi8anq4Au3GNggDzFYdXv7LQNYubV9Xgo9amMQqYK",
  "key2": "22b8kgwLhHZEpvipRnb1qWkRt3sWZriDhvV86LnP6pSbcrD34Ag4XPDZKUSwsGv9Wp3hGqLR1ALM7rnPbmLYrF49",
  "key3": "23ZcJDoPJZ2eoqJfhdBEXU8dkzAk3mAW25GJjU536i9x6ykKiqk8ScfJ1ZAEALEHZyXehqWw83ACGdab2WZvsjvx",
  "key4": "34ZyfDmG7vmyYFkVkxrFwSn19jPRxoeyFFpuM7xvKdugg5xS4UMebZwSYvEdn7BNQWXTgZ37KY8NjTHHwviMQY3h",
  "key5": "4TvZ5DHfiTAejbPzNE2C6HMcHDEsNegGVs63SvKfq8cUXWUN9XP94M5WW1iW41Nu5yrRbU2Gn4D97qydiXZZzjiW",
  "key6": "4GgnBKCYeCZi9ReaGkRwPGcm1dPXHaxwBFCFh92GFnNJP63BfCDzEGCBLSYo4LHvyc3VHodxgFZNaRaYqUH3ny6c",
  "key7": "2xin1bg1TSY1nVTXfxKCMgJbwHsTBcrLYTh7h5KcFPuv7WbYdHaE7xEARxtjqPPdNWt9NFvTAtnQDLYdRdLm2mqw",
  "key8": "B7Z3hH48oLY76WpqhKv2sHTuV68wGXwx99MPQe1L1vQzqYfVUuSR1phoUg5WFNzneZDm7aCgXpdiUUUPgWyLeTx",
  "key9": "5VVHTCpzEb8pFz9Qvb6fKa2eUrPi9CsXwe85nvVja9APiDLqGTsPQkMk8eF616zJSUiqF6hAG6duh12tazHy35Xy",
  "key10": "191zSChVb1QPBZpGA848fiwAycM2E87UrzGmGq2Sd5Gj22CEj9CnMhkPdwMGFb9rh1a11yNB885n9jJvFhA2GAQ",
  "key11": "2ZTDVdNgemcYgYUWkwTou1VqZMqE1bKoA9ah6gbjB74fwm3wwpu7TyrjCiCRAGyNKB3o7TCwfgztw6RqCKCpcALd",
  "key12": "5hB55AabX6uhVAShq9uCXh2BQs4ebvi85ZMwzMjEns3Q5BH1eQ2PzcuDasJYYid4UAWAiT2jKFbGFLn1Hw7GSYaz",
  "key13": "3fPN9tc9Fz7Bw21L3P5w949gQ5KFDMcKPTA3heR3MGdQsmtPvQKjDsq2JLr9QScqzbQDDTozimjzxW1qcopF3QYy",
  "key14": "4StpyuvTfdmSFeNMjDqnU1w3Pjj4VyANFaoTDpJ1DGvS6SmQw6fbSJHHza2B6voRb59KKsCpuFo4ezYnv5RXKGRe",
  "key15": "2SyAHFAGPJ1qhsd6QyTLSE2Wzu5werNpfReAqh68UqFiJcwKCBpEXXfz4VoczgJb1mQEznWuTKB2FRcsyoCRqExx",
  "key16": "5FPbCLJ2v8th5FHCaecCNKFZXdZfJb1U6cgrKoDAh5guXR667cW8tR8yD8cTyqoeGYXcyLojkf31mwfGjUsteDby",
  "key17": "2bfrvtV6pnfvkyoL6GE9NDXB8MjdNoMJySmZNXGqwyDV43tFaPzKg9C2CnRCc2M9kJBdQxfiDq2oMtVQvctuAa1G",
  "key18": "5KQNd3UetcVtTUxg8LvFMoLnjrTGBzn9yqM7m16Rg1z1AQ4d7CKGzmdtLgo4cCSt7ktkVSzB5FVF2qPbENffD6cQ",
  "key19": "5RK99kDsyuzJTXzJbZzrL8M4e1KKgYURZfLMVmKPJQNidusgh8ikLjm7LUBo6d9yraZjJkYha6ZKk93yRZVEwiVz",
  "key20": "2A6K8TvQpjy3eZ1ciS54rhDJ6GLAeX7PGtKJed6bLyHF92NxhqVCKEJjcCBfCME1zSJ4abbwGeNsj6eoatsgpP6k",
  "key21": "3PPoxAuk53U6jZ41ey58wWnJ4QtQ2DXSQkBjrc5jsLNef8MZxJTFNZ2JhU16oc4bjofZekdpi63yxzqDPsxF6ud6",
  "key22": "3jmko7KkTWnZHRK1srSxGz52JjiSHK9zmYZAg4QERWP71s7N53ZNmy2bbuVge7PViHBaC3mdz9AM4rE8p5P8xWxr",
  "key23": "2oRbiH36HaUhL15kTzwwEoejVwyGwGZjKfHbLKe22SAz1UMQDGh1scn7vVm5yHN4SgxDhvXKrAwo1WKRbVfUCJds",
  "key24": "5mi4c45GXiFJZy1zroyw2KS7o4qPU2rQNKQZY7iDmnR6JVDCQRHMe45TtrmvJePAYhSfXrCuYdkpAAScq6zNoRvw",
  "key25": "5RPjN7biib8ESmsXAELDV6nYpztSnEt8NCDYpsz5UAXEdGZsNB721ZLknado1JYYkmFL59SbJryVc2AapAxbxa8K",
  "key26": "3FS7TJdFfFXdkzgafRt3WqkLSXU6ad2d5DefPpZJ92o6aGRoporcZhNH5GdUMjvi7u5yE1GrrvG7pZStLRbtN9pV",
  "key27": "2eTprmPVfWikW4uYcEghy4Wd4yStSnvyhazB8jYSYcMeqiYv8XsaVbZRmqYbVAMntDyciegTu7Jf2ztZHmvCHeqV",
  "key28": "66gPBW4gBb9Wnz9UZ4vMXaxtP8rjX7yKLgGW5saaQQh9BUZHUZ59hSLYgY8hyagMdicRq9aUxYy4AXNfMrp6WHXH",
  "key29": "4StAiw2jf2ySuoYx7QBz2bUEzRyWVFjNAvgJUW4EENAGp2RjSxNcEj6DUNzAEitNS7NTzVRmaZzTx8qrtatbvz1H",
  "key30": "3ivy92zP9ytwtppt9pf21kA5CVaXCWTgRLEihvv6MwZUwSEXAqhbWheJBdswUJ5zKn6ERCsUMHGJHCJsdsbNLScE",
  "key31": "4CRv9ZngfCURsJgEbw1uN23Vm2d2fxmUC3WPaj8tLF3HGYwFMAj1BGuwgMxU2RcJyZjMxxRHQ9oS8dVFADh78qjz",
  "key32": "5dsDeogvvTfY3XdbQNnR6BfoRGnp2EyqYLKtrpgoW6LgSWi1Hnv1aoLn1eHiknC8XJxn164Zzhw4Fb2PTsbep9y3",
  "key33": "3XvkNxzh4gSPG1V1Fxy4V8v1BT8smhkzWJ5jrbfYX3guRYUvYt4pS4sexQeq6krFBXKwJ9hJBAEqBrbyUEbma7gC",
  "key34": "oZHT2Xy9vyzqgzwhj4Yzni8qEo35Q8ut8S3AcwGKDmRQKz3koXuLi6bbwvEJUmizwG6AYDPQeWVvdg3k9hPT3VK",
  "key35": "3pWQ1CVsVA1UJUYWYFaNXyzYYajq26d7puVCoEWAmUYr9gSxqhUTECgF8Uv62DXPqAQpsRbSZP3t54CqzrXEwq5z",
  "key36": "BiZN2UoQ3pZtX9BapZEr6RnA9U28NbXpotK79XFnWGaZPxmniid7oHsYcAb8bjsMXvQLV1Q14Mmz9dWvrLCEESn",
  "key37": "5ZMA8d7XBVT4Rit3qLexDARfu6vW95jixAb59frca1PRUWJfY6B8GxLBfKWWHSRFuyyAZ85GGL9uvgZ1fdbF5pAx",
  "key38": "5BNCLTB6MHDfJj8awfLsxx3MPL6w46CVTHZbRxL9tvMUhv9zk8GZdZQ7mKqwCoaeyi5mU5naTziUXRLVKgP6Wga6",
  "key39": "4oX9temoWreDmgEwryCJ8SkVXWuWK3edjPT6TjFepgXuPSSRof5Ltk4nHtJqts7KYXW2wu38scAYrUFXyMCKTwcf",
  "key40": "26cnJnppQG8UUq4yz1TCywxywJKrGhPxM3FTzHYDqfqSpQmUrBpvshJDUE1yGnQAkKJEbnNMbxGhhXAPPmxcudJv",
  "key41": "4FvX2RAfi3Co9rtp9d8XyvzdqjUnURrYmhyM9WdzhYLvYsZri6gTzjhrfrigW5YRdSw9x2SpQdfHxBkU53nBBC2P",
  "key42": "3vA3LXd6czAfLbXuYqJGsgoqaQaUBovH6csbM5yGBpY1GSYM8J2VcMoi7o1ASJCKSmqXr8Per6fh9ScioRfXnFSA",
  "key43": "2hgsGHXsAnTkz2T569QBeEx3ejAXpbTih81YGZXYbJsVdudvkjwYdgM7hXYG4SGYmaYgitWWFS9xu6bCYxQfiXMM",
  "key44": "2DyY6CQXYafpPQMgm9hsK7N1hLjVdZCjhCUfxnDT9wkicQTrWjMmSpBzHatv3DsXvHeS77t89hyz15jtE5v7YU1W",
  "key45": "3oiB1uh6AZYX6ytWXD1FEs9eqPzY98GHtXHKx8WqpwWzSaEWp5kSETYTL79afNDcdMZpViMs6fmVWtKYkX7bQvZF",
  "key46": "2sUYyBp8TLPYaXTYHpqbTLu7JuhqVN1egL1SJq3NRF7vJFE93ZwSx7WYh2SDCR1MSLGXN2BEEfdXkPPdmQhP9HLC",
  "key47": "2PaZBTVCrTDkFpSuargN3DEb6JQXAvpsptdvdvXb2LPRLTfTGJVH2CVKcpSPMYZiphcw9geRwzpFyjBPv8EFApLG",
  "key48": "3hJS5WBftZtNYRNz6xMPibTTpHFGHiRR4mHtgaVMFKtGNtoXxunpWEwwSk8VPS2xUycquWkRGAeNGHRsY5Nsb6VC",
  "key49": "4MojZPu78yqGLSi97oxdEVbURCfaWKLgx12F5CedQxDgvdtBUxpMpgLH51PioDvhAihYWe9qXS2ng8oXyXXNHnoL"
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
