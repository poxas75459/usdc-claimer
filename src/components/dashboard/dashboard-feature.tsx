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
    "5qLTfucktWKEwnFTS4evPZQ6JHXhCjuk7zJCHnERE81eA9THZfuxooSgHnMBozKSxyfg1z5a4n4YXb9zpVBi3jVe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ePc8zfFesnZ6aPkt4KoHAp3Q69XTDzw4s1s6jvqxcEN2k6GwfPV1MxaTDCQnjhadUB8R4rk6aX1a2habmSSNa1v",
  "key1": "3rbjQS4RgQ1Da5NB6qbX2oHuGUwok7KTwLYhwc1JQ8f1aRDQeiRQPvmxV83gQQqVcrLov38UZ8qYTuaziYr36BC3",
  "key2": "5v8XYmkndBhPMK9d8g3jGfBHRX9kj8yawjWw93CYimvmVTn5WkQ1hQvmyFKXUYvJafyJ5LVAfvEcSHvp2FVW11mr",
  "key3": "2DijCH3JtSjeNphhTRFoUcw9aRcgL1jSNzWBHKnTHAkr2ziVHQjKsUGAYecPc3iK3QcrwPSr613jgATGw5LG8gfe",
  "key4": "DEjPN5KRiRBxSoQE3sHaxovG8GY8sDcaSCwBxkSctV9WoxGDeqQGfrBdyqy2Yt1sW8vHD9URdbkudMdH1n5Q2RD",
  "key5": "2MRBkK1HyMAp2omSnRnvv4rNhxU231F4vGjHhNgWmtu8FFaUges1kPyEH6X9s3ix5rS5A1fKkPqbdeHHoF4tsmqv",
  "key6": "JYqunShUu1uPbcmvzoUQP2XV6N4YYkNMseU4dPHv5LRyq8Qqbw3i4taquRKp4bC2TUCZLcJeBTJ1em9tZAdyXMf",
  "key7": "WfE9ZHCVGe4jT1TBzuZEDPcu54NFbqRQXbokmQGDnGf9xhbH9qY2j5hqV1rwFsEFd6E2HQtw2PmpXfcyVntjBx9",
  "key8": "4PfKnFPZcbBJjJvVb8SuioZndSTg4ESMYqsy1n22kYqmXEp2n9hVivYEzBcJiFeGwQkupyk8sShonGHxFgb8Gysj",
  "key9": "38QQBqQCyVfGkYWb2FkBxc3z74DLKLdVDysZWW1wAeGZ5orUwVZMGec7zXgY8o3A6ymS5uvmQV19secaaE1YAzAG",
  "key10": "2RFNQhGkaPyJXBpE2jw8fcFaTfervADjAHiUd8BW2xEa9VQqUk5y9hnmxyNhZCtwjhLYVaqPegyhLSaf4Nd3mmH5",
  "key11": "4gdgkXvkcw3cFC7iXsbKwohm9zv2nWNLRXZDbyMoSNAXu9tEkaCtnGYJgpkKMZ53GVXkL1GVwhgTiekSg1XFtdVB",
  "key12": "41CtGi9Nhqw2A3i1i8fhe6MsC8qnWhNpvGDbEdgycAGAJ6pD8hEyVZehjyKBZRfVUd1quRdpT38Edxye2QUXFuNm",
  "key13": "4oLDPkgGgQ87SuwfSrM83xCrWF6N5prmbb4pLHqFcEEbqZbVfBA8C6ZmB7mXExKAY7uTJo3MLRF3o6YJ3orZgrru",
  "key14": "3WNocLcP54fphP1RWcCzsudSqPSmn4JnJqMAjqRBnq19hsKFGSPg2gZFJnVjis1r37Fsw6Jziueo1x9NYFktPoXA",
  "key15": "5qrxEBEaGVUPcmo2QywPRZKnRrhrjDc9PUxcBRLR8pRm7CPLRRtxGg9JVHkm4uK2oNA1oyn7QTyMm9XDFeW5joXt",
  "key16": "5CtdAQMatpqpkPpgcH37YXq4JeUEYZraWLx1z7Foh9jCQLuXQVmiu5vozALvM9TretuYRe33tJW621EBvGoyokS1",
  "key17": "4jfYshD79rSm3jGJNdrE5oHzfK7UVvi5G7iXoHVCDVDGbX9dN1GD6FNeRXEYiRGPgAyE7B6Ep78mHbXfKJn9fvZW",
  "key18": "2hZ3qgChinNZYNQahGtsdsCcPrJGXA18N62cb2oK2QYMXz39eHJUhWXHaTK6JWpWg1ihQxcuN8vXj68QXvGTvyxR",
  "key19": "3uqAkc41AzcGpsGJWsHhveRwDKyxiQ6hi8XX1CXLGk7zrSNVCXwY8DC1VUDY2wjmk7L2qFmM4c94uu2mbdaBsTks",
  "key20": "4GuPCZp2hGEG5vVxBek2SfUCKdGTnDcPiLgJR7iC4Rm4nG9AJyRxzPP1vZ1Mfjv9Q4ApxZr1P2xodsCrQroa658p",
  "key21": "2pQ2jnEQKauXFkMZavEb4R7pW5TYfB38ggTw6WiDyjNChA774fmCfMaUYwRcr4FrUjXRtmX9xYKjBaQaUoKYCD1j",
  "key22": "2xnVxtg42fxdJhJZXsUW1YcFPgQLuF9iwry2JDWGsE8hB66ZiyEaanr8sN6yM1At5AiAFiJbfFHQmA71wQw5oppQ",
  "key23": "f5QASbTtesrE1bS6ERi52Q5zQCqQdGJkEBo58ozcw33enQ8rRwuUPh4DmSk2SkrK3KfgH5LmFE4ewA7FVBcFZYW",
  "key24": "5VAyx2Hj4LSVPSTTAuApfWaZhvcxtd7cy5ehQAXFkW4uv13bTBDHKFqXbqMZkiwU7ABVt1hHXTkzSAky4HyMMzBU",
  "key25": "591n25EpHuarWD1ez3zjzUwX42AvSufxKeWZHqxnxsx8EvzDSUE1fW8cStcNmFLv7DAABStySBjMGmr2jAAPJy4k",
  "key26": "2vPKTDmt1HcRnWpCzAiNgUPf2v9VXZxU51BnVphV5gg9z7SqgFVf2oCfXgHhytsEVrprMdTLH1qaNNyJKatxWfLL",
  "key27": "38H3gb7QYpTiU2BUkywP5NYubzHj1Qt2XpYMauNzumZd4cXjRxD9SAF7QwFChGH6my7XEZN34koUup2ypT7LWyUj",
  "key28": "4EPYVGYJm6nYu3SpW6PV9uVAzKQWuqKNijNon2MSqfkU3aSPqQBQ3z7KBqa2tPoWX3cp58FxYtojbttfjhHbRj4B",
  "key29": "4sRjidAfCNSn685enntcyBfp27dWryiVsPrQRmGhFxkufEifw9ADJ4ScyTfpgPraHr3SSqgHu3yBZk59iQEgLfr3",
  "key30": "5D3FKpehMjePBdkXEptw6XQe53bFHMzivjnFDeeZaZxvFYN1NbeA8gfBHCKhJH4MkVvywQoE5i3b4qYwNYh9UQgz",
  "key31": "3FoJjvKeLLKALwF4c68u9kxqnCvDgtmPBf7k1LhGc2CEzAcJqqJusPFDNwFM6R8WKccUavnTBXsVomUBM8Pt2Awg",
  "key32": "2SaqwDQyrz457NDyvHDVZ9iGgZx7U66vhpHkdCijMSDBnTx6L79Qgzxibh129hVzfR8PHrYDuHRHkHu27Q2cbKp6",
  "key33": "33YuuK3j6ioEXujEBt51CRpuFe2xzAzX3kQAABXorymGLJqnREXK4nq3qEhog2rASr1rz6toisstUhFEBX55m2s6",
  "key34": "5iBNveJKt5i6ore5DmcmbWKrNj7ePnRYEAN5LzbHF1TGDFExv7pBJk6jfhWNHrMmiLRgxEZjK57xTYNswVu167Gq"
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
