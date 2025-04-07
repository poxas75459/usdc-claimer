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
    "A17YsMhwdx7SP9qNepsbWvd4jTxLgETeTFHS9aMP6RTV1uctWkXvj3Nk4Zcb6QvezCMXhsoum1zpY5Fhn181pDg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tEq62EZB69vSviWU3GhNfa1wXn89PbUpj27tfjmMhyPVhdzx5DoK4mzEPNrqBBMi6TuHri3mRGyxdikrHvzW6eU",
  "key1": "3bKgB1NtLxJ4WQ1ZDQau3AZbdagZkxAgDeseNwQKDW3x1uxtzHhvY5cjwjxsCBn8M5ckQacz5phPfhutEkANMfnb",
  "key2": "3zdoAZ9d7hucFHeWehCkzsEsVJyDfviFGyZJnYQtTmvkpwFPYHrEFE1TGXyGE8s2Scz8AJTSXG3BcG9vJ1nyS3JA",
  "key3": "RqGxmEysvc1oxxKKSGr5Rebt7XGDGBffj2RFPjV5FKoQmZP1kJQ4Yd16hXfiPXFxU762TcTLoHBpaCEaa81JQ38",
  "key4": "4sZJeAjUQqJCANgA7uKpZwhAgTiKhfxhPzwsKskb7Aw7DJyZD6AfR3znisKDCXkgumSw7JFRMRGVmkrxp5ZaARUb",
  "key5": "5BMeZ8cm4HEwph2PuAuqL8o8tSivbLPYmQYj1B2MRUJ8s3oETEE16ssEQZz137b4FZ9NRgPZrzrkYLw3BLogTLEY",
  "key6": "3NCRTj4qNQgFxWWqabMcxvzSb3n82Hhtn4fqmYx1qLGCxakt4vjE8CCZJnVJ64C5yHkH5eKxoMLKZcQxWJVEXnTT",
  "key7": "vWUopGdD3Zfp1qGA1oEXytNtynCKbzx4bbXUwEUXQNqj4rUhyXzNJaTFSnEHwrCuCPDQYedjmZ3YXnPLhpR8Zwu",
  "key8": "3PZ4Q6YH7eTWc8T9LEerSJuiTzU3L1XZBXQm4q5WME3nQX7VkPWmxXAKzy1M3cR77efLwPNLKgj9MekykQmeciT8",
  "key9": "jg3YB4YhhhhZQCAJyDVhtgN5pJ9G3NKmYduPbNHTgpriU6PQCbVpmPR5CzrBV6LTrMMQHMANGUZuCit8fgW4Ese",
  "key10": "2eTgCyNYZbkUbg9dgQ6MKzRa992BXDLVkQGL8LADL8SZwZ4gvgDQUfv4XqQKi6UEtg5sqjC6nVnRBLnXCFXfhWbR",
  "key11": "2uZLE4btTKgG2wUcqhqEiuKRwVCzL4CsNC4ceVFiVBGchEaSiJ1pPeQZC5xszcmb3gtuF2NSTkrB8BUAguR8a9mf",
  "key12": "3q3NgqHT4A2CacZboUrzV1xfAzT2uuQEvusTFpnLqwtEMiyN3PyG8TfvC7JWcrCeZn4QzLwFgFoepLctPzKDhTEB",
  "key13": "4VLVFzo3BDuuGZKiBQVmwns7xNqFPzepMvNNzmxhrakjkzPcNMzxZHGcUK3Ms29Esbs5LA4Fqsw5gibXezpoLi56",
  "key14": "652bjDpghTctSW6ZiV1WG6LumgGVUPWW7qK8Bzx94jEShMzREeM2aVkYVz7uwaiQKPFuMmCUg81qbzv4gocXWZXF",
  "key15": "sQyBJTGrFm2GgiVwKP57apZ6nKRS9gYCypbkCv6avhFnxewRTXufwQ9THqhUuUkbFpumUTxHNhcDCCLCFUh3F7o",
  "key16": "MxjsqQgcZwexug3wCTiuMnk6qWkypFDNPvFDzcZFJrFCakJNbwfKaLHXmtTZGSK7mnvFUxStFgFENp2DQ9EPqKK",
  "key17": "52LrLuhUJ8v49nPbvKcTezLuYmtCwT5tDKUuyUqhRvfPs43zq6ycx4UZf2f7gvSAG1rMcgWFNMfegshh2TbfeGC8",
  "key18": "4b9cFVPovMmvRtpm3CJgonaRE1BeLeb8FtDXyHBnuXgZ522bVXrmdhrEjXKkiTFXYPrpdWKs2WWNwu4Hi7EnJe3V",
  "key19": "2P1ZyzgqddUJ9Prqgut6y1X7VeCcRF441CTg5dWcAcqYzJoegaJHwZaZ7ufZnMTP8p4Zg8ksnHnJLuybNy2N3vyA",
  "key20": "2mWZkzrokonwnyBqeJiUhKG7VVt7nENBSBzUfidT6WaZwGFiRmQCAyVeecy8WMGSU5kUVezAaqwAZBnqxB7j1vxF",
  "key21": "3rWUhcWo6k1o9o4GgE3Eh95eEkUF4GRNnSKpqvQi7GEKnYt5CowyGmBJWASx317og4bmEB47cHMirbgaE944ArJc",
  "key22": "2puxzGqX7Yjh4XKXNsmWfrjKVw5VLPya3dYRa2NGnKGeeN9kZ2npbZybpUX9L5pLQJpH6YvQLV1M8poEcXR7K49q",
  "key23": "3aVaSTU59zhG3X6Tbhi4Wkmjqs5Bcwbiuz27FzdQrnvaY9iYms5utUcE3rvzwRDwS4sJy8FbjffUBSYWWfdRbo3b",
  "key24": "9u3s9C762DgBbBvwChrPLVZ4YDTfJKKWb6K2K9hejnHcVsoJyTb4skZGoXekfaEWNreY3qcbcQ3sLCjRcFNdTFs",
  "key25": "2jTe7WoJ2tEB81Sh5Hejy2h3bduF2ke7kTZwraNVUvbcBeoqM2wdAjh8715hCnSKnaEfqsbXW4SSSmZAPiBeyNUw",
  "key26": "3HMCwXpKQw1F7dteBvksWeDcmNfB3JVVGiBAt5V7FH6JG2pEf3kurGAFTwEQ3YGJtPCssaDmDyh8ofsrLCqp6u9i",
  "key27": "2LLGq12kGvmwNMzVovNo3ExT28XikWH4SQVTg2xFXzciTYRiPxNoYns77N3niqL6mqqj6ua6L1xEUJQvZezgi9Js",
  "key28": "3fySsSjc9KQgY8i29UKcRQofPQkzDRpzt7an2AfvaRxfcwj5nJigsvuNunyeZqBE1hpUTzUCkXzy7xECQboNAYbW",
  "key29": "4mjTrpQwUh1P6t9SW8e8L2hbgp8KyxvDedUfqG7oqzB6CrTA9GR62regY1nzF5ZXhmneciMyC6amQx4AC4svqqo4",
  "key30": "49qEA5FnyViShr5Go4emuUYydcfCdQvAhVqqXfz1fmfaCM1L8jj8n5EMJD28ptQdANR5GVAnJVYyetVVAfqPzygZ",
  "key31": "48vE9xG4J5uSHkVf7DhcK2dPUQNttRAnKru1YVXmxf3WXYvrrfHkHr1iogAty55du377xq5ujYqZPBARFkHogJvd",
  "key32": "4QRMNTahTzU5N72FLA3Ax2QgTQEnAra2zpJ8drxSr6kU3g7hd9vFGAJ1MwPbzw8vK1PxbXL1o5q5r5DGeJWn4Jpt",
  "key33": "2NQAhaqSQRwKiauTFeq3weYaxQSYRy1mTHxme2Ba8jkX38QuW13ZD52XrW94EGjTVwYqkaReXVPNcQR2HEGCuXUU",
  "key34": "GGZeFYb1fDiJkth7YrcBWqA6VCw3NjZ1c8m9g1Jj2Spy9M47qAAnGQj64okEr11FTqoD58k32PALeW6g8AkDbte",
  "key35": "3HfuijxG7RqSSUnt7tVs2ukLkq7ESkzRuHyKwH7UwmBZjRRuJBeoPNaRRqkUuiV6Y5oqCBxDP9d9JrYjV2NUxRak",
  "key36": "1y9gqGUoTxRctZ9UsBN6cAmGCufGS6iA2Dcj9syr4mrEPBr9T7iaTZba432WKB93uwyCypHt4iJn1QWcgVqBM7Q",
  "key37": "24m9htQCuvjG17nPXLYqgtcLRnS7E6qKBArmo7Emd4x9xsXnc4H8WMF3shp4bEFNbDjK5eF31sLPiu8pfAsjRXZF",
  "key38": "3544i8nDmDcyknNBhZiJmfGYFRUovEPVA8DR8HBLx8jPYizWm6zHeizaL6wQuRXmch8PFem8z3umzJUp2AigUy44",
  "key39": "2rqehostndvWLzbES1Ej8kPX1grUcAhxDyRFZLpyLWsBmAzVtHcvpU7Kothp4gBiDJNcRWNzc54K8WfFd4sYhhas",
  "key40": "3BgsmbLJi6P4Q2n9Tj8T7AWTZcKyWs4PbZmMb4VxdXfTnDvbCGVfD4py41Fh4eZX6LWN2DqEWoPacM44rGmwLs78",
  "key41": "4SYbhFmirS86fATD14kU4vxh2CZ5wvFG7fntA6xQWEgpDAuxCkQWqLfpvjbjEn9bomY7n2RTgsPp4xgWmk4MaG8y",
  "key42": "wAAo5Qupg1Qc19Hq7w55akSdPA3p2tNhYy6J1fQQrVsZ1EujeVVCe1RRDGr9vJS7UcaShB78yyVxJFjaR76T9q3",
  "key43": "4n7epuxSZ3tdCJq4MdtLAFRAYwMuEoaxGCmc89NijFJGE8aM3mVBG9ewdV1Q4WDF83a2Cd3LPj3mAgdGKUvGasBn",
  "key44": "5F6gGRdPuYiL3iQi79WFnjiSJcduUQT6U5ZPh5bzaE6JQGWhK7SEQHdpGWYMXpwoayW6FZmB9X4uBBLGF3v2ZL8p",
  "key45": "21NzjrkRPsZULw2yTR4BLbdiiXDqnJL8ApAnaiKVCsRtxKXJWqRVhHTNwuHDF1R4U1S2d49jyXjt6JzeXLyTyKwg"
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
