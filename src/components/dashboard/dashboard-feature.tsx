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
    "4Q5YRdCefZJ94qYojH3N8GSRXiA7Zu2sdkzm3YWBc8sWHRkR8Y6mag6wjLs6iSzRXEXA1TE6mKeU8DNEr5mcL7xn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "224DWMaLXsjZd2qJ2vm6z2p7eKSFPYg4o11tGTL2rqF9nPoSo2D5v6t61DudZ7rq3PHg34up7iE32cvhJL7LiYF3",
  "key1": "44uqoJwMSELJJFB55HCWF8C6p3ATUnJ28gy3RnyvSgdbMHAQUGtXnewtCcwecd8jBaZCu5sFfZGoqc56P9HsbLLY",
  "key2": "3eQXJZVgsUUudyMmjvNSFhTPDCVrGks4bRdxG1oJpjr52yD3R7m9u12dg1poy7guXZu1x6CcC4k9GrxqfiAaRAuy",
  "key3": "5DAsWtRBeXES8EXNaEPKbBLFvXdszDHzqNYmeRkax2qFxLhJXboFPFT7xS3soStcUFPwbjqjmqhEqTYY79BxfQW",
  "key4": "5yyPg6Qvag7nfqM2wV2wNmprawdZsRVSiew4F36uVKqUsgByFv7NN4efnUeKHcELftHQaQv9L4RB6LQLiuD5Bvy3",
  "key5": "5BqLqXjpojUCNdauJRB68p6KNxhk1VsCWhYk1zy8uvS6qumaCp94EgNs2CezCKjJKbnv9uPueZGC36a8NcedDC7S",
  "key6": "5mAzXWQxDqtccttndaCrb4VTUcgGjXs2wWZE8gCpYBXPD65oKdBfnYS3BFev5p8J4jUskd5txBmbKxUVFNpJYATD",
  "key7": "2Esan3XN7o7dgDapRPS9aW8N2n8W18vKWdLyRk3sme69j57UmGZdCG3AaG3orYdEUnjasBPgoP4EYviAtgGJxwob",
  "key8": "52XwmMRpNrjZQaFpAgfi4tLKbCZSYB5hVMkDNeqzDwdHNpPLev5FxZ3cktdQnFgyvaJrjxGPjKVh5tTFuD8ymJMw",
  "key9": "3UnBQKDf8jQLRErxDzPT7GXFhmHgxmd1VfM3APXaWGrERk3tsGFbjLXQezeFy21uEpz8eJejL6H3okyiKWjoqxSm",
  "key10": "5WDuVyB9HAh9ZXS1ahX2HTGhMrbkbRkgZdzHEuQZsYr1D62jGL41QW3rVwAXrRDq1QNyn6tFpacbJqMTJ3XPLm47",
  "key11": "ymc9LYXUUeDks7v6fZExjQaA8UgqPdL58X9u21WPnKGihrqTNte8aQGQxnhB5YrCCvffkgCkAQ5c15Ui162psgm",
  "key12": "5nLXzjJt2JZjv9VpwcBiLpd8gd13qrddLDgQSttYLGUPi92bXa4w84hrEiNSC4443gU7Ty1SvVJ27nFdx4kMMxDj",
  "key13": "5HvDjvWX3EWVd5xbu7UjZgdbqPwgf7EF5sypyqCaFu8A8ziLMeo51rLRS7bDAUiN564Jhkv7i8KaQHBzfBc9YHzh",
  "key14": "4LY73X1FJiunkBRQJJ6t2VkN8XcZRdNmGBgBUkGQCeAeFqscgAZKAFopySt7e5YiaYmUCHJe1qjB3oJsnyFoeeeE",
  "key15": "3D2bCga7qwrdyPcDRcd2WZ3BX7kdjgPPD5i9fdsqVUqGDqX6GLz8bMCP9TcMGDXkGXf2Hv2CSwRZBv6fbdRjovmw",
  "key16": "36TLDNyKjKq3eRBUPFWqGsyipiAn5RHdndkkSFD2JpguxkeKBDLU7eSKsbiEWPcnzsZgRNz5iJrHjJtC4rDPB8Ng",
  "key17": "6AVonE2QUdLiLixYM3UNZAnUd5ArEnFgRhy4APsLi3vSf1y7FwC4aZzyynNi6dtBTHbsCYxirsAHyR79h7vcsB9",
  "key18": "2NEcx7KRtRtg42gfNTV7YqLSWvpqe9JSRfVNmXyHvVD9h8FQ5JgcniHLm5ExeCgAVmun3jL47QM5T3WTkzqMVXxL",
  "key19": "3Usa7UhndnzxxxkfQDS6L2yRQe4q9jtKYqykwPtnbeRbKYookcNJJjcyEYwqtG7WHYLBuUFQAQrEy48QfHsraWW5",
  "key20": "2LXJdu7NHUpJADa42xv1fkNuJ2R9eKDZ5HfMsEzV4c2FnW1399uk1o1jsvKHqCtZ8KVko7whi8LjoHG484QVSEkW",
  "key21": "55kFKcn2BoMfGfv9h5na2FmaDSUBqnrr3wVHGi1p9BmSQBDWcTLgd3HBmUPbcGiVimRiLuotuZ2V8nAbtdBksgQU",
  "key22": "5DnMfTgetbXsh1V1gCQFqBiCr6tmhstW329QasNwrtUtwQyFTJjWe9NmrPyiJEEBaTPNt92WNsAE5cjpmv8Sfpip",
  "key23": "3MYc9n9bASEXdWyhY94stM3nC2toCwoDevZeks2Bp6qAJYsaHh142tEtuEpVVk3D2ZRQkrxyECi3FiXzuPnjwTnq",
  "key24": "3UhY1YrDU4VQrer3rM6kpUAAZ7aPAoPCumgqTz45cNvsvk3nWZZ1X8pWXFFZHVx2Eu15qrCoGqrM2bA5K1aMGo3U",
  "key25": "2CugJy9yjaWvXS7rJiH2WpbW1qHwxJfv3toke6dUCJGWBbuveotWV5gdKk4VmX1NX5h6Lc5APLWbvvU8TJyDKKPf",
  "key26": "2G68RGJyoj6myLMp5BDQSAis5DjAHthkyLWgKM116EMcSbT68MAm8PowziZCmtaa6DMSUSskPzN5Mp36JWCkCNCv",
  "key27": "4c6tvZX2zpzne4dtS28XmVpVg8ZWhuuKfeRLzsnoHUsAyTi11fhrsbuuWLHqYj7bUtp6THHAovUKxRFkXGGS48QC",
  "key28": "65Bt7f6wQwWyrhqausAnyoWeB5DxptmzgbgNBtKtyM1iTLjuhT48JLgoQ539y5wTKyDZWsagyNFEEbiKF9uU4cUm",
  "key29": "4mSniqnVx4D2W5xBoKZQDtyH2NstiTTnxkaHi8NNAXt5XSxsecnz8Y3GVuFPptgnUvSVV5QeGq5Fpbjk2xYntKFH",
  "key30": "5vHWD2nh8EySu2PJZwckbWoLux9rs9EErMadskEoPRPAcVXaaTqATUdPemmvCNxBkUEpG85BHcnXdrEeS2Vcw3fe",
  "key31": "3pGy1UCXN9Ge1ap5EJ8wv1net4h3etyzCztYDHAJLc2NU24BDaRMpMSBEatkVrjykRUWhK7B6o9MSDY4HHCHejoe",
  "key32": "2pTkWW9RnmiLTauR1pzQVBUj4zeqKCFRJQSot4upgvAocNidybKsYxWHeiDz1sQSihjqtuH82yotvN3Z6oHvQoSY",
  "key33": "4AyPWA5wSswVtoRtwBboEbnF4SQCLhfUTYdG4Bgrepuo42P62vcZrnfSvarNN5ULbvEBQfzuwPGFpTpbH4trppYm",
  "key34": "2qdkGwLfiqUrtDkGk5swfbdHPXTP5oBDAhPHpf3hzWLmw6qQv99dgp1Aip8rGEtwDwskhyWLhroanNJr7bUSTybq",
  "key35": "3vyftS9yv7MSfMrqKtJ5TNaq29i3H8Ztz2nw2iYWssbnLdQpkQotzuc95kMuKnRoi68dhPqVhegxpmjYVMTgN34",
  "key36": "RaNgAQZRtq9UqqURaUiyfYk1jS3gizCogiPYeqwPsDYwa3DRGmUacQ4TRgxw8QA3MUJwztcTngczrn2u7VTSbxp"
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
