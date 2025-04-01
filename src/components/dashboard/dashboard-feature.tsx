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
    "3Lj2m1kDTmPm728ffMAQfPyfVcecm88hXRvSSnSBiW5noqbfVRsfXtjDPZbLZ62vzWTudtbxuoTKjkHzi7ibxsAB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TyT4VoUbyG8d3Xkmoy8oA4rk3vXpFdV2GQH8KpMYUXW874sKhKqDZVNbxFSPCSDiMEJDXpdeU7gpP6wpT1wRKup",
  "key1": "559u9Z4yeX1ehAPWJwW2LBfgP7fyEzEcH9KDMPvnxkSWyk8Cf4Tm2pTJmULz1CoKFfpRHiVgzz1pq6Zd28ZjNhiM",
  "key2": "4zNRH7naxSBShyiqTHqzUoiADDcRrFmGdjDqjKLTcfBKDQh47b9pqQKB9auZpKobs4nSkcwXcULrqkHCAj4Rxh88",
  "key3": "3AFmZxBt5UKz2dMvz4sUtYz6sLWy1X7prWbfyvNaQT6xtUTducZNKciz4MVpPSeBtvSKvijDveUwXGxQKcrz7gFE",
  "key4": "3DpaawjM824MPH6S1JWDrEf8NccqfVokmHZYnv3fyA4Cz5sCvkidhy8fQNEFififjTCfaAuYWV1nWbBmTPU596Vj",
  "key5": "3KPSnLvJM72Yrt6xRh6NEQrt8eFX79DYPRXc7XSqoxTNGwWSZMRFuDw8bCnnECHv4GeFmq2Kijd4MKJpndBvraro",
  "key6": "9qzU5U4TfMsnbKcBwCRJVA8NLJ8cPcTmfjuC1BsEMm9YsYy7MXtXVzemwCky4hhmbFusHb1JW9LPpTKMCWqiEcq",
  "key7": "zqFjJYKL5UdZvWArDq519akBugL1qKwFL2X77osrj5zaT6VfV7wWq2Ez4oiQBXyT8MUv3L8pvTAgB25RKqcQii3",
  "key8": "5vcWr2HLu7Y7DXNvSrdG7TC54amhf9MLB2ctAjLmeY593RiFuCeEbYhX2zGHqEhKcbvF79JMCuLV2W73YJ3VJx7n",
  "key9": "2zyyfHf87zs9EKejdb4NJ5Pco6NQ1Yo7umnybqwSBdcz1yHYy5qqGsLroEwcuVub3uFGTsD6xYLmxH4PyCTYYkVt",
  "key10": "zu76aA7c4FjRDn4vzVnMg3EviQ6M2BuavYUFvLjZT5DoNQEefmncmE6Mxa31wqY1S48vqLdaezgcnr8oW5mACNE",
  "key11": "3dSBymF6GyWnWcJBhE4n2DX68veBKrRkj6rzST44c8Q6pkQdTb85zhN4agEvwwz6g941hnosDo8zo6c63JGujvXw",
  "key12": "QRkArUvPSrpu1tJB3kY6wtJaUZbaym6cCwGvcJV5d1bgct4MdgsqzhPY93WK9TEbv2CHsZLAV5KieNspiS6FGbd",
  "key13": "3vcKXU15X5NCcDcFc4wmFdTenXvCLSwa2AKAe1LkQQhJNpSweTnuNBVsyJ7y3cknBRsUwT2Kp9B6a4Si2gKwNgs4",
  "key14": "4GgpAkwBCG8jAUSM25s3J7zbzxHpsv5H4RSzhrazgkqK9U9ngi826CpSjhupRk2SPbHCoBMoAiTJT7fTt3WXfKYf",
  "key15": "3Y3gQjzqxfko1JRtMMYZDbyMzyaoGb8KYJ8QaNnzAkyKLD9uBqUVSthQfoUMQLPRTNAZGCCXEBUv5DQ9DDeSi93E",
  "key16": "218XPvHMvBf9VdZcpJ4tRbW1D3tpPxLTT7Dpw5UKpZRZ7CHyadbqxeuSU5qiySFEDpPWunwNjjPGYZjG7AFvvcm5",
  "key17": "4nBGRzcoWrkq71S6uc9KdNvP6Z4NPxnmxzV2mCbbxXmBe3EeSXGqyqeRco1EmGrVV21E8JMNZ1K4AYbhtBJ7kxtA",
  "key18": "5Ct3kwrUgwt7VJPnyRWSWUWPzKbSbZ3hT7k5tMVEp4Jf8AA7hQuMWuYUrwTGrc28FxahUJgoXKcUZqudvqHk6Cas",
  "key19": "3dfN3tut3VQeKn7xTg56mC3Y8MnZ5eZhjUkNG64qLtHoNXfZVntFngkcHjHPwCifBe4vDW1oCecb77ozoJkp7Vu",
  "key20": "28HncqjprhgGabfMbvqZdcY2YDRinQTBw6cFrPQENdoMpr7wyFj4xfT6znjeDFZ8SBmzCLQKcVc3QRfkFwWeiS4p",
  "key21": "gtna1aHHGrjw1fHYTMxJcwxED6Fq1RuuKVZQGiY3EEZtoMqAiajNBPZJVGH4iRYn8cQaB6ynCW3FnZNqX78gRD9",
  "key22": "qnz7evmdshRPEcTZCutnCT1YUsh7eLB64CK8gTLdwpnr92g9gDbfGW1yVhBosw3NHPqmwGcTsDCt9HBv5vB3LEu",
  "key23": "65CCuXP2SmR13gJudyod2eCoG67pg7eGUDU95TrCEdj7pHvp2RLfDkkByjqETfSjH4MBtkMGLL7ASSbE9od6PwRi",
  "key24": "2hYPZCBmSeJK2zDey75PJjatWd5weteDy2zhvGdDJJp5ojFtizdMcUYQLMuHoa34ucvfuhHYEneaBiYAcrv85Cm1",
  "key25": "3PLy5465XLcCkmuFwrRYv6FbLh3H9HmuyQJr1SsZJW7f1no9UEv2AWGCy5AGSxvBDraB2fyvtKEbX4HNsno8XEdj",
  "key26": "2Bcn828kJgX35kgJxhk3QeyehLqT8PqaHeHUVL3bPyqb5TN4sbNxERTJMbXBSvqPyykvAZV5j3iWgXmb5rFqja2B",
  "key27": "5UUud4w84TmcVPGU3iWqXZZotex22EcF8uY2SoknhEDchBXSvnkAz4qFjhUipoAEnpCFAvP9eDV4caP9JZ3chQ5G",
  "key28": "i31aTpPo2Q94KFDF6H8jd4PMkHwseymB2rniVTcgqYaAYWt7kiGZZX5goFQupM4peCLPYRRn4LiSagNiq5vkGZS",
  "key29": "3HrCLYFksJf46L24zRUnnkWMF7g3629XVSF2ZwDz2bfqxEGJpBBQVQ5Rxjv6Z9kcSYggCJkb73V62VMMvXJL9pvx",
  "key30": "5vjBw2eNTgSTWNhpFgGCV6rMP2P5iiC8tebdJA2BKgrSQyFXHkaa6yZjNeVsaBn5g4nQPSJtQtDpZ5fqir8yyMa3",
  "key31": "4YeuLpS31LrnvXwPB6VgC5bXCQ3bmw5D3VsuVCKRbxbrSEsLRBuiq9EkKB4qqyijXaADPaU9hQGLj44biVrpcgr8",
  "key32": "3Mb9ekuNXbE2iiQPEto2QtpMt5qEynrXdxMKTmUsdmebRYDs9hheb9WV51BeupX2BYk6AhjU6S2iCFqWSqwLruCg",
  "key33": "8n5zgpeJqY9q17jWKFQUvwBEgTeVqKpzrcVR8Z1GKDFES5QEsBckufV7TxHdKenZcjBGibHwK38Hbda2EfA7ee5",
  "key34": "3VwpdcRKARezgc4Tg52LncNFTDb2ydbQLfV5dB4M6kbKQTrKqe2uBLAiLGCZZ2CKCV9GdLvZWpYDRWnzGbPh6Gmm",
  "key35": "3deHJ2uwem3UhJ3xHXQR3knwB227BJeNRJGvk4nzxfUT4KZwNz9DrNJc9GSLwns2n7YVFi92yHwWNLZshjYQneTc",
  "key36": "idiJ5Lf3FMXGEe9MkUpRaLoaQVNtAmJ3NQrCrMKry7JjbBnhX7wvUoPeG5Hp95ut1eoB9MzuFbJH8Gpqnkk2aVu",
  "key37": "5v3TQgPnutx5KKSdN9f7dxxnNHijRdLAA4CwpKNAgCADcTyMTHWZEd9718WwcFK1PsAuaGMZS1KS69SfJtDYmUU7",
  "key38": "3hErNVPgPCCQGjbtxZJAnj5qKjFpfGUreituKTmS7F6N2xCzYxhePu2XtXawV9WF5R3inPVPg9xZqxWCEyooEf3F",
  "key39": "5xcasgGKc5yW3wxCxJPyEBhfhqXyKqnDvpPJkEHAWJ9dofC9rizFd4b4eFEd9d3U7z6tgMpd23V2tqgEMcNToPQV",
  "key40": "4reYVDbQhQxtBzT1HwaRdY1NWyDywZCrRYbTVnQuvwVGe1dJo4h6oNeTYSKSFFTZUDtRgwCNR51D8wpyjkb6jugU",
  "key41": "2ktLa6YFupH3viQFErbdXmtSs9rwJ1xPcxh2ZzJ2e2UmmRhotYefTCB1bFD4hnm8G2aRjThEWWsCPtiQ5vTwPYVi",
  "key42": "5RzGzazVhtNxpuHNTiuPkSodRY3QQr7uxGgoepcMQXWTTSE4QNZoCRqkD9sTzrfKZ4npJgqhGYHRrUAHGxvik49",
  "key43": "4Wi3Ukwdg1iEcRZC5ufz7WUY45KwqtdiL9TTRGVtKfkuW4XFkzBjRamRjA2EbXe7Ae4ueJYbZ8x75REtKWbWSDcb",
  "key44": "4QMVqV3i3dmC5N4roASvsKLDcyJRfEJx7LkN8Wgvzz4EZdizokh6BL91y5jkEoNJzgR9fdgCMM326G6vnVwBDRgv",
  "key45": "5HCEr6z8hnqXV6Z1Su9fkLJ6KZnrjU9buHPRbJbBceKT4nztLpbtEuCxhizpQMzYd8u9xzm1hPJdk7BLLEQ4iwje",
  "key46": "4t4CW6ST8SX5iLUnha9ACLKv3dLLWkS6VvHftHt35hKWdPkvd7mdHMBD13bLVKjVuB6GYqySmfArA5iZE1NU9hEy"
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
