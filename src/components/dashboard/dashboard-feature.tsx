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
    "2ywpFRLC7akckVLRA6rBE1KwWhHWzbLboCLEQnRxrLuH5D12z9gEDuv4DHRcsAiuhMnEp75ZoyAisSHpERcnKcgo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QXkdiTiyxtNgAMWcu4P9XjmyyniNztCewHooEXmLrtVQni6N4WWLinjri2dMA4jsoczS3TawYqqjdh89ZGVi1dX",
  "key1": "2WgCqs1stpbmpmh98P3rVo9emKdUAWF1hSq1qXzPmHbirzQ9DSLSLJ7QavMtu7y3RH7fx2JLG36rFZFJSUz5Woye",
  "key2": "3gkLMpzKmBAcQeGtiiPTJrEKr87mxu33SFC227xej6YxktaUoXNvQaKYXPy6vmCCqpE4zg8Jpojt1kjP9kHfu5oe",
  "key3": "2NSWCe2cqx3xg7dwCLcgd34cNFF2sezv5L4wbGTDFmLuyD9NhA7oKu8ZfutxZ4Wds6Wr6LVuZYFUQxfsdEQLDqhg",
  "key4": "5ZpBmSeHseVxGGUzb2MABCKybUTEHgWFA4VsTvNoDmmEJdn6qva4T6Kimqni5HHZ6mts1ZXEvKf6nj7sMAszHko4",
  "key5": "44ru8rXexuGwfbNo9W95DHMpSNW5xxLAbFBRZwHdB1q86yrN6rZvBYYkaSzDcKufsy9yYKNaMYhGacic1484vMh4",
  "key6": "2vpi6nqBTa168LHbHBzeGcThz41zjCxeYpptQX3mMB8guJbazAn8EoRKZuhk9Nvtvv6KMvKHoe4iXBk6Sr53gWXN",
  "key7": "2Xgq9KFLbAqU5w6bMqJ7xiN4AWMD7urDF9ynomSZzsdeT4DLtvqUKKgeWsPs7dwmZD4W3Y16ZQZLgChzLqJZYezK",
  "key8": "2Q6c465xC4hxkejnpPHX65pTVV4qmC7KdCrBmQCZiHeEc7XcqFnHfRQVsLqNLWjME1BSy1o5HhrgyWxzkA3AiRb4",
  "key9": "3j3xGCtQe6AnmtDxt2EbSHaySQyezNpRX6YPB75TyMDSEe5ACTLxZszZB6pWBUhCfYuGjVXZ4cjSFCiZ2KhJRYXw",
  "key10": "o5uH5JWDPFCw7PPG943vermb3nU3zMKAaE4bdnis49uNfbHesA62jtjxdVZson8egZdEWZEH5rmtf2Kt98ZX1Ei",
  "key11": "3ZafNEnchj42VoDErjohPiiXgrpTN8jhV7jsxBCdjcFMqDL3fKnxe4UENuz9K56XAjyR14Ba3j1wNidJpNXfbyWK",
  "key12": "5JLwvP8vuXe9riqjwMdnjKKdL1RK36SWYHDFcF7bKUYvjrGREpUrjhnTjcsNEoJ2MXotfmeFGWabEsKtLaoR1Xqi",
  "key13": "5gaGLPrCt4i82DUqkqgucTtEQSCuCC4PGzQXbEFBF4F75bAUGw1NFyxhZdhfJEtrCxAVTS7uUA2JHQr6LeWzsG36",
  "key14": "4BQqEPjQYAGgfd5EmMTo9bspb92gG3rETkDEjg9HvFsHwpJE8jLW8qeYQaHaVpAX4Q6N4YCrLaJRs4NkJJWxSHyF",
  "key15": "4eENZ91vjXetm4WFuzBbofZeSkhgiPkbXAKHKdo1HFTNvJkmuuq62WhZ3WVfYw7RmtPjVXXydcSvrtWvmYK6gu17",
  "key16": "DUqkRfKstKb4HwjpLJY9Y5BFYwaoXWGo8ouEQpTZ5tAgo1RdaqbCypcWFiAxZqKYEQXbLF6XAYAhfn7aHKyJMR6",
  "key17": "4CsNCvLiYwUHy7XJbMCfviN2pE3TuZAAAmXXECz6hq7K3Ds1BaW4vEsCs1veFWcu8PqiNacSDTYEyT5Hdzy8tQaH",
  "key18": "2Sx79pgknYz3Z3qDV82YvtK3DbBQSJR1dnpHYBqmLGB14mYFkc81CQfg288hyPrdKkZowFVmS44EkwAk3o8hQXmc",
  "key19": "5nDUPvLGeB1Gv58Z1228kxUxNT313u6rVX6AQW1JrW2gNDkjv1UmewQaoWgHdTCaTiCK9fC2khdNfNfwNoQL9St5",
  "key20": "2MCL7ZBCTmPvsvucM6jz9krdPNyszQjqiqWJMkWRSswPzFDQJ7heCFhYocc8D6E5WUBGLe3TxRTYfRMBgW6vd7Q1",
  "key21": "4E6W4eyubd6dqw3kE49e51zrgRsAKWSmb3tcVdGa3EaBuLtfxeaE7V7teh8ReXDrRe1eMunVbNafL9gcwSuNRoA4",
  "key22": "4QZJzK2p9tze6LDAC2wH1yep26d9Q2UZwTXbrY6Bm1GvgKMQgZzCjvV3BhnpQyKSJmvvzJ3d2pHf4LxpqKxeHB7C",
  "key23": "44PwG3yBxmTsYdJGgJ51wFzyBNhyaYBsW48vuNCX1mPJ7JqhyWKa5THjZsHUTFq97jvBhZ1Amy7wGNyVRUJRvRi1",
  "key24": "1gjurDcxWCTGtcnCcr1upyaZHJTrAMMSq7ptQr7uPdffrPnvuLGqUJA6FGqmYSjKeUqFgRP9QVMRX4mFrDGhV6f",
  "key25": "3iZN2i5GjeQSnizEVhS9eGyymR3GkMLfJK3gzssmXHoMNWDeWrCn5eP6qstGU5iNz5nJwwAeif4FCN9UCw4nJnAw",
  "key26": "65V7tDFrX2D3Knwskmd7x3dV9y4NwoTKqVnKPFnSpob5i67hXWpdaaYg2ocm3MGzBjxBkZuAibANsGZFC9qm2Lk6",
  "key27": "3KYK4oXbrRJBwmTqFZQVPKFFdKzU6jMvxkGNFVCwQfjZLCQGMmCPM11VKkqzmh5RHszRcxkWNpfxpUvogc3B76Bx",
  "key28": "2FTT3EWKrRqA1KRuqEJDVyygKXAEhAAgZygqAwjArpnXc2vRiVUpBSYZ3JotwcwT4s4ibU8fvMVVMPZN5G9422nS",
  "key29": "5imAMwt81ex2JvffX1DtaNfZHQVNxiuytgoQUh4ykeMYmjqxXRPUzzm4wg7PE1WfUX41oBBkSz5fjbxp5PCEd2aM",
  "key30": "2BfhhoGNWkpFLctJ81nZ7gEvVUdbKB9EGzJnZoEzcXm8VWR8K8o9viFjQ2KQzcb8p3BpjbVyjXJUxGWLERKBCMc2",
  "key31": "3FdKSqS8rgAyyw3g97dbReC1BMJW8LrW34khST4CCUAcFJFdFmRzmif6QeojKXRcf1nMoqPChH6Pb61ffnKnrbhw",
  "key32": "oC8RCozE826UhgHNkwFgWZsp88An6axCjAP5wgGcCUozeTsfbyXeLXC5bF5ev388sqt1h5MT2jLkkZoUMLxeMQX",
  "key33": "4RjJZa4HY3c2GzrNkUmxuTP5fKeQeuUpgbWScg5ikKaeXwrgDG3Rjv666oDRH2G8eg2D1EQYjvTbFioRjNAFaeJF",
  "key34": "2F8FLV2qkdLUHPcYJQ98ia4RyQvUgPLJhiKfRfCtBFxDX9XH6yh5fdc5yhQRvtywhN3GLL4hUnLTXtuj13Va9FmJ",
  "key35": "4PF5svUDmWqsvHb34RU6RKrZwy7GQPc4Sa9WHkdK4Z1y15Hp98VbG6UuRgvtqLyVhndYhWYQgXpV3YJLmfkzohrY",
  "key36": "2MGPbLZPgUGAGSxJPHHNjgf8c78URJiNuPY2SzTU3yGqGjiQ6ajjatfG6z5TjxFXjCnxuBZJkNx4vrhfDwrHDBGh",
  "key37": "4S3P79JBt47Qu7EYUtRDGYVArs49dG6mceFyaxpGsCj9skVh7LsCox8nRNrLQe9Qhy8b7bj8KjRGoMtzttmuxv6a",
  "key38": "5Sgg6jyqm5bvoNMzXGkYm6hg43SMvkGMAkkYYhx5ehSD6ZnXHv8p3fLHCmUQgCtN668C9MJHayBjmnBzy9BtsZzP",
  "key39": "4bnrTJWmmn4JwXQtp9LYUSsUVyH6jYtopuPtY1aKeE4k1NPaLckXqXU9Wd4U5oxVcD9sds9i9Ztd17Sxq4xMaxfJ",
  "key40": "3CxGPunTvcwU93PYhzVg3nNPgAKM82gvnNh58eKfyhALgMxLc1ALR8NY7gyNgLG88wDRBKKwB9G7yhvX7yRfUXLQ",
  "key41": "4wNTqGUpAGpiwdvneGXT1n4AN6DVc1SWZRTgiJY9M8WEnrZ1gMkAwa6Z8ecjqHXyGcQtn7mBhujhA75h6twvoeRt",
  "key42": "2JMoCXdJNYP3xDn1B3Cmw4mDpNvhcCi6KzSrVzJRxMwvg5gY9PbSUB7f792GQc4y8wdo2iE5Juef8jjqStCGV3Vu"
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
