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
    "2WbNxDX6Y1FEFVsZxVT5QgYsotQifkw1gY2ZmaBFyRAg1iHW4C1KQJ3veQjRPH4MwfvEMngcvecq5jVJWHutsJuW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xZw4uQiirxDW7zowFPh1WBZ7GFRmHE6giExLd1PbdQ6XL9BbS2gKExedWRX1hafFqfbq7hw9kvTgNtM5ECwoqCv",
  "key1": "2hqFfkhmckX6fmKbBV5kz9hZGFyJznRysH1mVyCWGNGcxMo3WpkaGTqRVx8aJPbDHqpyVyqrGUhXbvm75B9brNFB",
  "key2": "3A12RPJHMXvmzK6CikGiPoyTKgBtZsg4ZGw8yjaqGy6371Zwjn46Km1Tyw5VHZRRgud3hyaehTGqw2AG2Xue1bwL",
  "key3": "5DTTG5g8xJiKo4p7g2aqALb9aRWc1sDvkDLBVuzPrhqm6Yj8sK1antWbrsECnMmKSCWNHECmXtL28yQJPb58ofvt",
  "key4": "4Dvx6ERdBYYUZuV8CHPYqwP1oFswZfi9LqrYF3iarqe7kAPKjqnbfD2CUnx9QXraUrUz6aGZfMcgdcdza5WW6cLL",
  "key5": "4V2u2z6qoXzbeZVyxLN9nrKFBKgY7rnTB7szm2eHByQBLfarafqD8zB4byBThVGb5VHiQJdph9Q9LWU31JBV9xBE",
  "key6": "3b3wPkYDjGxVJdn77j2tnyKqXheu2rTx4KuBV3F6LqNYhH11nVVEPQThKc6zLXP4UdUTTtnmb4orrtXi28seTwrJ",
  "key7": "1czYWRCg4bAudb4D2U445Li1UbqdufxY1v4BoKSFeeB2veGE3rNS8Q2BWQjLU6dr7HyTWsaNy8muWCV4ZYsJ5dV",
  "key8": "47kdTYCEkXC4HfUL95GWMDYB6u9g4f7ude6DkrU9PdUL5m4atLAnzbCMrSedMwu5t2vSmekJjXNuiJ4Y7zvBQ6Np",
  "key9": "5YkGLD3EQZkaBjLYV4FTtW2VVBL7PA5FEn9Ubg489hpxiiaSPFuRyKpTRebPykJHhwSvKpGXafZkiKxK4N44jJxt",
  "key10": "3Lp4SVxM8QbwVZAcZjCk2QyqHRyDo98QVLxGJUnDdYrPCjMhjQy4h5XxE7B7YLZ3DYCHfLXuNFyrSSAHPc6gkXb5",
  "key11": "3nVc1rW2RCYR3P2TSP5E3LSDGukuMWPEJoFxAVB1oggr6uneU6au4THwksLCnztAnnaB82u87Ax73BjDo7Z8wuth",
  "key12": "4wbCrHdymn8b4amKRCFj3nUEZAQKvsuxGMQN5jegWYpy94PyS36xbMzoJRS6UJ8TR57fsg5NqesE9VSvjXFptSVR",
  "key13": "MY8rtuW91dT64QGtpj9ekZJU9p4wJss1ha4ZQdVnfVveXzn3pni8tbcveG19FKpGvrfPdivatxHnJqaCiF57uoA",
  "key14": "3X8dmmf9adinwXaUJBiEvauMCU1uvbVgzusEXfx43mot6zMKHpRa77o1oEtej1mHsigS2FzFtW4woMCb7nbBw4pP",
  "key15": "2kMMqv7yW1AY3XpcYgHprEHJtyPxPjHZDcdkYCRRoKLrf3sucG5umJXAVHjYSZgp9VthY4RokvWQ8g3SLNKtPhGE",
  "key16": "4eydeewKN4ZZRMSRVgKvmZ6aFGhoYqw95BntuhowMD7GVX683VxszHCopPm5vducvccZwFTZNHQD3T21pBgn5psp",
  "key17": "3cE1way8sv7VZx9puxwYEcFZgBz74uu85Y8pFpZYncTvPobbDNLFL75HRAPCty73gkcLuoJYgf414kaKHvvQLbKA",
  "key18": "2JReXn5QPTwL6KU3EkCZR7fQkFAwFReRqn1o4WuNvgr7gRGHJnToUULMCfyjEuqNDu2GebyQjPW8QgXzoXxAEiKk",
  "key19": "hUXiCortbrEUwPdD7HkWwKMvW9dYHNAfwN6GgWFfku5jBwZewZLASP9yKC1rWb52v9BWwQFh5R1fQ5su6ZTqRnU",
  "key20": "2gppvsX4Ck1XdLKH7VbM5jQ94szaTTBh1Kyr16rjp3FznYkNad6xEZYS2En3ordgMebZ2SM8kZVgoVkptD4ib67P",
  "key21": "3TgsvMWNy4mXT67Zf5WwKRWNd7PLnRmbzq6ykQ3VdQnYwjtUWJorDEYLtwehPF3p6qppkqQrY8nBqhJ8XBuMnQhj",
  "key22": "5f2t5zJARtHcaF7eLEfqkb92qosEbT4r95Vrui3kdTNQQKvkVkewAQF39im5yC6F45jeWzJ8Ud6J6bET83K4j9Gu",
  "key23": "4cc7Mna7CtQxJm6USFrfharkahtzvp8wswhKzdHYGh6JYKQBBdWyUX76ktkRxyf2BqLjq2aVoxB9R9ZMe6dywKVK",
  "key24": "4G5QNTt48zWXSZYgfnvpWeMQRXEEsswYEJU31g2h85s3mAhZJi3kNUqazipTQWSUdu7y4gZDrEwqDvTLu2BygYGf",
  "key25": "4mPSsiH3sSPdNiCxNpcS8AVvqbDAHW8fzPZhtsrMEC2urK495tCjmHGjSfno3YppA8YLLxm9aWiL9DcWZZ1Ny5yi",
  "key26": "277gvJ1aqYUfP2Tv7bvoD7FB5C2GXWHc51C6kKuAsaZx4zoYjBsds3g9uTea6AZcJsrfKhLHeZVza9EBmUe3dKd1",
  "key27": "5nweG8SSiEwvmNGaFg3Vfjx3MB2YqqDGfngzjeanprtuUkBY6KZxL8ofQ8iHmY59gyGL4kbtnMxBeNSY3iYw63SW",
  "key28": "65Rwa82u18RMp9BNXg46kV2eVrD3RNb3qgHb4itiW77jdqKvaaUd1Ja1672UhwC6mX3VoeohqpkfqonBtEjSNJhm",
  "key29": "2C6cmWsBpRG776n21E3P8uR3w6u7wr1m1CB8LS4NNULetRa79B4S7uXMY5T9nFVgLmrqRftXEyMWVp2o45qJWVY",
  "key30": "2vMyA5TZZSaHtyZQsZqW3JerptH7R2MAFByAdH2ADKvgTMNNLn1KB1VPXPbcBuxhVh8gQTFHf6xhfnawcBF2myLj",
  "key31": "5q445v5bsm71LtXhcFpyNtRQKtgingjV2pTKxrrQoq8oyNyAvW9Y8BfZPsNoa9hEEgbARQ2gVuPSGsv8R1YH7Rhh",
  "key32": "sUKaSze5H3yLYw7PE6MoixwrJpRARZZPwr9PNfo7oSCV8NDYCVbLoQCt6BiyaneEwv4tELMRyTL8R1h7nENRZHf",
  "key33": "ig3tVyVxXHhDmjChUx7STgxft7mjst6kCnM16njrTr1KYhicJbAua1NTizh54ZAxWJVr91uZzgrdw4vWKXepPmi",
  "key34": "5styGHEZ1ZaSupm4vSQ52au8CL3fEYUf78tefT9adCHKjJoMVMY6PECXrsJZ4n7kkfrbV57uRrUQFbEbGmNS8vMP",
  "key35": "2eUDy4a5uhSzo7ZB2dMhKctsgZAg65r5US4HHkVU6kh4g1irCqANVENPLjmgaP4BtHdQ5eNqmJRA57uWh8qHqU9x",
  "key36": "2mSADisApiYHvmeEqFadQzVKN4sdJSTuWLcXHinMzdPjvUUicb61sZ2hNNXvQFJjqYBjtzN5MLFH4KaJcWP4GwhY",
  "key37": "2CASznx1Nt7dqD9TkrEK3mgT3GR3WuqGX8fL7c1SxmMHLvrrePTTBbKDXx1WAW3q1SqQuxczxseBxMKzAT1NZUMk",
  "key38": "5XMtUmwGjbbrgXD6XCGBSLUiexkzhrvnCEx8mPshBtmGByP9ngz2J7pR5n7w4ibzQmS3X8bvhnVUxREjXaCJqvXk",
  "key39": "58Dk1oaaXAtpvUFATGwQnPpXmJzo23Nv2Y16oNMEhvC28AzJcwLdhPy9Y2iE4Jo1VkL53rKqvayxUQvQUQBVwCAG",
  "key40": "51LF8ERXgnWHnbAHGuuyD4XqMw725sMfbyX1K9C4Zocs6P72TW41BrjRQ3FmovDmGgkboSVo1hoV4jK5UXFtSP21",
  "key41": "63yNzsFJMx9nxVy3bm8qsw2w4sGvcjjVyHDNruDVLzLfgpxbeEgW8QEk2j8DFcuYvbzmhPeZtFL98vh2JJMtaWap",
  "key42": "3UzUVvxU89155vrtf7kNqqczGTYzqRFnu2iTjr4oAKoJWP5GcaLQkBKd7xjgcpv5dBbwKQ1j6EsFKqzwUsQrQ4qS",
  "key43": "2L2rTayDw8LqU4pMHbFzG8TKpLgfVAsuxvm1WMCBYDUBfNYNcDN9yHaNdVH6Ce92c2P9fL34fRkLBfYn3qsDVsZg",
  "key44": "42r5KeChpfGrkTJchs2aokjNwmWWa3fsGTN61TuVEVUzeZDzM1jyK4Wec8wFjAfmxZzjUBRBd239ek8TfXqkKUTw",
  "key45": "46WCWrtUdYmtArPQB2bHizeGdPn75JMgQjwUPbyBakRfXxy35CkW8BudiW1GdRRNwzQjtx3LVWm1t5UEydWgncwp"
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
