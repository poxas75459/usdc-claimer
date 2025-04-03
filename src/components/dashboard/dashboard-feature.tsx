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
    "4njyu13Uhu5kniuErPnPDunkPwXhpbzWTCpcvPfxDggEpqtA6BX8aFM85FTp36UrB7HKCiaLiRx4WkA8x3ADmvvt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LCFu8yMQULdqQxWwe4ZmgGUyoSeeYHcdcxZdb3LcxoQW4pLBAP9y2jACsNSbkWR8k7wb7UKqMQaJtpN9mvKKrHq",
  "key1": "3WjRndNP7fSiU8NVrw1kNNAESFVAeaBvQ2DUooo5R8sehVMLgcmYeet9WYyb6iVqkCk9wrAR3Nub8XKfPDAsr8gB",
  "key2": "KdSyDPngX6cjWtku7REiGc3VGh6RUvteC5zaP4fHhntGV9UaHSMcYT8GaWhtKPP8sPEhDCvY7ynkmQdqEMfBBWa",
  "key3": "5KGtykoyguMiv3mXMsL9VoP3TfAZfhfaeczwe8QxZMtp1af6yN6G5sTZw3gMQYWsychDoSpTnF5q9MDuRvf4cZU9",
  "key4": "4AM6zVJf8vdn3YTQjdsBt6FP2Jbsn6Ws8KRR1TbE6KRqyKRfZXjuFCmLtwNrvsmgL3LuLVPZCmw9qAZtwqVUEXft",
  "key5": "iu58XkG4PLFpGr7JzJqfVZGsLhbbtfaYejCP14vE4UDvvQYWLmqkzi5o2txYWHdBxY2ZiXjph95f5oUXBLmXMg8",
  "key6": "5WZofaKFkqGzFsLwejBtW8jTFPPeWa7TaYVsKMeFrZVrAiHU4nxSi2Gsoaxt85AN2CSFd5aCd6C3sYCXm6hZSYk7",
  "key7": "ZL4rzEED4isuvorP1CgnTCuiwiZTnvhySsE33CkVHgPd8XG7zdttwezuMRiwQG9tmWT4ghs1NHAkTSj1VNRacEJ",
  "key8": "4haoxqLXNH56hdwfKQB95zKSGfnxCYeJRUr4pJDyALcTLJ8dVovaSs3Y9yMxZvuPAV52ifoWHLS5F8vhiyURgVco",
  "key9": "UENtZX4PcJS6aCUcUp7qMngAGomWU6E3CkimqunocAFtsyuh22y3dCxgL9ZtiJgGpsi76ywziXssd8MkXcV5zsM",
  "key10": "4WDtJmnoj2GzZyCvfHU4FCaT8BtsVS172yXxVc6m6ryJnhsa4LKGKxDFvWkjeSD6QXdZ9TWQSCFWAzkxMGn3vtZS",
  "key11": "51vLXYjrQzkBtV3HxwL436VBPDHot6x3KutwCsZ9GEbV5Gh6mwKAFmQtGHcpSBmEbmkiRfV12Di1AdVr6K8hLsYG",
  "key12": "4sJK6ABajQpPCZ4ktzp2ynCCmfmGmCqZA5MuAACSmpEkPvbKMhDCekLtjanxDdGx2WzKd9x6DRYoTmb3zDjhnvZj",
  "key13": "5z6uuB4LBBtKSTavV8EQPFWyjN9LEeGTJCXhWrFuW6Y5Y9K8Mn67awSwcFvq6w9KZvPAqHGAaSoY2EzTB4oeBwhx",
  "key14": "w6qy2mfYUjNWGd5p5sWbChxwF5iQhY6Rk85NUY2XtkCjQq5fSinwfSt8G8SLG5v5yUGuc5VXFX8iFjYANkqNj1i",
  "key15": "5eH3aDPQZ8LJet2TGF2erZPDKHa8suX9mVseFEHZmPQ1WGXtM94XBh8tq9JBBrgdPwPKYgqwPbwVmvLU26U4ZRQ",
  "key16": "5cuGEZsgMkFxsXN6A2LXeQ73CEeBeQTsGiJKbQxtMwXSDr51DXnmvpcugi9r8u62NmY8ZWs6XWCSXPxu8oArYsCW",
  "key17": "2stvNZnBh5BKWf9tyJzWCCA7X9mHrn5McrdA5ynFYDYPmXY9Ta1r9hgxAFzG59UhKeq5EEn5fYLw8ug3yTGVunW8",
  "key18": "33pzW9nfqjKiMvJnLBcp1MTx82VFfdgGx9cyYZGQ8Cbs55cYzKM2cJBE9f1Mu9LX5szUyd421Fc6Jed5dPjtpxeX",
  "key19": "3sKEUHguJgEKqajh8WSte3n1Lz6ZHutm7SZaa5GUKBHjshXbmsYfm3Y5Uu871tpoYu5yWoFcL6b9dMYfZswFrLgB",
  "key20": "46k6F1Wg3k94W9ucaDCQxXchCvdVgEjBNdisTfH89ZT3mCFNB7fKkYvCz7LMQReVgdHBspLZPxmDYBNuDagw1GcZ",
  "key21": "5SuoRG2H2Y6FSfpEZAy9LkuUEpkmTjg58yCsFMHBkFBmuBRYHrfnnxkhP9DWQ1se7wmVrXJ3kfRPPD3tioX1nXSv",
  "key22": "m8FR2oGDbgav8akGyZYV1tUckw5HZmNKtXrpbBjgogSJZ3nU8tRvfsUdWz1gQxTuS3eJ8L9jsgjfMabPFVN9suj",
  "key23": "vSKUdY2BPEQ9c2C3NPZokCNM3G5JzbU2LKHrWGZqFGea2hQvK9wSnGpi1SWiSR7opSWXi32uqmkzsJzFmUYjbNY",
  "key24": "3iFQFCPSZyhzKUQv1rUK3jE4jsJh3xqG2sZ3u8tZViShFRKt1xHu6WDrJgnSYvgNjLsRx1VkZz2mk9ieJwyfekgV",
  "key25": "5Tm4us4kftgsQLaoTSJSMofDDr8fw6xykjNvXZwXa3kqYRLDoRn7TDapoMzqb2BZVYSV9X5RDff31XHqsNcMnwb",
  "key26": "4FLsBXyeChDsXgKZFCb5qcN7YB74k4FEzXnczUSDzUSMVEKNxCLZkYkACC7yHWsB8TSvou59gv95WgWQQuHzhbXz",
  "key27": "5toij2eEMf1qT5ZQEujXazGNH9iuUMG7Evsh4wAZ2z9Khjr4dJsPJ1tTLMqzHJoFNZ822Jyzg5GWzdQ4PwCL8dYS",
  "key28": "g7YeZ558EpupxrvhhfiRK1AMD5YaKe1YNZx4RvcvB8MkquhoDMoomb6xaJGHm84SwjBTj7B7pixbbpB9DVdhMFM",
  "key29": "4y57dJAVAVSsHnYZEtZUzdrQknW1U3Z7fidmi9eKJyVRqEq1KC1zn1ErfHasgu3yH8EuzesFhNYHaFjWS1TLvVVw"
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
