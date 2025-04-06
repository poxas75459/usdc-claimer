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
    "2Mgsh7WPk1XJXFHRXSx77XC6vPs7gp2ZREkvJJv7tXiqxPU9XrtZvgmrFVQFYVeDBLc4sMxET6VSq96WtVzz1rSK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SgppYRW2o52TvdbWYMqhqYK54zsundhVCHqevURbGAkgqJVR3zVwSBsMo1QtBA7cVsUTghJHcdJxEkwbRsbF99C",
  "key1": "5AQvS5HifwpSRGwiRWhxJD4ypAiumRqferZsGq4tYGwXXGyfNNRASwTrjWhRFQx4BVKnHZzL9QtbWNhHPksad98Y",
  "key2": "TkYDgGba8rXFZdh6mHQVzUSfuv6Ku5XnE3gTeYM42i6KQLt8WJ8sfJJkTQrhgUFJpaGjm1fACwSN35WC9NcvHNw",
  "key3": "5a19NGGGuYzWbM7hnZK8Q7K244ELy2rmYeAABPEhETmqwW7Q33gysU2rS9YHNjoekTE2rS6JYhrp9WNygPHD2g68",
  "key4": "3vcBAiJcrbbS1VzQGoKjpKfo1e7QdyPHqWRw15DgXRCFizGDScqubEU3dxpmLPsZ1hXT2dw37L1GAg8KwskEg2ez",
  "key5": "66bisWmaWxU6SanyZM6MbVGyPTZTKNLg6iipp19JZLAWNumbwpDEUJubpdhbch9oJjxkf6s1HDkrbDnhzV4ZEYx",
  "key6": "5FsjjvHitnmqAiYJ9DmCgD1EKmd6gAJHTNpY4NDsnQJzLVWPkyQ7AGrXr4FpgWqStddtjuiQVZNXq923ZLEzSb2R",
  "key7": "5jeJSWC1ALCA7AvVKev4nySoCX315a3gqwFGuDA2BopGQ3sWQswfYkGcybcRXSiAzhrPhf999e3VpBYC57E4hjhY",
  "key8": "9UXGJm9twvxre48jm379LfpWG6JV9GeEpc5c8NrovirbeKKZ3wPLXwhkD3fDq8tXZP4AYPbJ5FGTizkunAmqfQ6",
  "key9": "2nkoMHzbwTyud4vvHP8spJcztdQquePRPytDJyNHRnTELFp1LGbmQmoECxTMG6ZdtJxTYD9XN6ahCbvoK2Z3HExo",
  "key10": "gSv4ppWcMWvgJSKwLVSGbfMfUSoa9yFhXgF5UKMsSMapbL4JJRbp18wXyWU1onoUwJGFdrFkAUwhR2qMf24fwRx",
  "key11": "2g3GQqkBEYoKo6VEXFvjQ6WKx7WuR5yDSYMuDCgsZ1oyRKbt7FMczDxdqFhFtp1rQhLUSapv9kpZDoawo7eU9bRx",
  "key12": "4eAQ7SkZyGMiUHYsc1aG61br3inup1rG7pHtxYcV6yGVcnGFuEFGL75mVmv74gvko8Ld6b7LTu4sbFkAtqrhGchq",
  "key13": "2NtQk8GFuprwLMP4mafGwDHXpmSqnLYzLhTVPEmh7UD1tF1yPJcduSHj17h6J5zp1yN5sDZEv2DDMLKnK1FXBcuC",
  "key14": "4LoCnybzPwCDsvUmzJMbJeeZBa6poTHkzhedwQD4AqZ1apxqHcUV5dfezfQ1qE4wosJ5F67UBAvgNHR2pNLSRUYn",
  "key15": "31DC6ZebWeRoRAVj41MxUAT6tj1HyMD5WUp8pzSAWH22wf9KV249NQJXjMA2MfNJxRffmxr2yLm7wqrkB9h62CVD",
  "key16": "3BJrCQvyxnR9RTa3Pi1JVjKYwiVuEchzHn3jJbhMj9W3jeJX8oyph99xDdK71uQ6KhaHYkymbq9CRRFZLzR7SRbj",
  "key17": "3voTBjijvzidzx4PHS9tJPjs4542eHGdPUgyByM2vmdokbKgAqrSt6ajcFGESxD6CD52STwJeJhRcjMRdrumFxHg",
  "key18": "4BdoDU6xq8e27widBpn7db5HDN1m43H58PNankuc5iPTyMExUgU4zqJMyktQLFirXVE82enpLm6tiBBtcNYDyy2k",
  "key19": "eruRRvLVJRfGVEN3dsKEpWYGAF2YqhhRRkupkm8tMxUk1hLojgLwuqLxCPHrrtRd6CgmPojuWs9t56cSbi9zfP1",
  "key20": "47qqCLrbhZQT2HbyPwsD9deefNB7HryozAiddnf1Eav9cZib6xmVTSatoase56K5VbDvQXmrZAEhRbJ26CYezBvw",
  "key21": "62VN99XFvnrKa9cqj5h3whFLFCdwh2TgjLshDvKH3Xbf9NdhoAK6o25HCc7hvjkQisxkKdHPd3FJhJ9xbHNLU6Vr",
  "key22": "4Rj9EpoAKLuLNhrNwvzrcgWSkghCxKzcZapCH7YW69j3xBvzPk8pHa7gbHaCb6fsFXjNQrRAbuqqijvSFcR6Nw3e",
  "key23": "2u2gaNmXmdoSenQnTnBr77ZA1fu2PCgRWvBArPNPTvNZoD8VTJ9MKDSF2NGXEtt9BQSCazj16hqFTszSMb9cEX6K",
  "key24": "5YXM31HQh7176MEyrb47xdSN4uhbtbdxwkzaGq67iLFnwbmbzKrycjp2JVD4rFTy2QTbFtYvKtUyUnmAxsCahn3v",
  "key25": "dwyEo72vwuMQGYzfgJPkJHRgcd9h2w32qyg6cZ98RpXz5Kj3V4WGgkUPVwmHfDeCaYFYJdxa9uJx6PsXzhLnVao"
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
