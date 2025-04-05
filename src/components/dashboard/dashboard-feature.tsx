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
    "5x5kHr4TNacy72bEYjN7WmP8uau67Lgyrxnkqm98p1ajGvF2vnuopqndctpZJ5Lec7ugaeGcxVdiz1V88iX5WB6t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4f1YRidRtPzAq8WyiKPcU2AA9TmhFfGLBgn8FUe7faCycyPogLjX61f7BdPtXPwm4rosquseZTwmK5TSTjcKJ17A",
  "key1": "4nkPHB7EfBtHQCCWooadVFjsuS7vDN4dJibLr83HaGkx1QkiLxr6P2LgwmKKXzjcAYN2rMM6CEciMpJ6SJpcP2G8",
  "key2": "3aPxUMervGbkhnJD1VhwZqMmoZ4ap4GsFJoSgWufjQK6BmRdMWsodpworNjJD42cGJLaDxYA3kHD3ygtFkqGmcxe",
  "key3": "ZJo5BgBq5qn2thEAtWApAqCjyXjvLw3czMz5f14YbUREDADProBS7wmv4wRGJvo9BzosxQhQ1tse4zbVtxMM6WC",
  "key4": "dVKFsgGJZqJT8edMNHvJj8McFM6dt9bm24caywuYHtPZRAWEmVvkPSuMchpkpyscDsrkZmsZ75aVJML2xADCgLb",
  "key5": "Swi2FZJY47W95B7xBSBXs2bMUWzSYDf6sTuMi4pGYqdUnpFr2YL843pnHZ1LpUL38arzduvGaZYWsAVB6CHgojN",
  "key6": "2L5uvypXRhn3rLVoPCCBFb2mMyz27oAuFsvmE5SPSJptkMsDRFdnv54Sx6LdHS5LFguMHmYaAeY9wGsEcHoyV8Tx",
  "key7": "5UbR7Fbj4TDBhbgfsdirGftdFEifp7iUQRzkpwHJXgRVnGrFBEsSL7bC6xjBDUYGoByFwyz971CViMLRbGsy1jaw",
  "key8": "3n2CCVaqFgf3rSXt4r5VbumbRU5RtUxRj6pq6EnAbqWCjhki5cTx2QUBH6f6oykg3NdnaaQ4HFCU48wqG665rWKp",
  "key9": "vZ5DJkLe3MbLMvpzH5Yn5RcKy1yJrKjSdoe7Gi7w2ML8jJXUz4Ex76NfxkpEC8JmaoLZ89fv31ea86Z7NMEdYzk",
  "key10": "42k5B2k4EmuUuNchdjDBZAHYstnPrjcB8uxj9fMadMTxBPBnbSWwyHxSRKSw596fwE66vTUz3J4pD1mcymkzimk3",
  "key11": "61SoxDpPQQ4CU7qJFYeXbvqAecqnPhPCjYForYSx3E1ASKKgP8q44q13XN8fYohrecz4WpPYzBoJPiDFmZ47vH7x",
  "key12": "5QD6SXSEfnp4iooppiJuA4KxqEZCKUQeKB8HMMeYcdTSj5xXB5t5LfxNL3zD4rDQFGphu59iMc45Ldtr1BJ7r8ie",
  "key13": "2rkDYGa19bncz72X5GWvn3ULgWu3Jf1m1GVKS3qqTwQ4v6iLpEPW9bMtSBdPA2gT35tkpz2Vu9xYY437kSwwDPMP",
  "key14": "iqbfGjUKrpjb1dqoi2sqkC7CA8wEgefEBVHNDDY2JG9LbG4P5Mgaj5B2MU2hhtjJNfBspE5hGXy4saXG7ZgDHAS",
  "key15": "3fWLc7VEehxEzzxBn724NhtqvLf4TTR1rFWRDnp4pU3tGd4VWgVD4B93NnVrNekhNfs93N8VXthZtocszc4d23es",
  "key16": "UnpgQWQHtk4z54S7nEt8P5MA18cxwJnk2NsRRzVC96p9R8jtcaJotEruzbQLz8ehjAiRu2xmHSafxNwM8hwD5uR",
  "key17": "Cn94M4Wbx39GVi2F1WPzLSHDaRGL24mMENFqb2cgjeSF23As9LzktWvvdL2gw5AbYe9p9zfRqVGoKssfUcEQFpn",
  "key18": "42Kfar7ksLCoGwryHN9kkSSbre1r8ne2f9vuZjJm4u6ueS1tcSSjteZqv6GzhcvjiJVeMZC88XuUFva1rf2E7mgc",
  "key19": "WfdvebJGgi7hk1PMEJjFXue4jNmc7uLMDa2NLCoSFRrXmRNkjz4TKQKw4eddtFqAFCod6bf6jHknDmFty64cWDE",
  "key20": "2kXi8bHR7TuQwCaTR5qjVb9JAc41vvh1G6DipNToEerV3PSd2oM46cGHLjdVbc29kTugSzvEdYM9qowGyi9DmHDy",
  "key21": "2u38Hb21ZBrc3p9Jnigh5RxfeFMkRaZzqWosUWUrB899YBB3LiYW2okKpoPZTDHVxNBLeGNgkhHhsTthT6GBNe6g",
  "key22": "r4KrAXAHjJLiQg3aurmSQecgiQSJGdH2j8MJMXiPZ35U3e72R9e1hxDZH5rZPoTb1bDorEjGBHaUXSqfqwqZxxb",
  "key23": "2PN6Uui8cTN5YdajyN6DS321XLisQAsVUFrro4BpaLLNHzaZZFgweN83kHAopC45nAxg9uXqzLm7NE1H8AmcdcDm",
  "key24": "MvkkVRrwXLdnTetfpsHUmgzYuTQrEiQcZdPz2PGM6odfzhdftgdyZB4RrUYJPmi5zBzpTZrE74JDx1Z5hgFnzJP",
  "key25": "4DsC4xJqJMANPDF45sUptfVbw5pj8fCfooBaJBrJF7vpCrQD4FqhcXAvFmZG7QbC2xGBQQzv3nz27NN1Ny3p4WLw",
  "key26": "PRizzpSCCPdHCuskBsbsyvu1U8xMf83ARNvZgPk4RPuLJuvmJKb4D5LduaaoHBPm61iMFB3FhLnhbFJC8EYdiZs",
  "key27": "2WR7nSdSgf9T8qXHvJMMGDCJ1dd2kVpGqM81esqQkzSbfPi5SaGd2eirQhM7LQexMfDYzp4HjL4kn49HjVREtvfK",
  "key28": "2wC35t7xWx5gW7Hp2REkH9b1fa86UaRcuYKSMjkGLfxX4x9NNmNbzRQVkrniz4QpjSg7qvYzfuNiHVuY3jePCzEq",
  "key29": "5D1UHLyisSdGbLS6yZgjYppgTR5gPQkSmHAbphwAZkqLY7twST8iX8BD9EiFxL7ZXpWTLGcheetnoJBUzUurKAaL",
  "key30": "294jVF74PSR7h2vnghTdhHdz9Em9bCRr35ZsWKr9mb4p4dFMEwpTwXVqDxcraoM8aX1qE55wEtMNoiN1pfnior2Y",
  "key31": "322RVJcETh9dF5AJQwSgXQ4E9kMfUfBiE3mcS7g1zj993JPzsvpC3iX7MK2d91sokQXfhFYeB9QyxiaCEE5wJ141",
  "key32": "4RqkKLR6PAqzU3SN9B8Zk3QNUgKNQHkJZKQW3CEJx42ofjqybdcL1DvLeqWcEhJd9Vj2Qj9L9zctQvbz43qEXUjd",
  "key33": "2RWhUoHNShXqTRsijUQ7JC5voEmeaNJdg9WC84zxjR8zHwWUAknzakxb9q7mEGP5PbKwbtugiav6nnXzybsfFAoQ"
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
