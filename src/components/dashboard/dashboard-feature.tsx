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
    "4n3NmAn4Datiy7N7oz3tiw6G57G4m1heKy2UkVNmWGqTCQpzJrxRgETqZ5uwKj7mU9pFoUaKfhX9Vb4Nu76QYXho"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HQBiXgM2t1N63CsW8yBnp9BUuN7Aps8tD2FfyxKGSkzR9oaHzf9d1rY8cpKFK97TFhif7wDVLWvRSMRjDrMxZtV",
  "key1": "2YCHe6tGT1YCdGAWRp8XMUmvsjdQivHyXKWuLtRhncWZH5TxS3K7h3tCn7BGgXWJR6U6bNJuBZZaBjmr38tEvnRp",
  "key2": "4xX5kYamW1U5V88tSSV52JZu4hjqFiBiMQdyFQQYaEKFHZxew6zZkiLZ1eGGtZY5a6BYTDrQDmMSNbGdQi5wrnu4",
  "key3": "5f8J22y7v4BkfYktn4ABkbVKnbMSVB8SLbt7FcDgrpZD17TDV9QzcE161voduahWWEhYLG66ZFfw69CCwhCjVQ5g",
  "key4": "2iSw4vuozay5yurNkB1M2hkF5QAzFbJ222EE9GzjgCy9C9rbNxe6SfqkyXtjstq3qWgi46x1u6Z89aP7xANhetsy",
  "key5": "2GWDVTbJm9YQXccfyY5hXoRpezmGW7bdBXGUsxxXcTLQEPTm5kUL5YU1UjEDKdcKNsTQuePpZCSVik3QoHHnkorF",
  "key6": "Cic8nX4nKbjfwFKRG83f95NcdAPqxXeE1Eq74Q6FNWNYcwoUoyEzirqNPdeHb7TTgVNy1BuxFNfAqngEHpY4HU9",
  "key7": "5hdxQbmfrkYLHH6E2Ca9zYqsCobHDCSfba98QMAbdecgXJrdhvHKKb6VAcxuZeivbXP89UWkst6c7f18FohwF5Ra",
  "key8": "2txmNwGavqLwH2ZTvaj456kfoMjuNWVbJwZDa14vGrGfyWHZcuHHJDFs9ixiPCg5CbTa3dKwHmNzQQYk9oV9WFHo",
  "key9": "4H6GUHuupAcLtSkEsvhs3xwPjd4zXRtaRxZyvnK5niV7zYiHQpiGCJ2baopgXFATExFbVWdbt3W8wYqMR4oYoHuW",
  "key10": "642WnHj4fecEzx6mS6uGogEKbFfdsiJyv7j78ZTzUp9Vm4nAPguTuZ265UPxtaHDa2AmaMc5n6e3ZvC22nKVvDER",
  "key11": "5xFGqAe83NaZuhvwQsiRmzEuya4BxzqZ3Y4ChkbUqerxfWk1QncM5xUsR6hKB6juTzEa8aDYhgGFpMp28sua89g7",
  "key12": "4r1W4bNUd9YCdKRcckBM6H29vedWqAxrRVmJtW6v2NjBAvwdh6wwgqMaYPvoztngszW5rfNwvvd2JrV6vdgNUbf4",
  "key13": "5evNvHRP243sE8qwwVtFS8CafRuCwL91cySPvnToXRoc7NywvP3K7F7udHzu1mhW6TRjMS5R3SVWPxkcMijDP7UY",
  "key14": "3HxxqN7RUHBWSd7oXFYhFrNcQB925YPzi1PukVJHD18ddDQP56Kndu8AZQfcbbGPiHeSrCJxVT85SyHKtWKLc7jA",
  "key15": "5Jd5Fo5RkS2zg1oR4DzTkEZep3Zad7tYy4T6kFcXyu3K2mWApm7kVEt7mNeqpSKmqZoRSafo6GhLiDVrL69XQXEp",
  "key16": "3GDDV8asjqBm4wfuzzxgoQWpCsftfGMHiZRQ6GJq5tmPSk65vmqpkHNzetXyD1r5nErS346okVDgVNcBAxRfopDz",
  "key17": "DwadYySKvGwQyvgRVwxiYeCHZpiF8n3xzTUFFgZTSqhEe1m4DSgKGYnHXpSBqfmBxMU3cr9uSSecLqkq3touot7",
  "key18": "4fpWFf6GFXPqJHarsF4DzswLGgQebJ4cnAcAetMuPDfd1443GHuHmATtUsJHqwG4cCQguUqw7eCTGHJjFi3oDuNV",
  "key19": "tmr9aFaWxzujdwbcR7Fd99Txn22rCxYwRe9H8NqS5cMjyo2SU92QoPhSYQHc4j1D79H3JGP7HiApvKDjiMWeJce",
  "key20": "4Us59otEzZ3sqcrbGmHXQCyG3S7jymAN2DPnmReftZa88ao524RnN5CrgDoqasobNmkC9TjcfjMxPYweqFGXexEB",
  "key21": "5sbK1xmnM2AtW4XqhFCq1VENWrJY3Ka1wESYLLuewhdwq91VdmrLSyjiG5as3r1TuAw2iqDXTmySegC5hxuSqkSh",
  "key22": "461aPxra7pekqZE8JegH6GvnJirYu7qMSwWUuHxV7d1JfAyz756xMNqyY33WZken34ZZvrpf1N5Bf373vz8tJqjC",
  "key23": "2TDLRgi6GfpyV4J6FEPXf992PwEsP1Ki3jPfpiJLc64ZzKYzKtaMaG7PEL8SwBQe8VDTYzexbtz6va18fMG4pqMS",
  "key24": "2hEabr3ifD9m23A7AbvH35s227G8639SxEN7eRuv1MK3sXrz5R6o5FCvp1k7ZVgvG4oTrYtuPnfFn5V78gnuNZ6m",
  "key25": "2H5E36S8dKvn9rbAJeujo3GiybjnMtxN1iB1cdLexAKDH3jbqidkPAy1zFHNF3HcYh14sPzhD5jVuCtnubvqNVwg",
  "key26": "4sr2KH2AivRPac1vJZR4K66JF6SWXQqrarbKokYC7MrHvfs3DHnPVhd41zm8jPqUeyE2dikUpeFds18UfqYfFMDf"
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
