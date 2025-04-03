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
    "5zz4eN1kmjGu68DgwFZMU5jVKsRSF6D3GRFbFYUyha12eKkT5jikQXDry3gCzw2rbwanHyvPTwf1PaTuafQuNkkP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mgFsdqzjEuHZsWggiABgB863SShpnWCejy6pf4sV6Hho4GxStQUsduNvoGE1ci13YkWptc3idACH6geP6X1SBuS",
  "key1": "3LwgUypv1wMrkcKUHS2c9VqktvBmn4825TVQgCZawFAA2bbrf2xwFCZdxTvFrafVi71Lz9ABANsiLJtho9XvC2b2",
  "key2": "5ZHXfioXTKhXmfgKJ4iVYg7uwZfSdGN52v1fy3iNcRbTTWTYvmquMCWsVPzCj7NRqa6NjeqohyGZuXY4o84AMPW5",
  "key3": "2VB1x88C2JUNPbSoLnw7FsujsW7PXrgJmJ8dtmu9cGJVStkzZKmuJ65GrpA9P9kDLzCFvnYhQcQ3C4xEzMstBfEa",
  "key4": "5r42t1kJqEi7BnNYcqZvAuzmJZvvZE4CY6h2kMqdkWaaT7spHSEjpFMQEwDawuPGiJMk9yLaHiev1Z23GAbZDUwp",
  "key5": "5Sdn4Qy2ivpPW8GKarbPxNL2BZzbhiRM3XomnaLNgq99oYGhswoK5wwFsuY5NVd8f5a4yo1CJf2xyU5UEf95SLJV",
  "key6": "2xpzUWK7sWT3a8NdHypMGrGusFQZ7JoSndSf4fS9RP1aQ9sC4tVKcwqGsQ4Mv7M9P3Y2bZJeVnrMdD2ZXNniyotf",
  "key7": "8P6CJmchxpDRWtDEuVCMPLMmKnexsGWQ22GVU853b2jvUr3fwbVCTw2GQKGMgBkJ2CwKD9cSis7BVjSXGkLLSbx",
  "key8": "5j5MyPvg5pstbtGuoLQcGGtLfKYh8F8FbFQbpZbWm5U57HHwYeEKuf6ZGsXN5ZBz1WXGoC5uFmLxgsLwXfSQMD1z",
  "key9": "buoLJxj7sFWfP7oMKQyHDnzCh6KCdov2wzxLedqbYQcPjzYS1ZsjfTw8MeDj7gt92mDEinHHaVxEFhZ1Z8h5zbj",
  "key10": "2ubjpLFiRiEZo3K9mzeZ2ysWz8P2TVceMLQMdzUSFzhbfx8deEzZgYyPpmpiNdfyKqegkzKpbc9JMwff9DS67H5t",
  "key11": "2Lof5Q8QQngMnYD9nbp9CwdZzARXPZuoremgW4iVvHQcozK9K5xwTbksyAbA1cRHMxTSLaUucQmMjuPbHyf4n2mX",
  "key12": "4rN2WKn4zsV2oSEmV3DTJhYrZCweH1fTPV4ijR4eq699idzGPhYfxzkqH8CqjRW6xuqPr44bNNra3xULJyCWi2uT",
  "key13": "3gd8sDBbHKSJjvjndXJiv7jSPtWFFsXkrgZAwmfaWffedAijx7MQducKsfE35B9DGa1F6ZjVxRwg7Gn3jN79x1zW",
  "key14": "2mxFoUoNQfA1hHPTUYN5XcJUhtURbzZzjHU6EvAJj46jKpyd5UwZLRd4zY5FRVyJZBs7FA6T1ehH4TnfX8Y69629",
  "key15": "61wH1tYn9Szs9q6BaAtNPxLzMYqkwozbdzGn4Nuumx4JaNEi2hArnk9sMrn4pcrrrFPm2GMMjrJXoKKX4wGHWKon",
  "key16": "5v2x3tmbWaBKeJDX5dzzahTYXhPdx23avtjgTHdGnubQwz7ggYjnpc8CiS4ED2Nci4y7r5S81Lz7CU3g9gVEFwAA",
  "key17": "33qhixB4juBPtAhtohM6ZhLuk1GY6rUEkVzy99Py8GdiybF4UdXuRSd7VXXzofFbf4detwaEM8xGymfEmLevzbSS",
  "key18": "4h7Ba4ndcTewXnLu5SLu8m6Tq27mqkiUzBvq69JNeEuYLyCySV4BPpzwhq9PTzFZzf1g4vjWkaDYkSYBG9ZCfKw6",
  "key19": "3YyyWxeYk1BNKneLtkGGszaNA1t2j6hVd8T9vgoj6E5kPriJmkHUUqj9ZBAEDUhFB6TZXFJjZYVUBhkpJzpfeAn3",
  "key20": "4NcNQQGRTLjszGTEYfQLbnTv7a1i6ugHKNsNNwCWzwReQ2zE8o4xjSMiDMYugF3wFqzCtqgTzK1Ji1cGSCE8Fqho",
  "key21": "5aLhJ5Q18ayp5xhtnHCJZEHWWmjUmJumWGNnbJ1dTzB1aSeyRSfEVsnyhaUstuf1TshVRsdR5J4Taw7gGp6shktQ",
  "key22": "2Lj5FNfzc1yLH7Pwq6ViRaV3aQiQTw1bbJ6refoYmwV2wxVX6R5Eed8sWy62J7UUps49eWXyBCMoz5yehRymvzo4",
  "key23": "4qhmDq7YexepfBuyfGoiHk9BwHr6Tgum9J9XA5SHSmq64K5b2vLhjMtMADKPqFd4mKJcsZiPuLP6nzDibApbjBwD",
  "key24": "3arFYEkVx7fPTkNFdgPhYq2YxTKHGBZo8oLksv7CjeASrYiKJG88zdWoVxPKPYDGXchjAYQND4BUigVAJDsZ686A",
  "key25": "3PEXpnx2qNVhZv9TPosjYSrDwbQkD9MrLUQZqwWRwk4t1XNseJUoFqdPSPMinxtDXtCTvG16PwJteY9rZC98rBaN",
  "key26": "2sZi42kVKrLwr6xRarGSf1NzuDcBe1BRaZr9j1WWUdnbAwb6fAjdWLcxQyfEsAPsggUx7iPnTqQpbjBW3TSpQkGm",
  "key27": "2sdKGqkSap4VBvGRbHNN6DoRsxZZSuszPj8CUzCptp2cEqbUmfXNwbNbm39Lxy37FtmxKPKVNL4XdSRZhXc44g6Y",
  "key28": "QdCtW9ebCtMvRGNiRwpAoiuZfh7ZdU4vtwa8PGF2psqndGwru6sWyAYv4AzqrLJCVsmgRtZgFEpUJ2ZotRX1xpq",
  "key29": "ThC7RfpLkPny4CgCquzqniXqDQQKk1H8w4cDihZfomcwTsePUPCJytzuTSG11qbzQPgKDX4kDXsua2pCtXhq4Fs",
  "key30": "56DWjH6Q8kETmUT7JM5PWvFCfnAGbtNUkkqgj1NKC6kNbMSbbpb9wVC8bnBRw2YvcawdXvNMyGti8dxQHvZFN58u",
  "key31": "2w6PHuDcVKH8WMcGRJ7tPdsDaXgEtSMkqVkng4MDBvoabsg1KcaVtz4Lvjfsq63E6NFm8KqPkHAC6NGhxXMLm5KC",
  "key32": "47sZunKTBYihjmM9sQBSgMvvH3aW6MkrdX2mQu9PSBkBAFfpbgFsVobMpujH6Pa7TF9sLoQQGepYmvub3wQ2arGC",
  "key33": "5yuoJzdoZW8Y9j4efoLHUUfy8rnJGYjRoj53F7TsnWR3LaSEy1uYf22r7LJPaNzJKP3f2jKDeRUwyBZviJ1rEG7y",
  "key34": "3iXyqS7ZwRhDv126BrBvMtmW6KR6TibBtuKp4Gu5CNFUQu8CSQThTqc3oas4od3LZgM32t9tpRCKuKeNw4f5GPkc",
  "key35": "2DnGabUuw5bXp1S6SoY3ykVtWNwHTD2ouKBDbf8NKs797teiuP17wMqior72YLtdAwnG9p5VfCDSwazYT24fhL9o",
  "key36": "3LTfFtezCLsNSZBf2LLTtmwgSJJ8w1rRdi6fsXpwhzQArhGEcBYJazWfiCeRMg4d4mGzTAeRbA5M17qCtaEEyYi2",
  "key37": "r7sULy4cwwb71yn4Bv9stby2537rxsPxUz51TCWuVkvCTHqd8jZ3aKkBNzC5Z4LAUwcYoXkS7MfLQkS9WY7SEDW"
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
