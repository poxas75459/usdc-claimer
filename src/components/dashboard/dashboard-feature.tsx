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
    "3w9GjF362gt7SyG6gdWwPc8mga4fKjQTVfDbTfy1HjxhyTCL8FZmw9WUTX58az6CgAckHTZvghzB19fUFXmx5EGo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bQdgWoE2iM5MUCK8WFo1g6FHdU5i1Bue4tUBtQHjSQBJhfET1py4PPDSFP7eVTmon6MhL6EnDqob5mQ1H2KpbZT",
  "key1": "278Niyj7DoQHjhV9bH64qgxe5jg31RG84AeWC3Pa9kWbmn5tZfVcgNPDrHPn6hPpaqK3Hy8naJ6W43dpjEp6ik6d",
  "key2": "5xAtnGLvX8VjVJMJcBibqRJ7LhnaqGaTJxdbYQ1v4wxafnU9pdhNMUtDWQFrjin2unN1AdnZkctszrZq8XHtA9QS",
  "key3": "43ti1CPVQR3mH8bdoLutFu4XQ65bB9zF8j1JLSE4YhEjwo23fxXrh9Lv8Q6FXrvUsYuPo7p3gwGXJywGFT87ehHR",
  "key4": "4NS6jLWLhBdJdgmDhC6AfAu2abCt33gjAb5b1b9418T7ioCpUu4TKDEvPkafQhaCcKRUpH9WZGNpzsXbGMUiFuMS",
  "key5": "5cS4xMiZcR8R4o383pRvLjAZR2A9t4ASGWZLpSvV1Bc943RYhyxLRowL3i9fyu43mk34cZY2dx4vU3v7gErHwu5n",
  "key6": "3yA75CRMrd7BP399zCnEmToVhLnteL2pMVhKfWR5G3RLfJpnSMSN3aoUDH4BWQnqwdM5b2qS9dV4tCobAuE4Jwa3",
  "key7": "4dpejq2XkBLCRiZfvZ1pS3wBNM5n4qSex7geciVcmv9NP97S5MdnK2B6LpV1rBwVFBXYAiTEQRd6gCPC5gS2f85S",
  "key8": "3YGX2c6Y68MS2YoBWubrE8xAYyQKoAderGw3x7UZ9GPnhSkW9MGPC8LDg1oZrZWqvWbDPfP8XB4it3YSPVAWExzT",
  "key9": "4wMT8gD8FLnwcEabj2ajEmexLiqJtRZLoFRQQYDf6bsaiCcMeE2JeM18wsaegVE5pLW1EK17vycdv9wXTyU6KktE",
  "key10": "2Ze7JY52fo6VTARqR4AGXhE9JTvDQoH49DbZw6q7QrMAegmEzzVtkj1gNYcByYZVhgN6tfuByVdB7BXPn2pJ6bkz",
  "key11": "5kiDsZx4uMC7qZGgzi6hyxqR4nSPqQom1QiByyc6WAAnWzcCbEZKA9zRegRQg47xyRsnrGkEew44zfY5VNHpKNs6",
  "key12": "5hxPkT3Lt7Seunuf2nHchzUR89ZiskWAv6TrNN721Zh4WJDvxJ3yAbesknXRiPYn3f5916bJkh5jFgmiVnEYmeS8",
  "key13": "2XTFRPQQfmP9dHAuvn885rRrwxgrRHG4M3jUYRVdSSYWdXRmE98XsDbQBxfCbjbkUsCLdwtwmxLmtPgHwpBMsmAX",
  "key14": "3REXBKzRUbC7JRc3L6R2gEmnxB7YmizMdRB1JHYrRP3GJQk5QmdnkypM1C9FafarEqTE661cqNV5cXdf22Ydw8Qh",
  "key15": "2U92hvBYCFE8zooppTPu83DUaynsCkTr345GLuhqxWk6rCrPFiHGV7jJaGvWNnDbf7ntTJT6NbqMv9URZm8Raerg",
  "key16": "5WSAZkqNEgUsPzqcHi9YKqVikbTmDJCKcBKRmALyPF4Md6iKcGKPJxCHNwVP1oxzYfwb3xmxGQmQTHuuDJ9kubVD",
  "key17": "2GJ16nFGvWmNaZM9cU3PtriJJdykXhnepdB1CTg92oXDZaJZn4HoStLCj69dXzh9LBeVvxazCQFy39YYCeuzgTMH",
  "key18": "SkyjY9EWWRoe18TZgBj93o4jJhX8ULrhju6B79RvmwAFwk9bAXC367GsR8WXy3N8jGLAv7QcrKrs8t6xDP3xKu5",
  "key19": "HHCam1tMtZH7RWuL2stYLqPfYMkypd4PRvogPQct85CAJNc2mh3vkbyFSrXk2cKoBDfshQ7xfmEDbUU4RQq9dKJ",
  "key20": "58scpymaqNJahnNxCPavCh5k9LYe24e3WcZ6V84JDfBcwS5FKsYZG8BFWAQ28DVMxos3F1YW5XQTcSTmzhnNiqUX",
  "key21": "2QMUurGFRcpPoiafHtjKHRbiVusdNdMRwVDWwunTCotognJXLAiwJYWg5zMEpZJM6wv6wFLxmNkzKVkN7xh9D31A",
  "key22": "BMCinU6Zq7dsCpUhtw4N8MRBFLPbeFihsLGVrr7S1161qVQWTft3g6VbHg4oHsjxESbxoYn2fXn7YeN5TP9pB7s",
  "key23": "DjxhcSteVYzP3KR5MPjrgrXC2dGXaHbWGP8yP8XzKH777er7j9XEY1fQArPyvM5civVZRmw9yp6PXG54AANAjrS",
  "key24": "JdPvVNXihamCQY1xU2xpnzdVhh7dhs6AzR49PwqsGTkK2vMiv1TkDCu378po3VafpzsXDoMH9wakjxm8gy7onni",
  "key25": "3Z6aZpsNgZvBk7D3jkLJW8BnMxbhfdSnjTNpu9gfSSpRetTVWf1YGr13V2CA6t3PVh8CWwevoYtomptByPVbjDfv",
  "key26": "54F915ooFMqRD6bdhTH7LA3AQr5LJZ7ZiHQn55zYWTFNaMKUnS28Luaw3TnJXytbsU8C51Tz1fbRj6EX7BWtRKGe",
  "key27": "4n54RKocHwTjpzJ119FS73u6oxGsrCc1j5kLir7zKvyYUbBDKE7Gpigss6ViTHq8ss9sSM2AbkiW8hhXrhMFJh1y",
  "key28": "3Li6BZAtBzpFdQHgACbWPCuJo1Zh4Jo6ZyWejWF6wJCarrsZv3SBLGPqYdWSX9KHEgbbPt82GsxkPU35xhvm7KYm",
  "key29": "2CL2wQGACaFaynJTRgus5gEMRTTiDA8TRvsDP5bvhbPA8WDihMoeckrtCRiX2LvAAmqyenF2Wqp62ysiD3VU8c3b",
  "key30": "3LzEfdKdECsg8SxPbUoNSYGA2LjXhhrEdKnTZDAdECCD5BzqzZBosYSKm4g4Ht3vzjkraDdfgDV5niyrLXKmxrhM",
  "key31": "HsDPYipqwn8XMoNR3m8X6e7GkRJSSGqB8HuRuYcqXZQJrnrppaC8PGzMbG3e9n94FddowGgk89o4M5ypUWKjq8G",
  "key32": "61mu1SeTEEtUUKcj9E55eiP18sToj5VqNfE5Gk1G24T9ZQ4VCixJwsUAM5bTWUiVH6VT9bVDQEbU1z928oxYFwTj",
  "key33": "5RHz3wWDn5voweydPzWL5jc2pK6W5eMcyzNuhks9gShwEzarpbTpUeygxK4aRKf84hzpbq7vfeopDHzgTyezE7Vi",
  "key34": "mANqEE5orGQNXzVeuYuaztrXi7a6mq9PoeEcMhrAP9ateCRGaQsqywztVShhfgBK9PmrM7yPwa7cWcifhtXT46a",
  "key35": "4FMr4Pb3a3myvf97tYq41xcCKtxqnxYXFVhqBxcFr5x2dTD9xThPQZwi7u2shJXYikE8eEETYbRpDeZ2M64CP4iE",
  "key36": "4b9GuihZdoPxq3cwZXMENADgkjAYVcgmN8SJqsKiREBL9BXLdir7tH1FkL6TwQyt1tyssS5a9r9ECuFKZRCFv3Je",
  "key37": "5M2261VLuruVf7GYjohfhiEXLv3BadeSP3ERubvxCDZikUSNDndZSs6UUeNx9ouUJrPfb98WrheUXoumdXLF62NA",
  "key38": "54AkqehSNiirsCb8wv2J1zKezGqCKqKdpUDPbqAHkZJsMiWE7PpLkFkuMW1VWCauFGDrJq7PzkAFZfYEcaKMsfie",
  "key39": "4Qsp2jZJJzLHjV51qVhCu2UJZgRZHNYTdaw3SbPTPE5gxezW15sQi83KfcsZJwVdAi8hVxhLd7JAyRyv99v6ZB5B",
  "key40": "2sZLQyPS2fyxLsf8py1VZmNFFCK1K41ZGekNa1wy695ZP2RFkxH7JTXx5gdinSNqMf3hcHzbPt4DmM47nmq1gpcW",
  "key41": "4vyW2w1CKssQNEMQ9LfPeqSXSQLWRa5tGM6w62UtCdCzWaCJtA1fxqWNK9jJ9PbsKQ1p8D4YPfAxah7CJtccvGQx",
  "key42": "3hNSSncysTQHE3YnqE4iVfzYEmz7EDAupXkbLNq9kciAWzyNntmrtG3jBf2bqBwL8Mm4b2KjuqeNm31MJvSXTLHM"
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
