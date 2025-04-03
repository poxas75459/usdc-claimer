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
    "4seBPyjaJh9BUo1Gykodsb5DFRHjA5fo9MsAJGVwoCn21Xh4sLzaowCdetP8H8yzum4rumitHR68g33EkDvtguap"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QaLAnvkTd1pzNm1SKvAtD6F6aJoHLeBDdYVziAr1o3cP5v3SpUKW6SALBLRuBcPAQLtEMiZckwTV9i9LFZdFa8n",
  "key1": "44z9LhzaoS1NBwwJbXhW9ERjrtZq3zVe3tHJ6ciRaYJ85CekrsCusasXHYWwFiNeYNoT3KCM2FYaXvyo6u7fg72Z",
  "key2": "5qX5hGk1FPHK3ZiS86RoYpQzYprqZVzE8GjrkJPeFbe9uC4jkPayZ2GYeVKpuYNpuD8RNDkMT5zNQMxx8nuafLNE",
  "key3": "2ECxNRYWbJekMpgdpnqbrkN1h52F4WDt3doXApRyaKvgfL1PkXobCd8cnR3DCV5Cc3NgxDgS67aoxhxghMkofW7y",
  "key4": "uNZR5tCkARxuN59K9WEbsRxeYsN8yj15qEDxHmmdwHSXC2JpijobaSbXm3KK44aEfFHZk1XFDCm9DS4T4xHA82v",
  "key5": "31efXFgS2zoRMGUik6DLPocZNjfnDnYbuUNcefXuJHgSPRLnGeM5UqmSVavsE8ZCPtiWub1bVJRe9q8VdTxjxS8G",
  "key6": "3m7Sf86jgfSzXPJZaVbBatNrHuj1oWgLzUEDBtjdHGUxKftUXmgRuyknQuMfF7aGZqGjFNKUbmMUb2gaddDbo1io",
  "key7": "392NEDZ9FmmBDMTKzxkaAmuLkN7ByBaZQSdzTvtMF99CeE8zbKxdfqjkLrMRneVfihE6nEurPUHpz4DEZeChxrCd",
  "key8": "3SAw3i9A15iSj8APBD53CLBEvxV5UEE8j4Ze2WeyXxS7bGDyvXKxpkppvDkcKB6wZ5Qc3Qz39NyFvgPUcrUn7J5K",
  "key9": "5DbLyGiR2maGmjpsQywcKVAiZRHdD3c5J8ZK7tPN9gHy5onq17sL5gB8NqkSwnLNJwNFpdMxaAiYPvFb4jrvdG3p",
  "key10": "3hbY85oPBAFndH2mgnz3NKBg5eJs7AhJycGgBfmQLurq1sryeEh5k4W1fywkgvB2aapNS1wxW8B13CdcMaNzvS94",
  "key11": "3Ax59hkAS6YnANsoaCYjqnXCCmqETdPcbayCiowBHeefBfLWMSj9jPkZjmRqWsgopCefDmQffDUCh4jGGMuBop3V",
  "key12": "TUkCzw1Uwe59nG83xqjCHabdwdkP4uFVfGsC9RPMFXNc6sdULgUQvvQtRcY4QTounPa67u35hE4G1kwhb2iUWeg",
  "key13": "AUfaefi38h1eSapKMmY99Z8j19JP8QNHmydJateSPLfpLqu52PJenT5WBtr85idYygMjCkaaPdRpcDHdRkVxPaB",
  "key14": "5Yhbod2Mdgy7UNbEeGF3kazc31tb16ZgLQjh6A13SXMGL96gZzBL8NRQE8w4Dv9ULrhey6Y2fNWBdCWxZvQxpmtC",
  "key15": "51ysCJjxk1exsqiNqWgApo64D92ZE2sztTZJPbzmtsUWRET5PcRNyE3zm7v2BoSLM4Bu4otEh1iDJifr1nSsg5hz",
  "key16": "vYPVyrswE2PZcgcvrSswb36Ggm47UeVrEtVYysXwUiKVUexS5GXcYgnHdS3ipn8hjUzJ7c2UXsU2xRdN6WvfwYs",
  "key17": "3yfG6Q1x1H9Evds6nFhEQwiRdtsQ2P3U6Y3Fo7mWVKo5TWQTVSyYSAwU2BvrVqM6h9WmNbfHkyRBGKCqxAm7NgW1",
  "key18": "2yeadApuwo4h5mZxcefBSJYD61rdHexWXLyV9XR5QEPmUfNCRjCdJHdPyeGmC9P3vFKDsqCyv7pLz4GxkAYfhv7D",
  "key19": "5YfABgvazR7dZCzEqWAyUu6U9MovguHtAhdhMZSz8uCxddotj3HHAuk7cejd1a6ijoNzHZdygMJhCcMajDMFFqpj",
  "key20": "5N82oAtGsmcfEiMRW78hGzdEp1bykegE57cTbynCaumyKL1vivBmqmW4uUu3KwZ3P1YqZtdFbAUGHFzbKLQczMXK",
  "key21": "5NJZoi9286PxAksKB9upftSa2v7WXBVUEGZDh7CQzdhjGaZ11R36MCjCL72KwMCeAxnqwac9CPy3fKkkzhpy4aBT",
  "key22": "wGXw5tzNoQQ1mVqKDRLXMWrUczWpPKsfpZBMZXvwurhebCzwRmjoMYk42ji7asDkTrRhpWiyKgSf3mCrvawUaro",
  "key23": "2eMSNxkXsfzVT3Ue4nyegFw2oUnaE674NoeSbAZUtba3WNyXuLsg1cSc1mDJJvkugyqYTFpmUUeScVLZiTwWWWC",
  "key24": "3mVJDPKFSaGESKregFfryJD7uFXBNFpsrUJuJ8vAUZsiAbcYzZazU3t42yQQtb1Dsb2VUYeLhRGeDK2b46WJuVss",
  "key25": "5F4XGk9mHJGjWReFm1T7NtaMHN8KGiFgNvyyTproZTDP8Cc9EZqZFSmLWTwBng2dFj4VdnqGkBuZ8zmwA5PcGwmt",
  "key26": "2oia1wSm9xtRgEP16XgfiYCFv6yGoDs667PjhnADQpTV2jTpqpP82jvxKXjK4UQ3HxmFrsho9ZyzELwEh3hbeLcB",
  "key27": "3GoZDLfceccWdysB478Pc7PXAtNkp35c1M9RSkVbbHma6SQV1vLskurxBiAk1SxNybK27ydXZ3rUh7FNhpQ7GABB",
  "key28": "rTLdkqX5ZyL1w1qgUkf4AmrfsxLZyCkYJpDhgLuMETSsApKzGp4qwb2JcsBDC6rNWRBWWcpDGFCJP2MsqnFa7k5",
  "key29": "3KhrqXWxM3EJadjoUxLNRrHPVUCp2zMWzhtFBzLBKneMwqmBNKSpsctwfztadPAVFHJqZPBqEysqTgbKo4Vnx9MX",
  "key30": "VjdMEeYn2zDUR9JmDAEb8RB7GS7Z8fEe1h6xqvAAUxCsUtRycjLaNvDfJKNgp2ERvwf9CooPvA5jks1AAAxohfr"
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
