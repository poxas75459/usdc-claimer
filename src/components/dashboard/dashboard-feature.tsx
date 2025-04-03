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
    "3vudWLE86aCLtjVrfTiKxENdDZwZwH8tipo4tVgPYLHzWJ7Ug84vcsF4UbtZ33bHAskQ35wxRgZf6XuQ1kyvrmxc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3y1F6Amb5qsr2phdXrKg9QCQhPuJ5LmnMgAyPsQWf5G3wGaEoQKLGHU8v3NVYQehg23ZXyXrnoP2iQofbVByaCae",
  "key1": "4NGPagiGbpYmY8hHtczCBRPARCRS7ZkwRLqeVytn6S8hhmaqvTLR72Z8Dh5GjzkB5F9Bz9wnLUAU55KH39NVBvFv",
  "key2": "3mgpzTkxe58CybBgQAK1ExqkJrASyK3uvcWWqo3ZcntwgrV9K3rEJsaephrT6uP1NJhxZiAvdtctfP1bnKun8Bao",
  "key3": "2kPRJ57nyEgKcZuTL3mwHEHCxJmBzWN2uHknnZK3dbgJbFLwiHpi1Arqmwa1mFe8JhGLn7Txjq1co9b6HysJPjgy",
  "key4": "5yxEuBXNDqAk2vGkHtMa8JMoeHz27ETdybwboSGsgzSZ2Sw58zPcQj3ZMZohd69rCQKevL2H7m126WSGxYGy1xpK",
  "key5": "4SVAf6EGuhgKVJiZMEqcLbRESHzU39U3fXP3BuWSL7dsqwrXiCGtGrv1bmGVK5NjRsmWwPPBMAQmywhzhMLDRXGF",
  "key6": "3VLpKuibq7ofp45JTEWPcRwt9wTK6uWcu6ZL4XMfhBsuwiZjJynzdRWpGtdgij3qk6v9vgp3CoQpKoGR8VoQ7gGL",
  "key7": "3BXxMmxGcAyRQ3vfPEV9xHukUbD5jEAcWa3je2qqcxHZTcgj7tpgDi4YjHimjQfkDfYpjmSJrXEVFaNB4sy9W6Zz",
  "key8": "2Z38cTR3ExkQmXbHpPsnR6B3N6goHi2dicvHWC7C2JpJ6Y8XDEjLYUuizhTagKbKAmMHbX5eEWMZfhDFS9BUSgyp",
  "key9": "35oAQy1FXANX6bqDZZMxQebpkoVhm3bomvRmPdjbQXgjvsQc72Y1zY6JyFKLJA24h1kmqQymAkygWNgYMunxq4F9",
  "key10": "374KyEzspSFiArYMPVUzDvS4guiHphvxpjsrhhKfj6ogAfUVUMCn2DSZYJZ61nriA4Kt8bAnYs8wUGcGwsoHNQ5F",
  "key11": "2EAT28vDKkupVBNkFc2DR7vid4Qjvm9cxFHzxemRmdmTTdJKX6yNCecXdDFNJzP7jMpLCD29qFYUfVBNrRRDrX4T",
  "key12": "5C7h9m4nEiQLAKprvk5NVAMTVKKxhK2dzBG4UB8hVZMqSaSkWsjprmdfdVeG3MUYX7YkAYzsLkNWnHeZjmkgR1vg",
  "key13": "5HZHTZ8TPD58C8At7SB5NL8xXnPzw4m8J6DzVygcxRaDstwA5W4p4wn8ety8MVYhvvSqNi8ZKtZ3vCdBESL5bbtE",
  "key14": "m2uJuqiLe4M1aTvh7FSNQN1gd62Eu7YVeAUUKWwSDmz5VqzPopakye8fyEMLNGCdaXhnpmvVgjrogsiMyfWrnqz",
  "key15": "2V9NGhCY6GE9NHYMCcYvtgyBEX3MRnFADNDBj6UZuyARh4WC8NDGFti569hoAsgn1ehc6FZZBPEGHHNFhrQTggsh",
  "key16": "2K4TzMvXG9e5Tgy6pLdj6WQbNut7vMhZoAUmGXSwsn5oNtTCVMdNjfMfcqD2VVAMpxxp5atZKrER13wdRk4BQDQU",
  "key17": "4YziPpJDrCC2yziFLDSBAtgJnxTG1iEQbgKYKEpEEbmj2PTVT8S84vWPN6KSAqDMFYNKxq3CRGMiGR5B68z8oFzr",
  "key18": "2FErdz1qkJg9hKsan1KXGHtdwuXmcgSVe1ARqcLZwmQVnWCpusNjDqMYBYWuDwCADB2tS6ReJh2EfxEhLfNfSbB5",
  "key19": "2tWXkgTofhTkn2QUg7CSkXsY5F8FfRXG9exhVp1QxcZqVDFz699ELjCeeA2Q7tF5cuffuxo62kDcJaMsUdzp5F7h",
  "key20": "5wN3bLpC6X2L9FV5yoyNmbqxDiSE1Hig8Zt6jVZAP81msuMZ2YkPNZp9PWcNxRpM4daf1BEu29cDEBiywCwCgWZ3",
  "key21": "3jbB38CtHbyFyMs8qihZbLr7qPPndkWGGPiJWWtjgjUGRUc1MpkEJBVPaU6bQrfFPZbHZbUbv4ziWGSfAXo49QpT",
  "key22": "2hPyBYpuHSjCD8odLNM6vnCXU2cVg9941WDsLRXjraQhnmeMWyTXRoyT1kG4fCUHQS25f6tCq8QPht1LH4j4DDqt",
  "key23": "4uCCZTEfqWWtecrG9XbaGt3sVvbjfm3BDPQoDdsQnGJGeF6kD6psoeXWX6xy2SppXJwLdZaKzoTT4HiA3r5RQWe1",
  "key24": "52vf6u6xPRZCPscg8Hdz7XvqjrTmyZu67fZ65nFc13scWN9iUr8mUX7ihJA1bsbiMxfH1SRsRPqppHYKcFyh7Th",
  "key25": "5jbMn98u1MczjkkzLZYyNgWSGZsdYbA2fPCgF6FuYbJUuUoyy8KEV7YxRnkcg4iirAUtGPYwQYXKQz4YG1gPqGoU",
  "key26": "51iNJymgvqJS3Xr5vsuqSM3Kjdk8x3TAoQGuGs57QXnGMWXwpPbeYKdNZPC1kLeHCeDuS9cEYQtyqvSyP8UL7wQH",
  "key27": "tHtbcmzF8wVgQtuBkUJYDi1npRsj6yuBc69cEsvNeQgKVhE7PipCNk73tnhgKsVzrvg28XF9MXf8TT66ERJDPY9"
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
