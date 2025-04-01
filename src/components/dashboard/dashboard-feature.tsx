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
    "2AwnWDw441UBCsUzsYpkm13APyfgEipG6mxaLRDrfKKKFaU7BmjD74631LJcWNeEJXuMRjN1jy8kbwwg9Jcp8Y1t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qDZtNv6mN43BPraEM2QxfaaVUtMin8z2Lh9GNYDG8ng88eKqg9Ko7tS6UzXdSUBnuG14GoXR38CFZNbe6vBwHdJ",
  "key1": "sZK3ZGjnUqqi77BSH3Co1iLKY2xT2iN3y8ryKkNozMDMBvSUqCosGxmnwhCgp5D23hqh6CJBEHni2dnc1iWadwq",
  "key2": "5qaTTGgBowHgkbHob8SAJ5CjY7ipffAngyqvXnW58WDDfZrtjvpLZYi77eMFKvfFkJMwVigNxe8jidLpPaUdBN61",
  "key3": "3L5DVuPikbysSUa2SFDTxCEo48N5MdRZrWDD6Zpgppv7iqnw2oWAJ1tYH4TE69UTp74Z4bYZ1wEWQEiJyDtBWRRg",
  "key4": "2nWTgJPjxBUivMuTuPCwoCL83i2Z3xYN1tc49wi9LpMFwTrSHsmQyzJjKQ87zJmmEXdFhWq8wcBiQyugqq8notBU",
  "key5": "4ujxAUntQ881pvsqW44YAC39Gq8hfxm9cB2KYyEC3CA2X3ZLjQ8WggLDCFnP7P2UEf4xRbndivGtd6vFupzPrfgr",
  "key6": "2xwR3tHBJgdNGQW5hZrVPH99nB9vAsbaZ3apHNkKd5aG87N3j8FqVBX8jDpgA4P3x4kHAxVZRznsD3zGYoXpn8pF",
  "key7": "kQnWc54wKDsJYCswYrgVBGxzLzpNUTxFo5GsH6Rzi9Z26X5QNSUEE5peM8o2g9aUaX25sKGMzBDnpXVmCfMKv6n",
  "key8": "V41xL2tfxFSE6pdzz83RKWHzddcDmLv1MWuvdYSbwDHZu3nLTEFE3KzZUGRxjtiJozXJBD1DKEDbkVMxwF3K2qf",
  "key9": "5C3YvStUuPxo4g5JnnmqeGLNha7GcuE2j7WMDMJcz7PjeXYNTUoCiuecFv1DqS63TtWpitvFGxsrWTfmVDw6AxGd",
  "key10": "3doSm91zcLxXXfTY8tf7F4z3bz3M6E7QAhLwU4Dm1TohkdwAdvXgWXykgmkqoW6zwHzgvt6zUACFYHU78z6ks9UF",
  "key11": "iQVcRZeTJJ8veToRhLTud1GBMUctrBysPZu6nFFq8BC5HsDEeetZmkPnj9kikbPBVbUbD7V3LNAwVoQKyKzSUH8",
  "key12": "4as5M2VMfxgorkkX6BJb4bdimZmsDdaqYrHt4SFPNkLTrW2WsnKcMMyAts94jge38pc2BBDsThveuJcFC3c6rTXj",
  "key13": "5XKV2bzo3SuXXUHFa97bpHKDY3rqgsWRTfpxCqRrzgVcEEiRUjKM4ecvjhf7ZDJv9LkRWLjUVstX2fhMfFeqQpQp",
  "key14": "2GfM8aJDCBw6vZ1V6kWT2pvyh5wRyifY7AuBVyPuY11UC2QhySHAJnAcXQwJFoeYU2VKMvieF7XiGAMt3mgYzKGS",
  "key15": "5Dgis6RnTEhJCvpDQsRTAuKaCA45mJq1T6LPenNJxfZdwSxvHo5DFZ7x28MDNAVmsAcgcxPjwUzZzHEoQ76WTnbH",
  "key16": "5ziXHATDDaXNJY2UbheopcJhtACAa1EkFHUB3g7DWKYDdhkzCiUa6rdD75FGjCWTyKmpagSeEtbANxYZJMfwgzG",
  "key17": "EKBPpatC2ruVBGAyfpghqEuirVU5NXFeUoUYgGtisFsRU4fKcpPsVNwvioR1UfZ3Ak5x7jaoFfGVxZcsakq9GQD",
  "key18": "4zWT16KSfGyiw8LTT3BeWFGneE2RmbHC8umxrxTJZZ3qu74f9qu5WQEV3TF54AQBrmsEBivwPdXPnFF8dVGZHAQw",
  "key19": "sp5iCdWsS2P56RBqWYQWj2dXgby3M64pwk7TgmgeBXfX7Zq7JeEUiM1e9bNDGwvJgsb48jZaNCTjUTWbvFz1xwi",
  "key20": "3zBYiAo4h5nar97rni8zSJmuQCF5mUkJPoB2tmdeb1LfZcohmcCuTVzybe79npTMVfMbxFM4m9G1RSBzmZeoEhJH",
  "key21": "61WJZQqmobrC7ktE8Ev38sA6FKA9zWPqFnkfVbLUyqFQ6TDqXNZvv1FEtBLMAEbrH8xmNUDQEPsBgV1aQchabYFo",
  "key22": "2t9itsWU3DeGAzfgYUTFR3Qg9uKizkfCTmJ6Z2wcRRqcMxcLTt95kvM5pheVouLNAX1utWqGtqZ8zEeLTt1XMqq8",
  "key23": "27CQkytneptb6UtKJKcyYx9wEf5fN74fEeq6MBvcNeEsSqXmPZTiwxQZbseYpwGWjpU5tj1gozLZw8WFCjYRYvG2",
  "key24": "3zwj7unU7KssYvnxqo8vMRXw7AVhUM4Xxxo3VoXow6WkKMi4NN5Yi6H3vuMog7y3q7GxakwZzzAmAGRUiemN12Ne",
  "key25": "F2UpCwL5tAz2nmtCPhFnEBQVS4swyNikjAMX9gEgKhdmX5P2oqsH4RHUCBr8dPUb33jf7smbTxTcLKTZ44kE3kL",
  "key26": "3kBozd5aYhS3zSxcwG19ax21TsbdWDZRnAmrc2ZwwB8SV1riCva2YWnnhJAwPEArWsW2ePV49kdL2a8zocHLNsqn",
  "key27": "65gUEZ9GrcvBUMkHWfFE2nhSjBRBfmWQM8TLPdGtS9rxy3XwtzG2vMaDGXeezNRCAtpE3zyfRkGWNgzGq5SxYBqz",
  "key28": "64cwSFDmVE59KgQQnxgGcn3zSHs8BcX7aSzS67gsvZiXqMwiddaZF2RQsjtDQZwnmwTt9bxFYo3kpmSqVX97TDny",
  "key29": "65tsQdQLgjGbuk1M5DhS8E3UQH87fQAYzkUciJXr6yZFaJHQgjvjKzUgKF5tJF1JH6gfDAnNPMUkMqoDHnyp27y1",
  "key30": "31GqGk7vK5g4nvxAMk6BDxbeaXdkbKQdUtAuXciLpdyEsreZ8foKxaj7y7WyMXTFkfDdmmohwYMc9AfbXvAsNx5K",
  "key31": "49XB1R47kH67p8AdBjepPg2zS7JfCmf1tqKrMtyo635cFBPacPRdcjrfZge1EhXUJ8TrzSMhj78tP4q5n8Qeq5wi",
  "key32": "2SrtgZZXN13q8EGPNeGCC2b9nBtdh3ddRFicPYAG36aK6wYUWweA91vPUV6pdk2itZeH8vjTnFHCfZ3ESvPKBh72",
  "key33": "PhgRAQwTY3qHxhbtmpu36ZCdAAmy4fJvKn1jkDUCS2b3V4S4dKhX61YZssehM2mRSzisoGX15TusyX7r6j5Mdpo",
  "key34": "4CNwR12sBWJiLqEw4Kthj6x11W4LHnPrX89aztZaTBCjVeX55q17X5DQn3iMhe8U9W8gcvBe92xWRcJAvxm7ARFr",
  "key35": "3n4mTiLyw9VqdxzR6zqzjkEXKmXEkwUHnFCMyLDxwRZPNNMbUZwMnxmb5H9X4jxsweYefwnCzPbnEL5die4KqdEG",
  "key36": "53hU2UFkBZFx4g98VimLYT182JEfxLrXxRPSn5Xx8ZyVpbkrWVdbtoVFAVFACPa3M9P1M1ZxECmVFHaHaMFWzpLH",
  "key37": "2R8egjEHcdZ9pygu7WoZ6j99pCAM5vT9ehcMcdU9bAJqWEQ6JPz66CfnbXMDvogSwC9VFCQgmVeXQ7cDLeHVXhB4",
  "key38": "5mHzv8GVWcVRPjuuVs5DhYx8LQPidxViGN4m9iuPPHfoZcHukV7Jcx3dfCookn5Ay5UPtwAs3gvd2pwWAqx5rmFG",
  "key39": "63yuhUiQdFcQHLezr1pDcCjPVRJNyDyNrjucnpdeYJnk4A2rPwSRWbAcMp3r5QL9Rfkx8uPkQeAigGZ5e6uLnsqN"
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
