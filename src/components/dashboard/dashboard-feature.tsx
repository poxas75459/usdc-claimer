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
    "5LnSKfeehq1uFze9qUdoSXvhSr5wAVjEvXhx1N31L5TjpSxW4tAdMoPjEDo1J2ZvYEoyATBPVt6hEJfhXnKYYJmv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ywcLwQt2KNvfUvXZeGzp1Nfb6VMh9hmQfKM7n8KjErGjhVX3M1cAgnXithY264UbaM6Uboq2dHp2vcZ82r7m22w",
  "key1": "5VhxJSVLjL7SZnhFkfPTfWwfgvjpnC5zSAWLeATQTYiq1e2m1YQtCejYitHcZSQTN2AAV9qv5FM243pKcCW7Vpck",
  "key2": "4Lh4rgM9wDfnMpktG2eDPoEVJiEPvb3SPYMp4VLcjMNfcyW8bNA9xHku8wevuU3UxnWhUYZjCjaVL8riWHvbhthS",
  "key3": "2wBbXcHr7gD8ucGrGDfrHQaN16w3vpinfHQvNBsWDgbDYSUW63Fxqe83uKLQQbbvtbN11gasdJ68HtPvXKxHJXp9",
  "key4": "fP4HsFiFbkEa22PtvANaF79892xfUjzxNV6E3kJdk8ErwoWpWGYykAWztL1tSiwgPC5HkiaL7Dg45svCWoGDkt8",
  "key5": "2Be7LifAoV9fccR6LyEdTNx8ZiRSFhnKFfq3GiQFn96AHD6xprbKsaEAuCpQwyA7DaxLMntWwVaMZKPSskkupjTH",
  "key6": "42oL5Aqktf13u56huKwbBMpvhuBB2nwKWL73kbTbTQLXmhYMRi85DQ9M3CUwfgu6gmFG54WsEiqZMcVurZpZk3L6",
  "key7": "zrQeyT88XZZ5fhjcqh4nBCg1u579bqAJip5q4qvpp2o4CXC2kzPHt5tUEHjxAGoa9YieAqbFgyd7M4MxhuhHMie",
  "key8": "3Jj2rH51eUEd3FRxhS1Q4s9X6WKbxV7w4TwFfcrHoNFGCNk1Er3pth2jeAbJvyuadNtroUGWtJ3bLv2SfxHDyGW7",
  "key9": "4ER6phJ3hkEUDMeLhopmB7PtH77FioiDjfz8qvxzTq7EVTDgr1Mip4dWuDuuP44KVZ3FAnwEYURPYcM7p7yyGXRq",
  "key10": "4c9i1qJbtLAF1XtaVmVXu6ZPHhawgyonos8bSGrSNKAPheKfwFyq57fcYJs4MxLk8mcA3jYLWAEQRjHwySGy7hER",
  "key11": "2kd9BBJufz48khso5rDmCVXbsNTJJRiRr2uhWnv1gX1yehkqZuoyx2CVwPBvz2CZX85WAwZ2kkk6A98UYk1N5ecb",
  "key12": "4nkzKP3zpHdMF82qFGYgovciithEH2UELiyCdxpW7itizFZAmv6ypWsjg99XG4M9ne26dVuHPYmndA1sfCXafJJC",
  "key13": "27ncHytahmA2srcYG5HsQoixrhVc2A2bwfBDZm7KB3xfVoUWwGzXKTbeTnaCA5JYmbGjEpEK9FPMCq6eKZ647mAj",
  "key14": "5QEYUDcvZagsbPtQBgceSwyy3Z9rBdS3ZJvJuMJ2oEoyk7J5J6cPZEyTfpNPpf4ydbKoG4EiTonkdgmoKNF1EfzL",
  "key15": "4WsYr4Y9hbu9k1edcQxYCQXUfM5PUrUDXnJrxPqQGBWw7gE7yJHPwAoSE72XtPqzB83hn9eLutSunWHv9FXFJEnF",
  "key16": "5FvaNDPzkc95SvTEd5nuXuJkkJT86KNtzxv6TdWRxdm974jg1MXLK6dzreenNdPY83hFWdR7bhdzMPK2JXzXsrd2",
  "key17": "52KPbWY3hYEAu3Brvpfw7ou49r8ks9fQZFzdvzKoeCCA2AG3as6Pe6B6QXD3NysfEaMDgRCc91XmzL3QtSQeb8yr",
  "key18": "ky9eovFskYz6FgCboJ3fYYeM86NM4SkTVgo3u2fjqJ2zRQ2ypb1XqgXyKksJKb36R5Fza2b4hfQ4cBG77XU8AVS",
  "key19": "2htucVyD9TvRjkzcsxJEb7s24jW76dAqogW7rKB84coa1DHacAGUwcbpDWXDh62FmTmnK9Pys3XHLNqApBhxAKv6",
  "key20": "2cK2RSbZzgrxB9QsRtWPSE6h7Hu8b4LAGiD1QfhnLKLpSLz48sjR2UgvSmnkAhbU9DUgaaTUR8vVvMk7wzNmpNwB",
  "key21": "5ZHHunzsb3XPTVc12zi2dcyzscsJP6WrL2wEwv4Cxqv8s4ewiGsuyDXnAgXbFTnZbizcHiFsfzJzdrhArEYopZaP",
  "key22": "5PfnpqWvp2sq1zXWrUfadXd2bfyWXUczWEtYdPeu1o9Ps6DGvPniMqCbaYmeiUWH56toF6gKoz1HmGs6TNJYBga1",
  "key23": "5R1DRzTtCN8VzQLcTA5KVTUrp21dxnQzXqaVzRKXEE8rKcbKqveJWarC7yTBdt9tDQBKCYjPyum29wB9Q7rwkcdJ",
  "key24": "3q6wDLFwmcxBhXaz8yoWrk2brVK6PvP97fht9quJeFmywPdpHTQ22jVHP3x6jyK18mFW2KtBFXaF2xq5dNyD5ggY",
  "key25": "5eHPW3GFgsf5zRUyZtQZFv1dj7DUbuVi9BXYu5vmxk487Zo4yL9Ps1a3HDYN9YKWnivsddgcpzmdHbP8ULAhKfhw",
  "key26": "5QJyjhsEuJbUocTquR5hCrWRUoDPXZdCg55gUYULfSNvE8rg57VnfBph68TysfmebaXqgX6HbV6pLHArQPinLkbz",
  "key27": "4K6MYkXTqWdc9ad9uQ4WD2eCNJ8VhmHWQEgnD4sD5oexHVh1WX5U3xbbPgWP15tCTVsJ4PRE3g6TahJFGQVgWBLv",
  "key28": "VReQ24FfAbFGjTToBoPQrJmTJgaB7XBVW1DQJMDtfZmCwACDgaToNd2HkZ84AvnFpV1k6b2bKuD4Kq2rixpHRSE",
  "key29": "5YiP747KVvFAAP51fskYTQn6vWDukmRbBcpCZ5FzTogx99FdSZiRwi3CkyXdU4fZCtCaihkDZPmpx2HcFVLyRYwH",
  "key30": "MeYDYXMbbNXx2SzgyXcVpQYoSctWMcvxoXGkJoSGtcCb6C3jj5AisuXYZztLgA562U5b65GvitRN4Ljw57S96WY",
  "key31": "2K6q1D2WW5sho4E8axUdmMRL9eyQjRnQ9sS7qdzuCRYoS37CC9rmm5qirW4pACVHPggyVHBE9MaAGrxsup1rmJJf",
  "key32": "2mGuMZL2zU5SoGoCxoaWYH8S4ZZrjomaf5ar92TFF3yDnwvD414xheNLkU54CVidekfr4kPwUx3ZjoSmZ78SxNsf",
  "key33": "2vfDd7JeCsVCKg6H4V23YXJbdNuyQucPBc4srmSgXNDr12sLjWeKGKPbxRdR7CVDL3zKVdUaqKURvGmsZvQh4fMZ",
  "key34": "miFjcKPVgCn8r57v1nYSkk4Md1puADPfyYmosUjdw8mjREpMp2ws6MVJsdG8vzQSmDhpZNTxkuHPj82jFdjjdZx",
  "key35": "5LjViqTF9vzXXFFoKDBitq4hX9kQd3tnuPNJVdiTxqoKbVpe6UskQdRC65eyiALNQFUJukEqBjXgPszFi69oLCmX",
  "key36": "5guh7XmBLfDcCmYpoLUMSYUvPDFoSmrsN2LiAqDhJzrgpsTkTGm6sJ4XAeVrHwjAS3PwvinjPwkLoSpVrcPH78up",
  "key37": "2FK7UFPHygGstfH1pSKPxWap3vmezt9KqnnR3JxjKYPAZQAmNqzPr9Q7wcZ3WYXLaRfTtcYo1cWGjrYpsPwbSZV6"
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
