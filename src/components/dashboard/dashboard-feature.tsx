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
    "41EGH524oRUff3tgPmUgafoubFUCtWVggLhjFny66kwuoMxrtWg93xnEFMbweGkTBe7hGqYhhpfDmkUy3fHXzHLt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wzZTMLHJxqEQspcJw4H43fPi5L2t5Xc7XuS5NTT13LKDnoKtM1iKD6FEVkWYYM9oZUWjsrhUgr1kCuVnXNkijs8",
  "key1": "556VCsNL1aNDuRkeWPWA7QibpzGhuP55wSUAupd4EQYnHscz2DZJAtwEJbsHbonqCXXBRdgEVLZYuXjJJZ3erDQV",
  "key2": "ZRHUZWPhVawbg48mAYSfJAuJEyEy5iBidy5EAgRfggKfjcrJJXvZ7NjpYaZSm323vzbFBEKDC4SkvWvz78ZBe6w",
  "key3": "49WY5fXPyDM2xvTrCR7fUJhEeqjbjce1wiLd3HJNPp7foGr8CRt9deKERenAMGsJExEbhNsKSfYi6BCF3wcMWdfH",
  "key4": "3frh3UHqywJugVBLCKRZ3MZfAJzCMx1s9e9BaKzKCSa5UErVB3hyAugBmc7bf5f6NWBYLaoJGPC36uFMcac6qUnm",
  "key5": "kaj6S6usVW1EN5RwCrhTHeNfKVEXn5j1MhLVtv9B2zRigJsm1PuSfQxFy3UrM732FJAZF5Tt4UwY4FJaRNeAUY1",
  "key6": "nRFuNKXkcurrAxwgbSqDMkW2rnx5TGwhGP5FENvfEp4qhtxR48J55LqUtywbbGufLcT2WKm1uS9Y4XiLD5QX8VJ",
  "key7": "5QgGTxj8hdRB9CexS37xj3kkCAgGhqRtEkRW9ootatJfA4oaJDYRu7JRkwu5NWNWGPUvU6r72JmZ9Ura2XLeDMtu",
  "key8": "3HoF4KuuU9ZW15tche5d6hdz4iCFfxYxGdtkemYewzJT4AryVx65dozcsbRrzxHnQZqF7qjx2Lg94q7UQySefxPV",
  "key9": "342pjAYH5rf7JFBJRE18GXPzvvHaqP1eLmjxCiSjtabAW9ntXiAmzLuq9NCzBKTeP59poxMcm6c8DsooFZ6P9Srk",
  "key10": "3kh2DZHQPGGJNvSi7VfZR47dWbYcMfBcr9aTuC1McikYEYbBCdTBbstBNjgwb9U5pVv6yXCaMmAo7fbr9JYuqnXo",
  "key11": "5TZh82ssRBBPF7GsANatvzMFZLhmSHyQapgtkdXJcDbuf2Xhme6DFvFULZMo8gTn1SJSmutYZHrk4BsttYzmjEWv",
  "key12": "2RAA48FYMy1bAAU3KGgcUR3Q6CUNJ99kBCv3QhcvBVgmzhBLV1a2XWnbJFMYEYKsVxmqsWFwiTZh1F37CuxfGF2D",
  "key13": "5kTLLEJ9hdbNmV3scb9S77cbmHLKR9MKUtzoUWNQpG7utbnxjGTEKCLHVuFfCxBr8ZyYEF8f4cTRhE8QWZk6Dm87",
  "key14": "5bYoutCWGFhVYTYe4Q5XZvaemKsFAcJJj2UZnsC1XxzyFHezrbND2DE9wLX1D6ekcz4GkeYTRkQnFzfnJkxAMvDD",
  "key15": "5ApKTei2vQXsJA4wAb1DpcUC2nzSH26UVicaQ2yKK5EriL3XvsGq5fUBer4naodXBj8CU3oJyCfrgqyDBs6VhDQN",
  "key16": "2mWAyM74Waci3hnFJBphUapirNSMTvWnTDHYfT2zQjYzYRz51pVDgyhnoFKuznkxEX7zLiaoAhcnRq7FGmieoKdr",
  "key17": "3hXHUMn9Q7iVeHuQWADX9pXaxuVDsEPJWTMTBY3gVEyhJcPmejysjvhXgE6GRGP7PNVpK7qJ7sFsSpS85vEsdpDt",
  "key18": "4vkPhRUbMevUfbbQRWwMDgy8zTFiEoGzzCJE7styYPtZhQGwn7zeuo3Zy54F7Uff4Z5nFaAqzoRaQM57x27Gc5no",
  "key19": "4bagkPXtK2ifVnoC8YhAsLKZPVJRfXhNKNCzEgnBKmEt34zQNtzfhkoMU3rr52DU7qqaWm4wTrZYMg3kaFwGaUCC",
  "key20": "56CyZEhWuxA4JzGhcsxzrCfzmAeZ8NgarapvXgboghV1YsRNhQpwo4s1ksRZwcwa7M9Gx3fKakj8AcCB1jMA8gi",
  "key21": "5pX2boBu28ApggrCo4wX8RdKA6d4A1SxuSyp73NWzqetdFSJei3CS8JMGuNkXqCaPLiNiwrCmh5L9somjX3K1B4j",
  "key22": "bBJKPiaCRCqGUMTTqMwhF7hMmWhhegYMXokGKjiXJmwrHDx76RQsLrhsWDhQ7CktHbt18hwA38MFpVTTWZPhCn9",
  "key23": "58sJHvQUe6UBfZoqSSVTxLoWf6ymARCv5on4pwWetb74PsMqojsSK5dP1YzLb5yYq2TTbAaehWABkrT1AyLKTLgj",
  "key24": "66Vdbs9SEoNRy5sY93NoYPdf6LVaZsJBPBYKdngW2xbCAJ43CiF27oMs4xfWaw38kT8qMa2BEcB2uSVThSp4pKdj",
  "key25": "4ywyjgS7XN3aodTSVvFbJVRzPShunF8Zyb53abQkM6v1ykoXEynTouHrfcA6D5w5JaA9ZRuVye1GDKGrpSdtj9Nw",
  "key26": "4zfxdDVHe55wwAWySTyt9ha3NxgNLiXWfKHbFN7EbJCa1xxv2GonyvXVFzbM5nYC69kTHkYra8FV9raVMrRHjMpr",
  "key27": "3sELgKXeY7nofWedwP9rAymULaw7mwPsDZ7Yr66bj5ZbrX4fTjxmGMhvdwumimLTVBUpCngr8NoqY2naYToaYe6m"
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
