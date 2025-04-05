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
    "27eoAK1TY3JaEXP4Q4E2dLLa74JcTj56wWXsfhvP1zCESQt7NRf5emTteC7CYJAnTQghfYz7G8hQEQW95gyVxpDW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Q57htKiHsqs9KgoNYZVHrXEjDvAU71fgmT63eZX4CdJPCfTjJCQM3YezDsHqgoWiPLhz2oQdJHutrydXSsXME3m",
  "key1": "3DVqWdfYXj7j35KXUm7UDpVwSBacKPSbPDm17H6UTQ5Azpg6juQgH9pwiN9NHM8TxjY4RkAzVfguA1DDxXC5X6YY",
  "key2": "23wC1C1VMeFWY6edxFqggXD5iZdyBLLgqcVNfnbNyK57gBjwHmw4FNJitVFSVBzVk9zEDKhPQYAuMwDibwP2gvoj",
  "key3": "5tPMRamdc9n6c8GLHxsCqvMGgebuznn2j6NSNw7q9T8WqQw7YATPgZvGGSnPM3y6Ei9kvACEN4YndoJQfQG8AMLq",
  "key4": "4auToGtCZSofzjf7okxRQfGTdn52WCYD5HMvX9EGwBtoimhqMFyabtv4weNQpNShw3wgg5StS64xvrFuwpS1z6ss",
  "key5": "4AyMKBbjKVPWonHrB2F4wudH9wEhHsxkMZ6yujM3ADWYFZKuSYwQ9Fq39KEWJxmNckEjoWX1rv3c7sSDxzcenGYy",
  "key6": "6pLKAbENVRqJBu4U4wUzuhnAoqJ4yQ4vaWUjFmNcbDACeNEUChsSAufGqSi8i1wAUZX4PHDsPFuVCq67cTFXZHC",
  "key7": "3sfV17NRh4mR1reEJccVp78PgK7wiUozKZFvSPC6Zm1qFdUVYUErK5fSoE4g8AJvXGeW9AFVCrZQh1w63EUQW887",
  "key8": "2ffTH3Ga8x3UvTqXJaKRttL1GSFVcesVoMKedaKC9CMiB7PYm4u5ZRLC24BzUuVsCmtS3wiAMuieqAoEwjCXtk5h",
  "key9": "2F21hqwcCnCSnwpzVHqNFPRhMT47h1QhBgoNAEtjjLdxyHqX87C4e9DEgWtmsj6mG7ocwXmRymzpbLd76zW7mrs6",
  "key10": "4Q5jTMx8BTrQfbANjnyL4WQ7gnQiYgPKvQhasY5Yp7VTRu2dB6T7bZ9kdpGbGv1sGPCpPii4b5tS5UtTuibEnu6t",
  "key11": "33p67w6N6UpNWGAc4vuVV62PWtBKef8PvWLPLZjpMgWGCcawwnwLKpxp54md5XzjaZ42sk5JQ736H6yPZ8Ld8bpd",
  "key12": "3R66iwQDsFnxrR8PL9P7LPzaDK7XWyYpW2kpFpHhuGj9cL7o4d8Tz47Pcey4hCjFMtRSN6EKMKyqY8ovfs1oW3Px",
  "key13": "255KmqadQxXqCo95HnWX4VdAeZkWBJyny8qhCodKJj5Kds6v1yW3GRRsLHEPvJPWHfto1B8WmdKhM3z7Ma59MJuk",
  "key14": "tk4xu49gyjkaTg4Ei6fsnky5fcDTz1UKSurmuhuhTFdzvejQsxLLZhqydBiir2HMEK8xr9WWanjQGM2yQ1NfCJz",
  "key15": "fPvM72f9gZQZ7zGwQARoebsXu81czG8SWtajRnVjVSrcUjKNzJXfbME65Wjx8ZBFujBwE6Hpp4zjWAHTYJ4TpLD",
  "key16": "2zDMjzLzhaExQbK1UDeBgDifhvbiEBhtMH5nnVeSW8bh4iKCJctvCzo2SH42Twz3kUL4Zsn9fSRUdCWT7eQjiuRo",
  "key17": "3LyTeBoKc2XA9YVbtXSjR3wCRymAjXReAybsiWu8cNRZVAeFWs8TWYVW63qmgz1G22kPJSngBMbGTJ9C6uk3uVbr",
  "key18": "4JCDSMteHZfKojCitNxKQjrPQ5sPYnfKnhjK2hqj4VrU2hGG4KuPPZuCfspvrMNM368tJgx3vqfCZmhWw18diL8c",
  "key19": "7bXMt2VgDpFbDEG5pphk7s3B7VonWBB5yoRbB8j2W1axbNUbFPpGiZuVaTex1eniCnGqjBwNRi5isn1LemLMCMM",
  "key20": "TNQVEFbCdxNQDuPh6uD3iBPsYkGKxKPp72WYgyMkXR7KcdQ3ioGUHHWC8pppdZ64RxufX31FbLnwkzBKmRhjmsE",
  "key21": "3acW8ukt1FaZyLSvTN7tuG1KgEmEHE1xK4yty4wBV4EKero2iL2214YEPY8GCGkBCnwo1eUHGssjkPgcwDWf8Sut",
  "key22": "4mcW73rSBer5PbzndzqQzvA9w5rqvNsCixbJdLEtS4Up5Ehq6EFQtDWnHPyCijPUh8n6ra3u8umNN6iPxzVfHsoq",
  "key23": "3NSi1DRXJkdRDoaaDgPTs599t3AMeMViZ4QmnQwAU9awaF3qwSyWbWa6XhjHa4timwJtGEkcjyrBTKwkqG4UVPKz",
  "key24": "3Mm6koBGfcbGFzEyECpTNnCRzASZvbufXLs9VsJgbc9WsGqt7RhQ31vTA2QgaSiUrd6NWJaZ1Ldh1MqmDDUtLtXS",
  "key25": "3eZJ22Vdurd314dRan6atFqcvp4JhcwHXwqwpLjQYRwfPFgtHBpYuqppGnb6WiqeEPUQyd6VUMiGRhEyXyjn9u4b",
  "key26": "4bhjufQjXsbnNjXqjUNXg6PBZAcKp3hbFzZb9BUhQmNsmF2iiSUFMrbzJr7QzuAw7UnSaHQbvwihMiXqSeDXAUPK",
  "key27": "4uYJCvMgSwhaZdonTxkTubbbUvoJV9pkR3PoN1j4goXbVQU41hQHSaeZfmDpbKqCD2pRRpAuzZa9uRcLTuitu9ho",
  "key28": "2UhQTCbS9BtmRtVg52S5cy3sPfaJKzCKKUrUENd4N5w5UvEDQWxycBgJKFkPH9biFNcfGna7d1mtNaB8JbVQEMuG",
  "key29": "4Dj5fL6B3F3vYb3KvkDHbxLm1XxcR6Hb7tx4QY5pzpyCX8Zer3H5YFgNGKfq8qCseyc8iHZfuUcnrdcSPVD9JC1x",
  "key30": "5m9pJctgmbLAJSr2tG5aadNNWGSj7qssFPtx9yRnY9UKjSCApyTbMawTmFWHQqeVHsSZxae4PxTbnoszbR1y2XZQ",
  "key31": "jojU2zJTcNnDvmxaFR7ZQRpnv9Eg9FhDJSkWN2yJqttyMMSuGe9RkbBgY2aKHRLZtFQdToxS3kozB75y4p9zFFz",
  "key32": "5NHrfBuUBSw7GLSpp1FPvmdyPWwLwiEsx29DzZJD1HeePzQYrQy3rJXiKBZAddhmZemeGutsYCNcaQm4S4x5pbyz",
  "key33": "5gyaWJ6C6zBVdbCgCWLb4ouNd7Dbq1eqnJfh6sNtvQh8d3TGtMa8Ff73aKiV9yCFvwsNSUveJmPnxMcGSPX241C7",
  "key34": "2hZTb9vighf4zcLWajpmdjLJQdC47hGTraCys8jFmLYu4CPVdhBQC7gNYSagNNMF474D1dwcPYy3LhmUAjJcHmWD",
  "key35": "HZvoB8CNg2qT9LyJ8VMVuPoqePAd5vw7fHkpVQWZXr3AqxX7HLGAn46izBk1wrJUUgi15KfYqFsK1khv6psUTB7",
  "key36": "GrfkNhzjE2LiMcunGNd7ucPPJ2VippzoKLnBvgP7Z7WsC54TF7PsjjarYueG1e9X3ZejvkxccQr7sdcpeCMwThv",
  "key37": "4FGFsm3ehzG7hoAXVdeZnaT2R7UPbNoAUpaRcfa55RCYU9gqtQfWZj4hetRjVt8ubTyRkpptJ36ajSfbTXbN5jdm",
  "key38": "hUeKrQ3GRFhGrudT33RnaNcLAaXRGeF9FjevwsozNeTc2BmftUbMoUgLb1aantRFgJwLJ5jKALH8E39AB3UVCfZ",
  "key39": "4AddvcQjKNyqpu6CC7jXvjwwFaP2Tw4pBjVRfzKEKGyRzbCcmUuqTTtyDLRT4gvfQCE6wDatzhbifb342Bw1d3dr",
  "key40": "3e7GvVkqv8drEL22zpLVFFSERDKqLy78icRB896bVkHjwZum8oT4rbZVhTf196DAtqLbSvzLpD2au6xgiGFC4962"
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
