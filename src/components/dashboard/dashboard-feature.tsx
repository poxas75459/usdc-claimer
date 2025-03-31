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
    "2fg8zMwpJAxcn6RNmHd5JompVioFK9zPQ9TWg3dkbGAdysBgQAeq8N22Hgt6JXM9xTPQFF6ojN2BqtDMjg6cwQvb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2521vHtbJvjpKP7undf1YEcxMw1d6J8RuAcmiQSu9AsCkGnMKPP2f5iL9GDQ1bTzDHfjMaVYx3bcT1XgE7mVTmBV",
  "key1": "4WGscbhw1oemNGZgHd3XeA67M4FK3jemUhpb7c7YXcw5duggT42XXMndB1HBPmtSwgHGZ5FtnmMNGgZKi85cgmQk",
  "key2": "4EoDrea8cccYFoYed9qCRw4Rtjk58pw8Ftg2er3wM1rkJsxQLPWkMoGRJua6w4Ao8w62B7fRvRPv1K5kYsjLGWJ6",
  "key3": "4pFiSKWX5JBoGRvKGdxLtokLSXwZkDqGm57bCKsxkfzMSc1dDju4MHfR83HtN6mEUqD7JBcLhmK7N7qEY82vEqmx",
  "key4": "4GmbL99U3erp6K6WY461Dcqkkn9GJ1bfbkR4kNmVaXGRKmz6tJhTw47k34uCpCK1AB7Xpwcfdq5NHuWNsVvsJpHC",
  "key5": "5daih5x1orhsx4pZ84qsbhWQhVoqyHhRMvZ3ELoK6snah8q7W9zNzqcr5DAu2zEvZokhsZk8W7UWQVEg7QkdrkgJ",
  "key6": "2aKuUfkNm7YSKiX1ydUmaisg5ZUT2aPqZLzZ5zdGbCEFzyxqnQv2qN1w8sG3iVPgkuDWJcctRtiqgmGsn47vfxz7",
  "key7": "4kNT5jEvUZbC6yKiCSAVTyokDHo9CfP3PDXNhAtZWXms8gyXgfUdhAYWvniXnYsR2jZxitAkW4je1ZkGuYrLcWAM",
  "key8": "2xmLsnsQ1qk3P86w8T6jzcFxBXUiwnq8GfkCGH25Ytk31sAXtHUVSeHgnhhf6Wue6xY4K3uTG87uuZ5soXcQuqQ9",
  "key9": "rrvvtmCbMCPkx6brpejEH9ZqRFCsw39JUCqKZP5Vrt1NmQWo32dbht1LBNGJYky2moswfnc2QFp3oAGbZu7YkyZ",
  "key10": "a6NpS98UoNz8Axpz3hiSqHtUNynGtuFUhXbv6CkwAuw3dvrYkciDL5FkGA4yvWChzY1q2xmrB5kHPKLtNyjhxiA",
  "key11": "4Qd38kzQNrrqdMyAYxgRMvo2bXFL54vCoihrtBe1gkRAvUBKdkEUex9BQwQRC8gEmA12hSQkh9Y1oCBz1nbuWbs2",
  "key12": "2CHi1XU422xK3TmSw8fU4mkiaA2XZNdMpDxwtg8jyeSSE9x573VnS9v3FzCb5Q8WbZp31mVLmvi9QQ8XCzqjVhSB",
  "key13": "3ThxrT5YU9dCE9NgG9pUTwS61bFCcmZWmFfktcb77u3shoGCD1ivGHwLt5U4A5rTLPEFezD9gapi6AXw2X4pMtkW",
  "key14": "5UxQ7GtyuoSSQfStoojyeyF9VkTGicMeib98tHK18diq43nJGrsS7oKLpaLpPqDWi9Sw56zBgEN6ctd5kmWbbYzx",
  "key15": "4fadcakPoJRrYcoLCtDvtc6Ud7MpPDZbhbMRU5NwBd97BDzXUvex86t72zz84Gsbm6GuvVXXP9aFhrtrFYHVudsx",
  "key16": "4hwFm7maPaccz57wmUDaWSjKKRpX3UURd8td6derAs5JDZRx5Ho3v61FvKzARkZfswpoYjB3qSTLdsMxGeYjvCuw",
  "key17": "VdXVaBzjpuTBYJfdCVtPazm3ZF6mWVp6JJjTi5V6TD1kg3rr3D9JXfkeDNdS1HaxXfokn8yAWQpAPtiDC38dUCF",
  "key18": "3oKkuxJPW6qrn6jVsJ1UeRuFZ1A3XQNmALWb64WvGcZr2K5PXnZ19Hr4c94TwBLenVJTTvJb3Q5uYUrJ2iJmvyiW",
  "key19": "3DUWXyKXKxg8nY4cEc6mePUKdcRDerf7ba8GStMUdqHXoK3SAHE6uy1cYLywHk5RXr6Cz7RyB3jeLwk1z7vhYDZm",
  "key20": "2Rq9PRxaw4PUc5GSYYQh1N7YwYhD4ZvTT2QMoCmwL2UnAPvgXd7mr3aB155c1mKmcNuWjqnBTkpWgqbi2LkJs6jf",
  "key21": "35YMpF5memj9eBiuJCoqnA4eXFEsgBZcB2NhZp1pdwQecFoRfuG4M4hXyWF617rdWMSRxEvDDBLr4rUSzTpZPVf1",
  "key22": "aoSmv5FWJTdhWMoAxFE9j7UEEizFLTMmYwPFtTs8EcJ8kUsnq1eHzZQLvwvtXazsYHKKERafnnFPDWesCjtZbnW",
  "key23": "2LhimjejZryxZaRdjrb1DUZoBxhLhGaA5S9jMe5kvCwBgToaepLo9uJQZVYxq1DnBnm82y1ptF7nzt7RShMCGZwP",
  "key24": "39sn9746RuXa8o7PSYtQWURkPmb8JgKDZotaJuBNXFq8yUJLyqJpX1fNWVNXS2nVmc4Q2KYzmTaFLNF93dkfSaUP",
  "key25": "36e28MXuDKPDVtJg2uKjorTqHXSeHCg3ssvn88HZsRGg4ggKKSfuAShVYD3CWE3MkmLahth6in4aufyZiVRfTjqo",
  "key26": "NH161frxYRuhBV9Pc88hNG1mpKjTyRzfaYrZ4YEywKsk7q9TNS7E1AU4UUN8CF1GNg3PT6M6r6ANRT4U1tQX4Fk",
  "key27": "GXLrXjsFejHLehtFhth91DAngiHXPg7mPbeYDrfCAPsE8CgKHAxavDeahLA3zfEuea62yNYtfRQZwfzJZdHFY77",
  "key28": "544obLZJYdMnHRdkYstGMzoaxzN7YaAMRrnkBEX5xb3kg3Bws6Hr62j5mbZ1x76LoTssXxLJKPwr9morBkxaamzq",
  "key29": "5j6tvRvXQRz1rPttrF92zVynRmmNyTxp4VHg1tCY7g9YRLt8YjKahRcpEHdDrBe78DUH6T6XNzNxfW34LyoVWPr4",
  "key30": "4W9AYACCQwhrM94Dd2cFYS22BavtBGVhunLcnywhzzAW6fgiYc6n7fDp1dTahGU95A6AvRFsdUHXEcpMRbA6p1D4",
  "key31": "31EMgvfsL8euHv9uCwtGaLjdNAxQiCgwZVvk9FcayperBAAV2v9kCPF2gHgJxKqmfHW7mtkuV6d9NPcw7HMaovQY"
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
