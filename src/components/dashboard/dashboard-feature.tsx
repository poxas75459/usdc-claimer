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
    "228GgYcbPcx8jJLeS9ZrwCnW1is5gPwi1Cd4f6WzodFkd1qN6jMFFrgfUqKkNLzgwAkzn4bYMKSEvjnU1475qRZA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qXZzZRwCxQPNLfvPRfMvJpay7KHzBkWhic4GzerT5FhTF2yZbZY73gcmWw8xYV3k58GBbdzcrPqo6pWnWbJW7At",
  "key1": "2sk9wdxP7oQyYjtNdHiezh7Lq8qEur7JW7yh6hksFjtNqDECmpRLzGBWaoGY4PWb3yRZbAYBV935Nw94jQHc3oQH",
  "key2": "2QoCJpyoseVgHqv6zJ5hh56GM6K7JDy3Zr1vwyp127AiiEKXjrqvuMJhEgpTKNKa56Zxur957yFSrQFobyjuphXa",
  "key3": "GNr8y5bHmUGkUnuaarfmkTdtMByw2oEMbvih3hfnmCtbkKeexwKHtSrjFAmAucRxzW5TDrjmxmmVfmxwtTxxtyP",
  "key4": "3PNDMRAVJmek1XsF71QEZfSQzsJWxFEpGnaSdVjEjKQro5bgHZVukaW88TWqN758EhDZ1dS2snWLhqP5cxxJ5S4U",
  "key5": "2uZsNqy2bXbZQSHndViK3aF1LJUYmvA8YZpxzdSttFj3fQz6ytsPwTxjd4u1S1yyn2jCagNWUmpfLzPk2QPm1fqb",
  "key6": "NsuJMdGpoGPoqJNFZgMntFqKCd1v62nCaDEYYnRqxRp8t1PzBZ6dqCZy31BdaV8CktyM3WX2uzKoHytGBFJ6ZtK",
  "key7": "4uXPLqoQHT7MAQyHxNx6YMgLhpsYkRHypW5Uap5piFbDtUYNP1A4mQSzpgMPBSnroAjJ2CX97kKm3YK6x9txXgUk",
  "key8": "55HBwccav1JjV2RmoxBC8kYxx5ShqmrFeqkMPkhNjx25XcS4XCiCnPA8EZ7c49w6UgT56mzryuFty6HpHviSnsNR",
  "key9": "23a3x5vkXMDEhZuQyAx2aiUy5BwtUM5tkHqwtREqfb1dVLZdfCnbfWQUNM1u7Wyw3baytKANbrQ63FffGRVQT7dX",
  "key10": "2QP5j1PneeYDbRwBQG5LvvuE2Z3LrFQVGDPYWn4ifdNJ6g3kMhg9mEaZYCWJX3LgNLnpufYj67cm2DsSKtDGQe29",
  "key11": "5ZLF2pGRkm5JQfLGC3BuKKQLJQdoKy5Zj6kfdGK7W97euPDpWANBGj3Nbty3GWTxDPpUPKXQPHgtiw6fkvPZjYfe",
  "key12": "3UJ7mKaF52DFxc2nH9wupnLmuxM7T4Ej7W9t4ykMGxfAbAznefCJRJqUFCKZEWBEBnc6gVt8W18oja6PTWZcRE9V",
  "key13": "aFB27bgfyHDPXPou1uPmghXm5LtqwenbMq3dYSEgRZCCVcqwXgSSFCL3wE4NDtAe5zE3egUD9mL51aMxVdztHVq",
  "key14": "4TcqFmYA8MZBNA9r9pr97q9ktCVPbFZAwTYpPFf46dbgaUadwgjVNXZMmBxiBcyrFSmuBr51eSLXVtjFbu92pfvQ",
  "key15": "3hAwrAUSPtYHQ7omuycqoCrYwb2m1EuDurMYHPBHKJwpjn7umek1BNNcZusmW3B7xKT4S4tncDLzQguNpy9UXHvR",
  "key16": "2mignsHsCAzd5RUH2uJFb49govKmyvastCiL1LjAb7DyKrWjzyCq7Ue1eypnJZMJEfbMbKPowU9FneX6DvYjqQRY",
  "key17": "4r9JaSxWuE6rd4aY8uBBiGqB5SNn7xvvK4e3kFXCEakb9MT92t13iRjdYfnbswXg3wQseutZXRC6Kq6unRmk978D",
  "key18": "3s3nbuBZHnzuuF2ZSx8XV487jaSxS9J3PQW3ALpPSMH7VTyPE6RTVG9qthU2HzbofPYJsYkqMQm9m7engJgxVKFP",
  "key19": "5h9W5ZRRpDsNghj3kKskgaJ26ixYw3Es4QiZwZdcoxKQzKd4TQYy4oneJiDway9oKUxLNnipgHarbcfWTpsGq8t",
  "key20": "25Lb1BKzDje3szvNzVTK5Cf1th5K1KJ53Y1NKA7mQXwAYeByzSjAMBY2zbsMqq7jSSRd4BKCadJesBtV2CL1YWiD",
  "key21": "4MNtjdoiRnLoAxmJuQjJ3rda9WvVJutcBbbbJZtNCmBSzseiuiYeiYQ8o12kk9tibhvqwCqgE9Yy3eaX2FsfSWvt",
  "key22": "49VZPZuYRdFf9MuPpsmyoaYfvX3CHC8xdMnUNoP3V8WtWrei882S1sgnRJJrgDojZzrp9oJfo5w7nzTzEhnHHDEU",
  "key23": "3CD5cmBEo2fJyMnaxRr7zGMcKJYCLfAM41SZ3NYPEhguFeKYyTL6X4SnqtqYvZaZGYRHz24cYuYTRYFkvFDeQx8j",
  "key24": "LeQkTjsVnyMyaKJQaqZuXroAkXPeMa3ipHNw4H7xoBtCxbTfB3iKK6y9DrFfUuLKQjh1u7E6TG4VHUhLHMCyXGd",
  "key25": "4gN7uxbEDHR1MSvTrintjMQgScVjCAkpWVFWDCGXEHGfQgNyBSriBaRX9z9SnEVwSd9kdzv8AGGrck3VxEjVEGWX",
  "key26": "VWBza7diBy1X8FEZbt4siqhTe7mpsrKS38igiA1uue4dcbkdeA6FxSB9zJPcdp1PUWDPbWmhvGRRjTAFbEUacPU",
  "key27": "6vRMGSpBSiQN72cVHTtPGu5JhF3AJgJoxqgxbCPKUCg9cR9KUR8PHyzmrKi3iyuVF2akXuCtjxNcrv7cyXpCjHx",
  "key28": "3c7NHJ4HA71NrnZaNHdtA8gthXRnZVzqTFNrTnDeWaJiSCszASeSLR4YDGremhVWYGWJkAQ9LFMdsctV2mdjeAR9",
  "key29": "22d9eqfr16L1S8p8JCNFsa1uQYy3EdAjS6cvsXaHRVrc5gWqBF2yU6W1hXHgAyoNrrabuq1qxKTjUQY88hx7QJvb",
  "key30": "3d2FuYxdXQQGwkLq2PJED4pboVfwCsq6Qfi6ZnZFhfKSijDMD2FAFubTBmzXperHDEBVNzkbj1synRZqpM46khqB",
  "key31": "4yBADLCLtG7nKLV15JzyZiP1i3SAgNvJRqtDiZSTVcTBEaWVXKZdTpdoLGMmbrqsRTwLuxWkxWguXi5NjfUwP1Xe",
  "key32": "4GYpyo3rLffF5Jr3gCp5s4xcdeRdecg88RK4dmGVD7QYTGFV4gUuZrwcGGm4umwspjt3Uw6j53DUnYXUyPo954Eq",
  "key33": "3myx5T7gLgxj2SmxH16ayFT7yP2ari1FqpWKR2QR7GiLwBbtuMAyHMPQ8vfF4Ca49VgEhY3AKR8Cggvr4DNkde7b",
  "key34": "3HMLR3fLrLXTbZCLdeYNDDf72J5JEcNDqBErG8cnB8kv3Vvqpnup2TepFbEHBT2DZsTMSA8AikUh4AGutH8PVjPa",
  "key35": "4kaYE9yK9whCPKKwZDSdZ3CAfNffVY89rf7iAwdSvMFh2kVXgNKEVu4N4cvqBnPWXXD1ECVkyFPXHyQC7bRQNpAq",
  "key36": "2n3aEJkpLDUhTy827MDDvvPKPV3NhozuZDVHrm91AhQ9H126Xbm7twFu12HkVyDxVd3e11ywNghBnLVBD7uXQkiR",
  "key37": "D3o8EEje6xaSi4Y5wkQFHUKpXpmqBcc345rSJpHJrnkJ9qtWPsv2xdVTpiSkXNstJ4rvSk946ECLgg9mtW167pp",
  "key38": "4rVcWT8AXjchjsixp57TKZn3mXp1pcqcFrVGH7YCWGojPfUWDU9RzGkRTgvYGHsZnmjE4AhkHxU49QVJCSzWio5d",
  "key39": "4Uc65SJf2tJAsxRPhPxFxVtoVqzUziQRfNpUrjxZ56uifmCrcn7mE4LepuuxhEkAqHU7VWbQmBLpG7DiXxhzhzjz",
  "key40": "5tjNbMNKXdjo8ZX5QBdj9RFX4iKh1j1hs67VQaXE5tbja4srzMJWrDkLdthbcS5QzHrq61qcE6by8JZeEDM2AWWq",
  "key41": "4EVboJkWAitwf3sPYmB2WGHJzQtwGNbtpAeVPUj91teX7c2PMV1Y3NU5Dwf34aV9Lh3PDbYm927ffUJBw6ARfJBq",
  "key42": "5ruFfTZG3qhufWmMAnZvWdqzmvaNkhdKMQ5dHmAoN1s6uZE46XCPfsnV6RUpTPSnfRVDnm5o6ScC7VHMgoHc4opK",
  "key43": "3gBfq4fcFExFyPDrbUW9DsoG7PeJzes3nX2aE1ZZsr5jpwkQqk2J2REq52pdn41MKZDrTWvA5uSbbB3SxT3zQ9rV",
  "key44": "27s5XqJoL6zUAUPbn1uerXiUa1WhWFdoGYPZ1eFEprZ2TfsUyuJumt2G4CXLuaGAy1aEnA95iggcLVbU9LCSs7Gt"
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
