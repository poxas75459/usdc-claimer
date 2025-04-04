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
    "2Bxr1xvnZeRQmX2ZuJ8Qc8GEZT9umxBU44QVse5gceKWF4xpRVxBrRgScnxVr94eNzQ27m1ZVGdmBWPZKLLxrWYX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BZcaeL4QvxSa5xYLQkHHFn9D4jMnejCVHDiqGN74Ycg9PgiJhjRMNGYL4JnZncwewdCoozue4fudNtqLVcDHtJ4",
  "key1": "4rDSp8hw98j2rRBy9FH8GxwAsqQ4MAUz9CZkVUTwEdWTPGsSq1fhiTbuDMd1mP7KEtZeo2rXSufGqgRqnTgsAxDC",
  "key2": "2gXEtdVFLTeEaBZTB5qA9RzCiZiP3eKTMDWEQiNv27J9jWGT3fMj83MzEcbaFN2h2Cvfucu31KGyPoWqNaiZ3Fnm",
  "key3": "SJgQQdpTKeK4LEqhHei6YTqFkdAV4Mvw2cSVD4Xb6xFbkuvbmRKZM5xBXE1Y9EtvMnbPtbpX6e49uH7XY1ALozj",
  "key4": "3S2Ha47KbWWiK1tEkBkK36w5mvpnyuLgGXaNVm8FKMZhjYa57PSduGhefn9SE1NWECasuc63wLZkKzR2c5dWmNvV",
  "key5": "5SESHX6iPKYczYWKwZrY9uoozTzUXvi1YJebc3B1zAXkkC8zMM2UatLCVi6zounpF5tGSJoBGY1EDXBDfwR8RT5i",
  "key6": "672jn2bW7B4JLrkV7Q12pka9fHa9bV4YPoeYWMAGqdmsS8sd9paak3YfEvqorbw7XL44AJgyaBMR4Ept9jt7fQAY",
  "key7": "3YDZdbZYtu2cEVcacrf3aC7Rk2nXNP8VuZdp9F3gu6o6mWK6NZDEVYsXk5R1GjQ1rfzEq1D8gMJj3XpKtkYAEeBa",
  "key8": "2AqQW6neWm3HjxfbenC6bzJwpbSF8f2ebFRAtYthV5k2jJXPvkTkKdNwY7tTRBTcqFLQrAvtDFb8JPJFRyBnrjKS",
  "key9": "3vVqwoBKkUB44naeoP2eQoGhvyhsqx9FT3PH5GuoMeWU4EhKJYyidHX32BNc8KcFikCoB14d2J32T4NNS1LSxCgU",
  "key10": "5MUWwjdRvnQTfQeMfNzoU7X9Be1Qyt5XjnNRUme7gdC5V4sDFaECSFVNDYZqdDXmgpHPTY4E3xJN81puMvcyM1MX",
  "key11": "LDHV5MuHwnQ3Dj9diXT43V6qtrmBKUHydkwmvMJKnabmBXEYBGdEjE5ejNCPM2JoQGEjb5mESHJaKrdfULccQXD",
  "key12": "2435UsFF7ThhxPPqaW9UqiFkQz4cmwxafyMpnokNcNRC5tCwL1ZcWrukMcjQdJ5eSATTQesxHqvWTMXm5A1duS8o",
  "key13": "37c9TMkBtW5zM4zL3xiiY4v4MKbPK75iRiVSSEcazfA8DRBXUgGiqY5egVWy3qbhBrXWoHCU9YkySJbfZKtaAWyw",
  "key14": "m5kuqaGpZnZijePqCkvd6GftPN5fNQ8NQ6sqHYYVSKXf3hiezhqWyoYdh9qgrnThRAU5EoqJ1v5bJW5aLgiNtgx",
  "key15": "2W8WN3RD8cdfunkApvmxZn7c2eTuhJXorX3ZaNbbkKFPdcjSoadP8HePf2rj5GEGDNxQWtcZ3Q9r6uTZ1ieF32xL",
  "key16": "3a5BZVfp64Rbcki2QxbZonBv6NvAHWUGd1Xg53qwtXS8ZFXKCNjAJSsehnSrAFAi5tBKqg5ckmiJhKxiWhxDe3LM",
  "key17": "5zBMvAwqxuuvtvUrubQwxg28yDVfNxKCC1VUbowK1eZrUJJXKWiPKNaFQ74WiytdQ3CHT39k28BGJg2qbxFSJamd",
  "key18": "2U9H2D1aiEYHJa8ZLzDq1ZGmM7NsFQxJZ7mrkyiTbjBNvLyvwJ6wxDEvb8VnTPPrXoic1Tq9swHf7dC3oTAz4Hvf",
  "key19": "3CfpwiaLmvBuRU8BAqTkXSFQxjTTYeC1BWYYCzAxtuADMMtfZPhTu2e4MeAPSHTj8ishR5FsdVztqe6udMhbUz9T",
  "key20": "VVbzHJGTT55Q8UHaEpSBK1swJ4z4RQQEGL65qsfnU5A45J8Y8f6bgF6eD9qzNPfdfLNWxd8uAdEGuZwEJgKauWh",
  "key21": "XmpceYmuGUBTv8yTtw9zyRnMrXWo4he5Z9K4gA6k3KGQsCTT9dnysSeUS9TSuadiJtXUT3Mfn6rzjQ3romY8qB4",
  "key22": "3hXCkuuraB2YfYNygvEnhJfGuGZaLcJ1rMomNHv2qtFibqhSDxpGq498C1845q5SxRgKyva2XW13yZ57NBQNHFUk",
  "key23": "54bAssB9REmeno5fPiKQu3cQMjuFRNzJ8TgBFDsDk5CzWCeGUtzyBZwDaHgVW39jxhTyLkwuxrreMbBzbdSLF4ab",
  "key24": "4BhUc2S5Arc8H3pJFFggiSNddXAkUJVN6JNDpnk9R4yPTZpzyuMe8iZKieBhtmRCTS7i1Jivt3Wd5CRkSPbgcr8Z",
  "key25": "5L72Gymqqaq4xR2TNjSorbXP5nAtTXMxdov2uoMjB2i4VWzzfQpxzYY8E6MVChwbBvMPwj2fAA5ynmKPvQDdUUpo",
  "key26": "5tsatoCaHVFLY5EG79yevX79f3wWfepn2YAWLaws8f4bf5sCyccbwYjzBFXXR9TksnbSwZ3asgqkmEVEDEaYbnw5",
  "key27": "3zpE4zxFqxLhk534DsfPcwWDUNdj85ZfzTe5a7Su3gffQ61JihoVorREty1T71KtxVnWBXcCT5kK9EH1mkfrGTi5",
  "key28": "5ZojRsJdJmsGXNVArfMht2mavMxQHzYG8UBvcs1deCXiaDfYDMCFoGvyVZAtsuZF7C1qe7FTiJhNarSQ8wpCuCy8",
  "key29": "3WPddAQX4ATcQ29fx7xteD4SJxffR8n43cB8YnPPfA2aL3J4B7pGxJg3eL8Ei3WzHD5eG3hjDN8pRRVxk5nD9fcV",
  "key30": "4NzJXfQkoH6FKnfuG6epNZTtCpg9bwELWo14WUmwwo87koK3WmqfdPwFJTdATQm4juh1LCyZkNXJKTvy3ci9asAL",
  "key31": "39mSPyZ3dssNQ8PE3H8ChoTU2UoWGtxqie69DTu9sMDnGKvfKFqhSqUoKBDW1p9rPMaGMSsd3SFWNMDPnwEPHC92",
  "key32": "2HfwgLriubBavKwe3ZWk8qwnP5gUENCYSwd9hzx4Rp6dLLoiq6B9v8riFdxsNXkXsn6DuSTTVTGpyf2mnUTnpMuR",
  "key33": "UMTUtb6qKHRZ3fF9pWQou5AaZbgVa1wwbeQXCRhyjdp2pcXKPFxC45XR5YyVabuLZ7Q7T63yGnZqu2LVwYsqTxy",
  "key34": "3f44cfoedM6cho9NaPboMRj67Jb6gYs7ruSkg7Zvo8dB8iyCgf3djRD7vtHqnc5SEeettiWi5LVGcV81rDsBaPp8",
  "key35": "2WCi9Mqho5bnvsU2pP66zUBwn4zzinjtpdveDyLrYX9YvT3n4ZbGJ6PnM8b886DJXck1he5ZFGC4gkEGhtNoeuvy",
  "key36": "323GcjQ8mHn1gKjYxgphkztXBnYSzSBs4W8E6EXip7Yo436oVSxU135sWruVeDW3CUgzVM5WMFZv8b3XT7oEKG9u"
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
