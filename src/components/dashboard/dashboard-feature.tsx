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
    "mh3YervKYzvQWNJmPC6EPwT6LYZ9LCzg1nzLX5ryuXsSfzTCFVAq3rDj3NNRZZtXKwxaBZS8yi9L9H1FdcWZ7Ps"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29Qv8b9BCVytS6ArKNFJZJvcNvpCHEg2xBYj4tXGCUGr3jHtGp1LCq32dr6YSREzaYwR61u5P3GQK9crpAJqxbEQ",
  "key1": "qaJ38Ai32QiZXrbhnvqt2SyGtdWwmdWTEkm74ZbtzJSbb72NRheMu7f1dv7rqW2YfgMgR7iexi5JzWVPY3UJQCM",
  "key2": "MCn8NS1ucZ1oJfumcDAg6ojsy4vguRtTyTEPkFem3gbeGR6zE5m8vNc5N7AKME3no3GyJGBqFncvRYsazYhwXRP",
  "key3": "2g5hjYMCWJ5y6pqn7ADyW8nP995FNfByRwWGyrJtkhnYubqq82wpFeKD1fEX7iLtreRhCsqBGXC2oLa2xbVgwpkB",
  "key4": "ijfazUikZGxjsonenX7kEKCL17oPLSuaXFeiu4s9hGnvbYPDokapGQ3pyAGsPpYRNY6sYNzj61uCdtTs9vukwFq",
  "key5": "7byZPuYjmYA6mkQdhMHcP6Y5yqRw2aeaLS1KHX5Mt5Jj7DzDXZkRs6h7UgGRLwxZJLGtDpPQujQwp8HFJ1DbTse",
  "key6": "41ois7DWH5zsGGoujFX8tAr1sTmJGjdDVHYY2nnyg2EuSk6mszX9bLUDpqq6HBQFjqErEATHTG4sURQamMcDQkUS",
  "key7": "48WNSDPBDLSutW7zi8wEnL7xgQcN8kNMRTQt6FL3BaTyjN1LQTLamzrDquJez7V7nkGc1CVhyg1gpV2cVeyVioJ2",
  "key8": "6QPm9twipnx1NjyYm5ropvyAtag6XVetSiPvg41n7CxpQbqfn4CXHD5TjR2Q4B3hYye9pGaJGht5JZKASgfhbbj",
  "key9": "5LnfZtYq8dCF3FYidbYiVneJEzd8dPHPM25ytjQbDVeJEz81TvueZkdyThc7GgkkNUQo8q1TisigUEP2CvswY1VC",
  "key10": "4k8Tn1fFAcLLpWA1yoGeQadWLd3fwwTqJEydyuGU6qzJf87CfFtVbauKosTAWtY2LWe4zLnE3t3z53dS6zVkQYpn",
  "key11": "5qLSn4iCVnGUr45H8vKnDJTqcgKtarpHByKm64TW9cX6UftQTi5RgTYTgGNgch1tCAU7TVV79hnjDqkGKp5TAxG8",
  "key12": "3jNMeMjCsCbD66R421sJzbX8QuRkaomokEiWAK31VdQM8mfTmEKdQFZ8J6kZWcjL4XrNTSwtzfDeub4hWEGciLZS",
  "key13": "5wqH5wwkxYgSqZqAhRishcerTCuXDaHiUDHn4fWQURD2oRMTHL6fm9CUzoufqAQ5PEMRSb8wEurfsuemueKJqnGG",
  "key14": "dHCvCQAJiZt2SPhiQXyScmJzmn3jt9rM8ntfSJ3wv9ZutELBUNdp6nZQBjWhuLhQoVgHyRzHdooLPUac98gmQ19",
  "key15": "5hhaVsxqNcF524zekMCAF6EmNHqLWyn21dEaU3AbLKW8mqNuf1gL1aNpqzbVSaDfz1oBoKqEuYcCgzT2NQWx7aPf",
  "key16": "433FrkWxxHZ9ycLGHR4P9bMahbmrSzfY3qkmU96W1PhmmSFNvpV5kxQPmxXvxHchPEL5aW2U6kKdnK5HFX35iJqH",
  "key17": "3ii7zF9CMuc7VdCUUoYBzmRj4CycnhvLc5jAZHsasK3SvZCDgSsyG1DiZqNeovA4c3JqnpYvrnsicxtoM2qDTNxw",
  "key18": "54i1XZnnbbxSMDYnbUrdQgotzmGcdUyrJeUUbqn5DfrBvvMC2mDQwqSNcZZZrHPb534Ywujqs3U4WNw82CyPLGo4",
  "key19": "9XQExSpk182QtrCLRCQPNo7xtuF88AQhuk6JUwkRV8LcPqZCeucksRnwNH3zNHFi2L6En8Md921vhz5JPS3bpXJ",
  "key20": "44Wt2maYa3wb8uxnyx5GaT9HV5SZr6X11NcfaxGdwj1wyTKkiqN7SwCQfgwrSy9WU2s6qFPnVsDM1MH6eSrLMSw2",
  "key21": "2KSjFNj8Ua6omFeospEwE6TPBnX5aKxQSMMgDbBn9GMwhGnvkXbECtETgtNa2sRu8xbga5CDKbwBYcFj9o9EJ39L",
  "key22": "23N45fUx5MiZiXmtigR7btMz5Ezp4K5Fg2xeGTDm6MojV9hfSKUBbML6LrMmXyW2bneTu3U7cimvfzpvfgufCh6G",
  "key23": "2EN7WmuNybX5rSP3fNJeUW1KU9K71t2kSAZ6md1wQhz6EmTLoqDahZpYC4gjgVzE5kh94ugvw6CXsvrGnTZdGrgu",
  "key24": "4q2SnZrNkHuvwvr9AU5RfPBxNjPvwkermtVfveYoyi6849ZfhSWgT7jL1eZ1SA5guUGVC9Zuwwccy5LNmxFqasvD",
  "key25": "5vcDjwyrNXSpXBe9vVuUpFNpqhAKSdCurMG2Ut2VmujaLnZsZGqSC8w19XV21XPoXUivmh1DrtKKHL4QCrM7JNMQ",
  "key26": "4mrFKBd6Hzwphst6fZRmNcaCwDJzvbfrmrWDB53taVJz9ph1exY72bZTgVw9eJsa5LPnUigY7ogQjZh9USr2Fyiu",
  "key27": "2vJ2MfL3z16bpvTYEge9ndoEBWRNTibh2NupBHfz4HdgfwDhyMkSdxe2YyVzrCvTf1JLjZFYvMZhDPmdbLGV6q19",
  "key28": "4jgdSNWvp9TWaUWek6KytmSFcvpgtLwoJkvBddxs1NWKT2FGkDaqQsDjNZ7uabrCbrHn4kzursSxDxgAJdQAjBKH",
  "key29": "62Twm87WD27iVLJyqiVZttfcB4BK8LJty3HxcyrQ2SttaYjNgeYfWRVBc2xr5PnDm7zWJykDHBYMMd4eD5jm6hC5",
  "key30": "bgcBUviZEkLWPZPMHx35wkiRAinedaF1k9p8SDQooy6dCUgDHnuv5SZ9m4eSh75SJiSNeZUuagumtbBFkrTxX2r",
  "key31": "4YKJu58BAb8ovz3ywRUoDrTgfHhSNkAesZmyVW9Mo96PtfBHaB3cTcRHBezUwiCE1CAx21rvu49TcctJyH7U4Zbx",
  "key32": "46vjdn38DvywmFUxpw1B7xMtJhCM6VgGhyoksUW8VJEYgCEh2YfUM36EDdx9gz6qL559c7999NSHSQq2CALQtUtP",
  "key33": "4g5myWJRwBpRWW1j5mvFvjzudUy7psivetvHV1v165YjziNgLkbZn41qpA433aUaTzNhQXBywaudpG8FE2h72Pnf",
  "key34": "26DJ4u1YQanp19ckyug2u6zfucAwnGFjAuDeLqeQzNUEDSjAa561mM8BsB9JnF7zfgzxhjeEKNyCdPbc8atyHxob",
  "key35": "5EFgyEHn3JfXvo24pfGTYoopvKawExy7a55dT3DXf9UTzfeFFjWTU94V2sjbyppZS54eaCxVVixWWFadckiwFnWN",
  "key36": "KcQPsLdqxLWZAzussiYmZVNGopEn87daVShJD6QHk36aJAzR3jt3AkwKEcdL8HQksRY9VneRBMRvrgK3uabjyVC",
  "key37": "3MxMuSXNeVa3hPQcLai3o7QqH42cu1KYdyeHdYfP9pDVa7WWYL1LvdLg87XBnG1N4c9ymN9ywGgmSXcqYFLgFxw6",
  "key38": "5An3TqVbj8SpyFUqEdoi6YxQkHVxLYxbRefd4tppJZFF9Nrg5Sf4uy4B8NvTi2567FMmRArZngq9sNpTkE5RYB8L",
  "key39": "2f9MwFMDbG5fAkgp3x6pAouo4peNrB5aEz713Sw6CgGqdq9WjYMQ3atUKx7eNYWvsg6xQJLKrXUmKnfYVX5g3hjV",
  "key40": "5Y7u1D86sJpHGT2q143QbENxavUZaJDxZPYEdcbVmvJ5p1D3pT3UzaG8RQAo4TcKazS5Wzn1BGqqwVaNLxXiw4jm",
  "key41": "DJtjxzd9W9N8y9W399beSKsSawLX63ZS4jR4qYjnpEhstxebJBsRcRaG5uagwrryGV3BRc49gdfbjTBto7f32dc",
  "key42": "5XYuYyXxNEezYncnPKXfdA4VEdLKMCaFEAFNHePQNQdC7FDdhsdAQzm3kHPkjLRJxUjRRww9SopN8Bas2vJeH3wi",
  "key43": "4B8jegagtnVm8vxHr26RBsB8JGGirSmNrVYaNEFc1kZ1Uba8kYmrzERiV63nRv7kHW59aurPiAzz5viwdXL94Zpx",
  "key44": "5wigvgczHc4mZqDG2q7Foq4q1MmmqyhmZGzRW3AusWeH7cWrBXaeKMwEMY5HWCRgD6wR2Qx1VBNh5dXrXUXUp517",
  "key45": "5W88iY1XopG6RABEmgBTxYE9DvDUXWq3cYzbu9TbPPLbHUY7MWkXcYjGHrehe6JWMrpK6WR7PPLEzfbbqwhzVKT6",
  "key46": "3qD6mz9eVFYKenFcM9h2FZjAR87ezU8CKtZhUwqL198dv2cRh94yR1gRPa4R7FhB2n7pKf9kDRk8w1ZiWtg5CDeW",
  "key47": "4R4oXXwXfhDPbUsqgMgQz87woRf5CNwq3nr3N3rDx5MxT2LjrUJRVviiqzT98fAN5wGLxTjWVxjWWaGBPWaaQ9o6",
  "key48": "2e7yoScsgKKwvNbpX9uXWPqyUr8eC4BLu4kw65SXUAm2GnM7LWo7kznJLUuTqroYtwhND4QpKHv1PXqEKfVJf96M"
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
