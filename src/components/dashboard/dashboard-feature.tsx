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
    "35BxpQjWehCyGYSMgNMHJ19NWCoeQwTUH4MYXyJqfhaVvpXrrpSg22pcuH4sWcZm4fNCJspVvD7ZKEYfYnXSjjve"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WCYbaw3uSMSMWpqmfa9V8Wnkc4GirzgnggoGhM8u4Pp8ky63Ht2chxgiKMU4hDP5BgSemqicdTFBYKSgVJcH2ws",
  "key1": "5ts6CbFR7MW9itvnNR8EU2VX6HNBg27FwJ6D8Jg7fbBYvTXHGMyFF8RiT5QnLmCcdNS37a8zWsJqgP3iReBbEV45",
  "key2": "3abVRWtQNxfEg4BvBPceNEDYM9588BNwKCFm7gyzrLBPYnsR12ubU6AYFBE4BEGH4H2xoKNsRZgh3F9VwV7AUyxi",
  "key3": "2jriaaAd3jnN6TevvyPVrHSWDLmwzLAqSBzb1B7k2Rzyqy99WbbJHHTMbJWuvcqT4wC717uWUK8gBbLfGuZERrf1",
  "key4": "3r34EtZDBabPhniNWBED8zE7uCihPbHYVfpaYzXGjBSKo6VpiMzKkNTuFTLBVGF3kcNHy6ZP8GzWLjZ5d5hSPLVp",
  "key5": "GTgHthqT6wY9cCxQDAvF2tZCkh8QAxxHEpSo4EmHF5E3R1gfLxEtRGrjHt8v1Svzx5fWEEp1Z2F9eHY8DmdC9Ga",
  "key6": "4CngYova5tEaboq9Cq7E79oL6tTA9YEc7EpAhSxZnms1LFwkpvg7rqqYbp4QQBSJPmVJW4Qxk7FrLbUQtDzmtstW",
  "key7": "616MqsRghNfWZQt1Ju8Q4JZz9eSRL5HcSY6VPVWEtXbYaGkiUQZa5e22u4E1udApSaikbJGmvWCcyGj2CTTUFiTE",
  "key8": "oxKruPLAExwY3dPghdEreGwjY4KZpcLuz3379uAPwk9dGdv4JEb9jx5unAwXuhhbk1YDRqsN26nxcA68ciVVRvD",
  "key9": "3N9KJPSxroGP56EcjgqwrMs9adNXoS9pSJPqwDJqjUKvc2vyoC7CDrT4FadMQrs4SkCBDdh52hZgWThis59mX7gA",
  "key10": "4sjgw4JxTQwynTepKSKuxPRvdWj5d1kW4k2T8TFfkeVj6rH8PJUsHtf324DrSPpNENM75pB1GAqxsWFB2NMqVXo6",
  "key11": "3yWdVe4twZwrr4QU8vw61DyFu4g75hynehnJfgf7EeXEAXT7xkZte8ip5zpU1kLpXR23pW56N8ZGGLA7VBxw8cAg",
  "key12": "295J3A6kK97peGq4M5WZXd8TjKQgxz63UmTtvfZjeLspnzw6XUdGxMJQ3B6hNApPueFvJnJc5mi8DY1TWSxhf4Rc",
  "key13": "4wpE8fy24vwP97nV9uwSzaCXEknBh3eVXwqfBAvo4frLrhF5AL3WiWmT5D6QK49twmNST8jL32yPLBiFhovbAw5d",
  "key14": "25755x8oMEVkHCbMiVvvUMiaJveAoA5rd6rsaNrQFdegjBB61otKveCJi9KxgqVgBKi58miLdnGmmwTh7NgNakgU",
  "key15": "4NWm9wnNFtjw2KKNbhWABayQeRudVmew7TQzvKtmu3ppzJdn9fdCohWrHQPNHsWWEGUSMgLMKypgRMi9ypSVyRwC",
  "key16": "3Y57jUK4Vr7mGQzo4v9KW2XD3LbVUz2iTupyg6St9g2X3vfnB25vQRaZXpiDk5gTzEWtvn6iNU3CnT3dHX3i2v3B",
  "key17": "55nRbrVjLD4g9WuwxwFxUpq2o2JXaz2eGDvGvs7rS6Q5XwvaTL39ePv24Gtq6PQCdsB7cxdjwFUypPR7rnaSPP69",
  "key18": "5mqhv9seu9TAy1Y5e1Retb7ins3vyHbTZCyWLhUFPQGoNdZNi7c8KFS9nT24nRe5itt9CHfhhHsJDYToSBY8GhsP",
  "key19": "43XcQnrUy2qeF63kxgeCY76VYQboGUFLFjvQpQYH2kqCTKFow1yG9Avsfr4eTW4B5UrStcYqyVu9ppDa5RwPyiQo",
  "key20": "3Pm4AykA6ctcYirjnA72wP9Bi8qHcXXbJgv97PxmGM7xF1U1Xq5tX7jGPzxShcrPB8CYCDzkJCBtLd3upM3qWCbU",
  "key21": "LMRDRfb6QsoptafoCCPsuHUXRS6C8VXS4fMK4KCMd7YqherfbGUJGgPzC2Z9HvzbuXQBMMhthNoVi2kkidefPuq",
  "key22": "3zc2dfB9BfrJnuMPQPtjMfHqxtbsuDgJ1QKLbyszqKDqsvHnwiS7aV3bm6a7PPJiThhbJyL7qWhHk6h5wow4asGJ",
  "key23": "2Cs12u3dErMTCHthsQ6cKvW4Kc1LGutjs48Tcg6Vo1i4RY2q43iGnPXcRH5RW55jc7yZMuRWpwsViTEoe5ZrpPUD",
  "key24": "3eehEznzZRzeugDoyj1S19fwYPB8PCu9sv9hhEesqxUKigFdB2jYSGtujCsZEs8k55SzVBHBYreekGUVAXqe3gkC",
  "key25": "4ZUmmqPr5s3jggqmw2BRp1nHgtkCxzeXkpzgYV9kjij4PktF72HtGNwttHFK2mpomK1Q46spoK3FUXDpuK4h1okB",
  "key26": "uoYD2CjnnWEM54gS8x31isF9Mh6D5eoACWBFXCsfUcrn3jkCzBBHaF9uQMivg6KghpLesKfzZVDqi7LHwF1k9Bs",
  "key27": "3qaiADan9ZWG6UYXPRqYDP4isFh6SdFq1JWVvRPUJgWomeWJ6KnUDPtarLaJLmtp324dAwbV9tSNr4q9VxyaqeDh",
  "key28": "46EN5j1rKczHixc1mqoqtNC76jf8QCZkaoFgbbEXrdkPqiavnX2JM31NgzaP82YexhSbvGYmhgmBegVfy87ryWPH",
  "key29": "fv8Gi2YMBLnXvp4H94izNHHRt68QErrSYbXvemSxct6r7savegLuz7LF6eH4tZtLNnpH8kTperChsHzUNt5GJXb",
  "key30": "4d6PQYzzpahwnx1rnXr3HrtLvU2w8AK7Ef1ryGwEsokSqNk8ExUVLygJTscsJDBVfRAEaiexwkytAksbYDdrScra",
  "key31": "2rYW5xdkrWdfMSMKi2ibwbVFzuaERid24C6LsgLiQGUyiM7QyMhiJJQspwoTc5qdVkjXna9PyX6ZT3ebgkQLQx2n",
  "key32": "3qcRrVHD9xWZPPZBr3fmtDpaUCYdz74bokDt5Hz56CQTsfsn6ogCPQvWXAQu873FQqUHXuV7Z3VLuga4ekavCnNz",
  "key33": "5GWHKbJwRGppSyT6XM6o2mcJmWFD7FYmuyu3shZZ7gkrA4QXrJRWmRAkLzhyRPe5AiRzK9n18LG2eAKKXsJbmAav",
  "key34": "d6wr5a1ZnqD6nxjdRdGnRiFH1oiTLUa3dHDM5rXm7xmEDXcbCW4tXnQmWUEc1xxKbPbSjnnnRrCUWAJmeRVAp2p",
  "key35": "YwRgWjbULgTmGGiun65zcKRLMNJeX6xwZEVHvq8FHwfbXJiR8zHdjhEP8mf9FM2LpeTKSVGzff3v1wFPjBzC5Kb",
  "key36": "x3DpJzRQRm1Wuh8CJqAvNjVZyqdpT92tKo7PSSufP6jSdkHj5GaRQBr7oLWFvjHNfkWdziJPHe9HHiM3a9vaMQE",
  "key37": "4P6ju5aSPuK2of2tD7JxgLp978R4Mko7xDwoWFPFPKkTXrXLVxww2e3xW3ZrPQm3HUtJqmBKp9cNJQQh55MxJUTA",
  "key38": "wNfNBP5dQpojd1VZTTyS7LJ3jFiRrWuxQXTP6AqD7GajaqcQXMeazzriCDWjwSEvAk8bW9jZpCcJSadrCxFyQTg",
  "key39": "5gySGvU4jp5A8zMqXj2V2bhhocgYZoR7E1FCqZRJA37herf4bivjVFe7Ah5GotVZnf54HG4s5niP7Av4tk6XB82A",
  "key40": "3ohGjzo6ETmaToJ4JyordJzm2q7uaEpHnnoGA3tF1zbqk4fwhveFr7ZpBVBSWKa6viZ3BncYRawjv8pQoXxRmnCc",
  "key41": "58unqKTqCP7wg7LhjfgCFguHUdcBt4VbGxWk1hjCytvpccw6SH1VJFdXRNQS2K2AQb6eEH8YrLJkiBAtRGgJKxyn",
  "key42": "Frfm7bKLxFt1xD4xYqjPmYrmtiosCQew1F4g7pZFd7wULQYuAbYwR2nAWRQR8PXaBZj7QbUECTYE7tCZZ8jqBWZ",
  "key43": "3ZuXJE6hZezNuuzyeSBnyeo33nwcRXnk97DJaptRRJa56VW21RRojSrpgeLpah9QLFvTr3a5LL1TgrgUU8rpQKL",
  "key44": "2Df8RbHcTBeucR7eDvXYR5TDxRZynwoBYwbWBgBS9DYcYUsATKN8yW6fzHywyvnMY2JfbV6audAXYZCWRNBCaZm7",
  "key45": "5en3izPj5FUGGrASMBgxBDgdGgkznwkxbxLxXoYWzx8Heoyvy8J4wekB6F9bhFPYciDR8aWaiZNY9jHPMNedaiAk",
  "key46": "3akpW6xTaUAhjWZdPfQBdEtGZ8iLBM1vGJbvJFG2CNCRcU99Q8iQaGWwjU8SfqWvBTRDUrYAqfieN9t8rzfVCsas"
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
