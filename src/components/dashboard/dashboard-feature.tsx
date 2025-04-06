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
    "24DQoeFZB5dWXQC6xAE8fMgokLkicNAYVHfMfvsde6AekKjuEE34R5fP9EQU2AHgbdHwzrX1xqriLduSkuTLc9eh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "235GqZzECpAu6XkcW1GtSWEP7rqFEkqjKoh4r836wnCsP1DTL2MAU3Mouid9ti7MCbKvYjNu7JwdEN6BPCHRVKKS",
  "key1": "24QgrVqgRzdQugncffiLLvjYFxDwr1zyhnSRhxgC3qqoafwMMW5q3iJY5GBuddww3tgjGefv2eAvfLcSxaRAjtje",
  "key2": "2TFYKASt1mcXGLkYm6nGcBDRpqasPkqqYKWGR1rNDSVkvcRDv2aBCU5GwSGqDNPdyKgnak6KpczWxqK5oXqaFnQL",
  "key3": "2b6NrNfQdE3ZvUAw7fuK8mMHYLxDdXuh4KHWWToVxMLumg31YoDEQtZfGMA8SgWXxzG6EyjENhDHPi3kBfGdGXje",
  "key4": "353insypdRac3R95nJEtSBzWAQ6gmqwJBR5WpuLexauTkJgiAh5wU2hnTtExEsfLvKqhppj3PihDPBXgB7dHKP9H",
  "key5": "4Mjnh4qLwTgUvjyFWqFgZwk4HBGfdssDEkahZFY6Yc7iuUyC937dNLNrj5JBKAXQLMYgADHmtp6jb7zzYTNyK1Nw",
  "key6": "qxit6XpUgApPiTdUKngFrRTHQXJLtoExosGZHXMdWXta3EZeupdfzMdbtYdxgBbGyonki59ibA3YkfFto8ZY35b",
  "key7": "4ovr1XLV99mXGVftr2PT6cUQVQaHda5VoptHXYkvV9SvL633UYPH3B281xGCzNVmYHqJNbsdCfGpLpVXaDtGA8aC",
  "key8": "4FuTJPJcDdguM9MiGb1AF8frdn81eoPFJsx4oc4xv6W8j9fQ4zgQ6NDmUW2FJGDefg2SVpG9EJGUSHoiMK1fSYV1",
  "key9": "628xZok2YGbPX2y6Eitb7xZKshiEurvJ3MSYBCSYQ2YQpLwiyZ8VvMirbuZXag83j8qUv8cceNz44asg78hh1uzU",
  "key10": "56miSvkj1uUy1zRVbx5re78BbLXn1Gbn8cTousgRQiC9PwJYCZsumF88o485XT1QetEHxzWR9KkLErqcje4BsxxB",
  "key11": "3ee2rkkjHLLPMKiBEb7xEyZPVz2kpWqH7YaKUBxtFQdRiBUpx33yTHv1qiGKWQmwcsSiSWUhxFrSHRH7RwdYSiRK",
  "key12": "4B4jAZG4nLk1xGzyB5dP7ssqYfaRxijZu45mzLGdTop153q7i1QGx8dNvnUYpPNpe7cU6mbw9dd6t9XhgPqxQDA3",
  "key13": "4dLsJov6qUZSdhMGEZfERn8ChxQomnVEXxW8Ug7fBBdaMgq8utw2iGfAe4Rt6j4aPk2awK3w65WQ5ifkCT25BZ65",
  "key14": "4CcNwTxt6Hj4MPgKTLuxRe8oyEjqtb5mRmjSt2qMkQMgQJ6inv84C2ndgQBCotWW82z54Qb7ZavtkMneP5PfRKsg",
  "key15": "4PDAAYtJvpD4pcS9HHnJTeXkBw3JSes1fUuQxGomqYoNsjTK6stb79PXehDV6t9zqrXWuV3Cktyk8nUvxTNrmyDG",
  "key16": "2gBtQujBmfzTK4EpFfwFRAbJGqHXwa2STMF6s6cLDqCmaQfcLp9Zk65YnjQpuRgzcAD18ayJ9wfbafh7moz7BoY8",
  "key17": "5TFb8t8RjN3hwE6L43o1d23x5nnC2mP9H48AH8hKYkYpGxcY2T9BaajpMoifsnQBEBv5ssLgPcTgfLxEnSpqvgHk",
  "key18": "4pxdtt9zZr6xo7U4iT5Sx2BfrwuknmNLoZtczMwEEGPXCp94BCgfkyv3khvKP36jktbi5CUtpHfCQthLJWucCeWe",
  "key19": "CCbuJDV3dzUKBdygA9pj5otcAx1nb8tMz9fmU8mTkkKdsZDi7hJEpZ2UakxMRAMifh6WRFc4sVZAJ2CcKuKZCrb",
  "key20": "3Bn2hrunsvHRvbRTkpHZTaDRwgpVroky1tcR2qpBAYvbPhKEc4ypndyzJ1TQYrwerZa7o1fUMZatmtz1uebxnoa3",
  "key21": "4GiMS2G58QBcVPZ3hE9KptoLFvxiFLAdqd4o3y7egm1ZawvVcGiturWu8dyKN7x3TrAzHi87mowgJGrscHRodxVP",
  "key22": "3V8DKXE434QQvLwVKbCQJi7EhqDYNsbB54AyAvRgW1qajFwiLE9JaM2UzJDrKrtWxuYhSyxYkQbhk35y6zBpdbb1",
  "key23": "3TL57dgDJWyhGRQJXaMcdpQhU5Bf5GJ2HH7ivU8MCrHbTaYVctrNMHFVspbg6BoDoxm3uTHSGBbYACLyCZmwfu2L",
  "key24": "4sNsn6qphcdTfkdkzjt3WL6PrsuNv6YUg8H3X35qJxCVgAv4MnkehuuJkDjPkmvn69W3zFvUaFTHKuz8SawNdFTS",
  "key25": "2GSWYxnVqEiqXSD7cfRYgZ3fzK77e574QoMp4Y85SSkd99etLwZYEp9uDaViFducvFD4yYGiRXms89LneSyzXcZg",
  "key26": "2Ff4ggX3ihTJiiBauF8SkmKwNy2VYkMRX9bYpB7dXhEA253MktZMmTWLU5FZbe3sAAoRhPa6ye5Yf5a7k5MSnx7n",
  "key27": "3CevGKj9qsuJWEfcMFxxePRAYCBQJD3RBci2cCf9rBgKufQtNLncHVLu54nPWU4FK4p6RUy7H49Q8djZnVpj69TZ"
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
