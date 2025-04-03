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
    "5M6w8LwKzwRF5nyQoATLyQrrvKraTCT7NLeFGjfsZWubmXYUhGhr1mLZN29FDj4obt7Nxjf1gN6GbYa2pZaaUsLa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jA4wqDjrMSSLdias22EtyR6eEqHqyjt4WHKQBbYgp14fQztEqvTm5Y6m2GRDYJsfS6PiUrgE6yvLb3PH454t2Ev",
  "key1": "2beBcE3hhFqbhWQcV3s9RFQs4AESmqaGGvJq9ipyxrvUk7RyFRyyu3But2bGbgQCQETCNhKWJBZ1FLDKJDDNRcSx",
  "key2": "3S9T4g2BRf7rg3eNTkFkrxZcPxJppDTi5UTzoJprGSrdntDgeGup3ATXmktdgEmv6G9rcneNFDbVTqxdX7KvqLo5",
  "key3": "3mimLudw9koMDX4PqXu4cANDnaHXTiHjoxByos2ZZyQHEupemcM86vumhZxjAnEFowhewtJGVwpKHMFsEZW9vEGb",
  "key4": "2Wu9RhFz8whwAVPE6tMphzC2KaRd14VcHKgHWv6m9xwy1S1anbKXsTBcErzMPTPUfWhNCKfnJFs2JiurYVTgFcdD",
  "key5": "4HV2hdeUZZAopcQ1HrY2J64SpkmFCR6amSF6S9WQZpcRFMLVmTiC9iiDfiYNH8Mt2gzeYyvZdKv8aS2usHwcYmCi",
  "key6": "22XQNjmoR6Mkpb1Y11tdrfQhTt7x6uP8jyzNvhjvEJvSJgrDtUBcPxiMaMfKmiv4xoxbFTUoWDtjTu6Lbww9XEjo",
  "key7": "5tkGDhmayda4svctuC1WJuXnLGiZKXNJMqntWQJZf4uZR2K57vuBu2KE2QhD7KBWF8JgF533xVftt8rPQwn3Nh8Z",
  "key8": "34Z8EMPJd5fhk4oZQu3v4z59gNvBEaSruEbx3dc6ivQKhWhsPwNGag9kF1HJ82zh7194MmPdRmzZjsP4Fbn9Cpge",
  "key9": "2TE4Upo3PGirNAHUygPNPCA1PSiXK2rPsgqKJBDwy5YG7vY1ty8LXCjynC2fCQ5GCVGEEmcNwrDqHZiR5GnQGbe1",
  "key10": "5UdUNRKUJ5aG1odcR3tgzsztMA8Muzeb8tjwM3PQxnbv2hFkcZiCHuyUM8Chpevb2WLgJwPBTU27oYvaHxdzaaXn",
  "key11": "62kSEdZQwiBmmF78xfmAiJrbVNjFBwKenhEQu4KioQkUgqLAsFiVbJpn4Y5GnB8wQrrZmNGBrdxRv4F3BBBgP2CY",
  "key12": "mKuzXD8uj13fep7CBkLsujD5udrwtRe2qXwWxgP8PYyzDLjSympD52NuyKiEgkmfCB9LqrYmA7eVN8L6dqQy5FH",
  "key13": "2vu77WHBCp6dciAhYMBx1NDWtsJKyhb4wXfB8FcemgvxsNZgnkn4dJxUe3Z6SQjvFwFUUdUNJPSDQPDKtzXVA77Y",
  "key14": "2FVxXHdeSL6AJe54ziK5zMmMso3dK5X7haks2ePkJQfmegA5PktjhVUaRpMWLc69tC2xJ268meztBJsdygEqCC6Y",
  "key15": "5ZDARgjGz7D8fQX6McM8PvsoAmcFq6sm7wstfjqpvtYnnWCvniW516SdvYnL4uXJpzY9eKmedoF8ajvMwYfyJN2s",
  "key16": "3QDdVyNitGkabo57zPGZk5VGQtnXdaSQ2QJQc6QgC91L5mz5Nk88e8Fv1dKeV1oNHCu5EYkqA18EgcnhLFDyaknX",
  "key17": "4ctxrsEvSV2KXNVZzjHUzAvjPXucu6NWewdbfNT3irzT8FQf3W3YtkBzRowhCs6o64kM8hWqZaScZVmBr9YkKk5K",
  "key18": "4ukyD4RRu5MMbUbcA3S4F491FrVG2FR69ro7rS2BnpwqeZ8FAKt7wnCQo1H89dZ91umD4dN3soBy32UACQhDXgSq",
  "key19": "7Nebtedyk2ryFdvL3bfkbYrg5VBWj493npwxZyWHQGNUkhwbjFLikQh97uVuXTK31a47h4X8J1WsdPuqyNcjZne",
  "key20": "4u9w4k98LibDsqu5XKA9b1vNrCK1N4MwyExipbMc4RTiPq9Mtcs2XBJL9TmNo7grXDQoR6RXPdFm5Yu7syaJ4FGU",
  "key21": "5nvFi87sZ7H5KH2Gk2F6aqrjr4hzQRdA3XUxNTBx7PesxwiJj7eWRTRLWdqqn1Ek1dkmy2j6BZk2nFcLUrfssUfF",
  "key22": "XWqubgMBxotk3TVpTEvfwbpxtyWbdxwVzTqAuoi6cjMedQ7ACV7ULAeZqW1AnhVg3etPnq5naVwd8dVZPneMmt7",
  "key23": "4HvD2rF8eLoNnYgraZtH4uXghFcyrR8daf1HNgEaKn1tURsbC5fLS4BSvyYbFibtiE81czh6qxVeaV2P5pf9Y8c8",
  "key24": "3EeaE1vDv3Uauk1gxdK1gt8hiKu2CEumoh6ST3r9uMvVKmwBr5FdkUPb9hGZJRarzpmE4K6RUJduWmbA8hX64DGR",
  "key25": "44vQ9knBy22pwU5iEKMmJa5P4L1xZ3YEaudP1SWtNvwhd9bphZyNnWs3oFBcMh1osLCLQzG8joVZBzUJ9ZUipKXH",
  "key26": "28bxFdEsmEfQDRjWUEPzECpuNGYEk7LPwmzSGg822XhCLSMqjXNXF34udH7ydNnnRjfnnEk2ubSBLFKLqsgBpd88",
  "key27": "3jFc68ED1D4ovRrR6VCqyavNHzcW53CxKekpAuQLuNWGwPm55zyfzGgMwYJNZ68oa75fuiDeURJfnZxPaE9QV9B7",
  "key28": "4KtniXdYD9d4nAhFwZczFPV5Vg3qzHvLBYZ1nTCk35jXpurRcd5wxXLt8dCTpdF6wqZeNvBHKPQq9QvyGmfsXzwV",
  "key29": "HipfFGrCM5zQwkXxY1pPvxgwKCxcB3i1RnxsKymjaCJuDLDWAvSsFcSYkHHHTEvGPcH8z2HCPEktFke5JMK7EHG",
  "key30": "4uhRVNztRfNkMsLMiC3tHceX2vaeoUTomL9WNnFdcAgnnte4cjERZuWToPam3U6YK6FqVCfRmj8yggTK6W6gG6Z3",
  "key31": "4GsU4NgfPKVUbct3rKFocC1ksszXjVY6crmtyRJCWffYKXvQfk8pMCtFqg2i9Qat9b4tsAcNQuboKg76gMgzjM7x",
  "key32": "55YmBKFRWUvG68BM8hJ2Xcfd2qfgiQuFKLazCjQCE3ytdW6vh1CVH21DR8f8n3eRDW6PnSmt7Ak2Pw178unXbpPA",
  "key33": "3B8NmwfnVPCGuBW2hwu2HaP7aPwUYBDHodykBTBvhRCJTjCsHzrNkgMmad7CZ3GEorFccFX8hgJzBcxNHXh58VQo",
  "key34": "MxWArRejHaJeC3e3fJUJyS3UNUQCnx19oQEELcHB7gCYmee92qMHqjMn8DujQNp743K3q6E9o3bPDvzznFHwHLx",
  "key35": "2dN7DaT8nhp2GicM7J1RPeunnCjbMV3X7obKHdRHYGovwULPtQLLoLCWjBYnam5uQXzWHoZZgqcwW1E36eyWdvMw",
  "key36": "ZFqLNXLPW1HeR8r4PD5sdB676oiLtQP7ari3m8Rhxb1oLQMo9Rp7ZgXCfyxGxgnVkfXTVnHnZBgHitWEfHpjnGN",
  "key37": "25brC3QtbSPNRYg3PsbE9LBKrm24FVAjU4d4qAt5TQtpXeFa5m9RczA5pb5X4sJdiRrtHbqhT27JaQyH7F4Vnbxs",
  "key38": "4vZAorgreJQWw5s5qJzZzeVVKAtUVPgH3hqukAaz88Jcq9ow4U9StH22FfUzCcP3Kp1U1mw8Wij4st94SpQHFsDP",
  "key39": "3iRCwETyo8kbTzjyDfbBKKfYjfJNrtdgFB9zxChZmG9ghkcynws86KAY8bMCHuszHyaHNfzAmBf8XzyWFSeyZdSY",
  "key40": "5sK5PTqTHUY3fUdWKmaaQo3qtXEpLTgVTUrE93Pj3yHPnjgR9n71MM4vhjgr9aKuKTTV7yCSnMrVkXEfXDVzd9vn",
  "key41": "5DD6yVNXmzYhbZDmCtmzp7FuQPheV7JUvEL9U2qwahEyBdbwuBX6kP4h4TP6nphZs11km9UsuEfZ7xhXNrf2JPmx",
  "key42": "5s18Ktb6x27D81XVSKRLS7BS95KR422bTWVopuEwxCXL9pvYAnhcuuELtgFZHKM1jebjGWaRrtrTY6tJpzryRHyB"
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
