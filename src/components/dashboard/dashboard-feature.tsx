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
    "FqFFMFtMNUXafwGHWSGCxUH9US82YcWCf6Rqsroqm5nYQQSNByeKTZiYBg4aacs3QKDd73Pmsk58Vznar3Hh3mz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26Dqfv3dw99xaUkv3iR3r3onmFMM7AwhMMo6cPLa8cYu4rGJsmBxyjAkuCHxN6mmKv4q3U4s2KFHhAKU37BZectE",
  "key1": "2xYAvwwSF1LMDGrN5TBK4TFPLtr46Z5GRE6eXAGFg9xcAFiPaj6YckQ2L4QgC1FZSzB6K886krxCzXFhVGVgom6b",
  "key2": "3k348uLjLHTyE4EVxru2HASvFopu9XvwKtHb9qMQPzbujBrRvPikSei42kZnaKQyJB1vwSm3p5sRwAvmsfwsxHQf",
  "key3": "3wKrc4WzXEhC6wC1zFG1Uf4SyqpjNoeVn8vaTL19a1V3i5amLM5FsVfwVTJfT3BERdsRCMw3vXZFh1xYd1cuscnj",
  "key4": "29tHiZe72ftb4QvN18mUP7toNndNDcdE4Rhe9NcSwSgjmTZ7pooaTFm2MRXg1vBw2rtSKrozQDk2w7EZAfniGH5s",
  "key5": "4uu1RnH3hvvJ4rkSHMNwDQDjCYaiq5dN5L7hUwE9DVSg5METrsvWe641q3Epy5fpFLFwUoo3NmHb9gzLBP3GGsDK",
  "key6": "GE6tPqCwBVyowr1Bc1HXcMKyXgWx4J51NuAYvN1HXhViricBQ9NKr3Bq7B5wsnHp5gZSuCsTfxzWyERpJ8kSghf",
  "key7": "62AVbSVdMcAhFHyZ3RbBuFQ1UeU1kn4NTnbCUeVPMiND6Ze2PsaLAWk1r7TL6zbDZNdrbdgPhkJ15mj63ga2Hd3C",
  "key8": "jK5hRtSS6f4GrTiZuEZ6VHRe7BpXdv67PJjqTKZg75y78wcTa3kpK67QF6BmjgTVFB2WniU5RuUv3jNsr6yMsnZ",
  "key9": "esF5TUyySzuRRE3ecQ3eRCmtWHwWwY8PypMaXhnpq9r3mjAYc3DqN4djRigvPVK63dVB8mxPdnxTBU2qTpLg4Y1",
  "key10": "4CZdo17SCZeAyCVwVXP3bjuKcdqfjhshx3F1ojxFHwa2rTjQXC5Y7SbVwRACvcT437gzy4PAwA3dFjLPwNRkmFKg",
  "key11": "w6auRBUFvVUhTaW3nHcEak2CVGJGBCPwJGV9cyw6HWXBZrLhNzgf3YmwSiLMnM7P6TrFVDR36r1WkkojLTj4kJc",
  "key12": "2vfCTtRn1xwnMG3Z74P6BgfCjhPS7vYjz8nQD7R65N8CybcDGkpLRcroC2Mfik736W5EBRzf6HyNuN1LkbyEM3wu",
  "key13": "2ZDCkjJRayfc5hX3y3bZqsQhQiahNxNU6pmvtsuZkFLKfzTUAvKJLHmUZBxRLkGMtvDS4CHf2YZekUej3Zbr2ZHv",
  "key14": "4BT8dywceARrcUbWHqY8i4seecapzujT6gpaEQxyV2ctGtMhYaT6UofoiEHDTsy8gZ6CHQwTJsjVKb5i3Ez66dLM",
  "key15": "2kgJ5pVavKZnu9YGXLD7c3gp6hCxUSrreCutQodtUjFgXEKw64aM8mB5gVo31s4HHBRPaAxEffMQrCq9EAomk2aA",
  "key16": "3xWsNKNP1j5Mi85wrbg3huDjrPCyiMtdJGXvRow5QXSAwG4jX8frK7h6PA42KqeSw23JFqBw54smGZBmqzdtyB3i",
  "key17": "4yrwD2Nn1674yhKJDy2GTapVCtP2m89xuhr7dCb9mmJ3dmrricoFUR6V3NErQGiJAonh6c8A2gUbQGioptCDdofv",
  "key18": "5KjZuBVrVenR2yvnZcbsdRVPyruKueLe1Ssu1GQ2vTr1UZUxEFcev5EUuoRQ2hw2fzspju9bwvuPmwiRPz5dngT9",
  "key19": "2QHUg86TTC7Dj1ZRdD6Z8n7c2LRwJztyZVBjBqQZZ4Fh4wBp9qgcmoenWnr4XmvMDKmgRE87LvXcUCy3EksGeyTf",
  "key20": "5Wzh6qrkqYs3uCEKa3ToW7CgiNSJXSL8v47BeprF8wsEZBRgHZNA54QQpELxHxiWfSi7Jq9nWAcij6HdRo7vuiVd",
  "key21": "dRdHUMWzFkqvXDocPb4GV3TrJCbBunJWpp97tZoQvVEchF8mGtKmVUmpSnT4ATzSfb3VY2bjp4BqvoHnkium9He",
  "key22": "327oBzXFR9hAHx5q5qQQUM6RqjC5YLNAcdvHWPYAehcX6NG47gTi1jz21NQFRKdXGadwjp7wcekohpvqKWhLwWEr",
  "key23": "4g6kxKDcMX3ZMAsW8i4wJL28hoVtecLySZdykP9gWZ721hn6FYnUTqqk9BhTVcZDcb8yMnBcCicbKRh8cVa82w1g",
  "key24": "9HPny8drNVnQBAtAA97NYvtBqPQuqin2bt326VQRTTTBDiruy2LZ8ndqpZ5CxkwHbJoJ4vbmdk5nThANpbNYLqX",
  "key25": "kB9ixSNk1ud8wRJPQxj8npwbtfe6rTBLDsVB53FkWKajQyJRutuYLsdRYuwfjGJjZBgKU2JMm2CjA2XtouTK76B",
  "key26": "LNFu3Ms3iY4WxTGJuzneWsQBxNWQLMR8ddSgM6jf57kZmav3MJxCB1AHhLJcQUxGPiTp3WC2DzreLjne6exkiqb",
  "key27": "3dyv4RrdvPLuq2441KWKaugRRAPHyQsqXEkYW3p5akoKUjfwJYUDDVphmXFTrohqWVYiNq2TuifrWtxfYmNCAqdf",
  "key28": "3jEpd73n3sy4Zpx2zMNmjhFsiGTLSoXzcyMQJYNk24WaGTVnrUcij1XTTDM7okBnZFgNaMqoKbbkCFKsNdkjJuFZ",
  "key29": "6bynKqbbYf6NPGeWgeiyx6LazdFQYXjPpszszJjYQe9aWDmGeUEh3ASKnbaV6nLHYhgQTQDx3VbyzUEBRQwVeqy",
  "key30": "4oEe7fX5Rt75LKHUVxMc3W2LJw3dGR6wPxGXFSjDdU8MbJ8fHNaHjbTsMkZzRBRa4HR2aCFcGFHukDdaHihqqhFK",
  "key31": "2jqBz7DHDhwJmRoeZYZwQjU4w9PSC8pLPWzWZdnkga1NkHV5gNcC83i9yasmKmCZ3aKjcysWeDHSbrR2ppMM7rZm",
  "key32": "61ZQqiCjtsoSJP28rSBjbVybakctHRcSNCzneGczeDvUFY7EiCtgTqxr7qxTFQrpRGHnaFCtdFpTp1fTtbUshNhF",
  "key33": "2MAX1eeusMoferV6hXmMTZfp3ctuYV5euY3DGeR3HyzroyeF8TT8Aw2N88KkuxKHgf2F8cNXtCX4pz6hMAShzdhu",
  "key34": "468jEvML6s5WqqcPGoPjiaRqFWxz7GEUrYD2sRSNuh81FTwyBhvybHM4VcfPgPaySjmfpXUi7bzprdL1W5GmmqxN",
  "key35": "fuUzbXnF8VrkBJJNB2VYLw3FqgoN2ZNzFiNXTTLzanVv6Mv7zVgGXBoJbKCWwkKeq3hrwwKJod3vFbQghm6R7qv",
  "key36": "4SooVNqkdbo2WVpr57wnPAUSSMqd75yoPJ1Nci7JNWTkFy81YpoT7SNJwvUnGyKtu8PUnoHsFFMvbHrvPqTXLXYR",
  "key37": "4ibtB1h96Pu9k1ZnwLnN4Q9YEKQTVEurQDWJJ61mZuBTMTCCaBVWnNMe4WgzaeNEcTWN1Y43uJMBFfYgyPs8Z7Ag",
  "key38": "2zpRKcCaVfyTGikjBEqhmNUfnWGVjQsgMyrh2hdaJCGdYnBVUPoHwMat38WUT3U6QFwfCit36VAfHJ9w9MUdXiJ7",
  "key39": "5YapCMWk2LQyAN3KMrn7uBSfMWKjBd4SWgqFRh5kYebHP31mnWqFSroAuzi3mfFkiEsmErL5tLoupnWzUha2mbjg",
  "key40": "4dwndkptk3VjSRnzaQ5s9aWv6YP5H115sSa75AGHTReW239vSu3SPkbi3LLkAKsaQPTwNw23BgWK3eMuVPQpXVi3",
  "key41": "4aE2Dny6aR8XGQKVhxiP3StpK7JoDzhrAjQRBxmNsJfZZxYHaw93ZJe1MGJ23Dr65qJRKuKntTcv5rRRNSJETEgh",
  "key42": "4ojXcqaakPtUDbmJvh98WHSxVKStsAxxCFsEDLY6QWDU6TohwZ9YNW3hZc5C8qeKm2XsMw6muTMynhkwbfvaVMbu",
  "key43": "4PHxSq7wZeMsNVMLrMh1TCsE5T5M2Tjzj6ep1E85mVFv2VN6QhZ6ebPLjCAmg8ff3rdhu5U5R5btLoN3z8EyJEFT",
  "key44": "4zPN6hVctTyChxuhzcm5mcMpY92vFFpTMAtY26Kt2WjniGSFaECLdMrht5Xqe4gqDP3ZDiVRKrfCFYZbBf5Cc8E4",
  "key45": "4tCuxLR7yCDDucUsSZfCbELbmy8NiaH8cY51wXXVYNwfp5Qb5DyCuJSqvVzvFQ1SKvhxvU7TbXYRG7rZVGTxkAU3"
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
