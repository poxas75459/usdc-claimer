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
    "2J8y1XbJgtvrxjEM4FFWdv49Z2uojqXCpZ7X28E66msRymduNu2meY6eU3ZYuQdL4xWd7RdWWMHmXxbT4FdxSuxP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2buxxqaCrmvtJZTUyo1FGEMxQGTFwsDt9hyc12XBQ4zX6YShtJTM5iQRuBQ9hM3b2pbk8LiBAtFBVEjaff43csLC",
  "key1": "2fTu6SoevSxRkTCdaZ5miiSwVHpvqcuWTpXf8d4G1uqqupjGSgNFrdw5T9abD2e8Jjes5L5LykCy4CHHaCdBejmC",
  "key2": "2ND2NtPoqAQwQX4xDybQHmabcp1fEvWVyEwKZ3v8fnHYokH6DhFckYK6JVfdkgUi2wbCktMJpNTndaboMnZAx3G2",
  "key3": "5xAbmZDpM274tpreZCnG5rmRZq47rv5xBcirmd61j8Miz2gHQs8tbtoR5YtZcYJqT8gKabcFjzqpP1Bm27jgvpBq",
  "key4": "5tfPquZGhXutLTChtFADyMxScv86WfZ8cfWS2Laj7H36f4WQ5MCiydyWqkZXmQkuhBmB13XekyZdCdrLJod7GGof",
  "key5": "c6SvgPzER2KeJkzweADBrnpxT1av7zervagzoyz1U2n73G6RVcNReAbb6Xvj4772y2mgFe79yNnWv12VcFy9Ezu",
  "key6": "5KLMge7R8R5gFuXwRy5rHPecmBxeXaHF7gNNEda9GmvAwNxXnds2uxq5g5w7Fn1pDhxXvuudXVEBckcEfzfk4tWN",
  "key7": "3CFWERFhV55t7rWoLhNYsJcTUsdGxWj8YWobFQGPoSAF5NF2XpDjPNsMNKvfxWLXAk4nVHqdQ2o1EgTHgxXFPK32",
  "key8": "32stDdGBDVm6AmEK6i8YMVhRBJNDhzE4sXbVMDnyjRN8G2aVXD6v2AAou1MhYYUsX8z1XxoJusMdKtUYrTjihUHc",
  "key9": "5XRBep3oUsWTcwdVJhG6WZESSsTJrmR1cxTv288P7WZU5tRA3k6BBNAhnbVXvb4w5tcPN5H7bfLwyj7iQJG3BbXs",
  "key10": "UA4o9uX9LzPuFkVv5vbfrdGR6biLMritgTw2w1fzZJZbC5t3nDMtzYRQhouPghe9QYopyNK1XZwHEqHCezABn9i",
  "key11": "3q5Vpe7u5M7MBXQxxTnwp8hBk8N1ASyrHiu93xZKfYCERE2sckvaPMCTg2wsasDLfBoactBboLYhNcgg4shQGUT7",
  "key12": "bR5SPoX22VSqzPLubnnXTgomdaRfZF1Sso4wMQ6bYjcs6WRAsMDnzmmXqfBUqStCegpkQWWdnL6FmbRDkea4E9E",
  "key13": "3JgdiYa62j5AWAsqjfqaP45d3Hh8UzMG2B51JWHpmysQs6Uuwwme4DNuHRt2cnLzuxQwLsurJNcnmJZ5yvd7VFLJ",
  "key14": "3M6b7ahyqjfrfSF2y9JEYM3gTAGrZZAayVGQBjG14dbukQcpiBS7KT5YnpRk5XTXC2AhFQd3iWMBVpFvcDMKPnAM",
  "key15": "2ArQDFeo6WPqoLu9KvQr9G34pb79KwkoGKfFuAQabvrn82HaYnLTCGv8DGHXyY7YCfuUoxrRaDfTheup4P3Cyr2o",
  "key16": "VikgZugkhnN17bFwCx8CUi7pYsM9mEACWmGCFcgQwEpTMNtyw7uPXZJV4XCzR6suRYCcNx6HfQ1PD9prWc5TVXh",
  "key17": "21gAyX48cDDg1ApeGbU7gRBvmrRCaApVjFyaytT1K1LewqEhoWM79nYm4aABSatqE5ywX13vjSjZeHj9vMvpJU3s",
  "key18": "PgRjDRfV6V6jsJGgWsC2VEW3NoFb4CZChpHbma6oqRQWc9Hm7ooCHzFxztjBsvUcfo5MMrJkHtVYwY2rnPtpy7E",
  "key19": "4DqimDYoHD7kfaUufhmFh9Bzy7TGCkP4tC41SKNnpf4PPF5kBLTjnAmxzs6wbKPF5xoxfZJXh9MgcjNrGyHRMj3M",
  "key20": "4AoJ3iSK47xToW32ZnsBDcyRrbfmbibiAUh9TgzdBTZiuwQVL2d2pPqagAofdMsFwvnGjZBHx4DBMB1nYSatpT2x",
  "key21": "3nWdXC4aWnwfyMT9pP8WfAHGPgUZEmrndcYGw1LLG6Pe7twtG9WPVrFbc62hfVYd6FucKySVDc9UFQSG8bNZ1qTe",
  "key22": "3WzT2MhkgaWyKC4wy7Hib2jp6JSRz6Wmra6AcNXAp4spQnRrnZRY94zNisNdtyjswVzL2o5Q6wKyfAd1F2JDCyUm",
  "key23": "3a6W1D6uoTUrQC1ctqGHBDN1nKmWkwgihiFCXbgnLEE7uk2yienmZ8HhMJhs7EAkbDqjjnK1YfvD3LvR1P8zqEv9",
  "key24": "2bh6JY1pScHqkXq8mAeGRUPBLXjhZJVxhbcjgsis6Wa4sGtoaYy4cF3mKZN35RdKZ1T4jrg3jNa13AoAty7mVDQp",
  "key25": "3WLXrAt8jAvRQc4kXzeAvmYjA2PaQXKnQ5kgbvTJ4hhX7j4w2SNNewNnbBxcgeAvRG99VwXbFcDVTLQJneiHk3ng",
  "key26": "3QnqiQf7UkS7AXb3nBkgvUBX5Z5Q7sFv6TyhAfRBVLFGVY88qCY25WhXGkejfRqCV1ZgvubhnHrkCXpAxUFxArs5",
  "key27": "5pCfE61nMcA1ns7s9GkHbfAy1Cq3TsgKnDwjpcfgfiuebnNHP2TM8m5Bi3ayfEYEHk3d9yu1ynytL34NbGj2T1EW",
  "key28": "6kQPig3CMLLB1pytfQWMBeCZx727sXveE1mE67KEJcsPbk62XkU7qq1B9iJqFr3Dw2apTP1gtTUG3MuKfuzWD8N",
  "key29": "2TGbMUnC4MsQHH712KXDU1MWqXgCRcAmWaA3dLKQzjEsdyNayuCXNEKKB8LzhE5PCAao8s7aT3ovBc49ufSVTZFB",
  "key30": "5m8vt7vhYYCBnd8Fa8VnrWFDaY5x4y9EDc8oMC1AUD24jeLerowNRppUWVW4P2tWFF8q1b2JKrUMgBABtRigYgg5",
  "key31": "38u6X9xaag3GGDDLK7t32EwEWShKk8sC3zfcMnBAsCM7HVZAPZoWVsrpY3xoWsyjpL7rWMrDBUZwH18STszvDVwv",
  "key32": "4V6pPqPDv331xVrspQ6vxRW3QV9Lu5GhbZxvLVhMdBvbsuDPVjJJyUCngyWiiL6eeMGNsaJoUmXptosEBzhm6gPw",
  "key33": "4MxhnEN1XHzNkUx1KP5TV6zj5A4Z1B5mt77EhzLY8iMp87zKBsLPJeDxzjAE8REyZ7Zztez2GspzkDteozhxX55j"
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
