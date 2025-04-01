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
    "3c1H1G3AbdprwX8rUzRWNPF3anQ6vfL3aRHf3Ew4F9GZtbbW8CmVcJFQFy8vW2qwNeTihfz8uT2XnfTxjfiSKtaK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oiyJfLM1rkqnATvbi6q8YdxKS11NgChFVJA8cmBTHyS9K71HjpUUXyBNee9mm5zi74fVYvnm2eHEwRYe3jmdbqq",
  "key1": "49rLFvkb9KmDFNJw27oVPoRdUedp3WewGvfvy949yuLV2pHCHXEZK5TzRZ2MN8WN4QdWQx98WUB116Zm3AVirCM7",
  "key2": "2u3XaMj2jjnwnr9HWdu9JEV5WzABfftP6Gr8dzkJ2kPgv8ZLt8ADxXcFMoRupRHHHohJRxbjc7CMAWxj6gBzMnSQ",
  "key3": "5MCBhpwKdbJKKSpyYfcn6HH5tENeGGGRh2JnrRVDxPyVKESxcYCqSNiDtHPVjys1cKVKUc6VJb8c8t4GV9f4XvAC",
  "key4": "2s1S9rhhEQ9vFgPPHQXCCVvH73awBNu7Tt7UtosnN15LJ1qmLrCPZ4ap1hg6AxHZexBVR97oyifN3YmPFz72XgVA",
  "key5": "3BNsRRR7dvh8M5zzqUmySLVV4LZfjLqYAvGsgTkZ8kkhgKuMKghjAhq6uhnkHYnujV3J5W4ojujMZ2icg3uwwVxA",
  "key6": "3ynrSr9KU8keeRw9DQjzEkEmhbEGwrHGEpZw1nTq6xprVuHnXc3A5wmTnuJY3JmfxEGctZHfcXhKDgwXyb2u8kGX",
  "key7": "5gMPrBA8CHmxmqzxJWL7WbkqtDJqYdJMGM6kiyEQFwShzuZycnmemea5TxDy3kH7XYWxXR28oog4RBjo1rVDbTK",
  "key8": "4J8q7fLoGnczE17ZPnHatDfs67PYxSKxJCQZKWsZMEJiqDFdmqN2BMxYY5FxQWiEA7YHK5LUrgThznfXhckMiv1U",
  "key9": "2wUVxCPJEiHDvkYr8tYgX1wZ9fBt7jPE3ehmzZhebafmCTDzMEmb6ry8xw8QiwLeZnLTjZFi7cH6Np5vEVYTVKZK",
  "key10": "4Fobg9VUJ4xe2A42ozxn8A9GiB347nXfVkidxPgUjkwsHERDRHnAznJKFFJqngqYCSzeVHopcvktsxGzKgfzvwd8",
  "key11": "4VLFFTMz7BVwwsh5QywDYdMC2xuhQfw8WAcbz2JgKtAzQqH6SmbvjAu7wipk4PsRrjLE6zLFtqvSYKQZ7TGFXcjn",
  "key12": "2Cfp45BZNt9H14TcRGQ9LzBWjhJWeHZAiXpmUipmqnA4B9YEeMbcRhzxkZdu5YkhV1rRk5HDQBHEKnWstrLRMR4e",
  "key13": "2WsmtEyq7x29CqkFEc5bQ7mvBMAcAV5pk8agVXrr9fViYm6jbL2AddF8E3GJSz3DPQdZXcRMDA96UefU6Kd3RA63",
  "key14": "4NVuq8txsspKiZAEtrLxaTttS5oBTvbE1BNUSdENAjjT7pfdwk39YChaLSmpKuEqSqnbChfByb9sf1RDZVg5WPFC",
  "key15": "3Qo3bhz1n3GwJDsE8GKx4jqMNWaFf3sK5XBfH4pGwayir3USwxEtNmY3mn3TufWH3LXYp2GY6MrMHZyXGjUwW9ga",
  "key16": "5tQsXPATHyB3RUWmzJLJqDDG9qFXGJHSdsd7A9fecg8v6BKeiY4p6Q3LEh2NeRzHpskH3fdhygrGVKGyszdfpTvN",
  "key17": "5AHhhFdVMseWGqMjHUgmyBqBgCG9tvRmxgZqtmikpioxfxFX6xJNbJ6UC2Xp9fJdZvV3DedZs4EX7ySiMctV96qC",
  "key18": "4yz94gop85ek8oiK2UZncxBN8NazxsfhSpTCiSSSvKu2hhL7xGx7QVqC7jhV11HbPeJVzQKZsa9zzr6xxBB7S4gK",
  "key19": "3NwnukDuWcLge6J953iqBX2kmpEtrYRwMKP8GuXnnc3pg1yHu3EjJJuM3qxK7KwcwwFCAUWqXEd96Zzdv7n8cE8E",
  "key20": "4ZLP3MMNeyoWcLKSoZBX6DHvzwe8auvgfyLw5v2pHMTCsWPNoR5zFt8CThgfiYYUNt3pcioZPkUUnit12jPeJNkP",
  "key21": "5BZPR7CG4h8qub7SuY8dhbTqKeA9kXEuvMEA57CiX5bi29UgudqjW4PYH5ah3DRvJqduTSyA4zbJirsUHu9gTqkS",
  "key22": "5jt66eUuCBFnnDxSpLMibhLG72bibbdsmdwuX8pvUzKBfPjvENwsG6Uc5n3CseyhVupMMYm32ChCEhRVPdsuk11d",
  "key23": "3hUVtyTs95EimezYV99t2Y8RqwYFhRVo72jpsL5rajMFpJCpKtPasXLp7NhEVfFA6bocoXi3xU9XUAZfmiefmoAd",
  "key24": "3idpBsXYJFQWaAabT29AjCMHFWLmWqJ7NQ6ZaFTAoJjb55XSZEngEbMwnoKkvLCt9hirB3qDMCLgxEXujxg4YPrY",
  "key25": "3Pe13vE4cce2HqTZmTSoBvUxH16RiTcmh3wqoJSm3fywrjAzXNCELmaZjnski8n6kEXi3rf5oMgwe2tvYG2E2bXN",
  "key26": "5ftoAGy1kCYgb875yA8TicwnJWkHk6nwieFRNy1efF41iY2utvZj2pG6FZEgvtfg2H5fpw2bbvmPjmkapikZonZL",
  "key27": "5SfMQf3jS5jPQkrTP3GLyRKZtQJbpo1KM5amrzKbqmThQWMh6F183s9uTWCYDzG2hmv4eqosmcZrnvCvkBrbPC5D",
  "key28": "DuB8FKATJptMqpTaPhaeRoeVcCivot16SDGk34GsC8aoEo3gJkVNxeSyk5xVyoVTDUBNDavShZ1AXcAf3UG8Jiz",
  "key29": "4yJBbap9psQY49EnL8y6FyXafBDeiGckkq2zSxvJemv7qhLj4ZDrkYYcB3pxCHZ1JunB1dYQGso9hBbCeDULGgAW",
  "key30": "3TKT29Pg1Hzz9UNpuoB5PAuzEBQGihksAKXBJD3Zf2kQMYkK7brGi2jqyZdSrhzDmz4NuFRptG3DcQp2QgJoBWBJ",
  "key31": "676428T6JpSHCCUvRGbwFtGAfLBR2uRBE2HQUSBFjeo8BWo5jb9NL5Sif4rcudq4yAmNqnTfDBwa8Betk9yQcbzH",
  "key32": "4PBhgfP33JaEjFNZni7MiMrNAuDLmuWi5NaFCYWDH9FgH4hpgtkWKBT6WGqQdDiLkyRQQUutnjHcpF1Rjpi6oQG1",
  "key33": "5GM2bT4yBoS6CNK1JcpyzjgMWwZgaj98m2QFJ7EC6suc3WnPriDvoyGQ2MbJZKXASfF4cJyP8xsfgvAxMR5V9zzW",
  "key34": "3RZWgppWvcnSwh2LYRGtReMH246n7bNUMvfkUfjnUp17pMYdyBYEssyN4EQHz6jYhUt71h2G6hg7rCzv6RpGyUyS",
  "key35": "KUKqL9mzL2JTviVX3u9xJXCjQq94rrwSfWdgSJfkMXv3xDS9NKgNPMtCbXF7PTsov2j2FDb7EsbP8LtzPNGZtuU",
  "key36": "2grnaYbg9shytD2fGtas4JWhEz1zUMw4W2nLnFnFgMFKtDYCZfwmWUNj7yJeZcfXFK1ihySuKWgboR5i3nmd3apn",
  "key37": "46SYChBjG3GzfHEBJBi6wwewpBdtiS54GRidngN7XE9zhEYsSWgt8SuyrnvDQ85zF6esAnshcZghE4nkD2JPpvhL",
  "key38": "3DzB39SiRDkfh94Lf5PNm5cfTkHUkw7bSoFC3JkUzawNUuEQCUvqE9hcWbUi7meN53MtDs26J8ZXYigoThkNCoVD",
  "key39": "KWMyRwzJoKj7H2ZQ99Xb2VXkMRu1rrLBmiDDoiVaogbaxzT8eHpR5vcihqidK576iSCF5nmamRRFswnHzFr9uEr",
  "key40": "3Be25fvuTFXMM6k593tvSUY5WNhVfRvGTmT15Ji9okUXhAJaQQH72WRJWwrMSuX1nyro8sLE9CA8R24n3jANq6G3",
  "key41": "efApCHqtdmwKnDNj4ctodpZJDJSXwaCKMJRNAkyZQkmgBTo5KAXbCUsCdcjDbcq1m5w1XrzjVbps175DjbxvQeq",
  "key42": "f3QfGaexvEC8sPKXN5BSx3E1bf2757WZTcdD9zC9VwmHZdTNmDBxSSvZKgboWJfaZdh1AmvTT1QoFSG5QiZ8BJ6",
  "key43": "4JN7k4sHWUsXh4PnTiEJaR8eFXhrqBDJruPD7asUexx1huUoWkTGgyB2jYieQLXyyKveQ8yQQqpmkpKg52mbz6Ce",
  "key44": "2KzDAZZiNuczNwvM374TpX3EZ4hiiNqQVGngKUp7qy8oBKxaU8j4A27deopSqepEy3CTnLW2qesdNN2NBx5ZG1mr",
  "key45": "5d18B9FnpWykuVf2xXL7YkMrfh3NmzTm9XffDyydaT8iiiJut4gUpKFwo3prQNBrRKWqavc6fpCWyVzLafKfiCqK",
  "key46": "jpmavF31d3eXmG12WCUNoRQ7dY91jL9habtpF3CZv5WQcv7QPLqFGVwpKs1Sk5SPfuQwDfkx7vLVZvFDojrmsQB",
  "key47": "2B8UoZwnpA3yCEMVEyrZ8pmqYZPA2VV14oqvawu3mZpKebaF3WKnmEdq8rTrA2NYsBdUaeGkCNLo44DmwZgSHuce",
  "key48": "qujxxLRrw2jAs7KAxgLXrCARyCswF2G6EpZRkokJMrzD1vRiBzNJt7zN24EfAetaKjAyyyLZbdZcmMPt6HfEheg"
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
