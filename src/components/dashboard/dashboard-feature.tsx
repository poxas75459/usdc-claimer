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
    "39omzS8YiXUWuWTgvPgquDYmSZUEjxYeRDiaD58oQxktN7aWWkmiCmXVhBxRAz9MkRgx5csA9KAyE6eos2dCd4hB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xDjtahURE21na6TUHCPFNbQyR4XuxPBHJKzvqad9HRZ8qy71yPA4C3HvmFn2d4Fszp69xyik3ARXGH1Ya1YSaeJ",
  "key1": "QHDWZgJjS1SVPh3PCYXiUuCLS5ht2WGyq4QRxMC6to2YQT73hKx75zsHNLLZ9KWMi1ffg6TNqzD27UpcrWgjxtV",
  "key2": "4wjg2LbQSTH34zitSYNusoJhdB2EygyPmVmhE8saEDfoCARzuRNSRbs1d7LrnraSx9q42roCsE5TUxjj5KxXxZtx",
  "key3": "2ZqhLbR7B3BSApSh7mHgTVswWMMmjLzy2XzoVV3riLr3YZZakJA9LJ4NJcnfMiACB5munhDjUTZVYfQJ7iwcZL85",
  "key4": "4kYiLTQq3LeoYmGZxmQMhL3eTWeSr8GNfGU3twW5pGaP8oBp9jeQxZpvuMWdLfpuwGCBsyuX3HnkezTujYv3D4Tc",
  "key5": "4mFkkMGQ47j2MqrYem4ZSLuxLsZpwnTGZJgtxDqdXF8SVdQTuXFbjdHtymBSTGgvxU1vDAAvoed1rUPb1N7LddNH",
  "key6": "4w7k1sC5bjKC54bnvWAPKekoSk2ViQ7curUMsU2NDaA1pnbbpzp7BJuRE5gsKXEU9Xs5mRYi3ZW2MyuqitU68Dvo",
  "key7": "5xy63p5G7SE82fAMdrGuJ5ZpNG2w2UaCrVTaYYfV1RCdXUwVZJ6bVd8deeWPxJD6zVfFPELCCiyBDQ9yphEzv3Xv",
  "key8": "4BA5sqEf96TkzSSDNajaS4bwtCFEkBqn5TLogjPY4PrgsmEvkEZkjMNp4k7Y1wkCPBxHwdDmRo1pBdUigXfi6VAX",
  "key9": "2Ez3r1G1ok2bRq2FaExaMrscPX2TNB33EJ4wtecyWqNxEMo3hKbbdTRGZrkJfJU1nosGZs3os9WZ4FgyEeXLH3GM",
  "key10": "5txTJh9j1Gu8SyA6b7wXvNyZDbkZ2cWzcBRA5VWmY4gcyNWNToJA6CRzhpy1QNmy4Z9YkkKgmsYLv4x4t6JmY8Bg",
  "key11": "4vrXwnZXS72VmUwi8gSy96kgzc4dnLEmhwp1AniCHoYgEHsfPU9BSEz15riYQuBggRTrpi9psVS97Fc8xSLDu6zD",
  "key12": "UKuBZhnnuN9UutUdYsy9o15dtsb1UpjHdiWaEvohh6oFUmZVPECW8GmNavgZ8SPdYtMEFGYyk93tmvoaghkFtG9",
  "key13": "5UyuaMZxKpdj53mrLNDLX5Z3txCefzQ3y91fgt78vP4g9bJnh2N36GKHMQZtP6s5HDjwqMEQspELAs24v8VMEiXu",
  "key14": "4gvanjiAjqDG8CER97g5dVacSaYQhKxAHqAJMWArwEEDD6pcQMp2oJ8auBfKyhj6hG42W9FLbcBLVzUkKoJkvtJk",
  "key15": "ERhasGZpXZrYfWj84MNkVcVX6Zu4kLSpJNiXt61GUYHyrsaCZYpPX3tDXUVd7DoVj4qjVuAywfQK8Q9hmnk3b8B",
  "key16": "5kabV6cT8cvkZDcokeA1TtKZpdie7B78rfyc8cp9hGFmQU8n94zUezstp2JsWsr5kJn9oRkBabdjAJLTfQAMayWh",
  "key17": "3eFgTiSNDLcbcWCFUtj1zVfqdQp1NfrVvXDPfm9bUhr5NZp4tyjMEYnX6PCUJS3qcjvrMNiFu2omXQCD5WqU1fPn",
  "key18": "5pYxTitzPYtptxjqEcbRSPJogVQ7jUv4vGfux4uuyNvBcG81GEtunJdRsFiakWCCtjWjMbeBXJgbZHJrrNCaHFSz",
  "key19": "2eoFz2ntao4rvmGvjzX3qe2iHQbc9sMYVC29ndUXYEjzQrCASXX94YD5RN3k22mNPdCWyrwNjYcoedSMizWCfd31",
  "key20": "AQGGhJ1HJJuatatKaih2ZRjGFhaC1W3nfprDVm277TpKAX7P3RwVkM2xwnGNuu4boL926PbWzkSAvDvXfNbeAgu",
  "key21": "3qNVD2Fng4PJsFLprSMEnMQ1ehoubGyQpbiRPYeavuiR2RH2Hi323xn21KNHioM9aNBdgoYgQVxAY6KGC61HHsmQ",
  "key22": "4ANKeVqEEgzbbXiQWBHQhd7pYJqBYhBi2rT6AYfKtvXx85D9YA3Jmo69EUR29snuNFKDiY7pb2QZHpHufgD47Mng",
  "key23": "3GEgrYrksWYNZbfnNQv59S33PUyULXN1bzbHZL8DsrdaAxCj5gZNNZmAeC7UMAutuGYz3MVbx9wNz6DNH4FPnpYv",
  "key24": "EPXWkuFDgi5sbpx27FwV5XvwztBL7ckrimKYd9My96nBDMByW6Ga9KpHYMisbCtUdBnmixa7PwxJxjZXvA4wQp8",
  "key25": "4wcFk3FWw1WViC7QHiJUP5S725huuAFLiBJND4jPcgezzWWsqpMfgFCe9e2pTFrfy2SvRrPghJ1d6RkwRrbwDKZL",
  "key26": "EP7d9cPEfu99Suo7ojdFzbdwnQqCwGZehQcf5HQ1PrhEYTDN1eJNdtmm7D8UAfeSEZ5tDQPuAUrMP6sVPn8sP7u",
  "key27": "XvmZrdTZZZFNR88Z8XFouez63v2bxkYuqkv1Z2gaxzoKAUjHf1YExjo1LiciCm5vLxefub3US1jFmi8wANPED6m",
  "key28": "2bQbUES7QefGSUZedhBNyb4dYuQjxkVa86P63yqpVAwffPv9S9hbdnJFmLZ5w4fUyGy6x8A91GTYRs6Vix9NwbSw",
  "key29": "4tweBcYDQa6BHhj2vecUtW9GhEH3Mgj281Y9dPRgjJyvUUdhFtWxzaEVTjwnidR8rbq23nag4GYZZGC1bT6CUxER",
  "key30": "LzmR8oZWrchHSiZMwYofgYdJ6PY8UhY4mia4yTerECtBjhtjNPGuJndkyHBNLXidHbxwGKgkrno7oY2k2FHzx2V",
  "key31": "4aBMX4FDgWpAVtvigTKzPc5EFjPFipYkniWUPDfHxRdtdjYAk2qW3iKVHARGf9KfXTVZ51SkS6QpazSBt11FchF4"
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
