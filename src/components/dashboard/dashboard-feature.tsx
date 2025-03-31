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
    "h81oAW4uueww9QYCKtv9imbanqwMuXd69F6HjC73fdtdnvL9BG2YKfMN9nYVtnad8fK5bq1qefDjS6drdRPWswb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25aCMbB3d7xdChEfR2WiYfJUY38PRxJbhSKnfV9evWx2ZQnjZRAkCLQWVoj2x7kjKgYYWhv7o93bVFsgSmKa3x4Q",
  "key1": "4gUJtnEDdHdoBH6sA4eeb3dKtacxHJ7Y9hCh5zYJY88gnEJxC5MP8fuasRfUr22k8Yzca58JaJvDxxvaT9rdPcJa",
  "key2": "386J2fYuQ9AiJV1qrkYubNaq6kzE3Pb6N1bk6scxHVoZm7wwhus7CGqo56GHPwhPQaf5e1bVcaubzdQMyXiDyC8s",
  "key3": "4DY15tTFgnWMJpDVSuiBvXiHcaUqtuUiAHoeG3JAYe4rpP837SDqnBoVE9S65pDY7w6uyxyQdbU8JQSqwvwNQC6p",
  "key4": "sAPdzphBUCvn5wDRoquS7hz4RvvMtWSpKFyP8vPsdC1DC5mJZc2phqSZbCU884mnq3XUmiskGP2KtfNv13edCUh",
  "key5": "35npJ8VZD5fzc3g6Fu7aMtfQsajVKeJjhnbjRopLDkxgfcLXvMCKHZDL8Er2jpeyu2vavs1fwHUp3j6w14CYiQgn",
  "key6": "5jBTiuQYRRbGykSXKHC7yTniQtbzs41n2Uxebn443Y8SWDNjKgavLedFCJsdyxvz5c6qFuw4h5yPgGCMDysm9RFq",
  "key7": "3m2dHXtz5hJQKYmmAoedWthmtXcWcXqiMfL1uG6HPMTcLY7XHmwPMd2cQ6bhBYrPKHdJcDkkQgFEXkaTvhS76DNh",
  "key8": "vWEwj6CYr68xukDVvtm6aP88W2QZtWraYm19sQX71jLsop63WMCRc29hzQ1rTDG8A5V4V8aduu4ryasYe3SKFWD",
  "key9": "5LTaMSwh79wsdDmXQJPUqsxtEbeGNJnzC32NHhz4jFrTGvDyrbTWLQNouavby5wHN98SshH7rAvuDisJ6CyrPjK1",
  "key10": "5bNmNwjZCG5Cwcx569NagmtUFiU69kQ6f2PPnzSWnYgS4Jxiuca61fuCZtH1b9o4xLgVZKjmuuTz4sUZzump2dai",
  "key11": "3GAXxFZkiNpPHWCc9ZAhEe2LzB6LnS6K1mq3kSJW6M5cwzMsYvYHJNXkfehBPbsierjub4xjDPbhBdrgko8DDTze",
  "key12": "3MMg66Qe8g6XAF1XF8SmgrqMhbCaC56tLB93s8KvmScxAhErKPyYCPS99Po6Ku47bgzoWj7aVPZf85SQUGp9vn7F",
  "key13": "64bhZbcvQmqfGfq88RFa3wzcVipEiPxeFLwjxmPvrb4BppVbbbYuKKYeSrb84ksQHvQff5YCcM7uuHTeCnYNh1v5",
  "key14": "5Es7UqS1ok944QFELfgB1GnBdWEejA9SmCsp8TLgfxR87kH8MzNPFF3g3CB3HKiLmy6gTBqvitSBib1Yb5GB6bvn",
  "key15": "3fgRo7LwiaYnBXBz7shwkKxh8FiCfAyYqTz678dRgBD7c7EHSYz38aj6XmdhDrru7bXThEEbmtTck39cHxRy6tWH",
  "key16": "3NuA4q1542pq2kfTmfqA3boJMdbe8NvmLyomJ5sWmMv2XnR5kzcv7kJeXA8Ec8gjR46B7dNhcPsVVbh6MuJnn4WY",
  "key17": "1umGUt2vp51gKpLxMr83kNLjkoJJz8sKtsJvoasESNVTeun3PLdvYWK8m6dn1WjGKByf7EE7rYkeU6rnwQYU2v4",
  "key18": "2J79DME78WTHfoNpUWPWq9n3CJ1K3wbA2HH8x9BrYBDGnHqrEXKdKFyjr7FkDnup3sAx7SeRGXjZLfiDqA44ESEo",
  "key19": "4yV2kMpxcCYtMaBXDPxYFDkik9JikiUpF6NQ6QSKq9E7KmXw5nS79JDU1ZDHwG5DrLrv7ceHUkmAYbgnNXGjxGWQ",
  "key20": "Up835zcGjoQdkAESit5E5geCCwsii5r9pnYmobStnHmttPnk71jVKTnr6sTBogjdjNcLReidHkWh55vpeNuAMFP",
  "key21": "WvhwUxRxy7iqeRmthY9S7oA7PS5e6dFpi117KKRBRtf5fHvRvbzQDQT2jEuwnpygiHFaV5ynz4QZ9XTkxHrstco",
  "key22": "2PpDBwq3iCk3AhHvKZVn9BLEV1cjKWvAvTJPTk7TdbPwLA2cQkLXrjvEy6nxjCrRVHCQ85A7qybZqew4hzzG4iwz",
  "key23": "2uLnf7Mdao5e8FUXnka3dYckeLnN55wrGCt7S1h1i69DfiNX17uNeVp7eobc1DWMAaLaFLBip4Xd2gYR6WPoapPo",
  "key24": "4RNxELfs2nGDSDs3EwcitD2u2n6o6cLBbSGdUZQbvc38uJUBmghLZsh9WWsTt42XYAse1Aw1Jm2Cj3yXqpQqa1mm",
  "key25": "5ZaH9cFRoDq28Vdqx9Ekz46Tb6phVrPW7MnCrdMDwtfRRYBymunCbd8MWHBA6zV3pnXKEKYpCepQ5JmaBNKQsSno",
  "key26": "5AuzxjZReodQJk5E3cpVvsnysk7mKwuvUbGD746kToCuKSc8DiJ6CwU3JdkLLnb4gjQNkZ5iYjpEcgJ2AqrPwi6n",
  "key27": "3sUrjSAes7KrXAa2xvmN7JuGopWebDY3QnsumAkNhWCcCC5JFjZypWRNAjrhPBEmgZwYojqCnKTSLjCxwExLZqdD",
  "key28": "3jYMGKJEAZYxkWVF6k2znRd4iFz75JNVX7ozhiZd1Jgzwhhv8Cyz6F9Pmsht7LhFanPeFeWhV9We2uyd1BehWXwJ",
  "key29": "49bGbN4VQrR9WkcXYRFxzMMUYc9D83B64gXNR1ZUCGs3HFaHcRy6MRTcesCBP2eqg61eLvcY4dyEfD51jRMRzeZ4",
  "key30": "5UCaBzxv2aQatBVfVvnJCKrbBrP9ja72wYkjpkzBmjutVeV6vWQTTb7fv2pSDsMoxoZJww17Rdc5gCQtGk9m82T5",
  "key31": "38L1BgEnPidgo5CoQJ53fgAW6HGhHtywKkW3FeGqRFmnCcPwNcTVyVHrapuPP5JY2r5F2e7BYx3Dgo98Sr1r5X86",
  "key32": "2XxgEWSFBUV4GaiAhmJDUveaQkV4MrmbuVfdBTqZENeoBR15ctKXxGcgX94J27q9aAmtk11UZToooRfGeipHusLA",
  "key33": "ERAFSQ4tvtesWnkZ25NL6RUWFfUxHn5kLrvsjbfXHLeYoBX9cRhrtBxzUYRiEumWqc9EagBt6BPAGGNif1YfWMp",
  "key34": "3L6MqTpD9qcPyzc8wPMTa8omnW1w639Mf2V3jxYWX6ceiv5g8FUeogTf6WMJULmFj14RPHtLP9PzcPd1za87HY8F"
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
