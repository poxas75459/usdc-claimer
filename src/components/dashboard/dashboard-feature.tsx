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
    "seDBGXuPii9iP7HVmuiBNoqeWN8xFbWbGBNEpHTZBon4LyEgucHNiEBjiSCb3kZTjcV743e3wE3hL5s6KLP6RxP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3m815xXTt8m73YGQWWScesV4f5H2AuG92C2Ksx1E6Lgo8fNME7neiMYj3pHbM7teP7AY4uWq2F8o2qRMakXcdpiw",
  "key1": "3kJxXUgV9NWJ9QKHD33QVvPuPaXr7okkHyVynNTSbwHXdyicVgZvoXgxW4VmkYkhvFh6aBtxsWHv2L3dCS3sbjhQ",
  "key2": "2rTByWPpTVsQe1ViceMQDMKcHn9iw351durVHkKWb7wS62aue8rySr32MboAtzeSktNQQk8V5HF2rJfjhLge2vd1",
  "key3": "2nEkeQzJ5dZPh2X9qjAKo2EcCCN6LSVqQ7DfazD3ofvFMoGrpYm18qS8S3yhs4GynH7GYwrxSsRNMJ1yVT3u65k",
  "key4": "3w92CYrZRNYQvdRQB2rinPLHJSqdLkCxc81fxE21MdfuqQ1z9TjAtWHGhYv8oMgU2qznh1NK4pGgQwHJnTRvUok",
  "key5": "5zRZDvFg9tPCg8UU1ncZk2aM5uFaws8nqXXGKz527cmucz3gTCjPtfn3UwLMzqSyQNXuRsE91N1WnpGRPdV6RJdK",
  "key6": "6vjyKYdweBSQBPrPv6xPhXSxJnraW422qYNkAmPVDMqibru4bjDAtrbpom1QDB8ftVEaB9XSpUvsBpbM2Dtu1z9",
  "key7": "4Y896Se93ZggGdzNdPvAyJ1fihrV63CxC7Z856gDZrJvvuzFUtNTCMrZyrXpyMbRszNVMJ4RM7R1ndK2SNvbh1e3",
  "key8": "4qLZ2ddUx3czn4fNHMeZc53i46NEpqzfM4QAcP67N3kZ9LhDiQpkPwzzbRuYitiR2Pne4vbjQk8wgVf54vmZt4ZS",
  "key9": "3vjywYRaZEoKLY2BTsxgdUYULYpYSzCtA31yNyrgkUZiGKhAyQEkkot2cy3gmohcr5KgNpU8WfeznS1gKxePvSvu",
  "key10": "8QqhTFwaWCQ26oEznxejqQSJxFKU4tXrVzcLDmMj3C2TWTCoNNoEdqMMe8xnZn1ofE5ZiX5foftZxXN9qGRseHj",
  "key11": "2Z7W9nZp5tw59tVJMHZxHaFmjYpG7Q38gGwPbuKu5MzYhUsHbDVH2LwRSJKxxcbUP4eakXrvnkkSZ3q6TUhsUeMP",
  "key12": "2a9UHBjDj19HDuPx71Cak8bquZUfYjrHNENpeh62Y84DDfBbyQ9orZPFR16SZBc5gn8oLpmz8GaeGALR3ArsnjVi",
  "key13": "2pf374mDHGguEJYCnei8DdKNcZU7e9PLepnNtRHgP9ryYmHUG8or4WU8uLsRix1YHZuwGmUuXQtgyDdvfSFZ95Ab",
  "key14": "4Vtth6d8fJbvKKrnD6xQynX9et7HjViSTtKuN5p5cD5ghgaSr54vMZSdzwtJSMgBkh4tzrsd8DcFa1yoHKjye4bw",
  "key15": "3hD8vC2AsCJCY82rjqfw4kwHtpTxtX89UWqyZZLVYXpLL5LPNF7AdwHc7eD7iXm3ixUHUk66crwVg7xf58Sewez8",
  "key16": "5k21T17Zp3FjMfJ5xREmRTCt1Q58RekMDZzm7FoKsyCYCfZZ1tYvph7sqRGAyXtq35NEscV4d4FiDrxiJzoPgNgJ",
  "key17": "5rVGCAX1GHCsw52jjLtFJYWhPXvfHHjWYgYSv6Fn2sXvxSxb8nKpugeQc1fR95pSXfyTduyfY7NUguQN27UJv6Su",
  "key18": "2WCLqkzPceTi4NSUW7z6BEvdx9xDDmHhh1qgXjayf1PjKDsewLyq3n2SG16sf5XFqACZVY95oHqs3H5pfzJcGVKh",
  "key19": "58FwESHLxAK53RTsDn6T4c6Pd6UqwUA4xEYTd6DBto3u2P1GyrbYhWefs9z7cvVFUX6Mg7PHg2tDPMCgWgt2Sbn",
  "key20": "42buJYGHvYE43dVehxqFrBGxqadd7r6niWNpDakoPq827EbEgvEz2hHX8VnxFuqHPHn6fN5j34cYTbNjMsWRLzxZ",
  "key21": "2ot4RTN42Naso8kZggefw5drx5ecuAXLB62RMtBBFVkn9yDHxfabZacf3ZmPuSCLaiKoFJW4dBuRvvQTLqmSXRpK",
  "key22": "5AsivQpPnJhMsms8jNiNPfaSmcWtC388Rpvv1N26FB3Q6wHYmpHf5HzesT2upssjo2GLSAJ71YX8zDuDPiSCwpp8",
  "key23": "3ttvqYmV7u2271ivWLXqPEdcGqFDkzmwj4BkMsnKmHCFhiQ3NJnkN5amf8qif8QtPB3EM28EbAsYFDHpwkTPRHeb",
  "key24": "3RPJZhjyPihY1Gwtti27QEJuqf26EaURLxQ7LRRotWvxL33CjvEvo4n3RXfSoJctNfERDeYiTT1SMp5bS3CsCxrT",
  "key25": "5G8Qf5gYuaenetmULv59zdK1PuWjApswv4iX1v4dvTu1gqJFnktqnGKcwJVN9MhtBmwbehLVRsAsARHCmjdFM4Wf",
  "key26": "2t739TJ9KSLBSeSdoj9VYsmp1AZNFe3uZwwQWAes61oSfA8XS8ZLW7PgXKgi2bVZrk79wP5FaJP1ChgQwWYzrDw3",
  "key27": "49AY9jtBkKTrpLJAjLVX3ENNjMGWBLxnvb2xYhEYryoDwVB78Gx5tiZLK4qSNX7WErf23fs4wCx9yk91fxuHj7hp",
  "key28": "3bXHQxsvCexr8ZGqneyUUkFyUjCSRsqZNggLoCuperTN2nxQDZmqqS1E875JBgoxhWV98YNaAZCYQABP6zmCLBM8",
  "key29": "3Tg9GurURtrZuPBNDiFRF4nxYqKvrTZVsuciPZRvp25nTyJJmg4bzkZmEFbRR37XRL32Ehn26o1JjCohvtb2Gcpm",
  "key30": "2T4cKSfkkKBMAeyaT5D3SX6DNY2PZahyuqY5i66K35kowLnvPy6Rdm9WuaNvCAidetJXqyZ8Y8qZ5zPa9Z7852k8",
  "key31": "9Hp7fVYoRpfx7o9xBMNDs8Hpsxp7CMJKAQ7zfRa6mvTVhtfVc7DMsBYEQZSbVCMJmTWppdJigUkbgJoYAMc8buo",
  "key32": "5zwgSRbzMeU92Pc6oWriABmKUf8BSvd4NPCjgrzo6WkAyptMsH2JJ5Y6UM2ACKLJP1s8CysoEuPxABRvUdEXRHFF",
  "key33": "44TT9MbjT8XYbVocTjki442miKcbLMUXU5qSPVefzCjGyhbufDKzgMfR2e221TQYgvhZADo7mo9LUtXEcKXCoNx6",
  "key34": "2PDu6TLKCo688qx6RvtemqUWt5dJeHnVDPBJBvszHqV5LeUc1zsjAiJs33viMxvCropBKHGozZcmG4yFeN9r7WhD",
  "key35": "5pmteALx8RmmhDfRm7u6RuaDd9yWPc5SA2vqidQskhwhSdKkjjK9FcTn9xK7WSUUKqu23kZ516y2P81nXANcTaRa",
  "key36": "3EXpMS3PqXQFiMb6PYtdjp3P9WnkZx94wBZUxCV4ict59eexKG1n9ws2gYV2emdjzCaUvd4DgrjMHSBrWci621gg"
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
