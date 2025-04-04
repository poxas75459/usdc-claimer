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
    "5tuA8h3ZxrNmKf5CNsVx2zLBXtjS3BicBd6xzqXRoyZs2SWsTFvcHzjN286jsu36z2kwjc6h6Eo1TuDgwfA2SL5Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "322b2i82auSTxEza5WSbTPjd1vVnEjv2BH2bJd58z2yAirLZy3VmLYbzymzXhAHSwW9Uv5jJgKBVY2YawTgrN8q4",
  "key1": "61g8UJbosQJ5SrBiRgSxd1oa2UVxDR2AAkYAqs9aCvvet45PxnfCMr1gnZTNVGzCHLqs4JkpzUWaJZQUbke9oF67",
  "key2": "2ioQh5HtNjXXXgGFyjC64wutWrYjeoVMqA3Jqow2L4Eun1xvP1o5QVhgb7udnqmGA2yU7Y6b5c6ct8SyV7pmXZ8U",
  "key3": "2PsoRco9Q1HyWnbZDEAZ7HYBcf8cnvgQQmsSX6u8TT7G7RwZGXyZDWgDjLcHKRLhwWQ741wCdPnVrympPN9zVZBC",
  "key4": "7rkzRgwESiPaUzxVCv3UkGZK51iBpmpFikBn1ynqzKQUoXeSqr9t4SVLsvSC4VQjLkF86QS7HsKTEZSFPqdBPf6",
  "key5": "5jfGw71RYD3DZZfKocKhRq4GRdYeguMr3w2Dkdqoucqte3eRX94rJ2YSZ23HMvQEfoMX6FSc18K89uLrMQS4ywYx",
  "key6": "5WNcULviKYCghu6fkEgoR9vpfwykfkECaXzRVyMT5cZU61rdowCskE5YZxyoHm9bF3tWKDeuaKXeCTPYnMmwEubs",
  "key7": "3sHCn7r7eadYL2FssFZmaE7Buguycyh34qTasytR5cTVTYXYyBDevrvKett3rcsdeWtQNRJhUKRa9dw5wnacWYKQ",
  "key8": "3YHxu4ADTt5AmZ5xbyJXUVsdtVByfUSHLpjmjb6N6oiEKLTqDgy2dqTpvWZ5jBXvEfzM7YhTEMuMeFLEQYLEowRT",
  "key9": "5Dfsk5FrKemj1a5pmiiCr4aQLwwdsHrL24UzccLsr25sdQdU7V4fUiCBp9kDJoQ6JVnNr2tzQiKhczy4QctuHmtZ",
  "key10": "2eEGwVbDkoMYWpvK7KmTHeq56BMDqcW93GiAe5cTQya8tG1brCuTbQoSCB435DKntSDhAS6RGdshVx3tr7nGWpPW",
  "key11": "zSBqL8fhnCLhvRszLJe4Ams6PcvMQvtjKs6LwdrTEXm2hpVW8Rmmd58kRNjiPZuQokcC1xmfaeCGHJTjXPoD6L8",
  "key12": "4FEi37xFhaXS3UsrdN39JxBJfcu1k3318mAY5cWZyR7dzhdNg91rDdt8UunuuLKiJuSgH8xFKXsfkN2JPgMPrF63",
  "key13": "5tex6nG2UPxkQimmYFTNYmxQry8JJ2vKUMcZWG4x9YgNMta1v6ebZsp52rj6Uh2P7DDkY9bApYvCn2Mx4sMwyAuP",
  "key14": "35pZKPNvzo5Uz2NFT7ja9KKLcxXQoKxpjcKJTVJYdbDFYcb3YypmCHrDwfndrR2p7863ryX6YhQSo2pLFdVHc1Lf",
  "key15": "4KdyxncrSWNijU8m5izKX4wtnrmAhvDfFt4fupQbhgLAfKTwUGpqU3Fhr3S65pXFQ2UJAJ9x9MpJtrrx51KY4n4P",
  "key16": "3bJXin2vAeTKhPS3bUoTZgQ4Zc4bB2W7E7tAZ5VrQiDajUhx1uQPGGsoRLsSgcAN76L1yhHXBHv7hBZoLR9Dwq9J",
  "key17": "2FHgZT2uJgMnHuhJ4B6chd59YyQiLnRE53qqMnT44JvA43UKXj7B4BxWoUtjcUG4U3ZmhRGFHsC3wR9fUmnSQ2zx",
  "key18": "2ic8ZueXaQVko1xsEmYMgjpw17GCtRMCjjNNamUY4tYr47rEksS7F644oGdaxDJhCQ7SQ5TtrD7RqrCsWy5JpAKx",
  "key19": "uUcEqsNwp1Fria9JikwdrraReBNiec9V7J88VeabBukpZ5V2g63KiJBghiArmqw1FGTZtGjDY1tgbLdnqFMLfMb",
  "key20": "5PJEWAm9N7vB7pfpSGig5Xqak2odMp33hB2YBk6DF8B3BkAjwYgjidnFDZ71XX6fm9mAtNveS93ayftWQZRb7SCj",
  "key21": "6v7JGRhyeBppHRmJxpkAtZvPGmYuEHghwjpF2yv6mnGFPAVUNDtL6kc7BQy4oy3gVSBV8ZwxiXu45eLWQFXqGri",
  "key22": "hcCzFcNqMgwSanjiCgpz1o2TaA3jtAKCk9fiWMjECvzVNi8py6jgmt9TYSZRxB1gdR1HqDULAX4t63eo5o7TybV",
  "key23": "5t7UGy5J1sd7Cf2VpWynE71LkM4BRSU19Q9GXC7qwUqrWLUCgUHaAyyeHtWBr9VBp9ud78g8tiaSiaaaYGK4CNhL",
  "key24": "SodZQZteyn99JdSMvy26PyVgi1pnmyirXiEaFrtkQRQ81uiLWhuEaDkq2f6rq85tiLQzZ9h5H6TZWUuVwEWqX4n",
  "key25": "4h5z77nSkzoe3nYc51QWe1PHV5myMeuhw1hATFCZaoyq34dhBYCB8FtxH8hpM1SX8ZzR9P5RvYtevRkVquk3JY6W",
  "key26": "5e17M44bUziotHCoKwQE2bgYXc5rJxHQqPdvNtGGSiribE9u3CfUaBFhGNLugt9rxrxRnhvHRSkCkqXqEVghfLAT",
  "key27": "3rxrAdAbNdoRdM2H8Pf9ak5aMRVpXDKfV8M9UGR8iLiSxoh2d8pXhJ4s969E7kVAr5zrDyxzPvmkkjLWJmMGgEKR",
  "key28": "2HydZZmQaJ4fGMPiMRR3gtRZ9S622fAMvHmmJVQx9TCdiNHEUPtu9PDTCGxLsFhXpB7GGDDGMXVB1LuCu2nryWyN",
  "key29": "jFXmBwb4H6jh3Ls3qWxDe8uWdhQbNwqPpABjBvbDETQc7NC9CETC88gJBfhwctqe6k4Eyn6jckzg3kCSUF1HBAo",
  "key30": "3FbPbrkESNUXY6fPQDEpv4HXXbARYQJGEviE87UhoJgTZegZBYSmFxFjV1tKR2W8muJ7RGgsbpvNDx2JpFZgGRX7",
  "key31": "5Uj5UfMfRcQF38BH7ZoKWTUjLeKv5xPnQGwmhiQAjZmYtZLZZyaptmj6Fp4YcPXmuqMdiD75G7eKbuars7QbiEui",
  "key32": "DLSZRdmGprjbEqCuUDHTre2ZrMCzZdZtKjSHpRNN797wQMYovE7AWvCdH4hXi2ucjnusqcmoNYuCN5tk75xAahH",
  "key33": "5sKyxvNv69x1f5NfDuAdnz8ZeXkEXhu1uoL989BpXxXcx22cfY8NpQ2b1Yikng56A6iwczDzsNbJ7DbtuF6KxsP8",
  "key34": "zuhqmf8wDsbcEUjqLGQ2HSVsE1ZoqjVxV5DYLeUf18NcB1A2LjFWU6pgd2JXB9oJ9d8hQfUa1t2BZe3LAjFjk3p",
  "key35": "5a1X6FUVy9rcRLBk7JHxB2cL1BFfc8gCt18MaKduN8eC5dAXYcDYiSJeiMxdYg8sZPWWMcS7jWRwvdJwPsJriAh6",
  "key36": "5EhCerkjecNuzXsQWbsfkgjQ9iaLbvubS3Tt7oy3febW7g1JGyavGhCM9GX2XRfGFrdmHM5otuuLVwwWmkCH9FwH",
  "key37": "ZYecbxPZas5E1zRQfj1mcfutnSUp6Saph3PwSGiTzA8ujFKrTBnPpzExRT2Sz8Gh1bsmQ7UHGypXbueiGqod9Wa",
  "key38": "dPpc3ZbkY8Ub8th9HEWJxtwXubwp6B3FGKPeQ9e1WdynE6Rwrv4Mj6sicRKPzMUKQkzBiEFq12HTN5A2CAnLzeP",
  "key39": "5DQHz5AbiDLo8zib4xwupSJYew3q92cAx45XiN7XHN6ZokRyC2vAWj8TY21oY6dbawiUB4EcUkLPtDcZ4xPVCb3v",
  "key40": "62LQTJXhYKEkXG6nVL98UrEwocXuJ329EuvaYLopckH9KcwuKbukCXbqfwAXQNjymB7RdZD8GBiegW2Dq7RbYoTr",
  "key41": "4Qgo2ZebhTKK3SWACne3YjHy84zSGKYu335Lw8vWRGyzQNFyokC4qSbrUa1xaNpyxMxLUYMUS2iH4ntVRR8AQtg3"
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
