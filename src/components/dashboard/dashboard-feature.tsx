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
    "BmhhtejfqBH23v9EVqz4ixkrhMJBG2AtEcd97waW79WW12mjCTnzn9dqtdRevovUTuSdojwQ19Pgni3mvEJdbgL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uHDMk7bLocDYLDHwuxyJpY9uHcxq6gBgMSQKJq73seWNMsB3u2tdRWaumjDemTPU653k6H8VxZRiNeRPrTvvDew",
  "key1": "4D1E5zJ93yqMZdSN1hSJS1Qp76vrdQsAbf2a8RBvQaTKQsjzX9Y6VQPeqN8FoekzPQm729mTyUnJhXFB57WFRrvV",
  "key2": "sk5sNktyRVnioY3B4fFE3DA9oqXcQacn8nMgtHmKY2k759kETwPCaEuy6Z7oH2mfWU4q9LUrkEUKaxvn4QsfYyd",
  "key3": "61xGV6AVStit3dNbiDhzsebx5fu55mUb1Q3CcukcADDaHZmwUhgXaCrvnqC3LGdnWukHxQRhvg5cKqUPEhjr9QKE",
  "key4": "4jUHfSpFG9eojfQVEzMw97A3FJTcyVQT2wqK4k9YT4HrN67ajLkBN6TquJNeNNwgySrt5Sy1TdjKmJoWtJKrigH8",
  "key5": "2WtUEEp912it4j2omUAPRuWb3VXmLmYCGBtW1dDRo5t3sYBySgZcF3ymmTcKXpxRhwa6kx1Rpe4jLZ73XSCH9XMp",
  "key6": "3qxQsZjvpNDgb7sUW3d3t5TstVfAqjHcXk3XdowkvsWFMV8cKRsrH6mMtHiiuyfLBoDCuJVAbNJDTczQHMocPMCb",
  "key7": "41rGCLnfX5zbAaQ5o3S2EwtGdvAFMTULu7F7uSj2ZwpnAWt2S1ABs7EzhCnDViN5zDuzCSRavZTiHp6RJBJUUqw8",
  "key8": "4dAKKK8HYTYkpFXRe9FRTJT2DiGz28QkmaUGgar1d9YAuQ8KBHvTbK7o7oA2fmcJWoECKueW6Y6aM2JT4TvigoQu",
  "key9": "36LxaaWT74DoUxwJXkPdW7ug4Za4NLpdU8PLccWNcXP11fS1KKDtWnS4Jhw5gvzogvT9CS9zUEW5jRepsUAZDSLC",
  "key10": "3yju9tno39uwz2h4JwJ8stBEzLRDyazfwefeVyXaWvjYi4PFvGfeyyYBssLV67TwKckb3AEExj6abzgdEcgQUWAH",
  "key11": "4BNvoxCriTo3U4by9EYVejVjPcsoiZFeWnufYxGW6xMjUe3LMA6XgUuWCh3SFQCwb8LfePc69hvFxCy2N1SG57RK",
  "key12": "3jTcdMa2YeRDm885GiVyMnpbxiWc9BJLnLUD1VtUni7H6hrjWz75xW3oiPkcz7CcxejMs44EaiLQh631pyfvhyzm",
  "key13": "4RcdE2z54pdrTtpp2tXZ1X3uphjN5xRSFYz2cN1SSLRtrxEMaM8gAMeqGeb5wDczsZFCnA2jxSaLvT1Q34FTanz2",
  "key14": "3se9xkqD7qY5c7UfBMTV1EYxCcC49mfcF31vfwWgpoCYi7J2LwGmJQAVDiPXU1LAzipd8d3SKgmgXMDxZbCKETy2",
  "key15": "5qoDSACkJcqXt6z8SpDTRkdoMmYm4CgTLTc9pQJYwVh9YnQuRS7Bm1xdU49XCd5AP3LHCQD63r6ar1kGY74cLWw9",
  "key16": "nTwNyN1TyEsV39WWbk3KHgdCpGHjrTyFxsFV1qg5ef2yXoBEnHxgPfV4Bs6ZKK5KCKSn1DMnyVn7iVN2qwsCKYt",
  "key17": "gCYoUcvmcMjArxeW5gZqBdrcJFmZ6ct1yBrAZzaSubotJsNqxmqx5LsveiHMe8HJSrdjPFMXrncDn5fSDn2wvwL",
  "key18": "56fXJwzNbd1cCeUoMY4eRdTy7wdbYA34NZbL3BSRXe4ADQcgxEJL7azLYyLHfy1pxvKZ6AWHs3zWrPFbf7gR5en9",
  "key19": "aHbPGrQkH9KK3CCxKprHpeJiSdUTveqQ7JEioBjo29saSgEtKZT4puTAn66ARjkwaRVfoewkxisQGMj4mEYysbe",
  "key20": "57uFfRHahQMsv1xsmdJeY3jwVUp6EP9uaUXzTSi3zG1bpVwWw1CF1gPyJCdZq8Exy9d98kyTkU2g6s9oAitGVqTo",
  "key21": "SVd1McG62r9gpfBytxp3WQ16XYoF4UFLZAurFaq5UBRpUWLhSaQakS46MjnDveyF8NpSkcYNGzXaVKejvt9oQQY",
  "key22": "5NTofr3D1ScxkMZjZykG3H1zREvcYBtA3EWsVQ8KZLb2NRQpzP7Ex645GCooM3PrmWE6ucBzDLxZwM42TsxA7w9V",
  "key23": "5quNpEx1RBx4n3Z3G5x1xYBm19mEULM13yoAXtJe9W15hzhNNfs61CKUHyHTBnwJmzVa2suyWJcHYKw42TKTrnok",
  "key24": "23PPZ5MLh9yAyHqWWbi51y8HmjGXeVTmN6b8wamdBnWM4KtxWnriStMWs5DWJncFtxdEuXmmMfokZLDcupkYZ25L",
  "key25": "bGHW6g67q5Q6swtePt1gahQucXdEchXwQK25jfehdkD3jahHDcpGA1JRyZV9SuXPW3UHJe6GaeAAvm6GWR5n3Lq",
  "key26": "3jeVNKVhMYPiufEYLvWgsTb2adjadxi5HcS2QCJkVws75VAWyixUH3tzbNWGzjXh4Ai1B7ZK82UoebybJpGHFuGa",
  "key27": "2Ehd9G6PCycYo9tgfH61vEmcGTohLauxgYVGSCUuM1peuGLPzm9Z5kqfkTyusSigk7rsFN8XxQmZhQHmmvADF3kF",
  "key28": "2PNTguBw7MigNeftx7EaLBMzdwSWDVx1HLNCQDReN5PgLSE7EiXoFxCzkauDyAVQtMoGDipRrmdVx3kPfF4Un4Pk",
  "key29": "vXyHw1R7SPjDaemQ8Tp1VmzG9bDjPuVwmdBHThycHL4i5ioZicijPw9LH3CQ6WK3YKgPVHnZ3taWZpUiVzXAgVA"
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
