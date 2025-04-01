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
    "4yxJ3f9uuNabjor6rJ6KJ2MzXebAeXdsLoxcP4xunL1BEMGotm8yd2ijYgkxESihcfL3Nxf9xXGXEK7oaXQUzUmr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LRd9q2X2yad9LdWdPd7qzQvVMyWK3JEq7WUQu91AifXaQspyHzraaHX1dofTSkcQksuC9DY2taUTY2yLEFUEBjD",
  "key1": "3GoVxtDBrD8LraGzegrUYBkwKSaFfMpdkgLE3tnjUVYznGBc7dwPesejC3WuxnDj38xPkh7JjvSSrjvi7vdqb4Yz",
  "key2": "4BA8go4nfKGtq5xBTZyvrxUycWyFbSbe1zaFpgULgDcD7jKNxw6Wikq3QVX72zLS2NCNQPnhDzauF5NJJ3rq21b5",
  "key3": "2VcPGoHmqERifExVr9Snpe5D3H8cg5Eb7S9NVAN4JumeKXC8kL8y1s8G3WWJ6ysagkA8hXU8nbiEZAjffJi6Mpfk",
  "key4": "2MbjcocgQ6QmXAexhSNayGrpVjGggr8ZoWYV8joysm1N5dpW5u56YHMpVyV2wVA8RMJQDRjp2aWNoThQsJwpD8zv",
  "key5": "2zQjN3Knv4a7hYhjRePTvgEvAATWNPoACVwASs6dFR535fLtVHCnMwptZixEajwdW6ynB3pvDtQdP7aa9gJe2sjT",
  "key6": "5qj54DRErNVTk565bv3XMRq4Lft5QLjJA7GnvNiPRnq2FDggEKKbwResQbUmqWAdcE7Le9qQJnbjYyEeYr9QAJUB",
  "key7": "3zyJnPFP861z1LUhVwgq5JVM3J6W8HAZnHrUpHkGVmRmupy5nH3RXN3sRwGeR3UkAVxaRj7zcXyvhCgmMrTGZ2VU",
  "key8": "4EepukKkUyMqA8w4nuDvXCb549qG8Wzafv4vkttLyqVhsUFgi8apiPE5ircRWAuVJan6uVv4KiXuNSmLWPJcjY5Y",
  "key9": "4JicBgcmwSGeRjRNFf1JjZo3xsEimF8xLtppByeRySz3AgBB7FkzvjWfZ7V6rWY8NFYytxNNs2pZHk9JkJ6pVAe6",
  "key10": "2Gwuk8Q5xk7uWqNEAKpqRZsJQGR2u1RAsGZbMfwsnknArpMwP6ByudXkqQfo3jZi2vkS6igxXctHXa6jfFnz844L",
  "key11": "21BEvnJzCj9kCNhrHun53MXAD9Hpw5Qkc4e9wRohyKxGJDyAaby7mtQi7cMg6yeqFaeXaMncMJjZcrWRemSC1i8k",
  "key12": "3v3cVyJyK5r4hAzuTf3Qc3Agt9TaCvktcjdjxeRdsjBLrsGjpFyxEajwRUR2XSSgT5fgZstPaDyMamvW28rdbXJT",
  "key13": "3G44yUyFQ7gyW7UUQkhrEduftbaC5yS2mA8hBAfQqKGDfLFfH5JdTFvoARfrTdPkbHHoUzNBdUKNZJoMpTr531JU",
  "key14": "62HT1sQfB6awh4FQMCyDEAH7TBC1rD1sNXEWLrFSyqsbfLEQWRiSmPsJzJMLEexyJsQunxW1fhvoT71oYe7t7ahU",
  "key15": "44TXiSKQuNDYFnfFYRCB95p9JpcsAug7WU5fZVhnBoZaLEUaVNcvFTvN7V6TxDwx3DzwbNZF4dACNu7dTTTWccDn",
  "key16": "4MDZMKU2HJC7FBPBdKREpM6ex9u4RSxjdynwzqTK2vbraLt5A1qT2jT1YFcu9yQpzm4mzSjQZ9ivKS8cf613X8JS",
  "key17": "2R624r9o42ttev2hWyw1tNz3Az9ZzDH78WLH6zteKqVXR2UpJNbFGxDezQqBgr8QYgbxdw5gxpx8ZQyd7NWqMUdJ",
  "key18": "2zbLQTHEgagqdm4kVQ3qBLbcMuNAmMkiYkUD62HFq8NE1sbMd1kmzMeCFJU6ZZo1GAHYAUX4G4evpDZNPaDok4YY",
  "key19": "5cMzeKU2hoiZ43xKNZupXdkqTAixqRrBh7cT9w4yFJdBR7naHnFFHm4okmmBd4ArM45bgv8fVaR56QzA9v7hSHs7",
  "key20": "88p7JGxjBFQXGckAHkTyZoUyG1vLCwm3xS9zZrHeDcg3yeUThbe98ovPpQp7JRtHjXh759rGYorgN4veTDSXHy9",
  "key21": "4tXmb7UsF6hCGK6Z448i4JWU7vBW9TU4RnQKiZqTx5CfU85ZkiJRuTRGQXSPBwaqZvd9JLEvRxPVdf6bqJ568ipU",
  "key22": "3MZtWRQWSxBjgpubffiYkbmiECtoq3avwcceVr3bVFk4iiUxetPaoqg2RAk3K8L4HYu8Jcir4dZ4HJPUbgKm8V4h",
  "key23": "3QJig1Gq2U4iLHNUSfa1zSfm3G3KcXpEVJ6YkTMZxvsSkdShGz3eoxQm9fYNZkGtWnndwkwscbW4P9fmfSsqKG7s",
  "key24": "5dredfSRnCiaexmwcQJEnfULhUuRbjJW9JU8j9mpYhGX68d25xTiGafrC1awUkjdqhdHiGv1zzngzVaGMxaaH49D",
  "key25": "3uSGw4xKFu7QSY5G1t939aZzq8wmKZ4i7h48L34tQCL5mmCZu2T9bo1Bp2WZe184LXdgXzZBJVQc6V4dpD7HKhPZ",
  "key26": "DZZFPxXr1cVNpB4RLowTd7nQESVmDgG4oUL2rY39vp2rKq7AzXd85fL814CFdhfTsKCv1Jz2nP4z6oLopG4waT2",
  "key27": "4ziy4WsKe3YSqhsu1Wt8uX3sDD3F9vdFP2VMqD6bhRFDvgnkbphu71Cgqiy4xHqvPX8iaw2kpRn378cCwKK4jP3C",
  "key28": "5qxEvj4iXVxeagcd9Z19vPzvjjaoFUbEQz6fkxLUwMx62nxX4CoSUVXTBwSttc5MNpRNmKnE4jVQWLwWifYD5Lwv",
  "key29": "4ZAGytb44RUeRH6tUVQkT3cuiBz2LrbdJCNHTmyFDZYofcm1yhfjSXfi7vr3WgEQ2UagSRDBrTfTfn7fbGTBtXFe",
  "key30": "3fE3Jr6JGJrn3Cp6bU8gjzXvK5mwasNkf4FJ4WTodi5QMK6oqGi32ENVvw5jC68FDUuJx6J6M7UU4bgpGhLDZgtC",
  "key31": "4pTB5VoXeawgCKMHYVTeLfaRuUeK7uM2xJrPMgHnCDVno7qHjwdjxCgYMpZJkHuR11oFHnUeL17TJwg9UEUhAMxW",
  "key32": "6HxYQAa69sBHaUvzeRouFe3F7piCJVw9LoS8fxFryvugR81s5cU5NNutaGHLDnKGKDuEXNg4QYAqEwfzFME6Zre",
  "key33": "5dJsB1TEG6DtFoEjSHH5xYmBGDKErgCX8QbuwHmSopHEmTxD7G9fpYQ1RFcnpzZeUXXcDDMUZRXimkmmTpejfYU1",
  "key34": "3ff76KnW3ZhKZZZxPpe9U8gmVyVJCuVLcAtfbCuHSwwT6PGVYo6ytV3SxD7wLiHW54vXfggjopTZrBVBAu9opxbT",
  "key35": "4vRnGWMhrJsfcEEio3LGGsLjaaiVwMgDAfCntYtKm22fpKQFnCDR8Hqzkv9K6xGLAWH3miYePQx4oMjcFr9mwDsj",
  "key36": "kxdoYK9P1LTKwNQS9NqRGF1MozjNhPX2Lh2ZczJ6y9R1Fka4QA6Dj1yZxGTSEsxduk8xKmSs6tjbvNVQzBrTkZF",
  "key37": "5ZciZqZw3rC6FMGhjtEnzTwE6X4oAXL2cEgyeLaTbNb536b1dtxC1sWGvWvvdofK6mXTqdzEX41CjGXPa7RG2nnz"
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
