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
    "5ha13w1W43R6X4tnHe9cGvj2sw3yXxbN9pLqE7e6bGFV4iyCQhCjwLxRdK3kXcZcsNjyTr2CJbyJJKY5zit5KYgE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ufBUr62tezRYfpJRVVyTR18Nafa3XGgbQJyvnh6njD2FpNwaCmpfQNoziFVq49kHFuHj5j4PfLAwoeci6L1WKAf",
  "key1": "3Zh84ShEyJxU9zZMzKds6UvZe1yrcS4wjk5jnapf3CMVNPwWCp42tUVn19ioSaTypDTcLvSg6Rk3HEfFE57qPEgE",
  "key2": "2Jkgo7doSKK6p1zrDwKj2bnV9AW2PgPKaRmC5nYuhitA4smu7VX6iQAe3pgbhMXfZ5sZW93SV3zmTyWnPh2RqfLv",
  "key3": "5V8n2cub4gFqDdesJjotnUk81YBrE2FQKWAxJHLq1Z2J6Wor6SVkRPkedCHMoPHNsLnaBTESy4BXSmFS67JWScdd",
  "key4": "61ha8shh5qiZs4M7HkUwW4jyugSESgbNVBRne1VmyJoK2AMcDF5sgc3VL3b3zUEVVtV7RtRdN8ATGZuS7Lmw5vjW",
  "key5": "TqpSYEaMvj8FF2fb9D4UwPHqkpgfSn9qhvkUib9x1PriuC2vjWTwpgFQVhTsa2b1VsrUNYzv2RQZ1Q6xiR5dVUS",
  "key6": "4amQYaCR1jh3L8Eb1LoXaXVb5Dv2Lw7UYVm3L7Awv3nomWZG9HqMBmdDHWk4R6C3bcxN1nzzjyPHhJotSbBaqaSR",
  "key7": "3GeejL2J6jPaubeKxysdhaXP9JXYK8u7GDwfJabkkqwTnmAiyHvEJESewEcXhyuZk1hAfC3RLzsD1QotCpaiLZbr",
  "key8": "5o2yrv6Jr2hP5xtVRCzKixbrmS2KfmzeSCWx24cCDELdmjMm6LxyFUGhTvWSvfcuASFn5aNzF4DRL9qPQCUiQSrW",
  "key9": "Zu5EN3PemC2h5jvexcT1zyV9dZFwbrEuU4XQnurRtGreRpsnGReXALQXtDy4Ak3AAJj5nRdEwMEav3tfR6ZpmX7",
  "key10": "6fEqxY4X3iqZnrrpGSC936owdjeo6UsFFaSNLBrrEPkqr5AARNwg2PFvnq32nzAxx66VpnJzt9pD9yXHPAQyCqD",
  "key11": "N6E48tG2YPmNU7H9ME2ippCbwBkjdDJ6jc4eH7x5Ht3YqZ3L1zE7cHyT1RYWBuh1Hk8XwR8Yo3hKso4GhsL8SVh",
  "key12": "62xjPNiTHGF1DoccxXZvs31mP8Gy43ZNEJjHVQyxhXhu4kh6gVFWGJKGZ3dNZyPTwZkSGRjcEHKYSMZ2vtvddkHo",
  "key13": "3gUMQGMN5aCTYEabsQkrYj9BBgFAF3fLtiRKcf8kXBsdktRQL3zZCyyqzHSfS26kAruN2mHW4QHEfg9bpiLwFxsc",
  "key14": "9z9duMiBHnBwNoSRex37wqZm8iK45yND7Xc17Ay6JMfoLTmCuGPb47GDv7dwbjycCHQjuAYWnhfvk3g6abXRTce",
  "key15": "5tUNZfHFLRGwg5PZsgrgsPKQUWHzX2saTxQHEJX4yPtWwHFGFnVHCkCZS4bZdbFedyGMRWQnC7vxzaT7z2FY81fA",
  "key16": "3z16qQfhcr17oFM1of1mt5xuSju2qNbNsr9nEc55qxUgBwVrGZ16Xf6wetfSrvR4AEaH4CDFr5MsjFRpuuo5ahMC",
  "key17": "4zUiy55ieTYzBANYNokNLTnrhwgoNt8WpMUsX9u1wa7HRtZCtyAkxRnhhvTDa2XFiPMVvCQdxCReq7LyjKT1znz8",
  "key18": "3abKRNpwrYNYGEK2CD7VSDq4hqST5eVXfBiqyKEbofMz5XSPSyMoDPZkeDRK8CRxYkagebcqCNESDz7LwUmjthp3",
  "key19": "3d5uXxzhDL8cXa1meUWoVHCjWbnHAaa5sn6Xamgqk2yHzyywmER7zARytt6MbewLwE2j84sYfr2dZ1kuVAy9d7Hn",
  "key20": "3QpDypJ8dSBKufTxVKQ1oxgmZaftRRWUA58J8Y7WgASLHaTkqqWRSqj3SVnSY8i3XQvnnbNqX9ERW8bBcuNqHcJ9",
  "key21": "qZv7i8vRcCqUrViQd9yG7FNSFzyoVTu8HewyKvy8XRRyaLHvMg9wXKCP5AMX3UMjHPD4uJyJ2HfMNEF8uDs5j59",
  "key22": "2eBx7SVTC6P4vvZRnSBfBkq45jXPXbZS2i7tanPDzTQHE15bMJj5wXBNoYSoHZq4qKoRKQCokRREkq8vfXgJYqiE",
  "key23": "2M5NJqrgFeY7kDKgcBZaaKixCZJoXYbeEqdmZMhyjrACHTJKL8T5Fqu2HhLpPvZU5wrAXhDTcgs7KMXP9jC2rThh",
  "key24": "4kjECYTRnkJRXbirWeQHCKg1rA9bqi81DzsgzPjkBdLBX6Zg8uii4zU7PwTCPvkGyZK5n8XdC7g6AbW7dGwD7AXs",
  "key25": "65Szuwwq3ChiTjfx536NRauinoXrqjnBpNNHiuHm8UmwXoHByibikVvRJ3aiYqkyHt19Nz3hL4HCG1GQMRnQh9rN",
  "key26": "53Lsjo97oa3EHoRYAxEeUnzA37ixgy4NatZpndhUwySFjxNSBvpjbMCuBBnVTRe9aV2Nz6CiARjYUZELjstHQ4Wf",
  "key27": "5g71k9jEupUDCgvbHdt8kKQ9Qv8WLhXyvX7iCjmqqiz2rVJA5EatttXsvGjZFXa1i8Kkk5W712V2MRigS1B6pQ1W",
  "key28": "3ntJ2FUtKGaCzxhxJjufS4PAT8aHd8GbPDpCML1HeFVz4j5mTtc3Z3y8XuYabAbFxFM5DcbV73GsbdVGyFXHeFrR",
  "key29": "4zGh5AE9nzxZrgMPZX9L63mCZKwWw74y5hHtScNyGXjXAqfx2aTMjKXjuFXbwnJ8Ba1MrMyXwd9zpnSVGHHcfZp1",
  "key30": "4f6UsDTEHBEVTPRh3eTmchuF3LQ5zzpWr3qUcNchHWmo7f8zoW1s8rY7JhYvBoBhZ1UrCqpzZCUZTxPcgwfvvnzr",
  "key31": "4hsmq78ong8szNrXM56rKDnUvNsQucrhdCL3GSv7AHush135DzKe2p3BWWS5urSzaQn7ag99QjQjqjCCecGb83PJ",
  "key32": "2D8RGhtjPZLim8xyN87WSMFKYpnxWwi1oinMnkEu4U9d8JfFpNegsse8iZ9qvC32C7qANBrG8s6BjAarvBLtyDa8",
  "key33": "2cNmHrV6BGWummp5cWnJc6pgbgLGpWMUDPh7MsEaGoagkSGM5WfXgMa5eS9LtEuhW1ZTXLcWkTHxHNf8NMCZPnyE",
  "key34": "2TGpFWrHpAUFdnLMH65L2Aozx54yGHGUobyxKXYDRnfwnCMraLg8E1bpzRdxUDRAeXPrj7PLYfxX8A7PyZghAjtz",
  "key35": "29RgkT8fNi9Dp69cYQqrMc9aDmKbjdePNipJB3ZULSPi2kCfUqh6S3Jmse9hJS11S8CBmLTGdwhFjNHmcKvM2dLH",
  "key36": "29riZxUXKioHordApivHxkB4o5gzz8SeHX5HMx9GFvtctwEMtva3gyvVw7SAsdFpVQPr8jwZaiaZ3z3aJ4E6DiFC",
  "key37": "4iJcSxM93ZS8J2xA1FBLLkMmRCrP6xEpT21546NRFn8jdhEmhbdpsVNDNiXLGWmkX228enzGtZbP6ZxjjfVJgpLZ",
  "key38": "4t66uQCkNeGFmam3Eca11oYCkUWpQMZDL49hZkAN7dakE5bwHCkEjR3U41LqDjoEPLeXJgVEWynrT3SHV69hyPqq",
  "key39": "5FUVMjn6HJj6Zh1zCLUK1sQ2JDzwABsuktvxtzh7WqrKkyE1ioD5yT6XxoPbxUStkbb8zhGHU2DAksqaQHMFsCmg",
  "key40": "49eGjWxwPUNn9Vom4BMTRuYrKzzxdGTK1VWtbi4K6Mz2KSk84EvVhrhCt2g3VaVfp2x8wwW27VeviecfroHN7P1f"
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
