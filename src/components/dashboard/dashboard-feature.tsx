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
    "9qyqTfFUVzRjeSpqCuyYM3kkhWsdQCYSs3Z19e22Gun8ViReiBLJ51Xk7yhtctTaJrqCk1x63172EUoozDwcta7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zXYVj4pwMYFMmd4ytHho8JnDJSNNEPm7eKPUhAuBtxkfe2xLUYVAe5wre9VPimijidJx2yfYb2TK6sLJZtpCgKV",
  "key1": "4D9ArUvr6Fgw8V4oEo3Ed72Q2jujgMPcgTS5eyiE2gv1Ru7KeWCHV58hgRXEKmcaJozTd85zKjjwiRx7ggQqFX3r",
  "key2": "4Hg62vhTiURsEgStN4y4ghjecqkP4PKqWVNEus2Xni7tWpejw9S5RLhcv8wRXANotmn2AZjs4dCy8vgaa5Pa1o1e",
  "key3": "59efM5AmtVnyLmbAKknhDezLYaNstHRxz9UfeRPkZeSGk9birMrXmd4Mqguvx9jXP9j6PkWWZzpUrGor4JRoFTvz",
  "key4": "5VREfKV73Q5CcLnzuJ232jvXD5ZUeociB9zsr1ZKb96hbi5qMPBFktLUsbJ6sYa8URpBHMSxbFkzU2xr3MBkDzz8",
  "key5": "25xfow2GTRJpqDyvTzLfvTiSuEuBJKjZMK7XVhmpd6V1ujqyU71JVc7frBc2mdPpQhnATHU6Jdp8rkX5cZVgRAHe",
  "key6": "5yugVgA8NnW1rHEEfrotfmMwjKrZh2w4jVjRknvZYSDVG2mtfMM22RxdqxndgjSFYJZgSUw6589VjoQHX8wcjTcc",
  "key7": "31anphJWzPySXkttrGWAoEVQfPxSsjaVDW8evATBvkt7RnvNf36CPB7SGV2mBq9usmGzKiFsSg2gNhoD3x9Rh4Xd",
  "key8": "56o6HgmCLGm54Z3dLrKuShGAcVajWug9xC4vCv9DeNGvubtPrKcWX6DTcpDUcsgPP8UfAFZTyDWRs8oTDBrugjhY",
  "key9": "2sAWkpAAr1QHkPyCAtWnqZomGLtsendEJDST4vWH7ZgkwDuLoxfdR87HvdtMjT7NRtph5GH1UcN4yL9hoJhtGgqM",
  "key10": "3SjqWEShMq6ufGHjnRW5WzwssZyphXH8brEtQZ2UePVQrFx93wiuNCNd4nhM9rVcaAD6PzteFHAQftHJ1gLbxpqq",
  "key11": "wKhGQVNxd6a2NhTDnkGjjWCcM5U5pUBkzMQUSmt2KKsot8VoeKkW4CFk9dtmm98G8SeZrSJFfWDwG1q5TPkWN9u",
  "key12": "2LoX8hZTBSSUQH1tojvwyxxsEDxLxQnxT6SC9GHWcZnssWURHvrfCj83GnqWJwRkLvYV7RrsYabDFpiT6QACQhc",
  "key13": "2XA2Bq3sYf488kk1f5Jm9Wc5Z9g9jEiBvtLwuDs1FVZhoTEcKVPdqtuVF6jouoBEV4w4WAtZdQcXeeQNXohFES86",
  "key14": "5vVU1PAeDUYzf6bApxSXSpk73M86G8Arnc1A4Dxd7DyCV4Q58Agae69EPU9qtpLT7edX2t2jp9snypq3KuB6ng5b",
  "key15": "3WVytKerKKBnyrJSZLUqUvKv6AohgrQjngvthjy4LtyYbUrH3Rw2UiMQxvpyKJ3VTrX4WwzPD5XfFRosvEf9QT93",
  "key16": "23TTuEdPLmpFPQie14wvvgRHtzVdWkrX3ugdCjFJkqAKNPSrs96V2jwvhv4v4matNTPaX7D9E6fLqLYJJtpjutXY",
  "key17": "2W6WWpS4C5xf7ocZ3eAdsGSY9d6sPUcxzWLcsKcudUqkuu1jWv4bjrfxydNb66VYgsgxXjt5kxwJSeXKHyrupgiy",
  "key18": "59YJdMF244ezJQTimQSLUuZTXXNRLHPAkkSGRmAWGk7g1XokY2qCqKgkFHchTAgMzCxbDPeaDHkrZXPTNTJDMkwo",
  "key19": "4PHYHEQsFBVyF2mCZTEKvJSZGjvs2U35ev4sHdiLyjsGi3re5V6EeFBYpw4TU3GhW6BkwKgiHMwmPfxZS1N4btu5",
  "key20": "jDxy6fseps2XNGH8Hr1mj5vA3Bki6BFvNH63UZgYkpvjQspfKDT1QBpq8sWk8Hsh9crxK8pn7LD27pzrvAQeV7j",
  "key21": "4yMhmLcGhDEpqtKLb2ZiBrU5r2wqC6GRCpH7goZRi4w6YWsF4gD341vusKGa9aon86kR5ujSeUzhXiNZtBp3HP2f",
  "key22": "2PPcHPyjf6YYcE1waPgA8kCveMwtKAWkytk6kUtBA3NYP9qfgTvjbaiCW1NwNf9AVUPt1J23xVntQYWhegWk4P1o",
  "key23": "kh9e3cC4jcD1t63WAYjtxCkW1sW9i4tiTCHgBCyoywLyyxokJzRsU3g4ViNcXGDs2KDd8bA1KKxUYXfxsPFjAjf",
  "key24": "2muYHMgFunzcjLohM6mhkeVJsH6UnbdjNa1dfqrVy2ugTAD8vcxPvPBYLNtggRTdHHSoRg8CUttSrFjuymeAfrCz",
  "key25": "2ZfHuuvymHayge6wPUNupWjJhFhZF3D5CdX55MfET2XLns46iW61K9Lt9BYkBP25WZGynzczmYnPFqKrMSzRidGb",
  "key26": "J3hqkcF7U7qwP5tNxQL9J3xUxQVVhju4VWPUU7BLf9U69NHXXXTmAchTLkerFvX8ueH1G7rqX25KrcMmcZbD6wC",
  "key27": "vtLvdXP5MfxCTybNRGR5jmYCvjmTkfyGx8v57AJ1rYxGNUkZdQ6kWSDZVo4jk28Z3NqAJJ2vJvqJ5mkfqEGuv5D",
  "key28": "cLUm2jBqVpY8Sj4S52P6F9MnwP8GaKSj8swRKPc5ukcNrptVMAyi1w1hm66jfruSpu6dn3wUU7Vyb86ChYhY8A2",
  "key29": "2aZsjbVmrv55AzdPeT9n1Ej2Sb7CW9xnL1mNNmAJT5cU1sCrjMnuHA2JDQ6jwWqqJsUjjC9ifdvKhKBSR7wrnhws",
  "key30": "5T1m49bFfv9mp4VvFiV8kdgWQcEkoxWRj7qqBUniMwPo8zB44UUmqPZgSR9fsZkMn1PS3RABgiAHJkqZWimzpnx1"
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
