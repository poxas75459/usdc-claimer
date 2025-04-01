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
    "vC91rbUhMe34knoTxsXUcWJxgXbubKrLwun5YVWYP74sDvSy5FXfRP7uR4fdJJa9tMfDHaQxpyYghyYkh71AxcJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5W3vpUpH7ScFmibht9XZBRo4bsPXqPrvd5eBHwa2Ez58QUcXomyqCALBV8Cbouy5JhoPS2iiYLqcgKTiAucgvkdZ",
  "key1": "2x73jd6eFduVrNswZKqwVqEwJxPbi7xJCCviE5gDXAAoDj5kJgq5YRHFtvbyn4F3v47GDUnMaY8ZQJhrT7TvBZH9",
  "key2": "3SeggNH4sVHz6SZXSw95o7GMR79LGSDHG32XMR4bwieYDvujWPF9nPfMxvP3si7Y4sPYcydPgpKHFq9kmZ6mnCoh",
  "key3": "4Zuyk8nPkYiUNxsWNfDjE5NVM9XaeCFcpJb2nbNpxjFaUAQoLP31Svpjb6tbZCF8QYmAD7vuxhCSDxk2XCj3g5yf",
  "key4": "4cfcyGVdUh812pvxSFUAdhYnjFrFpLocfcaKCpmhkGD4MBpFsJ9qHC7Jhn5Yr1mFqrAs4wbqkAZwrRMbtTS3y934",
  "key5": "2c8UtUtfh7213ntUm43gZMoG6uKqvrCdfKz4J5YkuDSGoXEEjHsrjyCBJZXUVYUukBKhUCjsw4uv9ADJ7Pr9XeCX",
  "key6": "4WhkDKCoGbf1tA2oPWjuFM7ewjTAz35miayX4CZsaD5mKvv3ezf1w8MvXPriRQtJusfKYRJszjop2ajUZckYX9Uo",
  "key7": "D9GwPxfxr1YDGDgvWM85H7xw93bJd3ZFKY5s8CcCM2oBVmV5CPEtak8pqQMdo1c8wPcCRmtb2fRvuKtMK7Ki3DD",
  "key8": "5ig4YqhWSXiUYBo9mkmN2uX3LC9Z3gaqFNTxnn7L3sqsaMCWCz1tGaZGZxeFHsNc1PSeyNuhbDMY99aWrRq15Yjs",
  "key9": "G7yafgKTmL1KgWajRTfoHB77c25yLVkjFQrDxet2APht3Kj1VCWWcwUhwt2ngoodN8VQGfwYaABSne2sBMEntey",
  "key10": "ozM7GB2L4PqSZbB1zqDsSyYq1qgX2p5BqqmRK9LR5zZ4ciJVVqLr7ADTXSCBHwcddpPqMBuQHoq7ZECFHr7kSrx",
  "key11": "5gfwqKMmJh32t3T1u2be3SH9EYirMJP88aMXUYR4xMQuBgRcR5MjJhAjZ12udb3XVwrqKmT6XfWXc8q86KmWbye9",
  "key12": "5i7EKTFTZme6z21XX8PMqP1Bqvb9kYCqY5N3yrVnB2hWmFdT7vezeX4LesJ3AuydyTXHKsM2MbVJgttyRTQaoDv6",
  "key13": "XuXZLsJnAEGSE6ER6mhuP5dzMuwE12AnfLYgi4UQQPifdSvHiNw94rv7ZwUJNAoNSgzmQ7ZnxRD2G2P7Cir2AfX",
  "key14": "3bGQrbk5SJzXkvNdJ6VppdLWgtwk5VwEetqtWkR4npjE94C52m7mMkaim9oyzWZbY1fLndUbCXCwCBbpbLC2PH5d",
  "key15": "3Do1hWFDec51sdx1SG1aYWfacE3dxF4DTUYBdZyY7MwEgR7r1qU7DZ567s7RtZDz9vLwMwm5jMctQtwS9Nxhdt9L",
  "key16": "21F5D4dzMYJVdWMpWbTLjfeQtJm7H4DhEcK86Fmiun2bgLvCdQDZmBoc2gfeuiDfTfhVMaKujTMx5woF3JY5nQ8d",
  "key17": "5rK81NrNGCGRjJp2DBb6vbpTyUJsUC5xwAENb5vVCmDNBzhYrcea52B9CDjL8cGerVKRczrBnYXbJBZUixoghQ1v",
  "key18": "24WqBJ1QM5MXJt4vpnWaMBsSmxL3AzQB6EwSuyegaY314GmuHvL2Rai8eFLtQZBuwjqBbNKkZ87Qn4JpBReL1YXd",
  "key19": "xrmfLCbbY1RSDvupR8iUp8HBpu1nzXTe14sxfPKyhugzj9WXQjm5TRk7FJAnVFiWmMQGVD1JC23YaRuZK9vcL2Z",
  "key20": "4qDux9zjtmH4kxiPFQEhV6PtUwVsP1127Azg2ZEKfLhUBDf48TgUSgXmkzn1DGJZENwwUhC2LYu24v1eYS9QDgC",
  "key21": "5ZZ728iRtHLQyYNygTT2rQwDZ7CrYoENjzK2nSJSWzotsHUZhJqf6P21EbHF1fjcdqSxnECDTZTPmCSxopskoj4q",
  "key22": "5ny2J298MT2S8N3KhQY9V4vt6w2mzFvzagp2gxXw8kD7EAa6oVWtU8cYrUpK6MHCyE4rDxTiF7rkxNvqs4mZPkRe",
  "key23": "efqTNdQjyfcxoJVYGWaMeZk58cX3ZxsLJ7n2o6KRQwUN4krmGS2CqDQ9Wypw54GsRDeEiZz4sKtFwyFRXcVtc15",
  "key24": "5gz2Q4JYShhKSMhVMaiKGasYLbn19RWS7U8HFfg3LViy9EjjNDhMZ1Risdaqr6gBjsD4RTfrg9pER61tyHyGwh1j",
  "key25": "2pHM142cHJDdBPeonkMisnu4rDgsb6QFfEzXyyH9MLh4TLQo5fuSqYs7QtcJ1NgZi1zqmEYjyrAcXqSixa4aQann",
  "key26": "3pRVK4DeWeYAP9NSy3owsCqesrgkuQJ1SD4Zr49e6JrKqLkTF6GG32wSXy8XDSmHAat7Kau3yi7LkPVAn6PAg2pQ",
  "key27": "3GMQ5G6fAEJVxSskuCHnxjQhnhJ9aJyKs1pXY3nESXzRCkDbjTXQUULQzq5sgp9nhHYUA7gK59VaDQQSGp9EfBWe",
  "key28": "31PGLzFK4rtnmaMmgRQJFcjNn15iffkdmaY5pq8WvAMDrk9LKmNVsoQN3aa4mGZ8NEiRUncveHivU5ATjPNoP8ux"
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
