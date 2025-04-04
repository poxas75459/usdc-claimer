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
    "2U4SmtzGcY5iuM73zndwnTjbrMkjxLRJ34LDDEAUvK2FbvAEJ5aXUqngrwZEozN6poq4Db1m4ZMLRSUiYNJt5hAD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HdsK6CBi7M1Brc5yBnNPLxXYJFhTN1nikyoyjepDtkKXMwKtop2D15mSM696DuYtEWbr8vYpUzDjPKyVn3Zo25x",
  "key1": "4vACasE6BbNTwtwtLEmFMs5XAoRo9r8H7J566WzZvPGg8Cz6u9x45GJQmhJJxFUhjWNEdLExbMuoJ4qGFaQgdvi5",
  "key2": "ExTpf2o5kg3Vg4fZHkAcLNnnHnurtkh4oieZshNPpMzmvGrQz7PF6CJNLBxYFRnP9RUsotwY7EthfbBkzRJrdVP",
  "key3": "VgaPs9mXSpEKbdeoQwhuZEMR8pXw2ci6hj8V3cBFsSWSfXqwPkkUsKtMgUtG3FhcZEf5bLrJi12YgbXHxWRqPEU",
  "key4": "2shb2gBdPP6JhrkkhVEi2E9doaLfETwfmaboyrC1j5s7xbBaL5Q2D21Qs7u9Yq5asbFSfZgY54rFyHk65uXfv5wH",
  "key5": "wEcHWNPya7mfnvxWL8unM4xJJWoxz7EktA7BtD4Cvim2A9tp3LUDY37eeDUdqMC8wcFj2zqdB7oqAHiLJHzbbkP",
  "key6": "2cnpDPdW2fgzcYYGFGfRmSJTG3BgMHRmkVZHirsnzVKfVYHRNhoYkeFqycTEda3X6TaDLgYMRURnjEDEmQKMBnR2",
  "key7": "zvkbqvhjMCyCo26vTrHzKz9DJAAuK71ictkANKu2nFSBDL8rRW9ia1fiN3msfzdFkYhm3trsj85Wgz7kWrFKJCz",
  "key8": "4oty45Zq9WM4Lb5RPpVWXX5zDUud6kHSHCzetCxJRy8wXrd7f8c484QCGrx1mVrpX82VQ5E566YNsk3nZZwJQji5",
  "key9": "2cWchUJiBERW74DCzWxMoMxziVmTWMM9Ht83mLQ4mgcB8QjaCeURYnXjgDqPQy3THAa2SHpJmAvRm6KvTyTjUY4r",
  "key10": "5RCm6o3jS4ygKfSpX2aoXynyYggiwiKUGsJ4X2Rke6x3UV9EyZYv6iS2XxjxkBKVMNTZNPijrco7T8GjQ199EAhA",
  "key11": "5YFXFnfW2W6VTCucTECEmBzBWZzqGyrhfSqJ39Uuf9JwXCMg4U9iMTjihHWuV1Q2oFCPUz5vnhBGtR4oSruLMgho",
  "key12": "vio2NYjmr2gpvNaR4xSg4J65k8VQ2b3Huo6sGUi7Sxt43eyE34xt2quESfQeQmdqjV99hkit5HrLajaPmgtMGGE",
  "key13": "HGrBkKMbBhgSVEjgVQgHi8J2rJ6HtqsCgdrFsfkoXWPcRiFPAojjKpYVbgRS1MDDVxKxPp1bVWAWNxyKt1oEmdo",
  "key14": "27FQmJfceczcDUpZsexxtAvHkECAUqS55XKbrMF9F2Gp2XDC3mwcQ39GUUi8g5415uB3t16PRwZABCTHstfCV6gN",
  "key15": "4HXWZ68CNxoTX7fRvcd78s5C6hCCx4yrQ7KUZZXbMf7xwYBEtN9uB7iKnhf5sAvSCDSKLpVegcShk3S7yUG2egyq",
  "key16": "4SMtqrASWNR9jfvPQYot9XnY1vB6r6AXUMNiXLWphpmK6PZC6ATr6zk4h7qMvUzrSjZNLusC6Rmxi9bZAVY3wr7Q",
  "key17": "4b1z9YAtrfWw9KUiwLz7uvVyRHio9VStiey4wm82p5RH59gdeRLFgPNWrWDGXpNwmJh5SAjv2m3GQ64aFATtuEua",
  "key18": "2um8BTFZiyowgeZZfEVdzEo9zziPCpmsMthEQAJNfMqVfMtV3NDnR8rRwDivkKnHT74sSyrRUFejG3L2X8xMokWL",
  "key19": "4e84mWsSNvaggyYbwfRvWQehBwgCqJybYhsDco5MG3F3EAbW8zxxPjd8vDPhEnwnhNp8dshFiZbU3ZDPjnzJwyF3",
  "key20": "Bd2rABLc3kfpJsMcW3Y1hZyNQr8f8dxNd3PJ1Cx3VNuQLysgkV9JjwbGEYBJ9bxQVjZSAdJLXPXtTb8KC3wPvGE",
  "key21": "3W2SunXadbTWdMMkt3LE8bFweSC4sMYtGjShEHFk7BjbTNqmo68JGwcbzr3prs6ah6ETFYWbJj8C21RdZHonip5E",
  "key22": "Q8wcVC9vSCCnjXU4t8mL9EDXArwXHVXPWun8CGggvH8UKdxRi4bwFhzqogdRvDUxWAGz5pQ5bzXJ2qE6zJaQWg8",
  "key23": "4wvkj3vJVqSg1iPxBJnBgZpKxte4YkUnk3aXQ2PTZUvWD6MaCu6asHL3uxofpsNZQfeeWHqYY3nsnKiS91v63AwC",
  "key24": "4BaJ22sQLDXVisP3mtWvgkrybxDwQk8UjTrnwuRdr7rd36xkWXQ2waEFjPb6su4JEEnMfzjJxtPpzQJuRum8A61s",
  "key25": "4gQGc2USidEs9rkogKkXePYgWLaLdvRge6rbMS9Eqd6e147LzVdCMgcgdhXzYRvhejad3BHkcgeqGMPeDr9bQ6YN",
  "key26": "3jPDVyPp6SRLd3vCpqkJMmGoVzynwgaW8pPY2UeSdFzu9oijUaHmrZ4CutowYPwJcLpehBb6VNMrNhaDV9Qzxcmm",
  "key27": "PYMSdToaGMLg1a7ZfotcAeYAc1vejwNW1ZaqBZUn4txmXJuDHkVtVQZhEd5UD28vQbv27zR9EawfupofMaZT6dP",
  "key28": "49TQN634SYmrTtGaW9a9Qai74sLgikoQyfbtx6Zy8661ktKs8n2xoN3XpaSDaqDFBfNxepu7f866mKZiKaWKVpTo",
  "key29": "47Z7y1XdJvKttAyWfKN2CSeeQzAVSDpLi1daxMQQrgpkhX1gFdr9dqRk4jceBsY2Dbzbx7u4WSswTvEY9ju1Eprb",
  "key30": "4rZzxChWmTzK6ivDiFk35iRDdiouNqiat1yKLqjMDLcqnMPMh9LyEnYgBcY5UKdGJ3wgHFGPH1BxDMjTaYck7TNb",
  "key31": "2dU6aSJMPdxZyKGamKpGShstq2LATBzJNMwTXky8ARKtqNGe9dvXBMgUdsYJVbjBexg4wXdwXVApZjoPVEB4jWa",
  "key32": "evY23avZLhmcdkuAE2msjXPGX5em3AUVfdLFxPHKxzXJNXVWdvvH3utwuwUospJjtGG6WxzCMVEwa9EdrnaA4kL",
  "key33": "5mFe9g11xP7cYdYYqBuxA99kR1dE6YHUnmMEt6J7a4ksnwLL1FZv6NiPnjvdUSLastWtoPVSt1nEDoWsoWRFdNa5",
  "key34": "2Zgn4CJLfxAgbR1yDFtVmHUwffZ4y79oSiDD75monCPb9s6vwX2qDMA2UzpyR3zMv2337XcHVvWNLYFt6KKb4zjj",
  "key35": "2TzyTVvAvpNKJs5SmVb4kJJzqmifNQyNVBkzQGTzuywqL5ubCVcK68m8vofh5XJDghG2QQZK55HfcrtsoWxUPWV6",
  "key36": "4Gv5fFt76PVGphqnoVXta9Y1o1u5zmh3sSmF7zNHKWnJ5oAE8DEf7o6i4Fih1K1bHu3X81TUkzC1u95q8jJKCiDV",
  "key37": "2rsY5XvEVr5mVftaHoBcQobrhT8aqxSzdtsJKMqMNeAEoc18U7Jh4NLbvZw8wo651mRuRCkaDa28Qn7ZRLNJoCZW",
  "key38": "4yrje8SNgg3zNPp79mkASY8Yyeb51ttHYj3i799ukfUchHaP88PycFMRSBCNJTeRm33UUdkFoXFiMAk4FTGraGZj",
  "key39": "5HdhdYFs7P1YNst17jNqNZKuxV3gSSyjqpg1h4qjKrwPjLLJipDxZrDEJCYZyxGb3o7cRe8ogSzye8uhrNckgsU2",
  "key40": "vakLSL8CsJ3gpSrFNyYebrG3nCEEa4j5mpbKuPCEPzz2ub51C1uYttZpXNWtswZFYpjQKx11d3LDWSzHFmnzrgg",
  "key41": "2BZSEvkThjZg38yDuWx6a9RSzcFsx1jxNDphX36JCg2C2YQfi8jN5fcDbMaZuFBcygimzFbCMm4TX7cnNPpkHHGv"
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
