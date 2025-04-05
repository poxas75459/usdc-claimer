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
    "Ao8y9VfViuVZhW6xq5PbTY3wmKD7cT3LjDWGF4BhTeKwPtb9icsegW1cERUy5Dy2eUr4VZboH3jvyxP6qqcXqgA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6723fVftUHY7FhZABCgaaWUuXTybyhW1F8WHKsczNWDP7KJaAAVbAAEZFpMadjkRXQPzyQf2bfmorDY1tCZjXkRm",
  "key1": "4zGa138zHaQ1p6YfXU1GWM9cqrQHLc9zjjNxZsCXVBwBb525iPZGSrVFNj824kzMgrRwabzfkX1uZH789nQ3Q6mY",
  "key2": "3EnNypMhjkdJbg5rz3eFkLAr63gFFLLvUZhJ38ahrQJwdpQrxoLnpp8YXGoiK6iWHSQ65rLxDhnj6cKjCi7u5kHt",
  "key3": "4K5LZ83643pLBBsP8r9SeaCUxbsUT7pKnYsX55WCUiAKJZdyYuNmXxkqA9d5LSK6rxhUoSKtn3SxwF13jYHAx5M8",
  "key4": "3z991Gb1oUpMM4pvABnkCAX3NUp6zcC7twJcqEPdd8TFjTPzYoTU3LwRVku7hj3UDoPeyK3HjTfwTwpNP8maDiLT",
  "key5": "5D1KtyzNuy32wLbNGjZG8gYRWWcQ91nguKBzPZCQvDBMYx65BdgA2m3habZQTbc7RfojewHc8WowzSAGrLzkrChc",
  "key6": "2fAWduB1MSoAXXArxz5UUbNwoZDFoF25zPGRwdTGUVE1azbNVPtvaou1nHzkW2zTCxMqPw2yqGK9LWurDsHKJJe",
  "key7": "58psEGCFStehLNDvth3LHZ79xnMGt2jprRDdVHNqp8YkbVS78Cipe13CYGsgEVrKE4PTq4xCLvPQGY5hLwgGqvmM",
  "key8": "4Ljq6bGK6RHJcHnq6RAxMuKBHTpvXkLPyjK2cEd975PjSwWM1sFNTC2zyjMD9Foo5cLpLYc8wfmVssw6HyDBw9LE",
  "key9": "2jBHc2EXAm8Ppn4KwbwSTtJYpsgZ6jjBVF3YRFsgfVuM3zWx6sr8giQnk2LN7Q4VqvUmaG4pCSY6dfxHycwgJgt9",
  "key10": "3D7aRQsV1AqwQaW5CTSeYigdb2B3NUB6cUVbS2H7i1vJa647w9SZ8SU5MWBfDveNKrnMFY6zoE4LGH5g5UVCzJRP",
  "key11": "UGopZs8ja16RKYroCTvSApmRevkmByU4nSnHzr8yKBgN3jHJSSqJSLavXkVm5WSzEHLWASWKnSDNhUGESExPSkE",
  "key12": "4itpTpFW9sgpx4GikpoQV4XcPNXqndhBRuMn54TaXSdSdmAfxEnvg7XATvVP6H5DYBd5C4gqcwWcG3p2fD61vK2X",
  "key13": "5xCP4oEUrFiRv1ccuH5DhSBnVJSi4qA37jVod99wTHXeXms85VCAuEKjKS8eUCyeNrjTUfhi5N8ugqxVqnobaJyo",
  "key14": "5Md33GPtX36tSpjjed142MYkgZ57rY3Gzpkdb3p8TGP4DLUSQNdbFzf3ufJQKXZJ8EkYzYS6t8mqvvXnxBgWWGig",
  "key15": "3JLwaY9BZA9h738G45tuH8Ef5rtPpeoFXgy1NBosSkQG6cgvSFwiGMF3b93xqPK6CwFaYUXJrUnQVp3jgdaRcizY",
  "key16": "3g9VK3gTAE85PmvRognKdbCifTJGhENcEqgWJPHNakF4Ewtrj5hnj77gKqBQGvJHNafSxsW4skZiUegbetBfTFJQ",
  "key17": "2fodSTxcr1kxabsUcAomb4VWciGfBZxE9P8xLWxo9EGbkPVuUK65AzpJutntU8XBfRo8kgGMdg3R6PTFVhpLYYQm",
  "key18": "WWb5zyCXpfbFjh5hWpEv9sBdYjAmMC9iWv1YjWYG9iYFjFUXeqmUnLyVBD5P1XEeL5EkD5v4TkFoZZZMa8H9ekA",
  "key19": "2HQFgFazrvQqvQCcpM2vT9yda6t4xD9oRtGeCGxedkFC1Z72yikWyxXnmARdZfuWRxjUojmUrDaWKZeE2Aa24fXP",
  "key20": "vQ7aTsrng9PHX5CL6J5wBJm1bD8GL6dGZSocR4WbfDyordZbKQ6acPePQFPkCCe9iNWLk85sssucVKZHW3VhBFN",
  "key21": "3zJqTYvR2YkhKwPjHi6wifvbyWrVFNivagquvrF32hbeCvAGWsQawqjM9Aw8ygeuvPCpwpHbxiNotN46X4JkdD4",
  "key22": "59gGxd83JL93AMtE2JsbEa46gghtCkh9JonuhNjBr4f1x6R7vik5HVeYRMmNU8yugQ8vCFxsYqb2gbyfBbFHf5uk",
  "key23": "7Fp3z5dkeTfmFkhPAokc8ZJCcJQVrvZoK7k4aUfFLoSkCDXtHsxJ3iy6v1WzQiegP7TyFcKUh81R1jj6gx5ao1k",
  "key24": "3H9tfsoPvz4QnvWMNAbKPovnJas9qAQS6s5hPQVjwKYF4JxMZ4HvwbTxchYkUhJXJd7HHpfN318RLVsSAmjzfoEs",
  "key25": "Pzf4LcgLo8qM2sTk4kHUFLDFQkQ7jLRJk7f21bZwjvCbR51sqA9Jb23bTydfGaroSWBXSPZrWPRNmgMc5pt5ed7",
  "key26": "67Y9XhXY7UecLYmJfH3eUSGoSf84SjS8tXyftSm5i2F2qu7LQkNqEmxewufRDx7g51vvsQKSa8ZremuFQ7c4Jwhs",
  "key27": "fFjF1dBspmEtbVLcAYwWR1auuh6VTywhp63XZdFXJqkMdrQ1sELT44LiBqvLX4N9vwBmYQV1M4cmosyTwqHR2NX",
  "key28": "3bKHrJaWX4rxPqKLfQXPEitKVqKHxgBqTSHh9XWdirUL4BmhDdNag3JgJK2attaMUF6sWPTHoUqhU4y28Kh2updy",
  "key29": "5Z6u3is1T3gvqoKgBcRJowFqYFoNm1D3ySF7roPqoFEa4KFWEzNGXzGfogP2YVqBJ76tDakei2XCJwejkmKxzxSc",
  "key30": "2okroKY8UBY7dwuuDg1L22dRDnkY1btytJm7zuLo7on2qPgJmvk3sSXkoCfeWWicgEHjiN8LrvVGAomBqicdzTkr",
  "key31": "5KEssatxw69v42f2EKJiiPbvkT13vQByVy8ANFrbu9qxRa5ZWZkrdUxV4sLXVFUnCcLDauDHeccUCB5d8vCuTFhd",
  "key32": "3oBzfSwCEVT4BYHys5hgQkb2kaJR41qXJCYCj8EaSS845EQkTYhsAkp3y9uERczCnrK8NbthyChB8q7E8TwBbBgt",
  "key33": "4byK8cCQ1L58hhyEhBQWC9Nws21aid4m5mTtvoBWm5k3EvwdtPSuHW17SaqJnMGi1sEz8xi8jXgJJrb9L8wJzto",
  "key34": "5s8rxaXvFopaAjVg3Bba5N3AuTg12JTdYYCdxLLQKCHi1fQmpNxm3R35HTJ7s31MJhFsvhC4xF5LvUnRc8HL6Cbf",
  "key35": "31mDwnyriiPLytZpKWs7Ugr8QakSnHPotPQMKJJXDtNAw6dtwCa7nH2eo8Y1rejJFMjPxdybNLVvghxfr28QVgWX",
  "key36": "4AdnYv4Ngd3mKc9kuBJtVkVUxVnUsuXFinsZ7NG86XvJNV3yinZrevFdaqyvv1c3yWjavqtRxWismNJtqUMxNZQM",
  "key37": "5CzsrECEYUJFcsdwfyNehg6LnhrMd56vxzKNs9Z3t5N7gtbAthMz3gvdrQsHhvghKuEwAhQfHWfyU8Firv22n3pM",
  "key38": "2KfaL7aHNTtYWxiNCbiumcewBaVJwmegdBwq8DLgumfPsRh1E8o79ZJgD7EJNtUBpPvDTPy3hk61Ri46bewAcLy9",
  "key39": "5Xrh8R6tzYXBeqErzEXG61eb4EGfAtuWfStfadRNcUD5sq2dR71RAGN8Kjc9J7WLxBfBYsYACZYcTBeqkPrehtQb",
  "key40": "5nTr1ZhkpaunKdabygVNxCFJ55n2zdJ5k3F891JnRUkQMWFAsTMk3SthGWQKKiLEfyniTadsxuxooW2MwJZp7NCc"
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
