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
    "cn8k1SRUrDLrZoX2v6xeZwX5tTwV2MWuvpacDcsFq2XEJsfCx6yRrWn4xSqcqpQSjXCXwMS9uNBnDhvDtysdBrZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "w57pZSLKNxGoXmPRAa36rdqL8688dPbfki2EPT2bdAGvV6Zgxe2C1LE6JST5S5JpSBM9Vt9NpuEY2whx1t8ea4e",
  "key1": "271nRKDpk6RaAhZxyh3YorvgQp4bQBvnvGPEmzTRr1DHj9uwnvUSGfnpBdqyB3AZTHqWvKHbn9LgFJPhCDssEvvN",
  "key2": "28LRH7zSdMmEzviZ4msth2QrqzLHp8ttuCABY495aJv8nuzmwAZgZ6Gx9eWGGCUmJhch8foFQsp36ezEhLSd6wDw",
  "key3": "3J2aF6WKeFXCq9VZ65uMMWuKQLF77QccwhNMzTaSNx8KHsfkFgLrJFN9UaKoXinNSUme9bazcHuKyG94X5a8NB3E",
  "key4": "3LsCYCkvyxcDQwNZPKffQq9CDYbiityXnWxasY15o4gnVMwXVz9ebgshzhpCEp5fS4ubQwejaJvt7rMt7oHzTZjA",
  "key5": "2H966dr35ve61rwYZ11KqwSf2joZZJFP1U1iZ6aZSXW9A1g2RBdJiggxXKeaWuwLaocC87RnajDY4ohWpfX8SPJ5",
  "key6": "4Chbv3PdC4yh2W1nJ1upbhFkZW3jZNtbnH6HRXzRT4Kqn1evYPDLePmE6CkpYFJM9GHuLoyPskwd3G7PHfusuv2W",
  "key7": "f4McRNnmYR1ic2giKQbpQVw9shK3JSSKiFa4Zx718bnk86hza7AAgSP9yj88fHdactr8TSNcAXPdNwzWAVWZQ76",
  "key8": "4CMhFhDjexA4KVM2R66X7vDCzGwZh6LS5MAwekPyBth498tR8gXkx8Ys1AkY2GccaqYzkpqK2xdcdx1qFs83HipA",
  "key9": "45CDe8XqZFQxWhKcPhFbJFYRbqfGR7LhUi6aD9GJ8x6BCQ6fkWhDuii9nzwZcq9B6mbyjvaiTBowZWauBKiNwDtj",
  "key10": "5isRV24fot6reeDMYN6EA7v4r1pmUxCnc71ZdgMSirRAHUao7VSCGhUfZ6GVywf77badjjyZXSnVtwawr5J499B9",
  "key11": "44zzWoKo2SU1sVRGRMvHm22swuUG8W6FQU4UJbxUGm75xQbn29n5Sbg6FUGeSbj556n2g47mkCayxtptGRfkya4w",
  "key12": "4CPVt6gvJM7uGb8x5ruvH3cGMr8RUfiqXbELi2QHKUtFYadP9WNNZcus7LxAttGgEEUXjk7t8WfcpVVmSv3EjFRL",
  "key13": "3746JvLXbQgAkJtyiVmbKGxYEFFdDPYUYZwgu1ZoVQXEnvA65GjT2nMuwgeiKWwbvARNPCHbiTR57SSnUPfvSB8s",
  "key14": "3uNhLVN1eUrjDCGPezQtF5WtRPMyTEXUvHeWXvjaP2qQvwHH2KZJjpL2pfG9HQetHpC3rTU7LLs4odcYB8GFVw2g",
  "key15": "bEVbSmCMBvR9prVjY8VqhBSiTKtS98CimN8q1XjP7c9LBgh6r7T8R7ytGKmmeYFUhiSHXahfkA9zajzXfwhCtqM",
  "key16": "641f8t7DZF3fFzMoZfUWTf3qGZjVfkbBTappfWTpyXCYxLYpe4k4oWv4HQw2CuWV4XcfSGBq2gME6f3JWg1MXmgq",
  "key17": "4vQumdKz4MBhTCaWBn9TFF8M7PKRFz9zM3oXGJrBVGeyK4PzY5pCty42juqGN7ARENK1revy4KEJ8Gouz7JjvoKP",
  "key18": "48YGpbF3QL4ya4zAwDMYn4BNzCgAigE4T9konMiGGzBQsxmirhodxCnYvg6qhvxbXH1gTgBLfTeE9QfhCLGzcFSa",
  "key19": "52bFFbyLUd7f9HrUXcLGxgP9QSrwpgCziLdiRsuhkiyLe1JU8nTyksgsDitTz2qjZmm3ea4nang9YGoPkitrZfDw",
  "key20": "5BbN3AB4cpKTRadNMS1nt91VjUf5HeENYFEHqog7NqgybAbrdmd3khuDR8rj2H5N5uVrfqTTgqZoxVieMgB1fRda",
  "key21": "39t5tKQAx8vSZZsoA6q6pnVbDyrAxHsxyiK6r1js7pyTz8XjJ2J7P6CMefuwJRqsR9JabZu91ibH3NA48d3izTM8",
  "key22": "2R5qMs87NRu1QmZxZo5toeLqjZyANsCFiBixSdY3WAzXpZ8W3wtJp1fyghBkEZicTHSjQPNmwf8vVFiW8CEvstP8",
  "key23": "4k8BkkrQbNCNJeVzdSJGUzC2AKfHX5BZL8UvHVikVp52FZ6onNCuhtCh6uCVjHPi9PZFRGNdZdWRhHtY1jGNniRg",
  "key24": "3emxrUNfWJzb9suKYNDVRhVoumtbrXZfB227SCGzMpiL1y2byxJ9sEMbyM4kyvHRQKUSgoFpAaUj1oYA1EqMefXS",
  "key25": "4cMi17BrLHEpGvJV1DFEf7kKPyYN7UqJo4aYydhQgrSRZJcYVWKnAfDDwZYFV5RBfkBVgSVaCRNuj7xgdRqfUeck",
  "key26": "3wWgpQBj7FKsTpaPKqzGsQgFkqwbm8ermoyoEV17d9Xb4WVWFf7wGPoBfvmWmWvp6zYJ2FHWtu83ZPZh2WAY2D39",
  "key27": "46GgeVQic4RvWTtzBkhzbY3eaT4gHw9GJsxRe4Zz8X6MkVHZMC6S58tYabBgSQVbGbRU6sy9JM1yMZHLBEXo4F5b",
  "key28": "kMmuE5esF1UJQ2qgX5jjNe4gSGz4Df11nxhT9ydmaYCyjGsR8tAbJ11RPNmC3VHpQtLR2s7QciG2M1doDWqiTaq",
  "key29": "5jvQrbtYVVLEJFz72oUX5f8Q5XvkzfJ5haFon7GwXGKtiPPnLgYYwaNJ5qFYxLebnC9FXGEEH6khLFcckjHyhsVr",
  "key30": "bfikVQpnz1xAe3mnMacGK2LJERR1ynHxiLmFY4Dh816v7CLBx33z85N7P5CknZwpNnzMmomsXPoj7o9AsY52fSn",
  "key31": "3uo3PbJ6AdProoZwFxXSYU18Zfz1r8mQV5d3it5eqzYRzfsPH44Eq3J7cHQTUcZcWSUdc3YxnnFp56pgJuaZcso8",
  "key32": "5pqmEVWpSWZzQrsW5Y3ySJSeAyj8kJo7bM9GtxTvK1UQg1DMZuUhJQsnczQRxgqcHFvDYr64dUKbMKACMPhf2JzG",
  "key33": "5qN2YTJmD67FtQjeNXeZhvvGrQJfR353QYJL5kkPqpXi6AN3YQvWF5bumHjC3zexy3d733MPrznX9Lca4XP7RvgZ",
  "key34": "2mtALTHgBpKsKiizAse1NtBkPkQTcGJNkrw4uAXcyG2HuqLq5cLvxvMtyN791DKSyxy7YiDrukfiTriDbcyu2wLs",
  "key35": "4UkFiowgXyiqYDT6thhDgjBmHQtA7ttbtnKed3fmYR4wcSBAon8rXmBU9HqT1LrVcJawEwdbunxv9Ubpcb6G7x44"
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
