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
    "LtyhStSymA6AM1P128FzFvnFtrXK7gpqyRdy87WTwY88ar9LTKHGLmnAgDdnGc5mEjVGEgENapUZp1gbWXvftqz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cwPVjsGE8a5RYZhbRHuJXDozE5N1WH3453CF7afzU5nVwu1oKXZiiMa6diw1RhFKDcdqMEPhxLgvGmTmTNsjMyc",
  "key1": "5obM9pnv3jzvcT3kRRQ2nSaVJF9tVvhUwRL3L2emYQtNxztFTJedQFp5TBiF7JQXjxtYU7YeoAhrYutCfJmHr7ne",
  "key2": "3XteRgjWTvucikPrwtaxdbzvjMt8H9FaomdTb35M1h6hx1LKsKxKqtDfS1F8z7bwi9wrjEfMkqkwSmkFSfy2s5ZL",
  "key3": "5Mb7YsiwBB585ari8Z9ife8uZ5p9DbgQQ1eb3zWjZQEHKRoXEvrBGFFYjixTBM6ySEr2V9M8bHszS7NxdqAttFTQ",
  "key4": "613CyRvPX9jJVmqRkG4hsowQvSBNDdn8N4D6zNgNmZoKtn5D6CXzcbyFJ4eGXNWVckoWSEjQeTCtLjSqegKMm8mB",
  "key5": "368Xf1ragaGwsLegjsLuc1HuYSNA1BWBP7fsARaAwVemdqax3VNijGPHGtfYkF2SR9z1Ean8nvqV7gNq3SWhKQFG",
  "key6": "5adpKMuz5N4Xi69WS8dFqWYkpCiAbycCfsuGg2eRtDbx8qAypV21Pmz8yQ1AoNuFxBtncHB94EDGp4i7KQPtqrq7",
  "key7": "64yC1aqmsMpTkXs6UzYDfVjE726mmFiSjoUmnM8cAMrhBjy56yxYto3ENzb8jAqxu3UFRBFL7MqSxqomerxc792C",
  "key8": "5zP2jaScxuUx85aTFHKQ9WjRR2Q7iPNddSiWcVQ9nZiewesmyduEAzDr83QJS7pzTP1kQ7yHiZmg87kkz9xNtuUS",
  "key9": "3ygB44VFAyNxh5iB1TEpp94LTxEJoEhPcgZcW4VXCdapEiLreeM4AQts2BtXrUxejAcoT7rBFreC8U8Dc1SaB21J",
  "key10": "NULNkxCq53NtTXCcJMKkduiDkCwqGEACNqDYw5wTdgcC42C7wBKgnhZHzHexEVGTHosUpuiHUaj918MQZUJRRXW",
  "key11": "5L3MwKdFzThPt6tH5yv5PZATBBCsg7YRSuXvWLFp8PPh81ihhwUeQTeUZn3AQWi2WBuCSmBPL1qBGQ1ivgN7Wobi",
  "key12": "3yLuJKmLxLhSgcwQybnh3K4ZgidKj2HvYkN2YLrjNAfvqCctPYao8gM7qExPoNErs7Uk8j8XhiCsxShV9BiAqFri",
  "key13": "JFgTaHwEFAzUfPV5wMmMLbZXqvvzuYrfWVVRmbiKS4Y5VDqJ7oGxBF7FsNhpDUhjfNtDn878GJzrDn13aA945kw",
  "key14": "8GHSUBQaRMTb6UCHw84KiqomFf3ux5C3t72UmJwyWf5wS4spYb7Be1f5wvie9ew8QdXKk5VakvxS6f28Df64k7G",
  "key15": "23uEyGzbvyG9yYVjisrDrGpPbSNfRmCywcY1NQWgYyW8YxHVth83we88AjLpFYorFmiG3Wq8nCZeryCKqUevBFf2",
  "key16": "3vS5WAwAJkPnpS3vWV88Fxuuya59AaXtrWEqMUzv9Nf6fRjpYdz4qLmKtkVK2MCu7p9Y61HSjJRJjuVTcoBAhF2J",
  "key17": "5tfVUQKXDYGZ4S1aaRnywYBQEZTRadUDv5kMD1viKaznt9FAYJUfE913ZxhhjtfwY1Yr8VGgQQui1p4FH59uN6p4",
  "key18": "5Hti3n6j7in6RVni1qiuruAkdsYrpt8x2KshLRgt5gF69pvrvQHei8RhTc9EuXg4CBajAsW65n3XjPi4HazxPEtv",
  "key19": "2ipyWBJhDr1u4z29cZnUULijEEBv6KXSiHe7ytZpyefZRm5g4hKqpmpLHLCrTp7DBHZC2k23u7CEedvhHybX5mWV",
  "key20": "32uAjhGvnbCRe9HbX6FnzCTq7b4gAvxpS27Q6MeD9tcJ5JKbR2UBNPjA5RMAaRVgjE6hgWEQeseDCbu7yi8Xso96",
  "key21": "3JM266PAFeFS7kM4vYqoNC69spZRAUzvyighUUTJwjxL2dsKkRes9ecYYJfhJRDFFUHza9hEgtXrq6QXxVT7nyE7",
  "key22": "kU6MPEjxiADffgBrC41tEvjiFy5zrKUn5KYcDqPSXdkmLChskmUaoGUMMWbibcbL1PmR6GbjSfdSSPf5qgvULwp",
  "key23": "3fFTBscht2rAcg6wMSqgxuan7dqL7qnmeXVwbZxcFxXKYkLoRfz1ABB3U8kwJZMGnKg6nWonDgErqjKoWiw1wXQr",
  "key24": "2j4oYFAwz5EK5mYTVs2Lrp4A9uwrCd6jHBarRVqEaqkSq5p2DyvC7hmAfGUdfrsEfdTkU56CTVdAoAePu5yJUWnU",
  "key25": "2NCWNBVrAjqN4RD3Lt3XE8r7FDD5rLaLXHsAuTgVjLwhVeqPDm3kE6s2m1Y3kQQvByNoirXiYPKmDjUdqKxy1MN1",
  "key26": "4beAsm7wZUC67EK9oBCM7LH4KrmdFjtwiwgruYj759rpB9J2szMTCKRx8c3cs7uRfZdqzHBrLGSkakWeMvAcbGuL",
  "key27": "62Sua6prWtF7uPXXqGRyyzVuv1ZhNq4dLoYRzNdnbth8mKMbsdZYb2BqkV1r8tp1ZcMmD1hoJhrLkYGa96Cr7mtK",
  "key28": "4QMBr4vqr8Nd7woUQcoBkdTwSNYfz5A8snk6TeeKRtpeoG5DxMWB4KMW3Q9xgnqku2pZQEmoKoJpDF7GjJeo2NcP",
  "key29": "4wFEDDyy7tcjvaPJUVKVUEceHpQVZg21iR9CmUUm3y2QVxyEwckWnNTnmbaspqfGkE17CfrqteMDMDec8iFGGnFz",
  "key30": "4X332BueSF5VzFWjmAS9ybfzFV3xJ2kXiVMvJ3wgbXUPhx7w4yers22sdncAiiL4tgeqQN9CCs56EQQB5ZYzwn4S",
  "key31": "4j2SrNrzuAFLpZMTUEhBKA9dtPEHCMc6pf2iNgJu3Q394eE2RPSox5wNP5AQ29wi5UKBNPHxnimL5d15H4K3givv",
  "key32": "4MbSx7sYNhufnKQXnYcZdhedAZZNbpsXCcArBM8Cfubh78bnmVSEojpbaHVfwTR9M2b3JDjGJD72588R9x4nC1pV",
  "key33": "4CZhFXR6A7AUVGnJswxvVigthMfnzwPjEVUp3D1MgijdcHsvW5MSM3uEeofXNM1sGWGmW2VPa4MAitWBd8RDiSMZ",
  "key34": "39KeEfbuHWVy7ecxZ64dCwNCCg4rmamtEyrgFa1omKE6f7UBex6xtQacEpQcQnvBULVUeJX4VxCf7BCuBhgpj6MY",
  "key35": "2V3VkGWbHRoQZpMjo2xmEo4SxL7qYogLdM7Sgg8JfWpkmV4TKQ9Dc1pVQnHFYHGu9tjbtq558eYiT1TVVxavb4VZ",
  "key36": "5bTBSgSmmFxWs6QfHifoTKFhgTQ4JaGUgNmCpY4prHqzVfd531goXk9ZUzoYK12jqsscxW1yXevp9FrQAAU9NjyJ",
  "key37": "61gfssQkXpHt7qihits3StBXV6npJGwQm5vKEpnkt5knppQpMEHPDzJkhfzeKEoHy4LuAcijvkGLU6CEYdWfbBAB"
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
