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
    "3gcK3KyMqtzR9krEpggMZuH73duGyksjWRkgQsWi69nHXidGwcnBYztZRcHdSffGicAmEa8hjquk6rqokURdBA1F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bkLB9gJ1s1RA9nPpTkBpwfr797gGCntLcUVGxM3TJbYdwsPj8BY7eE1GaaNQ7z6PYfvLnuF6t9xK2qfwM6qrq4F",
  "key1": "37nh6GfYGXnqwnVYzphL9LGN531dHCxYUKdVSwQWMimeiwiX1TJpNo7gsWF7Qm2zfUifQcz36Kn1ANpjU7GshYYY",
  "key2": "4oxK4aaHE7kGMSzsFy5AqmGXasNrV3DxgE4txmQK3c2nueNf28pUXmB15Zv9kGQSmGJiaeJdokHPmBMv4UdeGoMT",
  "key3": "4SLabJtG6Y1HyrGiZJ2Ma78uGx84PZadMd7qAyiqtnRgsZPr5Nvn6yzoaJTtu3moXXuE7rrUegweUqkB4ZBXFnV6",
  "key4": "4vyA8i6qGXVzyvdUVYJc5Q18ymuJNaQTM5NjN3d8YmysFzyAKGVHFU7k4SFazt4P33MNtYpFXmhUh8oYWYnEgMYR",
  "key5": "5QcKm7b3eCdri7x8hvxWYfjBjTGYW4HKcf1kt9tyCY3HrrQ2uWEY5zx9dQLS26PBdkmkFoteBeoTh9sZCu2spSy8",
  "key6": "gsApsBy6Xf39hDSkp88orsMGhj76YaQztLptRVb5XpkN3VqucxPreiwyWX7KjZJUriVbHPPKTqrhiNYShPueQ7Q",
  "key7": "36KKDutLax42HAUoMSfT7AGf4xUyMJc3K1uDNiuyLenkEEKpPDk7Sgy6NYBemRSRHbMR3AeRApfGTnQiz8t2ZdnK",
  "key8": "37j3nMyFWiqxM2D9ydeVUF8jCPhKqg3pb4HKJjDXFSDhb4TESh1WRsrGuFXYttiMeQp2b4qhyLSWj2V5eqsrACSW",
  "key9": "4ykjQprDj8GZDtKNwUKE2B8Q82EfaBrVm1x7H8rPKWZ7BnN12WarLBwDXpKcbKL3uqkUrz21ZGdtF7BwwQsUqpCT",
  "key10": "5v3VcLuUxoRqipgw667UCRmuS9tACkcuRj5HZY1FGN21wgfuw2bJtTdRqYMkwz33M3QTK8YPE5aGkpZdg96xc4GB",
  "key11": "45RfEfvXvqLF2Hh2vRVAbwKuvKWPyBeHLo3wpZ1G8T9NMGGhXyQK1k77fXr2UKUQZFUz3L5S6xqPUfocCcMbJhoC",
  "key12": "4nMvp84CHuZDghzTrJhodbhCUCs2Kkg9agYsowAZiPjnQdE3AXbbTrSAXfwQh6PwrzhUuSC76NvNshme5hpdiVbc",
  "key13": "2z5J9MYFFfdLrkmLSyTXSLnt71NiQKRRyVSjWtkxWYLPDNzfQS1vJTromRb99ZRsj46xwPCsvN4hcVDhrWvQnvBH",
  "key14": "4UR6qf4zvwg91kKP9Xd7jh5TQBdokC6wJNKM2jqfcZ5BvUay7EyEVRhbam9XQk35ChCWJb8cDhsyuXTXJAAs34oQ",
  "key15": "3RX48cREZbYCEN5bbAdW3asRWkDxrPhDtyJ3NzeLrpT2uoVS8f9YWXywEh5EiKHznDbmw5cgY7WSZyZSTbt5aWuL",
  "key16": "ff9uffSDkKMXtBZVib7Xu8WsSLdcnxyM1TYLbSZW2Cy6ewiVbyLDBk1Hj1QLiztiWrtUjwxZTu9HbfiDhixcJzk",
  "key17": "5HhG6UxykGsaYRCzrkDmsmZCAnbcFgEq6NkM9g93ou71nBkHSZqLWiRtcuJigmGhiTz8mt8r6bxb8n2CNrxBxgTF",
  "key18": "2jwkYHdfir9Kv48gREjZNAAbtGiMwB8H1XqJYELJi4iZQFgPZhRXraWTQbMYsffGhkTbeQMKh3s7VffmpZVoZFo",
  "key19": "2pSxqxWhrr9yKbZTGPuUU23eEyTiGuuWvpAxZ8yKPLgb87noDQsQ5DiixRP6p9PnKzn13848cEz3w72ezfaYxnma",
  "key20": "31URVDXQfuziMP8ZM9dTLPe4dcjdLxyzLTp3aHGVcK5wy81ADpr8BdhHpDGRWMTemtTiXgEBapXApHC2HSnAWFnN",
  "key21": "33UNaYJmiXuCZ1Qi7DjBRdTUXDC1MyggSPHYyZ5gsze5LabnyjZf1VV1PSYs3XYeMNjFuERbJawAFB6uSp1vbS9Y",
  "key22": "2Z9zjxRpjtjeQkZBmWQfp24kKFYo2sTcqcdfu5tBThZ86ZJ4Nw7qw2oCR9etoFaXz5Qn4hKh9LtXDFuuzCH4UNLS",
  "key23": "4XirVnTgMYBLU5dSjSz2JEHKuwWqRzsdCtusxUkRZAe76yi6otBeZmohRuZH97M65ChGW7DQ5f6ucwWNQdHtVaW3",
  "key24": "5NdvWxQyXqFNCujwC6LJKjhZJotdVbCdZGESkJvT1vHXqEMzxHC9nvArGY2XzaPbodCGKiLGx4pUnygcXbF35KLs",
  "key25": "3vub2oPymxpj16jCXsvEJAzbQuB53onSqgC6xQUJTjDPF1C9m31wsBk1DPXVrsQWDQVaDxcBZUVzi4UUekJuffD5",
  "key26": "3pqSGUM8jt8nN3XPC2PTUhbaSQUm6ZzzP4xVaV2a4AFWdnMxzu9wSv579DSDSoJq6bstJ2nUw7cPrREuY4GX8aEz",
  "key27": "2MENZC5g14Wy7nrr174g3phdSqxJegw2eFdqYE1G6THHvWVCxvHdLkjuKBux9NNcqUwCvRxzVrHqenUBZFkWXbJp",
  "key28": "27r8tAoNa8N3WzFKMTiVP1HcHKw5JBjDn4ZQCyyzPZwx8avPvGwQMai6M1TBmTZiTbD4RLqN1PArXjawV6VNgmAy",
  "key29": "5RnFkmR6A7mG4fkS73L4Ay4673K1xEiPHgpcbrSagvAKeWfUoCmkzqpNqy3ZSHuNiGxFHsWVBZUR2vLrY1nprneT",
  "key30": "3vFkoSd5tYBFNThiXX7d6FkJBtrsfKzTJSdcKCu5jLDu58ykFiYCcEUyJ1vKtiaBtSDKfVNttYk7nwkK5AXZLXjU",
  "key31": "5uh3v3NDNPAbpbKfrpsMM9zcJB1FqjrjtYmRPG3BHuuLTsedHtrYCDASw6LM6Hc8aZAFzC97MxuHyQeyVUzpw8er",
  "key32": "yPLzMuLxVRQunELiFkNmEr1ofRxh4nvsYE4D4m12sx2kQSWg83UApSgHsrcYm2UMxJ9brP33RxJ9e1x7HFJcvEw",
  "key33": "3UgVxXm9XfRgsAsTob38gsJdQCHqUZBSmA8pZVGbBzsCgJHXdbU9mii4oMHgy3jHtRhHkRLKM6zBCjBteHu7Qrba",
  "key34": "2mEPJ7XxXKMBiAYZRVXWyAJSBg7qrDzctvUvJyfamaZ86TkX88CetT4BV3VzRYcB89VtkNafh4xhqW4JeD5snQ4v",
  "key35": "3obvXMcCueiGTvw7RBQk4QMLwoYoEX2ohHSc3gJ7MDj4BXK5mdxuL6ZrXEffAMtphAdmR5xJ4sFSauGve4cSLxEL",
  "key36": "Vmm4LseEK1tcYw3TGfaUqFteXEd9xjLnBNhfbDkUj37AxFWCvdPiLiKovPm7Mtix6JkYtQNJPXCeSrHcZE8myvZ",
  "key37": "2ZHibMGTfP6iaHonGG1W4TeUhohy59k7gc5c6ex5qB4KPTfgKTk3QCMicrJfgqME5HrdgKkK4Qjsz5G7gYjxKJHN",
  "key38": "2PCsLVrCd7Vdvj381XP4f2ZrQDeimvx9kx4D2TtNgSWcBPRWM5s7x3QXqY6X2dLbnAwKwNn6TxEMuJuSEpzCyeTQ",
  "key39": "2SigADp9CqcRUzWbTkQXUBhuCvgHF1iyNzRGNzA6bPtVYKYx3sRDJQibPikTktcewzN9oTPfsZ8Bk69Pbj6iunQ3",
  "key40": "2MECifG5dJcN8xYFd8snK4b8Hyv2Pi1hQxmk2XLiwsFdjiT3LwfWp29ohKyWhEAUuj9DtN4JfdbAringL9PQevgc"
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
