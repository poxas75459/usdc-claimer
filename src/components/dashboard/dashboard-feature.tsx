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
    "3zAJ4wVaLfPot45hySTHpKwZeRk1vVaz1w56uvz2V7iuSR2fTH8iQ8aL6JscW1wNy74bsz4kQ7An6qTz5oXEBvpT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eHEW7BofF5A9rpbmiQr2f9EFt5XZBS9dpB6LKKZKQQCpg1hFKrGpNrDbuuMWqQUD2wp659iMKXjpcSxysA2FcSZ",
  "key1": "2PyiscSSP9jA9C3NTTq3urkwBcBjMv4zPTms83khTWdZQoHNYiRMSCRdX5ChgL6wbtH55FMdhPD3jVGNEQU5icWN",
  "key2": "4ECnGhTKj9E8ZLDkxyP6UrxsndChXFWNhH7oUX2WkvPsKe4p5GFWSZKudtmWceey6C4vdhd2vRPnypyfbvYDiw1d",
  "key3": "2JnvYPNeDT8Qkk8fbRnW9HCb2NLqgQn2tQjDo9Xqro87AHx7h5ZniynKXTQJqTAVpCnN8eKa1xfeJXWN44VsW43A",
  "key4": "55M1js8Lt1UwJRb1i2kyCcUe3EaWe1aCYWd7vgzqHcik1dP2FceJ7XE8imgbKng85oTKws6cAtPJ6TLVBNoh4VKM",
  "key5": "3XrVkJ4C3HGXzzU2DKiPjjAnxKsnP9v5Bqkb7hundvPTVbBtPbgLThR4S1LL7s98w7Gab8LPmrGqvGkhxRZ6TpvV",
  "key6": "3obJ6zPvrLivzQ8msfeV6HtzACh1rXTJk2RF7rYm8nBwgbMjR9VvcBApQkqGY3TekUdNM1tyYBdo2Wm2Wx9ZLTGP",
  "key7": "5NP8zVTbBHBNFGKW1opY8v7TfAXWEH3V7dhJaY4vTTwFHCkTv9esRU6fFoeW4VeerJ5uzLEJLd7pDZWTcfsP4MUe",
  "key8": "3pnrbv6zLPutthTeTeYmbjSyHuS131QUVmDZRW8td7YZWw2mGy58yXFqz1nPFGJYp9cBn5YEFanbqxQXVfrguq2o",
  "key9": "3cwqtKNv8dZLm4K8rVgfM2Nj94yZJL5AYfqtFGPTZdZDQoqDynAx8hCdBweCBkAaQXT5RAyEkcnp7oTmKiSH55ZJ",
  "key10": "5aQ3EQHXUtokvQdRimqsFXQ9Re1mEcWGmD8x2Cd2H6tudahcpoDCLYo5ko1TZdfUHSKfHpBAppMmDTTAE5pBFQxp",
  "key11": "4Zobbcmtf74gWbvAUT6Qqam43knP6H735Rcc666py2BYesBMa95nhtbRpUu1AdLR8Fo3zhLSqXDXa2cq9ixXcULz",
  "key12": "3z74EsdUad7qx4FgfskNyNEKJmx3RtZsxHAtXAyZ7XrmQhipU429QzDqvC6ionKBGs4VKRRKoT92B6zmbbM23o9j",
  "key13": "5W2gBofupWqdBTN6MPkTScd5tFvJQ6ArvJdu6GP3G2wf3TVwiVGKUUK98W6q1SbCncHTzYW78cUg2UYgCW66MX8z",
  "key14": "47Md2tctZCC8cgqKs91wP4t73ihpKjqbFbeskjENdLdkYreqht4BTuuBMc36XKDZaZKr7RGRvQPU3cgRikmHCZdk",
  "key15": "3M8zjiP79LFNnRv5uX2rLrA9tHEwQL6Phbo1atxAfNQHZcifY8fsU9LeGTNrKHxaCwF5DP8AZr4W9GkziKRPfFQR",
  "key16": "4BHcEKZyhoc5bRwsQdFbvdY8fsebgFaxFiTzRoe7PqRgZ8JFSA3YzJzqtXfjphetyLapUM1sUSm45ZBtQg5ULK6x",
  "key17": "3HnN6fR8bth7j2tEoNY4ccKy3PRWpqspUGMxgVQrS1KrtzWHTJ6wpyuVCAaTpkZAcdejovpBVufhwKEmRkdh493u",
  "key18": "3vugEfEu6PnNTs6qm8zNf8j9NKKXajDsLHeENX85LKEtQqbuJUWso92TjgXP41goWd1i1nvugxUzPjqC5hXZLhwW",
  "key19": "2vBgf6BhH7ijGediTZE4F8TQnmSezVsWZR1mjDam8bVQS52Zhf6mDNt3GKH9N5qnFQn2SukMktFaU91bLWga1MYP",
  "key20": "67YbBBHSt9d8hpWf9ox6RhPcCDS6FTv39ZaERcPDtRScUmLt25zYtwcWAZYXBWSNny39gpc5DgZxxSLZyzw6effY",
  "key21": "5UYXjAj77X9jzbgaGDALtdiKU2vppxnFXhHHd72adzaye9GVYo7Dhd9XBGPCusi9e1jEcLKFgRNBNAKUz9C3ZdsN",
  "key22": "33VeR3YDXXNJ4EZYB6NWxrQYfjTccSRAYhP9aa5mxPFsXUoDgRxDRCxiVjR6JaQQR6sGMExZ3rDMZ93eymKeAeju",
  "key23": "4PZgi9e6wvz7aHaY9gVR2rPdxHXjSHpnnmBfyspy387jk2gKRvryimCL71z8Dno7oU4LeAqcyem5G73J3oKxWv4F",
  "key24": "1bRAi9urQvNk59Dxk5kLGMvznQRymKKvNQBwhhuwHSF6yagbJ79MxjLFkHeEsbS4MZTF5X2FmXnow5mXtHwafKm",
  "key25": "4W7s1mwgPyCPb3J1RLni9xWgs1DH1FRC4aJ1wqBTE7LyvDhJi4JstqM2isvxMUmbXjSkTE1mpmvrcb53vbcMeHBg",
  "key26": "2E2p427QKFbGtkk7XfeU4PKygN2S2EyDbuKRwYrC39wrAkTJeSGjqoYG8GAbCTJfNPVX3u5xJUHMy3fn3nnSJWHj",
  "key27": "4bAQuJChWD87uneqFwBeDEsbbQ6g4ob3RQctgZGLw6V6RWvfzLtijFT6FxzqfMuAGiiGnTtwi4StPT8xFVYRuxsn"
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
