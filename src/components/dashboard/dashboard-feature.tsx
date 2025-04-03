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
    "oh7nwaLDQrnfJx53yYNSzrU1KALEudqiyJCeZXZeeHiU4ogbW4fgrq14ZVtyUrresk5GM6oepcsuretQh2Bp9xm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hDpPFFR2hkPb4QGmxZdiyFBzL4ysVZZhQEdLD7oQSNG8sCbpmFPLiH6DCKXs1N35snuj9E2MSRbHxGBSnfAjFRC",
  "key1": "36iEoZQS1f32JUrG8QFsxdDeSPcK7b2Tbqw7WKXMZFhgYVDjQh5LzUBK5W2u68Ebu3UHmxasnZuCNzoXaXzjviW9",
  "key2": "5Jn3NZHmvf8i3QrqEiPiTEjBJnNUMEygJc5GHJq2qo4SPFyC1i4RS3oP974o4mSxAWVAQ1KBxtnumE5M8bq1tmsW",
  "key3": "4gkH7MMdhdpjoQJfGfanap2TGNN86UKL4gjt7N2FP2D8cAzfLQh2ewPgcxeWy82kFN2dnu6Nu95YmiRY1CbkcypF",
  "key4": "4JzmuQzLjPjRJyVT215y6YCQi7oGJhbv946MachmUkGcUyjXYa1Vbsq9bZLb2PMzuspA2XVNt2D9S8hEG5hmqLv5",
  "key5": "5NTniKfSQw4SbQeQ3NtHhYAkFzPCpPPHXUcsBELYstWp4sLJ4bmMq2mfzJBtD6ihFUbyHUkE6iBAKtbsWpMRTX4U",
  "key6": "5QzudvBQCjbmwZFY4dD4P7zvBzCxDRLe6sd3RYu3KzuKkEXVt5tBb515L2pxkmzx28WMFJzs4Yv6t33ZuF12SeMG",
  "key7": "Lm4GHXQGCViPH5uSweNcTEZNF271ZYuMpLP7iCW314vi6bFbUU9fc3THUoj5dadDHuGfhvV3GwHSG2JFuEEMUVY",
  "key8": "32SaSkqmvqaE7WLYA4ZwZiFdMJmhq4NWTigwYQxcRM3S73EkzSsiKVFCCN6g8pQQ8ZqZpRnHv2fBy4GzUajRrSsN",
  "key9": "3Spvs3JDys9iAQvZstkZNzGnkjPt9qXjwVPuq6Pgxyw8tk6eSvxNhmHv5iPy3pynTQhAxqEqUQmqqy1WY3GZvCdX",
  "key10": "3bkXVQEBGyUKbEG5FnHCPpTMTmKGrft36mgBj4D6Uu7nz6P8qZXtua8VU8ffcpUE1gn8RRqmcMkyPQxHr7ddAFys",
  "key11": "2wuiaCtyJRDHf5rrDzjWAeH1PGbK46xYX47AWQ5hzaRoFMwq3uoJrocMM3PzXYj4PtjkZ59wSJ6rxbxheMGL186X",
  "key12": "2AkBGvXqgVbinn36p5XeEsRkWgxAw6MW8Hz5BhvJtvo5YVnzH93ozYaum44zhTzePeAVkZBWqk7XQuzkf8fGjHmu",
  "key13": "2LYLoFne3T9mz1hyehNJ48stVnSS23LDeU5r8GD79CMqMRK6JoJSGxpR4yV5GCx4mxdxGXgezVrdSSJ1Gh6ooM2i",
  "key14": "2d73o6vYzw7oFLqUYrBEFM22qMHFw3exgD7cz2SJ7oyog8LTG1PX8Ufq1AZWRyDMfUKm1UwByy9qcfVp6tTdz6HV",
  "key15": "K48XaTBCPMccgXU6tRQxTdp88DKoj9VhCfsfqSM6P1cDNquXL5Yb96d3q4CE3jA2tL7vG8CiAotF8oYKVAqu4Xx",
  "key16": "4xv5XQgZGkt4MZsEaSzHy1EnV1g4adDjMFcxhuFWrVxzhLCu8awvBjDAKBYsK2U6vXtixtxUPAz1UrS9BrxyaYte",
  "key17": "4AUjxDSsCNDrRWoQCG9WpXG5vfBTQFwu5Bcf1BADTZxZf7nnE7G8nbQ46mDiZT2Cci9LMa9smFwUPY6mxVbmeFjw",
  "key18": "4J9TqoSinG3t8fPNAmsqaUFE7Bs4BgD6zogbDkgXdc7cRyFRejZPXqTW65CcvhRywK8tWxbFkcR5Uu3hd4mWsAnP",
  "key19": "2MAY5wJUYfoiymP7sMBWRjBAfRhDEe8tiYn9XGerdsveNbMjP54tr8PuDqVzbFB8kMe4LPBmbYGfJRfQP9JHjNi9",
  "key20": "4QjH8mBydNnywFZMFcyYjwwdmDY2pucwjvgk7fWx1kFBds1z69Bbpn4XqdkdSW7suu9PgmKW2pKfdTU1EUeSHp8J",
  "key21": "3XPERHMa3Bk8MxzKRyphNX7vZhUzHKJPYKBCaUXPdjq8QgvQ1THEtEMEe8hungMsQPcvHQBkL7qVh29xtZwSBWXr",
  "key22": "2M62jgPWv4jtecHyS9sbQopKUsz3SVevkjX55pk4qBacXqdqTSz22x4ZSwkExjyGyYcDx4ram5M8cbXzh7WQGd3Y",
  "key23": "1n6PFATvEB34ZJu9XwyqpcFuQi4W4njHs7DM5VPyats8jQ4rahcQn3AJGhevGv8kGtHLWoPGqxffTnPAFrZ7wuq",
  "key24": "3KY8hBLZDticACUGNLDvoMLjP6BCFeDqBaGsh5VFDGr3B59eVHrRi83asLaSWrQMEiJpobjKpJPo3s1oQuGLAzc2",
  "key25": "z6h3gKMGrgQS7udq3NJpwQz4xjEYFWpkot17USUpTvsJ3MYnKeamG5ca57qKyVUbjvywQ3v73bskh18yDe1bfdP",
  "key26": "36rqoZaTqFWKK1tYiuQchSJyjhfBKCrSXi5yspzNChsWDbvMvE1sS512XgMvfTxWCqX966KTb1ro3dJgNqy3R8ko",
  "key27": "35ipo5shogVYksfLWPHmh2vcDbHnG5cs88tt4EZJcMeA5zLAXiZRL39DFTxPhDfWUt4U6jyzhgesKYpCbwWscG3h",
  "key28": "csPRNh1AVpzQvA1umEztegzM5MRVEsakxo9WLjiqhnK6qj15TotnBUaojaos3ihSiuyTmLqj23XTh8j5xQDdZ1Y",
  "key29": "548S9bKWL1pvQfE22HA7hbuFyqw2Px7eGuY6pS1C7yHZCZh2v8auSjCwpv6yvUHQnugCtoMkLVKLNEwkDEDbrao4",
  "key30": "gdFA34PvuQgBjPAKkY48AMnQNZ1bWbDAv2kmEouZmLQr7dPqEjyjozDqGskvSK9HChBmWw5JvftN8UrR9CKH1S8",
  "key31": "3uu56LPWyLLtmiNgj4GLiZDKh9XyyfogHmLwHqkpn8DRUC67pJF8GmuiXjwG7QqzSHGZbMoGhhqNdWq12Q7sC9aJ",
  "key32": "3syZAfFUqZSi146Ph6A4nMTSujwgGXGiXL2o7WtHUW11C1wtDCJBV98CKKPKrcbCoPENXid2CDwPyLPgUZ61nt3J",
  "key33": "2orfBLocg8uvCEUthhJSy1gEJnY7HjzGMpwDoMm1b9xP3vrYH1Wn9DKcZQmHJsLE2Cex4AtLTAccNXnooQqUGM5J",
  "key34": "55RuuAVGLXtGbKkf5bwDU3qkLVN5513b7SE96AZUrUDmXUUKbr6PSpffsFL58JLqyrqav2H61iKe6vG972oiuK1q",
  "key35": "8M2au1522boTvtEgM5BvTwucbXad1eQiZxLPYc8XucbEn8tgS7tQYK3RdKqGNkKn4TChNvwip4gjKbbDdCptUWa",
  "key36": "31gW2tGoFstvRXKGXLxpUQam1JTWoDCFebMq7NkGsBejE6UbGeswgVG58Dvj4RUjeXXo6eknYUB8uJWbFoDN7Sck",
  "key37": "3UVshxfqy4kwpLXioqP2biHADR2F3iX8rkU8YCs4YoNueuuhnL5NmjBeTA3e9bajeuAYzPtH2j3HSsxexhwVfDM6",
  "key38": "2gbyxUz4xR3wNFkKrdJog4RC4zMkTabQxCEa7FACQTxdhhaxoeA1qybST29NkcpgLJjibimeidXkVHkVRjvrC2mv",
  "key39": "5Vp4MspdQH7V86qq1zDAECA9vdjC53HSVnY9SeGqCT8AAk8BV5hy3YeEG8SpYjQN5VHbCY7JzCtthR3kkkMsioxE",
  "key40": "3DKMGbHjr9GcAZ9NvQzh7GWYEr6gCvcsLTKNHP4mhW7KsZGcoWdrZdxc5YZypCRU6ZpFZcou6SiBZk3QDHjAubBR",
  "key41": "5uKi193rVrmhdeSpTVtSrDWbnPTuACKoMj41bmccsGbZdmt2Bacc7ggqKhvY6Y3w88g3xzy6GGWSqwWTTdDKLvq8",
  "key42": "56CDssMCEVrPuQFmsXrThYXjybWJ8ShBApQDHZXvxK5psepV4VfZ1niJoKULau7YVVNhk7qvspn2VnNrAWoHCzKd"
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
