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
    "52G3Cde3vhAfU84ZNpq2Z79S1y2yzbDLrTcZYyXTVzCMSD8yDCcq1uBDwXj7WGt7cP57t7WP4uJVqTbPRgVk9tef"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66fRfaFGpEhPz2MU9ZapqVNAWxZNn4vvhSKRTmax4QnHDsQLabKhDTbp4U4LCQFaxU4crmm6nyff2j51BFJHve9H",
  "key1": "9L9fqoS6UYBh6jrkXMJJdffetCC8a7PgKYTXdHs1NqYm5YjNa5AspEyMAQ7BLrp8ZrQwF2e5sWqQbkKnAkAjvyU",
  "key2": "2py52f18Tqx2guKnRdHPs8SUTtaVXJe6zQ5pe3H8XfCsnrSY7gM54M6FcvxGkFV75LiEycBaeCzifMEhLf4LH4aY",
  "key3": "2cWdubowZbzYApXshv5WXwHGH6C56Z9QCNJp5moDGaa9deZEUPvQx9dLwU31joP1yR9qdyZEWEzahLkWqqaCd2Hf",
  "key4": "oj3dbTmxEcXxfTwCb9kPs2XX2moN4DXyv47XiM5j5ZQ9E4F4yrgZFcHuomjpboQmCUbGBU7i1ACea36Rcfemy55",
  "key5": "ntuVhVeLt97z1CDBeDjgT31qG1WXjvoYXNMegbFAkwiYZZcemkEEodRzSVMZ6oY8TbCwKS3bMp25J8NSFDiSibL",
  "key6": "5UopMaB8koeCaRxLoPG2LGgtkJvBVpMDxvFEUXY7tFGhWSxvhTqzSnRxH49DZfb4RDdzZBRoTBq5jf2auqmZ5WEY",
  "key7": "YvZZ512Gv3JuXxw6K4KVDtJ1FzaS6KsBRA4p2ZhrM7Lg9CqbZMLaK31jpmmWk8GCFR7XpQutsTGVKKnTKqZRbNu",
  "key8": "5PJevnjZ49FTKYGRQvmx7VvTDNcwsVCwiW6gZjiYt9dWAEoEeCDB8zdbCaRRWUn2jikQmueznKxJYQZznNzKqYwk",
  "key9": "5vnT5neVckwMBsbmMKWV3AvhHXoyABKTTbgjF4xP4sEej9y45e9sBdphcoFriZuAXMFL5GXGV4AQ84Gn7acu2HSr",
  "key10": "3HJASRkVdjfhGYiUEjBksiQvwfZ5Lk7P3AJXRjrTTedLpy3v1485BEF4XPbtakQfrTzrBvAQJggYmSYKDENR15eD",
  "key11": "2KiGJDgaSHjkFqDTVaK7MW5caEBsV3wKXSMRxKsrwu7NckuZ75KAHAGaNfW4oqvdDLemVggw1wC7LYsf5CizyUcT",
  "key12": "tMoAN7MeXX9Zmwhybg6hLsysrpjXMYEw89KyFhaW8LCfhkvFSLcecTEmDSmBEupKqTGuFtupdLJzTeMjDPavupV",
  "key13": "4fMnEkQnD11oNGxCSAux38XVMvFnQpyZzdE2F4btpiN85w9wTA3SnzDZQ7VQ2DdZkeATiMCBzTFkiWSx6jMjhYTg",
  "key14": "2cfUDUG4PUwSaewHQ4BR1R2q7qwyNb6KWhS2J4qLa5a2fcndogpLxUVeRJQ4Kq7fzZbaTsXKE2wwBLwhPvzkF6Eb",
  "key15": "4fDuiYfmt3h45Z6ypmXKWpdT5YCSTCUytsSbZ2cMguYBjhH41dviqsWRggQFpqFGdPMHXPDQjqKJKvwPu7ig7JAT",
  "key16": "5C44vMTr3zTBgiVeCZ3mToBG1y1SuZpw9DcbyGpzViKutsjQE38aXW2MwVw9XAK4tRW523Yj7uqQtnoN6MVUtfd",
  "key17": "5NDegGnhj55pQa5G4yKLMKGhyPB6Hc9X8L5Gz4DGRc7GHTqNgnXZjPHE4J7JKsugqatPcTcWzL6hdgzr27n958Cd",
  "key18": "2bLEyLd3afWU26RuanGvWWJ8R3urumXXe5gJiQM81dfTvsdA5uV2BdF1PWP2NJZ3R3LyHsT2HLdt6ZEEa6umMKk7",
  "key19": "5WogBTB3odmL842fNnsGvJ8vjLoPXFvD5T5J3zNrBRunVcskc9VKGnrg1uEWnaiBkJKeaRSdurFFhUiAkknCdjtt",
  "key20": "4g7UKTURZhTsmkmbD3A1iXWWTSR69bXrZi78gpMUBMs3JgEBPxdKMxqsgZr7td2AF1hQTQQJiMQW9HGJ3zZ1KdFN",
  "key21": "5LESgYiVD7qzEhzBDq41Wm8qWyVa82ykr8V2mXQwfxafCcyNPimPgoVt4J1E9Uc2RinAjG4Hpxwo9fg2RZ77erNa",
  "key22": "SaVfLkMn7sQuW7Cr822zNK6s3ZG2jyXUHYsEQ3ZW2Dvbg5xyUHzRDPWFEaaMDzzDochhTL2Ay6cw8mpv5Zf5BRX",
  "key23": "326yaTS9cKxieVMD6D3gHh1YbU1kv5GxnvCf2Sfq43qp83zHrNAcWuKXDRbdn5bzFpfUefTnS8tTQKNPLt7hYW4P",
  "key24": "4fqScKb1o6GVEjV689CaC9jhJuYoPL3ee99wZnXdbvmnCh47sBavtPR1Jd1i5PQvsLQbeBSQL5ukb6RtZLsDotUd",
  "key25": "LVdhnk5bt6sPPMtMpM4wUyyX1jsKsq4ELs7bCzeKef4L1Rz2V5nHUp5CtVMDwcg41K3WpPWiNqA6etkjDS668dz",
  "key26": "53ngy9o1sJCFsnxd9HgwQDcpE9NvF7qkBunfTzPC83KJXUtdUuWjWW4iWBDtFMkhetzpyuehsL6FCUEBS1HLpQAZ",
  "key27": "615UwNs6D6gR9vDCq1geiuWDnNpcALtgZTWY226YVUdLJBQipsdsf48cpo1ydhAgNUCMCc9eTF8uAZxDFK8Fwbg9",
  "key28": "bg6DC6sio6PyxG8C4vhbPdHp1hQusBDxMiCKGTE93XVYESLTq411BmdhyuLMyGJQndNvH5zV3nGYihH8XAvgQ2m",
  "key29": "5RSVPyaUxmP214ni9MryNtezoMSpseWPBsbqUeSaFFwRzdQXxHd8bZjWBoMv1zzSHkGBbEPo8HSdzru3pdvkvSd6",
  "key30": "5ZhYbwUNo9k9sgBJwHMR8koKWPCB6s9m8rWduXw1sz3udphGNCy2EFmuFDTCZjKg66NmKzJUSisgAa673ceYN5J9",
  "key31": "2p1hj44ME5NqpyV7m5FTn8arTQHK8ozSKGccGhq4Y3PcbZcBv6NTqxu1jwz1gRig6ABNqeChCXGvvUXhUNHdZHjQ",
  "key32": "22tbjv6c3iVSprnZYUQ5Ewv4sjAydv1HpB1Kva4bZt6GPfwS6LXNSNKEfDuMNPXEtHZK4Z9SN4RbTGnzJg4CJAhs",
  "key33": "5pmCu7ii1XCRoDwdqcvZGu4Z9cQFoKVVLkSaZHbZ6BMmYGyWiC1kbzCgM8CBUFD3ZrV2Krp8J6zcyaSeKHXo9eXT",
  "key34": "4tUe1drMHgcQTfc3yUB7vYBr9TEo4fx55c8Ex11PSLQ8bAAWJrY8XUHEsDaj7cn94MjGgX4Tt2XvCrKaiMzSmRAF",
  "key35": "5D22dfRmduDDfpGeDtHJ1kBk9GbnSjHm9Tw9gfASKLHEjqjPsFSep34hsGhPxoicT5igtM1TjZZN82Z9cf6PVEHY",
  "key36": "U85SNM1tDxWNBhXSqDbgkGDU5F7CzihYCF125yPLYimL7i1VUE6xLff9F2CuArboLKP7j4u68P2DctQZe7GKFYK",
  "key37": "Ss8dJwTYbWmuJrWn7ysM1Sd7dnLo3Nv9NJGnux8SqCZRyFEYuqoqaYTSbaxorCgYRCe4kW8ubgdTcfi2Ekeeni6",
  "key38": "4VopToiBAu32txs6ZZXv5KdT8HCD8kDGGGj5Wgfv1ajTMjtqD4SZuNkUuYG19u3K7c3NRrKjVQW256hygYDwnJcG",
  "key39": "5uWQGGmw6n9aaaKhvoMN2rrCBgrxrC2J43zBEFXrtvZ1p4fXxW7a45cn6U1C9RLcNL6ZHxrmT3GTJ8Ggt52wXBoS"
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
