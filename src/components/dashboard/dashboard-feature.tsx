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
    "kqURMrCHSCKDHzJjZWqCQa7p91GYQrpiBteKBNVtUsBdybt4PV2pQSDvcSJ9WFKZKy4w3eXasaS9W75r1r2VfoY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XhtF72SXMdQHkZHcB8Ti9e9Hpps3brkEu6Bckd5jcZVxxGYk3FJmsjPZgWea56M4JMg5YiDtdALQ21XNPSVfv2e",
  "key1": "2odbCr9x4XP7bTPpq9vEhMtnjmJ5BBJ1KX3sL7RTbNDfbdUusUNt4v1NiLves7VFLkSutksW4M4r12kxpRUyGsYH",
  "key2": "3HmYKqfSE35jpCZ2YUfWfRoiQQA1m8u8ZaK1cW1yXK5cR1SYeD5reR9UdPdjtQrRkqcfXEHHQAGUhf3qxSCdkG2p",
  "key3": "5jRNbhMPWqDx5Y1oQKg2LbQx2ZuuiVhKFcQPiJu84LUF4g9B8mPpg8XKL6yQQZBGFuchApcArcECAMRqZiAEt27D",
  "key4": "2oWGQpZH3dDVbrvhhtn3fmxCV7PtEQYJVKapy4FCBYY7kwDi4gN49Xz3VMucwBjvJDBfgfWtMAvewZNqc2DSmoAj",
  "key5": "jbeaLPR9jjawwtp5qMsiw32HQBoJCu1uQPSqkn5xW9ZuKkLbxSRHjDtoskKu2xzQmBpumEMU8wCUrMLwhdDADhT",
  "key6": "4qcn5vbCJfUNNjBAU9aAAhzazhwzdq7Ema4NLf6baAzvv7567Bv8hrrx8qWhLGiErmEn8ir8pBYC5DHTMvaSc8Qo",
  "key7": "wLzqPuDciRgMc4iBz2zL1AbWjPXcFETKMpHsXz4ziFHQYs329SwFyMPzZ3eYKMiZYsPqVtjDhAYs1kVDN8fyUrF",
  "key8": "4foDLPJ62NiU28j4wTUdWN5phpvGbm4jiZ5RsqdXDu4rgZE2R3HUa5FHfWo2yZe1gCRmdckE4ZetJimZzb5oqnew",
  "key9": "4mfeKk8uBHXHixegSCds6YzqGdHXhpykpasjyx8NvhNnMrLMC7MLbogUTnoFLq43JkDdmd6Rvf9v6t3zAfYcQZYT",
  "key10": "5ebyQFdMFJM7Pi6mjeqAXsbZWTVrbjNAVheBiRLf4RDqeW4bZWMDbF7fv7sUYqV3bYonoaYPuLLgjBnrPnQBMCu2",
  "key11": "2tXvLeh2Ag5faLeNNEFUXJX8nYASiCHMZHuGyLQYnT9Yg4rPsjM9FeNFqEX5bQK65JHn4Ujgx5rsV49grLFsmGRy",
  "key12": "4Bz67Fa3g2QfMu2LBKNjmYk3q5G9QeJS79hyCE26ecqXqya6T9X5LHCCJk9h9mTXpWibSzSXuhHwf5Y22s5Qpyyy",
  "key13": "34s3dz4JntrBXRg4TsPEMECdxh6bsUvEzCCjYLi5hz5mKPT3yvbhKjCwNsm3RoYBHs8gt3qcqVASBCPRca1FK6rZ",
  "key14": "s6uqux4McNcT4AjE9xuqhE8Epux2zMj6ceoZu2i218JBpT5nUwvHjji7dhWsRpmS7oKuKGrXaJ5bfeMhhTSSAJo",
  "key15": "5aVnfdctbdMGbBR27MjP9WFsU3RnBxQAAmTtUyszkLCQLjerKPv5dbD7eupEs76YqD33pmRgiBNyauAaKMnn3qB",
  "key16": "3e88T83if16pJwvLuBm5xX9LEKVkVpPTrKV81ASjqm1oYLEXEanVNUAHMAnRBZzvBvyG44Ng6fmmsAyTwVzzS4em",
  "key17": "4dcwun3M5myn9UtxXfauRcsaoPTFjLKMJwLfjU8C7Hupp6SfXyaV9JMv5PaRWx2NNoB5wuuMKj9hruUeJg7RQcj",
  "key18": "64VcknS6DNfBQ55NBTGEuQuLi27Ngr56CWdXJVVqNVpZgAj1LLpXU1bBJz4mfu3WYD1eiR7xZ79rmFVRZVMCaTJn",
  "key19": "5wZvDQycQHb1a25rzcZjLty3SmnzGyehAxc2kSLkpGb6Aim63dmrLFAcQTq4NEKQvZpyHcGhqc5YMiAXHFxVgJ2U",
  "key20": "5daKbsNX5jBcYCKEKoo8wbCnT6n6AqGgXAUa8PY9Z24gTfkysS3YfZA9xFovXtdHJYkx5tCWjAvxqN5JLXBMpWux",
  "key21": "2xdguGy5ShmXvrX2gaowNQkc6QxNvrWAZC89C4F5E9hupvdiTZrjjZJvYiM2Qc51Ye7eiQrSX9rZwienE4ohewby",
  "key22": "5u7z2argfUeZEWirgvBEi4VoGm6aYcFNcj4dPBkRED13KNELXTqrLh9Qo5YpaWy1cBoq3tCMdAyqSXk7m6yNQcMf",
  "key23": "5PWEyoJSyWEyiDJSxPmbcKCfKBHK7R6ojp6N4a2MuND6oEvd5jFNX2RFiK2FAevS8HRRWFAfG2b1QcVabj4Wa8C3",
  "key24": "5SEzoqa44QXTAWyqErrP4DHy6PMkXvQH7HFzJi2dtyyv99kiRmvVjiiMokmrcQ3hF7q1gZGzCVKkHAuvztZ5iK7",
  "key25": "5uyn3Uo9gkP4RrSV9J2AKhWZjVowZiqQU9pzmQDtDusB2j992FGthWeF7gMc9nTKzBYYm4yUKxKaAmgLdJGWVisf",
  "key26": "5JebbkRC7J9STpJSDvqjSk3ecXJDu4XiANRQgdgzZpv6vWTzayAb6ansvkyTNiJ5bxQYyzvpceyjtGXmRgecQ6NS",
  "key27": "4QXJpJTxx4g3eUkPfJH5xCqWwsDE2zQcsMr7nXnovqwz62oi9MpZAUUqnzmYs1WJ1NBAYEaH1gHYqH3nJPPw2ZQU",
  "key28": "5P7LzQqeyq3agjrUJGCsE9qBBvRkp3hoijhT5WwQpqU5i1XTS4f8YqAqoUzL9rKM66xAozrwyu6mXdkBmhNAuhLk",
  "key29": "3szLBAnthd4JEpYJ3mj68Noes15P1E51WDfuna42zuZudfT5rbxdCgdXEkxhxcbFRsfss1PzXQX5FYXAP7mXRjNQ",
  "key30": "2SXEmSW9y3gA6jz1UU7iPCkqXxKf4h1K6hErrnYY7Yb7KJnb1SFvUowPykZdM2A21sBRfU1uQkgaup5uF8A9sXe8",
  "key31": "E1Q2FRVVuudER6zCWZ4dNTe8QdQntB762M8PyKU5HANQFMtEWFV3prNG9vsVFzQTA4WbydkB73nn1BFzGWJn3oF",
  "key32": "3ABqVzUAWeJCYpij5NzjSTLgRmHHzSfuJPsWAEMMefqJhDqm789pzHzh7yfmBHdbpqtqjqhsNzbrbUvm8tURnuPM",
  "key33": "3y53PwQ4N4MWFhs6mgMvLibfsK9wVeenVoUWg6Ph5izfQJWefHTYUvVKinGazoWNWHxCXsm5RtJMRJGqEiPg2oQ8",
  "key34": "2vYsaruLK5oPJv6DWCQphTvgkaBhha62F7qHYD7An87ZPGhQxXPRdoEuxQyKB1XT33qp4Un78LDeNbbJfCEED9kg",
  "key35": "4jjXsZ1Yg2sAdi5av7MZAHhynpcEsKGCLdWJzJ8TGjuLPQ1YzrgFeHT7zch4wRSh4U8ACp9uqqY9SZKCKuqBKScZ",
  "key36": "5VEJCFW1u8khXqrpHoMoC3zfWVuq1AqAmcZLctu4iy47zWEEdkmpqRkjXyYFyWZYZ2BfxDzLMckjLsHW8atLYKVA",
  "key37": "Tb1X3nuMjpmteYt7mxSoha4sTuRdQoXgo75wmw43jbapdhwfEjZvDzz4hJk9Mpsyh7YbbivYgCdnd2JLnNgyXJR",
  "key38": "5YM9TkVZxbXYkoeSAkrthzVVSjhGpqpKuE8o68tYfUZ9gjUMDjPYzFjXJnzc2y7QoMdwUZmEejYAo89J4k28pTJo",
  "key39": "4vHGS5Zd8DQGsrVrmEwwpwm1by4BSnpSu4RLcfQoFMnMuiJPmEnQiB3oSshq7wymLErz9LmeHyzKnpD539oeJbwT",
  "key40": "4LiovSWXFJyBi9rAtHSZcXuhS1ZePQkqmyrxnuxLu6KAdj7PSuMxKULeaegVAgjJYn2sKMouLBT1qt7LXisapNpx",
  "key41": "Y1U743NRKzt1xDApQBKAjYLrA81VjLuN7WHo7E7UpNdyDmpML4qYRX77phbSJgKVGE69wM9otvwg8BCzapikTFC",
  "key42": "2v971QtLSiFGKsp7KadAogLpP34HrzVBXgA1xWw1YmQNRMp1o1qMEP9EpsVh79kV3PvBTaYmyKEYSQGcVNu9DuLt",
  "key43": "2dWTgyvrq89jhTsXzw4RsUwrnhzJYdJvcHfj1fRJHph2cm8tjFN9eGQjk8JzapWpp6r7reti5Bv6yBgpEJSNy8WT",
  "key44": "4n89y3X1mtAyMWHiM8sSZKRDYBx5zjyY76SYuymyUHz6ahL2ivpuD9J1byW95Bn5xmG5RhjGxs5AhdqPZrPUpzrN",
  "key45": "4j911KKFtc8W8L6MwQGtFPwG2tREdTyENh6zSgDcmDcv4bFapzipEUVhsDSm2b9pfWAzsTjM7aRvvwRGdzFAm4Re"
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
