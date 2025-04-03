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
    "4QnA3x6GdFr4ygKike6Fa6Vhqo2jbyHkAXygCbSyqQz8akGvApRuhmZTunsj1JGAMSFjNSd75RFJ3YsaMw2cHtre"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3k7HwaaepzBQxzzoLBuZFEzGxgtj99P6YZVSKt7sN53a71J2N5xrz4r1Ljb4AFkSK519HMi8UxBJM41MWL4SeWPH",
  "key1": "4de6RUroEbBjMuRRwpFf9hnX8tLxemxUrdELPGdah9AyqMZ4xxoaWzvMwK6oxKGdXk9pgjv7JEmaf5yUPqVnKK4B",
  "key2": "EkTnkqSgoZcqgTD1gZpAVGDqnbgCRJTNu2Pvu7JuEt2tP6DokAQfWdnAtoNHgdJW46sibtsX9VoCiWHV4MeoziT",
  "key3": "57bKUndqJVAHpZFQv7zwHJV38e19Xbd885z8Yapmg9rpXD6uiw9bjHPvdXzjB2J6mwSiPMSFHweMrKvm8KtGL5UB",
  "key4": "3vr1Vour5wzkouFHDY19GpUu7yh5T1o5cGbv9Gtyavkzadj2e4G3D3hoDgaiBsGgUtsGcJ9t3voaPSSC44h4DEbz",
  "key5": "ve2YxQ5woSdtvtKbyraiAxtneHZ2pNzx77KpAQneLUn8HEwi9mLSsPWjawxf7uhh7oypHc1GJ52EVW4MXQfY5sf",
  "key6": "5gYLuhpW8ac7uqDzCN7RLChbjt7NrV7DxHdD5DT51tM7tL2ZLhTiTPEVwMy3P1sSpyvMvuAXt448XMcga4ZUmkWV",
  "key7": "5Y6eC5TPECfWhi9rNdVU3nFLKAD7zA1pC2zT4qXxRJYsSR8d6jJPpM4h2iFFFAPfNc2p39gPXXiMexK6h7Fyxpdh",
  "key8": "3QWduasZ1YqLkXAqRq3d3fp214fZFEtmi3k9EBQJbarxpRDwBtnkymNZ9DZYgWkaRFEoW4sF5us18X4uc5hxDeH3",
  "key9": "4hP45ADDFEEi9gPhUrLFCrat1oZh9bfA3d6wRZk2hMN4kKnhJntX1zQdWpQQSxQNZgbynp3Lxy7hxSwtxEZtWcnk",
  "key10": "4tvMkBpNhuPFd7wkq1zrT5hLRFRMpnWPyszTHLtuGHZR4g3zd8LR5KnEeVivpaCXdQCDXP7SsVRZ5ya9smVSY1Wx",
  "key11": "2yBDohDcspZmTuimQKQM5R91aLaz9ubYrtbSpobUEBvwEkFWpW28SC1MRpt8yHH3CCqCBar91XtjtQhh6E8PiLq2",
  "key12": "4CyKZugpU1L57F8LPyxWCyFDYNt4VNGdt3CCXtiZcYAjdsZLMNzyahXBi4qwgWgXJVStBZXseqiGRn12coNFxVym",
  "key13": "uMkTTThVKvBfbtjRGahWpHtZZG5UMBzRa7EcPsuW4oZCnLS3MfsYqpSeEdezS5djoNCkp6YhnEy2HHA2h7ozW2G",
  "key14": "4WMkfvQmZrKhRwYMmZdRSJZpix9gymPB44p85cdSahDoUbadmtkH5yvmkt3ZYkD8erE34LJF9kMBfjhsnQE2R8ZS",
  "key15": "4JAKKq9TJFQgBoHabfxsdvQAsuWKmmu1wkw4QJqoipGdPMYHc9WgrAvurjH2Za2LTsQvxvMmeTUR4YPvNaEYfm7M",
  "key16": "2Yq8wqPrNoU8xEmFn21GmE81vn9cg6sGSX2puEK3z3pMNpXogrDRk2F23C15tcWcsSXNcDetBNi8p49Zc2XowEvq",
  "key17": "4EcffHFzV6vyU9eX43mKb8no493dA6zNFDJx7L1fiU27cJaWeUKScZ5XyVfzeGRhWpmLsv5pY7hxovTvPP63F5gC",
  "key18": "4m87irmnQZzFiLwmuLGA8wQX7fW9DF2H1H7WGChhPTmNmQSM973SHypef484yTuc1v8g1t3XwnA94jGV9WEQgZi4",
  "key19": "39wCBf6rwps5b9pwKsqhfP9eQrjuFxz13HWAdDR4mxjQ7SvQgypZ6m6kiMfa6xKuPpLbfzHs1vfUjafr3r68yzL2",
  "key20": "5hpv1aXN6Uuo3UAFiy5sdb2cEg1ziMhdYBLggPVfetbCNu31NGoVDaZqbE2bU8CBxq4BDGQHvijK7ddZ8RzUnDev",
  "key21": "5LfPgGW8WJPF98ftdfBxdYLeZdAU2ep2tmPqCTCvX9tNn362tQSeKC3oezV2mpwyWqgb8HBHZtCfZY3efu8ar7Hv",
  "key22": "4FLG9X8AARqpKKfEzZLMqUHRaptrFjK1esC3TsATdH1krBc7aD7HCcif2taspUojU3NCSTMGh1sk4GZ3biKTtt7u",
  "key23": "cGBgDcUGhvSGNaEK2sZyAJJkNi64FCf2Fe6SF7gftkA6CWCf3zdFGVBj4zUTcLGpa2gabJ1ByniaNYZ148TVLon",
  "key24": "3jmHB6L4rFSGkqqjPoRUEaixxF7Mk8zxgAPf7Jf6upRxHyVu26PZbFYb8b7tfdk6Tr5q9D81gRTHcbsodCWyVVc5",
  "key25": "4U4Wu3GJ42YsXvj6WBGYh4xGScp5Fg8P11ve2K4NpPuKkCWFtTjsjvSoBppfZxpdGTZJxd3mVkK5rLLwNNZ8SEqF",
  "key26": "5fCRwkuy3Dy5itqnrep25en3bFVjU2hSgH2FC19tM6h4S5R8KWeGzH1G1sk7Cse6bcnAFniooon1P4j5361HB21o"
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
