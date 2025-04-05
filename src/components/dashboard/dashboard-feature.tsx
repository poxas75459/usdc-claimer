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
    "4QvAK1E4X8UnG1jaxfXqqZ2jnkFTPzGC8q3bdNs3QQZVwdMvm5wAvVT9mSRup9pesV723kjhQhpYNxDDmD2tJkHd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NDsxf2moZB3wgiBGNTDqoxAHnoiyj71JzdtEtC6zK8ki6msSUHpgYrXSGSusd3nEEYUHYgbyrc5tQq6UMxUWRnr",
  "key1": "5odanyQzubfG87wc7khAb3ojmXGnNHTSxwqCmpfBiwELa76PYAaQMEWfwsXMnChrDV3beankcV3NvrzFw1bqw2cN",
  "key2": "4CH8bs6oopRrvHNabcSnsbkTHjaYXSrECXGtwmLTR2NGeTtJwCbKepcYikUHiAaLtiMWGDapb9qm32rywkCcPZMr",
  "key3": "4jZpGptHWvQceQG4B5gfFGT9LwD4YkxnFDcKREYcHaKxx2zskUdZFnt4Kz9LTsUFpshe9tTaCeLQpRTc6Pmc2vTX",
  "key4": "45p2zYyGZpRVYCYoReZhPbEfpZ3cscY3HEqHK1g4dxNJG6BjM1DQ3L3JS4PeXgZuQ4zWTukXu2Yy8EDu4gF9S5bP",
  "key5": "2z857zEKjBFGf3XRNLamMdFGkdv6wqDyxjfZrzqU7NsiZTPsMp9KWNYDgVgQFDsNaXvG55Lh7REgjdKhstuRU4z7",
  "key6": "yT9QysjKcgvW5ESpgUHuCEknWKH4GLEyrfobsQwKw9XWbgfTfV6QStHvrGQgf1MKH3Ps9JBW2ymqruCDmjoACV8",
  "key7": "5eFrdMQfwjy8TyM4fodMjBx2qhwNi18AAyxX8w3YoPsbco9vex9wy3hNcbD5YXeJdqxY5XEkZj7B5Q6u1QAi3PeL",
  "key8": "27Gi29jriPw6JGia7yQdnDPbSPQgszizj2ZD3DEvqbP476fYrSpwsYEePBNaugWLAQdNRWLoAwpsCYFNnSmQ37zE",
  "key9": "4ZVcfqKQuuhctudD3UR7JadQYpJathheYo5nyh9EuGE6SjfbnBXDFKZ69dh79bMVMZsYh2SMbvvVVxrXM1swNtug",
  "key10": "1xzf2iaoXK4jNzJqGxgAjGAgBe9m7CHmrbBP3U8nTM3E5vPgAtptk6F64kJcBnCmswr2CLHGJKmP3KCxKwPZEBM",
  "key11": "3Jr3TGxRk7bnYWzFUXqEhc1Bs8d1ZZiM2715NxMXnL4fT5goJ1AhrBSHBMknZaJwyqkve6Cp8dURHDsi6B7t7wPU",
  "key12": "49QvefUBgWqzCoyG49sicbzxKPWnR1JCaHRCGJYgj361zhVWB3bi3HmTb698hDKeesc4V3R6jNUDPBQ3KcXcqnxp",
  "key13": "2MdH5dn1zEms2geTEm1Zk9iDuiinYo3rnRydgyVAeWXubnvshnDE98dD4LuExhbHmSVgP9uPkkQz441ZghyMVVys",
  "key14": "J5k9r8Cz96wHRbCwwDKZ1AaPH8Fwo3kbfq5Ka64P67APjHXrtTD1APaeN1UQmqRuh3qgyCSmGNwMcdj7JJxrmDS",
  "key15": "5NthjszkcBxffjAqeA5Gsjy4k1WkCNzzBcdwFm7zcAqmDpQbgcwvcXvbDV8qpbmLP2uRcP9qQ7BpB5XvxGxHjJhf",
  "key16": "2JnfbdnoPr2yDyogVaQwrgg5WW9kLnP7tWdaDMsESQwQsJKJ7WW8grvgEF8Sv36PiCmBbfxQhFbFMZeu6jvrbY3X",
  "key17": "47W91FiTYd3AAFS5XN1adaskbyvye9FZJ9yW9iAafwsRPCVmDh977qFUoSnWSa9UBCQxXrGsnniNHfaB16V92Gzp",
  "key18": "rjWtAHUAMhhDxMn7FUM6tyJX6T34jp1PfPK2UbaGN9WbE86rKy6bGKpSnALoRx7SPCurrKHsx1YL8Z9uchtdUDf",
  "key19": "5KXHGazjBsPvUHL77jPFNWunQfKY38pdJxuSjghUEDr5XZsSeKzGQ3ATa61bTAPHBTDppQbWjsJUve7TRkYiBvbf",
  "key20": "4fG8JGQ3x6QNaRamfLMfG2isVF2HqbMGD4nXeJ91MhJgZkoewQnnKyWS8Gb3Q7zTYFHtMiNBMvhQVeWayuyjVWT4",
  "key21": "39uA3EtSHxXhk44QoNdsoKD46ZaXmWqM2WSMCghkCMyeUVKsbgBgc1wpfspSrEfJxr9HzRVtXRcZfuhG3uc1hgwF",
  "key22": "2xYNMUNBWBEg2euAniqjJ6mHugsQ5649CovJ9Re9npZ5fSDSj3p1gf6qUxFSgX23qwffUr9NPULTvwuXmwbTZrJH",
  "key23": "3z1XBzfLHZgofa5VaabkcjsS4eFNMgyJnSfBL6bqzi9HGkrgogxgFeVfoddShieDVapxfk8D8BGczQ1psviKmwCr",
  "key24": "44YewUhdUS9bndBkXSD3QmvamD4a3bLHK9ZFr9oEsFia2VTG4m3vxNiWivCZquLYvhrDsb7GpjqKxbmqX9S9u9Jr",
  "key25": "2SVCfFo8WVPzNsHNbkeoy1gasahHXC7RWRsrWHZmBCTeQhGYgxuaqonkwGHvq9u7ipiVGpBoa6hYA4B6bMSU5jhJ",
  "key26": "4SRSgkufwY1YVMfJFhmXNQdSYkT57pLxcZLLAaZ3aWBpD38yynivvh6YrT1UpiHdAUYDXBPSB7AmsTxBm4bL1fJz",
  "key27": "i3AED72EzyEsHQ6xAM78dWxzJVfqbJhPAYrgZfD3woVQxAyQNdb5n9zMBV85V6tQWEuXzkcsDhP2WecZFuJVJWR",
  "key28": "2poX7rtVG7iBkXQXUZsn6AwXPrvvXZLWm5DPYhdWBYhLdVRRguJPgddNcLQRpEtgUdyQcJ2uVSngbtfidjQpbHEW",
  "key29": "5yDdtaQhnUrgPQURdegzWh9JGzAZ1NVYe5VM7VKT2ub7HHFP7N6cdZPn8ys4KgPP9D9C4AQ7QCjRiJ4FDLWJmS7S",
  "key30": "vxNWTtk5qXi5LXKTQrXP3j9PwWyZXJmkZbiPsqfxdyjsfs5qzDrVKfwEy7bAgUyjPjdPuQMNfp854Lu6qvU1Mtz",
  "key31": "3UH7SSnhTy38yqW1FB2Tfqr9MXZE3ob423adz2Lf1cTjqDwTxQPNgxzDD9X3uYTXKnm4VqTt1PiQtNH9CztXJmyr",
  "key32": "5LU51sEkK8SVDZbvATPfPFW2gwkVS4HRDcyksiziDpAhjQXqcdCzZrLc8wJVZGvgMMTrikaKyJzUPxTFKBeccTeG",
  "key33": "KcYJ9hX3vKGrPLiTSozYGxM6Mk1GXBA1BowZBViXmEizdWsp9CJZd8AfxSSk9exUqkvUWMdwrivpfM1AqxY4qww",
  "key34": "3Q5TmErhoqEyPcG2CW2TosaBbbh3WtnzqEc6XGDX4DqWFX6VfrE7DndHCNzCDaLMTMLHJYWtb3ymUvdErpD7Dq77",
  "key35": "3tmsUDaj2jhVhc7Pm8F6kfDhcjyGD9x5AKpb13dhgop1Ur54gtstAhoNxEC3vp7mKiCyoCFreqnwj3FkpvyuhFHo",
  "key36": "3YK8e46eRUrizqWLcTbDMkkaFwfVAA4ug6xWD1vA8cg4bTv2WgtWZmBoZcWM6Uw3J5VwDBqsnnCRWfTVG51xRsEs",
  "key37": "3jpDNPNvfb27wzAU5Ey9YuG1W5Mwq3FXCQnxM8WmqSTEUXFyjcSQdiEarzVThtthDG6Qa8ys2dxD2GhjjrZ3kYwh",
  "key38": "64FfFjZgHT4q97kvujzGWs2bUnwdmJ2GxVF9pZ9h453fpMeLbTY3MqGRYdNTT6LmC6trPAXer5sxX5b3ZwxiSew7",
  "key39": "5KukDcqLB4zdVUZP8LKV3fYKYccyU53VAYuwte8Xzgajiw3YUHz9pwa9gezY3ah3GQZfadsseouRXotarjzhgknK"
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
