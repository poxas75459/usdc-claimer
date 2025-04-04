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
    "5pfog7aeu21x3vAkDdqrKekTHJF5DvaLGpZtZttW18fgqWG6jhkZGyJY3wmE2owQDCV4684QkRfoc3vQJEnhru94"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pqDgGPSsnvZ1iCjGkAGcBuo57DoAVnf8QjELb2Qgc17aWZ7NmHcSeMrsq4g67sfBVz1JCLo8CBy92YJRdAE6LJJ",
  "key1": "NYHD5zTCBN5QgGwKAK5KoTny1z5HvNmMn7TvXMwavwtUorL6w57Dmzd6yr8VFFiqYaJQ5xoReQ6oSJ2twiEe8dG",
  "key2": "2nB9mT5SNh4gF9TCkqTFCwayyoWFHaUn5R4GQoEfxNwz5Q3ArofwWu1ekpEdPXbJvYn4FPb7KxjqtGr2kErbniPU",
  "key3": "5LA4GcAnTQHytVCUVU6YrExmxd35rRe3syvgurDc4aSaZ1wF3AEz8r4gY1vV9PjqwBL6wUhkmBgpv9L8wyEmttYW",
  "key4": "VfzqTD69yt76JZrxVZQV7r6qaXoNnApGx2B4RZq5oMTa359Lt5X51r7UQVPZcNz21PoYjfXBnMC7y6WqxbnJJWG",
  "key5": "2ULhpSyWgEMFSgnMicTnMvxgrcJpwwJVqaHkbqMVvuWxKwwVDHdyVB7Wb9drqQufBLUkLXmtw9X4U6CZ8QiUuPrr",
  "key6": "5LP6yZJS9G4DzU47j7584qKt5qcRinF1VkX9AkzN85QyGGxMEFBYhM8HgMWYtMzzCQjj4kbQAVSxsntFpe1yrpUV",
  "key7": "42Hdj9uSCDzygLAL8A9gAr8fBvFjdqN7qgGUFrMhSCtiAFfdqfHjpfyf4TGafBTFTmQk6ekuoLwyubEMUQDMgNsk",
  "key8": "3mte37Tuu63f2aV6NAceiVk3jsZpFSicYasuormNX4EyTdprtgbYESUgpbc59xqdUsGyUHnJVRydrKfdAENTUx1X",
  "key9": "5QqsSGQ9L1Ztk9Ai1vUJAjDaJxgmTnQbTYUbaGy6zG7F2SGpdX6kDTnJBEUVjnQ5ibC74G4noGtukpLCqZ6kqXXb",
  "key10": "2Ydjp6vMBmrXJJWZFhtC71rPXzmNaJW4CzehgURSvw7jGeJsryZmFKHKr7r82n8mYkwMTCNPLcKKJcdQvoGWKxvr",
  "key11": "5zXQTFdcK4TZtWAqdEPMqTpMgM9aWdBsBXTLUWQ9vj5G5LSW8bBaZEY2emE9ZeyLydaWKfDcX1cKZrJF4we23MTQ",
  "key12": "4AFf2hQtbk1E8cJhGXtTrYNZcZqvmGYD5vAzibesZVUReuzdQEi92465j8wDDKsmpY6r9BeXHv1KJRPu3bXsuH2B",
  "key13": "N9NSLQ8tD9GRygFqkxfibMXq8xiipsdqp9mEqLNhH4rs6srfbyKvrPoXV4ok1xGjvXXwVHHUBRtpeXfph6GDzdk",
  "key14": "wigWGM1aSbvJSJEkAA1YmQr86nn5cbkZDtGjjbAKTj2NkHkaTtv6Jd3mTqbzWqUt3eHK1hj9qbgqThLdr59pgsj",
  "key15": "58ZvFSvaQFa4Jp5f3z8yqjvob6wZKqCEhrJYPiTmMUB1yAwmo2Tkq1encfthEfKQsNgu1xSisZemoZs8ATmVDQa5",
  "key16": "3hKWrWgv9C2rT9bsgeFHAeU8GsSDwBcQzUnqbcKPrifgXo9pns9jFj1KyP2ckcC7pXBNyGvQtpv7rqXYWRChrFKp",
  "key17": "3VFqVsDWzE9SD1v7TcE7vXdNgrFjauFXXreAnJ5PGvJxnepVZQevvjqrJfeaB8V2E95N1Vos6S8PjWxZPPBnQ1zb",
  "key18": "5ujjLXwmxHEYhxMWaixftgRofSfPi1LhUjMeN8hSVdGpz6DtuQFRraGeM8kc53Nt4XYpZakev8fBounr3nPNH4SR",
  "key19": "4xJ2vj8qi9xeZQNhk1hUtRboycARnyvwUcg7XX1mDqEt9RsohoZuvXCPh9GqtGTxTSFodbeozoANFUJmfYVe2pvH",
  "key20": "5s1dZrwdqebpPytcd9Vj5swrWQpbLhNXgCqpp3FkF14bYMEm9YF3B4Wppfz6Nvg7aq8L122pP8rTd7566MNQL4oE",
  "key21": "3G4a8YY66KqQWctTmbh5KdBgNBZz1ycaK835z6NfiXs3K3Jhm9CbGW4RTFPqwMp8B86u22EMvR3TsHmXVt1EtUgj",
  "key22": "4o4E7Jt5tAHUe6fhdegEsveYqmvxDhEPZHcS9DkwqPmLd6F5HCNaoC7w1XjpQgc6u2SW8cnsnsGYAq45ARmThPPf",
  "key23": "5S7kqTCKJJHLuFrBCQAFkEwRCCic72P1DtTGqHSGpjRVPJBvMV5jd9mE3ybETSrbUD2PRmcTB4Fc7Nxyv9ehkqnt",
  "key24": "SfgpLQQRQJb2AKoCLBwyyNzmWEThf5QU2uQBb22DKRMuHCthkaTHez22cLdGi2abFFEgg7bSUS17ynBMY7FByqK",
  "key25": "5QFTJNzm5rSvi7smvb33DVY5A9VsVMU2VYA33TcNauDLV5Ktzx2vXGzLxK2ACVpMhAYfp4XJqeHr5xgSNZKbBxhF",
  "key26": "QSRn1gQiYV1qM1NyDV6fM5S7mY4AcD3Eq4rhLdUXUJ5wYYVY5s9pwvZZhseEvsoyZTAsZsBoW6eCkXwchZDmAeM",
  "key27": "3htHf3oyMVZ67CJ9sXHhU4Tb3zgUAfi61EEBjauF6JJScDvaVe1iu7ygbxdwb9bXGT6Q74kHj1H9VRTW8RJn5rkX",
  "key28": "5gVs6jrNG7VkUgVatv9QdQdcUqKbSawEjT1UqWigTPECe3ginY1itoQM6jTcvmYLLBnyaomVd9jGC8SZHiJqfBSn",
  "key29": "5PwG7MHNmZyBLzNwU7GRW1fwYKmELEC45d8BENjRZNby7yZ8ZntsmjiWM7jMUWsQupk6eRv4YwUy5deer6Yk5sPq",
  "key30": "4Jb7VXyLWjR9265X7mjXw4hcxBUcUQbFcYdvTbDedbeXijXc59ZpZCaQ7gmZxkE4P3XJY26GRg5HySfCkD6QU4Y7",
  "key31": "4oHqEBsckuBEMiqZsnKTntiNDkPBPkMnoaCyXXjFpseYx5uUuMtSQsC8hUd7AyKw6qeqevPQMfbxFFeoqjcNv7Pk",
  "key32": "2VJ9KZS84QpKbesYUhU2zUhAJjqrD88UwxyB6mGTkGsiVwE51B49MHEtFRU16FXNccopkFzmHa7bmqZJ4JbkJjon",
  "key33": "5HjnFWMfUNbW1FXyFidiWeie14RKFkWhnuKm6s626mD1MEDU9LJEwipfZf1xtyReJjDzjvGoanBK7kSymgDv7guc",
  "key34": "5Naz58eCJMs5EV8ZFs52kZxYadrz9VtTpZHMwNo5X1PuQHAvicz7CBpRaSDcx3en2rNxVBW7D6eZeqeWFGeuNCDu",
  "key35": "3mC9xJJjFGLyRD7p7REvmVq51koYrVNiyvFbhy9AqDUnycHPNJUwdZJBDvHw2LQ2heuncdSU1CSsnK6mawdeYQnU",
  "key36": "2fCZteLzmRCQSARPeeayAw3Psak6RfqeoSgGXXikNxDeiF9offYLHwFKvrfUGakR9a8wgjKQNuXDJF6wfKB2RRE5",
  "key37": "5axxiBQGpsuC7ttejLyom8nAtQ3JHqNq5MgSE2BiV6DR7ZmBNHzCXxrJJk5hBCvSUNHKfDx9WT2ytRpn6CEtTMzn",
  "key38": "3HHtksYEgWrYrSph5qBBasYG5vUcgckYzf9Pqeu9WR6TMcGGnrDvCS3vfapbPnh351qCcDHXF5TjvDXXnGWTRdMn",
  "key39": "2ptAdiLX1N6cuQ7qLtvY3scGDgv14R9DwAXT6ERHqTb3r8jwPWxXtJ8cjknqVDmDct2R7o97RyKEVvZHZkwAUsA2",
  "key40": "4Kwda3X9gGLzWiGUChQuEAkNk9TdbmJWe5xfYuKx4AmAy7s9za1wh1LMWki4uTYR89iyJRheaXwSKYUXCRNvLnaj",
  "key41": "3osCxx37WRsew11oVPxuwGkDws73XXjrgSuJY4vEM6TorCwjhn47pd3LLBbS5cvc1osPMP9cy4YK8hfurFwKfNUd",
  "key42": "5AHq52VZSnrQvKNWjJnKSScNkSQENtJbStD2MUwvYQMvLL82zu7TyFfMgW9k78wpg9pNpxrNbBk2vsUSWeRv6wSv",
  "key43": "34aHoe2wxi8oUNyUSGaaF7k4fBUhuo9jKZqLVcm3mqie3uEyTz3oHX4C6jNCSZsxwRbqBSw2np4oYTKFecWN9Hpc",
  "key44": "1ovJSVrrqBVgjMbh95rmkHbnagbhAL3YoQTKwea7CpqfpcnrY3wQcNB4DK9RmG6uiDqxGKV5aQRpx44etCxC85r",
  "key45": "4FSn3VvQy9h4TuWvBcWQfsCgAs1nTp5NonJNVUWtVWMZsRtALq43fSfkYj9GJb4Mm7PC9AJAYywXNrR3hGLmzsgL",
  "key46": "569FxpGJovYCaFoeKjBaGAnq68eDABJn1Ae8WNUR9bQMjbLa9k4CpevLwpMqsNW9gQnoqSrmnkoAm8RMnzKgJCtg",
  "key47": "xbLrmj1t2JpoPYRvx8w2GuSaeSvZcUteqwBMJEA2e2nVpzY32T91id7W1QiAgRxoXzsLmq3pDt6NHbciTW3r89M",
  "key48": "4EwUBe9xaF83Zx5h6QdaE5x4ZPfZRoy2ecgcRXzFwNFjGxzC8niZ6aNXSrs61LF9XwvLXVWxJZooCJwx7mCfE63g",
  "key49": "4nLJRpEmBrtsMivkDDnsRyXwtW2SXG2tU956mNpftxLFSTAAHWKkpRjYRBwzxuz3Gjedc7dJNBRwa5PpQjhPmTkq"
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
