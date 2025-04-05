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
    "4AfAR1p8SfwvqcodnHoHVhxz8wPJgfBc1Gba2gEWW1ocUSt2Sma5Wg85PoqckDA46fw9H15NT5fxqn5uw2ZrpRqi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uZVkzjxAhwTkyua7UBqJJDGQJjdJ1TbwGAbGsf5EBLN8yZicodb1pY9fQLNBJ2LLUxp4BgZTFgoqMCaGLkTze71",
  "key1": "4wt5ZCZuWX8ZDEP2V9oWnKbdbYERvsr6QWaw4t3dvvEGRqZZ2WiwP12ynXEsPX6gWfApnCcpxYSRHfLsoXP6JxMt",
  "key2": "3Xfwe6fh2njhDwKF3j81gpyHEZBSgYz23ju4QZeRxfLstwZpoofcgUdNbTmvTNTtTb8wrYcvSa19GaJarv6LCmTN",
  "key3": "5F5G9LXaHJDyth3yPxLnRvghGAJ4s3rb74W6N3xT16qQjmXE4vpAL8RrsAtcHwTGpykS3HSwQPCL4nbrTde1pEDg",
  "key4": "3uajrpKjxcAruDtBQ1mo1rKqGuAZZTy7s1uc2ssJteCmJovFznmEAzEXmKbxsT1BRMUFjjssiRyArBkfjvakuQRY",
  "key5": "3kg4gnTDkkjsNer9U569HoTdGZc6jwdcDt638Co84m53PqWaiSGG9Exm3rLF44uAAEe8PyPGSjNxoCgxS3bJbk2n",
  "key6": "3ceHCC2xEmYLbki5SsUxWE56NrUFFhU6Ha8WcYVdmQmkY7cToGh83EU5PhNzBZeQcAZe2NaGEE7Pws6PLu5PR62Z",
  "key7": "4WHsqZR9Bznkubqm8PJSKgMVY3gRpig5kepX2uwQM5NJ1nUofz3zyyJbpZ1Gwz5pNCzi65eJ5H1Vue74p3unBMrs",
  "key8": "25cd5Q2ZfJwBhqq4ggZ34y6W2rojedzVAt9JFUHZVwKjcgaPRXs84edcFBZJJgcv8VKeqwEiPTepLTcGkczbcRAA",
  "key9": "5xBv1Giu8CpyZejcxon4s8V5xnd6z7FurrsnHHFR5bfi3kQLugrvVgixYZrH16qJMbeKv2mDo2LYUsfRCnGMPZPK",
  "key10": "4FXGU9xBwTu3VtZAfcGcdyKxtW1YgU5KZ1nuYcJYDA4vzmW52pQzPs1rzn8gbDHqQdRhcMc1ML74XjW6MVmk6Vys",
  "key11": "4Nthn7WCUMTE9fJvNjzHNcfHwptMuRj8C4dqxUyEEgkKchYK8BKR1TTY6MH4nT7kK1iH77ax1o2eHnEiroZLBJHQ",
  "key12": "3tJj9eESdLwRD253ZV4Bt67pVs1YyrxWma4nYexYSx68P8WVvv13Z4hJ79vTDYw522kXRBNVN2KpLsFZQnmjrnDf",
  "key13": "43h1FKoh3AmyHTuY5WTPYCpnpsSZ2kv8eSymDomx3vbsPXAtpMqHQcUtvzgrz1aErvjzRxDdhVqR9yRrbwic49bn",
  "key14": "4GbZVZJwpuFL3FXsRmTQFF1w7VfBFg8DiTiG5JxAUMUUcfc2FV6M2joULjaXHJhPbBYMCqW3V7MsC4PiJ4kiX8AG",
  "key15": "AdG2hMtn4wgWM4TDSpYiU8t7HW5BnpWc5JrGeu9K45YfRfQGg8n7TbXXnUtE1PhondwhbvuN6zP2bFEzVVUfM5k",
  "key16": "4Lp2bKxUfgHGvvpFqMjjY9hwwBUyHTUiwKEEsmGgY5h1RpM8NG4oAdtgkdn2ZirfbT8FXsG4TNvhNo5dWtHRU3pg",
  "key17": "4mn5RvKgNbTN3QA1MTJj9TG4XaK9piywuXHaYGTYMhr1tf8etj7UE9P7NmsJmXqJZikeEfUtKsRwvoqdVqBQZgZ6",
  "key18": "39MWtEcziq2E7AJVLCN7VBgy2gj55cFzC2naK6eKoiNpcxzE19KMVAeFrTUYBbkk9WwDHCZ5x4XXffUX4rGqiWZH",
  "key19": "5zhPbAZAQh6nW7aQNjE8oAaDvLuzm6KHE4dUwjKdvAUHchpH8b4V83HE3zntshtzBNBVxGwSrwz1koCoNVJZKyHL",
  "key20": "2p8gfGV3tFrT7iAjaS4q96sa2oYWDLSmAyn5GPbqLqoAuKjeeffkc89mZud1yjCqviZkmj2kWfUvLbnp5tTi68iQ",
  "key21": "3t2oA5FpC4qJg18N4mLa1siRBAyRVt5MBpQEjiqheo8DGACUty3nq5WB4b1kaS65rKbZzucjosM1UPsu7CmWWnFv",
  "key22": "4JyJj2Bghzk15yqnrYxyLR4nw1YtWrnEC5WSB7muQuzUX8x5utGbVLVZJLCywYmfZYEs37yVBHaVEbX8RYMbraRy",
  "key23": "CZn1YCpHKbd4ad9T2TYLXy37yxngdF9KAWJ2YBthpLoRYQSEvS1aUyrTiJcVLDo1bTeyhsPVUPeKX1b1HXbvebR",
  "key24": "waQc969sQoAsYmbiqUgH3QXDHp6jREQcb3JPLuJMoZRZQagaHTYATW9kN6xP7TjhJ1kSfuUDLfp5vQm6t8cC48G",
  "key25": "3o8dSHM9cibUVvqZhVpo8R8gDNuAsKuHC9DBe16TvJALXP9QA5gBTq8cAoJWi2JGVaNF3kvrXQzuQBsJJR5qgX9a",
  "key26": "2apSD4ztoTsTUYnkaUQNpn42SF4CKMiy49EC7mWgCjAQFfWUmZxBFL8jcDp3V3ymuWpiPjGs5RHYPora9NjsvtGw",
  "key27": "5FjfW9xxbfuPSyRfS4UpH1U75DFWayETaSLZZgNvso5AwyCaSTbJhLSHv2EwT5AvZBeJz5wbDr9ihk1dXiFTBg2j",
  "key28": "2wnyDyE5vVnt6b3M5fsCBRQ1NmpA9j1yHE8Mw3Sd65ic9Gotj591VJfJDMAz6GXYPfLzKBNUySFFM8fJryG6PCXr",
  "key29": "48Zt15ySGFiph5hHrKK2zh8raSeDdSap8UnpnBE6mmuX8ab15mnYEJDbq3h7ZDWyCDT6M51XxkBw2M8BpPEA9Hki",
  "key30": "4iB7Lk7Jq3uWiwhcrQb34muvm2Vdoq2wpKNkU7LZa7J2xPEYi5UTdBDUjxEoCspsEPcKEXWQnmgXgbkCrLnzkbda",
  "key31": "5VXgbF2iLLtuPJUP3e2BK8sWwNrTLwptD1oQcgv677r8Pzr9Xsxh1JmZbk22ujLUjoAix8FwfZUUo5EyDRhGLQpZ",
  "key32": "3GbUS6Fyvb46rLCra8ib42AquuzauK7wQXiPAbT6qEGvcuHWn2XwBFmHCtjR2hXZdkSKTRP97L9LaqnEK51jRv32",
  "key33": "4mboa6L9Kyb4VmMSVMtsRjczRQTqqUAocgpVkgLcW5CBbMgPUzFBn5vF7DJJpp6W2nxn7uj1XiFwfvMcQvHDTaLZ",
  "key34": "2BEVcD4MkvCcHPFWocfKzvwYh2B522XQuUdy3X6nHSg7s6dQ8SPircYWaj9hoCVuwGeYD3RBTYR7iYjV4sbDuJ4V",
  "key35": "49CsFGR6jomW3omLYTApx7dvfMDdFYexu385wuvLUdJTzKJPUma25nsWP6Mbzhv38hhMnQmvWmo8j7hL25zdr3NU",
  "key36": "52EgEZfMZB2V7zW6J44EJTagACNQusXykjNa92gcUzoJSXgFq9kGZNdCACKkPTFm67nep2tnphWqASba81wrHE6N",
  "key37": "5wHxmj9ovX4g4XbKtF8hqowPvdjKiSL2ZMnc6pxZK9mXPwsHEiB853mV6GyYawsWirV5jnSdhDdhEREdcYDDKkP",
  "key38": "2ycxJvxh5aYwwMXY8htDnD43RdMiart4nyNkXRVWzenddyMTPmPEKNis3i3ogZmRbpDfdPNMxeQUfbdr9yPFMUtb",
  "key39": "5AsqZyLZWcyMYT8zBihUbVAtEPWMR1cd8RLp3h91V6gV5pAPB3ef9YbYgFmXo8KBHK6BLREJQof3VdD4TJyhz5ZL",
  "key40": "3vMg39H8HTsqSDUuGwvMhjNyNTWEa6UqCiQ1Jaj8xvbBnnMH74wNmnedRiX1A92gytFBvXTHvBByLa9zZsHbPGFG",
  "key41": "52EzVdKSzeoi6y3sVBYfk6ma1UJb5n4bJ46cLZNTfLu1ndEpPRbLCNb6gP4FXnUbCD3o4HcV139VaV3EC8EAK4z2",
  "key42": "7qddnerNwRdG4maa7VEkBXpT5HHBdeuwshorh961ozUkxchLPG86hsXiV4Rvng5JJrqshUXTPKUmgnoHRm84pW9",
  "key43": "5h4fPAH9VjRcfkGgZBqYUsdK1k2x7JCQ8fKgMA48EHPdW61ZnivphkoNDGVFhvtRLzwwSqYhb48RnQzPDgXBwWfB",
  "key44": "2nFF6aZdnLkdCJgrjqbBxvua6zviWLngH5GwYkdmMMtNmTocMgeSq2FMVJAsrxjE1ktXFeodcEiF7CxBFZYg52xK"
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
