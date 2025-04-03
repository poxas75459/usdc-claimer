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
    "2P9WBYnjfCqKtBJXDfVmo7kYtrXbZb7TgjKvzJ7x3WvkvGKaQGQSdEcS8Vm4ryWjxMsVJQozUmdgQkfKXt9q3gXv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hGQyeoC9yufTiVCgoo7aWT1w9Cj6fFcM6iQZd3vUEvB6s96k8qXKsRmVcvQU2vbtrRbCr44GCuQPGAP7gn9g3e",
  "key1": "2TchvYaYcWU8j1YMh3hiw2McdVKJU2zJ8A2JvnQLwFxR4umf2dT4f84GS4Dbn45XP7PzgtyZJVbHmyaLRhbLCLFP",
  "key2": "3pWL1EyUAn2cj8hLrs43tBg1ER6w5GMzsKMeHjbHWdK7wS2zuevMRWRSswbUb4md5Jhvep9WNgvHxY9zBkfX96dR",
  "key3": "4xFbjj9rWTfswtVwWm2ttB7B5C8q1bpcyJBv2aS3MN4X9E1BfR6iAsKeKwBRhpPxojD4vZNBr57arVafr8aWx7Gy",
  "key4": "48ADzrVNosgpuzp45kuwqCUCX1yWvFwUqH2dTFjxYEueD8p4yv4h4cjY3T1razYCTDgyVG8aLvzRdoTCNikR82os",
  "key5": "56BEiGdAvPgM3kVLuDqJTYoj4enURQLoy1jozcymSA4q9qz4H2EtTfViUosXUV5ZNiSHtQhmXHQwxpr5zp5R3L7p",
  "key6": "3otPWLTZtvqpXTYqrnF7CvArjfF3LTgUbFghbZ6yUkUBpaCRF6TWduVBCqB7Za2X93i9GhoVWazm42k1AwoHZUdG",
  "key7": "5UAuhy5mrFWTBLCn2M2vyRYdbeofDGYMBxSoRTHepjerXVnrBCP4vo2H8LQshqAbqU2zEifk3PPrYHoEdxo3josL",
  "key8": "3GKnvpzam6tP5qkJYCixNwDENFmJLq79hjXh1CiEajfTNDfBZVXHGksga9pYWvCfoK53xkPrAkWwzyeVVYwiuUuR",
  "key9": "2yZwfySBKR6u2pdPdMoX35vwmj1ofnygmKpEWmBCRGnBpegiJaLHL66hYrM7f6NPx6EKJzXABjaXYKzRKdgAnyD",
  "key10": "HoodUN6vzUHFWdSBdPhaNSZCAQjBLFXn9Au2N1LwivbVcG1jitzxEJdg2wLs6uf5UBuCQKCDbtmS7BqcNSSeyoK",
  "key11": "zmaDXSE9aLhXTARoENUgxDjuCwwSrfCANBujgLRFkHdnuAJgFFKqJetZaMn9YADReHpxW7qAg7zzZqXnp7E7MYQ",
  "key12": "67YGHaGYYVEqM36GcTK5QVXb4XhUm79xqWTEYAP4oe6fW3RehsnxbD83UaS9jVbHzPPFiSkCw6BQ6itTxS6biQr7",
  "key13": "3YHPktPDRHw8HdnmTM6Z54J2LaVSVjjQ7WQdnyJRS2AzExhdnHCbKAdjYw3Npb3p98BHgHUEw1g66oj5WiQUkaro",
  "key14": "nG8cPNPduD9Ppc7Fw9h9FY7MqQLcow7EquYGdGdpKphk7oEhNcZisQeEWrrcBwgm5LR3ox8DQdkXY7hnhKtA3C3",
  "key15": "5PNoXWwSeWnZeiTnxmjVsDvmQ69xSiMkDG8kX2ipZzUM425pvdGVbEnYGnoy3VLsetRR8wHfogcwdQURsvfjVKY5",
  "key16": "122CQ2HixAnY1r1DWucZJDUHZTAbTJ4BweKvaMhWzUkHrL16AaerP8SdGtRhDxuixvmRxEPnivMjvUVQgco6Z9Np",
  "key17": "29AQrJqp9bQC2sbZcqtdb8fcyvjcJWVTwwLH4hhj4j8xW8K7oMTBfU6g3eo1Zy4owqsKFscr1H6jJDp8CMt8bP92",
  "key18": "KHLwB5DtmgyzoK5TNCHonu7zn2y2XELzvzci1wKKNpZAQ5nkJFbPHWZJFp6JPFkZeQYMP12X8fkftR9Un4EXQtR",
  "key19": "2yKKxTFAiSBh86C32SuzWifJ4C7p4gkZKtmJpNgiZSRvjoBWqjXfVrCL27djkQkVRUAtrN5Tu16YTfr1v5ETP9qR",
  "key20": "3i7HpVqdawx5jQmcAxAt8TQpakYwvpmbpCXKEw9rjMiHZqHoXQKWMQ4SCxKLvCXfabyzBMVxquujD3fE28YcRXp2",
  "key21": "G6M4nnVzS2kKN3F5iRbWeSDnEEoFqkWYbiVNXfdkF6F9rnLAnYpr3rkvvVN9ep7zMTKJ6XQt6JkqUN5PoR1cGgv",
  "key22": "26eYUcnx4dx9ejQShSERHJUPUMx4CoKVQKqpNZknPePiUr8xrhGpVRBBJkRTML2K8XPTtAfgC1TWo4AbWG3uw9ko",
  "key23": "Z1jTaQHr2n3Qj1JR7TBGYuKifDfPe5K2CQsvbqA3bdwQyGHnVj6QZVvJyMbciqCYHqxnTNGrST69fiK2FTXPVos",
  "key24": "342uRZHdC35NAB6mRHyyXrrRwJeVVJvnkZnTpuoUUjPU5vZTEXQG4Sru4Rjjsr1oAH9DV2aJgRMoqoSiKj7CLfGv",
  "key25": "3wp4rxZrZhNNRfwiQrfwWdajtWZYAXPecheEPsbCXyDhDumwDSPz4ihiMaZsspoBY1CimXhVTuwb3kGKcHgRCN3U",
  "key26": "445oyPYqEqZe4pGWz776ZrhJpctjJ6reBwkGotBRkc9UUQJcHtLiwDDmtWdak3QaNXmofux834xwWRbWd3ve8RT1",
  "key27": "3gHmhAcFMniDQ8ucnY8UfVdYgYQVSa4NxKvzHy5Fm5fYtpHboEuK3SyM9UGXqjqTN8yHU5SN5PRT3vLj82ymXboS",
  "key28": "39ZRqRJGPjjsTDv2T65JCB1fMwKT47KG8baNEsmH4SxLMPnVFFB1D22sQX49uZhny8Ub4G18ywvPrSCJaRdRphFx",
  "key29": "49tJMhPMjmNkHxSue8gPr8a991o3ySdCQNu1jvTHs6oJ4ymxRDTgo99TALkNefhcRYgRLNBHhbmzyukMBQRraihP",
  "key30": "5nomfdaraemftemsy4vrUtZu9bVWsnacCefFnBGM5KLw5W8pd2uaVPWtV5eNzN3GJAbRpwqSq7DnE3iTEPrdoqDU",
  "key31": "3sAxDd9To8qdBAXCA5pJfFSNKUkd4dyqL4Qyjh45D1X4DwC9qFC6ckdJQFhL38MJyJuKLZWHwrp1p962kSNSHnuD",
  "key32": "39SWXSySQvsLdfY6fufnG3hDkx9GooHq7qpzVY3WyDVvzPajQtNrkPzLYQnd4gxYktJWVVLuS7ABnW6F4qy9Py3t",
  "key33": "3xh3nfpFb17y7e3FbZonCmFogwon5b2GQt8gg3oDyH8Ssd6A4KmLhneLSDmRyZbnBhdqrvigEFq1n5rd6FRvVbnX",
  "key34": "3acvKjPSymombf3AKi8edtMAGEgevywLJybayERhFV2FAa2ozJwBqxRkJiyjDNq3k1pJDAGEa512dBAgz1mQTpMc",
  "key35": "mkG54Wp2yPkuunD9i1rmKCuE11fmALSFa3fuefvftekZgoBYsAYVMCHDnL9dyYb2yDwT6P7xKdDmrLUF22yoSV9",
  "key36": "6fZ4cMiUCNJ8YuAusxByBAthig47arSHyfgCrupszwcag37P8HXchjYKLwcVDmHL1dN1mz3SxdAtvoSx5W2JgjJ",
  "key37": "4jkGF4AELyVYD5e37VtdMFh2hUyxoA3XmXiQhb2kg2vSAgqGLMab4ccCXeeEDbW8dozEmdkuUfoBmiKr4rFMitPB"
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
