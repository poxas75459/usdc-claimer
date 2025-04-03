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
    "5CEJLA7i1WULMYw5qakV34dUxNWkg4bUFnMZ5fKsfqHMydQsB3WUXdqVhxRWN6DGfrTYaUCScz1vjUgXJDFbPBgF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5imzFHvkf2GeZkTRk5mrDoUSZ1HQYYaNCayfHb5cAiXWG9CpdJeYDmDmcK4uY8Rfgfde4hyvVJrxJVxbe16qY9U9",
  "key1": "3Wv8cLzpZ9fjfg4RbjYsgHj9do3EtiUuNebFV8dztFhA3VjtmtGht2kFtXczxNrsZDSQJeMsvpPzAenwhDh9HeMw",
  "key2": "2QrGkNeziLk4yQgDwmFGK2caMktG4mi1u1KQwAKAXDyMAfTGTjrgpGhQDMCENB4cL8EjB3SvtRqrAUsEcFhepSyw",
  "key3": "rN1Em3sKUqH11VAGUPL3XVQ1aubcNCjTBb89u2ndBdRe42RehZKMvyRQY5mkwKhDDXNRAnmw7Xs6AY2MApXYvqQ",
  "key4": "2v2R7kNmYHnvAnrkzsfoJayMcBUQtYDcqR3k8nxRJQyrhifFh2hTrHTKKLMFF7E4jwnMoaKbtsffL9bQk6zYz46g",
  "key5": "4mwwmViY8p5bhqhv5GDZ9EYgjJjQ1qk9S9szLGYZJtzFX4LmtjyDHF4pg8Hx6aUHULn2DQqyvyT6d6J9fZvdJavM",
  "key6": "5TfB3FZPgMrbBcs5Kreb6moZKJF189h7ekKUNBuTJ7G8MrD8kkzant8yhpg1GzDpEE3CVH8m5wGKTePQbgTZr3gr",
  "key7": "3WtjVQ7VYLn4EmGJpN9MkAFU8fjEtNXLFdFm5q4AWH9xLgx4xGJPN7U9pF3pHschqKEkKWYvPXQD4ZRcQseoWUki",
  "key8": "3fVAJ6KyTCw3pzdk1pyoEc5CFcZPwUN8DJ7tTBNWWLzvmJXMtBMxuQwBdMQVH2w9xfbDPqvCDMpQfTuk1aofw7Rt",
  "key9": "2sr8BnnJKGH91b1oXLqDMzFbZkgpNWorB2FbmurDGW1S9ab4GAe9ZLhYD3uVYrULbVfJZ341xvr2nyvjD5zzKrLH",
  "key10": "56RsQ3hMFwSWrsE1XCGJH8VAoHjyPyqDdKyoq4pT1LsqEXLdiS7YAgBnQAnn8FhmdSgY3kFqxkNTiC9Fx5S7HDim",
  "key11": "4Pu9PBqG2vUbwJPt2nAuiiKBuCqbJh8ELG1GBLZksMqUSRge3afnkjtDkSpWADkAHcNT5UshkdPWyYr8XEmhnvdk",
  "key12": "tZYCwNdGu9YSojHqn2Ntem8X71vESoXvBA7wwVAS8eZsFZQpi7aLStL12GSkiVyAYZ7TJf9qC4ViDMZKGmnLq7y",
  "key13": "5n3BexrMdLiCP81zpbbBYZycJrJgCdmB7CaJPu8LTcX5v3Ta9BH3Nt3vKTVXVSiq9uf7RET29j2Aw8tJbdiERDC",
  "key14": "59eq9FU94PKjAe7q9NPYHnv1RJDzm2Lrzx3YNjsgWBcLXCnWtLPxiy5mYsmUBShrdfPygQ3UY7D7W4HaQpGJri5X",
  "key15": "269apnrUAYPPYDg3mLHK5yGAKwHMC1AsKjpZiC8r6diJ2jPkcGRuXwWM4PThyy3qUB67kFaXfPCzBpUfedcbZXCG",
  "key16": "4BS1F3wPSVNJGJrzdGTwVb6HpN3NiemeB3fq4ZKrma9sbB8jnyPfyT4rRZBifgMkUHAnitcrkstsopdajA8fbLd4",
  "key17": "5MY9JtkerdqMUYF7yfUQRfAqhXZP7cDcac41wh8eb2LRuY5R3kqBQbivdyehkAnv2ASPGyzoAMMUPsJf5cBaDrck",
  "key18": "5uphV7SXr3TLsBT62MWUUAeWSuL3bMjbkti9Bv81dJHTGi25uFHqT3E5hJyFpkAyNbRrMTt1xp8sCh2rkt211JUT",
  "key19": "5FVmcTMmAbXHvxb9GY7T7ivzd68fF519pSrX2F6D2QsHZLbWpVje7csC8QekyGnn8E1r5gcbERFXx6cUwgnNSe84",
  "key20": "3WaogWFu16sn4hADLJpFfEZuRiLpzwQwu8U2sD1qshZ9F3H8t1uSe5cNeB2rHMomW3AzSDamraPQmBnijZ5hNqzV",
  "key21": "KAqkPEnfciESGJF6AGp47sXB5rCeaBJXXtYGJZmfAB3v3eMhuYPxdNLQcnhTh5jdiq3Z7oc1sR3DhLKk94ibetn",
  "key22": "jZbHEsXsSK72vxhfoqjLrAB56FnoSPoU7cXBQHxDh4WeBNBp4yxoyjdiadf1VETzzGVPNcEfuqNTPxfKvtN7HQf",
  "key23": "2UrM8Axyuy6u7nYeFGH9rDPe31gBgrQoZty87niZcfi8Y7kUFUp8zxZ8Z12vfHbQqD75ueoPVkYuv8d6mAeJEcKW",
  "key24": "3LkpwYVMxLYie6cCeSG37suPqy34A8azo4UVKEzw7m6amzxdFJc2YMS1socqqHGV2ZYiMVH4HTHZDbRoCfC8M8PR",
  "key25": "4aBYZ9E91LrMbvYr2eDer6gGrFdZ1EQ4QbKnGUkvrttV6ZuqbSCYhPmuELnKpnzaz49wyqN87EUprG8VZK5w9eka",
  "key26": "519SoqdW49RrJGjZnwB9bfDQ13s8URw5zrNDq6sKqUDWXMU6Q3aTGF17gY4ufo9XjxbgeXszRZvUvqr1FWArnrJi",
  "key27": "5hrLtbYNYcKj1hUS6T4HZLpBmhy7hSBHmW3uLbuzvtUkMXpdSkNAHQqAhRi6HjHWCmGah4JYddzLws53ZnWxNG7f",
  "key28": "bYqnwNJdhLZdWEmfQ78SQPXMyre15N7tHRk5rmW8XkRpLcFZGXxc1v9SAerfpU1giicm164qPdbGSYYHkeyKWq7",
  "key29": "3dZ8NFEmLLYAk5rzJ58Nb1Lu4zkyV4RJ67d5Bt2K8GUHgBiRbfsUtVu6ZbCjcMotJTo7rwctcoLiup1Ytfdin8ht",
  "key30": "2sjvtRQZTyk529si8CwPjDB6dsQsv3KS3wAH45VP1VhTpntZb77JFPCSnXVayXu1YreEX7fyW9PN8VanTNqQ24cU",
  "key31": "axV7FbCc3dq8Q6irTCcCm8NoVumjVzxUX7zdTqAheMxnCAySydVJKiBqsa18cnbTy9Yi98jvYoj13R4kVpc1zXk",
  "key32": "48wZe5dVPWEXPHgNSQ245NUKvwC46SC8cL5bb1gY6en2njHyMUwhNQ2uj8q1CozXSiUNzSeZBVCjqMrF6tz8FPwo",
  "key33": "235LzyKgFE9RwiJLK2HRBEYoVF6TEXVryXgQUBUkLLb581miyXYekLAJrjWbHPMuKP8YwddiE6fwVwxYCxaSnqW1",
  "key34": "PnthaczGQoensQ5Yrfk85YHmUQG2tWH1mh49VJeZAb7XTXZtcVVwEcduZ5PAGKWfRZPquqy2WetokNyMsFHxJq8",
  "key35": "4w5FYt8Q6TPV7yyKmuusU7HQ3aj24xtkjg1EcRF2eafruCk4F6JGW5oBvg4Fu4pqd1dj9PGEdHEQBA6xmrpYY9AH",
  "key36": "61ukoG7LXseCmmimr8DzhPETSQ8Rf3svb9SrGQ8FJB93op6nNtdGebPQqnKQQjg6mLJnB5ZgoGypD5SHF46e7adq",
  "key37": "4aK1kKEcCj5PGf9Ji9bKA1rugR1VA87vLs5qJAnRKzHfgUUCRjK5GZzuBcnZRo1n2rPnsxYFtChVPzC52H4QbiWB",
  "key38": "5Y353kpuXdE4RwcU4JJSEFpptx1E9fKYGL2QbjFxbKvnaS5KBgqUD82X8mKrtoZpAxRBnixKAuCRCXjZQCxjCuyQ",
  "key39": "2sFJmH9JwStwuHz5fpEzjGZPhgPSFgyiMvqGHcuAG9BPSQtsDjhvJn4Sxx3FY4qZkPPF4aW2m2Ab4s5metCZ93H3"
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
