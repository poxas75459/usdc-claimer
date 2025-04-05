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
    "2mMT3LpXUX1pGTeKNK4Pqh3s4WJK27VptsqBxDup9seeTjdoY8McZMWVVvD3kQZCFGws8LeCndBi49Q2DcsyB1EZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4k1oaqjvGaa2muqQhZuAFNRjRhtcFHMMtqT3cKaSXtwziRj5w4Chb6oSbr4PY6nvnGpzJk6iuVyU3WLnpHu4P9La",
  "key1": "2JQS5eCTYwdykaSxrK61auuWfkQzjE7eGwdNCKfSjmFS5quUd4bfaTtXUn6n3RXCNa9ssNsC9HpaWCnonCUpXfTF",
  "key2": "3f33Prm6dU5JeQ1yFkxmVcAFK34q8JnBwLEuSmG4k3azmmfWtxqTnz1Wta5svBpzqkQtkBa1in1ezeZD4tJbVmr3",
  "key3": "B9Srzv6pTCPUQX89S2L5C7NX4Jk9HfmerF738x7SMAvzduEGv59sv6FLj534RWXE7aCtxgkUJqjK2ozETSES7Ak",
  "key4": "2TjK6XD26TUNgXTd56Cp5P5iGrGk69oGfeUH7DGeeLomoRrqEo39fTMU64STfhNifmGT4ERhMNuAiae3ZMATpgKT",
  "key5": "sgPPbe9pbGY1Xqr3xx9pontfAGwgUBs5kuvAFhzGZWv8kBUHUAkJY2zMdZv8EQ36vGnDCvJrHGK4GvmADRuw1RC",
  "key6": "3xdo69Vm7QiQu3URxuDXekrdc86tPgTieN4uv41pcdVmHSMXLRq5bPSKc88H22ScQUd5gvu9wHgaijCeL1S1reEH",
  "key7": "bntbYYzdEgUKpBpZfdydAtXBsh87LHpY2WmNRWmg5FVwbS2ixC95y4gYcbAJCuBMH7m73U9dic7upLxVF1uyk4Y",
  "key8": "3rzTW3eUwi9385n7vpYkpNUsozB9GnLWPUzHhyJ5YV87eFN8oZz9hwyN5BVuFPBnteM5AL9zVPP94WWA9h5SsjbS",
  "key9": "4HX6dHJC3jCYVa2UHrvo5NgW9kR16F4HmriwwfJ2sUL48bqPave3KHcJH6Z2JQbtwdY7K9KzTQgx745ULE2P9uDw",
  "key10": "4Fn3oGtpzDMZimiaQ7WQtU4vs8h4qthZGaK9u6y4bvyZKBfGxkHArwYVBtm6yKiMHZQkcosZXuQxiNvYXTgrDVPN",
  "key11": "64zkA8VvfmuDNjxy2qaLDxqGW3gDFtsQwopp96b8stLTT48b8frsrwVUkUMh1Z2QiSu3eKfW8i8ihwgACLfe8duG",
  "key12": "3T5EE5Wr4oxMbACPEAy7tozhaEciFeNgaG4QCJt7Jiq5AEnv3x9TzxN7GZAw9EJHfwDgpv7JWLX4MogTokR57PxM",
  "key13": "4D63t3inrPwhbtBeb3F78JS7tTWaHBS8uiQXM1BwST8faZvEofuck6qQMuNVSc8EBoMkqjwYpenu8AhVgYF3tiCK",
  "key14": "63i2etCqk6gqay7WajUPkfg9fzLUohouRu7oWzRQpUdhNYZ3UE8677V9sXUyPTqRWzKmCmmkbKgc1T224cVVjdRx",
  "key15": "4xJeFvpvYh7jKMNhHeRcs7WheJCJ9UL7Rzu5J76edaE5fac2jfpPu6Vfumsa8LbKXucrdtr3ZGimj9gfYkWZ3dSV",
  "key16": "4GLXYUTh3LZiTk2LHrJAK6by4VzbyZxjhvZYdekD8djroosbXLUAKNRpwSPcatYfBehzGAsX4oy5YBkf7MXqihCC",
  "key17": "3S355kPzT8HcVckpMyAeDFbZsDcEraa4z5Ecq9AqT3ZqofXGiqAK8FJMddUyBkNgdYTz2wfvmCB9xVhi7gXbjnCM",
  "key18": "3bA71JYNspeAFmwX2rApnLPpxCAKtzBkey6WiMNgBGHMhLqWdsRAaUBjdL7cqyP1SPF33aHKV1jnB7QHn3i77sdz",
  "key19": "3E7VTiWeUjdCZ3Xp69gAqvaNYqwNNb6jGX8uXH5bqMVcJAHcbnjYVNbFprLtchk3fV5ogMJhCBT3exyG3r5dzwZZ",
  "key20": "WCHT3BVANTZNTmDAgAnvx36DkELtN79jtfRH6bbPCDPgeknLdKS6rFadE27ZJ974CniHBqYkC8CVaQFUNmnJ7CC",
  "key21": "3mpb2MUxzwYvtiq69ywF9wAfGoB7LkFVKo6MoV4RNyYt8VEbgJKGbTp7Ev3eWLL2HUnDwGTGE5W7Y4iGGn6qPWnW",
  "key22": "gEQ73yGmfKDjsWggbsHuF6baKanKVgvdtTSEXusk26Qf9BTJGJAK3DsLnNnV3LHQzXE7nG2DrhDeSrErx6S3zyt",
  "key23": "Ap319xjpfUb2jDuEagBRBJg9vE9p1nWTqzJvCGAzzsRH6iRGqvxN1qc4eArL1xpzy3EoGJ92HXsZLFz5T1VS1h9",
  "key24": "3Ldo45A8pmVP7rnUoNZUCyGLwYjtNFMpKk2oH2Uu88Yeu7mSKY3zNq8XeWet3nxnZLyu3eHgvDufNMao6rDWeCD4",
  "key25": "3JpvYYJxEH9HBJ2jUQEhBk4Frt9djfWdJye1k8vc4S3gw6BHtAbrTmx677xpnx4b6Xx56otFQ5HdL6peWS2irbBt",
  "key26": "2Qqs8tJy6gB8rcyAp1TRtZP4NZgwZGCwrqSKxWyZsNexyLKJ754ZTbus7xBrS8TsLVGSPA5fXvXc6mxL2KKiPUTS",
  "key27": "4Zw7Kp31Zm3M7jLoPnQN7eLrQCzWtDKxnsqqMdu8F4SnMiUBbAk8jsiaR1bFpdkury8DCgRjCTF1JVhDzDzztVDB",
  "key28": "2pX9UQssoeRbY8aRrqvw7yFGRbSPKev93UWVVzyPJiPKyZXXUW27zhZwccQ9T9SmPq8oqG7R4zuQt5iKp3MwCQX4",
  "key29": "4RUZDeKh9pwQ9qtJ1kCSDLSrRtE5Rff9Ez15t3g5xkGMwMJEUY5pcizFZQSrzGqQTXWvz8Y8n771QiqdBALAN1Su",
  "key30": "VzBbQtYx5pupHg3hK3Y1ZYCpNxzmbMdNMwyL3ftoYabNrFLc58yPnqJUXfiyw5gLLfj8Vukq8wv3bcc9uza1Ta3",
  "key31": "4a3zngW4Xhv38ZPwCPWN6HkJKCmMmupZ1XUXWPHjdzP14XUuAkrvVbz6gtuVCzFaSjx65M32r7bDz6yZUAgrPVKV",
  "key32": "46Zt9r1JzRzW4xoJsujXueoYjWkj4NnpL8kvTMQkqQZdwdnRr3LVcr6AsdGZac1P2FyZjsEbkjf94mAD8icEUjSF",
  "key33": "4v7hFb9631rUruo42ZrSLoK7PfGTttZUxEA193VjuSV9TjfJ47BJQCjWsE7z7Wz9PUq1hhMbBuvYBMwrduxL9P6D",
  "key34": "3AzUYbNmGEmEqLUAGDfNf8BypTMnf828kbvNKkRXMTH1huBUxWGBcp82MRtBXN3TVwLfZoJ9V5pvJnv6nFQKi9D6",
  "key35": "qcSBcKdpkHhjTRmmmjymKrf77eARpToneQ4jiEeqsdmFxJN2noW9REG67tyyiDHEmeGGqUHZANbfHSYx2FnhGEn",
  "key36": "ucsNYnbx8k3maeQsmALEeAi7uhP96ZD3gJdoHw5McXVh87fzYTPTaSqxf23kDKnnegwYqeSZHoYSb314Brm54H6"
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
