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
    "5skc46uSbt6n9JKye3tdVfDXb7nhSUdXDsRE4k9rFMGs58YKmYwzZxt7GQY2vw7bhcvPJT5RJ2kAGzcUVq5EzZzi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4C2Qqsg5YMysuaPSyKk7ddAknWMgbWzyU3wmz1n1dVrvp1fc5n18XKnmvgW8CuZNpXjZqyreYS4oNJ6xTsW9Hj6a",
  "key1": "5BY9VPdr3oEiJxM323G2SKZAscgU38UxUTKWLmZtGBKLP7DGwgVTqf9WZTEgt5RNXVMNU7wRz4Rsv59hvAyEuRaF",
  "key2": "2RhXbk9ATbJNtaTp3gGh1iBgBbYLTY4mGLDyonZGT5B9d6AsMb7aKpLrUG7MKse2TXFcr2gTkSfaPjKkjngpHQBD",
  "key3": "2wn3wgeSDasf78wAnEbafYWBosXH8wSsNUJTPvZaoqgdez8H8fGoshd8ojpBXv6werrYK3cq1LyFaqP9p1VM1zhG",
  "key4": "2ufDSnn9NTYdqrzdPZ89zo9cUN5LoR6sqWA3WHBGqouQNfzokJLq1h6XSkius1KdKi3R1c7VC1QNsXZmShR8adbK",
  "key5": "2y2zktnikioRyoUrmBbDxrNRfCUaJTcbay6UVHgSoEZHMc1PRvketGNxhGzFtyMxTcS3yzsBHgNn34H4DaPZt67L",
  "key6": "4mqPtN4bJ2ryyzdR2VcTxw7zy4Qy7XYv4hNWmjvtNmiK7vrNae1SvFAqk9ycYSSEhK1FoVNV2PTQJQTaugbe4ttf",
  "key7": "65qtWDS9qfU5rH1vFZLc9rUuSHRM24JQrxFK94sqykPqhVtCxxAUzgFxwPZyYFtE8HudjogzX9twAYoaZpLMZ9hS",
  "key8": "3r7bJP8LC2qeAgDiYZaZ77vv1p9HGpxNVqGkXWr4sZL8dk6ur5fJwXbc6VgW6rMmz1ec3XjBRBZY8qPcLfquu9LX",
  "key9": "4pMo2wy1xVpyr9BewV1XaxzKCJ2SmEdACK8DTERTifchCiuXvXrjKZjaqqkrLVXUeG5wCcN8jqvkWxD6zaDLX7D4",
  "key10": "K5MKoFZjmnnK3QVCpcTGsfCGacLWJUENUvbXnnwHMMLe22nQf5mrEvGEh7oYYJ25mfWzFkafvB5jZisZywmFPjC",
  "key11": "36S8hMoDGYHT8jAVwAJV7WVwBuaisCqDZ51jeQsdSmHK3ZttgeV2WPQMpU1YSxRj2W6zrukdhnMQN3btX8Sep2Y4",
  "key12": "5Gn6P3y4dxKETL31PLhfGuxbKpoJibCoZRGYgj6R1wuaYHKQrRfVGGoRQMJ5yNDoeDnnJU1BGD4JEifzfdUKyAgx",
  "key13": "RoRQ5ntcCBppEjun2baZz4baBJVMtKNM63tbaGAmrstjYNdvm4FLAw8AzspYZDfgPiUpx1h1dLcmDpmupWWMKyc",
  "key14": "2erEmgVxCQuAzaM4jbGYMFRNEf1dJ2TuZUABkHmAXhh6BMdLdmmFH7K4rZZn6Fry2LiQDKWvfJ2Vphk92Cb8cAi3",
  "key15": "5zvwXaMPHGKCVvp1Qeqa7KEHvKfJ5xi9GTaABTxPzNfpwu38Z931aed8QrNAubTQZsYJve3YcCwYBJKMwEgvfo6Z",
  "key16": "2cfFkJXvnq3o8toEv11Fe22CWM5jocjayvbyRZqASPFVRL2eAgq7MbNbwqK1tt7xhEBhrzFoZaufbf6PSfjHPnUD",
  "key17": "3pFbyNwYLaAKTY9YgUAXzNgoZtNUZAJLiXeATTq9RNUjP9d6nGEnWFCcnKZVLYAZmQVFtAvchonEqjvjCszqd1dm",
  "key18": "4stHHQ6CxHHoJWJQM3Snep75sy4Yeu4tooJHG5r9aAiwBhduNpLG7JSCceMQbv5pF1ALzii11P3Govk4ejv6zEFs",
  "key19": "4haJ2SP3h2yQrQikWb8U6PmstzG6sJceMNz99kQsRkrYZkrmeqLwv9eaWrwKHzw3WC2SsbBdskYAZYTiygPmFip9",
  "key20": "2dWk8wmk5aaUTJWqf6hmzVTqfUeNtYiFyGxAFBEVE5KuaWbACZGpzUb7UMqNtqNWNyTsf4zQ2v5DS5PBnv2TaiLn",
  "key21": "4kGMnt2RssT8L3FSCEj9ajMSudbeaLGhrbC4uJsTC7ECWaB7vWkZhjf8Ki7fk1JJvrnCbDq3PnhEGK6EkwvT3S5q",
  "key22": "4WuxPrWZKo631yeFRFb6f67jzYab8QADUrPnDeFPTFEyqVnNT4rTqtTvd6ay82ntQqngjqDFT2GAKuVhdquvczDc",
  "key23": "3frf35hPAzQFxYvKheQx6At7MPLTAsgUjSAN1JFnosxoJkzDsCmaaLWnkw2gh4D5HX2Fqf2eHqRKhWw87N8XU5uH",
  "key24": "3r2NfDd4uZJ3xDASdqqmEUn9qnAyc3sEf6m2WmYsTeGrKuFrPZ43e6UnPPpHVtRTvwBsLTnau5RnqRfbBZ33wugY",
  "key25": "63GkCNYzTAniscjvEvUwXLi6ZdMQ2Mp3mT9FvGVz8yz6HrhN4yiDvmEybbfk6mNpS571pRUAapL4qWfk5Fy4L4Vq",
  "key26": "5YbW6PdgqremdKAAR17pGzex1xCrKwLy1Ueqs3wVN8F5QkpbTMGXxn7tyPcdEj3qSyUNGbVVfWCdikPC3WNUe5S6",
  "key27": "R4rkp8f6raao85FBoGs8V5VaLcj2Mc1QhWFGnGDQWeorsg5jWcUVcYS8Qeyf9RqTcZ9eGCmHgiBo6ux5jsQcxc3",
  "key28": "Gko8W4GMo69znh3a5CxjXf741ePiNErDQJxPAgYVa5zTghqyuiYwpkaSpajqo97rLD8X7VjMRuV35c4iAsck4fg",
  "key29": "2NaP85kdkZ37nZLYAKfLS1m5ToAFX1Jj6C4wVv6te5wUJJHf7fCRXxhM6yj27jAXiQDBALUHw68mqdkctpX1v2zr"
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
