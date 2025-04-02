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
    "27d8TcPuQkQx5t2Syr6wCsX3g563SuA3BHCJviSWDhcsRixvRtLYw53ZTrC9vhfoYUSLRx1xcTmtSU8JjMVogNSJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZbKyMACuyLeLRW2iwTaEpZxEwUKy3evaC5AebBKm2UMKfzqaJJp6yV9fwCETqgE1d3W3C8meX7EMxXHN6V9u3jb",
  "key1": "5nAYzs2V27xVYLfNLcg6XPXZxbSDzimekDnuKtamtX8HMs5A9q1hU7qTZS3pscHYnK37KAFaqurmroDN8WbfkaPJ",
  "key2": "3whRWsgtrsoERPwyGMLWZ9tx4EtMdELNjPQVEuY32puVkaCTS51DUeVZCHicA5jT94xSwyRbTzV8MHb2W23LoVRt",
  "key3": "3s3xif3wu8tTefXDVQ3qj8n9toj9gCH31DfJrYN4sYZUPHDBBnvpuacosQoyMbdn7PZM4nk234WQ2ToiEsyw9xt2",
  "key4": "LGP7F6WZWgajLPTCcaYzvSEsGNSBG7F312X2fFgZujxCnR9AHxQWbffDeK18k9A4tZ9qiAk1zdp1kBv5yaWtdsG",
  "key5": "4BtSn3d4MSrhubdLrbQtRWEVsNFB8cF8m6kMDgF4sEhfbWAMRdMosWhkvmrkRvhu3W2G45GGk8sJArpRmtGgYYVS",
  "key6": "64Cm1zQbG48Pj5ntxBjawHKTuocidGD6cEm98FuXAH8cNf2Zea2qoBadtDQbcKRvzBJfZydNo6adqjTSDKcjPprp",
  "key7": "3YecRXig6UdpL9zDhuWnDroTZ8C6FUVd9KQjbb8FFHpRnzDutWZVNc23JNdYtDj1Y9UXVunG7aUgZiMKy6UrUcpL",
  "key8": "5EqFSHZ5vrgsfYDRqWpV2SPXA7Gru5bKhd3f25CmV75Adpk2mYuZTPTNVX9Dkmt7D6WZbaL2swSSe5aUypCsCbR4",
  "key9": "5gi46hitzECXM5QczNfCWE579DmoySMjPntwJfprQu4i5LHKa3qbjzasyRNNantMkFAZ2zFPNZRGEx9c7vbQanMH",
  "key10": "2DwBG3VbzTtTc71XwZ1bsE3cHgbaipYRUcDV1vfe39xxXskugznDLzeH3G492FjiNNNoTNEqWuE4EoY7PxTe8wnK",
  "key11": "4B2j59N3dBwBmdHAKCV1xJZ9DWyA3SvymWn1fEioBKNbJdSG1GzWugLuTb5QLkBFpaUhQMWMRCNmTKi5Hs9iiVB4",
  "key12": "2sNSsHA8eLrMWXCiHAkjx7eqmhu2iTKfXjjbfEQUL1EsGewEV6n9UDryaExpckCCzTC6MxuWimgbXrT5Y9oTKkZH",
  "key13": "49qusmxMBmbr7E7KDEz3jWqVd6uBv6wYwvg2tqCGYueR4CUANxnTUNE5VCQzuF3i9prBH9fFM5XUiYMyHpC27Wws",
  "key14": "32XHptuaofarTtth8nByLTH1gBwDaF7VuxQoKvH4PV7Td4HRBcnsK77SUMfPbijZo8jBvSUmANNciBzC2t7n1gEu",
  "key15": "4jA16kMXNfhPVGWUfrSr3HohbXVkqS3wMKX2Kk4qHry1mLjCQAjHYSv2q3yV35FXHH9WWzL42dtz8kqo9er1Cb9E",
  "key16": "3uPmS1fYu4EPP8GQwcnM5AiZ1hSwaDCMhMzjao7RyrH5vhMs3Z2n4aSxRSkGvRSHf2AmYcTAiRwWwthmrKC8frYs",
  "key17": "5gxfzGoXFn4Yk1kon9iL6ZwE2XxAfRAYdDcUeVHLqiu4TBjY1hovuDZuCq3fTNrWJteRwv9Xjmi8Sm1WHJTTuqML",
  "key18": "13k1xb1pyMh2g1sRX3Wp6siZF8f13P9cvGDAav8pZ3Ki8QZx5ZjKmziXtcfwoUka6eQE981ouud1P4YT3SuXbK9",
  "key19": "5Qr6oMDKBmvk9b1ecSvD4KJUUeUTz8BsMm1yJZwxCuu3yRtiqBySGB4XR7CCYkP9HR3SvxEXExfyVKK7bAKErTG6",
  "key20": "eyCyZfFocwS1zm5hw5zDagjkcWhbvo8vmsMRtwcpsqmq6p88LVytgLnJypmiLAMLtRgvSFikgvFGTTyEdRbmboP",
  "key21": "338JsQA1h5wXW8ucfZDVFCC27hX9k773yt4mtHb7w6KL4RdvN9D9RSLu8JkQVd3LKzXDgmCYXYoMPy6DyhZTT3HU",
  "key22": "625AdU1RkPUx1QFhHzsYFF6jVCsC3QVpDpCZA2UWA2mUduaRFS6gWmd5HvnfxtGMnyHPgThWBCsfWSFTUDYSBGiQ",
  "key23": "5d81qGz4WAmtcc6LqPpDFqMbbctvmxW258QH6xD94gXLudUj2H3LY2mejyzNnNCAuU97qmNvziek8d8s69xKLu9n",
  "key24": "3wXax3cBhN8gU7T34VjsistUpqbg5nZZmN3UYiNkaTxDEHymxuwZMcuuMzzqW5bbSQw13oUkKa3jTRcSmMMNFSoJ",
  "key25": "3xNdZzP2e4f8e6gigcFXS89hWyVbK7438iPTADC8czoskJig6tVB4vjcXQM9CA9qRgdFehTMRhiFjSdDmSrQvjL2",
  "key26": "3LdTLtxUxTaScHSzZiZTkmWypiABaiPtCMFcF4yzH9epBZpcpottFSGFoBVRksrGk4dP5Nh7AbF1jrf9dqdETF5Z",
  "key27": "5x259Ry5t7fSp36faaghABKkX6T5oV4K3wKxLYcn1i3b2p9kcFFv3xwjv3Sh2YVBwqnwtsBHe3cH6hCw2yPsTGq",
  "key28": "3qqEe2kLySRvYmBQWaMxmabzZMtzbgtxM7nYRvYkfhQtZw93u6H5MCsevtQJQQ1HEn2uUnuLzs75HpXNFmULUcqj",
  "key29": "4GKwxkgp9qhL3QGHgjoFwtQLEDZA34ABPMhGMmF6y2rKk7wJja4fyqy5UcPst16NxBpGXGCvhQrEt82TT9iszB7m",
  "key30": "2w2DvcFZnPmxiNCRFWCJK4ngnfhGwUQrp2ZvwK8JFsoPTPJPzdXoLyfxPb22YtTNqF7gbGQ6foqJ3muygz46oGvn",
  "key31": "3WGWQHsDa25yomhzaFLnTUM2TVxb8G95DhSRFkPQ4yxgV7C4KPXKBHLUC7ZqGvbjBSU8qPzQ41KzWpVLtKGwm17z",
  "key32": "377B55AFYjsdV39RdUu6QAbwPqxR39rhZgSP8aHc1YrqisnFpiDjEAkWCjhqeANNuPkFSXXzg1WcApmAKkFizUrT",
  "key33": "5Y7mzaicqkzi27koSVjs4bDpjPjcEJkFSwSrEuRcGGkqBWH5QySSG5Hw4cDzTeU76RRExJjJxQu7jWCAYuSi1CAv",
  "key34": "3KK7aJxnAvgmJQsfQ4Wew39TFhKDcB53Y3ykC2TbcBWyxFVhovdqmGUuwJjRZKUTGLQUfx8VeCS52RMLq9AHQgko",
  "key35": "5pr6DBhtQxChJNB7CA4ZGc3oH4iLJepjVGJTDDqq8wk3GMDT481m5x7tEqbh6ZoEaZas3sEz8evLKLttSedsPLH4",
  "key36": "2mEyHg3cetEBaJiQ7gviXaNEy4WehdS3aC4TDkyjmLmTE857UAswpcpwXk8q2fSynPcGXai9oqeFJxwAU13a6eFd",
  "key37": "32pu9voaJhGwuSQgosm9hcpXRRK23MH4wyea9L8kNwFANKx7mAxAnNFyKWtRBUkD4txnVSm6AjfpkEQXsR9PbGML",
  "key38": "u4WLVNsGBV9nND4PhssPGWAT7CrnZWQfxKBPLKtMAPBjF7Si1FXLaGzQskrXkjw1HwYJ4NfkNo2iWKa6gXHZAfZ"
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
