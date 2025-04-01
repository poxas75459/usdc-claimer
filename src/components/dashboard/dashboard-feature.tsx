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
    "2nJ4jmkMT1naM5kQwHqEQfJGHLQn1BW2efCRxLdfDAjAN6PgF36im9XqYS1rCmsAqwjeh8LwdLfVFFQPFpiuQ7e6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5s9x6fuBKo24nZtTxioWoLpRXeFSk7Zi5HEFU6M3oJdcycy1kMhhKXnqpn8RihiGQB2acfxec4oT2hvv6HJ3waPy",
  "key1": "3N1qvGznGnW25h5LwSyE45pbBSV9r6VeQWzhdDwDd7JoNM87PyxRYrH67NTymk4L8f5yXFtHgQxmt1a6WfhmM2JD",
  "key2": "591teNP56zzyBHMpejFoF4TyYhmCeGJEBmxbPmae7eRgSh7y9AnmwsFJjGo58LrFDGxax8Go3caPP2f1PwDFM72Z",
  "key3": "4ggTaxYzHxE32JEXV5sTj5udbbuMnt5McV6csK2wKYyQHNgKjzWDjeaZgeXweoVBrBhxHHxCh7QUVNetVKX2TiLp",
  "key4": "5KWc5z3G2ze52WZAhMFnsZWb6dTUqAF94iBdShtfmQitqTPJzpomSeo3n3D9RteBhVAhST1UaicZ3R3GdYXGMRQk",
  "key5": "47Dqsv2NfScnMd525YxU34pDdYnjuPkfi6KYq7cof3FaMoQx38ffBJtvgkVVegqHEUzrTrQr61nxhFVk924VgVxy",
  "key6": "4xBSqNJ3cWdEJjM7CmZydmwWMZwX48wvKoDyYHKrhR4yhfWdTuM2euiknEoafJ1pTm4csf3GrEf28BSMnJAcbUsh",
  "key7": "4PBFyJdxM7RgWF6udQuHFaCY2ZTbe9H4qZdP9t33CRy9iGpUWVBhV3PZnY3M2cxcVrgHGxEuTYXgUT1odDpmAQpx",
  "key8": "4mD9vdeEwsqHXs3f24XUhEYG7gALiufDmfXCQjoHuhVHWEyUk7Lg2PpjD4vaw83zZ4fyDj1reXHvbRjyeTHGfn6A",
  "key9": "2akbGiZXiiU2A8Vvhbu91itMRuLcWb9Z5aPPXUfEdMQGrZbwP6wGecvXFfJNkPPj5JoYGqN3L3etBjF6EA6haTdt",
  "key10": "5LcnKUiBU4rJPXbHPHzQoGN3Q2zYcEBcxH2vXNYiJENgppZKMTA8terwypDU26KvfXrQXZiSCuGUkRy6TdLh6pKZ",
  "key11": "xiPXq6rg7i7cUz8bh38Km8WBheEaS5TynkLhgMMkzc11QDCLPA1EmNgLMRCv1uQj5HFdCk9FDv7BYJBkBQQHRHq",
  "key12": "5u2h93rsgFqfYKgTKM57Dt2oWdNSv6qn2xi5VcRoabvQ1Sh73WkjuYzK5EFJd9U2pxyrF5Qsjk38KouxrxJhqnkT",
  "key13": "RrDm3JP75dWYnCNoKh7VXBopERFqyyp25daMQmj7KaZCuUpKQ1dUjXLDXVBr2dYZNXLzdCATAD7ijc5k954GfUz",
  "key14": "4WCnWxbVQZUTFxwtShQuUaj1we5gH66v363mk1vBPcrpD3Pqf2z6n4JCUhCVF7dN4PcJauXWhwfhGf2MCiSUFWTZ",
  "key15": "53XNhg4pU4DRPEWTew4io3kRF5uKYTKUeirxp2VFDMt9j16tY2B3ej5g7g6d7TvRfPYDMncnVCsmT4BKhMs9GmHJ",
  "key16": "3HBR6FnPyXusVf9AESXY19vUgy8ujnf8fZkv6CrNPehBQyLPYVHUiwe2SKXupqpJ9L5J4pBBhpwQ3U5EcNMMN3C1",
  "key17": "sfDZviVZzG4gkm3fWYomZmmoymGRq4AiziwJg7DV6XPmwdQ3ok9wyzwHaTxrhC88gth3hvULxW8N3MrXDwkFZw2",
  "key18": "2XugJvfvH5gDyN1TV6WSeodRYkyFZrKzqb34wqFzFpcwDS6fLX8ecsmZcuj2et2UqqkuBf8NDTY7RmuBNxN9CC5",
  "key19": "RF95KwdJXACTASyJk9U4zLJ5SMHYzDK3TyZKsHJD62N8DkkuyuuezWf6bbF6XtDfGGJ535etXcULPPUjxmSmAfF",
  "key20": "3yKJ5LoFQtoe5ifkA5aA6VUfa9z466R8C4VSv2DpRNy3CHw3Q6GQajoGcedtHcohVik7QsaYcR4qojJufWYRDbvP",
  "key21": "2gtAuVrrXMKm8YZjV2dEfeMAoXGVSSghfWLZQrQMxHgWyWSuq3oXPyj2V2Z42Qmyt3pbwD3iR4aFCxJoSEKbgsrN",
  "key22": "dYTFBvNLyN4Pk22YGzKKQ7FAHrc2dy9Tw85TeE44e4j7H81wzK4Zaa3q8MDyqfUcY4SmdrFKeJjpysftdbFPZux",
  "key23": "4ug3EsgJZCXB6SAxixfCamysd8wLXikqxqXiton61nyhUt1nKuJThqdGNTbs71ZdunbSKqLoMmv8xF1kFmsFryZ1",
  "key24": "64TgJdcS93rmQ7QXv8GdFoutvzYXh3nrgXbQjwktKyXcsKgGJGRBKtnTqRzdYuCoQ5bZwvgNBD2yRJUydwNTd7iU",
  "key25": "1rH8eEA1nnuSoL9cUVnBsSVjEsCKJuzpzpS2jLdb8QG2L1ixVRP4Njz2GSLUxabynkQf6AEt7CagvGaEcREBXrm",
  "key26": "2kspDZofcRDCGeyDa54JinqrZxa7wbTNQbHCqcaXyeBLHBL6pbVEcnAFRbwJzFtj6Bv1hjbgV3Qk3v9de2GniKPn",
  "key27": "4ySi5ZTFpDM4LKnintLYcsvEHvu1RcnMRGhPkX7HcMr3bULDQVmEpzhueGwsGw2e12hebGFWh5qseqBQZGj1u3Zd",
  "key28": "2Uh6yejKZVnQcda6PtB8mqsNxffLgirCNMUuvQuyKaTTTxytE4KCxKWc5TqDCRnkUF7C2KWpzuh5VZBtj9Mgt2rK",
  "key29": "4aUb1j6CJ5JAHKksoUUAKPmbJ1Sy2QK8AtD6H5DdrgjsEmTvkVx3YFXpgxk7tNxfDkNt6wMvWRxuKbwSaoTeFy8e",
  "key30": "46ZKu9ncrWDx49TiXVTHaBAr41iNAZAQis2xFzbSzAsy8ULCZEidvEweGsi8aCy619wiPUhS7ZwTf82e8miTdSTm",
  "key31": "3kicP9hQEZLNR5piVoeLYfJsxuP76KQGKG6Yv2UGRLpu24EZsp4LcuRWD9dH3d2s6f3fSvMRmoueDy1ceqv9X1KN",
  "key32": "4RAHUMxbLJ9xgpSpnt7r3GoZG8mVyoJvxh9e62hXys5rxK7pzSxABDiZpHFVF2m4warwEEvJ4N6sUoceqFwyFHEv",
  "key33": "5gBH6N1H9dAg3MKMh3UqHaXLgmJByjjX7awuvus3XbZ7tG7Ja4EVhXAzwbxQZhZF16RVM8Wwoix625zNas7KaEaU",
  "key34": "3eafd1zKhPcxeYLNSEqQ1ZfuZL9mpMdGTv1hq9EXfitrdxNN9FFryQHc4VRAPvUWvsPV2M5Uo5AB1Q1AUEYKjtgc",
  "key35": "5G9sUqRpZNZqYqW5XvVM4h8aDfCb7UJmvAuVE4GFaJtxrBSjp1f9PNk3hyHQeCa1MJkRfN1rNJURGFs24hS9vAXh",
  "key36": "2rnFsgz5hGxvgNoy4GGEHM1o2ENSaay3oU2LKhQLzDdvqYCKueqBmatiTSr5QtZayB5LAi2FAz2c2mUcAGnF533g",
  "key37": "3A3vaWJTGKKACKSqKaLA99Z1wRa2TGy9xTgNiXPLgiJns6HhAU9SK62HkPfdLkUUYn6cVAzQXohJwnkgnLWvNnU2",
  "key38": "JMvqNoDqWPkq7WcmeWhw5CqfQerMGe4jvUYVFHyw39CqDL92fNoAjb2TXgMRKEvrpsQM4xtqocEKmKTtRyvKxxd",
  "key39": "5AZLj2d7Y96eGhVBwjdUjpEZ5VU4xtucL1R8N5ggVgsvgQTM7HDW4pVrpST4cmNbKUf4jhDKgzx6oVXbsm1Vcywv",
  "key40": "ZCWAWoxrmzJyc5L9psUMxHhpeTEnFMsgr3q2pFjsxk1UjbQyZR88attqvddbtWP7TyCcQoP86sqJHLR8ftgoyM6",
  "key41": "5cH9EEna1D4RHcj3LwEjT6BmJQJ1xgKdtfDPYN2V4GiGmrQyKYzsDyoZHEGc6nnT9gQoAJ61AjPfmYMWYhajbhkh",
  "key42": "2htPFKFpd8XiiNCw4GquLQcGSXvV5cwAywxdyVa8wvAaGZpbSjiCQRcS5NKq8mPSJd9DuuvS9GuMvFmrz6uNwMdv",
  "key43": "o8HvewieCnfGPZCSsoHy9S2SaxA395sseGDbsu7vJRm5M1Z6iKhx87yLAaCdYuRJwfmNajRrVuo627NAUJYEG22",
  "key44": "3zaiMhoBhEFn5eQcGsgezKoLeZtBr2rrnEw9BfcGTjLzpmCan9oqk7fFxDxesqhVQyU3sAXAZ6gJ32Q7G1K4Rda7",
  "key45": "3kEoBDnuRPBKfawW8RzykUhusGJgC6Pav2XcnUCZvLXTcQ85AZMSCH3NcThdmLC8wbxHb2axdKQ48qeRkKjeZEg2",
  "key46": "JuMbsWr2QAmDzmhMa2T6kRov7gA844wsKsKFnPTouTDeCaQ2zPChDCoUDYA5NdboSDCPctAhQTvmyFtXbvxybvq",
  "key47": "3gqnG49rcsEYFCmYNKxSHc2r3VrEauaaREvq6B64j1cApPKCW9yBSGrD3u36J2RLHJTT9DYNQSq9Qk3suHit91WX"
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
