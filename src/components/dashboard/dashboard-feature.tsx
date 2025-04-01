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
    "3MXYLNCYvJ2NtjN59Lx1LRxFffMGgq43vZDKnzs5qBfurM6P9z95K6Qkkkrx2qhfen9gKq6R1wp5D5n7FkVi6YPj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DQ2Z2SdFZhT2gnFMMcdSMZAWetoH99aQmKqsytFyG9qnpByfeDFHAHSwZyzpx4JTWxAtKN2xiXHrNrqpaWWnEjT",
  "key1": "61Hdpsx5Pzj5V479uyg5d57fD2iZViQ2ohqBDyHxF8zxJgRGjMW5HtbMXKLX83gG6XJmnEFG7rSK9E2ZvYoFsGvj",
  "key2": "5reKCaAAYzer8MCb2vG1cQig864yZ3ihCi9sLm7eNjh325LjKGGSj4CzBw4VEUciZwrQDEsVX7Mx3pysvjRXoNpi",
  "key3": "4PiVzjpzvTSedNNf8y9VPMt1yhVtXYEnrwd5MPzN8toEggAR8R7mjPZjfBgHyYc3VUrPGbZ1pQNi4f1ZGaHLxmZ4",
  "key4": "5sxE7PHkVtrgtwYQpjj86tfpP71uMQFDxJbjzTwpD1yepeTiAmAVHGGf1EBCyaLJNaZCRH3gN9zbhXyq2FZeTDFk",
  "key5": "2pBXHxS1BAi5unvgbi9xsink29V2kyhN4sGVjyXS9nuDgHWvwT6nGvQYFw6SLXqLXrU3wbbpoFqgdQZ1aBz6ZaGa",
  "key6": "3T2JHLTPezYZ2wLpsbD9CjrPmQx7jXTumLSXxeD6f9VJ4wYEGeKbfLZFeBBrrZWNPg8nvfr2AzHbae5ojSWcLoTt",
  "key7": "5v4T9B5ueCbuiJKPNYcVi6ofxpuXH4V5SqZDZAdjXjgmotVWZMmPRAx7T8nf7fe4vcA4XhxnSeGGXfgPMbFcKTgh",
  "key8": "4oHXw6V5KizTkFTKwfe3g1Eu6nwPZBR4vVns4kxoML83MNSSzAeswM1F3t8ixZFkRMfFXWqePbbSWHjcibvws9Z4",
  "key9": "5NrWvNrcnZ8jTsV6NLhuXhgdMDQyhxvBn86e5e5UmDPvVb2HMwiW5eEmMWJTw3Zm6vvfonzXsx58Tm6tYxWqpftc",
  "key10": "am4ztnHRKJpSFDFyH7Lf3xqTUQpmPas2ge4rLnqGV535K54MyJH9YxW11apP1SoNqoHXgMM75EE5UT86VtVcVxU",
  "key11": "2s7syHKDm2hL4TYYRfviU9Y9zaWL2sCKq7DUzXkVwfxFiydh6GZvh5SFv2NUjgwEjWm4hYUUNZHPBAAs4uh3aTAa",
  "key12": "2oYoDrNiAgkG3BYAJh9udtEVXVJcd3TMBTgxEZqxWbbPFz7kjHWeehkynZLK1XEV2nvaHvvUoQfFfSqYtX2Y1dXp",
  "key13": "2XFYtGKk99DMLA5nnau8XrCju9tsFrw7PsWPThk78v1gtqtyg3shkMkCoTvySzUevvNwJojsPYLw3z5sR3r6px5",
  "key14": "3wevXCtUvkiccusFQm7xEgYHtV4Qc8p1K9VZGWDH6RQc1yfe5J6YYZpjVW8D8JyH8AjyYt75ykUdogFVnFHgcoMQ",
  "key15": "2k6ZaSFGhjhuADhwYq2KSdQngXBfDesPfQdsp35QDSVfqpqpdDGSWMS7tCyHQfP1oeoJDEJgdzaAVu3wsU5uBqw9",
  "key16": "3nr5YGQEh253TNX5Ca85mKMwoG1fcYchXZRE1Q2ZYVc7h57rbM3sRsEnsbjqZisZM9nmP3miP54CJxQXTXyQJm4Z",
  "key17": "2qd8LXTmsFzcVaf7qJqDwC3R9ue76CgfENLdgVXezVM22j7bMbPeKc1pJ6HFCw5NidSu1U5tBrJLp8gB1MQvxTS9",
  "key18": "59QrrExvs5fPMspSQ5tbpa9ey2MYJfuYSpgjx9jjUKWEtbE9QjxbehrHBTZUJEejCb4c1j6Nb2in71ocpVPFyJU4",
  "key19": "TVeNaFSsJ1hVnArgTAXq9xHsrTMy8Dpr38kWJf1fF4jJrBwS5xXvZrdrg91FVZ3EkGVSDqsXCxCBtqMiij5MSTR",
  "key20": "55rCFSQhbgRCjZUGGnsC4fBL2pp9UrztBdr4swoKsS7AiNA7kWwG8cThhwyLVBy1LVvrJXSzgwuChCPn7gSpwSBX",
  "key21": "3Ud5sj2TheqwBoPy8ZbT8d8pcVDDg947M5qMWacgW1dcc9CrrSVCFAsWFnKRLCU5SDquP93FeyaP2ZcJhNNQrirK",
  "key22": "5iKHdQxVP2QJDLfS6syEiF9MRdLYF5MhRCrB5Z5zd8817w5cCipXvd1HBkukmg9Mx3xFv1svLz4JLPw67jsiehUm",
  "key23": "5fswHpPqLMLYRiBpJdraXGBKGLmegrNiEA3vZMUua6kTYN1HhdDz1jfEH581ua5nvbcRuFjQ8qf3RqRpBg4UG76D",
  "key24": "45cJnKNLJr9JJA9LQ2xqPPsiD1f4uP3r8gpYHEGyUpg13Kdwjor3AZ9K8N1Zj35ETi5sEzZ8pJW6urdUZyT5Ymo1",
  "key25": "3QoxCVYt22S1PMv78FfgRhXNjqvQoWYRhnPRHp8j9BLpPuWB9WVQrfeHbdjgQZn99QPM9zhfMx2yBiuJte3w1wRg",
  "key26": "PaehXbBrZTN4Frvvv5AUoeVW122KszZ5SKe6fSCwx2B5UcdHRr9DZ8hQkGt1Shrn9JUQEDRieDr1ZuwT5YiVdgt",
  "key27": "2jiLQ8tT1yjv2KgAqGse5UKySbr47po1cCPJim9bebhndD2UndxhDVLxC4RJrqrpmYorQp96ZDwTQwzNY5WkH1ut",
  "key28": "2bbefgY87LXporiHQ4Pwhk18GHzwWqJRAVNokPSFnrD8onHftTeMpxKVx5knvzLZ4ZZ4Gg5B7XxUWLmCyS3es6jF",
  "key29": "2GBGgo4HhYoXvCdto2coBxfVi9beVrxjLCXQpYRAbAETfmUsaNtMnXzxbsJeDEg9efhZV8CPR8BWq6G8ZECzS9Lz",
  "key30": "4GsLtwwe1k2kab36aD9CJZXJDrfJ85fJivWPbKxc5TuGtJ37WwZkKWS93GjbDFcPa5ErgwzsToESzSUpTVdaNyq4",
  "key31": "3Pb7dmj5u3afNxk3SytnCG3kHPQbP28A7vG593uDpXxEuLjFighVmgnp6y9AKKRtUPJ96N4977aEpS3SioXnMZFL",
  "key32": "62fiuLp9a3jFMaii5v2DvvwjYNU5p3T4HJuW1UHnTe6q6pe6TKJVgWeEBrHHtaB63gg46KY8cuEx1euWM6iE172S",
  "key33": "2fs1f98DAZBLnVsMNvkbazx9CBn3YobmV9AAomCNXhiWZA7t2CRY5xjrbdvKsVXbNUd2ri5C4rJYEMBKWfB2qZyw",
  "key34": "5V8SHWjwTdUTGMySs5NESs6Mz12biaLY5utVvLb6AbvKQe2AHSyNHfvSREKpdo1SCcnCfw2KJBbVzRbUxeNZGFLC",
  "key35": "EsW1WLtLfm9oodWxFJKNjhZ4fUZ6uxLLKqqjqnWukgehoVgzjYJ1ShvPQwXRkHybgcxcoYM9xcJHYbbWqWfFrKX"
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
