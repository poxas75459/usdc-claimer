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
    "W2SKwECV8q8XwzSY6dscyJ46mK3EWLS1sPpYoq4VfgevDbMRD3Ka6EihEz23XRRLnXvFho6eWjREuNS9zQctj1u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54SW4GV1oJo6FrccSUYW4sVcJ9NTdSavpPfAW5R1sgypTf496JD6z5ECuJULNKqrSC2QQQ5JsfaefkMfm8Ku7bVU",
  "key1": "3xgyfELz4Y7eKVL2yHzTk5w8hi7dU19yHN5L7M1Aks5jMtcCb9xEUwUrykz7wLExJqAD8U5yeQpxMJyrMKTZUrHg",
  "key2": "4VonW1z2ehzPvCqHWCd5EqGiXThAQsKAhuCQxi2sxkGd3oi1FZyiiWLx8YrPhym46CNRbJPVUm8ycqPgfhsezDdw",
  "key3": "uXgFuaWiMTkfBRgshnV4ywqUmNpxwkRpuRHZajb3PcvfJKVAvmYKuWF34bptmhEXfLaGZjLcswJz7BbeCS3SdS5",
  "key4": "5gbHJ2XQeDjrr85GNMQPreRHcZKQRZhUzLMHJ4j2HSV6A47AhgZqqzV8tJfJRbyBFBTP1FcEh7qGrAFh4ULs42hn",
  "key5": "3DzD1mr2gsRZQM4P8AvpEt8tomFPSx5yAb8synebbqa3DCbNtfV2Er5bcooMRy3NEKdgycHPfLbTtpawxwUJg8YL",
  "key6": "w4jJcN7T6adG5E3dEfxC1ed4cUvQfeDUbHc7rieWwqbhnNi4ZmuMV5M5gjNo86y5HMimeM3NcK4C8AFvEfJ2Lw3",
  "key7": "TjiWAB5XcZosuUzbCmZCsgJoZ9XaFhTv78bnG6ogBPLXLKZEARMKRCxyar1DdxWPSFjEatTJ9fa6PrucJQvrB9c",
  "key8": "4EVKxXQSxyVJK83EsyBjbTRtwMPGLzdXdAtDPBy6YaLmxRzFRug1zAFfPzBXsoQu8Y4TPV8ZWJXWcF6v8TsLTczX",
  "key9": "5Uq72WRd6psHUCQLudBsdPebpFEH98sQtQCpfMdstTG2De6dZioQE7Cw9W1SsqTj8LzvCiBB2ReqjXpycUaJjvYi",
  "key10": "5aim6faJyk9VN1JpPJsB3zYYfhxbVfFv9K2CR8yHCQf7XBkQfY7c7C9e64kytTd2QcKATE2mteoTqgRYU5KKu65b",
  "key11": "5uAuLWQeoWFrXuJ5tKvSun48bNFC6tPs57VCYARKWKoj2dB8Ryo9mYMJZ2wt92aqGLbvyQ9McC4EXWgh8jbS1gHG",
  "key12": "2u9TSrR6FttvxxH4iouo7NFmD1aQio2BpsxaXXvaukm9cmS9nM6xPMzeiPW2V22qjVDUXfC4gT6zvTYaGYcvguv3",
  "key13": "41wMrha8d7TBj5VtVMJDnb6exFRer2aAEj3QRhA8km82hqmDj5miGffcsgfUC2h6oZjq97q572rFYHBgXW2ERQvi",
  "key14": "aYVaHCXHQeDf3DsgXfFQCNZCHX4EkzWdg9tKQoLysUbeBmS2QQQDEo84grUfCqPP3Ly5cC7fxPvNh7R5A8VJGBh",
  "key15": "2NX1EwrWvKmP199kjG4uyJfv3HW3j8XukJanjcSHsm3G1sTgmrYHcxE6P5qMGGsQtFeHCkMjCLKwDhhCFMsKpqik",
  "key16": "4xiBKKF8dkEDg9LQjWh1EnN7MrwJWnE9LbKY5kuBN8JAPeG4DC1a9wYVATBYAw9ptyFLgtbmKfan62BjN6Xfsokh",
  "key17": "4dhDNBu2UQaCKPUjDX3qGYLxLp7sub3a3LPB9QUi44hMHrcTF2MPEFY4awcsLCg9VsaWercEk9479jH98SKz7dia",
  "key18": "eYmHTE799q3autjB9WeiUUazT8qjqFY8nxLBXafuqKs5tpwsxY1NBVEPbk6QpDtPm45t4SnwNbN7CAYQfkEyrj4",
  "key19": "4WXjD53KvpBJg6AryVTMbEsHqkZ9zJLyB1pU81U5dNMA1eS5ccrVJNTnsHvx1S27abVnTsmmoBcUcLaKSeiuf5Gs",
  "key20": "4odMo2UmdyxEe2pgq1rAdFQYcnhVURX7ViC1dtJggKZdVz4C9hk9utmJMwZmz5YAQrhmD9wuqsxsz2ym9ffcG9sA",
  "key21": "2yf553BDQLVe44j4SFYTGieT5F8HhxGX3ZPQwgBYPd5Sq2eUmszx6LPuf214bDdLXMSgeQ4VfUMXKq2UJ7eQBRo7",
  "key22": "RqKn24NNQDf9kjdwXe1CyMabJX5kTSBkMH9aa8ATJsyuaEVLE6HR5GrWXZMHzTjV3ZgtzpzeYBrdZ5b81mS3yf6",
  "key23": "P6YGN7KqPoCx9XzxGJSwJpRRNe896DED8mrgRXhDQAMBs3C6Lzo7dsEQEYW6vtv9EDvicU6AfRP1AmKMVXMVrEK",
  "key24": "3c2kUGcYDMF6DsVZbYCFG5ZhP1KdRme7HMuLELEM2HaruRYqqbXTc5GAU7KUbV6QJGUXViFz3XnTxFt72tTSVjbP",
  "key25": "4J3rnAKRFiR8wxBTK1J5sLu9TbGvSab4LRxErASU5ngzMzgypswyghD8Sirvav3jrGHbp78FoJX1zELzN2uQTFKN",
  "key26": "3tZE6nuADtdiKuXvrsz33fvnZ1csWfokyHWKVwXq5TRRDTH4pe8rW2j5ExGcAcefxEFeKqXe7uruqvwqaNo9F548",
  "key27": "2TbCveiPGy6VyAckJdM2dgiVSeFG3AtzLU57CZwdPpnuXv27SmD7E5hztgMqbfu36KL2ge1nZ25zeS96mPyY9hu4",
  "key28": "4J5xapZgFXNXCFK27vwpTswjBPab1b5xkx9oUSvmxR8NTdUk5EtM1WWUGRpMMDZR64ZjYAomtU77u5RurTH6GPyA",
  "key29": "3emwzPbbMbqWgo1MgE9SqQ9QHNppZKAouwiFL1R5sNGEVKqRzVFRJheZN1FC84dbzVstrUwsWtSKnUnwLZJNvzPA",
  "key30": "4nazCHKHk9SCikhjTFHPrweM5N5i4nrys2HAuoW3QEp5CqMCNaMVmTt2Me96CFbEsnZuAXKZkvnTrQqQ4erYTETv",
  "key31": "463bPc3rJdYXaBYwUJajea9wAsbK1BTK9wyS4jwJKQGCiZDeG3bbkfDeKjFwAi2X3tdY127Vo1Czma1U7A96Miey",
  "key32": "2ryCKQHP3QJRkWWCNmKDE7xsg4Sm3YSEhEjFkePYu9HshV4mpFNBY2VKywiarYdXNEBXzbdtEhCDdd7pJPC899i4",
  "key33": "3gPs3QtK52HRUmJFdfCiUeqGtYtakQfkhYvH3EfY8Voh1nNqVjbCutw6nJ7xx9JAoXuwxaR9h5TAYoqTxyGUZCCo"
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
