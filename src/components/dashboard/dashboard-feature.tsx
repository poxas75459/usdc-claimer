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
    "3ZcAYgj3wkc8WpKMV1VyMPUSXVdS8sjDGFKdBSasi28FGtTvMBHUFW3qoimS4agq7itcMJcWa8CHFUHjsQNzziJu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mYDjLiNdsg36wy3k2P2crxKimEuyHYZh2QcwdvGmxmXBdvygAJc6Li9a3pSK5Rs3n47juiE9yKCTGiZFDh7VTgx",
  "key1": "3mPvfqs6K9Pi8kG5XnU5b4Y4nH21c9oGfGKRAzb8cpQ35b4bAzzAPxcYWWLgwSBKUKHtnXBQK2MK6itsaD2Jb2V3",
  "key2": "2Kq968XMTNvJ2ZiD1uWFQAC5c276nXCs6RUW7W9AwV36A213b53LBvLha6faLM8XHj9jJ5718AbC3DXTxEWbGoad",
  "key3": "5bydhXkrCq3f2NRrARKfkysZssLgE6ZC29GYtcgqFXfjmYLgisn6BZMCeE6xh5FxH79NhvZr8hpQ7KodE6NYjGik",
  "key4": "5rcSkyggvzNH5iQFWKyHSS69Fv4FVQZ2jCd2fRy1zSFnQUpr83bZqLAWUZ6XMnK2WWXStvFqueAVWS7hfUdfm5CP",
  "key5": "2QtaeTYmo3sYiLKjVXaLQkNEiRm5jWYj77anD9MjoKwiYWQVkKfrNA49tFaDgYwJM3LwsQ7AYtSqjfbLrSjiLch5",
  "key6": "3R9v6XsP7CiCBVqDyRLRjPcwH3DV9Na28VeCZMBwMA2JreNBoYDpe4DHaoz3mauqCXuSWikSaHbPfJEYhv1ACsoZ",
  "key7": "3Nev65hZvwFPnqzfdEPv5NdaDjxj2rDNudHBSFpV31xmMgRgRVNtcRmXomWRrTH6M5pV4io86nafW3d7RUfHK6ry",
  "key8": "2hQioven4pW9QUdEHZKWx2bdJMGTPKG437C3T4hov2pzKmwdGgibr9GAsa8dzPM4R5p3FY2MPe3jCvcagS9bFB5Z",
  "key9": "2AWqfnpEzMLHRQUCZnnQ33w4qe8mEqxfuvw5iriUZmUGg5LjQ9NSZmJebRBoEdEe5nYUmbPZQZP3sxP7dhWhGan4",
  "key10": "4BgDdojyjboPy6e3fuaQDNfYQCSpUKUCafzvr2EsUS54iQQj9Z3CuytzBP4yQAscVRnZpVXYV4DdJNWKhGpeW9nf",
  "key11": "5aoGhWpkkKz7maZY4BJ7WstRbQdRG31Xk7m7sRgLyarEFccqGnhfsVjwbPPW21gdg7GbzDJTkufhTLkWjodT6xBG",
  "key12": "24kXoY4z8L5pB8ydJbkqdFZxc18hUCCc6DPtYQU3vviEW23VnjpveCzTDJrCQ36husGo2g9PNAq8ynGvQ5EVsgmr",
  "key13": "2qTpVxGhJLV2XJWe1jvJ8GwFixPYa99MMKUuykJQkgeboqY3Rr8LfXhKY5mUBe1Q19acVBX8PDsmwJSbmEekBzh9",
  "key14": "38PkyFgtAReAdmnX6LSi4DzeBYYZd3JLRp8yAULNDdNLvdFKrPGDnxhFw4dinsDxdZT4XDMcq6yDnWpQFv7jzTau",
  "key15": "2bgy4kZoZt3wgPMXJQWJuZC5gYa4wkNnTbaRuARpt7s8Y6zzKsivH9uTvdeKoc17CXuJ9bhuc5oFoiDEwf9F8HYC",
  "key16": "4n5WEt34s6mLcQRt7NposkP4k8W5GCxzhzLwd3JNCupKbieXi2Qjufh8ReLfQZHj4kmjSd6Gx681tesuGUUotYYm",
  "key17": "bxkj2ta7TY4iZiyxwf1bruKRE5k5cxskJrkZLZTULRHPy96G4S9wD7yyVkTB1tzoodTdsa2fV5gXXw4QiYdfnBF",
  "key18": "48AQD2oDytHKW42DsEcGZyJvXXVWEQssBksTbEh6DWZVoxN6dXJxFH2eFYC222gaYEkXi8oPZhRGP8uCU6F6xVZT",
  "key19": "3f4qD2TFXDnxp9UnpCZ3oRecEsCzKUgengNq1rZSPvTvxQj5qaevRnB8TN4m3Pcv1Zcy2wdEZ2kgUdDLMiEApvhZ",
  "key20": "3mjfZasttgCofYXa57nLngBrTFBkWSJX3FDn8MDqdyFb2MArNdARhGbaTsUM3W1knUXevC8ggT3V85kJ8KTpnghu",
  "key21": "2jtA8ApV5wLnkGkjiKcWn8a4tRMh2dtNy9qquh6RBg7VVxwrBfjcxmzapLzv1FGfFbfxtDCDCwuQ27UKJWdnVRVY",
  "key22": "3TFKUnoMKKqHVUb6pd2b2wdKJd7rnSbfBwbLQfVUu22f6qh1k3wNdX9UYr1y8oSiFNzg2okE5BAW4DGQCjNTTz4y",
  "key23": "5UyVYEKgD18TKrj8uGBLiWwhWrawqrcyq6uE19b6CbvECp5stxzmrbXwuKTQws3XEXHzQZ2EdKDCCv4LShWcnXia",
  "key24": "3mzM2vyiujX5PnaCQj9gbsAf4wimzmjUE65uNuhGX2QH2Aix2PYy3hkCuN7gNjzBdbNFaitNF3St6SPa5X8W2aNB",
  "key25": "4TcNYYfrfQA4d4yxhZV3p5FGSZRRZCTiDoAG7ZaMpXjTrycnSDMiJ2uX9gfGCC1U4MS7M9wqsoSjujK373VafB9g",
  "key26": "5VF8UQqa7gVNydaN2UXxJQQpcwPpiT9oxXAV5aPF7ohZXjJ76jHAEAay4gkQr6q1gRxmCFV5JP8tpLGH74Vx48f"
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
