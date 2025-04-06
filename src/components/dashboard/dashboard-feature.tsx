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
    "32WKMfo8NajyJZxRHrvnqrUytxe2AX4Bv4wdvJWSCSNXp11k3G2doKqqPBVxvaPyBawML5mBYsXa4Pj3q6XyzhZV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jQ4VuHU3XrePovWFLzXZ7Scd1BQdLdP6YbBYstjWZLPedePBtAHN7JdCvpGAQ4tzSbBHQANcrjffiMF6BKnmtzP",
  "key1": "2AzjwpeeRyJzG2tkMvhFHhYUyWTh49N449k7LTBpm4epq1dmhDRATjct9BqNtiXpqkXhK8EcP4F1GUVHf2hEy7qB",
  "key2": "4rbyNqa7zgCvNXimUnRbVsPiX7w3WPHe9stJn6MdEQQqmmoKkHkgxzSdErPfKTL7jVDgz26rj6aeypvhn3yBZxdZ",
  "key3": "3bG7MAwWA91hob7Z9j2YzszN2cBqgwqVE6Hah8DgLU2p6VTQ68JrGsH9N5JgehNX2ZafpTkAcpWvYkL5DNVNdKMX",
  "key4": "2kmXawmZyLWrttKHWgedAN1nmqA6JvQEUVsjB9MVmtYPGFP9f3rqHPGD6eSJHSfw9yiDoSm5qDLKbJRAK9RTTaki",
  "key5": "HFRhRGFpSLaoq8erEz5kGscdzk2p8jcebZfMuwy76VRCs91NyQSxBFoZB3kMvNTXBKbE6LNgPiszuQPRgJJeKs9",
  "key6": "dvPqScD7jVQRfeXeThYpG3dAw9L2qTBBKEvfoPexTrJSwPmoP1rtoHhRfffuk48TZ88ZAHWHLSuPY72kGicMQJs",
  "key7": "5cMuyDQxvameCuXHjCyczFx8kPbNBV2PXTX3ZWxT42ZWi7zKKB34rfBR7vnU2MrJjBZhDnQCDavMHjL5abcy8RTh",
  "key8": "5nKMLDe7C9Ckvt5Fx5DjSGotjabjcSNUfPfXJaZuHbDG1hZiBHRdVmk2cjoQQdK3tELCye1FrFabbD1rdNPbATmi",
  "key9": "34sP9n8SHwHX5286ECkDrQ6Bd99LKFqCH7492gFkoEpZu77TR4dfGDvrttXJy5s3fmUTxLGGLUPb4HrtPGXrVve",
  "key10": "4KWMhWZ3iierVZWUBq3nxkzJjxfjXvC8muzwnxNTjK9JnJJzihWHdqywYXivkfdu3ZaBaKaFBYrcADNw9oTs9FPi",
  "key11": "2xxrMg32LHUC5e8irUb3gfHEnWCQV6L6gGu2QaSRGUd4eKZifcpd97qjZZtksSYkLU2Sd6ixcPw1iSJcXAy9FSyn",
  "key12": "43WftXnnMBNnoEzUmC4aPApM5Ch24PrG9RL82ZqyCzcjS6nzt44oibRDnTyQ9e1sRf5soNpmM1qRfuXvePbPp8a8",
  "key13": "2V7CZnaMVBbHKVo57gPuKg9YtfETvmF2rvkod2UzS2ozm2Zv9hyrysVfcmx8ntavhzjBNk35SjT6w9Y49MW9bfa",
  "key14": "5miBvCgYKJfwn1Q9Pxh939rxTkVZ8Shwx4Laa2xV8TQAffcMr6G9zJ9shVnFBvsqXddjCoTDUj373aNjc6jY4vRr",
  "key15": "2LB1KARjXrprS9quLRBQKAM8NCjY3nots9NFHv5Pj9d6Mxr1MXAr8wVcB7XE7anFt5traTur6AGkdJZcQyBqSTo1",
  "key16": "2iWwX5hT2zeBpuk8HZJQ1h3UfDAHq62a1rPrGe6fmhZSe8ifgc8fnNNvftoBrbJBjok8jRRdMoqGUWEinHdkQkHr",
  "key17": "2tVtcLGFeeJkn9SiKm1u23nDUmbc9TTgLvabarcWDqsVEZhcic26KBzfEJv4wC5ZwNuBZeCLx17eq5nQhfgN9Ktw",
  "key18": "3gzLH54kcUUDerxhjNdtQWsrbyLabnJ9r3TFSvQC2oHK9SqgouzHqmtRET3wuFcoS9wVnn4Yi6aFeecrJRhP88eN",
  "key19": "dd9ibc5J11b9wXyXGp8fCDQhxJivhjyfnkt7ptyb6zP2X3WEsxd59ye9YaaoRxpjgu4hjonnF3pGZLK3VTBQ8S3",
  "key20": "2nBGyFVa9LvHcNaNQDqGpGLPst8YrQbYHzsFG8Lw9HysPiUby62955r7Aq2dCZbaMrjJJCsttn2W4GburYLyTqe1",
  "key21": "2ufrXGQbhHhDXhUzaWsdJ92VSPPo9ea9JTNgomhcG5EgPnEdWSHHwU1AFeuZej2rT1LKbyyZxKtziaRR9omLzRkb",
  "key22": "5rhuiGKReo3c6XJWD6jv1jFHG49quSsKmLvBEtDv7PE9VYHKDc1Xk787afbQ6i6vqqdY3UJP5wLaT3rHX4t7HECF",
  "key23": "4nuTpSrTxApwfLqS5oP1tmHS8KipWhBmgMPskpQcePwJm4jtt8oViP3DiUC1t7tLFhQKmt4ce7ZVAtokmM8dQnWb",
  "key24": "3JX8svPbJ9xpRAcEnUXBTJjUX2KotAsBuCXGFbBYgDPXLWhoV5EBZBu9s27mLdQ2sYx4iEVsznJ1xABfMUBC4uL5",
  "key25": "53kw3K343Z3ATb32Qa1aYtgZwARVZueePjFw8EKG2Nk4TPwB8X4pXeNpUtQ4YcS9m5itLXp73BwTUkwufQWWhdGx",
  "key26": "5xrvjbZETaBBeyU2xuYxMy67MwU9WtMGzrnVSzgVp4hnERsNFGe4GqdRxC6EGZdtEAozT19p4Z7royTGpW3aaACw",
  "key27": "272TyTdrtsZtFAvXLujBSYhMombceLZsYBoxinmiyvuzE19XQsEcyH5cq22K19xYw5Gj8pNZo7QNYHd6bmrHwv9b",
  "key28": "2i6qPPRK6wTM8Q6MuPUmUkomjbvNVNSxpuVbbfBgcuKHdXkCdM9QfCdrk2YSxuGSwUGDCyWEr622DktiuwDMrVUw",
  "key29": "3qv1huCALDQwAk9miqo5WvKuXuRrdYy1vWwYDenMzvxSbL7BWwsT8hs81JkzLP2mvHySGgiAPHnvtGCEwXZpFfg5",
  "key30": "4xgr1SzVsVkWtBgMeLNmhEKFFBK7PEWDihh2hcc9vG1cYeCE7oJ3bM36q9TbaSeqWfnZ55HkU6R8pX4QtKYhFeA1",
  "key31": "278G9Qrv5PYHo59W8UqYUxbbfnDDcqXYM1YNPhA9wRU9ZuUkagmWej3MtxNsxuuUj6MyPBWpDBgJ5Z8EoyYfee8N",
  "key32": "5X1wYD85LcezXVfABKMjpv5udMPw5RFxyVui3kwcZFGMypS7E2TvyF2WByBSNQJkSyLDJb2cmdSKLNiUxGnN652s",
  "key33": "vBCV7HykHMjHmTRuxeFdgZZpMsh3WRAV5ueBthpmMGd2aPFjZUWJyu9g1agTZbtPrni2Umz2D56WkCaMNXV4wKY",
  "key34": "3zqvDoEbKbhNKtckFS7mD9E2h5qnYkMFzSr92Eqtdy3sUYVjZ3amCTTBL7kcHnT3ZnfCWusYFquUJq9syCnoUhYm",
  "key35": "Qbh4YZN8rWzan5SVEFwC5ZtWBi1ggEzkfhdZoCKsFCcUj1ujdK8KxX8Skw2XQqHEjJqQqJJNPt9Bngj9eyW5Br2",
  "key36": "5kT5N5dezGtWMk5QPUNuqh58veErLtW6D1THvieJmEbMbiDjRm7QDvgj4QhxTuqHTpnpzDhK84DTqVZf48FZBgph",
  "key37": "4bM3zRNBM6jDJ6vB7cE8Gf1UfioD2ucwVkkUc2EG4tKCopg4uHzSmf13BY6BNAPUTFgFNUhRSuQMx3VFkMGarqb",
  "key38": "39W1FHX1bpsbpCja1fcabejeogiQpceNdj6TWohZ7NQGwUKH3ihffdcPzYHCeJAM87fSfXiZcnff8KqCiT8GC4tU",
  "key39": "5Ca4k59fR7Jq6tkfgC7J8ao1nLhCK63abV3Be3WETyGMTqTmeaJCZe53S2nKYoj9cPmmKgDJDoPiveKA4w4VN9VY",
  "key40": "5ebB6TRUz6gcJqKuKSzzQwphvAoX5FAT8TyjRm3yfy4BQ2RmhqLcCgf8t6qsMPCAVPiubrRtnkSPM3275HCDwwUM",
  "key41": "65nPZALGASSWebruhzWfSrejfHCAWhVBj7pqQHqduKam8ZRiSsJpoM9STzrxEBTdVuXX3j67uBESoMipiUKxKGdU",
  "key42": "3RUJtyjFD8AgH2K9PgxCrT68GdjktJJ9iev4UqZW9gRqkaCRJ9mpTKZgfsWNmrBaXbGBWeFvWtsgicCUf5TsTJVq",
  "key43": "421XaCvcVL88hziquD68YvFMaXwebqS2TrPbX7ME3yLLYwz8XfLvxzoT913q4PzYQbn3EZ26qgPNwKz1rZqFYzTH",
  "key44": "3oMKJ33cw6sDAZyu41n9JKq7RYGpoc1DcMmGMarGKeT5ohCvNwNcGo3fdw11u9FosrbEk19kSAN2afGmNfBboxvA"
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
