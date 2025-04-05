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
    "5J5LHsvy96t5FNQ9Btp61fjqoG1QZWawhHj72XxNAk8KY7DF8NyjkMphQx5kJcNnQ6CSA759oLuqXC2qTcRRngUh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WWM2MrGZzyNAz7aK9FcEMMp9pSupachQGRsLxHFP6gFBpQf43bTQC9AmKAzdUstq4CLuJ5AVjpQVRvBbFn4pV2w",
  "key1": "rK64fnH9D8Q5PjbrjYJa23gJ6x5zhKA4UY2YPrPf4M5PFqj8SorhD9cyfikAkjvfFNBef9ZHa5p8MSvui85XX6R",
  "key2": "42cMqfAsHvn6w4NNFBwK88fZnpRxzXR2Wp7Hc3vRiBU5TVPdjQcZBnX6E19y6q7ez4yujFY9Szue1sqVZ5rGLCug",
  "key3": "3BYWEt5Rmt1ava1fatu78ELhkQN2cPk1bBFXmbPpihwGLfd8E74ZEMk9NgtsYdKgzsmshM3diE7suCnMEMUkn38S",
  "key4": "5HxHuR2ZLmRvuW8jQCj2tz3kan7rteK2SADcirCKEA2cTZ8K9FNa3cJhgjdNg4GbErxTWcz5CnZb5pMWttxi4s2c",
  "key5": "5DSA3i2ixM3QMgT6RKn5YaoVQ7mEJQHZk9Fb6Kbrdrnn4rtz9oZPQMFx7t9SYd8V1EeNghJ2roVe4LTrTjB1gUtC",
  "key6": "3quTQBwfT97oeFSJ4KAmWJkXb9L4Eqkxs8pKcgHjHPu48479pUizvQ2gTZ5BQ8oQny68hdNN76Fkr72kx89KhgQh",
  "key7": "qi24mhHZUr3jqY6CnA28wAwsjmbmYKSLUB7y4V1fwzTcbRe1j6jMSBc8XUmdFRcuRCmbhtPdA5vRWjLibMmw6XG",
  "key8": "2DYY87LC2iB1VUe4Z4y12X7sbV4gecFm66ZuFnpcpkn9j6HAdupQxPoNy9ThCbpFq3aStNcK5XfXJLnrH7aJVUuo",
  "key9": "oqKbqdP9ZJqKBsvCKbNqchdHdupPCvZSbabq8ETic3gmrPdFPNvEqmdbAnoLBYPBdzKVpDc4NGviE3D9sS1CR5d",
  "key10": "2bExwzZhVPV5ntRkUmrtUbyEYK5HinvBUuVicrnLNVGi2uB55MUhA12FhSDj4vkHMfDCxuvt2pTa9GAxHHdVkxVQ",
  "key11": "37iXt7yTz6tSgGEZtaaZaaaSzeUBi1ZNTTmpfN8M4mnz8rXG1ouWhF3TvQ57DWnBbcGdaqkmFHPwVC1rwxdznq39",
  "key12": "5HoYq7dSEmFQcqH6UNQ66LxTJfvpFpRfAGsKgeECLVLUdFE44B8wxcHQruFzFUMwVXjpVXCPdvaS5MsvsumisAAA",
  "key13": "21ANGSxk94SZvVBy4qDnjZ8abzuAtgiR8CUd6xRBPwPNWWRT6gcAwpDExbEDs3zg96aP915MKgDq8beJb1Bogajr",
  "key14": "2vt8AVc48aoXXvg4KkC1FFSFfyKMzuxtfAUidX8t36pjR8cch5QtmvMywQ9ti2hRHAy5kUzQsADHWBK4qLB5pjpV",
  "key15": "53y3DdDjqdAqz79ei3Tnm8zcSW5hbjqfiUgpTgJsE1VfwAaeg5zgTZ6aiHSKvXWjJV8k9GTJxDrANz7nvUsHqFfX",
  "key16": "2qKXHPdG4tH5jJ1eF8YS1HsGgnvhrk9FsQhunKzwGsq7c5YzRD2E57h8cUGKuMrEhoKx6QSCio518uQY6h6QzWfz",
  "key17": "4Cen9V6quPZynvnQMPNBmLkVrzZNeEQ1111PCAVxAVZEv6NMdyo79Gbay6JEycyznGHhtC9TbQ6Si4tUMHgfSiTB",
  "key18": "3ficSb9wmKCSrF2HXp7jTFNJzqm8DLdae9cKzzzXoychpY9crMcaPpiGNj7NmfAwVWMyC8FJW6kLKXPq7MSjnA9H",
  "key19": "4Unw5BecZLmUjJwkwppyXF9qRbmW81kSs7ouybAQxM8anRsbTP7zyfDAFgmdKxGJgb9rHju46mWeVNUW7XzsuUGM",
  "key20": "2GPJRVAkPPVVzRez3C9fVVatFM9XuuuAyXweQdSFiSE11M2phCDp1JKRC9ANKTg9pGxFtpqxZn7gyh9DWtZKr1Ge",
  "key21": "3iq2q1eSA6GoHaSGsQMCcGZa3mXWtiNhLU8LdR7eqGqpGAnF7Q57tZKi38ThfcsoLCkNyRtS5GqdZWrEfCxDRaut",
  "key22": "ksZHNBcxv174EJkf7pSDjsHKfkPfCP1KBveZZfsviLRbT1ZbcuAwuscaUa6L9ibEVUuTjMFJm8pJuLydLMWTZRX",
  "key23": "4qD2Af3WNxEz3sYYjwfVkcLg2JYGYcVKhtbkYTYwtkYUKsQJSutC8NHq8gcfY6rxT2HE39ZpyvLTBbeh2SSEBuhc",
  "key24": "5NjTqHqhMSS6vU9b39TeBGa23jsKimPqNEunci2vuiVwPwLULDLyxzULAXCkpWz1C9XuSM7w7SJwovqkVgw7ctMZ",
  "key25": "4SqgUYoKpmE4STWGRnVQMoHyDYBU3mtyHXUDN4qMqw1Jk7jE3JQm1gpcNSwLonp8YmQETSbzJ2UbdemfbXkpxXBM",
  "key26": "y9LHMBP78pohvqvYT1g97uRBmkgdaBjoE2UsRpaCfWaGTR1egB9qqKhfLcTf7XgMs7EL7ns29gT1k4a2tiGts5U",
  "key27": "3aWBXmgtXmEuofAACBA3s3iZUYh7ht5bK4gqgT8t14itViNJWBePrps48X1s627siKw2iyijVzJMT9F6megxEGUW",
  "key28": "j6tmRPeaHFS4RBEbLNFbHC2iE23g894La32FcRMwt9S8RKzor6TPELX84HP7jLKVfG7JcgGVcwgvxpqju4jpuj7",
  "key29": "V6rsK57Fre8vUYSJ2rKMS3KdNeJLR1rCfWDWEVRTGmtPybrnr6p8WNZTvZbm7Sav3fL978n4YrTL83qtcpvRbR6",
  "key30": "4Hzk273s4oLidw2s5D4hJQN9Y3zNhtnr1gUrXuP9HUnp3osxPsp94ydY2BFk9ZkDcDVbomcTEzxVWYFQZXdVaaB4",
  "key31": "54YzfweZcjDPEW4vM6JWRmCY1RfzQZdqauQKjxMHxgrmZniaXjHWQp8agVKvk1hbK4VZ6Vap6k5oxw4piTgdfWf4",
  "key32": "ttG4PejsecS3JweDwA6zj7oAceSn1heqFcAm7AsCtfWPTJHE4e8dxtvUsQrx8o3xmYKGaU4zeCM7VS4AmtXLMqJ",
  "key33": "5CpPESDFAcPPy9etg79NkrKEri7v1LaxPax4C3YLAqXYQkBCHTdXic7DyYv8ZvD2qg6ixiesQMCkdVndPgMHUaCM",
  "key34": "4QUNddAgMmoeiXRjrTroKB5sbE8HBZvA6BcVuRDW3CmAFceX92yAcEocYghyVAZ5aHa6X5YR8eN4MEwq64ZZACP8",
  "key35": "2axB1P7MYfqnxWjkpB1vbHWZPw9XBqDsnVm2d3zjr5c4tBp5DoG7BQXRTF6dEx89pqQ9fRPzrKG2GK4yDZMJqSCU",
  "key36": "22broQZjnbQBNeuypU41myFaSEoUS4x4rmPq1UD1hLPNRU6x2hGCEV5wAvscZozfnGqFFJPBWAVu4fjEgCfaHfEA",
  "key37": "2PLpvjKYFFxdgGdki3nTgc6VLxKeG5f4GfRS59czGgUWNTR2wkfnGpGRLVhdv4XepBGgfBkB7QT61CjoEzb4pWWS",
  "key38": "5toPGwBNMMdoMCj6Zkzir4334z2jJXHb2C5grruvK21qLgnh9gDo35VAnLeRHUmEUf2RFY9kfJ59L3mviRHX36JP",
  "key39": "64NKxbyur5ChwUUNPj3w6ekz5SbCGthAeHFc3WKgy2VYGbZfHVnii6H4rRb5XHdRWgjuSngV1gMwyhwjW7re7Wji",
  "key40": "5thWB45LHjRapw2m1wxDoiZtE63gPPJkjJ9twh8LBi3WLiM3nVvsvVxqtZg87UHgnDcc9LEBsd6Am2ysNxgwvv5y",
  "key41": "DxM79ypBX3ctJAcf5zkWjeBjLczFvjas4Gr5UDxFTP67frGrYYjQR4wkgaixDo6StM9ehKqg2X34BJksR2THpEb",
  "key42": "4g1sAkYbXCRZhJJTcGsJUKiyw9nKS4nqpxBjshWND37wuoBcKiWuUB8uQ7CDcQmYCNe374DS8YGFdrGQ7UuSuLcm"
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
