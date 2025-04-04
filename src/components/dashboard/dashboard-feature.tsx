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
    "mNFe4MuCCF7imi8UaMgsGo9fxZhSDZ4RzxH8Bi4Lp2yL1KXVr9UECSAZvqrUTseBNYGQ376bxwFzirk53NzhGGx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2x1kwSMy7bxaeW9DVU6rnPSYYsfFggHyMD7GQQu61fRH1iRn4n1zZYjri6yrr9ejomRNy1FBXbMW9Z6NRwKFCRkk",
  "key1": "Ta4QhMawzPf3MAu3NTCoYBNj2oFG7DVQuktib7erF7AfHvM9EFBob3e6spRLLu6K85wyeic2T9J8MLTDgBhJyX3",
  "key2": "1q1nxxB3XeDxwY6wZS78Quvk5yFJYb7rrbCjiXTLMPiGCGw1VN8y8hFHUXmX5DMP7nKcdy7voU2EMcNUjfhzAm4",
  "key3": "2qvFE3Wu2BwGNVxzqrJVtB8zG2rFu914NLwFzPDgSDczJKhxtrR1RQhE29Db6sKerxZYoRm1rQkU2fqPR6aEorqD",
  "key4": "U8CgN7Er1BAdW9QTT6PR71vwdhqPTaivi5CaQSGfMg8i4DuiLbPtiiZ1EnfwHks8f6M41YwEWoiubef4aKrdk6h",
  "key5": "3sdNTk4dWoNct5wrGMLHyieo8RswGfNeE9SqAWK48t2np1oUB1uKgEh2qZLvsmznSNV6sSpdKaMWAvYDGBUWA42h",
  "key6": "61BLYML9XQZpyF3yeGQ2z3x2koNfGRhNUyyexbpxKoaTG1dA8Nx6BZbQauRGmSnVUGT6UyxwSfAjCmGsM3EBZZbg",
  "key7": "2zx3JPdPQZ31eNurZiceKw1r7118V6b1v7WhQnCXQXXA7gBAcnENfrPF7X8X5mUocuenhoc3VoBKvnsmpiK5HFA2",
  "key8": "uv5R3UPsE3LMu7Le6x3iRyPNJUL7DShCD8S7Ygc7G1WBR6VMdH5MfnjnTXsBW4jHWZjkEB3cnKfKwGGZKCozFxp",
  "key9": "4J74DWxivhnk1Qic5VfD6x1zhpbFwfpntj5db8mtE8k5KkRpy7vC7PaLrHLVbPCyBEyrPRUpRKW3EBLDoVaC6YkJ",
  "key10": "cyyyAzKaF27LuNDZSKUZaBHKBUqjTQ3DFrGYMJFt3WxUJgU6p1sYBZFDw4DVDTJ42KXKxyY1J6N8adDAKKkcxqM",
  "key11": "Ngtq57BW93yxiVdBcbQ2hpznCzq3qDbN1uuTNiYnYNyJUvneqEMxhUES742Hkui6BGdiPwWM84siocbkLmjdu4m",
  "key12": "34tNLen736vneVch1NbBrMFjijP45EFCviPVymKD9JSxTK4myncYYvNbtzAuVkuw7xkwRVZU466VL9LytZiAHWCL",
  "key13": "2BRq5vbqgdFgm4xtCpCuQjwtgy8NUPTni2Cghx2NJZAd2eUBr8rPwFd7MqJxEtvQtiZueGCtpHEDtdYXgMGyJRw3",
  "key14": "3apK5gc1nuhYTswmgLRxXukE5btc8EPN24dmnHfBRPaABGvdaxyVWACzoKvjtziFPPBWidujNJfrB2fKXiMNFRFb",
  "key15": "2wwxXN6RSWqJBStUqw4xfjYNAqSi5TxpM1jF64nqiWKACkP3BUi2ETuEFH7Hg7dgA3sMKv13CMgdVJhPHNHhoUCk",
  "key16": "2xu1Gfnn3W5hiFfGSgmQZohb5wrvvpScewURaotSfHsaXEB1aKVoqeyweBQtFcbeKyReLjFd8c4gwMJdkNfwxWsH",
  "key17": "4pEnPfNmhSgt7sUkmxgkDQiYJXgofgpevZCCAUymoD1aVKc1ZHk51cFZqMnzFFBmypXj6bv66q2evceR425Gp3zn",
  "key18": "4Dg8viSh27hBSghBPVjCvmVc2wqA34nB3LmCGD4ZLshApYWw4JdYeJjHjz8n2XQBA5BnHcJbtyBba8p7ucNkBkfn",
  "key19": "5FvFggLedhXG2Q3gBjPPPGT7f6GFf3XvcGnS41891swD6NzAR63B8FpEN3N7wFgWErdKifxGcWqgLSDbxJN7E7sb",
  "key20": "2M7G2chMz7GnCA2Wq2Yb54TJQqdWRJ6mAnWpnCJYLSERxe4FRV3wx3qviVhJRb4KwoUViLGakxiGHUaVNnApKjzY",
  "key21": "3VWXM29AzCto12m5xuNEjf2KoKb9Qi2vzioguvNKf2Sh98hf4h2Ew5dfCn5Z1wQYCPDipWbVKYqGWbGV1MTipx1N",
  "key22": "3R4YVfavYfqPj8TczaQAj7juM2FkASren59YkDAt9sskZCGT5NtDRTxhizH9Qdrb1Qd1QTD8qoCcAaX2qqKcVeeK",
  "key23": "xNBTKmQc39ekxm6MK6dtGaVbnzGYHLbyNQR1CkZCr3yt1AjZZHCzcqsRKjZXLr2VcATiLVG4v2sehVCTPWYwDFx",
  "key24": "2fiTeZJnhEVFoMa97V6xZrmmBHGnBxGxdbkTsFVcovXt2CituGvVAnvmCbgZdFHZJTM9jmZRipfz87M9j2ZBa1Da",
  "key25": "u3cvr6M83A66xjg7cBhsnqqzG6KWJnDtqi3ShdoB2iSUGKLCM1dyRPoJRcg55HKrh2X5E3n3XiAPxqZv6DYLeXS",
  "key26": "67D2CFmTN6PfEFqocnA38idEAQVjjU9Wxnqd7AZmQLFpT5XkjXSk4vWoQ1XBFJqhoLJNZqiQBms6TULoSAK3RPHs",
  "key27": "zinXWM99qKGZxjpWFoX4izmaoERyADGgewWXdyBE8c9uBLs5Z6DReGPovvi6S3bfUA9tzQdAhhkGwBA2Q6LZRvQ",
  "key28": "3hD82tj1sYBLnjVrQ4UVyVHRmVxTMRr9zatMEF1DMLrVgATzM3AK1Wb8P6cf3XGRHjmvmWZ79yX5y3GVpiMEiKUS",
  "key29": "5ZZSZV7HFGwvPnwt4eVtHeiFdPnVwrTygqsivLTabmBZxZGqZCDCeA4ssQeNTvtmSVZdJqHCANCNJQo338dytFwY",
  "key30": "51RTXmq9KJz51QURqFFRUjEm41Dhft9rBBDGERNpAKNBhviPDj6BwmnVDhLhUnGhMSrQnWudYNEepsG5v7JFecct",
  "key31": "56cU8n69YcYWPke1uL9urQsE1RQnD3G9eR3X94qTsRJri5YyMoDhXaRyU3514sdQKgDXo391t1WVjSoq5LAPKfn6",
  "key32": "5SThtByHFskvmvBt7UpAvTiGQdCegxmmMTEetDWLCJnn2vcwJibwXFHG8Nj3qhS5MgZQjv1naTaUR1CQvBy4K9TR"
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
