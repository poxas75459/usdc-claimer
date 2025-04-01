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
    "5Ap9Fh8Kmf1ba5C5DYodX3QUVq6VFiwEDrQCyCLKMnvtWbvTPcjNrBtbGjrMC3vky764oDB5UDMBkXuAiqgjcZcH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4A6mQqBY99Ftd1byrvQmXPHSCSUSuVfYy5CENZPDLxELZ2BGGSQfgimi1c3oqRGGRSWrZ6vDdoaTgDPAYbzZLzgi",
  "key1": "22XxKzsrxhsNacYhbpQ1VYBfRt4aXUoYgUoZgDqx8P9kdnuyH5e9WNoJPgYRWSb7ATSWABMzgUiUNjvFaq27QARs",
  "key2": "424Rd1eYs22Axu2tzYiV99wJvomPYuvecBF3TPvw7HRYwbwNJLMgoeWjPrxVTmZCw6y5XGkKvxuHn3AYKxoKNnS7",
  "key3": "3fgg6Hm5HafetkM48Aj3HrafSuchCdmG4s13Ly2RPyAmkaLsC6Jib1rCgACT1ZHUf8i3btrenTe8bE1uSJyqEG2S",
  "key4": "4suxMfN7zuj9z3C9aq6t5gQrB6WBCw8wa1fkpXez7FihFeKmJc3qLejVMqMxwKQY5TRBS7or3b1Ja82PZoXB78bA",
  "key5": "qpuZ5oCrfXJ1tK5YqhPRFxMAzPRpGBCX65jGpZ3Ng2Czwcqa5iFP9jBknySyZwZBcMVdLM4UKdQeQD8M4JZfTTi",
  "key6": "5j4127HPqu3JVtPrkEt9rTuLcHTga9WfqHbnCr6UNKKEnjDLYfgZFg3mHmx6v27BWXTeUNff13stZ2CFmxDesqLc",
  "key7": "uePEVeiGAAJh8HCz7JXG2eZMqESUZkE1THGYRp1ELj5E3LZSyPQoUviuV63AbCLoUXM48Ag1N8tGRHz84gN9URt",
  "key8": "MEyQ1Uu649jcdVRrpNvLgQmXNKGttQGHCunbAL5hVUAj9bkXTv8mPmB9cDuox8pXVZvWZKGaCfLnZcCdsdPRMBs",
  "key9": "2V7y2ChCRzMK13pGR1ToBuT3vKp5FSRQVJ45aGJrsY693VrdwQckemQ71Xksm3tXB2ts23QJdZQ1Kwc5xPcU8d1Y",
  "key10": "3Tr7TVXFrcebRwBMDospuG4KgzKAaCgWvhbLa3t5jsZRjLWiTCyNodUFkPfuEWtg3eEFaG76ZXEQ5TfDWYoztkXe",
  "key11": "3mH1d6RbYbmEnw7TNM3ML6JcVmGqta14DciErP3ZiTtnj2WswbhYkYjKt3n1d5jsMBL12D1fD5FPinM7QpKuR17e",
  "key12": "2wSThS5MQVqeSRJjWVQbJCK5Fuk1DdoQk7YrRMtWRbc3Hd5ZR62adzUJbjXWKp9YEArynqYxg2rXfApCBT93mVzU",
  "key13": "3NyvjZMUsK8u1oK3cSesjtHqXtiAtzkmG7DDcvhw5VPPqmVcoaepWh7jHyBK7v1uE881G3WYqmXJzTUrMULt7oHH",
  "key14": "5hjpwd9RogvXowwRdE6m52MkkV8PqNb6vzAZhxVRqappz3rr7AVfqRPY2zAKPGQ73gS1wVr9AdVJNRvaMTYG8tPK",
  "key15": "5UcGbEWYP6jUvxkdNXrXXiyVCYzAKJTYzSpRSNUgsMuTg3Bzu3fkvzexs9XBCFJ95uYAEhqToydUJrKRiQzZyovb",
  "key16": "2fFoMW1779RjGmktnmVkeDUac9uAqNCzV2qAoYgZxLuPt2wh7mhmsKsBd89HymLSQRs7LYe9MjF9EzLzEoW4bDw6",
  "key17": "48uEUB1sVb5zYMfP5K9XVNaNN4Ls46jxNWkww6ZbrNpxmLWdu4pp8prJfVNxzRymvRn2HApu6jh165kLyALbjr9F",
  "key18": "4eiMUZHaE7GUH7W2GhbbHwKtvMCxt7GTeKyeYppaA3dbbNFC4MynUfEtZVL9ofYXL4TmjDKR2kDPLX2JzSBYvHcv",
  "key19": "52qe4YSU71PQEmYQVqEop25wuazY9FeTyZ4csnz5JZiCPZbmrxUUvhqFYfkWmEw4tbpHrjmL8U5tWYLjRq22JvYo",
  "key20": "iit5WVGE2tJ6uz5ZYmsNGvzGodFqLQZpZtAdqJMsMZQoyiMY4fEgitqXPH1b6yVzue5LpmDo8a1utGuiyHMtGCL",
  "key21": "5mriEL2TScNwY1UgV4wA3hA8NyhTVYk9MsBpVGg43PkeXsHYskXJr8MxESKEA8oJ7SsmDk9chz9uhx8thHs3aeXh",
  "key22": "3VeVZ4weSSj7LYJ99PpkvThtsLyxfxUoJBJZvGsrJ9SU6VJo6kGUqBks4x6xBoAZDD9YzYEeqsCMk4wn41C9pETv",
  "key23": "4hxapenw6RRfQcF2AqMd3TuMdEvoQY1WFidbcHeMEMPinaSSAWv4yneFuxywTAhkdxapP2ngLGjMiZEaehEmzMpm",
  "key24": "41xYKaspmKMS1eGj1Yk4biTDED13rF6za5McD5tZJqkvJZFsD8TiiJnYaxSR6VsnuqJ5NWtFv9E2XK3eXzTLrPkP",
  "key25": "65CHHGTMH6EmsiED8eC3ivt5bD4ZkSyV3E33r9A6Fk8ZtqVPLK723fKc3wn1VzxvjoqTtKtCdh3oGV1R8JLpVic5",
  "key26": "2MWz8oECkah4LpCpSzq6mYVk27fZChjeJehfyguT9egmNxt4gE8qMuGAtWGz1pLSHYoyDKbogVcA11G3S6vC5fQL",
  "key27": "2zZGzcjVvGWTkeYBNcCRoBzK5LgFZQXu1bEiTso93y2LSvmmveKyGEPYV1naFs1uhsvNtq8H3hJBUtN7nhT295R"
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
