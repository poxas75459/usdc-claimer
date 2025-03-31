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
    "57otB2r1BPU6CXQG2PzP8QhZJ9xKtxB8GLHpSYw7iwNWbrBNKkXqDCVNYemnUuZf745XBNu3uttWnXrU9npE8agc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kA6JNq7pBuzi12jXyecr47DZBytBpx33q45CQP7WASBQULzCfjySR7e3d1J5Pq3mUmnkLrR2uGGVoAegjWULWrm",
  "key1": "4wKdPnfpceEYNC8wR1h1mHz9MFscK4zBCw9N6CvxLjo17uCPRWt4JyxF4BYRkqyqCb1NfM2xabrKstZSXk2mNY96",
  "key2": "5xjWDzYWuvUtRmxkHKUBZM7Qbi55QUH7NEE2WD1UwZsmoZ9S8R8uFFdWCPRg2Gzz6dfoRuei3DXG5tpsz2cF2wZg",
  "key3": "2h1XVYfy4JoWbiFEAFZejEYjRwhipZxgf9pZJFJMjuhvuf1fTfqe3UbecrEjs86yKCocggxK1YFG1nHNu1Pa9aqf",
  "key4": "5b7kRy1Gwh2Q318WVnytJ11bFGjPFAvHNXgLbksQetsf2sNwVtC2sVZhvA98sQva6HDj2JzEUQo9Rk6UhY8fXzUY",
  "key5": "3A58z9qvjjy4yv6yg5f4sAUW3KvBq1uUjyDvb5b4A43wyxrAzH7H7aR9iREy3VwASxhC5R7iVTwUphpv7oqddLft",
  "key6": "P5mhSJxDUd19M41rDLWWakCyyEUb3dbvQQb5N11SDvvJ33hEY1YH2qKD6n1epnYjUpCohaiWcafDEp5JYqFXHox",
  "key7": "2TgGXQyFkQTYjbdhYff1TKUQFSj6QW3fTrwQxVAEZcYAWv4VJPw1WpRu5wHhNW7ua7tkWWazDJhHQWPPjiQihrR",
  "key8": "5VoctD8BeV5PH7mri3vH1rJxxhauKKLPkW5ArD5Ngrz1wH3i4dDxqRQSGbBsFCi1eRg24oFKVtDkBjdCZuQVV1NV",
  "key9": "ZkySANvR8iByd4z1JW8kY48AnePd9ugStEZUdpW9rw9FPERyfAd8bMMV3YXo9hU7ZZEyYeStFpPABrKnETB7MLg",
  "key10": "dWon2GU56oyXS1G679WpYMB14z5tYngnA1N3CQYYfTai8nocaWt6Lcrhe9q6wfPH2WK59SRg3sqFeLs3SGf3aWH",
  "key11": "5La4FRPBjSqa7BXfmJcLQJuvJThuhpCdcM52zHNX9VWpkTdwN86dFtDNTRUsE7PetREhkNiMhqtuJPUzyzeYUp94",
  "key12": "MgitGL1aiD8qumbRT8GfVAYKXTugPsfyfquLVru6jVsNBdgsRs4Ly9t7zScQzTiHhEL4PFwGy2txLGarxKdKhFL",
  "key13": "34kgcn77wfGfh5D7RGCQHjNu5R5zzqkQnZhbdBW2eAfAya9RoZWiiQsjXT34z6Ws23GhXLhKgQPX3EUEtM7y29XL",
  "key14": "2SUvomibbHCDuQZ26HXt8kRMp1chNP3pfm7oWcoZesXX3QRTj2gA2SuiUyytDPD6jd3xuetcHuvBnM65KBdrCfoC",
  "key15": "XdtGt9g4eWZBCZtUtJS8L9XQ6Jf7BVF9XGqtyHECMsA9X4Ah1VvUB2ZWZ2C8Ummsa4aPPd4uQRE8unMybwAg79C",
  "key16": "3DofcLEFVjZQgUU47kMwJ9PUe3rSvd3AWNyfxzZb6iSWZq2Ua3zJ3nJSimaEAPmDcSVCcYPQQy1SBPcQ7prH2qTE",
  "key17": "27fcHYJTR5xJECfWWss6ZEZLfFXRzVGqAbVrWiTq4eb21sip7Db7EXsvnwDDBfZuEzz1Vqp9eZP1w5iGM3NQ6K58",
  "key18": "Gfdfp5FjzoAhYMf6tEdGzyztQPAuvmy23jhQtSao6gfYcoiwfHbQgBuJZNFvdabtt2Z7rJ8wzo7EkTpAjJWkWax",
  "key19": "5X7BkeTWmMkDCCZaGruB3iv9xJC1EKS3tnbBAQ2dU5KgeY35HnnqcMowH7YSccyibVFEMzHqkvRASeARyM5uRdcE",
  "key20": "22bY4dPFmAEDqvevrfGNg6pjRKuTVopbA9aCbiC2kxQ7iahwxAzqn4p6k4LBv6mwahpPMXHucUL7uffksA3M6vwv",
  "key21": "4mqyXaPNQyqseRZikvTMwJ7XpgS7jzJM2RHRxzsWhX1XJXhBHkhtttVm4GbF4fTLSwcP1rF8VtS3GwweLTbhmNgk",
  "key22": "4n3pMs7HPyyLqqSzVqRZd9b9uKT9g454BfQqJguMqXEFSRir7bX8RiAMaJs4fBAZBbRC89DRvgYQC498Pnywv6dZ",
  "key23": "4mZn8S1o3dT8AwkMHxNkXtbsD4MaKN5d7eCP8mAih6TbNLimnx9UHM21HRYm8tXRpggTLGPjXk4Mg1z8HJDsc91N",
  "key24": "5dmb121hYHm9t7vUrmdM84SSDdya7divbDA9Pr2ns9m5hmk8orpXPGMm7wdV7oHHMLxJQwZziwZNP4Vuz5fjq1Yb",
  "key25": "4XqngtrXXov13Nssp8ULJzbAHVftZgQWhn9GSx2joyLhW4kjoyxiXyWEspX2E7uykigSesKcJjGMjuR55F4MH4g8",
  "key26": "2z4f2gqpU5QxCdgTYoHjhWmYZ2mioLHvgqNxUDsLZTTatkn4DVSqEKg2XhoovkQ6LgW7XvzwtMXDst8WktEFQVr7",
  "key27": "5V8FUBoTd8PmYxhV8ER62TPmiSKqGCxhb4PqcVKvvR69VvgvztrxTNWLSoV3eMbCSFejmJcyvXkJScFkrSUzWhvm",
  "key28": "4qnBZ6NPhC1wGudUffA2ieTtKqRY6kTaVXVoGb56X9rfSiWP9XGf8uzMKXYN9SWNVF4E9HkNkkPnAFwkuCf6BVJg",
  "key29": "2ESJLCpnkwAnqPsBuUGSGp9yytXcWSajwgxvz4EWVbcogzmSiMKQRbcHA9JkvcfA7sB27QB8fKM6tsfe2LmPNiB9",
  "key30": "DbE6q3qgkrJebWZ29ZCtKZCzVBYRrgEk5dQHSWV3unMPD2QY5E6zzGRhJJkgLL5amMHH2eFyMiwTLbfEuFGC64b",
  "key31": "2j25hfHBqS8SHRoxPHWHShzEj9Y6jupKugDQVdPt7KHkuH9vCPQNTw4ZN5d5VGMDojQfESMtjG3SHinHQUTGKhhr",
  "key32": "4MzUSD322xH6MKdnC341BZ2JaCnXmW7d8PrCDm52TKs47iL2Nmzvi9NSc345Cib55YKvsYyzn1nu5BSMcBT7Mu68",
  "key33": "2gMB1JLcgQJX6mu1NGMYsH5g9Ex4tXsc6Ui3d4PprDkRBUbSXmZmZX9mcxPwG2kn3QgYD7mbq35hS9ejpkpckXTS",
  "key34": "3sabPAuuZMdQrikULxpLSi2BsJD4XDkxq9a8F2eP4SDz22cLjCk3zhipiRuCy7LcG3SPtVCjhUngSYeWTvGNDyJb",
  "key35": "2cRKMndGhhdkHxgWkGVbJBZxbenCWUiYYPA5EA5DcNuJ9hSjKKy53KpeLeYyMJ1UQPZNLazjFyFEgCofQMDKGrap",
  "key36": "5pMKPiFHU2ZBDW1o25opsdCZYz3exbxGmpDXSdd6eBdxc32XpLG8nixNnRzvjNkF5TuT4VVv1pVbt5VudsYF5am4",
  "key37": "32UwjtFbKgjwn75Lc4xMWeZtsf6fsmRYNjXoitfBbZPxRMKLvPiiSMDumvSAVVS9GNsDMRFh2EnEGrLSKqfA5aBX",
  "key38": "4HFpHnm41wEXxF1GVr1YJJhNYsKbYYQrQckBZeFVtZZhiUZEx2sdPzQv1hcw1Nd1sz47rtuxbLzGp21Ewb3NFYNB",
  "key39": "2M7XmfSu3dzrViCJjBbTxtiAEev9jBZYLt2DcTC98MDeysTtF6UoEzPQ7ENJUnw611PfBMDZvMJWKJthxjch4Pxu",
  "key40": "o5MV1S8jKaEubEm5Bsacqqc4XwJr2cKeKS2k4GWMuiu9MLEkrTSDjEnRUSQJUTMknR2T99Sy1F6WJ6Pi8du4HXu",
  "key41": "322MZ5xyLBUmLrQeNdgXq8FJt5pGRNgVRmZXeq8puS8Lx8S3xHNCbZmpUnswjnTmtY9VrzKfpnzCPPWGCW1NsNoy",
  "key42": "TzJaK6fqbSAN2ndodwM16VSdy1NQSGzzYXQma5hNheDeNbzKgJHK2XaVRwuBJZAvsw7wL71Yo99eynDbkwciq5s",
  "key43": "iC11QnwPL5c3zrEeaodWgpYbJTvYK2ozy8589pn1ddNF1h3dhGsYowaQ7J9mhtwnRreZNZvB6Y9kHK8TzhnR4PY"
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
