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
    "2TLRpfScmiKVT5RMmGAPDT8QgF14iAvxRwNNwvM53yM8T8MVecVMqNkWWQsTUUutbjM6U3GcxLR3votpVqVJLDXR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mGR8sRTXEkfoZVRzQEdcpNgRnEmNdKRLFWHg3TmV8CKemncdFYu6DzWuiPtSkpP6RLQjTjT8Mgx3NpZH58tATMX",
  "key1": "nChjHv9JKpZJQiNVuTrkHiSndLALNEyrEUT5XZzNYoEZX75cLsa8CU9yrBnBBDncmRu2VN3PL4s1hph7rbW5eqG",
  "key2": "2f8NR65Hn1Mff6YZiA6S5Le2cUwdBGRb86NJSEqX6H6nFtGsfR6LjaYyuYwmicMhQU2dJS7tqtnPnJ9Z4TYrLDfr",
  "key3": "3tC2roVokJ4DMQQ3zLE6k1V39znT4ppMR3QPppYLsNjCZ7iDX7tfJFAErC9ysJWeztgpPJUBvqRPKCCH2BkzSReK",
  "key4": "4qukNjayCdWo2wJomXzTd6SDLyfzFmjsiDtNcN3XDUuzqF7vXN26HSeAgkMUUdqKdcKjpGsgfT9qBuKbgiULNmbE",
  "key5": "3HdBAeQTEpUfyhGudxVEgfemxZE3DrFrSH5YxqPZdSv7cXgW73fSg2VHQSPuqZ69aL5QcyZuWfRrTg64f15Cni9A",
  "key6": "25FQsUcN5t8e87Vau2je7yhVzQ8t7mnu9A3bo6QRZpVXrzvBoNCS3gbmwkF8USTKqVvayGgQZ4aV2nGp9K3mdZft",
  "key7": "34bdk7NKottJ8E6R5rJGcBhmT7gSCoCRDKWVrwxRhhoD1Y78w1xdHJDczVT2FmQjjNgQKtUbtuUp4L8CzU3ep7go",
  "key8": "48NNDfCQLpfo5nrS3cbnD1b6yQfv9qVwnxaHv57QAH52WiU7kFBp3yDy3zWSXZM5VNAeCfxwVkoeEFM1DmvJaTZR",
  "key9": "2ngddFEpXKcbXVJ7QJjFzZUVBBjaY9LMNSvavUWQgqQr6xsBkj9pEfz3ib7gRpkuDbVZdc94hjEQhtxs9kxegGn8",
  "key10": "3iWowtV8nbgbURTEjezwMzjccsRn4sQDxxXrf8JSZQdMH2GGpruh8a15Zsa2vq5EENHWVfC8gXtMZMz7hucwh9H7",
  "key11": "65T79Kpy4P7C16P5fvfhH5jYtpMmcSHm6WPKzJ5e8z83nsonzZtYuMpVtsskTJGnutZaA2qoakSSsK6AWU5sokQK",
  "key12": "4eegeeS2E2aBtn15imUqAAmqWtPu5GsyDpzshTgKZV9iw7ku2Dhp1xrYjR8tZJmqnsyEXYp5r1j9GCH9ytZCojBi",
  "key13": "27mFE2Az3RAumFF6AcETVVKcBTReLgnnx8kqQ12THyET8fGKBWNMGny3yd1fktNqNsfMtw919HboMpW8VZVbv6Ae",
  "key14": "23GYJjr5zUL8qF3SJz4ZphM17XD6fMCyTtAmCYDccU4pjuCBwLfgYKzifEs9RBiDXASFQFuUHtBRgzGRSVaEdNfG",
  "key15": "47Fduk3kBtms46E34rx9cYbLJjvRCdqhKEV6asLPiZ1uaBgo3MJwJwbXKvz32EfkfC1CZfWBgCa5EBB396fM3BwZ",
  "key16": "5ExENwxJvJm95g5RxNTgZEMmSSxkgz9Y9C8m22NECpJg9zHdjpBbAHfN94MMNjwnTPHk4isnAv5fH5YfeqrDCMit",
  "key17": "32JyEApBdg1yr9MoDrSpPdqor9uNw9nZ25fJZgz34xHxxnq4MjAoXJ4wXRHnQLMJgDiYopESbYJUGgSf99tP8PsA",
  "key18": "2CHuBen9FZPzkHayyWNiWVmwLWnZ8vgKYSibjfZoAWgGZrVwDS2D5eSkuNrHcBJbBQfd8QVwFDF9FaCnVHfPeAXR",
  "key19": "4ZBRFhr6qNPST7ncHrJUHfcghrzmkw8Syx4qMKNLUk9Hk1mMwouYe4WeJwq2gq7ydtPpudph1fCxpstgUESGAhaW",
  "key20": "2gZxGjM818TdP3BSsN6eXL8PRE1cedFyvLGvsaKGidBubTNNjymF1Kwm9vH2bAZ4wiD3URifHjYmsW4Sde2UeZhF",
  "key21": "63BzRRXJs8fzmeqRLVfiEbuSLsFRH7tgzo8hZCo7ge99RkaYk5UGKknn1WjMhZjKZ5wYkZLLsHpSo7Jsytrpr9Nh",
  "key22": "3cGXMNwgKLgn4WkgRDGggXNgMngt8qQzzRgMniHuEWGLX4XdhSwZ7cmbQzRm8PuQLfdbqYEUUYo5Yby4k6SRUE7R",
  "key23": "5fsEsahUevFQxSjseqbhsX2dn7KFH4JEfzFS7Fies3C25DvxKn3sZLhnztncdypCN3287UbQufsanfinYp9S3rt1",
  "key24": "SbweVT4E3Fy9uhUmvXZ4hAqCDE5QPUjfz3pcdaVNR9WrGKxgy8tRvH3JN97FtbneTbBDdFUYnLycj9i1WUstCS3",
  "key25": "5hy49iC6TwkaeEyPrwNg4umNBHtR1bAbRSst9fMe8VGHDkNgpnRmcW4Ei177UJqb1eWBQbSy45rCCHqPgK7Pwu4t",
  "key26": "4XSP2f9tgSuSbqxCpSX4FsemCe9NmaPZTnRNUfRMtF2aqCu635xSpJFLQ3tLiwAwLFCtXmoHdVMcuDTi11vkt8s6",
  "key27": "37qGEFdKFLhutK3xojCmGDj6zapTt9QTZmQ1fRpe3Jp1A4iBQvcbvRvT8v8LKKq3UpfB4ZMyCbrX84PnH7zUXsut",
  "key28": "5cTwpu4Zb6mGdCLxCgE58DJsBYv7r1PA1hL1kKxxaAxwggEQcquGagU6aLexVYLR1dhhUFK2Tw8gtnNTAFbfeSmu",
  "key29": "5gJywLNedNd9gdqgCsPubpwfChEmc1uWNWz4eydbeXQsSeKT5wYEe2s5nbQL7CrfpPFoXqN3eyUdjerc6L5jViaZ",
  "key30": "4s1ophzmSfFGe49wH1Dj57YuuVb8VkpqKAs7aFZEYhRBA7rXD6i4CQ58JDVktazTDok6jUajfxTm4dzhmZGC4Y55",
  "key31": "28MdbiXbMCow9GatdgqZPtEWN9Wu1VqBpvCWP3iV2F8PpFWPNficoV6hfvMMiHpVxh3tkfzQJEkCJiyJThz7PkqD",
  "key32": "2fw4gLE6eCAuX2rZFTpBj9zPTsC1WmVo97UCj5Y4u8S31x6z4nMq8WjdYFeLVPLAcRSwoZMG5XpRyuSbwon8zk74",
  "key33": "5qFTrHvNoWgNYrb4tXUfh2PCdsnzm6rnQRyCc5XnqMcByqi15MBViyHSmJ8SdjtYQuGnSkCAUtRVPdCWD4LKyFS5",
  "key34": "3MK9FyvbCn8SxbHbCdi4w7GD4NeAXnzsffk5oK1sUb5RrU3px975WT8c2RmpkknoitVs8K4kJ4KNKh1SFoEBuZGy",
  "key35": "4YQpMJi399LPGMPWntQ4zBuWC1r8xPF9by8XXgs6AiL5xT2V5MqkKqBr8UKbxtwZZpCXBQKbZ6VPYg4bmZpe6u6F",
  "key36": "5ir4hqyAMB8MN6stp25KKDDWxq2iW4bGFeDoMThyZYByysRFasvfQJ12D75GDThKfRZnEuD891xut1xfBJgfaSKP"
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
