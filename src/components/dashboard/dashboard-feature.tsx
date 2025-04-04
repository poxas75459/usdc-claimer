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
    "4eBzhvHLKUWyt4PzdHueJUXVZ2sMr5TWp3uVnMAhXimNMd7rPJscdSctnYfcK3iUz2Z3xHcfLQnJ1AswwVeHfpun"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BSkgXXs5gSjAL6RiSMAv2De8kcLRNKSHZAecTvvWxCqSpAEwZL9K1fhXuhCedmjSUPoZmaoKRR45f1hmDwAdGpN",
  "key1": "c5rA6n1goXtwYUkpM69zpNYpFTzwTBHXb6x6jhn8tG5eNgCskXAD48FUuotdHKq16u4UjMJmECAx8pfeDp6L2Fx",
  "key2": "4wy72t9zxksbJB8SKTLzRaiXm9oNYhiApDsFXTvzJLTw2RLgmXFkrDL5TQkzCJ3XUdvrfVNjAhQR73eAvtG32wY",
  "key3": "5ZzenvA6pL77RpjZnDEyhF51NujoQcwRrc6zzEzvhScoGjvNyFM8RBbRWTtggeYFfqkciTDrg2qthXaQebhXwaC7",
  "key4": "TowtbDyykKqsjjhQBeCRXcAi9L5Yh3jBCwJcjPaDA8sBMHj2M11sw3AdpNi5SaJT1KgGqZZCNqjezXkNG8Mthtf",
  "key5": "yh7Q3dkaWt3wmP5HovJ2RkqfgDhpMyKGDUhiLAvjMXs9x2y79GUCCCzZyD5NSaZkWUYtL7Eqjjn65MziKAhxpoD",
  "key6": "2c7WorgttaAK6jtZTa8ivZvNhFR98X2oKRvxT2bZaFAJArepDEvqMz7Z3R7h6ZirZiJJrqAbKdZqKkiLFv39HRWk",
  "key7": "5bWexqckecwHjTKXySR66P5HNVF7iEDDdiHYP1ExNQ2oNGJUoGyFTqh65c2x1uomsPacd4gWvts3SxACc4G9CMWB",
  "key8": "3tMnHaxfmNBzEr6BjYntp4rtBRRXg9M9h8MUAyy9n9gL1kX3KBF9f7uUxVb9Ya5bUfPdVQqFyRXPgAD84zsXzVRd",
  "key9": "4gcMRWp6Hq7T5Ewupb1SZeWfdmZrYJFMJexQBmZxpPQPxWwbWJtfG9MD3MgfyDxSeArFJ6Ab554sdY3Z42wUUf3i",
  "key10": "59UVS7dH5PfSPXgDVxs3Da4tfqZCwb5hjtd277j2R1TiefWFu9c4PxPEqSGt4qaxpTRonxAnDooHRqLgoZugZKfs",
  "key11": "2VY1DCFm2guAQtTi9Gg9nKETXchcyZYqyPnhQwnnPnrrCS8tyxkgd7MDUg2xbeRpjcfELcZQVWTfY5YzorXLHw7p",
  "key12": "5oiQc248pdhgMRcp2jkgJGFx4X6XJfCaS9nezLEL25bP84U9nXt48MqPv9q6sRuBvPr6XmueY9meppfmyGzWN4LU",
  "key13": "61i7tt3Rw8ub3J6XLUL5krPCWDj7koxZiBA2mVNZv1T1mtriewk2B62fqzHNSr3zcySLKv5mguN9iohw799wNbS3",
  "key14": "2MrK2e1UpnEkUkiMERT7uHAEBe2FT8hLuH7PUabqABVuL7YnThM5dgFLW2U7kYPZmuxhtDdCpYCEx9QnyNhaWtNq",
  "key15": "3isZwEcCjuJgxTap7qyRPgEQ6qt6ZTDVwfGdcp7WJusJY6UGp7zXjM6s2miKJwqKgSLCUZhDBzapnZjpv6QEn4E9",
  "key16": "4JzGUdWLBDEBFGdErLUBcmb2o5W6bosg7N8bJR8cxeuBDKFc5qfGjFvfpedSAiK1EHmS8Q8AfgE5fWaHPZgjfVve",
  "key17": "2GirpVbmnysak6ZGUjtrjRiWTDBdZgQ8MgqBq8LWmTjahk1JNy8mVnH7N1c5htUemHGjjQcVDgwmMduywVySzW8C",
  "key18": "5KYs3VZcd9GYCb48Dzyagii61aNXKb2MzDBMCKrdoAXZfFPLZdcK2tLHVGR8ZUVZTqgwPfc29bjWKChtNeGJDC5o",
  "key19": "45es8BiKmd7FR7vFpRQ6zAXq3UzcSNZBZUBXwtRNPtKC7cmzPdjyzarVMqdZLMdXytt48mZGUx67J4Jqm64ETepN",
  "key20": "4EnLaXy4Jycm39PaTNfypjDDaUi6wHKtdzrBPAM5FdySEbcas7jpVEcDWrMvhWjkyVZUDFjxs48NhyNmYBQCuvDe",
  "key21": "2vNvacDvgtKPxg1tQb1ygtYn52CnSrtsT1HuruyLNuiwsHHCwNTenvQpAeUMLYuWU9PcYdmx3avvRPUeu3MdHyMu",
  "key22": "gcCJtDP2BgjGWyH7PURZNug1K2VQy81TYHTPCBmSEGxpSA4K4C7FbQmTYnN9gRcmNDgG1MkBW58BCSAcJgAAY71",
  "key23": "3MbcbwZzq8BnwD9NbVctzJCVynwo7p8TXy7YaQUL9EocqzXyziRMcH45NnCAcHq51SiVz4yj39gZKKMweAKL2YLD",
  "key24": "52Ta9HbCv7qbDSHEXQ51PEokwLKqkxs1hgkwnChdCkXoriZ7utjPMMrXoaJWmUvU8jXu8XfnagY1MTu9e6BCTJZ4",
  "key25": "4TRMQw11ZfhCGR5z2QsMaq91FCQE3LZT2YE6AJm3gActWGkJ7YRczkWpYAxopkHwow6zPY4g8DFLNnPo3X6amtRh",
  "key26": "QgQA6qNSypzU5AJFY3w8iy4gqHqf1qy7uxjY8FLpeFbHuxyYqJdJPhpwpYNBv7vqN6Fpskz1aeC1m6SQL2Av1Yg",
  "key27": "4KjdoaEgE6EqUaHE1c4YgroXJJ5BF5A4ZFMqYJShtRTJJWn3Jqbvr8NctbthD4BJTgyDP76Y36LEwV1SqdXEYtsx",
  "key28": "5aLVBLdTGsVFM6hADqDDJLaHk48ea6NmnVmheaP6H3aMUagGFZ27Ge56RyLqN9i81CEV4eJ3T25jdF1zDqe3DY8q",
  "key29": "4ky3VCFTkyzMN91954hBWvHhak4GA4yx45MfYF4Z77fBnPv2JR2GxiXJW9ZZno54h9XhF2gVYn72m9WFcz2WwZSL",
  "key30": "ppfP1ix2qHhyDvWnMz8xY7cgqqWrKnqryMWSZZyPFK4D7WD5iRqUkZggDetUe6pJdvToVWCBkiybeV5uPTRemkQ",
  "key31": "2LCv73wT4TgXtBiXgAbFHqhVT3LzNhy9qWKrLA18fvubxZkfxN9evZr7ML8yLrAizUe4pg9om3Ag2zebiqoEegfq",
  "key32": "n5yyXz5ucY4pkLDSzRfDjJgLcBvkoZMVW34ToHiGcVca718jF7wECEyQzU1EWvZPJWfwkTAixjX3FajJijPM6dh",
  "key33": "4TSDyLBhQvNgM4GinvPpAVQNRhecPzVPYJtAkJuMd2SoHcAJhdpVagoEdzPDXyjG9JWETTbBP9MtMW5MGrPGN3WH",
  "key34": "65Xq5XddaGzfsYh93tSt53uEMjoqmNmqP81ZoKkaiRwFrmoyJ5vhxopTR6Z5sZJCsW7GuGsB1m3Ni3xKqJavDQ7p"
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
