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
    "64fwd6JHZ36MzVfq5yf96wLaUdMPfvmAWX7Lnp4w2ZY4uaoySTJ9nNx8vjKxRW87oTCqXHZF7EgwwoNtYLa4Hc3x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zAmjZDUNdo4Tt5tQKeFYpJqCzzJR4ztsYGZsDzqjKL3xcotB3xcpjMtfkDAdx7VPjHmZzrewiiMuiv8Jku28CNh",
  "key1": "RiS5QWkKy53DqjzSVP3M17c8TkkuGvj3ZTA9C6LFvgxN9A6s6JZfheet3tRCJnLFpNyXLTSxfFFGgyDL1nEtnzU",
  "key2": "63F5Tm1zj2SHALTWfwXT6L56YzpCUcdW2fCujoYKyeLPaLw7xmdvJ6XrBnpnZwZCMGhtBqXp3Zn92G9P4nWL3mux",
  "key3": "heqV84mHUu4vdB3mMv694QEcN9BdjS1zKm4kKt3kyGthdBgAhSDWo7kTsyen74j99joKR8tNUMC3bcR4bGTpYB7",
  "key4": "24uXVC3ptERh4szefNQKCvZxie6eKFaiegv1U2EnfuCuWdbKQuSW71fBuDhFuoY69gDQCsPxsv4eGxXPg4o9BwtJ",
  "key5": "3726AeLajiLcuhXSXLcpweZvJxDuEgboBx7NAne8BdM3rS2FR63M4GPL2T8BA5Amzyih9Y8MpFAJFhLhnA3VXNdf",
  "key6": "PjAxxeA5UmmnwdB8q3YbWSWhGrgwNMhff3CmkazpeHuwDb44MseA6XRrtFkoJpnsmc421jRQKRrzwRzuiK4X6gv",
  "key7": "3rDaw4F9SWcTWnumbBBA7YTQnse9WswQSRzCc6Q94Q1Z2YSSsjFv6FyYHWdC6UQVAwhHAUrAMRo6EnXTH9Xng1Uw",
  "key8": "ZTUPDPuy3YSCd71CYr26pQjdymYufk9bUzgnaEnQpqsqxFueXnqZpibR2jtiqtV5CS5drrNvRzXmRhG25L9CdUg",
  "key9": "5xozNrceh2hAM1wtbBR6BQDKFdzk6sDtsH5rDSPrKcVco7HjSAZwnE7z2w6TgYRdXipVRunrzb1AXqAvEVHZ4bxq",
  "key10": "5YCTbbpCVcYkhSF1MX59NoV5PUYnLuorhadsTct1WdVChRG6HabFMchRmWrvTzWSgZCyzM2rhpLq3rhpJNgMsxs1",
  "key11": "33MDkvekttc3SVukXsKYXHpW93k5G7G5bVzxH8SkuDp36Xjxjf4trijFAdVq21J3xbGfo7cSiZiY5jtpR1WuvF66",
  "key12": "2TXkAoxhEeGc1RjdbD5bFhWntPxMX3M4vgxoiUGGKmTeyLQrVefEAspjWrC64PRTZ8BbjgXPmETdo6DPMBPoGJH9",
  "key13": "3tUVoxnQgjiF8jge1zSMs4o2sS6DMkQkmnp1mKjZsGY3ot6Q9Wkr9qnhGVmsoafibTnC61yQp3tTeQp2yaSzfwBT",
  "key14": "57AeK31UQjoeJftjHobnWCAgyLk3LzQZPCZMfMPjyCX54mgzsZ57Gma3mhTPEcprRwkg3Xpdz3JnVhfjnAx6RApC",
  "key15": "5FC8h7ppfT6uVYMrrRWD5ucawNPnnSxcdZiG6R6aeE9utyTc7cVJVRadAyKYeFgsKejGWr34f6wDUpSHctzWUQst",
  "key16": "suNTAfq5mw3oiRid9HGbnTqD5SkDZjdUdgecYqq8AN5BQqdhJ3pAGuRDA7wjvvCSQEqH2oyrU5Y6kyRcdnTLrZT",
  "key17": "2uLXUZMs9vAfWykiPB37mXuF1MmWeZAoxyrLPs9SKMyjpReba4U7RgqVTofViPEfm4uY9e8xVYKapMHvYtHe1AYv",
  "key18": "4tTieo9C1mNRwrqZkPmtxJSuvuWJQaYveDVNKpjHNvViuFVGGCfNAJm66WKbvERnfeiC68ifRg77rESNgzSRDCKd",
  "key19": "3Qpp5SRMTHJVLgCV2v4G97M71ve6DJJZ8ar5ibSFKQgGHnhPkkRsfdqMmuZSorwEZtgb15wGBnE9AeiXoM7LaRRt",
  "key20": "22VxmdgLUs3yepvFxkYYS2W5kJGPLEmixVtHZWYMkXatA4ibQd1MrbQxDRyMBgEQwLBnf8rUQVS4HCwfPhXAj1Aj",
  "key21": "4hQTSSWcd9zofYxwiNG2W7ydhdTZJZW5pyuZ8k9EZ2q7HdPvcHqz95THebRE8xsTyKFzwr2Pig94T7UNsxjK1PPH",
  "key22": "63KH3FKV2RK24rghvksSNMBJeqGGqZEWiBRAhZnCAPKpcvvDinw6hswVWMipMduXfdGWubHJc4At53U47B88Atm4",
  "key23": "56gWPzDXGngDv2mWr29E37KT83f8vSzpox84ASyGvmDej6CQyC3JAobJnty4Pkd7juiwUBGfxDLtbzfzYN4PqM3S",
  "key24": "2CErDY1h8WT3JhvGoVGX7ZGd3xsPByFHMzxogB11AAYb5SAoYaVYBeRnMJYCsHHPXcoTqqxbiq9cCq7XhyJvwqWo",
  "key25": "6EfR9GCATihFiQH2oxMKnBDE7eJL2Xk4MJpr8LQ2m3yAGorf1ZBQ6yTRomEjnX1a811tjQTuMrukhoR4CEqaAYx",
  "key26": "2wLkGQLdHVnHRViFC4bdtUbgz1u8qW5x6xMko7fmpwnav8qaz8azYSQeu9x36EPth9Hj3bzThXjUp9AAvjDmSzwW",
  "key27": "2vyBbVywchNAoHcVREjzzKq8JksKUJxGcs4KNuCf2dLfebmpsgjW9FzoRMK4zS3WYkjFiK8HUJsgywzPDxXSYVWG",
  "key28": "4Fk2VjB4TQUNxVuyfVnJ68dkXhBMcf2cA46Yhc6AYvQ459bYiXMEZHoNYs3rYyYE158c21a7NxA2fr7dLEDvHHKF",
  "key29": "zRUGaYs74dvAwxQsgUXi78VUYfhMoTCKBwR8pMTofH5SzJSrb3huCvMrf98f62fQFU5DJPQj8R7e7KHwcdXGV8M",
  "key30": "CCqDsB9WN4VN1GxmFWPTEnymDmqAnfmQ7L7iXDNfxeyk9N3fZRh87MFKwLSCumRruMNyXXGRYfm4dZDqEYZNDGp"
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
