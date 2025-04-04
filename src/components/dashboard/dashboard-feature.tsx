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
    "aHrq9JuWA7tGmhoruyvVpXgq9gtogoqb2rK1TutmFdU2zLQY9XCBQzAe2BeHxTxzyRt9kdkSRNw2vvK3qAMMLNj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ytuRa5wDisyWFKerWhNX7FKjBKT6UL8TD8bsU66U2r2EMLD3WL5yKQqWwXiejbBhjYUP7Yo8toKFE8Y37La8XwP",
  "key1": "4q3fK8NWuCVUGPMQ7WQD6yoZPD5aGdWJSvNa9T2nWh6ZYB3ofEE6fitXGWxMWo8YWGHqmgfS3GJp5TXFUjQ4vGPp",
  "key2": "5YRmDx74cSo1QwcjnGniz16jdzswxXDMJhniHHjQ6eMRGmDu17BzKxxnoYWFT2i9cjNH31QmTGEsikyNujVsL9rr",
  "key3": "3FExaYp2r6QhWx9ZYUsaLGCXoTGiDsDGf3knkumshqckfaVxXHK1jgfjcPoVo9hGYjBT1hVcKkPDwHYwMQynztmj",
  "key4": "3ZXwsSGQbKkGBqVH2DQhh5QResZfoZHuuvwa4GV4UC6TR8GaD7kV25AGDvNdVb8UYDrZnPsu41vT9gi6p3M7NBzA",
  "key5": "4cLRyBWuwMyZYyspLVkgYfWrzwxZ9ky9RQotsRMUf5P4xbVddtAwW64AoF53wHfWUfdu3tLQYRtQiPTPLNnJ7JBA",
  "key6": "y3K3kUc4vwXy6BPxxpVQW8svDfj7e1Rcyr5wLJjFiapLF79k6YKYHCdkWUVnUBazanvRbyZV8BFEqxB57xHV2Pq",
  "key7": "4hNhJTFQ5MhNxS6M1U5NrHnVQvMYK81RZGkwxN3dH9utKAXvyyuAduP4DJeXq6JVNfwvhNQ1GxqRpVZJ5gdkUPXR",
  "key8": "22Ky2z3zBzcq4vjW7yw3GG2UEHpbW1BaNxrfjzUGDoB5YZ71o6Q5dMezrB6H5Vq8j36kFW6bqkyJwuS2Ep3PGG2q",
  "key9": "4jFtuoyDh13sQgA9BhwLSKbzh2U89TWhSi9rR4HHZvxbSpj8k8FRgViwAujg27ce6WBKiXXD2xoq9sx33A3gb6fu",
  "key10": "5T2bzXLsX9Mm1kc3HG3jXNdbbwWydQHEXPrGyPBSZJoQbp8ecXos3VCc7eFX4wW31RXX41EKRXgwpMgNgtxwJqM8",
  "key11": "5RUVngo46hECpwETX3bJddKKPawq9irzU3Jw9DHa8UDXrrv1jNQDiDTvVKEjhMc1nMuV73F68XMN9YPt3wS2gTpH",
  "key12": "5bMRXECrjvzt8mq1Q53gNaKpo3L7cyfktq1AcPsMEUeVzxnPnyQoMgJiXnkFFVTdeJG4AN2NemcR9zmoBsF5AWdd",
  "key13": "3aoez5s75br9t87XfQTZjDUFKfEhS7DLUZpeEirHDYVLFy2S2bDDTJCWpNZQ1P8FkiSkPAfbdDwUpjPsVheg6kQL",
  "key14": "3vUCxrbzKKmJkj4xpo335XFjPoAVySeUT5TEYvqsp13gEPyzDknaD4MfVwk7ZZ8wkgw3osiUaF5hMoDQePyTZwbV",
  "key15": "62BjmwPbjqA8EQEUP5v44GUg9DS4QecXtaivDVcro4kgm8eAzsREQKchp44bUKSEX4LudKpbLtzY3RmbiFoeqapF",
  "key16": "eixx1yU8eyXQRgVU7h72DTJoQNN4WtARRiveBFn7ZbyLMxS9h1vWT3biAE67d7HX197hMsUeQ2JtupNBWFR9jp4",
  "key17": "V3tZ3VFNxPJbDjU5H5gNGEPjCRNBU4HsZSvPxDxjjfFsJL4t7KsTVjmf1bFMbXNsrDbr4jVStFhWLPZD53Nj8Jg",
  "key18": "21RGnB5HroWXLvfnhf5byAC5sZGeDn8YePvyvWw1Pg2ajp6NFq7zzkQQdFRAkgx7X7ZE4SJvwrrRi8wGe1NLZCaf",
  "key19": "5LVA4Tx69HmV5N227UkG7yLz42ojh8eu33fUbbsxz1PPKEmqhuG6Fe5tNUtTMCTQZt8gmWhuowEWKhttV8TkgjH8",
  "key20": "5uhzms3L5GEVXnUbd8Ubq2Uf8XUdYM34NA6avc4F3ABJSmcxkPT9hUYjo4TuoZkTjspUVpfB5PdirakPpreYyRch",
  "key21": "3DHDVFBCGSZv7x6HCBsxgw4iaH1xjEZBzmEeukpyHwsEhJjJmcitDQJp3HZ4F9An4QK92tcMdSqpbRgFWjLJFWop",
  "key22": "3apyqi8f4VzYV12SreQxQy5bsG2tJ9Y69vGPxS6WbPWCLHBUpgCXSR1dAeTCv6NzhaHhTND4Qi8p9fwgvdkhjypq",
  "key23": "NfZyUz6DJgoe2KiRDBEGnZfAmuc5WZsYCDJG4YQwoLx5YUPrPu5ckaYRX42Q4rybrFn7QuPgbwEoveFxmBRnfig",
  "key24": "5fAf6x6BvgyNRHW14soVoA2As8gTVMAd23kYQAPQBWSZrnrFri7vzjwwChMmSZhyoMhRpmqracfvT9EJCQvLvd6s",
  "key25": "5v9imnoZY3DJehPABYCXhi2hpFr5DxsBZrA2zmkV6GAVHsVJidtAqDoBdAEp4dKrhXDkbjQ2dqv1F7VUfDdVsSvX",
  "key26": "HHEpTWqEPZkuR3amBoDhTpA3vuWu6j5vTzY6URT6nA3tJuaZrgPqT7tHg4qXAFUWEUMryhRR9qjrAjAu5aQQu9S",
  "key27": "5JWpe2cWcf33QrU6jRMqYJ5Rvm1xiGfefHARDa48cGc5cg3Ax4wfeHqq8VwWtpNs6CRGkUynoFruBZLo9TWGdjG1",
  "key28": "3ZYugYt6YL9ZPQfJFgPWxutWQXWzq48dHAHL7q5mPq4YBdR42KidGiKc8GusoMQQ27pSBKkEmTS7KqeVPELpoz2M",
  "key29": "QTia1WEwqGAk8p5g2sRpVbSxYPwYGJRwaeq7N1vZv8hQeY1Qv6MmkmgLgR3Vv9v46zfXb9KxwUKNWrqjSpSg5Bo",
  "key30": "2Z17mc5nJp12Xb5cxdNW4sE5EyjbB9fDF4EsGLFvTXLdP6deEMqp82jJdGEo6DYLW6mkovLgbaHrGfYgDZzLbFmM",
  "key31": "5TFhUNLy5nYskovu5g2qUmuFVgABbw4zx6rZAiot6CRnYpSr9G9jb7BjLiuHH3CymG2XM3GpUmvMkrxMWaB2qcSx",
  "key32": "4jVGEJvq4LWGNkSSrQ1VrZjcAdegnAfZ8Rh6ZxgWP5Z2F5qnb8JLBSbW2qjPgosXXeo7S31F75Ne1u2h765nMxUp",
  "key33": "476gdxkJHeSHG4hRZg5a6XKuvaxA3EQGVWUk9dMrndmnK8UEkHJ2ALcSCLFumnVU4J7wVXRNP4ua2UgHT3EQ4cpx",
  "key34": "2vJkLF9H9mXpioiM3s9f7xNpoQd6CjmZW8Gquma6msHBvKhvo198nX2JxwYbQZEnWNAVZVAuwkuwx9QbX3Vec6aS"
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
