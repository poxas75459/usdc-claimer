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
    "48z7sdCUEjCuZx4axCKAs8Ufz2o57kRhdAGxUtSi3SahspBHESiHZBXnYg7b23uTjY6W2Yyh8pX4Qc14xwXX3au9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5C8bSpsJ4ss8Br7hU73FX3ZHhf6EhTfTCeCvhKZ5nmWf2c5uQvx8UBKk59qcboC7MPuvbKq5ccfCe5PjGaNrF1MT",
  "key1": "2CSbgWr28iN7R8CQzo5pu8yVoc8wuXzLPo6s3eKQiBDB6bEKndopZdSTgs4242LX7xmXg3quUBQEyYDw3UAEdBZz",
  "key2": "3ASLdU34qUSrijyV2HnshPAuvNQESoahZxJRimKYchCLwze44PbsMkpj1uecpspEKgYp3w5ZCQKCp3hrEXrvs4PK",
  "key3": "3TuK18n8yt4bGfh1egKhJNx3tz4a6n8woEoUEJuq9NdrtxK4Y6y6d1vX9tgFthTz3vJnsZVuEBJarkkxhTnMDdf2",
  "key4": "3BJjjUQw1vx2vTXEVzvmLkXKEKoVd84CgAXwMYALSqK7KZC9nob8ve2jBy7C1ENHGemy5U7o1hudqTqAemEYjjiw",
  "key5": "4rPmuf7qC3Uqt7uGLZr9ZmvfwMtyX54ULyNGrzxHKLTnkRT8U5RdHzUayPvNo2mPivDaCUzHHWnCEHFC7iFFsjwH",
  "key6": "3LVGdrrc4fkarvUqGVrzxWo3p2ttYVQqNKA1XCTAvo17xgbdAqY1Dwt5oPMj68V4jbScKTTnzvgcD28f196mXuRv",
  "key7": "2iVNYMTNVFHp4aTVbfdQghe9NV6sSiy2FgUPZ81zUz4Ur19SskMp3hAxuJJXDR2dEi9wb7FjVyQrEZWn8pVqUipo",
  "key8": "129z1fdEz2mFermV74EqHD1DTD5f3C5a5QqPinYEvebVXhCNvkEXw7TUNTHCYDT2U98FGukXuNKfPYcedobfz81r",
  "key9": "4PpFKW33eu31CETPeA2y47nDYZab2kNcLm7tEwHomf3YuaYQzLkGWYWJa4gAniPJnyMgKjACBE964xNMqkLMAsmP",
  "key10": "4RvrAt3jsdXBWSbRrE7XQCbXvHqXQxiqQqpqzBGEfbW7jSnUowAGAr8FviPVNgGH4V7KFg8xjcaW631KWV91DXXv",
  "key11": "PCxmjYLbNvy3vbEt28C2tENTkmxhW9zPJcXwTUecjW4ctUXQM6GS6CW1y5u3J7DHJKUkUGZ7g6jrufAA9wka5tF",
  "key12": "4h7pMmjrEtG6cQarkViCk3F8R72zY38CP23rXcLh6GnMt5gPvaJxkRyQMmhobgys72ebtkwnUTUvJ83G7cnPGMh5",
  "key13": "49wirqBVoh6yZjazxc8EcfCLocnVKafq9e6qkr3zLK8J2GbDpWgErHokMbcT7drXBDGL2mM4GF1ocKfF7tVm3VQ8",
  "key14": "2USWEz31oZHr8LnvkFHvxo2YPxpkuDCmdquGkjbm4DmUoEW7WAUsTGQZeVwVaorwV5pvVR9AFtJ7nhmwFRVdDcap",
  "key15": "5UTpo9c6QxMr3oeDTHerKqJY2MtpiuRiw4J8sg7VJiEopDzvNp1wHotZBghx5G6PZRWVsDNwyjNGdizfZB1TT7oe",
  "key16": "62AqwYbhvuXHxJ3VKCBfkUoYX7aqYDKrucpf7YZRukMG5Lm1trQM2W1d2N4Tne5hb9LzKJQjaKjMQMqdUNAdCaYd",
  "key17": "46FFowpUQqwY9EPSapWFVRxsAtSQARm9geFTUKwXQY2cBVYLyf99W2JwbSrXF9ETYQ9Jao77KCN2Dc9QYRoF4odp",
  "key18": "499pMaFtcT888ya8KvEi9gDB3RSQLsXM4x92SeLE5xpc2UJCkE5LUnDcpSoAQuPtdsEbjZSMidFerKByAMnCBW4K",
  "key19": "Ce8tQUUCuv2TWaPgE9oqA1abPK8bSaDpiwTnWnx9CDraiixRKqzaQqhzZcQBQDGojWpYATWY3tiZrBzomzkbTD8",
  "key20": "654MLSzAkYGJmwZk2wVBpKbDZgBRtHZqxKqyaPECXGHbuBzebt5aPeacFeagamD9WJDNjsX412s32S5NSNPrgfhR",
  "key21": "2xGB1aPweENXxG7HHRxWDzW4Zu35CRpJeJAiFteHKUkNWBbJXod5Wree3DvWKmJ5M6akS8tV8Wk5y2oFMGRexzWy",
  "key22": "3DaRXDF96Fndp4wy4UtVMAbQz7SzbzhJ2vc9xJWZGDbfVQQzSKXn4fiNr5eDn1z9JJiBCHtEbtDp8tPCD78ovt7Y",
  "key23": "4NhZdp2AJWyP5GCBcz9FLwpiAP2rRRL1FBEmjk5sXVty7AAKY7JBSu2Dm5Tp5HpfowTY1iYrdq8Z1D8t12mDD2aT",
  "key24": "3vdurJCYQBvbJY8WJpMZZg5bcP1rSEDR8u1hKwACEumzAnRjwX5fo4XKiktYvaqk1GCcEG9rujFGy53p5M6FSDDG",
  "key25": "4wFmnfGv9ViaXfyoHLCB8GE5p91odobNuYrDdW9Ym31x1SZWPTutTKgVeD1in9eyeGTe97qut3eQU9FgSTgM9584",
  "key26": "5VYTWjWjdb6VrA5MYhxykT3AQYY1BKcSdYJhfniNukUS5AfXEgokucQLQunRNxFLZthU6TcXRn8YqGdNNbMwDwnS",
  "key27": "2wGL6Zj89MEnHPnGWVCyujqqokbsYEo2Vp73Czp4iDrA82ceEUzf7SaWyUirhwkQ9224QDxyirSvQ9JSTPzJVmuh",
  "key28": "2ARjhygL6GFx8XXptcfV5uER2C6PPxAypdgvzQucgGrgVwxENaqmbCJvfsB27EJXxRJqXEHXetAEijJNqMmp7nQf",
  "key29": "2qbq65L5zhwMuzcrJ7U66VHNMvqjSHmuHHBaP9aUeD9PUWqLMmZJLaZ1TjeddCdYREnfHWArdwB5pU5sizAyy8Up",
  "key30": "4C3ACB6TLy1pQ7KgjZG3E8C2dKTGF7pfSTxqJ1oK1KPd5X96jHRiYaH4fc7tFufcyiLHeck7dSWDM6hhbTzE3QYH",
  "key31": "2VGLfrm9xFjWEfBQq97zzc42Z8iymYKgAm91hw53At26V8Du7GAJCf8cBC9KZnoKAT2G677XESZRjfHpkKCkSV5Y",
  "key32": "4itR8RH5t4RzbFwpcBbCQA4EztNKGSuxLuTc5Wu1mfr4bKGupUfTNCXhc581Q5HuGHP8ggBRSeEzNw1i3g2AMaZJ",
  "key33": "3Yp8BYkhyktSTtRpC29N32TYLKBEfC47k5xFcu4LMqweVtWnUpVEo5uNJ4W3PhUcsZk17b4kJxY5HtLbCQFrqmfG",
  "key34": "5zLEr1ZhzLwszfxWeBda5fBXLewf68Kz2xdogcX34R6y9oor2Srzjf6iBGEZWnEGwSiP8Xihq8pQYoi4sXdbDFVX",
  "key35": "5huFQNr78MonreFZ8Nm9RGb4Z7vrDzVSgcJGWmb5eRoLY1k2feencj9Tspidjjh1zfmB9us7zxbxuSLZ5xmaarRi",
  "key36": "5YXsT8ZJVkDD7uhGUPmeKQLTuFwDgvKcb2kj9nLjxTayWMYn7vCHvyaC6E4vtF2Un1KJPNgKB7vCfMMWW29P8Eza",
  "key37": "4i93fAEH7Fb27j3jJtSEpNxVP9zKvVR4W3nXyiMyA7nsbTupD2aJ5WgdiAnZb3M7qkN4DgUnQHWkhMw5FLCagqyF",
  "key38": "2f3o3KgN8k7ksGSDa4ene2DmDDGwpYGEB1kNPJaUSNHbdyu4PneyYpVQWBXg8DFfAxz8FRFYcZca28ccWovzcAPe",
  "key39": "5gJUVV5SaADQrn9ghXipHkWVBVtaHsfXGm2na37bF6a7swFJhGZtQneqJHB6Se3NsQq61TYH4LfocisTRj3kMTzg",
  "key40": "m5t7iycfwFq5JX7wbQndsrgsA9rHxUaCmxjp1mq1hhdGCdLJZYmTVkMhS9TbUzVPXyLrvpsJqY5wr7CgN8Sgkd1",
  "key41": "3BnL5nhXPDTbTqv7ATAU54TVKwQ7Z8hUorj89PK45HZEfLtyhDc56EAwG35wQBvKJmHPADhUSfkjPbRYyHeGorw",
  "key42": "57sn8GrnvfjohJP2qLS4c3695LpwAEuGBdTnBqZNgewZmscng8TmqM8YrxUfdfgDDxyGKMkJ3G6p2CMiHGFZEepZ",
  "key43": "2Bu7BHpKwDQrg3zzZbJqNUpp569PhJphdvEb7LWYXDMV3QZZGwWdTnjDaoDS2kER3nbdRWx2GTZKyNcntvNj7tt2",
  "key44": "4AAwE85jTArp1NGP3p5Uvm7xjjwuqyYYEA1CAg6g4feEBGtW6SxJBf5YSuimhCU8hJp6arHTdGTjZxz4MZTh2qjo",
  "key45": "aHhFWdy1qmzE6kQGJxgzwZBbBoMR4id7QXKNNGQF7wi8Lp9J2QdCC56RgZUaqHDdTLy5Df5CBNueHHHpqSBdstS",
  "key46": "3uYSPsZzYFEmB1U51TN4oCcY8dfYo2Dc7bpjVvrzRA4WEk8njQ2n1j1oq36nAjgMtAu9Auw2ETza7SQNWD4DGXQD",
  "key47": "5d67nKh5VZacRb4SHDgn8Kz4yYPLaFjcLBz6Bw4pGsUEenoyN9txuM6DTwHwvcn7aVMuDKM6PfFhuQuDWS9pbdjy",
  "key48": "2aUy2jpLpcjEWLg7BjkLxH9UAnHQJoMgCqQvNxHUT923nS7hQWhvR6qxsRj1HzuGTZBKWNBLxfrQgRMXRgwr7R5E"
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
