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
    "62pZ7Qha8pgEqLApYZ3yTJ4TD3yGQbmq578egJri29ipDynnc29BhYcMxxEgzkMNPLW6fzb2aVV1aQkt4kzihTEJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BHBBspMG3zbmzEjdSn4LjSEHoZA3cEzKT1RrXgm66ZZBNewQRt8KpYMUA2fSJRLpiFrU1Zo7SS2iiK2rLCabDAs",
  "key1": "3WuEgDhjBie6LEdJeL7EQ3mygdP4Bpno4DzWYyqBvi7b15Mf3DgJRHrEFdnnVZtFTXV1go6o8YoZBHu1tvr1z6Gz",
  "key2": "4HidDzSu2sDN5tFx14GxoCu5jv9dMC3a4gTWTnRrFnewSmd8ftxgRFWBjFounMvJfX5f4567Dh1eDTmrGfuKh1nB",
  "key3": "6vApX8iRatHQJ14awYiJJGQZraWUWvrXHi1v54WQRfGd1ewfoee5e2GQ4XirdF71drpqNNPhDHbTts3wht3NFdw",
  "key4": "3qnN9wycDpD9QdkB69VegDX6rP7xRhBRCKtgcP8rGo4oJiPby6NrUAgUTGaRA73uYQkkvojp7cZ1h2j6UcjhKwnQ",
  "key5": "4SwhtVEH79RYdLYGmXasGmW5UGHEbE2rncz68jhnmQruvxokdiHx9dpGxMpsKZQ7ZRARFnY35EPfe5TakdtCX3uW",
  "key6": "3jx4mTZoUe3nkEBtH5F2wZPXEsT6ha22Zs9gGKiicUFsrijJ3fHhjEgSiFuLYt4Hkz29WqwXhtftviGPeqvS4xnn",
  "key7": "2ve5yiVVpaPcFkpD2sjcxGj7q1cVVSZm94mdCiohnDatYaTQmwvixT61pJzVbu695kBAF1ueKYtK7Qb7FMocUocB",
  "key8": "2HHXRztnqqoU25DjDG4NYsHV8sqVKwcysH4KfP7LujTrZyVTTBPYxssoaMYmsoPyj22g6XxBKduHdo6f2nt5gvnQ",
  "key9": "YY4XbioznBWj56dNqEUwMpseoRHkwRCGMYu2hvMKE5d7sWmq9Mk7fWjEriFTcf7Fx9PoS79FvdYUkzeVpM6JQK2",
  "key10": "6zqCvNXv9ZVjgqx7Y5hPCEERjz23NjGrFFDu8GxGfLGrtm1DwmjQh38H9ask3yn5q1ornzoC2XuMDHZRVdBTwCL",
  "key11": "5yZ97LC9Gwg5GtRa2DFq6A6HUrpgsGpGgnHXuMc3WesK7j3G2MWzo7KoEuBccKhp7dSjGMqu57eq5JDtB9EoXBwb",
  "key12": "4fKLWnBqjNvMb4J6rWtSfjJLt57RPkyuT86MWQNE8tCM7V2U8S5rPnpre7SiTNfBsdRbXDraot8cPabfy7zTYkt2",
  "key13": "nyQ1EUKWemZYn1YAd7pW47wTcStkByY4i81yRtFH35BkXQbLXgww6ZPiKpdgeFk8DTi6Ya8Jc5YhFaW8LP53TG7",
  "key14": "3VEvMyNnu2USczczPyqAYcaZTJ8d5QzeKkCCg2Ewu7BqEEZB4yfbTEu8sffGWyyM5HkK2p5J3ypLXeahwcmV6dge",
  "key15": "zkoSWMpAgSptq8ZkXE7DqrEaJ3MGZC9TY3a5w5ZpuEhLXmgvsTvQ55ipV8dqA56F8FmsxS7Yfs79yt3WBNwRCim",
  "key16": "3s1oJ9GcwM2ve9ttEm9jBt8CBcUX3vwZtnxzon7wJxkVYtBVq7LzJHpDYdL96Cct1uvoxcMsKRCA7X1vxNi54pR5",
  "key17": "2ghEAwpeKubn8b2aDdGrGSXLXdxzAKXiTg8zgeH2G6D6DJUUc2pLrPnWQHPZfuQdqHyDUckVsY26LK2LhabrfbbD",
  "key18": "5GGz5HJMHwfHdzBdkvHE6gMYc1QwJnZdM6eGq53J3zkkA9F9VtpyZLeArVggoRS3MQbrx4PCVWQ9WuzD1AZCq9G4",
  "key19": "Q31Q2Zet82EUi3NrxGxkhanrFQUweHKWkkvHCGxBJVsog899ynEZ6U5PPSf93xso7UXsovyDgpLjxJj2oVwbfiA",
  "key20": "2mK6tFB62ZfQZiu77Crk5y3tLhou3QS5PubJTvu7hj6EyBPhchYiEDBQNrAHe8oRoffJabkJMbq8eRp9j5dHZf3k",
  "key21": "pa8vHNhHciU2ruKRHF7Ue9UMrRcscr8i3VCKT9xaY9DY12rHdCv3P4eZwCBVMBdCMJMqwZXoJLVHK2M7CdZBW4w",
  "key22": "5j67tF63AGwHrSCc8rrPjAUsyAFkHfjofrg2ug54hPy3EvyiAtWrF9SC9ijXv6CKLmGJoVDQaJLh8NxrXdKKUw4F",
  "key23": "54LHHxxnazfoibu3y8ig8sMeNM6dYQhzW1o9wUMNmNjU1RPF7KqXs488CEzBBGYqFBcPYDdC4wspXFHRC7UbAB1K",
  "key24": "2N5QCLAufVe4YwAAbJyawVN68KL5Q5ALaQVxHMUSiLvZoMtWgzWdX5LaTBfLPCWcsevumhpgxugZru75YaRvgFY9",
  "key25": "7i9C15HVZZXdz8KFsWDgxUimP4bUjGmaj3ZyMe8dC9n9qe8FBsJ7QqfuobdeiifQqPBqHHB1vSeVLVt1EosYF8A",
  "key26": "2dPiwnzDy3VKMfb4zJBbCdx5FaK9pSvvQGKy2kyaEd3WBzpsTEnZnoL38WFGHWdRhP8PELjBwmi3J41sV7dsdQ8u",
  "key27": "3Rcivmva3wXz7A5quneTbRoUGEn7GUfidAhuZBdRvD8DxDSrYczivCCeXLVKTh1nkhCZuLdEynfVx3gh66Dx5tDo",
  "key28": "mLczRUASrSnLbv3VuUq3yrTAbNHBKcqQdfdHKPJM517nsU9owGarCjVHMNKpaFv8GM4N5KpyFymcSbW8gtxUZfZ",
  "key29": "2x8zqt7tfG5HXAgyZc3DmmkX8CXTXifWbagCeMRU8yWHSjoEd9ahvEw6DAbFCBDTF8eBjJkbaekAJqFYJqNs55i6",
  "key30": "4bEPgAh5bT9MDFHtjGN1nHbpsWN1k4usn9WFcEsarSFzaqhHsbUJfkdKi6L8Kg9BSHbtKd6xLMVLnxxqRejoBRv7",
  "key31": "2STEMNgyK4E8H3V8zAR6EoBdRAMzBF34sdtK6Sxs8sgrpaPMQ1WuY9pm1v4QfNwepTVm6cMkv9w5jSaTjdSwQopk",
  "key32": "52QNvv5eUs5cZQJaCmAqYnzXi9PzNf3LcjWngnpUXby88r52j4omstMXLjTRAE6AbTCZ5s1BjfTf4iVSS4Fmff2X",
  "key33": "46GroBXaGSDcYkc8ephu5oSAupNmPLK6MRxY2h4M8mArz24zPZ9TLAkxVeyHSnphoSw17q8tFHw8F3FFgFULChUa",
  "key34": "45HD7rQ6CJQgpyPXUXiq3fF8UAEyQdYQ6fWTw8LwcBW3vJ1s2XayGwxudw1gtEMuyu48xTR7E9GoubbjaQ9ravxW",
  "key35": "2Gjg7XHPBBoCyLf4w2DRRwfdtWyAvMgxgMxa67CEbtRJkk7rCKBsejuAZu1fykrSjh6JSTgp3J6gR21gsDuaMw3n",
  "key36": "4Q688UMdxXPcQNmkHPy6futAhT74K6SvSNThMMkTGBiiAScQRHTAwKniFGqAcY8eNUxXHryft3h9ZnbEdmsiPsBK",
  "key37": "58R4uHii5REzKqmtwo7XKbUKxwozEninC9bvNUATpng6Bn93i4cLEcGSV7DfNSGoPA29Bz2Hzn5A5fFC96Kd6L5Y",
  "key38": "yqmpaX1TAnD8k4kCAAAvhTZfNtVQJjZjF2qmbkvvPJ13QGfZMrSbY6e2ggF5ho8k9B3PmNiWH465J3b41SkHzgJ"
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
