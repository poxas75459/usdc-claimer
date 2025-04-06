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
    "ke9jkEU2Zpn316xXDyNXjwmu3WAnFtf6BGZBRDNXcXm12We1qs9pKTx5n6J12wNghQTRaTK6qBeyEgirgHMHcFC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qzeCiSyoLcna6d5YFEg6GRYWNNMj4MrNrm783onvZQJXVRm5ihwsAmWLBdNNJu7wwH2531KTBXpC42R2Y81REjT",
  "key1": "k5e3a6yrY4oFC7KTaiwuD79F5Zgs7wxNrN61WDUN3Lznr3XJrNAt9XCMmZdhLYEfddJ4AYxpKRXJnjBK1VvsCGn",
  "key2": "3D85Jqv1vrwTL1GkvCzBodHXfHwLpD6StP6DezYDcPTSHKWH8i9jn8hfyfZHo6BGxCxiXNcYWcCmGQbWp7NnavTj",
  "key3": "2C6ncdWVbJGB85HLynNdkau6ki2VC6M7GuCpS4SVCLcSF5zv1qZTV1YExFyatMRKzVDMc6q11NR71abyFkxuzTQJ",
  "key4": "5eH9Uv4TaYz8vH8gGuRvXDGwF5VQ5TQshwFcGVfhKqWxtNKeJMA2uvMLxGsktQTjhTCkBXN1Tb4bD7Yz34NhAMbD",
  "key5": "qRy44Dx5A4LkgbiUfo2LS5qqUyKqaEBMrTRJk5iERi2qwduJGrBa3bunrYMpaRaEQMEg8Em1MU7MNqjQT6CFSUG",
  "key6": "3EeH8g5hgXXZ7KFKzBE7ohFgTkVxyAdW3ijZStpqV1CLGpjucEv6XeY2Yih619e4DkgijksmtXbQdFGJCNDkCLQQ",
  "key7": "48WezbSxCpgrFtrupQn7K9JUPGRU75wXc9BrYkKFM8VHR1UjP2CobP6mGgAzjYtAFgoiN3p8xyrb2sGJaQVLjDG4",
  "key8": "3tyVRzUpN8sWC3u2gcw7v4ox23ZMFQ8sSJjFi2tqrtdsLriSnr924iDQoR7czui9cKxXve3ZesBbAFEnE7qGtZ3S",
  "key9": "7hYZu5gi9CyLuQ6pgYAya4ECwkb3FJK98hqTQ84ZWiYZLu8sHYRAJMNJyLMQU178Mwz2vvA5jW8rnmpgWk3DXx9",
  "key10": "T3BoMsSAxebaBp2m5zyf6DcXQaQJR2KU42mZr1pLStsrsC4CxfetyUsgwxUZPvEs2DHvaCYZ39oRi5pN9GzN1wQ",
  "key11": "2doQbjPtVN3PdJYHiZ1PWbjhfpmYBc14v1hDywzrQh16Py5GU7EotkM4AX58oaEQS4dtf4QkH1txApavmxSgWoDG",
  "key12": "5XmDefRuHrVJES567wQSXhcpKRrFUqXSdjzwRkiy4GPS15vwPbWRodVAnpR8aa87SrWHfwH9TJiahPrZBUZd8hot",
  "key13": "3WQURAC9DDdjBBaY4uaS4WauP2TLsdQsuxnmRj846wNtsccZbbenqQxtehsjeyxt3UCHvjtfrevCqJUbxKR6dmRM",
  "key14": "5HgVJVoMxM8aNFzk4ZjCSsYexCHKQmDz3bRNZdz59LULs15MUc4GeTWj5QKXNqbzojgahjMZ8677VmZ4YKtYyyFn",
  "key15": "4buwoVUw8MjML473H4gZr1v5kKHFAvaLuMWs2kWNGNGhsEQFW7cpEjFhFZh5vAm8jRCFdA3GHvxG39ee1KVx31Hz",
  "key16": "5sKDstZNtKrCHEaydkDYuuhHfpfV9kVRHbKdtQuftY1gcE9Qvwnv9XnDNfHscETdiWYUVi1wihN5qGijhFZ4Vb3h",
  "key17": "4iqvSerD6R6hMP7zcadd9uknm2JHeVjK7eokxaX6zFUHpJd3H46cPcuwwVZmGGoik29oNQSF21NiViQaYa1ejcuT",
  "key18": "2J8kBAmud1BqS1Wtccxeo6w1fbwo26QtMguXJkLnJp5bXvcZ5fGRAKvPYHSgjeVuw8mpFfwi3VjtswAbAgbmTs7q",
  "key19": "4Hkawei3ip1miLcFft4pjoAzQqviq1STgbKaNwe4LA6AogMKCznX7zB4bzBZcNZpNkPALdooFC2cv2ZDXPJXGD8B",
  "key20": "vj3gGBHGzCkg27AeyqnYF8wuQTTdMEQ2VZENX95YKAMkBv7BdUmzaZTaZwfbBBhR1NCLvao1wj3qfiovmHE1Yuk",
  "key21": "3exU69Y2a2UHzPFBASJ7SeQ2mcMp7J8T3RNdh3KW7UUSDAjniwbW542SsY9dTASJfCUvyPYg1UTTmMY3eqChtS6x",
  "key22": "2AH4PrgsKP2acLHXWyxGwpA6F7z8pQhokfLooyRXMMxL3yttotwh97Cdp3Lh2VCQNbfs3evJ6NQUzr3eHYAdjyxQ",
  "key23": "5pFKcqgEU1AoY11kSbhCAJW8YmVgvx7vZLKtBKqnoctZfSGgZqLBuXG3w4qKRJjjhTRuuYTcqSfgLJ2YgtTKcQCL",
  "key24": "4ZffqKeKsCL5VEKD8NQJPSLEXLEj9GQmvse2ZdNKrzQo4SUPZiyB7W3KbFQQuFo2Sn3gvqm4YGac2XLJKxzSgTRA",
  "key25": "4VEyYZ2AzixXH23YzFKWCmHZsEGQHtCsNFJYb9LzKeGc5t8v4j4PU93eDEYKLf1UiGytwsEVTgM2kzzWnFTP7XQH",
  "key26": "3BfdHXK9XtyWmMtQvvrt3uC9cstYPQMHFxDGxgyJZnUbGk68Wbb9HHBidX1VzyfpQddd8Hh1LiiuJp8iGRBAq5QC",
  "key27": "3bUirbA7aaGgHLb6VdCEFSQqT6cLNy2J5Hu4bLERAHR8iHWupFXXJQjDQeXUcZLABARSRACpRDC2qLzNyQjW3BXp",
  "key28": "4x5pPkibWs14HGub3d7gmGNjnnXbxRAGPFaUHw6isptSUKWDoZXHjRjeSKsnuRmCw1HJtkf6b6WHjmuWQSMUBZC8",
  "key29": "32zj2y4ESAawCb9K4Q7DVcxsccRFnfyL4mmvukUNFoYsXzCvhR9QDsrKhCPfAXz7HGpXvXzo95B8zTP5bAk8wyVj",
  "key30": "578kTnLyPMUye2fCkr8JvvikP3fjXP2t1PGtBHDtiDMDZgaVBT8kyj7vodZmqUznu2U8iRaLg5242pvsyaE59S5U",
  "key31": "2A3bqKEEYuVrVAGBtJc2P7Y5FcyzEbHvraoCj3rnJPvPfaejamt8P7nFLMcNEycDmpqZpD1U3xKvhafUxCKvgLpD",
  "key32": "3Q8t1b1ToqPux6JUwAXeAv8mwowsCfk387G5P8NguNv8PvzJn5Vp4yuzdRUgtX6zqt7qnPtWgypSfvdGaXpsjF3j",
  "key33": "3BhAAupY3R4nSpCudNrCN7L2dUfeUqnV3eAzfLWcqc7NDUwZXzrokmSEhgWtH7UEgwPS4q2VJCPM95nAEFiehbEE",
  "key34": "5Uustdisq8LibzB3EpbEoopUHxdWFyr7opJjqPgRmzRb77HTzGf6pPBbB7w1nrUPPdQmaSGz9h7356fNZqk2tchP",
  "key35": "2cZebQwAsYb4WakGFM6QXntCz3FcrJHYJdW3eo4bhTDXX5jkXjkB8wMGenUtq6XgBAmWhuYYE1RKb5Da1kEmQFMi",
  "key36": "2DEKTWhBkxYt1WU9KLhbqLf1RPWyBxWBgGAZATZwXEEz7uhSQ9ER3J8y8vfbRgxubJadrGzsXqKJPnvnW6MQdV7C",
  "key37": "5qacZpycdAqGkF4Cb4dqTz4gbmNfZP5xz5kT3k4fmPCcNS3tcc2WUFsY8oE4fn6BWbhAuUacxLR6JRB1QJtMcwdP",
  "key38": "2sgtjDxwfCHsjeasLB9qc1fbcHZ1eLTEYL47J5C7hFQvo3oZr7wM8Uo3wU5Scejsa5eWRitLs9Xcr5ZqwvJ6EoNs",
  "key39": "2FBZ4dg3PskZm7xjynM78puBqB6tyFxnjtFn5FtiTD931QNZvELBjB7DYBc2ZL8fwiEjRnpd35fiWTU3fTwRMfcw",
  "key40": "4HpBPuKVc69ss2HDsiyosrxZiWqhe5cemBRfn3v4dWQmTM1LRrbgG8vVGehVmTVBZbK3y9PFzeTM97dtaoFFvnas",
  "key41": "2FhSiuPsQReyH9q98oZTWRVfHw2V4AcSpL99oFT9SfDSUNaTuxQZXk6xQojyLiDa3rnz3nW2T3PcK8Z1dtkHUZzk"
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
