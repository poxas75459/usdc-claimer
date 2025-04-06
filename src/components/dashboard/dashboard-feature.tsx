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
    "46mXgaJ46vbwYNGhCsT2bhSevbNvMtsjXW9Rnv8Mk6zpZiykUbgauasnX14Kftbpn5pvG4RXD71nLcSXNYDgxc1U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3x1pdCwUB5Qx9G5NGaxzJmWPDTPMvPCqNydtXDbyN4XBZYkwLqsLmF4fnFEQSJX5VZBn4dqH5EoJeyH7pG6J9H9r",
  "key1": "4US5iDUmPoKXe2etN8jd2pbzhqcY46B6AfrFHaHeeMr28iHGZa3PyKg74hVmpEztcgTMw2tCKPLwbh5Rv6YvYDGh",
  "key2": "4zsSQvyzBcxWj5nHmdV5JTp9XWzXcY6jrJC59abANh1LeHdwBmNBTxkawEJmMoZP1rGJqwBTQa3jXg8BS4RTh1aX",
  "key3": "VqU1NoaDuafM9cdt9P7HsBqzDb5snTcwzzjBvHuBxwyoLKPkzvLgVDKszghAxMm89ZgTEwARstUo7JrHKYMfb8Z",
  "key4": "4bX459WzwfP3JwihGrnPtTFi386CBGmHDNriruduyVnsY9Uv9wAQHM7BF2hKrXv9ydUADkzb1VyrMRZk19q8RTrD",
  "key5": "2g15rB6rsdSt6r6csjxpS7gSmtk1k6QzPUvcBNSqEHJJJ4xbJiukzKtcW3TUSV4GgsvRzXXUNCzEvuaLetm1VkmE",
  "key6": "EXALr11p1KY3W4WEeBRyPKmgUahbjgeh4YhWjqZMaFc5JJQyuFJxbRDrhqcTPRn9thkdQMi4yi6FtNgbXwzNNtd",
  "key7": "3wY13huNExfWCf2k6qxuQvuVVusq57TAQrbdJKCdr43R11LXdjYzr4pG4AXW7RdPPyEWd7KQ1WMYtFX5MWs82TGN",
  "key8": "p1witmxortUCWqcURa3VmBXeXZ64CAa3DA8cDTc1xuVknGtq2tst6fyAjpcrTAH5ASRXg6YgsEQkci19BLezWnq",
  "key9": "2dP6WpAosQQXfmg6TUYZAowKC2PMoLCGowQAumd68hqPkDBK4n9Y3UtTBswYUcAysWHcW7ieh498FKufK8jug6tP",
  "key10": "3DLXxPYmLH1Bhi4T9oyTCsqkDfkaDT4XAEY9Y3RKrWfRcS2ze7zXutmV4cx9kSWRWoSgCmLC8uRYSKC1S2qwKQR5",
  "key11": "4ZT7UukWkVtf12uSk7acAKXUs9xnX1SGLHMfwoeY3z4nA5u93XYA2dquvK7TLTN7QAamdDaaor835qTD2VZHMC7h",
  "key12": "5jxpL7d632AbL7wCQV3mArB82G8fCq5rMQcKK6viRX4kVejrNUQXRtdiif4pN4hJxvFboswEJTF8J9gUv4c2wvzL",
  "key13": "4DWnPYHcYFcGk7JqJKutG1P9Vx8RtdnfwQotyKCpjVXyaM66zK1w5RjvWfbubU3DvCiZonJnooxQ7EpmUheY3vih",
  "key14": "63zhgX5j7tZkbncrAvVmQrjfvcAXJkLDoGtFpC6vRMnoDwLoJDGxdcDxtR3gmnB6NHyHvCwfd8z7rFAvA67WmHgR",
  "key15": "zKZy3mY1GrSUNzH29N9tb4gs14sj87xNx88CTmcFUTGWQpfsZqoXgepNwRJvgKsE7B4XRuH1VrdbBtrhGf7rNcC",
  "key16": "22YoQPc1veXSByi1QWzBMHjPkaLkCjgpnbcZswBZeHTrWzm4xuqZaWr5AjhnH3xTzsLYqjn1TW6SGnEJhk6mPj7h",
  "key17": "4oA9wZFZJwVrd3VUpVVi2xSfsJ4n39Ds3yiZgzQDQuaCYqQ6b6sWJxdhbuMgRmtd4oZAh16tjx7p18bbcoTGWrJx",
  "key18": "2tWu92UU44QPPQq6UE8nTMbW4FrTpDiusQJcq5zoXtoAf6WvEgdKMdNMRNjog6o1R6u4fJfnw7Jew7DuiPbnAFBM",
  "key19": "2VkHH44qHYmK16B1ihKjsTqcrzi2jQvpfzrHd4qffhFN6daAPS86cRas7iZp7jD7ZQx4VmgX9o5Li4i3n7DhVGX5",
  "key20": "5JCKULdNHhUGm8WeHW4uQdRguHQ95TJ7Bh3DMYPzmwMYD5dv1Fo3rq92FX4PhM64qS6YatqAqebsffhfiJEPY2AB",
  "key21": "j3Qj5LF88a5KpE7ciqRgUKLwRyt4hpxKy3Ybji88cY3maaKSdeNn783U5mhhSejKz3CybojrcGTxzatFRaq1jg9",
  "key22": "3uqktQZmJq39fEFyLtW8gZJMHDjD4ySx1NkJQjty6bVhvbwfFaPeLRjDvr4LpKfrEJggKTGjoR6ZmYtYqbRfEqA9",
  "key23": "2MTnj3wGBirnvpw5khxe9mBB6kW3BrVLdX5uUV4Bip5MqUTGzRGP1DnPimj6SXH9eBjNWRMebT9YqrLz7UWf6Asm",
  "key24": "3may8NzP1rnguTbDj6WSGLDb5vjLteEkXmsR8SRCuxwPe1CAkohpG5ecsYJFY7VnpPF469kEib2yNzAr5kX8KNyy",
  "key25": "5nMv8AKtMQySm5RjaLoudXocCrDmL7T8jjpZtBrVeymU6JZFiK1ZCBSiu3Euu8B9v4nacHXa8J2HULXbaPz5CMiy",
  "key26": "2WX2cJiHBLEonuzHjusLkumU2FyWpa6gjNLU5VED8sHvmhodZ6n2egp2WrrYMnhani1U1MBhG9JARmh8saVctjkE",
  "key27": "48J6msfNQU74J6tbJtVG7ynVjEL4L7BEMFPBBWtZ3z4xZiL3JmoQ5i4yo9pCpG7viKsK2ZxQ3Fkh8rybL69VzkBN",
  "key28": "Xyowsuzete76NzaCeaG6i7kDQVEuW9RRD2rKSJA5cqjRcaXdXrYHDJvyzvv391NJHwpgXkHuU5cgtNhdrrxSLpq",
  "key29": "5UVCJwyJWTKHZw4HhobpHx95p5VK55i9ZKYfgQcBHcjzsBqVyLP5Zze6uag12SCgmFq1UUZdPbRDxWTygewk5wyM",
  "key30": "2GnBbfoVhjaPrzdoqkmiVk2nNzxUqiBr6JJEC5ob3QmXP5PmKxRgkhXpAZwYg51a4xG6P1zx1XcphRpCB8PsxUr3",
  "key31": "3dFQ8Ubqn6KbD5Rgme1hUktxB9x4FLcE9auxWFcWMy7xDKu8HAV2dDfxVxQsHGFkgi1cwSzYw54xEJYfb5MP4FG1",
  "key32": "62KCGDJX3etkU4MVaAgFSoqibpjY9NgJ2Fnj32BbzbRdK8bdTro9gpyQQymGNGs1srDkcGK6Q4yihWdVQsGrjMBp",
  "key33": "2FQVS56LyW1r9utqjKfW1ekDYFC2FysifZadYkDH2ULeXTdinRuK283qFNTy7pq4uoWrZNoeUytUXHvbLPsZQu3N",
  "key34": "28zseewzrEzfrLbFLDQnxoPfgc7uJStAeJr6GAFMCGvKbvhz7DjKLFpNXHtmx7kqRVyJFb48zhPUS6xrt39quwQf",
  "key35": "5y1nY32aw1y3Sf7skWzoU5R9VUbRkEKj5c2L2efNJsaa8MykYJBDMdPi7C9bwEX5Mh3NPpoaxCCL4558En7Qi9yN",
  "key36": "5GPQ4ViGYufNbVEDGgkiVKr2Ziscxq1c9NCtPzMNFZTwm4EsngqRR5VdvnNJQPJ4vTcpcZZjvHDeYxXvx4m218Kh",
  "key37": "5Qdt8hHm5Kh5xAf2Vx9F7eMG6UF9nFxQiR9a8irYKe1symTJEDZwsec37n6HCEnLM5fhqsp4irfTpvCsAL6ioSmg",
  "key38": "4ygtqAGQbgX7n6YFKozCT9bD8TTmZxgGWkr4wPNFnZkHZAQ3g5LRQX5FktQvG5XX7WaDJdRohxefU7C6AtcXYEP9",
  "key39": "6Zhfhhpmp2o2Xp3gCKJ569aTPRPphEEV5iFJXaxgvV9JsHQqYqjKK6D3hBQ31HNVGcqd6igfjLauiyPEeqmFzAf",
  "key40": "5LhgeGxABHjp1SKTmFhGi7Ju332p2RuSonkr3i7RFVkZ9FaVgBEJc2KExQ11ynMjbiADDMHXy8RZrEyrmPoFvpgk",
  "key41": "2UgQp4R6QnpAyJpLs12eBwr7U8v2YPH1tz3DRsy1Q2rpxBLiJn3GtrQHEJ7XaYJiT89CXaFhf4A955MavXQQuwDE",
  "key42": "2XTdtCBLA4gE1XRHW3NanQMcmejLxiR5HCe7pwfBLupDbAsXpJ3GSd2xvfBinXNV7UMdUR7NM46vcqQzEt6Bg8aD",
  "key43": "62EqxVREiuCAkc5kUCjXvJjuBNLkzBqT1Dwin27vUcwtC8rQPVQuFrRYnA7nZfHC73BLUASpcoYPpbjUG6r1cG2t",
  "key44": "3WkMNQxrKYxWxcxp9aSYkp1bvB3vGhhVCC4QszHH1nKhYcYj8Q9AfCHPKsoSR6sVcrabW1KNJpnbrYcVM841x7pW",
  "key45": "4Vy7P1ALFiaD7N28V5GsVtWiHDWY5ydF65VkERn5NTcSDtytMbt11yaUaY7i5St5S8vYLB1jV3zjM97TmBSQtsNN",
  "key46": "FgnSBUize1aFoSjTD9tTkNCWWqKWKZ23V1wm5rFBvo27QhAYk45pvtbffmKrGBQuuxQLWxagHX3G9ANWvNNDnzm"
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
