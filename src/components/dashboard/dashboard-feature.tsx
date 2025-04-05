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
    "4mJSepaTECBi2B1MQruBZuRgoEtf971KhkhnL8rJmLR7TovaagiCV9uX241dJyw2qBBMfw9qhM9b6PkrfBVfoydp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ymmRxogUuKvzmwTxmzUuFkGj4dtzVb1TUTk5DgrojKgin3am2VVdNhmmgM4MnM2SYMtSpZ1ijdvVpksSpTkHmCP",
  "key1": "4RNUY7scEG9XdNskXREHCgXcmH2vs4aMQYhCZw6p9KJav85tT94LJjx8T8gjQcWesT7p4xt3YqkSwcRhc5TLmDzb",
  "key2": "2KsD7qhbvKdPx7Bhch6x5RYoR5vUvKSwedHcJ829ybtCW7Hzq4h7UQHffUZWTxnLXAKfH7JwdXdMiDCRBRhZ2wcC",
  "key3": "2UH44qLMLjbeQafC3MG9ZTN2cfrdwdFsa6cteVT6qux43wDiCzJ5WEb4cvymGqyyc1uGNgH7KvQHH7HqCGLjA82M",
  "key4": "5bNxmwFxyQtY2oFPGSMmrJPNcjNZAdUdaSLDkVTATPbwgKVfECnS9ECRV8tAT1UDDJ7p6b2yHGd3xd4mcYcU4Csg",
  "key5": "5Wvd6wzTC9uJQySVHEmt9YD7PZCVbiwbKoSZeEk39tVCowmQJFaxAvcBUEQnXxhXio6dxTTB3FGx3XxDjifhm99W",
  "key6": "23NcRri5MCFuVD2u4w4ahptkGLkEN9ff2MSwwNqNGjarY9GDgNhL6Uepqf74HXXSbV137DkFj9Fgz3B8uyDGff3W",
  "key7": "5GxLRX4PQpbHK9faJKA6z1kXaodWbTPCUg3KnZbSUJnP3zTiPkhDT3HgHunFfKrdSxLuknAo5naB1MuWdLpeG7Pr",
  "key8": "5J1nZSdn6LJAA5YJM2R6yz6nmac4MxgvrFZYXHw6dBTHmwmQTyw8Db8XnT3U6B7dSkfX3YX8XUvgnSVvaJ4n2r3v",
  "key9": "5tYwgdXBmFzAtdcmG19CZNeGbekxZkCKccQacrr7xejcLhP1Bv8Uc5YARoKAkUt7H9nynjp8cgF2TkdoG7WBcpux",
  "key10": "bRwLCFUJqzkxG6q5KGcrXHc3SSiJSFmgbEcLR1fu3FRXjswVi5rmerQuWr4nqw4sygeDr7ua9681ibXfCqLYcbN",
  "key11": "3okEmE7kDLAfC8Jato1jLka6hPB72qHPiawuMwpB7iD4puav9cW3nNAZWzGsMTXF886xjocc94evRPUcc9jBrsw4",
  "key12": "4xVZNbB9EFEnmsDtVmkuCrVQf3P16R2x58shhexhj94FYNnvsxeQLYvbeZjjTN5ZZCAF8EAvsyJ6usVvLWkpL8J8",
  "key13": "59mqM2m9vkzVtMyLA83JDTU94yUGhY7BTbwg1fvAr7wj49nLbj4EzbrNSZbVbJUGKSe228vKPqsYNL1fP5KCAeiw",
  "key14": "5ErA1UfZVYRFN3ZCyzzE1iPvamN5Xf5ZW5fNq2gqZqR53NQt4ChWgUkALrTquofzvGZJeeNTzLB24XQH6HjyV8WW",
  "key15": "3ccmcJLRdHwTjLBCEdEJwvmmXVgoE916CasHTnCV8qRwd7P6BupuKKsqtuPw2VfK4DFRy8E7cVLqueZ1Yc96g7z",
  "key16": "3MwpWcEMN7EGneykWJo4oPPC94bQpn7rHPHbpq75HSGLdefGk5YCe42yyFRStXz9zEhekb916UyqausJQQMxhGDR",
  "key17": "5BgbHbZJZUpdgc893zJiEvWQj73hwCAQfcdUbH6UZ63wh1SMYiRZRwqdQmnWeEaPNufTT5WKegRRhqJF9m7rqcAM",
  "key18": "sEGCRMqPzazzqyCX9h5usgwCCxMBjZQMc3S2PU96md8TT3PdNjMz6fTczAmnLw8wkaARziv6nhDy9Uox4K1H7E3",
  "key19": "7ZbJWM2wf8U7aRPvuW3AdtVxkiFfxSsbZfJsb2jTMmky4ZF18G1gDjvkBhgMKzdivoxjQHNAERepimhdMXP6ZNu",
  "key20": "2Cyon34XVizZE3PKKGYjpVjMBPg8JWhe3c6Px6np6WmUkqG6zo4iFZSoUwK9DbG6v1U7Xj9GnkgjRebHJRtMFJER",
  "key21": "4Nj28RPJqyvZRmVtoUN4vECJck2otS6J6n4VdVMLuCaFiXpSNTk1wSXMBp2y5d4ZEfTjhjZM5j2PWped6dN2XoaA",
  "key22": "5xa3SGycxUr5LJGh2CYbwWqQqmGwZRMmYY5ZKEZu5yodMgtA61HaYF44aTCu47LRVzCagbpzVahF4CkXaFhFjZYh",
  "key23": "3TQu5qcq3rfUeGcEys21rSJnVUqjNWpupNQvzNACsWMga7CqGWaoUkLbeBsiXCSW6DVXK3umYa7hdhawhxwpL5Br",
  "key24": "2nvpm9mqW4mEEKxfQn3bMBsbtVcCeRM1yQeQsHUpy3h7qUoXA2qgRt6CnW3reTHHPQQabsSSmsXpAC7ZAcr1NBib",
  "key25": "5DpwY2MwNvYCUbVZ6NEZmCozuAPENtYrfwYL3eR5UmbgXmUyXk5eDf39fhRYBYxeUfcZ23wHGWXuxLFqk3YDaUHf",
  "key26": "VJyZdVk7m3Nv9vhqpaEDUGLPkhVA7VTrMgMVhsCun1w1qCZAW2XFKCGc9hBuFxT9mknN98BJq9xUC4iohw71zgg",
  "key27": "wgsSPHqHBE1iYmaNftpTGWizeFop8j9qWAemRqmAb4p8ussEvRyfRaTQSKtS3qrrNysEXaqBEYPDeaovQACM4eD",
  "key28": "4J4d9h2X9wGcvfwFevHU8nX5KhM4tLQUTKzSdYx4SVav4Cn6CbxFNPHQ837yi8Jr447n71WVSPrieBz6jaJtzUuL",
  "key29": "5eDQoup7r8bZVH3Gt11YPyYqDgeuCPar2x6411i88SaJ13vsvb4FvY9ZHNCftifDzAbUA9bTPcPZ5NwVkEW4GvCq",
  "key30": "2YTn6CGHaCUQ7eofETfvMbQ44SJpgoRfGGW4pzDKX81XdHZckxYZi7wSQzdPzhoSQBFoXb5nDsMdJTEtQh6zj2rE",
  "key31": "4ErgG1Em7xQiXWMSwUwGHWK8jv5r1Y1ahT2SGV1VYGnyAjdUz89CXe1JxT3Q5iAemV61YyfMQbjZFiakX8mj2aqt",
  "key32": "2Cs5PXAQxPqz3ybZpaWtR5mvHTcLMV42Be4RVQZRA3KXFsLWzeqC37MfVhdmJhpXzQWiP3fXsJvNLRdKzVhoKRuz",
  "key33": "2QtBCASfF9n48vDAekGRWxf16esxMAYaCi485kbCnF2sXZ5NDtZN92ovijg6CWF2FuMLLzqLxbbsNrFJYfTS91Nf",
  "key34": "4XTokFdhQgZYKtaraoXTDQpbWEW72ETBhKGvULQXAbhkf1JZRw3LZyr87vRnTvCULs9oRF7Kw7erHXe1iiPB781R",
  "key35": "4oYVtCPuveDZcoN8xFHMRxumzFFtCGLyKBthjb2jbQEV7SNvx89Xz6n4y1prNC3x1xJzqkYW9qaEmgWQvRKaAdMB",
  "key36": "2iPhc77hCikPA8G9KZdGMPiNGhGnBtaLmLpDfpYHQNF1ihyLu9YChFcJ5CKNUBRpWPS76tcmn7RFK19tcyQvQNUj",
  "key37": "XgmnZLRgPMiKKqc4C5tayPYfghKFKbDqja2sveDJnMqogJCpmJyFm8oXvwM47EhSoxKnCA6yRZkEk2jyRSG28h7",
  "key38": "2zjitVB5NAQ82zaLR5vzm53oXryPqTJTaxtwfLMeJxVx1Ve9qx38j6gTMij17ddZbQ198CEBEUeL7392y1Q1N4tr",
  "key39": "4x74tCjBgvT19x74HBvDWVpT9J5dBDhTfYELbC6zcvkSdEZZ2k1jDchk9djF83K4RuYi6CTTVNVGssQaWTN9Vab6",
  "key40": "3kbuKM6FXRNrXChrPUcBRimpsEyJKQthaA7VgLKvuuEjx1s4yutDwt17KdnkQcLaMg388KBEcR2Gbsf1GV6BH3Ze",
  "key41": "1P1rTPBzM4hBcoiy8FRexNkm7ihXja7a2NHHs5PhfY2nGrBAQZ8BJp2TkTLSYFLdChssc1kRGHnJgQPZKpJKA4K",
  "key42": "3s8S7qwj36AyakA3PAkutxZ4Pxb7kDnnJ5PNrwWdQpfeHfdUatABFxf8ftXcZzZNHsZF8YQd6DaaZK5ErAgc95rD",
  "key43": "5oDGUChBTfpRP6qXj3FyHgsTna3s9r6a9dyherxqN8PGSQjw2Xu59DmZGgTAUUcAc71GpAvSsQXvxaYuB9SSB5gK",
  "key44": "4yyAwTU3u2rSgexUKUpd4uPDw6xGCCwCWb3LoxEXnB7rLcfbDXbkQxifHRrtg89FFqMEW3s2dfMCGDMNx6uamK3p",
  "key45": "4PeZL9PNCHnZ5bSqoAoDzxwC4ZUhrmo1r7GYm51dTsMs6C8fCc2eCJJsvUZybDf1VsTHDGT5VbcNK776NrKeSKVN",
  "key46": "4Hhpbr6xFNJXZQdcau6GmZYrUnLc4EG9VtRYTx5hP9vSeBR71iz91FMyhecVA3kSwJuJwvT6sdxd11kN8LaGeNq8",
  "key47": "7dUUxHFfkCLuZNNxFRFfjjVZEPkpcqx8K3NkDCDheXkKZpceBGAZTxLhFv6hvkDD5LiiN2i3hd5VQHia3x4gdKR"
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
