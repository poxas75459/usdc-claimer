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
    "4asuyMm4cW5XJtByhBABkg2qVPZEtNFCoUfwjuPvvhVoubNAkS7HAQe51FosGe2Mn1z8QGY7FvgCDkAYLa2dBnuX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XNLk9snDH58LrK1sWRrnhaywYPuBbufArSFFJS2Lb8wJ4UTzueoKNjc229iYzh7icQw2nuhG6GXBKARqMjAejRg",
  "key1": "3XvupdkrQPrcS1sPAVELB3jG8emmQgsBSJrC1YpK8pDkhtGHsufCt76pTm8tscpZYuM3vrqzAzpovUSXAXFiFZZ4",
  "key2": "5svdeNLVkLbAwGLjdZjWHjso2BJPhp24E2fFkqQhf9B7APdhiVYkFWTEPy6B9k5tPmh3jc6Xz1EyYefwSN7TZ2tF",
  "key3": "3ucDWDY2BrRTv82WD3f6Xr5Baj4p7Hdm5JTjjjbYWbL3xDNib9VbwXN2b7Hafef2JVeKyu32aT8Ptct5JHYCr3rM",
  "key4": "5nxbmGMZh9qy7BLw1cBfCEXNpQMqJcXoYheUK2jZrnqF9nQ3ht2KTVmshjWDRT82R7mUnBUPAWgtFwVzDZmtcEZP",
  "key5": "2gpXf6PK8MPgm1vAfpChMKedT1WuWj8t6V7cWTk1iQMp9sDJXW5rTbHnA8U5XvBttzAPaEjwg8EcUpDYXDzYw6Xq",
  "key6": "4pEnJxT1wSJ4U2r3evaGCwKhEGzSBcm99QGgNkRg5yzKmjdG52MNTWYzJzPSjVcrLQXcanyUNQ651mGmwhS32R6x",
  "key7": "67rPQAYA2vzXX3gHrzaKsytqoN1G1PLYmv9auLJNrUrjB1xXtjMiF5oyXyHyBgXozf7aUmx8dPbikgQXL1d46hMm",
  "key8": "5Z2Nn4LF7LQCCaSpQHwPr81tabzAE7M3s2BsuNhHfrEeWcLcMKxkJLou9szvLYPU31dWLWRtSDEprUyznU59Bt1E",
  "key9": "2jvCpAYPxCswRGWVuNhFAtbSTatjqj8nrfue3LM3okfAKMPrKY53sGdju574im6PiQEjZ368bZngFfxWW85jjg3h",
  "key10": "1nUreE1kNFwrmYZn1fLoxFX1AwgyNAxG3vwGfSnzcnH8ieGJswzqg4FL44SmHzPHJ6wWETWZruuDcXz2r2WqXCq",
  "key11": "3zSY4oK5Tq6DRrFoJbPM76h7JeWnMLC8J11HQVuz6SX2WBj56Akvsp6KXtyeoo2QExuwutfXp1EBMAqjjcbFmXzn",
  "key12": "2D7pTYgq5wSgx56R6jCFayL8Jd59jfbSayDbynFfUXuCi44GiWJALHKqCP9KZJjHYKxDzg1Hk8nek9H1pfFkdpmC",
  "key13": "iaBqbajC5XpXVg4VfDh4WXz3PdhkyxsF6LWN7jACyWHVuvmevtpcw7EBHUavqRdTt5zcXxtiTjwcKZapaRJnwSy",
  "key14": "3Jgja788zXjT8uvk1HSjTLvxKiX4tjcD8fJEVxvZN4vCkewR8DVGdhw8RoJXLa78iVVW6SdXBLwRTX3ENpq86Tis",
  "key15": "2eB1um31yUGJF6gUB9WuJZiy93AyeCzYWZpA9do7E4n5Dwg8RhbpT9DK4ENrTF6GprTgjGXNg8ZHuV6Y1k8UiLdr",
  "key16": "3rqBWtQ9o8X6XgFXTcrBRwh59dJN72Wr3XtvoNFQrYjfgbAPQKbxYihnDFM8Az5sGEsEdYkvneHTvVSzLENpzkXY",
  "key17": "4EusvpuajwuSVYaZKg124V5PcNdRcBKHJ6usNAEMhwsAn9aYmCHXd6ZT88Yg76tKiAxdYcmWT43vgE9YM2q4ccNs",
  "key18": "32uoHxpdBoEHdLAPCXDPERQuK1EBPMtJQNoVHxtqP9EczJcW1iQ4h7hY51HAJRXHQfgaqRw4Su8RdorF9bp477CY",
  "key19": "48p7e2ebYyxkZbunvzMiGpEwLYroHYc3RiKrTLrhwsAY931ZqfnPMB9YJDxso2c4GQ4zBszm1gCTxm4FabVLxMNQ",
  "key20": "2ie4jws4MXG6TydomUBy8zqLv2ZYvZ8GLTn5KkK5CyYjvB4RMR6t9B4D9A1oRmsP4wUgS2EyHozAjvZy5XgKDrTV",
  "key21": "Xc7iYMMxAUR93woFbLBfrJKKhk11PB82vf6fqmzduHYJtAUtSJhiEYoyF8bWKLa44DEM5HRsyAMjUYq2sgQU1qo",
  "key22": "4qaM7JDwFuC55Wt39nJ8vC37HZjvtTYr6rpkEWwKv3DUi7y4RM62L3VYA5FtmihJiqQmhje2Z4zMZyoB4MLqbRVG",
  "key23": "3L8QgVt2dHtqDjYLoMYngJkFtu2VnDbiYdDomQPgmXU36zAr4LcvWNt1vLMmsEjKQAvc1KnbomFdyo35dyhhPhBG",
  "key24": "3WdkVknYVnVEsLcwjcv7gdVSdtK6XoeA3y3axoCEWMjmqgATb6gMAjSjM5k28YH77pv3aSX1qZ79p373TKwTQsRr",
  "key25": "48oPcgXjf1tYJ8BbnhQJhK6FwnZLDLeUVfEdnrH3azVjFcSPATU1wDu85JkEufb3VMAKTiYs3JXkXEihoJW5CdMo",
  "key26": "3JLaL5Z9dVkMaJvmUbmf6vySekd3n52vqUAXE7G7JPGDU3XHZgkWNT5r4vYDBWi17B6RcWvrtDq39gQcuUFB97hi",
  "key27": "5ELfwrLVQsoeTW2Un766a3gcRxDNQhScnJv3Jcsvw8KHR4t5NRSjKwZ4njeFpT2d6xUW3opQhyWe9ypEL1FsQdR3",
  "key28": "9uz36ovR7ziCpwKceokgGwTXL9vBz7N2wHZF3yDZqfwqWdepNAmmHC656eszK5nxEee5JdgWAYDZkqWggnVxcPB",
  "key29": "48TXnk658kJ6PPWkoAvrjWnrcvg4gRWXCa1PdHqxHcEr2cYDKufGyNKVHNkRECmP1JBnu2uqbMGVg8QdAmxaSXSc",
  "key30": "5qJqz65NarZtbrbAzX9LjJ9GmCPSaxLxtBtw6it4vnWKmDH1iz5sMwAuG5aQfCLufrS7ihUZJVm2ZJgTrvEatQF5",
  "key31": "3Mo7mgBKudjtNpuVUfPpD5pR5UsKqXh2G3y7xojbagskxVs7wPjxks3RQrQUH8jChTrTBFKCx7opnRdTTBST72nP",
  "key32": "3QrkrCFuoCt5QJJAyXy1VnTctkwzzh8tQ2EttWXhiWCsbzgUdDK7cvZtbX1MWfFab1Z3SJKnMHUUfBm5mJsB2wNZ",
  "key33": "5dchGd3etjh8Shs4am1g3JYAfT6pFG2nTgjjnVGnjfagWmgzZzHS6roPHz8Cydu1fVZ1xr5Fk3ewhtuHNTpUGuPA",
  "key34": "nJfpY69s2F5Ab7YzvUat4rJ6cSw9V52PcPdQmWMeBGeTecc7L6Wm7Ff8CbMLQ82ZsgymVnZZfMELwVJ6tJE7CY6"
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
