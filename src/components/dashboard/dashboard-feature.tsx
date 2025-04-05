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
    "4D1F8BVedetNhfh5HEoy7k53inNRqrk8u7Q98EUSyR3dYcHzcNHepHvjq7uj71ZzeHAvZV67LiURkxa8RAVnWFsx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JJUmgZ6XZeERjYBcAsqrf8FxDWdx5VTzLA1jrsBsh4scy4hzE4LXXVajmnNdSW6jBfzjzJyiLD3Ecxre2DNtQxD",
  "key1": "2eqQx5S3qjeSnyJzTxos6Hxo7fkkwYeSCZjM4c4PosiZ6cnTMQfdDAbgHxR4nswGm6CSa2B8mv9LDdYwV35VVyHQ",
  "key2": "4XH6xz87QdXipRbP1BrJKKzrx7yQkVgajwijsK5Ti9pQ8YaimTXze9xAE4g55wCJev2VZu91eeoA7u3EzDdd8y1R",
  "key3": "2NBZibEAChbPcxRTRUmRhq2dqTGqvMgNtioLr41wddzyKv2kkv5QFfShGr7gegFxm3iKjWf9MhNpqJg26mSvhd7b",
  "key4": "3DDQtXbudhw5UunoSL8ahWxrBjGCRHComdbswX66NmSojg4q1rHhPn3RcLXGCGsMcA4gjBcL8WzcYCSdAMGDwcCz",
  "key5": "2McNrPXsq9XEwDmiZf9cdYChn5Gm26rQEYhysQEFZN47fg4eSh6c42iiAa5Ge7PYy9Sj58uTP3aoFhDWhxZyDGBP",
  "key6": "5SABufvE7xZU6ZkawqAu31CgRvZuY8R6A3nGhnkRcaSisi5Ka3vwqLThu9oQ9gUzZj5oLbzkhSQgabsFQMqh4GHf",
  "key7": "67QPcoPzoW19oXVb6RU9zcRTPsyqEcY9KZ9Ze4ZthpVM6q25Tuz2dCXAVGk9Xmeu7c9bZdewdmT2fX6xR3HfyPZ8",
  "key8": "5T3jbRi6E4GNhkVvBMyNCx4kGuTpKDNCyzECfw2jFC45TCzS9URxeJmT6YV9iVHNAs2mxiiJpuNKqYnsiWc3PJL2",
  "key9": "3zVcW9L5DDkC7HTtxtwyiqki3QottQYXovnh6pyZqnDwmaCCyJCtHpzc9Jv3a4pMdwNY42oWKv9hR8QaaAc7UDn1",
  "key10": "4Zkrs57zxyPgrErGbBGYdWPSoFqJCMvrRjQu1Cy4FPM5tR8uDXu9SbPuyqc9VTS7FW317xYUvCoPFejEu1Q6i25P",
  "key11": "HozKai9AzWaat6UoJn9LsjLH3RiTB4UUM13VDsFJcr8F1Vh1pFbvQoAKzTHUzgNBAkcseT42YDiayZKpfJeVQ2r",
  "key12": "Ry3YkYYpZ8U52vhmCWQEvVUcbnGHaW59xdtDrD6LMw8eRVwwMhXMYqMsNfULtxgGvYJDRcd8Lgpv4wpDaJGWKKS",
  "key13": "ZQNmQnGjp4zcfVYiSDBGHn3D1KaWkCorWhbRmkGxdRgwQvTw4tEMWs8Mau9beaMDRPGqQfhbpGxFyDBsXVQGF8Q",
  "key14": "33VbFR3o6oV2re21finCmXb7N5KW1ijjSNxWaiETKJrdQjCXuvUuHE8zoZhYd97KQfMvyiwPyANWxgC5kT5TAVGw",
  "key15": "3nPJLptWcstfcLY45JsoK3o3LLYSaHjCoa75CH4ZniE6bMvHBYwQNUkHwzSPZRCBAzxyAq1GNwh4s9zc4gjGGvRS",
  "key16": "4J8R4tQUbm3bmrqoqsD1SV9BSbkjrduKe8AMcBnQCfUpNyxHJhMMit5ivG8rknbm22mqNrR1TT4SZxdpiTQ8eZ5X",
  "key17": "Y1NmgmZFTfwjR3ALDEyyCXKa8HFuWb97jc4eqdUeHyC6mCNq1etsa6DYxqNY3EsC7nADDM95X6CyPKfyF9sNoGV",
  "key18": "4HuKgTFSSNWEoAMnwf3hhHtgj8KAtY4MYPTm7rhaVAadJrdsP1uQPNvBaV8Y1deLSZCroekjLBqgzEazVRJAY7q6",
  "key19": "3TT7spLiv6TsCM62apH2Crjuqi3dJoTr679nQKPf2aJVXcdUDmYzqgf2Vi72BN4ULCBPbPimdTn24GBQ211qs26L",
  "key20": "5ZYuJyZ4qdoxhZTLpU2MgmSJtpbSPPSP5V2UMV8MLYKBgQc4ou4T2uBxjJjkRHuvyoGU1zo22sPyim5GVnHebwMY",
  "key21": "4Hd1n3JU4Gnn6FmZ8skB29W55XXZ7Bn8sT7biG2CCejadBdMELEEBVBCh1GUfBwJXcY5bpwmM5UanMTcxXTPgLET",
  "key22": "5PpFnRjMfdmGJ9xwUHtcCypzeXcwk4CgNWPHzkkRwb9E2wdkNjrJwaaudAxqNdwXULZ9qxpfHCfkUwzDFibXycD4",
  "key23": "4BSFjf2Bggpis2r1q3EUReoXfmDQiNZYTgdzp7Q7DWrjcfib1PZgN1iPi6AwmhtjJ1ExmQrTQAbaf36bk85HSqTw",
  "key24": "27rTNqLHgvrASWYp99dbqzBnhDiwe2VedRkfZVRNv7GzfHZnKVMQRDiRQrRq9WZYxx4n3hT6RojT6wp282jxbDqk"
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
