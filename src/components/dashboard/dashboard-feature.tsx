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
    "2iYwDnnjnQd7v2n2gojMmQiRPmX13pTJDaLgoCFkUrcE2gZd8m7JCQCuRrMNbHozjrt9yadoFpHQm2Ch787awZxb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qFmz4sPaBcE8o7pLsUQLRAX4JZajVyixENFH7t8w7K7iRkncZeKeXshmX4A8gem5CUGLHXC3i5vmTzgiFDAsHwv",
  "key1": "2xSRoBB2XSuHnH3n1NMZR3dRqEeXVd8rpAYxirzUsHPmtzQd18CYcC4Dqmx84bP8cJ7hj5yyhZTnsHoGR1w4SyFE",
  "key2": "3iYh1H1HY9Rfc6nRYUVnZKraVtFd817rk7vJM7EHcKDkSYJquEyU8qagG8vZFVi3QBuxtEdwNdNLHPibEDS1gqN5",
  "key3": "6335ZmMzpVVSUHvrtjy1hNkamiTG1p7fSmTu4ezzppSaurV44HCgtJqaHjaRbLevda9QAJBmpTTvSJcb7QXSiw4L",
  "key4": "5bB4ojpdCPiCm3mwkVA9qcZyP1usQpZHuJdCKEgmE9F5UCZAfjKG7Uq7TBeKN4GngxxViWwt4nEw9ppRGZPwcSk5",
  "key5": "mgB9K1B2VpPbxAuHB8mqsypcf7uWLESigWgTj9ebwbt62FRXyZb1bB5u7n6hAgtiLr1tpz3fzihdhQLJXAqJKLU",
  "key6": "5uD56EH5jJ7SoyKrdyK7s62o65CE5uUkpfWGUgR9Ph9qPyb87ubQrpH3MkgCpmntCrvAcTJ91WWCxhJV998UkQFM",
  "key7": "33ggAGiPeVR4SLkCM96VFfQXuy1soWuzRrsGf8zVhZVemRkBxDKG3D89ZwWPbcP3UPtNof5gxvd9xfcjT1oWsCoN",
  "key8": "4fMW8mzuQdvz4Z8a7hNjuUw8DPhDdxco9tgEfxh1YEZrN2562eMuM8rhpkateo67pVfH1LLzXiRxHSVbDetmART1",
  "key9": "5eAdq4NczEWvVPrzmsUnTQPDKxC7SfVph5Ry213v1S1FSS99MMWZJpb9Qdbaa4PAZ6ZxFYaEDkA5ozyavFVYqcYF",
  "key10": "2uQiHgSjEa7A4LQmDuRVcjFUT8fQYcazyhwo6XdH31PLwvyNi9pw5Ttv9KFe5gw7CkiJ2ziaufbLo71Hs87nGzbn",
  "key11": "4WV3eKJSa4GcySFHbj9h6p4aqipip3vCZL9gez8zau94z1hVozALQiz3zUfTSBk3NFvNrTW3DQaa1ceewHmWFn2b",
  "key12": "41cj4xpxhbrbchtroVpqMf7gPkpLNEdN31YUZ77uxAk3dcqsqCW5u99HqGNXAtyj7XG2dcJA7Xt2Y9KB8y3QBocp",
  "key13": "2GL6aTyv5hHYFTGttY7bEhagpCARmRCcYpciARcNo4tozmuBc2Q5YfC2p2YjgYS624evGVPQYuj6krhVvW76UEYN",
  "key14": "ZBRZUw2sT85Pg3rLBWNLxhCfMagQvigd8KXVb2eiKJX33y7K6wL4Vk1quoRXohUAnpA3iAhaqvAS3tFNMUnvB4V",
  "key15": "27b8Xoapu26VMkazDevVRZCTtokV4n6JR84R6JRpDnsjxtYh3hKUjicN83R2t6yrUFHPrUd9j8jVLp3ZSzaZkrHE",
  "key16": "5DpmJXd1phRKjbKvMdaZRRZrziyUbdUCQuoCWKAjfZLpMvBo6UuY5jbh4Zv39kzS2K3bfW2qqQ8Y91m7BVw5Vb68",
  "key17": "5C7dmU317VnUXyWoVk8uBSXzrDBQg7jBbqanWcpFUe7LQ6AaWdeEeZ9GQ3nV1cvf1hgcynaBzGzTV2D38u9ib1Go",
  "key18": "5eFbRxyyNz7vYqWPde6MENT3CMsjX1JCjYv5NUFK4qmk7VvSsh9ypbBDbHgVjYGmWYufYQ7jbTf3UKzVbNCj779b",
  "key19": "2KsGVhEz3Tqs64xtvCdUhRxe8ypras5pd4eDrMvwjrTBXZHJXxAPmdc3HDXg9UkitFLTt91XigsxYmTCD26EAXwv",
  "key20": "B1oN6AZ7hBV7EGZGEPkVcTA3XRn8bYn8F24Kzuwh9eipvy9JWMhdqfWdnoDtMBcVZsax5uXH7UXYKaKQiiPa5XP",
  "key21": "4Pz4QGChuVwDUnV4Qj1LNq7i4besrb7srsEPy8aTsTcyJKTSovimAjPqzV7m8Z7hWJnfS85GY29NSTrPYemHZbfu",
  "key22": "61RL7f7C7SDdSYLDPzy45eBeesoQGgtHu8cWj8dParN4GPrcsT6HbiKREeok6X6qtNUWSMxkiiKb3tuwrvY4FgCd",
  "key23": "49jLfLHo3fHcP5ou4nB1AcwoDh5kE35M2jMWBNyoySRcfDeknSnEJJq7bZb64bybBguxeKacfyPWh15YqUce7cUr",
  "key24": "28prMemcucBT3PYHEAffoBKCLh4dQWuxb6UTK6wFUSssW7Pf9ULypuidfNrsmveXDKrhBhgkb5usiyXiTG9RqHyD",
  "key25": "5VUhmG6kjQWoAQUbMkD1oWWQnyQ4fjVbX7bPqq8F2USDDqe1JCiK3SbBzMYm1tYJFWNsYKYbLXnx6r1Ju8hYzaqK",
  "key26": "4unKXznskzhnrmDdyZCDHncyeNvf5NQTowQBbEAh37iHb9aYHFkYa7AuifKQ6QA1N9VK9A3zAPwqFDjZhnXChM4r",
  "key27": "4gQPYsL1Va3JcEMbsRCkYmLZvR8bj4Bheusp3EafW4kNSo1KzAc3DWmTT4tDQTt1v4VfnSpgzGD7uMCAKvv3wPjN",
  "key28": "2rnZV5Z35BmKB3MmxYUu9FLdZ2bCL67qwqghZzyrXuT7oec5v97UmmMcPbdKUboEAsT3ukFxPYmrSEs5rg2EcB6Q",
  "key29": "r246Ez3fUwrT1ACUxC8Z58JqFwtoBZda2aPV7oMwDVt1cr3DT3XRfBNcY6nnS68fPx5RhKGh3Edf7GBEr14ze9M",
  "key30": "2iT3rfkgGUJuYbQAkGgvh5rS74Hv2DGvNc5PSM4F2BWQatEDmNN1FA4GSGRNGrvQZMAtdkvZeaxHMzmrdtBLdewW",
  "key31": "5Rif6x4a8RvdSaVijVTxJ653iYu2mhzPq7ZAZNcqmxjnJzCwpyZCHRTPmx7DmP4M55LWwdjMwmcuejneJBfdAoSt",
  "key32": "5rdqcA6SKTUXjZ8FwxkZtjnuEoZe7R3NwfZ1AdLd26k2j8LG3vBCZ36pfhSMurM4BaDKSTeVss13EeyJ2Q7osv7o",
  "key33": "3CnWMBr93uYUEqgJWbiynQCr4ggcMJWS1uqruyrB1aErBeewZNvK5m2PiQnnAwMer1Rnm12UtPVRHL7kfuibjiJq",
  "key34": "3SBfNoeTXKh1kPuz5QZ5wrdU6GioyPYoMfk9p2bJZXoDZUjoQ3CDfj1hnwzKYSYaPGkLNQLaDwjTruQ7VRiKQW1j",
  "key35": "5sHQM27CFZpvWseiqJcRe3pQbjsUN3HoCQ9qW9rTGRb2Wx1pcWn84qwsRnTgG1kt8GJWbfirzNr1wC5s5oQgKXG4",
  "key36": "5x44YMCKHvzcMzyEfaeJv4KrjUxcD6eLUqeVBou3utKs26NfWi6HgjqLYHKSp12y9jKGuXCiw6bgurd6o1C9JYzd",
  "key37": "4kXr4GhHRfyCGQ6Js4F9ZBMeUSZoRiALt2TFoKUVPo4HMqUEKQvcXeWhgdZcU7Gipy9VNr9EHYBKNcNpL2SeXXGa"
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
