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
    "5Sy4VzyYPkgMuZW6vkuagDiBKdQDpAF9w2NGN7yTscxsSmBjhcguzBpefNsDBj3NFv2tP8tXzKrvK9b9Ghv9RJmk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2L9mJ6ds3NMVC1gtAS4SyxHzXoUGj3i2XFJivxiRTsJDtuBXMFLmZyM2nBnfB1JP8arruXuM7z5b721xWWaindJF",
  "key1": "4rpkbjwWTZ6VGN71KfbQmpSNaEZJJBQJNp7HGHcGmkuBGo6WwZrAspChs1o7bmfLjpQTj9gt2brAkysLW9mRXVB8",
  "key2": "4MjtxhWWWsGRk32pVApKnH14w34GmKGXdpxgiQpnLCzPVgkKHyLrNF53PC16YnzeRcoybVJiVAWGjwRxEHwFY9zM",
  "key3": "454Xmd63vR1Hps3MvJTmjJG3Hqtgmzr57Vw5AhGxqv2ANJhGwG6wsqxcy8uo4fiARAhavf2fnK3SV7fQrbbG4RNy",
  "key4": "5Y4ULkiGSbBenNPzaw4k7atohbRYzVtfMWXa6kessZbXkFvfTvFweD292XNwm2YKqcjacTguvWcsTD5zcLBU2oZc",
  "key5": "623ioRmkLnwKVJreQoGcvDTaTe3Bj11nyuuYUSYQWrmVwV4utbCoPo5ZBvEqTDTAxdXQW6UYVKVb9mJQ5TyvaK63",
  "key6": "5xYEdJe9j9D6NBo47HXkSXEbXSzQK4jcGD3WERMiDFcGEaFAYw5k6kerhwptHMk8xhRCA2241prnFrtgWo6uYyaa",
  "key7": "4Hdp31hEAMJv3dQAWw7YKMc5Pvr5HcJbrpEgif546jKhwiX27SVwsK1EFvs1whrx4fj3tQcF4ryfpxrZtQse2GYh",
  "key8": "61tz2e5XUAYV2HHs6ocmF981VT8Qi55YQw3qXGzmhCsRFGgvYDRKy7ZriCcGkUhqDV3bE66pNDboyvqdVqDgzSzg",
  "key9": "T2VjAdj2vSv3M4uHvGZLYbHEK1HKCAYevQ1cVE4db1GxUCU6HwVV6VPCZZiGFnSc3NDxcTipXB4fK9ofonhrsXP",
  "key10": "29Tcybf8wDWLkMWwTRBp7RB8VCWmqZTSH5buXFP6z4xxVLRzSvsmTcL8DpDVj7xR6uZ4h559XZuMsoz3j4Fec6FR",
  "key11": "tntA6ZRzoFccAVLwu5JhKjNzTavfdMG5PyfvTam6YEzcx6NsjbWnd1xFinyX2gbJzjv8nq4bHVso1fUTrptUuRQ",
  "key12": "2GBHFGpCHpUkMrcZz9ZG6VvxSUfcShfJqQf1yXrkDrbeMAPgWvjgCXGtGkjc5qk3chwUUt1y4KG5mRKeTYXpkDuN",
  "key13": "RZeenuXkCRibzs4SfBgCDALc786xCmvasoeKBNSGTC1jBHMP7WSdKuMK1cJbo4dttPR1jkPt6Bm8nF1ij9RBULj",
  "key14": "4BgqfrHm28aqpCb5JtuTZkd9jMwpLSGo39SSgGGbjfAJCVwNJjVNbbHxw5qMPphWCcSrsSiRyrMSBQhT8sASN8vE",
  "key15": "4jo7Km4A1n9EScEdMGwwWCPL4UqREXNYRTuxHcDdq1q3eoAcuUfmTHLbgk7AY9KddrxMRrpkWqNbrDtsbueM41ah",
  "key16": "26BoXBaBf5pSrHTVpfK8uPo52kYQTBefgh7wdEwAs6xruk6VgZ3Zr2Y8EN49nS2kWKcm54N5PTqz19irL21xbDda",
  "key17": "T3N5nMQm7CvNzn3wtEgayKyM2Ph7hVfkAWpbjv1yAE7kAohAVZuiFv1jRJpfxntDM7tTBjyzFjEohKjM6B1kYNF",
  "key18": "2GaCZHBbVLXAbPX9WNKWU19oceryNA4ocUT8kTtBjGDg5QJyVCccs5STHUJZaxUeJx6ra3RSybg1wZLAHrjXMjtd",
  "key19": "5TCSN3Btu2CTosYnkUrSVA3JVcYU7aZKHGwbxtL6b3u9FGFckacHVX26jGpmfwqcFmETysQLjM9X4Y2SgCi9x4VZ",
  "key20": "42AGMyeFedTCXeDa3nQwkT7hg9mo45aUnnFeNriKSXta4GA2wniVHFmmY6iuCYh1NwM4EYQfEnCb29XdnX4mKpEX",
  "key21": "CwKVKDNt9fU8L6j2jzeM9MxR6HamoL5NWeBhSsa8f4Sdq8BnZhGVFipWk3wirvLqn1VL6wXz6GrSJvuj6vJyAWQ",
  "key22": "4pLxiFL628vePfAmthpgqsfNenmXrcpLfAqpQeffsV2Gejezt8Npa9B8CFLy9tZaVABdAuyb7tSHpFPbEsj7baFo",
  "key23": "5e3Tujc4zEgML8hZf8w7UqFx3HqBFSC4FqT7uCeeTWe4bq6iRVTEi3sGvxyVkgyM5fg5bGHGN8wM5axcgi9Bw3qB",
  "key24": "4sm22JYjYnNA2dc9ZwjMyjYAms6CJh5jLFxFqWnjffVerp5uNW5TDz7Cdj8MN87Dc9ivbB6n6oDPkcvvFpEWxNSH",
  "key25": "CTFayim52W9F9rPprRDSSfxaJ3ceaZwXw1YSTbxYahC2Bg92CdyrvKfUTfEWoLKAKCDgUA2SU1oWuxRundTbLed",
  "key26": "3DRxR69NbKHpwEyAmx3LddwunWA87Nipn1SiffHvDZ3CVn2p5orMuRBwWJhwiDhXV6iA3cKYyLLSFBBMdBp6dR6Y",
  "key27": "5QWiMoWVYh2BXBq4jRjL9yFqVDtkAC9RsPhwBGKE3TZCTp7PML1PsZjv1vpXoZZrvK3MyucvrRyg47zusLtgnFdF",
  "key28": "3qHCmCiHowZ5Vq2so15W5cL629hxxSCcHMVNztB4U74EaR26VXBvNQiraCPrFNpChaH7JTmixx5MfshqjF4Ab8wS",
  "key29": "3AW9tjvBAkLkhgtReVUrqwrQWy6HnDeZ3FSAFrtMKwA4GFAyuCSYXj78d3itYgoPx9HkiR82bhrhG5nFKzKURj9p",
  "key30": "JAtPKQHFmwEbFUwKcsAcPhKhBVXQqbvPB1iZm54HjZgVSq6S49HP1sY9vr8pcrnGhoGn5cffceTspg3H2bGQeef",
  "key31": "5zTwwffVco8QAFiucTdj85QEzE1kJo2ACcmTzCFrnfibFgRxxhdRjPgPeK3VJPqEZtMBNdFX9eiRNKGFhpL7Wgco",
  "key32": "PphFrvu4NU9gzKTfGQn6goLs8u6VNk6s9qr2C4T33ENYYDcmyj3D7YQzkFgQkK2HSu2LgFWBCqR9kQrPfRfn1Yo",
  "key33": "2422ei1j7qNFQFTs3Zj3b2eWev8GssiNkq2eNDbWyaCZCR5Z2tLfVMKPB6gBZH5nbNy3D6fRE5vSGq5qpHFFJMmv",
  "key34": "4VMmnH4GLxij1WK7w31qreaBifBAee9BpzhSzE3EtUT8VBstu2MxeChrggEKUoYfzhD4CJGcKGBiAurx51PFkFYK"
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
