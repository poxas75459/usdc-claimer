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
    "2jKCsXQeWMDB1r3p1LhYAWkVNi8q9ggruNfcgGCSXQZScxxUcWuMDNW9hmWejK2QGEvBmBxwhinJSJejSg8QncXf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2n6r6vHqR8Jdp6mbGm68DeQK43W3nKG2oNGWjJUvGofxueDp5YTtPp3NCcyckAMpfHqs6XEZKWZgtVBGHJrjhNTf",
  "key1": "4VwWLXvqcLk5ifaGQcdVCWUnXZcrYRCNobknusYdoAZsQDY37T7SRzN3XkC5FkgbdnTCBKAgVJaibteD9YypnKwZ",
  "key2": "vxm6jioDcvYKrpTWSE6jdTn1v7Mn21S4knxWnqhHfJFjZb2yt7AjwzZ72gApWFUZYzKu94UybEgectxgU9ayjmy",
  "key3": "49cbyZwcjZfeWjgnRN3MAPNURprqYTxaEAqheGNus5eFnaeCtsKNKunXokM7G4HKEvRZcJNYAMLeFwYL92BKWkRo",
  "key4": "3ab6FciLERfSXfBhRLQV1ta7wjjgWajr8rsQtWGGLdWRJf4oZp8vA2gCCiXxP1JKXXvVvYkdZ49Gg4JoVqbp47aP",
  "key5": "38N8QeG7zJCxsQ5pmPSBTQSbu1hTFLgWZrprzn6eeiJjF6ZipyTwW8219GRzc3tPDmye8VvYerchDRfNYcuYUNq",
  "key6": "3zz9QsdMKMiVioqmbr3VGr85qM874s5NK2wYEhox7ZwjmNdEEW3M7LLhZp8MP8oykxtgg1Vmn2eNqvtzPQST58tD",
  "key7": "5kdfagkPaNWpCpiT6PMfSYsZerCTEgq83GqRLEWNPtHBrJW5icHLxfvWHzmgd9U7QynazBzd4RC1ScikeozZwsZQ",
  "key8": "3joQ8s7NfvFRVEMcT4z7ry6aVrXiL61VM74dzqkdgHAtPxhqvnc5jC7YPZHGX8XHU2bnQdiXknGt4SscRkvyHtsJ",
  "key9": "pZ8VgNchZiG9YmnVdvLCHKc4PqoyYoQmukuCMqreRZHNJj5BLvh7d1WwhmFFDWJ5TTF6a5JkJDvrH8drjoWB7UN",
  "key10": "3xH3dnxCCxCDAs6fTNv7RbWp5SvpRGMeRmUZRoMcfjTqcDKdiZh7WBDmb7ZmqcgvD2c1FFMUATunznShiKcm5hvu",
  "key11": "23VEZpxEChYpscQaWhAKAt1TvDvLqEaCCezw18VHqUkKPZooaKEjYCRqScneTYqfaFg2vaarFyXkqW4KpueE5GWh",
  "key12": "2Ycw8AAKYX72Wd7swMswnqG5nnnfHcDC2HLHFKR5LGS7A8ErWPS1aNh6KvACNsAbkiyD87Aiz2JMuvgyrosWJump",
  "key13": "2Le6opm6EofNfr5QSZLU52QBF83p3PEjWiThYfXiCL1fSM95Lqc9zARJ3tc3jqTt9HyuWuFY7ENyc5W5TVP3TA38",
  "key14": "32wcxmMvtNqCQ2vNNKqLqo1zpqxwq8HC5u516aiZ2i4j7zw1yzs7oTtxt1ok9hLXi32puRRBztxtTnszuWS1Dygu",
  "key15": "64VKcAn7Pikbceaj8TfJEeVR5hCkRc84WApMqoP86UfnZ1nHizp27A8fvh6HK7Jv25cxu3BtsQdRbdnSyZ8yL8wK",
  "key16": "QJmtQq8yctguqzTZpwG1dfXp5wTyhxgZTrcv7tbxRuNk7m9tGEbQbnHtE2UpH3Mygrqua8CL8hPdiXzNk1SLJ7P",
  "key17": "5Em3QMTi7TBt4p6ZJ47fhSs2z9M3ZQYVNS2zzpdeJz1tAv6kpVf2p8vZ1fFX2aoGgSGFU8V1sEGjb6Euc85epfbD",
  "key18": "tMXDozGUZVCvwZXVruFjUA1aa8W9Ro3ogUajtuL9nfkwYKWjxdHKcAy53wfHRGec95fMgKZCXdyRnaJ46iUXTAp",
  "key19": "2wFacuu3wRezTp5Ke13s6FswhhTAZMsxbZg8zcWXMysm8MQ23rndZtbhX3VuLyWkc5eiUY4GuU9PZMCzTG5p2mJf",
  "key20": "4FaRhvsoFpufcCTcdBwz8nD86naKbRFDmj4SuCaVpooAb5H9zY95g2ce1LHMfXTFpKp7SSWsaZSzZJXAEtjF4Gjq",
  "key21": "5KSt1UqTB8hqoSsgePi3FnbMB2Qu5j4eeVShtkUd1DWQtLi7ujWpgmNMHM5o9jV7WxVg5s7CrYQmniv2J8kWWkQk",
  "key22": "5ych8J83HHADMAxrvVzCLppizvks8Uq8v827oUW1z6dGYKd3U6evVdd9r21C89Zu2UKbNDd7qSmagRyZmc7ZCwbF",
  "key23": "341FEkGjHun7owQzLcLCcJf9CTAxAGeEsZH5biQnVpmnptnmCN4MtbMTq2DhE3kQdPHf6qr9nHKmZFHT5Um2AB43",
  "key24": "3yjfdgv4u1k4jUAsRRHyuyA1gUyf549n5djm7azxPYwDUANkJReyYA1w7XFNRgrbS9FTCTSLd8ZZnpNV94bLy2of",
  "key25": "4XbbyE2KjpfVBmNyttYhM1h4BkteuHHX2yP8wjBAY9XiDQHWTcboFboFSj8DDySYx4ebUAdFfyk1gG1F31u3d8TH",
  "key26": "3GrDrHvTQo7i26WgZeVpfhpU7jme8L9i1cRwRgSXUNTHKCmHq6LgcZydPjtCcySnSLVneqPKkCsoRCFk48NWaJsU",
  "key27": "2w8i7wWHUVSjKQoNKTdqW4gy5EpKy6MBYo3CG7SfAkrPRUETfr8UHsXRExQsmvfW5xutFMANz3xeEBogeyor9imB",
  "key28": "5ezXGTEY4asL57H5SnjEWJ5edfcQeFGz7VXKsv8WWeGFtqX3fEbFWbVTjnKWmxEBCmg1dC5ULN28ia9TpPkSpWbf",
  "key29": "3hTiztu3NuJUVVXjAUyvFWh9FRMYgUhKcmLQmfWTPAmbEvU73wU5xFQcPKbY5LjU6bgyCkQraUWA34rzbWiMihLQ",
  "key30": "55i5nhLSxfouqxAxHRDgKpfofynYwj7RZmspNnHv5G3zjx46tvVmpM62WFfko3BJRnUVQ4H4JkoEW4GVF6qyY3Pf",
  "key31": "5DJKDnnCR83naJAYhrUG2WNqKQhmjxzDED7Mis9kTMonm3jZrm6NBaYmQ4dXssLeSxczPCbXJ7ZAuGJ464f4FC1",
  "key32": "5q2P1nHCEtoLCa9kpS6AK5B7Cr5iB73CC8GsBNvRkwTjmnYf3hzXpDHuFexodv4TXMq5DRNdU4out1wyJxWyYcF2",
  "key33": "4zTeZtjxPGFYMcCa1dycw7pMmbyDYLMY1t9odixXgnaxDZjRugg9fYFV211T2r81y7nSJuoitpsjnRBVJH2mrk7d",
  "key34": "3BqW4vASH3Mp7Qxhh6dULQWWXkbqGqxEhkRbkzgRpdYd7tDXHLu4pKfqrnUbq5py1x1sa5o1ArDKkDfuiZQECcWw",
  "key35": "2Fjwi9sWVMV7pCshR12kFTxVAaYcraayrYNhdkkp5rRTA152Y2SomrdhxecDTGrAYjJNGiZ2ck13zqPJGEAXsoA3",
  "key36": "3PszKVS19YkgUCSu8Tk7qTbwytvXzGrz3a6dpdzJZp6Hk3HJA3zLeuMX3Z7Yo8Dn6nFyLmYTkHhrmtvHkt3tcdzb",
  "key37": "SNsPYL8sW7PLikB1gvu785niAjWxsesBtC6aVifRcg8AqPPaJoVu5s8xB6naNo5G9kUHiJdsEGAqbVWvNc3Ahd5",
  "key38": "3uEK5RiXXrgJ6jMp7a1dLDcUZyhLuAHpgc35rLvbw4BdDzx8DJ1XEEgoMtHw5oWTTxr8TPF8ovPLJWAKWLjxEo8b",
  "key39": "5iSxUaS9jEfSk1StHt9Pjd6ggy3xn39hgCvYJU8hbwvXvjPSxBLtWxZoKYMYwm1JPwTGsJei75NAsVKFEwXzrMnX",
  "key40": "RwVPXvZtqQwY7i7CBssYsMX9RfHmfogfTDyNj4NM8Pg7gXTdzDhEBXgmvUEjhfEENnEZY3uAHe1P4Ww3TkoGnV5",
  "key41": "3JwH58dPVo3Nd7mC3GKgzABNmFNbCP23n34ZYhnJiSFzmKdjEnHpn9Jf1XqDnwbyUq5nkeHRqgd8cuy4Xd1cNYXM",
  "key42": "x6VWjVFXBNcwFuxztTn1TzcJUgKHjgqMAxjraGqAkTNHgWRHtSR76NWsvoNDnkC6TsvwRB8tBweNkXPxrPWoR8q",
  "key43": "4RsLsqFZ3sYWhJMk3EA1N4GTjJ3vu1yw2a1Xymxh3ySeWCtutDeNHGp9wAiW2hmwSZQBmsyDKYyGUZtgXtq7zPT3",
  "key44": "eRLaaZxFaAxbWsRvrJxpKhDa2mWJCh8uKA1pqX5WTnBeTRhX5ubz4bqh7FGynpsG9xgsYWF7AgCw8SR2dtsELoK",
  "key45": "25ZwEXuRQUF7viaGd9TPcxXKwzAmrEtfwxiDSBB53oGLjsnaRP11avUe6tKbqrwzw28JEddUo6YgiHLrNsvZ2Bge",
  "key46": "2KiEzkF6JJiivbRwuzMYEjG8joR8To6wRwDaF5XeM2Wr9vkwyFgGdN8ZdzXmQ6sHZJJPwfinAqqa6zWfMHQ8mh98",
  "key47": "38X9wsQkPcBSgYfKAh4vKV38wA2dasvqBeR7ur62nv7xz67vkvtJd9nPwFNvvN5Um76ehzowP2tWy7eHfHYHYrGz"
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
