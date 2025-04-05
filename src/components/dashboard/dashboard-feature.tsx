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
    "2AHQHEwf3hFGXZG1xTsTBEdcgH23unfREMab7QMmwbuBE7jbpGREkqnxFLYKjCAcSGDkuUmpicjsrHg6Tgna6WA8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49LQaHEuMUXqATsFdcKuSNcYHSBBfKN5yM3F6KBVZe9QU9WXXi748AmsbiRdQXNJJGS4hPAshYsuQh8LXWLCRjqG",
  "key1": "5Zoh8Jf8qp3e7gKqvD7RP7xGMvF981WEZQxtbkoj51ebgrCXXHPJmVqfjcL3SRREonQMFcp9QLio3JFvcZTJYRR3",
  "key2": "2MACix2G6KGWvEW77iJnA7svHQ61PfSJrX6bC5CMbHp7Xv6rMYGDJ76sEouWJjMhRedvcG2DQLNu4QCEjGoiurxU",
  "key3": "2ovdyCgcvuBkPBMg3o5zGgvbFmshBjy4VgTNzrApPi9bZXhVgivEMeExmy7Gi3QvqySQDpAjznB9Yi2MhZmaFDqD",
  "key4": "2uXUGUoRS6W7StTzuapMCLpQ99owetqqPzVisCViDqrVUGRpeE3GQwyyAh9TJjTcwV7oiC3QEgpHpe8CkVXnjDyi",
  "key5": "52h495rJfvFKMgM1FqFMLtWEA5YRk6mgkgVAn7ibcHyPudNUmfc3rpK39jujabRrMhdDUszyQnujf4xYmRwjzwfA",
  "key6": "5cJmBPePg98j3yishkmJD8Qs3Hm5Mf54wQxtzByp1KVPQ4RByUUdoX7WFw9MAr6dMbWyr7kgCbEGSoHDXaYZdXAq",
  "key7": "31nCSp1kjqdFCnCANMJb59kfXdLv2VKSQ4HZZwhgybRrBi5p8ZpbSHUq7CAhFsCQd3hEpPcppJFJsMw8kyqturtN",
  "key8": "22Qn4gRysEQZyPX4w8z7ipjh5PPbKX4uDtfvNigjdAUdeRNHghob1tuY39W2Y1zFzeVLrbGycRqfnuQ7fRuxLNAq",
  "key9": "3MMXQPi2siyvuGN7GHbz8A2fko64hfyycf1pafDZCUU765eJuozr99npKgmUXiSVgRa81ytwKpNPL9ceZ7nmFFDT",
  "key10": "62XVcYxHBMwd8KFNMucaNfS6YSzXV4G2HtQ5sn99CLCfSv3qPRLZzAZgSNZ2FBFJ4Ha2yUGCVvJpsEgNVWHcionX",
  "key11": "23HTdh12WJ7RscQrj4LUqYXJy6X7baBbQeej2dm3athPZSrRp75TKgD2bvzbAg7v4NBtHNS8jJVywnBi3UB57Ytp",
  "key12": "2g7jYrubGWjpgEqV4PbBcz7iLAa7XNqeXvxsrc8kCBeTuVjetQ3n5yt941GA4jrWZmSEYLakZ5twm5U2T7GUQL8Z",
  "key13": "2AfZvY91xTdPTX5Ab3q6TotqAFwi5ZZqZKTK1ruEzZnU9U3oPi1FtNW36Kvpiw23ZPvZ51ALG3tYwDdiPp4ev2Pz",
  "key14": "SwEvqMNhqVpgzbJkUHkfsjpFxhaw7mMEp1SZ4KeoZzKPNJ6v93KJD9mWsPgkocgvekyePiYLrMJ45io3a1gd9Wc",
  "key15": "4jyFCgE9edscB3Wxe4UTNJ3dKtoqQWUyNCak6JdrRVvx1xedvuNAHS2KvpEFeoVWYAGvMKHYfph48WfejPf2UZuK",
  "key16": "RACJDyFUPG9FeYoUV6HUWE1vuB6LKEUvY7d5uJ3ozZGAN7j8QV6ZRw7NTWghAW8YUkMi2Jv8U9FiZCEYfEzzY4S",
  "key17": "cc127nETuHnBZWWU9CsFBKyTy4ivRgWYneXDyYKJZtJdkXDdUQvMY1wE4BJzXLwJxHbHw6NPvZt9oaCC3FR4rhu",
  "key18": "2Gsd77sYQecLdxYPwdPBwUgcFMwu6E3WrJ5UyF24WXu7v3ataSoPn8ciKiEZBCaoY329TMjKNSoAfNUgsggaycYV",
  "key19": "671XTwnXAwVcAxNYAJ1VkeNEbtp1RnQmood9PuzgoPHVpH5R4p4TCgvZSS4iEDo4jeakuVvmd9oSHWbpqBsaDx7X",
  "key20": "WbBwZvhBp3FXEnVgAJti5fnkdQkC3GS33byd351YnYijSwjc2FFSBNbKUG6322yBN2oQwWQTZpJUQSJRfbTnvaX",
  "key21": "i71ZyKqdQBNEXoKy1ccE6WB6N8r6tbfphjsuYcLjqzh3PGek6WWF6eBCwXcZy7sjCGJbzGx7anMdt7Rvvj8Vwdp",
  "key22": "4tDvoAQEeGyPdXLAajXZpKeL4YKGDWQEQ8YHQDZ57kQgNEswbPrT7yMb75UyQmWFH9bW87H3D1p17bsw7XbrxkLe",
  "key23": "2wNcyni2GAujGjXz7uo8fo7eCmMjVTd81mwXfBCzcLxZ7TAL5TE4PHmvTKK8ETGqvnCgEphJcWHtH4VjAMVgactm",
  "key24": "azs6RypQtAGRxPVRo1Nz5j9ZaQB7uYF9296ACPUoPjJB5B5LHo9xruHUFd7pkCPBwEDGn3jQiAoMpyr3A5ADMJP",
  "key25": "5cbzUizqnaEY5kQBthHqrwHpcV4Pb8SSq4zXXYvD1ZthYr4Je1fhQybv3RQd1dVaoGjFTj8nco11oasAgxZbjT1T",
  "key26": "3shdijk8gwpaiz8up3x5AzVwBNXgbBvwJM2cZsqAk7G7KTujGkP6p4bnSGYM5daJaafNda2vuukro6HFbSQsqtds",
  "key27": "4FP6Qttz8pKa6J2W6bn3yTd1Ccy2nrpSBA6x2EeRJRUeM1zjzKtJCzB7rgbEPRP93xoCNTSeHarDhd7LnUNhRrnQ",
  "key28": "3PMKyGdWSo8yYgCaPTNqXgyGrX2Vct5DsHUVdHH8DKuDf8G8pyF7bGi5NhbGmZeXL62v487f8bVHiCewoegsiQvg",
  "key29": "gq7wTZgKe6p5iS2M3FPwFHFXbu7Nok8MnDX1gN5hrz8x6F9shk5Ep5uXGUtL1mh2yzvBAXVN47oneoLpJgbc79q",
  "key30": "23dt3JchgVjkzxTyvcRCtTiWd8PvdKQrCDgMYvF3NG1pq1g1ZWpz6m1KMe65xDSkwAeNGSphMbMjZh1EbfRatrFR",
  "key31": "5bPGmMV9yn9zKDpRpzzc3GrmNBox67pTNXkt7AgCz3M8XpFagX777F3bSz9vA4dRqwVNiKRWNEBPS96SGCgupKaK",
  "key32": "3AwE59FyAKVDNDQMo6YQeTS6YjwCwX1f7shuccuompSzmRbuA7Bpm8sxz69ZwYkSsr2UmQUQnkihwvdUYFHG2ymt"
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
