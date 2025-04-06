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
    "35giar1XeLcAguijCRY2PxiZDK7jFNb9wSHXhVjuSnzzFMNzjdpx4LUh43YbdAy8fAg8CWy4NKLsXP1B3B9oaHDb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FA9ShUNuW3BveghBSBVnvCbcojXmskUPhGL3SWiEd9BSsnCwBy5MPdnpBzS9HfHPjpnxRwQYUkPNgfv4USue7YZ",
  "key1": "3v9v6fZrhYLXULEMiT8UHQ4dJRnJ4MgZZdiqkhJq818wPbygFR4mDUFDumJd441n3XQErwZPyvUEh5Tt5JfKczgP",
  "key2": "657UmJaSLoQKdcEv5hLKBvufwnTLu6cfX7sQQEy4kuAoGPV9msh1NxFrRvqYRjRC6WnK9f6PWt3WXC5fwHFiVvvM",
  "key3": "4bnDie7yJzbyJxWfWBuoYTFw7rzeqPZmbFn3ikYsshiujYe84sKZ4jauoFw27c6KvQSLwmLE7PywQhZkn5446qah",
  "key4": "63TdyRMv441keMV4XhnyNRbUVXLyXPdStPnvRkR1DbrWVwwsiuGz3LquU8f8TCb3k8dPrv6qbF54Urc18J8d8dCi",
  "key5": "34CJ87QUAqoLMwwAtmw1GLBj8UXLQV726B4zyWsCzFEXpfYNgppn1XY7B4nQ2T4PsC5LpeJSc3Jwmf7Je2fQTjtM",
  "key6": "5QpawgmVJeTpcCQgxnkfx7MMaxpvCsXe95E5Bj1YB9LBZW5G3pUvMCs4y7zRUcmjgjzgT6kq6CTtWtxHKwJsonzS",
  "key7": "4GqJjPZsLMmVUC1RwFKGKM1BRcn8ShA5KUuRBZpSURNcHBLLyuzveuigTMheTXT3bDU2ZUuGxH1yDPFjEpkF2gMW",
  "key8": "2sTDVvKNCSRjWKm6PR2KHwYWgn9Bge7vfLdStAPkqF6cAYWfWZYRgYFzo1cFDY5PvbWNpg5vZgRFwetExEn9j15s",
  "key9": "4zwumAgvrY8oNGnnWiWU69F34Wyt2SrpoYeZyfshwMcXVTYu6FD3B9nDHiFF1QS7cyHDHdtLiw5nNsBv8Yqo5nVr",
  "key10": "3nQ7khjeiLcencYgrBZemyzqLokFugtbMUHcvpNp62hQx7ouJZ2U8m6gddi95RbyrpU7hwxsVrvqGM1T6JbpHDwf",
  "key11": "5DXyFKvx3S9ZLEJZELKee9XPDqaFdzX9pEXbsgDobbdYQXd9VheDaUDpdikQtLj6xgp815Zk1S75dj43rwZNcF2d",
  "key12": "2CTmDECLTbXioBzw5SxG55Mm3pTWDoonE5cdcLHbMGru95gjC8BfcDHfeLqrbH79eurwgaEvQVv2xQkHbBLvMAJ1",
  "key13": "3YTytBy2aXULTaY4swkaL326ntCZoxhdBnHsdGPbAfbNptG2ysvBRV2uo6EyQ9wL6w32jDq8jw6rt3o8Uf94SEcw",
  "key14": "BE32DNkQJ2V44wKXbZF1i3n5qVWbA3riMb2FPVU3Xbvme8iJMiSyU2xwYHAuNvPiP7ETjdKSYJT1yZ5zStBRUow",
  "key15": "UQ9QCo2zmNVBASN5sdK3DZ7EwXN69GgdKATSxxkQ3NT2ZwaAuBdi6AV8A7ZjjkuAkQcHu6L55zx4dp3othju7Wx",
  "key16": "5KEHi3DUmL1dKKHVrbYdgyQcDsNmkFUbXUaFSM2cQ4rg2NzffjF3epx8zsXAQJ155ychdZQXxgKoJBeZDm6ZL4X4",
  "key17": "5RZgZyw3tq4GsrJveJpFXRYCYhNkWnL7sqbxEYQZoL7EP9pzCjoyfRh8Qd7uyvHLoWvxU4dLnBPqk2g542UmNc1",
  "key18": "ximdcCXFKDdJRgEvNTqrvGiyddTg6ETNHLVBtUsD2MVtzhrwtVXTHpgCDkpxPRasZm76M3RmNTTXweDGfN1JDuz",
  "key19": "qXQV5Ju2Xr4YygspShqoSu2HL17MZq2FQptKr84hsym6kjB2CXfn6T72ZZxC66N1biqZuEyNHrrUx4XUGFNu6Um",
  "key20": "66Wpvee5yacWGPbBz9E66zyZMBfXBojSawrJQCztzhsmCissTyQCwqiv1f3nszRbLoirPvvUH3jTzg2vvQFtZoMD",
  "key21": "3DeHEbR6GKca2Qwtie9cdyEdaUDBjWrsFci9Mg39qPqrcdHQ4MVBjVanCWEBDQcWenrQLbe5ActsMVSdU3ZCAFjC",
  "key22": "3RhbxJfQYdLMuawHViLUgBrNVHA8x6h7bK64pq6dcoLrMBpc3keQcF3pK7RvVnjBzYRgSv1euenMU6DqQa82h1aN",
  "key23": "3EWnX8PXSLUznkbGE53MtEnuD7Ut7Xvq4ht2o7W2t3U4XacaAMGdm8KDnru8gvzrgggKY86SYM1q3uugMPRPimCh",
  "key24": "5Mtn41fmyd2NGwDvPKd6MJcTgPTQBodiKu43PkwGK9CYkpcJYhuNKGyQ7E5S5TBKXcZMCyoGuS7XyytGGyzHxSsp",
  "key25": "66nQfVXabaidJ8HgoSkwtwmtonhbFGkBfu4ZsnQMPsW1qUXrMikU1VFA8gU5afmVv39LnmgvMDVw8xzxCdwNJqfW",
  "key26": "2UHWa5JwBA1bmfTzfeYapVrPBmmoYCkLGtFfpBhC8ExYdY2KsM3mXZ2F78iskY1E5q35Yr5pDRpNnoGaM4MZqySZ",
  "key27": "4DryELCBw5Js9BbUPh2csLn1cedbgE8Lxes8aNRrMTkQqLE121zki42PUxuqLCGqf53ARLpffPTEmWcX3mnHUHSy",
  "key28": "4y7rhvK4KoetX8HvcPVPbe8bnoYs8i8rnf5XHpJucPxKEsRtyBrUUGaQWpiLZx7AhLPTF9CttsW5ANLao26BMfsw",
  "key29": "4Ns36uiv2DZi4sAQy75nv6p6mQ1oBZeGGtqBJLnFt1uMFhnK7QsNyDyUKMvvfnTcGf5r42fswSqRfVg7Fi3uauec"
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
