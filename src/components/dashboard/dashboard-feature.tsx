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
    "6xrod7zk9AtNUZ5oC7fQXnVxJtA4EWjMvmRshY4uQh7og1HKHaZE4Uhv3BN6w3eX7TD8Y6hAJwreFyLF9jwtkUz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KPRkB9k7uzsYDrMVg6uVzmXGcjMxrYzBrSrb1HL1xuugKJTWcrAvKWnkqNij6KQxG1GL6z51G35MzMBytfuokDm",
  "key1": "34Ve7GYTS1xrhn8MfrZ2MG8wG1CNvaPUG9qBCuoWPTiTfsHqAeKivFrRJkUAjkvL7HbX7UCZX6NwxNVXnEfzKipv",
  "key2": "5zYpQF3dVSx4cevSWn9sLbHMS1fuAHtJf9cqjMH9acsaMKqH1XZQZnDTgCkpRnxiLDuGpULojD8bMJTmCgcyL4jU",
  "key3": "2LxdUruedJwXYbx4FbEzC8VutdceLtiEiSCD6nfYw81KY5tw9hz5bvZVrLb2GKkkqzEb8DKvC9DCXr4bDE2hxdDE",
  "key4": "2RmNsoBTA6CMwvLinx2yGsm6grZRA1ZahsqNcuazS4AGw4EGFkRtxNPRa7QhyzjFL5mZJvU1jzPVGsCBBVecukWX",
  "key5": "42A5svoyMWM25MEEPsdrqQt9eheYJspwTK848i76rqQv439YdG5z5aw6R6rxuXAYTBvfnn7GLMQjrdZU1DMvcbQD",
  "key6": "5gbpU4UnHekjFYkETBDjGAw3CHGVMYyZBEMsLFXC7yNk3si6WEvcQfemS5c1Ww25bhChSt65sMBjsn9RqNhqyU6U",
  "key7": "5hNR4qfpvvEQ4qCNAYVbdLJUkUkgT2r5wVuVEDYhKbVToqKkaDg1STp4jJRupcov7mcBtMBXb22fg1b9bcF9nc7M",
  "key8": "3hk24fDYuxEHi4pwjMrxFczAkWoXMTzBpLV56EqkCW11n5Wp9CwiTp5UfeUBPUMbJZpz87pMdY8Cjrsf9oC3kQ6q",
  "key9": "4vttpYKdyqhPGtf3yiiPNyMSqmYjnXT9NgwZ64rjTyFsTLodrokSGe38UJPAwAP3hhbV756q4XTiHC5PM8vscV2t",
  "key10": "5NXGmJqmMofvX6DmHRvn4TPcxsor2aYP1tTAFxS2wNneo1ACrv2b1tFs7XoWcbjYwABh39hiBcNjDMjCPnd1RPjx",
  "key11": "mg5bz1KFpVmQ3oVnpBMipZB8Q7vmbT2FgE9tS1EznWuY51gGGfq7cshwCANc2pxvEMG4zccP6PfnqRna2CAfc9G",
  "key12": "4i4Z6HzVLNb2eGto6VoA6pcnR1dFbvXwAXHkLkgrENSEgJuay4sqJfomJsSBeVoQ8ur32GzYA4iV8tn6R4VBrP8h",
  "key13": "4EbCkyLpSont9YcFz9mq9XXuSqhf9qRHrjETRVzvrtM7ujKBXL1YgnKHZHPyzg2WStVBLGVCUUFA2C9Vw1BbAsKU",
  "key14": "3Lrhu9EKEqM27e2yjmx2JefAZdfrxPgyu2M1UZBVDo4dV5kjT4ptwqGvfYVR7UyBYvcHnvNWAdr2tcreeFV5NAk1",
  "key15": "5eAYAyZXo5ELkYUda97sViNbWM8VWHwHRAuRJ3KdoowhKWFwrC6o926o9utRJmmSDaPcpRtCJfunoStZ4GGg2VQX",
  "key16": "LAfpb89e7upg6LCdXv6sxWe7bjvt8n6itRp2sVzSvCwDKQW9hBtUwK3XWCDVrnmr9Sgp2RxvbrfYzz98AVDTPxC",
  "key17": "5bv7sEQ94TqhU58wrwtJiY9dZukJQ8dnjsxFxmcfBTvQrPmkXvmwUzKrMBicure49Ab91WQcV5Pnfe89BRT8xPNZ",
  "key18": "KrZaGEi9UPmtQhcCDEdmQywAbTk2RinALtHwuA8tezGyNi33fyrMKvbDwQ1ziWor9GvnT95FUha2YsSWMDhHFby",
  "key19": "4KVz3yYjBckmULZPUsagc8BSVVvbM1ppsMp9wiWntxRwS8V1d2yFfAP2yGvXoeSmrtvvSoWgjUEyMNqueViU1xwB",
  "key20": "5gDuvDQUsVpqUcZtPpZbp7RowhEhfyvKzjoKdbyR5BHfrCWjaXywPMBZbKNRmvrLfmYDgqRhAtVfPnaXVU7icNWS",
  "key21": "4KZ5eDAAHSmywwv9rJDfDnwG3ssofbTLLpWZxpZQUNsmWYZHbSyCnEYH9cyDfzZxKtMyJTjucFQcw4SSSmetYT4g",
  "key22": "2LmGGVXDEmMHLQKoEktSC3HHwwmntHCg2MwVFvFnNxrhxbw9a5iP5NDSAzfAP2WAc45zzee1krgrhwdoVSULLtAp",
  "key23": "4vhE2MHUWwVpVAvaypz6nTJGx4M9bG338xGFxDRWYgLNpdYnJL25YCzjq9RppAJJFe6bQTErnUSPRcCdy2aTGwoc",
  "key24": "5AAp8g338WVWETdvt1nsuTLjFc17BUzVWM5uu4FDzs3CgjcskybT8SnnX7fDnqSjZdmBndRE6JreRJNVZyafJEgx",
  "key25": "2xdGtBEkg7UoVedFkVqqQBbJRwdu66XAiPzM7UDxaco9bHckuzxR8EDvYxKmTE7V7rH8wY63Kj2JRgWyKKSxVbzM",
  "key26": "5LJ67EahTd9kdGtkC3UD4KrRezUVgfATQCAQptrC48i2jdoF5pfKNQXgJteNjHTyZTpSKvXeeUdjYTJZYeC9aQ6T",
  "key27": "9stAWP86pTavF5rRCtBPQ6W7CXuhTjvwXECt5A5cveN3B5Uf7jSPS1kcFnYAZV8FkoSeSoKEwCChdW1RN3rLxSv",
  "key28": "Xk2zdpCktFfrYtFePrFzqKQQchE5nYZPPTVFjSLvfpJEzXVVQVoW53ph6UEYFky7i3k2RfYNypTyU5FSK3iQk7L",
  "key29": "5VkbHhT8R8wgCVgpSN3ZJ4R3rrjmXGSzn1zbKP8sQCeM4U1wsKRSPLaxkDmtbXjsMTgvLLtM6d2DuPR7Znvm1GGT",
  "key30": "NXS2RN8mZTGQofLBPyt9XYrePeFajmv9FGcwrfXF3rWpKKDLYfXUbYupMJpG4ACUU7UNjCXc3HpUr2vwagqc83M",
  "key31": "45wZh8TNzqU9XX3mKY1YCVofz95jHTK7CqabnFhDLNU66MNqefoGEsBjzcGwz2BSne9oVZ4Puaf7vjhmeuKtn6j3",
  "key32": "4pGubvjk9JbQ8JgRbz3msPdRd3JXrxZ2nEcLc8uDiBDYQvaZjGMgTPmddH6gyKYfynaGphHgig2aCStfqFgsG6Ub",
  "key33": "2Dg5rYtdHXCLGBcbhBRUuCAEW9cPJeguBEaxumbrRDDavNDEvUvVv5aoY4c1bQ4npfWShfPKoRS1NG16r8Ptis4y",
  "key34": "26qR5oQFdsfCPA4tvnMMZaSMSccqDZVBT4mQ85RsPnH4n5kdVJ4rMCmfQDsmH3Zx4wnijFCQsgqx3Eko18jYjapJ",
  "key35": "46rcod54JrkHpW7gLUdkjJ4EBKEdzaWqyrKARUZSxZ6Btwf5R7ZCoTrgLBvM5eacz7nr5FY7wU77jdWAV6jdVmra",
  "key36": "4EaUPoFaij1Dhfsimwudk93GC3U6HJYiN12zcXdfiSDcsoYHFBYTHrjZ4TQCyqzXqcdHKScdPCE6sXKQ7Bh1H4Rh",
  "key37": "58zGLFAQa6gMBFYaHKLVh5emmjabpppMg7kL73ANUMR1CheXGKYhrEam31hPMR227zUyngSS2CHYj6FVMGPmywBX",
  "key38": "3pRVuj7tGoFVhXEyy2YykJfMwbrduUAaZUpuMnWk6N8sJYKr91PEU9oJrf7vPy2odivMUHDqiWM2EGVkMNW8mjZy",
  "key39": "5X1q5iayAATWLSNNAQtet5AX2TLKAcEZo7KBrtJVTZCaG2mPNv4zzpPH1hZ16Ww9TfQSQ6yc62Yhbr9vxAYiVbpR",
  "key40": "2ZtScN7dPkJbKAjyEMMixHtCChtDRRS1F4RY7GeQzY2Wi3miYz5zuWYCPcEq2TNmPszEaHwWv4yJdXH6Hi6P2wNn",
  "key41": "3H52tDTJKnhsbhW2cFxT3mNtZ7B4D24HGQbjLeofencoji5sJvbfKjcr3x63wZunGSCGFK5wT3xZSz3YDW4gMs74",
  "key42": "3ngBydFc5Y26Am1Lz4P5UuEMvyx4rU7msuE2Gbjov2THoeJWc2GuDjN7Pb8pc4sD9kkwtuqbF2zVLp7qfk7qHHv2",
  "key43": "2yS4PqG81W9hY4DghCkp7c5B7DCZbSkzTwaLmBLpuoawLwGje8vG1rbajTnFemK996Pdu1rRyQmSqxRaQzrhceB8",
  "key44": "5VqhT9VHZ8nFDNKocJ4XA2Lz6g5r1tPTy9kLRHJKAiQeRc27oQJFWsEUtrnM8j8gKaDtLpgp3jAZbqhDZyQJxvZy",
  "key45": "3eaDjs7rZ6BDYGaX68zhDd53zkJntpd17hxKrmcYMzzRaagFDtHzvenRK7XUF67EyCGWejPATrNpQAT4JKpNoE1F",
  "key46": "2hvV6E4kz3gAW5BeEsXM2UEoeRVzsLWLM9aarrS5u23DufvrrL4vaGkdeAWMCrNfu5JA5Fy6eLeEpBFBwv1pEJ8A",
  "key47": "iyBSvsfxHVPefbWKANC4NsxicjJFf6soVB8Q8QME7eMDjTne3Sw87Nh8hCEg7GWn7Kib3oEj4JyLrxmeD8Qmh8e",
  "key48": "Wtu6ZcWabVmpd73bvekK3uBKfy2X7s366cddHJyZuMRD34wkgvDDrn4mZmesgM6PYA2xoVnJBEWzF3VkKU6CTkr"
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
