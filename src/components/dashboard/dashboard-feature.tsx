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
    "2vU8UM5wQ5sHpkxg5NvaDMYe9dr5CdrhB1A3qaUPq6rAetZ4zzKQNEsthJ3VrD4N5FgsuvZRzRMwUsi8pMMZGi1P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5V2mWg24CCL4YLJKsgf6TpAdNyJwZvnqGWSUJqbXWgkYbinbT14T6V8BrfHEZAdwCKVCiPn4XsWZuij3G8Kdfgs5",
  "key1": "2wHKGdCyQEcT2NR2yKjxhs6CMXVEgjKoceczpAGaPmGkHeGorDEioVopMruxSvfasBNeayVSz3DfsvSnBgCLCQy1",
  "key2": "4KfrkbJBLxFsbfB6AKg5BxJhtf1uB7Ja8gj96UtUTfcxmmx9TF4HPJMrnWUgN2a2qT2vqgukYbWCMzKKhTQYFD5T",
  "key3": "2JbVqWhwv2nBxzUpHUWJUuNFVvLyQ86kEzEBoaphMtyJQeEk9coEbkwomhkEiqNd6E9cjePguEbAFGKcCApEQQ7C",
  "key4": "3xKEsie97cUFwG8hqwwrnzZNomUXTFJoRpyP3AJEZpbMhz2G2oRwreFqbNd7WgCkXH6NomMjj2vmUfihf2rAm4su",
  "key5": "4U1dBJ5rv1YD7sRLNBpvnWi2SNDbmxF3WmEwjeQVV95FHoiGtssMeQ4cK1dm8RHtkAqPCmR5ixgz629V4i28Liux",
  "key6": "cDzRXyGcmS3P2pUxGEEsMqtAsaNpfEjW7nN7BbUgQ7uFT94KTasQvx8b36yG5QZe81Zd68nayDMjXJFNq7Hnp88",
  "key7": "3boo7u8M4tii3a4ysGMck3SmuTYpqFydoBwerAhpkGeT7nYgSFKq1Joo5TmDpKLnjGX8XxH9AueVBg1uapJRrMp6",
  "key8": "4A1db3ZeTZechc177BAasLPiB3kc9NfXLyru65J5J1WH4mbEnwHo9khGdSA3tHwqEziMUKy6nHZ8MszqpzsfBgmZ",
  "key9": "3UpuCvcrvHSjyZWRLo1QeFa3GXEafYN7ZVxdq7ZuDU7wK9wNqF3dBM2vZnzaau7t8bFDefCnTWzC8zyW4VRc7RBr",
  "key10": "3LoFUi4o5dJCc9inZ7BeHeJFJ7198cHHDhwSeLSDWXZY24FtyKwSZ12MPPQFWVPEg9HESvuNWKNcATLNgFboathh",
  "key11": "59nsQGCJrVvFwkLe3nCz1vmdTvte7JCKkiCsBEVaHHF4hWmmBuQMgu9UXaDuTotAuZofhn12w67ougQcjoAUc77U",
  "key12": "4LSqDXECnpQJkXaEAXKyF7asE97HMjr9EQxZuiFcnSr9xbTh1PaXWN7CfF2GwX2xVZGN2TasVB1wamQ8PDQeYiS6",
  "key13": "4RdaEMbr4i8pmsfSAfZJBm79uCNZCkQ83xGxrmo74FWUqqVfW3TcRyxjwmboKWLVnykkKFXWkpU2iK6fNtT9V3wW",
  "key14": "2inyne3fAb4nzQh9bm1eQ81etmwdDdBcrQqXJqYaVwBDik2reYBFzdyHf7fr1aA4iBKtgvP71tL7FkoYz1Q3GDzs",
  "key15": "5frVLWbg7PWftgCmXFmzvg3wp7qFhcyLwkxzLdAR5tx5ZiA5q1pfCk3HZbwTjJoY9P4BAA6VW7pjTD9Ec1fLHufK",
  "key16": "4ZCKK4EcnnEiWXkQUuRnH2GbFEsrUjJqTwveWHuxDnz86kRUm3XNYbaZxJ2aGAe62PCyEQmYEHHPw2fiD8kZqWmJ",
  "key17": "621qFbC98MYUhJcwDYwHBBqnoHnYF4WjjDh3iZBVUaT8dDCdpgV4mbYBzvLZJR8m1sCY9kRGEKF41ct1L8F443XN",
  "key18": "29VHbkrggX6U7NahLhLmHPiJX9vKtghiKRJq7xpYeorDVHENFvVug7ayhi4hnj7EAyW2x7JAcbHV98iXr5d5f6Zo",
  "key19": "4Q1AbQ1SLW8gJou5Tsgxgteez3jszqV3MSTwxwJ9KQsLiKQ5tHzMFrtiXSbMbaDLXqtYthEDrFrQui5HZGawM4ra",
  "key20": "KKKTuGYCmHJ1kirPA6FeGJd4tuAJwotsQo95dPziusiy3deq2LXf9Pz3FtCVRPLqPtKpQ3G9Vd5FECqMufCT9Kz",
  "key21": "4Z8Vgkd8ijW99KH5fY6hJCq5nGedqrWj74brFrXH8arwBcovtMCUPpd1n9U2eEX55fczQt2efuDbC9CS5TPm15vf",
  "key22": "3oeWVBGWBC1KFyJjSaRZkbgQjjsXMmGCp765GczJ2JQ9pHMyiFWJwU9iRpJbSomMZ1MyuqPsZhzuNdPftXJFF9XG",
  "key23": "hWNJFJSsUD85CYMkroMLQyWoQTnWXyNhD5fSjAfaCSE9HFHpQd77ssN52pE3kUiesWbw7ka5EXrnU4uPUmd7k8B",
  "key24": "5VU1xh3i9pTRz1iaCwyhkVGyJ182JMGsSxHBLFmmprQbA5DKD63XwYfzBvmPVnsu7WQjE5Mtni5JXrKZCSJyxxfA",
  "key25": "E8saHiwTQ9dPuUh22CDzPrG6E7JhKn3bAiV97nC4a5u1FtfS4ubGdQEpK9CnkGkgZz6GoxKN8oH6hFNEQtvQCDv",
  "key26": "2UNKZDZLAg3fh6w9rxDyLJWeWUB7m2ZgoVduzQvbJWbMMwJ3TBs6rRs2PxFwfLjFjUhQv1a77N2FXEequt7UPs85",
  "key27": "et6P24gXScDRmYnvDns5VWQQ36Tkyc6g8DEmGdKESSSGf31peDJxPVYSG3P86qdNNZzWLYpWwbzPC7Kzcc14Fps",
  "key28": "4g35pGcdAewXtVUDbGCHydj8vXhHf5vCyUdmyBKB73bNin4etvuFpw4c2JwPBiFe14nNmUugzYnMUS43C3pyEfRR",
  "key29": "3jDXE6nHTYCj5BLXCguaB7CCrSJYXdHkqrDREhhK7biMV8GtwhQ7yueMtT8G8p7syBSFS9ZfiaDUbAFJchh4oVuX",
  "key30": "FX8tYpyJ6FehjHFyBKnHA33FWp97q6i2nr9fWNKezeGTcF7Zn5Tu7XzQJMsoyTiUdCV77NC9NPCTYCnzMymdvK8",
  "key31": "2YnLXWGG3uwvterWRKgQxNZbrNMcwLTKrc4awVEvQEkWTSNPsTNpqWMJkwKjiTSDS2B8hfE9rWub7WABnyDLMUpE",
  "key32": "adzqiYGXAivkxforMBECcQWoggvkiobTrcJ6ohpay5QyU9Z3bGo2EYRua2U2syw2RZZ9YGmgVhGb18JkWf53nex",
  "key33": "2dm4zbmVZSnaumAqdmxt1o4JHeff9bRfYTEu5wcocL2RrTd3aVxgnFDfrQCu9BMU19vhwevni6jVAMK9tGuEWVzC",
  "key34": "YbH9c3WJEDk5UiWkeKGtK7hB9uubxpeT5SuaHEsnSkWQ1qRRiLNFgXsNNvTNxbmDhwA1TtzSusegZEHheVDRAQN",
  "key35": "3qrhtmZPyBFycpkSpJZd6Cu6khAmxCVcdvshG66obijik5oEhVys1ArQVEYzRfnvzqz6Hg6BeMWizdTwWdEMCrj1",
  "key36": "4vtRkw2kZQDyTsha9Wk8Lgh2ZAYXEC4jAHspYKh8zEMebfPYbPY8zB6iXu1yz922mETRtHv8NzzS96rfgESYWpRG",
  "key37": "4zyJHGgCQUQKqgpAu55E8apZpVGFbEd8e4FJE6FzJyhSnAhgrC9UXQEyu92gY1qEtXin7HZzvdhGsCGZXvuvHVk5",
  "key38": "ugCURwHxMjgy68vnt7wVG34RfQpss656WtpKX9ZAJk23LwQyu92nV4JPB2keCumKFBj3UEVN38fRhCoxSVDErme"
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
