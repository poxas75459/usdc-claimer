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
    "5kG2M26WzCgDxCx9gSnjRYcSCp2DBojhaPZ6WXcR5WPkGvcJgxRqSFdCKD8iZfUcQ49AgR92a97NiVnQNv3bjQwT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DpNq6vpZGc2SXt42eotY415D4a92rWQy9HESa9G4ahk8wofB5jNYCiUiFXK6K7jjA5RFTRjuKW3dKG8yMHqwojx",
  "key1": "5mUDPKCFJkzzqpf39UvTbbmEsoVLdS9yMyB2NF2LCkyzJzFfBFFd1XUsnCC92rDUwMdC7KEsN235qAVtbXZATywi",
  "key2": "5xeCa4SivgkqMKW9RduLB2VJHe4uoBWCUg6kEFUgqZaE2f53ts5Cdq7Nt3wLuiZqoR48FPSA6rGSfHHeDEbd7Hox",
  "key3": "49hrQhGfxcyNNPMW3CK2NXSqQ6MznNnsHLw7R1nFvTmfmkXe9w1YvQUkk1xWDSZYKkVC3fYTgpzVSHeRk8pV8D7o",
  "key4": "47oz2cGTbnVNGDyj4M7P3WgD4i26rFpVVpqS3pk46L729XgFkmtWM3ojRnRgPZpaH9eQwpM24NJgYKQpw9YEBekm",
  "key5": "3uiYtZYKufoyJPrCSSBVPTTttg79JGwgNG92fg6w79LipJoqoGoWjcvDRqaFRvo6J8Uo5ZeHR2ypqSzLsYcKkPMU",
  "key6": "4hpxHE92iKdY3YspV5yTDZwhAitzkjDCphcJxtikbYgyNq5Ds23igfEDxqfJjPFFpELuFcdHoReepAwUCGc3zrfV",
  "key7": "2qebvWFsoXrEsYEPsHvseKNuQZ4jdwvNhF8XPNf3uGBQuK1kLv6hEThjaUfQwNC58Za6JJeiPCRTLURNjknK5u3i",
  "key8": "2eTdpRKULeXyFfBGdyWypq74nVhnrpyppw9NRPCgTg8qwpwqTqgKhaLUMKqYeECtEbyB1wTexQ8UQy1di4SMomrx",
  "key9": "4kH4xM1cFjnGX7H11ckMbsMjfepVGdhWrEH7HD3qzqFfVRAsxUSqBXFKU1182YBXgY8KsLzGwcr1etMoUQnsgzSh",
  "key10": "8sGD2WKrsxz6sBzNVNxnL7ovVQuqDCsfiaU6h1T8AnmYv3fSpBpjVeqhwXdfNycnPnVRFs3EBYFpdqqSm1onYso",
  "key11": "47UQGkXqbeEXFLHX8j2oG8Swc983FVtYcbhubeQnwA9bczrXS9hRpmdWjdbn5wPSn3pdniEShFqF4zN2Gzo3MGnu",
  "key12": "2dw58nfXxG2fxzKtDmMX2s8V5xZtxk5JB4VGWRgFTHhSEd19WW8ZzjjTHVUR7kEjC7bdhNWmAxts7TgyA95ntgMF",
  "key13": "3KBQ43ZmrNYd38s9efzkDz4MZfkBvQejwngwepnG52zt3z7EnaxsQwiQwdyFH9VVVVAv6pcHHYunWQxGFjLGjoX3",
  "key14": "28m5oT7asrbAHauvYutKQP5Edh2YTpcz8kSVcXUTND6QQFyk8UbHD7VKCqbmFR8omgspxRsd5SyhoyijYNCcEUPr",
  "key15": "2MiRWDT3gMhc979rwxhRzdnP753gBQFq88G1KQxCfv5hTBu8S5gzuNLh2f1tgwQb8YXBXkdK7DFa5qJEmaCkLUQE",
  "key16": "3jTmhstq6cVHGryY3uiJc1KPwobsYjLRrEj4zGQMZnEZNDXsy3qsnkS6FsidFB4ck8UPG6rxfCzattUjW7fBWUkC",
  "key17": "3DJfa7Mz9PNzZvvbsr6D6z5UGfNnw7yQjYGzbFASrCmW4jtzh8a4oT9rnCJeDhdkL1YGVjgM2oekTM8rFSTvzgMx",
  "key18": "2h2Rc2mfzLJ5PHraDrGbNnCzY2GvBEhT5jEperZujHBvGypsRbmmV4hb4KFipEMfBgYzxFjW9AQ88mWabvba1GLn",
  "key19": "5m5AcTopSAW5ZUcHdfbkZkjwiYaQDJEkLaoGtSBPHKQFyqTsKZXAXKyYRpr81RKUkbyam4hBPX74g2JLbeR4WxHN",
  "key20": "94dwyQbTWZHkUcmxLRdniPR7AX2pMVUbhZAiGxr3EkYxZTCWwpSpA7gcKjXhZNoch3gm5VczJBK1Bx3mw9R3hFh",
  "key21": "SWpbaQATAQYJJVVF2oNkZmcyb25L2MHAVb4xnq65nmfexWQpQ5EZRYaegBLH37RGGeZxwKgKDCNNb3X48QpUxHA",
  "key22": "3hAtJa3eZvt1ZZYiEU78jfS4RBCFgT36FEFDSrRibRBvMAUhToxggjMcLetLjgaG7PXNDYp9waTG4Zp2amxZej6t",
  "key23": "2TVM1psKrSszPNpcmfZmJPXWGiueqeDcx2EFcUTSjzBpjoEwrbpLH9QnTQBp1ds8VQHSzC6RJHTWeRDAtKoAJ4Gm",
  "key24": "3LKWaZEwbDpcMzcznwBJxxXfDYTzbsvMtHR7XV1xa3LQjFcUcwF7t7sXsAikRjGG6ABZ4HJpzDEr9bqpzduRTskH",
  "key25": "5yRU9CYbLMXMtfknoSQ3PDrMVLHyPwz5B339f4usqhjo63J6T9k2sN3MdVdifdihHZrZhemnbmiaHr5rkBEJxtUf",
  "key26": "2ayhdgA8ruuNrzmiG7PWUMYEUPnvfwy76NKAiYYuUWJJYuuwsYKVwsgNtz2K47kgtj3ZmFGMUnUnfjbQSk5NjCpc",
  "key27": "4rhYsSmD8PYEXecuE47Y52bQ7zNsMwmk2NPMQB6UJPwtdxp51ir5ZhQByD3V8jrTTJTNTfiYk9j2CHHoGmj2Ay6p",
  "key28": "2fB1uY2Rh1q6ntiUuYNNPQchhqrJqhs4xzCxJ1CipZoxzj7EWjkWpXUQzr7EoEA8i4UaPm8UHyuDcQWgaCz6Uk6L",
  "key29": "29GHRjKPHR3ZrV6R3KxHyMQR8bg4unznJhmVuz99BrvNA5SUyykBWqP679KHN5r9SZpDhBmkop8nMeuGnCH38o32",
  "key30": "4adFhg6gGJviP64x7qfNQL4trYQprW1pqrXxjYcE13oRupbKRwXFQp4u6QTtG5mbGbM1askQn1y4qYaiAALzxhDP",
  "key31": "417fiUd4g4uWZUKETyuKyPGgLqXzdp8SccExXYRDMgnMNhAr9tSMs9ZCwHB2CSELMcCQ6dcgQQZLLDRJibHjCzKj",
  "key32": "5t5vfGjVszunqumjUdHhx4R17NzN3QJ6V7LKRxSidL8bmYyCDmkJY1f3f3vUfYKd1B6nEjSTqeWzgdQ3Lts6WPti",
  "key33": "LwP1Puthk22YBmhnuhYB4KoBAgYNpnWhaAydJEjfxb3MWNH8wCnrTkvUJCuEKpN9KXNMeMGYMKmV69nFZcdMzFL",
  "key34": "67HiSgvt2iG5x93CVKHNGowAb5BRgtH1vahJ13N3GZriX5tdAmJZciKiSECn3CEVujURyrxzb4E2s6QCyUP2YuGb",
  "key35": "4nEdim53GMu1wv7dEbkhZrxon2pnrkxh9qRMLoBJB3i2QgkGfFTu2wfbii8kkZWqhGHN5iD1AABDTHdMURzjXuQu",
  "key36": "5uWB7VCgvdjXD5y7Gv5vCpSL4Brm2PKmsj4K8wD6dgmB8KStNRoJXY4roM3cAGQa99rLKp9cFTnS5qZrNsvwXwEi",
  "key37": "YdFLQJYDSLnFn7Jj8nBtSGR8GWKHiDejX6JBujdfNdR6zTCo55i7m52eJUZxCbwHiofFWsiRKja1pHKcMPr3XQ8",
  "key38": "32jSTkArT3anUnb47wE2EHkKkChiUmTNtgatTVLzkLq6zJSUc5BjesP1gLLXc61SWUQK9gydztApMEJCSwb4wq5f",
  "key39": "53bts76T1LfuCT3cvMjYo9qQxf4iFSqr4w3JqBie2cbAPF4GdE4ysouBMD5ueT7SoxYSBCqTj9Kj2DtgFD3ffMtA",
  "key40": "3nrFxwPm3zE1ECabULLiYQTJqew4Nv8D4uru43v7gWtJbFJv2sUD2nADyS4Wbf6szD5u2veH9Xj8FWTi1ShoyPXC",
  "key41": "5fnQG5AyGEydPyLMRHqFBaHH2pcsu9bbtyJYtpUpF3dJuEmpxWVwh5fuuNxZzvSMwQU7t1NE1mwsMmoGK72Fg2P9",
  "key42": "2prfoLzF5rSvkEgZNZpwTiv3RtRP6FnJhcMZg5JaJaFMfpkeJ4b588BV6Yde3ocTyvufD3pah9whqGUMTTyURLpf",
  "key43": "3fdxH8pfSphjMa1nMP5boFY2XpDRsswEMTcRvGXKUEVMj9ju1XVzfK8F2AJKqBN5RD75LveAMrjCH5cNKAaqHGKT",
  "key44": "2wHq4HqeUGqB5tjF6k1eAxexcXeNXVmfpRgoXrKmXtuNiXj3LfbnfHwyqwXk78sPCYZ3QL48CUkDiYZAZgwCZFGL",
  "key45": "mxWtJd9ahCEE7n9My1Stz7VpynsmTdnqzRBH9dvnCT67s5yfNE1vfLTo3D1DQd7qBEYCGEsaUXj9hngopPzsgDZ"
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
