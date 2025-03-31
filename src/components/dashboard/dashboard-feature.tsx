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
    "54C5UYijpX4sY4erAhtJnz7CTTzE4pJKDXHMshkv6D2iBaJ9NDxJbj6V27rK3PgHxPvugM5xQWBAjCVVkEXgYVPL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "529TUi7V8atCn1qFbXvgBLQL7XnMoh1TqVc7pj7WMXoZPS269LoH3gQJNTmh19vW79yKPdSx7avAEvWDZZDY1LGh",
  "key1": "5g8777cBn3kczrEE8A4NAqzmDTvTHNgHMFEWvm3qjjgwGeTHr3nG3cAS89qvuM9oQZQ9wMfEGG4UQQWrxhXbPeFQ",
  "key2": "3aNmVFC2adC4isC7b7Gk4aBRv1M9yVPm48PWNdb7fzrLpnSHijmteFqmBenjiZZvcHku7GtDAKoqJ9q29GVhg4A1",
  "key3": "RnHAdgYsHYgPPXovrJUMzMN85U76AMiYVDaxm7kbRQL3KjK6fdFZScd3EsjG1WoUKRbieMLzczsx6MSEhHEVQtB",
  "key4": "ebinYeUgbw84sEzMQWsoCQPej4n2cVGGNexwBzXRhWDLBCQgHob3b6Zfpq9GQCkmnH9ZN9nGsPpHLrffxLiTeod",
  "key5": "4Tdr5VMgx9KbiZddLksVvKFwsVWijrkts1XujbrSBjG9T3aFoJSPfLBEuXNb3ywhoH9Di95qsdHPUvUpkj1v32jC",
  "key6": "2Fim8sQCeBnHQ6t3K3vdrMhvzc3zYwpdDQeZL41fMFJf4MZ59MqoKU7U5DNBW6WcPUkKmUFrs2vXDjyiJq6RttVQ",
  "key7": "2HHW4KR48KRuhPGwt5s38hNkAsF4G8gfouo8dsQnXsyKmB9RwqPFjiMdkscbLUE6mz5T6P3tM7Pt3tDBFDK8dTXq",
  "key8": "eJ9iPTkXZkE6QU8gxoNEt8XRTgjomFMEneG8mrsfpoEY1umvV5tM1PMVUTrdTqZC4Sdny9wYQspcCNDrhrXAWMB",
  "key9": "58XPESUCMLyitjB6JaKHa82dfdpN2jswLA88w1hPm1MfGUbTVUoVgm5Ky6T8z2V4W9uvTznUYvnjLfd3o2oh4v2E",
  "key10": "4RvUmvsiMnSZhAs1CcXzZ4ndrxqYwZZrsAXP9yivnySHJvgRD36mK9FutcsN7Lco5hMBnWXFXtRrByguEXTxvJsV",
  "key11": "27HuK17iAKtjJ2mYrpdCw6Z8s41HwULLhVNa1Hj6gLJizVeh4inhwXQn64VHxDqcfiiVup3SMppTkk6k7QsQ81LL",
  "key12": "mjxfe81H4VN8iNeTtkXufg7MGJvoZnq5FsyyH93v2pory1h9s2RWmu8JwF2LzD7eTK1J4UE3iyTEXKrkGq63mT4",
  "key13": "2C7hCYDr9KzbBP62uCmxqj2ZfXk8BJkZHNpJseRyQRjTt1icATC7zbRAtvcdfgR7DgWXzdjU79wmEr2Qr5EVQYf6",
  "key14": "26XFvwg8X7NbGBEEvK4sFmzhR3AhrJgxoZ5oghekfRD4NV3LP43XcguQLGm4zwymeHg9yDKSaB1vbwA6ZL7b6thq",
  "key15": "2QFDfJSAqZ8CQhZHg16NGamegsjdKRmMekeEmADCtzYKTb1M2ND4N5Sk6EV74aBGsYCyfJJoaN6sgqLKTJv7XxE3",
  "key16": "59aNHqV1eXbYrhPoAzEPWzjh9UgpxmDPAiwiiCL3kivyMMgXgbRKuvGynjLE7zpRDURrtTnQTaJUh6cSBcrGJnHP",
  "key17": "5xHcUhMbH5fefw8RyHAEhj5kvdrQRUh1XmRiKnLR3MZBKoXuwAYD2ggB4avsJN9F69itDxEPnPkzLEoF3FPcqqbu",
  "key18": "22YcAQr86yNduvv9wLB5JJQMTMdHmmwFGBjeYDRhWZfogDU4gNzdiwaCrJ9KLFiZaFj2oa1cznDnR2E3tRxFdqcm",
  "key19": "ZBnc788kWxLPY2fDm8DqoH2nbNfAm8uaom6kScN3rwg3SgxZfLXG6PaKc5jsWFG5UeG7ubn4U7S88k8EMJk7axZ",
  "key20": "248Tn24U7DCABdEP6dRXzQWb3jL49jTkMncxajntJPaFYKtqU37Q2nQ2XYY6LdE8u9jMVg78gDr8X9seZQfSDYUN",
  "key21": "3ChHSdDbAhYasvk9FkGtaiBo5EmSgdJvhSw5wBWioT9vY9eJfWUmzMKpv4roZ6AjjRm3uwGMxBvCaMzX9sEZc1EV",
  "key22": "5a9M5b4qoDpWjiLgz3MpCFaGSfEdHnLYFbRzpRY7qGchrFR9UxTZny8HKLmqpDPL52EwZsZmjcRBM3LhKckorbGu",
  "key23": "52kpk4kQQNfLLi6iEGWBfH2LrhjYwf76UKj3CbFm5sfzpPuKmgFTRpdVfqysjfrRCsKaJApXWS5SZ5y2FYt5zWif",
  "key24": "4FiwppVhUCbfjTgmq5RAV8x2CwJdSXAs4WkGZK5PYhuHsBo25o6vaDnkvGkNSEi6Up1ddueQxSxmw9nJPxyXGM9G"
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
