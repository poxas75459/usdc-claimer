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
    "3hpdKJ3S5biMKEGG5io7xc58n6ETQrqHcfUR14JnBEay8eiVy5sXS4LcbGJZxEyQz7gVRNb32487ri6BneKj7uKz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25m9N5kznYSB1c3jKesozs76uYjr2wM2Xn2weeFzqB86sJ6PAESjsL3CVjgqDvYyHqFwFHwHSDVSAL1BVEP9scZY",
  "key1": "2eXnXVwTgrAnzVqynERsN3t9dR7UC7KmJXxvo6q6yxwppu238C4TP5yQMQuRzFNTAvYkqMMruvcYi2SA3Ed5e1sC",
  "key2": "KxjySTFQWhqFX7Py4LsqRBV4n29NsGuJustBu7nUP8u8Bqj3oLb7v7uwwfJEZjGDFrAaUdpzKGUsjwGHWMgQiPT",
  "key3": "4D5DGcMcfmMXWiZELzo351cmTSLy6nZ9c3hoSNLsyNJRL3ZB7VNizxc1zyhZs3vKxNHmprWEvM773XCbVuHFdvrF",
  "key4": "4ZKPSkV6FLNF67z2xu3usb7G62FfNFqdaNkw2BgbYLhCzr3qqjt3AwHxQj7W3sxB7pTg8w2PCRcViKkRRGxw7xyT",
  "key5": "9gfRDWrU6uLeRCHSde9Fa4CbJapYAYXpxNus3RLWkRjvNnGEfXQ1Gx3X1jb8tu1wy15h6AbhmoVH5UGe9UFVNZa",
  "key6": "43vbCdzQVL5Nkxrrk1zWaFUZDrNPwY7qE2JukFXFUhbBqTwKEwq4qBX6fBAvRmi1uXcAQ3rqjgW1jWtUf81dnuXV",
  "key7": "5Pj9xAsBtUyUC2Z1ZYai6UgbDXWa5mV9L4nAhX4iZMBhKkBaFCfVF6tmM4T3thXSwqUZzGtjQAot6nbeyqVEjZM",
  "key8": "D5osiC18dMActeBPnCjxbS596pYwxUAPEKmGycrq3BDZAvxCS4qfTi3X49AhHko7i3qpDVexNQbU35dY9tdsbAR",
  "key9": "56dtyNYznTqYrVLNEyC8KFimV5MRVoJeuCP9qZzFUAynVV94Ao9Pi8JLUhqwkdwjNbS8B9WSFW4A7LU96SRPrsmK",
  "key10": "5AmrCpmiwDqBn4XwkHHas7HT7mj8QPWy1sYsnpdVZVusBe5oWftzVubdQTnEe6ARG69KE7uco3kcoFkr1PnQJjy7",
  "key11": "2DkxtP58xiwtvNaae8b9ZYQSd5HxUNJc1ju6s38uRPjg9zmCJ2JXVdbFEoHzYWoTyJX6D97E2DqcemVYfUW5W1ps",
  "key12": "31deVnY3VSLbgQGZkkXSchkyqjUwg7dTXoB3jDATwFiXFfjy4Hq6Mscv9HTh7XxaHs1quYpss5utfLbeH2mR5zYj",
  "key13": "41k2pUDsHBJYKg4pna6G8VaW3Dfrs2GuckPfKPgaggMVfuuUaEXAMiEMLar6QJwNZ3QQjVBrZ4i3HXwx19ygZnVH",
  "key14": "5Czp6Mo37Su2p7uvvabJmnUNuWdiDiwK5UPzwko67SXtFpUmffPfkgRzfQiops2pESWrZxz7CTCrvaAhz2RX9Zg3",
  "key15": "24weNHnRr54RsFkCHz74GcULEeBLGdJtMwaE7H8WsqBW8GuB7K7Ubv3wX9erjbVCqGCH1rYoJE4cXhQd545CUWqf",
  "key16": "5BKhPTL4ddVFpSut45ym4XKwtqpSGc3KGb6oLEM5VQ7LQ1q6o6AfJUuhVQSrCkcZFdcnxRajUT9am8QCz3ta782v",
  "key17": "4XDUXNc64jx4PoxGrWe2nhj5iEo2sF5ArDmbXTiWrdybakPWnHP6QSSGJzsk1pkqLSNTPPWZVHdDU2FKQfEu82YV",
  "key18": "3Dvdhq5F3ize44nG1Lxn6m51yU5FqLizHKZpJxte4Qs2D2CFmK7R6Exj64KbnuNekTZFvA79zzu6BtmDFgxV1W3H",
  "key19": "5gyB8TBVtY4vEjAq11DGZmbdoPt6UJromVxwNpWJFMwHm46EKESF5usjFMjFYDcZRm1vF5pkuszP7JdqNvmRE7om",
  "key20": "5LyQMgp62rJmaVNAL4kYRuCWq5GSmYLBMjdz8KRnbt3TnZ97g74ebX5Bgf2zVPj4zFaUyD3P1uu4FnjWkzAiwmqF",
  "key21": "5ckpcUZBn4N397nTtPzTiMS2Fe1Hmm1BinETmW1yjpwkYSDcq6C9C2DAJ3Z7fFj6bxxxtFKJSyWnBwKGyw5n5mBQ",
  "key22": "DC7Amzp7Yito8F8MXraBSiPdVWGNZ3cbRmQ2yLexGxYMTQXugTvD4rVEFNyxbMWSwiyb8tJbuDnkJsJiaUyRJFc",
  "key23": "2fCZ6nnSyk9BsmjvwvswWskqczzHqsWTWv51QiWANDPVxxs2uGfQnUapQMKAVQ2ujrny3TLT8NyP82E7eDrrMzjY",
  "key24": "qEdyQ9G7MRkupuqkVYXtoLBN4sFNymj9xuWQfsdeV5YXyh8WfySLEksUMGnsqE9nxaznbCiDmnTgUwgnFgnm11o",
  "key25": "56Twz7kBs45rf83QZx5FsbU15J2SWwpeoKgmYsEC161npAgfoJ4GTCof5LAMpMSe3VBF1Tg5eycqsQFZwUoNW769",
  "key26": "4bApQgrFvM9ByyZNYSJzvQuzJ9BBGAtsRDWbnZCGJhHVkosJ6SXDBEboeaMgmXUTKpjKQsxn83xaezpf1i54rLip",
  "key27": "2Lst1TKffygY9pGHqJZJoe9yViF4PwnVtD2WsK9LFvPe3x1ccmVKzdrZmWGPa2nDFUNSPRTiVwrTGJLTT7JWaQwK",
  "key28": "5uoRDmSJEQpR6eBkTjo9az1pe3TVz3WrRWeDEZsUTrE2c9wddXjiaKEbaMXYMSH9NjZH9jCuW5nMsTm7J3dHaGG1",
  "key29": "3ywNLzWfGbPqUEFs8a5fycmDxZxcTRxcRqhQgy4VPEjB4vNh8kUoxAk852BVxZv92w5fvjUoTrVvjDAXcff4Ls22",
  "key30": "4gi2KoVLU53cKZdJ7pVwC4xnYR5pD4BHfWCaXoey5AeU6Ep7FukkzCXXrzi9qDrrzYH1MsyTTPca9R12hzFpxEx3",
  "key31": "2L42ZRtiyHcfvKDP7veznZxxXpazfzGR5uxkzd8h71Mw7xNDHdUfEunUNX9SMYqxKfyEvRs79GW4BiaL4oNHqCom",
  "key32": "3njYpM8xfRtHMBrsTHBoUrkFgQvy9qjv11zoCkCrVPXYv1EL11NsdZHnnJKymDrgY9LTaY1QZqJUnJU3756u2zvW",
  "key33": "4DxEVb61snUXMdSUL9rj1XJqdCXEfZMC6848KHEX1UnPygQJjs2Naw4EtTQpDyEAanQwM9ifPk9HrYy8NvQfGjme",
  "key34": "22A7iJMkzjYRWzCLJnDNNn89J9XdL15C3CdKG3QheAroQFcjxXVxViLDNaAir85UF1Nzkx9MJo87xRdWSQ1wo2we",
  "key35": "4pT6XpgtS7R31B21Mcxkr5xcMEpNHATGm49ZbhJ8YByhKE29yoMkUxzn2QP5PPh3b5ibcizuxJawWMWtejCAa8yb",
  "key36": "5mhmpfNUv67dVdERxritCHxkwVReKbVu6j42UrDZcUspZnQD6inSkSFou2Jm9dmu5S6PrdCXgVVDWPVkfRDsufN3",
  "key37": "2vfU14xGHC9AowPwLFw7aSqF2N9YTbhivTcocHtRSCJxng8VEewdPGa4sEVUjwSyDMxe48CqipbGfVw5xLswUgVS",
  "key38": "2n8Yhmf5zjTjkSNNA9zibMfnn98TWeuLJUccCjKfn41xmD7NeKF9Wb7Z3kFaQi3tou9mkekVgR1g5ShYLD9cyDW6",
  "key39": "3V1d2yYeUaaUg6dAuzbrnyudS4Dz2m7tKQT9ALZYpFpSscNWmyAZp6XwhHFKBjb1izRU5NVfKpQfmSgKqeswJR5P",
  "key40": "3Vz7gfWyU3Z5GEPHRQ4kLgyeepx2pZQFe3HStYK4u6zp7bN6cbJikdqQ5Bmgey6fxJaaSC16JjBFdaj8Bs2Zo769",
  "key41": "22j2U1Bie8rpPLKTvESg6UeeNMrtyLADX8X3SM1YPmVAH7PTLEinQq78XGBFJ62S9FnasvBrRT2J2mNWFNHvbnhV",
  "key42": "2xnyXQDqQhUe6diggjQjwH75X14aUodKKDnPcEuEnts8dEze1jrhSCNdQ4g4qtdMfT4XKRL8xavUteBimshcoYfK",
  "key43": "5enNrgdX1xABnYCcPi73g1fn8Ph5TZWVUQyD4Dn4ftEPKsAJ4fooC3tTs7wmejBm8okJxAKmRA71bp6hH6Svc2xw",
  "key44": "2VSfddEvzyCpvo91TP9R7qKPhGVABa7Gc9PVWxcuDBUKNBgBRvNxN1aEwLEbGnKpC3vKnHGvdHKiLbWUj2MWbWpD",
  "key45": "mo7V6exyAsNUcGsXL7NfLCHLi4bQbdp8cVhbzRoZhAk8ggtSQ1Eu8s9n2ZdykBhjayTb3tqXS7BTo6FrbjZ9Tb2",
  "key46": "a8v6E5CojxPETFRcaG1fENkBrxYvCjSWNo5iJ6fxSQThLfGkwuhZRXdBx1xmQidRJBq6bkWyL1Cmv9YC2CsLt6C",
  "key47": "4b4W1VvEkmXyG18tGiMCp998jQodXqVV1gVs6yEjHcM3YehvU4AZvUo6VnCcBRQbYcVmMAqwoTGdSXckexJtU7XK"
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
