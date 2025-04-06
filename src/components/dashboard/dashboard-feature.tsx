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
    "5gxggiQfMDPobpGd9t7PVcH3CVm1yJiM5E2P6qg1Ac9e2Tz3JVYqQeVgJpT8hqgmCVpYmd8Z5jdYxJzAJ6GdjZ6p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PVs6myvu2u3FHwfqRd4ju4vFCkYS5RDfmnoXH1d4NLcQyCB9ZPev1tqW1bj1R3g4afRcvbk3Z3g6gN6Z579Msku",
  "key1": "5w1jkvkVTjcNEm7DhWuZr4zTvksbd816P6Q1WZFJSg761QjcZc9ixuGtib9t3KNU1Yd92x7hbBsQr7drNVEpEa3y",
  "key2": "64FpYPwC2w5MiTRyUQbCkhjWDB3chLMAwoUgSbx2y5JreTX8bv2dc7GHDgZNaiTbNdWEu7cXy6M5zaMeyxtJDVdj",
  "key3": "3cE1VWsEnmv2tjznPQCjMBM3w8q2WP2wFH9hGB1TDqvi6rTfcLzpj8ppz5NemYWr1fmCddm5ViSTqePxR4PRawRH",
  "key4": "54PAQLxvuRMXxSDegec6gujvXpTHk2pFQkwnq2GcB1LYmmhhdXZzg585dNWgAa5wBH5syoQuG8F5n4zMnmFUGF7Q",
  "key5": "3P3F1CNwU9u5Jkcz8bep1zXWL5Z5ikAfrve2MPugVokCKxCJqNA79zXgdDxdfjyEUCKUhHUcGLmR2nnTnYcPKCDJ",
  "key6": "5cETjkx2ZomfdEa2c7aQqTNo81xXdoNhXMciPB4JLRkX1oW7ebX5KwT8rUNE3umBRSdDVrwNJi6ardnfcLFmzuX",
  "key7": "4JNeR6xZeCf1tvHLSwAAdh1tcCGV5DrpAbEEMv8iw99Ue16AEEEi6WoAcG5d2Bcb7xur5Lm6nKNuz3oPZSsCpJQ9",
  "key8": "4T6ZWMXPpTDtDY5odmGbwqMp37ZPA7ABcAcJaRCAnaJQMDeL7GzraNCXxTsgRj6jueQDSUk4i8GDgz5XTKBpB42S",
  "key9": "G4EtMkPs5Lc8cj6kJjBQmKPkBoeHua3Hb3fLuUGD3ocm9M6D1R6rkzh9Y4qE64AMwkrAJDFn8CBChuxYWFxrpKm",
  "key10": "2Vhv3FKnQfw9AC8mudk2U7ESuVC5rLpqs5NWbnnW42kZsqBR2cCQcaBJ3vLoTLKdYN7admWP7pt1bVwfCegG6iVY",
  "key11": "6vn7MRkvad7S1TqwG9NxBoKNZDtEjVtRP66buNLJqn4jAet4bvbibW6oGkPGBXQCSouizE5bDiGZbHkUrQk14fq",
  "key12": "36sK6h7qGbdmb3Mixib6C4Ec5aAX4Te5dUf6r1hpzHNBu4FcXpfPWLQyvLL8G5ZvK3uWq9m1Azh58nQqs7LzreFY",
  "key13": "4pJPAyLQM1UpJESigRY4bb3wP1bvvUf1tPDQbvXAaqYasYyFP1suWdosr5QiXa3FiSjsKN3TcwaZTegZ761xurqh",
  "key14": "2VWGHqWUFTCDgbjtvAv6kcDcLbyHH7z8GYixah1H71orLZQotYmqqNwPbzf5aXoeEaEmbSpn3WEYEp9vhe9HDFUt",
  "key15": "2Akgw3H8FrcFke57VcRGoNwpcppmpBGTocSa8J7cC7ry5SNLbWuXQGdj2SjUtetYW2XyvsoF19L4EeLBq3LWD2ua",
  "key16": "5DtZjDXXP2AdWQW4ZrHKHmC6X3mSiLya8vehy2jKTek3MijEbU2EByTeDB5JKBucRtQ9KktdUcmTxSK1mKu3fr8n",
  "key17": "2gzpwVpLgnqRm8s2n4odCiEGJ56wLQ2q3hAajyf4gXiXUNhhCi1Lma11N4vD5k61v3qE1BjCFMSjqqNXNnqZfPQP",
  "key18": "2hTvoL3fvJGk7xbzjo1EvpbsqzB8dmmmAqJCrPbnVro6oP8g2eRQsrCkfcWeh5x9ZRSfQmfs8yeZ1HKENpfBAx5R",
  "key19": "3NC7SiEHihaAkpHrMd2WbDpTZxkkz2uWDLEfPmGz8gZnaTf8m5JcmmSDigVauEzoLBm1teptZ6FLBVYYXjpF39Ld",
  "key20": "48a5V5M35CXMVg6s9EeP7XREWKvssTqBddGs9ootFk5Wxo34mifFYDKfAcaRCmJB438ANkJegW5wJK4kf9byXuQz",
  "key21": "2fuGnFrfbNFGM3aGNyasdbBjupAdEEbHfKHMEeZEiyRJEv1qatXTAaWikwL5C7LSBdmmu5bUxk33aG1ogfJPssWq",
  "key22": "5afq6AocQ9jZF7Bds2nDc7dztc2yWTtX33QLxg9T7HEVHWqGohNB6Rd5jvKdVekrVnwdxMGp3fGzJUT2jwdXP2vd",
  "key23": "2aBwAZkWVovq6iRa3bLsdUwMnuSzpacGjotyePFhGuwRF5Qd1rj4Zg7xTt2pUz5zZPKHK93e4wbkXskPPh3W2yt3",
  "key24": "2FwU2yYqESFDWKnsAoKCWHM9ZzuxeFYd9vFvhYR4ezVkuosXBsZ6hW4wfBnpnb9fg6uGWLbqJyZUPbwVBLcVCwjE",
  "key25": "Lb6sKrtFaLDHVVVT2sV7K3d8zDyn4Mx1y4KUZttfbtQ8LYnbG9a4x7JRKADnL1aSDXAbUPaooN4RRuuG24AJeTs",
  "key26": "4bqEPTM5YBzauEkEDhq6JiGewP1cvJKqfeLXPkxuczVD3eBRnW8Ggq64QNHftZxZeGGsNV7Jnbwrq1jXDycnbsGo",
  "key27": "21EkPUG5C5g2ah44Sq7CczWpGuX8Uxv9UgJPpN4vnJet2LoexBNv9FPafXwXhjvEMza8ohFXdhBzCzdn6qz1yjse",
  "key28": "42yP3k2hsMnGQVDD8Q3pNpp1BDfGzmxMiC37m1tU1y4wJb85Aia3oPsF4f2YKytwBDoAYxMbC4RDP1JMWtURPuKQ",
  "key29": "3j38TQc8j57H2ejqKq1k9NJNaUokrfJE4WZXLoiDhYaUH4NZaDcC1xHdMpdRHtkZcAHfNExVt6EDC9cYJjqhT6yb",
  "key30": "3qfw8tnDeG1uQNHwAmam5MkQSDYqDutCHgKZa6LpvVY9ARWQ6ZZQucCeGyebs1GzpJCNw727sGYb172oN1Wj2PQN",
  "key31": "27nayzbrhT1WexxxajVqB6NeCQgebAwizjPwgWxeuLzjLnLjGBXVtpgLVWhgPNLyE7FExUot8G3vJ9H432xupVfd",
  "key32": "4UfXFqfjjqSHQLVgzFkNdeiM5TeS8e4xP2pVKsY9m4nu1n3JVwKzM9PXD17XYEdbBmZwFqdGnPv9Pgf5d6dXT2bQ",
  "key33": "2DGP24TWwd1748fafQtF7ygx9AMEqAAzzVyCwMwt2pA5bvqHhgapwHjSZhmhbyHgzHzKrgPGxPJotHDiHMHGcgDw",
  "key34": "3pJWu1XpydKHDV4DsAQr5eE5D6vjPY1ntrYuQDL1dwLnHASB4vXjqN1okWRVZHuFMtkaS4SZZVe1gQUVmhopx1Y4",
  "key35": "k7fhpPmcPVKDVJghkeH7Ks1qyd4iziTe5srdeSi3hg8RPDq9waWFBGabPpUsRybKpV76DHgy5cAvSsKurkMs6Z9",
  "key36": "37AZTb9MhKcaD5dxG5HCcBQ1QrUi5n9L2dfDaELjqMjyCs2EgQgNAFHiNbhAWgHD1ETRcseZYE4NUYma6VN9YGav",
  "key37": "48rGgnyvTQFLeHoGxzkDCpJewkbLVhPkXuAon6Wp96ceKDPhHckhp8gWCdoUxam9QPX4uNVGAoTBGB6sD1fjn2CK",
  "key38": "4kXSkgtYegA4cXiuxJ7LUhrmD6CF3txKW7Tt9Mop4X6PhJYBivXLuq7FbmSqSxPqZudnz6ct5w9oDyuFhsgf5TmT",
  "key39": "3ZUPSyB5kxmP8iVc89sdLVekynRmb4LKYZAVNCMGwB6YTur2URCy4rVg5Fqx6UocEQxowdVNNaN7k5CycowT1sP1",
  "key40": "4kyL7dUHWHapUynvtx8bcDRW5C4EQNmrhs8UKeKkFJd8Qw51vwoHPEXbAmdMwz2DsBv6JBx74Nj1DRRZ7BVphp58",
  "key41": "puspUuDPQ3MZ6EaWiPqxnCpLZH7nrgU8wrKGbFvuQWEngwaqrTsDD52hcFH1g1dcij1AiSj9fp7zmoY5yuUka4w",
  "key42": "3ahtgJsVLtjuJND3oLEvU2XJbaQxf8ERxmr35tHCLevrPH8jsjYwqvY6LfqSocBF1JkBTGDRttsq5dYqZR6Dgfe5",
  "key43": "3eQA3JbKtmEWt6FA5pFEru7DV8iVVPmWwRuUU8QkgyTaBy5JErToA6x3cR2Aq864NfxpZo9bTsTggw7QqHZsHCn4",
  "key44": "52yeJPjacMXR6vRKPVn9Y4eZcJZ3QgjPVBstS2StcrV6m5UHLCZmxziFQEW9N9mGMvyxxm86oJBKz2n2BTcbxNdC",
  "key45": "Ar4Mpu99dW61pMk2f9hykuyXT3CAVtHCbdJUVomKQPSm9PsWSG4ywE1kqnhZViDF8Xu3pEe47CdPBvPrZK7hykG",
  "key46": "61yhMBX4FxHKaaMSSFuyNZCPn8V21BewKJKA6WrxbejBYTSmSaRubzXRL9aiBRMC63LQm5CbaoFH6N4xEQ4nV3xW",
  "key47": "2ZUEr9PY5KrpPJcMbjfKDmVuRNfJMnhZsXNAx1sm28BJC2WZij9KzMVuTsUxz1Ea5YceRBkgBK3fQRTqfGpDyqR1",
  "key48": "5L7GShKe9mrony6WaaojMbhBrdxQsbT1J21HdE14G9SjtNBXL9zu8npuRLKEna69jNdVkUxXntzkiaTfZm4brUED"
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
