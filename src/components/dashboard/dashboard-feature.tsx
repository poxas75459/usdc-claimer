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
    "2iFWQWkKW8AcmuUtdyHhKMuxQxakJPcASZSUu8wv7wERcNHk8FuJPQyA6CdL8YmxTfTcFjPiajZGRsiKKTWQMn21"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63M2Dd45x6jPd7uyBsd3wPp7XsTuQQqJq4pmpyvKLB4n2oXbhXrPrD6AG6KqHNqjHaE5yjezFgjnJVXjr9PRP4bi",
  "key1": "ssNjCebe6yxNa14wijyDtqD2A4ABJWc77k1XohTszBRuJ4oTe163bfcigrLvKX4oNkSu5og7Gou2wWPNGpQtuTd",
  "key2": "3XJ9vpQuDrdj3Ju6zgZhqv7NuUn3nxJudDYQRo6sLrYDouQq1uLKFUGNwWPGLCoFHKXPtAWf1Pscb4xjfY6e5HDW",
  "key3": "3dxd18LdiMqmjg1mNZgiHyCA8vREJn21jcUn4D9e1uZLBKSQVmtqUnma6ZTRGoJ3CZm6fuHp7JmC7Zqy82mXnbLc",
  "key4": "3v7dF41nTFT7p8xJ3koYNDRRD4HZenv8y33UBGaYyUCEgcQjEpPbjZjxP7GmDdndWJBs1Ys9sBQ3YFKt4zKzT5sA",
  "key5": "5Nqv34U9WqVBxRk1WDEdLWmHuqXKjU5dGvCGfnJvnQRwZmLhk4sVTrXJudoz2mAB6GXuzxpCyEzhMCcJCFPHvETy",
  "key6": "B3dCVXpb1e2bmRdmzg8nbi2yvhAhqvRrh9yqew2XwurNZ3n2SNyinmkTk9yW2EKDQY1qtW76aWFxZgsYW6bc8FM",
  "key7": "2suMh35T1TvVnVFFRkeCnqz2UNGqoifcYFDUWbPgL56ohgAXxD9qMyD19Gi7w9WQ7JA2Cz8FwLpKTqgv8qnFZzCc",
  "key8": "3mqwnMCM6rBErFsi4GHLEAKMTuUzUkDCHX22dNKvLsHywLsbgMtAk27EWCirzX5PveMb9bzrkEiUKCd9AMXn36qP",
  "key9": "53aGzCpnAoRPdPurFDdfh4kx6YjNrnxqDB8bTpgk3mfKnYd2AoZRp7CU2jmVriyKHMk4WwqPGGbGUdMWBZzA3nwe",
  "key10": "5APER8hrnVXYy8MkaP3jkKSg6PuzrVs9aaFNUqtyfw5NwigCjmCZPXnCe3XzVdiABSj4NxXEsRJvG1Ld7qvnu3u1",
  "key11": "45qDN1sqAXwq7jcD2Vm7DLEEUgDGpdiXFF2YpTYPhmV8w9wjc2VijP45msU1ocWZ9mW6M4CoRRY1cVchiCn6CGMb",
  "key12": "NhMKfDsF5MrNCNy8SkKX7bAZ3jVYRB51Mhpq5e3zoLDPfmFFQaPkWAkRzxEwBVRUVooZefzShy3EhVpqGatNPQ3",
  "key13": "2587XBYPYWpPCCqNEg84d4jD1aPpTFSbNvA4sreBELxWqrizRZMqBuxUvmixyjfQh5FSnu499hfkdZCDqgvNCY1v",
  "key14": "3WCmsjRTT51hyeYQDYXFvmJ9SvyZqoHEgNqqkVU37rwawdrucG4By8pedc3Z1qocxE7n2fSKUrRKtSg9VdqG1mnY",
  "key15": "kNjofqD767X6Bp7sNFMd3qnFW6EKbPqL21pG5dfD2kuDSH2DCznsTpx5hP4R5AZAnwwL6sCc2aGk3Ut4PtNNisj",
  "key16": "2SAnk2r7rUYyrbu3XSYhijUgyjnbnz9wd1Eh6RWcks4xeaCSi97Zga3JYkMqq19VfPPzeivuYf77YseENNMmXuD7",
  "key17": "42UbqyHqRNB5LghZzAw4RNGUJ5QBXgUcyqAC1b9fVioeVgbwTPANbFT7XMooffbJBnSE1LZRUfdc3qHKiWEBBLaa",
  "key18": "bv2SZKJ8CFXRA4fV5tH1GbrR4odFUwqTTv8zZEuvwULGEEt3pEFiKPZcGRFwTe629dee9aDnYp6TksL7pmDcDoG",
  "key19": "4vBtDbCYhtrgLEuW3ERbxsrac8Vc3E6LpcCALYPKS9pxchfea4sZUGhGuF39vU1LZcWm7AtC9V76K9kMKvEnXqJe",
  "key20": "5RyTSEs1FZdx9PprpJJRAW3iE37Do7S1sy4Qf1hAvxG9KubsNqfpNYGVeA96X9iNDJP2kxMxXRVL6T4dmiRTHANF",
  "key21": "5wikwrX5Fa6rppCznc17YVWg3JHQrcS4TBXjFA6D2fTDycTam6tUwRghSfozTXcfsjqSeULf81J6mT8pd6q1uZjY",
  "key22": "2rpNL18r5CBNDYrfMdceEuqQeYA5miaHvC7MnMihSeYA5MW1b71bW6gAHQ1pGrgKtG5CHjCCiFS5vVhMUJ2bG741",
  "key23": "3wkmnjBVDYQhDppM6uPSn5vNKGEmeySWpKfjey7KRWyUHgFf6Wyh2raa7gRVjrQmYfH5s12n53ZTQn9MzLkR8E4N",
  "key24": "pYvKuW73yxVRupLnnQxZPHJAoxBxjfor4RLxNYAc5ycGsZYN2zUdNhynq3mGoNbbZboJEthqdjWuBM9rQJsTu7k",
  "key25": "3caL3qFvyWTopwyuAcfcpbkue8ZntTcVhYha7a5LuAxaMv2EutUbwpvt7m2vcRtnTar1i7qrcMw9e2aGZJfpEeeD",
  "key26": "Hsb6jMr1RQ9HxJvJgBc5hpKRTeyDJUVJiwGEkrZqyrLTzUDwWCGKP4Lc32Y53sZHguUqEutXThPwMneAvF2JkuY",
  "key27": "4qAzy2UBfGmYEAysvP7bt3mb3fUxfNpDXR5Z5KA476jsj4SG1jiruhx6TgzB53mkqss5uqmVBSToUWswQG1zYXR5",
  "key28": "3PDETHz48aMBMADSsKoDBqjRMLk4BtLXJABbMMQqYKPyTRheH9ZVhvUqDpvMWkMA3bDadPiJw6WTZVMaP1arXHrD",
  "key29": "4vEpPwZEPPLuWixHysvSuyHUCes5vujVa9Ryvak4C8ZYcUu3L5KYAswfePtoFC8VV6cuWVfw7E6NoXTyLp9kqpYi",
  "key30": "hfaLsjvkb1THPZan3MdnSca6whRU5RYkhLvkQji1d1mdgDFqAPiUtRuJyPK1cmqWNyFGtSkZD7B7czZa5cCyB5T"
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
