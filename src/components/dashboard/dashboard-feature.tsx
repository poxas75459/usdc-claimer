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
    "3TQftA1dKUxrftMpZH4KyTZTmTwKJFLvU1A86XLdBg4irsijzrbu7H6jN9MAwAywGJhZmXzHbwiFVhmq6wYriQMn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nXZMRVgnqqDppndLqGEpJmQ2hAkvpxK4p6f6M7LLEfcKmUq5f3JnDqzxVwBFjZXPEzS3oMqu7nre49wBGVfnPJf",
  "key1": "2VnT9tLxqKJsERdSsaALkwso2arvgVPcTJ5VomgEc2AAnfB3ghPDWYbRDtoegiKp6mcwK5rbWVVe5TWxwUsnTrcw",
  "key2": "YZywd98t5JyqW2q3a1Ds6NMfHfmB8Hi5SEPuNJwdAquU6qvxQGKKdamF76NQngPE8rKYrNa8GsEJa28hVeGvTXi",
  "key3": "fiQ1zgT4uHLUisMtBig9mS3JsrFWPJSqSDN4vp1rn9i141Fo33SLavNsBUWELGSZoGUJT1q6bu5dazLbTLxSiYq",
  "key4": "4pQfiov7HF4ENxYSqmupyqq6r2EjxgX79y7LKAZzYUhN8TF5JQw9rB1jgU6S4isk2qbkp9suPQNnaRx5bUt9gjWR",
  "key5": "5bBKyxu6fPvcBmsRjyanm7TPUH4idSMBYncd34bE4HEZNeKFUzEL9Pw9TreGrZTABgbs3zYaombaFQ68J1s8nrXc",
  "key6": "4rNqvfH7w1Kdxjm3B3he8n9uUtn4hC2FYgi1tnzByrTYtj5iscYTjWGqJthMZaUfiPcpjfTyazeMtr1Lwr8oiDX7",
  "key7": "6unbs67dsdTBEmDyhdYAhwZTD5VcM247rckq6pBZaoeeHeN9T2GqcWXraGB1iabaFvGnTt4U9osNAVakfQj5umZ",
  "key8": "4Cc6HudfupsRBbG39VQXyjnF169EnKg7ffsqoVu4QCpCEto9kaoDqHhTVxpX3RsLy6RAW8BTmPBMdrR2XpgLNGw4",
  "key9": "4Jh8fh5onmDVQemVbes2EivrSSFCJmtWUsEW9Ld3deHY4xtcnMPktACwmKGtE1Bkg2HR8F1GbvfewHTdfkBsB6SF",
  "key10": "3ujD5y2JZjid53PzqR2PYcdNCwhsDZ2WehQbUUbTAsrCGAcP3XA78QzfjTsk98HsaHzWR6LfHtVCsvUU7qMbRASc",
  "key11": "52jSYH1jkS5aTFfRhCJ4VDqwrCqFvFKy5auyddELwt5cJSpEbL5XEGWUFpR84uZFYEpXqd69d89wZ62MR4H5efkD",
  "key12": "2rPaNUf1DGV9urjL6nGwawVfC96zTnQc3vnacCe9oy4sVxyTUoVN2aZpsA3wJM4mj7efnDmwwYWLYKbA4p6PDHSh",
  "key13": "612w73kjCMPTNyvJUasqdwYCHrHWy9LAmsbj4EtsXVAmDpVsbW5ffYhy3PZoMTfnPLw2dhWimHGCzj468q9EzB8u",
  "key14": "2YJRz8usESep3n7zewrTsfE5pQbDPFUHLXgYGgRYU6WNSY9L2CvKHuMRhAWVcb1daBnKsPqj74ViCcEAWApnaECa",
  "key15": "2vQck8bRbhJcTevzWrefaZjgsP9JBntwknAFKTXBhVWnQSzEvonDGz4aifumr5pkStN66jwmWrGfuNRCyzeZS1eC",
  "key16": "3bjCdyrypAkTfDghPFinSohjGVmVTKGCbjCPtEhKHu49KXoDmp6PjVQJtzH3sh8WTXuSeNTBEeCAXzAT28hGvNoH",
  "key17": "3W69zrT6aTE7AMNZwwaAC3KEpUwZc4P5L6taYHK8qBoNe5vULFXwofefAPyCeruXVQbyxnhKorChS37DSxGZeMSW",
  "key18": "5Hc3WoJUb4uRaqpRwk8iAQriWV59eb3AUoqaTPFH2KG63GCrAoPoZkzqFqGrupYhxKJiVND9Zhb5Amr6Qmsp8tFz",
  "key19": "4GwifRdu9aqUe2Keioqh4hUDxwPdHG1HLQtQLwgpWoci7yByeaTqgRHJx8fQUgQBnRR6MTBYWh9QbivcRtuMMtJh",
  "key20": "3XrVBrrgQpj2cBe6mzKRyv3X29VqDCqeeR8BwGx87Bgv16GsxEgVWysAHmVEKnhmpnGTG5JgqUixr3Zt22LLwPLK",
  "key21": "3Bnj8Gte3wWzdxD82Yu5tVUMmCTtLgpo2FmcygCgL6BAkYVcKnLHa86NJeVKsQx81NutCtavzHJ5QUXUFQQm9Knv",
  "key22": "3uWWBQUPy1k2Nng7k8yYGt2hbPAnnMNqD4x4b7kKizDZVe1ibK9f6bNoY3vbJUfVnwZSMAf53t7vXijZ2BCDkATw",
  "key23": "4mXonnK4yK15uQALFwL4Du9YWjFjW7on3MSF1gD9jSxfGaRctsEaYAWbMFgvBMbRUJhu25i1GoXTQuaGruFqBCcL",
  "key24": "Rv3YuE5tNUnyE8BiPLP48AtgMQPin3H74zTip63Rub6MrmBnLCVuYZb4AoynYvMCiS6Em49TbRJKotQaHmSpdcU",
  "key25": "3v3PraaSa8ewFf3Qabfuwe3RNk8Yfyr1VqtoL9ceGkxWNP1bT5rhmFxdortamYnGDHofF11ork3hc9uMJPcAJvtH",
  "key26": "AsgAFjvC5BRdYgmC9saHRTBAUYnQDjnEb8QoUrpH5NCePXbnamo1nfWWyDCfmWG1rimg2yMQd3GUSHv5rpfn6Fo",
  "key27": "tHVkxVTG4dr5PywkEse5iyZBFj8FZPcXJ4U562KH8q7jWQuusH2Lf29Z4nvBPVDvavpq3wmysxRAz1iQvUyD8Qe"
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
