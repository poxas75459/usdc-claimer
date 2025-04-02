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
    "2c6RkGbTXtDmrJrVPUKjyqL5p2DtKQ55ZwrCS6Wf2B2taTc7L4qwcHBKnATGMTkWeG9ng3tFyGFRKo641SntQ788"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4p5Y8xPbRgTAs9sEbHnpYWMgAiM9L7P8KRhzf4zjLJjb2BDQafZHRi5PyzMJ8Xig91iJKEdDGXsCUJyiUMYe9y9m",
  "key1": "5n3zdZpahyRS65iV665Nvwm8yPnCKWGJnh7FqLjDvdwsyDVPkvQqTS9LAvkv9gc2iuRmWTV4EqCCTXyy71iqtpZ2",
  "key2": "4Y7iUu4TKD8TY65ZyksjqSEMwQ6TQW6opDrRBJ9984ayoVgzdzBBnhnyY53ZPwtTYdwo8h84p7FyezTZJJc5YNgV",
  "key3": "4TNNLf8bEiHeWwnumhBGqh8C89pJdv5C8w8a3f7Yk8sk3AxEZ98nNNPnZtqyToBxxL5BrQdUzwWpPrfJjHSYaZhm",
  "key4": "3g6kYbottW9miivWdybyduJwCAs5mTguuSTUa3Qe2LUZzMaGRKNo5tauKLNWjJdCSCR7DxSHKE4wTU4PEUzic7cz",
  "key5": "8hGgBaRZ8BQv6xzKSaqvLZ7tae9apdDrVBqCvipex3YVEWWW37xqPrf1efN7hnJPVn8bcf4Edvzw4d1crkDteLS",
  "key6": "52WD4M2bbDXypB7fcGHu3BiViR24Q2BfMRyELsjEtn8Jv2mr1YCwNXvYTxanVw4j7EFwkswxrB2vPvx1adv1EZ24",
  "key7": "51HLfCzqGkGKQQ1GkhEM25Tt1VgNqGMrJK3XGD7ecyyyf2B5H6QQ7Fik3eF7sDiJMKTmDp3ppTaxA6V467sfndnu",
  "key8": "3XNFGzbnYVdDtK6njh4FvFXfZYPNM5Tu9ZsSSYoFD9dhuPBFYpc7e5TZXbmu9JRpvbQpCz1vkk1rPKLUuB4SeqVw",
  "key9": "5oNxEEkjN5d3V53r6Z7bG6PTSrBRYhcUT9cZ8yQs3QpyoYoQXQZc36AzUZh7TLx2XTdduQBbpwrLT5VhtwDsbazC",
  "key10": "4dV8GKNLX7UvzCiKVqQ8DzhhBXkZ63Wyz2wzyCpE8QH69Gb9Yuf6RMHZbTKkxpL99WdoF4kxN3MLnScSFSRjvpBU",
  "key11": "3qWyvsegSdUjgntCSCW5ceKGg7oXYu2nXTHHQQi76LRRreXgdnzvxbmAegDxixkYGVfvyGeFZmqwBV1Sb3P4Pzcu",
  "key12": "26yDrtUBAzdiUfMPhp2k53LvjKvuebcXa5JZmqXC4AJvKqdbM1AKRt2kj5aWTP3YSxcHL8KWR8SEjmrtHvixE7wm",
  "key13": "5rbmVtD4Q3xxJS9JHDe94adLyv38PEhkkm1PeEVu3NXrQ2oX8ZtZKQmJqJRxSyfxMXrLuqatXYQRo4LEif8QXcuc",
  "key14": "ioJD17kGJxqtbs6zVbRBA5uqNCHtUUrrXUiGfNb9JU1wagMdGeaEXrYzfE8Je3SBZTxn5veYwZtqKkdGuSuaPfv",
  "key15": "kqHfn6nsAaoL21WqSmbkKaL1rsx7ei9912bStHAzAAWcqhaF7rpQtzQH8zhTsQ5Jbf1aNWuA87XoL14C9VY7QtZ",
  "key16": "3veVJXJNo8uSM9opGSvUUEGfBhSgwzEsHkGkFgrvKnvwrfmi91E8cZVh7CW5EFJ41BoYfC4phUu5u13ZbmkbWceo",
  "key17": "3ETYGf9R3SUyTX74bAAkdSoSPmz8uqrexScAy4vHkRRpu1gyce6xuysFqtd6H2eFTTPGyLp2618toEpoDUt14pew",
  "key18": "5h5cNhT5m462oM7biTGqNtYTWLtjgd6A8qQct3iiBAAFLzD2ouwTDSkxe2hYp1abzx4SWTfFqZebFbCBGBWsaP7X",
  "key19": "278PfrpVSNmKpriJEhgQUmdJC2VBQQHahszPToLg8hmXU8BSTcVBoJeYfq1isHnVNo2doW6DMcXFrkBctZb4A3BC",
  "key20": "sH8zKyJRr1gwUBTxPLgfQWc4URyy34b9THngdjZStU7Z8Wu7SG24yx5ivJ9pAeYo4e8qFXTAPbGhbZTt1GSBD2u",
  "key21": "4fj4np4mTMwKDLStRCvMuBSRZw7NBxxfsXtQevzNDLSfJ1f7AfJvZRfc7ZC16KnpuLQVpj4GoweToS7wSpA3sgFN",
  "key22": "4uLJYHnjNBMb9fFHhwaQDfbyxPxiLSahaU6jLgk7Ba5YH1djfD5EaJrzXnT2jZCnp94yNk2Na4VNW21Aqjfozsgx",
  "key23": "3jbU9VKuFgVX4JXC1BwpVRX3wXLBoG91TQgXMSVjysozdxZNZfdHtmSuryaTxy4cMxMSCoQjjCUqxRB3yGJX7SNK",
  "key24": "2jjkKvsuui8JxgthFb9j31fWYefJSfptpAFbiVv7n68PuccsV71yDjDMCUikEx3HVBbkhZHH4UgncEpZmjjsewaX",
  "key25": "RJMsCPurz2VbZseHqfQ7McUNueGAP5P1fEHV5hmVWHs3LiH2ETNw81x9QL8GAGdN716BQNKBfb1aQGGystiuCkW",
  "key26": "XzTfmZnB19M455oBeyfFYXYq47nTz1YwqdVegHndhhr9owQ5CifVQhfkkZgXaDtEPi8RdgUt3eYqZCN2ck9Nwsb",
  "key27": "5aJm3DWmEBJ3b27kmpAYfcomhnXuyJaXGopu5yrPqoVjamqN855t3xw7xTNAnS3dUnFd5ftsYLe6zbfACGN6NTft",
  "key28": "3yaMPJPGxyk72YFZSL58p6VamTAXfZMSmtXGAPBWPYw1nKDrrBnGA9bQWsXGM241HUf5pgTzK2iqazTujrpGrcEG",
  "key29": "3FK9pg5u7KQ6FLEAXEKueiTHHVL99zeubSECRwokp3zXejRpBWrdoYSkMD7CLScGE6nyDQwqysCvuqhPo27159QE",
  "key30": "2QyaKA9aar3EdjsgcMVKQYy5auQmSXTUpkaV5nCsBASt5JsuZZHSCJiUrme6NvWBcSff1Hus7V5cJr5P5SiAJKD9",
  "key31": "5DMVQV5FvGSFPF5dMUCkaNmbmNXsi2doaztjpU8ZBAnzr9Tns2AyKh2g4agmZRwZRXs7Rwy2H64QEM3FqGsvmM26"
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
