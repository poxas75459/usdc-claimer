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
    "2TNrcand9vQxZq1WkKvepnjMca6Pm6VthDWCuteHAAbPTWnaevhFtg9sratQVqkhexZfnGL2TZ7svZQpiPT3MtKf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pc3dVCRnAQ3c9KxE1iVinzgJNSdKgf3DR6TwCH4izmeCj8rWvkMqMsQvMujBQAbgGdDFD7nuP4hVH4C2EhmU4Jx",
  "key1": "5F1hBL2LQJjJM1G8qJLEmcfkKVoMP1gbbEaCJwvCwLX3btETBiNAMgKhA9LRPgvbrbo1nprKMFbKPVWTqcZsUNXY",
  "key2": "2zDX133FiSRvRmFepcMRoidjM1kGcgdRkNuK8CJizSgTPNQFinr63CRuJFRS25zYLtVQrLP8DQ3jQPcqfdWirW3D",
  "key3": "41eNjLUQAvHrwKQLbTgCeTFGvUGYJp8yRh5RAMRSHFZE89fvJdLuLkLJ5PYz5ze5w9ziYRWHuVeKpinDeLHxte4z",
  "key4": "5HfUeVfZopQsB8U8mH8SwkKdsKZoFe7gJvahSaqsV5BJJ7gFyxA9gDCMSZVRuwFZrpiQ4FhTsaVahuLyTqKsQXZD",
  "key5": "4vNBrBBkxF4ET2tzPRgFsqZAK9AdvjqDvxDGaoBWGgSmiGKPx2iW2XtpSnKJU4fhqg6QNFhVdPjXUDAz5J3aYoJ1",
  "key6": "2QPkP3Pd9mQF8ePVUyi7utfaX5BZyCkQ1gJe4TRmXHNpTLEu2CR7DiohBh9jxTpPiLw1GvNYbbnTx7yQ2eW4XMd6",
  "key7": "3g75sfF5rrwcsY9akeAnZizYNoEEY7LAxKzmkbc5bPnALjV64qCuxRDMMH2pW4mi7S14fbacPy6k8zY8f8GQHtuv",
  "key8": "5kEbjd29En2ntTiKCKHQJJexJHnC6J6Kh6Z2TFTvix1RbYAQwGNMXLUnNmAbqxGG4bQQPJXrmjF3PmyhwaupiMGx",
  "key9": "cK1iT3FVNYxrrhWiwkJy8gg1rMNmACNN2Y7yu8HTtfPG9FU5PGjZaRvEeNiktvMjBK2wQ7Pmj3XDiLZciRs9Zuv",
  "key10": "3qV2mtkSWDy7DkM2DG9UcmiEPCktYhVBWjhJVJUgQPgcn533MAkhZ1xwWFmCzdK5kmGsGEKfdGA9keXnUgWfhyF5",
  "key11": "NGem3LWZ7u2W9oPveTQk5MFSt2WGjyWMNbcujTPu822UupqkSvr4rZRbrVJzmipJgTZXV6vsNNa6fHvSh3BGCRx",
  "key12": "51GmvBHdPoFd3Jo9NnuYzGbLrLcQ7LkbRDgtPKFsomW6kjb5sRKoByjMCTjvj4jXc4dyGyL1BmHktsMqd6XX5mc7",
  "key13": "Wavx1KGLapcjWBTAgMzrkn44vGodJ8bwNUiWjLkiGXgYodttQLns4RLV2KVGr26zyQ9YjSb1xSsT8GagVswZYFB",
  "key14": "4QMvNrvzcyBgJB1AAvSoX446GGA2yZirS6r3w6caA32ZKiY2ifbGkt8v4o9eqzCU5UnRkuR7WBtPxvmahzgeLteL",
  "key15": "mkZqhvKruTi32ac8tMvrNfGsQ2fAYdhTki2dYAXfAKJJMMjSTvSKx567W5bJuDn6R2Md4Em9LUQqPQ26kWcj2dP",
  "key16": "26Ehgu2H5biKGGiQP74wa66H5gzGzyWcGd2AgWMYKuy1NTgeeGcPh65wWFU6nuyEBKDutgd7meg7G1va3CYJYzWN",
  "key17": "3MZH47rYy2s4pCD1jWdDUKt2YN8XzzVLz5DWC2Xk4iivZvZRpHBZUbEEdQQqxM2xm4VHev7PXrkubDbKqu6bqYLg",
  "key18": "251sCdNSkQfr6qSTZpsWfjyueQzRDwDgNzm3xLPBTwHvMQoYMwmbL3Hkcoz7ZUN6tCu8yjhuokkWprM3LFn4yBeW",
  "key19": "3ihK7rKKYMKFZiYhPQgYQCNsWYM69QWDBUxohnCMGddYNc9Nb4iDZqYgxHGVAjt19T1fMcfDDhtDsKTjE9U6XFEq",
  "key20": "bJd7cXQNwnzqq8g3iL7ZVS2vxBZxT89qFa1Tz3HyGiJGPH2or7nhb5iarpvA4MfiCEokELvXh3RUnZ7x3wA7kuz",
  "key21": "33nSeTBhn52M8RJkDEp7KuixXxZTAt76xaAagPttJdiriDe8GTDeGpjwd72Cfyj57S4UP5SjoeQmWK3ceryqsN9r",
  "key22": "4xuyQjXGwrdzGjM7kGwd99CGae3GKxqQRhGoHe61JJFfACWEWd3t8Bs8T7LUZrxzW4aEMGcwPpLt1eBGG2n7J8A2",
  "key23": "GT8CWPU3mss1NK9mD8SF4pbMMebRVFmEdkcBXVsZgxVUWTGWg5AQxHJxNyLUxAax1AHCuPSnQU2ARSkcsmUvJYX",
  "key24": "Z755YSYiiTCht96wjbPCKPkKFYMzHkg2Ei2F164CTMdikFKXrpeKwryUzff5x5nKhm3LVxmHPbhU28jwU38yG1V",
  "key25": "Z7HnuJPC24PtxXxaDrTZdLEBHipTz6WbCBVUj65UyU15D4Liv6E535FBGTEQhqU77ypGw7RN9AmCaDvvfcXVxVe",
  "key26": "2LwkTPbBEWf1GaRjtdfXoQYbSb3FM75EqwV5i1CQ9YK67QJAvpuobptKgd6Wm7fr12zW66ePQbUhSg5jgcShZZnD",
  "key27": "3AwUXZAuPzT6qm2VbyWbXnxe1vByiBMsn6gkxYaNXb7wpsdrm4fYLWoNLHFNRmrfnmaVpL9KKtzzZdj6wBbZvUUP",
  "key28": "4saRQpfiV1yJcsCSpjTm8ZZLDuzcLhDccSgNBoNNoSVG4e6MYQfmDTDwgSXgd88shBBg9zPauzGDb1mKnqW7en2Z",
  "key29": "2gZqdCmb8PbjML5hHAbWGTr3ViMTDrbvyCQTAr82VdqykZy75avkqfRtYrxwyt1oHcD6WY6BEuBstGB2tgJSL3uD",
  "key30": "2uW4Yd69zVQeja6KChwpeXoU8kQbHCY7aUXpYPs2RWiY4NwvtAjrcd5uMwGEJ8UfHgp3ie9NbGMLimNq31HVdEzZ",
  "key31": "5c2fS9wJWXtoyWwzNmyLy9R7XjfP8UTAE6QrzhEvq6LC3HKyz9rnuzVERUNajnMuPfVs8MVnQkv4qY8Jb1GYVgqW",
  "key32": "3yeegdix5FLv1n6N8nDbR5ui5q5i4Hb8nbn1D96gsGERwZCRPeoy4JAL4GN3J3Z8zbKQLvYzksDo6nvJBHXstAEb",
  "key33": "5ion7sKAiQ6iruZVvUxVoTavofNBXUbQTtEXyiK8CfV4QPR8cS9Jp5Ux23FRURRxHUcWXjy3hkaZDGPXtcBPB5Aq",
  "key34": "2AyCQe3yPU3SF1YJLqmTg13y1bMrvCYcXTLxo1RHyED3cwsYinz9U7RrHvJFND4ySCvw3TMY6J1sxREcQcvPJg4e",
  "key35": "2bjmfqsPgaxGmLPa4SSzt9kxWrpG4eK1H8tYic6KF8CRpXdSXpvXyGPnSGzvudGm6kngArGZ9KPRjDEWzouHvZSk",
  "key36": "xzquxSyP6yKXDPKEQiC9FsyxgDdAGFNuqysueGo8D2tfBzkzGYMzcCTVpdkotp67Efgw9FAa4XQeZ6mYM2bBpfz",
  "key37": "4u7KfbT8tCgiHo8v1JwN2GHdy7zfs98665tqjSD2854YFwteqVepfm3g98LVZMAkb7DxrQUKF5SUziJoyzAHwZJd",
  "key38": "2aC7aVUTum4Sfi6RzZ6oRQibvuRU5qnUcq9Xgbuj3zzRpyR5ybzupXAa1H3XFynytqxCoShE3VACeTxH7sEdJN9R",
  "key39": "uLep4DpaBbHKcsLeRhVFGjKycrZqUAuVvbdAxGet4idvsJVZsxxfZQq3vV8fazTv79UKwPNWdnj38bQQ77vytxP",
  "key40": "3AJQ6krAkbxWXrkNo826mfjFvYFr3hSgxEG2GQCdkTwgq8KRyNpWzzEhh45A8z3Dfuitw1VUzxvC5Z3Mq9jwHHWu",
  "key41": "2vAAq4SHt4pfC8cBFgo4X1ghT1iZVtip8KZfQ3VDynnuvWoMCcjjRqXCCsvDuScdqFwUn294CX5bM6VJDBkwDLaC"
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
