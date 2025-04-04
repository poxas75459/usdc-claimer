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
    "2TP9rUk4c28dmUFLwUaMGXH4A588zP2AxQdDPh5em8WnUiM388J2Xvej2BdgA1ubYRakn3NWdaBhD1rMmkCoiC7h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cpksK1ACHaf9jGXrW8eW3QQZ7aa2hGqDPVsdJr2FSS7HkRh7QEfYhT4UkdqVGcTxBG1TZi8h2qd7H4WTw6gayWL",
  "key1": "5dAnTbrehXg69XvwtaLHEgeWGjQRc7FKYeoGFvYJD9LEMuyiGeeT7LgwDh8t8C4qsbXgAwARKd78ATnigF3HQkU3",
  "key2": "2vL4oLaRX9XyL9yn1z2KaAXZyLwJpkx89usyiczEudvEDKgd8eggPx7nA2AP4sWVZLcMAaQoqS4zCXV8eQ5TbLhJ",
  "key3": "KYFEvyuEQfCfUem6SbRMPALj3d85f1rEhs9CLJWRWgS58gsbU5su2e59jLyRqipVjR7axUTyAKgswX4KovNACSe",
  "key4": "sP3idsRHxQX5PqFgjedwHfyoT4Su2qBAxkTNqtwEycZFYDw77C6R8BPktx8nvGWLVfCZCpbTyt3zN8nkbuNzcwv",
  "key5": "4uSaQprn5w5rns8ic36PrRsudXUNWgGv3V9RQ9RakQze1CU28oEipBC1nKMPcW27Jry4K3EiRL5T2481x3SYk91f",
  "key6": "2auXK18Pvr9feGt1txQ5MAewhRJFc6GfFHLjdUMEVRwV97L6f7rQGhBJKBjoCUhy3jSxfVKCaN5E2jvtK1vMypeW",
  "key7": "3hZ8ZtZwHBpiBBj7yDbWg6RSAR2kdLJh1QkpLcajM1HSj97VdZGruMr1h76Uo6Bnig6TQye1RBm8356aXwnkqeAv",
  "key8": "45sYm9Utw9j8FdmvujVMb1Zfc7iWRULfDtPsFHAcPK6g8AGDpfFSHxpB2gfHV9BecQrxcAutGZP482p8zBoH3TLK",
  "key9": "irbCcUdqFe8VeUXavDtkEvZDaEAmdEqqkgbcmEZsqYvXAVHmrH1vnq6wzitadxqDnVrwUyjt21KZjFHkU3fCT4P",
  "key10": "2YfaHsr7B3zQoWJZREKi3pbRLr7dpDrhfBaoGDpZdTeZMhfEdGMX4UX7UUsVzh6mjhCGRJ7H2YzGGYgyx8dY7FZP",
  "key11": "41Zg87bzPtZNwokXy5zDxEmiRqmxJrB3yQUa4xeZhVEgvbDE37k8yM8w2rU6jSsD5hHWXC7k1QheSBCwTpuXnfNT",
  "key12": "5nLL4eTr7avoJgqxhq1vmEn3y4Tr29gJVr2gthrA8xRpJrGpzQb195UdoSLgU4qqjn12tiBxyRj7YdHvGqCqeEfv",
  "key13": "3CokYc9EV1WDm7yeiPugoCJC3tMNYukVybQTnbeFpyPmzCgW6x36YYHcfxDKNycE2SQyULZHbffht8dfzXt7CaQP",
  "key14": "2EnQ1L94jXKdXYD7yVYcJNpcUYCew4VqyhSsHAKdeJAs9dX6T3pkZJpwXsHQ8W5toHaHiXcVBkAKW8VtCAJF99v1",
  "key15": "2PEYDU8DxFmxcB13XqCv5PgFGgt8evETmpvS7awV7k7MXZodUffFquDNzctdLBtZiEFcPA3MyVT9PtEUT1mDzFhB",
  "key16": "5hczoi5C6nGPYqw4onQS3sTDrq88XCCY4a8rCNbQtdsGEg7ntPUmBammbL88zqtPYxwBKC6U9thMNJbXvoJg74om",
  "key17": "2ihLYxQWSqPWyNDoJXG9m9tbxQvcM1f5iomtYMiQG5SyykkbKtqbhcmJNr7NGUD1gRPNeRUvdZwjiWvkn5YBiqTm",
  "key18": "62H2i2WJiSABkMVrtucad4uzreGowJ3ai6DY4926UBb846okYmwDS7u94uVro486eNNn8sLwJMbVHUrxakQZaQaG",
  "key19": "2VxcQCyKz1DkrbhBKHwZBKrxesBjsK62JiYRzyMojA7H4zja7yLpv63CE5j5mJ3gZBUC33rS2hp6MLGoRCgbicEN",
  "key20": "4FEpEqF8SBFUy9gB6gAbTB9CzQqevif2xWd3aXCnKmKDjSak82WZnhherf26wMdRm1mEbSCXzSHjYvnDG78ZQgq5",
  "key21": "4pKQDsBwHeQYAgpoz7jSP6wLzv3XWgQjPKzjttUeDVKXeM3WWQnzuTMzoKVZmg6Qs13T3L2Co8fGcGDibfKqB3qU",
  "key22": "3KeeigNnHGeZHA165fkMsBL41GMvgMngYyUr98NukpDp1QWriV4QDZrx5vkmCzH7dbyTFib9s3M6cnKZc9fmHNzS",
  "key23": "4RjcFnFNDv6Qy7yJuk7xosxCw7T2BKu94fqzjVB4oQ12cqFMoP1V6MkixmQv38jJmGTgatLeWSUm8p3vjVakwoHQ",
  "key24": "2e26xsvAYCmRMN2HqBtj44mmXsoVTDaZrhhUqA5grEgKaG6iz6EERN6KNB6Vk1acc7UvsNmCWo9wa63QC6zLhcHZ",
  "key25": "2bm7xGJ2Ad6BfecopWfp6Y11ozEEyL675QwxHkAXkRQ4JkEw3S8HQYiGdDXRPvgrX5K35ni2kjL6H7yhr9DKexaf",
  "key26": "3nEcgYVreP1K6s7txCBDWf9utJrtYhNvcieJwss9G6E5P2dtxTAdiU1cWDhKWbvNxA9LEewe4WdquMot5hK6ZSvm",
  "key27": "22nXcw89nkXWkJPY71aSxo5HnXSCKR2tSXjqmNY1mFzmUzmHrCvgrHFx39wubV6nhngYX6K7BRfiDseV4TqenMrT",
  "key28": "4Vdd5K5cAWAiyqabtqMNTSXCiJefzZi4if3iUv9sdh4eCpLd2vvzT5YCAB6Fyx4zApf4yUirH5fZtoY8xcuaby4j",
  "key29": "3tb4fA4R8dFRorrt4pEBEFDUjEDD2woMEbGrQmtEngcVzVTfhVsj3Rkw3bPtTKYgXMXwvpuDiB3hhA5SxseUjRqP",
  "key30": "kHetakLPNMHtrg4QeCzuDLYiiKXeHT6iShvwdAKSD78Mbd5ccAeQ7gq2Ui5g4wg48fyYb9GTmVmaeL3KEsgyNum",
  "key31": "5uDQx3RTS76uUzupqxsKBJ1r6hTk9qFS3ps7JN3KieWBf4QVKo7hKnTSbXvkBtsv5geQRQqdUqfkNBmk3vk93ZxW",
  "key32": "RFA8Hmg4qDYeJAMjkTvqxzxmcHbjMdv2y3sHY98g79t4eqJ3i5BcaoDE5yE2EeaAKcQ2khrGr8dF98HbbWTpfCh",
  "key33": "4otZ9LwSP2DT8sfjv5XTLbLejWLArV24jU5bHmjkezvom6ivuWjW3VrbuktscwFBt2DdciqbTxkc9csi24e1eZZz",
  "key34": "5aWBK1Wpq2wZev1ULAwven2FHCPx3f52UdW1mAx4ZVnQ7Nc7zizPKxBULNNypNfbyCmbFSGzv72Nje5NzsSM2u4U",
  "key35": "n7yztXbFwi23LXJsTbY1bFMNZ7dT6j3NwXsvDZ5uJ7FZpkcTVjmDH9z66J46ubAMtEftXThTmnbDvkoQ2ecj3kH",
  "key36": "4nJw4y5VQpTkyeRwwtQw8nobMvoGbjz6Xh6pcVQkJCBivs36hBTFj5fAYbabvJAQMgtaZBnSDw9UgsMWmWuVUMM6",
  "key37": "ZXnXJcRuajCRzKjACWjLjVPfR4Ly6pj3SZ5VFL9YY8cm3MvfTWCoRqQvRPe3Mw4Kt6hANNacM5kxyaKH6LGwcEn",
  "key38": "5p4ae7G9M5FEvjiGPizhoysLUiep1BipoZNjwmgyptcEx9qqJmnRLMVivcwJFtLX6X9dwF73gMyYp1BU2K2815Z4",
  "key39": "5wsUWpTNsJZKDhmMWnVN9crEd6iuX6Xc5CzFaEfidnBuhsoQFkHTp42DKjA29spEF1dBZE1bLtge72n9vQUkeres",
  "key40": "ZZUsw7tsHuRi9XgYZkD6vbvghbrKgws715sgZMtkepWKjTt3wGzfYsMCGpDWLUZLT4w8uimycoRt7ZqDG4Twu1e",
  "key41": "4hboBtFU1JWx29ZrpJdGxXeJ3UprJZhrKbMyikHkzB1Kjm6jf6XAVtRBc1yqEdFs3LUuf5Ejt7KCzPgMygsGrFfs",
  "key42": "2Bi4qyNGMoAE6QEtkJPuvn3vijyNfPwqPohXZxeBEAMsDMjhgoUKhFNGiBV3ahtHD4EPuGV8iwHSieF56X2yXPwA",
  "key43": "41MbiWmUe83dofjWuTmRmdYQjbpLbA1Y7JTTxA8Crqayre8VWFRaLUejRqMAq2Xo2KH9cmj75x6YgLx875GRBDwK"
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
