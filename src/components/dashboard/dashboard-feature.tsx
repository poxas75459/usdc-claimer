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
    "4AX5KWkkyx4EziiSU9hxGtch3jJVkEzyzcLJ7kdgzw8FwxAhnTFYHVj6EXUvME1SVoW2dFnCnAA6RYJhngx4n322"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hjtY9iruTBidRMZAgHL1nqUJ2vYPL6F6c7prB9HyVrzYoGMwDfWkpZdAB81s5pWDND8hmYhpQpNx6mXb5VVoQYP",
  "key1": "4x7cR25xyPygqwZxMJDj21RticEm9cfmmMG4dRfUd6WxyxAMhQcj5JrEaEJ4tFpjmHPDPbzfcXGgLrV1AGTHAG7J",
  "key2": "5kmewMXY1UaB2r6e8P1ZkGkTmMz9Nr2msdYdvXFrywkrxN55APh5iyfNa8cNmz1APyee3h4CHH7QHUSUcRAX6NsH",
  "key3": "4Sa2qxpE9wmdrJatf3UQgU1K8EBDBUoX6ao1rFYrHACrXd9wWVPZPFhygp5Psu2LbU5KVCYKzC33yGpsuzVb3zMj",
  "key4": "4EcZrGUtUG2dJeNXg6EFvDWbtQYf6Khgq1i6LSqAc68WJ2iUG3W12xsPbpLva3kn7H3vRSKZxwJqqYYgRZZmsnmY",
  "key5": "hNWNRub8jfsSXtRyvrhmeQG8dX7uCziZ4byU6WR2xXRX5XiKQMuCwsfu3CDthEQetkGgNcw3qiKSNvua3bbLTnd",
  "key6": "QLpLmJapSkQQg64MgRfb1y6vHnNb1rnDaxYggZk7oSCZHAiWLyZvavPjAGfgVhEswLujAHjfvX9m6HSibjZRnWg",
  "key7": "4pmYrbp8r9mAZxzeScbFkzhfkqEcjFPn7ABqgTorXkG2cjbpXYZNrx2T9TbCP3NZPNcHaTqVeFGGbG58fCbLp6ua",
  "key8": "2cNksSLPshXaRYJr8XLRQYRGhyFt9TQVXdFLMcV8s7knRA4SNsUgeRPrnMmaumCxE2uuSaJamaUzDNnzkArrDzL9",
  "key9": "2AewDzY3QKKrHBfh716w671SVr8KgZuZWNABCSZQ7yhtNDR1CTLpp5gSYhXTqVbuAdhYqAcBF8LW86usBazkGzKy",
  "key10": "2ddnsCeE4UNpjTP96TFQ2AsYJsUTVaUTsmwPdBKbHgRSECEUjgXfeziYBnSqfuFK91e4iVQ9T16KUhUAxjQkyQb1",
  "key11": "XfXorejRqqZ2hnrSKQSGJJoYr5MG8GNQ9kfGq5i9G6vQoQ2pwrWsGLqZJYwssjs13XMumKLSe8htkJFShH3NRCH",
  "key12": "5i44yYinCEBU1danyxDZdeRo4tG7BqB3uBYNJyao7rZbn2yPEr897rS8jn5bXd4vFMHDk8yF12L5jkRoBqt8n6q9",
  "key13": "4SrzzGhqgPaYNkr9paXMaL59BdnC7LDGxupvic6esZjkEhcDuUe9gYRc7kDAqSG1u6bJ81uMMvxsNguUxNMvQMKZ",
  "key14": "2osKn15mcuCJSyGPEEWTgJCAeGBBtLs2VFXBb8khnkz7oQ9LYxy82PNRBPofM7Ngbp6CiShgoQQoRToXscqwK7zQ",
  "key15": "52aj5VATPAQsqi14kbeGa5FdFaxidz2s73A8rE1yqxYoJ8SNR6DUCmyPNR9Uu227F98ZUMNaMgW6vPuC68yRmMvc",
  "key16": "4bTatSwGXSwRgmqcQWtqTfEGbkKLFyUQbWwLZnLSiiAkTBqgkXE5FtRX3fszoq4Z5uDatMD3mmsTHNivtU1sGwkU",
  "key17": "3eTVzEqa9cH4ZpQYRBzWV6vXRUxCjiqn112yFY4YTS6NK6noRuo7pzCiTWRiKzkR3JcRgtDPxext7BEcBCzfHS3i",
  "key18": "4e72p6oPCMrqkD9a6oAGPtFssBRzZkQTWktMEENuK2ZkNJ1XzEpqPZTPQWDPqzkv2g4B5UpAzYtgSY5RQ9VfQhBM",
  "key19": "4DfoR7SNkGZTLBx6sq83t3i9RJZVPNbvdzZxkKr8AjeXjbefvxJ2GCv4rKamGkEYsxxHaGPDscErTpM3NWk6UREC",
  "key20": "2WQkwj35p1Ni2Zjz5emfG4xebFHBCpfWiDv4yxNsvrcjJiooLnYKgSv4DKgvFw1Pzxs3crhuWsGQX4hQBRQJbkz4",
  "key21": "5AdByNooM2NwoAhvdzf8uH4GBsh32aH8iPUg2You4WWicaT1aZgKaz8i8qJVSe1sRBjVLfrFd2d5hoZTPBZE8qD6",
  "key22": "379mf6rBDLUJVygBWYNwxg83ic5seKGxVcDZix6gsHzq6jSA2diUnxMWS93F6hMknMndfWACtcq4qvqwm5cgdYi7",
  "key23": "3CTZGzkkwwZCggrgoY6PSgFL4UbZZqeps1eCW9HWAGqCupWEJf6HVGVDievs49eE4vjfCc9Gaxw7YCMW8BumBWsZ",
  "key24": "2HHZiv4jMZiKr7zLQXCPdbvPHYhfK9Pu2fVVqQb8oNxMF4n3zQ8v5qVV1Q4azJvbi9vcTVSCtwu2fg7WyZGwvRhe",
  "key25": "3sfwnFXgd59vXbR8Ua6SZXEPZyA5jUDH1WUpGh5ZKyu8QB21CTbvmBRS97uNyceEXBMoqsWy4jLT9GCoQvJsgHw7",
  "key26": "Jv5iPCp5k5wm7mQdVspbR73niSVPdjEfpFZsQKLwo76KJ5QTbZBJpkn6z1bsS2uL7DsDZnW78ZEA9rQKBmCk3gK",
  "key27": "yLv5ijJYuz1ecRY8f58odQCSXBXm8YZBAgQHSp7gUVDkvdDnYA318fRJqyQYSHfahkhZSkG2UL7ar2WC6wJm1Y7",
  "key28": "odbceUzSz712xyXr9Sf97PbicgkDR4XJX2Tj4qzh3NsN78EgFu4qYGXEFyvohGLEBddD9Zj9dD1DV8vWFmATAhp",
  "key29": "3pVvpwfd3RkPKj8dpeA3fMKpLABn8CLR4w8QJ96QaGrgTTJZ4Vw7F7fCSpNWBvYRhjgekmmQkD4UPdFMg3DVW4Kq",
  "key30": "3DMKqQC1SisAn6W2ezTW4PuU2Mq2BErg6xMP27i8PEKao3KoKc4ZYgrpGK7uCZibjVMAuB5mZZFzDWYCj81v34mj",
  "key31": "3SerZVGkS59iVB64CREG18NP5FtsgYRgByZPAHp3t1vSrARWnkgN8dYyruvW2sHCMrhikcmSyJ4bGp7mJEeLTkdQ",
  "key32": "3AZAXNAViGKLpSc82sMccza3NZ8apa8xo9cjDABJFaoXNg9okHpmrDTn5Z6HV83Gs9JCX2EJZZexR8S4HrZrrsY",
  "key33": "4wEBBAB58orVEH8juPjy5Ex9ci36zQ56ez424bxQGoE8FBB74TSsEuUusJqWRwvjZgsarnRmnwterKUfjztuDhxi",
  "key34": "398fnZgWF7JQuvhCdmYgTU4AxvP8yANExCHby28L2v2FQ9K5QWzqD4mrFhTNZd93Kbbcdx9TP9VyPHDnk7wZAnJS",
  "key35": "4pzW2maH5xnHNfiQycYFBkNU1tBFFyArjasyxjWgTXHWDdyiWgJwfAH9AXQG1yYoUJqUhmprpFgP7SfPfudUAPH9"
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
