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
    "2sT6FSB6UvNav1pXa8VCMjvMSKokm9XfHVcxViywCwpUqUnNTVrqV3Awf7FXMaU23QEqEYzmRDmaR8JfeQ1rkngV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ame6fTxQx4THpLBWLoVSMVG5bLsoBUR1UW4hL1PCW9Z78iQyqTFb8TWB5wPYkqAnui21JkfHzyR7rSAu2b42QgP",
  "key1": "5HC5YG9voS1VLfrPzVbGEcRbfsjDgoaeKrC6QJtgYRSvFKPCfHhNhAyn4iEKfUqTf8hyhUKyxWcmKN4XPG48XMkS",
  "key2": "2qdnfAv2rtejawgg3CLEMeUT5LeiJ443g5PmHhgyxmJKU39vyQmkFdT1GSYxKFdkhqrst21uSpbnetsfynsGCzii",
  "key3": "5GE6d4F5qEMuRi8ZV2wYxuJne1URGamcVWFgdAx3df9wtCerHgZ4x9n7da7kQre4YsixtuamsNS8EizxpC6MTDtG",
  "key4": "3ha22bo3CCmXPu6DMZ997TiNe9kbJAWhw2sWJEJXSigD5d89ardNcwWKyx8yBJVtfWcJMGtpohVgdyjPvcbZaCuN",
  "key5": "4zpGcWLXEtLyFKhH9DmaKv9LfdzGhtbe7JRMoj8PA2RZSg9KUvXX2vXkDSVHQG8BdJruhJFpofU8Q6QuNiaiS8pq",
  "key6": "5vH3F4wQ7RWDWqtvFQdhsHREE7is7uCaLSJpMyJ8jJYd1gHoNvbztRbJowPmPz4ipMVndcsHQJEUuqGuvqDLxMW7",
  "key7": "62RU19Cy4yQ7bjmmDbTRAwRQnXWMHzVbgt4ysfaKMK6t4eq9xcizXNPRX2FVVowJFhAtSAPngvebJAtE88oPaRnE",
  "key8": "ZFSnTJi782F3xHLaFUeoEVzCyzGMzj7xkco7GTj1JUiUQauRyVwQ2rUKPh1vyFiue52MAqDgaKXQfwrJKz1xEiU",
  "key9": "2ahG6LEsbRVBqLYNHYG9JLdJqgHx5cmrdR1JboSMrv8p8AmBnchnhRwKZj5RZ4k9MQZx8KvygJ9dJv4f3BQgtT4D",
  "key10": "2ojJvV4tnFSKZw7KicLvaXfTAnCRPJkzbNFafg5sw6i5svxMcjjWP4jEKh2uRb4kFzjLpbKdgQu1B6LMNi9GoJSF",
  "key11": "3qkgr2pfvyYCsuaEpw9qYXyFf9LkuaX7KeEpY9wz1qDrw4vEVwcnKE1tAodpsqUSp1UxQS8ttwHw2wdqcJrksY3G",
  "key12": "2NfVvsLmCv7KboDb5Ngn82NdRYGL1sFWzP92p3WEBzFH6Z4RXNrnTPPh2DfPs87hEydZd8eR7mRPivMhptUZQLvi",
  "key13": "2NvHDfz8QioSihyGYxidv1Bv2evXTk2BwTMbACap5u4M1b5bFVV7mGzV2jzAQzvYW9YCRh8HaVRmBko5ha7wv9Co",
  "key14": "2Vy7Y9rVRkgsQ7p4M3BfAvEmAP9KMoK6BhppwxA8WNpZmupgbdCCPpx366C4e3eC4Ai72vNyLbbCnX1zcuBYcyRr",
  "key15": "2X1i9CwnpoeXMdFEDSaZzRkecpLKvjMdguWLzBhCoFsLnufC9zb1fJLFaQ11PDBnvfw2yyNBohz2FivyRWcMXaPy",
  "key16": "3PcqEgzGEF3uBYLqkdwk6fhNDoy4bPpBJCbg2UeN1g1EWYoxXebbxdJQqSWBqpUmUuak9aLnXetcv2JtKKy5fL4K",
  "key17": "4AugJnKozfR2Kop4hU39KX9PZWrArgxddhAjBfvMbH7r5QMBk13YL6TqBiUj4hmg3dWHHDY8wqwetnHRVd6kayuD",
  "key18": "4vbuj83uWMCQc3NizL4h5YHMNe1SRz1LcYb4iZwjzSm8uhGLQ5KsToMUrFZaDWoM9jQkLwWnP8p1mXtkikYe2WjC",
  "key19": "4zrb1PPV7WQ8ywHjUkKdbGRdbzbnV6ogkD2XUNuCThygRe5VDDmuuyHwMa9qnzzZMkU2hq5PRN4MYcak8XKnjr9c",
  "key20": "whUMPPeLvW1pCAGBYTZZnhF8jbmaV5PGwe58HfUypmShoNmRqHNs3n9qxeHDRh32HpmETeyMh6Hp9DvLwFnmKPr",
  "key21": "Q4b8V2xaxzU7uoYrMfEqKvFVijuXKn9RHSPkHEaSTTpDPXx1wCWzLWoJuKfPuHPYvYERz3bTrkWwkE3VfSfV5Gh",
  "key22": "yiF6Zzy6yyGFyEcyTbmDcduWuh1GFpL1fj1Piir28s1sykxguTAzNqwSLLc6M64Tc8FbyC6jPA1G2vkXWmBZGVm",
  "key23": "doRJe6y5tY9Bnsy64qK9KCQU5kyg7cUn3Y2FdxhJntveZLEnDYcDu887YqRUenPEEGeZicHVhSGTsTEzJq4uvLY",
  "key24": "3PUFJ8wQ8j7jBiAFsaWmzXGdgJMx5PPVqeF5rSL2T13WkmgrBYevUWY7qayBZ2sx5v9pz224bVUrCrhQXSWXPgiu",
  "key25": "2zRmDae4mEsGphi5rh5WT9TvEvmSpfu5nwuKS3jv5Ax3D6q351aKCjchpJXxTg6RFBt1hJpbDHsFpZZ7YCKdx879",
  "key26": "3USpGNDUi4N7qUgb9M9LAPXJECCtkjUGdhaTmWKkaNWFkuc3St62rEYiVXrtuvdorFjfzLcJ7vwvC1GXTq9fviMW",
  "key27": "KpVXxA6AK2VLL8qbm5qiTEMYQHQJP8sEXipiw8EqJKreEiXpWBsRXxqhQrRti9iRUD1TJrYccXzRcFdXjYwWVzw",
  "key28": "67Uz14uJXTnpamGi4LWDoU6P9rUZwKy2qVqkQFpmLG4GbqNtt54nd6VocZCxbSq61KfDRTBWpcmb5JraE2orFwtT",
  "key29": "3hpKdnHRVyJNDz3Dh8J3UeLf65j47CNTJFupnksynmkJL5UQied5wQdRu7Q76aUgyLGv37iFYyAwpBXXMFdPgcmk"
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
