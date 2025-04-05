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
    "5cY1Car3WndWpWdN8wKEhFK6ZkT7SxWv4NQBCJn6LbdUWLJp8kC25HGWbCwo8RapYYj9Gr5SMSpyketPMH77trfG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RjgBTtec6nEiNTJSRjQeuGhUxQLD883eRTt8n6tTMXDU9wBgtvDfJ4QG19YwkpDWFqawwD6hWTc5F58U5bkSkp",
  "key1": "46b5dA2uxUqTC9B91CSRMKCupVkqkSmR6G7zjEVuABCLXKvjKLjj8hRzF3zUQzEsb19JN2NXVWyUbWqcsT4GcEUg",
  "key2": "5eRXKMVyGxQnWC7fSpXjJnYXaC1DChQoma2yJFZ4WKBoCqDupkdGHApJH3gmvgLW83AB7gPXS1v9yJLAsHx1HbVm",
  "key3": "4sGC3YpPbZQnP4nAPcmRMhchf2FnQMTmWoFDfHebd6vToo6F9UkKmgsWg4ijEzcgFdiFbqPZQztcgFgEVCAn1bEw",
  "key4": "ZnaaApiaF6ZiNvGGzWDvhe7qTrevwnPNAuuzn57fPLEY51hmfkPQSEZxJDZ4eDWouajaFRHrsrNkyP5mi36qoAH",
  "key5": "dFhdUqTXdFGsDzDCmcckZn7pH2AMPgwDNdWhuRHUTQhZa5NXhemeLfPdd925bptkZ5R2Jkvn5dy3LSqUho83Hat",
  "key6": "2z73ynz3jjbM93XLiMuxzRQ1jrnqPW7JaNgKaPe9XmwckW2kH7rRkVohvYyVW11Fz3HzJmrSthMbG8m7LQVSEoKN",
  "key7": "3cTdSJLQ4Cf3TPMwd1j7sUBBj4j8pMjtdaDk6GttJqiPGeYqNgUWPj7niSk21ScXnYYbGAkAo8pSSRnQ5Bq8sd1g",
  "key8": "67kugy6gNdBj8m4Jqmvy1eGgpFLG3NvAn2xZ3WWyXG8vdfQbjipXb9QD8gG7TQfQiVQ5fJP86U5rkTYVJUU5hFug",
  "key9": "3rXU5MS4BNojyNhQiyPZCH7pw33Ym9Kkj172KmzUMVSZtZHhNFbH7xbZQm8ff4ms7pGUFXk17cSr8WLJYHjZZYQX",
  "key10": "ZNCxronQ7yYtvXmqESjwZ3cJRmDVqZnfdFTBmzQmVFRjfvDF1Uy3M1epqG6KNYy77ev7SaSiFNZV5gBZ6CEM9Dp",
  "key11": "APJ3so61Tuyxspyhy2kFejswL2RmV7coeXfqJgBC4v1g1i88MqA5WSZot8dFLXoc17z3QSqrgicgNZK1L5A2rsm",
  "key12": "BaedxwPSEALdBtxMcQvRd9o4DybspUKFdviJb2XyMkVe8cwPE7XJENriZiFDMXgm9RnUFSZro3eN4u9aRDo6Rr2",
  "key13": "57QVJE9RmQ29oBKrzNZHDVdRsY8YsuxdQRiCpdT15xVduyeij4aoHhdA3Q1jNSXXvgmiAodFH7kjSvQ2ivftkroF",
  "key14": "2oUhEKDRZqbN9bLn7VbB16tcARGRYREWyw1uRrenSVXYDEhNHYh8QBAi9uuLVNoQvo4WuPkc2h2vGjd4fNKNKxcp",
  "key15": "3StES2gAw6fjaihxVdr5ReS4Vo9MNws4rPDX6nghbcKgEXcZ6BDRs5F5yDqM4rDVX79BCWQUz29UaccUveNaZK94",
  "key16": "5p3t3FXx9jbRQ2tEWxW5znwCNjXP1DXmQrF6WXoytbpfiNTSvU8NP2iuApK1STcgb9o781FfpNESFbE7YYvSMXFF",
  "key17": "2SaNCsfF38T1DyaUEe6psGQp1ieSj72wmo5hdoziYYkCynYu9Uv4xdgkXP8dnF8vHUWd6V9wD4q1dqZWwoekJBva",
  "key18": "39jwRqj26Z48RetGCDRW31Tn5jYYxeFmEsAYbzRDe449pUoiS6KASF3adrGPotNzieNdETv7n2AEjbSmzX6qg9Aq",
  "key19": "5R6DjYq63QTDJnXJ1nxVZDj5V3MR9mdiFeYYHBGJp8kWMeVyUCMYfPKzsUMMRH71L95bEWFiMSmoMsffK4vUUjTs",
  "key20": "5RMFncmW3mfEfxr2fL5bWgYgzCozhumPxzDZEWGPGa1uQ5344UXJuaQAtqTjCAg7L8ZjTSaGiZMss5dVWds9KhHb",
  "key21": "5BhT61dsJqXeLyH85nscvMmuQL3z1uhkoLhPErVXBbQHvzoZpWE5X2Y7Dr3RNqmn6HAFf6pieVtYMX6nL8jwP13j",
  "key22": "ANvfb7dPHAtmC1bUaJTzhwh6UrnfDMtUpTQRHKywan6EJXEagGVJCTxhfKH57ADRZ3uGZ5Fi4SRmQA3oUq9QLD4",
  "key23": "MMo54f9SdxbyzL9waw5rGguyiVhLJx9tZz9bMJmZmJAn4gArwuTEaUVU5LXVSkAAYzT99nghaPXcjPKBvqfohRS",
  "key24": "4r9ijwSXvqJ9bVSQAaPLZLi2C61AFSJyhnRxbmKXrmUieUVaMTJLr4USZ9oFsLdQNcJLm96JVC2oL3HaMbUaiBvk",
  "key25": "3NKWKh5H295tWAvZULKH8bqTGmLzgPAshdu94uaUWA7yeABLaMnis3TMPcRZgi2mkcBJJDTK6VA4Lrm5Mbtear8j",
  "key26": "62pKYc8evqHUUz8JBwcVjd5hMtJ9uVYC7LiWczR7Kfc3dg7xocRF3gxon3FZsAFMLTwFQTSS1wqbfuZuDgvQUjnA",
  "key27": "5pxMqht7HKqRGLXyP6rq2B2fq8Kfdq5QKuzwELe3aeVTR1NWdJiDsRBsDPkABiRFfGiYzM6aFqv7Vp84d2Uh1Tgc",
  "key28": "3yknAPRVCTKAAeHP5n8Z4TDYtqga37rZfHYHgEw6gVJffw7xUPrCKsR1SvJLBZfiRdE2QYhvbWowErcetRrgat7",
  "key29": "3aiG4aB2zYA2Fju5zm2xQZV9361Lw8X7ddQuGj76mRiiLQLgSujxXReKgZ72DsWH622efMVtruxwVVfs7S1CzerF",
  "key30": "3sqrqTitGkAtoQq9N8oN4WuXeww81esgDXEwz4ny648gsr36rXNVTinc9A4NSXrEZL9Hg26QfqPgRU5QZLshhvKZ",
  "key31": "4nhaEtqm4PrgqoTo4uuwVeWz2yhhD7tzn5qviFcdqeFmUJ6SATKQCmTjfEvjrm27EXH9uUQBQJiJpbnKxRugnPuh",
  "key32": "5aAd5mhxsv47xCPiphLi33LTQDFkvdT2TLxhxoVJasBbEVn6iPNW6qmDiJURp8zvuwTsYPNY45Eovxz3hSdnLNQx",
  "key33": "3TB5fEnmKDmcPvJL1WkZbMAb8PsptxbHUhMe3WJEuaZanYWD33BYX7vmaK91YL78LEadg9HywQFXDNFdDE7rPy4X",
  "key34": "3L87WZmnA9gaWNh6erJiP2FCGxP2mpe8nJR6nRMrQqstpVmJFf51LYPM9fgNyxn73rrGvk7BpiAht277q3pSpUAG",
  "key35": "3EzpMioR8MQV4pzcgtL3zUoeVRumo2MvmL6XcDvLMyzL2AbbMQoN25t1sEQ3cFGFWLdkiY6ZSqZcXHUf2HEbM7gb",
  "key36": "3raWXyrMvPXo3Re8tCk8fCQ5GTDb4Z2DJbrXU1NNRMH2oY1X9J9xhGahaVnY94Mct1RAzNTNTphRKURuDQqRpCRD",
  "key37": "518UfDWY9T7pPyM8FRV1o9bxbEazmuVmwpF8k8dNXKKvEPRh6ueeM4hnw9qHwUjjyPthPW72XTfDxwRLup5na4jw",
  "key38": "28ipCunsULw7bFy8WUM9DsoWvKwEiJkfjjmvmNwSVZ5idSkQ1GZVddDrJR9n3BwmvasFmZT6fuZhxDFeVpy6v9uR",
  "key39": "uUQw1EtF1m2WrJQc2JRwa9eywJmBNfRubknHSsVZigNVqEL8NWLdMM6U6xH62RhkNmFaDDQEqknzQ29t1bkdFaY",
  "key40": "4V6yTLmTyABMps1icyMy79YDz8v2ttLvAVhQjQsrjyHugHwtRCaPp6rbDb9DacEAmYgjWR4YGwtui5zQaZHU1Dr",
  "key41": "3JptBjxbRBTkFx3fofn51YUHT8L4JioRrgtJZpovhbrZrfH3nncRDVbmrx9iKbA3LKn3D2EVYGac48TY8GRQ9aYZ"
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
