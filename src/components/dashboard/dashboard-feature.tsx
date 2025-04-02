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
    "3fQjvHYcgnVdUWm25VKbgQ16fkKjqF9MJ54cDnXajNuerjeLhnc8xKME9N6ahqRm42T7xxUzC8Q28zn3UZwgSCyf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vSFcCi2i2Fkp5dta8Ta1DYKYzvG6ZsH3AxQ4TkXfroNBkc27QBYvg6NV4JTsZMyj6bBg4w3KxcAXwHxLqQjVfW9",
  "key1": "2RPbSHfbXbCebrd5qQpZJHuamgSQSy38EvFJNbEnL1i6KPJKMKTiLkcwTFZSKQ9CDebzCiABGEYWGVh1MQXeRL2X",
  "key2": "4xPGbLffJQoXkVi1RNLY9nzrSNZyD84f55y962CBjDcNqcXuBcBu79brFtm8T7GcUfM8JC9FRusfBXhz3V6ajegC",
  "key3": "237ju4mtXCrV6resCHnMAKMBh6dhoRpC3nB1uxQbXAYfTmyCEe4R26oKiCcvFCArWyiADgJzvagBmdULmz85bvhL",
  "key4": "5oBGbgSkBdKSf4LXX4CGmnfJbWv4kXmH2nX7R8bCzoydbHr6m2imni2XQ6an3hDzEnmtXwVKbTtNKTnQu7quQPSf",
  "key5": "4NUgV9EE1NLPBjyh6kkCGwxWuzZNfnSQN2qbKCpZX2YEuR43Sb4VxuMdPytEM7Y5CtSheT1Azw92w4w9v9UM8xfq",
  "key6": "b1sPKUecaqD2aqYcs4oq4jQoGFdrvLNh6GCmaghtzieMQSWRBMhwnpcbSkyTv4ugMdGep2jsE6oG7tMZPjeNz2z",
  "key7": "5P33mfvkQu1WQMruKQFf14gADmRyVnuzJjYnUmfkDT8NkNyTjXR5QDUBwoadHFU39V3LjjnNWtKL1aXLjDbZCrvY",
  "key8": "5DqbfQ1TbLqtfut9JWo7nFT5Bfh77iQzX82tZ29jksic6AZGyUjog8dcwNVANUkAKvNXvZNCspzMpxbZe9yEiF8e",
  "key9": "5vzi5Kjp5rUySwiza2JoeoMRXZvJJ6wesgAcd8yj3BFPkmt1WQwF8am4q5aosXosnXUP94uCQQDbVCE5r7qrfkF2",
  "key10": "myCWsABQkNKrWBEj4GajhpS8eQpyzA3RDFbu1MxAYMtkH2scN5xphHKbG35EnkAgQDUUiaQRoFkxvhzkFVMnsXk",
  "key11": "65DNd2xFUJgUewyKR4axF7ERHmNSb9TWbUUHpHdpPFUoJJgRLupW9D8bvf2RkhSgykB3YjYenw6ur5FbFNAfNv5r",
  "key12": "wrw9YfhdazvPW3ZCQnMp6bGjV3T1TjCtoQboWMy37GG6fczfUr86Xn6aCJ3pkZJBzbgxqGtRXeQE3kQGVBFj9VV",
  "key13": "4biifWVmrxXZQdYfUsYSXTYPTygnyDfptGGQNJaQfgL4HzNR2h129TBUG5SAAND86XBYWVAmfNM3mWPa7Ls7SNWX",
  "key14": "s4MWQf54HPEcAjMbVwnonHqEhy4MvB1mrduinkPp7sdA9EXF1S5DjTPgWe22VTaVSZ57oMMB9bEnNzNMc3NvbzF",
  "key15": "4F6wLuF3mp5f1TnZn6bVh5cS1T1waJaHy7xY2U8g7JZ4Lhwvsf4UiPERGNg4B6PHaH44Jk5ct3N37bGCe9myyvzj",
  "key16": "3S8ttHhVLeE8yScT3iFFqzTxm2f7DKVMLsDjShPR3dAMjUd1yE1akt7dScJYPG5TGQbW75ULq4rMY5QPGLRqA2Q5",
  "key17": "5bX49fLWRnoQt99vptELxXbNvK8ATKafQY5vgPpZsEVrZn5aKLtgftQ1zX3RidcfxUAooLXVEGW53idHwQh1hemN",
  "key18": "4BEQpsj8wzMaqNvapVkV4w7WUZmXoRwAX6tsnsAq4p5aFTHDFut2sAy8bihRn5sTgREqeLBJbsCtGerWruNmbgN6",
  "key19": "2jVGk5imz5Ews1tTwzAE4nDWd3Gaz34jXCrttCbw4JFg4DmHLAqBym7AB16CNZSncWAiPrnVdauoATHQBKFBXe3f",
  "key20": "52rgsfTccey6FMT7Ww7DdB6PhJQhmbUQSFcxkS5mgyMixuwjU9nwfYGHjoEMzZsFtZw65srEHkhgetT58DBte14w",
  "key21": "4CxSC86dwCvgjK3jyCTJCGbxo6pZHfzUTm5JfrDsBw7FgMTxf7wwABzTmdjViUiwU4iuVZJGzm6BmmQDp2JCa5yE",
  "key22": "zHB7C41BqP3LV41gio5Q9evYXB3dTGSJofkUHw873YpXPZjz9NQgVJzj7PrnqMBrEBpAfbbmPssR1iKoHfuXdm8",
  "key23": "3PjW7pQvj6j9vgw1riqhMpsVBytzC9w6BmjSUkKTTURArz85LSfXU5YvtJTcPhjATUhW6245L2dyqYCbkotisWPA",
  "key24": "5Jh9jGjNFDWQ8Rd6jT3L3XfsBiJFiRmdzdCD6YLHrNT9gDfF6X8VeXUYJdyDcLaz6EqW455ufPrvpcBr9cZZELy9",
  "key25": "5Wt6c47UELfaLvQwku8FNikKDtGkJiRGuXvRLQboCYz8V3rZ89mrMPVUXNgryeXNw4ey4AZe1XdfR9PYCogwiqmL"
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
