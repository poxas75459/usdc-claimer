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
    "2E2B4bL5PJw1Y7gm32cXHwZ74KqbtoQpLFVqrd7Hwph8XBRjSMjMDoy8hHkyKiZwifpKzXtJP962X4JvTWHFwdeP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KdXRuuK8jPyev9NEXN94rFY9zXm9LukNkGKMfq4MfDVxgVQPUPT3Ezzmwr6nU6fmMyaxB1B5EY74CyCxnZuVNp2",
  "key1": "5BdwExurKmWamFWS48r6YzgkrzV5pf7TSU36K83gNCSbDzrnX5GzMxAH9xTeSSCPnHDa3ngC9sBNcgQBwoHQqv5V",
  "key2": "TgATd5fPA6cXLpsJJujuBYsX7VscTp8YNfdjsCXH3WMn67PXYgDr1Wz9LenonpHaBB1uuG9dyA1MxXQkXDGDR3q",
  "key3": "CUMuD6F8EBPgKw1doS7Wyzk19qFMBsNyDdhj8buTSr71EkU36zpDHQGyJepHF5X4u48fjdxSgFzPCh1jzCGFX7X",
  "key4": "62kpKuq6DL9riZZLTG72kMkNSvS6xQneKsw3x3NhW3quXntNNmUbBqNkqtcUPF9BapCz7AY7ppxhvtHKD5A1p1vJ",
  "key5": "X1pdrWkwBEUhxGPpnjy6czZ6mdxPjC35BDoTZ3L1pjPdwZXZHDHJz9hAJnfTMpuYSE6321BuKpEU5yShLybHSk2",
  "key6": "4hz8LxYkTtrTSebuTKA7tUPMHkUK1HyhowND3JrEXeAv7s5VLVYdbmXnr4ZLhsBgD1z9rKXVGMJenCYHvG2tF3pT",
  "key7": "PkxrbCEcEgG2QGVDwZuXrLUxSzvsewgDLyFApckMwVGQH68cknrMNEmLXgAP3wh24UYnkdckdxQ81UFFBaghoCG",
  "key8": "3HiMJxg69chh8dCt65XH5vo8Hew3beGMsPEssrVR2wuy3UzMsvbWhcWuRzzmH2rgNg1okKnJSPguyx4Z1Pwtkug3",
  "key9": "5X7kSbkkyRioEx8DRYd6X2PVPzS356gNkWjd5gph3aqXMB3J9j9zhXcSkPaZ3WW7KAPEwz3ScJipobW2WveQcpGA",
  "key10": "3NgajR9mnsuFQV771d8dn8UjGRaHo7yZsPGphB6VdiMwnGY5faoo9gdiC4Ddsv3azomXmDqbZV7z6xYQE7VcoC9h",
  "key11": "2Sr8CjkYCDFePu4HoRirniPQPffxwed6YbVnP9LyvmhkALVgxf62985sGzSutC1Nr17Emi2gdKHLPqghyEM97ni3",
  "key12": "4Niz9nXHgthpXxHTGhiaAmXdXNLHtGcCsqMsnai1Tk78doEum3SQFvQ55zcivT9kQ3JFYap2KtuLzy8FyVtqhAy4",
  "key13": "3ZoaTNygJgQdZBdREoM1riwnAEibU2MVByWviBMrgdgu5WvZ72eQ4YMRNYTx3dEq7boaLKHJWaye1VaVfefqykR1",
  "key14": "4WjPXKuMKdyFKaaFvWzpVgSMgn5CdCN3hrpL7z5mWcT7pZ8CebLWDAxSpkR7txHffi3HiwGvN9fC4HQto6gTGLPb",
  "key15": "2Qw4nCUMAB4PPkKegq5RoCjdtwZNVfhcxnRyH12dfaHzRj8mjLjYZgAaMyHcczyVED3V2wmBGjUALeGX6Wo73Z8W",
  "key16": "32SGE79qXKZEK3L73r2oeydwEvJuM9gkBTjT7eRsBukWxyhY4fDhykrxRpNmkYmZr3jGYxcusXniEUEieKoPYEKy",
  "key17": "4J2E66UvQS7g7wzRiLuaxhT5VSqMyDPLvtRoBdVXkp17xhSPP2m97jn3fQKwJWqsERQggTKTwpE98k2s7gKGp2fe",
  "key18": "5epc3JB3pdidYEjUsTeBNCjFtZQyB98K5NXBmMZEkmr2mUMwxpkRQiFkdTYChQhPKFmNM36w3YYwGXUd2gN8k5Va",
  "key19": "4CeZdK7TQdDnczXE1nF2sJiJyqwbSJ8iVfgepiuRgKxaqDDyG2meBgpupmYtx2AnCPnvtvG61CMVKRPuFC3k53Wn",
  "key20": "2ahQiMcHGZ9zYpXSihgkEv7wj7BP4xttWN58FYBvkcangTN55a9sCmgYWkupdoJdsdGYWf2cKGyboRnGBG9wvkj7",
  "key21": "5KwJa8GwgZajExQQyDKSW5yNWEnf8FcpcGyctmHgCn2FK7aBXQDBUoWP2DfsPsFoNVJqeYsUxFBVvJvNgnVnjCk4",
  "key22": "2GiTr2Qd33yZhxXNnfKeUBLJFPQ8twvZu2SVvxhL72gfESwS5fdXgHhLdeuBEkeLy1YQfMCRA88bNKSC9rzYABnW",
  "key23": "2H5ofYv4vvABv4q2BSrE5hhC6aa7QxN9qwFxJrXcYf95eZnPFDUUm4CJpBmjsmDzwUjMmZonTnHUPMCfpMQPA1Rr",
  "key24": "3xxEG6xjuywop8Y8Q3Wg9WuDZnkffp2hQVZytbMRKHjFejaxkeLEu8GKZFigshVexX5eErdTsi5kFsDf86miZq9n",
  "key25": "3nkZD6AvdX3xGWaNZo4AgyautHcxj15dsMspFNuBe8BNPLtC4SiRAq8ZN1nvGtqkFhe3EQKj4wqUU6b3hFZSpBZX",
  "key26": "48YwoYYfws5U9au1Z6pvpMjuUDxvi4d6VwTn2DSCzB57qusUfvKhvaY1ypuQr373JGmmFHVDJGatrSmHuh2uk4JH",
  "key27": "2DUycdNrYd5qg92t8tYk3zcegJY9pmWbWrkQxdWyjQEfgk5FPJ546q1Kqixru5x4Ux42pf31mkoJ7YY4vhJMrrMn",
  "key28": "4Nx55pi8PWcgxbkN6hd9EH7L87BJfLWmMA1Vu48qGyQqDvKJBWKYVU4iFJCJJJqGr9xrVAEWQiezT3oo7kV9CjCj",
  "key29": "4x6u7tgYTW4C7swScqAnUc6iJSWqhh5eh2BhtBYB7hcsw4dFkrYuiSWN4EYewCxH4Do4ZajFx3KJXE3yaVSeTfzt",
  "key30": "3k2xBosUwpwzvpv3UC6sNSJZywuMqYp58aNQd82uce9Eedhd8gM36tBGuPk3SdhcjqrkexNCKSgQWZy9yjuaezKh",
  "key31": "4nggqnpb4uiDpHtTSV2psSKzhXWB9wC7fVk1sJEQX4pGfVRrJscx97SMujH4q9AqsQvYFzi4pTos8A4vpVXtVHJq",
  "key32": "3v7LHY9LchrVPrWPd7MkQZ7VpzgEVmMC6v9cMJXQCbynh39rrdEWXMxYjgFGLfeGkSWwLZASjfitKwSiuRvKk242",
  "key33": "5187fVKVA2KW8boakK5UCFpzcPhJcmcN2uhRzBvTwjX9Q8KdkdypjuK6zQyQPexVsdXmg9qNhzyidDfApPhBsHtY",
  "key34": "5ts2F7HQxzNodXJryEV7NQoBQx7RgSuap67p2ULxgobSqnXxLpJVXo38Sf359LMMkJ37Bwh4F3gFaV77nKD95yAW",
  "key35": "4zdsvrre9KqLdDC4Am8Jxya6U3Yvck9ycuVytoBu11Sc66sTk3DyZ9xnJiFMUTSMnjSobh1xRPFXzsmmTFGNWNaj",
  "key36": "2WZausZUmiBvRihqRszeDgBr8sTLGBuBN5gpwY8uxfQ6Y9aBaFtHZv7k9e7KeQozLnaW8Sw6QT9a4H2nUKdB1kc",
  "key37": "2GF4dNM3XK2mRbjBgP9fuwJ26mi1qPpyaS9AaNYQq3e6xMtVmUnERxRBeTdAJf4gMJ7PgSKuQkaZskXCvfHfyNrN",
  "key38": "3Rg9N8wx3kKVbzcAhMWoKDqQ7bhvGeyGKAVe7NzN3Xst4UDvsJzFMA3JnAKTStaV1Tk3CySVC6T1CQ5h9kyy6Xrv",
  "key39": "3JHQ4qVNcWq3FQWj6PmCCniCankfgvmbZo3LfTMpNMQXBoQ8p4k2D2QMevR1T672hoV8FcYWFPZ7W95VAHy8BXZp",
  "key40": "3pQTGRVRTkZWajpeZ7Fyg2c4HuA8y129JxoxZhDDScNaPTpsaqSGJ9KbF8VEsY7aKtfU6v2wjUBQXx9vggb7VkiL",
  "key41": "2Yy9wNhphTKYsWhCgL5wM84DV3xoRzZaY5ugnzfGdnzsEnPN3XxV2eZCyYKaGXL8VGHawot1xhm4Y4KyeKrK4GkC",
  "key42": "YHcLWS72YYuNavssaAARqEen3jugm1RVFd87Du8LqgrJ5cpykd4f3zDYYTTE5Zv1hQeJ7sxG1LffxN9RfQ2Qakc",
  "key43": "mESNbYb5NQb17weh4LK4FY77qFrqFfdtyd7csGaxQpx5a2V2fbVvjSfrcdCKTT3HbYbwnPxPnLRUHxomGgCa1FY",
  "key44": "3p2B46iNGHY53R17DM6jUFsKgqJNt5bYauAUHbwZQxAnkcKtPsVN7jcsAGh3TPYxs8qik7CjJh3AWyGYBgc2hXAW",
  "key45": "42dKWMyXqxuxXRLZSueLvKdLvkiXSpkkGdqcQqcXKicVcSojz3j6iC62iM8Dsn4hvjcGa7hnfsmXtue1TztkZK87",
  "key46": "5LiFBNa5bfgeK1fK9RMinVHmp4gRPCp6oBrroJHT7VRBspi3QjbZd8CxKGCxBFZL5r3LCxzgr5moxm471QjSZYvZ",
  "key47": "3dMfWZopTYu6ovsMGnmSCemB5jstJARbCBDtQ6PG9V2Cf85aJydx5mnReqJ3yTzMYkWQjgK8LgX4cQ1s5xoMKXRa"
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
