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
    "2zA5krKdksa2R4RQivBCrTNvXxKixnPbRigqmPeoLgSAG7yChNYuDnhWK5ZWwReTmgNNCPjEAuzYrxiumQ2mxGz6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32CSGSR7SSGzspxrNnPXrVg9Ezxu8Mrwmk52uUQ1psEpuXhfV8Ki3E7GhHy6xKjEwRYa9eC9j5FsPASt9c212zkM",
  "key1": "361BR44am4Q7mpkRJC2b1EiHpuUNKyGsheb2W6VbMQKmUhEBEmXjQFQVL3miJgLdTf74ntJdC9GC8cvJP5cDtqhu",
  "key2": "2acGkrGRUwU7RamVUV7uBgj5DJd3PvF8qm6jTgfm6DPh7w8Ym8akiAGXBDVZz3rR7en1W46BsJGUi3YksLBoGa28",
  "key3": "5nY5S75m4FF6cydAicX7RUXjN1f2qwkmuzt73FjDuYuYttobPUxoMAWLsoEMhi4nPqbGGgTmySzwKnJJUKH1Zwu4",
  "key4": "5kBuqZaYUo7zEB2TTF4T2xjHEJLNr4PkgGodrBZr9wS9A2T2amDh4DuXSbq3Ye9iHaUB4UacXyQtdxQa8Z4BbxSp",
  "key5": "44FevQxhPdrJ4H6FovYUp9aCiptimYJMDDGoU1iSNyTGtgkHaWagdXKz3Qm5vuyWAGwXytVfdzpUuVPbxCwpHkrs",
  "key6": "5JtLc4WTR9xRDzHiMma18HFYWSez3V7PFZSsCASR8HVdQTug3vT5qhENAzBsaert544v8pM2ZX1gyJejvvY5QTiw",
  "key7": "JXfJBx9EaBaDpvozMnuxYb6phwZ7yoybKR192T5XrHd92vkb5eynSVfxBKArVe6BdByiEFsMrZyG9fQD6Njh7VE",
  "key8": "5un5A4xYifworHcLwMLVESyvq4kw6Av2FSp3iz6jA2HEvwzgCWUg9Gj186s6ET8FAE2aQxswoYNcrrEDJwEtxtWA",
  "key9": "5Dh1uJrux8a6yo5ei8fCadcgNxTpQqBpkARgYSwnNNm2gEycwKFLB7tXuPd5simdtAfDYQFFUzxgd29FABNVmTUJ",
  "key10": "5jpmxyFqyK5EodNsYVaKhowz9sSUukyhoAoEGQcTeNDEpFXHHbwra3xudbMJZtYN1RF8L3xo3mNjVFY5pgMZBsD",
  "key11": "4ZmKGxdjJtaVKLbaUVmNEAWvZ5ig7di6Aum8g8TWKo3xwav8zecxuz5WBgPpEdKAfKbnc1mRCgojhUtGC96QHYnT",
  "key12": "5r5rWZNAp3NQ78nXKx5QQMVZTdKVRrFuGUMJ1CrUchztnmTQXR5EToDKEaJwR19iKzz6VxcgC6x6QWwqvJ7WkCLW",
  "key13": "5FL5bDtV8m5VASCRYZ9TC697DV3hxftBbz9de85e54fWH7zsjVLdAjCrEAQpgvLD6rFfGaQYCwfAtPJBgtSabbKC",
  "key14": "wiSijxHteZPSiSrbeo7CGP2sHUH4Y5ivboPCtvEDP7kL8H456QTyy1Qu3KxpumYUtzW9Mi8tcPLExPGf3xUKwMU",
  "key15": "3phS8i2FMYV3dk4ta8G4iAUrAK3pFzsyDXxR7GwfkB8HZT2waV1X5aPdqbfx4Uvqf5JyZmTkb6LtuBdVc6BSCfcF",
  "key16": "eSRo16ZjXa33ummaCKRcuGJuTPsqhwRY6A2kdCXH2XrEzHQeU7kZoN2Y9wJavxnMtfJMdiCrMd1B9mf4E6skZm4",
  "key17": "2ng3bPdkdGFGCtHmhWaQRuwXHnaKSaWUnUBWRLy5RPTRnNqz2dLLikuLh12RU46QsfxNJ6M7t4sLsFPNdgxKgZFe",
  "key18": "ZtJK6HqUPYDtHXch31WvHHvbKVEScNxVucqxfFDo2xp78cBmYAZomryhdRkMTCRCuk3avDYCoqsJshAHh1xexGE",
  "key19": "5FQdsMkkfNHgxD1SSqZhViMjsCiEWkhE1aEvk8RZWyx84BVXEMt8Cfo6AvA4SjwRfufoNyJojzkJtavkBg5C9SdZ",
  "key20": "3dpXHvoKjvyPfvvh32NUd6ektkE6iH9zwHSZC9cRmqH8piRuR9bRx5zm1dAEVG61tQ1NCwEhdnGFd7cAUQhe4uvU",
  "key21": "2unpCcc5VipyaVqdbMZk15JXLbrDU1wKvv2V2UspMM7SJovdxxp1SSXRG6NZGk49S89DM7c1GwfGuZKUtoos8Eze",
  "key22": "2h4cLFLTWfY5tZmRhwLmgr1Tfp6GpGdyUjgJfrNhnqhqP8bnk1nGHmvkuAuibUTKRzWkiHq5jZ3NeF4n4NU4uvQu",
  "key23": "sQ6Uhbps1Ge3h51kh9WhNbCBoNoSHizWeDSym3uRmqbD6N5SMrH4NST2pk2v5PzGP72QbZQ4aNZPPNG4i772h2Y",
  "key24": "36LXdxG4LuJrpMHTnBBCeGPy353Q52Q39ZnKm9bkHcNJTpPXHb8C3TDtLB951sR8UP5ggdVZsV3nxNec7GkV4qnh",
  "key25": "32dZh2hNPLwr374Q2SWkBdrVZK91KwDRArY9DMvEa9rBn6odVFQJ9hzBGVhq7Zwq6ZxdJi9weFh4KKhx6F5Tvnvd",
  "key26": "JoJzem6AQeDYCj9Kjm2LzPJc9CpQojpkz8s47ihPXXcmFG113Yxxm6eMUEGpUp9GA5mDtHosW2oug3s1GdUtenf",
  "key27": "5SoNsDzLgxeqph5hwhZgRXVV2UBHgESsRLShbg1trp3A9XmtEeL9FE1p9Bq3PwzkktgbSmkeFmnfMEMoHnKbpBaL",
  "key28": "2o1d5uRsNwotWuWirLz4tKCcEU8CxdZgWDM5ce1rL2MoDM32JQ1y4jhmVTyAxgq3CSxjaDHadYb7iEAwwP1UCdhG",
  "key29": "giTTyJjqnEhwBrccnEFAEdohH4RA7rvmmk2czwcyAgF8qRnXyW9MRRMeB3xo94qm6P3wSZcNxcRKvQ9egHrzp2a",
  "key30": "g7Dc4W1Fzc45sHohyWBZaRtpr6yGm8D2vi3tbDMRtRkADL1yExCSeTPcEFnvxECwkgz6X925s3vBDEWahXg7Avo",
  "key31": "2gm4gnGbXm7ey2SMSMUrtKZYXFhNdRkz29xUmhZwVcjc7mPfVLqYAAAnyVsxz1da5y6USuyNyJzPPm9Wsj3XGRU1",
  "key32": "3rzaJ6pj6f8FgCzNuGSoFXEuc1vZwFRPuJHRjWRHcTFUZk8djLrF7GBSKuWtFryExCcd7PdiZHDWrjr9pkZu3qLr",
  "key33": "2RhQcCbiaBg5RjiuxgwDHmDfi1SozF4d2S5puVK4sY42igCFTjVsEsDzy86xGwNWRPSbwjo4Wqqn5qM27XkUAeru",
  "key34": "42i6FoeRtti8HgJHJMArwJJvrkM2NnREUgJ37fLXH6JCoXHp38MPCJ6UQJLbAPGns3uqZTYp6jYQhUPbVWV5MVew",
  "key35": "376zrDK7RqWqFNEDBqqGUdbY6ucx4U2Jrc2L7pqSiJdvsxRDWp6q18EZ7U2nj6F6PRH6T7gQGVQEyHF44BaRnhkp",
  "key36": "i88YySXKihvo9ppLPvTKDwLEhHXpjtpukJv5y8i5hnCSD9hhFkqTYd3LTHPFAdKia61KgN8dV4uEC8BmZjmL5xg",
  "key37": "3rAiYVNLnpo1c6eNgc8zj3tmEGuXATuxvGuYhJELo89KoQoT72DyX5vJavaf8QVkPDuhL7YW7STCfvztwdPRidw9",
  "key38": "2iqKJW613i7LeDEpaW28FB4j3V64t3T4hh9pUFWdw3SpVHtSsN1mVVnRewC4GwvgTNU48PSxKxXZUknzKG6fUoe",
  "key39": "5wMe8pg7xh9F9oTdDNvTJE5KvNWLTqRng49ghvW75zje3NyoqcYFxs53rpNaLyiA7E9DbULbhhCrCMqT7ndd6JYe",
  "key40": "5NWgYvNkxCQxVxdETyDbpsc16bhkBZadnmz7A6sSNacPFn98eFNLCpwEArX8xv9hCGPLwuD8NC5PECEfyBmJQoGZ"
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
