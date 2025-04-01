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
    "26Z1dkfgvN4iNb9SUnFaajPihJtdKJodvLHVxCvmbYsgWMwMxL2E3Fmi9mb5LZx4r1rJCqE1SfKC9rY8kVXBidis"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mQoCS47P6rYpNV5TXd4aU8WtVAA4Dy6eJnYzjLqSKF7Q8L4T5ykkXobd4AofEDEeoc1Fo2XDrgJo5fXfVE3wDZF",
  "key1": "3XWVxYPgZHxK1jAyzR7dxgW8Cnix5EBa94fwu6Kfm6CJq7TZmwaoxACavmxhPSY5g6SBqmLVmg3htzCqVkuMGh5G",
  "key2": "2YTRrQWwffKpeStJTGMEd52T8Snnsr3hjJjr9f9AKbrrw6fKtdecihkYEX9PwHgbAZaBPqV1Vmfp6YLGzcG1Vikj",
  "key3": "4ABcW1qgJKB1RdbNR8RmrpMJ54yas5oCpfy9qXZ7VuFpg1qBL6yRJMj5nUL3Diy3YeDgRstE3pPcHHEEyorjNvA4",
  "key4": "54nCBu8oaAQoChpHCcHaGLsR1ffwtFtdgbB7LSZSefPkFFksVY2m2ju7LLqL6JDRMh5spm1JZCWbePDm5mcCGGUo",
  "key5": "GcwvZKTFh2ZEuuny9Jb1QzkcndSKAAmKhcSMyVNJCf8PA1P2bNa44HYo9NgwkDpE1XpCbBoQbsD7LpDW3Vj1u6Q",
  "key6": "3GhHcd2NdE83TQa7M6aKjyZFTxcFtofbvGcw57f9FmmFr6fvS39zTok6WgeZW14WMDwh2d2MXuYxf6Bo8Xpbs9NL",
  "key7": "4GQEZ7Dc39fA2uvTBg8ocoXT6auP2SSunZyJYT9aSnLXnCrmL1CNfN7S7qLuVcPtZzVccc6AZkPwBWKRrc84fs2m",
  "key8": "35KKdT1hEc3t6i5boWctEnCCjVdwygDjQFWBFxL6gHBdGUR1cX3Bfr8ByBT3X6m6twFRCkN2HiJ1KknBU2BzJAf4",
  "key9": "YnZNfswMt1ScYMRyq6MYgWXVBmvABbrXiQecdRnCNA73XaDG37yX8BNS1hN5J7NTv8GDkiQ6x16oB8g9PMQYQpR",
  "key10": "2xzS7hwYW3CJnajxFmAinU7uqS9Vk8BZ77EUGBes8nobp19SzEv3Kgsnbio4DufRqUjYZrEs36Qn1pfcAYZV6qCN",
  "key11": "2UasiqTFJA9pyX9BTnLcFHeUQgE871tMfdxCUyMS4UxmYa7gGXGpyVawTaWLsL2jNKjCAnSyzv8N1bpxwWqSa6MC",
  "key12": "3LUrga5din6kJYhayx2RXMMsg1M8wL5SrzEjbaHG3sm2wkDpb5hBFsNnVmvi7qvSTng4G6Wfa7E6L2Kc4V1RSqME",
  "key13": "5KHKQ8p9pcnLvRneDQVvp2XFgFdQGeuy1ZvyLSE5zeaiTQJ4tY8ATJTmkmRMouPdexT6dAvJvBGhD2f94SRNFkWD",
  "key14": "3th1f7hMKDG6Cxt1Fn5vctmbg7tjohf3iU8mqVrDVRcxpyKQLdfd1xmH29wgEjfiaPpas9oJT7H2C2W1CYBhZdQL",
  "key15": "4w3CJ3dtLThEqJCf1UkH2TCd6g1Lj4b5m2YoHWgq5NcsZVCS4MLEsiwpVC7mwhhKPWt9iz5dv3vyfo9PyV8gNzkM",
  "key16": "2v3BHvVuuPaLA7vCg2QDa84c8Q7DndbVWdBfifeGwcsP8cLuuJS5mN9hqqs2Q9JubnxENSU81ovA784RSSqqFSpi",
  "key17": "26dkth5yfNK2oiqe5te7sQeaF4t4gWtdWDigErcyDGVGkdx1zHHNvresEGmyNtswenuD3kk3VKdGjnTdSEm2jyfk",
  "key18": "3x3hXX9RsBhuWGV9vi38WE6XHdF2WERiTwdgxPM4up3ugkUkmeYpusktqSpXHuKt9BdUTCKXCrXAjY1EsxAmbaVW",
  "key19": "5FTP4jn2APheQV4WfZMPWS6iFDqsqjFMnuuZixyLM1NuQoabrNjWf2ntMuuqLoeQ89QE49u88NJvhyJ1m7XaxQon",
  "key20": "2p8dWKDQLn1iBfJvUMm1ZTgMgwyquUF2pt5t4GfAX5gVkc5Wnf6HzHSSkkDPCvtEeHe6tdvLDevWFWkWgwXQEyXy",
  "key21": "27GgTTh6zrFuVt55UMYec4Di9owwnCyLEyyRwBwcpqdiDuNdZikMHLwAxEhBxXE42gyASjnpUnCryk44LL7Sonry",
  "key22": "1ryZgvgdZS25V3asZiRTfKYEM82KdHcWgfWtRJMzAt1TCyLPd6A1ttj8H2cSauNVfiUW5wrRLgNM2QTDFVKf5D3",
  "key23": "5fsNipCJjknqC4qGZDj5G9rxycp3ZmCTYKju3q5CGnTKb6LaaQr4WnmsdQQA4Zopn7VC9z6TFqpCzWEbN28Wjdru",
  "key24": "4W99XZ8KtiAGfuP8bVgc243riW899P9uGBAuDDz3e7Nq9VnsFdbLuV9yu4UQJr2GMZMU6DMBAfvUMiabzcyHhhdJ",
  "key25": "42gjjPbuYupTrHA7nSxphvDXywozygAokTBzbqV7mWh2pjGUsydgHJSqe1aKYSjD9NCULfNcfwfpQXp1wBJEFZ5F",
  "key26": "3MMaqeHkdcCf7Ha5pu4e7NywkmStKD6anwruc9D9ksoqm8q7wkkTLdD6HKuQzf3nzJstU7PsSe79Lw7K2aZsecf1",
  "key27": "2Ez4gKqkaznySuskyrJEiWYPsVNB2W5XoeApYDV1ASg3s8ycaouRY8yHeSkUJeqGyKzCL2AYyDrCExjS1PyhcmLy",
  "key28": "P8DeaJf47aAUvy9koxMUA9YKmwiFCADmubLP7uUTdT2UMUXYjcZLBcGij2mEt5BntjdpRjgGXffSJrSfdDeQvEu",
  "key29": "34CNfrAvhbk1SajGv1jWJHcFBeB5CsRYZXv33KF3RFLcCX2RnGNzGKGZsZ6wrMbw2UPC1hnyXrp5pyB8dBuakFTC",
  "key30": "4NPv3FUpxzq6CwZHLYirFB6fi9SHuwXhZNXifzUmhsEA6oAeuoA519ER57DwvGXBhcQhSGsj8WfaMbq5ui56wvrx",
  "key31": "hq4gP2BScUtcn4VAKqSZv8GoNwsGNJNvaHANn8RWzupuja4Js21dkX9qeZpdRZ5JMaYVwAHma8VwyBy53h45kX4",
  "key32": "3EDyrvPs8fjEawDdze6g7RZtKrNZsjbNnoRKhxEeZptK7o8NLAHEzko1qA7uS1oNwHkyVyJ6vvJ9zm6ctRCBp1Zk",
  "key33": "27XTGVfVaTZQkC4mX2UYJvJzbUvDkErkzcnCbCVyZziPM5LtHC7CpNJEqLeY5BPQBgh3zfLEKpTDvKGHU4Vsd6eN",
  "key34": "2eESN1hHeBN3C9YysGktQgqBypMSiPDU9Ymb4W78B7GKSeQkK9bdUobgj4D7kg9SFBU8RJmVDygPM3MojAYbDQmi",
  "key35": "5zbhTmzEZ1Sa9iyHBheHWE2KkwVoWj3kzoGjd3auMfqxFnBnL6xsjreiPmyguNm9NZuJYtqyHVswkMHkFJvWJMSr",
  "key36": "4GMSYjaYWLRRXvYkW8sf9VgtJorJYuYqSBoPURnvECDzyeWPQchaqX5AbSaZemBwoNXKyfRNCB9zqpWG4bWfC57X",
  "key37": "5MwXoZ8FoTjVvojsa1MnWkWLkYhRqzv5wBvc6UbFU1eKzT6TsbW49ZSQyohPQZjVC6Bt3G6yHbMGETs69k9gNuSZ",
  "key38": "2XEUYPao3DxkVb8VQgFiVFAufrvXwozPqP7VTmFAcregXAxshkHKBaD8ZmEcJpmq2Jtnu8ados6DW6CSs3viXjjf",
  "key39": "6gmudDJ7ax8j3iTo4NsuCMu19GaE2mYWw6H9Apjmh9BJBx33j3JYu1zmHygp8o3ZXPDLs2UTxyMjAW6AncbxjHA"
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
