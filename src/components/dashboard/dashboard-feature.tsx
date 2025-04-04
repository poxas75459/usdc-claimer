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
    "iHomxz9n3DV1Hhh6MNCU872yMfhMc6TmtG9faWNr6HQDnvdbgdyDEoD1Xx8RCyUN6UqsBP2y9DT8i8EupTJzCKX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66ZuNv7FktBaTT7dv7CAjKYWw6shUbdDAMxnamArbGT3FJmSL8FKqv1ntNSMnHcd7HvA1kio6b2u7idX5919ex85",
  "key1": "A5ZUA2JNzAYb7neEiHyTTuUwnV8KguuGxsMDiGrEXtUsHD2WRwmD3Q8D71zAT1HAEtLfeK9McR3uMQY4PehQCUt",
  "key2": "3r5LG9A6ixMKfgnKWaczwibwCKyGY6stnJ3Ws1z43mxhG7tc2nyTfq3dejMrQDKYKXSB8bN9MWLaJkqDwvPjMeuj",
  "key3": "3acZu3zap9NE5qgTRVuxgqnL1K8hZcxiGrC77JWeRZZiC11QaYeGYyXQ14nqZq4tNKsypXJyHWFKWnhKAfntzXnA",
  "key4": "38Fr9C3TrGwUPLaYCPfHrWD3eXdXUL45DKJTBi4eK4wCZyxugM9KyUeBk8a5zfhjyFuMszf4SS86Lb5oEHLFkijb",
  "key5": "5JmpqcrUzd22UU1G4PpGZRTt6QrhFMNPx1ueJ73Xpq7uULdrNMh5e9gG64YunfGJHhXk191aG5d7d4eJiwLiLto1",
  "key6": "2K8dpGjMa9dKViE3xTeMyvnsDFPW39Pn3PEBDSgv6fU8eFBr3sgcJxE1MaKA3k2JSJ7nrTuFA1kXLaUFevtxfVY5",
  "key7": "2J63PLoVH5QsRE4SGFk6Jk3P9p2p9pAkYzZzLLaWBh1mXaFNXqny2tXYfhGva4AKWwJPMwFt4TkexdNMjVc1RhqS",
  "key8": "2HNBbmoo5FuKDBSdjapwZKHEyjPSrzZVUvnFez76xCoWnToL5m2KY2Z41WLQXN6qAT2LsNJWUizubSuiWdAruaZN",
  "key9": "3Gn668L8ADrXx5xMYvBm1zsnzXm8qzspzws91QrSRE5qoyJKaPqm25d2zwHkbd9zcnA7C1oQie5KA3Jfej8xVhXB",
  "key10": "2qFueFZ2PjqdgafKmdxa2qYBv2Fi54hGQhRbW233LDpVck4KjP82bzat72TMHEDN1qWUVUPnU9DDDDwhTyyeS6rx",
  "key11": "2BA96tNFpsx2an9t4tZN1gz4FxCXnFuFAHbLvEMzZfmVnVEScBi5RBuxj69VRzNbYTPhiFEyWSfofXZahvsc4YLr",
  "key12": "29NL9GUzxQcMfHcoi2mffyH8kSUxJ3QFALfLdetUiWmCsS8Ecd6w8bmizzJH43DsXDyMXuDKupdpHrKD4baGHfE3",
  "key13": "3C1TU9hFiVLCQYAy2iqJNiV6vfTqWgfbzUM8yuMAs5krLLDV8HQiKYGbFGzqbzPMtjNVfmA2pD4JcNJLEpc5Hzzh",
  "key14": "2RQwm8hgtjxFnmrMj5m1JJ3wyx6t9rQt8MgYFodsveT2jRwSNzuZ8wtBkudQ4Fb4LQ4r42rpMLmaDLmmdAg1vonn",
  "key15": "4LujZYBgPCLPkUyJY4qrD6ZQem1z1CGQBWMPGxQrwxNgVMg3UEdvkDW11Y3vsgzWGmwyqhGuFH3QFNuCesgaSh7J",
  "key16": "3iZfnW81w45xQNn4pdE8gP7GaPUmdd7ssQFKGinmmfG6bE2WiZXqmB26WwLkusS4hHzvg9HQcgX7eEyNg6VaeFoc",
  "key17": "4iM5384QTs8dLSG13kHWJX1vwrX7VttRUkUedUKzxmpxWjwBvReuVQTjBEbu88qjEX1yz9F4zsSJGdBzjn4kg6Te",
  "key18": "5KrucMDSiGE4tY5yfS5Dnv1iZu9UgVyehprcWGWwyWdCj3nXmHY1UqS5yRhQwmdYU5tBtAXnaPvwwJ4gfpA2V2rD",
  "key19": "3Yw4JoWYnq2rDMiY3XfzGFqfZh3UCAKHGxDLLfiKGv26R2xHcHBiZy294PHCe7NqhA3pb2doR2AGYQ73APEG5NAD",
  "key20": "3debeVRu4hZYtkMUtHRh492FxwMPU2JcE2Y2v1wnkgBexsidbWP5kGXeh9QVFvDQ2tarqnL8LuBxx3EMRU5FpjFw",
  "key21": "4V4HsveEH6ye3Px5AXcnovcTr71HDxQmwc2hrX8HBJ5gkuT3iQD673bqBreAZBRD967hfdysDRGLAYbMH4oyQarN",
  "key22": "fErWZa8MGjdxWgSHACfQwQN34iYq7nH5YeHaFJkLUMJBUkzL4UnD3unA9vetPVAfKzCzrT2m4Rprx1uPfjjk8yp",
  "key23": "3bQXFV2zFsri3N1NQ4F2qfmd3q2cgsULTt3GocfsWWmj6Miieiz5kGNrfArLrPXodFZzDSH5QR4j7qaRgjGbciH",
  "key24": "dZ7qeTTeSGGKNYEiaL27XFtuSWqhF6SBv2Gbo86viZkd6YkfVJCVM4BqphwEgNteBP3yxd9oGhhYS9FRXybSq6H",
  "key25": "5pFxDCHzsAsGs7Z3bZRpjpeXbMhjiEjuLwbF6PvCAEoCWULFUNzPK3xPsPzvM8W9e3P1TzTjffnCn2gxLFQN2z4j",
  "key26": "2v4jEhziiSnzcgS4xaBSMMJPQdTe1mpChWWnqQzGxefPkKryr8HdpN3uZRipRef5WqbukZDiZepQ4TYt4LowjcVh",
  "key27": "4qFB5h3cZJfg2aYNLnviJ4gN8jcDzcKETUewwizdG3WvUooRXjePpnGboxM4CAfG7iUvh5fLHJbw6SYciupthSr7",
  "key28": "5a28VK9ySBdkWJVDRdGHUjTDqz4ahTY2ZX886YnjVwnRBHTft7kVyUnfSt3kcHqWHsHnvs5BpA4PFtnimjvAXbgE",
  "key29": "3oT8ZXoUrD3qSCPN53oDi3LSSG28eWg3BemCAodo4AvUp1XgbvgoR3QKffZGCEQe8MYc1BhLfwK7woURhShLfBUv",
  "key30": "GFRyASXKeKik5aEcVCWu6GDaaA5joeLEz6Z6fyE5NFVciTw3EC9PKachRZiCrZpYobFVD2BbKBcdnxiHqFEK61i",
  "key31": "4vz6DXqFwqqQbJs67kRGNYnTPhFE7P9NRgHDY4rEzke3VcGL45HuDQ9Zsd4AW5T8abZfnfhW7Jfs7xA4yuim7hEA",
  "key32": "JkZGfJSwNfBy568NUcEPUzPikVENDkVt8bKtL79Z1XCbPyioCiMasv7DXerp57y3oFC7cAgWboBJaRPsJY9T5gh",
  "key33": "5uG6UmGPy7eiVbm6oqGfLywA7Tgw2L7m3qckZf2xPZZFCC9WyYpzrTAwfmQWZhnsMp9dZbeEcHvM3tCCxje5x7Gj",
  "key34": "4cU5u2UiMVQia9DA8JWNNBczBUg3avniksdCGhFwTBztc6as4FJQcXCTjmLAMhCDwLBzE67oQxZf7c9jUG89XP23",
  "key35": "3S6jZ9PF2oafCTNUhTG38c7epVMrZigFReND96tqC319FdxjBKv3zzWaSa5BS29LkjycEY4ULFwpo8NSBfgXEhoL",
  "key36": "3gjnppYrDu942VLtSejpM2TcyHdSHTn7W8yQffo9FnwVm3G52VqxZymkCuG8x9L7S1A6qowkbWHy1FR2JKe4Mu65"
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
