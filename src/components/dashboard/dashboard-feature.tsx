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
    "2yhhdapboKFbAGPpu5RMe3NoJZz7tfcPx1svEtcU3symxDq5aC9R6u1vyxibeiTxoGqhXhKrFWNNJnse8KX2GdFS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xdTSq1vZu9RYejkNHEDfwP1mPG9Si7yMWywhy5nwvk7jYuZTtqN3kK3tYDzFVwdMRVYvizxD7N3hikoeAUztwDa",
  "key1": "2LrSVsBG3qodJ4SSdPB279zVfnLenseBrjLsrWhrMAqRXpxSCTDjBxw8Wwqr6GrXN4t2iSvaHeAcdvLdKSxmHRcT",
  "key2": "34q7Po5FkKwXeN7iV1Qp7w6Shymb1KrFmAnHDg3mjs2AvD8CNetgGibPYU8WpCaxVjEirrTVGitnWbpjFD3TELRx",
  "key3": "hhuSuYHeWaRFBu9ZSwtrtvwA2E8eKbNE7VZUieuDjgNwEeZhsTTJN984KLhwRS2oWSytVS1fK26iR37PMgdVnUW",
  "key4": "MP1T4eot5QXbPjcD4W2S8d7RdaXJnkAmUnnNh5K22k9jsPhrZkCwYGAioJEToQoJe9V9vNAFg2RRK2iWt43zbR2",
  "key5": "2L2D1AMbiUt7gEuEUo5fWzpeZa6AK2ZurHJKKaQGDzGBnmWxcNj2jxj1MCGC9QJKfuxL8NXVPeeMSkyNgL1K2cPy",
  "key6": "ZhQYJdJvFqqGwmauQYxgpTeU177CaF647mb9MS1iBn8bBzRqq2nADWs4rbV8AdTg6hnYPSpcW9mBavNAqjzrRJo",
  "key7": "528Tq18a3C3DvKt5D44DPYXQbjx2zHxKgEweUZFaN2pUTPmzkXkwybRJvz5g9BxJF7EPPzQKMgZZCTtH2AgQonpL",
  "key8": "3EEPqq6wFRCpy5i89TowKUGYmjuXk3L9yEVBu1U4BrzDroM6wgJVuC6aZM5Bufe2pjmMi8J2cfwFP4MGetyb1v2v",
  "key9": "62ow93HiUQCCdAwmYBqq2U29ySEgRKHshiK2B7XqonenChRhGiP8qSM42J4D5MTv91RK6nwnC7z3P3V1YBdtcWi8",
  "key10": "3GXjVwX9jpdpgZDV5ZbjKRsp7tWDQWvFXG4m7AeYDN3MypTn3RrhB6g8QnL3hcE9Ne1bwSd4cHjqXZfh2BMRmkx1",
  "key11": "5KS2CW5Dw7k8eXbADGAA1xkDeNJrL14Y4RRjbEhc2JoXeFP5E2HEqtKY6hMPqzuc7JcyH3ectV2XRkL3qJL7eupY",
  "key12": "2D29cxd9KQhyMeJDWs8odvmwv3yDN1vCbbE7m2NMogrTYHhhmNoEU3pqSu4RPJnoUjB7swWnitoxftecR6AU5ow6",
  "key13": "4rtWPgXnY3qFpBToXqLMoy3rMoUG7N31jeaLNJ9V2qGkgPADwDRKK3FcmHYySbbTfwEmGxEMnmm7qik28M4k6CfY",
  "key14": "5uCuRb5vjL8SJSDoJjxoAtNEBLx7omf7wLBep4fJxNjYVi9j1z5S8HdVkizFZNrdUicdfbd3hGmZr1eaQN6CkZk9",
  "key15": "5St3fJLVymmG3kEUDeooRATrxiK91PeQKNSrKZExSwSp9bDgZcdumgKYF6LLdb66gacPG65eSErtfxdZdxE6x5Hu",
  "key16": "4BW2vK26CRhn8ar2PUs1M9vbzq5QpsKiuE2yWedzBMyyagMXwX6Aw3qHjGupP97BGkN4ZWnVDCXEg5zHS71KGfqr",
  "key17": "2irUowKmjQh9pTqP67ApYV2E81iC8RvK4r9QvNHiCuJ87oP4nFgWFGmptAwRCyDZVLuFwarDUtVAM2LwVPAVRVtB",
  "key18": "2VQq1RJsCtMXqWejNTcakSPU33UjeiPuZwiPbpnrbyTsdhtFWT6RMsntmWgQFHYpFd6MZGWMMSnfo7bYgeh2ykYb",
  "key19": "24jVvWVYteez5sV2MVgfdnZwAWf2sBj5fzXYdczzzRXoaFC3NLeDjgFsPVJYNFgCswqV8pSXobjTaogkFWLXr7jy",
  "key20": "JdHtvCvN6zyUnLCcTeWAmCMVL7oWi17YYpMUynC4nryHX79841AXKufUyLGuX2ryaj8XmacE33Q4dYQNfrW21W8",
  "key21": "nv3deoxpEuaWxfAVzwd84jM6apZ2y3tAekTpjq9zykXmRdGykfhgdKJ5MPDhM1giiJtXr28RaFqVgb2FZNxET4G",
  "key22": "SassdRHe3VpU3mpvyKYccw6r9U89R9CcUcL4ap6YHovJbHoTiEHF7fmVgvhh95p8Tq7SJZbAvtEBWMZU6uKKqnL",
  "key23": "3HH3S98bB1CLRSKxWQQg8G25knS2ysEh4aW5SizuU8s7AXf7zTW41iHPTSoBT6YfPZJY9YEhuPANoRsy4ZvZmeNz",
  "key24": "iks2kdJtmMiJYBzK4MRjECFMVcBVxq3eGQR9tJerhjL7uiVT8VmoTv49F9kaZPP4qVkVPXn5d2ytRyEkroGyE6r",
  "key25": "2QC4xUSuxcpREpvntJSsTFAut7QVEBVmFBFC7a866gmkFB1FpLDUAm9ZvriqhtttJv2TN3318c3jPyXNck7zu4Qr",
  "key26": "3qowbM4fbvKsGvkr9QEoue3KFL2eXuayM6MeZq9ZuyJ6zRnXR3BLH8ywupJVxRogA9LWjQFavJnL3pUK4NtoXMtd",
  "key27": "Ve5bwp4MTeTk2hKs3EB3tekArZN8wEaxZf1AwabBrK9MpkTon8EeBmSs83kkTokohSJ7xJCMw8JpfSwUygGpPQf",
  "key28": "fPn9uvgE2vhbUG35Xysd42BD2hSW6Hp4Y3ZwZxRdi3fEG1GcFF63k1xeg7QSUS5GYZGAunqmFCCyfjtPPDF1AFL"
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
