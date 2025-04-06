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
    "25DqccxFsXwRvCPZSB8B98YNsxmFRAe7jqAQRCxsXEJbkZ2jMRsxmLvekuDmSCi6QHbsTYbn3Vwt5kFWdBpPQuvd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YjhmmTS451GY8razqyHEpuaTWcNJnfi4D4ZGtAUvbXJSPsicvUo9htGirGUa5odgeYzMhbPQP1ZRHZL1r8o1M9U",
  "key1": "2MzZXr6cHJ7UBG2xQtEwhFX4oadXbKy6xXyrmswD2TNhwwgE2esUsRMCS3EEuRwxbsL1y3oPJ12NHv3ww6QbSTzK",
  "key2": "Fx7iAkL7wNk6PwV3UoMRB47yhnQJAV7WajcQiMv6r1Ttvp6b3oKrUFyCG155NVdZBJonjwF6r9XE7UsDNfDuVvJ",
  "key3": "5wMZ3hV8SFY8HEpirHpR2Lteuhj47sRAJ5QunPodhhhXLdZXKF3HHh7pZbaCX35xgEoxfu5hLAs2JxTgSKr9b8aE",
  "key4": "depYjxhHaQ7gKhfrGMnNJChwvUhQNoP5utEs2X4ASBo86R9GwziaaurstrjVBY3RN1fDTTHKChTZ3Hyv6Ud5H4B",
  "key5": "Cy6EVQuMBEcTsotwTA4oCKk8vuwciZcmSXQUvkhEinznHBgniNSd7JpbFkSowLMK4nTXH2fWHT7Jkf6Mp8f7hNM",
  "key6": "3KseXXJXSYF5vx8kUZckDUj3LLjG3qeKjSoNeNHzY7z38am3DQxKbVvBZVXCSM3kd5zM4nQY2Xxxqk8etV7oTcmt",
  "key7": "61gPYMfqcSo1V7sGr9A147vYAm5A4ChS3rd9uZPcUuA1yqeHfPYc8aw29sSFgEYALGrMTniQs5SNhXkCNuwiG8s8",
  "key8": "4MkocRJ4z966BocMSVA6tz14KGDNd6DtUjycKhC8e9S9ETy4NwJHczvVciak9VW1Q9gu42wzB6mPG6cw12iFBrSo",
  "key9": "2JWykTZeBnV9bjuYAkq1Uj8txJgAHJKYrEMS9cPbQ61AmVrqrxBY8r78MTZHiqjKKmWmRZ6yYz6fqRfsNh7jK8Uj",
  "key10": "5XcDaoLyHH9HowjQD6gE6VhuNaYcZ2bTKHbQmXzZb5zhTtWrrZ5xrrrxtLrQ8ZyP5MVL77kdamrujnDV8M9CZovX",
  "key11": "2xNMMvEtU5DDzkvDwq1j8651C6MFg2fb8LZA1h4xGvSBSu5GJ7SwTmTNRP2a7T4veMCWDg7bKcwV9TKZxu4uCod8",
  "key12": "5HGYBUhawyancgomnrpuCnv886zT3JDGkUxpLf8VinBS7kbnNfc4cTtkxQd9SuT3usB7otz4TY6tCXUqZhhyHkvV",
  "key13": "36A7MjKrQBwiRPu6BorQd7pCi5VijbWyDRkFGJgwDapLNaXPCcgp8nLAFj6ADcNX4qdycMJ2jt8QJXG2wAGX7A7u",
  "key14": "5tGLfzEHKTfbZqJEAG2f6ueREPS36sNbpQrRXhwc9PcnMhW41bktxqjkfQFR59e755Cg5HRdT2rRMeHHQzSFn3X1",
  "key15": "5GoTwrAuNk63AraXFPHcZACtWcZQYc6MeQFWe9xnGEaPXNyWCdHVRBSJoPxUKh6jBxeB3GRDrdaesTqaFbMvm66",
  "key16": "LSDmu5CQzYLTUNPuJDkPAokwA5YXfhU9YjtZsUL2fUqsCtBF9aYCqNinRNjpBau5Tu2EQxzxhauTnQE4a2dfRwn",
  "key17": "2NT6Vo1DgrZwTTcZSCdWFqvoC9Z9MTFH2eXeNeeDY1uDeGpWxpLoVmNKYNWPR1DpE3GwjunqRB7vT4iCkwHwThzs",
  "key18": "5j3FqdGMXWqucmkMiaQCZac8UXkg3jjj3DrHGEtfmPiK9ST28CMWbkK4XofsRwzATvqCP4uX9UYadjj2t6z1DjW7",
  "key19": "7rk6XQZxcRFW1kMWoDnLbSKAGBw4t8Fu5ibqz8UdmhBq2YXNpKaGNqs1AUEz2oEuS9hJeQrUvy1BPJAakcVACgi",
  "key20": "4EHEK5kuJsLMUck1WSNM9sSbHiXHTNXQgqS9s9Hi9Nh43nox3FR9Nd8rHr8zB88i6Fs98PsEAZCLfGZj8ym8fxj1",
  "key21": "2Lbdp4kB5RBTrqrBLNwGgSKDU7MHs4bg9CemJAHW4dKCmC85rP9RMCTdicGZEZmG9LisT76GLNW2S3sezdQbUqjx",
  "key22": "51DQTLQW3g46Jw5KvxqV6EiH7f9RFTmEFBnASdZtMe4S9vHdW8SnpaMw3aRoLmiDCUu2QdBeYS7QnwmpaAnzKF27",
  "key23": "42yCq7mVcs1B2af6swKaTwzjVrUYXDuWYYGQfj8x5X2bYSPf3G1NBmddmkegJ7fJdT5rnMb5iErqmgUDrK8kDe7q",
  "key24": "5JPNFYdvuqTwQmhsS2uwLYnX8DnymgkCC7C3PwLAN5jNaUK5ac6GMZifm6DdiU449pooV4ciJwU5jXifcZ71mGno",
  "key25": "3Xs9YsetLVFCcHbD8ZP9wMpJNd3weXuajFMPTTfMtUPSjkvNyXkuN3ZUBMMxp7JKdcp8vtdkeyHYnZLgWrgDkmCb",
  "key26": "7uxBRnne8wLPVMgpBgzWTp7gofBwcqjNWFixDK6tWk4NxtAjrhLSxyoRxB4WfKwuWMbZiVXaZRbBXMR88cr39Ky",
  "key27": "3MayeU5E1S9ViLLUeyD9Uocm9U7CkNkRw1DbibWn42ABSjMRdv56YCqzZ3bMQrAx2cTKjMkMRCba5aXeFkAsTpLY",
  "key28": "5NqCBFPhXKwYAefGngcLS9ATcPRa8AGrNzcxHiXqBxVJQL6ZejuaTUyqRY6fxXtnVakgoGhPYT7x3acBRZoASe5e",
  "key29": "1KEhp9Kzu39tmpZd9Zx3TKZQF6r5zfonM1w6TdnntHBXSxPFtMwhDnmAEcXjr7UgWSvDGp87tqoq2py1R7HdFtX",
  "key30": "5wEEgaYJm8mYj2xLC7XTQsErVEd56qBpc3tKynCbktPZjctQht8kKonoc6bFzz6g885KdnPYRoLeTyVQCGDpn2o9",
  "key31": "4z1iznkdjQyviHFKcTRD6DL2AaBfz5bZ262t2mPC5N2sBeqZXGsm1YdEK9SRFrZYHumuyy76UgYiBpPev3uFRRvH",
  "key32": "5KxBTertRYKFsjy21ikfzfm8ohwp3GbLHpSYUkgmLiNqPRUUNC6T6ai4tq4icX2mUA1Z71Nypi9n3WD4JpHxTUGf",
  "key33": "2jZooXZVpfWJDDwWPDjbRt4qAeK1W5vWKsvHTVGTc9fZYo8Pcifp3hTfuvciA3qcXCdF6B2ma1gpFsiHcH59ST1x",
  "key34": "3CgsxBXg414j4yxydVCu7fGjuw2LhEZ8wWGhL94y2pF58GDjBjbdhBZWNHbTwL3SpjpPBzGaSHAZSG71NLhv9m8h",
  "key35": "WEkKu68KWZUrjMUCpiGKAjZ8iM1x3F4Jt8RVkafctPPoXEq9u8ULDm76sZbhvBozoEb8sQa6mPvGZ18frpRDwDx",
  "key36": "4ysyP8kAfo6zUWKsgQGaz16ciLcJnFdGUteXDuuJrsM9dsv5NmENUdEtWtDVdjE3oEwR2KM6C9c7xq8ZoLru6nPx",
  "key37": "2D82SFzSNdUqjhUCnNjmD1yF91wDJR4vBASaFV96E3RyYHmLTaCQABiJLiSZnXZsydrGBbY8vafewrRVQND6xEuV",
  "key38": "33xvDvtiTsNEC93dQYAQ7j1eFWXGw8Cq23bxe7kUWyJGrNRkQPmoG99WCqF5uAvvVPehJBfWFfbKMjSqng2MqPLC",
  "key39": "5395csfRskaG9rfaJMitqdQXPUuEwRVS22f61hnmyUFsUMosNub55jFdbN4Mt6MLdHKnQzL3mW7jBE2muQd1HDqn",
  "key40": "U5pDYxBqwXE1n33CviJLv55hWN6zzDbx7ujAjy2WA91VZy57mp9zice3KpkE8rTRGEHRVnxS7uhBpLomMVsyGN3",
  "key41": "JDrfJx3iBRjxzLnzfSx5nnqpsC37qF3LDdeR9vLkQpbDa3xCogmm5NdQspJbTNzZfJgnye1QYrRUozuvc6uF2Xm",
  "key42": "3ncJvUWoSww9iF6rAefGN3wGcny4kaJ4PidDhhhZ6z2F1FmtG1HYYAL2H7PJ6RJqqtKMY3v4XB5rRSyzbZ4P2dxP"
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
