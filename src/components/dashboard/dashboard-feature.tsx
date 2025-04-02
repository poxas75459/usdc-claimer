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
    "3CGptze5ammh1tEhKucB9acNNYDyipg4rsvthghdLrPHVs77PMad9aASz6zqckG7guCdo4dBLxDu4xnmaBaB68o4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3thYmzdgzektBSkGV8BU5zSr8g38FDtg45znTe5npvBt25Lzb6LVvMHLsrd2m6vodUzu4kdd4okGkiVaKGQRPNxu",
  "key1": "2EUyS51Y7njxi7mPKLtD8ywziLw7GyAh5u8S3ysehASfR5E5wVPozpxsika19cn2vHQnnxd7ML85ghAsT5s7fHuz",
  "key2": "4fxxLpyR3TtMu5xwQsE9PjEMJjunBUq7tRcfem8FXPqfMJdkt5XFAKUmSDe4Z9Cp36BwsNuP6AUF99kkzVKH9WqT",
  "key3": "2PAqMZq1hEdrHbztRsupm4ja78jt4LXPMgNVY86ksAwLhevHRVaHe4HXSTsofcFwD7Ckfe9WkcEco1qBgkDsAvXZ",
  "key4": "2xCQGtCj9bdqrvoD7z3mMtUESWJcwsNSXbj7BMwktydwoK4wrfbokinrsPMjjwAZsKRL4LPhpYPTWxwrsD7qjUUH",
  "key5": "2rT5DiRy6o5szCYTcH8mP4X5xXy2N48wMLyQKyHQZuGtuvdU6NAyMagUhUJShHqz5jNiYexrFPpK6eoN3Tt3w4t7",
  "key6": "5CVNEQuzUnBPWYRmpGYQHmu46jUuZDDTGQWonm6HsiamVRcY8UiQWAnyQKTKcdskH7wd3hW1BX7J5aNA5CUBpKqX",
  "key7": "x9KF8QwmAtquQAvbWUwJuTNa58UwpBSXBFHV8NF3KNYhadqx8F7R88JphNoUYN2Z3GWPcDSHhj2p9pbnWKjChuw",
  "key8": "2GKgiYu2fgV37SCNk2TRqZkFAqDgDdEUgPtLtLK5kMV8E8cSJSMMzWB6hdp13f3rUty2MvSqUnyQeWNAYH8eTHrK",
  "key9": "3xRuxNGcZDL3UHWmhkwea9id5ViBHH7iGLpjqPXNycbjnYdBNFR5x65TUhNYVVNgMBJFUsDX4ZEG5LnyUYLHBhDW",
  "key10": "2MjnmjxGo1FFuUiAqFY1Yd5XqND5ztsWYezuPomXSm5xC9FYWG26k9yJ7QGzA63e67PqJDkrbtMxxbxdb1GNgxqX",
  "key11": "5E1zde1CemVmLPqDkHq5itnGoaSPPmJy8mVN7Ww3U5nzsNNdc5gtASKPgBPKpfDSDLTKhqyvNTMURwPa8Z7W8byW",
  "key12": "5yhHQPDm32SJ1JY8AD27Ekke1XqsvdYUMx3H3F2eYuGqDkGExb1i4iR7MhoVB3KkhtySLKv1ZwgjnTt2bqdLoji7",
  "key13": "2sQf5sJZeHbpT1vqYcYBykMbQ1jNpbhQky4EHDk2NbjtNgGdFLuEeUxiMDfArqiPB7sptTfHsWXJiMN53S9HQPv7",
  "key14": "5CCNrKVvMcrEDEfkncR8zT1dhddCSNqj4CFair1UNBKWNck4rrizxCWjeEn6zjsKaHiqUUwzQR5JGwrvVVrRFcxq",
  "key15": "4N9LUuheM2E9BMgHy6KetsTS6Mv7Z6oMPZpSAxtduqSCRAD3VNZ4QcnCpf5kcLBZUduaG5kRYCxfqUSSvjwdBef2",
  "key16": "42GdteV9NgyzrHH32EvRLq5QBDugNnaDJTFSwPvz6homUQ8H9gkQer4Vd8jPJfqjzL88k8uz2fRPKmNYJkiFbGJm",
  "key17": "5sv791Jdd8keDtPgY4cRutiPbMnEd78krbjNtuYk3CjsYHkQ7uZQEVkDoacsvw6kvcAPPaEkKFDyTGJ9F2u6sLLS",
  "key18": "2nChEBiqrTeqJ8V1TEUyGPwDDPBXZu1brdkniAazX2L1GeVPvmEyPXoPQ4wujkUzbk3s7AohRPX9V3a4sdWosaL8",
  "key19": "3PTZfXoYs6DPvQNRbFWXANppHdZLWLESx4PHZKe8QVoya7qk6QbjqXNKvkPkEk2e53upGW4gpNN7DKpATRUUbzZ6",
  "key20": "3jJLUtaAorG5g1ixpBLjJvTpLgn4j9m5wxdSyj41ePwEci8yfbiwugBeFjJZyvaDUAF8eDAVRBkYVYHFjtvbcdSQ",
  "key21": "3hpMmPVe7CPMbJBnrvBMkSqZYtNq5tn3Bmo3c6wJPtC7ZutX8J7ndbmzu1o3oKKRC6pzZm1fLT3RsUrwMUQAhAzQ",
  "key22": "36vc5kEuuZagq3Pkwd2ufD6hVZiV8XRubVfdLzzXagNtPD3R7H1YqaKKpDWvnk1ESWnUSunNMcUqBT5VhqT24eYY",
  "key23": "5pGevYjvgiuj89r5iSjR5Xh2qPDzZRF1qGdVjMMUvW2BTXWHZDtLJx3FMjoHgH3nkxhAigJZBqkH62qnRJnknyPE",
  "key24": "MGcKD5Bt3y9n2BtwyETuXvzNnaFapxB6HYncAQmGkgqpJHeA91ayaBpWnufqWm7RBNNw3U5mP1WuaerDyizWXWD",
  "key25": "4YNaLdtnwJA1QBMryE817GFqr3VCuNrDP4RD7a6RVYvUFQqQSjU2Co9Feskusae2a671n1UYxMJyTCT7jeYcJPnd",
  "key26": "61uChjqNWwV78GLGWptJGBpqANpxx41kEpu6WmoUQoEQFrSj2hPMSDwoFkNKgJndeqYSoHNYJpRSTHej2SwaBadm",
  "key27": "QwLRuPkCGUnyV2oNAKERgs9wUs73wLCnWKBs1W67gYK54R3gVkMQ79L9HVCH3QYmgM9uuCWVE4HbSDwfFamMNfJ",
  "key28": "3LniCJHGwEiVVkxnjuE4Rnrksr8ZZxuTNkuqcYSvxLjRrjVagjjKCu71MxnYEPw2sGJdspBjXnpnou7a5oNVncJ2",
  "key29": "37zYo5spZ47NmZ3DEo2oTAF7DLJ4v2oGgtFtNCTxaw9sy5Yhw2P4HnrfbL5YED81BYy6EhSZsnfA63tXoEZx4BH8",
  "key30": "5waUNYXCwUL9bE9wPX2RSoWnmtmf4mJBcjUcBGGGTzEGWm7gpbMrjEfcExb7e6uoKnHL2ruCDRocoWJnTGxgK6ox",
  "key31": "4wrGpyssswXLcTPSY1TjdpTYLMZz7Sz9VXv5S2j5pnpQDvWxEZN55RFSLeNPytkpsQgFYH1SHJTABuET6GbuoQ8j",
  "key32": "46NmNM3i8yY8KZxt6Wvzfw3dPUUfYN5GvBkkDDrAtcpDT4cXZ25Kh24enk2iDKAxCwcbpSY5CU3L6gQoE9aZ2voi",
  "key33": "3nKWiHFbNCDQbPHTtW1oqFp46Mdk3CP4VfeRHfCdJMot8XbwasVwnhXcENTHykjbgxGWhRcomA7SjjfWSnavS1ZN",
  "key34": "2V4EkTcawz16XKpiKc4LJHF4w2S2fCs7k497BE2m6iCWHnq83yXb1sQ8Fpwn5Gg8gzR3g44mfeHGFJHc14zk4r5s",
  "key35": "5Qa8tYiR9Tcv9QM8zJC3DVNTuwcTPAGE7pANHeSjbXnxzMGRB1aDfUFKAatWUmoiCSQKXRshUK5goaHKKXNpr7Sj",
  "key36": "3HVSfAVQ4fnMzArRxTuopS6SW7YonVQSvMxaT8ugodf1q3GVoh4nXCxyEJ6n1Y9nQTXTQo22LGktAZNSAtLtLf7K",
  "key37": "34fHCezv5PeR2m4ha13LmAcfoXQREdo1t1JMopbsg9R5XZG6YfEaChD5nmyu7VtSDzMRTso8ZqzYiUWkKaaQUyTw",
  "key38": "oFTqGQpjtBcNvHqoJ1akGZKuFH94TkU4fy1MMxZ39QVEZHWGwbabqdpzsxQabTQweMErZZiUkX7LgPunjgfcjjh",
  "key39": "4gJxVPUgbwAt7YbffPrSQ2xDJgxfvbpEXLKHrfWkGcPmsPBnVvqt8zEau2aP7n4baYfgTgz3svx98LLKWCVrPWve",
  "key40": "5LoPn2WQwDh4dUQZkgN5FGmeuT91AaXQVoNoCrMRejpqQUA4HbbWP5LcapnNN63ux3BEedRsBGSRenoDYoRcaZoq"
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
