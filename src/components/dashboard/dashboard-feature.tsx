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
    "4ZS3AZJJhvnd4g8trSLQXTz1KfLvb8NPfjxoMJ7DtFQHwDudZ5nLJM8GEEQdUWdNpYQu3soDPHW8n1tEdQ26iDoT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "quNk71HJxeAfoqDzVtYunVXkoeB5T16W7mHYbceF5X2ztWxed4ipBhiDpGTUpwi59HyzyU1nRrFskqATBwp1oiz",
  "key1": "3NCrTzVQUJMLQZroFvPoA35UXCB6ULAFVHy4qGcg65JYz3EnXjmhgrGP5DzXapvHx187PVfouSBvFcsRAfMA6UeL",
  "key2": "3R7coF6TJedzApagB5FyW9homxaPCq37Mw7DixaNKpaNca8HuWhKhTiMZaVJGTLCwp1G2LzkVZbKS4fEA9F1RzVQ",
  "key3": "3sByE66XwSUxFK9FMkQQXvk2U1JdH2UQtc5F9nSa7Kos1cNV4tvXjZZsKr8KrBiJnjdnCaUbzsgs9c83mkgCTjSg",
  "key4": "3Mh69fkfe2mr8HH6Kv2yvFy1nph2SeBBPnJPfx3iS8gioDJghyi5KPr4BQhzQxFrxSzJVNHm55w2KviKRMpVRJPW",
  "key5": "3SwULZcGaBWMBRvGVMdWRyCux98buynyWSiShdrQCzQ5gWYzfucbvoXFjuMNm439nkwcTPBBQcNtwED2RDo9CEBH",
  "key6": "33VqLZzopBvh13KR5irUBLCBJDxBNpJcnwcZ7woL8hb337C1hpjCF83UgXJYZ61fZAqqDGTmndGYrmnqQM9biFSG",
  "key7": "3cFUMxy1nZ3Qw1rHQctm2eDs3r7esSvPGFpyjbDL4JfFMHovGtiemeiJnbhGGHrUJLpx9uZqd9qnrzRiCHqeXo78",
  "key8": "2fR9MoArPNPZTQ4aSkUC4vzE8muuDbZi5r18JoXaUaHubsCxsTJo8DPo4r1MwbvfwnNr1yR5gBi9kNS6f8GeDHEk",
  "key9": "3egi1bzTPmffGNYfDaUazSE2oZnMWUKdYofNNzEdPk3Mbx52JiXZujNnHhvXwJbwLpKjYkXR8wYnPg98uRyzkhZq",
  "key10": "UbhaViHCj5og9djAZJU7EXz6RjJwT7h1EsuDxwVx2QMCdqJZbSRk4AHVH4ieQAGwuH3fjahbB6ni7d76mByi2by",
  "key11": "4TvR64abMmAZstFWVpX74CesU2VFgUYeb8VBZ3Wv63CkjgFry1dbQdGTegUukD599pM2Nh333ar3yRoF8SC9zT7E",
  "key12": "2fb1r6asnFAaG6XnsyBLvZXJ6sYbbTEk41kRBmCiHPf4inciYpsUCApQXyBv1ck4GAYSHerbjLaytBsaWa5YPQbJ",
  "key13": "5AhBnAQwDa86hQyYfRdccKU7C3WUGdtThMK2u51Q3bDzoFcXHZjpGfmSisRYVWQPzqMFu8LYQZHPYTNBNFAp58cp",
  "key14": "4Fhe5u7d8kbKrvzdh4Q3kACRqhqLWc27nouhEhNyLBPHjoYjPvkMQZoezRZHpP2hKb5bHeyW7bawLbU43TSN4eRd",
  "key15": "5jk4Hh9ToxQ131XKnhuUnpDg78eU6txg6to3AFQX3aAY4VSNYXo3uJBc35WMwjn5BLfMHa5UYo6hsMtiV6SLrEwT",
  "key16": "BNyQ8YzjqSeYorWd77QRQrzyPCvy3ufWGaZLW3GUTcsSdqs8awKLBNveVM7FAAyRn3eoyTLXBSJu2eKp2soFEme",
  "key17": "4529iC2YyK1tpSniN9uYZ5rCgDa1JxdYC2HpdujwdaNf7f4gYNp5bAPRW5ttLxYAQ5w7WEGVG4TKVjCPwJ3TarVg",
  "key18": "4PuF4aUQb9uFjQobVmj5LgdXWwCKxUsx4zJAh4Gi196NbauJyNfcKZeoouUm2fDuqjpNHAHShkB47L7CCkgCoyHe",
  "key19": "28XDJqC4vm5dYKi4MDi3jW9hBEvhzFB1F7Fr3ow33w8gq5DjJp8MDk1eu9KAtRpAGFHJXzdLSojAz6C9cfEWnYTF",
  "key20": "4V7upGApzxPBK59ZjKJLGsdCJvSXWvPLcYKTm9cAk5Xp9Te9UBb2bbJWMmJzMRtTyGiNjS6Z362z4fgC35RCkVi4",
  "key21": "24k6Hc8xeeddUe7BiwCqeppUgEnjfj346JhdZJTGNJYHAjPDgoqaY9qoFddRit2rpCJAhcU1EZE4x4GjXPgZceUi",
  "key22": "2HFAxzFqeYw79TaDnB2JXkzuJoXEShsVvHRQLE4UpWs7ZGKUCMTcvrQzt7nLg1mNx3isBCxpTEQNhdNXrjwf6u8t",
  "key23": "2TCxwBgbeeA4wBrVYM6iqdybnyfEftaVFkB33cjMKTtLiZLBfSWdf7yoxj95tGJWxu7Z5SoobMK38HkRTdsrg4bX",
  "key24": "4sj1SzqFdKBV3LsE9omwsPwYCrGTaNeaKZZyAced4ySZVKPieDjAWpaUGZYepoP3ropg7DrHXfMoxxDsKSCb7kE1",
  "key25": "47RZFozShGj85W37sYT1ipCVsBtQPwEMG8PcyTjXK3bnrfGNrZ3jGAMp2KEDfuxde1wY3cGKo96gunRtfNYgBiGQ",
  "key26": "3cQxCPdkfS2TNv6xfpZSieWLWECFTy86Fz9vcLrvvy7G6DPjXRjjnB6Zach5WcjFUp3utzdndbjHA7shpJZjnv8f",
  "key27": "29P1uCrLNbaY82GX89aY1qQ2nTd21bFCmm8aY3ni71YsovJor35JpFDMsik6ocSWaJaoQyYKMhkwkTNJuc1rvZgZ",
  "key28": "4Gjmmvqr89x1Dp11sukZSfwGaujeeeDVWawn1Ymx5G1vDzS56nBb4cUyFdNPYzCY8dAEq7GrNv3EBQQTnQuN9e69",
  "key29": "4s1uAn9t8TvdfDNaGpAvMbSwTM8kbEoBEt1JU82e19prctLmiCJcFKakvSvGquF1qrT75vB9PMkAcVbnsbVRJQzE",
  "key30": "56ypTPjBP9ZW1yHmiXabQGEEpqAWEmkEuRhUSKd7UuTDk8KTczb4kovqoa3EwuGk9gG4cVDoEWM4JwjsVqobhRy4",
  "key31": "2ECGhAax9tcDnBA7Ynpe785J2peTjeqH6K4gHmsHHEEeAyVYepHbbX1NMBFMCWCMmyLWVgagiqoFZYx7YUMQvna7",
  "key32": "4v251eYYRsEoE6F1AFuBKZfRjZLMx8EjcuUMwX6JiLhrWNzatD3TxCHR64BzqKSEEBPjNMQM5eacSkNsK2KvduCf",
  "key33": "3qBbq4d6BRgcZCSdKhcBpRQy52GWkD4QvYd1zavtdFD8zGXiUHQkjpjCsXLQSrGyVt6krctYxxCXeoRtUYwFEkVs",
  "key34": "xKZdmqiufUVRBzqCaLz1cQoso6XSVePSS1gGrTa9BTrdtVMLqbNzeb43a7iQtTYubayWWpp5oinVZbf2Lfsp9V7",
  "key35": "3FLKnjb3hH9PW2UbwLmBJSdaxUPcJyw2NSaLadvuueV5pT3oBvXbjR8ECeaTyFqjQrjT4zUoA175G9pCfDH57iTG",
  "key36": "332KcqWowpP8muLEowVD1mxYVksi8XGqNJBkL136CQAWJm3z48c1SEhN28WCsGZLxYxmVx3ZkLmWFpNHads8r6NU",
  "key37": "4p72q7fEDFGobtmcDBm9zfDfVVeKVKmEykUUHKqZuppE3qxVAdaagakN6DLHk49xfcZKMHJBx2KH45T3zNuasxYi",
  "key38": "5Zq7nkkQEnYqNguNmG9WYdczt9hYP3pMUWzvqrgZ4uksJxaQEL4uUA9H4Hsj7FHpYWsKy8qYcenZdHszD4uZpYg4",
  "key39": "3oU4GfFT8MKJRx7jiNYzPK3nHGX95pBVtYC8YPC6RCYGJHjAifF7AtHbR4hJK1UYCeGJZaf2x2j4fFaTQxEakg55",
  "key40": "2yYy5W95GtcAhtuqVwUGUrgZbBXMKPQ3vhFC1qdZcWfmNwhvYKP4gKQFic5HuSsh3FsUtYYrCagErBfWpggGQVTv",
  "key41": "5NANDz9moQJF2cHBBfiVTbTcCStq6U4D2fe937fwQYfPSvxuyzx9MSMhNTroghJPdLRDHfGmeMiGAGPRjo7d2U7t",
  "key42": "2cdySxgofUd52ujzCv3jHMNuNcZeqGGLpFZ67ZFoqANWxmgxC9rj2jxVaMshCCwv4gGjy3j4ESWPWDiXUEJQB5Be",
  "key43": "56fzKc5JVL7hrC6eKNa8xPxhaKGsJWuEkT7PxpySW2Y9GovNG2YdJA9Vd3K5MWmrTW6ryn3XYuHG4wHxhyhZgmDg",
  "key44": "XNGkzQSBVMPY7fft6MZ5n5Zmfr7w7bny867xM8SMfx6ekRBVFRE7GKcJbRmB1qXFyJdY7THZE7jU3n4K8hAnozW"
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
