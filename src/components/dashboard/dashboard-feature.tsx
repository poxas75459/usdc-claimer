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
    "3pFVmbgQD6zRcsSLmHaYnrcuJAaEeR8wQYJNiXkbF2HBQDDFwFjHn8bUX4ftjVENyAuZGahaTEEeLXz2c3DyWLof"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iytyXakDuocVF2NJYxoSbibGA2VyPmwNApQeCc8GXFUP2rsaNHjdpmfbjMmjQJYeBwn1vAhtfL7R7G4kNcY1QDR",
  "key1": "2KG8it4DeD2sUptNYCtEq1ZrcvqXcytqMFJebttbJipFmBeZEGh8X9t6cnkWFd1UZyX5CfebmkUKaDmkKDjK4Rzw",
  "key2": "2TCwBEbVpHJWbeqwGjiaAAL4CEK3tVNWL4Suv7ukk54UMq8qs1BNxGdBTdUfG5pqKJNbN3ij5SmLNs3mvrSngHvr",
  "key3": "3FJgcpsSiDD9BTHp5yfTXwb71nk7Bu222tkiT4YJsNsqK3zbuc5duGZsZqYzuLUzFcbhm8EQbQCo3iHVgbfDtNmm",
  "key4": "4DCtzW3KAEnKKXcdkDAqUBo24zWyMnbtiZmZLQWi25PcDJGAuG4YnBeS8qoGuPNqK1UGtwH3PzC3B8tV4RnnPY6H",
  "key5": "3v4VgsqHkNZvPy6cwQFFsjVxQwhhNVzeMnkKry94D24YAQgJa8UyRPY4DU72Sqqh8ssopC4AAnPdGEmbtu8KA2XN",
  "key6": "21baaLwHAJpmi6drxswfvtXkq4128zASvCM6WKqXSb4RXDnqCL7pjP6xF4y19gAbVxGRLyYYBJNdTjpQXhBgcmEC",
  "key7": "2ht9fVQLbSuCgQRWmMxBKyrarec87RAn42HozVHdWyrQD4PktD3GancyqMLjWbsYR9jxqL59zUN7pqdydX6q7UVF",
  "key8": "adgUF1JNcuUtur2fcAtXDP9AGrrPL8tVRZihJ8Mofqmy9d3EpwFXD8E8wdFeaHGuoKxi9yJv6LGJtcaEwUfPkeC",
  "key9": "4X8wEFjnMeDUeC3LiEsrCceD4iN5scLghJuiUQT8Rd8hDbGhgzJgcS6hy6TfJN6F6cVt4NMYLJ9ji2nFMZsdj2mJ",
  "key10": "3QNpFdt3LqAYLK2jhoYLwWLf6FG5ddJgbZXh6XZmmGyLNXYRLK2svLTgQaqjrLi6kDBM9ubMgwqX18qp9rsT7YVA",
  "key11": "4T2aFszWCqsNEUa9ukKWJyF3soaAp77PfLdrbwt3gERkzMwWs8WHvpBKezfKMdueQibBGscMec1eteU9t7GZHDmu",
  "key12": "4GWvUsR34sS6ZJxqrr1JSNJzC4SHNKH4ufoEksNEi8AorgKuhv76CHW7TTfSF3cBy2rWo54u8cARLdbnB52Fe4CC",
  "key13": "DRPGYciYtjB2CTm1MYmjzT3H3c16Q6n1toJhu7ZtJzBApQDzwALnW19kwLakiLbvB1nDU6uW4oPwVCNZe7VzYcs",
  "key14": "3iSbYB1LeLNrm2qAkcwkew9KZzu1n3qSMbvJ1SV7ShZhZkHhRy5gZddtSbNTUt91Lg9Mx4FJEvysUgLTbUd5ahEJ",
  "key15": "gW7TJEGXa3BZ8bqAMPcpqHM8Vwb6zxkeqK8DfGtiCuS5bVNf6vDVUzyjXnk27QUAtbFg5L4SDUgG2FSL6Nbd43t",
  "key16": "4gSgzgaibwXvapkKdZAvpmnGkc5bc1kezTPpGbEwnVMCZQBf7ymhdi3tPwNdNPr7mwgEpuqSWzSqYNXsLP7A1SCr",
  "key17": "5RRk3tZEdFJKfpCySabQEXefXzT7RwMbnNtD8pGzyNtz2kgm4utL2bs3tFY3V7q2ezuv4UGwEVhbMUHZmxPaFowc",
  "key18": "51WaNuAFfuB5yVpnNohF3kcDFgcyCgN4cJA8ZnmNAs2PB4nwmdUseWDVGym9YZyoj6wk5GckAPeKFpotnHnDySeh",
  "key19": "5f8XQtnw7svYTiD5MwJC1PkGc1wqfrumQd7XvYRvo5Kk9BcKLjL6TwrpAmYaoEUNJT2Knw5E4NK9tqnQASLrs5xF",
  "key20": "49gAgaSwbWa5xfQJaXadUp32pkcc5unejdReRHKjV78KQPAAvVBVznkfxLnwqUsa4V37eMF4KrMvPCWvabqkSw8k",
  "key21": "59M8n571qSJdcRrmAZUqWwCCBuVp9pGBYcQwBRzUSka3VSr9y864ZtyHAX4Ut8P5mTJWCbXS4ZMbY9FxGiuks3hN",
  "key22": "32WJpEWwxrw6RiPnWgA8n5ss79LTdmaWLw1MzyuExGRtjWtqgpPdf1vz2hgzoBdyj8WvJfssGTH8MzcZXGAEsyuM",
  "key23": "43uNSdcXyxGXScGJn11UJu1m18gLqx9hSvyAqaK4yXfnokmr5kGi15PXGrmLLvHnXtNsBx1woXDxKFDdat4Eh48a",
  "key24": "2DA5DKNKY9JHB8rfHRggGaarLqVNZ8TuUykirP7hMyQLFNKjpJJmxuNf4fRQvbC4fjxMP9gu7kTmzPDJrAFmxrXy",
  "key25": "4yBDfc6CjuLPEvDXFU1yCkY37A54ZVQkZ8CLnj2eE15SP8SzZzT3hE4MaB28hfkzCKb3agGYZdBxSncbpzNLq8xT",
  "key26": "3XRyoRhdSS5EJAuEkgnRJZ1uvyAr5jcpL58nZmQi5dVUHMkzKFGub5yZ1BtG2tJ7MGK8TcpkPCSL7z6G7rJEExAT",
  "key27": "53km9HpV72az6zih4gRqwqFDPgnATpxAspxKBJnA5k1E64BRq4XaQ8oKFSEx9UKT9qT5URcNh1fYjnNC1fbUGFgc",
  "key28": "4XCkpH7BNyCSAHN2FniApvDGgiibDnftxDtVE5Wv26ZMCeMMsS2oHHFPUXCzkGcp7AFeBzX42yPb39ebRscK1deH",
  "key29": "4Leidx3HBHVKHa4HqW3gGdDwteKzcb3MsDTsVyxkdwfxoLPxZrK714zo3s3QhWncKfX3KFCoRW67x5jBNTDkxiYc",
  "key30": "3dAEUEQHAae16X3xgtroCcm4TxhGTc8xzFEoun6sLAcochhgx6vqsQ2c1C5GzQZNACd3gLgnxWfo99S2U2XQw38X",
  "key31": "4nmGKgw3UdD8mg3mKormyNB2rVPGBpx7cdBxiEsMopbTLLDnpXGfzC4o8HgucQgcvAYvvn6EtjSzwgaW3wNNYBgJ",
  "key32": "4SaLVfQUvXHwer1WT6MkBZTVhP38QU93nw6XHyK2Fm8rp7zJdjV9AnzYcjvcCY2BsFmmkPW69Dz9qEmMNBqTJ9BJ",
  "key33": "4gvKqTPCY57HEVkQwA2na2RETKTHGrdbEzLpS8AknCoq328BPMdtYivUR2FnN3WGSnNa1Ag1D9TykGFeJk9EfSVH",
  "key34": "7xG4LSmBiPetkLknp7hvGcxCS89q274deEVCAqNjdunzgnvG2Ez3pguPU5NoF3Qj6DjaAux5UExmVsfRPKNKJkN",
  "key35": "2kLyUip6hfPzjpHkiGM9PzyXUE7sfVoDswiHS4nfnvGBYda5dGrcfwXxrsN3Dkie6kNjoRqGBbPBdCBJVfD5AgHS",
  "key36": "41xTFnLsSc5MF91BF3jzFTMtm6rCwwQqbe1ozed7fgvxG8sLQCrvKWRKifUgzpSFL3nx8avptJN9LrmK3eVUuMci"
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
