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
    "RuxB68LzKFADQmWfjcxGSd5Rtag6mZ73c8duSuejZeNkMa5ZE4jj951jrVxdFzoFDYiVkAQYEF8LpSjiCYbDSm4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tk5Y1AkqMYjJRCMcvRDXwR7e5t49Bo4Dv26wPpqisuLBTX42uMvbNL8cLaLSUGALquH4R2QSSUngiR16aovwqzE",
  "key1": "4xFvmpM2r3tW89vPWMJzecSpqPKwK79Pyz4bGAeXEM4zBUbNYGejwZUBwwdQAD8AoapDYzLAPjnDkoM1z1r5rza5",
  "key2": "2rNk7iWcdDdWPMrCG4yRREjUE5d3uHr1kY1i7uKkjHa3mNWsvd6cGpTaie1S41zwdjCrdYNd6nh48K1djFap55LE",
  "key3": "43uz5rWmyfrmg9sUeGcM1RvAuuG3V8yy6DGz3fBPcD8FBBHF6aNP3irU9GwdLYXFX68MTMJfx6A28669NEzWyTUx",
  "key4": "4xMTN39gr7PsLDYQhgmmqFaJW4MrYkWcCRCairuuwqBCnGRPvvXu1zWj8fSFbSTafkuusmukkpAwyvuP8ojuUJpX",
  "key5": "3uUqQStPorFbPdqoF44Nu2wFwkvWaNh9WRyCQnocnbiYEcD5GBz6ihkmdvfHYgJJ67txsTZwdWk5Nw2GgsG4wEcu",
  "key6": "5badVARLntsSe3Vvu43GaoN1bzXEpDESeRAKjeBmBtervQBi33THfeaoB67xLCY2LsUQb4cJ6aHuDr4zxjhJd265",
  "key7": "4NkrCs8CBgfesXMQCyQKq72ksThSazFTRk116RNqyYPUXgqrvZa7UXaYD6Q1wRNQxc6BhbPoQsxFQixnD5TGEyP6",
  "key8": "2LBgSaHVeJSbRdcF6iR1DVxLUJ5BmzqmKw7zdKjuZA13nWzKWA9BwPWnFn5LPBopC13tjDnRGcvKNQt6ZDGDaR4p",
  "key9": "4e3yBWiwT9FSNag7pkswQxuz3gWLd5K7NKHgzxs4zKLD4P8u6oeteiW9Qn8priS6Ttb4bGu2ajMPvqs6h4J2K6iq",
  "key10": "5hRXVfH2zk2mM5PYptbcuxezP46Zo2cpsvAdUNLXu1KihRdmpbA2NidBTxACf8UDgQF6fysBt7kNEVTZVtK4Q99t",
  "key11": "2sNJQadv4Ygpi27aGgQxyLSecmZyHr8Hn9ZDnuWyiMVqzjqLwiXN6S4kuNsqvT5BRFLiwCW1WBewoq7LcxzwCbhY",
  "key12": "VAWSiZWYu86H2uVb1tFJKPUz47i42Nu4R3Lo9oqrCMF96p5VnBjzXCAC5NWXK2ZCJtUZfqRdUY3jp4PwJVrUZMv",
  "key13": "35DFhiLMcjTswHp4Y5s4jnYcYchGma2dyLXNpBhpm5Ee243iM2u2Tj2wAzPmaYPdprw1hihA9rQdARK7gB9mzuYN",
  "key14": "4ju4zkdJgx8Q8vQiNz19iaaVsHcz2WM2BcRcMHS6YkT3GHa1eQTbJb5RNg2TRUPZXQvBWeB8UnDubpNPBzxamTQb",
  "key15": "4KURX8zAcqhGXL1MpBwQ7wHeChmgxyyAQBkktVG6TZz2Ev41M4GUVNmWM6qagyqFYvyR2hfoDW1tr68up1jeegAJ",
  "key16": "4JXP9c7d8SjEDCNa8ymEkzwYH68ScyfopsZV6PrR76Kb3VSjzzBa53KG7fKd33mbrYNR4AHrPwv3FbFBEM25zViB",
  "key17": "5uv3LdBV7XduEcgo3LyzrggP4LdMQ4x2r6BhtwyBXrLjwttUnXXpgEmMLPaAdRG1ZXKo6GUL8JpGLqz9vEz89awe",
  "key18": "3k6S1b6KxuZZuyvBNkbRuE5bomtXH99H5fZNet2f61X79mbpqhTnxMWqAwC49xZjqAaQp37KKrsffHxdcCjWcU3A",
  "key19": "5mFFnzB2QkRfCoycXbXkFiPTFbsx1pxi7WghRva5SmVZaoaC8D34HU1M9FJH1bpnN6w8LsLECYXAogboaMJkGvKm",
  "key20": "2A3zThzsHNNYxNxTve5Q1ifMw71kzbVwNQGSvViZPigT5VdGuhXbkS3u2aAJuUchkSFYFnZx8dnRah2zffAWTcQv",
  "key21": "67ZxD6qvvaKwaFfwNKKsmUF5GzED6vnqRowBnfbNYjZoZXPfJbFYBNMEjXUsK3SVHS4LZyQWqBoT5vMYqc7zjkdV",
  "key22": "4vFMwaEkVgiX429CrmyD3EShNWyPChAZveWdPSacLD5jjaff9LqHiZpms99ifDNKp8e6zUyvxfY87PPG9i5fX2Wd",
  "key23": "fJRfKcV5HW37sLYA4KqJdCKr592ZJUjNEFVTTQSM3wajETANorZPpxssjkfSVPiVBcFwTTKU77neX2Zxg85jzC5",
  "key24": "4PCmm9LcMmGPmomNoJUNy4M6Zqn4RPS9eabzjSHaMPTQP2LPEznWgYAFEhDbYux3kCf8C12BcSdGNpm2zmgXANYA",
  "key25": "32GpjDRvhW8fLFnSvQQiU2cMddhT6fw3LAi6h2n4jfDfSXam2tRUmsrPv2J41jHUg8B7MLfjVrRZGKR9c44qHgWP",
  "key26": "5rz5xpPVijdAx3xUnqihMU9RMBMre62bCG5gHTLD3UEouYhFLMczdGfsNQFUZ5mdCT2Kyu36eJhEvGVvLgsnHPqz",
  "key27": "594afUQpCsx8VJNHUJtJN9RdCYB9fZbdUyP8CmHgy6gUzGBTDBbf7Xu32kjb7XCDDsPAvpKBnb85tiu3EH97YMWG",
  "key28": "233FuHNvNNQn5GDudEmF1dkAyxePvoVnSFXWL7BZicGThpmZjaREs4vwh6wYzo5Ne7cBpzg6oPdcch77Rg8QNydM",
  "key29": "5Ptc3CEb82skpV4SoNizv7hbK41pzTp7km9vt87pBikcaMenvYNfYoTpGvMHkhzah97zHh2obLt3JnXG2N5E9sE2",
  "key30": "242cayfy1YDPbjHSfzqZCsms4EipK3GGQJCbPXBFk1eSco3jhPEWUC1d93BYYc9ydKRirbEVhuhRgm3cC3wWJYHP",
  "key31": "3DG2CpkWZoycjqpBxJQqM85VeALgxxY8dxMguS2qwxBiSKAUV8sPSppFaF8fK4SMUMB2D7Y6Ydv1JBh3U6TBhKus",
  "key32": "3PZnUY5HvXQV51XURZPwtMR9zH4BYPWohNegUwDDNZnh28XTEHUXNoQ9YtRKPbwh7XqLBMehBB6TMhqH6PtfiwpW",
  "key33": "2ZVyGGr3jyBZr59cZfbGMinv3yUR1cbV13emBPJ8FYLYLwq7cRvRLDqFSTSHijJHxAeTSi8FKAptbduEM1oTzVYD",
  "key34": "4PLsn17WL6wEYivChhRiqSGEgPgTQdgkG3bCRvT6cTSXn31yDaqGjG3pz55aq19xT9H2aagPnBChf7SFpZyfyo7K",
  "key35": "cFfTf3uHp3k44zk3qBCqCgAkTAwzatzrdN7RdnyMzYzakbYkcMsNP3GAEaC5nuYFz1kHRZZFY6whZxWwDdD6iy3",
  "key36": "G4on4iLpcSTJk5GkRQa34kBdSqeDHRx4zzL117g5BoswZJpx591SQqFux9dKXJxj3LtpM6kGmC4CWDjTS7GR1y2",
  "key37": "5Sv84d2LvuDHoJ2kR6HGoUCnRfPV77tjyuqkUaq3qZWkqemjzoJ6HESTHJwhTa2s4wzb9WXxoq8aqvwRKa9E7cys",
  "key38": "3hHffB3E4ZEti93iA9UhisFxGGLezLMt62XsfUDevDtoiKrYEd6or9dEuq4mPL6644WVN4thnVDTtpQCdwjWcrc1",
  "key39": "2RDGrHq4VfTHypGffhEQLuXbvMnEsBSr4tuPaYnyugywUqSibW7Bx2jG8ZA75EYjoM7DceNer8NfZG65ue5Mi27L",
  "key40": "4yQDZYBru9vNdHTUFXSTRWwiXokfF3q4YuQ651WQpP3yZeKFTcYtKjhGUz9No4hqaetqXJEuC8tpM9JBEV7jeMWw",
  "key41": "ydxA8SdGVmptpiuwThPPqpjEwiQ5wdgEvv7NjaA2Fg4tfPECFRZYAjEErN8mv67LnFVkdbuwGGHAddUrMdwvWLr",
  "key42": "ZaDHfmNixipsWSi9GGFhYV8nDX7XwkjWma2VpZdqe2gp7fxoE8Etvp1mCYJ6Koej96CAQY6q76iDXWtCLLu7uTN",
  "key43": "TtVXEMc49EbLXVN2SQ7G8z9vTGcnMJqjRwAkgVg4ZWtC4UDFdZQr9x3oemHDf3JvTFLCz5K8yAbeqNyJ3CZALBJ",
  "key44": "gL5fjh2FxDXhFuKMobW7Cf1h67jdWV3u6aVpiLdRP3bgcTW48cATAHnJ94J98ufSpJodoGrqaAAWKcBaKPiU1Rj",
  "key45": "5N3mCT9NzMNisADqw796PtzH2rRhMdm3zDv79dhZQJhaQXyU8Sx1z194gw6DtPS41QptRhJksCbEqfTyL1nTCzyH",
  "key46": "3zpezwDzFxEgBPvhriAGX6Lz3yntRNbmnCFDRvNChvVq3omPPaWeEaMaB2aPgeKQ83tNpQt9T6HYqxSFxypLhuLw",
  "key47": "4ttEyL87FUbXgiJ99DJrg54jbB7Hn7hE4BagEmvSCmzNh1qaM3WU2vx4vdppUSqtTXTAHyHoXVywQNRfFBS3JVFx",
  "key48": "3swcENqvm1qdyQMNu9uWcUudtXZeMceWbXk99AYhZvDcY2hxeyjNpdBRstAzehGABcieSXkm8e7cJ2KDxsafS9Bi"
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
