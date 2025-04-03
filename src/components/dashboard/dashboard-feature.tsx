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
    "wxbBytZhxKt21242KzCwboF8sLdt9b7VfddP6qi5qyJk76HUG6HKi7RogvFevd5m4DJtCpe7MDDgFxKJgcTPGkp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iX5JeQrpCCFWcnjxvwL9BcZ3jVne1P2rrF97a1xnkNEC6HmztdfRhxR6mBJ4GGS7PUd5ScWk6MY8cbK2zKngT1h",
  "key1": "4FzU61sefKmabBcqvTtA7as2qbozWEqrHnKtb7JcdQMPg8eEnVXK3u3ZVnmZdL7R9Vu1BZs7xSMFNA6cY7B28Jbu",
  "key2": "4MrxU72JzHonrc65mppqQakP2qne2KCLcZc8EAFd1yVbnWL923ax5S1EWLby9L3SgqSuLJgcQHy5BfA95LzXvgC6",
  "key3": "36oTcrrMGD9b8Ba9TdPjdHHywP7Zu6ubiuRRSCRWFy3rmGWrZDGk46spqQF26LoRy4t6f3uueT8nffr842i5f6ts",
  "key4": "zjT9ZK9nYvdxutyAMVdYQU7rFJopyDyLjRNpsdAxMNikLDBVx2FVQ5nm74Sy5QY5rfkMCLiZSgNG8Ljq92YPR9g",
  "key5": "3jLtZisDG99yBBgeNvacxL2P1zAaLLSS2mwzVcqEb3RQYVdzTLnm9XyzjQQLEesddoASBULBWhM8dgyUC9o8Tcpi",
  "key6": "5iEPQ4cA91jDCP68Ad5F4xCt16uikpcj9xGTpxb33WijSaNMiQd2CRvyDhbjtEdXEwJ1FhnNNCtXM3vv5GqsWPBx",
  "key7": "3RVVYXgu7As6GkWt7XzEGnTHuniVB9wyJAdAJ8D2NbqUbwaGQzR3PjMVQFKxhko42SaQD6BNRyj375YDER8hWjn7",
  "key8": "2hGQMEfcpoEp2XK5jnwen6Wc3j63iTfGdZ1XvKHRRuQTFntpKmq18q3i7jrWkacfMXxsxbhP6LNNLweJM8R7F2yz",
  "key9": "2WX3fPC4A7aK8KEvfpiUbXzZdXw1zMAzBBPUA4EqfEpTEzxR7dYy1KK2b4jAe4Fssb7PLsHh9xapQxd5wDdEZBs7",
  "key10": "5qrdfpzK5gsxPnMMkJT3E89sdqD3yJoi2Ehk8Kz3273BZyYNhxe2ZcuERateXS1zkAxrhhq3KcVMrSpLpW9dDbtx",
  "key11": "4qt4wmQKTEbeZs1DwyK2iH55zGLRDLGMzxRyhRg9PoCsN3j6xUaxepcehMzgA1xGuhjgQfwCK2GaMVZbkpwDnTM2",
  "key12": "3papJHfcc4m4nfZgVzR2cYodvUUUrKBfeaCASdhX6EmoEZiyhvAULz2AWmXcQt2LATkmaNks6jNASBcJ8hW6ipAP",
  "key13": "24sQBDve1VdWGBrGRryEBFnvyndFAEiGS2KnvNkArKFmGQETcWyS9uUvSBErmZgfFwgL5ZjpgtnTjEAuKonNJJXS",
  "key14": "2b1drTSDcFmPwJaLjtnatxV1hX35DqwQRpRW1GTAsrm7tDZLncYZTtfYfczNiaxw7P8E4NpeYA5iHrPY1C3uK4ja",
  "key15": "3vZo87pbBHcXanG2swLJUSQELgjC6SKu7g7M2z7WzX6rn1MqndhD9sAx5NqiWtEBGriVfH2tBMPBQL4vitfJHLvc",
  "key16": "1TNg1RjzPybVbLXGaGKqZCCqkthNEt23mkdhnoLjTxjon1SHxrQhzTgvTMy9ZY9MsdV8KcX1SkEkn16UUdWSGsQ",
  "key17": "3W5GzjZSkNXMjWvibXG72wwjqDMXqiRuVyyzKx3BbULGWsqfze9v5BQEGRu83HFdDBgdUqfKuQCEc6x8dNwFppdw",
  "key18": "ERafQRqCsFaVmCBgLK77f1EdcrDCYwP2zdvKdLch4k6UsrUaPhySGJBJftEQX98pP1L4TGniLJStwahULz7r2Lf",
  "key19": "4oEBzatAkih9mCSouEkv8mP7mQQ8mTB9UyDJVG8X9gBauebypVhbTR9nTX8zUFASzPLP6Az3pKCAtocj69FPWycc",
  "key20": "3qFBTAWWWXdRzvkgXqB2j1Z9NAeQszoR2hLEtGRrQGBaFPEe2ARYBTHJTnuMyD8eEovmyeUQU6voYFeQwbp4JgYu",
  "key21": "2v4wApyniD7fdqQ5x3fYaM2sn9zspX1xs1RJLDxr1Ke2X4TniGYJ1EYcpDH1tw3ceMCGyx5b2WGv8Pw4txYvZQK6",
  "key22": "Hagwtm33aSeRfL4tBga8yo8c9dAASp3qJPdeehNdjVgtjyLRpBpWQeGCcRmg2Ps1aunxYoHsaXY5EEF9eE2iQX4",
  "key23": "3kbU19tWPU7cJ9a4KyrfymGKJzzVYF9sV8mE4zikGrVRu1zXK7xm3Fsnmj2W7MFxtirnbL2XR6obJKUueUrXuh46",
  "key24": "5hH4LhNHnBRKR4PuNgrYdzPNg4cVAkrf2PRLa7VACbSeJ83DAaJpoKQurLFuCDf2vDN11fHmiasfP8LTR4PKRuo2",
  "key25": "2ggai1TRMYRHA9vcE1pcgCA2KGHwhPZH3KgCa4yQJpLaGd8MB6Jj17onw1D2oUi6Z6JppxqMFks2HgYUUvneRT5i",
  "key26": "2XEUMFM53F7Xc9E8AjLXfpzrHFNkDSAChvQ6rd5H3XN1DA1SQtGWTEdK8bLz3J43exGR8kE2XYMee54QvvESEd1P",
  "key27": "qpZMs4wWBfCAivD9LcTmBAQzYEJhb4Q71th6tpYbiidxSJuaapKCeNouwtSPzYHB6YWygwUMdviLcb312eViiN9",
  "key28": "2D8whbhxYBmyGP5u22rCK6BzLUmzxbXTB992m2yBD2JP9tkiWFUguc6grgKUdoo35jUDvP7EaFaMzCjdisDn8BM5",
  "key29": "44GEL8rezL6kn7NqpTo2sKdz7naXRtyFgEEurQUHfVNAxhNq7DhiufaQ55m1gzobyHakN32woq95YqYF2njF8ei9",
  "key30": "129dfTQQjeX9RGaG7q3BdByKKE4umfifXTDnv13qkSWWUJ8ZzmPspB24jG9RxqYLMw3zDRRmj1fepTL1xAdXQzth",
  "key31": "WdZUzsrngkUcgDk6DP5UzpJgWRAkPjQ3RGZCSdC9H5BoRxTAYeBghuHi1WCVobKHRDaXcYXM3g6sZ8AGUtru3DY",
  "key32": "3BzFrBZWjNkhEXwUmw8RrtaRaCNwZaCFmPjGAmnVfKV7e6G5vJRfgdRJtiKrTefPVcaAWUVanpahkxe5fNzYjoQf",
  "key33": "nvBMapSpBqz9JrqQkjvFcW69SC7HKHwsqfufsxBozDZwajk9fHsXKwYRfgd7X4Uqh1dt8jrYoPnenXaZ7m4Y7uc",
  "key34": "3Bpps1EMEBB3r3dqGMUu8oxhgZxWUNJ5qehXhtc6iaRR3h1uhPwfBgivPFiN2No6tythScY52bJjU42bGtGyPqgM",
  "key35": "3umXKyLNAeQCU9WMYTTRjXDs8TdXgyDyKYsnsinEJ3kHqYdrxhCD6TMnsie1Dks2wA9CUZu6Gq5oWafoULfhCXP4",
  "key36": "3puALEuRudKWocuUsWAHa5zgQoJpqw92tbDpWLCBkBSa9GheW62BQYbpuxnrCX1pPWu7CvRkNdKH2e9YH7q6U74X",
  "key37": "5MA7QFQnNvEyPWiQfk8tBBh6HtX2Ve12XPhhwRvjf9A5koM5wpWZ5C9GhySd6vH14txLJwWzdsme5ibBKoNojDSJ",
  "key38": "4Z5BVQDg3feA226BwvBH3ZpKMqmdivKwrJpfg4vuhkK2E9Z77XuTtE4bnFuENRrhnhZTWWsF9rcQaqG3iZ9bzkZt",
  "key39": "w2Yj1XCPjcnWLuAugu6vWQRJtC3pz9Fxsoti5c7nau6zt6XVG2ogkgqsk6GVooZVCiMpTtMoZYuE9wvdUbK59DC"
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
