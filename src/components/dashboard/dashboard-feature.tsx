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
    "2zAhxPXXDjL8gmYd3bHUzs8qquT9So7V7NbuCu5AeMh6bDXhdKjU5N9TPFsVrDzS73y3Z2rX13JSt62rkhPfi2TT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jcBN2AcHx6jRzJKzxzwLoVN5sEJ9rWNJJGRFXNW28Net4SCoFZTYsr6v6v1rMRKGxMQbuEvAg9EEdPDBJ8ytgh6",
  "key1": "3xLYtd57TUDgSFRSJAb4txXM4hiGJQAJBLc6rrDT8qW97ZQA6rffsSxXNFK8nqE4CZbqryguF89cvtj9vqNLvAJQ",
  "key2": "5EbkbW7vj6zfZ17wUPbvsqD21hf2LYAH4H26St66TecvW5v7CRLoYxtqp6ysWpJsMt1oM7AyhU4vpjz1JwNQnegq",
  "key3": "5L6VXobd7J11CqyGiZafhfvQxy46bcgJMc1siE1Gkf6Eo5DS3oSad5JtRM65qCnREd6FMM44SNxM8cxBfoqWBEBX",
  "key4": "2bUUa7vuqouQY2o4hp6h3VVnyJB5fYZjYKnkNispqMjck3YaDegwZiTzjy9yzPvKrqYTTDKwZvb4ZCWrzuBUN6w7",
  "key5": "2HbN376i64roCgsz8a7k5UkWa91e32ZqUXuCuHuFis7G8371cHUGaGfk6v8zrw8758QVVqrKUWxcWHBiBJzfxPei",
  "key6": "N9iPVipd6TsWqtbSLtwQuWfrUXhg71wKUVs5716FEq1hXrH3tKVKgyCAgEKA9QMKjbWFqSAKyqFH94rid9u9bbu",
  "key7": "s9Q6mwQmWua9VNY98Yd6XvLwRhWAWefopvUAsr4y13uVpUEtCfs6BLiBRwvtx3EUZUSNDRzdghNP3LHtPQa6oic",
  "key8": "3nhfawcr7zk7FAWoVt6gdWiAiKrtswYWcPW8ceF3iHe9ZrzrgvWfejcQRXd6zqiZU4SoWkFBgJAVrTeVa8SgWPwc",
  "key9": "5kXe5Ar7UgpFTACGgDFyH4Ur1W6qdNKEumr4jsGim331AMhnoNrbyHwNSRtBBtgyAfq6xXd9ofkiz55G9oCdy6hd",
  "key10": "P5RPFBPM5qVo2FsEqe2nrNxv1umLHvknQW2Ev8exazDnDniZ7jftYm7jCKAmY4isWhGRwb3PdNdh2zPGRG4yscT",
  "key11": "2muQBvhheNqVnDjk294cSrbrCugrq6F6tdJGTA2inw3UQsf8EcXib9iwJtarvDYoDxvVXFJrsF26xGSNxAYwyVE7",
  "key12": "66yZAZ5BdQFStE2cpgyJkFzh1N3Tu2oX38fVNoAF7jJayW5KGf7dw48xR3qsjRiGEzFnd67FeywYM6nvAkYZeE9p",
  "key13": "484W88XdWuoGvZdhURSHRTWKviNFK1n9dPSbnxPu2wNuEMdyN3R9yJuhd8RoZS5geFMfd7FdY89BHaGMyPVi6f3z",
  "key14": "9JpTQjkWhCqKVAxMKQNfVHhWLvp3qS3rTCmP8u2ESBiYU5WqnFUbt9yrXMyUDBEeoisXKsPwevSPhYxJagkZey9",
  "key15": "2HABrGDUiZNtAGKNDe7yvVkDAVqM1F9EZ4HK3uU69xj1e4pYAp1NrwWAV4vQie9E6rYKJSoaRKjeqmMdKkhzJVFf",
  "key16": "2s7GuMKTuvYZPJx9682pZpFVUJWv5sVLe6VhbJSf9UM3MmXajxG83zrNDJTtFSjcH83q91o9X874ykDvD9jhrdsx",
  "key17": "32XAmV7wfXtPpJWgbev2ZkYZ5aFZg9KitsxX2d2RmgsUjQnAfMjsZLcaKriSdT57PSYP6TncVZ3YzfacJgWGTTpA",
  "key18": "4arfWocjviyGsQMVeeFczb1mFNRBu2M5QwwsLVXizT5VJcnxPu4ijum3xLW3EMW3pwdYQD1voKKZZ6HTF3V5UxHF",
  "key19": "39SzhnAXVPPuwswPvqt6KtyciaYnUvmBG8gQr7i2RJjjpjmYri1RN7FNuqZxcNwXy3KJ85M3KgLGtCztq4rmb5GY",
  "key20": "4BcK5KhPuth1UUKHTU8YXRvR6NSm5LnAGzKV2gz7G9PMPJKwLkFFnWuFsV7GbTAoBSPo6wyMzVGeNUzjGHAM6SD8",
  "key21": "3hd9XexupwYLF4idG9oSsViuaEkb2BYJw6EmRRFng5ga9tmktRBjbgLYswkowjaxhwsuW3mFeWavCn47s2EDHd1f",
  "key22": "58ZmpUfcFW5836PpX5kEUaEVTfoXiB2z1szyGFBPraM8kL9qgCw9SX5xRTqBkUuNVe6qQ42Xu3mnVj3EBuQFYDfv",
  "key23": "2HWmBn7dwhbnrZNgZ3g1LTs5Nj3PDYp3s4yzPjdVzjJzz4mRdvqVHvopFLkNZY2Szcvffq6be6MURekipRcVex7",
  "key24": "4na2w7duqkXQKBAtmNCNKQjWg6Ro9MursNVoxcWY179PXnkdNhBNUKgJdBxaCKPqe1CJGVm4hfb7uYc9MWB8b98x",
  "key25": "4vf5D6CD6Vr3ao7u21RGk49DTyhw5eNAonqFNNQaERetKrX7UdGwCiUvynETViof8LxU2MN8qGtL2QM9qvHs8eBL",
  "key26": "4pYT9F2Tn4Q9pbv1Eu3LhrsFMx46DGRzHb7i8sCYVCvnMFF5sVjDkYXSpoeYCDobQZAErBYGBdSq7AX2Hw9mUj6N",
  "key27": "2DrRvoDAL9wkT65fjnYcZ3euSsbATqf1GPhWDoKxYwVxVeFdxjTvApLP27De3dDSiv5cF99wnBUgW9zrFNSRNyZP",
  "key28": "ZDyKXWe9MDGVgCrbNLZN3G4YqGYijQxtTZWRQibEd2q431K251JErhnK8zbvdDff4sUpxXJ5YxGE5sor9bMRg5E",
  "key29": "33a4eFuYhFg9BDnxeJUC69d9CgnKVKp5HstpRdsRYKPigiQdtVDTrXqSKVRsbL57M9DHWJPzgWmtAtAXwD9RX5P2",
  "key30": "4LgdhgQmCTsPymVhXWCmFmaYFpMbfPh7i57v3GXGBtMHQivdbzpEX6wcSGXeBwqXnkwRcycRWAP5m4c4d8UgXakh"
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
