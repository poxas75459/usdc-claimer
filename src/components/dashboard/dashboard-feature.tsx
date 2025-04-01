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
    "55KFMa5RrhUoqQWydy2Zr4v8jsUpBWm9NM7HXw1FyWcw4XcqFZPz434ZdqYVCwQ6TrfwoCCRr1Ysdves3Ai5EPZ5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BbNMzTFBA1BsiGdnpU5hz5V1DQgGn5e6QTtTooKocN1HRrqLPQaXo7FEh6Ur4PMYyVBD2gcTCyAvnj9ATbHayLS",
  "key1": "2Y1ifQ4oXh9pKqb7JipbMsTue89gmovoSAGfrkTcNVrFZfCPLvNqrj2Y4TT8A5y7yHeGAGyGfaFuW9uQJ9h8xZwf",
  "key2": "2E1ihKPSZbd8NqMydShee8Ko3TXomdchMXio3nPizGBQFYM6MdkDfnXPbJkjzrdXsyPUtk2MjmDJYKXMrcwZ2FJX",
  "key3": "45hJabHrhF6Gw76gjoW2mhb175tYmqpWsSV4DLCDhRfEfktE3mzX5PAPS4wL36HgHfakhsAwTkPY8PKXHkxCYErJ",
  "key4": "3dRhy2zX8P6fZwrheuCBYXmCFbgKfzJ73FehP4879HRkex6YgxLqEBbxLXE4QpfmhgEGBAmb7wRUQVN14DJxUBb2",
  "key5": "ZkFyZ1qwWU9vkYCU3gStuqLRkzyUBwTT9EsvCMKvNfTjdAAyNhjYz7VzN9R5ruAqcKsBc1ri6nRavE5TkzZZujc",
  "key6": "4NbUjWEyHwXNsYbAHU6rYZpJ4rze9G3RJEun5vL1Fr6kknNqu9aBEvehSt1Z7457mhVrUPJ8nwgbG6E8SqJqWJy9",
  "key7": "K5YQMwu7vkPvnAxkCHjVRGZzZ6CQV8qi5KFK8qBJiV7SniRq6SeqY9czEGYhJYvge87xUXHDWUcv5Hmb1niFNSf",
  "key8": "3aCjCxVAP9JYJB1r4Yje1qjqixsSNafsvfHwX74rDV233zeERCiDzxxynRprTPHF4goRKgt1t5nGa6iyuZ5zpyFd",
  "key9": "AsmpZ1DvvxCGL2NffReWJyb1in4Nuy39kvwRFBxBb4YUs1SmbJSss7pjJm3c4M8PWXwdKWwuRmANTznmA3ita1u",
  "key10": "5oTX8uFu67TU1Z1HWDLKHLq4eKVPCG7hKCBRE6GcznEUWbWdGmWs9Q2gfrMo7G3wdZ3y5F9MVHcHwec5MgZFbEdw",
  "key11": "62SL6CaZ1myiRjhzG5XhwQhGWzJbh4oWvuSncjrfVFh5e2sjzMJS93CeYmbd5pXjMvmWdSS74Jg6aS9VW5xVH4Hx",
  "key12": "m9q5vf7u6DfQUE3XxfmSf4PiKLyehSTGDwarVhBo98BXETwPy1m86kRz9TQDDCtJxp1ybCcX82SfDdYzFthVZDr",
  "key13": "4mJwr1PTHxjk6qAuQ8mnpCKiQUN4dontFcEN6HH6T9bgyYKoEK9fQGWaAP2cnDRZKzXz2u2CL9gTA8NrWoT659uj",
  "key14": "5zNqYk9mwh7w4B68XxHFWbgNypTRNZuTFyqRcEPLip4ipLDWHtLZogNH6deDdYXNzavvfJctmwiyPdtp2eDEcUdw",
  "key15": "2TEMtn1pDShgUZ95F9aWVmuDvaShJmC9b7qchbXjZ3QoWRspucJq2U8Y8185j57PfgMKDt72zVCWr87sMRyq3FrB",
  "key16": "HHGR6pwh2H4ceBT3VjaVF6fx7o777NfJD6QhEzswWCN6m6kmQJp4Yg1h3ewpM2ssFp1K23cUgRL7jZjSXD9rJb9",
  "key17": "4D73PP4c3PZkzQxUpTWmWK2yNF7wnjtYt2zUFU9FQDm4k1zTiS2tPPn141zToYfFWqMz17pw3K4mA8NG1DQd9Pxx",
  "key18": "4W7Snr2fvA4zgdWYZMuGqLKUdPKrpKDKnR8J9LoEhz4LgtLhxKMCwKHcSvQuFYEPmbh12KWVWUF2G9AkEmik48bH",
  "key19": "2jf1fNmcpVeNWuBFfG3bzCVBdwi5ErzoXoMaG25SVGN37osbqMX59J9RLp2uaGnknBX6dCXk38F6twPy7PGn9k9t",
  "key20": "QtWhrqU54P3aTwnVynJXxr8TUnxrU7txRYcrXroAMCHbySSLi2Sa1FSaFLtXwjwm1nhA1BRMoAD1PNTfnPxW5cQ",
  "key21": "9BWhsicfcCYuGascKE1vf6H3ejUYawT9S9QuzSGpetuG9hQyFrHG3656CdLHeoA1XZxqVRWmMEpArVdEWBuXAPw",
  "key22": "WzQjvyDhZLsuLbKGuk8V5mq6mAxBmNEUUrB6m51TRB5fekb1oNvHrXCRx2Zi7HjKBvnZ9vTvvZG6ksKGwVfHfnj",
  "key23": "5nhQsHKzcg3tDduUNtNyKtEAUmRGGX1k2obpWdoVjjam5bwnHr2s12rVszBtEM2eLnfa7c1FyjE1eHjvLnB5FVUA",
  "key24": "5d2YhQZWfxjHNzjqPmbcAK3gfoBdbeh31kqU7easK3M2dhWUnMKJefcTg3XPZwGBHC8ND32MMrSsT1AEcrqBtC9F",
  "key25": "4hvko7sKafeTQBAFf9VqVNufnmL5xw1pKEogT9Q4NrmY3Vo2pHkgN5douMzjreiy9BjoUv9BtxVzrMVnXYHHniqj",
  "key26": "5bxzGNfW7CxQEHi4aJFkEvNtCMzhJnY7Akbj1NGGwgjFVya1johMinUfEFJuwZ48NPed8wruwCJDtTmwQZ6baRU1"
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
