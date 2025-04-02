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
    "2sFACUyn6Y6keVFBME5S4HZzcJhTSjsPCSFMMZ1Hn6LgrQZFhyEx3x9igyix5mf8NGR2zwpaN16VgaznzVnFcFeH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32q5ZoSzVEE6uiEETWVY6m1JPWrJjGg82BGLRSnjJQPSy8HkKLPwjLcriHtb2ZfoVcoPYAqxNQt228QJtdukp3XV",
  "key1": "4isibaLVDa5kDjqxn3d2T9eBNneuBHbQBECD3P6LUd7g2ds9sSbK91LXvWi5s8EfJYpugm6VgZDv6rW4dYvsUzEt",
  "key2": "5oossvKxW1Jg3vUyvBTZcpZxe6FV9xAaHssv9eP5nVP3F36iFkeC5B3Ac7v3H6wuBQMcLro7VnaTkbHdCKRyXLB",
  "key3": "2buzoFDczAoQxYT8vvTUgwenfSRhT3rhqfrC2PMhLb35TBCU9Kcg9iyENPYQ14uEy6GzuTD2Z9oU2JwHztdkMoTg",
  "key4": "67gaMyCG5HxycbysXDGNWJznrtjpWnLVNVasZZ7JLLw2RBYtWivJqUpuDB4RiUs9FxieEzFNdJH2BqRT3vzR22mm",
  "key5": "3xfAKnJft4vPJANRsyhLcmB6qnhRzAkutLdwap1CJUSPERjN5869ov1bWdVmW1HWoFmJEQZGF8maUk6D1bkvVvam",
  "key6": "2S722fzrissX6wgXDuEdGAc4UkhbzyzQewv2mrboc5eDrt4gCiCqpUuZLzVZ9nfHDj9m3dB9EWDPGMehsANs9yJA",
  "key7": "3oyCWeNtURSsuMPNA1TqnQ1ztWNZKSrnLnV8HyURdiMUxzpDEQABcY9gCAiA7Mc8GcXDCfkrpGFkzWRaoeTvN3zN",
  "key8": "3gB1nVhm3vb8SKdkFiQgztpc7V4m6BEAbQzo8YXSKHM7taBbqpJGCvuetdHXUfNBfMGHy4CGo3JBmQ6k8CF2ySaP",
  "key9": "5d4HDqhJnBTakWeSwhUBSGVkWa227KqGyAgRVGui6MqGb2nSXSFBwc926dUA6jiFujhgdf2rQ36FKiovkfJGP365",
  "key10": "2QkU3p5gtTSjh3ZEgLJN7qjfHBuzi5H4SYsYibpsbKyxdf82CuvPV4EJEh6D95nY6qn6qmMSXfLdS5Pv3Qi3yRVV",
  "key11": "5wL6h7tVkQo4ry8iJhQycMdDuktaNLtA8YxdskpZSeHruqsCruLFBVTb4tUXLeBG8o1bNsxYdxRXRtpSrdCcGkg6",
  "key12": "4sRsXxaVNQtccNfTeAfqyZkyxzhgzRoBH1zFwUK1htksixQUJLHvPGeFXqDQgqdrve6xXzc6EsNfxVUq5rQcJiwP",
  "key13": "4fv3vMu2j2aLYx7a9dFVv1xwpELz4qVFKYdwSxiGosZP1eDQEGUvaFJKufNrAPoaBWYv22U7iFFYU5o9vA1KgGCY",
  "key14": "3yPKkVpRM2MTZarwbhSoL7aLHmQ1aybHXzvXTsZjGFZij7tUNHQuE2F2Qfsto98CCHLvkaSBBWgmagntHFt33Tpn",
  "key15": "4LUNEFRCXzPidWKPC2ivaZCdKKFAhV3vRdnagGmoq5xgWMv15hBA59gayr8eNAzidSkE8ETD7JGzdnbTviJ1QSgL",
  "key16": "42cwLPUw7tERUk3QTtGUKutxpRLFDRtezQe6QBxYKMCa5Q1AgEGUoSogYTKqMMBS6cev4hbh8VwKu9VqNmx7BN5h",
  "key17": "56jQFKYzfvfBU4wUAAQa6gLvLE7y7KCmwGMqQGvjGyjiH4zXiE8XwSAiqepcNEtdApjno6duzT2pAoYuWXFmL8df",
  "key18": "4XZbJ7iazyhRSnSrEZYErccsao7BiQbe1VZtHd3mp4nJE2HBnja9Wk32jMPCHjsuPDLiPMz167nKBfAzSEqNAGfL",
  "key19": "55GAgw5Pt2bg8y6NiEPxm9aKGhZG2trQW5smb2UoBDb4nwhuH9mPk62Vufpy9wUHHZJeuwy83Ps9rSN4hKdzuoEK",
  "key20": "5n7mmE9tDPHXicpqZNaAcBEi9WZt2qGTpb5srKRZ9QrUAHF1TGqVmpPiPFbg5Ppyz5Xa84kcZfEdgAMPqm2Q6akU",
  "key21": "YKUm1dXZPfySHBuUN9RqhWh716TGiTEwCwS5rZDm7BT2w3EK9Net2Lh4uQiWJqG6JbLfVoudHGvcTfLY1M6MeFq",
  "key22": "2GCeHCnqRzk28ka73ZzbK3vo32F8YiSMmc5MyoEm2HUTdG63i6heATqLCVx6X6LWTzHWCSbSz58rqzoBV9wj5mcB",
  "key23": "5q1HJpHMqFGzxCh1YoCTH97dtBd6JXBBCD5uDgett8R4QQiwWJbKi71Mpt1SjWw2U6Y74wRfBhLEBGiTjcUpP2LB",
  "key24": "2XovN2rTF2EHdEaLdJ8hiKXwNnKMmUTVoAvxLsfLyfk8fFWXLQmjA9zVd814nPVRT3bzzCMiQ3xnSzRicgmJomsH",
  "key25": "3QQhf21q8hXZjLN9au5nuj3zheFMipZMSeXu2pjCqMFaVn8GyRW24j4nUqQeFFKvUCWRYMA992MbqG77QMuqxaiq",
  "key26": "2ft9T5RbhaJ5TZ9XDn65SLdGifvnEWEqh5RmKXFoaVJUt8YroRd67Rojjrcw9aykWagusL13PAQPNb7JN8XGspWd",
  "key27": "1SccvUMF4ynbBP1qwLMWZaJA8fzuv4DX69dJV1Us2PyBSBDwrbWgRY2Wjg1ZPk2YSpS6cE5wZqZrWYqe2U7sH5E",
  "key28": "63QhQgyKisbjS75XutUiDbdNrD2rDv7Mh8xsfXbc9qZbbM8Q8w2vcKJb3sKDZM1ds1x43DLKF81MP8St967foi9z",
  "key29": "31Y2x1ftxr39rY1nUBirsnMztkAHJyhw1s5D64mz2eaZq9prBNJFfG6Ec39ZA3i86ARWnsW2poauzeWGuMyp3KmH",
  "key30": "228TTxZMBQsUhkzLo9aGBU238s7kqTnsqCCVJ5D6yUNxAjTiTdDsu7Lihy4oMd8BWzuqr9evsQW3KeVpoDM1gNsX",
  "key31": "3MCPFPgdd92ALTNUHcVqKXxHzvSR9GXVLfEpwc25fC7ZPfJvxSN93dKPobQZMwpTHLon75Q9uzNwZz2QsQ589m7G",
  "key32": "389UpGR82ozgKKAvn6L6bjn8KmC3bjAuT1XBwoZgbdWd4F2si6TkDWn2N6FdJTydjiJc9cXfh5Qe5Ccaay3sijnA"
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
