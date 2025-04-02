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
    "2w5cm9juoRE5z5AKcY8TM1noN2hcXZZyruEJ69Kxp1Dvmu9Eo6qrrzPCQiZYHqDJFdfecARKiQviwahRohbCNMzz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jqBrzGenLpVTtyRaKBwPBAZGnWngj6aH7mjF2fZKJhDQoRB7MaeYzttnKHRYAtrPoJcc9jqRDLfxWvn9eYm5AoR",
  "key1": "356NdHGTmAe2rDcBkpzEoKzXdozU9SYnB46R89awkuyyN7Gsq8HvVadF3J6C6w8JzzpKvNkrBPi2dw3RN7i1RR1U",
  "key2": "3gF6rcif4fVbtiTMWDyos5SBp39XLmZ4dAhx6DY5tvb23Pe32CjZNnkBNm1XgZLNGEHnDdp1W9iV4ayN9ZJ6CqK4",
  "key3": "4PBe55z63G6G3sBheBte6kPJTYSzfmak7qMnoY81Aq2519tJKEmPVUWUDnfiiVUUf4w4gaxUrt9U7qJAx1GUn3CQ",
  "key4": "5Ao83nhYTkfrah9MbdZMg3PPEwSkUeJQyG4YxGfkuSQuHv3BLcp7hboJx1AJ9uUh8Z1qfXUL8deBP7MJfaPdd4CE",
  "key5": "3wMN97MjKYZWa9gFxnhsxRSXK6pmUkS4jkRdh2d6r5uE54MCkegMFEH2zYpF5oEm93LtDBsiAVGoGe8hPAKYKTfo",
  "key6": "4QkzZs1pWJJ3KdDeY1hJsEsK7ncoJUpbMo8ChtnYuW8bJfoXcUo8sBX1FVcRdqdvEJzA31Sqj1omCsbVbAqyjjDm",
  "key7": "5LAvT1FMuTKen4Ut4anXp9TpkWGzDtzYzc2YvWd17gqFWrwvQ3sYyDHASSP4hzxxSPkXcnJATCmVGRuS79nJe4e7",
  "key8": "iciUPKE5ngdKhB3xWcMdnPmDWLaNtUgtAbwifqamQZK2sMcUVu91R6LTuPcwF5TaQr731bMetFzoGCeMFUvk8B7",
  "key9": "5PnKpyxjPbBMWHYuJCeKSTohaiRNEKA3MMZrqTdohPc5A1nWdMJAmXhSkV7pK8EApfkzohXmVkScs1r4mgbuHNf9",
  "key10": "617aPY6YDsSE3atk9qWdCyY5QDbcXvoAW5orSd5pvPbci6286whtmPurbpJQWjdpD6aFfSdHgBaCxBdJ29rsMo28",
  "key11": "pVRngK8gAzm6HJ7dZoAfXnHk8aVmYF3PKdZHaC5yXZAWtPsSteq93vL2E8Kmz8GqyHvKuyi65eDXjWhBhE8DG75",
  "key12": "K8vSFjKDo2tthL4qCGFUCLWS35gezxGj9fYcJX3M43TCtAhDoddkWVCwfHvqmrLHqSUTKa4BMnKWPNLdNTwfWFF",
  "key13": "4oNqAnjx2ZjsGBrQBcnXGzdekXCWwuAmucR7eNm58HARTeZWZAfTE8X1grYfaAPsU5hGMg5Fku8S1Nzpd8wumf7a",
  "key14": "3semF9yLAq5pstYTpj89oJWP4q7wCHgfErbornh8exAeSGpGxdQG4BXznwxUx4Bz39TiavJBgUebyWaR2hZo3fSK",
  "key15": "5Qi3BscgxH8ay3FT4gGHNnD2SSP8NyTJRJ4XyckPxLubiTFKVxfk1UCbKe4KeqW1rxHdV4ECpaXWjCffJC8QpTgg",
  "key16": "3PdrXgSQdqL6uKzvfaYEKrXDxi1cTy2C4P6Cgs1Jqa5KBJ5vq58u56Mtq5xmQCZKghLfzoSEdv7e7Zisuwf2skxa",
  "key17": "3TNTfFHThoU6mFWcE2NEfa6VJEuamP4SU2bEQSN5a1gn6KfZeLDWD7XzNtziyJXUWWJx9WPYhhtHMKsBPE5LzxLy",
  "key18": "24dEt9tbuoh3e85fwpHKffyMxYad392W1xY7SmPpagVNrkxbf3hPF7HE8cdXs3fLCRPH4xdfexFL7DLx9w5znAzK",
  "key19": "2xyxA2fec5tp3syonieSVYCRBuNj7S3kJ7zN1w55UEc4Qjda1Vq8cAYxNjeCtrvJXvbz33UPquXzzUzMTw8P6T4M",
  "key20": "QzGsZBxckCn94DXKU1MYwP7tTm9esyF3D7xtiJapivRUp3MZYpSPynu6P2ZmkcY5jSmMTDc5oe13mL55spUh1T2",
  "key21": "2XPWG16zasEHu7WpzXaL77RZpGNkRD9XLVsGCrMhRPUzFEuf2GVFToCzYsoqqe6JHdwrG6tJJvGtR42rmA2kQT2v",
  "key22": "4Avyv2cqnawHW4yeQXa2a5DnjJVo7P3ACHY8fATwQe14g4oKpGHQp7QVJTyEGsdDqkGpTdwLqMAwcAfrsGedjRUf",
  "key23": "4Th3GZ581oxpAqgGaT6DJGdyz3w1NFnUySuwVKX6TuzvWzHBVPgjkqPk4mNRF9o1Y9nTzZJgmosQ5YnLT5siPNWF",
  "key24": "424EDRzKivgYtem3yWfaEsKoCpPfD6eXc4Xb6Dbhh8XkXCVeV724XQw6Q781ErdKS7jb25zsdER3CyfnEFi9MnBz",
  "key25": "TmeSVdYwXua4KGrS7oUVEp2VyCARvyh1TJumXTsQrm1jATPEBJrmF1uBR1ntP8HSFZtrFbg9Td8AYQhio46cm1N",
  "key26": "2RDgwGDWFTmr74zj2BxXTVV9rxj6jnPGevoiSDJcNP5PYq51j5zDWpqeeoSwG8FdVAqDAGVtM4Ua3JJBWYPrJksc",
  "key27": "rJRDKMTTJicuUu9w1HgM84RyHqbv3zH6rt1AHBq9WAuhQa9EAbya8BkV2nkYY7ULZ42e66zb55uR9wX61WMwuYY",
  "key28": "2Y58VyUsP7kRTDyv36cwXaUUeiZVzaagWg3snksTmARU7ju8yCHFHgNx4ouG4fVL8TXewHvBebnBNALbYWpkNVFR",
  "key29": "31iyZnRHvM989frQtDWgTWjuxsoVs9z9AcxSAGgkwCCirB1np4tYqPH8adGDyYJJLMKpqejEowyRzRK89Xr181eF",
  "key30": "21dXFf6ZBP3ZjRKj8mrCGG5MGbADhphKw1iMaQEobFJrg22curr1kBM7HdQeka4xpT4LQtpwazTKz3ioBRYnfnSH",
  "key31": "2vdkSdB442TinVKUhWtWT6q6ygbt2WBnEcFekvVFnATRStvpgJUNJ9R495eHvuCX7tqrH8v8kcTkCxQY4eMc78PY",
  "key32": "4XvVVLsA7J86PdZvdspbHsdR9Wc6Kq5zqVQbURKc5kg4XppC5w6ZTXhoXhAy91C27dduQnyHL83Tsr5kMyN2E6so",
  "key33": "22AUqeTPYBEzEuyBNyr5F769ADLrEtDWCgsfg2PcXXCeXQQuSZ9Nq2WAGRHNyDmyvgteoDvCYyD5ajBBSiURhZpX",
  "key34": "5pm2xw5EbAKWN8Y8XpmdE5ZzWQpPj81NYhcRMYfxRKey5VPAb1YqChWEWyo2mvo5pCy457ptdGEiTr2MaRSmX9ey",
  "key35": "3Vtw2ftz7qTYBQvPACRxCcGbb4emQmmn52owoKw6KdpbVuUfr82L1WPcHMmis8EVPfP2pSoNKUNKjKnbwnoBKWGV",
  "key36": "2g5D7nHVSovzvg7hc1sgVcUCnBNkH8hrcM6fVEZn3u7p3YQp4BN5C5UvVUjjzWpesnmu8chSqu6C8nYRPeVPGiuP"
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
