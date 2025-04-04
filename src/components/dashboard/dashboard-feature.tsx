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
    "67Yddh4GKHcfykftTct38qwR6QKpgWcVSbdqeLdARxtvvMQUYowdAVDofAoWeiRbQt1GPhmVgUrVCebk5LaTjxCn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5V9e13nxttYRKZMQ6Kiv6EV8q73xHxsNTWmtwcpt5DPdWNa2WAE3AjTBNfSZsDxMUDviqeYnpe6ZouGwA3eHJQbC",
  "key1": "3HfQLHjzyxDLd5iPfDc6YFgH9gt1gvoHh1GR8q9BTYTKjKEbGEfgjMYM7s1bYhKwPCuXnKsatCcsECtfxDmKnbQc",
  "key2": "3fAvt2cPnHL5Zeh5ZH7RipRyscdKRsVzTJ47PPioEd9wvybWYtg7scYLWWxYoR9bANwW8hVvAcEkmcWFYE8266QN",
  "key3": "4JqQrfwv1AZDcHCgmZJiFEPFDKFoEA4Zuf1YxvbeJogZzu2b9VDuWvfvtKkJLa8523ZgwJgnaWf8QwCGCZbjdnJ7",
  "key4": "5PWmUywfgVDwCwRWkXvxsRXVzoz635CVco9z6KfUpioncH3ohddwSpw3ofdQPE2EF4zsooJ2sPSxZdir91t2yV5o",
  "key5": "3JFJvKbJj7WcLCJ2kXgVtUiXPRnS1L55cwqS5Wmc4zh8xDEf4C1TTDK4D8NsXawWPrQ7zXr13aKCjnronnCwPNqk",
  "key6": "4U2FW7wBf7bPPvsxXt6B7Ps13QQtWpKF9kszJiRpoqbbVxa4qbhKNFEUyXh3hM6LQcpop1SadLQQAqvKhw5niyw8",
  "key7": "2KjTnyRcUxWZvPpnQ5H3S4N8qkWCgwq3M2BWUHQ4WqFheL6Zk8DCv17Mn1NB6RCh8LrP3AzTQXgbCa3zzNL3RhCk",
  "key8": "4MGbd71npCTwknZNyvsifTfsJBWjZUpKFAjox1NaWbLQy1JymLaevRh7KRDz5CWQfndrhivbpC6P6D6AjdSLDtep",
  "key9": "faSYeQS5Ejrke6U69tHNVB5yKgFNpRwQMNyqUMXh4yw9DmPWRGsigQonrfQNUzbSCrVuqqoQG8S3ZPxKhc273gV",
  "key10": "t1oTKLW6t6HdBt1BjeEDt67HtNpznyehfbkRytJrJLz1LhPo4UWfWjBSxhmEZQykAPeQKdUNLRi15pn51LztYtL",
  "key11": "dDR3X7naQtmzPhVFt1obh493aiye3z57H8Q7yiahVWpHYpSvWdg5j2AuXpRHDE2HK4HBA1qsTWi587QrqKTVuoD",
  "key12": "3iGqrXnZA3JTY6E1rbyWc6WGZs7XyQEGfpkEmzoMCurZjTA9bMVPg6s6j2AaoBnqSUraHLLGWpGRwnF86XskuhyF",
  "key13": "UVJDJkNe462WG8KmZ7mRYPqW6gZeDmzFCybvrqgxLXDLfDEDY1e9SUpHpB7YadHqXAFEGapNU1faqhpRDxR8oq8",
  "key14": "5hdQCJUkq9b4N4wqydoyEnjH3efsbtRaQvy1DuAinqye5Gd9VZHztdE3WRpBoJCaDUWNjJTDQUBSAFR59XsfgpbN",
  "key15": "eGJdmCgewmt2Tdq3mRtsxq3xifZXwYEZRAa3Di7ik1wEMCxmLARfXwEHetkwegFhL3XakpZDKyvxGwTVQM5WNLs",
  "key16": "63DX9YbPxwaV6wazY7oykDoApY8QirUBsr6B2jAqHkME6hEwfo4LbkqqPW3tegkmZHeCeMGnoKvppLggFPweVGsW",
  "key17": "KoGkQivL2Bw8HyW7KAj2xD7ReKcWRtZK6aaXxK3G7pCn52YKmZTdpbCTnJgvT8Lyw55bWHk4i4iunWQGBAoQG5f",
  "key18": "5TMaj25cx68xPtupw32HYgUrHzjVHNXk7B96QUachGmpEgzpukbgggwP46cq1oKZJh4vd1e3PtbwyqvsHVBFoPk4",
  "key19": "4SZDRj3vmDGJr9K22g3HBZpmCBLHMZv9K42gvhWzneRdgt1LpY73Ypmd6pLCMT6apH2PbWY4E7bfaYja18eidUVn",
  "key20": "w5S6E4YyNwSkQmSbjJ1Rih5aTSAMiaov4BbJsRnWN3CWgYQTxcwM5vgsiPm54KW1biCFp9Dhwb6RikgyE9D1ZsW",
  "key21": "5vbiawE4Rb9BQ2VTYNsoZ7YWAHjbJAebzBRv4tyWqAPqFNRsKsd9gWA3w7Fqce8PoM2qeaT9BeBqE4xeTzrm7yZA",
  "key22": "3bjT4MDGBpWcSMBCUZvPfd5KjZbNopeheyRM2R353V7V7e91aY4NkVWr8DnqVZorJWs5KfPNahQMMJm4yUSbXmFi",
  "key23": "2R2SeT3JMZCJnjiNP9swbnpZXZMgUKL4yp3doLNJfc8qGxYUbAyQWxfVPpoiW4GMzd8HdABci86wkSPWP5TAGMNS",
  "key24": "57XnSzxPn2h4Q5ZJDyfigWJG7JpHyVDrr4Xd9X3y74E5qbNWLT9UBpeM1MbkVJ7g1X4W9XxyeT3qC4fe8p6YPJLk",
  "key25": "majEWAmCLuNnNZ46TfBy21RNm2c7z1x2NUhk7i84rzjvG7npPUnipu5aVh1uzfhgetc2sU1MJHfPpxUZDXH8sds",
  "key26": "2yQtc5xGwTFyySVvaPCL9AXaedkmwqq7LvYLT9qK3HBeUGwy3x9RwgbCZ7bijWRaA7LPvi8SgC6ui9fka3FLcmrM",
  "key27": "3KDFzXCEFrQweDrwXjvEKYXjKudaXxR29TSAv7m5BekY6rpzS48Fd8j15CDUeYWZ17onnQdRGw4DQ6wGcfHn13BG",
  "key28": "3H6BYrfCjehdvmVZq6rgZUSV4oH8h4GVdzwR63kNHXMmDN1cPH7MWBwTfQNoHJt83qhQVkee9NYjqY6QHiAuyiBK",
  "key29": "5VJMrxKPbzD2QXtk76YokFZKWCBFvGirT1Uw5i3g5fkwEUJb6XFVBnNY3KpXUbzF9pmbeB9F4VPLB88k9uJcjVBy"
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
