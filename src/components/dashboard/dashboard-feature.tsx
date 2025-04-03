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
    "54t4RBUNietPz3Xw1mG6NS54LPWmCoTFx6tgmePVJnm18vbf5QDNT2zhg1oh4T6rA86gTnSuYjpqFPo9xSGp8rJX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rVA8NgitTPwjDWpYGiBo6nJTdDqG2iWtHRw6TbURj4znjkHw11dmyAcoY5Qw5kqcsxUckBDJ5bP1baGr6F1yJtU",
  "key1": "HxfEbkeFAaXU2NkEPk2TQjWaNWPXAYjeRLBiYtGbMpFTWpryf1tjAZhj1ByY7PftyY9FcT5BaLts3NFYBJPyZS9",
  "key2": "2mZ3D2LFVVvc5wMQnXcyrQAp1xcYHDEnhww2TJrxtzjvgQn7Tr2VNRoZ9NVzrRk48f7HTjo7AFQh4dvAHxY1Vn2y",
  "key3": "2vSJMfP39asNdqLsBq2bd6LjDodb8T9h4h59Khn843zfRqXxmqPSSFWMXRW3JS8Fkbi5WyewR7E3yZA6vzdQVZ2C",
  "key4": "BKnsmnFcjWqtL3EMj7rn3fwtcXCp2yCfZ3kErjnnmUGySRTYTcbN2jzAEapttt5su1k8paHN3SmT6agH1P2i2xi",
  "key5": "BukCYrUJaZ9hTvJyAan2fJAMmJLNJksNtsnhLMTqq53d3FXaCAXrwCCQsz2ZnQfkdXpgzCxpStGXhrcRNnpSTAm",
  "key6": "3Y1r3JX1RkAqZ8vqyxWCnYrWGhfXePkr2opiGFRCJ8WJXSc7WXEUfyWqrFZJYX7KHHn5KJvqD8xnYT9FP3t8Uj27",
  "key7": "4NTJ7xXofxG6vS6hCP3hAvf4WJZCskz2SCzYrzgypYm3r1RyPEesqNweZcBF3n9Z2BukFtzjxRVKecAnxMq2f2vh",
  "key8": "5RXVEB5UigV3wKZ4YcGfqLZnUXnKdYSyBFd3DkHqzMnMMDNTauJGMC5Ri444FhNAHw5EK3pzt48Pw7F5uEigs8oo",
  "key9": "2FsJPz6DYvKrCSXX8smJ7dw4PJNmy9M3fgp1JUs8xBo9RVS3HvxKUsG1f421uBgPRxKsTUXN1ny8Pnmnmfk9TM8D",
  "key10": "uTNyqstT29Epx7oB1mQKfvohVx9JyTY2PFrdxVpwUK5z4uc5ouyH2oaiMZCgqZzvm7DUrRs7kcr5aoq2RBBaVEg",
  "key11": "2iXdoeKr6KojtsYL8fR6KfWvTQeG2cFCQDskbATA4xGojmQQcA275W5zsHGZo28tH4wtU3d9Hv7ngfKsrqtEVDkr",
  "key12": "5MUTtYatjjaheYRsa9RgbD5iQbZSretYLM9ZJc16DTQvQtNZxpSo31qkp8V7QcijdD1pGHaf2msH34E48BTqvfK1",
  "key13": "34BhpyScW7eVSK8MhcEsmWspJzagwF6GoDPMvdu8U7pKgiFRD2PVcWekEDttGTxmENLtaKGPfQuCVird1u3Bxe2Z",
  "key14": "4N8RVF4feAy7LFduvaQZkf4aMMottfuiou4tLAmnEfeZM8cMbQm4fgj4Vj7mjczR3MBt17v9jpkLdb9qDzHoSeGZ",
  "key15": "5sg9GcxXqzTixGYLYejUEPtumRr99QkwL9KuQmmPMPpa4eD5gaiStW6ZgFZmgcr5zDMwKeP66VegoK6ox6s5nMSq",
  "key16": "wHWexuo8vmxc7o7BpNEa8MYq3H6RcaDNji3LTJoYcBTw1zHW1Pyp7mgZ4ZsHByRYHbpCyEfChSCyBiiNRf2TmBJ",
  "key17": "wRCWbzBHf8RRJDPQTvHCfwgt9rSr4hFCsSb536ErD3wkg4otKebkRoQZCi8M7bjmiPFdKMwgAh7B4vN5WSFdeiw",
  "key18": "3usrkhecyVMhrZ8TQnuVaZr4FwyWSpiWGXPzG1ZUHTE4ZnTHd6xYPyJZ5UfKQNWJ3R8L4w54rfYZFqAe2sCzocTS",
  "key19": "5LxCt6FQqGNwHghqqYaH6x8tsERz7oQ7SDBT9zsYbtRZ1JuCEWYXictakbbGpHx6QpYqAhK4bynVG5EdwWr7JfP",
  "key20": "42Q9KXzRPEyeuCLqcQMxmeGembpGZRaduwpnWT1JBtZQEe7FpkqSzFFRnA7VLTE3JgW9qq3y7LYK13egjKpeY6uA",
  "key21": "CMa6tcFQutT724ZFYmY2dbPYqa2PoarxRGMY6WkQbL7a2Wy1GNV9mCYXC9SGyvRD8MyrpYek8GPYb3d29iHu51a",
  "key22": "5d9pgEXUtfqisnAovAVbc6HeTU3hEFAp9BumcmbWmjFCeA47kZkGPjMVB9X2HNNzx2EFw46BkBMM2zt67rcK4ug8",
  "key23": "28HfYtMyPmgUBwbXQg8fCuSjdktymJENJdaBWpLUH8w3gstasYJqzzgtH3B5NDQP3XeBMeHihWnt7bPhQmGFzZex",
  "key24": "2kvDvUEGauEz82941MdJKiJe3Hj7BS77Mx7SEJu7NhSAu36cnaLstrKdSwvGZeUQrNW8AjjQ2Cvv5ARKSeJfRbnw",
  "key25": "EJUsALDt4ezXjw4eYouoVeU3pdz5zNqftWPGC8R6y5ck8PbnB8oHMrvJz1BHBJtY8ExPzRFHd841uCh3Rw2Wf1B",
  "key26": "5TwcNX4YCJher6HjVvBmQp4PYzfNuH7FyK8azgXiiahomMbrg8quGXmEU6zJYgGrWU2oHKFkbKUjh3gTp1WFeavd",
  "key27": "8QyGRSDVfKqhczc4jxrQcNCsPRSUXQgkXY1aDz9vw8Y6cUNSNjAkF3WnBJ2dbmsGqkMRVAH4y7yA1T3Frx4zX4L",
  "key28": "5bw7oGsRuAbZ8ot8GUvz7JRhLKNRjnr6Fp1i16NR5GkbASAJycsCkdaPKHm3CdZcjb14Rv5bWAAjntVtDmAzdv5o",
  "key29": "369fogcWnE2sjyw2Ykmp33wdrYSCKsrRTeGEr1ZBJ4Jm2mdZYoH9btTwguyxrEWgs1JTYUXEXxDmenDerszMz8EX",
  "key30": "3Cyxik9En6MMBkeqJ9VvaJRdSn7jL3pHrbfdaWFwM4rD7omgUWL2cMv8Qw5AJWQCaHmiyKxV4WdjqpkzSQ5nD7Ms",
  "key31": "44myJfgBotQujpajLG3tYhaoYqcdfVphSqeMvKqUTxuSJ35HkoiAihhnUn5A7FcHjYoWBjF842Ww79f8ygkCxwor",
  "key32": "3dS8y8KSBhedc1kCRz9Pz6BACVFSoHQCDXULahkMYu7h9Zks8D3aia7JRGGU9LC3Fd61M6z3dP75WofqrEKWtLie",
  "key33": "2UY4KtM2X1p3acHpBvkyiamMWBdCD46UdnN8AEXE1LLtpqe1rXqXAecfhCPpBeLDncjVcpapCnMDaYG3mGrkx7k7",
  "key34": "YNv9upYdNwS7DDMwFEsqGXzyByLgTDGHjCqGaZkmUgnWXSKuNX3Wq8gmsosrYdacTDsVBbVQ9SuSG7r3uyUaMEU",
  "key35": "4E7r4xSoURhoDjLmJ3ZELNACWgZZeH3Tva99FjPntHq2eRiSkpxYmUKpXVaXXPBy8yfvsjndzuAEfCTK328MydWE"
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
