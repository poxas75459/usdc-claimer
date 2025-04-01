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
    "63scadiQiPEjzF3ks6JEeuiCxgsJtP2EK7eftwvesPVxXUkPgAaSYXMJJ6HWt8DAT3KPh6D5cAYkBSHEVak9kvvR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kaCYn2u1YW9g2y6r5Ha64gaXiQh1XzZ3rVjQH2kn4G2dGm3XrepuGmFbV8AT9GjFjmYL8joRyc64bafGKD6NH8P",
  "key1": "3ZxSX5Qf5fa4EjXut1fLS1S8jz22Fw2VzuKM2EsuMkkLQowoagKXac97qrtQciAkx4Rt5J7CTiFsuhiTzYTjEKnY",
  "key2": "E4fZhA9dvv33pVMt8zoewUPRPJ6wvu45qwZxAhXKC2pa6qH7VCAXosXRpTyCom2buLhZaqTfVcQdvSMZ3BTvDmD",
  "key3": "54vCsrwegoBqyB7XKbPcesbffaJHKiZWMNKWnBVyh7b2eQ7wAsX5Csgjinr8SgoGWvFkhqr9JPHSigeodiCTBNCD",
  "key4": "bMeMm4u66ZunSP1XGKGmow9DTdk5qhFwJ2eTVUSjEQHAFem9TcG8X51GSxfxL341EZ5N6bRmDRQTi1vRxGez5PQ",
  "key5": "4duyJpbnGc4efUqHCD9rypXTjpvTC4f2LDT6hAurGi1rGtRn3GytpzmKmJcjUHSq6Mk7UyDKxUyEDN4NaR3NxdZJ",
  "key6": "48VDrQiYQsmBubKDR1WhMv6nD3tm2XEqgwkJp6H5UxccFY4aNtdFsRb215pHqcKohPZnL4xGxVhx6EamBvJQGH2",
  "key7": "3A11cXhUKShuh3jxBF2ABLR91QrPLxsn5L7Z5vU8THtLGSjF8nYFEvXuK9oqB1deSspU7azXWKpryizrrMuBWJC1",
  "key8": "5vFvZs5sciUhprvvWoBz89uqmRUcBY42XpbVGdqMQmMQ7TdfquUuRRWgkTTenXtrbZorYJYrRjzCsw4C2uG9bECa",
  "key9": "5sc928UHFcRaCa5e7dacuLkKVsNdnokweQea8NFBp7VgDBG92XUx4CkReJjXmE14HVvEDFpGTJdxKYZYHz7L6WpJ",
  "key10": "KMoimaLxvHSbTB2AKTgyHzoKnqmAgi3P3f1D3hQbYbJEgtzqPoU3MZFrSVNw7BZqroNnp2aGZZg14oBEZ5xCrt5",
  "key11": "5QAaVxjVHSbse21a8Ta2zXArpPsw3y7HMi75bCUXGTTYkgjivhq62nMMq57atz1BAzxTAQWWkhvUddwEg5eBstqH",
  "key12": "39PXjvvn7CvBbcPCvwUhbQecr38mBVYYkCTVbbwKNoWgZFPzU15FLLM75N3CcP9P2kMz5NQbMxkWii2282dYq8y8",
  "key13": "5Ncp28j7dZsS7xVMDemhcsa2PKGQzRf5E4HcFRZ5Gu5ntuugGkzVf8DpPvwCn78zXEUDrmjo64qoLqSCLfA9ss8z",
  "key14": "4vAVjot8pa42D4ZN4mwi6v1gSCryWf3bsShWJemkyzyF4Av6UUxwwTAHuJ3uXmEA7RVmvqfnzCHHUeMjqZuKhrAM",
  "key15": "sQJMo45jmfHVMiQaWccrxX85JBj5vUC3nPGmMxdZyhtZ1EnsCE6GfcJjsLcuam5zMHdLEhZ5pKTPehkbka85byN",
  "key16": "2x4Nn8AP62Hw5vg8n4SurjQMnskTHjS9PRM63njsz7HKdJMyYFxaLDpiH5uR9eyuNHfwxsQNQnvd1YT6BbwGAvVv",
  "key17": "4igF1uYSpv5KqSBeDNBycVK6fJKk3q8YtZErmFZeopQFoMJtFWFdFVtnZSsbpgy6yKuRWPzksgwrpMsCJUuXK5Pa",
  "key18": "5UhKV9vHhuq7szhYgxmxg3pQULkUtXrwYSQwkjJhLt5MwusyzJaouCSSZyGexG8yZdiue1JZvfLWj9Ng2i8eKMWH",
  "key19": "4SSL7ghs3kGW49Qsdg129B8ENqBumoJ7AUaYLoKd8gJ6dw8zhGRzQiEpbwn4MJuP4rNA1D3YgqLyLj1aqN23XNAR",
  "key20": "3krFsxSMEbLQwTYJ39eN1XjJko6qoqAS3vLvSB6xqcFNpmxweSHdcnoz75bRYEbXM277Dk21eGMjE9BB3HzWNvHQ",
  "key21": "ZNejseeMyVGNNn62bBMnh9DVAYVz9Zm7oESRx7Cay1zL63zRywnYRg9PmGXfPZxNGMrvRgt3VGxuyVrDkRdLVUw",
  "key22": "3P55BzYYqQwSnZkhg2cFne3cqBG4ikXPD7RCenroXFDVbJoaB9yuCuxmxzUabUArzy1aetojmgde3E8EpG82g7VQ",
  "key23": "oZvPWAqmrK1V4ZvrbbiRCoszZQ7MzRUxd8SDSxeL9mKNDUe5j4wHENxnTRYCscHCSXySV2Thx7FuVYN5ADRN827",
  "key24": "5kGgdSNyAsLzEHdXSLpTco8zhXij2wWJqBKiXikdYpkWpBCis3PnddSaLcouDBRRW2pLT5aeeHM1BrP9ZVJHqzKV",
  "key25": "31FK6E8jJYo2xVYhodCypxkur4esDLFeP89f2hrAF1XTVGxMya12spMxSW9CTiYxCNjdxzcfg8CDHvFvkqB8d7d",
  "key26": "NwyjmYVotBpQA1VttJNozyxKrhyrcAmNQQTntqHVii53Eo8WvnTYEPSra15EcYVn4u47RAWiXqGENUsrjTShHWB",
  "key27": "4SzsJkENCM8ZbcQGMnsyDjN1jbWRjCPhtBrsgfjBANPQKFHUxNSCBuTP9sr8d8QT1eA8tqtdX2BLjbUaDCU2gauB",
  "key28": "2RzkkNiz3NhkiY2WXLSKUMaeC7q9dhFJKNJbaUnDgx4YcUpoub48Vp1AhtLotSGS4x1y9ktsec3VZw98jr2JbC7b",
  "key29": "5i4Yo52ioYegqSxvcPEa39w3npDJFU5M14K7tEwqZ2s74vnJ6dBAV9gjHSkpBU3Pnf9AiHsEtkCUNfqdxc7qz3mM",
  "key30": "39UZLCioCbSjhAuC6N8XyyHE6txFNvc4nDoTsCp4wLFudTyhqNyVTnQTSj3bmC7i6pqv7VkGSu1u2D4rTZQK3xMD",
  "key31": "5iMGguMaxqtz53QnD8fT8zwMFdL7wuN87BMr8C5zmmh56cYcmb7p55bRcQov4FbqDyb2p54fdnpL9GYboUtNL6iA",
  "key32": "5qDMSu1oTy24jkq1TLZMxSTtGYL8JBB3rAusR4dTv4mxzhsuvmPycVm9G3gAF1jspYwGxB2sHGmb8d41SbWx6Kyj",
  "key33": "2guV6ReoJPoBvFjYbhpSQDJcrYSG9oAL3EgbJPJaG7dYPBBkUtUit7ZYrs3TGahwKzECNDV5xrNrrkPqTdZaVapw",
  "key34": "5yRA9y5ZUzk8iVrZ3guzPeFVZuKs1aR4gs1NV2bsS1df1pHA6qvjAwh9udbU94E3i6DrHoDrM2BgoGURdx1fbVQR",
  "key35": "4zUDQitwXDp5zk3hHvXiKutTog75Hd95bKwQA6j8XCAfLkqi93AfGfffymSS6Xq7TYwgqkcmgZN2xCeY7njURbEP",
  "key36": "sLYPS8NkV1hJFPJcQrU1MZRG858TKKDQVY3BiWbvUR4Eust9YQyk6dto1pvhwavN2qnJ72NfjzU7CUSTvvSxipJ",
  "key37": "3hr4kTtiafkaA5vwmbc2mWy5o46vm7A2NGyGHZz1dPWBbfJ8cW8PMyoCUVGP6TGukGvac5jwziCMfd6UBHevR3Hp",
  "key38": "3Sww8Ac9xqxqgTQAi14Tv83JeK3vHZP4jjdbpZyh9LNwahZf4JRAKUwNRx3LT8GGCezttLqfdQyRVYSrRVPpTzdR",
  "key39": "GCuj7RzsaunBqZ3xCG55RKRuprrxdF4EgGrX7i1WWH59ca4bV9Pxy3mKaMV5CY45PirfJbvbWRvppVQjZmKhdV8",
  "key40": "2PiUV12ugdqKj1NK8VPKpXt88Ucwh1Qg2YtLJcVkgN9ALVH1jfeYwtSmcmvbK5fUBvVX4rJMhJ5hhKQBaLhKQfxt",
  "key41": "5ptHP8wx1jxSUiArNWDt5kFmSzEcKD8oxRmE7qa5SyqReqBmRBvVNK5GLz6MkfMMaStXj6ZntEkaVN9hVyoZD4xS",
  "key42": "3bFpaaL7skPrC1GSRnNCn8ZKzR1LAaqGDCRUE4CCzahMbNmjgim2ZRpaa5ePAvbQe2zdfmHZuPaXxeuchYLsM6BE",
  "key43": "5PGgxmo9eoQ86EZQVkmZaghWRpvdESB9e5NPRKZAeiFhFq1HTf3PPa9pnij7jM5LMWxneb4v3V8gFKg74NwStcMj",
  "key44": "2Jspb2N9bUX9JsVhQoc7zTJMGishyjRag3Q7ZYY6nSt58sUuCCik2scTiS69cunwdhEKk9dmM6NRro5aHBpjwaNQ",
  "key45": "BdFAhRgJML2HzRaWJjd3UrF8WJiRPmbmsrydxqG5kJwcmy4LFUA1kMJgxr24XWsBkVsX9DBTTyAt3FjDJ72fT6B",
  "key46": "5wm71JY1DF5pxuq4qRcNV5DmW7DXzz3KFV14eNbwqSscvsvkxM4Mw33LD8vzzL29bG8u3ZNAtjqR1i7khjMQgprY",
  "key47": "3VLo4JuvqZU2zmDuXf1QpMzaYGNoxbZeatHnNEZ731s9b6wka4FsKNJi5BeEj6TAnpZ9fvC4ssojiPSf1JKuvbAF",
  "key48": "2EqU4cqiNUM8sEwZDgT2wiMFSWYRPbnNrJJ9zn8RT7kk7igY9GMsvMgVB9yqx72aztmXtw9SaXhBpitTdfAcAHKi"
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
