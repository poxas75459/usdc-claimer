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
    "5mceofgCQo6LG4jQyhu1UteqSVgTpaPWAy7Yi2GkDbDnigGhQXnFgAVfAmx1o7bsSWGkZLDehTXFR3Qe8sLjg58v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RPKRJwARQTud2iFvjDH756LgrYQC5dkSLR1jf1n6zvAXov4QKTq7fakHTGZbqcKgMfXyPi3oMvBNKbj7kopLt2w",
  "key1": "58DtSdDy5RTqTTR4zetAu7bx167d6eU9TkAvTp6m5zKupxSnQ3Ns226mjVFo7kezrqiJwXCVWQBkFHRT4diTJe3W",
  "key2": "2aM96wajoic7r1M8kWVR2NFNX17vKz4gTnuvmiyPZfb2suFni85gnbhqgWCPfiCRRN7cfENEfoCBpuTLCffkEpV3",
  "key3": "5obmQD17QoxiMXtqsoUHbzn2d4uwGU1ctvaEQfCtKCSUumPdbJtrkBcxFHsELkW5pkWcqb4JRnc349fjv1jrqTHU",
  "key4": "5Ap6aM2SEckAMFxXvrPsnrk5qoqD2XcegKQkp27dFj9pcvbXsGEXrL2shQ1YSfBGfN8mXiNyxtTaScGfacQpsbE5",
  "key5": "48ZgN21TLjFKpMH3vvTCEkyu9RjL9gvveB3rVvocjcMjZ1vWGHMydV3Wj6nyrHVguYpFak5nEe1MoeNvxMUDZx1A",
  "key6": "AbnceGXqzC5pv3Gk2yP8kMyRj77aEC3Tar49f83L5NmE1yD54C1i7kASZLyLZmYTJaXrtuxW3er6ZUA9NvFyAUZ",
  "key7": "3NuCuBsvjzWqJpVVsWtW7T7b2zz6j88LqFbGo82viXCBRyGSXSXcTQSEWyZJgpXCgT6FmLs6BYXK4JKuyYaFR5ni",
  "key8": "4nqmB31rgUw8STzZenQ3pJBAPx8k13e3hVFiobXjwH7zMhbbpFfYLqvmEmvKvRJh6nkzFz31K6FoL6nWtVCEcJjb",
  "key9": "55fwEHbovFUSkLdAiiqfcSbRTzXAMc7YcJa9bd1VmV881fTEqQWvPe2Bjr1ejMwo57GdGpNw2heuhPXMAsrb8vrd",
  "key10": "2DHjUFFFjuZK4M4bw4Ne4kkmoFJrFubkVtW5EDujyRUKBEpYTBqnrGm3erhBv6RVkbcjZdKoDSsv9LZuQMSJDQwW",
  "key11": "oKkrEZ59AGLyjh5AYMtfdVFjGYXPfUSEFikXTABPZ5B7oxk1nJ6U5RWr9BHouxhyNhMSM8svqKhVwZAK5K9H4yL",
  "key12": "3L4c6z84Upw2Gh6jUeQhD7eNcjju1Fc6yVqXzRwAChYP96G1kLrwn5bSXdUUhfGowGi7M6ncxjiA2aBWqsseu6t2",
  "key13": "2e3oqxdBbpvxqXTDW6iPXXXVW8p5KurrbfsYDdMtq7hTfCdDLGi4oFZjb4o6tEFWbP6raT8M84HwkQ9Lytsb51Co",
  "key14": "2ST1vgdmDgzCVki5oq76XBk99epKcnhd1j5a4Z1L4hYbSBMoQ9PvX2tn6KuMS9Jn8nYZeus74HkVJ6CDQCn2wLqb",
  "key15": "ey8QR2HiqyAZ3kD46on8RVCmkSW7KBpyRG5nLKJpfvcgD2dWhWvBtp3vzorQT3LA8cY7ggzwFPhiwsDd7SNofAt",
  "key16": "4XoarczXqJTp2b66KPZDpdwVF5beNZUumeQ2eh5wrMMqS6gDrmzXaAKNuoH4ptKsgt96mHmiauJL5TDb1gq69o4T",
  "key17": "2v2An8PxNNas4Yr2wEV5NgQfSYXhzk1q1EzVZVvDYFfKj1s3Ti97h2WTsAVchuRs2svvQAWqwuow4Yoddi27jX24",
  "key18": "yZHFhe6Bkd61nSLeVqc2MMHkEZ9rhQVfp2Pc4RtXW4pKLPUe7rMx9ibfwDkjyYV4Rrn5ZxMmQ5bgrSKk9NaG223",
  "key19": "2CDarezr6gCeb9b9PDd46hQU5qUHGZ2tw3JnZsfk64Q48V7ddoK2ojUDp3AxrgXPDcNZv8z5ENxxw6bEGzysRVgL",
  "key20": "49ypqFHnTcTVvkWEGX42hxejPsMDh8SUTxTY7wQTPpoV62YXdP4ZuV7SgY1haNTe7ps2wNufE5zHPk59s9WcyRRQ",
  "key21": "5WAodUTykcmQhkPkBLfaHYfDzSCihq61EDv29uedNdrU4XyRjLTh5o88q8ngxCiTYzQC3u2e1Acw3P8Ax1mnELrC",
  "key22": "vSrkAyUuWaarbsHUE7qKNC5PCh4QSNjwadGFqNFW274eYVGD51aCFKPiGAvwinJ51JmwoT9xE3knfnMmJn2x5oZ",
  "key23": "58xh58GdVSmkDau1ifLkmtAf3sAjdShVsf95FZUni6ZwtRsQkRnieCjg6D4AniozBEAeXZ6cZJbbbWjv2Asp44Qu",
  "key24": "3QpvTcRJvjJ9yjP2adi9X8AEXq9JD1fL2DqXfMqXgFx8C4aSUy9HVDpihDR4a5tuyda9619mCQJswAuCpvcs7o9x",
  "key25": "4JQRWQBQyX67CeJ5UQe412YpQQQAhT4wd1yfe829qJkvRY5qdph7JMpWFbFe8DmK1qTkKiZU1tbyPiL3jMtRfeNA",
  "key26": "2JDcNL9StQ7qH7QRanmAhun4FksuV1U6VCFLMny93Pgjzxy2ro8HGxRKGuqVe1trFXet1pTFxRPGCKN5wLRPEyHx",
  "key27": "3dxgbG5RpVScyEL9dn8pQZgGv1v6gxnMGjYWD9ju355e7vZ1vfbLGdHk8LkcwpXVhVo8NriMU6aiyE8cPWQWQ1PZ",
  "key28": "5oaR3VwsD9CKYMab3ob8aJknhvKhjX7rUxW1D9u8yq2GRgiDryyaYRUieWMHVRsmeBHVgAHLN4kTYxdHsGj85zTK",
  "key29": "5zE4EmK6asfSM1CRAEs7R7SF1jzZijsFspxK8G7NJrtXxNiq22tDGZaNRsAvbwjMs2ffkg2mVZjKV8rPK5FVJnuA",
  "key30": "2YC1tVWPdx2rsNWo7jcFXtQZ95As2RCwKtkYPUJ9yQWw4G53hRKy5qPFsRCA6JWXYX1UEkf7oYxvZkbcmkPyUPj2",
  "key31": "3eZcfYJPit9ezSrd7v3bywTHv8TtJ27F6GaGJZonCrYHzd6PcJ2JFzkHMp9Rfb6QwMJJHQ8LkKJVSnGyHmxUDVGX",
  "key32": "5dJUQVM3Ryeo2hQeN7b86CRsp9iZCHPd8QJuWGV77Rk6KLhwNYp2NNP2UZrvS9CcrSWwrZwCdTkuhRSDffNcMV2A",
  "key33": "2icY7B1jADJxX7HT3Acp5aKDbpScq5ACFeRoJABNfD8mMNKKugkokEwveWR5S3GovCAvHBfhotka6GGTeDTc3b9o",
  "key34": "5wvB8r7LZwAV3Q1xtMpjqgvrLM4JAf4S8vDa9f8H8sHkxpHC2jDf1qxVrRgHnhMTxc2xidJJDQgXeigGvg6jwaQe",
  "key35": "41Sts4qyjPdkLnTXhT5TC1MuRa7BUXNUvmrsSPrScRhR6LvBi2pFQbdxYmrWsW3FrmZCrLvs5zeQD7R2VyZCoHbb",
  "key36": "UBgHfVCpghGc63vhd2eA5zxgtfAqHJBjTfFKFqMRydkm2hRVffnYwLSmEgVU9e8EpgE2T6eazoWvzhM13cqhbsz",
  "key37": "QoTVYGQnP5nUY32FktA7WHLHWjibJQGUcboYPY9L2jibohPTwkPa8fuonMDgByvsYSRcv8kYiVwzSAymi3r6RGC",
  "key38": "55GUd6bzqhR7QiRTdQiGfUt5gvAJ2LU49y4UnWPLGByYgnoA4Y9dkazQ1GmEVvtWsYB5pTirPnzBn3qW55Fa2H8q"
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
