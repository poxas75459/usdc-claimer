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
    "2jmireVq4mefd4Eixb13SHDFqDDWe19rt3gYfACjFP9kGGQrbFb8BDAPrC2T7dBrYM4YfU4SYctTKKvcK8hSDHYT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YV4E1uC6Ejx2q7CAQbrGzAFgxrL9Us58g6yYXyTJjR2zgYW5Fyot9B7uMHxzVjAf1p37BFFHtyC846ikiX7m53P",
  "key1": "4QgiLTjJBozYnyE7euqdCMvYDq89bLMqfPDbZ8CRbMzS4R9o1HfU1JMc8mYNxj697gVh6NTDFJxq8dMRfKVUcyXe",
  "key2": "oZf35WyaUDhDhPsJfuJGJ1ayVzPW2p8JCrKxGkDhFDKizfnMLpvJAadoJYTYKemz7KN3RYqhDZsSt1fkrFJuikW",
  "key3": "2bphFazcng2gtvx3R1Q98LxcoN3t21bJ3ZA2UDLi8qpZtymux8Qjc65besbT5kL99mSVQKSyJjY7QBKEkfG8YUsQ",
  "key4": "3nvxvBpDwpmA4iZjgE4rtU6quk8UfF6ZT9Kg5ZZ44gn5QDWU2ZyMKhqL3baDHDHfxog6kSC45Z1qxf3y2f5BGkmQ",
  "key5": "EsGX1CYvm2J4u7vApaHrVXqFH3rnj2ozhYNwkxhntgAmaHHV1S5JhcK74djzVRA46APLsfmeQQ6YUxe46RWGJoN",
  "key6": "dABARZWurY7VNFYNLcHUUtp7c4fsm9BeMfkC8cZxLQzv1kkpDyqyEKdZWMvTewy9ED2PDg7q2hAuKmEjYd2uPWs",
  "key7": "36ttrJrrK5Db2rvbshG5amnMgKzDyUA37b1QkcNmMJxFEUQ5YhYxL7mLFUonpSMJPXeRvANrLmGEYR364ZiApnjA",
  "key8": "2xKJAj1Dr7iW67sSrmxarnVN6JT2YwJ7SAHgHZPFKGtSFWMfdSHAJBYfooeZn3WuhhyCYGfymofW4ezB4YouVVGn",
  "key9": "eJ5VzSQdS1SvduYvsmksrVnYknNXgCJQadg8vPhAHqdPtjKqxgSDLhVuJSkJ2uWeVQjCWcVdC3QuuiYKK44QQwY",
  "key10": "4fNZf9yeBTMcmQVJ5yRY2BFH7ijdeSkUKqKAsFKW3EMApeyViaQ4QPicQ6Zuo5xfZ38SgqWt285U8csmdmbYTCzh",
  "key11": "UCioie7mQsuxP9Q6Ju2LN4xJA6CxEDaoihUm8HLYvFRKx7ZRCuKBEM3arQaniwYNEZTMTBwCy2U3zi1uWaNmdQz",
  "key12": "2HGeoToxbYZTJxxPTwz1srWDKPVMoyBScNMMG8Sf2hkvzdzFsnWLSTCizB4oY7Vp79tik3C8fujPiH722BVZ36W",
  "key13": "5KtuYejpJxvbnmVXqW21rSdarj8U996zoriysTyyztPYMJGKN2pKrr9ZDtfT6U2nwbwqcyR9q2eAuAsnKVGz7sin",
  "key14": "4bqBUXag2G4VBYBFdFJPYeHUYYRsAXpr9HNFQQZm5kM3ZAhkuNdSrFUohvkz3EdhLrr62KtBuQZ5SzwKeERa1YRR",
  "key15": "fPnDaiCt6noKUTwLEGyjsruMULWKNE7Uf7A34GY7j8fRcxDXv8GzxeEwFMFPD8beZ4WmY8RTfW8toZnWS1RVYfy",
  "key16": "6mBb8hs4LHzvDcffN8iLsJQ1jhLpjNg96Cf75pPcg1gK7xCt75fLf6NZ7RWSBtB568XEEEz8V4ihda1u5pUDm2c",
  "key17": "4g8BXBz9VgFZZFDh29HE4PJcxQuMCpBK4fB1mDcpkFYVHEoUD4deXsS4fz8fGaxvPcz1GBavwNs3J4TDyW6ZaQPW",
  "key18": "2fvLKefLgjsHLrmXXgfG4LFCWMdZUSS6qFyNw9hAQ6xXvwsY9Q9mfTJrq2MRvuQAY3NvtcY4h626Mwr6Vm7LNy5q",
  "key19": "2EQGPdpfds1rdzC2KT2QbNH1zDoEs8qjx9DAStaRs6uaGW2gx2besuVcxLiqd8WEoCxvSndfzfX5hLbpeFPZg9VB",
  "key20": "3Midx6aZgXnaMfckpHMJabET5oZ1mXuWnasAVT3cFZheXqiCbRMu2iDGUeS7hMkLxtRMhRpPAFVHCGev9oTYhoRb",
  "key21": "4wmhbwgCMyHbcpHCeuKRM8ybXwCgxaV1WKW8r4DWMbUCuBrEzro2Y62wkprVxKrdpzgfiw5ez1rPzkpVmmRqFcnT",
  "key22": "2bpyi4hFLoiXgkiTv5cTy8tM98as8F6MGho9kiVpQzMZyq4uP61Uo9B5CtwB5sedgMiMVmdCLEETMKMirQ9mteTE",
  "key23": "2QKSGRMGtQ3KPhAfJSo5k1TUr5W2Jq475jYDrNHLJrPUetwt6mdxCuSyKKamKvnfr5BCrVwayRYJspHuuD9eiXfC",
  "key24": "Suz9NdAof4VUZueU3kUFZwvi834feAMi7k2EUQTgQiHMHxPpjgedWJ17uHkv3CKbimSU62pksNnGh5Y6HphxVhZ",
  "key25": "x7BkYyp7uGiRew3UyERzjCzygvgpaUK47njcxRjQeWAujkVehyoMiDj2AKtTyggDoVWAD5urkPRLA9qPLSRTv3P",
  "key26": "2qcjyiak3qVNdz5D71b1mKMVavhkn5xMg4xnuNBdU2Pi7LvnPBzk1Xbhq6tEFKJ1YmaCVgfPH1oCF8VjidNmbs3W",
  "key27": "4XfraHddvq23mjcpEr2F6HeJ8zTTTSJcSzAXqvSVCzNKLXcz7v88sWXtKrewyQTAgEYX7dRbmeCT8oTY1v2dR7mL",
  "key28": "2pYeDGc5xxgUjx5iLzC55ExXQCNRjjcYqYbyYBrdD4PqNoaw5Vr1fuNh1R7kYDxEoEx4cKgg4aenMc7BHiyLzJAH",
  "key29": "54Qb6XWovzUVyivKL8TmLtsk8cAjmjmzPhZRkGzAPN3EWupkGQerZ72aq2PvTMPHGAGjQ81WygH3v7J5AivUwKCA",
  "key30": "4qFsgbRjCvm2urHRwn26hziGefzAG5q2z68oXCdWizwvFyeWovEUvZgTQJWYkHb46MUGUX4LDnx4NLJQfFwUXs7C"
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
