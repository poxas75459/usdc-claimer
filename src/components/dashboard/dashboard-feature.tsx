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
    "51RCXNb5NSVGijeZrHeJQ9LBkJ1TdYfBRMJ8mxB2a8ea8shmShs4cH7q8esQ7gxCVa4KUya7uH2HAiDSDqkR2tna"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mKR25gvJAUnGzCggrPpevV35oPGHyDQCBDQAW4DGrZuNEKD9E2aQdS4CusMVsEppgjod9PygM36Z1YqQvkKu12m",
  "key1": "9M9uXH2dR1MzY78KgUs4a5hjUG9hTJUZngU8KouAuXKurgYSmyQEeWpdasb9iHzMgDypJfTNiyDL71smnL5xPgY",
  "key2": "3PCPasDSU6ou5PC5TNEk1166D4gxH7eg1VVqh315VRQcyTciQrmxFG9Mc8kSMoifHWMGpTKDgZFkiWzcseTuZUT2",
  "key3": "2NJak4gLUDZMBt2QpFdUz3QLMPCWdbh52PFzPWqdkbcesLXNkDr3MDybGWpqbz2fxLgx4QAbgH7jVh64BqA4byRN",
  "key4": "5efBuszVGNKq6sZH27A4xPE1m62KLB124QpCg5N85s5T8wx3yLcCANenmHbnr3XxTtwJiecFUxKDMapSHzweZQrt",
  "key5": "LdRwEeDw97is88PLX5cCC7fvjsvLKpGin3JUVxpB9ae8s94TtiP5GbJKzNPouAnYdsdMpuwb7GKrMvSLdc5yzBr",
  "key6": "3S44UuY3FNPGYJ7gBWLyWGs3jjXfzRE4AAyZXP2EEp2yV2yEAtb2e2SGaCNA5vjZjnGW4fJGrHhxkThK5NVA7gfG",
  "key7": "3YSPxYvPXWwMuoFpfxNwtsA4G7qGM4p1D2BH6Etk3zNy34JtepUwW296zJUNQm8ezTUjitiW8QCmmb9m6RgxqZXj",
  "key8": "2yYrLH8356RPvqDsVZR7sMR3Qu2dVVK784FnUaf9K9LcMQFgFoQnkpPsjgEzq62xBShjgSMxNsG84MzJQGQ9DDdL",
  "key9": "4TSx6rVRjhsUZGk2FBp8jMqR7zntorfvN91S1VWh6BPeT9zKjih3JDWYA47ttbrEBq6gamsAXrMErbqD9tsH1hw6",
  "key10": "626tKd8vLoLhHY4T8Zj8P1yJpv66UgWrgCuEVPPUJ859L7byeJ6LN4rPrijMF7Ew8zXpLXQZz5hEVtU22JJ4GJHh",
  "key11": "3qoumjPBWVjhYjfYNHWbNyKKJYQUgCNicvVeW6Qpy9hjBD5kvyUoSzF2H8zaLLzrnQagUwVKHp3QFzZ91ibxiQSq",
  "key12": "5NzN8KEMn3coJWXcZq2izgTJfXxnBpMt5DCMvbsDsRfHfVAw9k4LPRK6948Grz6g2U1C3JrMZXChyH5iaXfoEq2t",
  "key13": "259eRtcShYZ7fF1TUSkzgsZrVircp2mj9bkFMJ9d6fmPsjC1Pt35Jw6i7Z8dhs6jJKUAsR19FA38YZccJronR1a5",
  "key14": "56Z7UnfacMjN6MZRKh3WMCeodk2AxruDPweYGi8VmHKzex8Zi5wJFnoCiuRM74Wyi1RHvbNVKQzkbTiwNAndP4UQ",
  "key15": "4qBZvW4EbkM89uauE3ojokfxm17cKcBEv5TFARMPC5dQKoCQp3Tg1zzZkW14ULp4Yc6NBC7x4NQCBGYsr65X7jEm",
  "key16": "2QFvzpxecHcC6kZXczz8AWhMsiiZMwefEtwMRWwBiA6TM8TXDajEFSvpd68hP84HTDcmPFvGGzMZpybZh3df5mQM",
  "key17": "5VzDxAbhK6Bzg67WPsQYN5Gb9mpPkHtDv2nSix2TVYrQ6q7vGLg6oRXBFRo9osSiYzSJZBrTfZXRnmFwNHoqxpFo",
  "key18": "2CnH4jo4g58gTyJQhVLUk1upKEtzDoA3eisZwuxW1FxJTD9E3gn5Dop7bdG8dZBN4YLJFTrSJpgHQ4BURK9veWnE",
  "key19": "39cX9pzDmo6jxE8pppYWrtLV2CmD8wjBnYX2iGejf7ND52pKZXHtvZiB1jc1oLJbZaa4V8rMWPYvRb9ySMVxc1xJ",
  "key20": "2kMn4qQPvsG8zsxmA5rWbsAsxcDB1YHjrwWyejuNCcAknmt9CdK4JqwP12h2xxtQKT9Qent9AAwTTMkB3ioGHAZF",
  "key21": "FqW94VtafyK4ssrRdZZ91yxZgqcjSymgd4sFdGSVdBRcR6y56GedjgL5nANqPeWLPmJx8mfP7YotWkzwTqwjwtD",
  "key22": "3RCNLs7qqDJHh2xZvUXpa3ATKRVbuQ2yp8y8zYpxXc3nxGJ58vxNAdX2XLsW1C6eDDhRQxodvKUsspqf8A1nLrUx",
  "key23": "4DnAMxVf7DZr9nrgLgVsFRpHqWN4FKnJrFeCzaNar7cJksE8SJ5JLHhU8uvbGQHBBZrGwBmQvgEfH7fD3hW5gctA",
  "key24": "2xux1KmewTrXSBsUjG7JyYqR7tPeZgvTw86m3uTX4vdZNUd1biMSe19hmoRrCMZo6dMy337pgsTUymHH1L8Bt2JD",
  "key25": "BXbXhLuNx7kPMP5HNKdNWgxCKh696ZimbLHQ7eav2MrqCxy8RzAD3gFnp2TsMsijh6tX4omMgjcqQTcPG8QVwcJ",
  "key26": "JyqxFc27tEYG1pdZnz5z3sxp8ihPxFBdnPANLtoPPuCe6fNaqJEohWVkbfxyRWryddVtd9NDAzKK2oCzmYi4t6d",
  "key27": "Xevk9wUj1RwufQq5pSoVMGDVTnMg8bvauSYzd8vYZ16CQpEVkPB5ctCzkfzSYW2mcSZW1wpPKxEFPrqu7JZZiG1",
  "key28": "3HA8f3bgRfyX2kzhG5iok98eT4tbysKzJetJv8uwXyLPtiYSNh8NJEfZmpYB6TCupXcsEznMoxfegtYyuc9b2LEd",
  "key29": "fYf5JzpmaBeCuCWcC2U3eHXPNYPeenKstERJMtE2XtyxHa7aSrN7A9JN6txyZwY9GbpUx9Cy9ZTAGFHK94BQyDY",
  "key30": "5zTYF6fpQsxRtkLXtwDvVrxxeRP1ciygrW6jUx6e8RL6NGU8uwhz1gKcsGWLmDHsL2PUT8tDSubbesAZ5ZNwkAmj",
  "key31": "ehLnhqrfjN1aFYLPsE7jkP7kjfKa4v9SpKyoq5b7boxHDnCbQZ3L7C4cMGyxcziMqtvfzheJWD15A8YWKfYBQci",
  "key32": "4KVsXv1AfVxotBCMB7bDatY3Huzbkpb7VeFwph2KqiA9AZyRYUGaCKsBK968CG7fidScbJ5SwZ7kKHw2t5A7RGjx",
  "key33": "2L1oWxojY7cq4WmCVWevVLZcUuKEJo1shfXpwd7AEsu7G1vBfz6AZHvjMCVjFvFxRpnJAxDmq3YWtR8YQNQpXsG4",
  "key34": "48TtZVVyqQ6BXBB63rCuNK9MeooEJzzzd592TyqYnwNoJb5XLnpnph2faWNWKW11YaPFcLK3w8UchQ57b5aYePtz",
  "key35": "4KtzSasFhYcmVtQm9qDfx1fXxLuRKqPb5HWXcfecWUDZSG6LDbwgXLSgNvQgcQpQziZRKGNcNXotFnwXChjXAojx",
  "key36": "4SNucCvHbxprmoxHAnt5Ss2mF8i18A9rpaQ6Eu6tSd33xD9snaQHFETZoSmzXAKTbucmGh4ehUtF4Ej1y5F9P4TM",
  "key37": "61nUqQCHbD1vphKjx3EpWnrXUa4L8RrfCTvpsLbB5AbnYQqYLJwkqMtZdx9pXYBU1vG1HnNkuLwYodvRdttzVkK3",
  "key38": "5CCKSxfXAVnsxtEAN8aQdkh8Qm8JLyV7g7P4mSPsptqzJ3pmNKK5MzeMSVw9A5jzHV5U3C4YE2HeCLm3u8nbeyDq",
  "key39": "vLqWPfEa5tCZgNrXvzsEgV6hxGEspy4R4nGqu9jmyRJ71YFQ3umoVzSTt2MTparPqBdkGMUpUQNxPyQ3WB7YhdN",
  "key40": "3grZvUCF2AaEirufK9BrqJwpVLp4NtdjZtw4m9ZAqhJ5KRhh2biebPgQ3ZGY9sBvSD2Xe48mNDJUCHTF8X8r7BUT",
  "key41": "2PJio2iaMpaVpW2NUQ4yfjvKj6fziRZdi2WvS8f42kq3QfeeVpzXomTPGCoLR1KsnxYjbRy26wQJhKUeExDvnZet",
  "key42": "AQsUk8HwT8EXrx3ZGMvTXNxwBQZxJFX2Y5GwTsYPf74qLMRD8TRc2TaXZ3p4A2pCm2Wix98dDv1iLbQiSGE9GrL",
  "key43": "2pUx4HGc2g3hcTZWTKCc2m4thQCLUUUzWsMcsQeSANiY1DeTZdZos4J7Vc4ZumYXVvjKNW3FKgAfFu2sFRRYw7jH"
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
