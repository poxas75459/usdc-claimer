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
    "4d6NjnEEyHfYV2DifnTT7xqtNV3ZDARixigQp4EYX3br6siMbG2ENEQowvTcMDKkqwN7vtCYvLsVjtY3vj9DUJ9s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jg8po5UzFHo4tWJr7gygCWezkXWHTjKh7KqVkwrPWF7vPBVFoVTi1h8hxbyBwsrodth899b376i4JUsdNepT2CZ",
  "key1": "5oLfa2uftEs7vG8TxKsBaLHH4uUFzRxP5HY6dJhrZk8GgihF4KXWdZduUQ9NuhQnERuuUe9VupNXJLkiy6EeNbJQ",
  "key2": "3tXxtRriki9dFkzG3wNBgb3iR8qGiNhEgiJAHNjp4pvpsBP7nAeGfW6ZjKttht6eB1WukvNdzT2i5zz3ozRf7RCF",
  "key3": "poqhrpsS8WRHnKR2GuD68BzWPchaPcr7srVSfX7ZCaMJBWq7Bo4LSmc3ECCeFMMdW4LfNdGBkzGCUbDzgHV3Kne",
  "key4": "5CG2ruGiTKFfyr3n4C1YWZvZTfQ7NsQQJADHaRQ5T3XAbLivCWkF91LdtWoxg8yqw8rRbzHdwFwEsQKgALJWynM1",
  "key5": "mFdLALgAVwq9rJVTnNNcREyTTwNUQYm5pnGwJhdpy5TnwEbp9AH9uSBCfpCjnG7pNKHtBSG93GKRdHhDAcv9YzT",
  "key6": "kJXc5k9ybHqFaCWcxsQub7BrLL5jDr5iUCJzZ3bnzQduU1pVg7SkRJ6varugBYfney7uXiREbbCqcw9t1eVDrBy",
  "key7": "2EJmzRyH9JHAhTmZR8bpLW5Uk7x5FwXDRsCcaXFMfm9Syq68NMF2tfjA2BLgoqu7XmrGL8xeia9WB8uGhqmGiPRK",
  "key8": "2WCHYpDLgQ9mgdtkD4MgkUPpzQJyrrrDc3SbtZndpGWhwfhqeSnak52a1cRZvz9sBbgbHT9i3dBxnm9cyqGaw2dN",
  "key9": "51PV9uQU2Naa8gz2s5rtejVDnvynRTPY37UqwzZfkYBo5cZuLVWKif3ULvqe3MaJzGaR8DRMnhetvE6nuFRAADtG",
  "key10": "33dhr7255pTknzYwpPvWhTKaDs86j5joeJGYFU79YHXgeJFmPCwD8tN8aYHgKsjg7MeGMupnJkeo18o1nQtWueNR",
  "key11": "4Z1hpown3t2f5hZSZ6hARPM4U5bND3yejRjWLasmUmbJKz1Y27yL8rdRkV1JhLyJ8UUvfoTjLszFEPAebWen2epL",
  "key12": "2ANtvMLy7SBukRoUdxhBnFH23SWSGyiMJ2oLUuYY6ng2MtPgph5d7uVt4trS666dF8vJyUP5bA1EtmrDLNvV1W5m",
  "key13": "252gv9gLr7FGXrF4iaPDcybJ7kfxBhmeK1qARVLFnMXBSd8zsKp7WoHKWPoVcgNzhqmGaAMUQ8HjLGvuFQis3Ao6",
  "key14": "59QfdA8HgXJs9p77UpWUEwEB1G7Z62DcissiVfRn7eeHmESuXxKWMHMKrCCGpqoUQgo15o96wkrPu7XLZ2UZdDRg",
  "key15": "5pRBfeNPWburXZuzYFc24e8B5TKk8mXD3ySzicfniQjqyTAp2P5tEXTCrapKQG1Y6rZDofCmRtHrt7gggLeASwHY",
  "key16": "3ATEcBhtwbyqAyJuPAjUswuPwrEnGjdQwQXUVojD3niL4B6gN9eGU352PrNBKsX2QBydjxTE77Y3CkN7xGgkNhMk",
  "key17": "3uRMNLx1iuB7NHVxNrXgyjTVVtRcJHMCEKTFnXJsymzpHxHW2Trrk7ooBqycSAYct4QKZU9WvEjgmo93bGvkmYvU",
  "key18": "EoDiLFtMNn6U1eVuhig8Y5tUM3MbHcQaHwVgqNvEzvosQuWQttR3Qct4X7ps1YithXc9sJxBV8ku3kURgCpiRnS",
  "key19": "4En4Skvv8r4d68JJKfEzMotkr3YTGGf3twyuZXQ7RZBYGgXMENfk75ypWpTj1pne2ftQdihFEsKpA5FofM7pm2Gw",
  "key20": "4pDxxoJG9VGPNxuF96CZAbGs2D4jUvG3dWDjUbh8FoKJwtX2P9hgv2BdKKvYjW6uJqp6LLBXsdaGKcXoN9Qj5M1v",
  "key21": "3fHnZ2J1UYNsyPWoxL5Tg2tJTCbCFHMtx8ppdKRG7RnauBBryDJnuHbSqfQMB3XkGchUG8UYeh3gxjUBv6cyStkT",
  "key22": "ooiAKNv7mMjc47L2XuLh6UHs2rxk1ScBQbCCHBqqYSZL3c9RyHR2yYabz4dzC1DctMPTDbtLVpPYwzEU1rTqcN3",
  "key23": "2sTCNZTJw6mNzxnseMVeFFYm6BABY6eztyZAQUMyC8AC9BuDWMY8DY3PuGdCrEgwAhxz8ceHyaHCJQF6DVaqoSU8",
  "key24": "2miMNPfno7ggBMmeS9Y8i9vdyefGaMei5kb9cHWYbXaVAGEvaWkiyJ8bEa8Qty9XKx1UNtBpPmTGdkPvaCWRyfNP",
  "key25": "66uNqwtddo17raeS2DNHVW9o5km4Us9ztVFnhhgUaGQfKWyBQTRAnniaxVjh7cQ8k4LHE6eTwNE2eKtYBARY5dWE",
  "key26": "TbySTsUyTBnqUCn35T8yEPMQZrG2tyAkhes4ANCSrACBN3WFu5qDwwLAEw429Ey5VbxnapaNrvMDYGVpt8EgbPF",
  "key27": "4cqU3q4Nh1kfrs85c27UEmTHx1sBmRfTRKJSt8EQQUMUGvsLSPZrGSSEqnWUnU9wCy633d7AEUqvHkrNhk7vFARX",
  "key28": "3Nyq4zVRBJKKkyAoyULjQLR2SVEGB1Er8ndEAk1i9RYgvWnHfZzdfvKdeZH9Ayfzfs7iMdqpUucW4oCr3TQAVCJw",
  "key29": "Zjn7QQB2bTPnwkJQQfxnPLA5vadkWe65bHnfe6Tgn5hkWa6yPDAnLYizX4m93CAD7Nm27LSpNhmZ16JPuA4tj6J",
  "key30": "211PNBDC8isRLCsC9PQfv8zjjCC5fSiTvDGMsqrkesXBTJMnR3MztTJ4co18tW6j7DZ2yBzCv4RJsXXoBTXyAwxt",
  "key31": "3gQ8iRU4PjmJ4Lpa1CouiiEXvDgKmYXkF9Y1qe8EvFNRTzKqx1Rg5jB1ESGvgxhA2skSmaahznYREtP4zVhTyWeA",
  "key32": "4NNp8sxeFKD3PBjL4EE2sSZ5rDcEqMAGGHTrjsdDBRQnVRNqESKHfz97pr1NB7Dta6YxHma2tmskVirFuvorxzEP",
  "key33": "4XKyETunaNXqYdN8UBspHBS8xfgx95vnRVWxWgPvZg8SgMdXopteewbXE8TMJec1Q9M2dHH6TV3SnU4arQqkF6uq",
  "key34": "3sPcdSrQ1UkWsP5i9gXnH1HTPT9UXU88YNVAALqtXjRUk5Gy4b5XV6NNoexEkm2vYjYNSaEasNjRRiEThhXjAtAa",
  "key35": "2mg3fJYmSygwQ5rTT2aiwcbvEAJt4oAdv5gbbQSm9xtcWaj8U8w9V5wBYxyqQiy4aF8iEEg38a39nvdjXhFHLvW4",
  "key36": "3YV41DWmsjhPVCiDDp5Fbg2BDLFbH78bS12SesfjXu6L7Yvdr4buD3qusNxxGcd9DbQiekjAuGMrPpHJcdd1ccjB",
  "key37": "5mL98DddNEgUeaKkGjoALMgAyGoZk8kftusVr8zUqdv49X7yyfwn8a7y4qR9MSgdwresw8TcdaLhDLqETRif1AsW",
  "key38": "5ssnuJ4LFkZVruPzziLPE19PhJTSjq3baBPnJuV6tCZ4JoJhGDPWVTv2Tu9RbdgZZU7aAybRXouEC9XpXurzfE6g",
  "key39": "4zNPG6mv1MMop2mtaRoge7F6XpQ2iw79JYP47bC8umcYBRfPaPADSqs34cfFJJYeW3ufmEgJqoJ2p7zkrq52c6z5",
  "key40": "5s4HsrLhoFv7HG4SvyqbKTMD7H2Noce72guG8Wj5dQNyPGpvJWUR5kgA8NhJgRau8K1umKhkA8qgCxUT2whZ5UQV",
  "key41": "4GAU1Srwsm6q4tmtiwMcYa9TuBCuVXup5DnxRXKg4aq4VuRMvvBRUVfzEb1tTctgbqXxCv5ydbVcyqaTuv4DK4rB",
  "key42": "WhvxazsRSZJ9Tmw8R4CcK8WuGbTKSaVg2pJwFgaEXcegmtrdPgtBuEPx6qLmzrDn9JCgvejUB9A4JiWHc64PVhs",
  "key43": "2D9KM8Kt4LxczUA6HdKYTwXAV44ajsamKFWuLBhFAFboNUZL68wuUwPbfE23TcYUVsNxrZNRT3ZzWbuTSySwcmKo",
  "key44": "t7bopLbprnDMV4AxvwuVaSd2ZkPRzCTeUG5Gxx73XNiAJJC2WnGqMb618R1RAHwxjB6Ur7FVk4RhKkQDScScnkp",
  "key45": "Vnvyud36Bh8huvGYdPsYxe9G2DkAgFHCuNAtxWRATLtAuxwAgebufd6gbdmBTYsG2SAdCGqoMt5hcxY13YqGRpe",
  "key46": "f6YM2zQkesZMyyH9WAAVktcmKP1qGAQTX3UNQLc4WchAtp6D2wCvGTediXcRgqWTM2oVxPTrYCAVdmtHzV8ztxT",
  "key47": "atoSTCHyjbpHrF9tNc7k1mweCtytUQSHkb9BaWMDidvCbQBoeXDWPaZucGMJmM46EsehWNgKGG6f1Nw5Hsu1fMd",
  "key48": "36TvtzUE1hvoffQcp2UYcjHndD6jWp1WF1gTTJ8XnDW4ss6szHb1t6L5Zmoo4WznoW2eWhsRKSz4JHWwQnStr7DX"
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
