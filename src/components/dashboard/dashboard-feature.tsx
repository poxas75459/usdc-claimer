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
    "62GrZGFSCRWn3JZEKoLuPp8HE4J5MPn6mjjZKZLbifFsw2aNNeL9vPZEScxkfFZXexxx42TjufUNk8bTF5jHx7xz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rJTTXo7LTqPCVAYUanr5z8Q4xQy1eEi4K1zdUaQLKu6VSnxjWAXhD85vvwdPCs96qVyQtv7cuhPjYyeND4RWhPD",
  "key1": "1GHEnVjeASTnc7k1vvLSKantc51Dyv3vzzoWYRCJSJocW2rCm3omBsDoWhtXAC6xXod1uJ1QjLTnw9Z5y3yg9xv",
  "key2": "2AZVMtGzr2mfCCqKEmrCsV59axBrdCUaRTNwkfLxqzAgPG9UaDBhBd3XweEq2GXcuWXriaDZqj3DhqEM6VHQGkZM",
  "key3": "35NegFAdVM1XN26tXXXBa5MVo53zRaUzVKaASmfnwVxCnbzv7aq5y6DCNXM2VNV8fxyAb9eFSaNvxRpjVwm8WC6q",
  "key4": "hHaNDKAWbg4kShqV1JakGk6kzE7tbwR727bxh3r9Y4NB8fbxHhtzRdE4nK9z9BTZRvpp1x2acvzE7FUoDvT3vs5",
  "key5": "5sx3soVjqMdScWWfKLfRogs1e7ySHCgj5xnSFECiCnhRWSTjuAGn7ALmrHxn8xaqueSPe4ARtizTKRYDftF8dDd5",
  "key6": "2mTxv2qPXrtBGGdbCwWgZhRM1Tean5THMXY6jjKekfddmAk1HZD1i3FLPTurGvg6fVFDR7B3VAXezyNkbhjwY9bx",
  "key7": "4AjcobBS6TaCMotGqxShVhFMcRJXPWwMr45WEpRbDzCoBnysh9xQsrG9YjBWds7NJPEh42twEoUxDo7LieuhBbi1",
  "key8": "5nKXkwNX2yw7dDXLtc2An1woDWvomHpB6uEMQUDXCskpKiZ7jmEXit494KZbL5dAddbj2t4zueXWgWJZV4BNMuU1",
  "key9": "4c3cBcertXqMQM3wBMi9zMsZ3Nk1KuhdejYfp8nmFGpU7KEHwjXNareBsL8nxJJJxUesApkxGhXqjhrmuWJBHeH7",
  "key10": "2KAQqXqNkx2HTWF4DEMfMHELpCY9a9XZuWJEieYvudsr2nQaAVMvKtnDR6LzTeBNMYLM4Qo58sjwcwREKAEkYZzk",
  "key11": "48WuqvZ2UuJud2uKD9UfgS3oH9knrHik3qzoP9pyUak6GKSLZZ9XtEC7xRtT3DTV3iCcD6bEMDRq5nBotZHecs7u",
  "key12": "3veRPmuAHHaiMnXvRPpH4it9hLrWXXYbums6zmLd6xpSxkmF4cx2kVYPPgwxahXDd5GQNazY1um37c4SfoFGcbsR",
  "key13": "2PMxtpfxs5aAHnvsYu6BvbVTVSHehqAx4WmoPAjoKLqU2634D8WcKW9TJE1bWJKyDPfMiGtq9KE353mDFhnDf7gz",
  "key14": "5i6P1AJsKp6ShbEoSof7dQNUjpYQ2KbBPQFdpVErSwGB9iBrMRgMFJaWcoPRqDo91ZBLrfaVCdeVm8FEzuYq6nyq",
  "key15": "32DUHj7rgrFGMTQfT53LYugyoxjyQYh81zFayPcte5SHMmkaHibxie4vud84chM9fWWdJ5C1JLF6cX5rVxZDAtVb",
  "key16": "33Gb9rNa3gWsHmT1YBG8KmWDBFFnTDfAC63ySxLGLh5WUv5m8kFhwmZa1K6oXwfdhwJCMCntxYqGhQ3HbZafXbFy",
  "key17": "5iCMjSRGjvrnrgAP3e1Fc2iS2JGLZbiUC8hgS4x2exPVhBKkNgmwyY83eXqPTQskd8kqrPppcbmkBk6jqpdQsAAf",
  "key18": "65QpGikUf28KGB5iY4M2LsrLaeYyc2U9gdGDp5EfMGYLCi7NjSNHeKkt8XuPTQnuEjdBNtLkxSww7R5uMLcpdtF7",
  "key19": "4mRdCUvY2R63JfnXhYRvoGmXdAP4stta5mNGjwWY6TbUWm99ABtouBGcf7CyDQ1dVHCtsNxhPe6XuPpyrZfufMzj",
  "key20": "4ABaoNW8Q6xZYMcqutrR5KXoqZJ6JiBFmDVsFk3YFvnhdfnvYLm9735nkmSCdUfr97kASiAQX3bb5zFQc2Z1q8NW",
  "key21": "5unTNYYjDU2nuiBQkZh6iUL7JBKK7AKcqRf6rTQKih4TvHS2VBd7mX14GEJFUXbq3C2fjAMdBStcmNErWQqBNwjV",
  "key22": "3ZVXZH35QbzwDEp7Y5vqgdKtqbC2Cfcb9i8vGD2u7EX9c1m8TeSEX6GLn8WiemtNJ3J5SR3ihmeQAQ91ekgqL8sf",
  "key23": "azFxfFxkzn2vqsKdAAch9Lz99FyR4ht7Uezqitedy1zYEPe1ZDTwZGTMPEc61xk1Q8XxXSZV7aA5ue1o7HujqJ3",
  "key24": "2hbUjRGDjabiz78foQ6RSTQFncmCm739yPrnU7nfbPnHdwcHP9DnXiWu42P79irMYvLEzPQaeMQKVHJvctxoHiKZ",
  "key25": "5ehA2MRR6nTP45VsAmB4cRqtuSkqfy84e5kwK4kZngjsEj4M5o5YoJitMhuSwcEzVD4S3efYApx6qCzhxPjmTtmr",
  "key26": "28dAjzGSLoKE6kAcfQE8ssSgQT8H3r8Lxf9mabBfTdLxjxKBjGJQ12YiLbVLxEejNKhBuco13R3EdWvupWqn83oF",
  "key27": "2ZsSBWUjtm7AwJamFYt2vPzVS3TaDNLxwnZHmTCadgmvkZrAyUNGQdeQgEvWs22X49mNRBx1eoWXG59hjLtfYu83",
  "key28": "nBfxxRwEsCxZhtSDhbmfDPVeEsjBom4sknbCPvD3BQG1SgUBFZeZJQzKTfVkRokvaDXhGrbAyjNigSnGtRjgY7J",
  "key29": "4SLLY4xmy3PSMBbEfzkuFF4FjvRMYMBFyi4v8w6qskoM3oxWPDc8mWhBJJmEi7VuRb6EmeBNCUfGyzCHggqMX4m7",
  "key30": "2CtpYokZTALvTYsXgweM4HseQvPgKKKJ9Vox1dwb7Bq4vCe1XJ8L9v43N1bN4jmLrw82c14vW9k94DPpCCZo3aBM",
  "key31": "2CDu74JYZVoAsfAZ2QKhzUmfJcT56NPBK6Tq7JSA8BKzDhuGVBgDqsEpsJcZWk4nCxHCWKHzV5z78aoS2emcvWUh",
  "key32": "uoLVFNKvTaT1RmUtK74kMcjZNivK47j3HUtujrkbxZEv7FfJCdwnNBGfsbruShEqZCeCiCvjvfSBZx3cmCZuwGe",
  "key33": "3tWkqfXzEjFdtGxbKytNCvcjVRrcJYLfHGvoRLUh7DSo4hKGsMHipndkrkduFCkXyiy9djz7WdMjbA6UuAdyzQXx"
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
