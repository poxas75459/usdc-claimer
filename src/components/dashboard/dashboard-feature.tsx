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
    "39PRNS7HhGbzKL7SwQCyxviqNj6iK7ufmMxMZANfa5XjRTpFgZejff3nUi2m3dHLpTWoqpx7dxpKFZPfMgSHYwFU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oVqAxzBsHJSMDModHyXxizfEcEbKa8GMA6Tb9AiWsCXntTVp4XXn3GcorGQcBvVy276cejddkUPEtt61MyNY86b",
  "key1": "3oEmczvWZn4fnq5weeBd3xnBYru5F5v1jkNSAkyYDR2b8e5xLGUjR4UGo2ai3dpXxbXrM7BGkNRYo1LoPf938zYL",
  "key2": "2SZK9oupoyB3ejdiPuk25QH6BbNqaRtP8fNT8B255LZciNK6JseYZu3dAJBdoAcpjnTU37ticQuo2bx7XdpDVL6k",
  "key3": "EYtih14hUjXziLq2NsAr94Jsfj97DWbgYsJYQLaaeevVoRB1URUPE3yNbPM9YbUB3Z1X8c59B9vmMh8coQSK8fM",
  "key4": "1wyWBoabfcbcPVxXp1P3JdQ5oH3qQtrYK8EAPt2JZGQFSvi6Ez1J62S8qMTRQiTayPLVpDaPKN73sGCcnbLTss7",
  "key5": "2mpuFskvb61QBHNvmKqPbvN8UNXVJbQekjVBeyAiCyo29cbJ4h8zfpJowiDSURH3q3cmhXoySUfXtXe7usx5vKdj",
  "key6": "3vgcoago95EyFsnUPDkFugtgCBP9DfBVUYaYAgBTUyBv7hcyHjebE4Kimbt6kBJisFpuFN3pZ4tCedHsWhgtfWna",
  "key7": "3eSmYrQ5zcEmmxAjyKY54kKXEumVBApfhc7YePt5d4NU69xLQCxUPgVmZ6yZpXMhTvyXLyKTD2FdMX1Bd7YnSTCN",
  "key8": "25VLq4iyFSBGhWLay5hBDw2mKQdU3A2om4naMVXVbevfKLVXZeATWsW14Cqed8GEe7vxp6QtpKSWNLaEgw7i5MVH",
  "key9": "pdWHWxLapJdVVmGcsrFkEZDDvi2irDZdRn754eJHqfCA4ie1Bk4Yhm1ZzfuuoMkkSnxfoVRjw45Z62o51nLunb3",
  "key10": "32E5BvMrpJVFg5G7YD4g2oxfjYRUUZLncn4qYDdsaUzrzHpNgsWaz15twbiCbzPkvgCHz88qfK5HrNdsVRcoiekZ",
  "key11": "3W9AvVsM48QU6KifPzTXvWSwNbT9UDEgaeHB7i8vLZw3pv4W9Hbyr8gC3oiJFWFHSa8ApcS9hz3rVvsy8771CTPd",
  "key12": "4gqvet3rPrrTZsciVSTBFyMuCRFHpjhzugudDtkVCjLVNceaLp3UdZEJKJp4Muvf6xB7bzHiqVTZrToLrBbQL4Zd",
  "key13": "4qHuNXNeuWc6aBhm2UUf8DmDMSJMBDEoTxCfNdo47zBKXJXFDuy5zUwcVEAsNqP5QKUyMWPB2c4bWSSokXB5QCW3",
  "key14": "5iPvut86gEMKNkcxEaXcrFWXjrjmAbePUz6U3wYFMtuH17bNoUpfYZYkyKcGVAYMALjgF8yTa4jUHwW1x4UvoE2W",
  "key15": "2KiMpGekXkhwRJuKgzS8KKAJ9U19Rt8Mvhq343WHsnLG9vAZZcbkdsvmUSLrDv3QBwAJcGTc5wVGASALq1P8MSEX",
  "key16": "4Szb8XVQUw6EJqVVpfcKTSVfYXTsxxkFejb5Pu5UXm8V47pKfFvrPEpzqsakEyDGPTg1Tah89ttLwJkL8LApZULj",
  "key17": "2m2mXRQBGSosm6XY7WakNbGTRPxMS6izFdpxL8BvrtNzAhwoyToP2sJodyMpDh2vUw8yuvPTY4sjSja64JU3tktG",
  "key18": "2zxwUErkUDGrwFRgz53sgpHhC6oovYi8BD4LZSh13AUwgKXQW5rDrzanNHSvNu7nnreP8pqL1aBT1WF9xiRGu3hL",
  "key19": "45oGom5a7QPMTG2vxU7whGM36CMjNcLofcQBMim5GQUCjMyCWRRyUW9hKYT482yMyMPvz4jHLgh7u2ieKnMDwqZQ",
  "key20": "8moYeYpUkqAW2WLeT3ch52wZST5EnfprMDAqsLi2iYU22nhfhhTu2uH7hcxL3Ep2kLy1Yb9WFJ2QVexzAi6h4xM",
  "key21": "3cHeVmd2mR99XX2Aj41F3LcZi3yURFo3ad4jgMXhLhBGwUmTjG3e9dgAYwXf9AnqhGRtXLfnzi2rhrXz7DsK69KW",
  "key22": "NnWrMBZtmKdudbXhGuMXYpULiVJRE29aUMY3UX6uX7ik74u6qfEzHfiN7URoW8oNbuXg5GgCmXjEtzbKn1uwCKR",
  "key23": "sWu6V1VWdVp2QsdtdXPrQmHKqs5bKme2y2J8sbsK3ESFbHkiKJvwdtX84gaWFtrKDTna4VdqwyAMbd51dVfy33b",
  "key24": "5ox1tufrB19Yag3nhMw16SWTiNuBZYtovThFL1ZHYTrhHAA387xbhbTNUbnVgo2mJVbxmXC5yamkFzn1a4NgTEUt",
  "key25": "3qskQAYRmAp4Rqs7ZFgqdkPD4REdvFpvCv3reek2riRTu7spianuaBtFRPvC1hGixiAtWPWqBPvR5Y1DTi9s13EB",
  "key26": "5J6rE23gCCJi6BaSmK94NEePxEw3CV5uhNc5qmGBwYHgy46knL5P1Gk7C8R5FNusmt3ftTK4QTa7pUoD3gy3WHqV",
  "key27": "RVa84xzJhMwiuBVYgYzSPRvn7SgyjuhLXf3WXU48pSQWoZM3or4jQQkpwQpnzy6uoy1SRsJPtobptX6AA3CoJvD",
  "key28": "59Lq7D34oknP6Di3CCx3iMmLcrjW3AxPYdkRpY4RFZiQr5L5d1BM9sC26f5LDnJoGQ43Fs3K3xya34gQMNNw7Aar",
  "key29": "5tDq7uXuvfuLVmpcnG3eV4UvGQyUV8gc6v6e5Lze32xpiSdvHtp9c1uernX2BGcDEWYpr13nxUxahcE7jn2MwCTy",
  "key30": "3VqrcStFGypb3Pcj7cf8E4eJsAjG6YRquJW5vzCwFfTAyaGkWS2c1YCFZct9LVPMHj7jmz71Nn24Ag82H42KNebu",
  "key31": "5aho49sNS4VDceWLvQpKqaigHHcMU2pmsESvsaGsw5tjXs7jjCfMsM93UGY1dzF8eSMFVRzjqZA6DmN1Nbp8V8yF",
  "key32": "2ajhSWWzXEnTa3QJEWFdpNYmXnim9SFTtCF4rE2UvC4JS4EAEbWmKfXc3r5DmgcbUFDC7CCbNmqAFT1VqvKbjiiw",
  "key33": "5LA7mcfkoq5GL3Uu6UyewshHHMqrDoxwXmvYXaf6Q7WUmDs7UJWkc81ENDm7uxyULmJHjdvtkkiiVMNbrU2x3bm3",
  "key34": "3J6PkNetXSpdm35mUsjwdZ6ZJK182gwu2ZrbNfHEEfdXMJJeHwMJq9ebXHvgWhxFzaK1bGsbLCqskGtjAiKEsFYX",
  "key35": "5GD1tYYph9kRt3YNy44raSqwkvLfNymEtV4kNt14YsPM1bxUoZFVdFBPR9SPSZuPBYuGVe4TyWe5ndayBZ7N3z3k",
  "key36": "3uqB6aWpcMPPH9c4TSfHDGnhnY72HXZqjJL8n2uEAAZK5G9WNeSpqquaVc2WhM8695j2bJxbru2UKbELqFPs99Vw",
  "key37": "c7LXWCUkqNHgKfNd2YfyoEP6DXq341jeUNZamqMHGUxvdUPSL7DA6D6vLMy62e7c9GDcqV6aJx4PyrumdVMCuwN"
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
