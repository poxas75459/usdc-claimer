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
    "3gvAHKYYu9J1KLf85FfNfx1hzZvPmLFFRfeNS8Pb4XG2kA4HAmnn3E6y6L15QGyo1yDYP5rddej2JtRT2MDHKpvK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LtewD2fGGAVq3itn4Jay2WsE3oPSTp9DP4Ykxce6H4SuT6CWgwqPBMpN8ArvKqYVnTiZt5MkDaXnSaRBmyyZtaK",
  "key1": "4RMiDs8sX1T9GbcrtuzKDfB9efenwJ8rtvbjvYAQDi8Z7aPxBQsnUkJSHR145pTgdZ3G1cZpS5KKkAv6RvbRqXFz",
  "key2": "26hvZKwE9KGtnkdjyfoMkT5uKVq7XZX9Wqygi7FVTpPBQQRvxS5TZvTACLziRsuFTQ3n96LbSpJiBUwptbRyPzZo",
  "key3": "5A4c5huaag1pyhbrnZ3CUZi7M1YkLh2XEANRtoxCRf7GXF7yHintCw3DnJKAwyVH4Thgx6rw6qJZa9DDhXhcibQW",
  "key4": "5FeY6bmndfUD48F22cVSsc2DabNZNiu9rJajf1BND9X3G7HKd43fXbEw4V87YTU7yRuE1FJSxCqee5S3uRfZ4GY4",
  "key5": "3pEP13TZqGZi9LCJuRQ9JovfndQVTz5JURY1SavSD2DokQeJa9RZEry1av1YjB8Tg3f5c143c2YFhMaXam591MiT",
  "key6": "65ygQGCm5TstoQuNfWgVijkPtseHt9WN44wamJVHwhhC3oemJyLVoKuMWqhwC1qNj5e4HM8WceXBUv5mJYtr3FAe",
  "key7": "2yfKpUFtyiX9Us2Goi8mc6UqrwjCcrnrW8mhVHUxMUe3DnYt9DE8EQ9ReGXBWQTX5sZu8oU1ABsBkcLpGdUHpNhX",
  "key8": "4VexVtXALnkFgqoZP5wvQd7H63BzKpt4ZCVzEowJB3e3uthDBNVnHevKguppmtkUu1CV28GMjGA31whNuas5zdDF",
  "key9": "hen6y95JaJwc32kHCMArzyi8oFdHwC6SKV3YS2RVegfT4nRiyCFJvPs6UZ9rTbH4ihsJdHYU7css33V9aTeV9i3",
  "key10": "5CgZZ2uS9pNtaySShZwzoz86fr6xpjtxhEVR386URk8fCCBt12hBBNcgJSuFFRVneQCXN1dQXmsyKPSQjrE5qFYz",
  "key11": "4wSmZoZ7h8njh2T2NBkSLwobyshivTJGcFzcvfQ26oPB8wbesP4a6UMZMVwJT6CjeNrdcz9HZM1yx8jNnBjkrunE",
  "key12": "5YBxy58NcHAQqLX9nykHaX2JCdAraXCPL6WTQbPBF6bZGqiNX95QxRBrcxkBFvpyR7wo9eEQeqH8Kcic7dpFvERS",
  "key13": "49iKBNc8kBnh1fAZDdSRLPSpJVRsAAQUrahND8TUZ7Fj39NKEeepvdkjxuSCy4sm5nBApodMdNEGPiZp6KvgjKxg",
  "key14": "5bbSB8ebL62p2jaTethzXqd1x442T2Y8wnKgVFZexfzpg4V2sKah2ySKGpNQbijzH62AVc2CxTqy9cNHVWfj4MCA",
  "key15": "3p9qDiTY5HduVYbvdykXohkSYzumPaRVaX1AHewbsm3Tdz5PEXhdxadv6fHW5yyU98gqqoMQXXWqkujKgEF5uqiv",
  "key16": "3Uv1KRybtvfCbqu6gRH6NGfWcXVqSdqdSncdJAd2BSRNYXkZZ3eHtcueiz6PkR98ezNKthSuKqr4xvxVpJ3Ct3xX",
  "key17": "67VJBTPWS2ideusgDw3V42LHrP3xcdUqngZBwyGmmbSf54CheAs8D9NQSsGJnU12p23qukPgF6u4aNPvPURnCJ4K",
  "key18": "WZKHBaoJwqY1gdD6XJ1V4UCJ5aDxkhetREpv6UhGpuSF1XA8kLUb4rot8GoxicMwx15zsGWdUTsgGJnWnQh7Bg2",
  "key19": "3mXWWFuSCwZzpcbAnX8U9khKwG36HkXmamwtZ8MbiXMnnkbenyFAePMN71i2ysGAj9mRnLuymu8wAANej4qcCHv9",
  "key20": "4FiHXYBjrfCe89f25KUyjt29keGNYtFG2VFZymuXZ4tGuGox3Wz9rWPieTpWz9wZZwnnTEV1AsAxpDy91xKybEG6",
  "key21": "4e97aM2UnZaAYeroAjTWV7wqQouY5U1sC2eUXQm7mmbVgk1L34MnDxop7y93TmHV8poGHjpSbvMfoPBNtMJWku3s",
  "key22": "3Pnjj2a94rTpdyCUMpSBeDzCxeJJtnFqiw8aikF1UUuVoZj2qu8p5dJQqUFEVuJX9nRsJZXDkzpt3FrC6XVTsEo8",
  "key23": "5nwB4cHJgxuWtdqTikL8UjWfidDmWzj681wBFSoiMja5yEMt9CqFesCmZ66gHCW2GAMyenWwWtkqwTGnygnKZ1RY",
  "key24": "44bwXZibZeQncpJDssxqsuazFs5WbcrkXvYeVr4LKNccw7khsJG7c5NV8ui1BCj6QskZRi3Se2zxguJ72Bkga7h4",
  "key25": "KauSZ5MqD2cgvswZobyjZQtsHpWCNYWnggHqG8WkwC3Y5oRiuS5QWgQzommPwFMndssmVE8hzjP2mc6BmnSuVZ7",
  "key26": "2WMohHakpAp2NBtwjtYi9EBrqDomAkjS8UA1eER78ip6o2sxLhjnS7yRVkX8rztDqwCo2T2RneBZeiJpbHQxpVYb",
  "key27": "59ym5wmBoXmDohHFeVGbFtCR2Bv8Y3MX43b13Kbw67boBbU9Gdnzn36Ma5LMztFmDwunfBP4odAhQVfvxUpzTeRf",
  "key28": "32FeB5WhJYGzzZdgZX2jXbAJpns9JPyQXBrXnmoyksTCY41949NwJbvWGzGbX86RGpT9dUstqQQQUN3Ddae3mnof",
  "key29": "3e27eqdtqsW6k6CdiwkwKh3R7TTw33y7TC7pVscfJ9Dp7mpqLmjTaaMteNmZxXVU8YdaHrvmhtDnzJqzT4nWfeww",
  "key30": "4zzvCqWEFU1sVnHXkHCN7oBBKSw9xxNS43Ki3WpmFAFxfTwXs25K8c8Bz3Zze8ChScbp35Q2BE27QtG7HDCCgYb"
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
