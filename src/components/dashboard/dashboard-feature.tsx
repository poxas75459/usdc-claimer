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
    "xvRoaHAEJSJXFy7sgxaJdx3hkYwGN8Au3yodyLAqRPZtKxGnnLhrmJjTiJnKwScf3NS5Fp8CzFUFiawX4jVyRX7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UQKjV24zdxqwYLdATKu81wdUxNuJTq8Bji4mdSWBg9NKUfkYp1NjtpVZ4qRbZELwxUTe8HmzByKPZghgnhUmfrC",
  "key1": "3wpVcu1hZtStkMNKG2N6HQNE5MuR1ZaJJeURkejVUr9dDC6ghQS1x9gupYCu5xhb2gfTnX2qXtjNFycXBx2J9hcF",
  "key2": "8HkbPYwqJYvW9xyJLjE1WGoYzQR43aphh32CDGsM4RjPDkDFmU3L1yNx9mQJzUugVEG9xwMtPuSm8AMq2pKFeCC",
  "key3": "49YRz6489BMZavPvicfbRavoKz4c5DLrbNqVDhizYTsrnRPpqWLK1Ra7LqWpCSu6F9xcq4f8h1PagGYJR53xZmtU",
  "key4": "2554Dw6ZZrEnQdMLYXt7cHo97LeEiSEhf1ApeUsgr87vbguemQswCjJHpoFM1H3VKyRir5kuoAL18AK5s82fauuH",
  "key5": "4UaKCi3cU7UeGUUcaNTgsZhD8ctcQcxLHDFw8Y1Wsh1jAZmXLYjxAGuVGk5kD1HLgzUVdL6gsMnwFsaDKM7sJkPJ",
  "key6": "4fiiNTbRYFUQVW7hKgiUZMvRjU2bb1koZGi16t4TYQaEbuow3gvcdwBtFwraRrT5iiKLKWmTdggpuNiBfkdfhU4p",
  "key7": "5gCKyDNdBfr86Caky611uqbHreYS4sLjfT947jDrP8nb8fmpuQYHCNRn1s3Vcn6MHBUvS1sYkUDV1JZ6FfbNgrpZ",
  "key8": "67TuwnZ2ero5P4MaPU2r3ipvfr1RAMJzUwPjRYrhwYitFWUzVpVmgd9FFHsqyg5VquWoBryXEiua2wNgYxjDzeUU",
  "key9": "5SpPhxugFhGtciuSs9u4uJX6r3VyepGHMGbBq9TGfzgWUuSRkZUHjbvC1FGYDW8k48w3YsGeJAS5PxBPfkswxGFk",
  "key10": "44gaxAmEKAvMrS9w1p2JJHzBewoYWtKP8C625uwuuLhMfTiUcKkTL28Ch9bmc6BQxLZUowHN7oAmhEMcWJPBtDhe",
  "key11": "3C1sbCAC7e2Pyqfe84kyTn3Nr1epDt2BmvvicV1kGWaSfQPQotKHdUvQ9exmKoyt81pN36rg7qDiiytSPDiLLiaz",
  "key12": "2qMXcGJD3DNKq729px9ohf1vuunrNiTc5YbjXGaMabnsnfgYRgJ2F33vrW7Kf1T4tSw1ekVkLLiekZnkx529bmBA",
  "key13": "5mUQnWpEtRdrtSZQedPqxKqEaijr1tEvG9n6WcUxuhsuxSY1HvSyn8jr5AJBgAyYASqtnjHNYgywXAUZtbmfsMC8",
  "key14": "T2wT2wKggP5Mm9q5MoMuQHHteQaHneL5Yd6ayGAwtgT6B1n8Wq3bxHKoULxFM47hgff9QF8uqc2WbgDHpW1bNhC",
  "key15": "j2f36jkkgARf3QJDYUg5UJuX87g25uGBK1xK8HZJ1B6EoUyUcdC3BQoKvrwgiNdsXnS48LLkCF1Tjg1Dm4y2uGv",
  "key16": "4HJnKF1abmZnMDzBZTMQVq7MwQcxjuZ6T7rWwtrmMWVbXxvxGEKZBnRPBoaF6GQGwsUuYARPrcxQju9s9iTPA8ft",
  "key17": "63PGMrjzthcDZS6JGLA9uBQr1ysa81qS7KBetYeEtTy6SCpDXcLY6FMzNdoKqVCTJ3SuaG4cvTbAVmuXkRjjwwRf",
  "key18": "4CtEw5D7kt1K3JrveZXk2nh56zdj6haYYW37wxXPPCDwiattiDWJU6SUPdMWG4N7xR2PxqZ45KdMK57TJFRA9re8",
  "key19": "2YA4QB8yArADN2DBucYhoKfANcYSu7SSr34cb3jhPD7CNQ4Etx3sM77UvQVHJLnjmSwV1g7hwQPNk1CENpikaDt2",
  "key20": "5XagsnCt4LVfpKZ97WjEYjeWQ1FYxKFSrViUVHBMJNnnNfVa37o1D8y5pEDJbqMnTvN7UhgM86N1aDkuF12ipKia",
  "key21": "2Ts7np3ppaZVu6jQqTtLoWATAjAQRnLSSH5PFYy5zm5EK3bvJrAXCvXWfhWEynq1ihxnDoG6VBbutoj31tv4bg4S",
  "key22": "2VV8dwWvdMmVeupSkt3TMKkNb6c1aphWo7NT6L4BNuVKz6M7C2uwDFzs2mq4GfbJXUkwLV5qbAohJvk2YTcXk8DQ",
  "key23": "LMMtJEYXzRKDjo5T5WbXbkR9rTMCv2h1Lr5zeVgDNf3yL2wMNyrsK8XqL943Dx9R2BGu6kMJ5k38f16rN7M4MA3",
  "key24": "3sN4ETj5NM68xqhXpxKbnMM4ET5nHFPSrVDSXNTNaK27n1aWDfgxEASxscRNhX87ja1HiKJLtDHJM7FfTREjKYoH",
  "key25": "nH4MTy7zra37krxYNeCePxSiv4Gy6nGRxFLqxkbWo88VRGhaqSBz2bT5bHrvD3TwQEXTTdiBiGvACLhwgAhyjcP",
  "key26": "3n1VKbLaMgv2EnWZX5gHvn2h9znJBiUgsE2St6L6NgczEwW1JPZ5iruNKHs2zmzEWMXYMJceLbect1QjNd7dZj5F",
  "key27": "5xQSybAupWM8H3S28Mbxi6k9i4Vb8D4DaemBGSkVnVncRQM1hVTbz8qKaMnrGBAsyQapCjmcP88cSvfHZ2V8dy1i",
  "key28": "4yRXZJ3m6WniAuo1ZcdtnCeakKf1jsBcXVqMZ4MxRPTn2o2nSRCeHi3NYWBH46JhzNDbVeornW1dWTM1CLdziMZY",
  "key29": "5mHYDXUZRpEihCQxuTCnVTXKxparAvYYUMX1YY3xA4NwFVBKgo7XHCsKKfyc6frDnaQFA7MUSh8Sr8huryDpmrrL"
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
