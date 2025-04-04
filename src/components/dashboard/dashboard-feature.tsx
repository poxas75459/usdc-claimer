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
    "BKLjS1WrVL7SguqPg6Dd3HLABewyoksHUMcQfDd6GiL2vPwuicEHVkUpNbReC3vDLHK3DD9VDjKp45uWTDwkGMD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5U6jKrEmC6PdjeAf23CPybfSVfdGJwYmM54YBHzQE7j4hHjRXjAUqBNpGVCpKj2WW7AKqqwSKjhs3kckSNeMK6xo",
  "key1": "A96AAu8Kt2QyLNV83rCtsT5kqTUNpsDqwLcjaKES9McYd2iVpvrtHDkPSrE9PkJKtr7aqXoZRGziJcXbcShVdvn",
  "key2": "5R8GBgUr7oKJe3mJeKXzB8kqPUWj9ErvGH7ZrXzBBbUrwJ2o7A1YLCfV6Ao7yfz94eenTuBAhbZD9tWVVcxkpSXi",
  "key3": "3P33rCjbGKtQ1h3NFTMP1kVP4RefffZjefQNZSpByP6w7o6nbccz7V7h5SAB5NgSqeNiF51ksTiu7bfNXqZaopGo",
  "key4": "4yhS4xvtVxZdtjxwSSksQ7hqWgGS78xTvCPn6shq7J6bM4rjRvXEuJLhmzL3cxY1kKizUomYH7rsu71jGBDPhiSL",
  "key5": "5t6z2K8DRXq4RrhXezVHWhxaayAw9djuweVWhpTcBX6qsyDkGGwCuDpYTMWUK3bZqMjuNo9HXrhQtoBEf1dcRV8c",
  "key6": "J52Nh3DnhSTppDZQ7sSmoh21t8pGLWurAwQ6qfBGgb1yNVswEPYpPAEuFaJQThf9vfMQKzBdSif4yy1sierDtcC",
  "key7": "5ifXr15opjL97VbNFRVE1Xaz2S6zkqoArm8cUwZDogn3ZoW6n7o8No2VKexqrs3Wn1EMkA4naqGMRCf8htDaLArY",
  "key8": "46Ph3y39yJeWzswiNmXCZ7YHB16wdTPJuxudkCaRM16wTTKBA9rmXieroYZHBFV92gUo4RamMQyUW2rJQAKFM9dN",
  "key9": "3yMZwwJQvHwTYG2YcsGXPPJTPAyb9NiCUyHEHtUiEm6bgFyLaqmPWqjL3WP86SYT3VfMSFUBXjMQYFiZ2FibL3Gx",
  "key10": "2iCr3kBwuuqNKkRcYfJBncirFe7vuvHTg5ynp6oK3cXTgHcyUrBNkbuBjBhMuMu4UxGbj2uitSfYoonKSP2HZArn",
  "key11": "1tGJ9U29wZgUJVPGghmKfxNLP4R565g498HwDjM4jt7fYpsJAYFTmXgQBHxufy4KfUSdLvrDRoRPeekA33mwQQc",
  "key12": "2LruvciBNVL36s5YCSZ5k8Up8cvpvgNd993E1rj5r799A5m7FfTQN9kCmHyUX7Ni9LahqapBS6Vhas8Mf98f78nS",
  "key13": "kxVZeRK3uEgNrCKBfAq1usRt7EoQ6ThUKGFk3qwLbX5ohMMoF3egnxafRZCWY6YXzLpFFPPirSu2ubj9KpyWda2",
  "key14": "3miriaQfE9i41wW8RK2R9XYiKpfZf1qfU4NAJ2LfG3oH3myVTJEbXr5X2NPn4PT4nrdSqfq3Z7xCH598Nkenv9zu",
  "key15": "f6aNGRzNv8f4artqL9KSsAiLgpfuyYyK8Be796PH9MfPi5Lpg3wiz5Gaz2gnNT9qUH3vwDBHcooir8hHG3FtjYH",
  "key16": "4GkG8KDaA9bz1wBxvnQ9WZPFsDrrn7s5qCxyNzYJGsEniy5WvusxvfMfCgUPFYnTCDjypvoEtvX3cYLJynkFgWV",
  "key17": "5U31JiG93gkSFmPMiiexGvbQpzYwEf1AE8nx28PxAtPbZGU8Gst3xVVetT9uvEb1UpD54N65aLMBgGy9keEvVLwx",
  "key18": "cSZc3HPspJ4eyn6HYF45WuGX2EFtrpJu4rxMkfGYUHXS5AVyTSmehP9mMS4ASaYWbW8HeDSTQ6vpcpNZmxtDyQv",
  "key19": "4G4wMVrWXfMJxwLNxrd77ZY3tRtL8Fd3spbZszmru164sZGNfLmTXKr8NVvp2rYWxPKkzd15pdEqAZg1dGzWGoj8",
  "key20": "2SeyxA1G86pS4NMmDXMzfU8W2TXR97cAD6Fmfa6gPAYSXUXahB8pV65WKUPFrNmrwBNNT1bak8ynFf6LVWkyavxA",
  "key21": "3X5bk8TsPN6QFvbVR8sv42Mz7CsLZ1VEr1pkPcFnc3aAhHs9hcm4PnGvhHT6ftrttLWF4fkFzXmTQEh6DaVio4o4",
  "key22": "2dPFbtvmABnwkWGzZabJRXVui5ycJLSCgaeSH4UfQiYDiDdvCMmQkcbEzZbkmSoRf3vufF2kFYfW8eejzzc8YSKV",
  "key23": "5dLnsaRm9JURZsXuwDk6BAhmLCy1x1BKQLz3kvMh6ygYfR2DwkgQUtiKLxyL7vmYQA6HPdxdWxRXMftRm9bANnCD",
  "key24": "652fmZvWb2czUyjpLNovXKvhdXAHDK4RFxoyz8qwWYXqVVEgZmLPh4ptZcewZ9MB7i3Pw6op5sCScCdJ8bXKxiQn",
  "key25": "25BUJHGfRdCCdxNvf6Zo7UYatPLXsMRD3xkwpPs4wtKUtzyWnszT4Sb1wxZfdNwCNf9VE6TEYRhNYuAnv2Jaj4ps",
  "key26": "3P3xqBbTJG9iJCJAozAF1kkgxEGhWxxpPFwbmVuHb6Noz3nL1y8fkx1haYXJBF96gXSThEAYygNC5g5dupb7tUHH",
  "key27": "5C5tgtHrpbMCRNyhXJQ1xTw7ffVB9qfvnwrLm3Jaad2wKV6u831Dwe7UMnjrY8fFDpDbZvoCkfqRvWUsn1zoC8Kp",
  "key28": "61Tb24FV1WZf6LxBNNidNHp3ngf5MThL1L35x56LmvWFjFMLY8v5Q7qiTQFcDh9mJQH2pqm3Qm7F8mv1TVZ4GLnx",
  "key29": "33bH9adGtwRbp4oCfzD5VKjeSyZCCQVb1fukW3bmDa7sKj431mqEiMpT9Z2fXHhErEdbccQBAebBH3Sb6rKcZmXN",
  "key30": "2hpYSzCvXkdY5dQXjBBgShvA281AWs4Pso4uumxWuugGTTzU5T9cu2QHs7eF3buwP5z2dMbuydBHd2jH2ERQLdZT",
  "key31": "5RxAN3m51dAaFsnBh385p1AUBUpHNCZ7nJ2cEufLXU7AFNt7MD77UoCgxCiVkRDX7wbHFY6vB7wG4ZB68Z1ybFyE"
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
