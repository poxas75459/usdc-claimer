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
    "3n7q1FruoTnEG4NZN6QmG64BvedvW2NZxduXLhCXFuB93C2qxcCsEmRatZiUbTgWVDu2UfHrttXc2Snq3HTwtdTn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3y9hid6XgFgebwP8ZGgwL7RMBNtirxXj61stGR5YDLgrjASq2HfzZffcrQjW4hRZS5MWjRF1ZCFeT2kexzzpKUJB",
  "key1": "2swmRSdxRD3qHXoJvBWG9u53Z4VrmKiDb7hyEm3baLHCJQekvj7mJApQyHEmwRacpGSXXaPJrxqV7ZstdfqQuCQh",
  "key2": "5P2KyZEKWAjRQvSvLdSXD7KTKyx8hdM3KB5REwbXKBdWwLhmDv95rQBQibFDkGeD54pCnG7pNb1YQh7Lm9J11HBW",
  "key3": "4yqxhBk4KsqEyeJgqnhBpqXCHJaiwsJHJuRZTrgMtnRgbRYQBX7aWKvv4AQtMoxSmnkuHMns4riqk9eiUMG7vkZ6",
  "key4": "33pgLAQmGouhELJNKsigxxr5VYwxyQJgXouzvntz7Q9m2eY5zv7aXozsNg1a7NfdiQumyyVAqAUy6qdyXAbGGzNr",
  "key5": "2sTCJhimGoDSgAJH2cmk8wpQgnrmgf4pehc3ifHH5CLE1rTcu4Fk9ASAFgnZYp5s8vCLMy4iohhyVUWmCy7niN5u",
  "key6": "4WJQcXY1QA7n31SDZX4EYa3CeU5TSYN5tW9PaW1DPXjbBJ8ZHtXi6hHvVpmxVe3WACPAo7Sgxq1TKSzeJ7jJzs2s",
  "key7": "2bFPSKE1n4NyTYGQPSzYE5J1k7z8fezktpSkRucBkM5HvSddeCEMLrkwWR9FGTagVs1WtbV4N9iqbmnETUDPf7WN",
  "key8": "4HHX9vac2u6z3k7TTCkrzWcrAGcLvFHNvsvy2uKURjKVYaEhZv6q6758SCiZpFJcLt3cgdsKqD6JD8pXiwNSBC5s",
  "key9": "oUUj5m42n71CfiUrUMZ32AYYR5yScEUaEw2LukzZQQ3K8PDi1i75mH82mdj4cm9dYLyvUSuhh8yfWi8GSXMmp5V",
  "key10": "4E2fbEK1CCq61ovzjD7nieHUvWupCSfYSChDrZpaipXSBuCLH16FYWzXYEvZENDmJbGWoKXQ1UDDop5S7ASEza6Y",
  "key11": "2Ub3vNgsKRjpbT8LyRBXqBYhWun3juT9Xh54ewAEa6jiWiX2r3aMTqqA4Fu7syqTaJ4227QLhH7nT9jvDL3wbGrs",
  "key12": "fjV9ob9PU82KV1EyeRcqERrd2iohYyQotwmix2WRMymJjAz9iDQ4vYbsrE4HKA2ph6J2wPU3XGiDZFDYySrKgzq",
  "key13": "5L1Tsn1AAd4zsEkPYKT3zLfzEJp81WXBgE3i8f3jx53XW3Ff5mgHZP5iuLFWPMsF9RktfPk8N96ri538Q3GBNX3m",
  "key14": "vJzxJfB5aDitajXAFfwgBJciM2JRgkeahLUbaYUYd5FQ9QvScSmzHVG9YtTjq5goskXB93D4Nkm5yYzzcB9LAQJ",
  "key15": "LUULevaiveFfqKs1MeRUYVGWQEqdLpEAcL91gM2HuuLj8N6AE4Z5ZUmkFVLWcfu1P5hU7R2hkhegghLSdNTUZHw",
  "key16": "yXdvKvvGasBh7CnLfP5rYkXJ5uc3iSAGVdn8RAWi2RWHwRZ6X7E3fXhAdfcdchgMC8CsgDoN793a3VqD3tzKgCS",
  "key17": "3nCJfjBJcry4Bk44nH8Dupgbnm9zZFQ1LPTsnHrSgE8VJYbi2H44UVg5fzzDUjWcPeu4S8jUn5i7xACVBXpP3mVe",
  "key18": "s5kCVw7ukt7r3HDuCwegHiny9FwsC8zY2okSFWCwpzLwiQpLPCBbFepudQqPniQFgzgte5HY1a7J5LhQXqGgxaq",
  "key19": "5U1W7KgAqu9nAtwoAzwEfy6kvhnYLUmoNPrbPMjbXL1QqFXEVraYYh6hCBypvGQWzQeqrHiRyhFJrEp21SbfyuiV",
  "key20": "4iV6HZ2dQDbsVYzkxxtBLpDUCZuU3gKeSKziof4DPQ6Ahge8uV7WghJwCAqYykLZ1S2tygqKq3fTNQ1eoUJdZWBs",
  "key21": "4r8sTAe8cQ37cDPDBFMr6beneEtz4C4b51gQPGaDWYTtvhNsr43jWvqVWQQgZwGfK1ew6CN2CWZB1nsXTGjFnS9A",
  "key22": "5WUPYHgNhcXnByGkdxpap61VCbkH5DMWGKBocLt56tWs2TeV5SC9aP5Gn6Zo9wM8htwX6r3Ewo69hdPrAiQbcrHB",
  "key23": "48VrcoKNUQP7UaZbzQhVtG4CwNcKjU217xukNBoEimE9hyxYDp6dLGRMcZdnpvJTZiG8rv2xHDSwgQf3sXUm7rU",
  "key24": "nJz32NKoycs5mE9ckkBkKPyMNxFKsvSpzfX2AhqhGbotqnHV5UaFG8URQkMZPfcZatFMZyVmkCrKYE12xt9DPNH",
  "key25": "3HbyM2i3f3gGQktVoK6cMC3A3GGXcYcGa4aAabNwCweZ7NEJGGTxcVH2Q1ZaFjVxaNbqdDRVp7MN8FBVNAYssYMU",
  "key26": "55xgoEghExSqi7chA5TWX3xBS6zDLQ7mSPbbYo7bXAsxXLiuv9waURapQ4NToHoJBskWBS6ueHC6kShtfovPZUhU",
  "key27": "64w9fTSXVzqUFDtwEnr31nu5xqWLBySE2Tu6539GBy2G7m27cTtXgZPLLVQjTyRuRr6HM3jLXs6wA2veTPAtFkT4",
  "key28": "42fx2MdsmCtBny22JT6BgGLeqwYGfzVuwQ2Q4Gx7mLahDzWJ2Bfw8zxdEZAx9tZrHHZS7p3z7CkTifVVJ9aTzEEh",
  "key29": "4Rfh7tfGLcGHGzcdZEb7mSChA4vRJVyTGUyMf1cknVUT8b1cG66mnBEs8fzDpxGMDm6TK65LpfCGmivNad9cW155",
  "key30": "28tfaswy9s34YBHVzeKsujg69TWt7hkMXdiVt7wpxTj8HbHetPhQtzpbThXvGVeuGxCxyzEBHJx349YqYKX1ppKw",
  "key31": "pbKYQD4CxqKmFTzPqTnDmA98AnbQtot6LD5AXCCooutyENMsMUkSTSVUtfvBGdeQFjCmP17KM3BUEYRQpxAtyz4",
  "key32": "299g4WsPKzTjA1BJ4fJYvLY9m3xaqFBeNLYgjiTyjNYrXLjqU3gxD8EmSye9ozneDEz2F3MAhqNX5QQhc3awur84",
  "key33": "VNdwqAQUkgcA21qDTnsLma8tJir3Xo9wJ6drWPWQn4oaxaY83Dr9nGuB8nfoHqLyESgmUwJB4HD6vENzpfcsvHD",
  "key34": "2DcUZQNeVobi44D5CzifeVe24yLCXYJt6kRP36bjE3pWJvwhkDg6xb16znsdJJQ4FakbiHuzfaCsUYGpXGkUUhev",
  "key35": "5gMtdfRLGdpE77H6hDFaiournMBviUFG5JMhcDMyUT7nvybhCBJCMTaymDxaArjqCnvwaFpkBAQDHogMA7KDPxs5",
  "key36": "3T48AtPLCDkiACztyEKDUj1pqTwC465vRZPZCVThJSQUc2FKTn3rzW8pk7oogikw81iMKdjxyetfDgduUEFros6i",
  "key37": "2U3yPfZxgKfPcBj4hwLwGKZjbUfhDZWSs2sX7Uv22bmVbRvBxAq1QCjJDRF55zMmpS3NjWQtWkGXsWiHnMyrUrus",
  "key38": "nvcmLe131whTMsqBDSkrFX4m4WpeFiSXrvfzEFF44EZ3rR6kkQRmwpjx3HiC2hxkuBbZDuvETkgEDyzWE2nmr3W",
  "key39": "5LAvesfzzrujPPDXBymHyF8Wxb8QfJhqMFqsgNvst4NxT1pP6Rfa1nRhMuVwUoQ68E6MJnXBcsJxCoGJpZnZgJBE",
  "key40": "3ia4bjYHrUhP6DRR1a5TWkEA4spA4UWR3D44YxXfxMXmQjDa9f23B7QN87xYBjbQdNGNEXyGvJvCvktnrvEWCQ5Q",
  "key41": "5N9TNbrvMDj76j2PLSV5QCyo5E5KBQqfP6ApePhbZufri8GAeaNoBhVmsdMhcrrCX934a534tNz9ofHAdrjhmiQJ",
  "key42": "n4EAJV8nLQ5Mi3oRZMoNKb99L3puHCC1hTWS2BZqSjVtiqMUNk9XG6Gz41owHeHiGYxwnZLorySPbtxybwK1J3t",
  "key43": "5MZ3ZWznYqtsogra4eofm8fRJTtY9mv11Jmcja9zDiZGkZiMQywuD8wZSPfkwxrwMu4SnUtK7FthmANXYdNRPZBq",
  "key44": "4WPp1CxMYDbhFugZRNLCbGD1puV8gexX8u6bXLp8H5ud1V7psExXsngaZUURHTc7X32yTzQAY8qA8JJQok85MBdz",
  "key45": "3Vy5ts1st4c2gJCDHowbVM73fM5yL3qxQXBTZsgmj7atniaxMNw4jWndYgz4Cz4suYyD2ek2xMrmz82SKgwP9GTP",
  "key46": "2X4EMv22SbiJ6sJS8Jz5d2k6ajsRXfkTnTJtq3ubcoHNHqVuhLLnxxzNHYgt9SVxgQ754NxdWejCywRYJYrm2KgX",
  "key47": "PyAq7sFJbXvT2AuLexKaK8zQpi6D3S2zo4Xp7FUUAZxLV4kdgJeDyUGqbRi4MDe6zvZ4E12bJtKPDmV1UvdqKkz"
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
