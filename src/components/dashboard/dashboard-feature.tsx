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
    "3gCLHHMobkbktvtnFb1Svb9jh65ZgVipa1JLCcFSVUDowsiGtCtHCaYSvrGqaQUHpujfA89PfzPN2DVDDMyne563"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29tUp9j9EhfMjF9tzmCecS3J5zbK94hgKBtX4svv6aWpgyx9V2m5BLY9rb7moAGeQAW5jqQTYJpWnpSDuqBqDCCG",
  "key1": "3Tp9PxwULDoVbHAuh9kZBN1xkE1zU5W3BAjYmWrjQb38Ebzipy9fgJHPajwFcoprtWqKen5CyZ8ZGQ7XY1zqn5RG",
  "key2": "5BPfoWnGgmChTfkfbEvRjgShhnF5KGT5kv6ua7ZvAiyivJJHKcRRY5xRq4LZsh5yGTqWe1k6CGsYizywr4DKxmmH",
  "key3": "4n8brM27RZz7JNvRiQpkndvgCWEsmKmPuG8wFe9A5wKgmYtSDFZHKtdxRjvA1PYkNoixAPiv3VxPBwVngdMRCjvp",
  "key4": "3BrnSnWJVnCA2c7AX73uax1jxC39qDtt7oURpJiSQWhmN6PXjJfqRC1ePECJ6o8w7bTSZRjT8kB5rB9DKF4FbVXR",
  "key5": "5mFjhHKhxRVV5VnBaMhieKoim6fw4ZFcbFEVwypM2aAjCJiGiJWf2DsRXWkSr53ajTWsvCjabpPACLeAqUC2PJdE",
  "key6": "3cWA9VMhsvto7Y4jhpSv36783YvUHD3byvrJGwQqFUhVFwcR5fM4KobzshgLsEoZvxbwUVBd81nA9PBxsGDRHo56",
  "key7": "2SH6iaKn3zvMc6yNouC8m8vtoQUm39MnmYR7kuMkwb9EyZTp1Wr1gdM2LR9bQfEVvNrdShFcNHTZ8F5zBNYTaun",
  "key8": "2gvyUpj8Vwpb31KnoKX6Lj58WcEq464WuuQzQFeqvZ2iSjRFnGak8ve1pcTrTdLYhzM4KxENRxebDxp1d5Wmt4do",
  "key9": "J9y6wFeFJiZDyQTzMBznCUrkRxoNWAybjKGjHEb7SCB6oTZczompJgCvoDgHB7EsLouLH7DWX3NF38PexHEGtSg",
  "key10": "4FEqcvGjob6adjdzVNy6dsimAM97AhWooM4J23xhA1XaQmUkRbab93gWFv5jGmhQihcy4Nht4Vf58oRbnVwV2wjP",
  "key11": "4if7VLtyT4XoFNgA8arobHkDttXHhL9tPnPsZbepP4iotkYzakVJ4ZTLG61DNBq46vXXteB7BjxA5UDxwTDcaEZQ",
  "key12": "DnpVHaz76DNbPy515nKHvNMtsT27DStHMvRV2WGvVH6wcw7HSFBpoAeJEhnGnqDaeRGN5yXnF5pVvRCKh3Hcd7H",
  "key13": "FZXEPFZ8JpAUevt2CJsx2gr2sZa3rpD23Y59hQ7ZvNikriVetNDBNCotwSrbsc12RukQgvqnRvaoPV2ZouTQYBP",
  "key14": "5HzeouiwXXxBHpRkaAFdLEykYqZgeN3Vd56asEP4NvLBhtqUokXb1K3tHRo2G6NKrkKQkRVePf7L79gFD7vMoSHX",
  "key15": "2hGQfN7a9FnukLM2xwcBuLJLzsU4sVf4fcaKZStp9N9sUx49JDabd5i9WwR9PWE7tA4h5RWGXdyZgVVYkbcg163C",
  "key16": "2MyskuAhQVwXrKsqTP4MjmpSyrF5UToyHcpDUFL9ZdCX1ijdHCaYvQU2kxsNM7ve4MgoVx8caje6PmEv5GbirDGc",
  "key17": "66WaLcnPrdhuMDdBDrTgZZQxKZjREbc7hPWhRKxt3BHA4cgoNqGb3BJtBDR97bbzNcFisuk4FjtwqxapKFWQF5zP",
  "key18": "3uCrbaUrW1LwL2HN3H6UmoFDxm8acqtqDexN2E8SzHDScTYtfhRJ42KYnKpSpf2UL9myg1EmvXM2T8tWR4x28LsJ",
  "key19": "53NN6wm6QbUwyhF7ip7Nx7H6iKBxCrPUxPZxnrWpDuK1BdLkJrM2utfx8qq1Wzq1ppXdupmGwAbBdCKunheD1ZnT",
  "key20": "5oiYds7BJNfm8wav6dDg5Hfx3pymDcZnqGBBkjocUJ1nYAiHSv9wzF8cer4UU4MrmRVd8H9LFWrrmHrU2eiWDHbN",
  "key21": "5M4EnCWU9n2StkoYEC3Ksx33osu9Va7zcY4y22HkkQJ3T44oqDWTavW9bR32CG1FvPucpZ6tATwvACBgooPcojLR",
  "key22": "4Ysw4h4eHikT5MSpgt86EAxFuufrRFSGPzTLibY7neUN43KoNsfN99kDsGbjteUARUJsGW5D6T5bJbqwET9d2zBy",
  "key23": "2mpzYbGpJbAbGJ7DgBywJKw9hqFHf4MgRvu89hmxthdyhz6fexQY12HLMWJTGDHRo7hbFqSBdXLzKKX3c1AjfG97",
  "key24": "4hKzu94XkfxbSWZ4xXdAciZXszmPJTGQXTMBtcNgQtc8xSbcL9T1BiPBXQvAjZF6h9niJ1PkxE6aA5exbFnbUuLq",
  "key25": "553nt66C8QvF9SHjaQpsmNZqPqtZ1R95oVQG9r56oSwRCo5m6pV2XTjEQvtrr3Qgb1QbJhr1Mrao28PfCJRY2BLb"
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
