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
    "x6QC1b52hk8SDoEfTg4haC7YX9gaTAUxzRTQig2qdAbTUTHk5kQaWpAdRREVtbRqokkzfGLNBgDPHivSHxxxPiS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Lx97xQG6Fqjb4achmRNK48jUEX3YQNj663BLJR1TJTx8ZSkNSwmSEyovXY4bSeHAzV1y8kfrxPgJQhkHdXLyp7u",
  "key1": "zzCYdRSbybnDaXVWB293k3ckefEsriqrAkPkCQqkx9M4hbRTxnJGweiBvV2qGMUYhQgdsDguaA54mPrYitX4DRU",
  "key2": "4bxW2XyVnvaN9H1ZgMzERxG6Kc6agZptRSJfp2ydF2wY4wfnyAHGH33zFhA5UQADPAE3un56bbDvbmoka3FJxDWF",
  "key3": "3TPj1WLuSBcUEstBFQZfXcbmbYqmyVd1VvQcYrd7hitqJi4mXCPGFC3SESopeTax65SjL6Umq5A8nowVmtJGsR9g",
  "key4": "2tQ23WiPqkZ9inSeNydVs5VJZL3c3hHuAesk9HCd8fr14NPvVYkNcHHqhP8CiVcYeuCwQUujwvJeS7N8gDsKLFRC",
  "key5": "4vGREARsDFc9cwPUVxsVy7tPhg29Syr4d1iKtgAhw3Y8nPQW6NhJtSUTnhU1rp3GZ3rTBgHcf1QAhnjTeUa6hNWb",
  "key6": "2umANMz8GuUd6siMzsbEFZv7jRrr8fvkTbMumbvBd5GDxCAcAgxxZR274tTfQYGavLhJJZKZvYuBbR3rpqsMp7uB",
  "key7": "673wJfmEcMgK1SHN2BfWKyScCBdaz8SSBTgpHQYv4o5LjxkP6zCwuA2KUJqLCq3pRH9pZvhE5oDPtcq9EqiXTCmn",
  "key8": "MMNvCLjFwkP7ZjH8VfUYnEiLs4dBNLUz2WNmsqoBBwVS3fFEweqqsy5c8AA3BCTzqs56d3NsS2DbXw29BPS5mWo",
  "key9": "25J3fhvzTonbgYqvd9wJPNHuEb6ixnRWeFzwTPaYoTRtFNpHeUS7MPjKhVEYt4HBu4uJmZEEEKTWz7DWsrkaBhtx",
  "key10": "5SkT8LmZHyEYC1nYpBgoBAKEGN9TopfRR4M8PXR8Kf46MP89gGvmnhqoYLKyyAjZt2B2Hg8j45291T6h63FE7fBn",
  "key11": "KRoj4jY7YDYUYFt1RvbRiEsyWySzP3wSSEvDPsXZmjVie1pjTJXzNZGgyY2Xm5Guwv7WBq6yJEUTH7NT5XhDMqY",
  "key12": "5qjpnYPR9qrKUEK6okYoiZopV9qipW92mHQFaEPwgAyqGSKBkbM3tvxm3UErL2xgeixwF5agGVgDdYv8jk7gtYj6",
  "key13": "3ZcBCBjdvPEP7US1aJUiPMeNfzNq8K4gqWyTWQ6Aezyf7aKxpoFXS4jtNFuy2zC7Q2A5ZnUNjXJFPGCVMqq22aBB",
  "key14": "5iQTxHV91mNtjSb6e2ECX4Fq35AaqBurpx3ge3UQt9vjMas7jp9sdDjcJXmifGhau4TXoTRkSG8PA6WjKtkVfK9K",
  "key15": "4z2G7Qu7tYy9hjP3ZK3K5nDMbUsAxvwfUEggG3AgZmCTKsqTf2WVPnY3bXyU3A7Hco7UckCTQemgbFemDcNeZddE",
  "key16": "4VhT37hBqMxp7jEDGGzdQTTmYe4YpbKbdGEbsBBKwDohyp1MCDxp2PUEvh4RXDHDo6pXyy7zvDehm7PK7p2BSs9m",
  "key17": "3X1cjZpQwH4un91rxEMQcTF94BT191t4Dn3hdRgiNm15PgnSthmyhjdjBUfNjoYJYbMAY8VyhiSQPQijxj8xQoac",
  "key18": "3dTHnV38g7mimEkCKstDEq525qt3SVdrR5FdFb28ywwbTDbtwziRpRp3oW6fKGKD2wCgrLMnf6yRTpEZpKWtJZp9",
  "key19": "3JkzxPPCCFtg2uxSXntBiCUctCYHmVxrv6tf6QDXn1D8gJpU23soZ3T9c7FjXzPeJsCuvi8p6qsFF4gPQC8tBcSK",
  "key20": "mJDMr4H9EndAJKCbd86uv3Auo3VL1ngA2GBhC58CkBvw2UPqrWzgxq1TWhh7eG6EEBWuNkkSeL9FYXDZ5KjFA8d",
  "key21": "5csz4caLzjFYSH35NfkZNbbAtXkMMRWKAv3QMzSfpiymP3FA2ff3DurVgHztBqq2LNLvv8D7tzYciSWe45A4sfxk",
  "key22": "5TTRsLkEKMaYZZ96rGJxJBzkQqr4zhtwauqHcoYFGXbCzKDa6mANTo4xFbBgSLrGUQczhgKRpqdaqaxrUu7wE4g1",
  "key23": "5eQmDFs82zC4ih6wbwTzxEPr4YBVxx4i2QmXmBojTjB3UmR1WEkpyYLsw4fbTVJQhztic4y5dBQFdNeqz3goqqJ7",
  "key24": "5jw14wLKyz5wbk78g8wVnM6BPjmSrcHdWBrbJB4YTS6fB6gavbbPsTsrT2moPzAghvCYAtGpH4ET6XomBjUQ4WaF",
  "key25": "2rXGvy4e3FtP1NwPwfDiffM8QGw9HBcjVmst9121WrsUgUMnqQHeLr48ebknpRGMPAVgEby4EqhmTWkKG9eW9H4v",
  "key26": "4U7NgKGmvyKADuzp9135EcYjpUbKVRXCWMhYBaqccjtskQQedvS3HTCDnEo9yZUfiUvNmTs5eEA1ZkAUafmzY4xD",
  "key27": "51DK4Ks2DEbggfXFLUadqpE5UoNfuRcYDjS4ygMWZvLCmzs3NWFoBiV89vUTboPQ239QaT71zuYHuPpG4ctF4wiF",
  "key28": "gySkVgcqkuKKQP5jAME2djgWUAwGPA8CBtcyEoR23YyTnbUv4Swgs5p2cfwDA4jz6Wj5xbHBv2HwkDiQr5zqgp3",
  "key29": "3PgVY5xQvotnEW6KVnhA22xq1Byyqj2qBtPQLXnwWjP3ryzxGsA6pCaSh8ycViBvwXGDcVnBRNfVkCmWS4gvEh2q",
  "key30": "2ox2HN5n4pfnKa4icyEvVfiz5BKBL9pyWugRwSzoGhBsh7x6QRt1iF5cxp1P4h9wvd1h9sp2dGXZC9Hpe3xykMh7",
  "key31": "Lre9Gg3HGTotKwhDouLCyUGT2rpk1eDhqXKNkcsCuc2nNDSyxeDcgK8KpqTe65eyVebTkGt5kLGJT2vv4cMdH8A"
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
