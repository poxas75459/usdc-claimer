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
    "2C8Ef5RrUCtcPYqcmYtNC2qWPNsZW6uqrgSP4q19Dir5k9ytAnEdFn1Bvm9fNa26Wx3ZYXAeVrKzPSenywdMVY6x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kNCG9BgbrPHMdyGyWbdGn7tbcyA4JP1JdzzYZ2crNa4SuDzPdEapB7fq3AhvB27uzikTphjcbCBqXAe9u2CzsFg",
  "key1": "3rt2awvYzZPTF3rpXQZmXFPKCKGKVYUwtwLFzchwJt9PmYqRbc2Kqn6rXyFJydfxFxKCvLBCWvuJQyeGfExPoAF8",
  "key2": "4yRKg8zL2wHQQKNnVQTghh9MsaTtdAie2pbEMUnv3DRb5xrD7fQKonSvusuuaPieN9rNpRLLoR52Uh17AvMgD7Te",
  "key3": "2xqmqucYNGJu8q5UQ5BcX3ceAb7gsa7xZXjKuHLt5b62CfahJ6U7vRn1eaaHcifaqorj7t9QH2AwenCYpp1AF4zv",
  "key4": "MetHn337rr7Gue4HAGwKAeipZynqJfpcjWwtvAqeb2nZTCmVJM3eTNzPDDR4x6EbwgMfYwBXqSqzeo3gNkxdDjB",
  "key5": "DDYBSM1utA9iWyRZxosRaTX8xa4GzTz4pcDMVmseJpA6mKCdfAKMVWyVYQoDNpjxC41oFQ19YJmePPraaEuxqNN",
  "key6": "24R8cDp2dRdGSzk1nsw4hN7GuXWAdCYP9dUkwitAnu4rZgQiFdkFgV1SioqQTU85LaqEwZMYMBHiGtqwvQnPv8Bf",
  "key7": "38WWULf4SgZLQL7phJthccYrMg5zP1oNp39kukk6jmf3A9UH8h1CMXL3CKp4qWSiMX6SGEwpYJ53VzHZt1PtX3vf",
  "key8": "5THruxh13e3c5LzFoG1PE9yV7Fam5edKAu6GGeobcGsQCUoMXsApx7cFeyp8kghaRvHoJ1keVwQsJhabh8a4jQ1k",
  "key9": "2BP1WMFyhKL9kiiiyED2QmxH8EneKbyGrfogwvmNTByYR3j5MBYUeF3shJGb6gwQH2bj8T7MEjxJvJHPup9NfYsv",
  "key10": "ZR4gXdvYiwQiXd9HwAtp3fkMabz6KuJqZZNWwaNBtRy6kX22HVK5Nihh7SoKryLkNLJEZscoAy9J6FqvC6uAyKa",
  "key11": "2rQHTiri71TeezMmM94jXwCac8puR6xTBYGRTiyaMcMbbNHVNcxojPAVN53buCzZsvbXWU7eMEk2N4PSRTr9frZp",
  "key12": "3ZVPiUeaeAV8ybiW5VSnae7SZ7CYW9KAWfkFEK6L8CQhBkoLsQ4nv8VNxghfXMSpVj79ZWX3teSoYRP7pxAuEiPi",
  "key13": "3GMoHfE2YRPy6hxQxatchFt9LD3KmytAypPXeS3dM13p46BhaLKQEjDbEzdEtLVxY1H5eDrkvMv4cK7CuAm9KKdu",
  "key14": "4ekzmwXE9Td5pGkofV9QuAcoHUMCDu9jjKTKhoEvkHjQSiE5qbKETeEVPho9Fo26GkameDnN4FxJ9Voegvo2y1sN",
  "key15": "4y1UYTw4B8gUkodS2hDggonusoCCfvKdgEdxHdzhrwCGSLSc3N6JXkkVSbWjFLhtBRMmyk3PGL55EXfFAThmYP75",
  "key16": "WSKj2XEkibqsQs8SApreR9G3Pjukgh9UdQdk4LkvJ79fE5fzs49jhmtiD21yavVdpAq77e1AqW2Uk1eRTbKMxZv",
  "key17": "4Jsj7JSMM218o9zhQu1mdAnLNzJMwZHhm1fVNBcHh72bxxF4vqBgrmvL2AK7gydPtymxnzXKG7nMPiEKiKFNSz2X",
  "key18": "4UFR6YjFNtN5RSvFXWy4UozNioDnJBh4riCWhsDuVvaDo7Aj7wzK29VvsmqvRkT1auQbzXExyM3BqC3N75hz3so6",
  "key19": "4Vxd9bc7QUuXKbBoL6TMi5P49gCG6Re3V8vQKHUdUQeaWrLZqZow6QHCQJe3n4QzGYLnTvzuZDKdbh3kPkP1LK1H",
  "key20": "iVJXWLD6joqMomTN2TYRqDpta1wMtkDMU8yrXFnRgEZ4HTqPsY16b1QcZTmCsVaxCJjtSnmty5RPiPLtaLrb9au",
  "key21": "2w5xtYaBcqrPFGPcBZjMyugY5jKttxaThwWVD8PAnaidgVXYXBoLuYU3DHdtkbWxeUfWn3SqJ2FknaxNDv9qrC9h",
  "key22": "NMfzBsMr1kxpA1n9iZNupM3jCSyu1PHedgbR3uZjBh6iKFubPiZBWGhZdBrhBaL9w1heM2eRWng134FUskov4Su",
  "key23": "3bZUi4gVnMNSbxRoMThCYNXthubAPigQw5AU3VEzsVWbj9BacMvDKsWPqpGEuKzwc5rS2YAJQAXw66rAkvX5noLr",
  "key24": "49nnGrofyfsdke51nZMjkxQLDekQgmDgnFEGLnznMpEuEAGR6sL4XmTH4nyBhya8YWkLbXWPNc132LJWJ4zm7yVR",
  "key25": "2JdzE3GnX3nAzLu9ReXKhaZdcjxGM5Jc1NMmV4KfwrJaAQibPjKkbPYfqzH4PcKmc8KAEEcp9WXr6EDCLoRKRgGk",
  "key26": "2DfmPeJ3iM4dRVt8eE5TH1kEVC8XPdhNUyF3AVnPxwDiqc92ovz1nggFnPZrrojsMGbBBegYh2f7JYDwjQxYK6Ln",
  "key27": "4B6YMM1DXkkit3jwTn7yDBW6xB3CNMXMWiNrW23sHc41sRqgrMxU4NL7wChfyTozUS8Cc6vJnViuS91USnBzoq3s",
  "key28": "3hpS1HriS1SWaNoZCBwrsdy1wSvb7yy57AafiTRyjauB8WWH2ZvUCKWVWrqGNtkKqFHEgMuAA82fD7pNCPpTSJfw",
  "key29": "4SpPHbptsYgoGQXxYfsjVmDg431zdFwGs6LfVyBEpYz8p6Pe7YT7HwsvRXpctLWA4ah18ezwcAHegGNFkXakEfCc",
  "key30": "5rKm4uAhFHE8UsYF4EdsiewTAwQkA2rRy3TCKN7NaMEAxcZmQC95eBYYUyJ118QrWSh49qrJCT2e4N35eMjMhdHt",
  "key31": "4qzmFNQGAUcPFmmm1fRU1t6tT15xXr6pdLg3JKL2ccs4VYCyRV8XWc22JBJMDdBe4RuTSnjb6runF4c6XumULrVs"
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
