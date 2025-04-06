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
    "2k1vJiyets1NyfxzvdVw3aYMdprsoL1VxGwSECx97w73QpJyUEe7xLv836vh75AxZeeSufvN4qD16YvgNvAc51sp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YK8LC79gNHWfDRFagq7HiQTY2bn6LZvsGSiGqNj357REK7Tz8ayEkbBMY7VoeqxxnpFLV3exYfitoF3euc4UxJK",
  "key1": "5fb66ttf1AhwcHYMAB6ekZLDWPfZc5RJuUD7FmWgxxtewNiZ7A8iqrGyfH2ATCWJJC6Wfu7gbpL2y9QX5H5EZyzY",
  "key2": "4EZwp29huWh77w2yu5XY6u2gcF4iNQ96HNtczWojoxgnwJVuq2ZvGBQPHHnNxsKHUVgN48TJTm5pMUFkHFy211iS",
  "key3": "4LBGroQF44qDsePea8pDHwvFXCyS2Z4A1FkdNz9jUPLNmyKFY3QJ8fWCXzqYysN642t5XBX8nHigVKBuieztfxHQ",
  "key4": "3hG874wpEY5YmyZf2ZstQeFGXYPJNgKmW3jhNYaxxuwxQKsCSL2nFgVZYPhQARDJWpWj9kTLQTkFBRBKGtxjEwrd",
  "key5": "5ti1YeT2Fx8JDyL65h8Zkg1XLnzCDLzxZ8EA51927wmKSLfuShY6XDmkQVLkeREE3tJYJ1pzdvtDDfjk9A26hSTw",
  "key6": "47aLQ76ZYPRgLHyf5NuEYLneXvNEEkAsV2fHmoKPEnQTEERb9U57Ahjqk7agSK7ynNf9DJBBSz56gsLN1aQdyCv6",
  "key7": "121GMXswLPd3cmk7jbQBJFdWaHmrWTviS8b1TbLZ3jenymVDHKa9CGCEYBiy1sUoDsUX6LtuVVoKY4JcTXdhCdte",
  "key8": "55w4wUL22Xo8XTGMCrD42Q9mvBBmVVM2jwYjaCL8AtL7jwG1miXfpPEcFiNxeVac3Za3nhguJy1nYr4F9tU1RhxP",
  "key9": "2wTR3nhjk7gsG1Hkhj1fpQMXaHteEtDWFTkEp21UU8tbR2BZY7ZCfZYy87Cs1YDXTd8uMwfy1qjDGQU3vLLmS1zY",
  "key10": "2ByBZbeEjvPFtVzpw8BMQLdupujKh5BzyCmeFok8MGjddise8LW7TnheBAXud1MUfKvzgqNtzLc7hXrtnq4FnvSs",
  "key11": "ETinXjf8SQ1T5o7UiQrKD9UtLCr7Av9PHi8QXqqPW6wuoZ1Dc43Mw2RT8cK5swdiJwgtykDh6tAvSb1JSRa8fBz",
  "key12": "512bWfmJrywZwJuAASkmDaiJcDezxFVNtVfmZdWuqkHkZxv6YJrhCVoSpfAB6aFoUxcV3wVkst2QiwaeDnYdREqX",
  "key13": "4ZJvg4rujNNuqe6RP8hgxQoyAb1Mx2tSqV2qG9CXrsxGM954fh7GHFXsxfbyfsRxNDa8Z5PRR9ndjC51rmWWSY1d",
  "key14": "UrFQnkKXUQko9NTGYLaSWHNhSEWyzxMAqDcqqNBEVeRdU18iUyHVm8JCPw8Xk7xDmtJTHu14mC24jb78AErGS8B",
  "key15": "5uCzM8hgTwLd66tRFtVK1bjUfreX6U5JJyYYXtFajxvRWYJk2D3AgeG5GPg9H3YRS8ALvcezK1R5ath2LKJY19vY",
  "key16": "4biF4gyoZWCcqrGmdTPJfTQ4ZKCQ4XJvwHdrBrQqsGFfU7AHZKTpmcE49yz4XTxkueGjbUb1hp5Jqxxy8JCKJ22b",
  "key17": "52WSidSJb4mau6qBCYKwj3awP2kyJzbd6C4qhovsc75XAvQ7nUFHcnobwh5kC8Q92CvFumx5ACm7k2kerZ5pa2VZ",
  "key18": "d8pwqpHouwmoKRo2xfZFTkY1aQsE6krRJFjGt8vns8YYMKfF3XGoTXsaYPwLyGZ5B9nuhubee5tnMbherMhvpYi",
  "key19": "3fFjCAsyGkJu3wdxAjzcz89ufg7ZQTtdhB52uieQGxCoUsZTsn5jAohdgKkF4XS5Ft3mgqdYDS9P6Tfj1xzRkcvH",
  "key20": "nte6A7uRYUb5bjLWxbSQe3bDaYZMM6A97tDPV8ucMZgUGtwr3iQ896X99QwikvrhQF5uFSGYp32Zfh6x5N56VaN",
  "key21": "5BM8F9SV6qtLjnF1on2SuSHksNaJYdP563U6c6QJgfHjM7oqgZULFc8YrnP1So8au63eibuaiif8gBTio3eiTS13",
  "key22": "2VRNTK8daCWth4NcQQrkyxwB9YHHpEUhn15ugDMHsTw33ArQWx1xEwDKcT2zvo4azkf6AVkd4Fq5abd49Mgta4Yv",
  "key23": "5Svjr78bGi3MqdTtMT8tAncuNT7T8MB2q5PyW2YnSYshsUz7ddMb7VkVaYprGvwUKNusnWvqMGxeWLQaQWUPaZ2n",
  "key24": "5mSJhBxDYZGmqpBpWwUNozG1oLhAMrViGKQHHXsxA8JixvLjnqKCyYopKbfUKKKftxoA3i6xXTbe9xLhsf6tyPK4",
  "key25": "ShQvzyJeviaeLxLXAcBUiQHVmq8d1fjfR7yBRBRUPtaBTVURXwmV6FAwSm7V1ccDLfe1XRmdj8SzwTcrRUFAD1K",
  "key26": "TJ5KkHzLP2DRwieicuTcQCvSpPtjeVx7S3usS87cAmsRXuE4by25zM6LLdCMcU1b7NXyJvinU76e2dd3bo7WvzA",
  "key27": "1BLoP3d2YvxzEgcQiq6FmKnpUQwLQCzyf6pisUovntnx3DCochtRKGcT8mh8JfQcybkxPuTD9tPCvrvXdyWoGxW",
  "key28": "3JKTefrzUALPXhmYRjUaVTD53BuHnw2pkcatCpgbQpYRcT4tCKu9taN9ydJVGV1JFv5qc6iUJzASLVXQkWwqqvuc",
  "key29": "4u6vPbrbEZftwFuNKwzyWwavda9wwDDYyxHq7JfuNn6bCF7MHvnscarsaYgg4pYQWDaHsYQwKGL3KySvnBF71j4h",
  "key30": "3oCwL4Gf5z1NfKPK9NEM3QxkNBLBEE8NzFVTpkvgDzNPEiHrWuJdE77gzRs9C74cumhf6uhyDJwZE2zt4z8pSZ9S"
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
