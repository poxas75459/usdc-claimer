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
    "285GQoUVa3G3r34iczdsMBmYBHFh1dXJWqKRSDqrKdfWyH6m5scaCfmkW8RQ7vezqhy46Tw3YERznWYGMbZPmUFd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Q4zX84fnmPFeQDAvmtgWTr5zmXPV7Gobfet5YpwQY8tksHx5eYpigUsn7D8P3mtjYnnK9gZLaWBLh9Ek2oqG5w4",
  "key1": "2DE18U52rTTjVyZBVmjDy2uXZfKkgKbqFjkiimZnBwxDPbvyMpk4eq7rgNwktuLb8mVRf24iPDaXRh1W3sUeXdnc",
  "key2": "Z1sUGqqZkp4QScHPZ8irtsVvnjsf6oeSmrp1VQxjJpzTuJYxxaiKaN6WQ8PnCSnnyXYUb1txPbPLksLsFG2iP1n",
  "key3": "5fpxZpP1SYFnrcMpCVQ5ELyEGkyckFYGSh2o47u8xzCiv4icZw5z7bEmRqo76sVXycsVaePrbAFKtQrv3WAvW15r",
  "key4": "5FASPwmMaWEaFhE3srA3NYBNNfxUQScHMFA8RFxTLnWv7MRDtvsw6tShDnqrfHfivxMn7VWTvjjmBcUEvAmwSgJm",
  "key5": "3hLyAHq7G69h8YoiUXjPueiXcjsz9cCJ8jwWvencwEdmHnExRCJWksUe8FFM89m53VUM8zfa3FvgXKLJUeuba5zb",
  "key6": "28dofA8YC2ed9N8Y9hZ6uEod3up97mh9FMBWqJT8jufVEdCJAZMbH4xibrzkGHfKqUeVTDjyTaVxRHuq3x8jXpFE",
  "key7": "55ptT4tx9S1nKqQyhMBSj8gPLQwMxhhW1kUgtqtNH8pBs8XedD5ossfsk2FMtqGFNEMdgJb7do5xucZ4qH6WAhsM",
  "key8": "5BKGizUDf3G2gx5Dok9E4Y2sNNpUCJEu1FFfXHvsj9g59pHtVs1ts9LdWrCJfAWzJ1JEMSSGtmS1uTxWmrFGUjRf",
  "key9": "4aASPntdxTqMx7Xo2FTDiwLkr5s64SecuSsDHT1VS5vQ5fsdrP29JnjdgaK5wgAhyy5h4aX9ZvhG8zMKSLi1qXY6",
  "key10": "3kR72gJmi72Z8Vnz4SxWqVFXZd7buFgS1JcrAmSAvSbqtjcL4dk4sUsNi27i8AskmvibNQSrJjYZCZpQTVQUyZrs",
  "key11": "4rpud4C8X1TQ3cG5QVBc1cWJ8rFGBTyyohid1jTmDkswzqHenkZjvskvD4gwrJdUQfeho9eBHNBsRpegnrZv9NGz",
  "key12": "8zaa3qPR2oWefyF533vK8KjLeQZgT3bdmC98szUx2w6Gesuri9w2CAdc5JvzXsk8CMT7tnQ6M3tksi1HukyqvVC",
  "key13": "54hbQSRarrVt3up974rCb1eYHv4eWjXaFxDQSuRAFDJLxPm6h914jzvMvj5e5Lf1CE9Wxryse38kUq9qgPhr33hy",
  "key14": "zr7aKGWVawjsnM9Ww4fEXeBCwmmCy5q9ssJhDYk4oJ94us4T7WHtEqd82KQPRHNCr6Veyw719SmkmaR55jP825G",
  "key15": "5wmkKhzQaHNfVYkz65KhczvWHD6qgxnjEHemW6bDtjnmekse8jwDCQvZAXswr8zLNzj8SxLG4yVp7xBb29cLcqmZ",
  "key16": "Xr1if5GsLZQMeQJGS4pzQ5RgWeB7f85rJQHd8gunULtQDEojqu3Ek6xZqnifw6HMdsYF6AM5dUwtBXTFZVbMSFa",
  "key17": "63twYQYsCuTJFurubpZPDyWzwm91hZXR8mMV2tGXE5LX3zjacD4bZDhaQmbJgxCe22qBCpGnHQE545fhvkqNj4eg",
  "key18": "5pC5sjbSc87jLcTEkE5vdhPahwwopstAtY8eprBVvT5pZtZCtCqpskW3vgzrnLrpE6eu4z4q8Wgi8aH7PVtQDx8w",
  "key19": "muDc7mcEx8oGsBCRY1eh1vGgKRopu3o9UQYPryRM5Kactsi53vJ9VvV98jr9aoB3J6uUBsjhoRdJ2oqtjVQFq9k",
  "key20": "4WEjQy55zDgwX5RAfGa2o7NdhQQLk7ZY9x9TQvhtKWfSuh1WkpJshnQLp9X6rVH4aMwH52Qf3CB8PyGeH7vjkfb7",
  "key21": "5mtK9CPc1ncvwUVj55K9kdt6QYzEfmKfA7qsgEjM9uK52sGg2HUKgoQKpViAYnKetYSzKVU85u47oADzwiDbzQup",
  "key22": "k7WyBqSJZDbCmmkh67m3oW1hRjrTpv399vUUAXgyRTC77HE8Xr1ekk7s9XyiQkisbzYwQaFJsvwzDbEeHa2Tr9X",
  "key23": "5AnGadwnxqm4ThX9wuo7cJYjg74StJb6MsavQZJiJC9R7wshpDUHZC9LSoqTB5L937MZsRmioUrYT1VvcCQzy72N",
  "key24": "2W71fdCmmP8773RWU2xn2oDK1s9c3raixq9pYRvfQkuicDeDey4yDsi7Aby1zenH5GzHErpS9vPQ8K8gH8es9XRS",
  "key25": "41c8vbUAVAU2zZHbwJnvjZGF9kv96PKR6gNVvphMAJtzSopPaXBAthS9ictQqrqVBScdE5BZP5x2S7heazYq98xS",
  "key26": "2kBZxJPZK3RJGBAtRQJciqryLjwXcasBFK1Eh2VASse8hU6y8TUSpAVXgY4Eh9X7eJWHpvadYGkpY3o28ext2bNt",
  "key27": "3PfWxjxzkB6jix5MUM2Kvgahg3fXTTG4ErPyHrjPxA16U6t2C69oxgf3Zpx6XP8Jhy44i6yKemrMZKwkGQ8opYee",
  "key28": "2C8DPywTPjfvhqZZePgVRcwvzhk7D8p9wa3Kb7TyzoUoNYsy8zqhr3zvxejnxJCv1Vy2PqbAas3k8E4tW8W3frSd",
  "key29": "3XyFzLVkfe1dZLq9sjur4sSs2fzD6xAf9G2tgQtFEFeX9mDiCMi1JWLd2U9fb47rCP3rVmjjAMTbj72EtzzWcBGu",
  "key30": "5GKVyAHr4B8vbtfUhDbUpuCzJr4MX8CpHdxTQAoCFCxDGR5ehCQDTKEe7EdRqMBDjoDY2KP1Dogm6gsjhnhs1viS",
  "key31": "4fUZnNi7sVtPn77YCXx1foBTzpMd7YW9ZcCmXDnHpX6DDWiB8hFJYHjE8Ye8NzAu2pyfYZiK5gy6Q6H5YP4tdQuM",
  "key32": "3TvoEPK67zZEVTLnDNYtsDvJaykb6dbtPSaj5jvYjcRH8N6BMWLVm4FGYgx6W3w99QArNLGmdPcdWatBFarBLfAm",
  "key33": "2p2zSq4ykThC5YTXASb6n5pzXRfjZ8aYDH4R43urbeWyczVgZSGgfK4Mkynkzxavnv956T62Mt6XtKdWfRMBGAWX",
  "key34": "3hp4DtuYirSgQhJqJXorwGP6UtyPr7J5WBa8QxoQ3Bh5rFCZY43MLvWG3gcDfy7SfnxsafaybjFRdtUYYdXU1586",
  "key35": "2ipQJPxrXv4pE4BvQGXe7NzkYM2mJx2rGdHwhS89PHgxgn1AaXCyQaq8fQ6t2upQfb8JkV72PiJkmCFNYnUjAKpN",
  "key36": "66nU8tCAehrJtRHzRDD5VcEFFzRdAEtLBP1aqkEK1AKF7qpz2hMTXDXWjJGxawPVFeQwm7e6h1bZQWuM7LgHWiKH",
  "key37": "4TmRvXXX9mp8AioPXA5jcxYPCWYfkpowYtV4LtYvyXCUMvE7A5JF2TCPGXKa2VDe7E3A51pPv1LDdhnWtKFENVMw",
  "key38": "xFVZFmhctKKMdhHAz3TgcRzBECr4WM9StHoceE7cQabmdXppT3NoPzn8ohFVhfjwiyjraH4TFxcFXXEDHgF56oz",
  "key39": "JCRdQTZTj2B3BHetaR6otajM9nxaR9W5pAQ5aDjmApLadB5WaZx98y16TEcjkCeXhoTGvo3p6ck85pGjhiR9F8a",
  "key40": "3H2reMqMfEKjG6xV6EukoXBMK6jWbRF7mSB8vBvN5PBqp3vRPjS9tAHYPmoAuozvGrwMudftJpURmtPf66SQf3jc",
  "key41": "4KeMYTTZvXnxCQStiCdftCugugZpDLCxCPMyUgY5hj2TQ7mwQdYPUMdkBdKexVHjFvAG5VYUmgrFQmx2XAhxh5JF",
  "key42": "4NnTn6zfCuAJexx4MQPv1VvM6ZopmXMdUCDHuAXwzD8wdf5vmraQGLjUZDShgtZW9dD5g3mxEKiBw2eLimrGRN5u",
  "key43": "2Y7r9pbtBPLCbW9jMuLRmDqn5sf7jt4LzyMqJuVeXRmBp9pE7bxBgmdnAXa94KQhWZMutvxyKEFUFY7vBJjZMxWG"
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
