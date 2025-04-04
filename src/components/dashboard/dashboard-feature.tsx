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
    "23FXqPyTqCUB1SmAfr64RD574B5Knf262q7ajzCQccCS38SB3XMTiR5yiZBxVqnKTQyQtJe3jbUi2jPHSbzXFdqx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tpRyBFw2iME6wegHcrYrynhuMSYkcwdK5CmTcx1NFgtiXUC5Xhj9QLQUaSU2GyLD2BHo7iAN1oQp5r85gqkjUaK",
  "key1": "3uRHj7cCjdnWU2vU28emxgc6w9iobQAd7q2cgKTBo8pHSJcM1shSEJPopCZA1Rman2CaWZSqowjPxCXnyF87VKvL",
  "key2": "ZejhyXDCbV7dMWaKKU6dzmD8ArBwpi1dFRubmzFD5cDyeCCHHZFwEgkvR4yQkpVcQUc21CzksPsuBkEHB2duXNx",
  "key3": "3nnwcL9jVgn2HTbfDNqkx9aZQJZTKiUbzDKeE6YdtnE4tB935b1mud7nz4ghL9BhQAFTybuTc5vFcK5TdKE2BELQ",
  "key4": "5DeUwX5RvxGh49RP9vhrsHbCP4ava6pMrZvv9YYJvjoYKEofFh6YWxChM6z1zmiR2bTy9AxiozrH1JryFtZeLkQV",
  "key5": "3UeZ8zEkGAg7Y5kTNujX2VRhdedUUj7m6ZSuHhFyE86UthH1A5uPSJYhgwmphS7aQ9Anp68EM1rNav4Z6M54ozML",
  "key6": "3rUPwwz5atL5R3KbGteuM9oLHUVPdiSp2kGkpucnd8qgGrGB1oCzV2RyvszQTpYyUQAjnQrvNA8S2ZiMd6EFAuQp",
  "key7": "4wHSrMHfvxMMJLKjnUSkj7XtkLzZwbFjDkzSpZfYbfL3gHw8nSafNmG42qMURCnprtMHmAHBHPkUuh9FoYcsR7zT",
  "key8": "3cJ58o4Qaes1Euvgbfb6GEHRn96aLQjJrUCV65xgZpYd2ZAQFBPrJFpdeeWyywXm5PrZmaoxnqL4hBr3yQWKYVVz",
  "key9": "5FM9ny81bgCBqbAG84E2wwXYRQPWP6znZG6vXN9GykrR8qK2kA9osLojCiE85F7LhCxoYMqAfKXjcibxpKUFjLx6",
  "key10": "3jQMPuGN1VjwGX9Fn5pjuTzrV3caRjU6pEbk1qswAWBmAUM5yJ34P78QYJvMP6jCJmoEiNUmwpg9RJHc8vQ5LNn7",
  "key11": "39HFzN8fGeuhhsXYgUgK9nM87KzEtWXX1aYCKYZXKq1Ep5EM7wtdfbGpPK6cEHdUjZyZYiCoHRzk3No2R47GJ4sM",
  "key12": "eb2rS4FczvMQknLDywNjQXBPQTxyNQMH9zi2j8sdiiGUETtb7bWcGcJW4cYTvHLJX1PcqbtuqjvK1JpufXYgvUZ",
  "key13": "3bGB7ZtCTtZSeYs5GyvHtp12hHTQ38FFtgaHWvrMc9FkxqA6XxgTt9J4e6yQ4rNhUMqNBSXCXE4hfpueg63a3LCy",
  "key14": "5pQf1cXSSW5JVeXMjby8LL93WNDWTCSzefNC7BSvg8k9Li4x5zQ2Z9aCW59B4Q6VR3SzA45Vfp5XXuPcyc3oqzKN",
  "key15": "2B7hEY8j7eNEvfozMWZG2eHvWYXgjPNWedihkSbDqUfWqUGaSEvq7iYSsNcBCtQ1asanMSHb6ToaFCdfAYH4CZVA",
  "key16": "4hNVhb2BFErT8mseywCJW9eJrdHrbsv2qdMyQEgLVFLGrrZNyva5gxCwPHseCwMDbWjWenwogDSaFZ9PW5WCNcgm",
  "key17": "paX7z3M9Bju5YwoQsbXZP92Qoz1JW4HgEhqoATrpwRXm4n1o1Mctq6TTikecCRoBhnC3D6VNyYqouArQv2JWcEm",
  "key18": "5n6bjk9PobyrN1KeuEEKu3Ezaefi5Kp1wfJYqLEisR8bcHckhf81QD3PKNTTxohi7nQdaND7KefBaimAFPNBWjng",
  "key19": "3e9ToNsvdBF5nveHzhfQyDa2ewAEmpkLukKGyU5Gxx4SaypvAiXSMD3KXinhWACxqt5UgCpBisbSTv5u84CrZush",
  "key20": "4iqzKcXxFi6wv7wg58oKdzZEcn8pTfD1uieNoLTuAmYLaQNx2BQ6BWuyMh3mBBFYV5z2rddE8LkSfCKCPJTrgafZ",
  "key21": "4xgVuqRm53v4G37nCatUMGBpPx3bjr6QYeHhhtahjshFRZDo1HZ4Neyi8zsPMYrBwegbgXrLEkVtXT7a9dgH9LZn",
  "key22": "3jVzHvgNc8zN2VCki7G3BobL7jSAbLfy2niJFCfqtTYB4GsoJ2mbXior4kCEteJW7fh4tXfDYFbXnrJusShf6tvt",
  "key23": "AhzW8B1WsBhQj393HeMFUj19zzQG9BUnoDK5ybvwoUvQawX8sDfL2EpQgkKHYGWhYaBV9VixjrDT6vjQj8ajuxT",
  "key24": "s635zA9K3HDLkAQoYJzBFvthzUteYyVZpJfWjQsjjwd6E1ae43UfxX1BBpMbAugZrnorePVuBu7Q9n9HqRQQUMv",
  "key25": "4kpdp3zgwDw6fNCo6CWaxbdSJ2MSs7YW73CnGYoKHLerSZoFzPRrv6z8SqyckRYXmR46hjHYeFwuixLBSToCU28Q",
  "key26": "GmA63Zq2sM9zs57Skfr1dHQUtHSFZmH2v2fnyah7yUDSEEX4Sqtkz3seCdgf9F4VQ7A6nFbJDjUujyKzrU2SE63",
  "key27": "4BVQaA5QNghMsn68EnGE5wdZxytNSkX5YCoWKEnDwK6TJrbcre8qfRpJUnatikbkK5wFnArjqyvrw3GbnkT5n8De",
  "key28": "2PAxfypvZSNvWLqHFqCfnDCEnAfHqTBsQrMuVofe73nMSJG6mdvURgz3yfNfmFGHSiA7LFk6LS3VvAMwrDQXcAMG",
  "key29": "2JdaFYeMPMQJmfRP8HgZFfMgRzVQwBdyWypezvFCz5CLX9QHC4SCqwPyqW8NkMU9kVBx8S5jmF9WW2r18omT1W5p"
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
