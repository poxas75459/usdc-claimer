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
    "scTMbFDNaVrcidA7a4CUMULk3G1yRpss7M8L7jGg8FH65pFTA6XXvVj7QSXPSuVLw4DxC7T1aATobrNHCpERUDF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NpJT9Lwm5jFNp2RRTvcrCpkyL4XGK6Zcc1f9mvLikeu6szDjmVDG5m3NyevsdH4abm777WQBKnZTnwVS1uh8Khy",
  "key1": "4HcPNVTuAy6BLzJPV2EGgxHZs9eMkfJXWBFv6TDyJSHzSRfkffmwzPP3bro7cQMAAmQbYs935b26ahXbTP3zzNt",
  "key2": "2oP9K4htarHztf5JYsUhZuwK7mguhA7N8qPMmQ2GeaUkTxr5tiX6XUL8No2vGDWND6r2AKB6SebEZbs7oTFfxwMD",
  "key3": "5nHuGtcHmLbGGUrL7UiNwJsnxv4xHC7U5cAL6fAv7fCWUWovn5nfVDzW1g9noYgHNiihRqe4UD8h6xUnT9nZvYpr",
  "key4": "4npDekyNJUhwHpB4MgGDrFyDZfDWKkXWFBxF3A5v8xgjsSds5FywiLqQY6RHubPVF2Szq6u2QcoNrC25oqJ7RQEA",
  "key5": "2TZvr3dHYVa4Yq6GTvETCCVJxxYkuLSFLg4iSk6Uw9SdGZZGsGCUGhzCGrX66GaRMVm95cHSXjXZecUoJL6TpvrE",
  "key6": "5nFFcwCXv7QCnU54fto2QkhFhyGzyxsRtj6RDUiFf3zPq4S6w61zicmHSLnCknTqeekwWQTCsG6P2bEZS5NKftmK",
  "key7": "4o78Hd3s5uvucDhQX8nzruVthoK39C6FW2U8q8fQJ2NA5KH6k99sFUC4VKV7ym3tESvTbYB2pKSCAJXuq7ABFgEo",
  "key8": "2ZwzDZw43svZ4qRcrXUc2C5pVkKY74KjeGonEKBCdq6omsdiAZ5v4fUH4Fehs1Q1qHcRueQ1NDcEwxSmRy47nDhX",
  "key9": "3KMMPge8kH9d3sRxM3SnTPgm3a4fYUtdmZKoussAEvpF6HLqswWoWBpxiY7P65ABAnuou6qifewTBo4L8RQVWYHi",
  "key10": "3TrMr5whYf7Lu4e1dtXfNxg9i4RgvpaRHCeGBQiMoS5rMQNg57WLgiQ5YQxGrmmRqJz8FzApQw7iy9hHBwNStdi3",
  "key11": "5Ub4uPoAdsyZf1ktXYFtQDP5ZzCVHfRAn6gxRYYRZYGzcJYNLBj7tprFgvM2C3mRLadwtuiQPKNddULEqNSxTgrz",
  "key12": "2inYVrrwu5KZoRNw5BDjUai2hFwxiDJTaXzSsbncrotqpwsk6BiSedQiP6UKQSWqLm1SkkPZyu8HJVsTJX2B45t6",
  "key13": "8vYezgs9ZByRGFTzyi4FgwuvvLkJK141FCYrXVKgFYE94RB8vA6chTCnEHiANN14dvy3W3TrCHv3VbtyKMan3eA",
  "key14": "2W3CsNBBYgPiwsgymcBYYiKHUtZBNM8CWsYzt5PVk3WdsxSA63zLinWagbDdGc2xeu175Y2MsHB5kvcxyC71aip5",
  "key15": "5mwRooPsv9DqmPCZe3uoiXk3x1SzkYiW7jfjFBEKKEbNdyeuSgJgyLNAz3UwoH1u1jh1mRwvPxFBAS3jqkiCzbwR",
  "key16": "2mUnaDJcy1TTpqgNgNXXtyyLjCbS4A9a75h8A74JEhcLybjYEnexbK2xcaWEWTMe5PZJh51aY2UKTRtTGvhWNtzM",
  "key17": "5xNostQj8CDnBs6GEK98Ffo2KCFo2RG1hc5vBD2169zWCPy4dWp1EJVGvYXmRHzTCgGif5qK9jveMjKEhJRGVKWB",
  "key18": "nF6AgivpzQF848ZGHXMGVcLDGxS4pYuzzJ9jRbYyD9iqLRoYiW4Yq2tBX86nrvaymaCPaTWB3sKPTCkWJJBtiFN",
  "key19": "5vqPRDAFWGaXefhS5oDejBnthUd7kamZhoBfw25R5QMo268ge4fGH8N1QJBmfzteTJFS58A8By7QwNyYvYuuXvWP",
  "key20": "3vAEuaxNS2HykQfXf3RBwmCM3PtiaDfKG67R39fj5F3KuXRsRRUZNofqihfD41um7bA388Q3Y14Kuj9HnVozaS4",
  "key21": "2czURGNLqzrzegeYHPuZA1nNhR9VGnMijAvvhDt8xqcxrdvmrPiGQKvChbNGU4chJpgych8R3qhokMkerh7R8mg5",
  "key22": "85fW2VDd99gmsR9zb1L5vCrRA2omYJqE8nidDKwFf6srJgpbLtZSXxHQ46kNKLT8wxG8hahoVQdBQMsvLX34X95",
  "key23": "26e4dXuQ4MJmkwwx5hMeY8fDE3Nfia2c2inKaZg1suNScHP6ERAK3KYNNNQToUBjKEoRyDit5Yda25QL7oqhF6EW",
  "key24": "3HG86HjHumXZr331qr8KDVXprdSmc7MQbvahDyKmft9gugGZ86wNSXEKaL67hyZ3tdRsBhan6CazdoxqKVRNARpH",
  "key25": "7vGZNm5s2KeA6cwzkVfpBLqPheAY64mxocNwkj3XHS76HGgd29qtptUhRXK9Jtg32YrrXN14fqz8cVdcAfXdNPq",
  "key26": "3G4R4WjVjWmnCZ4kquE3nocKNWBBpQfTBC64Qtm9zea2j3srsXYXWX5gbeXjafHa3rV7Bky4nGaM7vRXR192x423",
  "key27": "TrAAxfzrunU8Cffwar34XCy9jtNrxEbSKHHs1z66Bw5FsATSnEGfReHTi9YoBnZTx3pQXunwqenXuRbGYN1Qrzy",
  "key28": "5WJj6FxSLvsUQ4oxntgwsMn8BaSfRgNXecD4uWCxJWe6KqJyVNMy1ocnnyHAMNhW856PTAcTjVdPsP8XzBYMfEQY",
  "key29": "4i9mj7eZGgkkiR1UWeCx8Lnr11KyCRjzeg7yvNLGo1mRNXUykqM6rJyfGhAYMEPJ5MqHMFDPqt3NFBuuXVczgm2o"
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
