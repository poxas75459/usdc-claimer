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
    "2vzQarBfARdoYc2at1TNLeGKE2qpCmzytB7MRhRqwEFZL4U13GEuk3DiFQechY1fCbnyYtMeHcfmg32E3L71H6ux"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cyMpzb9jDadmeFXTcJX14mGnuJ4P81jWv7gfuSJsA5WdSZUXXhtgwxqPEqApAR3RBPhqo2fbhrb1bvW8NKUNzB",
  "key1": "QNSwZy11yxxYSpt2f8WQqyV2hyqnxi9zprE4frhmgBStKQ8XA9YQmUWyQGA6nZ71KQnRa5BaYJHQJqeJ2bSDnEZ",
  "key2": "5UqJRoem6DCn48gVgPFXMoLUsFFWhAfixEN67RQS59bVLP5kpt357knnipXEC3mvCgwL3ZEXMu6VQgmtRn8FDKkw",
  "key3": "twJu7owJB4H4fk2ege6Si6rtMhby9iBA8DnarFwib3XQmx4MTngZNPNLNfiVPXiFeLkG17de9Xuc4emf4xLWtDs",
  "key4": "5z37EpcwzQQ37RjS4XqVdyMyHy4Dig9q2ySZd2PfgzvwemWE7evXa5WXd6es2S8Pshg7RxTUKnoKhed1F7n1djqp",
  "key5": "3JJbEkxR7hkNNt5HkHjjf4fFr26q8MM4q233wLdTuyWbAZMG2HR9G3ucKZCLHwLWBGGjCpWdkbg4r3PdxaXqREzi",
  "key6": "316QghiDumeHaGPXqG8HwLUn6jR796nfSfXDRChsjigu7Mzik1EqBJYaeiji6xosymaCGvRmsc6spwer6aSN3Na1",
  "key7": "24s2YY4YVe327uFXTsom14ec55thSBFmbYaqAACe4dmNZb6jFju9bsE3wV4mqwDv8BSD7y63p4mQ6KDDWPVpWG7d",
  "key8": "65StbRgEari2mng5wfsBv2MeHLmHNMgkhV6png1AfeZB1UwPSihcpwnXB5wGYr2sd4ZjXfZ78oJUpLPWq5ZtTN3T",
  "key9": "4yafbM5ykqc4hriGSnMMXnfuxHNUj9FY3tLLdHuxnvRRjBKTUxPjVum3bgeebmXBJVzTNr73AWtSxspTJiZZfuhM",
  "key10": "3LCsqdDkEkFWZoPvkJ79kDzi4oRwNF7opaNxZPpB2Tc9NiXikjHy7LDkhZTR6FKiwJnkZLd5bNdDGYBfsrCAba6U",
  "key11": "58VJXqagRFq5uEH7H21a73CzwYpVWHGStFFrSBrPESzQgKup2kkCnpY2fNnYqiRkzCd3LMUU67ktDYoMZ1PopdUg",
  "key12": "4LYnmMtYsqsQaNgz7dWvskYop3Nsd7wvXiarTyemVGeNbHZ7JYn9MKsG52ezLwHEB8DsgkzFfrKYNFXy8Nvn9P3g",
  "key13": "rvT7Tg5cDoee8mtBTvAFkUm9eUZ8GapBEJ7jZ91n8VaQWATiwhDJkEFXVhaLrhydjaUhjYGH9UjVkQejNkLkC6c",
  "key14": "3ryzQvhAUKENdzYrrpBYbw9DFxp4pjfxMSa9zCGYDVUkB5LEgdLhwdsFgHfsUyEDPgyfmsnjqJn7nfNEFXKsfVaJ",
  "key15": "3JLbfFzcPSFiLKMLm3skJzAsBpxjVcPeoCBbsMQSZvSvy5qWwWxvyvrKpEykQMKn27mPtbmHHAMaBNY8aYsaVCCm",
  "key16": "otmtGYuqW4eZhHfMTGcVsFfiuv1ERwNfmi6NW4qPLTBv8ju2XmUQtMsNHYWj24PhdrBPFVNKA4HXSu2Qun9x8Xd",
  "key17": "5UNUMoezjeT64TpbH5sMF1CyC1EiAhCupry9Vg1GNfURSNoiAnwvnAu3CWq62mtp8t8gMHv6pfbycUHWCGaJmqtm",
  "key18": "4sFE62EbZjebebuu3L3t5nT76WctpK4KiJrBEsMsMmak9a4kegYrA83GFcjxHCq9PV5o9H1aqX4Wr8JMdK6eQHhZ",
  "key19": "43XtBBoVqhwU9umKNo8GpMJw2ygpbfj2RvHe15XwuzEtKDAj2HWcgUTps9zkEkVnaAKBUoWXivkSdpkmsKoWJiDb",
  "key20": "339xQRNqeCpFk9MppfYCbs1N93qGSNQ2xqwCcWZG778UrP2HtLY4SJRSssFQVzCYc2mwQt3vNnVjTM23KK8tgJUC",
  "key21": "5xmb44679h14N8kKZtjeQuh62KHDYwA25zzvCor23Xr8irQ1f1ydT6ysgQmiJQFn2iBi6ZmU2x27Kjt9MaSNz5TK",
  "key22": "62iNQc1Z3DRrs9k3CxjV4p6Njzasv7QusAHn6pFfYrXcq6yNEd6ybzQ2Yvv3YRB5d8ktPHa7a2htK1sipYQ4XAm5",
  "key23": "4qsmx9XHNGPb1q229KTC9UnBuGKBdfJwgRZ6UCBd1L7U4HgPnnp8CozYAfnHtj2ByeUdrBiJ5hsGv8CG48TsZuKF",
  "key24": "5BGaoS2bbNaMK5DuhKbxXav5wjsoi3tUSfrpkUjkk1uooEHcuVMak6BDD9SHQzbsVymoEm23S8o4u69YYTKBFmQA",
  "key25": "TuhbN5S9daNVq8g4phk9bUkycqym6GHN9uRRXkuguV9cjYvQih3pkusGeUtJ7Lpm6qGSfN4SJYYKdL5fGvXTW1u",
  "key26": "2TrU5k7UkRLG9u15Rv2PKWMZW5M1e3meUceyu59CproCeHH2fcVWjP7AVtFXr5ANhoDTrsC1VeDSjsuF1ZvFteKf",
  "key27": "2hWExBYLcZMRWLNyjfTERT8abCRVMG9VekknqeZvdunC2WVbrwri5jZszkyPaxTHnrANfQbcLcmePkAN7Svd4eEm",
  "key28": "3RnuT4TjPn4yeawaMR89Uf4mDDcYm41K9Rqa94PwWeLEuzC4B7WaCzFY9LLcnkhxwN3Jzxdkw4mKMPd6DPQkvc6r"
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
