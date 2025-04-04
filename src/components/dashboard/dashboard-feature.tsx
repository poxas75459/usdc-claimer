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
    "Wx6wssuNag46YgrBqgV2rCR1UB7qCvKsnFtSSssQgNBHT6nmDrAr3TYwXzwVja6Qjp1uToPn6FNxRd27YjonCmE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23vSFWskV6Vusg46uDT1HDZALEzVYdoQgKVpiyCsekLwym4W3ReLwy8XoCFnDNEUp7DVmekaZ6eXsqBtj15WeW4o",
  "key1": "2pJq1R8h7E8yzJAgkpdUcdrz1d9v1agMVcBQZJz6ZKFCJrM2gSjZEwgH5t57GwoHnFEfWVfjhm42LJQJ9LQ47fDM",
  "key2": "21uq9kDfQcm3mBWbWgxxsXbyAUZARfurDxZNfa7gCmmHMpTdAGrG7ZHJdP32Hphtt5vEoDD8pxjuhL4p5YUncrfh",
  "key3": "2jm96ypNnHqVxKEukU1ur6Ntt7ea1an6JVVHuAJGzgXjDGpwRAHJgsd7tDMnR58eGgFJFWecgNDzgraLbyWa6nLh",
  "key4": "21wavvJMsYDvgwYDVWfq8VrVXQssjLi7b3MC3v8fHZo5SazwfqeZ6GNKzSEYLmMrzNeAKC8R8NtBDL5GYjXDxB76",
  "key5": "pCH9FMkAurE2LawFUjCfze9hspcuwn7xbSqDCr5KHjUdjpVNW72VxYjGWuWsoQBkxa921Vyv3dhsNsB2zKx7rVP",
  "key6": "2MeP6SeZVrfdeY4p91Wvgb8X7kqo9oDggcoBiABczFX5kzjoQ5z9o8c47hXp16jE14ifvRyBxK1Gz4c1UUota4wN",
  "key7": "5Uf78oAsZu4YyN4wnGs82FukSHfjCLevpPWWT7beVhSbbsr2F9WuLwYyDc2jbRCVQ1fffUgZvqJCSuLmx1Bqgm2c",
  "key8": "4yWhPU6G7hZ8WVrRk1uUazSgHJQD8LJo9RmzXWFqzH59tzPqU2sxVjHixFLYhx2aFEMeA1V4ucK746C9noHSbYAw",
  "key9": "5x3jCWdfJBcuU8zh4LDCuxWsLjhXWdHdoVM1yoPA68Y3pfMM7EUFXBPLJuckhztoaUmB1rw6djro3shdQCaq74BT",
  "key10": "jXu5Dp411nidVysTQF9QhPutk6btHiBQQdsbpwX1w3TWZf3dZxxoodHDP4v6JCkBWGJksswZ5KshJdp5jh5q3Vn",
  "key11": "4iYzxqNuXWnTwzrixBXuc2w6xAVudUuV8aZZMsSCaF6AgbdZhJaGdzqm3jZ4kVUgT1XQwcsjT2GYMuo9yUNhcsFn",
  "key12": "5WsvqPJm4ofSrFTewoQ6c1cqfvbaNKfbWYmUBRrUohKHtff4qjyMynsMgKvQj2aHqeW3gRo12vCsYVHoJ1fK4n38",
  "key13": "zQdNMH9eDufKqeaiWbnMnnnbhUh5ShzdzN2yZsfqYb4pQyFBcVAW2PerdJh4JGrkArCNQgsc9EebCqXWVTdF4yN",
  "key14": "3uFQRSnQ6VcQZUFMZWw49sxfeLZMGHE6abggKHgXDNd78GbKs3rwG8Go7yCDDpQxyv4bgap3uDNwV3eRjdsGSAmM",
  "key15": "4gxQcPk19xUCMQtRU149QzRfgn1R9xgG6q1MVcDU7wo6CNfcsG1KLQ8Cyjtisykt4wsX3qVKUvBkxvAHwR6EQKJ2",
  "key16": "eAcBQxiVHiWPSFE3DmXYCKJKQZ8mZrREEdi7asXDhMy72vjBzUhjmdRkLKXfzN6C9PkbskDB7Pv2UTosKDLNd4r",
  "key17": "2kJPhRUvxjT26sYHpHBBa9iqd2gTDH1XuXyqEGFs9Pjq34etWoxbdhUAhoQkAi3EwXNzdMvaZ7p3aN1y913V5jUM",
  "key18": "3Fs1R8UuFUMCRjNjrqvv7ZxrPLQaywqEqZ2LKoLdDg27tRQMP6eFQejVfnbFkTUf5cxmid8FYkFnC96dqvuoArXt",
  "key19": "5Yb29bFbG2khX8PBNTVoTZuMuawbQMz8fxgEn712R4EWqFKrXAcfhWH2vPh3xC3qvApkDjNraC5JDH7bSR2Skknb",
  "key20": "41fxR6XFYdCxvRvF9w3HqJcFh7xC3Q49w9Bp3muL2CL39oEssP4h5BMWuyS9PdLjf6GwpHvZK22LAHKh9m1GADM7",
  "key21": "24L2u9T6JLPbdh7DPVpBRGgHVp1rb4FD8mcPYP22fBtrPVzdPXoVMqxQzVwsu8wCh3aaVtkvuiQTysg9HSQ6fGuX",
  "key22": "3FwxFXTNFZLjMhQyCHwr8fHN7zGd4sApsNavUTFDQgWqTdCwSDHfwLHW2ZipyUD6CHkQ3fALyVJdrMUJi9xzC6Ss",
  "key23": "5cnNqXxWmhG7jggXk6CTcKCzEy4NepQzH52tWKH5b8SYoGtWz6akVUb771iSw8kSjnonYn7HcTFKWkVR6oghunnh",
  "key24": "23GFynV4exj3HRnZvELKRn38g6WCFKK4KiJCy1jpdQKvRYqed2TZGn8Xi8NEDy1f8dEr65yFQQd2N4DVCZwBsLX5",
  "key25": "2D6GVdLxkJhmCWtCquvDP828dkjw7hsiUKQV9KuvkR1EMJvcEHZiTRs3wzMCzkcs52yBo4cGyT1VqnByc2c9hkLs",
  "key26": "5zTmNzZ1b2L8gyeKMorpwKecgMeNm5SRCQPyaDJrdFRLiDSjtsmtKKUJ3uE594V2ugnhu7eMjx8Wdq66Y2hgMmMY",
  "key27": "5MkAsJyVfu5bFEp991BbMeaHcSZvN7qQkiMBXTfQjeCWL4C3XTMbVMjto8nvTyU13wmvMn15ckcnGeGg5vq5utjY",
  "key28": "5poRb4oMFB65wwTpXJqRuZNn9dBEnFbJvWMNuUKNQquSmzdiVor7NzuCps4neVZScQDwYnrLnN9CkATVaKrWNxyX",
  "key29": "3F8c6CoBTBCGBDJnR1MSsv3Qf8MwvRahKHdo2qYENSu9HCx648Nr5eG2SJ75BmkpxuYq6aupGfJfXjbbBBwg1zAW",
  "key30": "3WBG1dRUXjeDLnkX51JQvyBykqfKyxCzdp3P4H1i7ECNET2bpY1kT1vPSP1K3rFiSumAqxtJ8iz6wWeKUnVW3jF5",
  "key31": "5TdQwkzyatCGaPdgk2KhBppgQr8NiibYzFG3M3JQtQyUWW56Q42YY3d4xbQXcXr4tTVR9dgZXdnLqy6v2yaMqS7W"
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
