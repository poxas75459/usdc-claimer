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
    "2E9dQrBridMFpnTQ3FG7xPuX4vVh1mFMtMe3qPQCEHonvNr8WHnaUNN9Mv9SFQhjC2D68nVWPMNzU8jchTJuZE92"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MqnDC9R3rhBgFKFftgUC4d4e613F8Bw2rTXNUMZYtx29xiM3s9Vi8WsvCb9DwPWcg6Ye4RH9JuBgA7gaLNixCCH",
  "key1": "Jap1Sh9rYYZowCvMzZeuQJDQZgTUc6scR7nGnjiL1icEhB8M6wrTTtScxYdWys2Nk47rWqrdD3SXPdH6azoTs6W",
  "key2": "21aV69kYkgqcsdLJ3QhdSBXCv5FyT4ie9sHQjNJaTB3bmDp4nWfAeqLqRDChxxz5mdEV1mLTXk28S9KUeTx79Mat",
  "key3": "51x3aUvGGbdPZP6BPC4AtvzKYUSxA2bLqQiTuddbtSW7PgDXciotzKs2uXPLKmKpFetFkYdoBK5UwSov1ppjdmE5",
  "key4": "iNaFukRPUW3YLstXnkdsXpbAMN3JGGwe6JK4qHFHi4vVq3icNiHsL4hAKHPSwRrggvwKh4djdiMsxyxbxhMinJs",
  "key5": "ZCAGSY3uWv3EVDvmYGnFb7EVDkbFdcoCXmmZ3GuwMTgBfBjeRkrABdhX9xBhXoawiByAJkRZrU5XT9BRyYDdFVb",
  "key6": "MjtT4J9jok3WMNikS6bgwMR4xPsyXvuXG65uEvRVcyHQg2tMoGthfuDCNnUwwrom8dPiTJpPQfqtf9GiMPd7XN7",
  "key7": "2h2E1eSCMMTSssFbd8inaHvbSg7btAckbuXVMLRYtJfYU4s9b4C5jRujYSgxzegddZsmUhSEvMJohEheNXMwoKNu",
  "key8": "3yQGMDaq6XnUjEH3bLmSJ9oLFQWTAFzk3cQb77ihAw8R6b3zCgjeStf5rM3pq23vUf1rRjTDv1q2Y6zA9GH5eR8E",
  "key9": "3oKYTJxuu5tF7jCiNQpPemmWSJ9xWqiVcFyJF7xoCA46mJRWA72GG9QdfuktAYoVE57SJtj83RFm1XsZMuzhuvhF",
  "key10": "3Kv8HStmG9HP5R6dKVGksnUbRSi34Y6sras6PuDwyq1AeZxFnnTHzgodUWyJBxepgSWZbTxLV9SSehgq5nmaidRQ",
  "key11": "4HzX1mYGwg145uswtrkH1jCQhJKC7SpeusiKr9RfjhZW4az6Wgjhmw9U7vBdeTtkbD7ZGLTjkfuuWcJZnZMLxQ6i",
  "key12": "4uPoCXUda7ZtusPD7M2oDDthG79w1tibuSA9CdtwxxuDv78sV2wgz2DGn2cxMjECX6ENwXUnXCjpe1jLnPPAfmE1",
  "key13": "4wMhGQYMpdrZuH5RwXtpRu9JVfPbqxWURunBPhGXXJq6qFUmP9Zx3SvZERmQx47yLbDE1RuoK2wTVVghR8zQJ4kY",
  "key14": "5a49H4FDKHf7rCxziX2bqBmQyzMYHWvwxMk7AA7dRgRFjkSSXhRn5kDGdi2KehAiTTQrHFip7rNfEbECMNgYtT6N",
  "key15": "4gBtbnPdMpYxuyQBosLNQtbz1NWyB9BUi1f3bUCP84v4Nu5frYo99B179Ya8baxmax9Dv7xPtvE4cgMB7RyZwTyQ",
  "key16": "21swrm3pgFugqmTDVxAGR9Ci3J8j92A9hHYSK9eW3zxB5fUrPp3pKhNtQ82tWyWAMiB3TF1PeeXBW8srsJ3nsWoP",
  "key17": "S1d4EVQSvSCkq5PQGMmDuytuxnnsoGFvrhsRrZpZYzSuD8m9meXNc8XFf2wDwtoVrU7mEUkhGfziq826zZrrppt",
  "key18": "39P22D21x9gD9oRJ5SruQ1zB1L6pbb1WnggCWMKyAubCnmZB3hRrMnTU316jRmXABRxPKCjipdounmpoFhGjDrzp",
  "key19": "2aQoQULnbrAZEH6wsK4EbDuJTBAMUv7koJ97aMgPMeqoH9t2a4dcE1NvRoYmxAGGn5uLi2KDsRYjdLZPDZzA211n",
  "key20": "3fvt15MFjmViovCaSBtjHztdhum125uv6xRYuS57R75fe4FCSy2fw7EsZew5Y1RtxnCZEdofvnEYExKGuDPVFQLL",
  "key21": "xToEwc3bC1fUBCQvcek9zzVFvDfTExR7vMDMDNdCo4KKzyTEKHcE7j7eWwimBntm9bPxkKSvkZD9nvVYBwurCcy",
  "key22": "659jdiyJH5xdpF3vGDKCjzHYYMnGxnwgoctFPC5uGsK9rahReSMYaujkTnvyr24GHzXM48TQ4fMp6R3Ga3hLdMV9",
  "key23": "3YWTz91pWcosqEjHChHjXPx9YEfM1sD28k9qda8Pr17ebcguKetGmsfYMYQt88wvT9mBWhLtSwCMwY5smZ5GHa9P",
  "key24": "4xYzpu5oSP3w1W36vR31UATDAyN4g1zwyMyupha1wihP95i11VQs7hAe5ypYzVHvUaH46CdsRYE9VXU6drkz3kNq",
  "key25": "55tjN3EDQS2Ex5sHBfk2X15weXgEF3PXeB4Gp1krMUTfi4bexRmtHcjwaFHNhxAwQ8c7bozkRYZ6csi5sxVGc4AF",
  "key26": "3yTiCtmRew2q824rAg4BTUhV5QpWQKqXwJTEhrxDC3YYKfBbF4DUhD26X4XY7YmkwJxceUowSf9FtnzuEVoQtVxf",
  "key27": "2tiwhZ8KMP9jCDnh7zej5nDoxEXLJ3WgmdUuTHgumgsEiYwboaHavvYupJ5s9GK2ztQTfoVkbMABiegyRi8pSXb1",
  "key28": "2HCkXNR9LKnnX1zpj2cgzKHjCzUiFamPvrmrReY29LnNFUSTCh3vXFRVrHwBrCU2VUgGqkh3NDYUQZSBZxk6Ymtt",
  "key29": "3FGEsR914aGAbY5HGdnz2Vkq9ycRCb1GpBGvqFYEZj4bBJtz4HcCvb91omhRdHtvVtB6w6pidoheWrW7nRPXc2dd"
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
