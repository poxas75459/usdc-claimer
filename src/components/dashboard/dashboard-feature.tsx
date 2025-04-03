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
    "2XrEVJcAyVFUot4wkx8R748kNTBXActC3UzdqVn5869UqNjkrrTkdCjtBvHPBAzYyzUraDBuJwBoCxaKpHwFFJSq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pnwEQ7zWPqnmVdna88w5rayippQxtTQxoZVxdTD1CwjCXKyFRzDakq3HBMFM6itczfi3g4KLdr4QiSVPkU2rJhg",
  "key1": "5CJd9D573w5SLNK9Ksni5eWvfTXZfcfKs3o54JCM4KTzh6ofLpycFv8hgCiprar1JphCAiWoNeTH23mSE9i8Yo88",
  "key2": "2dvVgXUBhvsQjX7YFhBAsvvYtwf5o2cY3L3pT7UyQ3R826CvPDAKxCWU4pu3tHGwZ66iXAFYb4DAWs4e9BbTnq96",
  "key3": "65PnkrecxwLxjVbC3cEXQ5zT7Niausxoqt7ZpLKZCYkNHnY4o2yfFbmELxapC4NhDumBoQn9bTbcquuHFuBgZFJP",
  "key4": "2szzKUMwkLX9Xqy7XgJQJZzsidCgAzTXzos6procsBdA2WL5F1BZxURB9gqkQiwTp1DQq9TsCRytmBgFM5vDciNQ",
  "key5": "3cKGbvpCfZwjmixkwdSfpiwC2hS49fXisYbw8ULM4GMC2wPZdK8FGVHnmovyyhP1pyKh1SpHQSWV67BT7bw1bmJU",
  "key6": "5Ey9zPWLmDmbQegBjm5MXWoxqFFqshNLvhL2DqdMFiqM8JjtruGADnuqWsmU3Enu1kcj5wjQ3UeTQ4DzVEDSYBrX",
  "key7": "4PVQQFoZkQhGcwad1zmMpu3JuUDkm25PM6YAY8ndeVrbGt4PogL2QG2crJh6fi28PSymEvn4D2LKa9Xop4CTc4UV",
  "key8": "5jM8FoaJiTZ3XZrd5b4ukDpZdqUDXE5xNCUZCUcaJaJLQvH2kAQCLPwBkAsBTE2HjBgASz6zFs1LcuHbx7MS18bv",
  "key9": "4m4TfarA18MPDLb1ZevpaBqY3nGE7EuiyCckpjeeJBKKf9UQxganNw3EkqS6wS3qmBfbWr5LiDn8UHzcdmP6Lqqu",
  "key10": "3mD16dRuY1dMgHr1uLzp59VPvQiPvMwLW238LSBDzTAxVU2FHKkS5CjRzwbnDEfkH54ecfngm3EBqoNKREaBCUYX",
  "key11": "5KGYAkXHo7PzLwti9QnYHFy8y3RXUezD12xrjrE1sFvsJfoqYoTnnV3fpEVX164bhFVJ7XywYKtzt14smeT4HABp",
  "key12": "5SRgpPwZoRhZjbaN5rS8y96Z4UupakXt9WyFrdKAa6HG2eQNyzRiKeBBqTwB3MjHeECUMrRZ2aYCJ9VTr4mXiRca",
  "key13": "3D4V4nE8M6anYGsmnuktTkyCCjjLdjPkfR9b6aVdtXBr8oE8JhdyL9EZ4eTs4oT8QQcdaiQJokygbvRAgj1zSsJY",
  "key14": "35m4FkhKVoLXSBGQdyGYspKwtG39fNj7TvJ21sFCBKE524B1aWENdLAPMyj816sKEzqw196NbrtPhNCYhHRmqgby",
  "key15": "4NZRPdfz31XFjU9TGeL3mCWb9SRg1x2j9JYn2rMCg6CWwNjVceevjkUZLpszLYTAQBU3p1PuQSj83q8z6fZEMAXh",
  "key16": "4o5DGZGKSVqoyKAESccrtArGJYdHVspXBbepCe5a6g8v7Aw3titgXrxfUeAHZDKy4Bw6fgUSrBkvGXeVNKrCWP45",
  "key17": "2xweM8bFKNQ9USaBFXdmoNb5gWTTTvCnh7TyfoUt5Pk7QWwomA914Mmwc3FDKrxh8isD8SfGNC5Ph78P1HfEAFht",
  "key18": "2ECaDkifbTdr7y2sEFZGrMR9ZgLXpuaXUv7aDDB3qtSnzSFCrTsszEZRn1XhCP48Q9Csk4h7SiUfrP1W8wP2zNc2",
  "key19": "3d8VWBzafZVWen9j4416mnmPJgnrwKCKHHtSF7ydYVePvoyuXy3DMFGrugozuwQMcby4N7niCyKD1jDF6EAdFCcx",
  "key20": "3yenFxumATf9LYADKBAHnL5wWVQiuBE1FknPUKfesjUkzQm2Qs8hJBtyG7h8Piuep275LFb65VobNxKgEMrrgd9r",
  "key21": "4zcXj75QHP5SF5HpPBjURtKLtSwjhzQDKJjncawwnFKNyqKNFsJ9qnRDwjTU8bY4PpxgtbthhCEVqcxDWhR2pirN",
  "key22": "2SDTHkvo2aDWEAnGsqBqKMs8brvf33gD2JHnWmrNhnkKCV8eEPSYF1X3bPKx4DbqH4npAox917LZ8nQ6tijGExTc",
  "key23": "64hxYRXXHFPLnbDa978qC1ekuZmcUEjPpu2MAs84BBMHSDQTumsP5TqPEQWXR3KnX9BZJcmYuHBmzCHYCq5CEkKL",
  "key24": "vFMmgUAsxNZySGnmFQzgCWt5o5epCQgZbeQuwVASYNW7xE9xaTrjngyKj35uHGo7ZuRMwXkHxacMxvXcW6jgQMY",
  "key25": "671LoWrWHJGm7pks7rtKciQsrUdaBhBmrNmqX4SuHrhwry7pUasXDobLDMJdDo32J1Qr9U7cDr47SMFVL2vfNGGX",
  "key26": "9PJBihonR7XKxFtoBgXFPMtTem1AcFhccnrgnLyZr8wBEjMih6nVpnaTSiEvDcdRRX52jkXgboyzDRGTB88zCXy",
  "key27": "5WJTvJQL8UEeJYKj4NoghccZfAtQZFk31nP5abG5yhnrtAUvf7XK3LKzD5qSmvs32SkmXcdzaZw7iqDYYi5CaELX",
  "key28": "4sBuhbPkaeNGTsmqA2EsPdtKVhfc9Z3g27crubRDG8PZxUr5PD8FdWcLt77TDKzJgKmqnsip7rJan6APnabxwFtB"
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
