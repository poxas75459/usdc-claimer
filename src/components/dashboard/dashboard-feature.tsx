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
    "3k9QhyBJjWMjYBshdQWW4ksCN6qdXSWdJLqmpiucuStZc6w6Xbv5GkeEX92v2msMjZh4b7p66z3PDjCr34ajMYUn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZUSmzN81wPT4TTvNuRmY9kqx3bqoohSK2gpJS2DG1knYLEEfE3G491z5W7EFTzJVmqjXgAJzPdpGFnTx4XAFJCv",
  "key1": "5BrVvUmuViZJZ36a2ctQaZ6RbTHNZEYYJkQYpTTjSbk5KoAr6nrEdFpdS3qzCS4XmdH7ifvjdLfPryaCqGKDHkTL",
  "key2": "2JZNUSnCzkp2aeNLAKQxXVteZEiriJ2NGNfvSepXCLnrhEi62u6o8DHFd5g6x219VAhaZow1R3zrbe6DqwM6UTQ7",
  "key3": "5JreUtUfGJ5Cmm7DS31rtpAQivA3Mr1t3YtvxH6BA5Uqbpsj4kKU85DBTTXARoTfGriyxcXEt6QavRQA9Uk6QHBE",
  "key4": "5cN3H7jCrtxEXLyA7ZKbZPooAr2f9vq3QiaMXg5af9t8qTgbCGMYrhzjjGrQP5vuQCotQyfh2PNJvY5i2KVMxfFw",
  "key5": "4FZjjwkYo1TR7MTJNPrkFjVCAXNer1LZA5LbBA5DmQ9SgRrVJY18wjTxF2n9iT9iL23UKJBM9bHm6BnLp75WahPd",
  "key6": "4L1ksUYKZLEGwMA6g49nGUJ7MvUofd85esWf3gL2amUqpsS3nnp2r67jWXpURHbJbHtv9fVUHM3dm7fLAXde7yyb",
  "key7": "WaLD3jjcEWnen9xVpjNCYzUiKFY99hsKJNciqKohFRgTaD2kogrwc6efPjGPPZ9uqFJD7Jhkki2TTcXebEgHSxf",
  "key8": "5dMMGQpV27BUZ6zQGLJ4VcHYJpnmS7oq5Sog2AgdxSPfUhKGcjpC7KXjBZV3eHVRKhoMRgxjWxCvW7jbsk61kHoX",
  "key9": "2ryzNt9841vPUu64hPxuC1PpiCP1zZR3KhHJKnW3QqqS11T6PQz8q8E6XmZYWZTmMYYiYE9wKz7g1xabBexEAxGf",
  "key10": "55kzH7SeBB7KqS2S51RnaAHAfMytJLTDsLHs4Jni62DEe3yks2H4CJ1gnbVq1RQeUjzak9ibVkfrrw9wZoGYxhtL",
  "key11": "qNTJdbWpFSZqgW7VnZ7SjURogQWZ5ojyjnzPdmtPXhcKEobaRBdQ4MsJ8qpAJ7fsLKgapMEy82d8XtYaY7vZg1b",
  "key12": "4wBYAyHC34FSJZ9B1Xmu7RN7ehQehD8SYF7fUvtBHkKYgpATpTPZL3qkTfb8mdbo3QPY32KjghVFbbj3KtsvnGrD",
  "key13": "3UvU9RGoeq3YGyJ2u8N16gLKdXskSUL3VKX4cgKsicn3vxgJBX3StPn6ymcoow5GP5t5X26i9wudqGnx5oVEtQBi",
  "key14": "5muA44QsG9x86QarwFFEk3vKdW2VRcgcvnMZY66jjARAisbZ49T4e42wXk98e9BK7Hs3K7eiJXfikt1QqJJvuCVh",
  "key15": "FQUKxXS8giSGw4VCpEQ2AgGYERDh3S6JXRq8XEyBEwk8TpBuKUjEiESjhTGHqswaNim9rddFHV7VewwGJGHAqjT",
  "key16": "2RnjuLBcf32rLzTHjDCY3FKjDirTwFqnzYsh4Gddf1tLt7ApdhdVRm4wetkekfaiuH9LhYytyyWdTSddza5BmRy3",
  "key17": "4ASQcPJfFsttGgGEWn5yJazeSxD9QSC2VfubK3pP43CqoDmYuDC28EpLMgwSGp2bS4BinGowHTbx8zPV3weWQaQb",
  "key18": "8fMdcb5YvqTCecHJV4ScPr99KY39V7CVWesbod9aX9KdvkqX8NHr7HjJwLgGq13iEgBE6xtDEyhBfUaG68EM629",
  "key19": "dPvz9p7wRLmj4RmJU6gFAggMHWcdE4jXHUPvGvNKBNF89HzAxu7SsDBApBm6eRcjEKGjRCwq6g51rVKYSV5XXkB",
  "key20": "5bFgnrU2tdjDphgoswujSqZxr9CjXZtjMp3b6pXq9tAbwt6vdNyv8CWNzbX3XgvgPYSEFbbaga48hnuuQLNghjyY",
  "key21": "2mSgNJKqz7Am9nhkWqiGQGftaLVrbJfm3sPanWh23xgLhAmKnLRbs8nDjbct1QaWoWNiVx96H8WYWpjiyZM4ThrX",
  "key22": "4V1W6TSvtKUQbBcHcjwr68ZsyCUrLqdXpYB82MxHFGiyySNyMD2dP9m26hGkVPa7c4a36zFWDUj1e3tkuimYRMgs",
  "key23": "3vFAmA4NrCHbT4eqAep8r9jQSyW4urjfg84BmphTuSFLSi7Fo1UWxRBAoxMp9GkZrkCZa6wT3Su5aEMj7viVVNKG",
  "key24": "ePfw9qS7vDnrWM8rnm9NSbK7g9wpQG8ngeXvaoySrPEvzvg6GY7ERBQ7hMXJxJErja8J8cwroSSv8BSwMPmFXeT",
  "key25": "5ciRFxacduFU7GmGVudheDUTDoyBtFAcgzDLv3UQru3DqCR7uu1xMLgwp1V15yViz4cF88Fr3VhdZeVk5Ec6EeGU",
  "key26": "3rF6cBgovtDLtVctyD8z74ppHbjTu5ngLRPEet5VDTTQR2XHPHBjsm3rFh7dWdaYSweQfUBPL3Z5GetEwGKZUAtt"
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
