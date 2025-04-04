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
    "2it1gWMUyZDcHaKfTcV2gfwQUiGvsDHkKxniym3BVVR5USFG8Sfy65tYwyJGjutYkaK1fv9k3sUY6wmKUd6BuznS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xD9fs1LhvtUrozmGkpicW1jJ53utVPQJzJyf4zWfqHjpqNqzCPLshBPDcqPQNqNe1SotvUWurVShF8Evisrk4k8",
  "key1": "4w93LoPhiTQjP5BPKiGU36ZmTptz6CgHKU85CPJ1qhV2kUzFBpYEkpP6SwdjNXjfiBeTMR25TrsbdPCViyDvQKe9",
  "key2": "346SGpjdhD1bGNxMy5wVkjKf4DWZceoHRwY3YQCTnFBHZ9Kw9984YhcUhMA2pC1fGLb8CpqSUsXMaRTKgDEKKGwJ",
  "key3": "4RSbxfw8YydCpBV9YDPSiqb5Dq3AxdeHFCiEHaqtJ9JRJ4RwB8VhE2FP1ZCY3YNnGx1vXgvQ4x7NYJTAs17mFbyi",
  "key4": "5y8jfv6tMmuXBpTcPfFMfK17A7cG1eVsLvXb1Q2n22LtFPYMf44fGk9P8vGpLbbyrBSbrNbFqiHGKY7mjLXAhX1C",
  "key5": "3hrgVD3vXpRDZP9Sr25F92evPoXntq3j9z3VmA7gPvBkcEc3Fdz7KbE4Zcqr45jA33ZiWVbKKcwDJ9CrxH2HGjFV",
  "key6": "5VWrAhtCYCGyh7vqcgqoU4eKPonWmpVbg1hgZv1XNfqRGFCX2MmEiVRHyRhbHExUWU3PA379FLLHfn2eRTS4CSM2",
  "key7": "34qUP9pT3ueu76aLvP2V6NG6YMXjEeN1bM9hPWtiM6v8YfyBo8mVpB9Kf8aahCjQqMNBVghMf5F4yEaQvQV17sKf",
  "key8": "43oTRxXD3HCVXhXXMTRK5cGrbBFYS551M6S5SHurtUGFWmYsxd5C16HpYFfM4vqwUxpxPDr5s3cHj1EFWQNZmRvP",
  "key9": "2m3dULjdZtY41k7DUpZ9H4owoyckHu4fP6NEMxZmPZ4mEGNQJsCwRuywhFUWt1hmg6dUHEBfMKcDySwNmFdGVSjZ",
  "key10": "5HpPxKsqJL7AD2ZtGWaJxVrDGzPankKiQTBhREUbNpEdSmqsrSgdixAUt1A75Q47bkgSxcPWCWRREVsearYXES76",
  "key11": "2Wy2uPotrscWYvPwtL8WZ9esJR1vqpFxVdKTSTxd4uc2BLSW6jPj3Z5Vr7oprHqyzwBnB87HX8Y4jd3vKx8FQShD",
  "key12": "yKnywooQA6yxUtyAbqEA5Dvssg2bCHRC7R98q76PKZ74x6S9n4rDok7veqD4G8bdYSkqMDSjGKXfoLFN87xBUiz",
  "key13": "3fFQApzDPzeBfJejA3ZrW3b3R4J2JujTbZ2aQidz46qSENS33At4eGYDiPyw5XmzaMxUhmBWgKEAxywcFrtBe8MN",
  "key14": "MGnfDssbRhw95Zq5tHoBEvXZRSbDADX7av8gaEzGyPL4HNUt7rN49jvaynApkU7Hmu39m5RWDTU3JAxsnQ7b2we",
  "key15": "hsEKuk4aYSYMYdLsdB6kJakkytnxMV65TKNkutr62qq192PBUtccykgmoaJiyNjNQBNf8nHaq5sTVXXUqLYGzEf",
  "key16": "3sYBFFL2ot2uBprggcuNT6f4ZYQUcH6qat7svmjQ3qWEpbvQUMZnkMHYeUSJi5LPSReW119SRB4msEFCaNasQi1v",
  "key17": "4pgzwYBJZFxkBxpUQYv7VzJUF6oJdXJdQbqQmiJmbx7uDCe5aeKnvdJ2eGvwYVbJKH6SBqvPeK9BiWQRauRZ2CGP",
  "key18": "3R1Mqr1td3SxGxDgV2GoxrDcanjbCmgZMPxxEqu6F67nJATRuKst5Xg19RZRHm982KwvuuHkst6mE3ghz7czwERb",
  "key19": "2cs1GKKDn7Q2XuL6FgnVpvi4PMUyXrUxMCtywS6sjXFM6SMwGhWiRp9WBpbLZcTLxmhKxzfAJWZjyZ5vFEZht3bf",
  "key20": "3tDEkuNy4zKPnhjBLYFTCSu8HP2qEjU9u6TgGoZWLWTPRXGjsvg8zHgTyL2wUM1SuhvhhMN1qSg21pcJ4UxeGzaD",
  "key21": "fqZy8Jqf5h1ort7KsfZFsQtficzkgmWcLBoNc6JRBLR6dEwxs7xZjh2ZNwh4Y7pJFNBge27bQQbMqfE9v7QnBrV",
  "key22": "2qjgpbP72VabgwrBx8xKx1gbaHyK1GkGT7m6PC9d5XuD774qrRJv8g4jQCKZ88A4eTyp35XF7ViraRxk795mBpZR",
  "key23": "5e9UsXV3aszgzaWK8x461paEbgWGQHoTva7V4K2Qc2tMuH2hfwQo3mAvXS9M4bK7qB2Fvv2w2KKMYtYMtgsuswm7",
  "key24": "46efoaYeJxvLwHykuJadNcYiuoUXKaKjXpVtdZGpyRr8KD3D6VuaQqeUKxK2HsX1XfR1qzKuio9RjMSvAq4Rvxe5",
  "key25": "5xDEtyrJEwMKTekUKuKVL2XiYoyVmnZfk3RTmh4xBtxKecgQkSUW2bQC5mfDJkHD48YJMJoEDtY8UfkNkVPUsTwB",
  "key26": "54W7jRpiaGB9ADga6Wzpm3TmB9be91GwbFXCvZUfWzBbXXw46MXR7Wj4eQPG3cKpUHJxW9ZQnUgwG6Yi2jAUCcVY",
  "key27": "3kDNvf5SmxEnZYDww3a9PSchN6BoSYpipGH6b55odCrDjRF3mnV7a9btWBjDEHPcjdbafH6Pn5f7G5YaSg77EVZV",
  "key28": "2vtYmQYzFRMz7exjWv1NweDXTg6vRNQixcY9ZHiRXuPP42VSoHGrNZEE28h9NzC5nkQZ6jYpGFSCS6CKaGzHiQp2",
  "key29": "5pBJHQdobbXS9LhJEVpjpeNeNKa9t1hAipVYZXqnKy12XeZayp5zwz8rY957d6WE7L42uCBsEw1RR7X64NHSCfDZ",
  "key30": "3PL7y2UFXDL3dG5zt1odNsexXexJwy1MhyCiRxaVsgj6Ydf5vkHsjHvVgQDh7aAQ73xjPoFHtLrUmLFkFVgsAyQC",
  "key31": "2HbG78roCuYr9WNcHf4tbLQ8VvBubQvS9zRHRL3s5gMqxHgozbnYZuCpvDz9vCcNqUdjGBhW9Nh4t6LR91fLWdS7",
  "key32": "2aZ265QNYuDYF6MMcLUGsWxDvUzmG9Hd7xFwR8MUXAQeb7dfiXP7pyUCNjPDQSVFGVhLcRDFCCDy5dtX4KQZdpk",
  "key33": "5BvWQTnyFbEsfbqYHEWLfhfS5WrvW236XXEwJUmZastSaYsDe5rJJULEPc6QXCCjntCR6tV1pkwLJrTtLHpvTCSu",
  "key34": "5RB2dW9ifaVJNVftCKQdRgktPhVJRCKe7FmqdzLUKdUPZY5j1D4PTCAaysZJX1E2DfTc1VUbpi5ELMaQjsETfKDh",
  "key35": "3bk6wPwafvVubWpNjNpTbeZGQAdwY6GQNZCsRMBKzEgad7cXfFaFHSncE6gDmzfX3UdxaDcpXZGLHxSbFbNi2Thz",
  "key36": "2qrtf7i25CMMrrG5otEqZiJe6kStLZoU8Y9bMLCpUjYs2zCJKyHstDFF4ERR7qUkBTme7v3LyZtfRyVSQ58DW7jJ"
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
