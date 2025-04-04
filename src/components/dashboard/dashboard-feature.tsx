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
    "bgTtTCcsbwsPMWkjFzD6UNFJ6mBidGs24chFg2EauSGAEaojoiUfF3dfFVFvQLq17HZ9KdbqoSP2pzSo35Vi5hM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xGRRGgrpmWYTKu7e9KjFbr53paeZKbD3deNx2vTQCeby5cvTHNkrQuLeisRvdPQJp1iV6d6KuotevNic5yX4TXB",
  "key1": "2XRxEqmg9cJMWkMyDGrNFPB3cHmG9k2XU3RRkt4WhKdZRXYioLcmELTdsR2QvQp9WMXNtqBM3WRM55XQLJyAExFA",
  "key2": "2Ce672aSpZEGx65Q7hWwnYVwsT5dYnw7jU15fmHnLnpZKz17HfVYEvGwvHkKQ2iwhUv8BzJN9mW7sDvGxQYbrNQo",
  "key3": "3z3gJ8kKbARk2BfFJJ4zusmrcYQW5tDsyPeY2j7fLYuHRhTeSPpj7rvbvpGRuznpuGZKwr82djBz9Mx7suk7Dmws",
  "key4": "2z1ojfiNZm1ntqwpZ8HZLeMvipYrTLhqLXJVhjpXHHGDmA9vkTg1JfFEQ3E8LzNom5YyrmBJfTA8gpwpTap133T3",
  "key5": "5sgn2tzD1c8DJWkwUgvkVndaFoEynsrHmkyW7QCiM6nNRLGXop3szN8qnn3T4iDUxpUp3NLnwgsX45zJNK93oGFh",
  "key6": "4ktLwoJLBp26pHcFzaHAWujUVTJ5o4hxgpkqLNwA2vhDSX8csAn9SkSp1Cq7KmuY2jTRJ9EhcaMwCTaBrA4kiGs8",
  "key7": "3ZSj9yE1pcy1dTLBqKx1Fx362Yq4gVKDcEGQH6Fcu18pKUoVx8bgzmFGEBDCrjYw8XgYuk9Z7E4XpzAUTME1x6S3",
  "key8": "uekTdANyW65Tdv6khh5ijjfdT9UdejGmkC1FqBspJyjt7ijbYPNq8kQaV2JfNzXcCoegczDKrZ3kkakb4rY4ah9",
  "key9": "5QFrt8mmEcYDuNcoqAFiqAxzJJu4G2EbHmZtw525YLA2UqbgYgojJrCrYjQDMhKVtNif3YMqJEiKnRzAyCMbga9U",
  "key10": "4YrzG9dMFdCd67MvQm2QRmSQHiwmraGkNYHBv2ugCziwQAtbwzHApcAWWYfwKAYrkghymhLYc15Wy92Ydn1BN5on",
  "key11": "5fVYvAw1WCGMBJzfZAwovzFbLevtj4ZX2s98STQuFauMpPgBNcSpAGHhadAXntsfvW6XEdg1PhxbcJGzzoRTjCxn",
  "key12": "2MzRjijDtR39SZaoD8EdG62gQnVuvqCFwW3gNYGA3CtUq1ue61sAsxA4tQUg71wCqiwAFAF3tkfbBDdcNqduWm1b",
  "key13": "5je7DAPqgUV69ybF5uqDWV7aSnsReo7ogGuFddLTDtms8CMu8eYF2MbsskVYrWBUxTPtsgqotRSYxKK8NhgE1qro",
  "key14": "4xgGBvJHTX6KDQMLw9VC5sifLeASaJj4tXhWidugC2uWQqotK4MAbpLbWXL3XBqcfmv768ac27qJFWoMYbFanYH4",
  "key15": "4BnST2wXoPNHMiYfB33P546y8ATvewggqYdARVZxXqXJCzdQBVT7V3Zn6qtbVKPnhDq3dFpkStra9tUEbmtnis6Z",
  "key16": "4ZKZRoEuecrQBM21PxFdepMSE4CBY4sMAHMx5enfeZ7iwqzwG52dE4Y9g6HWD8svSq2umstnSoNPZCHChTgFfsu6",
  "key17": "SDywRCKWk5ychbahvk4ZXFcV4Rd1nUZRTh86RkyT9eNn1Mrk5KiXrv9i2RRTDpEHJkqmqYkDEpSgwD1Z6VBbYLj",
  "key18": "3qPD4i3CCvEiokGERX9QndBLArrdoYQw9r4jYx8bc66s7ECC3WreX9gvpCFXRk6GBJeZnjhF1h2rZhE8bqqdWkPN",
  "key19": "pcgYtAKVKCiTZNq5sa4EyFeU1dQTLjak48MwRCqw5kUkPDaWM1TAgCQPHWZLCf1fp2cyvU8k4SFuScCcgnMvrb9",
  "key20": "5w3PSpmAemfCoRroS93uPskvVdkLwfw3NPerpEM8UdCWPxNQQgE3KeTBZkNoboukJ1v2vwib4dUpSkujKpQhtz3k",
  "key21": "5Jba1X6uYRsebcJPQML7ctoscLbDb2eMzsBpdGXdEs2PGRzPE8iVDKYnuEyTmwzxMmNuyKNYhwb8kzd7Zn9PVMee",
  "key22": "2pPMY4YePwtjvkJhwt5ysTpYcTgM6Yiy4cNu8Wk3zj64oZs6exShdssbcECiR7fNkQFRrLoHoHStd9i9dWrjAzGU",
  "key23": "cgJ6DsHh6EVjxYfkmQAEJES2D2jAjZGVXTmTUC3gdJMseoTXLeHSRkGwpfRJuGZqYFVFry38HFtBhoQDAtHtjGU",
  "key24": "4fiaF7XbXQ4FHmWUDhnYPaG5N5X5YyRF54MLg9Mx9Np62CtASRcpd3bcgX6apDKvn3CKDriyY2hqfs7vkyRAQyGi",
  "key25": "k3BVMjR5qciBAWCZzNXqCw75LiwbnWfE2SGtPBxdGhbFGUXHRbFdnBz6naXB1ummvQuac2dZ4JGQPBGP4xCxrYb",
  "key26": "5nwcdXNShd1QjqxfuoEfPDuq7p6Gn7WCFGZYvu3ahuaTxBsHRr9a7oRMgtihfPcGwkP3NHDuBgR2aDJtysnrJoPx",
  "key27": "2ZW12WpaeB2cRSMGadDd4gK16zDJWYYvtwd34qisGYKsNhBm3ZEssfyrQErS3FUDw2EWPUZeiMdNdKTMfHGvpuNW",
  "key28": "3jauBiZaVEcTCECiCvChJESXXPrwEz37LJrrMpWC7jtXNAYsj9zpFdePc2NpD52yBKMvvJik34hNhL48MM31yk5a",
  "key29": "5idhJdSrR49mGcgQ8z3gXDw9aVjAASzxR7RTDFBsjrdQWc22dxhzYyKiLUA8MBtFMEksRMJ4EFNSUdbYJPYzqYfK",
  "key30": "51u2cNCtw9nr5ZaEMp3e7rifP1zueqoaTngLvU2AvGvP15TCAx8nqcjAjmearBh6put7EwcDoKwxJUibeYyYYktX",
  "key31": "EoG56hrRmW6EuEjJXdsTkwLyzBarPBYH3VygoHS4yoVvjKzwPHu8NqCP32ZVfoanDkn6xrTSLsbH161gGkSjZaE",
  "key32": "Lo8MNsK48v8dAQ1hKAogZQnJX1gd1XRK887YKUEJnBNw52jJ2FXEYV2kTgemZny7Gufft6ZXD5tRVcpFu4scfSs",
  "key33": "612AuDWFBiDmY7rJz56xnyrq79k9u3KEuAYgR7TkcMyQVWckaRDqB7JMbjcYQ5QdYiFWcJPhEab5enWoDFQWEHSm",
  "key34": "5GNx9dKhxEqRkFCHRSm4MPQsNhDjGfg5ZyxcAmSchoD8vSFamFfbrDqeHR94PcD2Nzg4a8rfW4wwUMbBujffLWW7",
  "key35": "4uZaEXEei612v7YVvuvYE8vyW1pM4Ldooo3CnGktg6ZUhHboXLXrZPtzWovMfYoTAmeuf8fexpaEMmkqD4HqKXXd",
  "key36": "4Kmbtjn2NAYnxTmp43yKW7kuT7PceS9wdTSojSttkjPt8WLrs4rkGYS2z6e7jmjE2u2GL2AAqynBm9P9qq2aZJ9B",
  "key37": "f8ckMCGS3uqWoJifUw52HQ8fJmxdcyYvo2SATcmRgByWspXh1ebs4a9gh2nKjESWxvTCrmgUU2nBzZ9TJPiECQC"
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
