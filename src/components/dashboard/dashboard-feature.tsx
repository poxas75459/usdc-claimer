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
    "5CMdPK8CczaaQ1yZFWTRRniUcvAnFRDyud45ar9MtjKcWuHeVuv6e4YRJue6HkA3N4XCEAXarPtGkPcG3RCzXXgd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YStrXX7RaZgcQyzfKvAaFhPT7QjxcrXTMRBjxaEckSSuqtMjsd6WDRtCLTTAfUzg7zBZ8hYHV8ANSRaVQijK23f",
  "key1": "4yF1FZY5HmMUg64gYAGCBLM5kMj3Az2q52HaWLECJSoNb2vkPuD81FJuwT141JPkitMsFWDA6PGZeTDPKVpWkNGs",
  "key2": "29oXgbifhc6j6ssFHVMbTjHfytakA3HgyAopVAeeJG2vR7cbg28TWrT3SAg2o4c5VGbBq1uRmJg7ypXtbmgfzvb2",
  "key3": "5gQGQDvKvXVFwsgCLi9uqU1rFEkJtxGM4DnrWimXhf5tJ7zoNPRGzNpEKpiDyHehVUaSt5JBwQCHn5PiuKk9bQZ6",
  "key4": "5aY56mr5BQD64pPCpsnAdm58txkZsa4wfSoAxSa6TmTL82sRXVdLFyi2n4vUTWnEnffnCAdTDHZfQFYvfcpU2JBQ",
  "key5": "h4Bds3BhFdxEyAmCAsQk4HLCY8fTMLcHrUjHGyCqc7jVrmVHkwCFvAMN6muAMMBfsy1scQ6MNh8zJEAm4rPkSY3",
  "key6": "4C8ncRVmVNL69wKP2UcSWmUT87PgLRNsW9m21G3rR5KmTNMnszGS8zQtaD1xXrGcQTNVtWdCx15WnmMdVPyYNa7p",
  "key7": "5zoQRsJVh6xmsG4qZ23zvzupcWHHyCkj77nwktNLTQEzs8QpR1ucZVtT1Rmk7Yjc4d3gtZKcap1BdhnEapT6ZiXU",
  "key8": "4iTBvQA2K1Npuzt73aCU3k9VYQAfTRifYYYdV9Rh1UQwMSNgN5uhLdPoyAheBUehYZw9wpVxiW5NdX7aHhtFrnYj",
  "key9": "5HNvnP2oHDJs6VrMhrAzoUZ5RnuQsikU3hoGPkjerokkPsEEiZD5pkgZXY3LofHYzWUggTFrwi4GhBiBeTAbHi5V",
  "key10": "2S4S2GnsCkd7uqForFwDHc6PGfdJQvvargabZ4RVaSLNiYwUZnKF2ehVs1anLUnnKmrV3hcBvGAEYQ4g39Pmcc3x",
  "key11": "5YMjvd2vaaAEVCPnJy2Aho4tPZfMSNc5Pv9rbnEZooNcVe2te5mKX5wbH8jMazWtAEMfhK74rWn6H5N9aCk1angD",
  "key12": "5fwYM3Xraopq8GwSpiEsPbG3DopK2ik132MdCuWVMfNkhCCDtCDkzUFGgysRmQqzrvsuCxaBfWzq2BAvLnudJ79H",
  "key13": "2uwqMfB5gs2s6ei9UigZmHkkzD2x3pXHP65UZv2fnynv44ACzRvaRCxHn75Po75HiMHaxQjkAn8VGz7P3ZCDZKAs",
  "key14": "39359uj2qWU2vRpxSeujV7U2ciBcyqunm1rvEBWJnjxhKNYB6uW4KwZkXr5fcaMnvyHz6c3mF6WYX2meHQNKTzXZ",
  "key15": "33KmgwnQyELzWn5pqQxWs4Dw3FNaUWJr6tRkds3xDLZ2KmiVfvf1ZWkU1rqofsmXFCjWaHDNx39o3ZBaV81MsTLU",
  "key16": "3Pgs5ZLwLLxQbBED5BamQomA2BjVekU6yb3bkuLJKdJaZqUGQuowHjsgKdJXU8gpdQNzuaWVSot7jixZa3mENuJf",
  "key17": "2q9xKX7i7uehEB5BBLCk9ycpgJjFM8zmL3nexz6xkhSMrC8nH9QNd3UKdKd8AJpusyooW5MgW2xyRFNWKoaJLsik",
  "key18": "2ukQT1AEFgKqe9MSoHQzbpmd4AyVAr97GNqCVEntFzGHtk3xY4h8KESS6KsPbdkFzE25dLzJ1S87crShbmkFfvaD",
  "key19": "25GnVjVwh7vcMEYLh618siLvZXhMsHxy8j7UyGEFPz5YCQ4RZcLjQk5Y7g9Vz3vDGUaYRxgBH2YNFm59WnGKZvbJ",
  "key20": "5ym64F4pdg1cFJLH2aJAw4wAEwTeiPcM43BaiLc7qNRRsiwqYLHjtSfMBkn4fKtmmSGCWhUfQ35C9SCtXL8ZPTXc",
  "key21": "41GwLMrEr6esEWC2HD7ZmkAhTLCVohStx2cZNSyCu2tHTMVHPpHDQmTVDe25nosMjiJSvtDGUrVxyx3VBwxUw52K",
  "key22": "4GznkvZ8pzij22Kj2tJS2WdugcZpN1o5r9iVPu3V5EWPtFw2zRsE8vd7HiFcWyW2oFQgYPnwqEjnMzC6mK1kTX1s",
  "key23": "5wHF2k8NvCzVmKZjdbtMGhuVRg9UjcNHwN6D6JUE9giSrKRSFYpSr2AmZMqdUrSs9m4Mzjy4Pyv1EiqF3NLTq5NV",
  "key24": "2J3W31Bceyzfewjw166y5xwreKcLecxS1D7hjwUpTjbGZkyMsE8zTjSnMVPih1mEA3bFhaa3HEasCkxpZ6p5o5Sm",
  "key25": "4LEfg14vMh2vQwKubSErjYodFQbip6NEgf9oN5GPMfq8K7f5w6UhgG59KUsasYpRStGph8UnQFfXMePB5w6wCfYE",
  "key26": "2ZnaoKaXUyv5s5c8LcvR2sNCoWWR51VHRpnPC6W4R6GsunUA9Kd8vCAL2Nt4qFpv27Pm8tKCte5BziiHjn7KxXq3",
  "key27": "38kToZfjbCH1ZNXk33qroGz1okjygAkQBDh5ukuUGCvNX2hARL5rZCEasPezaE8EZUvdfAnT4cZK3QfxvQSBm3hE",
  "key28": "3STFUS5iav4QWEgndXdM66J9DYimiGYqeQEEnAowUNCCDPoEJsfVaZ2uqrRo7Fw3N4WiwHpEPvRTmqHLPvNtSvv6",
  "key29": "AFpVCM1mzuQcZFhKSTWiAhTm5drj95ZWt8HXg8GrDymfXd5SmpoDZFSXX1MJ7iFEqYppUYhUox7KuxoprD2ixBr"
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
