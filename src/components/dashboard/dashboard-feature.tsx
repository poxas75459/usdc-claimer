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
    "5wiu8NQeRW6h4RF4yaaGkFf8Ug2UvPREHKGwgHSRt1E27vgDamUGgz52JqvZx8m4xCkjWsSykAVUonCmwyccojYY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jr7Ek3MuXxJQnKnATsToGWb5vo2fJp8LGZdj5bD9TFuyqW9MvF5dt3oXaXQHVFdWP3ZxYrJdURfvykdv82WT9MC",
  "key1": "4AvxNY7YRHBPq5VANseiTjnzUvioJkfAvBPN6ftXMoNqNshsBFBRta5Aem7gSc8e5mRf6qJCaAN65vnuWtCXosJh",
  "key2": "3NBCzeMt2j2zGixGggwiTWXLjrkqipzo7b456zeGFGj4YfapLd9vxos5iLtfPhVFKbxaLxSzYu4h9SLQZCLCjetJ",
  "key3": "4WduxKESZ1c5GLneuLvyWTj3pb5H823hE4txha5FJQVaVGrkxRoDFx1ji9aUi1qiKkjNBnPDXnQ5ZYP5X7RZifeY",
  "key4": "2VnwVQkK11nJnwwXQrkmBvuz1vaYfw7poJqa2txUVJ51PtpfybJoo3524JYwrYqRarGiKquaijSXGqTtK9qgjGm7",
  "key5": "5EnKGjn7ruTRJak7JsHesabqY37kEWZiHwdrBT7zXSVCHt49nHX1Kj3kFgW9QCipYghF4NYisVoJwZYoiPZPfhYW",
  "key6": "4Ftm1uGc7yfKLuXbCoDFJJsS8yz67Q1DLCWqyrCDacM55b3mYqgwVuZsXdJgAx6nnJKTdhNh5ZXc9tBEw6sXRfqE",
  "key7": "31ybmeqLVTNUNM1qPRxjpJAcE1F7EUzAo8Ag6nRgdRPwpf4To9szRzAVQiX7AWCcodV6GypjaAZR4QLX2x9PcpMk",
  "key8": "2sThEgJ81bscxsxHKPdHwqQcquhy8X3mexUC1tH2XeK8KYrTG1DGh5xMr2wCQUyQX6mNvujsPhiijYptw1LLsKpt",
  "key9": "SPSSNCUwYL7zJt6VmAdQDF56XTWfbQ8o18Zw2FsJ3ANnMccVarJrMZtwtyH9eJFftmp9L6dzYXBGvTdci1s7gXh",
  "key10": "2Qf7bxe6rXxncXiseEvFSaqxyKENT4oo8Vd3MfD6nHm6BruZVDDY2cFof6Bv7NFjZWnEgkgcu2JTDiuSmAQUdDbk",
  "key11": "4q71rreXSvAsT8GgmXnRsCKGj2UNJiMfsVXNjR1HfLQquPz8g1EtWgrtYpcnR2qfDM9PLTQbsjAGD3pPDFFdAhza",
  "key12": "5c3RRv6V2Mv9tsAF9iGDK6iWhzpjB4mKteombuD51ccV5r5B33PcpymaVbBEzjMSVoPqwbAPR1M59Zj8RsQpjKQc",
  "key13": "5xawt9aqVPscdBR8dpxrwYUpSYGRXQw2p8foXT5fBnyP18GeaCHB4ppciVoygzAHyZM9DcPjnzyStQBHDfn2y2s7",
  "key14": "4N9gvbEFRRgkY57ar1reoVAqNbzGqDzZxLNncdC7uWCx3gZcYnBjjf6vwVLdL86iK9yBtq4WSCcCQuJeKs1VZZCP",
  "key15": "ymXQskjDbLXF7krFuRriRyMq5pzZSuLWkqfqWg9iTf4tLGymRsCc1jioMNSE6w1p1FSf7GwXx9GMUT1XmfVZANC",
  "key16": "3CUEFyruisEYB5nyr6LWjmoZQdTeSNBdvANzgVwCuRR7Qrxa5WMKbRntEayLt3jjXqswzicvLsDC11BP6S7KHsuP",
  "key17": "2gpfJDyxuc9oezWrTRYGp8hnFi3ovFThPaLrkujuii8i7TWvZD37ymkzLMUDp6JVK1ARKauik2NZHs8Fz11k8ugA",
  "key18": "257Km9teiADkUqiuxzAHWCpyro3r8avhaYNMsmfFgpQDCpXdSzx2VaewUhJ1jEMs1VnyfeFbDAVBf49kzbCAXhSX",
  "key19": "EUxa53gJRCpKsL2gBAjmX4dWjB4j8ba17LmWMRHsUm1jvBXgttaFtbCPXNUfgqYWseMS9E8xXk1xjvNZSpUe1S4",
  "key20": "YAcDwiKTonpgPxNg4otRTqxH9nc6BPU4qS4vhsDMkxkmuNWBGPQuyYHeHFiboD6at2Q3Duiy5S8nX5MDMqNd2Q5",
  "key21": "8AQKTTRs8kfTbgsLpVka4xiQmJF6xv8QfemajLFzwvstJfjeYDfjJG3Vaicafcpnrh2dhcfTyZQZ3PBpbmUpfxK",
  "key22": "5xzMe59ey6EycnGs3k1MEd2TwJTu6jkBtUbhaisJysEfbVUfouLCVZvegy2kYjvoTFCuZsvEiH25mfZm9DfvVwZG",
  "key23": "2NPyQYqwL89UNSuA2VvTAUsKAjokXxhjtG1h3Zp6vdVzAjkQXSe1PmmCqC9xEYqf7F5z3You8SkBD6DVyfSz8Gqt",
  "key24": "2w6QcFYLiFxguDRWsLphT4W3dW9F1k8PE2caB1k4LcNykbHApEPBELHYGSTmtvAojcgbzNyAX77fF24XdGMtGUSX",
  "key25": "5vanUhzyf6VCKiF7hbDDbHgw5uBdatAxSpQdbM76N1a66LKrfqjXfTopBoeJPE9QFJPeahsNDF7PLnAXDE7ThmtM",
  "key26": "3EjGYhVbideV55cieWbibCLJjQ35QkH2pXKv62awxxU4h89emWBYnYF1FAUgaYJf9aWmJCc6R89prWqbQFSHWbR",
  "key27": "3eHR2ne2EMZEt9xqQ5vKzm9yMkUQUjHS8K58QYqPTfHXunTQA9bFHGaR82acGN2qFBnZmTPtEYCW1h5wv87CasHM",
  "key28": "43JjU2oRVk4o1RSHvNm2VuV95ndbPpVMHqmwV1wguBhk62QHkZYQLvqFgXvLH9TQnLjpVEoG9DMaSfeNiJN1KWzL",
  "key29": "4s4n8ALzXJKgPWt4CECcSon4s6zEPgzWet5fBoQCPST8QqGh29h7ehAL7rEGUb2oVDhAU7XvEHec1yE4zYoopfTn",
  "key30": "4VReVAaZHsJbq2YRRFLExiMVYjZqpMswSwgLY66BGbfmWb56m8MP9RkHKiqr8rkZewHKcokjLWNj93LBgij97uKz",
  "key31": "5cmfxyiXBJJg55rUCe98TP3BGABanTMpyAN2J1rTibm6xr3brRnzEpmYk5V3y6AgpG9xpNLg5GmQnizD1NKcDrQg",
  "key32": "2shZbMkAtymSj75EcqQ18AAfoeuKyjDLXfitsSnomodMEihb4MuEhjfKDaddD8KuHX5fzLR5NaK595ySSkYmd2DB",
  "key33": "8vHQnuMV5Yn5PVsRh9k38Dj581wR2YRGi5jdAdG6hXgkLFhZBxBPGaNRxTaA3itNr3b7xUtjqBBDBNaTX7nR3KB",
  "key34": "27QbQexr7pVv5f3H1ce7METhZ86tFVxRoJ3HwipUSo9CbbAdnedY8r73fKXXhaVmta3Yz3uXxt4MTsFWCXCRWfVq"
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
