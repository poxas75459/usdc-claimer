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
    "5w7sc8gGUCADfehN87mPyKReERUMtsSZyJres9p7qapLdsH6isRApV5hzPWavEUWYyuxHWyLQZEYPR8TBEJPxqsq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43HsV7fGXdAPbewofXAKyzivij9i7WAjmGdfVZPzFLgY1q5HrpiDhLSKPRguEucdiNytLt6YCPzp5FHp3SMMRnFo",
  "key1": "3NVdo2mH7Wgc6BqpZxH4ayYyM4VVxVxHjDEgkwCKSQtF5UUW5taSHSbV6hXzWZrCccjLCjtaZzuhpkzh8tfhJHPM",
  "key2": "3hb4p5C2C8zy7Bko6RRxJQh2KMy8sv7u3JuVv8oz537imaEJXbaPt4aUddDcLhetH8iMPfcAHNWKk9H4xbS9wYnq",
  "key3": "2NLKBs14XDDMJ5eHkqr2s8DfhwaBo6BHC3XZQWN3yBeD7CoZU1TSDKWSdFbDTJry7GWG1UzyLQCr55i4T4uZytEh",
  "key4": "ndex3tVrnoeSEJtzw3KfUMjV5dCe9NpwwzZWyrpq9iRwNVqnzR6X6heGJDKjLBE1fHwtU3RCeXZCjZAkTLygtBN",
  "key5": "3vVkJGAfvnr8XHqRhYpb7KeLu3Uk6Q6AU1MDYrDMHyDu6eDMK4hgtzFYt2szPE2Z33jkKoHfmA9QW9tQAMQbWuV3",
  "key6": "27xjzFFPbZ1XFwm2dCvYHi6qx1kYun8WUkDk7Vn6VFp4Tm2ShFuwc9UXQKu4DojkU4aft2qAR8BSirLKqBtV9Zx2",
  "key7": "2Cc6iQHJxsTAiXdDDoNDwTVBNwZfB6X9vJKEcUWvPKnHc93biFHyAeuzcU9QRA7S2sKeNHXfXq1tohR6snNgM6or",
  "key8": "5NLe6cbYDATxgjP8jbSYWv3M6Nd8fNQXodtNv1hAn1EyqzxgH9cszyguquAboXAJ2fZr8VWF9MeSzAgeuKKf1nZB",
  "key9": "5yFg6BQ2MjN11tkiqhjJw9TJe7R5aJMHrqciHj8bpmhU5P6TkH7bE1WSzqMjhD7Zpn7FEbR4Ls7i9HfL1nF2AvTt",
  "key10": "3N8Qhk4AwMFaYSVtg6oK92RvyGY8xQkpeEfUDBLfnTrfKFXWFKaFe3Jbukz4PR6duoPyb62cCWvLGZN86Qct8Grb",
  "key11": "5UvEtqWdsFEVnyfS4TXusdrZivgz2uKARzrSmX63PBjF4jSeF5CjT1b7AvRUxeGn8PHPb794UHoPUgrQ5b7UDXer",
  "key12": "NdvzDAB9CrbE84NnXD7axczEP1Lf6pHPy5v2uLY2tFdnaJF5qEhEvBuBr4Xp14KYyGqy1EXnmoMVazGf9K9V8EK",
  "key13": "4AbB9SYSDQ7wH3VZcZyw9i8QBsnScsKgujWSqwtVB9kbUL39oAk4fus8YpLQiPKnGVkJGTnGbKsMcBCNJh4Fxs7U",
  "key14": "2rwvRKd5v5G3sHWsmQbJ55viL6UbAf3q6nKa2dUrPtVgZ3nKgFsag65V9uQaHiLRRNgKtQQUiQspLHNSXVVeq451",
  "key15": "34So4e3cUepufUB1TRioW2MRRT4dC6pyocwV6KUT8dBoUiXKotY6XUf7uf3HG8AUanCtEsyGDdpYxC461JyYjJPj",
  "key16": "51bgGWFQgnRxgpjQ8ZWhNnVzZYTSZrFqwxMmpyEsNdNZfxmtkmy4zT9z1k6dSYbwaUyEdAKd3nSRNaKKbqrGacjw",
  "key17": "56zaayjBeKY7VzDtKRNdkNu9F4peaU4tcHASu5Wk9YSJ8Zi8jEPy6JKE5ikMTDjpnDPNXcR58fhL8HWKSmK5wLcW",
  "key18": "65Jj5J2uijYogksXX67y89Y6XnBrWKrq6S3RAHq39gf1C3x1pg6vgrenFfYH6iLD1BgTmjPhRNzCfFMAD6ztbMod",
  "key19": "41SDpPXnqfo2mAAPaJuECibhZ7NgKApReYgYMRJZxsnCdBBAReJEmVQyTJ9arZKvssnJt3QznR2FJw8jWDfU1de6",
  "key20": "27xaz6ptanFU4LKwsVvqHMWdop6ECY4ewnM5kNtKpfzVDXgdsW2L8wScCKHerHgg1apMSRV81v3Xo5iNPXw1Xkzt",
  "key21": "3PFt6ucLquZ3B2CQj3j7ZYLwZ12M2T6q77pFKH9J1g25fJE3xT2ZgGHWUogfxKMPHLjpEkyiAuWyBsAhPCNvv4QG",
  "key22": "4YzmkqLpDV7ZWWveMAXmZeUwC8Lrx3t3BVKGYL8qhTtm5JkCrCZSunDgpP2RppfGJZWr6z1vazEp965KVBY2xSfG",
  "key23": "3rXNje8y2v4PKshYxnW17taJuetgwYKVC42o5ML1SELmnKhq8M9QC1T65TovctbPCkoCQMtYtKk6qfoeAvdiJpR4",
  "key24": "2pGwZrNNxqWDwH9VQ6wCmSwRxxb3WdE43uvVVDdw75bVroVoiZUVGxGmRM6sSTHuJzDoah8VEXR2Un2it1nwkZ5K",
  "key25": "5MX3wrEKWMGgtjyBfPoaaczSeEZjX9XwNwTDeoaf94E1DFUgGLykE6ZkyY4SsYjkzGWhJZrchEnM1K2HQ6LDpfmo",
  "key26": "61dyyyh13pwFenop4wQeJ46jDRJx2UhJNKdi2VSUUhZywuRZAeR51g8XuKjf793NJp5RJQMLmbo1Ps6vqovtnQgG",
  "key27": "5C6TuJmg84X8uvbtV24Zzxuv6c1AqpazmdcbCZqEn1zB677R5onTRWTxwWZrdLKEDSrCz6BT81uuXgKB3GuX5eyu",
  "key28": "3FtvsN4sEgCVzTqTyjF4tfQf41kRLpj7coMNyHv9rbSesKeMMwCNVm1YwqkDDxbiEGGxYidSczAkZBoAbKLSEYth",
  "key29": "2B4GQPQg7TxyG5xaYjDJczbAXFFUaRpZfigJMoCPdKqPmnErFSRRsiNjqg3JhkSB2VpmJgTGq12gAY6TCNcqSSye"
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
