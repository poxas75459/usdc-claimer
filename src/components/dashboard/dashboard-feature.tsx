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
    "57uXCAHi4RbsE396uDtxW8Z38c2NK5mfeq6v3y2bEA8d4NeqVQxRR1W1dqZZxBkCTvczmbW8maV7q4XXuxTZQmde"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48XxB3c23GNSEMDC2MHvjxBVZLhga4jVHFqhkdXoEeqQZcwxMj6MHydTQ3jbaAVqSH1ybiTZKmPgUYFc7NNnN5wz",
  "key1": "48UXYLYrfJRUpuBjYWYJ5b2SkNKXJzeN9LnaKMN6ZvP493ka8BZc2Xtu1k7jysXnD7ZYbujphg1TdvLqfeJpePpH",
  "key2": "SRrJUbGPXEoiZEXqjPqURfCdX62aJNt7ngzMLdDdYmD3ueNN7xExUbzEzrq8qiGG4fdQnQQaY74VUemKoHBo6uw",
  "key3": "4LvR4CXevrQz3vCghRDwZBPT3PYmDFtVsagjzAzbdSWPEYGL9p2wUFoFZeaby3CSx8w9ZnDMSaUUG7itdDUm6D4G",
  "key4": "5xLJKSZbUTwGox3r4YHxEawSpqYwegm3TqY8nWcVYkgBVJwWPK3eSQxUqEfX2VYhjgHkyDFzBv4zY1Hsmh6JZZxC",
  "key5": "51q1xF3iyvxqAAdhi9dpzNwajNfdf8qPZuN8cb7ugcez9ur2BsJ3nwHE1AYSMBkT9C62dUWH3w6Hp98aCJg5LhY7",
  "key6": "5RepXgciNjw5nb6t4YS2yiSHdBD5PZ19FP9NbAXTDaPdk4PKgnQUfM7EdjAC1pEF7eCt8GXSMJyeJj93dQXHBmAE",
  "key7": "3Diutf2mZ8dmGAoEoKNgkEBqsmaG91Y23HvkJSsFq8EAvkPUZLBFVSTJpNVbghfzwegMBcDGtFA6AN2TJDAWThDt",
  "key8": "5BAMbKypPSZ6v7Fu4kYGpoofJ1pgdLHGB9xTpZYCHBH98LuR6G3rev7He1VZTC4s2qrHRu6A4rRYVFrqdMV4ycA8",
  "key9": "wrZivnn1bNhHXwpLiqvoqvJWdm5XBUVsdg7Hwks3y7nTn2yh4UjuCk5ckQDSJgthFSAmaJFv7W2PuUdTGrqpj2W",
  "key10": "4jpppcjhpyfjMk889cje19b3wi9dXSuscTzYRZeCarzA8uvLNgCdh1xVjGqKoMGGEU32C62t85ueanvMKhoB4uKi",
  "key11": "5kwUaeKCfccvRDbmE9kLr1uMaEGATbWrqP37qBxVWAvmQwJbDLUZwx6C61APKkUJdPAocE5wKtszZckC4UUUuvVn",
  "key12": "4ZaaWuPY9eQjq7B5cjxw9xSDAS7PD3t7Si23LXUfV1BYnbRsCZ7U8vgudEwSzRmACMp2oYkVs4E7f43ap19v9EkY",
  "key13": "4JgkhtKt6ZYoqLD6U7FAVrHPTiKGRWvBSxYkuKxEhMXAqyHm63zcQDzkqBX2V9FTGrezJYunWGZd3KVdNo9oKMgD",
  "key14": "ibeFZRwXL7C54PqitXDUkFvXHNXwdk6kN9fdKmReF8uVbdD6kYyCE77VxtUQQLzGcQZq7RBhPfd8fux8Fdccgdp",
  "key15": "2deT2W4pXU28GgheurKWr1EfJms6MfSxZFj9LZ2wgCg8cSfiFKscbvmnYqKJDw4Lorh7Mn2wSV8d9DM386SGL1Cw",
  "key16": "2Nc9bicakdHFVNgbb5fPJ9JSCxkdKyf27maoY345CtbHJ7bEZvZGSi7TSh53NVuaQEKXWgJAPY3FjfYyTK3TtvAo",
  "key17": "2ca55DpkHDeEhEQud3tkiQkjVm9xENpQfhpXmK1NzLLfNBW9aCWFKXEEzmzas5jKGtWGv1L7cVNiDAoZ86Nv6bCg",
  "key18": "tNE5xcjJwGHouVcwt1KRBrzVTUtEWeDzCDMnsuNfokqv621XKFs8jnAXwAFJTykKZX2gSvizd8qPQ88hfZBfnrv",
  "key19": "U6R4FoFKPz3rXExW4UktgbtcvkWrpPZ6z5JXhfP2Gmbj7hwr25owxiZmdJty91Md2tmhXgMxnT4DdWkEo6vnDsB",
  "key20": "4AFBy7i1mtCrGCrTeJs2BGvRfZz3RH4DoVPwUj9gMzN7nA6wftQ1bfyLrZLddfvYbHgMr6uRRSo1Cj4fPfnTMoxP",
  "key21": "2LPyPBdfyRLtwYLcC7pemonVE3jaA2sCUxLPpefHGEwQRb556xW9zF5uSJZwTQqrAJSHxEPNosrPVBxj8QvJNkK6",
  "key22": "4DVo4ZYhwtPf9N2SUC1kxgLd4yri6EhX2LfNLNweEUAEJredeAdFUoChxNkpapEaw2serGH5cMKo3Koxo6Gm1Ptf",
  "key23": "54x2dAvNKcbicZbJLEi7KbMKta8iBteUZpac4WcS4DQqLkhQde3b8tU53yW6qJ6fQmcGfXET1TfePUeHxeiizh9D",
  "key24": "3U7hRLXszCBqjrRA111SsDD8vWPmfXq9aZEeEooNFCf6X4htbDSQUeGwB84tH1BymeuVTxWRYP9nV8UdDVpyKYK7",
  "key25": "27WwWZMSzHqt2iHLoPpchCtJXQMoDYPnNhWQYZ7Y75jjz4fxuCjpwTidfVzo5ZCK93PWPbzkLv5DFZf1KTdXMsLs",
  "key26": "5vBH6nzufi8iXPoPd6t6XvekG5cfxHYcA9iSuZJvC1g5RYKQnvMp5GTw1hFeLfNBWJ73ctsTuMgozie2jpbUSL1F",
  "key27": "3bn3MVkjQJcAryRYPNWQRbitLJcxZT89xCBq6UEY9RAWS5m6Q29JKmXk5yKcxDtYmAvpR4DrTXokvMrubEEi8b9u",
  "key28": "3GkJmmnBFejAbVZfrfFevVj5tBwDguPaLc5aLFau2E3dK3JidWoLTA1osTdGgF8hBmWFhLAEzpTKy3R51XDFpkpB",
  "key29": "76Dz6j6W99wjjXqnidocQ1URpZruuHHB4Pn6XbD49qfhoefFmdfsKsrud1Fw1TNJFhGrazLCchdTd5rXX1tuNy4",
  "key30": "3x3kpeHSwUCZm6e5q3anofwwDpo5PeohPUzx6oVccy4J5wgYDVvmDssPQvim5Kwfp1GR791GrtqhZdwcq6BtarGr",
  "key31": "5Jeb2KcqHuNVGGasMdJks22S17kqsW6zpmWHaDrLi6USmdEuorTSEoHhgFDu2k8hq48gUTiYQUwcAsjpkg1cKLci",
  "key32": "64s9Q2QFbR3TjwxPhQ4tzktWFaaLgssseL1y8KnTy2ZoCW56K5CT8Wvx1K2EZKLZnuZiefnEdmiXHCERxxdafavn",
  "key33": "TEnAVsRMnMWi4PN3FioeYHQW8c8MCtfK59DuzDr6EdT3QSggJSrCHJXDFReWckJGpWcN7NHwUsUeezHwA3pRNMu",
  "key34": "5MBcv6i6gCVWupDWUnvDXreq1jiuo8EFuMFUbmCpcfBPyY43RDkdyyg5UtLnw4dyBJCdizRbqTpSRVAAA4xTcraU",
  "key35": "jP2mbgWk9nCosNWCbeWSb5Gxm9Bg5XHm1yodGd9NEVuQz3JYzqYnnYwQWew9PQjs5Afii8cjBW4zr31HWoVJkFB",
  "key36": "3CNGeATYgs76dnG43ASdBeQ32BHNsznEWYbvqihbbPDJQ3bJKE7frLAQL7RJioC1QytLsVvtfHPHySKPm5PJDRS4",
  "key37": "2gWoWrqGx8aH7ZKbqfT3fZUbm5kvQ898afF6X6P6dDjKKtG6D8KTrrd6EsF8q2ocQLYHghLTudD1oTe6Ksu7f59b",
  "key38": "nMaCWMyMoiNZwAb16PVkXD5RhdcgbBUBRHaAMfa3To2vzZzYpheJxwAus4dmVTXZ2N8eE3mfxJbQpLFBiDooUJS",
  "key39": "3SVh3zYSv9cCUFJwWp3W1XWaNCg9p7FrdrFnGFU8BVBQB1dZmV1MPhWYLJAb2b35DWiZAMEA3sxmjUkRzvHSdkK5",
  "key40": "5cugMUiBQzaiVkLpV5dHhx41uGQB7EyJbGzFmsgF1tgfhnGF1nqindqXdX3ysGz88gG4nig9XweCVm5TYSGCRFFZ",
  "key41": "2rt5PfxGtXzLAiPoJEFv2x4SCoAonZXFGqxWM7bMpjeopVUBbx34M66p28hiwopmBMxTTRfi8sv3CAG7CgD7eZXF",
  "key42": "22dHPrJLUeXztvvZ64WNJMSmVEQtvAfsorp8iSrfWWmhcDvBmDHEyUzaHQeGRh394nX2ArEFtUn7VrufXgevx9ac",
  "key43": "4pSuxChKLKinbYHUt3nwiArAj9kc84o87crYzN79v8cp3waELKR3ujHhUWcZAab6RDXfV7VQSthywiBcbWwK4xG8",
  "key44": "23pYRLQ1CwZShKrXgjBw3GuKzacGASomXZEg3GUcmwge1tCVyAHpqyCGb29wES5zjzovZz4VQhpqpD1pQdVrK5Tv",
  "key45": "2naSfXTsgJnAEgFB9eD3apFrxAx4wj9cZzFnUN7LDc8AQ3aryTobrF93fxySWDRosio1rT4VcokLAAgANsnJA2NX",
  "key46": "29nMwE2DD1ZVB4tDJau4ThYzVdtk2jF2ZB982gYUwNW6wXHJfc9stbtgCdkJH123tVrJWPZziAxkoGExspLoy1V2",
  "key47": "5MqyEv5sGZFSDVNqvjK7Ddr7gpMuEii7QMvPBzFGKbhFtRVQ6iYk47J8qYFVs6SjQoiWYF4RJbnGf5v99nWxes6V",
  "key48": "4udNBMoQFa7CA8W2F4waKDJnD6bqCQnLSZYiiv255ssmzyEfyMF92Psmx4zauxCX9JV9p3aNtoDMUk7Yx7zvDjmt",
  "key49": "414FESoeiYZk4Ny77RbA564GuGvaj6SzJgcvfb1wp5yXy5tppbZDaLmRkDBxUwNK2Ubpd3ZBpDaNe19NrdMfAinM"
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
