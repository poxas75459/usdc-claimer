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
    "526vaEssvUjnA9Cb6ujXpFPJQDD3hrGLvEvEcYFGmK3d86aoeP2AwN7vpvEMqSia2SsonDUmNH69uTzCDqQKyNbf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LmB9sHwBmWJd8zgLtVt8a3eSNxqUSNayB3H7uWhbqkmXYj2F96r9eptaM2xFV2Y5zSMedkKZTfXhhZbHLR6rLGP",
  "key1": "56Db9tHpeW7mNcZ8SBoe4bv6rE4Tc4TLAQ9Wz6VspJAX31Cvqx9WboBazkh6TN4RiPMa3GYKS3CFf5xU4KQb4E7j",
  "key2": "4RmL5ZRjEHnda1Z4BY9yoMkAo8FGkYC3Wg3J8EAn1PJz3PfzSoS6tYiC2FQsBTrY8FhrHK96BNWBDSf9539juMsV",
  "key3": "J17dDknWSdwYmEVYC8xEQTNqaEMNnCBLQrJ3pxTzRwTiHSYGRxVPQqsBJLUtwxrbzRfyE7tqtybJd64kL3ST6or",
  "key4": "594T41m4goyfoaeZzUT3bidgwSDW7pmq4zhRT4PcjNFhUzwa1iq7UUJ7ZQb1Bb5ibbQP9jYq28gFYjMaDVufdk4m",
  "key5": "Dg5EtuAPSiWdcYB95HTdQZyFWPPLScD3kUZPEju98QhDqLr32PZgQH4xVqLWCFszJvxZY13N4bbKz3yhTtbAHZw",
  "key6": "2WEpztMxfuUm1p9WY325d4eFvK2XGPukzZoWRYBKwWiK5pDgxMmWaHSJg5bZewrRhnHRRwPQz9MbQY1ueuCaNyT1",
  "key7": "3Bn8693FGZQFgKrJte7nYVJyHkbhAWPu6JxgSjFB1F3npUaNWgo2jF5xyxqXngHdjhwge2FSAf1q7tAokW9mpmJX",
  "key8": "65hJtZF9yYuGov5zUNn9wKHT4LYuAvBjsbEgXYsdARuXf2o8bGVDtS8geemxJMcP3aPE1gibC4XVoPZLgxY6RrKH",
  "key9": "3hLVyaJh1tddpAhuHeTd4Tb1EoFqm57AqcrYXEgpxhvcPobpCWApoGeRVPuwfe6L43Vj4tmSGGqyjSQpq7GxJorM",
  "key10": "3XtkXqaSGmdWFF1otoJ8ZL8Yy7AP4MfN4yUWfMk3oci3KLKDeM3nRF6bomxLa6PLiH2nYUDzvEBmuQXbVd5u1JQ4",
  "key11": "4qfnmZ3dbDhFi7h63StTdoU2J6vcS1CiqAQFZ9dcwT58pe4kLxkG2kqQHWxKyyREhRRNQiX6FWZkxLXunydy25De",
  "key12": "2u4XnGNicGPdSdp91Nh9iBQajuTYAaPY9NaTZpxWDFBrR1RadpqGj5Rsjkx8txyvM3otzju1FGTJ9b74mmLpap8H",
  "key13": "21JBMPSH3dAmCJVbfYEKfgzNGwWuNMVEQTVhwUxMepFBG1eBRDJAYScCnDqabpEB66rBsNCVfEEjjh4tjTWm865C",
  "key14": "xxs2ZNivaWtASKupGnyvSdvjwSPoFLggqSCDsV9XUzoHwhECjz76VHyhKuviw7jRJFJbGUW9YtkfLUSnqfcZJAA",
  "key15": "kzcCpedtiZNBKXctyDpGgdPAL8McCpjQFNcJMVV2ANnrgHrBL2i6k6qKhN627xWuYw5xVDUzxykjmFbxAo9tUaR",
  "key16": "WNoyqU1yYBtV37sonjraZRSdUefzc66xr5x3hTbtWyf2eMAU3zCXxFW9cPn9oGZjkXnbMedxoCUCEyLf46uJq8s",
  "key17": "5KMha8DU87GxKYpSHtbZsPRtbHQuiSsnSGY3ts2GAAVFg9zwXZ2PErBaKtcQd2ZHQfhfq3hhdYyb1c7joPuRsUQS",
  "key18": "5wRBSuHYgLzdY7vigDaTAdvjTv6pMk5H5scthREQotxSqQzdBjdso22pUq5DiedoYNEhPcure9p1NapBTLp3H8Xq",
  "key19": "3BA4K7xwVQbv5KN4zc1Ay8Su2nexGJa4gyhkDZZgDGLnoXeqctJE5JFQC2eBCnRVCaxFqQBPsgzQy1CNF7NugcqZ",
  "key20": "3aUGvfJyMdfJiz9iweVoNHTFRgdN3wCB4WRxxZ6hhS8pTUCpeaA1uxLW9M2HB9hbRm5Vnv2nubA4sgz19UEKQWr5",
  "key21": "492hhe57nUtaKSPBGndDgdyrZ6FEPLCtVdbx5n9kK8Kkb3BGUJRKBbQezRnF8qu27X96XhGgtYyqgfSH5muNDZyv",
  "key22": "5xaAQZ8shdfxSL3UmCv2t8EZddpEsy3KYvnGez6yLUpXdSymqNZcfRhchZVCSCo3hogJf4fNFvH6pHaVPfUzvRnf",
  "key23": "2Ak3U4exQWHnQ9KY1Ge671HZBixxh1F4To8wQ4Nsk7i9bqZJyiw4PAXoqGvKmDQww54fj4SQfY22a8NqcGZdS73s",
  "key24": "LDCgHiBh1tSvmta1vC49fr62x9huGG3VE9zGb2ZhacLpnoP3syC9aXdjMxMbXeoVFpKGGRc5tsUnAWEzUpqPBXh",
  "key25": "25mQEcY9p2jzL3UVafPe5KEpbRLE5XZqYLLeUbVWVhMiWzYcQrDj1dWm1A5rQUBAnJApXZJ2P9mE7hKi1x5FhbLE",
  "key26": "39yXiZ2dZtr4uoL8gRW5NLVPVtyosKwUNeAaH3PdfrsZT6yR5HiLng9LSTPqqHeCRJpiZszb5QkeaKuZaTwwFJW6",
  "key27": "4DwjgLmRqh9cVUh1f2ccHTyxQUzHCQUoeyifAjy8HK4NvU7SWJUEjVrNTHMnB8MGMb6UNWnV8Q4RvUDF1YoV3ZqE",
  "key28": "2XX4pSECmV6h7x96Dg27CZCki1RL8MUTt2Hss2vKqadMYtd9H4FEJHoX5ghMn9XpmthUDVT9Pndmk8D1rchciLQp",
  "key29": "4jf7Zra5uGRrJk7ovxB9r6ZqiQGAbByosFTrFzd4mJejxEi8RQMZEusoxwNmAJjWx1yJCyWNitBHDLNGquokLwne",
  "key30": "2yQVLtRH9whTr7FybwVrqJTSxsXisDb1oViNpQn4Tx3Tpg2deRRC6nawbzHabUTnFjxfAdX1AnUbdxz2sycamcJa",
  "key31": "2bDwnR9JwiE2fbZBVEzZ8md9qbttxaS5jGVCGqnurRWjYQpdMgSnukRfU7BMxweCQzwBjg2X4GfvnpvKMqr5cTSJ",
  "key32": "wfZERnv29tftr6AxKWi2b7hme7bebFthhkx3iWvwZXWd56kXjsvZGpPok4fvGJPsvj4gLsWU6XPPzj6bn3Mw5ye",
  "key33": "3iYh8sSFhehACrfv1qBocyrLuCMETN4kdJJbeQzeDRGHyyjnCSDVKJoWTSGTPFzUNrcgsJ6L69MSUmk5gsh25Wug",
  "key34": "2KsRrULkraiQmdn4LXF4Ud6HqyRuoaC2Tkf8C1JpFgDSEsRhdFZMgLcnaiSLbUsrnHrpPcm4bR2ZpJ7gXrWTXJR9",
  "key35": "23VwX2KrZtmrfpRjFtC2STaPZVbzUjgD2ryschxjjhxhJZ5ucTsL3NfxaoEC2CjQcWNn5nR5pjxB9j7WRYVyMDYB",
  "key36": "3xNYGcbvWZ6CbZiLAuJtaj8WJ1jQJsGkvMWr1a8d3K1NUth8cekgg1T2QVVCNPAHLZ5BnH5NWFLQNCvZdWcKZEDY",
  "key37": "ouaaMuPZHERMCvVDaxp3ugDJRWMrSt6ucX4ZLXWVvM5twBUdpb6XG9QHQSXecW5MoUTnQrYnrUMtsMcC2kvxRNu",
  "key38": "FZT8xf3yTKeU1zhCRMudf7aHTfipBRY123WBsxfj7Bxvj81Vyis7RTpWKuuD5vKYos6q291vXb5BStQx4geFcb9",
  "key39": "sFeEoVqP5DGSGqThhrVFZpUsVLRaAmtHUUEzbvwNo6RJsFTxoDM53CeHhrbeBQPcL9rfpdooyGpz8uAyGEBhNnx",
  "key40": "5MsNad7pcRVy6w2mAjRzofuHdCMx269TQ5tDUJHp9T4LfsVRKNVoRPjZajG3VUqD3WofMD6xrVA12oFC7fyzHwKZ",
  "key41": "3NZrisc5qGGegbfeLnBE8AZHMxSWuuVxQvNk2aYyFyqbSUz4bXo6wDVP5wovi7zmzJVfwqgH5BWrxUW5c7Vxypto",
  "key42": "XLuqWdiceTBTZtdi66NuHmQyT7ozUPJRG8FcqSwZX2L7jBELJqheM7z7Lvjpfn7j5ds1DpkXUyKYyCp7h6wRJQF",
  "key43": "XJ9F2Lt1Z3BXtETJAkXwyt369VQPVLqXt21NqyyeKQQEyQFjbb4kYgHzZaCjmfcVjLrqhQdjhoAB4kKYxkrPRDv",
  "key44": "4uKXKTRecRGqMX4MTipUjJfS7Cb1NHwQbMMwSvvuZbh37RGtdd8h7yuFys483C2yyxxBwKKCANze6K4DriGEbezc",
  "key45": "4WzaFZRpYQUTxPHPmL46eCpsh6gPoMU7TytK51GHAZwQSxJsYLdAHCGBFu4rNKg3Es8tSYZ7rxF4VN7gbmSnqf7t"
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
