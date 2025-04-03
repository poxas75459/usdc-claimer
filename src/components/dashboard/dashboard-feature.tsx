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
    "32RJv5hgnFBFvEJVUZDe2nHEo67DC3mFf9UryMRmmwumXKQRGYDTKJiy9rVrhC6oqpZYCEyqVVt8xN2TArdH6YYp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zkpNPV7RGQ8eZMxPJ2syFxjTz16ZncptfYKiqj4fnTUXbW2fXXE2ajiXjwzBMvPG7CsZsJf4kjCjT3XnbBFSWzS",
  "key1": "4guy93juz5TweWWmPjqNpQK2gb9K2xiHbVxvkngZQkSGQX1EiXVifRt8WDPAQWccWUWWRkymBU3pGxGA94JtEepv",
  "key2": "5YJ9W2Y9oQVw38SDq4GT2kUBdRSuoTKbWmeUwYXvvChXqzGpkUGuBrNYm4jj6ACUcVg9Ki4XPkeVCr13nasesDot",
  "key3": "iwReBcBwad6mq2aLn1Nbj1xTrAranY4ePq5Tn5qELKNhnKXShdiVYhqpPy8mLGTCueecYsNLncJB2Psk48Sp8Np",
  "key4": "CCA4kR7ALbpT6rcCiugv8aiHmxi2JjaHZKGT1qv7SYNoZQVUQs7CrSMuHNBGohgSh6rDRSyQCDNK7egAhmqagf4",
  "key5": "2zLZVhCoKAyouV1Yv11utmpTBjgytKqBMStZLYxvGsJ7VwqiFFrU2emxZaYJjcnBvip781jeUmd8PPtKgdpTPpFi",
  "key6": "644njCRMyNohDqHQghx1xwfdzLMvngo1b8kopUxrcJppuU1n7aNSGHDq1RaxTC24DxCD7N5N28qKSHJrMD2tgEGc",
  "key7": "4iigkid6fHct7gJq22DfJddNcZ8dqZ6rcVsedWTNwu9adBHTUCLu2QxtTqbLNQKheRr3G2o4oePZvXJhBeZQzBRu",
  "key8": "47y3RCv6Nra5jdEZKEMFQUfJivg9k2etXCYc7eJXRPuxf1MJegJuzXTmhypCAu8S3gwTNWWJA7vgVcGPKscJcvVi",
  "key9": "4QkgqQiUMp58VnuMAiRCG8K492gs4WspL4GK8iPxTp9zyehVegE8p1Sa6Uwp4dp5Wo8fYWKVqYb55XG1cxYwmNiJ",
  "key10": "2HA4amGkzUTct4YJyeaRqAvk2JEvWvzTemdNDBcXCtLNhkTN2uHE1JKwsCGP6ftwsQjx4xnKHnU5bLNGqdqSQupo",
  "key11": "TeZ1iJwP8wiMur9BF65Bmorxm9YzKnCKN77K9w4t3JqtUUW544E3UEFtWS8iBUS2xhumebu7gFZbBKpbC6HXGxE",
  "key12": "5FvSQPbZ3D8Tvn2HpjxMdAoyNMd2tL8WWUC6VNG7FXAutiMr8RjUXs88PP4VkzraHmnsLbu8fxaGqMjBrRRopZAC",
  "key13": "4F4a6tty1vXRZJiv6XQ1UHw2fSmCM163hDEHvnL9cvV7QjCXaufg1cjmu8xpL6eWoVQusCW8wVtbQqGZuyaiS7s2",
  "key14": "36xYszaJni7bG1nAN76CGdXwbTzywsJBteq2pwXAYmrFQ252Kfy7Xc9xEdhTVKq5Qk1yafacgR5nH8fvmuJhVXt5",
  "key15": "2aubhMucpdGT9eBjzRJr75XCEECKQJtyzBuE6WVdrJNBwUtDNM79kfFMRWyeY489M1SLhRsB9d5hFHRLnTEwLJc9",
  "key16": "4kbSNgaGHdrhraFuTY4nbNfsrCZDcC61yfFfWBi1gumQci7AMNUCtELVvbhcvaUjKwjJR11bpssEv71fAur1sB5T",
  "key17": "2hNWF9AFndL78w13yUFhcmVrBuvtPrAdoFemae9HKTAScPzujop5tfDZV4GVxR3yeANpbNdN7THTcHScHqADepD1",
  "key18": "3SgLQhKATT1kqDjxXR92jwfuGMvwLe78cBkX97UyaKhtATmjqfPctsHvUyweXEENcnK54KeGaMSv6exYgTC9BG7T",
  "key19": "rkK3q3sCEc9v2D4E8n4VzbFUNqoLZ4pge5xjUW6DpHDBheoYkTqjB4dT2Rs2zi9vpvvXXtFQtMNY36C5BMVbU6P",
  "key20": "4iUpYAGmnBWyku66TmTm8fs1k7nKAvxktzACTdfDY4EhYP3j9mL2MokDSZLHrvQmQWega1wtop6Gjpf9xmYaiSkU",
  "key21": "2uLT8D8qhdw6pVwLNHqyhR8t56xYDrzABhpNg3wCguLUcR8CbZtk7HwEghn6PX8TZghNytavAWZNdscXWmJp1Ngs",
  "key22": "52uNjJ9NvEjnaYsgwxa1qE2EakJQdKL8YbSd6P9tsEVdTfBR4Ac6xqVDUencb5ysjcQ62j1g5Mggs5gyDG6jvDaS",
  "key23": "syX8xJqMLv3hL5zU7S2AGka4TLfkmXPGU22g4EbJkvoQworwpz2UBxP35QiJaD1BkntNRWEUUjcHi3yQtB4LDhK",
  "key24": "4PahAXcFuYH5yES5KteTw2PUCt3oW98xB2iGDnGMrp6hkHLqhtGG3ogPPB9VtGdPG6qRTKESNowNeYK9tgKLpg65",
  "key25": "PkWK1HZNQsS4zkDnJvpdVBJqYqcjaXNV2R4WgNxgcDZq8wP56kRu4ojUvus4GAPhxSexEJdMAbDNdVYoWKXMTFC",
  "key26": "2TnrWJMBmydiw7ySMzL2pAk7FZ4UC47ebKytiANpgN1wNBXqM2aPq2FHep59C9mjroeFxwBrtqwCnDJMZYxTpync",
  "key27": "DADyXoRYgdHkMhgM5jzgFGzzMRYjp8ujgJqjxWibmwYPB8AMEqX2GyPEdcdzJSdSHfpJRRSLs7NNe8DhweVa1x8"
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
