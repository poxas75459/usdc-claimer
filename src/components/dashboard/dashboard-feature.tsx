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
    "4tckEBsmjQDN9PAwFsWwtLCsi63s5Foe1aDn7wjdPWZtrqBQWcVLjtzoCWreDde5hctX5qJLg4mv2yWfcHqBA3iF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xo2QWR3GskGBjHaKfsDu8Tp1STyNP3TrVrCmjbjuAcizRXtXXnYMPrAkYCEXYL2ckc8u7BkcahneEm9eANnzPFH",
  "key1": "2Qg5tM6f4TkwFQmvrEH3DgB1bD224sPGGpxEQHHEGvQwd1yWdGc3M8s7VKgWXpGtrFSm8nf4ma9P9tt56XTwDGLK",
  "key2": "2kKoRi95jpnJAcQJQYW8KTPvbGgZe99CT4j3AtTT7vPxiwqyRC1gAWE918GZzwEuu78bbDa5KuP7AKmdaHhX7ZHv",
  "key3": "46xkFsQZ5djQxJiNGuPGvzmb31T1PSFxGwQhWL3RrTKfP67AP1gsyhg2Mk2H4Lq552GAarvgqShHqRvUtBdeRuBj",
  "key4": "4dKDmSni7RUtqTYDrn5dG72mDUhNykREUCKYe4LzFsvPeyatecZrm2c56bgdddkAmrcg41VzThc9UP9PVe59ZRrA",
  "key5": "4DjJucUq58nTjsSdUKGpsGoGVXsZdf53XxKDf6NCk56KXCSLSdFr14Cx58HUxrTVcRQCyVJFvB94AYr13vSQ4seF",
  "key6": "2QHbJTzobDVSSDnPLjgAedQMWd4N3EFK1zXRVjVEZWyZHNLxEFHzfmahssbbcA8yhPwPLUtruk12LjmuXidRstG2",
  "key7": "5WNudP8Dwyir2qTpYR428yctwQGnWjbGC4TiAC7e4mNrrCqBUaaUGYHoGinsBoRnnxxS3YTSBq8xs2y35hrhBsDG",
  "key8": "2H4FLLn9HUDaG5PEZpLDVVVynCJsbpSxw3pLybF9vu3it6oYDHNkksgCuXqWe5SuQx6ZVQSDnqZKboA2m3iNnm2r",
  "key9": "3MRM524vsmJEWT95vvCS1qjHmBtjoysXyDLmRCkmV4hMapWe1yPPY6fCHEqhoxCkXptGR7uogMzT4yLtXVMQ3hLx",
  "key10": "4X9Y4KgvyaE28fypthPHJhMLKCmdvBhKMgdQj4pitMuGgvPmqb1QdJ9RLmovKEx32F3x5tF1Tm4ZgV2WqV7H9aEk",
  "key11": "34zL9YBmbzz3Rc2TYjKophEwPrMHCvKjMaFwADep6PoKQ3P1kc8V7wPbPUKQ989S7dk9F6vzMgraW2y9h7df5sjC",
  "key12": "49mVwxXdWSLwGdQ8rVncyihn4H1X69D7qdcD6kxyh1EXNXScMpiWTsodBfhaFfdpTZJmfbALHntgSZGGxftyuAm",
  "key13": "5nhFtZY8iJLvzNks3xCWv7DvUmeYAXxot5SAAoJ1chPN5gKH61as9cEbTJZ6Suzk7BAQzS8xc3pfS4X1Xr2LU6aJ",
  "key14": "4DUxyQeGsPci1R24DvmrDX2YriCkkaHHoEz1YsrAa5SkKRPxtrmhc3zVy7EjgryLi79tTCfhw8ymZj5qKgbb78Hz",
  "key15": "2s35oVgD3HdH4yoCv3pMRcTeKa8RWdR5dh773jWLy8Vqkg6NCNSKZq4Cv2erMSPTbVdW2HkXXupyFA9JLrpNu7Sd",
  "key16": "3HjsHbrsMcf3BNv3189cfMWxTHZu1R5vJSR5g1V2cgfR5nXLZqKhimRdYqvzSxN7SC5Gm2rENrUyKqybj7od6dS1",
  "key17": "5Ze3KCHHcTtggbjDDqxeZcRUmzuZEwR8T5sj3m9Hm72x3qMPGNmoHxwCUmFTqRYPwQph7E7Hd7y6pGAWT6T7Tn3P",
  "key18": "5D1F5r4uFRv9XFCbp3ASJveSt84UicFgsbnSZfuwj9ETvcvU4wHTTHCH4mD8iK1jWw7wHq1xGMumxdqsEYgXnb4B",
  "key19": "3dK4y1KmzSwZmvzB3mjCkQHr6Xd469zb2GfsydLVtRuDhRkoM3aKq2o4tBnqowQUoubrfntkJtnLjeRWeoLaQcwo",
  "key20": "2mPJCvmgRxeBoHZpTAxVKKvfYW8LWuSvacz9NCfTPTWPJs9oGQ1CcN5XWjpnsFcPQp2EU6a5F5GsoPa5k8ci49pE",
  "key21": "5mvTntVMAUDdNm82wmJ5w4BdaNMbWapVLfTasJLs2dPG8JJWvpRSPAZp5r26o7oaZpcFeohVnbi3PBph35eon29Y",
  "key22": "4392UvNpG9ggpaZKyQ4AHXz6UTcH8QYFc8KtC9bqG4DGgtm49gyd8DzpGzDwVH79uyCvZtcm8UxXTA9t1bEMHWhm",
  "key23": "3X1bmqRdtshRC8LXtVCkZmZQ3LuwG7RKuWPxQRFY6rFVAmFBZs2EvkG2G9Ma3PCxjU371CRK8NeGhjQ5gLzVUKEZ",
  "key24": "3epH3fTD9eXmHqTx9VV3fWttCVhXpZwQ62NmWECWAZ4HgdsgeKP124FtLet541RirGM853XxKtzUGokojuo9MbQV",
  "key25": "65MfL5Z28eEbWD26NirccWa1HRCVDpFdeKAgSBS2vfVkSNeUr6X3tLwgFZDTgJCjieeCGPGrnjUgEC9E5P7ygWxR",
  "key26": "5XcqphBBxymvKJbvWyJ2s7aUVFjZeF1GinBLHccnBTNe5xwohSCCWrrUsFSxMQP5ryEjG1Sb7b3u3yMVptetPJvf",
  "key27": "3r1yki4ZZyCYmn78ALjHTWWtNzpmtCouCbk12hxTUazjB6hdcrVYXK9xRgktBpchiT4SB9EnCGr3Cs1LWSeh9i4L",
  "key28": "3CVbw8XzsYAPBAuaNPrX7u4PUybcYC3AWfjb1Quq16F9aZTrXuGM1Po885zWm3DeDYJjZaNrL5YT2LXnpnEaU61J",
  "key29": "3dTHQpd9AStqrVmLd5VAUuaRDvMVD6AWpyQRWpdNhkwB7xvu7vBpR7QHjprBKxn3t22gBw5jHYSwCTBXJM5CBiSN",
  "key30": "3eY4Ue8xfYeKrZqNeCKxWQcQAdkn38u488j3srNy7uRRbKJwTid57xNbG545dkFDzQ3XEZ4aNPTJaGBAUxRATL3g",
  "key31": "3Z1EJUQdN8WfvZa7Ddu2J5M3ayT9oRFDcSrfoBk3yHR1kupw8qpRaz1zwbjYf2TuvsvWWToj3Cos7wCNVHhU78bY",
  "key32": "5mAvkMBaPX7kw62nXaRRzprS1qPXQomUjE1bKyXygZQJBXgzLDmtGe2MJvno6zzzSCoYmus7h5ukaSveAbmQU6tu",
  "key33": "62Yf5BUrNCvZZY7TKGkX3eo9PB7aCuHcHZqzUecvmfE6i6P2zvh3cjVrtP8qMXKLg8BopGKkMBqTLpayXwV9zqv5",
  "key34": "3jTGUAJAwZX8cB6GkyHGAFN8V1EVo1SKktJzK4YdhJ1EWiGimYep9CgzZQPxNL1P7Smf5KVi7vUdzxwajez6YyKZ",
  "key35": "5Jw2RKM4ywP11QeDmPh7SwBkRp4oev7SJtZSSGk8fvDvUMnk5XgqTWStofGRaYCH9USAsgKn8Jf6wnWMiVTPkU4X",
  "key36": "5KqVW79xm95b9GSncfJYasu1mKSjUkFqVLDNSdjWTcVq1LvrJKu7AdjviFMm5ea46petHBtws13TUKzd2pdjPuMN",
  "key37": "3PiF1AikiDBFYDaMPcywycqpKvqZx78rk1yzKtcR7WpmndNQ5gCfsRz8ZA1mCtK6R6ELJEABavCKYCyYGkFPxPvS",
  "key38": "5orYd7SH5p94xE9pyd6tvkcsnxB6wXXUxQ1YSVu65VCP4i8o41895rY5VnYLSyo5Vmwfh6isNdPTxfRagmGohKpR",
  "key39": "2MYeBcSMHisKeUgHjS1Y1RFFUpp4Kwrms1A6SopsPx8SWUzJWLocMjZkQ1Teii85QfhsXbuyD1JWHh9daZovjiYq",
  "key40": "3j1ZEwtiE2ch1MgmVQ7F472SKM23xWNU7sGFmQwzn7pF35rrGgveDTbHBd3yBUqx4gtRLMjGEwzTMTAmzxdqcvMR",
  "key41": "h3ZfVN7DT8kuTdrGHKkz7fXWmoA445C7rrT6q5PibbszFktw8aCU97WjrSH3nuLpZcXwDhDJma5GEkfatFeKn2G",
  "key42": "59J4ZDX7debL289aTHJQKc979UUSrZRnCgnG6F2tA7YzDo6k8WnNiYr1uv2jReUwGd7UDFY2ukWZe4V3M6edps9B",
  "key43": "2c1bRG8fbQGbRUhAeAtyVyGXCZPPYRYiwf93SS7rhCxVyXMkXw6Pw7qbRehJB3MaPkNH7XUgqQBN4xGpnaKmN82g",
  "key44": "2s6SvXV3hJ5BiwrBM667neZ5KfyPTVhifCD7dkS2GaMSQ1a4LZkKbjUfmCAa3yGVaqj1ngSMLRNbkTHcuxwTsYRe"
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
