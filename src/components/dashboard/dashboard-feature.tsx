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
    "5aKBJboCQJeq1isb6Zxje25BvwRvEo49jeEjaXEn9FPLagtTBH5JpTNVE34Tt49PLWBc7rRe6eqU4BfGGBrssjZu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wFfuukyzeWPyy6AjwgLdzJaXTMAop9b1WDdT1sDiTVo77xi7kUWLpEtPBiKWpfQrW5gxEk8Mtsa8aKtbaMjgkPH",
  "key1": "61YkAun4UyqBy56HidTECkyxy6px1fKV77dZsB3mCRbcaZM9wXuhS9utXrMKbjsm2poUqGBKUGNG52w6VxGhfQdW",
  "key2": "3G3Z1MyNvgS5Sv5WJ8ABrT5J7q2hsD8EiHHWK4UHSU7my6wHUKcGvD4R8SGvamuFB5muVV2LQfiakZaNfY3CTqHK",
  "key3": "3A15gy7easbqfFMnA1GA4fydeJjx95zaiATYXgQfkwKgFJb7oPmqRDX4gHeFH55U5MM5dbixxqGQCYEhNSgLyndG",
  "key4": "hMoHgwdNew1T6gPgMEfs5CrDr43REao9NkFK73Fue5ac5bo8p7zQ8CwKnn8sWu5YNphV2CgL4kBCVroJg7vGVPv",
  "key5": "5Rm91P6zZ3Lqhi6SZmaGYkB5u4BpCUq7u3XQHtaJP4Jkf8WXLa28WkL6tzoN6YSCV89aQLUpZVLsF1JWaXa9MmQz",
  "key6": "Uz3LSztamt4D7zamdNSeWAudZr7fHLm1hU6XcKVvy1hqrKM62yjPzr5is9P8GU7jQRD34VYVgZkmHmP9bQiMZTr",
  "key7": "3vjaQnspmu5yjvioomNxMozEeWQUFJfbep1vombq1Q3CTeogaJHqc7EQdfLzU2zZ2V1FZjzM5YbschsafkF3M3Ju",
  "key8": "2gELDiSGu1XHzWPWin3718vr9tEKMjbYqF9ReF55ovJVWNqEgN3uXBWJaCSybdNUP57f2rD5Xw5wzCJVWNUCYupS",
  "key9": "2w1Sv5AXinc6qZeEfvm3UCW5rSRyXJtPFsni6aPDaFw7QxAy61NQn6sWLymZUEnEebyxZRqfdeoFzsR6kR379WH",
  "key10": "5wk3KJnt6M6xUrX7PMfWEvKavuDVJXiycVeFkek78zDxCGMuZYisvXK3uTckm4FPGysvEeZwivJARTVB3UBajrEa",
  "key11": "2jpSmRzC5P19vDVaMtXQYGEsMpo4XkdRcmfzgu37GxscqMsLuLr2BdxbFAoQKXzmygWDpNhQ8KZoZygdbebhnorr",
  "key12": "5uUzn8GCs1CK75nQ4UcyRjXubUafqhzvRDETaGmays6dJ4xH9RAzhktaYHfPigsHFEFoyxtUphjzBxpdPM3CfF4J",
  "key13": "QtMvFsW6MT2cZeqg7KuEF6ZzRtFTjwAL26ehC46zcb9Z37GVsY9SztacVQeETxb91ByPdRy4SVJ4AtTLzNMgoM8",
  "key14": "62UUxmCbi69uvGWBZhhBmdMBvGa4QFKYCgiELPkkQJGYgkUuHQG1aSG1Ufedfcc6pSzmhCRFQim3PEm5RCpkhaxp",
  "key15": "3QdFKq2TCaft5hA1Lqc82exeVB9fyXpxpE8QftCXot1hwNT7PyWLrNEC41VaJA7pQyzno16kqf2xRgyM99PcAimY",
  "key16": "5PcFwdVvunzfjDQ4LDnk5jqVNbtUTM2etiE8f2ZtNeKrrkBaC8SZqpEmvcJ3SEYqgdgFLrrQtd3fsZzGCw63cD3n",
  "key17": "4YUTkt2Qj7siMJQcpJS42ERSKQdLiM1yiQwDQ9YAYsfkxABuHx6vArVWUWvr5s3Ub3utyE2j9Cp59FEKXUXgGus9",
  "key18": "2eut5etYmcUCH2VvWoGdRsUNvxfGHUDy7mGNCp5eb8z1hzwCzG9rHR6CynTpd6WiLFZnSCRbLVoYyZu37cYdEf6Y",
  "key19": "2cE8bydMcrcLTRwn4478yiEEpf97QAAq9einDWnaV2nX1L2W68EDxkb8CP5x3vYqc7aTeXCJeSPeYDCMyEi3oYBm",
  "key20": "5jWLCFxHcVFWfxRKHeN1GuiKfZuqKcJNepkbt7FmNtCs8TEN61KReuJGh6AygzTrcMc9E9qrLbTXcFTGp89Szp6J",
  "key21": "5WVN3PHxDF8cP3X1ZhKQURzYYGVMJgeFP7yCtvAUzLquRQgVv8SDcTtv8afv9thXPMuTBs9NZAxqhJfJ8T8Kpvip",
  "key22": "5QfuhCorbWWm3GcY1o1Y7FhKCoroUKkWPuvmp5gGTzC4AfWGvA91UbNaqdAVkdn47qYvRG4Vgn7NBV55ypsPDB1u",
  "key23": "4ANDKwMWU2fvPctrnpX51gBzeZDkYGoHYWnrP4R4SZoDT8uHyfG7Rb7HsZ79wwSinNJeHKgvkyjYqCnjQb533jVy",
  "key24": "2D2e6acABJJkLBRwTiXjLaJMcqKS3EW4KbfjhKJjW77iyhJsVmfP7ddvU96kRo9Jjvk4XuTnSKL3ghAKjpohPpcY"
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
