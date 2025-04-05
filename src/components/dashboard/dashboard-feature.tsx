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
    "2s9xpd2WKUDMDit6q3WhA7Dgxogz4iMdyBrp1sRSXCvUC8Dsymne5kywxmbkJscuDbkeMwTuZNP3nPF5mS3bDaLK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "297kriAwLvpJiD5Sgd9i7FrioV2f8dRK8EQnc2y2A2UTDasNAT49Y8VoaTjJKRVCU94bSYnyS3Lz4MYxSRSB8KS9",
  "key1": "2kaGMSrfEmsWv68txjSW7BYWPj5HwKw9oKzSLaseTSNs7KXQVAePULknJW83RyoviFSqHwz83DmQ4Y4YG54Xy36i",
  "key2": "3Hn5WAKWpf8nFhf4HU2QgzdsohQe537691eK9seVPmzCqWWLSYtzpuSpdRCxQuJvDbhGJEBket9NVKfunqShQXXF",
  "key3": "5tBVhHtmR4o7s4PtmwURDdWWwo8Ah3sLgGT1FGWdFyV1DuHnATZ8jVmqYJayrCnkFymxrvg9kySMTfniVNZZLDjG",
  "key4": "57496hi5u38WRZC23xonpgpVQSZQihVteU59dXkyyqk79HVdwVu8LX97uW3pubBqgLBPyJ4F6QVE6ynLnKwGNUXH",
  "key5": "41S1wJyp8iweoVbpNFhF4vQQdekVG1s7Yyo7Ym7ud7vKgao8ojmXGrR9wLrpgNzac461AEJQDB4t6CzVzqLKU3Nk",
  "key6": "V4u1d1Wna3h9ekaAyvR3KSnj5SZCrgrAUhRbsYWvJSvhK4Ebm3grfZkda2N7YSpTUuDfBwxN8ei5UdDXJK3j6nA",
  "key7": "gjK4RCERBX7FpzrayBA1Y32dxDZWBANcnQvi5tL5tM7fNaPRj1QCzLCvaRHpDXYkhVP9nXP6JXyA8hyhN3unDKj",
  "key8": "5Wz6omLd1QSRCgrtu6YRrq1GcbkVNQ9di5uEqrpfeZUtdhRkatkQJ9R7o1KLHPiBGNBvS6mUcs7mhEonsY94Z3GY",
  "key9": "5KcpgkxT7y1Ax6VYqxpVUR7k8fYs2Zks2RZKdUT3sCq8ktVqoSxnG8nqF4d7bnNkSSwVWBWUGG4LUUYrrBuRhK2p",
  "key10": "2KWRzmFKM9itoq3SZa6eXyrAQRsCsAtF5nyHFcQjHh4s4SpXKo9ZoMyvYimsgFSvAz19fEcfxdTgefKXdJLVVojU",
  "key11": "66ecKih836c6578oW5dhZsNPqVe6J9zr1JRa9xjdFh6fzGfKqLfF3BZkcd5ZAp9JD8yCtycudJJE75p6Esju8Bas",
  "key12": "5ZMvu6HfJg8ot2uMAzbSf5GgSEws8dKEPG52NKYM6yGLWzUiSghFoYFWnw5etvz9dPovMw1DrUCd7ztzPZzL2Xux",
  "key13": "4H2uBoDrice2WBQKMKaDUDQeuWGfPHwtcK9rsrQ6YfLYMyKJgGuJedwXfuHYPK7YJ6ZhsZrMJPnhiL4K2JLmpGS5",
  "key14": "3DZSTLPd1N2EFwcoqJfyZ3qujegGkEpUkoMYFyzVNupqeGzzeaDxejyzJSSRjcmjDzQyJ2sFFQ2sUQVjatpbs6Hd",
  "key15": "5Ey12mhRsF7DwGdCHXroBMv95tgkLXvToVHBizKFCEaFhseNUJxR5pZFS8cV8dJvmGyXq1EeUDEAsogu3okdZLY8",
  "key16": "5wBqPc94BTy3LCrXXvwn9zBfWTBZGR4NsoQyntWoqrDaHy2joKcuUfTYi6RjaPxbC54uMcbt96sqU5cDpmjrqGTL",
  "key17": "4rdqMHECB9B1PkpBMvSvokjwwXYF4tJ4bLJBvuH5s7qg9QGoVeoVYtSwsZRBMaNGGGyRh5oiDs6Yg5gveEfNhKKi",
  "key18": "61X9dBoEPgYNewJu68FvcYSmmER5vQNQ8cMv11dLud5tUR2PRgYMCABHmZwYitk5pD7wQaaQcvpzgmZc3YoMpQWy",
  "key19": "36BmvnFKBX72voQmsoAdP68cgMR4GEsd9MswEhKcNuDpypQTzFW8UVTCgxAfVSTTUtUn3Ph6Hk4knyBjkPPSHHfN",
  "key20": "4ygLnHZXioWqdQybLfKjAQD6LEnvH5ak1L6B7aY77DdNbq2wmneXbL5AJGe58kj6dsgGWgpnV6KCgfNHsDzGxR7a",
  "key21": "5g3XRknBccgX9AV4S2aBTPehRDB52acX1Bun7WAqVdBf1jyVMFTKkLcW7AN7vUhAnCGmxwok55GdMWLrYJCWSGmG",
  "key22": "5eCFKuYc7Sk3SvYGAhPxtmYcUnNACjdZ8hFk3JzaJPJHU55DnDpJjY5oyGpbHWWxK47QBkeuzHuGELMJAGJaCwGy",
  "key23": "5SwD2S8kKvY2craxzcCRzi8jRF9VTy448mHLY8k6pucGKZ1s4jUtCyQ4gQpVjU6rfUcVV25sKRNW2gXFYnqnne8g",
  "key24": "eH5U6ncdNBeW5z9fN3Za39qSqBsQmzbaZkCFz8KbqgxCEF84FmhWvuKnJEAt5UZ1e2vMw8ycrmpGikXGsMP6Y6C",
  "key25": "5wLfk3XHcn9cNBe4aeuh1WXVbYwV99d21SG3MG9pzKgmuqgbqYMvtpuBZYVAuTKboscvUWiw3Zb6mV8RaUUpNq69",
  "key26": "5ELcoSFtqDZKP7ePNgudSEGm91HygfXm6Z3ub5BGJXi1EgTf45myZuZTU9uPUUWByTCd7mZT22bJPHxo6ejJ5Mno",
  "key27": "44o5vujsdzrGL5AvGnqP8H1rfxENhmHQMVJzWqA5gJqipUc8LSNmsP6jjaPeXwMEsGhodrxXaVQ8FtzVQw2pQdQd",
  "key28": "4tYperMpJgpKZQ5D748fYWvZzeCT5hMAxomLdbu1MTiwWt1YLnv1EFb27qxfyG75S1bLSHGMjDgK3Hp8rqxt6xQY",
  "key29": "YN34k5z7RPQYSKKmQVTL3vKCAwPtEiCPi8tApwMzYJXP5WqHismcDBT3QFD2AWDF1JXhg9KYeetGv8KbLQSVzmX",
  "key30": "4XWjVr5krPyUzmzQTykKSnRZNEvxKUfyNgEpB4KUucjBvW9yXDDpGHL4neRkFfpDxo3ANiiuVSNNivwxHhPmUEQr",
  "key31": "3D5VixvTnZbxLG4hh4uJ35qzFnGchyzYvYcn62gPM6qMJtk1eSfCwJzmrosc1kGtR8DW8ZoDkS2goPtNJYBRU361",
  "key32": "2ngP77VHsKhcHYxbnWaKCsguYm7pS6tamC5iC7FEoEd8E86PyXJ3dmjdoQHmasHXLKiH1CqNVWY2uNX5XWmSfnnS",
  "key33": "4gyZAMYAvE9qjUR7Cj5ny8oBY7k8V4HBUfQFnNgUzgyUpJ3H7nDMXBvoHu5eb4KEqkF4jHugBBvt1ra4K512iWn5",
  "key34": "5bQrMmxc8X1pS7F812tU6n63cccPLHbkjbXnyguSPktqRv26Siwyabug8PkGwgXAf6aLdHV1BpPJfvyUDV69gqWf",
  "key35": "4fmSw7antAKdpCxQPJbFtu7tgwK6U13m2ULHgazb8f7J3W6QKX9HdbzA5pwzmy4rPjM7487TmCbcvm7UrMNcSEG3",
  "key36": "4VAY1HZk4uaMCNUZrm96WnLvnuGe5a4atpKgw38dmvj3pwWfP6SWCzpsFShqYh7ui47TSHJxpWPBo8UaBHoejSh2",
  "key37": "35b3moGdJZmzb5YTe13Xadx473a5kc92xcVaw5jSLfqFev1CfFK4hGyjMCfGgVfigE1M9pVKqREZiRFYvMUUTbgm",
  "key38": "4iwqqQoWm196ULykGn8UzUu9EYjn9aDbPre7FUHYX8rQECqz6MXoXDwfATmpw9xR5xnPX8c895qWYitD5yDStP8k",
  "key39": "eJSjufduuaGZSGWDDTwW9E6UYQWGVRQjRw4xBT5GMf5jjx5edKwwLRzuhqZZQHFPdUamY8gRzft1vdLxw6tdYam",
  "key40": "4LoXmrVM1xBzpKXFjNRb3UcyKN1ocjCNhdZsG64aS21Cgyq5W2dzUS4nxh4ayzX6X6re3hKUZyCYmQYtiWda1dH2"
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
