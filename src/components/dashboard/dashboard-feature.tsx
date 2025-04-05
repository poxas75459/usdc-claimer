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
    "sG1aS9UTu16W9NSr8GJs5A4mamVVfRZBfmraUiRbrPnTYJoq915mGH1GyHE77RdsZjHynXuVUD2iT3GsnqhgvkY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PNYDqGAe7PDu5Nx6Nq1tvpiep2GamgQZadFxV9mieYviWJ3mCxVx5szdMMhUZNcWsRjzC2NECaRa9qiUdC1akSp",
  "key1": "NpghnmULyoJSRugqP5xWE9Qd3T83DAn4cLqUnC45FmhUsunqBRCGkBJDVDU3oykZHK5LYZp53w8RdgqfHnmW5Tv",
  "key2": "2LBKxBwegdrLrfd77A4ZbVq7TT7LG8AzSEQeAFg4Z96Z3QcTNXYRwNsZ6MGS693jPKpusL5oPHB7vFPkMSS1Xaeq",
  "key3": "hZ3ZUrf6ZZCbh59xx3Zu4BH3pjPRHKokGXhQBNpeNSYuVkDVx4bjf7yeGV6oY3G28UUAQh6rW5gcTV8m6RGgqqb",
  "key4": "4qaf148VnwwnoGbX5z6DLGK7GpMaUdbqSxebo3zRe9Z7r4Z3GJinbXiDqxajqPD45PmgAFiyiZN7PwNpGYCfgPKx",
  "key5": "fqQGj4kg6tBFwihpvMzAJfEvJR9wpgQiNPn51u8GfjP1SX4QZjsemBZPgL1gkJN9XWAsKWN6jJEmxcCr4yENAu7",
  "key6": "3tWk2nLetCoYgmQM3jN816bsERMAH5hdxbp4foiPXfCFTuBuiHNnfVfLNMUN2PrRp2DxT4MBdUGSUWLHFr3C69F4",
  "key7": "3cQrqc6odVKuTECUvaonjB3wZeyy3W3if8H3knANDP7XVHz8LsGpknLYCVT7ph54RQU8p7naXdjY5zyvN7aLnXWF",
  "key8": "2afv2aHyTLcgybHy78z4urH6VSgUj7gtxgiLZfMWmQCys3p1okPj7FLyo88Vuuogy8C1aBm1F1zGzoVoVaJTvMth",
  "key9": "25Wqj1CeK34W2PFehyUhzchmCDwQf7KA8si68FFWaD1n3RhffHkUUiNtRpSb2LyHMQgvFMHaDFyMhLGL2kZDFVLt",
  "key10": "2r6ZUb3Q7HnBDkd98kZfwTrkbtCGwK1jFqYko1gvyERgymBVEz7Qt2sZMBpCBVQn255mqA7fNhJmSYHqhYKyEfzv",
  "key11": "5r1qE1nzxY3jsaF8Gg1ipUpMTsSM5PqcfdroyuJGAJbSn97JijVBrUidr2jkHNcQuVtr7Q1JcatEzLUsmbQNxk8H",
  "key12": "5pMPRufCBMhVj4SuSRN4EQHjRF9ZDcgpL7mTKY9bgvV763vhAcEyezn5CGHrvSCdtfuHNGbRcWntHg2qDsZ23gwK",
  "key13": "53dtfSjBpznX9rVu38sYYrJhN9e9TDRzN4NnSLdimTRvwYxiGJ2ANhDbnmDWt8T57nn7JXd2DNYMBADrp5nwaBVe",
  "key14": "3ineKGvAAjbk799qit53h5SJR6xyZgLQVcLDuGRKrB7yhg4fKvTTq3aRau42VzqR35fZ7PvAc69nC12e3syEcwcd",
  "key15": "276K1p959X6KRd4mV91nV5MazrTkk6FCKJT2m5QGDWuWpJiPXhABd9G5uUjoTG91Wn2DHavWdN8sv8YsLUvAHrmq",
  "key16": "51u6sjYH8TgC66V1LxcmNTTT8Y5c3CEbDkbw3U3TQCeB8jWfpsE4xemJGqQ7qVioFQxnHpJe4cN7RUcnVycm49ar",
  "key17": "2hUCEH5LUee1S19BV3GvA5ePGtkQsS1PCmhGFHseF6WMD6UEjiGPZErPfrFpxiFkK8m7MhB3qvJYcFDHkkUPMtg6",
  "key18": "WFJWEFYjpgcejYeXBUEyAKW7wAZkv6YQZkz3DDxWjfWHATgQMNv2nBazPRHZaYj8kyU8waL23YZg1PMM6Qou2iG",
  "key19": "2KdfWAJGwY6kUSaH3tQomPapnGxmWkK9hDWGeko5isfff7TDio9tRjBhQQr3w9k4C2hQjEJbiYp9x9rLdQFRCfUx",
  "key20": "3masbX7G3CKxLWWBrVCQTXMbvxpHaT5wCRXfBXJAjfhk1bHnny9ZV7hcxJ18Bb1m7FSmXmyDjkW7g2nceFkUukLE",
  "key21": "4pgx8hwHiheAhzvUdZujjf9aKeSXPkbZTWqxU8n8T2s14Pb1FCpp9b6aBoGxqPkCWRYMpFJ18ZhUEL4qwrjtMtqP",
  "key22": "4xvoXaNkZ5ZZSuAgombx981AZfY8WDupuJm9hDGxcLXVMKVxsPsK72oW1Khunu4WYwSWRV6REZUHv4yuqfUfVLGk",
  "key23": "5fScay2XvYVDJgCZEgu3xL5FpBpBFdpEwf8eKsJnDMiSXrjhnWdAf5cVUYpm6va1jUH1T19wHCkRHkx5dVCKEByo",
  "key24": "3hJDUXutfU9BjS1Xewcvxx2ycNoGXUHkndH6Z36vENfDHfa4dUkQK1zmEGEaFoTGbZYSVDufT2xUwUGPdob2tLbv",
  "key25": "pgMJbYxiCUVWQ7jenQAVuTSR6cZxhxDFotWpN4ebNnCncAtZaLD56d48pJu2zMGYQL9Cm4hjayybpFexxeaFYNY",
  "key26": "3iNzmvuDxeWao9oaArWgr7jBeQzG6GxGHBQhTdJQ9FmxyatQrnscjULeGPFuLf4N7PyKBw3XKL6ouKT8kFFB9Qs4",
  "key27": "24bLRS9C9685Lao2f2h8ob5iipaNhwckiQ6mEcYJ2q6mS46JgsdLeaRND5cttLdhbUcLt1VYvsEV1h5mRJ1XeFCA",
  "key28": "2F2P1CcTos374RtKamFtx4S4WbJBpfycRdnUsaYUKPwLE7BpDvJPjxyXVNcW3kiXDadSo2rZxxMoA4tPkENEkdfA",
  "key29": "2C6mQbtNeFx8CXnohyCBQY3b6httMD25f5b539xzYtqbdw6s4ATSvg1zXrszBKLSkwK8iG2TduHGGpsFzkiDYUr",
  "key30": "4GyfFk5Tm8tdxAjSmrHKqVasPSnH3tCTVvDUedkemD2DVHygjFKT7FhPahBRdZn5KV58SR2UVjqSQanWyhfZFW9W",
  "key31": "5nngsoMQBFDjE9mpRQp982XNji5ExewRLNbf9yn81qSvYbQSptsrbhr4xFtRsNQCnQgZbTneV6S88P7B4Hf5gtxa",
  "key32": "5vXYwuaUAHuXabiJjTLivA62tZkRxEmuzU725Fwj2ouGhgRCpjFa1No5bjgs2YpUUdqSL8JeX9KgNacnFZ6AdAjN",
  "key33": "3ssnVzDGV4sPgEV5faKcSFJBV9y6oaThTRwAA8zo8h4hemBPBCB36bNU1pMTeA2AJ7ZQUsWVourzpL3twv1J8jEK",
  "key34": "4JRRqykssagPRaHqPWXvjZ7MCG5mwyfNKC2LAVZqN3QGUg4UmitczW6XXmv9GPi51WdZz1jrwHoBdQxPY5VP4NFu",
  "key35": "59KuNjEQ1BaxVULUeU6Nx2KAEbyz9RpxoPoxruvyJyL5rrHZbtgTztb2VKo22u769vfhUhEuGezft5QWGGTZoKgc"
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
