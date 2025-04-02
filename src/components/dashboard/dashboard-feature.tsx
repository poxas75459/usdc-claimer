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
    "33WdNUE7z3Qtucy6FtvCgnnpDnV1XJzPNqqZVgEPzpgVLBSCXeCrUQNAehbLTA6otb6cZrFwpvBZAJ136bQv72eP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bZDKwyKmGNWt4tpUQB1bDYMAdqRhoWmKhAW43aypF2FHSfLYGv4L7kHqDwktPn6cNAsMwQD8c3pvHvMvDosw2rQ",
  "key1": "4qEbtwjvB3XSVJYMmGoM45V7AmLX5nmvJ7yhD1WfWU5m3LNGyiP4ZWxKctH7SgAy8gRwAV1r4dd9zHeDvsXQLMgM",
  "key2": "rovFCnP1cFob4QamSLnTt1CmPGtqe4JZ4FkNmYV6mztxmhnDFMtAb5WhTpd1bp31RmmTxiwPLNHG18fnStthcTR",
  "key3": "KDmF5KMVBtTjpHxq88Su55KsapF5t59kdEG7NZ5v6e8q1SMvqjvh3ZALWcif69TtZ2LczYH9vkvyF8qAxLtby8f",
  "key4": "5Zee9VgeLwWJBSojZpU6fsaMJNUngKmBfmzzwkMmbh6Bf5Cm9YJVgoDqMpfSnSyrtnWr1X1a1f1oEPT8aU2ugSTw",
  "key5": "4uueqv2wM64k4mry4tK4XBtwJE9dADF64T69tV1xMxXWEZEdzuQJJM7iW5tjjoryr2kXF3RhQLrGMQooqcZ8298g",
  "key6": "4W6mv6LBaRWLYR1SziYTZ7SKKWpEwjvVYKMVALRj83Hs3zHtvrMcU1cW9u1psr4QysHt338Cdr1Qg6PyDs42tcu5",
  "key7": "3WcNPyw7VM6GvMVoMs2cCaquPhAD1FAWYgh2Hohz36jKdyCvLzXbvwHgA9PoNm89djggTVHeFLm4jg1vyXxE4ZwT",
  "key8": "2kPRacbZYnkeQdpE1NtDksW5QuydBkjqzjnHGbTCCnXVcbxzs542cHhx4K67qHuQ9Qwx3WUUoiSrH1gtgMNqbzaq",
  "key9": "4NhHJFkfSpyqR5qRR7d9DABFxnASW9PpVvpsQWoCp7oYa9NuuWwtdEJzmC6YmeS4AabPrjUqMScGABzwxqEHQHmC",
  "key10": "5LsxUdaKgqHoDDwoYARj1n5rNaidgGHuyX6HBTTgFz1hM46hXqNqiy3z9AQaBd7hGz2kFheagcBRdask9Qn2gCcq",
  "key11": "4y4KrjgDer4gnLE7kSspW4oX5YajAewFQjbB7eEACmm5XbbyR4sJWBDzB76qFCYdkKcLpEU4qYzpKm4jmJuEB51V",
  "key12": "2ZLYiqexS2CqmSaTfGz1hb2gEov3jbonAM3817zGK4rg3AYH4UrnycmBqeRxsRUEQAGztURdcZLvzeuEifvXU77X",
  "key13": "4jAFMEj3LxGCnt4v3JZ5CJa38GkqkmZ2h7Y2L6hGQSPek4PRjaKTwTJ2oSNRVS29Ra9Smvgz7BV6mEJVwH2Hfvqq",
  "key14": "pXvq76aRwVsournvCmGarKBbCa2AkSwR7kk2KdbZqmtabrCTMskYSk8JG1PtuvRmmLW6ZcsDUnr1qBXiuMH5Uea",
  "key15": "39WwgT7712dBSHJMWzCrAjHsVJU2erA22eG1svemyy8SaVFkn51oxQ88uZSPVV4xSCgMjwuDvL8QGmwRhLwBdfiT",
  "key16": "26fdy4sY9LwpFJTGAeVL3j7FZx1AUY9ZxLbFQZ5xtNae6kpU9dQSgp4g5makmianpX8Qf22hYN3kAWgJtgQ4QoEM",
  "key17": "2EWXzrK1ygZovo1EX1C63RMjbNbLwqQY9cm2NWZTMU9vJTQRvgTK63oYh2XiwNpvT8UxV87g97oD5mD9iahAy5U2",
  "key18": "4YoxxtD7nDxgP66zxjrTZY4TdVrFsQBFEny1QbpJazQToGVnYNmALQ1PaasFSeZDU13ytq26xguk7nz32w8t6PNB",
  "key19": "eXL1PuVqSG8oUsuZwpQww8Q1CFPmAYDmcabnPjKJhDfDNw9FoCTjQeiyKjtEn7Ebci4ATGppcipz9MfhGB5DAc2",
  "key20": "2onWmY2oQivcPF9nr3gwjmZ8rEjmWEasM9aRDYt1qndMgYjaJPV5Xuw34RaVgHa6kqAPhENkLUjv472bp81XcWUi",
  "key21": "5HWx7zs6bstxS3ihVWs13e8ftcTCsSUVbf2MekQDvmH6JbS4jeMQzEN4F1dQiigWS73WhEDXRiHBEQRxT5hhQwLR",
  "key22": "4XqBQG9dBhHptF4JBwxFDWfmjat7ouR4EhACnBBge4krc4K3RfBmAXmnP5EjhiTDp35zxMWmPaiCYuTNsZRkZkKo",
  "key23": "LrWszvH84CCj6UUX2HEndBjt1dG8pjRCjNA7c94KENHJ6PAz62jpJMUTfpyoGitLjdEQXTjeAQ6xSsEqgZgSBWt",
  "key24": "2c49NX7wJsTx5cYkbb3EFiEkhnFigpgNMU6oTMF2qMhFso4rE6dNGVWz1x2YmdhDxR9yDaxYk91D3nZBkVbo9mVB",
  "key25": "5rfQqAzYaRiR5mHiQcLABwhgxmykmpa9su7o3xxr2z9JdgYfZbHexySj3aJ8F88VWXZ6AnV8DzGUW31SsDfRye6N",
  "key26": "2S1sQTKLgxnKg7BG37R4zE7G4pURFjjZNj7mU9MBg9wg4qbN97DfssgRNDnqswLD4v5RYqswaPfSddZtBNSD1Gh4",
  "key27": "cTHU25kg1krGZtvKqSETue2HCwCwxc4nfJLxKKGY1xF6DEt9KLufqeSJ69o413G37qUWLzMW7tFpPtcn4aEJ2Tc",
  "key28": "3e46cmRYJvVRaiueZDqRgMGs1Q6E5umLUaqfKVsRMkUWEYSs4fN9BP8WRsLZMj5sewLZFsLxdWDdMfZf5Fu296Ph",
  "key29": "2JyboypGtvUcsezqufYcRvNVhQ7zHmgZ3wg9RS86NFfqnwAUbVnxaahxTbGZMkiXt8eNj2RreXahgxzCQcQPbfX3",
  "key30": "c6yVCQDzFCKbwsYbEA6oEoziM5Ke4P1Fwhi8sEX4Q3thuca4p8GKZp54qSDaJgDazigUnq8KNCeuyvXCNEpUjw1",
  "key31": "2MrG1vtzMu3hz2jM9trWSoF2QfokweMHoR9WD8rH17Q8HBHkzSBNiZkTy3no6fW7EJ1AUBcYcqRC4PpmLnyTDkfP",
  "key32": "vMP9CvUPJY497x6sDaopXsjQVEXUL8koS5ehTbueXELQ28575anfSPhbJ2FvGKXUrw2jKN9oDxcqJk5BmDC5DuJ",
  "key33": "3kigtwgymhHouHyv4hVSAU3JNLvcGLPsqZjRhPsHyawyTNrnpQiG4Qk14atQUDco9bWQWqMkmFm23D9Jhw78BeK",
  "key34": "2PPbJhYqTb1s12QfrFW9dayft81Q9NSXdWxcvFXhsowcjpo36y7qTeVivYWLTAgzYDT6DXQ8Z5VgvzzTrVVjqoz9",
  "key35": "4M4JjbDvq5YngPXz9ZzYcATg6Ah56z2JACmZACDuAqJdPHZBmCgWQrMjFvdp6VBQXAALhmbjdAhpqKrjRp2qQpZL",
  "key36": "2qQxvRh2VCu4wnjJ2DAd9AnGBdmLvjuMEky6CGokxMSK8JuLAMJe95kHeQFT3yBHisFEDz18NndD1pheQX9pUHMa",
  "key37": "2DfPpygiukwzzbWwxqa2sq3qLKYwxApVEiRB6xAgzB7mVtiNVLnRG9zaE2y9PqXdRFpYvCLoqxtWh9gVoErk3FZ8",
  "key38": "ZmEEWdWJz2wUPYqWEAcuPaGoSZ2Qi7MXJV7PBn8CbDSSwNirK8N94atCrkh16vwsYz4DitupzST6Z8XqPKw5PA5",
  "key39": "mkpxT7kj2K18HzWgC7W5AnC5LwpzLvknGgPysCouKVqr6snP537qBpvv3nhnYRC4N4nC1WJj52TBGR5fBYc9wgU",
  "key40": "2BNzS6L2EypPRVpeRmHGM7TUfPBXzqfLjKeGaixPiRJPRRaQErCnnYkyJYTeym1y2HBdXy16GrsxpKxdvQNuVjAn",
  "key41": "3XaZCBazgPpXKoYg8rpUUN3DCvhZ2tyUYuwiVmRKsZPFYZxi3Dt8bnpTHXhiXDHEaHgT4WWrDtKJEjvM4gfGDdSy",
  "key42": "3sMR4qcfxxnBQ7pcSuqaKBsiM3spvEvdo3Kk5CkgjPg9zfaB3jczkf8W3Jpjoak3hptNX6NkDkunTa2DSHRh3b25",
  "key43": "3tkjPNg7NVvcVfFZQVWtdPAh419ZQb775ZcrTyu9aifxygaNAMY94V58vWby4uefFDhGLPyj877jE1KwL8eDj4yE",
  "key44": "5XSmufqddC4RXQNVy65cBoDmMWgxsx6jmE32hLmjpSBhWsJAvNs1WLBQSN4rtGasegw3HJNwWBvwjdpm1VDx8Ddz",
  "key45": "4JABSZ2e6MDHoqa8WZuyJivexGxbVoAv1P9vqpGPHibAUFhZNrFD1bAcbBLVWLe1reD4cY1y9xdF3nkdRjKtajrE",
  "key46": "2fpFoBmgjRvxbCzApYrdTraZMHRnNWT51hyVKSxzNNt1s16FyDd1o9ope5DsCir8tMbLZFfaBpNY1f79LB3eYpHE",
  "key47": "2yURXkNjyq1SCAhFpCRcSnE2btkcYxKEULEWBTkzqPvM6nSSYLgYumvhDUWz7MKBr7oKtv8bPXNsDd63PXc6bgyk"
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
