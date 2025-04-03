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
    "yHpx3dG28EvEoYxqKjdNyYPbz9go77oYXQVrx6Y3SW2LsPufhAbz6LthbL87dXzzHt1N8HFng6eMsusnaQktXjK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55TJJPa6ML4x5Thm1ATuA32eZ4ZjaMHAwCW6njLcg3DroD5exNnfcEpAcqEsYnc8d5jb1g1xxLG5sivvUXjAR8Rn",
  "key1": "4kDoSBaNZmKkrma22rYNp6A7qjGham4P487mZ1kYY5XvRcKkKzZXZGuHvmYrfCeD1WBN2ZUNRjQz6LuafKpnvAZD",
  "key2": "5DqeDPoCiB6XwhJJiJWbyik1rqNUqSptPKKHXFVFNB9R1SZHQCdFZ5hPkvPVhkLcAvz97t1jAAuSY95nXaTVqYc3",
  "key3": "4rjBXcDHJQ3uE384hfKAKT4j3WcbYPV8fRHdctacef1EYhsm1W6d56AduZFw6NdF58YWAqubUQS8eVKgqk1HLt35",
  "key4": "4mBVxWNYZPyYfoym9pVYWycrv83qcorDiWdxPxwQLfFewFsWF2hQ1TnuFA8THGPvNZTdzJYV72LL7oD5jgfMsjMu",
  "key5": "5V76vFEp3VHEjhwYRTp1wqmtHf4pwN7XPkbwNgKwRoNMjcrekZkvQgJCzthkkLBxRdCg1TYKzpM8kptbagsoR3pj",
  "key6": "31RW83rJxDj1gtuYqnBE51q5WTJ7uzoYCeEsfxxUtftGJxrr9M8o8H6d3S3hLPUSjrmRnfgbGBE3nh1kBTgbQKyZ",
  "key7": "5ANTEoQET6A9awTuYrFWzX5Fzpn8oBhsWDsmWnUSgLDV1Tbn4jLnnq7FxWaowDHa51UEmdFsnJTu1qnSNyeHHMmS",
  "key8": "3p8fFMu6TELrWp16u8wAUHo1fvrVKM4BgwkNzf5mE6qxrDzSGvp5SAXrazvWLDKWuAb49v81VBWWFgBz8RvsxykG",
  "key9": "2DocYMD9RBnovRxKpSwge4eiTP8SEbmNTACUqFEd1pXzmhvEyjF2fJZxeBLsq7zMBuw9MMUxLjTaak5WnvkQCaB6",
  "key10": "2PpF1bThgTES6GExSL8QcKm8amJ1QTMg72HSsPYwqX3bDpZRoTjPggLCbidvAbHHfXK9vHs2qKkGcRPiJurcpRu8",
  "key11": "5xfhCFS9hNaFN9iFCYmaq7FQuFNy15FD8s3NrPfGudWZ2apofWbEBZaxKzsJ8YVe486y8GegMZLb63Ces3aSnD7R",
  "key12": "3XGNJrJRAndiUidZxP82DRfntVfZowM6PQmHcESLxevpoeAAwB1KvK1sb9oxmmbXdrrbVtmSiT3X4XHX8rna9Los",
  "key13": "3CifMtPjXYuMKBXkMF29kB4hpKYSBHj3q8NG8GnckR6igif7Pfz7fncm8Y86LStaCkgYMLg1u76KNVyyGt7Ce6kq",
  "key14": "2HnA7dNT3gezeiYardibPujYvTfh9au1vZqvobmGEgypYk7w8A7E33homh8tA4qgzJmt8LnWzS3NfGZXKLoufb1r",
  "key15": "48gwXUtgGd4vNzdh7yFafDzXeDUK8uFqbpZBYBgREqGCf2Mqsds41fNTkvBzhtVvXciSTz7XhfvywV1F2qCBz66o",
  "key16": "385DxCbU2k47mXatrbX8TTEYxMxXeJ72UFCvrkex6Nv86mfCy3mVL2KkRR7EBWcxTqsoB5hSSYxpfJMsoBVpSJ7H",
  "key17": "2L2EttLacAc7DdWRkXSa46MeUYXWtGjui2h3VMNYC6DdJC2hCLMxuAGTsM7Zd5TvwxDG7DgjyZpakif8XkbykRC1",
  "key18": "yvBi41sUMLmeQWxA1y2ozYzyFVLUnvWNDk4fPLMjNbZjSGoPYFJx3uWMET6quyHpj5cM7bjfAyXKoVhFnhFuVm5",
  "key19": "3z8zkiJh5ka5QP59PpWUKhxdTKsGmpivTqFpY4wkEC4v8qpe5yeLfqPq7HhT9QAnEeNsq785a6smYPVEzmN7gmpk",
  "key20": "64fFHNJPyiK2ZCZzNKUGNvAkqp9ersQf3iYbmXoZy3zatKNkt7HfNABQuWEbeevTx6zwamQ3FeqWiETtf7XD4X2i",
  "key21": "36NNg8FvGomKAzbLc4GXDeoFH7tfDPDykEv5mbK84EmrhpgPSMdGUJ2ZAbCDpi2n6vqKfhRHg7EEQHMPGVGUVzqs",
  "key22": "4E4Cw1SgE71NYw8RXsjLpzsn5hCpG472f2LhuPHHN52n18td6C5tUCqrhS1Y7i7pTkb5SbQxYnUi5qcBvZe9XKCX",
  "key23": "2Gk2nzNnvHzd4dK2BeNvTEe1gESW7DghYncXFD6inAeqinTAcggCsznomFoU2ayaARCYJFSVEzRmEPj2mRCV3TDn",
  "key24": "3KtMCfnJD2Z3urVtB3cHEbKuxSzcx9hwGqrrGVGyPCTf1GCM9SXvki53tsSXvhfWJACxtqfLLfFXKbohJG64hRxS",
  "key25": "2fuMEdLUzH3Ub3BZ8GjXUCsErFA7z1125pyxNfZbW11R4AvG2xmgnaQ1mPKsvnoKvqipqQqK7rpXrvPtLvyaQzLJ",
  "key26": "ZaQFvCJ7zbAuX5w2Rs56J8dXXGpD3hjMmAxWnun14oWwLcmg2oknCNkRhQk8MwZJf3asqhB7uNUKXhMRxD9bvqn",
  "key27": "xsGTXwx7wEq7adAb3jstRfxswc8NBq6KwGtAYPTynY53R2skfFKqQX52VUkckcx8au3zahC4vaMqdEyHvhTdXjM",
  "key28": "3rKSADTvjMf9GpeVG66eSFVieD6HQ5thk2ZtSrn6cg6Bht6rM7qfrnmu8yHm39SiwGyAuW6LUfzyTCA83rjHtajT",
  "key29": "3yXTA8LjtmJb8v4m6mdhvVU9r7twLAcrQLNs9Vn8XsXqWQgeknTKzjPDLCaKq7GHLnsFLiTDcZ1h7bEzFC1hQHxT",
  "key30": "4rTy9UdNeuHeMtLxsUqapXZyXXSbvGjqUdiKebsZeLYMXRTFdvRQdo4nZi1wwZv4EARptPQpFKiEX8h2VUYCeKR9",
  "key31": "4cBvSGyCNjcH7ZnuRXi3gmjkfDfmPuB3Xz8wzkkD3TnAFLpC2Jqbt3WhxHwUWJUbkWjAt1BEXwYwmHLPhJYPZRWd",
  "key32": "5ahPdCR2SE4RGDt2qdhwhsqF4bo2WB84cKe4bt8rxx1TUf9WCaCLiNDVaNPfErXUYdWDBUPQMgFp5a9NwKMAYVJT",
  "key33": "3Zc7Nb5VjFFSQ4E4Q6rr4q6mFyc1TC8G5ioje7CehiXNrtyV7uQB1UdvLjLhADSjEUfZT8ymUF4thdX7TzoyUKBS",
  "key34": "3KKZUprped8Ra7yQNesUTRsg8cH1YHrSKkvE4WVo62YuBKgAGsoM7HhtQWMbELKyh7b5sSQ6tR2XWpmkHY6wWREf",
  "key35": "wXNY8Hxek4EbmiQuA1cG1T4dCLnw9SDZ2LAo8VfZgwXizbCiGEDbE8Pbo2z7VFFJY7vdpnR1A4be1yqxeierpVy",
  "key36": "Md1xtSc2mdzA8P9JBxxuAzniMDa9JBx4gBBJ7KhcjmKgKtHohECxLaB7PnSzT5iSmGszAvmvF8nXJspyxDgZNc1",
  "key37": "4gsz83uF3u2u8dktr5sEBZjCUjRikKKY1eQ6E6pGkv5u1a46MUCHceuieVwmFwbDUKkDumR7tgLL7L8LSQduAE2V",
  "key38": "3BBRKZQ67pQ9UDQNFciZsJZzUeuCxWdnZopU9RwfSLY3ZtwownK24DKLccKvZRNda5LMNKLRcdMZCvhQ8Y8FU28S",
  "key39": "2FWQiRzfYjS31zYLXcVHJJVDUPTcQt4dXC2DeL8fZiQKQ3ZDUU8vdqAEdTvEaghHKCFeHaJuAWVnX8FPbaDxZMj"
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
