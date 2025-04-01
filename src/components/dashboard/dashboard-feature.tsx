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
    "424Fj6xpSBoT3XgsWDkRZoB85X8a8FNnZRZ8PcAKPTbu9rimT1Qw3MQaBUcRM2DP1SptKCamjZ9fyYsdcJECGb6T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TMYfnX9N2XQD1RMYUSf6FD2WukEv7gnZo4p7uTR395BaYbViZUD6P7XAXkQGFwTvVhWtNipoLbkRcfEtL3HCGQR",
  "key1": "4mUwsLpYB4SxPFjxXUk8zjYwu5ksVNpPacYEbswpPQ1oo2esRaiTo6FksmpLyQbAm7cyei4KCnBhXK27icNTmKgH",
  "key2": "4ZP3gMz3cPfLraHdYwkoXxQUw3vTKwKagfztUyy3gUE1CLfgmya9HwpDV7GgXJnzrMoJNNt8gP3XSvG5JCkabdha",
  "key3": "3diKfAkpr2b2uQ7XuizGiby3fGcPb9WCo6VRCiC45oa2XmvdFCSFaBT1SutCxWNgzSW8Bs5hQC7tt46C8V9R7cUf",
  "key4": "2sGuS8FngzXncivhBynUxT5xpababYZV8fJT2fCkxKobKrkXhgnzLiCbBCwqMmA4T9JADV5J4YMg7e7vFYQEBTTs",
  "key5": "KGrWtMdS5q1FGgfdkjNFrJ5iLasR29co8geQzmZZ2sC3MidFGuoG8jpitNx5Dfpijg1QXTyW73GWwWc8xByPb4L",
  "key6": "3nS7YTo57NZCwzx4T8FaYSsWe1ecCLuSH5kX5Kb87n9DSWBnTdfd9n395iZHJTjnG57VJba5MqXnX3adqoHyHvrE",
  "key7": "A9Y9kVR4zPRrMJkKZW5hcHK3oEsuHaYsv7Z2WiQ6zDAqQXZrGeqmR2GtXxBqWpSEsB7X8nMATdix35XYoZ95rGp",
  "key8": "2d4JhomDUDsJoAYQiKt5dhbV26Y7bjwZAgXGGkHMRCUmj52ucZK7wsY5CgamDExFWvmdaSecH9ySwJu3pSrLvUu5",
  "key9": "3ysLcs8qZQao2WtwY8MjyeTivJa7N8hi4QjY3sxfgkJpiBK1xTYPjUrptjpP9qkFvq6mTF2FJFmWvppQcSYbcWkU",
  "key10": "3zfFwedcTr79Sv5J58D6MiAQfw4Sd4ikW8wQGfkazPd5LxQ69yBWCYFUVp3E1CnnSSZ18Zv793KymqzNunbvw3EV",
  "key11": "KWsCvXGYMKRj6y7vD7T84qat15YMSoh9P79YSBdfn5dR8hSbZyvGB9y3jRgFgbMi2wUcfCVgCKbUqgcaXpJpcNy",
  "key12": "mc9ebVtEJU38wz74QELLt92VbhhgFug655pvoVQLuaPF2rwHxvVfkHd5hHSnKTHb33tiMdSyuAgwGoYTnrx8rDZ",
  "key13": "6LTS55KN7WbruteqWisGHSdoyK4pMabrbhik5cLUzS5aj7zcnqBh373J3C7xNWEuhvnaXgoGbE1WRjM95rYnvQd",
  "key14": "vhbbDy2ZVMttYdH1ePLJw18gXxxiGSepAhTGYCdW4vY9o3ZHuJV4fJD1iGMEypZLhogCTT7tVcn85K7ts1bouWj",
  "key15": "2B1wh6zwo6qWnTQtqcbwi1C2ShBjeYbzboWVM85YNzq6RVxFFg3g27xscs27P6w467qPk1UJYk2TWFqFxqeCPzAc",
  "key16": "dxgGZVuKKeM96cDphzRLJkSpZXTaEigxafcAmVBR6mhFL3qEFEwj9SmfYXK7PyEt2r4a3FTjhcNNkCqP9hUzffT",
  "key17": "2Zf1aQiTHFkWSjnrNcZnntKXheSfPqNQJSYVrN5Q96ZiTYiRTvcer341m7bekvTGjaMZaqUf2ZGPo1bEwR3sWo3R",
  "key18": "5LkyYPrr319YeiXDGSRnU2TR66LDMvqSbd5PrxVZbhAHTKdTH28NpTVQSM5LCk9rJnJirHKDUonDp6vk5UvT8Uzj",
  "key19": "47KUG4FhQnjYGnEUUjBvazvsPLxQKTX692opUn3bz7kSPdPUrCeiyBp9fdKJgq7jxVzqRWBjGjsXsRgZAsLY2FkD",
  "key20": "3nuyS9Qqbz8uzRdVsc9oa3BwqxwTP8np3abpiZeQgnrMWwmTvtjBTU6Dnoqjup7dqXxmx3hviaVVYeHMdjMyGznr",
  "key21": "5XEEHsfwHSk6anrdcmvRgUY29Ux5g9gALBjR1Spz9Yf1i7kihSLwYT6rJV5DRT1MCMfNDWy9DVXqu1yWjAXJSTFy",
  "key22": "3wULKnGicCWp6D4ZWUJMqmstYRJAe9qE4jMEL2KVVdtmKRWAWPeTa28Uuym35adxGqG3kBUHJkbUPYyqkPrdKE5B",
  "key23": "5CnkMXT3qXBG7SvJ3G41E7n6U2MT2Ge1Pu62428f8kdPznqR3uC7AeHotKesGuKzdwtGRqfMTwu4ieSfiT2y3ZUa",
  "key24": "3DXfbM37DYrAVbqb5hSaaw2wkW2uL8yRcLXBR5Gor3hjuATwRamCz7y19BznDXDPc3AAMKGNh7YvKt8NFxRSYgLH",
  "key25": "EGjtnf184iYWYsTUtAw1xPqNVMDTeB3VEhod59k56kH9B1zE9b11FCP6YupjZYxoowSTcyZzUjzRQ8wa83NTxn4",
  "key26": "4Evw7BDkuoH84j8hUvwfUSBouNYe87TZgGxa8WTfDKwanT72NtHiLXRWVoXaGgcjb1tcNEyoxrvkXX8XY14yXEJ6",
  "key27": "3Eyq7xjSM3ByF2ZE6bCfEttB8KNUGHoyVJUuPCd7xKAKXegmAvfJ5jUWYbtfze6menSNWjYhjhND1CnjkuSXQrM6",
  "key28": "5dUNsU1gtCfLSpuSRCJAZKs54YiAB5SK1FPTttgeFXFfASiHoQ1CtRXdHBpn82UTjASK7PMtgjmKtX2W5cBzZGTy",
  "key29": "2KNJVT49FvdWu3zqXgsfTKJDEuHmsRVdpJxkMMgyaUESAAC1nXkpyC3aBGv3ubsWTupxjNjqtdxBtweunLdAe8iL",
  "key30": "2MnMwGKEiEccBrHqFJiVH5CyNuGf7bVQ1gsZHJaJrWmMBBuiNd5F2VPCmj6shj1J87CAGCneqQhasTy3matqG9nJ",
  "key31": "2eymapHRL5i8rSjcV1VX7JeyGQ2FVsqRDJKvytu29w8LZegTQPV2VwgrqGfYFyYVUcPYKj6j3tKnSLKiyF9q9WEH",
  "key32": "2vwrWxs5TZL3Hvc82gBQ87fgpRULELveori5M9KPTX8YmkwBMn3ANX1DDsVSB7GkQKriSsquXPbzVJqpwi9Mhnib",
  "key33": "5sU39h6fJFMMbsDuotPR7JXTkFozy2qoM67MaxzshpoepxLfHFmNtXdBf9LmaWn1R9FnYnyh1mYxsAVoueqhCNQu"
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
