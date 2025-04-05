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
    "sBp7H3DFr4csTTKdpLQRYnujvG5LSLVVjDeR4MzwhMKBZLBe2N2yDq4kn5JNAEwngRPtAPz5CBYZ962FgZkXxLE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3J48vmfqCupeJmX1oScHPbLrb7NUEe1bbMd9ba8GeymHLwwbpUJSyEbh6fac5VtdpCouArsZhPqqW9c7fcQiZis6",
  "key1": "gYd36KdWjEYbTLZNUokFLe1K5872J92TGaTScXDYHynE6Lz2i7d35E6A3EntYAS3DYNgrC8UoWUAsMRqgnC22X8",
  "key2": "5yERssjgmqAv2Mg6kJjYzz5apQRaUtmEmPC1V5KgJGVoYH72MvLwE5Ww8EM9jHLmpmorCDcJkR89orJ42ueRSB1R",
  "key3": "5Cn99tnCNqeRg29g65DgUsF3wbCUNYU4EC4qAhkFEWyAGZCHtP1f4yHDSLoZ97Xygfd3zQE8aVBiLfxXzQuDcDxV",
  "key4": "3TQZnJYYzYQKHe8waArkZsjuGMsFCuDZB4gro25Yj3CjiADUU8gkvYxvn5xgUt35SSkeSpBQmQCBropndaJz7Ao8",
  "key5": "2Ggj6R6St1aCYjuMhngfNwYRzi1o2B8hJCC7K7BLYGcxWEqRGUzvdCKBVX7aQTyuiiBU21HWWCUaFgWmxfx6fZqG",
  "key6": "5uyjXyER2AcXV3nGTWK2oMhdZQa1hxxoG7iRQTRc5geZdsG4FoaCHX6aYsJhJgYNuGVLDe1PH2pSwVqQSHRn5Crf",
  "key7": "y6Kx9FCjMPg59vff11xfyfKDpVSqUqSnfnwVy49o7PBYUNPL6JGP31nCSNtu7KJQJDtGBt4fejYAjc4jYpoRWBS",
  "key8": "2L2Gih38n8BF8ZVZD7zsjRsGDESPFfrdSagQPay58J9ofUQdfvjo7MrNHR4wjrTD1Xq8cU9hRfwTKqWprcFCcmqc",
  "key9": "3BJWy4yQvvtEWhXqBgr8t5i6ukeq5YcgxEegNKTNM7wxcAR96oS43sNujHRi1tTQ5fDuhYDH6eKRyx3KrJzbN1bg",
  "key10": "3gtWbASFaQbVuFtfyzxcksKvzL1yi8YLzeH5wPRt9P1ZN4gpwWiMPQHnR5gmQYKrMPYJSezYrTh3Zc1oUu21Dcdd",
  "key11": "2tdp9yRYYXNceLqWgthnf2sipGY6cFfm8LVJZvqAmUCtGT1PcBL9UNjdBodNazEwbieuWc2C6kYHeVB3KYdjqyVw",
  "key12": "2HAW8rcThQanr5FpJiUVnDUEmpa1SaW36EACCGugjrMRQua4eAiHPRvmaSEWB4JJxMZr4qcfVR4wM1mi5oFWP2RA",
  "key13": "VQE9PyrakCYZtTwuKFL539UySBCaXKuHk5aDEXXgLR1wvDsQ8VPAqv8AmczNaboXvdStwje46BCGfE1mGKxjNzW",
  "key14": "2paws6K5SxqqS5Vhf7ZfjcC5jQntu5YMHrEYw8L71KtLrPGeETEXGcA4rDdFKvbFxR117jh1tQuYX4uy4Sg613sJ",
  "key15": "5sBASffZdWYLQyoLQkH5bPwEfd2KbNJGx7dVENZrda4jJYAHc3p28tzsKdtxSVLR4ZDF2VNNBMYb4bxhnxhC31xb",
  "key16": "tfucA6R4SDtmUdm98MuA3XsXkaK4VMbEyEdsQWFgVDnMFJkbKZBVdbhkoDHWzPxEHkcSzavKAsndSSL2fqsygyk",
  "key17": "5pb8RjwPxC8b5o5cdMJcej6rf79HCn8999Dp1GeuFRdEPAvQSrMtYSLySuGkCY2jwZjs9UtgYZhhHApLNovScy22",
  "key18": "3mB5AgM72r7mgmwZnbLAzhnUGv962VW7cZohUzZ8aEav3kHw3J4f9Dz11nCvHLzqAuzqKgo64Hca3VQA6VMzxzXW",
  "key19": "GjgQ5CiQVNi8J2FJUepjuJkgK154oK2DHjymATUjR5bc75VBTGav3RrumTwWdiFdq2vyRNTBvh93bacmzNcqJLK",
  "key20": "5SprEnT9BmpRVs9UBBqJJ5mGHuS9HriXrdX1jZXB32LxZtgpQf3kNy7skxdAnsfkoCRffL5DY5y4tKDaePMMASQv",
  "key21": "1pKC6LeK3pGbL26idXs4dRWr7BoB64DmVjGV4DWB2cy9mpdKMdqZdpMXoLWhEPizUsqT6nqPJNZLf3e8mNJfagU",
  "key22": "32eBoESrgoTUrweh8r4WVpm7DMd73UfYEtLhqXJsYoUZqrGDtF6Ds7mrevFeo2pgkAbQQYzGBWa3ETjGgcc1kCpj",
  "key23": "5hJePN4JvVPupALKzFpD1tRertu3YYg4d79EtGJc1BvTFGoojyr9Dt2jhB5hh6MePxE3gYb6Waf3GhuZEni83gD7",
  "key24": "5ckP2jrvKstpoZuSTjT9afCsNarF3YjgE9Y2Qh1c1cdbi2H9io5cHTXhYp9TaZVcqspXX5nptddWVkhwyTMs7Esa",
  "key25": "4QgXfTTLG5nn6VDtnHSGxRTMTiVZTM6jPNedUUvLGGogwAy5fBE2fXCnQwYBnWBcLtCXz56cCPbiutLNiTL41KH4",
  "key26": "oNxNUksQL16eFgt4FGbKdUCUW3Kffne6rPydFaf5xzx1juLp61A95XD7CmFA71eShvZZFyPj6nL9iejSkNpv257"
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
