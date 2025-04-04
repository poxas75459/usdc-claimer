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
    "4maNSUhXY9yMPtRy1HYhXE5Js7zmLuLU6NWFxXyctvxJPAuAgx4AStwZXpnWXRc7tfgy6esH9Q2cLATcg2LSatEi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WiERdf4gnp17RovNxzPrbm1p3xQQ7rNkm6mbeTtHd5G52R6GhXaYX4teEjykF8pDd1JSXNp1dXXmtmmMLF2hxP9",
  "key1": "3xMzK6w8AYAhqRE8rf92p3TmoYU6oRfXdCe4YtrRSDsUmamo5NG7yF76yGax1G8g1Wgqyh7CaVqPfp9LQd7mBnmo",
  "key2": "3PhM5nDujbx6aYh1mb5d1pQ7EALbvK6C1v64uZa2GrByfNcCmXo8ut1hBhEfum3Z6MKND1JscSc1XrvCCySY1XBC",
  "key3": "5yMx1Y4qAF7XnoQ82yD6GGDGqFVWnDffQ3Z6bGYTgWHR5ZFQNVUT7Qc32GYnsMf5vzso6hmkPbTLF1TvKhBwqbqK",
  "key4": "YXoHgGuR9QSNkv3JR1BCmUT2RUqzhuwQ63TuW9RQUF1mbBN8QDQCntkTuxPLjo9ySe65qRgjnGaV68MFV1QawdQ",
  "key5": "4cAUVVDnth7XCAzuxiRYQJeYeAx2BvfBEjWksXaihZBDsGUkhDFXhw4kQmTiZd1XPJQz1Uf26uVZpnun8oYQcjX4",
  "key6": "3tADykB6Qxy6P37S8ZVEsDo9ej2T697pKj5pj6MXnSrUQcxaeD2VzNGgF7VQDSV3misQWZzm4UwPgG6Qt3Xy2c2Z",
  "key7": "2uM84QfUbb9KtvZfogoP3JLCLshBF8FM6pVcbHzQ9hLdAyobyhAjZrc9hMNVqXbMLy4ZrL8ZEy5B8MP1ZGXb7MwU",
  "key8": "5pGsdezhH8fAswUayuGnFDQWiPcQ2Qm64sfT2u2FAC1XgguTr3ate9m16FTtc9XbwY2yJjdTANmpxVAM5ithknsJ",
  "key9": "4M2t6w9moSHr9BVZ5piFMnUwjymQTzdL8zFHJF5jAiiPEx5YhfmAkbiHAeVff6Px29a4jUtmtducegFeYfkB2scJ",
  "key10": "3hwUyUxEC6SMX57NnNx64toJ91APDThH3VWe2seoKmnmB694TZPiz1H72BgXN38Q1HR7xbfc78CJ3zmCk1nbWwt3",
  "key11": "5T2DJhV2qd79baeusKd8qJ8YMumSN83aJMgVdhUPPYfC2JD9fPSh5ZwZAkzsdokmKf3kYwS3GBmWHbb4vjg7AehP",
  "key12": "28G3HdfJoxZoessoW1k4sZP5kSw77JAZE9qHFtz9pDaVr1qc2jAw5v5NAFS4KcyuVcK7P4cQ23rov1cgRJgttqvt",
  "key13": "3oNNUSpVGd52dA71HdvBQsG7JPBCxZsoMUY2v2QoTTrGVHj5NXZAfMqAbkTjh2Z113Bqf5v2mPB4WbnyXEhPPinZ",
  "key14": "58oumiztcRP9QhBNz7wxHhW14DSC1rXvMJEYjvN1DYgmxhFTK4fMhBH9nLijhtemsmTawx7ASiGfBBeewhhnrQSJ",
  "key15": "2vPz7uoMFN7eoovUAE1LRjRxJFq3BZ53a59Ke6cqoVXgYPVwv7CGATX2ux7jo8MjRQZouy5exYcRa5BUq6t9i4Rp",
  "key16": "4t9qCuio8eQ127cLKNEZDXTfXw5T5Gvp7TgYZ2GntNr9F1dZgZwRgwJE8yAGZWgAFWcbWknnSNfoFYE6EEAFoh7c",
  "key17": "2DKgzHVJDcm2bMZG4mTNvfG3qMrCzJTch4U19Mpm7ZJQM7UXFhGof3pmon9MqG4W2sqvJHZTFvfhrFTRkD9DtkoZ",
  "key18": "46XEX2TPHMNBuwygaXELbi37vfTghv4JxfBkyNADdxYRDgtRVzbKZeXoUA3UU3CDBxYPmh76JcNLeR1P7SdSfMhi",
  "key19": "4gH1hmT8Ssqwzq8dReCViXwyW4VV38XVxX6VDw4axNrCAXMpGg79aQWdLjgBs4wjLqsG3Ly1VUuaB37i67kVD4Vv",
  "key20": "65L6gehfHr5KVufE6wuPQMcfc3NFtHRXSMQqvqPGJf4o5bB4S4aYkVfwTmHNj85BXUhKATzfSdYeR89AsHUD3cAe",
  "key21": "3hrsoxnz3rqvTZHAMHt9cfAjmTrhQRW4Dwjp6XEG567ePWk7g1UUDypebcFgvkWXjAzvC4NHyq5V7mKqTPypiY2m",
  "key22": "5q7R7wRo6CLP2rAD9VEgMcm7BGo19PMBmFrpoPoq3H9fkLSa3NtxhE8DLaSFkqVMRhtSCpwomCvJTrrkpjSupTQr",
  "key23": "2xXnyExDLCBZsLZQvSr1CcKCweZbXQ7VfgNvfwxdRbM6c8B2GGQTWWkXdZ3kdcYU8Ya4nvZVzTPC9o7HN5AAzhH5",
  "key24": "4SnjRymyDLARZma4smUNhQPzrC2sazRtnVsbWCxJrUQd3FdycfNYbtiSFduy6NvLBXck28PpJ5bq33NtGcGJmNwL",
  "key25": "AQfgmPqyujEqcdmeoPZJrsZDKnHv6Ycs7i16zDC2JJuN1LUBhW5LPHrM6fyWaSzgUcuKMMYpEozUPs47tXHHV2W",
  "key26": "4ojijpFFaDuymYn2y9fWTRWSNsTyuqg5Laa27wMR2ZJ7gLAjqWFRcNfymDr38jNTsQNiBjvSh9UWrxQVSQ1qkMvQ",
  "key27": "5VxUGbAE482y4EdZWp9zyz6LjKBMBJcgCtHtoRAW1ZHmse5i7uDvfm7r9zva58A4kF5s6Xmt2LwwDz4Au6u6mzVo",
  "key28": "35E24s451iKH8c9B9QnxYbJ3Rm99RVS2vkCVv6uZt9saVuX5rcCrYuGygQZcBrv2RiowJVmpLqv1qj7HhYjbpS1a",
  "key29": "4GfwCxRCM6d4hmAjRvF8VoUrzSgnwEnzXavKfVCH4mvhm5THWNKXGU2KvJHpBjsjb6e928GaAAbu14ux8gH6v2H8",
  "key30": "3rRC2Bxkmcjh2Fj579dXSsqVVHPDrfNjX1GQBJUJ8QHWzPCJbqcNQckxsaGNYvmBEetGZWrkwhLdj9UTpFAkQB33",
  "key31": "5nX9uwXxSN3YpFX2daKF35EuuyyDHroZF3qz63vwvXdRXQCZuUTDNMsgsYdEtyWMyJK9iHPFahr8j8388ZY7YvEz",
  "key32": "2waDnSuGhtfbF444b8ZK8uv5XsT7qozZQz8V3dSsRFGV1THmTwJkiZipp1v2BpUsqbiypPZQifusXWbum6DuFWdP",
  "key33": "5HjEmLxBd2MxYEB3vvvVMtpmaLPE5jZ7MMTaTNtiAPkYWN7xns8D4aG2FM686oc7BkjyLtLoe7tMLnTgtn8Qr42k"
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
