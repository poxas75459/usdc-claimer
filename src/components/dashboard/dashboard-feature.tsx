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
    "51kPE1319meVwc88NLncbFnYvTMq7DR1s5qcjfNAy5QAHx8vK1K465gxkwtFyjdYucG4UCBJZp6yMFZbD2f6z3Vf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4asvB37ZMFWUiAvztSPv1ntTYo9Wj136ihgDzdX8qmgmoBc7myTxPhbMdHpkwZUtYMo7DTVqBWgk5y6TF7k5xxw6",
  "key1": "4WMuVVXvbS9v1mRxN2Lbjh7Xs9uqwwMa2fbHNwAgV6XHPTjJBvtzc7uvDPTuD2RoWdh5pQLx4f6P7Se4iiewwqGJ",
  "key2": "2Ur9wxnQHCiUmAnNpAgUNuRPqa26VpbKgEXGBPkrU4Y6rSUW1UvKyZJ1iWaRa3vMAENJGhDFxpDCcGAU11u9zUpx",
  "key3": "538NejAv2NBmXYsubW83EYvtCv9WiS1UTyz2aqm77RQ1eYDEN3e1DSP6YpiDrV65Jh2DwBFy6uhMhCjZQrJjQXob",
  "key4": "4hgmCPiYBpHVHqmE5gGdPt15xHJp2ryag8S4YBRJagFKQUbTAGReBErEYqHZK8xqkJG8HdXxx1EuCw4Es6rykPW7",
  "key5": "25dSBwNTgH88EqT1JnwBMzLiTmkrmif8MNL9VdMaQWEotkPEQVXvg9HiHzkKJEughPzuF6gG8gDLq2M53tC15RAM",
  "key6": "56CaWF6Qmb537Jja2S6VdnwH3AHcofdkn52wa9RdQQjd9DvJYwgtJREAr7aVehakitNKpGZGxiZNoD3EXDE6Yik5",
  "key7": "5A1AEM7oN1M38PrQZ6LWhKms451Zyht8zbR6MKied6LDpaJbEwacLjYNmrDhQoNEaGX3kuG8zdNQNL3wpBqrGXUm",
  "key8": "xqPBt7iD3aW85XAYao5iw9E7z7Ev2u7K6tabUD2ZrL5923QFX9FVU9veVrj93KP1wRJQK9iKSW1EpiM1nTMxPig",
  "key9": "5JrYuzrWGibwCuJTXk83TcDa7nYpJhDQjKD7N5qGhiRf7VJzB2W8LZbaJxrmVCxy31F7oSk6gMHzb673SVwxXxwv",
  "key10": "5QEnzFDbSdkkP8XYADu27S9RWD8CanT3SYnWVmmdwhR5KiKUd6AmvSdz9N1BJXJSsFTrvnMnZcT9jAuWpZhSWDyZ",
  "key11": "2wbBuJXwkBUD1BVWGuBnKocezkaoTPBDtG5AXxVYXnHRg7HMrYKYt2xtzk1jH2K7Wbjnzzzy2u6VByCbtp5vB1Yd",
  "key12": "575vbBV3E5ReYXVWA3N2KbrsqwvWrwJrBeVQKs2wPp7LtqXzKZxHhGEj9rASk7ufS9NhUwFu5ibwWrWAX3y2gKkg",
  "key13": "3DGsd1K5kbt6veT3Pt2UVctQR8BCC9eyoVAEz39JJ5dKrE2Zh1NFee7zZ5WHAMxFwU9XNMUTC9m4QfdVGB4FNbYq",
  "key14": "3S85jR6B8q1rKTs7Y8TXaJ8UDYHuCgWZ5pbfMRQLYVEpBzwAdaTVA2AuYU65uooAWz7k2fa3GtsjGJrzdaXzDTTR",
  "key15": "i9d5AVip3cko5gSpFzvWRBoAME8cEu9dB83iN7vJfgjYMXjxekdELnanKxwUNTWRqHuF4fQnXJEovuXLij1y6WH",
  "key16": "3U8hYhbKbGBsZYVJogs7vsaBWzV6RrTk3NLmMhDh9iaCdmr9t4ZXvFW4JgqBYExwUtv8nqdkzFnzdy9A931uWux7",
  "key17": "2HE4eoB1RrWzhBGTFUhfKqxtDBRhxHN9j4EPPiWZ3SmdpaJY6AeB9X2YkrytQpZAP5ZGF3VMmhvzuPKxE3FEao3y",
  "key18": "5BLvX5vpAHCSH7UnQfe1b3dgTBdszkqjGBhg72PPMLsfCwb7LEgfiGjuS5bAxDLu78LsJ3QXr96rRAF1NPFrteG8",
  "key19": "4gSFC6Vx4oA7t7dchFiHQGMipRFZRfHMZzmVqbpW8PAowqvzBad6v169yqZU4BU3upjsviRD58XMnEtEUjpNrGEr",
  "key20": "3gj8D2HVi6vBppMriKqgh5C2pBVd6NbrbxcpdsgHc8HqiYA6SU6pHTK491mrvYfPtMJN6FYMZe2HtprrrnLGfTBQ",
  "key21": "5z2vs4zUTktvusESC2Fm4SdjoRmc4nkKqGYmTyTCAr4WnMMgzJ9iqSbCCiQnjo97Hvhd1WEhKNHuVJbPkYsmC8Dz",
  "key22": "cbmdwhz73cUzPjX61JudAyyWB4pm3G6VmehipCtuZcPc83S3az97tXkY4YZkSivHDQtPLxei9JStPQUbkjEVz7L",
  "key23": "3dwuWQmJTpjvqfuYHXfZp4Puj4szrGtjt5WTy75QHTVf9TYvPjBp3T1dZroXNByfkXgWT6n6dMuEWPwSyTHN6Lgf",
  "key24": "2SuZFwC7MRmVkKperkC82Y6VDZhfjkAHDNC6ADwZ3zK7mastzUQsRXpq2Xgxgh6Kz7GGowFZCLtiPu8CSu8LdUXg",
  "key25": "5SixsPuzFbqh1jKqdbEaJg7voTGf6k4hhvrpvawd2JQRtLMG3uXWYVKzKhEFnEVj85V8sjeE94Erfqh4ZXCPuE2J",
  "key26": "5cxxDnsuquVqF7a8cj6NYXGwFt146vDdQw4VFoHFDzLi8wqEKoJopJeaNgokEf1FsrRc81HXNCX5v9AYTqanzkpv",
  "key27": "3Qery322REQp7fEtgcSa9KZwY8Zes28e2nfBc6b9tPFbRktWn8RFygdpu9Ew88EMLk4rvNWZ6HezWJpTNBQ3qKeU",
  "key28": "5qwrneW6fjxFoCLiDQ4r59jYPz9nuD7Cg5ASQgA1hLs1Axn33mvAHZVQs3ZxvEZSPBUZU9owefvxGTZHf3P1xSNP",
  "key29": "4mydAz2xTyjXxa63rKGfbfr7guJYd8g3jUckiyvpBn7ew5oSD8TXgrASS2htb6FDvhuyRVrp6NxjXVPFsa3q5Gsb",
  "key30": "24ZrH8C5HXGrnJhdsBYGufmJt88mo1knNcKmXsyhSXvx1ZhPuAPVc7xTKAgL3ch6qj9XheB9xHqyYQ3E6ociWosz",
  "key31": "3BFNwQPQzVTyeArwzEihPgbTmArYuaF5EjGQbSbMgxmhpue9uGFLfpDmRAK5hoHNq8aCTt5wAQ2wJ8MwCWrQt3Wf",
  "key32": "5UdeNgHnj9t5FMHPbepHZ2kRJ4xSLPHWwrBhVdwWcWx16RTJ8eAK3xaw3PTGbMJmuTKe5WQY8YNq6iEDpk5PCHtj",
  "key33": "5JaTFmtbtPAbzLgq99TKfD4eBSxkYPuG7abNrZxux2NaCPdfrX4Drb4eTC41H5tVMwmtT8RnCTpnvhfiSt6JocUo",
  "key34": "5ApQPyyVrzUo12BnVFDABZFqZbrJLnA59Av2e2H3iwE2vUxN9HgLcnp6EPM2Mwyd6QtfhCaEBHuDbhCpvHqJW9PA",
  "key35": "3KRHzmkgoeKe927YfMYK6MPzBWdo9p5naovrB5MQMii6TDkL4VYYmCVqprGMVgkc2AszLZDCKm2fVotrChaYHh4Z",
  "key36": "2dUHyyvAPF8LWuC6hBhe5C34o5pWUkgSzLne85cMwKfbKx4PvSgsy3xgd3VV2CwGepN6wXwgmNDrqaRx9VCzhrKe",
  "key37": "2VYpAGpe317Z2R9PDmESaSMhHsKbsMRYXvCxCN31Ww1JCj9LZ7LRxq7FL8h5X7SjYq4qygViLx8T9y1AWSm7qKmD",
  "key38": "5nPCQiTT8WGTvp9rphmNS1oRYJ7799GhgH2oY2xRTSS6nxTN7HdFPJ2QiF3cHot8zy269TnLs2cJYpMKBCuVSfQX",
  "key39": "45pAwKi1ShX83gw7EK7CUEzSghidyeuEuDc3BD51oyoRPH4gRAADPrYnHKpWYBozDe4Np1B4nFsbxMLFaWXGYZcr"
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
