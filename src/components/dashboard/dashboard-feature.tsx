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
    "CmXkR9JxFrXfKRqxATTtdrXbSDWi9RyDEMUEMgMb9j4V1M62VpAfKqVuEoAKtqhqniPy6XntTGeJbDT8mFdH7tA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uyktWaPjmWiT48h6osMaZAbhsYyx1qWzoGqijoCLCaWo3Tc9TQwbthELfRf9f6oB4SALQx9BPsZznBTszdJrksn",
  "key1": "aZjnJrpWuAcLZzau7aiNWtvn6Mf6NMytwjmiR5qNwvP3Yx1JvtVohzmVN8dE9foaPSUGex8aYb668w1yXxyBxsJ",
  "key2": "3xxsGyVxwhPgsW1sMNZvSJpuTrmELAPQaBsDM2xH9BYsbLWTSoadcnfKb9S21KFQQxvNbqoqNdLUMez5g7nR9QR1",
  "key3": "38Xcn4pxRj7zkDGeBVLL5PJgEverxtWRDRrMY5urWuFhfXv9kTWNthTevyirRrJ19SBq8FjKRwVQ86M65zJQSeQn",
  "key4": "3KbLSinvMeEGp2482gwi2U6fpnrBTEXtxNCpDQJuFH8aRgXKEENEZEYY5vhRQ5M2FME8KJaSzk46nd33NuYzWhnf",
  "key5": "NZruNiAKcozPhKRDu4vVjwZuBojSKqaw5QWmCVHhzNHYfyGTaJbs6XA1RJRsetXhqcZBP76buZ5faJh92B6a3EA",
  "key6": "dci3BZpuXftzZeQ5o3RVxaLwHVYmuDH5FapNDwtRyibHmEbqwqca7scvD2NSNMWUyyLDEiGNWsiZBZh6iNmLQ8V",
  "key7": "5tFzTF2Zt7ETLsiJvZNyo5P9yzWJ3rschAURV4xQRa1wC1YagPgREWwr7nyd3xrL9ycj6TL4PqdRmLmGXYTUzvkR",
  "key8": "3Q4KFWeXs2iDone4mZkn4poYky2TWrkWaJvuLWCZtSkQU3oSC9g9hCyDNvAbF2UkrX4VNXCuSUoNAnwc5kBvSbMq",
  "key9": "fAWhAhdMuCb5REf5yrWsNhZyU27Dg5YkuHqE9mES8cxwgH7opgmLYaP3RFBUURLRwnr1bvLaTcb6An9jv1z4fpb",
  "key10": "3d6Pb23Ku3qDfpfUcm925RfSa1VYmWjzTtsjJHLf8ju1A4DfvrHji2cy7HQdpAymu8NaaEFfW6F7i7CyQew19teP",
  "key11": "3ESunuGqLkgB5YTWdpxbVYZttRskDJv9XKeB6F9JN4AoBbZnrGS3xQXcRVXKW3bZ7fJziUgrExD5XTojGJ4mzmGx",
  "key12": "26794faBgjeTDuFBCbxfwqE5gioDQrsBegTd5T9ZskC6eYueS36UC5Uqo5XgGZJJZEmRhmAJ7EZiHEkV9mL7oLch",
  "key13": "2pPDEXvbwyHPgD9Lh2qidzKmPLJ43QumavNvK4yLfct2BZFjXtuy8WCs5QFNVGvijfbR3Aqnbrnk2KquXThgLbSG",
  "key14": "3fVvQLYmX3R2PU3UFRSaCBegdjk8yoX78BFgcxw4vi1AVjPiUAVPjJsGMpMfapkzY41Lhe4fqduMMmzWmzpcCpFX",
  "key15": "44tAoVh3xUsLRz8JJJqsFkv85v5eAs1hpZhkF6wMtWTqq8iWrmCFbgnXEP5AannwVM6eH2fCoaDLjhy9MRvRkEKg",
  "key16": "4YzVcuYf5oVibeYkB8B7e9CUXUzJwHQUmc5U22huyDTZ6VENNnxeGgyNWL3KPr8oa4nGPVJPNiA5ufU75kM4Djxp",
  "key17": "YmMtx9MT3wLDvh4CcziFjpVXqWWZrwBcXHaqPXkLyjrht4zkrmZ6X8ZCsSJNonwG9zCJiueDtHR86Ge51geqCck",
  "key18": "2PhXnoshvHYjx7Y3mEwv931zX9Aa1ZcVuq3cHi9mokKLbXFyeKWyU7LUgHKpiLebjREfw2pagRcHDyd1m8uSzGih",
  "key19": "2X2Q9n2iRvVEX3dxCdQgDeLzrSR2BNcPKwoNyL1t3TRQ5o9nHBBDhzqkvx81iDArcp4sx8hLM9noK14R7Vj2Z5Sx",
  "key20": "4ynfBDXben6Eth24Fsma6mT48rqUEXGJSSkSmUvu8xx1aDj3zkQYuJS6pUcy18Ag11ueDdjfg3m7gjuVNdR9Ht2R",
  "key21": "3aJn3mJaBQTfLjQswX52BLWasxbUGXJQTBsF12tkiKkHUtt5gRApR8CvdEEdGhBM9YonaX8JGsneWrr5QMiNcN1A",
  "key22": "4DNGEFcEagQSQNC9XB2z1M3uNj6NTyJKu8HK8oKAFuU42uB2j4ngpuQraE3cTdWqXWKgrBu3HQkVWtJJE4xQVrAr",
  "key23": "61jSLypUNyRW86dBtfkbhEb8B4o156BL4kq6uwzyD3iNg8ie4idYk5SCzh2rXxdkusdy5LoDnkeQJQedejJADFT1",
  "key24": "3MSgojDTTu7RPNY9wpCYdcEh33Vdk4N6kXrjGv17Uz8tmKoiYvFs93ApzAzQqReVjNvgDzWc9GqVU89oZW5Wb4G3",
  "key25": "2uSjGXhuhGFvJEMhwDWFZ1jhRJMYpK2eivrSJ5DBz2N91xRrboXX3Ms5SXoE5imcNSo5u2q18Y8WQsn11qULStpz",
  "key26": "3QNWcQ1FioqbLmrqzuVGHwVegXuEDStzuUQJHCMS6G9guNPUvR9Sm2kkipK2tCwcCUn1MbwoCqzdcJiFQz3zYqxu",
  "key27": "rLhFHrkwLJcFuFRxb4bwe9Hrso8LcG3swkSDJPJDecqhqvuWM8uWzPu85HsdzeQGCaJqf9sru9ySUebtaX8TcMd",
  "key28": "38PPGxpJc5nMoWEbkQBuWJJT16Wdb5E1RnveUcN3zusoMPC4zEAWx9bYrJ8c5xQoH4qQyi29iJn3B6zE6UUHHRVd",
  "key29": "4x3RkTAPUrTdpGHsXk1pJnxNDvVS7LpP4W8y33tTYQLg33uU4ijjzTMK146tv9a7u7zXPcE9bVA8kCDVVPTaQfLL",
  "key30": "DXbVG1Q7WqAa579NPoeT5ENuKomHdFASVAEuUoWiBCzEd23bAgzcGGQygXoh7fEZ5Jw7skBPizHF2ULF1ab5kpW",
  "key31": "35h1abSbiM141aqudHfnqRpWihecZhN1eitenagaRUtUjgscpjUbJG2NPdn2wgKVwVcfsdcdBAFXyLTskcK8xodT",
  "key32": "5izbAvgtroy1qhoAPfb8YSrD3EkUaMSPmH63QwhXhmVJbA5XurTBQFjaYmEDVp8n1fvBP83NQij94nPjc5EZn4r3",
  "key33": "3ZJK4Wi29uLk9M8ugV7nd63x4Y8yxia8PV1wAP1MdPX6ZbWuNNJihoYymuTCfDrj4dXYm89J9SfSxe8p4pyo5vTQ",
  "key34": "5gNrFkPn9XcCrECCNQ97kN2LoyVkVrvE9VEztKw4BkgTNRetfeSZ7PB8i8ab4yWD4YWa2m91E3s8WrUbWH7Nbh1J",
  "key35": "2K6XpgioDP64mSwLnGiBQg3EuMp5wXQiFUhueV4ydhYJNsUYGpUpPmHAkiRjDzMWTu9eS6dTvhRpUqoxNDLz6JnM",
  "key36": "4JF13oxLYHob8U2fvJsxY3buguGxFhiDQGBhmjNs4mtaSs1sMtGkz3bQ3z5DHFhDknqiCyA8BKtZmVXTLhaeMoxK",
  "key37": "GXp1FEKC8nTMABvrXsGySA1etP4noR2yPZfgPk1hcjMX94r3HCZ8mEhWsCxzUF91g8ERNJWD8cfW7ykaomoY1PQ",
  "key38": "46sxyTz7XJcZ1GQ5mgygTbko1mgjBdMiKaEfmxZLcX6d5WjL5XAJDz4yQGkHjbFAweg2QeXzd8tY7LKyjsjeHrBY",
  "key39": "2RDNdyGWWuRvMW9tZjiQimRtkoZEddMDT9NcHDGDJwH4YUsqNannUjHKgrqqTsujRH9AdvokjKGN8iMYNS9mnae4",
  "key40": "22Pf5wD7r6R41rkafebTN7HAGKNQTaNvqYg6jCgTNHBgR3JTYJTnZZkGAt3TwwXzkpzsJ8ju5fPAz59gfNrw1XJs",
  "key41": "2osc4VaHgWLUgbMfgLDGxzkwQ1XWZHNpbuPtFbEbZc7x1437Krn3Yu5fR6fS1fsuFnBkHNVppLXCNNSirDR8gQ4d",
  "key42": "5FdwHM5NL13KJUT9KFYCV9CXykBXWhySC1YBTotzb5p8dTqnkndxkUCchPqCSZA1f76zF5TY35PP4AuW38DfgRMs",
  "key43": "3NZKcTNpH8mBBu1rC1w6WoqNZdJAUA8KRaVj8atc6ZmLAA2gCxSp6pTJ3YQZ2e2wQERHPsN7RT1y4prENKWAYtCT"
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
