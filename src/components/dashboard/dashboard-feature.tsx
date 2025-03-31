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
    "2cz7SMTWfNAZt21cgwMGmra4KkvuoMUQosQSVx8iayT9BqUbxem4R8mgWX1hFmg92sfsacfCpu5caYBC6vuUBPjx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kR8JBwS8jjkAmDZNewJhYFKH4aVfUkmPtshXqkneDfYkRssSWKGT8kZabJEEaAXPKnMAUN3zQh82jzpqowhyHru",
  "key1": "5mZUdFsUmBmnyTcZY6Ubp6YY75b3guzDddEfeXqZFJd2GA6ZK35oMqfdc1HF5iGAri7wKBLsBa4TpJoEhi9CoRc1",
  "key2": "59pswaYiegjd83uF78WDVJCSgE9BLKVz6mJs19EgoJ4EWpWgow5gCtHCnRiuke5gzx8DPFhKB3iUgwifjvwZwe8F",
  "key3": "5wSRRm2AbLs81MiU7fax9HWfehbzZq7umxYm4ERBQpwCib3LoA22upsG4sRWd2KoKsoZsNWsujxPqLzeUzmUc2cG",
  "key4": "5FdjsjQJsiGNpkKd8cZCupAMPXBJQFgTDYBxKeVPGdA7oHMKq1SG1CJAWSuQiByeuv5HM6EQWmgMoqfsTYvKhcRr",
  "key5": "27hKwkv3v5QbDN3X9nvveBw9ozvoBTdrFgNJkdpPV3dfjWZAFpdqJPKSyWtK2omVmjMu56sZkh8hKpSsPM4rL1pB",
  "key6": "3TsFEoQCdzED2qEA4cxMxqReyoLvkFT4LGekkyivJPvst9PPMYrbgrhT8d7RRAhd9tGf8nDcCmvsY1mPnXiwRrqy",
  "key7": "39HQG8aoZotvsoUYbNLLCtazgKiWkJUbCM57CtWZYzNZweYwN8bbEWCbCBANWRUUSmb1UAvQi9JiLw6QcJp5GtDC",
  "key8": "2LxgP9K2kg6K6dBuMMxzsjfwZFmpc4qkroqTSXkBVUYqk1wKU8qzJ3ZUjk7BuXqoEye2Wx3Xdy9LCjSRdpFqHcxh",
  "key9": "xcTBgKSHQpbK8ir9ScUS6wJNXMhbv498hgkagS88Tm7DGR3vpShvURw4gEHYqDmUQZXiXMWzk45K5P1BrYWVH25",
  "key10": "3f6cNYrGQiuGrCx47B3tyUXFW2otXR4hCLh13Gx315mPoKJFXnLmz2ZQTdEuQC5YhuWqAGQrq1hx8P2VrSvL44mB",
  "key11": "4SzBXsepCFSLtWeVkD25zaUh7dp49fF78S15tyd6Wb3JJRqJ5EF3698bXas8PXJ299bGjGQDG58mv8kK9qGafpxL",
  "key12": "3TU1d91Tn9jYiPzk1G58LCnU9ykeSy8oS4z6emPzfi4f8oHg1kVifeDfwtUR3R1Hku6hpN9CCSfbwHD1pAwPvJrA",
  "key13": "2VVC4BMGXvKL8LBrpCPiqCLLNbJvQyyJBcfPiEiFXD6QZ6bkjKFSDS9eR65GQHVAMFvfk2SMHMMqsQKAdEdXx2oq",
  "key14": "pKgMmbowkKq66FigQ7fLDdVbsWUakkjrEHrfechcq7ZpmFy8CPwy7CfnkWyFCM1Mc6DtBB2ozntm1M6m2WhP6UN",
  "key15": "31VvtbFJjiNBKUm9MGC6mDhDpb5ADRnpbKFRJ3RFn2FbdDeP22xs5K27NGb8eRpsgQa2CzSoZxNcVbwPcrhNMaUw",
  "key16": "4yySvoMw9EHHisuPcKJNofy6GkMPu4U79YWX6WiVeVtdFUdVthjwtVysxtjL2oZ4DRqJ2mFPfRk9s8ZLEYdEKh33",
  "key17": "5pzcQzWTJ1Gn2KTTj5Js3QxEYWhz4EBuakUwFvd8gZghE3Z7P5zQMRvikuoDQFqPe8YYK9kDvaVo4V77HWcL3Xae",
  "key18": "DvomhkwWNDt4EX7Y4cy7P9F5oiywEHaBGMopojVPtqxXHLQwJju6pY8HpAmP5YhCyefxu9C74fNDE3DA9Qdi3fb",
  "key19": "3Z5WkpHPuJmEnPyZvdMy2qhG552EJ8EmTU1LkPFHQBRnCRcVUrtWgw6T98Wtx9XP8rtkuMkaxyyTFZ4yU56HkrjY",
  "key20": "3yW75tndPCFyewRgWwit9vz92VctezJxfRtXvGmuEgQ9gyguTcFvNRDrNBs5vnnTVXhePVjaKVVfXUcH4wXbtsm9",
  "key21": "55qSKbF5gzyG9rjm7hpqzyX46sNhHhrG1er8eWc2Ex9fGvqnFGRr1U2WqUUzu18Ney2pJn3YPgoZT7ViEGWcE3Yr",
  "key22": "VgJqR2inoQeCwUXgArGJoJuaDZwXJ7fwcitaNEuAfTFkk8EZwjhhHFtDT2Mb8eovGah8rAFEAWatfU74xmQzUad",
  "key23": "2p9UAB1ahftKYoqtjdw86AP2xHr9343GyMarhBjN8fQzZ3fmUS8CZK8Er4SiSvPYWVPNhSRF2UiJRBYrp2bVGR88",
  "key24": "B8stLjaZ72mrbkG4yugSvMtcpkPyM1n3jR9gG5GFuKdDbzre55T4VQoaGiUj3nMF8D3s1TGVw6YXEUWnttpigzc",
  "key25": "4UpcGemhMdFiJJVfWeiDGAim7cfcKLiWrPAVRTeuvdYy4YxP5GfURvTsJ3VwcorQrTUxTpq66GYwDVJKrj84zXwZ",
  "key26": "57tQ4VdgenRuqAjarC9i2a5yEmStLQEqCoiCkcfz6LB3DZNxPfZLhUBaJqwvNvg2V7kFtgTUiLZgw4j2Xaae8bhy",
  "key27": "9khHNXyCHg636iAa8xmEGATLz5ghawUhS1Fv36BifTNQFyZPx9bb9Hb6oE6f7fbeN3n3wdCTJ7GSURP7U8R3npk",
  "key28": "5tLQB2oMoKXqfPezWwyKasiUyn5c1sFyzT5qFHSSzEkX3MJPxqxc6EhXJixs3LqSuLi9m7kDHH9Sn1GT4e1j2d5b",
  "key29": "4eBJsMzv38zvkhaAWpFn6QCYrFkLphmtmfM4Kv8LdnYzp4MuwcNhVMpu6i3qjfSh9DrWQPbbuJFjrrL2JbXw5daz",
  "key30": "4bts1edXs2xYod9AAkxvd9fSKHtkKVPxjoGvtSZAT4Bsmj2q5Phyus1A8QK16T969tMGTHVGJceJnW8iE4NhtWE1",
  "key31": "3KanSho119dXzUM39J47sfHZbcgvubgPRPp3zWYcTm74i21D1C3bwYCb9F85yRikHDtrmxFmj2Ak93nEiHGjxBSZ"
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
