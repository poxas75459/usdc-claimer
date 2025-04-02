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
    "4v3XjpW1WtYwEpxAf8SgvFD2UzMJHYvDkN3n7vyge4jmzCanvYMET81iE1JF9uaXwUUmnB7WnnGTpmQnXLhdSVKC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aaZnv9CRN6Af2hPVPWEv2GhvHxPRWobMjzTk2xqueWAkxkpd3p7nE6AJWrWdw8xjTjYvapX4p8QPuSiRYGdXLfR",
  "key1": "ZN2SbLpdd6ZTdjBMtzqQ8gs8GG7rfDzF6NmPDyw1oWyi8nTxKShqWaEN8gGFifHqx2ZmxBp4tB9MugNhkvVmZXt",
  "key2": "5oGtZVqpiuGf21jk1m66kt4LbWAFTfv4xVbRvKEx2gT1yJF9QwXSEaDBCe1FoFFDLdoW48tWhPHDCNfJRsXd4gMM",
  "key3": "4THDWCpznFyYmcoSbWMew1mAfk7cJRk2AAYRyrUe5z5dvAuhNPHkt2Lw11uNovqjj819PXLr5q2M6DxkQip9eP43",
  "key4": "3ssVkPZTxCHkLYymWjdg5Tec6egty1oFUTYBkiHaTxxCdWYnvZFqbyR3Rn5R67uSDAcEwDWE5P7v2uwmz19zkJEc",
  "key5": "64qAY8tsqnA5McTSv5N6JNuY14nXsmpJyYebZgws9dwYuiKustvg24QqYjhpNn3aMiTEeRgLpJJkSYLPg43UURxQ",
  "key6": "22g9kJbvejrWvumpSCAEdtW9mDBZhJELy4GkdsCT2wGFhH6ffKkKxdKiPv643oqPKyuzRFnP9HV2YmDHYr5vyJnA",
  "key7": "Fgc9pXaYg2BosLc8EBMBrpB4cu2kWh1Mhf5ji3RU5Lp1SneYz5aZAxZdLCGBmSW9ttHJQ3EShSZHURGB7Kq4q5x",
  "key8": "4ddnYjw84ygYymhxz8y9eCuPPmkEc1jrc4MVWU9PaUooTK7PveTFm8D22g5GhyZZZSK4ghX8W8TuBZJW6CnHy98r",
  "key9": "3cx6JXkYZi7HQvgwffs2QBjs9EPVmFQHezWQyedjCgVhB8yRybFZfcagbs9QG5pegb3itGd8P7VQSaoiY62vxNG2",
  "key10": "4PHVLFh1ieJRzQCNAXRESb9mzppdTFpGk9zTit1u1KYu7Led3qRXVs6T5uMcwbBSP9HaLhbtJUdPeGVi8D9Qz8yk",
  "key11": "5c9DbKsWyYpenyWroR9EdJhmi4fB5WbyancuHVRE55y1NHQEmyK5xvj3QgngWrVNG87iEU1cseyJFSX3WJkDe2H4",
  "key12": "2HHkPAGQT7ZCsyekc5Q9JpJ3AMWihwEkQVBKM4dyKHvnBLZZG8RSwevUj5TKRD18XCxZsa4ubQNTtXzpsjwo7dJi",
  "key13": "5TWJuDc5k2YJiATe6SCUyb96hJgqvtHfPpKPV1ZLVVdtayjNTE7dDj4FA35BeNptbqSqCZrXDm9JzTRNBM5GDj7P",
  "key14": "24fPbq9SYJFxY4yc85mWFKNVCQtfKvmh1LEU9Xgk7mBEpAJpbz2dJW7YzihF7NGWN1wvm1XsLtnU8GFWKbqvcFzx",
  "key15": "5FvYzPfFem2vbroTbs39ku7eugGccdGTRcg827D8A45k6zzKUZKwZbgn5zAFJYRZh863Xg4vFmZzDnqqMwX3BHcY",
  "key16": "55rLSqGwH8GN8ayMC6BZfRYavK6zR5utzz6uNkmSx3nBPKJovu3FizRjM11v5GqSJESGiDTTAL3zhz3YmERXMCHA",
  "key17": "42c9TrftLUktPi7vjsWmQZSvyq6JvYWCkDWM7oxw8hEa1gYMB4pVpi7E9X7p35qBuzS14dZhd7Mg1z6cgm9EUMY8",
  "key18": "Hqb2TCuwAMkcUUjxyVdBnVkGcyea1iBASqFvRvrB5CLzFhsovrEPgNfULw2Ub49dsKYoNn5CaAHuMtLdVBjVkC4",
  "key19": "575Fk4Wp915EwANToj9cu4fwUBM846sw8dB2jjMf3YoUsbVKX9tTuTaLLJqV7MMmhNdBzJMP5KvGdcvd8Bs28BEE",
  "key20": "NbEDrSXCARNn488espyaWQBVTsszS1g34P37Gee3F55QjKLScXoTzCjcHzaaZUKT5vhdJg1wz2WSq7oUobxTTvg",
  "key21": "4xVTWq1qQWD16e3se8U3JyoxA1NwheYR75d3ZXeesSngJhhynYJPnyZU5SKHJAn7Kdo86xUKUyK7QHqJX68FNogh",
  "key22": "4yMigFbJNFPbHCcu2BH56Vg8C6mWGjFCbsPP6udRhCBBk36sz1yMAcMWnS6jwrBmx6xctVDXeyVHGxLjTZ66MXPJ",
  "key23": "3TeBvsYPSL8as6nyqYjLzTPQ9WWchdDPFhtXfYdK7y1hL9ungx23CJMM451HF8LrHXNgDH65xVxkS9cGqZzC7Cpq",
  "key24": "3HqJDPLKm3gahf3JV1BKzfBWNzU8JCmikKWE9SeRES3hoQk4pyuGqhd3xtFQEa4QfRLNcyqLqTPk4qc4QxuYWYv6",
  "key25": "2FMeBz8kpQobmbcxGHZTHv4A45daqMqWJJ2RfuE79PSaEjKLqvdWDb2KAYsRnUEA9upKcL4EBR7SYejXGFTpAnSE",
  "key26": "5iDf9g8yS3Y1J1DSxWhjCghbFNwJGTR2jq3FjTNJbewYgj2gfjLJce37oSPAu4NbNPqVg7hTadZViPiukvEnV1ug",
  "key27": "2u3twQGatiioSXyk5GqNC3DR1qh65sRtUopzSjvk8u16ZfPZA1KKKeRD8Hgk2Wg679zvAMj1UTafqir5n5bDXyFP",
  "key28": "2fCW9jAs1nvKCifszxb4sbNsRu5RfNcvcM6cRL4rpXivRXt552npCbJLNAUkT5vw8f18GiD1mAMkaaKTHMrVf1GN",
  "key29": "2a5E7SKzndFZM4SfwvnnAisLU7r6Kdqrns2AYch5PqACyfjNnZNkzRD95JattUrC4MngyeqaDstGeJJXmyzGsrHD",
  "key30": "3JqfKAS8w5wbWCbsPts9hGGQY3oGpbMbS7MkFkwNjcPwsepfw1EJkqqQpwcEUEgRN9sL5EBCLyPdJCZvvYUuHEKv",
  "key31": "553QTggt1E2Fzguf7LbW392HSMduU4PKHRwBEmUndCVYDHmZA8JX2oM9SDFnC7wyrUT3sMjj3MF5oD1qgUgad2d9",
  "key32": "2WcfRvqkpoyuPbS6np5osknKJR8fTgXh2SYFuGSkEjMBjbCwWQzytivdEZc6NosWyoRzzgJbdTBJxvQmc7CLiuV",
  "key33": "3KfgQN22bqatz4qGaFs8DjuDjatVFp6fJuZwTFzsfSReTePCqZW19dTmxvLDHq9yaLrHafdU3zRPFscJ3qBxrsm9",
  "key34": "34fnWnxWucsKe6FTzdCAeThh7E9CUTW6yM4mnCvrPRdNsZ7ZpCdaFo1GCce1k8EsCRvkHdk5ahGa3h3xvj7xpc5C",
  "key35": "258nd24YiGMvppWo8c5tDmZQvM57QQzrByd25sRV8n4yrNeNdcgwgqAsPaZpVFEmiyzvGMZTHAbmffi7t7NCGfKg",
  "key36": "47PzuCFgLZwbCgBfAzfB7waUYqyXCLPBsXpRutxK1gHpNFmMpWhC19qqxFwcCqMvPRo11T6QPVi5R5V41UjjyF3N",
  "key37": "5BE2uBrx2hdxvDWbcAAewaWK8izktbGcP36DygEp9DjkHeV4JJdHBGCjzNS2J8K5kFaBUQquoh8QEzBbzMxbHzKG",
  "key38": "2aBGwBj7whR6X43BnbJEka4oCkKeDvDjd4eVQ2W3SBcZMbYpSFweSKrtUWL8zGJD3aMhj3ABJtR4VxCzTGTTuaL",
  "key39": "25BVRMa2PFbd7pD5EjLHZhPJy8Qu5wEiu529HT8cjxm8YbbNbGTYJjgUJvD26sUfdJdbNYLtz3BN9gM4tiVc7ijj",
  "key40": "5GZbZFm7VFUWsQpsxoXKRpE3FFxxwcZpdfAj1vVVg2oQFx6TyENyAzyz8TSvHeYUhMR2pdeUjB23nsLrWVwgrfku",
  "key41": "62LufADopxBACgR9BhMbDDftkuPCENW6ckGRygeTRga9qvBbMG4PRjtM2etRgNLGzDXa9Q9x9qYAFSvh2A6YowvK",
  "key42": "49Sy9ZWPnjWuS7MagmH7fgMVZFExguidP2fxemSJ2nEYyqQ34HiZkz1ioRxkJmA6pCMnaKTriVKGsHRxkY75ex2D",
  "key43": "3vinEhGTgGTQaHAXiwQK5peY5KHm3gijPByZnuXHymgq4mMEMS1RgNciPXC3MQsbq4GQQsw2EPHQczS9SNPFQ8Kn",
  "key44": "4UXizR1EUZPWxw3mFCACMUtZ8diMf1sLRDZ6WYCtELoFcekJMGBbw6KRgBzwtfBccLHPy23GGhg7f9xBoJaiL7qu"
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
