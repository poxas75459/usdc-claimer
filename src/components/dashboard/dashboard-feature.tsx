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
    "4N1VcvX171oBy6xHHEmuQeyukqcghHLe5rd9WX6wgbRDAQrRqqKhoLXRysfZDwnueWPryh7QcnuXzdsURKYYC4Kg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vC7EK5qt5bKxBPKyd3Uu7n3DqG4bWqcJagKdcWhTzcERTnFyyHMd5WMjq1Mh6Je9mPz4WXGWQamGXVxAprJ9Rp9",
  "key1": "3gHceVzrMVmGv2rdxZopfv2ADDyjcm7GRMLiDwJAJYVAGSxrirBF9swNUdYGEgeS3EmosRytKNyN5hu4PSxzSjbA",
  "key2": "4JAvxgCxFwuVMt1Pkvkr2fjCrFsvvhDhTS5MFtJvwVSwNPs6ihwBXwn5tXkwF9KSGP8prfEXbDZaxcdbbSs4YzEn",
  "key3": "JKHF2AGafJC9vJKVoLeqyhfxz3SmEMupNbSzzuYvYUpYHStCp8TyLvFaXbJN6T5uaHMfMWCwTZatdwtZLUoq4Ju",
  "key4": "3ztwxpSfVQkEJeG3ynfcXL7bEZ6iVLHe7fTTU1Z9rh8QGM1A3b5SaEeeUSLsZbfwsUf5iZBrJ3hQAykEpQZfLabe",
  "key5": "4D6aWeB4bKCxSdgbg3KkB8FQCtMTVvjikxhwdDQ8fXyDLbWYsJVetz85mg6ZrRDoWQaBUtA7zT34dE5NXuSCM7gF",
  "key6": "37apoQBGxCbMAFwxtybRu8AkbBYRW8VzJZ9MKJP6cjpPZVQRND6cz6cAAyscqHUNhzs1sJ43Zie8AwYHGJFKQHfs",
  "key7": "3K4cHrtFLkZZQeQjrGWftrvnmsS2bQSWtL1KzKcPcb423fZ6bLtqB5b6jMv5F2n8BCSzfs2ZnXSABxv1W98Sve5m",
  "key8": "qVs6KtZ6z1Urps4A4dozBcKYcLyf76no1AG11VLUVa4DdKMaW8nkMophuShC4eU9KhApUt51iSKMMtvXsc35DL7",
  "key9": "5Vgyx23w9xHp52n8A5YCqPWVu6T2UZrQyNmaRj3zXc8CexyAcKKG86vikCkcqio2WKXbi6jRQmLERpoEbdPB27WL",
  "key10": "9AxinHmikQt8QNUo4kUNzH8nSzE7N8aka55T7dDFYDJRDttXVdGXMxnnZoLjeYWgrUk54VsqdU27bWjpc6F6uJE",
  "key11": "HVQN58eei2KjqCh7YczTzLMRkWGQQneE1HobM5eS162gDqoLCzfb9EqfiYXK2bopQYi14aDWZAvCgFota4zQbSt",
  "key12": "2xT2DcYD1y6AREmpMrqHKAQZV54FsqmN2LQbynxatRYtV7KRQjfLL1nEP6KEDP7Nh5FRdzmbhbGAYZsAdHykzAGx",
  "key13": "4ZQdvouyb1hLvLuREyBqYGxGj8oDJwNcXit7k8Sy4np9gvvJLxLrBebb4YvSvYdy1YLphcDJFdGBDLQSScpcpoRy",
  "key14": "2PaJuSzbBWbRrPxmdR2JvefmzmSz6ZYpfRn55fFMgdv8CvwMDaV4KnqxcyTmW2wFJErCViqH35EWJKscUGzhUW6K",
  "key15": "4gXtyBTtMWRU2aTGSk9bVw6P23zatzELbsbBQdoaab55Frh52y5MRqFKgMhgifHaDWKkptsr8XM3pWsMhkksJeyL",
  "key16": "2By6tLjAN4xDbh6YtgkKUQJBtKuDgwaevoJ34Sdad7SYo7a8yNg2Zq1F3nRbk2Sxbioc1vFqAJ9rKYi6Xrsegxo4",
  "key17": "5hcRE8BTjMZcutpsndzDMNbsS1ogZMqFdcEM9F8T4rVESExFmFtbiDvd3wN5Z89M8sF9FvWwm3NZhz5Pv1FWYDUD",
  "key18": "2P19ULjt355sgDLqq26z4b8uXeVWQ4yhdyTmB715uLLTsuxn1sdYatdC9XSqFUFAyXJcdtEJx8Q2THUqDomQQ66s",
  "key19": "5V52wPnvNDnWHw1Qr9rrmaPkHX9DWSSxxWP4LxErhHACsB7Xe2SaWefGBe1SiBNLghmkxb3FXUErXaLX2fC4PaNR",
  "key20": "5gvv6UjBnLFpTMUyAr6LBk8cjHB6SfVfpMKQ4dth7TPSwj92L9ZEBEsn7VxjJ5dLquM8Aq2mNYuKVfy6diPnkAXd",
  "key21": "5UV7MC5w1Cp8rP33UD7B6KzoVYywmbsfhR8Bwn2jB5vEVQ2rHPdeDWC1LMqHYhjUXroWh2pbZWhb7Fj45DJW64Dt",
  "key22": "5g4b61Yf5nMo4MrQmVHdsWRVGc8f7yB81SmtJkgzTocV1eXn8HnXxGWtg3WQSGf43VjXkPBxuDdFxSjf12obkQY2",
  "key23": "5vdpPTfo8Z2xeMDErz5vvt1JfennuaARY2tomeKcfZaWhzNq3SVe3UQ4fiYdTP2wx6T4bLxfRSCPDafzHdoN7Yk7",
  "key24": "3718DK1918NYaCZBhdCHVWuF4suqARvJqoEFGRWUiG9TEAj898qRcUPPDZDY6QdQHy8dRLHiTvBLzqy5Jdgywb5e",
  "key25": "5o5cWvyFs2TdVxNHbAHfG33Swha9AF6QkJSAxXXT1294D7MXnMGoRrfeiDntwoFotdsrYmM2wp5STgLh6E1DxHLY",
  "key26": "4hgxpaS82M3v2YHVTVYujJqVguvdH3GsWCaoXHGM44ybLQT5QAfwAvBvZC21jjDzWAsZbgFybWPh3d5EnaPfh5KR",
  "key27": "3FnrhnHtA6XKFsv99zaKAeM47NTyjBgjrE4KeH54PMw9Bn8yVAuFQ2d9xAhtHn51Fpprog2qpHBB3GkVLBUcqQVn",
  "key28": "5XdD3zDtBuqQXtGEsh28N6Vu5AJQViYLjvy54wBHY8QkaQpXrdK7M65kmsKU91G5QQUb4vU2uBTMfLJY5wZRenu4",
  "key29": "4qMpakr1qTaFm1DZXmbQ4AwuGYoY4ZwqArebQvFaNUaKtdV72yZ4WUBAuUuwhSmgn3U7zJSYPceFxV1HJoXTpFhG",
  "key30": "4kAqrgvygU94HiUeK2hRvUedrGviR75dH7VZrtuUDLQV4AmSz78RtePPLxuMgigDkJGHwzxNU32PSzNNWiqotsNj",
  "key31": "5qQ4kN6Nzf5oxEnu9nEo3ezsefPCPFDzvVo5d4PmKimYzNwnD8fpcF8RSEoEAm2YxvMbES1Sz2ysdxuQyTVZCxXe",
  "key32": "oRELywNNNbBoRSUm7SQy46gzSxzTXQATkQHoQKNWbWg95J93VDBwm8jJ9XRxUxuVCgJRRJtjG3XDt1SFTfvGUe2"
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
