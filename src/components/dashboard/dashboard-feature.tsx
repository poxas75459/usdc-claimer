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
    "58b6qU74gAt4MK9JaNmjXpB6rgjxNEf2ynB1AWcqQxKbzYyLzbUA4Ukt4gs67ZykqmSiUBjfVFrKDCMJW8iWqxYq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bGeY7HCASKNEjP4ERKAAx8ynJRqhcQ6ZaGHo9BjWu31c5uvtgT3Pq9ctMepzrNJygfLd9G1r1wBQGYhe5Mjd31j",
  "key1": "J8pMEe4fPefNd4apNhpBaUg2iXo4htve3nGR69TafLpRxCErKBXYVfnZaKEYCviVUzkXfkUwkPuudzyge7kBKKR",
  "key2": "3uoKf2x8yVo83m4eo7Yv3kACfLGiz5iM8jSBDVqjQzMhi9dVAmkNks2ySzbhJVMQ94RUPpk3LA8Z24Nfkk4bZSYu",
  "key3": "36mnWyVhxVD3P3CUfRLtBfWVtp1k5jL3C4d371Cf7RTQzUQixCEfY2TovFkvLBX1RqXcSUjERwmskv4UTvP4aKfW",
  "key4": "53e2nZakacmgBn49bwmsaUrdzj3padGqwRhARs3ng3cPo53y37rfzj6M5MATsjFQk5N67xH5vsuaZv2Fq5NqLHQV",
  "key5": "3VewXodM5KvcodXFR48uYapKPBuGnfZwh6nzYTK4gaAmLcRRdCWFKzWJYNha1qeRfdhPYzmYjW3Bp9XcVgbUZsmP",
  "key6": "2J2Rg4KU9pXJVm2wQg1FUgMab82kSGgt48wRmcJDzuG9sqSbzq27Ae59wEXpKPJs3aoi24PA4a5JoAMYcLR4e72s",
  "key7": "guPJk1JRgfPr5uEwKiheSmt84VJPBb7GqgPYVpQyYUvK7YLFNuCXWE4GjhmCaxYC2vDM9ujqL4zzpp6DR48eh8x",
  "key8": "4LjW4DmzZZimK5creFnbA8ZPtZotCZyut112qezYKmJVuQL8efMECnD5LSSadN9SGQbxBtynJsbmbQWcbNtcpGPq",
  "key9": "2zb9UqEk9SE5c1f2j28F661FPj6AjukzbWXhgc52kQWKpXUnFSk4G1iTj5fmw5KTs8PRDsDazPNbp1K4FM2eoEZL",
  "key10": "2wTNCYbCGk6bTRpV5K57KSs8MwjFLFtsjxk42Y9qNeKRLTHu5vwfNvpAF9mjbnLM5cMtcBmiHipvNsAMSzs1nDQU",
  "key11": "2LdrAHmwRaY27MhH7RmUDKGre26DeNbeXx4r3gZynf5pdxgGQdx6oh6LzmLrzAiJZ2Pu5EvWJRvvhXnD4RHwNeQL",
  "key12": "5D4vgRBJbFD4bRDEH9vbtB5ZK7W7CisZiXyAnw3GLSYKKmQK4kMMhD3BhyGq8JvvkeERnnK3Q3wnQVyYePFBFysA",
  "key13": "3wHrrUWCcq5oSfP3TJc9qrHmQB3jHdFTWHLqtsjgJBcMn7ELnK9gqCcP5kTTphmuk5FghCvR2j8XtuoTfYhX1ztq",
  "key14": "2Y2CkJMB1GxRH6TTTaKs17Pktr2Dm8cQxr9ewEh1kwxihxufsSXgCMKLGXWxscB6QTCvSTcKmFMudZHM9tYYf46B",
  "key15": "63NJgZGG9efvMPuhJ3PJQ7oZso2kCqjbS4wWLJWhnUek6BAjHv8x8JsrUzvyZKkVFRCjqgHWBDxga9vJ8EJgbQnr",
  "key16": "55GBeTkhjqKBk6D3bAtQpXrYvm2UUqH6pzaSxZ9ACyqZAancuGGX2y2LGcDxsADuSEApnNWh2Pb7KX7qzdZ9oCpT",
  "key17": "5KUBYUuxN5r6iCtiSzN2q4aGeqZPny8t23gdTVACjSsvN4t3ekr14meKm85fkFNquKWNiCx5x7wqCrWvVuLrnD2Y",
  "key18": "4RSsojk4bdpYGQmHGRwzbbSDNskjteWx5LHVjib4txgTQ8YZ6yqR7jfXrpYHGq7z1882LpCuVfn1rk55mftvhEGn",
  "key19": "JxSD1PYMj3bawg2RoWtwANGDAAzAMa8KcWGfTHfqE7BdWzanoWwH4MCM8cmCarYggi6MhYdSLgqCbZiDFWGhbZz",
  "key20": "5zxGATXV46qp2xJ9SC7Ar4ccYkeB6z1RHyXHbvX24e7198z2H3yN1yvfZta62rYKqh4R3WZawgdeBBqGqMMtPNet",
  "key21": "5sQLFRMC3d79brU1jec1wSWthi9bYWZj75pCGgdu7WnbQhqt6koky2hVEA7QHue5MsiwTyBiofzk2X2d3CGWrFcv",
  "key22": "4RWNhhmw6tF91skuXXyn7ALyNFZw2yBPkZ3oWR91r92uuKwsM1eigSu1LDybYefSKjk8AgefPX9H4xyHvq1uDdUF",
  "key23": "DnqLnbkoLuRfQtQqGgaFFY46JCyQSeuHKWxXRNzQvv4W7rHxFgzjdiH88zZssgXMqvh1Z9JvQkCnAkGymgHGCt9",
  "key24": "5cKsm7WiH5wPiNWCcKSwybP6J4PF4ZGCMkWjMQsyhAX1JQBZwzoL4pAdQ7rfKdHk66gn4bHxqQBTYGCi5z2LCHSv",
  "key25": "4SaP1An6nYDmB7Rn8ztVVH4LkaYdAty28GYearxYyRm7cM4qiBtzgh6F1x7fqRNT1ssxHgWLNkyvQV23MzcKiBX1",
  "key26": "2jmCsJkiBqC2eFg8rCb59qVeS2uBsRXWdgHHao1zfKig2eyEgqP1dM38aeSytwrQWmhRzWTekZf2Eu13kF12uHZD",
  "key27": "375QzBNoi6tgxzEm6bdgEUM18bM6UfVTs5MKyXN1HMuvi2qP6o9sxJ7aSVjh2SxxV5iBUvaxQSk7Kw98JygjJPct",
  "key28": "4x6C3wGeL9hGaJ186E3YHi6x5UCVtQt3bkV1ybezEmLmN6rsLxvuXT8SpTG5zFr1YJptrSHYubfr2zJdhG369PyD",
  "key29": "348dXXYEcs7jLmwgFevBZZGt7oSt6DoEXnNP8nqf4PvTYqMyW7GjDDCEBPynT7XRWyxDrDrvrKnppnSizVUcK9w",
  "key30": "N88496bgGfcGd4uxSxyJePE1x4EEC99RpALe68TzjLd75kFVg4rvxGPRhZRaiFxoHxnJR5HedyP2vEekvS3qWxs",
  "key31": "53GXpfAk7v5bDdH2bsHf8bck1RzusjHgtCAXYTLo4BDBJ88bN6f8og2vACugZCPHsc6cMpzQG82nqzYPUbFqj1JL",
  "key32": "5wAAabzP72qsWpMzyNa3Ur5f9bNKg32AUTESAEK2hJD1i6aouKnKLvesAMg4q3QeBkdHxU8whnNf6kGbsZuknsYR",
  "key33": "5FDycegEijx85q2fLmKLXEt5Fv6A65e2A9ipAA6jBorStpxzJ6qMRKiAQXiu1DJPEpwCr9oZTqiVq1VJGKRGfA5X",
  "key34": "3mZ68YhpkiTDm3o21njqburebgy1pJ5Pm8D4XmqXcYYSy63xg7JYTAFjFkY2ra24dWMNmy5Swc2pqjiR21BzPBn7",
  "key35": "3zC8ut7i2poJDVq48DqFERZHY25xHUkYa5r95NtEcnieeG72395Ht25uZhJE97WPBmrahE5dVoSphMfber7wrp29",
  "key36": "22mcayUx1qbVPHwXZ3e7BmN6BueVUBBnk5hULYjNEwBsbevt6jXt5TqVMBN6UT1NgEPCMC97yW8k9MNq1o3VtJtG",
  "key37": "3KH9JZN7559sSGjHYPhYrXZCVfrw1F3PsHrBsrS9xUe4CDQEtopHC62JPF768jZxsq4yaaJBb5FQAQVrRRbJDTQT",
  "key38": "2F5iaNyfMgVfYRfY1k6daYR2g5H5AuZwbNzpQCgNEuHscqZb4sD4swQTbzraCakiLETCgQ9y17AXBJwHHmnKRthQ",
  "key39": "3PvkEKRCNtPPbBj57ThTbGGdq2P62GynajPhiATy4aqd6kXZfNnE8VwsQRg837zpVTVo1DfRCkg1vz39aw6NHh5k",
  "key40": "vQsDWBXPh8P9VAyChQ2oUXhHoyH93AJkiK3iS6yUVWsHbgYtXyDsSryMjv6rUTcipRexidN7LdYsoirmucrfTRs",
  "key41": "4JArfdmB7iGCs1m2UJRmdMimGWtx91PMQRbnqVNsp7SaStjVdHH4nFAVRJNJK62boCveZv5wtCZCYumFB9RwkGZ8",
  "key42": "5nCsc6pSR1aNJ43muNKg3ZX1su6rKZfWoJsuEMCvr3zf2Jgm7fL7M9PZ1VeUW5yw2YmSfAewM11EDVuC21m2PDXj",
  "key43": "2dkq4iEx3eXuqYSNHWSQZQqs1qZ5P8i9MGK5VHi2Ddcq8fSSnusMNdphYaY3ob8UxnUnx3LH3DGbpam6END6VbB9",
  "key44": "4qwdUDHzBwSwLck4ADsJYd5MwJpk8Dgsxaigr9XmHT3TCFVhnwraKotGFMTYgcJGHco1usaRGymnaqxJmksp4Cr3"
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
