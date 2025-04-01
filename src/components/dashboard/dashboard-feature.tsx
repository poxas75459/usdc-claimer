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
    "4rQcUHDTYL64wdgKwzLVjCAWxqJdoY6BK2BwyoCkXLC8PSnuRpdNwSNVRcbNgNLiw1HkK68VKcRL1XtBDoG6WsrR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Yj2wUWHxdQhJBMEL5BiCdb4tiUZsWAAK9HMXNCt8yowHw6RGyA1hbdcUabQqdJtjyLwBQoAw3UV5M4eViU8JwAh",
  "key1": "F8zt4VFN5pMioHMcgC2WuRGJN1yHpaRs6rvFhq8VmYoveFDfhF1Moc57s48rUe6e1Ny3KDoGPBb1WHFu1cBC3eW",
  "key2": "52TBwsf7xpNVsmd7Hz3gjBVc3xThZov3MLYiVXFLsUvEo2zQESmQKU1zhRaD9Rn9YpJwEDghciiMuLXxiMhmjvoC",
  "key3": "2tDfVUfjjBTPuNQPtFzparfTxZX1XfXaHpYNaYhtiNZGdofDbYPNYZfvBBp79wk7JZTEKPrCAfn9F5ay9GmYjdBd",
  "key4": "3siKn9ND2uCAg2dXLwXiKzoZ9XwT1GecN7hjjGnYGKVBQD73FZPAKsWe2EL6wadGwJFSBRx7vCEdUe7qxYB3fVfT",
  "key5": "5yzQqKPeHbGRxQwkKmHWwma3bKUo4ZzAJZ3ppWGwh9xAXhuxPoQMA8Yn2Nprsd4ZsniyRXHfrqfPw6p7jzYHiwJC",
  "key6": "2kFHPxtEarZ9uroNS4JSWU7niPC8nNCNYpm7JbgXo8EaCzn5upsYZgkM29XzPDsaFpBJ7vzmRSajqNgUauXdbSG3",
  "key7": "3YYfiTbvKCZUrECKhNNHDaYYCd3hAYpgDrHNZmctvkt314m6rxRYnDcuj7amChrwtQpCBiiHMVcmjYzCLEKo2FuL",
  "key8": "5beSxo25k9cjuxGcjxevDJWfJ8Mk8bWrYhPytg3jpw5dWsQcuTMt76157YuxWhk4LxZTfesv8VQLPBquKHb3Xje3",
  "key9": "2UUw1QXTfXgk5M3qhaLX7iERQYhpCYKJFN7Uko5Cda8EWAXEkfTWuATBns6up139JXnTpAUPh66Yr63opDr1a9Zx",
  "key10": "MfAGByd99ywR57Cm1hY2yMCzaRjKDiA6DZkqgfr8gvNekZ5bvngPVX6j2tWnNSFzZKkHyXdAiFh7py5zvUwQWxi",
  "key11": "2Q6nsNFhrtjvFpMVsH5kVnc171sv3j6ELHMGzs4sYwATTC3K3FSsuKHkehS6Hf2i4LBAhJDr9cT1UH1uTDNKayL7",
  "key12": "653KYnFx5abXWm2DGfG8pJ5kcyiytWQJJfYbfuGiPBCk379uJh8yrJsukhYPqSscgDxDqpZTwXJxnyFD42Z2LZJc",
  "key13": "3x2QJMTg3qD5y2hU5s8PUEjCVBtP5twLYFCs9bpKsSM4kvGpKquUWWb2hBG32ejJBLNocxjKSmH7V83FLfudJJUa",
  "key14": "2YBELU3qT1pYt4qbrChNAtjJPN4WJzKLeAon5ZChRpZjWn1tSRAFzQgw8HvWyuEQ4P5nsr1bwUqXUBXZBDDNkYKq",
  "key15": "5jRFWss8TzCNwuo6LwC37prxprUoXDKx2dmJxTmyDPw5h7HY7m5B5Kd93vXvWhS1r6CEhzHQ5gooPaepFFvZC5D6",
  "key16": "4xCXqMaL9bygJeaNZ9nJ86a6Yy4MSSog32bUrAKZs7y7f5toQ9FirRTDZaccqdcRnPdTNN1q9gAhEKVmAuh6Cm9R",
  "key17": "2MzxRMhmdzjDCqHXuCuzyoe2AzuxeUsEjxN5QguexpeQ2CsLvZr5y1LX6SzRWT4ucBd8bxnCpzie2vWEa4Td3PLU",
  "key18": "21V6vbYG3cYm5BrwVXuRcUZiY881AkAkE4TfndGdBrrgA677TdmAtJVtkPhthCBzM5gzwnendmEkfet4jXEPvqJk",
  "key19": "3iX9JK7ZtAhStM45ZVLsQKN9BJnczbHQdpe5W52b1BQuGbv46Y1tv1X38gKfWGhYPtenjPUCaDjC5N6QZGjRE8Ra",
  "key20": "2MewZXp81sYJ3Rvs1u1HRQEtdQBBYzPDo89DSzZeWUdnyAzePcLZNeY4uzWCCXnCoJ99PampxCQj2uBRAVQmDThA",
  "key21": "3Wvc3mfE1sMgXjBGoNXF4iLkJSwLaMH1kq4PD4K4yq9HQxdnqYnVC5pvo9Hk73SbAzyVhffrLrQ5hWtCxQdiQG7k",
  "key22": "2hTsoZDpCyfAYdtArhBpzC6sPpH1YNMxKMUKWmPFnAYYWCDpnBitvDnXhRJRX25NSQrjCGzBbPJ4qParR4kAK51L",
  "key23": "5oSCV6YdPsyw8tKjYA7pkGkbdrzz14HHsoDri8ieKjmwUPjN1uZ5AhMwgJrYepDbL5saREZgeroPX6XQ4HyQBFUn",
  "key24": "5kmrFit94vqBFwL3hwCRfbM8KXkCT3ekRSDpQMb646Hyfadht7fLjr4d2LvUZGwnnUHUxdu1LMiB7n4bGG8cTen2",
  "key25": "2weMbkW1BZzF5Chsvok3SzEND9qahZ2agymrsHjF3s9pSWBtC347ndWwp94emLhneonJJzcARcTzdABNjZhubkk8",
  "key26": "5NJYKujrXBEBv162HZGLG1xzPxJ3y6tCmy2iZ8BhfLeEZgnr55DE3LbPNA78emf41GDuwJVACrD5Hp38YCPWXuRk",
  "key27": "4Khdyc2P4dtJyfzKdGkAjpcNpH98XkaNWPBXDQCsqR3VbYpiDZ3tN3aJEoKTXn5T4buDwYZD8GSXTpEXzt8u7VQB",
  "key28": "3YD4S6Pj5wkGuaMBoAouBXJtzQ8oaXJtL99TgsSPbKzReajMiBDZP6voxT1kFtCts9nx3ZCHmQ9YxkNkEup5jkkP",
  "key29": "5ya6jtprBtZrJUPjrRgiKYhkpSYEgsoL4uyhXgi9q2MAQx8gZkKCMi8p7Z9gvvDhrX7s4UftGWVEyZgufqBh81qK",
  "key30": "668wLDpWfTU6Q3vfa6Yn8fFGURE6nFFb1erEAPHemmuPy3jiTQo3ZE6ZhAnXBuQnhU4SkwTD69t3zmqCN8v3Ha69",
  "key31": "2jFvCjM6RuCgyJWqCE81chWXf2HZ1usCpTbj53Mp6XJZz8HAGbqChiiUfD2B31xV6g5bJbVbmKfTZyt3J7szNQVz",
  "key32": "wSZRBdNBMf9LEnFEhRZZjex2Rthr846Vbbh5h6LzxkTwYJPiNcorinNPLuv2PSZhYCJfnXWZrbbyKm6gAQQjNAA"
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
