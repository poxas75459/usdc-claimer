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
    "4KnuN8KPAqMzBy9qfKgLvykVmfkkRJ9tsUm1KNDVvu7JSz1no69ciHAHjXUb7Rw4KBZxpKLBrcpH6WxxwXx5WVG5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ei1Cycfu556PXofpLrMxQHVpnFye19mV1zqZygTMEo5NQKfbfMdXM7rRVWDq5on3B4rG2NcF92mB4Tz2HZpkGR2",
  "key1": "RimS9Yh6WwPs4dVZ2KEYvBS7Vf9afPpPGdy7AxKTY4CBHkjktfmj3K1EDPvn3uP7o4FpKR85XLFrBv1r6CtCzkP",
  "key2": "4T2S8rvq7qe9uBhH5kPfuMyx8uE816HpMDFBJQ9SnfdGpXDoeq42swBXaZSFmF8SAVKaVicb37q9pzvs1vQbGxMW",
  "key3": "4mZSsHCsPmQnKd4L3rPTzBhWKAAKGNxRDm7zF5pM7ZN2MzGZaEPEPSAa8FtWPqx9zde9ENFLnhsQ1kZphMPTJgqL",
  "key4": "4pZnVqQQs9Dqu7ELN63UVYJK26VxueC3kRCSDQ8rGEZgbUFNnKxhDKMTyboECsat8wbyfV1dNW46k7AWPGcpkc92",
  "key5": "4s4pGSTbHg9UiX7ZoFi4DE8ViR6FicoYd87HANKBoqGgaM92ewpryDVGpu4YbnhwLKoq3nFTZQjwzapZpgyZ1Cyv",
  "key6": "43Ln9moxdfCy8xR5j6YQpfZvQ3C5UDiT8NbJNgfjAGvZk3ZhSmJXhNFLsCosfdE1LtcQZfewoB2s6ith5UiRHNFm",
  "key7": "5wqeMPkEUc3f1m6wxa32ZFwMbZrL3nyZCDpwnuz8UytTvkD2N6BMWxXXFe4jEBruBkMe9gnm4pTd8hrAMESNfajN",
  "key8": "37fgm6yQNMfHnRwGWUv8twDXv5CcPqPETsKsxSoJ9bViB34rHpMWKVhHn5N1UvCHUZJzP3RYvgogd5V465L1qFeH",
  "key9": "JWRGy4vzzeeasHfE8QgiFHWdL89H8zFeQuX8oougaULJdbXVCHvn1SMvbCGBbbBiv5nHjNgYTxwgQkHYB1dgJPq",
  "key10": "2ev3TWukCDUpvRtxEocCmVC4WnGstJADDz6ztUdR24fzqzbSwfaUyQU2etoiD4KSQvQjpc15NgZ5iFMsGXgrV4Af",
  "key11": "3ij2mevw3UzCgC5Vqj5M4yfFL21vWmMFtMF29dDFPbSy8e1JYG3DMRuufD3AWPz1phFv5nc8snN2bmRBjb9vnLiu",
  "key12": "2xz3VzjkfSLjbKXd7jWQPygbzCW4dwtHzVP3zciQFcz2xrqu5mgpN5yYAzC2nCujVYK3Wmbnnu6kfVFvLhHEHRJP",
  "key13": "5E8yMBHpqje7dvcR8ycZ1WbLCA5qUAxja9ehzfMxJBhepBWq6SBvLxoNNVua8eNNCZjdzfwG5iQkNydZwNQrHkKu",
  "key14": "2vcYmyVcQhCwGs5ZFUf2CCrPEMv6qTxmaa1XQgw2rv9YwH6ot4sDYSmP7YhKydoWCzzkheYZrpDt3URUgf6wkMi3",
  "key15": "3Tm8sjvy2maDdHNkfwicbFsvBRcCrq8k6xwjdNFH1xwZi233ajXhRHejY6pfyARs4JEtLvV1UoXV1oA5w9cDw34f",
  "key16": "255dQ2C7AFxmbyimhKucKMbpSUEjDLZTaap5PCiKeFRjEnrm6WF7aiJGipXbL46C4kLKpqKhj6VawXyG61rJR6FU",
  "key17": "5K5jTNTWnmaCNkyyXehFyyE3AYYW8poNPNRhctmk2zDHoQiPXNstp5QFU3KNwc574g9oV9UCbUrpgTk8p2PbwpVn",
  "key18": "31g5E15EGfPrSuZqDvGr9SbEhmNe1X37P8webw2Rbnat5vBsLkxqWVg7vhv2bSJrQhw8HjscunT5KVirdnzjbMBb",
  "key19": "3d9dtNfxg5y95nJxRK6pQQku9yejZ5f8YUXzqbusd9uFxuRnt5KZ2WAkSy6BQtDjHjjNQQsdVZWs4juqf3SrNQqj",
  "key20": "4whXgUADZKu7KSKy1tGbxLAg7e6LjBda6e3fuV6uYiXGsw6pUAVJQf3v1ctv94pWtYKi7H5aeTe62hJnCyVEm6TN",
  "key21": "4uusQganeZgry8ULyiAbKvGxm5F8nZGJePobr7JCCH1FtNYNfjj6pNWJ65BXzdGjFUymWxYkjVRb6R5AgxYtq7xQ",
  "key22": "3JtgL4q3fSh8YVf8xqfakfMcpjt25zHZQC19iizwmwkvMz32xT9SEfii4Z2paS7B2PVri4J3EGRpVdm13TTacgbP",
  "key23": "kU8xr6h5CbMSURx2PU9CVbbFcCH4a7DZFoi4ADH8yQfatDjgujwE7iiWAL7DBqK9hVsSM538TcqxqBwRFpNLjDp",
  "key24": "5mbfEyzXS2nmSTSaypSnnSAGT7FmPjJsaFbvQnmdbAEdXRRvHmFasTZD3U6YLde875EbcyDfA2DfJTMqHxf4X3qq",
  "key25": "4MbcdTRiCyJZH8b7LU8JVZC72Bz7n4DLV4So2mVQMXvwsisawcGDSqcJT4WuMqDvWjR13whow2z8FmwiGaKAF2wv"
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
