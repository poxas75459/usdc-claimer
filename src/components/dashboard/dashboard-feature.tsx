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
    "fFcuB7qQvnubEnPCPLd2uqa7aQpYbDWo3Fpc4wDPgnyLizqs778FsJxBHwkns59cyAauonFPS61z48P4Ddz3kg3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sHLfkNyRxRrQ5GVyYA2rPCU3KW65dHkZ9ekVFjHUJ9DKXuKREwnbgrFvohKyyFSWeJmS89iWTanbuEjnwnGXHtf",
  "key1": "mqZEszcmZwLy1eanmn94kg979qVC9PhUGTuYcy2Kci6o3a711koSbHQed5Y9Xh8bLfr9rCFVvTi4ECwG7B9Fs2V",
  "key2": "3gAcmc9f7dTosr2pYD1zonZjAZ59J3yZu9kvsW5q7kUd4UpJ5Zv7Cx4Cgv3PoFC1kLsoZwnGPUS4rntHmqbu3i2A",
  "key3": "3ut7sdLGvhPaHZ8p5gSkPmsTf21NMQNj29HVxXKnXUqoc4WggdNfcHvahNKHaqHJ7ksWTfvBovTH2t4MtBSe5PfK",
  "key4": "oBf8EY9hDfcicsd962rcaG3iFR1WMqqbnCtqZmyYzcjs7gaKcSTeniHK9DgF9EszVGuXffpzUteCGu9w7HxyfKR",
  "key5": "25PzDhtwLBA1zggkves12sfaiA8n7UeiMDGTgSMhSxEesM4uXccP1aPZZ6swbb6TRfEo5C4UhDJcTxpL11NiGyak",
  "key6": "3HAZpX85Gq86SKwZPq8mezrahM1shMR54pEqCkJXGuqTxfvyftNhTkvdJx2Cp5D9sAYEJqfMDzRcEun9quH3JHXR",
  "key7": "q4gXnLgerYsQgdsvgakkdD66CRwmk8p7asreAUdivLZjkVL2bS6Bvre3RmdwFeRBkuoh74NKn7dDpAwboUaPfZ1",
  "key8": "5xxkXC5jawfbWYY25RMfFGtWcJvf4FdgXW8GUiCkwzGUZjsjKcDV8RaanNfrGWhbajuL6LrepkVvmYc3Dcbyesv5",
  "key9": "t2HSubsk5iByJ9VhK6uZbBkmmCNsYTrgUcoatTWHgAh1ZsnBo1iF5s6YS4oUhx9L3rMXTLLXyrhLckuDdLqk6bw",
  "key10": "4G2ZszBPWkLubpRKbxV9aukxeCewEmSjSHFD2WL3uphnQmadKMoomnjjRgpj1A8vLbHr7VU7ud6ovR66jnwZmgaf",
  "key11": "2uHFkJeGBWGaxi5uBhjYywKwsHYdx8desiSR1U3jdhuE5JxQw2EXC4kyXKCBEAvDb7RE32gSp6uhUyZcw3seZeD1",
  "key12": "5hWdnXuuQnYqZ7QKcBdiM9HWcBViEd2C3LHFh7CxxkwvsKjbZ812iPGQVRELFa1jsLadVkHMoUtsbd9bisCAQZB9",
  "key13": "JAYMNzGVp7ikKymr4EAAkmHJP8Qd8qqToXBnEPywFroRdyPqN4FJtrNA99uDFqJpamBRn9KJcJWfY7uQUQpLopp",
  "key14": "P7ivn96LuvxwgVjb895cZqDFF8JqbWFZ5DWxa6PrzDSJpMoSasT7PSd18pyTaKoQyMzqyaKPEmtPGFNAovtNxsd",
  "key15": "4trgb9SNTvyCSyjzWXusbeDbkm8rZPwu8BqtRfmDCCtFfGTN8wdCKHg9rJy6uG6xxT4HwwaxCB2Ln3WDgNRF2XVR",
  "key16": "2ntq5accbri4CQab4hesnpWc2es9z6fyxiAZQS2fE3TJHRPKnbxvwSJu1VBvxMtzjfGfDqSRWoWSTpB9sNwWBdnJ",
  "key17": "2haPyVd5VKY6o51KZZ6EPkWKAECiHNqo6VdQWWvedkyqvrvx9oE6uxES9L9vbHETYd6MuuocW3jxC1dnW3jRt1uS",
  "key18": "4o1TdEuaUQSCkQsDSkLQhWh3Lrcpv5iDCSAeK1SboRy52qMW2hXV5wC9LhuU57hH69ojpByGKo1Ntfca2jRCEQ2E",
  "key19": "2KL4iqnDmPKBSATemtWJw9hvbWSuEYCJqfesWm279j5aikrBRcZNXCebG5Yr1SxAM1pp5yuXVbfKr7dVqWoSGZ6S",
  "key20": "5qSatEtku4Gh3NVKTsvgL4BpNKjyjSy2XibcY59sJDk3xwDVKdrRd4ifBSSCX7KHwwo8yUBFE4Aq7437Vozgv23u",
  "key21": "2KwhdfQC1T95ksSjXuCU1qMXu3eVWYfhyVYJ94VFVBNAetztGruDCmnYBqwXJwEzDNx5qiEgAgPK9EmPMSkaNwV3",
  "key22": "iMTddpxAWpxYqsgBR5H3WNqxFBh74YWqbwow3cuWNDxVHfwtiN2cyHjnjkhb6bPagdfKPR75PaGhVxv3qHK61AM",
  "key23": "rLjYbARuv2Qd6Y76kvMmmQfBhQkzSX5Moe2xYhLoEqsnQJecD9iY2cKzKqtfTeD5JyhmXxD3yEDfZHFKfKg5VBL",
  "key24": "5QY4BvAdwqY5HvxiFaWXAY6fvCzucVNFSAfjHgXQL7BeucTCkGjYUo11rfDZFQG5aTbuEmzMQyoQB1nGuQqeLzSP",
  "key25": "5s8zRTrY3XdpYYefG8C3c8HFSmJSouv6jogickrkfECBw9fZ4L1inykbHVq7n1LCnGU8UXxxwSdpNHtc4muktrhy",
  "key26": "2k7xbGe4U835j4v1SUGBgzkAXizKLWeDL3bRCZqwVvUGkyXhqxQxc3cJnQ4zLAD21nnwBKqXD4bMaaSyge2kGers",
  "key27": "5rWiqYFuzrYxqrkARH6PYNtGMCXqYZjuthmH8dymjpMXDmjCAWt8Gu4MQd7BsJCJTZNuK1k4V2cou8QFyHMsuEMw",
  "key28": "2PyEiwHzxgGWgQqdkrTBzQSdANHkjgUyWvcGyi4eftJK9RGANy7NHAdofLECX7ifaTLGbE99DUmAdNQdCBhXLwSS",
  "key29": "2R4jo4Ekm4QNDE9FPjkmhofnAtaL3qMmxBjxMWkosT5jd8y7AgTfyYsSszUsHDbK7jbQWdh7zrtsdXPzibMsCYXr",
  "key30": "3VW88vww8jkUaR8ZsRQCyWDasJSZq7PLJW267EuDTu7DFwxKpnfhcmMuXMDerQd4BjTr5zAG6Hsf2ButiTK9LitT",
  "key31": "5Kx2PhQBLfNrqupt4aNpYESE52DvHGSjAKCzyMoJuAxhBqjBEt9ieb11DDdZWJYaGVjKLAVNqX81fSi9tKVzUhh4",
  "key32": "3F49dzzCXPyVrifAGKmVewUqueasZFzMpyNoXDPQhEKCP728DRCHbnjgNx2AyxqC9J5FhsfQGuPkWvtmeyokBASC",
  "key33": "2NHnR7tCduY1VWM53adtS7tEVggMtc3gUR8hxt12YdzzfgGf4t9nLULA1nRqPRBC37MPsvBDPU8tkcoXEfVw1XsP"
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
