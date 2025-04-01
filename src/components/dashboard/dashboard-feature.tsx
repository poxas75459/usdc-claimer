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
    "2Qcdncp9buScVC17Kkkt4xj5HLVimr6wwdF5p1Zf1hTBvQRxzhDDozQxQQWKrfid3Awggc7LxDVCHqQXedKfcHur"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vfBzBbHij86fGooK4MmBR4PHSYoGy8PgGnbGqDscBKxsEYY2F3NnPYNDoXBhakXqToFACsa4MpYLZcFVHte1SwE",
  "key1": "4CyoXG3vB7M6kVtZxn3onz9fVLFz1RNLCqFjYLSpuDhQWoBpPZznTC91QqqA2mFG73g8FsS8TzHM8J5Zwb25GtQ8",
  "key2": "2djw9FNqAvqz63vL9yh3gBpcvckD1qjafCtjnJsVHbhMaafPh9gSJhsGRwtFptyLSYrAj9dEKJxeeg8P3QJ761aJ",
  "key3": "SuPQ4FeRBXNkUZrtH9cW6WJkNf18GG6c21EHmjW9vN43MPdvN8ttvJoZ6ieVzcABbM1jntkt78rHFMA1twScR2Y",
  "key4": "dzin8h76LY9ukWsMHQ2vLPGAgK6XGTPJhnNqtZsRu1BbiVxc4NM3aFFHnoXUbDJwNGHA3edpEq2YCm99w98HVmE",
  "key5": "5hvNcJgS7C8bFbWrJ1asXoH3Syd6rxKXESbJQVBj7RUtiixbMxjWUhK6w3zsFEzR82z9a33v4wcQ9xfq3xhYEQ52",
  "key6": "2kTyvKiZo9JGQc5Fv5rxW1BnbYXYgVLwpuR3FmiRWbF1wrbAsyma8J631qzwpyAvVWfTQxzGSA1pbp2U7GKhUnao",
  "key7": "3FM8e5qnHxmPhkqyMQRvXnFbXgNaK5cV89Ev7n5cEaaZLJoY4LiVRBv3TUmvcYuKerbhxeVx3qEqNrbq9N64F4Dq",
  "key8": "4U8cKwsMy88CTfjjvo7yvjZE9gNupYnJBe3xLrRfupYZzbgQ6eJ2MAXZ1Yr1aLogVgCEC9BJVrRpf5vGrzXz6ANc",
  "key9": "5RsKseijCAQwwuqrQciqEPyEPdEeDjUEvPJYMJYsUJHj7qLzDrV62AbujkKyPimLL3kSsCWPkaoZTSBJYe3MLnG3",
  "key10": "5gyTG6WWzHJwFHE3GusxnBtRB9giVADRVetUCWKswtnFnzbHwDpbcV54WoYjYDJXHDzEqSs6WkJmLCJd7MqorHfh",
  "key11": "4PBzrDbT2aGQToK8LUEfAQipXsdNMpCXYwk8X3oi6RnLvKvki3wPtoTv9c71SHmB6RPD7Qwy9XcdMsjjwonjEM3F",
  "key12": "4hRqdYGQe1cLLHSfi5XC9oqfKD6LVEhT77FqSSVzepgxNP4BjsEjytFiYzE7wWUo886vg7c6DXKGdN29YkAEF9Mg",
  "key13": "3ubgzMkhFdEg2rWaZt9HwtUSS5ujPCfKgZmLnB5qH91C5JMjQx6uahJLjNubFRv7m4NLKNivCT6qZJnUcthM4TLJ",
  "key14": "2AqM7Lh22pU4RDqpJuxYDZy9ujrhUVUiRbXdVFvUjjm7E6f2C2aS1Bermn6z37FULRNizeYxZLcn2mSquDq3enM2",
  "key15": "2aRpaYDb7rxXS2iSjEWVkf3AR7SFrshCPVu8xYmCfDQn7myBpY4cuvt99TAwF8iCt8fiXW7U3JyRoJUkUwQU5v1v",
  "key16": "5PWy46voxq3hR4pyLMrRSqqu1Qbj5CsbZEgsUV7acBCG9UrWoatnjCZMza9rZdTZTTKxCE1mTgid1xwLJyy88VHd",
  "key17": "zquR1EkXxmysiakbug4BDEH1r9m1uvZa31iWceLRZW6tWe8KHoDrWZ2Rbted9efwSz6SgxWEVvP5rtUr2GSg4cu",
  "key18": "4Qqx7sWrXU9Jnm3BP12bSV88TB7S1RLMGJBH4TggSxyLWyN9SmbBq9ypXayxkRMisJjKMmAVrWcxVedUGWXKM24E",
  "key19": "PLhPTFtBXfzniLULc1DZUoCakcSFvpjAW3gYVXSoqmU12bThQ7rTgkz5tAT63AmQXDUUCe8S6mmRu4nYJYEmsy3",
  "key20": "4jDqbB1HwoccqTwZMynJQEbxhGUkUZGs5H4eCRuDJxGqXh9GTD1iXviyvdSWRvGQpWqDiii4VBZ3Bk7JNF2bFxmK",
  "key21": "3kH6Sj7UbF7HYFDvs8t6LaaUxErs8D3hiPVLX4WPoWYJqr7qdy6xKn6rxBhL1NeCeaqyJDSVVTi2XmqVojBNjuD2",
  "key22": "V84zTQ181VhmhfF7hUEfjFNBDG7xjivQKjHrdzmGDCFcHXfCbo45nH6d2WpnHMxqjzmumNwZa9N7CkGidmGAHTM",
  "key23": "4YF2pexkGN25YUT1oT1aKHUY7u3gZACzQM9YLzgyFCzFUAkRXhXt2EmJMhC4MY7zzGM9Ceykfe7syWKaMVyAH12m",
  "key24": "4FW8vzgVgcfvHDZ9twZPv7cLzN66u242g5su7F7ZurEc6ajPGnXvcFi1ZY7zbE3fmy3W28HndKia9eRuMEzU9EGJ",
  "key25": "2ZULBEeSUzJxtBPEJ7FoN6Ej6QvsrNnxc7ANUCiW97xqhAiVfqTxeRWuXnKzE9epZ9N27bEY45XN3ps7MHBDbijY",
  "key26": "cfGsjzAUF6CpRkuG87JosZgDUWYjGyLmqccwh8rbhHTUmAVzTfj1U8sEJdGePGXKwpbKv5LoFcSLbFEKFv7WscZ",
  "key27": "5exj8ib7YPDqpzrPUkapyBhuyyBoC28Ajgd5nKQ2bWc4TAxD4apgAEfYXwuEXsRWW2sy4fZqLW6fat8DkucFyhbb",
  "key28": "53mo6q6gUqG8rkQZTftjjY2w4bSs3c3S9rTonjeY8bpNmppPKvfGn8tdv4k2quKSFjE5QAp6LzKasTUGQ4qiF4Fs",
  "key29": "2jhX4HKTmu4Y7v21sjoVQo4ggCaRxBpRqhBrdzRXBTM1jAzz6piA4JQn35zM2ARAXGroYjMmTxujU1nNsRCyLLNq",
  "key30": "2EetKYkDWnf8JTm8g6VTbd37jD487AFZkxqv5191sAR1pXHceDUKWT4on5nmMByAGo3vL9pZCqEc3iQ4uWfGixAx",
  "key31": "3AKuyFebDjaVAp1u1KrCwhMouPbUpEgAf7Xm1121VVBAh4JjepKLgxhHx7C4ekGjzym4e5EbWzyFzwvtAE9wrb9k",
  "key32": "4sCXEy1HvtKm4aTQhGqNDLesBMF4JHL7usvrR3FLYyTWfirzeanBVE8Yh4cV6NG6RQqcRLEkDeTFyALRiKisAUpU",
  "key33": "2kpZCjteEENfJYLvUU9T1bdrQFEght3LvG3uwVnuaEu7RcQX3PymgC2BQpXnbJhqSQTcYoCbdkBQMtpmS9Jj2ePx",
  "key34": "4usRnNt7Hk3VfxCU4dSpgVniCKy1h7RnckAb1yY95ZotyDY9ZAKLv8dHmPTizj6b3iR8QrvnDTFQ4EHPB5GZ1yg7",
  "key35": "4cVYrFqRqFCBNzcEnMYji2hsyFT4jfK5tydYojTnts8ucwupVEBwKuxDsr5XXmHBC7BBP9mVytECEb3oAgB9iejj",
  "key36": "4eYeJAYQipNN7x5ycaAesuzf3L9MJpmBGjPTVy64Z7x2ZR7o52Zh1vMNRMmP8ApPYojoNhRX2uWZ2N9W8ngMZji5"
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
