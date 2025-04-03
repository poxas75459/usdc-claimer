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
    "4SysdQp13vAdLLjW7UVn2SWEbtjYgH27T1a3ssk2vzRBNud8VSpkoLnGATVrXeKpw4aj4JadyZU7gCPu6Gp4iuwT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pGBDcZdP2tmNtj3zxURnoqsW5NYCD4xZUCzENSD941RvJV82ThNUHYjdmUuDvpjXYMJSKmPAP3toEzpqn415nrm",
  "key1": "567yCpJY5MPf9n23P3WSohmH5rxDRHBhcTa5HvunNHkbe9JjbSRo4GkdNYuv4VGXpZ81CJw4K53o2cSjYowUmb5t",
  "key2": "5NAeSN8J3MTxs8jVhX7qR81ZJwfUyC1nc3QkCPdZDLtzPscejetbbrT3zN5My3kg9FnGxiNs6bviNosTJnr33JiR",
  "key3": "63WfQBkSrq21c3KVvhAuWdPDjo791qyYuaSFNEHw5GX6Pc4VsQkTU7WvnEiCD3Qj1PQHhh6L49LbxFWxK6YQYfY6",
  "key4": "kFFxc7TptHjSzQkMfMsjaKHNyjnQABTYEjhxAsMMkNri3nsgus6j9G25g31KEcYLRQDFtwAtPLPHPpVtMQmJtF3",
  "key5": "3Wa7p3ybW3vdvj3FjEKXNU7abJU969Q9f3htFdQ1mwoDnEC2J4yo6TQ47UMppHS6dzrorgUrqeMfEErnMLU2C5r6",
  "key6": "3Tvn116yGkVhTyr555L8oAerFSwEnU2HhPTy5DzxsmnRAqsoQ45iUoyvewNpY2r4Hm57dBBPEowfFWmo2xubkpS7",
  "key7": "4TwLrHBwSBP8JdpcKq98W9z6MDNGLh6icsPthjokWzaZzwwKBjhH2b1XbTCzzENQYYCE1yEkbDWqPvD6ZGQ1TkVM",
  "key8": "3sJhWvnoxsnsxAW5Lc8r5chsLAnZaecGRjo7A823PAWu6ikUsP2bjrS9bYgJ6PAohpVb716xR7FGLKAEYPjwfd3U",
  "key9": "4iuasjvcGQk4STaZmEA49KBxgD5gx7tkGuoTmndNXJaV4TGpgLMYVdb6SU7CSt1FrNfw4wCASauaGFnpVxaAUA6e",
  "key10": "3sF4Pq6ePHR8Epca7Phvx41k7bdWt25utCkbWFgkG363RAMbKhT4SfafD1TzcfVrZAJwK7H2uLcMxy9k6tUCvMdK",
  "key11": "44ySKDD6JgVnFc2h6ZB92g5Mhm6fTZCUAwG489LSEe5waEDd4hPc13zdebf6wb7RVadpQxyjfyPeT8FeftEraCfL",
  "key12": "2xo9fGmYvF6m1cWibAtRJgjrzxbR7tJ1Y4Rywbdqka68ofv66YiNFwmQRBXkuiwEs9XkEYUgWQRat9D4FBk8Pq48",
  "key13": "2fnU4qt5KJJACMCaFSDPHftRxNBux9PAZLXkz59Q6gTDeENRPKn9zpv37mLJQySXZA6vnALihJdJK8QwbWxNiB7a",
  "key14": "55cQ4cH66TRg2DNJUhmiKzB51iLSuRSJ343kp1bnmDfGVZYf5n8ekBPH1FpKmZogViXyYX8HvNqH872SrGrEoc5D",
  "key15": "3mXrsdmdQtUaTapVxTjUyH3yErrjA6S3Q33hVpGv82y8oo4HEXkpcPgQdzseNVAMzQJs5bDaGjwLsFg18vVApX8j",
  "key16": "2tqtFensikw3VCn3WTFS9WFd6zHuksS22mJnW2TQn5fgKjq7grQ4NPvaeLZWKjUTeiVg3kUzqP3BzcfDAPRtfds5",
  "key17": "5uB9BhF9u2zuwM43mZuUxjeB6db6VKj9k7nh39b8dEEGtkKS5AcM9T9B1n7kxujVpNaNADd8VLpknCdanMpozGMF",
  "key18": "25pPc8MMWAJhvfQCSS8rjaF5XXjZJmXe1t7ssLWA1HanNwWkoHciqUq8XJNfBEPdS9eShyyn4gfnXkxDqoweCN91",
  "key19": "4afYTpFXycNm6auRxGFUEZabPFNzCJRJ2RB5MiqXrKugcnDFcvrhqL1QWjuA3RgHuZLLinLX7D1QCvdKNdoRruRs",
  "key20": "51EbFkD9coByEfofnx8D2gmD9EC3AURV13Dt3TLT1FDK5vMZ3Hp14iwzZqFpnYmzAewNe8tN9MNZdQscw7LZKxB7",
  "key21": "4SzHjut1MoLryxRXWbFLiwWyfbM1WVzvWsx6cnNuS5h8KiFvw5VCS6i3vm559kHjSFrU83TGutrGbgfbxSSxmLyg",
  "key22": "GAUe6Emdj31Ug7JEd5VsbBPQW9Zn5rY3aqd4UfNKdZkorwAatqYB8WKAJKf8N75CAMGuwoPpb1uavpNH6W2Ezd9",
  "key23": "5ZgZkabikBSXRz27WqMFdynBb6XcW9VQc1hdiNbz8aZPGAANdHPeL4GqLNLR3BHBptuJSn67SxEEKB3CVM3CqZ1o",
  "key24": "3EBgr4x5oAUFjLjoW5ysfniQziS8ZtH2LmxBuJRA5Sfr46Rjkee6FtbMs3HpPnz5a6p13EDLSPvADkSnV9PBQVBe",
  "key25": "JvMkNqZcRsAbkvSHytPfC5a8dHfvzVaXmsE2gmmo7gZywM1ewG937PLAwbAMqmkMXiPYvj83E3GwCqK2eQoRpWe",
  "key26": "5eCmkQXQcayACDs7bJMGQnFYdU3V3ji6hokty1sqq2PQWJc7KG9n5FSt5EsxtNhg9UZ1TtLPUTdwFox1vTh7T7Nv",
  "key27": "37M9dYhW8UK1Eah2BmgXtZTUHYVMaYg5tyBWpRB8dyXGCjXUbP5LuJe73isWPrgWBF8HHUbGakFD7WjB8RaXh3dp",
  "key28": "3iajXBBvrCEYZofaqf224UVEeNBSgoj61RWxZYoAzx8z1e2cC5U2UnPAZQWJzhnGShz5QV48Pme2vrD1MWXaoWX5",
  "key29": "5mKQXit1ZaKChWjk6UbJSQxa6p4WGWtLHhs7jo2onh6diRtNNotNnQWupAyaeB6CdcvR3kHUv3YmEDK5bDpXeM86",
  "key30": "4sfABXDjknTBmdsUeEJH9pkCjgfQmL26roc8naRNDtypzQsKTe7RQs2BBu8FXRkdz8ciUkKDUp6htvYGvTMh6GXn",
  "key31": "4njR8eHYEAAR9DdfFbWFpPjZ13YpmP7d9H89xc4o6r3obYEAMGbFnP8QRUMy6Ep4zYrecMiWsZctNDnqGcmWwC2b",
  "key32": "w1vaMVJjjo1prJ4Qf7pVYPiyoJ4ahzNKrYKszi4z6iMx2mCSQgYk5dGjarFE33sfFC8M2c7xUra6z51hBVe4BC6",
  "key33": "3KwjVaZ7vkEDVKrtKUcM7jjMLGKNnduFHBgy8jGYfoTWFk8p4xR2bkeA4nALRYUwSybNG2tC7aqc1a5EsDxzW1vZ",
  "key34": "4tmaGb5pFXeXhaKrP8jkKvws6xjWR6z7Ucu6MhSS1nfJnPjtFK6SypMXxwcZ2irq6JxJGFX2uG6jdRLBmBLJaHqo",
  "key35": "46tNmAAHNa4ucgRRucaFLb6BMpBDyCjqop6zPapkfLkDTU2Pa535J2BDzUoJ3tZGJpZjCPgec7pJ63io8ZE5xtdL",
  "key36": "FB6LVAXa5wV29VKyjurSfpJe5zf6F5E76Vtn4xje99NqFnRaiZRhyzS52byRrGanTamcHTR6DZ6QQmbaLauF2Yv"
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
