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
    "hwBJESw6z752tHfVJJKRj8yBehVU2163JmS3nBqa3z3xrNTn6SyvSwAauN2FLtetCusB2u8nYpavXzsF6uUqGuF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gnbVx11QyFf39GkBu7mtJu9x6eE45wrwAPiksuzBZtZc3M8DmCZPCBknBTPNx23ZbVpSGB7ADtNbkCFFH9kbiMS",
  "key1": "8yALbo7Sxa3bCFLfQrjBtTr9NdjWhEEyGawkB47VuCToLsQmVtW9rhptCWzKBug4LRkMPiQXvSctTqGwrSBSRVh",
  "key2": "41uyr53JVgPBxEy7M8ZyCoLT27fWU2o9DuWCe6cGAR8GWN6q9TNs8mHVNcTeGEoMae2XHvUW3xr42CJ9oaobCSie",
  "key3": "2H7mcV9AJzi7Vomb3hssQDFUY5c9hRGkE6Qvco4gDL7Hwq2R65VJ3mYoLuRvx5ZB3XxKe8QTH2woX1WTPKe6ffVw",
  "key4": "3Y4BRQpadBmkvVprmKRNhR7WzonEgoSXU8EmdhwtCTHuYuZv2UsEKqbBASNKcmAz8XVrSybpXNtw5PZerd29DLQA",
  "key5": "5s6BeYBCNCAxmuu6tPLGEMTupthEsqtoXkBiHunTqbChyecVXWN8PfegeuT8oTm5XUfryrDTQDznnCWLZ17vcAGj",
  "key6": "5E1PRUc7JKWCamNPuU68uoXLcftdQtTX5vpVu7e1sppr85FyqjAUfw1K8L3HmjkbFamfKmcGURjyv9SUiors6avr",
  "key7": "5BMgVNHzzM9jQSF3KNAjSEKQ1PLmRc2Boaqv2ebt348HE5ELuRbtbrmasHQdiu8rKdKuDgW96LEPseiEViGCaSZx",
  "key8": "4svFVvAW2JsJzh2pPbK8QregnV64RC23euhqEkLJUwURXP9NpTPJ2yRGxHzKEaHqyHWUvhvrofrxiG8iNBkedHGM",
  "key9": "3rXBniiwpv1hkyfKcvJoErCQkLfQMCjth9VCcghFk1djMdSjPXEi2rmX4d1mTpvtamoCo1t4S24WrJcGpHDwWGZG",
  "key10": "3aUhWvSoAj2S8ykPQGhTcD2i1Q6kzHVjKVYTCD4i4ZSpPcvnN8RZQijuARbm8CyKWuA5CqLVzQh5UNXoDWg5DDHn",
  "key11": "5Tz8AJCW9Uo4Crao7JmnvjEjM5V4vnjYPsgts2Zsqqt9grmHPjgadfzJCxMdJCSSKw1XDjCxUNhWQBi6r3x62QoN",
  "key12": "57HqwSbE8o95dw4ZtnBGDyix4EYJCyE5X2RVWqpnPFb6niDNr3JxZtPuVqVXJ6Hj4WAbouTriYnqFtMgZvdMHsbc",
  "key13": "gHbas3FFPVR8By3HDaDSHprgR1ZtkXEcy4wA7LunJuKRNVWbFaJHtQU1wbZGxRLmCtDTVXVzr1YEkQBa1S77XDE",
  "key14": "55SaYrGWZAnSb1CDiHwdW7hpkhuJyoxNie7sRmJrCroRMkddMoht4unr7ALeRPjUTm2WkafTLfWgCtBFiaWH1V7x",
  "key15": "5WVnaZmuMYFN9MeKifbzzjjGDyEcYL8WStB5DcGoSSNJiceTjJTsMafMdyNhd8bd3jJgBFA54i1DNVRsW1EYrrwM",
  "key16": "55mQfinJCkHbv5jUL835T1DS5G4AEJbAPPVwiga93JAnUQ4iu1rQrkM4XUyNAWLiDfzL3k9rjgMFnfgM3PCTKkDY",
  "key17": "4p46Cpq8TNrswKN15kuTHCr8cy8WbgUdEsEfYcxvSwX5oXwkKFhGNGfjKWDTFycAjA6BLA33uYbLYMo635aSEMvM",
  "key18": "3g8N7uGVtfxW2UHQ1pSdjDM4xopSf62FPTyXHcnyNiBnJg4KwU39j31Esk9kcsdVTxpZpNoy5ks3qL9Y29pQv76L",
  "key19": "3P5UtL3SF2KErL7e13zKYXv4keiEhkmygyPrEv61rzJepjsA3D7RqsZWd9pRHtbn3ahuoxf8yhJM2prJgpLyx1hh",
  "key20": "JXwiKkviM7CRCMPY3hZF6bKtSbZSkKT68r9CCaTigY4K2w3xbim1KhTR6xif8yBJZkZ1yWVQLNjPbkunDMaYGuJ",
  "key21": "5d9eF2dfXKm962AoPX2w5QxmjYpFRv1kA5WnReDDE2ebGzdLeZpSdfP57TvTE23rVR7DQQjHWSv2Gwe2fn3K76jv",
  "key22": "NnM4HkHAt8T76bGATsPkZ6vAdfpryRBD8wUJMrZZZxtSoR6vsz7zgZjgUEgLeVSahF9TeQ1HirHeXRNPzv5FzxX",
  "key23": "5ngQAkMFVfrXw7E41NN8mwHffB2YHtGHzJKkmEE1MoSRii8cPqq6y3wqoVspgLDqSWUWdHYpDLYzAikHW4w91dmV",
  "key24": "379xGAsKNXTQ3w8GVXgJWLnWb4YQpKds6UNtjZasxgt7mxyLawM2kNn9beTSG3Z6jYafrkeNT4zayLWAkeYQypLM",
  "key25": "2QrJp2sENKWHaNX5T1pCjhFJHPDarKgJ2ZVsQMT7nYawjqpUM6AiGuHJYWcej2SQ7Z7ZjZ7FoiB5HQnN5to67Wx6",
  "key26": "vmzRYQ5q5udXdTxgn84SSWfFF6ykT5E4ADQjYDrBm6ZL9FbhYxFadiBbmcwvTyV2otQjHWdKgpUUjF4ryQ1SXHN",
  "key27": "2Ye1YCNT816VgRfMqLnFKQQKYHdeBCbNReKpPsbUZeynfP8R5nzuSfLr7V9VJpcwMytDjBsN2DoATXec82brCVEh",
  "key28": "5jS3hKBxK9hjZTsLA6JtLVKrmcT9FXp2gmmciDkqb8zntPB5ZgXHAkvUDnXpkrRmBnuuQzNan2H6LUSqFoVwdrd1",
  "key29": "5Xz8EvjivY5Kq5y5F1gCqYwyM45b2CbYATzuwiXd8Do4u4yvrBNK62psJLkSZ2jSh7P2XBhZaRDbkC3v3PMkKtM4",
  "key30": "2MvZJQoaLrKyJG1cH5W8cgMZgySbgs2K45TPZYwZXSc4F1ZU8b6i9PqnZEamtjXwPrP8TKk6cB6Rp5seqMjNYtDh",
  "key31": "4DZryJkbsxXYTsojVSQP9Qy4meh2LU8tnbxAHRdz5Y5Tb6TwKaEGpgpwpazHLhERZLB3NgCxqdPkmi5PxvnoHfBP",
  "key32": "5Dk1CZPWBywRfyqKnUbUbLEW1oWJUDNrAy7VYP9v2Zpj1tRNYF6NJSpdHE3n3KsxYtNkgrzm6yDaR6UHgWGB7F59",
  "key33": "3waNds53A9c7rr91KMseXvz51rBJNwc8gUg918HdaKRamEA23ixVhZiEu4pru94BEQ2MmgvjUB4CwkvYGshzmAh9",
  "key34": "3RjaXysd5gp94YXim8ABFKAsGdjjLjdiC4iWC9XYTDL6paAWPSSctWo6NhCnjsooVR6acjbtP9w66zx8tVQwfAuA",
  "key35": "4421owm7Tm4BoPrcXmCdPAJmSLaXxeaBjDzcKMHwidet3tgp45Q95Ff8geUY6pNBy9qccCsYcaaieh94PeYzD8kP",
  "key36": "4bokyoWubsKXaoYavR82Rk4HEJvXRn4QwwiupvXDjRXfhaW1zApGUXrVCAgXaGJrHCea5FNWkvmLjvvhXimr1tkQ",
  "key37": "upP7d9o5AjfbhgtXy17CdiukpjBYjgMc9hdvtLS2adtkVfpNE31NbAATKc3cwPrh7TSzxytmGsw7gSjGJfyNbEw",
  "key38": "3bThqvBuegsoayzjdcEAWqvEPisKpgrRD35jUPiJi3Vh56ZNoAM18HvDUtEkcdWJanL8gHvHna7UPmQg1CQagQBD",
  "key39": "3JsuKfhFCNvFbXUZ8uvwbhzwaDFREWHoFJ88sYVKVmEyM14NJgJ7m7KTcHYeZqufEFFZErweSTUJQbNsHZDRTgwq",
  "key40": "knPaZWpp5xM7aGoU2cLvvZT5kW6emPGr4asrVgsGnKHpRKDSaJmg1fNFUq5WktRtgU9rmGs8PEjPg1r3E41QqLs",
  "key41": "3NLWTtFfp89jRBbZUiBmAEtCJgdH4kEZ7BuCid6g3pKeFpTtJtY3KcUKQzpX8pGVVHbVXdvrk2bCBWi3nwUqQSVx",
  "key42": "vWQUxKzYzAbEoZN3cHzKEK8xXDo23NJ4ThmcXC4onsDh2tRhJuzwVcGvJXVFFxxMtJB1yAns9qpAwBi52keTh4L",
  "key43": "hn2kkygwJq8B3Zxa4YpzbpyfYJvJ5f6UNuNhqc9qd7hoxAZJMd5ne2JQ81M7uFQE9ZB7DpG2wVKxcj4YiK4V64e",
  "key44": "3M47AJJbks688QtEJRSfBEJL8bsA4dPURTcAE8RMNdA2tC6c3Qbe5NxPFCWFwxu3yZPTjfvH1RfWs2sveQc2cgTr",
  "key45": "K32JMjqy4oiEQR6gJDwDip6ax2aoworQ44GbDZC9F3JEr4j7VeBMMtztw5MuKAigAZThWcNpZJxN3Dg4gmLU5EH",
  "key46": "255vSz3dkBg18RPh4Pi76PNxhJ3WtNqR4rS7Gq6BJetFD9wHwQyJNAurgjDeSjWMQhcePRyE3YqD8w2LHkLuHGKu",
  "key47": "5VkCBQyrFTeGUSeZyWJgn94HYf2c62pP5MZJ3Wtqx6WuMbtqZ5c3jwDTxH4RbuiF5LcwyV2GUQQoWLAeCdmiVJPu"
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
