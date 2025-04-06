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
    "5FphqqvqNw2UDiYpx8Z64neHzd1LLcjnbGMu7bQKJJPaCYngJ5hhbN81PFjeU81e3ukp9QSrjDvb4Y8yhgrYbhk6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sGwiVRgnK19FBPgVDLbkR7ZZe5SPtEYgF3MaaeNoooYRCQ3cZVTQbVDpcVS8ipC1xNeAWAD8TMg6xFrfdy7Aaa7",
  "key1": "4PYyBoJA6EDyTuBHhSHiLiwXB6jUr71ziVF4mSBvUsxGVoqYfjq8wXWUZ4vJ8mFYBrjC35iiJkK4fsoE8NPg3aGF",
  "key2": "ftSs36niUCFFb7NyDDAnkdheL92i9xS9mCehjFHzNBeTsouxagtKxPzynsj5qMwUsaffZ2hPTDR9cdbpnLhNPUo",
  "key3": "2M8ThGyWLXjPoJZFJt3qm2CFahr5nNyvHwM9m6rG4duHpMwhfSmyVWyfVqfSUhPHAG8rtGETpWFfBiVKjXxCNEkU",
  "key4": "42NsHeHLf7pYB7De3HSKbHQcGKfQE9FCDEt7ahsrhEWjw6j6oact6b1eF4LJ18HCNd3NdGFiC4HokcSbxvgaE7se",
  "key5": "2QHhcezVc9jizfC1Z3DmB7AWnW7cCMZxaaqb7oLueo98MeJVmBwgfLE2RpdEBcrwkS7AJnoNUsVd5Azc38uXpwDn",
  "key6": "4FWjjyfBSS9fguYmWmqScZYJnw7J6zMnvSdLF1cMRN3KZMMncsa15SbnNaDV4drFvodvg3FVwRyZcr9GyF5N9td8",
  "key7": "2VjRuZvfc2Qf1pZvHmBxpVYYdtqkVkqu2jY1HMADEpTYmgREXvwYoFXRqJcoM5quf7FKTNoPqNkAzbywW6qd271E",
  "key8": "ZekqMXMYdya3FHsNFjafN9wEQTohjK5uwEKgjRUAWPnPcB5cbix9sY8fpxLwKc6oo1thcdJdTNgsVtKgkPuqkoz",
  "key9": "3LwGRCVYjwEgezaZkPsyJKkSkmywFBWuXEpLc4UsoUqJPgZsMJ4bnHRQiomGYpixy6Emkqs5P9gjqYKWaXqWuqap",
  "key10": "3WFiPQFDMJdUjByeJmqs4MNuNivZkSfraThtb7XLetoAPBbchbL6M2hdc8y3YNAdmN7WyuTuyTUzcSPmzzogTj7m",
  "key11": "5zLjLzwP2BuemC4creWFQVLe4JwaTyKQAaPGQDS15p5PcuDYkLZQSxCKKYoqkRWSAcMQ5SHxDWd1cCzcY95SbwMh",
  "key12": "2yJM7FoSsWTgbLqEVXCvypeVvPAqoixx7EvVGejgNY5m4uyLahPxuat97F8ZUiNdSaghC5DBbjFaYZr7UiY3QqcF",
  "key13": "4oT8EKaMTUYLPrRD6G54VuM2PxTN9DWsrtGS6xYy76WCcVsEMqq1MRWQb3DkBVyZ8kDYFWA282sdGFCq9yqCHkHz",
  "key14": "8NEQSQzruyBwErADCSs2qu8mPsvg15Pio2HRHMMoKSwLRVouTpH1tGhQnYM1qBafs5KnQGBjF72h1muRpuwWqEE",
  "key15": "CoMR9ZT6MLG3v8mDtpcd9343F49WGmThjzdrTuXC8k9u1RnEtUQE34xGNBnjzHXjcoszBSZq9pRojYKhNk1SoaB",
  "key16": "3qjb2or5Xfthge7EXXKUaN4XQLCFuiUfm4eLWU6w4fh23Vh7HbjQAE6TJCVDRXytM3L9JegPGGVP1vFKScKqucvA",
  "key17": "4PU4ZxPBCcccvyYLx1Tp6fBnkzr6XcUbMBgJpaVZceth6XG59GwNNwLCmLH1r8Qiixx1gfPoBEV4k2vRVvbxKmKR",
  "key18": "5wxkBFBCeX9AWQCDtsw6EJAkPco9G1NDhMV6m3gSNHBsvZbedYPEeZQtcDiLvZ53T2tLciaQ6UDKjgV86eaxi28V",
  "key19": "3CyGSv6pfGUVqnrWdsDyLqTCxguB31yafSMjcouhMez4TtKDEkgNT63KXXcdATFwHj8USTVSi5XkgJfY4iXHaxwq",
  "key20": "DV3LxymoQ8bTNNyRpMZzaFS3xEoNsNyJdBX547akEQJZAxJerpyDUHsFwRjW8547cYTkfjcHxH1opcBCQCmYJJb",
  "key21": "cVi3yXseGVkACwiAMsgEM6A5xt5V6rye9sUg97CwhR3z13mEDYn736SA9WjzehNNa69BF1boppzvihRRgUTLECD",
  "key22": "5sRWPzVeehC8K1ZzwMbfVk1EUvtyWLoBxAG4N2XYab8tCUfCHELNxiX8kMffqSryRhWQjwfMUXWZMnnZj77hwrq2",
  "key23": "jiyKYy5ATKNyETSGeasTy7Qn5wNtC1hjQWxQM4FcAtSLngMpoBNZGLgmGAY4YtjeXxiCs6Hxmf1XJXnKfp6houy",
  "key24": "5W4U5RNTFvwpUNWTpJXXsW2LS4yRCcxeGRJDCCJMyTdTTGojq8HPRao1NkeX6MqwfRoEC9hxiaNT5ajxeLZJGgH7",
  "key25": "2NPidfKUCiZujwi2bJ3vHJagGpPR8SGNpBtSaEPVWcEorpmXcGRJz1bCFLKViRvZSKXTfgQeu3R9NhvrU9oBtxCG",
  "key26": "4b3XY1VEcJeiCbX3N5Tzy9KiDJ5msAMrthFBjudumYsnybXunUadm4cmarsAqErcTQLFYVaQgwj6g2mA61oRWfa8",
  "key27": "4mWoqrXXikncYfVXuEUepu6jAgAPPrFc1nasJgqo5uPdXrrxyjJakjz2EP6a4crqZKdYY7FA6TSFki8y6srvPsuv",
  "key28": "28JzTqGXz3qm5Vn6w5qMWkMrwWZJD2F7To9Skxpp6ZGkGxY8DLB7LgmdKBCEoTPPPQnNQoEhTUh3YzdXkhMDYDh2",
  "key29": "v17i9oanyjvkSvndd4xS9KUp6spavmVJXYRWTFYWd7SmxHc1gcDqL4aRLjq5H1tvurY1AqQXgq8ktFrEArje2Ad",
  "key30": "46CaXao11QpPSdWzfjLUFLng5UnGod2tXP8mj3pCfdaq9haa5aMF1Yq1qY5iWJaSCNn1Fa5ESB9XPsKq8J774Knn",
  "key31": "4teQm4VdcqmkgfkiCmvGu5y52BEQY3j5doNV8yhrYFWXYbCDPp9AKjDVbJGvbH6wiTQabtT8USrgxwrkRhX5fuTw",
  "key32": "4a6rXbJSXULaawLf5GL3mnt6KhHrMcbpcFajcExosLGYrTDJY4NZuW27QxPvYKrjuPJrXyY9CJniC7JrzSpQXRHc",
  "key33": "4Jb35QbA8Lkdig5x27bxM5N58k7PLA1eBq2Pr3atLDUvGAay5MoW3uBvpExECDzkLKxt91ht5hxSkSH59pZynW8f",
  "key34": "5CR6skScwyHD3SUY8UJBBTVBGJddWiosy6XwzQtJ9vy8t5CNbpTGmi4tRLFfbzucqo7dxDgrnx2FFBKBoGaWgymQ"
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
