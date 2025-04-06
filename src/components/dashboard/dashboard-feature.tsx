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
    "4UFozg766cuGJ3PmpwcH6aLHBW4AxV4Tw7TauqPAyFmJ4NWenxvfV2movywmXuSU2vEt8WxWix6hB7XFX3ibZRfb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3o3efkBU3sxz4TiU5akS3HFTWkLuXLgj3APWmRsfLNw7133WVkCNvtxWZyaC59AnC6ZJ6tPFmUxzyTztNJ8QK8fx",
  "key1": "3M8vejtKM7VmjE5yfr8UvPbqtiWtoD1s9qxD9wNjzmxm7CQCGxzDH8XKr3mxf3ixutwfNV7qiPhcmoPjBcrfFaiZ",
  "key2": "4fXCgPmknxwodav2YQbnpS97c5kVsxTfg9chE3XVpr5toTgdCoHpAoN2G97hfvYWvrYqsnvcxU3jszsaBki973cL",
  "key3": "HDssQtNzK1EzpXbaaURyfYVc7sYekDNRLM5XnxVDX48VtQeLP6onTFgwT2vvbsA1RnQFGfVtV7X35EpWPKRyFd5",
  "key4": "4vYDq5vB7cC464NwGFm8VLuzpBcuEEXrnvfw7GfogFu8b1xwTpCEinBbSjtc5w86YFeaCshDK4VDxRDSQicCASEY",
  "key5": "45L7hhkLp1cmtaSgwLkdWkr2p9trVNi5XDNsb58jVfVbAXg6kqM4cm3b2WNgEtAZPWbHt7yW5BJxx2AgnBuCgSAk",
  "key6": "5Dwkn86GffFAdUpupeFUkQ1RxqSW6ewMYdU6wGrFBStkQbnUHRGv3thtJuJFVoMnMwdDJJPKDGzRZxZ8WVwtq4GK",
  "key7": "4hxJPCS48He9HbVm8eZv5mxgdgaBasewiic44LxhnbJ3fPbBXdc4NPUK3r6PXy1SwW5MEkmgTehGGhzsqnMob3Ah",
  "key8": "4jCN3ocHyixx9vKiKCix4Bjxq3Ahr8StrzixjpBSA4Hy3Q1pwxuhukzn8wSgKfeHUv3FvP6ArinjhakJwvivZ8r9",
  "key9": "5ato6gvgtJAxE6XcdQBfsj4VeGRd3dEjiS1McTsrQFKQ3jKargmzg7WwUuRFC3nPJXYg7mUvhBE4r2aBTL852hUP",
  "key10": "6372aukVCRNuQ3ttynwhRcn4WbZh8tgP6FRagK8x5StNoAeH4pUt6t6Nhk836XMeGAHDginMT9arNzefbaYGMomd",
  "key11": "5FffbTrQVBd7sct1yLhNEkD1GS5cnXk2iEfM2sB6faKJnX2iUkyHC4PPNKYeFP3wNQvPkwKMeecZYU1P6HxvoR94",
  "key12": "d1XnaT763LX3uErKeubWTJqUXrKkGXuH7Ug5ktQ9XfZ7jw4K3YwnfUMzLBn4YtcQ6ywpLNdTfk5ims4y1ZYA1qD",
  "key13": "5S3geg55SKp1PkRhye437PN14EfiWQQ7GsvL5Gukrqs5i9bTrAQcRMa5eUGjHWLaaB5L9TrztoVr5c69DqvXQsdW",
  "key14": "4tNXKbpqst8JhgAAAkDPLJr6WXhch3DkrJBBgtnPHQ47wg7mp67yKQQDUCZe3y5EuUapc6s19axLF9tsuSEEbAXk",
  "key15": "fqoRfiqmsDNDnfV981ukxZi7EL7b5oGeX6rVyQ4HXfLwbvqvoNHYXSWrsCxZV69ueJTnv7Ym55WTXS7FeJVFaL2",
  "key16": "LqBxmqtyagPh8q4VghhEsE3QWz7mpz5qr2HVqd6AjQZPRbXqyGt7FhAg3am7MmgVR2f1XdHqnjQLvjxyzR55ezK",
  "key17": "3RiApgvA4FF6ghxTKj1oNWewyoshDShpLNCQsF6TZHi7csXWFSmQdM95UqCkaDDr1PxrRZ9z8MMFCVWuR9FTwg9B",
  "key18": "33ep9zzH7iumih24fnAooGYVtweb9nrH9zRepjube8K8wMQzu1oo3rkNzUPSU2C3KTm17D3ioYsDcaYuuazFRsN2",
  "key19": "5NbUoqLFwEb1KfesBrbcaTJbbY1m8KFmF2xV6mD5Zj2iDqjUrWAMGTFBo2EPcpVxrFQxWrh6LnZWa8ywkwmYj4BV",
  "key20": "6AfixfX335FmqHs2yL32HP12UNfCcZE3EzXCjkPcTpKUmHqpgRmU3VTkifMCZTmHKidVebeCrAmxHfxj374PZEB",
  "key21": "k5h48rmJvGmW3TJXVqsVncLX753GUX1JPWnLAJo4aHXimt56W1wjCDKu3sxSy79t61H7ZBEEB8fr6n3B5yEDzWq",
  "key22": "2W9gQ2i3vu311uockybVSAcH7AbFsWrJ74Qkuadm6r9fpxrdYHtV1Z645Qeh63aM5ZWx4Rx2EwWrCUzTRBMopczH",
  "key23": "5NAE4ra96YQf3RxPAYewfEMPS3gmpn6veJWFmm2g2dquwQSZDuf9ex74nBJa6H8hG8tfqBvu15uq4JM1wYcN9aK9",
  "key24": "2uDVQBQxpQZGsToNn6YwzWsTg6j5ztKFTwx36SyeBZeDFJXXPwVt9ZGEPoa8EXE9wd8oLmq8kysc9ciGg1TVM8GR",
  "key25": "2j1vx7oqNWaXVXktx3dQqbf4dgzc981mb4fjtWaESU2V1HMgPfMt5xaBmKN8utmG9RNge8aYCtPSR126ZSDtTbBw",
  "key26": "4jZQ2Ybvy73SK8cVjYPopL1gNhd6ZChRK2a8xoEB31V5J4Vi52uyZR2aiCundNkyF2oPrPZ2Xq2ify1bLeVdaDiv",
  "key27": "5Do66CbRkV7NjBc2RAn3QqC88NGAz1xKahJpNp1Q53SzGV1BSCJ7oH7gFdXbiW1MhND4yUbcx22XwHpgr8FVzz9q",
  "key28": "61oCeMY214vbxEyyLs4aogL4at2cK36Ls5myBRR7gHkrPY4pv2gQrfQFnRnkznwcG2k3rJmxSjiahtrCkPiffKEK",
  "key29": "4hUAttqzhKLrzJo9oPwyScnHXWRSgcAYtAwj9u9YmcenmX4kaWHx42gBawGx5ghp81Ry7G3hypHpmYHGA4HzEupH",
  "key30": "Ej34Ltmwnb6TuiAAf1qyPn5q3c3fxbeJm3vW6656U919mMhHm7BYq8xTxVWWC93bNp2jFq1MVzwRHJnQsuzYMj1",
  "key31": "5mYY3k7WDXABXE7QrrE5yRiR4gvVckxkZbtiiH73PCudRpHSBAtc5JCw1c4WJy7bsUVC4DDKuH2uLTeVdvBoMsrK",
  "key32": "2ScmxKu5wxHigmu75KyaVPUdCiQaBa41R9jriZrzAEoWsdxb2mXbWW4YKvSQbdsB3vU83dDpH9FQzoAJyKiKRJdN",
  "key33": "PSfP62azFSQd8T59geNM9x8ovfgKXXEctcjdmPnH2XGiybeXqFoceH3muAcbQC6ScpLjT5fWtJn827vEuyGqzHP",
  "key34": "39ifTSQ3wYPAwLgTGxJxtdPzBNEZve2bNBxnuf1Jy7Hu3yxqVnvMcv2J9ZpQzS9SWX9zMfLjdmxQFtupNjVgUmZB",
  "key35": "5WwCbv9RxsUPwQGavJU71xxb1km3LhQUuBUSNq8qyYB49ES2UhTWE8Y7aCszGKehr4cEgHKbUw8SHcp8mqH6SB1",
  "key36": "3SqmXb1rNYD2KUEhTPoD5s7UvnotncDPbPeVXTWzKbpWkJhL5PYM4HfYxbtECQfK3BMRCbdXozHJHpjZqdJpyZhq",
  "key37": "4XnVTgyr4UUpoWxBRMW8DyGKWF36s2a5aXUGGF4VP9x81PdYeFr7Ld7dR16D8N6qXe1fWKw3KDB4QjFsiWq8YUWH",
  "key38": "4Q1uooPtD9vYEhKQiAgfHrye88qjr43DQubXZ6hUVBLoXBK3X1iLZEZmkpSaP1hT4mGJ8yyHrRBs1XUbcu6EPgtV",
  "key39": "FLRxrih5BFfYkaMNzFxuqWVrMfvwKszrYBotep741egC8jziGfHT4o1vucHhvEAYswegroJKov3ExhFSsduWmgB",
  "key40": "3YTNSF64VkHbNqtMhkt9JHyuyNkWMdi2y1aagAxNVzxWHKf5touss5oYJ9RUoX4U7JAdwAPs8ddHPoDCJdqDsiao",
  "key41": "4p3ELcdf6kX1eH55XEeg5itJL8Paw4A4GTSfyEf6rRqGtPMnLx4LBPAP2eujfJcb5HTgDr9zXap88PEMDc9swn7H",
  "key42": "65kV84cP4FdefRme2gVkivykP3FMjLJi7kzzvMQBbEjhiW43egewMus8LzndFkUF6qs1zggaaen3S9es2Hej8f54"
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
