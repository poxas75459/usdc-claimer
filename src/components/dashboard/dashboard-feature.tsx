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
    "2KLFXSYy9seZnnkgM3jcLimovkCbPy2FWYyFjNtVrRB7vCiHBLKGWQvwUTKJDGVmX8sNmUaFcB6o8D1sgARRvmL1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42qVq2yTJ31QuabitsbYoMRjzLmGRzVmpZgyyqZZx6oeYs6sNwgySxtxaqBinTgaSvnaEd71DhmqnSHLeGfUBFEH",
  "key1": "4UoEWtTET9KvatfMEWGiDBRwHNtLb21xtk7bgzxBFHbx4mdbV8mnZTuaaDy2aNoJNm3u1RxXv7gxEWy8cZ3dRT2q",
  "key2": "Kz5SRfCJeLEnE2fVdc67kdQhyRiuwYbCtWNVbq6dcm1CGsUDCtJSHMZmeLToAGTG4ctFnELr9p8gm5c4XLvHhyj",
  "key3": "4dFSdKz1mwBK2ScCDqvZPivpqedGzggakBRgpKo7AWJyeicKNYWh41gQ3Rhb3WWt7BQ47sj8sXLRyPijJXQ93e4w",
  "key4": "2DEejHYX78rCNNk4THiQMrke7L8hU2CeGdkog8W115SgN5TGmh51LWnY3SyUrEzHtSKcpccbxK1xuygfijLZU3ah",
  "key5": "4Rt4rtFfiK41ZAQxTH9ytdvZLMbim1FAuGCpe8z1ER5ND34vTLBjGUmiHf4TwE59uJSgRCDUzraBnTak8hufckRx",
  "key6": "2QcnEpfK36KQWHvhi48Ww5UHzygpabGzwmzMWBxhv7amNBDeHgCDnWPLJP8W3sGMuWM9JEtKNrPAXp2pNRJf5TGw",
  "key7": "3hr3FV4JknCS5aSkbgMV5wc947ix87W4afvCHgfWz9xNxLoYLeJXjMwSArWxQ5x9jhsW4fzB5KCx8KdWL5zk8jse",
  "key8": "5jKoLkssvpsiwNX7PjQb1P9PFZbzwCcKHZvCpKUXxhPi1Y9d11xjFGNzZhj2i7KJWvfY3nN4fbvZeogXSpRNJm81",
  "key9": "22oPA5egeuaZvTpYZhxWMsvYVn2spG4bqQPvfzNPWBdXh5woc7ySZk3wYWXf6UAE3VSu5nTLmWPaiXVQGBAtSTmo",
  "key10": "4ASqqrYDq8qvaW2eyRqo5Er8H7T9XTGUdfDewThF3Ei6c7xs3kmRXni1qxQacKj9p3CkkrBVDkpXTfqec2pMWzkx",
  "key11": "4eEVz7TDV5LNcZmTLKP6TbJW3BNWzaXzuyvcrczs112WpQJFoHhVKbtdPpoaPUSW37zqXN5ttxX1iHmVwBmzj6P8",
  "key12": "2fZwkzAGvyK4RETtn8Wnp35Pum7pF1668f8u8omT7Sg1ZNdYix6DASinmU7Fz4Jt6xoQQv2FsAoWiuRVWtQxBCHZ",
  "key13": "57E1HhUF5MgWDjHU5Hd9rkrkA5q5LTCrbwSzSgtQ2wR5mAmz9FygBJnDkAD4XRi6NzuYF9CsyCNaJjoYJa9B3g1x",
  "key14": "2wqYq41HSEbpgoeB1nn9gsixbxEiCCGvi5Zvhyh118kpZqxgLUyZBMLsuyRsGNn3X1LG7aXderYXou2RJwK4vwx7",
  "key15": "4yMGq2Yvh87TCndGYT3vmxSJsvmsgLWM9rndLPHwkubYDZuKLUpFVdtkwnyDv26Sc3SYSa77SPGMSjASDSgSy3kW",
  "key16": "3zMHRiDsrFAkp2w5pfFnAJgKRJUPD15a3VMP1Reb5z845okM8V24VCA1wKuf82mGCHe38zQb14R5jSb2jEzZLM9S",
  "key17": "W2Yu3amrWwq9At8zXDLPqpkmJw3a2w2q8mvCpuEyohdycmUkMLmhwzazR6N8TrXPbznCwUQgJWqTGSjEJBGmXbJ",
  "key18": "QQCifZomxXrPcoTvhGYhSmVZChJLuVyHwCwvxzwVdhqB9cepNwQVjfYzVSUUqUC2KQ4cuoxDkoa2t5Uso6up2bm",
  "key19": "Ki6esveWMXRNspAQgCa9CdtsksRW5oCWczL6F5YK3vGCB1Ey5Qfyhoi2bKwsrDTAgNpjvyJFML2pVaRBn4agq5A",
  "key20": "51zQNsSoaiFvBgrK5Z4ou6U5p7zs9XHPDPLxKL8nYkct4NUoiZAnmgMUWwXLaqS6ukWwGgtBC3WZMTsaSSHsBjJA",
  "key21": "2SBb6KFv3ZvMqxhkumpsBCWbyW9ztKeksEUPMnpRKUDme6wrFXNDZATcwKHnjE4j2QKDagorGwnFCDpZQzoBW4zR",
  "key22": "2f96fsoVZwdTht43XcVPYMhHNuz9cULsEhk7aWRhErTPvcjAf8qk6FnEn8QsMwCfxEJn17WzRi5SwWUSNTAGVCWw",
  "key23": "VxuggRhBBxg45gSwfLpHdGLZ5G7G1xHcmBnnX2SP8Z3cbghXgEcmA4VKLoZopNAg6zNA36EuWsmuc88izax8m1w",
  "key24": "2GQiKwcfZGioVvrQYBHGZckDAdHDqHDoHnsmSxcbR5rru1oJzAq2GwQxAtXijiy7EzomSoJAkLGx1LNvbzb3Tug6",
  "key25": "3a29Eap2reeraAYNPhrr6LQZu65SVgFbxLa8zdmT6Edy2UnSYQRsA3sUMQcEzczNkaN8h8ZoieiSqTMPrzbLigEn"
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
