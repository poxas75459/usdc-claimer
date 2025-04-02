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
    "3sSJtjQBhmCtJvcYJujx6VLU9vdbN89e2pjBYTs3LrRuvT5SsQVxTYqaSb1tEUNRr6j1jxcuXbeJgNowtkbp5YTg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LWMEsbSspN3Ux6TiKnpcCi7SUPUQYxc8bGgu23FbUFhunv3HRQZXPa3FfkiAFwEgRTqTzUNvAHy4EMWEaPXxAHh",
  "key1": "41JDmjYNSEytfG284VeeTuCuufMXvZRdLxyxJhdYZyHsEygxJxn78vjZcRWzz51YXR1TaBSN5c2n7aMuiogGQAhX",
  "key2": "2Ex5XHb8vbahtnZaUz7FBbkU8DByNLFNuL6VwkTkRx2hheM5UiMyrDfrsggcGxLZwzwgHUzrxNs22ELXJvor6TZX",
  "key3": "3znVs177Xh9cAZk5FmCEHP8gRZxGrstr2wp6DJ9C6YcrAQG6Ky941YfKuk3FpUFHd2meYHkv9L7b6Qm9s4H7SJi7",
  "key4": "CitkWK5VT214PVGvDz14L51PcqnHhP72QRVZjALLYGJyFxyVtpiUmaabaM75b2CNw8zzUUMSmrtS16nyssf8tNG",
  "key5": "eN5bMYURzRnkRdrGxT2eiETWR2hJA1A3s4tpcQPkRPMKBJ9ednFZ4TXzdmWHLP91jTdgrK6M36gGoAQzgWEQQbs",
  "key6": "23KPMqWa8Y2YkcWr5S92X7KLjANryWEXiPCFfrerx28rWH7226H2aHE2AP721ULhqwUdgoFB6cA3uToFHiBZ6Pgb",
  "key7": "4yRRYtr7eWUNKfdMZsUfqzhk3KzpheAJKRXKgkMMKzHKJNnQLFizYmfmh4xLm5iAQ2yLeDTGeCg6LwYU1FocmP36",
  "key8": "3gJSkg57H7z7sRMfqxZ4cQ1j6QWseHvTdnd7hpoBm5DFvdgLqA3i17LoDTFTAaDk2FDsYEUGGMVHNog4YSNAFTVK",
  "key9": "miQstH6G1dCGdWfWnjr5jpz6tGWApP3koCtXi9BB9hHJwL6qZP24yoTRDVXkxQfVS2eouyfJ1R27QkDwkogqA1B",
  "key10": "49dpsq6NcYf3Q5vnQTBqaJpwm19FZs5x58u2ezd2L6A4cfws5uZVRV1aL9UCQnzw56Z2xdjQpJ8JVfhLrh6i5oUB",
  "key11": "4R17cnmwVuLHkvtMK1pdzkmGZ4ayotRc2YzL9y9ttWQHbCLtPN82XatJj5wZWukP7gfNcifKw3WNc9RA16LDGNM7",
  "key12": "35QyHcWv74xUFXcyPtv5PBCtuEYakExdFp1Ro5bnsTAGpAg1LakZfEFJpnSLU97QRZQkykdVccgzGsHupKQaaifh",
  "key13": "4iYWEcv9YimoX5CSnTWv5RQ4sUxuiSpxRpz9aRXHmEcNXCxAj6SXZZjZWdPAEWpKLgpDzmSgb4rpunfccgM4tAD2",
  "key14": "ZTkNArUpk47xTFa1e24YWiPD6RswLsLuznAXGLkABALoZEMuCSewRaHvc9KCPGuty8M7FPL29VnB73ath4qVby4",
  "key15": "485isMrsPR64Q4hfAtfjdYoQqrbYwGGFYRh3utzjzqCz6mQuYRot7gezYt64spybxAyToq7FNJHhNYCnQsWRX5xC",
  "key16": "iavhccU8vLjhQnku7A3EUw2K6XrUDhzGwR3cVhDhmocDPoqcsKhn7Sct4Lnb4FQx3YARUo78kt6T7GeCvWEq7Qd",
  "key17": "4an9w3CbNzJXw1jxZxJfaoGB6SEMsRprkP9j8yRjH4vgMrfbJAH13KSs5ZGTx59PAHVWXQcrjPPaC5coqShKYYNY",
  "key18": "3aZGPfhp3FL6Wsw2yE7muPrBthcfUypKpqDqGLz1XPniFYHb9vCEnQw6BN1E73tFZuL3hC2irr6Yw8qomsXKYinY",
  "key19": "2k9WHf5Zmj1dLhCAthT3wAQaQmHRbDGtY4HWT7WCmB5RxSNsyg2s4LjTXbxXwYnLbAdbRKT5mfQemiss72CmW8wx",
  "key20": "2sdaMCdxwjqap2BbGcqoS7UFwXDhPxN6sXwW1NfcYu6edyzypamym46iR7t8qJzyhYfFurA7HCvRsxEcqip2Xv8x",
  "key21": "4VqdT7CeU6YL2KPtCPsJ8iUbN7k9ATseeVeaJMzH1LEtYM4LPGmBA55UwLzvMjM8qMKmWQdKp5YnLkXrkYgp9jCb",
  "key22": "5FS3zetNF8vc7aGtK8qi7XiRLox19imSeeAmB8U1ASSa1cfQMoqpQXfrv1UREeZ7ZbKa6dFwfTEBetMW8AvCGK4B",
  "key23": "3A75V8gZEnirn77Q4fawkMvk2EooFfWN4re5BfuRe8gabcks38qJ9AwCMKxXpbYeTY7pkyrS3GFv27VY6P4MVfHq",
  "key24": "225zsdkv9Rm8TP9fNBNerVffg1t3dY1NbtE8W5ddV1A6xKn8nDXXvUxDBUXbz84pCiwiqc246YQnMzmUperu9ohQ",
  "key25": "5x5tqbWb1NCxNU2wZ96fyzzcNAX2aApgZgenKcLNgC1jaugVDdH4V6JypUW2X2HgJPAjCf5QiguNtTTyNRPeTQNK",
  "key26": "4Mz4bhUtYpimuxv9Rg41So7FCCs648CqeFXpkEjxMtVwtf7bHoEiEDaMZBWqsBzM3Y4HWz27mUcPxstW6hYWd3Bw"
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
