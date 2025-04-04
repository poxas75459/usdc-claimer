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
    "5h1N1UW2G8weADKyS3jrUo81z1YkcVKmcZAjoqWL8upg4rzHbhTM7uSphdYrC2McBk97ZhzKxvq5CQA1fBb19ofi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PVtviHQ4bEJugPu2LDLacJ8mEThd3wdd2dbbaBpAAuk9s3N4rubuZqzLV87JiZ9fHXZZuv4dscoGVXXNXDQDADK",
  "key1": "3fEvH2tSv68JMGCxXWPt5LEG2cAX5N39kt5oAqdKhE5BpTdRXxsqth5naWzomV3iQk4yHg1hhkb5GFCM5JSfLvkK",
  "key2": "3ZZZjdbJHmH77CVrNjGpCiRyDR1P48QJL2qbhZnPhhGiFun6V5zQMCuTWBUFa4pfD87RZB2c6fKB7nwyLDXxtJUn",
  "key3": "3XQVWF6n4qKbniQbDXbUDksDy2tdmzjHbc9aGRhHN5fn9XXSoGSirDGSdTkSAvkT89qyd6FD6BM2HkB2SLWua5pM",
  "key4": "28VMvYDULFFhgqM2RUd7W9T256HW1eP2rNPRdSXh57rBK5cKTDZfT3xEpNKmNXjBPyvPZj2qW8KnpR2Uqjf8ub2e",
  "key5": "JwCToWSogVBViDtBi4EP369C8Ss3Fq1F2jPNiLZdUZySWJRgZAPDUPsX4yUgFXACgg3RLUq6uneYhKbKcrZksjK",
  "key6": "5vMwx5ZxrbGinX4XUEzP14ZkANdmbMpDhZAEyKKaQFTtVuRo9mDZbjjpAXN7qFWyaGbYszGVTWUD4YrPaxabph8u",
  "key7": "24TW3rwjQrJcJTBiqwVvDBpNVBxdqng9fZS8xAq6gLG1gQE4SNC92cg3zBWPu9MD47kyQ2FnPD4a4pYGp5MLEgH6",
  "key8": "2zjLF61R7cHQs1LbDHNhctdCMrcVAbQsG9dU1qobUow6tg5kq6wvciZtXv7J5GNR1p7aNxJjMC6qCWS6yrAHNBBE",
  "key9": "2YgrrUPRYTLWGQEQWuU1DV6UuEvjTmhupEvWwxpxhyLYNHPJtFg7seoDHRyn7RemBPBb1hERZvoGM6cfUTqyvfZ",
  "key10": "39MUCj1Jpz8JMEqse96RD9fNyvbvxkzjLERwiRJaaP4vgkvvU3G4KLGahhjGJvxpmarvg5kT9f4nN4nYeNxuWzTc",
  "key11": "2rDwHXVM9h4Kbua1fEhPvNxxsh5JWayw15UtV8EBeAjoMDqso3wvzdVuC6wPtR9JK2Rvmf5fvLdxTwyVBJQxPXnL",
  "key12": "miapwVid4hqQivRFPWQtYHz8n4hR4PuaqXCSnTJRXzajpN6WdGDPhEq6hXRqm7yyxWvvxe442DTVjDjEgJWZH3c",
  "key13": "9XPpGsCzgmzkkn5a34joqySHaQbonjKdvQjad7BEGbD7pqz96STFxveTVnuCDCf9KFRLzvfKepMX2FifvXo3K7x",
  "key14": "KZWhV5SjddZz4nTrdyjJ8H5Vf9repyucwr7jutD3LJ4B7BbVrV4F5c95PHGWEP6hvzz8beFHAQHguRH6myMGLBX",
  "key15": "5tUgmhRkSRAdea47b2BDQLhTiQreCUYK4LKkMAxGw2wS9gVzdAxT9PYH6ojacMxpiSmVEs38Er5VLFV1Dv8ffgUE",
  "key16": "gpxPGTPZ21fMW8QzF6PwabupMnbjE3TUeKpaqfoJcUC9jq4C1nF66bFJfw8s5hiB4CGM6K58M6vnBojY253M6v5",
  "key17": "52AShcJMhDXgCW3zqzKCFTtZ1otgjvF7uaX2aas2n9kUx2iH32JMbVKLFCcAMo6R8Vj5h88F8gZtkMmkM89TaMUV",
  "key18": "5o3RcPwQ22SpWSRpBCVzU2sBC6PKsobpeh4sXULqpNAk9hT6MXZSN8i1r1Ps6X9Fhir6y8gpg2n5J8hUWpyhwP1e",
  "key19": "5sNiNkPnRTDsJkYKjTjDaZAFefmBhjkNNam98KBNBeL8gqNtPq9PQrXaSn6aNoiGxT9zmn1MmQZFpwy5fstKynvs",
  "key20": "yVdC6fRpUkSQqrveC2ywnmN5ioM4uR6kNBp8YetdNsYc7dTvKDgx2CKGuSJEgAzqrKsaG6fnJNecvohJedue7rw",
  "key21": "5K5o5cKACuSDNKhuELwTXvix2wxpwu13dYqWwdixDoQBtHJ1fna7NUBoq9yFFYvr3vwYWo1tSD6WKxuQnhhz5NVj",
  "key22": "PTSgVdJbPXdh9FoGCd1eBWGnyCAUUtR9zYsPmkNsuAZ1y1gK4zugkoCU8oPMJMBfCYmqvF451PrQiheEg5tXdQ8",
  "key23": "51gMATN2ErqtrjRac2eRYJe8eMvBpfJvfiFqW5yAEQ6BZBGTjK5abtoEj4D542pu1oyRkh6AuNpPrfovFw19H2Ah",
  "key24": "5L9GgwxzyE3uzGPvKWJGGJabKsW3VzFF6NvZLui6dpPjat1gqNz15acrdvhMV6fR3vWpXrrGhMcG2m4DqEgW9cfb",
  "key25": "jHxrYyy7Jx6wDpLTYqSiHNMiw6C4Ab1WfJjthtW49x9V1evYhpvMbyo8XgZF3gzscSUbtgYd9psN5tijHSfwYxR",
  "key26": "3FCNhBuycRMoxzyDsJ3fkAFJs2ykAzwAv3BS1GxpCUCLs6nKe6tAm3Q1GvsmxDdXovRLNjJsXJrfL8M2FHtq9bKX",
  "key27": "AKqf3mHY2ZYVabFApurEtyoJSqxYccegvgrBNvjjG9G6a9XTTvVtPYdMku2CmAq312ynR8wiWgvTJW7NPJuJb1Y",
  "key28": "5xJ89MYwMupfXXCmrgPYw4pFKLhQjaw6xFCV1meXyVi1iueT6FawbgCRQZKPPWLZuzDiJEvt9kWoqW3JxUSnCzCB",
  "key29": "2J3MaKemToHK9PdFAuxrza6DRtvXmBR2qTUEeVyC8v76JjPhSEbJvt1DFZ9jwzSvLBdZte5koabeT9MJUWGLnCGV",
  "key30": "67LRN2kuihTaWjwJkndbvsMmcAtMkBrcMbBUApHQjXgVVQChuajf8EvHKjdsnmuL3Q12ivngtc6j2ADNDYR33Eh8",
  "key31": "5EEgWcG3ypRpvjkqpCPbi5ZMHbGDEasHwh3RdDHHZcq4WL5KnQp6UBqPn4pURtjAKWFGQDRosqkDEDZ98RmPAeSf",
  "key32": "HtpTNQRDEdCc7Z9Jxj1VH42BfPawpjBKUZyY6DXboBnp3nBktRTcBA8Wvo5RjbkTmheK22ZZ1yKRQ438qSQrPHz",
  "key33": "2KHDYWe6q6EnMVvHUUQ7WegxfnzMnhtdrAP1Mvau1NSZHFFpLcagnZmPsuzQhf7bP5orRwX2fKVH2spYTSqyVMZS",
  "key34": "4duFhTVS5X4Bq3aLCLCSt3PzuvHha73KXDZ9ARWWgBa13JkPgpwF57htjsYC7jZKJKzaHcP6o8X76JKHX45c8Vwk",
  "key35": "3mC21qnVkLXUVJcdurXr7Xg4HxNPP7sQqaDKfvc8JU9RkpKQXMLfch8yH7z9A4LGE9L4XebCDczcfszmUEWqcGUE",
  "key36": "4PZZv7D3Zee1bQTnZ2rbGhvKQqKBzj5jESShyYMyqNFMYnvHTGkacRFQtYKSmxKYbMUebtSesEV6xqbedGS9RR2k",
  "key37": "2EA4Bb2gmdp5PsrTXGGzoiYmixuQdDCaAr7ofo7UBaB666UpeenKMex5fYW49zmZEva9X5oX7DKMJoN1c7oPwppV",
  "key38": "4xhbLbfCNMWrFwGZW6LqjjPsDdD5YGDzKcQXcP3imChNg6geoEfmMr9mdUsi5yKpHAjXDYkjcNFb1Dssv1RLoeb8",
  "key39": "3Kq7wEK7uwQK3c3A5mCP2sjSBCczF6VKVTRRjvtYGUiBGwDwEG12D8mfAcUE2LArJF3uKNKDEaG7mBjMyC4M5qMH",
  "key40": "28jQo8RK7QVkmGwyBWyFWNuuF3JjETzjgVXK9rDVci65SpeDBZ8Ws94kmNCA9bsAJxn8BARtw4cEAxvKPCEAMvZL"
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
