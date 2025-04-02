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
    "33DriFz5yUkZQVnD74rrvq7BAfzUFrNRrPKA81me3D2X97dLe35Y8CDu1bgTJkrW2htLzntsSYHU5Mpo3fs3aJ65"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CoAMBWmZbjzMY5z7q6o6GLyUowBUrmXWFdTznndfsABCYsfWDAkMN1G3PPBjNjsjHi33wzwN4z9pt1DK1B8FN43",
  "key1": "pSS8QAZgPAHZBuSuHHygf9z7CeAee518pYQiB2macFKUT1txSfTxDuVmxUWPBeq6QGNntADPnW5u6qbC5XCnf2L",
  "key2": "5mFDihJP6vFa7UykMViiwatXSdhTpam1Kc1tbQvoNgBfpvMwzHgGNq65WNgX6UZfFPaxFDfeTZebXuCaoa7J1Ykj",
  "key3": "5qJiqKGe2qSmFpyyM2xE6u8vnop67CqFQjq5wH9wMkUkGKuz3VytbxppUTfuWXNnRaV8hhHSEkemThGvkSsPFR6v",
  "key4": "2sfa7VUcUf59juVWyrSuNjDRyovqZzwa6LMwC6qNcarUSzgmgb3FPA8G1r5RU6iHhm78AnuyL6VpWBATvrFrbhqi",
  "key5": "64YRNyepxuieD8JFx5FVKMqnaKNvgSjM5mXJgJ1nxrnoGJPpem7TTzKQCCM8S4e2GJpbnmSWcFpHZ6rXtLqDvQYE",
  "key6": "4amDGrTk67q1on7VcKbcfkJ69Tg2otmKQGxeSMKx5QstjVaCGojvVDKEhBMrd4s8kray3P5J83zoDwtCkjirSEFs",
  "key7": "2uqRYgQKcxWXxBZVqHVuGdLf72FimHhR3hEZjBRWyYvDSMn4RoRyeoCgX9TwG93EarnDbUkGCSq77uzaK9Jz2Mqi",
  "key8": "4MZNz2FCS5YjVZHpNhgYf5VUmyQ2Xj4aJMAxweRy4Vi2gXiFnWjkDyhg4APwdER6NuwqKmrQkbM4sJFGHEfaUqpb",
  "key9": "2bDnBVHtkHvkRh19PJiEtUiEZwqHyYZ2X6esmxBZS9CVy4EHZH5KUJ8tq9S8JBoTmqxvnJa2aU8UaKekwGB72kF6",
  "key10": "56oUy9ziLqAvTcSnwGJxEdowijGxbQa9c2X3XNfa3rzZjvk4Nu7xhwrZVtKYmZWY2RyPvwhTkSgmxd3a7EiS6qCs",
  "key11": "4sgnWkZQdtAkznUSiUsPtqR9TRHAeJMYyhzuqEpNRMR7oN3Kmn1MF8KsQhogcmVUzRAfh9rQS5bqBBrgGeY7a2AU",
  "key12": "4tvZeiEL61n9dAfsnA9Xv78RAKH33WibQ53aYw8fWAXsAnHS5awvoUvhqCrSMtAr9xuPjfQzCDmPJUtENa5jBEA2",
  "key13": "3djA5SvkcRhXfULo4HWngPBL9HdkTt4kQaJJUn745XoLm2ArYFDysrtfRjcrTCAWBKtU8cR1fmsqkQZ9ozLMnycN",
  "key14": "5igPD7BCY5du1UCYjZLYqAyjvuhefSg6GgDWJaJF74vgEZrRWmKsT9RMgGK5HDEETCxE9DYi1Sa2bRNWuCmyqzm5",
  "key15": "35FkdLviHFpMzDoimgowZwRi7dMzZqKjFHegyZCSRFAwY4j9KD6Ca6i3TYEJ5NgiXt8eVJGYhtuZR4qcnCGpksk4",
  "key16": "58DCg8NcmwYfJWNCCcmbipTL1SrEZNpfy9R6X8TbxTyxTYwgji39yvPN5erEzdeBgQBXPYtCjkTEipXR3NqX52gP",
  "key17": "3TDMpiWSi4RHj58UvCZEgX7mEDHeHSgPFp9oe3zPsof97GJjTXdMRNLWPgxzo9h63XZcviRA5nGeS8BcmZoDTBNX",
  "key18": "STSRwHDUyJFQZyeJdQAHkMrjZM6C826Xb18xWXLjmd71DxpdzHyoLRL9PCYcVXRxkymfKaT8uw6Uuhi7ZrFrmrs",
  "key19": "3bE2eSnfgpgUnCN9YSF6MHSwTog8CdoPEyaJM9bWXwzPKTJ7oUopEHVnTEQYX2dKvSNHjQgARwC5sjdWGyiRKwnp",
  "key20": "3HMoqqqEkuzjPbvcEFonc7ywDYwMCwKjwJVeW37cU5zwxBWv4dXNyFq5bUvnenP9EmwnCPtAJt5YcEBRmJacqEPm",
  "key21": "25R8nYtZqhBphsy8JaY5JKpcTwkvZDjHX7A1HeBJkdcdTtQirjxk7Rpjtj4NM7LjD5yjExBsDZ5TT8hRN2GPbdEH",
  "key22": "5YjmmQHEYbM51Ae1PUuTR4VYisA1U8rdwDVgV37MR6e5VEHmeZ1DcZEWmgcsMHGcjy4ZZL4yF8odvH2WosBGuHpq",
  "key23": "2wKDUEhAwMnmGQZeQtXFoCbjwLR7Ni5onLskpnMKcRkvGzimufLP7TJ3Zy4UfTx5k4uAz9Q5PQhyvhfBe8wqC35S",
  "key24": "4aAmQGQQVzQiLRTrYEwPkvQTXSudwBaoTH4CCMaBd4uZVtx9mD5TPbAgURTWyKiJzERrR9PG7DJUwen423vwzfF9",
  "key25": "dJkQ4MgUmPT1ESfCGTUMuhRjYASnSxZc7hTz6pCEXw5U7sXiJyS1vSswg3bdNf7hhavbFyscJnDVJQ9vKNBfLZ7",
  "key26": "5LwrNpCC2ygV61R6KeuEik33JBg659BJZwDPm1KxpYAXk3szbxWssyVKrttrm6bUbGzoNA6EFLvZJjkCFMsFXT1H",
  "key27": "3BC3J4GQ6w9n8Ws3tHHtwBzY1RbTSqX9uyHamGx5uVEQY9UuaTpD2Vuq7xoxZxh1vsAnaUoRYzGvcS4NqgYzczHS",
  "key28": "pphZWXZBBtWH7gd5dohMQV4YSXbCDkdMaMGEY8Ut4xP3P3bt2zbXKkXQP6hnCz5kpvQa8CvhjFVfnKVXx5ByceM",
  "key29": "3vnw9Anvd5y6BtYjYMTXXWermtUku5LaTxX8GokzR4tjd7kBVo11ZgZnmz7N88zotGqA42i6ttUMRofyUtpjYYWJ"
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
