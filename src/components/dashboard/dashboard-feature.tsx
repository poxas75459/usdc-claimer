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
    "3ib6Mvr5BvQxPXQbYbubdfqi9Am8U1UYhjaox4to3sSB3aXHD2HMaHhDt1mDjALTsF9yyw61gBA8DcZf68eh5rae"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36MUKezZnHA8skpv9vDKZ9mW43drNH9jUv9maMTFn9EtXWYEoZXBPLmHwc1d8wkNLQkWwvZ7Ya2ZNu7DAgcP7UgU",
  "key1": "2zYZaJSduKrmHK16fNZt2D2LTbBmg8mZzhigbeX1yBvf9ebSHnGBpEkJKREjMqvd1j6LExsVZnn3Gffuvr9UGpzr",
  "key2": "2bJAR7XY7bWPRohoBQDBeArwhRt1jhJ6oxLM656M2HToZ8vMDrY2QR8MwxRyjhjzeWmLUBDgCTJLh93BmWkBws7K",
  "key3": "2cbyqWXC1egWsCZLX1HCR3M3BgZQcEcgbgGQ8XJnHezK7yKJhosgCU4Lfni46tkrespSxAHjnCz11aDcmX2XMpJC",
  "key4": "2kWKvYSLprKjYVsE3wA1XpRWeCpDkzdoNZPvphssjnt1YsbwQgJjW6GYDsJo4SAfm37eYEP56Xvhj29XsbeKa7Wk",
  "key5": "5SyiJkN4xkgZXPWZpNQSG6K9Wy3J7sCLUCiGvvgtMExBBh2nQrEca3JRFPbAJoLesqh26qo7XR43ArMJSnaC122m",
  "key6": "21JMzuuLfkT7MVUNair8otB9c1gdJkDxuY2xVX5gjadiS6VEh91LxveX3PPk4J44pTANedVvZeurVxGz5SRjCWGT",
  "key7": "t9CMzgP8TdkCfDYqsU5432wjy3CWv9fnepmnhnW7uV1wMgwFrsee3BijgYYxgGzbJ2L5JQ297snjWCF6T4RUC9F",
  "key8": "41u5hUKebCavWG1TJV9Y3dacfCzDqbqAKFPazHvprwHHLZ93zqBhU6ipJDMLt6jMcuwEZD7KuiVuwLaLHcHjSrQY",
  "key9": "3m3jWgkpzMtgyc5qeEsKjPkLS1LFCfsswLBtXAUSJ7VAGy9RuGvy9U77HhGV2ybWxXKe6JbEsmSeDpbh9oMSypbv",
  "key10": "32TypwpLyA4UnmET3Ua295oVrGTtpeGhGQnyER6v5s5yi4zodE5AR9m6FUv18h6sJ8KKetLnW1jBpaQ5JcnmrS4t",
  "key11": "4xhpA9QxotuHzki7FAZnt6LA7iysrro75j7GzHs4pDBB7AyyKaSnfndKaMc4nEnALWHV1Yak4qn5BbXviAyLNxRQ",
  "key12": "4T4HrhgRS9vS3Wi6NwKe7L4X9n46RbgDL8WVDCSZzCSJHy8MB8U4dqzonNKRgb88UBFciEn8x8zjRm9FAuysdnMF",
  "key13": "5aDBf2VtHwJFrmsDo6MHfL6Lee4vXehABCuyYwLyJ4B5C54YuPY6RNuNJAjz19zyeEWAbpJXaZ9Pzxzxsg384Sy6",
  "key14": "5KXVa6bcUeP7z8VBkiP3txinYyNd5ch2GZh8n5SMGSrkYxdb84455gZnG17uoWqgJC1mD375U9iSMM4gmT2uzk7e",
  "key15": "65f8hEicuUQrSgpu2u3MEp941y87H3s7U2JduMvcQDJ65PY9tBjNbB9GnLsqqg977KSHo9gGSmVC3WttFtRM3S4p",
  "key16": "EnyLvBW9HhR8A6SWyEViEqxuGHafvB6x6V1wiDq7YFPaWaqDUred3MRBAFFeaZPCTRT2RZinVUfaZ9Ed1Uszujb",
  "key17": "mhJDkyonNs2cifDPkHD1NmpipipxZXfkkgLN5JLd4dZXjuE3Kvh8AqVLF1ZGqXfW4YrXDmut4K6fAvD1wuE1neu",
  "key18": "2tbmiVkv2p4ydYpLAyEzgBaeAheu7RqTLwkP5ysauQSrzXNBMqvLZyJ3vb4RSFsi6R39tDEWJRZp8fNeBj6h3H2K",
  "key19": "9fpu8SJTnKFh7KJQYeeS5k4gDbDyFB9vATFJcahAUtsEnzxfbgwmB2bsWDeEwXuK2g5GfphgXkomBAFsr8VaypZ",
  "key20": "27qzcRixjTmcfFpesp23YPcWpTUbEkh2x8Kd1UpvLYEDwZC6bqKa8h5go7uZS8DbmjTpLTF1RMRDmMC1kqs1Vk2t",
  "key21": "4K2WYYCiBA8555ysnHnJmS5dvAt42cDVU5iKNJWC8pni1qHMuTa5VcHDZvfn5E6KbhcVFDgQ6yzTtqNFAe6BfXKK",
  "key22": "65bcViStnWX9vrY5UXpsUbo3auDarStGnyMaG8Hqv7DbfuyEprGg1P27SxaQM3aZ6JL1wAoLiLwkd7Nx3L63hC37",
  "key23": "44hginQ6iRAP64Qg4EQuRBgcsxuxRJX2zbHPWP4HUNoZ2xVytKvbLV1VTJTrm5AytadYEYBbRdaLmFS2XjZYwihK",
  "key24": "3ArTDjNQF1kSpHtSWM2Z7TUuVDNT33aceRAE84PaDsFRBoCsGjwf8AXC8p8Syhy39Ao9kGBaHxXJGvBVh3wz9FHL",
  "key25": "4qLVbsHgBuXxxuki85Q3KxtGoYmoHExfhKJdyREG4UWrcmZeLjgh6bAzoobkn3ZPa32mDV4JeDoPvjig7MPEmWVZ",
  "key26": "GH8Tukj72Tk8ypT7ssZ5T2yiK4aosu4W4WoHAUurugsqHggyBj1sLr9SX3aaP2Z5X444cTzMtDXjVbGwmqufYNq",
  "key27": "3tSEC2b6WNepmiPabEFdtFcvsYzTAgUFJWbBd5HEtrqvkFzp8ziqDFJ4SHd8yzukPV2ECKy83iFzpAfEYhwezwEQ",
  "key28": "5A1ciDtwYV57ARtJuE3PiARYKj8TBuk4QkcxxjjdEPKhR1hqngLUUqHdbyybfZjgu47xoJYfMjBQnei8WFeqDQS1",
  "key29": "5Chfrt6dg9CkCgi7AqdVzRLPTG1NBmjNodJFLA8NVUdVwLsw674Jy869S5JSqRgXfDoeWhGQ1JsaBYMXSQ9opy7G",
  "key30": "2qz6bEMkLmMDqzs3yF98AESGZPFZQcMXzNjTAC9EkLHsTT6dFEWGSCKBFTVmKaaNFj47zbmRLdjGxXeweoGiHHhB",
  "key31": "3SwdaVtfjbqC4Eqb7L1hsiajBk2qqNjRFVN8gbaW4hH2YxZEK125U3Np2HuHmu7kHiqLQmgJrBxUx4TRRaSpLgxL",
  "key32": "3i9qvzXAPbHkzkxZEPCgynqUKBhqhRRXSrYQzUJ8cneVQKfEV5vJDg68iZiP5o7iKtHdKgmkWHxqW9vxY1Gji7cR",
  "key33": "64P7ffQUfpdC3aykN85yq9QCeB8nU28CwMM9QBHXJMtucVyjPS4NY3gshanT9kb1biar7H2SfCtRxtdr47jnNZs3",
  "key34": "EjXdTmfzQztoUEtw48wZR8Hw9UPgq23iDCs3a6fXpJtaT7effC2LRN9Ti6Xj6vXACLAFkGPkcvJ1pECoGpQcMKW"
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
