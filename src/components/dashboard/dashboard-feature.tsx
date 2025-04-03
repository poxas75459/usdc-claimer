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
    "DapzaMyWDZGU8UqzbKhb4cJCvLaSXChEbcA7WRzTyJwRkNkjkFPBLbQaxFqQSxKhmGdvmG15NLVsDVGSfbzu5qy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WeQ7ovsBLKiZqEhFKr14wA5GAyfKjzc6u7cLkr9ZDDecUG1CmJ1ZFG2g2ahNhKeUPAJJ92DSgQw8TUhsQARsC2j",
  "key1": "21BJuVuZKZ3iD7qHezjhtv3n5QfLmNyHh5d6Y4dMQU3au3jV199HK7tBRCWdhmc3TC7CRWc8ujETDp2e6e2zU5XM",
  "key2": "5zv7rSipmoV67PysEvuQ8Nckmiqco6rnnpTMoE76NUiRajrgjnxcn5b5tZwtyDJno4ECSqLYjjWv6rrBvqwxNWRX",
  "key3": "kXNiVxS2kdVa5WiBgaFAWeEUGbogihY9vnZ55UhqmeFG43jsQvL4eLXT5st63SJksW7WLKdWckDDC2tDQ8PQ9ps",
  "key4": "4hzXQ4L8QuEwNQM9ZoNpLP42vF4xZ36yRskJJUGnVx6HPQSTQ5J6mesPy4kifDujV3uetEp8qBVq3pBoTFMp95x6",
  "key5": "3nxCXo9r4N3RamWhwihzR48LGbDNE1mEcFr68BZsQset3vMdNUiqb9EV2Lmg9KvRUVitV4uG5Jy3HHW2acKFW7FD",
  "key6": "5vuM1u9cpT9zXykQ4kWYiPAPCAikUNRYZfrNRAdNotcM6RHWvnZ2AMpjxKV2P71wqmwknYF8WQz35iq2bBHwZEVV",
  "key7": "4GuCMbsEqP7QdaKD6AVavjEtEwNTj9wd8pQQd9mdPcqhKBZxz24z4AEZRxHJZovhN6fozBHf7VHKKPivr67Khj1K",
  "key8": "2xNBKC7bzWrxYBb2PpJNSFRj9FZsSskQSgxPCt6crNy2Gkqh348KiYxwzvWoU6tMdRTUfRh3Qakvtd34fpWaN6nd",
  "key9": "3Tb3q4QSS1mLb5bQPXUGvKbti4FLGKcHvXiqg1q2DGUsJxtYkXd91PuPx5p6tHm5H6jaeZd2qNdnZ5M5nGCnYDVe",
  "key10": "NvXWpiVmt6Sf8UWfTFvrCAVNfoyG97ffGcAk5gsTuU5c8QjBmbCRDNruJR7Hz39gML8N7iKUU7RoXsMmfVHSSR5",
  "key11": "5Ho93oXczTGtPF4G73wMfLJqBwAuXDM8zc6BfzBEvBDDHsWFyo5NnEe5VWhxRir89LYokdAgyJXBYPVYhYcv3A9V",
  "key12": "4xEkeVtqiEAcnEuuZm2TR5ZknWnuACk856dWbKNXb8ggbKXLrcffoXp6WXddDEVjg5HsAMtieu6GXYR2yB8ZU1yr",
  "key13": "2KSTPfTWTdcs8TceqBtiFuXeKMCRHxTS1Zjwb2q2Fvf9eirr32f7CVhk7HD21AfAvd6u6tz9sPjd6umMYcuNXEob",
  "key14": "4RTqWRp8CDzatLMWCTxKncxsQBwsipf3W9EtFYJ2eUtwrjgHg4f2kN6M7TLnhDJp5xxWKwyDRtUzZEi5MZmpGv3s",
  "key15": "22VLS3opB8Ef2L9H4uFXUyDekedAdKpkpz8kuSJdLXkxm9AXpV1ay2L2cdRMgbu3egTUZWQBuMApA11GZPtRwg8S",
  "key16": "cEMRaBtwZBtDXLEkisTMWdn52jhhyWmFcWY5uYiVFuSc76nhvvKxzDt2WwZiPcLwZNjKmmqBoT9irirJnUiK5G6",
  "key17": "54VWjveEUxrdiNjwQt8xKzszwKNcQsdRXkUQyFPGdBKRL2bHUjLwhdvr8nbAFHg9TsqF9guACEiWurx4aKVrazQd",
  "key18": "5KLWA9GpPwvL927VdRu9YwMrzaom2Cp7158FdG8vVabRy9Wgeq1bH3sSqWiprSd6GbqJUkkGsURL7ZPPRnX7w2mW",
  "key19": "3J149cDbTHuDkJBsKAKowsMhNvg2Rb4NhjgiY7jD8UvwG3F3GmnH6Tqf9RWQhWT2FUwj7a5Qkp4fhsgZuZkMGqSU",
  "key20": "51tpQFGxXdJZetBTJD8KD4ghQXri4vQ3LpUG1QvLrWmDmHiE6TqADTxUfZ4ADQnhbyMafE2y47GCzV8ppg7Ajv41",
  "key21": "4oq6mipPYkhu5GUKTtTcZxtNua4Jcni65HQbzADEj368gmzTWYFf1wgdQPgjvdMJ7EXj5cSwVTNhG5z11W2odp5y",
  "key22": "44rg1sgAuGAr1VPiyHXU4uKKjPhqbMkD3zrBLLmcZGTuP9ZA2KfpgDnVpw6tvdSSJPPtpRgw2wZN6mAqxJxsUBB5",
  "key23": "4sUYAnfTPwkhAFeR8ZJgd2N1DVFM6ZewbZT3GiXxybQDVwgo8KoSKbKEMi7teVPLtV8a9BLWTNn2ZwYFW6VYTCRi",
  "key24": "2qobVsNW72N4E5bnk8SvPKCm4TZGcRQqfJAg4h5V5bZFGXVwjpCZWdbrQBbzsBUTM8i9AcY88MVpKhbj16S6NG1R",
  "key25": "25LspF1NJybAVzayPg6fQnPWMVg9ebt9MGjRtGNViPJBS87GZcrVEshEdPBnnWMQEQ3nChhUweLVudF6kBJTYgnS",
  "key26": "3Ft2ZkwHg2fp3Zp4v9dtVrsFniYeogVJXATKBgXmejJcznYKJRDypxJXxFbym9LrYBiyG5WBhPR8H8mWXZPBaaiu",
  "key27": "hrLg9RT9z8stdhUou2U45AtYcw29zuCL8XJnck1m16N2bKQpUkSFrGUiUaGTL1XzSnSMvTik5KtoTkk4x4nvs9s",
  "key28": "5xK6mYZ6474BbSoq3kJbkgKVcPDCTuiy8vAqsnm5oCZqnf4JtJYeJgpuDwrf3x8gSMirtLERkNmj4mUybVephkuT",
  "key29": "5JQ54T5HA3SoDugZayDKC3GQh6BCwDa5mc9Se8MXexgxvxrbMuZNiQc57gdNut9vnx9d3TETnMSbf75rTpYFRtY2",
  "key30": "28tZSi7xtZwH1QNJSV3UiHFM1A2TnkJCvV5QbvZx8C12DYHjGqgEkwyYGqz5ZMpbrcTLDEjYbDFDAj95L89fmNxf",
  "key31": "3LcfP4GMiLJps8HHYS82dC1yqaqeZoA6ZX5BB9riZ7dUJv5f8tEke2mRMNhC4REVCdphyaVvdXjEA6LaYw4A2GtE",
  "key32": "2co38RY8GEoMAkLmQ3Ux8g9xMG8gbtLCiX8pzJfGxGZx3AH79ZpwffBYLu3SMaHJNBkkBwByeMG1dqGtMW2JwQvC",
  "key33": "3xzJTq25uxrM88eYee69nkHJMLQTcQAzD7LZ48uiH7N3w1XB3ZHxsoqxZsqFh6ZaS2LrPHgUgQzKk5KQjom3PKMH",
  "key34": "319SWK5sMAZ3jQU31NScm9rRRC2vUNW5gjHxvQ3B6GQ17oECgqSavH5Vgk5WDakdyTPTUEDS3DQpRRqXtFEtmieS",
  "key35": "zjVeUmKMRqcvsfSzAifE15b469ZiVBNorQrABf4DJjE7tM5pvuiqcdXs62TNx3VkBVvBmJhdMEHDhryZAjyumSx",
  "key36": "3c1ZQzh7sWGbKUvK735xseioWaE3prXC3hW8JCmGoQoqfLBoY8gexrqW5sMxWLePQECoUzXUNPEWAGGQsw2dJpNX"
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
