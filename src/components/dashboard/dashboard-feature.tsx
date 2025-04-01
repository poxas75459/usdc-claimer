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
    "2EptZq7rjAHQQwHLrKUSt44p88pF58pSgdLR5JjSWz4s1AXCTsGf43kg4YzYL6ZNa111xN7hRZZGsS87MSVQ2Dgy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Hxxd4stw6orTKEPZ22y4H73CecaTFmpBNQFhATSzfdE4vc1sgTvW7vZafFTZGuiCvhvEVkkxHd3DwkFjjsKBgj6",
  "key1": "2QWo7Sd74q3C7hSz5o1Nss2mYHd7tZbsiJkcfG8KudJm4n5kiKJscNZ9AWodiCzLJkDokGc4iwkDjNmFtgMS4FXZ",
  "key2": "gv71mBYZfEuEUzdX7BcJ1aUdFWrUhm2JnCgcmNSwUtM1vEs7DM1vKdxQwf7NhBbuwvFJnFmjNGbkiDaSocD8uNV",
  "key3": "3i83uc3tMpktVHCdiKP3HJbMk42XQjC4qdjwKQydZ9ywHDegstgkFgDsPX7jmknhWgwPpjkpq1wSKYyEXrTwei8j",
  "key4": "bh8Rfn7hHKmCzsygEAdKnPmd5ze3cZ6oGVK1b8Er5XLxL4YutXtGUaKisDcwV3S4ZzuUA8YLNbPz42objCoVT7d",
  "key5": "2nLMKJAvZAQuGUVyoL6XGwcjen7GZcLPPtWaxd34mMG669XwkNq1aDvsZmxaeLEVo1FqSCEeWZnf3QNYHgUKKWJF",
  "key6": "5WXT5iApoDpyrj4X7dnKxZyZKr5bqjJXwq4BjBKkbn7VzeZHVU7pWAxpduCGxiXfdSFhKqa4HpHDqtQtLxhpS6jb",
  "key7": "2LzpvscHbRtRgauAQmbBRZWNqh11VLUf9tBCJVfqHJoRFcYxgCQ2VEyCaJvM7aq8tW1hu3GRtHW9Nx5TUTasVZaM",
  "key8": "2GA8JYysfiVMy32G1VtSzA1MwRbFcxLHcVcxnsPMXnydnFcyDrZ5M1LFNYBsb5ES6BRAmev7og7qoYwPG8zp9wBb",
  "key9": "NWYibfGwx2qWjn6b4Z8kHWL9smVsvgoQwSsZVjqgKdP5x8nShbK7YEefd6RcNLd4AkRmKdN2PTG3rFTx9gjBZWc",
  "key10": "Mr3RdmNzuSJHpuPpKgpGrgAs9vcYERrPn58HAaFnzFgzzv8ALwzK76oyUVFpstCQ9g4J8989tTeA1vZbWujHFDS",
  "key11": "4CeU6m8DdijfvbGZVEbQLtBLGZaysFAQHCp8Tb48acWqhyHWWVidkUgwW84rMR9FJwtP8bmQLUUUSELDWJr2QbMN",
  "key12": "5fBN3GU5Zbwxgp4b24BMnZgxMCg3F9iGezkhztDzyHe11o9mikWw7EY3UhKzckrAENzY68t2MavugTc6reL5pxh7",
  "key13": "2W2uTa1TkYuy1uJLXZMrjHkefQ13SFH4D5RLAS8F5jjrGLxw4u8UcvJbzmXpK8Fhyb2JqpyDnza94gvjkvZcKupP",
  "key14": "3bEd4iNrneJjKzGoEPyFwnYhQTQABchp1jWR61MzButEefBWqw6RPhJ599FU3rv4ArbiKbwe8KwzZLkdJyzNuAAT",
  "key15": "2RjtMygtZ5V3A6PPK6MyVXAPf4BE1oH3q4zxtoR2qgeLXQnAgfjqWNhNGkaRjAEfJ4G7g2T8fBaBDxgL1pfJg6Ms",
  "key16": "5RXgnjYh8bc8HDW6J754Qo2ToiEikcPqNhfrysG2iuem5fQxUGztAxqtwQXPaenmf5udw9orS4VJbhWNoktb3Vze",
  "key17": "4Xro4Z5A6q5dqc68bhU691ZnBHqCZ5us1dFEpMoREqZfmjM7MSsQwDvDmp71ybpov9vW3fF6PxdFpeJY9w5RB7cv",
  "key18": "5bcmEEC946Gmhcox8y2RQqbBTG2bnrVobsDjgpymiac81ESwR5dS6uTNgiUzmRYZ1DQPigt2ZEkd834XNzQJmah3",
  "key19": "9woZomFbnvzoWZDUoHdMxoww6w4rYK2Swsw1aE54TtEh4dYEeJ8ba8GgVMucUGJ1fXEdDr7aXib7VKmY3wMYbdT",
  "key20": "5crLTSFdQnkMCiz7zXvLQ8UAW4A3B91XhtufwAoJ8wFYUfYv9Sp56yJA7jj8B3i18tHSYW84hX5LmHa8pcoUMmEF",
  "key21": "4GcKfHpV8KQm498b2cp81UaUXmHSAB1G7MDMV4wffV5kpeLRnvoKJj6cQRTnWwCuURKrbX4nDtF3r9uhYYMe9L68",
  "key22": "5eQrYir2w919HHQ8ztdcTjrkz8dRdjwRiPvZuYtc2sois5DSsxxcUSuhuEpV7Y5ByPb3zmYHk7PFbZf9ZUa9VVgs",
  "key23": "ZpfUrnUjScMYRZCTR564WmAhDTaVZaUYJpFYhLkbGfDi7N7UJwRkvffzmSmi31pJKjWpseXtmXQCV8GybBnU2pU",
  "key24": "4FrNUvdagxosZBVznQHLLAWZwdKhmGuYwCRNQfkhw1TeZ1azz1pgYJd6uBAeSj2XzkLQCYJDpMgC7hHgYvKfZKpp",
  "key25": "334Fv2mSWqySuTktdXTUp2nJ9rYHPSrGwRgSifrJ4BCzGuhLM7ioifQGnHtzuf4n1NpKMAux7uoTbgiYEJQU3HHX",
  "key26": "39AyTzKYRHPwDdFrcGMybN6A53d2aBiP9yx1b4jbDAeeFM5EDeZuaNHYmSrTtYHfYJsjPLTJGssi27ZezTqrpKk6",
  "key27": "nnoMz9SDd3D38KQpXJvywfYhVkCoy1v3h3nd5hMBX4zNQ7yXf7gvVTcsfKiAhFZrLwCW4QMUkf8V6jfP46BcQrL",
  "key28": "5Pxs2nE4UEXemPH2JswzUQgnnbCiBiLXH4qyKCDi6PEXThHtdBe3w3wAaNankRjiCwQc3AJFTzvPyiCKCUndQVpD",
  "key29": "FLHoMUE8j4fY3cjdYobxuv18d1EC6Bu1eUPJBcRsgLxSa7qbwvbdZMPoAtkMwjqTXv3Rdv6Ty3TPuv19rFUTBxu",
  "key30": "21QCz5nUropKJwL84AKCCoEWfPHDE2raUUSS5A1kBdJcv8FPaTbzt1eT1sE9brwHhQdESfesdr4qdASuvgsaPtnJ",
  "key31": "4yZjpfgx3HBrceRRS89FGAMHeY5HGHrsRDcbSPvVs6fc4b78oSpTVXj3mTwSbVqxCGJ1bTzGp5DyCqjfpmX8TaP1",
  "key32": "3qBw9FD2XWPrsnhddpUrkZ44Zy8MD1sDEmCUVtzdT185WkoJ4xshsNEQtcbQsmfUYmgGUhrLkNVJUYVPWY9n52ZS",
  "key33": "2zXdtQK9UYqberSffZNwWFtmubr5yMQbkWj6qqhXvJwPtcHev6C7sSWKiX6VJBde6qNMjXjosMJ6nV5QjyWfr2pQ",
  "key34": "MsjfmotC2rA4PEK4eynut1N2ZoRwuJXwLcVLs3MndUgyDKg2LbhKvs4YE9BmxnvNP9h3A6hrjakU6VkqAWycvpv",
  "key35": "3jgV1EyJvdTsTWLE3RWxZgGSWCjhvpLZRJ17afHf8gSFYVWfy8VzYgnuETwV65qcRrqJYRZLj1C7c9MgaeMqjJxi",
  "key36": "3uVGL9RmydoWfmHK2eeG5qJmPfZihxFXQhgmHpag5yTjHDpnjFCK7MMYma6VJi7guHKrQqnyCkGPXfboqimnD9k6",
  "key37": "WiCGxFNcCpQ7RXvNm7XySuAU9Gc64koV5ccdsx6KsG1WEChEHJqWBnwx8HkJAAFePkMJK5TW7sdMcVdhPp2uFJE",
  "key38": "5gVXKWMiKSkwAAV1g1vAcZ37MrbyuwCug4DPRrgK5cgN1BCDFhMNBKnvnhuK7qRUfUzXHmeCUqjL2GLsjWFTNhj9",
  "key39": "GxA8Jfkgu3fqfTHHLnWwQyLSJvt4dwQfnGjmspdFVTSdmy1VAxh27oUPjnjkKxhF71J2ZhEpXmG8SVkKJv5UT7i",
  "key40": "2eo4T3psKK7yzK8K7B48ViziCSVcn8S4jV6izJSPCAeCT3YCZVeDsGbL44Bj8zcXBu628ivCG8kGiQQLktozDn4u",
  "key41": "5CmqnDuTkrJYMN9JGDUfsATXs82wTf8TvyeVoiADGJGVC96rq81T3F5taCB6DxsqjWUypQD45bqzCbSb6TSYAjR1",
  "key42": "4bizEYNSkKHfKR5cMuvoBhekpLeM3AMD1ETmorVawvwWtqiNRa8DuHumhsJFcyZnCH7dXxMSf7z91jTVM96GU6gU",
  "key43": "2g4UnnMVUp9iQz6Rr9azEp5uUYJqoSM3F6qaw62xTbZyFNGtCjRw24o3Ru8W2HcyMfURnvwb5zsBjcHM3HzWGUeK",
  "key44": "2Bup1RZS1bcww4bhCYKQrc1XAwZWFdKV5AtGnWQfzJUz7yNgRuXuntooRMGcQpDn2gRSiHKPtTLuszGhQev6HTEq",
  "key45": "5bxx4wr7k9Ke7qPzLj2FcJoE4LdGJbJFxoUwPptyzdeLgYZZryqK7VH3UE2rR8619vdfvyoH71wvqmSqgC5kApmd",
  "key46": "4fzrGbbyJSDE3huTw4xo24UNZxQHKzb6y7veM4qGcurorz2WwnzSMpUJPwSrCyuZDb8PiEC6KmxmpijV5RQFtQGF",
  "key47": "5sabhfhC3aVDEop8bggZgF3K4ics5Sq7oC5q5tajPR5eLpC4W5hTuccJCCJRg8RAvuQsRznnBgo5NyHnwRp48zcZ",
  "key48": "5U6qWm5WBhUejfHmYUmqxXCNXHUjjG3UCyQuSTP2TN9ydLZ77jrkaWAbfQDB2Hr4pX1rK4ztsHXarpYdXWBbUK7N",
  "key49": "5ETZYu3tJwghazfxeSG9J1BDeNQWSP3VDXWEyvQ3p6i7KZQ96WxM2za4oueic6XAfB7FGm93StufzKqFWUDZYX32"
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
