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
    "25niLrMUW31SqZqa1rMeD8dw7TnBZzVqUiCnMZ6DcdqTBTwyz4UoCfkxPYWhkd7yNSUpcQ5gu1irykCTK767oyin"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7Fi8g2bJHSBXtAmY3dfyr4adYijrXQDNrFExvNy4DLcWZoKH4qEVjTeftQTJAxMkKzKzAgbVFsHgTw3Lqy7XYWW",
  "key1": "36qvffcTym16y5VShtYa7zi7gz4vArwTymdzFdh6KbZV126pJYTkVNY1XASYkaBg84tUV22wPqUTqiASgEBMCnp",
  "key2": "2fMy3LiBLxiJ4Fk73hq175cfgP7U2UD8LcA4A7romRQ6YwPFMCCYrs3ynQDsp8qhqYGfwDTRvzUFgW8ysPKJMha7",
  "key3": "2eEv92PLr4T9MPR2pyp6pRJ4gdJtBFpBPdkSWLzPfEVAdGGSesAKWUrFkXH85ro8Sd3hvQLFJQBP1QXB6q2EGWZF",
  "key4": "4N721Q4n6RqxuiUs3MqrQvKvzomAzG3YFJLpfCKHBfCPyaDuivApmtSxBYEoxWWZbmqgNwyEtSUhP2gGw8ioQjHU",
  "key5": "5eQzqSqiH6bNYyTKkXi6eAw8DNUHu4xrwTxPMmSuWyBnVceazkYoJk4XMHunm28ACRmFSJ3h5J2wxj5TQo7q81WC",
  "key6": "p1QLdu6fodiuG4vo48DLRkyukY2ZcGBQjU6hrBE1bQBj2bfbRSG6DrDrJzfPtNc3QVRVMvfYNsAGLvFyvFPaz3s",
  "key7": "vTj8znCFWYqoJfRRd2uhNwrc9NtrKZDrUfr1ipgPmwW7T7E4UysAR1HRf5m8o35NhFNkWN4b6KT7rGYaSSfVPeL",
  "key8": "2vkYYRh23iK5ksry687tCzM5WvsMAomJckNvdGgtw7e3G4jgWUGmHKveZxWfGUGduM1Z1tfjcKConC58JqomUoyL",
  "key9": "5PEP2eXbtodpMA51XRXgsS1AdBRfVGzT9U33hjoHA42SGT2qqe3RXyrBaqQTXkkUeMSj2hbggbUoadUTtm5SBWhw",
  "key10": "37XFjCNzaopxrGuRRjRHMzf8y5iZKkb8UEmtLucAcazLy37KuZK6quNiYH7FbNFpua2uBFdC6U3CNHZDSFymVeaK",
  "key11": "2mLNvZtSSDUk4Rq2bGS3DLX5cuVUZTXY2dwexJVCQ2AZyFSx5MaUP2ajJM2iTNSXcZrnPssfUuJ4cwnbmXumEZyo",
  "key12": "5gBskGU5n9Effsqk4TdfL6wqpPJUK3C9SQvDoUu5YEJy8uthWHBoBUimurYU5bsqrwnjmejUaWhwiZ4HqMojEvbR",
  "key13": "5PGW9zP3aWXCN5obHKpvin2p4sz4KziPsH3ceJZ8PEsQQdywsNtiKYQbG5djH9e4C3WZE9d626ZEjZ1Avu9fxgcF",
  "key14": "2FTzgBbAsDAgu4FuourV3yuSq4X94cdCyxb4yH8eh8T3fqKFVtTZPDUKgzzf7gyjjqrpzJZZh5EV2UfFWVpskyU2",
  "key15": "dYKoA7quHMg813GkhrPUkRHHrSRfvW2kBBnuXhwCummimRY5354Lj64eUtDdS53upLESzncwqwnAyK8JJeL4omq",
  "key16": "4tMauseVrBGeKaZbBqps1QofdxMqWdtKhjWc9PJMT684RPG7S3aEADATkz5fA6J4GWWM6CSYYAjMg3m6fCoCjsAQ",
  "key17": "2TcFcqpTDwaMJzpSTNKdxTNqH3q8B2koYuzDqTuDpGQvMUaQ8WLDBtdJHjpofQqcTEahgDRFCwmv38dDSoQfZhQW",
  "key18": "4ekEfwCguBznYijwLZx4rxSq4n1xrBgu5L8EQdhvVLsNkWWUs1CAEUnKYRB2DQ29hEGndQZpVGrZfWP4iRSVXfSH",
  "key19": "55D6bqiW17q9FgPf8WGnkBkL8b8f2nSq3E47mr99ZkaVsbHawb3GwengtBguC28b1fpvhutGgKVBHE59Rvy5jexK",
  "key20": "2JCuCQvtYkGARG46ZAW9qLWYkV2DEytPGy9XNS3t9Qy5XnKQ23f61srB9ocnF9VAtSKzxB6CkDPnCwNbyqkDsCrP",
  "key21": "3tdcxdYWzFs3pu832khWp9i24pRCDBPaPpZQ181jwqkACqpo5MGSm6MQeaxMZtcma1KnD7DxfpWRyLsoitzuioXf",
  "key22": "5NGwQjhJTrTjLtdXGtQQBJWgSjxJ6ehsb66bUs5MvkUv49esrhfeFzTZyJs3XuXRAvw2uqzaF8Fm4LT3QH9Yh7AD",
  "key23": "BmiTEaFmACkdRm312TyAi1WCYeaEAb8bu7T5oanmo5GmP4A6nqA2z7KGDSjjRt7ws2kZjEsYMF6tb159MTjxjuk",
  "key24": "2m7zr1UEQoHH3qfPEmBqbiWYXd2jZAcGt5KHji49saiHQVqQZ56vyojYK791e6LwHP7KFgZsrw2r1acQKDQg9HBY",
  "key25": "3AS2UfyrFAFXaF6pzyEU4jYM2gaVJgnF6zWQEmoEHa6rxLpJuagkoDFPBfLXtE46oaQKt7Bwty5DF5V9eLHcRUKc",
  "key26": "2CKjDykXjdV4dcq3ZJc4nd2VV6NfbuCaPCRc2eowbQ1zfpMYpCZvK9BQZUYDbcJUaUpwvYTJU2AgnK5g8RdKVf5N",
  "key27": "54kFpPBnVmkWbiQZKi3SpDUdRgf51KxfsNvn1dnkC86bM9vXwSGHXoHtYvUbHMgAxo4bpxqFMGDv8bKym6G3EiFq",
  "key28": "5dDwoqGf95hBVVpUV2H3M4rATGk2rRjDKLJcS4dAvQFg1ZisLgnMGWxoC7MefZy1AeGPjBSfqb3HT5hEfsJpxV3e",
  "key29": "5ZfoFBoRtD7wpzqH1tXbLVpKp4Q1Vz7QpD2sgBUb44dTNT6bepp75hUgZEVt7A6EvQPgUTKj712Gkr6XQNyyUqKH",
  "key30": "3Edyxs92Qor5YKVQsYizK3Teh6sC37Y3AjhbnMCxXWYUA4phcgnJ4Rb39FXBaUokYhffeMtfmqTg3UF1dMyjfHkk",
  "key31": "2AaAy3vRAque7fma1HDEgShWEgpnbjgfQsRss9uhUt2VPFsdKyvZDZmcqDuvpUJtmtpkvsQ4jiMT3T4A5oi8wcQu",
  "key32": "2whzEim3iEEXTZhbTWazWeKtthA1SagPHM94rjZoqqPt8wYJCWh6ZdPSHodibMDZjjUtbsNX9hct1FYSuNxwnYtR",
  "key33": "5obveCap6e2Fe8Gxvq3UAtXH4hzvAkGAJeXyX3D76usyFyQher4ywco6BFkWnSC9YFpwomZRavzpTjY5h9rX8zGi",
  "key34": "476TQMZpkg9KYdAUmDj9kmRJMCPuKuh2WycL5dkYvYf45dugXopbem2p5SvWasn6oFAxvG6Thc5ViyEZdtb4Dge7",
  "key35": "2LoGhdai5R9smrZ1aTWc8n6FeMherFuwLKVppJkEwq9QZzhzZKqyPFRdKSK1xhJRLeKxW96MywCAA5qv4R9qFPCL",
  "key36": "2WKDeCWr9WAXVpKTM7tLDSSu8Yy77cjwVoT8T4TEDqRxC4V6iokZQqYaFWiV4cZBr4VbGNuoaQuga5rVS3tWUGMS",
  "key37": "67FvpaXLq28Hmnw7rRnREt9WWQF2YHCHnU4YWXvrAvLakQFxoX6y7fJR5NvokLTGhaR4ty4FZzGq4ohrJZjNaqQd",
  "key38": "5uCg4z1V338sF5PVZJMy9J7nykWGXWCZSBePZM9eNaaY1VpZcZgp96kdTzYmNhPZvmgp6fdtfWE2ekxuKoUXjNJa",
  "key39": "rjVtde8xmPr7RZnDLmouwKsXpuuT14h8suwQxC5AA4Gff5fqDjMQkoFYMfk2ee77uqVd4fonabxweVcRNuiWdH2",
  "key40": "33cb6PvvVmZWYrfNR8dBwLVQiuB67JuboEsAM3kDo7JYamVM4barRUN7QMZFknW8gLpWq9fRFnNTsFotEoEojijH",
  "key41": "2NoyPucfpHoQPVz846cVcR7MpEjRxvVpA5gGoocGpAAQYT2z9FMt4vChuGfRSt86JzCLpHVajgzzNA71XSWLaiGQ",
  "key42": "5XoPNjVkgb9RBN5v7rw83h538BiautaYvGirqh1JhRegLX46NMCqmQD3tpZyHg32oKxi7jydPyGa312roWuLFipu",
  "key43": "5tdZWqigiFrcTM3dY9ns7eQgwgZSJr739NtF6KteHB417S5H5hkSHbFsUyAqXDSW921HEUSCzXLnucndrQyvSteM",
  "key44": "2KWBtgrUdfxzjrmXABnrgoRbEVeky5VXgh7mNk1vazsScFoYN9g4k99fye8RqjNstJU7Hki4PfbRSgSShqUWDKbo"
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
