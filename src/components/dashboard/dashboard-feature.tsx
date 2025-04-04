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
    "54uHAaSSWWbGoma1LALXhxQH4ssmdW5Mbdg329KF9agtaEU3jdEckgk7ogs16tPKtUtD87NNRhLfeZmsGe2f47xH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FWkhJxvV23oMvKqkpYZdmdxyrqFgFyAsGZrGYQ2z5zMKEsMRFRiEsxdvqZiRu3MQfpbNrLX4gWHSTx38fqQnhiX",
  "key1": "FR83pjsUgg3YQ9HZnJZNqYnUZQHRh8QZurKwCQAEYbP6NcSxvWUC5RiREfSvmadK2gUZ3JXjN1WSD89zGHiV6gn",
  "key2": "4CteiQAcf3f8y9uQ48kS3wWfKT47yb9rPuVvCUzME7q1Y1FMxr5iR2zKhnVNpGUHp4tTx9zNUbDvVB5k9MXzYEhm",
  "key3": "4TzNMG16raBXvPDyGcVGYUPdyWQ4c3ae9vijrjPUup3izUmWHQskM96LPa15xAkvw5maFPzir5HWRWvr1WefHmp6",
  "key4": "4q7pFxAH8PkVtTuic3zyp54tqAB3C8PgZ4WWqfaf4WtsxLdT7STJ4B7qnrWrWR4vYg8kKeg2azFT7d2UZU5on7XN",
  "key5": "2xUpqaZUJZoZHa7YjiGmxajzhRNp3e9wcSaLKNRjRcdwWhBwc5xaR2y85kLhRLyCRwHRSFtQjBYsJgZwEEhL4sgJ",
  "key6": "5R85ZpydUUPKfvh7zQ1Y8pwzsGicRocHUoDW2bTEPMYrKtCeqKV8BPUek3m8ETmXWZTi6XM1RbhUCq7X9nYDm423",
  "key7": "63mKsG7asKvCcqseo6TacwY4tr2DfQdNRsJWNGPxBneHErqukvVT1xKEcavmYJik1CEkVr33JU9yR9kAG1aYc4tT",
  "key8": "66x6TSW9vE4ECcZ9XM2pvB2HvBKVRh8JzaSQoSdmVJ7RrBmwTQUMDKknyGBR8tYWs4tFvcsBrzxvHMaos6tmrN8",
  "key9": "4qoZYEVYKNdLkYfKnUdvjRtu6gpLzNFcG96ibX7xa2ZwLmcCtdoyw24VhoPoReGHqZnux4nxdRZxaafTSGWeD4n6",
  "key10": "2m42gZLDKbZRV2xy293fLQkum97ZpPnQEkPsrQSGyac1RJ555t3oAcBEGa7Ybd8cBNZJppavNVaocMmazQkn9MUL",
  "key11": "uArffWCQbVMX5qViG5wXJxWRt3Ryd9zDUkWqZgJmaFGiiXvr5r17VmPeUZ3n6i5HQ31fhbFwkm7UoSPZHgQdKmS",
  "key12": "5b4eAgdn2CoyQcf4vrzXqaoLyi4w5f4nEJLxDMq4fgX8FKD9umhGUq2SN1CiP6dGQsprbb1PqKGYp4jEYywo727H",
  "key13": "5yVi8FGrhy8dx8tEgxHm2ueFZEp19A1Qvauw3jCMwk917HmsyGqn4KPoJpa6pbVitTh3RJ3HfGmdu3EcCjZgQTEx",
  "key14": "4nr77VtcErM1kxbHREH72SUX5AYydYZjGSg6ymL63WWWno4BAMSJddsJWrzgLKfW94gM6wiZw5FPnKR1ai32YsbL",
  "key15": "3jR1pTa2g2Q8ChaHymTmq4Gyi7N5QTRzJPaHtamjmZFLsc9NUcQ6ad5LM7fhd1nAG1cWu5HmmXjjTQ8XPCxNt15n",
  "key16": "2t7GQUh3kBd5zK5n5svZe23nqVtsSmAm7yzVDJxuAnwtQDUazt4EkvcTbng7VEy9NGpKm9TfERNvSqXXaLFoG82j",
  "key17": "5zysztJPzm9kzW1KCiDhi4Gux7X3LTGFQuFjEoybZDfXJ9xir46T1oFwCZaJJcUhAeviVxBZUmpgFefc9r11V6eo",
  "key18": "3gbMDmUFKNWYWWHtBcZiduWefekWVResHAUw5HJ4uh9U8TELKC5cg1oyrhoTLVgLad694bdGjUo8L5TMqMdTMU65",
  "key19": "5NrNzZLVzSqfi7axAv5jyeAwzyWXbomkT7ox84eBwqC9zEpNsrL6rMLaSVf3oHDdz9ZkATVWpVTZk5kgGEtM4MZV",
  "key20": "4FAU54CKrFazMENqYxG4Bj8m4d5RVMJ5M7YkRTGpsg7YpkfZCmgSGuK7Nyi381QfTSYzgf4Gnd38gMreC8ZdET9x",
  "key21": "2oL5oZEEcdQCKtoQnQ9ngP36JrgEjp4qLWtMhoGi58iaXCF46MxkqiFvGRgnHicimfJzbzW1qzBc7mmHaViCYCZW",
  "key22": "5pYgqnihBdfRdAvajH4KUsYrKsQc97LkcgsvZgQAwpcivzchuydnBX8SegtjBzTHkxiTAnYAvHwsxtvWjbayeTXG",
  "key23": "5DNztU9RtTJR4UxwUhiadnx36e92qaToy9EJcgAC1CaF2A9QjgA17C9MfC7mBZNtqPEY82DhMHjEceghrhFnmdZJ",
  "key24": "4rQJ1YTY55L9dFtJcqTcX2gA3Kz1uiTeRAvTnxmsBMXFvZ4dfbbXX5xLHunE3SUSpfg2z12CNxrJRdEScc58HstX",
  "key25": "2iLLLPV4x3LeVmPHWr9SpKM1mLneJ9k5bBeKU2D1uqFG6ESyXoQKMMD1ohyuq2rUUiLCKnHKkWzXogdXZEg93Quh",
  "key26": "TZA3AVB77yA4jow4MTKbNg2wdg9nGB3GKYZcNCcoGWM7MFKV7Ne4HYAsCo4eLv5YgERm2mPvy3i3nje2NYqgcRi",
  "key27": "66LT1RQURTmv9D4875X9sCtYs2m39d2Z972gngS1GSmmqno7kaVteJLhYrZNwFedyUi2TJQ7K8GagDfrnTiERB8U",
  "key28": "4Bxj4XTmNndVUACKTnonojyXfUiXya5236B3sfSJbGfCL41mWi9qnBgsdyuhTcsmTEi3krsiJ7s3BNJqzPnNGHBw",
  "key29": "2F2DdAr2S6Fa7fYpr69itS6iSiPkg3Z3q89ZkHV6i27ayrdjPShn394mw3eaW2sababV98Eet6DiGpY8qKiS4YX1",
  "key30": "sE5Bj5fkobkyNbu2RyQCBHR6iB4o6WiSJqvA4qCmz8cMFrhMVwUUS9XNo76Kya2Z56sYqwvroSNRGnAScdA3GTG"
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
