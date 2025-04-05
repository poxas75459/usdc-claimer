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
    "4WvL9zpSepmkRBUUWToZypLo6yTrdUMrVQYMLF2iHtrR4bFLKXtPFRY9z5Hk2a6jB1HpCY1Z9duCNZ16xjd8wdZe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tGeBxCvEChJ3B9DzDwPonnqR5ha4gLSLWGRs26bcVJr3PeFAQe7PCwLEByrMPvPgPnj89zZgNYMiWLCbHYQcQH9",
  "key1": "2om9LnvSLghNbJuNwnHgqLvnW1gHMbiYCfejzahs8z8G35JTcK5stEdfUePJyCbpnDSqeD8uJ74Wvp68T7NAnv8W",
  "key2": "3y6ayrHaa4yZhh7b7k89WQ85QbMSoYLGx4CGWntx8U5NFMPz3xr2btQ97iupxBhoUkZgPweNpRU1JUpuc6YW69n4",
  "key3": "32qDCkrUvRu6Xd4DyKmbvmmbSbW7ZZ52iFEkKVPWSPYnSaW9JBajMFDLG41Fva5VKM6ubRqjkbEThthS5ZHzecXo",
  "key4": "5a4MWXL421Z3k65xvtgMuwfqR8RjQqR42Tp9eaBk9FPRK7kmnSownDqrVZWU45FiAnuBDBqqxDsuyVN6eqNS7qMz",
  "key5": "2tS795aikG6poAhRrbYJ7ZPK5rdt5MzqfqEzy9k7T4J9gYC55eHqP2DpUN4GJPqe2JNbWP4niV1pseXFu6LwHpuS",
  "key6": "5or2UiJWBWHY4MW2hHqX17yhiqgDduERYrjLFfoW2rYhYap9xfoQqvmABac48ahqFStkDFZBt8Vpptc9ofCTwmz8",
  "key7": "3tyQnpuGLgwXrzTvAqihgYRBYC3dwoLNN4kY5di6G4aRhEhtGfGf19bf4w2n9DFZmSdXjH5f9fUewYbJhc3W8zBh",
  "key8": "3AMSMPLCsV3sPz2xyrdyUB6dwaXCqftzZPVzj1LEHcBDjqFbYwKKbRku9cTZjAVxLZDcZvBSUbbcmdncqxnCr7Wq",
  "key9": "pPzvpR8Hcqp6YQCGwpdB74kr5YymNc7wo7JnHsWWEUnMzvQmqcXiMT1HsdFynhgrgqirdxZDdnSnfsL6bnYhHYz",
  "key10": "4aMBynRDR48b8NGD9G3HP6uKKG388PKyjgxnq1cCi85E58SSKPZ4md85ttLhaeZ9UvMEy4xR365DYEouTHHmTBfY",
  "key11": "34UEpQyboXAoS9TJaW31PfSBaXWzfkJGEDgsE8N6pyvdLVw9aHHv1fLhG4UkMBn9HnvmvgfmMPQn3YnqEbGAZwCw",
  "key12": "JpTiLhrwv9qaDSRmM9N3Hv3yaXWTj2rKW4vknvWFsepkrWbiF2pnpiUyzP7m7GJPcxqTtXtPk13PY5obegXjPzg",
  "key13": "34FHCLV217KMkGVF64vPZEBJ5uAjwH9A7db9R2A2YEeMEp4G6DzsawNwbGqMvCuRb7c6f87rS9R4vtufAvqS8aZv",
  "key14": "YBRzkYPKGCdpiY4E5XhqprmhoSGzVjCyE8KYT1eungjAhSaoG9tLZ9htkHXPYnC6Kg7sV7vvmn82GsPiXt1tLjZ",
  "key15": "P2ZwJQMcsnRAuepDpuquAzmPanCJeSQ89nhQomXRXwd9XQmJd1cVVsx4bcszxDziqSVwqiV617Ufz5xz2cqy538",
  "key16": "4EsUsNfwCrHafpTuC4PToNJ8WjYPiYDXG8jqi4ANRGEzoFyQHE5mrEwVSmrPpeAcj2oKkNyRBvKbSCQ9mnK7YWVU",
  "key17": "3oDmZf5gCsgkLC8jcv5zERvVGXtfCVRaYn48qw6XZyxR2K5PkTyehUwX4yPNXFJEWW9CkW6dggFHsNT3sMPvr9ya",
  "key18": "41AnLXd1NkW14iTSPzVNoPLRBstqQESpbt7iBWTp6QFMZM5rbG7WwkMb6YycdRwfbFNd9Do71rChP6GxvsRwWQME",
  "key19": "1213jDpME9gXhr2Q8F1jaNLd73GSiaH3C5VAADTyePs9rwkoDg4tvGbCNpe8DPAoCgiACkGHNYsFMVoWy5Nq4a4m",
  "key20": "4M9GYtgYjviUrM2Z4m9DmCqCaGqKjRNxhWak63zJYXoWMVBcsikJUjwXqCr3rRBxVqPXt5An2SeiwVt37Cnzgtmv",
  "key21": "jkZUKE9UsogMKHDR1qWJke6ZZweCM7QUTUmUMBN8WGuxvyX6e4uhtxYsnxkYBESEkS38633KLMUf1gz2spsme7t",
  "key22": "5E6cRrEcM6Fe3rXTkAgwXjMTvR7g1LPJXkMjFAUTb41dX2u3ckcyb1Z5fCh8xDxFVSfXZwy4jfnk51UaV7Bd8fQE",
  "key23": "Rf4wPWqWRTjxnp1NC3MBbrohzqvhCd6NjvGnSr2Nq89Swv6mBbdNhr8ef1f7dbKU82Z6wXoqByZDutYGknwrZ2J",
  "key24": "4XeKicMohtzkur8H63mwVzffZd541jnEKwdDQVHdYybTVYcyYab5rPgzjktGVp2BnagnD2y8AoTth3TRC5H2ZPcX",
  "key25": "4oBbp1gQPYWWLCDb3Gxa4ASny5AJ92pa1jgFgebAaDapLMYWvxNAjfdVkBXkt1nr2dyzvH566AVDoyPac5N4VZkW",
  "key26": "NiRY86yZvCvYJW2uJs32Twr2H9cCzim13rrvXFnpdgcooHAsu7u7iTw599ggSLyBS4rCv7a89onwzdm8fhJ2cWh",
  "key27": "5t1LzqjMpPssL37FXrzSwLpiwbuzzqkhBeRYt3hkV9ygPhWsM38XJASBm5i662wSshijzUts27LtEZ823MawKfL7",
  "key28": "4RMF8rDv8MrweA9Z3jiDHas8G3w969DbtU2B2mjHssAYS4eCqvXAjx5twJbZN397S8rcNW2wnEJfsDiHo1ZEodDd",
  "key29": "5pEUYpKjCQWMtCaaPGFF3gCYDKJCPPU8kNrPXpbVdbeexiitoAmEZWbvvq2Ttm4KtRLkdA3jK2yU5X9eGo8SsRwX",
  "key30": "3irWDByJ88AqxVvAUqBaHicnYTg1uE9F1LLP9ktsWhzmWiAhYeMT4cihjCjUskPYwzYZC1qLfA18mA5Kggi4b8LP",
  "key31": "2euqu696R5738Qf2sYpzmhgqRKzx44umMmPufksCXadNHbdJ5JCBunsHd1J21WKNbXbTxsGRf5f2Y1t7wVrxYL2Y",
  "key32": "4RsnsnkYAKemLDZHSyHcCfQ62AmH7e8ERkYTX89DuDwLMYzNq6wLqVzpYTjaLPhVPnuycb8GN9SYX8kGu3qvTs9T",
  "key33": "4Y28PkXy2P83boVL1YiVPfGHWzjtpGy1ZMD9mG1Wmzzo7jtDsHNerkp564j2ACLyEbDsfJYcia4koScW1YKXnsMV",
  "key34": "NbwvsHR68wQ98JbrrUEbzq2EqC7To2zQGBRtt65DfK71d57GtG3geaF3cM8AAgj43w9EQStnNcUkjtmXrnSgjE9"
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
