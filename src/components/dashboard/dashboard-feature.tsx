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
    "bjFMopP4crYr7m8gPKQyrU9yV7SikYmwjHWiW7WqsoRNdFXGtYPdHtwiXHofisLMRdHtVph7hY4zT4JwjWEeX3q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wgBcpBLWqf6Qhtmdq6b6gSZvTxktcqpxNZ1KUJHAugJ8Mtg4tFLVDx1kxwtr2rDBRhfe4EHJp57Jjjes1pKWM2b",
  "key1": "FWwnmbKrWVEj6wTdo36kSBmyCySwfSHhjWdFyPFnNm7JsxHz7eso5h5mkkc5TMz1J4vBqJHNovPZWZYavJ4138g",
  "key2": "3NCRvwXLWFrJZy5dQ1DsYmaoXxD4XcViLpMnDzc7SjgnZgnzqnx52PLduDc5bvFxxaccU89aDEjyyC9vsb54bgEg",
  "key3": "3R24c9JzSzyaSXAsFAwSQxuv4TJFuY5ypyv3izs3dqvGXPy8qd2RLjNRXocD1anZnPRmSLGGEjiAfggUngnfHvGA",
  "key4": "3x5A6kyFK8kPN3kmAD7MiHtxPHYcP5hPVGP8WPnEt2YZCaPsWtoXN3qePAF8ihVjvecrbvY68NTkdS1WZYT5Ba2E",
  "key5": "27VufmcepFpLJSU5ErTF2T4bLq3GdWsjoGdaMW1JkVGmDXp3c7hqW5Xemdxe8esCqo1zxZwBKu36GkTydfSWGD3K",
  "key6": "59fVeMp5EDLQKZvUNT8QmGMBDRXp32s8n3RXN5BjaDrWU7A6sybgEbSVGeVaSG9xPCd2MfFTZnGUJNWaF9gTWNnv",
  "key7": "XmDut25WgyPKS8241mTKkgVQzzk4MGoZcEU1EJdJZe3yYqNc6YBZJT1gWuhgMDUD7Ypvgf1LZiQiEp7Z4cZiCBa",
  "key8": "2Wgixb1aSzSM3e9CBg2r2eJ95UST25AfguA7U39bVHYcE6MuJqV1MNvhL6tsSiJPDWmWn48chpStgmCbbMSc5Dgq",
  "key9": "53VzmD3wpDKRwVemeyNu4Js2KejNRcogwjBSjBuH8RG3ddNo3FuGzckfwMjPjY9twsEZEBfpSb739k6sFqXbyeje",
  "key10": "5eZ749f1z3rKGDogfwFyWU9V32D1kyNjPhvqeos1Z8Cd5DTmSmT5dAdizNn4kHA6tZJbfWJDgeUY1hVKxx3eTURx",
  "key11": "J5ZnoBi7NqntF7aV1oEN181bZ8wpbd861iMyw5KEkcfMG3i7AbX8jWUJxDuW7EndM9uECgPJqhHTdemcRHiC6Sv",
  "key12": "4Qfyq2ZYJSqtY1ACrhLU7ejHCw7x61BYqRBeyfwHkcMqTgb1XeV6MgYg9mLYS6Csnjw1a4haJbiTFp6hazc16UE7",
  "key13": "4eTzaiuhk3xLJyUWxd5umEorj7xfpVRSRZ86Z7xvVpufA2qph6xjij395mLntqn7NH57H4SEc8mhKGyY6yMuhUsQ",
  "key14": "5nBCeKDJZPmxKLHWwyfEdsHcw3yqHdrUmzuQiyXnpkKmj1affZ1ocKxeewGAVbHZVmC6aSbPnC9Ax4tLe8NyjkQ",
  "key15": "256bbENYtkyQkppEAsxwb63UkYg72uQRuaorR1ahgn7VgmNMWD6oQEcGZSH8kSAFMiL2b2kaUrqQKe44CaRfGMYv",
  "key16": "38HwQJdYTrkFx8DXGy1f1PuHhPwBctgJvMVAaZD3MRwqmfc7tskPUtvAkRn653kV1v3VCLFyE36TkXn4Ajh2m1EF",
  "key17": "YVvbxaN7mGcEACKPvFW71QXjzmL5WoVjgjp3t531pZJwWmj7xZBsigrN9n2kehFnVUkKJYA6MZUUVxoRtDWTKyX",
  "key18": "45wfbpkVJd8YnPiPaUToXMY35piazefEa6Pbaei1uCTVKs7xgJWD8wFTpGYnBj6KbZBvBGsHUvri5VPzFAEg447H",
  "key19": "4SJ41Dw928akmYLxu2m1dbLuQNc3APYTxUhGAmwFaAuUjeCDzxwXk7SxEsxjs4eQsEDTZ4EJzYYshrBmf1kSNUv",
  "key20": "4dPmaivGV9YmixxPtiQSLV8ryyQ6EMzQF8jZspkHo4PUgWAivpGSB6QYBq81V6zkFmt5iRjNW8Z6Mya6HCWs1257",
  "key21": "3c2zsLBdfsD6QtUEtNdiTCgdf5Wquv4mZqcrae9hvPNdikE4zh7Nb95NBm3FaKHQG1SN6VyoWwR49rvcU4hS99E7",
  "key22": "668Pe1vrgcbByrFFecC7gNxKMjA8GwiScqsWEUky5tcyt2bsv4DUFugJeYdwYiXM7sktjDpQJdqLL2QtHYkU1ok6",
  "key23": "vVJswBaS4LhH3BefEeZVhrVBEgH4kgyqMVu5QvfkTt9nFDvkC7KV5DArd2v9RPReFGNUqWvmmsoUsRWXtrZnq23",
  "key24": "22gtAdSHa68HDhzRvo3xJ36GYNVjhJr8gnobEZt6PBBYQ4FPr2wzpE4ANkCR9C4z9KQqABWFxLn5BPtsF4pAXxqF",
  "key25": "5kCQDn9md6JySGVGBjiXnwusyHeczM85CQ55ipWgMfARJKJdcMaVDkFoAkk8kLPrviAsJtnhFQRSTHe22GV9v3nk",
  "key26": "57kKnYBXkyeiUuEWUCEnmCYA54q2qbSw4fYxJkPS24VAy6eTkJvoB5FeSfSBbh1QuQ5ox7pctU29ZQkTw86zxzJJ",
  "key27": "3wHCYs4h7aL251haChEE6iKH11R7vjHGeNicEygoM8dU73XKWjL7D1pWjFKmqFTzUGDcPayA56HkGWuYbmJNZx9X",
  "key28": "2CoqNymq1X91KehfRRQ1gWbT5mXrdy5sbeYkU9RjcZSJzonq8hNPjbGRh7vHAn3fLhMJ8psB6jx7WMkttm7niE5k",
  "key29": "GauC9qdstvv1rfBcx7UZCT7P19RWqcqznoorgMcPqPzojexUY6As2C1z8xe4vy8mLiLQvsRpNhWzk8ix1hAWBqf"
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
