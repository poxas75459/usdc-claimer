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
    "2FYLEspNaV7Sw1SuFcAix3aHqsoTN7tH3JhBq7ZDGFiQVp9ZJuk8NmSp4cpPXUtiiArjfGr6AfjB2kHfXxFYrCb9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZBxSyNx1Xsxn64iFMhQt7ZSJ4GGDVkSzFbERPuvmrFEvyqWxjovMPGJiNWUmEVkEjDikXjugA1Qu3p9cxpU5yyj",
  "key1": "b4WGBtRNTo1M2JZAybbMHAkq6udSUP2Q6yubiVpZEA7KP6jeB5P8dURHSz9CQKVozFk4qfoy4KbdadF53cRi2cH",
  "key2": "3wnoBFjYdvAQnm3X1eof8oMF97Q4Xs7xAmKeMeQxEJwxnZuKz4Drc8a9UWUwHETa5Nox2YBzMBAkXTSMytN7ooJg",
  "key3": "3tqmhAuarQpDH7vVeXfuGDix7N9QYzrEJDrUSFvsAcFJ9wcPffsc6SqCdN8SN8qoRbnXziqdCBJYk2pkp9dvxZVu",
  "key4": "5vUmMguWVtbw3NQpJPgytrSfZQFb3pTzM9vT1YUYiZdzwZxpoTLcQEHRkZaLoE5h7KYKD6PJum1gPjbzoP71fiRb",
  "key5": "52Uk8JzZJStJWoBVdEZMGyfjnaNi4Z3PNhyTjpQXXLG9Xg3zVrf19fV6N6teT8sEgrMmfsSSLN51td2HHTk7jDXv",
  "key6": "2Zq1MK6yTAPn2UjWbRciUPcVrewdckm8kqYAssPBRmBVwmptgndqzifeSYUbZvzoyZScg7Z6oZLT1uoaVxRs8M5g",
  "key7": "2kYmUy6MzUfwD84zTo3dq2zsgrSogFYabzYpJYZUyDuaS5ZDmyXM8pQqUAJhWMMLpUe3mF2HHN1XR8pDLEhWAnXP",
  "key8": "3WoQPpzhQ7TjqW4MVYhNBjgQuxHSADTYTb4jQxLw7Uf1sWZm1XSk9vZ7JgwotGr3d2jKxQBKYRswE4eaRECrK1VS",
  "key9": "55h5YBjwXDnfDHGonPSkCmZEhdVHW8grKaQF5CEc6uJL6M8spyQp1SNdNYLCwrRGrCBMrNr1P7E5EDVf3csLPiMg",
  "key10": "3Xz3e2W15F3q154KJ1Fo1Rg5QuZCN3keQzdJsMh98rLR5GyCVxzwMXxtkzn35KRKMXmyPoWACUZSUkvsFWz2v4iv",
  "key11": "pe1edQ9jgsgKn7xDxfqeAc7yRsCji3ddNgufaWxW1zwkmb5nFFcm55phPuMcxCFqdVz7WY4DVYApqVDZQkPYLKQ",
  "key12": "4GWddkJ9NyB8RnMQt6twZg9bCCy9D7NPh9pfSazoz6mGGcK7DT9LGLLVfYeu1oEL5DC6Rky5vPty4vF1WKimKrfS",
  "key13": "278jVpXpkSt47jDaftWwx9FBMcb92FSKyK8c48idHD1VCwpa4zZ2wy6J68gjFEkZ3gjFjqkmEZ1JN4RSYuXxcT5w",
  "key14": "5J2yNL42kUHMVQcmerqBRwERYSGmj3SrYtr35Td5hNUEdB6Fx5YtKJSe5oDJm3mTqCNUu6o4xDEVVr4qrdcFDgX5",
  "key15": "5H8vc8SqyEVmci7WDErf68zMaBRGH5bq6ggTGgWCFK8bMQ9Fj7RoYafXMguSepJrZkuMLsuBPV8S7TM1M5aQcLWq",
  "key16": "5s5okqCb9mWCbxHLX4Kj9vdBMfiSRRqrdziAdmjoztNp6hSmsyBNJJS8G5MHseeGWYmzjpzBicH1EecFB4sbBGxJ",
  "key17": "4ggoU7ieJhz9e2UzVRHdZyEEiaiCVrC1rcXVKMADYnxqSU5HBrV7M6kSn6yBkhafF2a8ZkzNbfaJ7Sp1Q9wvMgft",
  "key18": "4VrA6CvY2A5JK2LhLgoWE57WAnzZCjnEjJ1bpGsDe9bjVtf3EgmZQWieoZ3rWBVVHYQ8iRb3N97Rp26ZJND5Cnm3",
  "key19": "895aDvFsbpmcU68jRYgzmkJPDsfuQYtYHrY5oxHxeqUCXBZ2AannxL53o4XxS5hbjkESDMNgQkrPas2RZkRTe5q",
  "key20": "4xuZgqJp4VGHJr6AzdMD8SaYQiWVuvb1WvvyKPVG3qbDx2T2va5peJCzrimvWFR28kJfgwLUnMV9aTpYZ66WV11t",
  "key21": "4Aeb1ADwaqgzEX3H24V52RT1hPVNF9RqSkDz8SvKBAJ1LFFRA9BjeyiYHPLajiSxhYgx2TDcoHBKCSmrEZibx9zc",
  "key22": "5vjb5997Wam5GjGwDuYAfYrwn4KDeunaVoP2YSRy8rYJWDCe7K64BqCo6DFSUWiAVY12En3C5cuaTj687dcCW7AB",
  "key23": "5gR3ur9YLPaoyyWjrzLUc1Ff12omDuwqz996hBpjASEKERJ99SR9T5txZ5eRFh8CHUcG5FaJMzqzWhw4hwjqHPET",
  "key24": "HoCeW8NhjUXknrwv7qEvudbdiee2wQbaxXtsBpCsTMvh5HBRTeQ4D6ccUQBfj4ark5tcsDyRPTyPahJT3CHQf3u",
  "key25": "3kxkyuBu6Dwz1MwDT9DHar39iY2AFDBePNs3fyw9QFjtycUXBR4H47yAyYL8Y3oR3Pd6mRnQXw4BwTUnVvU3N4eX",
  "key26": "52n68FYv9fZi8JaoL6ejjs9PmDbJX7JrZ37kn31EmAW14WdbRXAdxJjcPEwVYTTFuieMxkUuBPutMYc8EmjKwTP5",
  "key27": "448aYJ1c8wLr9yZFcCpYJbiRqv8sbJZb46woWBXRX4tAqUM5frYCr4JbTia1quVAK5Ubq2fJBtU6uKeN6iSVGAT2",
  "key28": "225Dvjfz5ieg9Fes7EgcnVLTd4JwHZfm1dYfmhKDDxhkWPxqsfaaTY9v1AewK7S6b7A6VDBC29kzvJ6MURXaWPwa",
  "key29": "54T6EA5sb3WCZ9YbBdqbckz6wE3Seut1qES89yJLatDWgWzF9LcswEDrV6BpPEMiZADfg3KKSrbRTdWwiDbdyZLM",
  "key30": "tzkvg3ZuAR9zWSfzoL8Qkc2iVu3f4ASWXhzhN263gEqG7ZXqRWn88i5bBEf1k6iY5ndBg3wa3KnMqMu6bVxXHQD",
  "key31": "43uyhj6AARCKFpDN2GUVj4owEEJdSJACx6DwMiMjvG5DDbugFkVrFMjYfSCWV5U4fRavJuAnHcTgNbZ7Law81j5g",
  "key32": "FC8gt3pZrgndCAvxKy1tRPeUmav218JY1hXxgFajP28iM17Nm6dqy7XTtAjsSFyXcWq5jYShY2CwFszySsuHNVN",
  "key33": "2WGMHRhwqi7FWT56Y4Nej9P5QxsGTdSLCZ92PfE1x7kQmxAXsy8rtRKzkuTNfNvep9oq9MPUWUgJoZY5ESBaiGmM",
  "key34": "3RPHdhuyAPNd65Xzryd1Nzjac9aiZHawMeoYrhvmUBv5QDJdk4z3sEZECdZH5pL8q7VDNVAHnfN9fzQbpTP683Qd",
  "key35": "4NtocvY7LXiL5Vb5czgdCF1zDkAQBa4DPfQoyepVsUJjX2g229ZBeeVzM1vEAF6bM1nfP1j6JCUd4gfwrPpntxdc",
  "key36": "nDFoUTjxKpYQZUM6VfNgujyPx5rZu5khV2QQypPojdyamccy8MTpmCpGXPFpMfsdj63ji2UY3zWqEkujSbXC24U",
  "key37": "3rksbT3j6yLmrjYUr7zJCiDe6vG5tconitC9ubMvS7VPbK59UFZ6pMUKAoj3sAe5B1a8Le6o8hP8uiZQS2dbtHLF",
  "key38": "4ZaaMQHLCWGqFfoHZdYmuhYFpp1GL4AUuHp4V6xeddcKYCZnHQN93SeRBx4oP9bw6ucerGX13PvuVSjG9o3WZ11B",
  "key39": "5odM9Sry7B3UX3uNSvJdYqpSPyKsycB2CTmK16L2d1JK8tSsrrwwpBFPZuabRAYoRP9QWrD1xNQZjZLhf5j7WSZV",
  "key40": "64KaD8qHyLbcBEX2shRCaLxdmUFHqPHTwtvWW65ao7emCJ5EuqnpUGvYLpQunXoB3BQfSWoRZALAofGXwNym2BWW",
  "key41": "4Wc5zZvByMsv59LtiaU5JKuBeFtuqgSiDz5AvoG9sYUrs2Nn7R5dSNFupHzVH6x2Qfzf3xDpsPoUA1Je36eWYuSP",
  "key42": "2cDgiGWy8koheLFTZ2c7dAgpncfdsKt9XB6VWJ2UQ3EEj3bahzRo5b1gMue5LPZiKv2LYLXUPi2SeFiqdGs8riRC",
  "key43": "wwTU6AqcS7k2FE7rYQct344D66srHnBUQCvU4PjT2dFnSyfrmgW54GWknNFPMxnPLbgo3NzoPz6ho1GpeyGbAjD",
  "key44": "5zLuVkmAcXDevZG7KGX3vdKHGramqeUGvsxG8xqWjEFRezDxnnmWxFJUDV6sfk6Ya5bBy6TiE2ryv1UbF8vDSPWK",
  "key45": "4P8dnm7TUBQT7oRMaEu42iFJy1QB3gK2DybHZ74Sx7s6uvd6APvLrpE6HW4mgVRYNxhUXU4v5uWnfVr6RcXq2tdH"
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
