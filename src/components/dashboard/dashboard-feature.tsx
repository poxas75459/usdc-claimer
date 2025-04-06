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
    "AvAd97QtfGsoCxiNa6baNqQLLG2efBatA7rgkxyKc97jgVxHJVf8z1bNyncif26phijYSLruJgC1DGEBEfzdCdw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24U3Cb5Bw4iaCDQ2tus89y62MnzxnZ94nXr9ixPfi2RmmRb2bB3mtbKboN6faWhQAcnT4CFwxyvEG2AsrGN8tZyY",
  "key1": "xkFPnLursf8rhKjQiHAagwX2zvCb4bsYuGgkJobeyitExXwcK2DefbiWngZzswyYL33zK74cebAbtuEhckQSPV5",
  "key2": "5mJW2wEwCBKqM8iytt9ygydyrhFUG6n885eUMfTzFUvGdi1YP5yAKmksjprL7MytwuiSgZ1586BuorVPY3BsZLSN",
  "key3": "mT1yw6CWwBgQRFUXXy1moCuayMPLtAM9fJAcfsF2D27jYdMxT7Wo5CyzP9djc1MhytBXXjPPkhzcVN2A4FNWtxh",
  "key4": "2jJVVPnzzGVUeoKmcHTJXBKtwe5qpv53X9SL6VTPc4se1BPcAngTCuY2VcjxS3Md3ctCEPo3c6ix2r7BjN4aKF7w",
  "key5": "4ggfkPWVauqXXJa2uGhqF7o7j22fFACjK2qFrU568yMiwRq45RD6fq1L6ThPB472ETgiGcpnDDob9Jo8acHS1vxF",
  "key6": "52SzvgjPyFDBwavzx563KZDPHZTVqzWDqgxbTMXA44j5KBRyqnGbZFvktJWtRYjK541165MrmVSRYWm9P8cBmCAL",
  "key7": "x5rUNYRudCCrJVmQ1oGyinmzdHYkovcbGgbBtw9244s4TEkvEYvvDMJ5UYsG4c6BZQdNnjWgXemZXjuvJusKDDx",
  "key8": "Kjr4vH19Qqon6MKF4dSfez1XqV2iAqX8151ayRZC2izAZSwQYuiyShaVvKyH4jM1hqpBB9Mbbo8AXjf2RZUXYEG",
  "key9": "2v9F9vEh2d1BDgoXDHywU8k4hxHnTyHYM8piZDqKYXsbx39mkPF4QRyb6sUEUPJ311UxS4LE6baoeG8Z9guk8bbh",
  "key10": "3eYomHQv2fC4eyuAATufMdqTmTDPSsmRVRTNyYsHKMTcRZMkowaZcL74Xagyoin2CBy5ZN5UUdtcyEfkcyfZdw8G",
  "key11": "3EkUZZvBWmwNBXXdTL7dirrpaoNaRcd4xirzUYEHKYRqs3KV1xbL21KDF7rQKdC341VYCphrdntqxzbm91ju6Kou",
  "key12": "2kRULKpGTM9dkjxuTna2bfmQSV2ctH8xYM3nksMgDWXrGoNogybeYvPXRMcToKn6TBggs6a8suhQRLXX9x1ngdMy",
  "key13": "5Z5VKNqguj2KVHjZcrJcn7PCNjDdiSv8yZmRn3NZ5Mk3FPcs78xE6D2Kf4yBgYFgZ5HTMuB1VPpvYL8Twdz1Cw26",
  "key14": "5VF6nvdTvPyB7HBwsaoKnx8ex3HSenSRcdiiQ7v6ZkJDKEWviL7owrQgqWcoUSFFKEwdoduYbYSpU73k5wtJUa1e",
  "key15": "d7sycopWWnhGQtXR9bKiJ97azBYxj8FywaEAb9Zj4VEksCcpBRopVeWR4pBwk2FzuDkCC86bUoWY9R6McXSHZvQ",
  "key16": "5Uh33XAf4EoXH6Dm7ZQVdXLh8K356QvAvE53kY3yq25nR61kzn9UT4KJcDqx4wYWHFcygwz6b5MoYwwaLByHwvxp",
  "key17": "3VCEnEfhimi3XDFz1oGQiEmBy8VmzZx1XfKs1kBHzk1qWnxrDYFtb2WXwuTEnXLqBrSCmWEiyiXRGX38uPQcNnHw",
  "key18": "49etMHvKu28r8KdtgBkq7v8WrQS9vr9a8Haqdzmt5hJrrRqF5ujmRvkcbcvF18kUfSfucGjqxA9vmKoGyceqo2JX",
  "key19": "5aGxgX7rfJAkqU5s3R7B32m96AkcjJSB67YW7dVPLdEvSHoUXSrF4pHTbVLvv9NuVhb9iHCDgJ1qrbY6fBY2Mf84",
  "key20": "3n4fVRZuVNXZMf8Xsnwi7E2XoNMgQHu9MpnSnkgUwRBzx65U331nPQnXo9LWkqgmQFVRnaDcWhNSQPr5ZE65ritA",
  "key21": "svN5BqqC5EPw5McxYcN7Ch9Kkwz9dff6LJW2WNBw454zJfJtDHpETLKJw2CD67xCDZhim7j8HG473ceFub89fGy",
  "key22": "46uvW17h9GA9UKaXyRs6HaSngQEg681hoZutwic7AhYF8z4ZWcrjUy4ihroJ5f3otbHbgiPGuMuhHjTqiwQpnhaD",
  "key23": "4N3PqH63kRfwV3ezKwi5MjWTwmDf3Ew8jQppnopi478Wk5c2HQtc3WoFdHoyi8fTeJXY4kr6KsnG4WKVrMdBg7FK",
  "key24": "65PGLXXRueVDxmZA73kVi5NLmK7q92hf9FdQZe3ZPRyZMXqMPo1vdmoqbr4Ub5VqL3MBSXm5kYPdWQo1TnbCvYAZ",
  "key25": "2kmjwdNezBF65wa3s2Gx4Yhf6iffqoTPVYQ23ez2yFGa4zQPm4pC9cSGKWSbLckEFdgpreYjCbxPriNNVFYYxKZR",
  "key26": "4xwEwnYt67BisJURRaHiugbpr6RvEZrXyLrMQrbgr3VcCANTpuNSJNw2DRaMj998c3ZPTir9GDfBKhYSjeEEmHsW",
  "key27": "2pyyx1rFJAUHW6rgitXszdmefhvVAmarAdTm5LyV4JiTdpLDBWKAgbonaEerut68o9YtV6UByi7LU7DTWGZy4sK9",
  "key28": "53Jt95fKiFxruEQrR3evMaWTTHQPv7oVVHeivYM7PKnMt8fGtKip6CzTE1k1prj3YU5NYtM4zqwNMjztRT27gCVp",
  "key29": "3GYVoLrQUZ1ouM43SsfujqcvzzdHZWrvQD9WteyU6aVeidNoNxPNd6SENqDYEpnoTfoL7Fkyvnsq8ZRiQfUVDUws",
  "key30": "4RK8ZhudCcJb9hDL67DzofZekoHvxQXaeEeFHxsKVJbzsJ9uWvmYH5LLUv28Cawy2VuKZQWbqVTajJcUfRuDdN3Q",
  "key31": "2wZC5N3JaYNX4RRCMGHzFFKV8izPxza8H2LPrUqjr81neKcqNLJLRGmgUwuPdrBYWxEeTFRb6n5zBCo7u8JRGYJ4",
  "key32": "47CCoKyu5DyzodR5NbWyG9zrJWuzYfYdBjmkdSE845jGEc2XEmivxPfceKpJojRjd6Ubabkp8zS7f98AH88QyrXT",
  "key33": "LQ5yTwMocysKRgpXcHTg86wWEb5X4NDKxSdR7CSMmLLDJ8tgSnWydi4K4wQYuBpeGHtoC5b62nQj51mDe98U6M3",
  "key34": "2qWNe85c1uPvZNJKZxNn1rWzT5r9ws6TQrUnZEfUyL8zmz23X4PXNMwFPpLryM4vq4Q4BrSRJS81TBH398wvBQZs",
  "key35": "5nndJ5STmpryptBKv322c9rBMQta9x1uHvuGF8ixzVrpeX2VGsKgd3r6jN8eskTpEUAwxzsJBGoJgib6pRaj299M",
  "key36": "6tTxVppxpvyGjAP7Yvaa8uszgdWXhh9emkz4d2dbYutBt37W6FKHuAvKAUJ79gdb7iYurdE5ZCN4K4Xp97EnvnV",
  "key37": "5YYcPTshf5buccnaf83dwAEWoSfVJmbN3rWP86uwVmHfWj6tH7iHKcsYJt37tHNEU2Xa8rSLS4RBKeXLorb6HXJZ",
  "key38": "3GXvseqU7Mwxx5riL8mq4SrHfmDQZFE4k7VFBzubww7xS9KBjUp1fWE8NvnkBibimvnPPT9D6Bh36SfSei1PsRkp",
  "key39": "5NWMRi8TsCFFwQUwiyVs1XMKcEk1VAeBXWFGaDsZBBM4siuihKWNxFbVQsSBY6xkTNKPxUThjxh1H3fdEjSmh5T5",
  "key40": "5undQq5JvNNp5JpvGkjWnhy8n4eVm7Rpnq51UbxrSNonA159UBhAYGQHKmQMwXxPzvsuhmG8aovDvcYgA9exXaBw",
  "key41": "4h91wxgtaKYvCdfyfAT5Ssp5Sq2oxx98gKPM1Y9UHghwsVnck2bJgTrqzzjXZLx63JfwwDq79Lk6x13965h5BPty",
  "key42": "4mzTBQZZTiXREd5YYBnKKCkiwdNPgrus3VN5qjKGh4uqFRJmMSSHzFzuRf4xHGP56hSJUMW1ZE3uWyF27kegb1Ju",
  "key43": "5HPuVnDv88LfVJRkfpdBHroKdQd4ksSEghQYHTpeHQsqTvkV9K4JirqWTirfYbgVCekx1t8AxTGyX6SbeGBdwBRn",
  "key44": "3ZtXBw6zsACxtjbbfor2CDwJ9ZrDPjgdbPuq9srCG7m67zYXqB1HF7kyDnnHhsUXKjvWH9ZKTe69zBoRRQhwXyrE",
  "key45": "3kjS6NjcENa2gSwXf5qrtWoEmbAnVK3TbwCbRD977LGph1c9g7jVh18ZcAe17LTiW9qTeJpdoCN4xuNhS3aL2T3b",
  "key46": "3dgj2SVYZcojyMAoYqQUcqEbfGJ6anjA5Ws1opKbMwDv6eXtJxTDZ1p3jpt1LHnM6kyQudZ8jCxzQcmmiGhuemEx"
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
