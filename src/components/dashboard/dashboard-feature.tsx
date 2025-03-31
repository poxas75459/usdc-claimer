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
    "ny2ccEgxVim5KRayLqrHWJdfiqG45EqLLmNhf4gJfyAZP47UANPnD2zFnRXTvour3SkbZMGVC9zE4nbn33vKu6d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BZhMDb6Ejn2gnwhmyU5ZVFqUgQinitcmwa41fKvFpGcUJiozbjCuwoK7QpFxhKFeiK3PvTQzXFmhvtwfhrBcG4Q",
  "key1": "2Mzi9sbdQRMPwhfxX2P7N7mp2Fq5oySr6RexMfnVCoDtX6t4WJ4DNU536LA6FX3fQ4zu9iB9aMDugzCisJcq2kLu",
  "key2": "5uSRgXACxEEGoBFJwQ9gD6ywD6MT67b8EnDiUA5BCsHJh4h8f3nDKDdYv2njbS6zuHHmc9wxhhJiq4NL7cjzVH5H",
  "key3": "sCM7E6ZMHv97zaFX7Psv8h7ZsQQDtfoDt6CdPLp1Hq6ysZP3iNwk8N6xb3d96NL75oBQLongVmxwBPB7aHQ4HN6",
  "key4": "641MCYX5brSN95GqEWQ66mCtztNHAiAP2uKM1Q2P2xi94fxjLdERgC6oViC3i9UosAExf1sheQFWqnktdEeCBcSv",
  "key5": "3h2LpfWKhLB2zz7gaC7NEnVSTm5QkPYTA58QodXi1sD48HwxZ7YUdrav8Dja9DojhWoMoUpXbHG3owaF3WinKvPx",
  "key6": "5RMzU9Dz7u1GnEGBWng247zvUKZhjTDMjtw9CkQPTyXBxN4Jgg8axbZZWZA3XdjXjH6GmqgMoLeLCxSvvjEupEpm",
  "key7": "4dhVvZbsmbE2Vc1tmAhyfQ4rorGT55rxSReWQHLnC7fVdu1rrZwTdZYCYeG19S1LEbrAkK1o15rWd4WBn46EuZv2",
  "key8": "5CDVZrDtQAqad9KBAJTwnWB1jTyzWPFwNurTk8bFEWcFsunUgogPxdYfTTEoHqTMghXNwHJMzsqYiSG44aQatqby",
  "key9": "2F3RVDpXUMXs71FajwUmqpBGUukv5NkPMuxukZadPntmNcQYZqjPNZ1eDMfsQPDw74qKAKmaCHey7gzEeB1nPR3g",
  "key10": "QroygVCvfpYSRRdv4LDjxfgZDuh7vqgQrdp821d5FMcp6PnmcDiTBS44PHXPFU8sKLBV3YpmGry5j7vVv7P6H7T",
  "key11": "22myAW2aARZcDWjjz9eem74GvYJApWw73F52AiXVAtSBzNjQeEk1izAiiG6BdXs2KzrVDncdQmwyL6XFQdCwpAVR",
  "key12": "2JEDBfSX7QQafpKfbMFZgueV7HLU9qaFZzKweK4Pta3nD9icTB4anGKTGmkbrQZwDePeaqku7qdY4EnGAVUzkhfP",
  "key13": "SUHgSE5VhmFjFptKBwfj7PubV1bQ2gyrbLVVT76n7NbBENb1wR4njFzY7VZpf8SP9xM5Vd8cQQ8cEoCgPsA1inE",
  "key14": "5gtucVgowmJY8NtYn5B33NcUgtmAxW8GDUnFAgj7zsDnAPegfQhyXvN9NmPSJsfU1FfvwTz5dADdrn4sgNkg1JLC",
  "key15": "2We1ssKTJBDvNLUKcHQx9F57kygcC2C1WctB2R3P5Uf4LWXri7VhD1XDKCgVUzB9QVKLLTnQDHNfe8aPnTf4eUW6",
  "key16": "2JSdbr8tZPXab5evAjcZZY53QykDifyzovfkjRSdn6ExW1t1xpc4FhFBLit6yidFWLtsBDrFhRbH1ZSqHDuExRcV",
  "key17": "61yrBfgW7jZx2ovwE9URAx63oaPe78tth2MxFRpsveKoDS9gsCHLo1CE3vvfedMprQC2pu6yAWvk8Ts17fbG35na",
  "key18": "2irUwLMiwZzfRfy4NCwgJQSgAqo3dZK4tP7msk6gwrkVwvDGfWZaiMRAt1nCcC3cdVR7CDSnvpRQYB2QEr9GsjFQ",
  "key19": "4oea2ajLdjVsqA3YNFfviTzwSoFtkFFz2mLwDr55NL9ckMEQNxrnF1eKVh7d8vzkQRKL1aCbTibTzPnAnZ8uNv1P",
  "key20": "5XqsaevFYL6Yd6HS5bFN9zCmLJRTpkbB7dQZEMYuJiDM28CQYZANKHGkgEFzxpkRKCmm17RzDLmNERhD9NSWCzYv",
  "key21": "2V1d6yGQ82SytYLWDB1mY52SuCbKjtww2Cb1Gbg29QP9wGVKJaT7GA4guvMCAwehmx6JGPfAuvehwYpABxkqgFE8",
  "key22": "4SuFeK5Xr43wLqFEV4w6FvKTLc3o34RTd5yVLvsuhn13JetVe4PQmap4qSr4mRauXJRpNaU86TBpCbvTXXTsPuCa",
  "key23": "EyZmgKv4apCK3BeKweKVYr2sB72Fzqf5z1pY3PDSX6pRipGkhQNuZERc11RswWHGC8aVhHzoLE5NhfUx8bfSCvd",
  "key24": "jMm2wHG45aWPtSyJ87RdSP7EYpXnRfQg3gPqzmkm13R2u9VqwKzYiXL4yzuhDmTr15FDksVzRX1faB2G7GF2JpA",
  "key25": "5sTpBdcTuRuKm7dV6Zi6kxwY4t3o35o2wSogs5gA1S1eifDsuFQruohdGSL92BbRQwHLKKvoAGuXgRdRBDSKwBag",
  "key26": "3ZX2EXGck3G6Gpp8xodoGZQxCr2gYcguPpxD4tYaE2ExxizDvnez5DyhAhyALhbeuYLQLQTsF4PWPaBSryqCRPzZ",
  "key27": "5o5x633iiVCzeTjBCR9m6xhTikwTHwfACdicrcVTKJKnz9azHYn7TePNU3H4PmAHXhHcriNtqb5fnTMgrBQDALdF"
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
