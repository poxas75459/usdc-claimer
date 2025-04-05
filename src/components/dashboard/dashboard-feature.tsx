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
    "2FGJ2JQt7quZVnVdrDD5erffQJxGE5an6PPcciASiBFg7qTdLNr3qA5oWKnWZZHNHRchhduMeJKvjRFTDWQwx9VP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4d89o5Hxkb7YyufL28yAR6XscHtJeJV5oT3JVnLUWytaJfGSojJz99TqKb89JPfnMwWdjG48t99o9cQty4UQsCo3",
  "key1": "NsHrF5XwcmPkkm9zzaBvLviwFVtD9VbmtzrSZeu1ynJt99ps2k9PoaESuFGCxGemRMYXCLdbSXQdJG6VRqpkBds",
  "key2": "6vJ3qPPEC1BdNrysyAByMBqQ2HAQKDzP6uUkGhPp8aZEGpFm9G8xKRLBNJ6DWUrEFfZ6MkjYwTHnnmgm9hbRz4J",
  "key3": "61R5Y6E7HZYdMwaT8wUGyiYtdk99W2EbMNcM1J4MCfe5VS76jzytMgEiu4dMpPCKcb7mWjGdYW7uWKNoNQMFKMWi",
  "key4": "3QafAehVE3wZ78NiSCZxhsPkT3fmKAeunRpf3KfThNYsARf5GbSf6BFgZFXbvz5NzuTWJvk8zBuT4bvbQP6mf57s",
  "key5": "3wcgvn79yTRAbvb5r8eNCXK2kswGqqhbtckATgvkgpe3ZPUEJYfQ1a1dfZkqvtRRNJxYrCFeeT12oMKQ6zhzNSj1",
  "key6": "3jzVuLXDrnTMAFjSr5e4SG6rHc1GiQeFRe5nBFtuUDdBZQBL6jdhkNTC3s5GpmMtEnY7NSH4ozLUyRyVBEK5n5hG",
  "key7": "4buVgWGrhr61k2zxVJqnR8cUHbByuiDpvwzBGLKU7Yq4qvDX37nSLyGegmv6j5YwQiZqa9XncWusHPyuxtDWGPNc",
  "key8": "52rUrzKmgqveFZUtvneeg8Qk2bUTeZuYXkjWruGiiVDxCxsWGaPWxBnRoPpNJFBCzPXUfwpBrRw9dGtnAp6Vkha4",
  "key9": "2ArDGVjZFZFDCgKkCQatECWxDQEQYhqLcWSb1qX66bgkm6SntBNJFoef9dNpqafonr62KpwMcxGhScwPE3f3Cwgm",
  "key10": "4h7y5R6foyWi2xWCQMmA9cPKwvpwmeygSQoSKeu8PAUziZFBJRtTt4xgb3PiaywKGPKQhkUvJQJCRGaRxS1f4eQ9",
  "key11": "52LJ3tuiwkQheXQWJEyqmFCkKVtgU2BXHMj7cYNUyDAJ6YUPB5T8qGGFGkXjWL4CjuVyb2tvk7yBQ5pFdp2zTf7r",
  "key12": "3uVXAC4CAoMkx42ULwuRsAHoMAUnxdvAPXVSqQTp5mHB5om43UkAX6NzGbBNs2nZBPt6Fbibs2tnYBLKinxogURY",
  "key13": "25kYojYw5iFLB7cQbZC2dkkEHM2WuFKVyvSavEf7cDYbNE6g6np44hTxun4ZQmvdEqxbVsmEvJGiokW5RyZ7pUeE",
  "key14": "3XeCjWLYWTzN6adF82464bt7BojpqY3UUwe2GPpsWZeD7PMdGkWZsvixMdbDgqAftxzBEpSehZ8f7yDeSkLMGde5",
  "key15": "3jHHtCzi4XxsnfYkJTyRBPscRHUoDPy8hYhzZYREKUgEREqdkrJZMW1n5cnHzA6LUWFHsF6ePHbfBPGSfmDDAT3E",
  "key16": "QYxAGv51xGo4J2FtKDpEvKeasu62NYEnjucR6vw8LN7bX16ARaBRwofE2CDTNkXeT6m8z8ggEvFHWxSGsatjWov",
  "key17": "2ezhZ5KJSpNdXJuZWoCHQ2qmSpFUjCbLb5KDofN9r7z7zUJL9ZaQEwkNTYktZahphTTEug23MbRaLow7yREqq24g",
  "key18": "3wsZujhFdqG7pLhxqZkSB6HESHT77JogDeFcfKy7PntR13GmYUCmu21TNQctK2P3hXwKERz5s8w3MaUUexLRT4uX",
  "key19": "4bQnRrxbGVaWgy8R9DQadkMmuVKPMXzbJdLPz9NMnufwFjt6muwoQSLp2oJZLjXbZufqPkuRamiCk9DG7eQFiZqT",
  "key20": "2Xh87bvRQB4PbeVWTSJhfL8KSRG94VH7DsxG7LmWjzGjzpsrZ3fd65YhGzeoWjWpUWV7h7WvWWRneXqiXVg2qFaG",
  "key21": "21YQ7VZce91d1QvVQn8fMRwUamZ7Ha7UsJx6CUUrHGWYyPajkpEPvoPmftYDoq7aEegLm2NgQAjE5BgqGzUfagkF",
  "key22": "3gEMwxWfVkfGgXixS2hA58GG1dRSXtEFewp7CVVE5KLXziGyt4ba8sYd7xbEhWVGzQNf7B8uk9ohNttiD6Tz5JLq",
  "key23": "7Tg1rpxudMmeS2Xc2Zc9b54LiV6SEbt45VNDDJk2zZKBVFQvjujzwDofzLkinFDSdfRMuPmJXXi1RAYfDUctXu8",
  "key24": "5uzwy3ExtARRYHvSnE93qZyUPX6UQD9RrBP26RgEmrkMYMdKAUgeqcEMY41jJpUKj511pGmvnZEAp5hBQ5qxYufT",
  "key25": "5DtSDRQzWpcWV957mXA537q7nZ4fJeVc1jpUknXnA99ERtvU1J5vAXx8NekSqXzMiFq7kCn9HmT63CxgAvG1KzvZ",
  "key26": "Bhf2LmtyAK7GnANcF4sZcQLegqWL2pP3z8wxVcWqTBQZ9NN4EUgz61KS38K2Xc61XifgeYh2FTWJ6jTMkWhMyxB",
  "key27": "dVdUR4bEL53LpyydP9uyFzaAHzELB3Sw2NmMcezpEi6jV85CwKqsHjXCFpaoavr3UXTBTbNQSYHLhNbV29D7ud8",
  "key28": "2Bsw4qw8sh5y1d1Gfp8u6GmLhXn4spoVxsxyUbDT7w1ZxnxwK9FyEWSd5hE8DZ6X9DqzZRiKcuwShpH6TSuSGKp9",
  "key29": "2Wc9jdW1BV2X1U5apNHXJFxU36mMocjwMSP4HFhSoa4ZSLvPzzizCBf95Js58h7S8u6QQaXYGf8VB82PNQGkD3di",
  "key30": "3iCoaifoJWk9jjmkFmGUjE4xJuKoDfNDVV2ny2nH7MVfyErXLnEF1y4J6xfC1a9hMxnrERu9rGERyiXsUpCyzdcp",
  "key31": "4L2puHdxTBkaoyANXaQqZcFUxpfmPUzaGbAM22a3y86JZBSC8qH1UBVPjEeiDSoTt63e5itf9Zmi5J8nu7GvpDvZ",
  "key32": "2w5UrzqNidGTLqzzpio4NhVvYFk39SeUKQeLwVvo7MpgxWi7tHvExp7uZR8xCs1Y5Zw2p4KZ5QYfEExNEXwDy55F",
  "key33": "3YxhbSXEJEwhRHnDTPH1EXPsjrHCgvF6DfwNDhfwPXaf46aFxayJBvWCy9FfywAHmYGKUYUafHH4xQefiZKrXxCk",
  "key34": "4Uo32SpykEcgbM1fK6FBnVFwqVaSehZWfmkfWUAePMsPTFdLa8NPMPek7rJwDdWNigAksjv93iEbmY9rAKeEcbA5",
  "key35": "4LD6jUeTahaQuNx9TeTkRr8f3GRcN5ZEuzvsckDMZYhStyfdJdb74XxZVeCV7vuSuuhoTHhJ8x5RcV5aha2KFe5",
  "key36": "qdrAGwifpHcPcmFwHfWCCTLTpghGRgnBLH2Bc6y62AJamBSum2gYTkmmCaADm585n7kAyFQe7r3rBukmdHi2aMy",
  "key37": "5RnK6NPqnZDDDsbBog743MYoAiWTwHxD3akYihgysQj72yteKNoFsS3mgc1BNgdYwEct8BNMsXyGjTZPksqd4hD1",
  "key38": "bL2AXHaY3pjRkrUzaF81iXp31xDoitKufRDwmY582SugziuELVeswMaAxvrmimhFb3WFgSie1EYo5JNB1YuckYD",
  "key39": "5Xem7aBfVtgvvi8EwNb3YjDWshhCxaVxmyNkKVxBjCLFqrfcjXgeV6YufCArHVq7VV4TjWVt2miReyZ8qoyvtNgR",
  "key40": "2yY5CZTvwEmaiyTee6NzkK5qnyz8M5YNVQ5xmQqof9zRjJVShK7oUuBhSVHAu4DpKwSvqUeQkZi96Ge8m3kDyEQv",
  "key41": "2q6oCdQotGyN9XzZAZeAh3LqtPjbvSAF26Fet2ZdC1VcCCHZNdwReqpSCy9qL6Rdrv7XWxGq5eTkNiZvCfTjknc3"
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
