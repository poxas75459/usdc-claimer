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
    "21uLW8w82HpKz4kE1c8GZ7EzYDmebw9dfvKVcKjbvvLUr1wjybkTDbG8eKLMQBkoiURNhdu69T9A1vZFC9DZadsf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cmnz8AcfFmi5T6KBdK9BPuSMELU3VeeKh75eLmKNjB5LZmy8pMkk55QPBa82oegRCMTHTcYV7C37eHc7tE3AoDS",
  "key1": "zDU64MahigjXDywLdztgvhauwuEXQrbhrUC15ao9ZpZa49FdReYH3wsawoc6ce1T6yTqRc6nBE7XYxcNw6W1YyV",
  "key2": "vdLSecfxtauksb5jeaRV2z6qgUmYU48gpJhneTSsv8FrERMKF9U8uxsnuS61zqubgwiaP9SXT8RVYtCoM2ZXnHP",
  "key3": "Ara5WzenDUbyvPwpyR9MLFJtWXxyCtPGDNds15R8n12bUQhrKcMjosWrcRih4g2HezparrfiNJkP1K2AAxnq4U8",
  "key4": "AgZdbSfAogNdivQPJ6FLvLR51Aa5JvXrwQEJW4q1ixTLGQhppnY5FspHMAukC5D1JNNZ6KC4E9MJ6FsvBJsVqYv",
  "key5": "4yhyZm5ubuhhi3AvNeSyonzHaoVthBYvXJbEUCpbCrJEWus1iYNuQSwffPGPK4UDHN6RQ5EE2tB6jXcPXMttew1P",
  "key6": "5Cv83hocyVkcx2mKK2U75nRV3yedyuXyVvwZhRcqTnzT21yZnHodjdFmA95Au8rijskDLNtM2B8x77cdTXDQSrTD",
  "key7": "rawCdqVBckK3krej73wfLex65zBsbEXsCCUdzzqG1JB7MfeMjgbudKGowpb9GKdSJDRW5W7FrqWejwCsrsRWHw8",
  "key8": "4X2N7QwN2ujmBqerX3mr3m6ZCaJm5UFiburyDpa5NUyZn9CGcvdarFHfp4VqQbbZbWVCtwLW9GEE7xbtyFo9CZXp",
  "key9": "52W8VxYkR1uHzdk6zjDznC2WSawgBVqvcG1MwLNpnjYqbSoecpok95n3urwSKFMnSTxovVdAMSRxREeUysEBW4bV",
  "key10": "TaMo2BtJWyPNWPPVcrAEsUTnpLM1P1m4Y4Gio6nL4KgYFRsx5TDyPUA2Ykz5i1sy3eBBeyjkvefUM1WoqoZqgcs",
  "key11": "suaTEThKnD4RKUGNVogTRC3oJUwhpccxbR2xcpSNTQJvxuknJu7VSNcaLnqa6WUryD6pG2DnPVmg8bkC2LMZ3C7",
  "key12": "624kapWpTgnUZGHTcB62MK3kazZSHDh4cU4Jac64LdqzczwcXoBDuVDBYWA3UPQ6qcqsiTMtgj9QxTKqA4d4Z9Jz",
  "key13": "5Z4SHNAE8V9oH1sYnSiuFg75dCgbH7BVjpxNWFyAFLWZvcLBTH5K4NAkS3yNNQbTH8MQRnuX6vWCoPdJtyqj89YT",
  "key14": "3fvkdji2YW7A7LfCDeWYoWp6vpdqTyu4p8DcUiiSpQtHnogEd1tsYMfjV9o59NA6R2J3XDPdiRMMacAi9iLFFYRS",
  "key15": "5su152MbanuQGWQxvLLjLkLBmbpByJKhA3apoTk9SctzESsuJ7TuujAdgBRBnZLNbhZwhYpVTPEiS6MPKNRuT2Nh",
  "key16": "WXs9AKnVfitB1yQvy7vRkSR5Y1CqdA63y7c6yeNz3CxnNJNaW6jWFhmkpZab64dpDSeYeXwypgyJGiJmEr3csRt",
  "key17": "2mjY5HX93x7L79EDd3aXtd8J3REmUWGnMjMkTU9ppRKvbKhNZfmAqFc8veaKMLDLcwMYUnp818GNxTRWcNAsbEKn",
  "key18": "5V8TH9km9cHTR37kciicvQRUJM7wkd6UgbJ3chXn91eAgNZ2u2yUNC8MQV5jryy1HPhH2osWciMY7KhpDBrbVjf1",
  "key19": "2d62uNGNZo8PVKxvr4mis5GzfAfz79nYkiCK9KS1RsHqUTuGEMrQK2SaKzWSfTdQNiRwy8zdAnb6CgFQYX8Hh2AA",
  "key20": "4AFPLnMrwFQ3ufLrf4MiyCMZbq9RAHmEd2CgxnT6TC1GMRezjT7gT7HXH69ugJmzQLSMYUD1d165UMbbTCMLZsAV",
  "key21": "5KByaYhadaYdzVN65S6bcUQfgznpvdwapq1YSiD9K8DHzPgc6JKFNPN76fJ2Zfvb591Gpkq121JS4rcAMnEw7fuN",
  "key22": "3TZEfFD8UoHSKVsDLH3jCLU4HjNcUR3eYq4QdQsfHT8GasqpuBY2RqvrTFVsUcFTsRej3CWoE8Uvwt9Q5qJwREXB",
  "key23": "37x3XzdECQQahJYsCJfrRrFbYpn6tYsL1wspZ2R4q1zruAY1sZ9PuW7FviMYoRhW9V1sG7rwALXTi5uzdKqQyqdz",
  "key24": "rpApBtMbsgqeyZVEJDtMUdznbzoDEqAD7t1J6quxrSw3gfXEAhuWSjvkVEhw3dhHa9uZdnT5nRaVUvq8AsAQdSt",
  "key25": "5pZXLSJnaksRHGTnziJV9eRaKQsZe6Sr7wDmzWdPJqjN6H3a14KMycpTMhYnqP1y9FUS8CvmrcWEpnhEA39EBavy",
  "key26": "thC87bKpCoM24rAWX3GrVxnhfz7XaqUsghz465SomSYfyfrcQK3KFcCityu7ow8cLPoQTJzyExABX2CgCpLCYkq"
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
