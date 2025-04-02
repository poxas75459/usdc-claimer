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
    "2w2D1Qp5HokfD5kgxPFWzKm4ZcXakBHG7JUr5T6BipuhQ6zgKCDNt5p9VgRWm8CjrX6naSARWRPsWaLz9GevJ1mR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gsaW43BiRjaUdMTas1XLhP5LFWMNk8THTBCBbp2tQYsU8WfrwPYqPF3iNdmnKKPBsL5FbUe5MZW5Rxknxh9CYL2",
  "key1": "2JHPCHFjVMwX6AtY5cHobabi5a1mohXEpxJCMpvztZ9VpcHr7tnB7sCdBmukHVHSchqVmT9uhjvSyAJLuM9D8WHx",
  "key2": "3Xq1BEUJqDvJ9XVR3K3v3GRy46kArq69jJpUZg6HyKQgfJfqbrbrdZVLGza3eg1gRXkGErBLQsHksqvGW8fXVrNx",
  "key3": "2zf9KSSAbmQhzirZeQhvijaQNGSE4HbfjwzKvanZd9teXMpXa5xzPW1F86Xica3p8HboBzKuM1R4PzUAEuz6fPHB",
  "key4": "5NKiVtXEdNaSgLgkPgx1krXsUBLHeD75axfJ1AwEb2PopvD4dtbd7h6oHH8J228k5Znvyigb2iVXHJUvYTgs2G4q",
  "key5": "2n1rNJc5xLpJ4prGWtuLRy9aUppQJ3VyuGrQ9iGU1YWCdQwFoPcvhYEP6Jog8jxGC7o6STsRdzPyjiUfweBWp4M6",
  "key6": "5Zfiz7yG5H9EEzc3ZqMsQb7NgciuQZQ2kEZDaeneC6rYc1pZVC4SH49wNKBPnNYZnJuT9rxyJaCbGq1raiNZemPr",
  "key7": "2jJNKn3986KTWaSLEvHu1r1rBBw92SY6jF712rnRP1Wk2igKYocM7PAUFjekJTvAqcYDJA3TwSh4VQGDb6xneEqP",
  "key8": "3uoGczf76RaUNWAHQvPYaLaFrWRowyvpYJciUds8tDGXAYgZRjxY2EDU5fTKX7gcZkgtuAufwa26WyLxgM3Lsw5D",
  "key9": "2tvuMJxPU2sD2AFEyGMt5PKZ18kkzzQdi2z6kENpDCmMxTRKLNGagXpkLRSfArYyCNoYEnRFrKcvA25NJhoAEREW",
  "key10": "4UeW7eaNeYJxFsjb2C64Bq7i4xoTYu8Ja7vEqtLbchhZF1D7vY8GdFXEWegupoiDrhEwN5xg6ZvNubUSQUA7YZKQ",
  "key11": "64xiu6RTUmJvxwkkwxqqZm1NSFmvXgb4kHSPkWKyrzdwmQitnrUmrYxBhD2GeYxoUJCF9QttiCRKGr6Yk34c7DzU",
  "key12": "BqniJxqwn76RJNniZb9Pife7thoMnKjqpHqQACeCMpkUYtRFcSdsEhL97AqUGfrFBf4FQjNmkTeZo9VbkE4NB2s",
  "key13": "3aPzZp3tYJTBBDXbP9xF5Dhm3mAvg6rDwJr5fJeEu8ainVP7KK4E3MoM7BniJkEYmoWYJKtcgQSHhPXheAj6RKPc",
  "key14": "5Ro4hS1oDpygwMhgPAFHppnaGKAY8hhR6x6b8YCewMAz4DeBxu6QUicqYU2HcbjD5oMLGgYmf9RenssWAxUMwk9F",
  "key15": "3EVV9XifkudoohweeESpYy4jGF2iHz9Yx7VXGWdJ9XnvxNt8ojH2X7Ks2ocdiySXKm49sRCb61CZtY9SSYWn1TvY",
  "key16": "26xs9udEJ1naqKdeM7y9yuZDSn5KzJddT8s9So89Hn2wDrrBkkFXs9wMKFqXob5J4BmJcJFeT18N3avaJ7HMXJ4m",
  "key17": "3UoA17vxrGqGf1YzMu1i5KgFH4G7xCVbPa5CtfLa42vQYF1sohdoNguEFJwaMBErcTkWzhjQe9h2nVkjqeUxqTFN",
  "key18": "ACTkwPDKcWM9wjN6Vn4ZeLaoYvHEM5oMjjmmX1PUjaCqQahWATKM4BH8bdqrTVnYDMkViowjpJLf4FHd79X3xXB",
  "key19": "3iMwEx3TJeCTjHijZB3pBAns1Faden3VUNH4YrC3CYmFEggtTxhMbMa6UkCTBhrnK11J1oVse1a7r53oLQUM9dWc",
  "key20": "WdRjoDnoxzawCLGqiGubguyaLdCTS5GLTeo5Ua22CRhB9Tw4nKH8NzL3aCDPRZ1TXHi77bS7r9LAEqhuPipeEWP",
  "key21": "5UxxsovCPDvyuXqY8qA3785PenFBGc1Am9p5NoeQz8sm9sk9LU2Cjj7pMhnyJZPcYEoDwY4X6XsCgSaGdQn7BWbr",
  "key22": "45ap9pdK2cRfumtSVnGZvvrGUJSWDkCzAPuFswatJ9i6Y79RRd45qRFiMjZzfCFapoVEYwskZxNuFCmgtSfnKhXu",
  "key23": "3S5DDi7BAGrKzo6sGELRANoXuvvzk5rpyG5DM6Y6VDQQPmruyKkVbTfNpcHiuBuyY5nSqgAT4Fp4CisdKTC9ZnBV",
  "key24": "4NfdHfrnCTQSqwpgSDpa5ofuhqNYDo21ymZPk51rRG3pHgkP5AXnfK6nkJz2752Ls6D2DN6kD6xJnU7GCRWiQBsd",
  "key25": "2iAaUuHwpE1jFSsv3FA1nJFFJwXRkMBp7YKhDct2fjqfffj8LscoCiRPR4Yb8UPsX5hxXXCqTQohRUZyxJU41PyG",
  "key26": "2MMWtVKG7f6e8tSaqgVuUy8D2E58xJt4Vxub1GWaspC7ZG16w6fXH9eusFNPYCTEKidm2tpksw9FaDjgwmvU5J9T",
  "key27": "2M1ppiEyQkU4LGUoctpKqtdn5VWBC8oMEBzm764cg3h1vMnPKWfK2toRuGT119MJrCh2cb5zxhxbMmBjbok2DKbZ",
  "key28": "35Ar46s2KFkHGZbZqEkCXYRUKmg44saANRCwnysngix7v5SCbA5HYDtzkZvTtVbDoDcN3rjaVJ4GhrQjLxizTh2s",
  "key29": "8CZco7UgFsAPqd5hCTFBGFj6h2s7ZQBEVDzJLV2ydDAJKW67hp4QTh5Hg18b8ZrK4NnDXUkXH53rg2S9FdC3sxe",
  "key30": "5T73P5HtexihZ1C79fznAHCLz9a7JFQ8nFhCPMYv3LpaQkH3RXLdAd9UeufYCtKRxsitaDxaDwSoMLwRRPaZxPCS",
  "key31": "56reBr9mMCfNQDJHBQUtjLQJfsF8M781uCjKg6L565y1ka8KBpQCjxQXcjx1VzGzRbahvYdKaEf3hfNbW4HiATY9",
  "key32": "Y6pfYfre2NdQno4bXeRGz2x3o9NF97VDQ6mhfxZgRgFbtet8LCoRbtYYwXV8QigKns2GrgcC1qTw6jrJzimrwZ2",
  "key33": "2v3pTKpT7RuqJTEJkDH651QLcTZJkxApdgdGvfoVofSkHi1zYopRzupezhB2phaiGoXBDWZWiGEyVGVXVrEVJaz5",
  "key34": "29N9BcH8BvspZG8Lvt4oxU5sMpTmVFQrEkaeg4QpFE3Fbo9jM1T2Efzf4nKs95JjNnx7TE5zfWQbBE6GpDjtuV3E",
  "key35": "yTtvPNcWJL3gtHirJetGxdP94VFjy979zEdhd7LSm6kTyrRyowpBsvM74BbNG8BcRcctWKMuVCHrWAeeykRsWb2",
  "key36": "7HCF1REVt4Z5uDQbHqygTvHcmMKoWSohxv5iac8Mrmi6RR6JSUBq29jFKgwdkQYRskq4qNnmCCZMre6iX8FBRyN",
  "key37": "2ER6cw3dxMYYnyviZmJLqjkqqdWaWdvPDZpC1nwd7UXh32Ziaoas4oygVEAVxHbsgzjzZNgqfgNtTqfKkv8PREms",
  "key38": "ntpcWB79vtmAJFaEioC1Rf6AamTzrEQGpnW1tmx1eptcf7HoZkA19P3KdiZHkiGnXkixpjfX5BjX2dTYEkEMg4Y",
  "key39": "47nFNhvWxkpxrfZpcWjpn3TEFtQMXXVt1HPKmwjzTmXZg3F6oEWKDG65oaAvxi8tKkY4TszDeQm77PCAntMRs56Y",
  "key40": "3E1hJ6LC2yfF4A8JufWJHZu34csmeig3gxuGGgd8TfviwqLCsVxrujHRQ4oy9cQf2vK18KQUYzQ3BKjedU3Y8JfY"
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
