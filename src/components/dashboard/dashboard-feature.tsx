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
    "4BH328L6LwXuud4j3F84rmgFZBPw41eNnx6x48KVPJrZvjK9j3FnGsp9ixcKqDQTVosr5uZR6RsBsuGGEivRN5UY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GQirzkxnHvpS4ZLtFbeUsxkDAa8QUSN8uvyYDw8VpZPEb8yGpyQbEKmCY4iyscWE9adJTTbLnkr3gMgLjf3kz78",
  "key1": "5xJZFgmerAbBUCrPL9KtcJM8W3dT4dhM56EQKSwjUP6AkHayMLKYS3ykmpd9M6m6ymKWPiMTCTZDSMWPKho96s8r",
  "key2": "5fTpSzoXcKEFbqWe7Cf2EMvt7GpdDgtMDuknrpq9nZ6TBtVzdtm6TNYQTywTmVZTkLTQiH9ERvLhgAESyLQcLy6k",
  "key3": "21LNkWPXkGePEx3Yq6wu2Qj3Q2qm3vffiwmwpHzaCSD7W8jEjNdLRahrvarzg61ZGTbbz7owdGr75Kr5URMp2H58",
  "key4": "qmwy7aAruqtDSqi2NuHi6ASUuh78yrZgFw7yuJeWcnxge7k9Q4usCpSJEQ8ja1PCwNWeSiu5JaU8KYSwEJJvbLd",
  "key5": "VqmAjwqwdN27eJPC7p8LqrWJaeuQnJoCrwrPpX74N4BRhCexrsRcUcVKLtKLLvrCmDzkXFXWJWFoyMPCdD9beTQ",
  "key6": "3URE6sBmKQNBdhDhk9yakgZzeLRReG88WbHVgG4WtGusDJCDxNkcHHn4yjuSjSM9d88NtN4hBpwCZ9a1r4uB9uA6",
  "key7": "5uTAw1DjuQaLTBBZwtFGJ4xFS4LWMqoUyHwJv7skLrbxQoyhitAykV5BCwT9bhiXhizCEnfF2Q9Sm68N5UXBdu5U",
  "key8": "4NFvn7cFJ5wGjNHoVN8YV4c3C4ruAVMYZPMBYbYTZaHDx2G22j2mtmLrqSt2DuEPmzTpgupuw8TizN4ifLYbzt9h",
  "key9": "3Cue1BeCXY2jyngnddMmi6pqKSmeE7mvLzRc6o7yo7LeQgGximDcLtit7KZGiP8kTxCB2nDNRzDbNCoA1pKDhd2Z",
  "key10": "41bBDPs1CW8WwR65rs53xsMric9E5b6aHkYxQkKJ7dd2eyDQ6pmuj3uU2fyiRgAjLBuSveFNjbCCuutDJr8ePddb",
  "key11": "5f8AJ8aExZMQadTRGvfVR4YGbCvDoja4ipSU5aRd38dcgi6aaJgHrNag6YzupdfptY5jVRB4VmV4NWX8UimjDcSc",
  "key12": "2AYsKZcByvEKt9bkbK4K8xSTtve5xwvvHxypniqAmFqSbNwA8vtQQZvPoViA8tg7EpFGPfc9F6PP1rW4uH1XHwxE",
  "key13": "2AZh8ykKUgQkA3ivTGkz6f1LxGjQSxJja8mAbDr7zF888SigNNJeDeQgUNReXzANhoRLKCFL1qijZDeBsUzvX44e",
  "key14": "zXvUF8ux6h7hhqsXXhVFJaq7jK7VmfyBGf6sxob89MQMUciiJvUkM8kkwTqbioMJ1JcFWdaEdJXGaiReSZiLbbX",
  "key15": "4F7SpEMbgNXbc5tqsYME8TKJvxSpZNbMJNo4ouw8YdTb6os1u9ajMig87QXQ3F8jXwmjobHDrQpZ7cYuP3tiAvt5",
  "key16": "59oyFnvu7i9mBfyDXRdUeoux3ZZrbXMwTwExsN9MV98Ko2sVCJiNhRDWVtCquoBhJyWLsTJGVZ76zpEUeerCy9iU",
  "key17": "3xKRs9SVobQBF3aABpDtX3GVTYnrsndv8omv4quMQjDW5ZhdPxvFUEoSV7fJ5xtxuj5YYBbGY2se3QmX7BZSYFBG",
  "key18": "GjitvEQNRphoQpDTNv1ncLa1ZmwpM8MWYTL1GHc2HDKp1cyv6XcUMczAALzSn3CEp39dzTjKXuMvuzxH1Uo9Kmk",
  "key19": "3pWCa6J9uLT5FHraCtuozr3Wz9Y9ASnfWWUonkssGVyk4zYJQS2BndLGY8Axrb7gdB1LnzVoNBK9xfTMDrorT4bX",
  "key20": "5Cmm8Nq9qadfq4U7C3C23FKF7warCz67cUPQf3WCSFni8q8jbCw3onZYBxwUvvhPwzN5z6wmFYAogWHtWrgbt3ow",
  "key21": "2dFYzA8csSnNmSF1FwdcF6uHZ86LcZtXy78pqxMr1G7P1R44XM7Q5K7y8yFe1RthEfGb1NzAK9KwLGTgfQozydYh",
  "key22": "5BwLUnyEnYBHEFGt1joFsiWRcBFXoLzKPRBtQeoXoWzvmg24rC3rkwANRDZu4ucJbD8KSLYnHNhrYkaSBUm7baxf",
  "key23": "62k9kHCdvVRrNBNuN7fNZpkmL7ZDadNJhpFwRMnPXpzBfRYRYhZ7NsNdhWQ5j3swgeYNwfzAC1o5Tnv9w44K1q1w",
  "key24": "2Cig3KcGz6Vx8TYcZk58JLeBNRZbR1Fp1HAknuZ3Wi8dK3rdbBZWDb2YvryDCjEsESkHZPM1Ebq1tZJ2973qN1E9",
  "key25": "4wmYYzNRALS3VoqRni6QBxjFFiefim6xkUWBhzeDUk6ryy7WJdByWMbGxfXxYtgaBi1NuihgSLGMyDKPrySNGo2b",
  "key26": "mohhr8WJduJ24hqEMaTA7Hn572qfkS5wwU2knui4nopLFbz1aoJU87jb6U5hmN23AKf6HvKfwPn7AS4JQv4BEan",
  "key27": "3Q1MMhitTS4r1sTdi4y9hiBYVA4XSo8Bm3p3xSPBPqkSgLyt5UCrN2WsC249HB9o9aSoMTNKzvzx8cTXPbbT8bHK",
  "key28": "4inpttjCjNkeePXUmRgmqfvmzj9FE4ic3n1azrCwgsqU385nkcUvVsRK7ts13LWQare9urF8zjJTUJq2bHiK7TvL",
  "key29": "5YDNSsPAQcJnVqJEqo7pfcFLfjXn8EfHN4ArGBan51c8KBsz2JVvyCJqDczQNTk3WhRPQ5vmvdVNqSXpbWBMt4aj",
  "key30": "5PbgSK8hrEWWswY83jRpMBC6jNn5Q5ur6tasLeD5w9uJQf3uN2XNJBDDbrosxKot5x3z59Ehsa6pePY8nUdM87xt"
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
