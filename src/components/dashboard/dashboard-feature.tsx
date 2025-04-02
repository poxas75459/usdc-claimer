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
    "4QM36f1xDCiLX6J8iYn1fV4xeABbTTSaCyYwGrLbP435PL4zWVpePyfap4skzkbxp8xc84WaMMRxFtueHSK3qWa4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CcQVQxhwxx35Hka5qhX6j1awkAcjrPPXPcTMtgLDrwk8P1LEaMKjxrdqtxZ6MjKMz5D8wq49wsF1pwJbJC95Juh",
  "key1": "2AcsNJh2vJDMoBH92seCwn1TXAGhSiL1KzfZiYwNbWTHGxUzzyWvcUyH3ZurFyS5rs7y3tDfsBx8NvvFvvuuSf5n",
  "key2": "3nm6KkcAaQcNhqKHKNkdV4c59pq5iZTMvRjeCvVUWTVjSiDEn7Q2JxJ4YsQBSdpfuK95Pqjhz3b6Sx1Z9UB5EmE5",
  "key3": "5s7DsqaDR7dFCnN24vui9MPEcVwEXCgas63EnY1Bw9CKtQCqk6ThGJA46bgwh2snJqcS5NMAWqePL39YpjMz3aWV",
  "key4": "3FQNpBF9KaTWNkUEAMvADpwx29ASn5yPJzMDTEos1vuSXQEX1H6opWgQD1AY8DcQA5UGBD32XYCmGiGvefmNwRsj",
  "key5": "5v8DZFmiJZ4NJ9uTjpDdW6kvhbibez7mbrc1ierUhbRYYsCo3tsbkdGPdRQvP85koggNjysAFhS1HCJUyojukqGC",
  "key6": "NKJjHk6wBUzMg5ijGMfyBbXYnzPiHqagS6kG2eCcVoVGCirj6b3dRrVgzDrfsRGGjRdmp5Vn7KJtKE4dwhREaau",
  "key7": "467KrYw859CNePX2cWzhsg8hPkKkDvsgjWHJt26iYZEQ33d6BJKx7fXCHEgWT9z6jQRstz2Q5P1WR2uHNkBqxq5M",
  "key8": "4sJyX46yoQr8UgZBJQcRQZkP3baXGhBeLdrFZb5CMv2ubtwWLG8EeA5x5EUiPU6NLvYs8o3ijRwgVQvbqyT4nfTi",
  "key9": "5RX7UL6hY4ZqfJcRsU1EXtCVVapRkcfWfq471pSyxMDgJticSQyV7MjGvaBN9VLmYj9Can6trvSubxNVBd8nBQfN",
  "key10": "4sUb1N2VkkifhNDHwnRjFf2B9nC82x5DUvaUNpaU9VAhHvPa3fXBRbwdynWSAxZMdEgZBvKqFkQmTkQvKGPAAgyc",
  "key11": "3tmmfqmFfUEjXfAiUnjwipegm5HVyWfmYZZwGdo33Q6bjo3BdGffGkAc2mMCKMPDNYSRG4xHWNaShUtSQiA8SC3J",
  "key12": "DpubFju3CqkNcnSVCyThKEYKZk11hW3qhyvD4gX8bLzNhRU4jPv93FWPMvY7KiqxxqvHS17hnXkGuDPVdasmY2Y",
  "key13": "4F3KswcnymqD1fgFyC4baou6bY9hWGbAhZQ27jJ2BxrkiJorU6wJdUc6vX76zxGQT3bRjnvxfoFZJFXbFgXbpCxH",
  "key14": "2AepWYki84bSZGyeiXGJVujSu4js25aGL3E9LeoLqLbWLPpUeWCS59rqfMtdfaSFDcQcg9y3y3Fhmjc4BTMxde3A",
  "key15": "ZYzboHyiDSRa99obR2crJ4sGHr44TX72y2fQi6Nw8Hxioun8ZC6Vj6rmAcKmos5jpuAQ8Aix9YEeQYtpWPLKmcU",
  "key16": "58CYQwD6E1wMtCkEWueg44GgnpBpSzLdWhofSKfr5d3RRinJAUKC5RUsypxpfwhg9436E6AQLYJcYVw8SjkDZd8R",
  "key17": "276vYZ93apFdGfv7F28dj8xgTmm55G19ZfVYxeA7XigQw2rvcHkHD8p7Q75pWAss1QThzsYdHCp6Gr3kTWYuk1p6",
  "key18": "4xkg6qH1gtjLqcnzeNu96aoQxgaFSbWW6z41PZ6cVUwSxLkCQae6q8uGqALADjTei2C9M5sNnFA4TMMRtqmeuUoX",
  "key19": "DKqPDo3sksmEwgKYEuq23RZJw1Cv4V9Yfm6j3dZj361L4upHvuc3982RziCeGMtmmamDdw4rigfgpQ8dNRKXJFb",
  "key20": "64qjt5ty3T2h4WHhPix5KNE1k29xvnsiMY7TYas7XJXMRU3tDayh5sTQFMrbKdwDUWADyUnxoeRKQoWboo4RCcdT",
  "key21": "36mzqn2Bk4HsLcZWoe9itf36U6d3femKteonff6nFAQPBK8P933XTeC478KUeaEmep5pgmmVPoYh65xqoAzvARNT",
  "key22": "3rcJJukxAaTDzAAYtfE6SN1zj31Ty3TVr9g93RF4d3arg2dqMkqK7rsQxGaWgau3mdBEv2k21crhhErtJ4Gq6LSC",
  "key23": "5SuzEMdoxvSgbnGL1n9z4yUPcpp5aNS36dhp9s96zTpFKsFwSLhaeYWooPHM8aQS6ccp49qXpr97q1AwD87PsKjQ",
  "key24": "54hgEK2ei9As1VJPP8su7gZso3KrHFcRv4BtArHnv5AB6c12HcuwUogmsJBAv141mrsF8vgDwUnmGqZ5D9dMBboZ",
  "key25": "5JCA9hKTcey4kq3EsxPGT93DEWiMB8vTtCk7AhKWh4rqbQB6FK2qnc4iTr4Q87eKJhzvZbwUTSvzmR7Vouk1UY33",
  "key26": "yXTjFA8VUikFynpc3Ys4s5QfqciYuzBtKyBHwJ3wGm65soecNPf8V7Pp6HFoBJJ2qdGpjFMJKNq7WqQgES2tdcX",
  "key27": "2f94EKuYDiyYas8gK29ebB1HJZigBC5wggbk4T2pYfs4DYVkHwSRcDj9Qw2bRRoUCCHrKpRPeNd8S3FNcgKK4Rqo",
  "key28": "s24FnQm6nVMQv5fPR4Foq3RY7MY5bLaNKeYpA8aQEXDcBvzKmH2cG5GLATgg6wuPXgCcPxuZ4imw1mceLtM1qVC",
  "key29": "4dxLA6c52Mg3kAKv7N4CrGV6np6bHwUzSsTemZuGJ5ebpSaDuX2hZWieFs9a7pKgxrwpEpEtz1N5uBiwN7gduW83",
  "key30": "2PCw7Jy5WRLBweiUAfKEXQ6i7sKuVH5oyFwaxnjyNQhR5UTrekE4hGu5wcAwo5W2C1BxgYKiGihSKR2PoPfsU2vg",
  "key31": "2BkCB3uVYJAqvXdH8b3snTEKsrgu9THMBr8bxGp3KxtCwSkmgozowDr229KYKdA4aMgwmryJQJ6reMNvGp9aSwaP",
  "key32": "5WA7vA9riAcoA7BCuguUtt8NvnXLxNAwbg2FYQ89P3y7jAdU3VTxa18YHvwP66VKQQd7HFCUsoGoKUNxKZLAPSAy",
  "key33": "5XfcnvvbqJ1C275VR6eUKgNVrnYiaPL9UEQFPbj3hN9TeGycYZbBYxPHVb8V3h4KdV2uXbEGp33f9ZGvPmdBWNK3",
  "key34": "2HD4sTv6Q5GLbg5Nx6DDeiKd2C3jRwDDcKAtFpBPyf9QqFho7ig4ycZfUHyQKPZHdW8LePV8yxg5Y7iPJb3TZBWC",
  "key35": "4AJQ7aW1qM6A4ZDZLMWP6tJNNoUFfEg8AnvizMv9PA1pfYwwWWh22BRAD9RYqi7JCW6FtePNf78C6i6CG6Yew6WQ",
  "key36": "65dGndDX8cCBHYkFQMZJbJQjgwLiMCegtgpu7LKVqDjeWHLSLsqSCM5VFGEYZGDzfggbwsSDPHQZvL8dj4ADHy3R",
  "key37": "4w7iybgDRYHvCoKo3W7jHCu2gAY6PgxpVj77aPmiUnuiA2VjmahVA7kGFP3N9mkdh7hCqydmofHffhKv7bLzgvE8",
  "key38": "24ngamvkBnBRWwnyQzCyhwSQZ4C88kqnZr6oPBQ1MUDZcFwhz1cyVV5sRZFLAMu2WHREdt86Sk9nPzeZh9v88Rt7",
  "key39": "4DFDrYoziUbSXrd7WVVRvAuUAPaMsgrBPqZufoLiWfdkthcBwbFqL3UETRwTKZRRpCUu3fjuLjgSd4AdvNTZGy6Y",
  "key40": "4iST8YUijKWsTrZkFy9W8SK3WEnDhCxUDjsvinSE6yXYhzCSXeRSaDETeDaXFUxQwvTjpPHoC3bmJx9KaLXs6Uu8",
  "key41": "SLU7hCumEdu7f3xnhozsd1tCXs1teVEAtK7NNEczFAyvnzZyShj4cpcQKQMHpwVaZoP1biXUqoUPu1NBW1sGb3C",
  "key42": "2UoV6kf7MTqeWiYD9juWTtaWcBotciPmHgsWvWPuGFPbt5S8y4KxiDigauYf9VdWydMTUWRN9mg4PbbWFvUktHgb",
  "key43": "42TMG7vMh1roCWSeLMdK2KhugqGChi5acV8hbX8PU3q822w8AZ9xo4WdokQDdZN7wfc3JKnt86DNxu1bzFovC77b",
  "key44": "cGY5X9cwNhTCU8rw2Z2CRftZfeH2iUKcteE8q1d9msyyUoVALpPHSPHKsdZKyitSuDuTWJWCJaZWw6xiDDW6fq4"
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
