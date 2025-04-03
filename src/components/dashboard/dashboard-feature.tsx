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
    "2ZJxV2vv4NykCDKtXhxZ1HCNXSRQPc2312E179mefgWVFsLhYxTLs2b2hbctxhyd4sKFmiTv35m7FwqZqxSxqebL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KHQP5vKyQBwK9brWqMkS7qxV5i8CnY8T3SE9SvnRxuHB9zjETem5vQHsuQjVbFGUWnXK9xrWFmRo1PNj5pyPjrv",
  "key1": "4snSMqKUPdwTW41hk78D1t9FZ5VuxcnMvRatEkZqHyrUv8Ti4b1ZfLWeTXuzKjsbkinWbrjEnjPSuaf6eiuxbDzw",
  "key2": "32GV3LFAT6VczbjT6mAimnNebDf8NeEWnWYkobewyBBnPXvYUDHY5fLBRAzA1WqCEKXrb4qC8vCmjFyiAnoZcgRi",
  "key3": "3XRhVoGLUvP7Pf28UGR1BVfJbxXKRmWqGG9dH8UYKehTzRZcH7yeUVu7vj62K8cgtXF5CZc4x97K15Hn3M7YYJbJ",
  "key4": "4qfnBNFgvhudhaoNfLg2Sa6ZZTf9hN9JpLVS87cNRjHPMyBbdRK2N6vDvBysWfTbDNfD22HZMrfcE1JFtZ1Bozur",
  "key5": "36Tb4UVG1V8E2AGNo6jqkBu2NxUzGsXry1qm8ekNfGzHsD1jFzNJSjgW1FKwnjMvhNHn4QKx9eT3aXxTmtC1yFSE",
  "key6": "4v5RovtSd9nt4ew4iydN3WMcfVqKSUHKXqaAJg5gEvXuLyNAHSpUaKQA7bpzfaFtwzqmp5dpFRzPeN6EJ2tk7s3F",
  "key7": "4RWMNN36Pgd7jKuro5rKg6Pxyp7oUnNMxjMEMf4PH4VDxEXYU81zX94qqETo83iN6nEzyE6UkgDKW6sP2f2jaW9h",
  "key8": "5uRJkQUh9faSPSQcWUzSB9qUfuN9dVkutNYhDW2V82Mni9Ett7Zoi22ej8cPVkzvEg6DyrKvgTMBdebaFyrGRBkx",
  "key9": "4Cev9fs7sEfyKbpPpnVNZ9uwGoeYXTSCChSR7NssvFLkM35p9qpo2sYGf4R2Ryqh9Gy4MBnFjNSy99ao7k9MDCVX",
  "key10": "2xVatxV2XjS79uxb6CdgDFH467BRK6JhPrf6aAAvRBoeqYfNbiW3QAZsuyag4FcbZjYFM33Fd2YbvzS1v6sWLobS",
  "key11": "25ayarGkU8XEfijaXy7X4uC2WGTXLveMFBtK7xx5RotvBgVLTkpena4RYsg1iJ42qf8zghC9JQJyXdvLyCEJKGqk",
  "key12": "34s2U4s3UUtFmcN8ugWbK9jk72xYcaFyD31Ky17XehvpW2CQrTtmQUySDmkV6oW4CvrcDTvgmBhsFsqxzAvAZb8b",
  "key13": "5FP5a9xG8Ut7KLjcX1PxdTE8sjkme6pAWXxFnFfvVD72G5NDtwy8M17hwNxyP8iddhD2UWVJXHoq2F2t6dbTdEZy",
  "key14": "MkGpf8zmJJHV316XndLDEaaZ6gvUyLdS6EzoHwyEzh1WDyazFAtiWsLBbtAiCEwBYdV71yq1b31pL36p9DTRRmU",
  "key15": "9cimc38qHfU2U3P84H9qWEtp2Kdst8AJU3H3yk4KJsqV5z3zG7gPcopC8eto134tGkpJpbEtBcESL9qZgCr7g2x",
  "key16": "2MhzvjCBNEvwvStWUW87eVaFGBBWhiYspqEVMK728TyGMFPfdF2MTEGvEKbcwc3MnvbpgrPX8oJT2vgU9LhBc6fD",
  "key17": "4CdzYjkv2ZVXAUpSziLJuuHnGCrNsoGjW3VPao2LWGzSHm1WaeJwo4jaLLhRi1y2T4ro2mSnbsqntr6wBVGSqbza",
  "key18": "5Sq1CeS9xxZqdyez9dYwZVsKwsH4A7YnYzkdP38LvKzAsDkLenP46fvcEy9inkbRVP46NuYGGph9jjSRQ9gQSgsL",
  "key19": "3YAWK27b4aTt9ZMbzZumbNuPmCe57czfgAZPvHToRpbka2sCS9pzsbMyakBKWMh1PgrSfxYTENZs2reuvoKbGZdh",
  "key20": "3KBhpd3a5KuWPwyG6iBxAUm55cFB6Te8bxY8Mo2Rhw8RTVdzvcsX95uVp5Fuot6EwSejkGQxMzcz7Ms6tqGo5H5R",
  "key21": "4TbdCcCMUTszafmRooChY1DnaXHKqQZsksLCLNaNscWtkFUP7SVnsWvDZQBBYaMvBQ6o9qiFNUbzXjKaX1o42Kqa",
  "key22": "2GTEyWPuKC4MTwCEcd6SUsMNn5t4jx2GSrkDZFaMSsc2P1VHo3yAYKpzQGSZGBxHpktWMRgNcBCx4PmAxV5DMbMD",
  "key23": "2v89GsZ5kGwwkKix7c3W4dvYYuypYGgPRWKN2r3FexpzeBFDu6gB2bgu7u7Fwh4RY5r5gcwBPkbPAXDnWAKScCAm",
  "key24": "2o6FCqSp9BRv58kRdhBYECUe7SEhKp9eraB1YY4JDintJraCUdH9uF92GKDXyequTLMYHNp6bvVEXSFbwiFZtZYb",
  "key25": "419jmFi2dFVSmVzBxQFf9wTXmsEr1hzGWtQdjtbqCAQjUtZypWuNfZKJJgsDvvEjND6RwqZur9nMA4pYTBvM7FXW",
  "key26": "4piCyRApzVuEFj8giCG8HRjhdhK7s6zkuucsWp4m2SLEZ31KGv666mUZgM2oWqkcYqhxqYm5zX1Lz3PtkomZadPR",
  "key27": "4PcepAtwJg8YWXtjRpjbPkudCZjPagofsLmv1wDrFfFFgN9a4fbpKn7NbxyZGFYuxRnGygCd118atojT4T7E6PmQ",
  "key28": "kAHy8gjNrwZCW7dk91YjmxyEeHVtu4KiuxY65umfY48MhHSnY9tWJ2NoN23NphJm1XBPdMPYHZ6EKthG4uEAyWo",
  "key29": "3koMDFW7Ke4yvToEuEQyNGPxumy5j34gunhWGST2a4aX1wHXxCBcH81YUcd4ehgUbJFE5bSNKTJpoDswbB5jNQdK",
  "key30": "sL5Rx7Tz69AuRyk5uc6Uz5JDZmbkNdvgiFJZYJsDtR5qJTC5bF7tKxPuNNSwmJfeP4nmBkWgsxWXkPoG7c7HTp5",
  "key31": "TWD8wR2ZTKHQpdHyiYgKUNUBosyoqdutVVpeLVytsrs8GcjSaWSLR6uW1xUSV5XXp9cUUb4SK1rpdhHDGNKJP6G",
  "key32": "4Z26BNstrJKoi4cG2LECrDQUVRQ3WPLmPt3sdpoRbhAhV3UFQxTvVbaUvhtU8vWD73mZuE12J1SnCBzWzrBRPiec",
  "key33": "2E3eisY6arEvJLafJijA99dNhdTnfV2oUe7adt7pordnxxxf9VdCT8rQRfz4CEu6yvumQmadqShufGywfxkUVPsc",
  "key34": "553MZbEmzhDUbZEoeFGK4rehRbFUpL4ojZGX8xJ32bMCZx5WmAbrUvXWxn9pMFF1gtwKh7qzpboDBeqBie4QNKhM",
  "key35": "4EwaFCpi8t4g1fYbszUpYb7GbMT1yUHS2KfysyhVMhoYNJwwuvE1iMyhBtTT8dMT6CaWWNBe67678FTqRmFC3BW8",
  "key36": "2JHEdL7g7JgMiQyrzWwJvaydorL5H7ekApVaWcG2S6i6gGoeXbdJTuPS4SG4qJkmSZf9x1izp6ejPRHpr5y8RgGh",
  "key37": "2dQ6kDZv96mw5HCGt9zxaFhrrGoCCQQpwZc1YsgCt1rAgs3geaZ3X6NN42cqD4fTXjAXn4rbTviBLjozV1d4vtqY",
  "key38": "2KkmMzd8vZ5fChfx2t2mnpF5bnG3EQhU8D7H6ReGdrFC65uForQXSWLUKiyJJVmpdwCpS8nL7RFREBjwD8SQLorm",
  "key39": "38R4qeGoQsv1uByffdjvxKHZaD7sEiTrWKc4Xm9WqHH1ojdoQxJQdWrxUnujzMQMcdiCc5d8QScFUEXf93UMbdW6",
  "key40": "3jc41eCwHNfTuZVYeFPfA5Jk1NRcVcp58cmixQcLZG8GXGkJHGLcwUxK55VnkffRQg6DLnk9KZgixEWV1R5Pb3qr"
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
