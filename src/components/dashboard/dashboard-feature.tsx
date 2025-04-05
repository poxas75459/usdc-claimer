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
    "4fQRtHprrG6YRZJokTQ8seNYvdRgGyaYqWQMfXkKMKfY2xA5RVTidstV2fQzw7u4Zcww8FHFGG2pk4r2b1y8nz9g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FH81FEeFnRfmSvLDJPvrmcHZruVKnCnp9akLz88bUHiMFgAxXWdWX8V4wkaEUXBJ769d8Jwi7efAmJskvJ6UARU",
  "key1": "p1Z3fixBgSgJgSKxCgH2JahZVoonyCtcaRe9oTdFqnNHoWuDGUTfLL36xP8F3xqEMVKrDd4DYUSNTwWeHQR4NNs",
  "key2": "3qtvheUNSJxnt1yZdCMBYT3nmiBhAGsdbwzpLnHoynVMxinuoqmc6UvatAXTv442eubv21TeHohvz6gLFHPN7hy3",
  "key3": "4DngffcpWmc5V1mQkB7xRkEDrsYiFgTB1LUDnwyDLKaJxxHgWiN9GhP9ZBD5TszvuwMSpLwmS5mAiy1EHmxbaMri",
  "key4": "42o4KRFsJaK8oAgNoW5bwJNUdxfq72TMg2P3pT3LorANWQd5Crw1fNCQnyBw1gZsZc42JN6tgfUsA3TKMSKHr5pw",
  "key5": "3dTgBzS5N8Towkzv7kQC3obsdGnAVREd4JmnB4XdfxRdDgrztT2i3hjWLFS3LNUAFETimkLELPXecP5Q6SdvunLS",
  "key6": "3AnaLnhbQgCGuPByQxe6mPmmBZTBPfG5MxnkEuRq9PxetVUqUm6ZymFZ8hLph2M8HxaRBfJJTDsBrnePU2nZaHsU",
  "key7": "4yQykSnmb4MpbknYv5WvzpSpjU9BsgP9DFqTbKpM7hChxx7dJzy3fojyWoVJqdvnWvUBLqD3t5o5tgB2gj8X5mK2",
  "key8": "31Cih41B4rSCSL9HhTaB7d4iwizZN5JyyuMenPpz6LuAteLgPW5Lmkz2Jh7wNMgXwwmkHuppYRqtzJhKt3pTASm3",
  "key9": "3sgixhyu1rfopjvrSDLm1iy3igG1sjQTdC2wHmqjin7xjEuwx3bqRinLTZQJRxZiijXjsLJtbvfTbCpRNRt3hJcR",
  "key10": "rEGU1UFRG7NVP8HTVfSv6Cw17s2VcV83nVgFS6qAN8tvHWmWPGX2ZFtBQJw5V4kziwcEychjBQrkzLX1xVU6Nmo",
  "key11": "5MSXGiZEgSpMkjWAAYkxmxdGWRguJ3PKU36ezp1EffM978PpRy6GPujFPm95VRuQXppRpEwovRCPWqdzg36oASD2",
  "key12": "4VccK2uKfmHoSBBWwnL2ZnwoMi3Ccsa8eeWdpsDLUeFzxXF26cFwccvY5HFukCcEfwJggiGYoLVJV3dEz2KLh3cJ",
  "key13": "5UcMEA6tdKHHwMkASwAHsELn1ahvVPYHhQK7sH6exHxUkk3wQMct1NmNrHzFnfk5uVG9vSj8n21BKfy3SiPfj3zK",
  "key14": "2SxiSfArGwoH1EGtnRqVedFVuyWuoVaCJryf4Z3ggXWfMpHP7FxREFGp26vsxqLWdtqv97XCZTog5yNrLZm15C7U",
  "key15": "eWwmJLWNcYCDjVrxr5Wdp8B1HyFexxR76Hqe1nEDDVTDh9x1JFkXYsgrdEwPg7X4ddwFRKByFAAKkDibvJAWh9T",
  "key16": "4fPyWaxkSrVxE9P22jXpzH5zN1DFfqSy6D8Mz9Nywgvg3G31zSbchemfvUGn62YJqhMc1qvLV55kHBbpA4JbC7nB",
  "key17": "4veKH29GFN92ZHKrU7igcPinX6mUcvGYyrByqTAVjte3j7XJfPwgTWr4oeWwoB6asw9yEYBsZ2VuTAWjvYmN7pG8",
  "key18": "3pxRkHsvXVVHrxLeFoJRG1XGmsTnFisAvKvcRYxk4gSf6DFZXkoW2g2Ly9KaRnE4fUDbKury3LYDQ1vzpMi6iDLJ",
  "key19": "2XHarRgHqLyrHGnA3ovaDnEjgEY1GHDMAbuiKF9kEh3AgL5dRV2Bb1haLsWLtSS41yssJavzT5sphC7NTEj3RffT",
  "key20": "417vcV7ZZ4ANRnXPJ3b3TeKSz6pP2ZgyjKVpbZfCRMiPbVhW1oYNn5BHzYHL3H68EK7xu75RHSF2e1xSLFr7djg9",
  "key21": "5D17UMT5GBuqkPtKbxuLbLwHVFC7sFrKfJepUiiBA9WY8EmFLbENBbZMxVTwrg3vBaezujRwVNyE42zwsNv6ns8G",
  "key22": "3q6Rm7ZJMDLrURZxBqA2KVCvc8oZkUtf2PEYMiFQW62aLcwtZZztChs26eLGh1Dt6FvZnR4hk8FgENquMAtuksz1",
  "key23": "VdnLwoE3xxY6ovQPB1qDYdRKWxDNu7LFyNaRfzyDkXgXvsZCYNq33hV3TBoPSvKuHGr2THsoEE64rsetyMYg45E",
  "key24": "4vbk5qtvD5z3CBFGBZa8nJQ6SnofSSHoBxRQP24uWQXPCZv6dZjJrUqKRb15HKaYb9q13GwGRx5w56Wm8TjrRafM",
  "key25": "3c6KNjwfr2WfAKpTtRYWmjBaRxNi5j4QuXjXHED3VhPepvPxd5wD7iCkcjNgF78jiahis7p5uFqLZSU3fui7jkgh",
  "key26": "5Fj8gsqcfc5UCffgZ8Q7egGWmiuLxvX1nMCXZ7kW96V3xjkUpdE35YBmik6soKuejGddyTiM8aXkonHp79GC83wE",
  "key27": "czyQf9ZTnZ4d5HxDB58L9XdaAkXZiUxvjVmQ5nr36pui5S6kSMCXUoqZXYpC8KTBEb1sa1j9yW7Sb9DawGtS17a",
  "key28": "3Zs9ansZzdcUkxhQtqr5ZqketcrxsYhNd1oKUQLUp6JbWjdNMYcFHTfNhmRuejpzTRHMGHzUWZHg46RQLWthPogb",
  "key29": "3vPJ73gJ4cpRXmzKiMw4Fg5HuffSX3iTGnLsmjivwJXukDEoEvvjUeZTeKt8f9byyZroYR7KTK7HsJiJUTuJcqbB",
  "key30": "mqMF9Y7qLyyYBAnAMgErTnJJZ7MvfLpeRNmqzCiNNEFRFowMha6MHukuet8H74hDAJqxRwdRBttHizxm2obomnz",
  "key31": "57j61DAP3FkeYB6M9nLtgapx4WbfdWkjh9DpXL3BCQqAYWNhX2YufjX9Lg9mTzzAfjkV6vpXYMen4mXJHQ9S3cC2",
  "key32": "3PTcsdJFY9DtFM6dsMicPekmGGjPFNfkoVqMB1wctjtj4Ky83w1A665ASTavwQb5FBeVsNmma8pAFrjNV9sfm5n6",
  "key33": "tZJf9JnbhxEpJuhsiKZtCVoj7EYUJ698n5qBeYPzJkw9JwaCsCVD6vrZCh9hJQ7JR4rxdXPea7tWPqyNWTLnmiE",
  "key34": "5UMC33V4EyU5hWvuTd5wB7hCdjeRBKPRQLohHpMdGTaDLxYoXnzQ9GqZ1J2fR6apLZTyS8e8gKCcXmcbBCFKghT4",
  "key35": "LvoSmrJPu4ttHedbM8wx3rqnXrHnMfnmKrjAyiQD63Nrqw79hr3QRxgbdynp8DMJabhFS3fUWncb9Qd8tmF8w1N",
  "key36": "3nN7DodRxLXG8wkQyg5Rw3ZTisQ1n3cjZXv4PXSF2JLRkC3BNpiNeKGRUJA2piK89q66BtmSkrTDVYTeXnJDzk5Q",
  "key37": "5aE3dG7HhbFEnw4yxBP9ruYPL5Wswmqc7z5xKAxx9c3FYdRH9UeRbwkiN1cM5TnfqjejaoApmXSj48DDyXq8T2Wt",
  "key38": "4pR3hN26G3uJRgKQbWAYJRANTnxFC7hceP4vYHEGSzCnkgt9QYGrKrajzE1zp7iZyEjXbMoQbumW5zbkKXsVY4DT",
  "key39": "QZC2E3VmFbaMNNxuTVwFHcz1uaEn8dGSM55UaRnzKNe4byDc4CoaHjXxFp2GATogGDG8e7UGYKvETog6xaC9Q1j"
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
