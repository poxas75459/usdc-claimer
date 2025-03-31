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
    "5GBRkhjjLhZBYwxVAf5nArojHNUHNWZdFioKgo9cyo8YTyvkZMVqyDW5DZZe4ez1rQdXimbWzhmvqTbnDDZ4T7hG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HZYHC6ifFkLVaev2vKccH7ccANfKBJtcjkLYwDQXbnJbQDQEL3d9mEj9wdxLuhZkLGLa4ZcmUm3DKVpPfdrKBJu",
  "key1": "4bmhSrHM2FjUdhNJ6MGCt4CgF7a6WdMorv8CVvAcwDP5xUfpNbLjnHKnCYziuVKtrawWSgBFpvEkhhWUdA9F1NQD",
  "key2": "m4ejcjdLzfMJQ6TgJQFwTrNinvnaVSE7LRLaE79F9CNDA781XmejELy51w7ws7sVExj19MHuKktAdVteMFw7ycL",
  "key3": "5Gj8M2xUKNG4bwxnTWPM1APRJXYsxvnr6jmPsvD56EyfbeZmNSJaoLuNQpzSLBeDqGAkvyF3XoZqNvQo42uGejEq",
  "key4": "5CX8qxN5NteqZkmVAXs2WrcLCmUDTtJMYS8dZqSa7mhBrrqSGWe9vd82tPmwuQeazGwoTFt53MsDr5A4SrqGDGMd",
  "key5": "48J2ScRrbNiJmZiKVgeTDCD6bGpnr7vnv2Z5saeDpdxjo31oABLpwRWvovzMrLRf2M7BhdGGNcTKCxCsHoeLFmNR",
  "key6": "5jSB6KaNENLZXeEVZ9yQSmceE3x5MSN7B7t2WnaERotxrcorwfY4fiMmfzJvtFWbGahSZUk6B6jKdF3reYfZichS",
  "key7": "5Lon7bSRgiNPZCYqBtQc86McJiqcuQMgdWSwZeAH7jQHxYj8TXn4s1eYqTBEHBY85iiAu7NLyi95xzQo242RCLxf",
  "key8": "59XkY5tbdhstW9p3CfyAT5FzYhStVkeKUVXAGGF1jVfceHjCts721evhQecfLm5pcQ4FkwV2wNAEgTwc31h5vixV",
  "key9": "5k8fvWnjbsrgXPRQfoBzEKqdk3FiwfYP9XBwDap4pAbLNAXNDFtMo5keLnhcLV8z9PgQaS5QozCepCqaZoPAGvTb",
  "key10": "3w8HnrW62mXW4hSpKQD5Jdqwr9xAxa8DfZy7VdF2qjh4kV63fJarm9Ltff3v77BFW5mHxykrLMQt2qC2Kj7o7S4K",
  "key11": "419zCT8XiBBM43sn1LiRZKYTsj4azvmHMrte9kGppXgj45zzquHhUrzGWx9ameeRQQUkWzBDuagqtiU1MZDnZG6t",
  "key12": "2jrnCaHdypdWv9hS6h8GeAUUoxBYu9uNSsT7v6RD2QANAeHXJzNWHqLEP2GcZoTnkMt2t9CYfSpu8s4wzGTEucri",
  "key13": "512953Cf6gjbhsRJDHmrR3Z3n4sHwJaBfS2d5tcauRgCFZYpey8LKWos8iaGuQqb5c7fmEqYN3huUM3MUAetoGU4",
  "key14": "EU4L4evWJ9TiUVFQa9E45JQBeoB16kk85z4B5ZyC4shPD4n1xkLKiuCvmmX3S64knrcBFpxWYPWyh3246rpbD72",
  "key15": "TomiVDZY7T1VUQhUxnXFXxJvdX1UMotkrZGGdp1TdKkvnXT5ztE8nf8baqLaCE9dsy9eoeKq4zeAmnw1cr2yYhL",
  "key16": "25NDCwZt3zP7qVRsvEv5yPNaex15z6rQjPBZDA2ikeZDCErH317PchkbxaX5Ug3WUHQtErEG3xC7ZYU88P8uayjv",
  "key17": "PjUD7dQtUv1amH1BAzZ7ZDEzSKMcvaAPpTaorobohEMjutitpAdAuFocUVYK2qZnLcsVBr58yim32Hb9XNY2ABv",
  "key18": "2naug3grtpQSNCWVFe4m7mDE4CvJD8YcLAyVFxUsoGPFiqTZSFWXe3gVepHb7mxsw8CqwVVUcEcpXy4iBG5mx144",
  "key19": "5eSsvmUgsCxPnQwQyr2APe7hXaE4QNwu4iVw7aMxjj7uSyUJfdygpoUfXodYgNyVkWKtrX5xrCBjJbgEHjLyXzJz",
  "key20": "X5Df8ohjYM7HZYRLcTGkDB7TRbzabeA2bjFM7XV4PmRiQFm3Pk2CTXi7nnHyvq9tyw38Fqfhq8KQnqiT5FeK8AL",
  "key21": "bhE6oJfZhKxEo4p2fYh3nNoLz6L6CcM58sgRHTnu5xhyGU4dbj4MxJF9tzwGWh62sSshvw3H37RqH81zyeKPQHG",
  "key22": "egp7GWLb3MtKHxBuWuVw8nYCAfGisSYAXC5ymaokebGJ3dniqUXvLMmNLLEag1RVEiWUm93CnjWkn9rMZqPhnvG",
  "key23": "2fYPAoWuqfxWjxnc4GyP8FWHpEKKk8qPmgDA1Ci8Ney7UtRSrrJw1uXxKiRMiH2iDqsWisvcgiwCTmvinSbJRvSc",
  "key24": "HkNftj8w3YwptHFBaFbGWRgn4TbQY1fp2V63ptGmQVJ5Q1ycG1zWEeswQbzBAgvbshYqgDgNgVcmUZtXLqRDHhk",
  "key25": "4jo4neVUkzNrU2hYwL1GFSbjrADZUav2gdk2brEeGmB3J6RLBmP8QF9Jxr5LKgHLsfBjaRUcDVzogopp8ZspKg4D",
  "key26": "5113HiUepJhSp35VsfjcLom6t1kn9LMzHBJqXpns85d1nsXY9LoerJBCPe6hXKefGKUG1JXXtZGVXBS5JmRmE1up",
  "key27": "5yungTSNNpUveVbHpS7xXNRdzMLu9kJ7fSzYAGRmdkVsuofH7LJrrd4Wui6vgiUra7svXJaufHBxphtv24hqLCb2",
  "key28": "3wPDQyfty7FHPKeGDuMhkavd5d79VkB25NxeXAZQXz87gia6fLVrh1So3E5ct5bpiTG2AFUSNiqkqQ1LfJAzTJ2a",
  "key29": "3fyeQUVu8HWNj8yRSG6xVm6dqSLeokBdGhtWL7Miyb2k8Z5Bd33bMiunhfymacWS2bnZTJKxqvvg7imjKMDaET2f",
  "key30": "23J9EWtUqyDN8ux9XkLhFsZaMom6HF8LDN6JRVM6xK6PdYUcXFjzTzRHtnfcSdYAYL7HgnVHyH6aMNL4Mmk3t1mc",
  "key31": "4c3buDfiNuT72JWF6nRdB53aHm7rgQNQJiprkLVpeh9TZKpaueutA2BMwHhL2XwZK9KTHd3WdeehGwDfahCVkF1y",
  "key32": "5cP2b7d3STNRgqH3wzp26s7pzwmycxKvHZbSxvPnX3T1R9K2J6VtGd7AaVuN6TxB692NvnGVWcFah4Bsjuntgz74",
  "key33": "2pqNhKmGGcdaDQ5iw2QSaEBVXpaU82LRQCpmXMRfYm1RccALNmYiN7iCGewETk4iMWs9svki9DuHUfCqm7XkuTQB",
  "key34": "3Dvr2Co8YF2nnpwVYu84pY7t1KmCU2H4j747TVDFmqjMeXxqmz2iY9Bars3ssqeeHPHQ1CZxkPwP1tP9m51ZS4st",
  "key35": "3GQFx1jA91JaGNqyCSxuNfGSiZHhTuhDKbZh8kapvFTE6xxTgnw3a98ygaoyEUFjUZqFk1uXP3dLKpSAUxjbxTDr",
  "key36": "4GYU3j1LQCk7b7M92ADhD1YzGPYoA9HTnsLVps9sKwGXbkPBiaX2DZdo3NQWHAsxwtzFoymtbjZySvoyjz3zp2LL",
  "key37": "36uxsMLotMP2hmsYFn9PsXhkpX8pPK7dKWNBqJrmKTzQfPdjqFQQW4JNkUiiFztzs8X8ReSbuLsVHQ1WDrC9RG3u",
  "key38": "4ZEwkTCi47gShwD8EuHphcgcf7zhiyNbHzEhG1iP6CEMM9Phd5Sx1mPKZFaivcyYcfTWhTA1cL4F9KmEAfBarAHR",
  "key39": "3pvjqDT8MeDWY3p7rrYLcdQe5zD5pTs14RtMELPuNvsJsr1b6CDBgtvm5nqaXHxdXyxrbGpoRbXBSVBoGK4A3TqD",
  "key40": "27AzARKtJtEAzyzd47y1eAVVp7NrhuqZkFnPdy1fKtwfT43MGyqPN3VjDdKbR1Xu2wQsPbVCUwz2FwNgP9KPvG3q",
  "key41": "4vtZkRxhLZibiKAoaJ7hRTfF4mM3MKaJv4ehBs5tWfoBVG2mdUzNPwyEgesKc2wdJxYP2uFRMNHubMXqSytavYkP"
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
