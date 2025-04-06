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
    "2dwJzvbEi63Mfz8u5KpgusvohDoimproegYUNbvh6kzH4E2d2VX5xGTsmMSDsTvzQYvFz2VubaXA4GzZ7kLZkZHi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PT7vfkeEuA6AiceSpNyvRrbPCZJ3ruiU6SHxkKRsfwHRhdhyF3QVjYUiPoj5T7a34AQSvsnNWMDrH9j43xctTem",
  "key1": "b8ydh4JZkxVuc21mZnvKrgfNGF27mwF6QbcAyMmPP3Cw5pCMNiUuaDn4JzGSdQPwaNZmKhABqFpW44bGSZYBQn5",
  "key2": "5WnqVZnRNVKfkXZgt6MT8vAQfwuttW5Hk6bgwoQPXoo62Vn1izVKfEJSXdCzbgGV4KzchDZWDawBKY1VvfFGX5jv",
  "key3": "3Ap7g3nYSNzzRW3BUrNLoWE2RuzHBVHPn2bxP9VEFgwULdT3eKUjarJfVmHnpCYo4XsmNRdREKXGwLBXTkRr6EcG",
  "key4": "KfYjSoMvjXVk9nR2s4HAdzpSo4SC5vGEA85QtAD8opeQ3HLZt2Z1uUJJqMXb4RipXDiYeVyoUhiCRQZX1kia24U",
  "key5": "Ux2usJdbpKKA6cPH4aaowBQstjMDznWg42EoZJWdjoqgSTVfGky4uVeYmYeDKyPXMDzEwigXQvURFP7iMdxtZLN",
  "key6": "LskJWq3TWV7AwCxdKk3qNCxdaC2WWmiFghPgibzDXvMYedXQrXBuQuxUgjpC2b2iM6RwJdmY42Wf6xYFdGFSjsd",
  "key7": "yJmdwPnqUQPVdFHUYt2RWMsRgW5sxBTo11Uy2Y5f1y6DzbfDyMTDqBYPFLZAeqvnuG29wVr1FUJaLc3HAJtQ4uv",
  "key8": "3sGZP9NdKXZEdLZ7sVWcSX4BQ6WHJ536gGAZPv6iqmxsUrKC2vkJ7ydkhjZ7AuGFeKsmoYbkf69cBi3kviZibPDt",
  "key9": "5f7uK9HWg8aWzrsmdGhVb3RVTjj5dGmZrWmErFfHL9niUMnoV5EGaeSr1Ew7X1L8CNFnW47x6iv64zK3kkJTJSYA",
  "key10": "4jC3GF6AL8CpcK91wq8mQoRRzREJTPvUyzJA5GxDoPrxK6hxuiRsS7FkVm3QAUpzTSzvgHfC3dksU3DWhgRwTZTQ",
  "key11": "4dNQg3oCDK86qfLi2UwLUJTfxpzLyDKri95hi1PbUR1EX2NwRmuReCk1i2vTEQvU5fchXhjU9dkG9HUf5GjySQFm",
  "key12": "586uZpZ7W2Tyr5w71HTDwydteuNWt38qRUV3VkHkBkVQn3gaeC2bsRFTvZjb4rUF6tuWLttURem3rF8V5as7qDzE",
  "key13": "4r7y8uku4sHwFER63pufTHDMq9hrZGy8YJtVibBr3AnDK3aeFJSgB9d4Q1WoECTFBgCeYy2eckzp4qqHpCREUWAT",
  "key14": "4QMVmT7DUYRdCYTKtcHfNPNTLaDdBhE9HugF1qiHGEsf3pcuVU7ySak9Squ7RRMxkZrPYQgNck1F7Y7hpaXDik9F",
  "key15": "2JoChC7NdvF5W6YzUnB2nBCrQMkDRgts2gmmHp7js6frYrCJ9Ez31nbuSNxtxi92ah4Uq27yYmSbqdsThGAWQiuC",
  "key16": "5dXhED63ME3K3LqndA1ibqJcc5dQMqVKPXbAe15JEtSQo2YKFjPcJJtZsohrb7p96eUoZrsVHCRRGg1rKvudhYB8",
  "key17": "32Bi2gP3viXYE2NmHna6GWRUqzxzfnjLm7f85KJxinH8tdf7NrUfBd9FriK9Jb44CHjdrjktkDJrQGorWjnv7SGi",
  "key18": "4phiidox7QAA8Saa6mjzTg3RzKQf9dBxjZbzU4rrrpvT5KbZ7sPdJXae9S1HoRkuTGPjcXg8bS9mNFytDPcCpAYt",
  "key19": "3277epW2k467GMcAtKiTMPpEEYeaZR2iJV2ehJ38ctmRjspzaeJiyHQ9EsjfwVN9MtTb2jrXE8pwrBZAFh7TPqG1",
  "key20": "SB85Kuk8oeEgVE8hz26zfgfQAvQcPky7irAADTWmvXQApFzjQ4iiNVjedXLYS6hwiJCL72n62jNPPQ836fr22zz",
  "key21": "3VEb7z2CVKp6ufAUhFKat2PiWvU7xDa4vVY96Aghq3S14cF8wfHC89mtZRcZ97aZGqnHaaH1Hc4FWeWPG1MwrTgH",
  "key22": "49N1LsxRFXGELFgsPphPyqXDTVYcKKmtsSLht7VwzKse47AL771SexKHs6g8QRvMGkcu1BB1gnDLLq9tdudHHu8W",
  "key23": "5hpuUczaWCgWVfbB61DD8zASXxdBhLHPb1QwdPcqcc7e23kLLuvLgKa3o7bpWjdgTv8KxffKy4cVqwvJ8Jve4BkK",
  "key24": "2mWJwe9gkvTiiL2ibw2wBvWNxopYzCKZzw7LqjaZ9PVGWQHCMeUh27UyPg6nsvf2i9Mbrgbwv6DqgooWVC9neWZj",
  "key25": "2aRN8P4kEfUiQhad2XumYqHMqf1ghs6q4wH6HM4gmyneZ9LEWrSEfr38oQkLt9Fc1QihzgqWbB8EXcywpWUgcud1",
  "key26": "34VCEEuXjiZNoFESNTCqE7ug6ochDCexrsmuqedobdHj3bu7c51hNpLQMtpCbEeh4yT3h4eRXXMqgZgQvNt49Wso",
  "key27": "4SnEN7gHcdz4CPKGrRpNSrhXoB3dWC9UT8VGRazLcRjAa8WPbURdZJBUuDY5BeHCBRg9KC1VyRGFiLyyoVJXDwR1",
  "key28": "2f7nSUrYZuvAWtPDRVPsSbRxrNvuGuDoS7hmhpz3w8xDpWjr4HBQ1sniyCMxiYjy3uiHmgQm2KyNr8JdbK5B1E4D",
  "key29": "ukvK57T2ZWXKG5QrNDnbYu5EpG8nF1265xmSDRD65LbbFmVqPMjqzdtkj4e8ijUjihkfeTHqscut6Q3LtoGiD4j",
  "key30": "4VdVYerfidMP4jpBJzfBASv8ZJ2RJnjueLxqaGMWyqstNd5ctXXXVc4rys2TRNKpQwW1623eNmUqDW5wDhuqsM2U",
  "key31": "32y1fWmBow4wxiw4LUqvcaLGXLHwLC1jvXDCTYtu8CCwYb5uD9cFwdVuDZh8UVZoU1AhF7aZcpnzdshKiH3cCM71",
  "key32": "5kvL21VrbbtifdGWpEGd2nTZHgNBWyKwxJa9kzNMCRW6GJWobgTwyJqDx7pKQUmkV7WoafVN48zoQksYL7oJLnnL",
  "key33": "2qp6Z316PqYVGdM9LKsfeqDDiEGb6VjEFZb4wZfLmrGoWmdMEUkAm8N3uyrq5vMGuBQsTLY2pW8KqeiFopXN8YND",
  "key34": "4mUeRPQQUp1JwUoiUybZmKR91r5svZzTMSUHNf38cLqdYyi4D3SR1ANeAevtp5dnS6kBP1pCN5eJQSvoyF8Kg6Er",
  "key35": "2tu8wv6qrBwZniYgPH3xVftevkRVNbt4N7C3B6AANkjbopfpDszmdaJV2MbLZ2AwAf52R9rBh3tYt8EjTktP7BB9",
  "key36": "5Bvk32P7bUzFxa2rM4eva31Gtp9SYFAUPwqZ2DismYLQDqcTVTfaCnw7MBbet9S6DKJBTqsD3gNWUUi3sP6o6hKZ",
  "key37": "385f8qzBLhLUeYSiq7wVFVbH5U3JwWaDTA6SqmvtUrYCyj2P6TwVSRmNi5mGEB8MFbGBZ1ZVxbxALfcugZaGKVnR",
  "key38": "7zQyP9s3V61Lcc6HHik4dNdK9Q373aw4LHqC9qzKxiaHA6o1tkZhpoPYwg8Kc4BdX4eDsZo9xcpwztuMat4FZ8N",
  "key39": "2H6nrMD4RYn7GqDjPddS5Uw83PvLj8tEYrADE6p8RW3Ay9KqziBbVayuBBVgREx2NZkKw71D81aZEcABbYQnC8sR",
  "key40": "5o6R9WGpEseJJM8sEcGzMC9FYT855BCVxNzPwspBwUC5ZWoY81dLRg6wSMjfSKNy3vJLbGWmBZzHK7ztYZcDh9jR",
  "key41": "4CfdTCwPPUTs8A3JcQ4oF6bmECyu18CrFJviqQPcACKYiMgCTR5mZNq6Gb7TT82o7Y7YepMJRqzPEr9Nv2SYvA7a",
  "key42": "2axPdi64q2M3nY9FvaKcpVbGx3Lfrkxx96NUk3CCkkps3AVAxJzQAe186F1UAXWGVHMMKoTyXj6GGzT6yweM91K3",
  "key43": "4RKcy95RTWCR5pYBWyW5c54UFJvqJK5wrJX6aJeHPb6L7kNww6rvkhiC9NhF8CtmT1MhkoXYKd5vSrbHHUcWrHPZ"
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
