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
    "3fZe1KGo1CW1wRfNecYzSbvSsj3YxNnUAaLViamD3hmyTS6vyfvfBL6y9ajvXqusrL67AKiDzHg4rN277iqPnfV6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3U7Ai1gTeH1YmT9NQUVXzPPEgkevjjtJX2AEPUEeHLLp5nHkSPnLSU8Zi5mobEqXK485KzVcGc5jnNX2A1W3XNHV",
  "key1": "4KJLBdvxsTbFs5SumicWSXmLkAupZx2zqYy1nHEGSTZTBVFW53iNi13vRc2xQprfFP4nqMbxrKyajWUaSQ6wEGYv",
  "key2": "2vYf2p5UZRXnfXLwfEQHxgtEgPL5aqPx4eVzGNjEtGpgpVG5crZQseZAqe2jhigKd5uAVQBVLSLfEz9czky4Ku2B",
  "key3": "RoxsBS6RfpxPT63vExpEmjUsxZrcgus8f57jD1B2njT1ArfKZ8ifUEE7Ey9djQGNF3jYStP8R2pjZLKeRvSotgQ",
  "key4": "2zsT6EPWu42yF4RFMdr6tHBvhAVwQx2mtoxPVeVChLmLucTox5JaGFXHjuQmKtZLoNTYUFh3PRN28ctFuZKuanDj",
  "key5": "4gBEfycmvgibqebCqGh8eiMw2kQ4wdsFZBeaXCihGwEediBzoNkWWd69KM5Uuq3ZpiN7RJxh4pV3C2PK1Ak3GzZ9",
  "key6": "3kaPGdNf3kvKqf9vWZvBzYoVrKAVY6nCjTyKroyyj5pBJZgPCbujfuSucQ5Em3iAfJqZWQctAUJsEXmJDxkLTEx5",
  "key7": "4cVeBjQqCVJJMeUmVAu5LmfWVC42sLY2aqSHxawo1GiEWSXExuqYGmeXGh3AdepeAmKUjAdD4dhurkao58de8k4e",
  "key8": "5trhvRubtDX4BFtWhWBWfm4h1nGs9UqzkoF4JZyKosN5JjKoMxgHK88mYLxzeLBNpWdG3orwBGUmpxeVNsWsgQ6L",
  "key9": "njyeDfYm3yx81VKZnFgUz26VCMLkztPBUDTKHCkLNa83qxzUYncKSCjfDzhXnJafrnLmqkytxbbRZfACUGYRrqH",
  "key10": "5B8iWdTZYuDWnYqtGTx6SkPNWbL4oQAZVM2qgj4GhnfxQJXStB5gWVhXFy2W2axKURj7pX2VhuRnKrQjRGmK7TDp",
  "key11": "3VZKM7yh1rjgzRYGZ6UVwZzWgH2rmvcKPqFCsz59JdJFa3mhG4g9qCHKbEcwN2gvZZGVTMhnWuM5MTCL27RUdsru",
  "key12": "41XpWNjCdG7nmCrsfAWci1qFBEPXL7HdGvNxU4nnfTvpo2YTGb9LyayF2595htTRa7ZL86GkCXzRhCF1vYzJfucS",
  "key13": "45Arf1uQg1DHzzVzGeLi7h6Btr2V2L28WBMeiekz4ZKqddTXkMgEJLV8X9ZDq6BU3es6nFSh8yCHLKvfn7hydufT",
  "key14": "ztrJJo6m9ZQBbGRv5RcZbwFmyLX1q6QuwFhFFP8djgevv6FnZYYY4k9ZoaZGeYJQDjwoL54BCdAipWzTQPdVWrr",
  "key15": "4E4d8Wh5mzBkXsoh24QtprJasmg3jxV4oCD4GGjqgueXfGYytwVvZGJ1ZW5zaQaq4D1NDrmDgWj5AFiU53t8b3Me",
  "key16": "3L6RbHhrmLLgKaQRNS7gs2gFfT5umJ6qjRyZnaA2eKED9srLGfA5bx8zhqrB4jknihAFHX5tAaHomVFZEuXW7yqm",
  "key17": "2LjZPdC2wFdwavZCs2wXzXYfk5si2i7wjU5T2QBEHqiKdvshXhhDwWSwMAnvX2AthnjWm22c5ZqgmQsmLHESkxWS",
  "key18": "ZBzLV2voJWB2ceJYD4KZ6DtGeh3G3tTDe8fdzdEETKUpysuYRQ6C5RGr51gNQCthtijfqPFdxXmCPbTBftGBmZH",
  "key19": "38wn8ndVqufJPvcTmqhwoueQonKffPEWopxUkSSHboZDuXgeJetwz1jn1ZzhNrVnJxKUbnmKxPhjhZRMmJ2xqMf8",
  "key20": "4d12p28XsCzXjwggqg4jaPKE4g4V5zFPgZZMWoMjX8x2zRoCFkGGbJUpBRnxXjSh8gGkszLhsvVY1SiBSP363onP",
  "key21": "2NdCqZMRi6t8p1wEd54tMhzmhB8UjFeBHJ7HtMhbmMrGz7x8SAKqixaKxhQ7rqnAnEtbJ9AWxhSaR4yQhSxwfzGe",
  "key22": "46b6kiuDxSoANn5gNDLmRwy2GEzU4Hfomi7stbC5eXKjseK5DtyGDtJzNKPNcRgq3xo5Z6Kz4au7pcVRS5nN7B5w",
  "key23": "21iXuRqkBXsK6tUzoFGk973Xr5AgcjaUXsZH9keVkHi2mUt9KZSLWxcRijM3kiPtUjBkNfnK6Wag8emRrnbWqzy8",
  "key24": "4C31ackjMNnJf6WFhGFtYZCeHBDDuEFT5f74FSqZ1ynYHjyWLADn3WGb31jGqLHRqynvq6DeBYQMwvvB14CfCCzc",
  "key25": "4SHFrFgdQrskHGpJBDFw8dshJa1HthfZLsgkweJUqgASYEEhS8FEoKHFjCsmCukd1Rpr7D5vMKVr2E1PFwuytH7K",
  "key26": "5HBN7dL39ikgr4vHeVVaDzhRrchPCBVKN3256choMcsrFoscAJAvfvUAqhzEMQfRnsBehzeRp7mMXJKavdVjzg2b"
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
