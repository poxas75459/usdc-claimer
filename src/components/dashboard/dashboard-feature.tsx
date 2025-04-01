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
    "kPKMpi3hHLmzZwSv97HQU55i7ekMfPGABQL9WZ2AWJ5v5nEKQXis7uDxdByBuhuT1Le7Dpvqa1vhQKyvM2fSeEv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bnD8AFg3gtQqtjRx8iHokkvF78dqaUXFaDuo5QztvPMVhLrLwDPtXzU1PbMXUDriioQruL2nChnaRbuU5dkX1mt",
  "key1": "4Vg1Z8GhnBSfD4GxG1mb43Cgq8BcUESFiWimCoPrmAgvAymg5oQmhGaojSkLemFeHZsLQTjFdobnYcBcwSbm7U6b",
  "key2": "51AnycsZse7thsUVwVxQrxQ1eugd1qf9t7XZjbDqVL5w9vuLmijX5VX1dmuXcnUVaV9B8R1zoUPUxaXTAJCe36qN",
  "key3": "4KbHxrJXGQPMxDv4vqyRiT3KgC5aTZ4e2GedgpvVrgkZWmKmkjgF62HjEiwaACmb773Q9sUW4SJWvyj1JTbBHUSb",
  "key4": "4RS92exNJotXhcjuiao8xgCHxKUEeHCGBEZGetq4K7gKv1pXt8UhZYwYseA1oyYJ4Jjcjh7Jvv2aKZoM3oK3ExSH",
  "key5": "4NNfSgFGF7p6SvjECbuGzWJPtKJctZMkMuyFRanx4AAr4vpnHiGnBjxtUEDDnmb8CWj7i7kGtRRjMRzttr9PkKp5",
  "key6": "KW5x7kbUUTSe8SqAPm7zNMLLthYeET4PMFsvfTyozDhYxPdwuMk8wxWn86aSht1xKXwHrNjxw8w7HiQgqVuPsZu",
  "key7": "5tB8TxquiMtSZgQ1JLXoqyms3Nqek6ZJUKU1bZf8MdmsLKxnWiUyb5z8AgFBZ4HxTFtn8HhGKYY6gQYiAhezfKa4",
  "key8": "3JdyotB5eHZCY4H9VUexE3EaTVqfkW9qjDpTLmeiAU1N5X1gvaeGLNaEArhEuzwYgBfQKEtyCXw6KTQHeayMv8Wf",
  "key9": "3Fymvf3sYcCajZGJJ13eVUVpRGcadvu3tSDZcMzje9642fT7i6nng3t2m5o2QHmrrzsk2R9AFyDiyyBJtyeD25fR",
  "key10": "4gL5s9cu2tfth8ug64EwEP3xsA7T6N6N9BCzyvw5Yx9vGrcKQkEKWJ9tuDoAqN9g7e3bLc7cmjiQXTbqz7YYo1fL",
  "key11": "z9Q3FgeARvphzXTxWnuYUbNfnriKu8qjZ7MLwHCSN7dYPo28yRUpYhLy5zgDiURAo5R1CjoEzm4Zawo5W46PKjq",
  "key12": "zWbzmq4C2i37cgXsAuhVZND1RcFAdQyiqDySm6NW7Bmga8cDP15PXKFBNvW148KxtfipvFUg4qvyHNeAi1KJVsV",
  "key13": "54LemPWFVyVDuVrUF6zt13KnuZF7GnyBz4HJR51C5j6V6Pu2v8QNBi8wQPATLi1jC2jAUEDCC2j2ddKAC3hRvbyZ",
  "key14": "22yKyN94tto54yRMVfZQ74xweAHVwtHZF532PMYcNnmZnuBBbjeMU6w71PNPNQ1wKh2wxuDdhsgTVS7vdLsGLaDn",
  "key15": "euaGZcqGf5WyHfrpdVrBW7MUrE78oZZwzqWtr797U42G4tAHF8DgmHcE7GtScfwAPwMYV9ef8yqr4kmc9M3zpgP",
  "key16": "2F8SxqRkQ6UCCPmJ4TrpnMhcRjfP78e4aeP9TDCZpJLWEjBP4wU4BGCGBaBQuzBoVpj2vsxiLsjDvjahmFpJedBk",
  "key17": "29uHNaWnZQxn3oabgj7ZQTh5g6DD9S7zS5UABkU8fZpdiCG1Nvj3LhCNJT7bBqoy3phC6FdiCMfY8vwENztdarqT",
  "key18": "5vQ2jBN2eGRJ2AXfvuYzt2SMeUuGLC2ucDVVizh3AdLMtRaEvb7PzKsCr2ZpzXvmJY8gHEJmmHcy9Xcj72R9B5de",
  "key19": "mErAYo7DvGpbPCt5qEdwUVJW4jEKptuc8UZbxaLE2vfC79uu7cby3KNVaXXKVM4MzEJKuuCb7ckj5374e5yhfoM",
  "key20": "2aJwDEfT9Ls68WQ5AGu4SifGzcXmegos6QFAFapNRA5RGzHeg4LzmmcZyFgGQs8GdpE6NRSGsb5Xn1C8fm7M5bNH",
  "key21": "66uCjswiCbuPbkJqaxbTVZoEcAj7yVtYfcig7ZN2dfM26cMDdz5MNx2mZwJYZjxrjYf1C7nYbcp5LtyEmdx1TuQC",
  "key22": "44PJrS6ehXRF6ows5sbc4qb3Mpw4xtuhBFg5n49LRCs1scSGzyBRfepeQ8PttFJUVUxwem4AszGgVKX4QgZnKLUj",
  "key23": "4BL5kbL7EFiNwddSGJxJF1ir9XXForwU8iSp7PNmgg6jNm53hrWTmk2DGGQJzWfV7tdHWev4ZRjnko4CcST3zFy4",
  "key24": "3z775SL8WBT8ZWsH5GDUxEY7AQydNQJUMYMYj8Cr5Asb4sv5NxNt6T66t9D5pFLNejoCqokRAEpBDaun8XpkjeRW",
  "key25": "3v6EByqzdnKKgaxu6D6J4rq7uxWePH8Qs6h7JqQx4NzzybTz8oCpAzytwtCKfVPJQqzCMX1SdQBgN9pQbLFDArcv",
  "key26": "W36XsrYBVYx4MN6GVaZgd88DYrKYJY6jotHE8bGSVaBoqC8fyoKZHnechQD1sYkqhUMhW63QTmPAcq3YFJ9qXHL",
  "key27": "2GHoKoWQW83Rj8X49pCEb4gUijzfGDDv16gvvAEx1hNREQoxDCLHYQfZ3Ge4ZCjnBwvswVz8tzVMXcCanDLAKj7r",
  "key28": "4ZA3TQYTMoCBRwN2XyhouD1NqTL9kjqY94D5oiYxEyDeZixYt5HSEfjw8wFkY5gvPAu2sjfrktz2myrcNJDTrnMk"
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
