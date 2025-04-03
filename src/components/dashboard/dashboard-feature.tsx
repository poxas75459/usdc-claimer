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
    "3r1ckRaDNrDrC9ekADchwyQFG4fxzShzUBmu6gKL1cm46JeSqknPCDo6UAGDrzrUc72aHB73xcAFuj18L9xBg7F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CjvfXoS2APkRQ4V8RtbY3ctaA4n7dzyYKUXLT22bNuEsjqkGu3R4uDgJRGbWD14dKo7KKZ4Yj5dKCU1C4QPXTE9",
  "key1": "2zKogmTZWVYi9yjWDzyRf5YftUoEuoGJv9LgGPLH7Ms1vhhJucB3yZTU4jd893TNkMwH1yxDQx74xbWZeoRsM5v3",
  "key2": "26uo7kWB8FmwkA8qETNQmNbxcLJ2cqVimPidGm8j5FySzDu9WSpjBrmuWxak6t8ap9DDwSnEXoVAG51JvDpDutfg",
  "key3": "5rMFwV64JjfUKF9fZiuu5LPedJ7poQtXVqv6kzjiEc1yeMuQqq3myom9k88kJrv8bk2FDHvxxw7KgjrbMLfXeMJy",
  "key4": "4722WF7F6nznNTPURQ7dHonB7tDDmcvdi7R2d1nYJiiYjLwRGFxWSUv3v2vj5h7utE5FGQRzmtB8DnUEAPgKH1WC",
  "key5": "3hQGSmAX9SeWVdi9PaRJDviY9YhdGZt6xFm56c7qf8RPYaBzsuo9ifGT9NKn75zvrFNhUtw6Cok1x1z15BXJLzFz",
  "key6": "5xUXDzBUmBRM6Jt6VXCvdH4nYmXVaEihtkDZUTfZFN8PqSzkTtdFhuMqBivFoNbCJBFa6LVCzwVgPp5MF5J8LJV8",
  "key7": "2RWzFC9WP9kDK6gefJv2XePQhqE9165JsqgR3ztzUoKQjioCBoruLLNouRN46kBLxwGKa7jZQYCZxC5kCpsKT4US",
  "key8": "2DwCPWGfA4uUpjE4DZx23HQPVeiS2Y4o6qNsZsKH8ZvDgiKkxNfFushScPz1wPtDEwqxRLK4f8DnSxe3R2pYwmxm",
  "key9": "2QM3CUobCGqVBZbYJikYgdXM5zgzWLtBxAwX1SKxDo51Yffx4FK5ae5tJ3dYYF1yfaMZFqWw237YZo5Zhi1D7zVn",
  "key10": "3YyC4pdGubQrYTfwm663GBdY47NdPGmEan1TJogKw2K7Fvh8V1V9TxUMS28bKAmaz7RcMteV5QHmAjanRPtcfYZS",
  "key11": "4kexVMrJKoGkbd3p1u8yjqqmoWZr2fVkKN7Vm23jmeYxA8whWVGVwjRs4MhB69jTUHVq96zry9J415DYAdBXP7ZT",
  "key12": "653TMEbMcdAB4D4nK781o1kALZSpak21zrWgDBMZwY81Yqs4mM9FNYHV9PvwY8fytYGC1iVLWdeiaF3M7Ta62oNP",
  "key13": "UYMj8Hqy4k83kLgSo9hRbyFiSG6FRs79ntCS4CvnkwE2e7Y4SCJNxGtUKjQK6jGMw5sdQRZVWnNgfXYfdDU35Yn",
  "key14": "3fNhSjbRWUVjMVYmvWUddbrTBV2Yf7HofSw6c4WPQFTjHZWbxG4eRbnpywBXgdrAo1j22VzqndHmtGe5aj1cPyDf",
  "key15": "59Rd5fAFtzjdvqTNcnG91uNUqX6b6PyUJhP3WxkFe98VXjcZ47ntZRsDsMA2HCYJFAfjYySVfMXd5wcta8PKWLWr",
  "key16": "2zrp5gg3vhSdesUQmixJBjXkCwJJKADZi4ZKzXZMev88ZwM4Q8LiE7QYBTwvCXnXrKktqkyq2N8kcUhv1qqoYnnj",
  "key17": "5TDEsdykRTds8AyCdZ7VbRrYNarJGpfdTka8bVySLnHmh8ak2RNcpvVnGjRKPt7Dc58RK5EFNbbbQSTRT2b8KUnB",
  "key18": "3oLTmwbVpoNbjopaMFB7bQa4Duh56TheXKRAWnx35sj98iPEMyx7DVsbj5oknPxhgeNFoqtYCAyPYeXX9oXXGZNc",
  "key19": "3ZLw8rvp79MA8C2E8wLb5DvtB51XSRUsGhqwwYpeW6JVjV4N8YYhwrGev1LnKYpyhprNQzjP4Q2FvsnAjbypKiuk",
  "key20": "6eJx3sqKt93kQ56kbgXyq7NQAUJrAKVx6UtFkTW79tTx2CoGEYb29LHZEjWZP2e5jC1EF2S72XQ7Gns615UgoDV",
  "key21": "33eRoeUYnEz5a7SjJee4n7BudKeWehjGudu3iXKqbc2vKgurFLw5tWF8pERqJSXo4y27jZkrJwietP6gjW4DXxkt",
  "key22": "41Ceq8uwAvUvNGBkz6uaAxEMQ1EUDysYHY8uzcW1FWhDwLUCcbFUyLQMFEm11jLhAyKQEaKX39deEb58LHxndP72",
  "key23": "44Gz8qVCfSYC2o7UpnBeFx7TQmEZYShJ78zStEE1r1uTsX8MwU8mPTs8fpTnwErvr1kZQbHavdEYcQakQczsSyB8",
  "key24": "5pSbdkuq2NsoZMWb576R89fo5brWcZyi8Rdbtft9PK28pd16DD6wo6dLZnfQCn42TNyWVMK5pK5KaKwrDzmQz6Ux",
  "key25": "GGertjnM4Mensd8vdtUbWv9vTXUdkVAfughf4nQVCD5RJnniHUBQW4oLLXZbTaJ3ndGRnJeb9MxXb1WBegPvw59",
  "key26": "3QewceX5HmgCq21kqwd3WcX2wbqPGKLAr6ADHNFN8jqpgwTAfEDyd6ALVbhUsugb5D5zr3fP1h8qzms1878iLLmX",
  "key27": "49dmXbvLSgjdTM1oiv4QdZjgsEcuMK1iV9b438oosTVRpwMV4mDHkxLN85EKFh8esKgMBvPNm5CuZ9WkdP8mhzHZ",
  "key28": "2PeU2K9o5WCkDuykbgc1MCstBaiqqiyBciWVxV7Kr4jqVTy5RcxTmyXGAa1NGYutuhHeV2g1ebFoVHwzVifLHszy",
  "key29": "2Pk3qzQJes9qrZnm9Zkb8v3Ce9Z5fL43xsLjEsfrcHBsuzh3paSsTwEoEJ9iHg2Xi6Rdex2r5SwbN2U93npkd5KD",
  "key30": "4u5KdWF8y7t4w2o3cf7ZEKtsakyBDEsDFJsKdfEosQEEJggDnBkij3867xfwrSpyATWHriFnfYKgNXg4y6rppyxB",
  "key31": "5ogTTFBW4iaWTRq3qq4RkogRbh28KGrXk6gAyiB9x2BQsrJVyXwcSB9hUkEcmbA22kykfXdn48wGHNa5wWb3MRax",
  "key32": "5XnvSRiyQd2Prf27VF8oQRQzGrKAHgAwR2pvVZjyLKJJVSK2EWnVXPiHBgWoDamyPKab1wV9y2zRW8P59nH3VBqJ",
  "key33": "4QEPBNk8K8Qiw34YtUuf9wNfjVetpPZ3k7QJoR7DxuxnuhD1p2LvRE7C1FHqv2rjwrBwchcKdPj1DuRQ7PT9sxzm",
  "key34": "2fSc4CqJuckxXctPdaqzxYvvv5wUP199n1pL6VMWeJmswn4BeDi1pRp2xU8sNQTxKcBLUWSRJfzaXFQVYy4tyE8C",
  "key35": "48KXdBcYChsLunep5DsJ9z88M5D6g45ZfqgbBUgVcknQMw7f3gSiE71ERr3euHBT7FrFqY8qD9Yan4b7kwR9tzWw",
  "key36": "DZJ2V1moddzmzxRkzYfyL2N7NMmiK7XXy4FQ1QoWaSoXC14qFsvoLsoWFqhaKRQPQXuNaXYivFHXSahsstFAgXi",
  "key37": "5y3YZLGDtXLyGYN7Rnqpo92or7LwaWeBNVKKc4DAFgQVcG6W8JH5XhG5HHidBuCCbRJZ3qwH9wZD23hQo9btUiod",
  "key38": "wZZ8hx5rBehYKhhi3vMnuJRhy21rThZ6rT7t6sP61QyoMqk8AaVDNKP64y7Q6AJSMazDBoaGsaB4fZiNxUcZFJE",
  "key39": "48X3NxAkASQS2nx33YbsqoaKceiVCv8e8JprATphundVRgvufCGbGcPc6rHzmzRNFGWMw7qypBGN5rb52U5XfpS2"
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
