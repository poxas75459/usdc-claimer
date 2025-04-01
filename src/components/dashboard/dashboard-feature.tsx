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
    "58KvH9C9JiFjLAzng3AcjiFEzZ7WRciSsjw3EUBNZwBZdrZbkGiRJbjgWQJVGuZ9JtivFx6fGSCk3vxgQ4GUHZ7x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47fggWy2JirAB5G99NjVKiWvvvMK17HC9vKe8p8aTmqG8sv2ikvMFCo8t48gLWthKGodo6hXVbr4L9pUsyxyo2LC",
  "key1": "2trKq1ievjcJEeW57ctaR4WBtXTxBtGf5jx66wURDhtUgwnPcGDQxGgE66uMZ5a1oawHhCJxoaZ3a4xEGtW8DWrk",
  "key2": "2NrNPGMJz3gj2HujAkbBbxWsELM31ei3t5Hbfo25ZtmEGM1KtJ2vyDJu6bEwzJBxRTUHMpDjaD55rP9AV7H1P28C",
  "key3": "5AwaNhZSHcdxGojzJAKttBaTX4qbnqJ8fiH42raMNZHkcjEVSUSotcA4Le3wcnoPLQDf692EM4RDrsZPcYyhqRz6",
  "key4": "2QcCdKgfzjFLWbwdKaecnYT5ULb4Z1TReLQfT2yQEXNvSkwzBN3pDKxz6mNdqrS9CLmerYc5HeTKk2BJZMN5RTsw",
  "key5": "EAduJ3EYzAx2ZzhjogBXE5yK4bAGd9K8TCnbi1iAhoqT4VmdNqK6uCWXtrQsu6BhX3nuANoy2kRDBZYuziiLbsP",
  "key6": "mP1J6ZiqUancbEFC53v1ToBm8tyHSKJRn8YuDesG7wejHvMQsDNNaFY8tJTnBXcYzLdWRH5vLUnVHGmcuwTYxHT",
  "key7": "2gVPnvvFSUTfygHmQtS5meZdpChj6gyX5F9fa3undPpQHRBqEF5RW5vCXp5TzVaFba3RJUYdaAbWiZCZMWHd39Rq",
  "key8": "5dCHNzfyuhfGNKnLVsxco5f52KH5MTy213N4NBJv9prdtPnbkKBrKEQjrGQvNTK4pCGyv52ryjSCh5rHi3P86vzX",
  "key9": "54sJT7jaTLHvSvxWEzbwZm6cHi35s4oQqSHa9yaReitRwKU3SZyZrhqpeuWp4pKemptnkwLaStY2C9qDGbh8R3nq",
  "key10": "3ZtBZ822R8tm2UVNPVaGum9CyEQepJ7E8jiU2UGQx9iGt9ESXVZdKcrsMAazkVL3yRcEFFCpDtESb4fESFRxCoM5",
  "key11": "3qhV6RiygmWWqZv9up2rJm6WSNTgWmjZ4BWM8h5UdL21EXAbXdBZh6E43bMw6pBHPj9Nkidmc1NcXnkyf5xMfNtR",
  "key12": "H5KFTKRYqW2rs2iQKtcuhSpZDy4yuFSSw4kKVxLnfnX8fnMZJbU6aftySYmBcKomoLUyvErJwUwY9bcEKBM42MP",
  "key13": "t4QxveTrcZeqEbrxJt362BG7u4tPM5Sbgnmg83WF8ij53i6agaDRLf9AP5uX6vy6dtoEKYH44RHN6bxYpGkAaJ9",
  "key14": "4jynFAwASWserCwicLCtzq2GHuUiu2uF2yTrNkDc53hnw31YGRk2NyBsnfMNY9Dt5WC5TVaUHE1QK3zBhpe9xNoe",
  "key15": "3VUSpQR4aYKTvVBYiNiBSmUzNLxaCR1U16AbuhvxtAQDGDd4nijTC6LDZ6ePSew2aQhomVDFGks1r8WAWcnxYwJA",
  "key16": "2eEnjsitZNbux7Cx62BXKi9BBXXohv5swZETvzDqukD5CiXjvtNYZoZZiiSuXHTjVasbThRqMCko8QxdVALqSfYo",
  "key17": "584TFi5TJrFw2JSVDVGxonwXZfT9XKDCjHtMLn2bNxSHSrQq7Z2kMkKqKpyNFGotdgRgM6MUfK6H1KJMtAsRW53B",
  "key18": "4i2SnJZuVVHtz9L9nUz6AcuE7CZV7UQ1yMVC4TE94DyA9Wr3U6gFtSqgfkVLfBhvAa2tKtHUmqr1cwV7UdhY2Kas",
  "key19": "5KTALf5o7mhi9Gv8f6smseYndX98155jUBcKkfvA14NcffZQzf9bAM9VYVHU7QToTHGeWPjfCVzS4HYHAqoJ9VGz",
  "key20": "2Yj6zmpdYSgbLcGDsJmtzRhqo5MmuyjgiQEAwGn1qacrfvcBbUqstKTATWr7haggPuiYTu1pAXzGG4J5fzg6EHeA",
  "key21": "46VYiKwQ3Wr5AaCpoxDrfW3ciebFG6qHSkCaXGiCRtRcaKt1uhDHTtZh1FkUfUNuwSwxZwauM77qTPjRX7fUrh2p",
  "key22": "5ceLFVwUN6cq2FQMCKmDMaWm79gafWdER3hkju9E94JCszNLkdrYTcnejFLz8dtcQh3hFByxdVSUryjqn1R4NYJz",
  "key23": "2u3S4j19JwqeDfjyQR6Yk4spSXZciHMfmNoMbyUtN5JriYjcJ8s55rppjzuPX5YECmexAH1Fvw68iaVM63xo1pB5",
  "key24": "3BSCbByZm7YS7DL82xpUKi6i4ZK1hjopax2sqexBoTJ8XFRzowro1UJo6HPXqxJmmBgMkFxP3cuveuTzBPABUfYz",
  "key25": "3TEqKC8QZhc6qJ5Gxr5X2kBMWDNQoF55XZYdsKbPZrrCGSYcCso9MQkfdw6gVjes6uptTyQNQadyxvZ7NtgiF64F",
  "key26": "4SXPFtAx2DyyUdZcji12jY3oZGkzbgekmGy3Xsj9fkibNRVqeZKuZQKoYqZAC1CKxQmwZKU56aKbrSZeoZpj69y3",
  "key27": "4koYZncuFFEHoxBk3NdYRzCeaciQamewEf8nf2mFGkiGFz3ccVSmBp6K1JjLqYaMiKftAbeoRowkmgHhMYpTKK8a",
  "key28": "4Jv9vBXuXg3LF3URVqYPQGWmna9fDJZKYmvj6nXUX1QCpkGqEQJMBEqU5btjZTYgGGGkyZ9niS4yQDvG8L6bgZmv",
  "key29": "53N19JeAdmLGqeKY731TwzU7Nh3My5SnroGbYDkMrRPMjiK3FhRS9Xojg2T2bGyAJEoCnWMkjee1yLnY2XxuVoeR",
  "key30": "FisvodReLPAzX1F959cWtGz817RvzKsfsMey5SgmzUqpmwDxr8kcWrUxAcT2PJeyXoX4QY3MSXWa1qi2dGomBpn",
  "key31": "S6ArJcq4kjGrcCcsjRw5i5ERnScj4gAjWxzTGVAzqa6orsPm73UADM6AP4YmaqeBF1rrxwZ1P7byCmza1joQtW1",
  "key32": "46bTJ3bmGsCD4KsgiPoRG5yNcD9XpecKhN19DYyBRX9aHMEJBbUqqYRZvRRQdAg55okobpSdv6XMkystRmKMiUwz",
  "key33": "4WcyEFbTJET61xEZPutqiZyFzifdRQbQGmSE1Nbg38fwYFNmY6uYhWRVMJTME6roVCUiF5vC3fi4JDbadKb376Xq",
  "key34": "3DNusWHSeyxr4Xo3CrMC3NaVFwkRUNtGKw3Fc8axinRd6m5dJoXuidQLYHJE6UKE74rV5xQLNAtR3SVbdbjppGUm"
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
