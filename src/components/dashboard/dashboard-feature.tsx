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
    "5fpaWN1xm7DhTjdxSiRXmrp53RPvxtVeNFyANfFRvA25rLgDmvJYzP3CUSzMiSYtbyBCUnnMj7Qfyp3ENqfh5pid"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tGACSQJMiFMiiEUVEHMzUZzy2CcrPgpV5z3DpRHccHCBiDeGDQ7vWXi3k3rhFRrJJa3WVvRNEBeBmE1hitpFXcb",
  "key1": "3UY2h81P7oRFZ34J4uq9zQo1mDvqxvu9N6gi3bLVibL7fanvFMPkR3wKmHon1muFR4LyCuJuUDBF3RZNFZ5zF4cZ",
  "key2": "2P5RQZZrGbj9FrCqRXTKKXJV34sU7A4MAUqZiqq7kc2bh2h2whLkxUdY8MW5umDEnkUEzXHvYxC5dxVbvfLwhzAY",
  "key3": "57RgtLMW8T2sTBTGCFJPnEHMPFeqs7rU1T94Vhg2XUAWArUVS89VjYygGrEWDFKtPJtuv1juDZ2AbUbkgvfSn2cx",
  "key4": "3jYZyVQTZpqUqnygfD6Yh255cfdzqiX4faKCgwcF9d1SzUByPpYWJBXKgYRH8kXt2aqYCn22DPVYDbLxYCkJaFkX",
  "key5": "ZFugFMvPmYFEdL2wZjT2FW4PE9mLFMwmeB27eeCfQaZqEvk4kjRm4y6mhnxra8LcVo9Rnmb7HUsr1QrfKfQjokK",
  "key6": "62bwmdE7nsTNXxVmeLfXuSaNeZrURSrKRcAA3umMYiB7FfSA8iDWHiAwUkU2bfVWZwWJ9mA44jyxxgh5tJDEiEDp",
  "key7": "4fvm5SNYDSU9XwXsWbq9JPL9ZEMmTQuxr5ETCsChPPrWKfHpMMY9sHnt8buoDHfrganxhcAT7uQmfCSLATg41NwD",
  "key8": "37XtQQoCooJEtyt1oY17B3BiehB7ECzD4XEpt4BoK8Z3Ech8Soaop7nSKKcW3sEmsrGvTx8kWLMLMpk2tGSMoKYY",
  "key9": "3ZSR942YSWPZ7rQqY4vmjKxje42Wm5yF1GZKxsbnQ5DU2qUUD8BkipizNfFf5Ku7WiJ4Y4eZ9eoguLy63JAAgJH5",
  "key10": "BRxpu9iXxg1U1eJV9QY6sFA35cXpeabjDuAX8wdBNofJzhqJxYfHqiTrL64Vet6xJ3EvczXLT69svXnwUejmeLp",
  "key11": "wVyviN8b2FoHTd5Gusfd1cudXYdM986HjY9Y1tFuNtxq1D1yunhFrkf56ocuuAV6BRcL2FyrpgzZJPv489j7Q1p",
  "key12": "46cAye2Ckc44ekzyaQ4nFvijTjrvYKhDNcPkYUQ2vVgsQ8Yq52dovuy2g5kmNt6ZEhhsreAjcTK5o6Ns63jRh4y3",
  "key13": "5NUT9jfpdtcJbwbkxJtL91f798HtX8gFTxsCtu5NYpCSvHQHxzaoKV6T4imikfCeM7JTvLfmQHrubW9zapVgduG8",
  "key14": "3GeYgQDFgudwM2PvGb2hGJZyBqKeaGeNwPHDkZjfxrDGhwwNuDXHH2kxQAj2uNo69fc8xJnufnvtkcybTcfPj75j",
  "key15": "GuLMsy8ZaKXFzwKCv68EJd7ScWytfaND1PbjhoFdSsQMtk6EgEc8HNvfgaservPFMioAzMSyhEyeXLKT2u84ZDF",
  "key16": "3mVaD7YbngiARazdCMLpRNGpbwTcH1HDCN8knxk715THHVjmbPLhTTrSqxKUoBL34YXUc8CpfC9JqFAPjA7UKi4N",
  "key17": "2qKdwuNaDG2VPKp5RRLY8ma1R3RSUTtthDvn8kNwEZnca8Sd94uH3U8L58NTpmCZiDda8ZtPwtwxfe8PGLX9FUDX",
  "key18": "4hxmamqVJfei3qFTj8RYyGpm8iW7MBDH2Hnc8N7pEX7k6K338SJag4SrcjWhpKy7a2j3FSbvjBsd7CCpxqUq9A1o",
  "key19": "4S6RT1gcRJ629rC9KgbPkKwLnt6LseBJvbwFM4o3Zzs9Cwp5nZx4tbQYiHTMsMJBv2KPiypLxtd9BCBLW4Foiq41",
  "key20": "62bqSY1rcwq1855ySuz7GK9un5v4KHoqq6N52Joe5fcEwWewNdZKGF7W1Ju17cBvmEf3xvn65TN4dDCn78hRVW3Q",
  "key21": "5GZUwwg8szBJDPDowb1KE99wEPMSmPSNk82ZXzZhFA4M3B7ZDiAwTJRfRkmcNQQpKkd1NcPHeEGb13jWo2oax1hy",
  "key22": "2gKESJuR7yiMXR4cFPqeA92jkCU9Ea6zo3YxcYwsifrCAmhf8e9Rd1dK9MkrY48XH5UDzRwTxWi6SjZbJx1i2WpX",
  "key23": "MEeFjQbYmcqTGZMid4JK6VXAF3zG8vpbmZhX2WcJYS6F3uoXvP6L55xd3y2m2KQz2N2hyfd7nCo457WXj9yLm3F",
  "key24": "3R1S52RuP71psoqPCpTSeMTZQfe96mmf8omaZ1zd9PwwTba5BE1j2JX35tSz7sk5B8d9sVxpzLFi16D9V6FwSQR",
  "key25": "3LtgVAJEhZNx8nuHoCupMzUCwq5Tn4h8YUR3GwyN1Qysh17h7LKXa54WGyNfNqvMExtJYjqykZGHhMFGhacBN6uj",
  "key26": "56HXp4tyP7G3SqMB5xHnagPcwEpoWAdrhcKzAGRmhBjsrDXoGfnrpP1QXdeKF8mmMbn4zTNiHhRsiaZXatKUTeXM",
  "key27": "3RUDTL6aW1CMR4Sh2DLhqpMiavd6PcjjZzs5PeCV8nVUEpQcdcFPdGWnqKT9TY2vBjMbJfkYuwJmVNbseCTogmfJ",
  "key28": "2czyPgPiRDxgy4xsh4bcYY3PAsJBc4KcqnJYknKtwfX268iyu6FByF1knLkthaf8HEyovCqUmBh2DuR2hsPDqjjd",
  "key29": "3UTkCVVYWbugYye529qkTv9wN5J2bJRUKtgh5fjYXwKFkQanfJJ5iKXBWFGhTQYPyzW1cYqHZw5M25g8LcPm6ViL",
  "key30": "E7k1nJLav2uoPtUUkDKbkbzWY81RQuNWNPqb289Pc9SWSpHiLHDt33dAko1esaWorFExpLacA7Hxkpxg9TLHoKF",
  "key31": "5HJhUznrzDzikpWburujn3CuKNtHx78kuk3YRfMVC45FXK5SHLQzGGbbEfR7R11ucd4aFc1HDwdhNNSVokcNrvzC",
  "key32": "3XUQZaaR8kQA4ab5tuUWwmEmXd7zhfVsG35aHuiMjsQudPvyXNCspjd581JDyR2fSu7Ft58fZy5vSJZPBAiUGjvw"
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
