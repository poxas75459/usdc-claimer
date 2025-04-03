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
    "9PLaCX31ciNVfmNre4fw8KS5vjCHaqppP4TcjuhtjW1Cis7ht8BRZoa4P4fteJJYas24hmYDnVfYpT811cEtaQ2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tVVF1E1CdzH5EZuwWeY7ecGK3qTTBfK4QGYeJ39QfJMudRT9sqJo9iLLUshDEK34U5uPgz8RvEuw9ufi98F4vRd",
  "key1": "3HCszV65Ws5H1UZrVBHeScuCrZkEojeq44adBzZ1XgwLncMKe9WuPeETvT8StBgVGoHiMvSKiwmx6biLsaKh9FA5",
  "key2": "4ZybpZCHEPVE6xg85Vfg1jZULZHgSF3isZpxdkk2NxdvMARLaXWKemmR2UEUe7c32PSm3G6wBeYWhKMHzjDeQw6F",
  "key3": "2Su4SuK8HfpCPH4RVMXhaf9xkfDME8Gu8fBnS3oJo3vjmTFzUZHcEA7cu7XxS4y28peJxWG9ekeUz6eWtSUNXp95",
  "key4": "5Nh9YpdqR4aDAXA8aJhUL66uE54oc9mLd8jMYEK8Jv1kB9ktJfiqAPQPvYGCDfmwcoNHwRM9RQpnn4kXStBr1Any",
  "key5": "M9JDGJguNeQAPEZPv34PekZxELSDPoTJJgLWdGNvgHVNvFd6ocKJ65oYeYBevKWwvnjB3WBXKknqubBvzgLruuN",
  "key6": "5oMVoxP5Db46KXDGBuRL4fwR5wSooj2YwnzsvdWv4Ra5hZJMuUKxv1a3ubWfP1QsSw2pPHU1N2Pkf3iP23YpSP8j",
  "key7": "3TFdr63ATUrCkeyMMSKwVxcFPjwktL8LmkkL9tdosm8thcSN9Zay7NxruE3xaw3eUv74KNW4XZZQx55gwHZq1t8",
  "key8": "XxjAcRfMY83r99AxoeMqrjkgZMsZYwTGV2KuEn76nScms8Yw7i17wiDuH3tMAsGKPCCBd3CWJH2kdntDuCHwf59",
  "key9": "4T8kx9dEYBa92Cn1z1y63gdnQc827tm3UKvMtxRMDaUJV7MviabagKXt9YchmJRTBNrXi4KjbiCBGLnygvJnEjdN",
  "key10": "2j46ARku8EVV4rwdpmKW3ri5wC4o5K7XUzCD35cU2xmz433nDjVQzjJmMKC3HQ8L85qx46w2koQbCR1tzU6sVMGR",
  "key11": "5VrT7pzeAAGDTJWhmrYije9N9wdHRYk46my9fQ2sJuqwAgi7fgdsYPvQLRN56Y7AcjpmR6zC5YWt24jNmBk6zigw",
  "key12": "42ycW1bmVDPyQYhJSHFBttRfNRRDJKDNfQNz5pZiBSVNYMMxuLoe1JKWR5zx3AU9oMSP14cEW7Pm7vHQiPZ9c6wi",
  "key13": "2bcd1jUsptXiFDP1KtfxepxbvEZwQignUsCttGXEtppk3n7oo3oEzyXGeenFQavQNiE5Z2Dd4e14HmsWhrKqyqst",
  "key14": "4JTA7PGLAc6gR6Qx1bdf5hJYCRrwovFvfwDFZx6GzXW4AMAS4DJ5bso3NERDaxYSGzQaypNMkafAdgwc36tdbzYr",
  "key15": "zNWe1Bxq9Ng1JDYyVRagBsocb1nFYerTYaTXkz1oVWp8Sau2uWH9LjXUC64ViaS8u3Uado6UHwQMJkCtbJbjMHE",
  "key16": "3zcsvkBxF3Sbq4gwM78Vhv18Rai3NsbYd1gRHd7zteQ55B9pVTgmLUA9vaDdMHN64o2bXHv6m8GzVsyjzGpVEbbE",
  "key17": "36g5nMJcGAiCTZu2aVXpV9eC37aaxkMVmPSRfaWADidPZta5aE5ZiZU3bRhpUL76bT26iSnBUvYgw7vG1xcYcpi3",
  "key18": "4XSnAQHC98sy3zLUFLzeJ1UCwdZueGsAvK9L78e3nysGJBG4t392UfEsMcqVVhzXbbk6Eb6AbVfAsda8nMtx612p",
  "key19": "qnB3C3wzdZRugB4TPvhquN9rofjqpRpTcYzo1Gz4tWhk2MBq4TWRCBzdkfAAffzfhQpHuMSxV9SesdpBqUapqqy",
  "key20": "5Be9YFmcYszeX48taH9XwCKciHZn7kwWRYGr6eFsheZkfiHAdqh5tBxTAhijTMjEVVis8A24gEsJeqXB8kE3os9q",
  "key21": "4znSGbT6Qnkx1a695HKqs29dX7hHpTRLVWqY4Nvv9gQTkDgbJ6L3qRDGH2wJgmHB2BatA1k7Q9Ep2644ntyxtDD4",
  "key22": "2q9ACSNddvQgoiG8mJxpEYZERqhFt1N5LwPHy21qYGZ1W3yge1NtTmAtVKCWz3AdUktXNvjf6HbNRBanjKy5eiq7",
  "key23": "2w56qBTWqeCGucybLw9xAGXKHAh6M4egg4zRsQfH7xGn6R2oTdaCnoXkt7W83Np7oRFPJyTDQVE2fNCF4Yk37L8i",
  "key24": "kj9N1zya4Vg5WNHzimS9xSaj2kvb2QcuRnq2aD1Woj9WtksHH9uKgnHtuyRnyxhYbqSidvXnVzujdiAZd5k8Qsy",
  "key25": "3ge2YpAYw5puEfQ9b9EMWEVYsm8aaPSVyDfhaS7N25kPR8GcZwh9zcctjPHhdV1Aruem1Mw7bgWEh74nx4YsDyjF",
  "key26": "FQarweJU9sT6QsYGMWk6gZRpnkaXx9TuNsw1ygmf1xg791hQ9XNMS9YWkntmaDUtycSXoe73b4WtBr9jVY5ePk1",
  "key27": "4cYuyECb8WCzAwfJtDEapzcm9akKjLtZiJCwaZgzTmjtDzU6H3NKRUqRJJheR492dP6zLG4YoGPBoHhw4xFvChG9",
  "key28": "3m1mam6nYFaScdL7XAiZgBiCBtSCVJdnLHRV9Fm2eo9FKwES1N8rVT1oV2XQdqoaLENQje45rzE3mnzLRe7ES2Po",
  "key29": "3RtR4iNN4aueURZZzgjhqMzfv5fGDBrz6xgSJh1TXFw1vAx3yu9PJYtp97ie6VK1r2U2okunCEng5pKVDnVyTFqZ",
  "key30": "4muZpuJfxTQViMWZ1FqyUsdYjsoBvSRZo5QamwQG4yiZfrENjdiMsWRFuEVRTsPa3uifAnNZW7Akr3Jm2gnmK2Gc",
  "key31": "3zSdKCEKfzZz44gHsD3DhNfAkQ2nSvymFph6LNnU6AAFSwizUQWkinPWHdzBwFAMZB69dy7mtZhpbPNA5H9rwrRs",
  "key32": "2TioKHYX98K2TUeMkfMyXsPNqHw1d7fRA2R3sm5QC1gVjQBMsqKSFYuDWsW8BBfFjwYUMxHMsJmJzWSqrXQ22ztW"
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
