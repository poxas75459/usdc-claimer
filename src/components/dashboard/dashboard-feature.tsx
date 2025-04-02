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
    "255DLM67TZev5vWA6KaLhwqq8WNfMtssbLBFaEoWZmi7Y175PnExHxJSGiFwUnxmKZuayyPGYQBQzZBcGPSwoujZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KdPwCEJNDomPnLUjmQGgNTspVGz1CpXBKXZqBfdQwBLWL9NbPwQTJUp5uBKaMQJuQUrRMFKQpL9Znux2yBZsoZK",
  "key1": "cyJToesRAykgK4w4EyKQDTbrazuquhpiRj9DqhV6Ex6hPEk8oinuRZ4vu3jR6MoWT5Byq8gQErEeYvyRPnuNQJC",
  "key2": "5EeRwdWX8wtfcqkpRBg3zp3cJZSARX72dYzXyQDyEsMwXTK5GmepmhKpk96GaFT2etbMeiGs9Rmg7LFwyNhDM3yJ",
  "key3": "Qp5DXh8L6gtbp5R6YxsB16spU8X4Y3jZFNNVspQnCMsJ5VviT57RzJFENPQH9ZREUfkuQjjwcFQiWZNnCA5s2TG",
  "key4": "5NHSboqvpzw5wt32xEJcazMVBAtjtzwhov3cWMpX7ihjicJ2C7n9NmD4ZQWXCwuLgj8m6qTwF42TQubUpGJK4mLZ",
  "key5": "3BsWJXUiD69Eb8KuEMdmwdvQLtUhseDPyu2R7hafEhtbAKe16PGKK8ssUM2qfDhd9XAEG1HwfSjFWJkh4htqDkbh",
  "key6": "5u5gAgvuPQSamXTDV6pdqKCDVQ7HDxBzCe5PFXWajc6a4EaaCmxEMkuQuxSpLduvc8rH1ohomRw5ZaV4SjjhDmkQ",
  "key7": "43sRidrHztnTBED9zBCA5e3ArcCAana8TjFmJTkddnzA4JbBdtxqPmGLHsukCiVSQwAKxkTahqVKeakuAdPVqP9a",
  "key8": "4A7StAfLiVinjjBHvNP5PwNsooHxeaHD8hJMaxxmLyjb4TEfcZNfsFHdWxWRMkr2Lma2fZtwBBQkZ9pHt4gCyYZV",
  "key9": "5fqPxMzzaZUN9UgbY4TBiznLoyfBKDzbZDFBF4o1XfWKiKu2nhA4mxK2j5LXhfTRjhWiWbfZyCSj3zTcaWsUp5zg",
  "key10": "36ifcxSgwMoRCFTB4gtsb547BxRBdDKK7ZpzBVqD66Nb7LW1jp6KuSM3xm1FdVgzXWLYMGXB5LxqE1o68AZi3N4Z",
  "key11": "2BAFwPaTJ2PREkXfVkXS5E5L7v7trksLxqA9mKbRsHCgK2eK5nHxYpdRHncq932No56nsvHCpQS4V5NmipjPy3ES",
  "key12": "2wwaNjfp4vtSW6wV5FyXtjWxkiLXDmZKJd8YnfV19bScuEjeUyzh6Q1bKxbUNowvndtansMx2AgsfyaiKbUbG1E5",
  "key13": "xgnZyXAJjN7ZGWnkNDPu7FB5XDCepFP6jtjtGEVQrWBzChdmEiRonLfPcpZeHtcCWdXynY6L85MaJu7G2pVKitc",
  "key14": "2o7TnasgKKjNLAzFt8Ahb5ucugVJEVizUFSSyKde5nM2wCkzoc7JN5mQaJzypws6oTzoxCXSf5pwukYpJhg88nGM",
  "key15": "4ksbkAM7eVnYPA94TtVsheck1QXPZLEhWyCzcFcFUZGeE8Z6WEMYJ6PfaVe3V7HmWQxNj5gF8vuYe6TvKNDRBDnv",
  "key16": "4gRmwgGjE7kBiRJDc5cnHmfuWMDoGXMEDnqn6vjZjUMDVHBCxhzSvMAqJWVrHKjMBHiNJF6oDHGM9aXuU21cuhNV",
  "key17": "kpTHmThXEHCtVyAgA5dPnpmkx3ZNrDRUeiA1HZex9MGKFAZ7T4tywqrLzTzdSVpwE7wLMrMJK2ufyTQwBBiCh6Z",
  "key18": "3X4P2mcfvK76ya4qsm2H8geFeFzHgmT5xRarFrs4sL5V2FyzgSF6w7cjZWg9LgiLnsXYhAxDFp3v7JAnGhciEt92",
  "key19": "65X1LLeAWUCbjhr9M73vb93RDgoXvTqe68vx1XafFLNRLYdkRs1FaUKBtxwFe57q2sppsGRJTWQonLTRTQ15xEKa",
  "key20": "4chnGnriJcMEhZG6UnCpmpgHMcTj7xZ672fezymNHi1wrV4X49oZQfzptQK7BjLh62jhn68vuMnHmDyfTptCfWdz",
  "key21": "4TV1puEXsxoATH2d8fR1wqniR4ZijooqXMxGuMEr4n9unuSPBNeP4so6zBBeWX5E7HeyhNAy5L1z9EJ4Vy6Xqj4o",
  "key22": "4RTjYftmc2LR6g2cGzgWDrRPeDfqo1vJScLWP2masMDetqgThcUhs6mppQY5Tz2WiWxVFqDsSYoxcbSdctxm1hN8",
  "key23": "ggRTQGZj5WTWxqZTrRQwxgXcmWDc97J39UrKrFMFMHHKDH4TRuAQv6fWJK2U7KncPQtHbj7pJyarfQT7baLy3n7",
  "key24": "2URNrgEZ82Q8HNa1KMeutMhckjLYy7AhePHf78SfndbD6YgprQJLrpN1VsV8Wiu4LESxX3CbpdEvo1TYv9jouDV5"
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
