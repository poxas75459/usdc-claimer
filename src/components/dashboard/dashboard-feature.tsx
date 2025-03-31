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
    "3haEVb5znjBpiP3MzqL9UnQ3EQBPxtUXJZvFdWTNAWrWPWg8FAHz6WNKNNwdYZSGocY3xQev9ZJTanzEGuudk2Wq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BTPSSCm6vyf81W44scM8CrV9pk7GDNiiG9WzcWppZqzZJ3P5DTxtyXqLaccFHppaQnfBvFCn1ojfcoHxb8x1bLt",
  "key1": "bydbJroPrYV6XBvfaaD4v69KVSJXjiTcedWcHyHYgtKhD9QcGnk9xBBpBL2ShWjNtj6eg33M11kpC4fEQWiPuMX",
  "key2": "3mi7rPeMfw2UHEYww4GKfUiZU7aUu1UbxosvZZdvPz2dHoBL3ZGJWh5hPzZn87GRg9cBFDix7Pn3DDdeRTgHh2w3",
  "key3": "hAiJL7cFkfr4r5k9JeRa7QyomQFLVWMcBwS6WfjTFdKQDsT4x7NMne7gkX5nQoxSiHqyzdsxRfUSpRZg2qhnZKB",
  "key4": "2k2UmAgrkiJD2F7zZ599WbnVj7WfBGqVsjVxEJ77JKNYubSfxVWyEaZ54Tu1uevhxj5LEzjUXh36XQwNNCjJZHTU",
  "key5": "2ymm1uHB7JQwfckcBu6tDockKe2H3ciexNkYHziBTFb55QayT9bECZCSuaHqFHhv5ju5ohsEPWKmDS12yXwDJjZh",
  "key6": "4ihgF4aJv6GoDdLozqBEpSJqMcqND3Shc5gL3ezG2WHS1wfaQCvA7CbRQQgrH1HWyC7neKzUJyHSU9pr24ci6NNk",
  "key7": "5eKMqCRXqSTM67fELALTEJSrVg4sgZZGZywNfQPFUyjb3ohtZ7bBGFFjVvpJFWip5yC3MSVaXBzg6aYTKNPHAMJb",
  "key8": "63P4W9cHvtcTgsbQqv7vggZRgrPGxwRXpMV5ftGjHYkuCFT2Af7Qg54wJ2EztLxhWQoZcdRbsar3KFcwwt2aMGJa",
  "key9": "5dSu9D6xJPwX6Rqhj8zi5vJo6Ys7PJRWcHRnZ5Cpno7ZBd7LpKXe7zqCSE4CTQnKGhKAuKprAX97era4YSfFhyPC",
  "key10": "4TG8YHDtvb7ztc5Mpa7PserFhKYSH2UmPoeymxraStmx4nZ2csvAvgc9XmqfPWaGtd7W3yY9JwWobt7SZP1tvhBz",
  "key11": "287f59tS3ERoNfEqNvaq6nqbf6QA426UsVHWgxAKoUG5x64u5QX656AL67VnDQqbEWc9Y8a617ef4SfLJxgRkd8z",
  "key12": "5EAqq3LewoZPTQpJ3ZHZT2jjHXWBsj5tLod3CJkBNByY2hUB67g8NpHVtUF8HzBtL3cAdUorENUgjF9zTBYJ8QF3",
  "key13": "424rWMmDanQ3HrJuhp3WD47ZgyV6MpTP6FMsKNafjbUsjP7rNFVEangf7KCXyJv8Cc85rKkh3KQR2xdfzeiNno1U",
  "key14": "3V6k2nkScZ27ZW1BPfuWdCRAzxBTMj1N6qACh3rYEff9FWYKzReTkxmF44MaM3SUZar8fT6eE5JaKaWmPSPzptwV",
  "key15": "2CyW3JhnqtKaZwovhyNtN64bd4RVmWJ43eSe5NoNSrd7PPWTwbT26S9eVehHtVdd6iQiT3EihVvd6Vzr5jxd7MF1",
  "key16": "5Ro74iRtXxzDuqN9hgPuJJky2zx2745aVxPGh6gsVN1Cj18b4cyz9cMQinUV7qepk4Uqo8NUdAtsBM6F8oc38MBH",
  "key17": "3tah5AVesFN2XPsQSNbgiJsyUpKGg2L9NWjyahPkywEHMSKxGeFz8RKjGwmNfB1u8sD8VqB14tRHZUeFZcSJkkkE",
  "key18": "bqH8BDTYVyGS2qiLA65SM62DPEnzKzVL8chDs7CSvuFpcBRJiGRa2vxMEVDjEK1eNYW2mQ6dCp7zsVgmqYGGb4K",
  "key19": "5Seap8LtmhMrFLUgLNkWMzw3TgYd7dHX61vtapZcbQ1Qn4muDtJ3BCNtaGjw2xfvrRjsR1HD3aKgyH1ceGvuk145",
  "key20": "mGsvkM7QWZUCN7kVRXc8emFGrHYyoysrN6F2uFEue1RTsqHRNJfWEkwUXKNJrYVyXasbqssF6B9a81H2iXMtKQ8",
  "key21": "xLdB2SUC3G1gsBZf8t3NzVARENEAYuk43g6axZWvtgGPyjiNFJKzSpMi3v3KjPqPmyM4K723c8LioTEM6eQ7y2W",
  "key22": "3wHzRtoiVpB7Nk4VykeeEzp44cGJP8eUpCsnppV1haa4Y7V6EtHMh3rm9zW4gpte3g9QD7ZoGnC8ErfysfhgujDv",
  "key23": "4aCVTEjdo1LbukCdW7c87ZAYwTP8XRRVspghkgKDVpUgQ168vZwde78FkB7LE67TWNBNWREoVHjuqtWrFf1coFne",
  "key24": "5uKssXqYpVmiUUr7Rp5Rh7WVLbKfNCKAq1x4e5foPhEboD1BzbNFSuRcemy6VfPVhhDWwjqYRgPvhXe89t1wfTWU"
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
