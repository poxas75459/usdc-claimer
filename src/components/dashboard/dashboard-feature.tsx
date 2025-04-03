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
    "itU7kyAzBkUYpGogULdqv6UfFuP1BMGk3MAWxm2SvYZ4QZFnnbFDFfxr78eVgvbLc6N4f2U2TS6ar4314rnXQZA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qMc1e4EPnvUE8XB71h3NLARzZYekJvs36GaF3Fi8mZfkQ9hGVqferJuV1YiSMzhYTUCZjqjFJJqpujHRhdWdzxg",
  "key1": "2BjYUjRMQEy88JRBwMzqFPSbHSxdvVYT2Ex5A96tUcaSh36oD9hQkWthvMW4W62PusCo98fCwDGbofyLMxfsUP4U",
  "key2": "4uzy22EQyPbGXVgSWCAJncL5W4P2tqJ8MnJr4gunUUBoE3Soidw5t9JBsnHZGkYpxKkYucVt85aHENeoUtSA3Gfx",
  "key3": "uFeLL38VBb1vyeZ8a255B3mgUozDc8yqNoWBUb6iivpgxgXy8pd2EtGHzsFTrAqR8s4c9eM2C8y3mJ7uzhDvAiu",
  "key4": "2bq3g1GNYBEYw1xrSL9sueVFV3mAKUMdkgmLvLCt1nmx13GxU7JHvETEg3DdBP5fHy3jMLTUBaAgTeTccBENYcjW",
  "key5": "YsnqjPBdSkXHkhSmYL91Ub7jxBG14KBs66nfykoNcL7EX1HwkUuz2cjGL7igBrxhBBa5xYqnBcxeiHKppYeUg2a",
  "key6": "FK3Gevw1U3ddMc3gh2dmDSCLDMtpDpiAmbJ3znveJmssn7iVd7mP3Kx3cUi678gFSNhf9FTpXYNPTr6Q6xqTLFS",
  "key7": "4u8iBMkvTN5XxrbsFjUEUprqZWxBwUKPGmG14Bhb3UBmFQzazH4LXw9i5Axa74ZXxEhdzzZqzxoKbUUuNTj8qU2h",
  "key8": "5Hxz7PnpZf9gu9qbWSyquDtzYtELiB5MH7U3ZkmRqxct42mWshpbg5nGj8jgbL3JUzDQha64gq19BmvBDvG9e92G",
  "key9": "5exvNSrZmAX47SMC1SAUmoBvvJaHeDtfJSbNp9s5rfyKu45E3proufAoZFkG9HhJZtjhsoRCnyW4a31UzCb28Ypc",
  "key10": "4EMNCuFRhDfNhZgaq9MH2CS2ieZPWC1sc2PmDbm1L5gR7dnDYh4bnPwZcbLGyzKpaHWP5kPg4xwVYAaKUYEhsrmw",
  "key11": "2Q9xGGtC2Ca8nVaurG65SFKCjqTr68pXfypMLYJ5dWzhjxuc27tAohrfEcQzUNUtp21Sfq9tRd1ZJdsdmyYcRymk",
  "key12": "2BaUZHcHsT4JTLCAQBBmG3E2TUcxNyNkSE9qPaKPmvXzuCdw7YY9UTdMRrTRnKmwadbYPr995jNjC72FwWopzAw4",
  "key13": "3vyopJeMeQANaak1qDGLUtgrWmSQ6ZxHjQP9sTxZVSoF78CYK7qKgvwtLBwVVxHRiTgzKycpLCN1nXHdJrcQQhdK",
  "key14": "62nqHvGpnMtb3is53uvNgqj7LrkB2ukJEQoimEk1cB31etJGiZms9RtF3bjWsEDYJ2ae2hyzyiEHxajTamQFaAFN",
  "key15": "67LiR64Nua53bZXwyHaazpdpmxbjpopQoGDYUDJbemMmVnWihNguZqQWkGKYVvNYJa2aD4JbqRtU6GmmfUssdn7g",
  "key16": "2JCskVXewWDBrbQQsMoqjeDCwFjyvf5pTcsrYF8rzhkKgaBwHutRFZkMv7G5sYb48Lq52QKmTtNGkPGBAfy5dCwX",
  "key17": "3zFXXkvStot2YzftTsCTF4RTdXS4XLM8b7Jz5XeoQsdrJ8tshM74rVJNcRRFQt3tkZ4TJZK9JwdVfLx9vb65SzP1",
  "key18": "4niyA4FXTkTL4iQDPkmp5QoFB4CFZKQk9Ukcaeot7fDPBotMAX7fU34SxKN5JhUriEJtyAKHqF4wdfvxNmfqU8kE",
  "key19": "2Yt8sJ1exhvjU6yCbs2L8Ss538PryWD5dCiaEhbkMKA71EXKh9bptxwkyCZ5soKSpDKxgPF4D98RR2AZmwNBd2Nd",
  "key20": "pidg7wJV9qFETUY7quPDKhyZP29X2Cj3qaTZYLxQLhna6tSN7rz3KxpyFrwpCV7hu9FNKbkVciRA88DZ7rQzEc4",
  "key21": "QURKvqyQB6Ha4PhhoQAfPVBHbZu6GA1sZdyUNVbcv2hPX3fbkFxPFdiD7f9Ytv93kNm4tCjEqs3AeYspu893nzM",
  "key22": "3yqs3URLFcqBseSWVmK62o2rdYWZ42xiEqNSQ8szunsxArwyoNE4pLtK6gZue2HQi5XHb3WQXWMZ8WV3Hfsd7Re4",
  "key23": "4nY8LPh655b5sk5rhZRUJXeCyvFquc8LXaWgWpgHPpX3SdevqDrg3dCCX8mCvmqGMSvJM1VQB5hVLqrHJ5pbg4eD",
  "key24": "Ps2MME6UBeWJCPzcJoyjEMRg3yPCDLjamcZuef2ByqQSVAHkVbWCRLzJpoD9WXCq7SnrqAmEgdQ9LAAmHnKoMeJ",
  "key25": "4nrx9T44vAoS8QyDb4oi6Y9SfGk59JiMyD9a1i9s9Zxf3mB1hcYxE5EFck7AjiRMzuMxMfraWHCfoaGhn3kACx5a",
  "key26": "5cF2kZoTBKDx3FPgdrwbY6yaaLJwtz2gDZTygb3AJz5PjS1pZxrTDUyZ75vF4Tk9tMnkCeCg6QnRur5wDUR3RRjn",
  "key27": "5fDEpinEXowvqKZrDUQpS4ETaJVW4NdzSLNM8wrBWgmnvzkGu7xTMkgXuNNpHFb9ESVCB67k3vAS7gTSdFZRg3GR",
  "key28": "58yxx4fJ6AbkRx5zmbAQwiLT18oPWzAfKRUGUe36Bst1Uq88XmZoPGDCxkQXmThPJUrUN8SsFYzFLg4xiGyPv1uU"
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
