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
    "5fUxF73Cj7dsc5nKtYGmzCWRqANPW2HrsT3BX2g6gD1hazNBERzX22NH12fN4ezPhZVu4UYLVWVYVnUUWiTsczxY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28V7N9g4VtprM5NNorT48U2h6c5c15rqG7MVu4g4YNU7h52FrhkGDwBikW57aJUE5qzb1558Pb2A2iE5A654yKaX",
  "key1": "4okhiG4N6cyXVEo5NwW947LDeQoARbKPBk2oRLPd6eiwvDoFhH6L4AnpE7uMKJoMFHhDrj498TQ7D2N3Kh7Qgmhd",
  "key2": "3rfQU3x4BVCCuBGWs1RGzcp9eUrcDv8C5yMMeFhAHHXtyCS4aTJd6XK3vDZ3Xa7NaJURZRAadw7Luey1XU9o1Ds7",
  "key3": "WhVXdRx9XfVmTtwisj3FKT71bGZpBEXSHLaBcBN2QRs9yyYL8M8GZc9PrPx7x9JCsXfyBE1ryeiVp5Z59myEgai",
  "key4": "2nCo1WXWodZRwH9C32jeSXuGLmtmpj1evvxUUP5mpQH37iyEMwQ2xyyNcRbwfW6J1BTqR7cB4Z9H36R4EPFLh8cC",
  "key5": "o67eUBcHEUvbwkBcRLtF1i1oPRt3SupmLvqeBhvjgijgNuYnPS7rXirAFEnWo1TMQ9Kg9SCHfC8q3mKVKkM2tFc",
  "key6": "4PkKK4nF6mUvw2zZq1hTGqe3bupKC2Ko5VVNECzwc1FRPtRPt5NdWGdxP9urfNbmacnQTHmbmNe6H2hn3ZpCbgc9",
  "key7": "49EphDfVfT95UYGHRRcg3PVusRwdfw3VjsSbFM3NjA3rCHpKWRCdCLsTrGGZY9SUTeRyoi2M2sBRR2WiaFugbZ6s",
  "key8": "2NmGUHKVeGnYVGWLyp6RSKa1uk7MC13o2sNgFnqvcG1dtk2TuXRbSs7qCYmqbLfJTpuw24aXZKXfJJQjNyxZy8BY",
  "key9": "5gJMgPiLDbaeofVdGSiEGnCpn7AWVATQFK8mr5MCV6uGT3jmrCMaPHMSXBUxxQC1fGBH4Hadw6U4LDDiQwkbPbsk",
  "key10": "3d2UNtcW4hCvZ99FaD5Ly2Xcf5SkQSXQXwrwBYGvGUemEipou454XmacHQUN33yJxT6rdey3sTNh7X8umSTVdWUg",
  "key11": "4drMVUf7SaqyNbjhn857X2RW4ZqadrUvjCucthsmHaTwQmY1rNu57k7njHVTnXJwvkuathpGWUYEs5fdcEviwuyn",
  "key12": "3BhPENGa7GY2qRzGfc6YB8XAC2BBYAxoTmJpNvL63aaAsa57QVDpn2cehLFhsyQcj9PAmJ8uHMruUejoxeb7YnfX",
  "key13": "27a6NswZkKHhw13GmYkx7usbrXvbZXuyCUWytqpEsHkEnW4QnNq8qwdrKFkY2uuLUoudds4V5vTSDaEDctwapcRm",
  "key14": "3Jz8tyM6giNogEVBA9mwD8biTnEbjzMQLAuNYRJZ7qqCbVQsnjmgKAZQVhoPFpdA3AdnH2RpZidyux5X4fobgJ2S",
  "key15": "32Z3FBn5fisjkw8KXwKHftiypb1PkmEik6yEo38iEfHjv2TEBiUxe5mNLTacVJusMnFHD1iNyJYQfJXuXkKCqTGn",
  "key16": "32DXZS6bakg8JBgHTMZqTea1jsf7xnsgisdgUkTi3XaxBHLmuXFP52DRkVqj1B88qfb2ogUiE86e7xucH8UBMJhM",
  "key17": "v7vqBCd4j7T1nUg8L8QrkAaErRDU22nrNd4ASbEe6xWR8RrXUgfJJsF25r3RRsNuAgb5wj8tr54b4ba39J61Q7d",
  "key18": "2yz1iLFKp7sW7UwziY8fnUKSWjZvZ374txywigqxtEq6V18gt3Jb7oegjaXz9uWeuK9mNGQRLvS7bzTvaqreHQ9q",
  "key19": "5LLvKi22cHuZAYKDbiXsvmZMLaj6pPZ8nSEABgsW3eQtFZcBJmorFDxmAWnRPmjjD78CQCG45FjgjZyuUBNEqNLi",
  "key20": "3WLjRCpJheNmwz71YL3GhnAgGa5SNvXfn3jEX6LHzMmsZJJhjcxVnWSfsxqWTTxYQQ8VK7UipPSRNCDy5VjZD442",
  "key21": "59pgyqpJ5jEc8hua7FDaDGRhz67BVTPDhq87eS5zzJJVEhr1AZyYYsPAxwDdcRJfiH1jiraKYDaXrBr2NEFe4D6E",
  "key22": "4BqoxXnUbzgeQ2FkDxEv5dsaqHdAE1XFXZwJQwVqxYW9gefZPvFd9pW7a7Xx6wSu4C7X3A25b8Vg6LorBfgqS1nm",
  "key23": "2vvYPDNrNatYMsKyDCun5GutG4cRTNaqYPv4JQRtFdtX1gM3uSqcze1E7XrgqZBZnNz4JGLNnUAwZdPMvMoMDskd",
  "key24": "2yEPC6SJXhBGkXAy4VTz8yeByNyiMW8Dvb21hLUAGHYckw2C97dAqx7PRtXvt6rG9b2zAd2pU2tYPDmRanCcHMAu",
  "key25": "57vrXQKRgNexeCVtw7TSvWrU9ATSqw75VSUVt5VcgEA7UfNZvmKm37PwKy9VQhhG14HperXWGPfS5A6Aqiu2jB1s",
  "key26": "4gD1pMYbSayb9emAGWr6dDNXhfxkpVbMcRAjQSiuQ4bFtLbL4voq58Ua5mcmNfzLMYLzniD9Yva9iEsRKCj7MoWb",
  "key27": "65cziLY1EjcA2YnQ6LdB7XhK4Mkg7H3YbVuJKuC7FZNbxWKXsDsbpuvvxyDKe6VoDHZy4muLNkW9i8reTowtiXmt",
  "key28": "3PQiEoPzfQ7iVqESitCRzb6tnyVNboZuK6pNK1v5o5u3TPgtbPnAk92Vqd1E8QpMBFszf7DQ4EsFm1f221JFpunZ",
  "key29": "2LL1H6jEQ5QP4WXKkDvTU8BDQFbBZkMSnwpZUERWLkSv3Mdf99PTiqujquLZhvsRxU8CzNgZzu1tnZ3pC5ZCm3G6",
  "key30": "4MgGMsVkM8Mq2PxSdjxKCj7tXe9Kd8u4JJcPtkmuh8NgMAEijhd3iCtzhsbn9eFJnuyCTihmkiVn6kc6kuW1uUUy",
  "key31": "3RixTuvtymXods5GZdcmSAtJFRqWk5qTZCKnnu4hey1fMo27HpEJ9j8nvGadG2Af6MoVk5nGmkPKzKXKKUR5DoxF",
  "key32": "2LCqdAKqeEa32GKr9DHPdE3gnrJRj4N7PExzmEh3p7MeHvDFnWshM3SeYRnmTRdpX5PVJNk4KxaMR9P3WaKJ631Q",
  "key33": "NiMWfQoU8fquj5kBYihLYBVq2tqhaf7RigvML59r9KffhFhA3wyeys21T7wyCw5UBWAaKHjgELB6wSxjDZjV6pw",
  "key34": "568KuXD2uacqkuYQoHcvS9qxn1YQp1EEKwoCZPHGnYvCbkEbjZtjb3FiSueievv3LjLQ9X19wvZ3iEpMQcZY951C",
  "key35": "2EWZwEcH7NQE8E7xaWQyEZodrfGEeUXrcoAqh4c32LEPK1DqiZrMLEf59qKpJ4aobtyDHsYbk1xxoS3zaZKyVRRV",
  "key36": "4vWSndyVHXW6nhpwR5sXCZJzVUpaypZLWbd1mNuFc1b3e5vT2amVZuABcnFvCRgXgS5G9EXZViZ6BCmtorPTamCo",
  "key37": "615oV655YRCFZAeftJ7nLfc6L5pAf2uBBH8zPSmHAQaotdMAyr5KY9sPgN3qismNSJ1ioKvyoTfT4U9kD3CTAcXR",
  "key38": "5b5ghvKLoJAi67NNb1sQU4xtqKjQEpRCNC11P5YnLfTi3W4mqYZrS9p6zUNiYHoysH7HkNW4P8SAZFRzfZmN8GoG",
  "key39": "5soQL3pdLSp6FbvP52AoR6DmVXucox5uQdrmtf2KPJJ7fauLPkjNLsSs2pGayRmKRJ56aXvBVjLQHUvq7xL7SkUv",
  "key40": "5ZvMR7AnS5Ku1iqdDnNaEJvcLVZYHTmuXuTh95LcrfFZXi4qoBE5zKjJUrMpBfYFebercWcGHa7CfvBDLuSV9wFv",
  "key41": "4eRbTx6xVqNy78QaJTVogrwwMwMn53zarSCDsMDfx1GY9qkpYMKMBqepejh6f8Ut4BM8XYffASAPCpfD5ZgH5fTD",
  "key42": "DM7bGsM9KfD84XyyKv8Yry4BpD8Xq9ckKPdErsVftXYNrqyAzpBpYvzaYabcuGDMLwg537i3eMmE2w3oaKVdYTh",
  "key43": "41iEr5yCnqQXUVDqhNmzDimU5GhsTDJ6k9xwv2PE3eY6Kuo7952Wxd7Y37w5fEKF5RJZmyjMmj5aj1h56T9TiT7Z",
  "key44": "54Ra8E7zQG4fYRKPakAScTSxh9mnN5LR7N7omuhVCu2GeBQd86X3LiF6wPsEESRLsEPwbrEdUYRsbxGShq2QTnd1",
  "key45": "49KY7FfXsDM3fcbbPgMgdYz86eHRNwGeqY4ZvrFu48GXpeMLYJUd38L5W6gpTuTxrpYCSBuVXFH3n5HL3DaYPKHm",
  "key46": "2tjLFDwKBkTPynKGzMinp7kkzALZ1r76ajKMQVqU8xYAtsET6PyCURS1TkmqsEyNt1DNY4GuDtvAWYHwgkFu5Uch"
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
