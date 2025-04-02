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
    "4qncSb3HutjwMdfHEYWkrxyCXVCURk56k5ZaZay1WdzdFy97ZRzfNrWHPM6mATCnKG7YML6tvt3V2Qe7PbtV85tr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sWBFrr8o15DeoEWepqkEDfvXjpTUnbVXwojPYXyf4Lxi4pTHLG9oqWqLwgyVYWtGMinLRMSkW5USXZVKs3etf4X",
  "key1": "2QZcXjPrx1PraBF6gtFd2tS2QzEsWcMpg5UKSEY7nrBfwnRSSTz2A11HdhERY8rmDoYun8zpBowA2bQDJpxehztK",
  "key2": "5o965wsA2k93W7VVQStyyC8r16wF8Pqi4TegjxHRT3zB6RcuyJdJscUJHoCJZinyWuRK9mbKqNUCPWEhmsBmn3h2",
  "key3": "LoEM1EznWF67gXygMHKw9jkYaPi7KrtxuEn58FzRRVQ6RNgQ1fqE3RWYgjXKEUMFqLxC1mYp4SNknUHY9pu8DbU",
  "key4": "41vGKF5qzrRkGfxSA5p5bdLxixx3Q3sx2ANf52S5W7Bf2ZJG1KdnKvEPFvvWRpoLfyzMDBb594f37mM4ijiJdNJr",
  "key5": "wuTR6gSMj2Fv8dKWc3NELVYCkYNXFgdMEGjYzVBUCrkuL5mhTLmDaVAcLTfvsZMUngXbtb1zr6eKyfz7LUfchCW",
  "key6": "E9gsZKB7SHPDGHGt9GNyiQsEe8stYe27LaN2wPdJBYmhGVSXaCXPzLi5pGpo6Zd77Js9v6x3vLTFern3tNUx4tU",
  "key7": "4HpL11RMnatyAFaRLkgwW2z9X9LztZyFp9h8tQhdE2b73RwQBzrrpHur57Qf8oPnhrMR9UUsQ7Gi9kGWMQozwH6z",
  "key8": "74YgVDJSs9kjKZz74VdRuPvWBLrFucnLsMufRdMWTsrQxXK8sHZCJoFJwEfheDZMBWKHrNZ56eGcBjZUMrubTb9",
  "key9": "3EDaN1fMKnzKxySaLM5RZwpF9FwiPKMPb5n3CpnpS7nMyC471rcsYhdStgcwq2FVQFXwo8ZjviLgJTbLVUQpovGM",
  "key10": "eD5KHwDEvwrdAAfSS4BHC9JNEx8wKhDYjZWrbafJDTPp5y9EJmG3mXCCQrrp4wBsu3wMSZ8pZMbhnqHU1ARR6pG",
  "key11": "5C2EZhvodHD7rsaHtmYftHPEmbJtW9aYU7erWGx4Mz3PjeoBbzXRLgQKu1T42DHqYJbVFcXVXRT2fLAvaWRj4p5P",
  "key12": "5ZQu51Yh66VXwwRd9Rwj2Ky1NXhnLekvCQUpdD8wyfox2hfwRRFsd5Srm54QkWyXXYTYuQ63AB8y96A48yCN7iE4",
  "key13": "5hpf8EM8qAiakDAFhhnQKsN2qrUcZTBCe3UhgrPZ3SRhFNYB268FbUD6JHq6KhNoFrnyoHQuDrP8ufXTMWqXjghH",
  "key14": "3QdDgd1Zi8JsiCcN3XPJNNEcoZMxyYHseFEnenqFoLabJf6NgaXuFYGs6kmmrFjrPqiaXETEfu8mgcwqdmrbMQKZ",
  "key15": "3iD75FYye7UrhBuuJBVz3nuY8zcqKrxu83Jk3LF8uCMGwZHptBDwX3csjgfWp5CDoGkBQnHzJK6YZXC4DWGz4HEZ",
  "key16": "4auwWFRBcmDuzKTJFtuZXesytLsBwyFcspJgabVzgvMFpgbFsacjyGk4pKNck2VcAeD9VGuq6bj9bdcQv7fHpAVq",
  "key17": "5qUCsoZL3xiruK8gCigroJcP7ezqSS2LZhkWVhSoJeDuCuXZbiSMcJXRuFwQQxZfkeQLrmHJ3MarnJobsiFVPNMV",
  "key18": "4vea6ZqK1GXC9a7X4WTWnkNuFtezxaxbNuhB9bBKVyhcWsQfYV1MCUwFajhDYQDmKJNmFhJ7JYHqmNeu5fQf9fqu",
  "key19": "8wq117De1HLBtpNXJALGhtJ5dGdU7LtWiLGDDMcebxDCjUCQrJDCaVU5G4BW1Gbr9BfG8en7xotdzM6d3HD7ZCs",
  "key20": "583LEdcLQrRcirEHqn2c1CBWDawttpJntUb7wewmHf3YAjunsqGX84exjMeya2itE25zApo1PVGLArkqU5uqjqgi",
  "key21": "uuVRxsZfpoM8miKWubTYnEfrnLzgGHLXHfoCPXH7eLBCkxJ8W6rVQqdvnTYgYqmryiAiE5ZFNoVwaEtGpDQGCEF",
  "key22": "4FrDJQG4J5CvySNgjVX4i2NEigrXtzwm95q7CQWdxYSqL4u3PbKsu3bHx8YDw7z6VVrMkjbr1HSmzLSdE6h8v2BS",
  "key23": "5AYiVML4HBc7jnmHVbAPebBTCf6njQPmw89z9jf7LmT8cSfLDALUiz4NTXnPmZGWzgRkRN9ZkMfpR2CodfzgJnNa",
  "key24": "3SjRQDonyvWgqbQ2D9yhg15DC6QK6Ad76DcficCVSR1Dhufjk8qsLZoegWBdBWN5MjhFh2fh9Fj8yrhz3u1pxeRA",
  "key25": "4hL2znHxpDRmHZ7A8An8duHFM8z6cssYCBik8rQFok7hHrzbx5xCR388HWXFQsX22jn6h1eVz7ejkVi95uLJwRG7",
  "key26": "5MfYh7rZeryshhmCdfRBnQtjmotTgJB9eoQZLRhgcxaKn8fsUsEeTzruKJa33PMMVvLJ216diWsdkcsG4eDKCy5J",
  "key27": "5Ehf8bpqbjjPoJJGn2LB2eJ7iboLw7g5xHN3Ku6CskowMqHzcDPN3LCejX7Yax4ZAGnntNWAL761u3UivfpE6X1v",
  "key28": "33cfUdP8fmqaWeC4GM44eyfUZS9dUrjtiob8cCTF4CyW6F5jNMVhJWURBLJxCt2TA6Ssj12EoUbuXAMKE3bPVemQ",
  "key29": "4cuDKmg3drSSCtNxnrkmAV8zj5khNTnf6abom5BxEHDb4LxLRo2uTGRYvEHxnbzkjhYMRFWruQgbtrxQAVrhuE3f",
  "key30": "2wL3WL8R1gsFWUzxn84RAnSo45P58dHbX6DpPbjde9QqBmXfnoVNfRhsiNCP1MJtN3kvVj37NwcR3gWVeh7h1Zcs",
  "key31": "3oCJRhJS1oSi3X7x8Lcg5gK1FmhF5FFCHBTnhTEmarzfVkrS23Z1fD2AoRXUHJW1Zpcroj1cmA8DqzZKr2bBjNGB",
  "key32": "4JbnqpAq9Wwdz5WR6XopUZRZ4ekteQpTEYyE5baw8UzfSeBCUx6oKVjeX38FxPdegUaKt5JjaWdFj5f3YZbjnLwu",
  "key33": "4E2QHpr2sE1tSAC26iEt6s2CNimZM6KpZQDnDm4WBNjhLEKJrxFUxaprUbBujXjg36CmWoS7FormdvUnvLY6PNfV",
  "key34": "289K7vNBtoRvSBUFNJRKoNcFSBo5igRecrQ7ndnY5RTRZJNLPee83oYfUXcW7SEerxbV14YumWLb1vicTRhfLpDT",
  "key35": "2wfuLpcp44wnJiEDxU9nnFksSgCpCdAnQTRfKY5ZbXuDFaLn9FZ3uWSnkecfQdUc3Ay7siRx1oUhitSz5KU5kBGt",
  "key36": "2ws8761ZYKouBCZJtvidmAqtYPP6LSzvzc9m5GJyv63xi2MHptjGSyFUS1WLHtk6zNWWA9onicVKdT9MpgxWxoxP",
  "key37": "2e1FN8cMVKydRH8AGiF3u2SDT7yTyoR1LKjcMHxnnbMsozNYTuUzazd2v1SVotwvaU9yDVzpYA1niNCtWHXUKSQM",
  "key38": "2ZxVYnoronde9TvKeoWYN43ZJfdpxgj1bAVzvEYetx384JkNaRdn8RWm6oohSzSBwCv9LVubaD3ARku4SMLUD3J1",
  "key39": "ptxWwvqeQc6FsnuZTkThL648T2pcEh66ncoo5Yq55mT6kmheVet1v9rqQa3kjzgHfRr7qgbLPPFTHJYhYXZtCuw",
  "key40": "44cZsNQDWkryRVTXa5xUXBgN3rcGVYX2GxrXyUP5niaUPP13wgc4BxrvDyhLRPQ8uHMoq6csL2kJBASqN5ew1R8x",
  "key41": "3dRfGNuBNSxDom1A8xynsAL7HmeLA5TnWCbXzL7a6HT5NE9WrLTtQMf8NzyUH6AkqxVejoDL5PHPoffv1XFG2wH7",
  "key42": "276mwdYrjjZSiMzpSU4ihD2vDh6T2Qfk3XyNh9sYiCZJdXt9RXmQMQiTSFadRHtKFrRczzZot1uz2NDvFvhDZn3S",
  "key43": "5SFpyRVTnHpS5abT9CM2aa3gbBRPM1fYyDyBPybtepAchK22u3BRLUUgtPNFFMpb7SCno83BbMcZjg66qWw6jaRH",
  "key44": "5vPr4Ry6aJaQs5jdSc3qEUQv91Ru9q8uLgHmA4xxT8paA3vDJNNaVe6vmH4CdFcASNke28euz2sc62oEmBTADECW"
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
