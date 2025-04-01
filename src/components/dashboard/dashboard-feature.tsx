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
    "3gDXGVFsx2mPKuFADeAp3Tg5f9oh3HqzV5RhDYT2PD1vLbfLUaQ29f4zeJy3X6x6MuaFkR1t9y1T3EzFnVuADoXF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DYzgvW9sdBj6bquQj3GScBHsn6SfCwcdxZuRLrT5zJkWcCkAJY8DqxKzVNKx5d4Z7PsKvaQiLmBkztA5td8xCq3",
  "key1": "2rWPJhFYDCXPp3kPFWSGBq7uX2GNHPxuDANEcya1ZHfWJMfFbuym9PMSteyj5ecYFYGnpYH9KCLFui5TX84EBFy8",
  "key2": "5z1tETMtjMJnMzn16VkCgKzmWhyYNTi4MxYiBmwNhxTkGhNZkSFwpCMQWzgCMcMXNWoY68xzBspCtYosJRz4pTFy",
  "key3": "oPrASXtVx5p7oGEJbS2WSf8MzenGFYYi2BcXuRqkYYcnXQxUEhPWu63QPM6rFNHucEEaeJjNtYxwQA4boT8eoqC",
  "key4": "2x1cEdx42B5NPJcXfuNVWAmME7kFNnBQThH9T7cdNNZgyJeVAJEWWXxpD6gWyyzbEvYmNAgF5uQvi26Hdiad6Dt",
  "key5": "4JHbc242Ge1bhoZUJZfWtA3x81sDxKhZ9DdWA4CZJ59WwLYpYP8qnD6seWviuUiRwiWhLhc1FkqJTYnsKqgDTT6X",
  "key6": "2oQudSyLsMeefAfqg7krz29v1ZGMKBy7HXrVCVtXLCUk5iyhnSfUnHm9XcUB24dUErY6c4gjZF1oVQvspHe3CrzH",
  "key7": "5KzQY3oZT456xorDvzCUTVYU5fkfEyhJw9qpqADemNbwScoywfUADRT9jtom2mzzjQGUcx7paW462DDetxjbLRYu",
  "key8": "5Gzs7BYVM1SMXXuT1BCtH4Eji2JXqwwV34Y66xqWwwrHpst7zdHqiVgrKqmeH7iiA29VdrYB2ZnB7sy727JnzDNN",
  "key9": "3ibDcEJ2Pedi32MUjKsf5nfGSpwVHJw62zCPApV9Cq1d46zsaE7Z6FfhypLZ79QktcQRPxERxVfyk4UR7NAvYymv",
  "key10": "3im9gKimCTXDHuL1dspUsttsJvwn5pEypbGQNoXUnVKEXKKRLYcuR247qz65xbMnCmZQUicUXvVyvTh8apb66zKh",
  "key11": "fbXruPZn58WjZF8xvjGEqLevQiYtPXDA2YsZRoanutrkpD2A7cdkKcXpJf3VuDENVmSm3iHUJiHQWLjLTH9djrN",
  "key12": "3r8ZmKtsnuQXKXhzaYwomTLiYVVs6PokSSTk9PSbaES47xmK8TPc9tSyzGPwDg1iczKZi5xx2Gdz2Hd7sXLoLTWR",
  "key13": "5uEcqTnMb475byoTNN7aXi526stjS7TXkDgYrutoEb3guYJLBhPKFrnBXqcwwZKPmnxakJqHcQnjRVpfCnw7H5SR",
  "key14": "37yuFiDchEsHQwQG2KMUkSVsf8af7WTJiwSGUyPLDQTJ7Tit7PmgFi5fG7dbAdZmZu3mAK1LCW37ksSsDjGKfYNm",
  "key15": "5w1GommMwAq5JTi23cShKjEQaugwVmzVtfnzct7P7JLkhvUZoyjwCTfCfbyTNvBKm1p5DZVUo8LLEux6kjqAKYgi",
  "key16": "2DYozHaGPe34EhudhsUoBFZkrP2XUexPWT29HG7ZbwXomgerBhyXwPk7T4vEanhW25usMvRkGVxnfsQuTm6n3UYa",
  "key17": "4A6kT2xS4vrMZGmHFqaEoj4E6g4EmYgMPP6LrPdTpzW8MNaK7xfPD8bKzwyS9MCxh1zYQC44sGH5qvVSdSnDcK3g",
  "key18": "4ToGfc6EtvsotGQi2c1oXu99RCpMqqDQ7rHSfumnkXBEsWZgUcfTXGeqc6KBPkKEstmqn5HCkMW9hPa578QhvsCA",
  "key19": "3TRe5WHB8H624dEqVr185nFTtFXLuvSwSp8pZ77enQMW3hHentCPmdrcG98rbaQghF7yBXac3dddokdGrsvxxeC7",
  "key20": "3FqXpWdc4zh5m9fJFod1ZU7dFVbjg3iQ8bW7oCKA8yWPPrZxvXJLYUkcc1UguA6aSbUayhCKKhUkVVGc4SV5uWDS",
  "key21": "5md4ZGLyqTduuFqdxizSgyWsaRdD36Kbo87M7S3hBd92FMYcoG9mqysweHBbot2GNSruJFcyktzPPrmwmZQADWy4",
  "key22": "3k2yaLiZyTeEjY7LyVhfTUZmTk3VMyJ6VZ6SeimvvwEYsnaaF5ok1DgdoKVKFribZV7tHJwj2hhDD6YLF2n7SrvF",
  "key23": "RGgH7168FkJD42NBkpBQmNnBhaokeVHWqQCaUKoTnMUP5HvdkgHjxg1ncHPjtsaWYDH7LKvjfNMbuWrKXXdGmti",
  "key24": "3WbPewV5RCz1bD6rMdGHpy3ipbUpVW5XTZY8batWy9kiwJRc7qCmqKfN1ULnGcj3AoTAccubRjznrNyTCvDAnnXo",
  "key25": "5fieTATdzoWGeRo3v7Zx5iJybZzfFr6174uwxzoWtBw72LNCpjXBKRgXjqWyEWdxYtMQS3BXkHKb8dZqRu34qkk7",
  "key26": "3CmyqHwGi1KtFUZvJwKMdovVN8mwJ8y1egKhuwTfpfWE6oXEHZ7tDu55UCbH8nVizxwptRZKSVQXs82s2zbsfZqo",
  "key27": "BchCvfAxniZvMcdC8YBZ1DFuoYgy3wZGyk4jSebAHN8kDqpDG9q1cAvt5doHrYkaSxFQanQvgpSrCYuaepuEGmG",
  "key28": "4PSk5dLnYzuTA8vm7xbZh6XNdHqWoPJRPUSoTtheuSiT8LUUpruBRXHqR5sKJLKk3zite15rgQj9JJnRyPqnyNfK",
  "key29": "2kGAb7VVDMtasoEBUmmVVQiamnBeoqofsCf42aAP2bh5PJLoocjT5e9jC8besTGpsSFveKvZtKwoW8KkVbUspZT3",
  "key30": "vyM316bSZXFbJofYPEpUtAHAg8txovfxYMSdMuTMbYphmkSQmSyRbpcATYUwSQv2GzHTmMocGScEddEcKKzqXqk",
  "key31": "2m7N3a6tGELJo4hWgtYZvfn7CUh1DcPy8qTLiv1WMZK7EnMDzRW6wjcEpRdoURZiwtYmhQSjXbQhRYpnNLpbXPKk"
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
