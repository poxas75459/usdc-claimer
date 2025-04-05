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
    "5t1HL2PJWndyL1mdPzF4hnwuW3cLUJtNsWmbNADjUv6rWSamEpv5DuHAB54DEiJAfW899tstBDJMkgdf9Z5eaZiG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4i5dWK7iSNq51ZDmC7juGd7VgZsDy8RBXQNW9L4tYRDWbkTJrGvmJrcZYejraqQwLzHANqYtGZ3RVYZC1eLFcLPN",
  "key1": "3RkMHZZY92V2sCGDxM3Eh76iLjy2wE5mvMepbHKEyQrxhcm7wLzMTz1mrcQpmp8bRnZ2sgF8zgLRoN1cx7odNYrs",
  "key2": "5hYmeVSsnVKQDUA54azNEfgRGLzHdiM19VviDSV4Q7FH6ee9QUTNRQJwXzP28j8WDjPifo5eYvKQHFThajmo7Nr1",
  "key3": "3zn9S4uquUFfPpPhamwx4wVz1N8dR3vBb5TLMs1y7qGN8UqkRqsJnKWG877uivFwm5PDphmDs6TfVssRNFpgv1wL",
  "key4": "HQ3Z5BXbQtfxvP9FZmKt3QT8TLnZewypocU8SPHw2ySzrLobdyCWn6neN35BhDNEuYoXwVgxHW7u8nSriXZqStT",
  "key5": "4SxBofgu4pAWQ4p928hAtUcNHAT3G32TtNeWaZ8xoHA9KnjvotSBgiBQJr2zhpFRJvcLFKUApfvEgXGAJRsBdoR6",
  "key6": "2Esodwp6DrbFkkNKR4SWNFwM2gvGJWsocVB8iDSjShF92mPEkrYiRxjgmw4vXaVqcPvZ826Hcgd1jyEcDro2oCck",
  "key7": "HyTbro7jYNQPHNPHtqZ4EcEHQaoNw8DwzLaRhyk7yhaQ2uBkmJ7QVQWfSikqifqEY3ztkYyKiw5vdAfXCrCCFRU",
  "key8": "4bLhpiHCvcmP8QUf9TEMt4hyJFosHRV6GZZPmdFENcHJfP1BDP45uzUtBh9vPyNXM7fQdNNLTMvwX6JZXUPDETQT",
  "key9": "4cXWRk2N8rsTSWLEK8ZnJ4XirfHVyLtwTE4kSr1v8ia4YWemitR74mm5KHBegzU3axNCXGgLNr1dRtpzCuehmxpZ",
  "key10": "5dmQPj7Tdb4Ur5rc6G9TdWAV3NhvNzhLEx68JEbLoukHXYfeNznPBfCTdu7bRHsSoXKFzZs4Sy9ctsCiuLbZkMDn",
  "key11": "5GoGAucZYkq1VKgngh2XmgPwLaNo88pZngftuHX2geBVyijCZGtTWQydk15y65Ng3WbRwNk3jqwSZ5JPmFgZhM62",
  "key12": "nDijEeSN37Si1pArA3o8UrJw268ZZwDhdRDJgpEVjhVYeqkwCKyDgoqd2sa6nEpcXTD6VajSa1JVSkUTMmPKZCi",
  "key13": "3w7XYegQnnSnvL5arWQA4KmdMESsb8iKnnUrpQ7hspgH2JWgDybqUVD45eaP1qmhtJJsHWufWo1dSTQj7pCg8PiK",
  "key14": "49Hgumpd11uUKBQG2MWk1bqs8wP5QbHbL75PeWHpgvFr47RkiS74dk7W1xzt3Mib9FEqw8vsvxgF2R12Udbfb2EN",
  "key15": "4yiUwXFRUrL2rmdVFV2vDpXQ7RFr68DSkLRkAPRdQjFP515t2UEXVSzarV7bS3QMXzyyapyWZm8kQocBy4D9rez8",
  "key16": "2fsfUq3o3fZuZZphYhEFH3WmeZnQwADeJjRGwsHZbF8A5hRYVh4CCcjRg7LTQbB4aoQqnDRRg6dj2kjc2jFkg2fz",
  "key17": "yL3pirXYYBJpu5A1j1JTbs5WFE8vDCD8WW6YXjG4sm87AzRnD2J6XYnirVW1GQbLbQLgcVa3KMy4YMzUx9JdMDN",
  "key18": "bsqnByKyKoviTxHyMswnMT7F6qgzqzih6s4qRUfcWu4Mha1AcGsb4tiaDcB1t7oe4MgVquU2uxJWtJmJbSJKPyC",
  "key19": "2PEbkk8jm4QzKzGgv8zyX56j8eeXTvLKixggPkDzPVLyWYjDcVEK6GTvbcxPkGVkyBtUc1V1eNPnB4hBvKdQhy22",
  "key20": "XgLEC1NT8v6HhggeNKBjYKaAuapsd13HYop1PkjiHR3pcej47dDSZm9rX1mjbdFLSf43c2hFE9j5j7GLcGViu2q",
  "key21": "3SDEykg48hcPfVYzz8vSj4S4mvKtUvyKbhfvirz6HAAbQ9oyrW3pTtDL38yxk7ZZffV14uw9DDohtikZ8tstuqWk",
  "key22": "3tfYEw3nGbGbYgqGPq7TzuQrXuLnp9LdjhLUhK3oneK8EPVN97cNAU49zGcTpSfVfJhMHqpwiXM8EQY7j4uyPCuU",
  "key23": "5c2icRwuAji2kLrdQJHCAiXV9hko5NG6MkiwwgQMEW82DsKSaQQBWzDq2dtJacV559KfykUScLxwAYLVeHr8MANv",
  "key24": "3oaNDrdLLC4F2yzmJZ17xWkNMTJXPvS6TjX1GPBHLj5rzqdEJFUrwhBzkgcrw9SP1Et5JPm7EyHwNkG21PBhtDd2",
  "key25": "2RjymNZoCWUkW6GSez5hwqfV78Jz3QdZjEx2fxbFjGH1LryvvDKLjUucZKLA8d5KDqKJQmUL7tePF53xCumNmVvG",
  "key26": "3cvjVmHTkssDtKgB7JxueoqjsNwwWzP7kEiUxe8rusTSUo38Y7ePipGWoqKtFMAanzCNDKn15pjt167GRKFdMFre",
  "key27": "66cf93EUJjSwvDr3bFRwbJdkXxonQEYwx5WvXwar6BtDQHQKAoayPhuZPMF3Dsez2V2Q8yAC9R9RxNFEpYVC6pjm",
  "key28": "5gZW5UUsen9r1RSg9TPg7Rm7m7NAaju8kNHDt8mRAYDsqeNTKYf5yubhPKUS1Rez7r42TtP7TTQZDoeWEcVFwj6S",
  "key29": "2wnmqYffkmE5BCGB5smvN1QKxdfdfJqjaNeqLFi5j8KwjvxnKzHVtrJgcaQvNZoKSXzntuwfRwG48u8nRSCdSsa6",
  "key30": "2qSjcnvmo5CmVvKdJ6zyq15DcP9RmoQZVB6LvTFbDqAoDVkdquD7Ppr4pzqDXRyngZpHZ6WikgWtqpUmKpJZDNiz",
  "key31": "3ggVK486zUkySuiAZBAmvtSdek8ZMCDQcpBFfVSv6zzrMRNXmA6cze3MSUoTHnehvfFdt2g4iufGkBxJz5iqqseP",
  "key32": "5u634oBnsZop2g7wcayo5FfAxfYB3WnbnvMars8QLVTChwgi1uuXYgye9iPHAFdVgJZaz4RjDoRrW1yLF4e9LgLg",
  "key33": "3wKd6p1ZLgGcAAARGm1md2FetoFkobMETz7M5JDoGnZENqMjWtVgxoqqqT6CQebYGdENgWNAYikoZvVGLbjm9qa4"
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
