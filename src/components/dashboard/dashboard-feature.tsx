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
    "2k1Vfrd9xfnzrE4rUXMnN4zeg3LcSBx6fdFfMMn9vZw98dQtVVVisTpsGERjj4pmU6kgkDRJpEtE8pD9PouRd7ey"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NuB9eWSnNsCYRbKqLqfR78S4bAwVeC4yK231oyAnE5taYBmt6Z5wMbNrwsjt9ENHaMziwXMSNF6eyGqWdp4SBv4",
  "key1": "4xCCkqLThQjjB4DSj2pDLWx13bFrLfkgBCvz1F61YeJ87XtF3cskDiHW6FxYAETQ2zXY3fE6zzPtaRy2wChjuhJP",
  "key2": "3nd58ptdgQvYKqL53QNEzs7yFHWWJ3nGXNxKTzV23yzot7PZvWBshduc59npHHEgcjx5EbZE3miyT1GVniYAY51b",
  "key3": "4LHVX3Z9HrNVXhPsFAzb6r6o3DCtppJKLkR5R3LW6zcrf42B2om1Y2Y8mHaYeU2GMSauoDse2Y3JYtnrAX8RswtT",
  "key4": "38L9aNqMrcYQahVZ2Rhona5bjXVBXB6AWyBiANGuWzfs1jJX4bCoNptXCiCJH2HZScfJVaHoqYzwTzpwYaNRmL2",
  "key5": "4HZpUGLuvzs6uhETbEHzrFDXiMmW2DbdR11cGaVq5AQZXdi22Rse9zUgAxDQH2AArgxfqWbSu8b4GZ1i1K8Ap18u",
  "key6": "4W2p61KdG3dKhBda99xEwaM4NQPGXkredWigHQvmbPzuyeyHth3tRD5N8JVEUkhJRhzNhjpXvkLcU5SvHe459jSF",
  "key7": "8gSZq8hsz3zoUjVnKSMYBcQk1PFJADaqo5eXfvdH36b9eMNhnTaUaH9m6qJb8Dcfj2vC9D5vmsaAi5ReR7mYvdX",
  "key8": "3EHqC2pkvjRJ4c729HypSmcnC47nk9yyRhtzvwdzi9szJYtcdFjhLSVrW98yPLTw4zLLdSKsHxHi3Vyz5Qcoc3Zk",
  "key9": "52acyRi3kNhksQaxRhC2qRGqqdkfCMumpDri3MF3mz5r2P1Q9WozSHGVZzQcgJx4kHXW5ktEXkeAuMWNVpZmTcgA",
  "key10": "2JGofY6jswidM31ELeqtGvrVNxpMn6nSwveCtES2rky6KbeKT3exCaEyffeU4Qw2wtBYzuNQ82Egj1aZQpXZa9xu",
  "key11": "25ib9T4XrrcfMDj1ZSWDkMe7XpiVJT5mZe5CaVe1YbhC7zYJJTz64je4tFEE76FuiHnwL27MREwfqGuNG4PBkexZ",
  "key12": "3jeytqxMQwsVoxMmGNkN9nBQ8quZq9iBSCR8Rg7MuTtwZSEwY2WDR7syNgV6oJYUc667gREYM7pWtHbkjKminGjb",
  "key13": "5TzCn7N5jtMubTqUkxHHCRQtW5eu9GZzLkkhkBzsQGNWW1RKd2QMfaUicPSELEX3TyDsikUdQkgQ65ipAdxPDsDY",
  "key14": "2sifbgke6gSinFnvuif29EvVyUgUyMcBWsgp1RtxCqS6RoYcL3UmsePcF4hqbDcRix1Rhfe7qwo8Bzn5SDxosBnJ",
  "key15": "34LNdqLNGSKKc4UHoyKjNShCzWNWiR6d8Mjr9uB9c49HXQF88L8e15M4ZQTQhT4sQkDeQtGGPTZUhJbttru1mvUE",
  "key16": "3v27dbZpxbGcD1YTyuuKLXwhkXxtgdmR1TProHxjsXYh742kxgctEuTpnsMGk7cxqnTdZTpXjmZeWsLWDxr4wxH2",
  "key17": "3uZXnK1sjNqhSMkupeQiaot9gM7ZtsVonosSuMeZfLy295GMh5LLZ6RMV8SW9ENoGgfrSjm8JrYJSZsHN9p9xf2P",
  "key18": "4PL2CsxPr76DDE5qm9Q6pLcnKUCvh3pPFVNh2w18cwKH5TvkrZ9G9NQwEafPjqxM2MxXDvN3cJjDBQdrAvabfWNs",
  "key19": "3yJBsDuLfFnfeLZsNXENmxYz1vghRXJDte9jeAnJwpiBzirZfDVh7ywBdT6ro75QjevVvmxjVpSampo76JT2aeCE",
  "key20": "4sRQNPaG3pvkaTfW4gtA2mvqCqPZ44QESQ8XP2aTnsTzRsEeaRtTpNabnZMW641s3mXixD4pqHR1rVUK68exuixX",
  "key21": "2Pdch53c2bemX5m6B8dfsQdqnBfZofbfcDKVD7CxozuytizG84zaRSmUuykigo1xKAXFyGnA2hpjdt7R4Gkc9U4b",
  "key22": "5ue8GmzJAjuncWMjSWoB4CUgjKSWf68udwPfrAhEFEHcyUPWn71eGgXwPfbFLGqi1gqsnyESKA29uXgyDwP862E9",
  "key23": "5qGpFYTyQhR2XaiiMyTSFx792apKpF35TgAgDzf5BECTHQmYYApesiVzeENv9Cg1YW12sYzZh46qmxpzjddu5TSZ",
  "key24": "3SLcMVnJKHnu5aKeApESvEM6h6arKPweVCr732GyEMZLa6HAXQ64Muc3zs3FaRPFJ4AchQJeaowcjkr86jDDhkcH",
  "key25": "K36ABWwxmPuqgmkXTRijqYfmbDGiPjpcMuekRKNEjZ6RNWt9n4ypTt85VJyQQDZju2hK8b8MsK1KYPyRSiEQCAK",
  "key26": "25Qc1FkQuCHEfrq7eEzETDLmbcRdLjV5ZVVmDUidiFj7eq3sRjeXyUkp4CAbiJcNs3z81pN67597TBJbjfVrXXHr",
  "key27": "3XuySxt7FG86RM5KCqPWdwgezKGbEDdDe8n6ZvuPZqNrobC6i73cZGeBUH5gcBj6Vbihir2mYkboY211Y5Hma4AE",
  "key28": "5fpZ7BnGtKXpPkbdsXvXZCpTfgMBYJpAg5sZAcu7uJotC36WLRYRAWzXz1nKzBwmoFNkQbHcAY7vbUcZZJ5z3c3b",
  "key29": "QmFHNRpCdavXnomJxvpP4by2hgKMf8NN3zZ1LDPHAFZ1MvrEjSyV1mgEt3YK6EmK3KxajmeAE3Cped2rdTjcbuw",
  "key30": "4pLk96LpWQ2SLwtTZftM5i4fX18LT2faZo7SfqmTbopte57erwWeFrajFvFtiA2b52KDJ4ujVKWCboJ5CyCdXZS4",
  "key31": "2JoE9y7kefBMqxxxuwhkMuoGcRJDcdWHSyjVmEVUucLh3zufkPjohdRATbRoGEs8bX1kpK5Cw1VLXqeFsVgQnobR",
  "key32": "2fZdKAGvfXAhnukVdBSXhXV9nVytXdDbKGrxfq6FG1y3Uno1Nu6apWLbuCM1iti12Juoh5UwBGy2bGusjM95J8FU",
  "key33": "3SjqeokYj7NnWLvUHk9qp9VeuzwuiVoPSBqkeFXcpokqDEFe36BpX5dfJGE3M1TJSUwBeNr8L9unzi2i9DqoD1Ai",
  "key34": "Sqpq1FuzHsAu6zFzn4kpP2hzc1QQXJTc7Hq6BiUn11KCKL3SouyfqB7AUyV8429qb6yDtJdUby6osCmQPaJTE8h",
  "key35": "3LZdiehX8CbwazXcJDPSuofkn6oVjQi6em16kevCQzGpEVyGPb2RF4RpADBv6JrnB8q7r2WyTLHcH2vJwLa4yeb7",
  "key36": "4aW7VidbtWdVC5UKNt7xodXWtZahhJaLiKy392UiHQLzfcnXKNoeYfgyTERB9GG5q5ihmXK9bPBNXn6eQHKfHvj",
  "key37": "238PCpHXCiwuuGLZzr1pQ5uNqSxJFB3A44NFMQvCmGY3sRsQRuBBPHMd5DipkmwoP66qbSoTwhZqbZH4o52d4m4N",
  "key38": "24KDAoUqBnZgaB5gYJqGZvS3nUoNChmSvgD2XjGAcp3Zhvf16dsdpd8Kfx9tPsdDompiFHJm5yBcRzoRxPw4idF9",
  "key39": "3T2ZucoNQaua4xVKSkE9mcgnHJpZxpjvzaXDz3VnU6QnB8fUHKRgpBFLjtEJhvsZxwHinKyXogBDYyDhkCerMtM4",
  "key40": "2ZdoArw27d1dhYcXryXu4brgAS8cq5uHv3FXYLTj3P887oWFd8vxoEnsCxF1R8AiuhqNebioiRg3XK9XQTXnzuZQ",
  "key41": "5nEgE2U3oS2yi4WMxMkJjy7XMR32aTeTp6QTjj3B2uN7fXsUzdSEekVUUKRzruiXCj3ejyWkrooNjUqQq5NdpLcG",
  "key42": "2DNDrBBFgin76gQDX6QRxuBNdtJxZi38KAbAKbQV7b9UrHwHFJhkhKtorN4bZz4YnUgHiSfyG2frd8sU3whLY8bM",
  "key43": "3YALzSg7cLWbkyxtWLn7JyXnLFWQCwUXhLQaoeVRPyG2KFVWXbAWwsZxTE4P5qDe9A5NYGiNfDRU2vDq1o2QCEwQ",
  "key44": "3CHKLC5EiP1UbNrMd6w81bVykfDwzqV8NDv9SXzHkUzTncnwM5i7yrSJAwZitM1HohGYvcXmEmdpsbR2Rt8KVd6M",
  "key45": "3UPUrCEssbDN7HFeK6Tn8PFT7KUZkpuoB7gz6cUQzca7djQD69z8qbnL32pSrVyhdDqxmkGUfoQvp1jWBkVnCLv9",
  "key46": "Q5zTA4Aa9at3L8HDRKRHvrN859gqUYwYmhmM2C8fp9MC2WG8Jh8TWseXX9mGEFEv94HhdjNKRH39xZLbpSJVLS6"
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
