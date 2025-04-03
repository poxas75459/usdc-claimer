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
    "659i34eNRccSu9eYbpu4ukJaCJUZUG1WeoCvQMzCb62Qncur23ctZcB296oEnysNEZLz9uSMKoFGijc7oXHryYKe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3q9xQ2qCkGNqoYWfAy3kgPEfhZ5mTcx33TQPU8JZcxKFRZe4e5c6ZAECCxervL9Py2mpAEPNLZYgWWEbFbgRJmao",
  "key1": "CYY7aX4EJcr82YUHuccF8AtZ9JWaZirbdJmm8Jcv3syAxzDbtRqbAwSZndpp1KGhsF2RPhwFnTg7w9FMZteEh8o",
  "key2": "5FBnJH9bM3XNnCzAMK4A8uewLRW27MD9AdpNpy8GAX1k8MPMpGbqN4y5yLkdmFm8nS72Cf6Wudu1oixzkftRCZvN",
  "key3": "2T5iccsRyspKyvXxDz2M5ddj6wu6oipKxSoaoEweeZER5WucGcca9H9LJ5kbtHFcM4HFtvdsq2kwzrEnWJYiH2KP",
  "key4": "3yEPLjFS86jj1SN8SuazfJc7VjWRsbTvB56umLtmqWvUmCUQi7uoB9LjCjM6pVbTnDUVpvrysBQUUb3sacMR1EcC",
  "key5": "3gwCY8bcsQZWNncdoGPWWURCoHUjfimJ2LsTuUxNVMisecxJnBYg5qnEgaNES23Spc3rKsQf9aqz3u9quA5ApFH",
  "key6": "jAzdvGwmstf2u9BEads63g4oKvB1dyigNkhZy687UtznnW7A53L5grRUsvW64CrRKjp2VrNnK6eYhQVgS6jAkRJ",
  "key7": "3iYVUdzkZW4x31kMpVhLjDsBHAZvLfRG2ZwpnKfC7DQq9s7o96RQ11ACSNkNfE6cSTFbZc4Eg36CtiJihcjrSHJ7",
  "key8": "2EUxaNPM1Aq4bkssuCdXhnbAJT48aS8RKwQhxVVpaza27vgmvpQwzo6GzCwxNrK2QMB8QF3aqBCoA461n9xTyF6y",
  "key9": "3L7gnm2DTZfEati6MhHXotZ4tyNAndDJtkdtWh6CuALfjbxDySfwk8KFd1M52ZQhv56TJ9fzvkqQgUWMEZCAy22v",
  "key10": "USeZGja99njESy3XSMiJg1vffs6WZbQwEHagZEK9GdHuQCnnCxLCnWUWRJFQgf59KGWjZSRZ8CQ2FXu1zrDPez1",
  "key11": "2tEeaFMD1G3sS5a8EnFuXQCNFA4PTasvg18LBcNRF28vQH1pXUpUiJkf9rtMAQKxa7U73RaLmtSqJweikQWwT5Ut",
  "key12": "21r33QfSDPu7i4WQU4jep2cBprpE3XjGeUjiyYKjbHapfDUB7hG3uZzykFrY64gLcN8smQ9hfCaBcH9oXWhbrHqS",
  "key13": "5ZQpTYgqn4rsXy2U65ocsLd9HcDyiGHnGr7MAWX3kzazu2cprnDgNssHsbRLTVZNETzeKfALgmfK4iLWSv8qxHZt",
  "key14": "4ace92hhsnTqfYRHebLJDvArbKBJigQTqPQ4kG1RUjdmxN2KhvuyVUcJfE3P5QfTDiEgBTERJjuFmU6hL1ie9crm",
  "key15": "2tywJ71L4cQLnkvK81sfMjG2ALvH4TRAPoVSgL8GVzqPG6TH6Xr3dGLfCEAwPXtpmdiwZLXmzFkYPs4oKVpXnRUs",
  "key16": "4sb9NLWrKtH4uaWnhhBR1KAa15XSfXWvTJyo8N1TEKWnvpivjvCfsK5UYFVHEwm8coF83F68WBdScZ1TDUaibRqo",
  "key17": "4L9VmfpfGHxBxFX7YJwr1jAxoiwDNJC98jvdHUSViJrf6mT8szf4Av647jhLjh1PiHAhHYYqyWkTb5Khw9yYrANZ",
  "key18": "BRUbB2nfAAyQ5enfYBbGFjisXxJQjbfSeC4JmX2h1PPiNLcd9ZgU3STNZkNXwGBRAeVvC5c66aFUon1EDEFP91R",
  "key19": "3KGGKD9HxDEJx4qEo8qfNSp1pvXXPAsjgztw8LCjzW48Mw6HMPVefw4qMYwiVEnN8g9Gg9hVwmNbWA3TcZTQhpWf",
  "key20": "4MgdHDZELfqnMosSHU3TmMwx74txUMrQcsFNcfBj3Hoe3dAPqv6AeSqcHixzpUTyf3piJH3gwzH4kehnujwWwGA9",
  "key21": "3qPWzFjpfTgqJ94zJj7XK3DoRRvUuSiUfs8UKiQcCinB3HY8dio2oaKuFAgcPq1Lt7MAVB3p8PwRrVKb83DCzrU1",
  "key22": "3ACkKi7qgU67roAQ1qJwygipFVR6QRkcNRNDFmTCWMBfvRZYig4SNFro3A2d53G6vrNF7jMYTnF27ej5dbskTWMF",
  "key23": "43JMAwXnyESESVwwcZD4WKUsZyqT65UMfVXEJrNZXR76JNRrRm7p9o3iXxnD7PpvNSafLhcrszHnRcD3LuGgejtw",
  "key24": "kkRg9dfLQhJcpAWmUbNFQq8Ki32Xm4DCEyGBM9aN22yH7DLKsNkjkQDcyvWDk2XdQrhzS3RuqMGReXbMzaknfEv",
  "key25": "2kr2C4RPtorLeNBXaXvyuuqF35DMLBtBgaoj3ijg8c7zAibjVUbnD7DK415mMfA8L4qmLTDgBc2Xo73KxNSNhCxR",
  "key26": "4rmSkUanmG9LK9yxo5qXi3XK5tWgscDR37nQUeQTXFAigtVswWEygYo4oa6g4r6uaHQPw7KNzfTqfJ8udWncV9WY",
  "key27": "5MwbEjvCeGHhMS55aFwMgAo1a5NXyY4LwmZh6NFMREehEAayYFnp5XnSDH5vGBvNMBWNZZv6VKhK1BnDBTHYYrVF",
  "key28": "3YBf56TAsTaNDooWSEKX7MPQXntjRPD6TT4VnTHtoPb3YSuiJQnK89u2DiwSa37TrihodieqGsVFgaFuNLqxuizS"
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
