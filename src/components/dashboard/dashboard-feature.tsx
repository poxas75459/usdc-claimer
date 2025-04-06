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
    "2QA3FFBcNas7LsnpGcC1KiN3wAaaN54qB5nK2qpPBKemyjQXfZfWxCcqpZSrEprjxHQM1mjh5vAn4V3C6Dt7Es8m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Drprh79fQtcXhaVXUJheu1g4DPzw3RKd7SCGrqjZn8woErCQnVpWAKgRuyMMhMYi9pCF95RAr75MYTZEFZvh9uo",
  "key1": "5NJ4UXNkG6nDwQcEHEmKzWvzYWzujsAaxtLXj3BmVpR9eneCD61p7vubGBRNHexKJsnHNGhuQTFhUtV3crq8tfct",
  "key2": "5QZT6RNR6KjZePTPMPyxzqAcAsLDEw3YLNEXyugNHZZB8yuFfaNhym7PFZ3ZSbt4Le9w34PaMmg7cyjsQHpFZGJD",
  "key3": "5ZvmBnnQFRD2sA3SaWBKp4C2pc4x9115Mh91zDqJYG2x1uhKsAqJvUNNsbokPWdVckhUFbCKhmBhA5BpBsbGkZ5h",
  "key4": "42vjWYBBPUcBDr4Bjz5HZh1cijdyfgavs1ZwYmF26nvVqDRNANdR2YHDQfPiwDCN5bL3pe2M3JvVzNss1VQLUK8K",
  "key5": "bGJ9tCS2YyirmzAnD3PcPA2Yfa2Pn2KNfKdatdWy1BHuni3hTab7p4Vx1dPKNgyojR1QVtq6PueqZaf7xXMWW7b",
  "key6": "vznKUhfR1gzJEWcA7w4ySvUeHWWXwKjrMDUxTQftUy1Hr6Q2AjPpWEbp8osEyQNX3hMzLyyxUpFsmCnncztNuXn",
  "key7": "2Vbyo9oreP3QDDF7zzb1aMKHtBwry4RXtnhbhjs2EeDQdjJFqov1L6WZuFebCyCoqjsKVmgw8fRyAPvneUUYNHzj",
  "key8": "4AGHGgi8Bet9nsLntAZcBv49jdSxwx3wDSPGuBKCfHruCYwUxEATV6kygHfehXAgQ4FoPZD25HX6QPYf6XUSJNGP",
  "key9": "5pe2z1n1sbRT1e6uivoMdrdAicXknwBrbvXFmzzFdDxXcknZTHGiCTrEFTe64cEfypR9aEb8YzduH39AWHqsYydJ",
  "key10": "3MRXfxGGuGYDzQwhu3mfbwAtBuYi1P2MvUoMz38gXWSmoMD6fVy4i2G27mEsFSbdzXDeSQKo8qonG9FTZYXpAc2o",
  "key11": "2h6T7etiJFxz1ABMUPZGpWkuG1dGwcqdQueVdB1UXjhaYoYJ7o75vFW6vjAikZN61XgkvFavKntfufoaMciA4GpL",
  "key12": "3i3fWWq7nofi1JsLtUx5zJ1JP9jTpniZxjNoYrDUQ18pfAwjCHLacF3qJXJ1fNCXCMRwAXkgkCWh7HjkNAvnE93p",
  "key13": "3FPwLE7pvtvijUv5Qs66A5idQxEwasVrLEAVMe6AotTsRrKQoRTLuF97nrz3QN9u3A6mVpxFqUhnFu8AfsvyFsZ3",
  "key14": "2GZDi6R5Lhk5Dk3PtVbrh266oQswTP4Fi7vt8ztuugVPDuLGUtUHZLPz24YzCFPBfEP62RmoKJSgf4dZdKEPYCPY",
  "key15": "4TXoW9Z4K6q9qZL7XeUbPo7ZtnattZKtQXQWFZHpmWmbJyJ1wcw3SbRWSQeShE425wd4hcu3boypurDSkdRkpWuv",
  "key16": "5Q6W1pL7VpZWmzLmtu5LR6mRTRK7qMPupAsDBWD9orWwSYFtazviSzmL5jsUAxsJFEu6b2zUgZBQbMdfnST4vopV",
  "key17": "388CxXQvyxn332F6F2ewFRhMRAMSQBCsJ3q5uZ7jK6VP8NUf1FexeHTkpaHMiio1crX7bmRbXfjGjeDyQA5ih4go",
  "key18": "2QdVzu6wrcfenZpJEYYKGjex67nvn1t8oTQQc8fhnASLnaJGmkBj1wkdowSqBr8eZbdaxfMrFjXUq4i3czM92RmK",
  "key19": "5ad5Zn63amCz1qGNGDduskongDcE9NsAkQbZtweaZFjSFtG71abGezXpeuSWQA5yLod7kuahgs3WmxKeoVsRNtx8",
  "key20": "uWGqEfSyg5V7MHgFccr3rj8NjasWr719BNyzbP1aaXqfaM7wVWRfNvAxxknpiurkU4m4iZGmWgvtxmkz9HbMx35",
  "key21": "2puhdV443g2D7w9nXXG8Yi3te2jQenj6Q6DYGVK5d2E8MqJ3XUFJnGNxScLKM3oXPR69DeG7JXK4mB1H32iRWxzK",
  "key22": "95EAzF5Z4jaW54rwskh2T1tAu56QEyAvDTFYqEARQJ9dwBeyFKo3Eg1bbJWEAuguvhzihjatX9DJMsFyQLhd5ZK",
  "key23": "353MWQNnzpmkxB3HysVRXFv4y7CWyZchV43wj88WmXecbZSYZvq4kum6yGc5bVCPTSfBxWP8fKBPjoCu9Uz9fPn5",
  "key24": "QJFqdtxnY3d7ftxk9aH9qkdszPiKQyn8EjmaPNdgY4yoWdXJRdQR4gisnScqw6KBh4v5ZzFdZQeLWxRxhWXBrMp",
  "key25": "prCWRcB3EcCNNWLoYDiN5Zmcubgn8jQ5hLmzsV6PAsLzXQqDxWPwiijB7S1rGG99SSgK4KXYVokRv88G8fe78rn",
  "key26": "2saMy3TWSUkr2KPUesDkuWQee1YiS51wuugqwmaBXeaUEHGKFfRjUQj9xCn4kQShR7PkKRw4GZRMU3r9ghVsB6mw",
  "key27": "2vDCwawaEq9kcZ3qrtyA82AdM8o4T7JrzEMduPk7rNHtCoWsPXVPdRZuVSvuFpRy8bgzrJ64z2WEKVhYo8tqXr5s",
  "key28": "YMefwZ7MKzYnCMk6U2GSDMZmmpw4DNWW594HwNzdiQ56Xw74FEx6f3WvxGYme7Y2aEostZBjyeQsYwj8KomKbQH",
  "key29": "3tgNvfZfhJkNRuappRn7u3MPUYioDTgzbt65FrcJnh42NDYiq2HxTDwo75FQFdS6HoLhvQ6WTBpz5Hu67n4FmZjN",
  "key30": "2twZ7WRzMnWy8rpDfRLMigZdTGADPc7XyMchYRFBw3VnPMbvXJv6nzUuGCKvDh9c4aLbtJAZN9yKkTbL8hEskNEs",
  "key31": "3oRy6vADqMtfBBg6W3cHu6RzwMBgKteYjRerAnudMX4ySy5VfDpkHCyj3BcDYPJjqTL4t2tve6zJZRNtXT5UpUy",
  "key32": "RrAKxjuCVjrByCPYehLG6k7URubAC5HQ9APpfbBAxR55uDYVjsyouQbe3TdhFyDepAuPND1kzxDsRtRRXFEcT8p",
  "key33": "2mRN2fqaLoUGfbjN184U2tA52KScbTasmDWYJCdPVHSwJCQXmrWFjHX7FgdBzRURfhabZTs1ph9XCuQrkXMJdDxy",
  "key34": "48BHk28TA6SRNgSHPTxWT72hnZYhFZFbWMTsAC2NeQvX7zdCz6fyD4NqeTfSEyUdS2hLLqEBtgJCHc3G9tXW3B1J",
  "key35": "4zcZ8CZg91Eze6rZkMY8H55r9LYrWt2AxEhakpMiA9kWhLRM5R8KBBmcfcNuakeeqw5BteXQAB5i6krjiwaJwgV1",
  "key36": "j1tE4mmNUHbmJXDWT6BQDTWsL8VY2L1PYL9agQ1Q5tTS5c63bEgXRdv1ZotaYkWrPXiMTj6zPTBMmNGS8oL5nih",
  "key37": "41kW7vpWtVpkjVmYBuBG1zzzeBrhSrWPudNDe9KgVf89Qph5YocyhPZdxPrp5NNdEGGNePk2KuYejBYXbtzdBMrM"
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
