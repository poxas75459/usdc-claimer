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
    "5Tf7TFpy44eeejC4CgH2LjdXaTmQHXjXKGtgxnCVjCWQXtPJ6U6Sk4f573JC5rAocrM898fjVJuD4LBGpASYKSbj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LdiB5w5UcUhBvBq65d2bGZTnspP2F1J3HEkjAC85fzbkRAWf1NZ9pJ8Nwkbw38Nhm5TYbdQHPiAMKUkkgrNLvWx",
  "key1": "3psYyEFwvhNeydo6PkFfduPcVjjyvRakdboUwi7cozYtZm5aEqoVqRi3s4S3bmyyTkzEGAGDaZBSvVzpAhEX4A3a",
  "key2": "pdEzmyaWMnTjkG9YweJRyNsnVCHc3ABKU8UrYECthnCuFisEbRkV5YU9AEcSaa3y7VApmWCw1PcLuqTS6yYMohk",
  "key3": "2TFYdD1KHS3SKsdE7qhsHN7THXoF6ERpYPfndTyvTw5bjoot8L3h5wmyGyHo5tKLS8AuN1R87Nxu6FBQXdriYGnb",
  "key4": "3QYYDgbGQRokKayL5FBvv7ffNej3AffLrtwVKck5iqejWt9uMwPThyKKnV5QZy8JkW6q1Na1hudBdVfWBG2ucTsX",
  "key5": "4gRipZgfdKwANhN719rrFWLMNtunAmTwZgCB94V6gWBA6HNyu4fgCdbcxKuAQ7F4Uru1GhSA4UFwVk2TgRYWQJZB",
  "key6": "Enq7yEP47Ab5jWbpK7mN8U6wndSUgVwyo5gEJDhekxqPF2cF2YypPW7XPFa6S2QnPZtfCCZCaQvvhxSt9rkabuA",
  "key7": "46ToUCsKjDb7XYuVXk1Q5PFSj6wnpC5ttkPhV7T4Lx5qhniDTH71EaCQY1Sm2hBBpGRZuHNZfqh4UQnxJAmD3mVi",
  "key8": "3cDRHf6iCv5M5fTNMDxGQyvvWmyCEeqysqhrpUKWn7KwHXsNHVYx9XdbzZRWFiXiBzTjwsQxkSf7YAhS5yFd9pdj",
  "key9": "5UjjjTspueo7WoFgcANfChs4SS9tnW7BgCYigoaAKTTFPPRU2x45wsctJXqeNid5KRo811k2SesY6QqMgjuzdqYE",
  "key10": "2thzritWSQfwGyu6LyzyiwXYpWfz4vRxUxoccKNVhGEwQPvb7T6H6ZadqViWiE7KepwgL9jf6JRffi7yoZ57n7cS",
  "key11": "gFBkQ4Yb7XPBHfH5kmQqCVZP9P1wwAS4RnsZNUC9TTVXTTNu8u9CYdHvCmG9zFvu49aE2bunRgoZ6NVxfhD3rLs",
  "key12": "rhpHVV1eJQ7G28m9mHb2xniUaTELb1Lvb578czMELSxqgmxnMjb3Ap6dNRK5TPC9XW2iYcMhYPw3ENMWNdShqqf",
  "key13": "3MngRTgua4nGKu37B5bFTzx3hD7J3Jft1NtUULcvg3Lp841WmKrnLJGWH5CkuxVJNaMVeVpQne3RWgLByH6Wj4tU",
  "key14": "5vmn86B4dJTFcJDLa4DpdrRgW1jsSdzveFZCVJPhQGrWwHUDGzJ6cHxWjGMQDKyUE71vT6CbiG5fnakX3hDPhm7v",
  "key15": "4456Xei49Q3VaqWCGucqCDfoQ3ee21v6dMYEbLAKA32yw4wvuXdy8UGka84QP1GnwHBR1vMVvYfKjTFzxP29XeFP",
  "key16": "2FqeWr1GAHzX715JvYQBePYTUMeGv98DNHRSJcC63ZWCsYJvLj3kFUn3drNRp41MqsKgzmg97qSFsFQruR2VHFuM",
  "key17": "2sRh8Ut4oh2RKf5AWMwnoKFA3dXXTkoiVbDVXYUfZVEWAWw1paeevkt2sbhPpCZMQ1PTpzREnPxrHY1jsv4s5Rad",
  "key18": "49ReHeoKU5RUsZJP87WrgtvwU7muwd456ZkPFL4JMU7iXjxGXS1rgRLhNEUo36Jc7LAiXynWCcQES6J733Nfy4HD",
  "key19": "4rnqFtd1HiJvUP7WybsMcu4nL96Lj9kXhKsghS8TcsgrGRzCgfMM1yDp32UdPvcuMEB5qoC2AJ4WtG1scgp17qRZ",
  "key20": "W3EvTV9iN29tnMpiRs9Kh4Q7jfa9pRgieBgAVxe9uAQeqVhRYkQdjjiX1CDGgyNLD6R81qvcaGPPWCvuPQc7gh1",
  "key21": "5MQ9k9Cei5TKEYaHbg6t9MnHATseJydDJB6zBoDWwwEdLHjJ5xywzKWVbq9AkcVPCtu7pEEx1pobQdMYaKiqPMU3",
  "key22": "5kj4pr5duQpF4L4tsTZGtowwfiS1Lz8K61NCtwCCCAfymFyzxUYthtptkQHUqQgpdsxHSabdAfaQMBkvwUcQGF63",
  "key23": "CK5TXLi28PwM9hFNULvC3ceTegB7wsNw34pU9pKUam8ug5SqTKBkrJJu6dE19Q3hp6zn7V7A79uSpAE3Qvy5xcQ",
  "key24": "22NV2483T7FKhcVHPSKCa7dmPwNCn19yyig2b4aGsRiRXr6g1jRDeNGmrfYXQ9cs1LtzLLhcDoYtrfCVd4FUAHiG",
  "key25": "5FLnkgY1KjHFcdC47hTC7wQoQQc9Nj9yXZNSbKXaHpnq6bESXibeMTGjyersEc48o8qfyL16baoXJYaDc78o2Bac",
  "key26": "471apgsPSmnBQyaM1magdvWaxE5RHWShAb8y7paRdQsHk5vzBKjFaKCXrMcPXHTNYo2RL3sV9NRRwwTCKQKDqtzF",
  "key27": "3a2fiXhDuKHGv1cDmm33WWQsqowCMqPViroq5tUDRMwwFdeRR4kfTFpZdNyTDix2Bwq671yhiaJC3u8m3kUbhqsF",
  "key28": "59XeBRbhvovnZUT95pzTSewUYcrmp1gkJk4fhkaEpJrKaL47nHz6tmfQqAN5Avvu5dcFM4haHHump48o2ezVe1RJ",
  "key29": "3KwzmwCbPWkmGvW97LExSripC4MbnjUjS8X67KVdSuoHh2JhQAMw2ZcYYVJFce8r5XQxhpTyNX9gzFk1uD5u3NkX",
  "key30": "64epxb2qUfLoEbQnQzgFYFHCbyySUoVnA2McgGtpuENenXG691Xiz8BmLpoWwko72AmnokektNYPxa4fcodeksLg",
  "key31": "3t5NCMYgdociUUU7xwmgppbUrkAPbAnVAK4xe1iDFpw4WrGzA2dLqZNeZJQVbheES2bHpuZKwqkLcY5EGDbQCir8",
  "key32": "29wmacpXTQSc6trmf9V2Hu5VsnfkZQUb62XnB59hgwing4WaZYZEQuaeX362nQGCsb1jrEyCafAAiVnFt29YAf9f",
  "key33": "2BiDbK4tWR13aoZET8Z8dgsHvdmeJGxtHw8DJhQGmQnD4jG6d3SvJ5BCYzHZ6eeFn7EBcCtfpF5VPBoKjBCHXEBR",
  "key34": "3iZLf5UWgiyiUtztdhaPtU2PrfMHycjZXqLfUJPcm2FC6U3Qf1J25sCYcyqboLmTQaq4SWyCa5WWg2DojubmKcyj",
  "key35": "5d12WwZnhpBeftSz5YVnrM99ZwxiZwn45sNH97ujsYSaDvc8a5dzGdz6K1kmga64peEqp4frgewqR6WsANPKR9r6",
  "key36": "T7im3BBTVRb1Y9u4uYGJRnAwJHBEfyjNhB9PSZyVPp4jfseaf6bFVpnQT7z74GKzwr6eUn8TDs3XSbXEbz2gMzw",
  "key37": "5nbcciWoEAqLmBw99a8635UFnRkHJYmMY9H7ekw56BFkkZgYkWjuEZaCraqKzFbYHfzrNZVcU6LBwDouqjJjHb9g",
  "key38": "4KrSZYF82na7Uw6xjqPqk2zKmQbZDRuwXGiWNGGkAjTeD5pfyoDW2sApWoViaE5a7AHbUGBnEW8gyzvBtNxntSp1",
  "key39": "3DX873UchhYqLZZ1h7ty7tgLxESttgLXQDSWiTiAszsp3VpsKB9hFawV8zeSRVtUN35xxKwkwMG6TemJqEJnF4BS",
  "key40": "2f8yac8Tx5LB5CiCfiepPCaxtEQWBM8fujT1JM1nG9AAV7xXDXDGRoca6oHbpnmDnokBJtNmVjZo3cAGHWECp4AY",
  "key41": "4eAvLSKUtnJBNrUywXpeJ6A7LAe9NhjPHvW2MqRxAqRJHpxHhNVguE9DkxMGa4qoAq1Fr9iytiX1xSV5r7K6HRe5"
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
