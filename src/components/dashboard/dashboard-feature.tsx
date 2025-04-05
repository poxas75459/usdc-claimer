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
    "3CsUGbmDrCcDhFgyN2Cj3exotXJ1UdLRVqYVBqpAc7XMhSM3NhhXeAWNb1WRs7JJ5GwAtjXAx5m6LTps8bm1yFqT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bkrb2tPHxGf9xp1RAnw2LdgGoFPLUL2k1zb4BpQvy3P8AwrRnXVwZdWARiJm6FHmmFrEXZh7oYEYw5taZkrHEEQ",
  "key1": "3q4RigeGwo2NpLMWFbHAwqW26Lhn2CBwfg4jjubo6cQF4ASc8broBRhc9ADg27Amk5YVwEsRAKngTaf1SnNM3YXw",
  "key2": "56MeBgZ7RrKKWDzr2H6yvKWMfE4WTXd139WABRLqZgr5GtrEaGXUg7ZaXF1YGr3APTbdwheJHSeWuiAw3P1NrHiH",
  "key3": "zbM3dzon1TDHrjYVhXjaJrCqLfpWaRt1xRcY8gh5tS7CJD1ygYezMv3B8hLCsR4zVUAgdrXYzn3RQyu6x3zay7C",
  "key4": "4xqqGs6LySZfUiw7CLtUUKMoo3NVz6tgHKLUh3kv36GG3uedVgemWyzqEghj1XZfvnDnRH3R4nNoDjS7cCZvnmpQ",
  "key5": "2YxwSzZZLymAHKye5Zg5yTQM9jCMxofxBwm869TmyPvwADkvd3jDtXC23LpAaGGEvavB3uA82ihbV5nyENECEbGv",
  "key6": "4Qy4VfHqTEyDhmmcYvpe9Ag7HAuKTf9ibybVhPa53qCKpf6RBA9TmjaD5XvmTBx6C57LFcupeUTBKEmBbhNbXaqk",
  "key7": "3tNScv4nLwTt2NgChV2DWeypp4YM8M9Mg7sHHqBUq8xKhRCB1uBXtEW9Wjsd6NBTjMjiebWKSCpdUD1hsZh4S2Rn",
  "key8": "5NjafLqtN2Y7pthZaK9yZgZCHeAa1s6uzeUiCtdMnu5uwVpi82usRGWYbUsvdyH2iPSLz4yZtuHesZeyz6YR9KAi",
  "key9": "2JuFDki455BaxVGtA8KhoPaJMiXsNAYq6QFeTmg7HJ3qoyhJvyNwJGcb79B3W7fEG5aCpGnzeehsgS73EfFLPoVb",
  "key10": "DftuMrxafwA5Xy5NYNfQcm5dkugWrPtZ1gfZuA322QLZuM7xFbbrVLxtD2RuiqX5HRX89dDK8gRAWnGDQYiaQLT",
  "key11": "3Ecamxk77UVtxmP8PWYSaHkMtVhShzyoKjMJnNfXNrpczSVkFry7uKSnvMtyREpMfxbeGgYKyz9q1c35UHgwDPX2",
  "key12": "42CLaxhiH8E1u3HHQ9fRCPPethwMPVMMHb2HxfKhVMRpeiCR25zKfiU2XypSx2pANgBzgc6LN57MLJCrc8Y1oaay",
  "key13": "2iXJ3f7PgG5wCnR1mvwRCTwjLFTe8ckJk9ezqmAKWpG83sKnBQpXy5ts7QRSVQ8KU2SdTMnBkpEid14TmZELT4Wm",
  "key14": "5dYpJb2TFLcD2xdyoNm7KtezRBZrqWfbPyDA5BCecrxKXNyzYcW1VS6u45CfLmn32xiz55Jy27rjUAA7m5f7thqT",
  "key15": "g7zU7eEWRm8M6xdzpeAe2inbYFh4Du4VVChVCzLUVS7jkHzwxb5e8X1xW1HpWWMX4zkDpNqZpkW7a2KSyB4UNN3",
  "key16": "66wxbx5uXYErb6MM9E5eYZigCVqpnvDR8sf7mfByx7UtbssBMUQXqrBpFL7NHPGsGcWRDPwH9BCCurNcLZqizByM",
  "key17": "5UfAEcJ6SUCxN52SVAVzDNenxqWFrtPubb62XGjsGaagSk8SybjSTQAB4s46i488nAkANSYbo7qAwcRdxmPmQeQz",
  "key18": "23EgbFZt9nwZmzt6ACgwYb9HLjjucdyJxD3QMJrtN7YLxh6rcX8YzWXjcUhJzZModWkN6m9ZKywjFxXgFxZ5a6Um",
  "key19": "2eGPrxEPhb4JghP3yfuoauEDd6wnfrk3gAaXYDeya2CuRPZdUoD1YGfnt8E2HojeWt45GyPPcs6uWvVYuNm3cSUV",
  "key20": "591EaZj3dPR4XxjM5GzG85TnpV2Dfhhf8HWQ3sRkce6cAby57CMf6iu74vjNywu7P64hWi23eAQoB4zEQgeU6qwn",
  "key21": "zpkuGDUwVynZ5mJgmx36iiHCkBNumRRyBZskX95yEooMDYwqXQFcn5pH5eQZ836EnnPyPMtQ5QQ1GLDBkxKJMVk",
  "key22": "5r51bvseMppxxeNyxBqCeBodLefmft8t8hjtRbiXGLdtC3dDHzqWDSVGksWDbGiYprmFVq4FdMRq7zCBNVDZBwWr",
  "key23": "4yjQzHrxjFgaLkGdeCWFFBQdGFF57TNAV3ALjEicjavG8tbWcQHYZQmZnaVjEtXHqYyikh4MP7PSmpLnkq9zdXz6",
  "key24": "44sSjFMo9Ux5NUVQ1oU17i2DSDHJePoSE4kNNtvmjPWKwATE4HDodFbopp8wTWiaTMiiGmUwCn4zgnSh9gMdcr91",
  "key25": "2GBa3RE843qckjrHa7c6G1bYh4KaEHDqyDTBHbeeTsVjdtnmR3T5gJvRgxVAk93uVQZU9ZKR9VRkLSD43V2SStAD",
  "key26": "5chbEzb7jrskfhDU7czxkXXvj7C4ctDFLEfw52KXcYeyAz95XuWWASJTUwDGFhM8bZkchoKp6wX416KVvRb6u5he",
  "key27": "5smWLMJ2JCX6dvZRSJxwuDdYQMRxH2PNcJDR312bDFNEaMfmv7qdHH4eVr5i23cb76z5iTPvohqzRAGjNtys3QZJ",
  "key28": "4gectACyjiNTfCuara1KYJdhiZ4mFVq1bLKGQ4TJUB2BpSAXHRpxwhFZxHJ42rdnWTwzWBQ3steeCSN2Tj2t1ix5",
  "key29": "jmQTo555A5KkL9idJkQGe2FVsi7dNSt14RsRPacdg57QHhPpV7vjCjeFMKvbRLTDcqJaXNcxkwBRE2KWBQZo9wk",
  "key30": "3jD4QBmjp86ANNeBUcSkZCsTPJ2SYzD47vtFg6WEUdVFt14pdz7AyUt5zBgdwQsJF5zjKocfXnKAKR159BDSYJDw",
  "key31": "2NWxvGt9N9pAJcq7kobh2SvqoJfayKJ13Tug7FqitCZ3HHT7w4GorAL3jNUrUMkuNiVcoK1fFcK37vR6EfQL4Q3d",
  "key32": "3PUhvYgWqojqQjZuWffgWc5UWtvofyN7gAQCEvsCQMpaL2fyu98GgBAcM1jnWPL7X2jY1uMMhuVqeTvmBseDk4B2",
  "key33": "3ZGUaX4zrtp5sah9ycc2nJbYdXqYz9MJ26h5KXf8RczPnntuujupuPxQBhdo1zQy2M7kvjcgSr21CRSyhbJJycSd",
  "key34": "2WhLDFiGk5F5M8YmW9Y2P9FVYZWftfV5vpNc3WikFa2ckmUM2ZKiKmPS7ZktR2YEBw1mzvffAaw6yUFPkD8y8Lwo",
  "key35": "hijAjmkLGMSoRGLs9Xhmc8k8vgVHqPbDGZoJyrB5KhRAL5MnvwpJKb6bWXi93ZB176xZsPbqHa7MoSnCQH9Wmf7",
  "key36": "4Xc4YNHbwcQNoCeqimfMd8GH2GcjzGX2Umc1wTYxBumJZZmH5maYrrLgD9DUC13oq5ZRP9Z3jNaNYQSHzeGD34QN",
  "key37": "5N1Lqv9B5ZnGMyJBK473AZwFessr6ogfmbAc8LZAE8omZe8gFBQZtH5UsZ51JxWCGo7op6ZU98JNYECrZJ655gVj"
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
