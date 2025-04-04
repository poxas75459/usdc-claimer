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
    "GaZLkvjascKft8cN3TsGXDkuMxH23aaWQXRVZvBqmEywxzdnkof3Cv3P7nAZsq22UmEiaEt14hW2VbVZFka2t4E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TjVXCAhnhHMx4Abnkuosrsw4z6iyy4ojxAB1wmBtzrsCdU3GFNxFhKPQ33NX1SCrH5saRGa24Ad4iEvFhZLRoCE",
  "key1": "2GRG4YEsBBTDQFwC44rrrjV6YdJ6rQfFWyw3sfftG6BgWFM5gWomKRSLCvaQvuidcGLnFzcQsmQvYj5mbSqkX2VV",
  "key2": "2oUAdBRU9LnVmaDJsiKujUpockhwvheTV8gPwxWumvPfWrRECX31Gobp4PQgJmrQsNmkgA5w8LRe3ZpkEirzV3hd",
  "key3": "3regXHaCV95mcEjA84zc5uP8zcbkxr4Lncs4yAZCwKfYSCoV6KUeQPmg733uA2JKssNHXDtxaqFgGQb2XynWauxo",
  "key4": "3WN2Q4wfxhoavquVQkN2d53oQbq8Vbmw24U2YDuorXhFCvbMeJFhpNkMnW3V1skkRm3GdxapX4yk87ZGGTJocjtx",
  "key5": "3e3D5YB1JkojRdwEYU4AEzbwJL8cc6gqquWkSqofeeNkxH1ZF5QCUbTJWDvauRuQ4WZ1BjYnxwPfMvaXAcKGEor5",
  "key6": "cn1i82oLUo5i2pZwfJyMWDEWDWyiuR2hkVpw8bqEKCfv3FZ6FSbU2pbRuhNzFsxmp7Ruuvgg6XbRo89gw7VEdRu",
  "key7": "3HQ5dgFYqibDuFBQkYvAM8mfBZ4oLYBpt9APTs4TrTmyQQf4Z3WKy8b7nYX7MGmfoXKFyfXLYJFYbdk21CUJp78Q",
  "key8": "3QmAvf9dBQgytygZ3cSaepkFrCbPXGPxxdfgNbqxUJE2wPQLLaHCeVE8hcB3VQ7ZqTLSEsckNqTEQRdqfenWpuXQ",
  "key9": "2tes1sYNfupuMNthGWDLMgq4gCrTksH53w7obvYmxQbAUXfrJmSWaxHNw3Y7uNpuUHBpeR1chRhrZYMUpxuozTJF",
  "key10": "2Bhy7Bct77QP6RWTCUMyhmHp3V9HrNez6gucq5uts6kWbngyJn9uT6R5mG4SsahN9Ktw6Et1oqLAcgfMdwEjSSFZ",
  "key11": "5gfdK3p8DUNknnczxqGQTVjLcsR1iKTzTHLg6GsqF84Esd86DrpBEgVnJgstNuHkSqW31u54xRokbP2FDwnh5WCE",
  "key12": "589N8y1584N9HMdNuaaUqcfh59r2dPm8JTWgYdB5WjxshEmmr6xinscGR2cXqauohRvRnSfsxCkWtmBFnwS7aGok",
  "key13": "5TnMTeG7aVfsgQuX4PdJWEpb2kshWyXTWEjk821ZkUueUatbK8CkxfvUirFk4M646k69oRednCyaJ7NfjUQGHGnN",
  "key14": "4W8prNa2MBu2Rugr5oUFxkxV33bNm9PoDbFkbzjMtHkiUcuGQb9Y7inxgb7MdCVyXJqa527myUAbymqFemFYUyzt",
  "key15": "5QqFSLRgnD4zzCgtXNtcZS8qgjCYdoirxsFPDEufE8qxxb49W9LjzdJJ8Aj8Rt9ygNMaDQhsiLnSJxXNZeXsvHoi",
  "key16": "2qaMB2qKD1CRRas3xpASo7CuVBnou4YtZT1hsVi54m68RJcL1oXDrw2j6KXoZp4HDpYvtsHyhgrGj4FTuBUkgGfz",
  "key17": "s2k81p8XxcFufCPLtY2iDG5kNmsMLbLkPzzbwW3U4URadpvtXvGddY348Vu67p2wHRcLhQ8R6GhSdf1ejNsiDiz",
  "key18": "5hH1XxnMnb1Dhtta342bVG9WXDRa3LZUJB8udxHLp89EPaRt6uCqyzZHiDJCawptTTKTAG9Gm9daHL2Jt5RhfDoW",
  "key19": "2fT8JMYu3EMGof6Hvi3GKRinyW2YRBsWxDrwyjRvkUjn3rBhqvn27BBAxcMXpDqdBrhQaY7NocXFyyE5wpPbrExT",
  "key20": "xewcPQyM2S3tSb6vDep8Wda9ncmTJ2ytb6rDJFkrNLhNRKbAD119oTvHevsRnwDCPN3ta9AVcNLVHiuiu9zb2GA",
  "key21": "3NiSE46pxuJUdePg2v8pKDwTP3QVxYVW7aP2MCYedMCGL6dM1wd7QLSWws3BbZ129KqxHnBEFRyb5LbeN38FuQcR",
  "key22": "5AXkGNs6VSUooYRdU1ngqhCNBu9oSQEF7RsPBeKdoHjvgyK7twc9z4oaZGPoN2WGWezMt1pqSL5TpAZvgLx1pFyS",
  "key23": "5fkK9Wnf6mYR3DyWLMC5QymqYQjMBqdEashhojagom2AsMFwUaSHDFv5MLqbiETA8w84rxeHr38XQbY39dxtBhbi",
  "key24": "4b4ct8M6Z7yXNhLgEXD6Pr982BiHuH2d3fwsJwVWDi3McrccQJ7a5A1kT5oRKiT4nq8YDfney6JMKJa9tYgPiyEE",
  "key25": "5nnJ663CLKqmgiVfNhXwp1EYsSHD6qy65YhqVg7PHLzW1dZpvEPMYttSAZDq2cjVHGTgnKub76VDHrFyZipnLYZU",
  "key26": "8e9rhu5AfKvQa4z7eQjqaCMmRfWpBEt4pxZhpWpbAuAdg4Cvpb2x5L3BYYU1YPBGiiGNiQZzoR6cfY13vPBfihN",
  "key27": "5Q6SfWPTHdSjJLTuBRCc1tq5md551TEg4LudtygRoM3Qa4988ei1V7ogYJ8kkbew7zZ1j6L2t6wXpqt5V7rsfKNp",
  "key28": "3B9y3eBFjpfchzFiAFyeBba91YmjNuqE6LqT7UFbjHa2WVXbV6BKiJxcYmVS83AYRsKdv7gwLd4kwgfXPZzXx4kD",
  "key29": "51DjMU5S5dDqpVFthsrB9rLjmmBjuHUgUAHkSwrBJtBkhYxPPC3mZtJwnuWLrvxusMNJbYhXrTt1mV4uPKW7qqFH",
  "key30": "VdjF2JgRaXUD8yEnc1emWZWmQoDUgJnkzvojEK2wz2uKf7yqJ8ukkayigYsMAFcACwTw2U8aBVQmhZVrKYcysdU",
  "key31": "4MjuADhd3khRsCqycYCmEtAVUfMYGfYdB3kuS3wZ31dcUsqzizmmPUPyD1QU7dvzGZW38WeaqQKGBhJpVdTBideX",
  "key32": "5nNK4atLAuAsnJqYK1FQwhbj6Fi9AvRUnnMGosS3oAaqQLrud6zzja6pA77WzMbmSeM81dPRCXjJPDk8bhVEwkxm",
  "key33": "5pZk5d69zEmh7UhQqadFYjpkrmVmfXftJd2oiUc8BYUSpKAZT74RtRhSK3ZKP2HjmWJAZAtRmfszmhJ4ab2j3Dra",
  "key34": "2foDP993VsbriJ9UQacgFbqNp3K8oCjsYPQ7zUiVMghatMQQnsieArTxtqP5YwhZqZajG9D6VuSB4DEFWhV6RT3k",
  "key35": "4ZwqZXcc2QysYyie39Py5xdhDt9j4NSxwZPoPnDAVqR8ZSEjhZtBGXCknnubxCSzj7S5s52bevi2NWE2GwUfBQjF",
  "key36": "SmE8GVgdZbpzHxnagtCpZKYwumj1i4URjCkrYRSs5DVRfkqw7azMpbNDStvej7t3fTGydEg8mUc8D49ypeSBVmx",
  "key37": "4b6dpsgooE8U79vd4hwUfb9wqmeV6S9BNNT7yiA8xbttEofWq4dx3AXhNWbemJGHSGSUaDavW9LmHU23swNss7sG",
  "key38": "5Kda6W3pP889gCUwKV9r1ChfSSgKFxV9VXLajbXcjiqRGQvYWMsMeRB3fsSzoE8M1cLoUwouNYNueXkNWirVhzya"
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
