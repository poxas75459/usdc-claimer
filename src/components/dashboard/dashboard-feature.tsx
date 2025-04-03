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
    "4xEe9GByVJCLa7Yv1YgY47WEWQcLaTZvbyatjP5GLS9wARMgB8GL8MXkjHgvnXxvMGgeop59TZwGycaG6Kd2Ye7z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eJGcsGsWVYJUh4ZBpACD3ReRfHUYgudUHz8n1p9cuPYwFgXwjVULQUVP77rwH2RS6qeFcF9s5c9zsQ2wwVCKdqQ",
  "key1": "3mRmx2uLK7QLd2yvLXY9eAmZ6VmeMDoxbdBmEYHYgiyC63S3VzLpFTbj7Y77AHe8kmajr2JRtB2ibZrkEaw6TdfW",
  "key2": "4dsJ4YMgwauvtBv4yjGwZU8YZCjMnpbBBZ1cJZGLEW7uzHGvyiQoMH56JgXXKns6s4s3onzZC9h2CmVL659SXa1W",
  "key3": "4h2JKq7kxssniSU2Q2B47irEWtbDaf4Q74xUBEKS4kNYLFLDyt8iLdBuPcS17CRXcvipzL1vciAA2KYZjbkwLB9C",
  "key4": "5jFDb9JhTX1RUBPSRHwLNPqpEhk6BaitSrwc64e3JbPHSP9pgn8PBbufovj8xn5AAfzXN1JQHtjgzKwnq2sTGcGC",
  "key5": "ktdEfmCSU9g8PjgQ5y7gRGXVdQoxQrMoQsJxbnrq4bqKsZBdDxiWmSiy18gFsPZcrMjj5SexWpcwAVHRdY4WkC7",
  "key6": "28wr7GEWPybgzYVB1ZbQDcNnfmSEogqZgPRhdM7nGYeY7ZqLBUsLBEKAw1RQyBAMNgQ3y4RyWeUuXvJsqE3vDhKP",
  "key7": "2YkW1Rio5NvdpX7EBqhQ7vchq9VisMJuoSVHHC9c3qeYDxyy77DV8Shdag2Ncop8yP7ypv4QozGNpS7c7xhz6vAz",
  "key8": "2a2YVvaWvSrHW24Bap8HGsy1MH1R1uhJmDe2T69guxDD2Uw7AmUFKkEhZ74v618dLkmUd5zHAwJWUZBsBMk3WQ31",
  "key9": "DcY7Bf12pJFZLxW2rsuTNYFSBvqyq7D8HCvn1Bv3JizESq72JZQoHtciuxvjWupSAfM5N6ruoJdfE39Q17x2LVN",
  "key10": "4i7mEtgLhCAH5FYvCpZbT9YEhHDiSXAz9QrCNC4uTtXs5gQEkeGTnUQSWHiH6qkEKBr7At4hBzKseZ1L9JGw5NfK",
  "key11": "FpPCnT1K5yxhxs43fBBwyCzPgTKsVe8vkBb7U4AgaediaUasG98YuX172Qq6t7bCNKzfkPbGUwEkH7KLMDjmWS9",
  "key12": "Nz1i8sprLEyRUZtPN2QJj3euoDGVCQ9iARTMmRq8GqoSq3tMSihq3zc8bEuNaexcxCNUm2LD8NujLD3dsfP9joN",
  "key13": "59fS9ZoYXphnNC255Tt5a7XSYkhjgPuiE6w769GWVrN1ufvX22CW3pjaapDjwA2moT2zL15M1oZiDn4eE8GZQw82",
  "key14": "37P3Mvx8cFWEuzceGm5MKhKNvzZGqqcakCwhcaneUafkt2fZRTnhWrgiwJepBEXytTN12yoBZrWW7Kq6drFzivSQ",
  "key15": "64SpmMxbBWGuK9HSuH8hehCkFcy4c5NZ5KJMyUnpw6Lfmp6feBfNMHwG2PFXwmPsMdxEV9tQqFayKLfXjeX9abtK",
  "key16": "2JGwq7b1Y27GuGaKz8QLADY3yWRqQqmh7UMdfPSkbWfgf1yi8HEfPByfAQPu6Em7i4ekztmyXMzXn9zTz7vGm1ay",
  "key17": "32AcEGKXcsijBdXqtTb73SufgCuswotjzTJp1aYjcLQsRGx88rcZY1FhsL4Jk8SnmGxMowi4UsPACBzw2Sog6fpw",
  "key18": "3QkECVgLAXkokGg1NCqn8dgMLTkicZDHVvyzi6Fr3xKbQyKAbCCff6BZuGxpzjgeEk6gzRTbNwqYkPw6RK33oJGL",
  "key19": "4evaykPunHyvShUUPM5iwNM2rLHLmgAkieSSnr8RNMaTRrNAzNX5QvDqkrz9o2QJJ777P4jrxpxoLBo2BMztXgKK",
  "key20": "3ygjEFCsj4KiP67rGV46BfSWfrKss75sWdSGK6KAn1FcDmzmBvUYcgopnauSq9TbrqW1pafJgfEFmbqZGKBMJmNW",
  "key21": "awWgSJ3WNGAxVKqDMpjGWgu8wHF25GSH5pWGawwe9AJyUx1SwfGNW6vammrwCg3wNk5UGCsdWH4jLvsTr18hZTj",
  "key22": "64qGocnpRNgVs7RMGUFg8nguQ1yUv11jSmyRMBLT9ZUL4e8juGWh9PUnRFajXZQMmTTMEzuuFW1F4PptLSJH4QVv",
  "key23": "4AJW1Vx9m24WnFkGVTSmy8W4H4dQbN7QeCeWYN23ABpKLrioWLEZpaj6B5uXcpAbsii5vNVo3WJN4r4QSapc6soN",
  "key24": "34ikhMceLSymVzUnTRk3tvcsU9k5vnVTiatiyazPbCT3kKWEz8VaDuqg2DdXXopkCipBnJiBPyKrJFUfhxwJSYk3",
  "key25": "368ur7FvmFqwcwu47eCDDhQTbgPSjWu5qRdB3cvZw8kLPN24bA7X4xzJ2aevAZCpov4mg1Ku9bvW1qCnXf2rvdMz",
  "key26": "uR3UHquZEsMHKUWnPZQ8hMsPTd3HjDkh5uyPcpkxrE3Fk2ZVUArc1CLi1PwB8zVYXavMxVDUxn7Pw21VRygxZUt",
  "key27": "5qjHF53DsrTNnhSKwJibgLxUfJ85gBv581eK7k4sWRna1xxVm1Ea6TrsRQ5jh7kEE3pcT87RWH3ZwJ1DAE1Db9NH",
  "key28": "oAetRzWYLvqpKs5smC3Sn5AWEsbJCnioS9igPWpgLFzQFoVEveECCtAG7XyjqvBntnfLwkh14YrKjobMmUvsmWp",
  "key29": "5HSDaU6gmqwen8zJbGkomo11umAE7ZoUB3eTdYk63AbUzrWTyo4TTtQAyUVkhLZV5uH3q74fSdBStaFXnpfxKVaB",
  "key30": "4rkQW2EseNnSctoRnorbGTJyyNQibsP8Mzi3eq6YJ1HEa1FacqUSoXaZZkB3Mp2R4ex4DG4n1m6AgsB8Fc7cR8wP",
  "key31": "4Eh2PgVw1BHX9Cj68PBw11JFZXQsjKLS7e4cdNRf4CdrsMtXWcSjisfNTcW2RUB6WTEBmKQB6AvzNHaaGT6MzQMq",
  "key32": "2SQm9dstszCkTiJtJnS6kGQKZB55PsHJr23QsdY2YrQofHrpwu6if7pNAgK4938sZPK6ruRJok6uFRfExAUZMo9d",
  "key33": "5QgPdrn6SmLcPuwmMh9JZKksbrDKcUtJ1GwLYY1bfgjWpeEkCebqgARa5mMbrCBhShFUV4JMXDWCNgxhJbU1pmco",
  "key34": "Xiq3ei2gooqB5Q956kL7oeDwZJqntVJCp5YSKGBKCBXuNqWpqQtXxajXUy5LH9RHdw1YXURVVTEEsXtXwwnMpjQ",
  "key35": "2w1cg5xKStoSZFyTXo823RG17HtkzPEV5Zx189s9bKYHUr6NVbzgwBzM8W6rmCbMA3hHbMmjBSbmy17sRFNMmobX",
  "key36": "ngdZRCGH6Y73ufbHvDt38TBup63VR7c3HNYiZ5FnTRvJFxbTc6cNrdPGixUBiuUxtxnK2b97ogkhyntoTxsPLCh",
  "key37": "5EpGnDaQBLym9XRBAWSdhatVoucMoSpnZQBnvVSNfeYoScShkJF5sTL6HjHyjLevsgxHFco12J8adSMBLGv16e9a",
  "key38": "2qog4vBYjKGdby7K1i2D9dvTxTgMjjJxrhi4vtvSVhhj6nCmCJWQauRAAXVJcLnyPxqGdvR4vhskqegM1TWZYfD",
  "key39": "4kX8muxxKT1yN8NiMaiVuNgnCTyAC6S8QivShn18od24CpoWXDFpJUgEPGks3ZQTsRCE3yXhBAu1cgEVbSW96oux",
  "key40": "2wXMSciUD8DXhMkgUPChySbioGqtXqFa6HVXFP5xtXcMddfTshgsm1rQPjyYM3Rg1xRWAWVkBKAXVf6UrARGbeq5",
  "key41": "5LGxYDPGqdcGKQRWpMM3P4LppFd5ShogewQCY2dCSsoLu68hNb4sYEBsnqm4TdcTx7YMhf19cZY9z6puBNQNh1GB",
  "key42": "5b53hGTCG5M46XNNuiySNwiY6JaqPvDAtLuheLRWxQpnAad3zQtdeCUTdNLkJbsy1Y3rBFwGTB2iWz7ybi24wZDR",
  "key43": "3HawB27UiDjJVjVnnvezeSefJCKN2du8bAG2mrgBa9SJs6NTcD1dYSSoJy4aKZZ71MRmM4xV7rr7zw2aqGEsGHZ1",
  "key44": "3pRykUHXGjqPiiTQYaJtZtLmbYAuCdwKjDha2GKVbnuTLbU9CaYYGQAxqd6QNMMvH5vPonPCC9vV7FoTkqLcGpyY",
  "key45": "9n9BCNDaBYeJi4QKSwzMH2pWEohraU2cvvLTFYq5EnxMtQqZoW3fW3N1UoU85xARCBsJWGETg8aLiBGm9ys5mMY",
  "key46": "2JvtNqJt6af5RFmLPp4HmBCJeYfQ9mAi58Kuw3LU6rqDeEbhnvHb9bTdd8JR5sxT1mheFtHQ11oCgtq676dfFYdA",
  "key47": "5zio8HqvXBXTsZc3LARk37st3eLR2vKZH92hYETJAdGFR25sDtkkFacQw5oL9HPjurX2aTeLL9RAKsoMdmQBo4BW",
  "key48": "5wGTPKfVjxTNkd8sLp5i1byKuk4k4MKoBWuCM3Z3HrLmST3XL5V9UvGfnnisQuUEjKeonbK7U2TXyWiDQk38fcoe",
  "key49": "3pkHju862PmqgNc68JEsqCYdjPpv8FoHw9fad2w5tBezTsrjQHWYK9YLpd5m8SRCNN4JertmettCuJtV8TxwJcNq"
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
