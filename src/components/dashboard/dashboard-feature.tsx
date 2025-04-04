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
    "3WkmqmnYEhRCPQt31JwVtabk54vRbJHC3UkJScCjEjfJdED1Eaqdckhn2oDko7FwNtSFdSDjfAFYFbKfx2m8e5Yc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sdTcSpS1BqggSePwSYXHTSN2ff1zBT3opv7PmCKHbQoubEybahE8rXZ6sVyCrVvhPyTTzCMrni2ecXsgjYyUjFY",
  "key1": "2NCujiN12MH2tWLNpUXt3wfnJqewFebwEQNdFsDSuQzrx9viRKvDbqL4nuiLerj4kwxq7Qqnb4QXuMVbzrE6MUbe",
  "key2": "4mFy3tEvGYbS73GTQFbuLffm6b2GzWcjfAqWCC2KxBRCgS1pHMgBABDau9ANvBNPBvHLGFV1GJe77fwpitwAYq2w",
  "key3": "3ksVL8dLjXtCfQawUPVaNTkmKrSkpTnFZviYHrHxzNtJtoCcXx6HuN9DpfH4ihFFohBimQD41XNGEsExYLzvsRJt",
  "key4": "3Cha9F643fiJDUDhx3wjstkHVSrttPGmc3yea8EuwUXgDrcuhhAnazaJYP8deyiejmBspyTDCimbYjLgj51mrJEo",
  "key5": "DjqiV6mqgujhYcNYvFjNPuSh1317ikxZuCURi5MSyifmZWud4xPrfjUrAX1BrCpHoFX7ixJ63QKQxZkpZQGKhUD",
  "key6": "4vps2tkWPHJaUe3XqKrEUDhe2pt5EAw6JRZfJahJTzFEQ5vfdUiNChLeKaURpbWn3qpMEBfRTjUMMD5pzqmhcFQY",
  "key7": "FxjXaqh1PsJ1BtDVQT6Tkr8GSEekgUvmV9MC2UDTywL8PxqXXQbXYHJLbVTs9kSLrmswhd5WFVt5aWCCk758ymU",
  "key8": "5d8s5qf5qkUF6H94WXgVK8hoTi2p6afFEJaWkFhvFy1M1N32FAgwuuavJdivbv7JqqrtK8h8v1SuzYR7UmvUJtBn",
  "key9": "4pyFSJ4oT4rHMA457abij4jDZsbHMrrFP5b5xZV9GRb4obFxmXa5KbbTpjbRcJUf9DrG1QCii35EYy3ioRYZPb1k",
  "key10": "jssABMdw7dqDSU28mPpq7ZG2jHS9tSBbs5iVX8gpWviHyJ6gZbfU8G9KYt2tRgJFHq4txW8V3VPfC5K238MA5UN",
  "key11": "5gWpctdjAfszfcDFX9U32QxX6LyfpGGhH5DJyzz5YNL9m6RrrWLX8H9AD2oWSEBzg5vwtMwDE6sntqP1hhTgUeHB",
  "key12": "3yKJWRHsTjvFxiZoVz2G8Scoe6xYSdwBU12qHPfPVuUfTKtVUoWYcUNN9oV6Yse82G6W396ehg9Xacwcir9QKUN9",
  "key13": "4CKThT3Pc694Edjr5E19xcxo9F1aTbGjMA2XT3oUZgkEp3GVQi43XSxkwPQjUgfHtSyT5NwAA4wUHhHJeADmjJ4m",
  "key14": "4CntvGsE8ie3odHxzE9bA9x1RJS3dm6qSeK2xuHfQR75qVbVaFQhhMNWoAoeMQtJp89yF8mDp621ZnDEvTuxkhxw",
  "key15": "3jU4jCKxnNsyJjSW3r57igzGpDVdzuwiBqo1dPLnvc2x75ycWyXm9dQTfRf7JCxYEy9L6zKcU9KP55Dx2YnvMNMT",
  "key16": "2cMHyH7uwwPvg3TZjeAWi5UzeXEwYQ8AatwD2t6Ai8afsNGAS8ppEYHs7d7ZFoTbnj8unmTDosesL8cMkiaT81RD",
  "key17": "4oJrBbDzKV2uuTYFWHRHEQZbQS6VmJsqq9W2nqUpMUZrVQaEq5ErpdDui2m8hVFb4tJvkB7bqnGvJhXHkjRw28uK",
  "key18": "2NQdA3gkqv6kEsTfCaQJpDazYAaf21hNocQwzZMXyBcRb22AXKB8p8kcFyZA1qB7W9PggsqAGA6ntvkzooW3Yw2Q",
  "key19": "3Z9m439WmRZLxXwaYoH41c6phPeF6yABzT5WWME2X7GVUNiP9YVG5zDxu3sLjpC9cZxzjFXCjuCxaaZ76eWXeeyu",
  "key20": "5Af8BcccWi5WZTMQcut4VK6reB9ujf7Z7cVpyCuQGaos4riEqHKCceZ9FJwPWNrXPw592pbATwLxynUS5BQUz7uU",
  "key21": "V7GXFY5fdzgxTaMucMfnK74WNKvwX6YfgqyswGR2MFMC1z1W6zwJyz1x1crxF8uTotYv5YsSbP9BL4RZ8hMPUAt",
  "key22": "ps5172mtjTR5thKcC65yFN5foEWfZdziyLyVVm52KWMmpBE85k1tcboUUSwCwpryHAEgA1uhGekcgz5Nxu8q7yL",
  "key23": "dAf9FYK6wyezoSndJze3WgdA4hzk3C4eNGr6CiSM4LrMs6dYwuzvwxaH79eNaDv9jGPLrGYewPbfZ4G86gBdAW5",
  "key24": "rC4dKFd9uouNzx8gM3rhsszCxmLbLbMRUMzYGsGeXfSYcCSQoKcfDnEukxdM41CMfGm7s668BUje8rU3FXuzkUH",
  "key25": "4yb4vJi2UXLsFEZryYvUNsMcqbRtF1srJz1FaiF1BBH7sYkpb2ZcDk8Me6aD3jtpY32yM4WLMxrHLKGndVXhWPh6",
  "key26": "2HEjSMdkLKryQjfzmM54CApE5hDD6uFfTxQXjWgkaa26JR5Bbx8TQXZNSc7J17f84mvuYY5A7BrtSE5VV1eikhYK"
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
