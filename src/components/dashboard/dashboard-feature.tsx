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
    "3qEGpWZEtYJyRJes2fCf9xAszhC6fZ2ygYmUm5AS2pTnpG8UFqVpAYmGTtrvoL1NxNPsuEz8bPKBU7NsBFJ9j5KM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XvkEtRtQqn2Mtbvt28jikm81tc39YrKdpDwwRMZUKZjgh744wNQ4HcqAYevqBb1AK9PJfdu15krnWLSs7hwBqTN",
  "key1": "24Rd4Tm2FvApH6o1u39RS4dxQCTmctptiiQjDN7w4dXccnhdKJPk18jbhtZnz9jZSfwed9WfgMGoNDxK4t9xYRwh",
  "key2": "dm5d3rasrQq4ERq8dq7EnnUom6uKKh8rC4GHQTNGTfDxn8wPjcqC6AXCCEx9giSFXLmJWnvoDxdeUzdQgoTrrGd",
  "key3": "4SUjKFzrgzk4TL44A4bGkjoYC7ZrhDmEEbFGqYfBZdDepdgVpzQRwmnCGNwDZPBfdpnXqCkgCbvGWGyc2vkA5n1V",
  "key4": "5HA6PLZTb2cDxB8FMS3mvdJhtp3bVbu8FVKw6FNTZJDEBBakJBAR9NEDbKE3jctPmDPDWhoqHZsFUuPhcC9m6zCC",
  "key5": "2VyLKFbSVgfDzdJtaftvHTh1hevogChs7exn6RNKgL6WSLqEpnn1kFZHVjgRjSX5S4ycBFck1zn4QFb5PiJBwDp",
  "key6": "zgDE2dtvwa8j2Eds6WrPm8qiN58NHjD6gUvsf6T89piL2KcqekjVxgHJeuRDqrptFc8qXzT6kgsqvkcuRtGco5A",
  "key7": "364yfrxkoQekv9mwQzeLPvBEq9drYtgLfd1GbynooJhRRjeNP6uJck9RFDoKtv1iqybAki2MejeFCxNWPcYEY1aH",
  "key8": "rhcdEJDwxptBVYHQx9d43PeVUuyfiY5biSDhSm261xYb467osV49YZ4hLTsMjQUPPVtJikM9DbdXBYmhySBUqCa",
  "key9": "65rpAuQfurxtvPXVYr4TijFtAR5HQ18idMmSAA1PDdZjJTHmXkBU1Ny83He5ZqxVgk2r4bAHnw8HaWzRYKyULC14",
  "key10": "46GHLQJuePWqGGcMreuw86qesTPCR5b3HeSQwiWfY99bfaxnRToS4DMYMcK7ykuJch9dSWWLCgMAMAWRb4fwibVv",
  "key11": "5EnedfoQ7gb7hUXTY1KXf4ExCPAyif9gLQSJUWGXBBwLGbzdXgXbtzU4BWk2D8b6saKTehwmNsZfBu4kuNhorhCg",
  "key12": "5tCH3CFkdZGjDup9TLN1fCsikFcS5njR92tz6WcCV4VJyAXhXajihmr6qG2Lvhw3UGTdMoYynuuDLXF8Nwyu5n9e",
  "key13": "5DL4QzbVh2JpAPn5tF8GVmcK6cnogmx1a5maZ8FcCzynyYAEmab92zyYD41VWpW3R2xMhk5gq5yUQe8ka5f8adH8",
  "key14": "3GZdqKiAAjyWqKkqwTTAThEqjD28zKZvVvumMJWCHECs59Yiv2fN2K8jSvjtUh74Fj4JB8kpAR9CvFqe46nRgpsi",
  "key15": "2Rb7S7bTpehpNpX23XRBpVYt4nkjDc2pWe33dBCkK1i1EMe6yw2VSQUzL84cThev3VedeNcWt24mnawZEAhknhSG",
  "key16": "3PYeZDzKSwnrkwTyvHFBD7GAr9bWkNqmuZWN4y8hVA5wbtzkFnYVyN6b2BA24FhMRPanDZMfbunDBhL4Nfvvit8F",
  "key17": "5gC8yEgFtMsPdhyMe4JF4qZv6ecRkBPqTF8yQTKLaQfn9qQBN42jTBNBRtfNREUtsrHZgvkzY7Zqao5hzX2wXyiy",
  "key18": "3is1nxKMCw8P8WED9Kt3iAMAQmHQbaM73TjkUC2Bs4n2mYGEEzyk4VSyikb1uFkNUvTGn1UVpmk83PLP3MdT9zdg",
  "key19": "2qZGnhmydxoEmKPRbimQnMVDRW9KuaXn21PXs3NUUfQr4emMUZsmJVArPATR7WWoDat3gg6PFgTRf7bExfq5MnUA",
  "key20": "4AjCSmXvTckon7a1Y4CF1MBsq4qQ1LJ3vHMHRUbBFko1uJ6Pg9vhksaxCcodg3XuBuNvRrNAepZVaAsYdWuMHJ7A",
  "key21": "YsoA42oKKUxrkYZyAKC9NQQV8hYGUcFxDJBWcH5C9uDmjysuwASUFpMU7UysM8om74RfHt6pj6JjuZvWdi7R3V4",
  "key22": "2JsiwK8M3MygMebvJvHZbyki8jDPR25zAg98E28B8nTBywsiRJwVCEuG2YbJuxWsHH96bwUZ6uxhq8vQTTYXywpx",
  "key23": "3cxsh5yvLb7PnahQh7oDKt1FazE7mWC4P9vvu38EC8GcAAUJj4VrC4AR1vVSLQ24yDnCsTNjqku5sG1KqfMoPv7o",
  "key24": "54BqpHpHvPdYXZsFiRxTMr47QrGNBekHctqUm7JzQatu8JiFLhnwrT5WcmKSEAUzwghRroYmRiKwcBzfF6n2kFaC",
  "key25": "3zrAHv6Wd1oxTKcSAvTRZpm12UaW5bnHLo2YJ6uVpLdjH7P4dvabmR82gEi3UcAHWBuG5gm4ihtTwVFWhBpEcJJo",
  "key26": "5n3ZKon7kBN3HtiWNbLVAiYPdoewrocx3bFVe8MX1vzX5xnUEmmchHEvDz2ugwXDQHAeBbGdt9Fqc3MKyd2YaBYU",
  "key27": "5HoeM3ZRzEy5zJWJ8gXEPeoYMMgcmS7iSGndnA9kieBqabHcZejjA6e6gJzcWq2v7mj7sF5RYdLi6mXzrKDVZhAu",
  "key28": "2eYGaZC2JTdaCjs5t8jQrD6rtwqQ25j46EnEp6k4dFkESRUaDDUQvjPFb2FJaKDGa3vyDnqSjqVpUVdNm9DnW1kv",
  "key29": "5y56mz3yxgfb2aPmg6doyPtjwtyNjCNVVUTUoW46DfYeWhKrcdp2FzoRpHaJtwQ3VkgWmmuw2xnBXiZWyAV9KKdz",
  "key30": "5Z8y1aCa3qfFoU1DXjKdkjd2xadKaax5eZjv5zTuqL2fk5P3iXaSZNjTZe48PTSsAkCUZarEHzswiC8Wf5zZkkTf"
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
