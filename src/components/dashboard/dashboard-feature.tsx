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
    "5bxTmWDC5VS4Zp8SZX5zdpXGYKq3P1pus49F4k98tLQAAqKMiA98GxRojd2Nvgjd6dkiL6nyo1szdtoWTmZ7ezWZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Cd4oBUbpjPToaF93hfqw3P5gvhA95gYwbBGW2RUShqWBq7ARdebGgRnwjX86CmbsMGhHP9L6T8eHANwhwzjP4rr",
  "key1": "vBwBJpJV6bWjo4Awim3x9ZEGwigaAtJDEipBuCE6CUrC95vkkDfQgfEA4c2SBU1y6TWsDADEA4E33gFhNt9eN3B",
  "key2": "2BkrgmYD9wbYJDGkBMg5F64DCFRMo5UF99YfKfWHtSAFY7CMaaZUVPGGYK8un7VP3unCThV6E6shTTUZprWVADKp",
  "key3": "5M5Li2Bk29EwCUJ5neVM8gJC2UzTPQB32kzpH8StGRS7rbnzCheRg81ArcoapbAuBRnNhwQ4tpVpy8KNJh9D6k94",
  "key4": "2df8kmZeJgPuUQGDvaWeAccfDbRuoL5NiJepV9jP98JeFKsV3u8VmuzEHrNu2Hrn8zm9RHQkTMWiCTK4PmnR8Smt",
  "key5": "4wnB8RywKiP6a3QDfBzmKzczb5VBHdVmr4tRUepMX3147jFFENptX6XWKyiJpozQ6jqdebNocRR69w56Ae4xfogd",
  "key6": "2Us5U3gix3cYoofMfn19HSohGW9RrKyRgf6iYHbPkbsvhRGX9MSDF6Jp8dX4RN8YrRM1LiYN6GdxEGT5c24qgiBx",
  "key7": "26i7Jkb3LomfHLUD9Lov32hoz7MFTp6hcc3zdudXg5QjpS8Y9VduVYaz3rRGkWuCKJ2sxLwDTB3itxaSHzZE9enm",
  "key8": "3GZpGc5goruaDcwK3rrtxBb5fVTaohgywHkZLjWBwRP4wf15mYq7TLpaKvPgX2dynC9C93Mf4fsfpJbxVfTE9mF",
  "key9": "AAY5sa2CDx59u9zfz5owHza4MLNdPTQuUxJ1UjegtdkSWRKB4RrdnSxF1ooKdpucfePuig69roNoyeodvFqr8jh",
  "key10": "4muaPRSFiM3jcSc7KvGrDCqLbyqKRgWZAsAzzkWidrRcFoKZna612YL2GJyduM6JF4nQJsZzEy2v1XfPE1B1yJo4",
  "key11": "2YWzupR6SiYaCudM2rY1JCix76pYrsnFrDjN6CjGyYwW2NnGJkSiJsAKLZDKJ1RHP1DoHuGJk4KBomH6BpM1eLAt",
  "key12": "2rWdpAXc5vRYN8sWeizWaFEjVW9XPuFmpDYN9fUa21TR6VR4xvaCTFc7sgsympWeQxoL1zxDm6DS712u89N4R1Ek",
  "key13": "4sR4UcDZH1sZRJYjuT97ombueqadLxTmg3Z6nEZT3epRCvjKsJwyHz81u7ytNr2jdgMxoRjm98JHS4DSsHxEehLh",
  "key14": "53eT1rQMCkSTWhGVbuqFJzgQPYwbqf5ZEALuzy6fBVxnvmmegzUnSJ6B8kyXUH9Cp94ZDaTGZXc69SRGBZ91mpCC",
  "key15": "3ZkWrXrcYasiFV9WnEY5Te2V6QF6WUS7GyDhciA3yaiVhqvRgbB9sQbLdpLN8bFnFFjNfhZwXZEgCFMbrPzdgtXo",
  "key16": "3eCkW2HRKGU1vKEqFvi61wqFDJk3SvS3FCyinGNWSKX5dsbtgGh5dY72n9gHZWnaVJBcCKqnmRjJngrzcr8euNG5",
  "key17": "uhrfcTTQc22cpjMiZHDTwqaZQedXwjuw9TqgKwPjbCzXUVgM5AuyRTHzs21QRKZtiEg1WrCqzsXLUGqfHkmix4N",
  "key18": "3abwpmaBSTc36AULqTShrScoNkKPfw7KBMUthZruU4hvXTpyfuJC5mNjt1Qd37C8Dsb6ECwjcAEfFgBaSeTXDnjv",
  "key19": "4P7eRa74V93fbWyBREXvriPtzq2RixjDE6m6tf5QAujD8Ak81rqe7E2KXGNFgagc5LXksK5SbdJ3KfrMsRFN1PsF",
  "key20": "3qikkL5kE2G18ZDgZttsWbaTrWU6i5vgTpa5GnkHPmbRmnfegVuQxQgUnhFvmnYu6AvyBMJCwtHDBhS9G2GjhX6Y",
  "key21": "5zt17HFuGaaCRADvUKhdcxjAjtBtVaARjPwLw7TnM4RhywBfUdk9RgQ54bmT5BfEWanKNqh4WBziqXxKmMQcwXbh",
  "key22": "wjQNXfmEN5vJyjHX36giRF8EZYH6YbC1gyBEe9356om2PG34CDHYB9x8sHv3YjwNncnZGrfue3yyoMXEs3cGsDz",
  "key23": "3syXLKy4uiHxS4rNDYwW8DeX9icWq3EanxU753ipXDGgjTCqrG7pwtqErBmvfvFa8NoYb79Kr88YB6jqhPcpv3Hz",
  "key24": "5fxmh3Ww92NJdKtVG6Se1X7NW9YmMaYjzTyeoexS59UCLFRXEPVtrbeaKBA7TLz4KMHP3VbaY2h3mYEBqtwAiuzj",
  "key25": "cx84NU1usfBKpJTVCg6S6FVy9AMgnF1vn66uRUzCMPvNvST3PHfQwVA5CkqsTusJyhcCZSnEEBEejj4VsMtVhKe",
  "key26": "RYGT7tXBsZvKX6nEYB3kJRaw5qUebpB4a19pwnK2Ft7nk3Uf4jWLPGHWKma8mtGddqiL4m9mhEKkwnP9GittXxf",
  "key27": "43zCgEKV18ZiZ6YbmEsdBKMosq2mpenqHdGKgn3uhYFwAq3L3PyGrHKr481Gm92oCtZyL2tx9DwqQMTKAs4P8BEj"
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
