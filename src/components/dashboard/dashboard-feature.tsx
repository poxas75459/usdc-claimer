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
    "35GJbus7Mm8LKb3mdM79uM2AVuBjGgNWf8o1TVeU5w7dRRc475Cw3wxvvR6cDcwyKHwKDjvGMqdfkcGfCj4N4r4P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uupukGKxxczJnYeeZyH7VgMqoStYRnqvn33uv4F6wfAB445TUuCEe9wmkEWGX7ueUZfNy46J7dTacJABRL2HfKa",
  "key1": "2WT6kz474MYX4kuAE21h4NqdnXBR15hYoU1vnNfxrYR42FszrKtmgKRd7Wo4Q2zQVGJc1gcdenwxideLyU6zPWEr",
  "key2": "5sUDNU76EZTQjxjpDZ2MvSTay5xE24WX8As3VfbwhaGFycdmLQUfzQ5hiqRRAYYtkuzRNBQBiwm6dEgXXFuMAEZa",
  "key3": "35xDgu2bmgDJG2tUVgCfvijftPUt4RQvni8bSXdxcuAUf5PEeMnbj3LFy2skNy9t2ac1UdKK9BsDEYUzgdGSFeHv",
  "key4": "3rMPv3GypGew1Nj39LLYvcbGit5mDKXEfZNtskSgjeVXrAuEhX4E8yu5Ri9RZnW6kZe3sYCGC2zXKTyuww9CnR7v",
  "key5": "3GTTCgqCPBCxhMJigFR5VqSHk3Z4LzUMHCFQ9RvMjHj6hFmLvfAoiJ2F2nSm7KciDi53gSGMAmw1GTBvXN3YVoxq",
  "key6": "2EFT3dU1XdK78VJGwATJybhQVSH3Vctfis4q3LCTe7YCi1yBsBxm72GPnBCquUFFFDSWybjB67XK1e85H8x2bCTF",
  "key7": "56hui12PaDJDFishS5FjJX2ZDXUVg6TywdviHfK5kgqATNgqkRapmZPzDCMgZ3hfu1x2fZzE2aq5DL7Z9XcuBZGK",
  "key8": "2ByN3ejgs5TUotyBemnhs4SDGMB8NWHGZzrXW5hvyrqLfoBcuv4V7NPxxuk4U8d5CoQuGdSSMuDDRp9PmBHLRiUf",
  "key9": "3WuZa5jBHSzLX4rqAdWFP3dLWCooz4ibyF932YF3rYzpq77TTm83RPSZMHBDjtSpe7zGtZYnFzUci7tuyJ4nVYkV",
  "key10": "vtk277VoY2MQ1Gaht1vs2HvW9gkhvENpq9iic3iEKbg4H4oW1zEP2b3iqznCKNqMy7YUKZkS49fDWXUy5Ty8k2Q",
  "key11": "5tzLRY2BHZEKqRb2pp5fSm7XrhcYDBRd59xThx6AwAJBH12TKHTa6e9q7Up9HUD5vcbyvx3Nd5CpwuHm3MWha8hW",
  "key12": "486UGPVZMuiy4d6HBgWe7Nfr8mFsTkKbnjy4mVSEFHbjUFjr6JWtS9Fthi9DwvkUeDiAx7QKzUpo9uLqT71D19Kn",
  "key13": "4NkBZwwvSzZJ6SqF9adcsbuQd6bYUhRUMKfqAJT8topCmzS4BFrfY7wP9HSjGuDbtZo7uY57ntzaoXt2oPhWwWEs",
  "key14": "5y7TKGtWArr9R7coANCssQcLutaGLH4WMdSELPRHhZueMBEQsn77Nn1MJnzoA1PBNkWvuhbhdf36JVjxWdJU1aHE",
  "key15": "3bSXzwRfLifg5tjB1bvagAYCHedxd7GYzZT8KDBJymYhYuBvLpiZJ5E1TyMdspP1d6v3nBD816jbWRYaumAFryPS",
  "key16": "54iPbqeBPuLqecAW3MF6A5K63BFSJyw9SGdczSFroD1PcrF3zqseYfXr9JCbBTXWpK55bsbVbMsWo1EBrDiTSdh5",
  "key17": "4ovM27A3wS9HmW4fkeXwVKwdpDAvrPzitcon9E9CK8fcZd1fasfmMQY5ZbAYksLBNJLL6BKRs48jxa3gfrtB5A9B",
  "key18": "3ffHRyUADFBuH3VyF47kPN4bHxoNy9CKQ3woZE5Xc7d3Tomz3AQoa6PUfXqv51A5ecWsDcYatwePnw1bgPUEty8R",
  "key19": "4z7ZcqMDxJWdA8bBKEGwcXfxo9aTp4bJkQf8uCDy4BXYZD2U3QoDc1Lqc8NmYVuacKG9uwbMmERyg5bndkiS3Gjn",
  "key20": "2qvWoj8NeiUdkRpjThzjWRHJrYNbRoQ9pnF3enmgZULMeWoDP9rzFrY8S2nuowYh2keeJD82SnrUAvTyADD3iapM",
  "key21": "4ZJ3h86BQg6ZDf16p3nvUmHZgPdZTALDAwMCKZvwzQLa9D5kxAUpHseNd8Z6pR1DZeusEKK9mxCLXvWBW84fi8R2",
  "key22": "4ebAMZBNmr98s27u4yx6SjHMDJ1fyPqYmLKjKZQELhnDwnhh5F455Mx7Czbtuv9J6uiuH5p6rHDqUGjHMumhHoFR",
  "key23": "49HRg1g7smCFFSqYTQ42TyGwV2wMY2Xe1Z1vrBGF8LSRM1DHVT1sV1zDYUBPmzNeVbv2sGRnaz2jBYXcrJfcBiUC",
  "key24": "3Pyftum2V6XsvDgtWtenoZRYcjrhejc5DUqx6X9PTMmZbq4Fe1SjiCZh344n1F88Xm8UhyC7okyFCjszd1NhneRo",
  "key25": "2kDDPQ4kyKusughhZR3HxrthNKXqC6HRfAFYsfbxPfva711izcPpTf6veHyxLEkJMZ7y7K1qaHx5FkcwdU8Vtzky",
  "key26": "5hQi8qQnoqkyoosrYpYjiDWzNr7V8F72Lso8PTSGw8SmFf4i5RzMCj71iVrVGEaGmrf289s52rdAE1PvrQ1bmtJS",
  "key27": "4TWc9cGZ4onPAmKXXQ8U6u4keAiZdv63tAnnEAaSsfZB4a5KvkiRF7obcjS4eNMAq9uCGMQEov84rngC5KPTkzrN",
  "key28": "3EecBLeJkLHqeGaRkCQPFZaZeapsfaBwZpTPPeofSpnE3H1Gfou2A1kPynY4WjTMscMgW6VAMgWLF9Z2tkVYFwAA",
  "key29": "nJRk8Jf8ZswgbQk7oqGh6fnv9EoYFNgGsfBkQbeYgnSUABwH26pHL2HXZS4o46J7r3P1ad2RK54cW4Sm67phSN2",
  "key30": "2McH2vb4on69VhoBR6KmtwJSvzhEbSEoyvgP1qATwzin9paB2GkRR2rgDZu8abWNq3K2cp7Q5rcZGhRy8FLm51hR",
  "key31": "5mrWKXcvtpkLFuVCasQo6UAE9HsGoaRCks2UXAGTKkmaRbnVTpAnhpoMxYFbuPMF65TU78676CVZc5DpictkJFoc",
  "key32": "278hM1gRZtLHZ714E52KkbBsbZpf3hEMQfb2dKgz7cccVCcKeudgReYJ9nsdsPNvhvwKNaC1AHQNULW8tfWM4mLD",
  "key33": "2cjpzuUU2EyFq3HwbirHDNDHcyFEDxMp7a92vvKmif8StEn1tNKvjhsMEWWwEazKQ5mWVRxeYhCY5WPj8NSygZhT",
  "key34": "5rWpAjBqzEMkTii6gkMpSxDwyQWaS1RA9qw3jRFQwmWfNg8ZiKoyzyUoHdmsXePBtsfbXumdbyGnqdz9aH6EGhqj",
  "key35": "4TuGkBkWpY92GLYjtPrazbtBYjAchboLuor1hypyzFjfXQ724j9QUnoFSETRwYW893awuMN1FzvoaiyVtcPWRDdF",
  "key36": "FMi4xJdr5zT6CCqP6TYSArPSKhaZe3ShxLTR5C7jfiWskteCxgjCisjPazZtAxYjcrMb4G2JcpQ8ML9QFU9zcSq",
  "key37": "4d2M1K3fYVFpjFHda6U58HkjUcCPQBY3Q9ABj8gtAe5FMmRMmGinaFMPv6foknbSbvr4hnFVJoRW9VkvWTo4KhjB",
  "key38": "5zUverZt4t44gYwro2wwENeZpz8qNk4ukeXqxA7oSqGKvH7E7ZZsxXpEUKKVsZsyHc4jpwSD14XE6Vjk4BAnZeLn",
  "key39": "nLFdSUvaUaum94cmkocuBgc4Z8MTPfUtgbkobUy2E3L6puVekyfbe5LFKbZJZXFLdortTYL7nnLoha3Nb68KAQz",
  "key40": "5BtSjac3zy97NoKGTgx63WmiYKmeSUPFUxitD5ow7jMUFcXAQcFd6pUgWuvP8vFaEn3zaxHQzGFx8Uamp4m1wc1N"
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
