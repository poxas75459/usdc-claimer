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
    "5VPEqAUooxnv3XjVFpLED4rwv9juUnz6JcZHzUNpMUxRDM6N7bLwcSJepf4LSuuM8YUwjurUBtKvoa42onWZb9Em"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kxEdTYLw2FaRT5brZAQvBi6JUqdUGgHksaGTKhY2R21mJ3rg9wBWZU58mhrZUNZJqFHGnPsXThTDPX6PZgwvksz",
  "key1": "2nfYvZbzGojRdgtxbDzqezJZBuvDE3RLstf9b8BUax4ReiajHAF1oXBzBmokfTofc3NbinbMDZbPVhiiBsmRgfH2",
  "key2": "5eVQHneG4fCHthaipC2NqNe5MZyhjFA5KPEEF2qLo45FV4Esm8LytQXMcjPqMzbP4KoDaE8VrAdYhg977LjSKa3v",
  "key3": "524hQtLqdRX7P6aXQZ3ZYJ2TKRy61gYRQYZ5FrJRef4qrhpzVkEGSbwKJBgWVk48SzRNR9msbQGxXv4GZSt7Vzhz",
  "key4": "48YkCx5GPY8k7BcLLxs3GtmfevAf1cmgz4RXseP2MfrqzxK6jFSx3BstQ5P4JKzo5Rus5ufn6sNR6VSMRwPnVzwv",
  "key5": "5H1qQwttYZye5rgqruWtEknAh68jCL8eCMh4nKJ54J8Nz8rPNfRehJJu32zhkEDyt7ckCtUnksjr7PPqMVb7bQq3",
  "key6": "4JybVzwaY2bVBBsS8ZKvxWnrKpHsC4ZkNNGU9jJzsfM6qT8329j4bGeUEfHZQ1bVc6aXVUqaWyehw1KBj58vxv3J",
  "key7": "4ZWd6CwBSMqDUBzED3dgxVrpAwBjYmZqUzTNoDYknHL9xbqEiFWSogMYmdZdcaBKYDtPGgFKAnYD3HjNaXboCtGs",
  "key8": "38c58ryonUKNE8DNrBNLnJMAWpfX4RfCGnk7SofyWuKMRc1N3w9NqiU586Ea2G14MBYkCSy17jjCAuWAgqjaAbVP",
  "key9": "5YAsZaS56TyckHydJ4poTCwo5RaUkscv2KhBrKRoZrKCbuKcKKrXf3WNtramtG9yGL2tqfBqMJ5oFN3JGH9yD1ES",
  "key10": "4ZZpJ78jGNNx7SKX6Vikwyjk7jQVAGhRumVd154cW7ickovVZuUz6LWXoas8kTCsokNMzKTKTVVLLEyssV5jLywF",
  "key11": "5UySGRwxsLQGceSZatgVTR5q4hv2MQuepjiEX72Bo8Gw3c4YE3qUcG8yMy9q4xDWDyraALV9aoD18ZZRB2cvQQY4",
  "key12": "XDviWAfvjBhSD4djN4QjESMhLehdqRKqwJxsTiTg7u1xJkkFEUgnCn2WTK3J5KRNGqGVLtWcSFWPXLucRAUgZZ5",
  "key13": "3dnYzaimoBNknYA7RNxzdwazkSDXTucXJSVy2sJJbk4QZsdE4U7gWRPcyUTjgWL3m69BiTyUFByNpcfgW7awNbWF",
  "key14": "32x9qheRr3fi1vqKk4i5tD8xo6XW74GuyZZq1zGtvAdPiostTMAzPK6vdDw6Z9R49AoBWfqLAj4zeXEjmDaWxiYQ",
  "key15": "3JHMXXJnd73pNU7rnF9ZKMJJcHVFpCeXYKyofrTb7CCwGt3JpiTXULBosZfmF7ZZkcY8bUyiiGVeoqKDXguMrDuj",
  "key16": "5DhyPLgERRkwyN9uDyB8B3c2U7MkyGiN7pipqR1aRZJQwDfrpWd57Zc54R5QRiJAUstNypxmusiC3kXNoUKNEsmC",
  "key17": "3hozqUXHWn1Z2tcwbZuqiEzDWnuEFnyTqwHCxunozHAXGeCRv58BrNEswHrpS9eyRpV1HD5r8uNFjefCmHGHiqEB",
  "key18": "56vLnUjrmwd8feV5JHS72SiEtdT9a8FA385nu4gu9q6aqpTVkMeXCv3JAHiHvBX2511GPgeiiEZo15XeUYX7o8tE",
  "key19": "3Dpad3fTS5pSsijshSTwzuA7kojM7JnuS9BFtGHLqVumq2w3BivCKQUzx7nvmP8LijkZiKZ81E8gM4bxB74TcdMY",
  "key20": "4xE6NJTntLsndaxCqXghk1ppSprQKrMZRdVCn8MCdS4rPN81RUgSx2JDyK92XC1fv7kJyfcR9mGVMX5ouUos7nhE",
  "key21": "2FHfYLP8gtD6isH3vo8AHCd8y82wZvHie1uAGMfjzwNpGWsXg7E9Zfnx5wPsdzxamMLjnHmy13vcTHNnFSgfYd5X",
  "key22": "XPA7GNzDDsF8fofEibUz5T7mHfayWHEWFBMwxEFrhFm6JpjPk8j8pUrQ63XBjMSStSdjFbcxNKAGj27dPpiwnPP",
  "key23": "jetRznEFeHP9KeercYLaMgHVgHmeCkPmq2uuAVw6QqjPmnmzAFfoWNCjDpBTbAqJwaixCvsHcYU8dhixihDNWmE",
  "key24": "4ZERbd2xWse5GxT2BdALQFvMQQSCxUGnT3UBzmQYVXbqvBeALHLtT6p9Q3sMD9sHGRJ6SezPAVDWKGXVEDKXmGHd",
  "key25": "3b8q8kYLUhFFa1f2FHNkKdwZukvMBjxaRbGgmwuLDLL5zQzbNA9TF5oXnTF4w4e9TRBFWXbwZPZAcgmpxh4Rv2Kq",
  "key26": "5zbMfeRsCQK34Lgx1CSCRLZBSm3xmzH8R21HjQJc4L4YNezCnvZrraqNMpCDG7XCNxjm7Hxm6zdaMopaBuAyxj7z",
  "key27": "5ugM2ohy9gXstiLXYyBeFVtVF9RdJ2cvGZWMWTxoaPt9Fuo4fy7xHFdByAb42E3A1yAyxbWsgbHErXBuU7xPFnJQ",
  "key28": "5Ypgeh7NRNaLPaD2GTfQLcNSawSwQ2veuosWgUB6naGmHqHVDCVCVgoycUjCMoedhWbc7E9AK1g4A1mg5cyFkp5Y",
  "key29": "5BWe39rzEJZ3qsDaytDDcEwjRRrcwpiA2psZJ5NLj4YEeMEA6Kupfdt8CfjxQWdbMHJq3SKfgDiXxgyNyLsYZntb",
  "key30": "4k7jqk1KcU3C74TcQPSc6xZXNaUoULHfi2bzbKFX2dubRCsxFeVqvPp2VNUyMf7BUhWxw5E8nY2E8jpxaRGDwMKs",
  "key31": "2LQWYaAHYAWHsrGqZ6NGXoDRCMSkMMs3MvJPB6CeuLNsZ1SmYGJcbnAPzjf8aXocS6nmXmymSSSXhe54owYBjeub",
  "key32": "5ixDNXegS4i66btGWrx7UcVPKaQj46VuyZkHRSQu3Dj6nfacxSMnCNu91GaWERmG3fjrmCg2zYMpK8dQ7xMvH5Si",
  "key33": "3TDRt4B7W728xZZqtk8h2L6VKrCe39zHt2SvUqTf11amfmEuvQd5zxwbLUr9B8GF5rcNjxm7UeSdFdutwQqu3xxd",
  "key34": "3dXTvkiC36nDRuQBtTiuZGbKXLEYXuF1q4WTEnFnPdwGuagpsmYrwoKfJZw5FyWoJxxyZtZbSFA2vfcR4PZc9hGV",
  "key35": "4FSxWbN98ViwfaQE2mBPtbYTQCzGSQwaFWZetH2VxNpyuzNvGPiJmmJ9GPYuruj8qDXE8mP2gdLdKpLyyLo6DbPC",
  "key36": "4N6eWf37uoJcHZVoQxarPdzDEdcNSaL4CbhkepKxB6cuvnMfyREm1TYeNvJ1xbBRu6397TCRoEWtf6QbAUnmvTDn",
  "key37": "4DMPcxt8pW3Jk5PsLVfQJLSsD3zESmqMdNLnabeKyjvQHJyymRMvoF8TC7gqJd6UXuTqoYieqYCkpZzP4396HjbQ",
  "key38": "UXP3ZWkq3hSChYxuGAspg5HnTHn2PXARKUxxfKLjKynGonPTuwjV25xhFgTiYaX33GQCrdGxLV8eUYbnvS9DNKx",
  "key39": "3APFq2ngRSgK3X35Us5Vkdt7vYP8bNK2FJLw6S9EB7mmCSJWwW9T4Bi4vKS6fCnCCkvpg8Fb78B1W6FEktfKLC1G",
  "key40": "2fME6PQkCnqfoYMembHGKzVqtZk6hJTgDnwY7KMfTnCABqL9BfCfWd1iQco4vsBzJxHYGY7NuR4no8vyai354pGh",
  "key41": "2k7nCuo29skiArca6FLsSJv3jfGitusEQWsNJu7VJ9T4agu3SH7STjLGsRJ6mfCX5Fq5h4AYrsEQCaMXkPFKA554",
  "key42": "5akw7TCRASsdvzZ2332CpPsJqFXpoLf2xB6J5ywsWEWjCZPv4MZFw6HgLxmbf5Nm4ccDYNt2G6PnSgZphZMVLsuN",
  "key43": "2cVkvRQqURB3Q2gB53AHt9sNBqmLR13Gcp1KQsHk3sQwuv5vABvZeZ72xuxYjDPSs3TPVBcmRsZc3YH8UJLk6TyV",
  "key44": "4SZ9hVrz8SYKFjTCac7P15YXkYT4bzsYNoHJuRDwXWvkdbzdi9tWr74QmGGnoWX1iSYbowtd2X62tPWgo5gvLJrd",
  "key45": "26EpYqUzag58RLLE9D67J8tPouqu5g67Jy8tWoS3bXGZFN7spxsdcNFp2wVGK2UodiWy2gaoQfgyMuNr4qriMYy6",
  "key46": "3zgzGpyiPBigaCSNPbPxLLhDEWjbi4EqW7armohsFAtdvYYN4xQHwVwxjWCBuB2Fh9LubRqq9McszrRxtp2UyXfi",
  "key47": "5Bv1Ay8SSiG8Hj3c1eExVZg7gBSVH4BdHWpjvHDamH2cW2rdPCHpmgppGsRm8VzaKp9LTeFFAch5wU2PxThTsyFq",
  "key48": "4cD4DyfyXnyNRMgog98eFMPvHVbB14tiQfZyusgX2GnXJnM1vnW1AWp8EajZ5twayofSHcMbR2XhaRL26vMyDVS7"
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
