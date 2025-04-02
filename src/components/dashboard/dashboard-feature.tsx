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
    "4zcVY72UQ6yDcUZjw8WdpkkFbZKppxtWou79RCX7r9x2v3kAhqk9XxmFfcu6jfC27iJxsX6CWU7RD1qE3xMQQ1ho"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4j8MbpcWqhjWMP3R35Y2xfCRXtqXAwVTHqCXyDrS3TXJ3Mfk9PbbNJW4uPtej6zj7uPemFYW2kdqSxv2TkRw4M4g",
  "key1": "5t1stsKoxQvHVv24qJ1zVFQ2ifME1UxicoAacpagGUHj6o7QZg9Xy1XVzSWqnC7dpaggxktSuD5PRBLXEHdWEv95",
  "key2": "25yxHb3zfRg3JUHxSQt4ho9CqwenfDXjCTmJFoqqKR289RGcdZkK1oMm49xui4HHkcdMjvs6zUgDuKAUki7nRzTD",
  "key3": "Qmv8nmBnJbFy2th4gytess3quhx79gaP52qNo7DHqikbZwkoMno8hqR2xMEDgmhUwHpVomtq7w2Ar5Xs6rgMo4a",
  "key4": "2Pm1V5wSAF8Dr5mgjGMvCBMVDb7qXFf9mqQYMD3zJ6CWNAt9SHcw1cxeoiixppkLLfVe69UXASajyrNZRYW6Giy1",
  "key5": "4vgfUdv6PtgWtVLaYavoFTFB3AodKx4PHryA5nzeiySBFBL12GLLQzb61xh9YNoYhXF7ESR3ibx2txiiu6nP4tiQ",
  "key6": "26waS27c3rivddaA6nPQLYwJn7Q2qLHYSZtnNGR2m3tVsUUWJQYcfWP2eDVJGaYwTTVP2Uzch2j2rNTUGUyaRD5X",
  "key7": "2ZYGGsisrrCZu1NYyBrFHfLP9JZVAvfR8Kop3EyQ8fACAJiRSHajAJS6uUQTwKwpAqiaBautEoGpcyMVhTgBLENJ",
  "key8": "2CAjr3htTK7sfUxzCRBX3VzTUUSx4oDgV2sxDvRfvGHiyNtkTBGzizPb34viqiFtmzqx9NDD6phUJe42KZB6caA6",
  "key9": "3zDmSP17T3jj5mCEkzMyogYsKUwoTRn7vYCR2HujxuAcSH1PygP1LwzZqFV9ntLFMTF8pqGQmQoJ6H8AxQGY68q6",
  "key10": "2c9uAVjwNdegoraCneaguurYYAvvqNGUSYnviV9Jq5EVHut9dvGJyBYxRpUpLUtmAxrTGFoPHtSvXhjZwDP1srbF",
  "key11": "4NnPciYGTwmRSLsiuDFVs2YKAwBAkgR6vW8R3XEtiNBXyVQKikrG2gsYFQq6s47XDszMnMWwjzZNYffqddCaaVdr",
  "key12": "be4MmXtHVEJi1YctVMuHVSnDsxaT7J3vWKqd3MhjEBufqKqDmFbw7sUGTv7F7jk2B1kZtrJjgNoLhm2gfQJH3cG",
  "key13": "4Ed9TBDY1YhibfV9ykUNaXSWQYp7rjTxjDBDR2so6KvaL56sbGjBLRUNX2JnAywxbsVs246T87qT1U9naRNbst7u",
  "key14": "4fmtk1ALFh2XYxACBexZHKnJ37v6SK5inMjRssiANEwdnGeV6mhxKDZzGbwpVV3FPmTzYo5kSkTpLtNJnNgEhYb4",
  "key15": "5Gj6tVmeM2LyjitUVF2EuQtRu9ejfQ6AaMPjp1Mo4zGWti7Q6W7KEZgrxTx4Nr31tUECKJAhjKMSvsikEZguXY3V",
  "key16": "NsfcM2LBu3h4TA7igixVEMbfqkveKkY2mRZvGx7py8H9udFmKytKk5S8FAg9chbC5PDYGEpcJ4Szdym8c6cstPR",
  "key17": "4S3thziNwLPnPBnW37JD25HrEBwJfnxGnUTwjQ6Va8bq3GxR1zBy38syRF4aH9HysRfTgfFZyn6cS2a2Wi5yPK9V",
  "key18": "3Wi3HPVFZGTMFmdt6H5gSg8GyiB9xQZDb59GszHR4YXDERBti9KCTtxQmam8dkTXQD63ixqieWeY5UgQnQd1vQp8",
  "key19": "54FyE2yk43PbDzDejjXDsE4BQGXLDjEmoJZoKhiKTgc6jQjbafH5wBkgKSoSKuYyKvZ8b7EfsNq11gZ6ELneFQNg",
  "key20": "5egWCi96CqyBhgA2GCFoc1NDd8wGfN6u9MkPVWMBbgtC6wdaPbF9JeSYVKxqN8G2zKQcuqcZEb59HR97TBRd7bnu",
  "key21": "2tUDJZDxBdsyuvxorwDJ2iotnuK6mELmawe6mTgy6YwoAKqZZSoVuu8sDMUWF9U9DidUxjKZoM8TKEUmDsAXGPmK",
  "key22": "mbu8PWtAjp3Jh9zYY5Z1ojmQN8rFKDwTVjwNYdF8b5p75vP7B4Dkz2qQ7ESVPUnhqHe21h15g4aSxc4VJ4AP7TH",
  "key23": "3M82VBKgr6DF3KeREy5sEMQSXT8YyfMgVFgTZo4sS59krk6FHRuokXXEmukbehCA3X48DRhfwe5NikeuhZX1wQeY",
  "key24": "29ZpKSysa7PUwZoy9xmr7TryyrDJtjyGrXziaKJLy1hP6Sz6ZMvGCoioGZXYKUiR67BQg71mGXn3fwGQobtVxEWe",
  "key25": "5UGvwnkD1Ld9me7YPiUzyZ34GVyeiAJ2Z2LgDPCfcwwGtepDbmcaENtCjprug3efcFZ4ZfsfCsyJcnGn6Z2mrfyU",
  "key26": "42599zC5ameTncoxExu8MZX6yWkm1c5B7DTVKxbuNh5WNaohnJeapkpZkxYkpc7YNV49gC1jD6uMvBFtU8k2jAkQ",
  "key27": "412E6LhAL4nSiSHgqM31gNkYVRz3iio7sYkhLLZAAW6fKPdoqNW6z4Qrg2oqtZBnJbjpP113KbipMfeinWWntC7Q",
  "key28": "2JUvkZFaVJVfJrG2iskcG2NuX2TfsEBX2fnRa9tKWhs5xpjQF9y1RBKr8LwxKyzGJkvikp3hsPC6Ysvrrc9sXEae",
  "key29": "3hnHPB1ADEUReoetbbfZnquBYYx1yenBiB9L7jnBeqhJ6nE4GNKo5GtHDDFeEgKMGiTq8QkhGS46jpRgNMZQdd2s",
  "key30": "4MjYBh64yU7R5yj9f8rtHN2yspGaJUWPqNp7NDEohd1enzQjwWqXcaQh7Dze2CjvBSpexTiFAmNoKLpauGztfXxK",
  "key31": "2wdbmy9oiP8k4HvPivyBbLc41YmAoC7obiKK2LiNMPt6WykuwWgmxhCDX1GbZjQv4bdyekGL4CXXNcbNrZq8QDHz",
  "key32": "3oyCiehvkgKFUT23c3P8m59drksgnXYRRZCUE1Lz7WQit286ofegGm7KhascRYRmwTXZ2MnZ5jcdsBmHihReKHsQ",
  "key33": "63znaMuM6UxPYn9FE1js5JKtgMKEHfKJJ7wHQ9xMFMLw91yG4LGzZ28bF7muUSHGhWRxuAhmXbmzjsxNyo1vpm26",
  "key34": "646r9g8fvTTjs78Sq4d2AGB1Z7FbsHvpUr8tHF1NMjUZNy4AenzyAic6pGoBQqDv5sxPq6Q2tH2EJ7kWoZN1F7pB",
  "key35": "4sR7Y43mFU3bWHP7GKcjf4BckMyAPmTdwtV1LAXGiWrHutJeWW7aVpCZUsQ99BqHR45xBNW9P2Fbm66Q5iiT4gXS"
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
