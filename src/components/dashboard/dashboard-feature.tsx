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
    "639Wy6w3VoAfu8EZ2sjH6Kpr9gpMpQ9eUZRYQ7AQ4RxgocbWR9vJNn1pUJwUgamRfLq1MsCU26rR8vFGCzhJrwhd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1kxXZfknN1h8NsW4Ty14YCWqvzpH8Kf7FdzJFEvduWCWBqwRmWDx4RFNCHBzPSctyBV3Agq8Mb3FSZVKtqvtDNg",
  "key1": "2Kmwykt5RSqs1HmS3Sxd2a9u23LzWsCTzM5NNvYgxTyC92B7xXLzCsTaJJUaSsNzTm2cAwN6tedbUVoMmq2ECan4",
  "key2": "3ERmv9Pg81veK4R27Z16Vbxvp8SWVFoi9hoCcCUoiABDmq5VAv9XCZYqizGLpYP1JAHtLtHjCtFbbXSqUwuAi4Mw",
  "key3": "3vS4KkrqkygH25Wrc8cg4NU7UDswD24nYR85XpAE71vBXbhhqWF5mFY4nSYZ4jD8DC5EX1HDPKhrewtc7inb2ZNv",
  "key4": "2rjUMBem6eoa749bEABuxy7ALw3wieJkaizoAFWE3KNFecS13EVcurBiAzhJoAbEd8orQkb7wscXzdfKzyQoYpJ",
  "key5": "3yoqMXwUV8A9BEVKcPavWXZNHmoEPY6JCpMo9zzmFsFeo6UrUugSdmffA1oNbwJ8JNyLZFootPJSm6af9jUnm7CJ",
  "key6": "4NVkyY1CGpQD24LdtFsiMUxqC3a8EFsAWBFCngU431zNNDYRCmy3m7r1wTyK7YGhYtmwjuxhHwB4QPFM1Voz4pNu",
  "key7": "3bLjgLpT5jGLKbiYhudxSRrAKh6afKree4Ar4ajg8KjDiKQjKQtEVkEEW97TEw9cHbiy4WJD3yYxPJNw2KHNbrCX",
  "key8": "39sRk388Z9Xqf5rnup5ryiGd96yYYKmQm42LYkavzbWhgzb1uA6cQ1awp78EyDzYjPrPmSX5idUJcnynS4PkCyQ7",
  "key9": "3948DUyyH1gQzKKfCC4vkVTwYHnYDRRgnezuDCUhx7BfKbrKJm1foN8QR68vYGhm2GkHHEyzTvmbwQBPk3ynPGVZ",
  "key10": "4UYoHpCrLja2SPkLgjkXrHLEz2gg5EVL89FZEjgGmGsHGQiSPK649M4xETy3N7wubDpyq6RarMPAT4fktaGSGTP9",
  "key11": "h8tm2kTX5ACnm9gzAyGkLy2Sqx5cuXTcCBWYiFxb6Ti7yb6VdTUjZqyQPujAYv212aNh1tH9xaY1hJJRqwKc5rr",
  "key12": "5umLD2KiVHgWiNz18wsZUEWHxLFdZH3dPxA83Wq8CjekjtCxfrAaJJMK3ARvxztqJncFYQuaV91yMChFEFb5KyJf",
  "key13": "5VgNwa4UwJ49dQ64h4UVUMBhq2ywtPxonuGHZCGMxAeubzexAormwh6NZGkHdZYK6Be6xxuj9eCz9qPsatUC2Rzz",
  "key14": "5DTkJkhKQFE5UGB7zg5u1DhQN9RzWDCo73zM7SDfMqmc21xwJrbz7eAbPoyqgBE5SdHjAyaUaQ5WhuyRHF2dZGdV",
  "key15": "5F5HNjJ1xTRtPp4eqzmXfwrGdZhPvjkz6wTVSrbHb74AN6Wvy5mgxDKwkAXrJeB9eQyFs6sepzVqndUiSXxsNh6D",
  "key16": "4ep8mKPjzx2i8NVR329YiR6FHZ1yfKi4izVJamuyPQj4qJmXToeuvde79hmifFFKV7KcZ23uEbPYig4sBkNkG32c",
  "key17": "5FthC22Nm49hU1WsU6sGGu6p6CCk4yfAEM8tCWzqkQVZMsjgcECTa8NaxKy4ZnM62g2BFxiTPntuY4eBFBKPrrT5",
  "key18": "4DEjx1NiX4ratDxzQmoY9Hh2JsDw3L4MGH57VfHD5XAf8wBpkfdnujNfzN4PRfpjbMGPor7tNbaikfxACtT4fn3T",
  "key19": "3PffPUvWo45bN8Qdq3UGdWuKa7ZSm29Cgu4LskUtVz9vBPBNBLSgmmFw8Y8oN1tYjHtNrrjJ4gcQkPohUfdTK5aA",
  "key20": "4gH3kDFceYaKjo68MR1pd5nxkkGruftmPmYEKXyvyWQQGFk7aMcU64VX83pe7hS6CQ5raPxGCsCcoi3G4YeYehy3",
  "key21": "49KH3KRFEN7hKFpLVfy3UsiDPVkge8sWvdgpmDBsEvzAJDucQe2hE6M5pmvCUR5nsjXjFFKRF1ViGa9RfzyhDzcy",
  "key22": "Ek4Q4cfu6YLEYvPeHQoTRP46xcuDpSiCySUooq4HSvG8CeYdsaniZFjnhoAbsN8f5RSVptY4SY6x52a6RsLaGqZ",
  "key23": "4uBe2pEpeMmk9aJ7JqKbrTxQQgZykgFZXcJMUT9dAHyktYwSw4NCtikbJf6BXwPMtcc7Rb3EShiMWYUmbH6a51Lc",
  "key24": "4AYfCJ5QA9A5HFSVw5QirHxabhKdaHEzkPk9kWokWbdtyPSbnbkdwhwZG1KWR5TgutBP7uhyfT73CdgiHeVxmsK4",
  "key25": "2Rd8rfqLLFctP89KqMFRXdcouza5sxXx9y32aEfFMmoJ4nBmSHsogzAteNgbtBrkg6U5wXUuzx2CnosYaV4YmZ3z",
  "key26": "65BVZ52LKSVaqKuGgKCsFSLuZ1oxSSu66zMjftHrUbeSDLNRPauzNqUrDridZ6RRYFqgE84F2U1rppkysaQVaafM",
  "key27": "3hkSHk2n97pmvJhdNHowToL6zXodUhAgJvMRcRasmjqYN5BH5bg4BMFK1nYm8HEwxF2zQk2CNe7WAUyJtdZwJkbq",
  "key28": "2Bh4RxBPw5bseCu9EswcYFYD6LPgwR4W66oVkmh2ZpKue8LbzdhstAzd8HAkvA8fh7YR4rJ9JgjVsGqqjBzHc7jR",
  "key29": "5Bor8xtRH9jnXkMMNUDiymgKNjuNPBmqy7Ruvmm6hfiwQBW9HXunJzvpEyo1bVWhde6KzB2qWdkCxr6FLAJpBwTN",
  "key30": "4BDYSYcNwBTHz3ExirGtKSyrX5xrZgQ7sHdMzQKwRPHJAYBrhE5u5q7ANcbGvwM4A28GsFUxkM7M3xDgqQo9zMT1",
  "key31": "4owBxf8KBUTXY6bHHUYU8TeweBBf1ESJk5koT2NoysUfyEREJCB8spmSGkM2Yiq2xxMX1eyH6enYhkSqBhg65Qnw",
  "key32": "2sKjPCouqHmhHQmrKrkVeGVZwcjgTGsi6D3AB614au1DtCDCmhCq3u3pyZWHS6sLpmzLBFXE5AiyrvksgVfMYuVq",
  "key33": "3tKB1RWEqwsgxGiN7xHoThQ44KsvSqNZVdMG3zPMBo6eMXbPw8o1P4HvsTs5oewpFurRd2Ey1JoJYnSpyQqzXX6x",
  "key34": "XKsyrmehVtT4ZRivEUfDLHsgDwrfrQ8i9tXDt6rADGbdvS4SctJhJ4TxV8UMeJmJcdqusmUfGVHmPZtvs8UNSQS",
  "key35": "2No3SU8wVmemZCiRXTSdCh2TykAWWap2hM9Yn9oSnmjKhSzybsRs3Ms6u5FMTmUcssotD35A9xeLUy8wNHxLK6wz",
  "key36": "2N28Bmzmz6hQrHZ6XJYKXBk3gQVMJA7fE53vsn2iuhzUFe1pNu2RRu1vg37K5NJttMbXNzXND7HoqZvfLMWgr8tu",
  "key37": "SoguymCFQNdJpzFFNF4JMmL8UoYBQ4s2uH7mHfzGvk7s7AZ49juJPnoA8qo1jWuWCrg2XxuCq7Ac9coZYLJ9CFV",
  "key38": "4hN69SZSurNNk8baB3b3H4YHFkyLhDd9F1Ht4pfbUQeDxWqUPTkcuoFmcNSCimydhPnHboTrmR4kQt9SoNzz6RW5",
  "key39": "4YAvCGWHGGQt8yMHeHHuyqLc9578WEdMyedfEyorvsbg7xeXj8YT2zRLrueNAoP5P99zGxC1N3GKUAgo7qRGro3E",
  "key40": "sfCy5ZNynH4b8J2sDiMgHGM3QP1jmbrrAe2DXh1RDZEPE35Bdag4E5ZJm1hPvfpiHQky2aC4fCQubtUL1B3n3j5"
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
