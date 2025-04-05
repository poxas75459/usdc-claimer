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
    "z6fd5M3zBDowkzYN7jHAzZqEBf6JY7EGgVGdjPRvbLg3otQdYbmfDidQ9SuEjw3aacNLsRN43FpP6xMEkcZ7jVZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3n7as8BEJQxDGkoYXjWzWAAcVH8LgnDMdytD3xojLsU85f68aU1UvxWFgv1T7f92RTMnZFPu2WLkEBG7Hu7aJ7Qz",
  "key1": "2paN39rTsgSSgntkk1Bh9t3zz2z6NFJcPN76SCGNE9qY8oWcHxDtDKm5U5pD7AjyRpqcSdu645LKL78QCB63CbWJ",
  "key2": "2cP6bt5DFFKyQNT1Nbh6r34VJFZd21i6biaDsY5DGeR53xymLs6QiDyNbjjZreYtdfGmcfeL3TSUsXKGWHVsCdqK",
  "key3": "3vgxRUkXdXyRQWbVY54CiZGaEV4ZkvjuK3vtCSTF3Y3GRbt2Yho4MCyf6o9XYqkssynvzqWVLGthyHgsNten8QC5",
  "key4": "5MW6d1Sj8kP9aSvKoxw8z3qRmkdugZfFkiQ1MR5K3zbWZXn3oPLm8WUeoVCjQpuHWB4jndWLp9XiqQe971TtDYi2",
  "key5": "5CS7nVfvc3vZ4q1niQ4ffiNNeuGSSSyW6v1cCoSVCRfbeVQ1LtceiZwquqtcpyJJaudPNGACWvGNn6FyVQBYekbh",
  "key6": "xs7CAPqVC2uZeDmpYmqR1LE9fa5NqSJtVGkGCFYf4xcZ4GEotXuA4VyQ1ZEXNFbrJpEWAvuZtsuddSG8rrhqcwC",
  "key7": "1YBZcWwt5t68pVrGWSpnSgeGBruA3ZpZY49PYL9fKvYuVusBu7HzANjd1zbdWu9d3pnWbCVxWEeJg6Zsnzsfu9E",
  "key8": "2K2ymXKomHF5CNx2RkgtrFita86LiRQymH34Ltfg9kqVfCVjj3mUa3RffYyDzUKZpDppDijHcPTyYEvpZmTesKxe",
  "key9": "273cchHxts2vqBVFcEmwiUj2czkF5zTF7DYkyQHYS258Evp7q8KVtJ32dHDzd2wNygeAjcAwwFpiRr1qT8Rp3CjN",
  "key10": "3CBGej1DmeMLPn3yQ6RX9PeW8byE5R5h644sVWfgtAuz18ineNbzYR6x7meKdt3HFDUFWt8A9S4moNnc9ehrvPJ2",
  "key11": "2qhe4cviE5ti1iDxHV4fp7yzEacFANDpKjvtT4JKRDixFP7zxbMveaf1sQS6ZWqVECKkavHBY8qAziDX274KQhx9",
  "key12": "2peLZqyADE1v3oPXq22bRHVeyvNatzQ7VWkC1fU7evdJbPxyvSC4gfsv13oLiDfHL24nEfnodmURN16szL6v8pT5",
  "key13": "5CwxZdPShK5wDxePgQEtMYgiYCJtowT742cp4zje8Wvgz8zX63sCo3QW63wfBC27Pi2mCC8ZAwcJRcCb3hdZL85g",
  "key14": "wP1L2AutHT2AcyRtZ58bW6C8rqvLyhJDA8WUwTG39cBweZn7u4UGetfCGrqEH52zgVS7LWRZGJvfoQVQs2vZABp",
  "key15": "KYH9dY3AbbF2MAPs2iTDcrMZkVW7Tk3Mu8KxSpGDq2G8k3Y9Vg2iWn4ZYBQUHnAKHBTu5isD1to8pMD4KXsyrCn",
  "key16": "2puz2iVLqSTPJWwDy5AbNoR3SBoLd6ygF3VfdyvJTM4JkJBTba3RQBMDMr4o4B6AAP7pLhSyqHnjHTTXCPQFWnkv",
  "key17": "2D5D2kqxfDcSavJomaiCM7nSLBDPr5i7vajzNuvKa7NZYWeJQiiURQU31jQPzuBCcXYJ7GZWkFcd6QzWzqkFqrDT",
  "key18": "2REabcSYBZqjX6DUVSTVqBnDc4x5wh1ZVzxQMq3CVwTEvL1y9JcpqUkmbnmYyZF9uRoPZfbR4mYLqvPDJttbWaRh",
  "key19": "2ADAdjS87MuFJHXAaTaKzbML1hrWq2tKpdFPju8R75VuitUBoRStDHZJRtTSCpdHg499dUdoPmXXTTHmbh5pRx7i",
  "key20": "2pQUodkuC7d3jYUyyANeTxp8kg86GYJ44ryKXsPCJ79c1TX49oco4QaPU5vBEqW9a1aS7Na13DxXkzodzFqSsUrj",
  "key21": "3E3s16ssXBUKSF5BwJfibA2tV315LrQBN5oRb5ZFdJeCy88Yn5jXKUsxJtzEQeUZHviqhMZqURpzsyxG2axesiw1",
  "key22": "3jBg2eVvVE23HiPV8JmFZqm93SnXLkjkQpCrXcHcGhEATS9z9DnsgWhHEfsWPnvYQfD54uTFi7a2TV32AWhq9Pdn",
  "key23": "3jDd9BLWdEmARFkziwTPmpfW4D7MmsHbUabwpzGPFLewU99Mzk3cjXGLpePJ4dWLeSicht55FQg7Bgsu11kajUvb",
  "key24": "55WduJ5XuJppMeoaZwxuK4dj91Mw3nVyY5CsRKDxZTLHrB9azfHcE4J6vdH3NPq7YEdLu8ioUryNdvC5M8fH7M2N",
  "key25": "61qMxBaLwKujE37QBqByJnjhAxHH4hMJwZuXmyS9oKzkcF8DyH2A3voWxzz1tQXdLYzqbXjx8S3TzFMtAdc2HkJf",
  "key26": "2PvQfVkuU261FwWpws6ULCsvYVvdLwYRxnCNY63t3BX62kLpjtbgyrt5vfcNDFiC6gE83m8teurBkKmzwCN6aeRK",
  "key27": "yQSUzfzTjWZ8F1yz1c2CeRWXPNDK9vSuA9gP31Z4u5o21NhL79FdiKxFXQBe982iUbRuF9wYeGvKmyN79NNbAtK",
  "key28": "4hVMFYNiWZaQVDvoL2XffrvNTWtjfG2fPBgbaB9av1PcNbAEcwsgBmG3qQsZ4Hxmn1sjiXrzkPWNK8eMmFdKJSyf",
  "key29": "3SZRMCkoe7qvjQs73wrNKVhMBosj5GC5hVyKNEdPcSkbZeyHFPtsfpA1fo54dbsiJWarsF5Fc7DGJEANNZzoXguk",
  "key30": "ZURpof3ZW9vWGnd4T47mABex7MxpoZWAd4KsPJyJgEfmTx7hFqaJdKQvDWin2AVPx9otdkESBVihZj8mR11hp8N",
  "key31": "2BUN3HYRCGuhbwsTMEtLuEJGT1WmPt73egBMdtgVuu8gaoVHj9KpaPs5NftH39yCsjZ5vKsLjvpyrov8ejN3JsFB",
  "key32": "bmmWzMtSbtdvDdJhQtzKLW8jQJg6hnWAn4XXGpqd9cx2uVXAaHAURXmVqfdNok2tm16Xyx12ZtkpWRtq5fCHQtR",
  "key33": "4fEArmDZrZG4oRycLMmF7NdZTqmUvggNnaoma8sHq5uoaKt4rN1nGdwzpYKdq6ZHupfhMXxyqLxj7FsN4M448yyC"
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
