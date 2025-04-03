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
    "5SDP4aSVjcDTR4pwuWgU7Y9FL295e8weLJT93tpatfLTuTxcnSP3x7JYJ6hhy7CCrSS6qjFN3m9Xq5tLVf5Yg9LX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HhCkLXSrcCYEVDdM61Lp5kqnBAUPAZQpKjnJS7NgcB9Ag4hrf5RVtbghcjtXcXXmhb8wszEbwbqBKcLD3rdkJw4",
  "key1": "3r5fjMqWaejNWtQ1tmNWuTdHXfjMFpJp3JPoF2asCrb6Nua34oMmGNCXMFFiFkuyQwKGy3Biggd8YuLCrpxMvTNj",
  "key2": "64E7PAbKPC4D5LNc4otRMtsi9xcckWkU2An5Uw9hrPjunV2L64X2WCAUKDQkRic6fkBDVpWTrLwBQHeB4o6zm4jK",
  "key3": "2FEoKHqTb9421iXo5zfgC65GZPkty194CLj2zCfhWG451fibi4dq3pGWq5aVam3F8BgjieHS8L5D2KKvJghvwnFB",
  "key4": "2WztMgJrRzrLvs3Z6ZB95ievHkcbuEWaiX9ikgvjFSkV1kSeMeBA6PvjmFLPHRTcWAiCJaKaMQHNmtsvGK2USVYM",
  "key5": "3zE1keeE9V1CLMuQ35MBhNUDfFPimwEgdqFQNgCLWCg5s1j2BdBdTMNuwFQUhSJHv9U2HVN4DukpuQTb664bH5mc",
  "key6": "41V9nwoXdgjcWTYVUk1EMQ7D8ApUDT7P9rd5jfVDTGAct7m1kZTVMoSSfUF199zJ4XpqTxWxw9qhEUuu9bQQcRgZ",
  "key7": "3VJcmgPPwCn98TVPGBgZueq7u81mDnCPAcC3ySDxPyBhz9Zvg9JmGu8hVq83kfgc3cKPMYV9qN4hfFtV1MwEbWfe",
  "key8": "4mCKqbPgTnc8xjZeFGG3pzAhSYaa662aZR9bxy5hwaWQmYFAzitZU8bHm6j9a1PTEBdYQFyN47dW3oLv357pAudw",
  "key9": "J2bYFbfPZycuhpY85QtD5BaCna15XokwQhnbzqveLnojKRW54YkVrmWYgGbSScNLeAahtZjHMkCfNNzE6zcC9hm",
  "key10": "DAjrRfyN3zwBfxg88tgjMnGYQVPQ9fpX9WEDJu76qeWB9K8xeRkmM28i7N3EJTzCbW9QgbYEo9ikU6742g5yaz5",
  "key11": "5uLbnJkAJVyedpKKrkLqZebYt5oSRwt3rrk6oGXPNNJK6XZ2XwVHStoPbSMJMGKky2gNpAaABpbctUsPtx77fNuU",
  "key12": "sbXA4aQMw3ph8GYBdMHe8J4XzNzab1GS2Vj7ELDu4ZvvQuRyvab9TduadhZWrdgtmAnqpAzJ5kaS1Hr4Q8eduf8",
  "key13": "59yMPCGbgXdaddeJpp7fwTTRXZZyfdxJHhaLVNPzfV5iL3UGYGYq5PhwqW6X5xqbeyuXp82rA9TQbtfuhDWYUv8h",
  "key14": "3CLYis2qsQwhhx6J86HUZQfEoQEqN1EXinbY9aAS2BvA9AibomHpvzd1JhJP4JtScdZsfBHUbqVJ12RijvL9W1tJ",
  "key15": "65SSAtiboBFV4bT7jh95pMfQY6CUCZAMEboEf9cmUsmM8wUPhaw5RZBYHjnbJqEUugatPghgjhopLThJkfyh5giz",
  "key16": "5VuheqvZ2WKD4kCCZn5fy2cyzkcZi7LWSdymnLS18w6zDZvfvdG4DSNh3HLAsqwsBvf8nGNEDGst5MpCrAwXHU1f",
  "key17": "3PwHYEK2NdmTTZfmMxwsa47tn8u6g8GbZ5rUHeLkK2ABk5etB9HY6Yp53wCL9hrBscskoBFx5x8ceVAhUbDCHUaJ",
  "key18": "44xmwbG2DjFdMjUaMD36ofUcKmefZHkTy9VgG66uxMryEUq1uXmiMx52un2ZfA5KfpfuXq7CC6vNZ8u2RDe9bPbm",
  "key19": "4h4FwYPeKfpKANsnovwRrGtHW2FsRazdY3R8JU7tQ2RHzw7xcgy9YBWvm4gSgLPGxMR2NK1LHxP8vGD1aoodePo7",
  "key20": "3J6NZScVZrVh7XZTQMzv2qzRXi7AGMPhn7NC4sWcCaiekcBamsFHHVgP2QeK5nUQMCNoVK2HuJ342dvfRrQxWNg8",
  "key21": "3A8Qpqoaz9RwkqQGS7SniraXHLeAMFSqFFA4ciz5nRq5hFeeTn51XqMVTBg1C6RMHoA729HiUQqq9r5Cp7jMC7NU",
  "key22": "3gxy9vafBV6eWrxngZHRhJcVseR9SyjCv4iTbu7FVdmrUjrtWpGY2Ey7J3hYa5UYSY5vxnML6QVAzBVTXD9tZuq9",
  "key23": "4NyxHuZXLeyPsXTqyEtPCDazZC3oFnJxHBCRGaqCPjqhuJ1YKvLgBX7HefZ3KaEqVFUmWiquzYHyHH58ZBPTAXDi",
  "key24": "5f6Am2ttMgApfNgUvhLqnjP89m6xrgosMnGf3DcS2hrMegQpm9JZo5nbEVyratYFUnU3LWbrm4aAawZgiPJASdwx",
  "key25": "64GE36V3EaoTjXVXzTBmhZwGWok5ufFGdM1ARSPBjtnz42nFhSiUEsqiV9YWuoQxN3hfV6hG8mf7optsbwZFGmef",
  "key26": "65KpZ1AX96zeS26bkM9aFb46Dh7WAvkSobvhV5S81hzh9d8HC7Guoctw9GqEYTB9TgaKTzoppVqSrEGCRSRwreZi",
  "key27": "4NqtLBXxjJkdFXC6wKdWhHGkHr9xmEV4ToTzYT3KcamT1bkRJepNG4GnVtzxVEWVzn7j5CNkLfzvm2VKdSsqntKU",
  "key28": "cNrsxRXtiiGwkN2Roiz9mnW8rnveycrM8eds8CDcknt5MmoVxBqLFewaePueTDy3dV9pSoNR9kK8z8NzrBPPYVT",
  "key29": "3PiTdFmW4Q7sb1wkfQCYuNDz7W626BfAgZXYjBKqXgKc4iZdzgNkowAqJWLF66yxa4u2ZqViWGpskbEErSbYVq7J",
  "key30": "3bAXuKc8wuLj5rkq8wghLiXAPdrepYPyyKVnwKEZYhsD8kzzyqh4k2zjQtLzy11rMr5ADtA7h6CkPEF5SYPZzXrz",
  "key31": "QgxnoD9f7CiwzCg8PSFQKn8UnoP5nPpUQQmV87dDEQQHR2jHwpubADawSsCEr3FdEr9QiBokxnUMznoSPweSkfv"
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
