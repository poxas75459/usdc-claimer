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
    "4BCxjpArGdpnWw5mPmfwCkicbfkFGQQF5uTjCKhwFmrnNTG2aGWaASumgXG8c9DijGKED4MBS6aSSL7gFpfex2jq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wkj5QeWSnyXhAFbC58k6aqLHYWfyPVgwzP2tGP8gYwyDppLcKCxbqRbruq7vHwnbhJoi7qEtCyhJd14sbZnwHHU",
  "key1": "616pcqqfUPvWWBjb4B9GHmzsuarf5iSri3BnPE21sdKZ7oZYwrX4L4dB9KWdKugAFkmxmwDwgmpTCERDcBaw3VK1",
  "key2": "5CwX214NuRoGA5aAzMojXtSkAgVXCNUMupxs5satokXtRx9tmS1e6v8YpV8kafdQqjBBs6tx4GpfnCCwj9uuwnTL",
  "key3": "5JzWi3QjB3UoN7xh17Pg5QFjDSVk59zLghC9ZtpuHiXSFq3UJzwnyUyobnX2EeTq7ChLfyA6ntD6QbrMueFc7gfQ",
  "key4": "3V1KepuKKQ5xpniFb5rUiiL14qZnhqnoCctt8uz8JcZ4JWZPdTihvENJKC3R8XPvqXcWimdNfvarytXApLnMqUEg",
  "key5": "62te9HqZEvEvCrdBgpMNZs1i9YxY5bcJWFvbVDgoHuC6gZ7sZDkMabYJjLmQRLX3Z3VtCVotQufpLqPihx5qSeBv",
  "key6": "5AWWFQJ9NADUbTH4AwL1i4PiD16vsF94dXqBuGmogJuEimnwnogtBSxHF9PbDSTxCe6LBQxeaozDCrbJoSze7wXF",
  "key7": "318Av6BCnBCjtUCWGEC6y2ziP1h67o6FtRXfoFmFL9n3fnAoaEVQ73rRiDBXbT5NXK7uNPyhMXpE9SSv1yYMuAid",
  "key8": "4FV4Su5zmycB5RaZ167FP1DvRVG2gS3DK1sAGuEvcczsVat6aPNXT6CzQYrTHn8wptjwxGbT8pgqWnypcjMWTZVU",
  "key9": "2XhVU8gPkcESYiLZyrfhnzXr6LbCD5m7vq2h2FdGMvTGtnEJ8LLCGgULpQKmdSNFmiFvwFyPujwtzCzcQaTa7acX",
  "key10": "5C4GYonTE5m2p82fonCQod9obVyxAq3NuppuxxX2GZmf43znuyFzLxWNodqWMyz1ZCGLnA8357jEq9ojKyq7GvfZ",
  "key11": "5PZD6yPnqDmkehL3TxJzdUH8sy34PujcTyCUzHW5yHLMMbk6CPVNiSCKnvGHpxegdGXyzQhz4YSj61WL9t9fcySi",
  "key12": "5YB52HsXGKsPWSLKbu4wUHkuGyWvLZCrPzMjVb1Vxx4C6EsmdknaAXwCsQAH9VmE49hzzgNrcwuC3k3c6BVUYid1",
  "key13": "2exYVvYKFUv6qtPHoBA5XgX6SCpWmUwjq11yB9c5A4E72kBJ5Xq8b8xF115C8W5ZfjjcELRzDASaGbHcXvsRNQgw",
  "key14": "4JAjLmZpb1v9J6GPBSyR313dXemCh71CQSrmSvJAEwBf7mKkSVWzgF9sBLc4pjXXGmkxP5rjiwTDSse6pvyh7T7o",
  "key15": "4Eca9JmN4gGVdTCXSZNnyBf4XNQJtRHRFe2az4h7LX9JU1m55N5J62neqpaciErmXYYAGeAdcjFQJagJ1p1tC4gh",
  "key16": "3Bvo7QFjTwKy9xorXZ7FTgi9K52feDtxKfPLzcu1s54AQ6QiuXk49TaKMGszUjnSjtPGkjjoXFuKWaNFiUSAeW6T",
  "key17": "2FPZQqvNVT8DT9CfH7pXrUWdKPAuegQGn8Fp1UG1JGfMteo96XboM4jfh4SgdM9UfXZfXopAc559wWwhfdoej8C3",
  "key18": "4ZmBC2TrvN16dVTBREqDuawhWrzu2VJxmnBFbykiHvsBs4aPnJR7HP7VZXivQDE71kpgG8Ba134hXkSDV7GXEAC9",
  "key19": "5TEPsdpvVeHgLU6pPHfoUXCiHWYSnaGioqciey6ee9KKcykjE7AavJX8eA3waT7Vei92j2FKevFMJSnisA7TwVYR",
  "key20": "5pr8EsJVfz58TNB7pnfGzcG6Q18drfLSAtYckQGfhLVdwtEAzF9zQ8MRnF3xg1EGXi9ahvb8p9KeTJMhtAdoGYFU",
  "key21": "47KbrSqXSrhcCY4mk9mg6U8PCRPry5GnJKndm15KABq9bBfGs3VcmbVQLbqjZ8HAoWmka8veJRNMDEGF47ksARzh",
  "key22": "xf4t9Hn7vbW3MSWRz6HrdUAjkExhpbdT81Ewm1jw9qyBp9cCa29wRAZnmgUbkXXodGfUtXcGY3MAuVXHgCEovaF",
  "key23": "2FDKJdtNBLaoKSYw3y8hoyRM2xkBBNYutXrg6Y62grkJaf2zE1umkmndQN7eNYdTiASvzt6CNpEpYQ75Z3yABTA2",
  "key24": "tmEcnrnr8z3zhhsMaNJbhb1sUkyPhaA7ebs98nH4iAwqAWgTHTmzoaG6kEXvsXWUf3XaHN1BLEKgskCDArePSFh",
  "key25": "45rcFSbLjPvRMZPzhvgfqKTQUSDnXi6ityRv7TCWrTHQCSHmqEC8aYXzLDCrQbwtW19L2yckH5Da6rsTwkLaEtWA",
  "key26": "4y6cuTtQBLsEcVAkpDAFP946knKD81k9RFpq77BUeDjiq14mbetep9yqpLh6Z8vzEbHQVz6ZVDzN1Bg6UybFjEqS",
  "key27": "67K3opBC7gb1jsU34sgPRQaLWefufsRBdvmjBG1Exaoftr38dFj9QsJzovsEgpttRYJCP2QYU1AEFhWhYcJTe2DH",
  "key28": "r2S5u1gZKruomwUdLQ1cDKwsjnLsczT26jJi1dRqf4FibiG1NkHaZcZG6b3SMxP1oQ9bnUG3Dd3uEQKhwE7iRPB",
  "key29": "46qRSjW2gcPVGDbV43B1nwouPe9XRnTPSTVWrN1njiDLuzc9WVaVKVrL1LknJGJWQt2fgj2ag8Lnw1TzrCWGCRUw",
  "key30": "zVFzLVTnkBqbL2FaskMvLiwU5Q4PTnEfz5moCTg1FTbUpcPaM58iVCG5zEEucHK2NUFKC6yQiyy99XhXQ342tJ3",
  "key31": "5iQPMzwKLoCsg758srmiFdEwUnVxwGCWVsDhx9CXo875gfmfBksG51E77jcryEMe6ZaWPAzYLHzpoqmwd22zPsdZ",
  "key32": "4waMmN7WfUtcmCTw8YYytwZob4YM9XgByzXqajva6aeMD4WbdBQ93JbS7RAMJaMm38SSz1RUX5o3dvGJaVPBEXwc",
  "key33": "54r3hEDrbXdpYQXrutMPy13ieDQtuNoFBi8CAUcnLSkNSXBZiTfjGuDV2MMRFGaf7dsGma37z9vAxn2ZkfHmbZp7",
  "key34": "5F1nVmFZNiuXy1xEX2HTZLpvxdDrXSkMDYYCWJ4cncfECHhEYH6RyHhxfsWsBB5hwqLmtgwn9qNiLq8caek4atxo",
  "key35": "xf8rZtSdkhBEidaSCctLb92Hs7Fjb1q44fcqbAQfAbUYfb2j54Upds9uXxC8emfzmmM9PpohBCLzcWBzfiphwgD"
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
