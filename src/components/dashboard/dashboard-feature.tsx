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
    "WGEySXDYLumcT5Wu3u3BP1hkFwnR24EcAExTmstkFt3UCTGbq278sgLwxMvng3qxfAHC2fS41gEwf5hN71pt8eM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AD6yZBPi3rnujMRv2fzzCiNJELrqLbrZwubiB3esw8QiDAH8PFHmxH2fDDfuzASc3a4RrbdXAEfTFBnkh23JUCg",
  "key1": "2JYNVtbotRZAWTpMkF2BRQJzxa7ReocgMgjp2Cgd3h9nY5CPmFPra3thgGhYjQuoNmTzsm9dw6ueN2itcad6wzgR",
  "key2": "d8oHuoAxLK3mbpgqKXYM9zLcmQButnBhxyzfAdx33KFziKHXBKKu4csR7dmjgFhnbwXW7YMw6DxsLgT9WWHgqWX",
  "key3": "3mEdTQc6BTTw6Pow3YLFWtdHvkn3tpBa8HGcxSeU5psKsHoT8jWzcsSdeafmjDJNXD83jYvQbsAmc1HAfoAFxHg8",
  "key4": "4UYkw5wjhBTC9j4VX1ya7kPdcc1LEmcJaXKRyEk5wi4nQPapghdXyNaGuhpqU3CvL4cYYUMmb8mSAU6gXWYdxfMS",
  "key5": "5rFu15Ej2eWEFqTWKC1heMMKURdzyJE4DWEgemkg1M1R4khgQD1tkXBvVyPTJUGHRLW6oFmjzg1kqPEiQsBNGdTy",
  "key6": "5vMcSNpo11CPxXZ7pVFhSmvJHQ17xJ5S8h3jQSK8aqvRrNWdCkYovJ7tw7zazDePwGm3ShNvJPLwfSpaS1SG8tmY",
  "key7": "4BUH57ZfMmgvyQgcipZ6cYNSyMzfZ57JvGVDez8rTkBcx6DtoreUE2pCFnvhHDkAWWeFXPAQupave1UPKsaeVZ4r",
  "key8": "9Ko2VHXt8fp2kV2K2o3zukCERiJ5m6V8uazDxSXEMpK5yJgktUNsAZN4p6mj9CeLJRusMwEU5mVVRRucDpetoB2",
  "key9": "5AHqmn6aLB4ttECnZrG6otBiLwL7JzNYq4x42ohSepo5om2nHzqDP3AmoMabn2gnuU53ezvEufY4An4U4qcdRNcj",
  "key10": "4QBy8uHRmAeGC7RkBm3SBcXDeizSEy51JLpP4pKjwmbk5Vo2hZGFFeyDVu24y2qhDxLPyHLuEAShaDtTXkwaZCsn",
  "key11": "2tLtfG9TirPYq9Jmx9vpqSa5BqLWyiFivwgJhfDoXKnjzRnUwueFeKF7oh1awbTcVQ7LFuvUe2aNN1byqwV5xA9J",
  "key12": "2XbRWyxReVqRwCXtUM7s2zQUmUewie1MitrdcgKFrcPrCMfqcvs85oaU9nsHTvQhMisoREhspTrNs5sKQabtgd5J",
  "key13": "2u7dG9bQncKhy8F7oWLLcutkLQP2HS26GftbfzLR96iyVDK8JsBhofVjPj4ChaCyhoSkgbqR1P7njUM6PZLUv9Ex",
  "key14": "4WNcYmM22ZMQFvgru3Mh1UVzPYqASGgSJ4EYL8Jhkg3CEj1cxeXbx74o863CEP7UiEDzUrfb37cuyQep3vXnppxg",
  "key15": "jVkDRWbPjkqjxYbmgUfsQPeemebGp8NkNHTtiuM7AiQyrkB3VPh2G7Nm1WwPsBckV6HTop1o27m31CVQWJbHKLd",
  "key16": "2nsLgZoMjjKuMf4QW7oFFJFa7zSPaNUcqnvL4AcPyPGJY6DGJwbYVxTZgvZeDU4dF32ni8JdJsX9sc4S9giJURaB",
  "key17": "2K95c4joMmtPGuNSidkYGtsKtpJWZ5n9Uxiky9ytfavaRSyvcbfhtBP6fbEWCrv7vtNeYVMPhuSffQFYzmYrS72c",
  "key18": "4HhKM6q49CiRHqzbL35KG5qA7SN6qshJyzjnC3hky7zPuufgx1LXDFiacLs5HpfC5iNnEzpGgqxHYP3ycV1YAaug",
  "key19": "29PWY7Eo7mMomp3rB3DxYXjcnpmpn9SkCByJmyq6zTXGKdnS7vUaXuQLS7fbEpXPhrFZcnKHvscjUo9Peft487Fo",
  "key20": "5wYZ8gBYq3NWK5h7n2jmkmQ3C5gujG2jAG69sMSfdznhqaKHuRZUctSnZtcgbT6jHDgVquhmXsujLvM21CsEu2pw",
  "key21": "4sFyqb3UZWZYwsBKUNYJwMpeFaQGJsxTg4CPp1eeWUctNFxfEWP26TK3D2nhTDJsscqZjTthoTJD2pzEU3AMbBBC",
  "key22": "9BbmKiBRWNH1k95stQdsaSKYTCVJpkAfjhaaMvZ8QQuCDMBEnk4gPxHgmcWNR6fcqxVgM9rTvckWjssX6f7aRWB",
  "key23": "34S7HGkDxeTYeQy42xqFyJ7Qn4XbnGnWqY9EHhRxWPSZnvezoQpWsTW1b1AZdES3fGLwRoQZ3hZF8yamX4LmUGvC",
  "key24": "WHA37aWxwi2Jqc2ApRfFkohaZ81GhQer5vWmbT5tR4jSeQNFMUEoQ8ksiudxjJKzDrWG1L6Z37QZBrYPyiUZAWi",
  "key25": "HU26TmyBEpKJDvhYAXbZhp8G8RosYWVBmoHQqL6QhgLSw9fUwxdMUW1HNct91wt8v7ZiE7kuDf1GsGaYZpeJv7c",
  "key26": "fcpqUUMpXXaHLY3GF88k9vj5trUC5qyY1NPu2sLm9k5XZnZ6fWRstCwHvNkoHNmqteQc1xfjz43rPTaVG4HTfTV",
  "key27": "2Zb5Zjtghp676fCX3RkCsHrKRtErtsMpaExG5FueCkCquvtxsTZkVUX9PT2ZcJMkcsmDrLAqL5ipkH3yhQgceQuf",
  "key28": "3X71XARnghLqGgqjFwTWEK9rXoNXAejxD9fpah6GR2267Ni1CLou1pLvcAzqYE8rfeDDwYgjUh2HtMjDMHVpbP9",
  "key29": "3rFjRHyjXhCtKqJipaKMW3aHUxXnKXsLArpMLReAuVnj8569QS7NXNhzFJCyG6NLLFLj4ueU7wt2p53gaXMQz1AU",
  "key30": "37CUkvTpMkmk3cLs39wpQaAd7A4HoYKjFg8uGhZVSjgHpxkjHY4Af9oCoMY9GPwEiNuPJUeH3XuBytVJRYF7cnzX",
  "key31": "5H2R8Popw9H6XzyuZh5x3g4Z83MRkBguDo3UoK7y9tt6oSSwMRoPZnCvaCD3qS2gFVoJyMN68moX3X323eUftKnk",
  "key32": "4dsorcu4NQm47a8qk3dMdyTLD2fshYmNbfbsm8ATQdg84zZYYE3ifz96SBbKCWemZNGGgB6N8QH2cncMaTjdeHuK",
  "key33": "2Chq5J68hm5QBH1ib2pqDYoAur2KUEE5VZP3bUio1bWmXKAVKdKUjoUX8zUkEueQjwKtgCjznkr66T2UgR18vVXX",
  "key34": "4DSivVQXxidrPWKPER9rK98z3Mv3mKWFbLzZasaR2K2dfkNxk8N4j8DSjweDz2LmV44ksrwNW33crB2CBvCVqUkF",
  "key35": "3mqpA9F4q3AHjBbmQ2sezutVpmcU8gpfNJYCvpS9LEMWqcos9REN3KnVktU4JvJ89f9vLJgmFXdf7v6Np5TuQDL5",
  "key36": "3R9bDeUm3dinD7S2H5ah8bgggYDNCMQomkhZhcvQ64RBFrEoBJMHE5oTEJeRGLfQ5ZJ8fFeNiL2Pskt4DoYGuXzC",
  "key37": "3gyNd7eWVGknFACEgioAyBY9RiFvGpeFHY34VeRd8N92TH1fXSUu22znnpdXxeinkS6LLibjjTYmZgNbx2PhUpid",
  "key38": "2pUHKkb4S5aCUcg3L5nBuSQ58Q2MPhEKZoqXR46qDDW4sffGTarq8KjVUNouyJVPhyetpVezqxJoQaV3ushoUrza"
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
